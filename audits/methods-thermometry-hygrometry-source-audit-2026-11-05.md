# Zdroje prvních dvou metod

Kontrola **5. listopadu 2026**. Rozsah: Odporová termometrie a termistory a Hygrometrie, první dvě položky katalogu Metody. Ověřena opora tvrzení v původních podkladech, bibliografie, plné texty a skutečné cíle odkazů. Souběžné změny jiných článků nejsou součástí tohoto auditu.

Původní dvojice citovala 37 různých zdrojů. Po doplnění samostatného datového portálu Argo jich je **38**, z toho 29 v odporové termometrii a 19 v hygrometrii. Zdroj Argo už v katalogu existoval. Žádné zveřejněné ID nebylo změněno ani odstraněno.

## Opravy a zpřesnění

| Místo | Zjištění a provedená změna |
| --- | --- |
| USCRN Hourly02 | Soubor začíná údajem `UPDATED: 2017-07-06`. Karta nesprávně uváděla rok 2026. Rok byl opraven na 2017, datum je doplněno i u citací v obou článcích. Původní stabilní ID `2026_USCRN_Hourly_Readme` zůstává. |
| Nedatované weby | U popisu měření a seznamu přístrojů USCRN, dokumentace profilů Argo a nedatovaných snímků na Mauna Loa je nyní rok výslovně označen jako rok přístupu. Nejde o doložený rok vydání dokumentu nebo pořízení fotografie. |
| Argo | Popisek „veřejná data Argo“ dříve odkazoval na návod ke čtení profilů. Text nyní odděluje skutečný datový rozcestník GDAC od dokumentace formátu a kontroly kvality. Oba cíle fungují. |
| Siemens 1871 | Původní archivní prohlížeč funguje a nabízí všech 60 snímků rukopisu. Přidán přímý odkaz na úplné PDF od Royal Society. Soubor má 62 stran včetně dvou úvodních stran archivu. Nebyl zaměněn za publikovaný abstrakt. |
| Vaisala HMT330 | Ověřena verze M210566EN-K z prosince 2013. Má 209 stran PDF. Čísla citovaná v článku jsou tištěná, například tištěná strana 169 je stranou 171 v PDF. Toto rozlišení je doplněno na kartu i do článku. |
| Údaje o ověření | Oba články rozlišují novou kontrolu zdrojů 5. listopadu 2026 od původního převzetí vstupních dat 4. října 2026. Kontrolní součty i původní výřezy zůstaly zachované. |

Přímé plné texty NPL, NIST a Vaisaly byly v katalogu už před kontrolou. Nešlo o chybějící odkazy a jako opravu je nevykazujeme. Původní pracovní výpis je nesprávně přehlédl kvůli rozdílnému zápisu klíčů v mapě otevřeného přístupu. Výpis byl opraven a všechny skutečné cíle ověřeny.

## Věcná kontrola

Použití institucionálních dokumentů je v této dvojici přiměřené jejich úloze. BIPM, NIST a OIML dokládají metrologický postup, NOAA dokumentuje vlastní síť a data a Vaisala a Sea-Bird specifikují vlastní přístroje. Výsledky konkrétních terénních porovnání jsou doloženy původními pracemi. Učebnice OpenStax slouží jen k základním elektrickým a tepelným vztahům.

- **Platinový teploměr:** porovnány části příruček BIPM o převodu odporu, přívodech, kalibraci, termistorech a návaznosti na ITS-90. Ověřena příloha A doporučení OIML R 84.
- **Skutečná kalibrace BIPM:** tabulka 5.3.1 a rovnice 5.2.1 na stranách 53–54 odpovídají článku. Z odporu 111,54535 Ω a vytištěných koeficientů vychází 29,8627418543 °C. Tabulka s nezaokrouhleným výpočtem uvádí 29,8631 °C. Jde o bod použitý ke kalibraci, což článek správně odlišuje od nezávislého ověření.
- **Hubbard a kol. 2004:** tabulka 1 na straně PDF 4 potvrzuje pro leden 2003 všech 744 hodin, průměrné rozdíly první sondy +0,07 a −0,02 °C a směrodatné odchylky 0,09 a 0,04 °C. Tabulka je obrazová, byla proto zkontrolována vizuálně.
- **USCRN:** příloha práce Diamonda a kol. potvrzuje medián tří teplot při shodě do 0,3 °C a průměr dvou shodných sond při výpadku nebo odchylce třetí. Dokumentace rozlišuje pětiminutovou teplotu, průměr hodiny a její poslední interval.
- **Hygrometrie:** NPL a NIST dokládají význam RH, vazbu na teplotu, kalibraci a různé principy měření. Primární práce Inglebyho a kol. dokládá terénní porovnání a meze jednotlivých přístrojů. HadISDH, GRUAN, Mears a Bevis odpovídají citovaným klimatologickým aplikacím a odlišným prostorovým rozsahům měření.
- **Vaisala:** příručka potvrzuje rozsah 0–100 % RH, uvedené specifikace při 15–25 °C a doby odezvy 8 a 40 sekund pro popsaná provedení HUMICAP 180/180C. Parametry nebyly zobecněny na všechny vlhkoměry.
- **NPL:** příklad ohřevu z 20 na 21 °C při počáteční RH 50 % a poklesu přibližně na 47 % je přímo v oddílu 3.2 na tištěné straně 5.
- **Dunmore 1938:** původní práce potvrzuje přibližně dvouminutové zpoždění vlasového vlhkoměru a výstup o 2 200 stop, tedy přibližně 670 metrů. DOI i úplný původní sken jsou správné.
- **Sea-Bird:** původní technický list potvrzuje termistor, vývoj SBE 41 v roce 1997, rozsah −5 až +35 °C, počáteční přesnost ±0,002 °C a rozlišení 0,0001 °C.

