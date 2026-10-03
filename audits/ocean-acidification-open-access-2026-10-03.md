# Acidifikace oceánu: odborná kontrola a otevřené zdroje

Kontrola: 3. října 2026. Rozsah: `OceanAcidificationArticle.tsx`, související bibliografické záznamy a jejich odkazy. Po revizi článek používá 41 různých zdrojů, z toho 22 odborných prací a metodických dokumentů s DOI a veřejným plným textem. Zbývající zdroje jsou data, institucionální vysvětlení, obrazové a licenční podklady.

Tento záznam zachycuje ruční kontrolu obsahu a dostupnosti; nenahrazuje budoucí kontrolu odkazů. Vydavatelské HTML bylo ověřováno podle těla práce, PDF stažením a čtením. DOI identifikuje práci, samostatný odkaz v katalogu vede na plný text nebo data. Dostupnost není odvozena pouze z HTTP 200. Generovaný archiv `sourceArchive.ts` ani historické archivní manifesty se touto kontrolou nepřepisují.

## Věcné opravy

- Historie referenční vody vychází z Dicksonova vlastního popisu: zkušební distribuce 1990, certifikace nových šarží i pro alkalinitu od roku 1996. Popis odběru odpovídá příručce z roku 2007: předepsaná malá vzduchová mezera pro tepelnou roztažnost, obvykle přibližně 1 % objemu.
- Spektrofotometrie je doložena skutečným přístrojem Aßmanna a kol. (2011); u Durafetu jsou parametry Martze a kol. vztaženy k testům při atmosférickém tlaku. Standardní postupy, kalibrace a výpočet nejistot mají otevřené původní nebo autorské metodické podklady.
- Přímo změřené veličiny, chemický výpočet z vhodné dvojice vstupů a statistické doplnění map jsou důsledně rozlišeny. Celková stupnice pH a stupnice mořské vody se nesměšují. GLODAPv3 nemá pro pH a fCO₂ stejnou druhotnou kontrolu jako pro DIC a alkalinitu.
- U ALOHA jsou přímá pH měření omezena na roky 1992–1998 a 2003–2007. Sklon −0,0014 za rok se vztahuje k hodnotám převedeným na podmínky při odběru; nejde o laboratorní pH při 25 °C. Vypočtené pH z DIC a alkalinity pokrývá 1988–2007.
- Srovnání HOT v práci Ma a kol. používá 1989–2021, BATS 1992–2021. Sklon studie Ma zůstává pro 1982–2021, přestože novější OceanSODA v2025 sahá do roku 2024. Také trend Batese a Johnsona zůstává pro 1983–2023, přestože nová tabulka BATS obsahuje odběry do prosince 2025.
- Lauvset a kol. počítají podíl významných změn z 17 oceánských oblastí, nikoli z plochy oceánu. Pro období 1991–2011 mělo dostatek dat 15 oblastí. U Zhongovy rekonstrukce je 0,028 odmocnina průměru čtverců odchylek (v jednotkách pH), nikoli průměr čtverců.
- Atlantický průřez Ríose a kol. dokládá celkovou pozorovanou změnu mezi 1993–1994 a 2013. Oddělování příčin a projekce byly z tohoto pozorovacího výkladu odstraněny.
- Globální produkty sdílejí část vstupů SOCAT a GLODAP. Jejich shoda proto není prezentována jako shoda zcela nezávislých měřicích sítí. U grafu Copernicus je ±0,019 vysvětleno podle dokumentace produktu jako směrodatná odchylka zbytků, nikoli standardní nejistota sklonu.

## Vyřazené a nahrazené odkazy

Z původních 58 odkazů bylo vyřazeno 20 a přidány tři: Dickson (2010), Aßmann a kol. (2011) a BATS verze 10. Z centrálního katalogu bylo odstraněno 19 výhradních záznamů. Sdílený záznam zprávy WMO zůstal pro ostatní články zachován. Použití ID bylo před odstraněním prověřeno v celém repozitáři; historické archivní záznamy zůstávají nedotčeny.

