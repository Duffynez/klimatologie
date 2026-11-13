import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./AlbedoFeedbackArticle.module.css";

const media = "/media/albedo-snehu-a-ledu";
const hypotheses: readonly MechanismHypothesis[] = [{
  id: "svetly-povrch", name: "Ústup a tmavnutí sněhu a ledu zesilují ohřev",
  prediction: "Při stejném dopadajícím záření a stejném stavu atmosféry má úbytek světlé pokrývky zvýšit příjem sluneční energie. Účinek má slábnout s osvitem.",
  test: "Změříme odraz sněhu v laboratoři a terénu, porovnáme změny ledu s družicovým zářením a sledujeme sníh i teplotu při pokusu s oteplováním.",
  observation: "Struktura sněhu odpovídá změnám odrazu. S ústupem arktického ledu klesl odraz do vesmíru. Místní teplotní účinek úbytku sněhu roste s osvitem.",
  verdict: "Podpořená zesilující zpětná vazba",
  explanation: "Shodují se různé typy měření i fyzikální výpočet. Velikost účinku závisí na oblačnosti, roční době a povrchu pod sněhem nebo ledem.",
  state: "supported",
}];
const tests = [
  { title: "1. Struktura sněhu v laboratoři", prediction: "Jemnější zrna s větší plochou povrchu mají v měřeném pásmu více odrážet.", test: "Odraz při dvou vlnových délkách porovnáme s nezávisle změřenou plochou zrn.", result: "Odraz umožňuje určit plochu zrn. Velmi řídký sníh vyžaduje jinou kalibraci." },
  { title: "2. Záření nad atmosférou", prediction: "Ústup světlé pokrývky má snížit odražené záření i po průchodu atmosférou.", test: "Radiační výpočet z map sněhu a ledu a samostatné měření záření družicemi.", result: "Oba postupy ukazují větší příjem energie. Neudávají přesně stejnou velikost změny." },
  { title: "3. Tající sníh v terénu", prediction: "Z naměřené struktury sněhu má jít vypočítat jeho odraz.", test: "Porovnáme výpočet z vrstev a zrn s optickým měřením na mořském ledu.", result: "Výpočet vystihuje většinu změn. Záleží také na nečistotách pohlcujících světlo." },
  { title: "4. Pokus s oteplováním", prediction: "Pokud sníh ovlivňuje ohřev, teplotní rozdíl má záviset na rozdílu pokrytí i na osvitu.", test: "Pokus v Minnesotě a rozbor teploty na nevyhřívaných kontrolních plochách.", result: "Méně sněhu souviselo se silnějším denním oteplením. Odhad je místní a závisí na oddělení vlivu komor." },
];

