"""Repeat the final GEDI relative-height conversion using Python's standard library.

Download inputs.json beside this file, then run: python reproduce.py
Ground and energy-percentile positions are NASA L2A processed inputs.
"""
import json
from pathlib import Path

BASE = Path(__file__).resolve().parent


def calculate(inputs):
    step = (inputs["elevation_bin0_m"] - inputs["elevation_lastbin_m"]) / (inputs["sample_count"] - 1)
    return {
        "shot_number": inputs["shot_number"],
        "vertical_step_m": step,
        "rh98_m": (inputs["ground_bin"] - inputs["rh98_bin"]) * step,
        "rh100_m": (inputs["ground_bin"] - inputs["rh100_bin"]) * step,
        "product_rh98_m": inputs["product_rh98_m"],
        "product_rh100_m": inputs["product_rh100_m"],
        "scope": "Final conversion of processed bin positions to relative height, not a new waveform retrieval.",
    }


if __name__ == "__main__":
    result = calculate(json.loads((BASE / "inputs.json").read_text(encoding="utf-8")))
    text = json.dumps(result, indent=2) + "\n"
    (BASE / "result.json").write_text(text, encoding="utf-8", newline="\n")
    print(text, end="")
