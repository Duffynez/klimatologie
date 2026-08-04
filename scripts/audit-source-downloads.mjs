import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const dataDir = path.join(root, "app", "data");
const outputDir = path.join(root, "audits");
const jsonPath = path.join(outputDir, "source-downloadability.json");
const csvPath = path.join(outputDir, "source-downloadability.csv");
const markdownPath = path.join(outputDir, "source-downloadability.md");
const sourceFiles = ["sources.ts", "articleSources.ts"];
const userAgent = "Klimatologie.eu source availability audit/1.0";
const auditVersion = 2;
const refresh = process.argv.includes("--refresh");
const limitArgument = process.argv.find((argument) => argument.startsWith("--limit="));
const limit = limitArgument ? Number(limitArgument.split("=")[1]) : Infinity;
const concurrencyArgument = process.argv.find((argument) => argument.startsWith("--concurrency="));
const concurrency = concurrencyArgument ? Number(concurrencyArgument.split("=")[1]) : 5;
const cacheLifetimeMs = 7 * 24 * 60 * 60 * 1000;
const unpaywallEmail = process.env.UNPAYWALL_EMAIL ?? null;
const manualVerifications = {
  "1871_Siemens_Thermometry": {
    availability: "open_access_manual",
    access: "browser-verified-download",
    publicSharing: "review",
    evidence: ["Royal Society zobrazuje digitalizovaný rukopis a nabízí export PDF; automatické požadavky server odmítá."],
  },
  "WEB_biodiversitylibrary_org_Digitalizovany_puvodni_svazek_6958270a": {
    availability: "open_access_manual",
    access: "browser-verified-download",
    license: "public-domain",
    publicSharing: "yes",
    evidence: ["Biodiversity Heritage Library poskytuje digitalizovaný historický svazek a nástroje pro jeho stažení; automatické požadavky server odmítá."],
  },
  "WEB_journals_ametsoc_org_The_International_Aeronautical_Congress_at_Berli_8cb3a239": {
    availability: "open_access_manual",
    access: "browser-verified-download",
    license: "public-domain",
    publicSharing: "yes",
    evidence: ["Stránka Monthly Weather Review nabízí plný text i PDF práce z roku 1902; automatické požadavky server odmítá."],
  },
  "1958_Keeling": {
    availability: "web_only",
    access: "browser-verified-web-page",
    publicSharing: "not_applicable",
    evidence: ["Historická stránka Scripps je veřejně dostupná v prohlížeči, ale není samostatným dokumentem."],
  },
  "WEB_ametsoc_net_State_of_the_Climate_in_2024_Stratospheric_Tempe_d68326f7": {
    availability: "open_access_manual",
    access: "browser-verified-download",
    downloadUrl: "https://ametsoc.net/sotc2024/02GlobalClimate_SotC2024.pdf",
    downloadRelation: "primary-copy",
    format: "pdf",
    publicSharing: "review",
    evidence: ["Přímé PDF je veřejně dohledatelné, ale server odmítá automatické požadavky."],
  },
  "WEB_Smithsonian_Institution_Danielluv_vlhkomer_Smithsonian_fe197e61": {
    availability: "web_only",
    access: "browser-verified-web-page",
    publicSharing: "not_applicable",
    evidence: ["Muzejní záznam je veřejný; Smithsonian u fotografie výslovně uvádí omezení dalšího použití."],
  },
  "WEB_NASA_NASA_JPL_Seasat_b80d8dde": {
    availability: "web_only",
    access: "browser-verified-web-page",
    publicSharing: "not_applicable",
    evidence: ["Stránka mise Seasat je veřejně dostupná v prohlížeči, ale není samostatným dokumentem."],
  },
  "WEB_NOAA_Podminky_pouziti_NOAA_17f3c88c": {
    availability: "web_only",
    access: "browser-verified-web-page",
    publicSharing: "not_applicable",
    evidence: ["Podmínky použití jsou webová stránka; server odmítá automatické požadavky."],
  },
  "WEB_escholarship_org_Report_on_the_Deep_Sea_Temperature_Observations_8c66444c": {
    availability: "open_access_manual",
    access: "browser-verified-download",
    publicSharing: "review",
    evidence: ["Repozitář eScholarship nabízí stažení PDF, ale automatizovaný přístup blokuje kontrolou prohlížeče."],
  },
  "WEB_Copernicus_Gravimetric_mass_balance_data_for_the_Antarctic_cc600157": {
    availability: "manual_data_download",
    access: "browser-verified-data-portal",
    publicSharing: "review",
    evidence: ["Datový portál Copernicus je veřejný; konkrétní soubory vyžadují výběr dat nebo použití API."],
  },
  "WEB_NOAA_Index_of_data_global_historical_climatology_netw_09a19f6a": {
    availability: "manual_data_download",
    access: "browser-verified-data-portal",
    publicSharing: "review",
    evidence: ["Veřejný adresář NOAA obsahuje soubory GHCN-Daily; při hromadné kontrole pouze vypršel čas požadavku."],
  },
  "WEB_Copernicus_Licence_to_use_Copernicus_Products_rev_12_4244ad0f": {
    availability: "confirmed_download",
    access: "browser-verified-download",
    downloadUrl: "https://object-store.os-api.cci2.ecmwf.int/cci2-prod-catalogue/licences/licence-to-use-copernicus-products/licence-to-use-copernicus-products_b4b9451f54cffa16ecef5c912c9cebd6979925a956e3fa677976e0cf198c2c18.pdf",
    downloadRelation: "primary-copy",
    format: "pdf",
    publicSharing: "review",
    evidence: ["Stránka Copernicus odkazuje na úplné PDF licenčních podmínek."],
  },
  "WEB_NASA_NASA_SSH_popis_globalniho_vypoctu_2d3d3dce": {
    availability: "manual_data_download",
    access: "browser-verified-data-portal",
    publicSharing: "review",
    evidence: ["Datový katalog NASA je veřejný; stažení závisí na konkrétním datovém produktu."],
  },
};

