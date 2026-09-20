# Vývoj, testování a nasazení

## 1. Požadavky

- Node.js nejméně `22.13.0`;
- pnpm 10;
- Git;
- přístup pro push do repozitáře `Duffynez/klimatologie`, pouze pokud se má změna nasadit.

Instalace musí respektovat uzamčené verze:

```bash
pnpm install --frozen-lockfile
```

Bez vědomého důvodu neměňte `pnpm-lock.yaml` ani verze závislostí.

## 2. Vývojový server

```bash
pnpm dev
```

Výchozí adresa je `http://localhost:3000/`. Pokud je port obsazený, lze Vinextu předat jiný port podle aktuální syntaxe jeho CLI.

Vývojový server slouží pro kontrolu rozvržení a interakcí. Není to podoba nasazení: produkce je statický export.

## 3. Jednotlivé kontroly

### Lint

```bash
pnpm lint
```

Spustí ESLint s pravidly Next.js Core Web Vitals a TypeScriptu. Adresáře s buildem jsou ignorované.

### Strukturální audit zdrojů

```bash
pnpm audit:sources
```

Kontroluje vazby mezi odbornými články a centrálním katalogem. Podrobnosti jsou v `docs/SOURCES-AND-ARCHIVE.md`.

### Produkční build

```bash
pnpm build
```

Vinext analyzuje klientské a serverové části, předvykreslí známé adresy a uloží statický web do `dist/client`.

### Obsahové testy

```bash
pnpm test
```

Tento příkaz nejprve znovu vytvoří produkční build a potom spustí `tests/rendered-html.test.mjs`. Testy kontrolují například:

- existenci katalogů a hlavních sekcí;
- počet a strukturu pozorování, metod a mechanismů;
- propojení článkových citací s katalogem;
- povinné části hotových článků;
- nepřítomnost starých placeholderů;
- pravidla závěrečného shrnutí pozorování;
- zdrojové a obrazové vazby důležitých článků.

Testy nejsou náhradou odborné kontroly. Mohou potvrdit přítomnost citace, ale ne to, že studie skutečně podporuje větu.

## 4. Doporučené pořadí před commitem

```bash
pnpm lint
pnpm audit:sources
pnpm test
```

`pnpm test` už build obsahuje. Samostatný `pnpm build` má smysl při diagnostice nebo když potřebujete pouze export.

Potom zkontrolujte:

```bash
git diff --check
git status --short
git diff
```

Do commitu zahrňte pouze soubory související s úkolem. Lokální logy, buildy a cizí rozpracované změny se nesmějí přidávat.

## 5. Vizuální kontrola

Každou uživatelsky viditelnou změnu zkontrolujte v prohlížeči.

### Počítač

- hlavička a navigace se vejdou nebo se chovají podle existujícího návrhu;
- nadpis, perex a první obsah mají správnou hierarchii;
- text nepřekrývá slovníček ani obrázky;
- obrázky mají nenulové přirozené rozměry a nejsou rozbité;
- odkazy na zdroje vedou na správné karty;
- stránka nemá vodorovné přetékání.

### Mobil

- nejdelší nadpis se vejde do šířky;
- navigace zůstává ovladatelná;
- slovníček se změní na běžný blok a nepřekrývá text;
- obrázky, popisky, zdrojové karty a tlačítka se vejdou;
- nevzniká vodorovný posun celé stránky.

### Zdroje

U každého nového či změněného zdroje ověřte kartu na `/zdroje#ID`:

- správné bibliografické údaje;
- správnou barevnou kategorii;
- DOI;
- veřejný plný text nebo data;
- nepřítomnost Google Drive tlačítka u otevřené vědecké práce;
- správné označení archivní kopie nebo souvisejícího materiálu.

## 6. Statický export a jeho důsledky

Produkce nemůže spoléhat na běžící Node server. Proto:

