---
title: "Historie poznání klimatu"
layout: single
permalink: /historie/
author_profile: true
toc: false
classes: wide
---

<style>
/* Obal celé osy */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
}

/* Svislá čára uprostřed */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #34495e;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  border-radius: 3px;
}

/* Kontejner - SPOLEČNÉ VLASTNOSTI */
.container {
  padding: 10px 25px;
  position: relative;
  background-color: inherit;
  width: 50%;
  box-sizing: border-box;
}

/* Tečka na ose - SPOLEČNÉ */
.container::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  right: -10px; /* Výchozí pro levou stranu */
  background-color: white;
  border: 4px solid #34495e;
  top: 24px;
  border-radius: 50%;
  z-index: 1;
}

/* --- AUTOMATICKÉ STŘÍDÁNÍ STRAN --- */

/* LICHÉ položky (1., 3., 5...) - VLEVO */
.container:nth-child(odd) {
  left: 0;
}

/* SUDÉ položky (2., 4., 6...) - VPRAVO */
.container:nth-child(even) {
  left: 50%;
}

/* Úprava tečky pro SUDÉ (pravé) položky */
.container:nth-child(even)::after {
  left: -10px;
}

/* Obsahová bublina */
.content-box {
  padding: 15px 25px;
  background-color: white;
  position: relative;
  border-radius: 8px; 
  border-left: 6px solid #ccc;
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  font-size: 0.9rem;
  line-height: 1.4;
}

.content-box h3 {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 1.1rem;
    font-weight: bold;
}

