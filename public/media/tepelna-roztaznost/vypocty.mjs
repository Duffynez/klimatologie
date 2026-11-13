// Klimatologie.eu, 2026-11-13. CC BY 4.0. Node.js, no dependencies.
// Historical one-atmosphere equation: Millero & Poisson (1981), pp. 628–629.
// https://doi.org/10.1016/0198-0149(81)90122-9
// T is IPTS-68 temperature (degrees C), S is practical salinity (dimensionless).
// This teaching example is NOT TEOS-10 and is NOT a reconstruction of ocean observations.
import { writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export function density(T, S) {
  if (!Number.isFinite(T) || !Number.isFinite(S) || T < 0 || T > 40 || S < 0 || S > 40) throw new RangeError('Example limited to T=0–40 °C and S=0–40 at one atmosphere');
  const water = 999.842594 + .06793952*T - .009095290*T**2 + .0001001685*T**3 - .000001120083*T**4 + 6.536332e-9*T**5;
  const A = .824493 - .0040899*T + .000076438*T**2 - 8.2467e-7*T**3 + 5.3875e-9*T**4;
  const B = -.00572466 + .00010227*T - 1.6546e-6*T**2;
  return water + A*S + B*S**1.5 + .00048314*S**2;
}

export function calculate() {
  const rows = [];
  for (let T = 0; T <= 30; T += 1) rows.push({ series: 'temperature', T, S: 35, rho: density(T, 35) });
  for (let S = 30; S <= 40; S += .5) rows.push({ series: 'salinity', T: 15, S, rho: density(15, S) });
  // Each sample initially occupies 1 m³. Its mass is conserved during warming.
  const warming = [5, 25].map(T => ({ initial_T: T, final_T: T+1, S: 35, initial_volume_m3: 1, mass_kg: density(T, 35), increase_ml: (density(T, 35)/density(T+1, 35)-1)*1e6 }));
  return { rows, warming, check_5C_35: density(5, 35) };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = calculate();
  const csv = 'series,temperature_IPTS68_C,practical_salinity,pressure_atm,density_kg_m3\n' + result.rows.map(r => `${r.series},${r.T},${r.S},1,${r.rho.toFixed(8)}`).join('\n') + '\n';
  writeFileSync(new URL('hustota-vypocet.csv', import.meta.url), csv);
  writeFileSync(new URL('priklady.json', import.meta.url), JSON.stringify({ model: 'Millero and Poisson 1981, 1 atm, IPTS-68', ...result, rows: undefined }, null, 2) + '\n');
  console.log(JSON.stringify({ check_5C_35: result.check_5C_35, warming: result.warming }, null, 2));
}
