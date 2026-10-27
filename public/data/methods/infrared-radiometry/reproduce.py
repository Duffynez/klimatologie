"""Reproduce pixel C using Python's standard library. Run beside sample.csv/example.json."""
import csv
import hashlib
import json
import math
from pathlib import Path

base = Path(__file__).resolve().parent
meta = json.loads((base / "example.json").read_text(encoding="utf-8"))
for name, expected in meta["sha256"].items():
    assert hashlib.sha256((base / name).read_bytes()).hexdigest() == expected, name
with (base / "sample.csv").open(encoding="utf-8", newline="") as stream:
    row = next(csv.DictReader(stream))
assert row["label"] == "C"
assert int(row["qa_pixel"]) & 31 == 0
assert int(row["qa_radsat"]) == 0
assert int(row["lwir11"]) > 0
L, U, D = (int(row[n]) * 0.001 for n in ("trad", "urad", "drad"))
tau, emissivity = (int(row[n]) * 0.0001 for n in ("atran", "emis"))
assert 0 < tau <= 1 and 0 < emissivity <= 1
B = ((L - U) / tau - (1 - emissivity) * D) / emissivity
def temperature(radiance):
    return meta["K2"] / math.log1p(meta["K1"] / radiance)
result = {
    "blackbody_equivalent_radiance": B,
    "brightness_temperature_K": temperature(L),
    "approximate_surface_temperature_K": temperature(B),
    "product_surface_temperature_K": int(row["lwir11"]) * 0.00341802 + 149,
}
for key, value in result.items():
    assert math.isclose(value, meta["results"][key], abs_tol=1e-9), key
result["approximate_surface_temperature_C"] = temperature(B) - 273.15
result["product_surface_temperature_C"] = result["product_surface_temperature_K"] - 273.15
result["product_uncertainty_K"] = int(row["qa"]) * 0.01
print(json.dumps(result, indent=2))
