// Run with Node.js 22 or newer: node reproduce.mjs
// Inputs are byte-for-byte NOAA API responses, downloaded on 2026-10-04.
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { pathToFileURL } from "node:url";

const mm = (value) => {
  if (typeof value !== "string" || !/^-?\d+(?:\.\d{1,3})?$/.test(value))
    throw new Error(`Invalid metre value: ${value}`);
  return Math.round(Number(value) * 1000);
};

export function summarizeDay(mllw, msl, datums, metadata) {
  if (datums.units !== "meters" || datums.epoch !== metadata.datumEpoch)
    throw new Error("Unexpected datum units or epoch");
  const getDatum = (name) => {
    const entries = datums.datums.filter((d) => d.name === name);
    if (entries.length !== 1 || !Number.isFinite(entries[0].value)) throw new Error(`Invalid datum ${name}`);
    return Math.round(entries[0].value * 1000);
  };
  const offsetMm = getDatum("MSL") - getDatum("MLLW");
  const start = Date.parse(`${metadata.date}T00:00:00Z`);
  if (!Number.isFinite(start) || metadata.timeZone !== "UTC" || metadata.units !== "m")
    throw new Error("Invalid date, time zone or units");
  for (const dataset of [mllw, msl]) {
    if (dataset.metadata?.id !== metadata.station) throw new Error("Station mismatch");
    if (dataset.data?.length !== 240) throw new Error("Expected 240 six-minute records");
    dataset.data.forEach((r, i) => {
      const expected = new Date(start + i * 360000).toISOString().slice(0, 16).replace("T", " ");
      if (r.t !== expected) throw new Error("Missing, duplicate or unordered timestamp");
      if (r.q !== "v" || r.f !== "0,0,0,0") throw new Error("Unverified, inferred or flagged water level");
      mm(r.v);
      if (mm(r.s) < 0) throw new Error("Negative sample standard deviation");
    });
  }
  const rows = mllw.data.map((r, i) => {
    const valueMm = mm(r.v);
    const convertedMm = valueMm - offsetMm;
    if (convertedMm !== mm(msl.data[i].v)) throw new Error("Datum conversion disagrees with NOAA");
    if (r.s !== msl.data[i].s) throw new Error("Sample spread changed between datum requests");
    return { time: r.t.slice(11), mllwM: valueMm / 1000, mslM: convertedMm / 1000, sigmaM: mm(r.s) / 1000 };
  });
  const values = mllw.data.map((r) => mm(r.v));
  const sumMm = values.reduce((a, b) => a + b, 0);
  const minMm = Math.min(...values);
  const maxMm = Math.max(...values);
  return {
    count: rows.length, offsetM: offsetMm / 1000,
    meanMllwM: sumMm / rows.length / 1000,
    meanMslM: (sumMm / rows.length - offsetMm) / 1000,
    min: rows[values.indexOf(minMm)], max: rows[values.indexOf(maxMm)],
    rangeM: (maxMm - minMm) / 1000,
    checkRows: [0, 60, 120, 180].map((i) => rows[i]), rows,
  };
}

export async function reproduce() {
  const base = new URL(".", import.meta.url);
  const metadata = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const datasets = [];
  for (const name of ["water-level-mllw.json", "water-level-msl.json", "datums.json"]) {
    const bytes = await readFile(new URL(name, base));
    if (createHash("sha256").update(bytes).digest("hex") !== metadata.sha256[name])
      throw new Error(`SHA-256 mismatch: ${name}`);
    datasets.push(JSON.parse(bytes.toString("utf8")));
  }
  return summarizeDay(...datasets, metadata);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log(JSON.stringify(await reproduce(), null, 2));
}
