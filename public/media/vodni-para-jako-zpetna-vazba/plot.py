"""Reproduce the published-summary comparison. Run: python plot.py.
Requires matplotlib. Input is pinatubo.csv in this script's directory.
Positive bar lengths mean magnitudes of cooling, not warming anomalies.
"""
import csv
from pathlib import Path
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter

base = Path(__file__).resolve().parent
with (base / 'pinatubo.csv').open(encoding='utf-8') as f:
    rows = list(csv.DictReader(f))
plt.rcParams.update({'font.family': 'DejaVu Sans', 'font.size': 15,
                     'text.color': '#163638', 'axes.labelcolor': '#163638',
                     'xtick.color': '#4c6264', 'ytick.color': '#163638',
                     'svg.hashsalt': 'water-vapour-pinatubo'})
fig, ax = plt.subplots(figsize=(14, 7.6), dpi=100, facecolor='#f7f7f2')
ax.set_facecolor('#f7f7f2')
labels = ['Družicový odhad', 'Model s odezvou\nvodní páry', 'Model s potlačenou\ndlouhovlnnou odezvou páry']
values = [float(r['cooling_C']) for r in rows]
ax.barh(range(3), values, color=['#176a7b', '#bd593d', '#89958e'], height=.48)
ax.set_yticks(range(3), labels)
ax.invert_yaxis()
for i, v in enumerate(values):
    ax.text(v + .008, i, f'{v:.2f} °C'.replace('.', ','), va='center', weight='bold', fontsize=18)
ax.set_xlim(0, .39)
ax.set_xticks([0, .1, .2, .3])
ax.xaxis.set_major_formatter(FuncFormatter(lambda x, _: f'{x:.1f}'.replace('.', ',')))
ax.set_xlabel('Průměrná velikost ochlazení dolní troposféry (°C)', labelpad=18)
ax.xaxis.grid(True, color='#d9dfd9', linewidth=.8)
ax.set_axisbelow(True)
ax.tick_params(axis='both', length=0, pad=12)
for spine in ax.spines.values(): spine.set_visible(False)
fig.text(.045, .935, 'Ochlazení po Pinatubu: co přidala vodní pára', fontsize=23, weight='bold')
fig.text(.045, .875, 'Červen 1991 až prosinec 1995 • pozorování a dva modelové pokusy', fontsize=15)
fig.text(.045, .08, 'Delší sloupec = větší ochlazení. Pozorování zde nemá odstraněný vliv El Niño.', fontsize=12)
fig.text(.045, .04, 'Zdroj: Soden a kol. (2002), s. 729. Přepis souhrnných hodnot. Pro tuto trojici nejsou uvedeny společné intervaly nejistoty.', fontsize=11)
fig.subplots_adjust(left=.32, right=.94, top=.79, bottom=.24)
fig.savefig(base / 'pinatubo.png', dpi=100)
fig.savefig(base / 'pinatubo.svg', metadata={'Date': None})
