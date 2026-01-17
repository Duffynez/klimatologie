# Klimatologie.eu

Tento repozitář obsahuje zdrojový kód pro webové stránky [klimatologie.eu](http://klimatologie.eu), nezávislý a vědecky zaměřený informační portál o klimatologii v českém jazyce.

## Cíl projektu

Cílem tohoto webu je vytvořit přehledný, důvěryhodný a "brutálně vědecký" zdroj informací o změně klimatu, jejích příčinách a důsledcích. Veškeré informace jsou pečlivě ozdrojované, aby si čtenáři mohli sami ověřit původní data a studie.

## Jak web funguje

Web je postaven na statickém generátoru stránek **Jekyll**. Obsah je psán v Markdown souborech, což usnadňuje správu a verzování.

### Správa obsahu a struktura

Web je logicky členěn do tematických celků, které jsou technicky řešeny buď jako statické stránky, nebo pomocí Jekyll "Collections".

#### Pozorování (`/pozorovani/`)

*   **Technické řešení:** Jekyll Collection.
*   **Struktura:** Každý pozorovaný jev (např. globální teplota, tání ledu) má svůj vlastní Markdown soubor ve složce `_pozorovani/`.
*   **Zobrazení:** Hlavní stránka `/pozorovani/` slouží jako rozcestník. V postranním panelu se automaticky generuje navigační menu (`sidebar: nav: "pozorovani_menu"`), které odkazuje na jednotlivé soubory v kolekci. Tím je zajištěno, že každé nově přidané pozorování se automaticky objeví v menu.

#### Historie (`/historie/`)

*   **Technické řešení:** Statická Markdown stránka.
*   **Struktura:** Celý obsah, včetně struktury časové osy a jednotlivých milníků, je zapsán přímo v souboru `historie.md`. Vzhled je definován pomocí CSS stylů vložených přímo do tohoto souboru.
*   **Zobrazení:** Stránka jednoduše vykreslí obsah tak, jak je zapsán v souboru.

#### Osobnosti (`/osobnosti/`)

*   **Technické řešení:** Jekyll Collection.
*   **Struktura:** Každá osobnost má svůj vlastní Markdown soubor ve složce `_osobnosti/`.
*   **Metadata:** Na začátku každého souboru jsou v YAML formátu uvedena klíčová data:
    *   `title`: Jméno osobnosti.
    *   `rok`: Letopočet klíčového objevu (slouží k chronologickému řazení).
    *   `excerpt`: Krátký souhrn, který se zobrazí na kartě v přehledu.
    *   `header.teaser`: Cesta k profilovému obrázku.
*   **Zobrazení:** Hlavní stránka `/osobnosti/` automaticky prochází všechny soubory v kolekci `_osobnosti`, seřadí je podle `roku` a vygeneruje interaktivní mřížku s kartami jednotlivých vědců. Kliknutím na kartu se uživatel dostane na detailní stránku dané osobnosti.

#### Zdroje (`/zdroje/`)

*   **Technické řešení:** Dynamicky generovaná stránka z datového souboru.
*   **Struktura:** Veškeré citace jsou centralizovány v souboru `_data/citace.yml`. Každá položka obsahuje ID, název, autora, rok, typ a URL odkaz.
*   **Zobrazení:** Stránka `zdroje.md` obsahuje kód, který prochází soubor `_data/citace.yml`, seřadí položky podle roku (`year`) a vygeneruje z nich přehlednou HTML tabulku. Každý řádek tabulky má unikátní `id` odpovídající ID citace, což umožňuje přímé odkazování (`/zdroje/#ID_citace`).

### Systém zdrojování

Klíčovým prvkem webu je jeho důraz na transparentní a ověřitelné zdroje.

1.  **Centrální databáze citací:** Všechny použité zdroje jsou definovány v souboru `_data/citace.yml`.
2.  **Odkazování v textu:** V článcích se na zdroje odkazuje pomocí unikátního ID, například `[[1862_Tyndall]]`. Tento systém automaticky generuje odkaz na kompletní citaci v sekci `/zdroje/`.
3.  **Dostupnost zdrojů:** Každá citace v `citace.yml` obsahuje odkaz (`url`) na samotný zdrojový dokument (studii, knihu), který je uložen na Google Drive. Tím je zajištěno, že si čtenář může původní práci snadno dohledat a přečíst, aniž by datové soubory zatěžovaly tento repozitář.

Tento přístup zajišťuje vysokou míru vědecké přesnosti a transparentnosti.
