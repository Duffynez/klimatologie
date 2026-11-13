import Image from "next/image";
import Link from "next/link";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./CloudFeedbackArticle.module.css";

const media = "/media/oblaka-a-jejich-klimaticke-zpetne-vazby";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "plocha-vysokych-oblaku",
    name: "Úbytek vysokých oblaků oteplování silně utlumí",
    prediction: "S oteplením oceánu se zmenší oblačné kovadliny. Dodatečný únik tepelného záření převáží nad menším odrazem slunečního světla.",
    test: "1. Zjistíme, zda úbytek souvisí s oteplením pod výstupnými proudy. 2. Odděleně vypočteme dlouhovlnný a krátkovlnný účinek změny.",
    observation: "Původní vztah z let 1998–1999 ovlivňovaly změny oblaků mimo hlavní tropické výstupy. Přepočet radiačního účinku výrazně oslabil navrženou zápornou vazbu.",
    verdict: "Silná stabilizace nebyla doložena",
    explanation: "Samotné zmenšování plochy vysokých oblaků zůstává možným tlumícím příspěvkem. Jeho velikost a souběžné změny vlastností oblaků nejsou pevně určeny.",
    state: "insufficient",
  },
  {
    id: "vyska",
    name: "Stoupající vysoké oblaky oteplování zesílí",
    prediction: "V teplejším klimatu oblaky vystoupí, ale jejich vyzařující vrstva se oteplí méně než povrch. Vyzařování proto vzroste méně než při zachování výšky oblaků.",
    test: "1. Porovnáme radiační výpočty se stoupajícími a výškově neměnnými oblaky. 2. V družicových profilech sledujeme současně výšku a teplotu.",
    observation: "Porovnání modelů oddělilo kladný účinek růstu výšky. Družicové soubory včetně CloudSatu z let 2006–2010 ukázaly při teplejších obdobích přibližně stejnou teplotu výše položených oblaků.",
    verdict: "Podpořený zesilující proces",
    explanation: "Výšková odezva má oporu v teorii, modelech i pozorováních. Sama neurčuje účinek současné změny plochy nebo hustoty oblaků.",
    state: "supported",
  },
  {
    id: "nizka-oblacnost",
    name: "Slabší odraz nízkých oblaků oteplování zesílí",
    prediction: "Při úbytku nebo ztenčení nízkých oblaků pohltí oceán více slunečního světla. Odezva se bude lišit podle teplotního vrstvení a druhu oblaků.",
    test: "1. Oddělíme vliv teploty, větru, vlhkosti a vrstvení. 2. Vztahy ze staršího záznamu použijeme na mořskou vlnu veder v roce 2015.",
    observation: "Starší družicové vztahy vystihly oslabení oblačného ochlazování severovýchodního Pacifiku v roce 2015. Odhady dlouhodobé vazby podporují zesílení, ale liší se jeho velikostí.",
    verdict: "Podpořený celkový příspěvek",
    explanation: "Výsledek neznamená úbytek všech nízkých oblaků. Vrstvy stratokumulů, malé kupovité oblaky a oblaky vyšších šířek reagují rozdílně.",
    state: "supported",
  },
];

function Graphic({ name, alt, children }: { name: string; alt: string; children: React.ReactNode }) {
  return <figure className={"article-figure " + styles.explanatoryFigure}>
    <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Vysvětlující grafika, na úzké obrazovce posuvná do stran">
      <a href={media + "/" + name + ".png"} aria-label="Otevřít grafiku v plné velikosti"><Image className="article-figure__media" src={media + "/" + name + ".png"} width={1536} height={1024} alt={alt} unoptimized /></a>
    </div>
    <figcaption>{children} Vlastní ilustrace vytvořená pomocí AI, CC BY 4.0. Výšky a šipky jsou schematické, jejich velikost nevyjadřuje naměřený účinek. <SourceLink id="MEDIA_CLOUD_FEEDBACK_2026">Podklady a zadání grafik</SourceLink>.</figcaption>
  </figure>;
}