## Opakování skutečných příkladů

Znovu byly celé staženy oba roční soubory NOAA pro Blue Hill 2025, pětiminutový o 14 191 200 bajtech a hodinový o 2 137 440 bajtech. Jejich SHA-256 souhlasí s metadaty původních příkladů. Oba zveřejněné skripty byly spuštěny také nad novými úplnými staženími.

| Výpočet | Výsledek |
| --- | --- |
| Teplota, 12 intervalů | Součet 64,9 °C, průměr 5,408333… °C, po zaokrouhlení 5,4 °C. Souhlasí s NOAA. |
| Vlhkost, 12 intervalů | Součet 1 016, průměr 84,666666… %, po zaokrouhlení 85 %. Souhlasí s NOAA, všechny příznaky kvality jsou 0. |

Články správně označují, že příklady začínají u zveřejněných zpracovaných hodnot. Ze souborů nelze nezávisle zopakovat původní elektrické odečty a kalibraci konkrétní sondy. Toto omezení není novou chybou zdroje.

## Dostupnost a rozsah stažení

Dokončeno a otevřeno **21 různých úplných PDF o 138 996 994 bajtech**, vedle obou ročních datových souborů a veřejných webových dokumentů. Doprovodný JSON zachovává 57 síťových kontrol, cílové adresy, stavy, velikosti a kontrolní součty. Stažená cizí díla zůstávají pouze v ignorovaném pracovním adresáři, do Gitu se nevkládají.

U Wiley byly některé automatické požadavky odmítnuty HTTP 403. Celá práce Mearse 2018 byla proto ověřena v běžném prohlížeči, včetně metod, výsledků a závěru. Nelze ji podle odmítnutí jednoho automatického klienta označit za nedostupnou. Ostatní dotčené práce mají rovněž ověřené veřejné plné texty.

Python u Royal Society nedokázal ověřit vydavatelský řetězec certifikátu. Běžný prohlížeč i systémový klient s ověřováním certifikátů fungovaly. Úplné PDF bylo staženo a otevřeno bez vypínání kontroly certifikátu. Nešlo o novou nefunkčnost čtenářského odkazu.

V této dvojici nezůstala nevyřešená chyba použitého zdroje. Nebyl nově přepočítáván celý archiv Argo ani všechny klimatické analýzy citované jako příklady použití metody.

## Redakční a technická kontrola

Obsahový průchod porovnal tvrzení s uvedenými částmi původních dokumentů. Samostatná kontrola čtivosti oddělila účel datového portálu a návodu Argo, zpřesnila datum dokumentace a vysvětlila číslování stran. Upravené odstavce byly přečteny v návaznosti na okolní text. Data, výsledky a podstatná omezení zůstala zachována.

- Strukturální audit zdrojů prošel, 61 článkových souborů a žádná chybějící ID nebo duplicity.
- `pnpm test` v původním pracovním adresáři prošel, 95 předvykreslených adres a 113 úspěšných testů. Po začlenění novějšího `main` byly stejné kroky sestavení a testů zopakovány v odděleném checkoutu, výsledkem je **114 úspěšných testů a 0 selhání**, stále 95 adres.
- Prostý `pnpm lint` narazil na generované exporty v nesouvisejícím ignorovaném pracovním adresáři. `pnpm lint --ignore-pattern work/history-redesign/dist` prošel. Konečný lint v odděleném checkoutu prošel i bez této výjimky. Produkční kód ani pravidla lintování nebyly vynechány nebo změněny.
- Oba články byly ověřeny při šířkách 1280 a 390 px. Všechny čtyři fotografie se načetly v obou šířkách, přetékání celé stránky nebylo nalezeno.
- Všech 38 karet má veřejný odkaz, žádná nechybí ani nemá tlačítko Google Drive. Karty a tlačítka se vejdou v obou šířkách. Skutečné kliknutí z citace Siemensova rukopisu otevřelo odpovídající kartu s novým přímým PDF.

Oddělený checkout vychází z `d76e5a5`. Instalační kontrola pnpm v něm zastavila běh kvůli nepovoleným instalačním skriptům závislostí. Nové skripty nebyly povoleny. Konečné sestavení, testy a lint použily přímo stejné již ověřené lokální CLI Vinext a ESLint. Jejich příkazy a výsledky jsou v JSON.

Záznam zachycuje stav před commitem. Následuje uživatelem autorizované nahrání do `main`, ověření příslušného běhu Pages a kontrola konkrétních změn na veřejném webu.
