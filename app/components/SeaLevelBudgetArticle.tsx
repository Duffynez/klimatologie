import Image from "next/image";
import Link from "next/link";
import { Equation } from "./Equation";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./SeaLevelBudgetArticle.module.css";

const media = "/media/bilance-hladiny-more";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "rozpinani", name: "Teplejší voda zabírá větší objem",
    prediction: "Při stejné hmotnosti má ohřev mořské vody zvětšit její objem. Příspěvek k hladině musí jít vypočítat z teploty a slanosti v různých hloubkách.",
    test: "1. Porovnáme výpočet hustoty s laboratorními vzorky. 2. Z oceánských profilů určíme příspěvek rozpínání k měřenému vzestupu.",
    observation: "1. Laboratorní měření vymezila vztah i jeho přesnost. 2. Rozpínání přispělo v letech 1993–2018 přibližně 1,19 mm za rok k celkovým 3,32 mm za rok.",
    verdict: "Podpořený dílčí příspěvek",
    explanation: "Samotné rozpínání nevysvětluje celý vzestup. Jeho účinek se sčítá se změnou množství vody v oceánu.",
    state: "supported",
  },
  {
    id: "prisun-vody", name: "Do oceánu přibývá voda z pevniny",
    prediction: "Přesun vody z pevniny má zvýšit hmotnost oceánu i hladinu. Při opačném přesunu mají obě veličiny klesnout, i když se objem vlivem teploty téměř nezmění.",
    test: "3. Prověříme dočasný pokles v letech 2010–2011. 4. Sečteme hmotnostní a teplotní příspěvek za roky 1993–2018 a porovnáme je s výškou hladiny.",
    observation: "3. Oceán ztratil asi 1 800 gigatun vody a hladina klesla zhruba o 5 mm. 4. Součet 3,16 mm za rok je v rámci nejistot slučitelný s měřeným vzestupem.",
    verdict: "Podpořený dílčí příspěvek",
    explanation: "Dlouhodobý přírůstek vody a tepelné rozpínání společně vysvětlují vzestup. Krátkodobé zadržení vody na souši jej může dočasně obrátit.",
    state: "supported",
  },
];
const tests = [
  { title: "1. Hustota při známé teplotě", prediction: "Stejně slaná mořská voda má při vyšší teplotě v běžném oceánském rozsahu menší hustotu.", test: "Porovnáváme hmotnost na jednotku objemu u vzorků se známou teplotou a slaností.", result: "Soubor 467 laboratorních hodnot umožnil sestavit a zpřesnit vztah mezi hustotou, teplotou a slaností." },
  { title: "2. Objem z oceánských profilů", prediction: "Ohřívání v různých hloubkách má po přepočtu na hustotu vysvětlit část vzestupu hladiny.", test: "Z měření sestavíme prostorové mapy, dopočítáme neproměřené oblasti a sečteme objemové změny.", result: "Za roky 1993–2018 vychází teplotní příspěvek 1,19 mm za rok, s 90% intervalem 0,99–1,44." },
  { title: "3. Dočasný pokles v letech 2010–2011", prediction: "Pokud ubude voda, má klesnout hmotnost oceánu i hladina bez odpovídajícího ochlazení.", test: "Porovnáme družicovou výšku, gravitační změny a teplotní profily během poklesu.", result: "Pokles hladiny provázel úbytek hmotnosti oceánu a přírůstek vody na souši. Teplotní příspěvek se mezi konci období změnil málo." },
  { title: "4. Součet proti měřené hladině", prediction: "Rozpínání a přidaná voda mají společně vystihnout velikost dlouhodobého vzestupu.", test: "Porovnáme příspěvky a výšku hladiny za stejné období 1993–2018, včetně jejich nejistot.", result: "Součet 3,16 mm za rok souhlasí v rámci nejistot s 3,35 z pobřežní rekonstrukce a 3,32 z družic." },
];

function TestPanels({ start }: { start: number }) {
  return <div className={styles.testPanels}>{tests.slice(start, start + 2).map(test => <section className={styles.testPanel} key={test.title}>
    <h4>{test.title}</h4><dl><dt>Předpověď</dt><dd>{test.prediction}</dd><dt>Zkouška</dt><dd>{test.test}</dd><dt>Výsledek</dt><dd>{test.result}</dd></dl>
  </section>)}</div>;
}

