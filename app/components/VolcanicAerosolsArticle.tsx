import Image from "next/image";
import Link from "next/link";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./VolcanicAerosolsArticle.module.css";

const media = "/media/sopecne-aerosoly";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "popel", name: "Déletrvající ochlazení způsobuje především sopečný popel",
    prediction: "Pevné úlomky hornin musí zůstat hlavní příčinou zastínění i v měsících, kdy ochlazení pokračuje. S úbytkem popela má slábnout také účinek.",
    test: "Pod čerstvým oblakem porovnáme naměřenou teplotu s předpovědí počasí. Po Pinatubu sledujeme trvání částicové vrstvy a rozborem vzorků a spekter určujeme její složení.",
    observation: "Popel po Mount St. Helens v roce 1980 výrazně změnil místní teplotu na krátkou dobu. Dlouhodobou vrstvu po Pinatubu však tvořily hlavně kapky kyseliny sírové a vody, vedle přetrvávajícího jemného popela.",
    verdict: "Sám nestačí",
    explanation: "Krátký místní účinek je skutečný. Složení a trvání pozdější vrstvy neodpovídají představě, že dlouhodobější ochlazení způsobuje převážně popel.", state: "insufficient",
  },
  {
    id: "sirne-kapky", name: "Povrch ochlazují sirné kapky vzniklé ve stratosféře",
    prediction: "Po přeměně sirných plynů má přetrvávat vrstva kapalných částic. Její rozptyl světla zvýší odraz do vesmíru, zatímco pohlcování záření ohřeje samotnou vrstvu. Povrch a spodní stratosféra mají reagovat opačně.",
    test: "Určíme složení částic, změříme změnu odcházejícího záření a porovnáme teploty s výpočty s erupcí a bez ní. Zvláštní zkouškou je předpověď vydaná před hlavním ochlazením.",
    observation: "Po Pinatubu měření potvrdila sirné kapky i ochlazující změnu energetické bilance. Povrch a troposféra se ochladily, spodní stratosféra se přechodně oteplila. Výpočty zahrnující aerosoly tuto odezvu lépe vystihují.",
    verdict: "Obstála, dnes přijímaná",
    explanation: "Shodují se důkazy o částicích, přenosu energie i následné teplotní odezvě. Jde o hlavní vysvětlení globálního ochlazení po erupcích typu Pinatuba.", state: "supported",
  },
];

function Graphic({ name, alt, children }: { name: string; alt: string; children: React.ReactNode }) {
  return <figure id={name + "-schema"} className={`article-figure ${styles.explanatoryFigure}`}>
    <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Vysvětlující grafika, na úzké obrazovce posuvná do stran">
      <a href={`${media}/${name}.png`} aria-label="Otevřít grafiku v plné velikosti">
        <Image className="article-figure__media" src={`${media}/${name}.png`} width={name === "popel" ? 1036 : 1086} height={name === "popel" ? 1518 : 1448} alt={alt} unoptimized />
      </a>
    </div>
    <figcaption>{children} Vlastní vysvětlující ilustrace vytvořená pomocí AI, CC BY 4.0. Výšky, částice a přístroje jsou schematické. <a href={media + "/podklady.txt"}>Prameny a význam čísel</a>.</figcaption>
  </figure>;
}

