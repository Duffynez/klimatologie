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
    name: "Délka dne a vnitřní rytmus samy určují termín",
    prediction: "Jestliže rozhoduje pouze sezónní kalendář, při stejném osvětlení a stejném vnitřním rytmu zůstane termín stejný i v teplejším roce.",
    test: "U čížků porovnáme přípravu na tah při krátkém a při prodlužujícím se dni. V přírodě sledujeme stejné sezónní události na stejných místech po několik desetiletí.",
    observation: "S prodlužujícím se dnem čížci nabrali zásoby a v noci byli aktivnější. V přírodě se však data rašení, kvetení i zrání měnila, přestože se délka dne opakovala.",
    verdict: "Vysvětluje pravidelnost, k vysvětlení posunů nestačí",
    explanation: "Světlo pomáhá načasovat přípravu na určité roční období. Pro rozdíly mezi roky potřebujeme znát i podmínky, které rostlina nebo pták zažívá.",
    state: "insufficient",
  },
  {
    id: "rytmus-a-prostredi",
    name: "Termín závisí i na teplotě a dostupnosti potravy",
    prediction: "Při stejném osvětlení může teplo urychlit otevření květu nebo změnit připravenost ptáka k letu. Pták, který na zimovišti obtížně hledá potravu, může odletět později.",
    test: "U větví měníme teplotu a osvětlení. U ptáků sledujeme noční pohyb před změnou teploty a po ní. Ve volné přírodě porovnáváme odlety týchž jedinců v různě suchých letech.",
    observation: "V teplejší komoře se květy otevřely dříve. Po jarním oteplení byli červenky i bělořiti v noci aktivnější, na podzim se reakce druhů lišily. Po suchém březnu odlétali ptáci z Jamajky později.",
    verdict: "Vliv prostředí dokládají pokusy i pozorování",
    explanation: "U květů záleželo také na předchozím zimním chladu, u ptáků na roční době. Vztah mezi potravou a odletem vychází ze sledování jednotlivých ptáků na zimovišti.",
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
    <h2 id="co-vysvetlujeme">Jak se změnily termíny kvetení a tahu</h2>
    <p className="article-prose__intro">
      Podle evropských záznamů z let 1971–2000 nastávaly jarní a letní události v životě rostlin, například rašení a kvetení, v průměru <strong>o 2,5 dne za desetiletí dříve</strong>.
      U ptáků se podle souhrnu dlouhodobých studií tah před hnízděním i samotné hnízdění posouvaly přibližně o dva až tři dny za desetiletí stejným směrem.{" "}
      <Link href="/pozorovani/fenologicke-posuny/#pozorovani">Dlouhodobá pozorování</Link> však ukazují i značné rozdíly mezi druhy. Proč se u jedněch termín posouvá více než u druhých?{" "}
      <SourceLink id="DOI_10_1111_j_1365_2486_2006_01193_x">(Menzel a kol. 2006)</SourceLink> <SourceLink id="DOI_10_1002_ecm_1552">(Romano a kol. 2023)</SourceLink>
    </p>
    <p>
      Pozorovatel zapisuje třeba den, kdy se na keři otevře první květ. Pupen se přitom vyvíjel už dlouho předtím.
      Podobně i jarnímu příletu ptáka předchází příprava na zimovišti, odlet a cesta se zastávkami. Každý z těchto kroků může výsledné datum posunout.
      Aby šlo různé roky porovnat, určuje <Link href="/metody/standardizovane-fenologicke-pozorovani/#definice-faze">metoda fenologického pozorování</Link>, kterou událost a podle jakých znaků zaznamenat.
    </p>

    <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="phenology-hypotheses-caption"
      context={<p>Délka dne je doba mezi východem a západem slunce. Na stejném místě je třeba v polovině dubna rok od roku téměř stejná, ať je zrovna teplo, nebo chladno. Dá se proto zkoušet, co organismus načasuje podle světla a co ovlivní počasí.</p>}
      caption={<>U rostlin lze přímo zaznamenat otevření květu. U ptáka v kleci lze sledovat přípravu k tahu. Termín odletu ze zimoviště zjišťovali vědci u volně žijících ptáků.</>} />

    <h2 id="pribehy">Co ukázaly pokusy a opakovaná pozorování</h2>
    <HypothesisStory id="pevny-kalendar" number={1} title="Délka dne a vnitřní rytmus samy určují termín">
      <p>
        Prodlužování dne začíná už v zimě. Rostlina tak může podle světla poznat, že se mění roční období, ještě než se trvale oteplí.
        V pokusech amerických botaniků Wightmana Garnera a Harryho Allarda některé rostliny začaly tvořit květy, když se den prodloužil. Jiné přecházely ke kvetení při krátkém dni.{" "}
        <SourceLink id="DOI_10_1104_pp_8_3_347">(Garner 1933, s. 347–348)</SourceLink>
      </p>
      <p>
        Pták může rytmus ročních období udržovat i bez střídání dlouhých a krátkých dnů. V pokusech Eberharda Gwinnera v 60. letech 20. století se budníčkům za stálých podmínek opakovaně vracela období tahové aktivity.
        Časem se však s kalendářním rokem rozešla. Jak vysvětlují Barbara Helm a Miriam Liedvogel, ptáci mají <strong>vnitřní roční rytmus</strong>, který v přírodě pomáhají seřizovat změny délky dne.{" "}
        <SourceLink id="DOI_10_1007_s00359_023_01688_w">(Helm a Liedvogel 2024)</SourceLink>
      </p>
      <p>
        Kdyby o termínu rozhodovaly pouze délka dne a vnitřní rytmus, měly by se při stejném osvětlení a stejně seřízeném rytmu první květy otevírat a ptáci odlétat přibližně ve stejnou dobu jako loni.
        Úlohu samotného světla lze ověřit v chovu. Když se změní jen doba osvětlení, začnou se ptáci chystat k letu dříve?
      </p>
      <Graphic name="kalendar" alt="Opakující se roční průběh délky dne působí na vývoj rostlin a přípravu ptáků k tahu. Při neměnném vnitřním rytmu předpovídá vysvětlení samotným kalendářem stejné termíny každý rok."
        tests={[
          { title: "Test 1 · Změna délky dne", prediction: "Prodloužení dne má podpořit sezónní přípravu ptáků.", test: "Čížci mají buď stále 10 hodin světla, nebo přirozeně se prodlužující den.", result: "Prodlužující se den podpořil tělesnou přípravu a noční aktivitu." },
          { title: "Test 2 · Stejná místa v dalších letech", prediction: "Neměnný kalendář sám nevytvoří soustavný posun termínů.", test: "Porovnáme dlouhé řady stejných druhů a fází na stejných lokalitách.", result: "Termíny se mění i bez odpovídající změny délky dne." },
        ]}>
        Úloha světla podle <SourceLink id="DOI_10_1104_pp_8_3_347">Garnera (1933)</SourceLink> a <SourceLink id="DOI_10_1098_rsos_180876">Robartové a kol. (2018)</SourceLink>, terénní porovnání podle <SourceLink id="DOI_10_1111_j_1365_2486_2006_01193_x">Menzelové a kol. (2006)</SourceLink>.
      </Graphic>

      <h4 id="test-delka-dne" className={styles.testHeading}>Test 1 · Změna délky dne</h4>
      <p>
        Tým Ashley Robartové rozdělil severoamerické čížky druhu <i>Spinus pinus</i> do dvou skupin.
        Jednadvaceti ptákům se den prodlužoval jako na 34. stupni severní šířky. Dalších dvacet mělo po celou dobu deset hodin světla denně.
        Obě skupiny měly volný přístup k potravě. Vědci ptáky vážili, hodnotili jejich tukové zásoby a prsní svalstvo a infračervenými čidly sledovali jejich pohyb.{" "}
        <SourceLink id="DOI_10_1098_rsos_180876">(Robart a kol. 2018)</SourceLink>
      </p>
      <p>
        Při prodlužujícím se dni získali čížci lepší tělesnou kondici než při stálém krátkém dni. Vědci ji posuzovali podle hmotnosti a zásob tuku. Zvětšily se jim také prsní svaly a v noci byli aktivnější.
        Takovému pohybu v době obvyklého tahu se říká <strong>tahový neklid</strong>. Rozdíl v noční aktivitě se projevil i ve výpočtu, který zohlednil opakovaná měření týchž ptáků.
        Pokus tak zachytil přípravu k letu už v kleci.{" "}
        <SourceLink id="DOI_10_1098_rsos_180876">(Robart a kol. 2018, obr. 1)</SourceLink>
      </p>

      <h4 id="test-terenni-rady" className={styles.testHeading}>Test 2 · Stejná místa v dalších letech</h4>
      <p>
        Na jednom místě se každé jaro opakuje téměř stejný průběh délky dne. Připadají tam také první květy každý rok na podobné datum?
        Annette Menzelová a její kolegové vybrali místa, kde pozorovatelé u téhož druhu zapisovali stejnou událost v nejméně 15 letech. Z těchto dat vypočítali, jak se měnil termín na každém místě.
        U rašení, kvetení a zrání mířilo 78 % takto vypočtených trendů k časnějším termínům. U 30 % všech těchto záznamů byl posun k dřívějším datům statisticky průkazný, u 3 % byl průkazný posun k pozdějším datům.{" "}
        <SourceLink id="DOI_10_1111_j_1365_2486_2006_01193_x">(Menzel a kol. 2006)</SourceLink>
      </p>
      <p>
        Podrobnosti o výběru rostlin a míst uvádí <Link href="/pozorovani/fenologicke-posuny/#rostliny-v-evrope">rozbor evropských záznamů</Link>.
        U ptáků záleželo i na části roku. V <Link href="/pozorovani/fenologicke-posuny/#ptaci">souhrnu pozorování 684 druhů</Link> vycházel pro tah před hnízděním posun k časnějším termínům. Pro tah po hnízdění se společný směr spolehlivě určit nepodařilo.{" "}
        <SourceLink id="DOI_10_1002_ecm_1552">(Romano a kol. 2023)</SourceLink>
      </p>
      <p>
        Na stejném místě se tedy kvetení nebo tah mohou v kalendáři posunout, i když se průběh délky dne rok od roku opakuje. Které podmínky posun způsobily, z dat kvetení a tahu samotných nepoznáme.
        U pupenů lze jeden z možných vlivů vyzkoušet už tím, že větve téhož druhu přeneseme do různě teplých místností.
      </p>
    </HypothesisStory>

    <HypothesisStory id="rytmus-a-prostredi" number={2} title="Termín závisí i na teplotě a dostupnosti potravy">
      <p>
        Větev, kterou v zimě uřízneme a dáme doma do vody, může během několika týdnů rozkvést. Botanici tohoto jevu využívají k pokusům.
        Rozdělí větve do komor, v nichž nastaví teplotu a dobu osvětlení, a zaznamenají, za kolik dnů se otevře první květ. Postup a zkušenosti z pokusů s různými dřevinami shrnuli Richard Primack a jeho kolegové.{" "}
        <SourceLink id="DOI_10_1093_aob_mcv032">(Primack a kol. 2015)</SourceLink>
      </p>
      <p>
        Záleží i na tom, kdy větev uřízneme. U mnoha dřevin je pupen na začátku zimy ve <strong>vývojovém klidu</strong> a může zůstat zavřený i v teplé místnosti.
        Po dostatečně dlouhém období chladu vývojový klid odezní a pupen na teplo reaguje rychlejším růstem. Také u ptáka záleží na tom, v jaké fázi ročního cyklu ho změna počasí zastihne a kolik už má zásob na cestu.{" "}
        <SourceLink id="DOI_10_1093_aob_mcv032">(Primack a kol. 2015)</SourceLink> <SourceLink id="DOI_10_1007_s00359_023_01688_w">(Helm a Liedvogel 2024)</SourceLink>
      </p>
      <p>
        Při stejné délce dne by se měly květy na připravených větvích otevřít v teple dříve než v chladu.
        U tažného ptáka zase může oteplení vyvolat na jaře jinou reakci než na podzim.
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
        Huanjiong Wang a jeho kolegové v zimě 2017–2018 třikrát odebrali v Pekingu větve šesti druhů dřevin. Před prvním odběrem napočítali venku tři dny s průměrnou teplotou pod 5 °C, před dalšími odběry 38 a 59 takových dnů.
        Při každém odběru rozdělili větve mezi komory se třemi teplotami (12, 15 a 18 °C) a dvěma délkami dne (10 a 14 hodin). Pro každý druh a každou kombinaci použili tři větve, každou z jiné rostliny.
        Třikrát týdně kontrolovali, zda se na větvi otevřel první květ. V datech studie najdeme tuto fázi vývoje pod označením BBCH 60.{" "}
        <SourceLink id="DOI_10_3389_fpls_2020_00443">(Wang a kol. 2020, metody)</SourceLink>
      </p>
      <p>
        Vyšší teplota v komoře zkrátila dobu do rozkvětu u všech šesti druhů. U zlatice <i>Forsythia suspensa</i> se první květ při 18 °C otevřel v průměru <strong>o 29,7 dne dříve</strong> než při 12 °C.
        Do průměru vstoupily výsledky z různých termínů odběru i z obou délek dne. Obrázek 2 původní studie ukazuje, nakolik se výsledky v každé trojici lišily. Po pouhých třech dnech zimního chladu čtyři z šesti druhů do konce pokusu vůbec nevykvetly.
        Změna délky dne z deseti na čtrnáct hodin měla statisticky průkazný účinek jen u dvou druhů.{" "}
        <SourceLink id="DOI_10_3389_fpls_2020_00443">(Wang a kol. 2020)</SourceLink>
      </p>
      <p>
        Teplotu a osvětlení v komoře mohli vědci nastavit nezávisle na sobě. Naproti tomu délka chladu venku souvisela s datem odběru. Později uříznuté větve měly za sebou také jiný průběh počasí a délky dne.
        Podobné pokusy v Evropě a Severní Americe potvrzují, že ke kvetení mnoha dřevin přispívá zimní chlad i následné teplo. Jednotlivé druhy se ale liší v tom, kolik chladu a tepla potřebují.{" "}
        <SourceLink id="DOI_10_1093_aob_mcv032">(Primack a kol. 2015)</SourceLink>
      </p>

      <h4 id="test-teplota-ptaci" className={styles.testHeading}>Test 2 · Teplota během tahové zastávky</h4>
      <p>
        Co udělá změna teploty s ptákem, který už je na cestě? Thomas Klinner a Heiko Schmaljohann na ostrově Helgoland v roce 2018 dočasně odchytili táhnoucí červenky obecné a bělořity šedé.
        Po třech nocích při 5 nebo 25 °C přemístili ptáky z chladu do tepla nebo z tepla do chladu. Přitom zachovali stejný světelný režim. Během prvních deseti hodin třetí a čtvrté noci spočítali minuty, v nichž čidlo zaznamenalo pohyb.
        U každého ptáka tak mohli porovnat aktivitu před změnou teploty a po ní. Při výpočtu zohlednili také datum odchytu a zásoby energie na cestu.{" "}
        <SourceLink id="DOI_10_1098_rspb_2020_1650">(Klinner a Schmaljohann 2020)</SourceLink>
      </p>
      <p>
        Na jaře pobývalo nejprve v chladu a pak v teple 28 červenek a 26 bělořitů. Po oteplení z 5 na 25 °C vzrostla noční aktivita obou druhů.
        Na podzim po stejném oteplení aktivita bělořitů naopak klesla. U červenek se tehdy průkazná změna neprojevila.
        Bělořiti tedy na stejné oteplení reagovali v obou obdobích opačně.{" "}
        <SourceLink id="DOI_10_1098_rspb_2020_1650">(Klinner a Schmaljohann 2020, tabulky 1, 3 a 4)</SourceLink>
      </p>
      <p>
        Žádná skupina ptáků nestrávila třetí i čtvrtou noc při stejné teplotě. Část rozdílu v pohybu proto mohla souviset také s delším pobytem v zajetí.
        Kdy pták skutečně vyrazil, lze zjistit sledováním jeho pohybu v přírodě.{" "}
        <SourceLink id="DOI_10_1098_rspb_2020_1650">(Klinner a Schmaljohann 2020, diskuse)</SourceLink>
      </p>

      <h4 id="test-potrava" className={styles.testHeading}>Test 3 · Potrava před odletem</h4>
      <p>
        Na jamajském zimovišti sledovali Colin Studds a Peter Marra 74 dospělých pěvců druhu <i>Setophaga ruticilla</i>. Podle barevných kroužků každého poznali a mohli porovnat jeho odlety ve dvou až šesti sezónách.
        Mezi roky 2003 a 2009 tak získali 194 odhadů data odletu. Jen v roce 2006 odlety nesledovali. Vycházeli z <Link href="/pozorovani/fenologicke-posuny/#odlety-z-jamajky">opakovaných kontrol ptačích teritorií</Link> přibližně po třech dnech.
        Úhrn březnových srážek znali z místní stanice. Množství dostupné potravy odhadli ze 132 vzorků členovců, které za dobu sledování nasbírali na ptačích teritoriích.{" "}
        <SourceLink id="DOI_10_1098_rspb_2011_0332">(Studds a Marra 2011)</SourceLink>
      </p>
      <p>
        Po sušším březnu našli vědci v teritoriích méně potravy a titíž ptáci odlétali později. Mezi nejsušším a nejdeštivějším březnem činil rozdíl 190 mm srážek.
        Tomuto rozdílu odpovídal podle výpočtu pozdější odlet v suchém roce přibližně o <strong>tři dny v mangrovech a pět dnů v křovinách</strong>. Zda jsou ptáci v křovinách na sucho citlivější, zůstává kvůli nejistotě obou odhadů otevřené.
        Opakované odlety stejných jedinců podporují vysvětlení, že přípravu na cestu prodloužil nedostatek potravy. Za sucha se ovšem mohly měnit i další podmínky.{" "}
        <SourceLink id="DOI_10_1098_rspb_2011_0332">(Studds a Marra 2011)</SourceLink>
      </p>
    </HypothesisStory>

    <h2 id="jak-mechanismus-funguje">Od zimního pupenu ke květu, od přípravy k odletu</h2>
    <p>
      Prodlužování dne stačilo čížkům k přípravě na tah. Samotný kalendář však nevysvětluje, proč se termíny posouvají. I při stejném osvětlení rozkvetly větve v teplejší komoře dříve a bělořiti po změně teploty změnili noční aktivitu.
      Na zimovišti se pozdější odlet pojil se skrovnější nabídkou potravy. Který vliv se projeví, záleží i na tom, jak daleko už pupen ve vývoji nebo pták v přípravě na cestu pokročil.
    </p>

    <h3>Od založení květu k jeho otevření</h3>
    <p>
      U mnoha na jaře kvetoucích dřevin najdeme základy budoucích květů v pupenech už před zimou. Když se pupen na jaře otevře, vidíme výsledek vývoje, který začal v předchozí sezóně.
      Během zimy chlad pomáhá ukončit vývojový klid. Jakmile je pupen připravený pokračovat v růstu, může teplo výrazně zkrátit dobu, která zbývá do rozkvětu.{" "}
      <SourceLink id="DOI_10_1093_aob_mcv032">(Primack a kol. 2015)</SourceLink>
    </p>
    <p>
      Jak se informace o délce dne dostane z listu až na místo, kde vznikne květ? U huseníčku rolního (<i>Arabidopsis thaliana</i>) vzniká za dlouhého dne v listech bílkovina FLOWERING LOCUS T, zkráceně FT.
      Michitaka Notaguchi a jeho kolegové spojili roubováním části dvou rostlin. V jedné vyvolali tvorbu označené bílkoviny a za jeden až dva dny ji našli ve druhé, u rostoucí špičky výhonu.
      Právě tam tento signál z listů podporuje zakládání květů.{" "}
      <SourceLink id="DOI_10_1093_pcp_pcn154">(Notaguchi a kol. 2008)</SourceLink>
    </p>
    <p>
      Větev zlatice v pekingské komoře už měla květy založené. U ní tedy záleží na tom, jak dlouho bude trvat, než se připravený pupen rozvine.
      Tuto dobu lze přibližně vyjádřit pomocí teplot, které větev postupně zažije.
    </p>

    <h3>Za kolik teplých dnů se pupen otevře</h3>
    <p>
      V jednoduchém modelu počítáme za každý den jen tu část průměrné teploty, která převyšuje zvolenou mez. Zvolíme-li hranici 5 °C, pak den s průměrem 12 °C přidá sedm <strong>stupňodnů</strong>.
      Den s průměrem 5 °C nebo nižším přidá nulu. Takto sečtené stupňodny vyjadřují, jak dlouho a o kolik byla teplota nad zvolenou mezí. Kde tato hranice leží a jaký součet odpovídá rozkvětu, vědci ověřují pro jednotlivé druhy a fáze vývoje.{" "}
      <SourceLink id="DOI_10_1093_aob_mcv032">(Primack a kol. 2015)</SourceLink>
    </p>
    <p>
      Představme si pupen, který po skončení zimního klidu potřebuje k rozkvětu 140 stupňodnů nad 5 °C. Při stálých 12 °C přibývá sedm stupňodnů denně, takže by se květ otevřel za 20 dnů.
      Při 15 °C přibývá deset stupňodnů denně a stačilo by 14 dnů. Těchto šest dnů rozdílu vychází z ilustračního výpočtu se zvoleným nárokem na teplo.
    </p>
    <p>
      Po mírné zimě však může stejný pupen potřebovat k rozkvětu více jarního tepla. Část náskoku, který by jinak poskytlo teplé jaro, se tak může ztratit.
      U některých druhů záleží také na tom, zda už je den dost dlouhý. Proto mohou dvě dřeviny, které rostou vedle sebe, posunout kvetení v témže roce různě.{" "}
      <SourceLink id="DOI_10_3389_fpls_2020_00443">(Wang a kol. 2020)</SourceLink>
    </p>

    <h3>Co určuje datum příletu na hnízdiště</h3>
    <p>
      Délka dne pomáhá ptákům seřídit vnitřní roční rytmus. Díky němu se v době přípravy na tah mění chování i tělo ptáka.
      Pták přijímá potravu, ukládá tuk a připravuje si svalstvo na let. V roce s nedostatkem potravy mu může získání potřebných zásob trvat déle.{" "}
      <SourceLink id="DOI_10_1007_s00359_023_01688_w">(Helm a Liedvogel 2024)</SourceLink>
    </p>
    <p>
      Po odletu ze zimoviště se střídají úseky letu se zastávkami, kde pták odpočívá a znovu doplňuje zásoby. Kdy dorazí na hnízdiště, závisí i na podmínkách podél trasy.
      Pokud na hnízdiště přiletí dříve než loni, mohl letos dřív odletět, strávit méně času na zastávkách nebo obojí. K rozlišení těchto možností potřebujeme údaje i z cesty.{" "}
      <SourceLink id="DOI_10_1007_s00359_023_01688_w">(Helm a Liedvogel 2024)</SourceLink>
    </p>
    <p>
      Jednotlivý pták může načasování tahu přizpůsobovat podmínkám během svého života, jak ilustrují odlety z Jamajky. Biologové takovou schopnost označují jako <strong>fenotypovou plasticitu</strong>.
      U celé populace se navíc mezi generacemi mohou měnit dědičné předpoklady k časnějšímu či pozdějšímu tahu. Chceme-li určit podíl této změny, potřebujeme vedle termínů příletu znát také příbuznost ptáků a porovnat jejich chování za srovnatelných podmínek.{" "}
      <SourceLink id="DOI_10_1007_s00359_023_01688_w">(Helm a Liedvogel 2024)</SourceLink>
    </p>

    <h3>Co ještě potřebujeme zjistit</h3>
    <p>
      U ptáků zůstává otevřené, do jaké míry změna nočního neklidu předpovídá skutečný odlet. Rozhodnout by pomohlo sledování po vypuštění. Kdyby ptáci po oteplení byli v kleci aktivnější, ale z ostrova odletěli ve stejnou dobu jako skupina při stálé teplotě, samotný neklid by se pro odhad dne odletu v těchto podmínkách neosvědčil.
      U dřevin zůstává otevřené, jak velkou část dlouhodobého posunu venku lze připsat jarnímu teplu. K takovému odhadu potřebujeme znát také průběh zimy a ověřit reakci celých stromů.
    </p>
    <details className="method-details">
      <summary>Jak ověřit účinek zimního chladu a datum odletu</summary>
      <p>
        Větve pro srovnání by šlo odebrat v jediný den a náhodně je rozdělit mezi různě dlouhá období chladu. Následné oteplení by pak začínalo za předem určených podmínek.
        Výsledky by bylo třeba srovnat s celými stromy venku. Odříznutá větev ztratila spojení s kořeny a v komoře zažívá menší výkyvy teplot než v přírodě.{" "}
        <SourceLink id="DOI_10_1093_aob_mcv032">(Primack a kol. 2015)</SourceLink>
      </p>
      <p>
        Na Helgolandu činil teplotní skok 20 °C. Při opakování by šlo vyzkoušet mírnější oteplení a ponechat srovnávací skupinu po celou dobu při stejné teplotě.
        Po vypuštění by vysílače ukázaly, kdy jednotliví ptáci skutečně pokračují v tahu. Na zimovišti mají terénní kontroly jinou mez. Odlet lze datovat jen s přesností, kterou dovoluje odstup mezi návštěvami.{" "}
        <SourceLink id="DOI_10_1098_rspb_2020_1650">(Klinner a Schmaljohann 2020)</SourceLink> <SourceLink id="DOI_10_1098_rspb_2011_0332">(Studds a Marra 2011)</SourceLink>
      </p>
      <p>
        Také převod stupňodnů na datum rozkvětu lze vyzkoušet na dalších zimách. Kdyby dřevina po srovnatelném zimním chladu při stejné délce dne opakovaně rozkvétala stejně rychle v chladnějších i teplejších podmínkách, bylo by třeba pro tento druh a rozsah teplot jednoduchý model upravit.
      </p>
    </details>

    <section className="method-conclusion" aria-labelledby="shrnuti">
      <h2 id="shrnuti">Proč se kvetení a tah posouvají</h2>
      <p>
        U mnoha jarních dřevin pomáhá zimní chlad připravit pupen k dalšímu růstu. Teplé jaro pak může otevření květů uspíšit, po mírné zimě však mohou pupeny potřebovat k rozkvětu více tepla.
        U ptáků pomáhají délka dne a vnitřní rytmus načasovat přípravu na cestu. Odlet ovlivňuje také možnost získat potravu a do příletu se promítne i čas strávený na zastávkách.
        Proto mohou i druhy, které zažívají stejné jaro, posunout kvetení nebo tah o různý počet dnů.
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
