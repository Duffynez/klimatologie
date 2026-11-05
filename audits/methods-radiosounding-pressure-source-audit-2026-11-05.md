# Zdroje radiosondáže a měření tlaku

Kontrola **5. listopadu 2026**. Rozsah: třetí a čtvrtá metoda v katalogu, **Radiosondáž** a **Měření tlaku a hydrostatické výšky**. Posouzena opora tvrzení, přiměřenost pramenů, bibliografie a skutečný obsah odkazovaných stránek či souborů. Tento protokol zachycuje stav před nasazením.

Dvojice nyní používá **23 různých zdrojů**, 14 v radiosondáži a 13 u tlaku. Včetně nahrazeného protokolu bylo prověřeno 24 pramenů. Zveřejněná ID nebyla přejmenována ani odstraněna.

## Co bylo špatně a co se změnilo

| Místo | Zjištění a oprava |
| --- | --- |
| Vlhkostní čidlo radiosondy | Citace uváděla oddíl 2.1.2 dokumentace GRUAN, který popisuje připojování dalších snímačů. Opravena na skutečný oddíl 2.1.3.2. U tlakového čidla doplněno přesné číslo 2.1.3.3. |
| Porovnání sond | U výsledků Jensena a kol. doplněn oddíl 4.1 a obrázek 8. Kapitola 6 GRUAN doplněna k původnímu odkazu na přílohu D.3, která se zabývá pouze nejistotou tlaku odvozeného z výšky. |
| Strany manuálu Sea-Bird | Odkaz na stranu 46 nedokládal převod psi na dbar ani odečtení referenční atmosféry. Oba postupy jsou na straně 32. Opraveny i odkazy k vnitřnímu teploměru a kalibraci na s. 37 a 44, respektive 31–32 a 44. |
| Kalibrace P1207 z roku 2022 | Webový odkaz místo PDF vrací stránku údržby NOAA AOML. Běžný prohlížeč potvrdil stejné přesměrování. Veřejné FTP NOAA stále poskytuje originál, jeho SHA-256 přesně souhlasí s původními metadaty. FTP však vyžaduje samostatného klienta a není vhodnou jedinou cestou pro čtenáře. |
| Náhrada příkladu tlaku | Použit jiný původní protokol stejného typu přístroje, SBE 9plus 0954 z 9. února 2024, tlakové čidlo 114729. Úplné PDF je přímo dostupné v archivu University of Maine, Tara Europa. Nový zdroj dostal vlastní ID. Přepsáno všech 11 řádků a přepočítána tabulka, graf, ukázkový řádek i ilustrační převod na hloubku. |
| Původní zdroj v katalogu | ID P1207 zůstává zachováno. Karta výslovně označuje údržbu webu a veřejný odkaz přes FTP vyžadující FTP klienta. Nejde o kopii ani alternativní adresu nového protokolu P0954. |
| Nedatované podklady | U stránky licenčních podmínek ČHMÚ a popisu technologie Paroscientific doplněn štítek „přístup 2026“. Rok přístupu se již netváří jako rok vydání. Datum vytvoření PDF Paroscientific v metadatech samo za datum publikace nepovažujeme. |
| Přesnější cíle odkazů | Odkaz ATOMIC míří přímo na kotvu fotogalerie. U otevřené kopie práce Freeové a kol. odstraněna stará přesměrovaná část cesty wp_arl. Původní přesměrování fungovalo, nešlo o nefunkční plný text. |

## Věcná kontrola

Institucionální zdroje zde většinou dokumentují vlastní měřicí postup, přístroj nebo zveřejněná data. Pro tuto úlohu jsou přiměřené. Konkrétní výsledky porovnání přístrojů a klimatologického zpracování jsou doloženy původními pracemi. Web NWS slouží základnímu popisu provozu, galerie NOAA původu fotografií a stránky licencí podmínkám použití.