export function VolcanicAerosolsArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Jak si vysvětlujeme ochlazení po velké erupci</h2>
    <p className="article-prose__intro">Sopečný aerosol tvoří drobné pevné částice nebo kapalné kapky rozptýlené ve vzduchu. Po erupci filipínského Pinatuba 15. června 1991 následoval výrazný teplotní výkyv. Globální povrchová teplota byla podle GISTEMP v roce 1992 o 0,18 °C nižší než v roce 1991. Spodní stratosféra, vrstva nad oblastí běžného počasí, se naproti tomu nejprve oteplila. Průběh a data ukazují pozorování <Link href="/pozorovani/gmst/#pinatubo">teploty povrchu</Link> a <Link href="/pozorovani/stratosfericke-ochlazovani/#pinatubo">teploty stratosféry</Link>. Samotný rozdíl dvou roků ještě neurčuje velikost sopečného účinku, protože teplota současně reagovala i na jiné vlivy. <SourceLink id="WEB_NASA_Data_GISS_GISS_Surface_Temperature_Analysis_GIST_4f73fdd3">(NASA GISTEMP v4)</SourceLink>{" "}<SourceLink id="DOI_10_1073_pnas_2525500123">(Li a kol. 2026)</SourceLink></p>
    <p>Co dokáže změnit teplotu daleko od sopky a udržet účinek i po skončení erupce? Porovnáme zastínění pevným popelem s působením kapek, které se teprve vytvoří ze sopečných plynů. Hledáme vysvětlení déletrvajícího ochlazení po velké erupci bohaté na síru, jakou bylo Pinatubo.</p>

    <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="volcanic-hypotheses-caption"
      context={<p>Popel znamená pevné úlomky hornin. Sirnými kapkami zde rozumíme kapalný roztok kyseliny sírové ve vodě. Obě složky mohou po erupci existovat společně. Porovnáváme, která z nich vysvětluje hlavní déletrvající účinek.</p>}
      caption={<>Rozhoduje složení a vývoj částic spolu se změnou záření a teploty. Samotné ochlazení obě možnosti nerozliší. Konkrétní měření a jejich podmínky rozebírají příběhy níže.</>} />

    <h2 id="pribehy">Jak se hledal původ sopečného ochlazení</h2>
    <HypothesisStory id="popel" number={1} title="Déletrvající ochlazení způsobuje především sopečný popel">
      <p>Nápad spojit zakalenou oblohu s chladem vznikl dávno před družicemi. Benjamin Franklin v roce 1784 uvažoval o souvislosti neobvyklého zákalu a chladného počasí s islandským vulkanismem. William Humphreys v roce 1913 rozvíjel vysvětlení přes vliv částic ve stratosféře na záření. Tehdejší označení „sopečný prach“ však nebylo vždy dnešním přesným označením minerálního popela. Historie začíná obecnější otázkou, jak sopečný zákal mění přenos sluneční energie. <SourceLink id="DOI_10_1029_1998RG000054">(Robock 2000, úvod)</SourceLink></p>
      <p>Popel je pro takové vysvětlení přirozeným kandidátem. Při explozi vznikají úlomky hornin a vulkanického skla, které vítr roznáší do okolí. Část dopadajícího světla rozptýlí do jiných směrů, část pohltí. K povrchu se pak dostane méně sluneční energie. Kdyby měl popel způsobovat i dlouhodobější ochlazení, musel by zůstat hlavní složkou, která světlo zeslabuje, také během následujících měsíců. <SourceLink id="DOI_10_1029_1998RG000054">(Robock 2000, oddíly 2 a 3)</SourceLink></p>
      <Graphic name="popel" alt="Popel rozptyluje a pohlcuje světlo, větší úlomky postupně vypadávají. Test teplot pod oblakem Mount St. Helens ukázal místní denní ochlazení i noční oteplení. Rozbory dlouhodobé vrstvy po Pinatubu však určily hlavně kapky kyseliny sírové a vody.">Číselný rozdíl až 8 °C se vztahuje k místnímu krátkému účinku oblaku Mount St. Helens, nikoli k průměru Země. Schéma částic není mikroskopický snímek. <SourceLink id="DOI_10_1126_science_216_4546_628">(Robock a Mass 1982)</SourceLink>{" "}<SourceLink id="BOOK_Self_1996_Pinatubo">(Self a kol. 1996)</SourceLink></Graphic>
      <h4 id="test-popel-teplota" className={styles.testHeading}>První test: co udělá čerstvý oblak s teplotou?</h4>
      <p>Erupce Mount St. Helens z 18. května 1980 umožnila sledovat oblak při přechodu nad meteorologickými stanicemi. Alan Robock a Clifford Mass porovnali naměřené teploty s předchozím dnem a s předpověďmi počasí, které účinek erupce nezahrnovaly. Během dne odhadli místní potlačení teploty až o 8 °C. Po příchodu hustého oblaku se povrch skutečně méně ohříval. <SourceLink id="DOI_10_1126_science_216_4546_628">(Robock a Mass 1982)</SourceLink></p>
      <p>V noci se ale znaménko obrátilo. Nízko ležící oblak pohlcoval a znovu vyzařoval tepelné záření, také směrem k povrchu. Teploty byly místy až o 8 °C vyšší, než by odpovídalo vývoji bez oblaku. Oba účinky rychle slábly další den, kdy se oblak rozptyloval a přesouval na východ. Studie tak potvrdila silné místní působení popela, zároveň však ukázala, že denní zastínění samo neříká ani délku, ani celkové znaménko teplotního účinku. <SourceLink id="DOI_10_1126_science_216_4546_628">(Robock a Mass 1982)</SourceLink></p>
      <h4 id="test-popel-slozeni" className={styles.testHeading}>Druhý test: z čeho je vrstva, která přetrvává?</h4>
      <p>U Pinatuba šlo sledovat různé složky oblaku odděleně. Meteorologická družice ještě do 17. června 1991 jasně zachycovala hlavní oblak popela. Později se tato stopa ztrácela, zatímco jiná měření dál sledovala oxid siřičitý a vznikající aerosolovou vrstvu. Její zeslabování světla přetrvávalo mnohem déle. Proto bylo nutné určit, co tuto pozdější vrstvu tvoří. <SourceLink id="BOOK_Self_1996_Pinatubo">(Self a kol. 1996, rozptyl oblaku popela a plynu)</SourceLink></p>
      <p>Rozbor infračerveného záření procházejícího vrstvou ukazoval roztok kyseliny sírové a vody. Letecké odběry přitom nacházely i úlomky minerálů obalené kyselinou, těsně nad spodním okrajem stratosféry ještě v březnu 1992. Popel tedy nezmizel všechen během několika dnů. Rozhodující zjištění je jiné: hlavní dlouhodobou aerosolovou vrstvou nebyl samotný oblak rozdrcené horniny, ale kapalné částice vytvořené ze sirných plynů. <SourceLink id="BOOK_Self_1996_Pinatubo">(Self a kol. 1996, vznik a šíření aerosolů)</SourceLink></p>
      <p>Popel proto hodnotíme jako nedostatečné vysvětlení déletrvajícího ochlazení. Jeho vliv na teplotu byl přímo pozorován a jemné částice mohou ve výšce přetrvat měsíce. Dlouhodobý zákal po Pinatubu však vyžaduje vysvětlení vzniku a působení sirných kapek. To musí obstát také v měření energie a teploty, nikoli pouze ve zjištění jejich přítomnosti. <SourceLink id="DOI_10_1029_1998RG000054">(Robock 2000)</SourceLink>{" "}<SourceLink id="BOOK_Self_1996_Pinatubo">(Self a kol. 1996)</SourceLink></p>
    </HypothesisStory>

    <HypothesisStory id="sirne-kapky" number={2} title="Povrch ochlazují sirné kapky vzniklé ve stratosféře">
      <p>Vysvětlení pomocí sirných kapek se rozvíjelo s měřením složení a velikosti stratosférických částic. Velkou příležitost poskytly erupce Agungu v roce 1963 a El Chichónu v roce 1982. Pozorování po nich umožnila spojovat chemické složení částic s výpočtem jejich radiačního účinku. Když vybuchlo Pinatubo, nešlo už o nový nápad vymyšlený podle následného poklesu teploty. Existovala měření starších erupcí i fyzikální modely, ze kterých šla odvodit nová předpověď. <SourceLink id="DOI_10_1029_91GL02788">(Hansen a kol. 1992, úvod)</SourceLink>{" "}<SourceLink id="DOI_10_1029_1998RG000054">(Robock 2000)</SourceLink></p>
      <p>Výchozí látkou je především oxid siřičitý, plyn se značkou SO₂. Ve stratosféře se během několika týdnů účastní reakcí, při kterých vzniká kyselina sírová. Ta společně s vodou vytváří nové kapky a zvětšuje částice, které už ve vzduchu jsou. Drobná kapka padá velmi pomalu. Nad oblastí běžných dešťových oblaků navíc chybí rychlé vymývání částic srážkami. Vzniklá vrstva proto může ovlivňovat záření ještě dlouho po erupci. <SourceLink id="DOI_10_1029_1998RG000054">(Robock 2000, oddíl 2)</SourceLink></p>
      <p>Kapky přitom nepůsobí na všechno záření stejně. Část slunečního světla rozptýlí zpět do vesmíru, a tím ubírají energii povrchu. Zároveň pohlcují část blízkého infračerveného záření ze Slunce a tepelného záření přicházejícího zdola. Tato energie ohřívá aerosolovou vrstvu. Společnou předpovědí je proto přetrvávající kapalný aerosol, větší odraz světla a opačná odezva teploty pod vrstvou a v ní. <SourceLink id="DOI_10_1029_1998RG000054">(Robock 2000, oddíl 3)</SourceLink></p>
      <Graphic name="sirne-kapky" alt="SO₂ se chemicky mění na kyselinu sírovou, která s vodou vytváří kapky. Ty zvyšují odraz světla do vesmíru a ochlazují povrch. Pohlcování části záření ohřívá spodní stratosféru. Tři testy sledují složení částic, změnu energetické bilance a teplotní odezvu.">Chemická šipka zkracuje řadu reakcí, není úplnou rovnicí. Uvedených 4,3 W/m² je pokles čistého příjmu energie v srpnu 1991 vůči průměru srpnů 1985–1989, vztažený k pásu 40° jižní až 40° severní šířky. <SourceLink id="DOI_10_1126_science_259_5100_1411">(Minnis a kol. 1993, s. 1412)</SourceLink>{" "}<SourceLink id="BOOK_Self_1996_Pinatubo">(Self a kol. 1996)</SourceLink></Graphic>
      <h4 id="test-kapky" className={styles.testHeading}>První test: složení částic a jejich působení na světlo</h4>
      <p>Chemické určení kapek lze spojit s laboratorním měřením. Kent Palmer a Dudley Williams v roce 1975 proměřovali průchod a odraz světla v roztocích kyseliny sírové o různých koncentracích. Zahrnuli viditelné i infračervené záření. Získali tak údaje o tom, jak se v roztoku světlo láme a jak silně se pohlcuje. Jejich práce souvisela také s oblaky Venuše, ale změřené vlastnosti látky slouží i při výpočtu účinku kapek v zemské atmosféře. <SourceLink id="DOI_10_1364_AO_14_000208">(Palmer a Williams 1975)</SourceLink></p>
      <p>Po Pinatubu se dala tato látková stopa hledat přímo ve stratosféře. Infračervená měření odpovídala kapkám obsahujícím podle použitého rozboru 59–77 % kyseliny sírové hmotnostně, zbytek tvořila voda. Letecké a balónové přístroje současně zjišťovaly velikost a počet částic. Ze složení a velikosti lze spočítat jejich optické působení a porovnat je s pozorovaným zeslabením světla. První test tak spojuje vlastnost látky změřenou v laboratoři se skutečnou částicovou vrstvou. <SourceLink id="BOOK_Self_1996_Pinatubo">(Self a kol. 1996, vznik aerosolů)</SourceLink></p>
      <h4 id="test-zareni" className={styles.testHeading}>Druhý test: odchází ze Země více energie?</h4>
      <p>Rozptyl na kapkách má zvýšit množství sluneční energie odcházející do vesmíru. Aby převážilo ochlazování, musí tento přírůstek překonat případný úbytek odcházejícího tepelného záření. Patrick Minnis a kolegové proto využili družicový experiment ERBE, který obě složky rozlišoval. Jednotlivé měsíce po erupci porovnávali se stejnými měsíci let 1985–1989. Tak omezili záměnu sopečné změny s pravidelným střídáním ročních období. Princip měření vysvětluje <Link href="/metody/mereni-radiacnich-toku/">metoda měření radiačních toků</Link>. <SourceLink id="DOI_10_1126_science_259_5100_1411">(Minnis a kol. 1993)</SourceLink></p>
      <p>V srpnu 1991 vyšel v pásu mezi 40° jižní a 40° severní šířky čistý ochlazující účinek 4,3 W/m². To znamená pokles čistého příjmu energie o 4,3 joulu za sekundu na každý metr čtvereční této oblasti. Změna odrazu slunečního záření převážila souběžnou změnu tepelného vyzařování. Výsledek překročil obvyklé kolísání v porovnávacím období. Družice tím zachytila očekávaný mezičlánek mezi aerosolem a ochlazením. Uvedené číslo je oblastní měsíční výsledek, nikoli hodnota pro celou Zemi a celé trvání erupčního účinku. <SourceLink id="DOI_10_1126_science_259_5100_1411">(Minnis a kol. 1993, obrázek 2 a s. 1412)</SourceLink></p>
      <h4 id="test-teplota" className={styles.testHeading}>Třetí test: podařilo se předpovědět následnou teplotu?</h4>
      <p>James Hansen a kolegové zveřejnili v lednu 1992 výpočet, který využíval dosavadní odhady množství a vlastností pinatubského aerosolu. Model z nich počítal změnu záření a následnou teplotní odezvu. Předpovídal výrazné, ale přechodné ochlazení s maximem na konci roku 1992. Současný teplý stav tropického Pacifiku, El Niño, mohl nejnižší teplotu posunout do roku 1993. Hlavní pokles tedy zkoušeli předem, ještě před jeho očekávaným vrcholem. <SourceLink id="DOI_10_1029_91GL02788">(Hansen a kol. 1992)</SourceLink></p>
      <p>Pozorované teploty v letech 1992–1993 skutečně poklesly. Silnější zkouška ale vyžaduje oddělit sopečnou odezvu od oceánského kolísání a ověřit i její rozložení ve výšce. Yaowei Li a kolegové v roce 2026 analyzovali družicové teploty z let 1986–2024. Po oddělení dlouhodobého vývoje, slunečního cyklu a hlavních přirozených výkyvů našli po Pinatubu výrazné oteplení stratosféry a ochlazení troposféry. Porovnávali je s velikostí běžného kolísání odhadnutou z měření i z modelů. Obě teplotní stopy byly rozlišitelné od tohoto kolísání. <SourceLink id="DOI_10_1073_pnas_2525500123">(Li a kol. 2026, obrázky 1–3)</SourceLink></p>
      <p>Jiný druh kontroly provedl Roberto Bilbao s kolegy v roce 2024. V šesti předpovědních systémech zopakovali výpočty začínající před erupcemi Agungu, El Chichónu a Pinatuba. V jedné sadě zahrnuli známý sopečný aerosol, v druhé ponechali pouze jeho běžné pozadí. Se zahrnutím erupcí dostali celkově lepší shodu povrchových teplot s měřením. U Pinatuba se zlepšilo zejména zachycení vývoje severního Atlantiku. Jde o zpětný test se známými aerosoly, nikoli o předpověď samotné erupce. <SourceLink id="DOI_10_5194_esd_15_501_2024">(Bilbao a kol. 2024, oddíly 2 a 3.3)</SourceLink></p>
      <p>Přijaté vysvětlení tedy stojí na několika spojených důkazech. Složení částic odpovídá sirným kapkám, změna odcházející energie má ochlazující směr a teplotní odezva odpovídá fyzice přenosu záření. Modelové porovnání navíc ukazuje, že zahrnutí aerosolu pomáhá vysvětlit měření i v různých výpočetních systémech. Odborná syntéza IPCC proto hodnotí stratosférické sopečné aerosoly jako ochlazující působení na klimatický systém. <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíl 7.3.4.6)</SourceLink>{" "}<SourceLink id="DOI_10_5194_esd_15_501_2024">(Bilbao a kol. 2024)</SourceLink></p>
    </HypothesisStory>

    <h2 id="jak-mechanismus-funguje">Proč účinek přetrvá a potom odezní</h2>
    <p>Popel prokazatelně mění místní teplotu, ale sám nevysvětluje složení a dlouhé trvání vrstvy po Pinatubu. Vysvětlení pomocí sirných kapek obstálo v rozboru částic, radiačním měření i teplotních testech. Hlavním mechanismem je vznik dlouho přetrvávajícího aerosolu, který zvýší odraz slunečního záření. Nyní můžeme spojit jeho jednotlivé kroky a vysvětlit, proč ochlazení přichází se zpožděním a proč netrvá natrvalo.</p>
    <h3 id="proc-stratosfera">Proč záleží na výšce a na síře</h3>
    <p>Velikost výbuchu sama neurčuje klimatický účinek. Podstatné je, kolik sirných plynů se dostane do stratosféry a jaké částice z nich vzniknou. V troposféře kapky a prach rychleji odstraňují srážky. Ve stratosféře mohou proudění a pomalý sestup částice roznášet a postupně odstraňovat po mnohem delší dobu. U tropické erupce se tak může vytvořit rozsáhlá vrstva zasahující obě polokoule. <SourceLink id="DOI_10_1029_1998RG000054">(Robock 2000, oddíl 2)</SourceLink></p>
    <p>Účinek závisí také na velikosti kapek. Velké kapky rychleji klesají a stejné množství látky rozdělené do různě velkých částic nepůsobí na světlo stejně. Proto nelze automaticky zdvojnásobit předpokládané ochlazení, když erupce vypustí dvojnásobek síry. Výpočet musí sledovat vznik, růst, spojování a zánik kapek. Právě tyto procesy spojují chemii erupce s množstvím světla, které se vrátí do vesmíru. <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíl 7.3.4.6)</SourceLink></p>
    <h3 id="zpozdeni">Proč teplota následuje až po změně záření</h3>
    <p>Jakmile více sluneční energie odchází zpět do vesmíru, povrch a oceán jí méně přijímají. Už uložené teplo však nezmizí okamžitě. Oceán ho průběžně vyměňuje s atmosférou a s hlubšími vrstvami, takže teplota reaguje postupně. V porovnání šesti modelových systémů dosahovalo ochlazení povrchu maxima až ve druhém roce po erupci. Takové zpoždění je očekávanou součástí mechanismu. <SourceLink id="DOI_10_5194_esd_15_501_2024">(Bilbao a kol. 2024, oddíl 3.1)</SourceLink></p>
    <p>Odezvu dále zesilují změny v samotné atmosféře. Při ochlazování v ní zpravidla ubývá vodní páry, a tím slábne její skleníkové působení. Sodenův tým v roce 2002 ověřoval tento krok pomocí pozorovaného ochlazení a úbytku vlhkosti po Pinatubu. Model s proměnlivou vodní párou dokázal změnu vystihnout lépe než varianta, ve které byl její radiační účinek držený beze změny. Pokles vlhkosti je zde následkem počátečního ochlazení, který je dále prohlubuje. <SourceLink id="DOI_10_1126_science_296_5568_727">(Soden a kol. 2002)</SourceLink></p>
    <h3 id="odezneni">Proč se z jedné erupce nestane trvalé ochlazování</h3>
    <p>Kapky se postupně spojují, klesají a proudění je přenáší do oblastí, odkud mohou stratosféru opustit. S řídnoucí vrstvou ubývá dodatečně odraženého světla. Povrchová teplota se proto vrací k vývoji, který určují ostatní působící vlivy. Oceán však může stopu změněného příjmu energie uchovat déle než atmosférická částicová vrstva. Erupce tak vytváří dočasnou odchylku s různě dlouhým dozníváním v jednotlivých částech systému. <SourceLink id="DOI_10_1029_1998RG000054">(Robock 2000)</SourceLink>{" "}<SourceLink id="DOI_10_5194_esd_15_501_2024">(Bilbao a kol. 2024)</SourceLink></p>

    <p>Hlavní mechanismus je dobře podložený. Přesná velikost a místní podoba odezvy závisejí na konkrétní erupci i na tehdejším stavu oceánu a atmosféry.</p>
    <details className="method-details">
      <summary>Meze vysvětlení a co ještě ověřujeme</summary>
      <p><strong>Rozdíl roků není čistý sopečný účinek.</strong> Úvodních 0,18 °C je rozdíl dvou globálních ročních průměrů. Odhad toho, o kolik byla Země chladnější oproti vývoji bez erupce, potřebuje navíc oddělit oceánské kolísání a další vlivy. Li a kolegové ukazují, že bez tohoto oddělení může být část sopečné teplotní stopy překrytá. <SourceLink id="DOI_10_1073_pnas_2525500123">(Li a kol. 2026)</SourceLink></p>
      <p><strong>Globální ochlazení neznamená chlad všude.</strong> Změny proudění mohou některé oblasti či roční doby oteplit. Novější porovnání modelů nachází výraznější shodu v radiačním působení než v podrobné dynamické odezvě. Rozdíly v regionálním počasí proto posuzujeme zvlášť. <SourceLink id="DOI_10_5194_esd_15_501_2024">(Bilbao a kol. 2024)</SourceLink></p>
      <p><strong>Ne každá erupce je zmenšené Pinatubo.</strong> Záleží na složení plynů, výšce vstřiku a zeměpisné šířce. Podmořská erupce Hunga Tonga v roce 2022 přidala do stratosféry mimořádně mnoho vody. Li a kolegové u ní zjistili ochlazující stratosférickou stopu a v prvních dvou letech nerozlišili spolehlivý troposférický signál. Výsledek Pinatuba tedy nelze bez dalšího přenést na každou sopku. <SourceLink id="DOI_10_1073_pnas_2525500123">(Li a kol. 2026)</SourceLink></p>
      <p><strong>Jak by se vysvětlení dál zkoušelo?</strong> Při další dobře pozorované erupci lze z naměřených plynů a částic předpovědět změnu záření a následnou teplotu. Nesoulad by pomohl určit, zda je nutné opravit popis růstu částic, přenosu záření, nebo odezvy oceánu a proudění. Důležitý by byl také opakovaný nesoulad mezi nezávislými měřeními.</p>
    </details>

    <h2 id="shrnuti">Shrnutí mechanismu</h2>
    <div className="method-conclusion">
      <p>Velká erupce bohatá na síru může dopravit oxid siřičitý do stratosféry. Z něj vznikají kapky kyseliny sírové a vody, které vydrží ve vzduchu podstatně déle než hlavní oblak popela. Zvýší odraz slunečního záření do vesmíru, takže povrch a oceán přijímají méně energie a postupně se ochlazují. Samotná aerosolová vrstva se přitom může pohlcováním záření oteplovat.</p>
      <p>Toto vysvětlení spojuje složení částic, přímé měření energetické změny a ověřenou teplotní odezvu. Popel má silný krátkodobý místní účinek, ale hlavní déletrvající ochlazení po Pinatubu vysvětlují sirné kapky. S jejich úbytkem působení erupce slábne.</p>
    </div>
    <aside className="article-related-mechanism" aria-label="Navazující pozorování a mechanismy"><p>Průběh změny najdete v <Link href="/pozorovani/gmst/#pinatubo">teplotě povrchu</Link> a <Link href="/pozorovani/stratosfericke-ochlazovani/#pinatubo">teplotě stratosféry</Link>. Souvislost mezi příjmem energie a dlouhodobým oteplováním rozebírá <Link href="/mechanismy/energeticka-bilance-zeme/">energetická bilance Země</Link>. Proměnlivou dodávku energie ze Slunce řeší <Link href="/mechanismy/slunecni-promenlivost/">sluneční cyklus</Link>.</p></aside>

    <h2 id="prameny">Prameny a veřejná data</h2>
    <div className="article-source-groups">
      <section><h3>Popel, kapky a fyzikální základ</h3><ul>
        <li><SourceLink id="DOI_10_1029_1998RG000054">Robock 2000</SourceLink>: historie, složení sopečného oblaku a fyzika radiačního účinku.</li>
        <li><SourceLink id="DOI_10_1126_science_216_4546_628">Robock a Mass 1982</SourceLink>: původní test teplot pod oblakem Mount St. Helens.</li>
        <li><SourceLink id="DOI_10_1364_AO_14_000208">Palmer a Williams 1975</SourceLink>: laboratorní měření optických vlastností roztoků kyseliny sírové.</li>
        <li><SourceLink id="BOOK_Self_1996_Pinatubo">Self a kol. 1996</SourceLink>: podrobná odborná kapitola o měřeních Pinatuba, včetně složení a vývoje aerosolů a odkazů na jednotlivé kampaně.</li>
      </ul></section>
      <section><h3>Testy záření a teploty</h3><ul>
        <li><SourceLink id="DOI_10_1126_science_259_5100_1411">Minnis a kol. 1993</SourceLink>: ERBE, oblastní radiační změna a porovnání s dřívějším kolísáním.</li>
        <li><SourceLink id="DOI_10_1029_91GL02788">Hansen a kol. 1992</SourceLink>: předpověď přechodného ochlazení zveřejněná před jeho hlavním vrcholem.</li>
        <li><SourceLink id="DOI_10_1126_science_296_5568_727">Soden a kol. 2002</SourceLink>: test zesílení odezvy změnou vodní páry.</li>
        <li><SourceLink id="DOI_10_5194_esd_15_501_2024">Bilbao a kol. 2024</SourceLink>: šest předpovědních systémů, tři erupce a porovnání s měřením.</li>
        <li><SourceLink id="DOI_10_1073_pnas_2525500123">Li a kol. 2026</SourceLink>: výšková teplotní stopa Pinatuba, požárů a Hunga Tonga.</li>
        <li><SourceLink id="DOI_10_1017_9781009157896_009">IPCC AR6, kapitola 7</SourceLink>: hodnocení sopečných aerosolů v oddílu 7.3.4.6.</li>
      </ul></section>
      <section><h3>Data a obrazové podklady</h3><ul>
        <li><SourceLink id="WEB_NASA_Data_GISS_GISS_Surface_Temperature_Analysis_GIST_4f73fdd3">NASA GISTEMP v4</SourceLink>: veřejná měsíční globální povrchová teplota.</li>
        <li><SourceLink id="DATA_Li_2026_VOLCANIC_TEMPERATURE">Li a kol.: data a výpočetní kód</SourceLink>: zpracované družicové teploty a modelové podklady k detekčnímu testu.</li>
        <li><Link href="/pozorovani/gmst/#pinatubo">Pozorovací graf 1988–1996</Link>, <a href="/data/pinatubo/temperatures.csv">jeho měsíční hodnoty</a>, <a href="/data/pinatubo/provenance.json">původ dat</a> a <a href="/data/pinatubo/reproduce.py">reprodukční skript</a>.</li>
        <li><a href={media + "/podklady.csv"}>Číselné podklady vysvětlujících grafik</a> a <a href={media + "/podklady.txt"}>jejich prameny a význam</a>. Jde o přepis výsledků studií, nikoli o surová měření.</li>
        <li>Vlastní grafiky <a href={media + "/popel.png"}>popela</a> a <a href={media + "/sirne-kapky.png"}>sirných kapek</a>, vytvořené pomocí AI, CC BY 4.0.</li>
      </ul></section>
    </div>
  </div></article>;
}
