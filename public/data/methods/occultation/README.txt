Rádiové zákryty GNSS: poslední krok suchého výpočtu

Data: UCAR COSMIC Program, 2019, COSMIC-2 Data Products.
DOI: https://doi.org/10.5065/T353-C093
Veřejný portál: https://www.cosmic.ucar.edu/what-we-do/cosmic-2/data
Přístup: 28. října 2026.

Výřez obsahuje tři skutečné body profilu z denního archivu 2024/001.
Původní soubor má 723448 bajtů, denní archiv přibližně 2 GB.
Název události a časové atributy začátku záznamu nejsou totožné.
Zachováváme obojí v provenance.json, časové atributy nepřeznačujeme.
Vybrané souřadnice odpovídají jednotlivým výškám, nikoli pouze
jedné referenční poloze celého zákrytu. Neproběhla interpolace.

1. Stáhněte profile-extract.csv, provenance.json a reproduce.py do jedné složky.
2. Spusťte python reproduce.py. Stačí standardní Python 3.
3. Pro kontrolu původu stáhněte do stejné složky download-profile.py.
   Spusťte python download-profile.py. Skript čte archiv postupně
   a po nalezení jediného profilu spojení uzavře. Ve verzi ověřené
   28. října 2026 je vybraný profil prvním členem archivu.
4. Při instalovaném balíčku netCDF4 lze spustit:
   python reproduce.py --profile atmPrf_C2E1.2024.001.00.01.G11_0001.0001_nc
   Tato volba kontroluje SHA-256 i přesnou shodu všech vybraných hodnot.

MSL_alt: nadmořská výška v km. Ref: bezrozměrná refraktivita.
Pres: suchý tlak v mb, číselně shodný s hPa. Temp: suchá teplota v °C.
Lat, Lon: zeměpisná šířka a délka nejnižšího bodu paprsku ve stupních.
Záporná šířka znamená jižní polokouli. Indexy začínají nulou.
N = (n-1) * 10^6. Td = 77.6 * Pres / Ref v kelvinech.
Teplota ve °C = Td - 273.15. Zdroj vztahu: Kursinski a kol. (1997),
https://doi.org/10.1029/97JD01569, rovnice 7-9.

Příklad začíná u zpracovaného produktu atmPrf, neopakuje celý
výpočet z rádiového signálu. Srovnáváme s Temp ze stejného produktu.
Jde o kontrolu přepočtu, nikoli nezávislé ověření skutečné teploty.
Malý rozdíl do 0.00002 K vzniká uložením proměnných jako float32.
Počet uvedených desetinných míst nevyjadřuje nejistotu měření.
