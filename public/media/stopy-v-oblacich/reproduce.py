"""Draw published estimates, not a new retrieval or a new causal analysis.
Input: manually checked transcription of Diamond (2023), Supplement Table S1.
Run: python reproduce.py. Requires matplotlib. Output: diamond-2023.png.
"""
from pathlib import Path
import csv
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter

base = Path(__file__).resolve().parent
with (base / "diamond-2023-table-s1.csv").open(encoding="utf-8", newline="") as stream:
    rows = list(csv.DictReader(stream))
assert len(rows) == 7 and all(row["season"] == "SON" for row in rows)

plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 12, "text.color": "#163639", "axes.labelcolor": "#163639"})
fig, axes = plt.subplots(1, 2, figsize=(12, 6.8), sharey=True)
fig.patch.set_facecolor("#f7f6f0")
specs = [
    ("radius_difference_um", "radius_ci95_low_um", "radius_ci95_high_um", "A  Velikost kapek", "Rozdíl efektivního poloměru (µm)", (-0.98, 0.12)),
    ("overcast_albedo_difference_pp", "albedo_ci95_low_pp", "albedo_ci95_high_pp", "B  Odraz slunečního záření", "Rozdíl odrazivosti (procentní body)", (-0.15, 1.72)),
]
for ax, (value, lower, upper, title, label, limits) in zip(axes, specs):
    ax.set_facecolor("#f7f6f0")
    for i, row in enumerate(rows):
        mean, lo, hi = (float(row[key]) for key in (value, lower, upper))
        assert lo <= mean <= hi
        ax.errorbar(mean, i, xerr=[[mean-lo], [hi-mean]], fmt="o", color="#ba5038" if i == 6 else "#276c75", capsize=5, markersize=7, linewidth=2)
    ax.axvline(0, color="#63747a", lw=1, linestyle="--")
    ax.axhspan(5.5, 6.5, color="#ba5038", alpha=0.075)
    ax.set_xlim(limits)
    ax.set_ylim(6.7, -0.7)
    ax.set_title(title, loc="left", fontsize=15, pad=17, fontweight="bold")
    ax.set_xlabel(label, labelpad=13)
    ax.xaxis.set_major_formatter(FuncFormatter(lambda value, position: f"{value:g}".replace(".", ",").replace("-", "−")))
    ax.set_yticks(range(7), [r["period"].replace("-", "–") for r in rows])
    ax.grid(axis="x", color="#dce2df", lw=0.7)
    ax.set_axisbelow(True)
    for spine in ax.spines.values(): spine.set_visible(False)
fig.suptitle("Lodní koridor v jihovýchodním Atlantiku", x=0.08, y=0.97, ha="left", fontsize=21, fontweight="bold")
fig.text(0.08, 0.9, "Září–listopad • koridor minus statistický odhad bez lodí", fontsize=13)
fig.text(0.08, 0.075, "Body: publikované odhady. Úsečky: 95% intervaly spolehlivosti.\nOranžově: 2020–2022. Nula: žádný rozdíl vůči odhadu bez lodí.", fontsize=11)
fig.text(0.08, 0.018, "Zdroj: Diamond (2023), doplňková tabulka S1. Překreslení: Klimatologie.eu, CC BY 4.0.", fontsize=10)
fig.subplots_adjust(left=0.13, right=0.97, top=0.79, bottom=0.22, wspace=0.25)
fig.savefig(base / "diamond-2023.png", dpi=180, facecolor=fig.get_facecolor())
plt.close(fig)
