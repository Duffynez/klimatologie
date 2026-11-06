// Vlastní kvalitativní schémata. Spuštění: node public/media/ledove-prikrovy-mechanismy/grafika.mjs
import { writeFile } from "node:fs/promises";
const escape = s => s.replaceAll("&", "&amp;").replaceAll("<", "&lt;");
const text = (x,y,lines,{size=23,color="#173b3f",weight=400,anchor="start"}={}) =>
  `<text x="${x}" y="${y}" font-size="${size}" fill="${color}" font-weight="${weight}" text-anchor="${anchor}">${lines.map((s,i)=>`<tspan x="${x}" dy="${i ? 29 : 0}">${escape(s)}</tspan>`).join("")}</text>`;
const arrow = (d,color="sea",width=5) => `<path d="${d}" fill="none" stroke="var(--${color})" stroke-width="${width}" marker-end="url(#${color})"/>`;
const frame = (title,desc,body) => `<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="660" viewBox="0 0 1100 660" role="img" aria-labelledby="title desc">
<title id="title">${escape(title)}</title><desc id="desc">${escape(desc)}</desc>
<style>svg{--sea:#1d5d58;--heat:#b65a36;--water:#287aa1;--resist:#8b3857;font-family:Arial,sans-serif}path,line,rect,circle{vector-effect:non-scaling-stroke}</style>
<defs>${[["sea","#1d5d58"],["heat","#b65a36"],["water","#287aa1"],["resist","#8b3857"]].map(([id,c])=>`<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="${c}"/></marker>`).join("")}</defs>
<rect width="1100" height="660" rx="12" fill="#f8f5ed"/>
${text(38,48,[title],{size:29,weight:700})}
${body}
${text(38,639,["Kvalitativní schéma • délky šipek ani rozměry neudávají měřené hodnoty"],{size:18,color:"#526869"})}
</svg>\n`;

const surface = frame("Tání povrchu a odtok vody",
  "Sněžení přidává hmotu. Energie taví povrch, část vody znovu zamrzne a část odteče do řeky. Místní vodní bilance se porovnává s řekou, hmotnost celého příkrovu s družicovou gravitací. Pevný led odtéká samostatnou cestou.",
  `${text(38,84,["Tání a skutečná ztráta hmotnosti nejsou stejné množství."],{size:22})}
  <path d="M38 443 L38 367 Q260 353 475 385 Q675 418 832 449 L1062 469 L1062 484 L38 484Z" fill="#b7ad99"/>
  <path d="M38 367 L38 253 Q239 248 426 300 Q612 342 802 391 L832 449 Q665 420 475 385 Q260 353 38 367Z" fill="#d9e9eb" stroke="#7fadb6" stroke-width="2"/>
  <path d="M38 253 Q239 248 426 300 Q612 342 802 391" fill="none" stroke="#fff" stroke-width="10"/>
  ${text(72,136,["Sněžení", "přidává hmotu"],{size:23,weight:700})}
  ${arrow("M155 181L155 228")}
  ${text(400,136,["Záření a výměna tepla", "se vzduchem dodávají energii"],{size:23,color:"#9c482d"})}
  ${arrow("M525 182L525 307","heat")}
  ${text(744,234,["Povrch taje", "a voda se rozděluje"],{size:23,weight:700})}
  ${arrow("M744 265Q685 283 652 346","water")}
  ${arrow("M618 360Q560 355 549 388","water")}
  ${text(266,428,["Část vody se zadrží", "nebo znovu zamrzne."],{size:22})}
  ${arrow("M670 365Q780 401 842 431Q927 440 1039 450","water")}
  ${text(830,358,["Odtok vody", "do řeky"],{size:23,color:"#20688b",weight:700})}
  ${arrow("M97 322L224 326")}
  ${text(62,395,["Pevný led také proudí."],{size:20})}
  <rect x="38" y="506" width="495" height="100" rx="8" fill="#fff" stroke="#c5d3cd"/>
  ${text(58,537,["TEST 1 • Povodí v západním Grónsku"],{size:21,weight:700})}
  ${text(58,570,["Výpočet odtoku ↔ měření řeky Watson"],{size:21})}
  <rect x="553" y="506" width="509" height="100" rx="8" fill="#fff" stroke="#c5d3cd"/>
  ${text(573,537,["TEST 2 • Celý grónský příkrov"],{size:21,weight:700})}
  ${text(573,570,["Bilance povrchu a ledu ↔ gravitace"],{size:21})}`);

