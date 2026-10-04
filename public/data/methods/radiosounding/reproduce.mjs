// Node.js 22+. Save this script, example.json and the original CSV together.
// Run: node reproduce.mjs
// Optional: node reproduce.mjs /path/to/25010112_Praha_ascent_111510.csv
// This verifies a published profile and a two-point layer calculation.
// It does not reconstruct sensor calibration or CHMI's upstream processing.
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { pathToFileURL } from "node:url";

export function parseProfile(text) {
  const lines = text.split(/[\r\n]+/).filter((line) => line.trim());
  if (lines.shift() !== "sep=,") throw new Error("Missing CHMI CSV delimiter declaration.");
  let previousTime = -1;
  return lines.map((line) => {
    const cells = line.split(",");
    if (cells.length !== 11 || cells.some((x) => !/^-?\d+(?:\.\d+)?$/.test(x)))
      throw new Error("Expected 11 numeric fields. Missing values are not replaced with zero.");
    const values = cells.map(Number);
    const [minutes, seconds, heightGpm, pressureHpa, temperatureC, rh, dewPointC, windFrom, windSpeed, latitude, longitude] = values;
    if (!Number.isInteger(minutes) || minutes < 0 || !Number.isInteger(seconds) || seconds < 0 || seconds >= 60)
      throw new Error("Invalid elapsed time.");
    const elapsedSeconds = minutes * 60 + seconds;
    if (elapsedSeconds <= previousTime) throw new Error("Duplicate or out-of-order time.");
    previousTime = elapsedSeconds;
    // Broad physical checks for this terrestrial ascent, not a universal QC algorithm.
    if (heightGpm < -500 || heightGpm > 50000 || pressureHpa <= 0 || pressureHpa > 1100 ||
        temperatureC < -100 || temperatureC > 60 || rh < 0 || rh > 100 ||
        dewPointC < -150 || dewPointC > 60 || windFrom < 0 || windFrom > 360 ||
        windSpeed < 0 || windSpeed > 200 || Math.abs(latitude) > 90 || Math.abs(longitude) > 180)
      throw new Error("Missing, sentinel or out-of-range value.");
    return { elapsedSeconds, heightGpm, pressureHpa, temperatureC, latitude, longitude };
  });
}

export function summarizeProfile(text, metadata) {
  const rows = parseProfile(text);
  if (rows.length !== metadata.recordCount || rows[0]?.elapsedSeconds !== 0 || rows.at(-1)?.elapsedSeconds !== 5254)
    throw new Error("The example requires the complete Prague ascent of 1 January 2025.");
  const selectedRows = metadata.selectedRows.map(({ elapsedSeconds }) => {
    const row = rows.find((r) => r.elapsedSeconds === elapsedSeconds);
    if (!row) throw new Error(`Missing selected observation at ${elapsedSeconds} seconds. No interpolation is performed.`);
    return { elapsedSeconds, heightGpm: row.heightGpm, pressureHpa: row.pressureHpa, temperatureC: row.temperatureC };
  });
  const first = rows.find((r) => r.elapsedSeconds === metadata.calculation.startElapsedSeconds);
  const last = rows.find((r) => r.elapsedSeconds === metadata.calculation.endElapsedSeconds);
  if (!first || !last || last.elapsedSeconds <= first.elapsedSeconds || last.heightGpm <= first.heightGpm)
    throw new Error("Invalid layer endpoints.");
  const temperatureDifferenceC = last.temperatureC - first.temperatureC;
  const heightDifferenceGpm = last.heightGpm - first.heightGpm;
  return {
    recordCount: rows.length,
    durationSeconds: rows.at(-1).elapsedSeconds,
    selectedRows,
    temperatureDifferenceC,
    heightDifferenceGpm,
    temperatureGradientCPerGeopotentialKm: temperatureDifferenceC / (heightDifferenceGpm / 1000),
  };
}

async function main() {
  const metadata = JSON.parse(await readFile(new URL("example.json", import.meta.url), "utf8"));
  const args = process.argv.slice(2);
  if (args.length > 1) throw new Error("Provide at most one path to the original CSV.");
  const bytes = await readFile(args[0] ?? new URL(metadata.archiveMember, import.meta.url));
  if (createHash("sha256").update(bytes).digest("hex") !== metadata.fileSha256)
    throw new Error("Checksum mismatch. Use the original CSV from the specified CHMI archive member.");
  console.log(JSON.stringify(summarizeProfile(bytes.toString("utf8"), metadata), null, 2));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => { console.error(error.message); process.exitCode = 1; });
}
