"""Reproduce the article's final comparison using only the Python standard library.

Place this script, greenland-april.csv and provenance.json in one directory.
python reproduce.py
python reproduce.py --workbook downloaded-nasa-workbook.xlsx
"""
from pathlib import Path
from decimal import Decimal
import argparse
import csv
import hashlib
import json
import posixpath
import xml.etree.ElementTree as ET
import zipfile

ROOT = Path(__file__).resolve().parent
NS = {"s": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
REL = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"


def require(condition, message):
    if not condition:
        raise ValueError(message)


def read_sheets(path):
    """Read cached scalar values of XLSX cells without Excel or extra packages."""
    result = {}
    with zipfile.ZipFile(path) as z:
        strings = []
        if "xl/sharedStrings.xml" in z.namelist():
            root = ET.fromstring(z.read("xl/sharedStrings.xml"))
            strings = ["".join(e.itertext()) for e in root.findall("s:si", NS)]
        rels = ET.fromstring(z.read("xl/_rels/workbook.xml.rels"))
        targets = {e.attrib["Id"]: e.attrib["Target"] for e in rels}
        workbook = ET.fromstring(z.read("xl/workbook.xml"))
        for sheet in workbook.findall("s:sheets/s:sheet", NS):
            target = targets[sheet.attrib[f"{{{REL}}}id"]]
            name = target.lstrip("/") if target.startswith("/") else posixpath.normpath("xl/" + target)
            cells = {}
            for cell in ET.fromstring(z.read(name)).findall(".//s:sheetData/s:row/s:c", NS):
                value = cell.find("s:v", NS)
                if cell.attrib.get("t") == "inlineStr":
                    value = cell.find("s:is", NS)
                    text = "" if value is None else "".join(value.itertext())
                else:
                    text = "" if value is None else value.text or ""
                    if cell.attrib.get("t") == "s" and text:
                        text = strings[int(text)]
                cells[cell.attrib["r"]] = text
            result[sheet.attrib["name"]] = cells
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--workbook", type=Path)
    args = parser.parse_args()
    meta = json.loads((ROOT / "provenance.json").read_text(encoding="utf-8"))
    data_path = ROOT / "greenland-april.csv"
    require(hashlib.sha256(data_path.read_bytes()).hexdigest() == meta["csv_sha256"], "CSV differs from the documented extract")
    with data_path.open(encoding="utf-8", newline="") as f:
        rows = list(csv.DictReader(f))
    require(len(rows) == 2, "Expected two records")
    if args.workbook:
        require(hashlib.sha256(args.workbook.read_bytes()).hexdigest() == meta["workbook_sha256"], "Workbook differs from the documented NASA snapshot")
        sheets = read_sheets(args.workbook)
        for row in rows:
            original = sheets[meta["original_sheet"]]["A" + row["original_sheet_row"]].split()
            selected = [row[k] for k in ("decimal_year", "mass_anomaly_gt", "uncertainty_1sigma_gt")]
            require([Decimal(x) for x in original] == [Decimal(x) for x in selected], "Original NASA row differs")
            derived = sheets[meta["derived_sheet"]]
            require(Decimal(derived["A" + row["derived_sheet_row"]]) == Decimal(row["decimal_year"]), "Derived time differs")
            # Excel stores binary floats. Compare at the two decimals of the original text.
            require(Decimal(derived["B" + row["derived_sheet_row"]]).quantize(Decimal("0.01")) == Decimal(row["mass_anomaly_gt"]), "Derived mass differs")
        print("NASA original and derived sheets agree with the extract.")
    difference = Decimal(rows[1]["mass_anomaly_gt"]) - Decimal(rows[0]["mass_anomaly_gt"])
    require(difference == Decimal(meta["result_gt"]), "Result differs from provenance")
    print(f"{rows[1]['month']} minus {rows[0]['month']}: {difference} Gt")
    print("Monthly period comparison, not the calendar-year 2019 balance.")
    print("No covariance available: no uncertainty interval for the difference calculated.")


if __name__ == "__main__":
    main()
