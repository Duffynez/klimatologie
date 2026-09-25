// Builds the charts for /mechanismy/puvod-rustu-atmosferickeho-co2/.
//
// Input: monthly Mauna Loa files from the Scripps CO2 and O2 programs (CC BY 4.0), downloaded into one folder:
//   https://keelinglabsites.ucsd.edu/websitedataco2/monthly_in_situ_co2_mlo.csv
//   https://keelinglabsites.ucsd.edu/websitedataco2/monthly_flask_c13_mlo.csv
//   https://keelinglabsites.ucsd.edu/websitedatao2/monthly_o2_mlo.csv
//
// Usage: node scripts/build-co2-origin-charts.mjs <folder-with-the-three-files>
//
// Output in public/media/co2-origin/: the plotted monthly values as CSV and two SVG charts.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const inputDir = process.argv[2];
if (!inputDir) {
  console.error("Usage: node scripts/build-co2-origin-charts.mjs <folder-with-scripps-files>");
  process.exit(1);
}

const outDir = new URL("../public/media/co2-origin/", import.meta.url);
await mkdir(outDir, { recursive: true });

const START_YEAR = 1991;
const END_YEAR = 2027;

// Column 6 of every file: monthly values with the seasonal cycle removed.
async function readSeasonallyAdjusted(file) {
  const text = await readFile(path.join(inputDir, file), "utf8");
  const rows = new Map();
  for (const line of text.split(/\r?\n/)) {
    if (!/^\s*\d{4},/.test(line)) continue;
    const cells = line.split(",").map((cell) => cell.trim());
    const value = Number(cells[5]);
    if (!Number.isFinite(value) || value === -99.99) continue;
    rows.set(`${cells[0]}-${cells[1].padStart(2, "0")}`, { date: Number(cells[3]), value });
  }
  return rows;
}

const co2 = await readSeasonallyAdjusted("monthly_in_situ_co2_mlo.csv");
const d13c = await readSeasonallyAdjusted("monthly_flask_c13_mlo.csv");
const o2 = await readSeasonallyAdjusted("monthly_o2_mlo.csv");

const months = [...new Set([...co2.keys(), ...d13c.keys(), ...o2.keys()])]
  .filter((key) => Number(key.slice(0, 4)) >= START_YEAR)
  .sort();

const csv = ["rok_mesic,desetinny_rok,co2_ppm,d13c_promile,o2_per_meg"];
for (const key of months) {
  const date = (co2.get(key) ?? d13c.get(key) ?? o2.get(key)).date;
  const cell = (series, digits) => (series.has(key) ? series.get(key).value.toFixed(digits) : "");
  csv.push([key, date.toFixed(4), cell(co2, 2), cell(d13c, 2), cell(o2, 2)].join(","));
}
await writeFile(new URL("scripps-mauna-loa-mesicne.csv", outDir), csv.join("\n") + "\n");

const series = (map) =>
  [...map.values()].filter((point) => point.date >= START_YEAR).sort((a, b) => a.date - b.date);

// ---------------------------------------------------------------- shared SVG helpers

const INK = "#153235";
const MUTED = "#567174";
const GRID = "#e4eae6";
const AXIS = "#b9c6c0";
const LINE = "#1d5d58";
const FONT = "Arial, Helvetica, sans-serif";

const decimal = (value, digits) => value.toFixed(digits).replace(".", ",").replace("-", "−");
const esc = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function text(x, y, content, { size = 13, color = MUTED, anchor = "start", weight = 400 } = {}) {
  return `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" fill="${color}" text-anchor="${anchor}" font-weight="${weight}">${esc(content)}</text>`;
}

// ---------------------------------------------------------------- chart 1: three atmospheric fingerprints

const panels = [
  { title: "CO₂ v atmosféře", unit: "ppm", points: series(co2), step: 20, digits: 0, endDigits: 1 },
  { title: "δ¹³C atmosférického CO₂", unit: "‰", points: series(d13c), step: 0.2, digits: 1, endDigits: 2 },
  { title: "Poměr O₂/N₂ vůči referenčnímu vzduchu", unit: "per meg", points: series(o2), step: 200, digits: 0, endDigits: 0 },
];

const W = 770;
const left = 64;
const right = 78;
const panelH = 150;
const panelGap = 58;
const top = 34;
const plotW = W - left - right;
const H = top + panels.length * panelH + (panels.length - 1) * panelGap + 40;
const x = (date) => left + ((date - START_YEAR) / (END_YEAR - START_YEAR)) * plotW;

