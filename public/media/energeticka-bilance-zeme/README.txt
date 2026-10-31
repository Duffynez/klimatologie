Energetická bilance Země — podklady obrázků
Klimatologie.eu, 31. října 2026

porovnani-trendu.csv přepisuje dva odhady z oddílu 3.1 práce:
Loeb, N. G., Johnson, G. C., Thorsen, T. J., Lyman, J. M., Rose, F. G. a Kato, S. (2021).
Satellite and Ocean Data Reveal Marked Increase in Earth's Heating Rate.
Geophysical Research Letters 48, e2021GL093047.
DOI: https://doi.org/10.1029/2021GL093047
Plný text: https://repository.library.noaa.gov/view/noaa/45448/noaa_45448_DS1.pdf

Období: od poloviny roku 2005 do poloviny roku 2019.
Oba toky jsou vztaženy k ploše celé Země, nikoli jen k ploše oceánu.
Oceánský odhad: trend toku odpovídajícího změně obsahu tepla vrstvy 0–2 000 m.
Družicový odhad: trend čistého toku na horní hranici atmosféry, CERES EBAF Ed4.1.
Jednotka: W/m² za deset let. Odhady 0,43 ± 0,40 a 0,50 ± 0,47.
Intervaly 5.–95. percentilu jsou 90% intervaly spolehlivosti z původní práce.
CSV obsahuje střed, polovinu šířky intervalu a oba konce. Žádné hodnoty nebyly digitalizovány z obrázku.
Nejde o původní jednotlivá měření ani o nové proložení časových záznamů.
Oceánský trend nezahrnuje časově proměnné příspěvky hlubšího oceánu, pevniny, atmosféry a ledu.
Průměr družicového EBAF je navázán na inventuru energie. Srovnáváme trendy, nikoli nezávislost absolutních průměrů.

Skript generate_figures.py vyžaduje Python 3 a matplotlib. Čte CSV ze své složky.
Vytvoří porovnani-trendu.svg, kontrolní PNG a vysvětlující toky-energie.svg.
Schéma je původní kresba Klimatologie.eu, ne kvantitativní diagram. Směry toků podle Loeb a kol. 2018,
DOI https://doi.org/10.1175/JCLI-D-17-0208.1.

Grafika Klimatologie.eu: CC BY 4.0.
Číselné podklady: Loeb a kol. 2021, CC BY 4.0.
Licence: https://creativecommons.org/licenses/by/4.0/
