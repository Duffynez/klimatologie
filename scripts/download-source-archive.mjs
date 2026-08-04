import { createHash } from "node:crypto";
import { createReadStream, createWriteStream } from "node:fs";
import { mkdir, readFile, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { Readable, Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const root = path.resolve(import.meta.dirname, "..");
const auditPath = path.join(root, "audits", "source-downloadability.json");
const manifestPath = path.join(root, "audits", "source-download-manifest.json");
const csvPath = path.join(root, "audits", "source-download-manifest.csv");
const reportPath = path.join(root, "audits", "source-download-report.md");
const archiveDir = path.join(root, "source-archive");
const tempDir = path.join(archiveDir, ".partial");
const userAgent = "Klimatologie.eu public-source-archiver/1.0 (+https://klimatologie.eu)";
const concurrency = numberArgument("--concurrency", 4);
const maxFileBytes = numberArgument("--max-file-mb", 750) * 1024 * 1024;
const maxTotalBytes = numberArgument("--max-total-gb", 20) * 1024 * 1024 * 1024;
const limit = numberArgument("--limit", Infinity);
const phase = stringArgument("--phase", "all");
const retryFailed = process.argv.includes("--retry-failed");

if (!["all", "direct", "oa", "recovery"].includes(phase)) {
  throw new Error("--phase must be all, direct, oa, or recovery");
}

await mkdir(tempDir, { recursive: true });
for (const directory of ["primary", "related", "existing-drive", "open-access"]) {
  await mkdir(path.join(archiveDir, directory), { recursive: true });
}

const audit = JSON.parse(await readFile(auditPath, "utf8"));
const previousManifest = await readJson(manifestPath, { records: [] });
const results = new Map(previousManifest.records.map((record) => [record.id, record]));
let archivedBytes = [...results.values()]
  .filter((record) => ["downloaded", "already_present"].includes(record.status))
  .reduce(
    (sum, record) => sum + (record.bytes ?? 0)
      + (record.additionalFiles ?? []).reduce((fileSum, file) => fileSum + (file.bytes ?? 0), 0),
    0,
  );

const direct = audit.records.filter((record) => record.downloadUrl);
const openAccess = audit.records.filter(
  (record) => record.availability === "open_access_manual" && !record.downloadUrl,
);
const recovery = audit.records.filter((record) => {
  const previous = results.get(record.id);
  return previous && !["downloaded", "already_present"].includes(previous.status);
});
const selected = (phase === "recovery"
  ? recovery.map((record) => ({ record, mode: "recovery" }))
  : [
      ...(phase !== "oa" ? direct.map((record) => ({ record, mode: "direct" })) : []),
      ...(phase !== "direct" ? openAccess.map((record) => ({ record, mode: "oa" })) : []),
    ])
  .filter(({ record }) => shouldAttempt(record))
  .slice(0, limit);

console.log(`Archive: ${path.relative(root, archiveDir)}`);
console.log(`Candidates: ${selected.length} (${direct.length} direct, ${openAccess.length} open-access discovery)`);
console.log(`Limits: ${formatBytes(maxFileBytes)} per file, ${formatBytes(maxTotalBytes)} total`);

let completed = 0;
let persistence = Promise.resolve();
await runPool(selected, concurrency, async ({ record, mode }) => {
  let result;
  try {
    result = mode === "direct"
      ? await archiveDirect(record)
      : mode === "recovery"
        ? await archiveRecovery(record)
        : await archiveOpenAccess(record);
  } catch (error) {
    result = manifestRecord(record, {
      status: "failed",
      error: error instanceof Error ? error.message : String(error),
    });
  }

  const old = results.get(record.id);
  if (old && ["downloaded", "already_present"].includes(old.status)) {
    archivedBytes -= (old.bytes ?? 0)
      + (old.additionalFiles ?? []).reduce((sum, file) => sum + (file.bytes ?? 0), 0);
  }
  results.set(record.id, result);
  if (["downloaded", "already_present"].includes(result.status)) archivedBytes += result.bytes ?? 0;
  completed += 1;
  console.log(`[${completed}/${selected.length}] ${result.status}: ${record.id}${result.error ? ` - ${result.error}` : ""}`);
  persistence = persistence.then(() => persist([...results.values()]));
  await persistence;
});

await persistence;
await persist([...results.values()], true);
const finalRecords = [...results.values()].sort(
  (left, right) => Number(left.year ?? 9999) - Number(right.year ?? 9999) || left.title.localeCompare(right.title, "cs"),
);
const finalSummary = buildSummary(finalRecords);
console.log("\nDownload complete");
console.log(`Sources: ${finalSummary.sourceCount}`);
console.log(`Files: ${finalSummary.fileCount}`);
console.log(`Size: ${formatBytes(finalSummary.totalBytes)}`);
console.log(path.relative(root, manifestPath));
console.log(path.relative(root, reportPath));

function shouldAttempt(record) {
  const previous = results.get(record.id);
  if (!previous) return true;
  if (["downloaded", "already_present"].includes(previous.status)) return false;
  return retryFailed || previous.status !== "failed";
}

async function archiveDirect(record) {
  const directory = record.availability === "already_archived"
    ? "existing-drive"
    : record.downloadRelation === "linked-asset-needs-review"
      ? "related"
      : "primary";
  return attemptCandidates(record, [{ url: record.downloadUrl, source: "catalogue-direct" }], directory);
}

async function archiveRecovery(record) {
  if (record.downloadUrl) {
    const directResult = await archiveDirect(record);
    if (["downloaded", "already_present"].includes(directResult.status)) return directResult;
  }
  return archiveOpenAccess(record);
}

async function archiveOpenAccess(record) {
  const doi = extractDoi(record.externalUrl) ?? extractDoi(record.resolvedUrl) ?? doiFromId(record.id);
  const candidates = await providerCandidates(record, doi);
  if (doi) {
    candidates.push(...await semanticScholarCandidates(doi));
    const openAlex = await openAlexCandidates(doi);
    candidates.push(...openAlex.files);
    for (const page of openAlex.pages.slice(0, 6)) candidates.push(...await pdfLinksFromPage(page.url, page.source));
    candidates.push(...await crossrefCandidates(doi));
  }
  if (record.resolvedUrl && !isDoiUrl(record.resolvedUrl)) {
    candidates.push(...await pdfLinksFromPage(record.resolvedUrl));
  }
  if (record.externalUrl && record.externalUrl !== record.resolvedUrl && !isDoiUrl(record.externalUrl)) {
    candidates.push(...await pdfLinksFromPage(record.externalUrl));
  }

  const unique = uniqueCandidates(candidates);
  if (unique.length === 0) {
    return manifestRecord(record, {
      status: "no_public_file_found",
      discovery: doi ? "OpenAlex and public landing pages" : "public landing pages",
      error: "No direct public PDF URL was discovered.",
    });
  }
  return attemptCandidates(record, unique, "open-access");
}

async function attemptCandidates(record, candidates, directory) {
  const failures = [];
  for (const candidate of candidates.slice(0, 12)) {
    if (archivedBytes >= maxTotalBytes) {
      return manifestRecord(record, {
        status: "skipped_total_limit",
        error: `Archive reached its ${formatBytes(maxTotalBytes)} safety limit.`,
      });
    }
    try {
      return await downloadOne(record, candidate, directory);
    } catch (error) {
      failures.push(`${candidate.source}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  return manifestRecord(record, {
    status: "failed",
    attemptedUrls: candidates.slice(0, 12).map(({ url, source }) => ({ url, source })),
    error: failures.join(" | ").slice(0, 4000),
  });
}

async function downloadOne(record, candidate, directory) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20 * 60_000);
  timeout.unref();
  let meter;
  let idleWatchdog;
  const clearRequestTimeouts = () => {
    clearTimeout(timeout);
    clearInterval(idleWatchdog);
  };
  let response;
  try {
    response = await fetch(candidate.url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": userAgent,
        Accept: "application/pdf,application/zip,application/gzip,text/plain,text/csv,application/octet-stream,*/*;q=0.5",
      },
    });
  } catch (error) {
    clearRequestTimeouts();
    throw error;
  }
  if (!response.ok) {
    clearRequestTimeouts();
    throw new Error(`HTTP ${response.status}`);
  }
  if (!response.body) {
    clearRequestTimeouts();
    throw new Error("Empty response body");
  }

  const declaredLength = Number(response.headers.get("content-length"));
  if (declaredLength > maxFileBytes) {
    clearRequestTimeouts();
    throw new Error(`File is larger than ${formatBytes(maxFileBytes)}`);
  }
  const contentType = response.headers.get("content-type")?.split(";")[0].trim().toLowerCase() ?? null;
  const disposition = response.headers.get("content-disposition");
  const extension = chooseExtension(record.format, contentType, disposition, response.url);
  const baseName = safeFileName(`${record.year ?? "undated"}__${record.id}__${record.title}`);
  const finalPath = path.join(archiveDir, directory, `${baseName}.${extension}`);
  const partialPath = path.join(tempDir, `${baseName}.${process.pid}.${Date.now()}.part`);
  const hash = createHash("sha256");
  let bytes = 0;
  let lastDataAt = Date.now();
  meter = new Transform({
    transform(chunk, _encoding, callback) {
      lastDataAt = Date.now();
      bytes += chunk.length;
      if (bytes > maxFileBytes) return callback(new Error(`File exceeded ${formatBytes(maxFileBytes)}`));
      hash.update(chunk);
      callback(null, chunk);
    },
  });
  const output = createWriteStream(partialPath, { flags: "wx" });
  let rejectIdle;
  const idleFailure = new Promise((_, reject) => {
    rejectIdle = reject;
  });
  idleWatchdog = setInterval(() => {
    if (Date.now() - lastDataAt < 45_000) return;
    const error = new Error("No response data received for 45 seconds");
    controller.abort(error);
    meter.destroy(error);
    output.destroy(error);
    rejectIdle(error);
  }, 5_000);
  idleWatchdog.unref();

  try {
    await Promise.race([
      pipeline(Readable.fromWeb(response.body), meter, output),
      idleFailure,
    ]);
    if (bytes === 0) throw new Error("Downloaded file is empty");
    const signature = await readSignature(partialPath, 16);
    validateContent(record, extension, contentType, signature);
    await rename(partialPath, finalPath);
  } catch (error) {
    await unlink(partialPath).catch(() => {});
    clearRequestTimeouts();
    throw error;
  }
  clearRequestTimeouts();

  return manifestRecord(record, {
    status: "downloaded",
    sourceKind: candidate.source,
    requestedUrl: candidate.url,
    finalUrl: response.url,
    localPath: path.relative(root, finalPath).replaceAll("\\", "/"),
    bytes,
    sha256: hash.digest("hex"),
    contentType,
    extension,
    downloadedAt: new Date().toISOString(),
  });
}

async function openAlexCandidates(doi) {
  const endpoint = `https://api.openalex.org/works/https://doi.org/${encodeURI(doi)}`;
  try {
    const response = await fetch(endpoint, { headers: { "User-Agent": userAgent, Accept: "application/json" } });
    if (!response.ok) return { files: [], pages: [] };
    const work = await response.json();
    const locations = [work.best_oa_location, work.primary_location, ...(work.locations ?? [])].filter(Boolean);
    return {
      files: locations.filter((location) => location.pdf_url).map((location) => ({
        url: location.pdf_url,
        source: `OpenAlex:${location.source?.host_organization_name ?? location.source?.display_name ?? "location"}`,
        license: location.license ?? null,
      })),
      pages: locations.filter((location) => location.landing_page_url).map((location) => ({
        url: location.landing_page_url,
        source: `OpenAlex-page:${location.source?.display_name ?? "location"}`,
      })),
    };
  } catch {
    return { files: [], pages: [] };
  }
}

async function crossrefCandidates(doi) {
  try {
    const endpoint = `https://api.crossref.org/works/${encodeURIComponent(doi)}`;
    const response = await fetch(endpoint, { headers: { "User-Agent": userAgent, Accept: "application/json" } });
    if (!response.ok) return [];
    const work = (await response.json()).message;
    return (work.link ?? [])
      .filter((link) => link.URL && (/pdf/i.test(link["content-type"] ?? "") || /pdf|full.?text|download/i.test(link.URL)))
      .map((link) => ({ url: link.URL, source: "Crossref-full-text" }));
  } catch {
    return [];
  }
}

async function semanticScholarCandidates(doi) {
  try {
    const endpoint = `https://api.semanticscholar.org/graph/v1/paper/DOI:${encodeURIComponent(doi)}?fields=openAccessPdf`;
    const response = await fetch(endpoint, { headers: { "User-Agent": userAgent, Accept: "application/json" } });
    if (!response.ok) return [];
    const pdf = (await response.json()).openAccessPdf;
    return pdf?.url ? [{ url: pdf.url, source: "Semantic-Scholar-open-access" }] : [];
  } catch {
    return [];
  }
}

async function providerCandidates(record, doi) {
  const candidates = [];
  const urls = [record.resolvedUrl, record.externalUrl].filter(Boolean);

  for (const url of urls) {
    const eScholarship = url.match(/escholarship\.org\/uc\/item\/([a-z0-9]+)/i);
    if (eScholarship) {
      const id = eScholarship[1];
      candidates.push({ url: `https://escholarship.org/content/qt${id}/qt${id}.pdf`, source: "eScholarship-stable-PDF" });
    }

    const zenodo = url.match(/zenodo\.org\/(?:record|records)\/(\d+)/i);
    if (zenodo) candidates.push(...await zenodoCandidates(zenodo[1]));

    const figshare = url.match(/figshare\.com\/articles\/(?:[^/]+\/)?[^/]+\/(\d+)/i);
    if (figshare) candidates.push(...await figshareCandidates(figshare[1]));

    const bhl = url.match(/biodiversitylibrary\.org\/item\/(\d+)/i);
    if (bhl) candidates.push({ url: `https://www.biodiversitylibrary.org/itempdf/${bhl[1]}`, source: "BHL-item-PDF" });

    const historicalAms = url.match(/journals\.ametsoc\.org\/view\/(.+)\.xml(?:$|[?#])/i);
    if (historicalAms) candidates.push({ url: `https://journals.ametsoc.org/downloadpdf/view/${historicalAms[1]}.pdf`, source: "AMS-article-PDF" });
  }

  if (doi?.toLowerCase().startsWith("10.1594/pangaea.")) {
    candidates.push({ url: `https://doi.pangaea.de/${doi}?format=textfile`, source: "PANGAEA-text-export" });
  }
  if (doi?.toLowerCase().startsWith("10.5281/zenodo.")) {
    candidates.push(...await zenodoCandidates(doi.split(".").at(-1)));
  }
  if (doi?.toLowerCase().startsWith("10.6084/m9.figshare.")) {
    const id = doi.match(/figshare\.(?:c\.)?(\d+)/i)?.[1];
    if (id && !doi.toLowerCase().includes("figshare.c.")) candidates.push(...await figshareCandidates(id));
  }
  return candidates;
}

async function zenodoCandidates(id) {
  try {
    const response = await fetch(`https://zenodo.org/api/records/${id}`, { headers: { "User-Agent": userAgent, Accept: "application/json" } });
    if (!response.ok) return [];
    const record = await response.json();
    return (record.files ?? []).map((file) => ({
      url: file.links?.content ?? file.links?.self,
      source: "Zenodo-file",
    })).filter((candidate) => candidate.url);
  } catch {
    return [];
  }
}

async function figshareCandidates(id) {
  try {
    const response = await fetch(`https://api.figshare.com/v2/articles/${id}`, { headers: { "User-Agent": userAgent, Accept: "application/json" } });
    if (!response.ok) return [];
    const article = await response.json();
    return (article.files ?? []).map((file) => ({ url: file.download_url, source: "Figshare-file" })).filter((candidate) => candidate.url);
  } catch {
    return [];
  }
}

async function pdfLinksFromPage(pageUrl, sourceLabel = null) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30_000);
    const response = await fetch(pageUrl, {
      redirect: "follow",
      signal: controller.signal,
      headers: { "User-Agent": userAgent, Accept: "text/html,application/xhtml+xml" },
    }).finally(() => clearTimeout(timeout));
    if (!response.ok) return [];
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("application/pdf")) return [{ url: response.url, source: "public-landing-direct" }];
    const html = await response.text();
    const candidates = [];
    for (const match of html.matchAll(/(?:href|content)=["']([^"']+)["']/gi)) {
      const raw = match[1].replaceAll("&amp;", "&");
      if (!/pdf|download|full.?text|bitstream/i.test(raw)) continue;
      try {
        const url = new URL(raw, response.url).href;
        if (/\.pdf(?:$|[?#])|download|bitstream|full.?text/i.test(url)) {
          candidates.push({ url, source: sourceLabel ?? `landing-page:${new URL(response.url).hostname}` });
        }
      } catch {
        // Ignore malformed links in third-party pages.
      }
    }
    return candidates;
  } catch {
    return [];
  }
}

function validateContent(record, extension, contentType, signature) {
  const text = signature.toString("utf8").trimStart().toLowerCase();
  if (extension === "pdf" && !signature.subarray(0, 5).equals(Buffer.from("%PDF-"))) {
    throw new Error(`Expected PDF, received ${contentType ?? "unknown content"}`);
  }
  if (["html", "htm"].includes(extension) || text.startsWith("<!doctype") || text.startsWith("<html")) {
    throw new Error(`Received an HTML/login page instead of ${record.format ?? "a source file"}`);
  }
  if (extension === "zip" && !signature.subarray(0, 2).equals(Buffer.from("PK"))) {
    throw new Error(`Expected ZIP, received ${contentType ?? "unknown content"}`);
  }
}

async function persist(records, full = false) {
  const sorted = [...records].sort(
    (left, right) => Number(left.year ?? 9999) - Number(right.year ?? 9999) || left.title.localeCompare(right.title, "cs"),
  );
  const summary = buildSummary(sorted);
  await writeWithRetry(manifestPath, `${JSON.stringify({ summary, records: sorted }, null, 2)}\n`);
  if (full) {
    await writeWithRetry(csvPath, toCsv(sorted));
    await writeWithRetry(reportPath, toMarkdown(sorted, summary));
  }
}

async function writeWithRetry(filePath, content) {
  let lastError;
  for (let attempt = 0; attempt < 6; attempt += 1) {
    try {
      await writeFile(filePath, content, "utf8");
      return;
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 100 * (attempt + 1)));
    }
  }
  throw lastError;
}

function buildSummary(records) {
  const byStatus = countBy(records, (record) => record.status);
  const downloaded = records.filter((record) => ["downloaded", "already_present"].includes(record.status));
  const additionalFiles = downloaded.flatMap((record) => record.additionalFiles ?? []);
  return {
    generatedAt: new Date().toISOString(),
    archivePath: path.relative(root, archiveDir).replaceAll("\\", "/"),
    recordCount: records.length,
    sourceCount: downloaded.length,
    fileCount: downloaded.length + additionalFiles.length,
    totalBytes: downloaded.reduce((sum, record) => sum + (record.bytes ?? 0), 0)
      + additionalFiles.reduce((sum, file) => sum + (file.bytes ?? 0), 0),
    byStatus,
    limits: { maxFileBytes, maxTotalBytes },
  };
}

function manifestRecord(record, extra) {
  return {
    id: record.id,
    title: record.title,
    author: record.author,
    year: record.year,
    type: record.type,
    category: record.category,
    sourceUrl: record.externalUrl ?? record.resolvedUrl ?? null,
    catalogueDownloadUrl: record.downloadUrl ?? null,
    availability: record.availability,
    downloadRelation: record.downloadRelation,
    license: record.license,
    publicSharing: record.publicSharing,
    checkedAt: new Date().toISOString(),
    ...extra,
  };
}

function chooseExtension(format, contentType, disposition, url) {
  const normalized = String(format ?? "").toLowerCase();
  const known = { pdf: "pdf", txt: "txt", gzip: "gz", zip: "zip", csv: "csv", xlsx: "xlsx", jpg: "jpg", jpeg: "jpg", netcdf: "nc", mp4: "mp4", png: "png" };
  if (known[normalized]) return known[normalized];
  const fileName = disposition?.match(/filename\*?=(?:UTF-8''|["']?)([^"';]+)/i)?.[1];
  const extensionFromName = path.extname(decodeURIComponent(fileName ?? "")).slice(1).toLowerCase();
  if (known[extensionFromName]) return known[extensionFromName];
  const extensionFromUrl = path.extname(new URL(url).pathname).slice(1).toLowerCase();
  if (known[extensionFromUrl]) return known[extensionFromUrl];
  const byType = {
    "application/pdf": "pdf",
    "application/zip": "zip",
    "application/gzip": "gz",
    "text/plain": "txt",
    "text/csv": "csv",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
    "image/jpeg": "jpg",
    "image/png": "png",
    "video/mp4": "mp4",
  };
  return byType[contentType] ?? "bin";
}

function safeFileName(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^[-.]+|[-.]+$/g, "")
    .slice(0, 180);
}

function extractDoi(url) {
  if (!url) return null;
  const match = decodeURIComponent(url).match(/(?:doi\.org\/|doi:\s*)(10\.\d{4,9}\/[^?#\s]+)/i);
  return match?.[1]?.replace(/[).,;]+$/, "") ?? null;
}

function doiFromId(id) {
  if (!id.startsWith("DOI_10_")) return null;
  return id.slice(4).replace(/^10_/, "10.").replaceAll("_", "/");
}

function isDoiUrl(url) {
  return /doi\.org/i.test(url ?? "");
}

function uniqueCandidates(candidates) {
  const seen = new Set();
  return candidates.filter(({ url }) => {
    const key = url?.replace(/^http:/, "https:");
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function readSignature(filePath, length) {
  const chunks = [];
  let bytes = 0;
  for await (const chunk of createReadStream(filePath, { start: 0, end: length - 1 })) {
    chunks.push(chunk);
    bytes += chunk.length;
    if (bytes >= length) break;
  }
  return Buffer.concat(chunks).subarray(0, length);
}

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await readFile(filePath, "utf8"));
  } catch (error) {
    if (error?.code === "ENOENT") return fallback;
    throw error;
  }
}

async function runPool(items, size, worker) {
  let index = 0;
  await Promise.all(Array.from({ length: Math.min(size, items.length) }, async () => {
    while (index < items.length) {
      const current = items[index];
      index += 1;
      await worker(current);
    }
  }));
}

function toCsv(records) {
  const fields = ["id", "year", "title", "status", "sourceKind", "sourceUrl", "requestedUrl", "finalUrl", "localPath", "bytes", "sha256", "contentType", "license", "publicSharing", "error"];
  return `${fields.join(",")}\n${records.map((record) => fields.map((field) => csvCell(record[field])).join(",")).join("\n")}\n`;
}

function csvCell(value) {
  const text = value == null ? "" : typeof value === "string" ? value : JSON.stringify(value);
  return `"${text.replaceAll('"', '""')}"`;
}

function toMarkdown(records, summary) {
  const lines = [
    "# Lokální archiv zdrojů",
    "",
    `Aktualizováno: ${summary.generatedAt}`,
    "",
    `- Stažených souborů: **${summary.fileCount}**`,
    `- Celková velikost: **${formatBytes(summary.totalBytes)}**`,
    `- Umístění archivu: \`${summary.archivePath}\``,
    "",
    "## Výsledek",
    "",
    ...Object.entries(summary.byStatus).sort().map(([status, count]) => `- ${status}: ${count}`),
    "",
    "## Nestažené položky",
    "",
    "| Rok | Zdroj | Stav | Důvod |",
    "| ---: | --- | --- | --- |",
    ...records
      .filter((record) => !["downloaded", "already_present"].includes(record.status))
      .map((record) => `| ${record.year ?? ""} | ${escapeMarkdown(record.title)} | ${record.status} | ${escapeMarkdown(record.error ?? "")} |`),
    "",
    "Skript používá pouze veřejné odkazy bez přihlášení. Neobchází paywally ani technická omezení poskytovatelů.",
    "",
  ];
  return lines.join("\n");
}

function escapeMarkdown(value) {
  return String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
}

function countBy(items, key) {
  return Object.fromEntries([...items.reduce((map, item) => {
    const value = key(item);
    map.set(value, (map.get(value) ?? 0) + 1);
    return map;
  }, new Map()).entries()].sort());
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes) || bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / (1024 ** index)).toFixed(index === 0 ? 0 : 2)} ${units[index]}`;
}

function numberArgument(name, fallback) {
  const value = process.argv.find((argument) => argument.startsWith(`${name}=`))?.split("=")[1];
  return value == null ? fallback : Number(value);
}

function stringArgument(name, fallback) {
  return process.argv.find((argument) => argument.startsWith(`${name}=`))?.split("=")[1] ?? fallback;
}
