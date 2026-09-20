# Postup práce s obsahem

Tento dokument popisuje, které soubory je potřeba změnit při přidání nebo úpravě obsahu. Odborná a jazyková pravidla zůstávají v `AGENTS.md`, `CONTENT.md`, `METHODS.md` a `MECHANISMS.md`.

## 1. Než začne práce

1. Přečtěte `AGENTS.md` a `CONTENT.md`.
2. U metody navíc přečtěte `METHODS.md`.
3. U mechanismu navíc přečtěte `MECHANISMS.md`.
4. Ověřte, zda už téma, slug nebo zdrojové ID v repozitáři neexistuje.
5. Zkontrolujte aktuální stav Gitu a nezasahujte do cizích rozpracovaných změn.
6. Oddělte rešerši od publikace. Zdroj musí skutečně dokládat tvrzení, ke kterému bude připojen.

## 2. Úprava existujícího článku

U pozorování najděte článek v `app/components/*Article.tsx` podle mapování v `app/pozorovani/[slug]/page.tsx`. Hlavička článku, datum a perex jsou v route, nikoliv uvnitř článkové komponenty.

Při změně:

- zachovejte zavedenou strukturu článku;
- citace připojte přes `SourceLink` se stabilním ID;
- zkontrolujte, že každý použitý zdroj existuje v katalogu;
- neponechávejte v databázi odstraněný zdroj, pokud jej nepoužívá jiný článek, historie nebo stránka;
- při změně obrázku upravte soubor v `public/media`, alternativní text, popisek, zdroj a licenci;
- při změně názvu nebo shrnutí ověřte také katalogový záznam v `app/data`;
- při významné odborné revizi aktualizujte datum v route.

## 3. Nové pozorování

### Krok 1: katalog

Přidejte položku do `evidenceTopics` v `app/data/evidence.ts`.

- `slug` je část veřejné adresy a po zveřejnění se nemění;
- `title` je název dlaždice;
- `category` určuje odbornou oblast;
- `summary` musí popsat, co stránka vysvětlí;
- `status` je interní stav, i když se nyní na dlaždici nezobrazuje.

Tím vznikne dlaždice a statická adresa, nikoliv plný článek.

### Krok 2: zdroje

Založte všechny nové záznamy v centrálním katalogu podle `docs/SOURCES-AND-ARCHIVE.md`. Ověřte DOI, veřejný plný text, autory, rok, název, datovou verzi a oprávnění obrázků.

### Krok 3: média

Uložte zveřejňovaná média do samostatné složky `public/media/<slug-nebo-tema>/`. Nepoužívejte vzdálený obrázek jako jedinou kopii zveřejněného vizuálu. U každého obrázku uchovejte dohledatelný zdroj a licenci v článku nebo v databázi zdrojů.

### Krok 4: komponenta článku

Vytvořte `app/components/<Nazev>Article.tsx`. Použijte existující plné pozorovací články jako konstrukční vzor, nikoliv jako textovou šablonu, která se mechanicky překládá.

### Krok 5: připojení k adrese

V `app/pozorovani/[slug]/page.tsx`:

1. importujte komponentu;
2. přidejte větev pro nový slug;
3. nastavte kategorii, nadpis, datum a perex v `PageLead`;
4. vložte článkovou komponentu;
5. zachovejte návratový odkaz na katalog.

### Krok 6: vyhledávání a testy

- Přidejte veřejnou adresu do `public/sitemap.xml`.
- Přidejte nebo rozšiřte obsahový test v `tests/rendered-html.test.mjs`.
- Spusťte povinné kontroly z `docs/DEVELOPMENT.md`.
- Zkontrolujte stránku na počítači a mobilu.

## 4. Nová metoda

