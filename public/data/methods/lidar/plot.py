"""Plot the published CSV with matplotlib. Run beside inputs.json and waveform.csv."""
import csv
import json
from pathlib import Path
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

BASE = Path(__file__).resolve().parent
inputs = json.loads((BASE / "inputs.json").read_text(encoding="utf-8"))
with (BASE / "waveform.csv").open(encoding="utf-8") as stream:
    rows = list(csv.DictReader(stream))
step = (inputs["elevation_bin0_m"] - inputs["elevation_lastbin_m"]) / (inputs["sample_count"] - 1)
heights = [(inputs["ground_bin"] - int(row["bin_zero_based"])) * step for row in rows]
signal = [float(row["received_counts"]) - inputs["noise_mean_corrected_counts"] for row in rows]
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 19, "svg.fonttype": "path", "svg.hashsalt": "klimatologie-gedi-20190418"})
fig, ax = plt.subplots(figsize=(7.6, 7.2), dpi=100)
fig.set_facecolor("#f5f8f7")
ax.plot(signal, heights, color="#256e9b", linewidth=1.6)
ax.axhline(0, color="#676f70", linewidth=1.2)
ax.axhline(inputs["product_rh98_m"], color="#b85f2a", linestyle="--", linewidth=1.7)
ax.text(97, 11.7, "RH98 = 10,90 m", color="#9d4c1e", fontsize=19)
ax.text(125, -4.3, "Odhadnutá půda", color="#4b5455", fontsize=18)
ax.set_ylim(-8, 21)
ax.set_xlim(-16, 310)
ax.set_ylabel("Výška nad odhadnutou půdou (m)")
ax.set_xlabel("Signál po odečtení pozadí\n(číselné jednotky přijímače)", labelpad=12)
ax.set_title("Návrat jednoho pulzu GEDI", loc="left", fontsize=23, pad=17, weight="bold")
ax.spines[["top", "right"]].set_visible(False)
ax.grid(axis="y", color="#dbe4e3", linewidth=0.7)
ax.set_axisbelow(True)
fig.subplots_adjust(left=0.17, bottom=0.21, right=0.96, top=0.88)
fig.text(0.17, 0.025, "Cerrado, 18. 4. 2019 · GEDI V001 / rGEDI", fontsize=14, color="#465e65")
fig.savefig(BASE / "gedi-waveform.svg", metadata={"Date": None})
svg = BASE / "gedi-waveform.svg"
svg.write_text("\n".join(line.rstrip() for line in svg.read_text(encoding="utf-8").splitlines()) + "\n", encoding="utf-8", newline="\n")
