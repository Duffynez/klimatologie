"""Own figure. Requires Node.js and Python with matplotlib.

Run beside calibration.csv, example.json and reproduce.mjs.
The calculation is executed again, including the CSV checksum check.
"""
from pathlib import Path
import json
import subprocess
import sys
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter

base = Path(__file__).resolve().parent
result = json.loads(subprocess.check_output(['node', str(base / 'reproduce.mjs')], text=True, encoding='utf-8'))
rows = result['rows']
background = '#faf9f5'
green = '#24695b'
plt.rcParams.update({'font.family': 'DejaVu Sans', 'font.size': 22, 'axes.spines.top': False, 'axes.spines.right': False})
fig, ax = plt.subplots(figsize=(10, 6.5), dpi=160)
fig.patch.set_facecolor(background)
ax.set_facecolor(background)
fig.subplots_adjust(left=.14, right=.97, bottom=.24, top=.82)
x = [r['temperatureC'] for r in rows]
y = [r['calculatedSm'] for r in rows]
ax.plot(x, y, '-o', color=green, linewidth=2, markersize=8)
ax.set(xlabel='Teplota lázně (°C, ITS-90)', ylabel='Vodivost (S/m)', xlim=(-4, 36), ylim=(0, 7))
ax.set_xticks([0, 10, 20, 30])
ax.set_yticks([0, 2, 4, 6])
ax.yaxis.set_major_formatter(FuncFormatter(lambda v, _: f'{v:g}'.replace('.', ',')))
ax.grid(axis='y', alpha=.18)
ax.annotate('Sₚ = 34,641', (x[0], y[0]), xytext=(12, -36), textcoords='offset points', color=green, fontsize=22)
ax.annotate('Sₚ = 34,634', (x[-1], y[-1]), xytext=(-8, 17), textcoords='offset points', ha='right', color=green, fontsize=22)
fig.text(.14, .94, 'Vodivost roste s teplotou lázně', fontsize=23, fontweight='bold', color='#243c35')
fig.text(.14, .875, 'Kalibrace SBE 4C 3860 · 15. 10. 2014', fontsize=18)
fig.text(.14, .07, 'Salinita všech bodů: 34,634–34,643', fontsize=18)
fig.text(.14, .026, 'Zdroj: protokol Sea-Bird / NOAA. Vlastní výpočet.', fontsize=14)
output = Path(sys.argv[1]) if len(sys.argv) > 1 else base / 'conductivity-temperature.png'
output.parent.mkdir(parents=True, exist_ok=True)
fig.savefig(output, dpi=160, metadata={'Description': 'Conductivity recalculated from six calibration frequencies. Not an ocean time series or an uncertainty estimate.'})
plt.close(fig)
