"""Reproduce the original chart with Python, Matplotlib and Node.js.

Run: python plot.py [output.png]
NOAA CO-OPS data are public US government data. Chart: Klimatologie.eu, CC BY 4.0.
"""
from pathlib import Path
import json
import subprocess
import sys
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter

base = Path(__file__).resolve().parent
result = json.loads(subprocess.check_output(['node', str(base/'reproduce.mjs')], encoding='utf-8'))
out = Path(sys.argv[1]) if len(sys.argv) > 1 else base/'san-francisco-datums.png'
plt.rcParams.update({'font.family':'DejaVu Sans','font.size':22,'axes.spines.top':False,'axes.spines.right':False})
fig, ax = plt.subplots(figsize=(10, 7), dpi=160)
fig.patch.set_facecolor('#faf8f3')
ax.set_facecolor('#faf8f3')
x = [i / 10 for i in range(240)]
ax.plot(x, [r['mllwM'] for r in result['rows']], color='#17657c', lw=3, label='Nula MLLW')
ax.plot(x, [r['mslM'] for r in result['rows']], color='#b16120', lw=3, linestyle='--', label='Nula MSL')
ax.axhline(0, color='#677276', lw=1)
ax.set_xlim(0, 24)
ax.set_ylim(-1.5, 2.25)
ax.set_xticks([0,6,12,18,24],['00','06','12','18','24'])
ax.set_yticks([-1,0,1,2])
ax.yaxis.set_major_formatter(FuncFormatter(lambda v,pos: f'{v:g}'.replace('.',',')))
ax.set_xlabel('Čas 1. ledna 2025 (UTC)', labelpad=12)
ax.set_ylabel('Výška nad zvolenou nulou (m)', labelpad=12)
ax.grid(axis='y', alpha=.2)
ax.legend(loc='lower center', frameon=False, fontsize=21)
fig.suptitle('Stejná hladina, dvě výškové nuly', x=.54, y=.98, fontsize=25)
ax.set_title('San Francisco · rozdíl referencí 0,951 m', fontsize=20, pad=18)
fig.subplots_adjust(left=.16,right=.95,bottom=.16,top=.83)
out.parent.mkdir(parents=True,exist_ok=True)
fig.savefig(out, dpi=160)
print(out)
