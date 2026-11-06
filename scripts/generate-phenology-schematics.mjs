import { mkdir, writeFile } from "node:fs/promises";

const directory = new URL("../public/media/fenologicke-mechanismy/", import.meta.url);
await mkdir(directory, { recursive: true });
const start = (title, description) => `<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="660" viewBox="0 0 1100 660" role="img" aria-labelledby="title desc">
<title id="title">${title}</title><desc id="desc">${description}</desc>
<defs><marker id="arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#1d5d58"/></marker>
<marker id="warm" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9Z" fill="#a64e35"/></marker></defs>
<style>text{font-family:Arial,Helvetica,sans-serif;font-size:23px;fill:#233940}.title{font-size:32px;font-weight:700}.small{font-size:20px}.label{font-weight:700}.green{fill:#1d5d58}.warm{fill:#a64e35}.blue{fill:#276d90}</style>
<rect width="1100" height="660" rx="12" fill="#f7f4ed"/>`;
const bird = (x, y, scale = 1) => `<g transform="translate(${x} ${y}) scale(${scale})"><path d="M-25 10L-81 2L-66 28L-26 22Z" fill="#6c6459"/><ellipse rx="48" ry="28" fill="#9b8c71"/><path d="M-29 -7Q-8 -30 21 9Q-8 27 -29 -7" fill="#6b6b5a"/><circle cx="34" cy="-21" r="23" fill="#706a5b"/><path d="M54 -23L75 -15L53 -10Z" fill="#a67c38"/><circle cx="41" cy="-27" r="3.5" fill="#fff"/><path d="M-5 26L-8 44M15 25L19 44" stroke="#554c3e" stroke-width="3"/></g>`;
const flower = (x, y, scale = 1) => `<g transform="translate(${x} ${y}) scale(${scale})"><g fill="#e0a3a7" stroke="#b87583" stroke-width="1.5"><ellipse cy="-15" rx="12" ry="17"/><ellipse cy="-15" rx="12" ry="17" transform="rotate(72)"/><ellipse cy="-15" rx="12" ry="17" transform="rotate(144)"/><ellipse cy="-15" rx="12" ry="17" transform="rotate(216)"/><ellipse cy="-15" rx="12" ry="17" transform="rotate(288)"/></g><circle r="8" fill="#e3bd59"/></g>`;
const bud = (x, y) => `<g transform="translate(${x} ${y})"><path d="M0 16Q-28 -4 0 -38Q26 -4 0 16Z" fill="#ad9370" stroke="#725f48" stroke-width="2"/><path d="M0 12L0 -27" stroke="#725f48" stroke-width="2"/></g>`;

const calendar = start("Co vysvětluje sezónní kalendář", "Roční průběh délky dne se opakuje. Světelný signál upravuje vývoj rostlin a spolu s vnitřním rytmem přípravu ptáků k tahu. Bez dalších měnících se vlivů by se termíny soustavně neposouvaly.") + `
<text x="40" y="56" class="title">Co vysvětluje sezónní kalendář</text>
<text x="40" y="91" class="small">Stejné místo · opakující se roční průběh délky dne</text>
<rect x="40" y="115" width="1020" height="111" rx="10" fill="#e9efed"/>
<circle cx="93" cy="170" r="27" fill="#e3ba58"/>
<text x="151" y="150" class="small">zimní den</text><rect x="151" y="165" width="190" height="22" rx="5" fill="#b7c4c3"/><rect x="151" y="165" width="80" height="22" rx="5" fill="#e3ba58"/>
<text x="426" y="150" class="small">jarní den</text><rect x="426" y="165" width="190" height="22" rx="5" fill="#b7c4c3"/><rect x="426" y="165" width="130" height="22" rx="5" fill="#e3ba58"/>
<path d="M650 176H713" stroke="#1d5d58" stroke-width="3" marker-end="url(#arrow)"/>
<text x="747" y="161" class="label">další rok:</text><text x="747" y="190">podobný průběh</text>
<text x="151" y="212" class="small">žlutá: světlo · šedá: tma · délky jsou schematické</text>
<path d="M277 226V263M810 226V263" stroke="#1d5d58" stroke-width="3" marker-end="url(#arrow)"/>
<rect x="40" y="280" width="490" height="210" rx="10" fill="#edf1e5"/>
<text x="62" y="313" class="label">Vývoj rostliny</text>
<path d="M125 466V360M125 420L166 387M125 438L90 404" stroke="#7b7254" stroke-width="6" fill="none"/>
<path d="M125 422Q77 418 85 386Q117 383 125 422" fill="#83a477"/>
${flower(166, 376, 0.85)}
<text x="222" y="365">Světelný signál</text><text x="222" y="395">může podpořit</text><text x="222" y="425">přechod ke kvetení.</text>
<rect x="570" y="280" width="490" height="210" rx="10" fill="#e7eeef"/>
<text x="592" y="313" class="label">Příprava ptáka k tahu</text>
${bird(677, 401, 0.8)}
<text x="774" y="365">Světlo a vnitřní</text><text x="774" y="395">rytmy ovlivňují</text><text x="774" y="425">tělo i aktivitu.</text>
<rect x="40" y="518" width="1020" height="99" rx="10" fill="#fffdf8" stroke="#c8cfc6"/>
<text x="62" y="550" class="label">Předpověď samotného neměnného kalendáře</text>
<text x="62" y="584">Stejný světelný režim a vnitřní nastavení → stejné termíny.</text>
<text x="40" y="646" class="small">Existence kalendáře a jeho dostatečnost jsou dvě různé otázky.</text></svg>`;

