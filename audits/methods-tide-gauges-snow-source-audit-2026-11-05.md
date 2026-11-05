# Kontrola zdrojů metod: pobřežní vodočty a sněhová měření

Datum: 5. listopadu 2026. Sedmá a osmá metoda v katalogu.

Prověřeno **25 různých zdrojů**. Pobřežní měření hladiny a výšková reference používá 16 zdrojů, Měření výšky, hustoty a vodní hodnoty sněhu 10. Společným zdrojem je VIM. Kontrola zahrnula 42 požadavků na původní stránky, celé dokumenty, data a alternativní kopie. Úplná bibliografie, výsledky přenosů, velikosti, otisky a opora jednotlivých tvrzení jsou v [doprovodném JSON](methods-tide-gauges-snow-source-audit-2026-11-05.json).

## Nalezené a opravené problémy

- **Palmerův vodočet:** předchozí text popisoval provoz, který původní práce z roku 1831 ještě nedokládá. Autor na tištěné straně 210 uvádí první vyrobený přístroj a teprve plánované umístění u vjezdu do londýnských doků. Opraven tento význam i označení pisátka na tužku. Současný odkaz Wikimedia vrátil 429. Ověřena úplná původní digitalizace v Internet Archive a připojen odkaz otevírající začátek článku na straně 9 PDF. Přílohy zůstávají součástí téhož souboru.
- **Výsledek porovnání v Liverpoolu:** formulace „rozdíly do hodnoty 1,50 cm“ mohla vyznívat jako horní mez jednotlivých odchylek. Studie uvádí RMS rozdílů po opravě měřítka a vyřazení odlehlých hodnot nad 5 cm. Odstraněno zavádějící „do“, vysvětlení výpočtu i podmínek porovnání zůstává.
- **Rovnice WMO ve sněhovém článku:** rovnice 2.5 udává hustotu jako m/V. Rovnice 2.6 udává hmotnost nad jednotkou plochy a navazující text říká sečíst příspěvky odběrů. Náš zápis vodní hodnoty v metrech obsahuje další dělení hustotou vody. Opraveny citace a výslovně vysvětlen přechod z kg/m² na metry vody. Výpočet zůstává číselně správný.
- **Přímá cesta k datům:** karta sněhových dat PANGAEA nyní vede také rovnou na původní XLSX. DOI zůstává cestou k metadatům a licenci. U dat San Franciska tlačítka výslovně rozlišují MLLW a MSL a formát JSON.
- **Plná klasifikace sněhu:** původní IACS PDF se při stahování v klientovi nedokončilo, internetové otevření však zpřístupnilo všech 90 stran. Ověřena a přidána úplná oficiální alternativa UNESCO, včetně skutečně fungujícího prohlížeče svazku a stažení celého PDF. Původní IACS odkaz zůstává vedle ní.
- **Historický pramen o Churchovi:** vizuálně ověřena tištěná strana 520 v Nature z 1. ledna 1914. Zpráva pojednává o jednání 17. prosince 1913. Odkaz nově otevírá rovnou stranu 24 úplného PDF čísla.
- **Roky přístupu:** u čtyř průběžných dokumentací a metadat NOAA a u nedatované specifikace Pessl je rok 2026 nově výslovně označen jako přístup. Není vydáván za rok publikace.

## Skutečná data a výpočty

Obě původní odpovědi NOAA po 240 šestiminutových výškách i soubor referenčních úrovní byly znovu získány. Všechny tři soubory jsou bajtově shodné s uloženými originály a jejich SHA-256. Převod mezi MLLW a MSL má posun **0,951 m** u všech záznamů. Denní průměr je 0,9685166667 m vůči MLLW a 0,0175166667 m vůči MSL, po zaokrouhlení článku 0,969 a 0,018 m. Rozsah dne činí 2,331 m. Kontrola používá stejné měření ve dvou referencích, nikoli nezávislé přístroje.

Původní tabulka MOSAiC o 69 606 bajtech byla znovu stažena. Soubor je bajtově shodný se zveřejněnou kopií. Jeho SHA-256 je 7a5176220aadc436c0b11a007a3906dfd0018534223ccfa153e1ad3dabc8f0ba. Výpočet všech čtyř vybraných odběrů znovu dává **28,5 mm vodní hodnoty ve 12 cm sněhu** a průměrnou hustotu **237,5 kg/m³**. Původní vstupy, zvolený profil ani výsledný graf se neměnily.

## Samostatné obsahové a jazykové kontroly

Oba úplné články byly souvisle přečteny a význam tvrzení porovnán s původními dokumenty. Podstatné tabulky, vzorce, historické strany a původ fotografie byly navíc kontrolovány vizuálně. Metodické zprávy NOAA slouží dokumentaci skutečného přístroje, kalibrace, provozu a dat. Původní studie poskytují srovnání a klimatologickou aplikaci. Obrazové a licenční stránky nenahrazují vědecké důkazy.

Poté byly zvlášť přečteny opravené odstavce a jejich návaznost. Historický výklad nyní rozlišuje vyrobení a plánovanou instalaci. U sněhu je zřejmý původ převodu i význam jednotek. Souvislý výklad zůstává srozumitelný bez technických doplňků, obsahuje vysvětlené veličiny a český text nemá středníky. Data pod nadpisy obou článků jsou aktualizovaná.

## Technické ověření před nasazením

- Lint prošel bez nálezů.
- Strukturální audit nemá chybějící ani duplicitní ID či URL.
- Produkční sestavení exportovalo všech 95 stránek.
- Prošlo všech 115 obsahových a numerických testů.
- Oba články zkontrolovány v prohlížeči při šířkách 1280 a 390 px. Fotografie, grafy, tabulky i rozbalovací datové doplňky se zobrazují. Stránky vodorovně nepřesahují. Dvojpanelový sněhový graf má vlastní označený posuv.
- Ověřen přechod citace na správnou kartu a přesné cíle změněných tlačítek, včetně zobrazení na mobilu a nepřítomnosti archivních tlačítek u otevřených zdrojů.

## Meze přístupu

Některé původní DOI odmítají automatický klient, samostatné veřejné plné texty jsou ověřené. Pomalý přenos IACS byl odlišen od skutečně neexistujícího dokumentu a doplněn oficiální alternativou. Bezpečnostní varování, ověřovací formuláře ani předplatné nebyly obcházeny. Cizí PDF se do repozitáře nekopírovala.
