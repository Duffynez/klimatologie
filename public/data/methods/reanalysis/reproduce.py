"""20CRv3si pressure near New York, 10-15 March 1888.
Python 3.10+ standard library. Run without options to verify, --write to regenerate.
Uses NOAA's already processed 80-member mean and spread, not a new assimilation.
"""
from pathlib import Path
from datetime import datetime, timedelta, timezone
import csv
import hashlib
import io
import json
import re
from statistics import mean
import sys

BASE = Path(__file__).resolve().parent

def read_subset(name):
    text = (BASE / name).read_text(encoding="utf8")
    values = re.findall(r"^\[(\d+)\]\[0\], ([^\n]+)", text, re.M)
    assert [int(i) for i, _ in values] == list(range(48))
    times = [float(t) for t in re.search(r"prmsl.time\[48\]\n([^\n]+)", text)[1].split(",")]
    lat = float(re.search(r"prmsl.lat\[1\]\n([^\n]+)", text)[1])
    lon = float(re.search(r"prmsl.lon\[1\]\n([^\n]+)", text)[1])
    assert lat == 41 and lon == 286, "Check returned coordinates, not dimension metadata ranges"
    assert times == [773040 + 3 * i for i in range(48)]
    epoch = datetime(1800, 1, 1, tzinfo=timezone.utc)
    return [(epoch + timedelta(hours=t)).strftime("%Y-%m-%dT%H:%M:%SZ") for t in times], [float(v) / 100 for _, v in values]

def calculate():
    provenance = json.loads((BASE / "provenance.json").read_text(encoding="utf8"))
    for name, info in provenance["files"].items():
        assert hashlib.sha256((BASE / name).read_bytes()).hexdigest() == info["sha256"], name
    times, pressure = read_subset("mean-original.txt")
    other_times, spread = read_subset("spread-original.txt")
    assert times == other_times and all(s > 0 for s in spread)
    rows = [{"time_utc": t, "mean_hpa": p, "ensemble_sd_hpa": s} for t, p, s in zip(times, pressure, spread)]
    day = [r for r in rows if r["time_utc"].startswith("1888-03-13")]
    assert len(day) == 8
    results = {
        "dataset": "20CRv3si", "members": 80, "latitude_north": 41, "longitude_east": -74,
        "count": len(rows), "start_utc": times[0], "end_utc": times[-1], "step_hours": 3,
        "march_13_mean_hpa": mean(r["mean_hpa"] for r in day),
        "march_13_noon": next(r for r in day if "T12:" in r["time_utc"]),
        "minimum": min(rows, key=lambda r: r["mean_hpa"]),
        "maximum": max(rows, key=lambda r: r["mean_hpa"]),
        "scope": "Derived from the published ensemble mean and spread. No station measurement, new assimilation, daily uncertainty interval or central storm minimum is computed.",
        "illustrative_update": {"background_hpa": 1000, "observation_hpa": 1004, "background_sd_hpa": 2, "observation_sd_hpa": 1, "gain": 4 / (4 + 1), "analysis_hpa": 1000 + 4 / (4 + 1) * (1004 - 1000)},
    }
    stream = io.StringIO(newline="")
    writer = csv.DictWriter(stream, fieldnames=list(rows[0]), lineterminator="\n")
    writer.writeheader(); writer.writerows(rows)
    return {"pressure.csv": stream.getvalue(), "results.json": json.dumps(results, ensure_ascii=False, indent=2) + "\n"}

if __name__ == "__main__":
    for name, text in calculate().items():
        target = BASE / name
        if "--write" in sys.argv:
            target.write_text(text, encoding="utf8", newline="\n")
        else:
            assert target.read_text(encoding="utf8") == text, name
    print("OK: 48 times, coordinates, source hashes, pressure conversion, daily mean and minimum.")
