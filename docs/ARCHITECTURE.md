# Architektura Klimatologie.eu

Tento dokument popisuje současný technický stav repozitáře. Odborný obsah článků se řídí soubory `AGENTS.md`, `CONTENT.md`, [OBSERVATIONS.md](../OBSERVATIONS.md), `METHODS.md` a `MECHANISMS.md`. Společný jazyk a srozumitelný výklad stanovuje [STYLE.md](../STYLE.md). Podklady pro konkrétní úkol vybíráme podle [AGENTS.md](../AGENTS.md).

## 1. Základní charakter projektu

Klimatologie.eu je staticky exportovaná aplikace napsaná v Reactu a TypeScriptu. Používá konvence Next.js App Routeru, ale sestavení zajišťuje Vinext nad Vite.

- React 19 vykresluje stránky a interaktivní komponenty.
- TypeScript drží strukturu katalogů a zdrojů.
- Vinext převádí adresář `app` na statický export.
- `next.config.ts` nastavuje `output: "export"` a koncové lomítko adres.
- Obrázky Next.js se neoptimalizují serverem, protože na GitHub Pages žádný aplikační server neběží.
- Výsledný web je v `dist/client`.
- Veškerý odborný obsah je součástí repozitáře. Za běhu se nenačítá z CMS ani databáze.

Projekt nemá produkční backend, přihlášení uživatelů ani serverovou databázi. Lokální adresáře jako `db`, `drizzle`, `worker` nebo `build`, pokud se v pracovním počítači objeví, nejsou součástí verzovaného webu, dokud je Git výslovně nesleduje.

## 2. Cesta požadavku stránkou

Každá stránka prochází společným kořenovým rozvržením v `app/layout.tsx`:

```text
app/layout.tsx
  -> SiteHeader
  -> konkrétní route z app/**/page.tsx
  -> SiteFooter
  -> Cloudflare Web Analytics beacon
```

`app/layout.tsx` také nastavuje:

- český jazyk dokumentu;
- výchozí titul a popis;
- Open Graph obrázek;
- favicon;
- základní adresu `https://klimatologie.eu`.

Hlavní navigace není odvozena automaticky ze složek. Je to ručně udržované pole `navigation` v `app/components/SiteHeader.tsx`. Přidání nové hlavní sekce proto vyžaduje změnu routy i navigace.

## 3. Přehled adres

| Adresa | Zdroj stránky | Zdroj obsahu |
| --- | --- | --- |
| `/` | `app/page.tsx` | Ručně sestavený úvod, vybraná pozorování a počet zdrojů. |
| `/pozorovani/` | `app/pozorovani/page.tsx` | `app/data/evidence.ts`. |
| `/pozorovani/[slug]/` | `app/pozorovani/[slug]/page.tsx` | Katalog `evidence.ts` a ručně připojené komponenty `*Article.tsx`. |
| `/metody/` | `app/metody/page.tsx` | `app/data/methods.ts`. |
| `/metody/[slug]/` | `app/metody/[slug]/page.tsx` | Katalog metod; hotové články se připojují ručně. |
| `/mechanismy/` | `app/mechanismy/page.tsx` | `app/data/mechanisms.ts`. |
| `/mechanismy/[slug]/` | `app/mechanismy/[slug]/page.tsx` | Plný článek energetické bilance Země a obecné detailní stránky ostatních témat. |
| `/projekce/` | `app/projekce/page.tsx` | Lokální pole témat přímo v souboru stránky. |
| `/dusledky/` | `app/dusledky/page.tsx` | Lokální pole témat přímo v souboru stránky. |
| `/historie/` | `app/historie/page.tsx` | `app/data/history.ts` a zdroje podle ID. |
| `/osobnosti/` | `app/osobnosti/page.tsx` | Ručně psaná stránka. |
| `/osobnosti/mariotte/` | `app/osobnosti/mariotte/page.tsx` | Ručně psaný profil. |
| `/zdroje/` | `app/zdroje/page.tsx` | Spojené pole `sources` z `app/data/sources.ts`. |

`generateStaticParams` u pozorování, metod a mechanismů vytvoří adresy pro všechny položky příslušného katalogu už při buildu. Neznámý slug skončí přes `notFound()`.

## 4. Katalog není totéž co článek

To je nejdůležitější vlastnost současné architektury.

### Pozorování

