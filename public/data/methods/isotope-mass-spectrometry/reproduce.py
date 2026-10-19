"""Reproduce the selected GISP comparison in Berman et al. (2013), Table 1.

Download gisp-comparison.csv and example.json alongside this file.
Run with Python 3, no external packages required. Published calibrated
means are the starting point. Raw measurements are not reconstructed.
"""
from pathlib import Path
from decimal import Decimal
import csv
import hashlib
import json


def reproduce():
    base = Path(__file__).resolve().parent
    metadata = json.loads((base / "example.json").read_text(encoding="utf-8"))
    table = (base / "gisp-comparison.csv").read_text(encoding="utf-8").replace("\r\n", "\n")
    assert hashlib.sha256(table.encode()).hexdigest() == metadata["table_sha256_lf"]
    rows = list(csv.DictReader(table.splitlines()))
    assert [(r["laboratory"], r["high_precision_measurements"]) for r in rows] == [
        ("LSCE", "3"), ("JHU", "9"), ("Los_Gatos_Research", "26")
    ]
    values = {}
    expected = {k: Decimal(str(v)) for k, v in metadata["expected"].items()}
    for row in rows:
        assert row["sample"] == "GISP"
        lab = row["laboratory"]
        delta = Decimal(row["delta18O_permil"])
        ratio = 1 + delta / 1000
        assert ratio == expected[lab + "_relative_ratio"]
        values[lab] = delta
        print(f"{lab}: delta18O = {delta} per mille, R/R_VSMOW = {ratio}")
    percent = expected["LSCE_relative_ratio"] * 100
    assert percent == expected["LSCE_relative_ratio_percent"]
    assert 100 - percent == expected["LSCE_depletion_percent"]
    for a, b, key in [
        ("LSCE", "JHU", "LSCE_minus_JHU_permil"),
        ("LSCE", "Los_Gatos_Research", "LSCE_minus_optical_permil"),
        ("JHU", "Los_Gatos_Research", "JHU_minus_optical_permil"),
    ]:
        difference = values[a] - values[b]
        assert difference == expected[key]
        print(f"{a} minus {b}: {difference} per mille")
    print("Verified. The different uncertainty definitions have not been pooled.")


if __name__ == "__main__":
    reproduce()
