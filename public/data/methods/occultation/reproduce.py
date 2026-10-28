"""Reproduce the final dry-temperature conversion. Python 3, no dependencies by default."""
import argparse
import csv
import hashlib
import json
from pathlib import Path

base = Path(__file__).resolve().parent
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--profile", type=Path, help="Optional original NetCDF, requires netCDF4")
args = parser.parse_args()
meta = json.loads((base / "provenance.json").read_text(encoding="utf-8"))
raw = (base / "profile-extract.csv").read_bytes()
if hashlib.sha256(raw).hexdigest() != meta["extract_sha256"]:
    raise ValueError("The CSV differs from the published extract")
rows = list(csv.DictReader(raw.decode("utf-8").splitlines()))
for row in rows:
    temperature = 77.6 * float(row["Pres"]) / float(row["Ref"]) - 273.15
    difference = temperature - float(row["Temp"])
    if abs(difference) > 0.00002:
        raise ValueError("Computed temperature differs from the stored float32 value")
    print(f"{float(row['MSL_alt']):.4f} km: {temperature:.2f} C, stored difference {difference:+.8f} K")
if args.profile:
    import netCDF4
    if hashlib.sha256(args.profile.read_bytes()).hexdigest() != meta["profile_sha256"]:
        raise ValueError("Original file checksum differs. Check the data version.")
    with netCDF4.Dataset(args.profile) as dataset:
        if int(dataset.bad) != 0:
            raise ValueError("Profile failed provider quality control")
        for row in rows:
            i = int(row["index_zero_based"])
            for name in meta["variables"]:
                if float(dataset[name][i]) != float(row[name]):
                    raise ValueError(f"Source mismatch: {name}, index {i}")
    print("All extracted values match the original profile exactly.")
print("Agreement is internal consistency, not independent validation.")
