# Standard článku o mechanismu

Tento dokument je závazný pro články o klimatických mechanismech na Klimatologie.eu. Článek vychází z konkrétního pozorování a vede čtenáře přes navržená vysvětlení a jejich ověřování k tomu, jak pozorování vysvětlujeme dnes. Celý výklad se vztahuje k této otázce.

Hlavní cíle projektu stanovuje [AGENTS.md](AGENTS.md). Jazyk a srozumitelné vysvětlování upravuje [STYLE.md](STYLE.md), společná obsahová a citační pravidla [CONTENT.md](CONTENT.md). Datum pod nadpisem uvádíme podle [STYLE.md, oddílu 7](STYLE.md#7-členění-příklady-obrazy-a-podrobnosti).

## Závazná stavba článku

Článek má následujících pět částí v uvedeném pořadí. Nadpisy přizpůsobíme konkrétnímu tématu při zachování jejich úlohy. Pododdíly rozvíjejí otázku příslušné části. Obsahová kontrola autora uvedená níže slouží ke kontrole úplnosti a není další osnovou článku.

Název článku má podobu konkrétní otázky zakončené otazníkem. Ptá se po příčině pozorované změny nebo po fungování procesu, který ji může vysvětlit. Otázka zachová rozsah článku a nepodsouvá příčinu, kterou má článek teprve ověřit. Název, úvod, porovnání hypotéz a závěr musí odpovídat na stejnou otázku. Při změně zaměření upravíme také název, perex, katalogový popis a pojmenování navazujících odkazů.

### 1. Jak si nyní vysvětlujeme toto pozorování

Úvod má nejvýše dva odstavce. Připomene konkrétní pozorování, odkáže na příslušný pozorovací článek a vymezí otázku, kterou budeme řešit. Uvede vlastnosti podstatné pro vysvětlení, například směr a velikost změny, období, časový průběh nebo prostorové rozložení. Další rozlišující vlastnosti představíme u jejich použití v porovnání hypotéz.

Pozorování tvoří základ celého článku. Pokud některé potřebné pozorování na webu chybí, doplníme je podle [OBSERVATIONS.md](OBSERVATIONS.md). To platí i pro další pozorování potřebná k testování hypotéz. Nový článek založíme a obousměrné odkazy připojíme podle [docs/CONTENT-WORKFLOW.md](docs/CONTENT-WORKFLOW.md). Pozorovací článek popisuje zjištění, mechanismový článek rozvíjí jejich příčinné vysvětlení.

### 2. Úvodní diagram hypotéz a jejich předpovědí

Po krátkém úvodu zařadíme přehledový diagram. Porovnáme nejvýše tři konkurující hypotézy celkem, včetně jednoho dnes přijímaného vysvětlení. Vybíráme historicky významné nebo odborně relevantní možnosti, které odpovídají na tutéž otázku a vztahují se ke stejnému pozorování. Tři hypotézy jsou horní limit, počet nenaplňujeme umělými alternativami.

Oddíl má jednotný nadpis „Tři hypotézy a jejich předpovědi“, při menším počtu upravíme číslovku. Bezprostředně pod nadpis patří krátký návod ke čtení diagramu. Vysvětlí, že porovnává očekávané výsledky jednotlivých hypotéz se skutečnými testy a dnešním hodnocením. Uvede, že název hypotézy odkazuje na její souvislý příběh. Případné jednotky nebo zvláštní podmínky potřebné už pro přečtení diagramu vysvětlíme před ním.

Každá větev diagramu obsahuje:

**Hypotéza → jedinečná předpověď → jak hypotézu testujeme → výsledek testů → dnešní hodnocení.**

Do pole „Jedinečná předpověď“ píšeme konkrétní očekávání, které při uvedených podmínkách odlišuje tuto hypotézu od ostatních porovnávaných hypotéz. Obecný následek společný všem možnostem, například samotný ohřev, sem nepatří. Nestačí ani požadavek „musí vysvětlit pozorování“. Uvedeme, co konkrétně bychom měli naměřit, například jiné znaménko změny, časovou návaznost, rozložení nebo číselný rozsah.

Jedinečnost posuzujeme vůči uvedeným alternativám, nikoli vůči každé myslitelné příčině. Pokud rozlišuje až kombinace znaků, ukážeme ji společně a řekneme, že rozhoduje jejich souběh. Kde rozhoduje velikost účinku, uvedeme očekávanou hodnotu či rozsah a podmínky. U statistické předpovědi uvedeme očekávané rozdělení či rozsah a podmínky, za kterých byl odvozen. Podmíněnou předpověď jedné varianty hypotézy nevydáváme za předpověď všech jejích variant. Předpověď a predikce označují totéž, proto je nedělíme do dvou opakujících se polí.

Diagram předem ukáže, která hypotéza byla v daném testu falsifikována a která obstála. Rozliší také nedostatečné vysvětlení od vyvráceného a případný nerozhodný dílčí test podle hodnocení v části 3. Uvede rozhodující období či podmínku, aby se místní nebo časově omezený výsledek netvářil jako obecný verdikt. Jednotlivé větve odkážou na příslušné příběhy a jejich důkazy v článku. Výsledek vyjádříme textem, nejen barvou nebo symbolem.

Pole „Jak hypotézu testujeme“ stručně popíše konkrétní zkoušku: co měříme nebo počítáme a s čím to porovnáváme, abychom ověřili uvedenou předpověď. Samotné jméno studie ani sdělení, že proběhl test, nestačí. Způsob zkoušky oddělíme od jejího zjištěného výsledku. Pokud diagram shrnuje více různých testů, stručně rozlišíme jejich postupy a zachováme stejnou návaznost v poli výsledků. Podrobnosti a zdroje patří do navazujícího příběhu.

Diagram slouží jako stručná orientace před četbou. Používá srozumitelná pojmenování, která následný výklad rozvine, a nenahrazuje vysvětlení důvodů závěru. Pořadí hypotéz a jejich pojmenování zachováme i v navazujícím textu.

Na webu používáme společnou komponentu `HypothesisDiagram`. Zachovává stejné pořadí polí, popisky, odkaz z názvu a barevné i slovní vyjádření výsledku. Na široké obrazovce se kroky čtou zleva doprava, na mobilu shora dolů. Konkrétní hypotézy, předpovědi, výsledky a podmínky jsou obsahem jednotlivého článku. Podrobnosti připojení uvádí [docs/CONTENT-WORKFLOW.md](docs/CONTENT-WORKFLOW.md#5-nový-mechanismus).

### 3. Příběhy hypotéz od vzniku po dnešní hodnocení

Každá hypotéza dostane vlastní souvislý oddíl. Její vznik, princip, předpovědi a ověřování vyložíme pohromadě, než přejdeme k další hypotéze. Příběh dnes přijímaného vysvětlení zařadíme jako poslední, aby na něj navázal podrobný výklad mechanismu v části 4. Historicky souběžné zkoumání popíšeme jako souběžné, pořadí oddílů nesmí vytvářet smyšlenou časovou posloupnost objevů.

Příběh čtenáři postupně objasní:

1. **Kdy a proč vysvětlení vzniklo.** Uvedeme doložené období, významné autory a pozorování či problém, na který reagovali. Vysvětlíme, proč byla hypotéza podle tehdejších poznatků rozumná.
2. **Jak mělo vysvětlení fungovat.** Objasníme navrženou příčinu, základní princip a první významnou kvantitativní formulaci. Potřebné pojmy vysvětlíme před použitím v předpovědi.
3. **Co z něj vyplývalo.** Odvodíme rozlišující předpověď a ukážeme, proč se očekávání liší od konkurujících vysvětlení.
4. **Jak se hypotéza zkoumala.** Projdeme rozhodující experimenty, pozorování a výpočty, jejich výsledky a změny vysvětlení, které vyvolaly. Ukážeme také nezávislá ověření a případné rozpory. Vybíráme události, které posunuly poznání, ne pouhý seznam publikací.
5. **Proč dnes hypotézu přijímáme nebo odmítáme.** Spojíme závěr s konkrétními testy a současným odborným hodnocením. U přijatého vysvětlení ukážeme vlastní úspěšné předpovědi a jejich ověření, samotné vyřazení alternativ nestačí.

Tyto kroky určují návaznost příběhu, nemusí se stát pěti dalšími podnadpisy. Každou hypotézu představíme v její nejsilnější odborné podobě a s ohledem na tehdy dostupné poznatky. Její význam a důkazní oporu popíšeme přiměřeně skutečnému stavu. Rozlišíme vysvětlení, která si odporují, od procesů, které mohou působit společně.

Historické údaje a vývoj argumentu dokládáme prameny. Nejstarší nalezenou zmínku automaticky neoznačujeme za první formulaci. Pokud rozhodnutí vznikalo postupným hromaděním důkazů, popíšeme tento vývoj. Nevytváříme jediný rozhodující experiment tam, kde jej historie nezná.

Příběhy rozvíjíme přes více konkrétních studií, pokud přinášejí další krok poznání: první formulaci, nový druh měření, náročnější test, nezávislé zopakování nebo vysvětlení dřívějšího rozporu. U každého takového kroku vysvětlíme otázku autorů, uspořádání zkoumání, výsledek a jeho přínos k rozhodnutí. Ukážeme i to, co dnes nedostatečná hypotéza vysvětlila správně. Délku ani počet citací nenaplňujeme opakováním stejného důkazu. Prostor přidáváme především samotnému vyšetřování a návaznosti jeho kroků.

Uvnitř příběhu každé rozhodující porovnání zachová tuto návaznost:

**Co hypotéza předpovídá → proč to z ní vyplývá → jak předpověď testujeme → co skutečně zjistíme → jaký závěr z porovnání plyne.**

Předpověď vysvětlíme před uvedením výsledku. Vybíráme ověřitelné důsledky, které pomáhají rozlišit navržená vysvětlení: směr a velikost změny, časový průběh, prostorové rozložení, výškový či hloubkový profil nebo souběžné změny dalších veličin. Jejich význam a vazbu na hypotézu musí čtenář pochopit. Historickou předpověď označíme jako zveřejněnou před měřením pouze tehdy, pokud to dokládají prameny.

Výsledek testu formulujeme přesně:

- **Vyvrácená hypotéza:** konkrétní předpověď je v rozporu s pozorováním. Vysvětlíme, která předpověď selhala a za jakých podmínek test platí.
- **Nedostatečné vysvětlení:** proces může skutečně působit, ale svou velikostí, průběhem nebo jinou vlastností nestačí vysvětlit celé pozorování.
- **Dosud nerozhodnuté porovnání:** dostupná měření mezi možnostmi dostatečně nerozlišují.
- **Podpořené vysvětlení:** předpovědi odpovídají výsledkům. Uvedeme, co bylo konkrétně ověřeno a jakou váhu má shoda vůči ostatním možnostem.

Výklad ukáže také, v čem každá hypotéza datům odpovídá. Její odmítnutí musí mít konkrétní důvod v pozorováních a oporu ve zdrojích. Závěr každého příběhu vysvětlí hodnocení z úvodního diagramu. Další srovnávací tabulku použijeme jen tehdy, pokud zpřehlední vztah, který diagram nepokrývá.

Vyhodnocení každé rozhodující hypotézy rozvineme tak, aby čtenář mohl sledovat důvod závěru. Uvedeme konkrétní výsledek měření nebo výpočtu, jeho období a rozhodující velikost či charakter změny. Vysvětlíme, jak se výsledek liší od předpovědi nebo v čem se s ní shoduje, jak velký rozdíl připouští nejistota a proč z porovnání plyne uvedené hodnocení. Obecný verdikt o vyvrácení nebo potvrzení nestačí. Rozsah přizpůsobíme náročnosti testu, obvykle potřebuje několik navazujících odstavců.

O metodách měření píšeme stručně. Objasníme, co měření zjišťuje a proč umožňuje daný test, a uvedeme rozhodující podmínky či intervaly nejistoty. Postupy měření a zpracování zpřístupníme odkazy na konkrétní části pozorovacích a metodických článků. Popis přístrojů a datových produktů ponecháme v těchto navazujících textech.

### 4. Jaké vysvětlení dnes nejlépe obstojí a proč

Tuto část otevřeme jedním souvislým přechodovým odstavcem bezprostředně pod jejím nadpisem. Stručně v něm shrneme, jak dopadla každá z porovnávaných hypotéz a z jakého hlavního důvodu. Rozlišíme vyvrácenou možnost od skutečného procesu, který sám na vysvětlení nestačí. Pojmenujeme dnes nejlépe podpořené vysvětlení a poslední větou uvedeme, co o jeho fungování nyní podrobněji objasníme. Odstavec navazuje na už rozebrané důkazy a jejich zdroje, nepřidává nový test. Tím uzavře porovnání a připraví čtenáře na další výklad.

Na základě předchozích příběhů jasně pojmenujeme jedno vysvětlení, které dnes podle souhrnu důkazů a současných odborných hodnocení nejlépe obstojí, a rozvineme jeho podrobný výklad. Současné hodnocení opřeme o odborné syntézy a jejich závěry doložíme původními pracemi rozebranými v příbězích. Přijaté vysvětlení může spojovat několik současně působících mechanismů. U kombinace objasníme úlohu jednotlivých procesů a důvod, proč je potřebujeme. Pokud poznání neumožňuje jedno vysvětlení upřednostnit, uvedeme tuto otevřenou otázku a nepředstíráme rozhodnutí jen kvůli stavbě článku.

Po přechodovém odstavci srozumitelně definujeme vysvětlovaný proces. Potom souvisle projdeme kroky od příčiny přes změny v systému až k pozorovanému následku. U každého kroku vysvětlíme jeho fyzikální, chemický nebo biologický důvod a navážeme na jeho ověření. Zpětné vazby zařadíme v návaznosti na změnu, na kterou reagují.

Ukážeme, jak celek vysvětluje rozhodující vlastnosti pozorování včetně velikosti účinku. Potřebné zákony a výpočty zařadíme k vysvětlovaným vztahům. Objasníme veličiny, symboly, jednotky a podmínky použití. Oddělíme jednoduchý teoretický odhad od výsledku úplnějšího modelu. Předchozí porovnání využijeme při vysvětlování souvislostí, aby čtenář mohl sledovat celý děj.

Na konci této části pojmenujeme stav poznání. Rozlišíme přímo ověřený proces, dobře doložené vysvětlení pozorované změny, nejistou velikost příspěvku a otevřené hypotézy. Hlavní nejistoty a rozsah platnosti shrneme krátkým odstavcem. Podrobnosti umístíme do rozbalovacího oddílu podle [STYLE.md, oddílu 6](STYLE.md#6-přesnost-předpoklady-a-zdroje), včetně jeho délkového limitu. Uvedeme také konkrétní nové měření nebo výsledek, který by současné vysvětlení oslabil, vyvrátil nebo významně upravil.

### 5. Shrnutí fungování mechanismu

Závěrečné shrnutí umístíme do rámečku s jednotnou sazbou. Stručně spojí příčinu, navazující děj a výsledný účinek s pozorováním, kterým článek začal. Připomene hlavní důvod, proč toto vysvětlení přijímáme, v míře odpovídající jeho důkazní opoře. Shrnutí musí být srozumitelné i při samostatném přečtení.

Za shrnutím následují prameny a odkazy na veřejná data. Citace jsou současně průběžně zapojené u tvrzení a porovnání, která podporují.

## Vysvětlující grafika a orientace v příběhu

Úvodní diagram z části 2 poskytuje přehled celého článku. Uvnitř příběhů jej doplňují obrázky, které vysvětlují vlastní děj a jeho ověřování. Pro jejich přípravu a zapojení platí:

1. **Každou hypotézu vysvětlíme také obrazem.** Grafika ukáže navrženou příčinu, navazující změny a pozorovatelný účinek v příslušném prostředí. Má pomoci pochopit konkrétní vztah, například kde energie přibývá a kde ubývá. Samotné symboly spojené šipkou bez vysvětlení tohoto vztahu nestačí. Obsah i míru podrobnosti volíme pro dospělého čtenáře bez odborného vzdělání.
2. **Propojíme děj s jeho rozlišující předpovědí a testy.** Z obrázku musí být patrné, co by se podle hypotézy mělo změnit a kde to lze zjistit. Navazující panely testů vždy oddělí předpověď, konkrétní zkoušku a naměřený nebo vypočtený výsledek. U zkoušky řekneme, co měříme nebo počítáme a s čím výsledek porovnáváme. Více testů očíslujeme, jejich počet přizpůsobíme skutečným důkazům.
3. **Obrázek zapojíme do souvislého výkladu.** Před ním objasníme potřebný princip a krátce uvedeme, co ukazuje. Za ním rozvineme testy ve stejném pořadí a se stejným pojmenováním. U každého vysvětlíme postup, rozhodující výsledek a jeho význam pro hypotézu. Závěr příběhu propojí dílčí zjištění a ukáže, které části vysvětlení jednotlivé testy ověřují. Historický příběh a soubor studií zůstávají součástí argumentu.
4. **Význam grafických prvků musí být jednoznačný.** Šipka má určitý směr a popsaný význam. Barvy, panely, osy a značky vysvětlíme, barvu doplníme textem. Rozlišíme očekávanou změnu od naměřené a kvalitativní schéma od číselného grafu. U čísel uvedeme veličinu, jednotku, období, oblast a potřebnou nejistotu. Velikost symbolu či šipky nesmí předstírat měřenou velikost, pokud ji nezobrazuje.
5. **Grafiku odborně ověříme a zpřístupníme její podklady.** Při vlastním zpracování můžeme vycházet z odborných obrázků a použít AI pro ilustraci. Tvrzení, popisky, směry šipek i čísla ověříme proti zdrojům. Citace připojíme k obrázku i k příslušnému výkladu a zařadíme do pramenů. Uvedeme původ a licenci grafiky, případné použití AI a zpřístupníme použité číselné podklady podle [CONTENT.md](CONTENT.md). Technické připojení média popisuje [docs/CONTENT-WORKFLOW.md, oddíl 9](docs/CONTENT-WORKFLOW.md#9-obrázky-a-grafy).
6. **Začátky hypotéz a testů zřetelně odlišíme.** Hypotéza má větší odstup, oddělovací linku, označení „Hypotéza 1“, „Hypotéza 2“ a případně „Hypotéza 3“ a výraznější nadpis. Test má podřízený nadpis s pořadím a konkrétním obsahem, jemné podbarvení a úzký postranní pruh. Běžné vysvětlující pododdíly zachovají klidnější sazbu. Stejné označení použijeme u všech hypotéz bez ohledu na jejich hodnocení. Zachováme hierarchii nadpisů, čitelnost na mobilu a funkční kotvy. Rozměrnou grafiku nabídneme v plné velikosti a případný vodorovný posun omezíme na obrázek.

## Obsahová kontrola autora

Při přípravě a kontrole článku prověříme následující vrstvy důkazů. Jejich místo ve výkladu určují části 2 až 4 výše. Pokud některá opora chybí, výslovně to uvedeme a přizpůsobíme tomu závěr.

| Vrstva důkazů | Co musí být objasněno |
| --- | --- |
| Základní proces | Jak byl fyzikální, chemický nebo biologický vztah ověřen v laboratoři nebo kontrolovaném experimentu. |
| Působení v klimatu | Jaká měření zachycují jeho působení v atmosféře, oceánu, ledu nebo živé přírodě. |
| Rozlišení vysvětlení | Které pozorované vlastnosti odpovídají danému vysvětlení lépe než relevantním alternativám. |
| Kvantitativní ověření | Zda proces vysvětluje směr i velikost změny a jakou část pozorovaného výsledku mu lze přisoudit. |
| Nezávislá kontrola | Zda různé metody, datové soubory a výzkumné týmy docházejí ke slučitelným výsledkům a co jejich postupy případně sdílejí. |

U použitého modelu nebo experimentu vysvětlíme jeho otázku, podstatné procesy a předpoklady. Rozlišíme vstupní pozorování od výsledků, které se skutečně předpovídají nebo ověřují. Modelový výsledek porovnáme s měřením a uvedeme, zda obstojí také v nezávislých modelech. Model nesmí sloužit jako důkaz sám sobě.

Samotnou korelaci nezaměňujeme za mechanismus. Existenci procesu odlišujeme od důkazu, že způsobil celou pozorovanou změnu. Jedna studie ani jediný graf nepředstavují úplný důkaz. Pozorování, metody, mechanismy a politické důsledky rozlišujeme podle [AGENTS.md](AGENTS.md).

## Prameny a redakční kontrola

Každý článek zapojí původní formulace hypotéz nebo teorie, základní experimentální práce, klíčové pozorovací testy, práce hodnotící alternativní vysvětlení a současné kvantitativní studie. U grafů zpřístupníme použitá veřejná data. Zdroje vložíme přímo k argumentu, který podporují. Jejich dostupnost a způsob citování se řídí [CONTENT.md](CONTENT.md), technické připojení [docs/SOURCES-AND-ARCHIVE.md](docs/SOURCES-AND-ARCHIVE.md).

Před odevzdáním provedeme odděleně obsahovou kontrolu podle tohoto dokumentu a kontrolu čtivosti podle [STYLE.md, oddílu 9](STYLE.md#9-dvě-samostatné-redakční-kontroly). Ověříme zejména souvislost každého příběhu od vzniku hypotézy přes předpovědi a testy k dnešnímu hodnocení, shodu diagramu s výkladem a návaznost podrobného mechanismu na tato porovnání. Hlavní závěr musí mít oporu v souboru důkazů, ne pouze v podrobně převyprávěné jedné studii.
