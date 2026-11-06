// Vlastní kvalitativní schémata Klimatologie.eu, CC BY 4.0.
// Spuštění: node public/media/snehova-pokryvka-mechanismy/grafika.mjs
import { writeFile } from "node:fs/promises";
const out = new URL("./", import.meta.url);
const ink = "#263d43", blue = "#407b9c", orange = "#b66a30", green = "#276b59";
const esc = s => String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const text = (x, y, s, size = 22, fill = ink, weight = 400) => `<text x="${x}" y="${y}" fill="${fill}" font-size="${size}" font-weight="${weight}">${esc(s)}</text>`;
const line = (x1,y1,x2,y2,color=ink,width=3) => `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="${color}" stroke-width="${width}" fill="none"/>`;
const arrow = (x1,y1,x2,y2,color) => `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="${color}" stroke-width="5" fill="none" marker-end="url(#a${color.slice(1)})"/>`;
const snow = (x,y) => `<g stroke="${blue}" stroke-width="2.5">${[[x-7,y,x+7,y],[x,y-7,x,y+7],[x-5,y-5,x+5,y+5],[x-5,y+5,x+5,y-5]].map(a=>line(...a,blue,2.5)).join("")}</g>`;
const cloud = (x,y) => `<path d="M${x} ${y+38}C${x-30} ${y+13} ${x+2} ${y-18} ${x+30} ${y-5}C${x+38} ${y-45} ${x+100} ${y-42} ${x+110} ${y-9}C${x+157} ${y-23} ${x+185} ${y+24} ${x+155} ${y+38}Z" fill="#dce7ec" stroke="#91aeba" stroke-width="2"/>`;
const core = (x,y) => `<path d="M${x} ${y}v76h15v-76" fill="#d5e5e5" stroke="${green}" stroke-width="3"/>${line(x-9,y,x+24,y,green,4)}${line(x+7,y-13,x+7,y,green,3)}`;
const gauge = (x,y) => `<path d="M${x} ${y}h38l-10 17v52h-18v-52Z" fill="#d5e5e5" stroke="${green}" stroke-width="3"/>${line(x+19,y+69,x+19,y+90,green,4)}`;
const badge = (x,y,n) => `<circle cx="${x}" cy="${y}" r="19" fill="${green}"/>${text(x-6,y+7,n,21,"#fff",700)}`;
const start = (title,desc) => `<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="660" viewBox="0 0 1100 660" role="img" aria-labelledby="title desc"><title id="title">${esc(title)}</title><desc id="desc">${esc(desc)}</desc><defs>${[blue,orange,green].map(c=>`<marker id="a${c.slice(1)}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="${c}"/></marker>`).join("")}</defs><rect width="1100" height="660" fill="#faf9f4"/><g font-family="Arial, sans-serif">`;
const end = `</g></svg>\n`;

let p = start("Méně srážek při stejných podmínkách tání", "Porovnání dvou stejných svahů. Menší zimní přísun sněhu vytváří menší zásobu. Srážkoměr a sněhový odběr měří rozdílné části bilance. Kvalitativní schéma bez měřítka.");
p += text(38,45,"1 · Co by způsobila sušší zima?",30,ink,700);
p += text(38,78,"Srovnáváme stejný svah při stejném podílu sněžení a stejných podmínkách tání.",21);
for (const [x,more] of [[35,true],[570,false]]) {
  p += `<rect x="${x}" y="106" width="495" height="377" rx="12" fill="#eef4f6"/>`;
  p += text(x+24,141,more?"Větší přísun sněhu":"Menší přísun sněhu",24,ink,700);
  p += cloud(x+72,203);
  for(const [a,b] of (more?[[88,259],[135,275],[185,257],[220,285],[115,307],[185,313]]:[[107,269],[195,281]])) p += snow(x+a,b);
  p += `<path d="M${x+20} 386L${x+125} 337L${x+215} 351L${x+325} 408L${x+475} 430V465H${x+20}Z" fill="#c1ad93"/>`;
  p += `<path d="M${x+20} ${more?346:373}L${x+125} ${more?295:324}L${x+215} ${more?309:337}L${x+325} ${more?365:394}L${x+475} ${more?390:416}V430L${x+325} 408L${x+215} 351L${x+125} 337L${x+20} 386Z" fill="#fff" stroke="#8daebd" stroke-width="2"/>`;
  p += arrow(x+388,237,x+331,335,orange);
  p += text(x+290,185,"Energie",20,orange,700) + text(x+290,210,"pro tání",20,orange);
  p += core(x+225,280) + gauge(x+421,330);
  p += text(x+35,452,more?"Větší jarní zásoba":"Menší jarní zásoba",23,blue,700);
}
p += badge(58,527,"1") + text(89,535,"Co změříme pro rozlišení příčin",25,green,700);
p += text(48,574,"Srážkoměr: přísun vody.",22) + text(565,574,"Odběr sněhu: zbývající zásoba.",22);
p += text(48,611,"Zásoba klesá i při rostoucích srážkách? Pak je potřeba další vysvětlení.",23,ink,700);
p += text(48,640,"Zkouška: regionální srovnání Moteho a kol. (2005). Schéma nepředstavuje naměřené velikosti.",18);
await writeFile(new URL("srazky-a-zasoba.svg",out),p+end);

