import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./HeatWaveMechanismsArticle.module.css";

const media = "/media/mechanismy-vln-veder";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "samotne-proudeni",
    name: "K zesílení veder stačí změny proudění",
    prediction: "Pokud se mění jen to, odkud a jak dlouho proudí vzduch, měly by změny proudění vysvětlit celý růst nejvyšších teplot. Při stejném proudění by vedra dlouhodobě nesílila.",
    test: "Porovnáme skutečný červenec 2010 v západním Rusku s modelovanými průběhy počasí. Pro západní Evropu spočítáme, kolik z růstu letních maxim připadá na změny proudění.",
    observation: "Nad Ruskem dlouho setrvávala tlaková výše. Do západní Evropy častěji proudil vzduch od jihu, což vysvětluje část růstu nejvyšších letních teplot.",
    verdict: "Proudění vysvětluje část změny",
    explanation: "Proudění dokázalo udržet mimořádné vedro nad jednou oblastí. Změny proudění v západní Evropě v letech 1950–2022 byly na celý pozorovaný růst maxim příliš malé.",
    state: "insufficient",
  },
  {
    id: "teplejsi-klima",
    name: "V teplejším klimatu přináší podobné počasí silnější vedro",
    prediction: "Za podobného proudění může teplota vystoupit výš a častěji překročit stejnou hranici. Pokud navíc vyschne půda, slabší výpar dovolí vzduchu nad ní více se ohřát.",
    test: "V simulacích evropského léta 2003 změníme vlhkost půdy. Pro západní Rusko porovnáme četnost stejně horkého července ve dvou obdobích. Předpověď severoamerického vedra z roku 2021 zopakujeme v chladnějším klimatu.",
    observation: "Nad vlhčí půdou vyšlo evropské léto chladnější. V novějším období model častěji dosáhl podmínek ruského července 2010. V chladnějším klimatu měl severoamerický extrém nižší vrchol.",
    verdict: "Pokusy podporují vliv oteplování i půdní vody",
    explanation: "Zvýšení výchozí teploty mění sílu i pravděpodobnost vedra. Nad pevninou může vedro dále zesílit vysychání půdy, jak ukázal pokus s evropským létem 2003.",
    state: "supported",
  },
];

type TestPanel = { title: string; prediction: string; test: string; result: string };

function Graphic({ name, alt, tests, children }: { name: string; alt: string; tests: TestPanel[]; children: ReactNode }) {
  return <figure className={`article-figure ${styles.explanatoryFigure}`}>
    <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Schéma, na úzké obrazovce posuvné do stran">
      <a href={`${media}/${name}.svg`} aria-label="Otevřít schéma v plné velikosti">
        <Image className="article-figure__media" src={`${media}/${name}.svg`} width={1100} height={660} alt={alt} unoptimized />
      </a>
    </div>
    <div className={styles.testPanels}>
      {tests.map((test) => <section className={styles.testPanel} key={test.title}>
        <h4>{test.title}</h4>
        <dl><dt>Předpověď</dt><dd>{test.prediction}</dd><dt>Zkouška</dt><dd>{test.test}</dd><dt>Výsledek</dt><dd>{test.result}</dd></dl>
      </section>)}
    </div>
    <figcaption>{children} Vlastní kvalitativní schéma Klimatologie.eu připravené s pomocí AI, CC BY 4.0. Šipky označují děje, jejich šířka neměří tok energie. <a href={`${media}/podklady.txt`}>Prameny, podmínky a původ grafiky</a>.</figcaption>
  </figure>;
}