export function CloudFeedbackArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Jak si vysvětlujeme vliv měnících se oblaků</h2>
    <p className="article-prose__intro">Oblaka odrážejí sluneční světlo a současně omezují únik tepelného záření. V globálním průměru převažuje první účinek: srovnání družicových toků pro červenec 2005 až červen 2015 dává čistý radiační účinek oblaků −17,9 wattu na metr čtvereční. Jak tento údaj vzniká a co znamená, vysvětluje pozorování <Link href="/pozorovani/oblaka-a-radiacni-bilance/#vysledky">oblaků a radiační bilance</Link>. <SourceLink id="DOC_CERES_EBAF4_2018">(CERES 2018, tabulka 6-1)</SourceLink></p>
    <p>Dnešní ochlazující účinek ještě neurčuje, jak oblaka zareagují na oteplení. Mohou vystoupit, změnit plochu nebo množství kapek a ledu. Potřebujeme zjistit, zda tyto změny původní oteplení zesílí, nebo utlumí. Takové navazující působení nazýváme oblačnou zpětnou vazbou. Následující tři příběhy zkoumají různé části této odezvy, které mohou probíhat současně. <SourceLink id="DOI_10_1002_wcc_465">(Ceppi a kol. 2017)</SourceLink></p>

    <h2 id="hypotezy">Tři oblačné odezvy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="cloud-feedback-caption"
      context={<p>Kladná vazba oteplování zesiluje, záporná je tlumí. Její velikost vyjadřujeme ve W/m² na 1 °C globálního oteplení. Jde o změnu energetického toku přepočtenou na plochu celé Země a na jeden stupeň, nikoli o dnešní radiační účinek oblaků ve W/m². <SourceLink id="DOI_10_1002_wcc_465">(Ceppi a kol. 2017, box 1)</SourceLink></p>}
      caption={<>První větev zkoumá původní návrh silné stabilizace. Druhá odděluje změnu výšky a třetí změnu odrazu nízkých oblaků. Podpora jedné větve sama nevyřazuje ostatní. Celkový účinek musíme sestavit ze všech příspěvků.</>} />

    <h2 id="pribehy">Jak se jednotlivé odezvy ověřovaly</h2>
    <HypothesisStory id="plocha-vysokych-oblaku" number={1} title="Úbytek vysokých oblaků oteplování silně utlumí">
      <p>Nad teplým tropickým oceánem vyrůstají hluboké bouřkové oblaky. Vystupující vzduch se nahoře rozlévá do stran a vytváří plochou ledovou část, které říkáme kovadlina. Richard Lindzen, Ming-Dah Chou a Arthur Hou v roce 2001 navrhli, že při oteplení se kovadliny zmenší. Větší mezery by umožnily intenzivnější únik tepelného záření. Přirovnali to k duhovce oka, která mění velikost otvoru. <SourceLink id="DOI_IRIS_LINDZEN_2001">(Lindzen a kol. 2001)</SourceLink></p>
      <p>Vycházeli z družice GMS-5 a teplot oceánu v části Pacifiku od ledna 1998 do srpna 1999. Množství vysoké oblačnosti vztáhli k ploše hlubokých výstupů. Tento poměr při zvýšení teploty pod oblačnými oblastmi o 1 °C klesal přibližně o 22 %. Autoři jej použili v jednoduchém radiačním modelu a odvodili silné tlumení oteplování. Šlo o relativní změnu poměru ploch, ne o ztrátu 22 procentních bodů celkové oblačnosti. <SourceLink id="DOI_IRIS_LINDZEN_2001">(Lindzen a kol. 2001, obrázek 5)</SourceLink></p>
      <p>Obrázek odděluje dva důsledky zmenšení kovadliny. Oranžové šipky představují tepelné záření, žluté sluneční světlo. Větší únik tepelného záření ochlazuje. Menší plocha odrážející světlo naopak dovolí Zemi více energie pohltit.</p>
      <Graphic name="iris" alt="Při zmenšení vysoké oblačné kovadliny může více tepelného záření uniknout, ale současně se méně slunečního světla odráží. Testy musí ověřit příčinu zmenšení plochy a součet obou radiačních účinků.">Zachováváme výšku a další vlastnosti, abychom ukázali samotný účinek plochy. <SourceLink id="DOI_IRIS_LINDZEN_2001">(Lindzen a kol. 2001)</SourceLink>{" "}<SourceLink id="DOI_10_5194_acp_2_31_2002">(Fu a kol. 2002)</SourceLink></Graphic>
      <h4 id="test-plochy" className={styles.testHeading}>První test: co skutečně vytvářelo vztah mezi plochou a teplotou?</h4>
      <p>Dennis Hartmann a Marc Michelsen v roce 2002 rozložili původní vztah podle místa. Ukázali, že změny oblačnosti v chladnějších subtropech dokážou výrazně změnit průměrnou teplotu počítanou jen pod oblaky. Když tam oblaky zmizí, v průměru získají větší váhu teplé tropy. Průměr tak vzroste, i když se voda pod tropickými výstupy vůbec neoteplí. Mapa změn ukázala právě význam oblastí mimo tyto výstupy. Původní korelace proto nedokázala určit, že teplejší voda zmenšuje jejich kovadliny. <SourceLink id="DOI_NO_EVIDENCE_IRIS_2002">(Hartmann a Michelsen 2002, obrázky 2–4)</SourceLink></p>
      <h4 id="test-zareni" className={styles.testHeading}>Druhý test: stačí zmenšení oblaků k silnému ochlazení?</h4>
      <p>Qiang Fu, Marcia Bakerová a Dennis Hartmann téhož roku ponechali navržené zmenšení plochy a prověřili radiační přepočet. Změnili mimo jiné odrazivost vysokých oblaků a popis vodní páry. Menší odraz světla pak vyrovnával větší část dodatečného úniku tepelného záření. Také oddělili příspěvek nízkých oblaků, který byl v původním součtu skrytý. Dostali výrazně slabší zápornou vazbu. Samotná vysoká oblačnost v jejich přepočtu přispívala jen málo. <SourceLink id="DOI_10_5194_acp_2_31_2002">(Fu a kol. 2002, tabulky 1 a 2)</SourceLink></p>
      <p>Silná globální stabilizace z původního návrhu tedy nebyla doložena. Zmenšování kovadlin se přesto dál zkoumá a může přispívat k tlumení. Hodnocení IPCC z roku 2021 mu připisuje záporné znaménko s nízkou důvěrou. Odděluje jej od lépe podloženého účinku růstu výšky, ke kterému nyní přejdeme. <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC 2021, tabulka 7.9)</SourceLink></p>
    </HypothesisStory>

    <HypothesisStory id="vyska" number={2} title="Stoupající vysoké oblaky oteplování zesílí">
      <p>Hartmann a Kristin Larsonová se v roce 2002 ptali, proč se kovadliny rozlévají právě v určité vrstvě atmosféry. V jejich vysvětlení rozhoduje ochlazování okolního vzduchu zářením. Mimo oblačné výstupy vzduch pomalu sestupuje, stlačuje se a tím se ohřívá. Aby mohl tento sestup pokračovat, musí vznikající teplo odevzdávat zářením. V chladných horních vrstvách je však vodní páry tak málo, že její vyzařování prudce zeslábne. Slábne i sestup okolního vzduchu a vzduch z oblačných výstupů se zde rozlévá do stran. <SourceLink id="DOI_10_1029_2002GL015835">(Hartmann a Larsonová 2002, obrázek 1)</SourceLink></p>
      <p>Hranice účinného ochlazování závisí silně na teplotě, protože ta určuje množství páry při nasycení. Když se troposféra, nejnižší část atmosféry, oteplí, stejnou nízkou teplotu najdeme výše. Oblaky proto mohou vystoupit a přitom si zachovat přibližně stejnou teplotu vyzařující vrstvy. Tento návrh dostal název hypotéza stálé teploty kovadlin. „Stálá“ zde znamená přibližně zachovanou teplotu, ne přesné pravidlo pro každý jednotlivý oblak. <SourceLink id="DOI_10_1029_2002GL015835">(Hartmann a Larsonová 2002)</SourceLink></p>
      <p>Pro radiační účinek je rozhodující prostřední a pravý panel obrázku. Oteplený oblak ve stejné výšce by vyzařoval více. Pokud však vystoupí do chladnější vrstvy, tento nárůst bude menší. Oranžové šipky začínají na vyzařující vrstvě oblaku a míří do vesmíru.</p>
      <Graphic name="vyska" alt="Tři stavy se stejnou oblačnou plochou: původní stav, oteplení při stejné výšce a oteplení se vzestupem oblaku. Vystoupivší oblak zůstává chladnější než při stejné výšce, proto jeho vyzařování vzroste méně.">Černá svislá značka označuje posun výšky, nikoli tok energie. Stejnou plochou a hustotou oddělujeme výškový příspěvek. <SourceLink id="DOI_10_1029_2010JD013817">(Zelinka a Hartmann 2010)</SourceLink></Graphic>
      <h4 id="test-vysky-model" className={styles.testHeading}>První test: změnila výška skutečně únik energie?</h4>
      <p>Mark Zelinka a Hartmann v roce 2010 porovnali 15 klimatických modelů. Stoupající vysoké oblaky se v nich oteplovaly jen málo. U 12 modelů měli také potřebné údaje pro radiační přepočet. V kontrolní variantě ponechali oblaky na původních tlakových hladinách. Tlak s výškou klesá, takže tím odstranili jejich vzestup do vyšších vrstev s nižším tlakem. Tuto variantu porovnali se skutečně vypočteným posunem oblaků. Růst výšky přidával v globálním průměru přibližně +0,5 W/m² na 1 °C oteplení. Číslo vyjadřuje izolovaný výškový příspěvek v těchto modelech. <SourceLink id="DOI_10_1029_2010JD013817">(Zelinka a Hartmann 2010, oddíly 4–5)</SourceLink></p>
      <h4 id="test-vysky-druzice" className={styles.testHeading}>Druhý test: stoupají také skutečné oblaky?</h4>
      <p>V roce 2011 oba autoři porovnali více družicových souborů. Patřily mezi ně MODIS a AIRS za září 2002 až červenec 2010 i radar CloudSat za červen 2006 až červenec 2010. Radar určuje polohu oblačných vrstev z odrazu vyslaného signálu, zatímco infračervená měření vycházejí z jejich záření. Principy rozebírají <Link href="/metody/aktivni-radarove-mereni/">radarová měření</Link> a <Link href="/metody/pasivni-infracervena-radiometrie/">infračervená radiometrie</Link>. <SourceLink id="DOI_10_1029_2011JD016459">(Zelinka a Hartmann 2011, oddíl 2)</SourceLink></p>
      <p>V teplejších tropických obdobích se vysoké oblaky nacházely výše a jejich teplota se měnila podstatně méně než teplota povrchu. To odpovídalo předpovědi. Současně se však měnila jejich plocha a další vlastnosti. Celkový dlouhovlnný výsledek krátkého kolísání proto neměl stejné znaménko jako izolovaný výškový příspěvek. Test ověřil mechanismus vzestupu, nikoli hodnotu dlouhodobé globální vazby. <SourceLink id="DOI_10_1029_2011JD016459">(Zelinka a Hartmann 2011, obrázky 5–8 a tabulka 1)</SourceLink></p>
    </HypothesisStory>

    <HypothesisStory id="nizka-oblacnost" number={3} title="Slabší odraz nízkých oblaků oteplování zesílí">
      <p>Nízké mořské oblaky leží poměrně blízko teplého povrchu. Jejich vyzařující vrstva proto není tak chladná jako u vysokých kovadlin. V jejich radiačním účinku obvykle převažuje odraz slunečního světla. Ztenčení nebo úbytek rozsáhlých vrstev stratokumulů, nízkých vrstevnatých kupovitých oblaků, tak může oceánu dodat více energie. Klíčovou otázkou se stalo, co se s těmito vrstvami při oteplování stane. <SourceLink id="DOI_10_1002_wcc_465">(Ceppi a kol. 2017)</SourceLink></p>
      <p>Výzkum musel rozplést několik dějů. Oceán dodává vlhkost, promíchávání přivádí do oblaku sušší vzduch a ten odpařuje kapky. Teplejší vrstva nad oblakem naopak může promíchávání brzdit. Proto nestačí porovnat jen oblačnost s teplotou hladiny. Grafika ukazuje, kudy se do úlohy dostává radiační účinek, a zvětšený detail ukazuje samotné odpařování kapek. <SourceLink id="DOI_10_1038_s41558_021_01039_0">(Myers a kol. 2021)</SourceLink></p>
      <Graphic name="nizka" alt="Souvislá vrstva nízkých oblaků odráží více slunečního světla než vrstva tenčí nebo přerušovaná. Přimíchávání suchého vzduchu odpařuje kapky, stabilní teplotní vrstvení je může brzdit. Dva testy oddělují vlivy prostředí a ověřují vztah na roce 2015.">Žluté šipky značí sluneční záření, modré zakřivené proudnice promíchávání vzduchu. Bóje i barevná mapa dole jsou ilustrace, nikoli použité měření nebo datová mapa. <SourceLink id="DOI_10_1038_s41558_021_01039_0">(Myers a kol. 2021)</SourceLink></Graphic>
      <h4 id="test-nizke-vztahy" className={styles.testHeading}>První test: jaký vliv má oteplení při stejných ostatních podmínkách?</h4>
      <p>Timothy Myers a kolegové v roce 2021 spojili družicové údaje s údaji o prostředí. Statisticky oddělili vztahy oblačného záření k teplotě hladiny, větru, vlhkosti, sestupu vzduchu a teplotnímu vrstvení. Pro každou oceánskou oblast tak odhadli, co přinese změna jedné podmínky při zachování ostatních. Teplejší hladina zpravidla oslabovala odraz vrstev stratokumulů. Silnější stabilní vrstvení působilo opačně. <SourceLink id="DOI_10_1038_s41558_021_01039_0">(Myers a kol. 2021, obrázek 2)</SourceLink></p>
      <h4 id="test-nizke-2015" className={styles.testHeading}>Druhý test: fungoval vztah i v jiném období?</h4>
      <p>Autoři odvodili vztahy ze starších družicových záznamů pro roky 1983–2002. Potom dosadili podmínky při mořské vlně veder v severovýchodním Pacifiku v roce 2015. Výpočet vystihl polohu i velikost výrazného oslabení oblačného ochlazování, které zaznamenal novější MODIS. Rok 2015 přitom nebyl součástí původních dat pro odvození vztahu. Šlo tak o kontrolu na jiném období a jiném pozorovacím systému. <SourceLink id="DOI_10_1038_s41558_021_01039_0">(Myers a kol. 2021, obrázek 1)</SourceLink></p>
      <p>Pro dlouhodobý odhad tým spojil pozorované vztahy s modelovanou změnou prostředí. Získal příspěvek mořských nízkých oblaků mezi 60° jižní a 60° severní šířky +0,19 ± 0,12 W/m² na 1 °C, přepočtený na celou Zemi. Interval má 90% spolehlivost. Výsledek zahrnuje zesilující odezvu stratokumulů i téměř neměnný účinek malých kupovitých oblaků v oblastech pasátů, pravidelných tropických větrů. Nejde o prosté prodloužení trendu z roku 2015. <SourceLink id="DOI_10_1038_s41558_021_01039_0">(Myers a kol. 2021, obrázek 3)</SourceLink></p>
      <p>Ceppi a kolegové v roce 2024 zkoušku rozšířili na pět družicových souborů a okolní meteorologické podmínky. Ukázali, že modely s příliš malou výchozí plochou nízkých oblaků podhodnocují i jejich radiační odezvu. Jejich odhad činí +0,45 W/m² na 1 °C s 90% rozmezím +0,18 až +0,72. Zahrnuje také pevninské nízké oblaky a odlišný statistický postup. Obě studie podporují zesílení, ale velikost příspěvku zůstává předmětem výzkumu. <SourceLink id="DOI_10_1029_2024GL110525">(Ceppi a kol. 2024, obrázky 2–4)</SourceLink></p>
    </HypothesisStory>

    <h2 id="mechanismus">Jak se dílčí účinky skládají</h2>
    <p>Původní návrh silného tlumení úbytkem kovadlin neprošel jako celé vysvětlení. Výškový účinek vysokých oblaků a celkový zesilující příspěvek nízkých oblaků mají širší oporu. Tlumící děje přitom nezmizely. Výsledná zpětná vazba vzniká jejich součtem, který nyní můžeme spojit s energetickou bilancí Země.</p>
    <h3 id="zmena-bilance">Od změny oblaku k další změně teploty</h3>
    <p>Oteplení změní podmínky, ve kterých oblaky vznikají a zanikají. Pokud pak odrazí méně světla, Země více energie přijme. Pokud vysoké oblaky vystoupí, výdej tepelného záření vzroste méně, než by vzrostl při zachování jejich výšky. V obou případech zůstává v klimatickém systému více energie a k obnovení rovnováhy je potřeba větší oteplení. To je uzavření kladné zpětné vazby. Základní příjem a výdej vysvětluje <Link href="/mechanismy/energeticka-bilance-zeme/">energetická bilance Země</Link>. <SourceLink id="DOI_10_1029_2010JD013817">(Zelinka a Hartmann 2010)</SourceLink>{" "}<SourceLink id="DOI_10_1073_pnas_2026290118">(Ceppi a Nowack 2021)</SourceLink></p>
    <p>Jiná změna může působit proti tomu. Ve studených oblacích se při oteplování mění podíl ledových krystalků a kapalných kapek. Za některých podmínek tím vzroste odrazivost a vazba oteplování tlumí. Také plocha vysokých oblaků může ubývat. Celkový výsledek proto potřebuje zahrnout jednotlivé druhy, oblasti i obě části záření. <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC 2021, oddíl 7.4.2.4)</SourceLink></p>
    <h3 id="celkovy-odhad">Kolik přidávají oblaky jako celek?</h3>
    <p>Ceppi a Peer Nowack v roce 2021 vyhodnotili měsíční družicové změny od března 2000 do září 2019. Jejich vztahy k teplotě a vrstvení spojili s klimatickými výpočty a odhadli celkovou dlouhodobou oblačnou vazbu na +0,43 W/m² na 1 °C. Devadesátiprocentní interval činil +0,08 až +0,78. Jiná cesta, součet odborně posouzených oblačných příspěvků v IPCC, dala +0,42 a širší velmi pravděpodobné rozmezí −0,10 až +0,94. To odpovídá 90% posuzovanému rozsahu. Shodný střed podporuje zesílení, rozdílné rozpětí ukazuje trvající nejistotu jeho velikosti. <SourceLink id="DOI_10_1073_pnas_2026290118">(Ceppi a Nowack 2021, obrázek 2)</SourceLink>{" "}<SourceLink id="DOI_10_1017_9781009157896_009">(IPCC 2021, tabulka 7.10)</SourceLink></p>
    <p>Tyto dvě cesty nejsou zcela nezávislé. Využívají část stejných družicových záznamů, modelů a poznatků o oblačných dějích. Silnější oporu než samotná blízkost dvou čísel poskytují konkrétní testy výšky, plochy, odrazu a odezvy na podmínky prostředí. Dlouhodobá vazba navíc závisí na tom, které oblasti oceánu se oteplují rychleji. Krátký radiační trend proto nelze bez dalšího vydělit globálním oteplením a vydávat za tuto vazbu. <SourceLink id="DOI_10_1073_pnas_2026290118">(Ceppi a Nowack 2021)</SourceLink>{" "}<SourceLink id="DOI_10_1029_2024GL110525">(Ceppi a kol. 2024)</SourceLink></p>
    <h3 id="nejistoty">Co zůstává otevřené</h3>
    <p>Nejlépe podložený celkový závěr je, že změny oblaků oteplování zesilují. Méně přesně známe velikost tohoto účinku a jeho vývoj při jiném rozložení oteplování. Důležitou otevřenou částí zůstává plocha a hustota vysokých oblaků. <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC 2021, oddíl 7.4.2.4)</SourceLink></p>
    <details className="method-details"><summary>Podrobnosti nejistot a další možné zkoušky</summary>
      <p>Družicový radiační účinek porovnává oblačné a bezoblačné podmínky. Ty se liší také vlhkostí a teplotou. Pro výpočet zpětné vazby se proto opravuje vliv těchto rozdílů a změn povrchu. Výsledek závisí na kalibraci, rozpoznání tenkých oblaků i výpočtu přenosu záření. <SourceLink id="DOC_CERES_EBAF4_2018">(CERES 2018)</SourceLink>{" "}<SourceLink id="DOI_10_1029_2011JD016459">(Zelinka a Hartmann 2011)</SourceLink></p>
      <p>Novější odhad z roku 2024 zůstává vyšší i při omezení na samotné oceány: +0,42 W/m² na 1 °C s 90% intervalem +0,14 až +0,72. Rozdíl proti studii z roku 2021 tedy nevysvětluje jen doplnění pevniny. Zahrnutí podmínek v okolních oblastech mění odvozenou citlivost oblaků a ve zkoušce zlepšuje předpověď mimo původní data. <SourceLink id="DOI_10_1029_2024GL110525">(Ceppi a kol. 2024, oddíl 3)</SourceLink></p>
      <p>Globální modely nedokážou přímo rozlišit každý malý vír a kapku. Jejich účinek nahrazují výpočtovými vztahy. Pozorovací omezení tyto vztahy prověřují, ale při převodu na dlouhodobou vazbu stále využívají modelovanou změnu prostředí. Odchylka výchozí oblačnosti navíc může ovlivnit i její vypočtenou odezvu. <SourceLink id="DOI_10_1029_2024GL110525">(Ceppi a kol. 2024)</SourceLink></p>
      <p>Závěr by oslabil dlouhý, kalibračně stabilní záznam, ve kterém by vysoké oblaky při trvalém oteplování nestoupaly a nízké oblaky po oddělení proudění a aerosolů odrážely více světla, než předpokládají zde uvedené vztahy. Další test musí sledovat tyto vlastnosti společně. Samotné přibývání oblaků v jedné oblasti není testem globálního součtu. Vliv změn aerosolů má vlastní článek o <Link href="/mechanismy/prumyslove-aerosoly-a-oblaka/">částicích z lidské činnosti a oblacích</Link>.</p>
    </details>

    <h2 id="shrnuti">Shrnutí</h2>
    <div className="method-conclusion">
      <p>Oblaka dnes Zemi v globálním součtu radiačně ochlazují. Jejich změny při oteplování však podle souhrnu důkazů původní oteplení zesilují. Výše položené vysoké oblaky omezují nárůst výdeje tepelného záření a změny nízkých oblaků mohou oslabovat odraz slunečního světla. Některé další oblačné změny působí proti tomu. Celkové znaménko je podloženo lépe než přesná velikost účinku.</p>
      <p>Mechanismus vysvětluje odezvu oblaků na oteplení a její další vliv na energetickou bilanci. Hodnocení IPCC z roku 2021 dává střední odhad +0,42 W/m² na 1 °C globálního oteplení. Neznamená to stejnou změnu každého oblaku ani určení příčiny každého jednotlivého roku.</p>
    </div>
    <h2 id="prameny">Prameny, data a grafiky</h2>
    <ul>
      <li>Původní návrh a jeho prověření: <SourceLink id="DOI_IRIS_LINDZEN_2001">Lindzen a kol. 2001</SourceLink>, <SourceLink id="DOI_NO_EVIDENCE_IRIS_2002">Hartmann a Michelsen 2002</SourceLink>, <SourceLink id="DOI_10_5194_acp_2_31_2002">Fu a kol. 2002</SourceLink>.</li>
      <li>Výška oblaků: <SourceLink id="DOI_10_1029_2002GL015835">Hartmann a Larsonová 2002</SourceLink>, <SourceLink id="DOI_10_1029_2010JD013817">Zelinka a Hartmann 2010</SourceLink>, <SourceLink id="DOI_10_1029_2011JD016459">Zelinka a Hartmann 2011</SourceLink>.</li>
      <li>Nízké oblaky a celková vazba: <SourceLink id="DOI_10_1038_s41558_021_01039_0">Myers a kol. 2021</SourceLink>, <SourceLink id="DOI_10_1029_2024GL110525">Ceppi a kol. 2024</SourceLink>, <SourceLink id="DOI_10_1073_pnas_2026290118">Ceppi a Nowack 2021</SourceLink>.</li>
      <li>Syntézy: <SourceLink id="DOI_10_1002_wcc_465">Ceppi a kol. 2017</SourceLink> a <SourceLink id="DOI_10_1017_9781009157896_009">IPCC, kapitola 7</SourceLink>.</li>
      <li>Výchozí radiační účinek: <SourceLink id="DOC_CERES_EBAF4_2018">dokumentace CERES EBAF 4.0</SourceLink>.</li>
      <li>Veřejné podklady: <SourceLink id="DATA_CERES_EBAF">CERES</SourceLink>, <SourceLink id="DATA_MYERS_CLOUD_KERNELS">vztahy oblačného záření k meteorologickým podmínkám</SourceLink> a <SourceLink id="CODE_CEPPI_NOWACK_2021">kód celkového odhadu</SourceLink>. Přístup k velkým družicovým souborům může vyžadovat bezplatný účet NASA Earthdata. Veřejné vztahy nejsou úplným archivem každého mezivýsledku studie.</li>
      <li><SourceLink id="MEDIA_CLOUD_FEEDBACK_2026">Původ ilustrací</SourceLink> a <Link href={media + "/prompts.json"}>úplná zadání pro vestavěný generátor obrázků</Link>.</li>
    </ul>
  </div></article>;
}

