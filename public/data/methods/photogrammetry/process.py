"""Rebuild the article's alignment and 400-cell table from the supplied GeoTIFFs.

Run in this directory: python process.py
Dependencies used: numpy 2.5.4, scipy 1.18.1, rasterio 1.5.2.
The three shifts are fitted by direct robust residual minimization, NOT the
Nuth-Kaab slope/aspect cosine algorithm. No glacier cells enter the fit.
Outputs patch.csv and calculated.json. Published example.json remains unchanged.
"""
from pathlib import Path
import csv
import hashlib
import json
import numpy as np
import scipy
import rasterio
from scipy.ndimage import map_coordinates
from scipy.optimize import least_squares

BASE = Path(__file__).resolve().parent


def calculate():
    meta = json.loads((BASE / 'example.json').read_text(encoding='utf-8'))
    arrays = []
    for name in ['DEM_1990.tif', 'DEM_2009_ref.tif', 'excluded-glaciers.tif']:
        assert hashlib.sha256((BASE/name).read_bytes()).hexdigest() == meta['sha256'][name]
        with rasterio.open(BASE/name) as ds:
            assert ds.crs.to_epsg() == 25833
            assert list(ds.transform)[:6] == meta['grid']['affine']
            arrays.append(ds.read(1).astype(float))
    old, ref, excluded = arrays
    rr, cc = np.indices(ref.shape)
    gy, gx = np.gradient(ref, 20)
    slope = np.degrees(np.arctan(np.hypot(gx, gy)))
    stable = ((old > -9000) & (ref > 50) & (slope > 5) & (slope < 45)
              & (abs(ref-old) < 50) & (excluded == 0)
              & (rr > 5) & (cc > 5) & (rr < ref.shape[0]-6) & (cc < ref.shape[1]-6))
    heldout = stable & ((rr//20 + cc//20) % 5 == 0)
    r, c = np.where(stable & ~heldout)
    ix = np.random.default_rng(42).choice(len(r), 12000, replace=False)
    r, c = r[ix], c[ix]
    assert not np.any(heldout[r, c])

    def residual(p):
        return map_coordinates(old, [r+p[0], c+p[1]], order=1,
                               mode='constant', cval=np.nan, prefilter=False) + p[2] - ref[r, c]

    fit = least_squares(residual, [0, 0, 0], bounds=([-2, -2, -20], [2, 2, 20]),
                        loss='soft_l1', f_scale=3, xtol=1e-11, ftol=1e-11, gtol=1e-11)
    assert fit.success and np.all(np.isfinite(fit.fun))
    aligned = map_coordinates(old, [rr+fit.x[0], cc+fit.x[1]], order=1,
                              mode='constant', cval=np.nan, prefilter=False) + fit.x[2]
    dh = ref - aligned
    p = meta['patch']
    window = np.s_[p['row_start']:p['row_stop_exclusive'], p['col_start']:p['col_stop_exclusive']]
    assert np.all(np.isfinite(dh[window])) and np.all(old[window] > -9000)
    assert np.all(ref[window] > -9000) and np.all(excluded[window] == 1)
    with (BASE/'patch.csv').open('w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f, lineterminator='\n')
        writer.writerow(['row','col','easting_m','northing_m','area_m2',
                         'z1990_raw_m','z1990_aligned_m','z2009_m','dh_m'])
        for row in range(p['row_start'], p['row_stop_exclusive']):
            for col in range(p['col_start'], p['col_stop_exclusive']):
                writer.writerow([row, col, 502810+(col+0.5)*20, 8674030-(row+0.5)*20, 400,
                                 f'{old[row,col]:.9f}', f'{aligned[row,col]:.9f}',
                                 f'{ref[row,col]:.9f}', f'{dh[row,col]:.9f}'])

    def stats(x):
        median = np.median(x)
        return {'count':int(x.size), 'median_m':float(median),
                'nmad_m':float(1.4826*np.median(abs(x-median))),
                'rmse_m':float(np.sqrt(np.mean(x*x)))}

    result = {'parameters_row_col_z':fit.x.tolist(), 'fit_count':len(r),
              'before':stats((ref-old)[heldout]), 'after':stats(dh[heldout]),
              'patch_cells':int(dh[window].size), 'area_m2':int(dh[window].size*400),
              'mean_dh_m':float(dh[window].mean()), 'volume_change_m3':float(dh[window].sum()*400),
              'csv_sha256_lf':hashlib.sha256((BASE/'patch.csv').read_bytes()).hexdigest(),
              'versions':{'numpy':np.__version__, 'scipy':scipy.__version__, 'rasterio':rasterio.__version__}}
    (BASE/'calculated.json').write_text(json.dumps(result, indent=2)+'\n', encoding='utf-8')
    print(json.dumps(result, indent=2))
    return old, ref, aligned, dh


if __name__ == '__main__':
    calculate()
