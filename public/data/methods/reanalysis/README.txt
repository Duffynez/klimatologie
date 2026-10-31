20CRv3: tlak poblíž New Yorku, 10.–15. března 1888

Zdroj: NOAA Physical Sciences Laboratory, NOAA-CIRES-DOE 20CRv3si.
Přístup 31. října 2026. Bod 41° s. š., 74° z. d. Pravidelná výstupní síť 1°.
Proměnná prmsl je tlak přepočtený na hladinu moře v Pa.
mean-original.txt a spread-original.txt jsou nezměněné odpovědi serveru pro
48 okamžiků po třech hodinách. Druhý soubor obsahuje směrodatnou odchylku
80 realizací, nikoli standardní chybu jejich průměru.
Přesné dotazy, indexy, jednotky, metadata a SHA-256 obsahuje provenance.json.
Vrácená šířka je +41°. Pořadí skutečných souřadnic se ověřuje ve skriptu.

Zopakování v Pythonu 3.10 nebo novějším, bez dodatečných knihoven:
  python reproduce.py
Obnovení pressure.csv a results.json z původních odpovědí:
  python reproduce.py --write
Všechny soubory ponechte ve stejné složce.

Přepočet: 1 hPa = 100 Pa. Denní údaj je aritmetický průměr osmi hodnot
00, 03, 06, 09, 12, 15, 18 a 21 UTC dne 13. března. Minimum se hledá mezi
48 hodnotami pro tento jediný bod. Nejde o minimum v centru celé bouře.
Příklad začíná u zveřejněných výstupů reanalýzy. Neopakuje asimilaci ani
výpočet rozptylu z jednotlivých realizací. Polední rozptyl nepřevádí na
nejistotu denního průměru, k tomu by byla potřebná časová závislost chyb.
Položka illustrative_update v results.json je oddělená učební ilustrace
s vytvořenými vstupy. Není převzata z NOAA a nereprodukuje skutečný krok 20CR.

Graf je vlastní zpracování Klimatologie.eu. Čára zobrazuje zveřejněný průměr
80 realizací, pásmo jednu zveřejněnou směrodatnou odchylku na každou stranu.
Pásmo není 95% interval ani úplný rozpočet nejistoty.

Data provided by the NOAA Physical Sciences Laboratory, Boulder, Colorado,
USA, from their website at https://psl.noaa.gov/.
Podmínky: https://www.psl.noaa.gov/disclaimer/ (public domain, uvedení zdroje).
Metodika: DOI 10.1002/qj.3598 a 10.1175/JCLI-D-20-0505.1.
