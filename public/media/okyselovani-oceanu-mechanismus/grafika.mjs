// Klimatologie.eu, 2026. CC BY 4.0. Run: node grafika.mjs
import { writeFileSync } from "node:fs";
import { calculate } from "./vypocty.mjs";

const esc = value => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;");
const text = (x, y, label, size = 22, color = "#213530", weight = 400, anchor = "start") => '<text x="' + x + '" y="' + y + '" font-size="' + size + '" fill="' + color + '" font-weight="' + weight + '" text-anchor="' + anchor + '">' + esc(label) + '</text>';
const rect = (x, y, w, h, fill, stroke = "none") => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="12" fill="' + fill + '" stroke="' + stroke + '"/>';
const line = (x1, y1, x2, y2, color = "#c7d3ce", width = 2, rest = "") => '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + color + '" stroke-width="' + width + '" ' + rest + '/>';
const start = (height, title, desc) => '<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="' + height + '" viewBox="0 0 1100 ' + height + '" role="img" aria-labelledby="title desc"><title id="title">' + esc(title) + '</title><desc id="desc">' + esc(desc) + '</desc><rect width="1100" height="' + height + '" fill="#f7f7f1"/><g font-family="Arial, sans-serif">';
const end = '</g></svg>\n';
const marker = (id, color) => '<marker id="' + id + '" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L8,3 z" fill="' + color + '"/></marker>';

let mechanism = start(690, "Jak přísun CO₂ mění povrchovou vodu", "Kvalitativní schéma výměny přes hladinu, růstu vodíkových iontů a úbytku uhličitanů. Kontrolní varianta zachovává obsah CO₂ ve vzduchu. Místní odezvu ovlivňují teplota, promíchávání a biologie.");
mechanism += '<defs>' + marker("blue", "#346f91") + marker("orange", "#a6572c") + '</defs>';
mechanism += text(36, 48, "Jak přísun CO₂ mění povrchovou vodu", 31, "#213530", 700);
mechanism += text(36, 82, "Stejná teplota, slanost a alkalinita v kontrolním srovnání", 20);
mechanism += rect(36, 112, 650, 112, "#e4eef4");
mechanism += text(61, 145, "VZDUCH", 16, "#346f91", 700);
mechanism += text(61, 188, "Rostoucí obsah CO₂", 28, "#254f68", 700);
mechanism += rect(36, 274, 650, 320, "#e3efed");
mechanism += line(493, 194, 493, 321, "#346f91", 6, 'marker-end="url(#blue)"');
mechanism += line(544, 318, 544, 210, "#346f91", 3, 'marker-end="url(#blue)"');
mechanism += line(36, 250, 686, 250, "#346f91", 2);
mechanism += text(61, 244, "hladina", 18, "#346f91");
mechanism += text(61, 306, "POVRCHOVÁ VODA", 16, "#1d5d58", 700);
mechanism += text(61, 351, "Více rozpuštěného CO₂", 27, "#213530", 700);
mechanism += line(95, 368, 95, 416, "#a6572c", 4, 'marker-end="url(#orange)"');
mechanism += text(61, 454, "Více H⁺ → nižší pH", 29, "#934b27", 700);
mechanism += text(61, 500, "Část H⁺ se váže na uhličitany:", 22);
mechanism += text(61, 542, "CO₃²⁻ + H⁺ → HCO₃⁻", 29, "#934b27", 700);
mechanism += text(61, 577, "Uhličitanů ubývá, hydrogenuhličitanů přibývá.", 21);
mechanism += rect(718, 112, 346, 196, "#fffdf6", "#cccdbd");
mechanism += text(741, 148, "KONTROLNÍ VARIANTA", 16, "#56605b", 700);
mechanism += text(741, 185, "CO₂ ve vzduchu se nemění.", 22);
mechanism += text(741, 221, "Při ostatních stejných", 22);
mechanism += text(741, 253, "podmínkách tento přídavný", 22);
mechanism += text(741, 285, "účinek nevzniká.", 22);
mechanism += rect(718, 329, 346, 265, "#eef1e5", "#ccd2bc");
mechanism += text(741, 365, "DALŠÍ PŘÍSPĚVKY", 16, "#526543", 700);
mechanism += text(741, 405, "Teplota mění rovnováhy", 22);
mechanism += text(741, 436, "a rozpustnost plynu.", 22);
mechanism += text(741, 479, "Promíchávání přináší", 22);
mechanism += text(741, 510, "vodu jiného složení.", 22);
mechanism += text(741, 553, "Život uhlík odebírá i vrací.", 22);
mechanism += text(36, 633, "Šipky přes hladinu: výměna oběma směry. Šířky šipek nejsou měřená množství.", 19);
mechanism += text(36, 665, "Klimatologie.eu · vlastní schéma s pomocí AI · CC BY 4.0 · Dickson a kol. 2007, Ma a kol. 2023", 16, "#53615b");
writeFileSync(new URL("mechanismus.svg", import.meta.url), mechanism + end);

const { rows } = calculate();
const x = value => 474 + ((value + 0.025) / 0.025) * 560;
const decimal = (value, places) => value.toFixed(places).replace("-", "−").replace(".", ",");
let graph = start(620, "Očekávané a zjištěné tempo změny pH u Havaje", "Stanice ALOHA, povrch 0–30 metrů. Tři odhady trendu: předpověď z atmosféry, výpočet z uhlíku a alkalinity a optické měření. Úsečky představují jednu standardní chybu, období optického měření je kratší.");
graph += text(36, 48, "Očekávané a zjištěné tempo změny pH", 31, "#213530", 700);
graph += text(36, 83, "Stanice ALOHA u Havaje · povrchová vrstva 0–30 metrů", 21);
graph += rect(448, 116, 610, 342, "#ffffff");
for (const tick of [-0.025, -0.020, -0.015, -0.010, -0.005, 0]) {
  graph += line(x(tick), 125, x(tick), 450, tick === 0 ? "#677970" : "#dce3df", tick === 0 ? 2 : 1);
  graph += text(x(tick), 483, tick === 0 ? "0" : decimal(tick, 3), 19, "#344c41", 400, "middle");
}
const colors = ["#93612b", "#28665f", "#426a96"];
rows.forEach((row, i) => {
  const y = 183 + i * 112;
  graph += text(36, y - 25, row.label.replace("CO2", "CO₂"), 22, colors[i], 700);
  graph += text(36, y + 6, row.period, 19, "#4b5b53");
  const formattedError = decimal(row.decadeStandardError, row.method === "prediction" ? 4 : 3);
  graph += text(36, y + 35, decimal(row.decadeSlope, 3) + " ± " + formattedError + " pH / desetiletí", 20, colors[i]);
  const left = x(row.decadeSlope - row.decadeStandardError), right = x(row.decadeSlope + row.decadeStandardError);
  graph += line(left, y, right, y, colors[i], 4);
  graph += line(left, y - 9, left, y + 9, colors[i], 3);
  graph += line(right, y - 9, right, y + 9, colors[i], 3);
  graph += '<circle cx="' + x(row.decadeSlope) + '" cy="' + y + '" r="7" fill="' + colors[i] + '"/>';
});
graph += text(755, 520, "Změna pH za desetiletí", 22, "#213530", 700, "middle");
graph += text(36, 560, "Úsečky: ±1 standardní chyba sklonu. Přímé měření pokrývá kratší období.", 20);
graph += text(36, 596, "Dore a kol. 2009, s. 12236 · vlastní graf Klimatologie.eu s pomocí AI · CC BY 4.0", 17, "#53615b");
writeFileSync(new URL("aloha-srovnani.svg", import.meta.url), graph + end);
