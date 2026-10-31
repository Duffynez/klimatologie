# Propojení pozorování a metod

Pracovní přehled k 31. říjnu 2026. Zachycuje rozdělení práce a hotové vazby. Obsahové požadavky nadále určují [OBSERVATIONS.md](../OBSERVATIONS.md), [METHODS.md](../METHODS.md) a [CONTENT.md](../CONTENT.md).

## Rozdělení práce

| Část | Pozorování | Stav |
| --- | --- | --- |
| 1 | Globální povrchová teplota, stratosférické ochlazování, vlhkost atmosféry, srážky, vlny veder | Propojení a doplnění vysvětlení dokončeno. |
| 2 | Obsah tepla v oceánu, hladina moře, acidifikace oceánů, koncentrace CO₂ | Čeká na samostatné zadání. |
| 3 | Arktický mořský led, horské ledovce, ledové příkrovy, sníh a permafrost, fenologie | Čeká na samostatné zadání. Součástí bude závěrečná kontrola celého propojení. |

Mechanismy ani vysvětlivky při najetí myší nejsou součástí této první úpravy.

## Dokončená první část

Počítáme jedinečné dvojice pozorování–metoda. Více odkazů mezi stejnými články představuje jednu dvojici. Pět pozorování mělo původně 16 takových vazeb, nyní jich má 37 k celkem 17 metodám. Přibylo tedy 21 dvojic. Všech 37 má odkaz oběma směry. Odkazy vedou na konkrétní oddíly článků.

| Pozorování | Původně / nyní | Měření a pomocné vstupy | Zpracování a srovnání |
| --- | --- | --- | --- |
| [Globální povrchová teplota](https://klimatologie.eu/pozorovani/gmst/) | 5 / 6 | Odporová termometrie, infračervená radiometrie oceánu | Homogenizace, plošné průměry, přenos nejistoty, reanalýza ERA5 |
| [Stratosférické ochlazování](https://klimatologie.eu/pozorovani/stratosfericke-ochlazovani/) | 2 / 7 | Termometrie, tlak a výška, radiosondáž, mikrovlnná a infračervená radiometrie, rádiové zákryty | Homogenizace výškových měření |
| [Vlhkost atmosféry](https://klimatologie.eu/pozorovani/narust-vlhkosti/) | 4 / 11 | Hygrometrie, termometrie jako pomocný vstup, tlak a výška, radiosondáž, Ramanův lidar, mikrovlnná radiometrie, pozemní GNSS | Kontrola kvality a homogenizace, plošné průměry, přenos nejistoty, reanalýza ERA5 |
| [Srážky a přívalové srážky](https://klimatologie.eu/pozorovani/srazky-a-privalove-srazky/) | 4 / 8 | Srážkoměry a disdrometry, radar, mikrovlnná radiometrie, infračervené snímky oblaků. Izotopový rozbor odebrané vody doplňuje informace o vodním cyklu. | Kontrola denních dat, časové změny a extrémy, prostorové zpracování |
| [Vlny veder](https://klimatologie.eu/pozorovani/vlny-veder/) | 1 / 5 | Odporová termometrie | Kontrola denních dat, časové změny a extrémy, prostorové zpracování, reanalýza ERA5 |

## Co bylo nutné dovysvětlit

- Mikrovlnná radiometrie nyní vysvětluje také odhad množství vodní páry nad oceánem a intenzity srážek. U teploty atmosféry objasňuje, proč jednotlivé kanály zachycují různé výškové vrstvy.
- Infračervená radiometrie rozlišuje měření povrchu oceánu, teplotních vrstev atmosféry a použití teploty vrcholků oblaků při odhadu srážek.
- Kontrola kvality a homogenizace výslovně navazuje na hodinový HadISD, měsíční HadISDH, denní data a radiosondové záznamy.
- Prostorové zpracování objasňuje odlišné pořadí operací u HadISDH a HadEX3. U HadEX3 se nejprve vypočítají roční staniční ukazatele a až potom jejich mapy.
- Oddíl o ERA5 odkazuje také na porovnávání záznamů vlhkosti a na vlny veder. Přenos nejistoty navazuje na zpracování vlhkosti.
- Dvě nové metodické příručky jsou citované u příslušného výkladu a zařazené v katalogu zdrojů. Odkazy na plný text Mearse a kol. (2018) a Haimbergera a kol. (2012) byly ověřeny a opraveny.

## Význam jednotlivých vazeb

Každý odkaz má čtenáři vysvětlit určitý krok. Při dalších částech zachováme následující rozlišení, ověřená při první úpravě:

- Termometrie dodává teplotu. U vlhkosti slouží teplota také jako vstup do převodu mezi veličinami.
- Kontrola denních či hodinových odečtů a homogenizace dlouhodobého záznamu jsou různé operace. Popis měsíčního párového algoritmu sám o sobě nedokládá jeho použití na všechna data.
- Radiosondové výškové záznamy mají vlastní postupy homogenizace. Odkaz na přízemní měsíční příklad vysvětluje společný princip porovnávání.
- Mikrovlnné určení podílu ledu, teploty atmosféry, vodní páry a srážek vyžaduje různé fyzikální vztahy a výpočty.
- Infračervené měření tenké povrchové vrstvy oceánu, široké vrstvy stratosféry a vrcholku oblaku poskytuje odlišné veličiny.
- ERA5 používá jiné asimilační provedení než hlavní příklad reanalýzy 20CR. Odkazy na ERA5 proto vedou přímo k jejímu vysvětlení.
- Izotopové složení vody doplňuje informace o jejím původu a cestě. Množství srážek se měří samostatně.

## Technické a redakční ověření

Odkazy v hlavním textu jsou podtržené, barevně rozlišené a mají viditelné zaměření při ovládání klávesnicí. Cílové oddíly mají odstup od pevné hlavičky.

Test v `tests/rendered-html.test.mjs` kontroluje u první skupiny obousměrnost a existenci cílových oddílů. U všech publikovaných článků kontroluje také platnost odkazů s kotvou mezi pozorováními a metodami. Doplňuje jej věcná kontrola skutečného obsahu cílového oddílu a zkouška přechodů v prohlížeči.

Při redakční kontrole byly navigační věty umístěny k vysvětlovaným krokům. Výklad mikrovlnného měření odděluje fyzikální signál, převod na veličinu a vznik mapy. Původní výsledky pozorování a výpočetní příklady zůstávají zachované.

Ověření 31. října 2026: `pnpm lint`, `pnpm audit:sources` a všech 111 testů v `pnpm test` prošly. Proběhla také kontrola cílových oddílů, zpětných přechodů, zdrojových karet a zobrazení na počítači a v mobilní šířce 390 px.

## Navazující práce

Druhá a třetí část projdou zbývající pozorování stejným způsobem. Před přidáním zpětného odkazu bude nutné ověřit, zda cílová metoda skutečně vysvětluje použité provedení. Závěrečná kontrola má zachytit i jednostranné odkazy ze všech metod.

Paleoklimatické metody zatím nemají odpovídající samostatná pozorování minulého klimatu. Tato obsahová mezera se vyřeší plánem dalších pozorování, nikoli vytvářením zdánlivých vazeb na současné měření.
