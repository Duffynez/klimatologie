import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const dir=path.dirname(fileURLToPath(import.meta.url));
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;');
const text=(x,y,lines,size=22,color='#233c46',weight=400)=>`<text x="${x}" y="${y}" font-size="${size}" fill="${color}" font-weight="${weight}">${lines.map((s,i)=>`<tspan x="${x}" dy="${i?size*1.35:0}">${escape(s)}</tspan>`).join('')}</text>`;
const arrow=(x1,y1,x2,y2,color='blue')=>`<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${color==='blue'?'#397fa2':'#cc713c'}" stroke-width="5" fill="none" marker-end="url(#${color})"/>`;
const rect=(x,y,w,h,fill,stroke='none',rx=0)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
const base=(title,desc,content)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 660" role="img" aria-labelledby="title desc"><title id="title">${title}</title><desc id="desc">${desc}</desc><defs><marker id="blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#397fa2"/></marker><marker id="heat" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#cc713c"/></marker></defs><g font-family="Arial, sans-serif">${rect(0,0,1100,660,'#f5f7f5')}${text(32,43,[title],28,'#233c46',700)}${content}${text(32,636,['Kvalitativní schéma • rozměry ani šipky nepředstavují měření'],18,'#60757a')}</g></svg>`;
const gate=base('Pohyb ker není totéž co úbytek objemu','Družice sleduje plochu a posun ker přes průliv. Sonar měří ponořenou část pro odhad tloušťky. Větší plocha tenčích ker může nést menší objem.',
  rect(28,70,510,530,'#e1eef2','#c8d6db',14)+rect(558,70,514,530,'#fff','#c8d6db',14)+
  text(48,109,['1  Plocha a pohyb přes průliv'],23,'#233c46',700)+
  `<path d="M28 158 L115 152 L166 198 L132 252 L169 310 L139 382 L123 450 L28 485 Z" fill="#c9d4cb"/><path d="M538 175 L479 155 L462 211 L485 254 L459 296 L489 351 L538 363 Z" fill="#c9d4cb"/>`+
  text(44,287,['Grónsko'],19)+text(453,392,['Špicberky'],18)+text(207,158,['Arktida'],24,'#233c46',700)+
  `<g fill="#fff" stroke="#85a7b5" stroke-width="2"><path d="M209 190 L265 182 L282 215 L258 238 L211 227 Z"/><path d="M323 197 L377 186 L402 224 L370 250 L325 237 Z"/><path d="M201 306 L247 287 L277 315 L263 351 L214 350 Z"/><path d="M321 322 L361 303 L395 330 L377 360 L331 351 Z"/><path d="M238 454 L295 442 L317 478 L289 503 L246 491 Z"/></g>`+
  arrow(241,242,241,283)+arrow(357,258,357,300)+arrow(260,363,260,438)+
  `<path d="M145 404 H443" stroke="#267c69" stroke-width="4" stroke-dasharray="10 6"/>`+
  text(165,557,['Sledujeme překročení měřicího řezu.'],19)+text(44,585,['Družice: posun ker + podíl ledu'],20,'#267c69',700)+
  text(579,109,['2  K ploše přidáme tloušťku'],23,'#233c46',700)+
  rect(579,207,471,158,'#e1eef2')+rect(635,198,280,74,'#c6e1eb','#6595a8')+
  `<path d="M579 207 H1050" stroke="#397fa2" stroke-width="2"/>`+text(935,195,['hladina'],18)+
  rect(751,326,48,18,'#267c69',undefined,5)+`<path d="M775 327 L742 275 M775 327 L809 275" fill="none" stroke="#267c69" stroke-width="2" stroke-dasharray="5 4"/>`+
  text(590,159,['Sonar pod ledem měří ponor.'],20)+text(842,316,['odraz zvuku'],18,'#267c69')+
  text(580,398,['Samotná plocha ker nestačí'],21,'#233c46',700)+
  rect(593,430,150,48,'#c6e1eb','#6595a8')+rect(794,454,220,24,'#c6e1eb','#6595a8')+
  text(589,511,['menší plocha','silnější led'],19)+text(797,511,['větší plocha','tenčí led'],19)+
  text(582,582,['Objem závisí na ploše i tloušťce.'],21,'#267c69',700));
fs.writeFileSync(path.join(dir,'pohyb-a-vyvoz.svg'),gate);
const heat=base('Růst a tání závisejí na přenosu energie','V zimě se teplo odvádí skrz sníh a led. V létě záření ohřívá vodu mezi krami a ta může tavit led zespodu. Bóje sledují povrchy a vnitřní teplotu.',
  rect(28,70,510,530,'#fff','#c8d6db',14)+rect(558,70,514,530,'#fff','#c8d6db',14)+
  text(48,110,['Zima • teplo odchází vzhůru'],23,'#233c46',700)+text(578,110,['Léto • voda přijímá záření'],23,'#233c46',700)+
  rect(29,297,508,215,'#dcecf1')+rect(64,288,437,75,'#c6e1eb','#6595a8')+rect(64,266,437,22,'#f6f7f5','#d6dfdf')+
  text(390,252,['sníh'],20)+text(90,324,['led'],23)+text(80,458,['oceán'],23)+
  arrow(271,337,271,164,'heat')+text(70,155,['Chladný vzduch'],20)+text(307,206,['odvod','tepla'],20,'#a7532a')+
  arrow(268,368,268,412)+text(305,401,['přírůstek','na spodku'],20,'#397fa2')+
  arrow(446,467,446,376,'heat')+text(70,543,['Růst nastane, když vedení odvede'],20)+text(70,573,['více tepla, než dodá voda.'],20)+
  rect(559,307,512,205,'#dcecf1')+rect(601,297,219,88,'#c6e1eb','#6595a8')+rect(932,299,115,70,'#c6e1eb','#6595a8')+
  `<circle cx="872" cy="177" r="26" fill="#edb15e"/>`+arrow(870,216,870,364,'heat')+text(898,269,['volná','voda'],19)+
  `<path d="M876 397 Q865 445 763 446 Q726 444 729 391" stroke="#cc713c" stroke-width="5" fill="none" marker-end="url(#heat)"/>`+
  text(883,453,['teplo k ledu'],19,'#a7532a')+
  rect(658,232,18,200,'#267c69',undefined,3)+rect(634,248,66,18,'#267c69',undefined,5)+
  `<g fill="#fff">${[290,312,334,356,378].map(y=>`<circle cx="667" cy="${y}" r="4"/>`).join('')}</g>`+
  text(585,177,['bóje'],21,'#267c69',700)+`<path d="M628 184 L661 230" stroke="#267c69" stroke-width="2"/>`+
  text(702,241,['horní povrch'],18,'#267c69')+text(584,485,['spodní povrch a teplota uvnitř'],19,'#267c69')+
  arrow(785,383,785,349)+text(706,326,['ústup','spodku'],17,'#397fa2')+
  text(579,543,['3  Bóje ověří místo a velikost tání.'],20)+text(579,573,['4  Družice a modely ověří dlouhý vývoj.'],20));
fs.writeFileSync(path.join(dir,'energie-a-rust.svg'),heat);
