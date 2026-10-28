"""Read the original CSIRO workbook and reproduce the article's two-sample example."""
from pathlib import Path
from decimal import Decimal
import csv
import hashlib
import json
import posixpath
import xml.etree.ElementTree as ET
import zipfile

BASE = Path(__file__).resolve().parent
meta = json.loads((BASE / "provenance.json").read_text(encoding="utf-8"))
for name, expected in meta["sha256"].items():
    actual = hashlib.sha256((BASE / name).read_bytes()).hexdigest()
    if actual != expected:
        raise ValueError("Checksum mismatch: " + name)

NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
REL = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
with zipfile.ZipFile(BASE / "Law_Dome_GHG_2000years.xlsx") as archive:
    workbook = ET.fromstring(archive.read("xl/workbook.xml"))
    sheet = next(s for s in workbook.find("m:sheets", NS)
                 if s.get("name") == meta["selection"]["sheet"])
    relations = ET.fromstring(archive.read("xl/_rels/workbook.xml.rels"))
    target = next(r.get("Target") for r in relations
                  if r.get("Id") == sheet.get("{" + REL + "}id"))
    path = target.lstrip("/") if target.startswith("/") else posixpath.normpath("xl/" + target)
    strings = ["".join(s.itertext()) for s in
               ET.fromstring(archive.read("xl/sharedStrings.xml"))]
    source = {}
    for row in ET.fromstring(archive.read(path)).findall(".//m:row", NS):
        values = {}
        for cell in row:
            value = cell.find("m:v", NS)
            if value is not None:
                values[cell.get("r").rstrip("0123456789")] = (
                    strings[int(value.text)] if cell.get("t") == "s" else value.text)
        if values.get("A") in meta["selection"]["sample_ids"]:
            source[values["A"]] = (int(row.get("r")), values)

with (BASE / "de08-extract.csv").open(encoding="utf-8", newline="") as stream:
    extracted = list(csv.DictReader(stream))
if [row["sample_id"] for row in extracted] != meta["selection"]["sample_ids"]:
    raise ValueError("Unexpected selection")
concentrations = []
for row in extracted:
    row_number, values = source[row["sample_id"]]
    assert row_number == int(row["source_row"])
    assert row["source_sheet"] == meta["selection"]["sheet"]
    for column, field, precision in [
        ("B", "ice_year_ce", "0.01"), ("C", "gas_year_ce", "0.01"),
        ("D", "co2_ppm", "0.001"), ("E", "uncertainty_ppm", "0.001")
    ]:
        assert Decimal(values[column]).quantize(Decimal(precision)) == Decimal(row[field])
    age_difference = Decimal(values["C"]) - Decimal(values["B"])
    concentrations.append(Decimal(values["D"]))
    print(row["sample_id"] + ": ice/gas age difference = "
          + str(age_difference.quantize(Decimal("0.01"))) + " years")
print("Later minus earlier CO2 = "
      + str((concentrations[1] - concentrations[0]).quantize(Decimal("0.001"))) + " ppm")
print("Original workbook and CSV agree. All checksums passed.")
