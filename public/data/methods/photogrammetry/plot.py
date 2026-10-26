"""Rebuild scott-turnerbreen-change.png, using numpy, scipy, rasterio and matplotlib.
Run after downloading all three GeoTIFFs, example.json, process.py and the GeoJSON.
The GeoJSON stores longitude/latitude and is projected to the DEM grid for plotting.
"""
from pathlib import Path
import json
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
from matplotlib.ticker import FuncFormatter
from rasterio.warp import transform_geom
from process import calculate

base = Path(__file__).resolve().parent
old, ref, aligned, dh = calculate()
meta = json.loads((base/'example.json').read_text(encoding='utf-8'))
geometry = json.loads((base/'scott-outline-1990.geojson').read_text(encoding='utf-8'))['geometry']
geometry = transform_geom('EPSG:4326', 'EPSG:25833', geometry)
plt.rcParams.update({'font.family':'DejaVu Sans','font.size':12})
fig, ax = plt.subplots(figsize=(7.6,7.0), layout='constrained')
image = ax.imshow(dh, extent=[502810,529450,8654330,8674030], cmap='RdBu', vmin=-40,vmax=40)
polygons = geometry['coordinates'] if geometry['type']=='MultiPolygon' else [geometry['coordinates']]
for polygon in polygons:
    xy = np.array(polygon[0])
    ax.plot(xy[:,0],xy[:,1],color='#283342',lw=1.2)
ax.add_patch(Rectangle((521150,8669470),400,400,fill=False,ec='#111827',lw=2.2))
ax.annotate('Počítaný čtverec\n400 × 400 m',xy=(521350,8669670),xytext=(519650,8670500),
            arrowprops={'arrowstyle':'->','color':'#111827'},ha='left',va='bottom',
            bbox={'facecolor':'white','edgecolor':'none','alpha':0.9,'pad':4})
ax.set(xlim=(518700,523700),ylim=(8665700,8671200),
       title='Scott Turnerbreen: změna výšky povrchu\nmodel 2009 − zarovnaný model 1990',
       xlabel='Východní souřadnice (km)',ylabel='Severní souřadnice (km)')
ax.xaxis.set_major_formatter(FuncFormatter(lambda v,p:f'{v/1000:.0f}'))
ax.yaxis.set_major_formatter(FuncFormatter(lambda v,p:f'{v/1000:.0f}'))
ax.grid(alpha=0.15)
ax.text(0.02,0.02,'Tenká čára: obrys ledovce 1990\nSíť 20 m · ETRS89 / UTM 33N',transform=ax.transAxes,
        fontsize=10,bbox={'facecolor':'white','edgecolor':'none','alpha':0.9})
bar=fig.colorbar(image,ax=ax,shrink=0.8,pad=0.025,extend='both')
bar.set_label('Rozdíl výšek (m)')
fig.savefig(base/'scott-turnerbreen-change.png',dpi=180)
plt.close(fig)
