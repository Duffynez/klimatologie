# První dva články Pozorování: audit zdrojů a opravy

## Stav po opravách — 2. listopadu 2026

Všech 15 označených nálezů je uzavřeno. Opraveny jsou také doplňkové bibliografické údaje a rozlišení roku přístupu u průběžných webů. Opravy jsou určeny k nasazení na GitHub Pages přes hlavní větev `main`. Výsledek nasazení se ověřuje v odpovídajícím běhu GitHub Actions a následnou kontrolou veřejných článků a karet zdrojů.

Rozsah zůstal zachován: **Globální teplota u povrchu** má 34 zdrojů, **Teplota stratosféry** 47, společně 79 různých zdrojů. Žádný citovaný identifikátor nebyl změněn. Aktuální karty obsahují 123 různých vnějších URL. Změnilo se 33 záznamů katalogu, včetně těch, kde se pouze výslovně označil rok přístupu.

| Nález | Stav | Provedená oprava nebo ověření |
| --- | --- | --- |
| V1 | Opraveno | RATPAC nyní porovnává stejný kalendářní měsíc v sousedních letech, poté změny prostorově průměruje a sčítá. |
| V2 | Opraveno | Odstraněn odkaz vydávající práci o ROM SAF za vyhodnocení CDAAC. Studie Gleisner 2020 zůstává u obecného vysvětlení měsíčních zákrytových produktů, parametry CDAAC mají samostatnou citaci jeho dokumentace. |
| V3 | Opraveno | Data vedou přímo do větve TLS v6.1. Text i tlačítka rozlišují současná data, katalog NASA pro verzi 6 a metodiku v6.0 z roku 2017. |
| A1 | Opraveno | Nefunkční PDF HadSST4 nahrazeno veřejným plným textem Kennedyho studie u vydavatele. |
| A2 | Vyřešeno dostupnou kopií | Doložen původ fotografie NOAA/AOML, autor původního článku a rok 2014. Karta nabízí přímou veřejnou kopii obrázku na Klimatologie.eu, původní odkaz výslovně označuje web v údržbě. Původní server zůstává v údržbě, jeho obnovu nemůžeme provést. |
| A3 | Opraveno | Technický hostname NOAA nahrazen funkční kanonickou adresou stránky Layers of the Atmosphere. |
| A4 | Opraveno | Obě akce plného textu Hansenových studií nyní vedou přímo na PDF NASA, nikoli na jejich abstrakty. |
| A5 | Opraveno | Dohledána konkrétní veřejná distribuce NOAA SSU v3.0 včetně AMSU-A a ATMS, poznámky k verzi a měsíční soubory. Článek uvádí skutečné dostupné pokrytí listopad 1978 až květen 2025 při kontrole 2. listopadu 2026. |
| M1 | Opraveno | Bibliografie Durre 2018 používá správný titul Enhancing the Data Coverage in the Integrated Global Radiosonde Archive. |
| M2 | Opraveno | Kapitola IPCC je datována 2021 a má autory příslušné kapitoly. Výroční oddíl Stratospheric Temperature je datován 2025, s autory W. J. Randel, C. Covey, L. Polvani a A. K. Steiner a stránkou S41. |
| M3 | Opraveno | Freeman/ICOADS sjednocen na rok časopiseckého vydání 2017. |
| L1 | Ověřeno | Samostatné veřejné stažení správného Callendarova PDF z existujícího archivního odkazu bylo úspěšně dokončeno. Původní omezení kontroly je uzavřeno. |
| L2 | Opraveno | Rochas 2002 má samostatný přímý odkaz na veřejné PDF vydavatele. Staženo a ověřeno správné znění na 13 stranách. |
| L3 | Opraveno | Pomalý odkaz HAL nahrazen veřejným celým článkem Randel 2009 u vydavatele. V prohlížeči ověřen obsah celého HTML včetně závěru. |
| L4 | Opraveno | Zpráva WMO má stabilní DOI a samostatné veřejné PDF na webu OSN. Stažen správný report WMO-No. 1391, 46 stran, ověřeny také citované výsledky. Případná ochrana WMO eLibrary již nebrání paralelnímu přístupu. |

