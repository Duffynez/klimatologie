"""Reproduce the published web example from the original YAD measurements.

Python standard library only. Optional: --archive raw-2016-03-09.zip
The calendar dates are inherited from Briffa et al., not newly estimated here.
"""
from pathlib import Path
import argparse
import csv
import hashlib
import json
import math
import statistics
import zipfile

BASE = Path(__file__).resolve().parent


def parse_raw(content):
    records = {}
    for line in content.decode("ascii").splitlines():
        if not line.strip():
            continue
        name, start = line[:8].strip(), int(line[8:12])
        for offset, column in enumerate(range(12, len(line), 6)):
            value = int(line[column:column + 6])
            if value == -9999:
                break
            if value < 0:
                raise ValueError("Unexpected missing-value code")
            target = records.setdefault(name, {})
            year = start + offset
            if year in target:
                raise ValueError("Duplicate year")
            target[year] = value / 1000
    return records


def pearson(x, y):
    if len(x) != len(y) or len(x) < 2:
        raise ValueError("Paired observations required")
    dx = [v - statistics.mean(x) for v in x]
    dy = [v - statistics.mean(y) for v in y]
    return sum(a * b for a, b in zip(dx, dy)) / math.sqrt(
        sum(a * a for a in dx) * sum(b * b for b in dy))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--archive", type=Path)
    args = parser.parse_args()
    metadata = json.loads((BASE / "provenance.json").read_text(encoding="utf-8"))
    for name, digest in metadata["sha256"].items():
        assert hashlib.sha256((BASE / name).read_bytes()).hexdigest() == digest, name
    raw = (BASE / "yad.raw").read_bytes()
    if args.archive:
        assert hashlib.sha256(args.archive.read_bytes()).hexdigest() == metadata["archive_sha256"]
        with zipfile.ZipFile(args.archive) as archive:
            assert archive.read(metadata["archive_member"]) == raw
        print("Original archive member and checksum agree.")
    records = parse_raw(raw)
    with (BASE / "comparison.csv").open(encoding="utf-8", newline="") as stream:
        rows = list(csv.DictReader(stream))
    assert [int(row["year"]) for row in rows] == list(range(1949, 1991))
    for row in rows:
        for name in ("YAD011", "YAD021"):
            assert float(row[name + "_mm"]) == records[name][int(row["year"])], row
    years = range(1950, 1990)
    first = [records["YAD011"][year] for year in years]
    print("YAD011 anchor years: 1950-1989. Forty pairs in every comparison.")
    for shift in (-1, 0, 1):
        second = [records["YAD021"][year + shift] for year in years]
        result = pearson(first, second)
        assert abs(result - metadata["expected_correlations"][str(shift)]) < 1e-12
        print(f"YAD021 year = YAD011 year {shift:+d}: r = {result:.9f}")
    print("Original widths, CSV conversion and all correlations agree.")


if __name__ == "__main__":
    main()