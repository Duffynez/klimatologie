# Audit zdrojů pasivní mikrovlnné radiometrie a radarového měření

13. listopadu 2026. Metody 23 a 24 v pořadí katalogu.

## Pasivní mikrovlnná radiometrie

- [Karta NOAA/RSS v7](https://klimatologie.eu/zdroje/#DOI_10_7289_V5SJ1HKZ) nyní vede k použitému souboru NetCDF z oběhu F11 č. 1322. Předchozí odkaz otevřel seznam s 10 039 položkami pro rok 1992. Stažený soubor má 6 478 978 bajtů a SHA-256 `859d1629607e5a650e9dde768d1e0ad330362e23fe42eab4877f99361d52997b`. Extrakce s h5py znovu vytvořila shodný CSV. Podíly z vybrané stopy dávají celkem 98,2679888 % ledu podle zvolených referencí NASA Team.
- Rovnice 2.2 v [původní zprávě NASA](https://ntrs.nasa.gov/api/citations/19920015007/downloads/19920015007.pdf) a rovnice 19 v [kalibračním dokumentu RSS](https://www.ncei.noaa.gov/pub/data/sds/cdr/CDRs/SSMI_S_Brightness_Temperatures_RSS/AlgorithmDescription_01B-05.pdf) rozlišují první převod na anténní teplotu a korekci na jasovou teplotu. Opravené odkazy míří k těmto krokům a k výpočtu GPROF v oddílech 3, 3.3 a 3.4.
- Tabulka 3 v [příručce NASA z roku 1997](https://ntrs.nasa.gov/api/citations/19980076134/downloads/19980076134.pdf) obsahuje použité reference pro F11 v Arktidě. Zpráva z roku 1992 dokládá historickou hranici filtru 0,05 i podzimní porovnání s Landsatem. Zpráva NASA z roku 1984 se stáhla v plném rozsahu 70 stran a obsahuje fotografii přístroje na obrázku 19.
- Veřejné dokumenty NSIDC podporují popis hranice 15 % a použití AMSR2 od ledna 2025. Zdroje pro další použití dokládají sondování teploty, odhad vodní páry, srážek, vodní hodnoty sněhu a vlhkosti půdy. Datový adresář RSS obsahuje měsíční soubor NetCDF a pomocné podklady.

## Radarové měření srážek a struktury sněhu a ledu

- [Karta NEXRAD](https://klimatologie.eu/zdroje/#DOI_10_7289_V5W9574V) výslovně označuje stažení originálu KHGX. Stažený soubor má 16 555 888 bajtů a SHA-256 `70995375338dd2287ea39fb81ed836d3680b2935ed66ca2b9087446e5367ae5b`. MetPy 1.7.1 z něj obnovilo shodný CSV s odrazivostí 41 dBZ. Převod podle [Fultona a kolegů](https://hdsc.nws.noaa.gov/pub/hdsc/data/papers/articles/HRL_Pubs_PDF_May12_2009/HRL_PUBS_381-443/385_THE_WSR-88D_RAINFALL_ALGORITHM.pdf) dává při zvolené tropické relaci 26,2 mm/h.
- [Původní zpráva Ryzhkova a kolegů](https://repository.library.noaa.gov/view/noaa/11137/noaa_11137_DS1.pdf) doplňuje doklad o využití dvojí polarizace pro odhad srážek a jeho ověření se srážkoměry. Práce Ice a kolegů se vztahuje ke kalibraci antény pomocí Slunce.
- [Úplné PDF MacGregora a kolegů](https://escholarship.org/content/qt4dj9r5n2/qt4dj9r5n2.pdf) je dostupné v repozitáři University of California. Odkaz na Wiley při přímém automatickém požadavku vrátil 403. Podle oddílu 3.3.1 byly pro datování použity také trasy do 3 km od hlubokého vrtu.
- [Původní JPG antény](https://www.weather.gov/images/lmk/soo/IMG_0008_med.jpg) souhlasí bajtově s fotografií v článku. Karta otevírá fotografii i stránku s jejím kontextem. Kreklow a kolegové uvádějí rozdíl 7,9 % v průměrném ročním úhrnu a částečné sdílení srážkoměrů mezi úpravou a kontrolou. Autorská verze MistNetu obsahuje metodiku i ověření ručně označenými snímky.

Prokliknuto všech 32 původních zdrojových karet. Opravené články dohromady citují 33 karet.
