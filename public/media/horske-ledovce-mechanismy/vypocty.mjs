import { readFileSync } from "node:fs";

// Spuštění: node vypocty.mjs. JavaScript bez dalších závislostí.
// Číselné podklady a podmínky: podklady.txt. Příklady nejsou pozorování.
const meltFluxWPerM2 = 10;
const durationSeconds = 86400;
const latentHeatJPerKg = 334000;
const meltKgPerM2 = meltFluxWPerM2 * durationSeconds / latentHeatJPerKg;
console.log({ meltKgPerM2, meltMmWater: meltKgPerM2 });
console.log({ exampleWinterMWe: 2, exampleSummerMWe: -3, exampleAnnualMWe: 2 - 3 });

const lines = readFileSync(new URL("sarennes-tabulka-1.csv", import.meta.url), "utf8").trim().split(/\r?\n/);
for (const row of lines.slice(1)) {
  const [season, earlierPeriod, earlier, laterPeriod, later] = row.split(",");
  console.log({ season, earlierPeriod, laterPeriod, changeOfMeanMWePerYear: Number((Number(later) - Number(earlier)).toFixed(2)) });
}
// Dvě změny průměrů se týkají různých období. Jejich součet není změnou roční bilance.
