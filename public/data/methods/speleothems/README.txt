Krápníky a jeskynní sedimenty – skutečný příklad Bu4
Klimatologie.eu, 28. října 2026

PŮVOD
Fohlmeister a kol. (2012), Bunker Cave stalagmites: an archive for central
European Holocene climate variability. Climate of the Past 8, 1751–1764.
https://doi.org/10.5194/cp-8-1751-2012
Plný text: https://cp.copernicus.org/articles/8/1751/2012/cp-8-1751-2012.pdf

Data NOAA NCEI, studie 20589, DOI 10.25921/s829-3m55.
https://www.ncei.noaa.gov/access/paleo-search/study/20589
Soubor bunker2012bu4-noaa.txt, verze 20. března 2025, stažen 28. října 2026.
Přesná původní adresa a SHA-256 jsou v provenance.json.
Původní soubor je zachován beze změny jako bu4-original.txt.
Při dalším použití citujte autory, studii, datovou sadu a datum přístupu.

ROZSAH
Začínáme již kalibrovanými měřeními a publikovaným modelem stáří.
Nereprodukujeme laboratorní signály, uranové datování ani iscam.
Klimatický výklad se opírá o původní studii a zde se nově nekalibruje.
SISALv3 obsahuje i pozdější verze jeskynních záznamů. Pro opakování tohoto
příkladu se používá právě zde archivovaný soubor k publikaci z roku 2012.

ZPRACOVÁNÍ
Vstup má 1 008 řádků se stářím age_calBP, vzdáleností od vrcholu depth_mm
a izotopovým složením d18OcarbVPDB. cal BP jsou kalendářní roky před 1950,
záporné stáří znamená dobu po 1950. Delta kyslíku je v promile vůči VPDB.
Uhlík a Mg/Ca se v tomto výpočtu nepoužívají. Pozor: původní sloupec
100*Mg/Ca není v mmol/mol. Jde o stonásobek molárního poměru.

Zachováváme pořadí vzorků podle vzdálenosti od vrcholu, všechny hodnoty
mají stejnou váhu. Pro každý úplný úsek 21 po sobě jdoucích vzorků
počítáme aritmetický průměr δ18O. Výsledek přiřadíme prostřednímu vzorku.
V prvních a posledních deseti řádcích průměr chybí, celkem je 988 průměrů.
Žádné doplnění chybějících okrajů, převzorkování nebo odstranění trendu.
Délka okna vychází z obrázku 4c studie. Náš kód je vlastní implementace,
nikoli původní kód autorů. Časový rozsah 21 vzorků se podél řezu mění.

VYBRANÝ PŘÍKLAD
Z úplných oken vybíráme to, jehož prostřední stáří je nejblíže 500 cal BP.
Střed je 39. datový řádek, 7,6 mm, 496,9 cal BP, δ18O = −4,95 promile.
Okno obsahuje řádky 29 až 49, hloubky 5,6–9,6 mm a stáří 351–642,7 cal BP.
Součet 21 hodnot je −105,97 promile a průměr −5,046190476190477 promile.
Rozsah okna podle modelu je 291,7 roku. Vyšší počet desetinných míst
slouží k opakování výpočtu, nevyjadřuje přesnost datování nebo klimatu.

OPAKOVÁNÍ
Uložte bu4-original.txt, provenance.json, reproduce.py, bu4-processed.csv,
example-window.csv a calculation.json do jedné složky.
Potom spusťte Python 3 bez dodatečných balíčků:

  python reproduce.py

Skript ověří SHA-256 originálu, provede výpočet a porovná výstupy.
Pro nové vytvoření odvozených CSV a JSON:

  python reproduce.py --write

bu4-processed.csv obsahuje celou řadu a průměry. example-window.csv
obsahuje všech 21 hodnot příkladu. calculation.json uchovává výsledky.
Počítá se bez mezilehlého zaokrouhlení, CSV uvádí průměry na 10 desetinných
míst. Graf ukazuje jen mladší část záznamu. Pro jeho vytvoření je potřeba
Matplotlib a soubory reproduce.py i plot.py ve stejné složce:

  python plot.py bu4-record.svg

OBRÁZKY
bunker-samples.png je nezměněný vložený rastrový obrázek 1 z PDF
Fohlmeister a kol. (2012). Licence CC BY 3.0, uvedení autorů povinné.
Mapa a fotografie jsou ponechány společně, bez změny jejich obsahu.
record-path.svg je vlastní vysvětlující schéma.
bu4-record.svg je vlastní graf veřejných měření a zde popsaného výpočtu.
