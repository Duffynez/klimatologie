import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Equation, InlineMath } from "./Equation";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./SeaIceMechanismsArticle.module.css";

const media = "/media/morsky-led-mechanismy";
const observation = "/pozorovani/ubytek-arktickeho-ledu/";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "silnejsi-vyvoz", name: "Úbytek objemu způsobuje rostoucí vývoz ledu",
    prediction: "Pokud byla roční bilance původně vyrovnaná a růst, tání ani přísun se nezmění, nový úbytek zásoby má doprovázet větší odvoz objemu ledu.",
    test: "Ve Framském průlivu porovnáme vyvezenou plochu s objemem vypočteným z pohybu, koncentrace a sonarové tloušťky ledu.",
    observation: "Vyvážená plocha v letech 1979–2014 rostla. Objem však v období 1992–2014 klesal, protože led tenčil.",
    verdict: "Samotný rostoucí vývoz objemu nestačí",
    explanation: "Vývoz odstraňuje led a přispívá ke kolísání jednotlivých let. Jeho dlouhodobý pokles však neodpovídá představě zesilujícího odvozu zásoby.",
    state: "insufficient",
  },
  {
    id: "energie-a-tani", name: "Oteplování mění bilanci růstu a tání",
    prediction: "Přísun energie má vysvětlit naměřené tání. Dlouhodobý pokles má být lépe slučitelný s působením skleníkových plynů než se samotnými přirozenými změnami.",
    test: "Srovnáme tání u bójí s odhadem pohlceného záření. Potom porovnáme družicovou plochu s klimatickými výpočty při různých příčinách změn.",
    observation: "Bóje zachytily silnější spodní tání v oblastech s větším slunečním ohřevem oceánu. Analýza let 1979–2019 rozlišila vliv skleníkových plynů ve všech měsících.",
    verdict: "Podpořené vysvětlení společně s pohybem ledu",
    explanation: "Růst a tání určují tepelnou část bilance. Vítr, proudy, sníh a stav oceánu mění její místní a sezonní průběh.",
    state: "supported",
  },
];

