"""Recreate the two figures from the published GeoTIFF and CSV.
Requires numpy, rasterio, matplotlib. Run beside the four data files.
Outputs figures into the current directory. Data are credited to USGS.
"""
import csv
import json
from pathlib import Path
import numpy as np
import rasterio
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.patheffects as pe
from matplotlib.ticker import FuncFormatter

base = Path(__file__).resolve().parent
meta = json.loads((base / "example.json").read_text(encoding="utf-8"))
samples = list(csv.DictReader((base / "samples.csv").read_text().splitlines()))
with rasterio.open(base / "aletsch-20230820.tif") as ds:
    data = ds.read()
rho = data[:5] * meta["reflectance_scale"] + meta["reflectance_offset"]
rgb = np.sqrt(np.clip(np.moveaxis(rho[[2, 1, 0]], 0, -1) / .65, 0, 1))
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 12, "axes.spines.top": False, "axes.spines.right": False})
fig, ax = plt.subplots(figsize=(6.8, 10.6), layout="constrained")
ax.imshow(rgb, interpolation="nearest")
for row in samples:
    x, y = int(row["crop_col"]), int(row["crop_row"])
    ax.plot(x, y, 'o', ms=11, mfc='none', mec='white', mew=2, path_effects=[pe.Stroke(linewidth=4, foreground='black'), pe.Normal()])
    ax.text(x+13 if x<250 else x-29, y-10, row['label'], color='white', fontsize=20, weight='bold', path_effects=[pe.Stroke(linewidth=3, foreground='black'), pe.Normal()])
ax.plot([20, 20+2000/30], [570,570],color='white',lw=4)
ax.text(20,557,'2 km',color='white',path_effects=[pe.Stroke(linewidth=2,foreground='black'),pe.Normal()])
ax.annotate('S',xy=(309,25),xytext=(309,70),color='white',ha='center',arrowprops=dict(arrowstyle='-|>',color='white',lw=2),fontsize=16)
ax.set_title('Aletschský ledovec a okolí\nLandsat 8 · 20. srpna 2023',loc='left',pad=14,fontsize=16)
ax.set_axis_off()
fig.savefig('aletsch-samples.png',dpi=160,facecolor='white');plt.close(fig)
fig,ax=plt.subplots(figsize=(9,5.4),layout='constrained')
x=np.arange(4);colors=['#137ca0','#a56838','#327946']
for i,result in enumerate(meta['results']):
    vals=[result['reflectance'][k] for k in ['green','red','nir08','swir16']]
    ax.bar(x+(i-1)*.23,vals,width=.21,color=colors[i],label=result['label']+' · '+result['interpretation'])
ax.set_xticks(x,['Zelené\nB3','Červené\nB4','Blízké infračervené\nB5','Krátkovlnné infračervené\nB6'])
ax.set_ylabel('Odrazivost povrchu (bez jednotky)')
ax.set_ylim(0,.62);ax.yaxis.set_major_formatter(FuncFormatter(lambda v,pos:f'{v:.1f}'.replace('.',',')))
ax.grid(axis='y',alpha=.18);ax.set_axisbelow(True)
ax.legend(loc='upper left',frameon=False,ncol=1,fontsize=11)
ax.set_title('Stejný povrch má v různých pásmech jinou odrazivost',loc='left',fontsize=15,pad=15)
fig.savefig('band-comparison.png',dpi=160,facecolor='white');plt.close(fig)
