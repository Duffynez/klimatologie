VYČÍSLENÍ A PŘENOS NEJISTOTY — PODKLADY PŘÍKLADU
Klimatologie.eu, 30. října 2026

Používáme HadCRUT.5.2.0.0, variantu analysis a globální roční anomálie
v °C vůči průměru let 1961–1990. Globální hodnota je průměrem anomálií
severní a jižní polokoule se stejnými vahami. Zdrojové soubory obsahují
roky 1850–2026. Rok 2026 při stažení není úplný. Příklad vybírá úplný
rok 2024 a pro doplňkovou kontrolu dvojice let 2023 a 2024.

SOUBORY
ensemble-original.csv: nezměněná roční data. Time označuje rok.
Fraction of area represented je podíl plochy reprezentované analýzou.
Coverage uncertainty (1 sigma) je dodatečná standardní nejistota pokrytí
v °C. Realization 1 až Realization 200 jsou anomálie jednotlivých realizací.
component-original.csv: nezměněné zveřejněné dílčí a celkové nejistoty.
summary-original.csv: nezměněný zveřejněný průměr a meze intervalu.
realizations.csv: vybraných 200 dvojic. realization je společné číslo
realizace, anomaly_2023_c a anomaly_2024_c jsou anomálie v °C,
difference_c je hodnota roku 2024 minus hodnota roku 2023.
results.json: vypočtené výsledky v plné přesnosti a porovnání s publikovanými.
provenance.json: verze, datum, původní adresy, SHA-256 a podmínky použití.
reproduce.py: opakovatelný výběr a výpočet, pouze standardní knihovna Pythonu.

OPAKOVÁNÍ
Stáhněte všech osm souborů do stejné složky. V Pythonu 3.10 nebo novějším
spusťte: python reproduce.py
Skript ověří SHA-256 původních souborů a shodu vypočtených výstupů
s uloženými realizations.csv a results.json.
Pro nové vytvoření těchto dvou výstupů: python reproduce.py --write
Výpočet nevyžaduje připojení k internetu ani další knihovny.

POSTUP A ROZSAH
1. Vybereme všech 200 realizací roku 2024 a spočteme aritmetický průměr.
2. Součet čtverců odchylek od tohoto průměru dělíme 199 a odmocníme.
   To je výběrová směrodatná odchylka, zde odhad standardní nejistoty.
   Hodnotu nedělíme odmocninou z 200. Realizace popisují přípustné výsledky
   stejné analýzy, nikoli 200 nezávislých fyzických měření.
3. Z téhož řádku převezmeme dodatečnou standardní nejistotu pokrytí.
   Metodika odhaduje tuto složku pomocí reanalýzy ERA5 z kvadratického
   průměru rozdílů mezi úplným a prostorově omezeným průměrem.
4. Obě standardní nejistoty kombinujeme odmocninou ze součtu jejich
   čtverců podle vztahu 28 přílohy Morice a kol. 2021. Tím přijímáme
   jejich nulovou korelaci v tomto souhrnném výpočtu.
5. Celkovou standardní nejistotu násobíme 1,96. Přičtení a odečtení
   od průměru dává přibližný 95% interval za normálního přiblížení.
6. Šest výsledných hodnot porovnáváme s component-original.csv
   a summary-original.csv s tolerancí 0,0000001 °C kvůli zaokrouhlení CSV.

Zde opakujeme souhrn již zpracovaných globálních realizací. Rekonstrukci
teplotních polí ani vyhodnocení vstupních pozorovacích nejistot neopakujeme.
Jejich popis je v původní studii a její veřejné metodické příloze.

DOPLŇKOVÉ POROVNÁNÍ DVOU LET
Zachováme párování hodnot 2023 a 2024 uvnitř každé realizace. Směrodatná
odchylka 200 rozdílů je 0,02092906576734216 °C. Shoduje se s přenosem
pomocí kovariance. Při předpokladu nezávislosti by vyšla
0,028753903021507064 °C. Korelace odchylek činí 0,47227937146098153.
Tato kontrola se týká pouze složky obsažené v realizacích. Dodatečnou
nejistotu pokrytí zde nepřenášíme a neurčujeme úplný interval změny.
Shoda kontroluje numerický postup při daných vstupních předpokladech.

ZDROJE A LICENCE
HadCRUT.5.2.0.0 data were obtained from https://www.metoffice.gov.uk/hadobs/hadcrut5 on 30 October 2026 and are © British Crown Copyright, Met Office 2026, provided under an Open Government Licence v3.0.
Podmínky poskytovatele:
https://www.metoffice.gov.uk/hadobs/hadcrut5/terms_and_conditions.html
Licence:
https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/

Morice, C. P. et al. (2021), An updated assessment of near-surface temperature change from 1850: the HadCRUT5 data set, JGR Atmospheres 126, e2019JD032361, DOI 10.1029/2019JD032361.
Veřejný přijatý rukopis:
https://www.metoffice.gov.uk/hadobs/hadcrut5/HadCRUT5_accepted.pdf
Metodická příloha, zejména vztahy 20, 24 a 28:
https://www.metoffice.gov.uk/hadobs/hadcrut5/HadCRUT5_supporting_information_accepted.pdf

PŮVODNÍ DATOVÉ ADRESY
ensemble-original.csv
https://www.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.2.0.0/analysis/diagnostics/HadCRUT.5.2.0.0.analysis.ensemble_series.global.annual.csv
SHA-256: 4f6621606034ad5cd881fc8fdc758830673e284d79e5b6c22f1810b1ecd22ecb

component-original.csv
https://www.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.2.0.0/analysis/diagnostics/HadCRUT.5.2.0.0.analysis.component_series.global.annual.csv
SHA-256: 7ac43b13107ddb1ec4b4e0d78cc93384e0474022032644d697491b2ada0f9be7

summary-original.csv
https://www.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.2.0.0/analysis/diagnostics/HadCRUT.5.2.0.0.analysis.summary_series.global.annual.csv
SHA-256: ef11ff5df760d5b80a80704379c055e0870e3a4d65aa1b840417ad514ead597c
