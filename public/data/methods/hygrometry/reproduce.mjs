// Node.js 22+. Save this script, example.json and both TXT files together.
// Run: node reproduce.mjs
// Optional: node reproduce.mjs /path/to/annual-subhourly.txt /path/to/annual-hourly.txt
// This deliberately requires a complete, unflagged hour. It does not implement
// NOAA's processing for incomplete hours or reconstruct unrounded sensor data.
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { pathToFileURL } from "node:url";

export function summarizeHumidityHour(subhourlyText, hourlyText, metadata) {
  const split = (text) => text.trim().split(/\r?\n/).map((line) => line.trim().split(/\s+/));
  const rows = split(subhourlyText).filter((r) =>
    r[0] === metadata.wban && r[3] === metadata.dateLST && r[4] > "0000" && r[4] <= metadata.endTimeLST);
  const hourly = split(hourlyText).filter((r) =>
    r[0] === metadata.wban && r[3] === metadata.dateLST && r[4] === metadata.endTimeLST);
  if (rows.length !== 12 || hourly.length !== 1) throw new Error("Expected 12 five-minute records and one hourly record.");
  const clock = (minute) => String(Math.floor(minute / 60)).padStart(2, "0") + String(minute % 60).padStart(2, "0");
  const validHumidity = (value) => /^\d+$/.test(value) && Number(value) <= 100;
  const humidities = rows.map((r, i) => {
    const minute = (i + 1) * 5;
    if (r.length !== 23 || r[4] !== clock(minute) || r[1] !== metadata.dateLST ||
        r[2] !== clock(minute - metadata.utcOffsetHours * 60) || r[5] !== metadata.dataloggerVersion)
      throw new Error("Unexpected format, timestamp, order or datalogger version.");
    if (!validHumidity(r[15]) || r[16] !== "0")
      throw new Error("Missing, invalid or flagged humidity: no mean calculated.");
    return Number(r[15]);
  });
  const h = hourly[0];
  if (h.length !== 38 || h[1] !== metadata.dateLST ||
      h[2] !== clock(60 - metadata.utcOffsetHours * 60) || h[5] !== metadata.dataloggerVersion)
    throw new Error("Unexpected hourly format, timestamp or datalogger version.");
  if (!validHumidity(h[26]) || h[27] !== "0") throw new Error("Missing, invalid or flagged hourly result.");
  const sumPercent = humidities.reduce((sum, value) => sum + value, 0);
  const meanPercent = sumPercent / humidities.length;
  const publishedHourlyPercent = Number(h[26]);
  return {
    count: humidities.length, sumPercent, meanPercent,
    roundedMeanPercent: Math.round(meanPercent), publishedHourlyPercent,
    agreesAfterRounding: Math.round(meanPercent) === publishedHourlyPercent,
  };
}

async function main() {
  const metadata = JSON.parse(await readFile(new URL("example.json", import.meta.url), "utf8"));
  const names = ["blue-hill-five-minute.txt", "blue-hill-hourly.txt"];
  const paths = process.argv.slice(2);
  if (paths.length !== 0 && paths.length !== 2) throw new Error("Provide either no paths or both annual files.");
  const buffers = await Promise.all(names.map((name, i) => readFile(paths[i] ?? new URL(name, import.meta.url))));
  const hashes = buffers.map((buffer) => createHash("sha256").update(buffer).digest("hex"));
  const expected = paths.length
    ? [metadata.annualFileSha256.subhourly, metadata.annualFileSha256.hourly]
    : names.map((name) => metadata.sha256[name]);
  hashes.forEach((hash, i) => {
    if (hash !== expected[i]) throw new Error(`Checksum mismatch: ${paths[i] ?? names[i]}. Use the archived example inputs or check the changed NOAA archive.`);
  });
  const result = summarizeHumidityHour(...buffers.map((buffer) => buffer.toString("utf8")), metadata);
  console.log(JSON.stringify(result, null, 2));
  if (!result.agreesAfterRounding) process.exitCode = 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => { console.error(error.message); process.exitCode = 1; });
}