`app/data/evidence.ts` určuje:

- slug;
- název;
- oblast, například atmosféru nebo oceán;
- krátké shrnutí;
- stav položky.

Záznam vytvoří dlaždici a statickou adresu, ale plný článek vznikne teprve tehdy, když:

1. existuje komponenta, například `GmstArticle.tsx`;
2. je importována v `app/pozorovani/[slug]/page.tsx`;
3. route obsahuje větev pro její slug, úvod, datum a samotnou komponentu.

Všech současných čtrnáct pozorování má vlastní komponentu. Obecná náhradní stránka na konci routy zůstává jako pojistka pro budoucí katalogovou položku bez plného článku.

### Metody

`app/data/methods.ts` obsahuje 45 témat v pěti skupinách: přímá měření, laboratorní analýza, dálkový průzkum, přírodní archivy a zpracování dat a vyhodnocování výsledků. Katalog vytváří všechny jejich adresy. Plné články mají témata Odporová termometrie a termistory, Hygrometrie, Radiosondáž, Měření tlaku a hydrostatické výšky, Konduktometrie, Srážkoměry a disdrometry, Pobřežní měření hladiny a výšková reference, Měření výšky, hustoty a vodní hodnoty sněhu, Terénní měření bilance ledovců, Měření hloubky sezónního rozmrzání, Standardizované fenologické pozorování, Plynová chromatografie, Absorpční spektroskopie plynů, Hmotnostní a izotopová spektrometrie, Spektrofotometrie roztoků, Potenciometrie, Titrace, Coulometrie, Optické a multispektrální snímkování, Fotogrammetrie a porovnávání výškových modelů, Měření radiačních toků, Pasivní infračervená radiometrie, Pasivní mikrovlnná radiometrie, Radarové měření srážek a struktury sněhu a ledu, Lidarové měření atmosféry a vegetace, Radarová a laserová altimetrie, Radarová interferometrie a sledování pohybu povrchu, Družicová gravimetrie, Rádiové zákryty GNSS, Pozemní měření vodní páry pomocí GNSS, Ledová jádra a analýza uzavřeného vzduchu, Sedimentární jádra a stratigrafie, Dendrochronologie, Korálová sclerochronologie, Krápníky a jeskynní sedimenty, Pylová analýza a mikrofosilie, Izotopová paleotermometrie, Chemické a biologické paleoteploměry, Radiometrické a expoziční datování, Rekonstrukce teploty z vrtů, Kontrola kvality a homogenizace, Prostorové zpracování a plošné průměry, Analýza časových změn a extrémů, Vyčíslení a přenos nejistoty a Asimilace dat a reanalýzy. Všech 45 katalogových témat má plný článek. Připojení případného dalšího tématu vyžaduje stejnou ruční vazbu jako u pozorování.

Titrace a coulometrie mají samostatné položky `/metody/titrace/` a `/metody/coulometrie/`. Původní adresa `/metody/titrace-a-coulometrie/` zůstává ve statickém exportu jako rozcestník na oba postupy, ale nezapočítává se mezi položky katalogu. Ostatní zavedené slugs zůstávají zachované i při zpřesnění názvu. Sitemap obsahuje všechny adresy metod včetně tohoto rozcestníku.

### Mechanismy

`app/data/mechanisms.ts` obsahuje 23 témat v pěti skupinách. Plný článek má Energetická bilance Země: komponenta `EarthEnergyBalanceArticle.tsx` je připojená v `app/mechanismy/[slug]/page.tsx`. Ostatních 22 témat zatím ukazuje vymezení a rozlišující důkazy z katalogu. Další plné články vyžadují stejnou ruční vazbu komponenty a routy jako u metod. Energetická bilance je obousměrně propojená s pozorováním globální teploty, obsahu tepla v oceánu a metodou měření radiačních toků. Zpětné odkazy v pozorováních jsou oddělené jako navazující vysvětlení.

Sníh na souši a mořský led mají samostatná témata. Původní adresa `/mechanismy/energeticka-bilance-snehu-a-morskeho-ledu/` zůstává jako rozcestník na obě nástupnické stránky a do počtu 23 témat se nezapočítává. Zpětné vazby oblaků a odrazivosti sněhu a ledu mají vlastní položky. Rozsah ostatních témat a jejich rozlišujících důkazů určuje katalog. Přejmenované položky o vlhkosti, aerosolech z lidské činnosti a hustotě mořské vody si zachovávají původní slugs. Sitemap obsahuje všech 23 témat i zachovaný rozcestník.

