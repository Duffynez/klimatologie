---
title: "Historie poznání klimatu"
layout: single
permalink: /historie/
author_profile: true
toc: false
---

<!-- ZDE ZAČÍNÁ STYL PRO ČASOVOU OSU (Nezasahovat, pokud nechcete měnit vzhled) -->
<style>
/* Obal celé osy */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* Svislá čára uprostřed */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #e9ecef; /* Barva čáry */
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  border-radius: 3px;
}

/* Kontejner pro jednotlivé body */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  box-sizing: border-box;
}

/* Tečka na ose */
.container::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  right: -10px;
  background-color: white;
  border: 4px solid #FF9F55; /* Barva tečky */
  top: 20px;
  border-radius: 50%;
  z-index: 1;
}

/* Levá a pravá strana */
.left { left: 0; }
.right { left: 50%; }

/* Umístění šipek a teček pro pravou stranu */
.right::after { left: -10px; }

/* Obsahová bublina */
.content-box {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  border-left: 5px solid #ccc; /* Výchozí barva proužku */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Stín */
}

/* --- BARVY KATEGORIÍ (Proužky vlevo) --- */
/* Politika = Červená */
.politika { border-left-color: #e74c3c; }
.politika h3 { color: #e74c3c; }

/* Věda/Pozorování = Modrá */
.veda { border-left-color: #3498db; }
.veda h3 { color: #3498db; }

/* Osobnosti = Zelená */
.osobnost { border-left-color: #2ecc71; }
.osobnost h3 { color: #2ecc71; }

/* Responzivita pro mobily (Vše se srovná pod sebe) */
@media screen and (max-width: 600px) {
  .timeline::after { left: 31px; }
  .container { width: 100%; padding-left: 70px; padding-right: 25px; }
  .container::after { left: 21px; }
  .left::after, .right::after { left: 21px; }
  .right { left: 0%; }
}
</style>

<!-- ZDE ZAČÍNÁ OBSAH ČASOVÉ OSY -->
<!-- Tady budete přidávat události -->

<div class="timeline">

  <!-- UDÁLOST 1 (VLEVO) - Věda -->
  <div class="container left">
    <div class="content-box veda">
      <h3>1824 - Joseph Fourier</h3>
      <p>Poprvé popsán <strong>skleníkový efekt</strong>. Fourier spočítal, že by Země měla být mnohem chladnější, pokud by ji neohřívala atmosféra.</p>
    </div>
  </div>

  <!-- UDÁLOST 2 (VPRAVO) - Věda -->
  <div class="container right">
    <div class="content-box veda">
      <h3>1856 - Eunice Newton Foote</h3>
      <p>Experimentálně prokázala, že <strong>CO2 pohlcuje teplo</strong>. Byla to první vědecká studie spojující plyny v atmosféře s teplotou.</p>
    </div>
  </div>

  <!-- UDÁLOST 3 (VLEVO) - Osobnost -->
  <div class="container left">
    <div class="content-box osobnost">
      <h3>1896 - Svante Arrhenius</h3>
      <p>Vypočítal, že zdvojnásobení CO2 v atmosféře by zvýšilo teplotu o 5-6 °C. Tehdy to považoval za pozitivní věc, která oddálí dobu ledovou.</p>
    </div>
  </div>

  <!-- UDÁLOST 4 (VPRAVO) - Pozorování -->
  <div class="container right">
    <div class="content-box veda">
      <h3>1958 - Keelingova křivka</h3>
      <p>Začátek měření CO2 na observatoři Mauna Loa. První nezvratný důkaz, že koncentrace oxidu uhličitého roste.</p>
    </div>
  </div>

  <!-- UDÁLOST 5 (VLEVO) - Politika -->
  <div class="container left">
    <div class="content-box politika">
      <h3>1988 - Založení IPCC</h3>
      <p>OSN zakládá Mezivládní panel pro změnu klimatu, aby poskytoval objektivní vědecké informace.</p>
    </div>
  </div>

</div>
