import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

// Vlastní kvalitativní schémata, nikoli měřené profily ledovců. CC BY 4.0.
const root = fileURLToPath(new URL("./", import.meta.url));
const ink = "#173e3c", blue = "#4f8da5", green = "#237569", orange = "#b66e2e";
const text = (x, y, value, size = 22, fill = ink, weight = 400) => `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" font-weight="${weight}">${value}</text>`;
const arrow = (d, color, dashed = false) => `<path d="${d}" fill="none" stroke="${color}" stroke-width="4"${dashed ? ' stroke-dasharray="7 6"' : ""} marker-end="url(#a${color.slice(1)})"/>`;
const panel = (x, title, line1, line2) => `<rect x="${x}" y="530" width="492" height="99" rx="8" fill="#fffdf7" stroke="#d7d9ce"/>${text(x + 20,558,title,21,ink,700)}${text(x + 20,586,line1,20)}${text(x + 20,611,line2,20)}`;
const common = (title, desc, content) => `<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="660" viewBox="0 0 1100 660" role="img" aria-labelledby="title desc">
<title id="title">${title}</title><desc id="desc">${desc}</desc>
<metadata>Klimatologie.eu, 6. listopadu 2026. Vlastní grafika vytvořená s pomocí AI, CC BY 4.0. Odborné podklady: podklady.txt.</metadata>
<defs>${[blue,green,orange,ink].map(c=>`<marker id="a${c.slice(1)}" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="${c}"/></marker>`).join("")}</defs>
<rect width="1100" height="660" fill="#f3f5ee"/>
<g font-family="Arial, Helvetica, sans-serif">${content}</g></svg>\n`;

const bed = `<path d="M60 280 L280 348 L510 420 Q720 464 1040 485 L1040 510 L60 510 Z" fill="#c5b39a"/>
<path d="M60 280 L280 348 L510 420 Q720 464 1040 485" fill="none" stroke="#87775f" stroke-width="3"/>`;
const ice = `<path d="M60 220 Q220 248 340 294 Q505 355 650 401 Q780 438 925 469 Q720 464 510 420 L280 348 L60 280 Z" fill="#b9dce5" stroke="#699ca8" stroke-width="2"/>
<path d="M60 220 Q220 248 340 294 L435 331 Q275 293 60 247 Z" fill="#fffdf7" stroke="#d2e1de" stroke-width="1"/>`;

writeFileSync(root + "mene-snehu.svg", common(
  "Méně sněhu při stejné letní ztrátě",
  "Schéma řezu ledovcem ukazuje zimní přísun, přesun ledu dolů údolím a odtok vody. Menší přírůstek sněhu může zhoršit bilanci, i když letní ztráty zůstanou stejné. Sonda a měřicí tyč rozlišují obě části. Tvary nejsou v měřítku.",
  text(38,49,"Méně sněhu při stejné letní ztrátě",31,ink,700) + text(38,82,"Hypotéza 1 · Jak poznat změnu přísunu hmoty",21) +
  `<path d="M118 149 Q104 120 132 112 Q144 88 173 108 Q202 102 215 125 Q244 133 231 151 Z" fill="#d5e4e5" stroke="#8ba7ac" stroke-width="2"/>` +
  arrow("M140 168 L140 204",blue) + arrow("M204 168 L204 214",blue) +
  text(274,155,"Méně zimního sněhu",23,ink,700) + text(274,185,"menší přírůstek hmoty",21) +
  bed + ice +
  `<path d="M310 241 L310 308 M300 250 L321 250 M300 267 L321 267 M300 284 L321 284" stroke="${ink}" stroke-width="3"/>` +
  text(67,364,"Sněhová sonda",21,ink,700) + arrow("M230 355 L302 305",ink) +
  `<path d="M693 342 L693 437 M683 352 L703 352 M683 371 L703 371 M683 390 L703 390" stroke="${ink}" stroke-width="3"/>` +
  text(709,245,"Měřicí tyč",21,ink,700) + text(709,275,"ukáže letní úbytek",21) + arrow("M738 290 L701 340",ink) +
  arrow("M416 355 Q511 400 598 413",green) + text(335,463,"Led teče dolů údolím",21,green,700) +
  arrow("M931 472 Q984 475 1038 491",blue) + text(805,390,"Voda odtéká",21,blue,700) +
  panel(38,"Předpověď pro zimu","Zásoba vody ve sněhu se zmenší.","Měříme tloušťku i hustotu sněhu.") +
  panel(570,"Předpověď pro celý rok","Při stejné letní ztrátě je bilance horší.","Ověření vyžaduje obě sezony.")
));

writeFileSync(root + "vetsi-tani.svg", common(
  "Větší tání, ztenčování a ústup čela",
  "Energie taví povrch a voda odnáší hmotu. Po odtání sněhu tmavší led pohlcuje více slunečního záření. Přítok ledu dolů údolím nemusí nahradit místní ztrátu. Nové čelo leží výše než dřívější konec ledovce. Přerušovaná čára je starší obrys, nikoli naměřený profil.",
  text(38,49,"Větší tání mění hmotnost i tvar ledovce",31,ink,700) + text(38,82,"Hypotéza 2 · Tání a pohyb ledu mají rozdílné úlohy",21) +
  `<circle cx="105" cy="143" r="24" fill="#dfb265"/>` +
  text(159,140,"Pohlcené záření",22,orange,700) + text(159,169,"dodává energii povrchu",21) +
  arrow("M130 180 L214 250",orange) +
  text(624,137,"Teplo ze vzduchu",22,orange,700) + text(624,167,"závisí i na větru a vlhkosti",21) +
  arrow("M719 183 Q693 294 626 385",orange) +
  bed + ice +
  `<path d="M60 198 Q220 216 340 266 Q505 323 650 370 Q804 414 1007 479" fill="none" stroke="#6d8382" stroke-width="3" stroke-dasharray="8 7"/>` +
  text(67,365,"Po odtání sněhu",21,ink,700) + text(67,393,"led pohltí více světla",21) + arrow("M293 369 L355 309",ink) +
  arrow("M419 354 Q517 398 598 413",green) + text(361,475,"Přítok ledu",21,green,700) +
  text(812,283,"Starší obrys",21,ink,700) + arrow("M861 299 L866 425",ink) +
  text(734,497,"Nové čelo",21,ink,700) + arrow("M880 488 L921 470",ink) +
  arrow("M937 473 Q987 476 1042 491",blue) +
  panel(38,"Měřitelný úbytek","Energie → tání → odtok vody.","Hmotnosti ubývá, pokud ztráty převáží.") +
  panel(570,"Zpožděná změna délky","Jazyk zaniká tam, kde přítok nestačí.","Led přitom stále proudí dolů.")
));
console.log("Vytvořena dvě kvalitativní schémata horského ledovce.");
