# Dořešení otevřených bodů ve zdrojích Pozorování

Kontrola: **5. listopadu 2026**. Navazuje na sedm auditů všech čtrnácti pozorovacích článků z 2.–5. listopadu. Původní záznamy zůstávají zachovány jako doklad tehdejšího stavu. Tento záznam odlišuje opravenou čtenářskou cestu, dokončené stažení a vědecký výpočet, který se dosud nepodařilo úplně zopakovat.

Upraveno devět článků, sedm existujících záznamů zdrojů a přidány dva podklady: úplný svazek III příručky WMO 2024 a archivovaný kód IMBIE v3.1. Změny navazují na commit `48f41f6b57e2b083193a24e995c3b40fdb3c2801`. Souběžné úpravy mechanismů nejsou součástí tohoto auditu.

## Výsledek sedmi hlavních bodů

| Bod | Výsledek | Co zůstává otevřené |
| --- | --- | --- |
| IMBIE 2026 | Reprodukován společný úbytek 11 309 Gt. Do článku přibyl postup kontroly a původní archivovaný kód. | Přímý průměr 48 měsíčních hodnot Grónska 2020–2023 dává −198,0011 Gt/rok, publikace −199 ± 29 Gt/rok. Přesný důvod tohoto menšího rozdílu zůstává neobjasněný. |
| IAP a graf Pan 2026 | Číselné tvrzení a závěrečné shrnutí byly opraveny z orientačního odečtu 460 ZJ na přibližně 444 ZJ, přímo vypočtených z veřejné tabulky. | Přesná příčina rozdílu mezi samostatně zveřejněnou tabulkou a převzatým grafem nebyla doložena. Výstupy jsou odlišeny a nové číslo není vydáváno za odečet grafu. |
| Aono a Kazui 2008 | Znovu ověřena nedostupnost původního repozitáře. Funkční původní data NOAA/WDS nadále dokládají historický odstavec. | Repozitář vrací 503 s oznámením údržby. Autorská starší doména se nepřeložila. Nová ověřená autorská nebo institucionální úplná kopie nebyla získána. Studie zůstává mimo argument článku. |
| Hugonnet 2021 / SEDOO | Ověřen funkční portál a celé dva regionální datové archivy. Karta má přímé stažení dat místo metadat a článek vysvětluje výběr dalších produktů v portálu. | Nebyly staženy všechny mapy a všechny soubory jednotlivých ledovců. |
| ERA5 / CDS | Katalog, formulář a DOI jsou znovu dostupné i v běžném prohlížeči. Odstraněna neplatná informace o aktuální nedostupnosti, karta vede přímo na výběr dat. Ověřen také cíl DOI E-OBS. | Odeslání požadavku na ERA5 vyžaduje účet a přijetí licence. Přihlášená objednávka nebyla odeslána. |
| WMO | Celé svazky I a III z roku 2024 byly staženy, otevřeny a obsahově ověřeny. U měření vlhkosti, srážek, teploty, radiosond a radaru jsou odpovídající konkrétní kapitoly. | Ochrana starého prohlížeče WMO e-Library již nebrání přístupu k použitým úplným dokumentům. |
| IOCAS / globální pH | V běžném prohlížeči ověřeny správný produkt, tlačítko Check a seznam souborů 1992.nc–2020.nc s doprovodným balíčkem. Karta používá ověřený anglický katalog a výslovně označuje požadované přihlášení. | Chráněné soubory nebyly staženy přes nový účet. |

## Číselné kontroly

### IMBIE

