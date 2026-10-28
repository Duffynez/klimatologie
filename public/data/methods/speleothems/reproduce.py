"""Reproduce the Bu4 example using only Python's standard library.
Run: python reproduce.py          (verify distributed outputs)
     python reproduce.py --write  (regenerate derived files)
"""
import argparse
import csv
import hashlib
import io
import json
import math
from pathlib import Path

BASE = Path(__file__).resolve().parent


def calculate():
    metadata = json.loads((BASE / "provenance.json").read_text(encoding="utf-8"))
    raw = (BASE / "bu4-original.txt").read_bytes()
    assert hashlib.sha256(raw).hexdigest() == metadata["sha256"]["bu4-original.txt"], "Original input changed"
    lines = [line for line in raw.decode("utf-8-sig").splitlines() if line.strip() and not line.startswith("#")]
    source = list(csv.DictReader(lines, delimiter="\t"))
    rows = [(float(r["age_calBP"]), float(r["depth_mm"]), float(r["d18OcarbVPDB"])) for r in source]
    assert len(rows) == 1008
    assert all(all(math.isfinite(x) and x != -999 for x in r) for r in rows)
    assert all(b[0] > a[0] and b[1] > a[1] for a, b in zip(rows, rows[1:]))
    half = 10
    means = [None] * len(rows)
    for i in range(half, len(rows) - half):
        means[i] = math.fsum(r[2] for r in rows[i-half:i+half+1]) / 21
    center = min(range(half, len(rows)-half), key=lambda i: abs(rows[i][0] - 500))
    window = rows[center-half:center+half+1]
    buffer = io.StringIO(newline="")
    writer = csv.writer(buffer, lineterminator="\n")
    writer.writerow(["source_row", "age_calBP", "depth_mm", "d18O_VPDB_permil", "mean21_VPDB_permil"])
    for i, (age, depth, delta) in enumerate(rows):
        writer.writerow([i+1, f"{age:.1f}", f"{depth:.1f}", f"{delta:.2f}", "" if means[i] is None else f"{means[i]:.10f}"])
    example = io.StringIO(newline="")
    writer = csv.writer(example, lineterminator="\n")
    writer.writerow(["source_row", "age_calBP", "depth_mm", "d18O_VPDB_permil"])
    for i in range(center-half, center+half+1):
        writer.writerow([i+1, *rows[i]])
    result = {
        "sample_count": len(rows), "age_range_calBP": [rows[0][0], rows[-1][0]],
        "complete_mean_count": sum(v is not None for v in means),
        "example_center_row": center+1, "example_center_age_calBP": rows[center][0],
        "example_center_depth_mm": rows[center][1], "example_center_delta_permil": rows[center][2],
        "example_count": len(window), "example_depth_range_mm": [window[0][1], window[-1][1]],
        "example_age_range_calBP": [window[0][0], window[-1][0]],
        "example_age_span_years": window[-1][0]-window[0][0],
        "example_delta_sum_permil": math.fsum(r[2] for r in window),
        "example_mean_delta_permil": means[center],
    }
    return {"bu4-processed.csv": buffer.getvalue(), "example-window.csv": example.getvalue(),
            "calculation.json": json.dumps(result, ensure_ascii=False, indent=2)+"\n"}


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--write", action="store_true")
    args = parser.parse_args()
    for name, text in calculate().items():
        path = BASE / name
        if args.write:
            path.write_text(text, encoding="utf-8", newline="\n")
        else:
            assert path.read_text(encoding="utf-8") == text, "Derived file differs: " + name
    print("OK: original SHA-256, 1008 observations, 988 centered means and 21-sample example.")
