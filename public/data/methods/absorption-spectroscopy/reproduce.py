"""Reproduce NOAA TP_analysis_CO2_v2.1, Table A1. Python 3, standard library only.

Keep this file, example.json and noaa-table-a1.csv in one directory.
Run: python reproduce.py
The result describes 16O12C16O, not total CO2.
"""
from pathlib import Path
import csv
import hashlib
import io
import json
import math
import statistics


def reproduce():
    base = Path(__file__).resolve().parent
    meta = json.loads((base / 'example.json').read_text(encoding='utf8'))
    text = (base / 'noaa-table-a1.csv').read_text(encoding='utf8')
    assert hashlib.sha256(text.encode('utf8')).hexdigest() == meta['table']['sha256_lf']
    rows = list(csv.DictReader(io.StringIO(text)))
    assert len(rows) == 16
    values = []
    c0, c1 = meta['calibration']['c0_ppm'], meta['calibration']['c1_ppm']
    for i, row in enumerate(rows):
        assert row['date'] == '2017-01-24'
        assert row['type'] == ('SMP' if i % 2 else 'REF')
        assert row['n'] == '10' and row['flag'] == '.'
        if i:
            assert rows[i-1]['time'] < row['time']
        if row['type'] == 'REF':
            assert not row['published_ratio'] and not row['published_x626_ppm']
            continue
        ratio = float(row['published_ratio'])
        if i + 1 < len(rows):
            r1, r2 = float(rows[i-1]['signal']), float(rows[i+1]['signal'])
            calculated_ratio = float(row['signal']) / ((r1 + r2) / 2)
            assert abs(calculated_ratio - ratio) < 0.5e-9
        # No following REF is printed for the last SMP. Use its published ratio.
        value = c0 + c1 * ratio
        assert abs(value - float(row['published_x626_ppm'])) < 0.0005
        values.append(value)
    assert len(values) == 8
    mean, sd = statistics.mean(values), statistics.stdev(values)
    assert math.isclose(mean, meta['result']['mean_x626_ppm'], abs_tol=1e-10)
    assert math.isclose(sd, meta['result']['sample_sd_x626_ppm'], abs_tol=1e-10)
    assert round(mean, 3) == 386.728 and round(sd, 3) == 0.003
    return values, mean, sd


if __name__ == '__main__':
    values, mean, sd = reproduce()
    print('Verified: all 16 rows, seven complete bracketing ratios and eight calibrations.')
    for i, value in enumerate(values, 1):
        print(f'{i}: {value:.9f} ppm of 16O12C16O')
    print(f'Mean: {mean:.9f} ppm, sample SD: {sd:.9f} ppm')
    print('The final bracketing reference is absent. The final ratio is used as published.')
