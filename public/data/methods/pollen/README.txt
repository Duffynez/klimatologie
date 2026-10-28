Pylová analýza, reprodukce příkladu Klimatologie.eu

Zdroj: Andreev, A. A., Dietze, E., Herzschuh, U. (2020).
Pollen data of Lake El'gygytgyn sediments, core PG1351 (MIS 5e, 6, 7e, 8).
PANGAEA, https://doi.org/10.1594/PANGAEA.915749
Publikováno 29. 4. 2020, přístup 28. 10. 2026. Licence CC BY 4.0.
Původní soubor pg1351-original.tsv je nezměněný export včetně metadat.
Kontrolní otisk SHA-256 je v provenance.json.

Rozsah: všech 19 publikovaných vzorků je ve vstupu. Pro ukázku vybíráme
všech 11 řádků s MIS 5e nebo 6, tedy mladší souvislý úsek odběrů.
Procenta i modelové stáří jsou převzaté výsledky. Soubor neposkytuje
původní mikroskopické počty zrn. Rekonstrukci teploty neprovádíme.

Spuštění: python reproduce.py
Skript spouštějte s původním TSV ve stejné složce. Vytvoří selected-pollen.csv.
Pro vytvoření grafu spusťte python reproduce.py --plot
V tomto případě je potřeba Matplotlib. Graf vznikne jako elgygytgyn-pollen.svg.

Sloupce CSV:
sample_id = publikovaný identifikátor vzorku
mis = publikované označení klimatického období
age_ka_bp = tisíce let před rokem 1950 podle převzatého modelu
age_years_bp = tentýž údaj v letech
depth_m = hloubka v kompozitním jádře v metrech
birch_dwarf_pct = Betula sect. Nanae-type, procenta z publikované pylové sumy
alder_pct = Alnus, stejný základ
poaceae_pct = Poaceae, stejný základ
artemisia_pct = Artemisia, stejný základ
grasses_artemisia_pct = součet dvou předchozích podílů

Žádná další normalizace se neprovádí. Vybrané skupiny netvoří 100 % vzorku.
Nuly jsou skutečné hodnoty vstupu. Prázdný vstup by vyvolal chybu.
Graf obsahuje všech 11 vzorků, bez vyhlazení, v časovém pořadí.
Spojnice nejsou nová měření mezi odběry.

Fotografie v článku: Diana Carriker / USGS (2018), Pollen Under a Microscope.
https://www.usgs.gov/media/images/pollen-under-a-microscope
Public domain, původní fotografie beze změny.
Nejde o vzorek z PG1351. Schéma a graf vytvořila redakce Klimatologie.eu.
