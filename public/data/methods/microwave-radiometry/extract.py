"""Download the original NOAA/RSS orbit and verify the published sample.

Requires h5py (and its numpy dependency). Run beside example.json and sample.csv.
The 6.5 MB original orbit is saved only if it is not already present.
"""
import csv
import hashlib
import json
from pathlib import Path
from urllib.request import urlopen
import h5py

base = Path(__file__).resolve().parent
meta = json.loads((base / "example.json").read_text(encoding="utf-8"))
path = base / meta["source_filename"]
if not path.exists():
    with urlopen(meta["source_url"], timeout=90) as response:
        path.write_bytes(response.read())
assert hashlib.sha256(path.read_bytes()).hexdigest() == meta["source_sha256"]
i, j = meta["scan_index_zero_based"], meta["footprint_index_zero_based"]
with h5py.File(path) as source:
    row = {
        "scan": i, "footprint": j,
        "latitude_deg": float(source["latitude_lores"][i, j]) * 0.01,
        "longitude_deg": float(source["longitude_lores"][i, j]) * 0.01,
    }
    for channel in ("19V", "19H", "22V", "37V"):
        row[f"TB_{channel}_K"] = float(source[f"fcdr_brightness_temperature_{channel}"][i, j])
    row["land_percentage_raw"] = int(source["land_percentage_lores"][i, j])
    row["ice_flag"] = int(source["ice_flag_lores"][i, j])
    for k, value in enumerate(source["iqual_flag_lores"][:, i], start=1):
        row[f"quality_{k}"] = int(value)
out = base / "sample-reextracted.csv"
with out.open("w", encoding="utf-8", newline="") as stream:
    writer = csv.DictWriter(stream, fieldnames=list(row), lineterminator="\n")
    writer.writeheader()
    writer.writerow(row)
assert out.read_bytes() == (base / "sample.csv").read_bytes()
print("Original NOAA/RSS data reproduce sample.csv byte for byte.")
