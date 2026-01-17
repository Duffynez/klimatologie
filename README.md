# Klimatologie.eu

Tento repozitář obsahuje zdrojový kód pro webové stránky [klimatologie.eu](http://klimatologie.eu), nezávislý a vědecky zaměřený informační portál o klimatologii v českém jazyce.

## Cíl projektu

Cílem tohoto webu je vytvořit přehledný, důvěryhodný a "brutálně vědecký" zdroj informací o změně klimatu, jejích příčinách a důsledcích. Veškeré informace jsou pečlivě ozdrojované, aby si čtenáři mohli sami ověřit původní data a studie.

## Jak web funguje

Web je postaven na statickém generátoru stránek **Jekyll**. Obsah je psán v Markdown souborech, což usnadňuje správu a verzování.

### Struktura

*   Obsah je logicky členěn do sekcí, jako je například `/pozorovani/`, která shrnuje klíčové fyzikální důkazy o probíhající změně klimatu (např. růst teplot, tání ledovců).
*   Každá stránka je navržena tak, aby poskytla srozumitelný popis daného jevu.

### Systém zdrojování

Klíčovým prvkem webu je jeho důraz na transparentní a ověřitelné zdroje.

1.  **Centrální databáze citací:** Všechny použité zdroje jsou definovány v souboru `_data/citace.yml`.
2.  **Odkazování v textu:** V článcích se na zdroje odkazuje pomocí unikátního ID, například `[[1862_Tyndall]]`. Tento systém automaticky generuje odkaz na kompletní citaci v sekci `/zdroje/`.
3.  **Dostupnost zdrojů:** Každá citace v `citace.yml` obsahuje odkaz (`url`) na samotný zdrojový dokument (studii, knihu), který je uložen na Google Drive. Tím je zajištěno, že si čtenář může původní práci snadno dohledat a přečíst, aniž by datové soubory zatěžovaly tento repozitář.

Tento přístup zajišťuje vysokou míru vědecké přesnosti a transparentnosti.
