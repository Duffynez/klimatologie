"""Draw the article figure from the documented GTN-P archive.

Requires matplotlib. Run: python -B plot.py path/to/barrow-grid.png
Data attribution and CC BY 4.0 terms are in example.json and reproduce.py.
Original figure: Klimatologie.eu, CC BY 4.0. No spatial interpolation.
"""
import json
from pathlib import Path
import sys
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.lines import Line2D
from reproduce import load_rows, select_rows, calculate

base = Path(__file__).resolve().parent
metadata = json.loads((base / "example.json").read_text(encoding="utf-8"))
rows = select_rows(load_rows(base / metadata["archive"]["filename"], metadata["archive"]["sha256"]))
result = calculate(rows)
valid = [r for r in rows if r["alt"] != ""]
missing = [r for r in rows if r["alt"] == ""]
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 12, "text.color": "#23363b",
                     "axes.labelcolor": "#23363b", "xtick.color": "#41575c", "ytick.color": "#41575c"})
fig, ax = plt.subplots(figsize=(9.6, 8.4), dpi=180, facecolor="#f7f8f5")
fig.subplots_adjust(left=.13, right=.83, top=.81, bottom=.17)
ax.set_facecolor("#f7f8f5")
fig.text(.09, .94, "Rozmrzlá půda v měřicí síti Barrow", fontsize=21, fontweight="bold")
fig.text(.09, .895, "CALM U1  ·  18. srpna 1996  ·  plocha 1 × 1 km", fontsize=13)
fig.text(.09, .855, "119 měřených bodů   |   průměr 35,60 cm   |   rozpětí 19–68 cm", fontsize=12)
points = ax.scatter([float(r['offset_x']) for r in valid], [float(r['offset_y']) for r in valid],
                    c=[float(r['alt']) for r in valid], vmin=15, vmax=70, cmap="viridis", s=110,
                    edgecolors="#ffffff", linewidths=.65, zorder=3)
ax.scatter([float(r['offset_x']) for r in missing], [float(r['offset_y']) for r in missing],
           marker="x", s=100, color="#657477", linewidths=2, zorder=3)
ax.set(xlim=(-60, 1060), ylim=(-60, 1060), xlabel="Souřadnice x v síti (m)", ylabel="Souřadnice y v síti (m)")
ax.set_aspect('equal')
ax.set_xticks(range(0,1001,200))
ax.set_yticks(range(0,1001,200))
ax.grid(color="#d9e0da", linewidth=.7, zorder=0)
for spine in ax.spines.values(): spine.set_color('#b4c3be')
cax = fig.add_axes([.87, .29, .025, .40])
bar = fig.colorbar(points, cax=cax, ticks=[20,30,40,50,60,70])
bar.set_label("Hloubka pod povrchem (cm)", labelpad=9)
bar.outline.set_visible(False)
fig.legend(handles=[Line2D([0], [0], color='#657477', marker='x', linestyle='None', markersize=9,
                         markeredgewidth=2, label='Bez měření kvůli vodě (2 body)')],
           loc='upper left', bbox_to_anchor=(.12,.12), frameon=False, fontsize=11, borderaxespad=0)
fig.text(.09,.055,"Body znázorňují zveřejněné průměry vpichů. Prostor mezi nimi není dopočítán.",fontsize=10)
fig.text(.09,.028,"Data: N. Shiklomanov / CALM, GTN-P  ·  Graf: Klimatologie.eu  ·  CC BY 4.0",fontsize=9,color='#526a6e')
out = Path(sys.argv[1]) if len(sys.argv)>1 else Path('barrow-grid.png')
out.parent.mkdir(parents=True,exist_ok=True)
fig.savefig(out, facecolor=fig.get_facecolor(), metadata={'Description':'CALM U1 Barrow 1996-08-18, GTN-P dataset 14, CC BY 4.0'})
print(out)
