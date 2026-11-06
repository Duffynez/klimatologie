import { mkdir, writeFile } from "node:fs/promises";

const directory = new URL("../public/media/permafrost-mechanismy/", import.meta.url);
await mkdir(directory, { recursive: true });
const start = (title, description) => `<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="660" viewBox="0 0 1100 660" role="img" aria-labelledby="title desc">
<title id="title">${title}</title><desc id="desc">${description}</desc>
<defs>
<marker id="warm" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#a64e35"/></marker>
<marker id="cool" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#276d90"/></marker>
<marker id="ink" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="#233940"/></marker>
<pattern id="soil" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="8" cy="15" r="2" fill="#819b9b"/><path d="M19 5l5 4" stroke="#819b9b" stroke-width="2"/></pattern>
</defs>
<style>text{font-family:Arial,Helvetica,sans-serif;font-size:23px;fill:#233940}.title{font-size:31px;font-weight:700}.small{font-size:19px}.label{font-weight:700}.warm{fill:#a64e35}.cool{fill:#276d90}.muted{fill:#546d70}</style>
<rect width="1100" height="660" rx="12" fill="#f7f4ed"/>`;

const deep = start("Teplo zdola a teplota v různých hloubkách", "Vlevo řez půdou s tokem geotermálního tepla vzhůru a vrtem. Vpravo srovnání ustáleného hlubokého profilu s odchylkou u povrchu, kterou samotný stálý přísun tepla zdola nevysvětlí. Kvalitativní schéma bez číselných os.") + `
<text x="38" y="55" class="title">Teplo zdola a teplota v různých hloubkách</text>
<text x="38" y="88" class="small">Hypotéza 1 · testujeme zdroj nového oteplení</text>
<rect x="38" y="120" width="490" height="410" rx="10" fill="#e5edeb"/>
<path d="M38 210Q110 202 180 211T320 210T528 212V262H38Z" fill="#c3b29a"/>
<rect x="38" y="262" width="490" height="183" fill="#c4dbe0"/><rect x="38" y="262" width="490" height="183" fill="url(#soil)"/>
<rect x="38" y="445" width="490" height="85" fill="#d5bbaa"/>
<text x="61" y="165" class="label">Povrch odvádí teplo</text>
<text x="61" y="241" class="small">sezónně rozmrzající vrstva</text>
<text x="61" y="298" class="label">permafrost</text>
<text x="61" y="329" class="small">chladnější horní část</text>
<text x="61" y="417" class="small">teplejší spodní část</text>
<g stroke="#a64e35" stroke-width="4" marker-end="url(#warm)"><path d="M310 505V465"/><path d="M310 423V359"/><path d="M310 315V278"/><path d="M310 205V177"/></g>
<text x="61" y="487" class="small">teplo z hlubších hornin</text>
<path d="M446 183V513" stroke="#233940" stroke-width="8"/><path d="M441 263h10M441 348h10M441 443h10M441 499h10" stroke="#fff" stroke-width="5"/>
<text x="421" y="159" class="small">vrt</text>
<rect x="565" y="120" width="497" height="410" rx="10" fill="#fffdf8"/>
<text x="590" y="157" class="label">Co rozlišuje teplotní profil</text>
<path d="M635 206H1033M635 206V469" stroke="#233940" stroke-width="2" fill="none" marker-end="url(#ink)"/>
<text x="752" y="193" class="small">tepleji →</text><text x="591" y="234" class="small">0</text>
<text x="609" y="366" class="small" transform="rotate(-90 609 366)">hloubka</text>
<path d="M705 220L942 460" fill="none" stroke="#276d90" stroke-width="5" stroke-dasharray="9 6"/>
<path d="M835 220C785 249 781 278 792 309L942 460" fill="none" stroke="#a64e35" stroke-width="5"/>
<path d="M891 258L835 248" stroke="#233940" stroke-width="2" marker-end="url(#ink)"/>
<text x="902" y="260" class="small">teplejší</text><text x="902" y="285" class="small">horní část</text>
<text x="655" y="498" class="small">Křivky jsou schematické, bez měřítka.</text>
<path d="M590 558H635" stroke="#276d90" stroke-width="5" stroke-dasharray="9 6"/><text x="650" y="565" class="small">stálý tok zdola, stejná vodivost</text>
<path d="M590 594H635" stroke="#a64e35" stroke-width="5"/><text x="650" y="601" class="small">profil s dodatečným ohřevem shora</text>
<text x="38" y="565" class="label">Přísun zdola je skutečný.</text>
<text x="38" y="597" class="small">Nové mělké oteplení ale vyžaduje</text>
<text x="38" y="623" class="small">vysvětlení odchylky u povrchu.</text>
</svg>`;

