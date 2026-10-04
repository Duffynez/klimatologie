"""Create the article figure from calibration.csv. Requires Python and matplotlib."""
from pathlib import Path
import csv
import sys
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter

base = Path(__file__).resolve().parent
rows = list(csv.DictReader((base / 'calibration.csv').open(encoding='utf-8')))
x = [float(row['reference_psia']) * 0.689476 for row in rows]
before = [(float(row['instrument_psia']) - float(row['reference_psia'])) * 0.689476 for row in rows]
after = [(float(row['corrected_psia']) - float(row['reference_psia'])) * 0.689476 for row in rows]
plt.rcParams.update({'font.family': 'DejaVu Sans', 'font.size': 13, 'axes.spines.top': False, 'axes.spines.right': False})
fig, ax = plt.subplots(figsize=(10, 7.6), dpi=160)
fig.subplots_adjust(left=.105, right=.98, bottom=.20, top=.89)
fig.patch.set_facecolor('#faf9f5')
ax.set_facecolor('#faf9f5')
for values, color, label in [(before, '#bd612f', 'Před opravou'), (after, '#24695b', 'Po opravě')]:
    ax.plot(x[:6], values[:6], '-o', color=color, label=label, linewidth=1.6, markersize=7)
    ax.plot(x[5:], values[5:], '--s', color=color, linewidth=1.6, markersize=6, markerfacecolor='#faf9f5')
ax.axhline(0, color='#77776e', linewidth=1)
ax.grid(axis='y', alpha=.16)
ax.set(xlabel='Referenční absolutní tlak (dbar)', ylabel='Údaj přístroje − reference (dbar)', xlim=(-180, 7100), ylim=(-.29, .85))
ax.yaxis.set_major_formatter(FuncFormatter(lambda value, _: f'{value:.1f}'.replace('.', ',')))
ax.legend(loc='upper left', frameon=False)
ax.set_title('SBE 9plus 1207 · kalibrace 6. června 2022', loc='left', pad=23, fontsize=17, fontweight='bold')
fig.text(.5, .025, 'Plná čára a kruhy: rostoucí tlak · přerušovaná čára a čtverce: klesající tlak\nVšech 11 řádků protokolu Sea-Bird Scientific. Spojnice vedou v pořadí měření.', ha='center', fontsize=11)
output = Path(sys.argv[1]) if len(sys.argv) > 1 else base / 'calibration-residuals.png'
output.parent.mkdir(parents=True, exist_ok=True)
fig.savefig(output, dpi=160, metadata={'Description': 'Own plot of the printed calibration pressure residuals. Not an uncertainty estimate.'})
plt.close(fig)
