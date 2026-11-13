# Audit zdrojů lidaru a altimetrie

13. listopadu 2026. Metody 25 a 26 v pořadí katalogu.

## Lidarové měření atmosféry a vegetace

- Přístroj, detekci návratu a optické filtry CALIOP dokládá oddíl 2 [původní studie Winkera a kolegů](https://ntrs.nasa.gov/api/citations/20070035884/downloads/20070035884.pdf). Kalibraci a letecké porovnání nadále dokládá Kar a kol. 2018.
- DOI historických produktů [L1B](https://doi.org/10.5067/GEDI/GEDI01_B.001) a [L2A](https://doi.org/10.5067/GEDI/GEDI02_A.001) vedou na jejich popisy v katalogu NASA. Karty výslovně označují ZIPy s použitými výřezy z revize rGEDI uvedené v `provenance.json`. Oba stažené archivy mají uvedený kontrolní součet. Extrakce znovu sestavila shodných 878 vzorků a vstupní hodnoty pulzu 19640521100108408. Výpočet dal RH98 10,90 m a RH100 12,81 m.
- Karta fotografie GEDI zpřístupňuje [přímo soubor JPG na webu NASA](https://www.nasa.gov/wp-content/uploads/2019/01/gedi_desiree_stoverh.jpg?w=2048).

## Radarová a laserová altimetrie

- Karta Neumanna a kolegů nyní otevírá [úplný autorský rukopis v NASA NTRS](https://ntrs.nasa.gov/api/citations/20190031982/downloads/20190031982.pdf). PubMed Central při jednom z požadavků vrátil ověření návštěvníka. Karta Smitha a kolegů vede [přímo na úplné PDF University of California](https://escholarship.org/content/qt0xv7b6br/qt0xv7b6br.pdf). Oddíly 3.3 a 3.4 dokládají, jak ATL06 odhaduje medián výšek návratů opravami výšky z proložené přímky.
- Volný bok z laserových měření ICESat-2 dokládá [původní studie Kwoka a kolegů](https://ntrs.nasa.gov/api/citations/20190031983/downloads/20190031983.pdf). Předpoklad o rozhraní sněhu a ledu u radaru CryoSat-2 dokládá oddíl 2 studie Laxona a kolegů. Karta přístroje ATLAS otevírá [použitý záběr přímo v archivu NASA](https://svs.gsfc.nasa.gov/vis/a010000/a011700/a011709/ATLAS_dolly_selects_youtube_hq.00500_print.jpg).
- Původní NetCDF přeletu Jasonu-3 z archivu NOAA má 6 436 332 bajtů a SHA-256 `81d8caa581daafc24db725e2862538a2f9149c052fb7feb82c4414e7e31c29ad`. Extrakce obnovila shodný JSON záznamu na indexu 1500. Výsledná výška nad elipsoidem je 7,2261 m, místní odchylka po opravách +0,0672 m.

V prohlížeči bylo prokliknuto všech 27 původních zdrojových karet obou metod.
