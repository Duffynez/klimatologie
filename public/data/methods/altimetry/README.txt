Radarová a laserová altimetrie – skutečný záznam Jasonu-3
Klimatologie.eu, 28. října 2026

Malý výpočet
1. Uložte jason3-record.json a reproduce.py do jedné složky.
2. Spusťte python reproduce.py (Python 3, bez dalších knihoven).
Výsledkem je výška 7,2261 m nad elipsoidem a anomálie 0,0672 m.
Archivní ssha je 0,067 m. Shoda kontroluje aritmetiku, nikoli přesnost měření.

Původní soubor
https://www.ncei.noaa.gov/data/oceans/jason3/gdr_d/gdr/cycle066/JA3_GPN_2PdP066_082_20171126_024626_20171126_034239.nc
SHA-256: 81d8caa581daafc24db725e2862538a2f9149c052fb7feb82c4414e7e31c29ad
Velikost: 6 436 332 bajtů. Přístup: 28. října 2026.
Poskytovatelé: CNES, JPL, NOAA, EUMETSAT. Veřejná data, archiv NOAA NCEI.
Historický GDR-D, cyklus 066, přelet 082. NetCDF Classic.
Soubor vznikl 5. ledna 2018. Vysvětlení vychází z příručky Jason-3 1.5.

Přesný výběr
Index 1500 při počítání od nuly (1501. záznam), jednosekundová úroveň.
2017-11-26T03:11:51.757132 UTC
Šířka 7,869252° severní. Délka v souboru 209,062380° východní,
tedy 150,937620° západní. Vzdálenost od souše 968 153 m.
Výběr slouží ukázce zpracování v otevřeném oceánu, není prostorovým průměrem.
Příznaky povrchu a kvality se zachovaly v JSON. range_numval_ku = 19.
Oceánské slapy: GOT4.8, pole ocean_tide_sol1.
Střední hladina: MSS_CNES_CLS-2011, pole mean_sea_surface.
Ku/MLE4: pole range_ku, iono_corr_alt_ku a sea_state_bias_ku.
Přístrojové opravy už jsou zahrnuty v range_ku.
Slapové zatížení dna už je zahrnuto v ocean_tide_sol1.
Opravy vzdálenosti se přičítají, výškové příspěvky se odečítají.
Všechna znaménka se přebírají beze změny.

Opakování exportu
Stáhněte výše uvedený původní soubor.
Nainstalujte knihovnu netCDF4: python -m pip install netCDF4
Spusťte: python extract_record.py ORIGINAL.nc exported.json
V souboru ORIGINAL.nc musí být uvedený originál. Export ověřuje SHA-256.
Exportované JSON je shodné se zveřejněným jason3-record.json.
Zachovává původní celá čísla, koeficienty převodu i metadata.
Výpočet používá Decimal, aby neztrácel číslice při odečítání vzdáleností.
Čtyři desetinná místa jsou číselný formát dat, nikoli nejistota měření.

Kontrolní součty zveřejněných souborů (SHA-256, konce řádků LF)
extract_record.py  ff25bab9bd7d802fee8ee8394d54cbdc47a2e1915f566757800a6cca503bfb11
jason3-record.json  d4c5a3cd11c6550490e1faacfcea07f8ef5ff54cbf65290b3ac05650f7188da6
reproduce.py  e123d7dbd487aeb37eccc82b1e1a0df50a9e744acfc71c64d0b42cf1e7883362
