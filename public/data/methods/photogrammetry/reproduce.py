"""Recalculate the fixed patch's height and volume change using only Python's stdlib.

Download patch.csv, example.json and this file into one directory.
Run: python reproduce.py
This begins with the aligned DEM values in the table. process.py repeats alignment.
"""
from pathlib import Path
import csv
import hashlib
import json
import math

base = Path(__file__).resolve().parent
meta = json.loads((base/'example.json').read_text(encoding='utf-8'))
raw = (base/'patch.csv').read_text(encoding='utf-8').replace('\r\n', '\n')
assert hashlib.sha256(raw.encode()).hexdigest() == meta['results']['csv_sha256_lf']
rows = list(csv.DictReader(raw.splitlines()))
area = math.fsum(float(r['area_m2']) for r in rows)
volume = math.fsum((float(r['z2009_m'])-float(r['z1990_aligned_m']))*float(r['area_m2']) for r in rows)
assert len(rows) == 400 and area == 160000
assert abs(volume-meta['results']['volume_change_m3']) < 0.001
print(f'Cells: {len(rows)}\nArea: {area:.0f} m2\nMean height change: {volume/area:.6f} m\nVolume change: {volume:.3f} m3')
