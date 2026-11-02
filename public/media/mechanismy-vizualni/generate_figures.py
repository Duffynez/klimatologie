"""Own climate mechanism graphics, CC BY 4.0. Run with --xlsx publisher-source.xlsx.

Scientific sources, input mapping and interpretation are documented in README.txt.
No digitisation, smoothing or spectral rebinning is used.
"""
from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as ET
import argparse
import csv
import hashlib
import json

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter
import numpy as np

OUT = Path(__file__).resolve().parent
INK, SEA, CORAL, MUTED = '#153235', '#1d716b', '#b85c43', '#567174'
plt.rcParams.update({'font.family': ['Arial', 'DejaVu Sans', 'sans-serif'], 'svg.fonttype': 'none',
                     'svg.hashsalt': 'klimatologie-mechanismy', 'path.simplify': False,
                     'axes.spines.top': False, 'axes.spines.right': False,
                     'axes.labelcolor': INK, 'xtick.color': INK, 'ytick.color': INK})


def save_chart(fig, name):
    path = OUT / (name + '.svg')
    fig.savefig(path, metadata={'Date': None})
    path.write_text('\n'.join(line.rstrip() for line in path.read_text(encoding='utf-8').splitlines()) + '\n', encoding='utf-8')
    fig.savefig(OUT / (name + '.png'), dpi=130)


def svg(name, title, body, height=260):
    document = f'''<svg xmlns="http://www.w3.org/2000/svg" width="400" height="{height}" viewBox="0 0 400 {height}" role="img" aria-labelledby="title">
<title id="title">{title}</title>
<defs>
 <marker id="red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10Z" fill="{CORAL}"/></marker>
 <marker id="gold" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10Z" fill="#b98c26"/></marker>
 <marker id="sea" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10Z" fill="{SEA}"/></marker>
</defs>
<rect width="400" height="{height}" fill="#f6f6f1"/>
<g font-family="Arial, Helvetica, sans-serif" font-size="21" fill="{INK}">{body}</g>
</svg>'''
    (OUT / (name + '.svg')).write_text(document, encoding='utf-8')


