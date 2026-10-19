"""Reproduce the INITIAL Gran estimate, not the final nonlinear SOP 3b fit.

Python 3, standard library only. Save beside example.json and sop3b-titration.csv.
Source: Dickson et al. (2007), Guide, SOP 3b v3.02 (2016), sections 7.3-7.4.
Formulas are implemented independently. Input data and the final reported value
are transcribed from the cited guide. No measured values are manufactured.
"""
from pathlib import Path
import csv
import hashlib
import json
import math
from statistics import mean

base = Path(__file__).resolve().parent
meta = json.loads((base / "example.json").read_text(encoding="utf-8-sig"))
csv_text = (base / "sop3b-titration.csv").read_text(encoding="utf-8-sig")
assert hashlib.sha256(csv_text.encode()).hexdigest() == meta["csv_sha256_lf"]
rows = list(csv.DictReader(csv_text.splitlines()))
assert len(rows) == 22
selected = [r for r in rows if r["used_for_gran"] == "1"]
m0 = meta["sample_mass_kg"]
density = meta["acid_density_g_per_ml"]
acid_c = meta["acid_concentration_mol_per_kg_solution"]
temperature_K = meta["temperature_C"] + 273.15
q = meta["gas_constant_J_per_mol_K"] * temperature_K / meta["faraday_constant_C_per_mol"]
slope_V_per_decade = q * math.log(10)
e_ref = meta["gran_reference_potential_V"]
masses = [float(r["volume_ml"]) * density / 1000 for r in selected]
# A constant rescaling by exp(-E_ref/q) leaves the x intercept unchanged.
g = [(m0 + m) * 10 ** ((float(r["potential_V"]) - e_ref) / slope_V_per_decade)
     for m, r in zip(masses, selected)]
mean_x, mean_y = mean(masses), mean(g)
slope = sum((x - mean_x) * (y - mean_y) for x, y in zip(masses, g)) / sum((x - mean_x)**2 for x in masses)
intercept_kg = mean_y - slope * mean_x
equivalent_mass_kg = -intercept_kg / slope
gran_alkalinity = equivalent_mass_kg * acid_c / m0 * 1e6
reported_final = meta["published_final_alkalinity_umol_per_kg"]

if __name__ == "__main__":
    print(f"Selected points: {len(selected)} of {len(rows)}")
    print(f"Ideal electrode slope: {slope_V_per_decade * 1000:.6f} mV per decade")
    print(f"Gran line: G [kg] = {slope:.9f} * m [kg] {intercept_kg:+.9f} kg")
    print(f"Equivalent acid mass: {equivalent_mass_kg * 1000:.9f} g")
    print(f"Equivalent acid volume: {equivalent_mass_kg * 1000 / density:.9f} mL")
    print(f"INITIAL Gran estimate: {gran_alkalinity:.6f} umol/kg")
    print(f"FINAL nonlinear result REPORTED BY GUIDE: {reported_final:.2f} umol/kg")
    print(f"Initial minus final: {gran_alkalinity - reported_final:.6f} umol/kg")
    print("This difference is an algorithmic refinement, not a measurement-uncertainty estimate.")
