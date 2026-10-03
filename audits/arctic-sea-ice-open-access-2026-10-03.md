# Arktický mořský led: odborná kontrola a otevřené zdroje

Kontrola: 3. října 2026. Rozsah: `ArcticSeaIceArticle.tsx`, související bibliografické záznamy, datum kontroly a testy vykreslených zdrojových karet. Po revizi článek používá 44 různých zdrojů. Každý má veřejný plný text, data nebo původní institucionální stránku; žádná karta zdroje tohoto článku nezobrazuje Drive.

Kontrola zahrnovala čtení těla původních prací, metodik a oficiálních datových záznamů. Samotné DOI ani odpověď HTTP 200 nebyly považovány za důkaz dostupnosti. DOI zůstává identifikátorem, samostatný odkaz vede na veřejnou verzi. Generovaný `sourceArchive.ts` a historické archivní manifesty zůstávají nedotčeny.

## Věcné opravy

- Rozsah a plocha mají jasně odlišený výpočet se společnou hranicí 15 % koncentrace. Denní minimum NSIDC je vysvětleno jako minimum klouzavého průměru dne a čtyř předchozích dnů; nesměšuje se s měsíční hodnotou ani s evropským produktem.
- Historická rekonstrukce Walshe je doložena příručkou skutečně odkazované verze 2. Text vysvětluje kódy původu dat i doplňování chybějících míst a měsíců; neuvádí nepodložený pevný počet vstupních souborů.
- Výklad pasivních mikrovlnných měření rozlišuje přístroj, jasovou teplotu a výpočet koncentrace. Původní metodiku NASA Team dokládá otevřená příručka autorů z roku 1997. Ivanova a kol. (2015) porovnávají 30 algoritmů; tento údaj není převzat ze starší práce o 11 algoritmech.
- Přechod Sea Ice Index v4 od SSMIS k AMSR2 je doložen technickou zprávou NSIDC č. 28. Vysvětleno sjednocení prostorového rozlišení, zbývající rozdíly a zachování starší části před rokem 2025.
- Výpočet stáří je opřen o aktuální metodiku Tschudiho a kol. (2020): týdenní sledování pohybu a nejstarší dochovaný led v buňce nelze zaměňovat s přímým měřením průměrného stáří. U laseru a radaru jsou rozlišeny odrazné plochy a předpoklady převodu výšky na tloušťku.
- Nejistota Meiera a Stewarta (2019) se týká vzájemného porovnání v témže produktu a tehdejšího zpracování. Výsledky Werneckeho a kol. (2024) zahrnují prostorovou a časovou souvislost chyb a používají ESA CCI v2.1, tedy jiný produkt. Čísla nejsou představena jako dvě zaměnitelné chyby téhož měření.
- Datové odkazy odpovídají skutečným verzím a koncům pokrytí: NASA Team v2 do prosince 2025, stáří v4 do prosince 2025, CryoSat-2 L4 v1 do května 2025 a ICESat-2 v4 do dubna 2026. OSI-430-a skončil 16. října 2025; přibyly oficiálně doporučené OSI-438 a OSI-438-a. Historická OSI-450-a1 v3.1 zůstává samostatným souborem pro 1978–2020.
- NSIDC a OSI SAF zpracovávají část stejných mikrovlnných vstupů. Jejich porovnání je kontrolou nezávislého zpracování, nikoli dvou zcela nezávislých měřicích sítí. Srovnání září 2025 ponechává společné období, veličinu a způsob průměrování.
- Doplněna předběžná zpráva NSIDC z 23. září 2026: minimum 4,60 milionu km² dne 12. září, dělené desáté místo. Dlouhodobé sklony a test změny po roce 2007 zůstávají výslovně u publikovaného období do roku 2025; nebyly bez přepočtu prodlouženy.
- Úbytek zimního objemu přibližně 6 000 km³ z práce Kacimi a Kwoka (2022) je vztažen k únoru–březnu 2003–2021 a vymezené arktické pánvi. Opraveno chybějící konečné datum, sezona a prostorové vymezení. PIOMAS je důsledně označen jako modelová reanalýza.
- Zachováno pět obrázků s původem a licenčními údaji. NASA snímek i zářijový graf jsou výslovně z roku 2025; nová předběžná hodnota roku 2026 je uvedena odděleně. Článek zůstává u pozorování, metod a jejich mezí.

