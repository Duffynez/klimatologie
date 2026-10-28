"""Recompute the coral example offline with Python 3.10+ (standard library only).

Default: verify inputs, derived table and published results.
--write: regenerate annual-comparison.csv and calculation.json from the inputs.
This implements negative Sr/Ca-temperature variance scaling, not the study's IPO.
"""
import argparse
import csv
import datetime as dt
import hashlib
import io
import json
import math
from pathlib import Path
import re
import statistics as stats

BASE = Path(__file__).resolve().parent


def calculate():
    provenance = json.loads((BASE / "provenance.json").read_text(encoding="utf-8"))
    for name, expected in provenance["sha256"].items():
        actual = hashlib.sha256((BASE / name).read_bytes()).hexdigest()
        if actual != expected:
            raise ValueError(f"Input checksum mismatch: {name}")

    lines = [line for line in (BASE / "f14-original.txt").read_text().splitlines()
             if line.strip() and not line.startswith("#")]
    records = list(csv.DictReader(lines, delimiter="\t"))
    coral = {int(row["Year"]): float(row["Sr/Ca"]) for row in records}
    if len(records) != 628 or sorted(coral) != list(range(1370, 1998)):
        raise ValueError("Expected 628 unique annual coral values, 1370-1997")

    raw = (BASE / "ersst-fiji-original.txt").read_text()
    pairs = re.findall(r"^\[(\d+)\]\[0\], ([\d.eE+\-]+)\s*$", raw, re.M)
    if [int(i) for i, _ in pairs] != list(range(1380)):
        raise ValueError("Expected 1380 consecutive monthly SST values")
    values = [float(value) for _, value in pairs]
    times = re.search(r"sst.time\[1380\]\s*\n([^\r\n]+)", raw)
    if not times:
        raise ValueError("Missing time coordinate")
    dates = [dt.date(1800, 1, 1) + dt.timedelta(days=float(x))
             for x in times.group(1).split(",")]
    expected_dates = [dt.date(year, month, 1)
                      for year in range(1883, 1998) for month in range(1, 13)]
    if dates != expected_dates:
        raise ValueError("Unexpected time coordinate")
    for axis, expected in [("lat", -18.0), ("lon", 180.0)]:
        value = float(re.search(rf"sst.{axis}\[1\]\s*\n([\d.\-]+)", raw).group(1))
        if value != expected:
            raise ValueError(f"Unexpected {axis}")
    if not all(math.isfinite(value) and 15 < value < 35 for value in values):
        raise ValueError("Missing or implausible SST input")

    years = list(range(1883, 1998))
    temperature = [stats.mean(values[i * 12:(i + 1) * 12]) for i in range(115)]
    ratio = [coral[year] for year in years]
    mean_r, mean_t = stats.mean(ratio), stats.mean(temperature)
    sd_r, sd_t = stats.stdev(ratio), stats.stdev(temperature)
    slope = -sd_t / sd_r
    reconstructed = [mean_t + slope * (value - mean_r) for value in ratio]
    correlation = stats.correlation(reconstructed, temperature)
    rmse = math.sqrt(stats.mean((a - b) ** 2 for a, b in zip(reconstructed, temperature)))
    example = years.index(1900)
    result = {
        "calibration_first_year": years[0], "calibration_last_year": years[-1],
        "annual_pairs": len(years), "monthly_values": len(values),
        "mean_SrCa_mmol_mol": mean_r, "sd_SrCa_mmol_mol": sd_r,
        "mean_ERSST_degC": mean_t, "sd_ERSST_degC": sd_t,
        "slope_degC_per_mmol_mol": slope,
        "correlation_SrCa_ERSST": stats.correlation(ratio, temperature),
        "correlation_reconstructed_ERSST": correlation,
        "calibration_RMSE_degC": rmse,
        "example_year": 1900, "example_SrCa_mmol_mol": ratio[example],
        "example_reconstructed_degC": reconstructed[example],
        "example_ERSST_degC": temperature[example],
    }
    buffer = io.StringIO(newline="")
    writer = csv.writer(buffer, lineterminator="\n")
    writer.writerow(["year", "SrCa_mmol_mol", "ERSST_degC", "reconstructed_degC"])
    for year, r, observed, inferred in zip(years, ratio, temperature, reconstructed):
        writer.writerow([year, f"{r:.5f}", f"{observed:.8f}", f"{inferred:.8f}"])
    return result, buffer.getvalue()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--write", action="store_true")
    args = parser.parse_args()
    result, table = calculate()
    if args.write:
        (BASE / "annual-comparison.csv").write_text(table, encoding="utf-8", newline="\n")
        (BASE / "calculation.json").write_text(
            json.dumps(result, indent=2) + "\n", encoding="utf-8", newline="\n")
    else:
        if (BASE / "annual-comparison.csv").read_text(encoding="utf-8") != table:
            raise ValueError("Published CSV differs from recomputation")
        published = json.loads((BASE / "calculation.json").read_text(encoding="utf-8"))
        if published.keys() != result.keys():
            raise ValueError("Unexpected result fields")
        for key, value in result.items():
            if not math.isclose(value, published[key], rel_tol=1e-12, abs_tol=1e-12):
                raise ValueError(f"Published result differs: {key}")
    print(json.dumps(result, indent=2))
    print("OK: original input hashes, coordinates, months and published calculation")


if __name__ == "__main__":
    main()
