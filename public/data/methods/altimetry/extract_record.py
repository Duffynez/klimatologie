"""Export one historical Jason-3 GDR-D record. Requires netCDF4.

Usage: python extract_record.py ORIGINAL.nc OUTPUT.json
The source SHA-256 is checked before interpreting any fields.
"""

import hashlib
import json
import sys
from decimal import Decimal
from pathlib import Path

from netCDF4 import Dataset, num2date

SOURCE_URL = (
    "https://www.ncei.noaa.gov/data/oceans/jason3/gdr_d/gdr/cycle066/"
    "JA3_GPN_2PdP066_082_20171126_024626_20171126_034239.nc"
)
SOURCE_SHA256 = "81d8caa581daafc24db725e2862538a2f9149c052fb7feb82c4414e7e31c29ad"
INDEX = 1500
FIELDS = (
    "alt range_ku model_dry_tropo_corr rad_wet_tropo_corr iono_corr_alt_ku "
    "sea_state_bias_ku mean_sea_surface ocean_tide_sol1 solid_earth_tide "
    "pole_tide inv_bar_corr hf_fluctuations_corr ssha lat lon "
    "surface_type alt_echo_type rad_surf_type rain_flag ice_flag "
    "qual_alt_1hz_range_ku qual_inst_corr_1hz_range_ku range_numval_ku "
    "range_rms_ku rad_distance_to_land swh_ku sig0_ku wind_speed_alt "
    "off_nadir_angle_wf_ku orb_state_flag_rest interp_flag_mean_sea_surface"
).split()


def extract(path):
    if hashlib.sha256(path.read_bytes()).hexdigest() != SOURCE_SHA256:
        raise ValueError("The input is not the documented GDR-D file.")
    with Dataset(path) as data:
        result = {
            "source_url": SOURCE_URL,
            "source_sha256": SOURCE_SHA256,
            "accessed": "2026-10-28",
            "product": "Jason-3 GDR-D, cycle 066, pass 082",
            "record_index_zero_based": INDEX,
            "time_utc": num2date(data["time"][INDEX], data["time"].units).isoformat(),
            "ellipsoid_axis_m": str(data.ellipsoid_axis),
            "ellipsoid_flattening": str(data.ellipsoid_flattening),
            "fields": {},
        }
        for name in FIELDS:
            var = data[name]
            var.set_auto_maskandscale(False)
            raw = int(var[INDEX])
            if raw == getattr(var, "_FillValue", None):
                raise ValueError(f"Missing value: {name}")
            scale = str(getattr(var, "scale_factor", 1))
            offset = str(getattr(var, "add_offset", 0))
            value = Decimal(raw) * Decimal(scale) + Decimal(offset)
            result["fields"][name] = {
                "raw": raw, "scale_factor": scale, "add_offset": offset,
                "value": format(value, "f"), "units": getattr(var, "units", "1"),
                "description": var.long_name,
            }
            for attr in ("source", "comment", "flag_meanings"):
                if attr in var.ncattrs():
                    result["fields"][name][attr] = var.getncattr(attr)
    return result


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("Usage: python extract_record.py ORIGINAL.nc OUTPUT.json")
    Path(sys.argv[2]).write_text(
        json.dumps(extract(Path(sys.argv[1])), ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8", newline="\n",
    )
