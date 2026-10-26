"""Reproduce the article's three pixels using only Python's standard library.

Download samples.csv and example.json beside this script, then run:
    python reproduce.py
The integers are USGS Collection 2 Level-2 data, NOT raw detector counts.
"""
import csv
import hashlib
import json
from pathlib import Path

base = Path(__file__).resolve().parent
meta = json.loads((base / "example.json").read_text(encoding="utf-8"))
csv_text = (base / "samples.csv").read_text(encoding="utf-8")
assert hashlib.sha256(csv_text.encode()).hexdigest() == meta["csv_sha256_lf"]
print("Pixel  green       red         NIR         SWIR        NDSI      NDVI")
for row in csv.DictReader(csv_text.splitlines()):
    qa, sat, aerosol = (int(row[k]) for k in ("qa_pixel", "qa_radsat", "qa_aerosol"))
    assert qa & 31 == 0 and sat == 0 and (aerosol >> 6) & 3 != 3
    bands = ("green", "red", "nir08", "swir16")
    rho = {b: int(row[b]) * meta["reflectance_scale"] + meta["reflectance_offset"] for b in bands}
    assert all(0 <= v <= 1 for v in rho.values())
    ndsi = (rho["green"] - rho["swir16"]) / (rho["green"] + rho["swir16"])
    ndvi = (rho["nir08"] - rho["red"]) / (rho["nir08"] + rho["red"])
    expected = next(x for x in meta["results"] if x["label"] == row["label"])
    assert abs(ndsi - expected["ndsi"]) < 1e-12
    assert abs(ndvi - expected["ndvi"]) < 1e-12
    print(row["label"], "    ", "  ".join(f"{rho[b]:.7f}" for b in bands), f"  {ndsi:.6f}  {ndvi:.6f}")