const sourceText = (await Promise.all(sourceFiles.map((file) => readFile(path.join(dataDir, file), "utf8")))).join("\n");
const records = parseSourceRecords(sourceText);

if (new Set(records.map((record) => record.id)).size !== records.length) {
  throw new Error("Source catalogue contains duplicate IDs.");
}

await mkdir(outputDir, { recursive: true });
const previous = await readPreviousAudit();
const previousById = new Map(previous.map((record) => [record.id, record]));
const selected = records.slice(0, limit);
const results = new Array(selected.length);
let completed = 0;

await runPool(selected, concurrency, async (record, index) => {
  const cached = previousById.get(record.id);
  if (manualVerifications[record.id]) {
    results[index] = await auditSource(record);
  } else if (!refresh && isFresh(cached, record)) {
    results[index] = cached;
  } else {
    results[index] = await auditSource(record);
  }
  results[index] = normalizeAuditResult(results[index]);

  completed += 1;
  if (completed % 20 === 0 || completed === selected.length) {
    console.log(`Audited ${completed}/${selected.length}`);
    await writeJson(results.filter(Boolean));
  }
});

const sortedResults = results
  .filter(Boolean)
  .sort((left, right) => left.year - right.year || left.title.localeCompare(right.title, "cs"));
const summary = buildSummary(sortedResults, records.length);
await writeJson(sortedResults, summary);
await writeFile(csvPath, toCsv(sortedResults), "utf8");
await writeFile(markdownPath, toMarkdown(sortedResults, summary), "utf8");

console.log("\nAudit complete");
console.log(`Catalogue records: ${records.length}`);
console.log(`Audited records: ${sortedResults.length}`);
for (const [status, count] of Object.entries(summary.availability)) console.log(`${status}: ${count}`);
console.log(`\n${path.relative(root, markdownPath)}`);
console.log(path.relative(root, csvPath));
console.log(path.relative(root, jsonPath));

async function auditSource(record) {
  const checkedAt = new Date().toISOString();
  const base = {
    ...record,
    auditVersion,
    checkedAt,
    resolvedUrl: null,
    downloadUrl: null,
    downloadRelation: null,
    format: null,
    httpStatus: null,
    access: null,
    license: null,
    availability: "uncertain",
    publicSharing: "review",
    evidence: [],
  };

  const manualVerification = manualVerifications[record.id];
  if (manualVerification) {
    return {
      ...base,
      resolvedUrl: record.externalUrl,
      ...manualVerification,
    };
  }

  if (record.driveFileId) {
    return {
      ...base,
      resolvedUrl: `https://drive.google.com/file/d/${record.driveFileId}/view`,
      downloadUrl: `https://drive.google.com/uc?export=download&id=${record.driveFileId}`,
      downloadRelation: "primary-copy",
      access: "existing-drive-copy",
      availability: "already_archived",
      publicSharing: "review",
      evidence: ["Soubor už má v katalogu kopii na Google Drivu; oprávnění k dalšímu sdílení vyžaduje samostatnou kontrolu."],
    };
  }

  if (!record.externalUrl) {
    return {
      ...base,
      availability: "missing_url",
      publicSharing: "no",
      evidence: ["Záznam nemá externí URL ani soubor na Google Drivu."],
    };
  }

  if (isDoiUrl(record.externalUrl)) return auditDoi(record, base);
  return auditWebSource(record, base);
}

