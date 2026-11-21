import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Equation, InlineMath } from "./Equation";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./SnowCoverMechanismsArticle.module.css";

const media = "/media/snehova-pokryvka-mechanismy";
const observation = "/pozorovani/snehova-pokryvka-a-permafrost/";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "zmena-srazek",
    name: "Úbytek sněhu vysvětlí samotný pokles srážek",
    prediction: "Při stejném podílu sněžení a stejných podmínkách tání má menší zásobu doprovázet menší přísun srážek. Pokud srážky neklesají, toto vysvětlení nestačí.",
    test: "Porovnáme vodu uloženou ve sněhu se zimními srážkami na západě Severní Ameriky. V modelu oddělíme změnu teploty od změny měsíčních úhrnů srážek.",
    observation: "V Kaskádách a vnitrozemských oblastech se zásoba zmenšila výrazněji než srážky. V části oblastí srážky dokonce mírně vzrostly.",
    verdict: "Důležitý vliv, který rozsáhlý úbytek sám nevysvětluje",
    explanation: "Suchá zima může přinést málo sněhu. Pokles celkových srážek však nevysvětluje společný vývoj všech sledovaných oblastí.",
    state: "insufficient",
  },
  {
    id: "teplota-a-tani",
    name: "Oteplování mění podíl sněhu i jeho tání",
    prediction: "V prostředí blízkém bodu tání má častěji pršet a sníh má dříve ztrácet zásobu vody. V dostatečně chladné zimě může větší sněžení tento účinek převážit.",
    test: "Ověříme skupenství srážek na stanicích, výpočet sněhu v horském povodí a dlouhodobé změny v povodích severní polokoule.",
    observation: "Měření potvrzují význam teploty i vlhkosti pro sněžení. Ověřený horský model dává při oteplení kratší sezonu, i když denní tání může zeslábnout.",
    verdict: "Podpořené vysvětlení společně se změnami srážek",
    explanation: "Výsledek určuje počáteční zásoba, podíl sněhu ve srážkách a energie dostupná během sezony. Stejná změna teploty proto nemá všude stejný účinek.",
    state: "supported",
  },
];

type TestPanel = { title: string; prediction: string; test: string; result: string };
function Graphic({ name, alt, tests, children }: { name: string; alt: string; tests: TestPanel[]; children: ReactNode }) {
  return <figure className={`article-figure ${styles.explanatoryFigure}`}>
    <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Schéma sněhové pokrývky, na úzké obrazovce posuvné do stran">
      <a href={`${media}/${name}.svg`} aria-label="Otevřít schéma v plné velikosti">
        <Image className="article-figure__media" src={`${media}/${name}.svg`} width={1100} height={660} alt={alt} unoptimized />
      </a>
    </div>
    <div className={styles.testPanels}>{tests.map(test => <section className={styles.testPanel} key={test.title}>
      <h4>{test.title}</h4>
      <dl><dt>Předpověď</dt><dd>{test.prediction}</dd><dt>Zkouška</dt><dd>{test.test}</dd><dt>Výsledek</dt><dd>{test.result}</dd></dl>
    </section>)}</div>
    <figcaption>{children} Vlastní kvalitativní schéma Klimatologie.eu připravené s pomocí AI, CC BY 4.0.
      Rozměry a šipky nevyjadřují měřená množství. <a href={`${media}/podklady.txt`}>Prameny, licence a podklady</a>.
    </figcaption>
  </figure>;
}

