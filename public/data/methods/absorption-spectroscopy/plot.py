"""Plot the reproducible NOAA measurements. Requires matplotlib."""
from pathlib import Path
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter
from reproduce import reproduce

values, mean, _ = reproduce()
plt.rcParams.update({'font.family': 'DejaVu Sans', 'font.size': 13})
fig, ax = plt.subplots(figsize=(10, 5), dpi=180)
fig.patch.set_facecolor('#f6f6ef')
ax.set_facecolor('#f6f6ef')
ax.scatter(range(1, 9), values, color='#287da1', s=65, zorder=3, label='Jednotlivá měření')
ax.axhline(mean, color='#c56f42', linestyle='--', linewidth=2, label='Průměr 386,728 ppm')
ax.set(xlabel='Pořadí měření vzorku', ylabel='Molární zlomek ¹⁶O¹²C¹⁶O (ppm)',
       xticks=range(1, 9), ylim=(386.7235, 386.735), xlim=(0.6, 8.4))
ax.yaxis.set_major_formatter(FuncFormatter(lambda x, _: f'{x:.3f}'.replace('.', ',')))
ax.grid(axis='y', color='#d8dfd9', linewidth=0.7)
ax.spines[['top', 'right']].set_visible(False)
ax.legend(loc='upper left', frameon=False, fontsize=11)
fig.tight_layout(pad=1.3)
fig.savefig(Path(__file__).with_name('repeat-measurements.png'))
