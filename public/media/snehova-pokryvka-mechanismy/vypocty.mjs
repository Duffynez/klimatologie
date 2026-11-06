// Ilustrační příklady, nikoli terénní data nebo předpověď konkrétní sezony.
// Node.js: node public/media/snehova-pokryvka-mechanismy/vypocty.mjs
// Teplo tání: zaokrouhleno na 334 kJ/kg podle Osborna 1939, DOI 10.6028/jres.023.043.
export const examples = Object.freeze({
  netEnergyFluxWm2: 30,
  durationSeconds: 86400,
  latentHeatJkg: 334000,
  largerStockMm: 200,
  largerNetLossMmDay: 10,
  smallerStockMm: 80,
  smallerNetLossMmDay: 8,
});
export function calculate() {
  const p = examples;
  const energyJm2 = p.netEnergyFluxWm2 * p.durationSeconds;
  return {
    energyJm2,
    meltedIceKgM2: energyJm2 / p.latentHeatJkg,
    meltwaterEquivalentMm: energyJm2 / p.latentHeatJkg,
    largerStockDurationDays: p.largerStockMm / p.largerNetLossMmDay,
    smallerStockDurationDays: p.smallerStockMm / p.smallerNetLossMmDay,
  };
}
console.log(JSON.stringify(calculate(), null, 2));
