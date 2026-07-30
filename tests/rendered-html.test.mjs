import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("keeps the source library, categories, and its download model in the site", async () => {
  const [sources, sourceCard] = await Promise.all([
    readFile(new URL("app/data/sources.ts", root), "utf8"),
    readFile(new URL("app/components/SourceCard.tsx", root), "utf8"),
  ]);

  assert.match(sources, /1681_Mariotte/);
  assert.match(sources, /1961_Sullivan/);
  assert.match(sources, /drive\.google\.com\/uc\?export=download/);
  assert.match(sources, /SourceCategory/);
  assert.match(sources, /"science" \| "book" \| "politics" \| "organization"/);
  assert.match(sourceCard, /source-card--\$\{source\.category\}/);
  assert.match(sourceCard, /Google Drive/);
});

test("replaces the temporary starter surface", async () => {
  const [home, layout, header] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("app/components/SiteHeader.tsx", root), "utf8"),
  ]);

  assert.match(home, /Data, souvislosti, zdroje/);
  assert.match(home, /earth-europe\.jpg/);
  assert.match(home, /unoptimized/);
  assert.match(layout, /Klimatologie\.eu/);
  assert.match(header, /href: "\/", label: "Úvod"/);
  assert.doesNotMatch(home, /SkeletonPreview|codex-preview/);
});

test("keeps categorized citations and arrow navigation in the history timeline", async () => {
  const [citation, history] = await Promise.all([
    readFile(new URL("app/components/Citation.tsx", root), "utf8"),
    readFile(new URL("app/historie/page.tsx", root), "utf8"),
  ]);

  assert.match(citation, /citation--\$\{source\.category\}/);
  assert.match(history, /timeline__item--\$\{source\.category\}/);
  assert.match(history, /Předchozí milník/);
  assert.match(history, /Další milník/);
});

test("publishes the global surface temperature article instead of the generic placeholder", async () => {
  const [article, evidencePage, styles] = await Promise.all([
    readFile(new URL("app/components/GmstArticle.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
  ]);

  assert.match(evidencePage, /GmstArticle/);
  assert.match(article, /Globální teplota u povrchu je plošně vážená časová řada/);
  assert.match(article, /Od kdy máme globální řadu/);
  assert.match(article, /Nejistota je součást výsledku/);
  assert.match(article, /Slovníček pojmů/);
  assert.match(article, /NOAAGlobalTemp v6\.1/);
  assert.doesNotMatch(article, /<dt>Teplota u povrchu<\/dt>/);
  assert.doesNotMatch(article, /<dt>Anomálie<\/dt>/);
  assert.doesNotMatch(article, /<dt>Homogenizace<\/dt>/);
  assert.doesNotMatch(styles, /\.article-glossary\s*\{\s*position: fixed/);
  assert.match(styles, /\.article-glossary dl\s*\{\s*display: grid/);
  assert.match(article, /10\.1029\/2019JD032361/);
  assert.match(article, /10\.1029\/94JD00548/);
  assert.match(article, /10\.1029\/2001GL012877/);
  assert.match(article, /10\.1175\/JCLI3362\.1/);
  assert.match(article, /10\.1029\/2011JD017187/);
  assert.match(article, /10\.5194\/essd-12-3469-2020/);
  assert.match(article, /gistemp-stations-robinson\.png/);
  assert.match(article, /noaa-weather-buoy-44008\.jpg/);
  assert.match(article, /gistemp-five-year-anomaly-1880-2025\.mp4/);
  assert.match(article, /global-temperature-four-datasets-nasa\.jpg/);
  assert.match(article, /NASA Scientific Visualization\s+Studio/);
  assert.match(article, /Gavin Schmidt \/ NASA/);
  assert.match(styles, /\.article-figure__media\s*\{/);
});
test("publishes a full stratospheric temperature article instead of the generic placeholder", async () => {
  const [article, evidencePage, evidence] = await Promise.all([
    readFile(new URL("app/components/StratosphericCoolingArticle.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/evidence.ts", root), "utf8"),
  ]);

  assert.match(evidencePage, /StratosphericCoolingArticle/);
  assert.match(article, /Stratosféra je druhá velká vrstva zemské atmosféry/);
  assert.match(article, /atmosphere-with-ionosphere-cs\.svg/);
  assert.match(article, /Jak číst srovnávací graf/);
  assert.match(article, /a\) Dolní stratosféra/);
  assert.match(article, /d\) Dolní troposféra/);
  assert.match(article, /<h2>Pozorování<\/h2>/);
  assert.doesNotMatch(article, /Nejistota stratosférické teplotní řady nevychází jen z přesnosti jednoho čidla/);
  assert.match(article, /Slovníček pojmů/);
  assert.match(article, /10\.1029\/2008JD010421/);
  assert.match(article, /10\.1029\/2004JD005753/);
  assert.match(article, /10\.1175\/JCLI-D-11-00668\.1/);
  assert.match(article, /10\.1175\/2008JTECHA1176\.1/);
  assert.match(article, /10\.1175\/JTECH-D-16-0018\.1/);
  assert.match(article, /10\.1175\/JCLI-D-19-0998\.1/);
  assert.match(article, /10\.5194\/acp-24-12925-2024/);
  assert.match(article, /noaa-radiosonde-balloon-1944\.jpg/);
  assert.match(article, /jra3q-lower-stratosphere-comparison-2021\.png/);
  assert.match(article, /10\.2151\/jmsj\.2024-004/);
  assert.match(article, /nasa-satellite-atmospheric-trends-1979-2005\.jpg/);
  assert.match(evidence, /slug: "stratosfericke-ochlazovani"[\s\S]*status: "hotovo"/);
});

test("keeps the current catalogue of thirteen observations", async () => {
  const evidence = await readFile(new URL("app/data/evidence.ts", root), "utf8");
  const slugs = [...evidence.matchAll(/\{ slug: "([^"]+)"/g)].map((match) => match[1]);

  assert.deepEqual(slugs, [
    "gmst",
    "stratosfericke-ochlazovani",
    "atmosfericka-koncentrace-co2",
    "narust-vlhkosti",
    "srazky-a-privalove-srazky",
    "gmsl",
    "acidifikace-oceanu",
    "ubytek-arktickeho-ledu",
    "ustup-ledovcu",
    "nestabilita-prikrovu",
    "snehova-pokryvka-a-permafrost",
    "fenologicke-posuny",
    "vlny-veder",
  ]);
  assert.match(evidence, /title: "Globální teplota u povrchu"/);
  assert.match(evidence, /title: "Teplota stratosféry"/);
  assert.match(evidence, /title: "Atmosférická koncentrace CO2"/);
  assert.match(evidence, /title: "Sněhová pokrývka a permafrost"/);
});
