import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Equation, InlineMath } from "./Equation";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./GlacierMechanismsArticle.module.css";

const media = "/media/horske-ledovce-mechanismy";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "mene-snehu",
    name: "Úbytek způsobuje hlavně menší přísun sněhu",
    prediction: "Jestliže se letní ztráty téměř nemění, musí při zrychlujícím se úbytku ledu klesat zimní přírůstek. Větší zimní zásoba by naopak mohla vysvětlit někdejší postup ledovců v Alpách.",
    test: "Pro dva alpské ledovce porovnáme historický objem s výpočty pro různá množství zimních srážek. Na ledovci Sarennes porovnáme přímo měřené změny za zimu a za léto.",
    observation: "Větší sněžení pomohlo vysvětlit postup v letech 1760–1830. Na Sarennes po roce 1976 zimní přírůstek vzrostl. Po roce 1982 přibylo letních ztrát.",
    verdict: "Vliv sněhu doložený v Alpách, pro novější úbytek na Sarennes nedostatečný",
    explanation: "Ledovec Sarennes vstupoval do léta s větší zásobou sněhu než dříve. Menší zimní přírůstek proto jeho ztrátu v tomto období nevysvětluje.",
    state: "insufficient",
  },
  {
    id: "vetsi-tani",
    name: "V létě odtává víc sněhu a ledu než dříve",
    prediction: "Ledovec může ubývat rychleji i po vydatnějších zimách. Výpočet z energie dodané povrchu by měl vystihnout, kolik ledu v létě odtaje. U různě utvářených ledovců se změna může projevit na čele v různých letech.",
    test: "Na Morteratschi porovnáme tání vypočtené z počasí s úbytkem ledu u měřicích tyčí. V severních Kaskádách porovnáme změny podnebí s pohybem čel sousedních ledovců.",
    observation: "Výpočet zachytil velikost letního tání u stanice na Morteratschi. V Kaskádách se první zřetelná změna čela u 21 ledovců projevila za 4–16 let.",
    verdict: "Silnější tání vysvětluje novější úbytek na Sarennes",
    explanation: "Na Sarennes převážily letní ztráty i při vydatnějších zimách. Měření na Morteratschi ověřila vztah mezi dodanou energií a táním. Doba reakce čela závisí také na proudění a tvaru ledovce.",
    state: "supported",
  },
];

