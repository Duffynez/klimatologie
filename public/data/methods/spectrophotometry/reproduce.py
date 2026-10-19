#!/usr/bin/env python3
"""Reproduce Woosley (2023) raw_pHt, before indicator perturbation correction.
Download this script and woosley-batch2-bottle15.csv into the same directory.
Python 3, standard library only. Metadata and limits: example.json.
"""
import csv
import math
from pathlib import Path


def coefficients(temperature_c, salinity):
    """Liu, Patsavas & Byrne (2011), equations 18-19, purified mCP."""
    t = temperature_c + 273.15
    s = salinity
    if not (278.15 <= t <= 308.15 and 20 <= s <= 40):
        raise ValueError("Outside the published calibration range")
    a = -246.64209 + 0.315971 * s + 2.8855e-4 * s**2
    b = 7229.23864 - 7.098137 * s - 0.057034 * s**2
    c = 44.493382 - 0.052711 * s
    d = 0.0781344
    p = a + b / t + c * math.log(t) - d * t
    ea = -0.007762 + 4.5174e-5 * t
    eb = -0.020813 + 2.60262e-4 * t + 1.0436e-4 * (s - 35)
    return p, ea, eb


def calculate(row):
    p, ea, eb = coefficients(float(row['Calculated_Temperature']), float(row['Practical_Salinity']))
    baseline = float(row['A730'])
    r = (float(row['A578']) - baseline) / (float(row['A434']) - baseline)
    ph = p + math.log10((r - ea) / (1 - r * eb))
    return r, ph


if __name__ == '__main__':
    path = Path(__file__).with_name('woosley-batch2-bottle15.csv')
    for row in csv.DictReader(path.open(encoding='utf-8')):
        r, ph = calculate(row)
        assert row['flag'] == '2'
        assert abs(r - float(row['R'])) < 0.5e-6
        assert abs(ph - float(row['raw_pHt'])) < 0.5e-4
        print(f"Rep {row['Rep']}: R={r:.9f}, raw_pHt={ph:.4f}, published={row['raw_pHt']}")
    print('This is pH BEFORE correction for the added indicator, not final seawater pH.')
