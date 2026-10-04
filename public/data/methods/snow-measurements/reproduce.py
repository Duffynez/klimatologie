"""Reproduce one MOSAiC snow profile using Python 3 standard library only.

Keep density.xlsx and example.json beside this script, then run:
    python reproduce.py
The XLSX file is an unchanged CC BY 4.0 dataset by Macfarlane et al. (2022),
https://doi.org/10.1594/PANGAEA.940214. This script is by Klimatologie.eu.
"""
from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as ET
from datetime import datetime, timedelta
import hashlib
import json
import math

NS = {"s": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
HEADERS = ["Event", "Location", "Latitude", "Longitude", "Timestamp", "Top cm",
           "Bottom cm", "SnowDensity kgm-3", "SalinityContainer", "SensorScale", "Comment"]


def read_profile(path, event):
    """Read the published Sheet1, retaining source Excel row numbers."""
    with ZipFile(path) as archive:
        strings = ET.fromstring(archive.read("xl/sharedStrings.xml"))
        shared = ["".join(si.itertext()) for si in strings]
        sheet = ET.fromstring(archive.read("xl/worksheets/sheet1.xml"))
    records = []
    for row in sheet.findall("s:sheetData/s:row", NS):
        cells = {}
        for cell in row.findall("s:c", NS):
            column = "".join(c for c in cell.attrib["r"] if c.isalpha())
            value = cell.find("s:v", NS)
            if value is None:
                cells[column] = None
            elif cell.attrib.get("t") == "s":
                cells[column] = shared[int(value.text)]
            else:
                cells[column] = float(value.text)
        if row.attrib["r"] == "1":
            if [cells.get(chr(65+i)) for i in range(11)] != HEADERS:
                raise ValueError("Unexpected source columns")
        elif cells.get("A") == event:
            records.append({"excelRow": int(row.attrib["r"]),
                            **{HEADERS[i]: cells.get(chr(65+i)) for i in range(11)}})
    return records


def summarize(records):
    if not records:
        raise ValueError("No measurements selected")
    keys = ["Event", "Location", "Latitude", "Longitude", "Timestamp", "SensorScale"]
    if any(any(r[k] != records[0][k] for k in keys) for r in records):
        raise ValueError("Mixed profile identifiers or timestamps")
    layers = []
    for r in records:
        top, bottom, density = (r[k] for k in HEADERS[5:8])
        if not all(isinstance(v, (int, float)) and math.isfinite(v) for v in (top, bottom, density)):
            raise ValueError("Missing or non-finite measurement")
        if top <= bottom or bottom < 0 or density <= 0:
            raise ValueError("Invalid vertical interval or density")
        if r["Comment"] is not None:
            raise ValueError("A source comment requires manual review")
        layers.append({"excelRow": r["excelRow"], "topCm": top, "bottomCm": bottom,
                       "densityKgM3": density,
                       "sweMm": round(density * (top-bottom) / 100, 10)})
    layers.sort(key=lambda r: r["topCm"], reverse=True)
    if layers[-1]["bottomCm"] != 0:
        raise ValueError("Profile does not reach its reference surface")
    if any(a["bottomCm"] != b["topCm"] for a,b in zip(layers,layers[1:])):
        raise ValueError("Gaps or overlaps in sampled intervals")
    depth = layers[0]["topCm"]
    swe = round(sum(r["sweMm"] for r in layers), 10)
    return {"count": len(layers), "depthCm": depth, "sweMm": swe,
            "meanDensityKgM3": swe / (depth/100), "layers": layers}


def reproduce(base=None):
    base = Path(base) if base else Path(__file__).parent
    meta = json.loads((base / "example.json").read_text(encoding="utf-8"))
    path = base / "density.xlsx"
    if hashlib.sha256(path.read_bytes()).hexdigest() != meta["sha256"]:
        raise ValueError("Source file checksum differs from the published example")
    rows = read_profile(path, meta["selection"]["event"])
    if [r["excelRow"] for r in rows] != meta["selection"]["excelRows"]:
        raise ValueError("Unexpected source rows")
    stamp = (datetime(1899,12,30)+timedelta(seconds=round(rows[0]["Timestamp"]*86400))).isoformat(timespec="seconds")
    if stamp != meta["selection"]["timestampAsStored"]:
        raise ValueError("Unexpected source timestamp")
    result = summarize(rows)
    if result != meta["result"]:
        raise ValueError("Calculated result differs from the article")
    return result


if __name__ == "__main__":
    print(json.dumps(reproduce(), indent=2, ensure_ascii=False))
