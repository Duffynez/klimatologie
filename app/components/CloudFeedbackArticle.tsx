import Image from "next/image";
import Link from "next/link";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./CloudFeedbackArticle.module.css";

const media = "/media/oblaka-a-jejich-klimaticke-zpetne-vazby";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "plocha-vysokych-oblaku",
    name: "Zmenšování ledových kovadlin v tropech",
    prediction: "Jestliže se nad teplejším oceánem zmenší ledové vrcholy bouřkových oblaků, většími mezerami unikne více tepelného záření. Podle původní hypotézy má toto ochlazení výrazně převážit nad ztrátou odraženého světla.",
    test: "Kde se na družicových snímcích zmenšila oblačná plocha? Jak se změní výsledek, když do výpočtu zahrneme sluneční i tepelné záření podle měření?",
    observation: "Velkou část vztahu mezi teplotou a oblačnou plochou vysvětlily změny daleko od tropických bouří. Po přepočtu vyšel samotný účinek vysokých oblaků malý.",
    verdict: "Silná stabilizace nebyla doložena",
    explanation: "Úbytek kovadlin může oteplování tlumit. Jeho velikost závisí i na tom, kolik světla kovadliny před zmenšením odrážely.",
    state: "insufficient",
  },
  {
    id: "vyska",
    name: "Vzestup vrcholů vysokých oblaků",
    prediction: "Nad teplejším povrchem budou vrcholy tropických oblaků ležet výš a zůstanou přibližně stejně chladné. Do vesmíru pak vyzáří méně energie, než kdyby zůstaly v původní výšce.",
    test: "Porovnáme výpočty se vzestupem oblaků a bez něj. Na družicových měřeních pak ověříme, jak se s výškou oblaků mění jejich teplota.",
    observation: "V modelech vzestup oblaků zesiloval oteplování. Také družice našly v teplejších obdobích nad tropy vysoká oblaka výše a při podobné teplotě.",
    verdict: "Vzestup oblaků zesiluje oteplování",
    explanation: "Modelový pokus oddělil účinek výšky. Družice nezávisle ověřily předpovězenou souvislost výšky a teploty.",
    state: "supported",
  },
  {
    id: "nizka-oblacnost",
    name: "Změny nízké oblačnosti nad oceánem",
    prediction: "Když nízká oblaka řídnou nebo pokrývají menší část oceánu, odrážejí méně světla. Velikost změny závisí i na vrstvení vzduchu nad hladinou.",
    test: "Z družicových záznamů odvodíme, jak odraz světla souvisí s teplotou moře a s počasím. Podle těchto vztahů spočítáme změnu při mořské vlně veder v roce 2015.",
    observation: "Výpočet vystihl, kde v severovýchodním Pacifiku oblaka při vlně veder odrážela méně světla i jak velká tato změna byla. Dlouhodobé odhady ukazují zřetelné zesílení nad oblastmi se souvislou oblačností.",
    verdict: "Nízká mořská oblaka v součtu zesilují oteplování",
    explanation: "Souvislé oblačné vrstvy reagují na oteplování výrazněji než drobné kupovité oblaky v pásmu tropických větrů.",
    state: "supported",
  },
];

function Graphic({ name, alt, children }: { name: string; alt: string; children: React.ReactNode }) {
  return <figure className={"article-figure " + styles.explanatoryFigure}>
    <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Vysvětlující grafika, na úzké obrazovce posuvná do stran">
      <a href={media + "/" + name + ".png"} aria-label="Otevřít grafiku v plné velikosti"><Image className="article-figure__media" src={media + "/" + name + ".png"} width={1536} height={1024} alt={alt} unoptimized /></a>
    </div>
    <figcaption>{children} Vlastní ilustrace vytvořená pomocí AI, CC BY 4.0. Výšky a šipky jsou schematické, jejich velikost nevyjadřuje naměřený účinek. <SourceLink id="MEDIA_CLOUD_FEEDBACK_2026">Podklady a zadání grafik</SourceLink>.</figcaption>
  </figure>;
}

