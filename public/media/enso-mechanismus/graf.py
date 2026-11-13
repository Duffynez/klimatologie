"""Reproduce the ONI graph from the adjacent frozen CSV. No network needed."""
from pathlib import Path
import csv
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np
from datetime import datetime

here=Path(__file__).resolve().parent
rows=list(csv.DictReader((here/'oni-1996-1999.csv').open(encoding='utf8',newline='')))
dates=[datetime.strptime(r['central_month'],'%Y-%m') for r in rows]
y=np.array([float(r['oni_c']) for r in rows])
plt.rcParams.update({'font.family':'DejaVu Sans','font.size':13,'svg.fonttype':'none'})
fig,ax=plt.subplots(figsize=(12,5.4),layout='constrained')
fig.patch.set_facecolor('#f7f6f0')
ax.set_facecolor('#f7f6f0')
ax.axhline(0,color='#536e72',lw=1)
ax.fill_between(dates,y,0,where=y>=0,interpolate=True,color='#c6543c',alpha=.22)
ax.fill_between(dates,y,0,where=y<=0,interpolate=True,color='#246b8b',alpha=.22)
ax.plot(dates,y,color='#163b40',lw=2.6)
ax.set(title='Teplý výkyv v letech 1997–1998 a následné ochlazení',ylabel='Odchylka teploty ONI (°C)',ylim=(-2,2.9))
ax.set_xticks([datetime(a,1,1) for a in range(1996,2000)],labels=['1996','1997','1998','1999'])
ax.set_yticks([-2,-1,0,1,2])
ax.grid(axis='y',alpha=.2)
ax.spines[['top','right']].set_visible(False)
ax.annotate('Listopad 1997 – leden 1998\n+2,4 °C',xy=(datetime(1997,12,1),2.4),xytext=(datetime(1998,4,1),2.35),fontsize=12,arrowprops={'arrowstyle':'-','color':'#163b40'})
ax.annotate('Listopad 1998 – leden 1999\n−1,5 °C',xy=(datetime(1998,12,1),-1.5),xytext=(datetime(1997,5,1),-1.7),fontsize=12,arrowprops={'arrowstyle':'-','color':'#163b40'})
fig.supxlabel('Tříměsíční průměr je umístěn do prostředního měsíce. Zdroj: NOAA CPC, ERSSTv6.',fontsize=11)
fig.savefig(here/'oni-1996-1999.svg')
fig.savefig(here/'oni-1996-1999.png',dpi=130)
plt.close(fig)