| Vyřazený zdroj | Důvod a náhrada |
| --- | --- |
| Buch (1929), DOI 10.1093/icesjms/4.3.267 | Nebyl ověřen veřejný plný text; podrobný historický výklad nahrazen doloženým popisem NIST a Dicksona (2010). |
| DOI 10.1093/icesjms/5.3.401 | Jde o recenzi „Reviews“ autora A. P. O., nikoli Buchovu původní práci, jak naznačoval text článku. |
| Takahashi (1970), DOI 10.1029/JC075i036p07648 | Bez ověřeného otevřeného plného textu; historii návaznosti měření dokládá Dickson (2010). |
| Bradshaw (1981), DOI 10.1016/0012-821X(81)90090-X | Původní historická odbočka nahrazena otevřeným popisem vývoje a současnými standardními postupy. |
| Dickson (1984), DOI 10.1016/0016-7037(84)90225-4 | Stupnice a převody doloženy otevřenou metodickou prací Humphreyse a kol. (2022). |
| Johnson (1985, 1987), DOI 10.1016/0304-4203(85)90028-3 a 10.1016/0304-4203(87)90033-8 | Coulometrie vysvětlena z otevřené příručky a dokumentace laboratoře NOAA PMEL. |
| Clayton a Byrne (1993), DOI 10.1016/0967-0637(93)90048-8 | Bez ověřeného veřejného plného textu; konkrétní měřicí sestavu popisuje Aßmann a kol. (2011). |
| Bates (1996), DOI 10.1016/0967-0645(95)00093-3 | Historie a návaznost BATS doložena otevřenou původní studií Batese a Johnsona (2023). |
| Winn (1998), DOI 10.1016/S0304-4203(97)00085-6 | Měření HOT a vývoj pH doloženy otevřenou studií Doreho a kol. (2009). |
| Caldeira a Wickett (2003), DOI 10.1038/425365a; Orr a kol. (2005), DOI 10.1038/nature04095 | Modelování a projekce nejsou zdrojem pro definici současného pozorování. Nahrazeny staničními pracemi a pozorovacími rekonstrukcemi. |
| Dickson (2003), DOI 10.1016/S0304-4203(02)00133-0 | Referenční materiály a postupy doloženy otevřenými pracemi Dicksona (2007, 2010). |
| DOI 10.1016/j.marchem.2007.01.013 | Práce Houghama a Morana o stáří vody v pobřežních lagunách; původní text ji chybně připisoval Yaovi a Byrneovi a nečistotám pH barviva. Výklad opřen o Aßmanna a kol. (2011). |
| DOI 10.5194/bg-21-5561-2024 a 10.5194/os-20-725-2024 | Otevřené regionální práce bez potřebného tvrzení v tomto výkladu; odstraněny nadbytečné bibliografické položky, nikoli vyřazeny kvůli dostupnosti. |
| BATS verze 8 | Nahrazena ověřenou verzí 10, DOI 10.26008/1912/bco-dmo.3782.10. |
| Samostatné webové záznamy Copernicus pH a NCEI 0315582 | Sjednoceny s existujícími DOI záznamy téhož produktu. |
| WMO State of the Global Climate 2025 | Z článku odstraněn druhotný přehled; výsledky vycházejí přímo z původních studií a dat. Záznam v katalogu zůstává. |

## Přístup k datům

- BATS: na stránce BCO-DMO ověřena verze 10 z 24. července 2026 a období říjen 1988 až prosinec 2025. Přímý soubor CSV odpověděl HTTP 206 na požadavek úvodní části a obsahoval tabulkovou hlavičku, značky kvality a první odběry. Některé alternativní odkazy na stránce ještě nabízely verzi 8; katalog proto používá přímo soubor v10.
- Zhong: veřejná stránka skutečně obsahuje popis rekonstrukce 1992–2020, 41 hladin a rozlišení 1°. Rozhraní po otevření seznamu dat upozornilo, že stažení vyžaduje přihlášení. Článek tuto podmínku uvádí; stažení celého balíku nebylo provedeno.
- Fordův přepočtený SOCAT: ověřen veřejný záznam Zenodo s popisem a soubory. Přímé stahování prostřednictvím použitého skriptu narazilo na HTTP 403, veřejný záznam byl dostupný ve webovém nástroji. Celý rozsáhlý balík nebyl stahován.
- Ostatní datové odkazy byly ověřeny jako oficiální záznamy s dokumentací a přístupem k souborům. Otevřenost metadat a plných odborných textů se neztotožňuje s ověřením každého souboru mnohagigabajtových balíků.

## Technické ověření

`pnpm lint`, `pnpm audit:sources`, `pnpm test` a `git diff --check` prošly. Produkční build předvykreslil 74 adres a všech 26 testů uspělo. Nový test kontroluje skutečné HTML karet všech zdrojů článku: existenci karty, veřejný přístup, samostatný DOI u odborných prací a dat s DOI a nepřítomnost odkazů na Drive. Původní test minimálního počtu záznamů byl nahrazen kontrolou jejich jedinečnosti; vazby všech citací na katalog nadále kontroluje samostatný test a audit.

V prohlížeči ověřeny rozměry 1440 × 1000 a 390 × 844: navigace, perex a datum kontroly, běžný tok slovníčku, čtyři obrázky, čitelnost grafů a popisků, vodorovný posun grafu na mobilu a přechod z citace BATS na správnou kartu. Celá stránka ani stránka zdrojů vodorovně nepřetékají. Na kartách BATS v10 a příručky Dicksona (2007) vizuálně ověřena samostatná tlačítka DOI a veřejných dat či plného textu.

