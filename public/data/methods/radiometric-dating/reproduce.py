"""Calibrate Joerin et al. (2006), Table 3, Fo-101 with IntCal20.
Python 3 standard library. Run in any directory. No network required.
One-year grid, linear interpolation of curve mean and sigma, independent
Gaussian errors, uniform calendar-age prior on 0..55000 cal BP.
Outputs equal-tailed 95.4% interval (not an HPD region) and posterior median.
"""
from pathlib import Path
import bisect
import csv
import hashlib
import json
import math

BASE = Path(__file__).resolve().parent

def calibrate():
    meta = json.loads((BASE / "provenance.json").read_text(encoding="utf8"))
    for name, digest in meta["sha256"].items():
        assert hashlib.sha256((BASE / name).read_bytes()).hexdigest() == digest, name
    sample = next(csv.DictReader((BASE / "sample.csv").read_text().splitlines()))
    age, sigma = float(sample["radiocarbon_age_bp"]), float(sample["sigma_14c_years"])
    curve = sorted(tuple(map(float, line.split(",")[:3])) for line in
                   (BASE / "intcal20-original.14c").read_text(encoding="utf8").splitlines()
                   if line and not line.startswith("#"))
    xs = [r[0] for r in curve]
    rows = []
    for year in range(55001):
        j = min(max(bisect.bisect_right(xs, year) - 1, 0), len(curve) - 2)
        x0, m0, s0 = curve[j]
        x1, m1, s1 = curve[j + 1]
        f = (year - x0) / (x1 - x0)
        mean, csigma = m0 + f * (m1 - m0), s0 + f * (s1 - s0)
        variance = sigma**2 + csigma**2
        weight = math.exp(-0.5 * (age - mean)**2 / variance) / math.sqrt(variance)
        rows.append([year, mean, csigma, weight])
    total = math.fsum(r[3] for r in rows)
    for row in rows:
        row[3] /= total
    cumulative = 0.0
    quantiles = {}
    for row in rows:
        cumulative += row[3]
        for q in (0.023, 0.5, 0.977):
            if q not in quantiles and cumulative >= q:
                quantiles[q] = row[0]
    result = {
        "sample": sample["sample"], "lab_code": sample["lab_code"],
        "radiocarbon_age_bp": age, "sigma_14c_years": sigma,
        "equivalent_fraction_modern": math.exp(-age / 8033),
        "calibration": "IntCal20", "curve_rows": len(curve),
        "grid_step_years": 1, "median_cal_bp": quantiles[0.5],
        "equal_tailed_95_4_cal_bp": [quantiles[0.023], quantiles[0.977]],
        "probability_sum": round(math.fsum(r[3] for r in rows), 12),
        "original_IntCal04_median_cal_bp": int(sample["original_intcal04_median_cal_bp"]),
        "original_IntCal04_reported_limits_cal_bp": [int(sample["original_intcal04_lower_cal_bp"]), int(sample["original_intcal04_upper_cal_bp"])],
    }
    (BASE / "results.json").write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf8")
    with (BASE / "posterior.csv").open("w", encoding="utf8", newline="") as out:
        writer = csv.writer(out, lineterminator="\n")
        writer.writerow(["calendar_age_bp", "curve_14c_age_bp", "curve_sigma_14c_years", "probability_per_year"])
        writer.writerows(rows)
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return rows, result

if __name__ == "__main__":
    calibrate()
