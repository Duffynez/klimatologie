"""Reproduce the geothermal-background subtraction for borehole CZ-hv-105n.
Python 3.10+, standard library only. No network access.
This calculates the input to a temperature-history inversion, not the inversion.
"""
from pathlib import Path
import csv
import hashlib
import io
import json

BASE = Path(__file__).resolve().parent
RAW = "huang2016-CZ-hv-105n-original.txt"
metadata = json.loads((BASE / "provenance.json").read_text(encoding="utf-8"))
raw = (BASE / RAW).read_bytes()
assert hashlib.sha256(raw).hexdigest() == metadata["sha256"][RAW], "Input checksum differs"
rows = []
for line in raw.decode("utf-8").splitlines():
    parts = line.split()
    if len(parts) == 2:
        try:
            rows.append(tuple(map(float, parts)))
        except ValueError:
            pass
assert len(rows) == 38
assert all(rows[i][0] < rows[i + 1][0] for i in range(len(rows) - 1))
# Same depth window and background-fitting interval as Cuesta-Valero et al. 2021.
selected = [(z, t) for z, t in rows if 15 <= z <= 300]
deep = [(z, t) for z, t in selected if 200 <= z <= 300]
z_mean = sum(z for z, t in deep) / len(deep)
t_mean = sum(t for z, t in deep) / len(deep)
gradient = sum((z-z_mean)*(t-t_mean) for z, t in deep) / sum((z-z_mean)**2 for z, t in deep)
intercept = t_mean - gradient*z_mean
output = io.StringIO(newline="")
writer = csv.writer(output, lineterminator="\n")
writer.writerow(["depth_m", "measured_degC", "background_degC", "anomaly_K", "used_for_background_fit"])
for z, t in selected:
    background = intercept + gradient*z
    writer.writerow([f"{z:.2f}", f"{t:.3f}", f"{background:.12f}", f"{t-background:.12f}", int(200 <= z <= 300)])
(BASE / "profile.csv").write_bytes(output.getvalue().encode("utf-8"))
results = {
    "original_points": len(rows), "selected_points": len(selected),
    "background_fit_points": len(deep), "fit_depth_m": [200, 300],
    "intercept_degC": intercept, "gradient_K_per_m": gradient,
    "gradient_K_per_km": gradient*1000,
    "at_50m": {"measured_degC": dict(rows)[50], "background_degC": intercept+50*gradient,
               "anomaly_K": dict(rows)[50]-intercept-50*gradient},
    "scope": "OLS background and subsurface residuals only. No inversion of past surface temperatures.",
}
(BASE / "results.json").write_bytes((json.dumps(results, ensure_ascii=False, indent=2)+"\n").encode("utf-8"))
print(json.dumps(results, ensure_ascii=False, indent=2))
