"""Repeat the final GNSS water-vapour conversion using a real NCAR record."""
from pathlib import Path
import csv
import datetime
import hashlib
import json
import math

base = Path(__file__).resolve().parent
meta = json.loads((base / 'provenance.json').read_text(encoding='utf-8'))
original = (base / 'GOPE.2012').read_bytes()
assert hashlib.sha256(original).hexdigest() == meta['station_file_sha256']
with (base / 'gope-extract.csv').open(encoding='utf-8', newline='') as f:
    rows = list(csv.DictReader(f))
assert len(rows) == 1
row = rows[0]
values = list(row.values())
matched = [line.split() for line in original.decode('ascii').splitlines()
           if line.split()[:2] == values[:2]]
assert matched == [values], 'The extract differs from the original station data'
date = datetime.datetime(2012, 1, 1) + datetime.timedelta(
    days=int(row['day_of_year']) - 1, hours=int(row['hour_utc']))
assert date.isoformat() + 'Z' == meta['selected_timestamp']
wet = float(row['zenith_total_delay_mm']) - float(row['zenith_hydrostatic_delay_mm'])
tm = float(row['weighted_temperature_K'])
c = meta['constants']
pi = 1e6 / (c['rho_water_kg_m3'] * c['R_water_J_kg_K'] *
            (c['k2prime_K_Pa'] + c['k3_K2_Pa'] / tm))
water = pi * wet
published = float(row['published_water_mm'])
assert math.isclose(wet, 142.11, abs_tol=1e-9)
assert abs(water - published) < 0.05, 'Conversion discrepancy exceeds documented tolerance'
assert round(water, 1) == round(published, 1) == 23.0
print('GOPE', date.isoformat(), 'UTC')
print(f'Wet delay from rounded columns: {wet:.5f} mm')
print(f'Archived wet delay: {float(row["zenith_wet_delay_mm"]):.5f} mm')
print(f'Conversion factor: {pi:.9f}')
print(f'Recomputed water: {water:.6f} mm')
print(f'Published water: {published:.6f} mm')
print(f'Difference (recomputed - published): {water - published:.6f} mm')
print(f'Both values rounded to one decimal: {water:.1f} mm')
print('This checks the final conversion, not measurement uncertainty or independent validation.')