export function CloudFeedbackArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Kdy oblaka Zemi ochlazují?</h2>
    <p className="article-prose__intro">Oblaka vracejí část slunečního světla do vesmíru. Zároveň omezují únik tepelného záření, které Země vyzařuje do vesmíru. Tým družicového projektu CERES porovnal oba toky na horní hranici atmosféry s odhadem pro jasnou oblohu. Od července 2005 do června 2015 v celosvětovém průměru převládl odraz světla. Čistý radiační účinek oblaků tak činil −17,9 wattu na metr čtvereční. Obě složky ukazuje <Link href="/pozorovani/oblaka-a-radiacni-bilance/#vysledky">měření oblaků a radiační bilance</Link>. <SourceLink id="DOC_CERES_EBAF4_2018">(CERES 2018, tabulka 6-1)</SourceLink></p>
    <p>Když se oceán ohřeje a souvislá vrstva oblaků nad ním se protrhá, více světla dopadne na tmavou hladinu. Oceán pak pohltí více energie a původní oteplení zesílí. Takovému působení změněných oblaků na teplotu říkáme oblačná zpětná vazba. Oblaka mohou měnit plochu, výšku i množství světla, které odrazí. Tyto změny mohou probíhat současně. <SourceLink id="DOI_10_1002_wcc_465">(Ceppi a kol. 2017)</SourceLink></p>

    <h2 id="hypotezy">Tři změny oblaků a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="cloud-feedback-caption"
      context={<p>Zpětnou vazbu vyjadřujeme změnou toku energie na horní hranici atmosféry při oteplení zemského povrchu v průměru o 1 °C. Jednotkou je watt na metr čtvereční na stupeň oteplení (W/m² na 1 °C). Kladná hodnota znamená, že si Země vlivem změny oblaků ponechá více energie a oteplení se zesílí. Při záporné hodnotě změna oblaků oteplení tlumí. <SourceLink id="DOI_10_1002_wcc_465">(Ceppi a kol. 2017, box 1)</SourceLink></p>}
      caption={<>U vysokých tropických oblaků lze zvlášť zkoumat jejich plochu a výšku. Každá z těchto změn má jiný vliv na záření. U nízkých oblaků nad oceánem rozhoduje hlavně odraz slunečního světla.</>} />

    <h2 id="pribehy">Co ukázala měření a výpočty</h2>
    <HypothesisStory id="plocha-vysokych-oblaku" number={1} title="Zmenšování ledových kovadlin v tropech">
      <p>Vlhký vzduch v tropické bouři stoupá a ve velké výšce se rozlévá do stran. Z ledových krystalků přitom vzniká široký plochý vrchol oblaku, který tvarem připomíná kovadlinu. V roce 2001 Richard Lindzen, Ming-Dah Chou a Arthur Hou navrhli, že nad teplejším mořem by větší část vody mohla v bouři vypršet. Do kovadliny by se jí pak dostalo méně a kovadlina by se zmenšila. Většími mezerami mezi oblaky by do vesmíru unikalo víc tepelného záření. Připomínalo jim to oční duhovku, která mění velikost zornice. Odtud název hypotéza duhovky. <SourceLink id="DOI_IRIS_LINDZEN_2001">(Lindzen a kol. 2001)</SourceLink></p>
      <p>Ze snímků družice GMS-5 za leden 1998 až srpen 1999 odhadli plochu vysokých oblaků nad částí Tichého oceánu. Nejchladnější části na snímcích jim posloužily jako odhad plochy bouřkových jader, v nichž vzduch prudce stoupá. Plochu vysokých oblaků pak vydělili plochou jader. Ve dnech, kdy byla průměrná teplota hladiny pod oblaky o 1 °C vyšší, vycházel tento poměr přibližně o 22 % menší. Po dosazení do jednoduchého modelu přenosu záření vyšlo autorům silné tlumení globálního oteplování. <SourceLink id="DOI_IRIS_LINDZEN_2001">(Lindzen a kol. 2001, obrázek 5)</SourceLink></p>
      <p>Tento výsledek závisel na dvou předpokladech. Teplejší voda by musela skutečně zmenšovat kovadliny. A únik tepelného záření mezerami mezi nimi by musel převážit nad tím, že menší plocha oblaků také odrazí méně slunečního světla.</p>
      <Graphic name="iris" alt="Při zmenšení vysoké oblačné kovadliny může více tepelného záření uniknout, ale současně se méně slunečního světla odráží. Testy musí ověřit příčinu zmenšení plochy a součet obou radiačních účinků.">Zachováváme výšku a další vlastnosti, abychom ukázali samotný účinek plochy. <SourceLink id="DOI_IRIS_LINDZEN_2001">(Lindzen a kol. 2001)</SourceLink>{" "}<SourceLink id="DOI_10_5194_acp_2_31_2002">(Fu a kol. 2002)</SourceLink></Graphic>
      <h4 id="test-plochy" className={styles.testHeading}>Oteplilo se moře přímo pod bouřemi?</h4>
      <p>Dennis Hartmann a Marc Michelsen v roce 2002 zakreslili změny oblačnosti ze stejných snímků do mapy. Největší vliv na průměrnou teplotu pod oblaky měly změny v chladnějších subtropech, přes tisíc kilometrů od jader rovníkových bouří. Když nad chladnější vodou oblaků ubylo, v průměru získala větší váhu teplá voda u rovníku. Průměr tak mohl vzrůst i při stejné teplotě moře pod bouřemi. Původní zjištění proto nestačilo k závěru, že se kovadliny zmenšují následkem oteplení hladiny. <SourceLink id="DOI_NO_EVIDENCE_IRIS_2002">(Hartmann a Michelsen 2002, obrázky 2–4)</SourceLink></p>
      <h4 id="test-zareni" className={styles.testHeading}>Kolik energie by zmenšením kovadlin Země ztratila?</h4>
      <p>Qiang Fu, Marcia Bakerová a Dennis Hartmann téhož roku v modelu zachovali původně navržený úbytek oblačné plochy. Přepočítali však, kolik světla vysoká oblaka odrážejí a jak se na úniku tepelného záření podílí vodní pára. Ukázalo se, že menší odraz světla vyvažuje značnou část ochlazení a že k původnímu výsledku podstatně přispěly také předpoklady o nízkých oblacích. Samotná změna vysokých oblaků měla v novém výpočtu jen malý účinek. <SourceLink id="DOI_10_5194_acp_2_31_2002">(Fu a kol. 2002, tabulky 1 a 2)</SourceLink></p>
      <p>Obě zkoušky oslabily představu, že úbytek kovadlin může vyvážit velkou část oteplení. Mezivládní panel pro změnu klimatu (IPCC) v roce 2021 posoudil, jak působí samotná změna plochy vysokých tropických oblaků. Přiklání se k tlumícímu účinku, důvěru v tento dílčí závěr však hodnotí jako nízkou. <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC 2021, tabulka 7.9)</SourceLink></p>
    </HypothesisStory>

    <HypothesisStory id="vyska" number={2} title="Vzestup vrcholů vysokých oblaků">
      <p>Kolik energie vrchol oblaku vyzáří do vesmíru, závisí na jeho teplotě. Teplejší vrchol vyzařuje více. Co určuje výšku a teplotu, při nichž se kovadlina vytvoří? Dennis Hartmann a Kristin Larsonová v roce 2002 hledali odpověď v okolí bouře. Vzduch tam pomalu klesá a stlačováním se ohřívá. Toto teplo může odevzdávat zejména díky tomu, že vodní pára vyzařuje do okolí a do vesmíru. <SourceLink id="DOI_10_1029_2002GL015835">(Hartmann a Larsonová 2002, obrázek 1)</SourceLink></p>
      <p>Ve studeném vzduchu vysoko nad povrchem je i při nasycení málo vodní páry. V určité vrstvě proto ochlazování zářením rychle slábne. Slábne tam i sestup okolního vzduchu a právě v této výšce se vzduch z bouře rozlévá do stran. Při oteplení tropické troposféry, tedy vrstvy atmosféry, v níž se tvoří bouře, najdeme stejně studený vzduch ve větší výšce. Kovadlina by tedy měla stoupat a přitom si udržet přibližně stejnou teplotu. Odtud pochází název <em>hypotéza stálé teploty kovadlin</em>. <SourceLink id="DOI_10_1029_2002GL015835">(Hartmann a Larsonová 2002)</SourceLink></p>
      <p>Představme si dvě stejně rozsáhlé kovadliny nad otepleným povrchem. První zůstane v původní výšce, ohřeje se s okolním vzduchem a vyzáří víc energie. Druhá se vytvoří výš, kde je chladněji. Její vyzařování vzroste méně a Země si při stejném oteplení povrchu ponechá více energie.</p>
      <Graphic name="vyska" alt="Tři stavy se stejnou oblačnou plochou: původní stav, oteplení při stejné výšce a oteplení se vzestupem oblaku. Vystoupivší oblak zůstává chladnější než při stejné výšce, proto jeho vyzařování vzroste méně.">Černá svislá značka označuje posun výšky, nikoli tok energie. Stejnou plochou a hustotou oddělujeme výškový příspěvek. <SourceLink id="DOI_10_1029_2010JD013817">(Zelinka a Hartmann 2010)</SourceLink></Graphic>
      <h4 id="test-vysky-model" className={styles.testHeading}>Jak se projeví samotná změna výšky?</h4>
      <p>Mark Zelinka a Dennis Hartmann v práci z roku 2010 sledovali vysoká oblaka v 15 klimatických modelech. Ve 12 z nich měli i údaje potřebné k výpočtu toku záření. Ten spočítali dvakrát. Jednou nechali vrcholy oblaků stoupat jako v modelu, podruhé jim přisoudili teplotu, kterou by měly na původní tlakové hladině. Tlak vzduchu směrem vzhůru klesá, takže tento druhý výpočet sloužil jako srovnání bez vzestupu do vyšší vrstvy. Vzestup tropických oblaků tak v téměř každém modelu přidal ke globální bilanci přibližně +0,5 W/m² na 1 °C oteplení. <SourceLink id="DOI_10_1029_2010JD013817">(Zelinka a Hartmann 2010, oddíly 4–5)</SourceLink></p>
      <h4 id="test-vysky-druzice" className={styles.testHeading}>Co o výšce a teplotě vrcholů zjistily družice?</h4>
      <p>V roce 2011 oba autoři porovnali družicová pozorování z teplejších a chladnějších období v tropech. Využili mimo jiné měření přístrojů MODIS a AIRS od září 2002 do července 2010 a radaru CloudSat od června 2006 do července 2010. <Link href="/metody/aktivni-radarove-mereni/">Družicový radar</Link> určil výšku oblačných vrstev podle doby návratu vyslaného signálu. <Link href="/metody/pasivni-infracervena-radiometrie/">Infračervená měření</Link> pomohla zjistit teplotu v těchto výškách. <SourceLink id="DOI_10_1029_2011JD016459">(Zelinka a Hartmann 2011, oddíl 2)</SourceLink></p>
      <p>V teplejších obdobích vysoká tropická oblaka skutečně ležela výš a jejich teplota se měnila jen málo. Zároveň pokrývala menší plochu, takže mezerami unikalo více tepelného záření. Družice zachytily obě změny současně. Měření tak podpořila předpověď o výšce a teplotě vrcholů. K určení dlouhodobého příspěvku samotné výšky je dál potřeba oddělit vliv ostatních změn. <SourceLink id="DOI_10_1029_2011JD016459">(Zelinka a Hartmann 2011, obrázky 5–8 a tabulka 1)</SourceLink></p>
    </HypothesisStory>

    <HypothesisStory id="nizka-oblacnost" number={3} title="Změny nízké oblačnosti nad oceánem">
      <p>Nad oceánem se často rozprostírají nízká oblaka zvaná stratokumuly. Tvoří je zaoblené oblačné valy, které mohou pokrýt velkou část oblohy. Jejich horní okraj má teplotu blízkou teplotě hladiny pod nimi. Množství tepelného záření, které uniká do vesmíru, proto mění poměrně málo. Zato odrážejí mnohem víc slunečního světla než tmavá hladina. Když se oblačná vrstva ztenčí nebo se v ní otevřou mezery, oceán pohltí víc energie. <SourceLink id="DOI_10_1002_wcc_465">(Ceppi a kol. 2017)</SourceLink></p>
      <p>O tom, zda souvislá vrstva vydrží, rozhoduje také vzduch nad ní. Když se do oblaku shora přimísí sušší vzduch, část kapek se vypaří. Nad teplejší hladinou může toto vysušování zesílit. Pokud však těsně nad oblakem leží vrstva výrazně teplejšího vzduchu, vzduch zdola do ní proniká obtížněji. Promíchávání pak slábne a oblačná vrstva se snáze udrží. <SourceLink id="DOI_10_1038_s41558_021_01039_0">(Myers a kol. 2021)</SourceLink></p>
      <Graphic name="nizka" alt="Souvislá vrstva nízkých oblaků odráží více slunečního světla než vrstva tenčí nebo přerušovaná. Přimíchávání suchého vzduchu odpařuje kapky, stabilní teplotní vrstvení je může brzdit. Dva testy oddělují vlivy prostředí a ověřují vztah na roce 2015.">Žluté šipky značí sluneční záření, modré zakřivené proudnice promíchávání vzduchu. Bóje i barevná mapa dole jsou ilustrace, nikoli použité měření nebo datová mapa. <SourceLink id="DOI_10_1038_s41558_021_01039_0">(Myers a kol. 2021)</SourceLink></Graphic>
      <h4 id="test-nizke-vztahy" className={styles.testHeading}>Jak odlišit účinek teplé hladiny od vlivu vzduchu nad ní?</h4>
      <p>Timothy Myers a jeho kolegové v roce 2021 spojili družicové odhady záření s údaji o teplotě moře, větru, vlhkosti, sestupu vzduchu a teplotních rozdílech mezi vrstvami. Pro jednotlivé části oceánu spočítali, jak se odraz světla mění s teplotou hladiny při srovnatelných ostatních podmínkách. V oblastech se souvislými stratokumuly teplejší hladina obvykle znamenala slabší odraz. Teplotní vrstvení, které bránilo promíchávání, naopak pomáhalo silný odraz udržet. <SourceLink id="DOI_10_1038_s41558_021_01039_0">(Myers a kol. 2021, obrázek 2)</SourceLink></p>
      <h4 id="test-nizke-2015" className={styles.testHeading}>Obstál výpočet při mořské vlně veder?</h4>
      <p>V roce 2015 se mimořádně ohřála hladina v severovýchodním Tichém oceánu. Tým vzal vztahy odvozené ze snímků z let 1983 až 2002 a dosadil do nich podmínky naměřené během vlny veder. Vyšla mu mapa oblastí, kde nízká oblaka při vlně veder ochlazovala oceán méně než obvykle. Poloha i velikost změny odpovídaly tomu, co naměřil družicový přístroj MODIS. MODIS poskytl nezávislou kontrolu, protože ke starším snímkům, z nichž tým vztahy odvodil, tento přístroj nepřispěl. <SourceLink id="DOI_10_1038_s41558_021_01039_0">(Myers a kol. 2021, obrázek 1)</SourceLink></p>
      <p>Jak by se nízká oblačnost projevila při dlouhodobém oteplování? Tým spojil pozorované vztahy s tím, jak se podle klimatických modelů změní podmínky nad oceány mezi 60° jižní a 60° severní šířky. Po přepočtu na celou Zemi vyšel příspěvek nízkých mořských oblaků +0,19 W/m² na 1 °C oteplení. Devadesátiprocentní interval sahal od +0,07 do +0,31. Výrazně k tomu přispěly souvislé vrstvy stratokumulů. U drobných kupovitých oblaků nad oceánem v pásmu pasátů, pravidelných tropických větrů, se účinek téměř nezměnil. <SourceLink id="DOI_10_1038_s41558_021_01039_0">(Myers a kol. 2021, obrázek 3)</SourceLink></p>
      <p>Paulo Ceppi a jeho kolegové v roce 2024 porovnali pět družicových souborů s modely. Zjistili, že modely s příliš malou plochou nízkých oblaků v tropech podhodnocují i to, kolik odraženého světla při oteplení ubude. Tým odhadl příspěvek nízkých oblaků nad mořem i pevninou na +0,45 W/m² na 1 °C s 90% rozmezím od +0,18 do +0,72. Obě práce tak ukazují stejný směr změny, i když pokrývají různé oblasti a liší se v odhadu velikosti. <SourceLink id="DOI_10_1029_2024GL110525">(Ceppi a kol. 2024, obrázky 2–4)</SourceLink></p>
    </HypothesisStory>

    <h2 id="mechanismus">Které změny oblaků při oteplování převažují?</h2>
    <p>Družice zachytily vzestup vysokých tropických oblaků při téměř stejné teplotě a modelový pokus ukázal, že tím Země ztrácí méně tepla. Pro silné ochlazení úbytkem kovadlin je opora slabší. Původní měření připouštělo i jiné vysvětlení a menší kovadliny také odrážejí méně světla. U nízkých oblaků předpověď slabšího odrazu obstála i při vlně veder v Pacifiku. Pro teplotu celé Země rozhoduje, kolik energie po započtení všech změn získá nebo ztratí.</p>
    <h3 id="zmena-bilance">Proč změna záření ovlivní teplotu povrchu?</h3>
    <p>Když se Země ohřeje, vyzařuje do vesmíru více tepelné energie. Tím se postupně vyrovnává původní převaha příjmu nad výdejem. Pokud vysoká oblaka při oteplování vystoupí, výdej tepla vzroste méně. Pokud nízká oblaka odrazí méně světla, vzroste příjem energie ze Slunce. V obou případech se povrch musí ohřát víc, aby Země opět vydávala tolik energie, kolik přijímá. Tento vztah podrobněji vysvětluje <Link href="/mechanismy/energeticka-bilance-zeme/">energetická bilance Země</Link>. <SourceLink id="DOI_10_1029_2010JD013817">(Zelinka a Hartmann 2010)</SourceLink>{" "}<SourceLink id="DOI_10_1073_pnas_2026290118">(Ceppi a Nowack 2021)</SourceLink></p>
    <p>Některé změny oteplování tlumí. Ve studených oblacích může při oteplování vzrůst podíl kapalných kapek na úkor ledových krystalků. Za vhodných podmínek pak oblaka odrazí víc světla a Země méně energie pohltí. Pro celkový odhad proto potřebujeme znát obě složky záření i plochu, na které jednotlivé změny působí. <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC 2021, oddíl 7.4.2.4)</SourceLink></p>
    <h3 id="celkovy-odhad">Jak velká je zpětná vazba všech oblaků dohromady?</h3>
    <p>Ceppi a Peer Nowack z měsíčních družicových údajů od března 2000 do září 2019 odvodili, jak oblačnost reaguje na změnu teploty a vrstvení vzduchu. Tyto vztahy spojili s dlouhodobými změnami podmínek v klimatických modelech. Pro všechny oblaky jim vyšla kladná zpětná vazba +0,43 W/m² na 1 °C s 90% intervalem od +0,08 do +0,78. IPCC v roce 2021 posoudil jednotlivé oblačné procesy zvlášť a jejich příspěvky sečetl. Střední odhad +0,42 W/m² na 1 °C je velmi podobný. Devadesátiprocentní rozmezí od −0,10 do +0,94 je širší a na dolním okraji připouští i slabé tlumení. <SourceLink id="DOI_10_1073_pnas_2026290118">(Ceppi a Nowack 2021, obrázek 2)</SourceLink>{" "}<SourceLink id="DOI_10_1017_9781009157896_009">(IPCC 2021, tabulka 7.10)</SourceLink></p>
    <p>Oba odhady využívají zčásti stejná družicová měření a modely. Další oporu poskytují měření samotných vlastností oblaků, například družicové pozorování předpovězeného vzestupu vrcholů při téměř stejné teplotě. Záleží přitom na tom, která část oceánu se ohřeje. Stejné zvýšení průměrné teploty má pro odraz světla jiný význam nad souvislou oblačností než nad rozptýlenými oblaky. <SourceLink id="DOI_10_1073_pnas_2026290118">(Ceppi a Nowack 2021)</SourceLink>{" "}<SourceLink id="DOI_10_1029_2024GL110525">(Ceppi a kol. 2024)</SourceLink></p>
    <h3 id="nejistoty">Kde je odhad nejméně jistý?</h3>
    <p>U vysokých tropických oblaků se zatím obtížně určuje, jak se spolu s jejich plochou změní i množství ledu a odraz světla. U nízkých oblaků závisí velikost odezvy na tom, jak se oteplí různé oblasti oceánu a jak se nad nimi změní proudění. Tyto nejistoty rozšiřují rozpětí odhadu. Závěru, že v součtu převažuje zesílení, přikládá IPCC vysokou důvěru. <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC 2021, oddíl 7.4.2.4)</SourceLink></p>
    <details className="method-details"><summary>Jak se nejistota měří a co by změnilo závěr</summary>
      <p>Družice zaznamenávají, kolik záření do vesmíru uniká při různé oblačnosti. Nad jasnou a zataženou oblastí se ale může lišit i teplota povrchu a množství vodní páry. Při odhadu zpětné vazby proto vědci dopočítávají, jak by se záření změnilo působením těchto dalších vlivů. Výsledek ovlivňuje také to, jak dobře přístroje rozpoznají tenká oblaka a zda měří po celou dobu stejně. <SourceLink id="DOC_CERES_EBAF4_2018">(CERES 2018)</SourceLink>{" "}<SourceLink id="DOI_10_1029_2011JD016459">(Zelinka a Hartmann 2011)</SourceLink></p>
      <p>Rozdíl mezi oběma odhady nízké oblačnosti přetrval i nad oceány. Ceppiho tým v roce 2024 pro samotné oceány odhadl +0,42 W/m² na 1 °C s 90% intervalem od +0,14 do +0,72. Když vědci při výpočtu využili také počasí v sousedních oblastech, vyšel jim větší účinek a zároveň se zlepšila shoda předpovědi s měřením mimo původní soubor. <SourceLink id="DOI_10_1029_2024GL110525">(Ceppi a kol. 2024, oddíl 3)</SourceLink></p>
      <p>Víry, které přimíchávají suchý vzduch do nízkého oblaku, jsou většinou menší než jednotlivá buňka globálního klimatického modelu. Jejich souhrnný účinek proto model odhaduje z podmínek uvnitř buňky. Pokud už ve výchozím stavu podhodnotí množství oblaků, může pak podhodnotit i jejich odezvu na oteplení. <SourceLink id="DOI_10_1029_2024GL110525">(Ceppi a kol. 2024)</SourceLink></p>
      <p>Celkový závěr by oslabil například dlouhodobý, souvislý záznam, v němž by nízká oblaka při oteplování odrážela o tolik víc světla, že by vyrovnala zesílení od vysokých oblaků. Taková zkouška vyžaduje sledovat plochu, výšku i odrazivost oblaků společně a odlišit účinek teploty od změn proudění a množství částic ve vzduchu. Těm se věnuje článek o <Link href="/mechanismy/prumyslove-aerosoly-a-oblaka/">částicích z lidské činnosti a oblacích</Link>.</p>
    </details>

    <h2 id="shrnuti">Shrnutí</h2>
    <div className="method-conclusion">
      <p>Oblaka dnes v celosvětovém průměru Zemi ochlazují, protože odrážejí sluneční světlo. Změny oblaků při oteplování však podle dosavadních měření a výpočtů původní oteplení v součtu zesilují. Když nízká oblaka nad oceánem odrážejí méně světla, voda pohltí více energie. Když vrcholy vysokých oblaků vystoupí a zůstanou chladné, do vesmíru unikne méně tepla, než kdyby zůstaly v původní výšce.</p>
      <p>Některé změny, například silnější odraz světla od chladných oblaků s větším podílem kapalných kapek, působí opačně. IPCC odhaduje celkovou zpětnou vazbu na +0,42 W/m² na 1 °C globálního oteplení. Velikost účinku závisí mimo jiné na tom, jak se změní nízká oblačnost nad jednotlivými částmi oceánů.</p>
    </div>
    <h2 id="prameny">Prameny, data a grafiky</h2>
    <ul>
      <li>Původní návrh a jeho prověření: <SourceLink id="DOI_IRIS_LINDZEN_2001">Lindzen a kol. 2001</SourceLink>, <SourceLink id="DOI_NO_EVIDENCE_IRIS_2002">Hartmann a Michelsen 2002</SourceLink>, <SourceLink id="DOI_10_5194_acp_2_31_2002">Fu a kol. 2002</SourceLink>.</li>
      <li>Výška oblaků: <SourceLink id="DOI_10_1029_2002GL015835">Hartmann a Larsonová 2002</SourceLink>, <SourceLink id="DOI_10_1029_2010JD013817">Zelinka a Hartmann 2010</SourceLink>, <SourceLink id="DOI_10_1029_2011JD016459">Zelinka a Hartmann 2011</SourceLink>.</li>
      <li>Nízké oblaky a celková vazba: <SourceLink id="DOI_10_1038_s41558_021_01039_0">Myers a kol. 2021</SourceLink>, <SourceLink id="DOI_10_1029_2024GL110525">Ceppi a kol. 2024</SourceLink>, <SourceLink id="DOI_10_1073_pnas_2026290118">Ceppi a Nowack 2021</SourceLink>.</li>
      <li>Syntézy: <SourceLink id="DOI_10_1002_wcc_465">Ceppi a kol. 2017</SourceLink> a <SourceLink id="DOI_10_1017_9781009157896_009">IPCC, kapitola 7</SourceLink>.</li>
      <li>Výchozí radiační účinek: <SourceLink id="DOC_CERES_EBAF4_2018">dokumentace CERES EBAF 4.0</SourceLink>.</li>
      <li>Veřejné podklady: <SourceLink id="DATA_CERES_EBAF">CERES</SourceLink>, <SourceLink id="DATA_MYERS_CLOUD_KERNELS">vztahy oblačného záření k meteorologickým podmínkám</SourceLink> a <SourceLink id="CODE_CEPPI_NOWACK_2021">kód celkového odhadu</SourceLink>. Přístup k velkým družicovým souborům může vyžadovat bezplatný účet NASA Earthdata. Veřejné vztahy nejsou úplným archivem každého mezivýsledku studie.</li>
      <li><SourceLink id="MEDIA_CLOUD_FEEDBACK_2026">Původ ilustrací</SourceLink> a <Link href={media + "/prompts.json"}>úplná zadání pro vestavěný generátor obrázků</Link>.</li>
    </ul>
  </div></article>;
}

