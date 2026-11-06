"""Reproduce the SORCE TIM v20 figure from the adjacent unchanged LASP file.
Python 3, matplotlib. Run in this directory. No network access required.
"""
from pathlib import Path
from datetime import datetime, date
from collections import defaultdict
import calendar
import csv
import hashlib
import json
import statistics
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from matplotlib.ticker import FuncFormatter
import math

BASE = Path(__file__).resolve().parent
raw = BASE / 'sorce_tsi_L3_c24h_v20.txt'
rows = []
for line in raw.read_text().splitlines():
    if not line.strip() or line.startswith(';'):
        continue
    r = list(map(float, line.split()))
    day = datetime.strptime(str(int(r[0])), '%Y%m%d').date()
    rows.append((day, r[4], int(r[14]), r[5]))
valid = [r for r in rows if r[1] > 0 and r[2] == 0]
months = defaultdict(list)
years = defaultdict(list)
for d, tsi, flag, accuracy in valid:
    months[d.year, d.month].append(tsi)
    years[d.year].append(tsi)
monthly = []
for y in range(2003, 2021):
    for m in range(1, 13):
        if (y, m) < (2003, 2) or (y, m) > (2020, 2):
            continue
        values = months[y, m]
        # Suppress poorly sampled months. Missing values remain gaps, never interpolated.
        mean = statistics.mean(values) if len(values) >= 20 else float('nan')
        monthly.append((date(y, m, 15), len(values), mean))
with (BASE / 'mesicni-prumery.csv').open('w', newline='', encoding='utf-8') as f:
    w = csv.writer(f)
    w.writerow(['month', 'valid_days', 'tsi_1au_W_m2_min_20_days'])
    for d, n, mean in monthly:
        w.writerow([d.strftime('%Y-%m'), n, '' if n < 20 else f'{mean:.6f}'])
with (BASE / 'rocni-prumery.csv').open('w', newline='', encoding='utf-8') as f:
    w = csv.writer(f)
    w.writerow(['year', 'valid_days', 'tsi_1au_W_m2', 'complete_calendar_year'])
    for y, values in sorted(years.items()):
        w.writerow([y, len(values), f'{statistics.mean(values):.6f}', len(values) == 365 + calendar.isleap(y)])
meta = {
    'source': 'https://lasp.colorado.edu/data/sorce/tsi_data/daily/sorce_tsi_L3_c24h_latest.txt',
    'downloaded': '2026-11-06', 'version': 20,
    'sha256': hashlib.sha256(raw.read_bytes()).hexdigest(),
    'total_rows': len(rows), 'valid_days': len(valid),
    'excluded_zero_or_invalid_tsi': sum(r[1] <= 0 for r in rows),
    'excluded_provisional': sum(r[2] != 0 for r in rows),
    'column': 'tsi_1au (column 5), W/m2, normalized to 1 AU',
    'monthly_rule': 'unweighted mean of final positive daily means, at least 20 valid days, otherwise gap',
    'annual_2008': statistics.mean(years[2008]),
    'annual_2015': statistics.mean(years[2015]),
    'difference_2015_minus_2008': statistics.mean(years[2015])-statistics.mean(years[2008]),
}
(BASE / 'metadata.json').write_text(json.dumps(meta, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
plt.rcParams.update({'font.family': 'DejaVu Sans', 'font.size': 14})
fig, ax = plt.subplots(figsize=(12, 6.4), facecolor='#f7f6f0')
ax.set_facecolor('#f7f6f0')
# Retain zero-value missing days as NaN so even the daily line has visible gaps.
ax.plot([r[0] for r in rows], [r[1] if r[1] > 0 and r[2] == 0 else float('nan') for r in rows],
        color='#9cb5b6', linewidth=.65, label='Denní průměry')
ax.plot([r[0] for r in monthly], [r[2] for r in monthly], color='#086b72', linewidth=2.4,
        label='Měsíce s alespoň 20 dny měření')
ax.set_title('Sluneční příkon kolísá\nSORCE TIM · 25. 2. 2003 – 25. 2. 2020', loc='left', fontsize=21, pad=18, color='#163539')
ax.set_ylabel('Záření při vzdálenosti 1 AU (W/m²)')
ax.set_ylim(math.floor(min(r[1] for r in valid) * 2) / 2 - .1, 1362.8)
ax.yaxis.set_major_formatter(FuncFormatter(lambda value, position: f'{value:,.1f}'.replace(',', ' ').replace('.', ',')))
ax.set_xlim(date(2003, 1, 1), date(2020, 5, 1))
ax.xaxis.set_major_locator(mdates.YearLocator(2))
ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y'))
ax.grid(axis='y', alpha=.22)
ax.spines[['top','right']].set_visible(False)
ax.legend(loc='lower right', frameon=False, fontsize=12)
ax.annotate('2008: 1 360,78 W/m²\nroční průměr', xy=(date(2008,7,1), meta['annual_2008']),
            xytext=(date(2005,2,1), 1362.25), arrowprops={'arrowstyle':'-', 'color':'#163539'}, fontsize=12)
ax.annotate('2015: 1 361,68 W/m²\nroční průměr', xy=(date(2015,7,1), meta['annual_2015']),
            xytext=(date(2012,2,1), 1359.3), arrowprops={'arrowstyle':'-', 'color':'#163539'}, fontsize=12)
fig.text(.09, .025, 'Zdroj: LASP, SORCE TIM Level 3, verze 20 · Mezery nejsou doplněné · Osa nezačíná nulou', fontsize=11)
fig.subplots_adjust(left=.10, right=.98, top=.80, bottom=.15)
fig.savefig(BASE / 'sorce-tim-2003-2020.png', dpi=180)
fig.savefig(BASE / 'sorce-tim-2003-2020.svg')
plt.close(fig)
print(json.dumps(meta, indent=2))
