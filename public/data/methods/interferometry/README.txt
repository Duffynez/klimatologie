Jakobshavn, 4.–10. dubna 2017
============================

Původní data: Lei, Yang, Gardner, Alex, a Agram, Piyush (2021).
MEaSUREs ITS_LIVE Sentinel-1 Image-Pair Glacier and Ice Sheet Surface
Velocities: Version 2 (Greenland Sample Products), verze 2.0.
https://doi.org/10.5281/zenodo.5606118
Licence původních dat: CC BY 4.0.
https://creativecommons.org/licenses/by/4.0/

Výřez a výpočet připravila Klimatologie.eu 28. října 2026.
Vzorek je již zpracovaným výsledkem sledování obrazových útvarů.
Neobsahuje surový radarový signál ani interferometrickou fázi.

Rychlé opakování
----------------
Uložte reproduce.py, sample.csv a provenance.json do jedné složky.
Spusťte Python 3.10 nebo novější:

  python reproduce.py

Stačí standardní knihovna. Skript ověří kontrolní součet CSV a z původních
složek vx a vy vypočte velikost mapové rychlosti. Vydělí ji místním
měřítkovým faktorem a násobí intervalem mezi snímky. Čas převádí z dní
na roky o 365,25 dnech. Souřadnice i rychlosti se vztahují k mapě EPSG:3413.
Skript používá úplná čísla, článek zobrazuje zaokrouhlené hodnoty.

Ověření proti originálu
----------------------
Ze záznamu Zenodo stáhněte soubor
v2_ITS_LIVE_Sentinel_1_image_pair_product_samples.zip (294 117 491 bajtů).
Rozbalte soubor uvedený v provenance.json, klíč archive_member.
Nainstalujte netCDF4, numpy a pyproj, například do virtuálního prostředí:

  python -m pip install netCDF4 numpy pyproj
  python reproduce.py --netcdf CESTA_K_ROZBALENEMU_SOUBORU.nc

Skript ověří SHA-256 celého původního souboru. Neprovádí nové hledání
posunů, výběr snímků ani kalibraci. Znovu vybere nejbližší střed buňky
k poloze 69,124° N, 49,496° W a kontroluje její původní hodnoty a metadata.
Výběr je převzat z validační polohy ve studii Lei a kol. (2022), obr. 11–13,
nikoli z maxima rychlosti v mapě. Žádné prostorové průměrování neprovádíme.

Buňka má indexy x = 1632, y = 1634, počítané od nuly. Mřížka je po 120 m,
sledovaný výřez má podle metadat šířku 500 m a výšku 443 m v radarové
geometrii. Příznak interp_mask = 0 je přečten jako uložený bajt bez maskování,
protože tento historický soubor označuje nulu také jako _FillValue.

Místní měřítko se počítá pomocí pyproj.Proj('EPSG:3413').get_factors
v zeměpisné poloze vybrané buňky. Jde o lokální vodorovné měřítko na
referenčním elipsoidu. Neprovádíme převod na dráhu po skloněném povrchu.
Měřítko přes malý sledovaný posun pokládáme za konstantní.

Časové značky acquisition_img1 a acquisition_img2 jsou v UTC.
Odstup je 6,0004882846 dne. Atribut date_dt v původním souboru uvádí
zaokrouhlených 6 dní. Používáme plné časové značky, abychom výslovně
zachovali skutečný interval snímkování.

Odhad v_error je převzat od poskytovatele. Jeho časový převod nepředstavuje
nové úplné vyčíslení nejistoty ani nezávislé měření posunu. Nejistoty
rychlosti, geometrie a datových referencí popisuje hlavní článek a zdroj.

Kontrola provedena s Pythonem 3.14, netCDF4 1.7.5.1.post1, numpy 2.5.4 a pyproj 3.8.0.
Skutečně použité verze knihoven jsou také v provenance.json.

Metodika
--------
Lei, Y., Gardner, A. S., a Agram, P. (2022).
Processing methodology for the ITS_LIVE Sentinel-1 ice velocity products.
https://doi.org/10.5194/essd-14-5111-2022
https://essd.copernicus.org/articles/14/5111/2022/
