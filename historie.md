---
title: "Historie poznání klimatu"
layout: single
permalink: /historie/
author_profile: true
toc: false
classes: wide
---

<style>
/* =========================================
   HLAVNÍ KONTEJNER A SVISLÁ ČÁRA
   ========================================= */

/* Obal celé časové osy. Drží vše pohromadě a centruje to na střed stránky. */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
}

/* Tohle vytvoří tu svislou čáru uprostřed.
   ::after je "pseudoprvěk" - virtuální element, který vytvoříme přes CSS.
   left: 50% ji posune přesně doprostřed.
*/
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #34495e;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px; /* Posun o polovinu šířky čáry zpět, aby byla opticky přesně na středu */
  border-radius: 3px;
}

/* =========================================
   BUBLINY (KONTEJNERY)
   ========================================= */

/* Každá položka (rok) je v divu .container.
   POZOR: Každý kontejner má šířku jen 50% stránky!
   Tím pádem se vejdou buď vlevo, nebo vpravo od středové čáry.
*/
.container {
  padding: 10px 25px;
  position: relative;
  background-color: inherit;
  width: 50%;
  box-sizing: border-box;
}

/* Tečka na ose.
   Opět pseudoprvěk. Vykreslí kolečko, které sedí na té svislé čáře.
*/
.container::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  right: -10px; /* Tímto se tečka "přilepí" k pravému okraji kontejneru (ke středu osy) */
  background-color: white;
  border: 4px solid #34495e;
  top: 24px;
  border-radius: 50%; /* Dělá z čtverce kruh */
  z-index: 1;
}

/* =========================================
   MAGIE: AUTOMATICKÉ STŘÍDÁNÍ STRAN (Cik-Cak)
   ========================================= */

/* nth-child(odd) = Všechny LICHÉ položky (1., 3., 5. v pořadí v HTML kódu).
   Zůstávají vlevo (left: 0).
*/
.container:nth-child(odd) {
  left: 0;
}

/* nth-child(even) = Všechny SUDÉ položky (2., 4., 6. v pořadí).
   Posunou se doprava o 50% (left: 50%).
   Tohle vytváří ten efekt střídání!
*/
.container:nth-child(even) {
  left: 50%;
}

/* U sudých (pravých) položek musíme tečku posunout na druhou stranu,
   aby se dotýkala středové čáry zleva.
*/
.container:nth-child(even)::after {
  left: -10px;
}

/* =========================================
   VZHLED BUBLINY S TEXTEM
   ========================================= */

.content-box {
  padding: 15px 25px;
  background-color: white;
  position: relative;
  border-radius: 8px; 
  border-left: 6px solid #ccc; /* Šedý pruh vlevo, mění se barvami níže */
  box-shadow: 0 5px 15px rgba(0,0,0,0.15); /* Jemný stín pro 3D efekt */
  font-size: 0.9rem;
  line-height: 1.4;
}

.content-box h3 {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 1.1rem;
    font-weight: bold;
}

