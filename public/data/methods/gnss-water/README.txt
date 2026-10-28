Skutečný příklad GNSS: GOPE, 1. července 2012 v 09:00 UTC

Data poskytlo NCAR Earth Observing Laboratory / UCAR.
NCAR Global, 2-hourly Ground-Based GPS Precipitable Water.
DOI: https://doi.org/10.5065/047C-HV45
Licence dat: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/
Metodika: Wang a kol. (2007), doi:10.1029/2006JD007529.
Dokumentace: https://osdata.gdex.ucar.edu/web/datasets/d721001/docs/readme.pdf
Přístup 28. října 2026. Původní soubor GOPE.2012 je přiložen beze změny.
CSV je náš výběr jednoho záznamu. provenance.json uvádí původ, výběr a SHA-256.

Uložte reproduce.py, gope-extract.csv, provenance.json a GOPE.2012 do stejné
složky. Spusťte python reproduce.py. Stačí standardní knihovna Pythonu 3.
Skript porovná výřez s původní staniční řadou a ověří její kontrolní součet.
Vypočítá mokré zpoždění a přibližný přepočet na srážitelnou vodu.

Pro nezávislé stažení původních dat otevřete archive_url z provenance.json.
Archiv má asi 54 MB. Rozbalte pouze soubor 2012/GOPE.2012 a porovnejte SHA-256.
Nejde o opakování zpracování rádiových měření. Začínáme veřejným produktem
s již odhadnutým zenitovým zpožděním, tlakem a váženou teplotou.

Sloupce originálu: den roku, hodina UTC, Ps [hPa], ZTD [mm], ZDD [mm],
ZWD [mm], Tm [K], PW [mm]. ZDD je hydrostatické zpoždění.
Rok 2012 byl přestupný, den 183 je 1. červenec.

Převod používá vztah Ning a kol. (2016), rovnice 26 a tabulka 4,
doi:10.5194/amt-9-79-2016. Zde je koeficient převrácen a konstanty
převedeny z hPa na Pa: k2'=0.221 K/Pa, k3=3739 K^2/Pa.
Hustota kapalné vody je 1000 kg/m^3, měrná plynová konstanta páry
461.5 J/(kg K). S těmito konstantami vyjde přibližně 22.966 mm.
Původní publikovaný výsledek je 22.98727 mm. Rozdíl asi 0.021 mm zachováváme,
netvrdíme totožnost původní implementace. Dokumentace neposkytuje všechny
její číselné volby. Na jednu desetinu oba výsledky dávají 23.0 mm.
Tolerance ve skriptu 0.05 mm kontroluje tento konkrétní přepočet,
není odhadem nejistoty měření ani nezávislým ověřením metody.
