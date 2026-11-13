// Klimatologie.eu, 2026. Vlastní kresba a kód s pomocí AI. CC BY 4.0.
// Spuštění: node grafika.mjs. Vstup grafu: flanner-2011-tabulka-2.csv.
import { writeFileSync } from 'node:fs';
import { calculate } from './vypocty.mjs';
const C = { ink: '#233e43', muted: '#596c6c', teal: '#277b78', gold: '#c68b29', orange: '#ba572f', paper: '#faf9f4', blue: '#dcecee' };
const esc = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const txt = (x,y,s,size=20,fill=C.ink,weight=400,anchor='start') => `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" font-weight="${weight}" text-anchor="${anchor}">${esc(s)}</text>`;
const rect = (x,y,w,h,fill,rx=12) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"/>`;
const arrow = (d,color,width=5) => `<path d="${d}" fill="none" stroke="${C[color]}" stroke-width="${width}" marker-end="url(#${color})" stroke-linecap="round" stroke-linejoin="round"/>`;
const wrap = (title,desc,body) => `<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="660" viewBox="0 0 1100 660" role="img" aria-labelledby="title desc"><title id="title">${esc(title)}</title><desc id="desc">${esc(desc)}</desc><defs>${['gold','teal','orange'].map(c=>`<marker id="${c}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="3.5" markerHeight="3.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="${C[c]}"/></marker>`).join('')}</defs><g font-family="Arial, Helvetica, sans-serif">${rect(0,0,1100,660,C.paper,0)}${body}</g></svg>\n`;

let scene = txt(34,46,'Méně světlé pokrývky, více pohlcené energie',29,C.ink,700);
scene += txt(34,79,'Porovnání při stejném dopadajícím záření a stejném stavu atmosféry',19,C.muted);
scene += rect(28,103,508,383,'#edf4f2') + rect(564,103,508,383,'#edf4f2');
scene += txt(50,137,'Sníh a led',23,C.ink,700) + txt(587,137,'Po ústupu pokrývky',23,C.ink,700);
scene += txt(550,174,'Oblaka část povrchové změny zakrývají',18,C.muted,400,'middle');
for (const dx of [0,536]) {
  scene += `<circle cx="${110+dx}" cy="227" r="24" fill="#edcb78"/>`;
  for (let i=0;i<8;i++) {
    const a=i*Math.PI/4, x=110+dx,y=227;
    scene+=`<path d="M${x+32*Math.cos(a)} ${y+32*Math.sin(a)}L${x+41*Math.cos(a)} ${y+41*Math.sin(a)}" stroke="${C.gold}" stroke-width="3"/>`;
  }
  scene += arrow(`M${143+dx} 255 L${250+dx} 373`,'gold',7);
  scene += txt(62+dx,305,'stejný osvit',18,C.gold,700);
  scene += `<path d="M${28+dx} 386 Q${143+dx} 371 ${250+dx} 386 T${536+dx} 386 L${536+dx} 486 L${28+dx} 486Z" fill="#bfd7d9"/>`;
}
scene += `<path d="M28 376L100 368L169 375L245 363L310 370L370 363L445 374L536 369L536 419L28 419Z" fill="#fff" stroke="#b6ced0" stroke-width="2"/>`;
scene += txt(51,448,'světlá pokrývka',20,C.ink,700);
scene += arrow('M268 368 L366 241','teal',7) + txt(325,211,'více odrazu',20,C.teal,700);
scene += arrow('M252 391 L252 460','orange',4) + txt(282,463,'méně příjmu',18,C.orange,700);
scene += `<path d="M564 377L600 370L641 377L685 373L701 387L680 405L630 400L564 411Z" fill="#fff" stroke="#b6ced0" stroke-width="2"/>`;
scene += arrow('M804 368 L864 292','teal',4) + txt(862,269,'méně odrazu',20,C.teal,700);
scene += arrow('M788 390 L788 459','orange',8) + txt(815,447,'více příjmu',20,C.orange,700);
scene += txt(587,470,'voda nebo tmavší půda',17,C.ink);
scene += txt(34,523,'Zesilující vazba',22,C.ink,700);
scene += rect(34,544,284,54,'#e5ede5')+txt(176,577,'Počáteční oteplení',20,C.ink,700,'middle');
scene += rect(407,544,284,54,'#e5ede5')+txt(549,577,'Méně sněhu a ledu',20,C.ink,700,'middle');
scene += rect(780,544,286,54,'#f2e3d1')+txt(923,577,'Více ohřevu či tání',20,C.ink,700,'middle');
scene += arrow('M331 571H393','teal',4) + arrow('M704 571H766','orange',4);
scene += arrow('M923 609V636H550V610','orange',3) + txt(310,640,'další ústup',17,C.orange);
writeFileSync(new URL('./mechanismus.svg',import.meta.url),wrap('Zpětná vazba sněhu a ledu','Kvalitativní schéma. Při stejném osvitu světlá pokrývka odráží více než odkrytý tmavý povrch. Energie navíc může způsobit další tání. Šipky nejsou měřená množství.',scene));