## Vyřazené a nahrazené odkazy

Osm záznamů bylo vyřazeno a osm přidáno, celkový počet zůstává 44. Před odstraněním z centrálního katalogu bylo použití ID prověřeno v celém repozitáři. Vyřazené záznamy se mimo tento článek v aktivním obsahu nepoužívaly; historické archivní záznamy se nemění.

| Vyřazený zdroj | Důvod a náhrada |
| --- | --- |
| Parkinson a kol. (1999), DOI 10.1029/1999JC900082 | Obecný historický odkaz v úvodu; výpočet rozsahu a plochy dokládá přímo příručka Sea Ice Index v4. |
| Maslanik a kol. (2011), DOI 10.1029/2011GL047735 | Nadbytečná bibliografická položka bez samostatného tvrzení; postup stáří popisují otevřené práce Tschudiho a kol. (2016, 2020). |
| Cavalieri a kol. (1984), DOI 10.1029/JD089iD04p05355 | Nahrazeno veřejnou autorskou metodickou příručkou NASA z roku 1997, NTRS 19980076134. |
| Fowler a kol. (2004), DOI 10.1109/LGRS.2004.824741 | Původní odkaz nenabídl ověřitelný plný text; současný výpočet stáří doložen otevřenou metodikou Tschudiho a kol. (2020). |
| Ivanova a kol. (2014), DOI 10.1109/TGRS.2014.2310136 | Nahrazeno otevřeným širším porovnáním z roku 2015, DOI 10.5194/tc-9-1797-2015. Počet algoritmů byl upraven podle nové práce. |
| Walsh a kol. (2017), DOI 10.1111/j.1931-0846.2016.12195.x | Způsob rekonstrukce vysvětlen podle veřejné autorské příručky datové verze 2. Datový DOI zůstává. |
| NASA Team v1, DOI 10.5067/8GQ8LZQVL0VL | Nahrazeno verzí 2, DOI 10.5067/MPYG15WAA4WX, s uvedením konečného pokrytí. |
| Samostatný webový záznam NOAA Sea Ice 2025 | Sloučen s existujícím DOI 10.25923/mmxf-0r86 téže zprávy; jeden zdroj a jedna karta. |

Další čtyři nové položky jsou technická zpráva o přechodu Sea Ice Index v4, předběžné minimum 2026 a datové produkty OSI-438 a OSI-438-a. Rok 2022 u OSI-438 odpovídá doporučené citaci poskytovatele, nikoli datu provozního uvedení produktu v květnu 2026.

## Ověření dostupnosti a jeho meze

Plné texty Copernicus a NOAA byly čteny přímo na webu. NASA, autorské kopie University of Washington a veřejné PDF MDPI byly ověřeny stažením a čtením. Kwok (2018) je odkazován na veřejnou kopii původního článku, která obsahuje DOI, úplný text a licenci CC BY 3.0; nejde o převzetí zprávy provozovatele úložiště.

U Wiley byly čteny vydavatelské stránky označené Free Access včetně metodických částí. Některé automatické požadavky vracely HTTP 403, přestože webový nástroj plný text zpřístupnil. U IOP odpověď HTTP 200 obsahovala kontrolu přístupu, nikoli článek; místo ní byly ověřeny veřejné kopie. Meier a Stewart (2019) byli čteni v úplném PDF repozitáře NOAA, ačkoli samostatný stahovací skript dostal HTTP 403. Dostupnost veřejných verzí se proto neopírá o pouhý stavový kód.

Oficiální datové katalogy byly ověřeny podle názvu, verze, časového pokrytí, dokumentace a cesty k datům. Některé soubory NASA NSIDC vyžadují bezplatný účet Earthdata; článek tuto podmínku uvádí. Kontrola neznamená stažení všech souborů rozsáhlých družicových databází ani nový vlastní výpočet trendů.