Oba původní soubory byly znovu celé staženy z [archivu BAS](https://ramadda.data.bas.ac.uk/repository/entry/show?entryid=128c5e33-5224-4197-82f0-19dcc95b80a0). Pro společné období jsou prvním a posledním měsíčním záznamem `1979-01-01` a `2023-12-01`.

| Kumulativní bilance v Gt | První hodnota roku 1979 | Poslední hodnota roku 2023 | Rozdíl |
| --- | ---: | ---: | ---: |
| Antarktida | −4,7012 | −4 779,4720 | −4 774,7708 |
| Grónsko | +338,0575833 | −6 196,1457910 | −6 534,2033743 |
| Společný rozdíl | | | **−11 308,9741743** |

Po zaokrouhlení jde o publikovaný úbytek **11 309 Gt**. Prostý součet všech měsíčních rychlostí dělených dvanácti zahrnoval navíc první měsíční příspěvky. Tím vznikl dřívější rozdíl přibližně 7,145 Gt. Nešlo o nezávislý rozpor mezi dvěma měřeními. Vysvětlení je doplněno přímo u dat v článku. Kontrola se vztahuje k centrálním hodnotám, nikoli k novému výpočtu publikované nejistoty.

Přímý aritmetický průměr Grónska 2020–2023 nadále činí −198,00111928125 Gt/rok. Změna vážení podle délky měsíců ani jednoduchý výpočet mezi krajními body nedoložily původ publikovaných −199 Gt/rok. Článek ponechává hodnotu [původní publikace](https://doi.org/10.1038/s41597-026-08088-0). Rozdíl se bez důkazu nepřipisuje zaokrouhlení. Přidána je [úplná autorská verze](https://escholarship.org/content/qt37q7g6zh/qt37q7g6zh.pdf) a [archivovaný kód v3.1](https://doi.org/10.5281/zenodo.14217193), na který odkazuje práce.

### Obsah tepla podle IAP

Použita celá [původní textová tabulka IAPv4.2](http://www.ocean.iap.ac.cn/ftp/images_files/IAPv4.2_OHC_estimate_update.txt), aktualizace leden 2026. Pro každý rok se zprůměruje dvanáct měsíčních hodnot neshlazeného sloupce 0–2000 m. Převod z jednotky 10²² J na ZJ je násobení deseti.

| Rok | Roční průměr vůči 2006–2015 v ZJ |
| --- | ---: |
| 1958 | −254,8000 |
| 2024 | +166,0417 |
| 2025 | +188,9250 |

Rozdíl 2025 minus 1958 je **443,725 ZJ**, rozdíl 2025 minus 2024 **22,8833 ZJ**. Text a shrnutí nyní používají přibližně 444 ZJ a odpovídající orientační změnu průměrné teploty 0,15 °C. Převzatý graf zůstává označen svým původem a referencí 1981–2010. Přesná příčina odlišných hodnot těchto dvou zveřejněných výstupů zůstává otevřená.

## Dokončená stažení

Celkem bylo dokončeno **18 vybraných původních souborů o 6 013 741 845 bajtech**. Nejde o stažení všech datových produktů citovaných v Pozorování. Velikosti, SHA-256, výsledky čtení a podrobnosti jsou v doprovodném JSON.

- WMO svazek I: 25 251 560 bajtů, 601 stran. Ověřeny relevantní části kapitol 2, 4, 6 a 12. Svazek III: 47 787 533 bajtů, 529 stran, radar v kapitole 7. Příslušné stránky byly také vykresleny a vizuálně zkontrolovány.
- SEDOO: archiv s proměnnými regionálními plochami 14 813 696 bajtů a 44 CSV, druhý regionální archiv 29 192 704 bajtů a šest CSV. Všechny členy bylo možné celé přečíst, tabulky mají dohromady 224 145 a 290 462 datových řádků. Přímý odkaz na kartě vede na první z těchto archivů TAR.
- WGMS FoG: 39 137 587 bajtů, 14 členů ZIP. AMCE: 53 589 520 bajtů, 143 členů. Kontrola CRC všech členů obou archivů prošla.
- GSDR-I: celé `Grids.zip` a `Gauge.zip`, dohromady 2 590 756 254 bajtů. Běžný přenos se přerušoval, stažení bylo dokončeno v 309 ověřovaných částech HTTP Range. Velikosti a MD5 obou složených souborů přesně souhlasí s původními údaji Zenoda. Kontrola CRC všech 204 a 205 členů ZIP prošla.
- ITS_LIVE: celý NetCDF o 1 853 161 765 bajtech, 384 časových kroků. Otevřeny proměnné a přečteny vzorky na začátku i konci jejich rozsahu.
- E-OBS: celý soubor maximální teploty v34.0e o 903 941 781 bajtech, proměnná `tx` má rozměry 27 940 × 201 × 464. Ověřena skutečná data i metadata v HDF5.
- Copernicus, regionální hladina: celý NetCDF o 20 763 537 bajtech s proměnnými trendu a zrychlení na mřížce 1440 × 720.
- BATS: celé CSV o 17 679 647 bajtech a 78 822 datových řádcích.
- NASA SP-489: celé PDF o 414 518 263 bajtech a 299 stranách. Ověřen název a konec dokumentu, vybrané stránky byly vykresleny.
- Dále úplná autorská práce IMBIE, její kód ZIP, dva aktuální CSV IMBIE a číselná tabulka IAP použitá výše.

Úplné stažení a přečtení souboru neznamenají nové zpracování všech jeho pozorování. V HDF5 byly čteny proměnné, souřadnice, metadata a vybrané hodnoty, ne nově počítány všechny klimatické trendy.

## Co nebylo uzavřeno

- Grónský průměr IMBIE a přesná příčina rozdílu dvou výstupů IAP popsané výše.
- Autorizovaná úplná kopie práce Aono a Kazui 2008 z důvěryhodného autorského nebo institucionálního zdroje. Veřejná původní data používaná v článku zůstávají přístupná.
- Přihlášené stažení ERA5, IOCAS, NASA Earthdata, úplných výběrů NEON a PEP725. Nebyly vytvářeny nové účty ani přijímány nové licence za uživatele.
- Archivy poskytované na žádost, zejména celý Nature’s Calendar, jednotlivé realizace E-OBS, úplný původní hodinový archiv za GSDR-I a historické skeny USGS Utqiaġvik.
- Všechny rozsáhlé soubory Frederikse, Ford/SOCAT, Walsh, GlobSnow, Snow CCI, Permafrost CCI, IAP/ScienceDB a GHWR. Nejde o nové zjištění, že nefungují. Rozsah jejich úplného stažení nebyl tímto doplňkem uzavřen. Nový pokus o otevření adresáře Walsh skončil časovým limitem.
- Úplné nezávislé reprodukce modelů Horton, metaanalýzy Romano, kombinace výsledků GlaMBIE, celé analýzy CERES a arktického trendu do roku 2026.
- Automatizační rozhraní prohlížeče nepotvrdilo uložení archivu SEDOO. Samotné dva přímé HTTP přenosy byly dokončeny a celé archivy přečteny. Tyto dvě různé kontroly se nezaměňují.

## Redakční a technické ověření

Obsahová kontrola ověřila význam výpočtu mezi kumulativními body IMBIE, jednotky a roční průměry IAP, skutečné kapitoly WMO a rozlišení katalogu, datového archivu a podmínky účtu. Samostatný jazykový průchod objasnil postupy před výsledkem, odstranil zastaralé výpadkové poznámky a přiřadil popisky tlačítek jejich skutečným cílům. Upravované pasáže byly přečteny také v návaznosti na okolní text.

- `pnpm lint`: prošlo.
- `pnpm audit:sources`: prošlo, 61 článkových souborů, žádná chybějící ID, duplicity nebo nekatalogizované odkazy.
- `pnpm test`: prošlo, produkční sestavení 95 adres, **113 úspěšných testů, 0 selhání**. Upraveny existující pojistky pro nové datové cíle, přesné popisky a data revize.
- Prohlížeč: devět upravených článků při šířkách 1280 a 390 px. Všech 36 článkových obrázků se načetlo při obou šířkách, chybějící citace ani vodorovné přetékání celé stránky nebyly nalezeny.
- Zdroje: deset dotčených karet v běžícím webu při obou šířkách, správné cíle a popisky, žádné Drive tlačítko u otevřených zdrojů. Skutečné kliknutí z citace Hugonnet otevřelo odpovídající kartu.

Záznam zachycuje stav před commitem. Následuje uživatelem autorizovaný push do `main`, kontrola příslušného běhu GitHub Pages a ověření konkrétních změn na veřejném webu podle [DEVELOPMENT.md](../docs/DEVELOPMENT.md).
