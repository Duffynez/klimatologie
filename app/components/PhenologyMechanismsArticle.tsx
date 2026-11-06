import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./PhenologyMechanismsArticle.module.css";

const media = "/media/fenologicke-mechanismy";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "pevny-kalendar",
    name: "Samotný sezónní kalendář určuje termín",
    prediction: "Při stejném průběhu délky dne a stejném nastavení vnitřního rytmu mají termíny zůstat stejné, i když se změní teplota nebo potrava. Meziroční posun vyžaduje změnu samotného kalendáře.",
    test: "Změnou osvětlení nejprve ověříme, zda světelný kalendář vůbec působí. Potom porovnáme dlouhé záznamy ze stejných míst, kde se délka dne v dané části roku prakticky nemění.",
    observation: "Prodloužení dne podpořilo přípravu čížků k tahu. Evropské jarní a letní fáze rostlin se ale v letech 1971–2000 posunuly v průměru o 2,5 dne za desetiletí dopředu.",
    verdict: "Důležitá součást, která sama nestačí",
    explanation: "Světelný kalendář pomáhá určit roční období. Jeho existence nevysvětluje celou proměnlivost termínů ani jejich dlouhodobý posun.",
    state: "insufficient",
  },
  {
    id: "rytmus-a-prostredi",
    name: "Prostředí upravuje průběh sezónního vývoje",
    prediction: "I při stejné délce dne může teplota změnit vývoj rostlin a tahovou aktivitu ptáků. Účinek závisí na předchozím chladu, ročním období a připravenosti organismu. Nedostatek potravy může odlet zdržet.",
    test: "U větví měníme teplotu a osvětlení odděleně. U odchycených ptáků měníme teplotu mezi dvěma nocemi. V přírodě opakovaně sledujeme odlety stejných jedinců spolu se srážkami a potravou.",
    observation: "Teplejší komory urychlily otevření květů. Jarní oteplení zvýšilo noční aktivitu červenek a bělořitů, podzimní reakce se lišila. Na Jamajce odlety za sucha zaostávaly o několik dnů.",
    verdict: "Podpořené společné vysvětlení",
    explanation: "Rostliny a ptáci mají odlišnou fyziologii. Jejich sezónní program však v obou případech reaguje na podmínky, které skutečně zažívají.",
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
    <div className={styles.testPanels}>{tests.map(test => <section className={styles.testPanel} key={test.title}>
      <h4>{test.title}</h4>
      <dl><dt>Předpověď</dt><dd>{test.prediction}</dd><dt>Zkouška</dt><dd>{test.test}</dd><dt>Výsledek</dt><dd>{test.result}</dd></dl>
    </section>)}</div>
    <figcaption>{children} Vlastní kvalitativní schéma Klimatologie.eu připravené s pomocí AI, CC BY 4.0. Šipky ukazují působení jednotlivých podmínek, jejich velikost nevyjadřuje naměřenou sílu účinku. <a href={`${media}/podklady.txt`}>Prameny a původ grafiky</a>.</figcaption>
  </figure>;
}

