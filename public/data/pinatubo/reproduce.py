"""Reproduce the 1988–1996 comparison from the adjacent unchanged input files.

Requirements: Python 3, pandas, numpy, matplotlib.
Run from any directory. The script writes temperatures.csv and temperatures.png
beside itself. No fitting, smoothing, attribution or removal of ENSO is performed.
"""
from pathlib import Path
import re
import numpy as np
import pandas as pd
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.dates as mdates

BASE = Path(__file__).resolve().parent
giss = pd.read_csv(BASE / "gistemp-input.csv", skiprows=1, na_values="***")
surface = []
for _, row in giss.iterrows():
    year = int(row.iloc[0])
    if 1988 <= year <= 1996:
        for month in range(1, 13):
            surface.append((f"{year}-{month:02d}-15", float(row.iloc[month])))
tls = {}
for line in (BASE / "uah-tls-input.txt").read_text().splitlines():
    values = re.findall(r"-?\d+(?:\.\d+)?", line)
    if len(values) == 12 and 1988 <= int(values[0]) <= 1996:
        # First GLOBAL column = monthly anomaly. Second group = running mean.
        tls[f"{int(values[0])}-{int(values[1]):02d}-15"] = float(values[2])
data = pd.DataFrame(surface, columns=["date", "gistemp_original_c"])
data["uah_tls_original_c"] = data.date.map(tls)
assert len(data) == 108 and data.notna().all().all()
baseline = data.date < "1991-01-01"
for field, output in [("gistemp_original_c", "surface_relative_1988_1990_c"),
                      ("uah_tls_original_c", "tls_relative_1988_1990_c")]:
    data[output] = data[field] - data.loc[baseline, field].mean()
data.to_csv(BASE / "temperatures.csv", index=False, float_format="%.6f")

plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 12,
                     "axes.spines.top": False, "axes.spines.right": False})
fig, axes = plt.subplots(2, 1, figsize=(11, 7.8), sharex=True)
fig.set_facecolor("#f6f5ef")
dates = pd.to_datetime(data.date)
for ax, col, title, color in [
    (axes[0], "surface_relative_1988_1990_c", "Povrch · GISTEMP v4", "#216a79"),
    (axes[1], "tls_relative_1988_1990_c", "Spodní stratosféra · UAH TLS v6.1", "#b65338")]:
    ax.set_facecolor("#f6f5ef")
    ax.plot(dates, data[col], color=color, linewidth=1.8)
    ax.axhline(0, color="#88918c", linewidth=.8)
    ax.axvline(pd.Timestamp("1991-06-15"), color="#515f56", linestyle="--", linewidth=1.2)
    ax.set_title(title, loc="left", fontweight="bold", color="#193c3e", pad=12)
    ax.set_ylabel("Odchylka teploty (°C)")
    ax.grid(axis="y", alpha=.18)
axes[0].annotate("Pinatubo\n15. června 1991", xy=(pd.Timestamp("1991-06-15"), .12),
                 xytext=(pd.Timestamp("1989-10-15"), -.32), fontsize=11,
                 arrowprops={"arrowstyle": "->", "color": "#515f56"}, color="#34483e")
axes[1].xaxis.set_major_locator(mdates.YearLocator())
axes[1].xaxis.set_major_formatter(mdates.DateFormatter("%Y"))
axes[1].set_xlim(pd.Timestamp("1988-01-01"), pd.Timestamp("1997-01-01"))
fig.suptitle("Teplotní záznam kolem erupce Pinatuba", x=.09, ha="left",
             fontsize=20, fontweight="bold", color="#193c3e")
fig.text(.09, .91, "Měsíční průměry 1988–1996 · každý záznam vztažen ke svému průměru 1988–1990", fontsize=10.5)
fig.text(.09, .035, "Různá měřítka os y. Zobrazené výkyvy zahrnují také jiné vlivy než erupci.\n"
         "Zdroj: NASA GISTEMP v4 a UAH TLS v6.1 · staženo 6. 11. 2026", fontsize=10, color="#465858")
fig.subplots_adjust(left=.09, right=.97, top=.84, bottom=.14, hspace=.35)
fig.savefig(BASE / "temperatures.png", dpi=160, facecolor=fig.get_facecolor())
print(data.groupby(data.date.str[:4]).gistemp_original_c.mean().round(3).to_string())