async function auditDoi(record, base) {
  const doi = decodeURIComponent(record.externalUrl.replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, ""));
  let openAlex = null;
  let metadataError = null;

  try {
    const response = await fetchWithTimeout(`https://api.openalex.org/works/https://doi.org/${encodeDoiPath(doi)}`, {
      headers: { "User-Agent": userAgent, Accept: "application/json" },
    });
    if (response.ok) openAlex = await response.json();
    else metadataError = `OpenAlex HTTP ${response.status}`;
  } catch (error) {
    metadataError = `OpenAlex: ${error.message}`;
  }

  const locations = uniqueLocations([
    openAlex?.best_oa_location,
    openAlex?.primary_location,
    ...(openAlex?.locations ?? []),
  ]);
  let license = firstValue(locations.map((location) => location.license)) ?? null;
  const pdfCandidates = locations
    .filter((location) => location.pdf_url)
    .map((location) => ({ url: location.pdf_url, license: location.license, origin: "OpenAlex", score: location.source?.type === "repository" ? 100 : 90 }));
  const openLandingCandidates = locations
    .filter((location) => location.landing_page_url && location.is_oa)
    .map((location) => location.landing_page_url);

  let file = await findWorkingFile(pdfCandidates);
  let landingProbe = null;
  let unpaywall = null;

  if (!file && unpaywallEmail) {
    try {
      const response = await fetchWithTimeout(`https://api.unpaywall.org/v2/${encodeDoiPath(doi)}?email=${encodeURIComponent(unpaywallEmail)}`, {
        headers: { "User-Agent": userAgent, Accept: "application/json" },
      });
      if (response.ok) {
        unpaywall = await response.json();
        const unpaywallLocations = uniqueLocations([
          unpaywall.best_oa_location,
          ...(unpaywall.oa_locations ?? []),
        ]);
        license ??= firstValue(unpaywallLocations.map((location) => location.license));
        file = await findWorkingFile(unpaywallLocations
          .filter((location) => location.url_for_pdf)
          .map((location) => ({
            url: location.url_for_pdf,
            license: location.license,
            origin: "Unpaywall",
            score: location.host_type === "repository" ? 110 : 95,
          })));
      }
    } catch {
      // OpenAlex and the source page remain authoritative fallbacks.
    }
  }

  if (!file) {
    const unpaywallLandings = (unpaywall?.oa_locations ?? []).map((location) => location.url).filter(Boolean);
    const landingUrls = uniqueStrings([...openLandingCandidates, ...unpaywallLandings, record.externalUrl]).slice(0, 5);
    for (const landingUrl of landingUrls) {
      landingProbe = await probeUrl(landingUrl, true);
      if (!landingProbe.ok) continue;
      if (landingProbe.isFile) {
        file = { probe: landingProbe, license, origin: "DOI redirect" };
        break;
      }

      const candidates = extractDownloadCandidates(landingProbe.body, landingProbe.finalUrl, record)
        .map((candidate) => ({ ...candidate, license }));
      file = await findWorkingFile(candidates);
      if (file) break;
    }
  }

  const isOpenAccess = Boolean(openAlex?.open_access?.is_oa || unpaywall?.is_oa);
  const oaStatus = openAlex?.open_access?.oa_status ?? unpaywall?.oa_status ?? null;
  const effectiveLicense = file?.license ?? license ?? detectLicense(landingProbe?.body ?? "");
  const evidence = [
    openAlex ? `OpenAlex: ${openAlex.open_access?.is_oa ? `otevřený přístup (${openAlex.open_access?.oa_status})` : "uzavřený přístup"}.` : metadataError,
    unpaywall ? `Unpaywall: ${unpaywall.is_oa ? `otevřený přístup (${unpaywall.oa_status})` : "uzavřený přístup"}.` : null,
  ].filter(Boolean);

  if (file) {
    evidence.push(`Přímý soubor ověřen přes ${file.origin}; HTTP ${file.probe.status}, ${file.probe.contentType || "neuvedený typ"}.`);
    return {
      ...base,
      resolvedUrl: landingProbe?.finalUrl ?? openAlex?.primary_location?.landing_page_url ?? record.externalUrl,
      downloadUrl: file.probe.finalUrl,
      downloadRelation: "primary-copy",
      format: file.probe.format,
      httpStatus: file.probe.status,
      access: isOpenAccess ? `open-access-${oaStatus ?? "unknown"}` : "public-file-without-confirmed-oa-status",
      license: effectiveLicense,
      availability: "confirmed_download",
      publicSharing: sharingVerdict(effectiveLicense, isOpenAccess),
      evidence,
    };
  }

  if (isOpenAccess) {
    evidence.push("Otevřený plný text je evidován, ale audit nepotvrdil stabilní přímou adresu souboru.");
    return {
      ...base,
      resolvedUrl: openAlex?.best_oa_location?.landing_page_url ?? landingProbe?.finalUrl ?? record.externalUrl,
      httpStatus: landingProbe?.status ?? null,
      access: `open-access-${oaStatus ?? "unknown"}`,
      license: effectiveLicense,
      availability: "open_access_manual",
      publicSharing: sharingVerdict(effectiveLicense, true),
      evidence,
    };
  }

  if (looksLikeDataRecord(record)) {
    evidence.push("Jde o datový záznam; soubory se pravděpodobně vybírají nebo generují na datovém portálu.");
    return {
      ...base,
      resolvedUrl: landingProbe?.finalUrl ?? record.externalUrl,
      httpStatus: landingProbe?.status ?? null,
      access: "data-portal",
      license: effectiveLicense,
      availability: "manual_data_download",
      publicSharing: "review",
      evidence,
    };
  }

  evidence.push("Veřejně dostupný plný soubor nebyl potvrzen.");
  return {
    ...base,
    resolvedUrl: landingProbe?.finalUrl ?? record.externalUrl,
    httpStatus: landingProbe?.status ?? null,
    access: openAlex ? "closed-or-unknown" : "metadata-unavailable",
    license: effectiveLicense,
    availability: openAlex || unpaywall || landingProbe?.ok ? "restricted_or_landing_only" : "unreachable",
    publicSharing: "no",
    evidence,
  };
}

