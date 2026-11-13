import Image from "next/image";
import Link from "next/link";
import { Equation } from "./Equation";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./ThermalExpansionArticle.module.css";

const media = "/media/tepelna-roztaznost";
const hypotheses: readonly MechanismHypothesis[] = [{
  id: "zmena-hustoty",
  name: "Teplota a slanost mění hustotu vody",
  prediction: "Při stejném tlaku má ohřev běžné mořské vody snížit hustotu. Slanější vzorek má při stejné teplotě hustotu větší. Změny v oceánu mají po přepočtu vysvětlit objemový příspěvek k hladině.",
  test: "1. Nové vzorky porovnáme se starší rovnicí hustoty. 2. Přepočet oceánských profilů porovnáme s výškou a hmotností oceánu. 3. Přesnější laboratoř prověří malé odchylky rovnice.",
  observation: "1. U nových měření z roku 2009 činí směrodatná odchylka rozdílů od rovnice 0,0036 kg/m³. 2. Součet objemového a hmotnostního příspěvku za roky 2004–2007 souhlasí s výškoměry v rámci nejistot. 3. Studie z roku 2018 nachází systematický rozdíl až 0,015 kg/m³.",
  verdict: "Podpořený mechanismus, zpřesňovaný převod",
  explanation: "Laboratoř potvrzuje odezvu hustoty a oceánská měření její použití. Přesnost konkrétní rovnice vyžaduje další kontrolu složení vzorků a kalibrace.",
  state: "supported",
}];
const tests = [
  { title: "1. Nová měření proti starší rovnici", prediction: "Rovnice má vystihnout hustotu dalších vzorků při známé teplotě a slanosti.", test: "Millero a Huang porovnali 230 nových hodnot rozdílu hustot mořské a čisté vody s rovnicí z roku 1981.", result: "Směrodatná odchylka rozdílů činila 0,0036 kg/m³ v rozsahu 0–40 °C a praktické salinity do 40." },
  { title: "2. Kontrola oceánskou hladinou", prediction: "Objemový příspěvek z profilů a přísun vody mají společně odpovídat změně výšky.", test: "Leuliette a Miller spojili Argo do 900 m, gravitaci GRACE a radarové výškoměry za leden 2004 až prosinec 2007.", result: "Součet 1,5 ± 1,0 mm za rok je slučitelný s 2,4 ± 1,1 z Jasonu-1 i 2,7 ± 1,5 z Envisatu. Intervaly jsou 95%." },
  { title: "3. Přesnější kontrola hustoty", prediction: "Používaná rovnice se má vejít do své odhadované nejistoty i při přesnějším měření.", test: "Schmidt a kolegové porovnali standardní mořskou vodu s referenční vodou a opravili změny složení vzorků.", result: "Při atmosférickém tlaku nalezli hustoty až o 0,015 kg/m³ nižší než TEOS-10. Rozdíl místy překročil jeho odhad nejistoty." },
];