const environment = start("Prostředí upravuje biologický vývoj", "Předchozí chlad mění stav pupenu a následné teplo podporuje vývoj k otevřenému květu. Pták potřebuje sezónní připravenost a zásoby z potravy, další pokračování tahu může upravit místní počasí. Obě řady popisují různé biologické procesy.") + `
<text x="40" y="56" class="title">Prostředí upravuje biologický vývoj</text>
<text x="40" y="91" class="small">Dvě různé cesty od vnější podmínky k sezónní události</text>
<rect x="40" y="115" width="1020" height="224" rx="10" fill="#eaf0e4"/>
<text x="62" y="149" class="label">Jarní dřevina · již založený pupen</text>
<path d="M133 283L164 213" stroke="#7b7254" stroke-width="7"/>${bud(164, 212)}
<text x="69" y="315" class="small">vývojový klid</text>
<path d="M217 229H419" stroke="#1d5d58" stroke-width="4" marker-end="url(#arrow)"/>
<text x="232" y="192" class="blue small">předchozí chlad</text><text x="245" y="265" class="small">mění stav pupenu</text>
<path d="M503 283L524 225" stroke="#7b7254" stroke-width="7"/>${bud(524, 223)}
<text x="456" y="315" class="small">připravenost</text>
<path d="M592 229H799" stroke="#a64e35" stroke-width="4" marker-end="url(#warm)"/>
<text x="619" y="192" class="warm small">následné teplo</text><text x="612" y="265" class="small">podporuje vývoj</text>
<path d="M889 281L919 227" stroke="#7b7254" stroke-width="7"/>${flower(922, 213, 1.05)}
<text x="852" y="315" class="small">otevřený květ</text>
<rect x="40" y="362" width="1020" height="210" rx="10" fill="#e7eeef"/>
<text x="62" y="396" class="label">Tažný pták · sezónní připravenost zůstává podmínkou</text>
${bird(151, 465, 0.7)}
<path d="M78 517H204" stroke="#9b927d" stroke-width="3"/>
<circle cx="182" cy="511" r="4" fill="#574b40"/><circle cx="192" cy="511" r="4" fill="#574b40"/>
<text x="66" y="549" class="small">zásoby z potravy</text>
<path d="M251 469H410" stroke="#1d5d58" stroke-width="4" marker-end="url(#arrow)"/>
<text x="254" y="435" class="small">umožňují cestu</text>
${bird(500, 476, 0.85)}
<text x="454" y="549" class="small">odlet</text>
<path d="M598 475Q696 427 794 476" fill="none" stroke="#1d5d58" stroke-width="4" marker-end="url(#arrow)"/>
<text x="610" y="420" class="small">let a další zastávky</text>
${bird(903, 478, 0.7)}
<g transform="translate(1004 442)"><path d="M-6 0A6 6 0 0 1 6 0V36A13 13 0 1 1 -6 36Z" fill="#fffdf8" stroke="#697e80" stroke-width="2"/><path d="M0 12V43" stroke="#a64e35" stroke-width="5"/><circle cy="46" r="7" fill="#a64e35"/></g><text x="811" y="549" class="small">teplota při zastávce</text>
<text x="62" y="608">Méně chladu nebo potravy může postup brzdit. Účinky se nesčítají stejně.</text>
<text x="40" y="646" class="small">Kvalitativní schéma · nejde o jediný mechanismus společný rostlinám a ptákům.</text></svg>`;

await writeFile(new URL("kalendar.svg", directory), calendar);
await writeFile(new URL("prostredi.svg", directory), environment);
console.log("Vytvořena dvě schémata fenologických mechanismů.");
