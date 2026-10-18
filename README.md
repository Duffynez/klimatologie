# Klimatologie.eu

[Klimatologie.eu](https://klimatologie.eu/) je český statický web o tom, co v klimatu pozorujeme, jak tato pozorování vznikají a proč z nich lze vyvozovat vědecké závěry. Projekt je stavěný tak, aby čtenář nemusel věřit samotnému webu: podstatná tvrzení vedou k metodám, původním pracím, veřejným datům a otevřeným plným textům.

## Co je pro projekt závazné

Cíle projektu, společné zásady a rozcestník závazných podkladů podle úkolu obsahuje [AGENTS.md](AGENTS.md). Pravidla používáme podle rozsahu práce. Již přečtené a nezměněné znění dostupné v aktuálním kontextu není nutné znovu načítat.

Jazyk a srozumitelné vysvětlování mají společný standard [STYLE.md](STYLE.md). Odborný obsah a citace upravuje [CONTENT.md](CONTENT.md), zvláštní požadavky na pozorování [OBSERVATIONS.md](OBSERVATIONS.md), na metody [METHODS.md](METHODS.md) a na mechanismy [MECHANISMS.md](MECHANISMS.md). Technické postupy jsou v adresáři `docs` a rozcestník v AGENTS.md určuje, kdy je použít.

## Jak web funguje v jedné minutě

Web nepoužívá redakční systém ani databázový server. Články jsou komponenty Reactu a katalogy témat a zdrojů jsou typované soubory v TypeScriptu.

```text
záznam tématu v app/data
        |
        v
dynamická adresa /pozorovani/[slug], /metody/[slug] nebo /mechanismy/[slug]
        |
        v
článek v app/components
        |
        v
SourceLink nebo Citation se stabilním ID
        |
        v
spojený katalog app/data/sources.ts
        |
        v
karta na /zdroje s DOI, plným textem, veřejnými daty nebo archivní kopií
```

Vinext sestaví aplikaci jako statický web. GitHub Actions po každém pushi do `main` vytvoří export v `dist/client` a nasadí jej na GitHub Pages. Vlastní doménu určuje `public/CNAME`.

## Hlavní části repozitáře

| Cesta | Úloha |
| --- | --- |
| `app/page.tsx` | Úvodní stránka. |
| `app/pozorovani`, `app/metody`, `app/mechanismy` | Katalogy a dynamické adresy hlavních odborných částí. |
| `app/projekce`, `app/dusledky`, `app/historie`, `app/osobnosti`, `app/zdroje` | Ostatní hlavní části webu. |
| `app/components/*Article.tsx` | Ručně psané plné články. |
| `app/components/SourceLink.tsx` | Přirozená citace uvnitř článku, která vede na příslušnou kartu zdroje. |
| `app/components/Citation.tsx` | Krátká hranatá citace používaná například na historické ose. |
| `app/data/evidence.ts` | Katalog čtrnácti pozorování. |
| `app/data/methods.ts` | Katalog měřicích a analytických metod. |
| `app/data/mechanisms.ts` | Katalog klimatických mechanismů. |
| `app/data/history.ts` | Vědecké a politické milníky historické osy. |
| `app/data/sources.ts` | Typ zdroje, základní záznamy, spojení všech zdrojů a pomocné funkce. |
| `app/data/articleSources.ts` | Rozsáhlý katalog zdrojů odborných článků a mapa otevřeného přístupu. |
| `app/data/sourceArchive.ts` | Generované propojení zdrojů s kopiemi na Google Drivu. Neupravuje se ručně. |
| `public/media` | Obrázky, grafy a další média zveřejněná přímo s webem. |
| `tests/rendered-html.test.mjs` | Obsahové a strukturální pojistky celého webu. |
| `scripts` | Audity zdrojů, stahování a kontrola archivu. |
| `audits` | Verzované výsledky posledních archivních auditů. Nejde automaticky o aktuální stav živého katalogu. |
| `.github/workflows/deploy-pages.yml` | Produkční build a nasazení GitHub Pages. |

Podrobný popis toku dat a odpovědnosti jednotlivých souborů je v [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Lokální spuštění

Požadavky:

- Node.js `22.13.0` nebo novější;
- pnpm 10;
- Git.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Vývojový server je standardně dostupný na `http://localhost:3000/`.

## Povinné kontroly před zveřejněním

```bash
pnpm lint
pnpm audit:sources
pnpm test
```

`pnpm test` nejprve vytvoří produkční statický export a potom spustí obsahové testy. Samostatný build lze spustit příkazem `pnpm build`.

U změny stránky je navíc potřeba vizuálně zkontrolovat širokou i mobilní obrazovku, načtení obrázků a případné vodorovné přetékání. U změny zdrojů je nutné otevřít také odpovídající karty na `/zdroje`.

## Základní pravidla změn

1. Nikdy neměňte zveřejněné ID zdroje. Je součástí odkazů a kotev na webu.
2. Novou citaci nejprve založte v centrálním katalogu a až potom použijte její ID v článku.
3. Odborný argument stavte pouze na legálně otevřitelném plném textu, nikoliv na abstraktu za paywallem.
4. Otevřenou vědeckou práci nekopírujte na Google Drive. Vlastní archiv je určen hlavně pro historické, politické a institucionální dokumenty, u kterých je archivace oprávněná a potřebná.
5. Nová položka v katalogu sama nevytvoří plný článek. Články se připojují ručně ve směrovací stránce příslušné sekce.
6. `app/data/sourceArchive.ts` neupravujte ručně. Vzniká ze dvou auditních manifestů.
7. `public/sitemap.xml` je ručně spravovaný a při přidání zveřejněné adresy se musí aktualizovat.
8. Push do `main` nasazuje web. Před pushem musí být změna otestovaná lokálně, protože produkční workflow spouští pouze build.

## Nasazení

Produkční větev je `main`. Push do této větve spustí workflow **Deploy GitHub Pages**:

1. nainstaluje přesně verze z `pnpm-lock.yaml`;
2. spustí `pnpm build`;
3. nahraje `dist/client` jako Pages artefakt;
4. nasadí výsledek na GitHub Pages a doménu `klimatologie.eu`.

Podrobnosti včetně sitemap, analytiky a ověření živého webu jsou v [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md).
