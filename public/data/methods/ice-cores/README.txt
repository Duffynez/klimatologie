Dvě měření CO2 ze vzduchu v ledu Law Dome

Zdroj: Rubino, Mauro a kol. (2019): Law Dome Ice Core 2000-Year CO2, CH4, N2O and d13C-CO2. v3. CSIRO.
https://doi.org/10.25919/5bfe29ff807fb
Metodika: Rubino a kol. (2019), Earth System Science Data 11, 473–492.
https://doi.org/10.5194/essd-11-473-2019
Licence dat: CC BY 4.0, https://creativecommons.org/licenses/by/4.0/
Původní XLSX je převzat beze změny. CSV je náš výběr se zaokrouhlením podle provenance.json.

Verze kolekce 3, zveřejněná 4. září 2024. Datová verze 1.
List ReadMe uvádí poslední úpravu dat 11/2018. Staženo 28. října 2026.
Výběr: CO2byCore, řádky 2 a 5, identifikátory DE08 200 a DE08 205.
Sloupce Ice Age a CO2 Age jsou letopočty našeho letopočtu. Desetinná místa nejsou údaj o přesnosti datování.
Koncentrace již obsahují kalibraci (WMO X2007) a opravy autorů.
Nejistota jednotlivých koncentrací je vysvětlena v doplňku studie S1.3.

Zopakování:
Uložte všech pět souborů společně a spusťte python reproduce.py.
Python 3, pouze standardní knihovna. Není potřebná síť ani tabulkový procesor.
Skript ověří otisky XLSX a CSV, najde list podle jména, načte původní hodnoty,
zkontroluje výběr a vypočítá oba rozdíly stáří a rozdíl koncentrací.
Očekávané výsledky: 31 let u obou vzorků a 38,318 ppm mezi vzorky.
Nejde o zopakování laboratorní analýzy ani nezávislé ověření datování.
Skript a dokumentace: Klimatologie.eu, 2026, CC BY 4.0.
