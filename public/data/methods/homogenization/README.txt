KONTROLA KVALITY A HOMOGENIZACE: RUZYNĚ

Zdroj: NOAA NCEI, GHCN-Monthly v4.0.1.20261029.
Přístup: 30. října 2026.
Stanice: EZM00011518, RUZYNE, 50,101° s. š., 14,260° v. d., 380,1 m.
Rozsah ukázky: leden 1961 až prosinec 2020.

Co ukázka dělá
Porovnává zveřejněné měsíční teploty QCU (po kontrole kvality, bez
homogenizačních úprav GHCN-M) a QCF (po homogenizaci). Vstupy jsou již
sestavené měsíční průměry. Nejde o jednotlivé odečty čidla. Původní
párový algoritmus NOAA zde znovu nespouštíme.

Původní soubory
EZM00011518.qcu-original.dat a EZM00011518.qcf-original.dat obsahují
všechny řádky této stanice vybrané beze změny bajtů z příslušných archivů.
Jejich původní pořadí i příznaky zůstaly zachovány. station-original.inv
obsahuje původní řádek inventáře. provenance.json uvádí adresy archivů,
přesné názvy vnitřních souborů, způsob výběru a SHA-256 archivů i výřezů.
Adresa s latest se průběžně mění. Pro opakování této verze použijte
přiložené výřezy a ověřte jejich kontrolní součty.

Výběr a výpočet
Každý řádek vstupu má 115 znaků. Prvních 11 je identifikátor, následuje
rok a TAVG. Dvanáct osmiznakových polí obsahuje hodnotu a příznak měření,
kvality a původu. Hodnotu -9999 chápeme jako chybějící. Ostatní hodnoty
jsou setiny stupně Celsia, proto je dělíme 100.

Pro výpočet rozdílu vyžadujeme přítomnost hodnoty v obou verzích a prázdný
příznak kvality v obou verzích. Rozdíl počítáme jako QCF minus QCU.
Výpočet probíhá nejprve v celočíselných setinách stupně, aby nevznikalo
numerické zaokrouhlení rozdílů. Mezeru nevyplňujeme. Prázdný příznak
znamená, že hodnota nebyla označena kontrolou, případně kontrolu nebylo
možné provést. Není samostatným potvrzením správnosti každého údaje.

CSV obsahuje všech 720 měsíců, původní příznaky, zahrnutí a rozdíl.
Vstupy se párují podle roku a měsíce. Použitelných párů je 719.
V březnu 2020 má QCU hodnotu 4,80 °C s příznakem W, QCF hodnotu
neobsahuje. Znak Q ve zveřejněném QCF zachováváme beze změny.
Jeho samostatný význam nepřiřazujeme, protože otevřené readme jej
v seznamu příznaků QCF nevysvětluje. Měsíc je vyloučen už kvůli
chybějící hodnotě a neprázdnému příznaku kvality.

Spuštění
Uložte reproduce.py, provenance.json a tři soubory s original v názvu
do stejné složky. Spusťte python reproduce.py. Stačí standardní knihovna
Pythonu 3, internetové spojení není potřeba. Skript vytvoří comparison.csv
a results.json a před výpočtem ověří kontrolní součty vstupů.

Graf
Horní panel ukazuje pouze lednové průměry z obou verzí, všech 60 lednů
1961–2020. Dolní panel ukazuje rozdíl QCF minus QCU ve všech měsících
se dvěma použitelnými údaji. Roční průměry se v grafu nepočítají.

Dokumentace
https://www.ncei.noaa.gov/pub/data/ghcn/v4/readme.txt
https://doi.org/10.1175/2008JCLI2263.1
https://doi.org/10.1175/JCLI-D-18-0094.1
