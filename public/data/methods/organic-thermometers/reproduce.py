"""Python 3. Run beside the original table. Optional --plot OUTPUT.svg needs matplotlib."""
import argparse, csv, hashlib
from html.parser import HTMLParser
from pathlib import Path
SHA256 = 'cba4695f5374b23501c0f5ba182b3a891c0d7d7ea9de4b1e30a0df333a1a6a1d'
class Table(HTMLParser):
    def __init__(self):
        super().__init__()
        self.rows, self.row, self.cell = [], [], None
    def handle_starttag(self, tag, attrs):
        if tag == 'tr': self.row = []
        elif tag in ('td','th'): self.cell = []
    def handle_data(self, data):
        if self.cell is not None: self.cell.append(data)
    def handle_endtag(self, tag):
        if tag in ('td','th') and self.cell is not None:
            self.row.append(' '.join(''.join(self.cell).split()))
            self.cell = None
        elif tag == 'tr' and self.row: self.rows.append(self.row)
def calculate():
    base = Path(__file__).resolve().parent
    raw = (base/'fujine2003-table-original.txt').read_bytes()
    if hashlib.sha256(raw).hexdigest() != SHA256: raise ValueError('Original checksum differs')
    parser = Table(); parser.feed(raw.decode('latin1'))
    data = parser.rows[3:]
    if len(data) != 75 or any(len(r) != 18 for r in data): raise ValueError('Unexpected table')
    result=[]
    for r in data:
        c3, c2 = float(r[4]), float(r[6])
        if min(c2,c3) <= 0: raise ValueError('Missing concentration')
        u = c2/(c2+c3); t = (u-.039)/.034
        result.append(['186-1151C-'+r[0],float(r[1]),float(r[2]),c2,c3,u,t,float(r[17]),t-float(r[17])])
    fields=['sample','original_depth_m','corrected_depth_m','C37_2_ug_per_g_TOC','C37_3_ug_per_g_TOC','UK37_prime','calculated_temperature_C','published_temperature_C','difference_C']
    with (base/'results.tsv').open('w',encoding='utf8',newline='') as f:
        w=csv.writer(f,delimiter='\t',lineterminator='\n');w.writerow(fields);w.writerows(result)
    return result
def plot(rows,output):
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt
    plt.rcParams.update({'font.family':'Arial','font.size':20,'svg.fonttype':'none','svg.hashsalt':'site1151-2026'})
    fig,ax=plt.subplots(figsize=(7.6,6.4),dpi=100)
    fig.patch.set_facecolor('#f6f6f2')
    ax.scatter([r[6] for r in rows],[r[2] for r in rows],s=28,color='#226b74')
    ax.scatter([rows[0][6]],[rows[0][2]],s=80,facecolors='none',edgecolors='#bf593e',linewidth=2,label='Vzorek z výpočtu')
    ax.set(xlabel='Rekonstruovaná teplota (°C)',ylabel='Hloubka pod mořským dnem (m)',xlim=(10,23),ylim=(22,-1))
    ax.set_yticks([0,5,10,15,20]);ax.grid(alpha=.22);ax.set_axisbelow(True)
    ax.legend(fontsize=16,loc='lower right');fig.tight_layout(pad=1.1)
    fig.savefig(output,metadata={'Date':None});plt.close(fig)
    p=Path(output);p.write_text('\n'.join(l.rstrip() for l in p.read_text(encoding='utf8').splitlines())+'\n',encoding='utf8')
if __name__=='__main__':
    ap=argparse.ArgumentParser();ap.add_argument('--plot');args=ap.parse_args()
    rows=calculate()
    print('Samples:',len(rows),'First U, T:',rows[0][5:7])
    print('Range:',min(r[6] for r in rows),max(r[6] for r in rows))
    print('Maximum difference:',max(abs(r[8]) for r in rows))
    if args.plot: plot(rows,args.plot)
