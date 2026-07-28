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
  assert.match(article, /gistemp-stations-robinson\.png/);
  assert.match(article, /noaa-weather-buoy-44008\.jpg/);
  assert.match(article, /gistemp-five-year-anomaly-1880-2025\.mp4/);
  assert.match(article, /global-temperature-four-datasets-nasa\.jpg/);
  assert.match(article, /NASA Scientific Visualization\s+Studio/);
  assert.match(article, /Gavin Schmidt \/ NASA/);
  assert.match(styles, /\.article-figure__media\s*\{/);
});
