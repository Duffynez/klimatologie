"""Plot the full calibration interval. Requires Matplotlib, no network access."""
import csv
from pathlib import Path
import sys
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

base = Path(__file__).resolve().parent
rows = list(csv.DictReader((base / "annual-comparison.csv").open(encoding="utf-8")))
output = Path(sys.argv[1]) if len(sys.argv) > 1 else base / "annual-comparison.svg"
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 18,
                     "svg.fonttype": "none", "svg.hashsalt": "coral-f14-2026"})
fig, ax = plt.subplots(figsize=(6.8, 5.4), facecolor="#f5f8f7")
fig.subplots_adjust(left=.18, right=.97, bottom=.18, top=.72)
ax.set_facecolor("#f5f8f7")
years = [int(row["year"]) for row in rows]
ax.plot(years, [float(row["ERSST_degC"]) for row in rows], color="#215d7e",
        lw=1.45, label="ERSSTv5")
ax.plot(years, [float(row["reconstructed_degC"]) for row in rows], color="#ba5721",
        lw=1.3, label="Korál F14, vlastní přepočet")
ax.set_xlim(1883, 1997)
ax.set_xticks([1900, 1930, 1960, 1990])
ax.set_yticks([26, 26.5, 27, 27.5], labels=["26,0", "26,5", "27,0", "27,5"])
ax.set_ylabel("Roční teplota (°C)")
ax.set_xlabel("Rok")
ax.grid(axis="y", color="#d2dfe0", linewidth=.8)
for side in ["top", "right"]: ax.spines[side].set_visible(False)
for side in ["left", "bottom"]: ax.spines[side].set_color("#a7babb")
ax.tick_params(length=3, color="#a7babb")
ax.legend(loc="lower left", bbox_to_anchor=(0, 1.02), frameon=False, fontsize=16,
          handlelength=2, borderaxespad=0)
fig.suptitle("Teplota moře u Fidži, 1883–1997", x=.05, y=.98, ha="left", fontsize=18)
fig.savefig(output, metadata={"Date": None, "Creator": "Klimatologie.eu"})
output.write_text(output.read_text(encoding="utf-8").replace("font-family: 'DejaVu Sans'", "font-family: 'DejaVu Sans', Arial, sans-serif"), encoding="utf-8", newline="\n")
output.write_text("\n".join(line.rstrip() for line in output.read_text(encoding="utf-8").splitlines()) + "\n", encoding="utf-8", newline="\n")
print(output)