const support = frame("Pohyb ledu: šelf může přenášet odpor proti toku",
  "Dva schematické řezy ukazují ukotvený led a plovoucí šelf. Vlevo se šelf opírá o podmořskou vyvýšeninu a může brzdit ledovec. Vpravo ztenčení či rozpad oporu zeslabí a led z pevniny může zrychlit. Oceánská voda může tavit spodní stranu šelfu.",
  `${text(38,84,["Ztráta plovoucího ledu může změnit tok ledu, který dosud leží na podloží."],{size:22})}
  <rect x="38" y="110" width="495" height="367" rx="8" fill="#fff" stroke="#c5d3cd"/>
  <rect x="553" y="110" width="509" height="367" rx="8" fill="#fff" stroke="#c5d3cd"/>
  ${text(58,147,["A • Šelf s mechanickou oporou"],{size:23,weight:700})}
  ${text(573,147,["B • Oslabení nebo ztráta opory"],{size:23,weight:700})}
  <path d="M205 285H513V418H58V374Z" fill="#b7dce7"/>
  <path d="M720 285H1042V418H573V374Z" fill="#b7dce7"/>
  <path d="M58 307L194 324L246 373L367 399L423 335L467 402L513 415V448H58Z" fill="#b7ad99"/>
  <path d="M573 307L709 324L761 373L882 399L938 335L982 402L1042 415V448H573Z" fill="#b7ad99"/>
  <path d="M58 198Q158 218 221 254L490 268L490 336L423 335L249 327L194 324L58 307Z" fill="#d9e9eb" stroke="#7fadb6" stroke-width="2"/>
  <path d="M573 216Q660 229 730 266L861 278L861 310L730 322L709 324L573 307Z" fill="#d9e9eb" stroke="#7fadb6" stroke-width="2"/>
  <path d="M900 277L938 277L938 305L900 305Z M966 279L1002 280L1002 302L966 302Z" fill="#d9e9eb" stroke="#7fadb6" stroke-width="2"/>
  ${arrow("M84 270L178 280")}
  ${arrow("M594 277L710 291")}
  ${arrow("M714 291L803 295")}
  ${arrow("M403 313L326 313","resist")}
  ${text(266,294,["Odpor proti toku"],{size:18,color:"#8b3857"})}
  ${text(283,197,["Plovoucí šelf"],{size:23,weight:700})}
  <path d="M369 209L369 262" stroke="#526869" stroke-width="2"/>
  ${text(58,184,["Led na podloží"],{size:20})}
  ${text(575,184,["Přítok může zrychlit."],{size:22,color:"#1d5d58",weight:700})}
  ${text(838,236,["Rozpad"],{size:22})}
  <path d="M927 244L927 271" stroke="#526869" stroke-width="2"/>
  <circle cx="205" cy="325" r="7" fill="#b65a36"/>
  <path d="M205 332L193 386" stroke="#b65a36" stroke-width="2"/>
  ${text(66,410,["Linie ukotvení"],{size:21})}
  <path d="M423 341L423 417" stroke="#526869" stroke-width="2"/>
  ${text(317,440,["Kontakt se dnem"],{size:21})}
  ${arrow("M1030 352Q1000 318 962 318Q914 317 876 325L805 342","heat")}
  ${text(777,414,["Teplo z oceánu může", "tavit šelf zespodu."],{size:21,color:"#9c482d"})}
  <rect x="38" y="495" width="1024" height="111" rx="8" fill="#e8efea"/>
  ${text(58,526,["Opora závisí na geometrii a kontaktech."],{size:23,weight:700})}
  ${text(58,558,["Odpor přenášejí také boky zálivu, které v řezu nejsou vidět.","Ne každý plovoucí okraj brzdí stejně. Rozpad a spodní tání jsou různé děje."],{size:21})}`);

await writeFile(new URL("povrchova-bilance.svg",import.meta.url),surface);
await writeFile(new URL("povrch-a-odtok-ledu.svg",import.meta.url),support);
console.log("Vytvořena dvě kvalitativní SVG schémata 1100 × 660.");
