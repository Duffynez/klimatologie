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
    <p className="article-prose__intro">Lodní stopa je protáhlá změna nízké oblačnosti za plující lodí. Na družicovém snímku často vypadá jako světlejší pruh. Letadla v takových pruzích nacházejí více menších kapek než v okolním oblaku. Podobné změny se objevují také po větru od průmyslových zdrojů. Snímky, měření a jejich zpracování ukazuje pozorování <Link href="/pozorovani/stopy-v-oblacich/">stop lodí a průmyslu v oblacích</Link>. <SourceLink id="DOI_10_1175_Durkee_2000_TIOSPA">(Durkee a kol. 2000)</SourceLink>{" "}<SourceLink id="DOI_10_1038_s41586_019_1423_9">(Toll a kol. 2019)</SourceLink></p>
    <p>Proč se oblak změní právě za zdrojem emisí? Loď současně vypouští teplo, vodní páru, plyny a drobné částice. K rozlišení jejich úloh nestačí fotografie jasného pruhu. Začneme proto lodními pokusy, ve kterých lze jednotlivé možnosti porovnat. Potom vysvětlíme, jak změna kapek ovlivní odraz světla a co z tohoto místního děje plyne pro působení aerosolů na klima.</p>

    <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="anthropogenic-aerosols-caption"
      context={<p>Aerosol jsou drobné pevné částice nebo kapalné kapky rozptýlené ve vzduchu. Část z nich může sloužit jako zárodek oblačné kapky. Porovnáváme hlavní příčinu lodní stopy, nikoli existenci tepla nebo vodní páry v emisích.</p>}
      caption={<>Rozlišuje souběh složení emisí, změny kapek a odezvy záření. Samotný jasnější pruh by mezi vysvětleními nerozhodl. Podmínky jednotlivých zkoušek rozebírají příběhy níže.</>} />

    <h2 id="pribehy">Jak se hledala příčina jasnějších oblaků</h2>
    <HypothesisStory id="teplo-a-para" number={1} title="Stopu vytváří především teplo a vodní pára z lodi">
      <p>Už snímky z meteorologických družic v šedesátých letech ukazovaly neobvyklé oblačné čáry. Jejich jas i tvar potřebovaly vysvětlení. Teplý vzduch ze spalování může stoupat a při výstupu se ochlazovat. Dosáhne-li nasycení vodní párou, vznikají kapky. Spalování navíc dodává další vodu. Kolem roku 1990 proto William Porch a další badatelé zkoumali úlohu tepla a pohybu vzduchu za lodí vedle vysvětlení pomocí částic. Tyto možnosti se zkoumaly souběžně. <SourceLink id="DOI_10_1175_Durkee_2000_TIOSPA">(Durkee a kol. 2000, úvod)</SourceLink></p>
      <p>Tepelné vysvětlení má konkrétní požadavek: dodaná energie musí vyvolat dostatečný výstup vzduchu. Vlhkostní vysvětlení zase potřebuje dost vody navíc. Právě to lze změřit a spočítat. Schéma nejprve ukazuje navržený děj a potom dvě zkoušky jeho významu.</p>
      <Graphic name="teplo-a-para" alt="Teplo z lodi může podporovat výstup vzduchu a emise dodávají vodní páru. Letecký test hledá změny teploty a páry proti okolí. Druhý test porovnává simulace se stejnými částicemi, s teplem a bez něj. Výsledky nepodporují teplo a páru jako hlavní příčinu dlouhé stopy.">Údaj 150 m vymezuje blízkost lodí při čtyřech zachycených otepleních. Přibližně 8 km je vzdálenost po větru v konkrétním modelovém testu, nikoli obecná hranice pro všechny lodě. <SourceLink id="DOI_10_1175_Hobbs_2000_EFSWRT">(Hobbs a kol. 2000, oddíl 6g)</SourceLink>{" "}<SourceLink id="DOI_10_1175_Durkee_2000_TIOSPA">(Durkee a kol. 2000, oddíl 4a5)</SourceLink></Graphic>
      <h4 id="test-teplota-para" className={styles.testHeading}>První test: co z tepla a páry zbude po smísení se vzduchem?</h4>
      <p>V červnu 1994 proběhla u Kalifornie kampaň MAST. Výzkumná letadla protínala spalinové vlečky a měřila také vzduch mimo ně. Peter Hobbs a spoluautoři odhadli odpadní tepelný výkon sledovaných lodí na přibližně 2–22 megawattů. Velké číslo však ještě neznamená velké oteplení rozsáhlého oblaku. Rozhoduje, do jakého množství okolního vzduchu se emise rozptýlí. <SourceLink id="DOI_10_1175_Hobbs_2000_EFSWRT">(Hobbs a kol. 2000)</SourceLink></p>
      <p>Měřitelné oteplení výzkumníci zaznamenali jen při čtyřech průletech, všechny proběhly do 150 m od lodi. Dále po větru už u těchto případů tepelný rozdíl nerozlišili. Zvýšení množství vodní páry nad běžné kolísání nezachytili vůbec. Teplo a voda se při mísení rozdělily do tak velkého množství okolního vzduchu, že jejich přírůstek přístroje nedokázaly oddělit od běžných změn. Samotné měření proto doplnila zkouška, která umožnila vliv tepla od ostatních emisí oddělit. <SourceLink id="DOI_10_1175_Hobbs_2000_EFSWRT">(Hobbs a kol. 2000, s. 2586–2587)</SourceLink></p>
      <h4 id="test-model-teplo" className={styles.testHeading}>Druhý test: vznikne podobná stopa i bez odpadního tepla?</h4>
      <p>Další zkouška využila model rozptylu emisí a vzniku kapek nastavený podle pozorovaného případu. Výzkumníci zadali stejný aerosol, podobu oblačné vrstvy i promíchávání vzduchu. Jednou přidali odhad téměř nejvyššího možného odpadního tepla dané lodi, podruhé jej vynechali. Od vzdálenosti přibližně 8 km po větru se obě simulace významně nelišily. Model současně porovnávali s měřenými koncentracemi částic a kapek, takže nehodnotili pouze shodu dvou výpočtů. <SourceLink id="DOI_10_1175_Durkee_2000_TIOSPA">(Durkee a kol. 2000, oddíl 4a5)</SourceLink></p>
      <p>Teplo může pomoci vlečce dostat se k oblaku, zvláště když se jednotlivé vzduchové vrstvy špatně promíchávají. Neobstálo však jako hlavní vysvětlení sledované dlouhé stopy. Pro tu je potřeba proces, jehož účinek přetrvá i poté, co se přebytek tepla a vlhkosti zředí. <SourceLink id="DOI_10_1175_Hobbs_2000_EFSWRT">(Hobbs a kol. 2000)</SourceLink>{" "}<SourceLink id="DOI_10_1175_Durkee_2000_TIOSPA">(Durkee a kol. 2000)</SourceLink></p>
    </HypothesisStory>

    <HypothesisStory id="castice-a-kapky" number={2} title="Částice vytvářejí více menších oblačných kapek">
      <p>Druhé vysvětlení vychází z toho, na čem kapky vznikají. Voda může kondenzovat na drobných částicích, kterým v této úloze říkáme kondenzační jádra. Sean Twomey v roce 1974 rozebral klimatický důsledek: pokud znečištění zvýší počet kapek, mezi které se rozdělí stejné množství kapalné vody, budou jednotlivé kapky menší. Oblak pak může odrazit více slunečního světla. V roce 1977 vztah podrobněji vyjádřil výpočtem. <SourceLink id="DOI_10_1016_0004_6981_74_90004_3">(Twomey 1974)</SourceLink>{" "}<SourceLink id="DOI_10_1175_Twomey_1977_TIOPOT">(Twomey 1977)</SourceLink></p>
      <p>Tato hypotéza předpovídá rozdíl mezi loděmi podle částic v jejich emisích. Dvě lodě mohou vypouštět podobné množství tepla, ale jen jedna dostatek částic vhodných ke vzniku kapek. Potom má jen za ní vzniknout výrazná změna oblačnosti. Druhou možnost kontroly nabízí změna paliva: jestliže oslabí přísun vhodných částic, měla by zeslábnout i změna kapek. <SourceLink id="DOI_10_1175_Hobbs_2000_EFSWRT">(Hobbs a kol. 2000)</SourceLink>{" "}<SourceLink id="DOI_10_5194_acp_23_8259_2023">(Diamond 2023)</SourceLink></p>
      <Graphic name="castice-a-kapky" alt="Částice z emisí slouží jako zárodky kapek. Při stejném množství vody více menších kapek zesílí rozptyl světla. První test porovnává dvě lodě v témže vzduchu. Druhý sleduje zeslabení změny kapek po omezení síry v palivu v jihovýchodním Atlantiku.">Srovnání kapek předpokládá stejné množství kapalné vody. Nakreslený počet a rozměry kapek nepředstavují naměřený vzorek. U druhého testu je „okolní oblak“ zkratkou pro statistický odhad sestavený z okolních měření a povětrnostních podmínek. <SourceLink id="DOI_10_1175_Twomey_1977_TIOPOT">(Twomey 1977)</SourceLink>{" "}<SourceLink id="DOI_10_1175_Durkee_2000_TIOSPA">(Durkee a kol. 2000)</SourceLink>{" "}<SourceLink id="DOI_10_5194_acp_23_8259_2023">(Diamond 2023)</SourceLink></Graphic>
      <h4 id="test-dve-lode" className={styles.testHeading}>První test: dvě lodě ve stejném vzduchu</h4>
      <p>Dne 27. června 1994 výzkumníci sledovali nákladní loď Tai He a vojenskou Mount Vernon. Obě pluly ve stejné vzduchové hmotě pod podobným oblakem. Tai He zanechala stopu, Mount Vernon nikoli. Rozdíl tedy nešlo jednoduše vysvětlit tím, že jedna loď potkala vlhké počasí a druhá suché. V emisích Tai He bylo více částic takové velikosti, při které mohly v daných podmínkách účinně vznikat kapky. Měření jejich schopnosti tvořit kapky tento rozdíl podpořilo. <SourceLink id="DOI_10_1175_Durkee_2000_TIOSPA">(Durkee a kol. 2000, oddíl 4a2)</SourceLink></p>
      <p>Kampaň umožnila rozebírat také chemickou povahu emisí. Ukázalo se, že ne každá vypuštěná částice se stane oblačnou kapkou. Záleží na její velikosti a složení i na vlhkosti vzduchu. Proto samotný počet částic ve spalinách nestačil k určení, která loď vytvoří stopu. V různých studiích MAST se spojilo měření emisí s jejich skutečným projevem v oblaku. Tyto práce ovšem využívají jednu společnou kampaň, nejde o několik nezávislých opakování v různých letech. <SourceLink id="DOI_10_1175_Hobbs_2000_EFSWRT">(Hobbs a kol. 2000)</SourceLink>{" "}<SourceLink id="DOI_10_5194_acp_22_641_2022">(Christensen a kol. 2022)</SourceLink></p>
      <h4 id="test-palivo" className={styles.testHeading}>Druhý test: co se změnilo po omezení síry v palivu?</h4>
      <p>Od začátku roku 2020 se globální limit hmotnostního podílu síry v lodním palivu snížil z 3,5 % na 0,5 %, případně bylo nutné dosáhnout odpovídajícího omezení emisí čištěním spalin. Tím se změnily podmínky pro vznik aerosolů. Tianle Yuan a kolegové zaznamenali v roce 2020 nejnižší výskyt rozpoznatelných lodních stop ve své družicové řadě 2003–2020. Vysvětlení pouhým útlumem dopravy během pandemie nestačilo: údaje o pohybu lodí ukazovaly globální pokles provozu asi o 1,4 % a málo stop zůstalo i v dostupné části roku 2021. <SourceLink id="DOI_10_1126_sciadv_abn7988">(Yuan a kol. 2022)</SourceLink></p>
      <p>Michael Diamond v roce 2023 zkoumal jinou vlastnost téhož děje. V lodním koridoru jihovýchodního Atlantiku porovnal velikost kapek a odrazivost s odhadem, jaké by byly bez lodí. Odhad sestavil z okolních měření se zohledněním počasí. V září až listopadu let 2020–2022 byl rozdíl velikosti kapek slabší než ve všech předchozích tříletých obdobích. Zesvětlení také zesláblo, jeho změna však byla statisticky méně průkazná. <Link href="/pozorovani/stopy-v-oblacich/#vysledky">Graf a přesné hodnoty</Link> ukazují obě veličiny odděleně. <SourceLink id="DOI_10_5194_acp_23_8259_2023">(Diamond 2023)</SourceLink></p>
      <p>Novější test se tak vrací ke stejné předpovědi jinou cestou. Místo průletu za jednou lodí využívá rozsáhlou změnu emisí a několik let družicových měření. Spolu s leteckými pokusy podporuje částice jako hlavní příčinu změny kapek. Zároveň ukazuje, proč nemůžeme z počtu stop rovnou vyčíst přesnou změnu odražené energie. <SourceLink id="DOI_10_5194_acp_22_641_2022">(Christensen a kol. 2022)</SourceLink>{" "}<SourceLink id="DOI_10_5194_acp_23_8259_2023">(Diamond 2023)</SourceLink></p>
    </HypothesisStory>

    <h2 id="jak-mechanismus-funguje">Jak částice změní kapky a odraz světla</h2>
    <p>Samotné teplo a pára nevysvětlily hlavní změnu dlouhých lodních stop. Lépe obstálo vysvětlení pomocí částic: odpovídá rozdílům mezi loděmi i zeslabení změny kapek po omezení emisí. Teď můžeme projít vlastní děj od částice k jasnějšímu oblaku. Jeho základem je vznik většího počtu kapek, další vývoj ovšem závisí na vodě a proudění v oblaku. <SourceLink id="DOI_10_5194_acp_22_641_2022">(Christensen a kol. 2022)</SourceLink></p>
    <h3 id="vznik-kapky">Jak se z částice stane zárodek kapky</h3>
    <p>Oblačná kapka vzniká kondenzací, tedy přechodem vody z plynného do kapalného stavu. Pomáhá tomu ochlazování stoupajícího vzduchu. Při každé teplotě existuje určitá koncentrace páry, při které se nad rovnou vodní hladinou vypařování a kondenzace vyrovnávají. S ochlazením tato hodnota klesá. Pokud ji skutečné množství páry převýší, mluvíme o přesycení a voda může na vhodných částicích přibývat. <SourceLink id="DOI_10_5194_acp_8_1153_2008">(Rose a kol. 2008)</SourceLink></p>
    <p>Které částice jsou vhodné? Rozhoduje jejich velikost a složení. Rozpustná sůl vytváří s vodou roztok, nad kterým se rovnováha ustaví už při nižší koncentraci páry než nad čistou vodou. Voda se tak na částici snáze udrží. Proti tomu působí zakřivení povrchu: velmi malá kapka potřebuje k růstu větší přesycení než velká. Jakmile okolní vlhkost překoná společný požadavek obou účinků, může částice vyrůst v oblačnou kapku. Proto se ve stejném vzduchu některé částice uplatní jako kondenzační jádra a jiné zůstanou drobné. <SourceLink id="DOI_10_5194_acp_8_1153_2008">(Rose a kol. 2008)</SourceLink></p>
    <p>To lze zkoušet přímo v laboratoři. Rose a spoluautoři nechávali částice síranu amonného a chloridu sodného o zvolených průměrech 20–220 nanometrů procházet přístrojem s řízenými vlhkostními podmínkami. Nanometr je miliardtina metru. Sledovali, při jakých podmínkách se z částic stanou kapky, a výsledek porovnávali s teorií. Jejich kalibrační experimenty také ukázaly, jak citlivě záleží na teplotě, tlaku a vlastnostech zkušebních částic. <SourceLink id="DOI_10_5194_acp_8_1153_2008">(Rose a kol. 2008)</SourceLink></p>
    <p>Lodě a průmyslové zdroje dodávají částice přímo i prostřednictvím plynů, ze kterých částice teprve vznikají. Například spalování paliva se sírou uvolňuje oxid siřičitý. Jeho další chemické přeměny vytvářejí sírany, tedy soli kyseliny sírové, které mohou pomáhat vzniku kapek. Změna paliva tak může změnit nabídku kondenzačních jader. Kolik z nich skutečně vytvoří kapky, závisí také na podmínkách v oblaku. <SourceLink id="DOI_10_1175_Hobbs_2000_EFSWRT">(Hobbs a kol. 2000)</SourceLink>{" "}<SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, kapitola 7)</SourceLink></p>
    <h3 id="rozptyl-svetla">Proč více menších kapek zesílí rozptyl</h3>
    <p>Představme si stejný objem kapalné vody rozdělený nejprve do jedné kulové kapky a potom do osmi stejných kapek. Každá z osmi má poloviční poloměr. Při pohledu proti světlu má tedy čtvrtinový průřez, ale kapek je osm. Součet jejich průřezů je dvojnásobný. Tento geometrický příklad ukazuje, proč může rozdělení vody mezi menší kapky zvýšit pravděpodobnost, že světlo na své cestě oblakem narazí na kapku. Nejde o měření ani o tvrzení, že se odrazivost oblaku zdvojnásobí. <SourceLink id="DOI_10_1175_Twomey_1977_TIOPOT">(Twomey 1977)</SourceLink></p>
    <p>Světlo se na kapkách rozptyluje a uvnitř oblaku může opakovaně měnit směr. Větší souhrnný průřez za stejných podmínek zvyšuje podíl záření, který se vrátí vzhůru. Tento základní účinek zvýšeného počtu kapek se označuje jako Twomeyův efekt. Přesný výpočet zahrnuje různé velikosti kapek, směr osvětlení i vícenásobný rozptyl. <SourceLink id="DOI_10_1175_Twomey_1977_TIOPOT">(Twomey 1977)</SourceLink></p>
    <h3 id="vyvoj-oblaku">Co udělá další vývoj oblaku</h3>
    <p>Skutečný oblak si stejné množství vody nemusí zachovat. Menší kapky se hůře spojují do velkých padajících kapek, takže může méně mrholit a v oblaku zbude více vody. Do oblaku se ale také přimíchává okolní vzduch. Je-li suchý, podporuje vypařování a vody může naopak ubývat. Proto samotné zmenšení kapek nepředpovídá celý pozdější vývoj jasu. <SourceLink id="DOI_10_1038_s41586_019_1423_9">(Toll a kol. 2019)</SourceLink></p>
    <p>Velle Toll a kolegové v roce 2019 rozšířili porovnávání na přibližně 2 400 stop od průmyslových zdrojů a požárů z patnácti let družicových údajů. Spolu s lodními a sopečnými stopami sledovali i rozmanitější oblaka nad pevninou. Nacházeli přírůstky i úbytky kapalné vody. Jejich částečné vyrovnávání nepodporovalo jednoduchou představu, že znečištění vždy výrazně prodlouží život oblaku a zvýší jeho vodní zásobu. Základní změna kapek přitom zůstala doložená. <SourceLink id="DOI_10_1038_s41586_019_1423_9">(Toll a kol. 2019)</SourceLink></p>
    <h3 id="klimaticky-ucinek">Jak se místní děj promítne do klimatu</h3>
    <p>Odraz světla na změněných oblacích je jednou z cest, kterými aerosoly působí na energetickou bilanci. Částice rozptylují a pohlcují záření také přímo, ještě před vznikem kapek. Síranové částice převážně rozptylují sluneční světlo, zatímco černý uhlík v sazích je silně pohlcuje a ohřívá vzduch, ve kterém se nachází. Chemické složení proto rozhoduje i o tomto přímém účinku. <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, kapitola 7, oddíl 7.3.3)</SourceLink></p>
    <p>Celkový účinek aerosolů z lidské činnosti hodnotí IPCC pro rok 2019 vůči roku 1750 jako ochlazující: −1,1 W/m² s velmi pravděpodobným rozmezím −1,7 až −0,4 W/m². Jde o změnu energetické bilance v průměru na metr čtvereční celé Země, včetně rychlých přizpůsobení atmosféry a oblaků. Číslo pochází ze syntézy různých důkazů, nikoli z přepočtu jedné lodní stopy. Tento účinek částečně tlumí oteplující působení skleníkových plynů, které vysvětluje článek o <Link href="/mechanismy/energeticka-bilance-zeme/">přibývání energie v klimatickém systému</Link>. <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, kapitola 7)</SourceLink></p>
    <p>Vznik kapek na částicích a jejich vliv na rozptyl světla jsou dobře ověřené. Větší nejistota zůstává v tom, jak se změní voda, rozsah a trvání skutečných oblaků, a tedy i výsledný globální účinek. <SourceLink id="DOI_10_5194_acp_22_641_2022">(Christensen a kol. 2022)</SourceLink></p>
    <details className="method-details"><summary>Nejistoty, meze a další ověřování</summary>
      <p><strong>Viditelné stopy vybírají zvláštní situace.</strong> Výrazný pruh se snadněji odliší v citlivém nízkém oblaku než v každé oblačnosti. Nepřítomnost rozpoznatelné stopy proto sama neznamená nulový účinek emisí. Pro přenos na větší oblasti potřebujeme také sledování méně nápadných změn a různého počasí. <SourceLink id="DOI_10_5194_acp_22_641_2022">(Christensen a kol. 2022)</SourceLink></p>
      <p><strong>Odhad bez lodí je statistický.</strong> V atlantském koridoru nemáme druhou totožnou atmosféru bez dopravy. Porovnání závisí na tom, zda okolní měření a použité povětrnostní veličiny dobře vystihují podmínky uvnitř. Místní změnu odrazivosti nelze bez dalšího přenést na celou planetu. <SourceLink id="DOI_10_5194_acp_23_8259_2023">(Diamond 2023)</SourceLink></p>
      <p><strong>Co by závěr oslabilo?</strong> Opakované měření za srovnatelných podmínek, při kterém by změna vhodných částic nevedla k očekávané změně počtu kapek, by zpochybnilo přisouzení konkrétní stopy aerosolům. Pokud by měření různých oblaků ukázala větší a trvalejší úbytek vody, než současné odhady předpokládají, bylo by nutné snížit odhad jejich celkového ochlazujícího působení. Jde o dvě různé zkoušky: první kontroluje vznik kapek, druhá další vývoj oblaku. <SourceLink id="DOI_10_1038_s41586_019_1423_9">(Toll a kol. 2019)</SourceLink></p>
    </details>

    <h2 id="shrnuti">Shrnutí fungování mechanismu</h2>
    <div className="method-conclusion"><p>Částice z lodních a průmyslových emisí mohou zvýšit počet oblačných kapek. Rozdělí-li se mezi ně stejné množství vody, kapky se zmenší a oblak více odráží sluneční světlo. Toto vysvětlení podporují laboratorní pokusy, měření za jednotlivými loděmi i změny po omezení emisí. Samotné teplo a pára hlavní změnu dlouhých lodních stop nevysvětlily. Celkový jas oblaku pak závisí také na tom, kolik v něm zůstane vody. Proto dobře známe základní mechanismus, zatímco jeho přesný klimatický příspěvek dále zpřesňujeme.</p></div>

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
