// Zdroj hodnot: Otosaka a kol. 2026, tabulka 4, DOI 10.1038/s41597-026-08088-0.
// Spuštění v Node.js: node bilance.mjs
// Počítá pouze součty publikovaných příspěvků, nikoli nové bilance z měření.
// Nejistoty nepřepočítává: dynamický člen je reziduum, sloupce nejsou nezávislé.
import { readFile } from "node:fs/promises";
const input = await readFile(new URL("tabulka-4.csv",import.meta.url),"utf8");
console.log("prikrov,obdobi,povrch_plus_dynamika_Gt_rok,publikovana_bilance_Gt_rok,rozdil_Gt_rok");
for (const row of input.trim().split(/\r?\n/).slice(1)) {
  const [region,period,total,,surface,,dynamic] = row.split(",");
  const sum = Number(surface) + Number(dynamic);
  const difference = sum - Number(total);
  if (![sum,difference].every(Number.isFinite)) throw new Error("Neplatná číselná hodnota");
  if (difference !== 0) throw new Error(`Nesouhlasí součet: ${region}, ${period}`);
  console.log([region,period,sum,total,difference].join(","));
}
