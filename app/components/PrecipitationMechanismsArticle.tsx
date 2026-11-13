import Image from "next/image";
import Link from "next/link";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./PrecipitationMechanismsArticle.module.css";

const media = "/media/termodynamika-a-dynamika-srazek";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "vodni-para",
    name: "Více vodní páry zesiluje silné srážky",
    prediction: "Při podobném výstupu vzduchu může v teplejším a vlhčím prostředí zkondenzovat více vody. Nejprudší deště proto mohou zesilovat rychleji než celkový úhrn.",
    test: "1. Porovnáme modelové extrémy s výpočtem kondenzace. 2. V dlouhých staničních řadách porovnáme denní maxima s globální teplotou.",
    observation: "Výpočet potřebuje teplotu i výstup vzduchu. V souboru 8 326 stanic mělo 64 % rostoucí nejvyšší denní úhrn.",
    verdict: "Podpořený příspěvek k zesilování",
    explanation: "Více páry poskytuje více vody pro srážky. Samotná vlhkost neurčuje, kdy a kde začne pršet.",
    state: "supported",
  },
  {
    id: "energie",
    name: "Celkový úhrn omezuje energetická bilance",
    prediction: "Dlouhodobý globální úhrn roste pomaleji než zásoba páry, protože teplo uvolněné kondenzací musí atmosféra odvádět.",
    test: "1. Porovnáme růst páry a srážek ve stejných modelech. 2. Samostatně přepočítáme radiační ochlazování atmosféry.",
    observation: "Modely ukazují výrazně pomalejší růst celkového úhrnu. Radiační výpočet tento rozdíl fyzikálně vysvětluje.",
    verdict: "Podpořené omezení globálního součtu",
    explanation: "Jde o průměr celé Země za dlouhou dobu. Toto omezení neurčuje intenzitu jednotlivé bouřky.",
    state: "supported",
  },
  {
    id: "proudeni",
    name: "Proudění určuje rozložení a trvání srážek",
    prediction: "Změna výstupu vzduchu a přísunu vlhkosti změní srážky i při podobném množství páry. Oblasti proto nemusí reagovat stejně.",
    test: "1. Přidáme do výpočtu extrémů změnu výstupu. 2. Pro jižní Británii v lednu 2014 sestavíme vodní bilanci atmosféry.",
    observation: "Zahrnutí výstupu lépe vystihuje rozdíly modelových extrémů v tropech. Britský rozbor ukazuje zásadní úlohu svislého pohybu vzduchu.",
    verdict: "Podpořený regionální mechanismus",
    explanation: "Proudění a vlhkost působí společně. Rozbor jedné události sám neurčuje její změnu vlivem lidské činnosti.",
    state: "supported",
  },
];

function Graphic({ name, alt, children }: { name: string; alt: string; children: React.ReactNode }) {
  return <figure className={"article-figure " + styles.explanatoryFigure}>
    <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Vysvětlující grafika, na úzké obrazovce posuvná do stran">
      <a href={media + "/" + name + ".png"} aria-label="Otevřít grafiku v plné velikosti"><Image className="article-figure__media" src={media + "/" + name + ".png"} width={1536} height={1024} alt={alt} unoptimized /></a>
    </div>
    <figcaption>{children} Vlastní ilustrace vytvořená pomocí AI, CC BY 4.0. Šipky, kapky a vyobrazené přístroje jsou schematické. Nejde o naměřený profil, datový graf ani mapu události. <SourceLink id="MEDIA_PRECIPITATION_MECHANISMS_2026">Podklady a zadání grafik</SourceLink>.</figcaption>
  </figure>;
}