- každá dynamická adresa musí být známá přes `generateStaticParams`;
- serverové API route nejsou součástí současného návrhu;
- vzdálená optimalizace obrázků je vypnutá;
- vyhledávání ve zdrojích probíhá pouze v prohlížeči;
- nová adresa musí být dostupná jako soubor statického exportu;
- koncové lomítko adres je součástí konfigurace.

## 7. Nasazení na GitHub Pages

Workflow `.github/workflows/deploy-pages.yml` se spouští:

- automaticky po pushi do `main`;
- ručně přes `workflow_dispatch`.

Build job používá Ubuntu, Node 22 a pnpm 10. Po `pnpm install --frozen-lockfile` spustí `pnpm build` a nahraje `dist/client`. Deploy job předá artefakt GitHub Pages.

Důležité: workflow v současnosti nespouští lint ani testy. Úspěšné nasazení znamená, že web šel sestavit, nikoliv že prošly všechny redakční pojistky.

Po pushi:

1. ověřte, že workflow běží pro správný commit;
2. počkejte na dokončení jobů `build` a `deploy`;
3. otevřete přesnou živou adresu;
4. ověřte nový text nebo funkci, nikoliv jen HTTP 200;
5. zkontrolujte odpovídající zdrojové karty a obrázky;
6. při podezření na cache porovnejte konkrétní nový text a commit, neprovádějte bezmyšlenkovité opakované pushování.

## 8. Doména, sitemap a indexace

`public/CNAME` obsahuje `klimatologie.eu`. DNS je spravované mimo Git a nesmí se měnit kvůli běžnému nasazení obsahu.

`public/sitemap.xml` je statický soubor. Při nové veřejné adrese:

1. přidejte absolutní URL s koncovým lomítkem;
2. spusťte build;
3. po nasazení ověřte `https://klimatologie.eu/sitemap.xml`;
4. není nutné sitemapu znovu odesílat Search Console po každé změně, pokud její URL zůstává stejná.

`public/robots.txt` odkazuje na tuto sitemapu. Soubor `public/googleb035ba2ec16f4455.html` je ověření Google Search Console a nemá se bez důvodu přejmenovávat ani odstraňovat.

## 9. Analytika

Cloudflare Web Analytics je vložený v `app/layout.tsx` jako externí beacon skript. Měření není součástí React komponent jednotlivých stránek. Odstranění nebo duplikování skriptu v článku by vedlo k chybějícím nebo zdvojeným návštěvám.

Dashboard analytiky ani účet nejsou součástí repozitáře. Do Gitu se neukládají přihlašovací údaje.

## 10. Archivní příkazy

Tyto příkazy nejsou součástí běžného vývoje stránky:

```bash
pnpm audit:downloads
pnpm download:sources
pnpm verify:source-archive
pnpm sync:drive-archive
```

Mohou používat síť, měnit verzované manifesty nebo pracovat s několika gigabajty dat. Před použitím přečtěte `docs/SOURCES-AND-ARCHIVE.md` a po použití zkontrolujte celý diff.

## 11. Rychlá diagnostika

### Citace ukazuje „chybějící zdroj“

- zkontrolujte přesnou shodu ID;
- ověřte, že záznam je v `sources.ts` nebo `articleSources.ts`;
- spusťte `pnpm audit:sources`.

### Dlaždice existuje, ale článek je prázdný

- katalog vytvořil adresu, ale článková komponenta není připojena v dynamické route;
- zkontrolujte import a větev podle slugu.

### Zdroj nemá tlačítko plného textu

- zkontrolujte `articleOpenAccessSources`;
- ověřte, že URL je veřejný plný text;
- u dat očekávejte text „Otevřít veřejná data“.

### Otevřený zdroj ukazuje Google Drive

- zkontrolujte `availability: "open-access"`;
- zkontrolujte, zda se záznam správně transformuje přes mapu otevřeného přístupu;
- neupravujte generovaný archivní soubor ručně.

### GitHub Pages má starý obsah

- ověřte, že commit je skutečně na `main`;
- zkontrolujte konkrétní workflow run a jeho SHA;
- počkejte na dokončení deploy jobu;
- na živé stránce hledejte konkrétní nový text.
