from pathlib import Path
import csv,hashlib,json,math,argparse,sys,zipfile,xml.etree.ElementTree as ET
from decimal import Decimal

base=Path(__file__).resolve().parent
parser=argparse.ArgumentParser(description='Reproduce the sediment-core accumulation example. No automatic downloads.')
parser.add_argument('--source',type=Path,help='Optional original 397-U1385TABLES.XLSX')
args=parser.parse_args()
meta=json.loads((base/'provenance.json').read_text(encoding='utf-8'))
for name,digest in meta['sha256'].items():
 assert hashlib.sha256((base/name).read_bytes()).hexdigest()==digest, 'Checksum mismatch: '+name
with (base/'age-depth-points.csv').open(encoding='utf-8',newline='') as f:
 rows=list(csv.DictReader(f))
assert len(rows)==2 and [r['source_row'] for r in rows]==['3','4']
z1,z2=(Decimal(r['depth_ccsf_m']) for r in rows)
t1,t2=(Decimal(r['age_ka']) for r in rows)
assert z2>z1 and t2>t1
thickness_cm=(z2-z1)*100
duration_ka=t2-t1
rate=thickness_cm/duration_ka
spacing=duration_ka*1000/thickness_cm
assert math.isclose(float(rate),float(rows[1]['published_interval_rate_cm_ka']),rel_tol=1e-12)
if args.source:
 assert hashlib.sha256(args.source.read_bytes()).hexdigest()==meta['source_sha256'], 'Original workbook checksum mismatch'
 ns={'m':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
 with zipfile.ZipFile(args.source) as z:
  strings=[''.join(s.itertext()) for s in ET.fromstring(z.read('xl/sharedStrings.xml'))]
  rels={x.attrib['Id']:x.attrib['Target'] for x in ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))}
  sheets=ET.fromstring(z.read('xl/workbook.xml')).find('m:sheets',ns)
  sheet=next(s for s in sheets if s.attrib['name']=='Table 11')
  target=rels[sheet.attrib['{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id']]
  path=target.lstrip('/') if target.startswith('/') else 'xl/'+target
  cells={}
  for c in ET.fromstring(z.read(path)).findall('.//m:c',ns):
   v=c.find('m:v',ns)
   if v is not None: cells[c.attrib['r']]=strings[int(v.text)] if c.attrib.get('t')=='s' else v.text
  for r in rows:
   i=r['source_row']
   assert Decimal(cells['A'+i])==Decimal(r['depth_ccsf_m'])
   assert Decimal(cells['C'+i])==Decimal(r['age_ka'])
   assert cells['E'+i]==r['age_model']
  assert math.isclose(float(cells['D4']),float(rate),rel_tol=1e-12)
 print('Original workbook cells and source checksum agree.')
print(f'Thickness: {thickness_cm} cm')
print(f'Duration: {duration_ka} thousand years')
print(f'Mean accumulation rate: {rate:.6f} cm per thousand years')
print(f'Nominal spacing: {spacing} years per cm')
print('Published interval rate and CSV checksum agree.')
