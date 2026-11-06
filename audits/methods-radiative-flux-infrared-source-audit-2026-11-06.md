# Audit zdrojů měření radiačních toků a pasivní infračervené radiometrie

6. listopadu 2026. Metody 21 a 22 v pořadí katalogu.

## Opravy

- Převod směrového měření CERES na tok je doložen původní metodickou prací Su a kolegů. Oddíl 2 a rovnice 1–2 spojují měření z různých úhlů s odhadem odchozího toku podle typu povrchu a podmínek oblačnosti. Karta nabízí vydavatelské PDF.
- Odkaz na Ångströma při otevření v prohlížeči vrátil chybu 504. Nyní vede přímo na stranu 332 ve skenu svazku z knihovny University of Toronto. Celý svazek lze stáhnout jako PDF z Internet Archive.
- U TIRS jsou údaje o pásmu a detektorech navázány na původní práci Montanara a kolegů. Převod na jasovou teplotu je v oddílu 5.3 příručky Landsatu 8. Infračervený vstup, časovou interpolaci a spojení se srážkoměry popisují oddíly 3.6–3.8 dokumentace IMERG V07.
- Karta tepelného výřezu má přímý odkaz na GeoTIFF s deseti vrstvami a JSON s výběrem výřezu, měřítky, adresami původních pásem a kontrolními otisky. Samostatná karta scény vede na STAC a optický výřez. Plné texty Plancka a Zoua s Qianem mají přímé odkazy na PDF Univerzity v Augsburgu a NOAA.

## Kontrola příkladů

- Původní denní soubor Table Mountain obsahuje 1 440 minutových záznamů a bajtově souhlasí s kopií u článku. Pro interval 18:00–19:00 UTC se použilo 60 záznamů s časem konce intervalu a nulovými příznaky kvality. Přepočet dal 658,0362 W/m² a 2,36893 MJ/m². Největší rozdíl od minutové bilance NOAA činí 0,154 W/m². Oba výpočty používají stejná měření.
- Všech deset pásem Landsatu se podařilo znovu načíst z distribuce Planetary Computer a porovnat s publikovaným výřezem. Hodnoty všech buněk, poloha mřížky a souřadnicový systém souhlasí. Pro bod C vychází jasová teplota 300,889 K, odhad teploty povrchu 308,212 K a hodnota produktu USGS 308,095 K. Rozdíl 0,116 K kontroluje výpočet ze sdílených vstupů.
- Fotografie sledovače Table Mountain a testu TIRS bajtově souhlasí se soubory NOAA a NASA.

## Dostupnost

Prokliknuto všech 30 původních karet. Výsledný soubor citací obsahuje 12 karet u radiačních toků a 19 u infračervené radiometrie. Evidenci dokládaných tvrzení a veřejných cest uvádí doprovodný JSON. U několika DOI omezil vydavatel automatické čtení. Karty k těmto studiím nabízejí ověřený úplný text v repozitáři, u vydavatele nebo v univerzitní kopii.

Prošel lint, strukturální kontrola citací, produkční sestavení 97 adres a všech 126 testů.
