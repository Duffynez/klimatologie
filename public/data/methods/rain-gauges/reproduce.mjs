// Node.js 22+. Save this file, example.json and both TXT files together.
// Run: node reproduce.mjs
// Optional: node reproduce.mjs /path/to/annual-subhourly.txt /path/to/annual-hourly.txt
// This example starts at NOAA's processed precipitation increments. It does not
// reconstruct vibrating-wire signals, rerun OAP, fill gaps or correct wind loss.
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { pathToFileURL } from "node:url";

export function summarizeRainHour(subhourlyText, hourlyText, metadata) {
  const split = (text) => text.trim().split(/\r?\n/).map((line) => line.trim().split(/\s+/));
  const start = Number(metadata.startTimeLST.slice(0, 2)) * 60 + Number(metadata.startTimeLST.slice(2));
  const end = Number(metadata.endTimeLST.slice(0, 2)) * 60 + Number(metadata.endTimeLST.slice(2));
  if (end - start !== 60 || start < 0 || end >= 1440 || metadata.intervalMinutes !== 5)
    throw new Error("Example requires a single complete hour within one LST date.");
  const clock = (minute) => String(Math.floor(minute / 60)).padStart(2, "0") + String(minute % 60).padStart(2, "0");
  const rows = split(subhourlyText).filter((r) => r[0] === metadata.wban && r[3] === metadata.dateLST &&
    r[4] > metadata.startTimeLST && r[4] <= metadata.endTimeLST);
  const hours = split(hourlyText).filter((r) => r[0] === metadata.wban && r[3] === metadata.dateLST && r[4] === metadata.endTimeLST);
  if (rows.length !== 12 || hours.length !== 1) throw new Error("Expected 12 five-minute records and one hourly record.");
  const tenths = (text) => {
    if (!/^\d+\.\d$/.test(text)) throw new Error("Missing or invalid precipitation, expected non-negative mm to one decimal place.");
    return Math.round(Number(text) * 10);
  };
  const checkTimestamp = (r, minute, columns) => {
    const local = Date.UTC(Number(metadata.dateLST.slice(0, 4)), Number(metadata.dateLST.slice(4, 6)) - 1,
      Number(metadata.dateLST.slice(6, 8)), 0, minute - metadata.utcOffsetHours * 60);
    const utc = new Date(local).toISOString();
    if (r.length !== columns || r[1] !== utc.slice(0, 10).replaceAll("-", "") ||
        r[2] !== utc.slice(11, 16).replace(":", "") || r[4] !== clock(minute) || r[5] !== metadata.dataloggerVersion)
      throw new Error("Unexpected format, timestamp, order or datalogger version.");
  };
  const values = rows.map((r, index) => {
    checkTimestamp(r, start + (index + 1) * 5, 23);
    // Column 10 is precipitation. There is NO separate precipitation QC flag.
    const depthTenths = tenths(r[9]);
    return { endTimeLST: r[4].slice(0, 2) + ":" + r[4].slice(2), depthMm: depthTenths / 10,
      meanRateMmPerHour: depthTenths * 12 / 10 };
  });
  checkTimestamp(hours[0], end, 38);
  const totalTenths = values.reduce((sum, row) => sum + Math.round(row.depthMm * 10), 0);
  const publishedTenths = tenths(hours[0][12]);
  return {
    count: values.length, rows: values, hourlyDepthMm: totalTenths / 10,
    hourlyMeanRateMmPerHour: totalTenths / 10,
    maxFiveMinuteRateMmPerHour: Math.max(...values.map((row) => row.meanRateMmPerHour)),
    publishedHourlyDepthMm: publishedTenths / 10, agreesWithPublishedHour: totalTenths === publishedTenths,
  };
}

async function main() {
  const metadata = JSON.parse(await readFile(new URL("example.json", import.meta.url), "utf8"));
  const names = ["blue-hill-five-minute.txt", "blue-hill-hourly.txt"];
  const paths = process.argv.slice(2);
  if (paths.length !== 0 && paths.length !== 2) throw new Error("Provide either no paths or both annual files.");
  const buffers = await Promise.all(names.map((name, i) => readFile(paths[i] ?? new URL(name, import.meta.url))));
  const expected = paths.length ? [metadata.annualFileSha256.subhourly, metadata.annualFileSha256.hourly] : names.map((name) => metadata.sha256[name]);
  buffers.forEach((buffer, i) => {
    if (createHash("sha256").update(buffer).digest("hex") !== expected[i])
      throw new Error("Checksum mismatch. Use the archived extracts or inspect changes to the NOAA annual files.");
  });
  const result = summarizeRainHour(...buffers.map((buffer) => buffer.toString("utf8")), metadata);
  console.log(JSON.stringify(result, null, 2));
  if (!result.agreesWithPublishedHour) process.exitCode = 1;
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => { console.error(error.message); process.exitCode = 1; });
}
