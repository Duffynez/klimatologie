"""Reproduce NOAA table A1 ratios and summaries. Python 3, standard library only.

Save noaa-table-a1.csv and example.json beside this script, then run:
    python reproduce.py
The conversion from response ratio to ppb is NOT reconstructed: the original
table does not supply the calibration coefficients. Published ppb values are inputs.
"""
import csv
import hashlib
import json
from pathlib import Path
from statistics import mean, stdev

BASE = Path(__file__).resolve().parent


def reproduce():
    metadata = json.loads((BASE / "example.json").read_text(encoding="utf-8"))
    text = (BASE / "noaa-table-a1.csv").read_text(encoding="utf-8")
    digest = hashlib.sha256(text.encode("utf-8")).hexdigest()
    assert digest == metadata["table"]["sha256_lf"], "The table transcription has changed"
    rows = list(csv.DictReader(text.splitlines()))
    assert len(rows) == 41
    assert all(r["date"] == "2015-07-23" for r in rows)
    assert [r["port"] for r in rows] == ["R" if i % 2 == 0 else "S" for i in range(41)]
    assert [r["time"] for r in rows] == sorted(r["time"] for r in rows)
    results = []
    for i in range(1, 40, 2):
        before, sample, after = rows[i - 1:i + 2]
        reference_mean = (int(before["area"]) + int(after["area"])) / 2
        ratio = int(sample["area"]) / reference_mean
        # NOAA prints the ratio to nine decimal places.
        assert abs(ratio - float(sample["reported_ratio"])) <= 0.5e-9
        results.append({
            "time": sample["time"], "reference_mean": reference_mean,
            "ratio": ratio, "reported_ch4_ppb": float(sample["reported_ch4_ppb"]),
        })
    values = [r["reported_ch4_ppb"] for r in results]
    summary = {
        "analyses": len(values), "sum_ppb": round(sum(values), 2),
        "mean_ppb": mean(values), "sample_sd_ppb": stdev(values),
        "first_reference_mean": results[0]["reference_mean"],
        "first_ratio": results[0]["ratio"],
    }
    assert summary["sum_ppb"] == 37035.83
    assert abs(summary["mean_ppb"] - 1851.7915) < 1e-9
    assert round(summary["sample_sd_ppb"], 2) == 0.74
    assert round(mean(r["ratio"] for r in results), 8) == 0.99862691
    return results, summary


if __name__ == "__main__":
    _, summary = reproduce()
    print(json.dumps(summary, indent=2))
    print("All 20 response ratios match NOAA's published precision.")
    print("Mean and standard deviation use the published calibrated ppb values.")
