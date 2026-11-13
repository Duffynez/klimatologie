// Klimatologie.eu, 2026. CC BY 4.0. Run with Node.js from any directory.
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

export function calculate() {
  const lines = readFileSync(new URL("aloha-trendy.csv", import.meta.url), "utf8").trim().split(/\r?\n/).slice(1);
  const rows = lines.map(line => {
    const [method, label, period, slope, se, locator] = line.split(",");
    return { method, label, period, annualSlope: Number(slope), annualStandardError: Number(se), decadeSlope: Number(slope) * 10, decadeStandardError: Number(se) * 10, locator };
  });
  return { rows, illustrativeHydrogenRatio: 10 ** (8.2 - 8.1) };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) console.log(JSON.stringify(calculate(), null, 2));