let body = "";
panels.forEach((panel, index) => {
  const y0 = top + index * (panelH + panelGap);
  const values = panel.points.map((point) => point.value);
  const lo = Math.floor(Math.min(...values) / panel.step) * panel.step;
  const hi = Math.ceil(Math.max(...values) / panel.step) * panel.step;
  const y = (value) => y0 + panelH - ((value - lo) / (hi - lo)) * panelH;

  body += text(0, y0 - 14, `${panel.title}, ${panel.unit}`, { size: 14, color: INK, weight: 700 });
  for (let tick = lo; tick <= hi + panel.step / 2; tick += panel.step) {
    const ty = y(tick).toFixed(1);
    body += `<line x1="${left}" x2="${left + plotW}" y1="${ty}" y2="${ty}" stroke="${GRID}" stroke-width="1"/>`;
    body += text(left - 8, Number(ty) + 4, decimal(tick, panel.digits), { size: 12, anchor: "end" });
  }
  body += `<line x1="${left}" x2="${left + plotW}" y1="${y0 + panelH}" y2="${y0 + panelH}" stroke="${AXIS}" stroke-width="1"/>`;

  // Gaps longer than three months stay visible as breaks in the line.
  let d = "";
  let previous = null;
  for (const point of panel.points) {
    const command = previous && point.date - previous.date < 0.26 ? "L" : "M";
    d += `${command}${x(point.date).toFixed(1)},${y(point.value).toFixed(1)}`;
    previous = point;
  }
  body += `<path d="${d}" fill="none" stroke="${LINE}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;

  const last = panel.points.at(-1);
  body += `<circle cx="${x(last.date).toFixed(1)}" cy="${y(last.value).toFixed(1)}" r="4" fill="${LINE}" stroke="#ffffff" stroke-width="2"/>`;
  body += text(x(last.date) + 9, y(last.value) + 4, decimal(last.value, panel.endDigits), { size: 12, color: INK, weight: 700 });

  if (index === panels.length - 1) {
    for (let year = 1995; year <= 2025; year += 5) {
      body += text(x(year), y0 + panelH + 20, String(year), { size: 12, anchor: "middle" });
    }
  }
});

const fingerprints = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-labelledby="t d">
<title id="t">Tři souběžné změny v atmosféře na Mauna Loa od roku 1991</title>
<desc id="d">Sezónně očištěné měsíční hodnoty programů Scripps CO2 a Scripps O2. Podíl CO2 roste, podíl uhlíku-13 v CO2 klesá a kyslíku v poměru k dusíku ubývá.</desc>
<rect width="${W}" height="${H}" fill="#ffffff"/>
${body}
</svg>
`;
await writeFile(new URL("otisky-v-atmosfere.svg", outDir), fingerprints);

// ---------------------------------------------------------------- chart 2: carbon budget 2023

// Global Carbon Budget 2024 (Friedlingstein et al. 2025), values for 2023 in GtC per year.
const budgetRows = [
  {
    label: "Uvolněno",
    parts: [
      { name: "Fosilní paliva a cement", value: 10.1, color: "#4a66b8" },
      { name: "Změny využití krajiny", value: 1.0, color: "#a9791c" },
    ],
  },
  {
    label: "Kam uhlík odešel",
    parts: [
      { name: "Zůstal v atmosféře", value: 5.9, color: "#c65b45" },
      { name: "Oceán", value: 2.9, color: "#0089a0" },
      { name: "Pevnina", value: 2.3, color: "#5e9a2f" },
    ],
  },
];

const BW = 770;
const bLeft = 132;
const bRight = 24;
const barH = 40;
const rowGap = 74;
const bTop = 46;
const scaleMax = 12;
const bPlotW = BW - bLeft - bRight;
const bx = (value) => bLeft + (value / scaleMax) * bPlotW;
const BH = bTop + budgetRows.length * barH + (budgetRows.length - 1) * rowGap + 52;

let bars = "";
for (let tick = 0; tick <= scaleMax; tick += 2) {
  bars += `<line x1="${bx(tick)}" x2="${bx(tick)}" y1="${bTop - 26}" y2="${BH - 36}" stroke="${GRID}" stroke-width="1"/>`;
  bars += text(bx(tick), BH - 18, decimal(tick, 0), { size: 12, anchor: "middle" });
}
bars += text(bLeft + bPlotW, BH - 2, "GtC za rok", { size: 12, anchor: "end" });

budgetRows.forEach((row, index) => {
  const y = bTop + index * (barH + rowGap);
  bars += text(0, y + barH / 2 + 5, row.label, { size: 14, color: INK, weight: 700 });
  let start = 0;
  row.parts.forEach((part, partIndex) => {
    const gap = partIndex < row.parts.length - 1 ? 2 : 0;
    const x0 = bx(start);
    const width = bx(start + part.value) - x0 - gap;
    const isLast = partIndex === row.parts.length - 1;
    const r = 4;
    // Square start at the baseline, rounded outer end.
    bars += isLast
      ? `<path d="M${x0},${y}h${width - r}a${r},${r} 0 0 1 ${r},${r}v${barH - 2 * r}a${r},${r} 0 0 1 -${r},${r}h-${width - r}z" fill="${part.color}"/>`
      : `<rect x="${x0}" y="${y}" width="${width}" height="${barH}" fill="${part.color}"/>`;
    const labelX = x0 + 2;
    const valueText = decimal(part.value, 1);
    if (width > 70) {
      bars += text(x0 + width / 2, y + barH / 2 + 5, valueText, { size: 14, color: "#ffffff", anchor: "middle", weight: 700 });
    }
    // Name above the segment; the narrow land-use segment gets its value there too.
    const name = width > 70 ? part.name : `${part.name}: ${valueText}`;
    const nameAnchor = width > 70 ? "start" : "end";
    const nameX = width > 70 ? labelX : x0 + width;
    bars += text(nameX, y - 9, name, { size: 12, color: INK, anchor: nameAnchor });
    start += part.value;
  });
});

const budget = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${BW} ${BH}" width="${BW}" height="${BH}" role="img" aria-labelledby="t d">
<title id="t">Globální uhlíková bilance za rok 2023</title>
<desc id="d">Z fosilních paliv a cementu se uvolnilo 10,1 GtC a ze změn využití krajiny 1,0 GtC. V atmosféře zůstalo 5,9 GtC, oceán převzal 2,9 GtC a pevnina 2,3 GtC.</desc>
<rect width="${BW}" height="${BH}" fill="#ffffff"/>
${bars}
</svg>
`;
await writeFile(new URL("uhlikova-bilance-2023.svg", outDir), budget);

const lastOf = (points) => points.at(-1);
console.log("months written:", months.length);
console.log("CO2 last:", lastOf(series(co2)));
console.log("d13C first/last:", series(d13c)[0], lastOf(series(d13c)));
console.log("O2 first/last:", series(o2)[0], lastOf(series(o2)));