export function AlbedoFeedbackArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Když se mění sníh, led i odražené světlo</h2>
    <p className="article-prose__intro">
      Družice nad oceánem severně od 60° severní šířky zachytily v letech 2000–2011 ústup ledu a pokles slunečního záření vraceného do vesmíru.
      Odhad příjmu energie tím v průměru nad touto oblastí vzrostl o 4,2 wattu na metr čtvereční, zkráceně W/m².
      Jde o rychlost příjmu energie na jednotku plochy, nikoli o změnu teploty.
      <Link href="/pozorovani/ubytek-arktickeho-ledu/#odrazivost-arktidy"> Pozorování odrazivosti Arktidy</Link> vysvětluje měření i delší rekonstrukci.
      Co tento vztah způsobuje a jak se může promítnout do dalšího tání?
      <SourceLink id="DOI_10_1073_pnas_1318201111"> (Pistone a kol. 2014)</SourceLink>
    </p>
    <p>
      <strong>Albedo neboli odrazivost</strong> je podíl dopadajícího slunečního záření, který se odrazí.
      Hodnota 0,8 znamená 80 %. U povrchu měříme odraz sněhu, ledu, vody či půdy.
      Družice nad atmosférou vidí navíc vliv oblaků a vzduchu, a měří tedy jinou veličinu, <strong>planetární albedo</strong>.
      Článek sleduje, zda změna povrchu zesiluje příjem energie a ohřev. Číselné zkoušky pocházejí ze severní polokoule.
      Postup měření popisuje <Link href="/metody/mereni-radiacnich-toku/">metoda měření radiačních toků</Link>.
    </p>

    <h2 id="hypotezy">Jedna hypotéza a její předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="albedo-hypotheses-caption"
      context={<p>Srovnávací variantou je povrch, jehož odrazivost se nezmění, při stejném osvitu a stavu atmosféry. Je to výpočetní kontrola, pomocí které oddělujeme účinek sněhu a ledu od ostatních změn.</p>}
      caption={<>Hypotéza musí obstát při měření odrazu, při bilanci záření nad atmosférou i při zkoumání následného ohřevu. Samotná fotografie ubývajícího ledu celý řetězec neověřuje.</>} />

    <h2 id="pribehy">Jak se vysvětlení ověřovalo</h2>
    <HypothesisStory id="svetly-povrch" number={1} title="Ústup a tmavnutí sněhu a ledu zesilují ohřev">
      <p>
        Michail Budyko v roce 1969 zkoumal, jak by změny slunečního záření mohly souviset se zaledněním Země.
        V jeho modelu chladnutí rozšiřovalo světlý led a větší odraz podporoval další chladnutí. Stejný vztah působil při oteplování opačně.
        Model ukázal důsledky této vazby za zvolených předpokladů. Velikost odrazivosti v něm však byla zadána, takže sám nedokazoval sílu zpětné vazby ve skutečném klimatu.
        K tomu je potřeba změřit jednotlivé články navrženého procesu.
        <SourceLink id="1969_Budyko"> (Budyko 1969)</SourceLink>
      </p>
      <p>
        Schéma porovnává dva stavy stejné plochy. Žluté šipky představují dopadající světlo, zelené odraz a oranžové příjem energie.
        Sledujme, jak po ústupu světlé pokrývky roste příjem a může podpořit další tání. Čtyři zkoušky pod obrázkem postupně ověřují tento řetězec.
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

      <h4 className={styles.testHeading} id="test-laborator">Zkouška 1. Struktura sněhu v laboratoři</h4>
      <p>
        Sníh je směsí ledu a vzduchu. Na rozhraních se směr světla opakovaně mění a část světla se vrací vzhůru.
        Proto může být sníh světlý, přestože je kus čistého ledu průhledný. Ve větších zrnech světlo mezi rozhraními prochází delší dráhou uvnitř ledu,
        což zvyšuje možnost jeho pohlcení, zvlášť v infračervené části spektra.
        Jemnější zrna mají na kilogram sněhu větší plochu povrchu. V měřeném infračerveném pásmu proto očekáváme u jemnějšího sněhu větší odraz.
        <SourceLink id="DOI_10_5194_tc_3_167_2009"> (Gallet a kol. 2009)</SourceLink>
      </p>
      <p>
        Jean-Charles Gallet a kolegové v roce 2009 měřili odraz vzorků v duté kouli, která sbírala světlo rozptýlené různými směry.
        Použili dvě vlnové délky blízkého infračerveného světla, 1 310 a 1 550 nanometrů. Nanometr je miliardtina metru.
        Plochu zrn určili nezávisle podle množství metanu, který při velmi nízké teplotě ulpěl na jejich povrchu.
        Naměřený odraz umožnil plochu zrn odhadovat, avšak velmi řídký čerstvý sníh vyžadoval jinou kalibraci.
        Zkouška potvrzuje vztah mezi strukturou a odrazem. Dvě vlnové délky samy ještě neurčují odraz celého slunečního spektra.
        <SourceLink id="DOI_10_5194_tc_3_167_2009"> (Gallet a kol. 2009, obr. 2, 5 a 8)</SourceLink>
      </p>

      <h4 className={styles.testHeading} id="test-druzice">Zkouška 2. Záření nad atmosférou</h4>
      <p>
        Oblaka mohou povrch zakrýt a sama odrážejí světlo. Změna odrazu u země se proto do vesmíru nepřenáší celá.
        Mark Flanner a kolegové v roce 2011 spojili měsíční mapy sněhu a mořského ledu z let 1979–2008 s jejich odrazivostí.
        Pomocí čtyř výpočtů přenosu záření určovali, kolik se při změně povrchu změní bilance nad atmosférou.
        Každý výpočet zopakovali pro tři varianty rozdílu odrazivosti mezi pokrytou a odkrytou plochou.
        <SourceLink id="DOI_10_1038_ngeo1062"> (Flanner a kol. 2011)</SourceLink>
      </p>
      <p>
        Všech dvanáct variant ukázalo rostoucí příjem energie. Jejich průměrný odhad změny za třicet let je 0,45 W/m²,
        vztažený k ploše celé severní polokoule. Přibližně polovinu připsaly úbytku sněhu a polovinu mořskému ledu.
        Je to výsledek měřených změn pokrývky vložených do radiačního výpočtu, nikoli přímé měření celého tohoto toku.
        <Link href="/pozorovani/snehova-pokryvka-a-permafrost/#odrazivost-snehu-a-ledu"> Podrobná cesta od vstupních map k výsledku</Link> je v pozorovacím článku.
        <SourceLink id="DOI_10_1038_ngeo1062"> (Flanner a kol. 2011, tab. 2)</SourceLink>
      </p>
      <p>
        V grafu má každý popis atmosféry tři body. Například první trojice ukazuje, jak se výsledek mění od 0,26 přes 0,38 k 0,48 W/m²,
        když zvětšujeme předpokládaný rozdíl odrazivosti sněhu či ledu proti odkrytému povrchu. Všechny body leží napravo od nuly,
        ale jejich vzdálenosti ukazují, proč nemá odhad jedinou přesnou hodnotu.
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
        Kristina Pistone a kolegové v roce 2014 zvolili jinou kontrolu. Nad arktickým oceánem porovnali mapy ledu s měřením přístrojů CERES.
        Název znamená Clouds and the Earth&apos;s Radiant Energy System, tedy systém pro měření oblaků a vyzařované energie Země.
        Přístroje měří záření směřující do vesmíru. V období 2000–2011 ukazují rostoucí pohlcování přímo odvozené z těchto měření.
        Prodloužení do roku 1979 už používá vztah mezi ledem a odrazem z novějšího období.
        Výsledky podporují očekávané znaménko změny, ale velikost se s Flannerovou prací přesně neshoduje.
        Liší se období i postup a společná družicová měření ledu také znamenají, že nejde o zcela nezávislé vstupy.
        <SourceLink id="DOI_10_1073_pnas_1318201111"> (Pistone a kol. 2014, obr. 1 a 4)</SourceLink>
      </p>

      <h4 className={styles.testHeading} id="test-teren">Zkouška 3. Tající sníh v terénu</h4>
      <p>
        Gauthier Vérin a kolegové sledovali v letech 2015 a 2016 tání sněhu na mořském ledu v Baffinově zálivu u Qikiqtarjuaqu.
        Měřili vrstvy sněhu, hustotu a plochu zrn i odraz světla různých vlnových délek. Naměřenou strukturu vložili do modelu šíření světla.
        Jeho předpověď pak porovnali s optickým měřením. Tím zkoušeli, zda fyzikální popis z laboratoře obstojí ve vrstevnatém přírodním sněhu.
        <SourceLink id="DOI_10_5194_tc_16_3431_2022"> (Vérin a kol. 2022)</SourceLink>
      </p>
      <p>
        Výpočty vystihly většinu změn odrazivosti při tání a novém sněžení. Pro viditelné světlo bylo důležité zahrnout i nečistoty pohlcující záření.
        Teprve ověřený výpočet autoři rozšířili na celé zvolené sluneční spektrum. V něm vyšel pokles albeda z přibližně 0,87 u suchého sněhu
        asi k 0,70 během tání. Tyto dvě hodnoty jsou modelovým odhadem z terénních vstupů, nikoli přímým měřením přes celé spektrum.
        Studie tak ověřuje prostřední článek vazby, změnu odrazu při proměně sněhu. Sama neurčuje následnou změnu teploty vzduchu.
        <SourceLink id="DOI_10_5194_tc_16_3431_2022"> (Vérin a kol. 2022, obr. 9–10)</SourceLink>
      </p>

      <h4 className={styles.testHeading} id="test-oteplovani">Zkouška 4. Pokus s oteplováním</h4>
      <p>
        Pokus SPRUCE v minnesotském rašeliništi vyhřívá půdu i vzduch v komorách s otevřeným vrškem.
        Název zkracuje Spruce and Peatland Responses Under Changing Environments, výzkum odezvy smrků a rašeliniště na měnící se prostředí.
        Andrew Richardson a kolegové v roce 2024 vyhodnotili sníh zachycený fotografiemi v letech 2015–2021.
        Už přídavné oteplení o 2,25 °C zhruba rozpůlilo průměrný zimní podíl zasněžené plochy i počet dnů s více než polovičním pokrytím.
        Vyhřívání zde přímo mění podmínky, takže pokus ověřuje první cestu vazby: oteplení může podstatně omezit sníh.
        <SourceLink id="DOI_10_1029_2023jg007833"> (Richardson a kol. 2024</SourceLink>, <SourceLink id="DOI_10_6084_m9_figshare_24226177_v2">veřejná data SPRUCE)</SourceLink>
      </p>
      <p>
        Cestu zpět k teplotě autoři zkoumali na nevyhřívaných plochách, protože v těch vyhřívaných regulace topení udržovala předepsaný rozdíl teplot.
        Porovnali nevyhřívané komory s volným terénem. Teplotní rozdíl popsali jako součet vlivu komory, jeho změny s osvitem
        a dalšího příspěvku závislého současně na osvitu a rozdílu sněhového pokrytí. Velikosti těchto příspěvků určili z denních měření.
        Poslední člen tak odhaduje, kolik k rozdílu teplot přidává sníh při daném množství sluneční energie.
        <SourceLink id="DOI_10_1029_2023jg007833"> (Richardson a kol. 2024, rovnice 4)</SourceLink>
      </p>
      <p>
        Pro den s dopadající sluneční energií 10 megajoulů na metr čtvereční vyšel místní příspěvek úplného odtání sněhu asi 0,8 °C k dennímu maximu teploty vzduchu.
        Megajoule je milion joulů, jednotek energie. Výsledek závisel na osvitu, jak vazba předpovídá.
        Je to místní statistický odhad, který závisí na správném oddělení účinku komor, nikoli obecný teplotní násobitel pro Zemi.
        <SourceLink id="DOI_10_1029_2023jg007833"> (Richardson a kol. 2024, rovnice 4 a obr. 7)</SourceLink>
      </p>
      <p>
        Jednotlivé zkoušky se doplňují: měření zrn vysvětluje změnu odrazu, družice kontrolují její projev nad atmosférou
        a pokus ukazuje místní odezvu sněhu a teploty. Shoda podporuje celý navržený proces, i když z těchto různých prostředí nelze převzít jednu společnou velikost účinku.
      </p>
    </HypothesisStory>

    <h2 id="mechanismus">Jak úbytek světlého povrchu zesiluje ohřev</h2>
    <p>
      Zkoušky podporují zesilující zpětnou vazbu odrazivosti. Laboratorní měření spojuje odraz se strukturou sněhu,
      terénní měření kontroluje výpočet v přírodě a družice zachycují důsledek nad atmosférou.
      Pokus s oteplováním doplňuje místní ověření změn sněhu i jejich teplotního účinku.
      Tato shoda má větší váhu než samotný výstup klimatického modelu. Fyzikální řetězec začíná změnou pokrývky a pokračuje přes příjem energie k další odezvě povrchu.
    </p>
    <h3 id="pohlceni">Menší odraz znamená větší příjem energie</h3>
    <p>
      Po ústupu sněhu se odkryje půda či vegetace, po ústupu mořského ledu voda. Tyto povrchy obvykle odrážejí méně slunečního záření.
      I zachovaná pokrývka může tmavnout, když se mění sněhová zrna nebo vznikají jezírka na ledu.
      Větší příjem energie pak podporuje ohřev a tání, které mohou pokrývku dále omezovat.
      Označení <strong>kladná zpětná vazba</strong> znamená, že proces zesiluje původní změnu. Neříká, že je změna prospěšná.
      <SourceLink id="DOI_10_1017_9781009157896_009"> (IPCC 2021, oddíl 7.4.2.3)</SourceLink>
    </p>
    <p>
      Pro jednoduchou bilanci označme dopadající sluneční tok <InlineMath tex={String.raw`S`} /> a albedo <InlineMath tex={String.raw`\alpha`} />.
      Pohlcený tok <InlineMath tex={String.raw`Q`} /> zahrnuje sníh či led i podklad, který přijme světlo procházející pokrývkou.
      Oba toky vyjadřujeme ve W/m². Při stejném dopadajícím toku platí:
    </p>
    <Equation tex={String.raw`Q=(1-\alpha)S,\qquad \Delta Q=-S\,\Delta\alpha`} />
    <p>
      Symbol <InlineMath tex={String.raw`\Delta`} /> označuje rozdíl nové a původní hodnoty.
      Zkusme čistě názorný příklad s tokem 200 W/m². Při albedu 0,8 se pohltí 40 W/m²,
      při albedu 0,2 už 160 W/m². Rozdíl činí 120 W/m². Čísla jsme zvolili pro vysvětlení výpočtu,
      nejde o naměřenou změnu celé Arktidy. Stejný pokles odrazivosti má při slabším slunečním osvitu menší účinek.
      <SourceLink id="MEDIA_ALBEDO_2026"> Výpočet lze zopakovat z veřejných podkladů.</SourceLink>
    </p>
    <h3 id="energie-a-teplota">Energie navíc není totéž co okamžité oteplení</h3>
    <p>
      Dodatečná energie může ohřívat vodu či půdu nebo tavit led. Během tání část energie mění skupenství vody místo zvyšování její teploty.
      Oceán navíc může energii uložit a později ji předat vzduchu. Proto z rozdílu ve W/m² nelze bez další bilance vyvodit konkrétní počet stupňů oteplení.
      Příklad tání měřeného bójemi popisuje <Link href="/mechanismy/vznik-tani-a-pohyb-morskeho-ledu/#test-boje">mechanismus změn mořského ledu</Link>.
      <SourceLink id="DOI_10_3189_172756411795931714"> (Perovich a kol. 2011)</SourceLink>
    </p>
    <p>
      V polární noci tato sluneční vazba nepřidává energii, protože chybí dopadající sluneční záření.
      Důležité je proto načasování ústupu sněhu a ledu vůči jaru a létu, nikoli jen velikost zářijového minima.
      Zpětná vazba navíc potřebuje počáteční změnu. Sama nevysvětluje, proč se klima začalo oteplovat,
      a není jediným důvodem rychlejšího oteplování Arktidy.
      <SourceLink id="DOI_10_1038_ngeo1062"> (Flanner a kol. 2011</SourceLink>, <SourceLink id="DOI_10_1017_9781009157896_009">IPCC 2021)</SourceLink>
    </p>

    <h2 id="nejistoty">Jak dobře známe velikost vazby</h2>
    <p>
      Směr účinku je dobře podložený, jeho velikost se ale mění s místem, sezonou a oblačností.
      Mezivládní panel pro změnu klimatu, zkráceně IPCC, v roce 2021 shrnul měření, teorii i modely do globálního odhadu.
      Při globálním oteplení o 1 °C podle něj změna povrchového albeda přidává přibližně 0,35 W/m² zadržovaného záření,
      s pravděpodobným rozmezím 0,25–0,45 W/m² na stupeň.
      Tento globální koeficient není totožný s místním teplotním účinkem sněhu ani s odhadnutou historickou změnou nad severní polokoulí.
      <SourceLink id="DOI_10_1017_9781009157896_009"> (IPCC 2021, oddíl 7.4.2.3)</SourceLink>
    </p>
    <details className="article-details">
      <summary>Co omezuje jednotlivé zkoušky</summary>
      <p>
        Laboratorní kalibrace závisí na vlnové délce, hustotě a typu sněhu. V terénu přibývají nečistoty, proměnlivé vrstvy a nerovný povrch.
        Shoda výpočtu s odrazem ve změřené části spektra proto neodstraňuje nejistotu při rozšíření na celé sluneční záření.
        <SourceLink id="DOI_10_5194_tc_3_167_2009"> (Gallet a kol. 2009</SourceLink>, <SourceLink id="DOI_10_5194_tc_16_3431_2022">Vérin a kol. 2022)</SourceLink>
      </p>
      <p>
        Flannerův odhad používá předepsaný sezonní průběh odrazivosti, a nezachycuje tedy všechny změny začátku tání či vlastností sněhu.
        Rozpětí dvanácti variant vyjadřuje citlivost na zvolené předpoklady, nikoli úplnou statistickou nejistotu.
        Pro samotný mořský led vychází po přepočtu na celou severní polokouli u Flannera změna přibližně 0,22 W/m² za roky 1979–2008,
        u Pistoneové 0,43 W/m² za roky 1979–2011. Rozdílný postup i delší období druhé práce brání považovat tuto dvojici za přesnou shodu velikostí.
        U Pistoneové je období před rokem 2000 rekonstruováno za předpokladu, že vztah mezi pokrytím ledem a odrazem lze přenést do minulosti.
        Atmosféra přitom část povrchových změn zakrývá a oblaka se mohou měnit také.
        <SourceLink id="DOI_10_1038_ngeo1062"> (Flanner a kol. 2011</SourceLink>, <SourceLink id="DOI_10_1073_pnas_1318201111">Pistone a kol. 2014)</SourceLink>
      </p>
      <p>
        Pokus SPRUCE představuje jedno rašeliniště. Komory ovlivňují prostředí i bez zapnutého topení,
        takže odhad zpětného účinku sněhu závisí na statistickém oddělení jejich vlivu.
        U uvedeného příspěvku 0,8 °C vyšla jedna standardní chyba odhadu 0,1 °C. To popisuje statistickou přesnost zvoleného vztahu,
        nikoli úplnou nejistotu pokusu nebo přenositelnost na jiné krajiny.
        <SourceLink id="DOI_10_1029_2023jg007833"> (Richardson a kol. 2024)</SourceLink>
      </p>
    </details>
    <h2 id="dalsi-overeni">Co by vysvětlení oslabilo</h2>
    <p>
      Výklad by oslabil opakovaný výsledek, při němž odstranění světlé pokrývky za stejného osvitu a srovnatelných podmínek nezvýší příjem sluneční energie.
      Velikost odhadované vazby by vyžadovala revizi, kdyby přesnější měření oblaků, odrazu a pokrývky soustavně ukazovala slabší změnu bilance nad atmosférou.
      Teplotní část by zpochybnil nesoulad s ohřevem nebo táním i po započtení ukládání energie a jejího odvodu prouděním.
      Tyto kontroly rozlišují chybu v samotném mechanismu od chyby v odhadu jeho místní či globální síly.
    </p>
    <div className="article-observation-summary" id="zaver">
      <p className="eyebrow">Závěr</p>
      <p>
        Ústup sněhu a ledu obvykle odkrývá tmavší povrch, který při stejném osvitu přijímá více sluneční energie.
        Ta může podpořit další ohřev a tání. Laboratorní, terénní a družicová měření společně podporují tuto zesilující zpětnou vazbu.
        Její sílu určují také oblaka, roční doba a způsob, jakým povrch energii ukládá nebo předává dál.
        Vazba zesiluje probíhající změnu, sama však neurčuje její počáteční příčinu ani velikost výsledného oteplení.
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
