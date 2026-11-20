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
    prediction: "Při původní rovnováze a stejném růstu, tání i přísunu musí nový úbytek provázet větší vývoz objemu.",
    test: "Ve Framském průlivu sledujeme vývoz podle družic. Pro odhad objemu přidáme měření tloušťky.",
    observation: "Plocha vyvezeného ledu v letech 1979–2014 rostla. Vyvážený objem v letech 1992–2014 klesal.",
    verdict: "Růst objemového vývozu se ve Framském průlivu nepotvrdil",
    explanation: "Vývoz ovlivňuje množství ledu v jednotlivých letech. Během měření objemu průlivem procházely stále tenčí kry.",
    state: "insufficient",
  },
  {
    id: "energie-a-tani", name: "Oteplování mění bilanci růstu a tání",
    prediction: "Kde voda pohltí víc sluneční energie, má zespodu odtávat víc ledu. Pokud k dlouhodobému úbytku výrazně přispívá lidské oteplování, má být rozlišitelný účinek skleníkových plynů.",
    test: "U bójí srovnáme tání s odhadem ohřevu vody. Změnu plochy ledu za několik desetiletí porovnáme s výpočty pro různé příčiny oteplování.",
    observation: "U bójí odtávalo zespodu víc ledu tam, kde odhad ukázal větší ohřev okolní vody. V letech 1979–2019 se vliv skleníkových plynů podařilo rozlišit ve všech měsících.",
    verdict: "Změnu růstu a tání podporují oba testy",
    explanation: "Bóje ukázaly jednu z cest letního tání. Srovnání s modely přisoudilo většinu dlouhodobého poklesu plochy skleníkovým plynům.",
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
      Na konci léta zabírá arktický mořský led menší území a je tenčí než dřív.
      Podle amerického Národního centra pro data o sněhu a ledu se jeho zářijový rozsah v letech 1979–2025 zmenšoval v průměru o 76 100 km² ročně.
      V šesti srovnávaných oblastech byl led na konci sezony tání v letech 2011–2018 přibližně o dva metry tenčí než v letech 1958–1976.
      Jakou roli v těchto <Link href={`${observation}#pozorovani`}>pozorovaných změnách</Link> hraje odnášení ker a jakou jejich růst a tání?
      <SourceLink id="DOI_10_25923_mmxf_0r86"> (Meier a kol. 2025</SourceLink>,{" "}
      <SourceLink id="DOI_10_1088_1748_9326_aae3ec">Kwok 2018)</SourceLink>
    </p>
    <p>
      Vítr může natlačit kry k sobě a zmenšit tak území, na němž se led vyskytuje, i když žádný neroztaje.
      <strong> Rozsah ledu</strong> se na družicové mapě počítá ze všech polí pokrytých alespoň z 15 % ledem.
      Pole pokryté z poloviny se do rozsahu započítá celé, do <strong>plochy ledu</strong> jen z poloviny.
      Pro odhad <Link href={`${observation}#objem`}>objemu ledu</Link> v kilometrech krychlových potřebujeme znát i jeho tloušťku.
    </p>

    <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="sea-ice-hypotheses-caption"
      context={<p>Vítr a proudy odnášejí kry, zatímco na nich přimrzá nebo odtává led. Porovnání zjišťuje, který z těchto dějů se změnil natolik, aby vysvětlil dlouhodobý úbytek v Arktidě.</p>}
      caption={<>Srovnání vývozu ledu, letního tání a příčin dlouhodobého úbytku v Arktidě.</>} />

    <h2 id="pribehy">Jak se vysvětlení ověřovala</h2>
    <HypothesisStory id="silnejsi-vyvoz" number={1} title="Úbytek objemu způsobuje rostoucí vývoz ledu">
      <p>
        Při výpravě v letech 1893–1896 unášel loď Fram led, v němž zamrzla. Kapitán Otto Sverdrup zaznamenal,
        jak se loď i s ledem někdy posouvala vpřed a jindy se vracela. Vítr a proudy tak mohou přemístit i mohutné kry,
        které by na místě vydržely bez roztání.
        <SourceLink id="BOOK_Nansen_1897_Farthest_North_II"> (Nansen 1897, příloha Sverdrupovy zprávy)</SourceLink>
      </p>
      <p>
        Hlavní cestou ledu z Arktidy je Framský průliv mezi Grónskem a Špicberky.
        Představme si rok, kdy se přírůstky a ztráty ledu vyrovnávaly. Pokud se od té doby nezměnilo zamrzání, tání ani přísun,
        nový úbytek by musel vzniknout tím, že z Arktidy odchází větší objem ledu.
        Schéma ukazuje, proč na tloušťce záleží. Dvě kry mohou zabírat stejnou plochu, ale pokud je jedna o polovinu tenčí, nese také jen polovinu objemu.
        <SourceLink id="DOI_10_5194_tc_11_65_2017"> (Smedsrud a kol. 2017)</SourceLink>
      </p>
      <Graphic name="pohyb-a-vyvoz" alt="Pohled na kry unášené mezi Grónskem a Špicberky. Družice sleduje posun a podíl ledu, sonar pod hladinou měří jeho ponořenou část. Zvětšená plocha tenčích ker může nést menší objem."
        tests={[
          { title: "Test 1 · Plocha odnášených ker", prediction: "Při stejné tloušťce by většímu odvozu odpovídala větší plocha.", test: "Družice sledují, kolik je mezi krami vody a kam se kry posouvají.", result: "Plocha vývozu v letech 1979–2014 rostla." },
          { title: "Test 2 · Objem vyvezeného ledu", prediction: "Průlivem prochází větší objem ledu.", test: "Sonary pod ledem dodají údaj potřebný k výpočtu tloušťky.", result: "V letech 1992–2014 vyvážený objem klesal." },
        ]}>
        Měřicí uspořádání podle <SourceLink id="DOI_10_5194_tc_11_65_2017">Smedsruda a kol. (2017)</SourceLink> a{" "}
        <SourceLink id="DOI_10_1029_2019jc016039">Spreena a kol. (2020)</SourceLink>.
        Modré šipky ukazují pohyb ledu, zelené prvky měření. Poloha pevnin je schematická.
      </Graphic>

      <h4 id="test-plocha" className={styles.testHeading}>Test 1 · Plocha odnášených ker</h4>
      <p>
        Lars Smedsrud s kolegy v roce 2017 zveřejnil odhad plochy, která průlivem prošla od roku 1935.
        Z dvojic radarových snímků pořizovaných od roku 2004 určili, kam a jak daleko se stejné kry posunuly za tři dny.
        Z posunu spočítali rozlohu pásu, který během té doby překročil 79° severní šířky. Do vývozu započetli jen
        <Link href="/metody/pasivni-mikrovlnna-radiometrie/#koncentrace-ledu"> část tohoto pásu pokrytou ledem</Link>.
        Pro starší roky měli k dispozici rozdíl tlaku vzduchu mezi břehy průlivu. Podle let s oběma druhy údajů odvodili, jak spolu rozdíl tlaku a pohyb ledu souvisejí.
        Tím získali odhad vývozu i pro dobu bez snímků.
        <SourceLink id="DOI_10_5194_tc_11_65_2017"> (Smedsrud a kol. 2017, oddíl 2)</SourceLink>
      </p>
      <p>
        V celém záznamu z let 1935–2014 se jasný dlouhodobý růst ani pokles neprokázal.
        V kratším období <strong>1979–2014 rostla plocha vývozu přibližně o 6 % za desetiletí</strong> vzhledem k průměrnému vývozu v tomto období.
        Růst byl nejsilnější od března do srpna. Abychom zjistili, co větší vyvážená plocha znamenala pro ztrátu zásoby,
        potřebujeme ještě změřit tloušťku ker.
        <SourceLink id="DOI_10_5194_tc_11_65_2017"> (Smedsrud a kol. 2017, obr. 5)</SourceLink>{" "}
        <SourceLink id="DOI_10_1594_pangaea_868944">Měsíční rekonstrukce 1935–2014</SourceLink> je veřejná.
      </p>

      <h4 id="test-objem" className={styles.testHeading}>Test 2 · Objem vyvezeného ledu</h4>
      <p>
        Gunnar Spreen a kolegové v roce 2020 zveřejnili odhad objemu pro roky, kdy už mohli využít sonary ukotvené pod ledem.
        Odraz zvuku ukázal, jak hluboko kry sahaly pod hladinu. Plovoucí kra ponoří právě tak velkou část, aby vytlačila vodu o své vlastní hmotnosti.
        Díky tomu mohli vědci z ponořené části a odhadu hustoty vypočítat celkovou tloušťku.
        Pro každý úsek průlivu vynásobili prošlou plochu ledu jeho tloušťkou a dílčí objemy sečetli.
        <Link href={`${observation}#vyvoz-ledu`}>Pozorování vývozu</Link> ukazuje, kde sonary měřily a jak se doplnily mezery mezi nimi.
        <SourceLink id="DOI_10_1029_2019jc016039"> (Spreen a kol. 2020, oddíl 2)</SourceLink>
      </p>
      <p>
        V letech <strong>1992–2014 klesal vyvážený objem přibližně o 27 % za desetiletí</strong> vzhledem k průměrnému objemovému vývozu.
        Hlavní výpočet použil odhad pohybu od Jet Propulsion Laboratory, pracoviště NASA. Dvě další zpracování pohybu dala pokles
        o 38 a 44 % za desetiletí, druhé bez letních měsíců. Ve všech třech výpočtech se odváželo méně ledu, především proto, že odnášené kry tenčily.
        <SourceLink id="DOI_10_1029_2019jc016039"> (Spreen a kol. 2020, oddíl 3.3)</SourceLink>
      </p>
      <p>
        Silný vývoz mohl přispět k malé letní pokrývce v jednotlivých letech. Za celé sledované období však průlivem odcházelo čím dál méně ledu,
        tedy opačně, než předpokládá hypotéza. Zásoba může ubývat i při slabším vývozu, pokud led pomaleji dorůstá nebo víc taje.
        <SourceLink id="DOI_10_1029_2019jc016039"> (Spreen a kol. 2020, oddíly 3.4–4)</SourceLink>
      </p>
    </HypothesisStory>

    <HypothesisStory id="energie-a-tani" number={2} title="Oteplování mění bilanci růstu a tání">
      <p>
        K přeměně jednoho kilogramu čistého ledu o teplotě tání na vodu je třeba dodat asi <strong>334 kilojoulů</strong>, tedy 334 tisíc joulů.
        Tuto hodnotu získal Nathan Osborne v roce 1939 ze čtyř souborů laboratorních měření. Díky ní lze z množství roztátého ledu vypočítat,
        kolik energie tání spotřebovalo. U mořského ledu se používá jako přibližná hodnota, protože led obsahuje kapsy slané vody a jeho vlastnosti se mění s teplotou.
        <SourceLink id="DOI_10_6028_jres_023_043"> (Osborne 1939</SourceLink>,{" "}
        <SourceLink id="DOI_10_1029_jc076i006p01550">Maykut a Untersteiner 1971)</SourceLink>
      </p>
      <p>
        Gary Maykut a Norbert Untersteiner v roce 1971 zkoumali, jestli lze z přenosu tepla vypočítat, kolik ledu za rok přimrzne a roztaje.
        V modelu ponechali sloupec ledu na místě. Počítali, jak se v průběhu roku mění přísun tepla z oceánu, výměna se vzduchem a záření,
        a jak se teplo šíří ledem a sněhem. Pro tehdejší podmínky centrální Arktidy vyšla roční rovnováha růstu a tání při průměrné tloušťce 2,88 m.
        Z povrchu modelového ledu za rok odtálo 0,40 m. Obě hodnoty byly blízké tehdejším terénním údajům.
        <SourceLink id="DOI_10_1029_jc076i006p01550"> (Maykut a Untersteiner 1971)</SourceLink>
      </p>
      <Graphic name="energie-a-rust" alt="Řez plovoucí krou. V zimě odvádí vedení teplo vzhůru a led může přirůstat zespodu. V létě sluneční záření ohřívá odkrytou vodu, která dodává teplo spodnímu okraji. Bóje sleduje horní a dolní povrch, teplotní řetězec vnitřek ledu a družice okolní koncentraci."
        tests={[
          { title: "Test 3 · Energie a tání u bójí", prediction: "Víc slunečního tepla ve vodě má znamenat víc tání zespodu.", test: "Bóje na letní straně schématu sleduje, ze které strany led odtává.", result: "Víc spodního tání provázel větší odhadovaný ohřev vody." },
          { title: "Test 4 · Příčiny dlouhodobé změny", prediction: "Účinek skleníkových plynů má být rozlišitelný v dlouhodobém úbytku plochy.", test: "Družicová pozorování porovnáme s výpočty pro různé vlivy na klima.", result: "Účinek skleníkových plynů se projevil ve všech měsících." },
        ]}>
        Přenosy podle <SourceLink id="DOI_10_1029_jc076i006p01550">Maykuta a Untersteinera (1971)</SourceLink> a měření podle{" "}
        <SourceLink id="DOI_10_3189_172756411795931714">Peroviche a kol. (2011)</SourceLink>.
        Oranžové šipky představují energii, modré růst nebo ústup ledu, zelené měřidla. Dvě poloviny zachycují odlišná roční období.
      </Graphic>

      <h4 id="test-boje" className={styles.testHeading}>Test 3 · Energie a tání u bójí</h4>
      <p>
        Když slunce ohřívá vodu mezi krami, voda může část tepla předat spodní straně ledu. Kde sluneční energie do vody vstupuje víc,
        čekáme tedy větší úbytek na spodní straně. Donald Perovich a kolegové to zkoumali v létě 2008 u sedmi bójí na rovném víceletém ledu,
        většinou v západní Arktidě. Pomocí zvukových odrazů stanovili, kolik ledu odtálo shora a kolik zespodu.
        Řetězec čidel mezi oběma povrchy měřil teplotu uvnitř ledu.
        <SourceLink id="DOI_10_3189_172756411795931714"> (Perovich a kol. 2011)</SourceLink>
      </p>
      <p>
        K odhadu, kolik sluneční energie přijala voda, potřebovali vědět, kolik záření dopadlo a jak velké byly mezery mezi krami.
        Družice jim daly podíl otevřené vody v každém poli mapy o rozměrech 25 × 25 km. Dopadající záření vzali z reanalýzy,
        tedy z rekonstrukce počasí založené na měřeních a fyzikálním modelu. Odhad záření upravili podle staršího zpracování s lepším popisem oblačnosti.
        Započítali jen energii, která dopadla do otevřené vody a kterou voda neodrazila. Součet za dobu tání vztáhli k celé ploše pole včetně ledu.
        <SourceLink id="DOI_10_3189_172756411795931714"> (Perovich a kol. 2011, rovnice 1)</SourceLink>
      </p>
      <p>
        U bóje 5 odtálo zespodu 0,16 m ledu. Při hustotě 900 kg/m³ použité ve studii ubylo 144 kg ledu na metr čtvereční.
        Když tuto hmotnost vynásobíme 334 kJ/kg potřebnými k tání, vyjde asi <strong>48 MJ/m²</strong>.
        <a href={`${media}/vypocty.mjs`}>Zveřejněný výpočet</a> takto přepočítá všech sedm řádků.
        V pravém sloupci najdeme, kolik energie podle samostatného odhadu přijala okolní voda. U bóje 5 to bylo 131 MJ/m².
        <SourceLink id="DOI_10_3189_172756411795931714"> (Perovich a kol. 2011, rovnice 4 a tabulka 1)</SourceLink>
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
        *Bóje 2 v Beaufortově moři přestala měřit před úplným roztáním kry. Údaj 1,77 m tedy zachycuje jen část sezonního úbytku.
        Všech sedm záznamů je k dispozici ve <SourceLink id="DOI_10_1594_pangaea_817713">veřejném přepisu tabulky studie</SourceLink>.
        Pozorovací článek vysvětluje, <Link href={`${observation}#boje-a-tani`}>jak bóje měří tání</Link>.
      </p>
      <p>
        Voda u některých ker přijala víc sluneční energie a zpravidla u nich také víc ledu odtálo zespodu. Korelace vyjadřuje,
        jak těsně spolu obě hodnoty souvisejí, a v tomto případě je blízko jedné. Studie uvádí <strong>0,94</strong>,
        přepočet sedmi řádků tabulky <strong>0,98</strong>. Dostupné podklady rozdíl nevysvětlují.
        U tání shora byla souvislost s týmž ohřevem slabší, s korelací 0,38. To odpovídá tomu, že teplo z vody působí především na spodní stranu kry.
        <SourceLink id="DOI_10_3189_172756411795931714"> (Perovich a kol. 2011, obr. 3)</SourceLink>
      </p>

      <h4 id="test-priciny" className={styles.testHeading}>Test 4 · Příčiny dlouhodobé změny</h4>
      <p>
        Zkouška u bójí objasnila, jak může ohřev vody způsobit letní tání. Příčinu dlouhodobého úbytku zkoumal v roce 2023 tým Yeon-Hee Kim
        na <strong>měsíční ploše arktického ledu v letech 1979–2019</strong>. Pokud úbytek souvisí s přibýváním skleníkových plynů,
        měl by být jejich účinek rozlišitelný i po započtení jiných vlivů a přirozeného kolísání.
        Tým proto porovnal <SourceLink id="DOI_10_25592_uhhfdm_8559">tři družicová zpracování plochy ledu</SourceLink> s výpočty deseti klimatických modelů
        ze šesté fáze mezinárodního porovnání klimatických modelů (CMIP6), v němž modely dostávají společné zadání.
        <SourceLink id="DOI_10_1038_s41467_023_38511_8"> (Kim a kol. 2023)</SourceLink>
      </p>
      <p>
        Modely počítaly, jak se plocha ledu mění při působení všech zkoumaných vlivů dohromady. V oddělených výpočtech se měnilo
        působení skleníkových plynů, aerosolů, tedy drobných částic ve vzduchu, nebo Slunce a sopečné činnosti.
        Tým zprůměroval průběhy v každém modelu a pak výsledky modelů mezi sebou. Tím potlačil výkyvy jednotlivých let a zvýraznil změny, které nastávaly při stejném zadání.
        Od změny se všemi vlivy odečetl část způsobenou aerosoly a přírodními vlivy. Zbylá složka GHG+ (z anglického <i>greenhouse gases</i>)
        zahrnuje účinek skleníkových plynů spolu se změnami ozonu a využití půdy.
        <SourceLink id="DOI_10_1038_s41467_023_38511_8"> (Kim a kol. 2023, Methods)</SourceLink>
      </p>
      <p>
        Tým hledal, kolikrát každou z vypočtených změn zvětšit nebo zmenšit, aby jejich součet nejlépe odpovídal pozorovanému průběhu.
        Jak velká část odchylek může vzniknout náhodným kolísáním ledu, odhadl z 516 úseků po 41 letech z kontrolních běhů 38 modelů.
        V nich zůstávaly vnější podmínky, například předprůmyslové složení atmosféry, stálé. Polovina úseků pomohla určit příspěvky jednotlivých vlivů.
        Druhá polovina sloužila ke kontrole, zda se odchylky po jejich započtení vejdou do běžného kolísání.
        <SourceLink id="DOI_10_1038_s41467_023_38511_8"> (Kim a kol. 2023, Methods)</SourceLink>
      </p>
      <p>
        Příspěvek skleníkových plynů byl rozlišitelný <strong>ve všech dvanácti měsících u všech tří družicových zpracování</strong>
        a vysvětloval většinu poklesu plochy. Celý 90% interval odhadnutého násobku ležel nad nulou, tedy nad hodnotou,
        při níž by tento vliv z výpočtu vypadl. Ve všech měsících se zbývající odchylky vešly do očekávaného přirozeného kolísání.
        Samotné modely přitom průměrnou velikost úbytku podhodnocovaly, zvlášť v teplé části roku.
        <SourceLink id="DOI_10_1038_s41467_023_38511_8"> (Kim a kol. 2023, obr. 1–3)</SourceLink>
      </p>
    </HypothesisStory>

    <h2 id="jak-mechanismus-funguje">Jak v teplejší Arktidě ubývá ledu</h2>
    <p>
      Objem vyvezený Framským průlivem v letech 1992–2014 klesal, takže úbytek ledu v těchto letech nevysvětlí růst objemového vývozu touto cestou.
      U bójí provázelo silnější tání zespodu větší ohřev okolní vody. Za čtyři desetiletí odpovídal úbytek plochy především účinku skleníkových plynů.
      V teplejším klimatu se mění i zimní růst, protože k zamrzání další vody musí led teplo nejdřív ztratit.
      <SourceLink id="DOI_10_1029_2019jc016039"> (Spreen a kol. 2020</SourceLink>,{" "}
      <SourceLink id="DOI_10_3189_172756411795931714">Perovich a kol. 2011</SourceLink>,{" "}
      <SourceLink id="DOI_10_1038_s41467_023_38511_8">Kim a kol. 2023)</SourceLink>
    </p>
    <h3 id="rust-v-zime">V zimě musí teplo odcházet</h3>
    <p>
      Sůl snižuje bod mrznutí mořské vody pod 0 °C. Když voda dostatečně vychladne a začne mrznout, uvolňuje se teplo.
      Aby mohlo zamrzání pokračovat, musí se uvolněné teplo odvést. Zespodu prochází ledem a případnou vrstvou sněhu k povrchu, odkud uniká do chladného vzduchu.
      Led roste zespodu, pokud nahoru odchází víc tepla, než zespodu dodává oceán. Za stejných ostatních podmínek teplejší vzduch odvod tepla zpomalí.
      Na spodní straně pak přimrzá méně vody.
      <SourceLink id="DOI_10_1029_jc076i006p01550"> (Maykut a Untersteiner 1971)</SourceLink>
    </p>
    <p>
      Přes tenkou vrstvu ledu proniká teplo snáze než přes silnou. Pokud mají dvě kry stejnou sněhovou pokrývku a jsou ve stejných podmínkách,
      ta tenčí může v zimě dorůstat rychleji. Sníh izoluje a odvod tepla zpomaluje. Rychlejší zimní růst tenkých ker může vyrovnat část letních ztrát.
      <SourceLink id="DOI_10_1029_jc076i006p01550"> (Maykut a Untersteiner 1971)</SourceLink>
    </p>
    <h3 id="tani-v-lete">V létě energie přichází shora i z vody</h3>
    <p>
      V létě přijímá povrch ledu část slunečního záření. Se vzduchem si vyměňuje teplo, tepelné záření i vodní páru.
      Na spodní straně může teplo dodávat oceán. Část energie zprvu ohřívá studený led. Když horní nebo spodní strana dosáhne teploty tání,
      další přísun energie může odtávat led z příslušné strany.
      <SourceLink id="DOI_10_1029_jc076i006p01550"> (Maykut a Untersteiner 1971)</SourceLink>
    </p>
    <p>
      Tání může samo zvýšit letní ohřev. Když se mezi krami otevře mezera, tmavá hladina odrazí méně slunečního záření než sníh a světlý led.
      Voda se více ohřeje a přispěje k dalšímu tání zespodu. Tím se může odkrytá plocha ještě zvětšit.
      Tato zpětná vazba funguje, dokud na hladinu dopadá sluneční záření.
      <SourceLink id="DOI_10_3189_172756411795931714"> (Perovich a kol. 2011)</SourceLink>
    </p>
    <h3 id="bilance-objemu">Bilance objemu zahrnuje tání i pohyb</h3>
    <p>
      Led v oblasti přibývá zamrzáním (<InlineMath tex="G" />) a přísunem ker přes její hranici (<InlineMath tex="I" />).
      Ubývá táním (<InlineMath tex="M" />) a vývozem (<InlineMath tex="E" />).
      Všechny čtyři příspěvky vyjádříme v km³ pro tutéž oblast a stejné období, například jeden rok.
      Jejich součet se znaménky udává změnu objemu <InlineMath tex="\Delta V" /> mezi začátkem a koncem období.
      V tomto zjednodušení zanedbáváme změny hustoty a drobné ztráty, například přímý přechod ledu na vodní páru.
    </p>
    <Equation tex={String.raw`\Delta V = G-M+I-E`} />
    <p>
      Když se kry uvnitř oblasti navrší na sebe, mohou být místy silnější a zabírat menší plochu. Množství ledu uvnitř hranic se tím nezmění.
      Teprve pohyb přes hranici přímo změní místní zásobu. Vítr ale může také otevřít mezery mezi krami nebo přenést led do teplejší vody.
      Pohyb tak může změnit i míru tání, která v rovnici vystupuje jako samostatný příspěvek.
      <SourceLink id="DOI_10_1029_2019jc016039"> (Spreen a kol. 2020</SourceLink>,{" "}
      <SourceLink id="DOI_10_5194_tc_11_65_2017">Smedsrud a kol. 2017)</SourceLink>
    </p>

    <h2 id="nejistoty">Co zůstává nejisté</h2>
    <p>
      Kolik ledu v určité oblasti za rok ubude, záleží také na větru, proudech, sněhu a oblačnosti. Jejich vliv se rok od roku mění.
      Podíl těchto vlivů na jednotlivých ztrátách známe méně přesně než dlouhodobý úbytek a roli lidského oteplování v celé Arktidě.
      <SourceLink id="DOI_10_1017_9781009157896_011"> (IPCC 2021, oddíl 9.3)</SourceLink>
    </p>
    <details className="article-details">
      <summary>Meze měření a přisouzení příčin</summary>
      <p>
        V některých letech chybějí měsíce měření a sonary nepokrývaly celý průliv. Mezi sonary autoři odhadli tloušťku propojením naměřených hodnot.
        Mimo jejich dosah použili typický pokles tloušťky směrem od Grónska.
        Tři výpočty vývozu používají stejnou sonarovou tloušťku a část společných družicových vstupů. Rozdíly mezi nimi ukazují, jak volba postupu
        a pokrytí měření ovlivní odhad rychlosti poklesu. Tyto rozdíly proto nelze číst jako interval spolehlivosti jednoho odhadu.
        <SourceLink id="DOI_10_1029_2019jc016039"> (Spreen a kol. 2020, oddíl 3.6)</SourceLink>
      </p>
      <p>
        Akustické proudoměry v letech 2012–2014 ukázaly rychlejší posun ker, než vycházel z družic. Výpočet tak mohl podhodnotit množství vyvezeného ledu.
        Autoři nenašli doklad, že by tato odchylka měnila pokles vývozu v růst. Tři roky kontroly však nestačí k určení, jak se odchylka měnila v celém období.
        <SourceLink id="DOI_10_1029_2019jc016039"> (Spreen a kol. 2020, oddíl 3.6)</SourceLink>
      </p>
      <p>
        Sedm ker u bójí zachycuje místní podmínky a tabulka neudává nejistotu jednotlivých hodnot. Energie tání se vztahuje ke konkrétní kře,
        odhad slunečního ohřevu k okolnímu poli mapy. Pro bilanci tepla v oceánu by oba údaje musely pokrývat stejnou oblast a zahrnout i další toky,
        například záření procházející ledem a teplo přinesené nebo odnesené proudy. Porovnání proto ukazuje souvislost se slunečním ohřevem,
        velikost jeho podílu na celkovém tání z něj nevyčteme.
        <SourceLink id="DOI_10_3189_172756411795931714"> (Perovich a kol. 2011)</SourceLink>
      </p>
      <p>
        Odhad příčin závisí na tom, jak věrně modely zachycují přirozené výkyvy a reakci na jednotlivé vlivy. Velikost příspěvků autoři
        přizpůsobili týmž pozorováním, s nimiž výsledek srovnávají. Samostatná kontrola testuje, zda po tomto přizpůsobení nezůstává odchylka
        přesahující běžné kolísání v modelech. Tři družicová zpracování OSI SAF, NASA Team a Bootstrap používají zčásti stejná měření.
        Jejich shoda ukazuje, že výsledek obstojí při různých postupech zpracování.
        <SourceLink id="DOI_10_1038_s41467_023_38511_8"> (Kim a kol. 2023)</SourceLink>
      </p>
      <p>
        Výpočty se všemi vlivy používají historické zadání do roku 2014. Pro posledních pět let srovnání s družicemi, 2015–2019,
        navazují na toto zadání scénářem SSP2-4.5, tedy předepsanou variantou dalšího vývoje emisí.
        <SourceLink id="DOI_10_1038_s41467_023_38511_8"> (Kim a kol. 2023)</SourceLink>
      </p>
    </details>
    <h2 id="dalsi-overeni">Co by vysvětlení oslabilo</h2>
    <p>
      Větší úlohu vývozu by podpořilo měření ve všech výstupních průlivech, které by doložilo růst vyváženého objemu dostatečný
      k vysvětlení úbytku při stejném růstu, tání a přísunu. Vysvětlení růstu a tání by bylo třeba upravit, kdyby naměřené změny ledu
      opakovaně neodpovídaly množství tepla, které k ledu přichází a odchází, ani po započtení pohybu ker. Přisouzení úbytku skleníkovým plynům
      by oslabil doklad, že přirozené výkyvy samy mohou vysvětlit pozorovaný dlouhodobý pokles.
    </p>
    <div className="article-observation-summary" id="zaver">
      <p className="eyebrow">Závěr</p>
      <p>
        Oteplování mění, kolik ledu v Arktidě přes zimu přimrzne a kolik ho v létě odtaje. Teplejší vzduch zpomaluje odvod tepla potřebný
        k zamrzání. Ohřátá voda zase předává teplo spodní straně ker. Když ani rychlejší zimní dorůstání tenkých ker nevyrovná letní ztráty,
        zbývá méně ledu a kry jsou tenčí.
      </p>
      <p>
        Vítr a proudy dál odnášejí led a ovlivňují průběh jednotlivých let. Ve Framském průlivu však vyvážený objem v letech 1992–2014 klesal,
        hlavně kvůli tenčení ker. Srovnání družicových měření s výpočty přisoudilo většinu poklesu plochy ledu v letech 1979–2019
        působení skleníkových plynů. Jejich příspěvek byl patrný ve všech měsících.
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
