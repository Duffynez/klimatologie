import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const archiveDir = path.join(root, "source-archive");
const manifestPath = path.join(root, "audits", "source-download-manifest.json");
const auditPath = path.join(root, "audits", "source-downloadability.json");
const repair = process.argv.includes("--repair");

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const audit = JSON.parse(await readFile(auditPath, "utf8"));
const auditById = new Map(audit.records.map((record) => [record.id, record]));
const manifestByPath = new Map(
  manifest.records.flatMap((record) => [
    ...(record.localPath ? [[normalize(record.localPath), record]] : []),
    ...(record.additionalFiles ?? []).map((file) => [normalize(file.localPath), file]),
  ]),
);
const manifestById = new Map(manifest.records.map((record) => [record.id, record]));
const files = (await listFiles(archiveDir)).filter((file) => !normalize(file).includes("/.partial/"));
const issues = [];
const repaired = [];
let checkedBytes = 0;

for (let index = 0; index < files.length; index += 1) {
  const filePath = files[index];
  const relativePath = normalize(path.relative(root, filePath));
  const fileStat = await stat(filePath);
  const signature = await readSignature(filePath, 16);
  const extension = path.extname(filePath).slice(1).toLowerCase();
  const formatError = validateFormat(extension, signature);
  if (formatError) issues.push({ type: "invalid-format", path: relativePath, detail: formatError });

  const sha256 = await hashFile(filePath);
  checkedBytes += fileStat.size;
  const known = manifestByPath.get(relativePath);
  if (known) {
    if (known.bytes !== fileStat.size) issues.push({ type: "size-mismatch", path: relativePath, detail: `${known.bytes} != ${fileStat.size}` });
    if (known.sha256 !== sha256) issues.push({ type: "hash-mismatch", path: relativePath, detail: `${known.sha256} != ${sha256}` });
  } else {
    const id = path.basename(filePath).split("__")[1];
    const source = auditById.get(id);
    if (!source) {
      issues.push({ type: "orphan-without-source", path: relativePath, detail: id ?? "ID not found in filename" });
    } else if (repair && !formatError) {
      const record = manifestById.get(id) ?? {
        id: source.id,
        title: source.title,
        author: source.author,
        year: source.year,
        type: source.type,
        category: source.category,
        sourceUrl: source.externalUrl ?? source.resolvedUrl ?? null,
        catalogueDownloadUrl: source.downloadUrl ?? null,
        availability: source.availability,
        downloadRelation: source.downloadRelation,
        license: source.license,
        publicSharing: source.publicSharing,
      };
      const downloadedFile = {
        localPath: relativePath,
        bytes: fileStat.size,
        sha256,
        extension,
        checkedAt: new Date().toISOString(),
      };
      if (record.localPath && normalize(record.localPath) !== relativePath) {
        record.additionalFiles ??= [];
        if (!record.additionalFiles.some((file) => normalize(file.localPath) === relativePath)) {
          record.additionalFiles.push(downloadedFile);
        }
        Object.assign(record, {
          status: "downloaded",
          checkedAt: downloadedFile.checkedAt,
          error: undefined,
        });
      } else {
        Object.assign(record, {
          status: "downloaded",
          sourceKind: "reconciled-local-download",
          ...downloadedFile,
          downloadedAt: record.downloadedAt ?? new Date().toISOString(),
          error: undefined,
        });
      }
      if (!manifestById.has(id)) manifest.records.push(record);
      manifestById.set(id, record);
      manifestByPath.set(relativePath, downloadedFile);
      repaired.push({ id, path: relativePath });
    } else {
      issues.push({ type: "orphan", path: relativePath, detail: id });
    }
  }

  if ((index + 1) % 25 === 0 || index + 1 === files.length) {
    console.log(`Verified ${index + 1}/${files.length}`);
  }
}

for (const record of manifest.records.filter((item) => item.localPath)) {
  for (const storedFile of [{ localPath: record.localPath }, ...(record.additionalFiles ?? [])]) {
    if (!files.some((file) => normalize(path.relative(root, file)) === normalize(storedFile.localPath))) {
      issues.push({ type: "missing-file", path: storedFile.localPath, detail: record.id });
    }
  }
}

if (repair && repaired.length > 0) {
  const downloaded = manifest.records.filter((record) => ["downloaded", "already_present"].includes(record.status));
  const additionalFiles = downloaded.flatMap((record) => record.additionalFiles ?? []);
  manifest.summary = {
    ...manifest.summary,
    generatedAt: new Date().toISOString(),
    recordCount: manifest.records.length,
    sourceCount: downloaded.length,
    fileCount: downloaded.length + additionalFiles.length,
    totalBytes: downloaded.reduce((sum, record) => sum + (record.bytes ?? 0), 0)
      + additionalFiles.reduce((sum, file) => sum + (file.bytes ?? 0), 0),
    byStatus: countBy(manifest.records, (record) => record.status),
  };
  manifest.records.sort(
    (left, right) => Number(left.year ?? 9999) - Number(right.year ?? 9999) || left.title.localeCompare(right.title, "cs"),
  );
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

console.log("\nVerification complete");
console.log(`Files: ${files.length}`);
console.log(`Bytes checked: ${checkedBytes}`);
console.log(`Repaired manifest records: ${repaired.length}`);
console.log(`Issues: ${issues.length}`);
for (const issue of issues) console.log(`${issue.type}: ${issue.path} (${issue.detail})`);
if (issues.length > 0) process.exitCode = 1;

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const filePath = path.join(directory, entry.name);
    return entry.isDirectory() ? listFiles(filePath) : [filePath];
  }));
  return nested.flat();
}

async function hashFile(filePath) {
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(filePath)) hash.update(chunk);
  return hash.digest("hex");
}

async function readSignature(filePath, length) {
  const chunks = [];
  for await (const chunk of createReadStream(filePath, { start: 0, end: length - 1 })) chunks.push(chunk);
  return Buffer.concat(chunks).subarray(0, length);
}

function validateFormat(extension, signature) {
  const text = signature.toString("utf8").trimStart().toLowerCase();
  if (extension === "pdf" && !signature.subarray(0, 5).equals(Buffer.from("%PDF-"))) return "PDF signature is missing";
  if (extension === "zip" && !signature.subarray(0, 2).equals(Buffer.from("PK"))) return "ZIP signature is missing";
  if (["html", "htm"].includes(extension) || text.startsWith("<!doctype") || text.startsWith("<html")) return "HTML page stored as source file";
  return null;
}

function normalize(value) {
  return value.replaceAll("\\", "/").toLowerCase();
}

function countBy(items, key) {
  return Object.fromEntries([...items.reduce((map, item) => {
    const value = key(item);
    map.set(value, (map.get(value) ?? 0) + 1);
    return map;
  }, new Map()).entries()].sort());
}
