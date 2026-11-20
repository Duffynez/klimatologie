import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Equation, InlineMath } from "./Equation";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./IceSheetMechanismsArticle.module.css";

const media = "/media/ledove-prikrovy-mechanismy";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "povrchova-bilance",
    name: "Změny na povrchu stačí k vysvětlení úbytku",
    prediction: "Pokud do moře každý rok odchází stejné množství pevného ledu, měl by výpočet ze sněžení a odtoku vody vystihnout sezonní kolísání i velikost víceletého úbytku.",
    test: "V jednom grónském povodí porovnáme vypočtený odtok vody s měřením řeky. Pro celé Grónsko pak porovnáme přírůstky a ztráty na povrchu s celkovou změnou hmotnosti.",
    observation: "Odtok řeky odpovídal výpočtu v mezích nejistoty. Změny na povrchu vysvětlily téměř celé sezonní kolísání hmotnosti Grónska, za roky 2000–2008 asi polovinu celkové ztráty.",
    verdict: "Povrch vysvětluje část úbytku",
    explanation: "Zbývající část víceleté ztráty Grónska v tomto období připadala na rychlejší odtok pevného ledu.",
    state: "insufficient",
  },
  {
    id: "povrch-a-odtok-ledu",
    name: "Mění se také množství ledu, které odchází do moře",
    prediction: "Pokud plovoucí šelf brzdí přítok ledu z pevniny, ledovce po ztrátě této opory zrychlí více než sousední ledovce, kterým šelf zůstal.",
    test: "Po rozpadu šelfu Larsen B porovnáme obě skupiny ledovců. U jiných antarktických šelfů zjišťujeme, zda jejich ztenčování vysvětlí změny sněhu a přítoku ledu.",
    observation: "Čtyři ledovce po ztrátě šelfu zrychlily na dvojnásobek až šestinásobek. U hluboko ponořených šelfů ukázaly změny tloušťky a přítoku na tání zespodu.",
    verdict: "Měření potvrzují vliv šelfu na tok ledu",
    explanation: "U Larsen B rozhodl rozdíl mezi ledovci se zachovanou a ztracenou oporou. Velikost tohoto účinku závisí na tom, kde se šelf opírá o břehy nebo o dno.",
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
    <figcaption>{children} Vlastní kvalitativní schéma Klimatologie.eu připravené s pomocí AI, CC BY 4.0.
      Rozměry ani délky šipek nepředstavují měřená množství. <a href={`${media}/podklady.txt`}>Prameny a původ grafiky</a>.
    </figcaption>
  </figure>;
}

