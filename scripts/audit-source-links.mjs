import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const componentsDir = path.join(root, "app", "components");
const sourceFiles = ["sources.ts", "articleSources.ts"];
const sourceTexts = await Promise.all(sourceFiles.map(async (file) => {
  try {
    return await readFile(path.join(root, "app", "data", file), "utf8");
  } catch (error) {
    if (error?.code === "ENOENT") return "";
    throw error;
  }
}));
const sourceText = sourceTexts.join("\n");
const sourceRecords = [...sourceText.matchAll(/^\s*\{[^\n]*\bid:\s*"([^"]+)"[^\n]*\},?$/gm)]
  .map((match) => {
    const url = match[0].match(/\bexternalUrl:\s*"([^"]+)"/)?.[1];
    return { id: match[1], url: url ? normalizeUrl(url) : null };
  });
const sourceIds = new Set(sourceRecords.map((source) => source.id));
const sourceUrls = new Map(sourceRecords.filter((source) => source.url).map((source) => [source.url, source.id]));
const duplicateIds = duplicates(sourceRecords.map((source) => source.id));
const duplicateUrls = duplicates(sourceRecords.map((source) => source.url).filter(Boolean));
const malformedMetadata = sourceText.match(/author:\s*"doi\.org"|<\/?(?:sub|sup|i)>|�/g) ?? [];

const articleFiles = (await readdir(componentsDir))
  .filter((name) => name.endsWith("Article.tsx"))
  .sort();

const legacyLinks = [];
const directLinks = [];
const idReferences = [];

for (const file of articleFiles) {
  const text = await readFile(path.join(componentsDir, file), "utf8");

  for (const match of text.matchAll(/<ReferenceLink\s+href="([^"]+)">([\s\S]*?)<\/ReferenceLink>/g)) {
    legacyLinks.push({
      file,
      line: lineAt(text, match.index),
      url: match[1],
      label: plainText(match[2]),
      sourceId: sourceUrls.get(normalizeUrl(match[1])) ?? null,
    });
  }

  for (const match of text.matchAll(/<a\b[^>]*\bhref="(https?:\/\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) {
    directLinks.push({
      file,
      line: lineAt(text, match.index),
      url: match[1],
      label: plainText(match[2]),
      sourceId: sourceUrls.get(normalizeUrl(match[1])) ?? null,
    });
  }

  for (const match of text.matchAll(/<(?:Citation|SourceLink)\s+id="([^"]+)"/g)) {
    idReferences.push({
      file,
      line: lineAt(text, match.index),
      sourceId: match[1],
      exists: sourceIds.has(match[1]),
    });
  }
}

const uniqueLegacy = uniqueByUrl(legacyLinks);
const unresolvedLegacy = uniqueLegacy.filter((item) => !item.sourceId);
const unresolvedDirect = uniqueByUrl(directLinks).filter((item) => !item.sourceId);
const missingIds = idReferences.filter((item) => !item.exists);

if (process.argv.includes("--json")) {
  process.stdout.write(
    `${JSON.stringify({ legacyLinks, directLinks, unresolvedLegacy, unresolvedDirect, missingIds, duplicateIds, duplicateUrls, malformedMetadata }, null, 2)}\n`,
  );
} else {
  console.log(`Article files: ${articleFiles.length}`);
  console.log(`Legacy link occurrences: ${legacyLinks.length}`);
  console.log(`Unique legacy URLs: ${uniqueLegacy.length}`);
  console.log(`Legacy URLs missing from the source catalogue: ${unresolvedLegacy.length}`);
  console.log(`Direct external URLs missing from the source catalogue: ${unresolvedDirect.length}`);
  console.log(`Citation or SourceLink IDs missing from the source catalogue: ${missingIds.length}`);
  console.log(`Duplicate source IDs: ${duplicateIds.length}`);
  console.log(`Duplicate external URLs: ${duplicateUrls.length}`);
  console.log(`Malformed source metadata markers: ${malformedMetadata.length}`);

  if (unresolvedLegacy.length) {
    console.log("\nUnresolved legacy URLs:");
    for (const item of unresolvedLegacy) {
      console.log(`${item.file}:${item.line}\t${item.label}\t${item.url}`);
    }
  }
}

if (process.argv.includes("--check") && (
  legacyLinks.length
  || directLinks.length
  || missingIds.length
  || duplicateIds.length
  || duplicateUrls.length
  || malformedMetadata.length
)) {
  process.exitCode = 1;
}

function normalizeUrl(value) {
  const trimmed = value.trim();
  if (/^https?:\/\/(?:dx\.)?doi\.org\//i.test(trimmed)) {
    return trimmed
      .replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, "https://doi.org/")
      .replace(/%3C/gi, "<")
      .replace(/%3E/gi, ">")
      .toLowerCase();
  }

  return trimmed.replace(/\/$/, "");
}

function lineAt(text, index) {
  return text.slice(0, index).split("\n").length;
}

function plainText(value) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/\{" "\}/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function uniqueByUrl(items) {
  const unique = new Map();
  for (const item of items) {
    const key = normalizeUrl(item.url);
    if (!unique.has(key)) unique.set(key, item);
  }
  return [...unique.values()];
}

function duplicates(items) {
  const counts = new Map();
  for (const item of items) counts.set(item, (counts.get(item) ?? 0) + 1);
  return [...counts.entries()].filter(([, count]) => count > 1).map(([item]) => item);
}
