# Standard článku o mechanismu

Tento dokument je závazný pro články o klimatických mechanismech na Klimatologie.eu. Článek vychází z konkrétního pozorování, ukazuje, jak se navržená vysvětlení ověřují, a objasňuje, jak pozorovaný výsledek vzniká a co o jeho příčinách víme.

**Otázka, rozhodující důkaz a závěr mají stejný rozsah.** Vymezíme sledovanou veličinu a podle potřeby období, oblast a podmínky. U dílčího testu vysvětlíme, co ověřil a jak jeho výsledek pomáhá odpovědět na otázku článku. Rozlišujeme, zda test dokládá existenci procesu, jeho působení v daném případě, nebo jeho příspěvek k celé pozorované změně. Například vysvětlení zrychlení ohřevu v určitém období vyžaduje porovnání tempa ohřevu a důkazy o příčinách jeho změny.

Hlavní cíle projektu stanovuje [AGENTS.md](AGENTS.md). Jazyk a srozumitelné vysvětlování upravuje [STYLE.md](STYLE.md), společná obsahová a citační pravidla [CONTENT.md](CONTENT.md). Datum pod nadpisem uvádíme podle [STYLE.md, oddílu 7](STYLE.md#7-členění-příklady-obrazy-a-podrobnosti).

## Závazná stavba článku

Každý článek má krátký úvod založený na pozorování, příčinný výklad opřený o testy a závěrečné shrnutí. Před psaním určíme, co musí čtenář pochopit, aby mu další krok dával smysl. Tento sled určuje členění výkladu. Nadpisy pojmenují obsah konkrétních oddílů.

- **Při porovnání konkurujících vysvětlení** po úvodu zařadíme diagram a příběhy hypotéz. Na jejich výsledky naváže výklad toho, jak podle současných důkazů pozorovaný děj vzniká.
- **Při výkladu jednoho mechanismu nebo spolupůsobících procesů** spojíme příčinný výklad a jeho ověření do jednoho sledu. Oddíly řadíme podle toho, jak na sebe děje navazují nebo jak se účinek přenáší do jiného měřítka. Přehled zařadíme, pokud usnadní orientaci v jednotlivých krocích nebo zkouškách.

Název článku tvoří konkrétní otázka zakončená otazníkem. Ptá se po příčině pozorované změny nebo po fungování procesu, který ji může vysvětlit. Formulace ponechá příčinu otevřenou do vyhodnocení důkazů. Při změně zaměření sladíme název, perex, katalogový popis a pojmenování navazujících odkazů.

### 1. Jak si nyní vysvětlujeme toto pozorování

Úvod má nejvýše dva odstavce. Připomene konkrétní zjištění a odkáže na příslušný pozorovací článek. Vymezí, co potřebujeme vysvětlit, například směr a velikost změny, její časový průběh nebo prostorové rozložení. Další vlastnosti pozorování představíme tam, kde je použijeme při testu.

Pokud některé potřebné pozorování na webu chybí, doplníme je podle [OBSERVATIONS.md](OBSERVATIONS.md). To platí i pro pozorování, která potřebujeme k porovnání vysvětlení. Články propojíme obousměrně podle [docs/CONTENT-WORKFLOW.md](docs/CONTENT-WORKFLOW.md).

### 2. Úvodní diagram hypotéz a jejich předpovědí

Diagram má jednu až tři větve. Vybíráme odborně relevantní možnosti, jejichž porovnání pomůže odpovědět na stejnou otázku. Mohou to být soupeřící vysvětlení, odlišné očekávané příspěvky současně působících procesů nebo varianty kontrolovaného pokusu. Jediná větev může vést k rozhodující zkoušce jednoho vysvětlení. Počet větví určuje obsah porovnání.

Při srovnání tří hypotéz použijeme nadpis „Tři hypotézy a jejich předpovědi“, při jiném počtu upravíme číslovku. U kontrolních variant nebo jiného uspořádání pojmenujeme skutečný předmět srovnání. Společný návod vysvětluje, jak diagram číst a kam vedou odkazy. Vlastní doprovodný odstavec přidáme, když čtenáři objasní konkrétní srovnání.

Potřebné jednotky a podmínky objasníme před použitím v diagramu. Vysvětlíme, co veličina v daném porovnání vyjadřuje, k jaké oblasti či ploše se vztahuje a co znamená její změna v čase. Rozlišíme hodnotu veličiny od rychlosti její změny.

**Hypotéza → rozlišující předpověď → jak hypotézu testujeme → výsledek testů → dnešní hodnocení.**

- **Rozlišující předpověď** uvede očekávání, podle kterého lze za daných podmínek odlišit uvedené možnosti. U jediné větve uvede, jaký rozdíl očekáváme vůči kontrolní variantě nebo jinému výchozímu očekávání. Rozlišovat může znaménko či velikost změny, její průběh, rozložení nebo kombinace znaků. Pokud rozhoduje souběh znaků, uvedeme je společně. Kde záleží na velikosti, uvedeme hodnotu či rozsah. U statistické předpovědi popíšeme očekávané rozdělení nebo rozsah a podmínky odvození. Upřesníme, pro kterou variantu vysvětlení předpověď platí. Předpověď a predikce zde označují stejnou věc a mají společné pole.
- **Jak hypotézu testujeme** řekne, co se měří nebo počítá a s čím se to porovnává. **Výsledek testů** uvede, co toto porovnání ukázalo. Při více testech zachováme stejné pořadí v popisu postupu a výsledků.
- **Dnešní hodnocení** vyjádří závěr slovy podle části 3 a uvede období nebo podmínku, které omezují jeho platnost. Pokud dostupné důkazy mezi možnostmi nerozlišují, diagram to vyjádří.

V přehledu stačí rozhodující očekávání, způsob ověření a výsledek potřebný k pochopení hodnocení. Rozhodující podmínky zkoušky, hodnoty a jejich význam se zdroji rozvedeme na jednom místě v odkazovaném výkladu. U příběhů zachováme pořadí a pojmenování větví. Společná komponenta `HypothesisDiagram` zachovává pořadí polí, odkaz z názvu a slovní i barevné vyjádření hodnocení. Na široké obrazovce se kroky čtou zleva doprava, na mobilu shora dolů. Připojení popisuje [docs/CONTENT-WORKFLOW.md](docs/CONTENT-WORKFLOW.md#5-nový-mechanismus).

### 3. Příběhy hypotéz od vzniku po dnešní hodnocení

Při srovnávání soupeřících vysvětlení má každá hypotéza vlastní souvislý příběh. Vysvětlíme, jak by navržená příčina působila, co z ní vyplývá a jak důkazy změnily její hodnocení, případně i samotné vysvětlení. Každou hypotézu představíme v její nejsilnější odborné podobě a ukážeme, které vlastnosti pozorování vysvětluje. Pokud důkazy upřednostňují jedno vysvětlení, jeho příběh uzavře porovnání a připraví výklad v části 4. Text zachová skutečnou časovou posloupnost objevů včetně souběžného zkoumání různých možností.

U historické hypotézy popíšeme doložené okolnosti vzniku, které pomáhají porozumět předpovědi nebo testu. Uvedeme podle pramenů období, autory i problém, na který reagovali. Vysvětlíme, proč byla hypotéza při tehdejších poznatcích rozumná. Doloženou ranou kvantitativní formulaci zařadíme tam, kde pomáhá pochopit test. Údaje o prvenství a o zveřejnění předpovědi před měřením musí mít oporu v pramenech. U kontrolních variant vysvětlíme, proč byly zvoleny a co se mezi nimi mění. Pokud se poznání měnilo postupně, projdeme doložené kroky, které přinesly nový druh měření, náročnější test, nezávislé ověření nebo vysvětlení dřívějšího rozporu.

Nejdříve vysvětlíme vztah, ze kterého otázka pro zkoušku vyplývá. Při přechodu k další zkoušce řekneme, co přidává k předchozímu zjištění. Pokud se mění období, oblast nebo měřítko, objasníme důvod změny dřív, než uvedeme nový výsledek. Následující kroky patří k rozhodujícím zkouškám jak v příbězích, tak v souvislém výkladu. Lze je vyložit v jednom odstavci nebo rozložit podle náročnosti porovnání.

1. **Předpověď.** Vysvětlíme potřebné pojmy, uvedeme očekávaný rozdíl a objasníme, proč vyplývá z vysvětlení.
2. **Zkouška.** Popíšeme skutečně provedené porovnání. Čtenář musí vědět, co se měřilo nebo počítalo, s čím se výsledek srovnával a za jakých podmínek.
3. **Výsledek.** Uvedeme rozhodující hodnotu či vlastnost změny, období, oblast a podstatnou nejistotu. Vysvětlíme, zda se výsledek shoduje s předpovědí v mezích nejistoty a jak velký rozdíl nejistota připouští.
4. **Závěr.** Vyložíme, kterou část vysvětlení porovnání ověřuje, jakou má váhu vůči ostatním možnostem a kam jeho závěr sahá.

Test společný více příběhům rozvedeme jednou. V ostatních stručně vysvětlíme, co jeho výsledek znamená pro danou možnost, a odkážeme přímo na popis zkoušky. Další srovnávací tabulku použijeme, jen pokud objasní vztah, který diagram nepokrývá.

U rozhodujícího porovnání odkážeme na konkrétní tabulku, obrázek, oddíl původní práce nebo datovou řadu, kde lze výsledek ověřit. Popíšeme, která ověření používají stejné vstupy, metody nebo předpoklady a která poskytují nezávislou kontrolu. Pokud se výsledky rozcházejí, ukážeme, čeho se rozdíl týká a jak ovlivňuje závěr. V mechanismovém článku objasníme měření a zpracování v rozsahu potřebném k pochopení úsudku. Vznik pozorování rozvádí pozorovací článek, měřicí a výpočetní postup metodický článek. Odkážeme na jejich příslušné části.

Hodnocení zdůvodníme u rozhodující zkoušky nebo tam, kde spojíme několik výsledků a vyvodíme z nich společný závěr.

- **Vyvrácená hypotéza.** Konkrétní předpověď je v rozporu s pozorováním. Uvedeme, která předpověď selhala a v jakých podmínkách.
- **Nedostatečné vysvětlení.** Proces může působit, jeho velikost nebo průběh však stačí jen na část pozorované změny, případně vysvětluje jen některé její vlastnosti. Uvedeme, co vysvětluje.
- **Dosud nerozhodnuté porovnání.** Dostupné důkazy připouštějí více možností. Uvedeme, co se podařilo ověřit a jaké měření nebo srovnání by mohlo možnosti rozlišit.
- **Podpořené vysvětlení.** Uvedeme konkrétní úspěšnou předpověď, její ověření a váhu výsledku v porovnání s dalšími možnostmi.

Při prvním otevření článku jsou příběhy rozbalené. Každý lze samostatně sbalit u nadpisu i na konci. Sbalení z konce vrátí čtenáře k nadpisu příběhu. Odkaz z diagramu i přímý odkaz na test uvnitř příběhu otevře potřebný oddíl a přejde na cílové místo. Ovládání funguje i klávesnicí. Podrobnosti uvádí [docs/CONTENT-WORKFLOW.md](docs/CONTENT-WORKFLOW.md#5-nový-mechanismus).

### 4. Jaké vysvětlení dnes nejlépe obstojí a proč

Po porovnání hypotéz jedním souvislým odstavcem shrneme, jak a proč každá dopadla. Z dřívějších zkoušek vybereme zjištění, která rozhodla nebo ukázala mez současných důkazů. Pojmenujeme nejlépe podpořené vysvětlení, kombinaci procesů nebo otázku, která zůstává otevřená. Poslední věta naváže přímo na první věcný krok dalšího výkladu. Současné odborné hodnocení opřeme o odborné syntézy a jeho závěry doložíme původními pracemi rozebranými v příbězích.

U jediného mechanismu nebo spolupůsobících procesů začneme s příčinným výkladem hned po úvodu či stručném přehledu. V obou uspořádáních vysvětlíme, co daný proces znamená a jak od první změny vede k pozorovanému následku. U každého kroku objasníme fyzikální, chemický nebo biologický důvod dřív, než probereme jeho ověření. Z testu pak převezmeme poznatek potřebný pro další krok děje. Zpětnou vazbu zařadíme ke změně, na kterou reaguje. Při souběhu procesů objasníme jejich úlohy, vzájemné působení a důkazní oporu jejich příspěvků.

Ukážeme, které vlastnosti pozorování výklad vysvětluje a v jaké míře postihuje velikost účinku. Zákony a výpočty zařadíme k příslušnému kroku. Objasníme veličiny, symboly, jednotky a podmínky použití. Rozlišíme jednoduchý teoretický odhad od výsledku úplnějšího modelu.

Část uzavřeme krátkým odstavcem o hlavních nejistotách a rozsahu platnosti. Uvedeme, které procesy nebo příspěvky jsou doložené a u kterých zůstává otevřená příčina nebo velikost účinku. Pojmenujeme konkrétní nové měření nebo výsledek, který by dosavadní vysvětlení oslabil, vyvrátil či významně upravil. Podrobnosti umístíme do rozbalovacího oddílu a dodržíme jeho délkový limit podle [STYLE.md, oddílu 6](STYLE.md#6-přesnost-předpoklady-a-zdroje).

### 5. Shrnutí fungování mechanismu

Samostatně srozumitelné shrnutí umístíme do rámečku s jednotnou sazbou. Odpoví na otázku článku a spojí příčinu, navazující děj a jeho účinek s úvodním pozorováním. Připomene hlavní důvod pro uvedený závěr a jeho podstatné omezení, pokud ovlivňuje odpověď.

Za shrnutím následují prameny a odkazy na veřejná data. Citace uvádíme průběžně u tvrzení a porovnání, která podporují.

## Vysvětlující grafika a orientace v příběhu

1. **Vysvětlení ukážeme také obrazem.** Při srovnání hypotéz objasníme každou z nich. U souvislého děje grafika ukáže navazující kroky nebo jejich vzájemné působení. Příčinu a pozorovatelný účinek zasadíme do příslušného prostředí a prvky popíšeme v míře, kterou potřebuje dospělý čtenář bez odborného vzdělání.
2. **Propojíme děj s předpovědí a zkouškami.** Schéma ukáže, co by se mělo změnit a kde se to dá zjistit. Zkoušku zobrazíme v obrázku nebo v panelu pod ním, pokud to pomůže najít měřenou část děje nebo přímo odečíst rozdíl v porovnání. Zřetelně odlišíme očekávání, provedenou zkoušku a zjištěný výsledek. Rozhodující postup a význam výsledku vysvětlíme v hlavním výkladu.
3. **Grafiku zapojíme do výkladu.** Objasníme potřebný princip a podle potřeby uvedeme, co má čtenář v obrázku sledovat. V textu navážeme důsledkem zobrazeného vztahu nebo otázkou, na kterou odpovídá zkouška. Pojmenování testů v grafice a výkladu sladíme.
4. **Vysvětlíme význam grafických prvků.** Popíšeme směr a význam šipek, barvy, panely, osy a značky. Barvu doplníme textem. Rozlišíme předpověď od naměřeného výsledku a kvalitativní schéma od číselného grafu. U čísel uvedeme veličinu, jednotku, období, oblast a podstatnou nejistotu. Je-li velikost symbolu nebo šipky pouze schematická, musí to být zřejmé.
5. **Ověříme grafiku a zpřístupníme podklady.** Při vlastním zpracování můžeme vycházet z odborných obrázků a využít AI pro ilustraci. Tvrzení, popisky, směry šipek a čísla ověříme proti zdrojům. Citujeme u grafiky i v příslušném výkladu a zdroje zařadíme do pramenů. Uvedeme původ, licenci, případné použití AI a zpřístupníme číselné podklady podle [CONTENT.md](CONTENT.md). Připojení média popisuje [docs/CONTENT-WORKFLOW.md, oddíl 9](docs/CONTENT-WORKFLOW.md#9-obrázky-a-grafy).
6. **Odlišíme začátky příběhů a větších zkoušek.** Příběhy hypotéz mají větší odstup, oddělovací linku, výraznější nadpis a stejné číslované označení bez ohledu na hodnocení, například „Hypotéza 1“. Testu dáme vlastní podnadpis, když otevírá samostatnou otázku nebo když se k němu čtenář potřebuje vracet. Nadpis tuto otázku či porovnání pojmenuje a odliší se od běžných podnadpisů jemným podbarvením a postranním pruhem. Testy můžeme očíslovat, pokud čísla pomáhají najít tutéž zkoušku v grafice a v textu. Zachováme hierarchii nadpisů, čitelnost na mobilu a funkční kotvy. Rozměrnou grafiku nabídneme v plné velikosti a případný vodorovný posun omezíme na obrázek.

## Obsahová kontrola autora

Při přípravě a kontrole článku prověříme následující vrstvy důkazů. Pokud některá opora chybí, uvedeme to a přizpůsobíme závěr tomu, co lze doložit.

| Vrstva důkazů | Co musí být objasněno |
| --- | --- |
| Základní proces | Jak byl fyzikální, chemický nebo biologický vztah ověřen v laboratoři nebo kontrolovaném experimentu. |
| Působení v klimatu | Jaká měření zachycují působení procesu v atmosféře, oceánu, ledu nebo živé přírodě. |
| Rozlišení vysvětlení | Které znaky a výsledky zkoušek umožňují rozlišit porovnávané možnosti a kde porovnání zůstává otevřené. |
| Kvantitativní ověření | Zda proces vysvětluje směr i velikost změny a jakou část pozorovaného výsledku mu lze přisoudit. |
| Nezávislá kontrola | Zda různé metody, datové soubory a týmy docházejí ke slučitelným výsledkům a které vstupy či postupy mají společné. |

U modelu nebo experimentu vysvětlíme zkoumanou otázku, podstatné procesy a předpoklady. Rozlišíme vstupní pozorování od veličin, které se předpovídají nebo ověřují. Modelový výsledek porovnáme s měřením a uvedeme, zda obstojí také v nezávislých modelech. Příčinný vztah doložíme důkazy o fungování procesu. Samotný statistický vztah dokládá souvislost veličin. Pozorování, metody, mechanismy a politické důsledky rozlišujeme podle [AGENTS.md](AGENTS.md).

## Prameny a redakční kontrola

Do výkladu zapojíme doložené původní formulace, základní experimentální práce, klíčové pozorovací testy, práce hodnotící alternativy a současné kvantitativní studie. Zdroje uvedeme u tvrzení, která podporují, a u grafů zpřístupníme použitá veřejná data. Dostupnost a způsob citování se řídí [CONTENT.md](CONTENT.md), technické připojení [docs/SOURCES-AND-ARCHIVE.md](docs/SOURCES-AND-ARCHIVE.md).

Před odevzdáním provedeme zvlášť obsahovou kontrolu podle tohoto standardu a kontrolu čtivosti podle [STYLE.md, oddílu 9](STYLE.md#9-dvě-samostatné-redakční-kontroly). Ověříme shodu otázky a závěru s rozsahem důkazů. Hlavní závěr opřeme o soubor důkazů. Pokud dostupné důkazy pocházejí z jediné studie, vymezíme závěr podle rozsahu a mezí jejího ověření.

Při kontrole návaznosti si přečteme hlavní výklad bez přehledu, popisků a shrnutí. Musí z něj být zřejmé, který krok děje právě vysvětlujeme, proč následuje příslušná zkouška a co její výsledek objasňuje. Pak porovnáme úlohu sousedních odstavců a téhož výsledku v přehledu, grafice a textu. Zkusíme vynechat odstavec, který jen ohlašuje další výklad nebo opakuje závěr. Pokud výklad i důkaz dál dávají stejný smysl, odstavec vypustíme. Pokud v něm zůstává potřebný údaj nebo podmínka, připojíme je k místu, kde je čtenář využije.