export function HeatWaveMechanismsArticle() {
  const temperatures = [27, 29, 30, 32, 33, 31, 29, 28, 26];
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Jak se změnily vlny veder od poloviny 20. století</h2>
    <p className="article-prose__intro">
      V letech 1950–2017 přibylo ve většině sledovaných oblastí pevniny dnů ve vlnách veder. Vědci prošli <Link href="/pozorovani/vlny-veder/#pozorovani">denní teplotní záznamy</Link>
      a hledali alespoň tři dny za sebou, kdy denní maximum překročilo místní hranici pro danou část léta. V letech 1961–1990 se nad touto hranicí pohybovala přibližně desetina denních maxim.
      Téměř všude vzrostl i součet stupňů, o které teplota ve dnech veder tuto hranici překročila. Nejvíc k tomu přispěl větší počet horkých dnů. <SourceLink id="DOI_10_1038_s41467_020_16970_7">(Perkins-Kirkpatrick a Lewis 2020)</SourceLink>
    </p>
    <p>
      Horkých dnů může přibýt dvěma způsoby. Když se ke dvěma dnům nad hranicí přidá třetí v řadě, započítá se nová vlna. Jindy se o pár dnů protáhne vlna, která by nastala i dřív.
      Proč dnes podobná povětrnostní situace snáze překročí dřívější teplotní hranici a proč může teplota vystoupit výš?
    </p>

    <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="heat-hypotheses-caption"
      context={<p>Proudění určuje, odkud vzduch přichází a jak dlouho se nad oblastí udrží podobné počasí. Na dvou letních mapách mohou mít vítr i tlakové výše podobné rozložení. Vzduch, který přichází ze stejného směru, přesto může být v jednom období teplejší.</p>}
      caption={<>Obě vysvětlení počítají s vlivem proudění. Rozlišit je pomůže teplota při srovnatelném proudění v různě teplém klimatu.</>} />

    <h2 id="pribehy">Co ukázalo srovnání evropských a severoamerických veder</h2>
    <HypothesisStory id="samotne-proudeni" number={1} title="K zesílení veder stačí změny proudění">
      <p>
        Proč někdy nad rozsáhlým územím vydrží stejné počasí mnoho dní? Daniel Rex v roce 1950 prozkoumal pět takových případů.
        Na mapách našel místa, kde se obvyklé západní proudění rozdělilo do dvou větví a tlakové útvary mezi nimi se téměř nepohybovaly.
        Aby situaci označil za atmosférické blokování, muselo toto uspořádání trvat alespoň deset dnů. <SourceLink id="DOI_10_3402_tellusa_v2i3_8546">(Rex 1950)</SourceLink>
      </p>
      <p>
        Když v létě nad krajinou setrvává tlaková výše, vzduch v ní klesá. Blíž k povrchu roste tlak, takže se sestupující vzduch stlačuje a ohřívá.
        Za těchto podmínek se tvoří méně oblaků a slunce déle ohřívá zem. Také vítr může několik dní přinášet teplý vzduch ze stejného směru. <SourceLink id="DOI_10_1029_2010GL046582">(Dole a kol. 2011)</SourceLink>
      </p>
      <p>
        Kdyby častější nebo vytrvalejší přísun horkého vzduchu stačil k vysvětlení celého dlouhodobého růstu teplotních maxim, měl by jít tento růst vypočítat už ze změn proudění.
        Nejdřív ale potřebujeme vědět, jak velkou odchylku vůbec dokáže vyvolat počasí během jediného léta.
      </p>
      <Graphic name="proudeni" alt="Letní tlaková výše odklání postup počasí. Sestupující vzduch se stlačuje a otepluje, sluneční záření ohřívá pevninu a vítr přináší teplý vzduch. Předpověď hypotézy samotného proudění vyžaduje stálé teplotní podmínky."
        tests={[
          { title: "Test 1 · Ruské vedro 2010", prediction: "Silné blokování může vyvolat velkou odchylku.", test: "Porovnání teplot, tlakových map a simulací s dřívějšími podmínkami.", result: "Velká role počasí v síle jedné události." },
          { title: "Test 2 · Západní Evropa 1950–2022", prediction: "Změny proudění mají vysvětlit celý růst extrému.", test: "Dny nahradíme dny s podobným prouděním při sjednocené úrovni oteplení.", result: "Změny proudění vysvětlují jen část." },
        ]}>
        Fyzikální děje podle <SourceLink id="DOI_10_1029_2010GL046582">Doleho a kol. (2011)</SourceLink>, rozlišení dlouhodobého příspěvku podle <SourceLink id="DOI_10_1038_s41467_023_42143_3">Vautarda a kol. (2023)</SourceLink>.
      </Graphic>

      <h4 id="rusko-2010" className={styles.testHeading}>Test 1 · Ruské vedro 2010</h4>
      <p>
        V <Link href="/pozorovani/vlny-veder/#rusko-2010">červenci 2010 nad západním Ruskem</Link> ukázaly tlakové mapy vytrvalé blokování. Doleho tým zkoumal, zda tak horký měsíc šlo čekat už podle stavu oceánu a složení atmosféry.
        Ve dvou modelech zadal pozorované teploty oceánu, rozsah mořského ledu a množství oxidu uhličitého (CO₂) pro rok 2010. Pak pokusy zopakoval s průměrnými podmínkami let 1971–2000.
        Pro každou variantu nechal každý model vytvořit padesát možných průběhů počasí.
      </p>
      <p>
        Ani se skutečnými podmínkami roku 2010 modely předem neukazovaly tak silné vedro jako pravděpodobný výsledek. Mimořádnou teplotu července vysvětloval především průběh počasí, zejména dlouhé trvání tlakové výše. <SourceLink id="DOI_10_1029_2010GL046582">(Dole a kol. 2011, oddíly 2–4)</SourceLink>
        Jak se v průběhu desetiletí měnila šance, že tak horký červenec vůbec nastane, zkoumá <a href="#pravdepodobnost">jiné porovnání téže události</a>.
      </p>

      <h4 id="evropske-proudeni" className={styles.testHeading}>Test 2 · Západní Evropa 1950–2022</h4>
      <p>
        K oddělení vlivu proudění od dlouhodobého oteplování využil Vautardův tým léta 1950–2022. Ke každému letnímu dni hledal v jiných letech dny s podobným prouděním několik kilometrů nad západní Evropou.
        Jejich teploty přepočítal na stejnou úroveň globálního oteplení. Z takto sestavené řady mohl odhadnout, o kolik by se zvýšila letní maxima už tím, že některé směry proudění byly v pozdějších letech častější. <SourceLink id="DOI_10_1038_s41467_023_42143_3">(Vautard a kol. 2023)</SourceLink>
      </p>
      <p>
        V každém místě na pevnině vědci vybrali nejvyšší denní teplotu daného léta a tato maxima pak zprůměrovali za celou oblast. Nejteplejší den ve Francii tak mohl připadnout na jiné datum než v Německu.
        Na jeden stupeň růstu globální teploty připadal růst těchto místních maxim o <strong>3,4 °C</strong> (95% interval 2,4 až 4,3 °C).
        Změny proudění, zejména častější přísun vzduchu od jihu, vysvětlily podle odhadu <strong>0,8 °C</strong> na stejný stupeň globálního oteplení (95% interval 0,2 až 1,4 °C). <SourceLink id="DOI_10_1038_s41467_023_42143_3">(Vautard a kol. 2023, výsledky a metody)</SourceLink>
      </p>
      <p>
        Tento výpočet využil rekonstrukci počasí ERA5, která spojuje měření s modelem atmosféry. Podobný výsledek vyšel i z teplot stanic zpracovaných do souboru E-OBS a při použití druhé statistické metody.
        <Link href="/pozorovani/vlny-veder/#evropska-vedra">Obě teplotní řady</Link> tak podporují závěr, že změny proudění vysvětlují jen část růstu letních maxim. Kolik ze zbývajícího růstu připadá na jednotlivé další vlivy, toto srovnání samo nerozliší.
      </p>
    </HypothesisStory>

    <HypothesisStory id="teplejsi-klima" number={2} title="V teplejším klimatu přináší podobné počasí silnější vedro">
      <p>
        Už v roce 1896 počítal Svante Arrhenius, jak se změní průměrná teplota u povrchu, když se v ovzduší změní množství CO₂.
        Jeho výpočet spojil složení atmosféry s podnebím, ve kterém se jednotlivé povětrnostní situace odehrávají. <SourceLink id="1896_Arrhenius">(Arrhenius 1896)</SourceLink>
      </p>
      <p>
        Při nezměněné teplotě uniká po přidání CO₂ do vesmíru méně tepelného záření. Země tak nějakou dobu přijímá víc energie, než vydává. Povrch a dolní vrstvy atmosféry se oteplují a výdej energie postupně roste.
        Podrobněji tento vztah vysvětluje článek o <Link href="/mechanismy/radiacni-pusobeni-sklenikovych-plynu/#mechanismus">účinku dalšího CO₂ na tepelné záření</Link>. <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, kapitola 7)</SourceLink>
      </p>
      <p>
        V teplejším klimatu může za letní tlakové výše stačit menší dodatečný ohřev, aby teplota překročila stejnou hranici jako dřív. Na pevnině záleží také na tom, kam se poděje energie, kterou povrch přijme.
        Část se spotřebuje na vypařování vody z půdy a rostlin. Při nedostatku vody výpar slábne a více energie může připadnout na ohřev povrchu a vzduchu nad ním. Toto rozdělení popisuje <SourceLink id="DOI_10_1017_9781009157896_009">IPCC AR6, oddíl 7.2</SourceLink>.
      </p>
      <Graphic name="oteplovani-a-puda" alt="Dvě pevninské krajiny pod podobným prouděním. Ve vlhčí půdě se část energie spotřebuje na výpar. V teplejší a vyschlé krajině je výpar omezen a vzduch se může více ohřívat. Rozdíl je kvalitativní, nejde o naměřené energetické toky."
        tests={[
          { title: "Test 1 · Voda v půdě", prediction: "Vlhčí půda zeslabí vedro za podobného proudění.", test: "V regionálním modelu roku 2003 změníme počáteční zásobu vody.", result: "Menší teplotní odchylka ve vlhčí variantě." },
          { title: "Test 2 · Pravděpodobnost", prediction: "Teplotní posun zvýší četnost překročení stejné hranice.", test: "Porovnáme soubory simulací Ruska pro dvě období.", result: "Menší posun teploty a větší změna četnosti mohou platit současně." },
          { title: "Test 3 · Předpovězené vedro", prediction: "V chladnějších podmínkách bude událost slabší.", test: "Zopakujeme ověřenou předpověď roku 2021 po odebrání odhadu lidského oteplení.", result: "Předpovědní model dává nižší vrchol." },
        ]}>
        Podkladem jsou experimenty <SourceLink id="DOI_10_1175_JCLI4288_1">Fischera a kol. (2007)</SourceLink>, <SourceLink id="DOI_10_1029_2011GL050422">Ottové a kol. (2012)</SourceLink> a <SourceLink id="DOI_10_1038_s41467_024_48280_7">Leache a kol. (2024)</SourceLink>.
      </Graphic>

      <h4 id="pokus-s-pudou" className={styles.testHeading}>Test 1 · Voda v půdě</h4>
      <p>
        Sucho a horko často přicházejí společně. Jak zjistit, zda vyschlá půda vedro také zesiluje?
        Fischerův tým v modelu několikrát zopakoval evropské léto 2003. Na okrajích sledované oblasti pokaždé zadal stejný průběh počasí, na jaře však půdu v jednotlivých pokusech různě nasytil vodou.
        Pokud výpar krajinu ochlazuje, mělo by při stejném přísunu vzduchu nad vlhčí půdou vyjít chladnější léto. <SourceLink id="DOI_10_1175_JCLI4288_1">(Fischer a kol. 2007)</SourceLink>
      </p>
      <p>
        Bez mimořádného vyschnutí půdy vyšla v některých částech Evropy teplotní odchylka asi <strong>o 40 % menší</strong>. Autoři počítali, o kolik průměrná teplota od června do srpna 2003 převýšila letní průměr modelu za roky 1970–2000.
        Těch 40 % se tedy vztahuje k velikosti odchylky za jedno léto v částech Evropy zasažených suchem. <SourceLink id="DOI_10_1175_JCLI4288_1">(Fischer a kol. 2007, oddíly 4–6)</SourceLink>
      </p>

      <h4 id="pravdepodobnost" className={styles.testHeading}>Test 2 · Pravděpodobnost</h4>
      <p>
        Jak se v západním Rusku změnila šance na tak horký měsíc, jaký oblast zažila v červenci 2010?
        Friederike Otto a její kolegové porovnali pro stejnou oblast mnoho simulovaných červenců ze dvou období.
        Aby model lépe zachytil podmínky dlouhého blokování, zkombinovali červencovou teplotu s údajem o proudění ve výšce a opravili soustavné odchylky modelu vůči pozorování. <SourceLink id="DOI_10_1029_2011GL050422">(Otto a kol. 2012)</SourceLink>
      </p>
      <p>
        Na úroveň července 2010 dosáhl tento ukazatel za podmínek šedesátých let v průměru asi jednou za 99 let. Za podmínek prvního desetiletí 21. století už asi jednou za 33 let.
        Odhadovaná šance v daném roce tedy vzrostla zhruba <strong>na trojnásobek</strong>. Autoři pak porovnali stejně vzácné července, které se v každém období vyskytovaly v průměru jednou za 33 let.
        Rozdíl odpovídal přibližně <strong>1 °C</strong>. Oba odhady závisejí na použité opravě modelu. <SourceLink id="DOI_10_1029_2011GL050422">(Otto a kol. 2012, obrázek 4)</SourceLink>
      </p>
      <p>
        Tím se vysvětluje zdánlivý rozpor ve výsledcích obou týmů. Dlouhé blokování vysvětlovalo velkou část teplotní odchylky v červenci 2010.
        I poměrně malé oteplení přitom stačilo, aby podobně horké měsíce v simulacích přibývaly.
      </p>

      <h4 id="predpoved-2021" className={styles.testHeading}>Test 3 · Předpovězené vedro</h4>
      <p>
        V červnu 2021 předpověděl model Evropského centra pro střednědobé předpovědi počasí silné vedro na západě Kanady a severozápadě USA.
        Leachův tým pak předpověď zopakoval. Snížil koncentraci CO₂ a upravil teplotu hladiny oceánu i rozsah mořského ledu podle odhadu předindustriálních podmínek. Atmosféru nechal těmto změnám přizpůsobit.
        Pokud oteplování přispělo k síle vedra, měl být jeho vrchol v upravené předpovědi nižší. <SourceLink id="DOI_10_1038_s41467_024_48280_7">(Leach a kol. 2024)</SourceLink>
      </p>
      <p>
        Autoři pro každý den zprůměrovali nejvyšší teploty za celou sledovanou oblast. Porovnávali <Link href="/pozorovani/vlny-veder/#severni-amerika-2021">vrchol takto získané řady</Link>.
        Z pokusů zahájených s různým předstihem odhadli, že lidské oteplování zvýšilo vrchol události o <strong>1,3 °C</strong>. Prostřední dvě třetiny rozdělení tohoto odhadu leží mezi 0,7 a 1,6 °C (17. až 83. percentil). <SourceLink id="DOI_10_1038_s41467_024_48280_7">(Leach a kol. 2024)</SourceLink>
      </p>
      <p>
        Původní předpověď lze porovnat s naměřenými teplotami. Její shoda s průběhem veder ukazuje, že model dokázal tuto konkrétní událost zachytit.
        O kolik by za předindustriálních podmínek zeslábla, už můžeme posoudit jen pomocí výpočtu.
      </p>
    </HypothesisStory>

    <h2 id="mechanismus">Jak se za stejné situace může vedro protáhnout a zesílit</h2>
    <p>
      Stálá tlaková výše pomohla udržet vedro nad západním Ruskem. Za dlouhodobým růstem maxim v západní Evropě však změny proudění stály jen zčásti.
      Pokusy s evropským suchem a se severoamerickou předpovědí ukazují dvě další příčiny. Při podobném proudění může teplota vystoupit výš, když je teplejší už přicházející vzduch nebo když nad vyschlou půdou zeslábne ochlazování výparem.
      Stačí posunout teplotu o několik stupňů a změní se i to, kolik dnů v řadě překročí stejnou hranici.
    </p>
    <h3 id="teplotni-posun">Jak se ze tří horkých dnů stane šest</h3>
    <p>
      Na začátku i na konci horkého období bývají dny, kdy se teplota k hranici veder jen přiblíží. Právě ty mohou v teplejším klimatu rozhodnout o délce celé vlny.
      Aby šlo srovnávat různá desetiletí, používají vědci pro dané místo a část roku <Link href="/pozorovani/vlny-veder/#hranice-a-trvani">hranici odvozenou ze stejného historického období</Link>.
    </p>
    <p>
      Vezměme devět vymyšlených denních maxim. Pro snazší počítání zvolme jako vlnu veder alespoň tři dny po sobě s maximem <strong>striktně nad 30 °C</strong>.
      Ve druhém řádku tabulky přidáme každému dni 2 °C. Pořadí dnů i rozdíly mezi nimi zůstanou stejné.
    </p>
    <div className={styles.exampleTable} tabIndex={0} role="region" aria-label="Ilustrační denní maxima, tabulka posuvná do stran">
      <table>
        <caption>Vymyšlená denní maxima v °C. Zvýrazněny jsou hodnoty nad 30 °C.</caption>
        <thead><tr><th scope="col">Den</th>{temperatures.map((_, index) => <th scope="col" key={index}>{index + 1}</th>)}</tr></thead>
        <tbody>{[0, 2].map((shift) => <tr key={shift}><th scope="row">{shift === 0 ? "Výchozí řada" : "Posun o +2 °C"}</th>{temperatures.map((temperature, index) => <td key={index} className={temperature + shift > 30 ? styles.hot : undefined}>{temperature + shift}</td>)}</tr>)}</tbody>
      </table>
    </div>
    <p>
      V první řadě překročí hranici jen čtvrtý až šestý den. Po oteplení ji překročí už druhý až sedmý den. <strong>V obou řadách je jedna vlna.</strong> Její délka vzrostla ze tří dnů na šest a vrchol z 33 na 35 °C.
      Všechny hodnoty obsahuje <a href={`${media}/ilustracni-rada.csv`}>tabulka ke stažení</a>.
    </p>
    <p>
      Sílu téže vlny můžeme vyjádřit i součtem denních překročení. Den s maximem 32 °C přispěje dvěma stupni nad hranicí. V první řadě se tak sečtou 2 + 3 + 1, tedy šest stupňodnů. Ve druhé jich napočítáme šestnáct.
      Skutečná změna závisí na tom, kolik dnů se teplotou blížilo k hranici a jak šly za sebou. Den, který se oteplí z 28 na přesně 30 °C, do vlny podle zvoleného pravidla přesto nevstoupí.
    </p>

    <h3 id="energie-a-voda">Proč sucho zesiluje horko a teplo může přetrvat přes noc</h3>
    <p>
      Za slunného dne se z vlhké půdy a z listů vypařuje voda. Přeměna kapalné vody na páru spotřebuje energii a povrch se tolik neohřeje.
      Teplé, suché počasí výpar zprvu urychluje. Jakmile zásoba vody v půdě klesne natolik, že se výpar omezí, toto ochlazování slábne. Horko tak přispívá k vysychání a vysychání může další horko zesílit. <SourceLink id="DOI_10_1017_9781009157896_013">(IPCC AR6, box 11.1)</SourceLink>
    </p>
    <p>
      Za podobného slunečního svitu se proto mohou dvě pole ohřát rozdílně. Z povrchu energie odchází vyzařováním, část se předává půdě a vzduchu a část spotřebuje výpar.
      Nad vyschlým polem může na ohřev vzduchu připadnout větší díl. Právě tento rozdíl pomohl vysvětlit výsledek pokusu s vlhkostí půdy v létě 2003. <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíl 7.2)</SourceLink>
    </p>
    <p>
      Co se s teplem stane po západu slunce? Mirallesův tým spojil při rozboru francouzských veder z roku 2003 a ruských z roku 2010 měření z družic, údaje z meteorologických balónů a model půdy a vzduchu nad ní.
      Povrch se v noci ochlazoval, ve výšce však zůstala vrstva teplého vzduchu z předchozího dne. <SourceLink id="DOI_10_1038_ngeo2141">(Miralles a kol. 2014)</SourceLink>
    </p>
    <p>
      Druhý den slunce půdu znovu ohřálo. Od ní se ohříval i vzduch, stoupal a promíchával se se vzduchem nad sebou. Když promíchávání dosáhlo až k teplé vrstvě, část včerejšího tepla se dostala zpět k povrchu.
      <Link href="/pozorovani/vlny-veder/#teplota-ve-vysce">Měření teploty v různých výškách</Link> ukazují, kde teplo přes noc přetrvalo. Za stálého počasí se celý děj může opakovat několik dní. <SourceLink id="DOI_10_1038_ngeo2141">(Miralles a kol. 2014)</SourceLink>
    </p>

    <h3 id="co-je-dolozeno">Co platí celosvětově a co závisí na místě</h3>
    <p>
      Podle hodnocení IPCC je extrémně pravděpodobné, že lidský vliv je hlavní příčinou celosvětového růstu četnosti a intenzity horkých extrémů na souši od poloviny 20. století.
      Označení „extrémně pravděpodobné“ vyjadřuje pravděpodobnost tohoto závěru v rozmezí 95 až 100 %. Vychází z dlouhodobých měření, porovnání modelů i znalosti toho, jak skleníkové plyny ovlivňují teplotu. <SourceLink id="DOI_10_1017_9781009157896_013">(IPCC AR6, oddíl 11.3.4)</SourceLink>
    </p>
    <p>
      Pro konkrétní oblast záleží také na směru větru, vodě v půdě, množství drobných částic v ovzduší a způsobu využívání krajiny.
      Zejména v západní Evropě zůstává otevřené, nakolik se bude dosavadní vliv změn proudění opakovat v dalších desetiletích.
    </p>
    <details className="method-details">
      <summary>Meze testů a co by vysvětlení změnilo</summary>
      <p>
        Západoevropský výpočet pokrývá pevninu od 45 do 55° severní šířky a od 5° západní do 15° východní délky. Při podobném proudění se mohou dvě léta lišit vlhkostí půdy i teplotou vzduchu, který vítr přináší. ERA5 a E-OBS používají odlišné způsoby zpracování, část měření však sdílejí.
        V klimatických simulacích vyšel pro západní Evropu slabší vliv změn proudění než v rekonstrukci podle pozorování. Modely mohou podceňovat reakci proudění na vnější vlivy včetně skleníkových plynů, přirozené výkyvy v délce desetiletí nebo obojí. <SourceLink id="DOI_10_1038_s41467_023_42143_3">(Vautard a kol. 2023)</SourceLink>
      </p>
      <p>
        Další vysychání horko nejsnáze zesílí tam, kde dosud zbývalo dost vody pro výpar. V půdě, z níž se už téměř žádná voda nevypařuje, má další úbytek vody na ochlazování malý vliv.
        Pro posouzení zátěže, kterou vedro působí člověku, záleží vedle denních maxim také na vlhkosti vzduchu a na tom, jak chladné jsou noci. <SourceLink id="DOI_10_1017_9781009157896_013">(IPCC AR6, box 11.1 a oddíl 11.3)</SourceLink>
      </p>
      <p>
        Odhad vlivu oteplování na místní vedra by bylo třeba snížit, kdyby opakovaná měření ukázala, že při srovnatelném proudění a vlhkosti půdy zůstávají maxima dlouhodobě stejná i po prokazatelném oteplení okolí.
        Vliv vysychání lze zkoušet souběžným měřením výparu a tepla předávaného vzduchu. Kdyby při ubývání půdní vody opakovaně chyběl očekávaný pokles výparu i zesílený ohřev a rozdíl přesahoval nejistotu měření, museli bychom přehodnotit připisovanou úlohu sucha.
      </p>
    </details>

    <h2 id="shrnuti">Shrnutí fungování mechanismu</h2>
    <div className="method-conclusion"><p>
      V teplejším klimatu stačí menší výkyv počasí, aby teplota několik dní po sobě překračovala stejnou vysokou hranici. Vedro tak může začít dřív, později skončit a dosáhnout vyššího maxima.
      Proudění určuje, kam se teplý vzduch dostane a jak dlouho tam vydrží. Na pevnině může vedro dále zesílit vysychání půdy, protože ubývá vody, jejíž výpar krajinu ochlazuje.
      Tento výklad podporují srovnání dnů s podobným prouděním i pokusy, v nichž vědci změnili vlhkost půdy nebo zopakovali předpověď skutečného vedra v chladnějším klimatu. Velikost těchto vlivů se místo od místa liší.
    </p></div>

    <h2 id="prameny">Prameny, data a vlastní podklady</h2>
    <div className="article-source-groups">
      <section><h3>Proudění a rozlišující testy</h3><ul>
        <li><SourceLink id="DOI_10_3402_tellusa_v2i3_8546">Rex 1950: pět případů atmosférického blokování</SourceLink></li>
        <li><SourceLink id="DOI_10_1029_2010GL046582">Dole a kol. 2011: okolnosti ruského vedra</SourceLink></li>
        <li><SourceLink id="DOI_10_1038_s41467_023_42143_3">Vautard a kol. 2023: dlouhodobý příspěvek proudění v západní Evropě</SourceLink></li>
      </ul></section>
      <section><h3>Oteplování a půdní voda</h3><ul>
        <li><SourceLink id="1896_Arrhenius">Arrhenius 1896: historický výpočet souvislosti CO₂ a teploty</SourceLink></li>
        <li><SourceLink id="DOI_10_1175_JCLI4288_1">Fischer a kol. 2007: pokusy s evropskou půdní vodou</SourceLink></li>
        <li><SourceLink id="DOI_10_1029_2011GL050422">Otto a kol. 2012: rozdíl mezi velikostí a pravděpodobností</SourceLink></li>
        <li><SourceLink id="DOI_10_1038_ngeo2141">Miralles a kol. 2014: výšková měření a uchování tepla přes noc</SourceLink></li>
        <li><SourceLink id="DOI_10_1038_s41467_024_48280_7">Leach a kol. 2024: ověření pomocí předpovědního systému</SourceLink></li>
        <li><SourceLink id="DOI_10_1017_9781009157896_013">IPCC AR6, kapitola 11: syntéza důkazů a regionálních nejistot</SourceLink></li>
      </ul></section>
      <section><h3>Veřejná data a výpočty</h3><ul>
        <li><SourceLink id="WEB_Copernicus_ERA5_hourly_data_on_single_levels_from_1940_to_p_7e4f50d4">ERA5</SourceLink> a <SourceLink id="WEB_Copernicus_E_OBS_data_access_94a6a7b1">E-OBS</SourceLink>: vstupní teplotní řady, vyžadují volbu verze, období a oblasti. ERA5 se stahuje s bezplatným účtem.</li>
        <li><SourceLink id="DOI_10_5281_zenodo_8310140">Vautard: veřejné aplikační skripty</SourceLink>. Přepočet vyžaduje také vstupní data a prostředí popsané ve studii.</li>
        <li><SourceLink id="DOI_10_5281_zenodo_10728125">Leach: zpracovaná data a kód k obrázkům</SourceLink>. Původní experimenty jsou v archivu ECMWF MARS, identifikátory uvádí studie. Balíček obrázků není celý předpovědní systém.</li>
        <li><SourceLink id="WEB_Wyoming_Upper_Air_Archive">University of Wyoming: archiv radiosondáží</SourceLink>, použitý pro výškové profily ve studii Mirallese a kol.</li>
        <li><a href={`${media}/vysledky-studii.csv`}>Přepis zde použitých čísel ze studií</a> zachovává jednotky, rozsah a různé intervaly. Neobsahuje původní měřicí řady.</li>
        <li><a href={`${media}/ilustracni-rada.csv`}>Vymyšlený devítidenní příklad</a> a <a href={`${media}/podklady.txt`}>popis výpočtu a grafiky</a>, CC BY 4.0.</li>
      </ul></section>
    </div>
  </div></article>;
}