const surface = start("Více energie v půdě může mít dvě cesty", "Letní přísun tepla postupuje z povrchu do podloží a spotřebovává se při tání ledu. V zimě sněhová závěj omezuje ztrátu tepla oproti tundře s tenkým sněhem. Oteplení se šíří se zpožděním, po roztání ledu může půda sesednout.") + `
<text x="38" y="55" class="title">Více energie v půdě může mít dvě cesty</text>
<text x="38" y="88" class="small">Hypotéza 2 · přísun tepla v létě i jeho zadržení v zimě</text>
<rect x="38" y="117" width="490" height="414" rx="10" fill="#edf0e6"/>
<text x="60" y="154" class="label">Léto: teplo postupuje dolů</text>
<circle cx="104" cy="209" r="26" fill="#e3ba58"/>
<path d="M153 191L205 242" stroke="#a64e35" stroke-width="4" marker-end="url(#warm)"/>
<text x="226" y="208" class="small">teplejší povrch</text>
<path d="M38 266Q150 254 270 267T528 266V348H38Z" fill="#c5b59d"/>
<text x="61" y="303" class="small">rozmrzlá půda</text>
<rect x="38" y="348" width="490" height="183" fill="#c4dbe0"/><rect x="38" y="348" width="490" height="183" fill="url(#soil)"/>
<path d="M365 278V333" stroke="#a64e35" stroke-width="4" marker-end="url(#warm)"/>
<path d="M60 349H506" stroke="#276d90" stroke-width="3" stroke-dasharray="8 6"/>
<text x="61" y="382" class="label">hranice rozmrzání</text>
<path d="M365 394V442" stroke="#a64e35" stroke-width="3" marker-end="url(#warm)"/>
<path d="M210 421l20 -12l19 23l-21 19Z" fill="#fff" stroke="#276d90" stroke-width="2"/>
<path d="M280 429Q265 448 281 455Q298 446 280 429Z" fill="#5f9fba"/>
<text x="61" y="488" class="small">část energie mění led na vodu</text>
<rect x="565" y="117" width="497" height="414" rx="10" fill="#e6edf1"/>
<text x="587" y="154" class="label">Zima: sníh omezuje únik tepla</text>
<text x="587" y="189" class="small">stejné chladné počasí</text>
<rect x="565" y="360" width="497" height="171" fill="#c4dbe0"/><rect x="565" y="360" width="497" height="171" fill="url(#soil)"/>
<path d="M565 352H750Q810 252 882 267T1062 340V360H565Z" fill="#fff" stroke="#b0c7d1" stroke-width="2"/>
<path d="M773 235V377M786 235V377M799 235V377" stroke="#877357" stroke-width="5"/>
<text x="780" y="222" class="small">sněhový plot</text>
<text x="654" y="329" class="small">tenký sníh</text><text x="889" y="317" class="small">závěj</text>
<g stroke="#276d90" stroke-width="5" marker-end="url(#cool)"><path d="M625 434V370"/><path d="M625 342V253"/></g>
<g stroke="#276d90" stroke-width="2" marker-end="url(#cool)"><path d="M942 434V383"/><path d="M942 280V246"/></g>
<path d="M932 354L951 335M932 366L951 347" stroke="#233940" stroke-width="3"/>
<text x="586" y="476" class="small">větší ochlazení</text><text x="853" y="476" class="small">menší ochlazení</text>
<text x="586" y="504" class="small">teplo ven ↑</text><text x="853" y="504" class="small">půda teplejší</text>
<text x="38" y="570" class="label">Rozhoduje bilance za celý rok.</text>
<text x="38" y="607" class="small">Dlouho ležící sníh na jaře ohřev oddálí. Voda a obsah ledu mění další průběh.</text>
<text x="38" y="636" class="small">Oranžové šipky: přísun tepla · modré: zimní únik · všechny rozměry jsou schematické.</text>
</svg>`;

await writeFile(new URL("teplo-z-hloubky.svg", directory), deep);
await writeFile(new URL("teplo-od-povrchu.svg", directory), surface);
console.log("Vytvořena dvě kvalitativní schémata permafrostu.");
