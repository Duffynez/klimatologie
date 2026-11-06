"""Reproduce the chart from rounded SST trends printed in Armour et al. (2016).
No reanalysis of ERSST, no digitisation, no invented uncertainty estimates.
Run: python plot.py. Requires matplotlib. Graphic and script: CC BY 4.0.
"""
from pathlib import Path
import csv
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter

folder = Path(__file__).resolve().parent
with (folder / "armour2016-sst.csv").open(encoding="utf-8", newline="") as f:
    rows = list(csv.DictReader(f))
assert [r["region"] for r in rows] == ["south_of_50S", "40S_to_50S", "global_ocean"]
assert all(r["period"] == "1950-2012" for r in rows)
values = [float(r["trend_C_per_decade"]) for r in rows]
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 15,
                     "text.color": "#18373b", "axes.labelcolor": "#18373b"})
fig, ax = plt.subplots(figsize=(12, 6.5), dpi=120)
fig.set_facecolor("#f7f7f2")
ax.set_facecolor("#f7f7f2")
fig.subplots_adjust(left=.28, right=.94, bottom=.24, top=.77)
labels = ["Jižně od 50° j. š.", "Pás 40–50° j. š.", "Celý světový oceán"]
ax.barh(labels, values, height=.49, color=["#42848c", "#c85838", "#7f898a"], zorder=3)
ax.invert_yaxis()
ax.set_xlim(0, .125)
ax.set_xticks([0, .02, .04, .06, .08, .10, .12])
ax.xaxis.set_major_formatter(FuncFormatter(lambda v, _: f"{v:.2f}".replace(".", ",")))
ax.set_xlabel("Trend povrchové teploty (°C za deset let)", labelpad=14)
ax.grid(axis="x", color="#d8ddda", zorder=0)
ax.tick_params(axis="both", length=0, pad=10)
for spine in ax.spines.values():
    spine.set_visible(False)
for i, v in enumerate(values):
    ax.text(v + .003, i, f"{v:.2f}".replace(".", ","), va="center", weight="bold")
fig.text(.07, .93, "Hladina Jižního oceánu se oteplovala nerovnoměrně", fontsize=21, weight="bold")
fig.text(.07, .865, "1950–2012 • publikované trendy z dat NOAA ERSST v3b", fontsize=15)
fig.text(.07, .09, "Zdroj: Armour a kol. 2016, DOI 10.1038/ngeo2731. Zaokrouhlené hodnoty z textu studie.", fontsize=11)
fig.text(.07, .052, "Graf neudává obsah tepla vodního sloupce. Intervaly nejistoty těchto tří údajů nejsou v textu uvedeny.", fontsize=11)
fig.savefig(folder / "povrchove-trendy.png", dpi=120)
fig.savefig(folder / "povrchove-trendy.svg")
plt.close(fig)
