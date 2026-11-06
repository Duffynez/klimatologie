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
    name: "Změny proudění samy vysvětlují zesilování veder",
    prediction: "Jestliže se mění pouze výskyt a trvání horkých povětrnostních situací, po oddělení těchto změn nezbude soustavný růst extrémních teplot. Teplotní podmínky oceánu a pevniny přitom zůstávají stejné.",
    test: "Nejprve porovnáme ruské vedro roku 2010 se staršími tlakovými situacemi. Potom v západoevropském záznamu hledáme dny s podobným prouděním a vyčíslíme, kolik dlouhodobé změny vysvětlí jeho proměny.",
    observation: "Proudění vysvětluje velkou část mimořádnosti ruské události. V západní Evropě však jeho změny vysvětlují jen část růstu nejvyšších letních teplot v letech 1950–2022.",
    verdict: "Skutečný proces, který sám nestačí",
    explanation: "Vznik jednotlivého vedra a dlouhodobý růst jeho pravděpodobnosti vyžadují různá porovnání. Úspěch prvního testu nenahrazuje druhý.",
    state: "insufficient",
  },
  {
    id: "teplejsi-klima",
    name: "Oteplování mění podmínky, ve kterých vedra vznikají",
    prediction: "Při srovnatelném proudění mají být extrémy v teplejším klimatu teplejší a častěji překračovat tutéž hranici. Když navíc vyschne půda, omezení výparu může zvýšit ohřev vzduchu.",
    test: "V simulacích evropského léta 2003 změníme zásobu půdní vody. Pro Rusko porovnáme četnost stejného extrému ve dvou obdobích. Úspěšnou předpověď severoamerického vedra 2021 zopakujeme s chladnějšími klimatickými podmínkami.",
    observation: "Vlhčí půda zeslabila simulované evropské vedro. Ruské porovnání ukázalo, jak menší teplotní posun mění četnost. Předpovědní experimenty pro rok 2021 daly v chladnějším klimatu slabší extrém.",
    verdict: "Podpořené společné vysvětlení",
    explanation: "Proudění určuje průběh události, oteplování posouvá její teplotu a půdní voda může účinek zesílit. Velikost příspěvků se liší podle místa a události.",
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
    <h2 id="co-vysvetlujeme">Proč přibývá horkých dnů a mimořádně teplých událostí</h2>
    <p className="article-prose__intro">
      Ve většině sledovaných oblastí souše přibylo od poloviny 20. století dnů ve vlnách veder a nejdelší události se prodloužily.
      Dokládají to <Link href="/pozorovani/vlny-veder/#pozorovani">denní teplotní záznamy</Link>.
      „Silnější“ přitom může znamenat vyšší vrchol teploty i větší součet překročení za celou událost. Tyto vlastnosti se nemění stejně.
      Zde vysvětlíme, proč se k situacím schopným vyvolat vedro přidává stále teplejší výchozí klima. <SourceLink id="DOI_10_1038_s41467_020_16970_7">(Perkins-Kirkpatrick a Lewis 2020)</SourceLink>
    </p>
    <p>
      Rozlišíme vznik konkrétního vedra od dlouhodobé změny jeho četnosti a síly. Nejprve prověříme, kam dosáhne vysvětlení samotným prouděním vzduchu.
      Potom přidáme oteplování a výměnu energie mezi půdou a atmosférou. „Četností“ budeme podle daného testu rozumět počet dnů nebo pravděpodobnost překročení přesně určené teplotní hranice.
    </p>

    <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="heat-hypotheses-caption"
      context={<p>Proudění znamená pohyb vzduchu včetně jeho přenosu mezi oblastmi a výškami. Srovnatelným prouděním rozumíme podobné rozložení větru či tlakových útvarů nad širší oblastí. Samo neurčuje, jak teplý přicházející vzduch bude. První hypotéza je proto záměrně omezená na vysvětlení změn veder změnou proudění při stálých ostatních podmínkách.</p>}
      caption={<>Obě vysvětlení zahrnují běžné počasí. Liší se v tom, zda k dlouhodobé změně veder stačí proměny proudění, nebo se mění i teplotní podmínky. Testy jednotlivých událostí mají užší platnost než závěr pro celosvětový vývoj.</>} />

    <h2 id="pribehy">Jak se zkoumaly příčiny veder</h2>
    <HypothesisStory id="samotne-proudeni" number={1} title="Změny proudění samy vysvětlují zesilování veder">
      <p>
        Dlouhotrvající tlakové situace se zkoumaly dávno před dnešními studiemi lidského vlivu na extrémy. Daniel Rex v roce 1950 porovnal pět případů atmosférického blokování.
        V mapách našel rozdělené západní proudění a téměř stojící tlakové útvary. Jeho vymezení vyžadovalo alespoň deset dnů trvání.
        Nešlo o dnešní definici vlny veder, ale o popis situace, která dokáže na dlouho změnit počasí celé oblasti. <SourceLink id="DOI_10_3402_tellusa_v2i3_8546">(Rex 1950)</SourceLink>
      </p>
      <p>
        Blokování znamená, že se obvyklý postup tlakových útvarů zpomalí nebo odkloní. Pod letní tlakovou výší může vzduch klesat.
        Při sestupu se dostává pod vyšší tlak, stlačuje se a ohřívá. Oblaků pak bývá méně a sluneční záření déle ohřívá povrch.
        Vítr zároveň může přivádět teplý vzduch z jiné oblasti. Tyto děje poskytují konkrétní fyzikální vysvětlení jednotlivé horké epizody. <SourceLink id="DOI_10_1029_2010GL046582">(Dole a kol. 2011)</SourceLink>
      </p>
      <p>
        Pro vysvětlení dlouhodobé změny by však bylo potřeba více takových situací, delší trvání nebo účinnější přísun teplého vzduchu.
        Pokud by všechny ostatní podmínky zůstaly stejné, srovnatelné proudění by nemělo postupně přinášet stále vyšší teploty.
        To je rozlišující předpověď, kterou budeme testovat. Nepřipisujeme ji všem badatelům zabývajícím se blokováním. Zkoušíme, zda skutečný a důležitý proces stačí také na celé pozorované zesilování veder.
      </p>
      <p>Schéma odděluje děj během jednoho vedra od náročnějšího testu dlouhodobého vývoje.</p>
      <Graphic name="proudeni" alt="Letní tlaková výše odklání postup počasí. Sestupující vzduch se stlačuje a otepluje, sluneční záření ohřívá pevninu a vítr přináší teplý vzduch. Předpověď hypotézy samotného proudění vyžaduje stálé teplotní podmínky."
        tests={[
          { title: "Test 1 · Ruské vedro 2010", prediction: "Silné blokování může vyvolat velkou odchylku.", test: "Porovnání teplot, tlakových map a simulací s dřívějšími podmínkami.", result: "Velká role počasí v síle jedné události." },
          { title: "Test 2 · Západní Evropa 1950–2022", prediction: "Změny proudění mají vysvětlit celý růst extrému.", test: "Dny nahradíme dny s podobným prouděním při sjednocené úrovni oteplení.", result: "Změny proudění vysvětlují jen část." },
        ]}>
        Fyzikální děje podle <SourceLink id="DOI_10_1029_2010GL046582">Doleho a kol. (2011)</SourceLink>, rozlišení dlouhodobého příspěvku podle <SourceLink id="DOI_10_1038_s41467_023_42143_3">Vautarda a kol. (2023)</SourceLink>.
      </Graphic>

      <h4 id="rusko-2010" className={styles.testHeading}>Test 1 · Ruské vedro 2010</h4>
      <p>
        Velký výkyv způsobený počasím by měl mít odpovídající neobvyklou tlakovou situaci. Doleho tým proto porovnal <Link href="/pozorovani/vlny-veder/#rusko-2010">ruský červenec 2010</Link> s historickými mapami a modelovými pokusy.
        Dva atmosférické modely opakovaně spustil s oceánem, mořským ledem a množstvím oxidu uhličitého, CO₂, roku 2010 a se srovnávacími průměrnými podmínkami let 1971–2000.
        Výjimečnou sílu události vysvětlilo především trvající blokování. Pomalu se měnící podmínky neposkytly silné předběžné varování. <SourceLink id="DOI_10_1029_2010GL046582">(Dole a kol. 2011, oddíly 2–4)</SourceLink>
      </p>
      <p>
        Tím obstála důležitost proudění pro konkrétní událost. Z výsledku ale neplyne, že její pravděpodobnost zůstala stejná.
        I menší oteplení může rozhodnout, kolik podobných situací překročí vysokou hranici. K této odlišné otázce se vrátíme u druhé hypotézy.
      </p>

      <h4 id="evropske-proudeni" className={styles.testHeading}>Test 2 · Západní Evropa 1950–2022</h4>
      <p>
        Kdyby celý dlouhodobý růst vysvětlovaly změny proudění, měly by po jejich vyčíslení pokrýt i naměřenou velikost změny.
        Vautardův tým v roce 2023 hledal v letních záznamech dny s podobným prouděním několik kilometrů nad povrchem.
        Teploty náhradních dnů převedl na společnou úroveň oteplení, aby do odhadu proudění nezapočítal i teplejší klima. <SourceLink id="DOI_10_1038_s41467_023_42143_3">(Vautard a kol. 2023)</SourceLink>
      </p>
      <p>
        Pro západní Evropu mezi 5° západní a 15° východní délky a 45–55° severní šířky vyšel ve zpětné rekonstrukci počasí ERA5 příspěvek proudění přibližně <strong>0,8 °C [0,2–1,4]</strong>
        na stupeň globálního oteplení. Celý růst nejvyšší letní denní teploty činil <strong>3,4 °C [2,4–4,3]</strong> na stejný stupeň globálního oteplení.
        Závorky vyjadřují nejistotu pomocí 95% intervalů. Oba poměry změn patří k letům 1950–2022, nikoli k jednomu desetiletí.
        Výpočet ze staničního souboru E-OBS a druhý statistický postup podpořily dílčí roli proudění. <SourceLink id="DOI_10_1038_s41467_023_42143_3">(Vautard a kol. 2023, výsledky a metody)</SourceLink>
      </p>
      <p>
        Přesný význam teplotního ukazatele popisuje <Link href="/pozorovani/vlny-veder/#evropska-vedra">pozorovací článek</Link>.
        Proudění tedy nezanedbáváme. U této dlouhodobé změny je však nedostatečným samostatným vysvětlením.
        Zbytek nelze automaticky celý připsat CO₂. Zahrnuje další vlivy a nepřesnost rozdělení.
      </p>
    </HypothesisStory>

    <HypothesisStory id="teplejsi-klima" number={2} title="Oteplování mění podmínky, ve kterých vedra vznikají">
      <p>
        Souvislost mezi množstvím CO₂ a teplotou počítal už Svante Arrhenius v roce 1896. Zkoumal, zda změna pohlcování tepelného záření může vysvětlit rozdílné klimatické podmínky.
        Jeho výpočet se týkal průměrného klimatu. Příspěvek oteplování k jednotlivému vedru je další otázka, která vyžaduje zachytit i proměnlivost počasí. <SourceLink id="1896_Arrhenius">(Arrhenius 1896)</SourceLink>
      </p>
      <p>
        Druhé vysvětlení zachovává proudění a doplňuje měnící se energetické podmínky. Fyzikální základ shrnuje článek o <Link href="/mechanismy/radiacni-pusobeni-sklenikovych-plynu/#mechanismus">účinku dalšího CO₂ na tepelné záření</Link>.
        Při zvýšení množství skleníkových plynů se zpočátku zmenší odvod energie do vesmíru. Povrch a nižší atmosféra se oteplují, dokud vyšší výdej a další změny bilanci znovu nepřiblíží rovnováze.
        Počasí se potom odehrává v jiných teplotních podmínkách. <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, kapitola 7)</SourceLink>
      </p>
      <p>
        Pro vedra z toho plynou dva ověřitelné důsledky. Srovnatelná situace může dosáhnout vyšší teploty a více situací překročí stejnou hranici.
        Na pevnině navíc záleží, kolik energie spotřebuje výpar. Přeměna kapalné vody na páru vyžaduje energii.
        Když dostupná voda ubývá, menší část přijaté energie může odejít touto cestou a větší část může ohřívat povrch a vzduch.
        Rozdělení povrchové energie popisuje <SourceLink id="DOI_10_1017_9781009157896_009">IPCC AR6, oddíl 7.2</SourceLink>.
        Jeho roli pro evropské léto 2003 prověří první pokus.
      </p>
      <p>Schéma ukazuje teplotní posun a zesílení při vysychání. Následující testy oddělují půdní vodu, pravděpodobnost události a její teplotní vrchol.</p>
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
        Pokud vysychání zesiluje vedro omezením výparu, doplnění vody má při podobném proudění teplotu snížit.
        Erich Fischer, Sonia Seneviratne a spoluautoři tuto předpověď prověřili v roce 2007 regionálním modelem evropského léta 2003.
        Na okrajích oblasti zadali stejné atmosférické podmínky a změnili jarní půdní vlhkost. Oddělili tak její účinek od pouhého souběhu sucha a tepla. <SourceLink id="DOI_10_1175_JCLI4288_1">(Fischer a kol. 2007)</SourceLink>
      </p>
      <p>
        Bez neobvyklého půdního vyschnutí vyšla letní teplotní odchylka v některých oblastech přibližně o 40 % menší.
        Jde o modelový podíl na odchylce vůči letům 1970–2000, nikoli o 40 % teploty ve stupních Celsia nebo o univerzální podíl sucha na každé vlně.
        Výsledek podpořil zpětnou vazbu mezi vodou a ohřevem, sám však neurčuje příčinu dlouhodobého globálního oteplování. <SourceLink id="DOI_10_1175_JCLI4288_1">(Fischer a kol. 2007, oddíly 4–6)</SourceLink>
      </p>

      <h4 id="pravdepodobnost" className={styles.testHeading}>Test 2 · Pravděpodobnost</h4>
      <p>
        Proč se po ruském vedru 2010 lišily závěry o roli oteplování? Friederike Otto a spoluautoři v roce 2012 ukázali, že velikost teplotní odchylky a změna četnosti jsou různé otázky.
        Jejich předpověď byla jednoduchá: posun teplot má zmenšit vzdálenost mezi běžným stavem a pevnou hranicí extrému, i když sám tvoří menší část mimořádné teploty. <SourceLink id="DOI_10_1029_2011GL050422">(Otto a kol. 2012)</SourceLink>
      </p>
      <p>
        Autoři porovnali soubory atmosférických simulací pro šedesátá léta a první desetiletí 21. století. Pro oblast 50–60° severní šířky a 35–55° východní délky
        použili červencový ukazatel kombinující teplotu a tlakovou situaci. Po opravě modelových odchylek odpovídal rozdíl přibližně 1 °C pro událost stejné vzácnosti,
        zatímco četnost překročení hranice roku 2010 vzrostla asi trojnásobně. Sami výsledek označili za ilustrační, závislý na této opravě. <SourceLink id="DOI_10_1029_2011GL050422">(Otto a kol. 2012, obrázek 4)</SourceLink>
      </p>
      <p>
        Nebyl to definitivní přesný podíl lidského vlivu. Pokus vysvětlil, proč dominantní role počasí v teplotní odchylce nevylučuje významnou změnu pravděpodobnosti.
        V tom se oba pohledy doplňují. Jeden samotný neodpovídá na obě otázky.
      </p>

      <h4 id="predpoved-2021" className={styles.testHeading}>Test 3 · Předpovězené vedro</h4>
      <p>
        Další zkouška využila model, který severoamerické vedro v červnu 2021 úspěšně předpověděl. Nicholas Leach a spoluautoři v roce 2024 zopakovali předpovědi Evropského centra pro střednědobé předpovědi počasí, ECMWF,
        s nižším CO₂ a s odhadem lidského oteplení odebraným z oceánu, včetně úpravy mořského ledu. Atmosféru nechali přizpůsobit.
        Jestliže teplejší klimatické podmínky zesílily událost, chladnější pokus má dát nižší vrchol. <SourceLink id="DOI_10_1038_s41467_024_48280_7">(Leach a kol. 2024)</SourceLink>
      </p>
      <p>
        Souhrnný odhad příspěvku lidského oteplení vůči předindustriálním podmínkám činil <strong>1,3 °C s rozmezím 0,7–1,6 °C</strong> pro regionální denní maximum.
        Meze vymezují prostředních 66 % rozdělení odhadu, jeho 17.–83. percentil. Jde tedy o užší interval než dříve uvedené 95% intervaly.
        Vymezení oblasti a pozorovaný vrchol obsahuje <Link href="/pozorovani/vlny-veder/#severni-amerika-2021">pozorovací článek</Link>.
        Shoda běžné předpovědi se skutečností kontroluje schopnost modelu vytvořit událost. Chladnější svět přímo pozorovat nemůžeme, takže vyčíslení příspěvku zůstává modelovým výsledkem. <SourceLink id="DOI_10_1038_s41467_024_48280_7">(Leach a kol. 2024)</SourceLink>
      </p>
      <p>
        Tato hypotéza tak obstála ve třech rozdílných zkouškách. Zásah do půdní vody ověřuje zesílení u povrchu, soubory simulací vztah teploty a četnosti a předpovědní pokus vliv klimatických podmínek na konkrétní událost.
        Nejde o tři nezávislá měření téhož čísla. Je to souběh důkazů pro jednotlivé části společného vysvětlení.
      </p>
    </HypothesisStory>

    <h2 id="mechanismus">Jak oteplování, proudění a půdní voda působí společně</h2>
    <p>
      Samotné proudění dobře vysvětluje vznik mimořádné situace, ale v testovaném evropském záznamu nestačí na celý růst extrémních teplot.
      Lépe obstojí vysvětlení, v němž se počasí odehrává v teplejším klimatu a nedostatek půdní vody může ohřev dále zesílit.
      Nyní spojíme tyto děje a ukážeme, proč posun teploty mění také počet a délku překročení pevné hranice.
    </p>
    <h3 id="teplotni-posun">Vyšší teplota mění i délku překročení</h3>
    <p>
      Vlna veder je souvislá řada dnů splňujících zvolené teplotní pravidlo. Její délka proto nezávisí jen na délce tlakové situace, ale také na vzdálenosti teplot od hranice.
      Vyšší výchozí teplota může přidat horké dny na začátku a na konci téže epizody.
      Přesný postup určení hranice vysvětluje <Link href="/pozorovani/vlny-veder/#hranice-a-trvani">pozorování vln veder</Link>.
    </p>
    <p>
      Následující vlastní početní příklad používá devět vymyšlených denních maxim. Zvolíme hranici <strong>striktně nad 30 °C</strong> a nejméně tři dny po sobě.
      Pak ke každému dni přičteme přesně 2 °C. Tvar a časový průběh epizody ponecháme stejný. Je to záměrně jednoduchý pokus s pravidlem, nikoli měření ani klimatická projekce.
    </p>
    <div className={styles.exampleTable} tabIndex={0} role="region" aria-label="Ilustrační denní maxima, tabulka posuvná do stran">
      <table>
        <caption>Vymyšlená denní maxima v °C. Zvýrazněny jsou hodnoty nad 30 °C.</caption>
        <thead><tr><th scope="col">Den</th>{temperatures.map((_, index) => <th scope="col" key={index}>{index + 1}</th>)}</tr></thead>
        <tbody>{[0, 2].map((shift) => <tr key={shift}><th scope="row">{shift === 0 ? "Výchozí řada" : "Posun o +2 °C"}</th>{temperatures.map((temperature, index) => <td key={index} className={temperature + shift > 30 ? styles.hot : undefined}>{temperature + shift}</td>)}</tr>)}</tbody>
      </table>
    </div>
    <p>
      Ve výchozí řadě podmínku splňují dny 4–6, tedy tři dny. Po posunu ji splňují dny 2–7, tedy šest dnů.
      Hodnota přesně 30 °C se nezapočítá. Délka se v tomto příkladu zdvojnásobila, přestože jsme nezměnili pořadí ani rozdíly mezi jednotlivými dny.
      <a href={`${media}/ilustracni-rada.csv`}>Vstupní a posunutou řadu lze stáhnout</a>.
    </p>
    <p>
      Příklad ukazuje možnost prodloužení, neurčuje skutečný násobek změny četnosti. Ten závisí na tom, kolik dnů leží blízko hranice a jak na sebe navazují.
      Při hranici posouvané spolu s novým teplotním průměrem by se měnila i otázka, kterou počítáme.
      Pro srovnání historických veder vůči dřívějším podmínkám je proto podstatné zachovat stejnou referenci.
    </p>

    <h3 id="energie-a-voda">Kam odchází energie nad pevninou</h3>
    <p>
      Dokud má povrch dost vody, může teplé a suché počasí zesílit výpar. Ten však zároveň čerpá její zásobu.
      Pokud ji déšť nedoplňuje, začne nedostatek vody výpar omezovat. Oslabení této chladicí cesty potom umožní větší ohřev.
      Tak vzniká zesilující zpětná vazba: horká epizoda přispívá k vysychání a vysychání může zesílit horko. <SourceLink id="DOI_10_1017_9781009157896_013">(IPCC AR6, box 11.1)</SourceLink>
    </p>
    <p>
      Sluneční záření ohřívá zemský povrch. Energie se potom rozděluje mezi vyzařování, ohřev půdy, výpar a předávání tepla vzduchu.
      Suchá půda nevytváří novou energii. Omezuje jednu z cest jejího odvodu. Rozdíl mezi vlhkou a suchou krajinou proto nejde vyjádřit jen množstvím dopadajícího slunečního záření.
      Výsledek pokusu s půdou ukazuje význam tohoto rozdělení. <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíl 7.2)</SourceLink>
    </p>
    <p>
      Vedro může mít také paměť přes noc. Diego Miralles a spoluautoři v roce 2014 spojili družicové údaje, radiosondáže a model sloupce půdy a atmosféry pro Francii 2003 a Rusko 2010.
      Nad povrchem ochlazeným v noci zůstávala teplá vrstva vzduchu. Další den se rostoucí promíchaná vrstva znovu spojila s teplým vzduchem nad ní.
      Část tepla z předchozího dne tak vstoupila do dalšího denního vývoje. <SourceLink id="DOI_10_1038_ngeo2141">(Miralles a kol. 2014)</SourceLink>
    </p>
    <p>
      <Link href="/pozorovani/vlny-veder/#teplota-ve-vysce">Výšková měření</Link> zde přidávají kontrolu, kterou samotný povrchový teploměr neposkytne.
      Mechanismus spojuje přísun vzduchu, povrchový ohřev a promíchávání ve výšce. Vyschlá půda i teplá vrstva mohou přetrvávat, takže jednotlivé dny nejsou nezávislé pokusy.
      Změna proudění nebo déšť může toto pokračování přerušit. <SourceLink id="DOI_10_1038_ngeo2141">(Miralles a kol. 2014)</SourceLink>
    </p>

    <h3 id="co-je-dolozeno">Co vysvětlení pokrývá</h3>
    <p>
      Souhrn výzkumu v IPCC AR6 přisuzuje lidskému vlivu hlavní úlohu v celosvětovém růstu četnosti a intenzity horkých extrémů s hodnocením „extrémně pravděpodobné“, tedy více než 95 %.
      Základem je oteplování způsobené zejména skleníkovými plyny. Regionální vývoj upravují proudění, půdní voda, změny aerosolů a využití půdy.
      Tato syntéza shrnuje více oblastí a studií než zde podrobně rozebrané události. <SourceLink id="DOI_10_1017_9781009157896_013">(IPCC AR6, oddíl 11.3.4)</SourceLink>
    </p>
    <p>
      Nejjistější je směr základního teplotního posunu. Méně jisté jsou přesné podíly při jednotlivé události a budoucí regionální změny proudění.
      Různé definice vlny také dávají různé změny četnosti a síly. Příspěvek 1,3 °C k jedné události proto nelze přenést na všechna budoucí vedra.
    </p>
    <details className="method-details">
      <summary>Meze testů a co by vysvětlení změnilo</summary>
      <p>
        Srovnání podobných tlakových map neudrží stejné úplně všechny podmínky. Půdní voda i teplota přicházejícího vzduchu se mohou lišit.
        U evropských extrémů navíc klimatické modely podhodnotily odhadovaný příspěvek změn proudění.
        Nevíme přesně, kolik z rozdílu připadá na vynucenou změnu a kolik na pomalé přirozené kolísání. <SourceLink id="DOI_10_1038_s41467_023_42143_3">(Vautard a kol. 2023)</SourceLink>
      </p>
      <p>
        Vysychání má největší možnost změnit ohřev tam, kde se výpar právě začíná omezovat nedostatkem vody.
        V již téměř suché půdě nemůže stejným způsobem ubývat neomezené množství výparu.
        Tento mechanismus také sám nepopisuje vlhké vedro ani zdravotní zátěž, pro kterou záleží na vlhkosti vzduchu a nočních teplotách. <SourceLink id="DOI_10_1017_9781009157896_013">(IPCC AR6, box 11.1 a oddíl 11.3)</SourceLink>
      </p>
      <p>
        Současné vysvětlení by oslabila opakovaná zjištění, že při srovnatelném proudění, půdní vodě a stejné definici extrému nevzniká očekávaný teplotní posun, přestože se okolní klima prokazatelně oteplilo.
        Půdní zesílení by vyžadovalo opravu, kdyby současná měření výparu a toku tepla při vysychání systematicky neukazovala předpovězené přerozdělení energie.
        Jediná chladnější epizoda takový test nepředstavuje. Rozhodovala by opakovaná neshoda přesahující nejistotu měření a výpočtu.
      </p>
    </details>

    <h2 id="shrnuti">Shrnutí fungování mechanismu</h2>
    <div className="method-conclusion"><p>
      Vlnu veder vytváří konkrétní průběh počasí. Dlouhodobé oteplování však zvyšuje teplotu, ze které tento průběh vychází, a tím usnadňuje překračování stejných vysokých hranic.
      Na pevnině může vedro dále zesílit nedostatek vody pro výpar. Samotné změny proudění nevysvětlují celý pozorovaný růst extrémních teplot.
      Společné vysvětlení podporují porovnání podobných povětrnostních situací, pokusy s půdní vodou i předpovědní model ověřený na skutečné události.
      Přesný příspěvek jednotlivých dějů závisí na místě, období a definici vlny.
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
