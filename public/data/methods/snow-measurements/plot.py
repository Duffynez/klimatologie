"""Plot the reproduced MOSAiC profile. Requires matplotlib.
Run: python plot.py path/to/snow-profile.png
"""
from pathlib import Path
import sys
import matplotlib.pyplot as plt
from reproduce import reproduce

result = reproduce()
layers = result['layers']
plt.rcParams.update({'font.family':'DejaVu Sans','font.size':13,
                     'axes.spines.top':False,'axes.spines.right':False})
fig, axes = plt.subplots(1,2,figsize=(10,7),dpi=160,sharey=True)
fig.patch.set_facecolor('#faf8f3')
colors = ['#a6c8d3','#75a4b5','#316d85','#194b63']
for i, layer in enumerate(layers):
    mid=(layer['topCm']+layer['bottomCm'])/2
    height=layer['topCm']-layer['bottomCm']
    for ax, key in zip(axes,['densityKgM3','sweMm']):
        value=layer[key]
        ax.barh(mid,value,height=height*.92,color=colors[i],edgecolor='white')
        label=f'{value:g}'.replace('.',',')
        ax.text(value+ (5 if key=='densityKgM3' else .13),mid,label,va='center',fontsize=13,color='#243d48')
for ax in axes:
    ax.set_facecolor('#faf8f3')
    ax.set_ylim(-.15,12.6)
    ax.set_yticks([0,3,6,9,12])
    ax.grid(axis='x',alpha=.18)
    ax.set_axisbelow(True)
    ax.axhline(0,color='#243d48',linewidth=1.5)
axes[0].set_ylabel('Výška nad rozhraním sněhu a ledu (cm)',labelpad=10)
axes[0].set_xlabel('Hustota sněhu (kg/m³)',labelpad=12)
axes[0].set_xlim(0,350)
axes[0].set_xticks([0,100,200,300])
axes[1].set_xlabel('Voda v daném intervalu (mm)',labelpad=12)
axes[1].set_xlim(0,10.5)
axes[1].set_xticks([0,2,4,6,8,10])
axes[0].set_title('Zveřejněné hustoty',loc='left',pad=16,fontsize=15)
axes[1].set_title('Vypočtená vodní hodnota',loc='left',pad=16,fontsize=15)
fig.text(.115,.948,'12 cm sněhu → 28,5 mm vody',fontsize=22,fontweight='bold',color='#193f50')
fig.text(.115,.895,'MOSAiC · 2. prosince 2019 · profil PS122-1_10-11',fontsize=12,color='#526771')
fig.text(.115,.08,'Čtyři navazující odběry po 3 cm. Výsledek platí pro tento profil.',fontsize=12,color='#354f5a')
fig.text(.115,.039,'Data: Macfarlane et al. (2022), PANGAEA.940214, CC BY 4.0. Graf: Klimatologie.eu.',fontsize=9,color='#526771')
fig.subplots_adjust(left=.115,right=.96,top=.79,bottom=.20,wspace=.23)
target=Path(sys.argv[1])
target.parent.mkdir(parents=True,exist_ok=True)
fig.savefig(target,dpi=160,facecolor=fig.get_facecolor())
