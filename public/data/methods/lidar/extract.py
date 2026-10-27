"""Extract one documented GEDI V001 shot. Requires Python and h5py 3.16.0.

Run: python extract.py
Downloads two small frozen rGEDI example archives and verifies their SHA-256.
Writes inputs.json and waveform.csv next to this script. Does not repeat the
NASA waveform smoothing, ground selection or cumulative-energy processing.
"""
import csv
import hashlib
import io
import json
from pathlib import Path
from urllib.request import urlopen
import zipfile

import h5py

BASE = Path(__file__).resolve().parent
COMMIT = "d91c170a9088f21dc4e62ba5436b6959860bd43b"
URL = f"https://raw.githubusercontent.com/carlos-alberto-silva/rGEDI/{COMMIT}/inst/extdata/"
FILES = [
    ("GEDI01_B_2019108080338_O01964_T05337_02_003_01_sub", "ba3d3a396cd073af0337f4c0abb0068c723dc2627d8a26f75e06efc177d0d1ed"),
    ("GEDI02_A_2019108080338_O01964_T05337_02_001_01_sub", "f2cacaf9bd903f42d2df671afa4dd3269f5162f3b3300eb0fffb6bffbee05177"),
]
SHOT = 19640521100108408
BEAM = "BEAM0101"


def read_archive(name, expected):
    with urlopen(URL + name + ".zip", timeout=90) as response:
        raw = response.read()
    if hashlib.sha256(raw).hexdigest() != expected:
        raise ValueError("Archive checksum mismatch: " + name)
    with zipfile.ZipFile(io.BytesIO(raw)) as archive:
        members = [n for n in archive.namelist() if Path(n).name == name + ".h5"]
        if len(members) != 1:
            raise ValueError("Expected one HDF5 member")
        return io.BytesIO(archive.read(members[0]))


def shot_index(beam):
    matches = [i for i, shot in enumerate(beam["shot_number"][:]) if int(shot) == SHOT]
    if len(matches) != 1:
        raise ValueError("Shot is absent or ambiguous")
    return matches[0]


def main():
    with h5py.File(read_archive(*FILES[0]), "r") as l1, h5py.File(read_archive(*FILES[1]), "r") as l2:
        b1, b2 = l1[BEAM], l2[BEAM]
        i1, i2 = shot_index(b1), shot_index(b2)
        count = int(b1["rx_sample_count"][i1])
        # NASA rx_sample_start_index is one-based, Python slices are zero-based.
        start = int(b1["rx_sample_start_index"][i1]) - 1
        wave = b1["rxwaveform"][start:start + count]
        algorithm = int(b2["selected_algorithm"][i2])
        proc = b2[f"rx_processing_a{algorithm}"]
        inputs = {
            "shot_number": str(SHOT), "beam": BEAM, "version": "001",
            "date": "2019-04-18", "subset_indices_zero_based": [i1, i2],
            "latitude_deg": float(b2["lat_lowestmode"][i2]),
            "longitude_deg": float(b2["lon_lowestmode"][i2]),
            "sample_count": count, "rx_sample_start_index_one_based": start + 1,
            "elevation_bin0_m": float(b1["geolocation/elevation_bin0"][i1]),
            "elevation_lastbin_m": float(b1["geolocation/elevation_lastbin"][i1]),
            "noise_mean_corrected_counts": float(b1["noise_mean_corrected"][i1]),
            "ground_bin": float(proc["zcross"][i2]),
            "rh98_bin": float(proc["rx_cumulative"][i2, 98]),
            "rh100_bin": float(proc["rx_cumulative"][i2, 100]),
            "selected_algorithm": algorithm,
            "quality_flag": int(b2["quality_flag"][i2]),
            "degrade_flag": int(b2["degrade_flag"][i2]),
            "product_ground_elevation_m": float(b2["elev_lowestmode"][i2]),
            "product_rh98_m": float(b2["rh"][i2, 98]),
            "product_rh100_m": float(b2["rh"][i2, 100]),
        }
        (BASE / "inputs.json").write_text(json.dumps(inputs, indent=2) + "\n", encoding="utf-8", newline="\n")
        with (BASE / "waveform.csv").open("w", encoding="utf-8", newline="") as stream:
            writer = csv.writer(stream, lineterminator="\n")
            writer.writerow(["bin_zero_based", "received_counts"])
            writer.writerows((i, float(value)) for i, value in enumerate(wave))
    print("Extracted", SHOT, "from", BEAM, "with", count, "samples")


if __name__ == "__main__":
    main()
