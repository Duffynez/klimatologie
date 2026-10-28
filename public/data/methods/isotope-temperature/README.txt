Izotopová paleotermometrie: laboratorní kalibrace Bemis a kol. (1998)

Původ dat
NOAA / WDS Paleoclimatology, příspěvek 98-003
https://doi.org/10.25921/0n13-nf40
https://www.ncei.noaa.gov/pub/data/paleo/paleocean/by_contributor/bemis1998/
Původní studie a rovnice 1: https://doi.org/10.1029/98PA00070
Veřejný plný text: https://epic.awi.de/id/eprint/265/1/Bem1998a.pdf

Staženo 28. října 2026. Původní příjem únor 1998, katalogové datum 14. listopadu 2003.
Pokusy probíhaly v letech 1994–1996. Živé organismy byly odebrány u ostrova
Santa Catalina v Kalifornii a dále pěstovány při řízených laboratorních podmínkách.
Původní soubor a readme jsou zachovány beze změny bytů, v kódování Latin-1.
Kontrolní součty SHA-256 uvádí provenance.json. Data jsou veřejně zpřístupněna
NOAA se žádostí citovat původní autory, studii a datový záznam.

Výběr
Z 135 datových řádků vybíráme všech 39 odpovídajících třem podmínkám:
Species = O. universa
Irradiance = LL (slabé osvětlení)
[CO32-] = 171 (koncentrace uhličitanových iontů, mikromoly na kilogram)
Zbývající řádky patří jinému druhu nebo jiným podmínkám. U vybraných měření
neprovádíme vyřazování, doplňování chybějících údajů ani vyhlazování.
Teploty lázně jsou 15, 17, 18, 19, 22, 24 a 25 °C.

Vstupní úroveň a výpočet
Sloupec dc-dw (VPDB) již obsahuje vypočtený izotopový rozdíl schránky a vody
v konvenci původní studie. Úprava vody o -0,27 promile už je zahrnuta.
Nesmí se přičítat podruhé. Nejde o surové elektrické signály spektrometru.
Dosazujeme D přímo do T = 16,5 - 4,80 * D, s D v promile a T ve °C.
Zveřejněné koeficienty znovu neodhadujeme.
Pro každou teplotu lázně spočítáme aritmetický průměr všech vybraných měření.
Při 19 °C má pět měření D hodnoty -0,49, -0,54, -0,55, -0,57 a -0,56 promile.
Průměr D = -0,542 promile, z něj T = 19,1016 °C, po zaokrouhlení 19,1 °C.
Vzorky byly součástí kalibrace. Odchylky od lázně NEJSOU nezávislým testem
ani úplným odhadem nejistoty paleoklimatické rekonstrukce.

Opakování
Uložte reproduce.py, provenance.json a oba původní soubory do jedné složky.
Spusťte Pythonem 3.10 nebo novějším:
python reproduce.py
Vytvoří se selected-results.csv a group-means.csv.
Pro vytvoření grafu potřebujete navíc matplotlib:
python reproduce.py --plot calibration-check.svg
Souřadnice bodů se neposouvají, při shodě se mohou překrývat.

Výstupní sloupce
selected-results.csv:
source_data_row = pořadí datového řádku původního souboru, první je 1
bath_temperature_C = známá teplota lázně
delta_difference_per_mille = zveřejněný rozdíl D
reconstructed_temperature_C = teplota vypočtená publikovanou rovnicí
residual_C = vypočtená teplota minus teplota lázně

group-means.csv:
bath_temperature_C = teplota lázně
n = počet vybraných měření
mean_delta_difference_per_mille = aritmetický průměr D
mean_reconstructed_temperature_C = výsledek převodu průměrného D na teplotu

Vlastní výpočet a graf: Klimatologie.eu, 28. října 2026.
