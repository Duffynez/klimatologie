# Kontrola zdrojů metod: konduktometrie a srážkoměry

Datum: 5. listopadu 2026. Pátá a šestá metoda v katalogu.

Prověřeno 39 různých zdrojů včetně dvou vyřazených z těchto metod. Po opravách je aktivních 37 zdrojů, 18 v Konduktometrii a 20 ve Srážkoměrech a disdrometrech. Společným zdrojem je VIM. První průchod zahrnoval 54 různých URL, následovalo ověření náhradních plných textů. Podrobná bibliografie, skutečné cíle přesměrování, velikosti, kontrolní součty a doklady k tvrzením jsou v [doprovodném JSON](methods-conductometry-precipitation-source-audit-2026-11-05.json).

## Co bylo opraveno

- **Zpráva NOAA EN551:** původní PDF přesměrovalo na stránku údržby s HTTP 200. Plný původní report je nově dostupný z oficiálního repozitáře NOAA. Doplněno rozlišení tištěné strany 13 a strany 23 v PDF. DOI a stabilní ID zůstávají.
- **Kalibrační příklad:** HTTPS adresa protokolu C3860 také vedla na údržbu. Originál lze získat přes FTP a jeho součet se shoduje s původními metadaty, běžný prohlížeč ale FTP nepodporuje. Aktivní příklad proto používá nový původní protokol SBE 4C C3679 z 16. ledna 2024 z veřejného archivu University of Maine. Má vlastní nové ID. Přepsána data, koeficienty, původ, mezivýsledky, tabulka a graf. Zůstává všech sedm původních řádků včetně nulového bodu, který se do výpočtu salinity nezařazuje.
- **Lewis 1980:** přenos z VLIZ se opakovaně přerušoval. Nalezena úplná kopie v autorizovaném přetisku UNESCO z roku 1981. Odkaz vede na trvalý záznam s celým prohlížečem svazku. Vizuálně ověřen článek na stranách 16–21 PDF, včetně výslovného povolení přetisku.
- **Rovnice úhrnu z kapek:** citovaná rovnice 6 Tokaye a spoluautorů počítá koncentraci N(D), nikoli přímo náš součet objemů. Zobrazený vztah je nyní výslovně vlastní geometrické odvození. Citace podporuje účinnou měřicí plochu v oddílu 5.
- **Váhy v OAP 2.0:** předchozí text odkazoval jen na kolísání v předchozích hodinách. Upřesněny odchylky přírůstků od společného průměru tří snímačů a obvyklé okno aktuální a dvou předchozích hodin.
- **Historický popis srážkoměru:** plný Hellmannův text z roku 1897 se nepodařilo ověřit. Konkrétní přiřazení bylo v metodě odstraněno. Plovák a sifon dokládá dostupný oddíl 6.2.4 příručky WMO. Historický vývoj doplňuje původní dokumentace NOAA z roku 2015 o pětiminutovém záznamu a opravě zpracování.
- **Bibliografie a tlačítka:** nedatovaný popis Geonoru má štítek „přístup 2026“. Katalog WMO, který může žádat ověření prohlížeče, je odlišen od úplného PDF svazku I. DWD je označeno jako katalog s neověřeným přístupem k plnému textu.

## Ověření příkladů

Nezávislé porovnání textu nového kalibračního PDF s CSV potvrdilo všech **42 čísel a šest koeficientů**. Výpočet vodivosti byl zopakován samostatně s desetinnou aritmetikou. Pro bod 15 °C vychází 4,270363372469723 S/m a praktická salinita 34,80490636171875. Existující numerické testy navíc porovnávají převod PSS-78 se šesti nezávisle zveřejněnými kontrolními výsledky TEOS-10.

Oba úplné roční soubory NOAA pro Blue Hill byly znovu získány. Jejich SHA-256 souhlasí s metadaty původního příkladu a zveřejněné řádky jsou přesné bajtové výřezy. Znovu ověřen deklarovaný výběr první vyhovující letní hodiny: 7. června 2025, 14–15 hodin místního standardního času. Součet 12 intervalů je **9,2 mm**, shodný s hodinovým polem P_CALC. Nejvyšší pětiminutová intenzita je **31,2 mm/h**.

## Samostatné redakční kontroly

Věcná kontrola porovnala tvrzení, rovnice, číselné rozsahy a podmínky zkoušek s původními dokumenty. Údržba nebo ověřovací stránka nebyla považována za plný text jen kvůli HTTP 200. Studie porovnávající přístroje zůstávají odlišeny od technických parametrů výrobce. Kalibrační body a společné reference nejsou vydávány za nezávislé ověření.

Kontrola čtivosti proběhla zvlášť nad oběma úplnými články. Opravené odstavce vysvětlují převody a vlastní odvození bez neověřeného historického přiřazení. Český text neobsahuje středníky. Obě metody mají aktualizované datum.

## Technická kontrola

- Lint prošel bez nálezů.
- Audit katalogu nemá chybějící ani duplicitní ID či URL.
- Produkční sestavení exportovalo všech 95 stránek.
- Prošlo všech 115 testů vykresleného HTML a výpočtů.
- Oba články zkontrolovány v prohlížeči při šířkách 1280 a 390 px. Grafy, fotografie, tabulky a rozbalovací doplňky se zobrazují. Stránky nepřesahují vodorovně, širší kalibrační tabulka má vlastní posuv. Citace na WMO a nový protokol vedou na správné karty zdrojů.

## Meze kontroly

Plný historický text DWD se nepodařilo získat, ověřovací formulář ani varování certifikátu nebyly obcházeny. V této metodě už není podkladem tvrzení. Stabilní katalogový záznam zůstává kvůli citacím v jiných článcích s výslovnou poznámkou o neověřeném plném textu. Původní C3860 zůstává v katalogu jako protokol přístupný prostřednictvím FTP klienta. Nový příklad má funkční HTTPS cestu.

PDF cizích vydavatelů se nepřidávala do repozitáře. Odkazy využívají původní institucionální nebo autorizované veřejné kopie.
