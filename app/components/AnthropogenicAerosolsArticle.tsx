import Image from "next/image";
import Link from "next/link";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./AnthropogenicAerosolsArticle.module.css";

const media = "/media/prumyslove-aerosoly-a-oblaka";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "teplo-a-para", name: "Stopu vytváří především teplo a vodní pára z lodi",
    prediction: "Změnu oblaku musí vysvětlit dodaná voda nebo výstup vzduchu vyvolaný teplem. Při stejných emisích částic má odebrání tepelného zdroje podstatně oslabit vzniklou stopu.",
    test: "Při průletech porovnáme teplotu a vodní páru ve spalinové vlečce s okolím. V modelu ponecháme částice a vypneme odpadní teplo.",
    observation: "MAST 1994 zachytil měřitelná oteplení jen těsně u lodí, přírůstek páry nerozlišil. V testované simulaci se výsledky s teplem a bez něj přibližně od 8 km po větru významně nelišily.",
    verdict: "Jako hlavní vysvětlení nestačí",
    explanation: "Teplo může pomoci emisím vystoupat. Dlouhou stopu a změnu počtu kapek však zkoumané tepelné a vlhkostní emise nevysvětlují.", state: "insufficient",
  },
  {
    id: "castice-a-kapky", name: "Částice vytvářejí více menších oblačných kapek",
    prediction: "Při srovnatelném počasí rozhoduje schopnost emitovaných částic tvořit kapky. Účinnější částice mají zvýšit jejich počet. Při stejném množství kapalné vody se kapky zmenší a oblak více odráží světlo.",
    test: "Porovnáme lodě ve stejném vzduchu, jejich částice a kapky v oblaku. Potom sledujeme, zda po omezení síry v palivu zeslábne změna oblaků v lodním koridoru.",
    observation: "Dvojice lodí Tai He a Mount Vernon v roce 1994 vykázala rozdíl odpovídající účinnosti částic. V jihovýchodním Atlantiku v letech 2020–2022 zeslábl rozdíl ve velikosti kapek, méně průkazně i zesvětlení.",
    verdict: "Obstála, dnes přijímaná",
    explanation: "Vysvětlení spojuje laboratorní vznik kapek, přímá letecká měření i družicové sledování. Velikost celkového účinku dále mění voda a vývoj oblaku.", state: "supported",
  },
];

function Graphic({ name, alt, children }: { name: string; alt: string; children: React.ReactNode }) {
  return <figure id={name + "-schema"} className={`article-figure ${styles.explanatoryFigure}`}>
    <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Vysvětlující grafika, na úzké obrazovce posuvná do stran">
      <a href={`${media}/${name}.png`} aria-label="Otevřít grafiku v plné velikosti"><Image className="article-figure__media" src={`${media}/${name}.png`} width={1024} height={1536} alt={alt} unoptimized /></a>
    </div>
    <figcaption>{children} Vlastní ilustrace vytvořená pomocí AI, CC BY 4.0. Velikosti částic, lodě a vzdálenosti jsou schematické. <a href={media + "/podklady.txt"}>Podklady a význam čísel</a>.</figcaption>
  </figure>;
}

export function AnthropogenicAerosolsArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Jak si vysvětlujeme stopy v oblacích</h2>
    <p className="article-prose__intro">
      Na družicovém snímku oceánu je někdy v nízké oblačnosti vidět světlý pruh po větru od lodi.
      Při průletech takovými pruhy naměřili vědci v krychlovém centimetru vzduchu více kapek než ve stejném objemu okolního oblaku.
      Kapky ve stopě bývají také menší.
      Podobné pruhy lze sledovat i po větru od továren.
      Snímky a měření obou druhů stop ukazuje <Link href="/pozorovani/stopy-v-oblacich/">článek o pozorování oblaků za loděmi a průmyslovými zdroji</Link>.{" "}
      <SourceLink id="DOI_10_1175_Durkee_2000_TIOSPA">(Durkee a kol. 2000)</SourceLink>{" "}
      <SourceLink id="DOI_10_1038_s41586_019_1423_9">(Toll a kol. 2019)</SourceLink>
    </p>
    <p>
      Loď vypouští teplé spaliny, které obsahují vodní páru i drobné částice.
      Stoupající teplý vzduch může ovlivnit, kde se vytvoří kapky.
      Částice zase mohou nabídnout povrch, na němž se sráží vodní pára z okolního vzduchu.
      Jak poznáme, který z těchto dějů odpovídá za světlý pruh i daleko od lodi?
    </p>

    <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="anthropogenic-aerosols-caption"
      context={<p>Drobné pevné částice a kapalné kapičky rozptýlené ve vzduchu tvoří aerosol. Částici, na níž může vyrůst oblačná kapka, říkáme kondenzační jádro. Při výzkumu lodních stop u kalifornského pobřeží v rámci experimentu Monterey Area Ship Track (MAST) vědci měřili jak tato jádra, tak teplo a vodní páru ve spalinách.</p>}
      caption={<>Rozlišuje souběh složení emisí, změny kapek a odezvy záření. Samotný jasnější pruh by mezi vysvětleními nerozhodl. Podmínky jednotlivých zkoušek rozebírají příběhy níže.</>} />

    <h2 id="pribehy">Jak se hledala příčina jasnějších oblaků</h2>
    <HypothesisStory id="teplo-a-para" number={1} title="Stopu vytváří především teplo a vodní pára z lodi">
      <p>
        Když se v šedesátých letech začaly na družicových snímcích moře objevovat jasné oblačné čáry, jedním z možných vysvětlení byl výstup vzduchu za lodí.
        Horké spaliny stoupají a mohou s sebou strhnout vlhký okolní vzduch.
        Ten se při výstupu rozpíná a ochlazuje.
        Při dostatečném ochlazení se část jeho vodní páry srazí do kapek.
        Další vodní páru dodává samotné spalování paliva.
      </p>
      <p>
        William Porch a jeho kolegové v roce 1990 zvažovali, zda teplo z lodi a víření vzduchu za ní mohou takový pruh vytvořit a udržet.
        Zároveň se už zkoumal vliv částic.
        Pokud má za vznikem dlouhé stopy stát ohřev nebo přísun vody, záleží na tom, jak rychle se teplo a pára po cestě od lodi rozptýlí.{" "}
        <SourceLink id="DOI_10_1175_Durkee_2000_TIOSPA">(Durkee a kol. 2000, úvod)</SourceLink>
      </p>
      <Graphic name="teplo-a-para" alt="Teplo z lodi může podporovat výstup vzduchu a emise dodávají vodní páru. Letecký test hledá změny teploty a páry proti okolí. Druhý test porovnává simulace se stejnými částicemi, s teplem a bez něj. Výsledky nepodporují teplo a páru jako hlavní příčinu dlouhé stopy.">Údaj 150 m vymezuje blízkost lodí při čtyřech zachycených otepleních. Přibližně 8 km je vzdálenost po větru v konkrétním modelovém testu, nikoli obecná hranice pro všechny lodě. <SourceLink id="DOI_10_1175_Hobbs_2000_EFSWRT">(Hobbs a kol. 2000, oddíl 6g)</SourceLink>{" "}<SourceLink id="DOI_10_1175_Durkee_2000_TIOSPA">(Durkee a kol. 2000, oddíl 4a5)</SourceLink></Graphic>
      <h4 id="test-teplota-para" className={styles.testHeading}>Jak daleko od lodi lze změřit oteplení nebo přebytek páry?</h4>
      <p>
        V červnu 1994 výzkumná letadla u Kalifornie prolétala napříč proudem lodních spalin.
        Přístroje měřily teplotu a množství vodní páry uvnitř proudu i po jeho stranách.
        Peter Hobbs a jeho kolegové z údajů o motorech a palivu odhadli, že lodě uvolňovaly přibližně 2 až 22 megawattů tepla.
        Tepelný výkon udává, kolik energie loď předá vzduchu za sekundu.
        Teprve srovnání teplot uvnitř a vně proudu ale mohlo ukázat, jak velké oteplení zůstalo měřitelné po rozptýlení spalin.{" "}
        <SourceLink id="DOI_10_1175_Hobbs_2000_EFSWRT">(Hobbs a kol. 2000)</SourceLink>
      </p>
      <p>
        Teplejší vzduch přístroje zachytily jen při čtyřech průletech.
        Všechny proběhly do 150 metrů od lodi.
        Dál po větru už za týmiž loděmi měřitelné oteplení nenašly.
        Přebytek vodní páry nedokázaly odlišit od jejího přirozeného kolísání při žádném průletu.
        Stále ale zbývala možnost, že krátký počáteční ohřev pomohl spalinám vystoupat až k oblaku.{" "}
        <SourceLink id="DOI_10_1175_Hobbs_2000_EFSWRT">(Hobbs a kol. 2000, s. 2586–2587)</SourceLink>
      </p>
      <h4 id="test-model-teplo" className={styles.testHeading}>Vznikla by za stejnou lodí stopa i bez ohřevu?</h4>
      <p>
        Úlohu počátečního ohřevu šlo oddělit ve výpočtu pro loď Fremo Scorpius.
        Vědci v něm sledovali, jak se částice ze spalin rozptylují a kolik kapek na nich v oblaku vzniká.
        Ve dvou výpočtech ponechali stejné emise částic i stejné podmínky pro promíchávání vzduchu.
        V jednom nechali loď ohřívat okolní vzduch výkonem blízkým horní hranici odhadu pro její motor.
        Ve druhém zdroj tepla vypnuli.
        Případný rozdíl v počtu kapek mezi oběma výpočty tak mohli připsat ohřevu.{" "}
        <SourceLink id="DOI_10_1175_Durkee_2000_TIOSPA">(Durkee a kol. 2000, oddíl 4a5)</SourceLink>
      </p>
      <p>
        Letadlo za touto lodí naměřilo v okolním oblaku asi 70 kapek na krychlový centimetr vzduchu.
        Ve stopě jich připadalo na stejný objem asi 150.
        Vypočtené počty částic a kapek měřením dobře odpovídaly.
        Dál než přibližně osm kilometrů po větru vycházely počty kapek s ohřevem i bez něj téměř stejně.
        Teplo tedy mohlo blízko lodi pomoci spalinám vystoupat, zvláště při slabém promíchávání vzduchu.
        V tomto případě ale model vystihl změnu daleko od lodi i bez přidaného tepla.{" "}
        <SourceLink id="DOI_10_1175_Hobbs_2000_EFSWRT">(Hobbs a kol. 2000)</SourceLink>{" "}
        <SourceLink id="DOI_10_1175_Durkee_2000_TIOSPA">(Durkee a kol. 2000)</SourceLink>
      </p>
    </HypothesisStory>

    <HypothesisStory id="castice-a-kapky" number={2} title="Částice vytvářejí více menších oblačných kapek">
      <p>
        Částice ve spalinách mohou změnit oblak i tehdy, když většina vody v kapkách pochází z okolního vzduchu.
        Sean Twomey v roce 1974 popsal, co by se mělo stát, pokud částice ze znečištěného vzduchu poslouží jako další kondenzační jádra.
        Rozdělí-li se stejné množství kapalné vody mezi více kapek, budou v průměru menší.
        V roce 1977 výpočtem ukázal, proč má takový oblak odrazit větší část dopadajícího slunečního světla.{" "}
        <SourceLink id="DOI_10_1016_0004_6981_74_90004_3">(Twomey 1974)</SourceLink>{" "}
        <SourceLink id="DOI_10_1175_Twomey_1977_TIOPOT">(Twomey 1977)</SourceLink>
      </p>
      <p>
        Pro dvě lodě plující pod podobným oblakem z toho plyne ověřitelná předpověď.
        Pokud jedna vypouští dost částic, na nichž mohou vyrůst kapky, a druhá převážně částice příliš malé, výrazná stopa může vzniknout jen za první lodí.
        Podobně by měl vliv lodí na kapky zeslábnout tam, kde po změně paliva ubydou částice vhodné pro jejich vznik.{" "}
        <SourceLink id="DOI_10_1175_Hobbs_2000_EFSWRT">(Hobbs a kol. 2000)</SourceLink>{" "}
        <SourceLink id="DOI_10_5194_acp_23_8259_2023">(Diamond 2023)</SourceLink>
      </p>
      <Graphic name="castice-a-kapky" alt="Částice z emisí slouží jako zárodky kapek. Při stejném množství vody více menších kapek zesílí rozptyl světla. První test porovnává dvě lodě v témže vzduchu. Druhý sleduje zeslabení změny kapek po omezení síry v palivu v jihovýchodním Atlantiku.">Srovnání kapek předpokládá stejné množství kapalné vody. Nakreslený počet a rozměry kapek nepředstavují naměřený vzorek. U druhého testu je „okolní oblak“ zkratkou pro statistický odhad sestavený z okolních měření a povětrnostních podmínek. <SourceLink id="DOI_10_1175_Twomey_1977_TIOPOT">(Twomey 1977)</SourceLink>{" "}<SourceLink id="DOI_10_1175_Durkee_2000_TIOSPA">(Durkee a kol. 2000)</SourceLink>{" "}<SourceLink id="DOI_10_5194_acp_23_8259_2023">(Diamond 2023)</SourceLink></Graphic>
      <h4 id="test-dve-lode" className={styles.testHeading}>Čím se lišily spaliny dvou lodí ve stejném vzduchu?</h4>
      <p>
        Takovou dvojici zastihli vědci 27. června 1994.
        Nákladní loď Tai He i vojenská loď Mount Vernon pluly u Kalifornie ve stejné vzduchové hmotě.
        V okolním oblaku bylo u obou lodí přibližně 70 až 100 kapek v krychlovém centimetru vzduchu.
        Za Tai He vznikla viditelná stopa, za Mount Vernon žádnou nepozorovali.
        Podmínky pro vznik kapek tedy byly podobné a vědci mohli hledat příčinu rozdílu přímo ve spalinách.
      </p>
      <p>
        Za Mount Vernon převažovaly velmi malé částice, zatímco Tai He vypouštěla ve velkém množství i částice větší.
        Vědci proto ve vzorcích spalin změřili celkový počet částic a zjistili, kolik z nich při stejné vlhkosti poslouží jako zárodky kapek.
        Za Tai He byl podíl takových částic vyšší.
        Do podobného oblaku tedy lodě dodávaly částice s různou schopností tvořit kapky a stopa se objevila tam, kde ji toto vysvětlení předpovídalo.{" "}
        <SourceLink id="DOI_10_1175_Durkee_2000_TIOSPA">(Durkee a kol. 2000, oddíl 4a2)</SourceLink>
      </p>
      <p>
        Porovnání obou lodí doplnilo měření tepla a páry, všechna tato zjištění však pocházejí z téže kalifornské výpravy.
        Jestli částice mění oblaky i v jiných podmínkách a po delší dobu, šlo vyzkoušet tam, kde lodní doprava pokračovala a změnilo se složení spalin.{" "}
        <SourceLink id="DOI_10_1175_Hobbs_2000_EFSWRT">(Hobbs a kol. 2000)</SourceLink>{" "}
        <SourceLink id="DOI_10_5194_acp_22_641_2022">(Christensen a kol. 2022)</SourceLink>
      </p>
      <h4 id="test-palivo" className={styles.testHeading}>Jak se změnily oblaky po omezení síry v lodním palivu?</h4>
      <p>
        Při spalování paliva s obsahem síry vzniká oxid siřičitý.
        Z tohoto plynu se ve vzduchu mohou tvořit sírany, které se stávají součástí částic a pomáhají jim vázat vodu.
        Lodě i průmyslové zdroje tedy mohou ovlivnit zásobu kondenzačních jader dvojím způsobem.
        Částice vypouštějí přímo, další vznikají až z plynů po cestě od zdroje.{" "}
        <SourceLink id="DOI_10_1175_Hobbs_2000_EFSWRT">(Hobbs a kol. 2000)</SourceLink>{" "}
        <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, kapitola 7)</SourceLink>
      </p>
      <p>
        V lednu 2020 klesl celosvětový limit obsahu síry v lodním palivu z 3,5 % na 0,5 % jeho hmotnosti.
        Loď mohla používat i palivo s vyšším obsahem síry, pokud čištěním spalin dosáhla odpovídajícího snížení emisí.
        Vědci tak mohli sledovat účinek omezení síry i na trasách, kde lodě dál proplouvaly pod oblačností.
      </p>
      <p>
        Tianle Yuan a jeho kolegové sledovali, jak velkou část nízké oblačnosti zabíraly na družicových snímcích rozpoznatelné lodní stopy.
        V roce 2020 byl tento podíl nejnižší za sledované období 2003–2020.
        V pěti hlavních lodních trasách klesl podíl oproti dlouhodobému průměru nejméně o polovinu.
        Lodní provoz ve světě přitom podle záznamů o poloze lodí poklesl asi o 1,4 % a stopy zůstaly vzácné i v sedmi sledovaných měsících roku 2021.
        Autoři proto pokládají změnu paliva za hlavní příčinu poklesu.
        Menší část připisují útlumu dopravy během pandemie.{" "}
        <SourceLink id="DOI_10_1126_sciadv_abn7988">(Yuan a kol. 2022)</SourceLink>
      </p>
      <p>
        Četnost viditelných pruhů ještě neříká, o kolik se změnily samotné kapky.
        Michael Diamond proto porovnal oblaky v hlavní lodní trase v jihovýchodním Atlantiku s odhadem, jak by vypadaly bez místních lodních emisí.
        Tento odhad sestavil z družicových měření po stranách trasy.
        Aby srovnal místa s podobnými podmínkami pro tvorbu oblaků, využil vedle jejich polohy podle potřeby také údaje o počasí, například o teplotě moře nebo rychlosti větru.
        Pro každé tříleté období pak od pozorované hodnoty uvnitř trasy odečetl hodnotu odhadnutou pro stejné místo bez lodí.{" "}
        <SourceLink id="DOI_10_5194_acp_23_8259_2023">(Diamond 2023)</SourceLink>
      </p>
      <p>
        Velikost kapek Diamond vyjádřil efektivním poloměrem.
        Ten při průměrování dává větší váhu kapkám s větším průřezem.
        Měřítkem je zde mikrometr, miliontina metru.
        V září až listopadu let 2017–2019 byl efektivní poloměr v lodní trase o 0,46 mikrometru menší než v odhadu bez lodí.
        V týchž měsících let 2020–2022 už rozdíl činil jen 0,16 mikrometru.
        Zmenšení kapek bylo po změně paliva nejslabší ze všech sedmi sledovaných tříletých období.
      </p>
      <p>
        Odrazivost udává, jaká část dopadajícího světla se vrací vzhůru.
        Při úplně zatažené obloze byl odhadovaný podíl odraženého světla v lodní trase před změnou paliva o 0,83 procentního bodu vyšší než bez místních emisí.
        Po změně paliva se rozdíl zmenšil na 0,36 procentního bodu.
        U tohoto posledního odhadu zahrnuje 95% interval spolehlivosti i nulu.
        Změna účinku lodí se tedy ve velikosti kapek projevila zřetelněji než v jasu oblaků.
        Obě srovnání i jejich nejistoty zachycuje <Link href="/pozorovani/stopy-v-oblacich/#vysledky">graf v článku o pozorování</Link>.{" "}
        <SourceLink id="DOI_10_5194_acp_22_641_2022">(Christensen a kol. 2022)</SourceLink>{" "}
        <SourceLink id="DOI_10_5194_acp_23_8259_2023">(Diamond 2023)</SourceLink>
      </p>
    </HypothesisStory>

    <h2 id="jak-mechanismus-funguje">Jak částice změní kapky a odraz světla</h2>
    <p>
      Za kalifornskými loděmi se přebytečné teplo rychle rozptýlilo, zatímco počet kapek v oblaku odpovídal tomu, jaké částice loď vypouštěla.
      Také v Atlantiku zeslábl vliv lodí na velikost kapek poté, co se omezily emise síry.
      V obou případech spojují emise s jasem oblaku kapky.
      Jejich počet se může zvýšit tam, kde proud vzduchu zanese vhodné částice do prostředí dost vlhkého pro růst kapek.{" "}
      <SourceLink id="DOI_10_5194_acp_22_641_2022">(Christensen a kol. 2022)</SourceLink>
    </p>
    <h3 id="vznik-kapky">Kdy může na částici vyrůst oblačná kapka?</h3>
    <p>
      Nad rovnou hladinou čisté vody se část vody vypařuje a část páry se vrací do kapaliny.
      Když se oba děje vyrovnají, je vzduch nad hladinou vodní párou nasycen.
      Při nižší teplotě stačí k nasycení méně páry v daném objemu vzduchu.
      Když tedy vlhký vzduch stoupá a ochlazuje se, může v něm být páry víc, než odpovídá nasycení.
      Tomuto stavu říkáme přesycení.{" "}
      <SourceLink id="DOI_10_5194_acp_8_1153_2008">(Rose a kol. 2008)</SourceLink>
    </p>
    <p>
      Na kterých částicích začne voda při takovém přesycení přibývat, záleží na jejich velikosti a složení.
      Například na částici soli vznikne vodní roztok.
      Nad ním stačí k rovnováze mezi vypařováním a kondenzací méně páry než nad čistou vodou.
      Opačným směrem působí zakřivený povrch drobné kapky.
      Nad silně zakřiveným povrchem velmi malé kapky je k rovnováze potřeba víc páry než nad rovnou hladinou stejného složení.
      Jak velké přesycení je potřeba, aby se kapka udržela a dál rostla, proto závisí na velikosti původní částice i na látkách, které obsahuje.{" "}
      <SourceLink id="DOI_10_5194_acp_8_1153_2008">(Rose a kol. 2008)</SourceLink>
    </p>
    <p>
      Rose a spoluautoři tuto hranici měřili v komoře, v níž mohli nastavit vlhkost vzduchu.
      Do komory přiváděli částice síranu amonného nebo kuchyňské soli vytříděné podle průměru.
      Jejich průměry sahaly od 20 do 220 nanometrů, tedy miliardtin metru.
      U každé vybrané velikosti změřili, jaký podíl částic vyrostl v kapky.
      Při nižším přesycení musely být částice téže soli větší, aby na nich kapky narostly.
      Výsledky pro obě soli srovnali s výpočtem.
      Aby věděli, jakému přesycení byly částice skutečně vystaveny, museli při kalibraci přístroje počítat i s vlivem teploty a tlaku.{" "}
      <SourceLink id="DOI_10_5194_acp_8_1153_2008">(Rose a kol. 2008)</SourceLink>
    </p>
    <h3 id="rozptyl-svetla">Proč oblak s drobnějšími kapkami odráží více světla?</h3>
    <p>
      Představme si, že z téhož množství vody vznikne buď jedna kulová kapka, nebo osm stejně velkých kulových kapek.
      Každá z osmi má poloviční poloměr, protože při zmenšení poloměru na polovinu klesne objem koule na osminu.
      Z pohledu dopadajícího paprsku však každá kapka zabírá kruh o čtvrtinové ploše.
      Osm takových kruhů má dohromady dvojnásobnou plochu původního kruhu.
      Paprsku, který prochází oblakem s větším počtem drobných kapek, tak s větší pravděpodobností leží některá kapka v cestě.{" "}
      <SourceLink id="DOI_10_1175_Twomey_1977_TIOPOT">(Twomey 1977)</SourceLink>
    </p>
    <p>
      Na kapce světlo mění směr a na své cestě oblakem se může rozptýlit mnohokrát.
      Pokud při stejném osvětlení přibude kapek a množství kapalné vody nad danou plochou zůstane stejné, větší část světla se vrátí vzhůru.
      Tomuto zesvětlení oblaku říkáme Twomeyův efekt.
      O kolik se skutečný oblak zesvětlí, záleží na velikostech kapek, směru osvětlení i na opakovaném rozptylu.
      Zdvojnásobení součtu průřezů v našem příkladu proto neznamená dvojnásobnou odrazivost.{" "}
      <SourceLink id="DOI_10_1175_Twomey_1977_TIOPOT">(Twomey 1977)</SourceLink>
    </p>
    <h3 id="vyvoj-oblaku">Kolik vody zůstane ve stopě za lodí nebo továrnou?</h3>
    <p>
      Množství kapalné vody v oblaku se může po příchodu částic změnit.
      Drobné kapky podobné velikosti padají podobnou rychlostí.
      Méně často proto jedna dostihne druhou a spojí se s ní do větší kapky, která by mohla z oblaku vypadnout.
      Když mrholení zeslábne, může v oblaku zůstat více vody.
      Přimíchá-li se však do oblaku suchý vzduch shora, část vody z kapek se vypaří.
      Při úbytku vody může původní zesvětlení zeslábnout.{" "}
      <SourceLink id="DOI_10_1038_s41586_019_1423_9">(Toll a kol. 2019)</SourceLink>
    </p>
    <p>
      Velle Toll a jeho kolegové zkoumali, jak se zásoba vody mění po větru od průmyslových zdrojů a požárů.
      V družicových snímcích za patnáct let vyhledali asi 2 400 stop.
      U každé srovnávali množství kapalné vody ve sloupci oblaku uvnitř stopy a v sousední části oblaku mimo stopu.
      Výsledky porovnali i s dřívějšími měřeními lodních a sopečných stop.
      V průmyslových stopách ve vrstevnatých oblacích nad pevninou našli v průměru o 8 % méně vody než v okolí, v porovnávaných lodních stopách naopak o 9 % více.
      V obou skupinách se vyskytly přírůstky i úbytky.
      Změna velikosti kapek tedy sama neurčuje, kolik vody oblak udrží a jak dlouho zůstane jasnější.{" "}
      <SourceLink id="DOI_10_1038_s41586_019_1423_9">(Toll a kol. 2019)</SourceLink>
    </p>
    <h3 id="klimaticky-ucinek">Jak velký je účinek částic v měřítku celé Země?</h3>
    <p>
      U lodní stopy sledujeme světlo odražené od oblačných kapek.
      Při hodnocení klimatu je třeba započítat i působení samotných částic na záření.
      Síranové částice sluneční světlo převážně rozptylují.
      Černý uhlík obsažený v sazích ho naopak silně pohlcuje a tím ohřívá okolní vzduch.
      Dva zdroje znečištění tak mohou působit na sluneční záření různě i při stejné oblačnosti.{" "}
      <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, kapitola 7, oddíl 7.3.3)</SourceLink>
    </p>
    <p>
      Mezivládní panel pro změnu klimatu (IPCC) vyhodnotil společný účinek částic z lidské činnosti i rychlých změn, které tyto částice vyvolávají v atmosféře a oblacích.
      Pro rok 2019 vůči roku 1750 odhadl, jak aerosoly změnily rozdíl mezi zářením, které Země přijímá, a tím, které na horní hranici atmosféry odchází do vesmíru.
      V průměru přes celou Zemi vychází změna na −1,1 wattu na metr čtvereční.
      Velmi pravděpodobné rozmezí je −1,7 až −0,4 W/m².
      Záporná hodnota říká, že působením aerosolů Zemi zbývá méně zářivé energie.
      Tento účinek částečně tlumí oteplování skleníkovými plyny, které vysvětluje <Link href="/mechanismy/energeticka-bilance-zeme/">článek o energetické bilanci Země</Link>.{" "}
      <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, kapitola 7)</SourceLink>
    </p>
    <p>
      Počet kapek v jedné stopě lze ověřit průletem.
      Pro celosvětový odhad je obtížnější určit, kolik vody oblaky v různých podmínkách získají nebo ztratí, jakou plochu pokryjí a jak dlouho vydrží.
      Kdyby měření na větších územích ukázala trvalejší úbytek vody, než s jakým se dnes počítá, snížil by se i odhad ochlazení způsobeného zesvětlením oblaků.{" "}
      <SourceLink id="DOI_10_5194_acp_22_641_2022">(Christensen a kol. 2022)</SourceLink>
    </p>
    <details className="method-details"><summary>Nejistoty, meze a další ověřování</summary>
      <p>
        <strong>Které stopy na snímku rozeznáme?</strong> Jasný pruh snadno vynikne v souvislém nízkém oblaku.
        V členité oblačnosti nebo při slabším rozdílu proti okolí může zůstat skrytý.
        Výběrem viditelných stop tak častěji zachytíme právě podmínky, ve kterých je změna nápadná.
        Pro větší oblast potřebujeme měření i v místech, kde jednotlivý pruh nerozlišíme.{" "}
        <SourceLink id="DOI_10_5194_acp_22_641_2022">(Christensen a kol. 2022)</SourceLink>
      </p>
      <p>
        <strong>Jak přesný je odhad oblaku bez lodí?</strong> Oblak v atlantské trase měří družice, zatímco jeho podobu bez místních emisí Diamond vypočítal z okolních měření.
        Pokud se počasí uvnitř trasy a po jejích stranách liší způsobem, který výpočet nezachytí, může se do rozdílu připsaného lodím promítnout i tento vliv.{" "}
        <SourceLink id="DOI_10_5194_acp_23_8259_2023">(Diamond 2023)</SourceLink>
      </p>
      <p>
        <strong>Co by oslabilo vysvětlení konkrétní stopy?</strong> Ve více případech by bylo třeba současně měřit vhodná kondenzační jádra i kapky uvnitř stopy a v okolním oblaku.
        Kdyby při srovnatelné vlhkosti a proudění v oblaku opakovaně přibylo částic vhodných pro vznik kapek a počet kapek se přitom nezměnil, bylo by třeba pro takovou stopu hledat jiné vysvětlení.{" "}
        <SourceLink id="DOI_10_1038_s41586_019_1423_9">(Toll a kol. 2019)</SourceLink>
      </p>
    </details>

    <h2 id="shrnuti">Shrnutí fungování mechanismu</h2>
    <div className="method-conclusion">
      <p>
        Do nízkého oblaku mohou vítr a stoupající vzduch zanést částice z lodních nebo průmyslových emisí.
        Na vhodných částicích se sráží vodní pára.
        Když se stejné množství kapalné vody rozdělí mezi více kapek, jsou kapky menší a oblak odráží více slunečního světla.
        Na snímku se pak může objevit světlý pruh.
        Při srovnání dvou lodí ve stejném vzduchu vznikla stopa za tou, která vypouštěla více vhodných částic.
        Po omezení síry v palivu zeslábl vliv lodí na velikost kapek i v atlantské lodní trase.
        Jak jasný pruh nakonec bude, závisí i na tom, kolik vody se z oblaku vypaří nebo z něj vypadne jako srážky.
      </p>
    </div>

    <h2 id="prameny">Prameny, data a grafiky</h2>
    <div className="article-source-groups">
      <section><h3>Princip a experimenty</h3><ul>
        <li><SourceLink id="DOI_10_1016_0004_6981_74_90004_3">Twomey 1974: původní vysvětlení vlivu částic na odrazivost</SourceLink></li>
        <li><SourceLink id="DOI_10_1175_Twomey_1977_TIOPOT">Twomey 1977: počet a velikost kapek, výpočet rozptylu</SourceLink></li>
        <li><SourceLink id="DOI_10_1175_Hobbs_2000_EFSWRT">Hobbs a kol. 2000: částice, teplo a vodní pára v lodních emisích</SourceLink></li>
        <li><SourceLink id="DOI_10_1175_Durkee_2000_TIOSPA">Durkee a kol. 2000: porovnání lodí a modelové zkoušky MAST</SourceLink></li>
        <li><SourceLink id="DOI_10_5194_acp_8_1153_2008">Rose a kol. 2008: kontrolované pokusy se vznikem kapek</SourceLink></li>
      </ul></section>
      <section><h3>Novější testy a souhrn poznání</h3><ul>
        <li><SourceLink id="DOI_10_1126_sciadv_abn7988">Yuan a kol. 2022: výskyt lodních stop v letech 2003–2020</SourceLink></li>
        <li><SourceLink id="DOI_10_5194_acp_23_8259_2023">Diamond 2023: změna kapek a odrazivosti v atlantském koridoru</SourceLink></li>
        <li><SourceLink id="DOI_10_1038_s41586_019_1423_9">Toll a kol. 2019: přírůstky a úbytky kapalné vody</SourceLink></li>
        <li><SourceLink id="DOI_10_5194_acp_22_641_2022">Christensen a kol. 2022: syntéza přirozených experimentů</SourceLink></li>
        <li><SourceLink id="DOI_10_1017_9781009157896_009">IPCC AR6, kapitola 7: hodnocení celkového radiačního účinku</SourceLink></li>
      </ul></section>
      <section><h3>Možnost vlastní kontroly</h3><ul>
        <li><Link href="/pozorovani/stopy-v-oblacich/#data">Pozorování: snímek, datové archivy, graf a jeho reprodukce</Link></li>
        <li><Link href="/metody/opticke-a-multispektralni-snimkovani/">Optické a multispektrální snímkování</Link> a <Link href="/metody/mereni-radiacnich-toku/">měření radiačních toků</Link></li>
        <li><a href={media + "/podklady.txt"}>Věcné podklady ilustrací</a> a <a href={media + "/prompts.json"}>zadání pro jejich vytvoření</a>. Ilustrace ani geometrický příklad nepředstavují naměřená data.</li>
      </ul></section>
    </div>
  </div></article>;
}