async function auditWebSource(record, base) {
  const githubArchive = await probeGithubArchive(record);
  if (githubArchive) {
    return {
      ...base,
      resolvedUrl: record.externalUrl,
      downloadUrl: githubArchive.finalUrl,
      downloadRelation: "primary-source-archive",
      format: githubArchive.format,
      httpStatus: githubArchive.status,
      access: "public-source-code-archive",
      availability: "confirmed_download",
      publicSharing: "review",
      evidence: ["Veřejný repozitář lze stáhnout jako archiv zdrojového kódu."],
    };
  }

  const probe = await probeUrl(record.externalUrl, true);
  const detectedLicense = detectLicense(probe.body ?? "");

  if (!probe.ok) {
    return {
      ...base,
      resolvedUrl: probe.finalUrl ?? record.externalUrl,
      httpStatus: probe.status,
      availability: "unreachable",
      publicSharing: "no",
      evidence: [`Zdroj se nepodařilo otevřít: ${probe.error ?? `HTTP ${probe.status}`}.`],
    };
  }

  if (probe.isFile) {
    return {
      ...base,
      resolvedUrl: probe.finalUrl,
      downloadUrl: probe.finalUrl,
      downloadRelation: "primary-copy",
      format: probe.format,
      httpStatus: probe.status,
      access: "public-direct-file",
      license: detectedLicense,
      availability: "confirmed_download",
      publicSharing: sharingVerdict(detectedLicense, true),
      evidence: [`Adresa vrací přímo soubor; HTTP ${probe.status}, ${probe.contentType || "neuvedený typ"}.`],
    };
  }

  const candidates = extractDownloadCandidates(probe.body, probe.finalUrl, record)
    .map((candidate) => ({ ...candidate, license: detectedLicense }));
  const file = await findWorkingFile(candidates);

  if (file) {
    return {
      ...base,
      resolvedUrl: probe.finalUrl,
      downloadUrl: file.probe.finalUrl,
      downloadRelation: linkedFileRelation(record, file),
      format: file.probe.format,
      httpStatus: file.probe.status,
      access: "public-file-linked-from-page",
      license: file.license ?? detectedLicense,
      availability: "confirmed_download",
      publicSharing: sharingVerdict(file.license ?? detectedLicense, true),
      evidence: [`Na zdrojové stránce byl nalezen a ověřen soubor; HTTP ${file.probe.status}, ${file.probe.contentType || "neuvedený typ"}.`],
    };
  }

  if (looksLikeDataRecord(record)) {
    return {
      ...base,
      resolvedUrl: probe.finalUrl,
      httpStatus: probe.status,
      access: "data-portal",
      license: detectedLicense,
      availability: "manual_data_download",
      publicSharing: "review",
      evidence: ["Zdroj je dostupný datový portál, ale konkrétní soubor vyžaduje výběr dat nebo ruční export."],
    };
  }

  return {
    ...base,
    resolvedUrl: probe.finalUrl,
    httpStatus: probe.status,
    access: "web-page",
    license: detectedLicense,
    availability: "web_only",
    publicSharing: "not_applicable",
    evidence: ["Stránka je dostupná, ale neobsahuje automaticky rozpoznatelný soubor ke stažení."],
  };
}

async function findWorkingFile(candidates) {
  const ranked = uniqueBy(candidates, (item) => item.url)
    .sort((left, right) => (right.score ?? 0) - (left.score ?? 0))
    .slice(0, 5);
  for (const candidate of ranked) {
    const probe = await probeUrl(candidate.url, false);
    if (probe.ok && probe.isFile) return { ...candidate, probe };
  }
  return null;
}

