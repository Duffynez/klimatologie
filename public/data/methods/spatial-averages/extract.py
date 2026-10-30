"""Recreate cells.csv from the preserved original CRUTEM5 NetCDF file.
Requires Python 3 and netCDF4 (pip install netCDF4).
Data: CRU / Met Office, Open Government Licence v3.0.
"""
import csv
import hashlib
import io
import json
from pathlib import Path
from netCDF4 import Dataset, num2date

BASE = Path(__file__).resolve().parent
provenance = json.loads((BASE / "provenance.json").read_text(encoding="utf8"))
original = BASE / provenance["saved_as"]
assert hashlib.sha256(original.read_bytes()).hexdigest() == provenance["source_sha256"]
rows = []
with Dataset(original) as ds:
    assert ds.version == "CRUTEM.5.2.0.0"
    assert ds["tas"].units == "K"
    times = num2date(ds["time"][:], ds["time"].units, calendar=ds["time"].calendar)
    ti = next(i for i, t in enumerate(times) if (t.year, t.month) == (2024, 1))
    for j, lat in enumerate(ds["latitude"][:]):
        for k, lon in enumerate(ds["longitude"][:]):
            if 45 < lat < 65 and 5 < lon < 25:
                anomaly = ds["tas"][ti, j, k]
                assert not anomaly.mask, "Selected cell is missing"
                rows.append(dict(
                    month="2024-01", latitude_deg=float(lat), longitude_deg=float(lon),
                    south_deg=float(ds["latitude_bnds"][j, 0]),
                    north_deg=float(ds["latitude_bnds"][j, 1]),
                    west_deg=float(ds["longitude_bnds"][k, 0]),
                    east_deg=float(ds["longitude_bnds"][k, 1]),
                    anomaly_c=float(anomaly),
                ))
assert len(rows) == 16
buffer = io.StringIO(newline="")
writer = csv.DictWriter(buffer, fieldnames=list(rows[0]), lineterminator=chr(10))
writer.writeheader()
writer.writerows(rows)
raw = buffer.getvalue().encode("utf8")
assert hashlib.sha256(raw).hexdigest() == provenance["cells_sha256"]
(BASE / "cells.csv").write_bytes(raw)
print("Recreated 16 cells, matching the published SHA-256.")
