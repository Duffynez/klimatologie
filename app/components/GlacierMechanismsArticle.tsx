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
    prediction: "Při podobných letních ztrátách má zhoršení roční bilance doprovázet menší zimní přírůstek. Historický postup ledovců může naopak vyžadovat více sněhu, pokud jej nevysvětlí teplota.",
    test: "Porovnáme historické rozměry alpských ledovců s výpočtem pro různé srážky. U Sarennes změříme zvlášť zimní přírůstek a letní ztrátu.",
    observation: "Vyšší sněžení pomohlo vysvětlit alpský postup v letech 1760–1830. Na Sarennes však zimní přírůstky po roce 1976 vzrostly, zatímco po roce 1982 zesílily letní ztráty.",
    verdict: "Skutečný vliv, který novější úbytek sám nevysvětluje",
    explanation: "Změny sněžení jsou místně důležité. Pokles zimního přírůstku ale neodpovídá sezonním měřením novějšího úbytku na Sarennes.",
    state: "insufficient",
  },
  {
    id: "vetsi-tani",
    name: "Ztráty při tání převáží nad přírůstkem sněhu",
    prediction: "Ledovec může ubývat i při větším zimním přírůstku. Výpočet z dodané energie má zachytit tání a změna čela má záviset také na předchozím vývoji a tvaru ledovce.",
    test: "Na Morteratschi porovnáme výpočet z meteorologických měření s úbytkem ledu. V severních Kaskádách sledujeme, kdy na změnu podmínek zareagují čela různých ledovců.",
    observation: "Výpočet energie zachytil velikost místního tání. U 21 kaskádových ledovců nastala první zřetelná změna chování čela se zpožděním 4–16 let.",
    verdict: "Podpořené vysvětlení současného úbytku",
    explanation: "Ztrátu hmoty vysvětluje bilance sněhu a tání. Proudění a geometrie určují, jak se tato nerovnováha projeví ústupem čela. Výsledky jednotlivých míst nejsou globálními konstantami.",
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
    <h2 id="co-vysvetlujeme">Ledovce ubývají, jejich čela však nereagují současně</h2>
    <p className="article-prose__intro">
      Světové ledovce mimo hlavní grónský a antarktický příkrov ztrácely v letech 2000–2023 průměrně <strong>273 ± 16 gigatun ročně</strong>.
      Gigatuna je miliarda tun, uvedená nejistota odpovídá 95% intervalu spolehlivosti.
      <Link href="/pozorovani/ustup-ledovcu/#pozorovani"> Pozorování horských ledovců</Link> zachycují také ústup čel, tedy zkracování ledovců.
      Ztráta hmotnosti a posun čela se ale nemusejí odehrát ve stejném roce. Jakou úlohu mají sněžení, tání a pohyb ledu?
      <SourceLink id="DOI_10_1038_s41586_024_08545_z"> (GlaMBIE 2025)</SourceLink>
    </p>
    <p>
      Led vzniká především ze sněhu, který přežije léto a postupně se zhutňuje.
      U horských ledovců končících na souši převládá mezi ztrátami odtok vody z tání.
      Právě na nich můžeme dobře oddělit zimní přírůstky od letních ztrát. Podrobné testy níže pocházejí z Alp a severních Kaskád v USA.
      U ledovců ústících do jezera nebo moře musíme navíc započítat odlamování a tání pod hladinou.
      <SourceLink id="DOI_10_1017_9781009157896_011"> (IPCC 2021, oddíl 9.5.1)</SourceLink>
    </p>

    <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="glacier-hypotheses-caption"
      context={<p>Sněžení a tání působí současně. Porovnáváme, zda rozhodující změna nastala v přísunu sněhu, nebo ve ztrátách při tání. Nejde o dvě historické školy, které by existenci druhého děje popíraly.</p>}
      caption={<>Samotné ustupující čelo příčinu neprozradí. Rozhoduje oddělení sezonních přírůstků a ztrát, kontrola přísunu energie a sledování reakce ledovce v čase.</>} />

    <h2 id="pribehy">Co ukázaly zimní zásoby, letní tání a poloha čela</h2>
    <HypothesisStory id="mene-snehu" number={1} title="Úbytek způsobuje hlavně menší přísun sněhu">
      <p>
        Pro ledovec je podstatný rozdíl mezi tím, kolik hmoty získá a kolik ztratí. Tento rozdíl nazýváme hmotnostní bilance.
        Menší množství zimního sněhu může bilanci zhoršit i při nezměněném létě.
        Výzkumný program zahájený roku 1946 na švédském Storglaciären proto měřil obě strany této bilance.
        Valter Schytt v roce 1962 popsal průměrný přírůstek odpovídající přibližně 1,3 metru vody a ztrátu 2,0 metru vody ročně.
        Takový rozpočet už umožňuje položit přesnější otázku než pouhé „proč se čelo posunulo“.
        <SourceLink id="DOI_10_3189_s002214300002757x"> (Schytt 1962)</SourceLink>
      </p>
      <p>
        Vodní ekvivalent vyjadřuje hmotnost sněhu či ledu jako vrstvu kapalné vody na stejné ploše.
        Jeden metr vodního ekvivalentu znamená jednu tunu vody na metr čtvereční.
        Díky tomuto převodu lze porovnat lehký sníh s hutným ledem.
        <Link href="/metody/terenni-mereni-bilance-ledovcu/#vodni-ekvivalent"> Terénní metoda</Link> určí vodní ekvivalent z tloušťky a hustoty vrstvy.
        Následující schéma ukazuje, co by způsobil menší přísun sněhu při stejných letních ztrátách.
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
        Christian Vincent a kolegové v roce 2005 zkoumali rozpor: alpské ledovce v letech 1760–1830 postupovaly,
        ale tehdejší teplotní řada jejich zvětšení při obvyklých srážkách nevysvětlovala.
        Pokud ve výpočtu chyběl větší přísun sněhu, mělo zvýšení srážek zlepšit shodu s historickou velikostí ledovců.
        Autoři porovnali teplotně řízený výpočet tání s <Link href="/pozorovani/ustup-ledovcu/#historicke-objemy">objemem odvozeným ze starých map a morén</Link>,
        tedy valů hornin zanechaných u někdejšího okraje ledu.
        <SourceLink id="DOI_10_1029_2005gl022552"> (Vincent a kol. 2005)</SourceLink>
      </p>
      <p>
        Varianty s <strong>o 25–35 % vyššími zimními srážkami</strong> než ve 20. století přiblížily výpočet rekonstruovanému vývoji.
        Pokles takto zvýšených srážek mohl přispět k následnému ústupu.
        Jde o srážky odvozené pomocí modelu, nikoli o přímé měření sněhu v roce 1800.
        Rozpětí označuje zkoušené varianty, ne interval spolehlivosti. Výsledek závisí na rekonstrukci objemu a vztahu teploty k tání.
        Ukazuje však, proč je sněžení vážným vysvětlením některých historických změn. Pro novější úbytek potřebujeme přímější test.
      </p>

      <h4 id="test-sarennes" className={styles.testHeading}>Test 2 · Zima a léto na Sarennes</h4>
      <p>
        Na francouzském Sarennes se od roku 1949 opakovala měření sněhu a úbytku ledu na čtyřech až pěti místech.
        Emmanuel Thibert a spoluautoři oddělili společný časový průběh od rozdílů mezi místy a chyb měření.
        Jejich <Link href="/pozorovani/ustup-ledovcu/#sezonni-bilance-sarennes">zpracovaná sezonní řada</Link> umožnila ověřit očekávaný pokles zimního přírůstku.
        <SourceLink id="DOI_10_5194_tc_7_47_2013"> (Thibert a kol. 2013, tabulka 1)</SourceLink>
      </p>
      <div className={styles.tableScroll} role="region" tabIndex={0} aria-label="Sezonní bilance Sarennes, tabulka posuvná do stran">
        <table className={styles.budgetTable}>
          <caption>Sarennes: průměrná sezonní bilance v metrech vodního ekvivalentu za rok. Kladné znaménko znamená přírůstek, záporné ztrátu.</caption>
          <thead><tr><th scope="col">Část roku</th><th scope="col">Dřívější období</th><th scope="col">Bilance</th><th scope="col">Pozdější období</th><th scope="col">Bilance</th></tr></thead>
          <tbody>
            <tr><th scope="row">Zima</th><td>1949–1976</td><td>+1,48</td><td>1977–2007</td><td>+1,88</td></tr>
            <tr><th scope="row">Léto</th><td>1949–1982</td><td>−2,26</td><td>1983–2007</td><td>−3,22</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Zimní přírůstek se zvětšil, letní bilance se však stala podstatně zápornější.{" "}
        <strong>Předpověď menšího zimního přírůstku zde selhala.</strong> Hranice období se liší, protože statisticky zjištěné změny nenastaly ve stejné době.
        Čísla z různých období proto nesčítáme do jediné roční bilance.
        Tabulka uvádí odhady průměrů bez vlastních intervalů nejistoty, nikoli přesné hodnoty každého roku.
        <a href={`${media}/sarennes-tabulka-1.csv`}> Přepis použitých údajů</a> umožňuje porovnání zkontrolovat.
      </p>
      <p>
        <strong>Méně sněhu je možné místní vysvětlení, ale není společným vysvětlením všech ústupů.</strong>{" "}
        Historická rekonstrukce jeho význam podpořila. Novější sezonní měření na Sarennes naopak ukázala, že větší zimní zásoba nestačila vyrovnat letní ztráty.
        Nyní je třeba ověřit fyzikální důvod tohoto tání a vazbu mezi úbytkem hmoty a délkou ledovce.
      </p>
    </HypothesisStory>

    <HypothesisStory id="vetsi-tani" number={2} title="Ztráty při tání převáží nad přírůstkem sněhu">
      <p>
        K roztavení ledu je třeba dodat energii. Laboratorní pokusy proto porovnávaly známou hmotnost ledu s teplem dodaným elektrickým ohřevem
        nebo teplejší vodou. Nathan Osborne v roce 1939 přepočítal čtyři série měření s přesnější tepelnou kapacitou vody.
        Výsledek odpovídal přibližně <strong>334 kilojoulům na kilogram ledu</strong> při bodu tání.
        Energie spotřebovaná předtím na ohřátí studeného ledu se musí počítat zvlášť.
        Tím dostáváme ověřený převod mezi energií a množstvím tání, nikoli jen souvislost mezi teplým počasím a ústupem.
        <SourceLink id="DOI_10_6028_jres_023_043"> (Osborne 1939)</SourceLink>
      </p>
      <p>
        Na ledovci energii dodává pohlcené sluneční a tepelné záření i přenos tepla ze vzduchu.
        Část současně odchází vyzařováním, výparem nebo vedením do chladnějšího ledu.
        Dlouhodobá meteorologická stanice na švýcarském Morteratschi umožnila tyto příspěvky porovnat s úbytkem povrchu.
        Jiná otázka se týkala čela: výpočty Tómase Jóhannessona, Charlese Raymonda a Eda Waddingtona z roku 1989 ukázaly,
        proč změna objemu a přizpůsobení délky potřebují rozdílný čas.
        Schéma spojuje oba kroky, které následující testy ověřují samostatně.
        <SourceLink id="DOI_10_3189_002214309789470969"> (Oerlemans a kol. 2009)</SourceLink>
        <SourceLink id="DOI_10_3189_s002214300000928x"> (Jóhannesson a kol. 1989)</SourceLink>
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
        Stanice měřila dopadající a odražené záření, teplotu, vlhkost a vítr. Model z nich určil energii dostupnou pro tání.
        Oerlemansův tým výsledek porovnal s <Link href="/pozorovani/ustup-ledovcu/#misto-morteratsch">úbytkem zjištěným výškovým čidlem a tyčemi</Link>.
        V létě, kdy bylo místo bez sněhu, úbytek povrchu do modelu nevstupoval.
        Rozdíl letních energetických odhadů pro roky 1999–2006 měl střední kvadratickou velikost 11,7 W/m², přibližně 6 % průměrné energie tání.
        Jde o souhrnnou míru odchylek výpočtu od měření. Jeden W/m² znamená jeden joule energie za sekundu na metr čtvereční povrchu.
        To podporuje fyzikální výpočet velikosti úbytku v daném místě.
        <SourceLink id="DOI_10_3189_002214309789470969"> (Oerlemans a kol. 2009, obr. 6)</SourceLink>
      </p>
      <p>
        U stanice současně klesala odrazivost odkrytého ledu, tedy podíl světla vrácený povrchem. Tmavší led tak při stejném osvětlení pohltil více energie.
        Ve výpočtu pro roky 2003–2006 vedlo naměřené ztmavnutí k dodatečnému tání <strong>3,32 metru vodního ekvivalentu</strong>{" "}
        proti variantě s pevnou odrazivostí 0,32, která vracela 32 % dopadajícího světla.
        Tento rozdíl je modelový odhad místního účinku, nikoli samostatně změřená ztráta celého ledovce.
        Referenční odrazivost byla nastavena podle období před rokem 2003. Obě větve pak používaly stejné počasí, takže porovnání oddělilo právě její změnu.
      </p>

      <h4 id="test-odezva-cela" className={styles.testHeading}>Test 4 · Zpožděná reakce čela</h4>
      <p>
        Led se pod stálým zatížením pomalu deformuje, jak ukázaly mimo jiné laboratorní pokusy Johna Glena z roku 1952.
        Na svahu tak proudí z horní části ledovce dolů.
        Pokud se změní bilance, musí se postupně změnit také tloušťka a množství ledu přiváděného k čelu.
        Proto očekáváme různou odezvu u ledovců s odlišným sklonem, tloušťkou a předchozí historií, i když čelí podobnému počasí.
        <SourceLink id="DOI_10_3189_s0022143000034067"> (Glen 1952)</SourceLink>
        <SourceLink id="DOI_10_3189_s002214300000928x"> (Jóhannesson a kol. 1989)</SourceLink>
      </p>
      <p>
        Mauri Pelto a Cliff Hedlund v roce 2001 porovnali <Link href="/pozorovani/ustup-ledovcu/#cela-kaskady">historii 38 ledovců v severních Kaskádách</Link>.
        Vycházeli z map, opakovaných fotografií a terénních měření. Sledovali odezvu na chladnější a vlhčí období od roku 1944
        a na návrat teplejších a sušších podmínek od roku 1976. U 21 ledovců určili první zřetelnou reakci čela
        <strong>4–16 let po změně klimatických podmínek</strong>.
        Při podobném kolísání ročních bilancí se chování čel lišilo. Samotná místní teplota proto nebyla dostatečným popisem jejich délky.
        <SourceLink id="DOI_10_3189_172756501781832098"> (Pelto a Hedlund 2001)</SourceLink>
      </p>
      <p>
        Odhad přizpůsobení celého ledovce byl delší, od několika desetiletí po nejméně 60–100 let u pomalu reagující skupiny.
        Nešlo o čekání na první pohyb čela. Jednoduchý výpočet z tloušťky a tání na čele navíc u dvou skupin dobu podhodnocoval.
        Pozorování tedy podpořila zpožděnou a rozdílnou odezvu, ale ukázala meze jednoho zjednodušeného vzorce.
      </p>
      <p>
        <strong>Přijaté vysvětlení spojuje bilanci hmoty, energii a proudění.</strong>{" "}
        Sezonní měření rozlišují přírůstek od ztráty, energetická měření ověřují tání a záznamy čel prověřují jeho pozdější geometrický důsledek.
        Tyto důkazy nejsou zaměnitelné. Globální úbytek doložený družicemi rozšiřuje prostorový záběr, sám však neurčuje příčinu každého místního ústupu.
        Souhrn širšího výzkumu hodnotí oteplování atmosféry jako velmi pravděpodobnou hlavní příčinu globálního ústupu ledovců.
        <SourceLink id="DOI_10_1017_9781009157896_011"> (IPCC 2021, oddíl 9.5.1.1.3)</SourceLink>
      </p>
    </HypothesisStory>

    <h2 id="jak-mechanismus-funguje">Jak přebytek ztrát promění celý ledovec</h2>
    <p>
      Změna sněžení může vysvětlit část místních i historických výkyvů, ale novější úbytek na Sarennes nenastal při menším zimním přírůstku.
      Druhé vysvětlení obstálo v měření energie i ve zpožděné reakci čel: tání převážilo nad přírůstky a ledovec se postupně přizpůsoboval menší zásobě ledu.
      Nyní spojíme jednotlivé kroky a ukážeme, proč ani několik sněhově bohatých zim nemusí ústup zastavit.
    </p>

    <h3 id="rocni-bilance">Rozhoduje bilance celého roku</h3>
    <p>
      Pro stejnou plochu a navazující sezonní období platí jednoduchý součet:
    </p>
    <Equation tex={String.raw`b_{\text{rok}} = b_{\text{zima}} + b_{\text{léto}}`} />
    <p>
      Symbol <InlineMath tex="b" /> označuje změnu hmotnosti přepočtenou na jednotku plochy.
      Zimní bilance bývá kladná, letní záporná. Obě zahrnují všechny přírůstky i ztráty příslušné sezony,
      takže zimní bilance není prostým úhrnem sněžení.
      Pokud přibyde vrstva odpovídající dvěma metrům vody a do konce léta ubudou tři metry, roční ztráta odpovídá jednomu metru vody.
      To je vysvětlující příklad, nikoli další pozorování.
      <Link href="/metody/terenni-mereni-bilance-ledovcu/#plosna-bilance"> Bilanci celého ledovce</Link> získáme plošným vážením místních měření.
    </p>
    <p>
      Teplejší podmínky mohou prodloužit dobu, po kterou povrch taje. Po zmizení světlého sněhu se odkryje tmavší led,
      který při stejném slunečním příkonu pohltí více energie. Tání se tím může dále zesílit.
      Záleží ale také na oblačnosti, větru, vlhkosti a čerstvém sněhu během léta.
      Teplota vzduchu je proto užitečný ukazatel podmínek pro tání, úplný energetický rozpočet však nenahrazuje.
      <SourceLink id="DOI_10_1017_9781009157896_011"> (IPCC 2021, oddíly 9.5.1.1.3 a 9.5.1.2)</SourceLink>
    </p>

    <h3 id="energie-tani">Kolik ledu může dodaná energie roztavit</h3>
    <p>
      Je-li povrch už na bodu tání, množství vody vzniklé táním na jednotce plochy určí vztah:
    </p>
    <Equation tex={String.raw`m = \frac{Q_{\text{tání}}\,\Delta t}{L_{\mathrm{t}}}`} />
    <p>
      <InlineMath tex="m" /> je hmotnost roztátého ledu na metr čtvereční v kg/m².{" "}
      <InlineMath tex={String.raw`Q_{\text{tání}}`} /> je energie dostupná pro tání za sekundu na metr čtvereční, ve W/m²,
      po započtení všech přísunů, ztrát a ohřevu sněhu či ledu. <InlineMath tex={String.raw`\Delta t`} /> je čas v sekundách
      a <InlineMath tex={String.raw`L_{\mathrm{t}}`} /> skupenské teplo tání, přibližně 334 000 J/kg.
      Stálých 10 W/m² navíc po jeden den tak může roztavit asi 2,6 kg ledu na metr čtvereční, tedy vytvořit 2,6 mm vody.
      Je to početní odhad, který předpokládá využití celé této energie na tání. Znovuzamrznutí či zadržení vody může její odtok zmenšit.
      <SourceLink id="DOI_10_6028_jres_023_043"> (Osborne 1939)</SourceLink>
      <a href={`${media}/vypocty.mjs`}> Podklady a přepočet příkladu</a>.
    </p>

    <h3 id="ustup-cela">Čelo ustupuje, i když led stále teče dolů</h3>
    <p>
      V horní části přísun sněhu zpravidla převládá nad ztrátami, na nízkém jazyku bývá poměr opačný.
      Proudění přivádí led dolů a část místního tání tím nahrazuje. Když však u čela dlouhodobě ubývá více ledu, než přiteče,
      jazyk se ztenčí a jeho konec zanikne. Nové čelo pak leží výše v údolí.
      Ústup tedy neznamená, že se led začal pohybovat do kopce.
      U ledovce končícího na souši vnitřní přesun ledu sám hmotnost celku nemění, mění její rozložení.
      <SourceLink id="DOI_10_3189_s002214300000928x"> (Jóhannesson a kol. 1989)</SourceLink>
    </p>
    <p>
      Zmenšování může odstranit nízko položenou část s velkým táním a tím pomoci obnovit rovnováhu.
      Ztenčování současně snižuje povrch do teplejší výškové hladiny, což může tání podpořit.
      Výsledek závisí na tvaru údolí a rozložení plochy podle výšky.
      Proto se po změně klimatu nejprve může měnit hmotnost a tloušťka, zatímco čelo ještě nějakou dobu pokračuje v předchozím vývoji.
      <SourceLink id="DOI_10_3189_s002214300000928x"> (Jóhannesson a kol. 1989)</SourceLink>
    </p>

    <p id="nejistoty">
      Základní vztah mezi energií, táním a bilancí je přímo ověřený. Nejistější je velikost jednotlivých příspěvků u konkrétního ledovce
      a doba, za kterou se změní jeho čelo. Alpské číselné výsledky nelze přenést na všechny světové ledovce, zejména na ledovce s mocnou sutí nebo s čelem ve vodě.
    </p>
    <details className="article-details">
      <summary>Co výklad omezuje a jak jej lze dále prověřovat</summary>
      <p>
        Srážky se v horském terénu měří obtížně. Vítr a laviny přerozdělují sníh a několik měřicích bodů nemusí vystihnout celý ledovec.
        Proto sezonní měření kontrolujeme změnou objemu z opakovaných výškových map.
        Na Sarennes statistické zpracování oddělovalo místní rozdíly a doplňovalo chybějící hodnoty, nevytvořilo však další nezávislé měření.
        <SourceLink id="DOI_10_5194_tc_7_47_2013"> (Thibert a kol. 2013)</SourceLink>
      </p>
      <p>
        Na Morteratschi se zimní výška sněhu používala i jako vstup modelu. Nezávislé porovnání úbytku se proto vztahuje především na povrch bez sněhu.
        Výsledek jednoho místa také neurčuje příspěvek ztmavnutí k bilanci celého ledovce.
        Tenká nečistota může tání podpořit, dostatečně silná suť naopak led tepelně izoluje.
        <SourceLink id="DOI_10_3189_002214309789470969"> (Oerlemans a kol. 2009)</SourceLink>
        <SourceLink id="DOI_10_1017_9781009157896_011"> (IPCC 2021)</SourceLink>
      </p>
      <p>
        Konkrétní přisouzení úbytku zesílenému tání by oslabila dlouhá řada, v níž by při spolehlivě měřené nezměněné letní ztrátě
        pokles zimních přírůstků vysvětlil celý úbytek. Energetický výpočet by vyžadoval opravu, pokud by opakovaně
        předpovídal jiné tání než nezávislé měření i po zahrnutí nejistot. U délky ledovce je obdobnou kontrolou shoda předpovědi
        s později změřenou tloušťkou, rychlostí a polohou čela, které nebyly použity k nastavení modelu.
      </p>
    </details>

    <h2 id="shrnuti">Shrnutí</h2>
    <div className="method-conclusion"><p>
      Horský ledovec ztrácí hmotu, když jeho celkové ztráty dlouhodobě převáží nad přírůstkem sněhu.
      Při dnešním oteplování je hlavním globálním vlivem zesílené tání, které může převážit i nad bohatšími zimami.
      Rozlišujeme to měřením zimních přírůstků a letních ztrát a kontrolujeme výpočtem energie dostupné pro tání.
      Ubývající ledovec se ztenčuje a mění tok ledu. Jeho čelo ustoupí, když místní ztrátu nestačí nahradit přítok ledu shora.
      Proto může ustupovat se zpožděním, přestože led dál proudí dolů údolím. Sněžení, tvar údolí, suť a případný kontakt s vodou určují místní odlišnosti.
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
