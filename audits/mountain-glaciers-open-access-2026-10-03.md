# Horské ledovce: odborná kontrola a otevřené zdroje

Kontrola: 3. října 2026. Rozsah: `MountainGlaciersArticle.tsx`, související katalog zdrojů, datum revize a test vykreslených karet. Článek po revizi používá 25 různých zdrojů včetně devíti původních studií. Všechny studie mají oddělený odkaz na DOI a legálně veřejný plný text. Karty tohoto článku nevyužívají Google Drive.

## Věcné opravy

- Výškový model ukazuje vzestup nebo pokles povrchu, nikoli přímo hmotnost. Doplněn princip stereoskopických snímků ASTER, zarovnání modelů podle stabilního terénu, součet objemových změn a vliv zhutňování firnu. Převod 850 ± 60 kg/m³ není univerzální hustota ledu; jeho meze vycházejí z Husse (2013).
- Terénní tyče a sondy sledují především povrchovou bilanci. Doplněny chybějící složky, vliv termínů a rozmístění měření a kontrola geodetickými výsledky podle O’Neela a kol. (2019).
- Dussaillant a kol. (2025) používají 1σ, zatímco zpráva WGMS 2026 výslovně uvádí 1,96σ, tedy 95% intervaly. Také citované výsledky Hugonneta a GlaMBIE mají 95% intervaly. Vysvětlen význam pokrytí a podmínky porovnání šířky intervalů.
- Mapa přibližně 500 terénně sledovaných ledovců není počet záznamů dostupných každý rok. Zpráva WGMS za rok 2025 popisuje přibližně 150 terénních záznamů. Dlouhodobé družicové pokrytí je mnohem širší než přímé každoroční terénní pokrytí.
- Globální produkty neslouží jako tři zcela nezávislé měřicí sítě: Hugonnetovy výškové změny vstupují do dlouhodobé kalibrace ročního produktu WGMS i do GlaMBIE. Srovnání metod zůstává užitečné, ale sdílené vstupy omezují nezávislost chyb.
- GlaMBIE shromáždila 233 odhadů od 35 týmů; do výsledného sloučení zařadila 195 a vyřadila 38 podle regionální použitelnosti metod. Nejde o prostý průměr všech shromážděných čísel.
- Součty WGMS 2026 a GlaMBIE nezahrnují hmotnostní změny pod vodní hladinou. Převod na milimetry mořské hladiny je přepočtem téhož hmotnostního výsledku, nikoli nezávislým měřením hladiny.
- Odlišena aktuální nabídka RGI v7 od RGI v6 použitého v citovaných výpočtech. Doplněn zdroj verze 6. Nový inventář automaticky neaktualizuje publikované výsledky starších studií.
- AMCE z 10. února 2026 končí rokem 2025; katalog CDS při kontrole uváděl 1975/76–2023/24. Článek již neslibuje stejné nejnovější pokrytí na obou místech.
- Potvrzeny hlavní výsledky: WGMS −408 ± 132 Gt za rok 2025 a −9 583 ± 1 211 Gt od roku 1975; Hugonnet 267 ± 16 Gt/rok pro 2000–2019; GlaMBIE −6 542 ± 387 Gt pro 2000–2023. Regionální pořadí v závěrečném shrnutí má výslovně uvedené období.
- Rozdíl −9 581 Gt v obrázku Copernicus a −9 583 Gt ve zprávě WGMS je popsán bez nedoloženého vysvětlení zaokrouhlením. Přepočty na hladinu pocházejí z primární studie, nikoli z doprovodného institucionálního přehledu.
- U obrázků doplněno vysvětlení zkratek a opraveny deklarované rozměry podle skutečných souborů. Oba grafy jsou na mobilu vodorovně posuvné stejně jako mapa; celé stránce nepřibývá vodorovné přetékání.

## Změny katalogu

Před odstraněním bylo použití ID prohledáno v celém repozitáři. Žádný ze tří vyřazených záznamů neměl použití v jiném aktivním článku nebo historii. Generovaný `sourceArchive.ts`, historické manifesty a stažený archiv se nemění.

| Vyřazený záznam | Důvod a náhrada |
| --- | --- |
| Zemp a kol. (2019), DOI 10.1038/s41586-019-1071-0 | Pouze položka závěrečné bibliografie, bez vlastního tvrzení ve výkladu. Novější globální výsledky mají vlastní primární zdroje. Důvodem odstranění není tvrzení, že práce nemá otevřenou verzi. |
| Samostatná webová karta RGI v7 | Duplicitní záznam stejného inventáře; citace sloučena pod existující DOI 10.5067/F6JMOVY5NAVZ. |
| Samostatná karta WGMS „database versions“ | Duplicitní cesta k FoG; verze i dokumentace jsou nyní na jedné kartě s DOI 10.5904/wgms-fog-2026-02-10. |

