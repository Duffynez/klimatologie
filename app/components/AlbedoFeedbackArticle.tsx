import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./AlbedoFeedbackArticle.module.css";

const media = "/media/albedo-snehu-a-ledu";
const hypotheses: readonly MechanismHypothesis[] = [{
  id: "svetly-povrch", name: "Úbytek a tmavnutí sněhu a ledu zesilují ohřev",
  prediction: "Při stejném osvitu pohltí tmavší povrch více energie. Rozdíl mezi zasněženou a odkrytou plochou má narůstat s množstvím dopadajícího záření.",
  test: "Vědci měří odraz sněhu při změně velikosti zrn a při tání. Na družicových mapách porovnávají ústup ledu s odrazem do vesmíru. Na pokusných plochách sledují osvit, sníh a teplotu.",
  observation: "Tající sníh odrážel méně světla. S ústupem arktického ledu se méně záření vracelo i do vesmíru. Na rašeliništi se úbytek sněhu projevil na denní teplotě více za slunných dnů.",
  verdict: "Podpořená zesilující zpětná vazba",
  explanation: "Po počátečním oteplení může tmavší povrch pohltit dost energie pro další ohřev či tání. Velikost účinku závisí na osvitu, oblačnosti a povrchu, který se odkryje.",
  state: "supported",
}];
const tests = [
  { title: "1. Odraz sněhových zrn", prediction: "Sníh s jemnějšími zrny má odrážet více blízkého infračerveného světla.", test: "Odraz při dvou vlnových délkách porovnáme s povrchem zrn připadajícím na kilogram sněhu.", result: "Podle odrazu se dala plocha zrn odhadnout. Velmi řídký čerstvý sníh vyžadoval jinou kalibraci." },
  { title: "2. Tající sníh na mořském ledu", prediction: "I na dosud zasněžené kře se odraz při tání změní.", test: "Odraz vypočtený z vlastností sněhových vrstev porovnáme s množstvím světla, které se nad sněhem skutečně naměřilo.", result: "Výpočet vystihl pokles odrazu při tání i jeho růst po sněžení. Ve viditelném světle záleželo také na nečistotách." },
  { title: "3. Odraz do vesmíru", prediction: "Ústup světlé pokrývky má být patrný také na množství záření, které se vrací do vesmíru.", test: "Výpočet z map sněhu a ledu zahrnuje i oblaka. Nad arktickým oceánem lze odraz měřit družicemi.", result: "Oba postupy ukázaly větší příjem sluneční energie. Výše odhadu se mění s oblastí, obdobím a popisem oblaků." },
  { title: "4. Sníh a denní teplota", prediction: "Oteplení zmenší zasněženou plochu. Kde sníh chybí, půda pohltí víc světla a za slunečného dne se může více ohřát i vzduch.", test: "Vědci srovnali sníh při různém vyhřívání. Zpětný vliv sněhu na teplotu hledali na plochách bez vytápění.", result: "Oteplení o 2,25 °C zhruba rozpůlilo podíl zasněžené plochy. Na nevyhřívaných plochách přispívalo méně sněhu k vyšší denní teplotě hlavně za silného osvitu." },
];