export function SnowCoverMechanismsArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Kolik sněhu vydrží v Arktidě do června?</h2>
    <p className="article-prose__intro">
      <Link href={`${observation}#jarni-rozsah-snehu`}>Mapy sněhové pokrývky</Link> ukazují, kde na arktické pevnině ještě v červnu leží sníh.
      Severně od 60° severní šířky, s výjimkou Grónska, se podle trendu za roky 1967–2025 červnová zasněžená plocha zmenšila přibližně o polovinu.
      V dubnu, kdy bývá sněhu nejvíc, vychází za období 1981–2025 pokles jeho celkové hmotnosti jen asi o tři procenta.
      Tak malý pokles nelze v těchto datech spolehlivě odlišit od kolísání mezi roky.
      <SourceLink id="DOI_10_25923_cfhv_c239"> (Mudryk a kol. 2025)</SourceLink>
    </p>
    <p>
      Když čerstvý sníh slehne, jeho vrstva se ztenčí, i když v ní zůstává všechna voda.
      Při <Link href="/metody/mereni-vysky-hustoty-a-vodni-hodnoty-snehu/#vyska-a-hustota">měření sněhové zásoby</Link> sleduje vedle výšky také hustota.
      Z obou hodnot lze určit <strong>vodní hodnotu sněhu</strong>, tedy jak hluboká vrstva vody by na dané ploše vznikla, kdyby všechen sníh roztál.
      Jeden milimetr vodní hodnoty znamená kilogram vody na metr čtvereční. V těchto jednotkách lze přímo porovnat, kolik vody za zimu spadlo a kolik jí ve sněhu zůstalo do jara.
    </p>

    <h2 id="hypotezy">Dvě vysvětlení a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="snow-cover-hypotheses-caption"
      context={<p>Srážky a teplota působí současně. Porovnání má zjistit, které změny jsou k vysvětlení měření potřeba a jak přispívají k téže bilanci sněhu.</p>}
      caption={<>Rozlišovacím znakem je vývoj sněhové zásoby při známém množství srážek. Další testy ověřují skupenství srážek, přísun energie a rozdíly mezi chladnými a teplejšími oblastmi.</>} />

    <h2 id="pribehy">Proč může sněhu ubývat i po vlhké zimě?</h2>
    <HypothesisStory id="zmena-srazek" number={1} title="Úbytek sněhu vysvětlí samotný pokles srážek">
      <p>
        Když ve dvou zimách připadá na sněžení stejný podíl všech srážek, v té sušší se do sněhu uloží méně vody.
        Jestliže jsou podobné i podmínky při tání, měl by být rozdíl patrný ještě na jaře.
        Philip Mote a jeho kolegové rozšířili v roce 2005 dřívější rozbor severozápadu USA na hory západní Severní Ameriky.
        Mohli tak srovnat hory, kde zimních srážek ubylo, s oblastmi, kde jich přibylo.
        <SourceLink id="DOI_10_1175_bams_86_1_39"> (Mote a kol. 2005)</SourceLink>
      </p>
      <Graphic name="srazky-a-zasoba" alt="Dva zasněžené svahy při stejných podmínkách tání. Menší přísun sněhu vede k menší jarní zásobě. Srážkoměr sleduje přísun vody a odběr sněhového jádra měří zásobu. Jejich srovnání odlišuje suchou zimu od jiných příčin úbytku."
        tests={[{ title: "Test 1 · Srážky a horská zásoba", prediction: "Pokud rozhoduje jen méně srážek, pokles zásoby má doprovázet menší zimní úhrn.", test: "Porovnáme regionální zásobu k 1. dubnu se srážkami od listopadu do března.", result: "Ve vnitrozemí zásoba klesla, přestože srážky mírně vzrostly. Samotný pokles srážek nestačí." }]}>
        Přísun a zásoba podle rozboru <SourceLink id="DOI_10_1175_bams_86_1_39">Moteho a kol. (2005)</SourceLink>.
        Modré značky označují sníh a vodu, oranžové šipky energii pro tání. Hnědá plocha je půda.
      </Graphic>

      <h4 id="test-srazky" className={styles.testHeading}>Test 1 · Srážky a horská zásoba</h4>
      <p>
        Vědci porovnali úhrn deště a sněhu od listopadu do března s množstvím vody, které kolem 1. dubna zjistili
        v <Link href={`${observation}#horske-snehove-zasoby`}>terénních profilech</Link>.
        V každé oblasti srovnali průměry obou veličin za roky 1945–1955 s průměry za roky 1990–1997.
        Ve vnitrozemí přibylo zimních srážek o 2,1 %, ale na začátku dubna bylo ve sněhu o 21,6 % méně vody.
        Také ve Skalnatých horách se při mírném růstu srážek jarní zásoba zmenšila.
      </p>
      <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Změny zásoby a srážek, tabulka posuvná do stran">
        <table className={styles.budgetTable}>
          <caption>Změna průměru 1990–1997 proti 1945–1955 v procentech. Zásoba znamená vodní hodnotu sněhu k 1. dubnu, srážky úhrn za listopad až březen.</caption>
          <thead><tr><th scope="col">Oblast</th><th scope="col">Změřená zásoba</th><th scope="col">Zásoba v modelu</th><th scope="col">Srážky</th></tr></thead>
          <tbody>
            <tr><th scope="row">Kaskády</th><td>−29,2 %</td><td>−15,5 %</td><td>−4,6 %</td></tr>
            <tr><th scope="row">Skalnaté hory</th><td>−15,8 %</td><td>−8,8 %</td><td>+0,5 %</td></tr>
            <tr><th scope="row">Kalifornie</th><td>−2,2 %</td><td>−24,6 %</td><td>−1,1 %</td></tr>
            <tr><th scope="row">Vnitrozemí</th><td>−21,6 %</td><td>−18,2 %</td><td>+2,1 %</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        <SourceLink id="DOI_10_1175_bams_86_1_39">Mote a kol. (2005, tabulka 1)</SourceLink> porovnali měření také s výpočtem zásoby z údajů srážkoměrů a teploměrů.
        Největší rozdíl vyšel v Kalifornii, kde model dával pokles o 24,6 %, zatímco měření ukázalo jen 2,2 %.
        V místech odběrů byly jednotlivé nadmořské výšky zastoupeny jinak než v modelu. Autoři k regionálním průměrům neuvádějí intervaly nejistoty.
        <a href={`${media}/mote-2005-tabulka-1.csv`}> Přepis tabulky</a> umožňuje porovnat všechny čtyři oblasti.
      </p>
      <p>
        O kolik jarní zásobu změnila teplota, nelze určit prostým odečtením dvou procentních změn. Každá má jiný základ, jednou jde o všechny zimní srážky, podruhé o vodu ve sněhu k 1. dubnu.
        Aby autoři účinek teploty oddělili, zadali modelu každý rok stejné měsíční úhrny srážek a teplotu měnili podle skutečného průběhu počasí.
        V tomto pokusu rostla dubnová zásoba jen ve 3 % polí modelové sítě. Suchá zima tedy může vysvětlit málo sněhu v jednotlivém roce, ale k dlouhodobému úbytku může docházet i při stálých srážkách.
        <SourceLink id="DOI_10_1175_bams_86_1_39"> (Mote a kol. 2005, obr. 7)</SourceLink>
      </p>
    </HypothesisStory>

    <HypothesisStory id="teplota-a-tani" number={2} title="Oteplování mění podíl sněhu i jeho tání">
      <p>
        Vločka může cestou z oblaku proletět vrstvou vzduchu, v níž roztaje, a na zem pak dopadne déšť.
        Když na podzim častěji prší, může souvislá sněhová pokrývka vzniknout později. I po prvním sněžení záleží na tom, zda nová vrstva přečká oblevu.
        Na jaře už záleží na tom, kolik sněhu se přes zimu nahromadilo a kolik energie při tání dostane.
      </p>
      <Graphic name="teplota-a-tani" alt="Řez krajinou se třemi zkouškami. Teploměr a pozorovatel rozlišují déšť a sníh. Na zemi přivádí záření a vzduch energii ke sněhu, voda odtéká a měřicí poduška sleduje zásobu. Více povodí umožňuje ověřit rozdíly mezi studenými a teplejšími zimami."
        tests={[
          { title: "Test 2 · Déšť, nebo sníh", prediction: "Při oteplení v přechodném teplotním pásmu má klesat četnost sněžení. Záleží také na vlhkosti.", test: "Porovnáme hlášení skupenství s teplotou a vlhkostí na tisících stanic.", result: "Teplota stejně častého deště a sněhu se mezi stanicemi liší. Jediný práh 0 °C nepostačuje." },
          { title: "Test 3 · Tání v horském povodí", prediction: "Výpočet přírůstků a ztrát má zachytit měřený průběh zásoby. Oteplení může zkrátit sezonu i při pomalejším denním tání.", test: "Nejprve ověříme model na sněhových měřeních, potom při stejných srážkách zvýšíme teplotu.", result: "Model zachytil hlavní průběh zásoby. Teplejší varianty měly méně vody ze sněhu a kratší sezonu." },
          { title: "Test 4 · Dlouhodobé změny povodí", prediction: "Oteplení má silněji omezovat zásobu v teplejších zimách. Velmi chladné oblasti mohou při větších srážkách získat sníh.", test: "Porovnáme rekonstrukce s měřením a s výpočtem bez odhadnutého lidského vlivu na klima.", result: "Výsledky podporují lidský vliv na úbytek v řadě mírnějších oblastí a na přírůstek v části chladné Arktidy." },
        ]}>
        Fyzikální cesty a jejich měření podle <SourceLink id="DOI_10_1038_s41467_018_03629_7">Jenningse a kol. (2018)</SourceLink>,{" "}
        <SourceLink id="DOI_10_5194_tc_11_2847_2017">Musselmana a kol. (2017)</SourceLink> a{" "}
        <SourceLink id="DOI_10_1038_s41586_023_06794_y">Gottlieba a Mankina (2024)</SourceLink>.
        Modrá označuje vodu a sníh, oranžová energii, zelená měření.
      </Graphic>

      <h4 id="test-skupenstvi" className={styles.testHeading}>Test 2 · Déšť, nebo sníh</h4>
      <p>
        V sušším vzduchu se část ledu na padající vločce může měnit přímo ve vodní páru (sublimovat) a voda z tající vločky se může odpařovat.
        Obojí vločku ochlazuje, takže někdy dosáhne země jako sníh, i když teploměr ukazuje víc než 0 °C.
        Keith Jennings a jeho kolegové zkoumali, při jaké teplotě hlásí pozorovatelé stejně často déšť jako sníh.
        Použili 17,8 milionu <Link href={`${observation}#skupenstvi-srazek`}>hlášení z 11 924 stanic</Link> severní polokoule od ledna 1978 do února 2007.
        Smíšené srážky vyřadili a u ostatních počítali četnost deště a sněhu při různých teplotách. Množství spadlé vody hlášení neobsahovala.
        <SourceLink id="DOI_10_1038_s41467_018_03629_7"> (Jennings a kol. 2018)</SourceLink>
      </p>
      <p>
        Hlášení ze 6 883 stanic stačila k odhadu teploty, při níž byl déšť stejně častý jako sníh. Průměr činil <strong>1,0 °C</strong>. U 95 % těchto stanic ležela hranice mezi −0,4 a 2,4 °C.
        Když vědci vedle teploty vzali v úvahu také vlhkost vzduchu, rozlišili déšť od sněhu přesněji.
        Oteplení proto mění četnost sněžení hlavně tam, kde už se déšť a sníh střídají. Kde i po oteplení silně mrzne, srážky dál přicházejí převážně v podobě sněhu.
        <SourceLink id="DOI_10_1038_s41467_018_03629_7"> (Jennings a kol. 2018, obr. 2–5)</SourceLink>
        <SourceLink id="DOI_10_5061_dryad_c9h35"> Veřejná data a výpočetní postup</SourceLink> umožňují porovnat jednotlivé stanice.
      </p>

      <h4 id="test-povodi" className={styles.testHeading}>Test 3 · Tání v horském povodí</h4>
      <p>
        Na zemi sníh pohlcuje sluneční i tepelné záření a sám teplo vyzařuje. Teplo si vyměňuje také s půdou a vzduchem. Když se z něj voda odpařuje, ochlazuje se, při srážení vodní páry na sněhu se naopak teplo uvolňuje.
        Pokud je sníh promrzlý, dodaná energie ho nejprve ohřívá. Teprve když dosáhne bodu tání, může další přísun energie měnit led ve vodu.
        <SourceLink id="DOI_10_5194_tc_11_2847_2017"> (Musselman a kol. 2017, oddíl 2)</SourceLink>{" "}
        Nathan Osborne v roce 1939 vyhodnotil čtyři soubory laboratorních měření. K roztátí kilogramu ledu při bodu tání bylo potřeba přibližně <strong>334 kilojoulů</strong>.
        <SourceLink id="DOI_10_6028_jres_023_043"> (Osborne 1939)</SourceLink>
      </p>
      <p>
        Zvolme příklad, kdy na tání zbývá po celý den 30 wattů na metr čtvereční. Každý metr čtvereční tak za sekundu dostane 30 joulů.
        Příkon <InlineMath tex="Q" /> vynásobíme časem <InlineMath tex="t" /> a dostaneme energii za den.
        Vydělíme ji energií potřebnou k roztátí kilogramu ledu <InlineMath tex="L_f" /> a získáme hmotnost roztátého ledu na metr čtvereční <InlineMath tex="m" />.
      </p>
      <Equation tex={[String.raw`m = \frac{Q\,t}{L_f}`, String.raw`= \frac{30\ \mathrm{W\,m^{-2}}\times86\,400\ \mathrm{s}}{334\,000\ \mathrm{J\,kg^{-1}}}`, String.raw`\approx 7{,}8\ \mathrm{kg\,m^{-2}}`]} />
      <p>
        Při tomto příkonu by metr čtvereční získal za den 2,592 megajoulu, což stačí k roztátí asi 7,8 kilogramu ledu. To odpovídá 7,8 milimetru vody. O tolik klesne zásoba jen tehdy, když všechna vzniklá voda odteče a žádná další nepřibude.
        <SourceLink id="DOI_10_6028_jres_023_043"> Laboratorní převod podle Osborna (1939)</SourceLink> používá i <a href={`${media}/vypocty.mjs`}>zveřejněný výpočet</a>.
      </p>
      <p>
        Jak se tyto přenosy energie projeví za skutečného počasí, zkoumali Keith Musselman a jeho kolegové v povodí řeky Kaweah v kalifornské Sierra Nevadě.
        V modelu Alpine3D rozdělili povodí na čtverce o straně 100 metrů. Z měření počasí v nich počítali přírůstky a tání sněhu pro tři sezony z let 2008–2010, jednu srážkově obvyklou, jednu sušší a jednu vlhčí.
        <SourceLink id="DOI_10_5194_tc_11_2847_2017"> (Musselman a kol. 2017)</SourceLink>{" "}
        Výpočet ověřili <Link href={`${observation}#mereni-kaweah`}>měřením přímo ve sněhu</Link>. Zásobu měřili ručními odběry a poduškami, které sníh váží, jeho výšku sledovali zvláštními čidly.
        V sezonách 2008 a 2010 nepřesáhla typická chyba na třech automatických stanicích 100 mm vodní hodnoty. V suchém roce 2009 model na výše položených stanicích zásobu podhodnocoval.
        <SourceLink id="DOI_10_5194_tc_11_2847_2017"> (Musselman a kol. 2017, obr. 3–4)</SourceLink>
      </p>
      <p>
        Co by se ve stejných třech sezonách změnilo při vyšší teplotě? Autoři v modelu postupně zvýšili teplotu vzduchu o 1 až 6 °C a odpovídajícím způsobem upravili příchozí tepelné záření.
        Množství srážek ponechali beze změny. Zachovali také relativní vlhkost, tedy míru nasycení vzduchu vodní párou při dané teplotě.
        Za každý stupeň oteplení klesl ve výpočtu roční objem vody z tání v celém povodí přibližně o <strong>9,3 až 10,8 %</strong>. Rozpětí vyjadřuje rozdíl mezi výsledky pro tři výchozí sezony.
        <SourceLink id="DOI_10_5194_tc_11_2847_2017"> (Musselman a kol. 2017, obr. 7 a doplňková tabulka S4)</SourceLink>
      </p>
      <p>
        V teplejších variantách přibylo deště na úkor sněžení a část tání se přesunula na časnější jaro, kdy sníh dostává méně sluneční energie.
        Sníh tak mohl za den tát pomaleji, a přesto zmizet dřív, protože ho do jara zbylo méně.
        <SourceLink id="DOI_10_5194_tc_11_2847_2017"> (Musselman a kol. 2017, oddíl 4.2)</SourceLink>{" "}
        Stačí porovnat dvě zvolené zásoby bez dalšího sněžení. Odtéká-li každý den 10 mm vody, zásoba 200 mm vydrží 20 dní. Zásoba 80 mm při pomalejším odtoku 8 mm denně vydrží jen 10 dní.
      </p>

      <h4 id="test-prisouzeni" className={styles.testHeading}>Test 4 · Dlouhodobé změny povodí</h4>
      <p>
        Pokus v horách ukazuje, jak sníh reaguje na zadané oteplení. Jinou otázku si položili Alexander Gottlieb a Justin Mankin při rozboru 169 povodí severní polokoule. Jak se v březnové zásobě sněhu projevil vliv člověka na klima?
        Pro roky 1981–2020 spojili <Link href={`${observation}#zasoba-v-povodich`}>údaje o březnové zásobě vody ve sněhu</Link> s teplotou a srážkami od listopadu do března.
        Z minulých zim tak odvodili vztah mezi počasím a březnovou zásobou. Získali 120 variant odhadu podle toho, které soubory údajů použili. Jednotlivé varianty část dat sdílejí.
        <SourceLink id="DOI_10_1038_s41586_023_06794_y"> (Gottlieb a Mankin 2024)</SourceLink>
      </p>
      <p>
        Odhady zásoby ověřili na 2 961 stanicích, které k odvození vztahu nepoužili. Potom srovnali klimatické simulace zahrnující přírodní i lidské vlivy se simulacemi, v nichž působily jen přírodní vlivy.
        Rozdíl teplot mezi těmito simulacemi odečetli od zaznamenaných teplot a srážky přepočítali podle poměru simulovaných úhrnů.
        Z takto upraveného počasí znovu vypočítali březnovou zásobu. Rozdíl oproti výpočtu se skutečným počasím jim dal odhad, o kolik lidský vliv zásobu změnil.
        <SourceLink id="DOI_10_1038_s41586_023_06794_y"> (Gottlieb a Mankin 2024, metody)</SourceLink>
      </p>
      <p>
        Podle kritérií studie bylo možné odlišit lidský vliv od přirozeného kolísání ve <strong>31 ze 169 povodí</strong>.
        Tento počet zahrnuje úbytky sněhu v oblastech s mírnější zimou i přírůstky v části chladné Arktidy. Pokud i po oteplení srážky padají většinou jako sníh, může jich přibýt natolik, že na konci zimy leží ve sněhu více vody.
        <SourceLink id="DOI_10_1038_s41586_023_06794_y"> (Gottlieb a Mankin 2024, obr. 3)</SourceLink>
      </p>
    </HypothesisStory>

    <h2 id="mechanismus">Kdy voda opustí sněhovou pokrývku?</h2>
    <p>
      V horách západní Severní Ameriky ubylo na jaře vody ve sněhu i v oblastech, kde zimních srážek přibylo.
      Podle staničních hlášení s oteplením častěji prší tam, kde se v zimě běžně střídá déšť se sněhem. Jakmile sníh leží na zemi, záleží také na tom, kolik energie dostane a kdy z něj voda odteče, jak ukázal pokus v povodí Kaweah.
      <SourceLink id="DOI_10_5194_tc_11_2847_2017"> (Musselman a kol. 2017)</SourceLink>{" "}
      Zásoba <InlineMath tex="S" /> proto zahrnuje led i vodu zachycenou mezi sněhovými zrny.
      Její změnu za zvolené období na stejném místě lze spočítat v milimetrech vody.
    </p>
    <Equation tex={String.raw`\Delta S = P - R - E + D`} />
    <p>
      K zásobě přičteme vodu, která do pokrývky vstoupí při sněžení nebo dešti (<InlineMath tex="P" />), a odečteme vodu, která z něj odteče (<InlineMath tex="R" />).
      Při tání vzniká kapalná voda, která může zůstat mezi zrny a při ochlazení znovu zmrznout. Dokud zůstává ve sněhu, započítává se dál do zásoby.
      Voda může unikat také do vzduchu v podobě páry (<InlineMath tex="E" />). Když se naopak vodní pára ve sněhu ukládá, má tento člen záporné znaménko.
      Vítr může sníh přinést z okolí nebo ho odnést. Jeho čistý přínos (<InlineMath tex="D" />) je kladný při přísunu a záporný při odnosu.
      <SourceLink id="DOI_10_5194_tc_11_2847_2017"> (Musselman a kol. 2017, popis modelu)</SourceLink>
    </p>
    <p>
      Při stejně rychlém úbytku vody se půda nejdřív odkryje tam, kde na konci zimy leželo nejméně sněhu.
      Zasněžená plocha se tak může rychle zmenšovat, i když jinde zbývá sněhu dost. V dubnu 2025 byla hmotnost sněhu v severoamerické i euroasijské Arktidě nad dubnovým průměrem let 1991–2020, v červnu už byla zasněžená plocha pod svým červnovým průměrem.
      Dřívější ústup je patrný i v týdenních mapách. V letech 2010–2024 začínalo jarní tání přibližně o jeden až dva týdny dříve než v letech 1967–1981.
      <SourceLink id="DOI_10_25923_cfhv_c239"> (Mudryk a kol. 2025)</SourceLink>
    </p>

    <h2 id="nejistoty">Jak přesně známe příčiny místního úbytku sněhu?</h2>
    <p id="dalsi-overeni">
      Z arktických map lze vyčíst, kdy sníh ustupuje. K určení toho, jakou část úbytku způsobilo méně sněžení a jakou jarní tání, potřebujeme v téže oblasti měřit množství deště i sněhu, vodní hodnotu pokrývky, záření a odtok.
      Kdyby na nových stanicích s těmito měřeními model opakovaně předpovídal úbytek, zatímco by sněhová zásoba rostla, bylo by třeba prověřit, zda model správně počítá přísun sněhu, energii při tání i dobu, po kterou se voda ve sněhu drží.
    </p>
    <details className="article-details">
      <summary>Co ovlivňuje přesnost měření a výpočtů</summary>
      <p>
        Horský sněhový profil zachycuje jen místo odběru. Za desítky let tu může vyrůst les nebo se může posunout termín měření, takže se sníh při jarní oblevě odebírá v jiné fázi tání.
        Družice sice zachytí velkou plochu, pod korunami stromů a v členitém terénu však hůře rozeznávají, kde sníh ještě leží.
        Když se měření výšky, vodní hodnoty a plochy rozcházejí, může porovnání s terénními odběry ukázat, která část krajiny je v datech málo zastoupena.
        <SourceLink id="DOI_10_1175_bams_86_1_39"> (Mote a kol. 2005)</SourceLink>
      </p>
      <p>
        Model pro povodí Kaweah rozlišoval déšť a sníh pevnou hranicí 1,2 °C a nezahrnoval přenos sněhu větrem.
        Skutečná hranice se přitom liší podle místních podmínek a vítr může na některých svazích sníh hromadit a jiné obnažit.
        Autoři při výpočtu chyby zásoby odmocnili průměr čtverců rozdílů mezi výpočtem a měřením. Větší odchylky tak měly ve výsledku větší váhu.
        Veřejné tabulky dokládají výsledek pro tři zkoumané sezony. K zopakování celého výpočtu je třeba vyžádat si od autorů také úplné modelové vstupy a výstupy.
        <SourceLink id="DOI_10_5194_tc_11_2847_2017"> (Musselman a kol. 2017)</SourceLink>
      </p>
      <p>
        Při rozboru 169 povodí mohly některé stanice využité ke kontrole vstoupit i do výchozích map sněhu nebo počasí.
        Taková shoda pomáhá ověřit výpočet, může však skrývat chybu společnou oběma souborům. Odhad lidského příspěvku navíc závisí na tom, jak dobře klimatické modely vystihují teplotu a srážky v jednotlivých povodích.
        V povodích, kde se lidský vliv nepodařilo odlišit od přirozeného kolísání, zůstává jeho velikost otevřená.
        <SourceLink id="DOI_10_1038_s41586_023_06794_y"> (Gottlieb a Mankin 2024)</SourceLink>
      </p>
    </details>

    <div className="article-observation-summary">
      <p className="eyebrow">Závěr</p>
      <p>
        Když i po oteplení dost mrzne, může díky vydatnějšímu sněžení přibýt vody v zimní zásobě. V mírnější zimě může být srážek také víc, ale častěji prší a sněhu do jara zbude méně.
        Menší zásoba může odtát dřív i při pomalejším denním tání, jak ukázal výpočet ověřený měřením ve třech sezonách v kalifornských horách.
        Záleží také na tom, kdy tání začne. V Arktidě tak může být už v červnu velká část krajiny bez sněhu i po zimě s nadprůměrnou zásobou.
      </p>
    </div>

    <h2 id="prameny">Prameny a data</h2>
    <div className="article-source-groups">
      <section><h3>Fyzika a přímé zkoušky</h3><ul>
        <li><SourceLink id="DOI_10_6028_jres_023_043">Osborne, 1939: Heat of fusion of ice. Laboratorní určení tepla tání.</SourceLink></li>
        <li><SourceLink id="DOI_10_1175_bams_86_1_39">Mote a kol., 2005: Declining Mountain Snowpack in Western North America.</SourceLink></li>
        <li><SourceLink id="DOI_10_1038_s41467_018_03629_7">Jennings a kol., 2018: Spatial variation of the rain–snow temperature threshold across the Northern Hemisphere.</SourceLink></li>
        <li><SourceLink id="DOI_10_5194_tc_11_2847_2017">Musselman a kol., 2017: Snowmelt response to simulated warming across a large elevation gradient, southern Sierra Nevada, California.</SourceLink></li>
      </ul></section>
      <section><h3>Dlouhodobé změny a příčiny</h3><ul>
        <li><SourceLink id="DOI_10_25923_cfhv_c239">Mudryk a kol., 2025: Terrestrial Snow Cover. Arktická plocha a hmotnost sněhu.</SourceLink></li>
        <li><SourceLink id="DOI_10_1038_s41586_023_06794_y">Gottlieb a Mankin, 2024: Evidence of human influence on Northern Hemisphere snow loss.</SourceLink></li>
      </ul></section>
      <section><h3>Samostatná kontrola</h3><ul>
        <li><SourceLink id="DOI_10_5061_dryad_c9h35">Jennings a kol., 2019: staniční údaje, vypočtené teplotní prahy a kód v Dryadu.</SourceLink></li>
        <li><SourceLink id="MEDIA_SNOW_COVER_MECHANISMS_2026">Přepis regionálních výsledků, výpočty, schémata a návod k použití původních dat.</SourceLink></li>
        <li><Link href={`${observation}#horske-snehove-zasoby`}>Pozorování: výběr stanic, zpracování a meze měření sněhu.</Link></li>
      </ul></section>
    </div>
  </div></article>;
}
