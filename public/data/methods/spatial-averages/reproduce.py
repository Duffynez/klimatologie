"""Reproduce the January 2024 CRUTEM5 grid-cell average using Python 3 only.
Run in a directory containing cells.csv, results.json and provenance.json.
Data: CRU / Met Office, Open Government Licence v3.0.
"""
import csv
import hashlib
import json
import math
from pathlib import Path

BASE = Path(__file__).resolve().parent
provenance = json.loads((BASE / "provenance.json").read_text(encoding="utf8"))
raw = (BASE / "cells.csv").read_bytes()
assert hashlib.sha256(raw).hexdigest() == provenance["cells_sha256"]
with (BASE / "cells.csv").open(encoding="utf8", newline="") as stream:
    rows = list(csv.DictReader(stream))
assert len(rows) == 16
assert all(row["month"] == "2024-01" for row in rows)
assert len({(row["latitude_deg"], row["longitude_deg"]) for row in rows}) == 16
values = [float(row["anomaly_c"]) for row in rows]
assert all(math.isfinite(value) for value in values)
weights = [math.cos(math.radians(float(row["latitude_deg"]))) for row in rows]
# Exact spherical areas apart from the common squared Earth radius.
areas = [
    math.radians(float(row["east_deg"]) - float(row["west_deg"]))
    * (math.sin(math.radians(float(row["north_deg"])))
       - math.sin(math.radians(float(row["south_deg"]))))
    for row in rows
]
weighted_mean = sum(w * x for w, x in zip(weights, values)) / sum(weights)
area_mean = sum(a * x for a, x in zip(areas, values)) / sum(areas)
equal_mean = sum(values) / len(values)
assert math.isclose(weighted_mean, area_mean, abs_tol=1e-12)
expected = json.loads((BASE / "results.json").read_text(encoding="utf8"))
assert math.isclose(weighted_mean, expected["area_mean_c"], abs_tol=1e-12)
assert math.isclose(equal_mean, expected["equal_cell_mean_c"], abs_tol=1e-12)
print(f"Area-weighted anomaly: {weighted_mean:+.10f} deg C")
print(f"Equal-cell anomaly:   {equal_mean:+.10f} deg C")
print(f"Difference:           {weighted_mean-equal_mean:+.10f} deg C")
print("Reference: January 1961-1990. All 16 cells available.")
print("Whole-cell weighting, no land-fraction mask, no interpolation.")