Přidán RGI v6, DOI 10.7265/4m1f-gd79. K existujícím stabilním ID glosáře Cogleyho a databáze GLIMS doplněny jejich ověřené DOI 10.5167/uzh-53475 a 10.7265/N5V98602; ID se nepřejmenovala. Opraveny bibliografické názvy příruček, autorství, rok fotografií a chybně uložená HTML entita v názvu časopisu. Rok 2005 u GLIMS je rokem vydání průběžně aktualizované databáze podle doporučené citace, nikoli koncem jejího pokrytí.

## Dostupnost a meze kontroly

Plné texty byly čteny v HTML nebo stažených PDF, včetně metodických částí. Odpověď HTTP 200 ani abstrakt nebyly považovány za dostačující důkaz dostupnosti. U Nutha a Husse odkaz vede na celé PDF, protože původní vstupní stránky obsahují jen abstrakt.

Hugonnet (2021) je dostupný jako recenzovaný rukopis v repozitáři WSL/Lib4RI (27 stran). Abstrakt rukopisu i publikovaný abstrakt uvádějí 267 Gt/rok; v těle rukopisu se objevuje 266 Gt/rok. Článek zachovává publikovanou hodnotu 267. Zpráva WGMS (2026) byla přečtena v úplném recenzovaném rukopisu University of Liverpool. Vydavatel nabízí jen placený přístup k celému textu; odkaz na plný text proto nevede k vydavateli. Datové DOI v rukopisu končí datem 2026-02-11, ale aktuální oficiální katalog a fungující archivy uvádějí 2026-02-10; citujeme ověřené datové vydání.

U FoG, AMCE a GlaMBIE byly ověřeny skutečné odpovědi datových archivů včetně signatury ZIP. Archiv GlaMBIE byl stažen celý; zkontrolována dokumentace a tabulka `glambie_results_20240716/calendar_years/0_global.csv`. Velké archivy FoG a AMCE nebyly celé stahovány. Kontrola nenahrazuje vlastní reprodukci globálního výpočtu.

Datový portál SEDOO/Theia pro Hugonnetův soubor v testovacím prohlížeči nedokončil načtení. Veřejný katalogový záznam byl přečten přes oficiální API (`https://api.sedoo.fr/theia-catalogue-prod/metadata/c428c5b9-df8f-4f86-9b75-e04c778e29b9`): obsahuje shodné DOI, popis veličin, jednotek, CSV a rastrů a licenci CC BY 4.0; uvádí přístup bez registrace. Odkaz na datový katalog zůstává původní. Stažení konkrétních souborů přes jeho interaktivní rozhraní nebylo ověřeno.

Stránky USGS byly dostupné webovým čtecím nástrojem a označují obrázky jako Public Domain; některé přímé automatické požadavky vracely 403 nebo timeout. Kredity Grinnellovy dvojice byly navíc zkontrolovány přímo v obrázku. Grafy Copernicus zůstávají beze změny a se zachovaným kreditem a licenčním odkazem.

## Kontroly implementace

- `pnpm lint`, `pnpm audit:sources`, `pnpm test` a `git diff --check`.
- Statický export 74 adres; 28 obsahových testů včetně veřejných odkazů a absence Drive u všech zdrojů článku.
- Desktop 1440 × 1000 a mobil 390 × 844: hlavička, slovníček, text, pět načtených obrázků, popisky, zdrojové karty a vodorovný posuv grafů. Posuv ověřen i klávesnicí.
- Nasazení této revize a konkrétní nový obsah se ověřují po pushi do `main`; identita nasazeného commitu a výsledek jsou uvedeny v závěrečné zprávě úkolu.

## Přehled odkazovaných veřejných verzí

Následující tabulka rozlišuje plné odborné texty od datových katalogů, kódu a institucionálních podkladů. Poznámka o neověřeném interaktivním stažení SEDOO platí i pro příslušný řádek.

