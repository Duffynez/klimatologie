"""Griesgletscher 2020/21. Python 3, standard library only.

Keep this script, example.json, point.zip and balance.zip in one directory.
Run: python -B reproduce.py
Input archives: GLAMOS releases 2021, CC BY 4.0. No data are downloaded.
The calculation reproduces a point conversion and an area-weighted mean.
It does NOT reproduce the GLAMOS spatial mass-balance model.
"""

from pathlib import Path
from zipfile import ZipFile
import csv
import hashlib
import io
import json
import math


def finite(value):
    number = float(value)
    if not math.isfinite(number):
        raise ValueError("Non-finite input")
    return number


def weighted_mean(bands):
    if not bands:
        raise ValueError("No elevation bands")
    ordered = sorted(bands, key=lambda r: r['lowerM'])
    for i, row in enumerate(ordered):
        for key in ['areaKm2', 'annualMm', 'lowerM', 'upperM']:
            finite(row[key])
        if row['areaKm2'] <= 0 or row['upperM'] <= row['lowerM']:
            raise ValueError("Invalid area or elevation interval")
        if i and row['lowerM'] != ordered[i-1]['upperM']:
            raise ValueError("Gap or overlap in elevation bands")
    area = math.fsum(row['areaKm2'] for row in ordered)
    return math.fsum(row['areaKm2'] * row['annualMm'] for row in ordered) / area


def balance_rows(archive, member, selection):
    with ZipFile(archive) as z:
        lines = z.read(member).decode('utf-8-sig').splitlines()
    header = next(i for i, line in enumerate(lines) if line.startswith('glacier name;'))
    reader = csv.DictReader(io.StringIO('\n'.join([lines[header]] + lines[header+3:])), delimiter=';')
    return [row for row in reader if row['glacier id'] == selection['glacierId']
            and row['start date of observation'] == selection['startDate']
            and row['end date of observation'] == selection['endDate']]


def calculate(base):
    metadata = json.loads((base/'example.json').read_text(encoding='utf-8'))
    for name, source in metadata['archives'].items():
        if hashlib.sha256((base/name).read_bytes()).hexdigest() != source['sha256']:
            raise ValueError(f"Checksum mismatch: {name}")
    selection = metadata['selection']
    with ZipFile(base/'point.zip') as z:
        lines = z.read(selection['pointMember']).decode('utf-8-sig').splitlines()
    points = []
    for line_no, line in enumerate(lines, 1):
        if not line.strip() or line.startswith('#'):
            continue
        cells = line.split()
        if cells[1] != selection['startDate'].replace('-', '') or cells[3] != selection['endDate'].replace('-', ''):
            continue
        if len(cells) != 21:
            raise ValueError('Unexpected point row format')
        points.append(dict(name=cells[0], sourceLine=line_no, elevationM=finite(cells[9]),
                           rawCm=finite(cells[11]), densityKgM3=finite(cells[12]),
                           densityQuality=int(cells[13]), balanceMm=finite(cells[14]),
                           dateQuality=int(cells[6]), measurementQuality=int(cells[15]),
                           measurementType=int(cells[16]), errorMm=finite(cells[17]),
                           readingErrorMm=finite(cells[18]), densityErrorMm=finite(cells[19])))
    selected = [row for row in points if row['name'] == selection['stake']]
    if len(selected) != 1:
        raise ValueError('Missing or duplicate selected stake')
    point = selected[0]
    if (point['densityQuality'], point['dateQuality'], point['measurementQuality'], point['measurementType']) != (1, 1, 1, 1):
        raise ValueError('Selected point is not a documented normal ice-stake measurement')
    if point['densityKgM3'] <= 0 or point['rawCm'] >= 0:
        raise ValueError('Expected ice loss and positive density')
    # cm / 100 -> m. With rho_water = 1000 kg/m3, rho * dh gives mm w.e.
    point['calculatedMm'] = point['rawCm'] / 100 * point['densityKgM3']
    if not math.isclose(point['calculatedMm'], point['balanceMm'], abs_tol=0.5):
        raise ValueError('Point conversion disagrees with published rounded value')
    band_rows = balance_rows(base/'balance.zip', selection['bandsMember'], selection)
    bands = [dict(lowerM=finite(r['lower elevation of bin']), upperM=finite(r['upper elevation of bin']),
                  areaKm2=finite(r['area of elevation bin']), annualMm=finite(r['annual mass balance'])) for r in band_rows]
    if len(bands) != selection['expectedBands'] or len(points) != selection['expectedPoints']:
        raise ValueError('Incomplete selection')
    mean = weighted_mean(bands)
    totals = balance_rows(base/'balance.zip', selection['totalMember'], selection)
    if len(totals) != 1:
        raise ValueError('Missing or duplicate glacier-wide record')
    total = totals[0]
    area = math.fsum(row['areaKm2'] for row in bands)
    if not math.isclose(area, finite(total['glacier area']), abs_tol=0.0001):
        raise ValueError('Band areas do not cover published glacier area')
    published = finite(total['annual mass balance'])
    if abs(mean - published) > 1:
        raise ValueError('Weighted mean disagrees with published rounded value')
    return dict(point=point, points=points, bands=bands, areaKm2=area,
                meanMm=mean, publishedMeanMm=published,
                unweightedBandMeanMm=math.fsum(b['annualMm'] for b in bands)/len(bands),
                waterVolumeM3=math.fsum(b['annualMm'] * b['areaKm2'] * 1000 for b in bands),
                winterMm=finite(total['winter mass balance']), summerMm=finite(total['summer mass balance']))


if __name__ == '__main__':
    print(json.dumps(calculate(Path(__file__).resolve().parent), ensure_ascii=False, indent=2))
