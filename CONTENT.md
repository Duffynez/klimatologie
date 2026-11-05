# Práce s obsahem

Tento dokument stanovuje obsahové a citační požadavky. Společná pravidla jazyka a vysvětlování obsahuje [STYLE.md](STYLE.md). Potřebné podklady podle druhu úkolu vybíráme podle [AGENTS.md](AGENTS.md).

## Přidání zdroje

1. Nejdřív vytvořte záznam v centrálním katalogu. Základní a historické záznamy jsou v `app/data/sources.ts`, většina zdrojů odborných článků v `app/data/articleSources.ts`. Výsledné pole vždy skládá `sources.ts`. Přesný postup popisuje `docs/SOURCES-AND-ARCHIVE.md`.
2. ID tvořte jako `rok_Prijmeni`, stabilní popisný identifikátor nebo jednotným převodem DOI. Nikdy jej po zveřejnění neměňte.
3. Uveďte autora, rok, název, vydavatele nebo časopis a volně pojmenovaný typ dokumentu.
4. Zvolte kategorii `science`, `book`, `politics` nebo `organization`. Kategorie určuje barevné značení karty, zatímco `type` popisuje konkrétní druh dokumentu.
5. ID souboru Google Drive používejte jen u kopie, kterou smíme sdílet a kterou má smysl dlouhodobě archivovat. Otevřeně dostupné vědecké práce na Drive nekopírujte. Vedle archivní kopie vždy uveďte autoritativní původní stránku nebo DOI.
6. Ověřte, že funguje otevření i stažení zdroje.

## Dostupnost vědeckých zdrojů

Vědecký argument stavíme pouze ze studií, dat a metodických dokumentů, které si může čtenář bez předplatného
otevřít v plném znění. U odborné práce uvádíme DOI jako trvalý bibliografický odkaz a vedle něj přímý odkaz na
otevřenou verzi u vydavatele, autora nebo důvěryhodného institucionálního repozitáře. Samotný abstrakt nebo
stránka vyžadující platbu nestačí. Pokud pro důležité tvrzení nenajdeme otevřený původní zdroj, tvrzení na webu
nepoužijeme, dokud jej nedokážeme doložit jinak.

Otevřené vědecké práce nekopírujeme na Google Drive. Vlastní archiv používáme pro historické prameny získané z
knihoven a archivů a pro politické či institucionální dokumenty, u nichž hrozí zánik nebo změna původního
odkazu. Každá taková kopie musí mít ověřené právo ke sdílení.

## Přidání odborné stránky

Povinný obsah, stavbu výkladu a doprovod článku stanovuje příslušný tematický standard: [OBSERVATIONS.md](OBSERVATIONS.md) pro pozorování, [METHODS.md](METHODS.md) pro metody a [MECHANISMS.md](MECHANISMS.md) pro mechanismy. Následující pravidla citací a sazby platí společně.

V souvislém článku citujte přes komponentu `SourceLink` a ID zdroje. Komponentu `Citation` používejte pro kompaktní hranaté citace, například na historické ose. Obě automaticky přebírají barvu kategorie zdroje. Barvu nepřidávejte ručně. Neopisujte adresy zdrojů přímo do odborných odstavců.

Rovnice sázejte přes `Equation`, krátké matematické výrazy v odstavci přes `InlineMath`. Obě komponenty přijímají TeX v atributu `tex`, v JSX použijte `String.raw`. Dělení zapisujte jako skutečný zlomek pomocí `\frac{čitatel}{jmenovatel}`, indexy pomocí `_` a mocniny pomocí `^`. Jednotky a popisné zkratky sázejte vzpřímeně, například `\mathrm{m}` nebo `\mathrm{RH}`. Českou desetinnou čárku zapisujte jako `{,}`. Delší rovnice rozdělte mezi úplnými členy pomocí pole v `tex`, aby zůstaly čitelné na mobilu. Samostatné rovnice mají jednotnou volnou sazbu uprostřed, bez rámečku a barevného pozadí.

## Milníky na stránce historie

Výběr událostí, rozlišení data a pramene, vysvětlování vědeckých a politických milníků i kontrolu historické osy stanovuje [HISTORY.md](HISTORY.md). Dostupnost a citování pramenů se řídí společnými pravidly tohoto dokumentu. Technické připojení popisuje [docs/CONTENT-WORKFLOW.md](docs/CONTENT-WORKFLOW.md#6-historický-milník).

## Obsahová kontrola před zveřejněním

Úplnost ověříme podle požadavků na příslušný druh článku. Čtivost posoudíme samostatně podle [STYLE.md](STYLE.md). Při obsahové kontrole také ověříme:

- Je každé podstatné tvrzení navázané na zdroj?
- Je zdroj dostupný, správně popsaný a lze jej legálně sdílet?
- Má graf popis, jednotky, původ dat a omezení?
- Je jasné, co je měření, co interpretace a co nejistota?
