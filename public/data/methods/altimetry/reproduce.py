"""Reproduce the altimetry example using Python's standard library.

Keep this file beside jason3-record.json. All calculations are in metres.
The comparison checks arithmetic against the original rounded product,
not the accuracy of the satellite measurement.
"""

import json
from decimal import Decimal
from pathlib import Path

RANGE_CORRECTIONS = (
    "model_dry_tropo_corr", "rad_wet_tropo_corr",
    "iono_corr_alt_ku", "sea_state_bias_ku",
)
HEIGHT_CORRECTIONS = (
    "ocean_tide_sol1", "solid_earth_tide", "pole_tide",
    "inv_bar_corr", "hf_fluctuations_corr",
)


def calculate(record):
    v = {k: Decimal(f["value"]) for k, f in record["fields"].items()}
    for flag in (
        "surface_type", "alt_echo_type", "rad_surf_type", "rain_flag",
        "ice_flag", "qual_alt_1hz_range_ku", "qual_inst_corr_1hz_range_ku",
    ):
        if v[flag] != 0:
            raise ValueError(f"Unexpected quality/surface flag: {flag}")
    range_correction = sum(v[k] for k in RANGE_CORRECTIONS)
    corrected_range = v["range_ku"] + range_correction
    ssh = v["alt"] - corrected_range
    height_correction = sum(v[k] for k in HEIGHT_CORRECTIONS)
    sla = ssh - v["mean_sea_surface"] - height_correction
    # The archive stores ssha at 1 mm increments. Input rounding also matters.
    if abs(sla - v["ssha"]) > Decimal("0.001"):
        raise ValueError("Result disagrees with the archived ssha by > 1 mm.")
    return {
        "range_correction_m": range_correction,
        "corrected_range_m": corrected_range,
        "sea_surface_height_m": ssh,
        "height_correction_m": height_correction,
        "sea_level_anomaly_m": sla,
        "archived_ssha_m": v["ssha"],
    }


if __name__ == "__main__":
    path = Path(__file__).with_name("jason3-record.json")
    result = calculate(json.loads(path.read_text(encoding="utf-8")))
    print(json.dumps({k: format(v, "f") for k, v in result.items()}, indent=2))
