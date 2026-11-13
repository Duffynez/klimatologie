"""Reproduce the published CERES EBAF 4.0 summary graph.
Source: NASA CERES EBAF Edition 4.0 DQS (2018-01-17), table 6-1.
These are transcribed published global averages, not a new satellite retrieval.
Requirements: Python 3, matplotlib. Run from any directory. CC BY 4.0.
"""
from pathlib import Path
import csv
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
base = Path(__file__).resolve().parent
with (base / "ceres-table6-1.csv").open(encoding="utf-8", newline="") as f:
    rows = [r for r in csv.DictReader(f) if r["edition"] == "4.0"]
assert [r["component"] for r in rows] == ["shortwave", "longwave", "net"]
values = [float(r["value_w_m2"]) for r in rows]
assert values == [-45.8, 28.0, -17.9]
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 16})
fig, ax = plt.subplots(figsize=(14, 7.9), dpi=100)
fig.patch.set_facecolor("#f7f7f1")
ax.set_facecolor("#f7f7f1")
ax.barh([2,1,0], values, height=.52, color=["#277789","#c55d3a","#163c40"])
ax.set_yticks([2,1,0], ["Odraz slunečního světla","Omezení úniku\ntepelného záření","Čistý účinek"])
ax.set_xlim(-55, 38)
ax.set_ylim(-.6,2.65)
ax.axvline(0,color="#163c40",lw=1.2)
ax.set_xlabel("Radiační účinek oblaků (W/m²)",labelpad=18)
ax.grid(axis="x",alpha=.18)
ax.set_axisbelow(True)
for y,v in zip([2,1,0],values):
    label=("{:+.1f}".format(v)).replace(".",",").replace("-","−")
    ax.text(v + (-1.1 if v<0 else 1.1),y,label,va="center",ha="right" if v<0 else "left",weight="bold",color="#163c40")
for spine in ax.spines.values():spine.set_visible(False)
ax.tick_params(axis="y",length=0,pad=15)
fig.text(.06,.93,"Dva opačné účinky oblaků",fontsize=29,weight="bold",color="#163c40")
fig.text(.06,.875,"Celá Země · červenec 2005 až červen 2015 · CERES EBAF 4.0",fontsize=17,color="#526b72")
fig.text(.30,.135,"← záporný příspěvek k bilanci",fontsize=14,color="#277789")
fig.text(.66,.135,"kladný příspěvek →",fontsize=14,color="#c55d3a")
fig.text(.06,.055,"Zdroj: NASA CERES (2018), tabulka 6-1. Publikované zaokrouhlené hodnoty.\nVlastní graf Klimatologie.eu · CC BY 4.0",fontsize=12,color="#526b72")
fig.subplots_adjust(left=.30,right=.96,top=.79,bottom=.26)
fig.savefig(base/"radiacni-ucinek.png")