async function probeGithubArchive(record) {
  if (!/zdrojov(?:ý|y) kód/i.test(record.type) || !/^https:\/\/github\.com\//i.test(record.externalUrl ?? "")) return null;
  const match = record.externalUrl.match(/^https:\/\/github\.com\/([^/]+\/[^/#?]+)/i);
  if (!match) return null;
  for (const branch of ["main", "master"]) {
    const probe = await probeUrl(`https://github.com/${match[1]}/archive/refs/heads/${branch}.zip`, false);
    if (probe.ok && probe.isFile) return probe;
  }
  return null;
}

async function probeUrl(url, includeBody) {
  try {
    const response = await fetchWithTimeout(url, {
      redirect: "follow",
      headers: {
        "User-Agent": userAgent,
        Accept: "application/pdf,text/html;q=0.9,text/plain;q=0.8,application/octet-stream;q=0.8,*/*;q=0.5",
        Range: "bytes=0-393215",
      },
    });
    const contentType = (response.headers.get("content-type") ?? "").split(";")[0].trim().toLowerCase();
    const disposition = response.headers.get("content-disposition") ?? "";
    const format = detectFormat(response.url, contentType, disposition);
    const isFile = Boolean(format && format !== "html");
    const shouldReadBody = includeBody && !isFile && (contentType.includes("html") || contentType.startsWith("text/"));
    const body = shouldReadBody ? await readLimitedBody(response, 393216) : "";
    if (!shouldReadBody) await response.body?.cancel().catch(() => {});

    return {
      ok: response.ok,
      status: response.status,
      finalUrl: response.url,
      contentType,
      format,
      isFile,
      body,
      error: response.ok ? null : `HTTP ${response.status}`,
    };
  } catch (error) {
    return { ok: false, status: null, finalUrl: url, contentType: null, format: null, isFile: false, body: "", error: error.message };
  }
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

async function readLimitedBody(response, maximumBytes) {
  if (!response.body) return "";
  const reader = response.body.getReader();
  const chunks = [];
  let size = 0;
  try {
    while (size < maximumBytes) {
      const { value, done } = await reader.read();
      if (done) break;
      const remaining = maximumBytes - size;
      chunks.push(value.slice(0, remaining));
      size += Math.min(value.length, remaining);
      if (value.length > remaining) break;
    }
  } finally {
    await reader.cancel().catch(() => {});
  }
  const combined = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    combined.set(chunk, offset);
    offset += chunk.length;
  }
  return new TextDecoder().decode(combined);
}

function extractDownloadCandidates(html, baseUrl, record) {
  if (!html) return [];
  const candidates = [];

  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    const attributes = htmlAttributes(match[0]);
    const name = (attributes.name ?? attributes.property ?? "").toLowerCase();
    if (["citation_pdf_url", "eprints.document_url", "wkhealth_pdf_url", "og:pdf"].includes(name) && attributes.content) {
      candidates.push({ url: attributes.content, score: 100, origin: "publication metadata" });
    }
  }

  for (const match of html.matchAll(/<link\b[^>]*>/gi)) {
    const attributes = htmlAttributes(match[0]);
    if (attributes.href && attributes.type?.toLowerCase() === "application/pdf") {
      candidates.push({ url: attributes.href, score: 95, origin: "page metadata" });
    }
  }

  for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]{0,300}?)<\/a>/gi)) {
    const href = match[1];
    const label = plainText(match[2]);
    if (!isFileLikeUrl(href) && !/\b(download|pdf|csv|netcdf|data file|stáhnout|full text)\b/i.test(label)) continue;
    if (/wp-json|\/feed\/?|news\.xml|sitemap|logo|favicon|press[-_ ]?kit/i.test(href)) continue;

    const extensionScore = isFileLikeUrl(href) ? 20 : 0;
    const labelScore = /\b(download|pdf|csv|netcdf|data file|stáhnout|full text)\b/i.test(label) ? 20 : 0;
    const overlapScore = Math.min(60, titleOverlap(record.title, `${href} ${label}`) * 20);
    const score = extensionScore + labelScore + overlapScore;
    if (score >= 60) candidates.push({ url: href, score, origin: "source page" });
  }

  return uniqueBy(candidates
    .map((candidate) => ({ ...candidate, url: resolveUrl(decodeHtmlEntities(candidate.url), baseUrl) }))
    .filter((candidate) => candidate.url)
    .filter((candidate) => !/creativecommons\.org\/licenses\//i.test(candidate.url)), (candidate) => candidate.url);
}

function detectFormat(url, contentType, disposition) {
  const combined = `${url} ${disposition}`.toLowerCase();
  const contentFormats = [
    ["application/pdf", "pdf"],
    ["text/csv", "csv"],
    ["application/zip", "zip"],
    ["application/x-zip", "zip"],
    ["application/gzip", "gzip"],
    ["application/x-gzip", "gzip"],
    ["application/netcdf", "netcdf"],
    ["application/x-netcdf", "netcdf"],
    ["application/json", "json"],
    ["application/xml", "xml"],
    ["text/xml", "xml"],
    ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "docx"],
    ["application/msword", "doc"],
    ["image/png", "png"],
    ["image/jpeg", "jpg"],
    ["image/svg+xml", "svg"],
    ["image/gif", "gif"],
    ["video/mp4", "mp4"],
  ];
  for (const [mime, format] of contentFormats) if (contentType === mime) return format;
  if (contentType.includes("html")) return "html";
  const extension = combined.match(/\.(pdf|csv|tsv|txt|zip|gz|gzip|nc|nc4|netcdf|json|xml|docx?|xlsx?|png|jpe?g|svg|gif|mp4)(?:[?&#\s"']|$)/i)?.[1];
  if (extension) return normalizeFormat(extension);
  if (contentType === "text/plain") return "txt";
  if (contentType.includes("html") || !contentType) return "html";
  if (contentType === "application/octet-stream" && /filename=/i.test(disposition)) return "binary";
  return null;
}

function detectLicense(html) {
  const normalized = html.toLowerCase();
  const creativeCommons = normalized.match(/creativecommons\.org\/(?:licenses|publicdomain)\/([^"'<>\s]+)/i)?.[1];
  if (creativeCommons) return normalizeLicense(creativeCommons.replace(/\/$/, ""));
  if (/\bcc0\b|public domain dedication/i.test(normalized)) return "cc0-or-public-domain";
  if (/\bpublic domain\b/i.test(normalized)) return "public-domain-claim";
  return null;
}

function sharingVerdict(license) {
  if (!license) return "review";
  const normalized = license.toLowerCase();
  if (/cc0|public-domain|pddl/.test(normalized)) return "yes";
  if (/cc-by(?:-|$)|cc by/.test(normalized) && !/\bnc\b|\bnd\b/.test(normalized)) return "yes_with_attribution";
  if (/cc-|creative commons|odc-/.test(normalized)) return "yes_with_conditions";
  return "review";
}

function normalizeAuditResult(record) {
  if (!record) return record;
  const license = normalizeLicense(record.license);
  const canHaveShareableCopy = ["confirmed_download", "open_access_manual"].includes(record.availability);
  return {
    ...record,
    license,
    publicSharing: canHaveShareableCopy ? sharingVerdict(license, true) : record.publicSharing,
  };
}

function normalizeLicense(license) {
  if (!license) return null;
  const normalized = license.toLowerCase().replace(/^licenses\//, "").replace(/\/$/, "");
  if (/^(?:by|by-nc|by-nd|by-sa|by-nc-nd|by-nc-sa)\//.test(normalized)) {
    return `cc-${normalized.replace("/", "-")}`;
  }
  return normalized;
}

function linkedFileRelation(record, file) {
  const format = file.probe.format;
  const descriptor = `${record.type} ${record.title}`.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  if (/obraz|graf|visual/.test(descriptor) && /^(?:png|jpg|svg|gif|mp4|pdf)$/.test(format)) return "primary-copy";
  if (/licenc|metodick|dokument|priruck|manual|report|zprava/.test(descriptor) && format === "pdf" && (file.score ?? 0) >= 80) return "primary-copy";
  if (/datov|dataset/.test(descriptor) && /^(?:csv|tsv|txt|zip|gzip|netcdf|json|xlsx?)$/.test(format) && (file.score ?? 0) >= 80) return "primary-data-file";
  return "linked-asset-needs-review";
}

function parseSourceRecords(text) {
  return [...text.matchAll(/^\s*\{[^\n]*\bid:\s*"(?:\\.|[^"\\])*"[^\n]*\},?$/gm)].map((match) => {
    const line = match[0];
    return {
      id: stringField(line, "id"),
      title: stringField(line, "title"),
      author: stringField(line, "author"),
      year: numberField(line, "year"),
      publication: stringField(line, "publication"),
      type: stringField(line, "type"),
      category: stringField(line, "category"),
      externalUrl: stringField(line, "externalUrl", null),
      driveFileId: stringField(line, "driveFileId", null),
    };
  });
}

function stringField(line, key, fallback = "") {
  const match = line.match(new RegExp(`\\b${key}:\\s*("(?:\\\\.|[^"\\\\])*")`));
  return match ? JSON.parse(match[1]) : fallback;
}

function numberField(line, key) {
  const match = line.match(new RegExp(`\\b${key}:\\s*(\\d+)`));
  return match ? Number(match[1]) : 0;
}

function buildSummary(results, catalogueCount) {
  return {
    generatedAt: new Date().toISOString(),
    catalogueCount,
    auditedCount: results.length,
    availability: countBy(results, (record) => record.availability),
    publicSharing: countBy(results, (record) => record.publicSharing),
    downloadRelations: countBy(results.filter((record) => record.downloadRelation), (record) => record.downloadRelation),
    formats: countBy(results.filter((record) => record.format), (record) => record.format),
    categories: countBy(results, (record) => record.category),
  };
}

function toCsv(results) {
  const columns = [
    "id", "title", "author", "year", "category", "type", "externalUrl", "resolvedUrl", "downloadUrl", "downloadRelation", "format",
    "availability", "access", "license", "publicSharing", "httpStatus", "checkedAt", "evidence",
  ];
  const rows = results.map((record) => columns.map((column) => csvCell(column === "evidence" ? record.evidence.join(" ") : record[column])).join(","));
  return `\ufeff${columns.join(",")}\n${rows.join("\n")}\n`;
}

function toMarkdown(results, summary) {
  const confirmedPrimaryFiles = results.filter((record) => record.availability === "confirmed_download"
    && ["primary-copy", "primary-data-file", "primary-source-archive"].includes(record.downloadRelation)).length;
  const sections = [
    "# Audit stažitelnosti zdrojů",
    "",
    `Vygenerováno: ${new Date(summary.generatedAt).toLocaleString("cs-CZ", { timeZone: "Europe/Prague" })}`,
    "",
    "Audit ověřuje technickou veřejnou dostupnost souboru. Sám o sobě nenahrazuje právní kontrolu licence pro veřejné šíření kopie.",
    "",
    "## Souhrn",
    "",
    `- Záznamů v katalogu: **${summary.catalogueCount}**`,
    `- Ověřených přímých souborů: **${summary.availability.confirmed_download ?? 0}**`,
    `- Z toho primárních kopií nebo datových archivů: **${confirmedPrimaryFiles}**`,
    `- Připojených souborů vyžadujících kontrolu vztahu ke zdroji: **${summary.downloadRelations["linked-asset-needs-review"] ?? 0}**`,
    `- Souborů již uložených na Google Drivu: **${summary.availability.already_archived ?? 0}**`,
    `- Otevřených textů vyžadujících ruční stažení: **${summary.availability.open_access_manual ?? 0}**`,
    `- Datových portálů vyžadujících výběr nebo export: **${summary.availability.manual_data_download ?? 0}**`,
    `- Pouze webových stránek bez rozpoznaného souboru: **${summary.availability.web_only ?? 0}**`,
    `- Omezených nebo pouze vstupních stránek: **${summary.availability.restricted_or_landing_only ?? 0}**`,
    `- Nedostupných při kontrole: **${summary.availability.unreachable ?? 0}**`,
    "",
    "## Význam stavů",
    "",
    "- `confirmed_download`: audit našel a technicky ověřil přímý veřejný soubor.",
    "- `already_archived`: katalog už obsahuje kopii na Google Drivu.",
    "- `open_access_manual`: otevřený plný text je evidován, ale stabilní soubor je nutné získat ručně.",
    "- `manual_data_download`: data jsou veřejná, ale vyžadují výběr, export nebo použití API.",
    "- `restricted_or_landing_only`: dostupná je vstupní stránka, nikoli potvrzený veřejný plný soubor.",
    "- `web_only`: zdrojem je samotná webová stránka.",
    "- `unreachable`: automatická kontrola se ke zdroji nedostala; nejde automaticky vykládat jako trvalou nedostupnost.",
    "",
  ];

  for (const [status, heading] of [
    ["confirmed_download", "Potvrzené soubory ke stažení"],
    ["already_archived", "Již uložené kopie"],
    ["open_access_manual", "Otevřený přístup, ruční získání souboru"],
    ["manual_data_download", "Datové portály s ručním exportem"],
    ["restricted_or_landing_only", "Bez potvrzeného veřejného souboru"],
    ["web_only", "Webové zdroje bez samostatného souboru"],
    ["unreachable", "Při kontrole nedostupné"],
  ]) {
    const matching = results.filter((record) => record.availability === status);
    sections.push(`## ${heading} (${matching.length})`, "");
    if (!matching.length) {
      sections.push("Žádné záznamy.", "");
      continue;
    }
    sections.push("| Rok | Zdroj | Vztah | Formát | Licence | Veřejné sdílení |", "|---:|---|---|---|---|---|");
    for (const record of matching) {
      const target = record.downloadUrl ?? record.resolvedUrl ?? record.externalUrl;
      const title = target ? `[${escapeMarkdown(record.title)}](${target})` : escapeMarkdown(record.title);
      sections.push(`| ${record.year} | ${title} | ${record.downloadRelation ?? "—"} | ${record.format ?? "—"} | ${escapeMarkdown(record.license ?? "neuvedena")} | ${record.publicSharing} |`);
    }
    sections.push("");
  }

  return `${sections.join("\n")}\n`;
}

async function writeJson(results, summary = buildSummary(results, records.length)) {
  await writeFile(jsonPath, `${JSON.stringify({ summary, records: results }, null, 2)}\n`, "utf8");
}

async function readPreviousAudit() {
  try {
    const parsed = JSON.parse(await readFile(jsonPath, "utf8"));
    return Array.isArray(parsed.records) ? parsed.records : [];
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

function isFresh(cached, source) {
  return cached
    && cached.auditVersion === auditVersion
    && cached.externalUrl === source.externalUrl
    && cached.driveFileId === source.driveFileId
    && Date.now() - Date.parse(cached.checkedAt) < cacheLifetimeMs;
}

async function runPool(items, size, worker) {
  let cursor = 0;
  const workers = Array.from({ length: Math.max(1, size) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      await worker(items[index], index);
    }
  });
  await Promise.all(workers);
}

function countBy(items, selector) {
  return Object.fromEntries([...items.reduce((counts, item) => {
    const key = selector(item) ?? "unknown";
    counts.set(key, (counts.get(key) ?? 0) + 1);
    return counts;
  }, new Map()).entries()].sort((left, right) => right[1] - left[1]));
}

function uniqueLocations(locations) {
  return uniqueBy(locations.filter(Boolean), (location) => `${location.pdf_url ?? ""}|${location.landing_page_url ?? ""}`);
}

function uniqueStrings(values) {
  return [...new Set(values.filter(Boolean))];
}

function uniqueBy(values, selector) {
  const seen = new Set();
  return values.filter((value) => {
    const key = selector(value);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function firstValue(values) {
  return values.find(Boolean) ?? null;
}

function looksLikeDataRecord(record) {
  return /datov|dataset|data set|databáz|portál|archiv/i.test(`${record.type} ${record.title} ${record.publication}`);
}

function isDoiUrl(url) {
  return /^https?:\/\/(?:dx\.)?doi\.org\//i.test(url);
}

function isFileLikeUrl(url) {
  return /\.(?:pdf|csv|tsv|txt|zip|gz|gzip|nc|nc4|netcdf|json|xml|docx?|xlsx?|png|jpe?g|svg|gif|mp4)(?:[?&#]|$)/i.test(url);
}

function normalizeFormat(format) {
  const normalized = format.toLowerCase();
  if (normalized === "jpeg") return "jpg";
  if (["gz", "gzip"].includes(normalized)) return "gzip";
  if (["nc", "nc4", "netcdf"].includes(normalized)) return "netcdf";
  return normalized;
}

function encodeDoiPath(doi) {
  return doi.split("/").map((part) => encodeURIComponent(part)).join("/");
}

function resolveUrl(candidate, baseUrl) {
  try {
    if (/^(?:javascript|mailto|tel):/i.test(candidate)) return null;
    return new URL(candidate, baseUrl).href;
  } catch {
    return null;
  }
}

function decodeHtmlEntities(value) {
  return value.replace(/&amp;/gi, "&").replace(/&#x2f;/gi, "/").replace(/&#47;/g, "/").replace(/&quot;/gi, '"');
}

function plainText(value) {
  return value.replace(/<[^>]+>/g, " ").replace(/&nbsp;/gi, " ").replace(/\s+/g, " ").trim();
}

function htmlAttributes(tag) {
  const attributes = {};
  for (const match of tag.matchAll(/([:\w.-]+)\s*=\s*["']([^"']*)["']/g)) {
    attributes[match[1].toLowerCase()] = decodeHtmlEntities(match[2]);
  }
  return attributes;
}

function titleOverlap(title, candidate) {
  const stopWords = new Set([
    "about", "access", "article", "climate", "data", "global", "ocean", "program", "report", "study", "system", "the", "with",
    "atmosfera", "data", "globalni", "klima", "mereni", "oceanu", "pozorovani", "program", "zprava",
  ]);
  const titleTokens = tokens(title).filter((token) => token.length >= 4 && !stopWords.has(token));
  const candidateTokens = new Set(tokens(candidate));
  return titleTokens.filter((token) => candidateTokens.has(token)).length;
}

function tokens(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .match(/[a-z0-9]+/g) ?? [];
}

function csvCell(value) {
  const text = value == null ? "" : String(value);
  return `"${text.replaceAll('"', '""')}"`;
}

function escapeMarkdown(value) {
  return String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
}
