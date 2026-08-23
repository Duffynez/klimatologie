import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const sourceCatalogueText = (await Promise.all([
  readFile(new URL("app/data/sources.ts", root), "utf8"),
  readFile(new URL("app/data/articleSources.ts", root), "utf8"),
])).join("\n");

test("keeps the source library, categories, and its download model in the site", async () => {
  const [sources, articleSources, sourceArchive, sourceCard, sourceLibrary, sourcePage, styles] = await Promise.all([
    readFile(new URL("app/data/sources.ts", root), "utf8"),
    readFile(new URL("app/data/articleSources.ts", root), "utf8"),
    readFile(new URL("app/data/sourceArchive.ts", root), "utf8"),
    readFile(new URL("app/components/SourceCard.tsx", root), "utf8"),
    readFile(new URL("app/components/SourceLibrary.tsx", root), "utf8"),
    readFile(new URL("app/zdroje/page.tsx", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
  ]);

  assert.match(sources, /1681_Mariotte/);
  assert.match(sources, /2000_Argo/);
  assert.match(sources, /\.\.\.articleSources/);
  assert.ok((articleSources.match(/^  \{ id:/gm) ?? []).length >= 487);
  assert.doesNotMatch(articleSources, /author: "doi\.org"|<\/?(?:sub|sup|i)>|�/);
  assert.match(sources, /drive\.google\.com\/uc\?export=download/);
  assert.equal((sourceArchive.match(/"driveFileId":/g) ?? []).length, 228);
  assert.match(sourceArchive, /"relation": "source-copy"/);
  assert.match(sourceArchive, /"relation": "related-material"/);
  assert.match(sources, /sourceArchiveFiles/);
  assert.match(sources, /archiveRelation/);
  assert.match(sources, /SourceCategory/);
  assert.match(sources, /"science" \| "book" \| "politics" \| "organization"/);
  assert.doesNotMatch(sources, /"media"|Média a kultura/);
  assert.match(sourceCard, /source-card--\$\{source\.category\}/);
  assert.match(sourceCard, /source-card__body/);
  assert.match(sourceCard, /Google Drive/);
  assert.match(sourceCard, /Otevřít DOI/);
  assert.match(sourceCard, /Otevřít plný text/);
  assert.match(sourceCard, /Otevřít související soubor/);
  assert.match(sourceCard, /Stáhnout související soubor/);
  assert.match(sourceLibrary, /^"use client"/);
  assert.match(sourceLibrary, /Typ zdroje/);
  assert.match(sourceLibrary, /Všechna období/);
  assert.match(sourceLibrary, /Od nejnovějších/);
  assert.match(sourceLibrary, /Hledat ve zdrojích/);
  assert.match(sourceLibrary, /normalizeSearchText/);
  assert.match(sourceLibrary, /aria-live="polite"/);
  assert.match(sourcePage, /<SourceLibrary sources=\{sources\}/);
  assert.match(styles, /\.source-filters/);
  assert.match(styles, /\.source-card__actions \{[\s\S]*?justify-content: flex-end/);
});

test("routes every published article source through the central catalogue", async () => {
  const componentDirectory = new URL("app/components/", root);
  const articleFiles = (await readdir(componentDirectory)).filter((name) => name.endsWith("Article.tsx"));
  const sourceIds = new Set([...sourceCatalogueText.matchAll(/\bid:\s*"([^"]+)"/g)].map((match) => match[1]));

  for (const file of articleFiles) {
    const article = await readFile(new URL(file, componentDirectory), "utf8");
    assert.doesNotMatch(article, /<ReferenceLink\b/, `${file} still uses ReferenceLink`);
    assert.doesNotMatch(article, /<a\b[^>]*href="https?:\/\//, `${file} contains an uncatalogued URL`);

    for (const match of article.matchAll(/<(?:Citation|SourceLink)\s+id="([^"]+)"/g)) {
      assert.ok(sourceIds.has(match[1]), `${file} references missing source ${match[1]}`);
    }
  }
});

test("replaces the temporary starter surface", async () => {
  const [home, layout, header, footer, robots, sitemap] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("app/components/SiteHeader.tsx", root), "utf8"),
    readFile(new URL("app/components/SiteFooter.tsx", root), "utf8"),
    readFile(new URL("public/robots.txt", root), "utf8"),
    readFile(new URL("public/sitemap.xml", root), "utf8"),
  ]);

  assert.match(home, /Jak víme, co se s klimatem děje/);
  assert.match(home, /co bylo skutečně pozorováno nebo změřeno/);
  assert.match(home, /veřejnými daty a původními studiemi/);
  assert.match(home, /earth-europe\.jpg/);
  assert.match(home, /unoptimized/);
  assert.match(home, /featuredObservationSlugs[\s\S]*"gmst"[\s\S]*"stratosfericke-ochlazovani"[\s\S]*"ustup-ledovcu"/);
  assert.doesNotMatch(home, /Mapa pozorování|slice\(0, 6\)/);
  assert.match(layout, /Klimatologie\.eu/);
  assert.match(layout, /static\.cloudflareinsights\.com\/beacon\.min\.js/);
  assert.match(layout, /5e5e8b07ed9f445d82e999e0de1c8f65/);
  assert.match(header, /label: "Úvod"[\s\S]*label: "Pozorování"[\s\S]*label: "Metody"[\s\S]*label: "Mechanismy"[\s\S]*label: "Projekce"[\s\S]*label: "Důsledky"[\s\S]*label: "Historie"[\s\S]*label: "Osobnosti"[\s\S]*label: "Zdroje"/);
  assert.doesNotMatch(header, /Slovníček|Otázky|\/slovnicek|\/disidenti/);
  assert.doesNotMatch(footer, /Jak pracujeme s daty|Zápisník projektu|\/metody|\/blog/);
  assert.match(robots, /Sitemap: https:\/\/klimatologie\.eu\/sitemap\.xml/);
  assert.match(sitemap, /https:\/\/klimatologie\.eu\/pozorovani\/stratosfericke-ochlazovani\//);
  assert.match(sitemap, /https:\/\/klimatologie\.eu\/pozorovani\/tepelny-obsah-oceanu\//);
  assert.match(sitemap, /https:\/\/klimatologie\.eu\/metody\//);
  assert.doesNotMatch(sitemap, /\/slovnicek\/|\/disidenti\//);
  assert.doesNotMatch(sitemap, /https:\/\/klimatologie\.eu\/blog\//);
  assert.doesNotMatch(home, /SkeletonPreview|codex-preview/);
});

test("publishes a twenty-nine-item catalogue of measurement methods", async () => {
  const [page, detailPage, methods, styles] = await Promise.all([
    readFile(new URL("app/metody/page.tsx", root), "utf8"),
    readFile(new URL("app/metody/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/methods.ts", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
  ]);

  const methodRecords = [...methods.matchAll(/slug: "([^"]+)"/g)];
  assert.equal(methodRecords.length, 29);
  assert.match(methods, /title: "Plynová chromatografie"/);
  assert.match(methods, /title: "Družicová gravimetrie"/);
  assert.match(methods, /title: "Ledová jádra a analýza uzavřeného vzduchu"/);
  assert.match(methods, /title: "Dendrochronologie"/);
  assert.match(methods, /title: "Radiometrické a expoziční datování"/);
  assert.match(methods, /title: "Rekonstrukce teploty z vrtů"/);
  assert.match(page, /measurementMethods\.filter/);
  assert.match(page, /className="method-tile"/);
  assert.match(page, /href=\{`\/metody\/\$\{method\.slug\}`\}/);
  assert.match(detailPage, /generateStaticParams/);
  assert.match(detailPage, /methodBySlug/);
  assert.match(detailPage, /Zpět na všechny metody/);
  assert.match(styles, /\.method-catalog__grid/);
  assert.match(styles, /\.method-tile:hover/);
});

test("publishes twenty mechanisms with evidence that distinguishes explanations", async () => {
  const [page, detailPage, mechanisms, styles] = await Promise.all([
    readFile(new URL("app/mechanismy/page.tsx", root), "utf8"),
    readFile(new URL("app/mechanismy/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/mechanisms.ts", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
  ]);

  const mechanismRecords = [...mechanisms.matchAll(/slug: "([^"]+)"/g)];
  const evidenceRecords = [...mechanisms.matchAll(/distinguishingEvidence: "([^"]+)"/g)];
  assert.equal(mechanismRecords.length, 20);
  assert.equal(evidenceRecords.length, 20);
  assert.match(mechanisms, /title: "Energetická bilance Země"/);
  assert.match(mechanisms, /title: "Původ růstu atmosférického CO₂"/);
  assert.match(mechanisms, /title: "Vnitřní proměnlivost atmosféry a oceánu"/);
  assert.match(mechanisms, /title: "Mechanismy vln veder"/);
  assert.match(page, /Jak rozhodujeme mezi vysvětleními/);
  assert.match(page, /Rozlišující důkazy:/);
  assert.match(page, /className="mechanism-tile"/);
  assert.match(page, /href=\{`\/mechanismy\/\$\{mechanism\.slug\}`\}/);
  assert.match(detailPage, /generateStaticParams/);
  assert.match(detailPage, /mechanismBySlug/);
  assert.match(detailPage, /Co musí toto vysvětlení objasnit/);
  assert.match(detailPage, /Zpět na všechny mechanismy/);
  assert.match(styles, /\.mechanism-catalog__grid/);
  assert.match(styles, /\.mechanism-tile:hover/);
});

test("adds projections and consequences as substantive top-level sections", async () => {
  const [projections, consequences, header, sitemap] = await Promise.all([
    readFile(new URL("app/projekce/page.tsx", root), "utf8"),
    readFile(new URL("app/dusledky/page.tsx", root), "utf8"),
    readFile(new URL("app/components/SiteHeader.tsx", root), "utf8"),
    readFile(new URL("public/sitemap.xml", root), "utf8"),
  ]);

  assert.equal((projections.match(/summary: "/g) ?? []).length, 6);
  assert.equal((consequences.match(/summary: "/g) ?? []).length, 6);
  assert.match(projections, /Co lze říci o budoucím klimatu/);
  assert.match(projections, /Ověřování modelů/);
  assert.match(projections, /Nejistota a časový horizont/);
  assert.match(consequences, /Co pozorované a očekávané změny způsobují/);
  assert.match(consequences, /Od změny klimatu k riziku/);
  assert.match(consequences, /Potraviny, sídla a infrastruktura/);
  assert.doesNotMatch(projections + consequences, /Obsah připravujeme/);
  assert.match(header, /href: "\/projekce", label: "Projekce"/);
  assert.match(header, /href: "\/dusledky", label: "Důsledky"/);
  assert.match(sitemap, /https:\/\/klimatologie\.eu\/projekce\//);
  assert.match(sitemap, /https:\/\/klimatologie\.eu\/dusledky\//);
});

test("separates academic and institutional events in a compact history timeline", async () => {
  const [citation, history, events, sources] = await Promise.all([
    readFile(new URL("app/components/Citation.tsx", root), "utf8"),
    readFile(new URL("app/historie/page.tsx", root), "utf8"),
    readFile(new URL("app/data/history.ts", root), "utf8"),
    readFile(new URL("app/data/sources.ts", root), "utf8"),
  ]);

  assert.match(citation, /citation--\$\{source\.category\}/);
  assert.match(history, /timeline__item--\$\{source\.category\}/);
  assert.match(history, /timeline__item--\$\{lane\}/);
  assert.match(history, /timeline__identity/);
  assert.match(history, /timeline__title-row[\s\S]*<Citation id=\{source\.id\}/);
  assert.match(history, /Politická rozhodnutí/);
  assert.match(history, /Poznání a měření/);
  assert.doesNotMatch(history, /timeline__navigation|timeline__position|Předchozí milník|Další milník/);
  assert.match(events, /1988_IPCC[\s\S]*lane: "institutional"/);
  assert.match(events, /1958_Keeling/);
  assert.match(events, /1992_UNFCCC[\s\S]*lane: "institutional"/);
  assert.match(events, /1997_Kyoto[\s\S]*lane: "institutional"/);
  assert.match(events, /2015_Paris[\s\S]*lane: "institutional"/);
  const summaries = [...events.matchAll(/summary: "([^"]+)"/g)].map((match) => match[1]);
  assert.equal(summaries.length, 28);
  assert.ok(summaries.every((summary) => summary.split(/\s+/).length >= 65));
  const institutionalEvents = [...events.matchAll(/lane: "institutional"/g)];
  assert.equal(institutionalEvents.length, 4);
  assert.doesNotMatch(events, /TIME_Greenhouse|Sullivan|Limits|BlueMarble|Stockholm|Black_Exxon|1979_WCC|Hansen_Senate|API_ActionPlan|DayAfterTomorrow|InconvenientTruth|Stripes|2018_FFF/);
  assert.match(sources, /id: "1801_Herschel"[\s\S]*year: 1800/);
  assert.match(sources, /id: "1862_Tyndall"[\s\S]*year: 1861/);
  assert.match(sources, /ipcc\.ch\/about\/history/);
  assert.match(sources, /scrippsco2\.ucsd\.edu\/history_legacy\/early_keeling_curve/);
  assert.match(sources, /doi\.org\/10\.1038\/329408a0/);
  assert.match(sources, /unfccc\.int\/process-and-meetings\/the-paris-agreement/);
  assert.doesNotMatch(sources, /TIME_Greenhouse|Sullivan|Limits|BlueMarble|Stockholm|Black_Exxon|1979_WCC|Hansen_Senate|API_ActionPlan|DayAfterTomorrow|InconvenientTruth|Stripes|2018_FFF/);
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
  assert.match(sourceCatalogueText, /10\.1002\/qj\.49706427503/);
  assert.doesNotMatch(sourceCatalogueText, /10\.1002\/qj\.49708737102/);
  assert.doesNotMatch(sourceCatalogueText, /10\.1038\/322430a0/);
  assert.doesNotMatch(sourceCatalogueText, /10\.1029\/94JD00548/i);
  assert.match(sourceCatalogueText, /10\.1029\/JD092iD11p13345/);
  assert.match(sourceCatalogueText, /10\.1029\/2010RG000345/);
  assert.match(sourceCatalogueText, /10\.1029\/2019JD032361/);
  assert.match(sourceCatalogueText, /10\.1175\/BAMS-D-24-0012\.1/);
  assert.match(sourceCatalogueText, /10\.1029\/2023JD040179/);
  assert.match(sourceCatalogueText, /10\.5194\/essd-12-3469-2020/);
  assert.match(sourceCatalogueText, /giss\.nasa\.gov\/pubs\/abs\/ha00700d\.html/);
  assert.match(sourceCatalogueText, /metoffice\.gov\.uk\/hadobs\/hadcrut3\/HadCRUT3_accepted\.pdf/);
  assert.match(sourceCatalogueText, /repository\.library\.noaa\.gov\/view\/noaa\/66587/);
  assert.doesNotMatch(article, /DOI_10_1002_qj_49708737102|DOI_10_1038_322430a0|DOI_10_1029_94jd00548/);
  assert.match(article, /gistemp-stations-robinson\.png/);
  assert.match(article, /noaa-drifting-buoy-deployment\.jpg/);
  assert.match(article, /gistemp-five-year-anomaly-1880-2025\.mp4/);
  assert.match(article, /c3s-global-temperature-datasets-1850-2025\.png/);
  assert.match(article, /NASA Scientific Visualization Studio/);
  assert.match(article, /C3S\/ECMWF/);
  assert.match(sourceCatalogueText, /licence-to-use-copernicus-products/);
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
  assert.match(article, /Shrnutí pozorování/);
  assert.match(article, /−0,25 ± 0,16 K za desetiletí/);
  assert.match(article, /State of the Climate in 2024/);
  assert.match(article, /Usage Restrictions: None/);
  assert.doesNotMatch(article, /datové řady|časové řady|pozorovací řady/);
  assert.doesNotMatch(article, /atmosphere-with-ionosphere-cs\.svg/);
  assert.doesNotMatch(article, /jra3q-lower-stratosphere-comparison-2021\.png/);
  assert.doesNotMatch(article, /nasa-satellite-atmospheric-trends-1979-2005\.jpg/);
  assert.match(sourceCatalogueText, /10\.1029\/2008JD010421/);
  assert.match(sourceCatalogueText, /10\.1029\/2004JD005753/);
  assert.match(sourceCatalogueText, /10\.1175\/JCLI-D-11-00668\.1/);
  assert.match(sourceCatalogueText, /10\.1175\/2008JTECHA1176\.1/);
  assert.match(sourceCatalogueText, /10\.1175\/JTECH-D-16-0018\.1/);
  assert.match(sourceCatalogueText, /10\.1175\/JCLI-D-19-0998\.1/);
  assert.match(sourceCatalogueText, /10\.5194\/acp-24-12925-2024/);
  assert.match(sourceCatalogueText, /10\.1038\/s41612-022-00229-7/);
  assert.match(sourceCatalogueText, /10\.1029\/2003JD003909/);
  assert.match(sourceCatalogueText, /10\.1029\/2010RS004614/);
  assert.match(sourceCatalogueText, /10\.5067\/GHRC\/AMSU-A\/DATA401/);
  assert.match(sourceCatalogueText, /AlgorithmDescription_01B-10\.pdf/);
  assert.match(sourceCatalogueText, /repository\.library\.noaa\.gov\/view\/noaa\/41066/);
  assert.match(sourceCatalogueText, /wegc_steiner-etal_rs-2011_roforclimate\.pdf/);
  assert.match(sourceCatalogueText, /ncei\.noaa\.gov\/pub\/data\/images\/Free_et_al_2005\.pdf/);
  assert.match(sourceCatalogueText, /Zou_Wang_JGR_2011_AMSU-A-1\.pdf/);
  assert.doesNotMatch(
    `${article}\n${sourceCatalogueText}`,
    /DOI_10_1002_2014jd021603|DOI_10_1007_s13143_017_0010_y|DOI_10_1016_s0273_1177_03_00591_x|DOI_10_1029_2009gl039777/,
  );
  assert.match(article, /Všechny odborné práce, metodické dokumenty a datové soubory použité v tomto článku lze otevřít bez/);
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
  assert.match(sourceCatalogueText, /10\.1126\/science\.287\.5461\.2225/);
  assert.match(sourceCatalogueText, /10\.1038\/nature07080/);
  assert.match(sourceCatalogueText, /10\.1038\/nature09043/);
  assert.match(sourceCatalogueText, /10\.1029\/2012GL051106/);
  assert.match(sourceCatalogueText, /10\.1126\/sciadv\.1601545/);
  assert.match(sourceCatalogueText, /10\.5194\/essd-16-3517-2024/);
  assert.match(sourceCatalogueText, /10\.1007\/s00376-026-5876-0/);
  assert.match(sourceCatalogueText, /10\.1029\/2024GL111229/);
  assert.match(article, /CC BY 4\.0/);
  assert.doesNotMatch(article, /Teplo je energie uložená ve vodě/);
  assert.doesNotMatch(article, /Tepelná energie/);
  assert.match(evidence, /slug: "tepelny-obsah-oceanu"[\s\S]*status: "hotovo"/);
});

test("publishes a sourced atmospheric carbon dioxide article instead of the generic placeholder", async () => {
  const [article, evidencePage, evidence, styles] = await Promise.all([
    readFile(new URL("app/components/AtmosphericCo2Article.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/evidence.ts", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
  ]);

  assert.match(evidencePage, /AtmosphericCo2Article/);
  assert.match(evidencePage, /title="Oxid uhličitý v atmosféře"/);
  assert.match(evidencePage, /Napsáno: 31\. července 2026/);
  assert.match(article, /Atmosférický oxid uhličitý popisujeme podílem molekul CO₂ v suchém vzduchu/);
  assert.match(article, /Potřebné informace/);
  assert.equal((article.match(/<dt>/g) ?? []).length, 4);
  assert.match(article, /<dt>ppm<\/dt>/);
  assert.match(article, /<dt>Molární zlomek<\/dt>/);
  assert.match(article, /<dt>Referenční plyn<\/dt>/);
  assert.match(article, /<dt>XCO₂<\/dt>/);
  assert.match(article, /Jak vzniká zveřejněný záznam/);
  assert.match(article, /<h2 id="pozorovani">Pozorování<\/h2>/);
  assert.match(article, /315,98 ± 0,12 ppm/);
  assert.match(article, /425,64 ± 0,09 ppm/);
  assert.match(article, /noaa-mauna-loa-co2-monthly\.png/);
  assert.match(article, /noaa-global-co2-monthly\.png/);
  assert.match(article, /noaa-co2-800000-years\.png/);
  assert.equal((article.match(/unoptimized/g) ?? []).length, 5);
  assert.match(sourceCatalogueText, /keeling_proceeding_1957\.pdf/);
  assert.match(sourceCatalogueText, /10\.1111\/j\.2153-3490\.1960\.tb01300\.x/);
  assert.match(sourceCatalogueText, /10\.3189\/1984AoG5-1-160-164/);
  assert.match(sourceCatalogueText, /10\.5194\/amt-6-251-2013/);
  assert.match(sourceCatalogueText, /10\.5194\/amt-10-2669-2017/);
  assert.match(sourceCatalogueText, /10\.5194\/essd-11-473-2019/);
  assert.match(sourceCatalogueText, /10\.5194\/cp-16-503-2020/);
  assert.match(sourceCatalogueText, /10\.5194\/amt-14-3015-2021/);
  assert.match(sourceCatalogueText, /10\.1038\/nature06949/);
  assert.match(sourceCatalogueText, /10\.1002\/2014GL061957/);
  assert.match(sourceCatalogueText, /10\.5194\/amt-10-549-2017/);
  assert.match(sourceCatalogueText, /epic\.awi\.de\/id\/eprint\/18281/);
  assert.match(sourceCatalogueText, /cambridge\.org\/core\/journals\/annals-of-glaciology/);
  assert.match(article, /Všechny odborné práce, metodické dokumenty a datové soubory použité v tomto článku lze otevřít bez/);
  assert.match(article, /verzi 11\.3r/);
  assert.doesNotMatch(
    `${article}\n${sourceCatalogueText}`,
    /10\.1016\/0016-7037\(58\)90033-4|10\.1029\/94JD01951|10\.1029\/95JD00859|10\.1038\/295220a0|10\.1029\/95JD03410|10\.1029\/96GL03156|10\.1029\/2003JD003562|10\.1029\/2005JD006003/,
  );
  assert.doesNotMatch(article, /datové řady|časové řady|pozorovací řady/);
  assert.match(styles, /\.article-figure--sample/);
  assert.match(evidence, /slug: "atmosfericka-koncentrace-co2"[\s\S]*status: "hotovo"/);
});

test("publishes a sourced atmospheric humidity article instead of the generic placeholder", async () => {
  const [article, evidencePage, evidence] = await Promise.all([
    readFile(new URL("app/components/AtmosphericHumidityArticle.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/evidence.ts", root), "utf8"),
  ]);

  assert.match(evidencePage, /AtmosphericHumidityArticle/);
  assert.match(evidencePage, /title="Vlhkost atmosféry"/);
  assert.match(evidencePage, /Napsáno: 31\. července 2026/);
  assert.match(article, /Vlhkost atmosféry popisuje množství vodní páry ve vzduchu/);
  assert.match(article, /Potřebné informace/);
  assert.equal((article.match(/<dt>/g) ?? []).length, 4);
  assert.match(article, /<dt>Měrná vlhkost<\/dt>/);
  assert.match(article, /<dt>Relativní vlhkost<\/dt>/);
  assert.match(article, /<dt>Rosný bod<\/dt>/);
  assert.match(article, /<dt>Vodní pára ve sloupci<\/dt>/);
  assert.match(article, /Jak vzniká zveřejněný záznam/);
  assert.match(article, /<h2 id="pozorovani">Pozorování<\/h2>/);
  assert.match(article, /\+0,10 g\/kg za desetiletí/);
  assert.match(article, /−0,17 procentního bodu za desetiletí/);
  assert.match(article, /\+0,48 ± 0,07 kg\/m² za desetiletí/);
  assert.match(article, /hadisdh-specific-humidity-trend-1973-2024\.png/);
  assert.match(article, /hadisdh-relative-humidity-trend-1973-2024\.png/);
  assert.match(article, /nasa-water-vapor-noaa20\.jpg/);
  assert.match(article, /noaa-rawinsonde-launch\.jpg/);
  assert.equal((article.match(/unoptimized/g) ?? []).length, 4);
  assert.match(sourceCatalogueText, /10\.1175\/JCLI3816\.1/);
  assert.match(sourceCatalogueText, /10\.1175\/2008JCLI2274\.1/);
  assert.match(sourceCatalogueText, /10\.5194\/cp-10-1983-2014/);
  assert.match(sourceCatalogueText, /10\.5194\/essd-12-2853-2020/);
  assert.match(sourceCatalogueText, /10\.1029\/2008JD010989/);
  assert.match(sourceCatalogueText, /10\.1002\/2018EA000363/);
  assert.match(sourceCatalogueText, /10\.1029\/2022JD036728/);
  assert.match(sourceCatalogueText, /10\.7289\/V5X63K0Q/);
  assert.match(sourceCatalogueText, /centaur\.reading\.ac\.uk\/105632/);
  assert.match(sourceCatalogueText, /metoffice\.gov\.uk\/hadobs\/hadcruh\/data\/Willettetal2008\.pdf/);
  assert.match(sourceCatalogueText, /repository\.library\.noaa\.gov\/view\/noaa\/59958/);
  assert.match(sourceCatalogueText, /repository\.library\.noaa\.gov\/view\/noaa\/25912\/noaa_25912_DS1\.pdf/);
  assert.match(article, /Všechny odborné práce, metodické dokumenty a datové soubory použité v tomto článku lze otevřít bez/);
  assert.match(article, /předběžné verze za rok[\s\S]*2025/);
  assert.match(article, /Stith et al\., 2018/);
  assert.doesNotMatch(article, /Fleming et al\., 2018|DOI_10_1175_jcli3594_1|WEB_repository_oceanbestpractice_WMO/);
  assert.doesNotMatch(sourceCatalogueText, /DOI_10_1175_jcli3594_1/);
  const humiditySourceIds = [
    ...article.matchAll(/<SourceLink id="([^"]+)"/g),
  ].map((match) => match[1]);
  assert.equal(new Set(humiditySourceIds).size, 30);
  for (const id of new Set(humiditySourceIds)) {
    const catalogueOccurrences = sourceCatalogueText.split(id).length - 1;
    assert.ok(catalogueOccurrences >= 2, `${id} must exist and be marked as open access`);
    if (id.startsWith("DOI_")) {
      assert.match(sourceCatalogueText, new RegExp(`${id}:\\s*"https://`));
    }
  }
  assert.match(article, /Open Government Licence v3\.0/);
  assert.doesNotMatch(article, /datové řady|časové řady|pozorovací řady/);
  assert.match(evidence, /slug: "narust-vlhkosti"[\s\S]*status: "hotovo"/);
});

test("publishes a sourced precipitation article with separate daily and sub-daily observations", async () => {
  const [article, evidencePage, evidence] = await Promise.all([
    readFile(new URL("app/components/PrecipitationArticle.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/evidence.ts", root), "utf8"),
  ]);

  assert.match(evidencePage, /PrecipitationArticle/);
  assert.match(evidencePage, /title="Srážky a přívalové srážky"/);
  assert.match(evidencePage, /Napsáno: 31\. července 2026/);
  assert.match(article, /Srážkový úhrn udává, jak vysoká vrstva vody dopadla/);
  assert.equal((article.match(/<dt>/g) ?? []).length, 4);
  assert.match(article, /<dt>Úhrn srážek<\/dt>/);
  assert.match(article, /<dt>Intenzita<\/dt>/);
  assert.match(article, /<dt>Rx1day<\/dt>/);
  assert.match(article, /<dt>Přívalová srážka<\/dt>/);
  assert.match(article, /Jak vzniká zveřejněný záznam/);
  assert.match(article, /<h2 id="pozorovani">Pozorování<\/h2>/);
  assert.match(article, /Celkové úhrny/);
  assert.match(article, /Nejvyšší jednodenní úhrny/);
  assert.match(article, /Hodinové extrémy/);
  assert.match(article, /hadex3-prcptot-timeseries\.png/);
  assert.match(article, /hadex3-prcptot-trend\.png/);
  assert.match(article, /hadex3-rx1day-timeseries\.png/);
  assert.match(article, /hadex3-rx1day-trend\.png/);
  assert.match(article, /gsdr-i-station-coverage\.png/);
  assert.equal((article.match(/unoptimized/g) ?? []).length, 7);
  assert.match(sourceCatalogueText, /10\.1175\/JCLI-D-12-00502\.1/);
  assert.match(sourceCatalogueText, /10\.1029\/2019JD032263/);
  assert.match(sourceCatalogueText, /10\.1038\/s41597-023-02238-4/);
  assert.match(sourceCatalogueText, /10\.1007\/s00382-022-06567-9/);
  assert.match(sourceCatalogueText, /10\.3390\/atmos9040138/);
  assert.match(article, /Hellmann, 1897/);
  assert.match(article, /Všechny odborné práce, metodické dokumenty a datové soubory použité v tomto článku lze otevřít bez/);
  assert.match(article, /zdrojů tohoto článku nepoužívají/);
  assert.match(sourceCatalogueText, /assets-eu\.researchsquare\.com\/files\/rs-2023755/);
  assert.match(sourceCatalogueText, /repository\.library\.noaa\.gov\/view\/noaa\/46579\/noaa_46579_DS1\.pdf/);
  assert.match(sourceCatalogueText, /eprints\.ncl\.ac\.uk\/fulltext\.aspx/);
  assert.match(sourceCatalogueText, /nature\.com\/articles\/s41597-023-02238-4\.pdf/);
  assert.match(sourceCatalogueText, /dspace\.library\.uvic\.ca\/bitstreams/);
  assert.match(sourceCatalogueText, /ueaeprints\.uea\.ac\.uk\/id\/eprint\/68099\/1\/Accepted_manuscript\.pdf/);
  assert.match(sourceCatalogueText, /repository\.library\.noaa\.gov\/view\/noaa\/25396\/noaa_25396_DS1\.pdf/);
  assert.doesNotMatch(
    `${article}\n${sourceCatalogueText}`,
    /DOI_10_1038_095262a0|DOI_10_1061_jrcea4_0000523|DOI_10_1002_jgrd_50150|DOI_10_1175_jcli_d_18_0143_1|DOI_10_1175_1525_7541_2003_004_1147_tvgpcp_2_0_co_2|WEB_repository_oceanbestpractice_WMO_kapitola_o_mereni_vlhkosti_0667b41b/,
  );
  const precipitationSourceIds = [
    ...article.matchAll(/<SourceLink id="([^"]+)"/g),
  ].map((match) => match[1]);
  assert.equal(new Set(precipitationSourceIds).size, 34);
  for (const id of new Set(precipitationSourceIds)) {
    const catalogueOccurrences = sourceCatalogueText.split(id).length - 1;
    assert.ok(catalogueOccurrences >= 2, `${id} must exist and be marked as open access`);
    if (id.startsWith("DOI_")) {
      assert.match(sourceCatalogueText, new RegExp(`${id}:\\s*"https://`));
    }
  }
  assert.match(article, /Open Government Licence v3\.0/);
  assert.match(article, /CC BY 4\.0/);
  assert.doesNotMatch(article, /datové řady|časové řady|pozorovací řady/);
  assert.match(evidence, /slug: "srazky-a-privalove-srazky"[\s\S]*status: "hotovo"/);
});

test("publishes a sourced global mean sea-level article with tide-gauge and satellite evidence", async () => {
  const [article, evidencePage, evidence] = await Promise.all([
    readFile(new URL("app/components/GlobalMeanSeaLevelArticle.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/evidence.ts", root), "utf8"),
  ]);

  assert.match(evidencePage, /GlobalMeanSeaLevelArticle/);
  assert.match(evidencePage, /title="Globální střední hladina moře"/);
  assert.match(evidencePage, /Napsáno: 31\. července 2026/);
  assert.match(article, /Globální střední hladina moře vyjadřuje průměrnou změnu výšky světového oceánu/);
  assert.equal((article.match(/<dt>/g) ?? []).length, 4);
  assert.match(article, /<dt>Střední hladina<\/dt>/);
  assert.match(article, /<dt>Relativní hladina<\/dt>/);
  assert.match(article, /<dt>Výškový bod<\/dt>/);
  assert.match(article, /<dt>Družicová altimetrie<\/dt>/);
  assert.match(article, /Jak vzniká globální výsledek/);
  assert.match(article, /<h2 id="pozorovani">Pozorování<\/h2>/);
  assert.match(article, /nasa-global-mean-sea-level-1993-2025\.png/);
  assert.match(article, /noaa-san-francisco-tide-station\.jpg/);
  assert.match(article, /hamlington-global-mean-sea-level-1993-2023\.png/);
  assert.match(article, /copernicus-regional-sea-level-trends-1999-2025\.png/);
  assert.equal((article.match(/unoptimized/g) ?? []).length, 4);
  assert.match(sourceCatalogueText, /10\.1007\/s10712-019-09525-z/);
  assert.match(sourceCatalogueText, /10\.1038\/s41586-020-2591-3/);
  assert.match(sourceCatalogueText, /10\.5194\/essd-11-1189-2019/);
  assert.match(sourceCatalogueText, /10\.1038\/s43247-024-01761-5/);
  assert.match(sourceCatalogueText, /psmsl\.org\/data\/obtaining\/complete\.php/);
  assert.match(article, /CC BY 4\.0/);
  assert.doesNotMatch(article, /datové řady|časové řady|pozorovací řady/);
  assert.match(evidence, /slug: "gmsl"[\s\S]*status: "hotovo"/);
});

test("publishes a sourced ocean acidification article with measured and reconstructed evidence", async () => {
  const [article, evidencePage, evidence] = await Promise.all([
    readFile(new URL("app/components/OceanAcidificationArticle.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/evidence.ts", root), "utf8"),
  ]);

  assert.match(evidencePage, /OceanAcidificationArticle/);
  assert.match(evidencePage, /title="Acidifikace oceánu"/);
  assert.match(evidencePage, /Napsáno: 31\. července 2026/);
  assert.match(article, /Acidifikace oceánu je dlouhodobý posun chemického stavu mořské vody/);
  assert.equal((article.match(/<dt>/g) ?? []).length, 4);
  assert.match(article, /<dt>pH<\/dt>/);
  assert.match(article, /<dt>DIC<\/dt>/);
  assert.match(article, /<dt>Celková alkalinita<\/dt>/);
  assert.match(article, /<dt>Stav nasycení Ω<\/dt>/);
  assert.match(article, /Jak se chemie oceánu měří/);
  assert.match(article, /Jak vzniká zveřejněný výsledek/);
  assert.match(article, /<h2 id="pozorovani">Pozorování<\/h2>/);
  assert.match(article, /copernicus-global-surface-ph\.png/);
  assert.match(article, /noaa-wcoa-2026-ctd-rosette\.jpeg/);
  assert.match(article, /bats-ph-aragonite-1983-2023\.webp/);
  assert.match(article, /copernicus-surface-ph-trend-map\.png/);
  assert.equal((article.match(/unoptimized/g) ?? []).length, 4);
  assert.match(sourceCatalogueText, /10\.1038\/425365a/);
  assert.match(sourceCatalogueText, /10\.1038\/nature04095/);
  assert.match(sourceCatalogueText, /10\.1073\/pnas\.0906044106/);
  assert.match(sourceCatalogueText, /10\.3389\/fmars\.2023\.1289931/);
  assert.match(sourceCatalogueText, /10\.1029\/2023GB007765/);
  assert.match(sourceCatalogueText, /10\.5194\/essd-16-121-2024/);
  assert.match(sourceCatalogueText, /10\.25921\/m6tp-mj50/);
  assert.match(sourceCatalogueText, /10\.25921\/8dba-fr90/);
  assert.match(article, /CC BY 4\.0/);
  assert.match(evidence, /slug: "acidifikace-oceanu"[\s\S]*status: "hotovo"/);
});

test("publishes a sourced Arctic sea ice article with extent, age, and thickness evidence", async () => {
  const [article, evidencePage, evidence] = await Promise.all([
    readFile(new URL("app/components/ArcticSeaIceArticle.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/evidence.ts", root), "utf8"),
  ]);

  assert.match(evidencePage, /ArcticSeaIceArticle/);
  assert.match(evidencePage, /title="Arktický mořský led"/);
  assert.match(evidencePage, /Napsáno: 31\. července 2026/);
  assert.match(article, /Arktický mořský led je zmrzlá mořská voda/);
  assert.equal((article.match(/<dt>/g) ?? []).length, 4);
  assert.match(article, /<dt>Koncentrace ledu<\/dt>/);
  assert.match(article, /<dt>Rozsah ledu<\/dt>/);
  assert.match(article, /<dt>Plocha ledu<\/dt>/);
  assert.match(article, /<dt>Víceletý led<\/dt>/);
  assert.match(article, /Jak vzniká zveřejněný záznam/);
  assert.match(article, /<h2 id="pozorovani">Pozorování<\/h2>/);
  assert.match(article, /nasa-minimum-2025\.jpg/);
  assert.match(article, /noaa-seasonal-cycle-2025\.png/);
  assert.match(article, /copernicus-march-1979-2026\.png/);
  assert.match(article, /copernicus-september-1979-2025\.png/);
  assert.match(article, /noaa-sea-ice-age-1985-2005-2025\.png/);
  assert.equal((article.match(/unoptimized/g) ?? []).length, 5);
  assert.match(article, /4,60 milionu km²/);
  assert.match(article, /14,29 milionu km²/);
  assert.match(article, /95 000/);
  assert.match(article, /přibližně o 66 %/);
  assert.match(sourceCatalogueText, /10\.1029\/JD089iD04p05355/);
  assert.match(sourceCatalogueText, /10\.7265\/a98x-0f50/);
  assert.match(sourceCatalogueText, /10\.5194\/tc-18-2473-2024/);
  assert.match(sourceCatalogueText, /10\.1088\/1748-9326\/aae3ec/);
  assert.match(article, /Licence to use Copernicus Products/);
  assert.doesNotMatch(article, /datové řady|časové řady|pozorovací řady/);
  assert.match(evidence, /slug: "ubytek-arktickeho-ledu"[\s\S]*status: "hotovo"/);
});

test("publishes a sourced mountain glaciers article with field and satellite evidence", async () => {
  const [article, evidencePage, evidence] = await Promise.all([
    readFile(new URL("app/components/MountainGlaciersArticle.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/evidence.ts", root), "utf8"),
  ]);

  assert.match(evidencePage, /MountainGlaciersArticle/);
  assert.match(evidencePage, /title="Horské ledovce"/);
  assert.match(evidencePage, /Napsáno: 31\. července 2026/);
  assert.match(article, /Horský ledovec je dlouhodobě přetrvávající masa ledu/);
  assert.equal((article.match(/<dt>/g) ?? []).length, 4);
  assert.match(article, /<dt>Hmotnostní bilance<\/dt>/);
  assert.match(article, /<dt>Vodní ekvivalent<\/dt>/);
  assert.match(article, /<dt>Výškový model<\/dt>/);
  assert.match(article, /<dt>Gigatuna<\/dt>/);
  assert.match(article, /Jak vzniká zveřejněný záznam/);
  assert.match(article, /<h2 id="pozorovani">Pozorování<\/h2>/);
  assert.match(article, /usgs-grinnell-1938-2019\.jpg/);
  assert.match(article, /usgs-ablation-stake\.jpg/);
  assert.match(article, /copernicus-observation-locations-2026\.png/);
  assert.match(article, /copernicus-annual-mass-1976-2025\.png/);
  assert.match(article, /copernicus-cumulative-mass-1976-2025\.png/);
  assert.equal((article.match(/unoptimized/g) ?? []).length, 5);
  assert.match(article, /−408 ± 132 Gt/);
  assert.match(article, /−9 583 ± 1 211 Gt/);
  assert.match(article, /26,4 ± 3,3 mm/);
  assert.match(sourceCatalogueText, /10\.3189\/S002214300002757X/);
  assert.match(sourceCatalogueText, /10\.5194\/essd-17-1977-2025/);
  assert.match(sourceCatalogueText, /10\.1038\/s41586-021-03436-z/);
  assert.match(sourceCatalogueText, /10\.1038\/s41586-024-08545-z/);
  assert.match(sourceCatalogueText, /10\.1038\/s43017-026-00777-z/);
  assert.match(sourceCatalogueText, /licence-to-use-copernicus-products/);
  assert.doesNotMatch(article, /datové řady|časové řady|pozorovací řady/);
  assert.match(evidence, /slug: "ustup-ledovcu"[\s\S]*status: "hotovo"/);
});

test("publishes a sourced ice-sheet mass article with three independent measurement methods", async () => {
  const [article, evidencePage, evidence] = await Promise.all([
    readFile(new URL("app/components/IceSheetsArticle.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/evidence.ts", root), "utf8"),
  ]);

  assert.match(evidencePage, /IceSheetsArticle/);
  assert.match(evidencePage, /title="Změna hmotnosti ledových příkrovů"/);
  assert.match(evidencePage, /Napsáno: 1\. srpna 2026/);
  assert.match(article, /Změna hmotnosti ledového příkrovu vyjadřuje, o kolik se mezi dvěma určenými okamžiky změnila/);
  assert.equal((article.match(/<dt>/g) ?? []).length, 4);
  assert.match(article, /<dt>Ledový příkrov<\/dt>/);
  assert.match(article, /<dt>Gigatuna<\/dt>/);
  assert.match(article, /<dt>Firn<\/dt>/);
  assert.match(article, /<dt>Linie ukotvení<\/dt>/);
  assert.match(article, /Jak vzniká zveřejněný záznam/);
  assert.match(article, /Výška povrchu/);
  assert.match(article, /Změna gravitačního pole/);
  assert.match(article, /Vstup a výstup ledu/);
  assert.match(article, /<h2 id="pozorovani">Pozorování<\/h2>/);
  assert.match(article, /nasa-grace-polar-mass-2025\.png/);
  assert.match(article, /nasa-grace-how-gravity-is-measured\.jpg/);
  assert.match(article, /imbie-method-comparison-2023\.png/);
  assert.match(article, /imbie-cumulative-mass-2023\.png/);
  assert.equal((article.match(/unoptimized/g) ?? []).length, 4);
  assert.match(article, /7 563 ± 699 Gt/);
  assert.match(article, /4 892 ± 457 Gt/);
  assert.match(article, /2 671 ± 530 Gt/);
  assert.match(article, /21,0 ± 1,9 mm/);
  assert.match(sourceCatalogueText, /10\.1126\/science\.1073888/);
  assert.match(sourceCatalogueText, /10\.1126\/science\.1228102/);
  assert.match(sourceCatalogueText, /10\.5194\/essd-15-1597-2023/);
  assert.match(sourceCatalogueText, /10\.5194\/essd-18-1729-2026/);
  assert.match(sourceCatalogueText, /10\.5285\/77B64C55-7166-4A06-9DEF-2E400398E452/);
  assert.match(article, /CC BY 4\.0/);
  assert.doesNotMatch(article, /datové řady|časové řady|pozorovací řady/);
  assert.match(evidence, /slug: "nestabilita-prikrovu"[\s\S]*status: "hotovo"/);
});

test("publishes a sourced snow-cover and permafrost article with distinct observables", async () => {
  const [article, evidencePage, evidence] = await Promise.all([
    readFile(new URL("app/components/SnowPermafrostArticle.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/evidence.ts", root), "utf8"),
  ]);

  assert.match(evidencePage, /SnowPermafrostArticle/);
  assert.match(evidencePage, /title="Sněhová pokrývka a permafrost"/);
  assert.match(evidencePage, /Napsáno: 1\. srpna 2026/);
  assert.match(article, /Sníh na souši pozorujeme jako plochu, dobu trvání, výšku a množství vody/);
  assert.equal((article.match(/<dt>/g) ?? []).length, 4);
  assert.match(article, /<dt>Rozsah sněhu<\/dt>/);
  assert.match(article, /<dt>Vodní hodnota sněhu<\/dt>/);
  assert.match(article, /<dt>Permafrost<\/dt>/);
  assert.match(article, /<dt>Aktivní vrstva<\/dt>/);
  assert.match(article, /Jak vzniká zveřejněný záznam/);
  assert.match(article, /Mapa rozsahu sněhu/);
  assert.match(article, /Teplota ve vrtu/);
  assert.match(article, /Hloubka aktivní vrstvy/);
  assert.match(article, /<h2 id="pozorovani">Pozorování<\/h2>/);
  assert.match(article, /usgs-snow-core-measurement\.jpg/);
  assert.match(article, /noaa-arctic-snow-extent-1967-2025\.png/);
  assert.match(article, /noaa-arctic-snow-mass-1981-2025\.png/);
  assert.match(article, /biskaborn-global-permafrost-2007-2016\.png/);
  assert.match(article, /noaa-alaska-permafrost-2024\.jpg/);
  assert.equal((article.match(/unoptimized/g) ?? []).length, 5);
  assert.match(article, /15 %/);
  assert.match(article, /50 %/);
  assert.match(article, /3 062 ± 35 Gt/);
  assert.match(article, /0,29 ± 0,12 °C/);
  assert.match(article, /9 z 20/);
  assert.match(article, /0,8 cm za rok/);
  assert.match(sourceCatalogueText, /10\.5194\/essd-7-137-2015/);
  assert.match(sourceCatalogueText, /10\.1038\/s41597-021-00939-2/);
  assert.match(sourceCatalogueText, /10\.1126\/sciadv\.adv7926/);
  assert.match(sourceCatalogueText, /10\.1038\/s41467-018-08240-4/);
  assert.match(sourceCatalogueText, /10\.5194\/essd-7-245-2015/);
  assert.match(sourceCatalogueText, /10\.1002\/ppp\.2088/);
  assert.match(sourceCatalogueText, /10\.5285\/a6fbedd8ee5b472c8e84e55f746c1704/);
  assert.match(article, /CC BY 4\.0/);
  assert.doesNotMatch(article, /datové řady|časové řady|pozorovací řady/);
  assert.match(evidence, /slug: "snehova-pokryvka-a-permafrost"[\s\S]*status: "hotovo"/);
});

test("publishes a sourced phenology article with organism, camera, and satellite observations", async () => {
  const [article, evidencePage, evidence] = await Promise.all([
    readFile(new URL("app/components/PhenologyArticle.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/evidence.ts", root), "utf8"),
  ]);

  assert.match(evidencePage, /PhenologyArticle/);
  assert.match(evidencePage, /title="Sezónní jevy v živé přírodě"/);
  assert.match(evidencePage, /Napsáno: 1\. srpna 2026/);
  assert.match(article, /Fenologické pozorování je datum nebo sled opakovaných záznamů/);
  assert.equal((article.match(/<dt>/g) ?? []).length, 4);
  assert.match(article, /<dt>Fenologie<\/dt>/);
  assert.match(article, /<dt>Fenofáze<\/dt>/);
  assert.match(article, /<dt>Den roku<\/dt>/);
  assert.match(article, /<dt>Vegetační sezóna<\/dt>/);
  assert.match(article, /Jak vzniká zveřejněný záznam/);
  assert.match(article, /Jednotlivá rostlina/);
  assert.match(article, /Populace a pohybliví živočichové/);
  assert.match(article, /<h3>Kamery<\/h3>/);
  assert.match(article, /<h3>Družice<\/h3>/);
  assert.match(article, /<h2 id="pozorovani">Pozorování<\/h2>/);
  assert.match(article, /denny-event-status-intensity\.png/);
  assert.match(article, /phenocam-greenness-comparison\.png/);
  assert.match(article, /buntgen-uk-flowering-1753-2019\.jpg/);
  assert.match(sourceCatalogueText, /10\.1016\/j\.agrformet\.2018\.03\.003/);
  assert.doesNotMatch(article, /10\.1016\/j\.agrformet\.2018\.02\.032/);
  assert.equal((article.match(/unoptimized/g) ?? []).length, 3);
  assert.match(article, /125 000/);
  assert.match(article, /96 996/);
  assert.match(article, /419 354/);
  assert.match(article, /25,94 dne/);
  assert.match(article, /2 826 588/);
  assert.match(article, /5 500 výsledků pro 684 druhů/);
  assert.match(sourceCatalogueText, /10\.1007\/s00484-014-0789-5/);
  assert.match(sourceCatalogueText, /10\.1111\/gcb\.15000/);
  assert.match(sourceCatalogueText, /10\.1098\/rspb\.2021\.2456/);
  assert.match(sourceCatalogueText, /10\.1038\/s41558-019-0648-9/);
  assert.match(sourceCatalogueText, /10\.1002\/ecm\.1552/);
  assert.match(sourceCatalogueText, /10\.5194\/essd-17-6531-2025/);
  assert.match(sourceCatalogueText, /10\.5067\/MODIS\/MCD12Q2\.061/);
  assert.match(article, /CC BY 4\.0/);
  assert.doesNotMatch(article, /datové řady|časové řady|pozorovací řady/);
  assert.match(evidence, /slug: "fenologicke-posuny"[\s\S]*status: "hotovo"/);
});

test("publishes a sourced heat-wave article that keeps definitions and observations distinct", async () => {
  const [article, evidencePage, evidence] = await Promise.all([
    readFile(new URL("app/components/HeatWavesArticle.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/evidence.ts", root), "utf8"),
  ]);

  assert.match(evidencePage, /HeatWavesArticle/);
  assert.match(evidencePage, /title="Vlny veder"/);
  assert.match(evidencePage, /Napsáno: 1\. srpna 2026/);
  assert.match(article, /Vlna veder je souvislé období několika dnů/);
  assert.equal((article.match(/<dt>/g) ?? []).length, 4);
  assert.match(article, /<dt>Denní maximum<\/dt>/);
  assert.match(article, /<dt>Denní minimum<\/dt>/);
  assert.match(article, /<dt>Percentil<\/dt>/);
  assert.match(article, /<dt>Referenční období<\/dt>/);
  assert.match(article, /Jak vzniká zveřejněný záznam/);
  assert.match(article, /Standardní ukazatel WSDI/);
  assert.match(article, /Jaké výsledky lze srovnávat/);
  assert.match(article, /<h2 id="pozorovani">Pozorování<\/h2>/);
  assert.match(article, /hadex3-wsdi-timeseries\.png/);
  assert.match(article, /hadex3-wsdi-trend\.png/);
  assert.equal((article.match(/unoptimized/g) ?? []).length, 2);
  assert.match(article, /0,61 dne/);
  assert.match(article, /1,69 °C/);
  assert.match(article, /133 homogenizovaných českých stanic/);
  assert.match(article, /18,5 tropického dne/);
  assert.match(sourceCatalogueText, /10\.3354\/cr019193/);
  assert.match(sourceCatalogueText, /10\.1175\/JCLI-D-12-00383\.1/);
  assert.match(sourceCatalogueText, /10\.1038\/s41467-020-16970-7/);
  assert.match(sourceCatalogueText, /10\.1038\/s41467-022-31432-y/);
  assert.match(sourceCatalogueText, /10\.1002\/joc\.7505/);
  assert.match(article, /Open Government Licence v3\.0/);
  assert.doesNotMatch(article, /datové řady|časové řady|pozorovací řady/);
  assert.match(evidence, /slug: "vlny-veder"[\s\S]*status: "hotovo"/);
});

test("keeps the main section headers free of status labels and explanatory side copy", async () => {
  const [evidenceIndex, evidenceFallback, history, people, sources] = await Promise.all([
    readFile(new URL("app/pozorovani/page.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/historie/page.tsx", root), "utf8"),
    readFile(new URL("app/osobnosti/page.tsx", root), "utf8"),
    readFile(new URL("app/zdroje/page.tsx", root), "utf8"),
  ]);

  assert.doesNotMatch(evidenceIndex, /topic\.status|Tahle mapa propojí/);
  assert.doesNotMatch(evidenceFallback, /topic\.status|<PageLead[^>]*>[\s\S]*topic\.summary/);
  assert.doesNotMatch(history, /Tato osa začíná knihovnou/);
  assert.doesNotMatch(people, /Profily propojí životopis/);
  for (const page of [evidenceIndex, evidenceFallback, history, people, sources]) {
    assert.match(page, /<PageLead[^>]*\/>/);
  }
});

test("uses one observation-only summary in every completed observation article", async () => {
  const articleFiles = [
    "GmstArticle.tsx",
    "StratosphericCoolingArticle.tsx",
    "AtmosphericCo2Article.tsx",
    "AtmosphericHumidityArticle.tsx",
    "PrecipitationArticle.tsx",
    "OceanHeatArticle.tsx",
    "GlobalMeanSeaLevelArticle.tsx",
    "OceanAcidificationArticle.tsx",
    "ArcticSeaIceArticle.tsx",
    "MountainGlaciersArticle.tsx",
    "IceSheetsArticle.tsx",
    "SnowPermafrostArticle.tsx",
    "PhenologyArticle.tsx",
    "HeatWavesArticle.tsx",
  ];
  const articles = await Promise.all(
    articleFiles.map((file) => readFile(new URL(`app/components/${file}`, root), "utf8")),
  );

  for (const [index, article] of articles.entries()) {
    const summaries = article.match(/<div className="article-observation-summary">[\s\S]*?<\/div>/g) ?? [];
    assert.equal(summaries.length, 1);
    assert.equal((summaries[0].match(/Shrnutí pozorování/g) ?? []).length, 1);
    assert.doesNotMatch(summaries[0], /Přesné shrnutí|Pozorování v jedné|±|nejist|metod|přístroj|stanic|družic|produkt|soubor|výpočet|map|není|nejsou|nelze|nikoli|neznamen|závis/i);
    const summaryText = summaries[0].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    assert.ok(summaryText.split(" ").length >= 70, `${articleFiles[index]} has an undersized observation summary`);
  }
});

test("publishes a complete resistance thermometry method article with traceable real data", async () => {
  const [article, methodPage, methods, sources, styles, sitemap] = await Promise.all([
    readFile(new URL("app/components/ResistanceThermometryArticle.tsx", root), "utf8"),
    readFile(new URL("app/metody/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/methods.ts", root), "utf8"),
    readFile(new URL("app/data/sources.ts", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("public/sitemap.xml", root), "utf8"),
  ]);

  assert.match(methods, /slug: "odporova-termometrie-a-termistory"/);
  assert.match(methodPage, /ResistanceThermometryArticle/);
  assert.match(methodPage, /Napsáno: 4\. srpna 2026/);
  assert.match(methodPage, /title="Odporová termometrie a termistory"/);
  assert.equal((article.match(/<dt>/g) ?? []).length, 4);
  assert.match(article, /<dt>Elektrický odpor<\/dt>/);
  assert.match(article, /<dt>Pt100<\/dt>/);
  assert.match(article, /<dt>NTC termistor<\/dt>/);
  assert.match(article, /<dt>ITS-90<\/dt>/);
  assert.match(article, /Odporová termometrie je způsob měření teploty/);
  assert.match(article, /Název <strong>termistor<\/strong> zahrnuje více druhů/);
  assert.match(article, /<h2>Jak probíhá měření<\/h2>/);
  assert.match(article, /<h2>Co přístroj měří přímo<\/h2>/);
  assert.match(article, /R\(t\)/);
  assert.match(article, /a \+ b ln\(R\) \+ c \[ln\(R\)\]/);
  assert.match(article, /<h2>Kalibrace a návaznost<\/h2>/);
  assert.match(article, /<h2>Jak se metoda vyvíjela<\/h2>/);
  assert.match(article, /<h2>Použití v klimatologii<\/h2>/);
  assert.match(article, /<h2>Skutečný výstup měření<\/h2>/);
  assert.match(article, /T_DAILY_MEAN/);
  assert.match(article, /T_DAILY_AVG/);
  assert.match(article, /Blue Hill/);
  assert.match(article, /CRND0103-2025-MA_Blue_Hill_0_W\.txt/);
  assert.equal((article.match(/unoptimized/g) ?? []).length, 2);
  assert.match(article, /uscrn-platinum-resistance-thermometer\.png/);
  assert.match(article, /nist-sprt-calibration-laboratory\.png/);
  assert.match(article, /href="\/pozorovani\/gmst"/);
  assert.match(article, /href="\/pozorovani\/tepelny-obsah-oceanu"/);
  assert.match(article, /<h2>Nejistoty a omezení<\/h2>/);
  assert.match(article, /<h2>Co metoda umožňuje zjistit<\/h2>/);
  for (const id of [
    "1871_Siemens_Thermometry",
    "1887_Callendar_Thermometry",
    "1968_Steinhart_Hart",
    "2013_Diamond_USCRN",
    "2014_BIPM_Thermistors",
    "2021_BIPM_IPRT",
    "2021_BIPM_SPRT",
    "2022_IEC_60751",
    "2025_USCRN_Blue_Hill",
    "2026_USCRN_Measurements",
    "2026_USCRN_Daily01_Readme",
    "2026_SeaBird_SBE41",
    "2026_Argo_Data",
  ]) {
    assert.match(sources, new RegExp(`id: "${id}"`));
    assert.match(article, new RegExp(`Citation id="${id}"`));
  }
  assert.match(styles, /\.method-flow/);
  assert.match(styles, /\.method-data-output table/);
  assert.match(styles, /\.method-comparison/);
  assert.match(sitemap, /\/metody\/odporova-termometrie-a-termistory\//);
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
  assert.match(evidence, /title: "Oxid uhličitý v atmosféře"/);
  assert.match(evidence, /title: "Obsah tepla v oceánu"/);
  assert.match(evidence, /title: "Sněhová pokrývka a permafrost"/);
});
