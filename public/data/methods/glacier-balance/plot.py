"""Plot the real GLAMOS selection. Requires matplotlib, see reproduce.py."""
from pathlib import Path
import sys
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter
from reproduce import calculate

base = Path(__file__).resolve().parent
data = calculate(base)
plt.rcParams.update({'font.family':'DejaVu Sans', 'font.size':12,
                     'axes.spines.top':False, 'axes.spines.right':False})
fig, (left, right) = plt.subplots(1, 2, figsize=(11.2, 7.8), sharey=True,
                                 gridspec_kw={'width_ratios':[1.55,1]})
fig.set_facecolor('#faf8f3')
for ax in [left,right]:
    ax.set_facecolor('#faf8f3')
    ax.grid(axis='y', color='#d8dddb', linewidth=.7)
    ax.set_axisbelow(True)
    ax.set_ylim(2390,3410)
    ax.set_yticks(range(2400,3401,100))
    ax.xaxis.set_major_formatter(FuncFormatter(lambda value,pos:f'{value:g}'.replace('.',',')))
bands = data['bands']
heights = [(b['lowerM']+b['upperM'])/2 for b in bands]
balances = [b['annualMm']/1000 for b in bands]
left.hlines(heights, 0, balances, color='#197c87', linewidth=3, label='Průměry výškových pásem')
left.scatter(balances,heights,marker='s',s=34,color='#197c87',zorder=3)
left.errorbar([p['balanceMm']/1000 for p in data['points']],
              [p['elevationM'] for p in data['points']],
              xerr=[p['errorMm']/1000 for p in data['points']],
              fmt='o',color='#303b45',ms=4,capsize=2,label='Bodová měření a odhady nejistoty',zorder=4)
left.axvline(0,color='#7b878a',lw=1)
left.axvline(data['meanMm']/1000,color='#bd6337',ls='--',lw=2,label='Plošný průměr −0,893 m')
left.annotate('Tyč 22',(-3.582,2479),xytext=(-3.95,2645),arrowprops={'arrowstyle':'->','color':'#303b45'},fontsize=11)
left.set_xlim(-4.15,1.55)
left.set_xlabel('Bilance (m vodního ekvivalentu)',labelpad=12)
left.set_ylabel('Nadmořská výška (m)',labelpad=12)
left.set_title('A   Bilance v bodech a pásmech',loc='left',fontsize=13,pad=14,weight='bold')
right.barh(heights,[b['areaKm2'] for b in bands],height=76,color='#7b929b')
right.set_xlim(0,1.5)
right.set_xticks([0,.5,1,1.5])
right.set_xlabel('Plocha pásma (km²)',labelpad=12)
right.set_title('B   Váha každého pásma',loc='left',fontsize=13,pad=14,weight='bold')
fig.suptitle('Griesgletscher: od bodů k plošnému průměru',x=.09,ha='left',fontsize=18,weight='bold',y=.975)
fig.text(.09,.921,'14. září 2020 – 18. září 2021  |  GLAMOS, vydání 2021',fontsize=12,color='#4c5d65')
handles,labels=left.get_legend_handles_labels()
fig.legend(handles,labels,loc='lower left',bbox_to_anchor=(.078,.027),frameon=False,fontsize=11,ncol=1)
fig.subplots_adjust(left=.09,right=.97,top=.84,bottom=.23,wspace=.22)
out=Path(sys.argv[1]) if len(sys.argv)>1 else base/'gries-balance.png'
out.parent.mkdir(parents=True,exist_ok=True)
fig.savefig(out,dpi=160,facecolor=fig.get_facecolor())
print(out)