def sketches():
    svg('slunecni-hypoteza', 'Silnější Slunce znamená více příchozího záření', '''
<circle cx="67" cy="117" r="33" fill="#e1bc59"/>
<g stroke="#b98c26" stroke-width="4"><path d="M67 64V52 M67 170v12 M14 117H2 M120 117h12 M30 80l-9 -9 M104 154l9 9 M30 154l-9 9 M104 80l9 -9"/></g>
<circle cx="317" cy="117" r="48" fill="#c9e2e4" stroke="#1d5d58" stroke-width="2"/>
<path d="M291 77l11 14 -5 20 20 7 12 24 -7 16 -19 -14 -11 -25 -16 -11" fill="#9bb58e"/>
<path d="M135 117H248" stroke="#b98c26" stroke-width="12" marker-end="url(#gold)"/>
<text x="67" y="32" text-anchor="middle">Slunce</text><text x="317" y="32" text-anchor="middle">Země</text>
<text x="200" y="224" text-anchor="middle">Více příchozího záření</text>''')
    svg('prirozene-kolisani', 'Oceán a atmosféra si vyměňují teplo a mění oblačnost', '''
<path d="M15 143Q45 135 75 143T135 143T195 143T255 143T315 143T385 143V240H15Z" fill="#c9e2e4"/>
<text x="25" y="38">Atmosféra</text><text x="25" y="222">Oceán</text>
<path d="M110 179C60 106 110 65 170 88" fill="none" stroke="#b85c43" stroke-width="7" marker-end="url(#red)"/>
<path d="M210 84C270 107 246 176 180 185" fill="none" stroke="#1d716b" stroke-width="7" marker-end="url(#sea)"/>
<g fill="#fff" stroke="#a8bdbb" stroke-width="2"><path d="M267 94C249 93 248 72 263 68C260 47 283 39 296 53C310 32 338 43 337 61C359 60 368 84 349 94Z"/></g>
<path d="M344 23l-34 36 48 -8" fill="none" stroke="#b98c26" stroke-width="4" marker-end="url(#gold)"/>''')
    svg('sklenikove-plyny', 'Skleníkové plyny pohlcují a vyzařují tepelné záření', '''
<rect x="15" y="207" width="370" height="35" fill="#cfc9b4"/>
<rect x="15" y="66" width="370" height="94" fill="#dce9e8"/>
<text x="200" y="34" text-anchor="middle">Skleníkové plyny</text>
<g fill="#fff" stroke="#1d5d58" stroke-width="2"><circle cx="66" cy="105" r="12"/><circle cx="93" cy="124" r="12"/><circle cx="173" cy="101" r="12"/><circle cx="203" cy="127" r="12"/><circle cx="331" cy="106" r="12"/></g>
<path d="M135 201V117" stroke="#b85c43" stroke-width="8" marker-end="url(#red)"/>
<path d="M266 103V43" stroke="#b85c43" stroke-width="6" marker-end="url(#red)"/>
<path d="M286 131V192" stroke="#b85c43" stroke-width="6" marker-end="url(#red)"/>
<text x="200" y="232" text-anchor="middle">Povrch Země</text>''')
    svg('pokus-nasyceni', 'Pokus sleduje průchod záření jednou vrstvou plynu', '''
<rect x="129" y="86" width="135" height="69" rx="12" fill="#dce9e8" stroke="#93aaa8" stroke-width="2"/>
<g fill="#b85c43" opacity=".5"><circle cx="153" cy="107" r="5"/><circle cx="178" cy="137" r="5"/><circle cx="204" cy="106" r="5"/><circle cx="236" cy="138" r="5"/></g>
<rect x="24" y="94" width="39" height="53" rx="4" fill="#b85c43"/>
<path d="M76 120h49" stroke="#b85c43" stroke-width="9" marker-end="url(#red)"/>
<path d="M270 120h51" stroke="#b85c43" stroke-width="3" marker-end="url(#red)"/>
<path d="M343 92v58 M328 99v44 M328 121h15 M343 151v16h23" fill="none" stroke="#153235" stroke-width="4"/>
<text x="43" y="197" text-anchor="middle">Zdroj</text><text x="196" y="197" text-anchor="middle">Plyn</text><text x="347" y="197" text-anchor="middle">Detektor</text>
<text x="200" y="37" text-anchor="middle">Kolik záření projde?</text>''', 235)
    svg('aeri-test', 'Spektrometr měří záření oblohy a sondy teplotu a vlhkost', '''
<path d="M14 207H386" stroke="#9cae9b" stroke-width="3"/>
<text x="126" y="29" text-anchor="middle">Záření oblohy</text>
<g stroke="#b85c43" stroke-width="5" marker-end="url(#red)"><path d="M68 57l28 90"/><path d="M130 57v90"/><path d="M190 57l-28 90"/></g>
<path d="M93 174l19 -20h34l19 20v24H93Z" fill="#c9e2e4" stroke="#153235" stroke-width="2"/>
<text x="128" y="238" text-anchor="middle">Spektrometr</text>
<ellipse cx="302" cy="69" rx="24" ry="29" fill="#fff" stroke="#567174" stroke-width="2"/>
<path d="M302 98v32" stroke="#567174" stroke-width="2"/><rect x="295" y="130" width="14" height="18" fill="#1d716b"/>
<text x="298" y="181" text-anchor="middle">Teplota</text><text x="298" y="205" text-anchor="middle">a vlhkost</text>''')

    # Each path starts at its emission site, then narrows in intervening layers.
    svg('vrstvy-atmosfery', 'Povrch a všechny vrstvy atmosféry přispívají k odcházejícímu záření', '''
<g fill="#dce9e8"><rect x="124" y="67" width="265" height="31"/><rect x="124" y="133" width="265" height="31"/><rect x="124" y="199" width="265" height="31"/></g>
<rect x="124" y="274" width="265" height="25" fill="#cfc9b4"/>
<g font-size="19"><text x="111" y="86" text-anchor="end">Horní vrstva</text><text x="111" y="152" text-anchor="end">Střední</text><text x="111" y="218" text-anchor="end">Dolní</text><text x="111" y="293" text-anchor="end">Povrch</text></g>
<g fill="#b85c43">
<path d="M146 274h10v-44l-1 -31v-35l-1 -31v-35l-1 -31V40h7l-9 -15 -9 15h7v27l-1 31v35l-1 31v35l-1 31Z"/>
<path d="M212 214h10v-50l-1.5 -31v-35l-1.5 -31V40h7l-9 -15 -9 15h7v27l-1.5 31v35l-1.5 31Z"/>
<path d="M278 148h10V98l-2 -31V40h7l-10 -15 -10 15h7v27l-2 31Z"/>
<path d="M344 82h10V40h7l-12 -18 -12 18h7Z"/>
</g>
<text x="260" y="335" text-anchor="middle" font-size="19">Každá šipka má vlastní původ.</text>''', 355)


