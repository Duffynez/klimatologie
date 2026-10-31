import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

function hasArticleLink(html, path) {
  return [...html.matchAll(/href="([^"]+)"/g)].some(([, href]) =>
    href.split("#")[0].replace(/\/$/, "") === path.replace(/\/$/, ""));
}

test("publishes altimetry with real data, open sources and reciprocal ocean and ice links", async () => {
  const slug = "radarova-a-laserova-altimetrie";
  const [html, source, catalogue, ocean, ice] = await Promise.all([
    readFile(new URL(`dist/client/metody/${slug}/index.html`, root), "utf8"),
    readFile(new URL("app/components/AltimetryArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/gmsl/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/nestabilita-prikrovu/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.deepEqual([...body.matchAll(/<h2>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak altimetrie určuje výšku hladiny a ledu", "Nejistoty a ověření",
    "Příklad: jeden záznam hladiny v Tichém oceánu", "Shrnutí",
  ]);
  assert.match(html, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.match(body, /6,7 centimetru nad místním referenčním průměrem/);
  assert.match(body, /historický produkt GDR-D/);
  assert.doesNotMatch(body, /_vinext\/image|katex-error|Potřebné informace/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  for (const [observationSlug, observation] of [["gmsl", ocean], ["nestabilita-prikrovu", ice]]) {
    assert.ok(hasArticleLink(body, `/pozorovani/${observationSlug}`));
    assert.ok(hasArticleLink(observation, `/metody/${slug}`));
  }
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing altimetry source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const m of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(m[1]) ? m[1] : m[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("Jason-3 correction signs reproduce the separately stored archive anomaly", async () => {
  const base = new URL("public/data/methods/altimetry/", root);
  const bytes = await readFile(new URL("jason3-record.json", base));
  const record = JSON.parse(bytes);
  assert.equal(record.source_sha256, "81d8caa581daafc24db725e2862538a2f9149c052fb7feb82c4414e7e31c29ad");
  assert.equal(record.record_index_zero_based, 1500);
  assert.equal(record.time_utc, "2017-11-26T03:11:51.757132");
  const v = Object.fromEntries(Object.entries(record.fields).map(([k, f]) => [k, Number(f.value)]));
  const range = v.range_ku + v.model_dry_tropo_corr + v.rad_wet_tropo_corr + v.iono_corr_alt_ku + v.sea_state_bias_ku;
  const ssh = v.alt - range;
  const anomaly = ssh - v.mean_sea_surface - v.ocean_tide_sol1 - v.solid_earth_tide - v.pole_tide - v.inv_bar_corr - v.hf_fluctuations_corr;
  assert.ok(Math.abs(anomaly - v.ssha) < 0.001, "Compare with CNES ssha stored separately in the original NetCDF");
  assert.equal(ssh.toFixed(4), "7.2261");
  assert.equal(anomaly.toFixed(4), "0.0672");
  assert.equal(v.ssha, 0.067);
  assert.equal(v.range_numval_ku, 19);
  for (const field of Object.values(record.fields)) {
    assert.ok(Math.abs(field.raw * Number(field.scale_factor) + Number(field.add_offset) - Number(field.value)) < 1e-8);
  }
  const readme = await readFile(new URL("README.txt", base), "utf8");
  for (const name of ["jason3-record.json", "reproduce.py", "extract_record.py"]) {
    const data = await readFile(new URL(name, base));
    assert.ok(readme.includes(name + "  " + createHash("sha256").update(data).digest("hex")));
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/altimetry/" + name, root)), data);
  }
});

test("publishes lidar with accessible sources, local illustrations and a reciprocal humidity link", async () => {
  const slug = "lidar-a-laserove-mereni-vzdalenosti";
  const [html, source, catalogue, observation] = await Promise.all([
    readFile(new URL(`dist/client/metody/${slug}/index.html`, root), "utf8"),
    readFile(new URL("app/components/LidarArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/narust-vlhkosti/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.deepEqual([...body.matchAll(/<h2\b[^>]*>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak lidar rozpoznává vrstvy atmosféry a porostu", "Nejistoty a ověření", "Příklad: výška porostu z jednoho pulzu GEDI", "Shrnutí",
  ]);
  assert.match(html, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.match(body, /10,90 metru/);
  assert.match(body, /historické produkty V001/);
  assert.doesNotMatch(body, /_vinext\/image|katex-error|Potřebné informace/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  assert.match(body, /href="\/pozorovani\/narust-vlhkosti\/?(?:#[^"]+)?"/);
  assert.ok(hasArticleLink(observation, `/metody/${slug}`));
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing lidar source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const m of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(m[1]) ? m[1] : m[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("GEDI example preserves shot identity and agrees with the published independent RH field", async () => {
  const base = new URL("public/data/methods/lidar/", root);
  const inputs = JSON.parse(await readFile(new URL("inputs.json", base), "utf8"));
  const result = JSON.parse(await readFile(new URL("result.json", base), "utf8"));
  const meta = JSON.parse(await readFile(new URL("provenance.json", base), "utf8"));
  const rows = (await readFile(new URL("waveform.csv", base), "utf8")).trim().split(/\r?\n/).slice(1);
  assert.equal(inputs.shot_number, "19640521100108408");
  assert.equal(typeof inputs.shot_number, "string", "The shot exceeds safe JavaScript integer precision");
  assert.equal(inputs.version, "001");
  assert.equal(inputs.beam, "BEAM0101");
  assert.equal(rows.length, 878);
  rows.forEach((row, i) => assert.equal(Number(row.split(",")[0]), i));
  // Test against a separately stored NASA L2A result, including the reference ground.
  assert.ok(Math.abs(result.rh98_m - inputs.product_rh98_m) < 0.005);
  assert.ok(Math.abs(result.rh100_m - inputs.product_rh100_m) < 0.005);
  assert.ok(Math.abs(inputs.elevation_bin0_m - inputs.ground_bin * result.vertical_step_m - inputs.product_ground_elevation_m) < 0.001);
  assert.equal(result.rh98_m.toFixed(2), "10.90");
  assert.equal(result.rh100_m.toFixed(2), "12.81");
  for (const [name, expected] of Object.entries(meta.sha256)) {
    const bytes = await readFile(new URL(name, base));
    assert.equal(createHash("sha256").update(bytes).digest("hex"), expected);
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/lidar/" + name, root)), bytes);
  }
});

test("publishes radar with a complete explanation, real echo and reciprocal precipitation link", async () => {
  const slug = "aktivni-radarove-mereni";
  const [html, source, catalogue, observation] = await Promise.all([
    readFile(new URL(`dist/client/metody/${slug}/index.html`, root), "utf8"),
    readFile(new URL("app/components/RadarArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/srazky-a-privalove-srazky/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "Radar must render the full article instead of its catalogue placeholder");
  assert.deepEqual([...body.matchAll(/<h2\b[^>]*>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak radar měří déšť a rozpoznává vrstvy ledu", "Nejistoty a ověření", "Příklad: radarové měření u Houstonu", "Shrnutí",
  ]);
  assert.match(html, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.match(body, /41 dBZ/);
  assert.match(body, /26,2 mm\/h/);
  assert.match(body, /nikoli oficiální srážkový produkt NOAA/);
  assert.doesNotMatch(body, /_vinext\/image|katex-error|Potřebné informace/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  assert.match(body, /href="\/pozorovani\/srazky-a-privalove-srazky\/?(?:#[^"]+)?"/);
  assert.ok(hasArticleLink(observation, `/metody/${slug}`));
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing radar source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const m of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(m[1]) ? m[1] : m[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("radar example keeps observed reflectivity separate from the assumed rainfall conversion", async () => {
  const base = new URL("public/data/radar/", root);
  const meta = JSON.parse(await readFile(new URL("provenance.json", base), "utf8"));
  const result = JSON.parse(await readFile(new URL("result.json", base), "utf8"));
  const lines = (await readFile(new URL("reflectivity.csv", base), "utf8")).trim().split(/\r?\n/).map(line => line.split(","));
  const sample = Object.fromEntries(lines[0].map((key, i) => [key, lines[1][i]]));
  assert.equal(sample.station, "KHGX");
  assert.equal(sample.observed_at_utc, "2017-08-27T12:04:19.890Z");
  assert.equal(Number(sample.reflectivity_dbz), 41);
  assert.equal(Number(sample.range_km), 2.125 + Number(sample.gate_index) * 0.250);
  assert.deepEqual([Number(sample.sweep_index), Number(sample.ray_index), Number(sample.gate_index)], [0, 160, 112]);
  assert.equal(meta.original_sha256, "70995375338dd2287ea39fb81ed836d3680b2935ed66ca2b9087446e5367ae5b");
  assert.equal(result.assumed_zr_a, 250);
  assert.equal(result.assumed_zr_b, 1.2);
  // Reverse the result through Z = a R^b and the logarithmic definition.
  const recoveredDbz = 10 * Math.log10(250 * result.estimated_rain_rate_mm_h ** 1.2);
  assert.ok(Math.abs(recoveredDbz - Number(sample.reflectivity_dbz)) < 1e-10);
  assert.equal(result.estimated_rain_rate_mm_h.toFixed(1), "26.2");
  for (const [name, expected] of Object.entries(meta.sha256)) {
    const bytes = await readFile(new URL(name, base));
    assert.equal(createHash("sha256").update(bytes).digest("hex"), expected);
    assert.deepEqual(await readFile(new URL("dist/client/data/radar/" + name, root)), bytes);
  }
});

test("publishes microwave radiometry with the full signal-to-ice explanation and reciprocal observation link", async () => {
  const slug = "pasivni-mikrovlnna-radiometrie";
  const [html, source, catalogue, observation] = await Promise.all([
    readFile(new URL(`dist/client/metody/${slug}/index.html`, root), "utf8"),
    readFile(new URL("app/components/MicrowaveRadiometryArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/ubytek-arktickeho-ledu/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.deepEqual([...body.matchAll(/<h2\b[^>]*>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak mikrovlny rozliší led a vodu", "Nejistoty a ověření", "Příklad: zimní měření severně od Aljašky", "Shrnutí",
  ]);
  assert.match(html, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.match(body, /matematické jádro metody, nikoli oficiální/);
  assert.doesNotMatch(body, /_vinext\/image|katex-error|Potřebné informace/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  assert.match(body, /href="\/pozorovani\/ubytek-arktickeho-ledu\/?(?:#[^"]+)?"/);
  assert.ok(hasArticleLink(observation, `/metody/${slug}`));
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing microwave source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const m of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(m[1]) ? m[1] : m[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("independently recovers microwave ice fractions with a three-channel scaled mixture", async () => {
  const base = new URL("public/data/methods/microwave-radiometry/", root);
  const meta = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const lines = (await readFile(new URL("sample.csv", base), "utf8")).trim().split(/\r?\n/).map(r => r.split(","));
  const row = Object.fromEntries(lines[0].map((key, i) => [key, Number(lines[1][i])]));
  assert.deepEqual([row.scan, row.footprint, row.latitude_deg, row.longitude_deg], [797, 44, 76.92, -157.84]);
  for (let i = 1; i <= 14; i++) assert.equal(row[`quality_${i}`], 0);
  assert.equal(row.land_percentage_raw, 0);
  assert.deepEqual(meta.tie_points_K, [[185.1, 113.6, 204.8], [251.4, 235.3, 242], [222.5, 198.3, 185.1]]);
  const [water, first, old] = meta.tie_points_K;
  const observed = [row.TB_19V_K, row.TB_19H_K, row.TB_37V_K];
  // Solve M_j = scale * observed_j directly, rather than using the two ratio equations.
  const matrix = observed.map((v, j) => [first[j] - water[j], old[j] - water[j], -v]);
  const rhs = water.map(v => -v);
  const det = a => a[0][0] * (a[1][1] * a[2][2] - a[1][2] * a[2][1])
    - a[0][1] * (a[1][0] * a[2][2] - a[1][2] * a[2][0])
    + a[0][2] * (a[1][0] * a[2][1] - a[1][1] * a[2][0]);
  const solution = [0, 1, 2].map(k => det(matrix.map((r, i) => r.map((v, j) => j === k ? rhs[i] : v))) / det(matrix));
  assert.ok(Math.abs(solution[0] - meta.results.f) < 1e-12);
  assert.ok(Math.abs(solution[1] - meta.results.m) < 1e-12);
  assert.equal(((solution[0] + solution[1]) * 100).toFixed(2), "98.27");
  for (const [name, expected] of Object.entries(meta.sha256)) {
    const bytes = await readFile(new URL(name, base));
    assert.equal(createHash("sha256").update(bytes).digest("hex"), expected);
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/microwave-radiometry/" + name, root)), bytes);
  }
});

test("publishes thermal infrared radiometry with its source trail and temperature observation link", async () => {
  const slug = "pasivni-infracervena-radiometrie";
  const [html, source, catalogue, observation] = await Promise.all([
    readFile(new URL(`dist/client/metody/${slug}/index.html`, root), "utf8"),
    readFile(new URL("app/components/InfraredRadiometryArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/gmst/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.deepEqual([...body.matchAll(/<h2\b[^>]*>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak ze záření zjistíme teplotu", "Nejistoty a ověření",
    "Příklad: teplota jednoho místa u Aletschského ledovce", "Shrnutí",
  ]);
  assert.match(html, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.doesNotMatch(body, /_vinext\/image|katex-error|Potřebné informace/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  assert.match(body, /href="\/pozorovani\/gmst\/?(?:#[^"]+)?"/);
  assert.ok(hasArticleLink(observation, `/metody/${slug}`));
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const m of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(m[1]) ? m[1] : m[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("recomputes infrared surface temperature from separate atmospheric and emissivity inputs", async () => {
  const base = new URL("public/data/methods/infrared-radiometry/", root);
  const meta = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const lines = (await readFile(new URL("sample.csv", base), "utf8")).trim().split(/\r?\n/).map(line => line.split(","));
  assert.equal(lines.length, 2);
  const row = Object.fromEntries(lines[0].map((key, i) => [key, lines[1][i]]));
  assert.deepEqual([Number(row.source_row), Number(row.source_col)], [2717, 5609]);
  assert.equal(Number(row.qa_pixel) & 31, 0);
  assert.equal(Number(row.qa_radsat), 0);
  const L = Number(row.trad) / 1000, U = Number(row.urad) / 1000, D = Number(row.drad) / 1000;
  const tau = Number(row.atran) / 10000, emissivity = Number(row.emis) / 10000;
  const B = ((L - U) / tau - (1 - emissivity) * D) / emissivity;
  const temperature = meta.K2 / Math.log1p(meta.K1 / B);
  const official = Number(row.lwir11) * 0.00341802 + 149;
  assert.ok(Math.abs(B - 10.808081219658575) < 1e-10);
  assert.ok(Math.abs(temperature - 308.21159872305276) < 1e-9);
  assert.ok(Math.abs(official - meta.results.product_surface_temperature_K) < 1e-9);
  assert.ok(Math.abs(official - temperature) < 0.13, "Approximation agrees with separately supplied USGS output");
  const brightness = meta.K2 / Math.log1p(meta.K1 / L);
  assert.ok(temperature - brightness > 7, "At-sensor brightness temperature is not surface temperature");
  assert.equal(Number(row.qa) / 100, 2.52);
  for (const [name, expected] of Object.entries(meta.sha256)) {
    const bytes = await readFile(new URL(name, base));
    assert.equal(createHash("sha256").update(bytes).digest("hex"), expected);
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/infrared-radiometry/" + name, root)), bytes);
  }
});

test("publishes radiative fluxes with a complete example and reciprocal ocean connection", async () => {
  const slug = "mereni-radiacnich-toku";
  const [html, source, catalogue, ocean] = await Promise.all([
    readFile(new URL(`dist/client/metody/${slug}/index.html`, root), "utf8"),
    readFile(new URL("app/components/RadiativeFluxArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/tepelny-obsah-oceanu/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.deepEqual([...body.matchAll(/<h2>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak měříme přenos energie zářením", "Nejistoty a ověření",
    "Příklad: jedna hodina na stanici Table Mountain", "Shrnutí",
  ]);
  assert.match(html, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.doesNotMatch(body, /_vinext\/image|katex-error|Potřebné informace|RTV/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  assert.match(body, /href="\/pozorovani\/tepelny-obsah-oceanu\/?(?:#[^"]+)?"/);
  assert.ok(hasArticleLink(ocean, `/metody/${slug}`));
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const m of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(m[1]) ? m[1] : m[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("recomputes SURFRAD radiation from quality checked end-of-minute records", async () => {
  const base = new URL("public/data/methods/radiative-fluxes/", root);
  const metadata = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const raw = await readFile(new URL("tbl23172.dat", base), "utf8");
  const all = raw.trim().split(/\r?\n/).slice(2).map(line => line.trim().split(/\s+/).map(Number));
  assert.equal(all.length, 1440);
  const rows = all.filter(r => r[4] * 60 + r[5] > 1080 && r[4] * 60 + r[5] <= 1140);
  assert.deepEqual(rows.map(r => r[4] * 60 + r[5]), Array.from({length: 60}, (_, i) => 1081 + i));
  let sum = 0, directPyranometerSum = 0;
  for (const r of rows) {
    assert.equal(r.length, 48);
    assert.deepEqual(r.slice(0, 4), [2023, 172, 6, 21]);
    for (const i of [10, 12, 14, 16, 22]) {
      assert.equal(r[i + 1], 0, "Only measurements that passed NOAA QC");
      assert.ok(r[i] >= 0);
    }
    assert.ok(r[7] >= 0 && r[7] < 90);
    const net = r[12] * Math.cos(r[7] * Math.PI / 180) + r[14] - r[10] + r[16] - r[22];
    assert.ok(Math.abs(net - r[36]) < 0.16, "Compare against NOAA's independently supplied net column");
    sum += net;
    directPyranometerSum += r[8] - r[10] + r[16] - r[22];
  }
  assert.ok(Math.abs(sum / 60 - 658.0361937036682) < 1e-8);
  assert.ok(Math.abs(sum * 60 / 1e6 - metadata.results.net_energy_MJ_m2) < 1e-10);
  assert.ok(Math.abs(directPyranometerSum - sum) / 60 > 10, "The example must use NOAA's preferred component sum");
  const csv = (await readFile(new URL("hour.csv", base), "utf8")).trim().split(/\r?\n/);
  assert.equal(csv.length, 61);
  assert.match(csv[1], /^2023-06-21T18:01:00Z,/);
  assert.match(csv.at(-1), /^2023-06-21T19:00:00Z,/);
  for (const [name, expected] of Object.entries(metadata.sha256)) {
    const bytes = await readFile(new URL(name, base));
    assert.equal(createHash("sha256").update(bytes).digest("hex"), expected);
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/radiative-fluxes/" + name, root)), bytes);
  }
});

test("publishes photogrammetry with its actual example, accessible sources and a glacier backlink", async () => {
  const path = "fotogrammetrie-a-porovnavani-vyskovych-modelu";
  const [html, source, catalogue, observation] = await Promise.all([
    readFile(new URL(`dist/client/metody/${path}/index.html`, root), "utf8"),
    readFile(new URL("app/components/PhotogrammetryArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/ustup-ledovcu/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.deepEqual([...body.matchAll(/<h2>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak ze snímků určíme výšku povrchu", "Nejistoty a ověření",
    "Příklad: změna části ledovce Scott Turnerbreen", "Shrnutí",
  ]);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.doesNotMatch(body, /_vinext\/image|katex-error|Potřebné informace/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  assert.match(body, /href="\/pozorovani\/ustup-ledovcu"/);
  assert.ok(observation.includes(`href="/metody/${path}"`));
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const m of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(m[1]) ? m[1] : m[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("recomputes glacier patch volume from aligned heights and preserves source rasters", async () => {
  const base = new URL("public/data/methods/photogrammetry/", root);
  const meta = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const csv = (await readFile(new URL("patch.csv", base), "utf8")).replace(/\r\n/g, "\n");
  assert.equal(createHash("sha256").update(csv).digest("hex"), meta.results.csv_sha256_lf);
  const lines = csv.trim().split("\n").map(line => line.split(","));
  const rows = lines.slice(1).map(values => Object.fromEntries(lines[0].map((key, i) => [key, Number(values[i])])));
  assert.equal(rows.length, 400);
  assert.equal(new Set(rows.map(r => `${r.row},${r.col}`)).size, 400);
  let volume = 0, rawVolume = 0, area = 0;
  for (const row of rows) {
    assert.ok(row.row >= 208 && row.row < 228 && row.col >= 917 && row.col < 937);
    assert.equal(row.easting_m, 502810 + 20 * (row.col + 0.5));
    assert.equal(row.northing_m, 8674030 - 20 * (row.row + 0.5));
    assert.equal(row.area_m2, 20 * 20);
    const difference = row.z2009_m - row.z1990_aligned_m;
    assert.ok(Math.abs(difference - row.dh_m) < 2e-9);
    volume += difference * row.area_m2;
    rawVolume += (row.z2009_m - row.z1990_raw_m) * row.area_m2;
    area += row.area_m2;
  }
  assert.equal(area, 160000);
  assert.ok(Math.abs(volume + 2770899.8897466287) < 0.001);
  assert.ok(Math.abs(volume - meta.results.volume_change_m3) < 0.001);
  assert.equal((volume / area).toFixed(2), "-17.32");
  assert.ok(Math.abs(rawVolume - volume) > 100000, "Omitting coregistration must change this example materially");
  assert.equal(meta.results.fit_count, 12000);
  assert.equal(meta.results.after.count, 160866);
  assert.ok(Math.abs(meta.results.after.median_m) < 0.1);
  assert.ok(meta.results.after.nmad_m < meta.results.before.nmad_m);
  for (const [name, expectedHash] of Object.entries(meta.sha256)) {
    const data = await readFile(new URL(name, base));
    assert.equal(createHash("sha256").update(data).digest("hex"), expectedHash);
  }
  for (const name of ["DEM_1990.tif", "DEM_2009_ref.tif", "excluded-glaciers.tif", "patch.csv", "example.json", "process.py", "reproduce.py", "plot.py", "build-mask.py", "source-README.md", "scott-outline-1990.geojson"]) {
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/photogrammetry/" + name, root)), await readFile(new URL(name, base)));
  }
});

test("publishes optical imaging with open evidence, a reproducible scene and reciprocal observation links", async () => {
  const [html, source, catalogue] = await Promise.all([
    readFile(new URL("dist/client/metody/opticke-a-multispektralni-snimkovani/index.html", root), "utf8"),
    readFile(new URL("app/components/OpticalImagingArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.match(html, /<p class="page-lead__meta">28\. října 2026<\/p>/);
  assert.deepEqual([...body.matchAll(/<h2>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak z odraženého světla poznáváme povrch", "Nejistoty a ověření",
    "Příklad: tři povrchy u Aletschského ledovce", "Shrnutí",
  ]);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.doesNotMatch(body, /_vinext\/image|katex-error/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  for (const slug of ["ustup-ledovcu", "snehova-pokryvka-a-permafrost", "fenologicke-posuny"]) {
    assert.ok(body.includes(`href="/pozorovani/${slug}"`));
    const observation = await readFile(new URL(`dist/client/pozorovani/${slug}/index.html`, root), "utf8");
    assert.match(observation, /href="\/metody\/opticke-a-multispektralni-snimkovani"/);
  }
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing optical source " + id);
    assert.doesNotMatch(card, /drive\.google\.com/);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : href.replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("recalculates Aletsch indices from stored integers including the required additive offset", async () => {
  const base = new URL("public/data/methods/optical-imaging/", root);
  const meta = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const csv = (await readFile(new URL("samples.csv", base), "utf8")).replace(/\r\n/g, "\n");
  assert.equal(createHash("sha256").update(csv).digest("hex"), meta.csv_sha256_lf);
  const lines = csv.trim().split("\n").map(line => line.split(","));
  const rows = lines.slice(1).map(values => Object.fromEntries(lines[0].map((key, i) => [key, i ? Number(values[i]) : values[i]])));
  assert.equal(meta.source_product_id, "LC08_L2SP_195028_20230820_20230826_02_T1");
  assert.equal(meta.source_processing.LaSRC, "1.6.0");
  assert.deepEqual(rows.map(r => [r.label, r.source_row, r.source_col]), [["A", 2277, 5429], ["B", 2562, 5439], ["C", 2717, 5609]]);
  const actual = rows.map(row => {
    assert.equal(row.source_row, row.crop_row + meta.window.window_row);
    assert.equal(row.source_col, row.crop_col + meta.window.window_col);
    assert.equal(row.qa_pixel & 31, 0);
    assert.equal(row.qa_radsat, 0);
    assert.notEqual((row.qa_aerosol >> 6) & 3, 3);
    // Independent constants from USGS Table 6-1 and the saved source metadata.
    const rho = key => row[key] * 0.0000275 - 0.2;
    const ndsi = (rho("green") - rho("swir16")) / (rho("green") + rho("swir16"));
    const ndvi = (rho("nir08") - rho("red")) / (rho("nir08") + rho("red"));
    const expected = meta.results.find(r => r.label === row.label);
    assert.ok(Math.abs(ndsi - expected.ndsi) < 1e-12);
    assert.ok(Math.abs(ndvi - expected.ndvi) < 1e-12);
    return [ndsi.toFixed(3), ndvi.toFixed(3)];
  });
  assert.deepEqual(actual, [["0.976", "-0.089"], ["-0.309", "0.105"], ["-0.585", "0.681"]]);
  const rawIndex = (rows[0].green - rows[0].swir16) / (rows[0].green + rows[0].swir16);
  assert.ok(Math.abs(rawIndex - meta.results[0].ndsi) > 0.4, "Using stored DN directly must not reproduce the reflectance index");
  const tif = await readFile(new URL("aletsch-20230820.tif", base));
  assert.equal(createHash("sha256").update(tif).digest("hex"), meta.tif_sha256);
  for (const file of ["samples.csv", "example.json", "aletsch-20230820.tif", "source-MTL.txt", "reproduce.py", "plot.py", "download.py"]) {
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/optical-imaging/" + file, root)), await readFile(new URL(file, base)));
  }
});

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
  assert.match(consequences, /fyzikální změny, vystavení lidí a přírody jejím účinkům a zranitelnosti/);
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
  assert.match(evidencePage, /meta="26\. října 2026"/);
  assert.match(article, /Globální teplota u povrchu vyjadřuje, jak se průměrná teplota/);
  assert.match(article, /Historie globálního výpočtu/);
  assert.match(article, /Jak vzniká globální výpočet/);
  assert.match(article, /<h2 id="pozorovani">Pozorování<\/h2>/);
  assert.doesNotMatch(article, /Potřebné informace|article-glossary/);
  assert.match(article, /NOAAGlobalTemp v6\.1\.0/);
  assert.match(article, /HadCRUT\.5\.1\.0\.0/);
  assert.match(article, /NASA GISTEMP v4/);
  assert.match(article, /Berkeley Earth Land\/Ocean/);
  assert.match(article, /1,43 ± 0,13 °C/);
  assert.match(article, /1,09 °C/);
  assert.doesNotMatch(article, /časová řada/);
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
  assert.match(evidencePage, /meta="26\. října 2026"/);
  assert.match(article, /Teplotou stratosféry označujeme teplotu vzduchu mezi tropopauzou a stratopauzou/);
  assert.doesNotMatch(article, /Potřebné informace|article-glossary/);
  assert.match(article, /váhová funkce/);
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
  assert.match(evidencePage, /meta="26\. října 2026"/);
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
  assert.equal(new Set(oceanHeatSourceIds).size, 29);
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
  assert.match(evidencePage, /title="Oxid uhličitý v atmosféře"\s+meta="31\. října 2026"/);
  assert.match(article, /href="\/metody\/plynova-chromatografie\/?(?:#[^"]+)?"/);
  assert.match(article, /Atmosférický oxid uhličitý popisujeme podílem molekul CO₂ v suchém vzduchu/);
  assert.doesNotMatch(article, /Potřebné informace|article-glossary/);
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
  assert.match(evidencePage, /title="Vlhkost atmosféry"\s+meta="31\. října 2026"/);
  assert.match(article, /Vlhkost atmosféry popisuje množství vodní páry ve vzduchu/);
  assert.doesNotMatch(article, /Potřebné informace|article-glossary/);
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
  assert.match(sourceCatalogueText, /agupubs\.onlinelibrary\.wiley\.com\/doi\/full\/10\.1002\/2018EA000363/);
  assert.match(article, /Všechny odborné práce, metodické dokumenty a datové soubory použité v tomto článku lze otevřít bez/);
  assert.match(article, /předběžné verze za rok[\s\S]*2025/);
  assert.match(article, /Stith et al\., 2018/);
  assert.doesNotMatch(article, /Fleming et al\., 2018|DOI_10_1175_jcli3594_1|WEB_repository_oceanbestpractice_WMO/);
  assert.doesNotMatch(sourceCatalogueText, /DOI_10_1175_jcli3594_1/);
  const humiditySourceIds = [
    ...article.matchAll(/<SourceLink id="([^"]+)"/g),
  ].map((match) => match[1]);
  assert.equal(new Set(humiditySourceIds).size, 32);
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
  assert.match(evidencePage, /meta="26\. října 2026"/);
  assert.match(article, /Srážkový úhrn udává, jak vysoká vrstva vody dopadla/);
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
  assert.match(evidencePage, /meta="26\. října 2026"/);
  assert.match(article, /Globální střední hladina moře vyjadřuje průměrnou změnu výšky světového oceánu/);
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
  assert.match(evidencePage, /meta="26\. října 2026"/);
  assert.match(article, /Acidifikace oceánu je dlouhodobý posun chemického stavu mořské vody/);
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
  assert.match(evidencePage, /meta="26\. října 2026"/);
  assert.match(article, /Arktický mořský led je zmrzlá mořská voda/);
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
  assert.match(evidencePage, /meta="26\. října 2026"/);
  assert.match(article, /Horský ledovec je dlouhodobě přetrvávající masa ledu/);
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
  assert.match(articleHtml, /<p class="page-lead__meta">26\. října 2026<\/p>/);
});

test("publishes a sourced ice-sheet mass article with three measurement methods", async () => {
  const [article, evidencePage, evidence] = await Promise.all([
    readFile(new URL("app/components/IceSheetsArticle.tsx", root), "utf8"),
    readFile(new URL("app/pozorovani/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/data/evidence.ts", root), "utf8"),
  ]);

  assert.match(evidencePage, /IceSheetsArticle/);
  assert.match(evidencePage, /title="Změna hmotnosti ledových příkrovů"/);
  assert.match(evidencePage, /meta="26\. října 2026"/);
  assert.match(article, /Změna hmotnosti ledového příkrovu vyjadřuje, o kolik se mezi dvěma určenými okamžiky změnila/);
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
  assert.match(articleHtml, /<p class="page-lead__meta">28\. října 2026<\/p>/);
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
  assert.match(evidencePage, /meta="30\. října 2026"/);
  assert.match(article, /Sníh na souši pozorujeme jako plochu, dobu trvání, výšku a množství vody/);
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
  assert.match(articleHtml, /<p class="page-lead__meta">30\. října 2026<\/p>/);
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
  assert.match(evidencePage, /meta="26\. října 2026"/);
  assert.match(article, /Fenologické pozorování/);
  assert.match(article, /je datum nebo sled opakovaných záznamů/);
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
  assert.match(articleHtml, /<p class="page-lead__meta">26\. října 2026<\/p>/);
  assert.match(articleHtml, /href="\/metody\/standardizovane-fenologicke-pozorovani\/?"/);
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
  assert.match(evidencePage, /meta="26\. října 2026"/);
  assert.match(article, /Vlna veder je souvislé období několika dnů/);
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
  assert.match(articleHtml, /<p class="page-lead__meta">31\. října 2026<\/p>/);
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

test("exports typeset equations and accessible fractions across every method article", async () => {
  const methods = [
    ["ResistanceThermometryArticle", "odporova-termometrie-a-termistory"],
    ["HygrometryArticle", "hygrometrie"],
    ["RadiosoundingArticle", "radiosondaz"],
    ["PressureHeightArticle", "mereni-tlaku-a-hydrostaticke-vysky"],
    ["ConductometryArticle", "konduktometrie"],
    ["RainGaugeArticle", "srazkomery-a-disdrometry"],
    ["TideGaugeArticle", "pobrezni-mereni-hladiny-a-vyskova-reference"],
    ["SnowMeasurementArticle", "mereni-vysky-hustoty-a-vodni-hodnoty-snehu"],
    ["GlacierBalanceArticle", "terenni-mereni-bilance-ledovcu"],
    ["ThawDepthArticle", "mereni-hloubky-sezonniho-rozmrzani"],
    ["PhenologyMonitoringArticle", "standardizovane-fenologicke-pozorovani"],
    ["GasChromatographyArticle", "plynova-chromatografie"],
    ["AbsorptionSpectroscopyArticle", "absorpcni-spektroskopie"],
    ["IsotopeMassSpectrometryArticle", "hmotnostni-a-izotopova-spektrometrie"],
  ];
  for (const [component, slug] of methods) {
    const [source, html] = await Promise.all([
      readFile(new URL(`app/components/${component}.tsx`, root), "utf8"),
      readFile(new URL(`dist/client/metody/${slug}/index.html`, root), "utf8"),
    ]);
    const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
    assert.ok(body, slug);
    assert.equal((body.match(/class="article-equation"/g) ?? []).length,
      (source.match(/<Equation\b/g) ?? []).length, `${slug}: every display equation is exported`);
    assert.equal((body.match(/class="article-math"/g) ?? []).length,
      (source.match(/<InlineMath\b/g) ?? []).length, `${slug}: inline math is exported`);
    assert.doesNotMatch(body, /katex-error|article-formula|method-equation/);
    if (source.includes("\\frac")) {
      assert.match(body, /<mfrac>/, `${slug}: fractions have a numerator and denominator`);
    }
    const mathCount = (body.match(/<math\b/g) ?? []).length;
    assert.ok(mathCount > 0, slug);
    assert.equal((body.match(/class="katex-html" aria-hidden="true"/g) ?? []).length, mathCount,
      `${slug}: visual math has a semantic MathML counterpart without duplicate speech`);
    assert.equal((body.match(/<annotation encoding="application\/x-tex">/g) ?? []).length, mathCount,
      `${slug}: the original equation remains available in the static export`);
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
  const displayedDate = html.match(/<p class="page-lead__meta">([^<]*)<\/p>/)?.[1];
  assert.equal(displayedDate, "31. října 2026", "Show only the last edit date, without a label");
  assert.doesNotMatch(article, /<Citation\b/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/, "Czech prose must not contain semicolons");
  assert.match(body, /29,8627 °C/);
  assert.match(body, /<mn>5,4083<\/mn>/);
  assert.equal((body.match(/<tr>/g) ?? []).length, 13, "Header plus all twelve original values");
  assert.equal((body.match(/<details/g) ?? []).length, 2);
  const uncertaintyDetails = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertaintyDetails);
  const uncertaintyWords = uncertaintyDetails
    .replace(/<math\b[\s\S]*?<\/math>/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&[^;\s]+;/g, " ")
    .trim().split(/\s+/).length;
  assert.ok(uncertaintyWords <= 600, `Uncertainty supplement exceeds 600 words: ${uncertaintyWords}`);
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
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/, "Czech prose must not contain semicolons");
  assert.match(observation, /href="\/metody\/hygrometrie\/?(?:#[^"]+)?"/);
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
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/, "Czech prose must not contain semicolons");
  for (const page of related) assert.match(page, /href="\/metody\/radiosondaz\/?(?:#[^"]+)?"/);
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
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/, "Czech prose must not contain semicolons");
  for (const page of related) assert.match(page, /href="\/metody\/mereni-tlaku-a-hydrostaticke-vysky\/?(?:#[^"]+)?"/);
  const ids = [...new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((m) => m[1]))];
  assert.equal(ids.length, 13, "Eleven method sources plus the photograph and NOAA reuse policy");
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
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/, "Czech prose must not contain semicolons");
  for (const page of related) assert.match(page, /href="\/metody\/konduktometrie\/?(?:#[^"]+)?"/);
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
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/, "No semicolons in Czech prose");
  assert.match(observation, /href="\/metody\/srazkomery-a-disdrometry\/?(?:#[^"]+)?"/);
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
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  assert.match(observation, /href="\/metody\/pobrezni-mereni-hladiny-a-vyskova-reference\/?(?:#[^"]+)?"/);
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
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
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
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
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

test("publishes thaw depth with grid sampling, surface reference and open evidence", async () => {
  const [html, article, catalogue, observation] = await Promise.all([
    readFile(new URL("dist/client/metody/mereni-hloubky-sezonniho-rozmrzani/index.html", root), "utf8"),
    readFile(new URL("app/components/ThawDepthArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/snehova-pokryvka-a-permafrost/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "Full article must replace the catalogue fallback");
  const text = body.replace(/<!--[\s\S]*?-->/g, "");
  assert.match(text, /class="method-flow"/);
  assert.match(text, /barrow-grid\.png/);
  assert.match(text, /35,60 cm/);
  assert.match(text, /119 platných hodnot/);
  assert.match(text, /Samostatné odečty obou vpichů v exportu nejsou/);
  assert.match(text, /průměr měřených bodů sítě/);
  assert.match(text, /Teplotní metoda vychází z jiného fyzikálního signálu/);
  assert.match(text, /Povrch klesl o 7 cm/);
  assert.match(text, /neznáme velikost společné chyby/i);
  assert.doesNotMatch(text.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  assert.match(observation, /href="\/metody\/mereni-hloubky-sezonniho-rozmrzani\/?"/);
  const ids = [...new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((m) => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp(`<article[^>]*id="${id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(card, `Missing thaw depth source: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/, `Open source has a Drive button: ${id}`);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/, `Missing open access: ${id}`);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : `${href.replace(/\/$/, "")}/index.html`;
    await readFile(new URL(`dist/client${file}`, root));
  }
});

test("preserves the GTN-P snapshot and excludes water-related missing readings", async () => {
  const base = new URL("public/data/methods/thaw-depth/", root);
  const metadata = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  for (const name of ["barrow-gtnp.zip", "barrow-1996.csv", "reproduce.py", "plot.py", "example.json"]) {
    const data = await readFile(new URL(name, base));
    assert.deepEqual(await readFile(new URL(`dist/client/data/methods/thaw-depth/${name}`, root)), data);
    if (name === metadata.archive.filename) {
      assert.equal(createHash("sha256").update(data).digest("hex"), metadata.archive.sha256);
    }
  }
  const csv = await readFile(new URL("barrow-1996.csv", base), "utf8");
  const rows = csv.trim().split(/\r?\n/).slice(1).map((line) => line.split(","));
  assert.equal(rows.length, 121);
  assert.ok(rows.every((r) => r[1] === "1996-08-18" && r[6] === "14"));
  const valid = rows.filter((r) => r[4] !== "").map((r) => Number(r[4]));
  const missing = rows.filter((r) => r[4] === "");
  assert.equal(valid.length, 119);
  assert.equal(missing.length, 2);
  assert.ok(missing.every((r) => r[5] === "no data entry - no measurement because of water"));
  assert.equal(valid.reduce((sum, d) => sum + d, 0), 4236.5);
  assert.equal(4236.5 / valid.length, metadata.result.meanCm);
  assert.ok(Math.abs(metadata.result.meanCm - 35.60084033613445) < 1e-10);
  assert.equal(Math.min(...valid), 19);
  assert.equal(Math.max(...valid), 68);
  assert.equal(metadata.license, "CC BY 4.0");
});

test("publishes the full phenology method with traceable observations and bounded uncertainty", async () => {
  const [html, article, catalogue] = await Promise.all([
    readFile(new URL("dist/client/metody/standardizovane-fenologicke-pozorovani/index.html", root), "utf8"),
    readFile(new URL("app/components/PhenologyMonitoringArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
  ]);
  const body = html.match(/<div class="article-prose">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "The complete method must replace the catalogue placeholder");
  assert.equal((body.match(/<h2>/g) ?? []).length, 4);
  assert.equal((body.match(/<details\b/g) ?? []).length, 2);
  assert.match(html, /<p class="page-lead__meta">28\. října 2026<\/p>/);
  assert.match(body, /class="method-flow"/);
  assert.match(body, /nps-field-observations\.jpg/);
  assert.match(body, /leaf-onset\.png/);
  assert.match(body, /13\. května 2016/);
  assert.match(body, /<td>352210<\/td><td>11\. 5\.<\/td><td>13\. 5\.<\/td><td>2<\/td>/);
  assert.match(body, /href="\/pozorovani\/fenologicke-posuny\/?"/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const details = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  const words = details.replace(/<[^>]*>/g, " ").replace(/&[^;\s]+;/g, " ").trim().split(/\s+/);
  assert.ok(words.length <= 600, `Uncertainty supplement has ${words.length} words`);
  const ids = [...new Set([...article.matchAll(/<SourceLink id="([^"]+)"/g)].map((m) => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp(`<article[^>]*id="${id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(card, `Missing phenology source: ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : `${href.replace(/\/$/, "")}/index.html`;
    await readFile(new URL(`dist/client${file}`, root));
  }
});

test("preserves the phenology snapshot and brackets onset with actual negative and positive visits", async () => {
  const base = new URL("public/data/methods/phenology-monitoring/", root);
  const metadata = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const snapshot = await readFile(new URL("harvard-leaves.json", base));
  assert.equal(createHash("sha256").update(snapshot).digest("hex"), metadata.snapshot.sha256);
  const rows = JSON.parse(snapshot);
  assert.equal(rows.length, 930);
  assert.ok(rows.every((r) => r.site_id === 57027 && r.species_id === 3 && r.phenophase_id === 483 && r.dataset_id === 16));
  const expected = [
    [352210, "2016-05-11", "2016-05-13", 132, 134, 2],
    [352216, "2016-04-27", "2016-04-29", 118, 120, 2],
    [352219, "2016-04-22", "2016-04-25", 113, 116, 3],
  ];
  for (const [id, noDate, yesDate, noDay, yesDay, width] of expected) {
    const visits = rows.filter((r) => r.individual_id === id).sort((a, b) => a.observation_date.localeCompare(b.observation_date));
    assert.equal(visits.length, 31);
    assert.ok(visits.filter((r) => r.observation_date < yesDate).every((r) => r.phenophase_status === 0));
    assert.equal(visits.find((r) => r.observation_date === noDate).day_of_year, noDay);
    assert.equal(visits.find((r) => r.observation_date === yesDate).phenophase_status, 1);
    assert.equal(visits.find((r) => r.observation_date === yesDate).day_of_year, yesDay);
    assert.equal((Date.parse(yesDate) - Date.parse(noDate)) / 86400000, width);
    const result = metadata.result.plants.find((r) => r.individualId === id);
    assert.deepEqual([result.lastNo, result.firstYes, result.intervalDays], [noDate, yesDate, width]);
  }
  const csv = await readFile(new URL("selected-visits.csv", base), "utf8");
  assert.equal(csv.trim().split(/\r?\n/).length, 94);
  assert.equal(metadata.license, "CC BY 4.0");
  assert.match(metadata.acknowledgement, /National Ecological Observatory Network/);
  for (const file of ["harvard-leaves.json", "selected-visits.csv", "example.json", "reproduce.py", "plot.py", "leaf-onset.png"]) {
    assert.deepEqual(await readFile(new URL(`dist/client/data/methods/phenology-monitoring/${file}`, root)), await readFile(new URL(file, base)));
  }
});

test("publishes the complete chromatography method with accessible sources and reproducible inputs", async () => {
  const [html, source, catalogue] = await Promise.all([
    readFile(new URL("dist/client/metody/plynova-chromatografie/index.html", root), "utf8"),
    readFile(new URL("app/components/GasChromatographyArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
  ]);
  const body = html.match(/<div class="article-prose">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "A full article must replace the catalogue placeholder");
  assert.equal((body.match(/<h2\b[^>]*>/g) ?? []).length, 4);
  assert.equal((body.match(/<details\b/g) ?? []).length, 2);
  assert.match(html, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  assert.match(body, /noaa-analysis-system\.jpg/);
  assert.match(body, /class="method-flow__track"/);
  assert.match(body, /repeated-analyses\.png/);
  assert.match(body, /<strong>1 851,79 ppb<\/strong>/);
  assert.match(body, /koeficienty tehdejší křivky tabulka neobsahuje/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map((m) => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp(`<article[^>]*id="${id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(card, `Missing chromatography source ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : `${href.replace(/\/$/, "")}/index.html`;
    await readFile(new URL(`dist/client${file}`, root));
  }
});

test("recomputes the NOAA chromatographic response ratios and mean from all twenty analyses", async () => {
  const base = new URL("public/data/methods/gas-chromatography/", root);
  const meta = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const csv = (await readFile(new URL("noaa-table-a1.csv", base), "utf8")).replace(/\r\n/g, "\n");
  assert.equal(createHash("sha256").update(csv).digest("hex"), meta.table.sha256_lf);
  const rows = csv.trim().split("\n").slice(1).map((line) => line.split(","));
  assert.equal(rows.length, 41);
  const values = [];
  for (let i = 0; i < rows.length; i++) {
    assert.equal(rows[i][0], "2015-07-23");
    assert.equal(rows[i][2], i % 2 ? "S" : "R");
    if (i % 2) {
      const ratio = Number(rows[i][4]) / ((Number(rows[i - 1][4]) + Number(rows[i + 1][4])) / 2);
      assert.ok(Math.abs(ratio - Number(rows[i][5])) <= 0.5e-9, `NOAA ratio at ${rows[i][1]}`);
      values.push(Number(rows[i][6]));
    }
  }
  assert.equal(values.length, 20);
  assert.equal(rows[1][4], "8214265");
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const sd = Math.sqrt(values.reduce((sum, x) => sum + (x - mean) ** 2, 0) / (values.length - 1));
  assert.ok(Math.abs(mean - 1851.7915) < 1e-9);
  assert.equal(Number(sd.toFixed(2)), 0.74);
  assert.equal(meta.result.mean_ppb, 1851.7915);
  assert.equal(meta.license, "Public Domain");
  assert.match(meta.scope, /conversion is not reproduced/);
  for (const file of ["noaa-table-a1.csv", "example.json", "reproduce.py", "plot.py", "repeated-analyses.png"]) {
    assert.deepEqual(await readFile(new URL(`dist/client/data/methods/gas-chromatography/${file}`, root)), await readFile(new URL(file, base)));
  }
});

test("publishes absorption spectroscopy with a boxed conclusion and complete source links", async () => {
  const [html, source, catalogue, observation] = await Promise.all([
    readFile(new URL("dist/client/metody/absorpcni-spektroskopie/index.html", root), "utf8"),
    readFile(new URL("app/components/AbsorptionSpectroscopyArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/atmosfericka-koncentrace-co2/index.html", root), "utf8"),
  ]);
  const body = html.match(/<div class="article-prose">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "The article must replace the catalogue placeholder");
  assert.equal((body.match(/<h2>/g) ?? []).length, 4);
  assert.equal((body.match(/<details\b/g) ?? []).length, 2);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.match(body, /Příklad výpočtu z osmi měření/);
  assert.match(html, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  assert.match(body, /noaa-aircraft-crds\.jpg/);
  assert.match(body, /crds-principle\.svg/);
  assert.match(body, /repeat-measurements\.png/);
  assert.match(body, /386,727 ppm podoby ¹⁶O¹²C¹⁶O/);
  assert.match(body, /Reference následující po osmém vzorku/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  assert.match(observation, /href="\/metody\/absorpcni-spektroskopie\/?(?:#[^"]+)?"/);
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map((m) => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp(`<article[^>]*id="${id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(card, `Missing spectroscopy source ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    if (id.startsWith("DOI_") || id === "1862_Tyndall") assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : `${href.replace(/\/$/, "")}/index.html`;
    await readFile(new URL(`dist/client${file}`, root));
  }
});

test("reproduces the optical response calibration without inventing the missing reference", async () => {
  const base = new URL("public/data/methods/absorption-spectroscopy/", root);
  const meta = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const csv = (await readFile(new URL("noaa-table-a1.csv", base), "utf8")).replace(/\r\n/g, "\n");
  assert.equal(createHash("sha256").update(csv).digest("hex"), meta.table.sha256_lf);
  const rows = csv.trim().split("\n").slice(1).map((line) => line.split(","));
  assert.equal(rows.length, 16);
  const values = [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    assert.equal(row[0], "2017-01-24");
    assert.equal(row[2], i % 2 ? "SMP" : "REF");
    assert.equal(row[5], "10");
    if (i % 2) {
      const ratio = Number(row[7]);
      if (i < rows.length - 1) {
        const calculated = Number(row[3]) / ((Number(rows[i - 1][3]) + Number(rows[i + 1][3])) / 2);
        assert.ok(Math.abs(ratio - calculated) < 0.5e-9);
      }
      const value = 0.18436648 + 395.56334783 * ratio;
      assert.ok(Math.abs(value - Number(row[8])) < 0.0005);
      values.push(value);
    }
  }
  assert.equal(values.length, 8);
  const mean = values.reduce((a, b) => a + b, 0) / 8;
  const sd = Math.sqrt(values.reduce((sum, x) => sum + (x - mean) ** 2, 0) / 7);
  assert.equal(Number(mean.toFixed(3)), 386.728);
  assert.equal(Number(sd.toFixed(3)), 0.003);
  assert.match(meta.table.x626_meaning, /NOT total CO2/);
  assert.match(meta.table.missing_data, /not printed/);
  assert.match(meta.calibration.scope, /Do not relabel these values as X2019/);
  for (const file of ["noaa-table-a1.csv", "example.json", "reproduce.py", "plot.py", "repeat-measurements.png"]) {
    assert.deepEqual(await readFile(new URL(`dist/client/data/methods/absorption-spectroscopy/${file}`, root)), await readFile(new URL(file, base)));
  }
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

test("publishes isotope mass spectrometry with an honest example and open sources", async () => {
  const slug = "hmotnostni-a-izotopova-spektrometrie";
  const [html, source, catalogue, observation] = await Promise.all([
    readFile(new URL(`dist/client/metody/${slug}/index.html`, root), "utf8"),
    readFile(new URL("app/components/IsotopeMassSpectrometryArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/srazky-a-privalove-srazky/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.match(html, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  const headings = [...body.matchAll(/<h2\b[^>]*>(.*?)<\/h2>/g)].map(m => m[1]);
  assert.deepEqual(headings, ["Jak změříme izotopové složení vody", "Nejistoty a ověření", "Příklad: stejná voda ve třech laboratořích", "Shrnutí"]);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.match(body, /Začínáme zveřejněnými průměry δ¹⁸O po kalibraci/);
  assert.match(body, /97,531 % referenčního poměru/);
  assert.match(body, /standardní chybu průměru/);
  assert.equal((body.match(/<tr>/g) ?? []).length, 4);
  assert.doesNotMatch(body, /_vinext\/image|katex-error/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  assert.match(observation, /href="\/metody\/hmotnostni-a-izotopova-spektrometrie\/?(?:#[^"]+)?"/);
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp(`<article[^>]*id="${id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(card, `Missing isotope source ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : `${href.replace(/\/$/, "")}/index.html`;
    await readFile(new URL(`dist/client${file}`, root));
  }
});

test("reproduces the isotope comparison while preserving distinct uncertainty meanings", async () => {
  const base = new URL("public/data/methods/isotope-mass-spectrometry/", root);
  const meta = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const csv = (await readFile(new URL("gisp-comparison.csv", base), "utf8")).replace(/\r\n/g, "\n");
  assert.equal(createHash("sha256").update(csv).digest("hex"), meta.table_sha256_lf);
  const rows = csv.trim().split("\n").slice(1).map(line => line.split(","));
  assert.deepEqual(rows.map(r => [r[0], r[1], Number(r[3]), Number(r[4]), Number(r[5])]), [
    ["GISP", "LSCE", 3, -24.69, 0.08],
    ["GISP", "JHU", 9, -24.79, 0.08],
    ["GISP", "Los_Gatos_Research", 26, -24.74, 0.03],
  ]);
  assert.equal(rows[0][6], "standard_error_of_mean");
  assert.equal(rows[1][6], "standard_error_of_mean");
  assert.equal(rows[2][6], "convolved_instrumental_precision_limit");
  for (const row of rows) {
    assert.ok(Math.abs(1 + Number(row[4]) / 1000 - meta.expected[row[1] + "_relative_ratio"]) < 1e-12);
  }
  assert.equal(Number((Number(rows[0][4]) - Number(rows[1][4])).toFixed(2)), 0.10);
  assert.equal(Number((100 * (1 + Number(rows[0][4]) / 1000)).toFixed(3)), 97.531);
  assert.match(meta.data_level, /NOT raw ion currents/);
  assert.match(meta.method_context.independence, /share VSMOW2 and SLAP2/);
  for (const file of ["gisp-comparison.csv", "example.json", "reproduce.py"]) {
    assert.deepEqual(await readFile(new URL(`dist/client/data/methods/isotope-mass-spectrometry/${file}`, root)), await readFile(new URL(file, base)));
  }
});

test("publishes solution spectrophotometry with the correct data level and connected sources", async () => {
  const [html, source, catalogue, observation] = await Promise.all([
    readFile(new URL("dist/client/metody/spektrofotometrie/index.html", root), "utf8"),
    readFile(new URL("app/components/SpectrophotometryArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/acidifikace-oceanu/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.match(html, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  assert.deepEqual([...body.matchAll(/<h2\b[^>]*>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak změříme pH pomocí světla", "Nejistoty a ověření", "Příklad: výpočet ze skutečných absorbancí", "Shrnutí",
  ]);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.match(body, /pH před korekcí přídavku indikátoru/);
  assert.match(body, /Výsledek 7,6391 souhlasí s publikovaným údajem/);
  assert.match(body, /Calculated_Temperature/);
  assert.doesNotMatch(body, /_vinext\/image|katex-error/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  assert.match(observation, /href="\/metody\/spektrofotometrie\/?(?:#[^"]+)?"/);
  assert.doesNotMatch(observation, /m-kresolové\s+červeně/);
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp(`<article[^>]*id="${id}"[\\s\\S]*?<\\/article>`))?.[0];
    assert.ok(card, `Missing spectrophotometry source ${id}`);
    assert.doesNotMatch(card, /drive\.google\.com/);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : `${href.replace(/\/$/, "")}/index.html`;
    await readFile(new URL(`dist/client${file}`, root));
  }
});

test("reproduces four measured pH values from absorbances before dye correction", async () => {
  const base = new URL("public/data/methods/spectrophotometry/", root);
  const meta = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const csv = (await readFile(new URL("woosley-batch2-bottle15.csv", base), "utf8")).replace(/\r\n/g, "\n");
  assert.equal(createHash("sha256").update(csv).digest("hex"), meta.subset_sha256_lf);
  const [header, ...lines] = csv.trim().split("\n");
  const keys = header.split(",");
  const rows = lines.map(line => Object.fromEntries(line.split(",").map((v, i) => [keys[i], v])));
  assert.equal(rows.length, 4);
  assert.deepEqual(rows.map(r => r.Rep), ["A", "B", "C", "D"]);
  const calculated = [];
  for (const row of rows) {
    assert.equal(row.Batch, "2"); assert.equal(row.Bottle, "15"); assert.equal(row.flag, "2");
    const s = Number(row.Practical_Salinity);
    const t = Number(row.Calculated_Temperature) + 273.15;
    assert.ok(t >= 278.15 && t <= 308.15 && s >= 20 && s <= 40);
    const a = -246.64209 + 0.315971 * s + 2.8855e-4 * s * s;
    const b = 7229.23864 - 7.098137 * s - 0.057034 * s * s;
    const c = 44.493382 - 0.052711 * s;
    const p = a + b / t + c * Math.log(t) - 0.0781344 * t;
    const ea = -0.007762 + 4.5174e-5 * t;
    const eb = -0.020813 + 2.60262e-4 * t + 1.0436e-4 * (s - 35);
    const r = (Number(row.A578) - Number(row.A730)) / (Number(row.A434) - Number(row.A730));
    const ph = p + Math.log10((r - ea) / (1 - r * eb));
    assert.ok(Math.abs(r - Number(row.R)) < 0.5e-6);
    assert.ok(Math.abs(ph - Number(row.raw_pHt)) < 0.5e-4);
    calculated.push(Number(ph.toFixed(4)));
  }
  assert.deepEqual(calculated, [7.6391, 7.6378, 7.6381, 7.6376]);
  assert.match(meta.data_level, /BEFORE indicator perturbation correction/);
  assert.match(meta.sample_context, /modified in a laboratory experiment/);
  for (const file of ["woosley-batch2-bottle15.csv", "example.json", "reproduce.py"]) {
    assert.deepEqual(await readFile(new URL(`dist/client/data/methods/spectrophotometry/${file}`, root)), await readFile(new URL(file, base)));
  }
});

test("publishes potentiometry with connected sources and distinct actual and illustrative examples", async () => {
  const [html, source, catalogue, observation] = await Promise.all([
    readFile(new URL("dist/client/metody/potenciometrie/index.html", root), "utf8"),
    readFile(new URL("app/components/PotentiometryArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/acidifikace-oceanu/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.match(html, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  assert.deepEqual([...body.matchAll(/<h2\b[^>]*>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak měříme pH pomocí elektrod", "Nejistoty a ověření", "Příklad kalibrace a kontroly výsledku", "Shrnutí",
  ]);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.match(body, /přebíráme již vypočtené hodnoty/);
  assert.match(body, /není přiřazen ke konkrétnímu odběru v oceánu/);
  assert.doesNotMatch(body, /_vinext\/image|katex-error/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  assert.match(observation, /href="\/metody\/potenciometrie\/?(?:#[^"]+)?"/);
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing potentiometry source " + id);
    assert.doesNotMatch(card, /drive\.google\.com/);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : href.replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("reproduces published potentiometric control results and the SOP 6a illustration separately", async () => {
  const base = new URL("public/data/methods/potentiometry/", root);
  const meta = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const actual = meta.actual_experiment;
  assert.equal(actual.source_doi, "10.1515/pac-2020-0202");
  assert.deepEqual(actual.tables, [3, 7]);
  assert.deepEqual(actual.calibration_buffers.map(b => [b.buffer, Number(b.pHT)]), [[1, 7.622], [3, 8.209]]);
  assert.equal(actual.control_buffer, 2);
  assert.equal(Number(actual.reference_pHT), 8.101);
  assert.deepEqual(actual.results.map(r => Number(r.pHT)), [8.10, 8.10, 8.09, 8.10]);
  const diffs = actual.results.map(r => Number((Number(r.pHT) - Number(actual.reference_pHT)).toFixed(3)));
  assert.deepEqual(diffs, [-0.001, -0.001, -0.011, -0.001]);
  assert.match(actual.data_level, /not raw electrode voltages/);
  const ex = meta.handbook_illustration;
  assert.match(ex.data_level, /No actual ocean sample identification/);
  const slope = (Number(ex.E_AMP_mV) - Number(ex.E_TRIS_mV)) / (Number(ex.pHT_TRIS) - Number(ex.pHT_AMP));
  const ph = Number(ex.pHT_TRIS) + (Number(ex.E_TRIS_mV) - Number(ex.E_sample_mV)) / Number(ex.ideal_slope_mV_per_pH);
  assert.equal(slope.toFixed(2), "59.14");
  assert.equal(ph.toFixed(4), "8.0023");
  const csv = (await readFile(new URL("control-results.csv", base), "utf8")).trim().split("\n").slice(1);
  assert.deepEqual(csv.map(r => Number(r.split(",")[5])), diffs);
  for (const file of ["control-results.csv", "example.json", "reproduce.py"]) {
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/potentiometry/" + file, root)), await readFile(new URL(file, base)));
  }
});

test("publishes titration with open sources, full data and a clearly scoped calculation", async () => {
  const [html, source, catalogue, observation] = await Promise.all([
    readFile(new URL("dist/client/metody/titrace/index.html", root), "utf8"),
    readFile(new URL("app/components/TitrationArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/acidifikace-oceanu/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.match(html, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  assert.deepEqual([...body.matchAll(/<h2\b[^>]*>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak ze spotřeby kyseliny zjistíme alkalinitu", "Nejistoty a ověření", "Příklad: přepočet zveřejněné titrace", "Shrnutí",
  ]);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.match(body, /Konečnou hodnotu zde přebíráme ze zdroje/);
  assert.match(body, /Příručka u tohoto vzorku neuvádí místo ani datum odběru/);
  assert.doesNotMatch(body, /_vinext\/image|katex-error/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  assert.match(observation, /href="\/metody\/titrace\/?(?:#[^"]+)?"/);
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing titration source " + id);
    assert.doesNotMatch(card, /drive\.google\.com/);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : href.replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("reproduces the initial Gran estimate without claiming to repeat the final nonlinear fit", async () => {
  const base = new URL("public/data/methods/titration/", root);
  const meta = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const csv = (await readFile(new URL("sop3b-titration.csv", base), "utf8")).replace(/\r\n/g, "\n");
  assert.equal(createHash("sha256").update(csv).digest("hex"), meta.csv_sha256_lf);
  const rows = csv.trim().split("\n").slice(1).map(r => r.split(",").map(Number));
  assert.equal(rows.length, 22);
  assert.deepEqual(rows[0], [3.5, 0.18607, 1]);
  assert.deepEqual(rows.at(-1), [4.55, 0.21820, 0]);
  const selected = rows.filter(r => r[2] === 1);
  assert.equal(selected.length, 21);
  const m0 = meta.sample_mass_kg;
  const q = meta.gas_constant_J_per_mol_K * (meta.temperature_C + 273.15) / meta.faraday_constant_C_per_mol;
  const x = selected.map(r => r[0] * meta.acid_density_g_per_ml / 1000);
  const y = selected.map((r, i) => (m0 + x[i]) * Math.exp((r[1] - meta.gran_reference_potential_V) / q));
  const mean = a => a.reduce((s, v) => s + v, 0) / a.length;
  const mx = mean(x), my = mean(y);
  const slope = x.reduce((s, v, i) => s + (v - mx) * (y[i] - my), 0) / x.reduce((s, v) => s + (v - mx) ** 2, 0);
  const intercept = my - slope * mx;
  const equivalence = -intercept / slope;
  const estimate = equivalence * meta.acid_concentration_mol_per_kg_solution / m0 * 1e6;
  assert.ok(Math.abs(equivalence - 0.0031614268491929165) < 1e-12);
  assert.equal(estimate.toFixed(2), "2263.38");
  assert.equal(meta.published_final_alkalinity_umol_per_kg, 2260.06);
  assert.equal((estimate - meta.published_final_alkalinity_umol_per_kg).toFixed(2), "3.32");
  assert.match(meta.data_level, /initial Gran estimate only/);
  assert.match(meta.data_level, /final nonlinear result is quoted/);
  for (const file of ["sop3b-titration.csv", "example.json", "reproduce.py"]) {
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/titration/" + file, root)), await readFile(new URL(file, base)));
  }
});

test("publishes coulometry with a complete charge-to-carbon explanation and open evidence", async () => {
  const [html, source, catalogue, observation] = await Promise.all([
    readFile(new URL("dist/client/metody/coulometrie/index.html", root), "utf8"),
    readFile(new URL("app/components/CoulometryArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/acidifikace-oceanu/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.match(html, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  assert.deepEqual([...body.matchAll(/<h2\b[^>]*>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak elektrický náboj určí množství uhlíku", "Nejistoty a ověření",
    "Příklad: dva rozbory z původního výpisu přístroje", "Shrnutí",
  ]);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.match(body, /Místo ani datum odběru nejsou uvedeny/);
  assert.match(body, /2122,132 µmol\/kg/);
  assert.doesNotMatch(body, /_vinext\/image|katex-error/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  assert.match(observation, /href="\/metody\/coulometrie\/?(?:#[^"]+)?"/);
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing coulometry source " + id);
    assert.doesNotMatch(card, /drive\.google\.com/);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const href = match[1];
    const file = /\.[a-z0-9]+$/i.test(href) ? href : href.replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("reproduces both original SOMMA sample analyses from all twenty published readings", async () => {
  const base = new URL("public/data/methods/coulometry/", root);
  const meta = JSON.parse(await readFile(new URL("example.json", base), "utf8"));
  const csv = (await readFile(new URL("somma-1992-counts.csv", base), "utf8")).replace(/\r\n/g, "\n");
  assert.equal(createHash("sha256").update(csv).digest("hex"), meta.csv_sha256_lf);
  assert.equal(meta.source_doi, "10.2172/10194787");
  const rows = csv.trim().split("\n").slice(1).map(r => r.split(",").map(Number));
  assert.equal(rows.length, 20);
  const concentrations = [];
  for (const replicate of [1, 2]) {
    const series = rows.filter(r => r[0] === replicate);
    assert.deepEqual(series.map(r => r[1]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const count = series.at(-1)[2];
    assert.equal(count, replicate === 1 ? 301133 : 301107);
    const amount = (
      count / meta.counts_per_umol_nominal
      - meta.background_umol_per_min * meta.analysis_duration_min
      - meta.electronic_intercept_umol_per_min * meta.significant_current_duration_min
    ) / meta.electronic_slope;
    assert.ok(Math.abs(amount - meta.published_corrected_umol[replicate - 1]) < 0.000005);
    const concentration = amount * meta.gas_calibration_factor * meta.published_volume_factor_per_kg;
    concentrations.push(concentration);
  }
  assert.deepEqual(concentrations.map(v => v.toFixed(3)), ["2122.224", "2122.041"]);
  assert.equal(((concentrations[0] + concentrations[1]) / 2).toFixed(3), meta.published_mean_umol_per_kg.toFixed(3));
  assert.match(meta.sample_context, /collection place, collection date and identifier are not provided/);
  assert.match(meta.reported_result_stage, /No additional preservative or headspace correction/);
  for (const file of ["somma-1992-counts.csv", "example.json", "reproduce.py"]) {
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/coulometry/" + file, root)), await readFile(new URL(file, base)));
  }
});

test("ice-core method publishes reproducible dated measurements and reciprocal CO2 links", async () => {
  const slug = "ledova-jadra-a-analyza-uzavreneho-vzduchu";
  const [html, source, catalogue, observation] = await Promise.all([
    readFile(new URL(`dist/client/metody/${slug}/index.html`, root), "utf8"),
    readFile(new URL("app/components/IceCoreArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/atmosfericka-koncentrace-co2/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "Full article must replace the catalogue placeholder");
  assert.equal([...body.matchAll(/<h2>/g)].length, 4);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.doesNotMatch(body, /katex-error|Potřebné informace/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  assert.match(body, /31 let mladší/);
  assert.match(body, /o 38,3 ppm více/);
  assert.ok(hasArticleLink(observation, `/metody/${slug}`));
  assert.ok(hasArticleLink(body, "/pozorovani/atmosfericka-koncentrace-co2"));
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing ice-core source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(match[1]) ? match[1] : match[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
  const base = new URL("public/data/methods/ice-cores/", root);
  const metadata = JSON.parse(await readFile(new URL("provenance.json", base), "utf8"));
  for (const [name, sha] of Object.entries(metadata.sha256)) {
    assert.equal(createHash("sha256").update(await readFile(new URL(name, base))).digest("hex"), sha);
  }
});

test("sediment-core method publishes dated source data and links to the ice archive", async () => {
  const slug = "sedimentarni-jadra-a-stratigrafie";
  const [html, source, catalogue, ice] = await Promise.all([
    readFile(new URL(`dist/client/metody/${slug}/index.html`, root), "utf8"),
    readFile(new URL("app/components/SedimentCoreArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/metody/ledova-jadra-a-analyza-uzavreneho-vzduchu/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "Full article must replace the catalogue placeholder");
  assert.equal([...body.matchAll(/<h2>/g)].length, 4);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.doesNotMatch(body, /katex-error|Potřebné informace/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  assert.match(body, /8,33 centimetru za tisíc let/);
  assert.match(body, /120 let na centimetr/);
  assert.ok(ice.includes(`href="/metody/${slug}"`));
  assert.ok(body.includes('href="/metody/ledova-jadra-a-analyza-uzavreneho-vzduchu"'));
  assert.ok(hasArticleLink(body, "/pozorovani/atmosfericka-koncentrace-co2"));
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing sediment-core source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(match[1]) ? match[1] : match[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
  const base = new URL("public/data/methods/sediment-cores/", root);
  const metadata = JSON.parse(await readFile(new URL("provenance.json", base), "utf8"));
  for (const [name, sha] of Object.entries(metadata.sha256)) {
    assert.equal(createHash("sha256").update(await readFile(new URL(name, base))).digest("hex"), sha);
  }
});

test("dendrochronology publishes the full method, open evidence and unchanged measurement files", async () => {
  const [html, source, catalogue, sediment] = await Promise.all([
    readFile(new URL("dist/client/metody/dendrochronologie/index.html", root), "utf8"),
    readFile(new URL("app/components/DendrochronologyArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/metody/sedimentarni-jadra-a-stratigrafie/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "Full article must replace the catalogue placeholder");
  assert.equal([...body.matchAll(/<h2>/g)].length, 4);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.doesNotMatch(body, /katex-error|Potřebné informace/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  assert.match(body, /YAD011/);
  assert.match(body, /−0,061/);
  assert.match(body, /bez standardizace a převodu na teplotu/);
  assert.ok(sediment.includes('href="/metody/dendrochronologie"'));
  assert.ok(body.includes('href="/metody/sedimentarni-jadra-a-stratigrafie"'));
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing dendrochronology source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(match[1]) ? match[1] : match[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
  const base = new URL("public/data/methods/dendrochronology/", root);
  const metadata = JSON.parse(await readFile(new URL("provenance.json", base), "utf8"));
  for (const [name, sha] of Object.entries(metadata.sha256)) {
    const original = await readFile(new URL(name, base));
    assert.equal(createHash("sha256").update(original).digest("hex"), sha);
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/dendrochronology/" + name, root)), original);
  }
});

test("coral sclerochronology publishes a sourced method and a reproducible negative temperature conversion", async () => {
  const [html, source, catalogue, dendro] = await Promise.all([
    readFile(new URL("dist/client/metody/koralova-sclerochronologie/index.html", root), "utf8"),
    readFile(new URL("app/components/CoralSclerochronologyArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/metody/dendrochronologie/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "Full article must replace the catalogue placeholder");
  assert.equal([...body.matchAll(/<h2>/g)].length, 4);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.doesNotMatch(body, /katex-error|Potřebné informace/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  assert.match(html, /28\. října 2026/);
  assert.match(body, /26,32 °C/);
  assert.match(body, /26,16 °C/);
  assert.match(body, /není nezávislou zkouškou převodu/);
  assert.ok(dendro.includes('href="/metody/koralova-sclerochronologie"'));
  assert.ok(body.includes('href="/metody/dendrochronologie"'));
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing coral source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(match[1]) ? match[1] : match[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
  const base = new URL("public/data/methods/coral-sclerochronology/", root);
  const metadata = JSON.parse(await readFile(new URL("provenance.json", base), "utf8"));
  for (const [name, sha] of Object.entries(metadata.sha256)) {
    const original = await readFile(new URL(name, base));
    assert.equal(createHash("sha256").update(original).digest("hex"), sha);
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/coral-sclerochronology/" + name, root)), original);
  }
  const rows = (await readFile(new URL("annual-comparison.csv", base), "utf8")).trim().split("\n").slice(1).map(row => row.split(",").map(Number));
  assert.equal(rows.length, 115);
  assert.equal(rows[0][0], 1883);
  assert.equal(rows.at(-1)[0], 1997);
  const average = values => values.reduce((a, b) => a + b, 0) / values.length;
  const variance = values => average(values.map(value => (value - average(values)) ** 2));
  const measured = rows.map(row => row[2]);
  const inferred = rows.map(row => row[3]);
  assert.ok(Math.abs(average(measured) - average(inferred)) < 1e-7, "Scaling preserves the reference mean");
  assert.ok(Math.abs(variance(measured) - variance(inferred)) < 1e-7, "Scaling preserves reference variability");
  const byRatio = [...rows].sort((a, b) => a[1] - b[1]);
  assert.ok(byRatio[0][3] > byRatio.at(-1)[3], "Higher Sr/Ca must mean lower temperature");
  const year1900 = rows.find(row => row[0] === 1900);
  assert.equal(year1900[1], 9.18979);
  assert.equal(year1900[3].toFixed(2), "26.32");
  assert.equal(year1900[2].toFixed(2), "26.16");
});

test("speleothems connect measured isotope values to a dated, reproducible 21-sample record", async () => {
  const [html, source, catalogue, coral] = await Promise.all([
    readFile(new URL("dist/client/metody/krapniky-a-jeskynni-sedimenty/index.html", root), "utf8"),
    readFile(new URL("app/components/SpeleothemArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/metody/koralova-sclerochronologie/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "Full article must replace the catalogue placeholder");
  assert.equal([...body.matchAll(/<h2>/g)].length, 4);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.doesNotMatch(body, /katex-error|Potřebné informace/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  assert.match(html, /28\. října 2026/);
  assert.match(body, /−5,05 ‰/);
  assert.match(body, /přibližně 292 let/);
  assert.match(body, /již kalibrovanými hodnotami/);
  assert.match(body, /není zcela nezávislou/);
  assert.ok(coral.includes('href="/metody/krapniky-a-jeskynni-sedimenty"'));
  assert.ok(body.includes('href="/metody/koralova-sclerochronologie"'));
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  const ids = [...new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))];
  assert.ok(ids.length >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing speleothem source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(match[1]) ? match[1] : match[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
  const base = new URL("public/data/methods/speleothems/", root);
  const metadata = JSON.parse(await readFile(new URL("provenance.json", base), "utf8"));
  const original = await readFile(new URL("bu4-original.txt", base));
  assert.equal(createHash("sha256").update(original).digest("hex"), metadata.sha256["bu4-original.txt"]);
  assert.deepEqual(await readFile(new URL("dist/client/data/methods/speleothems/bu4-original.txt", root)), original);
  const values = original.toString("utf8").split(/\r?\n/).filter(line => line.trim() && !line.startsWith("#")).slice(1)
    .map(line => line.split("\t").map(Number));
  const processed = (await readFile(new URL("bu4-processed.csv", base), "utf8")).trim().split("\n").slice(1).map(line => line.split(","));
  assert.equal(values.length, 1008);
  assert.equal(processed.length, values.length);
  const centers = processed.filter(row => row[4] !== "");
  assert.equal(centers.length, 988);
  for (let i = 0; i < processed.length; i++) {
    assert.equal(Number(processed[i][1]), values[i][0], "Retain the published chronology");
    assert.equal(Number(processed[i][3]), values[i][3], "Retain measured delta, not carbon or Mg/Ca");
    if (i < 10 || i >= values.length - 10) {
      assert.equal(processed[i][4], "", "Never pad incomplete windows");
    } else {
      const expected = values.slice(i-10,i+11).reduce((sum, row) => sum + row[3], 0) / 21;
      assert.ok(Math.abs(Number(processed[i][4]) - expected) < 1e-9);
    }
  }
  assert.equal(Number(processed[38][1]), 496.9);
  assert.equal(Number(processed[38][4]).toFixed(2), "-5.05");
  assert.equal((values[48][0] - values[28][0]).toFixed(1), "291.7");
});


test("pollen analysis publishes the complete method with linked open sources and reproducible inputs", async () => {
  const [html, source, catalogue, sediment] = await Promise.all([
    readFile(new URL("dist/client/metody/pylova-analyza-a-mikrofosilie/index.html", root), "utf8"),
    readFile(new URL("app/components/PollenAnalysisArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/metody/sedimentarni-jadra-a-stratigrafie/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "Full article must replace the placeholder");
  assert.equal([...body.matchAll(/<h2>/g)].length, 4);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.match(body, /88,1 %/);
  assert.match(body, /85,2 procentního bodu/);
  assert.match(body, /Jednotlivé počty zrn tento soubor neobsahuje/);
  assert.doesNotMatch(body, /katex-error|Potřebné informace/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  assert.match(html, /28\. října 2026/);
  assert.ok(sediment.includes('href="/metody/pylova-analyza-a-mikrofosilie"'));
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  for (const id of new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing pollen source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(match[1]) ? match[1] : match[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("pollen example retains published denominators, chronology and all eleven selected samples", async () => {
  const base = new URL("public/data/methods/pollen/", root);
  const original = await readFile(new URL("pg1351-original.tsv", base));
  const metadata = JSON.parse(await readFile(new URL("provenance.json", base), "utf8"));
  assert.equal(createHash("sha256").update(original).digest("hex"), metadata.sha256["pg1351-original.tsv"]);
  assert.deepEqual(await readFile(new URL("dist/client/data/methods/pollen/pg1351-original.tsv", root)), original);
  const [header, ...lines] = original.toString("utf8").split("*/")[1].trim().split(/\r?\n/);
  const names = header.split("\t");
  const input = lines.map(line => Object.fromEntries(line.split("\t").map((v, i) => [names[i], v])));
  assert.equal(input.length, 19);
  const selected = input.filter(row => ["5e", "6"].includes(row.MIS));
  const rows = (await readFile(new URL("selected-pollen.csv", base), "utf8")).trim().split(/\r?\n/).slice(1).map(line => line.split(","));
  assert.equal(rows.length, 11);
  assert.equal(rows.length, selected.length);
  assert.deepEqual(rows.map(row => row[0]).sort(), selected.map(row => row["Sample ID"]).sort());
  for (const row of rows) {
    const published = selected.find(r => r["Sample ID"] === row[0]);
    assert.equal(Number(row[2]), Number(published["Age [ka BP]"]));
    assert.equal(Number(row[3]), Number(published["Age [ka BP]"]) * 1000);
    assert.equal(Number(row[4]), Number(published["Depth sed [m]"]));
    for (const [index, column] of [[5, "Bet.Se.N-T [%]"], [6, "Alnus [%]"], [7, "Poac [%]"], [8, "Artemisia [%]"]]) {
      assert.equal(Number(row[index]), Number(published[column]), "Do not renormalize selected taxa");
    }
    assert.ok(Math.abs(Number(row[9]) - Number(published["Poac [%]"]) - Number(published["Artemisia [%]"])) < 1e-10);
  }
  const older = rows.find(row => row[0] === "117");
  const younger = rows.find(row => row[0] === "109");
  assert.equal(older[9], "88.1");
  assert.equal(younger[9], "2.9");
  assert.ok(Math.abs(Number(older[9]) - Number(younger[9]) - 85.2) < 1e-10);
  assert.equal(rows[0][3], "117460");
  assert.equal(rows.at(-1)[3], "144460");
});


test("isotope paleothermometry publishes its complete calibrated pathway with open sources", async () => {
  const [html, source, catalogue, massSpectrometry] = await Promise.all([
    readFile(new URL("dist/client/metody/izotopova-paleotermometrie/index.html", root), "utf8"),
    readFile(new URL("app/components/IsotopePaleothermometryArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/metody/hmotnostni-a-izotopova-spektrometrie/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body, "Full article must replace the placeholder");
  assert.equal([...body.matchAll(/<h2>/g)].length, 4);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.match(body, /19,1 °C/);
  assert.match(body, /95 000 000/);
  assert.match(body, /Vzorky byly součástí kalibrace/);
  assert.doesNotMatch(body, /katex-error|Potřebné informace/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  assert.match(massSpectrometry, /href="\/metody\/izotopova-paleotermometrie"/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  for (const id of new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing isotope source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(match[1]) ? match[1] : match[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("isotope example preserves NOAA bytes, selects all 39 low-light samples and applies the offset only once", async () => {
  const base = new URL("public/data/methods/isotope-temperature/", root);
  const metadata = JSON.parse(await readFile(new URL("provenance.json", base), "utf8"));
  for (const [name, hash] of Object.entries(metadata.sha256)) {
    const original = await readFile(new URL(name, base));
    assert.equal(createHash("sha256").update(original).digest("hex"), hash);
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/isotope-temperature/" + name, root)), original);
  }
  const raw = await readFile(new URL("bemis1998-original.txt", base));
  const [header, ...lines] = raw.toString("latin1").trim().split(/\r?\n/);
  const names = header.split("\t");
  const input = lines.map((line, index) => ({ ...Object.fromEntries(line.split("\t").map((v, i) => [names[i], v])), number: index + 1 }));
  assert.equal(input.length, 135);
  const selected = input.filter(r => r.Species === "O. universa" && r.Irradiance === "LL" && r["[CO32-]"] === "171");
  const rows = (await readFile(new URL("selected-results.csv", base), "utf8")).trim().split(/\r?\n/).slice(1).map(line => line.split(",").map(Number));
  assert.equal(selected.length, 39);
  assert.deepEqual(rows.map(r => r[0]), selected.map(r => r.number));
  for (const row of rows) {
    const original = input[row[0] - 1];
    assert.equal(row[1], Number(original["T(°C)"]));
    assert.equal(row[2], Number(original["dc-dw (VPDB)"]));
    assert.ok(Math.abs(row[3] - (16.5 - 4.8 * row[2])) < 1e-10, "Published D is already adjusted: no extra 0.27");
    assert.ok(Math.abs(row[4] - (row[3] - row[1])) < 1e-10);
  }
  const groups = (await readFile(new URL("group-means.csv", base), "utf8")).trim().split(/\r?\n/).slice(1).map(line => line.split(",").map(Number));
  assert.deepEqual(groups.map(r => r.slice(0, 2)), [[15, 6], [17, 4], [18, 2], [19, 5], [22, 13], [24, 6], [25, 3]]);
  for (const [bath, n, meanD, meanT] of groups) {
    const measurements = rows.filter(r => r[1] === bath);
    assert.equal(n, measurements.length);
    assert.ok(Math.abs(meanD - measurements.reduce((sum, r) => sum + r[2], 0) / n) < 1e-10);
    assert.ok(Math.abs(meanT - measurements.reduce((sum, r) => sum + r[3], 0) / n) < 1e-10);
  }
  const nineteen = groups.find(r => r[0] === 19);
  assert.equal(nineteen[2], -0.542);
  assert.equal(nineteen[3], 19.1016);
});

test("chemical paleothermometers publish a complete explanation, linked sources and repeatable data", async () => {
  const [html, source, catalogue, chromatography] = await Promise.all([
    readFile(new URL("dist/client/metody/chemicke-a-biologicke-paleoteplomery/index.html", root), "utf8"),
    readFile(new URL("app/components/ChemicalPaleothermometersArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/metody/plynova-chromatografie/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.equal([...body.matchAll(/<h2>/g)].length, 4);
  assert.match(body, /<h2>Shrnutí<\/h2><div class="method-conclusion"><p>/);
  assert.match(body, /15,1 °C/);
  assert.match(body, /0 až 29 °C/);
  assert.match(body, /75 vzorků/);
  assert.doesNotMatch(body, /katex-error|Potřebné informace/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  assert.match(chromatography, /href="\/metody\/chemicke-a-biologicke-paleoteplomery"/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  for (const id of new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(match[1]) ? match[1] : match[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("alkenone example preserves all 75 original concentration pairs and published corrected depths", async () => {
  const base = new URL("public/data/methods/organic-thermometers/", root);
  const raw = await readFile(new URL("fujine2003-table-original.txt", base));
  const metadata = JSON.parse(await readFile(new URL("provenance.json", base), "utf8"));
  assert.equal(createHash("sha256").update(raw).digest("hex"), metadata.sha256["fujine2003-table-original.txt"]);
  assert.deepEqual(await readFile(new URL("dist/client/data/methods/organic-thermometers/fujine2003-table-original.txt", root)), raw);
  const input = [...raw.toString("latin1").matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map(m =>
    [...m[1].matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map(c => c[1].replace(/<[^>]*>/g, "").trim())
  ).slice(3);
  const rows = (await readFile(new URL("results.tsv", base), "utf8")).trim().split(/\r?\n/).slice(1).map(line => line.split("\t"));
  assert.equal(input.length, 75);
  assert.equal(rows.length, input.length);
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i], p = input[i];
    assert.equal(r[0], "186-1151C-" + p[0]);
    assert.equal(Number(r[1]), Number(p[1]));
    assert.equal(Number(r[2]), Number(p[2]));
    assert.equal(Number(r[3]), Number(p[6]));
    assert.equal(Number(r[4]), Number(p[4]));
    assert.equal(Number(r[7]), Number(p[17]));
    assert.ok(Math.abs(Number(r[6]) - Number(p[17])) < 0.06, "Recalculation must agree with the independently published SST column");
    assert.ok(Math.abs(Number(r[5]) - Number(r[3]) / (Number(r[3]) + Number(r[4]))) < 1e-12);
  }
  assert.equal(rows[0][3], "30.39");
  assert.equal(rows[0][4], "24.64");
  assert.ok(Math.abs(Number(rows[0][6]) - 15.095418541757969) < 1e-12);
  assert.equal(rows.at(-1)[1], "121.24", "Preserve the unusual upstream value");
  assert.equal(rows.at(-1)[2], "21.01", "Plot the published corrected depth");
});

test("radiometric dating connects a complete article, calibration data and open sources", async () => {
  const [html, source, catalogue, linked] = await Promise.all([
    readFile(new URL("dist/client/metody/radiometricke-a-expozicni-datovani/index.html", root), "utf8"),
    readFile(new URL("app/components/RadiometricDatingArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/metody/chemicke-a-biologicke-paleoteplomery/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.deepEqual([...body.matchAll(/<h2>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak určujeme stáří přírodních záznamů", "Nejistoty a ověření", "Příklad: stáří dřeva u ledovce Forno", "Shrnutí",
  ]);
  assert.match(body, /8 252 ± 31 let BP/);
  assert.match(body, /9 050 do 9 400 cal BP/);
  assert.match(body, /0–55 000/);
  assert.match(body, /600 000 let/);
  const conclusion = body.match(/<div class="method-conclusion">([\s\S]*?)<\/div>/)?.[1];
  assert.ok(conclusion);
  assert.equal([...conclusion.matchAll(/<p>/g)].length, 2);
  assert.match(linked, /href="\/metody\/radiometricke-a-expozicni-datovani"/);
  assert.match(body, /href="\/metody\/chemicke-a-biologicke-paleoteplomery"/);
  assert.doesNotMatch(body, /katex-error|Potřebné informace/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  for (const id of new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing dating source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(match[1]) ? match[1] : match[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("Forno calibration preserves original IntCal20 bytes and a normalized complete age distribution", async () => {
  const base = new URL("public/data/methods/radiometric-dating/", root);
  const meta = JSON.parse(await readFile(new URL("provenance.json", base), "utf8"));
  for (const [name, hash] of Object.entries(meta.sha256)) {
    const raw = await readFile(new URL(name, base));
    assert.equal(createHash("sha256").update(raw).digest("hex"), hash);
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/radiometric-dating/" + name, root)), raw);
  }
  const sample = (await readFile(new URL("sample.csv", base), "utf8")).trim().split(/\r?\n/)[1].split(",");
  assert.deepEqual(sample.slice(0, 6), ["Fo-101", "B-8518", "wood", "Forno", "8252", "31"]);
  const rawCurve = (await readFile(new URL("intcal20-original.14c", base), "utf8")).trim().split(/\r?\n/).filter(l => !l.startsWith("#")).map(l => l.split(",").map(Number));
  assert.equal(rawCurve.length, 9501);
  const result = JSON.parse(await readFile(new URL("results.json", base), "utf8"));
  const rows = (await readFile(new URL("posterior.csv", base), "utf8")).trim().split(/\r?\n/).slice(1).map(l => l.split(",").map(Number));
  assert.equal(rows.length, 55001);
  let sum = 0;
  const quantiles = new Map();
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    assert.equal(row[0], i);
    assert.ok(Number.isFinite(row[3]) && row[3] >= 0);
    sum += row[3];
    for (const q of [0.023, 0.5, 0.977]) if (!quantiles.has(q) && sum >= q) quantiles.set(q, i);
  }
  assert.ok(Math.abs(sum - 1) < 1e-12);
  assert.equal(quantiles.get(0.5), result.median_cal_bp);
  assert.deepEqual([quantiles.get(0.023), quantiles.get(0.977)], result.equal_tailed_95_4_cal_bp);
  assert.equal(result.median_cal_bp, 9221);
  assert.deepEqual(result.equal_tailed_95_4_cal_bp, [9050, 9396]);
  // Published curve nodes must survive interpolation without changes.
  for (const [year, age, sigma] of rawCurve) {
    assert.ok(Math.abs(rows[year][1] - age) < 1e-10);
    assert.ok(Math.abs(rows[year][2] - sigma) < 1e-10);
  }
  assert.ok(Math.abs(result.equivalent_fraction_modern - Math.exp(-8252 / 8033)) < 1e-14);
});


test("borehole reconstruction publishes a complete article linked to permafrost observations", async () => {
  const [html, source, catalogue, observation] = await Promise.all([
    readFile(new URL("dist/client/metody/rekonstrukce-teploty-z-vrtu/index.html", root), "utf8"),
    readFile(new URL("app/components/BoreholeTemperatureArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/snehova-pokryvka-a-permafrost/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.deepEqual([...body.matchAll(/<h2>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak teplota v podzemí uchovává minulost", "Nejistoty a ověření", "Příklad: teplotní profil českého vrtu", "Shrnutí",
  ]);
  assert.match(html, /30\. října 2026/);
  assert.match(body, /CZ-hv-105n/);
  assert.match(body, /1,252 °C/);
  assert.match(body, /0,3–0,4 °C/);
  assert.match(body, /500 let/);
  assert.match(body, /4 000 let/);
  assert.match(body, /úplnou inverzi povrchové historie neprovádí/);
  assert.match(body, /href="\/pozorovani\/snehova-pokryvka-a-permafrost"/);
  assert.match(observation, /href="\/metody\/rekonstrukce-teploty-z-vrtu"/);
  assert.doesNotMatch(body, /katex-error|Potřebné informace/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const conclusion = body.match(/<div class="method-conclusion">([\s\S]*?)<\/div>/)?.[1];
  assert.equal([...conclusion.matchAll(/<p>/g)].length, 2);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  for (const id of new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing borehole source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(match[1]) ? match[1] : match[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("borehole example preserves original temperatures and subtracts the fitted geothermal background", async () => {
  const base = new URL("public/data/methods/borehole-temperature/", root);
  const meta = JSON.parse(await readFile(new URL("provenance.json", base), "utf8"));
  const name = "huang2016-CZ-hv-105n-original.txt";
  const raw = await readFile(new URL(name, base));
  assert.equal(createHash("sha256").update(raw).digest("hex"), meta.sha256[name]);
  assert.deepEqual(await readFile(new URL("dist/client/data/methods/borehole-temperature/" + name, root)), raw);
  const original = raw.toString("utf8").split(/\r?\n/).filter(l => /^\s*\d+\.\d+\s+\d+\.\d+\s*$/.test(l)).map(l => l.trim().split(/\s+/).map(Number));
  assert.equal(original.length, 38);
  assert.deepEqual(original[0], [20, 10.410]);
  assert.deepEqual(original.at(-1), [390, 22.920]);
  const rows = (await readFile(new URL("profile.csv", base), "utf8")).trim().split(/\r?\n/).slice(1).map(l => l.split(",").map(Number));
  const results = JSON.parse(await readFile(new URL("results.json", base), "utf8"));
  assert.equal(rows.length, 29);
  assert.equal(rows.filter(r => r[4]).length, 11);
  assert.ok(Math.abs(results.intercept_degC - 7.989090909090907) < 1e-12);
  assert.ok(Math.abs(results.gradient_K_per_m - 0.03858181818181818) < 1e-14);
  let residualSum = 0, depthResidualSum = 0;
  for (const [z, temp, background, anomaly, fitted] of rows) {
    assert.equal(temp, original.find(r => r[0] === z)[1]);
    assert.ok(Math.abs(background - (results.intercept_degC + results.gradient_K_per_m*z)) < 1e-11);
    assert.ok(Math.abs(temp-background-anomaly) < 1e-11);
    assert.equal(fitted, Number(z >= 200 && z <= 300));
    if (fitted) { residualSum += anomaly; depthResidualSum += z*anomaly; }
  }
  // Independent defining conditions of an OLS fit with an intercept.
  assert.ok(Math.abs(residualSum) < 1e-10);
  assert.ok(Math.abs(depthResidualSum) < 1e-8);
  assert.ok(Math.abs(rows.find(r => r[0] === 50)[3] - 1.251818181818) < 1e-11);
});


test("quality control and homogenization connects a complete method to global temperature observations", async () => {
  const [html, source, catalogue, observation] = await Promise.all([
    readFile(new URL("dist/client/metody/kontrola-kvality-a-homogenizace/index.html", root), "utf8"),
    readFile(new URL("app/components/QualityHomogenizationArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/gmst/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.deepEqual([...body.matchAll(/<h2\b[^>]*>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak získáme srovnatelný klimatický záznam", "Nejistoty a ověření", "Příklad: kontrola a úpravy teplot v Ruzyni", "Shrnutí",
  ]);
  assert.match(html, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  assert.match(observation, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  assert.match(body, /EZM00011518/);
  assert.match(body, /v4\.0\.1\.20261029/);
  assert.match(body, /719/);
  assert.match(body, /0,34 °C/);
  assert.match(body, /1 hodina nebo 1 den/);
  assert.match(body, /1 měsíc/);
  assert.match(body, /původní\s+hledání zlomů v celé síti zde znovu neprovádí/);
  assert.match(body, /href="\/pozorovani\/gmst\/?(?:#[^"]+)?"/);
  assert.match(observation, /href="\/metody\/kontrola-kvality-a-homogenizace\/?(?:#[^"]+)?"/);
  assert.doesNotMatch(body, /katex-error|Potřebné informace|citation--missing/);
  assert.doesNotMatch(source, /T_\{mathrm/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const conclusion = body.match(/<div class="method-conclusion">([\s\S]*?)<\/div>/)?.[1];
  assert.equal([...conclusion.matchAll(/<p>/g)].length, 2);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  for (const id of new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]))) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing homogenization source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(match[1]) ? match[1] : match[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("Ruzyně comparison preserves both NOAA versions, quality exclusions and signed adjustments", async () => {
  const base = new URL("public/data/methods/homogenization/", root);
  const meta = JSON.parse(await readFile(new URL("provenance.json", base), "utf8"));
  const data = {};
  for (const [name, hash] of Object.entries(meta.sha256)) {
    const raw = await readFile(new URL(name, base));
    assert.equal(createHash("sha256").update(raw).digest("hex"), hash);
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/homogenization/" + name, root)), raw);
    if (!name.endsWith(".dat")) continue;
    const mode = name.includes(".qcu-") ? "qcu" : "qcf";
    data[mode] = new Map();
    const lines = raw.toString("ascii").split(/\r?\n/).filter(line => line.length > 0);
    assert.equal(lines.length, 82);
    for (const line of lines) {
      assert.equal(line.length, 115);
      assert.equal(line.slice(0, 11), "EZM00011518");
      assert.equal(line.slice(15, 19), "TAVG");
      for (let m = 1; m <= 12; m++) {
        const cell = line.slice(19 + (m - 1) * 8, 27 + (m - 1) * 8);
        data[mode].set(`${line.slice(11, 15)}-${String(m).padStart(2, "0")}`, {value: Number(cell.slice(0, 5)), flags: cell.slice(5)});
      }
    }
  }
  const rows = (await readFile(new URL("comparison.csv", base), "utf8")).trimEnd().split(/\r?\n/).slice(1).map(l => l.split(","));
  assert.equal(rows.length, 720);
  assert.equal(rows[0][0], "1961-01");
  assert.equal(rows.at(-1)[0], "2020-12");
  assert.equal(new Set(rows.map(r => r[0])).size, 720);
  const included = rows.filter(r => r[9] === "1");
  assert.equal(included.length, 719);
  for (const row of rows) {
    const u = data.qcu.get(row[0]), h = data.qcf.get(row[0]);
    assert.equal(row[1], u.value === -9999 ? "" : (u.value / 100).toFixed(2));
    assert.equal(row[2], h.value === -9999 ? "" : (h.value / 100).toFixed(2));
    assert.deepEqual(row.slice(3, 6), [...u.flags].map(x => x.trim()));
    assert.deepEqual(row.slice(6, 9), [...h.flags].map(x => x.trim()));
    const valid = u.value !== -9999 && h.value !== -9999 && u.flags[1] === " " && h.flags[1] === " ";
    assert.equal(row[9], valid ? "1" : "0");
    assert.equal(row[10], valid ? ((h.value-u.value)/100).toFixed(2) : "");
  }
  assert.deepEqual(rows.filter(r => r[9] === "0").map(r => r[0]), ["2020-03"]);
  const rejected = rows.find(r => r[0] === "2020-03");
  assert.deepEqual([rejected[1], rejected[2], rejected[4], rejected[7]], ["4.80", "", "W", "Q"]);
  const known = new Map([["1965-01", "-0.34"], ["1990-01", "0.01"], ["2005-01", "-0.31"], ["2015-01", "0.00"]]);
  for (const [month, correction] of known) assert.equal(rows.find(r => r[0] === month)[10], correction);
  const results = JSON.parse(await readFile(new URL("results.json", base), "utf8"));
  assert.equal(results.paired_valid_months, 719);
  assert.equal(results.min_adjustment_degC, -0.34);
  assert.equal(results.max_adjustment_degC, 0.01);
});


test("spatial processing publishes a complete method with reciprocal GMST links and open sources", async () => {
  const [html, source, catalogue, observation] = await Promise.all([
    readFile(new URL("dist/client/metody/prostorove-zpracovani-a-plosne-prumery/index.html", root), "utf8"),
    readFile(new URL("app/components/SpatialAveragesArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/gmst/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.deepEqual([...body.matchAll(/<h2\b[^>]*>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak z měření sestavíme mapu a průměr území", "Nejistoty a ověření výsledku", "Příklad na šestnácti buňkách nad Evropou", "Shrnutí",
  ]);
  assert.match(html, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  assert.match(body, /5\.2\.0\.0/);
  assert.match(body, /1,35 °C/);
  assert.match(body, /1,16 °C/);
  assert.match(body, /opakujeme krok plošného/);
  assert.match(body, /href="\/pozorovani\/gmst\/?(?:#[^"]+)?"/);
  assert.match(observation, /href="\/metody\/prostorove-zpracovani-a-plosne-prumery\/?(?:#[^"]+)?"/);
  assert.doesNotMatch(body, /katex-error|Potřebné informace|citation--missing/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const conclusion = body.match(/<div class="method-conclusion">([\s\S]*?)<\/div>/)?.[1];
  assert.equal([...conclusion.matchAll(/<p>/g)].length, 2);
  assert.match(conclusion, /5° × 5°/);
  assert.match(conclusion, /1850/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  const ids = new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]));
  assert.ok(ids.size >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing spatial processing source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(match[1]) ? match[1] : match[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("CRUTEM example preserves source bytes and uses spherical cell areas for all sixteen cells", async () => {
  const base = new URL("public/data/methods/spatial-averages/", root);
  const meta = JSON.parse(await readFile(new URL("provenance.json", base), "utf8"));
  for (const [name, hash] of [[meta.saved_as, meta.source_sha256], ["cells.csv", meta.cells_sha256]]) {
    const raw = await readFile(new URL(name, base));
    assert.equal(createHash("sha256").update(raw).digest("hex"), hash);
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/spatial-averages/" + name, root)), raw);
  }
  assert.equal(meta.version, "CRUTEM.5.2.0.0");
  assert.equal(meta.source_variable, "tas");
  const rows = (await readFile(new URL("cells.csv", base), "utf8")).trim().split(/\r?\n/).slice(1).map(l => l.split(","));
  assert.equal(rows.length, 16);
  assert.deepEqual([...new Set(rows.map(r => Number(r[1])))], [47.5, 52.5, 57.5, 62.5]);
  assert.deepEqual([...new Set(rows.map(r => Number(r[2])))], [7.5, 12.5, 17.5, 22.5]);
  assert.equal(new Set(rows.map(r => r.slice(1, 3).join(","))).size, 16);
  const rad = d => d * Math.PI / 180;
  let area = 0, weighted = 0, sum = 0;
  for (const row of rows) {
    assert.equal(row[0], "2024-01");
    const [lat, lon, south, north, west, east, anomaly] = row.slice(1).map(Number);
    assert.ok(Number.isFinite(anomaly));
    assert.deepEqual([south, north, west, east], [lat-2.5, lat+2.5, lon-2.5, lon+2.5]);
    // Exact spherical cell area, with the common squared radius cancelled.
    const a = rad(east-west) * (Math.sin(rad(north))-Math.sin(rad(south)));
    area += a;
    weighted += a * anomaly;
    sum += anomaly;
  }
  const result = JSON.parse(await readFile(new URL("results.json", base), "utf8"));
  assert.ok(Math.abs(weighted/area - result.area_mean_c) < 1e-12);
  assert.ok(Math.abs(sum/16 - result.equal_cell_mean_c) < 1e-12);
  assert.ok(Math.abs(result.area_mean_c - 1.3516312044766368) < 1e-12);
  assert.ok(Math.abs(result.difference_c - 0.18731426219019132) < 1e-12);
  assert.equal(Number(rows.find(r => r[1] === "47.5" && r[2] === "7.5")[7]), 2.1769032258064516);
  assert.equal(Number(rows.find(r => r[1] === "62.5" && r[2] === "22.5")[7]), -1.705);
});


test("time changes and extremes publish the full method, reproducible example and reciprocal links", async () => {
  const [html, source, catalogue, heat, rain] = await Promise.all([
    readFile(new URL("dist/client/metody/analyza-casovych-zmen-a-extremu/index.html", root), "utf8"),
    readFile(new URL("app/components/TimeExtremesArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/vlny-veder/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/srazky-a-privalove-srazky/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.deepEqual([...body.matchAll(/<h2\b[^>]*>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak rozpoznáváme změny v čase", "Nejistoty a ověření", "Příklad na denních teplotách z Blue Hill", "Shrnutí",
  ]);
  for (const page of [html, heat, rain]) assert.match(page, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  for (const observation of [heat, rain]) assert.match(observation, /href="\/metody\/analyza-casovych-zmen-a-extremu\/?(?:#[^"]+)?"/);
  for (const slug of ["vlny-veder", "srazky-a-privalove-srazky"]) assert.ok(hasArticleLink(body, "/pozorovani/" + slug));
  for (const text of ["23 376", "3.35-upd-2026102817", "15,8773", "84 dnů", "−0,09 až +0,25", "nejmenších čtverců", "oboustranný test", "není homogenizován"]) assert.ok(body.includes(text), text);
  assert.doesNotMatch(body, /katex-error|Potřebné informace|citation--missing/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const conclusion = body.match(/<div class="method-conclusion">([\s\S]*?)<\/div>/)?.[1];
  assert.equal([...conclusion.matchAll(/<p>/g)].length, 2);
  assert.match(conclusion, /1901–2018/);
  assert.match(conclusion, /za 10 let/);
  const uncertainty = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(uncertainty.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  const ids = new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]));
  assert.ok(ids.size >= 5);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing time-extremes source " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(match[1]) ? match[1] : match[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("Blue Hill example preserves NOAA bytes, complete daily inputs and independently checked trends", async () => {
  const base = new URL("public/data/methods/time-extremes/", root);
  const meta = JSON.parse(await readFile(new URL("provenance.json", base), "utf8"));
  for (const [name, hash] of Object.entries(meta.sha256)) {
    const bytes = await readFile(new URL(name, base));
    assert.equal(createHash("sha256").update(bytes).digest("hex"), hash);
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/time-extremes/" + name, root)), bytes);
  }
  const readCsv = async name => {
    const lines = (await readFile(new URL(name, base), "utf8")).trim().split(/\r?\n/);
    const keys = lines.shift().split(",");
    return lines.map(line => Object.fromEntries(line.split(",").map((v, i) => [keys[i], v])));
  };
  const daily = await readCsv("daily.csv"), annual = await readCsv("annual.csv"), monthly = await readCsv("monthly.csv");
  assert.equal(daily.length, 23376);
  assert.equal(annual.length, 64);
  assert.equal(monthly.length, 768);
  const original = new Map();
  for (const line of (await readFile(new URL("USW00014753-original.dly", base), "utf8")).split(/\r?\n/).filter(Boolean)) {
    assert.equal(line.length, 269);
    if (line.slice(17, 21) === "TMAX") original.set(line.slice(11, 15) + "-" + line.slice(15, 17), line);
  }
  let date = Date.UTC(1961, 0, 1);
  for (const row of daily) {
    assert.equal(row.date, new Date(date).toISOString().slice(0, 10));
    date += 86400000;
    const line = original.get(row.date.slice(0, 7)), day = Number(row.date.slice(8));
    const cell = line.slice(21 + (day - 1) * 8, 29 + (day - 1) * 8);
    assert.notEqual(Number(cell.slice(0, 5)), -9999);
    assert.equal(Number(row.tmax_c), Number(cell.slice(0, 5)) / 10);
    assert.equal(row.qflag, "");
    assert.deepEqual([row.mflag, row.qflag, row.sflag], [...cell.slice(5)].map(v => v.trim()));
  }
  assert.equal(new Date(date).toISOString().slice(0, 10), "2025-01-01");
  const average = values => values.reduce((a, b) => a + b, 0) / values.length;
  for (const row of annual) {
    const days = daily.filter(d => d.date.startsWith(row.year)), values = days.map(d => Number(d.tmax_c));
    assert.equal(Number(row.days), values.length);
    assert.ok(Math.abs(Number(row.mean_tmax_c) - average(values)) < 1e-12);
    assert.equal(Number(row.txx_c), Math.max(...values));
    assert.equal(Number(row.su_days), values.filter(v => v > 25).length);
    assert.equal(row.txx_dates, days.filter(d => Number(d.tmax_c) === Number(row.txx_c)).map(d => d.date).join("|"));
  }
  const last = annual.at(-1);
  assert.equal(last.txx_dates, "2024-06-20|2024-08-02");
  assert.equal(Number(last.su_days), 84);
  assert.ok(Math.abs(Number(last.anomaly_c) - 1.823838485914614) < 1e-12);
  const result = JSON.parse(await readFile(new URL("results.json", base), "utf8"));
  // OLS normal equations: residuals are orthogonal to the intercept and centered time.
  for (const [key, column, slope, se] of [["annual_mean_trend", "mean_tmax_c", 0.27748621215286945, 0.03465339477852557], ["txx_trend", "txx_c", 0.08095238095238124, 0.08495915921011295]]) {
    const r = result[key], values = annual.map(a => Number(a[column]));
    const residuals = annual.map((a, i) => values[i] - r.mean_c - r.slope_c_per_year * (Number(a.year) - r.center_year));
    assert.ok(Math.abs(residuals.reduce((a, b) => a + b, 0)) < 1e-9);
    assert.ok(Math.abs(residuals.reduce((sum, e, i) => sum + e * (Number(annual[i].year) - r.center_year), 0)) < 1e-9);
    assert.ok(Math.abs(r.slope_c_per_decade - slope) < 1e-12);
    assert.ok(Math.abs(r.standard_error_c_per_decade - se) < 1e-12);
    assert.ok(Math.abs(r.mean_c - average(values)) < 1e-12);
  }
  for (const pair of Object.values(result.lag_sensitivity)) {
    assert.ok(pair.mean.normal_95_interval_c_per_decade[0] > 0);
    assert.ok(pair.txx.normal_95_interval_c_per_decade[0] < 0 && pair.txx.normal_95_interval_c_per_decade[1] > 0);
  }
});


test("uncertainty method explains propagation, links observations and publishes open references", async () => {
  const [html, source, catalogue, observation] = await Promise.all([
    readFile(new URL("dist/client/metody/vycisleni-a-prenos-nejistoty/index.html", root), "utf8"),
    readFile(new URL("app/components/UncertaintyArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/gmst/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.deepEqual([...body.matchAll(/<h2\b[^>]*>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak určujeme nejistotu výsledku", "Spolehlivost odhadu a jeho ověření", "Příklad na globální teplotě roku 2024", "Shrnutí",
  ]);
  assert.match(html, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  for (const text of ["1,187449", "0,021262", "0,003618", "1,187 ± 0,042", "0,02093", "0,02875", "1961–1990", "standardní nejistota", "Monte Carlo"]) assert.ok(body.includes(text), text);
  assert.match(body, /href="\/pozorovani\/gmst\/?(?:#[^"]+)?"/);
  assert.match(observation, /href="\/metody\/vycisleni-a-prenos-nejistoty\/?(?:#[^"]+)?"/);
  assert.doesNotMatch(body, /katex-error|Potřebné informace|citation--missing/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const conclusion = body.match(/<div class="method-conclusion">([\s\S]*?)<\/div>/)?.[1];
  assert.equal([...conclusion.matchAll(/<p>/g)].length, 2);
  assert.match(conclusion, /5° × 5°/);
  assert.match(conclusion, /1850–2025/);
  const limits = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(limits.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  const ids = new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]));
  assert.equal(ids.size, 11);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing uncertainty reference " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(match[1]) ? match[1] : match[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("HadCRUT uncertainty reproduces official values and preserves covariance between years", async () => {
  const base = new URL("public/data/methods/uncertainty/", root);
  const meta = JSON.parse(await readFile(new URL("provenance.json", base), "utf8"));
  for (const [name, info] of Object.entries(meta.files)) {
    const bytes = await readFile(new URL(name, base));
    assert.equal(createHash("sha256").update(bytes).digest("hex"), info.sha256);
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/uncertainty/" + name, root)), bytes);
  }
  const readCsv = async name => {
    const lines = (await readFile(new URL(name, base), "utf8")).trim().split(/\r?\n/);
    const keys = lines.shift().split(",");
    return lines.map(line => Object.fromEntries(line.split(",").map((v, i) => [keys[i], v])));
  };
  const original = await readCsv("ensemble-original.csv"), selected = await readCsv("realizations.csv");
  const previous = original.find(r => r.Time === "2023"), current = original.find(r => r.Time === "2024");
  assert.equal(original[0].Time, "1850");
  assert.ok(original.some(r => r.Time === "2025"));
  assert.equal(selected.length, 200);
  for (let i = 0; i < 200; i++) {
    const r = selected[i];
    assert.equal(Number(r.realization), i + 1);
    assert.equal(Number(r.anomaly_2023_c), Number(previous["Realization " + (i + 1)]));
    assert.equal(Number(r.anomaly_2024_c), Number(current["Realization " + (i + 1)]));
    assert.equal(Number(r.difference_c), Number(r.anomaly_2024_c) - Number(r.anomaly_2023_c));
  }
  const a = selected.map(r => Number(r.anomaly_2023_c)), b = selected.map(r => Number(r.anomaly_2024_c));
  const average = values => values.reduce((sum, v) => sum + v, 0) / values.length;
  const variance = values => values.reduce((sum, v) => sum + (v - average(values)) ** 2, 0) / (values.length - 1);
  const cov = a.reduce((sum, v, i) => sum + (v - average(a)) * (b[i] - average(b)), 0) / 199;
  const coverage = Number(current["Coverage uncertainty (1 sigma)"]);
  const u = Math.sqrt(variance(b) + coverage ** 2), mean = average(b);
  const result = JSON.parse(await readFile(new URL("results.json", base), "utf8"));
  const close = (x, y, tolerance = 1e-12) => assert.ok(Math.abs(x - y) < tolerance, `${x} != ${y}`);
  close(result.mean_c, mean);
  close(result.ensemble_standard_uncertainty_c, Math.sqrt(variance(b)));
  close(result.combined_standard_uncertainty_c, u);
  close(result.normal_95_interval_c[0], mean - 1.96 * u);
  close(result.normal_95_interval_c[1], mean + 1.96 * u);
  const component = (await readCsv("component-original.csv")).find(r => r.Time === "2024");
  const summary = (await readCsv("summary-original.csv")).find(r => r.Time === "2024");
  for (const [calculated, published] of [
    [mean, summary["Anomaly (deg C)"]],
    [Math.sqrt(variance(b)), component["Ensemble standard deviation (1 sigma)"]],
    [coverage, component["Coverage uncertainty (1 sigma)"]],
    [u, component["Total uncertainty (1 sigma)"]],
    [mean - 1.96 * u, summary["Lower confidence limit (2.5%)"]],
    [mean + 1.96 * u, summary["Upper confidence limit (97.5%)"]],
  ]) close(calculated, Number(published), 1e-7);
  const pair = result.pairing_2023_2024;
  close(pair.covariance_c2, cov);
  close(pair.correlation, cov / Math.sqrt(variance(a) * variance(b)));
  close(pair.paired_difference_standard_uncertainty_c, Math.sqrt(variance(b.map((v, i) => v - a[i]))));
  close(pair.paired_difference_standard_uncertainty_c, Math.sqrt(variance(a) + variance(b) - 2 * cov));
  close(pair.independent_assumption_standard_uncertainty_c, Math.sqrt(variance(a) + variance(b)));
  assert.ok(pair.paired_difference_standard_uncertainty_c < pair.independent_assumption_standard_uncertainty_c);
  assert.match(pair.scope, /only the uncertainty represented by the ensemble/);
});


test("reanalysis explains assimilation and links open references and observations", async () => {
  const [html, source, catalogue, observation] = await Promise.all([
    readFile(new URL("dist/client/metody/asimilace-dat-a-reanalyzy/index.html", root), "utf8"),
    readFile(new URL("app/components/ReanalysisArticle.tsx", root), "utf8"),
    readFile(new URL("dist/client/zdroje/index.html", root), "utf8"),
    readFile(new URL("dist/client/pozorovani/gmst/index.html", root), "utf8"),
  ]);
  const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(body);
  assert.deepEqual([...body.matchAll(/<h2\b[^>]*>(.*?)<\/h2>/g)].map(m => m[1]), [
    "Jak měření a model společně rekonstruují atmosféru", "Nejistoty a ověření reanalýzy", "Příklad tlaku u New Yorku v březnu 1888", "Shrnutí",
  ]);
  assert.match(html, /<p class="page-lead__meta">31\. října 2026<\/p>/);
  for (const text of ["pozorovací operátor", "kovariance", "Kalman", "1 001,84 hPa", "999,60 hPa", "1 003,09 hPa", "80 realizací", "41° s. š., 74° z. d."]) assert.ok(body.includes(text), text);
  assert.match(body, /href="\/pozorovani\/gmst\/?(?:#[^"]+)?"/);
  assert.match(observation, /href="\/metody\/asimilace-dat-a-reanalyzy\/?(?:#[^"]+)?"/);
  assert.doesNotMatch(body, /katex-error|Potřebné informace|citation--missing/);
  assert.doesNotMatch(body.replace(/<[^>]*>/g, "").replace(/&[^;\s]+;/g, ""), /;/);
  const conclusion = body.match(/<div class="method-conclusion">([\s\S]*?)<\/div>/)?.[1];
  assert.equal([...conclusion.matchAll(/<p>/g)].length, 2);
  for (const text of ["1836–2015", "1806–1835", "1. ledna 1940", "0,25° × 0,25°", "půdní"]) assert.ok(conclusion.includes(text), text);
  const limits = body.match(/<details\b[^>]*>([\s\S]*?)<\/details>/)?.[1];
  assert.ok(limits.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length <= 600);
  const ids = new Set([...source.matchAll(/<SourceLink id="([^"]+)"/g)].map(m => m[1]));
  assert.equal(ids.size, 12);
  for (const id of ids) {
    const card = catalogue.match(new RegExp('<article[^>]*id="' + id + '"[\\s\\S]*?<\\/article>'))?.[0];
    assert.ok(card, "Missing reanalysis reference " + id);
    assert.match(card, /Otevřít (veřejný zdroj|plný text|veřejná data)/);
    assert.doesNotMatch(card, /drive\.google\.com/);
    if (id.startsWith("DOI_")) assert.match(card, /Otevřít DOI/);
  }
  for (const match of body.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const file = /\.[a-z0-9]+$/i.test(match[1]) ? match[1] : match[1].replace(/\/$/, "") + "/index.html";
    await readFile(new URL("dist/client" + file, root));
  }
});

test("20CR example preserves the northern coordinate, units, time axis and published ensemble spread", async () => {
  const base = new URL("public/data/methods/reanalysis/", root);
  const meta = JSON.parse(await readFile(new URL("provenance.json", base), "utf8"));
  const originals = {};
  for (const [name, info] of Object.entries(meta.files)) {
    const bytes = await readFile(new URL(name, base));
    assert.equal(createHash("sha256").update(bytes).digest("hex"), info.sha256);
    assert.deepEqual(await readFile(new URL("dist/client/data/methods/reanalysis/" + name, root)), bytes);
    const text = bytes.toString("utf8");
    assert.match(text, /prmsl.lat\[1\]\s+41\.0/);
    assert.match(text, /prmsl.lon\[1\]\s+286\.0/);
    originals[name] = [...text.matchAll(/^\[\d+\]\[0\], (.+)$/gm)].map(m => Number(m[1]));
    assert.equal(originals[name].length, 48);
    const hours = text.match(/prmsl.time\[48\]\s*([^\n]+)/)[1].split(",").map(Number);
    assert.deepEqual(hours, Array.from({ length: 48 }, (_, i) => 773040 + 3 * i));
  }
  const lines = (await readFile(new URL("pressure.csv", base), "utf8")).trim().split(/\r?\n/);
  const header = lines.shift().split(","), rows = lines.map(line => Object.fromEntries(line.split(",").map((v, i) => [header[i], v])));
  assert.equal(rows.length, 48);
  rows.forEach((row, i) => {
    assert.equal(row.time_utc, new Date(Date.UTC(1888, 2, 10) + i * 3 * 3600000).toISOString().replace(".000Z", "Z"));
    assert.equal(Number(row.mean_hpa), originals["mean-original.txt"][i] / 100);
    // Spread is a member standard deviation, so it must not be divided by sqrt(80).
    assert.equal(Number(row.ensemble_sd_hpa), originals["spread-original.txt"][i] / 100);
  });
  const r = JSON.parse(await readFile(new URL("results.json", base), "utf8"));
  const mean = rows.slice(24, 32).reduce((sum, row) => sum + Number(row.mean_hpa), 0) / 8;
  assert.ok(Math.abs(mean - 1003.0873625) < 1e-10);
  assert.ok(Math.abs(r.march_13_mean_hpa - mean) < 1e-10);
  assert.equal(r.march_13_noon.mean_hpa, 1001.8442);
  assert.equal(r.march_13_noon.ensemble_sd_hpa, 3.5707092);
  assert.equal(r.minimum.mean_hpa, Math.min(...rows.map(row => Number(row.mean_hpa))));
  assert.equal(r.minimum.time_utc, "1888-03-13T21:00:00Z");
  assert.equal(r.minimum.mean_hpa, 999.5978);
  assert.equal(r.illustrative_update.analysis_hpa, 1003.2);
  assert.match(r.scope, /No station measurement, new assimilation, daily uncertainty interval or central storm minimum/);
});


test("observation-method section links resolve and the first two topic groups have return paths", async () => {
  const cache = new Map();
  async function article(path) {
    path = path.replace(/\/$/, "");
    if (!cache.has(path)) {
      const html = await readFile(new URL("dist/client" + path + "/index.html", root), "utf8");
      const body = html.match(/<article class="article-layout">([\s\S]*?)<\/article>/)?.[1];
      assert.ok(body, "Expected a full article at " + path);
      const ids = [...body.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
      assert.equal(new Set(ids).size, ids.length, "Duplicate section ID at " + path);
      cache.set(path, { body, ids: new Set(ids) });
    }
    return cache.get(path);
  }
  const processedGroups = ["gmst", "stratosfericke-ochlazovani", "narust-vlhkosti", "srazky-a-privalove-srazky", "vlny-veder", "tepelny-obsah-oceanu", "gmsl", "acidifikace-oceanu", "atmosfericka-koncentrace-co2"];
  for (const slug of processedGroups) {
    const path = "/pozorovani/" + slug;
    const { body } = await article(path);
    const links = [...body.matchAll(/href="(\/metody\/[^"#]+)(#[^"]+)?"/g)];
    assert.ok(links.length > 0, "No method connections for " + slug);
    for (const [, target, hash] of links) {
      const method = await article(target);
      assert.ok(hash, "Expected a specific method section for " + target);
      assert.ok(method.ids.has(decodeURIComponent(hash.slice(1))), "Missing destination: " + target + hash);
      assert.ok(hasArticleLink(method.body, path), "Missing return path: " + target + " -> " + path);
    }
  }
  // Check every published cross-category section link, including return links.
  for (const section of ["pozorovani", "metody"]) {
    for (const dir of await readdir(new URL("dist/client/" + section + "/", root), { withFileTypes: true })) {
      if (!dir.isDirectory()) continue;
      const html = await readFile(new URL(`dist/client/${section}/${dir.name}/index.html`, root), "utf8");
      const opposite = section === "pozorovani" ? "metody" : "pozorovani";
      for (const [, target, hash] of html.matchAll(/href="(\/(?:pozorovani|metody)\/[^"#]+)#([^"]+)"/g)) {
        if (!target.startsWith("/" + opposite + "/")) continue;
        const destination = await article(target);
        assert.ok(destination.ids.has(decodeURIComponent(hash)), `${section}/${dir.name}: missing ${target}#${hash}`);
      }
    }
  }
});