Původní web NOAA/AOML zůstává v údržbě. Jeho obnovení není v naší správě. Čtenář má na kartě funkční tlačítko **Otevřít obrázek** a původní odkaz označený **Původní článek (web v údržbě)**. [Veřejná kopie fotografie](https://klimatologie.eu/media/gmst/noaa-drifting-buoy-deployment.jpg) byla v prohlížeči načtena jako obrázek 600 × 800 px.

Doplněn byl autor a přesný bibliografický záznam Rotchovy zprávy z roku 1902, autor a rozsah Rochasovy práce, skutečný rok technického přehledu NOAA-N (2004) a autoři i aktualizace Climate Data Guide (Randel a Starr, 2025). Licence NASA a NOAA jsou označeny jako licenční podmínky. U 19 průběžných webů karta a titulek citace uvádějí **přístup 2026**, aby se rok kontroly nezaměňoval s rokem vydání.

## Ověření oprav

- `pnpm lint`: prošlo.
- `pnpm audit:sources`: prošlo, 61 souborů článků, žádné chybějící identifikátory ani duplicity.
- `pnpm test`: prošlo produkční sestavení 95 cest a všech 113 testů.
- `git diff --check`: prošlo.
- Lokální náhled obou článků a opravených karet zkontrolován na počítači i mobilní šířce 390 px. Ověřena také skutečná navigace z citace fotografie na správnou kartu.
- Ověřeny skutečné cíle opravených odkazů. Callendarovo PDF bylo úspěšně staženo (18 stran), Rochasovo PDF (13 stran) i celý report WMO (46 stran) byly staženy a obsahově zkontrolovány. Kontrolní součty souborů, aktuální záznamy všech 79 zdrojů a důkazy k jednotlivým nálezům jsou v [protokolu JSON](C:/Users/Mates/Desktop/VScode/Klimatologie-eu/audits/observations-first-two-source-audit-2026-11-02.json) v oddílu `remediation`.

Obsahová kontrola ověřila postup RATPAC, oddělení CDAAC od ROM SAF, rozsah verzí UAH a skutečnou distribuci NOAA SSU. Samostatná jazyková kontrola posoudila srozumitelnost upravených odstavců a shodu textu tlačítek s jejich cíli.

## Původní audit před opravami

Následující text a původní části protokolu JSON zachovávají výchozí stav u commitu `8394dea53f52370e694cffcbaeddbec171363596`. Popisují zjištění před opravami, nikoli zbývající chyby. Původní čísla řádků se vztahují k tomuto výchozímu stavu.

Kontrola: 2. listopadu 2026. Výchozí commit: `8394dea53f52370e694cffcbaeddbec171363596`.

Prověřeny články **Globální teplota u povrchu** (34 zdrojů) a **Teplota stratosféry** (47 zdrojů): celkem **79 různých zdrojů a 120 různých vnějších URL na jejich kartách**. Všechny citované identifikátory měly na živém webu odpovídající kartu a alespoň jednu akci. Ověřena i skutečná navigace z citace na kartu. Všechny uvedené vnější URL byly otevřeny v prohlížeči; tím není řečeno, že všech 120 cílů prošlo bez výhrady.

**Výsledek:** odborná základna obou článků je převážně vhodná. Metodický výklad stojí hlavně na původních studiích a dokumentaci autorů dat, výsledky také na odborných syntézách. Není důvod plošně nahrazovat NASA, NOAA nebo WMO. Je však nutné opravit jeden chybný popis metody, přiřazení dvou datových produktů, několik čtenářských cest a bibliografické údaje. Články ani katalog zdrojů nebyly při auditu měněny.

### Co bylo kontrolováno

Četlo se použití zdroje v článku a příslušné části původních prací, dokumentace nebo datových stránek. Kritéria: soulad s tvrzením, vhodnost typu zdroje, totožnost autora/názvu/roku/DOI/verze a dostupnost slíbeného obsahu. Samotné funkční DOI nebo obecná úvodní stránka nejsou důkazem dostupného plného textu či konkrétních dat.

Nešlo o nezávislý přepočet klimatických řad ani o čtení každé stránky všech citovaných dokumentů. Na přání zadavatele není samostatným kritériem úplnost výkladu nejistot. Níže jsou odděleny doložené chyby od neuzavřené kontroly dostupnosti. Soupis všech zdrojů, rozsah posouzení a výsledek každé URL obsahuje [doprovodný protokol JSON](C:/Users/Mates/Desktop/VScode/Klimatologie-eu/audits/observations-first-two-source-audit-2026-11-02.json).

### Opravy obsahu a přiřazení zdrojů

#### V1 — RATPAC: sousední roky, nikoli sousední měsíce

Místo: [StratosphericCoolingArticle.tsx:313](C:/Users/Mates/Desktop/VScode/Klimatologie-eu/app/components/StratosphericCoolingArticle.tsx:313).

Text tvrdí, že metoda od roku 1996 nejprve počítá rozdíly sousedních měsíců. Citovaná původní práce počítá rozdíl **stejného kalendářního měsíce v sousedních letech**, například leden 1981 minus leden 1980, a teprve tyto rozdíly prostorově průměruje a sčítá. Nejde o kosmetickou nepřesnost: čtenář dostává jiný výpočet.

Doporučené znění: „Od roku 1996 nejprve počítá změnu mezi stejným kalendářním měsícem ve dvou sousedních letech u jednotlivých stanic…“ Zdroj je vhodný a má zůstat; opravit výklad. Důkaz: [Free et al., 2004, oddíl 2, s. 4172](https://www.arl.noaa.gov/wp_arl/wp-content/uploads/documents/JournalPDFs/FreeEtal.JClimate2004.pdf).

#### V2 — CDAAC: odkazované vyhodnocení patří ROM SAF

Místo: [StratosphericCoolingArticle.tsx:485](C:/Users/Mates/Desktop/VScode/Klimatologie-eu/app/components/StratosphericCoolingArticle.tsx:485).

Odkaz „Vyhodnocení dat“ v datové kartě CDAAC vede na Gleisnera et al. 2020. Tato práce vyhodnocuje **ROM SAF CDR v1.0**, nikoli uvedený produkt CDAAC. Společný měřicí princip a částečně vstupní mise nezaručují totožné zpracování. Dokumentace CDAAC dokonce výslovně rozlišuje svou cestu od korekcí použitých v ROM SAF.

Odkaz přejmenovat například na „Srovnání se zpracováním ROM SAF“, nebo jej nahradit skutečným vyhodnocením CDAAC. Obecné využití práce v odstavci o rádiových zákrytech může zůstat při správném vymezení. Důkazy: [Gleisner et al., 2020, abstrakt a oddíly 2–3](https://amt.copernicus.org/articles/13/3081/2020/), [CDAAC, Gridding details](https://www.cosmic.ucar.edu/RO_Climate_Data_Record).

#### V3 — UAH: pod nadpisem v6.1 je DOI pro verzi 6

Místo: [StratosphericCoolingArticle.tsx:438](C:/Users/Mates/Desktop/VScode/Klimatologie-eu/app/components/StratosphericCoolingArticle.tsx:438).

Adresář UAH skutečně obsahuje v6.1 a konkrétní TLS řada je veřejně čitelná. Naproti tomu tlačítko „DOI dat“ vede na katalog výslovně označený **Version 6**; připojená metodika z roku 2017 popisuje v6.0. Čtenář nemá být veden k domněnce, že DOI jednoznačně identifikuje právě uvedenou aktualizaci 6.1.

U dat odkázat přímo na větev v6.1/TLS a u staršího DOI a metodiky uvést jejich skutečný rozsah. Nový DOI nedoplňovat bez ověření. Důkazy: [NASA, katalog V6](https://www.earthdata.nasa.gov/data/catalog/ghrc-daac-msutls-6), [UAH, ověřený soubor TLS 6.1](https://www.nsstc.uah.edu/data/msu/v6.1/tls/tlsglhmam_6.1.txt). Jeden jiný soubor v témže adresáři vracel Forbidden; to neznamená nedostupnost celého produktu.

### Opravy čtenářských cest

| ID | Místo a pozorovaný výsledek | Doporučení |
| --- | --- | --- |
| A1 | Kennedy 2019, HadSST4: tlačítko plného textu vede na [PDF s chybou 404](https://www.metoffice.gov.uk/hadobs/hadsst4/HadSST4_accepted.pdf). Definice URL: [articleSources.ts:1511](C:/Users/Mates/Desktop/VScode/Klimatologie-eu/app/data/articleSources.ts:1511). | Veřejný celý článek byl ověřen u vydavatele přes [DOI](https://doi.org/10.1029/2018JD029867); použít jeho funkční plný text. Původní studii zachovat. |
| A2 | Zdroj fotografie bóje: [odkaz NOAA z roku 2014](https://www.aoml.noaa.gov/index.php/2014/08/06/noaas-array-of-drifting-ocean-buoys/) končí na obecné úvodní stránce AOML na doméně temp.aoml.oarcloud.noaa.gov. Použití: [GmstArticle.tsx:169](C:/Users/Mates/Desktop/VScode/Klimatologie-eu/app/components/GmstArticle.tsx:169). | Dohledat původní konkrétní fotografii nebo zvolit jinou s doloženým původem. Funkční homepage nestačí. |
| A3 | [Layers of the Atmosphere na technické doméně](https://prod-01-alb-www-noaa.woc.noaa.gov/jetstream/atmosphere/layers-of-atmosphere) vrací „No Service Found (Com1)“. Záznam: [articleSources.ts:789](C:/Users/Mates/Desktop/VScode/Klimatologie-eu/app/data/articleSources.ts:789). | Ověřená náhrada: [stejná stránka na www.noaa.gov](https://www.noaa.gov/jetstream/atmosphere/layers-of-atmosphere). |
| A4 | Hansen 1987 a Hansen 2010: „Otevřít plný text“ otevírá [první](https://www.giss.nasa.gov/pubs/abs/ha00700d.html) a [druhý abstrakt NASA](https://www.giss.nasa.gov/pubs/abs/ha00510u.html), z nichž je nutné teprve zvolit Get PDF. | Zdroje jsou dostupné, ale popisek a přímý cíl se rozcházejí. Ověřeny přímé PDF [1987](https://www.giss.nasa.gov/pubs/docs/1987/1987_Hansen_ha00700d.pdf) a [2010](https://www.giss.nasa.gov/pubs/docs/2010/2010_Hansen_ha00510u.pdf). |
| A5 | „NOAA SSU+AMSU v3.0“ v datové části vede na [obecný úvod MSAS](https://www.star.nesdis.noaa.gov/smcd/emb/mscat/introduction.php). Ani jeho Data Products neobsahovaly tento konkrétní slibovaný produkt. Místo: [StratosphericCoolingArticle.tsx:462](C:/Users/Mates/Desktop/VScode/Klimatologie-eu/app/components/StratosphericCoolingArticle.tsx:462). | Dohledat distribuci konkrétní řady a verze. Dokud není nalezena, obecný úvod označit jako dokumentaci, ne jako přístup k těmto datům. |

### Bibliografické opravy

- **M1 — Durre 2018:** [StratosphericCoolingArticle.tsx:691](C:/Users/Mates/Desktop/VScode/Klimatologie-eu/app/components/StratosphericCoolingArticle.tsx:691) vypisuje titul „Overview of the Integrated Global Radiosonde Archive Version 2“. Odkazované DOI ale patří práci **Enhancing the Data Coverage in the Integrated Global Radiosonde Archive**. Katalog má správný titul, chybný je text bibliografie článku. Důkaz: [původní záznam a veřejná kopie NOAA](https://repository.library.noaa.gov/view/noaa/44682).
- **M2 — Roky publikace:** kapitola 2 AR6 WGI je z **2021**, ne z katalogového roku 2026 ([articleSources.ts:772](C:/Users/Mates/Desktop/VScode/Klimatologie-eu/app/data/articleSources.ts:772)). „State of the Climate in 2024“ vyšlo **v srpnu 2025**, rok 2024 je rok pozorování ([articleSources.ts:687](C:/Users/Mates/Desktop/VScode/Klimatologie-eu/app/data/articleSources.ts:687)). U druhého zdroje uvést autory příslušného oddílu a typ výroční pozorovací syntéza. Důkazy: [IPCC, Climate Change 2021](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-2/), [State of the Climate, oddíl 2b6, s. S41](https://ametsoc.net/sotc2024/02GlobalClimate_SotC2024.pdf).
- **M3 — Freeman/ICOADS:** katalog uvádí 2016, článek 2017. Rok 2016 odpovídá prvnímu online zveřejnění a 2017 časopiseckému ročníku; jde o sjednocení konvence, ne záměnu práce. Důkaz: [záznam vydavatele](https://doi.org/10.1002/joc.4775).

Doplňkově zpřesnit popisné typy několika záznamů: licence NASA je licenční zdroj, dobový článek z roku 1902 historická zpráva a přehled Climate Data Guide má konkrétní autory. U nedatovaných webů nepoužívat automaticky rok přístupu jako rok vydání. Tyto úpravy mají nižší prioritu než výše uvedené chyby.

### Kde dostupnost není uzavřena

- **L1 — Callendar:** veřejný Drive prohlížeč načetl správné 18stránkové PDF a text bez přihlášení. Samostatné stažení se v použitém prohlížeči nepodařilo potvrdit. Nelze z toho vyvodit, že dokument není veřejný.
- **L2 — Rochas 2002:** DOI i odkazovaná stránka La Météorologie při kontrole zobrazily jen navigaci a obal webu, bez textu článku. Indexovaná metadata potvrzují práci; současnou čtenářskou cestu k celému textu je nutné znovu ověřit.
- **L3 — Randel 2009:** HAL opakovaně nedokončil navigaci. Nebyla prokázána chyba 404 ani paywall, ale dostupnost celé práce z této adresy není potvrzena.
- **L4 — WMO 2025:** stránka konkrétní zprávy funguje. Její navazující eLibrary zobrazila ověření člověka; plný report touto cestou při kontrole otevřen nebyl. Hlavní citovanou hodnotu podporuje i [veřejné shrnutí WMO](https://wmo.int/news/media-centre/earths-climate-swings-increasingly-out-of-balance), zahrnutí devíti produktů také [záznam tiskové konference OSN](https://www.unognewsroom.org/teleprompter/en/3060/wmo-presser-state-of-the-global-climate-2025-report/9190).

Některá DOI na AMS a PNAS rovněž zobrazila ochranu webu. U Yin 2024, Menne 2018 a Santer 2013 však existující paralelní veřejné odkazy na kartách skutečně poskytly správný text (NOAA, respektive PMC). Proto nejsou označeny za nedostupné studie.

### Co při kontrole obstálo

Původní práce o HadCRUT5, GISTEMP, GHCN, homogenizaci a družicových teplotách jsou pro použité role rozumně zvolené. U Steiner et al. 2020 odpovídají uvedené trendy konkrétním vrstvám i období 1979–2018; u Dubé et al. 2024 odpovídá ochlazování kolem 45 km uvedenému dlouhému období. Institucionální zdroje zde často představují přímo dokumentaci a distribuci dat, přístrojový standard nebo původ obrazového materiálu.

Nebyly označeny za chybu dvě zdánlivé neshody: současná řada Berkeley skutečně deklaruje HadSST4, ač její původní metodická práce používala HadSST3; RSS skutečně zveřejňuje TLS v4.0. U RSS byla ověřena celá cesta přes veřejné HTTP odkazy až k textovému souboru s měsíčními hodnotami bez registrace.

### Úplný seznam zdrojů

Tabulka určuje rozsah posouzení. Prázdný sloupec nálezu neznamená nezávislé potvrzení všech výsledků práce. Podrobné poznámky a kontrolované URL jsou v doprovodném JSON.

| Č. | Zdroj | Co bylo posouzeno | Nález / omezení |
| --- | --- | --- | --- |
| 1 | [James Hansen a Sergej Lebedeff (1987) — Global trends of measured surface air temperature](https://doi.org/10.1029/JD092iD11p13345) | Metoda slučování stanic a prostorové korelace; původní metodická studie. | A4 |
| 2 | [P. Brohan a kol. (2006) — Uncertainty estimates in regional and global observed temperature changes: A new data set from 1850](https://doi.org/10.1029/2005JD006548) | Výpočet HadCRUT3 a zpracování stanic; vhodná původní metodika. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 3 | [J. Hansen a kol. (2010) — GLOBAL SURFACE TEMPERATURE CHANGE](https://doi.org/10.1029/2010RG000345) | Metody GISTEMP a prostorové zpracování; vhodná původní práce. | A4 |
| 4 | [Robert A. Rohde a Zeke Hausfather (2020) — The Berkeley Earth Land/Ocean Temperature Record](https://doi.org/10.5194/essd-12-3469-2020) | Metoda Berkeley Land/Ocean; původní práce používá HadSST3. Současný datový soubor již deklaruje HadSST4. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 5 | [C. P. Morice a kol. (2021) — An Updated Assessment of Near‐Surface Temperature Change From 1850: The HadCRUT5 Data Set](https://doi.org/10.1029/2019JD032361) | Metoda HadCRUT5 a doplňování prostorového pokrytí. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 6 | [Xungang Yin a kol. (2024) — NOAAGlobalTemp Version 6: An AI-Based Global Surface Temperature Dataset](https://doi.org/10.1175/BAMS-D-24-0012.1) | NOAAGlobalTemp v6 a prostorové doplňování; metodická studie, nikoli kompletní dokumentace následné v6.1. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 7 | [Guy Stewart Callendar (1938) — The Artificial Production of Carbon Dioxide and its Influence on Temperature](https://doi.org/10.1002/qj.49706427503) | Historický původní článek; archivní kopie má správný titul, autora a rok. Detailní historické počty nejsou v této kontrole znovu odvozeny z tabulek. | L1 |
| 8 | [World Meteorological Organization (2021) — Guide to Instruments and Methods of Observation (WMO-No. 8)](https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/instruments-and-methods-of-observation-programme-imop/guide-instruments-and-methods-of-observation-wmo-no-8) | Oficiální přístrojová metodika; vhodný primární technický standard. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 9 | [Matthew J. Menne a kol. (2018) — The Global Historical Climatology Network Monthly Temperature Dataset, Version 4](https://doi.org/10.1175/JCLI-D-18-0094.1) | GHCN-M v4: měsíční staniční soubor, kontrola kvality a pokrytí. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 10 | [NASA (2021) — NASA Scientific Visualization Studio | Temperature Measurement Stations](https://svs.gsfc.nasa.gov/4961/) | Původ a datum mapy měřicích stanic jsou dohledatelné u autora vizualizace. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 11 | [J. J. Kennedy a kol. (2019) — An Ensemble Data Set of Sea Surface Temperature Change From 1850: The Met Office Hadley Centre HadSST.4.0.0.0 Data Set](https://doi.org/10.1029/2018JD029867) | Korekce lodních a bójových SST měření; vhodná původní práce. | A1 |
| 12 | [Eric Freeman a kol. (2016) — ICOADS Release 3.0: a major update to the historical marine climate record](https://doi.org/10.1002/joc.4775) | ICOADS 3: historická lodní pozorování, deníky a jejich sjednocení. | M3 |
| 13 | [NOAA (2014) — &raquo; NOAA’s Array of Drifting Ocean Buoys](https://www.aoml.noaa.gov/index.php/2014/08/06/noaas-array-of-drifting-ocean-buoys/) | Obrazový doprovod bóje: institucionální originál je vhodný typ, musí však zůstat dohledatelný konkrétní snímek. | A2 |
| 14 | [Christopher J. Merchant a kolektiv (2019) — Satellite-based time-series of sea-surface temperature since 1981 for climate applications](https://doi.org/10.1038/s41597-019-0236-x) | Satelitní SST, radiance a odvozená povrchová teplota; původní datová studie. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 15 | [Matthew J. Menne a Claude N. Williams (2009) — Homogenization of Temperature Series via Pairwise Comparisons](https://doi.org/10.1175/2008JCLI2263.1) | Párové porovnávání staničních řad a homogenizace. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 16 | [Nathan Lenssen a kol. (2024) — A NASA GISTEMPv4 Observational Uncertainty Ensemble](https://doi.org/10.1029/2023JD040179) | GISTEMPv4: 200 realizací map 1880–2020 doloženo v oddílu 5.3. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 17 | [Met Office (2026) — Met Office Hadley Centre observations datasets](https://hadleyserver.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.1.0.0/download.html) | Pevně uvedená verze HadCRUT5.1.0.0 odpovídá datové stránce. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 18 | [NASA (2026) — Data.GISS: GISS Surface Temperature Analysis (GISTEMP v4): Data Downloads](https://data.giss.nasa.gov/gistemp/data_v4.html) | GISTEMP v4, měsíční a roční tabulky s uvedeným základem. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 19 | [NASA (2026) — Data.GISS: GISTEMP Uncertainty Analysis: Observational Uncertainty Ensemble](https://data.giss.nasa.gov/gistemp/uncertainty/) | Doprovodný soubor k Lenssenovi 2024; odlišit od běžného aktuálního GISTEMP v4. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 20 | [NOAA (2026) — Index of /data/noaa-global-surface-temperature/v6.1/access/timeseries/](https://www.ncei.noaa.gov/data/noaa-global-surface-temperature/v6.1/access/timeseries/) | Časové řady NOAAGlobalTemp v6.1 odpovídají titulku a cestě. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 21 | [NOAA (2026) — Index of /data/noaa-global-surface-temperature/v6.1/access/gridded/](https://www.ncei.noaa.gov/data/noaa-global-surface-temperature/v6.1/access/gridded/) | Prostorová data NOAAGlobalTemp v6.1 odpovídají cestě. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 22 | [Boyin Huang a kol. (2026) — NOAA Global Surface Temperature Dataset (NOAAGlobalTemp), Version 6.1](https://doi.org/10.25921/vvaa-wq11) | DOI označuje konkrétně v6.1; správný doplněk k obecnější práci Yin 2024 o v6. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 23 | [Berkeley Earth (2026) — Data Overview - Berkeley Earth](https://berkeleyearth.org/data/) | Současná data Berkeley: hlavička globální řady potvrzuje HadSST4 a základ 1951–1980. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 24 | [NASA (2026) — Data.GISS: Surface Temperature: Animations](https://data.giss.nasa.gov/gistemp/animations/) | Původ animace GISTEMP, období a normalizace z popisu NASA. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 25 | [Copernicus (2026) — Graphics Gallery | Copernicus](https://climate.copernicus.eu/GCH2025-graphics-gallery) | Konkrétní graf globální teploty 1850–2025 a aktualizace odpovídají galerii. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 26 | [Copernicus (2026) — Licence to use Copernicus Products (rev. 12)](https://cds.climate.copernicus.eu/licences/licence-to-use-copernicus-products) | Licenční podmínky se mají citovat z licence; nejde o důkaz klimatického tvrzení. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 27 | [Intergovernmental Panel on Climate Change (2026) — Chapter 2: Changing State of the Climate System](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-2/) | AR6 WGI kap. 2 je vhodná odborná syntéza pro společný odhad 2011–2020. | M2 |
| 28 | [World Meteorological Organization (2026) — State of the Global Climate 2025](https://wmo.int/publication-series/state-of-global-climate/state-of-global-climate-2025) | Původní výroční syntéza WMO: hodnotu 1,43 ± 0,13 °C a zahrnutí devíti produktů podporují také veřejné zprávy WMO a OSN. Celý odkazovaný PDF report nebyl při této kontrole čten. | L4 |
| 29 | [Yu Kosaka a Shang-Ping Xie (2013) — Recent global-warming hiatus tied to equatorial Pacific surface cooling](https://doi.org/10.1038/nature12534) | Původní modelový experiment o pacifickém kolísání; článek jej prezentuje jako interpretaci, nikoli jako měření. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 30 | [NOAA (2021) — Global Historical Climatology Network monthly (GHCNm)](https://www.ncei.noaa.gov/products/land-based-station/global-historical-climatology-network-monthly) | Původní dokumentace a distribuce GHCN-M. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 31 | [NOAA (2021) — International Comprehensive Ocean-Atmosphere Data Set (ICOADS)](https://icoads.noaa.gov/) | Původní dokumentace a distribuce ICOADS. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 32 | [NOAA (2020) — NOAAGlobalTemp](https://www.ncei.noaa.gov/products/land-based-station/noaa-global-temp) | Současná dokumentace NOAAGlobalTemp v6.1, vstup ERSSTv6 a základ 1991–2020. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 33 | [NASA (2026) — Guidelines for using NASA Images and Media Guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/) | Podmínky použití obrazových materiálů NASA; obsahově vhodné. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 34 | [NOAA (2026) — NOAA's National Ocean Service - About Us](https://oceanservice.noaa.gov/about/faq.html) | Pravidla NOAA pro převzetí materiálů, role doprovodného licenčního zdroje. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 35 | [NOAA (2026) — Layers of the Atmosphere](https://prod-01-alb-www-noaa.woc.noaa.gov/jetstream/atmosphere/layers-of-atmosphere) | Institucionální vysvětlení vrstev atmosféry vhodné jako základní orientace; přesné uváděné výšky navázat na tento konkrétní text. | A3 |
| 36 | [Melissa Free a kol. (2005) — Radiosonde Atmospheric Temperature Products for Assessing Climate (RATPAC): A new data set of large‐area anomaly time series](https://doi.org/10.1029/2005JD006169) | Původní RATPAC, velkoplošné řady a vztah RATPAC-A/B. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 37 | [Peter W. Thorne a kol. (2005) — Revisiting radiosonde upper air temperatures from 1958 to 2002](https://doi.org/10.1029/2004JD005753) | HadAT, převod radiosond do klimatických řad a porovnávání stanic. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 38 | [Carl A. Mears a Frank J. Wentz (2009) — Construction of the Remote Sensing Systems V3.2 Atmospheric Temperature Records from the MSU and AMSU Microwave Sounders](https://doi.org/10.1175/2008JTECHA1176.1) | Původní metodika spojování MSU/AMSU RSS V3.2; vhodná pro princip měření, ne samostatný doklad aktuální v4.0. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 39 | [Cheng-Zhi Zou a Haifeng Qian (2016) — Stratospheric Temperature Climate Data Record from Merged SSU and AMSU-A Observations](https://doi.org/10.1175/JTECH-D-16-0018.1) | Původní spojení SSU a AMSU-A a význam váhových funkcí. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 40 | [A. K. Steiner a kol. (2020) — Observed Temperature Changes in the Troposphere and Stratosphere from 1979 to 2018](https://doi.org/10.1175/JCLI-D-19-0998.1) | Trendy 1979–2018 pro TLS a SSU1–3 odpovídají tabulce/výsledkům práce včetně uvedených hodnot. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 41 | [American Meteorological Society (1902) — The International Aeronautical Congress at Berlin](https://journals.ametsoc.org/view/journals/mwre/30/7/1520-0493-30_7_356.xml) | Dobový článek Monthly Weather Review 1902; primární historický pramen pro zprávu o tehdejších výstupech. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 42 | [Michel ROCHAS (2002) — Il y a un siècle. Le contexte scientifique de la surprenante découverte de la stratosphère](https://doi.org/10.4267/2042/36222) | Historická studie o objevu stratosféry je vhodná odborná sekundární literatura. | L2 |
| 43 | [Mark P. Baldwin a kol. (2019) — 100 Years of Progress in Understanding the Stratosphere and Mesosphere](https://doi.org/10.1175/AMSMONOGRAPHS-D-19-0003.1) | Odborný přehled historie a fyziky stratosféry; vhodný pro širší kontext. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 44 | [National Institute of Standards and Technology (NIST) (2022) — Tuning into Weather Forecasting | NIST](https://www.nist.gov/nist-museum/tuning-weather-forecasting) | Muzejní stránka původní instituce pro přístrojovou historii včetně Bureau 1929. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 45 | [NOAA (2026) — Radiosonde Observation](https://www.weather.gov/upperair/factsheet) | Oficiální popis radiosond, rádiového přenosu, délky a výšky letu. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 46 | [NOAA (2021) — Radiosonde Atmospheric Temperature Products for Assessing Climate (RATPAC)](https://www.ncei.noaa.gov/products/weather-balloon/radiosonde-atmospheric-temperature-products) | RATPAC: 85 stanic; A roční/sezónní průměry, B měsíční data. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 47 | [Melissa Free a kol. (2004) — Using First Differences to Reduce Inhomogeneity in Radiosonde Temperature Datasets](https://doi.org/10.1175/JCLI3198.1) | Metoda prvních diferencí porovnává stejný kalendářní měsíc v sousedních letech. Článek ji popisuje nesprávně; V1. | V1 |
| 48 | [NOAA (2026) — NASA/NOAA: přehled družic](https://www.cpc.ncep.noaa.gov/products/stratosphere/strat_a_f/NOAA-N.pdf) | Přístrojový přehled NOAA-N pro charakteristiky sondážních kanálů, nikoli současný klimatický produkt. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 49 | [University Corporation for Atmospheric Research (2026) — Stratospheric Temperature: Satellite Datasets Used to Quantify Lower, Middle, and Upper Stratospheric Temperatures | Climate Data Guide](https://climatedataguide.ucar.edu/climate-data/stratospheric-temperature-satellite-datasets-used-quantify-lower-middle-and-upper) | Expertní Climate Data Guide, autoři William Randel a Jon Starr, aktualizace srpen 2025. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 50 | [George A. Hajj a kol. (2004) — CHAMP and SAC-C atmospheric occultation results and intercomparisons](https://doi.org/10.1029/2003JD003909) | Původní výsledky a mezisrovnání rádiových zákrytů CHAMP a SAC-C. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 51 | [University Corporation for Atmospheric Research (2026) — RO Climate Data Record | Constellation Observing System for Meteorology Ionosphere and Climate](https://www.cosmic.ucar.edu/RO_Climate_Data_Record) | Přímá dokumentace CDAAC: březen 2002, 10–40 km, 200 m a způsob mřížkování. | V2 |
| 52 | [Michael Sommer a kol. (2023) — GRUAN characterisation and data processing of the Vaisala RS41 radiosonde](https://www.gruan.org/documentation/gruan/td/gruan-td-8) | Přístrojová a zpracovatelská dokumentace RS41, verze 1.0.0 z roku 2023. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 53 | [World Meteorological Organization (2023) — Global Observing System (GOS)](https://wmo.int/activities/global-observing-system-gos/global-observing-system-gos) | Oficiální popis sítě přibližně 1000 hornovzdušných stanic a dosahu 30 km. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 54 | [E. R. Kursinski, G. A. Hajj, J. T. Schofield, R. P. Linfield a K. R. Hardy (1997) — Observing Earth's atmosphere with radio occultation measurements using the Global Positioning System](https://doi.org/10.1029/97JD01569) | Původní metodika rádiových zákrytů a převodu na atmosférické profily. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 55 | [Hans Gleisner a kol. (2020) — Evaluation of the 15-year ROM SAF monthly mean GPS radio occultation climate data record](https://doi.org/10.5194/amt-13-3081-2020) | Práce vyhodnocuje produkt ROM SAF, ne popsaný CDAAC CDR; link Vyhodnocení dat je zavádějící; V2. | V2 |
| 56 | [Imke Durre a kol. (2018) — Enhancing the Data Coverage in the Integrated Global Radiosonde Archive](https://doi.org/10.1175/JTECH-D-17-0223.1) | Studie skutečně dokumentuje rozšíření pokrytí IGRA; nesouhlasí však titul vypsaný v bibliografii článku; M1. | M1 |
| 57 | [John R. Lanzante a kol. (2003) — Temporal Homogenization of Monthly Radiosonde Temperature Data. Part I: Methodology](https://doi.org/10.1175/1520-0442(2003)016%3C0224:THOMRT%3E2.0.CO;2) | Původní homogenizační metodika radiosond, vhodná pro popsané kontroly změn. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 58 | [Leopold Haimberger (2007) — Homogenization of Radiosonde Temperature Time Series Using Innovation Statistics](https://doi.org/10.1175/JCLI4050.1) | RAOBCORE, homogenizace pomocí odchylek od pozadí reanalýzy. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 59 | [Leopold Haimberger a kol. (2012) — Homogenization of the Global Radiosonde Temperature Dataset through Combined Comparison with Reanalysis Background Series and Neighboring Stations](https://doi.org/10.1175/JCLI-D-11-00668.1) | RICH a společná kontrola vůči sousedním stanicím a reanalýze. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 60 | [NOAA (2026) — Radiosonde Atmospheric Temperature Products for Assessing Climate (RATPAC), Version 2](https://www.ncei.noaa.gov/access/metadata/landing-page/bin/iso?id=gov.noaa.ncdc%3AC00978) | Metadatový záznam skutečné verze RATPAC v2. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 61 | [Cheng-Zhi Zou a Wenhui Wang (2011) — Intersatellite calibration of AMSU-A observations for weather and climate applications](https://doi.org/10.1029/2011JD016205) | Původní mezidružicová kalibrace AMSU-A; zdroj vhodný pro tento krok. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 62 | [Carl A. Mears a kol. (2011) — Assessing uncertainty in estimates of atmospheric temperature changes from MSU and AMSU using a Monte-Carlo estimation technique](https://doi.org/10.1029/2010JD014954) | Původní metoda Monte Carlo pro soubor zpracování RSS; citováno k odpovídající metodě. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 63 | [John R. Christy (2017) — Mean Layer Temperature – UAH: Climate Algorithm Theoretical Basis Document](https://www.ncei.noaa.gov/pub/data/sds/cdr/CDRs/Mean_Layer_Temperatures_UAH/AlgorithmDescription_01B-10.pdf) | UAH ATBD z roku 2017 popisuje verzi 6.0, ne sám o sobě následnou 6.1; V3. | V3 |
| 64 | [William J. Randel a kol. (2016) — Stratospheric Temperature Trends over 1979–2015 Derived from Combined SSU, MLS, and SABER Satellite Observations](https://doi.org/10.1175/JCLI-D-15-0629.1) | Původní sloučení SSU, MLS a SABER a výsledky 1979–2015. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 65 | [Imke Durre a kol. (2016) — Radiosonde Atmospheric Temperature Products for Assessing Climate (RATPAC), Version 2](https://doi.org/10.7289/V5SF2T7J) | DOI odpovídá RATPAC v2, nikoli jiné verzi. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 66 | [Remote Sensing Systems (2026) — Remote Sensing Systems](https://www.remss.com/missions/amsu/) | Oficiální dokumentace RSS, rozdíl kanálu a vrstvy; aktuální TLS v4.0 potvrzen konkrétním souborem. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 67 | [NOAA (2021) — Mean Layer Temperature - NOAA CDR](https://www.ncei.noaa.gov/products/climate-data-records/mean-layer-temperature-noaa) | Oficiální distribuce NOAA Mean Layer Temperature v5. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 68 | [Cheng-Zhi Zou a Xianjun Hao (2024) — NOAA Climate Data Record (CDR) of Mean Layer Temperature-NOAA, Version 5](https://doi.org/10.25921/tn91-wv50) | DOI odpovídá konkrétní verzi NOAA v5. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 69 | [NOAA (2026) — Center for Satellite Applications and Research - NOAA / NESDIS / STAR](https://www.star.nesdis.noaa.gov/smcd/emb/mscat/products.php) | Přímé produkty MSAS obsahují aktuální NOAA v5.0 a AMSU v2.0. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 70 | [University of Alabama in Huntsville (2026) — Index of /data/msu](https://www.nsstc.uah.edu/data/msu/) | Adresář skutečně nabízí v6.1; měsíční TLS soubor tlsglhmam_6.1.txt je čitelný. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 71 | [Roy W. Spencer a John R. Christy (2018) — AMSU/MSU Lowstratosphere Day/Month Temperature Anomalies and Annual Cycle V6](https://doi.org/10.5067/GHRC/AMSU-A/DATA401) | DOI a katalog výslovně označují Version 6. Za nadpisem v6.1 musí být rozdíl vysvětlen; V3. | V3 |
| 72 | [NOAA (2026) — Center for Satellite Applications and Research - NOAA / NESDIS / STAR](https://www.star.nesdis.noaa.gov/smcd/emb/mscat/introduction.php) | Obecný úvod MSAS nepotvrzuje ani přímo nezpřístupňuje slibovaný produkt SSU+AMSU v3.0; A5. | A5 |
| 73 | [William J. Randel a kol. (2009) — An update of observed stratospheric temperature trends](https://doi.org/10.1029/2008JD010421) | Přehled pozorovaných trendů stratosféry, správná původní studie z roku 2009. | L3 |
| 74 | [Dian J. Seidel a kol. (2016) — Stratospheric temperature changes during the satellite era](https://doi.org/10.1002/2015JD024039) | Původní srovnání změn stratosférické teploty během družicové éry. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 75 | [Kimberlee Dubé a kol. (2024) — Upper-stratospheric temperature trends: new results from the Optical Spectrograph and InfraRed Imager System (OSIRIS)](https://doi.org/10.5194/acp-24-12925-2024) | OSIRIS: přibližně −0,6 K/desetiletí 1979–2021 kolem 45 km odpovídá výsledkům; rozlišen kratší překryv OSIRIS. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 76 | [Andrea K. Steiner a kol. (2011) — GPS radio occultation for climate monitoring and change detection](https://doi.org/10.1029/2010RS004614) | Odborná metodická práce o využití RO pro sledování klimatické změny. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 77 | [Hans Gleisner a kol. (2022) — Monitoring global climate change using GNSS radio occultation](https://doi.org/10.1038/s41612-022-00229-7) | Srovnání klimatických změn pomocí GNSS RO; vhodná původní práce. | Bez zjištěného konkrétního rozporu v posouzeném použití |
| 78 | [American Meteorological Society (2024) — State of the Climate in 2024: Stratospheric Temperature](https://ametsoc.net/sotc2024/02GlobalClimate_SotC2024.pdf) | Výroční pozorovací syntéza: teploty v roce 2024, publikace srpen 2025. Katalog mylně uvádí rok 2024 a typ metodika; M2. | M2 |
| 79 | [Benjamin D. Santer a kol. (2013) — Human and natural influences on the changing thermal structure of the atmosphere](https://doi.org/10.1073/pnas.1305332110) | Původní atribuční studie; vhodná pro odlišené vysvětlení příčin, ne jako náhrada pozorovací řady. | Bez zjištěného konkrétního rozporu v posouzeném použití |
