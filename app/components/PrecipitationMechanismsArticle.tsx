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
    name: "Kolik vody může při lijáku zkondenzovat?",
    prediction: "Při stejné relativní vlhkosti obsahuje teplejší vzduch víc vodní páry. Při podobně silném výstupu pak může vzniknout víc srážek.",
    test: "Porovnáme silné deště v modelech s výpočtem kondenzace. Ve staničních měřeních zjistíme, jak se s globální teplotou měnil úhrn nejdeštivějšího dne v roce.",
    observation: "Změny silných srážek v modelech vystihl výpočet z teploty a rychlosti výstupu. Na 64 % z 8 326 stanic nejvyšší denní úhrn v čase rostl.",
    verdict: "Větší zásoba páry může déšť zesílit",
    explanation: "Staniční měření potvrzují, že převažuje růst denních maxim. Na konkrétním místě záleží také na tom, jak rychle a jak dlouho vzduch stoupá.",
    state: "supported",
  },
  {
    id: "energie",
    name: "Co omezuje množství srážek na celé Zemi?",
    prediction: "Kondenzace předává vzduchu teplo. V dlouhodobém celosvětovém průměru proto může srážek přibývat jen v míře, která odpovídá schopnosti atmosféry odvádět teplo.",
    test: "Ve stejných modelech porovnáme přírůstek vodní páry a srážek. Pak spočítáme, zda růst srážek odpovídá změně ochlazování atmosféry zářením.",
    observation: "V modelech rostly srážky při oteplování podstatně pomaleji než zásoba páry. Změna vypočteného ochlazování tento menší přírůstek srážek vysvětlila.",
    verdict: "Celkový úhrn omezuje výdej tepla",
    explanation: "Tato podmínka platí pro celou atmosféru za dlouhou dobu. Během jedné bouře může na malé území přitékat voda i z velké vzdálenosti.",
    state: "supported",
  },
  {
    id: "proudeni",
    name: "Jak proudění ovlivňuje místní úhrn?",
    prediction: "Silnější výstup může zesílit srážky i při podobné vlhkosti. Pokud přes stejné místo přechází jedna dešťová oblast za druhou, místní úhrn narůstá.",
    test: "Spočítáme extrémní denní úhrny se změnou rychlosti výstupu a bez ní. V jižní Británii prověříme, odkud se vzala voda pro vydatné srážky v lednu 2014.",
    observation: "Rychlost výstupu vysvětlila velkou část rozdílů mezi modely v tropech. Také v Británii byl rozhodující silnější výstup vlhkého vzduchu.",
    verdict: "Proudění vysvětluje místní rozdíly",
    explanation: "Rozbor deštivého ledna ukazuje, jak srážky v daném místě vznikly. Vliv lidské činnosti na takovou událost vyžaduje další srovnání.",
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
    <h2 id="co-vysvetlujeme">Co prozradí nejdeštivější den v roce?</h2>
    <p className="article-prose__intro">Nejdeštivější den v roce přinášel postupně více vody na 64 % z 8 326 sledovaných stanic. Jejich záznamy pokrývají různě dlouhé úseky let 1900–2009. Celkové množství srážek nad pevninou i oceánem zachycují měsíční mapy GPCP, které spojují měření srážkoměrů s družicovými odhady. V letech 1979–2020 na nich byly patrné výrazné nárůsty v některých oblastech a poklesy v jiných. Celosvětový průměr se přitom změnil jen málo. Obě měření přibližuje <Link href="/pozorovani/srazky-a-privalove-srazky/#pozorovani">pozorování srážek a přívalových srážek</Link>. <SourceLink id="DOI_10_1175_jcli_d_12_00502_1">(Westra a kol. 2013)</SourceLink>{" "}<SourceLink id="DOI_10_1007_s00382_022_06567_9">(Gu a Adler 2023)</SourceLink></p>
    <p>Úhrn říká, kolik vody za určitou dobu spadlo. Intenzita vyjadřuje, jak rychle padala. Při úhrnu 20 milimetrů připadne na každý metr čtvereční 20 litrů vody. Jestliže spadnou za hodinu, průměrná intenzita je 20 mm/h. Při stejném úhrnu za deset hodin jsou to jen 2 mm/h. V denním součtu mohou oba deště vypadat stejně. K vysvětlení srážek tedy potřebujeme vědět, kolik vody je ve vzduchu, co ji přiměje zkondenzovat a jak dlouho déšť vydrží. <SourceLink id="DOI_10_1017_9781009157896_010">(IPCC 2021, oddíl 8.2)</SourceLink></p>

    <h2 id="hypotezy">Tři procesy, které ovlivňují srážky</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="precipitation-mechanisms-caption"
      context={<p>Vlhkost, energie a proudění působí současně. U jednotlivého lijáku záleží na množství vody, které může rychle zkondenzovat. Pro průměr celé Země je důležité i to, jak atmosféra naloží s teplem, jež se přitom uvolní.</p>}
      caption={<>Údaj v procentech na 1 °C vyjadřuje, jak se sledovaná veličina změní při oteplení o jeden stupeň. U staničních a modelových výsledků se změny vztahují k průměrné teplotě povrchu celé Země.</>} />

    <h2 id="pribehy">Co ukázaly modelové pokusy a měření</h2>
    <HypothesisStory id="vodni-para" number={1} title="Kolik vody může při lijáku zkondenzovat?">
      <p>Ve vzduchu je voda hlavně v podobě neviditelné páry. Když se vlhký vzduch dostatečně ochladí, dosáhne nasycení. Při dalším ochlazování se část páry sráží do drobných kapek. Tomu říkáme kondenzace. Relativní vlhkost udává, jak blízko je vzduch nasycení při své současné teplotě. Při nasycení dosahuje 100 %. <SourceLink id="DOI_10_1175_JCLI3990_1">(Held a Soden 2006)</SourceLink></p>
      <p>V teplejším vzduchu nastává nasycení při vyšším tlaku vodní páry. Závislost popisuje Clausiův–Clapeyronův vztah. Při teplotách běžných v dolní atmosféře vzroste tlak nasycené páry zhruba o 7 % na každý 1 °C oteplení. Při stejné relativní vlhkosti a stejném tlaku vzduchu tak připadá na kilogram vzduchu přibližně o tolik více páry. Kolik z ní při dešti zkondenzuje, závisí také na pohybu vzduchu. <SourceLink id="DOI_10_1175_JCLI3990_1">(Held a Soden 2006, oddíly 1 a 2)</SourceLink></p>
      <p>S výškou klesá tlak. Vystupující vzduch se proto rozpíná a chladne. Po dosažení nasycení vznikají v oblaku kapky nebo ledové částice. Když dostatečně narostou, mohou dopadnout na zem jako srážky. Při podobně silném výstupu tak může ze vzduchu, který přináší víc páry, za stejnou dobu spadnout víc vody. <SourceLink id="DOI_10_1073_pnas_0907610106">(O’Gorman a Schneider 2009)</SourceLink></p>
      <Graphic name="vodni-para" alt="Dva stejně silné výstupy v chladnějším a teplejším prostředí. Teplejší přitékající vzduch při stejné relativní vlhkosti obsahuje více páry a při ochlazování může vytvořit více srážek. Dva testy porovnávají fyzikální výpočet s modely a změny denních maxim na stanicích.">Modré tečky značí páru, nikoli oblačné kapky. Údaj 7 % se vztahuje k nasycené páře, nikoli k univerzálnímu růstu každého deště. <SourceLink id="DOI_10_1175_JCLI3990_1">(Held a Soden 2006)</SourceLink></Graphic>
      <h4 id="test-kondenzace" className={styles.testHeading}>Jak se změní nejsilnější denní srážky v modelech?</h4>
      <p>Paul O’Gorman a Tapio Schneider v roce 2009 porovnali denní úhrny v jedenácti klimatických modelech. Pro každé pásmo zeměpisné šířky určili hodnotu, kterou překročil asi jeden z tisíce denních úhrnů. Porovnali modelová období 1981–2000 a 2081–2100. Pro budoucí období všechny modely počítaly se stejným předpokládaným vývojem emisí, označovaným jako A1B. Pak z průběhu teploty s výškou a z rychlosti výstupu během silných dešťů vypočítali, kolik vody může zkondenzovat. Tento výpočet vystihl změny extrémů lépe než odhad ze samotného přírůstku páry. Mimo tropy rostly nejsilnější denní srážky v modelech pomaleji než zásoba páry. Záleželo na tom, o kolik se stoupající vzduch ochladil a jaká část páry přitom zkondenzovala. <SourceLink id="DOI_10_1073_pnas_0907610106">(O’Gorman a Schneider 2009, obrázky 2 a 3)</SourceLink></p>
      <h4 id="test-stanice" className={styles.testHeading}>Co ukázaly srážkoměry?</h4>
      <p>Seth Westra, Lisa Alexanderová a Francis Zwiers vybrali pro svou studii z roku 2013 stanice s nejméně třicetiletým záznamem. Pro každý rok na každé stanici vybrali den s nejvyšším úhrnem. Na 64 % stanic našli rostoucí trend a na 36 % klesající. Pak zkoumali, jak denní maxima souvisejí s průměrnou teplotou celé Země. Odhady ze stanic seřadili podle velikosti a vzali prostřední hodnotu, medián. Podle výběru dat a jejich zpracování vyšel nárůst denních maxim o 5,9 až 7,7 % na 1 °C globálního oteplení. Toto rozpětí ukazuje rozdíly mezi variantami výpočtu. Interval spolehlivosti by vyjadřoval nejistotu jednoho odhadu. Výběr nejvyšších hodnot vysvětluje <Link href="/metody/analyza-casovych-zmen-a-extremu/#extremy">metoda analýzy extrémů</Link>. <SourceLink id="DOI_10_1175_jcli_d_12_00502_1">(Westra a kol. 2013, tabulka 1)</SourceLink></p>
      <p>Ve staničních měřeních tedy zesilovaly srážky v nejdeštivějších dnech na většině sledovaných míst. To odpovídá očekávání, že ve vlhčím vzduchu může vzniknout víc srážek. Srážkoměr ale zachytí výsledek všech dějů dohromady. K určení podílu samotné vlhkosti bychom potřebovali znát i to, jak se při těchto deštích měnilo proudění. <SourceLink id="DOI_10_1175_jcli_d_12_00502_1">(Westra a kol. 2013, diskuse)</SourceLink></p>
    </HypothesisStory>

    <HypothesisStory id="energie" number={2} title="Co omezuje množství srážek na celé Zemi?">
      <p>Isaac Held a Brian Soden upozornili v roce 2006 na rozdíl, který se opakoval v klimatických modelech. V teplejším klimatu bylo ve vzduchu podstatně víc páry, ale průměrné množství srážek rostlo pomaleji. Vysvětlení hledali v energii, kterou voda přenáší mezi povrchem a atmosférou. <SourceLink id="DOI_10_1175_JCLI3990_1">(Held a Soden 2006, oddíl 3)</SourceLink></p>
      <p>Aby se voda vypařila z povrchu oceánu nebo pevniny, musí přijmout energii z okolí. Když potom pára zkondenzuje, předá tuto energii vzduchu jako teplo. V dlouhodobém průměru nad celou Zemí se výpar a srážky téměř vyrovnávají. Má-li tedy dlouhodobě padat víc srážek, musí atmosféra odvést také více tepla uvolněného při kondenzaci. <SourceLink id="DOI_10_1175_JCLI_D_13_00163_1">(Pendergrassová a Hartmann 2014)</SourceLink></p>
      <p>Atmosféra vyzařuje energii do vesmíru i dolů k povrchu a zároveň část slunečního i tepelného záření pohlcuje. Rozdíl mezi tím, co vyzáří a co pohltí, je její čisté radiační ochlazování. V dlouhodobé bilanci se tímto způsobem odvádí jak teplo z kondenzace, tak teplo, které povrch předává vzduchu přímo. Změnu celosvětových srážek proto lze zkoumat také výpočtem přenosu energie. <SourceLink id="DOI_10_1017_9781009157896_010">(IPCC 2021, oddíl 8.2.1)</SourceLink></p>
      <Graphic name="energie" alt="Povrch předává při vypařování energii vodní páře. Kondenzace uvolňuje teplo do atmosféry, která vyzařuje směrem do vesmíru i k povrchu. Dlouhodobé množství srážek musí odpovídat možnosti odvádět toto teplo. Dva testy srovnávají modelové srážky a samostatný radiační výpočet.">V hlavním schématu odlišujeme modře vodu a oranžově energii. Záření atmosféru také ohřívá, do bilance proto vstupuje čistý výdej po odečtení pohlcení. <SourceLink id="DOI_10_1175_JCLI_D_13_00163_1">(Pendergrassová a Hartmann 2014)</SourceLink></Graphic>
      <h4 id="test-globalni-uhrn" className={styles.testHeading}>Jak rychle přibývalo v týchž modelech páry a srážek?</h4>
      <p>Held a Soden porovnali v každém z dvaceti modelů prvních a posledních dvacet let 21. století při stejném emisním scénáři A1B. Spočítali, o kolik procent se změnila zásoba vodní páry v celém sloupci vzduchu a o kolik průměrné srážky. Obě změny přepočetli na 1 °C globálního oteplení. Páry přibylo přibližně 7,5 %. U srážek činil prostřední výsledek modelů 1,7 %. Procentní přírůstek srážek tak dosáhl necelé čtvrtiny přírůstku páry. <SourceLink id="DOI_10_1175_JCLI3990_1">(Held a Soden 2006, obrázek 2)</SourceLink></p>
      <h4 id="test-radiacni-bilance" className={styles.testHeading}>Odpovídá menší přírůstek srážek výdeji tepla?</h4>
      <p>Angeline Pendergrassová a Dennis Hartmann v roce 2014 použili novější generaci modelů označovanou jako CMIP5. Koncentrace CO₂ v nich rostla o 1 % ročně. Autoři porovnali prvních deset let výpočtu s lety 61 až 70. V globálním průměru přibylo srážek o 1,4 % na 1 °C oteplení. V samostatném výpočtu přenosu záření pak postupně měnili teplotu, vlhkost a koncentraci CO₂. Ve výpočtu pro jasnou oblohu vzrostl čistý výdej energie zářením přibližně o tolik, kolik tepla se v modelech navíc uvolnilo kondenzací. <SourceLink id="DOI_10_1175_JCLI_D_13_00163_1">(Pendergrassová a Hartmann 2014, obrázky 1 a 4)</SourceLink></p>
      <p>Vyšší koncentrace CO₂ působí na srážky dvěma způsoby. Ještě před oteplením povrchu omezí ochlazování atmosféry zářením, a tím růst srážek tlumí. Jakmile se ohřeje i povrch, celosvětové srážky mají tendenci růst. Mezivládní panel pro změnu klimatu (IPCC) uvádí pro samotnou odezvu na oteplení povrchu velmi pravděpodobný přírůstek 2 až 3 % na 1 °C. Modelový výsledek 1,4 % zahrnuje oba účinky současně. <SourceLink id="DOI_10_1017_9781009157896_010">(IPCC 2021, oddíl 8.2.1)</SourceLink></p>
    </HypothesisStory>

    <HypothesisStory id="proudeni" number={3} title="Jak proudění ovlivňuje místní úhrn?">
      <p>Nad jedním místem může spadnout mnohem víc vody, než se tam během deště vypaří. Vítr přináší vlhkost odjinud. Kde se proudy vzduchu u povrchu sbíhají a vzduch stoupá, ochlazuje se a mohou vzniknout srážky. O něco dál může vzduch sestupovat, stlačovat se a oteplovat, takže se tvorba oblaků omezuje. Posun proudění tak může přinést jedné oblasti více srážek a jiné méně. <SourceLink id="DOI_10_1017_9781009157896_010">(IPCC 2021, oddíl 8.2.2)</SourceLink></p>
      <p>Na rychlosti výstupu i na jeho trvání záleží z různých důvodů. Při stejné vlhkosti může v silnějším výstupu za minutu zkondenzovat více vody. Když nad místem prší déle nebo se přes něj přežene několik bouří za sebou, zvýší se celkový úhrn i při stejné intenzitě deště. <SourceLink id="DOI_10_1073_pnas_0907610106">(O’Gorman a Schneider 2009)</SourceLink>{" "}<SourceLink id="DOI_10_1017_9781009157896_010">(IPCC 2021, oddíl 8.2.3)</SourceLink></p>
      <Graphic name="proudeni" alt="Při stejné vlhkosti přitékajícího vzduchu srovnáváme slabší výstup s výstupem silnějším a opakovaným. Intenzivnější kondenzace zesiluje déšť a delší trvání zvyšuje úhrn. Testy zahrnují modelové tropické extrémy a rozbor ledna 2014 v jižní Británii.">Velikost šipek pouze rozlišuje slabší a silnější proudění. Malý graf a mapa jsou orientační symboly, nikoli výsledky výpočtu. <SourceLink id="DOI_10_1073_pnas_0907610106">(O’Gorman a Schneider 2009)</SourceLink>{" "}<SourceLink id="DOI_10_1038_s41598_019_39306_y">(Oueslatiová a kol. 2019)</SourceLink></Graphic>
      <h4 id="test-vystup-modely" className={styles.testHeading}>Proč se modely nejvíc rozcházely v tropech?</h4>
      <p>O’Gorman a Schneider se vrátili k <a href="#test-kondenzace">výpočtu kondenzace během nejsilnějších dešťů</a>. Nejprve v něm změnili teplotu a ponechali původní rychlost výstupu vzduchu. Tato varianta dobře vystihla změny denních extrémů mimo tropy. V tropech se modely lišily hlavně tím, jak se v nich měnila rychlost výstupu. Teprve po zahrnutí této změny dokázal výpočet velkou část rozdílů mezi nimi vysvětlit. Obě srovnání vycházejí ze stejných modelových dat. <SourceLink id="DOI_10_1073_pnas_0907610106">(O’Gorman a Schneider 2009, obrázek 3)</SourceLink></p>
      <h4 id="test-britanie" className={styles.testHeading}>Co přineslo tolik deště na jih Británie v lednu 2014?</h4>
      <p>V lednu 2014 zasahovala jih Británie jedna zimní bouře za druhou. Jak mimořádně deštivý byl celý měsíc, ukazují <Link href="/pozorovani/srazky-a-privalove-srazky/#britanie-2014">srážkoměrné záznamy z jižní Británie</Link>. Bouthéina Oueslatiová, Pascal Yiou a Aglaé Jézéquelová porovnali tento měsíc s lednovým průměrem let 1981–2010. Pro území mezi 50 a 52° severní šířky, od 6,5° západní délky k nultému poledníku, spočítali příspěvky místního výparu, vodorovného přenosu vlhkosti a výstupu vlhkého vzduchu. <SourceLink id="DOI_10_1038_s41598_019_39306_y">(Oueslatiová a kol. 2019)</SourceLink></p>
      <p>K výpočtu použili dva soubory, ERA-Interim a NCEP. Oba při rekonstrukci počasí spojují měření s fyzikálním modelem atmosféry. V obou rekonstrukcích vynášel vzduch do výšky více vlhkosti než v obvyklém lednu. Autoři pak oddělili změnu vlhkosti vzduchu od změny rychlosti, s níž stoupal. Silnější výstup vysvětlil přes 90 % odchylky svislého přenosu vlhkosti. Tento podíl popisuje, jak během ledna vznikaly podmínky pro déšť. K určení vlivu lidské činnosti by bylo třeba porovnat pravděpodobnost nebo vydatnost podobných srážek v dnešním klimatu a v klimatu bez lidského vlivu. <SourceLink id="DOI_10_1038_s41598_019_39306_y">(Oueslatiová a kol. 2019, obrázek 3)</SourceLink></p>
      <p>Na jihu Británie tedy záleželo hlavně na tom, že vzduch stoupal silněji než obvykle. Jak se z naměřených hodnot získá obraz pohybu vzduchu i nad místy bez přístrojů, vysvětluje <Link href="/metody/asimilace-dat-a-reanalyzy/">metoda reanalýz</Link>.</p>
    </HypothesisStory>

    <h2 id="mechanismus">Proč může zesílit liják i tam, kde za rok spadne méně vody?</h2>
    <p>Staniční záznamy ukazují, že v nejdeštivějších dnech na mnoha místech spadne více vody než dříve. Výpočty vysvětlují, jak k tomu může přispět vyšší vlhkost, když vzduch stoupá a ochlazuje se. O tom, zda vydatný déšť zasáhne určitou oblast, rozhoduje také proudění, jak ukázal leden 2014 v Británii. Nad celou Zemí přitom dlouhodobý přírůstek srážek omezuje množství tepla, které atmosféra dokáže odvést.</p>
    <h3 id="zasoba-a-tok">Jak dlouho voda zůstává v atmosféře?</h3>
    <p>Dobu, kterou voda stráví v atmosféře, můžeme odhadnout z její zásoby a z množství, které každý den spadne. Kdyby obě veličiny vzrostly o stejné procento, vyšla by tato doba stejně dlouhá. V modelových výpočtech se ale zásoba páry zvětšovala rychleji než množství srážek. Každý den tak na povrch dopadla menší část přítomné vody a doba mezi vypařením a návratem na povrch se v průměru prodloužila. <SourceLink id="DOI_10_1175_JCLI3990_1">(Held a Soden 2006)</SourceLink>{" "}<SourceLink id="DOI_10_1175_JCLI_D_13_00163_1">(Pendergrassová a Hartmann 2014)</SourceLink></p>
    <h3 id="oblasti-a-obdobi">Kolik deštivých dnů se sejde za rok?</h3>
    <p>Roční úhrn dostaneme tak, že sečteme vodu ze všech dešťů i ze sněžení. I když při největším lijáku spadne víc vody než dříve, po zbytek roku může pršet méně často nebo kratší dobu. Celkový úhrn pak může i klesnout. Jinde naopak častější přechody dešťových oblastí zvýší sezonní úhrn, i když nejsilnější liják zůstane stejně vydatný. Proto má smysl sledovat vedle sebe mapy celkových srážek i nejvyšší denní úhrny. <SourceLink id="DOI_10_1017_9781009157896_010">(IPCC 2021, oddíly 8.2.2 a 8.2.3)</SourceLink>{" "}<Link href="/pozorovani/srazky-a-privalove-srazky/#pozorovani">Porovnání v pozorováních</Link>.</p>
    <p>Chceme-li zjistit, zda zesílily krátké lijáky v určitém městě, potřebujeme údaje za minuty nebo hodiny. <Link href="/metody/srazkomery-a-disdrometry/">Srážkoměry a disdrometry</Link> sledují déšť v místě přístroje, zatímco <Link href="/metody/aktivni-radarove-mereni/#intenzita-deste">meteorologický radar</Link> ukáže i pohyb srážek v okolí. Vodní pára kromě srážek ovlivňuje také únik tepelného záření. Tento účinek vysvětluje <Link href="/mechanismy/vodni-para-jako-zpetna-vazba/">článek o zpětné vazbě vodní páry</Link>.</p>

    <h3 id="nejistoty">Proč jsou místní odhady nejistější?</h3>
    <p>Závislost nasycení na teplotě známe přesněji než budoucí dráhy bouří. Pro hodinový liják v jednom městě je přitom důležité, zda bouře rychle přejde, zůstane nad místem nebo ji vystřídá další. Právě rozdíly v proudění a v uspořádání bouřek omezují přesnost místních odhadů. <SourceLink id="DOI_10_1017_9781009157896_010">(IPCC 2021, oddíl 8.5)</SourceLink></p>
    <details className="method-details"><summary>Co může odhad zpřesnit a jak vysvětlení prověřit</summary>
      <p>Někde měří srážkoměry blízko sebe, jinde jsou mezi nimi velké mezery. Westra a jeho kolegové proto opakovali výpočet pro různé délky záznamu a změnili i váhu oblastí s hustou sítí stanic. Převaha rostoucích denních maxim přetrvala. K ověření změn uvnitř nejdeštivějšího dne jsou ale potřeba dlouhá měření s kratším časovým krokem. Takových záznamů je méně. <SourceLink id="DOI_10_1175_jcli_d_12_00502_1">(Westra a kol. 2013)</SourceLink></p>
      <p>Jednotlivé bouřkové výstupy zabírají menší prostor než jedna buňka starších globálních modelů CMIP3 a CMIP5. Modely proto jejich účinek přibližují výpočtem z průměrných podmínek v buňce. Některé přitom používají podobné postupy, takže se mohou mýlit podobným způsobem. Srážkoměr nabízí nezávislou kontrolu toho, kolik vody skutečně dopadlo na zem. <SourceLink id="DOI_10_1073_pnas_0907610106">(O’Gorman a Schneider 2009)</SourceLink></p>
      <p>V britském případě autoři porovnali obě rekonstrukce počasí s mapami E-OBS sestavenými ze staničních měření. Obě rekonstrukce déšť podhodnotily. ERA-Interim lépe zachytila, kde pršelo nejvíc a jak se srážky měnily ze dne na den. Obě reanalýzy navíc využívají část stejných měření, která ovlivňují i jejich vzájemnou shodu. <SourceLink id="DOI_10_1038_s41598_019_39306_y">(Oueslatiová a kol. 2019)</SourceLink></p>
      <p>Při krátké bouři se může zásoba vody nad místem rychle měnit. Do místní bilance proto patří i voda, kterou vítr přináší nebo odnáší. Přesný výpočet zahrnuje také vznik a tání ledových částic i vypařování kapek během pádu. Pro dlouhodobý průměr celé Země se vodorovné přesuny mezi oblastmi navzájem vyrovnají. <SourceLink id="DOI_10_1017_9781009157896_010">(IPCC 2021, oddíl 8.2)</SourceLink></p>
      <p>Účinek vlhkosti lze dál prověřovat porovnáním bouří s podobně silným výstupem a s rozdílnou vlhkostí přicházejícího vzduchu. Pokud by ve vlhčím prostředí za jinak srovnatelných podmínek soustavně vznikalo méně srážek, jednoduché vysvětlení větší zásobou páry by potřebovalo revizi. Zvlášť lze podle měření ověřit, jak dobře model zachycuje dráhu bouří a dobu, po kterou v místě prší.</p>
    </details>

    <h2 id="shrnuti">Shrnutí</h2>
    <div className="method-conclusion">
      <p>Při podobné relativní vlhkosti obsahuje teplejší vzduch více vodní páry. Když stoupá a ochlazuje se, může z něj za stejnou dobu spadnout víc vody. Celosvětový úhrn roste při oteplování pomaleji než zásoba páry, protože při kondenzaci se uvolňuje teplo a atmosféra ho musí odvést. Přibližných 7 % na 1 °C popisuje růst tlaku nasycené páry. Pro samotný vliv oteplení povrchu na celosvětové srážky odhaduje IPCC přírůstek 2 až 3 % na 1 °C.</p>
      <p>Na konkrétním místě rozhoduje i to, kudy vlhký vzduch proudí, jak rychle stoupá a jak dlouho nad místem prší. Nejsilnější liják roku proto může zesílit, i když mezi dešti přibude suchých dnů a za celý rok spadne vody méně.</p>
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
