"""Own figure. Requires Node.js and Python with matplotlib.

Save beside example.json, both NOAA TXT extracts and reproduce.mjs.
Run: python plot.py [output.png]
The calculation is repeated, including input checksum verification.
"""
from pathlib import Path
import json
import subprocess
import sys
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter

base = Path(__file__).resolve().parent
result = json.loads(subprocess.check_output(['node', str(base / 'reproduce.mjs')], text=True, encoding='utf-8'))
background = '#faf9f5'
blue = '#276d91'
plt.rcParams.update({'font.family': 'DejaVu Sans', 'font.size': 22, 'axes.spines.top': False, 'axes.spines.right': False})
fig, ax = plt.subplots(figsize=(10, 7), dpi=160)
fig.patch.set_facecolor(background)
ax.set_facecolor(background)
fig.subplots_adjust(left=.14, right=.93, bottom=.25, top=.79)
rates = [r['meanRateMmPerHour'] for r in result['rows']]
ax.bar([2.5 + i * 5 for i in range(12)], rates, width=4.65, color=blue, zorder=3)
ax.axhline(result['hourlyMeanRateMmPerHour'], color='#66524a', linestyle='--', linewidth=2.5, zorder=4)
ax.set(xlim=(0, 60), ylim=(0, 36), ylabel='Intenzita (mm/h)', xlabel='Místní standardní čas (UTC−5)')
ax.set_xticks([0, 30, 60], ['14:00', '14:30', '15:00'])
ax.set_yticks([0, 10, 20, 30])
ax.yaxis.set_major_formatter(FuncFormatter(lambda v, _: f'{v:g}'.replace('.', ',')))
ax.grid(axis='y', alpha=.2, zorder=0)
ax.annotate('31,2', (27.5, max(rates)), xytext=(0, 8), textcoords='offset points', ha='center', color=blue, fontsize=22)
fig.text(.14, .94, 'Krátké zesílení deště', fontsize=25, fontweight='bold', color='#243c35')
fig.text(.14, .88, 'Blue Hill · 7. června 2025', fontsize=21)
fig.text(.14, .11, '– –  Průměr celé hodiny: 9,2 mm/h', color='#66524a', fontsize=21)
fig.text(.14, .052, 'Každý sloupec představuje pět minut.', fontsize=19)
output = Path(sys.argv[1]) if len(sys.argv) > 1 else base / 'blue-hill-rain.png'
output.parent.mkdir(parents=True, exist_ok=True)
fig.savefig(output, dpi=160, metadata={'Description': 'Five-minute average precipitation intensity calculated from NOAA USCRN Blue Hill processed increments, 7 June 2025, 14-15 LST. Not instantaneous intensity.'})
plt.close(fig)
