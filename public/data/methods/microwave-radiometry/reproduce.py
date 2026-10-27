"""Recompute the published single-footprint example. Python standard library only."""
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
assert all(int(row[f"quality_{i}"]) == 0 for i in range(1, 15))
assert int(row["land_percentage_raw"]) == 0
v, h, v37, v22 = [float(row[f"TB_{c}_K"]) for c in ("19V", "19H", "37V", "22V")]
assert min(v, h, v37, v22) > 0
p = (v - h) / (v + h)
g = (v37 - v) / (v37 + v)
g22 = (v22 - v) / (v22 + v)
assert g <= 0.05  # The historical GR weather screen is not triggered.
water, first, old = meta["tie_points_K"]

def constraints(t):
    v, h, w = t
    return (v - h - p * (v + h), w - v - g * (w + v))

w, y, o = map(constraints, (water, first, old))
a, b = y[0] - w[0], o[0] - w[0]
c, d = y[1] - w[1], o[1] - w[1]
r, s = -w[0], -w[1]
det = a * d - b * c
assert abs(det) > 1
f, m = (r * d - b * s) / det, (a * s - r * c) / det
assert 0 <= f <= 1 and 0 <= m <= 1 and f + m <= 1
result = {"P": p, "G": g, "G22": g22, "f": f, "m": m, "total_fraction": f + m}
for name, value in result.items():
    assert math.isclose(value, meta["results"][name], abs_tol=1e-12), name
# Check the reconstructed mixture against both observed ratios.
mixture = [(1-f-m)*water[k] + f*first[k] + m*old[k] for k in range(3)]
assert math.isclose((mixture[0]-mixture[1])/(mixture[0]+mixture[1]), p, abs_tol=1e-12)
assert math.isclose((mixture[2]-mixture[0])/(mixture[2]+mixture[0]), g, abs_tol=1e-12)
print(json.dumps(result, indent=2))
