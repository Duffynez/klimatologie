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
  const [article, evidencePage, evidence, styles] = await Promise.all([
    readFile(new URL("app/components/GmstArticle.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/evidence.ts", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
  ]);

  assert.match(evidencePage, /GmstArticle/);
  assert.match(evidencePage, /title="Globální teplota u povrchu"/);
  assert.match(evidencePage, /Napsáno: 30\. července 2026/);
  assert.match(article, /Globální teplota u povrchu vyjadřuje, jak se průměrná teplota/);
  assert.match(article, /Historie globálního výpočtu/);
  assert.match(article, /Jak vzniká globální výpočet/);
  assert.match(article, /<h2 id="pozorovani">Pozorování<\/h2>/);
  assert.match(article, /Potřebné informace/);
  assert.equal((article.match(/<dt>/g) ?? []).length, 4);
  assert.match(article, /<dt>SST<\/dt>/);
  assert.match(article, /<dt>Referenční období<\/dt>/);
  assert.match(article, /<dt>Mřížka<\/dt>/);
  assert.match(article, /<dt>Plošné vážení<\/dt>/);
  assert.match(article, /NOAAGlobalTemp v6\.1\.0/);
  assert.match(article, /HadCRUT\.5\.1\.0\.0/);
  assert.match(article, /NASA GISTEMP v4/);
  assert.match(article, /Berkeley Earth Land\/Ocean/);
  assert.match(article, /1,43 ± 0,13 °C/);
  assert.match(article, /1,09 °C/);
  assert.doesNotMatch(article, /<dt>Teplota u povrchu<\/dt>/);
  assert.doesNotMatch(article, /<dt>Anomálie<\/dt>/);
  assert.doesNotMatch(article, /<dt>Homogenizace<\/dt>/);
  assert.doesNotMatch(article, /časová řada/);
  assert.doesNotMatch(styles, /\.article-glossary\s*\{\s*position: fixed/);
  assert.match(styles, /\.article-glossary dl\s*\{\s*display: grid/);
  assert.match(styles, /\.article-figure--scroll-wide \.article-figure__media/);
  assert.match(article, /10\.1002\/qj\.49706427503/);
  assert.match(article, /10\.1002\/qj\.49708737102/);
  assert.match(article, /10\.1038\/322430a0/);
  assert.match(article, /10\.1029\/JD092iD11p13345/);
  assert.match(article, /10\.1029\/2010RG000345/);
  assert.match(article, /10\.1029\/2019JD032361/);
  assert.match(article, /10\.1175\/BAMS-D-24-0012\.1/);
  assert.match(article, /10\.1029\/2023JD040179/);
  assert.match(article, /10\.5194\/essd-12-3469-2020/);
  assert.match(article, /gistemp-stations-robinson\.png/);
  assert.match(article, /noaa-drifting-buoy-deployment\.jpg/);
  assert.match(article, /gistemp-five-year-anomaly-1880-2025\.mp4/);
  assert.match(article, /c3s-global-temperature-datasets-1850-2025\.png/);
  assert.match(article, /NASA Scientific Visualization Studio/);
  assert.match(article, /C3S\/ECMWF/);
  assert.match(article, /licence-to-use-copernicus-products/);
  assert.match(styles, /\.article-figure__media\s*\{/);
  assert.match(evidence, /slug: "gmst"[\s\S]*status: "hotovo"/);
});
test("publishes a full stratospheric temperature article instead of the generic placeholder", async () => {
  const [article, evidencePage, evidence, styles] = await Promise.all([
    readFile(new URL("app/components/StratosphericCoolingArticle.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/evidence.ts", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
  ]);

  assert.match(evidencePage, /StratosphericCoolingArticle/);
  assert.match(evidencePage, /title="Teplota stratosféry"/);
  assert.match(evidencePage, /Napsáno: 30\. července 2026/);
  assert.match(article, /Teplotou stratosféry označujeme teplotu vzduchu mezi tropopauzou a stratopauzou/);
  assert.match(article, /Potřebné informace/);
  assert.match(article, /Tlaková hladina/);
  assert.match(article, /Vrstvová teplota/);
  assert.match(article, /Váhová funkce/);
  assert.match(article, /noaa-atmosphere-temperature-profile\.png/);
  assert.match(article, /ncar-stratospheric-weighting-functions\.png/);
  assert.match(article, /ncar-stratospheric-temperature-1979-2024\.png/);
  assert.match(article, /<h2 id="pozorovani">Pozorování<\/h2>/);
  assert.match(article, /Přesné shrnutí pozorování/);
  assert.match(article, /−0,25 ± 0,16 K za desetiletí/);
  assert.match(article, /State of the Climate in 2024/);
  assert.match(article, /Usage Restrictions: None/);
  assert.doesNotMatch(article, /datové řady|časové řady|pozorovací řady/);
  assert.doesNotMatch(article, /atmosphere-with-ionosphere-cs\.svg/);
  assert.doesNotMatch(article, /jra3q-lower-stratosphere-comparison-2021\.png/);
  assert.doesNotMatch(article, /nasa-satellite-atmospheric-trends-1979-2005\.jpg/);
  assert.match(article, /10\.1029\/2008JD010421/);
  assert.match(article, /10\.1029\/2004JD005753/);
  assert.match(article, /10\.1175\/JCLI-D-11-00668\.1/);
  assert.match(article, /10\.1175\/2008JTECHA1176\.1/);
  assert.match(article, /10\.1175\/JTECH-D-16-0018\.1/);
  assert.match(article, /10\.1175\/JCLI-D-19-0998\.1/);
  assert.match(article, /10\.5194\/acp-24-12925-2024/);
  assert.match(article, /10\.1038\/s41612-022-00229-7/);
  assert.match(article, /noaa-radiosonde-balloon-1944\.jpg/);
  assert.match(styles, /\.article-figure--scroll-wide \.article-figure__media/);
  assert.match(evidence, /slug: "stratosfericke-ochlazovani"[\s\S]*status: "hotovo"/);
});

test("publishes a sourced ocean heat content article instead of the generic placeholder", async () => {
  const [article, evidencePage, evidence] = await Promise.all([
    readFile(new URL("app/components/OceanHeatArticle.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/evidence.ts", root), "utf8"),
  ]);

  assert.match(evidencePage, /OceanHeatArticle/);
  assert.match(evidencePage, /Napsáno: 30\. července 2026/);
  assert.match(article, /Obsah tepla v oceánu vyjadřuje/);
  assert.match(article, /Jak vzniká globální výpočet/);
  assert.match(article, /<h2 id="pozorovani">Pozorování<\/h2>/);
  assert.match(article, /pan-2026-ohc-upper-2000m\.png/);
  assert.match(article, /noaa-ohc-trend-1993-2024\.png/);
  assert.match(article, /argo-float-deployment\.jpg/);
  assert.match(article, /10\.1126\/science\.287\.5461\.2225/);
  assert.match(article, /10\.1038\/nature07080/);
  assert.match(article, /10\.1038\/nature09043/);
  assert.match(article, /10\.1029\/2012GL051106/);
  assert.match(article, /10\.1126\/sciadv\.1601545/);
  assert.match(article, /10\.5194\/essd-16-3517-2024/);
  assert.match(article, /10\.1007\/s00376-026-5876-0/);
  assert.match(article, /10\.1029\/2024GL111229/);
  assert.match(article, /CC BY 4\.0/);
  assert.doesNotMatch(article, /Teplo je energie uložená ve vodě/);
  assert.doesNotMatch(article, /Tepelná energie/);
  assert.match(evidence, /slug: "tepelny-obsah-oceanu"[\s\S]*status: "hotovo"/);
});

test("keeps the current catalogue of fourteen observations", async () => {
  const evidence = await readFile(new URL("app/data/evidence.ts", root), "utf8");
  const slugs = [...evidence.matchAll(/\{ slug: "([^"]+)"/g)].map((match) => match[1]);

  assert.deepEqual(slugs, [
    "gmst",
    "stratosfericke-ochlazovani",
    "atmosfericka-koncentrace-co2",
    "narust-vlhkosti",
    "srazky-a-privalove-srazky",
    "tepelny-obsah-oceanu",
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
  assert.match(evidence, /title: "Obsah tepla v oceánu"/);
  assert.match(evidence, /title: "Sněhová pokrývka a permafrost"/);
});