1. Přidejte metodu do `measurementMethods` v `app/data/methods.ts` a použijte existující kategorii z `methodCategories`, případně vědomě rozšiřte i seznam kategorií.
2. Připravte zdroje podle `METHODS.md` a `docs/SOURCES-AND-ARCHIVE.md`.
3. Vytvořte komponentu `app/components/<Nazev>Article.tsx`.
4. Importujte ji v `app/metody/[slug]/page.tsx` a přidejte větev pro slug.
5. Doplňte `PageLead` s datem a přesným perexem.
6. Přidejte adresu do sitemap XML.
7. Přidejte test, který rozlišuje plný článek od obecné katalogové stránky.

Bez kroků 3 a 4 vznikne pouze klikací dlaždice a jednoduchá detailní stránka se shrnutím.

## 5. Nový mechanismus

Položka v `app/data/mechanisms.ts` dnes automaticky vytváří dlaždici a obecnou detailní stránku. Musí obsahovat:

- stabilní slug;
- název a kategorii;
- stručné vymezení mechanismu;
- rozlišující důkazy, které musí vysvětlení objasnit.

Plný mechanismový článek zatím nemá samostatný registr. Při jeho prvním zavedení je potřeba vytvořit článkovou komponentu a rozšířit `app/mechanismy/[slug]/page.tsx` obdobně jako u metod. Tento krok nesmí zrušit automatické adresy ostatních katalogových položek.

## 6. Historický milník

1. Nejdřív založte úplný bibliografický záznam zdroje.
2. Do `app/data/history.ts` přidejte pouze `sourceId`, vysvětlující odstavec a `lane`.
3. Použijte `academic` pro vývoj poznání, měření a vědecké infrastruktury.
4. Použijte `institutional` pro formální politické rozhodnutí.
5. Ověřte kritéria významu a vyloučené typy událostí v `CONTENT.md`.

Rok, autor, název a typ se nesmějí opisovat do historické položky. Načítají se ze zdroje a musí zůstat konzistentní na jednom místě.

## 7. Projekce, důsledky a osobnosti

Projekce a důsledky jsou zatím osnovy přímo v příslušných souborech `page.tsx`. Přidání dlaždice proto nevyžaduje datový katalog, ale ani automaticky nevytvoří detailní adresu.

Osobnosti jsou ručně vytvořené stránky. Při přidání další osobnosti je nutné vytvořit adresář, stránku, odkaz z katalogu, případné zdroje, sitemapu a test.

## 8. Citace v textu

Pro souvislý odborný výklad používejte:

```tsx
<SourceLink id="DOI_10_xxx">Autor et al., rok</SourceLink>
```

Pro kompaktní bibliografickou značku, například na historické ose, používejte:

```tsx
<Citation id="stabilni_ID" />
```

Do odborného odstavce nevkládejte ručně externí URL. Čtenář má nejprve přejít na kartu zdroje, kde vidí úplnou identitu dokumentu a oddělené odkazy na DOI, plný text, data nebo archivní kopii.

## 9. Obrázky a grafy

Před zveřejněním ověřte:

- že obrázek je čitelný v reálné šířce článku;
- že popisek vysvětluje osy, barvy, panely a zkratky potřebné k přečtení;
- že alternativní text popisuje obsah, nikoliv pouze název souboru;
- že zdroj a licence odpovídají konkrétní verzi obrázku;
- že čtenář pozná, zda jde o měření, rekonstrukci, model nebo ilustraci;
- že obrázek není zaměněn za důkaz tvrzení, které ve skutečnosti nezobrazuje;
- že soubor funguje po statickém exportu a na živé adrese.

## 10. Definice hotové změny

Změna je hotová až tehdy, když:

1. text odpovídá příslušnému standardu;
2. všechny citace mají existující záznam;
3. odborné práce mají DOI, pokud existuje, a legálně otevřitelný plný text;
4. nepoužité záznamy byly bezpečně posouzeny a případně odstraněny;
5. obrázky a odkazy fungují;
6. stránka nepřetéká na počítači ani mobilu;
7. prošly lint, audit zdrojových vazeb, build a testy;
8. sitemap obsahuje každou novou veřejnou adresu;
9. commit obsahuje pouze související změny;
10. GitHub Pages dokončil nasazení a změna je ověřená na živém webu.