type TestPanel = { title: string; prediction: string; test: string; result: string };
function Graphic({ name, alt, tests, children }: { name: string; alt: string; tests: TestPanel[]; children: ReactNode }) {
  return <figure className={`article-figure ${styles.explanatoryFigure}`}>
    <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Schéma ledovce, na úzké obrazovce posuvné do stran">
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

export function GlacierMechanismsArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Hmotnost ledovce a poloha jeho čela</h2>
    <p className="article-prose__intro">
      Podle terénních a družicových měření ztrácely ledovce mimo hlavní ledové příkrovy Grónska a Antarktidy v letech 2000–2023 v průměru <strong>273 ± 16 gigatun ročně</strong>.
      Gigatuna je miliarda tun. Rozpětí od 257 do 289 miliard tun ročně vyjadřuje 95% interval spolehlivosti odhadu za celé toto období.
      <SourceLink id="DOI_10_1038_s41586_024_08545_z"> (GlaMBIE 2025)</SourceLink>{" "}
      Při <Link href="/pozorovani/ustup-ledovcu/#pozorovani">pozorování horských ledovců</Link> sledujeme také polohu čela, tedy místa, kde ledovec v údolí končí.
      Ledovec se může už několik let ztenčovat, než jeho čelo začne ustupovat.
    </p>
    <p>
      Ledovec přibývá na hmotnosti hlavně díky sněhu. Část, která přečká léto, se postupně zhutňuje a mění v led.
      Z ledovců končících na souši odchází hmota hlavně jako voda z tajícího sněhu a ledu.
      U čela v jezeře nebo v moři se navíc mohou odlamovat kusy ledu a led taje i pod hladinou.
      <SourceLink id="DOI_10_1017_9781009157896_011"> (IPCC 2021, oddíl 9.5.1)</SourceLink>
      {" "}Jak v terénu poznáme, zda ledovci ubylo zimního sněhu, nebo přes léto víc roztálo? A proč čelo na tuto změnu reaguje se zpožděním?
    </p>

    <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="glacier-hypotheses-caption"
      context={<p>Rozdíl mezi hmotou, kterou ledovec za rok získá a ztratí, nazýváme roční hmotnostní bilancí. Stejná roční ztráta může vzniknout po skromné zimě s obvyklým létem i po vydatné zimě s mimořádně silným táním. Obě možnosti rozlišíme, když změříme, co přibylo do konce zimy a co pak do konce léta ubylo.</p>}
      caption={<>Zimní sníh a letní tání určují změnu hmotnosti. O tom, kdy se pohne čelo, rozhoduje také přítok ledu z vyšších částí ledovce.</>} />

    <h2 id="pribehy">Co ukázaly zimní zásoby, letní tání a poloha čela</h2>
    <HypothesisStory id="mene-snehu" number={1} title="Úbytek způsobuje hlavně menší přísun sněhu">
      <p>
        Když se v zimě uloží méně sněhu, stačí stejné letní tání jako dříve, aby ledovec za celý rok ztratil víc hmoty.
        Pro porovnání zimy s létem potřebujeme společnou jednotku. Metr čerstvého sněhu je totiž mnohem lehčí než stejně silná vrstva ledu.
        Z tloušťky a hustoty vrstvy lze určit, jak vysoká vrstva vody by z ní vznikla po roztátí. Tomu říkáme{" "}
        <Link href="/metody/terenni-mereni-bilance-ledovcu/#vodni-ekvivalent">vodní ekvivalent</Link>. Jeden metr vody odpovídá jedné tuně na metr čtvereční.
      </p>
      <p>
        Takto měřili přírůstky a ztráty už od roku 1946 na švédském ledovci Storglaciären.
        Valter Schytt v roce 1962 uvedl oba průměry ve vodním ekvivalentu. Za rok na ledovci přibylo přibližně 1,3 metru vody a ubylo 2,0 metru. Rozdíl ukázal úbytek i bez měření polohy čela.
        <SourceLink id="DOI_10_3189_s002214300002757x"> (Schytt 1962)</SourceLink>
      </p>
      <Graphic name="mene-snehu" alt="Řez horským ledovcem. Sníh doplňuje zásobu v horní části, led teče dolů a voda odtéká z tajícího jazyka. Při menším zimním přírůstku a stejné letní ztrátě se roční bilance zhorší. Sněhová sonda měří zimní zásobu, tyč v ledu letní úbytek."
        tests={[
          { title: "Test 1 · Ledovce na konci malé doby ledové", prediction: "Více zimního sněhu může vysvětlit postup, který nevychází ze samotné teplotní řady.", test: "Spočítáme historickou bilanci při různých srážkách a porovnáme ji s rekonstruovaným objemem.", result: "Pro roky 1760–1830 pomohlo zvýšení zimních srážek o 25–35 % proti průměru 20. století." },
          { title: "Test 2 · Zima a léto na Sarennes", prediction: "Pokud novější úbytek způsobuje méně zimního sněhu, má zimní přírůstek klesnout.", test: "Vyhodnotíme zimní a letní část měření z let 1949–2007 odděleně.", result: "Zimní přírůstek vzrostl. Bilanci zhoršilo zesílení letních ztrát." },
        ]}>
        Vliv sněhu a jeho ověřování podle <SourceLink id="DOI_10_1029_2005gl022552">Vincenta a kol. (2005)</SourceLink> a <SourceLink id="DOI_10_5194_tc_7_47_2013">Thiberta a kol. (2013)</SourceLink>.
        Modré značky označují sníh a vodu, zelená šipka pohyb pevného ledu. Hnědá plocha je podloží.
      </Graphic>

      <h4 id="test-mala-doba-ledova" className={styles.testHeading}>Test 1 · Ledovce na konci malé doby ledové</h4>
      <p>
        Na konci malé doby ledové, v letech 1760–1830, se v Alpách ledovce zvětšovaly. Z tehdejší doby však chybějí měření zimních přírůstků a letních ztrát.
        Christian Vincent a jeho spoluautoři zkoumali, zda k vysvětlení jejich tehdejší velikosti stačí slabší tání, nebo zda muselo také více sněžit.
        U ledovců Saint-Sorlin a Argentière mohli někdejší <Link href="/pozorovani/ustup-ledovcu/#historicke-objemy">objem odhadnout ze starých map a morén</Link>.
        Morény jsou valy kamenů a dalšího materiálu, které označují někdejší okraj ledu. Umožnily tak posoudit vypočtené změny podle stop v krajině.
      </p>
      <p>
        Autoři z dobových údajů o teplotě vypočetli tání. Teploty pak ve výpočtu ponechali stejné a měnili množství zimních srážek.
        Při srážkách odpovídajících průměru 20. století vyšel přírůstek příliš malý. Výpočet se historickému objemu přiblížil, když autoři zimní srážky zvýšili v jedné variantě <strong>o 25 % a v druhé o 35 %</strong>.
        Obrázek 3 studie ukazuje obě vyzkoušené varianty. Odhad tehdejšího sněžení proto závisí na přesnosti rekonstrukce objemu i výpočtu tání. Pokud po roce 1830 sněžení opět zesláblo, mohlo to přispět k ústupu.
        <SourceLink id="DOI_10_1029_2005gl022552"> (Vincent a kol. 2005)</SourceLink>
      </p>

      <h4 id="test-sarennes" className={styles.testHeading}>Test 2 · Zima a léto na Sarennes</h4>
      <p>
        Na francouzském ledovci Sarennes lze obě vysvětlení rozlišit přímo v terénu. Pokud za novější úbytek mohl hlavně nedostatek sněhu, mělo ho na konci zimy zůstávat méně než dříve.
        Od roku 1949 tu výzkumníci na čtyřech až pěti místech měřili tloušťku a hustotu zimní vrstvy sněhu. U tyčí pak sledovali, jak nízko povrch klesl do konce léta.
        Emmanuel Thibert a jeho spoluautoři v <Link href="/pozorovani/ustup-ledovcu/#sezonni-bilance-sarennes">záznamu za roky 1949–2007</Link> oddělili rozdíly mezi měřicími místy od změn, které se na nich projevovaly společně.
        Dobu, kdy se průměr změnil, určili pro každou sezonu zvlášť.
        <SourceLink id="DOI_10_5194_tc_7_47_2013"> (Thibert a kol. 2013, tabulka 1)</SourceLink>
      </p>
      <div className={styles.tableScroll} role="region" tabIndex={0} aria-label="Sezonní bilance Sarennes, tabulka posuvná do stran">
        <table className={styles.budgetTable}>
          <caption>Ledovec Sarennes. Průměrná změna hmotnosti za zimu a za léto v metrech vodního ekvivalentu. Kladná hodnota znamená přírůstek, záporná ztrátu.</caption>
          <thead><tr><th scope="col">Část roku</th><th scope="col">Dřívější období</th><th scope="col">Bilance</th><th scope="col">Pozdější období</th><th scope="col">Bilance</th></tr></thead>
          <tbody>
            <tr><th scope="row">Zima</th><td>1949–1976</td><td>+1,48</td><td>1977–2007</td><td>+1,88</td></tr>
            <tr><th scope="row">Léto</th><td>1949–1982</td><td>−2,26</td><td>1983–2007</td><td>−3,22</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Po roce 1976 přibývalo za zimu v průměru o 0,40 metru vodního ekvivalentu víc než v předchozím období.
        Ledovec tedy vstupoval do léta s větší zásobou sněhu. Po roce 1982 naopak v létě ubývalo v průměru o 0,96 metru vodního ekvivalentu víc než dříve.
        <strong>Zhoršení bilance na Sarennes tak vysvětluje silnější letní tání. Zimní sníh naopak část ztrát nahrazoval.</strong>
      </p>
      <p>
        Změna přišla v zimních měřeních o několik let dříve než v letních. Čísla z různých období proto nesčítáme do změny roční bilance.
        V <a href={`${media}/sarennes-tabulka-1.csv`}>přepisu tabulky</a> lze zkontrolovat oba rozdíly průměrů. Původní tabulka k nim vlastní intervaly nejistoty neuvádí.
      </p>
    </HypothesisStory>

    <HypothesisStory id="vetsi-tani" number={2} title="V létě odtává víc sněhu a ledu než dříve">
      <p>
        Měření na Sarennes ukazují, kdy se ztráta zvětšila. Příčinu letního úbytku lze ověřit tím, že množství odtátého ledu porovnáme s energií, kterou povrch dostal.
        Kolik jí led potřebuje, určili výzkumníci v laboratoři. Ke známému množství ledu přivedli teplo elektrickým ohřevem nebo teplejší vodou a změřili, kolik ledu roztálo.
        Nathan Osborne roku 1939 přepočítal čtyři soubory těchto měření s přesnějším údajem o teple potřebném k ohřevu vody.
        Na roztavení kilogramu ledu, který už dosáhl bodu tání, připadá přibližně <strong>334 kilojoulů</strong>. Chladnější led musí nejprve přijmout energii na ohřátí.
        <SourceLink id="DOI_10_6028_jres_023_043"> (Osborne 1939)</SourceLink>
      </p>
      <p>
        Na povrch ledovce přichází energie ze Slunce, z tepelného záření okolí i ze vzduchu, který je teplejší než led. Povrch zároveň teplo vyzařuje.
        Část energie může odnést vypařující se voda nebo ji odvede chladnější led do hloubky. Z toho, kolik energie nakonec zbude pro tání, lze vypočítat úbytek ledu.
        Právě tento výpočet mohli výzkumníci na švýcarském ledovci Morteratsch porovnat se skutečně odtátou vrstvou.
      </p>
      <Graphic name="vetsi-tani" alt="Sluneční záření a teplo ze vzduchu dodávají energii tajícímu povrchu. Po odtání světlého sněhu odkrytý led pohlcuje více slunečního záření. Voda odnáší hmotu, ledovec se ztenčuje a jeho čelo může ustoupit, přestože led stále teče dolů údolím."
        tests={[
          { title: "Test 3 · Energie a úbytek na Morteratschi", prediction: "Energie získaná z měření počasí má odpovídat tání. Tmavší led při stejném osvětlení pohltí více energie.", test: "Porovnáme energetický výpočet s výškovým čidlem a tyčemi. Pak zopakujeme výpočet se zachovanou odrazivostí.", result: "Letní energetické odhady se lišily přibližně o 6 %. Výpočet se ztmavnutím dal větší úbytek než varianta s nezměněnou odrazivostí." },
          { title: "Test 4 · Zpožděná reakce čela", prediction: "Při podobném průběhu bilance nemusejí různě utvářené ledovce změnit směr pohybu čela současně.", test: "Porovnáme mapy, fotografie a terénní měření čel v severních Kaskádách s časem změn klimatických podmínek.", result: "První změna chování čela následovala u 21 ledovců za 4–16 let. Úplnější přizpůsobení bylo delší a závislé na ledovci." },
        ]}>
        Energetický a dynamický děj podle <SourceLink id="DOI_10_3189_002214309789470969">Oerlemanse a kol. (2009)</SourceLink>,
        <SourceLink id="DOI_10_3189_s002214300000928x"> Jóhannessona a kol. (1989)</SourceLink> a <SourceLink id="DOI_10_3189_172756501781832098">Pelta a Hedlunda (2001)</SourceLink>.
        Oranžové šipky označují energii, modrá odtok vody a zelená pohyb ledu. Přerušovaný obrys označuje dřívější rozměr.
      </Graphic>

      <h4 id="test-morteratsch" className={styles.testHeading}>Test 3 · Energie a úbytek na Morteratschi</h4>
      <p>
        U stanice na dolní části Morteratsche mohli vědci energii spotřebovanou na tání určit dvěma způsoby.
        V prvním výpočtu použili měření záření, teploty, vlhkosti a větru. Ve druhém vyšli z <Link href="/pozorovani/ustup-ledovcu/#misto-morteratsch">poklesu povrchu změřeného výškovým čidlem a u tyčí</Link>.
        Z tloušťky odtátého ledu a jeho hustoty určili ztracenou hmotnost a z ní teplo potřebné k roztátí. Když byl v létě led bez sněhu, měřený pokles povrchu do prvního výpočtu nevstupoval. Oba výsledky se proto daly porovnat nezávisle.
      </p>
      <p>
        Tým porovnal průměry za červen až srpen v jednotlivých letech 1999–2006. Výsledky vyjádřil ve wattech na metr čtvereční (W/m²).
        Hodnota 1 W/m² znamená, že na metr čtvereční připadne každou sekundu jeden joule energie.
        Mezi oběma odhady vyšel střední kvadratický rozdíl 11,7 W/m². Tato míra shrnuje odchylky ve všech osmi létech a přikládá větší váhu větším rozdílům.
        Odpovídala asi 6 % průměrného příkonu spotřebovaného na tání. Výpočet z místního počasí tedy zachytil velikost letního úbytku u stanice.
        <SourceLink id="DOI_10_3189_002214309789470969"> (Oerlemans a kol. 2009, obr. 6)</SourceLink>
      </p>
      <p>
        Odkrytý led u stanice během měření tmavnul. Při stejném dopadajícím slunečním záření tak mohl více energie pohltit.
        Aby tým určil velikost tohoto účinku, použil ve dvou výpočtech stejné počasí. V jednom nechal led odrážet naměřený podíl světla, v druhém stále 32 %, což odpovídalo poměrům před rokem 2003.
        V první variantě od počátku roku 2003 do konce období tání v roce 2006 odtálo navíc tolik ledu, kolik odpovídá <strong>3,32 metru vody</strong>.
        Rozdíl mezi křivkami na obrázku 8 studie je tedy modelový odhad místního účinku ztmavnutí za čtyři roky.
        <SourceLink id="DOI_10_3189_002214309789470969"> (Oerlemans a kol. 2009)</SourceLink>
      </p>

      <h4 id="test-odezva-cela" className={styles.testHeading}>Test 4 · Zpožděná reakce čela</h4>
      <p>
        Tyč v ledu ukáže za jediné léto úbytek na konkrétním místě. Poloha čela závisí také na tom, kolik nového ledu k němu dorazí.
        John Glen v laboratoři ukázal, že se led při trvalém zatížení pomalu deformuje. Tímto způsobem se může i pevný led na svahu vlastní vahou pohybovat dolů údolím.
        <SourceLink id="DOI_10_3189_s0022143000034067"> (Glen 1952)</SourceLink>
        {" "}Změní-li se sněžení nebo tání ve vyšších polohách, postupně se mění tloušťka ledu a s ní i přítok k čelu.
        Tómas Jóhannesson, Charles Raymond a Ed Waddington z těchto vztahů odvodili, proč se stejná změna podmínek může u ledovců s různou tloušťkou projevit na čele až po různě dlouhé době.
        <SourceLink id="DOI_10_3189_s002214300000928x"> (Jóhannesson a kol. 1989)</SourceLink>
      </p>
      <p>
        Tuto předpověď lze prověřit na sousedních ledovcích, které zažily tytéž změny podnebí. Mauri Pelto a Cliff Hedlund porovnali{" "}
        <Link href="/pozorovani/ustup-ledovcu/#cela-kaskady">záznamy o 38 ledovcích v severních Kaskádách</Link> v americkém státě Washington.
        Z map, fotografií a terénních měření určili, kdy která čela postupovala a kdy ustupovala. Tyto údaje porovnali se dvěma změnami v oblasti. V roce 1944 začalo chladnější a vlhčí období, od roku 1976 opět převládly teplejší a sušší podmínky.
      </p>
      <p>
        U 21 ledovců uplynulo od změny podmínek do prvního zřetelného obratu v pohybu čela <strong>4–16 let</strong>.
        Roční bilance ledovců v této oblasti kolísaly podobně. Přesto mezi lety 1950 a 1975 jižní ledovec Klawatti postupoval, kdežto jeho severní soused dál ustupoval.
        Oba ledovce mají rozdílně velké plochy ve vyšších a nižších polohách. V celém zkoumaném souboru souvisely rozdíly v chování čel také se sklonem ledovců a s rychlostí proudění ledu.
      </p>
      <p>
        První obrat čela lze odečíst z map a fotografií. Mnohem déle trvá, než se délka ledovce přiblíží hodnotě odpovídající novým podmínkám.
        U nejrychleji reagující skupiny odhadli autoři tuto dobu přizpůsobení na 20–30 let. U nejpomalejší skupiny stanovili pouze dolní mez, 60 až 100 let.
        Jóhannessonův jednoduchý výpočet vychází z tloušťky ledovce a rychlosti tání u čela.
        <SourceLink id="DOI_10_3189_s002214300000928x"> (Jóhannesson a kol. 1989)</SourceLink>
        {" "}Pelto a Hedlund ho porovnali se záznamy z Kaskád. U dvou ze tří skupin dával příliš krátké doby. Posuny čel i roky jejich obratu lze dohledat v tabulkách 1 a 2.
        <SourceLink id="DOI_10_3189_172756501781832098"> (Pelto a Hedlund 2001)</SourceLink>
      </p>
    </HypothesisStory>

    <h2 id="jak-mechanismus-funguje">Proč ledovec ztrácí hmotu a jeho čelo ustupuje</h2>
    <p>
      Zimní sníh navíc pomohl vysvětlit někdejší růst alpských ledovců. Na Sarennes však ani vydatnější zimy nestačily vyrovnat sílící letní tání. Na Morteratschi potvrdilo měření počasí, že na pozorované tání bylo skutečně k dispozici dost energie.
      V celosvětovém měřítku hodnotí Mezivládní panel pro změnu klimatu (IPCC) oteplování atmosféry jako velmi pravděpodobnou hlavní příčinu ústupu ledovců.
      <SourceLink id="DOI_10_1017_9781009157896_011"> (IPCC 2021, oddíl 9.5.1.1.3)</SourceLink>{" "}
      Jak rychle ubývá konkrétní ledovec, však závisí na tom, jak se změny v obou sezonách za celý rok sečtou.
    </p>

    <h3 id="rocni-bilance">Rozhoduje bilance celého roku</h3>
    <p>
      Jestliže sledujeme tutéž plochu od začátku zimy do konce léta, každá změna hmotnosti patří do jedné z těchto dvou sezon. Jejich součet proto dává změnu za celý rok.
    </p>
    <Equation tex={String.raw`b_{\text{rok}} = b_{\text{zima}} + b_{\text{léto}}`} />
    <p>
      Písmeno <InlineMath tex="b" /> označuje změnu hmotnosti na metr čtvereční, zde vyjádřenou v metrech vodního ekvivalentu. Index říká, ke které části roku hodnota patří.
      Zimní bilance udává, kolik hmoty za zimu skutečně přibylo po započtení nového sněhu i případných ztrát. Letní bilance bývá záporná.
      Kdyby v jednom roce do konce zimy přibyla vrstva odpovídající dvěma metrům vody a přes léto ubyla vrstva odpovídající třem, ztratil by ledovec za rok ekvivalent jednoho metru vody.
      Při výpočtu <Link href="/metody/terenni-mereni-bilance-ledovcu/#plosna-bilance">bilance celého ledovce</Link> má místní údaj tím větší váhu, čím větší plochu zastupuje.
    </p>
    <p>
      Za teplejšího počasí může tání začít dříve nebo trvat déle. Když světlý sníh zmizí, odkryje se tmavší led. Při stejném osvětlení pohltí víc sluneční energie a tání může ještě zesílit.
      Čerstvý letní sníh naopak světlý povrch obnoví. Kolik energie v daný den zbude na tání, závisí také na oblačnosti, větru a vlhkosti.
      <SourceLink id="DOI_10_1017_9781009157896_011"> (IPCC 2021, oddíly 9.5.1.1.3 a 9.5.1.2)</SourceLink>
    </p>

    <h3 id="energie-tani">Kolik ledu může dodaná energie roztavit</h3>
    <p>
      Je-li povrch na bodu tání, můžeme ze zbývající energie vypočítat, kolik ledu za den roztaje. Celkovou energii, která za tu dobu připadne na tání, vydělíme energií potřebnou k roztavení jednoho kilogramu.
    </p>
    <Equation tex={String.raw`m = \frac{Q_{\text{tání}}\,\Delta t}{L_{\mathrm{t}}}`} />
    <p>
      <InlineMath tex={String.raw`Q_{\text{tání}}`} /> udává, kolik energie zbude každou sekundu na tání na metru čtverečním povrchu (W/m²).
      Vynásobením tohoto průměrného příkonu dobou <InlineMath tex={String.raw`\Delta t`} /> v sekundách dostaneme energii v joulech na metr čtvereční.
      Po vydělení skupenským teplem tání <InlineMath tex={String.raw`L_{\mathrm{t}}`} />, přibližně 334 000 joulů na kilogram, vyjde hmotnost roztátého ledu{" "}
      <InlineMath tex="m" /> v kilogramech na metr čtvereční.
      <SourceLink id="DOI_10_6028_jres_023_043"> (Osborne 1939)</SourceLink>
    </p>
    <p>
      Pokud na tání připadá celý den o 10 W/m² více, dodá se za 86 400 sekund na každý metr čtvereční navíc 864 000 joulů.
      To stačí na roztavení asi 2,6 kilogramu ledu na metr čtvereční, tedy na vrstvu vody vysokou 2,6 milimetru.
      Skutečný odtok může být menší, protože část vody se ve sněhu zadrží nebo znovu zmrzne.
      <a href={`${media}/vypocty.mjs`}> Přepočet příkladu</a>.
    </p>

    <h3 id="ustup-cela">Čelo ustupuje, i když led stále teče dolů</h3>
    <p>
      Ve vyšších částech ledovce za rok zpravidla přibývá sníh. Led odtud proudí do níže položeného výběžku, kterému se říká ledovcový jazyk.
      Když přítok shora právě nahradí to, co na konci jazyka odtaje, může čelo zůstat celé roky na témže místě.
      Jestliže na konci jazyka dlouhodobě taje více ledu, než přitéká, jeho nejnižší část postupně zmizí.
      Čelo se tak posouvá výš do údolí, zatímco led dál proudí dolů. Samotné proudění uvnitř ledovce končícího na souši pouze přemisťuje jeho hmotu.
      <SourceLink id="DOI_10_3189_s002214300000928x"> (Jóhannesson a kol. 1989)</SourceLink>
    </p>
    <p>
      Jak rychle se vytvoří nová rovnováha, závisí i na tvaru údolí. Když odtaje spodní konec jazyka, ledovec přijde o nízko položenou plochu, na níž tál nejrychleji.
      Celková roční ztráta se tím může zmírnit. Kde se však led ztenčuje, jeho povrch zároveň klesá do nižší nadmořské výšky, v níž bývá tepleji.
      Oba vlivy závisí na tom, jak velká část ledovce leží v jednotlivých výškách. Ledovce v sousedních údolích proto mohou na stejné počasí reagovat různě.
      <SourceLink id="DOI_10_3189_s002214300000928x"> (Jóhannesson a kol. 1989)</SourceLink>
    </p>

    <p id="nejistoty">
      Laboratorní pokusy a měření na odkrytém ledu ověřují, kolik ledu může dodaná energie roztavit. U jednotlivého ledovce je obtížnější určit, jak velká část úbytku připadá na změnu sněžení a jak velká na tání.
      Silnější tání jako příčinu úbytku by na daném místě zpochybnila dlouhodobá měření, v nichž by letní ztráty zůstávaly stejné a celé zhoršení roční bilance by vysvětlil pokles zimních přírůstků.
      Doba odezvy čela navíc závisí na tvaru a předchozím vývoji daného ledovce.
    </p>
    <details className="article-details">
      <summary>Co výklad omezuje a jak jej lze dále prověřovat</summary>
      <p>
        Vítr přenáší sníh po svahu a laviny jej mohou dodat i z okolních stěn. Několik sond tak může minout místa, kde se ukládá nejvíc sněhu.
        Kontrolu nabízí změna objemu celého ledovce mezi dvěma výškovými mapami. Na Sarennes statistické zpracování pomohlo oddělit rozdíly mezi místy a doplnit chybějící hodnoty.
        Tyto odhady však stále vycházejí z téže sítě měření.
        <SourceLink id="DOI_10_5194_tc_7_47_2013"> (Thibert a kol. 2013)</SourceLink>
      </p>
      <p>
        Na Morteratschi vědci použili měřenou zimní výšku sněhu také při výpočtu tání. Nezávislou kontrolu proto poskytlo hlavně léto, kdy sníh zmizel a zůstal odkrytý led.
        Výsledek u jedné stanice ukazuje, co způsobilo ztmavnutí v tomto místě. Jinde může tenká vrstva nečistot tání urychlit, zatímco dostatečně silná vrstva suti led tepelně izoluje.
        U ledovců končících ve vodě záleží navíc na odlamování a tání pod hladinou.
        <SourceLink id="DOI_10_3189_002214309789470969"> (Oerlemans a kol. 2009)</SourceLink>
        <SourceLink id="DOI_10_1017_9781009157896_011"> (IPCC 2021)</SourceLink>
      </p>
      <p>
        Kdyby výpočet z počasí i po započtení nejistot opakovaně předpovídal jiné tání, než kolik ledu u tyčí skutečně ubylo, bylo by potřeba přezkoumat započtené přísuny a ztráty energie.
        Výpočet budoucího pohybu čela lze obdobně prověřit pozdějšími měřeními tloušťky, rychlosti proudění a polohy čela, která vědci při nastavování modelu ještě neznali.
      </p>
    </details>

    <h2 id="shrnuti">Shrnutí</h2>
    <div className="method-conclusion"><p>
      Horský ledovec končící na souši ztrácí hmotu, když voda odtékající z tajícího sněhu a ledu dlouhodobě převáží nad tím, co přibude sněžením.
      V celosvětovém měřítku je hlavní příčinou novodobého ústupu ledovců velmi pravděpodobně oteplování atmosféry. I po vydatnějších zimách může v létě odtát víc sněhu a ledu, než v zimě přibylo, jak ukazují měření na francouzském ledovci Sarennes.
      Čelo začne ustupovat, když místní tání překoná přísun ledu shora. Proto mohou dva ledovce po stejném teplém létě ztratit hmotu, ale jejich čela se pohnou v různých letech.
    </p></div>

    <h2 id="prameny">Prameny a veřejná data</h2>
    <ul>
      <li><SourceLink id="DOI_10_3189_s002214300002757x">Schytt (1962)</SourceLink>: dlouhodobé terénní oddělení přírůstků a ztrát na Storglaciären.</li>
      <li><SourceLink id="DOI_10_1029_2005gl022552">Vincent a kol. (2005)</SourceLink>: historická rekonstrukce alpských ledovců a test srážkových variant.</li>
      <li><SourceLink id="DOI_10_5194_tc_7_47_2013">Thibert a kol. (2013)</SourceLink>: sezonní měření Sarennes, tabulka 1 a statistické zpracování.</li>
      <li><SourceLink id="DOI_10_6028_jres_023_043">Osborne (1939)</SourceLink>: revize laboratorních měření skupenského tepla tání ledu.</li>
      <li><SourceLink id="DOI_10_3189_002214309789470969">Oerlemans a kol. (2009)</SourceLink>: měření záření a tání na Morteratschi, modelové oddělení vlivu odrazivosti.</li>
      <li><SourceLink id="DOI_10_3189_s0022143000034067">Glen (1952)</SourceLink>: laboratorní měření pomalé deformace ledu.</li>
      <li><SourceLink id="DOI_10_3189_s002214300000928x">Jóhannesson a kol. (1989)</SourceLink>: teorie doby přizpůsobení ledovce.</li>
      <li><SourceLink id="DOI_10_3189_172756501781832098">Pelto a Hedlund (2001)</SourceLink>: mapy, fotografie a tabulky změn čel v severních Kaskádách.</li>
      <li><SourceLink id="DOI_10_1017_9781009157896_011">IPCC (2021), kapitola 9</SourceLink>: odborné hodnocení příčin změn ledovců a mezí modelů.</li>
      <li><SourceLink id="DOI_10_1038_s41586_024_08545_z">GlaMBIE (2025)</SourceLink> a <SourceLink id="DOI_10_5904_wgms_glambie_2024_07">veřejné podklady GlaMBIE</SourceLink>: globální úbytek z terénních a družicových pozorování.</li>
      <li><SourceLink id="DOI_10_5904_wgms_fog_2026_02_10">WGMS, Fluctuations of Glaciers (2026)</SourceLink>: veřejné roční a sezonní záznamy. Záznamy nejsou totožné se statisticky zpracovanými průměry tabulky Thiberta a kol.</li>
    </ul>
    <p><a href={`${media}/sarennes-tabulka-1.csv`}>Číselné podklady tabulky</a>, <a href={`${media}/vypocty.mjs`}>početní příklady</a> a <a href={`${media}/grafika.mjs`}>zdrojový kód schémat</a> jsou dostupné přímo na webu.</p>
  </div></article>;
}
