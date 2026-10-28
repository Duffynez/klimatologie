"""Repeat the published ITS_LIVE example, optionally checking the original NetCDF.

Run: python reproduce.py
Full verification: python reproduce.py --netcdf PATH_TO_ORIGINAL.nc
The second mode requires netCDF4, numpy and pyproj. No network is used.
"""

import argparse
import csv
import hashlib
import json
import math
from datetime import datetime
from pathlib import Path

BASE = Path(__file__).resolve().parent
DAYS_PER_YEAR = 365.25


def sha256(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def verify_original(path, row, provenance):
    import netCDF4
    import numpy as np
    import pyproj

    if sha256(path) != provenance["netcdf_sha256"]:
        raise ValueError("The NetCDF checksum does not match the frozen sample.")
    with netCDF4.Dataset(path) as dataset:
        transform = pyproj.Transformer.from_crs(4326, 3413, always_xy=True)
        px, py = transform.transform(*provenance["target_lon_lat"])
        ix = int(np.argmin(abs(dataset["x"][:] - px)))
        iy = int(np.argmin(abs(dataset["y"][:] - py)))
        assert (ix, iy) == (int(row["x_index"]), int(row["y_index"]))
        for name in ["vx", "vy", "v", "v_error", "chip_size_width", "chip_size_height", "interp_mask"]:
            # The 2021 sample also marks zero as _FillValue for interp_mask.
            # Read its stored byte so a genuine zero is retained in the extract.
            dataset[name].set_auto_mask(False)
            assert float(dataset[name][iy, ix]) == float(row[name]), name
        x, y = float(dataset["x"][ix]), float(dataset["y"][iy])
        assert x == float(row["x_m"]) and y == float(row["y_m"])
        lon, lat = transform.transform(x, y, direction="INVERSE")
        factors = pyproj.Proj("EPSG:3413").get_factors(lon, lat)
        assert math.isclose(factors.meridional_scale, factors.parallel_scale, rel_tol=1e-8)
        assert math.isclose(factors.meridional_scale, float(row["map_scale"]), rel_tol=1e-8)
        for name in ["acquisition_img1", "acquisition_img2"]:
            assert getattr(dataset["img_pair_info"], name) == row[name]
        for name in ["vx", "vy"]:
            for attr in [f"{name}_error", "stable_shift", "flag_stable_shift"]:
                assert float(getattr(dataset[name], attr)) == provenance["calibration"][name][attr]
        assert float(dataset["mapping"].spatial_epsg) == 3413
    print("Original NetCDF, selected cell, calibration attributes and map scale verified.")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--netcdf", type=Path)
    args = parser.parse_args()
    provenance = json.loads((BASE / "provenance.json").read_text(encoding="utf-8"))
    if sha256(BASE / "sample.csv") != provenance["sample_csv_sha256"]:
        raise ValueError("The CSV checksum does not match the published extract.")
    with (BASE / "sample.csv").open(encoding="utf-8", newline="") as handle:
        rows = list(csv.DictReader(handle))
    assert len(rows) == 1
    row = rows[0]
    if args.netcdf:
        verify_original(args.netcdf, row, provenance)
    fmt = "%Y%m%dT%H:%M:%S.%f"
    dt = (datetime.strptime(row["acquisition_img2"], fmt)
          - datetime.strptime(row["acquisition_img1"], fmt)).total_seconds() / 86400
    vx, vy = float(row["vx"]), float(row["vy"])
    map_speed = math.hypot(vx, vy)
    scale = float(row["map_scale"])
    speed = map_speed / scale
    displacement = speed * dt / DAYS_PER_YEAR
    displacement_error = float(row["v_error"]) / scale * dt / DAYS_PER_YEAR
    assert abs(map_speed - float(row["v"])) < 1.5  # Integer-quantized source fields.
    print(json.dumps({
        "elapsed_days": dt,
        "map_speed_m_per_year": map_speed,
        "map_scale": scale,
        "horizontal_speed_m_per_year": speed,
        "horizontal_speed_m_per_day": speed / DAYS_PER_YEAR,
        "horizontal_displacement_m": displacement,
        "provider_error_converted_to_displacement_m": displacement_error,
        "interpretation": "Interval-mean surface motion. Not a measured annual path or mass balance."
    }, indent=2))


if __name__ == "__main__":
    main()