### Projekce a důsledky

Tyto dvě sekce zatím nemají samostatné datové katalogy ani detailní adresy. Jejich osnovy jsou pole přímo v souborech `page.tsx`.

## 5. Článkové komponenty

Plné odborné články jsou komponenty `app/components/*Article.tsx`. Route jim dodává:

- nadřazenou kategorii;
- nadpis stránky;
- datum poslední úpravy ve formátu podle [STYLE.md](../STYLE.md);
- úvodní perex;
- odkaz zpět do katalogu.

Samotná článková komponenta obvykle obsahuje:

- jednotlivé výkladové kapitoly;
- obrázky a popisky;
- citace přes `SourceLink`;
- závěrečné shrnutí;
- přehled použitých pramenů a dat.

Články nejsou Markdown. Text, struktura i citace jsou JSX. Výhodou je přesná kontrola rozvržení a komponent; nevýhodou je nutnost při editaci zachovat validní TSX.

Rovnice zapisujeme v TeXu přes `Equation` a `InlineMath` ze souboru `app/components/Equation.tsx`. KaTeX při sestavení vytvoří vizuální sazbu i sémantický MathML. Prohlížeč dostane hotové HTML, styly a lokálně přibalená písma. Samostatné rovnice jsou vystředěné bez rámečku a pozadí. Pole v atributu `tex` odděluje části dlouhé rovnice, mezi nimiž se může na menší obrazovce zalomit řádek. Čísla, zlomky ani jednotlivé členy se uvnitř části nelámou.

## 6. Datové katalogy

| Soubor | Co je jeho zdrojem pravdy |
| --- | --- |
| `evidence.ts` | Seznam pozorování a jejich veřejné slugs. |
| `methods.ts` | Seznam metod, jejich kategorií a slugs. |
| `mechanisms.ts` | Seznam mechanismů, kategorií a rozlišujících důkazů. |
| `history.ts` | Výběr milníků a jejich stručné vysvětlení. Bibliografii neduplikuje, odkazuje na ID zdroje. |
| `sources.ts` | Typ `Source`, základní zdroje, spojení katalogů a funkce pro odkazy. |
| `articleSources.ts` | Většina zdrojů odborných článků a jejich stav otevřeného přístupu. |
| `sourceArchive.ts` | Generované mapování z ID zdroje na soubor na Google Drivu. |

Slugs a ID jsou veřejná rozhraní. Změna slugu rozbije adresu a sitemapu. Změna ID zdroje rozbije citace, kotvy `/zdroje#ID`, historické milníky a případné archivní mapování.

## 7. Systém zdrojů

Živý katalog vzniká ve čtyřech krocích:

```text
ruční sourceRecords v sources.ts
              +
rawArticleSources v articleSources.ts
              |
              v
articleOpenAccessSources doplní availability a openAccessUrl
              |
              v
sources.ts spojí obě pole
              |
              v
sourceArchiveFiles případně doplní Drive ID neotevřeným archivovaným zdrojům
```

`SourceLink` a `Citation` vyhledávají záznam přes `sourceById`. Pokud ID neexistuje, vykreslí viditelné upozornění o chybějícím zdroji. Testy mají takovou chybu zachytit ještě před nasazením.

`SourceCard` odvozuje tlačítka z polí záznamu:

- `externalUrl` vede na DOI nebo původní zdroj;
- `openAccessUrl` vede na veřejný plný text nebo veřejná data;
- `driveFileId` přidá otevření a stažení archivní kopie;
- `archiveRelation` rozliší kopii samotného zdroje od souvisejícího materiálu;
- `category` určuje barevnou kategorii, nikoliv odbornou důležitost.

Podrobný popis je v `docs/SOURCES-AND-ARCHIVE.md`.

## 8. Historická osa

`app/data/history.ts` neobsahuje celé bibliografické záznamy. Každá položka drží pouze:

- `sourceId`;
- jeden vysvětlující odstavec;
- stranu osy `academic` nebo `institutional`.

Rok, autor, název, typ a kategorie se načtou z centrální databáze zdrojů. Jeden zdroj tak zůstává popsán na jediném místě.