| Zdroj | Veřejná verze |
| --- | --- |
| Glossary of Glacier Mass Balance and Related Terms [DOI](https://doi.org/10.5167/uzh-53475) | [Veřejný zdroj](https://wgms.ch/downloads/Cogley_etal_2011.pdf) |
| Guide to Instruments and Methods of Observation, Volume II – Measurement of Cryospheric Variables | [Veřejný zdroj](https://wgms.ch/downloads/WMO-8-vII-2024_en.pdf) |
| Community estimate of global glacier mass changes from 2000 to 2023 [DOI](https://doi.org/10.1038/s41586-024-08545-z) | [Veřejný zdroj](https://www.nature.com/articles/s41586-024-08545-z) |
| Grinnell Glacier Pair | [Veřejný zdroj](https://www.usgs.gov/media/images/grinnell-glacier-pair) |
| 125 years of internationally coordinated glacier monitoring: achievements and future challenges | [Veřejný zdroj](https://wgms.ch/downloads/WGMS2020_SummaryReport1894-2019.pdf) |
| Historically unprecedented global glacier decline in the early 21st century [DOI](https://doi.org/10.3189/2015JoG15J017) | [Veřejný zdroj](https://www.cambridge.org/core/journals/journal-of-glaciology/article/historically-unprecedented-global-glacier-decline-in-the-early-21st-century/2F1E3ACB111A03F9BA83D11439F5D681) |
| Mass Balance Studies in Kebnekajse [DOI](https://doi.org/10.3189/S002214300002757X) | [Veřejný zdroj](https://www.cambridge.org/core/journals/journal-of-glaciology/article/mass-balance-studies-in-kebnekajse/70847C791ECD897CF8F1EE494930FF6B) |
| Accelerated global glacier mass loss in the early twenty-first century [DOI](https://doi.org/10.1038/s41586-021-03436-z) | [Veřejný zdroj](https://www.dora.lib4ri.ch/wsl/islandora/object/wsl%3A27038/datastream/PDF2/Hugonnet-2021-Accelerated_global_glacier_mass_loss-%28accepted_version%29.pdf) |
| Annual mass change of the world's glaciers from 1976 to 2024 by temporal downscaling of satellite data with in situ observations [DOI](https://doi.org/10.5194/essd-17-1977-2025) | [Veřejný zdroj](https://essd.copernicus.org/articles/17/1977/2025/) |
| Global glacier mass change in 2025 [DOI](https://doi.org/10.1038/s43017-026-00777-z) | [Veřejný zdroj](https://livrepository.liverpool.ac.uk/3197897/1/WGMS_GlacierMassChange_2025_NREE-CC_manuscript_v1_v2026-02-13_clean.pdf) |
| Randolph Glacier Inventory - A Dataset of Global Glacier Outlines, Version 7 [DOI](https://doi.org/10.5067/F6JMOVY5NAVZ) | [Veřejný zdroj](https://nsidc.org/data/nsidc-0770/versions/7) |
| Reanalysis of the US Geological Survey Benchmark Glaciers: long-term insight into climate forcing of glacier mass balance [DOI](https://doi.org/10.1017/jog.2019.66) | [Veřejný zdroj](https://www.cambridge.org/core/journals/journal-of-glaciology/article/reanalysis-of-the-us-geological-survey-benchmark-glaciers-longterm-insight-into-climate-forcing-of-glacier-mass-balance/8C7B11056F0A16E78113D59F50A680D8) |
| Ablation Stake on Wolverine Glacier | [Veřejný zdroj](https://www.usgs.gov/media/images/ablation-stake-wolverine-glacier) |
| Co-registration and bias corrections of satellite elevation data sets for quantifying glacier thickness change [DOI](https://doi.org/10.5194/tc-5-271-2011) | [Veřejný zdroj](https://tc.copernicus.org/articles/5/271/2011/tc-5-271-2011.pdf) |
| Density assumptions for converting geodetic glacier volume change to mass change [DOI](https://doi.org/10.5194/tc-7-877-2013) | [Veřejný zdroj](https://tc.copernicus.org/articles/7/877/2013/tc-7-877-2013.pdf) |
| Climate Indicators: Glaciers | [Veřejný zdroj](https://climate.copernicus.eu/climate-indicators/glaciers) |
| Fluctuations of Glaciers (FoG) Database, release 2026-02-10 [DOI](https://doi.org/10.5904/wgms-fog-2026-02-10) | [Veřejný zdroj](https://wgms.ch/data_databaseversions/) |
| Randolph Glacier Inventory - A Dataset of Global Glacier Outlines, Version 6 [DOI](https://doi.org/10.7265/4m1f-gd79) | [Veřejný zdroj](https://nsidc.org/data/nsidc-0770/versions/6) |
| GLIMS Glacier Database, Version 1 [DOI](https://doi.org/10.7265/N5V98602) | [Veřejný zdroj](https://www.glims.org/glacierdata/) |
| Annual mass-change estimates for the world's glaciers, release 2026-02-10 [DOI](https://doi.org/10.5904/wgms-amce-2026-02-10) | [Veřejný zdroj](https://wgms.ch/mass_change_estimates/) |
| Glacier mass change gridded data from 1976 to present derived from the Fluctuations of Glaciers Database [DOI](https://doi.org/10.24381/cds.ba597449) | [Veřejný zdroj](https://cds.climate.copernicus.eu/datasets/derived-gridded-glacier-mass-change?tab=overview) |
| Glacier Mass Balance Intercomparison Exercise (GlaMBIE) [DOI](https://doi.org/10.5904/wgms-glambie-2024-07) | [Veřejný zdroj](https://wgms.ch/data_glambie/) |
| Accelerated global glacier mass loss in the early twenty-first century - Dataset. [DOI](https://doi.org/10.6096/13) | [Veřejný zdroj](https://www.sedoo.fr/theia-publication-products/?uuid=c428c5b9-df8f-4f86-9b75-e04c778e29b9) |
| ww_tvol_study: code and results of Hugonnet et al. (2021) | [Veřejný zdroj](https://github.com/rhugonnet/ww_tvol_study) |
| Licence to use Copernicus Products (rev. 12) | [Veřejný zdroj](https://cds.climate.copernicus.eu/licences/licence-to-use-copernicus-products) |
