Plošný průměr šestnácti buněk CRUTEM5 za leden 2024

Zdroj: CRUTEM.5.2.0.0, CRU / University of East Anglia a Met Office Hadley Centre.
https://www.metoffice.gov.uk/hadobs/crutem5/data/CRUTEM.5.2.0.0/download.html
Metodika: Osborn a kol. (2021), https://doi.org/10.1029/2019JD032352

Soubor crutem5-anomalies-original.nc je nezměněná kopie veřejného souboru
CRUTEM.5.2.0.0.anomalies.nc staženého 30. října 2026. Metadata uvádějí
sestavení 22. října 2026. Obsahuje leden 1850 až září 2026.
Původní URL a kontrolní otisky SHA-256 obsahuje provenance.json.

Výběr: leden 2024, 45–65° s. š., 5–25° v. d., standardní mřížka 5° × 5°.
Proměnná tas obsahuje již zpracované anomálie teploty vzduchu nad pevninou
vůči průměrům příslušných kalendářních měsíců 1961–1990. U rozdílu teplot
se číselná hodnota v kelvinech rovná hodnotě ve stupních Celsia.
Všech 16 buněk má údaj. Výběr nebyl podmíněn znaménkem ani velikostí anomálie.
Jde o výukový územní výběr, nikoli o oficiální průměr Evropy.

Používáme plochu celé buňky, včetně pobřežních buněk. Nevážíme podílem souše,
nepřidáváme teplotu moře a neprovádíme interpolaci. Mapa tedy představuje
pevninské anomálie CRUTEM5, nikoli společnou teplotu vzduchu a vody.
Příklad reprodukuje pouze plošné průměrování veřejných mřížkových vstupů.
Nevytváří znovu staniční měsíční průměry, referenční hodnoty ani mřížku.

Opakování průměru:
1. Uložte cells.csv, results.json, provenance.json a reproduce.py do jedné složky.
2. Spusťte: python reproduce.py
Další knihovny ani připojení nejsou potřeba. Skript ověří otisk tabulky,
plošný průměr, obyčejný průměr a shodu kosinových vah s plochami na kouli.
Zobrazená desetinná místa vyjadřují přesnost výpočtu, nikoli nejistotu dat.

Opakování výběru původních dat:
1. Přidejte crutem5-anomalies-original.nc a extract.py do stejné složky.
2. Nainstalujte knihovnu: python -m pip install netCDF4
3. Spusťte: python extract.py
Skript zkontroluje originál, vybere měsíc a hranice, odmítne chybějící
hodnoty a znovu vytvoří cells.csv s ověřeným shodným otiskem.

Průměr vážený plochou: +1,3516312044766368 °C.
Průměr se stejnou vahou buněk: +1,1643169422864454 °C.
Rozdíl: +0,18731426219019132 °C.

Licence dat: Open Government Licence v3.0.
https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/
Contains public sector information licensed under the Open Government Licence v3.0.
CRUTEM5: Climatic Research Unit, University of East Anglia, and Met Office Hadley Centre.
Výběr, výpočet a graf: Klimatologie.eu, 30. října 2026.
