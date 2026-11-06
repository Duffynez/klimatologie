// Klimatologie.eu, 6. 11. 2026, CC BY 4.0. Spuštění: node vypocty.mjs
// Ilustrační model homogenního poloprostoru, stálé vlastnosti, čisté vedení tepla.
// Roční sinusový cyklus bez tání. Nejde o měřenou teplotní řadu.
// Parametr alpha = 0.016 cm2/s: Lachenbruch et al. 1982, rovnice 19b.
// DOI: 10.3133/ofr82535. Objemové skupenské teplo 73 cal/cm3: rovnice 31c.
// Jednotka HFU = 10^-6 cal/(cm2 s), tabulka 2. Použita kalorie 4.184 J.
// Pro energetický příklad zvolena tloušťka 0.5 m a objemový podíl ledu 0.4.
const alpha = 0.016 * 1e-4;
const period = 365.25 * 86400;
const dampingDepth = Math.sqrt(alpha * period / Math.PI);
const rows = [
  ["vstup", "teplotni_vodivost", alpha, "m2/s"],
  ["vstup", "perioda", period, "s"],
  ["model", "hloubka_e_nasobneho_utlumu", dampingDepth, "m"],
];
for (const depth of [0, 4, 8]) {
  rows.push(["model", `pomer_amplitud_v_${depth}_m`, Math.exp(-depth / dampingDepth), "1"]);
  rows.push(["model", `zpozdeni_v_${depth}_m`, period * depth / (2 * Math.PI * dampingDepth) / 86400, "den"]);
}
rows.push(
  ["prevod", "geotermalni_tok", 1.3 * 1e-6 * 4.184 * 1e4, "W/m2"],
  ["prevod", "odhad_meze_tok_plus_minus", 0.2 * 1e-6 * 4.184 * 1e4, "W/m2"],
  ["vstup", "objemove_skupenske_teplo_ledu", 73 * 4.184, "MJ/m3"],
  ["zvoleny_vstup", "tloustka_vrstvy", 0.5, "m"],
  ["zvoleny_vstup", "objemovy_podil_ledu", 0.4, "1"],
  ["model", "energie_pouze_na_tani", 0.5 * 0.4 * 73 * 4.184, "MJ/m2"],
);
console.log("typ,velicina,hodnota,jednotka\n" + rows.map(row => row.map(value => typeof value === "number" ? Number(value.toPrecision(9)) : value).join(",")).join("\n"));