type TestPanel = { title: string; prediction: string; test: string; result: string };
function Graphic({ name, alt, tests, children }: { name: string; alt: string; tests: TestPanel[]; children: ReactNode }) {
  return <figure className={`article-figure ${styles.explanatoryFigure}`}>
    <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Schéma mořského ledu, na úzké obrazovce posuvné do stran">
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

export function SeaIceMechanismsArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Menší pokrývka, tenčí led</h2>
    <p className="article-prose__intro">
      Zářijový rozsah arktického mořského ledu se podle amerického Národního centra pro data o sněhu a ledu v letech 1979–2025 zmenšoval v průměru o 76 100 km² ročně.
      V šesti dlouhodobě srovnávaných oblastech se tloušťka na konci tání mezi obdobími 1958–1976 a 2011–2018 snížila přibližně o dva metry.
      <Link href={`${observation}#pozorovani`}> Pozorování arktického ledu</Link> tedy zachycují změnu pokryté oblasti i vrstvy ledu.
      Kolik z toho může způsobit odnášení ker a kolik změna jejich růstu a tání?
      <SourceLink id="DOI_10_25923_mmxf_0r86"> (Meier a kol. 2025</SourceLink>,{" "}
      <SourceLink id="DOI_10_1088_1748_9326_aae3ec">Kwok 2018)</SourceLink>
    </p>
    <p>
      Mořský led vzniká zamrzáním mořské vody. Jeho <strong>rozsah</strong> je součet ploch buněk mapy s nejméně 15 % ledu,
      zatímco <strong>plocha ledu</strong> započítává skutečně zaledněný podíl každé buňky.
      Teprve přidání tloušťky umožní odhadnout <strong>objem</strong> v kilometrech krychlových.
      Vítr může kry stlačit na menší plochu, aniž by tím roztály. Následující zkoušky proto sledují pohyb i tání a vztahují se k Arktidě.
      Jejich číselné výsledky nelze automaticky přenést na moře kolem Antarktidy.
      <Link href={`${observation}#objem`}> Jak vzniká odhad objemu</Link>.
    </p>

    <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="sea-ice-hypotheses-caption"
      context={<p>Pohyb a tání probíhají současně. Porovnání zkoumá, zda k vysvětlení dlouhodobého úbytku postačí zesilující vývoz, nebo potřebujeme také změnu tepelné bilance.</p>}
      caption={<>Rozhoduje objem přenesený přes hranici oblasti, energie potřebná k tání a vývoj ledu při různých příčinách klimatické změny.</>} />

    <h2 id="pribehy">Jak se vysvětlení ověřovala</h2>
    <HypothesisStory id="silnejsi-vyvoz" number={1} title="Úbytek objemu způsobuje rostoucí vývoz ledu">
      <p>
        Pohyb ker byl známý dávno před družicemi. Loď Fram při výpravě v letech 1893–1896 unášel led, do kterého byla sevřená.
        Zpráva kapitána Otty Sverdrupa v Nansenově knize zachycuje změny polohy i střídání příznivého a opačného pohybu.
        Led tedy nemusí roztát tam, kde vznikl. Proud a vítr jej mohou dopravit z Arktidy na jih.
        <SourceLink id="BOOK_Nansen_1897_Farthest_North_II"> (Nansen 1897, příloha Sverdrupovy zprávy)</SourceLink>
      </p>
      <p>
        Hlavním místem tohoto odtoku je Framský průliv mezi Grónskem a Špicberky.
        Významnou kvantitativní zkoušku přinesla rekonstrukce Larse Smedsruda a kolegů z roku 2017, která spojila osm desetiletí údajů.
        Zkoušíme zde změnu původně vyrovnané roční bilance. Pokud se růst, tání ani přísun nezmění a nový úbytek způsobuje větší odvoz,
        musí přes průliv přibývat odvážený objem.
        Větší plocha tenčích ker tuto podmínku sama nesplňuje.
        <SourceLink id="DOI_10_5194_tc_11_65_2017"> (Smedsrud a kol. 2017)</SourceLink>
      </p>
      <Graphic name="pohyb-a-vyvoz" alt="Pohled na kry unášené mezi Grónskem a Špicberky. Družice sleduje posun a podíl ledu, sonar pod hladinou měří jeho ponořenou část. Zvětšená plocha tenčích ker může nést menší objem."
        tests={[
          { title: "Test 1 · Plocha odnášených ker", prediction: "Zesílení odvozu se má projevit větší plochou ledu překračující průliv.", test: "Spojíme družicový pohyb a koncentraci s rekonstrukcí podle tlaku vzduchu.", result: "Plocha vývozu za roky 1979–2014 rostla přibližně o 6 % za desetiletí." },
          { title: "Test 2 · Objem vyvezeného ledu", prediction: "Nový úbytek původně vyrovnané zásoby vyžaduje při stejném růstu, tání a přísunu větší odvoz objemu.", test: "K pohybu a koncentraci přidáme sonarová měření tloušťky.", result: "Objem za roky 1992–2014 klesal. V hlavní variantě výpočtu přibližně o 27 % za desetiletí." },
        ]}>
        Měřicí uspořádání podle <SourceLink id="DOI_10_5194_tc_11_65_2017">Smedsruda a kol. (2017)</SourceLink> a{" "}
        <SourceLink id="DOI_10_1029_2019jc016039">Spreena a kol. (2020)</SourceLink>.
        Modré šipky ukazují pohyb ledu, zelené prvky měření. Poloha pevnin je schematická.
      </Graphic>

      <h4 id="test-plocha" className={styles.testHeading}>Test 1 · Plocha odnášených ker</h4>
      <p>
        Smedsrudův tým od roku 2004 sledoval shodné útvary na radarových snímcích pořízených s odstupem tří dnů.
        Posun ker převedl na rychlost, spojil s <Link href="/metody/pasivni-mikrovlnna-radiometrie/#koncentrace-ledu">koncentrací ledu z mikrovlnného záření</Link> a sečetl plochu překračující 79° severní šířky.
        Starší část řady od roku 1935 dopočítal ze vztahu pohybu k rozdílu tlaku vzduchu mezi břehy průlivu.
        Překryv s družicemi umožnil tento vztah ověřit. Starší hodnoty jsou tedy rekonstrukcí, nikoli radarovým měřením.
        <SourceLink id="DOI_10_5194_tc_11_65_2017"> (Smedsrud a kol. 2017, oddíl 2)</SourceLink>
      </p>
      <p>
        Za celé období 1935–2014 nevyšel průkazný dlouhodobý trend. V úseku <strong>1979–2014 však plocha vývozu rostla přibližně o 6 % za desetiletí</strong>,
        nejsilněji od března do srpna. Procentní trend vyjadřuje desetiletou změnu vzhledem k průměrnému vývozu.
        Tento výsledek podporuje význam pohybu pro proměnu ledové pokrývky.
        Předpověď o úbytku zásoby ale ještě neověřuje, protože v součtu chybí tloušťka.
        <SourceLink id="DOI_10_5194_tc_11_65_2017"> (Smedsrud a kol. 2017, obr. 5)</SourceLink>{" "}
        <SourceLink id="DOI_10_1594_pangaea_868944">Měsíční rekonstrukce 1935–2014</SourceLink> je veřejná.
      </p>

      <h4 id="test-objem" className={styles.testHeading}>Test 2 · Objem vyvezeného ledu</h4>
      <p>
        Gunnar Spreen s kolegy v roce 2020 spojil družicové údaje se sonary ukotvenými pod ledem.
        Zvukové odrazy určují ponor, tedy ponořenou část ledu. Celkovou tloušťku z ní odvodili z rovnováhy tíhy a vztlaku.
        Mezi měřidly tloušťku odhadli plynulým propojením naměřených hodnot. Mimo jejich síť použili typický pokles tloušťky směrem od Grónska.
        Součet součinů tloušťky, zaledněného podílu a pohybu přes průřez pak dává vyvezený objem.
        <Link href={`${observation}#vyvoz-ledu`}> Měření vývozu a jejich mezery</Link> popisuje pozorovací článek.
        <SourceLink id="DOI_10_1029_2019jc016039"> (Spreen a kol. 2020, oddíl 2)</SourceLink>
      </p>
      <p>
        V letech <strong>1992–2014 vyvážený objem klesal přibližně o 27 % za desetiletí</strong> v hlavním výpočtu s pohybem podle laboratoře NASA Jet Propulsion Laboratory, zkráceně JPL.
        I zde je procentní změna vztažena k průměrnému vývozu, tentokrát objemovému.
        Při dalších dvou zpracováních pohybu vyšlo 38 a 44 %, přičemž druhé z nich neobsahuje letní měsíce.
        Jde o rozdíly metod a pokrytí, nikoli interval spolehlivosti.
        Řady sdílejí sonarovou tloušťku a část družicových vstupů, takže nejsou třemi nezávislými měřeními.
        Všechny však dávají pokles. Hlavní příčinou tohoto poklesu vývozu bylo tenčení odnášených ker.
        <SourceLink id="DOI_10_1029_2019jc016039"> (Spreen a kol. 2020, oddíl 3.3)</SourceLink>
      </p>
      <p>
        <strong>Rostoucí odvoz objemu Framským průlivem tedy dlouhodobý úbytek zásoby v tomto období nevysvětluje.</strong>
        Vývoz sám nezmizel a jeho výkyvy mohly přispět k malému letnímu pokryvu v jednotlivých letech.
        Také rozvolnění ker může podpořit pozdější tání. Tento další účinek už potřebuje přísun energie, který ověříme v následujícím příběhu.
        <SourceLink id="DOI_10_1029_2019jc016039"> (Spreen a kol. 2020, oddíly 3.4–4)</SourceLink>
      </p>
    </HypothesisStory>

    <HypothesisStory id="energie-a-tani" number={2} title="Oteplování mění bilanci růstu a tání">
      <p>
        Fyzikální základ lze ověřit v laboratoři: roztavení známé hmotnosti ledu spotřebuje určité množství tepla.
        Nathan Osborne v roce 1939 přepočítal čtyři soubory měření tepla spotřebovaného při tání. Pro čistý led při bodu tání odpovídá výsledek přibližně
        <strong> 334 kilojoulům na kilogram</strong>. Dodaná energie se při tání spotřebovává na změnu skupenství.
        Pro slaný mořský led je tento převod přiblížením, protože obsahuje také kapsy koncentrované slané vody a jeho vlastnosti závisí na teplotě.
        <SourceLink id="DOI_10_6028_jres_023_043"> (Osborne 1939</SourceLink>,{" "}
        <SourceLink id="DOI_10_1029_jc076i006p01550">Maykut a Untersteiner 1971)</SourceLink>
      </p>
      <p>
        Gary Maykut a Norbert Untersteiner v roce 1971 sestavili podrobný časově proměnný výpočet ledu a sněhu nad ním.
        Vedení tepla vrstvou spojili se zářením, výměnou se vzduchem a teplem z oceánu.
        Při předepsaných podmínkách centrální Arktidy získali průměrnou rovnovážnou tloušťku 2,88 m a povrchové tání 0,40 m za rok,
        blízké tehdejším terénním údajům. Šlo o idealizovaný sloupec ledu bez vodorovného pohybu, nikoli předpověď dnešního arktického průměru.
        Model vyjasnil testovatelnou vazbu: změna přenosu energie musí vést ke změně růstu, tání nebo vnitřní teploty ledu.
        <SourceLink id="DOI_10_1029_jc076i006p01550"> (Maykut a Untersteiner 1971)</SourceLink>
      </p>
      <Graphic name="energie-a-rust" alt="Řez plovoucí krou. V zimě odvádí vedení teplo vzhůru a led může přirůstat zespodu. V létě sluneční záření ohřívá odkrytou vodu, která dodává teplo spodnímu okraji. Bóje sleduje horní a dolní povrch, teplotní řetězec vnitřek ledu a družice okolní koncentraci."
        tests={[
          { title: "Test 3 · Energie a tání u bójí", prediction: "Větší ohřev vody má doprovázet větší spodní tání. Jeho energetický nárok lze vypočítat z úbytku ledu.", test: "Porovnáme sedm bójí z léta 2008 s odhadem slunečního ohřevu okolní vody.", result: "Spodní tání činilo 0,16 až 1,77 m. Studie uvádí korelaci 0,94, přepočet její tabulky dává 0,98." },
          { title: "Test 4 · Příčiny dlouhodobé změny", prediction: "Pokud rozhoduje lidské oteplování, samotné přirozené vlivy nevystihnou pozorovaný pokles během roku.", test: "Porovnáme plochu ledu 1979–2019 s výpočty přírodních a lidských vlivů.", result: "Analýza rozlišila příspěvek skleníkových plynů ve všech měsících u všech tří pozorovacích produktů." },
        ]}>
        Přenosy podle <SourceLink id="DOI_10_1029_jc076i006p01550">Maykuta a Untersteinera (1971)</SourceLink> a měření podle{" "}
        <SourceLink id="DOI_10_3189_172756411795931714">Peroviche a kol. (2011)</SourceLink>.
        Oranžové šipky představují energii, modré růst nebo ústup ledu, zelené měřidla. Dvě poloviny zachycují odlišná roční období.
      </Graphic>

      <h4 id="test-boje" className={styles.testHeading}>Test 3 · Energie a tání u bójí</h4>
      <p>
        Donald Perovich a kolegové sledovali v létě 2008 sedm bójí na rovném víceletém ledu, převážně v západní Arktidě.
        Akustická měřidla zaznamenávala polohu horního a spodního povrchu, řetězec čidel teplotu uvnitř.
        Tím šlo odlišit povrchové tání od spodního. Pokud spodní tání významně zásobuje sluneční ohřev odkryté vody,
        mělo by jej být více tam, kde voda přijímá více energie.
        <SourceLink id="DOI_10_3189_172756411795931714"> (Perovich a kol. 2011)</SourceLink>
      </p>
      <p>
        Přísun sluneční energie autoři odhadli z družicového podílu otevřené vody a z meteorologické reanalýzy,
        která spojuje měření s fyzikálním výpočtem počasí. Její záření opravili podle starší reanalýzy s lepším popisem oblačnosti.
        Pohlcenou energii sečetli v buňkách 25 × 25 km. Šlo o odhad vstupu do vody mezi krami,
        nikoli o přímé měření veškerého tepla proudícího k bóji.
        <SourceLink id="DOI_10_3189_172756411795931714"> (Perovich a kol. 2011, rovnice 1)</SourceLink>
      </p>
      <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Měření sedmi bójí a odhad energie, tabulka posuvná do stran">
        <table className={styles.budgetTable}>
          <caption>Léto 2008, všech sedm bójí. Energie tání je přepočet úbytku ledu. Sluneční vstup je samostatný odhad na metr čtvereční celé okolní buňky. MJ znamená milion joulů.</caption>
          <thead><tr><th scope="col">Bóje</th><th scope="col">Spodní tání (m)</th><th scope="col">Energie spodního tání (MJ/m²)</th><th scope="col">Sluneční vstup do vody (MJ/m²)</th></tr></thead>
          <tbody>
            <tr><th scope="row">1</th><td>0,80</td><td>240</td><td>390</td></tr>
            <tr><th scope="row">2*</th><td>1,77</td><td>532</td><td>640</td></tr>
            <tr><th scope="row">3</th><td>0,46</td><td>138</td><td>244</td></tr>
            <tr><th scope="row">4</th><td>0,21</td><td>63</td><td>151</td></tr>
            <tr><th scope="row">5</th><td>0,16</td><td>48</td><td>131</td></tr>
            <tr><th scope="row">6</th><td>0,69</td><td>207</td><td>240</td></tr>
            <tr><th scope="row">7</th><td>0,51</td><td>153</td><td>193</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Hodnoty pocházejí z tabulky 1 studie a z jejího <SourceLink id="DOI_10_1594_pangaea_817713">veřejného datového přepisu</SourceLink>.
        *Bóje 2 v Beaufortově moři přestala měřit před úplným roztáním kry. Její úbytek je proto neúplný záznam sezony.
        Tabulka neuvádí intervaly nejistoty jednotlivých hodnot a sedm míst nepředstavuje plošný průměr Arktidy.
        <Link href={`${observation}#boje-a-tani`}> Podrobnosti měření</Link> zůstávají v pozorovacím článku.
      </p>
      <p>
        Energetický přepočet lze zkontrolovat na bóji 5: 0,16 m spodního tání při použité hustotě 900 kg/m³
        znamená 144 kg ledu na metr čtvereční. Při 334 kJ/kg vychází přibližně <strong>48 MJ/m²</strong>.
        To je množství energie potřebné k naměřenému tání, nikoli další nezávisle změřený tepelný tok.
        Stejný postup používá původní práce. <a href={`${media}/vypocty.mjs`}>Zveřejněný výpočet</a> přepočítá všech sedm řádků.
      </p>
      <p>
        Korelace vyjadřuje, nakolik se dvě veličiny mění společně. Hodnota blízká jedné zde znamená, že větší sluneční vstup doprovází větší tání.
        Studie uvádí mezi slunečním vstupem do vody a energií spodního tání korelaci <strong>0,94</strong>.
        Náš přepočet jejích sedmi tabulkových řádků dává <strong>0,98</strong>. Dostupné podklady rozdíl nevysvětlují.
        Obě hodnoty znamenají silnou společnou změnu napříč místy, nejde však o přesnou reprodukci publikovaného koeficientu.
        Vztah podporuje účast slunečního ohřevu vody, ale nezměří podíl každého zdroje tepla.
        U povrchového tání byla souvislost se slunečním vstupem podstatně slabší, s korelací 0,38.
        Obě výsledné vazby proto neopravňují nahrazovat celou energetickou bilanci jediným slunečním členem.
        <SourceLink id="DOI_10_3189_172756411795931714"> (Perovich a kol. 2011, obr. 3)</SourceLink>
      </p>

      <h4 id="test-priciny" className={styles.testHeading}>Test 4 · Příčiny dlouhodobé změny</h4>
      <p>
        Měření bójí ověřuje místní fyzikální cestu. Samo neurčí příčinu několika desetiletí úbytku.
        Yeon-Hee Kim s kolegy v roce 2023 porovnala měsíční <strong>plochu ledu za roky 1979–2019</strong>
        ze tří družicových produktů s deseti klimatickými modely z mezinárodního porovnání CMIP6.
        <SourceLink id="DOI_10_25592_uhhfdm_8559"> Veřejný soubor použitých měsíčních ploch</SourceLink> uchovává jednotlivé produkty odděleně.
        Zkoušela výpočty se všemi vlivy, se skleníkovými plyny, s aerosoly, tedy drobnými částicemi ve vzduchu, a se samotnými změnami Slunce a sopečné činnosti.
        Pokud lidské oteplování přispívá, měla by jeho časová odezva v pozorování zůstat rozlišitelná i po započtení ostatních vlivů a kolísání klimatu.
        <SourceLink id="DOI_10_1038_s41467_023_38511_8"> (Kim a kol. 2023)</SourceLink>
      </p>
      <p>
        Autoři nejprve zprůměrovali výsledky různých realizací každého modelu a potom modely mezi sebou.
        Tak potlačili náhodný průběh jednotlivých let a získali očekávaný vývoj při jednotlivých příčinách.
        Potom hledali, kolikrát je potřeba jednotlivé příspěvky zvětšit nebo zmenšit, aby jejich součet nejlépe odpovídal pozorování.
        Přirozené kolísání odhadli z 516 úseků dlouhých 41 let z kontrolních simulací 38 modelů.
        V nich se nemění vnější podmínky, například složení atmosféry odpovídající době před průmyslovou érou.
        Polovinu úseků použili k výpočtu a druhou ke kontrole, zda odchylky zbývající po přizpůsobení odpovídají očekávanému kolísání.
        <SourceLink id="DOI_10_1038_s41467_023_38511_8"> (Kim a kol. 2023, Methods)</SourceLink>
      </p>
      <p>
        Rozhodující složku pro skleníkové plyny, označenou ve studii GHG+ podle anglického greenhouse gases,
        autoři získali odečtením odezvy na aerosoly a přírodní vlivy od výpočtu se všemi vlivy.
        Obsahuje proto také ozon a změny využití půdy. Není to samostatný odhad účinku oxidu uhličitého.
        <SourceLink id="DOI_10_1038_s41467_023_38511_8"> (Kim a kol. 2023, Methods)</SourceLink>
      </p>
      <p>
        Příspěvek skleníkových plynů vyšel rozlišitelný <strong>ve všech dvanácti měsících u všech tří produktů</strong>
        a vysvětloval převážnou část poklesu. Celý 90% interval odhadnutého násobku tohoto příspěvku ležel nad nulou,
        takže podle zvoleného statistického testu k vysvětlení pozorování nestačily ostatní vlivy.
        Kontrola zbývajícího kolísání prošla pro všechny měsíce.
        Modely však velikost úbytku v průměru podhodnocovaly, zejména v teplé části roku.
        Výsledek podporuje příčinný vliv, nikoli dokonalou shodu modelu s každým rokem.
        <SourceLink id="DOI_10_1038_s41467_023_38511_8"> (Kim a kol. 2023, obr. 1–3)</SourceLink>
      </p>
    </HypothesisStory>

    <h2 id="jak-mechanismus-funguje">Jak vznik, tání a pohyb mění zásobu</h2>
    <p>
      Rostoucí vývoz objemu neobstál jako samostatné vysvětlení zkoumaného dlouhodobého úbytku.
      Měření tání a rozbor klimatických příčin podporují změnu tepelné bilance v oteplujícím se klimatu.
      Pohyb a tání proto spojíme v jednom fyzikálním popisu: led přibývá zamrzáním, ubývá táním a přechází přes hranice oblasti.
      <SourceLink id="DOI_10_1029_2019jc016039"> (Spreen a kol. 2020</SourceLink>,{" "}
      <SourceLink id="DOI_10_1038_s41467_023_38511_8">Kim a kol. 2023)</SourceLink>
    </p>
    <h3 id="rust-v-zime">V zimě musí teplo odcházet</h3>
    <p>
      Mořská voda nejprve vychladne k bodu mrznutí, který sůl posouvá pod 0 °C.
      Při vzniku ledu se uvolňuje teplo, a další zamrzání proto vyžaduje jeho odvod.
      Led na spodním okraji roste, pokud vedení vzhůru odnáší více tepla, než přivádí oceán.
      Za stejných ostatních podmínek teplejší vzduch oslabí odvod tepla z povrchu a zbrzdí růst ledu.
      Tenká vrstva za jinak stejných podmínek vede teplo snáze než silná, a může proto rychleji dorůstat.
      Sníh tento přenos tlumí. Zimní dohánění tloušťky je stabilizující účinek, ne záruka úplné náhrady letních ztrát.
      <SourceLink id="DOI_10_1029_jc076i006p01550"> (Maykut a Untersteiner 1971)</SourceLink>
    </p>
    <h3 id="tani-v-lete">V létě energie přichází shora i z vody</h3>
    <p>
      Povrch přijímá a odráží sluneční záření, vyměňuje tepelné záření s atmosférou a teplo i vodní páru se vzduchem.
      Zespodu dodává teplo oceán. Část dostupné energie nejprve ohřívá studený led, další může způsobit tání.
      Sníh a světlý led odrážejí více slunečního záření než tmavá voda.
      Když se otevřou mezery mezi krami, voda může přijmout více energie a podpořit další tání.
      Tato zesilující vazba vyžaduje sluneční záření, v polární noci stejnou cestou nepůsobí.
      Přibývání energie v atmosféře a oceánu tak může současně brzdit zimní obnovu ledu a zvyšovat letní ztráty.
      <SourceLink id="DOI_10_1029_jc076i006p01550"> (Maykut a Untersteiner 1971</SourceLink>,{" "}
      <SourceLink id="DOI_10_3189_172756411795931714">Perovich a kol. 2011)</SourceLink>
    </p>
    <h3 id="bilance-objemu">Bilance objemu drží oba procesy pohromadě</h3>
    <p>
      Pro vybranou oblast a stejné období zapíšeme změnu objemu jako součet čtyř příspěvků.
      <InlineMath tex="\Delta V" /> je rozdíl mezi objemem na konci a na začátku období.
      <InlineMath tex="G" /> je objem nově vzniklého ledu, <InlineMath tex="M" /> objem roztátého ledu,
      <InlineMath tex="I" /> přísun a <InlineMath tex="E" /> odsun přes hranice. Všechny členy jsou například v km³ za zvolený rok.
      Zjednodušení zanedbává změny hustoty a menší příspěvky, například přímý přechod ledu ve vodní páru.
    </p>
    <Equation tex={String.raw`\Delta V = G-M+I-E`} />
    <p>
      Stlačení a vršení ker přerozdělí tloušťku uvnitř oblasti, samo však ledovou hmotu neodstraní.
      Odvoz přes hranici sníží místní zásobu i bez místního tání. Změna větru navíc otevírá vodu nebo přesouvá led do teplejšího prostředí,
      a tím ovlivňuje další členy bilance. Proto „pohyb“ a „teplo“ nelze v přírodě úplně oddělit.
      <SourceLink id="DOI_10_1029_2019jc016039"> (Spreen a kol. 2020</SourceLink>,{" "}
      <SourceLink id="DOI_10_5194_tc_11_65_2017">Smedsrud a kol. 2017)</SourceLink>
    </p>

    <h2 id="nejistoty">Co zůstává nejisté</h2>
    <p>
      Jednotlivé roky a oblasti výrazně mění vítr, oceánské proudy, sníh a oblačnost.
      Nejistota jejich podílů je větší než nejistota toho, že Arktida dlouhodobě ztrácí led a že k tomu významně přispívá lidské oteplování.
      <SourceLink id="DOI_10_1017_9781009157896_011"> (IPCC 2021, oddíl 9.3)</SourceLink>
    </p>
    <details className="article-details">
      <summary>Meze měření a přisouzení příčin</summary>
      <p>
        Sonary nepokrývají celý průliv a v některých letech chybějí měsíce. Odhad vývozu tedy závisí na doplnění prostorových mezer.
        Přímé měření rychlosti akustickými proudoměry v letech 2012–2014 bylo v průměru rychlejší než družicový odhad.
        Absolutní vývoz tak mohl být podhodnocen. Autoři nenašli doklad, že by tato odchylka obracela znaménko trendu,
        krátké kontrolní období ale nemůže zaručit neměnnost chyby v celém záznamu.
        <SourceLink id="DOI_10_1029_2019jc016039"> (Spreen a kol. 2020, oddíl 3.6)</SourceLink>
      </p>
      <p>
        Bóje měří konkrétní kru, zatímco odhad slunečního ohřevu průměruje okolní buňku s vodou i ledem.
        Oba energetické údaje proto nelze beze zbytku odečíst a zbytek prohlásit za teplo uložené v oceánu.
        Výpočet nezahrnul záření procházející ledem a voda může teplo přinášet i odnášet.
        Výsledný vztah také není důkazem, že sluneční ohřev sám vysvětluje dlouhodobý úbytek celé Arktidy.
        <SourceLink id="DOI_10_3189_172756411795931714"> (Perovich a kol. 2011)</SourceLink>
      </p>
      <p>
        Přisouzení příčin závisí na věrnosti modelových odezev a odhadu přirozeného kolísání.
        Statistické přizpůsobení velikosti odezvy zlepšuje shodu s daty, není však nezávislou předpovědí těchto dat.
        Kontrola zbytků zkouší, zda po odečtení odhadnutých vlivů nezůstává další nevysvětlená změna.
        Pozorovací produkty OSI SAF, NASA Team a Bootstrap zčásti zpracovávají stejné družice.
        Jejich shoda omezuje závislost na algoritmu, ale netvoří tři nezávislé přístrojové důkazy.
        Výpočty se všemi vlivy končí historickým zadáním v roce 2014. Pro roky 2015–2019 je autoři prodloužili scénářem SSP2-4.5,
        tedy jednou z předepsaných variant dalšího vývoje emisí.
        Zde používáme historickou část práce Kimové a kolegů. Její výhled budoucího léta bez ledu je odlišnou úlohou.
        <SourceLink id="DOI_10_1038_s41467_023_38511_8"> (Kim a kol. 2023)</SourceLink>
      </p>
    </details>
    <h2 id="dalsi-overeni">Co by vysvětlení oslabilo</h2>
    <p>
      Výklad by vyžadoval revizi, kdyby úplnější měření všech výstupních průlivů ukázalo růst odváženého objemu dostatečný k vysvětlení úbytku
      při nezměněném růstu, tání a přísunu. Stejně důležitý by byl opakovaný nesoulad mezi změřenými tepelnými toky a změnami ledu
      po započtení pohybu. Přisouzení dlouhodobé změny by oslabilo zjištění, že modely soustavně podceňují přirozené kolísání natolik,
      že vysvětlí pozorovaný vývoj bez rostoucího působení skleníkových plynů.
      Jde o konkrétní možnosti další kontroly, nikoli o výsledky dosavadních testů.
    </p>
    <div className="article-observation-summary" id="zaver">
      <p className="eyebrow">Závěr</p>
      <p>
        Arktický mořský led ubývá tehdy, když jeho růst a přísun nestačí vyrovnávat tání a odsun.
        Větší vyvážená plocha ker sama nedokazuje větší ztrátu objemu.
        Ve Framském průlivu vyvážený objem v letech 1992–2014 klesal, takže zesilující odvoz zásoby nevysvětluje dlouhodobý úbytek v tomto období.
        Měření bójí potvrzuje tání zespodu a jeho vazbu na ohřev vody. Rozbor let 1979–2019 podporuje dominantní příspěvek skleníkových plynů k poklesu plochy ledu během celého roku.
        Vítr a oceánské proudy zůstávají důležité pro rozmístění ledu, jeho vývoz a odlišný průběh jednotlivých let.
      </p>
    </div>
    <h2 id="prameny">Prameny, data a schémata</h2>
    <p>Citované studie mají veřejný plný text. Datové soubory rozlišují odvozené ukazatele od původních měření a modelových výsledků.</p>
    <ul>
      <li><SourceLink id="BOOK_Nansen_1897_Farthest_North_II">Nansen 1897, svazek II</SourceLink>: původní Sverdrupova zpráva o driftu Framu, zejména příloha a třetí léto.</li>
      <li><SourceLink id="DOI_10_5194_tc_11_65_2017">Smedsrud a kol. 2017</SourceLink> a <SourceLink id="DOI_10_1594_pangaea_868944">měsíční data 1935–2014</SourceLink>: plocha vývozu, rekonstrukce a její kontrola.</li>
      <li><SourceLink id="DOI_10_1029_2019jc016039">Spreen a kol. 2020</SourceLink> a <SourceLink id="DOI_10_21334_npolar_2020_696b80db">veřejná řada objemového vývozu</SourceLink>: sonary, pohyb, nejistoty a měsíční výsledky 1992–2014.</li>
      <li><SourceLink id="DOI_10_6028_jres_023_043">Osborne 1939</SourceLink>: laboratorní teplo tání. <SourceLink id="DOI_10_1029_jc076i006p01550">Maykut a Untersteiner 1971</SourceLink>: fyzikální model růstu a tání ledu.</li>
      <li><SourceLink id="DOI_10_3189_172756411795931714">Perovich a kol. 2011</SourceLink> a <SourceLink id="DOI_10_1594_pangaea_817713">tabulka v PANGAEA</SourceLink>: sedm bójí v létě 2008. Převzaté údaje CC BY 3.0, samostatně <a href={`${media}/perovich-2011-tabulka.tsv`}>tabulka ke stažení</a>.</li>
      <li><SourceLink id="DOI_10_1038_s41467_023_38511_8">Kim a kol. 2023</SourceLink> a <SourceLink id="DOI_10_25592_uhhfdm_8559">UHH Sea Ice Area Product, verze 2019_fv0.01</SourceLink>: historické přisouzení příčin. Studie odkazuje také na modelová data CMIP6 a veřejný kód analýzy.</li>
      <li><SourceLink id="DOI_10_1088_1748_9326_aae3ec">Kwok 2018</SourceLink> a <SourceLink id="DOI_10_25923_mmxf_0r86">Meier a kol. 2025</SourceLink>: pozorované změny tloušťky a rozsahu.</li>
      <li><SourceLink id="DOI_10_1017_9781009157896_011">IPCC 2021, kapitola 9</SourceLink>: širší zhodnocení mořského ledu a nejistot.</li>
      <li><SourceLink id="MEDIA_SEA_ICE_MECHANISMS_2026">Podklady schémat a výpočtu</SourceLink>: původ grafiky, licence, reprodukční postup a nalezené rozdíly proti číslům v textu studie.</li>
    </ul>
  </div></article>;
}
