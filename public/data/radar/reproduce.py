"""Reproduce the article's conditional Z-R calculation, using Python only.

Place reflectivity.csv next to this file and run: python reproduce.py
Input: one measured, previously processed NOAA Level II reflectivity.
Assumption: the tropical rain relation Z = 250 R**1.2 in conventional units,
as documented by Fulton et al. (1998). This is not NOAA's operational QPE.
No surface gauge measurement or time accumulation is calculated here.
"""

import csv
import json
from pathlib import Path

base = Path(__file__).resolve().parent
with (base / "reflectivity.csv").open(encoding="utf-8", newline="") as stream:
    rows = list(csv.DictReader(stream))
if len(rows) != 1:
    raise ValueError("Expected exactly one documented radar sample")
sample = rows[0]
z_dbz = float(sample["reflectivity_dbz"])
z_linear = 10 ** (z_dbz / 10)
a, b = 250.0, 1.2
rain_rate = (z_linear / a) ** (1 / b)
result = {
    "station": sample["station"],
    "observed_at_utc": sample["observed_at_utc"],
    "observed_reflectivity_dbz": z_dbz,
    "linear_reflectivity_mm6_m_minus3": z_linear,
    "assumed_zr_a": a,
    "assumed_zr_b": b,
    "estimated_rain_rate_mm_h": rain_rate,
    "scope": "One radar volume, one time, assumed tropical Z-R relation. Not a surface rain total.",
}
(base / "result.json").write_text(json.dumps(result, indent=2) + "\n", encoding="utf-8", newline="\n")
print(json.dumps(result, indent=2))
