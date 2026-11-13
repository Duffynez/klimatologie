// Klimatologie.eu, 13. 11. 2026. Vlastní kód, CC BY 4.0, připraveno s pomocí AI.
// Spuštění bez balíčků: node vypocty.mjs (CSV musí ležet vedle skriptu).
// Přepis výsledků, nikoli nový odhad trendů ze surových měření.
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

export function calculate() {
  const [header, ...lines] = readFileSync(new URL("frederikse-2020-tabulka-1.csv", import.meta.url), "utf8").trim().split(/\r?\n/);
  const keys = header.split(",");
  const rows = lines.map(line => {
    const row = Object.fromEntries(line.split(",").map((value, i) => [keys[i], value]));
    for (const key of ["start_year", "end_year", "trend", "lower", "upper", "confidence_percent"]) row[key] = Number(row[key]);
    if (row.lower > row.trend || row.upper < row.trend || row.confidence_percent !== 90 || row.unit !== "mm/year") throw new Error("Neplatný řádek přepisu tabulky 1");
    return row;
  });
  const get = id => rows.find(row => row.id === id);
  const componentSum = get("thermosteric").trend + get("barystatic").trend;
  const residual = get("observed").trend - componentSum;
  if (Math.abs(componentSum - get("sum").trend) > 1e-10 || Math.abs(residual - get("residual").trend) > 1e-10) throw new Error("Nesouhlasí součet publikovaných středních hodnot");
  // Nejistoty NEPOČÍTÁME ze samostatných mezí. Závislosti zahrnuje původní ensemble studie.
  // Ilustrační převod podle Gregory a kol. 2019, rovnice 37, s výslovně zaokrouhlenou plochou.
  const oceanAreaM2 = 360e6 * 1e6; // 360 milionů km² × 10^6 m²/km²
  const freshwaterDensityKgM3 = 1000;
  const massGtToMm = massGt => massGt * 1e12 / (freshwaterDensityKgM3 * oceanAreaM2) * 1000;
  return { rows, componentSum, residual, residualInterval90: [get("residual").lower, get("residual").upper], oceanAreaM2, freshwaterDensityKgM3, height360GtMm: massGtToMm(360), heightMinus1800GtMm: massGtToMm(-1800) };
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) console.log(JSON.stringify(calculate(), null, 2));
