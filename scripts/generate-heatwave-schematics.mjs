import { mkdir, writeFile } from "node:fs/promises";

const directory = new URL("../public/media/mechanismy-vln-veder/", import.meta.url);
await mkdir(directory, { recursive: true });
const start = (title, description) => `<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="660" viewBox="0 0 1100 660" role="img" aria-labelledby="title desc">
<title id="title">${title}</title><desc id="desc">${description}</desc>
<defs>
<marker id="warm" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#b85a32"/></marker>
<marker id="air" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#1d5d58"/></marker>
<marker id="water" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#35789a"/></marker>
</defs><style>text{font-family:Arial,Helvetica,sans-serif;fill:#233940;font-size:23px}.title{font-size:32px;font-weight:700}.small{font-size:20px}.label{font-weight:700}.warm{fill:#9c4627}.sea{fill:#1d5d58}.water{fill:#276d90}</style>
<rect width="1100" height="660" rx="12" fill="#f7f4ed"/>`;

const circulation = start("Co dovede samotné proudění", "Letní blokování odklání postup tlakových útvarů. Sestup vzduchu, sluneční ohřev povrchu a přenos teplého vzduchu podporují vedro. Pro dlouhodobý trend je nutné zkoumat změny výskytu těchto situací.") + `
<text x="42" y="56" class="title">Co dovede samotné proudění</text>
<text x="42" y="91" class="small">Letní situace nad pevninou · kvalitativní schéma</text>
<rect x="40" y="119" width="1020" height="365" rx="12" fill="#e9f0ec"/>
<path d="M56 423 Q200 386 350 421 T650 414 T1045 419 L1045 484 L56 484Z" fill="#d6cfb3"/>
<ellipse cx="584" cy="275" rx="180" ry="114" fill="#f7e7cc" stroke="#bd8a51" stroke-width="2"/>
<text x="542" y="251" font-size="44" class="warm label">VÝŠE</text>
<text x="492" y="284" class="small">přetrvává nad oblastí</text>
<path d="M90 219 C230 219 280 219 348 175 C460 94 732 127 818 174 C896 215 954 212 1020 211" fill="none" stroke="#1d5d58" stroke-width="7" marker-end="url(#air)"/>
<text x="716" y="143" class="sea small">odklon postupu počasí</text>
<path d="M580 306 L580 376" stroke="#b85a32" stroke-width="6" marker-end="url(#warm)"/>
<text x="647" y="323" class="small">Sestupující vzduch</text><text x="647" y="351" class="small">se stlačuje a ohřívá.</text>
<circle cx="183" cy="294" r="29" fill="#e5b453"/>
<path d="M207 321 L258 388" stroke="#b88c37" stroke-width="4" marker-end="url(#warm)"/>
<text x="84" y="355" class="small">Slunce</text><text x="78" y="381" class="small">ohřívá povrch.</text>
<path d="M320 461 Q400 432 506 430" fill="none" stroke="#b85a32" stroke-width="5" marker-end="url(#warm)"/>
<text x="597" y="461" class="small warm">přenos teplého vzduchu větrem</text>
<rect x="40" y="510" width="1020" height="112" rx="10" fill="#fffdf8" stroke="#c8cfc6"/>
<text x="62" y="545" class="label">Rozlišující předpověď pro dlouhodobou změnu</text>
<text x="62" y="579">Při stálých teplotních podmínkách musí celý růst extrémů vysvětlit</text>
<text x="62" y="608">změny výskytu, trvání nebo podoby horkých povětrnostních situací.</text>
<text x="42" y="647" class="small">Schéma neudává naměřené toky ani skutečnou velikost tlakových útvarů.</text></svg>`;

const land = (x, dry) => `<g transform="translate(${x},190)">
<rect width="475" height="277" rx="10" fill="${dry ? "#f5e3d2" : "#e7efed"}"/>
<path d="M0 218 Q100 198 235 215 T475 215 V277 H0Z" fill="${dry ? "#d5b08d" : "#a8b49a"}"/>
<path d="M55 68 H400" stroke="#1d5d58" stroke-width="4" marker-end="url(#air)"/>
<text x="90" y="42" class="small sea">srovnatelný pohyb vzduchu</text>
<circle cx="49" cy="119" r="20" fill="#e5b453"/>
<path d="M64 139 L98 191" stroke="#b88c37" stroke-width="3" marker-end="url(#warm)"/>
${dry ? `<path d="M170 213 Q159 195 175 176" fill="none" stroke="#35789a" stroke-width="4" marker-end="url(#water)"/>
<path d="M132 241 l34 -12 19 22 30 -15 28 20 34 -22 23 16" fill="none" stroke="#9c795d" stroke-width="2"/>
<path d="M300 204 Q278 168 301 117" fill="none" stroke="#b85a32" stroke-width="5" marker-end="url(#warm)"/>
<text x="105" y="159" class="small water">méně výparu</text><text x="326" y="149" class="small warm">více</text><text x="326" y="176" class="small warm">ohřevu</text>` : `<path d="M171 209 Q146 166 172 114" fill="none" stroke="#35789a" stroke-width="5" marker-end="url(#water)"/>
<path d="M294 209 Q278 189 294 168" fill="none" stroke="#b85a32" stroke-width="4" marker-end="url(#warm)"/>
<text x="192" y="128" class="small water">energie</text><text x="192" y="155" class="small water">pro výpar</text>
<path d="M140 249 Q145 232 150 249 T170 249 T190 249" fill="none" stroke="#35789a" stroke-width="3"/>`}
<text x="27" y="265" class="label">${dry ? "Vyschlá půda" : "Voda dostupná v půdě"}</text></g>`;

const warming = start("Teplejší klima a omezení výparu", "Oteplování zvyšuje teplotní úroveň, na které se odehrává počasí. Při stejném slunečním příkonu může vysychání dále přesměrovat energii z výparu do ohřevu. Jde o dvě souběžné změny, nikoli pokus izolující jedinou příčinu.") + `
<text x="42" y="56" class="title">Teplejší klima a omezení výparu</text>
<text x="42" y="91" class="small">Dvě souběžně možné změny · kvalitativní schéma</text>
<rect x="40" y="113" width="1020" height="56" rx="10" fill="#fffdf8"/>
<text x="62" y="149">Oteplování posouvá teplotu, ze které horká epizoda vychází.</text>
${land(40, false)}${land(585, true)}
<text x="50" y="500" class="small">Při stejném slunečním příkonu může vysychání dále změnit rozdělení energie.</text>
<rect x="40" y="522" width="1020" height="100" rx="10" fill="#fffdf8" stroke="#c8cfc6"/>
<text x="62" y="556" class="label">Rozlišující předpověď</text>
<text x="62" y="588">Podobné proudění může v teplejším klimatu přinést vyšší teplotu.</text>
<text x="62" y="615" class="small">Změnu klimatických podmínek a půdní vody testujeme odděleně.</text>
<text x="42" y="647" class="small">Šipky označují směr dějů, nikoli změřenou velikost energetických toků.</text></svg>`;

await writeFile(new URL("proudeni.svg", directory), circulation);
await writeFile(new URL("oteplovani-a-puda.svg", directory), warming);
console.log("Created two qualitative heatwave schematics.");
