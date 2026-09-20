# Zdroje, otevřený přístup a archiv

Tento dokument popisuje technické fungování zdrojové databáze. Odborná pravidla výběru zdrojů jsou závazně stanovena v `AGENTS.md` a `CONTENT.md`.

## 1. Jeden veřejný katalog, více vstupů

Stránka `/zdroje` dostává jediné pole `sources`, ale to vzniká spojením tří vrstev:

1. `sourceRecords` v `app/data/sources.ts` obsahuje základní, historické, politické a některé metodické zdroje.
2. `rawArticleSources` v `app/data/articleSources.ts` obsahuje většinu zdrojů odborných článků.
3. `sourceArchiveFiles` v `app/data/sourceArchive.ts` může doplnit archivní Drive ID.

Rozdělení mezi prvními dvěma soubory je historické a pro návštěvníka neviditelné. `app/data/sources.ts` je integrační bod a exportuje výsledné pole, typy a pomocné funkce.

## 2. Datový model Source

Každý zdroj má povinně:

| Pole | Význam |
| --- | --- |
| `id` | Trvalá interní identita a kotva na stránce zdrojů. |
| `title` | Název dokumentu, dat nebo stránky. |
| `author` | Autor, tým nebo odpovědná instituce. |
| `year` | Rok publikace nebo verze. |
| `publication` | Časopis, vydavatel, repozitář nebo instituce. |
| `category` | Barevná skupina `science`, `book`, `politics` nebo `organization`. |
| `type` | Konkrétní druh, například studie, datový soubor nebo mezinárodní dohoda. |
| `topics` | Vyhledávací témata používaná filtrem zdrojů. |

Volitelná pole:

| Pole | Význam |
| --- | --- |
| `externalUrl` | DOI nebo původní autoritativní stránka. |
| `openAccessUrl` | Přímý veřejný plný text nebo veřejná data, pokud se liší od původního odkazu. |
| `availability` | `open-access` nebo `archived`. |
| `driveFileId` | ID legálně sdílené archivní kopie na Google Drivu. |
| `archiveRelation` | Zda jde o kopii zdroje, nebo pouze související materiál. |
| `citationLabel` | Krátký text automatické citace. |

Kategorie nevyjadřuje kvalitu ani sílu důkazu. Slouží k orientaci a barevnému rozlišení.

## 3. Stabilní ID

Používané rodiny ID:

- historické ID, například `1896_Arrhenius`;
- DOI ID, například `DOI_10_1038_s43247_024_01761_5`;
- webové ID, například `WEB_NASA_popis_hash`.

ID musí být jedinečné a po zveřejnění se nesmí změnit. Používá se současně:

- v `SourceLink` a `Citation`;
- jako HTML `id` karty na `/zdroje`;
- v adrese `/zdroje#ID`;
- v historické ose;
- v archivních manifestech;
- v názvech lokálně uložených souborů.

Kosmetická změna ID by proto byla změnou veřejného rozhraní.

## 4. Otevřený přístup

Pro nový odborný argument platí:

- samotný DOI nestačí;
- samotný abstrakt nestačí;
- stránka vydavatele dostupná jen předplatitelům nestačí;
- práce musí mít legálně veřejný plný text;
- DOI se uvádí, pokud existuje, i když je plný text jinde;
- datový zdroj vede na původní veřejný portál nebo soubor;
- zdroj musí skutečně podporovat konkrétní tvrzení.

V `articleSources.ts` určuje `articleOpenAccessSources` způsob zveřejnění:

```ts
DOI_...: true
```

znamená, že `externalUrl` je sám veřejně otevřitelný zdroj. Varianta:

```ts
DOI_...: "https://institucionalni-repozitar.example/plny-text.pdf"
```

zachová DOI v `externalUrl` a přidá samostatný `openAccessUrl`. Karta potom ukáže dvě tlačítka: DOI a plný text. U datového souboru druhé tlačítko říká „Otevřít veřejná data“.

Při přidání zdroje nestačí přidat klíč do mapy. Je nutné odkaz skutečně otevřít a ověřit, že nevede pouze na abstrakt, přihlášení, dočasný token nebo nelegální kopii.

## 5. Jak vznikají tlačítka karty

`SourceCard.tsx` používá následující logiku:

| Dostupné pole | Tlačítko |
| --- | --- |
| DOI v `externalUrl` | Otevřít DOI |
| Jiný veřejný `externalUrl` | Otevřít veřejný nebo původní zdroj |
| Rozdílný `openAccessUrl` | Otevřít plný text nebo veřejná data |
| `driveFileId` | Otevřít kopii na Google Drive |
| `driveFileId` | Stáhnout kopii |
| `archiveRelation: related-material` | Text tlačítka výslovně říká, že jde o související soubor |

Otevřeně dostupná vědecká práce nemá dostat Drive tlačítko. Při spojování katalogu `sources.ts` záměrně nepřidá archivní soubor ke zdroji označenému `open-access`.

## 6. Kdy používat vlastní archiv

Vlastní archiv není náhradou vydavatele ani způsobem obcházení paywallu. Používá se hlavně pro:

- politická rozhodnutí a právní dokumenty;
- institucionální dokumenty s nestabilním původním odkazem;
- historické prameny získané z knihoven a archivů;
- dokumenty, u kterých bylo ověřeno právo veřejné kopie;
- související podklad, pokud je na kartě jasně označen jako související materiál.