p = start("Teplota ovlivňuje vznik sněhu i jeho zánik", "Srážky procházejí vzduchem a dopadají jako sníh nebo déšť. Na zemi sníh přijímá energii, taje a uvolňuje vodu. Teploměr, vlhkoměr, sněhová poduška a srovnání povodí ověřují různé části mechanismu.");
p += text(38,45,"2 · Stejný úhrn srážek, jiný průběh sněhové sezony",29,ink,700);
p += cloud(95,148) + cloud(372,148);
p += text(38,99,"Chladnější vzduch",22,blue,700) + text(365,99,"Teplejší vzduch",22,orange,700);
for(const [x,y] of [[110,220],[153,258],[209,221],[253,261],[100,296],[193,310]]) p+=snow(x,y);
for(const x of [392,438,483,528]) p+=line(x,245,x-8,266,blue,3);
p+=badge(321,218,"2") + text(347,224,"Teplota + vlhkost",21,green,700);
p+=text(347,294,"Častější déšť",23,orange,700)+text(347,322,"může omezit zásobu",21);
p+=`<circle cx="900" cy="151" r="35" fill="#e4b66a"/>`;
for(let a=0;a<360;a+=45){const r=a*Math.PI/180;p+=line(900+43*Math.cos(r),151+43*Math.sin(r),900+57*Math.cos(r),151+57*Math.sin(r),orange,3);}
p+=arrow(858,211,798,355,orange)+text(654,184,"Pohlcené záření",21,orange,700);
p+=arrow(1043,290,903,369,orange)+text(865,264,"Teplo ze vzduchu",21,orange,700);
p+=`<path d="M35 437Q200 365 370 414T720 433T1065 455V515H35Z" fill="#c1ad93"/>`;
p+=`<path d="M35 385Q200 310 370 369T720 382T1065 408V455Q885 404 720 433T370 414T35 437Z" fill="#fff" stroke="#8daebd" stroke-width="2"/>`;
p+=text(67,393,"Sníh: led + zadržená voda",22,blue,700);
p+=`<rect x="648" y="421" width="119" height="13" rx="6" fill="${green}"/>`;
p+=line(707,434,707,476,green,3)+badge(684,475,"3")+text(715,483,"Měření zásoby",22,green,700);
p+=arrow(867,432,1019,480,blue)+text(879,506,"Odtok vody",21,blue,700);
p+=text(43,478,"Tání mění led ve vodu.",22)+text(43,507,"Zásoba klesá až jejím odchodem.",22);
p+=`<path d="M36 536H1064" stroke="#cad7d7" stroke-width="2"/>`;
p+=badge(57,575,"4")+text(88,582,"Kontrola v povodích",24,green,700);
p+=text(390,576,"Mírná zima: více srážek může přicházet jako déšť.",22);
p+=text(390,611,"Studená zima: větší sněžení může zásobu zvýšit.",22);
p+=text(38,642,"Zkoušky: Jennings 2018 · Musselman 2017 · Gottlieb a Mankin 2024. Kvalitativní schéma.",18);
await writeFile(new URL("teplota-a-tani.svg",out),p+end);
