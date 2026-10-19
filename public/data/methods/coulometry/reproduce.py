"""Reproduce the two analyses in Johnson (1992), Figure 10. Python 3, standard library only."""
import csv
import hashlib
import json
import math
from pathlib import Path
from statistics import mean, stdev

BASE = Path(__file__).resolve().parent


def calculate():
    meta = json.loads((BASE / 'example.json').read_text(encoding='utf-8'))
    csv_text = (BASE / 'somma-1992-counts.csv').read_text(encoding='utf-8').replace('\r\n', '\n')
    if hashlib.sha256(csv_text.encode()).hexdigest() != meta['csv_sha256_lf']:
        raise ValueError('Input CSV differs from the verified transcription.')
    rows = list(csv.DictReader(csv_text.splitlines()))
    results = []
    for replicate in (1, 2):
        series = [r for r in rows if int(r['replicate']) == replicate]
        if [int(r['elapsed_min']) for r in series] != list(range(1, 11)):
            raise ValueError('Each analysis must contain all ten readings in time order.')
        counts = int(series[-1]['cumulative_counts'])
        nominal = counts / meta['counts_per_umol_nominal']
        background = meta['background_umol_per_min'] * meta['analysis_duration_min']
        electronic_offset = meta['electronic_intercept_umol_per_min'] * meta['significant_current_duration_min']
        corrected = (nominal - background - electronic_offset) / meta['electronic_slope']
        calibrated = corrected * meta['gas_calibration_factor']
        concentration = calibrated * meta['published_volume_factor_per_kg']
        results.append(dict(replicate=replicate, counts=counts, nominal_umol=nominal,
                            background_umol=background, electronic_offset_umol=electronic_offset,
                            corrected_umol=corrected, calibrated_umol=calibrated,
                            concentration_umol_per_kg=concentration))
    if len(rows) != 20:
        raise ValueError('Unexpected rows outside the two analyses.')
    return meta, results


if __name__ == '__main__':
    meta, results = calculate()
    for r in results:
        print('Replicate', r['replicate'], ':', r['counts'], 'counts')
        print(f"  Nominal: {r['nominal_umol']:.8f} umol")
        print(f"  Background: {r['background_umol']:.8f} umol; electronic offset: {r['electronic_offset_umol']:.9f} umol")
        print(f"  Corrected: {r['corrected_umol']:.8f} umol; gas-calibrated: {r['calibrated_umol']:.8f} umol")
        print(f"  Concentration: {r['concentration_umol_per_kg']:.6f} umol/kg")
    values = [r['concentration_umol_per_kg'] for r in results]
    print(f'Mean: {mean(values):.6f} umol/kg')
    print(f'Sample standard deviation of these two results: {stdev(values):.6f} umol/kg')
    print(f'Standard error of their mean: {stdev(values)/math.sqrt(2):.6f} umol/kg')
    print('These two-repeat statistics do not estimate the overall uncertainty of the method.')
    recalculated_factor = 1000 / (meta['sample_volume_ml'] * meta['sample_density_g_per_ml'])
    print(f'Reciprocal mass from rounded inputs: {recalculated_factor:.9f} per kg')
    print('Published reciprocal mass used above:', meta['published_volume_factor_per_kg'], 'per kg')