def read_source(path):
    ns = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
    with ZipFile(path) as z:
        strings = [''.join(si.itertext()) for si in ET.fromstring(z.read('xl/sharedStrings.xml'))]
        root = ET.fromstring(z.read('xl/worksheets/sheet1.xml'))
        rows = {}
        for row in root.findall('.//m:row', ns):
            values = []
            for cell in row.findall('m:c', ns):
                v = cell.find('m:v', ns)
                value = v.text if v is not None else ''
                if cell.get('t') == 's': value = strings[int(value)]
                values.append(value)
            rows[int(row.get('r'))] = values
    assert rows[15][0] == 'SGP Measured Annual Radiance Residual Trend (mW/m^2/sr/cm^-1/decade)'
    assert rows[20][0] == 'SGP Simulated Annual Radiance Residual Trend (mW/m^2/sr/cm^-1/decade)'
    assert '3-sigma' in rows[17][0]
    arrays = [np.array(rows[r], dtype=float) for r in [2, 16, 21, 18]]
    assert all(len(a) == 2592 for a in arrays)
    assert np.all(np.diff(arrays[0]) > 0)
    assert np.isfinite(arrays[:3]).all()
    return arrays


def spectra(source):
    wave, measured, model, significance = read_source(source)
    with (OUT / 'feldman-sgp-spektrum.csv').open('w', encoding='utf-8', newline='') as f:
        w = csv.writer(f)
        w.writerow(['wavenumber_cm-1', 'measurement_residual_trend', 'model_residual_trend', 'significant_3sigma'])
        for x, a, b, s in zip(wave, measured, model, significance):
            w.writerow([repr(float(x)), repr(float(a)), repr(float(b)), int(np.isfinite(s))])
    manifest = {'source': 'https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fnature14240/MediaObjects/41586_2015_BFnature14240_MOESM85_ESM.xlsx',
                'doi': '10.1038/nature14240', 'sha256': hashlib.sha256(source.read_bytes()).hexdigest(),
                'worksheet': 'Feldman_et_al_2014_Figure2.csv', 'rows': {'wavenumber': 2, 'measured': 16, 'model': 21, 'significance_3sigma': 18},
                'site': 'Southern Great Plains, Oklahoma', 'period': '2000–2010',
                'units': 'mW m^-2 sr^-1 (cm^-1)^-1 decade^-1', 'channels': 2592,
                'plotted_wavenumber_range_cm-1': [520, 800], 'processing': 'Direct row transposition, no smoothing or resampling. Figure 2b/c annual curves only.'}
    (OUT / 'feldman-provenance.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    selected = (wave >= 520) & (wave <= 800)
    for mobile in [False, True]:
        fig, ax = plt.subplots(figsize=(4.2, 4.8) if mobile else (7.6, 4.5), dpi=100)
        fig.patch.set_facecolor('#ffffff')
        fs = 12 if mobile else 14
        ax.plot(wave[selected], measured[selected], color=INK, lw=1.5, label='Měření po odečtení výpočtu\nse stálým CO₂' if mobile else 'Měření po odečtení výpočtu se stálým CO₂')
        ax.plot(wave[selected], model[selected], color='#287db7', lw=1.1, linestyle=(0, (3, 2)), label='Vypočtený příspěvek růstu CO₂')
        sig = selected & np.isfinite(significance)
        ax.scatter(wave[sig], np.full(sig.sum(), -.18), color=CORAL, marker='|', s=16, lw=.8)
        ax.axhline(0, color='#aab6b3', lw=.7)
        ax.set(xlim=(520, 800), ylim=(-.25, 1.65), xticks=[550, 600, 650, 700, 750, 800], yticks=[0, .5, 1, 1.5])
        ax.yaxis.set_major_formatter(FuncFormatter(lambda x, pos: f'{x:g}'.replace('.', ',')))
        ax.tick_params(labelsize=fs-1)
        ax.set_xlabel('Vlnočet (cm⁻¹)', fontsize=fs, labelpad=8)
        ax.set_ylabel('Změna spektrálního záření', fontsize=fs)
        ax.grid(axis='y', color='#e3e8e5', lw=.7)
        ax.legend(loc='upper left', bbox_to_anchor=(0, 1.43 if mobile else 1.31), frameon=False, fontsize=fs-1, borderaxespad=0)
        fig.text(.17 if mobile else .12, .06, 'Rezavé značky: změna odlišná od nuly na úrovni 3σ.', fontsize=8.5 if mobile else 11, color=MUTED)
        fig.text(.17 if mobile else .12, .02, 'Jednotka trendu: mW m⁻² sr⁻¹ (cm⁻¹)⁻¹ za deset let.', fontsize=8.5 if mobile else 11, color=MUTED)
        fig.subplots_adjust(left=.18 if mobile else .12, right=.96, bottom=.23, top=.68 if mobile else .76)
        suffix = '-mobil' if mobile else ''
        save_chart(fig, f'feldman-spektrum{suffix}')
        plt.close(fig)


def variability():
    with (OUT / 'prirozene-kolisani.csv').open('w', encoding='utf-8', newline='') as f:
        w=csv.writer(f)
        w.writerow(['series','estimate','lower','upper','interval','unit','period'])
        w.writerow(['CMIP6 Control',0,-.19,.19,'2 standard deviations of 20-year trends','W m^-2 decade^-1','1293 segments from 47 models'])
        w.writerow(['CERES',.38,.18,.58,'2 standard deviations of observational trend error','W m^-2 decade^-1','2001-2020'])
    for mobile in [False, True]:
        fig, ax = plt.subplots(figsize=(4.2, 4.0) if mobile else (7.6, 3.5), dpi=100)
        fs=12 if mobile else 15
        ax.axvline(0, color='#acb8b4', lw=1)
        ax.errorbar(0,1,xerr=.19,fmt='o',color=SEA,lw=6,capsize=9,markersize=5)
        ax.errorbar(.38,0,xerr=.20,fmt='o',color=CORAL,lw=4,capsize=9,markersize=8)
        ax.text(-.29,1.34,'Modely se stálými vnějšími vlivy',fontsize=fs-1,color=SEA)
        ax.text(-.29,.34,'Družice, roky 2001–2020',fontsize=fs-1,color=CORAL)
        ax.set(xlim=(-.3,.65),ylim=(-.45,1.8),yticks=[],xticks=[-.2,0,.2,.4,.6])
        ax.xaxis.set_major_formatter(FuncFormatter(lambda x,pos: f'{x:g}'.replace('.',',')))
        ax.spines['left'].set_visible(False)
        ax.tick_params(labelsize=fs-1)
        ax.set_xlabel('Trend energetické nerovnováhy\n(W/m² za deset let)',fontsize=fs,labelpad=11)
        ax.text(.0,.82,'±0,19',ha='center',fontsize=fs-1,color=SEA)
        ax.text(.38,-.2,'0,38 ± 0,20',ha='center',fontsize=fs-1,color=CORAL)
        fig.subplots_adjust(left=.1,right=.96,top=.98,bottom=.29)
        suffix='-mobil' if mobile else ''
        save_chart(fig, f'prirozene-kolisani-test{suffix}')
        plt.close(fig)


if __name__ == '__main__':
    parser=argparse.ArgumentParser()
    parser.add_argument('--xlsx',type=Path,required=True)
    args=parser.parse_args()
    sketches()
    spectra(args.xlsx)
    variability()
    print('Generated six physical sketches and two data charts, including mobile versions.')
