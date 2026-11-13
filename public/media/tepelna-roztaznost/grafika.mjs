// Own explanatory artwork, Klimatologie.eu with AI assistance, CC BY 4.0.
// Run: node public/media/tepelna-roztaznost/vypocty.mjs
//      node public/media/tepelna-roztaznost/grafika.mjs
import { writeFileSync, readFileSync } from 'node:fs';
const save = (file, body) => writeFileSync(new URL(file, import.meta.url), body);
const esc = s => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const text = (x,y,s,size=21,fill='#243f3c',extra='') => `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" ${extra}>${esc(s)}</text>`;
const line = (x1,y1,x2,y2,color='#81948f',width=2,extra='') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
const rect = (x,y,w,h,fill,extra='') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${extra}/>`;
const head = (title,desc) => `<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="680" viewBox="0 0 1100 680" role="img" aria-labelledby="title desc"><title id="title">${esc(title)}</title><desc id="desc">${esc(desc)}</desc><defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0L6 3L0 6" fill="none" stroke="#b75a36" stroke-width="1.5"/></marker></defs><g font-family="Arial, sans-serif">${rect(0,0,1100,680,'#f8f5ee')}`;
const end='</g></svg>\n';
const vessel = (x,top,color,salt=0) => `${rect(x+3,top,104,350-top,color)}<path d="M${x} 190V350H${x+110}V190" fill="none" stroke="#486c6c" stroke-width="3"/>${salt?Array.from({length:salt},(_,i)=>`<circle cx="${x+20+(i%4)*24}" cy="${top+18+Math.floor(i/4)*28}" r="4" fill="#194d55"/>`).join(''):''}`;
let s=head('Teplota a slanost mění objem vody','Dva kontrolované pokusy při stejném tlaku. Vlevo se stejná hmotnost mořské vody při ohřevu rozpíná. Vpravo mají stejně těžké vzorky při stejné teplotě rozdílný objem: slanější je hustší. Dole plovák měří vrstvy oceánu, radar výšku a gravimetrie změnu hmotnosti. Rozdíly objemů jsou schematicky zvětšeny.');
s+=text(38,49,'Stejná hmotnost, jiný objem',32,'#203d39','font-weight="700"');
s+=text(38,82,'Kontrolovaná srovnání při stejném tlaku',20);
s+=line(550,115,550,407,'#d4dcd5',1);
s+=text(38,133,'OHŘEV JEDNOHO VZORKU',19,'#7c4931','font-weight="700"');
s+=text(38,165,'Stejná slanost, voda neuniká.',20);
s+=vessel(86,257,'#b2d5de')+vessel(343,228,'#e4b59f');
s+=text(141,381,'chladnější',20,'#243f3c','text-anchor="middle"')+text(398,381,'teplejší',20,'#243f3c','text-anchor="middle"');
s+=line(219,283,310,283,'#b75a36',4,'marker-end="url(#arrow)"')+text(233,265,'teplo',19,'#9b4b2d');
s+=text(346,211,'větší objem',19,'#9b4b2d')+text(339,405,'menší hustota',20);
s+=text(588,133,'DVA RŮZNĚ SLANÉ VZORKY',19,'#1d6069','font-weight="700"');
s+=text(588,165,'Stejná teplota i celková hmotnost.',20);
s+=vessel(635,228,'#b2d5de',4)+vessel(892,257,'#91c2c9',8);
s+=text(690,381,'méně slaný',20,'#243f3c','text-anchor="middle"')+text(947,381,'slanější',20,'#243f3c','text-anchor="middle"');
s+=text(891,241,'menší objem',19,'#1d6069')+text(892,405,'větší hustota',20);
s+=rect(30,437,1040,180,'#e6efec','rx="8"');
s+=text(50,470,'V oceánu potřebujeme měření po vrstvách',24,'#203d39','font-weight="700"');
s+=`<path d="M50 523Q72 511 94 523T138 523T182 523T226 523T270 523T314 523T358 523T402 523" fill="none" stroke="#568a95" stroke-width="3"/>`;
s+=rect(194,506,22,64,'#d5a041','rx="8"')+line(205,599,205,575,'#b75a36',3,'marker-end="url(#arrow)"');
s+=text(245,562,'teplota, slanost, tlak',18)+text(245,587,'→ hustota a objem vrstev',18);
s+=text(521,516,'Radar měří výšku hladiny.',21)+text(521,551,'Gravimetrie určuje změnu hmotnosti.',21)+text(521,586,'Společně kontrolují výsledek přepočtu.',21);
s+=text(38,650,'Kvalitativní schéma. Změny objemu silně zvětšeny. Tečky označují rozpuštěné soli.',18);
save('teplota-slanost.svg',s+end);