export function ThermalExpansionArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Jak se změní objem vody, která už v oceánu je</h2>
    <p className="article-prose__intro">
      Globální hladina moře stoupá a část vzestupu odpovídá změně objemu vody při oteplování.
      Rozbor za roky 1993–2018 určil tento příspěvek na 1,19 mm za rok, s 90% intervalem nejistoty 0,99–1,44 mm za rok.
      <Link href="/pozorovani/gmsl/#bilance-hladiny"> Pozorovací článek</Link> popisuje měření a vznik tohoto odhadu.
      Zde vysvětlíme, proč do přepočtu objemu vstupuje teplota i slanost a jak se jeho správnost ověřuje.
      <SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, tab. 1)</SourceLink>
    </p>
    <p>
      <strong>Hustota</strong> vyjadřuje hmotnost na jednotku objemu, například kilogramy v jednom metru krychlovém.
      Když hustota stejného množství vody klesne, voda zabere více místa.
      Porovnání musí zachovat tlak, protože i stlačení mění hustotu. Věnujeme se kapalné mořské vodě a jejím běžným oceánským teplotám.
      Přísun další vody z tajícího ledu a pevniny rozebírá <Link href="/mechanismy/bilance-globalni-hladiny-more/">bilance hladiny</Link>.
      <SourceLink id="TEOS10_MANUAL_2010"> (IOC, SCOR a IAPSO 2010, oddíl 2)</SourceLink>
    </p>

    <h2 id="hypotezy">Jedno vysvětlení a tři zkoušky</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="thermal-expansion-hypothesis-caption"
      context={<p>Slanost znamená obsah rozpuštěných solí. Hustotu porovnáváme v kg/m³, příspěvek ke změně hladiny v mm za rok. U laboratorních kontrol měníme teplotu nebo slanost a ostatní podmínky držíme stejné.</p>}
      caption={<>Ohřev a změna slanosti jsou dvě kontrolované varianty změny hustoty. Oceánská zkouška navíc odděluje změnu objemu od přibývání vody. Menší rozptyl laboratorních údajů sám nezaručuje, že neobsahují společný posun.</>} />

    <h2 id="pribehy">Od laboratorní rovnice k měření oceánu</h2>
    <HypothesisStory id="zmena-hustoty" number={1} title="Teplota a slanost mění hustotu vody">
      <p>
        Pro výpočet nestačí vědět, že teplejší voda obvykle zabírá více místa. Potřebujeme určit, o kolik se změní její hustota při dané teplotě, slanosti a tlaku.
        Frank Millero a Alain Poisson v roce 1981 spojili dvě laboratorní řady do rovnice pro tlak jedné atmosféry.
        Nové údaje ukazovaly mimo jiné nedostatky předchozího vztahu nad 25 °C.
        Výsledná rovnice popsala 467 hodnot v rozsahu 0–40 °C. Její souhlas s těmito údaji byl kontrolou proložení, další vzorky mohly ověřit její použitelnost mimo původní soubor.
        <SourceLink id="DOI_10_1016_0198_0149_81_90122_9"> (Millero a Poisson 1981)</SourceLink>
      </p>
      <p>
        Obrázek rozlišuje dva pokusy. Vlevo zahříváme stejný vzorek bez úniku vody a beze změny slanosti.
        Vpravo porovnáváme stejně těžké vzorky s různým podílem solí při stejné teplotě.
        Slanější vzorek má větší hustotu, a proto menší objem. Nejde o dosypávání soli do jednoho vzorku, které by změnilo také jeho hmotnost.
        <SourceLink id="TEOS10_MANUAL_2010"> (IOC, SCOR a IAPSO 2010, oddíly 2.18–2.19)</SourceLink>
      </p>
      <figure className={`article-figure ${styles.explanatoryFigure}`}>
        <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Schéma teploty a slanosti, na úzké obrazovce posuvné do stran">
          <a href={`${media}/teplota-slanost.svg`} aria-label="Otevřít schéma v plné velikosti"><Image className="article-figure__media" src={`${media}/teplota-slanost.svg`} width={1100} height={680} alt="Při stejné hmotnosti a tlaku zabírá ohřátá mořská voda větší objem. Při stejné teplotě zabírá slanější vzorek menší objem než méně slaný. V oceánu měříme teplotu, slanost a tlak po vrstvách a výsledek kontrolujeme výškou a hmotností oceánu." unoptimized /></a>
        </div>
        <div className={styles.testPanels}>{tests.map(test => <section className={styles.testPanel} key={test.title}>
          <h4>{test.title}</h4><dl><dt>Předpověď</dt><dd>{test.prediction}</dd><dt>Zkouška</dt><dd>{test.test}</dd><dt>Výsledek</dt><dd>{test.result}</dd></dl>
        </section>)}</div>
        <figcaption>Vlastní kvalitativní schéma Klimatologie.eu připravené s pomocí AI, CC BY 4.0.
          Rozdíly objemů jsou zvětšeny pro názornost. Tečky označují soli, ne skutečný počet částic.
          Fyzikální vztahy podle <SourceLink id="TEOS10_MANUAL_2010">TEOS-10</SourceLink>, oceánská kontrola podle
          <SourceLink id="DOI_10_1029_2008GL036010"> Leulietta a Millera 2009</SourceLink>.
          <a href={`${media}/podklady.txt`}> Podklady a licence</a>.
        </figcaption>
      </figure>

      <h4 className={styles.testHeading} id="test-laborator">Zkouška 1. Nová měření proti starší rovnici</h4>
      <p>
        Millero a Huang v roce 2009 prověřili starší rovnici novými vzorky. Použili standardní mořskou vodu a vodu z Golfského proudu.
        Ředěním a pomalým odpařováním připravili různé slanosti. Ty určili z elektrické vodivosti přístrojem kalibrovaným standardní mořskou vodou.
        <strong>Praktická salinita</strong> je údaj z této vodivostní stupnice. Hodnota 35 přibližně odpovídá 35 gramům solí na kilogram mořské vody, přesný převod zohledňuje i jejich složení.
        <SourceLink id="DOI_10_5194_os_5_91_2009"> (Millero a Huang 2009, oddíl 2)</SourceLink>
      </p>
      <p>
        Hustotu měřili kmitající trubicí: naplnění hustší kapalinou změní její dobu kmitu. Přístroj kalibrovali čistou vodou a vzduchem a kontrolovali teplotu.
        Srovnávali rozdíl hustot mořské a čisté vody, aby porovnání nezáviselo na odlišném přiřazení hustoty referenční vodě.
        U 230 nových hodnot v rozsahu 0–40 °C a praktické salinity do 40 činila směrodatná odchylka rozdílů od rovnice <strong>0,0036 kg/m³</strong>.
        To popisuje rozptyl odchylek, nikoli záruku absolutní přesnosti každého vzorku.
        <SourceLink id="DOI_10_5194_os_5_91_2009"> (Millero a Huang 2009, obr. 2)</SourceLink>
      </p>
      <p>
        Nový soubor tak ověřil starší vztah na dalších měřeních. Autoři se částečně překrývali s původním týmem a obě práce používaly návazné standardy slanosti.
        Úplnou nezávislost všech kalibrací proto předpokládat nemůžeme.
        Studie navíc sestavila nové rovnice, jejichž koeficienty autoři opravili v roce 2010. Odkazujeme i na tuto opravu, aby čtenář nepřebíral chybnou tabulku.
        <SourceLink id="DOI_10_5194_os_5_91_2009"> (původní studie)</SourceLink> a
        <SourceLink id="DOI_10_5194_os_6_379_2010"> oprava tabulky 2</SourceLink>
      </p>

      <h4 className={styles.testHeading} id="test-ocean">Zkouška 2. Kontrola oceánskou hladinou</h4>
      <p>
        V oceánu musíme nejprve zjistit, jak se teplota a slanost mění v jednotlivých hloubkách.
        Z těchto údajů lze vypočítat změnu hustoty a následně objemu.
        Objemový příspěvek k výšce hladiny se nazývá <strong>sterický</strong>. Zahrnuje teplotu i slanost.
        Jeho kontrolu nabízí radarová výška hladiny po oddělení příspěvku změněné hmotnosti oceánu.
        <SourceLink id="DOI_10_1007_s10712_019_09525_z"> (Gregory a kol. 2019, N17–N20)</SourceLink>
      </p>
      <p>
        Eric Leuliette a Laury Miller v roce 2009 porovnali plováky Argo, gravitační měření GRACE a výškoměry Jason-1 a Envisat za leden 2004 až prosinec 2007.
        Použili 242 305 zkontrolovaných teplotních a slanostních profilů. Přepočet omezili na horních 900 metrů, protože větší hloubky neměly dostatečné pokrytí.
        Z profilů vytvořili měsíční mapy a doplnili mezery mezi nimi.
        <SourceLink id="DOI_10_1029_2008GL036010"> (Leuliette a Miller 2009, oddíl 2)</SourceLink>
      </p>
      <p>
        Objemový příspěvek vyšel 0,8 ± 0,8 mm za rok. Po započtení hmotnosti činil součet <strong>1,5 ± 1,0 mm za rok</strong>.
        Výškoměry nezávisle zaznamenaly 2,4 ± 1,1 a 2,7 ± 1,5 mm za rok. Uvedené 95% intervaly odhadů trendu se překrývají.
        Součet je s celkovou změnou slučitelný, ale široké intervaly připouštějí i nezanedbatelný rozdíl.
        Tato čtyřletá zkouška ověřuje společnou použitelnost měření a převodu hustoty. Nedává přesné tempo dlouhodobé změny klimatu.
        <SourceLink id="DOI_10_1029_2008GL036010"> (Leuliette a Miller 2009, tab. 1)</SourceLink>
      </p>
      <p>
        Výška, gravitace a teplota jsou různé fyzikální signály, ale jejich zpracování sdílí některé opravy a předpoklady.
        Výsledek platí pro oceán převážně mezi 66° jižní a severní šířky s vyloučením pobřežních a zaledněných oblastí podle jednotlivých přístrojů.
        <Link href="/pozorovani/gmsl/#objem-2004-2007"> Pozorovací článek</Link> rozvádí výběr profilů, úpravy družicových údajů a výpočet nejistoty.
        <SourceLink id="DOI_10_1029_2008GL036010"> (Leuliette a Miller 2009)</SourceLink>
      </p>

      <h4 className={styles.testHeading} id="test-presnost">Zkouška 3. Přesnější kontrola hustoty</h4>
      <p>
        Hannes Schmidt a kolegové v roce 2018 řešili náročnější otázku: zda lze hustotou kontrolovat dlouhodobou stálost standardní mořské vody používané při kalibraci slanosti.
        Výsledky porovnávali s TEOS-10, mezinárodní soustavou rovnic pro fyzikální vlastnosti mořské vody.
        Měřili vzorek a referenční vodu stejným hustotním přístrojem, takže část jeho posunu mohla být odečtena.
        Zohlednili také složení vody, rozpuštěné plyny a látky uvolněné ze skla při skladování.
        V rozsahu 5–35 °C při atmosférickém tlaku uvádějí nejistotu měřené hustoty 0,002 kg/m³.
        <SourceLink id="DOI_10_5194_os_14_15_2018"> (Schmidt a kol. 2018, oddíly 2–3)</SourceLink>
      </p>
      <p>
        Nový vztah dával hustoty až o <strong>0,015 kg/m³ nižší</strong> než soustava TEOS-10.
        Rozdíl rostl se slaností a při atmosférickém tlaku místy překračoval odhad její nejistoty 0,008 kg/m³.
        Autoři našli možné zdroje systematické chyby ve starších měřeních.
        Výsledek upozornil na přeceněnou přesnost absolutní hustoty. Sám o sobě neurčuje chybu změny objemu při ohřevu, která závisí na rozdílu hustot mezi dvěma stavy.
        <SourceLink id="DOI_10_5194_os_14_15_2018"> (Schmidt a kol. 2018, oddíl 5 a obr. 11–13)</SourceLink>
      </p>
      <p>
        Zkoušky dohromady podporují změnu hustoty jako vysvětlení změn objemu. Zároveň rozlišují, co už bylo ověřeno a co se dá zpřesnit.
        Shoda nových vzorků se starší rovnicí a soulad oceánských měření prověřují různé kroky výpočtu.
        Přesnější laboratoř může odhalit malou chybu, kterou tato porovnání nerozliší.
      </p>
    </HypothesisStory>

    <h2 id="mechanismus">Jak se teplota a slanost promítnou do objemu</h2>
    <p>
      <strong>Ohřev a změna podílu solí mění hustotu mořské vody, a tím objem připadající na stejnou hmotnost.</strong>
      Tento vztah podpírají laboratorní zkoušky a jeho oceánské použití kontroluje srovnání profilů, gravitace a hladiny.
      TEOS-10 vztahy sjednocuje pro různé teploty, slanosti a tlaky, přesnost jednotlivých převodů se dál ověřuje.
      <SourceLink id="TEOS10_MANUAL_2010"> (IOC, SCOR a IAPSO 2010)</SourceLink>,
      <SourceLink id="DOI_10_1029_2008GL036010"> Leuliette a Miller 2009</SourceLink> a
      <SourceLink id="DOI_10_5194_os_14_15_2018"> Schmidt a kol. 2018</SourceLink>.
      Nyní projdeme cestu od změny uspořádání kapaliny přes hustotu k výšce vodního sloupce.
    </p>
    <h3 id="ohrev">Ohřev mění pohyb a uspořádání molekul</h3>
    <p>
      Molekuly vody se neustále pohybují a vzájemně na sebe působí.
      Dodané teplo mění jejich pohyb i uspořádání. Při stejném vnějším tlaku se tím mění průměrný prostor, který kapalina zabírá.
      U běžné mořské vody vede ohřev k většímu objemu.
      Samotná představa rychlejšího pohybu ale neurčuje velikost ani za všech podmínek znaménko změny.
      Molekuly vody vytvářejí vodíkové vazby, tedy vzájemná přitažlivá spojení, jejichž uspořádání ovlivňuje hustotu.
      Proto má například čistá voda při atmosférickém tlaku největší hustotu kolem 4 °C a při ohřevu od 0 °C k této teplotě se smršťuje.
      <SourceLink id="DOI_10_1038_ncomms9998"> (Nilsson a Pettersson 2015)</SourceLink>
    </p>
    <p>
      Pro výpočet používáme laboratorně ověřený vztah hustoty k podmínkám.
      V následující rovnici je V objem v m³, m hmotnost v kg a ρ hustota v kg/m³.
      Pokud hmotnost zůstane stejná a hustota klesne, podíl m/ρ vzroste.
      <SourceLink id="TEOS10_MANUAL_2010"> (IOC, SCOR a IAPSO 2010, oddíl 2.7)</SourceLink>
    </p>
    <Equation tex={"V=\\frac{m}{\\rho}"} />
    <p>
      Graf ukazuje dvě závislosti vypočtené z historické rovnice z roku 1981 při jedné atmosféře.
      Vlevo měníme teplotu a ponecháváme praktickou salinitu 35. Vpravo měníme salinitu při 15 °C.
      Například vyznačený bod vlevo říká, že při 5 °C má podle rovnice metr krychlový této vody hmotnost přibližně 1 027,675 kg.
      Čáry jsou výpočet pro zadané podmínky, nikoli časová řada pozorování. Obě osy hustoty mají stejné měřítko.
      <SourceLink id="DOI_10_1016_0198_0149_81_90122_9"> (Millero a Poisson 1981, s. 628–629)</SourceLink>
    </p>
    <figure className={`article-figure ${styles.explanatoryFigure}`}>
      <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Graf hustoty, na úzké obrazovce posuvný do stran">
        <a href={`${media}/hustota.svg`} aria-label="Otevřít graf hustoty v plné velikosti"><Image className="article-figure__media" src={`${media}/hustota.svg`} width={1100} height={680} alt="Při praktické salinitě 35 klesá vypočtená hustota při ohřevu od 0 do 30 °C stále rychleji. Při 15 °C roste hustota s praktickou salinitou od 30 do 40. Křivky používají rovnici z roku 1981 při tlaku jedné atmosféry." unoptimized /></a>
      </div>
      <figcaption>Vlastní výpočet a graf Klimatologie.eu s pomocí AI, CC BY 4.0.
        Historická rovnice používá tehdejší teplotní stupnici IPTS-68 a praktickou salinitu.
        Příklad slouží k vysvětlení závislostí, pro současné oceánské výpočty používáme TEOS-10 včetně tlaku a složení.
        <SourceLink id="DOI_10_1016_0198_0149_81_90122_9"> Původní rovnice</SourceLink>,
        <a href={`${media}/hustota-vypocet.csv`}> čísla grafu</a>,
        <a href={`${media}/vypocty.mjs`}> přepočet</a> a <a href={`${media}/grafika.mjs`}>vykreslení</a>.
      </figcaption>
    </figure>
    <p>
      Zakřivení levé čáry znamená, že stejný ohřev nemá všude stejný účinek.
      V našem početním příkladu se původní 1 m³ vody se salinitou 35 při ohřevu z 5 na 6 °C zvětší asi o <strong>119 mililitrů</strong>.
      Jiný vzorek, který má původně také 1 m³, se při ohřevu z 25 na 26 °C zvětší asi o <strong>301 mililitrů</strong>.
      Hmotnost každého vzorku během ohřevu držíme stálou. Čísla pocházejí ze stejné rovnice a podmínek jako graf.
      <a href={`${media}/priklady.json`}> Mezivýsledky</a> umožňují kontrolu výpočtu.
    </p>
    <h3 id="slanost">Slanost mění složení kapaliny</h3>
    <p>
      Sůl je v mořské vodě rozpuštěná převážně jako ionty, elektricky nabité částice.
      Jejich přítomnost mění hmotnostní složení i vzájemné působení částic kapaliny.
      Při stejné teplotě a tlaku má slanější mořská voda větší hustotu.
      Jeden kilogram slanějšího vzorku proto zabírá méně místa než kilogram méně slaného.
      Velikost rozdílu určuje změřený vztah, nelze ji získat prostým sečtením objemu vody a suché soli.
      <SourceLink id="TEOS10_MANUAL_2010"> (IOC, SCOR a IAPSO 2010, oddíly 2.4 a 2.19)</SourceLink>
    </p>
    <p>
      Při dešti nebo přítoku z řek se mění současně slanost i celková hmotnost vody.
      Když odděleně počítáme slanostní příspěvek, ptáme se, jak objem ovlivní změněná hustota. Přidanou vodu účtujeme v hmotnostním příspěvku.
      Podobně při vypařování ubývá voda a zbývající roztok se stává slanějším.
      Je proto nutné rozlišit porovnání stejně těžkých vzorků na obrázku od skutečného přesunu vody mezi oceánem, atmosférou a pevninou.
      <SourceLink id="DOI_10_1007_s10712_019_09525_z"> (Gregory a kol. 2019, N18–N20)</SourceLink>
    </p>
    <h3 id="vrstvy">Od hustoty vrstvy k výšce hladiny</h3>
    <p>
      Plovák neurčuje změnu objemu celého oceánu jedním údajem. Při výstupu pořizuje profil teploty, elektrické vodivosti a tlaku.
      Z vodivosti se odvodí salinita, z tlaku poloha vrstvy a z těchto údajů její hustota.
      Převod vodivosti na slanost a úpravu pro složení vody popisuje <Link href="/metody/konduktometrie/#salinita">konduktometrie</Link>.
      V hlubší vodě nesmíme použít pouhou povrchovou hustotu, protože tlak kapalinu stlačuje.
      <SourceLink id="TEOS10_MANUAL_2010"> (IOC, SCOR a IAPSO 2010, oddíly 2 a 3.27)</SourceLink>
    </p>
    <p>
      Když se objem vrstvy zvětší při stejné ploše, vodní sloupec se zvýší.
      Pro malou změnu hustoty při stejné hmotnosti vrstvy platí přibližný vztah níže.
      H je její původní tloušťka v metrech, Δh změna tloušťky, ρ původní hustota a Δρ její změna při porovnatelném tlaku.
      Záporná změna hustoty dává kladnou změnu tloušťky.
      Předpokládáme stálou vodorovnou plochu sloupce a malou relativní změnu hustoty.
    </p>
    <Equation tex={"\\Delta h\\approx-H\\,\\frac{\\Delta\\rho}{\\rho}"} />
    <p>
      Příspěvky vrstev se sečtou. Pro globální průměr se jednotlivé oblasti zváží podle plochy.
      Chybějící profily vyžadují doplnění mezer a hluboký oceán další měření nebo odhad.
      Místní hladinu navíc ovlivňuje proudění a přesuny vody. Změnu na jednom pobřeží proto nelze vysvětlit jen ohřevem vody přímo pod ním.
      <SourceLink id="DOI_10_1007_s10712_019_09525_z"> (Gregory a kol. 2019)</SourceLink> a
      <SourceLink id="DOI_10_1017_9781009157896_011"> IPCC 2021, oddíl 9.6.1</SourceLink>
    </p>

    <h2 id="nejistoty">Co zůstává potřeba kontrolovat</h2>
    <p>
      Směr odezvy běžné mořské vody na ohřev a změnu slanosti je laboratorně doložen.
      Přesnost oceánského příspěvku omezuje kalibrace, neúplné pokrytí vrstev a složení vody.
      Nová opakovaná měření hustoty mimo ověřené nejistoty by vyžadovala úpravu převodní rovnice.
      Přetrvávající rozdíl mezi objemem z profilů a hladinou po odečtení hmotnostního příspěvku by zase ukazoval na problém některého kroku oceánské bilance.
    </p>
    <details className="article-details"><summary>Podrobnosti k nezávislosti, tlaku a nejistotám</summary>
      <p>
        Shoda s daty použitými k sestavení rovnice není totéž jako úspěch na nových vzorcích.
        Ani nový vzorek však neodstraní společnou chybu standardu, jímž se oba přístroje kalibrovaly.
        Kontrola z roku 2018 proto zahrnovala mimo jiné složení referenční vody a změny způsobené skladováním.
        Zjištěný rozdíl absolutní hustoty nelze bez dalšího převést na stejné relativní pochybení tepelné roztažnosti.
        <SourceLink id="DOI_10_5194_os_14_15_2018"> (Schmidt a kol. 2018)</SourceLink>
      </p>
      <p>
        Povrchový příklad v grafu nezahrnuje tlak hlubokého oceánu.
        TEOS-10 také rozlišuje teplotu měřenou přímo ve vrstvě od teplotních veličin upravených pro tlakové účinky.
        Použití nesprávné teplotní nebo salinitní stupnice může zavést chybu i při správně opsané rovnici.
        <SourceLink id="TEOS10_MANUAL_2010"> (IOC, SCOR a IAPSO 2010, oddíly 2.4–2.5 a 2.18)</SourceLink>
      </p>
      <p>
        Srovnání z let 2004–2007 nezachycuje všechen oceán pod 900 metry.
        Jeho 95% intervaly trendů autoři odvodili z proložení řad s předpokladem nezávislosti jednotlivých vzorků v čase.
        Nejde o úplnou záruku proti každé společné systematické chybě. Krátký interval navíc výrazně ovlivňuje meziroční proměnlivost.
        Součet 1,5 mm za rok přebíráme z původní studie, nikoli ze součtu již zaokrouhlených 0,8 a 0,8.
        <SourceLink id="DOI_10_1029_2008GL036010"> (Leuliette a Miller 2009)</SourceLink>
      </p>
      <p>
        Dlouhodobé změně globálního objemu dominuje tepelný příspěvek, zatímco slanost významně ovlivňuje regionální rozdíly.
        Samotný tento mechanismus ale neurčuje, proč se oceán otepluje ani kolik vody přiteklo z pevniny.
        Tyto otázky vyžadují další bilance a důkazy.
        <SourceLink id="DOI_10_1017_9781009157896_011"> (IPCC 2021, oddíl 9.6.1)</SourceLink>
      </p>
    </details>

    <div className="article-observation-summary" id="zaver"><p className="eyebrow">Shrnutí mechanismu</p><p>
      Teplota a rozpuštěné soli mění hustotu mořské vody. Při stejné hmotnosti, slanosti a tlaku zabere ohřátá běžná mořská voda více místa,
      zatímco slanější vzorek při stejné teplotě a tlaku zabere místa méně.
      Změny se měří v laboratoři a v oceánu se počítají z teplotních a slanostních profilů po vrstvách.
      Nezávislé měření hladiny a gravitace kontroluje, zda odhad objemu odpovídá skutečné změně.
      Velikost účinku závisí na výchozích podmínkách a přesnosti dat, takže k výpočtu nestačí samotná povrchová teplota.
    </p></div>

    <h2 id="prameny">Prameny a veřejné podklady</h2>
    <div className="article-sources">
      <section><h3>Laboratorní měření a vlastnosti vody</h3><ul>
        <li><SourceLink id="DOI_10_1016_0198_0149_81_90122_9">Millero a Poisson 1981</SourceLink> – rovnice použitá v početním příkladu, veřejný reprint UNESCO na stranách 15–19 PDF. Koeficienty na s. 628–629 původního článku.</li>
        <li><SourceLink id="DOI_10_5194_os_5_91_2009">Millero a Huang 2009</SourceLink> – veřejný plný text a laboratorní data v přílohách A a B. Porovnání nových vzorků se starší rovnicí na obr. 2.</li>
        <li><SourceLink id="DOI_10_5194_os_6_379_2010">Millero a Huang 2010</SourceLink> – veřejná oprava koeficientů v tabulce 2 studie z roku 2009.</li>
        <li><SourceLink id="DOI_10_5194_os_14_15_2018">Schmidt a kol. 2018</SourceLink> – veřejný plný text a datový doplněk. Přístroje a nejistoty v oddílu 2, porovnání s TEOS-10 v oddílu 5.</li>
        <li><SourceLink id="TEOS10_MANUAL_2010">IOC, SCOR a IAPSO 2010: TEOS-10</SourceLink> – oficiální manuál, vztahy pro hustotu, teplotní roztažnost a slanostní smrštění.</li>
        <li><SourceLink id="DOI_10_1038_ncomms9998">Nilsson a Pettersson 2015</SourceLink> – otevřený odborný přehled vztahu molekulárního uspořádání a zvláštních vlastností vody.</li>
      </ul></section>
      <section><h3>Oceánská kontrola a rozsah závěrů</h3><ul>
        <li><SourceLink id="DOI_10_1029_2008GL036010">Leuliette a Miller 2009</SourceLink> – veřejný plný text. Výběr a opravy dat v oddílu 2, trendy za leden 2004 až prosinec 2007 v tabulce 1.</li>
        <li><SourceLink id="DOI_10_1038_s41586_020_2591_3">Frederikse a kol. 2020</SourceLink> – veřejný plný text, dlouhodobější porovnání v úvodu tohoto článku, samostatné období 1993–2018.</li>
        <li><SourceLink id="DOI_10_1007_s10712_019_09525_z">Gregory a kol. 2019</SourceLink> – vymezení objemových a hmotnostních příspěvků i místní hladiny.</li>
        <li><SourceLink id="DOI_10_1017_9781009157896_011">IPCC 2021, kapitola 9</SourceLink> – odborná syntéza oceánských příspěvků a jejich nejistot, oddíl 9.6.1.</li>
      </ul></section>
      <section><h3>Čísla, výpočty a grafika</h3><ul>
        <li><a href={`${media}/hustota-vypocet.csv`}>Číselné body grafu hustoty</a>, <a href={`${media}/priklady.json`}>objemové příklady</a>, <a href={`${media}/vypocty.mjs`}>výpočet</a> a <a href={`${media}/grafika.mjs`}>kód obrázků</a>.</li>
        <li><a href={`${media}/leuliette-2009-tabulka-1.csv`}>Přepis trendů z tabulky 1 oceánské studie</a>. Jde o publikované výsledky, ne nový výpočet z původních signálů přístrojů.</li>
        <li><a href={`${media}/podklady.txt`}>Původ podkladů, ověření a licence</a>. Vlastní grafika, výpočet a zpracování CC BY 4.0.</li>
      </ul></section>
    </div>
  </div></article>;
}