export function AlbedoFeedbackArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Proč se z arktického oceánu vrací méně světla do vesmíru?</h2>
    <p className="article-prose__intro">
      V letech 2000–2011 ubývalo v arktickém oceánu mořského ledu. Družice zároveň zaznamenaly, že se z této oblasti vrací do vesmíru méně slunečního záření.
      Z rozdílu mezi dopadajícím a odraženým zářením vyšlo, že oceán a atmosféra nad ním dohromady pohlcovaly více sluneční energie.
      Pro <Link href="/pozorovani/ubytek-arktickeho-ledu/#odrazivost-arktidy">oceán severně od 60° severní šířky</Link> činil nárůst v průměru 4,2 wattu na metr čtvereční (W/m²). Jeden watt odpovídá jednomu joulu energie za sekundu.
      <SourceLink id="DOI_10_1073_pnas_1318201111"> (Pistone a kol. 2014, obr. 1 a 4)</SourceLink>
    </p>
    <p>
      Podíl slunečního záření, který se odrazí, se nazývá <strong>albedo</strong>. Sníh s albedem 0,8 odráží 80 % záření, které na něj dopadá.
      Při <Link href="/metody/mereni-radiacnich-toku/">měření nad sněhem</Link> můžeme zjistit odrazivost samotného povrchu. Družice zachytí navíc světlo odražené oblaky a rozptýlené vzduchem.
      Podílu dopadajícího záření, který se vrátí až do vesmíru, říkáme <strong>planetární albedo</strong>. Jak velkou část záření tedy po ústupu sněhu a ledu pohltí Země navíc?
    </p>

    <h2 id="hypotezy">Jedna hypotéza a její předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="albedo-hypotheses-caption"
      context={<p>Porovnejme tutéž plochu před ústupem sněhu nebo ledu a po něm. Kdyby se zároveň rozplynuly oblaky, na povrch by začalo dopadat více světla. Abychom zjistili účinek samotné pokrývky, ponecháme ve výpočtu stejné sluneční záření i stejnou atmosféru.</p>}
      caption={<>Z dopadajícího a odraženého záření lze určit, kolik energie povrch pohltí. K ověření zpětné vazby potřebujeme také zjistit, zda tato energie podpoří další tání nebo ohřev.</>} />

    <h2 id="pribehy">Proč tmavší povrch může urychlit další tání</h2>
    <HypothesisStory id="svetly-povrch" number={1} title="Úbytek a tmavnutí sněhu a ledu zesilují ohřev">
      <p>
        Michail Budyko v roce 1969 zkoumal, jak se může rozšířit zalednění, když na Zemi začne dopadat méně slunečního záření.
        V jeho modelu se při počátečním ochlazení rozšířila plocha ledu. Led odrážel více světla, takže k ohřevu povrchu zbývalo méně energie a ochlazení zesílilo.
        Při počátečním oteplení vedl ústup ledu naopak k většímu pohlcování sluneční energie. Právě tomu, že změna pokrývky zesiluje původní ochlazení či oteplení, říkáme <strong>kladná zpětná vazba</strong>.
        Budyko přidělil ledu a nezaledněným oblastem různou odrazivost předem. Jak silná je tato vazba v přírodě, závisí na skutečném rozdílu mezi povrchy.
        <SourceLink id="1969_Budyko"> (Budyko 1969)</SourceLink>
      </p>

      <h4 id="pohlceni">Kolik záření zůstane u povrchu</h4>
      <p>
        Když na pevnině roztaje sníh, sluneční světlo dopadá přímo na půdu nebo vegetaci. Když ustoupí mořský led, odkryje se hladina vody.
        Tyto povrchy obvykle odrážejí méně světla než sníh a led. Ztmavnout může i pokrývka, která dosud nezmizela, třeba když se na ledu vytvoří jezírka vody z tání.
        Ze stejného množství dopadajícího záření pak větší díl zůstane v pokrývce a jejím podkladu. Do tohoto součtu patří i světlo, které projde ledem a pohltí ho až voda pod ním.
        <SourceLink id="DOI_10_1017_9781009157896_009"> (IPCC 2021, oddíl 7.4.2.3)</SourceLink>
      </p>
      <p>
        Označme dopadající sluneční tok <InlineMath tex={String.raw`S`} /> a odražený podíl, tedy albedo, <InlineMath tex={String.raw`\alpha`} />.
        Zbývající podíl dopadajícího toku se pohltí. Pohlcený tok <InlineMath tex={String.raw`Q`} /> vyjadřujeme stejně jako dopadající tok ve W/m².
        Druhá část rovnice ukazuje, jak se pohlcený tok změní při stejném osvitu. Značka <InlineMath tex={String.raw`\Delta`} /> označuje rozdíl nové a původní hodnoty.
      </p>
      <Equation tex={String.raw`Q=(1-\alpha)S,\qquad \Delta Q=-S\,\Delta\alpha`} />
      <p>
        Pro ilustraci nechme na dva povrchy dopadat shodně 200 W/m². Světlý povrch s albedem 0,8 odrazí čtyři pětiny světla a pohltí 40 W/m².
        Tmavý povrch s albedem 0,2 pohltí čtyři pětiny, tedy 160 W/m². Rozdíl v příjmu při tomto zvoleném osvitu činí 120 W/m².
        Kdyby dopadala polovina záření, byl by při stejných dvou hodnotách albeda poloviční i rozdíl. V polární noci tento sluneční příspěvek k ohřevu mizí.
        <SourceLink id="MEDIA_ALBEDO_2026"> (Podklady k výpočtu)</SourceLink>
      </p>
      <p>
        Ve schématu proto na obě plochy dopadá stejné množství světla, označené žlutými šipkami. Po ústupu pokrývky se menší část světla odrazí vzhůru (zelená šipka)
        a větší část se pohltí (oranžová šipka). Jestliže tato energie ohřeje okolí nebo roztaví další led, tmavá plocha se může dále zvětšit.
      </p>
      <figure className={`article-figure ${styles.explanatoryFigure}`}>
        <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Schéma zpětné vazby, na úzké obrazovce posuvné do stran">
          <a href={`${media}/mechanismus.svg`} aria-label="Otevřít schéma v plné velikosti"><Image className="article-figure__media" src={`${media}/mechanismus.svg`} width={1100} height={660} alt="Sníh a led vracejí část slunečního záření vzhůru. Po jejich ústupu tmavší voda nebo půda přijímá více energie, která může podpořit další tání. Oblaka mění to, kolik této změny zachytí družice." unoptimized /></a>
        </div>
        <div className={styles.testPanels}>{tests.map(test => <section className={styles.testPanel} key={test.title}>
          <h4>{test.title}</h4><dl><dt>Předpověď</dt><dd>{test.prediction}</dd><dt>Zkouška</dt><dd>{test.test}</dd><dt>Výsledek</dt><dd>{test.result}</dd></dl>
        </section>)}</div>
        <figcaption>Pro zesilující vazbu potřebujeme obě cesty: oteplení musí měnit pokrývku a změna pokrývky musí ovlivnit příjem energie.
          Vlastní kvalitativní schéma Klimatologie.eu připravené s pomocí AI, CC BY 4.0. Velikosti šipek nejsou měřená množství.
          <a href={`${media}/podklady.txt`}> Prameny a podklady</a>.
        </figcaption>
      </figure>

      <h4 className={styles.testHeading} id="test-laborator">Zkouška 1. Proč záleží na velikosti sněhových zrn?</h4>
      <p>
        Kus čistého ledu může být průhledný, zatímco sníh ze stejného ledu je bílý. Mezi sněhovými zrny je totiž vzduch. Na rozhraních ledu a vzduchu mění světlo směr a část se po opakovaném rozptylu vrací vzhůru.
        Ve větších zrnech urazí světlo delší dráhu uvnitř ledu, než znovu narazí na rozhraní. Led tak může pohltit větší část záření. Zvlášť dobře je tento rozdíl patrný v blízké infračervené části slunečního záření, na vlnových délkách delších než u viditelného světla.
        <SourceLink id="DOI_10_5194_tc_3_167_2009"> (Gallet a kol. 2009)</SourceLink>
      </p>
      <p>
        Při stejné hmotnosti sněhu mají jemnější zrna dohromady větší povrch. Jean-Charles Gallet a kolegové v roce 2009 zkoušeli, zda vzorek s větším povrchem zrn na kilogram opravdu odráží více záření. Použili dvě vlnové délky, 1 310 a 1 550 nanometrů. Nanometr je miliardtina metru.
        Světlo odražené od vzorku sbírala dutá koule, aby se zachytily i paprsky rozptýlené do stran. Plochu zrn přitom změřili zvlášť. Při velmi nízké teplotě nechali na ledu ulpět metan a z jeho množství určili, jak velký povrch mu byl přístupný.
        <SourceLink id="DOI_10_5194_tc_3_167_2009"> (Gallet a kol. 2009, obr. 2 a 5)</SourceLink>
      </p>
      <p>
        V těchto pásmech sníh s větší plochou zrn na kilogram odrážel více záření. Vztah byl natolik pravidelný, že se dala plocha zrn odhadnout už podle samotného odrazu.
        Pro velmi řídký čerstvý sníh potřebovali jiný převod mezi odrazem a plochou zrn.
        <SourceLink id="DOI_10_5194_tc_3_167_2009"> (Gallet a kol. 2009, obr. 5 a 8)</SourceLink>
      </p>

      <h4 className={styles.testHeading} id="test-teren">Zkouška 2. Kolik světla odráží tající sníh na mořském ledu?</h4>
      <p>
        Na mořském ledu se vrství sníh z několika sněžení a jednotlivé vrstvy se při tání mění různě. Takovou pokrývku v letech 2015 a 2016 sledovali Gauthier Vérin a kolegové u Qikiqtarjuaqu v Baffinově zálivu.
        U jednotlivých vrstev změřili tloušťku, hustotu a povrch zrn připadající na kilogram sněhu. Z těchto vlastností vypočítali, jaká část dopadajícího světla by se měla vrátit nad sníh.
        Výsledek mohli zkontrolovat při vlnových délkách od 300 do 1 100 nanometrů, kde vedle vlastností sněhu přímo měřili také jeho odraz.
        <SourceLink id="DOI_10_5194_tc_16_3431_2022"> (Vérin a kol. 2022)</SourceLink>
      </p>
      <p>
        Při tání odraz slábl a po novém sněžení opět zesílil. Výpočet většinu těchto změn vystihl. Ve viditelném světle bylo k dobré shodě potřeba započítat i nečistoty ve sněhu, které část záření pohlcují.
        Autoři pak výpočet rozšířili na sluneční záření v pásmu 300–3 000 nanometrů. Pro suchý sníh vyšlo albedo až 0,87 a při tání přibližně 0,70.
        I při stejném osvitu tak zasněžená kra může pohlcovat více energie, ještě než se na ní objeví první místa bez sněhu.
        <SourceLink id="DOI_10_5194_tc_16_3431_2022"> (Vérin a kol. 2022, obr. 9–10)</SourceLink>
      </p>

      <h4 className={styles.testHeading} id="test-druzice">Zkouška 3. Je změna odrazu patrná i nad atmosférou?</h4>
      <p>
        Oblaka odrážejí část slunečního světla ještě předtím, než dopadne na sníh nebo vodu. Ovlivňují také to, kolik světla odraženého povrchem projde zpět do vesmíru. Změna odrazu se proto nad oblaky obvykle projeví slaběji než přímo nad povrchem.
        Mark Flanner a kolegové vyšli z <Link href="/pozorovani/snehova-pokryvka-a-permafrost/#odrazivost-snehu-a-ledu">měsíčních map sněhu a mořského ledu</Link> z let 1979–2008. Pro každou změnu pokrývky počítali, jak se změní množství světla vracejícího se do vesmíru.
        Přenos světla atmosférou popsali čtyřmi způsoby. Dva vycházely z klimatických modelů a dva z družicových údajů o oblacích.
        <SourceLink id="DOI_10_1038_ngeo1062"> (Flanner a kol. 2011, tab. 2)</SourceLink>
      </p>
      <p>
        Každý řádek grafu ukazuje jeden z těchto čtyř výpočtů. V rámci řádku se mění jediný předpoklad, totiž o kolik více světla odráží zasněžená či zaledněná plocha než stejná plocha po ústupu pokrývky.
        V prvním řádku například vychází při nejmenším rozdílu odrazivosti dodatečný příjem 0,26 W/m². Při středním rozdílu je to 0,38 a při největším 0,48 W/m².
        Hodnoty platí v průměru pro celou severní polokouli. Autoři vynásobili průměrnou roční změnu podle trendu třiceti, aby vyjádřili změnu za celé sledované období.
        <SourceLink id="DOI_10_1038_ngeo1062"> (Flanner a kol. 2011, tab. 2)</SourceLink>
      </p>
      <figure className={`article-figure ${styles.explanatoryFigure}`}>
        <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Graf dvanácti výpočtů, na úzké obrazovce posuvný do stran">
          <a href={`${media}/srovnani-vypoctu.svg`} aria-label="Otevřít graf v plné velikosti"><Image className="article-figure__media" src={`${media}/srovnani-vypoctu.svg`} width={1100} height={660} alt="Dvanáct variant Flannerova výpočtu dává růst pohlceného slunečního záření od 0,26 do 0,72 W/m², v průměru 0,45 W/m² nad severní polokoulí za období 1979–2008. Všechny varianty mají stejné znaménko." unoptimized /></a>
        </div>
        <figcaption>Změna bilance slunečního záření nad atmosférou podle tabulky 2 studie <SourceLink id="DOI_10_1038_ngeo1062">Flanner a kol. 2011</SourceLink>.
          Dvě varianty atmosféry vycházejí z klimatických modelů, dvě z družicových údajů o oblacích. Body označují zvolené předpoklady, nikoli meze pravděpodobnosti.
          Vlastní graf Klimatologie.eu připravený s pomocí AI, CC BY 4.0.
          <a href={`${media}/flanner-2011-tabulka-2.csv`}> Čísla v CSV</a>, <a href={`${media}/vypocty.mjs`}>výpočet průměru</a> a <a href={`${media}/podklady.txt`}>původ a omezení</a>.
        </figcaption>
      </figure>
      <p>
        Všech dvanáct bodů leží vpravo od nuly. Ve všech variantách tedy severní polokoule v důsledku ústupu sněhu a ledu pohlcovala více slunečního záření.
        Odhady sahají od 0,26 do 0,72 W/m². Jejich průměr je 0,45 W/m² a přibližně polovina vypočteného přírůstku připadá na sníh na pevnině, druhá na mořský led.
        Rozpětí ukazuje, jak výsledek závisí na popisu atmosféry a odrazivosti povrchu. Všechny varianty přitom používají stejné mapy změn pokrývky.
        <SourceLink id="DOI_10_1038_ngeo1062"> (Flanner a kol. 2011, tab. 2)</SourceLink>
      </p>
      <p>
        Nad arktickým oceánem měli vědci k dispozici i měření samotného záření vracejícího se do vesmíru. Kristina Pistoneová a kolegové použili údaje přístroje CERES na družici Terra. Název CERES (Clouds and the Earth&apos;s Radiant Energy System) označuje systém pro měření oblaků a toků záření Země.
        Když údaje družice porovnali s mapami mořského ledu, menšímu podílu ledu zpravidla odpovídal i menší podíl odraženého záření.
        Z těchto měření vyšel za roky 2000–2011 přírůstek 4,2 W/m² uvedený v úvodu. Tento průměr se vztahuje jen k oceánu severně od 60° severní šířky.
        <SourceLink id="DOI_10_1073_pnas_1318201111"> (Pistone a kol. 2014, obr. 1 a 4)</SourceLink>
      </p>
      <p>
        Mapy mořského ledu sahají dále do minulosti než měření záření přístrojem CERES. Pro roky 1979–1999 proto tým použil vztah mezi množstvím ledu a odrazem, který zjistil z pozdějších měření pro jednotlivé měsíce a oblasti.
        V takto prodlouženém záznamu vyšel za roky 1979–2011 nad vymezeným oceánem nárůst pohlceného záření o 6,4 ± 0,9 W/m². Uvedená nejistota se vztahuje k dopočtu starší části.
        Měření záření tak potvrdilo směr změny jiným postupem než výpočet z map. Obě práce přitom čerpají také z družicových pozorování ledu.
        <SourceLink id="DOI_10_1073_pnas_1318201111"> (Pistone a kol. 2014, obr. 4)</SourceLink>
      </p>

      <h4 id="energie-a-teplota">Kam se pohlcená energie dostane</h4>
      <p>
        Z měření záření víme, kolik sluneční energie v oblasti zůstane. Jak se změní teplota, záleží na tom, kam se tato energie dostane.
        Voda mezi krami se může ohřát a část tepla předat ledu zespodu. Během samotného tání se energie spotřebovává na přeměnu ledu ve vodu, i když teplota tajícího ledu zůstává stejná.
        Část tepla může oceán také uchovat a předat vzduchu až později.
        <SourceLink id="DOI_10_3189_172756411795931714"> (Perovich a kol. 2011)</SourceLink>
      </p>
      <p>
        Donald Perovich a kolegové v létě 2008 u sedmi arktických bójí porovnali odhad energie pohlcené okolní otevřenou vodou s tím, kolik ledu odtálo shora a kolik zespodu.
        Větší příjem sluneční energie ve vodě provázelo větší tání především na spodní straně ker, právě tam, kde se voda ledu dotýká.
        Podrobnosti ukazuje <Link href="/mechanismy/vznik-tani-a-pohyb-morskeho-ledu/#test-boje">porovnání tání u jednotlivých bójí</Link>.
        <SourceLink id="DOI_10_3189_172756411795931714"> (Perovich a kol. 2011, obr. 3)</SourceLink>
      </p>

      <h4 className={styles.testHeading} id="test-oteplovani">Zkouška 4. Jak sníh ovlivňuje denní teplotu nad pevninou?</h4>
      <p>
        Na rašeliništi v Minnesotě mohli vědci zkoumat oba směry zpětné vazby. Aby zjistili, jak sníh reaguje na oteplení, vyhřívali půdu i vzduch v komorách s otevřeným vrškem. Andrew Richardson a kolegové z fotografií pořízených v letech 2015–2021 určili, kdy na plochách ležel sníh. Od roku 2017 mohli sledovat i to, jakou část plochy pokrýval.
        Při přídavném oteplení o 2,25 °C se průměrný zimní podíl zasněžené plochy zmenšil zhruba na polovinu. Přibližně na polovinu klesl také počet dnů, kdy sníh pokrýval většinu plochy.
        <SourceLink id="DOI_10_1029_2023jg007833"> (Richardson a kol. 2024)</SourceLink>
        <SourceLink id="DOI_10_6084_m9_figshare_24226177_v2"> (Údaje o zasněžení odvozené z fotografií)</SourceLink>
      </p>
      <p>
        K ověření opačného směru bylo třeba zjistit, zda úbytek sněhu sám zesílí ohřev. Ve vyhřívaných komorách se udržoval předepsaný teplotní rozdíl. Autoři se proto zaměřili na nevyhřívané komory a sousední volný terén.
        I bez topení ovlivňuje konstrukce komory teplotu a její vliv se může měnit s osvitem. Z denních měření proto autoři odhadli, jaký rozdíl teplot při daném osvitu připadá na samotnou komoru a jaký další rozdíl souvisí s tím, že jedna plocha nese více sněhu než druhá.
        <SourceLink id="DOI_10_1029_2023jg007833"> (Richardson a kol. 2024, rovnice 4)</SourceLink>
      </p>
      <p>
        Při silnějším osvitu měl úbytek sněhu větší účinek na denní teplotu. Například při 10 megajoulech dopadající sluneční energie na metr čtvereční za den odpovídalo úplné odtání sněhu přibližně o 0,8 °C vyššímu dennímu maximu teploty vzduchu.
        Megajoule je milion joulů a zde se energie sčítá za celý den. Jedna standardní chyba teplotního odhadu činila 0,1 °C a vyjadřuje statistickou nejistotu srovnání na tomto rašeliništi.
        <SourceLink id="DOI_10_1029_2023jg007833"> (Richardson a kol. 2024, rovnice 4 a obr. 7)</SourceLink>
      </p>
    </HypothesisStory>

    <h2 id="mechanismus">Jak silná je zpětná vazba v měřítku celé Země?</h2>
    <p>
      U tajícího sněhu lze sledovat změnu odrazu přímo, nad arktickým oceánem její důsledek pro příjem sluneční energie. O tom, jak silně ústup pokrývky zesílí probíhající oteplování, rozhoduje i jeho načasování.
      Led, který zmizí už na jaře, může odkrýt vodu na týdny s dlouhými slunečnými dny. Stejný úbytek ledu na konci léta ponechá vodě méně příležitostí pohltit sluneční energii.
      Zářijové minimum rozlohy ledu proto zachycuje jen část toho, co potřebujeme znát, abychom určili příspěvek odrazivosti k rychlému oteplování Arktidy.
      <SourceLink id="DOI_10_1038_ngeo1062"> (Flanner a kol. 2011)</SourceLink>
    </p>
    <p>
      Mezivládní panel pro změnu klimatu (IPCC) v roce 2021 shrnul měření, fyzikální výpočty i klimatické modely do odhadu, který vztahuje změnu v příjmu záření ke změně teploty.
      Když globální průměrná teplota u povrchu vzroste o 1 °C, změna odrazivosti povrchu podle tohoto odhadu zvýší příjem sluneční energie v průměru za celou Zemi přibližně o 0,35 W/m².
      Pravděpodobné rozmezí činí 0,25–0,45 W/m² na stupeň. Tento vztah vyjadřuje, nakolik změna odrazivosti už probíhající oteplování zesiluje.
      <SourceLink id="DOI_10_1017_9781009157896_009"> (IPCC 2021, oddíl 7.4.2.3)</SourceLink>
    </p>

    <h2 id="nejistoty">Proč se odhady velikosti účinku liší</h2>
    <p>
      I když ze dvou stejně velkých ploch zmizí sníh ve stejný den, změna odrazu se může lišit. Záleží na tom, jak světlý byl původní sníh, co po jeho ústupu zůstane odkryté a kolik světla propustí oblaka.
      U odhadů z map pak záleží na tom, jak přesně se podařilo zachytit změny povrchu i oblačnosti ve stejném období.
      <SourceLink id="DOI_10_1038_ngeo1062"> (Flanner a kol. 2011)</SourceLink>
    </p>
    <details className="article-details">
      <summary>Podrobnosti k měření a srovnání odhadů</summary>
      <p>
        Převod mezi odrazem a plochou sněhových zrn závisí na vlnové délce, hustotě a typu sněhu. V přírodě přistupují nerovnosti povrchu, vrstvy různého stáří a nečistoty.
        Přímé srovnání s měřením v Baffinově zálivu prověřilo výpočet v pásmu 300–1 100 nanometrů. V dalších částech slunečního spektra závisí odhad na tom, jak dobře výpočet zachytí pohlcování světla v ledu a v nečistotách.
        <SourceLink id="DOI_10_5194_tc_3_167_2009"> (Gallet a kol. 2009)</SourceLink>
        <SourceLink id="DOI_10_5194_tc_16_3431_2022"> (Vérin a kol. 2022)</SourceLink>
      </p>
      <p>
        Flannerův výpočet zahrnoval pevninu i oceán, zatímco Pistoneová se zaměřila na mořský led. Pro porovnání proto z obou prací vybereme příspěvek samotného mořského ledu a rozpočítáme ho na stejnou plochu.
        V průměru za celou severní polokouli pak u Flannera vychází změna asi 0,22 W/m² za roky 1979–2008 a u Pistoneové 0,43 W/m² za roky 1979–2011.
        První výpočet přisuzuje sněhu a ledu předem daný sezónní průběh odrazivosti. Nemůže tak plně zachytit třeba posun začátku tání. Druhý odhad závisí na tom, do jaké míry lze vztah mezi ledem a odrazem z družicového měření záření přenést na roky před jeho začátkem.
        Rozdíl obou čísel tedy zahrnuje jak různé postupy, tak různě dlouhá období.
        <SourceLink id="DOI_10_1038_ngeo1062"> (Flanner a kol. 2011)</SourceLink>
        <SourceLink id="DOI_10_1073_pnas_1318201111"> (Pistone a kol. 2014)</SourceLink>
      </p>
      <p>
        V minnesotském pokusu SPRUCE (Spruce and Peatland Responses Under Changing Environments) závisí odhad vlivu sněhu na tom, jak dobře výpočet oddělil ohřev způsobený samotnou komorou. Kdyby se vliv konstrukce měnil s osvitem jinak, než výpočet předpokládá, připadla by na sníh jiná část teplotního rozdílu. Tuto možnost uvedená standardní chyba nezahrnuje.
        K přenesení výsledku na jinou krajinu bychom potřebovali znát její osvit a vlastnosti povrchu, který tání odkryje.
        <SourceLink id="DOI_10_1029_2023jg007833"> (Richardson a kol. 2024)</SourceLink>
      </p>
    </details>
    <h2 id="dalsi-overeni">Co by vysvětlení oslabilo</h2>
    <p>
      Pokud by opakovaná měření za stejného osvitu ukázala, že po ústupu světlého sněhu či ledu příjem energie na dané ploše nevzrostl, chyběl by tam předpokládaný příspěvek k ohřevu.
      Odhad síly vazby by bylo potřeba snížit, kdyby povrch podle měření tmavl, ale úbytek odraženého záření nad atmosférou byl i po započtení oblaků soustavně menší, než výpočet předpovídá.
      U teplotní odezvy by bylo rozhodující, zda energii navíc provází očekávaný ohřev nebo tání i po započtení tepla, které oceán mezitím uložil či odvedl prouděním.
    </p>
    <div className="article-observation-summary" id="zaver">
      <p className="eyebrow">Shrnutí mechanismu</p>
      <p>
        Po ústupu sněhu nebo mořského ledu slunce obvykle osvětluje tmavší půdu, vegetaci či vodu. Ty odrazí méně světla a pohltí více energie. Ta může ohřívat vodu či vzduch a podpořit další tání.
        Družice nad arktickým oceánem při ústupu ledu zaznamenaly méně odraženého světla. Měření u bójí ukázala, že tam, kde odkrytá voda přijala více sluneční energie, zpravidla také více ledu odtálo zespodu.
        Nejsilněji se tento účinek projevuje, když světlý povrch ubývá v době, kdy na něj dopadá hodně slunečního záření.
      </p>
    </div>
    <h2 id="prameny">Prameny, data a schémata</h2>
    <p>Plné texty uvedených studií jsou veřejně dostupné. Podklady rozlišují původní měření, modelové výsledky a názorný výpočet.</p>
    <ul>
      <li><SourceLink id="1969_Budyko">Budyko 1969</SourceLink>: historický model vazby mezi ledem, odrazem a teplotou.</li>
      <li><SourceLink id="DOI_10_5194_tc_3_167_2009">Gallet a kol. 2009</SourceLink>: laboratorní aparatura, nezávislé určení plochy zrn a kalibrace odrazu.</li>
      <li><SourceLink id="DOI_10_1038_ngeo1062">Flanner a kol. 2011</SourceLink>: metody, vstupní datové produkty a tabulka 2. <a href={`${media}/flanner-2011-tabulka-2.csv`}>Veřejný přepis použitých čísel</a>.</li>
      <li><SourceLink id="DOI_10_1073_pnas_1318201111">Pistone a kol. 2014</SourceLink>: článek i doplňkové metody, CERES SSF Terra Edition 2.6 a Bootstrap v2. Rozdíl měřeného a rekonstruovaného období ukazuje obr. 4.</li>
      <li><SourceLink id="DOI_10_5194_tc_16_3431_2022">Vérin a kol. 2022</SourceLink>: sněhové profily, spektrální měření a model TARTES. Oddíl dostupnosti uvádí odkazy na terénní data Green Edge a kód modelu.</li>
      <li><SourceLink id="DOI_10_1029_2023jg007833">Richardson a kol. 2024</SourceLink> a <SourceLink id="DOI_10_6084_m9_figshare_24226177_v2">data SPRUCE, verze 2</SourceLink>: sníh odvozený z fotografií, metody pokusu a statistický rozbor místního teplotního účinku.</li>
      <li><SourceLink id="DOI_10_3189_172756411795931714">Perovich a kol. 2011</SourceLink>: terénní kontrola slunečního ohřevu vody a tání ledu.</li>
      <li><SourceLink id="DOI_10_1017_9781009157896_009">IPCC 2021, kapitola 7</SourceLink>: oddíl 7.4.2.3, zhodnocení povrchové odrazivosti a globální zpětné vazby.</li>
      <li><SourceLink id="MEDIA_ALBEDO_2026">Podklady grafiky a výpočtů</SourceLink>: zdroje, licence, rozdíl mezi tabulkou a textem studie, <a href={`${media}/grafika.mjs`}>kreslicí skript</a> a <a href={`${media}/vypocty.mjs`}>reprodukční výpočet</a>.</li>
    </ul>
  </div></article>;
}
