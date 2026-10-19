"""Reproduce published control differences and the separate SOP 6a illustration.
Python 3, standard library only. Keep example.json beside this script.
"""
import json
from decimal import Decimal as D
from pathlib import Path

data = json.loads(Path(__file__).with_name("example.json").read_text(encoding="utf-8"))
actual = data["actual_experiment"]
print("Actual experiment: differences from displayed rounded pHT values")
for row in actual["results"]:
    difference = D(row["pHT"]) - D(actual["reference_pHT"])
    print(f'{row["electrode"]}: {difference:+.3f}')
illustration = data["handbook_illustration"]
v = {key: D(value) for key, value in illustration.items()
     if key.startswith(("pHT_", "E_", "ideal_slope"))}
slope = (v["E_AMP_mV"] - v["E_TRIS_mV"]) / (v["pHT_TRIS"] - v["pHT_AMP"])
pht = v["pHT_TRIS"] + (v["E_TRIS_mV"] - v["E_sample_mV"]) / v["ideal_slope_mV_per_pH"]
print("Separate methodological illustration, not identified as an ocean sample")
print(f"Observed slope: {slope:.2f} mV per pH")
print(f"Sample pHT at 25 C: {pht:.4f}")
