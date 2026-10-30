"""Reproduce the comparison of NOAA GHCN-M v4 Ruzyně data. Python 3, no dependencies."""
import csv
import hashlib
import io
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
metadata = json.loads((ROOT / "provenance.json").read_text(encoding="utf8"))
for name, expected in metadata["sha256"].items():
    assert hashlib.sha256((ROOT / name).read_bytes()).hexdigest() == expected, name

def read(mode):
    records = {}
    path = ROOT / (metadata["station_id"] + "." + mode + "-original.dat")
    for line in path.read_text(encoding="ascii").splitlines():
        assert line[:11] == metadata["station_id"] and line[15:19] == "TAVG"
        assert len(line) == 115
        year = int(line[11:15])
        for month in range(1, 13):
            cell = line[19 + 8 * (month - 1):27 + 8 * (month - 1)]
            value = int(cell[:5])
            records[year, month] = (None if value == -9999 else value, cell[5], cell[6], cell[7])
    return records

unadjusted, adjusted = read("qcu"), read("qcf")
rows = []
for year in range(1961, 2021):
    for month in range(1, 13):
        u, h = unadjusted[year, month], adjusted[year, month]
        included = u[0] is not None and h[0] is not None and u[2] == h[2] == " "
        value = lambda n: "" if n is None else format(n / 100, ".2f")
        rows.append([f"{year}-{month:02d}", value(u[0]), value(h[0]), u[1].strip(), u[2].strip(), u[3].strip(), h[1].strip(), h[2].strip(), h[3].strip(), int(included), value(h[0] - u[0]) if included else ""])
output = io.StringIO(newline="")
writer = csv.writer(output, lineterminator="\n")
writer.writerow(["month", "qcu_degC", "qcf_degC", "qcu_measurement_flag", "qcu_quality_flag", "qcu_source_flag", "qcf_measurement_flag", "qcf_quality_flag", "qcf_source_flag", "included", "adjustment_degC"])
writer.writerows(rows)
(ROOT / "comparison.csv").write_bytes(output.getvalue().encode("utf8"))
included = [row for row in rows if row[9]]
summary = {"station": metadata["station_id"], "version": metadata["version"], "months": len(rows), "paired_valid_months": len(included), "excluded_months": [row[0] for row in rows if not row[9]], "min_adjustment_degC": min(float(row[10]) for row in included), "max_adjustment_degC": max(float(row[10]) for row in included), "selected_months": {row[0]: {"qcu_degC": row[1], "qcf_degC": row[2], "adjustment_degC": row[10], "qcu_quality_flag": row[4], "qcf_quality_flag": row[7]} for row in rows if row[0] in ["1965-01", "1990-01", "2005-01", "2015-01", "2020-03"]}}
(ROOT / "results.json").write_bytes((json.dumps(summary, ensure_ascii=False, indent=2) + "\n").encode("utf8"))
print(json.dumps(summary, ensure_ascii=True))