const {rows,meanWm2}=calculate();
const x=v=>256+v/0.8*750;
let chart=txt(34,46,'Stejné znaménko, rozdílná velikost',29,C.ink,700);
chart+=txt(34,80,'Změna pohlceného slunečního záření • severní polokoule • 1979–2008',20,C.muted);
for(let i=0;i<=8;i++) {
  const v=i/10;
  chart+=`<path d="M${x(v)} 144V450" stroke="#d9dfd9" stroke-width="${i===0?2:1}"/>`;
  chart+=txt(x(v),480,v.toFixed(1).replace('.',','),18,C.muted,400,'middle');
}
chart+=txt(631,516,'Dodatečný příjem nad atmosférou (W/m²)',20,C.ink,400,'middle');
const names=['CAM3','AM2','ISCCP','APP-x'];
names.forEach((name,i)=>{
  const y=185+i*77,group=rows.filter(r=>r.atmosphere===name);
  chart+=txt(34,y+4,name,23,C.ink,700)+txt(34,y+28,i<2?'model atmosféry':'družicová oblaka',17,C.muted);
  chart+=`<path d="M${x(group[0].deltaWm2)} ${y}H${x(group[2].deltaWm2)}" stroke="#aebcb8" stroke-width="3"/>`;
  group.forEach((row,j)=>{
    const xx=x(row.deltaWm2),color=[C.teal,C.ink,C.orange][j];
    chart+=j===0?`<circle cx="${xx}" cy="${y}" r="7" fill="${color}"/>`:j===1?rect(xx-7,y-7,14,14,color,0):`<path d="M${xx} ${y-9}L${xx+9} ${y+7}L${xx-9} ${y+7}Z" fill="${color}"/>`;
    chart+=txt(xx,y-18,row.deltaWm2.toFixed(2).replace('.',','),18,color,700,'middle');
  });
});
chart+=rect(32,546,1036,83,'#e8ede5');
chart+=txt(52,574,'Rozdíl odrazivosti pokryté a odkryté plochy:',18,C.ink);
chart+=`<circle cx="70" cy="603" r="7" fill="${C.teal}"/>`+txt(88,610,'nižší',18,C.teal);
chart+=rect(192,596,14,14,C.ink,0)+txt(221,610,'střední',18,C.ink);
chart+=`<path d="M360 594L369 610L351 610Z" fill="${C.orange}"/>`+txt(383,610,'vyšší',18,C.orange);
chart+=txt(634,575,`Průměr 12 variant: ${meanWm2.toFixed(2).replace('.',',')} W/m²`,21,C.ink,700);
chart+=txt(634,607,'Rozpětí variant není interval spolehlivosti.',18,C.muted);
chart+=txt(34,651,'Zdroj čísel: Flanner a kol. 2011, tabulka 2. Graf: Klimatologie.eu, CC BY 4.0.',15,C.muted);
writeFileSync(new URL('./srovnani-vypoctu.svg',import.meta.url),wrap('Dvanáct odhadů změny sluneční bilance','Čtyři popisy atmosféry a tři kontrasty albeda dávají 0,26 až 0,72 W/m². Průměr 0,4475 W/m² se zaokrouhluje na 0,45. Jde o severní polokouli a změnu 1979–2008, nikoli globální trend za rok.',chart));