## Technické a vizuální ověření

`pnpm lint`, `pnpm audit:sources`, `pnpm test` a `git diff --check` prošly. Produkční build předvykreslil 74 adres a všech 27 testů uspělo. Nový test kontroluje skutečné HTML karet všech 44 zdrojů: existenci, veřejný přístup, samostatný DOI a nepřítomnost odkazů na Drive. Ověřuje rovněž datovou verzi NASA Team v2 a nové zdroje z roku 2026.

V prohlížeči byly ověřeny rozměry 1440 × 1000 a 390 × 844: nadpis, perex, datum kontroly, slovníček v běžném toku, datové bloky, grafy a popisky. Všech pět obrázků se načetlo. Stránka článku ani zdrojů vodorovně nepřetéká. Mobilní graf se posunul klávesou šipka doprava; přechod z citace minima 2026 otevřel správnou kartu. Karta NASA Team v2 zobrazuje samostatně DOI a veřejná data, karta OSI-438-a rovněž.

## Ověřené cíle odkazů

DOI a bibliografické údaje jsou v centrálním katalogu. Následují veřejné cíle po revizi; u dat jde o oficiální záznam s dokumentací a přístupem k souborům.

| Zdroj | Veřejná verze |
| --- | --- |
| National Snow and Ice Data Center (2026): Sea Ice Index, Version 4.0: User Guide | [Plný text](https://nsidc.org/sites/default/files/documents/user-guide/g02135-v004-userguide.pdf) |
| Mark A. Tschudi a kol. (2020): An enhancement to sea ice motion and age products at the National Snow and Ice Data Center (NSIDC) | [Plný text](https://tc.copernicus.org/articles/14/1519/2020/) |
| R Kwok (2018): Arctic sea ice thickness, volume, and multiyear ice coverage: losses and coupled variability (1958–2018) | [Plný text](https://safety4sea.com/wp-content/uploads/2018/10/Environmental-Research-Letters-Arctic-sea-ice-thickness-volume-and-multiyear-ice-coverage-losses-and-coupled-variability-1958-2018-2018_10.pdf) |
| NASA (2025): NASA Scientific Visualization Studio – Arctic Sea Ice Minimum 2025 | [Data / původní stránka](https://svs.gsfc.nasa.gov/5583/) |
| NASA (2026): Guidelines for using NASA Images and Media Guidelines | [Data / původní stránka](https://www.nasa.gov/nasa-brand-center/images-and-media/) |
| Danish Meteorological Institute And National Snow And Ice Data Center (2012): Arctic Sea Ice Charts from Danish Meteorological Institute, 1893 - 1956 | [Data / původní stránka](https://nsidc.org/data/g02203/versions/1) |
| Andrew R. Mahoney a kol. (2008): Observed sea ice extent in the Russian Arctic, 1933–2006 | [Plný text](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2008JC004830) |
| John E. Walsh, William L. Chapman, Florence Fetterer a J. Scott Stewart (2019): Gridded Monthly Sea Ice Extent and Concentration, 1850 Onward, Version 2: User Guide | [Plný text](https://nsidc.org/sites/default/files/g10010_v0020_1_0.pdf) |
| J.E. Walsh a kol. (2019): Gridded Monthly Sea Ice Extent and Concentration, 1850 Onward, Version 2 | [Data / původní stránka](https://nsidc.org/data/g10010/versions/2) |
| Claire L. Parkinson, Josefino C. Comiso, H. Jay Zwally, Donald J. Cavalieri, Per Gloersen a William J. Campbell (1987): Arctic Sea ice, 1973-1976: Satellite passive-microwave observations | [Plný text](https://ntrs.nasa.gov/api/citations/19870015437/downloads/19870015437.pdf) |
|  Per Gloersen (2006): Nimbus-7 SMMR Polar Gridded Radiances and Sea Ice Concentrations, Version 1 | [Data / původní stránka](https://nsidc.org/data/nsidc-0007/versions/1) |
| Donald J. Cavalieri, Claire L. Parkinson, Per Gloersen a H. Jay Zwally (1997): Arctic and Antarctic Sea Ice Concentrations from Multichannel Passive-Microwave Satellite Data Sets: October 1978–September 1995, User’s Guide | [Plný text](https://ntrs.nasa.gov/api/citations/19980076134/downloads/19980076134.pdf) |
| Florence Fetterer a kol. (2025): Sea Ice Index, Version 4 | [Data / původní stránka](https://nsidc.org/data/g02135/versions/4) |
| A. Windnagel, T. Stafford, F. Fetterer a W. Meier (2025): Sea Ice Index Version 4 Analysis | [Plný text](https://nsidc.org/sites/default/files/documents/technical-reference/nsidc-special-report-28.pdf) |
| R. Kwok a D. A. Rothrock (2009): Decline in Arctic sea ice thickness from submarine and ICESat records: 1958–2008 | [Plný text](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2009GL039035) |
| Seymour W. Laxon a kol. (2013): CryoSat‐2 estimates of Arctic sea ice thickness and volume | [Plný text](https://psc.apl.washington.edu/zhang/Pubs/Laxon_etal2013_icevol_grl50193.pdf) |
| Natalia Ivanova a kol. (2015): Inter-comparison and evaluation of sea ice algorithms: towards further identification of challenges and optimal approach using passive microwave observations | [Plný text](https://tc.copernicus.org/articles/9/1797/2015/) |
| W. N. Meier a kol. (2025): NOAA Arctic Report Card 2025 : Sea Ice | [Plný text](https://arctic.noaa.gov/report-card/report-card-2025/sea-ice-2025/) |
| Mark Tschudi a kol. (2016): Relating the Age of Arctic Sea Ice to its Thickness, as Measured during NASA’s ICESat and IceBridge Campaigns | [Plný text](https://mdpi-res.com/d_attachment/remotesensing/remotesensing-08-00457/article_deploy/remotesensing-08-00457.pdf) |
| R. Kwok a kol. (2020): Arctic Snow Depth and Sea Ice Thickness From ICESat‐2 and CryoSat‐2 Freeboards: A First Examination | [Plný text](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2019JC016008) |
| Jinlun Zhang a Drew A. Rothrock (2003): Modeling Global Sea Ice with a Thickness and Enthalpy Distribution Model in Generalized Curvilinear Coordinates | [Plný text](https://psc.apl.washington.edu/zhang/Pubs/POIM.pdf) |
| Axel Schweiger a kol. (2011): Uncertainty in modeled Arctic sea ice volume | [Plný text](https://psc.apl.uw.edu/wordpress/wp-content/uploads/schweiger/pubs/Schweiger-2011-Uncertainty%20in%20model.pdf) |
| Walter N Meier a J Scott Stewart (2019): Assessing uncertainties in sea ice extent climate indicators | [Plný text](https://repository.library.noaa.gov/view/noaa/25118/noaa_25118_DS1.pdf) |
| Andreas Wernecke a kol. (2024): Estimating the uncertainty of sea-ice area and sea-ice extent from satellite retrievals | [Plný text](https://tc.copernicus.org/articles/18/2473/2024/) |
| Andreas Wernecke a kol. (2026): Uncertainty of the satellite-retrieved sea-ice area record and its trend | [Plný text](https://tc.copernicus.org/articles/20/3783/2026/) |
| N. DiGirolamo, C. L. Parkinson, D. J. Cavalieri, P. Gloersen a H. J. Zwally (2022): Sea Ice Concentrations from Nimbus-7 SMMR and DMSP SSM/I-SSMIS Passive Microwave Data, Version 2 | [Data / původní stránka](https://nsidc.org/data/nsidc-0051/versions/2) |
| EUMETSAT OSI SAF (2025): Sea Ice Concentration Climate Data Record Release 3.1 - Multimission | [Data / původní stránka](https://osi-saf.eumetsat.int/products/osi-450-a1) |
| EUMETSAT OSI SAF (2022): Global Sea Ice Concentration Interim Climate Data Record Release 3 - DMSP | [Data / původní stránka](https://osi-saf.eumetsat.int/products/osi-430-a) |
| EUMETSAT OSI SAF (2022): Global Sea Ice Concentration Interim Climate Data Record (AMSR2), Version 3: OSI-438 | [Data / původní stránka](https://osi-saf.eumetsat.int/products/osi-438) |
| EUMETSAT OSI SAF (2026): Global Sea Ice Concentration Interim Climate Data Record (AMSR3), Version 3: OSI-438-a | [Data / původní stránka](https://osi-saf.eumetsat.int/products/osi-438-a-complementing-osi-458-and-osi-438) |
| Thomas Lavergne a kol. (2019): Version 2 of the EUMETSAT OSI SAF and ESA CCI sea-ice concentration climate data records | [Plný text](https://tc.copernicus.org/articles/13/49/2019/) |
|  Mark Tschudi a kol. (2019): EASE-Grid Sea Ice Age, Version 4 | [Data / původní stránka](https://nsidc.org/data/nsidc-0611/versions/4) |
|  Mark Tschudi a kol. (2019): Quicklook Arctic Weekly EASE-Grid Sea Ice Age, Version 1 | [Data / původní stránka](https://nsidc.org/data/nsidc-0749/versions/1) |
|  Alek Petty a kol. (2025): ICESat-2 L4 Monthly Gridded Sea Ice Thickness, Version 4 | [Data / původní stránka](https://nsidc.org/data/is2sitmogr4/versions/4) |
|  Nathan Kurtz a  Jeremy Harbeck (2017): CryoSat-2 Level-4 Sea Ice Elevation, Freeboard, and Thickness, Version 1 | [Data / původní stránka](https://nsidc.org/data/rdeft4/versions/1) |
|  Sahra Kacimi a  Ron Kwok (2022): ICESat-2 and CryoSat-2 L4 Monthly Arctic Snow Depth and Sea Ice Thickness, Version 1 | [Data / původní stránka](https://nsidc.org/data/nsidc-0773/versions/1) |
| Polar Science Center, University of Washington (2026): PIOMAS Data | [Data / původní stránka](https://psc.apl.uw.edu/research/projects/arctic-sea-ice-volume-anomaly/data/) |
| Copernicus (2025): Sea ice cover for September 2025 – Copernicus | [Data / původní stránka](https://climate.copernicus.eu/sea-ice-cover-september-2025) |
| National Snow and Ice Data Center (2026): Arctic sea ice record low maximum strikes again – National Snow and Ice Data Center | [Data / původní stránka](https://nsidc.org/news-analyses/news-stories/arctic-sea-ice-record-low-maximum-strikes-again) |
| Copernicus (2026): Sea ice cover for March 2026 – Copernicus | [Data / původní stránka](https://climate.copernicus.eu/sea-ice-cover-march-2026) |
| National Snow and Ice Data Center (2026): Arctic sea ice has reached minimum extent for 2026; Antarctic sea ice maximum most likely reached as well | [Data / původní stránka](https://nsidc.org/news-analyses/news-stories/arctic-sea-ice-has-reached-minimum-extent-2026-antarctic-sea-ice-maximum-most-likely-reached-well) |
| National Snow and Ice Data Center (2025): 2025 Arctic sea ice minimum squeezes into the ten lowest minimums – National Snow and Ice Data Center | [Data / původní stránka](https://nsidc.org/sea-ice-today/analyses/2025-arctic-sea-ice-minimum-squeezes-ten-lowest-minimums) |
| Sahra Kacimi a Ron Kwok (2022): Arctic Snow Depth, Ice Thickness, and Volume From ICESat‐2 and CryoSat‐2: 2018–2021 | [Plný text](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2021GL097448) |
| Copernicus (2026): Licence to use Copernicus Products (rev. 12) | [Data / původní stránka](https://cds.climate.copernicus.eu/licences/licence-to-use-copernicus-products) |
