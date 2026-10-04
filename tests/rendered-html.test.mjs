import assert from "node:assert/strict";
import { createHash } from "node:crypto";
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
  const articleSourceIds = [...articleSources.matchAll(/^  \{ id: "([^"]+)"/gm)].map((match) => match[1]);
  assert.ok(articleSourceIds.length > 0);
  assert.equal(new Set(articleSourceIds).size, articleSourceIds.length, "Article source IDs must be unique");
  assert.doesNotMatch(articleSources, /author: "doi\.org"|<\/?(?:sub|sup|i)>|�/);
  assert.match(sources, /drive\.google\.com\/uc\?export=download/);
  assert.equal((sourceArchive.match(/"driveFileId":/g) ?? []).length, 227);
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

test("publishes forty-five measurement and analysis methods with working routes", async () => {
  const [page, detailPage, methods, styles, catalogueHtml, sitemap] = await Promise.all([
    readFile(new URL("app/metody/page.tsx", root), "utf8"),
    readFile(new URL("app/metody/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/methods.ts", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("dist/client/metody/index.html", root), "utf8"),
    readFile(new URL("public/sitemap.xml", root), "utf8"),
  ]);

  const methodRecords = [...methods.matchAll(/slug: "([^"]+)"/g)];
  assert.equal(methodRecords.length, 45);
  assert.equal(new Set(methodRecords.map((match) => match[1])).size, 45);
  assert.equal((catalogueHtml.match(/class="method-tile"/g) ?? []).length, 45);
  assert.equal((catalogueHtml.match(/class="method-catalog__group"/g) ?? []).length, 5);
  assert.match(catalogueHtml, /Zpracování dat a vyhodnocování výsledků/);
  for (const [, slug] of methodRecords) {
    assert.ok(catalogueHtml.includes(`href="/metody/${slug}"`), `Missing catalogue link: ${slug}`);
    assert.ok(sitemap.includes(`<loc>https://klimatologie.eu/metody/${slug}/</loc>`), `Missing sitemap entry: ${slug}`);
    const html = await readFile(new URL(`dist/client/metody/${slug}/index.html`, root), "utf8");
    assert.match(html, /<h1>[^<]+<\/h1>/, `Missing rendered method: ${slug}`);
  }
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

test("preserves the former titration and coulometry address as a two-method guide", async () => {
  const [page, catalogue, sitemap] = await Promise.all([
    readFile(new URL("dist/client/metody/titrace-a-coulometrie/index.html", root), "utf8"),
    readFile(new URL("dist/client/metody/index.html", root), "utf8"),
    readFile(new URL("public/sitemap.xml", root), "utf8"),
  ]);
  assert.match(page, /<h1>Titrace a coulometrie<\/h1>/);
  assert.match(page, /href="\/metody\/titrace"/);
  assert.match(page, /href="\/metody\/coulometrie"/);
  assert.doesNotMatch(catalogue, /href="\/metody\/titrace-a-coulometrie"/);
  assert.match(sitemap, /https:\/\/klimatologie\.eu\/metody\/titrace-a-coulometrie\//);
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
  assert.match(sourceCatalogueText, /arl\.noaa\.gov\/wp_arl\/wp-content\/uploads\/documents\/JournalPDFs\/FreeEtal\.JGR2005\.pdf/);
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
  assert.match(sourceCatalogueText, /10\.1038\/nature07080/);
  assert.match(sourceCatalogueText, /10\.1029\/2012GL051106/);
  assert.match(sourceCatalogueText, /10\.1126\/sciadv\.1601545/);
  assert.match(sourceCatalogueText, /10\.1175\/BAMS-D-15-00031\.1/);
  assert.match(sourceCatalogueText, /10\.5194\/essd-16-3517-2024/);
  assert.match(sourceCatalogueText, /10\.1007\/s00376-026-5876-0/);
  assert.match(sourceCatalogueText, /10\.1029\/2024GL111229/);
  assert.match(sourceCatalogueText, /10\.1038\/s41597-026-06957-2/);
  assert.match(article, /21,6 ± 6,5 terawattu/);
  assert.match(article, /12,9 ± 1,8 terawattu/);
  assert.match(article, /18,6 milionu profilů vodního sloupce/);
  assert.match(article, /Všechny odborné práce, metodické dokumenty a datové soubory použité v tomto článku lze otevřít bez/);
  assert.match(article, /zdrojů tohoto článku nepoužívají/);
  assert.doesNotMatch(
    `${article}\n${sourceCatalogueText}`,
    /DOI_10_1126_science_287_5461_2225|DOI_10_1029_2008gl037155|DOI_10_1038_nature09043/,
  );
  const oceanHeatSourceIds = [
    ...article.matchAll(/<SourceLink id="([^"]+)"/g),
  ].map((match) => match[1]);
  assert.equal(new Set(oceanHeatSourceIds).size, 28);
  for (const id of new Set(oceanHeatSourceIds)) {
    const catalogueOccurrences = sourceCatalogueText.split(id).length - 1;
    assert.ok(catalogueOccurrences >= 2, `${id} must exist and be marked as open access`);
    if (id.startsWith("DOI_")) {
      assert.match(sourceCatalogueText, new RegExp(`${id}:\\s*"https://`));
    }
  }
  assert.match(sourceCatalogueText, /repository\.library\.noaa\.gov\/view\/noaa\/73259\/noaa_73259_DS1\.pdf/);
  assert.match(sourceCatalogueText, /drum\.lib\.umd\.edu\/bitstreams\/e5f2ef03/);
  assert.match(sourceCatalogueText, /msdc\.qdio\.ac\.cn\/data\/metadata-special-detail/);
  assert.match(sourceCatalogueText, /scidb\.cn\/detail\?dataSetId=d216bc6517214dfba6646c4117a9b02f/);
  assert.match(article, /CC BY 4\.0/);
  assert.doesNotMatch(article, /Teplo je energie uložená ve vodě/);
  assert.doesNotMatch(article, /Tepelná energie/);
  assert.doesNotMatch(article, /datové řady|časové řady|pozorovací řady/);
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
  assert.match(sourceCatalogueText, /agupubs\.onlinelibrary\.wiley\.com\/doi\/10\.1029\/2019JD032263/);
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
  assert.match(sourceCatalogueText, /10\.5067\/NSIND-GMSV1/);
  assert.match(sourceCatalogueText, /psmsl\.org\/data\/obtaining\/complete\.php/);
  assert.match(article, /Po uzavření roku 2025/);
  assert.match(article, /Všechny odborné práce, metodické dokumenty a datové soubory použité v tomto článku lze otevřít bez/);
  assert.match(article, /zdrojů tohoto článku nepoužívají/);
  assert.doesNotMatch(
    `${article}\n${sourceCatalogueText}`,
    /DOI_10_1038_nature14093|DOI_10_1017_s0080455x00002083|DOI_10_2112_jcoastres_d_12_00175_1|DOI_10_1080_01490410050128591|WEB_NASA_Sea_Level_Earth_Indicator_NASA_Science_07caffec|WEB_NASA_NASA_SSH_popis_globalniho_vypoctu_2d3d3dce/,
  );
  const seaLevelSourceIds = [
    ...article.matchAll(/<SourceLink id="([^"]+)"/g),
  ].map((match) => match[1]);
  assert.equal(new Set(seaLevelSourceIds).size, 35);
  for (const id of new Set(seaLevelSourceIds)) {
    const catalogueOccurrences = sourceCatalogueText.split(id).length - 1;
    assert.ok(catalogueOccurrences >= 2, `${id} must exist and be marked as open access`);
    if (id.startsWith("DOI_")) {
      assert.match(sourceCatalogueText, new RegExp(`${id}:\\s*"https://`));
    }
  }
  assert.match(sourceCatalogueText, /zanna-researchteam\.github\.io\/files\/Frederikse-et-al-2020\.pdf/);
  assert.match(sourceCatalogueText, /nora\.nerc\.ac\.uk\/id\/eprint\/525251\/1\/s41558-019-0531-8\.pdf/);
  assert.match(sourceCatalogueText, /scholarwolf\.unr\.edu\/server\/api\/core\/bitstreams/);
  assert.match(sourceCatalogueText, /podaac\.jpl\.nasa\.gov\/dataset\/NASA_SSH_GMSL_INDICATOR/);
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
  assert.match(sourceCatalogueText, /10\.5670\/oceanog\.2010\.22/);
  assert.match(sourceCatalogueText, /10\.5194\/os-7-597-2011/);
  assert.match(sourceCatalogueText, /10\.1073\/pnas\.0906044106/);
  assert.match(sourceCatalogueText, /10\.3389\/fmars\.2023\.1289931/);
  assert.match(sourceCatalogueText, /10\.1029\/2023GB007765/);
  assert.match(sourceCatalogueText, /10\.5194\/essd-16-121-2024/);
  assert.match(sourceCatalogueText, /10\.25921\/m6tp-mj50/);
  assert.match(sourceCatalogueText, /10\.25921\/8dba-fr90/);
  assert.match(article, /CC BY 4\.0/);
  assert.match(evidence, /slug: "acidifikace-oceanu"[\s\S]*status: "hotovo"/);
});

test("renders open texts and data without Drive archives for every ocean acidification source", async () => {
  const [article, sourcesHtml] = await Promise.all([
    readFile(new URL("app/components/OceanAcidificationArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
  ]);
  const ids = new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((match) => match[1]));
  const cards = new Map([...sourcesHtml.matchAll(/<article\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g)]
    .map((match) => [match[1], match[2]]));
  for (const id of ids) {
    const card = cards.get(id);
    assert.ok(card, `Missing rendered source card: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/, `Open source has a Drive archive: ${id}`);
    assert.match(card, /Otevřít (?:veřejný zdroj|plný text|veřejná data)/, `Missing public access link: ${id}`);
    if (id.startsWith("DOI_") || id.includes("9661bd2a") || id.includes("e42bd642")) {
      assert.match(card, /Otevřít DOI/, `Missing DOI: ${id}`);
      assert.match(card, /Otevřít (?:plný text|veřejná data)/, `Missing separate full-text or data link: ${id}`);
    }
  }
  assert.ok(ids.has("DOI_10_26008_1912_bco_dmo_3782_10"), "BATS must cite the checked data version");
  assert.match(cards.get("DOI_10_26008_1912_bco_dmo_3782_10"), /3782_v10_bats_bottle\.csv/);
  assert.doesNotMatch(article, /DOI_10_1016_j_marchem_2007_01_013|DOI_10_1093_icesjms_5_3_401/,
    "Unrelated papers must not return under incorrect bibliographic labels");
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
  assert.match(sourceCatalogueText, /19980076134/);
  assert.match(sourceCatalogueText, /10\.7265\/a98x-0f50/);
  assert.match(sourceCatalogueText, /10\.5194\/tc-18-2473-2024/);
  assert.match(sourceCatalogueText, /10\.1088\/1748-9326\/aae3ec/);
  assert.match(article, /Licence to use Copernicus Products/);
  assert.doesNotMatch(article, /datové řady|časové řady|pozorovací řady/);
  assert.match(evidence, /slug: "ubytek-arktickeho-ledu"[\s\S]*status: "hotovo"/);
});

test("renders public texts and versioned data for every Arctic sea ice source", async () => {
  const [article, sourcesHtml] = await Promise.all([
    readFile(new URL("app/components/ArcticSeaIceArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
  ]);
  const ids = new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((match) => match[1]));
  const cards = new Map([...sourcesHtml.matchAll(/<article\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g)]
    .map((match) => [match[1], match[2]]));
  for (const id of ids) {
    const card = cards.get(id);
    assert.ok(card, `Missing rendered source card: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/, `Public source has a Drive archive: ${id}`);
    assert.match(card, /Otevřít (?:veřejný zdroj|plný text|veřejná data)/, `Missing public access: ${id}`);
    if (id.startsWith("DOI_")) {
      assert.match(card, /Otevřít DOI/, `Missing DOI: ${id}`);
      assert.match(card, /Otevřít (?:plný text|veřejná data)/, `Missing separate text or data: ${id}`);
    }
  }
  assert.ok(ids.has("DOI_10_5067_mpyg15waa4wx"), "NASA Team must link to downloadable version 2");
  assert.match(cards.get("DOI_10_5067_mpyg15waa4wx"), /nsidc-0051\/versions\/2/);
  assert.ok(ids.has("DOI_10_15770_eum_saf_osi_0027"), "The current OSI SAF continuation must be available");
  assert.ok(ids.has("WEB_NSIDC_Arctic_Sea_Ice_Minimum_2026"), "The preliminary 2026 minimum must have a source");
  assert.doesNotMatch(article, /DOI_10_5067_8gq8lzqvl0vl/, "Retired NASA Team version 1 must not return");
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

test("renders public mountain-glacier sources with separate DOI and full-text links", async () => {
  const [article, sourcesHtml, articleHtml] = await Promise.all([
    readFile(new URL("app/components/MountainGlaciersArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/ustup-ledovcu/index.html", root), "utf8"),
  ]);
  const ids = new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((match) => match[1]));
  const cards = new Map([...sourcesHtml.matchAll(/<article\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g)]
    .map((match) => [match[1], match[2]]));
  for (const id of ids) {
    const card = cards.get(id);
    assert.ok(card, `Missing rendered glacier source card: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/, `Public source has a Drive archive: ${id}`);
    assert.match(card, /Otevřít (?:veřejný zdroj|plný text|veřejná data)/, `Missing public access: ${id}`);
    if (id.startsWith("DOI_") || id === "WEB_World_Glacier_Monitoring_Ser_glosar_UNESCO_a_WGMS_06fc9a79" || id === "WEB_glims_org_GLIMS_Glacier_Database_2d3c95bb") {
      assert.match(card, /Otevřít DOI/, `Missing DOI: ${id}`);
      assert.match(card, /Otevřít (?:plný text|veřejná data)/, `Missing separate text or data: ${id}`);
    }
  }
  assert.match(cards.get("DOI_10_1038_s43017_026_00777_z"), /livrepository\.liverpool\.ac\.uk\/3197897/);
  assert.match(cards.get("DOI_10_1038_s41586_021_03436_z"), /dora\.lib4ri\.ch/);
  assert.match(cards.get("DOI_10_7265_4m1f_gd79"), /nsidc-0770\/versions\/6/);
  assert.match(cards.get("DOI_10_5067_f6jmovy5navz"), /nsidc-0770\/versions\/7/);
  assert.match(articleHtml, /68% pokrytí/);
  assert.match(articleHtml, /95% intervaly/);
  assert.match(articleHtml, /1975\/76–2023\/24/);
  assert.match(articleHtml, /Odborná revize: 3\. října 2026/);
});

test("publishes a sourced ice-sheet mass article with three measurement methods", async () => {
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

test("renders open ice-sheet papers and distinguishes revised estimates and data access limits", async () => {
  const [article, sourcesHtml, articleHtml] = await Promise.all([
    readFile(new URL("app/components/IceSheetsArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/nestabilita-prikrovu/index.html", root), "utf8"),
  ]);
  const ids = new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((match) => match[1]));
  const cards = new Map([...sourcesHtml.matchAll(/<article\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g)]
    .map((match) => [match[1], match[2]]));
  for (const id of ids) {
    const card = cards.get(id);
    assert.ok(card, `Missing rendered ice-sheet source card: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/, `Open source has a Drive archive: ${id}`);
    assert.match(card, /Otevřít (?:veřejný zdroj|plný text|veřejná data)/, `Missing public access: ${id}`);
    if (id.startsWith("DOI_")) {
      assert.match(card, /Otevřít DOI/, `Missing DOI: ${id}`);
      assert.match(card, /Otevřít (?:plný text|veřejná data)/, `Missing separate text or data: ${id}`);
    }
  }
  assert.match(cards.get("DOI_10_1038_274539a0"), /19810013163\.pdf#page=18/);
  assert.match(cards.get("DOI_10_1038_s41597_026_08088_0"), /nature\.com\/articles\/s41597-026-08088-0/);
  assert.match(cards.get("DOI_10_5067_temsc_3jc634"), /RL06\.3_V4/);
  assert.match(articleHtml, /11 309 ± 565 Gt/);
  assert.match(articleHtml, /160 ± 17 Gt za rok/);
  assert.match(articleHtml, /23 ± 5 Gt za rok/);
  assert.match(articleHtml, /dočasnou nedostupnost/);
  assert.match(articleHtml, /1,85 GB/);
  assert.match(articleHtml, /Odborná revize: 3\. října 2026/);
  assert.doesNotMatch(articleHtml, /5 120 ± 544|intervaly zasahují na obě strany nuly/);
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

test("renders open snow and permafrost sources with qualified trends and data coverage", async () => {
  const [article, sourcesHtml, articleHtml] = await Promise.all([
    readFile(new URL("app/components/SnowPermafrostArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/snehova-pokryvka-a-permafrost/index.html", root), "utf8"),
  ]);
  const ids = new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((match) => match[1]));
  const cards = new Map([...sourcesHtml.matchAll(/<article\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g)]
    .map((match) => [match[1], match[2]]));
  for (const id of ids) {
    const card = cards.get(id);
    assert.ok(card, `Missing rendered snow/permafrost source: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/, `Open source has a Drive archive: ${id}`);
    assert.match(card, /Otevřít (?:veřejný zdroj|plný text|veřejná data)/, `Missing public access: ${id}`);
    if (id.startsWith("DOI_")) {
      assert.match(card, /Otevřít DOI/, `Missing DOI: ${id}`);
      assert.match(card, /Otevřít (?:plný text|veřejná data)/, `Missing separate text or data: ${id}`);
    }
  }
  assert.match(cards.get("DOI_10_1080_1088937x_2021_1988001"), /par\.nsf\.gov\/servlets\/purl\/10326621/);
  assert.match(cards.get("DOI_10_1002_ppp_2088"), /doi\/full\/10\.1002\/ppp\.2088/);
  assert.match(cards.get("DOI_10_6084_m9_figshare_32885756"), /ndownloader\.figshare\.com\/files\/66270764/);
  assert.match(cards.get("DOI_10_7265_n52r3pmc"), /Datový soubor/);
  assert.match(cards.get("DOI_10_1594_pangaea_842821"), /Datový soubor/);
  assert.match(articleHtml, /0,29 ± 0,12 °C za desetiletí/);
  assert.match(articleHtml, /průměr pouze 37 lokalit se statisticky průkazným/);
  assert.match(articleHtml, /3 500 řádků pro 140 kódů lokalit/);
  assert.match(articleHtml, /Z 316 registrovaných míst vybrala 156/);
  assert.match(articleHtml, /Jediný panel porovnává dubnovou hmotnost/);
  assert.match(articleHtml, /Odborná revize: 3\. října 2026/);
  assert.doesNotMatch(articleHtml, /Čtyři nezávislé podklady|s úplným desetiletým výsledkem|severoamerické \(a\) a euroasijské \(b\)/);
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
  assert.match(article, /5 589 výsledků\s+pro 684 druhů/);
  assert.match(sourceCatalogueText, /10\.1007\/s00484-014-0789-5/);
  assert.match(sourceCatalogueText, /10\.1111\/gcb\.15000/);
  assert.match(sourceCatalogueText, /10\.1098\/rspb\.2021\.2456/);
  assert.match(sourceCatalogueText, /10\.1111\/2041-210X\.13280/);
  assert.match(sourceCatalogueText, /10\.1002\/ecm\.1552/);
  assert.match(sourceCatalogueText, /10\.5194\/essd-17-6531-2025/);
  assert.match(sourceCatalogueText, /10\.5067\/MODIS\/MCD12Q2\.061/);
  assert.match(article, /CC BY 4\.0/);
  assert.doesNotMatch(article, /datové řady|časové řady|pozorovací řady/);
  assert.match(evidence, /slug: "fenologicke-posuny"[\s\S]*status: "hotovo"/);
});

test("renders public phenology sources and preserves the meaning of dates and samples", async () => {
  const [article, sourcesHtml, articleHtml] = await Promise.all([
    readFile(new URL("app/components/PhenologyArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/fenologicke-posuny/index.html", root), "utf8"),
  ]);
  const ids = new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((match) => match[1]));
  const cards = new Map([...sourcesHtml.matchAll(/<article\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g)]
    .map((match) => [match[1], match[2]]));
  for (const id of ids) {
    const card = cards.get(id);
    assert.ok(card, `Missing rendered phenology source: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/, `Open source has a Drive archive: ${id}`);
    assert.match(card, /Otevřít (?:veřejný zdroj|plný text|veřejná data)/, `Missing public access: ${id}`);
    if (id.startsWith("DOI_")) {
      assert.match(card, /Otevřít DOI/, `Missing DOI: ${id}`);
      assert.match(card, /Otevřít (?:plný text|veřejná data)/, `Missing separate text or data: ${id}`);
    }
  }
  assert.match(cards.get("DOI_10_1007_s00484_021_02185_y"), /Susanne S\. Renner a Frank-M\. Chmielewski/);
  assert.match(cards.get("DOI_10_3334_ornldaac_2389"), /Datový soubor/);
  assert.match(cards.get("DOI_10_6084_m9_figshare_c_5800155"), /Doplňkový materiál/);
  assert.match(articleHtml, /Číslo neoznačuje jednotlivé návštěvy/);
  assert.match(articleHtml, /přechodová data z něj nepočítá/);
  assert.match(articleHtml, /15 % tedy neznamená, že 15 % stromů má listy/);
  assert.match(articleHtml, /VNP22Q2\.002 poskytuje výsledky od roku 2013/);
  assert.match(articleHtml, /Není to soubor všech 419 354 původních pozorování/);
  assert.match(articleHtml, /Odborná revize: 3\. října 2026/);
  assert.doesNotMatch(articleHtml, /Brügger a Vassella|Reed et al\., 1994|125 000 měření v čase/);
  assert.equal((articleHtml.match(/class="article-figure__scroll"/g) ?? []).length, 3);
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
  assert.match(article, /6 °C·den/);
  assert.match(article, /Od 3\. do 16\. srpna 2015/);
  assert.match(article, /18,5 tropického dne/);
  assert.match(sourceCatalogueText, /10\.3354\/cr019193/);
  assert.match(sourceCatalogueText, /10\.1175\/JCLI-D-12-00383\.1/);
  assert.match(sourceCatalogueText, /10\.1038\/s41467-020-16970-7/);
  assert.match(sourceCatalogueText, /10\.1038\/s41467-022-31432-y/);
  assert.match(sourceCatalogueText, /dly-0-203-0-11755-TMA\.csv/);
  assert.match(article, /Open Government Licence v3\.0/);
  assert.doesNotMatch(article, /datové řady|časové řady|pozorovací řady/);
  assert.match(evidence, /slug: "vlny-veder"[\s\S]*status: "hotovo"/);
});

test("gives every heat-wave source public access and preserves corrected measurement distinctions", async () => {
  const [article, sourcesHtml, articleHtml] = await Promise.all([
    readFile(new URL("app/components/HeatWavesArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/vlny-veder/index.html", root), "utf8"),
  ]);
  const ids = new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((match) => match[1]));
  const cards = new Map([...sourcesHtml.matchAll(/<article\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g)]
    .map((match) => [match[1], match[2]]));
  assert.equal(ids.size, 32);
  for (const id of ids) {
    const card = cards.get(id);
    assert.ok(card, `Missing rendered heat-wave source: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/, `Open source has a Drive archive: ${id}`);
    assert.match(card, /Otevřít (?:veřejný zdroj|plný text|veřejná data)/, `Missing public access: ${id}`);
    if (id.startsWith("DOI_")) {
      assert.match(card, /Otevřít DOI/, `Missing DOI: ${id}`);
      assert.match(card, /Otevřít (?:plný text|veřejná data)/, `Missing separate text or data: ${id}`);
    }
  }
  assert.ok(!cards.has("DOI_10_1002_joc_7505"));
  assert.match(cards.get("DOI_10_1038_sdata_2018_206"), /Ehsan Raei/);
  assert.match(cards.get("DOI_10_6084_m9_figshare_c_4004668"), /Datový soubor/);
  assert.match(cards.get("WEB_CHMU_Straznice_denni_maxima_TMA"), /dly-0-203-0-11755-TMA\.csv/);
  assert.match(articleHtml, /nikoli záporný počet dnů/);
  assert.match(articleHtml, /WSDI tedy neudává počet událostí/);
  assert.match(articleHtml, /nemusely připadat na stejné datum/);
  assert.match(articleHtml, /neuvádí úplný seznam použitých stanic/);
  assert.match(articleHtml, /Odborná revize: 3\. října 2026/);
  assert.doesNotMatch(articleHtml, /Sadegh et al\., 2018|133 homogenizovaných českých stanic|souvislá zasažená plocha/);
  assert.equal((articleHtml.match(/class="article-figure__scroll"/g) ?? []).length, 2);
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

test("publishes reproducible thermometry examples with open sources and working local links", async () => {
  const [html, article, catalogue] = await Promise.all([
    readFile(new URL("dist/client/metody/odporova-termometrie-a-termistory/index.html", root), "utf8"),
    readFile(new URL("app/components/ResistanceThermometryArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.match(html, /Odborná revize: 4\. října 2026/);
  assert.doesNotMatch(article, /<Citation\b/);
  assert.doesNotMatch(body.replace(/&[^;\s]+;/g, ""), /;/, "Czech prose must not contain semicolons");
  assert.match(body, /29,8627 °C/);
  assert.match(body, /5,4083 °C/);
  assert.equal((body.match(/<tr>/g) ?? []).length, 13, "Header plus all twelve original values");
  assert.equal((body.match(/<details/g) ?? []).length, 2);
  assert.match(body, /class="method-flow"/);
  const ids = [...new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((m) => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp(`<article[^>]*id="${id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(card, `Missing source card: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/, `Open source still has a Drive button: ${id}`);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : `${href.replace(/\/$/, "")}/index.html`;
    await readFile(new URL(`dist/client${file}`, root));
  }
});

test("reproduces the published thermometry calculations and rejects incomplete or misdated input", async () => {
  const base = new URL("public/data/methods/resistance-thermometry/", root);
  const { summarizeHour, calibratedTemperature } = await import(new URL("reproduce.mjs", base));
  const [metadataText, subhourly, hourly] = await Promise.all([
    readFile(new URL("example.json", base), "utf8"),
    readFile(new URL("blue-hill-five-minute.txt", base), "utf8"),
    readFile(new URL("blue-hill-hourly.txt", base), "utf8"),
  ]);
  const metadata = JSON.parse(metadataText);
  const result = summarizeHour(subhourly, hourly, metadata);
  assert.equal(result.count, 12);
  assert.equal(result.sumC, 64.9);
  assert.ok(Math.abs(result.meanC - 5.408333333333333) < 1e-12);
  assert.equal(Number(result.meanC.toFixed(1)), result.publishedHourlyC);
  assert.equal(result.publishedHourlyC, metadata.publishedHourlyC);
  const rows = subhourly.trim().split(/\r?\n/);
  assert.deepEqual(rows.map((r) => ({ endLST: r.split(/\s+/)[4], temperatureC: Number(r.split(/\s+/)[8]) })), metadata.rows);
  assert.throws(() => summarizeHour(rows.slice(1).join("\n"), hourly, metadata));
  assert.throws(() => summarizeHour(subhourly + rows[0], hourly, metadata));
  assert.throws(() => summarizeHour(subhourly.replace("     5.1", " -9999.0"), hourly, metadata));
  assert.throws(() => summarizeHour(subhourly.replace("0505", "0405"), hourly, metadata));
  const lab = metadata.calibration;
  assert.ok(Math.abs(calibratedTemperature(lab.resistanceOhm, lab.coefficientsAscending) - 29.862741854281) < 1e-10);
});

test("publishes hygrometry with a reproducible hour, source cards and observation links", async () => {
  const [html, article, catalogue, observation] = await Promise.all([
    readFile(new URL("dist/client/metody/hygrometrie/index.html", root), "utf8"),
    readFile(new URL("app/components/HygrometryArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/narust-vlhkosti/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "The method must render its full article, not the catalogue fallback");
  assert.match(body, /class="method-flow"/);
  assert.match(body, /84,666/);
  assert.match(body, /85 %/);
  assert.equal((body.match(/<tbody>[\s\S]*?<\/tbody>/)?.[0].match(/<tr>/g) ?? []).length, 12);
  assert.doesNotMatch(body.replace(/&[^;\s]+;/g, ""), /;/, "Czech prose must not contain semicolons");
  assert.match(observation, /href="\/metody\/hygrometrie\/?"/);
  const ids = [...new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((m) => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp(`<article[^>]*id="${id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(card, `Missing source card: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/, `Open source has a Drive button: ${id}`);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/, `Missing open access: ${id}`);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : `${href.replace(/\/$/, "")}/index.html`;
    await readFile(new URL(`dist/client${file}`, root));
  }
});

test("reproduces the NOAA humidity hour and rejects gaps, duplicates, wrong times and quality flags", async () => {
  const base = new URL("public/data/methods/hygrometry/", root);
  const { summarizeHumidityHour } = await import(new URL("reproduce.mjs", base));
  const [metadataText, subhourly, hourly] = await Promise.all([
    readFile(new URL("example.json", base), "utf8"),
    readFile(new URL("blue-hill-five-minute.txt", base), "utf8"),
    readFile(new URL("blue-hill-hourly.txt", base), "utf8"),
  ]);
  const metadata = JSON.parse(metadataText);
  for (const [name, hash] of Object.entries(metadata.sha256)) {
    const exported = await readFile(new URL(`dist/client/data/methods/hygrometry/${name}`, root));
    assert.equal(createHash("sha256").update(exported).digest("hex"), hash);
  }
  const result = summarizeHumidityHour(subhourly, hourly, metadata);
  assert.deepEqual(result, { count: 12, sumPercent: 1016, meanPercent: 1016 / 12,
    roundedMeanPercent: 85, publishedHourlyPercent: 85, agreesAfterRounding: true });
  const rows = subhourly.trim().split(/\r?\n/).map((row) => row.trim().split(/\s+/));
  assert.deepEqual(rows.map((r) => ({ endLST: r[4], relativeHumidityPercent: Number(r[15]), qualityFlag: Number(r[16]) })), metadata.rows);
  const changed = (index, value) => rows.map((r, i) => r.map((v, j) => i === 0 && j === index ? value : v).join(" ")).join("\n");
  assert.throws(() => summarizeHumidityHour(rows.slice(1).map((r) => r.join(" ")).join("\n"), hourly, metadata));
  assert.throws(() => summarizeHumidityHour(subhourly + rows[0].join(" "), hourly, metadata));
  for (const [column, value] of [[15, "-9999"], [15, "101"], [16, "3"], [2, "0405"], [5, "2.000"]]) {
    assert.throws(() => summarizeHumidityHour(changed(column, value), hourly, metadata));
  }
  const h = hourly.trim().split(/\s+/);
  h[27] = "3";
  assert.throws(() => summarizeHumidityHour(subhourly, h.join(" "), metadata));
  h[27] = "0";
  h[26] = "86";
  assert.equal(summarizeHumidityHour(subhourly, h.join(" "), metadata).agreesAfterRounding, false);
});

test("publishes radiosounding with its original profile, open sources and connected observations", async () => {
  const [html, article, catalogue, ...related] = await Promise.all([
    readFile(new URL("dist/client/metody/radiosondaz/index.html", root), "utf8"),
    readFile(new URL("app/components/RadiosoundingArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    ...["pozorovani/stratosfericke-ochlazovani", "pozorovani/narust-vlhkosti", "metody/odporova-termometrie-a-termistory"]
      .map((path) => readFile(new URL(`dist/client/${path}/index.html`, root), "utf8")),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "The method must render its full article, not the catalogue fallback");
  assert.match(body, /class="method-flow"/);
  assert.match(body, /−6,72 °C\/km/);
  assert.match(body, /prague-temperature-profile\.png/);
  assert.equal((body.match(/<tbody>[\s\S]*?<\/tbody>/)?.[0].match(/<tr>/g) ?? []).length, 8);
  assert.doesNotMatch(body.replace(/&[^;\s]+;/g, ""), /;/, "Czech prose must not contain semicolons");
  for (const page of related) assert.match(page, /href="\/metody\/radiosondaz\/?"/);
  const ids = [...new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((m) => m[1]))];
  for (const id of ids) {
    const card = catalogue.match(new RegExp(`<article[^>]*id="${id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(card, `Missing source card: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/, `Open source has a Drive button: ${id}`);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/, `Missing open access: ${id}`);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : `${href.replace(/\/$/, "")}/index.html`;
    await readFile(new URL(`dist/client${file}`, root));
  }
});

test("reproduces the Prague sounding from unchanged data and rejects invalid or incomplete profiles", async () => {
  const base = new URL("public/data/methods/radiosounding/", root);
  const { parseProfile, summarizeProfile } = await import(new URL("reproduce.mjs", base));
  const metadata = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const bytes = await readFile(new URL(metadata.archiveMember, base));
  const exported = await readFile(new URL(`dist/client/data/methods/radiosounding/${metadata.archiveMember}`, root));
  assert.equal(createHash("sha256").update(bytes).digest("hex"), metadata.fileSha256);
  assert.deepEqual(exported, bytes, "The static export must preserve original line endings and bytes");
  const text = bytes.toString("utf8");
  const result = summarizeProfile(text, metadata);
  assert.equal(result.recordCount, 5059);
  assert.equal(result.durationSeconds, 5254);
  assert.deepEqual(result.selectedRows, metadata.selectedRows);
  assert.ok(Math.abs(result.temperatureDifferenceC - (-27.8)) < 1e-10);
  assert.ok(Math.abs(result.heightDifferenceGpm - 4137.8) < 1e-10);
  assert.ok(Math.abs(result.temperatureGradientCPerGeopotentialKm - (-6.718546087292761)) < 1e-12);
  const rows = text.trim().split(/[\r\n]+/).slice(1);
  const fromRows = (dataRows) => `sep=,\n${dataRows.join("\n")}`;
  assert.throws(() => parseProfile(rows.join("\n")), /delimiter/);
  assert.throws(() => summarizeProfile(fromRows(rows.slice(1)), metadata));
  assert.throws(() => summarizeProfile(fromRows([...rows, rows.at(-1)]), metadata), /time/);
  assert.throws(() => parseProfile(fromRows([rows[1], rows[0]])), /time/);
  for (const [column, value] of [[1, "60"], [2, ""], [3, "NaN"], [4, "-9999"], [5, "101"], [9, "91"]]) {
    const cells = rows[0].split(",");
    cells[column] = value;
    assert.throws(() => parseProfile(fromRows([cells.join(",")])), `Invalid column ${column} must fail`);
  }
  const endpoints = structuredClone(metadata);
  endpoints.calculation.endElapsedSeconds = 600.5;
  assert.throws(() => summarizeProfile(text, endpoints), /endpoints/);
  // Real transmission has gaps. Sampling frequency must not be assumed to be exactly one second.
  assert.deepEqual(parseProfile(fromRows([rows[0], rows.at(-1)])).map((r) => r.elapsedSeconds), [0, 5254]);
});

test("publishes pressure and hydrostatic height with traceable calibration data and related articles", async () => {
  const [html, article, catalogue, ...related] = await Promise.all([
    readFile(new URL("dist/client/metody/mereni-tlaku-a-hydrostaticke-vysky/index.html", root), "utf8"),
    readFile(new URL("app/components/PressureHeightArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    ...["pozorovani/tepelny-obsah-oceanu", "pozorovani/acidifikace-oceanu", "pozorovani/gmsl", "metody/radiosondaz"]
      .map((path) => readFile(new URL(`dist/client/${path}/index.html`, root), "utf8")),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "The full method must replace its catalogue fallback");
  assert.match(body, /class="method-flow"/);
  assert.match(body, /calibration-residuals\.png/);
  assert.equal((body.match(/<tbody>[\s\S]*?<\/tbody>/)?.[0].match(/<tr>/g) ?? []).length, 11);
  assert.doesNotMatch(body.replace(/&[^;\s]+;/g, ""), /;/, "Czech prose must not contain semicolons");
  for (const page of related) assert.match(page, /href="\/metody\/mereni-tlaku-a-hydrostaticke-vysky\/?"/);
  const ids = [...new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((m) => m[1]))];
  assert.equal(ids.length, 10);
  for (const id of ids) {
    const card = catalogue.match(new RegExp(`<article[^>]*id="${id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(card, `Missing pressure source card: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/, `Open source has a Drive button: ${id}`);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/, `Missing open access: ${id}`);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : `${href.replace(/\/$/, "")}/index.html`;
    await readFile(new URL(`dist/client${file}`, root));
  }
});

test("reproduces all pressure calibration residuals and detects incomplete or corrupted input", async () => {
  const base = new URL("public/data/methods/pressure-height/", root);
  const { parseCalibration, summarizeCalibration } = await import(new URL("reproduce.mjs", base));
  const metadata = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const bytes = await readFile(new URL("calibration.csv", base));
  assert.equal(createHash("sha256").update(bytes).digest("hex"), metadata.csvSha256);
  assert.deepEqual(await readFile(new URL("dist/client/data/methods/pressure-height/calibration.csv", root)), bytes);
  const text = bytes.toString("utf8");
  const rows = parseCalibration(text);
  const result = summarizeCalibration(text);
  assert.equal(result.rowCount, 11);
  assert.equal(result.selected.frequencyHz, 35196);
  assert.equal(result.selected.internalTemperatureC, 23.5);
  assert.ok(Math.abs(result.maxAbsBeforeDbar - 0.724639276) < 1e-9);
  assert.ok(Math.abs(result.maxAbsAfterDbar - 0.273032496) < 1e-9);
  assert.ok(Math.abs(result.illustrativeResidualHeightM - 0.27841566284) < 1e-9);
  for (let index = 0; index < rows.length; index++) {
    for (const key of ["referenceDbar", "beforeDbar", "afterDbar"]) {
      assert.ok(Math.abs(rows[index][key] - metadata.rows[index][key]) < 1e-8, "Rendered table must match recalculation");
    }
  }
  const lines = text.trim().split(/\r?\n/);
  assert.throws(() => parseCalibration(lines.slice(0, -1).join("\n")), /row count/);
  assert.throws(() => parseCalibration(text.replace("reference_psia", "reference_dbar")), /columns/);
  assert.throws(() => parseCalibration(text.replace("11,14.573", "10,14.573")), /sequence/);
  assert.throws(() => parseCalibration(text.replace("35", "NaN")), /numerical/);
  assert.throws(() => parseCalibration(text.replace("-0.075", "0.075")), /Residual/);
  assert.throws(() => parseCalibration(text.replace("32844.70", "")), /numerical/);
});

test("publishes conductometry with a reproducible signal conversion and open source cards", async () => {
  const [html, article, catalogue, ...related] = await Promise.all([
    readFile(new URL("dist/client/metody/konduktometrie/index.html", root), "utf8"),
    readFile(new URL("app/components/ConductometryArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    ...["pozorovani/tepelny-obsah-oceanu", "pozorovani/acidifikace-oceanu", "metody/mereni-tlaku-a-hydrostaticke-vysky"]
      .map((path) => readFile(new URL(`dist/client/${path}/index.html`, root), "utf8")),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "The full method must replace its catalogue fallback");
  assert.match(body, /class="method-flow"/);
  assert.match(body, /conductivity-temperature\.png/);
  assert.match(body, /34,6424/);
  assert.equal((body.match(/<tbody>[\s\S]*?<\/tbody>/)?.[0].match(/<tr>/g) ?? []).length, 6);
  assert.doesNotMatch(body.replace(/&[^;\s]+;/g, ""), /;/, "Czech prose must not contain semicolons");
  for (const page of related) assert.match(page, /href="\/metody\/konduktometrie\/?"/);
  const ids = [...new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((m) => m[1]))];
  for (const id of ids) {
    const card = catalogue.match(new RegExp(`<article[^>]*id="${id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(card, `Missing conductometry source: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/, `Open source has a Drive button: ${id}`);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/, `Missing open access: ${id}`);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : `${href.replace(/\/$/, "")}/index.html`;
    await readFile(new URL(`dist/client${file}`, root));
  }
});

test("reproduces conductivity calibration and matches independent published PSS-78 check values", async () => {
  const base = new URL("public/data/methods/conductometry/", root);
  const { practicalSalinity, parseCalibration, reproduceCalibration } = await import(new URL("reproduce.mjs", base));
  // TEOS-10 gsw_SP_from_C v3.05 documentation. Conductivities there are in mS/cm.
  const cases = [
    [34.5487, 28.7856, 10, 20.009869599086951],
    [34.7275, 28.4329, 50, 20.265511864874270],
    [34.8605, 22.8103, 125, 22.981513062527689],
    [34.6810, 10.2600, 250, 31.204503263727982],
    [34.5680, 6.8863, 600, 34.032315787432829],
    [34.5600, 4.4036, 1000, 36.400308494388170],
  ];
  for (const [c, t, p, expected] of cases) {
    assert.ok(Math.abs(practicalSalinity(c / 10, t, p).SP - expected) < 1e-10);
  }
  for (const args of [[0, 15, 0], [0.1, 15, 0], [10, 15, 0], [4.2, 36, 0], [4.2, 15, -1], [4.2, 15, 10001], [NaN, 15, 0]]) {
    assert.throws(() => practicalSalinity(...args), "Reject values outside the explicitly supported domain");
  }
  const metadata = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const bytes = await readFile(new URL("calibration.csv", base));
  assert.equal(createHash("sha256").update(bytes).digest("hex"), metadata.csvSha256);
  assert.deepEqual(await readFile(new URL("dist/client/data/methods/conductometry/calibration.csv", root)), bytes);
  const text = bytes.toString("utf8");
  const result = reproduceCalibration(text, metadata);
  assert.equal(result.recordCount, 7);
  assert.equal(result.selectedCount, 6);
  assert.equal(result.excludedStep, 1);
  assert.deepEqual(result.rows, metadata.rows, "The rendered results must agree with recalculation");
  assert.ok(Math.abs(result.selected.calculatedSm - 4.252531092811017) < 1e-12);
  assert.ok(Math.abs(result.selected.SP - 34.642394135890406) < 1e-10);
  assert.throws(() => parseCalibration(text.replace("frequency_khz", "frequency_hz")), /columns/);
  assert.throws(() => parseCalibration(text.trim().split(/\r?\n/).slice(0, -1).join("\n")), /row count/);
  assert.throws(() => parseCalibration(text.replace("5.07771", "NaN")), /numerical/);
  assert.throws(() => reproduceCalibration(text.replace("5.96800", "5968.00"), metadata));
});

test("publishes rain gauges and disdrometers with open sources, data and an observation backlink", async () => {
  const [html, article, catalogue, observation] = await Promise.all([
    readFile(new URL("dist/client/metody/srazkomery-a-disdrometry/index.html", root), "utf8"),
    readFile(new URL("app/components/RainGaugeArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/srazky-a-privalove-srazky/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "Full article must replace the catalogue fallback");
  assert.match(body, /class="method-flow"/);
  assert.match(body, /blue-hill-rain\.png/);
  assert.match(body, /31,2 mm\/h/);
  assert.match(body, /nepřiřazuje samostatný příznak kvality/);
  assert.equal((body.match(/<tbody>[\s\S]*?<\/tbody>/)?.[0].match(/<tr>/g) ?? []).length, 12);
  assert.doesNotMatch(body.replace(/&[^;\s]+;/g, ""), /;/, "No semicolons in Czech prose");
  assert.match(observation, /href="\/metody\/srazkomery-a-disdrometry\/?"/);
  const ids = [...new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((m) => m[1]))];
  for (const id of ids) {
    const card = catalogue.match(new RegExp(`<article[^>]*id="${id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(card, `Missing rain method source: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/, `Open source has a Drive button: ${id}`);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/, `Missing open access: ${id}`);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : `${href.replace(/\/$/, "")}/index.html`;
    await readFile(new URL(`dist/client${file}`, root));
  }
});

test("reproduces the NOAA rain hour, distinguishes interval depth from intensity and rejects gaps", async () => {
  const base = new URL("public/data/methods/rain-gauges/", root);
  const { summarizeRainHour } = await import(new URL("reproduce.mjs", base));
  const metadata = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const names = ["blue-hill-five-minute.txt", "blue-hill-hourly.txt"];
  const buffers = await Promise.all(names.map((name) => readFile(new URL(name, base))));
  for (let i = 0; i < names.length; i++) {
    assert.equal(createHash("sha256").update(buffers[i]).digest("hex"), metadata.sha256[names[i]]);
    assert.deepEqual(await readFile(new URL(`dist/client/data/methods/rain-gauges/${names[i]}`, root)), buffers[i]);
  }
  const [subhourly, hourly] = buffers.map((b) => b.toString("utf8"));
  const result = summarizeRainHour(subhourly, hourly, metadata);
  assert.equal(result.count, 12);
  assert.equal(result.hourlyDepthMm, 9.2);
  assert.equal(result.publishedHourlyDepthMm, 9.2);
  assert.equal(result.hourlyMeanRateMmPerHour, 9.2);
  assert.equal(result.maxFiveMinuteRateMmPerHour, 31.2);
  assert.equal(result.agreesWithPublishedHour, true);
  assert.deepEqual(result.rows, metadata.rows);
  const lines = subhourly.trim().split(/\r?\n/);
  const mutate = (index, field, value) => lines.map((line, i) => {
    const columns = line.trim().split(/\s+/);
    if (i === index) columns[field] = value;
    return columns.join(" ");
  }).join("\n");
  for (const value of ["-9999.0", "NaN", "", "-0.1"])
    assert.throws(() => summarizeRainHour(mutate(0, 9, value), hourly, metadata));
  assert.throws(() => summarizeRainHour(lines.slice(1).join("\n"), hourly, metadata), /Expected 12/);
  assert.throws(() => summarizeRainHour(mutate(0, 4, "1410"), hourly, metadata), /timestamp/);
  assert.throws(() => summarizeRainHour(mutate(0, 2, "2005"), hourly, metadata), /timestamp/);
  // Column 12 is a solar-radiation flag. It must not reject valid precipitation.
  assert.equal(summarizeRainHour(mutate(0, 11, "3"), hourly, metadata).hourlyDepthMm, 9.2);
  // A valid zero is dry, whereas a missing value must never be silently filled.
  const dryFirst = summarizeRainHour(mutate(0, 9, "0.0"), hourly, metadata);
  assert.equal(dryFirst.hourlyDepthMm, 8.9);
  assert.equal(dryFirst.agreesWithPublishedHour, false);
});

test("publishes coastal tide gauges with an actual datum conversion and open sources", async () => {
  const [html, article, catalogue, observation] = await Promise.all([
    readFile(new URL("dist/client/metody/pobrezni-mereni-hladiny-a-vyskova-reference/index.html", root), "utf8"),
    readFile(new URL("app/components/TideGaugeArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/gmsl/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "Full article must replace the catalogue fallback");
  assert.match(body, /class="method-flow"/);
  assert.match(body, /san-francisco-datums\.png/);
  assert.match(body, /0,951 m/);
  assert.match(body, /0,969/);
  assert.match(body, /0,018/);
  assert.match(body, /od zveřejněných šestiminutových údajů/);
  assert.equal((body.match(/<tbody>[\s\S]*?<\/tbody>/)?.[0].match(/<tr>/g) ?? []).length, 4);
  assert.doesNotMatch(body.replace(/&[^;\s]+;/g, ""), /;/);
  assert.match(observation, /href="\/metody\/pobrezni-mereni-hladiny-a-vyskova-reference\/?"/);
  const ids = [...new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((m) => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp(`<article[^>]*id="${id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(card, `Missing tide gauge source: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/, `Open source has a Drive button: ${id}`);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/, `Missing open access: ${id}`);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : `${href.replace(/\/$/, "")}/index.html`;
    await readFile(new URL(`dist/client${file}`, root));
  }
});

test("reproduces NOAA tide heights, preserves negative values and validates reference and coverage", async () => {
  const base = new URL("public/data/methods/tide-gauges/", root);
  const { summarizeDay, reproduce } = await import(new URL("reproduce.mjs", base));
  const metadata = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const names = ["water-level-mllw.json", "water-level-msl.json", "datums.json"];
  const buffers = await Promise.all(names.map((name) => readFile(new URL(name, base))));
  for (let i = 0; i < names.length; i++) {
    assert.equal(createHash("sha256").update(buffers[i]).digest("hex"), metadata.sha256[names[i]]);
    assert.deepEqual(await readFile(new URL(`dist/client/data/methods/tide-gauges/${names[i]}`, root)), buffers[i]);
  }
  const datasets = buffers.map((b) => JSON.parse(b));
  const result = await reproduce();
  assert.deepEqual(result, metadata.result);
  assert.equal(result.count, 240);
  assert.equal(result.offsetM, 0.951);
  assert.equal(result.min.mllwM, -0.358, "Negative heights are valid below the reference zero");
  assert.equal(result.max.mllwM, 1.973);
  assert.equal(result.rangeM, 2.331);
  assert.ok(Math.abs(result.meanMllwM - 0.9685166666666667) < 1e-12);
  assert.ok(Math.abs(result.meanMslM - 0.0175166666666667) < 1e-12);
  // Changing datum must preserve the physical range and all increments.
  for (let i = 1; i < result.rows.length; i++) {
    const a = result.rows[i], b = result.rows[i - 1];
    assert.ok(Math.abs((a.mllwM - b.mllwM) - (a.mslM - b.mslM)) < 1e-12);
  }
  const reject = (mutate, pattern) => {
    const inputs = structuredClone(datasets);
    mutate(inputs);
    assert.throws(() => summarizeDay(...inputs, metadata), pattern);
  };
  reject((a) => a[0].data.pop(), /240/);
  reject((a) => { a[0].data[1].t = a[0].data[0].t; }, /timestamp/);
  for (const value of ["", "NaN", "-99999.0"]) reject((a) => { a[0].data[0].v = value; });
  reject((a) => { a[0].data[0].q = "p"; }, /Unverified/);
  reject((a) => { a[0].data[0].f = "1,0,0,0"; }, /inferred/);
  reject((a) => { a[1].metadata.id = "wrong"; }, /Station/);
  reject((a) => { a[2].units = "feet"; }, /units/);
  reject((a) => { a[2].epoch = "2002-2020"; }, /epoch/);
  reject((a) => { a[2].datums.find((d) => d.name === "MSL").value += 0.1; }, /disagrees/);
});

test("publishes snow measurement with a reproducible layer profile and open sources", async () => {
  const [html, article, catalogue, observation] = await Promise.all([
    readFile(new URL("dist/client/metody/mereni-vysky-hustoty-a-vodni-hodnoty-snehu/index.html", root), "utf8"),
    readFile(new URL("app/components/SnowMeasurementArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/snehova-pokryvka-a-permafrost/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "Full article must replace the catalogue fallback");
  assert.match(body, /class="method-flow"/);
  assert.match(body, /snow-profile\.png/);
  assert.match(body.replace(/<!--[\s\S]*?-->/g, ""), /28,5 mm SWE/);
  assert.match(body.replace(/<!--[\s\S]*?-->/g, ""), /237,5 kg\/m³/);
  assert.match(body, /již vypočtené hustoty/);
  assert.match(body, /Původní hmotnosti nádobek a sněhu/);
  assert.equal((body.match(/<tbody>[\s\S]*?<\/tbody>/)?.[0].match(/<tr>/g) ?? []).length, 4);
  assert.doesNotMatch(body.replace(/&[^;\s]+;/g, ""), /;/);
  assert.match(observation, /href="\/metody\/mereni-vysky-hustoty-a-vodni-hodnoty-snehu\/?"/);
  const ids = [...new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((m) => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp(`<article[^>]*id="${id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(card, `Missing snow source: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/, `Open source has a Drive button: ${id}`);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/, `Missing open access: ${id}`);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : `${href.replace(/\/$/, "")}/index.html`;
    await readFile(new URL(`dist/client${file}`, root));
  }
});

test("preserves the original snow workbook and its published mass-per-area calculation", async () => {
  const base = new URL("public/data/methods/snow-measurements/", root);
  const metadata = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const original = await readFile(new URL("density.xlsx", base));
  assert.equal(createHash("sha256").update(original).digest("hex"), metadata.sha256);
  assert.deepEqual(await readFile(new URL("dist/client/data/methods/snow-measurements/density.xlsx", root)), original);
  assert.equal(metadata.selection.event, "PS122-1_10-11");
  assert.deepEqual(metadata.selection.excelRows, [2, 3, 4, 5]);
  assert.equal(metadata.result.depthCm, 12);
  assert.equal(metadata.result.sweMm, 28.5);
  assert.equal(metadata.result.meanDensityKgM3, 237.5);
  assert.deepEqual(metadata.result.layers.map((r) => r.densityKgM3), [174, 218, 288, 270]);
  assert.deepEqual(metadata.result.layers.map((r) => r.sweMm), [5.22, 6.54, 8.64, 8.1]);
  for (const name of ["reproduce.py", "plot.py", "example.json"]) {
    assert.deepEqual(await readFile(new URL(`dist/client/data/methods/snow-measurements/${name}`, root)),
      await readFile(new URL(name, base)));
  }
});

test("publishes glacier field balance with traceable point and area calculations", async () => {
  const [html, article, catalogue, observation] = await Promise.all([
    readFile(new URL("dist/client/metody/terenni-mereni-bilance-ledovcu/index.html", root), "utf8"),
    readFile(new URL("app/components/GlacierBalanceArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/ustup-ledovcu/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "Full article must replace the catalogue fallback");
  assert.match(body, /class="method-flow"/);
  assert.match(body, /gries-balance\.png/);
  assert.match(body, /−3 582 mm vodního ekvivalentu/);
  assert.match(body, /−0,893 m vodního ekvivalentu/);
  assert.match(body, /již zpracovaných bilancí deseti výškových pásem/);
  assert.match(body, /Původní dvě délky odkryté tyče/);
  assert.match(body, /necelý 1 mm/);
  assert.match(body, /původní terénní zápisník ani celé/);
  assert.equal((body.match(/<tbody>[\s\S]*?<\/tbody>/)?.[0].match(/<tr>/g) ?? []).length, 10);
  assert.doesNotMatch(body.replace(/&[^;\s]+;/g, ""), /;/);
  assert.match(observation, /href="\/metody\/terenni-mereni-bilance-ledovcu\/?"/);
  const ids = [...new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((m) => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp(`<article[^>]*id="${id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(card, `Missing glacier source: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/, `Open source has a Drive button: ${id}`);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/, `Missing open access: ${id}`);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : `${href.replace(/\/$/, "")}/index.html`;
    await readFile(new URL(`dist/client${file}`, root));
  }
});

test("preserves GLAMOS archive bytes and weights glacier balance by area", async () => {
  const base = new URL("public/data/methods/glacier-balance/", root);
  const metadata = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  for (const name of ["point.zip", "balance.zip", "reproduce.py", "plot.py", "example.json"]) {
    const data = await readFile(new URL(name, base));
    assert.deepEqual(await readFile(new URL(`dist/client/data/methods/glacier-balance/${name}`, root)), data);
    if (metadata.archives[name]) {
      assert.equal(createHash("sha256").update(data).digest("hex"), metadata.archives[name].sha256);
    }
  }
  const result = metadata.result;
  assert.equal(metadata.selection.glacierId, "B45-04");
  assert.equal(result.point.calculatedMm, -3582);
  assert.equal(result.points.length, 16);
  assert.equal(result.bands.length, 10);
  const area = result.bands.reduce((sum, b) => sum + b.areaKm2, 0);
  const mean = result.bands.reduce((sum, b) => sum + b.areaKm2 * b.annualMm, 0) / area;
  assert.ok(Math.abs(mean - result.meanMm) < 1e-9);
  assert.ok(Math.abs(mean - (-892.8693525895442)) < 1e-9);
  assert.ok(Math.abs(mean - result.publishedMeanMm) < 1);
  assert.ok(Math.abs(mean - result.unweightedBandMeanMm) > 100);
  assert.equal(result.winterMm + result.summerMm, result.publishedMeanMm);
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