Otevřené studie a stabilní odborné repozitáře se odkazují přímo. Tím se šetří místo a zachovává vazba na autoritativní původ.

## 7. Archivní pipeline

Archiv má několik oddělených kroků. Žádný z nich sám neznamená, že je soubor právně možné zveřejnit.

```text
živý katalog zdrojů
  -> audit-source-downloads.mjs
  -> audits/source-downloadability.*
  -> download-source-archive.mjs
  -> source-archive/ + audits/source-download-manifest.json
  -> ruční nebo konektorové nahrání na správný Google Drive
  -> audits/google-drive-upload-manifest.json
  -> sync-google-drive-archive.mjs
  -> app/data/sourceArchive.ts
  -> spojení se živým katalogem
```

### `pnpm audit:downloads`

Prověřuje dostupnost souborů a zapisuje JSON, CSV a Markdown do `audits`. Podporuje volby `--refresh`, `--limit=<n>` a `--concurrency=<n>`. Jde o síťovou operaci a výsledek se může měnit podle dostupnosti poskytovatelů.

Auditní klasifikace pomáhá rozhodnout, co lze stáhnout. Není právním posudkem. Pole licence a veřejného sdílení musí člověk ověřit.

### `pnpm download:sources`

Čte audit dostupnosti a stahuje vybrané veřejné soubory do ignorovaného adresáře `source-archive`. Výchozí bezpečnostní limit je 750 MB na soubor a 20 GB celkem. Lze jej změnit argumenty `--max-file-mb=<n>` a `--max-total-gb=<n>`. `--retry-failed` opakuje neúspěšné položky.

Skript může přenést velké množství dat. Nespouští se jako běžná součást buildu.

### `pnpm verify:source-archive`

Kontroluje:

- existenci souborů;
- velikost a SHA-256 proti manifestu;
- základní podpis formátu;
- zda se místo dokumentu nestáhla HTML stránka;
- osiřelé a chybějící soubory.

Volba `--repair` může doplnit manifest o lokální soubory, které lze bezpečně přiřadit. Mění manifest a nesmí se používat bez kontroly diffu.

### Nahrání na Google Drive

Repozitář neobsahuje přihlašovací údaje ani obecný příkaz, který by bezpečně rozhodl, co nahrát. Nahrání probíhá odděleně na účtu projektu. Výsledkem musí být `audits/google-drive-upload-manifest.json`, který propojí lokální cestu se skutečným Drive ID.

Před nahráním je potřeba ověřit:

- správný Google účet;
- právo soubor veřejně sdílet;
- že nejde o otevřenou vědeckou práci, kterou máme raději odkazovat u původního poskytovatele;
- veřejné oprávnění „kdokoliv s odkazem může zobrazit“;
- shodu názvu, velikosti a zdrojového ID.

### `pnpm sync:drive-archive`

Čte download a upload manifest, kontroluje jejich vzájemnou shodu a generuje `app/data/sourceArchive.ts`. Tento soubor má v první řádce upozornění, že se nemá upravovat ručně.

## 8. Auditní soubory nejsou živá databáze

Adresář `audits` je verzovaný záznam konkrétní archivní operace. Počet položek v auditu může být vyšší nebo nižší než současný počet zdrojů, protože katalog se mezitím změnil.

Proto:

- nepoužívejte starý audit jako důkaz, že současný odkaz funguje;
- před mazáním záznamu prohledejte aktuální komponenty a datové soubory;
- po velké změně katalogu vytvořte nový audit, pokud se má pokračovat v archivaci;
- změnu auditních manifestů commitujte jen tehdy, když audit skutečně proběhl a výstup byl zkontrolován.

## 9. Strukturální audit citací

`pnpm audit:sources` je rychlá lokální kontrola, která ověřuje:

- chybějící ID v citacích;
- přímé externí odkazy uvnitř odborných článků;
- starý typ `ReferenceLink`;
- duplicitní ID a URL;
- poškozené bibliografické značky.

Neověřuje věcnou správnost tvrzení ani aktuální HTTP stav každého externího odkazu. To je samostatná rešeršní a publikační povinnost.

## 10. Bezpečné odstranění zdroje

Před odstraněním ID:

1. prohledejte celý repozitář přes `rg "ID_ZDROJE"`;
2. zkontrolujte články, historii, testy a auditní mapování;
3. zjistěte, zda zdroj nepoužívá jiné téma;
4. odstraňte citaci nebo ji nahraďte zdrojem, který opravdu dokládá stejné tvrzení;
5. odstraňte záznam z ručního katalogu;
6. neprovádějte ruční kosmetické čištění generovaného `sourceArchive.ts`;
7. spusťte audit a testy;
8. na živém webu ověřte, že nezůstala chybějící citace ani neplatná kotva.

## 11. Co nikdy necommitovat

- hesla, přístupové tokeny nebo cookies;
- soubory `.env` s tajnými hodnotami;
- lokální stažený adresář `source-archive`;
- dočasné soubory `.partial`;
- obsah cizího díla bez ověřeného práva ke zveřejnění;
- ručně vytvořenou změnu `sourceArchive.ts`, která nevychází z manifestů.
