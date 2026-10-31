"""Original explanatory figure and plot of published estimates. Run from any directory.
Python 3 + matplotlib. Input CSV and outputs are beside this script.
Klimatologie.eu, 2026, CC BY 4.0. Data: Loeb et al. 2021, CC BY 4.0.
"""
from pathlib import Path
import csv
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter

folder = Path(__file__).resolve().parent
rows = list(csv.DictReader((folder / 'porovnani-trendu.csv').open(encoding='utf-8-sig')))
plt.rcParams.update({'font.family':'DejaVu Sans', 'font.size':16, 'svg.hashsalt':'klimatologie-energy-balance'})
fig, ax = plt.subplots(figsize=(7.6,5), facecolor='#f7f7f2')
ax.set_facecolor('#f7f7f2')
colors = ['#17677a','#b44930']
for row,y,label,color in zip(rows,[1.18,0.44],['Oceán 0–2 000 m','Družice CERES'],colors):
    v=float(row['estimate_w_m2_decade']); e=float(row['uncertainty_90_w_m2_decade'])
    assert abs(v-e-float(row['lower_90']))<1e-9 and abs(v+e-float(row['upper_90']))<1e-9
    ax.errorbar(v,y,xerr=e,fmt='o',color=color,markersize=10,capsize=8,elinewidth=3,capthick=2)
    ax.text(-0.1,y+0.26,label,fontsize=19,fontweight='bold',color=color,va='center',bbox={'facecolor':'#f7f7f2','edgecolor':'none','pad':2})
    ax.text(1.08,y+0.26,f'{v:.2f} ± {e:.2f}'.replace('.',','),fontsize=17,color=color,va='center',ha='right')
ax.axvline(0,color='#657a7a',linestyle='--',linewidth=1.3,zorder=0)
ax.set_xlim(-0.12,1.12); ax.set_ylim(0,1.85)
ax.set_xticks([0,0.2,0.4,0.6,0.8,1.0]);ax.set_yticks([])
ax.xaxis.set_major_formatter(FuncFormatter(lambda x,pos:f'{x:.1f}'.replace('.',',')))
ax.set_xlabel('Nárůst toku za deset let (W/m²)',labelpad=14,fontsize=18)
ax.set_title('Polovina roku 2005 až polovina roku 2019',fontsize=17,pad=20,color='#17363a')
ax.spines[['top','left','right']].set_visible(False)
ax.spines['bottom'].set_color('#657a7a');ax.tick_params(axis='x',labelsize=16,colors='#17363a')
fig.subplots_adjust(left=.09,right=.96,bottom=.24,top=.84)
fig.text(.5,.055,'Body: odhady   |   Úsečky: 90% intervaly',ha='center',fontsize=16,color='#546769')
fig.savefig(folder/'porovnani-trendu.svg',metadata={'Date':None,'Creator':'Klimatologie.eu, data Loeb et al. 2021'})
svg_path = folder / 'porovnani-trendu.svg'
svg_path.write_text('\n'.join(line.rstrip() for line in svg_path.read_text(encoding='utf-8').splitlines()) + '\n', encoding='utf-8')
fig.savefig(folder/'porovnani-trendu.png',dpi=150,metadata={'Software':'Klimatologie.eu'})
plt.close(fig)

svg='''<svg xmlns="http://www.w3.org/2000/svg" width="760" height="620" viewBox="0 0 760 620" role="img" aria-labelledby="title desc">
<title id="title">Radiační bilance celé Země</title>
<desc id="desc">Sluneční záření se zčásti odráží a zčásti pohltí. Země vysílá tepelné záření do vesmíru. Rozdíl pohlcené a vyzářené energie mění zásobu energie v systému.</desc>
<defs><marker id="solar" markerWidth="28" markerHeight="28" refX="23" refY="14" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L26 14 L0 28 Z" fill="#aa7518"/></marker><marker id="heat" markerWidth="28" markerHeight="28" refX="23" refY="14" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L26 14 L0 28 Z" fill="#b44930"/></marker></defs>
<rect width="760" height="620" rx="4" fill="#f7f7f2"/>
<g font-family="Arial, sans-serif" fill="#17363a" text-anchor="middle">
<text x="380" y="48" font-size="28" font-weight="bold">Výměna energie s vesmírem</text>
<text x="137" y="108" font-size="26">Sluneční</text><text x="137" y="139" font-size="26">záření</text>
<text x="365" y="108" font-size="26">Odražené</text><text x="365" y="139" font-size="26">sluneční záření</text>
<text x="617" y="108" font-size="26">Tepelné</text><text x="617" y="139" font-size="26">záření Země</text>
<rect x="42" y="285" width="676" height="284" rx="12" fill="#e6eff0" stroke="#17677a" stroke-width="2"/>
<path d="M137 160 V357" fill="none" stroke="#aa7518" stroke-width="8" marker-end="url(#solar)"/>
<path d="M140 300 C240 300 365 300 365 170" fill="none" stroke="#aa7518" stroke-width="6" marker-end="url(#solar)"/>
<path d="M617 357 V170" fill="none" stroke="#b44930" stroke-width="8" marker-end="url(#heat)"/>
<text x="380" y="329" font-size="27" font-weight="bold">Země včetně atmosféry</text>
<text x="146" y="402" font-size="25">Pohlcení</text><text x="611" y="402" font-size="25">Vyzařování</text>
<line x1="86" y1="435" x2="674" y2="435" stroke="#b6c8cb"/>
<text x="380" y="481" font-size="27">Přebytek energie zůstává</text>
<text x="380" y="518" font-size="26">v oceánu, pevnině, vzduchu a ledu.</text>
<text x="380" y="600" font-size="22" fill="#546769">Schéma směrů přenosu, bez měřítka velikosti toků</text>
</g></svg>'''
(folder/'toky-energie.svg').write_text(svg,encoding='utf-8')
print('Generated two SVG figures and PNG preview.')
