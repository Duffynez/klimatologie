Vizuální vysvětlení klimatických mechanismů
Klimatologie.eu, 2. listopadu 2026

Vlastní grafická úprava a skript: CC BY 4.0.
https://creativecommons.org/licenses/by/4.0/
Toto označení nepřelicencovává původní studie ani soubor vydavatele.

FYZIKÁLNÍ SCHÉMATA

Vlastní kresby vysvětlují vztahy, nikoli naměřené velikosti. Rozměry těles,
vrstev a šipek nejsou v měřítku. Schémata nejsou kopiemi původní grafiky.

slunecni-hypoteza.svg
Přírůstek slunečního příkonu jako možný zdroj energie.
Kopp a Lean 2011, https://doi.org/10.1029/2010GL045777

prirozene-kolisani.svg
Přesuny tepla mezi oceánem a atmosférou a změna odrazu oblačností.
IPCC AR6, kapitola 3, rámeček 3.1 a oddíl 3.7.
https://doi.org/10.1017/9781009157896.005

sklenikove-plyny.svg
Oddělené pohlcování a vyzařování atmosféry. Šipky neznamenají odraz.
NASA, Climate and Earth's Energy Budget.
https://earthobservatory.nasa.gov/features/EnergyBalance

pokus-nasyceni.svg
Princip měření průchodu záření plynem. Nejde o rekonstrukci konkrétního
historického přístroje. Ångström 1900, s. 724.
https://doi.org/10.1002/andp.19003081208

aeri-test.svg
Pozemní měření záření oblohy a doplnění teploty a vlhkosti radiosondami.
Feldman a kol. 2015, metody a rozšířený obrázek 1.
https://doi.org/10.1038/nature14240

vrstvy-atmosfery.svg
Záření jednotlivých vrstev a jeho zeslabování při průchodu nadložním plynem.
Inspirováno fyzikálním výkladem a obrázkem 1 v Pierrehumbert 2011.
https://doi.org/10.1063/1.3653855
Každá šipka představuje samostatný příspěvek. Atmosféra vyzařuje rovněž
dolů, kresba sleduje jen směr vzhůru. Tři vrstvy jsou názorné rozdělení
výpočtu, ne skutečné hranice atmosféry. Šířky nejsou vypočtené toky.

GRAF PŘIROZENÉHO KOLÍSÁNÍ

prirozene-kolisani-test.svg, mobilní varianta a prirozene-kolisani.csv
Raghuraman, Paynter a Ramaswamy 2021, obr. 2 a příslušný text.
https://doi.org/10.1038/s41467-021-24544-4
Původní studie CC BY 4.0. Graf přepisuje publikované souhrnné hodnoty,
nejde o nový výpočet z modelových běhů ani jednotlivých měření CERES.

Zelený úsek: CMIP6 Control, stálé vnější vlivy, 1 293 dvacetiletých úseků
ze 47 modelů. Rozsah 0 ± 0,19 W m^-2 za deset let je dvojnásobek směrodatné
odchylky rozdělení těchto trendů, přibližně 95 % přirozeného kolísání.

Rezavý úsek: trend CERES 2001–2020, 0,38 ± 0,20 W m^-2 za deset let.
Rozpětí je dvojnásobek směrodatné odchylky odhadované přístrojové chyby
trendu. Nejde o celkový interval regrese ±0,24 uváděný jinde ve studii.
Zde by zahrnutí této další variability vedlo k jejímu dvojímu započtení.

Oba úseky se překrývají v rozsahu 0,18–0,19. Graf neznázorňuje celé
hustoty pravděpodobnosti. Hodnotu pod 1 % přebírá text z pravděpodobnostního
testu studie, neodvozuje ji pouze z překryvu těchto dvou úseků.

SPEKTRÁLNÍ GRAF

feldman-spektrum.svg, mobilní varianta a feldman-sgp-spektrum.csv
Feldman a kol. 2015, roční křivky obrázku 2b a 2c, stanice Southern Great
Plains v Oklahomě, jasná obloha, 2000–2010.
https://doi.org/10.1038/nature14240
Původní data vydavatele:
https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fnature14240/MediaObjects/41586_2015_BFnature14240_MOESM85_ESM.xlsx

Nejde o odečet z rastrového obrázku. CSV vzniká převodem přímo z číselného
listu XLSX. List, řádky, kontrolní součet vstupu a jednotky zaznamenává
feldman-provenance.json. Uchováváme všech 2 592 kanálů. Graf zobrazuje
výběr 520–800 cm^-1 bez vyhlazení, převzorkování nebo agregace.

measurement_residual_trend: trend rozdílu mezi pozorovaným spektrem
a výpočtem při CO2 pevném na 370 ppm. Výpočet zahrnuje měnící se teplotu,
vlhkost a další vstupy. Tato křivka už tedy spojuje měření s modelem.
model_residual_trend: trend rozdílu mezi výpočtem s měnícím se CO2 podle
CarbonTracker a výpočtem s CO2 pevným na 370 ppm.
significant_3sigma: 1 pro kanály označené ve zdroji jako odlišné od nuly
na úrovni 3 sigma, 0 pro ostatní. Původní soubor uvádí pro nevýznamné
kanály NaN. Značky nejsou intervalem nejistoty vypočtené křivky.

Jednotka obou trendů je mW m^-2 sr^-1 (cm^-1)^-1 za deset let.
Jde o spektrální záření v daném směru, nikoli o integrální tok ve W/m².
Graf nezahrnuje aljašskou stanici ani sezónní křivky z původního obrázku.
Barvy a rozvržení jsou vlastní. Původní XLSX zde znovu nezveřejňujeme.

REPRODUKCE

Python 3, numpy a matplotlib. Stáhněte původní XLSX z adresy výše.
Spusťte ze složky s tímto skriptem:
python generate_figures.py --xlsx cesta/k/41586_2015_BFnature14240_MOESM85_ESM.xlsx

Skript vytvoří schémata SVG, dvě velikosti každého grafu, náhledy PNG,
datové CSV a manifest. Jednotky, význam úseků a křivek vysvětlují také
popisky přímo v článcích. Při změně vstupu znovu ověřte mapování řádků.
