# Práce s obsahem

## Přidání zdroje

1. Nejdřív vytvořte záznam v `app/data/sources.ts`.
2. ID tvořte jako `rok_Prijmeni` nebo jako stabilný popisný identifikátor, nikdy jej po zveřejnění neměňte.
3. Uveďte autora, rok, název, vydavatele nebo časopis a volně pojmenovaný typ dokumentu.
4. Zvolte kategorii `science`, `book`, `politics` nebo `organization`; určuje barevné značení karty, zatímco `type` popisuje konkrétní druh dokumentu.
5. Vložte ID souboru Google Drive jen u kopie, kterou smíme sdílet. Vedle kopie vždy dohledávejte autoritativní původní stránku nebo DOI pro budoucí rozšíření databáze.
6. Ověřte, že funguje otevření i stažení zdroje.

## Přidání odborné stránky

Každá stránka o jevu musí mít tyto části:

1. Co přesně pozorujeme.
2. Jak se veličina měří.
3. Co data ukazují a jaké mají limity.
4. Datové soubory, grafy a zdroje.
5. Datum poslední kontroly.

Citujte přes komponentu `Citation` a ID zdroje. Neopisujte adresy zdrojů přímo do odstavců.

## Kontrolní otázky před zveřejněním

- Je každé podstatné tvrzení navázané na zdroj?
- Je zdroj dostupný, správně popsaný a lze jej legálně sdílet?
- Má graf popis, jednotky, původ dat a omezení?
- Je jasné, co je měření, co interpretace a co nejistota?