/* BARVY KATEGORIÍ */
.politika { border-left-color: #e74c3c; }
.politika h3 { color: #e74c3c; }
.veda { border-left-color: #3498db; }
.veda h3 { color: #3498db; }
.osobnost { border-left-color: #2ecc71; }
.osobnost h3 { color: #2ecc71; }

/* RESPONZIVITA (Mobily) */
@media screen and (max-width: 600px) {
  .timeline::after { left: 31px; }
  .container { width: 100%; padding-left: 70px; padding-right: 25px; }
  .container:nth-child(odd), 
  .container:nth-child(even) { left: 0; }
  .container::after,
  .container:nth-child(even)::after { left: 21px; }
}
</style>

<div class="timeline">

  <div class="container">
    <div class="content-box veda">
      <h3>1681 - Edme Mariotte</h3>
      <p>Všiml si, že sluneční světlo a teplo snadno prochází sklem, ale sálavé teplo (např. z horkého povrchu) se odráží nebo je pohlceno. Jde o úplně první pozorování principu, na kterém funguje skleníkový efekt.
      <br><a href="/zdroje/#1681_Mariotte">[[1681_Mariotte]]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1767 - H. B. de Saussure</h3>
      <p>Sestrojil první „horkou krabici“ (heliothermometer). Šlo o izolovanou nádobu zakrytou vrstvami skla, která se na slunci rozpálila až na bod varu vody. Dokázal tak, že sklo dokáže uvěznit sluneční teplo.
      <br><a href="/zdroje/#1767_Saussure">[[1767_Saussure]]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1801 - William Herschel</h3>
      <p>Při zkoumání slunečního spektra objevil <strong>infračervené záření</strong>. Zjistil, že nejvíce tepla se skrývá v neviditelné části světla za červenou barvou. To bylo zásadní pro pochopení toho, jak Země přijímá a vyzařuje energii.
      <br><a href="/zdroje/#1801_Herschel">[[1801_Herschel]]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1804 - John Leslie</h3>
      <p>Publikoval experimenty o povaze tepla. Pomocí tzv. <em>Leslieho kostky</em> zkoumal, jak různé povrchy (lesklé vs. černé) vyzařují a pohlcují teplo, což je klíčové pro fyziku atmosféry.
      <br><a href="/zdroje/#1804_Leslie">[[1804_Leslie]]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1824 - Joseph Fourier</h3>
      <p>Shrnul poznatky o teplotě Země. Vyslovil hypotézu, že atmosféra funguje jako izolant (podobně jako Saussurova krabice), který udržuje planetu teplejší, než by byla v prázdném prostoru.
      <br><a href="/zdroje/#1824_Fourier">[[1824_Fourier]]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1840 - Louis Agassiz</h3>
      <p>Vydal dílo <em>Études sur les glaciers</em>, kde poprvé vědecky formuloval teorii <strong>dob ledových</strong>. Ukázal, že klima Země není stabilní a v minulosti procházelo drastickými změnami.
      <br><a href="/zdroje/#1840_Agassiz">[[1840_Agassiz]]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1856 - Eunice Newton Foote</h3>
      <p>Experimentálně prokázala, že válec naplněný oxidem uhličitým se na slunci zahřeje mnohem více než ten se vzduchem. Jako první předpověděla, že změna množství CO2 v atmosféře změní teplotu planety.
      <br><a href="/zdroje/#1856_Foote">[[1856_Foote]]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1862 - John Tyndall</h3>
      <p>Laboratorně potvrdil, že čistý vzduch je pro tepelné záření průhledný, zatímco vodní pára a CO2 ho silně pohlcují. Identifikoval tak klíčové plyny zodpovědné za skleníkový efekt.
      <br><a href="/zdroje/#1862_Tyndall">[[1862_Tyndall]]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1864 - James Croll</h3>
      <p>Předložil teorii, že za střídáním dob ledových a meziledových stojí změny v oběžné dráze Země (orbital forcing). Jeho myšlenky o vlivu výstřednosti dráhy později matematicky zdokonalil Milanković.
      <br><a href="/zdroje/#1864_Croll">[[1864_Croll]]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1884 - Samuel Pierpont Langley</h3>
      <p>Pomocí bolometru prováděl přesná měření slunečního záření ve vysokých nadmořských výškách. Zkoumal, jak atmosféra selektivně pohlcuje různé vlnové délky přicházející energie a snažil se určit solární konstantu.
      <br><a href="/zdroje/#1884_Langley">[[1884_Langley]]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1894 - Arvid Högbom</h3>
      <p>Zkoumal geochemický cyklus uhlíku. Upozornil na to, že spalování uhlí začíná uvolňovat do atmosféry množství CO2 srovnatelné s přírodními geologickými procesy, ačkoliv si myslel, že oceány většinu pohltí.
      <br><a href="/zdroje/#1894_Hogbom">[[1894_Hogbom]]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1896 - Svante Arrhenius</h3>
      <p>Vytvořil první fyzikální model výpočtu vlivu CO2 na teplotu povrchu Země. Došel k závěru, že zdvojnásobení koncentrace oxidu uhličitého by vedlo k výraznému globálnímu oteplení (odhadl 5–6 °C).
      <br><a href="/zdroje/#1896_Arrhenius">[[1896_Arrhenius]]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1938 - Guy Stewart Callendar</h3>
      <p>Jako amatérský meteorolog prokázal oteplování planety analýzou historických teplotních řad a spojil tento trend přímo s nárůstem CO2 ze spalování fosilních paliv (tzv. Callendarův efekt).
      <br><a href="/zdroje/#1938_Callendar">[[1938_Callendar]]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1941 - Milutin Milanković</h3>
      <p>Publikoval své celoživotní dílo <em>Kanon</em>. Matematicky v něm popsal cykly změn sklonu zemské osy, precese a excentricity oběžné dráhy, které řídí dlouhodobé střídání dob ledových.
      <br><a href="/zdroje/#1941_Milankovic">[[1941_Milankovic]]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1952 - Willard Libby</h3>
      <p>Vyvinul metodu radiouhlíkového datování (C14). Tato revoluční technika umožnila vědcům přesně datovat organické materiály z minulosti (např. v rašelině) a lépe rekonstruovat historii klimatu.
      <br><a href="/zdroje/#1952_Libby">[[1952_Libby]]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1955 - Cesare Emiliani</h3>
      <p>Průkopník paleoklimatologie. Analýzou izotopů kyslíku v hlubokomořských sedimentech odhalil detailní historii teplot oceánů a potvrdil cyklický charakter dob ledových předpovězený Milankovičem.
      <br><a href="/zdroje/#1955_Emiliani">[[1955_Emiliani]]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1956 - Gilbert N. Plass</h3>
      <p>S využitím prvních počítačů výrazně zpřesnil výpočty absorpce infračerveného záření. Vyvrátil názor, že CO2 je již "nasycený", a varoval, že hromadění plynu způsobí měřitelné oteplení již na konci 20. století.
      <br><a href="/zdroje/#1956_Plass">[[1956_Plass]]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1961 - Walter Sullivan</h3>
      <p>Shrnul výsledky Mezinárodního geofyzikálního roku (IGY 1957–58). Tato bezprecedentní vědecká spolupráce odstartovala moderní monitorování Země, včetně systematického měření CO2 na Mauna Loa.
      <br><a href="/zdroje/#1961_Sullivan">[[1961_Sullivan]]</a></p>
    </div>
  </div>

</div>

