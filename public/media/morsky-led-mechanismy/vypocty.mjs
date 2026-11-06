// Spuštění: node public/media/morsky-led-mechanismy/vypocty.mjs
// Původní tabulka: Perovich et al. 2011, DOI 10.1594/PANGAEA.817713, CC BY 3.0.
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
export function calculate() {
  const tsv=fs.readFileSync(new URL('./perovich-2011-tabulka.tsv',import.meta.url),'utf8');
  const rows=tsv.slice(tsv.indexOf('*/')+2).trim().split(/\r?\n/).slice(1).map(r=>r.split('\t'));
  const data=rows.map(r=>({buoy:r[0],bottomMeltM:Number(r[9]),publishedMeltMJm2:Number(r[12]),solarMJm2:Number(r[13]),calculatedMeltMJm2:Number(r[9])*900*334/1000}));
  const avg=a=>a.reduce((x,y)=>x+y,0)/a.length;
  const x=data.map(r=>r.solarMJm2), y=data.map(r=>r.publishedMeltMJm2), mx=avg(x), my=avg(y);
  const covariance=x.reduce((sum,a,i)=>sum+(a-mx)*(y[i]-my),0);
  const correlation=covariance/Math.sqrt(x.reduce((sum,a)=>sum+(a-mx)**2,0)*y.reduce((sum,a)=>sum+(a-my)**2,0));
  return {data,correlation};
}
if(process.argv[1]&&fileURLToPath(import.meta.url)===fs.realpathSync(process.argv[1]))console.log(JSON.stringify(calculate(),null,2));