export function SeaLevelBudgetArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Dva způsoby, jak zvětšit objem oceánu</h2>
    <p className="article-prose__intro">
      Globální hladina moře dlouhodobě stoupá. Družicová měření za roky 1993–2018 dávají v rozboru Thomase Frederikseho a kolegů průměrné tempo 3,32 mm za rok.
      Jak z měření poznáme, kolik vody přibylo a nakolik se zvětšil objem vody, která už v oceánu byla?
      <Link href="/pozorovani/gmsl/#bilance-hladiny"> Pozorování globální hladiny</Link> vysvětluje vznik údajů, s nimiž zde porovnáme oba příspěvky.
      <SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, tab. 1)</SourceLink>
    </p>
    <p>
      <strong>Bilance hladiny</strong> je porovnání celkové změny se součtem změn, které ji mají vysvětlit.
      Rozpínání teplejší vody a přísun vody z pevniny mohou působit současně. Každý ale zanechává jinou měřitelnou stopu.
      Zkoumáme globální průměr v posledních desetiletích. Výška moře vůči jednotlivému pobřeží se navíc mění s prouděním, gravitací a pohybem pevniny.
      <SourceLink id="DOI_10_1007_s10712_019_09525_z"> (Gregory a kol. 2019)</SourceLink>
    </p>

    <h2 id="hypotezy">Dva příspěvky a jejich zkoušky</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="sea-level-budget-hypotheses-caption"
      context={<p>První větev mění objem při stálé hmotnosti vody. Druhá mění množství vody. Rozlišujeme je pomocí teploty, slanosti a gravitace, potom jejich součet porovnáme s měřenou výškou hladiny. Číselné trendy níže patří stejnému období 1993–2018.</p>}
      caption={<>Oba příspěvky se doplňují. Shoda jejich součtu s hladinou ověřuje velikost vysvětlené změny, ne pouze její směr. Krátkodobý pokles v letech 2010–2011 tvoří samostatnou zkoušku přesunu vody.</>} />

    <h2 id="pribehy">Jak se příspěvky podařilo rozlišit</h2>
    <HypothesisStory id="rozpinani" number={1} title="Teplejší voda zabírá větší objem">
      <p>
        Pro přepočet teploty na objem potřebujeme znát <strong>hustotu</strong>, tedy hmotnost připadající na jednotku objemu.
        U mořské vody závisí také na obsahu solí a na tlaku. Laboratorní vztah proto musí popsat více podmínek než pouhé zahřátí jedné sklenice.
        Frank Millero a Alain Poisson v roce 1981 spojili dvě řady laboratorních měření do rovnice hustoty při tlaku jedné atmosféry.
        Reagovali mimo jiné na nové výsledky, podle nichž předchozí rovnice z roku 1976 nad 25 °C nestačila.
        <SourceLink id="DOI_10_1016_0198_0149_81_90122_9"> (Millero a Poisson 1981, s. 625–626)</SourceLink>
      </p>
      <p>
        Schéma odděluje teplotní změnu od přidání vody. Stejné množství vody po ohřátí zabírá vyšší sloupec, zatímco jeho hmotnost zůstává stejná.
        V oceánu sledujeme teplotu a slanost po vrstvách. Radarová družice kontroluje výšku hladiny, gravitační měření pomáhá oddělit změnu hmotnosti.
        Obrázek ukazuje princip, nikoli měřítko skutečného rozpínání.
        <SourceLink id="DOI_10_1007_s10712_019_09525_z"> (Gregory a kol. 2019)</SourceLink>
      </p>
      <figure className={`article-figure ${styles.explanatoryFigure}`}>
        <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Schéma rozpínání vody, na úzké obrazovce posuvné do stran">
          <a href={`${media}/rozpinani.svg`} aria-label="Otevřít schéma rozpínání v plné velikosti"><Image className="article-figure__media" src={`${media}/rozpinani.svg`} width={1100} height={650} alt="Dva stejně široké sloupce mořské vody se stejnou hmotností. Teplejší má menší hustotu a vyšší hladinu. Teplotní profily určují změnu objemu, výškoměr sleduje hladinu a gravimetrie odlišuje přísun hmoty." unoptimized /></a>
        </div>
        <TestPanels start={0} />
        <figcaption>Vlastní kvalitativní schéma Klimatologie.eu připravené s pomocí AI, CC BY 4.0.
          Princip podle <SourceLink id="DOI_10_1007_s10712_019_09525_z">Gregoryho a kol. 2019</SourceLink> a
          <SourceLink id="TEOS10_MANUAL_2010"> manuálu TEOS-10</SourceLink>. Sloupce nejsou samostatné uzavřené oblasti skutečného oceánu.
          <a href={`${media}/podklady.txt`}> Podklady a licence</a>.
        </figcaption>
      </figure>

      <h4 className={styles.testHeading} id="test-hustota">Zkouška 1. Hustota při známé teplotě</h4>
      <p>
        Millero a Poisson použili 467 hodnot z měření dvou pracovišť. Hledali rovnici, která vystihne hustotu v rozsahu 0–40 °C a slaností 0,5–43 na tehdejší praktické stupnici.
        Běžná oceánská voda má na této stupnici hodnotu přibližně 35. Změnu hustoty při ohřevu lze ověřit porovnáním vzorků při stejné slanosti.
        Srovnání laboratoří přitom vyžadovalo sjednocení referenční vody a opravu přiřazené slanosti některých vzorků.
        Po těchto úpravách se vyhlazené výsledky pracovišť lišily nejvýše přibližně o 0,005 kg/m³.
        <SourceLink id="DOI_10_1016_0198_0149_81_90122_9"> (Millero a Poisson 1981, s. 626–629)</SourceLink>
      </p>
      <p>
        Typickou velikost odchylky naměřených hustot od výsledné rovnice autoři vyjádřili směrodatnou odchylkou 0,00366 kg/m³.
        Pro představu, rovnice dává při 5 °C a slanosti 35 hustotu přibližně 1 027,675 kg/m³. Rozdíly tedy leží v tisícinách kilogramu na metr krychlový vody.
        Uvedená odchylka vyjadřuje shodu rovnice s údaji, z nichž byla sestavena. Není nezávislou předpovědní zkouškou na nových vzorcích.
        Opravovaná starší rovnice zároveň ukazuje, proč potřebujeme další měření: nová data mohou odhalit chybu dříve přijatého vztahu.
        <SourceLink id="DOI_10_1016_0198_0149_81_90122_9"> (Millero a Poisson 1981, s. 628–629)</SourceLink>
      </p>
      <p>
        Dnešní oceánské výpočty používají standard <strong>TEOS-10</strong>, který popisuje vlastnosti mořské vody včetně závislosti na tlaku a složení solí.
        Laboratorně určený vztah se tak musí používat ve správném rozsahu a s odpovídajícími měřenými veličinami.
        <SourceLink id="TEOS10_MANUAL_2010"> (IOC, SCOR a IAPSO 2010, oddíly 1–2)</SourceLink>
      </p>

      <h4 className={styles.testHeading} id="test-profily">Zkouška 2. Objem z oceánských profilů</h4>
      <p>
        Laboratoř určuje, jak se voda rozpíná. Pro skutečný oceán ještě potřebujeme zjistit, které vrstvy se o kolik oteplily.
        Frederikse a kolegové v roce 2020 zpracovali mapy teploty a slanosti založené na lodních měřeních a později také na autonomních plovácích.
        Pro období po roce 1957 použili v horních 2 000 metrech tři různé datové soubory a zohlednili jejich rozdíly.
        Nešlo o tři zcela nezávislá pozorování: soubory sdílejí část profilů, liší se mimo jiné způsobem vyplnění mezer mezi nimi.
        <SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, Methods: Steric changes)</SourceLink>
      </p>
      <p>
        Z teploty, slanosti a tlaku se určí hustota každé vrstvy. Její změna říká, o kolik se při stejné hmotnosti změní tloušťka vodního sloupce.
        Příspěvky vrstev se sečtou a oblasti oceánu se zprůměrují podle plochy. Hlubší část pod 2 000 metry autoři doplnili rekonstrukcí založenou na šíření teplotních změn oceánem.
        Výsledek tedy spojuje měření s prostorovým zpracováním a dopočtem nedostatečně proměřené hloubky.
        Postup získání teplotních a slanostních údajů rozvádí <Link href="/pozorovani/gmsl/#bilance-hladiny">pozorovací článek</Link>.
        <SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, metody)</SourceLink>
      </p>
      <p>
        Za roky 1993–2018 vyšel teplotní příspěvek <strong>1,19 mm za rok</strong>, s 90% intervalem 0,99–1,44 mm za rok.
        Tento interval vyjadřuje nejistotu odhadu trendu v použitém zpracování, nikoli rozsah ročních výkyvů.
        Družicový vzestup za stejné období činil 3,32 mm za rok, s intervalem 2,87–3,79 mm za rok.
        Rozpínání tak vysvětluje podstatnou část změny, ale samo na celý vzestup nestačí.
        Zkouška součtu s přidanou vodou následuje ve <a href="#test-soucet">čtvrté zkoušce</a>.
        <SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, tab. 1)</SourceLink>
      </p>
    </HypothesisStory>

    <HypothesisStory id="prisun-vody" number={2} title="Do oceánu přibývá voda z pevniny">
      <p>
        Vědět o rozpínání a tání ještě neznamená umět doložit jejich velikost. Walter Munk v roce 2002 ukázal, že tehdejší odhady příspěvků nedokázaly vysvětlit celý odhadovaný vzestup ve 20. století.
        Zvažoval chybu v rekonstruované hladině, podcenění oceánského ohřevu i problémy s omezením úbytku ledu podle zemské rotace.
        Jeho rozbor pojmenoval nesoulad dostupných údajů. Nevylučoval samotný fyzikální účinek přidané vody.
        <SourceLink id="DOI_10_1073_pnas_092704599"> (Munk 2002)</SourceLink>
      </p>
      <p>
        Družice GRACE, vypuštěné v roce 2002, přidaly jiný druh měření: změny gravitačního pole způsobené přesuny hmoty.
        Přesné sledování vzdálenosti mezi dvěma družicemi umožňuje určit, kde vody přibývá a kde ubývá.
        Princip a nutné opravy popisuje <Link href="/metody/druzicova-gravimetrie/#hmotnost-oceanu">družicová gravimetrie</Link>.
        Hmotnostní příspěvek tak nemusíme odvozovat jen jako nevysvětlený zbytek mezi hladinou a rozpínáním.
        <SourceLink id="DOI_10_1029_2012gl053055"> (Boening a kol. 2012, oddíl 2)</SourceLink>
      </p>
      <p>
        Schéma sleduje vodu mezi oceánem a pevninou. Odtok a úbytek pevninského ledu mohou vodu do oceánu přidávat.
        Vypařování, srážky a zadržení vody na souši mohou přesun dočasně obrátit. Výsledek ověřujeme gravitační změnou a výškou hladiny současně.
        Barvy šipek rozlišují směr přesunu, jejich šířka neudává množství vody.
        <SourceLink id="DOI_10_1007_s10712_019_09525_z"> (Gregory a kol. 2019, N19)</SourceLink>
      </p>
      <figure className={`article-figure ${styles.explanatoryFigure}`}>
        <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Schéma přesunu vody, na úzké obrazovce posuvné do stran">
          <a href={`${media}/presun-vody.svg`} aria-label="Otevřít schéma přesunu vody v plné velikosti"><Image className="article-figure__media" src={`${media}/presun-vody.svg`} width={1100} height={650} alt="Ledovec na pevnině a řeka dodávají vodu do oceánu. Opačný směr vede vypařováním a srážkami k zásobám vody na souši. GRACE sleduje změnu hmotnosti, radarový výškoměr výšku hladiny." unoptimized /></a>
        </div>
        <TestPanels start={2} />
        <figcaption>Vlastní kvalitativní schéma Klimatologie.eu připravené s pomocí AI, CC BY 4.0.
          Přesuny podle <SourceLink id="DOI_10_1029_2012gl053055">Boening a kol. 2012</SourceLink> a
          <SourceLink id="DOI_10_1007_s10712_019_09525_z"> Gregoryho a kol. 2019</SourceLink>.
          <a href={`${media}/podklady.txt`}> Podklady a licence</a>.
        </figcaption>
      </figure>

      <h4 className={styles.testHeading} id="test-pokles">Zkouška 3. Dočasný pokles v letech 2010–2011</h4>
      <p>
        Předpověď přesunu vody platí v obou směrech. Pokud se voda přesune z oceánu na pevninu, musí hmotnostní příspěvek k hladině klesnout.
        Carmen Boening a kolegové v roce 2012 využili výraznou epizodu La Niña, změnu proudění a teplot v tropickém Pacifiku, která ovlivnila rozložení srážek.
        Mezi březnem 2010 a květnem 2011 se globální hladina snížila přibližně o 5 mm.
        Tento krátký pokles umožnil prověřit opačné znaménko účinku, bez čekání na další desetiletí růstu.
        <SourceLink id="DOI_10_1029_2012gl053055"> (Boening a kol. 2012)</SourceLink>
      </p>
      <p>
        Autoři spojili radarová měření hladiny, GRACE a teplotní i slanostní profily plováků Argo v horních 900 metrech.
        Odstranili pravidelný roční cyklus a krátké výkyvy vyhladili. Gravimetrie ukázala úbytek přibližně <strong>1 800 gigatun</strong> vody z oceánu.
        Jedna gigatuna je miliarda tun. Teplotní příspěvek se během epizody také měnil, ale mezi jejím začátkem a koncem zůstal téměř stejný.
        Pokles tak odpovídal především ztrátě vody, ne smrštění oceánu při ochlazení.
        <SourceLink id="DOI_10_1029_2012gl053055"> (Boening a kol. 2012, obr. 2 a oddíly 2–3)</SourceLink>
      </p>
      <p>
        Na pevnině současně přibyly zásoby vody, zejména v Austrálii, na severu Jižní Ameriky a v jihovýchodní Asii.
        Tyto dvě gravitační mapy nejsou nezávislými měřicími metodami, obě vycházejí z GRACE.
        Podstatnou další kontrolu tvoří jinak měřená výška hladiny a teplotní profily.
        <Link href="/pozorovani/gmsl/#pokles-2010-2011"> Pozorovací článek</Link> rozlišuje jejich zpracování a nejistoty.
        Krátká epizoda potvrzuje účinek přesunu vody, sama však neurčuje příčinu dlouhodobého trendu.
        <SourceLink id="DOI_10_1029_2012gl053055"> (Boening a kol. 2012, obr. 2–3)</SourceLink>
      </p>

      <h4 className={styles.testHeading} id="test-soucet">Zkouška 4. Součet proti měřené hladině</h4>
      <p>
        Dlouhodobou kontrolu nabízí rozbor Frederikseho a kolegů. Přírůstek vody určili z úbytku ledovců, Grónska a Antarktidy a ze změn zásob vody na souši.
        Pro období od roku 2003 využili gravimetrii. Starší část vyžadovala měření a rekonstrukce ledovců i modelové odhady pevninské vody, včetně nádrží a čerpání podzemních zásob.
        Celý příspěvek za roky 1993–2018 proto není přímým měřením jedné družice.
        Vyšel <strong>1,97 mm za rok</strong>, s 90% intervalem 1,63–2,33 mm za rok.
        <SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, tab. 1 a metody)</SourceLink>
      </p>
      <p>
        Graf porovnává průměrná tempa za stejné období. Například bod 1,19 znamená, že samotné rozpínání by podle výpočtu přidávalo průměrně 1,19 mm hladiny za rok.
        Jeho úsečka 0,99–1,44 ukazuje 90% interval nejistoty odhadu. První dva řádky se sčítají.
        Poslední dva jsou různými odhady celkového vzestupu, s nimiž se tento součet porovnává.
        <SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, tab. 1)</SourceLink>
      </p>
      <figure className={`article-figure ${styles.explanatoryFigure}`}>
        <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Graf bilance hladiny, na úzké obrazovce posuvný do stran">
          <a href={`${media}/bilance-1993-2018.svg`} aria-label="Otevřít graf bilance v plné velikosti"><Image className="article-figure__media" src={`${media}/bilance-1993-2018.svg`} width={1100} height={650} alt="Trendy 1993–2018 v milimetrech za rok: rozpínání 1,19, přísun vody 1,97, jejich součet 3,16, pobřežní rekonstrukce 3,35 a družice 3,32. Graf uvádí 90% intervaly všech odhadů, které se u součtu a obou celkových měření překrývají." unoptimized /></a>
        </div>
        <figcaption>Přepis hodnot z <SourceLink id="DOI_10_1038_s41586_020_2591_3">Frederikse a kol. 2020, tab. 1</SourceLink>.
          Vlastní graf Klimatologie.eu připravený s pomocí AI, CC BY 4.0.
          <a href={`${media}/frederikse-2020-tabulka-1.csv`}> Číselné podklady</a>, <a href={`${media}/vypocty.mjs`}>kontrolní výpočet</a> a <a href={`${media}/podklady.txt`}>původ údajů</a>.
        </figcaption>
      </figure>
      <p>
        Součet příspěvků činí <strong>3,16 mm za rok</strong>, s intervalem 2,78–3,57 mm za rok.
        Z pobřežních měření rekonstruovaná globální hladina stoupala o 3,35 mm za rok, s intervalem 2,91–3,82 mm za rok, družicová o 3,32 mm za rok.
        Rozdíl pobřežní rekonstrukce a součtu je 0,19 mm za rok, s publikovaným intervalem −0,32 až 0,70 mm za rok.
        Rozpětí zahrnuje nulu. Rozbor tedy neprokazuje chybějící příspěvek, který by byl pro toto období nutný nad rámec uvedených nejistot.
        <SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, tab. 1)</SourceLink>
      </p>
      <p>
        Výška, teplota a gravitace vycházejí z odlišných fyzikálních měření. Hotové výsledky přesto nejsou zcela nezávislé.
        Opravy pobřežní rekonstrukce používají také odhad přerozdělení vody a deformace Země při změnách ledových hmot.
        Některé postupy navíc sdílejí opravy pomalého pohybu zemského pláště po ústupu dávných ledovců.
        Autoři přenesli nejistoty a jejich společné vazby přes 5 000 variant výpočtu. Proto ani nejistotu součtu zde nepočítáme prostým sčítáním mezí jednotlivých řádků.
        <SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, metody)</SourceLink>
      </p>
      <p>
        Výpočet lze kontrolovat podrobněji než jen podle výsledného grafu.
        <SourceLink id="DOI_10_5281_zenodo_3862995"> Veřejný datový doplněk</SourceLink> obsahuje časové řady i soubor 5 000 variant,
        <SourceLink id="WEB_GitHub_GitHub_thomasfrederikse_sealevelbudget_20c_4d484230"> původní zdrojový kód</SourceLink> popisuje zpracování.
        Naše tabulka přepisuje publikované trendy za roky 1993–2018. Nepředstavuje nový výpočet z původních družicových signálů ani odhad pro pozdější roky.
      </p>
      <p>
        Novější rozbor se vrátil také k bilanci celého 20. století, v níž Munk upozornil na nesoulad.
        Frederikse a kolegové pro delší období 1900–2018 určili součet příspěvků 1,52 mm za rok a rekonstruovaný vzestup 1,56 mm za rok, opět se shodou v rámci nejistot.
        Vysvětlení se zlepšilo díky zpřesnění obou stran porovnání, příspěvků i samotné rekonstruované hladiny.
        Tento dlouhý odhad je samostatné srovnání, jeho tempo nemícháme s grafem za roky 1993–2018.
        <SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, tab. 1 a hlavní text)</SourceLink>
      </p>
    </HypothesisStory>

    <h2 id="mechanismus">Jak rozpínání a přidaná voda zvyšují hladinu</h2>
    <p>
      <strong>Dlouhodobý vzestup globální hladiny vysvětluje souběh tepelného rozpínání a přísunu vody z pevniny.</strong>
      Laboratorní měření určují objemovou odezvu vody, gravimetrie rozlišuje změnu jejího množství a měření výšky kontroluje společný výsledek.
      Pro období 1993–2018 vysvětluje jejich součet pozorovaný vzestup v rámci vyčíslených nejistot.
      Stejné fyzikální rozdělení používá i hodnocení IPCC, které porovnává více studií a upozorňuje na nejistotu jednotlivých příspěvků.
      <SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020)</SourceLink> a
      <SourceLink id="DOI_10_1017_9781009157896_011"> IPCC 2021, oddíl 9.6.1</SourceLink>
    </p>
    <h3 id="objem-a-hmotnost">Stejná voda může zabírat více místa</h3>
    <p>
      Objem vody je její hmotnost dělená hustotou. V rovnici označuje V objem v m³, m hmotnost v kg a ρ hustotu v kg/m³.
      Při stejném m vede menší hustota k většímu objemu. Mořská voda se v běžném oceánském rozsahu teplot při ohřevu rozpíná.
      Velikost odezvy závisí na výchozí teplotě, slanosti a tlaku, takže stejný přírůstek teploty nemusí v každé vrstvě způsobit stejnou změnu objemu.
      <SourceLink id="TEOS10_MANUAL_2010"> (IOC, SCOR a IAPSO 2010, oddíly 2.7 a 2.18–2.20)</SourceLink>
    </p>
    <Equation tex={String.raw`V=\frac{m}{\rho}`} />
    <p>
      V hlubokém oceánu se jednotlivé vrstvy nemohou volně rozpínat do stran bez pohybu okolní vody.
      Jejich objemový přírůstek se promítá do výšky sloupce a proudění jej přerozděluje.
      K určení globálního teplotního příspěvku proto potřebujeme změny v celém objemu, nejen teplotu hladiny.
      Slanost má na hustotu také vliv, ale její místní změny nelze bez dalšího zaměnit za globální tepelné rozpínání.
      <SourceLink id="DOI_10_1007_s10712_019_09525_z"> (Gregory a kol. 2019, N17–N20)</SourceLink>
    </p>
    <h3 id="hmotnostni-prispevek">Přidaná voda vytváří další vrstvu</h3>
    <p>
      Když se zmenšují ledovce a ledové příkrovy na pevnině, voda odtéká nebo led odplouvá do oceánu.
      Množství oceánské vody se mění také čerpáním podzemních zásob, napouštěním přehrad a kolísáním zásob v půdě, řekách a jezerech.
      Pro jednoduchý převod přidané hmotnosti ΔM na výšku vrstvy Δh vydělíme hmotnost hustotou sladké vody ρ<sub>f</sub> a plochou oceánu A.
      Používáme zde běžnou konvenci ekvivalentní vrstvy sladké vody a přibližně stálou dnešní plochu oceánu.
      <SourceLink id="DOI_10_1007_s10712_019_09525_z"> (Gregory a kol. 2019, vymezení N19 a rovnice 37)</SourceLink>
    </p>
    <Equation tex={String.raw`\Delta h=\frac{\Delta M}{\rho_{\mathrm{f}}\,A}`} />
    <p>
      Pro ilustraci vezměme 360 gigatun, hustotu 1 000 kg/m³ a zaokrouhlenou plochu oceánu 360 milionů km².
      Výpočet dává přibližně <strong>1 mm globální hladiny</strong>. Jde o jednotkový převod s uvedenými předpoklady, ne o samostatné měření.
      Úbytek asi 1 800 gigatun během epizody 2010–2011 tak odpovídá přibližně pěti milimetrům, jak předpokládá hmotnostní vysvětlení.
      Přesný přepočet a jednotky jsou v <a href={`${media}/vypocty.mjs`}>doprovodném výpočtu</a>.
      <SourceLink id="DOI_10_1029_2012gl053055"> (Boening a kol. 2012)</SourceLink>
    </p>
    <p>
      Plovoucí mořský led už před roztáním vytlačuje vodu odpovídající své hmotnosti. Jeho tání proto nemá velký přímý účinek jako přísun ledu z pevniny.
      U ledu spočívajícího na podloží pod hladinou se musí odečíst prostor, který po jeho ústupu zaplní moře.
      Přesná bilance navíc zahrnuje malé objemové změny spojené s odlišnou hustotou a slaností. Jednoduché rozdělení na pevninský a plovoucí led je tak užitečný začátek, ne úplný výpočet každého ledovce.
      <SourceLink id="DOI_10_1007_s10712_019_09525_z"> (Gregory a kol. 2019, N19)</SourceLink>
    </p>
    <h3 id="mistni-hladina">Globální milimetr není milimetr na každém pobřeží</h3>
    <p>
      Oceán není nádrž s nehybným dnem a všude stejnou hladinou. Proudění přerozděluje vodu a teplo, pobřeží může klesat nebo stoupat.
      Velký ledový příkrov navíc přitahuje okolní vodu gravitací. Když ubývá, mění se toto přitahování i zatížení zemského povrchu.
      Voda se přerozdělí, takže poblíž ubývajícího příkrovu může hladina vůči pevnině i klesat, zatímco vzdálenější oblasti zaznamenají větší vzestup.
      Globální bilance proto neudává sama o sobě změnu na konkrétním pobřeží.
      <SourceLink id="DOI_10_1007_s10712_019_09525_z"> (Gregory a kol. 2019)</SourceLink> a
      <SourceLink id="DOI_10_1017_9781009157896_011"> IPCC 2021, oddíl 9.6.1.3</SourceLink>
    </p>

    <h2 id="nejistoty">Co omezuje přesnost rozdělení</h2>
    <p>
      Neúplná měření hlubokého oceánu a zásob vody na pevnině omezují přesnost příspěvků.
      Shoda celkové bilance podporuje jejich společné vysvětlení, ale nevylučuje chyby, které se navzájem vyrovnají.
      Proto potřebujeme vedle součtu kontrolovat i jednotlivé složky a jejich společné předpoklady.
    </p>
    <details className="article-details"><summary>Podrobnosti k datům, opravám a srovnatelnosti odhadů</summary>
      <p>
        Před rozšířením autonomních plováků byly teplotní profily řidší a i dnes je hloubka pod 2 000 metry hůře pokrytá.
        Doplnění mezer vyžaduje předpoklady o prostorovém rozložení a šíření změn. Rozdíl datových souborů zachycuje část této nejistoty, ne nutně každou sdílenou chybu měření.
        Autoři také opravili posun měřené slanosti zaznamenaný od roku 2015: z map odečetli odhad globální objemové změny spojené se slaností.
        Tato oprava brání tomu, aby se chyba slanosti promítla do odhadu tepelného rozpínání.
        <SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, metody)</SourceLink>
      </p>
      <p>
        Gravimetrie musí oddělit přesun vody od pomalých změn pevné Země. U pobřeží se také obtížně rozlišuje signál pevniny a oceánu.
        Opravy ovlivňují více příspěvků současně. Intervaly v grafu přebíráme z původního společného výpočtu, nepovažujeme všechny vstupy za nezávislé.
        <SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, metody)</SourceLink>
      </p>
      <p>
        Zásoby vody na souši mají zvlášť nejistý dlouhodobý vývoj. Hodnocení IPCC popisuje i rozdíly ve znaménku jejich odhadovaného příspěvku mezi staršími a novějšími studiemi.
        Je to důvod průběžně zpřesňovat rozdělení příčin. Přidaná voda ani tepelné rozpínání tím neztrácejí svůj fyzikální účinek.
        <SourceLink id="DOI_10_1017_9781009157896_011"> (IPCC 2021, oddíly 9.6.1.1–9.6.1.2)</SourceLink>
      </p>
      <p>
        Číselné srovnání v tomto článku používá lineární trendy 1993–2018 z jedné studie.
        Jiné období, průměr krajních let nebo nová verze dat mohou dát jiné tempo. Takový rozdíl vyžaduje sjednocení postupu, než jej vyložíme jako rozpor měření.
        Bilance navíc rozlišuje fyzikální cestu změny hladiny. Přisouzení oteplování a úbytku ledu lidskému působení vyžaduje další rozbor příčin těchto změn.
        <SourceLink id="DOI_10_1017_9781009157896_011"> (IPCC 2021, oddíl 9.6.1)</SourceLink>
      </p>
    </details>

    <h2 id="dalsi-overeni">Jaký výsledek by vysvětlení oslabil</h2>
    <p>
      Přetrvávající rozdíl mezi měřenou hladinou a součtem příspěvků, větší než ověřené nejistoty a potvrzený několika přístroji, by vyžadoval revizi bilance.
      Museli bychom hledat chybějící zásobu vody, nedostatečně zachycený ohřev nebo chybu převodu a oprav.
      Přesnější souběžná měření výšky, gravitace a teploty včetně hlubokého oceánu mohou tyto možnosti rozlišit.
      Samotná shoda globálního průměru by nadále nestačila k ověření místního vývoje na pobřeží.
    </p>

    <div className="article-observation-summary" id="zaver"><p className="eyebrow">Shrnutí mechanismu</p><p>
      Globální hladina stoupá, protože se ohřívaná mořská voda rozpíná a zároveň do oceánu přibývá voda z pevniny.
      Tyto příspěvky rozlišujeme měřením teploty, slanosti a gravitace. Jejich součet porovnáváme s výškou hladiny.
      Za roky 1993–2018 odpovídá součet pozorovanému vzestupu v rámci nejistot. Krátký pokles v letech 2010–2011 navíc ukázal opačnou odezvu při přesunu vody na souš.
      Globální výsledek vyžaduje samostatné doplnění o proudění, gravitaci a pohyb pevniny, chceme-li vysvětlit změnu na jednotlivém pobřeží.
    </p></div>

    <h2 id="prameny">Prameny a veřejné podklady</h2>
    <div className="article-sources">
      <section><h3>Vlastnosti vody a vývoj otázky</h3><ul>
        <li><SourceLink id="DOI_10_1016_0198_0149_81_90122_9">Millero a Poisson 1981</SourceLink> – původní rovnice hustoty a porovnání laboratorních měření. Veřejný reprint v souboru UNESCO, strany 15–19 PDF.</li>
        <li><SourceLink id="TEOS10_MANUAL_2010">IOC, SCOR a IAPSO 2010: TEOS-10</SourceLink> – oficiální veřejný manuál vztahů mezi teplotou, slaností, tlakem a hustotou.</li>
        <li><SourceLink id="DOI_10_1073_pnas_092704599">Munk 2002</SourceLink> – původní rozbor tehdejšího nesouladu bilance 20. století, veřejný plný text.</li>
      </ul></section>
      <section><h3>Zkoušky a vymezení příspěvků</h3><ul>
        <li><SourceLink id="DOI_10_1029_2012gl053055">Boening a kol. 2012</SourceLink> – konečná publikovaná verze rozboru poklesu hladiny, přístroje a opravy v oddílu 2, srovnání na obrázcích 2–3.</li>
        <li><SourceLink id="DOI_10_1038_s41586_020_2591_3">Frederikse a kol. 2020</SourceLink> – veřejný plný text. Graf přebírá trendy 1993–2018 z tabulky 1 na s. 395, postupy jsou v části Methods.</li>
        <li><SourceLink id="DOI_10_1007_s10712_019_09525_z">Gregory a kol. 2019</SourceLink> – veřejný plný text, vymezení globální a místní hladiny, převod hmotnosti na vodní vrstvu v rovnici 37.</li>
        <li><SourceLink id="DOI_10_1017_9781009157896_011">IPCC 2021, kapitola 9</SourceLink> – odborná syntéza, bilance a rozdíly odhadů v oddílu 9.6.1.</li>
      </ul></section>
      <section><h3>Data a vlastní grafika</h3><ul>
        <li><SourceLink id="DOI_10_5281_zenodo_3862995">Datový doplněk Frederikse a kol. 2020</SourceLink> – veřejné časové řady v sešitu <code>global_basin_timeseries.xlsx</code> a 5 000 variant v souboru <code>GMSL_ensembles.nc</code>.</li>
        <li><SourceLink id="WEB_GitHub_GitHub_thomasfrederikse_sealevelbudget_20c_4d484230">Původní výpočetní kód studie</SourceLink> – dokumentuje vznik rekonstrukce, neslouží jen k překreslení grafu.</li>
        <li><a href={`${media}/frederikse-2020-tabulka-1.csv`}>Čísla našeho grafu</a>, <a href={`${media}/vypocty.mjs`}>kontrolní výpočet a převod hmotnosti</a>, <a href={`${media}/grafika.mjs`}>zdrojový kód obrázků</a> a <a href={`${media}/podklady.txt`}>původ a licence</a>. Vlastní grafika a kód CC BY 4.0.</li>
      </ul></section>
    </div>
  </div></article>;
}
