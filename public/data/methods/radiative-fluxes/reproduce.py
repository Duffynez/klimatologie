"""Reproduce the Table Mountain surface radiation budget example.

Python 3, standard library only. Keep tbl23172.dat and example.json beside
this script. Inputs are the NOAA GML one-minute SURFRAD product, not raw
instrument voltages. All timestamps label the END of the averaging minute.
"""
from pathlib import Path
import csv
import hashlib
import json
import math

BASE = Path(__file__).resolve().parent
INPUT = BASE / "tbl23172.dat"


def calculate():
    raw = INPUT.read_bytes()
    metadata = json.loads((BASE / "example.json").read_text(encoding="utf-8"))
    if hashlib.sha256(raw).hexdigest() != metadata["sha256"][INPUT.name]:
        raise ValueError("Input differs from the archived NOAA file")
    lines = raw.decode("ascii").splitlines()
    assert lines[0].strip() == "Table Mountain"
    result = []
    # Zero-based positions from NOAA README_SURFRAD.txt.
    required = {"direct_normal": 12, "diffuse": 14, "sw_up": 10,
                "lw_down": 16, "lw_up": 22}
    for line in lines[2:]:
        v = list(map(float, line.split()))
        assert len(v) == 48
        assert v[:4] == [2023, 172, 6, 21]
        minute = int(v[4] * 60 + v[5])
        if not 18 * 60 < minute <= 19 * 60:
            continue
        for name, index in required.items():
            if v[index + 1] != 0 or v[index] == -9999.9:
                raise ValueError(f"Rejected {name} at minute {minute}")
        assert 0 <= v[7] < 90 and all(v[i] >= 0 for i in required.values())
        direct_horizontal = v[12] * math.cos(math.radians(v[7]))
        sw_down = direct_horizontal + v[14]
        net = sw_down - v[10] + v[16] - v[22]
        result.append({
            "end_utc": f"2023-06-21T{int(v[4]):02}:{int(v[5]):02}:00Z",
            "end_minute_utc": minute, "zenith_deg": v[7],
            "direct_normal_W_m2": v[12], "diffuse_W_m2": v[14],
            "direct_horizontal_W_m2": direct_horizontal,
            "sw_down_W_m2": sw_down, "sw_up_W_m2": v[10],
            "lw_down_W_m2": v[16], "lw_up_W_m2": v[22],
            "net_W_m2": net, "noaa_net_W_m2": v[36],
        })
    assert [r["end_minute_utc"] for r in result] == list(range(1081, 1141))
    means = {key: sum(r[key] for r in result) / len(result)
             for key in ["sw_down_W_m2", "sw_up_W_m2", "lw_down_W_m2",
                         "lw_up_W_m2", "net_W_m2"]}
    return result, {"count": len(result), "means": means,
                    "net_energy_MJ_m2": sum(r["net_W_m2"] * 60 for r in result) / 1e6,
                    "max_difference_from_noaa_net_W_m2": max(
                        abs(r["net_W_m2"] - r["noaa_net_W_m2"]) for r in result)}


if __name__ == "__main__":
    rows, summary = calculate()
    with (BASE / "hour.csv").open("w", encoding="utf-8", newline="") as stream:
        writer = csv.DictWriter(stream, fieldnames=list(rows[0]), lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)
    print(json.dumps(summary, ensure_ascii=False, indent=2))