## Ověřené cíle odkazů

DOI a bibliografické údaje jsou v centrálním katalogu. Následuje veřejný cíl použitý po revizi; u dat jde podle typu zdroje o soubor nebo stránku poskytovatele.

| Zdroj | Veřejná verze |
| --- | --- |
| Nicholas Bates a kol. (2014): A Time-Series View of Changing Ocean Chemistry Due to Ocean Uptake of Anthropogenic CO₂ and Ocean Acidification | [Plný text](https://tos.org/oceanography/assets/docs/27-1_bates.pdf) |
| Danling Ma a kol. (2023): Four Decades of Trends and Drivers of Global Surface Ocean Acidification | [Plný text](https://www.research-collection.ethz.ch/server/api/core/bitstreams/3cd55c02-f828-4b4a-ae85-15def9324f52/content) |
| Thi-Tuyet-Trang Chau a kol. (2024): CMEMS-LSCE: a global, 0.25°, monthly reconstruction of the surface ocean carbonate system | [Plný text](https://essd.copernicus.org/articles/16/121/2024/) |
| NOAA (2026): A primer on pH | [Data / původní stránka](https://www.pmel.noaa.gov/co2/story/A%2Bprimer%2Bon%2BpH) |
| European Union-Copernicus Marine Service (2020): Global Ocean acidification - mean sea water pH time series and trend from Multi-Observations Reprocessing | [Data / původní stránka](https://data.marine.copernicus.eu/product/GLOBAL_OMI_HEALTH_carbon_ph_area_averaged/description) |
| National Institute of Standards and Technology (NIST) (2025): How Do You Measure the Acidity (pH) of the Ocean? – NIST | [Data / původní stránka](https://www.nist.gov/how-do-you-measure-it/how-do-you-measure-acidity-ph-ocean) |
| Andrew G. Dickson (2010): Standards for Ocean Measurements | [Plný text](https://tos.org/oceanography/assets/docs/23-3_dickson.pdf) |
| Nicholas R. Bates a Rodney J. Johnson (2023): Forty years of ocean acidification observations (1983–2023) in the Sargasso Sea at the Bermuda Atlantic Time-series Study site | [Plný text](https://www.frontiersin.org/journals/marine-science/articles/10.3389/fmars.2023.1289931/full) |
| John E. Dore a kol. (2009): Physical and biogeochemical modulation of ocean acidification in the central North Pacific | [Plný text](https://pmc.ncbi.nlm.nih.gov/articles/PMC2716384/) |
| S. Aßmann, C. Frank a A. Körtzinger (2011): Spectrophotometric high-precision seawater pH determination for use in underway measuring systems | [Plný text](https://os.copernicus.org/articles/7/597/2011/os-7-597-2011.pdf) |
| Todd R. Martz a kol. (2010): Testing the Honeywell Durafet® for seawater pH applications | [Plný text](https://www.ioccp.org/images/07instrumentsANDsensors/MartzT10.pdf) |
| International Argo Program (2026): Biogeochemical Argo | [Data / původní stránka](https://biogeochemical-argo.org/measured-variables-ph.php) |
| L.-Q. Jiang a kol. (2015): A metadata template for ocean acidification data | [Plný text](https://essd.copernicus.org/articles/7/117/2015/essd-7-117-2015.pdf) |
| NOAA (2026): Day 1: Images from the field - NOAA Ocean Acidification Program | [Data / původní stránka](https://oceanacidification.noaa.gov/day-1-images-from-the-field-wcoa2026/) |
| Andrew G. Dickson, Christopher L. Sabine a James R. Christian (eds.) (2007): Guide to Best Practices for Ocean CO₂ Measurements | [Plný text](https://www.ncei.noaa.gov/access/ocean-carbon-acidification-data-system/oceans/Handbook_2007/Guide_all_in_one.pdf) |
| Kenneth S. Johnson a kol. (2023): BGC-Argo quality control manual for pH | [Plný text](https://archimer.ifremer.fr/doc/00866/97828/106985.pdf) |
| NOAA (2026): Laboratory Analysis | [Data / původní stránka](https://www.pmel.noaa.gov/co2/story/Laboratory%20Analysis) |
| Dorothee C. E. Bakker a kol. (2016): A multi-decade record of high-quality f CO₂ data in version 3 of the Surface Ocean CO₂ Atlas (SOCAT) | [Plný text](https://essd.copernicus.org/articles/8/383/2016/) |
| Ernie Lewis a Douglas W. R. Wallace (1998): Program Developed for CO₂ System Calculations | [Plný text](https://www.ncei.noaa.gov/access/ocean-carbon-acidification-data-system/oceans/co2rprt.html) |
| James C. Orr a kol. (2018): Routine uncertainty propagation for the marine carbon dioxide system | [Plný text](https://par.nsf.gov/servlets/purl/10110258) |
| Matthew P. Humphreys a kol. (2022): PyCO₂SYS v1.8: marine carbonate system calculations in Python | [Plný text](https://gmd.copernicus.org/articles/15/15/2022/) |
| Brendan R. Carter a kol. (2023): Uncertainty sources for measurable ocean carbonate chemistry variables | [Plný text](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=936930) |
| Are Olsen a kol. (2016): The Global Ocean Data Analysis Project version 2 (GLODAPv2) – an internally consistent data product for the world ocean | [Plný text](https://essd.copernicus.org/articles/8/297/2016/essd-8-297-2016.pdf) |
| Lange, Nico a kol. (2026): The Global Ocean Data Analysis Project version 3 (GLODAPv3) – an internally consistent biogeochemical data product for the World Ocean (NCEI Accession 0315582) | [Data / původní stránka](https://www.ncei.noaa.gov/data/oceans/ncei/ocads/metadata/0315582.html) |
| Creative Commons (2026): Deed - Attribution 4.0 International - Creative Commons | [Data / původní stránka](https://creativecommons.org/licenses/by/4.0/) |
| Li-Qing Jiang a kol. (2026): Synthesis of data products for ocean carbonate chemistry | [Plný text](https://essd.copernicus.org/articles/18/1405/2026/) |
| Chuqing Zhang a kol. (2026): A systematic bias in float pH leads to overestimation of derived pCO₂ and underestimation of carbon uptake by the Southern Ocean | [Plný text](https://www.nature.com/articles/s41598-026-43863-4) |
| Bakker, Dorothee C. E. a kol. (2026): Surface Ocean CO₂ Atlas Database Version 2026 (SOCATv2026) (NCEI Accession 0315110) | [Data / původní stránka](https://socat.info/index.php/version-2026/) |
| Daniel J. Ford a kol. (2026): Recalculated (depth and temperature consistent) surface ocean CO₂ atlas (SOCAT) version 2026 | [Data / původní stránka](https://zenodo.org/records/20757579) |
| Nicholas Bates a kol. (2026): Discrete bottle samples collected at the Bermuda Atlantic Time-series Study (BATS) site in the Sargasso Sea from October 1988 through December 2025, version 10 | [Data / původní stránka](https://datadocs.bco-dmo.org/dataset/3782/file/QAD9QkVh9ORw3x/3782_v10_bats_bottle.csv) |
| Hawaii Ocean Time-series (HOT) (2026): HOT : the Hawaii Ocean Time-series | [Data / původní stránka](https://hahana.soest.hawaii.edu/hot/) |
| International Argo Program (2026): Biogeochemical Argo | [Data / původní stránka](https://biogeochemical-argo.org/data-access.php) |
| European Union-Copernicus Marine Service (2022): Global ocean acidification - mean sea water pH trend map from Multi-Observations Reprocessing | [Data / původní stránka](https://data.marine.copernicus.eu/product/GLOBAL_OMI_HEALTH_carbon_ph_trend/description) |
| Gregor, Luke a Gruber, Nicolas (2020): OceanSODA-ETHZ: A global gridded dataset of the surface ocean carbonate system for seasonal to decadal studies of ocean acidification (v2025) (NCEI Accession 0220059) | [Data / původní stránka](https://www.ncei.noaa.gov/access/metadata/landing-page/bin/iso?id=gov.noaa.nodc:0220059) |
| Guorong Zhong a kol. (2025): A global monthly 3D field of seawater pH over 3 decades: a machine learning approach | [Plný text](https://essd.copernicus.org/articles/17/719/2025/) |
| Guorong Zhong, Xuegang Li a Jinming Song (2023): Global Ocean Gridded Seawater pH During 1992–2020 at 0–2000 m Depth | [Data / původní stránka](https://msdc.qdio.ac.cn/data/metadata-special-detail?id=1681888486837194754&otherId=1681888486912692226&lan=en) |
| S. K. Lauvset a kol. (2015): Trends and drivers in global surface ocean pH over the past 3 decades | [Plný text](https://bg.copernicus.org/articles/12/1285/2015/bg-12-1285-2015.pdf) |
| Aida F. Ríos a kol. (2015): Decadal acidification in the water masses of the Atlantic Ocean | [Plný text](https://pmc.ncbi.nlm.nih.gov/articles/PMC4538673/) |
| NOAA (2022): Ocean Carbon and Acidification Data System (OCADS) | [Data / původní stránka](https://www.ncei.noaa.gov/products/ocean-carbon-acidification-data-system) |
| Ocean CO₂ Products project (2026): Ocean CO₂ Products | [Data / původní stránka](https://oceanco2.github.io/co2-products/) |
| NOAA (2026): NOAA's National Ocean Service - About Us | [Data / původní stránka](https://oceanservice.noaa.gov/about/faq.html) |