/* BARVY KATEGORIÍ - Použij třídu 'veda', 'politika' nebo 'osobnost' v HTML */
.politika { border-left-color: #e74c3c; }
.politika h3 { color: #e74c3c; }

.veda { border-left-color: #3498db; }
.veda h3 { color: #3498db; }

.osobnost { border-left-color: #2ecc71; }
.osobnost h3 { color: #2ecc71; }

/* =========================================
   RESPONZIVITA (MOBILY)
   ========================================= */

/* Pokud je displej užší než 600px (mobil) */
@media screen and (max-width: 600px) {
  /* Posuneme středovou čáru doleva, aby nezavazela textu */
  .timeline::after { left: 31px; }
  
  /* Roztáhneme kontejnery na plnou šířku a uděláme místo pro čáru vlevo */
  .container { width: 100%; padding-left: 70px; padding-right: 25px; }
  
  /* Zrušíme cik-cak efekt - všechno zarovnáme doleva */
  .container:nth-child(odd), 
  .container:nth-child(even) { left: 0; }
  
  /* Srovnáme tečky pod sebe na levou stranu */
  .container::after,
  .container:nth-child(even)::after { left: 21px; }
}
</style>

<div class="timeline">

  <div class="container">
    <div class="content-box veda">
      <h3>1681 - Edme Mariotte</h3>
      <p>Všiml si, že sluneční světlo a teplo snadno prochází sklem...
      <br><a href="/zdroje/#1681_Mariotte">[1681_Mariotte]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1767 - H. B. de Saussure</h3>
      <p>Sestrojil první „horkou krabici“...
      <br><a href="/zdroje/#1767_Saussure">[1767_Saussure]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1801 - William Herschel</h3>
      <p>Při zkoumání slunečního spektra objevil <strong>infračervené záření</strong>...
      <br><a href="/zdroje/#1801_Herschel">[1801_Herschel]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1804 - John Leslie</h3>
      <p>Publikoval experimenty o povaze tepla...
      <br><a href="/zdroje/#1804_Leslie">[1804_Leslie]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1824 - Joseph Fourier</h3>
      <p>Shrnul poznatky o teplotě Země...
      <br><a href="/zdroje/#1824_Fourier">[1824_Fourier]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1840 - Louis Agassiz</h3>
      <p>Vydal dílo <em>Études sur les glaciers</em>...
      <br><a href="/zdroje/#1840_Agassiz">[1840_Agassiz]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1856 - Eunice Newton Foote</h3>
      <p>Experimentálně prokázala, že válec naplněný oxidem uhličitým...
      <br><a href="/zdroje/#1856_Foote">[1856_Foote]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1862 - John Tyndall</h3>
      <p>Laboratorně potvrdil, že čistý vzduch je pro tepelné záření průhledný...
      <br><a href="/zdroje/#1862_Tyndall">[1862_Tyndall]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1864 - James Croll</h3>
      <p>Předložil teorii, že za střídáním dob ledových...
      <br><a href="/zdroje/#1864_Croll">[1864_Croll]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1884 - Samuel Pierpont Langley</h3>
      <p>Pomocí bolometru prováděl přesná měření slunečního záření...
      <br><a href="/zdroje/#1884_Langley">[1884_Langley]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1894 - Arvid Högbom</h3>
      <p>Zkoumal geochemický cyklus uhlíku...
      <br><a href="/zdroje/#1894_Hogbom">[1894_Hogbom]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1896 - Svante Arrhenius</h3>
      <p>Vytvořil první fyzikální model výpočtu vlivu CO2...
      <br><a href="/zdroje/#1896_Arrhenius">[1896_Arrhenius]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1938 - Guy Stewart Callendar</h3>
      <p>Jako amatérský meteorolog prokázal oteplování planety...
      <br><a href="/zdroje/#1938_Callendar">[1938_Callendar]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1941 - Milutin Milanković</h3>
      <p>Publikoval své celoživotní dílo <em>Kanon</em>...
      <br><a href="/zdroje/#1941_Milankovic">[1941_Milankovic]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1952 - Willard Libby</h3>
      <p>Vyvinul metodu radiouhlíkového datování (C14)...
      <br><a href="/zdroje/#1952_Libby">[1952_Libby]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1955 - Cesare Emiliani</h3>
      <p>Průkopník paleoklimatologie...
      <br><a href="/zdroje/#1955_Emiliani">[1955_Emiliani]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1956 - Gilbert N. Plass</h3>
      <p>S využitím prvních počítačů výrazně zpřesnil výpočty...
      <br><a href="/zdroje/#1956_Plass">[1956_Plass]</a></p>
    </div>
  </div>

  <div class="container">
    <div class="content-box veda">
      <h3>1961 - Walter Sullivan</h3>
      <p>Shrnul výsledky Mezinárodního geofyzikálního roku (IGY 1957–58)...
      <br><a href="/zdroje/#1961_Sullivan">[1961_Sullivan]</a></p>
    </div>
  </div>

</div>