const rows=readFileSync(new URL('hustota-vypocet.csv',import.meta.url),'utf8').trim().split('\n').slice(1).map(l=>{const[a,b,c,d,e]=l.split(',');return{series:a,T:+b,S:+c,p:+d,rho:+e};});
let g=head('Dvě závislosti hustoty mořské vody','Vypočtené křivky historické rovnice Millera a Poissona 1981 při jedné atmosféře. Při praktické salinitě 35 klesá hustota s teplotou v rozsahu 0 až 30 stupňů. Při 15 stupních hustota roste s praktickou salinitou od 30 do 40. Nejde o naměřené časové řady.');
g+=text(38,47,'Hustota závisí na obou veličinách',31,'#203d39','font-weight="700"');
g+=text(38,80,'Početní příklad z rovnice Millera a Poissona (1981), tlak 1 atmosféra',20);
const y=v=>510-(v-1020)*27;
for(const [j,kind] of ['temperature','salinity'].entries()) {
  const left=91+j*535, right=left+408;
  const x=v=>left+(v-(j?30:0))/(j?10:30)*408;
  g+=text(left,128,j?'Slanější voda je hustší':'Při ohřevu hustota klesá',24,'#203d39','font-weight="700"');
  g+=text(left,157,j?'Teplota 15 °C':'Praktická salinita 35',20);
  for(let v=1020;v<=1032;v+=2){g+=line(left,y(v),right,y(v),'#d6dfd9',1)+text(left-12,y(v)+6,String(v),17,'#405a56','text-anchor="end"');}
  const ticks=j?[30,32,34,36,38,40]:[0,5,10,15,20,25,30];
  for(const v of ticks)g+=line(x(v),510,x(v),516)+text(x(v),540,String(v),18,'#405a56','text-anchor="middle"');
  g+=line(left,186,left,510,'#58756e')+line(left,510,right,510,'#58756e');
  g+=text(left+204,578,j?'Praktická salinita (bez jednotky)':'Teplota (°C, stupnice IPTS-68)',19,'#243f3c','text-anchor="middle"');
  g+=text(left-70,350,'Hustota (kg/m³)',18,'#243f3c',`text-anchor="middle" transform="rotate(-90 ${left-70} 350)"`);
  const selected=rows.filter(r=>r.series===kind);
  g+=`<path d="${selected.map((r,i)=>`${i?'L':'M'}${x(j?r.S:r.T).toFixed(2)} ${y(r.rho).toFixed(2)}`).join(' ')}" fill="none" stroke="${j?'#26767b':'#b65a35'}" stroke-width="4"/>`;
  if(!j){const r=selected.find(r=>r.T===5);g+=`<circle cx="${x(5)}" cy="${y(r.rho)}" r="6" fill="#b65a35"/>`+text(x(5)+14,y(r.rho)-17,'5 °C → 1 027,675 kg/m³',17,'#8e4529');}
}
g+=text(38,624,'Křivky jsou vypočtené, ne jednotlivá měření. Obě svislé osy mají stejné měřítko.',19);
g+=text(38,652,'Příklad ukazuje směr a nelinearitu vztahu. Pro oceánské výpočty slouží TEOS-10 včetně tlaku.',18);
save('hustota.svg',g+end);