- **GRUAN:** úplná verze 1.0.0 z 28. června 2023 má 206 stran. Potvrzuje čidla RS41-SGP, ohřev vlhkoměru, pozemní kontroly, radiační korekci, opravu odezvy, odlišné určení větru u výrobce a GRUAN a hydrostatický výpočet tlaku. Strany 23–24 odpovídají výkladu o výšce a navigaci. Produkt RS41-GDP.1 zahrnuje výstup.
- **Vaisala:** úplný dokument z roku 2017 má 28 stran. Tabulky 2.1 a 3.1 potvrzují teplotní rozsah −90 až +60 °C, rozlišení 0,01 °C, hodnoty 0,3 a 0,4 °C za uvedených podmínek a vlhkostní parametry 0–100 % RH, 0,1 bodu a čtyři body při −60 až +60 °C.
- **Jensen a kol. 2016:** původní otevřená práce potvrzuje 20 společných letů 3.–8. června 2014 v Oklahomě. Pod 28 km velikost mediánu teplotního rozdílu nepřesahuje 0,13 °C a přes 90 % vlhkostních údajů se liší do dvou procentních bodů. Zachován rozsah kampaně i vysvětlení ochlazování navlhlého čidla.
- **Freeová a kol. 2005:** úplná práce o RATPAC potvrzuje 85 stanic, třináct tlakových hladin a použití homogenizovaných dat do roku 2004. IGRA výslovně rozlišuje kontrolu kvality a odstranění nehomogenit. Rok 2021 u jeho portálu je doložen datem publikace v metadatech a nebyl měněn.
- **Historické prameny:** Diamond, Hinman a Dunmore 1938 dokládají původní přístroj, kalibraci a letový záznam. Périerův dopis z 22. září 1648 přímo popisuje pokus na Puy-de-Dôme 19. září, kontrolní přístroj dole a opakování po návratu. Odkaz vede na úplný přepis konkrétní edice s návazností na sken.
- **Sea-Bird a Paroscientific:** technická dokumentace potvrzuje olejový přívod, křemenný rezonátor, převod signálu, kalibraci, 24 měření za sekundu a specifikace konkrétního provedení. Hlubokomořská varianta pro 10 500 m je odlišena od snímače rozsahu 10 000 psia.
- **TEOS-10:** skutečná dokumentace verze 3.06.13 z 29. července 2021 i čtyřstránková metodická příloha fungují. Potvrzují referenci 10,1325 dbar, význam zeměpisné šířky, záporné z v oceánu a volitelné vstupy.
- **USGS 2004 a 2013:** úplné zprávy potvrzují hydrostatický princip, rozdíl referencí, barometrickou kompenzaci a kontroly. Nezávislá zkouška tří Level TROLL 100 dokládá čtyři výsledky +0,040 psi těsně nad mezí ±0,039 psi v kompenzovaném rozsahu 0–50 °C. Tyto výsledky nejsou přeneseny na SBE 9plus.
- **Barker a kol. 2011:** původní studie dokládá tlakové posuny historických plováků Argo, dopad oprav a omezení způsobené ořezáním záporných odchylek. **Dickson a kol. 2007:** úplná příručka dokládá použití tlaku při lokalizaci vzorku a chemických přepočtech.

## Původní data a přepočty

**Radiosondáž:** znovu stažen celý měsíční ZIP ČHMÚ, 9 521 852 bajtů. Kontrolní součet archivu i vybraného členu souhlasí s původními metadaty. Soubor 25010112_Praha_ascent_111510.csv o 358 884 bajtech je po bajtech totožný s verzí na webu, včetně konců řádků. Skript potvrdil 5 059 záznamů, dobu 5 254 sekund a výsledky −27,8 °C, 4 137,8 gpm a **−6,718546… °C na geopotenciální kilometr**. Správná čísla zůstala zachována.

**Tlak:** nové PDF má jednu stranu a 35 839 bajtů. Všech **66 čísel** původní tabulky bylo nezávisle porovnáno s CSV a stránka prohlédnuta vizuálně. Největší absolutní rozdíl klesl z **0,847366004 na 0,237179744 dbar**. Desátý řádek má rozdíl −0,344 psi, tedy −0,237179744 dbar. Velikost odpovídajícího rozdílu hloubek pro hustotu 1 000 kg/m³ a g = 9,80665 m/s² je **0,241856… m**. Záporné znaménko odečtu je odlišeno od velikosti tohoto ilustračního převodu. Zmenšení největší odchylky neznamená zlepšení každého bodu, což text nyní říká výslovně.

## Dostupnost

Doprovodný JSON zachovává **40 síťových kontrol** se skutečnými výslednými adresami, formáty, velikostmi a kontrolními součty. Staženo a otevřeno 15 různých úplných PDF přes HTTPS, celkem 122 149 265 bajtů, dále celý ZIP ČHMÚ a oba originály fotografií. Samostatně získán původní protokol P1207 přes FTP, 40 518 bajtů. Cizí PDF ani fotografie nejsou nově kopírovány do repozitáře.

Automatické otevření DOI Freeové a kol. vrátilo 403, jeho veřejná úplná kopie NOAA ARL však funguje. Vyhledávací klient u TEOS-10 jednou zobrazil ověřovací stránku, přímé stažení i běžný prohlížeč poskytly skutečný obsah. Tyto rozdíly nejsou označeny za výpadek plného textu.

V používaných zdrojích obou článků nezůstala nevyřešená chyba dostupnosti nebo doložení tvrzení. Vnější údržba původního webového protokolu NOAA trvá a je pravdivě označena, článek už na ní nezávisí. Nebyl nově přepočítáván celý archiv RATPAC či Argo.

## Oddělená redakční a technická kontrola

Věcná kontrola porovnala tvrzení a odkazy s původními dokumenty. Samostatná kontrola čtivosti prošla změněné odstavce v kontextu, označení institucí, zápornou odchylku a absolutní velikost převodu. Český text neobsahuje středníky. Výklad metody a jeho podstatná omezení zůstaly zachovány.

- ESLint prošel.
- Strukturální audit prošel, 61 článkových souborů, žádná chybějící ID ani duplicity.
- Produkční sestavení prošlo, 95 předvykreslených adres.
- Všech 114 testů prošlo, včetně přepočtů příkladů a odmítnutí poškozených dat.
- V běžném prohlížeči ověřeny oba články při šířce 1 280 a 390 px, všechny čtyři fotografie či grafy a všech 23 citovaných karet. Stránky nepřetékají vodorovně. Kliknutí na citaci nového protokolu vede na správnou kartu a veřejné PDF se otevře na uvedené adrese.
- Kontrola proběhla v izolovaném pracovním stromu. Změny jiných rozpracovaných článků nejsou součástí opravy.
