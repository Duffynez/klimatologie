"""Reproduce the CALM U1 / GTN-P 14 example using Python 3, standard library only.

Keep this file, example.json and barrow-gtnp.zip in the same directory.
Run: python -B reproduce.py
Optional: python -B reproduce.py --csv-output barrow-1996.csv

Data: Nikolay Shiklomanov, CALM / George Washington University, GTN-P and
contributing institutions. CC BY 4.0, https://data.gtn-p.org/data-policy
Source: https://data.gtn-p.org/view/alt/2, downloaded 2026-10-04.
The ZIP is unmodified. Values are published node averages, not individual pushes.
The script and the derived outputs were prepared by Klimatologie.eu.
"""

import argparse
import csv
import hashlib
import io
import json
import math
from pathlib import Path
import statistics
from zipfile import ZipFile

DATE = "1996-08-18"
MEMBER = "alt_dataset_14_alt_grid-transect.csv"
FIELDS = ["id", "date", "offset_x", "offset_y", "alt", "flag", "dataset_id", "activelayer_id", "site_id"]


def load_rows(archive, expected_sha256):
    data = Path(archive).read_bytes()
    if hashlib.sha256(data).hexdigest() != expected_sha256:
        raise ValueError("Archive SHA-256 differs from the documented snapshot")
    with ZipFile(io.BytesIO(data)) as zipped:
        return list(csv.DictReader(io.StringIO(zipped.read(MEMBER).decode("utf-8"))))


def select_rows(rows):
    selected = [r for r in rows if r["date"] == DATE]
    selected.sort(key=lambda r: (-float(r["offset_y"]), float(r["offset_x"])))
    expected = {(float(x), float(y)) for x in range(0, 1001, 100) for y in range(0, 1001, 100)}
    positions = [(float(r["offset_x"]), float(r["offset_y"])) for r in selected]
    if len(selected) != 121 or set(positions) != expected:
        raise ValueError("The selected visit must contain all 121 distinct grid positions")
    for row in selected:
        if (row["dataset_id"], row["activelayer_id"], row["site_id"]) != ("14", "2", "2"):
            raise ValueError("Unexpected dataset or site identifier")
        if row["alt"] == "":
            if row["flag"] != "no data entry - no measurement because of water":
                raise ValueError("Unexpected missing-data flag, review before calculating")
        else:
            depth = float(row["alt"])
            if not math.isfinite(depth) or depth < 0 or row["flag"]:
                raise ValueError("Invalid or flagged numeric depth, review before calculating")
    return selected


def calculate(rows):
    selected = select_rows(rows)
    values = [float(r["alt"]) for r in selected if r["alt"] != ""]
    if len(values) < 2:
        raise ValueError("At least two valid nodes are needed")
    return {
        "date": DATE,
        "nodes": len(selected),
        "valid": len(values),
        "missing": [{"xM": float(r["offset_x"]), "yM": float(r["offset_y"]), "flag": r["flag"]}
                    for r in selected if r["alt"] == ""],
        "sumCm": math.fsum(values),
        "meanCm": statistics.mean(values),
        "minCm": min(values),
        "maxCm": max(values),
        "sampleSdCm": statistics.stdev(values),
        "incorrectZeroFilledMeanCm": math.fsum(values) / len(selected),
        "firstFive": [{"id": r["id"], "xM": float(r["offset_x"]), "yM": float(r["offset_y"]),
                       "depthCm": float(r["alt"])} for r in selected[:5]],
    }


def csv_text(rows):
    output = io.StringIO(newline="")
    writer = csv.DictWriter(output, fieldnames=FIELDS, lineterminator="\n")
    writer.writeheader()
    writer.writerows(select_rows(rows))
    return output.getvalue()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--csv-output", type=Path, help="Write the 121 selected published records to CSV")
    args = parser.parse_args()
    base = Path(__file__).resolve().parent
    metadata = json.loads((base / "example.json").read_text(encoding="utf-8"))
    rows = load_rows(base / metadata["archive"]["filename"], metadata["archive"]["sha256"])
    result = calculate(rows)
    if args.csv_output:
        args.csv_output.write_text(csv_text(rows), encoding="utf-8", newline="")
    print(json.dumps(result, ensure_ascii=False, indent=2, allow_nan=False))


if __name__ == "__main__":
    main()