export function PhenologyMechanismsArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Sezónní události se posouvají různým tempem</h2>
    <p className="article-prose__intro">
      Jarní a letní fáze evropských rostlin se v souboru z let 1971–2000 posouvaly v průměru o <strong>2,5 dne za desetiletí k dřívějším termínům</strong>.
      Přehled ptačích studií našel u jarního tahu a rozmnožování průměrný posun přibližně 2–3 dny za desetiletí, ale výrazné rozdíly mezi druhy a oblastmi.
      Tyto <Link href="/pozorovani/fenologicke-posuny/#pozorovani">záznamy fenologických změn</Link> vyvolávají otázku, co v organismu dokáže termín posunout a proč nejsou reakce stejné. <SourceLink id="DOI_10_1111_j_1365_2486_2006_01193_x">(Menzel a kol. 2006)</SourceLink> <SourceLink id="DOI_10_1002_ecm_1552">(Romano a kol. 2023)</SourceLink>
    </p>
    <p>
      Fenologie sleduje načasování opakujících se událostí, například otevření květů nebo průletu ptáků.
      Zde se zaměříme na jarní kvetení dřevin mírného pásu a na tah ptáků. Oddělíme vznik květního základu od otevření květu a přípravu k tahu od skutečného odletu a příletu.
      Přesné vymezení události vysvětluje <Link href="/metody/standardizovane-fenologicke-pozorovani/#definice-faze">metoda fenologického pozorování</Link>.
    </p>

    <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="phenology-hypotheses-caption"
      context={<p>Délkou dne rozumíme trvání světlé části dne, nikoli počet hodin slunečního svitu bez oblaků. Na stejném místě se její roční průběh opakuje téměř stejně. První hypotéza zkouší, zda tento kalendář spolu s neměnným vnitřním rytmem stačí. Druhá připouští další vliv prostředí.</p>}
      caption={<>Předpovědi se liší v reakci na změnu podmínek při stejném světelném režimu. Výsledky z klecí a růstových komor se vztahují k měřeným projevům a podmínkám pokusu, nikoli automaticky ke všem volně žijícím organismům.</>} />

    <h2 id="pribehy">Jak se odděloval kalendář od vlivu počasí</h2>
    <HypothesisStory id="pevny-kalendar" number={1} title="Samotný sezónní kalendář určuje termín">
      <p>
        Roční období se opakují pravidelněji než jednotlivé teplé a chladné dny. Délka dne proto nabízí organismu spolehlivou informaci o části roku.
        Americký botanik Wightman Garner v roce 1933 shrnul pokusy, které prováděl i s Harrym Allardem. Některé rostliny přecházely ke kvetení při delších dnech, jiné při kratších.
        Už tehdy upozorňoval, že neexistuje jediná délka dne platná pro všechny rostliny. <SourceLink id="DOI_10_1104_pp_8_3_347">(Garner 1933, s. 347–348)</SourceLink>
      </p>
      <p>
        U ptáků k tomu přistupuje vnitřní roční rytmus. Pokusy Eberharda Gwinnera s budníčky v šedesátých letech ukázaly,
        že se období tahové aktivity mohou opakovat i za stálých podmínek. Postupně se však rozcházela s kalendářním rokem.
        Přehled Barbary Helm a Miriam Liedvogel z roku 2024 vysvětluje, proč je nutné rozlišovat vnitřní rytmus a jeho seřizování vnějšími signály.
        Tento historický závěr zde přebíráme z jejich odborné syntézy. <SourceLink id="DOI_10_1007_s00359_023_01688_w">(Helm a Liedvogel 2024)</SourceLink>
      </p>
      <p>
        Samotný kalendář poskytuje rozumné výchozí vysvětlení pravidelnosti. Jeho přísná varianta ale předpovídá,
        že při stejném osvětlení a stejném vnitřním nastavení jiná teplota ani množství potravy termín neposune.
        Takto omezenou možnost budeme testovat. Netvrdíme, že Garner nebo Gwinner popírali všechny ostatní vlivy.
        Oddělujeme důkaz existence sezónního programu od otázky, zda sám vysvětlí také změny jeho průběhu.
      </p>
      <p>Schéma ukazuje skutečnou úlohu délky dne a očekávání, které vznikne, když jí přisoudíme celé načasování.</p>
      <Graphic name="kalendar" alt="Opakující se roční průběh délky dne působí na vývoj rostlin a přípravu ptáků k tahu. Při neměnném vnitřním rytmu předpovídá vysvětlení samotným kalendářem stejné termíny každý rok."
        tests={[
          { title: "Test 1 · Změna délky dne", prediction: "Prodloužení dne má podpořit sezónní přípravu ptáků.", test: "Čížci mají buď stále 10 hodin světla, nebo přirozeně se prodlužující den.", result: "Prodlužující se den podpořil tělesnou přípravu a noční aktivitu." },
          { title: "Test 2 · Stejná místa v dalších letech", prediction: "Neměnný kalendář sám nevytvoří soustavný posun termínů.", test: "Porovnáme dlouhé řady stejných druhů a fází na stejných lokalitách.", result: "Termíny se mění i bez odpovídající změny délky dne." },
        ]}>
        Úloha světla podle <SourceLink id="DOI_10_1104_pp_8_3_347">Garnera (1933)</SourceLink> a <SourceLink id="DOI_10_1098_rsos_180876">Robartové a kol. (2018)</SourceLink>, terénní porovnání podle <SourceLink id="DOI_10_1111_j_1365_2486_2006_01193_x">Menzelové a kol. (2006)</SourceLink>.
      </Graphic>

      <h4 id="test-delka-dne" className={styles.testHeading}>Test 1 · Změna délky dne</h4>
      <p>
        Pokud světlo spouští přípravu k jarnímu tahu, umělé prodlužování dne má změnit i ptáky chované uvnitř.
        Ashley Robart, Mali McGuire a Heather Watts to zkoušely v letech 2015–2016 u severoamerického čížka <i>Spinus pinus</i>.
        Jedna skupina 21 ptáků zažívala den prodlužující se jako na 34° severní šířky, druhých 20 ptáků stále 10 hodin světla a 14 hodin tmy.
        Potravu měli k dispozici neomezeně. Autoři sledovali hmotnost, tuk, prsní svalstvo a pohyb pomocí infračervených čidel. <SourceLink id="DOI_10_1098_rsos_180876">(Robart a kol. 2018)</SourceLink>
      </p>
      <p>
        Při prodlužujícím se dni vzrostl ukazatel tělesné kondice, který spojoval hmotnost a tukové zásoby, více než při stálém krátkém dni.
        Zvětšilo se také prsní svalstvo a narostla noční aktivita.
        Rozdílný průběh noční aktivity podpořil také statistický model zohledňující opakované měření stejných ptáků.
        Takzvaný tahový neklid je zvýšený pohyb v době obvyklého tahu. V kleci je ukazatelem přípravy, nikoli změřeným odletem.
        Pokus podpořil význam světla, ale nezkoušel vyloučit vliv jiných podmínek. <SourceLink id="DOI_10_1098_rsos_180876">(Robart a kol. 2018, obr. 1)</SourceLink>
      </p>

      <h4 id="test-terenni-rady" className={styles.testHeading}>Test 2 · Stejná místa v dalších letech</h4>
      <p>
        Kdyby termíny určoval jen neměnný kalendář, neměly by se na stejných lokalitách soustavně posouvat.
        Annette Menzel a spoluautoři v roce 2006 porovnávali dlouhé řady jednotlivých druhů a fází, nikoli pouze průměr všech náhodně došlých hlášení.
        U rostlin nastalo 78 % sledovaných trendů rašení, kvetení a zrání směrem k dřívějším datům. Statisticky průkazně dřívějších bylo 30 % všech řad,
        pozdějších 3 %. Soubor tedy neříká, že se stejně změnila každá rostlina. <SourceLink id="DOI_10_1111_j_1365_2486_2006_01193_x">(Menzel a kol. 2006)</SourceLink>
      </p>
      <p>
        Průměrný jarní a letní posun 2,5 dne za desetiletí je změna data události, nikoli délky vegetační sezóny.
        Výběr řad a nejistoty popisuje <Link href="/pozorovani/fenologicke-posuny/#rostliny-v-evrope">pozorovací článek</Link>.
        U ptáků navíc <Link href="/pozorovani/fenologicke-posuny/#ptaci">dlouhodobé záznamy</Link> rozlišují jarní a podzimní tah, druhy i trasy.
        Podzimní souhrn neukázal stejný celkový posun jako jarní. <SourceLink id="DOI_10_1002_ecm_1552">(Romano a kol. 2023)</SourceLink>
      </p>
      <p>
        Stálá délka dne sama tuto změnu nevysvětluje. Terénní řady však ještě nerozhodují, zda se mění okamžitá reakce organismu,
        dědičné vlastnosti populace nebo jiné podmínky. Přísně neměnný kalendář selhal jako úplné vysvětlení. Jeho skutečná biologická úloha tím zůstává zachována.
        K určení dalších příčin potřebujeme pokusy, které mění jednotlivé podmínky odděleně.
      </p>
    </HypothesisStory>

    <HypothesisStory id="rytmus-a-prostredi" number={2} title="Prostředí upravuje průběh sezónního vývoje">
      <p>
        Výzkum světelného kalendáře probíhal vedle výzkumu teploty a vývojového klidu. U dřevin se dlouho využívá zkušenost,
        že větve přenesené do tepla mohou vyrašit a rozkvést. Richard Primack a spoluautoři v roce 2015 shrnuli, jak z tohoto postupu vzniká kontrolovaný experiment:
        větve různých druhů vystavíme stanovenému chladu, světlu a následnému teplu a změříme, kdy dosáhnou stejné fáze. <SourceLink id="DOI_10_1093_aob_mcv032">(Primack a kol. 2015)</SourceLink>
      </p>
      <p>
        Vývojový klid neznamená pouhé okamžité zpomalení zimou. Pupen může určitou dobu zůstat uzavřený i po přenesení do tepla.
        Prodělaný chlad pomáhá tento vnitřní stav změnit. Následné teplo pak podporuje další vývoj.
        U ptáků analogicky rozlišujeme připravenost k tahu a podmínky umožňující odlet. Jde o různé biologické děje, společná je jejich závislost na dosavadním stavu organismu. <SourceLink id="DOI_10_1093_aob_mcv032">(Primack a kol. 2015)</SourceLink> <SourceLink id="DOI_10_1007_s00359_023_01688_w">(Helm a Liedvogel 2024)</SourceLink>
      </p>
      <p>
        Z toho plyne odlišná předpověď než u pevného kalendáře. Změna teploty při stejném osvětlení může změnit termín nebo aktivitu.
        Stejný teplotní zásah ale nemusí působit stejně po různě dlouhé zimě nebo na jaře a na podzim.
        Následující schéma ukazuje dvě cesty, kterými prostředí upravuje sezónní vývoj. Testy je ověřují jednotlivě.
      </p>
      <Graphic name="prostredi" alt="U dřeviny předchozí chlad mění vývojový klid pupenu a následné teplo podporuje jeho rozvoj až k otevření květu. U ptáka sezónní přípravu doplňuje získávání potravy a reakce na podmínky v místě zastávky."
        tests={[
          { title: "Test 1 · Květy v růstových komorách", prediction: "Teplo urychlí otevření květů, účinek závisí i na předchozím chladu.", test: "Kombinujeme tři teploty, dvě délky dne a tři termíny odběru větví.", result: "Teplota změnila dobu do otevření květu. Po nejkratším chladu čtyři druhy nevykvetly." },
          { title: "Test 2 · Teplota během tahové zastávky", prediction: "Změna teploty může změnit noční aktivitu i při stejném osvětlení.", test: "U červenek a bělořitů porovnáme noci před a po změně mezi 5 a 25 °C.", result: "Jarní oteplení aktivitu zvýšilo. Podzimní reakce závisela na druhu." },
          { title: "Test 3 · Potrava před odletem", prediction: "Za nedostatku potravy se mohou zpozdit i stejní jedinci.", test: "Na Jamajce sledujeme opakované odlety, březnové srážky a členovce na teritoriích.", result: "Sušší roky s méně potravou provázely pozdější odlety." },
        ]}>
        Podklady poskytují <SourceLink id="DOI_10_3389_fpls_2020_00443">Wang a kol. (2020)</SourceLink>, <SourceLink id="DOI_10_1098_rspb_2020_1650">Klinner a Schmaljohann (2020)</SourceLink> a <SourceLink id="DOI_10_1098_rspb_2011_0332">Studds a Marra (2011)</SourceLink>.
      </Graphic>

      <h4 id="test-kveteni" className={styles.testHeading}>Test 1 · Květy v růstových komorách</h4>
      <p>
        Huanjiong Wang a spoluautoři zkoumali šest druhů dřevin odebraných v Pekingu v zimě 2017–2018.
        Větve kombinovaně vystavili <strong>12, 15 nebo 18 °C a 10 nebo 14 hodinám světla</strong>. Každá kombinace měla tři větve ze tří rostlin.
        Tři odběry následovaly po 3, 38 a 59 dnech s průměrnou teplotou pod 5 °C. Výzkumníci kontrolovali větve třikrát týdně a počítali dny od odběru do otevření prvního květu.
        Tato fáze má v číselné stupnici vývoje rostlin označení BBCH 60. Tak lze oddělit následné teplo od osvětlení. <SourceLink id="DOI_10_3389_fpls_2020_00443">(Wang a kol. 2020, metody)</SourceLink>
      </p>
      <p>
        Vyšší teplota dobu zkrátila u všech šesti druhů. Například u <i>Forsythia suspensa</i> činil rozdíl mezi 18 a 12 °C v průměru <strong>29,7 dne</strong>.
        Po nejkratším předchozím chladu čtyři druhy vůbec nevykvetly. Účinek tepla tedy není nezávislý na připravenosti pupenu.
        Rozdíl 29,7 dne pochází z průměrování pokusných kombinací, není předpovědí pro příští jaro.
        Studie k němu v tabulce 3 neuvádí interval spolehlivosti, obrázek 2 ukazuje rozptyl tří opakování pomocí směrodatné odchylky. <SourceLink id="DOI_10_3389_fpls_2020_00443">(Wang a kol. 2020)</SourceLink>
      </p>
      <p>
        Jde o přímý zásah do podmínek, nikoli jen souběh teplého počasí a časného kvetení. Pokusy na odříznutých větvích však nezachycují kořeny ani všechny venkovní podmínky.
        Proto je důležité porovnávat je s dalšími pokusy a s terénními řadami. Přehled studií z Evropy a Severní Ameriky ukazuje společný význam tepla a zimního chladu,
        ale rozdílné nároky jednotlivých druhů. <SourceLink id="DOI_10_1093_aob_mcv032">(Primack a kol. 2015)</SourceLink>
      </p>

      <h4 id="test-teplota-ptaci" className={styles.testHeading}>Test 2 · Teplota během tahové zastávky</h4>
      <p>
        U ptáků potřebujeme jinou zkoušku. Jestliže místní teplota upravuje připravenost pokračovat v tahu, její změna má ovlivnit tahový neklid při stejném světelném režimu.
        Thomas Klinner a Heiko Schmaljohann v roce 2018 na Helgolandu dočasně chovali odchycené červenky obecné a bělořity šedé.
        Po třech nocích při 5 nebo 25 °C ptáky přemístili do opačné teploty. Čidla zachycovala pohyb a z něj autoři počítali minuty aktivity.
        Porovnávali stejného jedince během třetí a čtvrté noci,
        s přihlédnutím k jeho energetickým zásobám a datu odchytu. <SourceLink id="DOI_10_1098_rspb_2020_1650">(Klinner a Schmaljohann 2020)</SourceLink>
      </p>
      <p>
        Jarní oteplení zvýšilo neklid obou druhů. Tato větev pokusu zahrnovala 28 červenek a 26 bělořitů.
        Na podzim oteplení aktivitu bělořitů snížilo, u červenek nebyla změna statisticky průkazná.
        Výsledek odpovídá reakci závislé na sezóně a druhu, nikoli pravidlu „tepleji vždy znamená dříve“.
        Náhlý rozdíl <strong>20 °C</strong> ověřuje možnost reakce, ne velikost účinku běžného klimatického oteplení. <SourceLink id="DOI_10_1098_rspb_2020_1650">(Klinner a Schmaljohann 2020, tabulky 1, 3 a 4)</SourceLink>
      </p>
      <p>
        Slabinou je chybějící souběžná skupina bez změny teploty. Nelze úplně vyloučit vliv dalšího dne v zajetí.
        Navíc se měřil pohyb v kleci. K ověření, zda podmínky mění také skutečné termíny odletů, se proto obrátíme k opakovaným terénním pozorováním. <SourceLink id="DOI_10_1098_rspb_2020_1650">(Klinner a Schmaljohann 2020, diskuse)</SourceLink>
      </p>

      <h4 id="test-potrava" className={styles.testHeading}>Test 3 · Potrava před odletem</h4>
      <p>
        Jestliže nedostatek potravy zdržuje přípravu, měli by se ve slabších letech zpozdit i stejní ptáci.
        Colin Studds a Peter Marra sledovali na Jamajce 74 barevně kroužkovaných jedinců druhu <i>Setophaga ruticilla</i> po dobu dvou až šesti sezón.
        V letech 2003–2009, bez odletových měření v roce 2006, získali 194 odletových událostí. Srážky porovnali s množstvím členovců na teritoriích a s termíny odletu.
        Způsob kontroly nepřítomnosti ptáka popisuje <Link href="/pozorovani/fenologicke-posuny/#odlety-z-jamajky">navazující pozorování</Link>. <SourceLink id="DOI_10_1098_rspb_2011_0332">(Studds a Marra 2011)</SourceLink>
      </p>
      <p>
        Sušší březen souvisel s méně potravou a pozdějším odletem. Rozpětí srážek mezi zkoumanými roky odpovídalo v modelu přibližně <strong>3–5 dnům zpoždění</strong> podle prostředí.
        Opakování u stejných ptáků omezuje možnost, že jde jen o výměnu jedinců v populaci. Srážky ale výzkumníci náhodně nepřidělovali.
        Studie podporuje potravní vysvětlení, sama neprokazuje každý článek příčinné řady ani lidský původ konkrétního sucha. <SourceLink id="DOI_10_1098_rspb_2011_0332">(Studds a Marra 2011)</SourceLink>
      </p>
      <p>
        Druhé vysvětlení tak obstálo vlastními předpověďmi. Pokus s rostlinami ukazuje změnu po zásahu do prostředí, ptačí pokus doplňuje závislost na roční době
        a terénní sledování spojuje změnu podmínek se skutečnými odlety. Tyto postupy mají různé slabiny a neměří stejnou veličinu.
        Jejich shoda podporuje souběžné působení sezónního programu a prostředí, nikoli jediný univerzální spouštěč.
      </p>
    </HypothesisStory>

    <h2 id="jak-mechanismus-funguje">Jak prostředí mění termín události</h2>
    <p>
      Světelný a vnitřní kalendář vysvětlují pravidelnost sezónního života, samy však nestačí na jeho pozorované posuny.
      Vysvětlení doplněné o teplotu, předchozí chlad a dostupnost potravy obstálo v pokusech i v terénním porovnání.
      Nyní projdeme, jak se vnější podmínka může proměnit v biologickou změnu a nakonec v jiné datum kvetení nebo tahu.
    </p>

    <h3>Rostlina musí dospět ke konkrétní vývojové fázi</h3>
    <p>
      Kvetení zahrnuje několik dějů. Rostlina nejprve vytváří květní základy, které se potom vyvíjejí až k otevřenému květu.
      U mnoha jarních dřevin přezimují už založené pupeny. Jejich zimní klid a následný rozvoj proto nelze zaměnit za první rozhodnutí rostliny vytvářet květy.
      Zimní chlad může uvolnit omezení dalšího vývoje, teplo potom urychluje postup k pozorované fázi. <SourceLink id="DOI_10_1093_aob_mcv032">(Primack a kol. 2015)</SourceLink>
    </p>
    <p>
      Že světelný signál skutečně mění biologické řízení, ukazují pokusy s huseníčkem rolním <i>Arabidopsis thaliana</i>.
      Za vhodného světelného režimu vzniká v listech bílkovina FT. Přesouvá se do růstového vrcholu, kde pomáhá přepnout vývoj ke tvorbě květů.
        Michitaka Notaguchi a spoluautoři v roce 2008 využili roubování a označenou bílkovinu. Po vyvolání její tvorby v dárcovské části ji nalezli u vrcholu příjemce během jednoho až dvou dnů.
        Roubovací pokusy doložily také přenositelný účinek podporující kvetení. <SourceLink id="DOI_10_1093_pcp_pcn154">(Notaguchi a kol. 2008)</SourceLink>
    </p>
    <p>
      Tento pokus ověřuje cestu od signálu k vývojové odpovědi u konkrétní rostliny. Není důkazem, že stejná bílkovina přímo určila každé datum otevření květu v pekingském pokusu.
      Oba experimenty zachycují jiné kroky. Právě jejich rozlišení umožňuje spojit molekulární biologii s pozorováním v přírodě bez záměny měřených událostí.
    </p>

    <h3>Jak se v modelu sčítají teploty</h3>
    <p>
      Praktický model vývoje sčítá teplotu nad zvolenou základní hodnotou. Den s průměrem 12 °C při základu 5 °C přidá sedm stupňodnů.
      Dva takové dny přidají čtrnáct. Stupňoden tedy vyjadřuje teplotní rozdíl násobený dobou, nikoli energii dodanou rostlině.
      Součet je zjednodušený popis vývoje. Teplotní hranici a potřebnou dávku je nutné ověřit pro druh, fázi a podmínky. <SourceLink id="DOI_10_1093_aob_mcv032">(Primack a kol. 2015)</SourceLink>
    </p>
    <p>
      Pro názorný výpočet zvolme <strong>modelovou potřebu 140 stupňodnů nad 5 °C</strong>.
      Při stálých 12 °C se naplní za 140 ÷ 7 = 20 dnů, při 15 °C za 140 ÷ 10 = 14 dnů.
      Rozdíl šesti dnů plyne jen ze zvoleného modelu, není novým měřením určité rostliny.
      Výpočet vysvětluje směr reakce: při nezměněných nárocích může teplejší jaro dovést vývoj ke stejné fázi dříve.
    </p>
    <p>
      Předchozí zima však může změnit samotné nároky. Méně účinného zimního chladu může následný vývoj zbrzdit a část účinku teplého jara vyrovnat.
      Délka dne může u některých druhů postup dále omezovat. Vysvětlení proto připouští rozdílné reakce i v jednom místě.
      Konkrétní rozdíl mezi komorami nelze bez dalšího přepočítat na počet dnů za desetiletí ve volné přírodě. <SourceLink id="DOI_10_3389_fpls_2020_00443">(Wang a kol. 2020)</SourceLink>
    </p>

    <h3>Pták postupně připravuje tělo, odlétá a zastavuje po cestě</h3>
    <p>
      U ptáků sezónní řízení koordinuje chování i tělesnou přípravu. Změny příjmu potravy, zásob a svalstva umožňují pozdější cestu.
      Světelný signál tak nepůsobí jako povel k jedinému okamžitému startu. Připravuje organismus, jehož další chování závisí také na aktuálních možnostech.
      Přehled migračních hodin ukazuje, že se vnitřní časování, seřizování světlem a pružná reakce na okolí doplňují. <SourceLink id="DOI_10_1007_s00359_023_01688_w">(Helm a Liedvogel 2024)</SourceLink>
    </p>
    <p>
      Zásoby pro let musí pták získat z potravy. Horší potravní podmínky mohou tento krok prodloužit.
      Na trase se střídají lety a zastávky, během nichž pták znovu doplňuje zásoby a reaguje na místní podmínky.
      Datum příletu je proto výsledkem odletu i celé cesty. Teplé evropské jaro není informací, kterou by pták na vzdáleném zimovišti automaticky přímo vnímal. <SourceLink id="DOI_10_1007_s00359_023_01688_w">(Helm a Liedvogel 2024)</SourceLink>
    </p>
    <p>
      Změna chování téhož jedince podle podmínek se označuje jako fenotypová plasticita, tedy schopnost vytvářet různé projevy bez změny jeho dědičné výbavy.
      Vedle ní se mohou mezi generacemi měnit i dědičné vlastnosti populace. Samotné dřívější datum příletu tyto dvě možnosti nerozliší.
      Potřebujeme sledování jedinců, kontrolované podmínky a při zkoumání evoluce také údaje o dědičnosti. <SourceLink id="DOI_10_1007_s00359_023_01688_w">(Helm a Liedvogel 2024)</SourceLink>
    </p>

    <h3>Co je ověřené a co je třeba měřit dál</h3>
    <p>
      Přímé pokusy ověřují citlivost určitých fází a projevů na světlo a teplotu. Dlouhé řady ukazují, že se termíny skutečně mění.
      Nejméně jistý bývá přesný podíl jednotlivých vlivů u určitého druhu a místa. Propojení důkazů vysvětluje směr mnoha jarních posunů i rozdílnost reakcí,
      ale neposkytuje jediné číslo platné pro všechny rostliny a ptáky.
    </p>
    <details className="method-details">
      <summary>Meze pokusů a konkrétní další zkouška</summary>
      <p>
        Větve odebrané v různých zimních termínech nezažily jen různé množství chladu, ale také jinou předchozí délku dne a další podmínky.
        Tento postup je slabší izolací účinku chladu než náhodné rozdělení současně odebraného materiálu do chladových režimů.
        Odříznutí navíc mění zásobování a růstové komory nemusí napodobit kolísání počasí. <SourceLink id="DOI_10_1093_aob_mcv032">(Primack a kol. 2015)</SourceLink>
      </p>
      <p>
        Tahový neklid je nepřímým ukazatelem. Jeho změnu nelze převést na stejné zpoždění skutečného příletu.
        Ani terénní souběh sucha a pozdějšího odletu sám nevylučuje všechny další vlivy. Pokusy s teplotou a sledování volně žijících jedinců proto potřebujeme propojit,
        ne je považovat za zaměnitelná měření. <SourceLink id="DOI_10_1098_rspb_2020_1650">(Klinner a Schmaljohann 2020)</SourceLink> <SourceLink id="DOI_10_1098_rspb_2011_0332">(Studds a Marra 2011)</SourceLink>
      </p>
      <p>
        Konkrétní další test by mohl přidat ptákům kontrolní skupinu bez změny teploty, mírnější teplotní rozdíly a po vypuštění sledování vysílači.
        Pokud by se neklid změnil, ale skutečné pokračování tahu nikoli, oslabilo by to přenos výsledku z klece do přírody.
        U rostlin by opakované pokusy při shodném chladu, světle a zásobování, které by nedoložily očekávané urychlení po oteplení,
        vyžadovaly změnu modelu pro dotčený druh a fázi. Jde o návrhy ověření, nikoli o zde již získané výsledky.
      </p>
    </details>

    <section className="method-conclusion" aria-labelledby="shrnuti">
      <h2 id="shrnuti">Proč se termíny mění</h2>
      <p>
        Sezónní život řídí biologický vývoj a vnitřní rytmy reagující na prostředí. U jarních dřevin může teplo urychlit vývoj připravených pupenů,
        zatímco nedostatek předchozího chladu jej může brzdit. U ptáků se k sezónní přípravě přidávají potrava a podmínky na zimovišti i během cesty.
        Proto se mění data kvetení a tahu a různé druhy se posouvají různě. Vysvětlení stojí na zásazích do podmínek i na opakovaných měřeních v přírodě.
        Samotná shoda události s teplým rokem by tak silný důkaz neposkytla.
      </p>
    </section>

    <h2 id="prameny">Prameny a veřejná data</h2>
    <h3>Vývoj vysvětlení a biologické řízení</h3>
    <ul>
      <li><SourceLink id="DOI_10_1104_pp_8_3_347">Garner (1933)</SourceLink> — historický výklad reakce kvetení na délku dne, veřejný sken.</li>
      <li><SourceLink id="DOI_10_1093_pcp_pcn154">Notaguchi a kol. (2008)</SourceLink> — roubovací test přenosu bílkoviny FT.</li>
      <li><SourceLink id="DOI_10_1093_aob_mcv032">Primack a kol. (2015)</SourceLink> — syntéza pokusů s větvemi, jejich možností a omezení.</li>
      <li><SourceLink id="DOI_10_1007_s00359_023_01688_w">Helm a Liedvogel (2024)</SourceLink> — syntéza řízení ptačí migrace a historie pokusů s vnitřním rytmem.</li>
    </ul>
    <h3>Pokusy a terénní zkoušky</h3>
    <ul>
      <li><SourceLink id="DOI_10_1098_rsos_180876">Robart a kol. (2018)</SourceLink> — osvětlení a tahová příprava čížků. Článek odkazuje také na datový archiv autorů.</li>
      <li><SourceLink id="DOI_10_3389_fpls_2020_00443">Wang a kol. (2020)</SourceLink> — teplota, chlad a délka dne při otevírání květů. <SourceLink id="DATA_Wang_2020_Flowering">Veřejná původní data XLSX</SourceLink>.</li>
      <li><SourceLink id="DOI_10_1098_rspb_2020_1650">Klinner a Schmaljohann (2020)</SourceLink> — teplotní pokus s červenkami a bělořity, v přílohách plného textu také data XLSX.</li>
      <li><SourceLink id="DOI_10_1098_rspb_2011_0332">Studds a Marra (2011)</SourceLink> — odlety z Jamajky, srážky a potrava. Článek zveřejňuje souhrny a výsledky modelů, samostatná surová data nejsou na odkazované stránce připojena.</li>
    </ul>
    <h3>Dlouhodobá pozorování a podklady schémat</h3>
    <ul>
      <li><SourceLink id="DOI_10_1111_j_1365_2486_2006_01193_x">Menzel a kol. (2006)</SourceLink> a <SourceLink id="DOI_10_1002_ecm_1552">Romano a kol. (2023)</SourceLink> — souhrny rostlinných a ptačích změn. Původ dat a jejich dostupnost rozvádí <Link href="/pozorovani/fenologicke-posuny/#pozorovani">pozorovací článek</Link>.</li>
      <li><a href={`${media}/podklady.txt`}>Podklady, licence a vysvětlení obou schémat</a>. Názorný výpočet 140 stupňodnů v textu používá záměrně modelovou hodnotu, nikoli pozorovanou řadu.</li>
    </ul>
  </div></article>;
}
