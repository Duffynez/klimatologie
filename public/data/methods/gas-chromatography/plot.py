"""Plot the published calibrated values from NOAA table A1. Requires matplotlib."""
from pathlib import Path
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter, MultipleLocator
from reproduce import reproduce

BASE = Path(__file__).resolve().parent
rows, summary = reproduce()
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 12})
fig, ax = plt.subplots(figsize=(10, 5), dpi=180)
fig.patch.set_facecolor("#ffffff")
ax.scatter(range(1, 21), [r["reported_ch4_ppb"] for r in rows],
           s=44, color="#246e97", zorder=3, label="Jednotlivá analýza stejné lahve")
ax.axhline(summary["mean_ppb"], color="#b86624", lw=1.8, linestyle="--",
           label="Průměr 1 851,79 ppb", zorder=2)
ax.set(xlabel="Pořadí analýzy dne 23. července 2015",
       ylabel="Molární zlomek metanu (ppb)", xlim=(0.3, 20.7), ylim=(1850, 1854))
ax.set_xticks([1, 5, 10, 15, 20])
ax.yaxis.set_major_locator(MultipleLocator(1))
ax.yaxis.set_major_formatter(FuncFormatter(lambda v, _: f"{v:,.0f}".replace(",", " ")))
ax.grid(axis="y", color="#e0e4e8", linewidth=0.7)
ax.spines[["top", "right"]].set_visible(False)
ax.legend(loc="upper center", frameon=False, ncol=2, fontsize=11)
fig.subplots_adjust(left=0.12, right=0.98, top=0.95, bottom=0.17)
fig.savefig(BASE / "repeated-analyses.png", dpi=180)
plt.close(fig)
