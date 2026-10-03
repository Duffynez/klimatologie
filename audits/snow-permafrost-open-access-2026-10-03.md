# Sněhová pokrývka a permafrost: odborná revize a otevřené zdroje

Datum kontroly: 3. října 2026. Článek: `app/components/SnowPermafrostArticle.tsx`, veřejná adresa `/pozorovani/snehova-pokryvka-a-permafrost/`.

Článek po revizi používá **35 jedinečných zdrojů**: devět časopiseckých odborných prací, jednu odbornou zprávu s DOI, jedenáct datových souborů s DOI a čtrnáct webových zdrojů, dokumentací a licencí. Všech devět časopiseckých prací i zpráva NOAA byly otevřeny v plném textu; relevantní metody a výsledky byly porovnány s tvrzeními článku. Kontrola nebyla omezena na abstrakt či stav HTTP. Každý z 21 zdrojů s DOI má vedle DOI samostatný odkaz na veřejný text nebo data. Žádná z 35 karet nenabízí Google Drive.

## Odborné práce

| Práce a DOI | Ověřený veřejný text | Vazba na článek |
| --- | --- | --- |
| Estilow et al. 2015, `10.5194/essd-7-137-2015` | [ESSD, plný text a PDF](https://essd.copernicus.org/articles/7/137/2015/) | Historické týdenní mapy, rozlišení, chybějící měsíce, překryv s IMS 1997–1999 a převod na společnou síť. |
| Luojus et al. 2021, `10.1038/s41597-021-00939-2` | [Scientific Data](https://www.nature.com/articles/s41597-021-00939-2) | Otevřeno úplné PDF. Algoritmus GlobSnow, hustota 240 kg/m³, mokrý sníh, RMSE denního produktu a omezení kontroly opraveného měsíčního produktu. Obsahuje i převzaté hodnoty hmotnosti a trendu; nevyžaduje přístup k uzavřené práci Pulliainena 2020. |
| Biskaborn et al. 2015, `10.5194/essd-7-245-2015` | [ESSD](https://essd.copernicus.org/articles/7/245/2015/) | Databáze GTN-P, metadata, nerovnoměrné rozmístění a 73 % vrtů mělčích než 25 m. |
| Biskaborn et al. 2019, `10.1038/s41467-018-08240-4` | [Nature Communications](https://www.nature.com/articles/s41467-018-08240-4) | Otevřeno úplné PDF včetně metod: 154 vrtů celkem, 123 pro trend, podmínky výběru, extrapolace, hloubka, kalibrace, prostorové vážení a intervaly spolehlivosti. |
| Nelson et al. 2021, `10.1080/1088937X.2021.1988001` | [Autorský plný text v repozitáři NSF](https://par.nsf.gov/servlets/purl/10326621) | Historie CALM od roku 1991, terénní protokoly a vztah sondování k sesedání povrchu. Odkaz na legální repozitář, nikoli nová kopie na našem webu. |
| Clow 2014, `10.5194/essd-6-201-2014` | [ESSD](https://essd.copernicus.org/articles/6/201/2014/) | Aljašské teplotní profily 1973–2013; kalibrace odporových čidel, modernizace převodu odporu na teplotu a zbytkový vliv vrtání. |
| Elias Chereque et al. 2025, `10.1126/sciadv.adv7926` | [PubMed Central, úplný článek](https://pmc.ncbi.nlm.nih.gov/articles/PMC12577703/) | Proměnlivá citlivost rozpoznávání sněhu od září do února, srovnání s JAXA JASMES, omezení rekonstrukce během tání. Opraven také skutečný název v bibliografii článku. |
| Strand et al. 2021, `10.1002/ppp.2088` | [Wiley, úplné HTML](https://onlinelibrary.wiley.com/doi/full/10.1002/ppp.2088) | Přestože přímý Python požadavek dostal 403, veřejné HTML bylo otevřeno vyhledávacím prohlížečem včetně metod, výsledků a tabulek. Hodnota 0,8 cm/rok je průměr 37 statisticky významných trendů za 2000–2018, nikoli celé sítě. Rok sjednocen na časopisecké vydání 2021; online publikace byla 14. 10. 2020. |
| Streletskiy et al. 2026, `10.1038/s43247-026-03824-1` | [Communications Earth & Environment](https://www.nature.com/articles/s43247-026-03824-1) | Nově doplněný úplný článek, vydán 26. 8. 2026. Výběr 156 z 316 míst, období 2000–2024, metody sondování a podmínky vyloučení narušených míst. Regionální průměry zahrnují pouze významné trendy. |
| Mudryk et al. 2025, `10.25923/cfhv-c239` | [NOAA Arctic Report Card, Terrestrial Snow Cover](https://arctic.noaa.gov/report-card/report-card-2025/terrestrial-snow-cover-2025/) | Úplná odborná zpráva včetně metod a popisků. Ověřeny rozsah, období, referenční průměr grafů 1991–2020, trendy a odlišné vstupy čtyř produktů. Typ záznamu opraven ze studie na odbornou zprávu. |

## Datové soubory s DOI

| Soubor a DOI | Veřejná cesta | Rozsah ověření |
| --- | --- | --- |
| NOAA SCE CDR v1, `10.7289/V5N014G9` | [NCEI](https://www.ncei.noaa.gov/access/metadata/landing-page/bin/iso?id=gov.noaa.ncdc:C00756) | Metadata, dokumentace a adresář dat; při kontrole obsahoval NetCDF `nhsce_v01r01_19661004_20260831.nc` o 24 602 081 bytech. Celý soubor nebyl znovu statisticky zpracován. |
| IMS v1, `10.7265/N52R3PMC` | [NSIDC G02156](https://nsidc.org/data/g02156/versions/1) | Dokumentace, frekvence a rozlišení; správné místo archivu NSIDC, nikoli NCEI. Oficiální bibliografický rok 2008. Typ opraven na datový soubor. |
| GlobSnow v3, `10.1594/PANGAEA.911944` | [PANGAEA](https://doi.pangaea.de/10.1594/PANGAEA.911944) | Otevřena metadata i textový export seznamu souborů. Dvě ZIP distribuce obsahují měsíční a opravené měsíční mapy, nikoli denní data. Časové vymezení katalogu 1980–2018; plný produkt studie začíná 1979. |
| Snow CCI v3.1, `10.5285/9d9bfc488ec54b1297eca2c9662f9c81` | [CEDA](https://catalogue.ceda.ac.uk/uuid/9d9bfc488ec54b1297eca2c9662f9c81/) | Leden 1979 až květen 2022, obden do roku 1987, potom denně v zimní části roku; proměnlivá hustota. CEDA výslovně dovoluje přístup registrovaným i neregistrovaným uživatelům. |
| GTN-P teploty, `10.1594/PANGAEA.884711` | [PANGAEA](https://doi.pangaea.de/10.1594/PANGAEA.884711) | Stažen a přečten také textový export dat (64 396 bytů), včetně hloubek, lokalit a ročních hodnot. |
| GTN-P metadata, `10.1594/PANGAEA.842821` | [PANGAEA](https://doi.pangaea.de/10.1594/PANGAEA.842821) | Otevřen datový záznam a popis archivovaných metadat; typ opraven ze studie na datový soubor. |
| Permafrost CCI teplota v5.0, `10.5285/5675b0be944f45a8af0e7ddbeb47a011` | [CEDA](https://catalogue.ceda.ac.uk/uuid/5675b0be944f45a8af0e7ddbeb47a011/) | Modelový původ; 2003–2023 družicová teplota plus ERA5, 1997–2002 opravená rekonstrukce ERA5. Přístup bez registrace uveden v katalogu. |
| Permafrost CCI aktivní vrstva v5.0, `10.5285/a6fbedd8ee5b472c8e84e55f746c1704` | [CEDA](https://catalogue.ceda.ac.uk/uuid/a6fbedd8ee5b472c8e84e55f746c1704/) | Shodné období a rozlišení, maximum sezónního tání; kontrolována definice a veřejný přístup, nikoli nový přepočet modelu. |
| Permafrost CCI rozsah v5.0, `10.5285/d235665772ec4b558e9a89ac85595e71` | [CEDA](https://catalogue.ceda.ac.uk/uuid/d235665772ec4b558e9a89ac85595e71/) | Podíl plochy s permafrostem v buňce odvozený z teploty v hloubce 2 m. Opraveno neurčité označení „pravděpodobnost permafrostu“. |
| USGS Utqiaġvik 1950–1961, `10.5066/P9WRGCI3` | [USGS](https://www.usgs.gov/data/permafrost-ground-temperature-1950-1961-utqiagvik-alaska-special-holes-2-8-22-and-26) | Otevřen veřejný popis vydání v prohlížeči po 403 v přímém klientu. Historická měření prováděla NARL; USGS je digitalizovala. Rozlišeny surové a opravené tabulky a skeny dostupné na vyžádání. Samotné historické tabulky nebyly znovu analyzovány. |
| CALM 2026 v1, `10.6084/m9.figshare.32885756.v1` | [Ověřený CSV soubor](https://ndownloader.figshare.com/files/66270764) | Stažen celý soubor `CALM_Sites_Data.csv`, 642 009 bytů, MD5 `b7a970563a26fd76688d97fae78a0d1d` souhlasí s veřejným API Figshare. Obsahuje 3 500 řádků, 140 kódů míst, 25 ročních pozic 2000–2024 a 2 700 neprázdných hodnot ALT. Jde o autorem označený výběr pro grafy, ne všech 156 lokalit studie. Webová stránka Figshare vracela 403/202 bez těla; karta proto nabízí přímo skutečně stažený veřejný CSV a DOI konkrétní verze. |

## Webové zdroje a licence

Následujících 14 záznamů je odlišných od 21 DOI výše. Dva webové záznamy odkazují na stejné produkty jako DOI; zachovávají své dosavadní identifikátory pro textové a obrazové citace.

| Zdroj | Ověřeno |
| --- | --- |
| [WMO OSCAR, SWE](https://space.oscar.wmo.int/variables/view/snow_water_equivalent) | Definice vodní hodnoty; odstraněny HTML entity z názvu. |
| [USGS, Snow core measurement](https://www.usgs.gov/media/images/snow-core-measurement) | Skutečná fotografie na ledovci Sperry, datum 20. 7. 2020 a explicitní Public Domain. |
| [NSIDC, CALM](https://nsidc.org/data/ggd313/versions/1) | Katalog uvádí pokrytí od 1991 do současnosti a externí přístup k datům. Nezaměňujeme časový rozsah katalogu za úplné roční pokrytí všech míst. |
| [NRCS, The History of Snow Survey and Water Supply Forecasting](https://www.nrcs.usda.gov/sites/default/files/2023-01/History-of-Snow-Survey-and-Water-Supply-Forecasting.pdf) | Otevřen celý historický svazek; Churchův sněhový odběrák 1909. Skutečné vydání 2008, nikoli 2023 z cesty URL. Opraveni editoři a název. |
| [IPA, CALM](https://www.permafrost.org/data/circumpolar-active-layer-monitoring-network-calm/) | Účel sítě, terénní měření a cesta k provozovateli. |
| [NOAA, SCE CDR](https://www.ncei.noaa.gov/products/climate-data-records/snow-cover-extent) | Veřejný produktový přehled, dokumentace a datový přístup. |
| [NSIDC, IMS](https://nsidc.org/data/g02156/versions/1) | Veřejná metodika, období a tři rozlišení; opraven bibliografický rok. |
| [FMI, GlobSnow3.0](https://github.com/fmidev/GlobSnow3.0) | Skutečný repozitář algoritmu. Autorem není provozovatel GitHub, ale Finnish Meteorological Institute. |
| [GTN-P, datový portál](https://data.gtn-p.org/) | Veřejný portál; pro reprodukci globální studie se odkazuje i na pevně vydaná data PANGAEA. |
| [NOAA, Terrestrial Snow Cover 2025](https://arctic.noaa.gov/report-card/report-card-2025/terrestrial-snow-cover-2025/) | Celý text, metody a původní obrázky 1 a 4. |
| [Creative Commons BY 4.0](https://creativecommons.org/licenses/by/4.0/) | Zachován sdílený záznam; Biskabornova mapa má zvlášť uveden i podklad World Borders pod CC BY-SA 3.0, jak uvádí původní figura. |
| [NOAA, Arctic Terrestrial Carbon Cycling 2024](https://arctic.noaa.gov/report-card/report-card-2024/arctic-terrestrial-carbon-cycling/) | Z článku použita jen část věnovaná přímým měřením teploty permafrostu a obrázek 2. Kredit grafiky Christina Shintani. |
| [ESA, Permafrost](https://climate.esa.int/en/projects/permafrost/) | Portál projektu; konkrétní článek odkazuje na pevně vymezenou v5.0, nikoli neurčitý nejnovější produkt. |
| [NOAA, Using NOAA content](https://www.noaa.gov/office-education/outreach-communication/faq) | Nově přidané podmínky s požadavkem kreditu programu a uvedených osob. U figur ARC nebyla nalezena odlišná autorskoprávní výhrada; zachována grafika bez úprav a doplněn program i jmenný kredit. Odstraněno paušální tvrzení, že každý obrázek vytvořila přímo vláda USA. |

## Podstatné opravy výkladu

- IMS nezačíná přispívat do dlouhého CDR hned v roce 1997: překryv slouží ke srovnání a návaznost začíná v červnu 1999. Doplněna hranice 42 %, pondělní mapa a rozdíl mezi týdenní mapou a týdenním průměrem.
- GlobSnow: nezávislá kontrola denního produktu se nesmí zaměnit za nezávislou kontrolu měsíční opravy, k níž byly použity stejné sněhoměrné trasy. Vymezen mokrý sníh, hustota, horské maskování a měsíce dostupné opravy.
- Čtyři produkty ve zprávě NOAA nejsou čtyři zcela nezávislá měření roku 2025. Některé sdílejí vstupy a Snow CCI v3.1 končí v roce 2022. Červnový rozsah pod průměrem nepodporuje původní paušální tvrzení o podprůměrné hmotnosti.
- U Biskaborna 2019 jde o regresní trend v °C za desetiletí. Ne všech 123 míst má deset úplných let. Volí se čidlo nejblíže hloubce malého sezónního kolísání, nikoli automaticky nejhlubší čidlo. Popisuje se kvalita, seskupení blízkých vrtů a plošné vážení regionů.
- Odstraněn zavádějící souhrn 71/12/40 spojený s „úplným desetiletým výsledkem“: původní členění porovnává počáteční a koncové dvouleté průměry a není totožné s regresním výpočtem trendu.
- Strand 2021: 0,8 cm/rok pouze pro 37 průkazných trendů. Nové výsledky Streletskiy 2026 jsou uvedeny jako podíly sledovaných míst, nikoli podíly arktické plochy. Vysvětlen výběr lokalit, mezery a nesoulad rozsahu doprovodného CSV s celým rozborem.
- NOAA sněhová hmotnost: skutečný obrázek má jeden panel, nikoli panely (a)/(b). Aljaška: horní část teplotního grafu patří vnitrozemí v 15 m, dolní severu v 20 m; původní popisek byl obrácený. Popisky nyní odpovídají skutečně zobrazeným obrázkům.

## Odstraněné zdroje

Před odstraněním provedeno `rg` přes celý repozitář. Následující čtyři zdroje byly pouze v závěrečném seznamu tohoto článku, v katalogu a historických archivech; jiný článek, historie ani test je nepoužíval. Generovaný `app/data/sourceArchive.ts` a staré auditní manifesty nebyly ručně měněny.

- Brown a Robinson 2011, `10.5194/tc-5-219-2011`: otevřená, ale v dosavadním výkladu nepoužitá práce. Metodu vysvětluje Estilow 2015, současné arktické výsledky zpráva NOAA 2025.
- Mudryk et al. 2020, `10.5194/tc-14-2495-2020`: otevřená studie historických trendů a modelových projekcí bez konkrétní vazby v těle článku. Odstraněna nadbytečná bibliografická položka, nikoli údajně uzavřený zdroj.
- Pulliainen et al. 2020, `10.1038/s41586-020-2258-0`: stránka vydavatele poskytla předplatitelský náhled, ne ověřenou celou práci. Konkrétní výsledky i podrobné metody jsou veřejně uvedeny v Luojus et al. 2021, který je podporuje přímo. Netvrdíme, že jinde nemůže existovat autorská kopie.
- Thoman et al. 2025, `10.1175/BAMS-D-25-0104.1`: další položka bez použití v těle výkladu. Starý archivní manifest eviduje repozitář ORBi; odstranění není hodnocením otevřenosti. Aljašská měření dokládá plný text NOAA 2024 a CALM nová původní studie 2026.

## Kontroly

- `pnpm lint`: prošel.
- `pnpm audit:sources`: žádné chybějící identifikátory ani duplicitní zdroje/URL.
- `pnpm test`: produkční export 74 adres, všech 30 testů prošlo.
- Nový test ověřuje veřejné odkazy všech citovaných karet, oddělené DOI, nepřítomnost Drive, typy datových záznamů a opravená věcná rozlišení.
- Vizuální kontrola produkčního exportu: desktop 1440 × 1000 a mobil 390 × 844; nadpisy, slovníček, pět obrázků, popisky, zdrojové karty a jejich tlačítka. Posuv širokých grafů je omezen na obrazový kontejner.
- `git diff --check`: bez chyb; do změny nepatří lokální logy ani stažené pracovní podklady.

Po nasazení se kontroluje obsah konkrétního commitu, shoda všech 35 karet se sestavením a obsahové hashe pěti obrázků, nikoli jen dostupnost adresy.
