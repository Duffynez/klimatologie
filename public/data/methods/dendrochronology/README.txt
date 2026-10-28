Dendrochronologie: porovnání dvou skutečných záznamů

Zdroj: Briffa, K. R., Melvin, T. M., Osborn, T. J., Hantemirov, R. M., Kirdyanov,
A. V., Mazepa, V. S., Shiyatov, S. G. a Esper, J. (2013). Reassessing the evidence
for tree-growth and inferred temperature change during the Common Era in Yamalia,
northwest Siberia. Quaternary Science Reviews 72, 83–107.
DOI: https://doi.org/10.1016/j.quascirev.2013.04.008
Doplněk a data: https://crudata.uea.ac.uk/cru/papers/briffa2013qsr/
Verze archivu: 9. března 2016. Přístup: 28. října 2026.

Soubor yad.raw je nezměněný člen raw-2016-03-09/yam/yad.raw původního ZIPu.
Datování přebíráme od původních badatelů. Šířky jsou v tisícinách milimetru,
koncový kód -9999 není měření. Soubor obsahuje celý datový soubor lokality YAD.
Popis stanoviště a sestavení dat: doplněk SM2, tabulky YT1 a YT2.
Článek vybírá první dva záznamy, YAD011 a YAD021, a pevné období 1950–1989.
CSV obsahuje také 1949 a 1990 pro porovnání posunuté o rok. Výběr nebyl
proveden hledáním dvojice s nejvyšší korelací. Každé porovnání má 40 dvojic.

Pro zopakování uložte všech pět datových souborů do stejné složky:
  python reproduce.py
Volitelná kontrola také proti staženému původnímu archivu:
  python reproduce.py --archive raw-2016-03-09.zip
Skript potřebuje jen standardní knihovnu Pythonu. Nic nestahuje.

Provádíme Pearsonovu korelaci původních šířek bez detrendingu a standardizace.
Neopakujeme COFECHA ani celý postup datování a neodhadujeme teplotu.
Korelace není procentem shodných letokruhů ani pravděpodobností správného data.

Původní studie je otevřená pod licencí CC BY, data tvoří veřejný doplněk.
Při využití původních měření zachovejte úplnou citaci autorů a uvedení verze.
Výběr, vlastní skript a graf: Klimatologie.eu, CC BY 4.0.