export function PrecipitationMechanismsArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Jak si vysvětlujeme změny srážek</h2>
    <p className="article-prose__intro">Nejprudší deště a celkové množství srážek se nemění stejně. Ve studii 8 326 stanic rostl nejvyšší denní úhrn na 64 % míst s dostatečně dlouhým záznamem v letech 1900–2009. Naproti tomu globální soubor GPCP pro roky 1979–2020 ukazuje výrazné regionální nárůsty i poklesy a mnohem menší změnu celosvětového průměru. Samotná měření rozebírá pozorování <Link href="/pozorovani/srazky-a-privalove-srazky/#pozorovani">srážek a přívalových srážek</Link>. <SourceLink id="DOI_10_1175_jcli_d_12_00502_1">(Westra a kol. 2013)</SourceLink>{" "}<SourceLink id="DOI_10_1007_s00382_022_06567_9">(Gu a Adler 2023)</SourceLink></p>
    <p>Potřebujeme vysvětlit tři věci: kolik vody může při dešti spadnout, kolik jí v dlouhodobém součtu projde atmosférou a proč někde srážky přibývají a jinde ubývají. Následující tři vysvětlení se doplňují. První sleduje vodní páru, druhé energii a třetí pohyb vzduchu. Společně umožňují pochopit, proč silnější liják nemusí znamenat deštivější rok. <SourceLink id="DOI_10_1017_9781009157896_010">(IPCC 2021, oddíl 8.2)</SourceLink></p>

    <h2 id="hypotezy">Tři vysvětlení a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="precipitation-mechanisms-caption"
      context={<p>Vodní pára je zásoba vody ve vzduchu. Srážkový úhrn je voda, která za vybranou dobu dopadne na povrch. Intenzita říká, jak rychle padá. Každá větev níže zkoumá jinou část tohoto děje.</p>}
      caption={<>Srovnání propojuje předpověď s konkrétní zkouškou a jejím výsledkem. Zde nehledáme jediného vítěze. Ověřujeme, zda příspěvky vlhkosti, energie a proudění společně odpovídají pozorovaným změnám. Názvy vedou k příběhům jednotlivých testů.</>} />

    <h2 id="pribehy">Jak se jednotlivá vysvětlení ověřovala</h2>
    <HypothesisStory id="vodni-para" number={1} title="Více vodní páry zesiluje silné srážky">
      <p>Voda ve vzduchu je převážně neviditelná pára. Při dostatečném ochlazení začne kondenzovat, tedy přecházet do kapalných kapek. Teplota, při které k tomu dojde, závisí na množství páry. Vzduch proto může mít při vyšší teplotě více páry, aniž by byl nasycený. Relativní vlhkost vyjadřuje, jak blízko je nasycení při právě dané teplotě. <SourceLink id="DOI_10_1175_JCLI3990_1">(Held a Soden 2006)</SourceLink></p>
      <p>Clausiův–Clapeyronův vztah popisuje, jak s teplotou roste tlak nasycené vodní páry. Při teplotách běžných v dolní atmosféře jde přibližně o 7 % na 1 °C. Pokud zůstane relativní vlhkost podobná, vzroste i skutečné množství páry. Z toho vznikla předpověď, že v teplejším klimatu mohou zesilovat silné srážky. <SourceLink id="DOI_10_1175_JCLI3990_1">(Held a Soden 2006, oddíly 1 a 2)</SourceLink></p>
      <p>Samotná pára však ještě není déšť. Vystupující vzduch se při poklesu okolního tlaku rozpíná a ochlazuje. Po dosažení nasycení část páry kondenzuje. Kapky nebo ledové částice rostou a mohou začít padat. Na obrázku porovnáváme podobný výstup v prostředí s menším a větším množstvím páry. Ve druhém případě je k dispozici více vody pro kondenzaci. <SourceLink id="DOI_10_1073_pnas_0907610106">(O’Gorman a Schneider 2009)</SourceLink></p>
      <Graphic name="vodni-para" alt="Dva stejně silné výstupy v chladnějším a teplejším prostředí. Teplejší přitékající vzduch při stejné relativní vlhkosti obsahuje více páry a při ochlazování může vytvořit více srážek. Dva testy porovnávají fyzikální výpočet s modely a změny denních maxim na stanicích.">Modré tečky značí páru, nikoli oblačné kapky. Údaj 7 % se vztahuje k nasycené páře, nikoli k univerzálnímu růstu každého deště. <SourceLink id="DOI_10_1175_JCLI3990_1">(Held a Soden 2006)</SourceLink></Graphic>
      <h4 id="test-kondenzace" className={styles.testHeading}>První test: stačí pro silnější déšť více páry?</h4>
      <p>Paul O’Gorman a Tapio Schneider v roce 2009 porovnali jedenáct klimatických modelů. Pro období 1981–2000 a 2081–2100 ve scénáři A1B sledovali velmi vysoký denní úhrn, který překračuje jen přibližně jedna z tisíce denních hodnot. Z teploty a výstupu vzduchu samostatně odvodili množství vznikajícího kondenzátu a porovnali je s modelovými extrémy. Výpočet vysvětlil jejich změny lépe než prosté násobení celkové zásoby páry. Mimo tropy extrémy v těchto výpočtech rostly pomaleji než zásoba páry. <SourceLink id="DOI_10_1073_pnas_0907610106">(O’Gorman a Schneider 2009, obrázky 2 a 3)</SourceLink></p>
      <h4 id="test-stanice" className={styles.testHeading}>Druhý test: zesilování se objevuje i v měřeních?</h4>
      <p>Seth Westra, Lisa Alexanderová a Francis Zwiers v roce 2013 vybrali stanice s alespoň třiceti roky použitelných údajů. Pro každý rok vzali nejvyšší denní úhrn. Růst na 64 % stanic převážil nad poklesem na zbývajících 36 %. Autoři také porovnali maxima s globální teplotou. Podle způsobu analýzy dostali typické zesílení o 5,9 až 7,7 % na 1 °C globálního oteplení. Toto rozpětí tvoří různé odhady, není to interval spolehlivosti jediného výsledku. Postup výběru maxim vysvětluje <Link href="/metody/analyza-casovych-zmen-a-extremu/#extremy">metoda analýzy extrémů</Link>. <SourceLink id="DOI_10_1175_jcli_d_12_00502_1">(Westra a kol. 2013, tabulka 1)</SourceLink></p>
      <p>Staniční výsledek poskytl pozorovací oporu očekávanému zesilování. Nebyl však pokusem, při kterém by se měnila jen vlhkost. Teplota se v reálném klimatu mění současně s prouděním. Zbývá proto vysvětlit, proč nejprudší deště mohou zesilovat výrazněji než celkové množství srážek. <SourceLink id="DOI_10_1175_jcli_d_12_00502_1">(Westra a kol. 2013, diskuse)</SourceLink></p>
    </HypothesisStory>

    <HypothesisStory id="energie" number={2} title="Celkový úhrn omezuje energetická bilance">
      <p>Isaac Held a Brian Soden v roce 2006 shrnuli zvláštní výsledek klimatických výpočtů. S oteplováním rychle přibývalo vodní páry, celkové srážky však rostly mnohem pomaleji. Pokud by vlhkost sama určovala celý koloběh, tento rozdíl by nedával smysl. Autoři jej spojili s tím, kolik energie je k dispozici pro vypařování a jak se mění přenos tepla mezi povrchem a atmosférou. <SourceLink id="DOI_10_1175_JCLI3990_1">(Held a Soden 2006, oddíl 3)</SourceLink></p>
      <p>Při vypařování voda přijme energii z okolí. Když pára později zkondenzuje, tuto energii uvolní do vzduchu. Více srážek v dlouhodobém globálním průměru proto znamená také více uvolňovaného tepla. Atmosféra musí toto teplo odvádět. Jinak by se dál ohřívala a její stav by se měnil. <SourceLink id="DOI_10_1175_JCLI_D_13_00163_1">(Pendergrassová a Hartmann 2014)</SourceLink></p>
      <p>Obrázek sleduje energii od vypařování po kondenzaci. Radiační ochlazování atmosféry je rozdíl mezi energií, kterou atmosféra vyzáří, a tou, kterou sama pohltí. Vyzařuje přitom do vesmíru i dolů k povrchu. Pro tento rozbor tedy potřebujeme bilanci atmosféry, nikoli pouze příjem a výdej celé planety. <SourceLink id="DOI_10_1017_9781009157896_010">(IPCC 2021, oddíl 8.2.1)</SourceLink></p>
      <Graphic name="energie" alt="Povrch předává při vypařování energii vodní páře. Kondenzace uvolňuje teplo do atmosféry, která vyzařuje směrem do vesmíru i k povrchu. Dlouhodobé množství srážek musí odpovídat možnosti odvádět toto teplo. Dva testy srovnávají modelové srážky a samostatný radiační výpočet.">V hlavním schématu odlišujeme modře vodu a oranžově energii. Záření atmosféru také ohřívá, do bilance proto vstupuje čistý výdej po odečtení pohlcení. <SourceLink id="DOI_10_1175_JCLI_D_13_00163_1">(Pendergrassová a Hartmann 2014)</SourceLink></Graphic>
      <h4 id="test-globalni-uhrn" className={styles.testHeading}>První test: rostou pára a srážky stejně rychle?</h4>
      <p>Held a Soden porovnali dvacet modelů při stejném scénáři A1B. Proti prvním dvaceti rokům 21. století postavili posledních dvacet. Množství páry v celém sloupci atmosféry rostlo přibližně o 7,5 % na 1 °C globálního oteplení. Celkové srážky rostly řádově o 2 %, s prostředním modelovým odhadem 1,7 %. Stejné modely tedy vytvářely oba jevy současně. Rozdíl nešlo vysvětlit tím, že by každý údaj pocházel z jiné skupiny modelů. <SourceLink id="DOI_10_1175_JCLI3990_1">(Held a Soden 2006, obrázek 2)</SourceLink></p>
      <h4 id="test-radiacni-bilance" className={styles.testHeading}>Druhý test: vysvětlí rozdíl výpočet energie?</h4>
      <p>Angeline Pendergrassová a Dennis Hartmann v roce 2014 použili novější modely CMIP5. V radiačním výpočtu odděleně měnili teplotu, vlhkost a CO₂ a sledovali ochlazování atmosféry. Potom jednotlivé změny složili a porovnali s úplnými modely. Výsledek vysvětlil podstatnou část jejich pomalého růstu srážek. Modelové výpočty s koncentrací CO₂ zvyšovanou o 1 % ročně dávaly průměrné zesílení srážek o 1,4 % na 1 °C. <SourceLink id="DOI_10_1175_JCLI_D_13_00163_1">(Pendergrassová a Hartmann 2014, obrázky 1 a 4)</SourceLink></p>
      <p>Rozbor také oddělil dva účinky CO₂. Oteplení povrchu podporuje růst globálních srážek. Samotné přidání CO₂ však mění záření atmosféry ještě před tímto oteplením a růst srážek tlumí. Proto nelze pro všechny příčiny oteplování používat jedno procento. Souhrn IPCC z roku 2021 uvádí pro samotnou teplotní odezvu velmi pravděpodobný rozsah 2 až 3 % na 1 °C, zatímco celková odpověď závisí také na působícím vlivu. <SourceLink id="DOI_10_1017_9781009157896_010">(IPCC 2021, oddíl 8.2.1)</SourceLink></p>
    </HypothesisStory>

    <HypothesisStory id="proudeni" number={3} title="Proudění určuje rozložení a trvání srážek">
      <p>Předchozí vysvětlení počítala se zásobou vody a s energií. V konkrétní oblasti však voda přitéká také odjinud. Vítr přináší vlhký vzduch, proudy se mohou sbíhat a vzduch vystupovat. Při sestupu se naopak stlačuje a otepluje, což vznik oblaků omezuje. Změna těchto pohybů proto může srážky přesunout, zesílit nebo zeslabit. <SourceLink id="DOI_10_1017_9781009157896_010">(IPCC 2021, oddíl 8.2.2)</SourceLink></p>
      <p>Už O’Gorman a Schneider v roce 2009 narazili při porovnávání modelů na velké rozdíly v tropických extrémech. Kdyby rozhodovala pouze vlhkost, měly by být modely podobnější. Zaměřili se proto na výstup vzduchu. Obrázek odděluje tuto změnu od změny vlhkosti, kterou jsme zkoumali v první větvi. Delší nebo opakovaný přechod dešťových systémů navíc může zvýšit úhrn i bez změny nejsilnějšího okamžitého deště. <SourceLink id="DOI_10_1073_pnas_0907610106">(O’Gorman a Schneider 2009)</SourceLink>{" "}<SourceLink id="DOI_10_1017_9781009157896_010">(IPCC 2021, oddíl 8.2.3)</SourceLink></p>
      <Graphic name="proudeni" alt="Při stejné vlhkosti přitékajícího vzduchu srovnáváme slabší výstup s výstupem silnějším a opakovaným. Intenzivnější kondenzace zesiluje déšť a delší trvání zvyšuje úhrn. Testy zahrnují modelové tropické extrémy a rozbor ledna 2014 v jižní Británii.">Velikost šipek pouze rozlišuje slabší a silnější proudění. Malý graf a mapa jsou orientační symboly, nikoli výsledky výpočtu. <SourceLink id="DOI_10_1073_pnas_0907610106">(O’Gorman a Schneider 2009)</SourceLink>{" "}<SourceLink id="DOI_10_1038_s41598_019_39306_y">(Oueslatiová a kol. 2019)</SourceLink></Graphic>
      <h4 id="test-vystup-modely" className={styles.testHeading}>První test: co se změní, když zahrneme výstup?</h4>
      <p>Ve stejném modelovém rozboru autoři porovnali dvě varianty. První zachovala výstup a započítala teplotní změnu. Druhá přidala i změnu rychlosti výstupu. První varianta dobře vystihovala změny mimo tropy. V tropech bylo potřeba zahrnout také výstup, aby výpočet zachytil rozdíly mezi modely. Jde o další část téhož testu z první větve, nikoli o novou nezávislou studii. <SourceLink id="DOI_10_1073_pnas_0907610106">(O’Gorman a Schneider 2009, obrázek 3)</SourceLink></p>
      <h4 id="test-britanie" className={styles.testHeading}>Druhý test: co přinášelo déšť do jižní Británie?</h4>
      <p>V lednu 2014 zasáhly jižní Británii mimořádné srážky. Jejich záznam doplňuje <Link href="/pozorovani/srazky-a-privalove-srazky/#britanie-2014">pozorování srážek</Link>. Bouthéina Oueslatiová, Pascal Yiou a Aglaé Jézéquelová v roce 2019 sestavili vodní bilanci atmosféry pro oblast 50–52° severní šířky a 6,5° západní délky až 0°. Zkoumali, zda odchylku od lednového průměru 1981–2010 vysvětlí místní výpar, přenos vlhkosti, nebo změna výstupu. <SourceLink id="DOI_10_1038_s41598_019_39306_y">(Oueslatiová a kol. 2019)</SourceLink></p>
      <p>Použili reanalýzy ERA-Interim a NCEP, které spojují měření s fyzikálním modelem atmosféry. Rozbor ukázal převahu svislého přenosu vlhkosti. Změna proudění tvořila přes 90 % vypočtené odchylky tohoto přenosu od obvyklého ledna. Číslo se týká konkrétního členu vodní bilance. Neudává podíl srážek způsobený člověkem. K jeho určení by bylo nutné porovnat také klima bez lidského vlivu. <SourceLink id="DOI_10_1038_s41598_019_39306_y">(Oueslatiová a kol. 2019, obrázek 3)</SourceLink></p>
      <p>Proudění tak doplňuje vysvětlení vlhkostí. Pro jednotlivou událost potřebujeme znát také přísun vody, sílu výstupu a trvání deště. Jak se pohyb vzduchu rekonstruuje z neúplných měření, vysvětluje <Link href="/metody/asimilace-dat-a-reanalyzy/">metoda reanalýz</Link>.</p>
    </HypothesisStory>

    <h2 id="mechanismus">Proč silnější liják nemusí znamenat deštivější rok</h2>
    <p>Testy podpořily všechny tři příspěvky. Vodní pára pomáhá vysvětlit zesilování silných dešťů, energetická bilance pomalejší růst globálního úhrnu a proudění rozdíly mezi oblastmi i událostmi. Vlhkost sama neprošla jako úplné vysvětlení. Složením těchto dějů dostáváme souvislý obraz toho, jak se srážky mění.</p>
    <h3 id="zasoba-a-tok">Voda v atmosféře a voda dopadající na zem</h3>
    <p>Zásoba a průtok jsou různé veličiny. V atmosféře může být najednou více vody, aniž by jí o stejné procento více každý den spadlo. O přeměně páry na srážky rozhodují podmínky výstupu a ochlazování. O dlouhodobém globálním průtoku navíc rozhoduje energie potřebná pro vypařování a uvolňovaná při kondenzaci. Proto rychlejší růst vlhkosti a pomalejší růst celkových srážek nejsou v rozporu. <SourceLink id="DOI_10_1175_JCLI3990_1">(Held a Soden 2006)</SourceLink>{" "}<SourceLink id="DOI_10_1175_JCLI_D_13_00163_1">(Pendergrassová a Hartmann 2014)</SourceLink></p>
    <h3 id="oblasti-a-obdobi">Síla deště, jeho četnost a délka se mohou měnit rozdílně</h3>
    <p>Roční úhrn vzniká součtem všech srážkových událostí. Pokud nejsilnější deště zesílí, ale deštivých dnů ubude, nemusí celkový úhrn vzrůst. Jinde opakované přechody vlhkého vzduchu přinesou více vody za celou sezonu. Posuny oblastí výstupu a sestupu navíc umožňují, aby v jedné části světa srážky přibývaly a v jiné ubývaly. Takové změny zachycují vedle denních maxim i mapy celkových úhrnů. <SourceLink id="DOI_10_1017_9781009157896_010">(IPCC 2021, oddíly 8.2.2 a 8.2.3)</SourceLink>{" "}<Link href="/pozorovani/srazky-a-privalove-srazky/#pozorovani">Porovnání v pozorováních</Link>.</p>
    <p>Pro jeden region proto postupujeme od otázky, zda sledujeme krátkou intenzitu, denní maximum, nebo sezonní součet. Potom zkoumáme vlhkost a proudění ve stejném období. Krátké deště měří <Link href="/metody/srazkomery-a-disdrometry/">srážkoměry a disdrometry</Link>, jejich prostorový průběh doplňuje <Link href="/metody/aktivni-radarove-mereni/#intenzita-deste">meteorologický radar</Link>. Oteplovací účinek vodní páry je samostatný děj, kterému se věnuje <Link href="/mechanismy/vodni-para-jako-zpetna-vazba/">článek o její zpětné vazbě</Link>.</p>

    <h3 id="nejistoty">Co známe méně přesně</h3>
    <p>Fyzikální vazba páry, kondenzace a energie je pevně podložená. Méně přesně umíme určit budoucí proudění v konkrétní oblasti, organizaci bouřek a změnu hodinových extrémů. Proto nelze globální procento přenést přímo na déšť v jednom městě. <SourceLink id="DOI_10_1017_9781009157896_010">(IPCC 2021, oddíl 8.5)</SourceLink></p>
    <details className="method-details"><summary>Podrobnosti nejistot a dalších zkoušek</summary>
      <p>Staniční síť nepokrývá svět rovnoměrně a dlouhé hodinové řady jsou vzácnější než denní. Denní extrém navíc neříká, kolik vody spadlo během nejsilnější půlhodiny. Westra a kolegové prověřovali citlivost výsledku na délku záznamu, období a prostorové vážení stanic. Rozmezí 5,9 až 7,7 % je třeba číst právě v tomto kontextu. <SourceLink id="DOI_10_1175_jcli_d_12_00502_1">(Westra a kol. 2013)</SourceLink></p>
      <p>Modely CMIP3 a CMIP5 mají společné části fyzikálního popisu a nejsou sadou nezávislých laboratorních pokusů. Hrubá prostorová síť nedokáže přímo rozlišit jednotlivé bouřkové výstupy. O’Gorman a Schneider ukázali, proč právě jejich rozdílný popis ovlivňuje tropické extrémy. Kontrola pomocí srážkoměrů poskytuje odlišný druh důkazu. <SourceLink id="DOI_10_1073_pnas_0907610106">(O’Gorman a Schneider 2009)</SourceLink></p>
      <p>V britském případě obě reanalýzy podhodnocovaly intenzitu srážek, ERA-Interim lépe vystihovala jejich prostorový a časový průběh. Reanalýzy navíc využívají část stejných měření. Jejich shoda proto není úplně nezávislé potvrzení. Výsledek potřebuje porovnat i se srážkoměrným souborem E-OBS, jak studie provedla. <SourceLink id="DOI_10_1038_s41598_019_39306_y">(Oueslatiová a kol. 2019)</SourceLink></p>
      <p>Číselné energetické odhady zde popisují dlouhodobý globální průměr, v němž se výpar přibližně rovná srážkám a ukládání energie v atmosféře je malým členem. Místní nebo krátkodobý rozbor musí přidat přenos energie a vody mezi oblastmi i změnu jejich zásoby. Pro přesný rozbor se také zahrnují ledové fáze a vypařování padajících srážek. <SourceLink id="DOI_10_1017_9781009157896_010">(IPCC 2021, oddíl 8.2)</SourceLink></p>
      <p>Další zkouška má porovnat deště se stejným typem proudění a podobnou rychlostí výstupu, ale jinou vlhkostí. Samostatně lze testovat, zda model správně vytváří četnost a trvání dešťových systémů. Tím se prověří oba příspěvky, které by porovnání samotné teploty s ročním úhrnem směšovalo.</p>
    </details>

    <h2 id="shrnuti">Shrnutí</h2>
    <div className="method-conclusion">
      <p>Oteplování při podobné relativní vlhkosti zvyšuje množství vodní páry. Když vlhký vzduch vystoupí a ochladí se, může vzniknout více srážek. Dlouhodobý celosvětový úhrn však roste pomaleji, protože kondenzace uvolňuje teplo, které musí atmosféra odvést. Proudění rozhoduje, kam vlhkost přiteče, kde vzduch vystoupí a jak dlouho bude pršet.</p>
      <p>Mechanismus vysvětluje, proč mohou nejsilnější deště zesilovat současně s malou změnou globálního úhrnu a s poklesem srážek v některých oblastech. Pro konkrétní místo potřebujeme rozlišit intenzitu, délku a četnost událostí. Přibližných 7 % na 1 °C se vztahuje k nasycené páře za běžných podmínek dolní atmosféry, nikoli ke všem srážkám.</p>
    </div>
    <h2 id="prameny">Prameny, data a grafiky</h2>
    <ul>
      <li>Vlhkost a globální koloběh: <SourceLink id="DOI_10_1175_JCLI3990_1">Held a Soden 2006</SourceLink>. Extrémy a výstup vzduchu: <SourceLink id="DOI_10_1073_pnas_0907610106">O’Gorman a Schneider 2009</SourceLink>.</li>
      <li>Pozorované denní extrémy: <SourceLink id="DOI_10_1175_jcli_d_12_00502_1">Westra a kol. 2013</SourceLink>. Globální a regionální úhrny: <SourceLink id="DOI_10_1007_s00382_022_06567_9">Gu a Adler 2023</SourceLink>.</li>
      <li>Energetické omezení: <SourceLink id="DOI_10_1175_JCLI_D_13_00163_1">Pendergrassová a Hartmann 2014</SourceLink>. Vodní bilance ledna 2014: <SourceLink id="DOI_10_1038_s41598_019_39306_y">Oueslatiová a kol. 2019</SourceLink>.</li>
      <li>Odborná syntéza: <SourceLink id="DOI_10_1017_9781009157896_010">IPCC 2021, kapitola 8</SourceLink>. Číselné výsledky výše vždy náleží uvedenému souboru, období a experimentu.</li>
      <li>Modelové archivy: <SourceLink id="DATA_CMIP_PRECIPITATION">CMIP a přístup k výstupům jednotlivých generací</SourceLink>. Pro uvedené historické testy hledejte CMIP3, experiment A1B, a CMIP5, experiment 1pctCO2. Potřebné proměnné a výběr modelů popisují původní práce.</li>
      <li>Regionální podklady: <SourceLink id="DATA_NCEP_NCAR_REANALYSIS">NCEP/NCAR Reanalysis 1</SourceLink>, <SourceLink id="DOC_ERA_INTERIM_ACCESS">postup přístupu k ERA-Interim</SourceLink> a <SourceLink id="WEB_Copernicus_E_OBS_data_access_94a6a7b1">E-OBS</SourceLink>. ERA-Interim vyžaduje účet a přístup podle aktuálních pokynů ECMWF. Novější vydání dat nemusí přesně reprodukovat původní studii.</li>
      <li>Dlouhé staniční ukazatele: <SourceLink id="WEB_Met_Office_Met_Office_Hadley_Centre_observations_datasets_cd3aac80">HadEX3</SourceLink>. Tento novější soubor není totožný s výběrem stanic Westry a kolegů z roku 2013.</li>
      <li><SourceLink id="MEDIA_PRECIPITATION_MECHANISMS_2026">Podklady ilustrací</SourceLink> a <Link href={media + "/prompts.json"}>úplná zadání pro vestavěný generátor obrázků</Link>.</li>
    </ul>
  </div></article>;
}
