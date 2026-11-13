// Klimatologie.eu, vlastní SVG a kód, CC BY 4.0. Připraveno s pomocí AI.
// node grafika.mjs vytvoří tři SVG v adresáři skriptu. Data viz podklady.txt.
import { writeFileSync } from "node:fs";
import { calculate } from "./vypocty.mjs";
const ink = "#223936", sea = "#246c76", orange = "#b96a3d", green = "#657c4a", paper = "#faf8f1";
const esc = value => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const text = (x, y, value, size = 23, extra = "") => `<text x="${x}" y="${y}" font-size="${size}" ${extra}>${esc(value)}</text>`;
const line = (x1, y1, x2, y2, colour = sea, extra = "") => `<path d="M${x1} ${y1} L${x2} ${y2}" fill="none" stroke="${colour}" ${extra.includes("stroke-width") ? "" : 'stroke-width="3"'} ${extra}/>`;
const arrow = (path, colour = sea) => `<path d="${path}" fill="none" stroke="${colour}" stroke-width="5" marker-end="url(#${colour === orange ? "warm" : colour === green ? "land" : "blue"})"/>`;
const root = (title, description, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="650" viewBox="0 0 1100 650" role="img" aria-labelledby="title desc">
<title id="title">${esc(title)}</title><desc id="desc">${esc(description)}</desc>
<defs>${[["blue", sea], ["warm", orange], ["land", green]].map(([id, fill]) => `<marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="${fill}"/></marker>`).join("")}</defs>
<rect width="1100" height="650" fill="${paper}"/>
<g font-family="Arial, Helvetica, sans-serif" fill="${ink}">${body}</g></svg>\n`;
const satellite = (x, y, label) => `<g transform="translate(${x} ${y})"><path d="M-39 -9H-14V9H-39Z M14 -9H39V9H14Z" fill="#a5bcc5" stroke="${ink}" stroke-width="2"/><rect x="-13" y="-15" width="26" height="30" rx="4" fill="#ece2ca" stroke="${ink}" stroke-width="2"/>${text(0, -29, label, 20, 'text-anchor="middle"')}</g>`;

let expansion = text(40, 52, "Stejná hmotnost, větší objem", 34, 'font-weight="700"')
  + text(40, 88, "Ohřev mění hustotu. Výšku a hmotnost kontrolujeme odlišnými měřeními.", 22)
  + text(185, 163, "Chladnější voda", 24, 'text-anchor="middle" font-weight="700"')
  + text(495, 163, "Teplejší voda", 24, 'text-anchor="middle" font-weight="700"')
  + `<path d="M85 330H285V505H85Z" fill="#c2dfe6"/><path d="M395 280H595V505H395Z" fill="#afd1dc"/>`
  + line(85, 330, 285, 330) + line(395, 280, 595, 280)
  + `<path d="M85 225V505H285V225 M395 225V505H595V225" fill="none" stroke="${ink}" stroke-width="3"/>`
  + line(66, 330, 623, 330, "#8b9992", 'stroke-dasharray="8 6"')
  + arrow("M320 330V280", orange) + text(340, 364, "vzestup", 18, 'text-anchor="middle"')
  + arrow("M295 208H385", orange) + text(340, 192, "ohřev", 21, 'text-anchor="middle" fill="' + orange + '"')
  + text(185, 548, "Stejné množství vody", 22, 'text-anchor="middle"')
  + text(495, 548, "Menší hustota", 22, 'text-anchor="middle"');
for (const [cx, top, step] of [[125, 365, 52], [435, 320, 68]]) {
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) expansion += `<circle cx="${cx + c * 60}" cy="${top + r * step}" r="8" fill="${sea}" opacity=".65"/>`;
}
expansion += satellite(848, 184, "Radarový výškoměr")
  + `<path d="M820 211L760 303L876 303Z" fill="#dce8e5" opacity=".8"/>`
  + line(713, 310, 1035, 310) + text(735, 346, "Měří výšku hladiny", 22)
  + `<path d="M710 391V485" stroke="${orange}" stroke-width="4"/>`
  + [400, 430, 460, 482].map(y => `<circle cx="710" cy="${y}" r="6" fill="${orange}"/>`).join("")
  + text(736, 407, "Profily teploty a slanosti", 22)
  + text(736, 439, "Určují objemový příspěvek", 20)
  + text(736, 495, "Gravimetrie ověřuje,", 22)
  + text(736, 526, "zda přibylo také vody", 22)
  + text(40, 612, "Kvalitativní schéma. Tečky značí stejné množství vody, změna výšky je zvětšená.", 20);
writeFileSync(new URL("rozpinani.svg", import.meta.url), root("Tepelné rozpínání mořské vody", "Dva vodní sloupce mají stejnou hmotnost a šířku. Teplejší voda má menší hustotu a vyšší hladinu. Profily určují objem, radar výšku a gravimetrie hmotnost.", expansion));

let transfer = text(40, 52, "Voda se přesouvá mezi souší a oceánem", 34, 'font-weight="700"')
  + text(40, 88, "Přísun zvyšuje hmotnost i hladinu. Zadržení vody na souši působí opačně.", 22)
  + `<path d="M40 445L165 245L255 325L335 395L460 415L530 475V550H40Z" fill="#c9d2b5"/>
     <path d="M115 325L165 245L229 305L218 333L197 319L177 349L156 330L135 352Z" fill="#f1f6f4" stroke="#8babae" stroke-width="2"/>
     <path d="M500 445H1060V550H530Z" fill="#bfdce3"/>
     <path d="M500 445H1060" stroke="${sea}" stroke-width="3"/>
     <path d="M210 347Q230 385 303 410T502 465" fill="none" stroke="#6199ae" stroke-width="9"/>
     <ellipse cx="310" cy="465" rx="75" ry="17" fill="#80afbf"/>
     <path d="M225 504Q300 480 390 514" fill="none" stroke="#7ca7b0" stroke-width="13"/>`
  + text(55, 218, "Led na pevnině", 23, 'font-weight="700"')
  + text(46, 583, "Zásoby vody v půdě, podzemí a jezerech", 21)
  + text(788, 520, "OCEÁN", 25, 'font-weight="700" text-anchor="middle"')
  + arrow("M330 370Q430 359 585 470", sea)
  + text(424, 337, "odtok a úbytek ledu", 21, 'text-anchor="middle"')
  + `<path d="M300 170C285 136 328 119 347 137C360 102 413 109 423 136C464 125 486 172 457 189H313Z" fill="#e4e6dc" stroke="#aeb9a8" stroke-width="2"/>`
  + arrow("M620 400Q640 222 492 175", green)
  + text(648, 300, "výpar", 21, 'fill="' + green + '"')
  + arrow("M372 205L343 300", green)
  + text(388, 246, "srážky", 21, 'fill="' + green + '"')
  + satellite(801, 176, "GRACE") + satellite(963, 176, "GRACE")
  + line(842, 176, 922, 176, orange, 'stroke-dasharray="5 4"')
  + text(883, 235, "Změna gravitace", 22, 'text-anchor="middle"')
  + text(883, 266, "ukazuje přesun hmoty", 21, 'text-anchor="middle"')
  + satellite(890, 341, "Radarový výškoměr")
  + `<path d="M867 370L835 437L944 437Z" fill="#dbe6e2" opacity=".8"/>`
  + text(40, 625, "Kvalitativní schéma. Šipky rozlišují směr přesunu, ne velikost jednotlivých toků.", 20);
writeFileSync(new URL("presun-vody.svg", import.meta.url), root("Hmotnostní příspěvek k hladině moře", "Led na pevnině a odtok přidávají oceánu vodu. Vypařování a srážky mohou vodu přesunout na souš. GRACE sleduje přesuny hmoty a radar výšku hladiny.", transfer));

const { rows } = calculate();
const fmt = n => n.toFixed(2).replace("-", "−").replace(".", ",");
const x = value => 370 + value * 116;
let budget = text(40, 52, "Bilance globální hladiny, 1993–2018", 34, 'font-weight="700"')
  + text(40, 88, "Průměrná tempa změny v mm za rok. Úsečky ukazují 90% intervaly nejistoty.", 22)
  + text(40, 134, "PŘÍSPĚVKY A JEJICH SOUČET", 18, 'font-weight="700" fill="' + sea + '"')
  + text(1060, 134, "Odhad [90% interval]", 19, 'text-anchor="end"');
for (let tick = 0; tick <= 4; tick++) budget += line(x(tick), 155, x(tick), 539, "#d7ddd5", 'stroke-width="1"') + text(x(tick), 577, String(tick), 22, 'text-anchor="middle"');
for (const [index, row] of rows.slice(0, 5).entries()) {
  const y = [185, 257, 329, 438, 510][index];
  const colour = index === 0 ? orange : index === 1 ? sea : ink;
  budget += text(40, y + 8, row.label, 23, index === 2 ? 'font-weight="700"' : "")
    + line(x(row.lower), y, x(row.upper), y, colour, 'stroke-width="5"')
    + line(x(row.lower), y - 10, x(row.lower), y + 10, colour)
    + line(x(row.upper), y - 10, x(row.upper), y + 10, colour)
    + `<circle cx="${x(row.trend)}" cy="${y}" r="8" fill="${colour}"/>`
    + text(1060, y + 7, `${fmt(row.trend)} [${fmt(row.lower)}–${fmt(row.upper)}]`, 21, 'text-anchor="end"');
}
budget += line(40, 376, 1060, 376, "#c9cfc5")
  + text(40, 408, "DVA ODHADY CELKOVÉHO VZESTUPU", 18, 'font-weight="700"')
  + text(603, 613, "mm za rok", 22, 'text-anchor="middle"')
  + text(40, 642, "Zdroj: Frederikse a kol. 2020, tabulka 1. Intervaly součtu přebírají společné nejistoty původní studie.", 17);
writeFileSync(new URL("bilance-1993-2018.svg", import.meta.url), root("Bilance globální hladiny moře za roky 1993 až 2018", "Rozpínání přispělo 1,19 mm za rok, přidaná voda 1,97. Součet 3,16 je v rámci nejistot slučitelný s pobřežní rekonstrukcí 3,35 a družicovým měřením 3,32 mm za rok. Všechny intervaly jsou 90procentní.", budget));
console.log("Vytvořena schémata rozpinani.svg, presun-vody.svg a bilance-1993-2018.svg.");
