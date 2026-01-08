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
      <p>Všiml si, že sluneční světlo a teplo snadno prochází sklem, ale sálavé teplo (např. z horkého povrchu) se odráží nebo je pohlceno. Jde o úplně první pozorování principu, na kterém funguje skleníkový efekt.</p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1767 - H. B. de Saussure</h3>
      <p>Sestrojil první „horkou krabici“ (heliothermometer). Šlo o izolovanou nádobu zakrytou vrstvami skla, která se na slunci rozpálila až na bod varu vody. Dokázal tak, že sklo dokáže uvěznit sluneční teplo.</p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1801 - William Herschel</h3>
      <p>Při zkoumání slunečního spektra objevil <strong>infračervené záření</strong>. Zjistil, že nejvíce tepla se skrývá v neviditelné části světla za červenou barvou. To bylo zásadní pro pochopení toho, jak Země přijímá a vyzařuje energii.</p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1804 - John Leslie</h3>
      <p>Publikoval experimenty o povaze tepla. Pomocí tzv. <em>Leslieho kostky</em> zkoumal, jak různé povrchy (lesklé vs. černé) vyzařují a pohlcují teplo, což je klíčové pro fyziku atmosféry.</p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1824 - Joseph Fourier</h3>
      <p>Shrnul poznatky o teplotě Země. Vyslovil hypotézu, že atmosféra funguje jako izolant (podobně jako Saussurova krabice), který udržuje planetu teplejší, než by byla v prázdném prostoru.</p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1840 - Louis Agassiz</h3>
      <p>Vydal dílo <em>Études sur les glaciers</em>, kde poprvé vědecky formuloval teorii <strong>dob ledových</strong>. Ukázal, že klima Země není stabilní a v minulosti procházelo drastickými změnami.</p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1856 - Eunice Newton Foote</h3>
      <p>Experimentálně prokázala, že válec naplněný oxidem uhličitým se na slunci zahřeje mnohem více než ten se vzduchem. Jako první předpověděla, že změna množství CO2 v atmosféře změní teplotu planety.</p>
    </div>
  </div>

</div>

