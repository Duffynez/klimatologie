"""Extract the article's one observed reflectivity value from NOAA NEXRAD Level II.

Python 3.11+ and metpy==1.7.1 are required. Run:
    python extract.py [KHGX20170827_120416_V06]
Without an argument, download the original public file into the current folder.
The extraction selects a fixed location in the archive, not a statistical sample.
"""

import csv
from datetime import datetime, timedelta, timezone
import hashlib
from pathlib import Path
import sys
from urllib.request import urlretrieve

from metpy.io import Level2File

NAME = "KHGX20170827_120416_V06"
URL = "https://unidata-nexrad-level2.s3.amazonaws.com/2017/08/27/KHGX/" + NAME
SHA256 = "70995375338dd2287ea39fb81ed836d3680b2935ed66ca2b9087446e5367ae5b"
path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(NAME)
if not path.exists():
    urlretrieve(URL, path)
if hashlib.sha256(path.read_bytes()).hexdigest() != SHA256:
    raise ValueError("Original file does not match the documented SHA-256")

radar = Level2File(path)
sweep_index, ray_index, gate_index = 0, 160, 112
header, volume, _, _, moments = radar.sweeps[sweep_index][ray_index]
reflectivity_header, reflectivity = moments[b"REF"]
observed_at = datetime(1970, 1, 1, tzinfo=timezone.utc) + timedelta(
    days=header.date - 1, milliseconds=header.time_ms
)
row = {
    "station": header.stid.decode(),
    "observed_at_utc": observed_at.isoformat(timespec="milliseconds").replace("+00:00", "Z"),
    "sweep_index": sweep_index,
    "ray_index": ray_index,
    "gate_index": gate_index,
    "azimuth_deg": header.az_angle,
    "elevation_deg": header.el_angle,
    "range_km": reflectivity_header.first_gate + gate_index * reflectivity_header.gate_width,
    "reflectivity_dbz": float(reflectivity[gate_index]),
}
target = Path(__file__).resolve().with_name("reflectivity.csv")
with target.open("w", newline="", encoding="utf-8") as stream:
    writer = csv.DictWriter(stream, fieldnames=row.keys(), lineterminator="\n")
    writer.writeheader()
    writer.writerow(row)
print(target.name, row)