export function IceSheetMechanismsArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Kudy mizí led z pevniny?</h2>
    <p className="article-prose__intro">
      Grónský a antarktický ledový příkrov ztratily v letech 1979–2023 dohromady <strong>11 309 ± 565 gigatun ledu</strong>.
      Gigatuna je miliarda tun. Číslo za značkou ± udává nejistotu společného odhadu.
      <Link href="/pozorovani/nestabilita-prikrovu/"> Měření obou příkrovů</Link> ukazují, že rychlost úbytku se měnila v čase a lišila se i mezi oblastmi.
      Kolik hmoty z pevniny odnesla voda z tání a kolik jí odtud odešlo v podobě pevného ledu?
      <SourceLink id="DOI_10_1038_s41597_026_08088_0"> (Otosaka a kol. 2026)</SourceLink>
    </p>
    <p>
      Ledový příkrov je mohutná vrstva ledu, která pokrývá pevninu a doplňuje se hlavně sněžením. Z této zásoby ubývá, když voda z tání odteče.
      K pobřeží se ale pohybuje i samotný led. Vlastní tíhou se pomalu deformuje a místy klouže po podloží.
      Tam, kde se odpoutá ode dna a pokračuje do moře jako plovoucí deska, vytváří <strong>ledový šelf</strong>.
      Led, který tuto hranici překročil, už opustil pevninskou část příkrovu.
    </p>

    <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="ice-sheet-hypotheses-caption"
      context={<p>Rozdílu mezi tím, kolik hmoty na povrchu přibude a kolik jí povrch ztratí, říkáme povrchová bilance. V obou vysvětleních zároveň proudí led z pevniny do moře. Liší se v tom, zda se množství takto odcházejícího ledu v čase mění.</p>}
      caption={<>Stálý odtok pevného ledu slouží jako základ pro porovnání. Ve studiích pro Grónsko vědci zjišťovali velikost obou příspěvků současně.</>} />

    <h2 id="pribehy">Co ukázala měření v Grónsku a u antarktických šelfů</h2>
    <HypothesisStory id="povrchova-bilance" number={1} title="Změny na povrchu stačí k vysvětlení úbytku">
      <p>
        Když v létě roztaje vrstva sněhu, část vody se vsákne do chladnějšího sněhu pod ní a znovu zamrzne.
        Voda tak zůstane součástí příkrovu. K určení povrchové ztráty proto potřebujeme zjistit, kolik vody při tání vzniklo a jak velká část z ní odtekla.
        <SourceLink id="DOI_10_5194_tc_6_199_2012"> (van As a kol. 2012)</SourceLink>
      </p>
      <p>
        V roce 2009 tým Michiela van den Broekeho porovnal děje na povrchu s celkovou změnou hmotnosti Grónska.
        Následující mimořádně teplé léto se v západním Grónsku naskytla příležitost ověřit samotný výpočet odtoku vody.
        Vodu z části příkrovu tam odvádí řeka Watson. Kolik jí podle výpočtu mělo odtéct z tajícího povrchu, mohli vědci porovnat s tím, kolik vody proteklo řekou.
        <SourceLink id="DOI_10_1126_science_1178176"> (van den Broeke a kol. 2009)</SourceLink>
        <SourceLink id="DOI_10_5194_tc_6_199_2012"> (van As a kol. 2012)</SourceLink>
      </p>
      <Graphic name="povrchova-bilance" alt="Sněžení přidává hmotu. Energie ze záření a vzduchu taví povrch. Část vody znovu zamrzá, zbytek odtéká do řeky. Porovnání povrchové bilance a nezměněného odtoku pevného ledu s celkovou změnou hmotnosti ověřuje, zda samotný povrch stačí."
        tests={[
          { title: "Test 1 · Výpočet tání a měření řeky", prediction: "Po odečtení vody zadržené ve sněhu má vypočtený odtok odpovídat množství vody v řece.", test: "Odtok vypočtený z počasí a odrazivosti povrchu porovnáme s průtokem řeky Watson.", result: "V roce 2010 vyšel výpočet pro povodí vyšší než odhad z řeky. Rozmezí nejistot se překrývají." },
          { title: "Test 2 · Celková hmotnost Grónska", prediction: "Při stálém odtoku ledu má změna na povrchu vysvětlit celý víceletý úbytek.", test: "Spočítáme příspěvek povrchu a změnu toku ledu do moře. Výsledek srovnáme s družicovým měřením gravitace.", result: "V letech 2000–2008 připadala přibližně polovina ztráty na změnu povrchové bilance a polovina na změnu odtoku ledu." },
        ]}>
        Dvě různé úrovně kontroly podle <SourceLink id="DOI_10_5194_tc_6_199_2012">van Ase a kol. (2012)</SourceLink> a <SourceLink id="DOI_10_1126_science_1178176">van den Broekeho a kol. (2009)</SourceLink>.
        Zelené šipky ukazují přísun sněhu a pohyb ledu, modré vodu a oranžová přísun energie.
      </Graphic>

      <h4 id="test-reka" className={styles.testHeading}>Test 1 · Výpočet tání a měření řeky</h4>
      <p>
        Tým Dirka van Ase nejprve určil, kolik energie dostal povrch příkrovu v okolí Kangerlussuaqu. Šest stanic měřilo záření, teplotu, vlhkost a vítr.
        Z těchto údajů tým vypočítal, kolik energie povrch získal nebo ztratil zářením a výměnou tepla se vzduchem. Družicové měření odrazivosti ověřené na stanicích ukázalo,
        jaká část slunečního záření se odrážela i na ostatních místech povodí. Jakmile se povrch ohřeje na bod tání, může další dodaná energie tavit sníh a led.
        Tým z ní vypočítal množství vzniklé vody. Po odečtení části, která ve sněhu znovu zamrzla, získal odhad odtoku z povodí.
        <SourceLink id="DOI_10_5194_tc_6_199_2012"> (van As a kol. 2012, oddíl 2)</SourceLink>
      </p>
      <p>
        Za rok 2010 tak mělo z povodí odtéct <strong>6,6 ± 1,0 km³ vody</strong>. Z měření hloubky řeky Watson a rychlosti jejího proudu vyšlo
        <strong> 5,3 ± 1,1 km³</strong>. Říční měření pokrývalo jen část sezony a hranici povodí pod ledem bylo možné určit jen přibližně.
        Rozmezí obou odhadů se překrývala. Výpočet zachytil i to, jak se průtok během sezony měnil.
        <Link href="/pozorovani/nestabilita-prikrovu/#povrchovy-odtok"> Měření na řece Watson</Link> tak podpořilo odhad ztráty vody v tomto povodí.
        <SourceLink id="DOI_10_5194_tc_6_199_2012"> (van As a kol. 2012, obr. 8 a závěr)</SourceLink>
      </p>

      <h4 id="test-gronska-bilance" className={styles.testHeading}>Test 2 · Celková hmotnost Grónska</h4>
      <p>
        Pro celé Grónsko van den Broekeho tým spočítal přírůstky a ztráty na povrchu pomocí modelu ovzduší a sněhové pokrývky. Výsledky srovnal s 265 terénními měřeními.
        Kolik pevného ledu odcházelo do moře, určil jiným postupem. Pro 38 povodí pokrývajících asi 90 % příkrovu využil mimo jiné <Link href="/metody/radarova-interferometrie-a-sledovani-pohybu-povrchu/#tok-ledu">měření pohybu ledu</Link>.
        Z tloušťky ledu podél čáry vedené napříč ledovcem lze určit plochu jeho svislého průřezu. Vynásobíme-li ji průměrnou rychlostí proudění kolmo k řezu, dostaneme objem ledu, který jím za jednotku času proteče.
        Z objemu a hustoty ledu pak vypočteme, jaká hmotnost za tuto dobu prošla směrem k moři.
        <SourceLink id="DOI_10_1126_science_1178176"> (van den Broeke a kol. 2009, metody)</SourceLink>
      </p>
      <p>
        Celkovou změnu hmotnosti šlo v letech 2003–2008 ověřit ještě jinak. Družice mise GRACE (Gravity Recovery and Climate Experiment)
        sledovaly změny zemské přitažlivosti, které provázejí přesuny hmoty. Z gravitace tak vědci odvodili změnu hmotnosti celého příkrovu.
        S tímto nezávislým odhadem se dobře shodoval rozdíl mezi povrchovou bilancí a odtokem pevného ledu.
      </p>
      <p>
        Téměř celé kolísání hmotnosti mezi zimou a létem vystihly změny na povrchu.
        Za celé období 2000–2008 však Grónsko ztratilo přibližně <strong>1 500 gigatun</strong>. Zhruba polovinu této ztráty tým připsal změně povrchové bilance a druhou polovinu zvýšenému odtoku pevného ledu.
        <SourceLink id="DOI_10_1126_science_1178176"> (van den Broeke a kol. 2009, obr. 1–2)</SourceLink>
      </p>
    </HypothesisStory>

    <HypothesisStory id="povrch-a-odtok-ledu" number={2} title="Mění se také množství ledu, které odchází do moře">
      <p>
        Jak může zrychlit ledovec, jehož led zůstává zmrzlý? John Glen v roce 1952 stlačoval vzorky ledu při teplotě −1,5 °C.
        Pod stálým zatížením led postupně měnil tvar. Čím větší síla působila na stejnou plochu vzorku, tím rychleji se deformoval.
        Tento vztah pomohl vysvětlit, proč ledovec vlastní tíhou pomalu teče po svahu. Jeho rychlost závisí také na tom, co pohybu klade odpor.
        <SourceLink id="DOI_10_3189_s0022143000034067"> (Glen 1952)</SourceLink>
      </p>
      <p>
        Jednu takovou překážku tvoří samotný šelf. Robert Thomas v roce 1973 porovnal výpočty proudění s pozorováním čtyř šelfů.
        Zatímco šelf s volnými okraji se může rozpínat do stran, v úzkém zálivu ho brzdí tření o břehy. Místy se šelf také opírá o vyvýšené mořské dno.
        Tento odpor se přes spojenou masu ledu přenáší až na ledovec na pevnině. Pokud jej šelf brzdí, měl by ledovec po rozpadu šelfu zrychlit.
        Sousední ledovce, před nimiž šelf zůstane, poskytují možnost tuto předpověď ověřit.
        <SourceLink id="DOI_10_3189_s002214300002270x"> (Thomas 1973)</SourceLink>
      </p>
      <Graphic name="povrch-a-odtok-ledu" alt="Ledovec spočívající na podloží přechází přes linii ukotvení do plovoucího šelfu. Kontakty šelfu s boky zálivu a podmořským vyvýšením přenášejí odpor proti toku. Rozpad nebo ztenčení může tuto oporu zeslabit. Voda pod šelfem jej může tavit zespodu."
        tests={[
          { title: "Test 3 · Ledovce po rozpadu Larsen B", prediction: "Ledovce po ztrátě opory zrychlí více než sousední ledovce za zachovaným šelfem.", test: "Na snímcích Landsatu sledujeme posun ledu před rozpadem a po něm. Výšku povrchu měří družicový laser.", result: "Čtyři ledovce po ztrátě šelfu zrychlily na dvojnásobek až šestinásobek. U sousedních dvou se rychlost změnila málo." },
          { title: "Test 4 · Ztenčování šelfů zespodu", prediction: "Tání zespodu může šelf ztenčovat i při rostoucím přítoku ledu z pevniny.", test: "Z měření výšky oddělíme změny sněhu. Zbývající změnu porovnáme s přítokem ledu a pohybem čela.", result: "U části hluboko ponořených šelfů vysvětlovalo pozorovaný úbytek tání na spodní straně." },
        ]}>
        Mechanická opora a přístup oceánské vody podle <SourceLink id="DOI_10_3189_s002214300002270x">Thomase (1973)</SourceLink>,
        <SourceLink id="DOI_10_1029_2004gl020670"> Scambose a kol. (2004)</SourceLink> a <SourceLink id="DOI_10_1038_nature10968">Pritcharda a kol. (2012)</SourceLink>.
        Jde o dva možné způsoby oslabení šelfu. Schéma nepřisuzuje rozpad Larsen B výhradně oceánskému tání.
        Zelené šipky ukazují pohyb ledu, fialová odpor proti toku a oranžová přísun oceánského tepla.
      </Graphic>

      <h4 id="test-larsen" className={styles.testHeading}>Test 3 · Ledovce po rozpadu Larsen&nbsp;B</h4>
      <p>
        V roce 2002 se u Antarktického poloostrova rozpadla velká část šelfu Larsen B. Několik ledovců tím o šelf přišlo, před dvěma sousedními
        ledovci se jeho jižní část zachovala. Obě skupiny prošly stejnými ročními obdobími. Pokud rozhodovala ztráta opory, měl mezi skupinami vzniknout rozdíl v rychlosti.
        Ted Scambos a kolegové jej hledali na pěti snímcích družice Landsat z let 2000–2003. Určili, jak daleko se mezi snímky posunuly rozpoznatelné znaky na ledě.
        Podělením této vzdálenosti časem mezi snímky získali rychlost pohybu povrchu před rozpadem šelfu i po něm.
        <SourceLink id="DOI_10_1029_2004gl020670"> (Scambos a kol. 2004, metody a obr. 1–2)</SourceLink>
      </p>
      <p>
        Na ledovcích Hektoria, Green, Jorum a Crane, které o šelf přišly, vzrostla rychlost v měřených úsecích <strong>na dvojnásobek až šestinásobek</strong>.
        U ledovců Flask a Leppard, před nimiž šelf zůstal, se rychlost změnila jen málo. Zrychlování uvolněných ledovců pokračovalo i přes zimu, tedy i mimo sezonu povrchového tání.
        <Link href="/pozorovani/nestabilita-prikrovu/#larsen-b"> Laserová měření výšky</Link> navíc zachytila na Hektorii místní pokles povrchu až o <strong>38 ± 6 metrů</strong> přibližně za půl roku v roce 2003.
        <SourceLink id="DOI_10_1029_2004gl020670"> (Scambos a kol. 2004, výsledky)</SourceLink>
      </p>
      <p>
        Když z určité části ledovce odtéká více ledu, než přitéká shora a přibývá sněžením, led se tam ztenčuje.
        Pokles povrchu Hektorie tedy odpovídá tomu, že po ztrátě opory led z tohoto úseku rychleji odcházel.
        Sousední ledovce za zachovaným šelfem prošly stejnou zimou, ale podobné zrychlení se u nich neobjevilo. To spojuje změnu toku se ztrátou šelfu.
        Příčina samotného rozpadu šelfu zůstává samostatnou otázkou.
        <SourceLink id="DOI_10_1029_2004gl020670"> (Scambos a kol. 2004, diskuse)</SourceLink>
      </p>

      <h4 id="test-spodek-selfu" className={styles.testHeading}>Test 4 · Ztenčování šelfů zespodu</h4>
      <p>
        Šelf může ztrácet tloušťku i tehdy, když se jeho čelo nerozpadá. Pokud led taje na spodní straně, plovoucí šelf se ztenčí a jeho povrch se přiblíží hladině.
        Výšku povrchu ovšem mění i sníh. Když méně sněží nebo když se starší sníh působením vlastní tíhy zhutní, může povrch klesnout také.
      </p>
      <p>
        Tým Hamishe Pritcharda proto spojil přibližně 4,5 milionu <Link href="/pozorovani/nestabilita-prikrovu/#ztencovani-selfu">měření laserového výškoměru ICESat</Link> z let 2003–2008
        s modelem sněhu a firnu. Firn je starší sníh, v němž mezi zrny stále zůstává vzduch. Model umožnil oddělit část výškové změny způsobenou sněžením a zhutňováním.
        Nad hladinu vyčnívá jen část plovoucího ledu. Z její výšky lze při známé hustotě ledu a mořské vody určit, jak silná vrstva pod ní musí být ponořená, aby voda led nadnášela.
        Tímto převodem autoři <Link href="/metody/radarova-a-laserova-altimetrie/#pevninsky-led">odvodili změnu celé tloušťky šelfu</Link>.
        <SourceLink id="DOI_10_1038_nature10968"> (Pritchard a kol. 2012, metody)</SourceLink>
      </p>
      <p>
        U některých šelfů v Amundsenově a Bellingshausenově moři vyšlo ztenčování až o <strong>6,8 metru za rok</strong>.
        Z pevniny do nich přitom přitékalo více ledu a jejich čela často zůstávala na místě nebo postupovala do moře.
        Když autoři vzali v úvahu změny sněhu, přítok ledu i pohyb čela, připsali zbývající úbytek hlavně tání na spodní straně. Tento výklad podpořilo i rozmístění ztrát.
        Výrazně se ztenčovaly hluboko ponořené šelfy v místech, kde prohlubně v mořském dně umožňují přístup teplejší vody.
        <SourceLink id="DOI_10_1038_nature10968"> (Pritchard a kol. 2012, obr. 1–4)</SourceLink>
      </p>
      <p>
        Tento odhad spodního tání lze kontrolovat už u jeho prvního kroku. V <SourceLink id="DOI_10_1594_pangaea_775984">datovém souboru PANGAEA</SourceLink>
        jsou k dispozici výšky po opravách i změny firnu vypočtené modelem. Lze tak posoudit, jak velkou část družicí zjištěného poklesu povrchu autoři připsali sněhu
        a z jaké části odvodili ztenčení ledu.
      </p>
    </HypothesisStory>

    <h2 id="jak-mechanismus-funguje">Co určuje ztrátu ledu na pevnině</h2>
    <p>
      V Grónsku by při stálém odtoku pevného ledu vyšly ztráty v letech 2000–2008 asi poloviční oproti tomu, co ukázala měření.
      U Larsen B se zase rychlost ledovců změnila podle toho, zda je ještě brzdil šelf. K vysvětlení celého úbytku proto potřebujeme vědět, jak se za stejné období změnila zásoba ledu působením dějů na povrchu a kolik pevného ledu přešlo z pevniny do moře.
    </p>

    <h3 id="bilance">Jak se počítá změna hmotnosti příkrovu</h3>
    <p>
      V následující rovnici označuje <InlineMath tex="M" /> hmotnost ledu spočívajícího na podloží a <InlineMath tex={String.raw`\frac{\mathrm{d}M}{\mathrm{d}t}`} /> rychlost, s jakou se tato hmotnost mění.
      Začneme povrchovou bilancí <InlineMath tex="B_s" />, která udává čistý přírůstek nebo úbytek na povrchu za jednotku času. Od ní odečteme odtok pevného ledu <InlineMath tex="D" />,
      tedy hmotnost, která za tutéž dobu přejde z pevniny do moře. Samostatný člen <InlineMath tex="B_b" /> zachycuje ještě tání ledu v kontaktu s podložím. Při tání je kladný, při přimrzání záporný.
      Všechny členy bilance vyjadřujeme například v gigatunách za rok. Vyjde-li levá strana záporná, příkrov hmotu ztrácí.
      <SourceLink id="DOI_10_1126_science_1178176"> (van den Broeke a kol. 2009, bilance s malým zanedbaným bazálním členem)</SourceLink>
    </p>
    <Equation tex={String.raw`\frac{\mathrm{d}M}{\mathrm{d}t}=B_s-D-B_b`} />
    <p>
      Kladná povrchová bilance znamená, že se zásoba ledu díky dějům na povrchu zvětšila. I v takovém roce může celý příkrov ztratit hmotu, jestliže do moře odteče více pevného ledu,
      než na povrchu přibylo. Pro výpočet povrchové bilance je vedle sněžení důležité, kolik vody z tání skutečně odteklo.
      Voda může ve sněhu zůstat i znovu zamrznout. Menší ztráty vznikají také přímým přechodem ledu na vodní páru.
      I při stejné rozloze letního tání proto může být roční povrchová bilance různá.
      <SourceLink id="DOI_10_5194_tc_6_199_2012"> (van As a kol. 2012)</SourceLink>
    </p>

    <h3 id="opora-selfu">Jak může tání plovoucího šelfu urychlit led na pevnině</h3>
    <p>
      O tom, jak silně šelf přidržuje ledovec, rozhoduje místo jeho kontaktu s okolím. Pokud se šelf ztenčí a přestane se opírat o vyvýšené dno,
      zeslábne odpor, který brzdil přítok ledu z pevniny. Rozpad šelfu sevřeného v zálivu může podobně uvolnit led, jehož pohyb přibrzďovalo tření o břehy.
      Ztráta stejně velké plochy na volně plovoucím okraji proto může mít na rychlost ledovce mnohem menší vliv.
      <SourceLink id="DOI_10_3189_s002214300002270x"> (Thomas 1973)</SourceLink>
    </p>
    <p>
      Pro výpočet úbytku na pevnině záleží na okamžiku, kdy se led odpoutal od podloží a začal plavat. Tehdy už přešel do moře a může přispívat ke vzestupu hladiny, i když je dosud pevný.
      Jestliže pak roztaje na spodní straně šelfu, změní se hmotnost plovoucího ledu. V bilanci pevninské části se tání šelfu může projevit nepřímo.
      Když šelf přestane ledovec tolik brzdit, může z pevniny do moře začít proudit více ledu.
      <SourceLink id="DOI_10_1038_nature10968"> (Pritchard a kol. 2012)</SourceLink>
    </p>
    <p>
      Přísun tepla ke spodní straně šelfu závisí na tom, kudy k němu voda proudí. Prohlubně v mořském dně mohou vodu přivést až pod hluboko ponořený led.
      K tání pak stačí, aby byla teplejší než místní bod mrznutí mořské vody. Ten závisí na slanosti a tlaku, takže i voda chladnější než 0 °C může předávat ledu teplo.
      <SourceLink id="DOI_10_1038_nature10968"> (Pritchard a kol. 2012)</SourceLink>
    </p>

    <h3 id="linie-ukotveni">Proč může ústup po prohlubujícím se dně zesilovat</h3>
    <p>
      Místo, kde se led naposledy dotýká dna a začíná plavat, se nazývá <strong>linie ukotvení</strong>.
      Čelo šelfu, z něhož se odlamují ledové kry, leží dál v moři. Jestliže led u linie ukotvení ztenčí natolik, že ho voda nadzvedne, posune se tato hranice směrem do vnitrozemí.
    </p>
    <p>
      Záleží pak na tvaru dna. Pokud se směrem do vnitrozemí prohlubuje, v nové poloze dosáhne na dno jen silnější vrstva ledu. Silnější led více tlačí ve směru toku.
      Christian Schoof v roce 2007 vypočítal, že v takovém uspořádání přes linii ukotvení odtéká více ledu. Pokud přítok nestačí ztrátu vyrovnat, led dále ztenčí a hranice ustoupí znovu.
      Ústup tak může vytvářet podmínky pro své vlastní pokračování. Zda k tomu u konkrétního ledovce dojde, závisí také na tvaru jeho povodí a na opoře šelfu.
      <SourceLink id="DOI_10_1029_2006jf000664"> (Schoof 2007)</SourceLink>
    </p>

    <h3 id="velikost-prispevku">Jak se liší Grónsko a Antarktida</h3>
    <p>
      Mezinárodní projekt porovnání hmotnostních bilancí ledových příkrovů (Ice Sheet Mass Balance Intercomparison Exercise, IMBIE) spojil měření výšky, gravitace a toku ledu.
      Tabulka ukazuje průměrnou změnu hmotnosti za rok. Aby autoři rozlišili příspěvek povrchu a pohybu ledu, srovnali sledovaná léta s dřívějšími podmínkami.
      Povrchový a dynamický příspěvek v tabulce tedy vyjadřují <strong>odchylky od referenčních podmínek</strong>. Pro Grónsko slouží jako základ období 1960–1990, pro Antarktidu 1979–2008.
      Kladná povrchová odchylka znamená, že na povrchu zůstalo více hmoty než v referenčním období. Záporný dynamický příspěvek vyjadřuje dodatečnou ztrátu spojenou s tokem ledu.
      <SourceLink id="DOI_10_1038_s41597_026_08088_0"> (Otosaka a kol. 2026, metody a tab. 4)</SourceLink>
    </p>
    <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Příspěvky k hmotnostní bilanci, tabulka posuvná do stran">
      <table className={styles.budgetTable}>
        <caption>Průměrná roční změna hmotnosti a oba příspěvky v gigatunách za rok (Gt/rok). Číslo za ± je publikovaná nejistota odhadu.</caption>
        <thead><tr><th scope="col">Příkrov a období</th><th scope="col">Celková změna</th><th scope="col">Povrchová odchylka</th><th scope="col">Dynamická odchylka</th></tr></thead>
        <tbody>
          <tr><th scope="row">Grónsko 2010–2019</th><td>−264 ± 18</td><td>−141 ± 24</td><td>−123 ± 30</td></tr>
          <tr><th scope="row">Grónsko 2020–2023</th><td>−199 ± 29</td><td>−76 ± 43</td><td>−123 ± 52</td></tr>
          <tr><th scope="row">Antarktida 2010–2019</th><td>−202 ± 22</td><td>−32 ± 13</td><td>−170 ± 26</td></tr>
          <tr><th scope="row">Antarktida 2020–2023</th><td>−59 ± 73</td><td>+241 ± 14</td><td>−300 ± 75</td></tr>
        </tbody>
      </table>
    </div>
    <p>
      V Grónsku v letech 2010–2019 přispívaly k úbytku oba děje. V Antarktidě v letech 2020–2023 naopak povrchový příspěvek +241 gigatun za rok vyrovnal velkou část
      dynamické ztráty −300 gigatun za rok. I při tak velké dynamické ztrátě proto vychází celková změna blízko nuly. Odhad −59 ± 73 gigatun za rok v uvedeném rozmezí nejistoty připouští jak úbytek, tak malý přírůstek.
    </p>
    <p>
      Povrchovou odchylku vědci získali z regionálních modelů. Dynamický příspěvek určili jako <strong>zbytek po odečtení modelové povrchové odchylky od celkové bilance</strong>.
      Jeho hodnota i nejistota tak závisí na obou vstupech. Součet obou sloupců vychází shodně s celkovou bilancí už ze způsobu výpočtu. Samostatnou kontrolu toku umožňuje měření rychlosti a tloušťky ledu.
      <SourceLink id="DOI_10_1038_s41597_026_08088_0"> (Otosaka a kol. 2026)</SourceLink>
    </p>
    <p>
      <SourceLink id="DOI_10_5285_128c5e33_5224_4197_82f0_19dcc95b80a0">Veřejná data IMBIE</SourceLink> uvádějí průběh změn hmotnosti i nejistotu jednotlivých odhadů.
      Zde lze z <a href={`${media}/tabulka-4.csv`}>přepisu čtyř řádků</a> zopakovat <a href={`${media}/bilance.mjs`}>výpočet součtů příspěvků</a>.
      Nejistoty přebíráme z původní práce.
    </p>

    <p id="nejistoty">
      Jak přesně lze v jednotlivých povodích rozdělit úbytek mezi povrchové změny a odtok pevného ledu, závisí mimo jiné na odhadu změn sněhu a tloušťky proudícího ledu.
      U konkrétního šelfu by vysvětlení táním zespodu bylo třeba přehodnotit, kdyby úbytek tloušťky vysvětlila podrobnější měření sněhu nebo přítoku ledu.
      <SourceLink id="DOI_10_1038_s41597_026_08088_0"> (Otosaka a kol. 2026)</SourceLink>
      <SourceLink id="DOI_10_1029_2006jf000664"> (Schoof 2007)</SourceLink>
    </p>
    <details className="method-details">
      <summary>Co omezuje odhad ztrát a jak lze vysvětlení prověřit</summary>
      <p>
        Při převodu výšky povrchu na hmotnost je potřeba zohlednit, jak se měnila vrstva sněhu a firnu. Podobný model sněhu se používá také při rozdělování povrchového a dynamického příspěvku.
        Chyba modelu se proto může projevit v obou výsledcích. Gravitační měření zase zachycuje i pomalý pohyb hornin pod ledem, jehož vliv je třeba odečíst.
        U toku ledu ovlivňuje výsledek zejména odhad tloušťky. Posune-li se linie ukotvení, musíme započítat také led, který přišel o kontakt se dnem.
        Měření toku přes řez na původním místě tuto změnu samo nezachytí. Dopady těchto rozdílů rozvádí <Link href="/pozorovani/nestabilita-prikrovu/">porovnání měřicích postupů</Link>.
      </p>
      <p>
        U ledovce, který přišel o oporu, lze porovnat rychlost před rozpadem šelfu a po něm. Je třeba ponechat ledovci čas na odezvu a zjistit, zda se zároveň změnil i odpor na dně nebo po stranách.
        Pokud by zanikl kontakt, který ledovec prokazatelně brzdil, a tok by přesto zůstal stejný, vliv ztráty opory by byl v tomto místě menší, než vysvětlení předpokládá.
        Totéž by platilo, pokud by celou místní ztrátu vysvětlila nezávisle ověřená povrchová bilance.
      </p>
      <p>
        Schoofův výpočet ukazuje, za jakých podmínek může ústup linie ukotvení sám zesilovat.
        K odhadu budoucí rychlosti ústupu konkrétního příkrovu je navíc nutné znát tvar a odpor dna, rozložení šelfů i to, jak se budou měnit podmínky v atmosféře a přísun tepla z oceánu.
        <SourceLink id="DOI_10_1029_2006jf000664"> (Schoof 2007, předpoklady a diskuse)</SourceLink>
      </p>
    </details>

    <h2 id="shrnuti">Shrnutí</h2>
    <div className="method-conclusion">
      <p>
        Grónský a antarktický příkrov ztrácejí led, když sníh nestačí doplnit hmotu odcházející s vodou z tání a s ledem proudícím do moře.
        V Grónsku v letech 2000–2008 připadala na změny na povrchu přibližně polovina ztráty. Druhou polovinu vysvětlil větší odtok pevného ledu.
        V Antarktidě ukázal rozpad šelfu Larsen B, jak se odtok může zrychlit. Ledovce, kterým zmizela opora, zrychlily, zatímco sousední ledovce za zachovaným šelfem svou rychlost téměř nezměnily.
        Poměr obou příspěvků se mění podle místa i období.
      </p>
    </div>

    <h2 id="prameny">Prameny a veřejná data</h2>
    <ul className="article-resource-list">
      <li><SourceLink id="DOI_10_3189_s0022143000034067">Glen 1952: laboratorní deformace ledu pod bodem tání.</SourceLink> Úplná původní práce.</li>
      <li><SourceLink id="DOI_10_3189_s002214300002270x">Thomas 1973: tok šelfů a mechanický odpor jejich kontaktů.</SourceLink> Výpočty a porovnání s pozorováním.</li>
      <li><SourceLink id="DOI_10_1126_science_1178176">Van den Broeke a kol. 2009: rozdělení ztrát Grónska.</SourceLink> Bilance povrchu a odtoku porovnaná s GRACE.</li>
      <li><SourceLink id="DOI_10_5194_tc_6_199_2012">Van As a kol. 2012: tání a říční odtok v oblasti Kangerlussuaq.</SourceLink> Metody, nejistoty a porovnání v obr. 8.</li>
      <li><SourceLink id="DOI_10_1029_2004gl020670">Scambos a kol. 2004: zrychlení a ztenčení po rozpadu Larsen B.</SourceLink> Veřejný autorský rukopis v NASA NTRS.</li>
      <li><SourceLink id="DOI_10_1038_nature10968">Pritchard a kol. 2012: oddělení povrchových a spodních změn šelfů.</SourceLink> Veřejný plný text v univerzitním archivu spoluautora.</li>
      <li><SourceLink id="DOI_10_1594_pangaea_775984">Pritchard a kol. 2012: data ICESat a modelu firnu.</SourceLink> Veřejné tabulky a prostorové soubory, CC BY 3.0.</li>
      <li><SourceLink id="DOI_10_1029_2006jf000664">Schoof 2007: tok přes linii ukotvení a stabilita příkrovu.</SourceLink> Odvození a numerické ověření za uvedených předpokladů.</li>
      <li><SourceLink id="DOI_10_1038_s41597_026_08088_0">Otosaka a kol. 2026: současná syntéza hmotnostních bilancí.</SourceLink> Tabulka 4 a postup rozdělení příspěvků.</li>
      <li><SourceLink id="DOI_10_5285_128c5e33_5224_4197_82f0_19dcc95b80a0">IMBIE: veřejné časové řady do roku 2023.</SourceLink> Stahovatelné soubory v repozitáři British Antarctic Survey.</li>
    </ul>
  </div></article>;
}
