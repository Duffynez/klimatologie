# Změna hmotnosti ledových příkrovů: odborná revize a otevřené zdroje

Datum kontroly: 3. října 2026. Článek: `app/components/IceSheetsArticle.tsx`, veřejná adresa `/pozorovani/nestabilita-prikrovu/`.

Článek po revizi používá **27 jedinečných zdrojů**, z toho **13 odborných prací**, pět datových souborů s DOI a devět institucionálních zdrojů, dokumentací či portálů. Všech 13 odborných prací bylo otevřeno v úplném textu a jejich relevantní metody a výsledky porovnány s tvrzeními článku. Kontrola nebyla omezena na abstrakty, metadata ani návratový kód HTTP.

Všechny citované práce mají samostatný odkaz na DOI a veřejný plný text. Karty těchto 27 zdrojů nepoužívají Google Drive. U dvou datových vydání IMBIE je ovšem níže doložen výpadek veřejného archivu; ověřený plný text studie se nesmí zaměňovat za ověřené stažení dat.

## Odborné práce a skutečně otevřené plné texty

| Práce / DOI | Veřejný plný text | Co bylo ověřeno |
| --- | --- | --- |
| Brooks et al. (1978), `10.1038/274539a0` | [NASA NTRS, sborník přetisků, PDF str. 18–22](https://ntrs.nasa.gov/api/citations/19810013163/downloads/19810013163.pdf#page=18) | Úplný článek Nature, tištěné str. 539–543, nikoli pouze titulní stránka sborníku. GEOS-3, mapa jižního Grónska, návrh opakovaných profilů. |
| Rignot a Thomas (2002), `10.1126/science.1073888` | [Autorská kopie UCI](https://www.ess.uci.edu/~erignot/publications/RignotThomasScience2002.pdf) | Pětistránkový text, přehled metod, vstup–výstup, výška povrchu, nejistoty kontinentální bilance. |
| Velicogna a Wahr (2006), `10.1126/science.1123785` | [WHOI, úplný přetisk](https://website.whoi.edu/gfd/wp-content/uploads/sites/14/2018/10/time_variable_grav_118264.pdf) | Antarktida, 34 měsíčních map od dubna 2002 do srpna 2005, gravitační korekce. PDF úspěšně získáno přes systémový HTTPS klient po chybě certifikačního řetězce v Pythonu; ochrana TLS nebyla vypnuta. |
| Shepherd et al. (2012), `10.1126/science.1228102` | [NASA NTRS](https://ntrs.nasa.gov/api/citations/20140006608/downloads/20140006608.pdf) | Úplná hlavní práce, nejen supplement. První IMBIE 1992–2011, sjednocení tří měřicích postupů. Na repozitář se pouze odkazuje, přetisk se nepublikuje na našem webu. |
| IMBIE Team (2018), `10.1038/s41586-018-0179-y` | [UCL Discovery, přijatý rukopis](https://discovery.ucl.ac.uk/id/eprint/10076800/7/Gilbert%2024845.pdf) | Antarktida do roku 2017, úplný rukopis včetně metod. |
| IMBIE Team (2020), `10.1038/s41586-019-1855-2` | [DTU Orbit, přijatý rukopis](https://backend.orbit.dtu.dk/ws/files/256074422/Mass_balance_of_the_Greenland_Ice_Sheet_from_1992_to_2018.pdf) | Grónsko do roku 2018. Bibliografický rok sjednocen na 2020 podle časopiseckého vydání; online publikace proběhla v roce 2019. |
| Otosaka et al. (2023), `10.5194/essd-15-1597-2023` | [ESSD, plný HTML text a PDF](https://essd.copernicus.org/articles/15/1597/2023/) | Oddíly 3–4, rovnice 3–7, tabulka 2 a obrázky 3–4. Hmotnost 7 563 ± 699 Gt; oddělení metod, jejich neshody, okrajové ledovce a výpočet nejistoty. |
| Otosaka et al. (2023), `10.1007/s10712-023-09795-8` | [Springer, otevřený metodický přehled](https://link.springer.com/article/10.1007/s10712-023-09795-8), [ověřené úplné PDF](https://link.springer.com/content/pdf/10.1007/s10712-023-09795-8.pdf) | Přístroje, firn, hustota, gravitační korekce, vstup–výstup a sdílené pomocné modely. |
| Tapley et al. (2019), `10.1038/s41558-019-0456-2` | [PMC, úplný autorský rukopis](https://pmc.ncbi.nlm.nih.gov/articles/PMC6750016/) | Přímé měření GRACE, převod na změnu hmoty, negravitační síly, pohyb podloží a prostorové rozlišení. |
| Rignot et al. (2019), `10.1073/pnas.1812883116` | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6347714/) | Metoda vstup–výstup v Antarktidě, rychlost a tloušťka ledu, způsob doplnění neúplných měření. |
| Mouginot et al. (2019), `10.1073/pnas.1904242116` | [ORBi, Université de Liège](https://orbi.uliege.be/bitstream/2268/301925/1/Mouginot_PNAS_2019.pdf) | Grónská bilance, předpoklad shody povrchové a hloubkově průměrné rychlosti u výstupních profilů, neúplně měřené ledovce. |
| Nilsson a Gardner (2026), `10.5194/essd-18-1729-2026` | [ESSD](https://essd.copernicus.org/articles/18/1729/2026/) | Šest misí 1992–2023, dva modely firnu, letecká kontrola 1993–2019, oddíly 4 a 5.2, tabulka 3. Rozlišení příkrovu a okolních ledovců. |
| Otosaka et al. (2026), `10.1038/s41597-026-08088-0` | [Scientific Data, otevřený úplný článek](https://www.nature.com/articles/s41597-026-08088-0) | Práce zveřejněná 16. září 2026. Metody, výsledky a technická validace: 42 odhadů, 27 misí, váhy, doplnění okolních ledovců, tabulky 3–4, srovnání s předchozím vydáním. |

## Datové a institucionální zdroje

| Zdroj | Ověření a hranice kontroly |
| --- | --- |
| IMBIE 1992–2020, [DOI](https://doi.org/10.5285/77b64c55-7166-4a06-9def-2e400398e452) | DOI směřuje na [BAS 01477](https://data.bas.ac.uk/full-record.php?id=GB/NERC/BAS/PDC/01477). Server vrací HTTP 200, ale obsah oznamuje „This service is temporarily unavailable“. Přímý záznam v RAMADDA vracel 503. Stažení CSV nebylo ověřeno. Struktura souboru a výsledky doloženy úplnou metodickou prací a oficiálním přehledem vydání. |
| IMBIE do roku 2023, [DOI](https://doi.org/10.5285/128c5e33-5224-4197-82f0-19dcc95b80a0) | DOI směřuje na [BAS 02074](https://data.bas.ac.uk/full-record.php?id=GB/NERC/BAS/PDC/02074); stejný výpadek, RAMADDA 503. Nové vydání je uvedeno v článku i na IMBIE Downloads. Stažení deseti CSV nebylo ověřeno. Text na webu výpadek výslovně datuje. |
| JPL RL06.3Mv04, [DOI](https://doi.org/10.5067/TEMSC-3JC634) | [PO.DAAC](https://podaac.jpl.nasa.gov/dataset/TELLUS_GRAC-GRFO_MASCON_CRI_GRID_RL06.3_V4): ověřena verze, vydání v roce 2023, síť 0,5° a výrazně hrubší skutečné rozlišení. Vědecké soubory vyžadují bezplatný Earthdata účet; přihlášené stažení nebylo prováděno. |
| Copernicus, [DOI](https://doi.org/10.24381/cds.38b9366c) | [CDS](https://cds.climate.copernicus.eu/datasets/satellite-ice-sheet-mass-balance?tab=overview): pokrytí 2003–2023, verze 5, CSR RL06.02, aktualizace katalogu 27. října 2025, bez plánovaných aktualizací, CC BY 4.0. Ověřena dokumentace; neprobíhala nová objednávka dat v CDS. |
| ITS_LIVE, [DOI](https://doi.org/10.5067/ICFVI7DKHZJV) | DOI a metadata DataCite ukazují přímo na [NetCDF Greenland_G1920V01_IceSheetGlacierIceHeight.nc](https://its-live-data.s3.amazonaws.com/height_change/Greenland/Greenland_G1920V01_IceSheetGlacierIceHeight.nc). Anonymní přenos úspěšný, 1 853 161 765 bajtů, signatura HDF. Jde o dostupnost dat, nikoli o nezávislý přepočet hmotnosti. Čtenář je upozorněn na přímé stažení přibližně 1,85 GB. |
| [NASA SVS 31166](https://svs.gsfc.nasa.gov/31166/) | Ověřena stránka, obraz, období duben 2002 – březen 2025 a průměry 264 a 135 Gt/rok. Původní stránka z roku 2024 byla aktualizována v prosinci 2025; kredit použitého obrazu je 2025. |
| [NASA Ice Sheets Indicator](https://science.nasa.gov/earth/explore/earth-indicators/ice-sheets/) | Ověřen veřejný indikátor a odkazy na data. Oddělen od pevně datovaného obrázku v článku. |
| [GRACE-FO: přehled mise](https://gracefo.jpl.nasa.gov/mission/overview/) | Ověřena návaznost GRACE a GRACE-FO a zahájení dat nové mise v červnu 2018. |
| [GRACE-FO: měření gravitace](https://gracefo.jpl.nasa.gov/resources/50/how-grace-fo-measures-gravity/) | Ověřen princip změny vzdálenosti družic, schéma a kredit NASA. |
| [IMBIE Data Downloads](https://imbie.org/data-downloads/) | Přehled starého i nového vydání; nové vydání dat datováno 2. září 2026. Funkční přehled nezaručuje dostupnost cílového archivu BAS. |
| [IMBIE data processor](https://github.com/IMBIE/imbie) | Ověřen konkrétní repozitář zpracovacího kódu. Původní odkaz vedl pouze na organizaci GitHub. Reprodukce celého výpočtu nebyla součástí revize. |
| [Copernicus GMB v5 ATBD](https://confluence.ecmwf.int/spaces/CKB/pages/505384280/GMB+Version+5.0+Algorithm+Theoretical+Basis+Document+ATBD) | Otevřen celý dokument metodiky; nahrazuje obecnou záložku katalogu. Opraveni autoři (Simonsen a Barletta), název a rok 2024. Stabilní ID zachováno. |
| [ITS_LIVE](https://its-live.jpl.nasa.gov/) | Ověřen portál projektu NASA, identita výškového produktu doložena také metodickou prací a DOI. |
| [NASA Images and Media](https://www.nasa.gov/nasa-brand-center/images-and-media/) | Ověřeny podmínky a požadavek kreditu. Sdílený existující záznam otevřeného přístupu zachován. |

## Změny zdrojů

Před odstraněním byl proveden celorepozitářový průzkum pomocí `rg`. Odstraňované aktivní záznamy nepoužíval jiný článek, historie ani test. Staré auditní manifesty a generovaný `app/data/sourceArchive.ts` se neměnily.

- **Wingham et al. 1998**, `10.1126/science.282.5388.456`: nebyla potvrzena veřejná úplná původní práce. Historie výškoměrů nyní vychází z otevřeného přehledu Otosaka et al. 2023 a doloženého spojení šesti misí u Nilssona a Gardnera 2026. Nejde o tvrzení, že otevřená kopie nikde neexistuje.
- **Velicogna a Wahr 2005**, `10.1029/2005GL023955`: hledané autorské kopie byly nedostupné (UCI 503, eScholarship 403). Historický příklad byl konkrétně přepsán na antarktickou práci z roku 2006 s ověřeným plným textem; nezaměňujeme oba výsledky.
- **Caron a Ivins 2020**, `10.1016/j.epsl.2019.115957`: kontrolovaný záznam ESPO poskytl abstrakt, nikoli plné PDF. Obecný výklad korekce pohybu podloží podpírá otevřený Tapley 2019 a metodický přehled Otosaka 2023; článek již netvrdí nic specifického o modelu Carona a Ivinse.
- **King et al. 2020**, `10.1038/s43247-020-0001-2`: veřejný plný text byl dostupný a přečten. Odstraněn jako nadbytečný k metodickému tvrzení doloženému Mouginotem 2019, nikoli kvůli uzavřenému přístupu.
- **JPL RL06v02**, `10.5067/TEMSC-3JC62`: zastaralý odkaz vracel 404. Nahrazen aktuálním záznamem RL06.3Mv04 s vlastním DOI `10.5067/TEMSC-3JC634` a novým stabilním ID; původní DOI nebyl potichu přepsán pod starým identifikátorem.

Nově přidány metodická práce IMBIE 2026 a příslušné datové vydání. Zachováno oddělení DOI a veřejné kopie v centrální mapě otevřeného přístupu.

## Věcné opravy

- Vydání IMBIE 2023 (1992–2020) a 2026 (do roku 2023) jsou označena odděleně. Novější vyhodnocení zahrnuje delší dobu i nové výpočty starších let. Dva stávající grafy nadále zobrazují vydání 2023.
- Doplněn výsledek 11 309 ± 565 Gt pro roky 1979–2023 a srovnání stejných let 1992–2020: nově 180 ± 12 Gt/rok v Grónsku a 140 ± 13 v Antarktidě, dříve 169 ± 16 a 92 ± 18. Nejde o pouhé připojení posledních bodů ke starému grafu.
- Historický začátek odhadu ze 70. let stojí na metodě vstup–výstup a starších snímcích Landsat. Tři metody nejsou dostupné po celé toto období.
- Opravena nejistota IMBIE: skládá chyby vstupních odhadů, automaticky nepřičítá rozptyl mezi metodami. Vydání 2026 mění váhy a přidává okolní grónské ledovce do příspěvků, které je nezahrnovaly. Společné pomocné modely omezují úplnou nezávislost metod.
- Odstraněno chybné tvrzení, že všechny intervaly východní Antarktidy v porovnávacím grafu zasahují obě strany nuly. Metody se neshodují ani na znaménku a rozdíl dosahuje 105 ± 33 Gt/rok. Upozorněno na větší váhu jediného antarktického odhadu vstup–výstup.
- Upřesněny letecké radarové podklady tloušťky ledu, předpoklad hloubkově průměrné rychlosti a validace výšek leteckým laserem. Výšková kontrola sama neověřuje převod na hmotnost pomocí firnu.
- U Nilssona a Gardnera nepřebíráme nejednoznačný celkový údaj 5 120 ± 544 Gt: úvod jej spojuje i s okolními ledovci, ale tabulka 3 je rozlišuje a 5 120 odpovídá 32 × 160. Článek používá přímo tabulkových 160 ± 17 Gt/rok pro příkrov a 23 ± 5 pro okolní ledovce. Srovnání s gravitací je vedeno pro shodné území a období 2002–2023.
- Doplněna menší průměrná ztráta v letech 2020–2023 a přírůstek ve východní Antarktidě. Pozorování není zaměněno za kauzální výklad ani projekci.
- Upraveny popisky NASA, vysvětlen vodní ekvivalent, osy a barvy. Široká mapa se na mobilu posouvá stejně jako grafy IMBIE.

## Obrazy a technická kontrola

Čtyři obrazové soubory se neměnily: mapa NASA/JPL 2002–2025, schéma GRACE a obrázky 3–4 z Otosaka et al. 2023. U obou vědeckých grafů zůstává uvedena licence CC BY 4.0 a převzetí beze změny, u NASA kredit a odkaz na podmínky.

- `pnpm lint`: úspěch.
- `pnpm audit:sources`: úspěch.
- `pnpm test`: úspěch, produkční build 74 adres a **29/29 testů**.
- `git diff --check`: bez chyb.
- Prohlížeč, 1440 × 1000 a 390 × 844: úvod, navigace, slovníček, všechny čtyři obrázky, popisky a zdrojové karty zkontrolovány. Žádné vodorovné přetékání dokumentu; široké grafy mají vlastní posuvnou oblast a reagují na klávesnici.
- Test exportovaných karet kontroluje všech 27 citovaných ID, veřejné odkazy, samostatný DOI a nepřítomnost Drive. Zvlášť chrání nový DOI JPL, plnou kopii Brookse, verzi IMBIE 2026 a viditelné omezení přístupu k datům.

Nasazení a konkrétní zveřejněný commit se ověřují samostatně po pushi. Tento záznam nepovažuje výpadek BAS za úspěšné stažení dat ani úspěšný build za potvrzení vědeckého závěru.
