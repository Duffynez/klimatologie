Rekonstrukce teploty z vrtů: český vrt CZ-hv-105n

Původní data: Huang, Pollack a Shen, NOAA/WDS, aktualizace říjen 2016.
https://www.ncei.noaa.gov/pub/data/paleo/borehole/huang2000/huang2016-CZ-hv-105n.txt
Přístup: 30. října 2026. Datový kontakt v originálu: V. Cermak (CZ).
Souřadnice 48,95° s. š., 16,51° v. d. Datum měření v originálu 1976.58.

Rozsah příkladu
Původní soubor obsahuje 38 dvojic hloubka–teplota mezi 20 a 390 m a
samostatné výsledky starší inverze. Převody odporu na teplotu jsou převzaty.
Původní elektrické signály nejsou součástí veřejného souboru.
Zde počítáme nové hlubinné pozadí a teplotní odchylky. Nepočítáme minulou
teplotní historii a nepoužíváme archivované století dlouhé trendy.

Postup
1. Vybereme hloubky 15–300 m podle Cuesty-Valera a kol. (2021).
   V tomto vrtu jde o 29 měření od 20 do 300 m.
2. Z 11 měření včetně krajních hloubek 200 a 300 m určíme přímku
   nejmenšími čtverci, se stejnou vahou každého bodu.
   g = sum((z-z_mean)*(T-T_mean)) / sum((z-z_mean)^2)
   T0 = T_mean - g*z_mean
   z je hloubka v m, T naměřená teplota ve °C, mean aritmetický průměr.
   g je gradient v K/m, T0 průsečík přímky s hloubkou 0 ve °C.
3. Pozadí v hloubce z je T0 + g*z, odchylka je T - (T0 + g*z).
   Teplotní rozdíl 1 K má stejnou velikost jako rozdíl 1 °C.
4. Uchováme všechny vybrané body, bez dalšího vyhlazování nebo vyřazování.
   Přímka předpokládá přibližně stálou tepelnou vodivost v uvažovaném úseku.
   T0 je parametr tohoto odhadu pozadí, ne změřená dnešní teplota povrchu.

Zdroj postupu
Cuesta-Valero et al. (2021), Climate of the Past 17, 451–468,
https://doi.org/10.5194/cp-17-451-2021, rovnice 2 a oddíly 3.1 a 3.3.
Neprovádíme navazující inverzi pomocí SVD ani soubor inverzí PPI.
Vypočtené odchylky nemají přiřazené individuální datum v minulosti.

Opakování
Uložte originál, provenance.json a reproduce.py do jedné složky.
V Pythonu 3.10 nebo novějším spusťte: python reproduce.py
Není potřeba síť ani doplňkové knihovny. Skript ověří SHA-256 originálu
a vytvoří profile.csv a results.json. Číselné výsledky jsou nezaokrouhlené
kromě 12 desetinných míst ve sloupcích CSV. Zveřejněné soubory umožňují
porovnání. Graf v článku je vlastní zobrazení CSV pomocí Matplotlib.

Fotografie: G. D. Clow / USGS, 2014, obrázek 3, strana 203,
https://doi.org/10.5194/essd-6-201-2014, CC BY 3.0.
Původní vložený JPEG byl vyjmut z PDF beze změny obsahu a komprese.
