// Node.js 22+. Save this script, example.json and both blue-hill TXT files
// in the same directory, then run: node reproduce.mjs
// Optional: node reproduce.mjs /path/to/annual-subhourly.txt /path/to/annual-hourly.txt
// The optional files must be the NOAA products identified in example.json.
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { pathToFileURL } from "node:url";

export function summarizeHour(subhourlyText, hourlyText, metadata) {
  const split = (text) => text.trim().split(/\r?\n/).map((line) => line.trim().split(/\s+/));
  const rows = split(subhourlyText).filter((r) =>
    r[0] === metadata.wban && r[3] === metadata.dateLST && r[4] > "0000" && r[4] <= metadata.endTimeLST);
  const hourly = split(hourlyText).filter((r) =>
    r[0] === metadata.wban && r[3] === metadata.dateLST && r[4] === metadata.endTimeLST);
  if (rows.length !== 12 || hourly.length !== 1) throw new Error("Expected 12 five-minute records and one hourly record.");
  const temperatures = rows.map((r, index) => {
    const minute = (index + 1) * 5;
    const expected = `${Math.floor(minute / 60)}`.padStart(2, "0") + `${minute % 60}`.padStart(2, "0");
    const utcMinute = minute - metadata.utcOffsetHours * 60;
    const expectedUTC = `${Math.floor(utcMinute / 60)}`.padStart(2, "0") + `${utcMinute % 60}`.padStart(2, "0");
    const value = Number(r[8]);
    if (r[4] !== expected || r[1] !== metadata.dateLST || r[2] !== expectedUTC || r[5] !== metadata.dataloggerVersion)
      throw new Error("Unexpected timestamp, order or datalogger version.");
    if (!Number.isFinite(value) || value === -9999) throw new Error("Missing or invalid temperature: no mean calculated.");
    return value;
  });
  const h = hourly[0];
  if (h[1] !== metadata.dateLST || h[2] !== "0600" || h[5] !== metadata.dataloggerVersion)
    throw new Error("Unexpected hourly timestamp or datalogger version.");
  const publishedHourlyC = Number(h[9]);
  if (!Number.isFinite(publishedHourlyC) || publishedHourlyC === -9999) throw new Error("Missing hourly result.");
  // These public inputs have one decimal place. Sum integer tenths exactly.
  const sumTenths = temperatures.reduce((sum, value) => sum + Math.round(value * 10), 0);
  return { count: temperatures.length, sumC: sumTenths / 10, meanC: sumTenths / 120, publishedHourlyC };
}

export function calibratedTemperature(resistanceOhm, coefficientsAscending) {
  return coefficientsAscending.reduceRight((value, coefficient) => value * resistanceOhm + coefficient, 0);
}

async function main() {
  const metadata = JSON.parse(await readFile(new URL("example.json", import.meta.url), "utf8"));
  const names = ["blue-hill-five-minute.txt", "blue-hill-hourly.txt"];
  const inputPaths = process.argv.slice(2);
  if (inputPaths.length !== 0 && inputPaths.length !== 2) throw new Error("Provide either no paths or both annual files.");
  const buffers = await Promise.all(names.map((name, i) => readFile(inputPaths[i] ?? new URL(name, import.meta.url))));
  if (!inputPaths.length) {
    buffers.forEach((buffer, i) => {
      if (createHash("sha256").update(buffer).digest("hex") !== metadata.sha256[names[i]])
        throw new Error(`Checksum mismatch: ${names[i]}`);
    });
  }
  const result = summarizeHour(...buffers.map((b) => b.toString("utf8")), metadata);
  const lab = metadata.calibration;
  const temperatureC = calibratedTemperature(lab.resistanceOhm, lab.coefficientsAscending);
  console.log(JSON.stringify({ blueHill: result, calibration: {
    resistanceOhm: lab.resistanceOhm, temperatureC,
    differenceFromReferenceC: temperatureC - lab.referenceTemperatureC,
  } }, null, 2));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => { console.error(error.message); process.exitCode = 1; });
}