Vizuálně je levá strana určena formálním politickým rozhodnutím a pravá vědeckému poznání, měření a infrastruktuře. Kritéria výběru milníků jsou v `CONTENT.md`.

## 9. Interaktivní části

Většina webu je serverově vyrenderovaný statický obsah. Hlavní klientskou komponentou je `SourceLibrary.tsx`, označená `"use client"`. V prohlížeči udržuje:

- textové hledání bez rozlišení diakritiky;
- filtr kategorie;
- filtr období;
- řazení podle roku;
- počet viditelných záznamů.

Filtrování nemění databázi ani URL a nic neodesílá na server.

## 10. Vzhled a média

Projekt používá jeden globální soubor `app/globals.css`. Neexistuje samostatná komponentová knihovna ani CSS moduly. Název třídy proto může ovlivnit více stránek a po změně stylu je potřeba zkontrolovat všechny dotčené typy obrazovek.

Veřejná média jsou v `public`. Cesta `/media/sea-level/graf.png` odpovídá souboru `public/media/sea-level/graf.png`. Média jsou verzována spolu s webem a musí mít v článku popis, zdroj a oprávnění k použití podle redakčního standardu.

## 11. SEO, doména a analytika

- `public/CNAME` připojuje GitHub Pages k `klimatologie.eu`.
- `public/robots.txt` povoluje procházení a odkazuje na sitemapu.
- `public/sitemap.xml` je ručně udržovaný seznam veřejných adres.
- `public/googleb035ba2ec16f4455.html` ověřuje vlastnictví URL-prefix property v Google Search Console.
- DNS ověření doménové property Google Search Console leží mimo repozitář.
- Cloudflare Web Analytics se načítá jedním veřejným beacon skriptem v `app/layout.tsx`.

Přidání nové veřejné detailní adresy vyžaduje aktualizaci sitemap XML. Samotné `generateStaticParams` sitemapu neupraví.

## 12. Co se edituje ručně a co se generuje

| Cesta | Režim |
| --- | --- |
| `app/**`, kromě `app/data/sourceArchive.ts` | Ručně spravovaný zdroj webu. |
| `public/**` | Ručně vybraná veřejná média a infrastrukturní soubory. |
| `tests/**` | Ručně spravované pojistky. |
| `app/data/sourceArchive.ts` | Generuje `pnpm sync:drive-archive`. |
| `audits/**` | Výstupy konkrétního archivního auditu; jsou verzované jako záznam procesu. |
| `source-archive/**` | Lokální stažené soubory; Git je ignoruje. |
| `.vinext/**`, `dist/**`, `.next/**`, `outputs/**`, `work/**` | Dočasné nebo sestavené výstupy; Git je ignoruje. |
| `node_modules/**` | Lokální závislosti; Git je ignoruje. |

Auditní JSON není automaticky živým obrazem současného katalogu. Obsahuje počty a rozhodnutí z okamžiku posledního spuštění. Po změně zdrojů se může od aktuálního webu lišit, dokud neproběhne nový audit.

## 13. Build a nasazení

`pnpm build` vytvoří statický export všech známých tras. Workflow `.github/workflows/deploy-pages.yml` se spouští při pushi do `main`:

```text
checkout
  -> pnpm 10
  -> Node 22
  -> pnpm install --frozen-lockfile
  -> pnpm build
  -> upload dist/client
  -> deploy-pages
```

Workflow záměrně neprovádí `pnpm lint`, `pnpm audit:sources` ani celou testovací sadu. Tyto kontroly musí proběhnout před pushem. Podrobnosti jsou v `docs/DEVELOPMENT.md`.

## 14. Známé konstrukční dluhy

Dokumentace má také popsat místa, kde architektura není ideální:

- pozorovací route obsahuje dlouhou ruční posloupnost podmínek podle slugu;
- plné články a jejich hlavičky nejsou propojené jedním registrem;
- zdroje jsou z historických důvodů rozdělené mezi dva ruční soubory;
- sitemap se udržuje ručně;
- projekce a důsledky mají osnovu přímo ve stránce;
- auditní manifesty se po každé změně katalogu neobnovují automaticky;
- jeden globální CSS soubor má velký rozsah dopadu.

Tyto body nejsou důvodem k okamžitému přepisu. Jsou upozorněním pro budoucí změny: nová abstrakce má vzniknout až tehdy, když skutečně zjednoduší správu a zachová stabilní adresy a ID.
