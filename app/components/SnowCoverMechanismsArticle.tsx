import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Equation, InlineMath } from "./Equation";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./SnowCoverMechanismsArticle.module.css";

const media = "/media/snehova-pokryvka-mechanismy";
const observation = "/pozorovani/snehova-pokryvka-a-permafrost/";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "zmena-srazek",
    name: "Úbytek sněhu vysvětlí samotný pokles srážek",
    prediction: "Při stejném podílu sněžení a stejných podmínkách tání má menší zásobu doprovázet menší přísun srážek. Pokud srážky neklesají, toto vysvětlení nestačí.",
    test: "Porovnáme vodu uloženou ve sněhu se zimními srážkami na západě Severní Ameriky. V modelu oddělíme změnu teploty od změny měsíčních úhrnů srážek.",
    observation: "V Kaskádách a vnitrozemských oblastech se zásoba zmenšila výrazněji než srážky. V části oblastí srážky dokonce mírně vzrostly.",
    verdict: "Důležitý vliv, který rozsáhlý úbytek sám nevysvětluje",
    explanation: "Suchá zima může přinést málo sněhu. Pokles celkových srážek však nevysvětluje společný vývoj všech sledovaných oblastí.",
    state: "insufficient",
  },
  {
    id: "teplota-a-tani",
    name: "Oteplování mění podíl sněhu i jeho tání",
    prediction: "V prostředí blízkém bodu tání má častěji pršet a sníh má dříve ztrácet zásobu vody. V dostatečně chladné zimě může větší sněžení tento účinek převážit.",
    test: "Ověříme skupenství srážek na stanicích, výpočet sněhu v horském povodí a dlouhodobé změny v povodích severní polokoule.",
    observation: "Měření potvrzují význam teploty i vlhkosti pro sněžení. Ověřený horský model dává při oteplení kratší sezonu, i když denní tání může zeslábnout.",
    verdict: "Podpořené vysvětlení společně se změnami srážek",
    explanation: "Výsledek určuje počáteční zásoba, podíl sněhu ve srážkách a energie dostupná během sezony. Stejná změna teploty proto nemá všude stejný účinek.",
    state: "supported",
  },
];

type TestPanel = { title: string; prediction: string; test: string; result: string };
function Graphic({ name, alt, tests, children }: { name: string; alt: string; tests: TestPanel[]; children: ReactNode }) {
  return <figure className={`article-figure ${styles.explanatoryFigure}`}>
    <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Schéma sněhové pokrývky, na úzké obrazovce posuvné do stran">
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

export function SnowCoverMechanismsArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Zimní zásoba a jarní úbytek se nemění stejně</h2>
    <p className="article-prose__intro">
      Na arktické pevnině severně od 60° bez Grónska odpovídá trend za roky 1967–2025 zmenšení červnové plochy sněhu přibližně o polovinu.
      Hmotnost sněhu poblíž dubnového maxima se přitom v období 1981–2025 průkazně nezmenšila.
      <Link href={`${observation}#jarni-rozsah-snehu`}> Pozorování sněhové pokrývky</Link> tak ukazují odlišný vývoj zimní zásoby a jarního zániku.
      Jak jej mohou způsobit změny srážek a teploty?
      <SourceLink id="DOI_10_25923_cfhv_c239"> (Mudryk a kol. 2025)</SourceLink>
    </p>
    <p>
      Sněhová pokrývka vzniká, když sněžení doplní více hmoty, než kolik jí odejde odtokem, výparem a odnosem větrem.
      Její výška se může zmenšit i pouhým stlačením sněhu. Pro zásobu proto používáme <strong>vodní hodnotu sněhu</strong>,
      tedy výšku vrstvy vody, kterou sníh obsahuje. Jeden milimetr odpovídá jednomu kilogramu vody na metr čtvereční.
      <Link href="/metody/mereni-vysky-hustoty-a-vodni-hodnoty-snehu/#vyska-a-hustota"> Měření výšky a hustoty</Link> umožňuje obě změny rozlišit.
      Následující testy zkoumají srážky, zásobu a tání zvlášť, protože mapa zasněžené plochy sama příčinu neukáže.
    </p>

    <h2 id="hypotezy">Dvě vysvětlení a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="snow-cover-hypotheses-caption"
      context={<p>Srážky a teplota působí současně. Porovnání má zjistit, které změny jsou k vysvětlení měření potřeba a jak přispívají k téže bilanci sněhu.</p>}
      caption={<>Rozlišovacím znakem je vývoj sněhové zásoby při známém množství srážek. Další testy ověřují skupenství srážek, přísun energie a rozdíly mezi chladnými a teplejšími oblastmi.</>} />

    <h2 id="pribehy">Co rozhodlo mezi vysvětleními</h2>
    <HypothesisStory id="zmena-srazek" number={1} title="Úbytek sněhu vysvětlí samotný pokles srážek">
      <p>
        Suchá zima je přirozeným vysvětlením malé zásoby sněhu: při podobném počasí během tání zůstane menší množství také na jaře.
        Pro rozlišení od vlivu teploty potřebujeme současně měřit srážky i sníh.
        Philip Mote s kolegy v roce 2005 rozšířil předchozí rozbor severozápadu USA na hory západní Severní Ameriky.
        Dlouhodobé sněhové profily tak mohli porovnat se srážkoměry, teploměry a hydrologickým modelem.
        <SourceLink id="DOI_10_1175_bams_86_1_39"> (Mote a kol. 2005)</SourceLink>
      </p>
      <Graphic name="srazky-a-zasoba" alt="Dva zasněžené svahy při stejných podmínkách tání. Menší přísun sněhu vede k menší jarní zásobě. Srážkoměr sleduje přísun vody a odběr sněhového jádra měří zásobu. Jejich srovnání odlišuje suchou zimu od jiných příčin úbytku."
        tests={[{ title: "Test 1 · Srážky a horská zásoba", prediction: "Pokud rozhoduje jen méně srážek, pokles zásoby má doprovázet menší zimní úhrn.", test: "Porovnáme regionální zásobu k 1. dubnu se srážkami od listopadu do března.", result: "Ve vnitrozemí zásoba klesla, přestože srážky mírně vzrostly. Samotný pokles srážek nestačí." }]}>
        Přísun a zásoba podle rozboru <SourceLink id="DOI_10_1175_bams_86_1_39">Moteho a kol. (2005)</SourceLink>.
        Modré značky označují sníh a vodu, oranžové šipky energii pro tání. Hnědá plocha je půda.
      </Graphic>

      <h4 id="test-srazky" className={styles.testHeading}>Test 1 · Srážky a horská zásoba</h4>
      <p>
        <Link href={`${observation}#horske-snehove-zasoby`}>Terénní profily</Link> zachycují vodní hodnotu sněhu kolem 1. dubna.
        Tabulka porovnává dva víceleté průměry. Záporné číslo znamená pokles proti dřívějšímu období.
        Pokud sněhu ubylo i při rostoucích srážkách, vysvětlení samotným úbytkem srážek zde neobstojí.
      </p>
      <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Změny zásoby a srážek, tabulka posuvná do stran">
        <table className={styles.budgetTable}>
          <caption>Změna průměru 1990–1997 proti 1945–1955 v procentech. Zásoba znamená vodní hodnotu sněhu k 1. dubnu, srážky úhrn za listopad až březen.</caption>
          <thead><tr><th scope="col">Oblast</th><th scope="col">Změřená zásoba</th><th scope="col">Zásoba v modelu</th><th scope="col">Srážky</th></tr></thead>
          <tbody>
            <tr><th scope="row">Kaskády</th><td>−29,2 %</td><td>−15,5 %</td><td>−4,6 %</td></tr>
            <tr><th scope="row">Skalnaté hory</th><td>−15,8 %</td><td>−8,8 %</td><td>+0,5 %</td></tr>
            <tr><th scope="row">Kalifornie</th><td>−2,2 %</td><td>−24,6 %</td><td>−1,1 %</td></tr>
            <tr><th scope="row">Vnitrozemí</th><td>−21,6 %</td><td>−18,2 %</td><td>+2,1 %</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        <SourceLink id="DOI_10_1175_bams_86_1_39">Mote a kol. (2005, tabulka 1)</SourceLink> uvádějí tyto odhady bez intervalů nejistoty.
        Měření a model různě zastupují nadmořské výšky a nejvíce se rozcházejí v Kalifornii.
        Procentní změnu srážek proto nemůžeme odečíst od změny zásoby a zbytek připsat teplotě.
        <a href={`${media}/mote-2005-tabulka-1.csv`}> Přepis tabulky</a> zachovává i tento nesoulad.
      </p>
      <p>
        Oddělení vlivů přinesl další výpočet: při měsíčních úhrnech srážek opakovaných každý rok a skutečně se měnící teplotě
        vyšel růst zásoby jen ve 3 % modelových buněk. Jde o řízenou změnu vstupů modelu, nikoli o další terénní měření.
        <strong>Pokles srážek tedy není dostatečným společným vysvětlením.</strong> Zůstává však důležitou příčinou jednotlivých chudých zim.
        Nyní potřebujeme ověřit, jak teplota mění samotný sníh.
        <SourceLink id="DOI_10_1175_bams_86_1_39"> (Mote a kol. 2005, obr. 7)</SourceLink>
      </p>
    </HypothesisStory>

    <HypothesisStory id="teplota-a-tani" number={2} title="Oteplování mění podíl sněhu i jeho tání">
      <p>
        Vliv teploty má dvě fyzikální cesty. Vločky mohou při pádu roztát a voda dopadne jako déšť.
        Sníh, který zůstane na zemi, může později získat energii potřebnou k tání.
        Laboratorní oporu druhé cesty poskytuje měření tepla spotřebovaného na roztavení známé hmotnosti ledu.
        Nathan Osborne v roce 1939 přepočítal čtyři série takových pokusů. Výsledný převod je přibližně <strong>334 kilojoulů na kilogram ledu</strong> při bodu tání.
        <SourceLink id="DOI_10_6028_jres_023_043"> (Osborne 1939)</SourceLink>
      </p>
      <p>
        Tato hodnota určuje množství tání z dodané energie. Sama ještě neříká, kolik energie získá skutečný sníh.
        K tomu musíme znát pohlcené sluneční a tepelné záření, výměnu tepla a vodní páry se vzduchem i přenos tepla z půdy.
        Část energie se spotřebuje na ohřátí sněhu, který má zpočátku teplotu pod bodem tání.
        Výzkum proto postupoval k výpočtům jednotlivých přenosů a jejich porovnání s měřenou sněhovou zásobou.
        <SourceLink id="DOI_10_5194_tc_11_2847_2017"> (Musselman a kol. 2017, oddíl 2)</SourceLink>
      </p>
      <Graphic name="teplota-a-tani" alt="Řez krajinou se třemi zkouškami. Teploměr a pozorovatel rozlišují déšť a sníh. Na zemi přivádí záření a vzduch energii ke sněhu, voda odtéká a měřicí poduška sleduje zásobu. Více povodí umožňuje ověřit rozdíly mezi studenými a teplejšími zimami."
        tests={[
          { title: "Test 2 · Déšť, nebo sníh", prediction: "Při oteplení v přechodném teplotním pásmu má klesat četnost sněžení. Záleží také na vlhkosti.", test: "Porovnáme hlášení skupenství s teplotou a vlhkostí na tisících stanic.", result: "Teplota stejně častého deště a sněhu se mezi stanicemi liší. Jediný práh 0 °C nepostačuje." },
          { title: "Test 3 · Tání v horském povodí", prediction: "Výpočet přírůstků a ztrát má zachytit měřený průběh zásoby. Oteplení může zkrátit sezonu i při pomalejším denním tání.", test: "Nejprve ověříme model na sněhových měřeních, potom při stejných srážkách zvýšíme teplotu.", result: "Model zachytil hlavní průběh zásoby. Teplejší varianty měly méně vody ze sněhu a kratší sezonu." },
          { title: "Test 4 · Dlouhodobé změny povodí", prediction: "Oteplení má silněji omezovat zásobu v teplejších zimách. Velmi chladné oblasti mohou při větších srážkách získat sníh.", test: "Porovnáme rekonstrukce s měřením a s výpočtem bez odhadnutého lidského vlivu na klima.", result: "Výsledky podporují lidský vliv na úbytek v řadě mírnějších oblastí a na přírůstek v části chladné Arktidy." },
        ]}>
        Fyzikální cesty a jejich měření podle <SourceLink id="DOI_10_1038_s41467_018_03629_7">Jenningse a kol. (2018)</SourceLink>,{" "}
        <SourceLink id="DOI_10_5194_tc_11_2847_2017">Musselmana a kol. (2017)</SourceLink> a{" "}
        <SourceLink id="DOI_10_1038_s41586_023_06794_y">Gottlieba a Mankina (2024)</SourceLink>.
        Modrá označuje vodu a sníh, oranžová energii, zelená měření.
      </Graphic>

      <h4 id="test-skupenstvi" className={styles.testHeading}>Test 2 · Déšť, nebo sníh</h4>
      <p>
        Kdyby o skupenství rozhodoval jediný teplotní práh, stejná přízemní teplota by všude oddělovala déšť od sněhu.
        Keith Jennings a kolegové tuto představu v roce 2018 ověřili na <strong>17,8 milionu hlášení z 11 924 stanic</strong> severní polokoule
        za období od ledna 1978 do února 2007. Pozorované skupenství přiřadili k naměřené teplotě a vlhkosti.
        Nešlo o množství srážek, ale o četnost případů deště a sněhu. Smíšené srážky z vyhodnocení vyřadili.
        <SourceLink id="DOI_10_1038_s41467_018_03629_7"> (Jennings a kol. 2018)</SourceLink>
      </p>
      <p>
        Pro 6 883 stanic šlo určit teplotu, při které byly déšť a sníh stejně časté.
        Průměr činil <strong>1,0 °C</strong> a 95 % stanic leželo mezi −0,4 a 2,4 °C.
        Toto rozpětí popisuje rozdíly mezi stanicemi, nikoli nejistotu jediného průměru.
        V sušším vzduchu se padající částice ochlazují odpařováním či sublimací, tedy přímým přechodem ledu v páru.
        Sníh proto může dosáhnout země i při kladné teplotě okolního vzduchu. Zapojení vlhkosti zlepšilo rozlišení skupenství proti samotné teplotě.
        <SourceLink id="DOI_10_1038_s41467_018_03629_7"> (Jennings a kol. 2018, obr. 2–5)</SourceLink>
      </p>
      <p>
        Výsledek podporuje očekávaný přechod ke častějšímu dešti při oteplení v přechodném pásmu,
        ale vyvrací představu univerzální přízemní hranice 0 °C.
        U velmi studených srážek zůstává i po mírném oteplení sníh.
        <SourceLink id="DOI_10_5061_dryad_c9h35"> Veřejná data a výpočetní postup</SourceLink> dovolují kontrolovat četnosti i rozdíly stanic.
        Pozorovací podrobnosti uvádí <Link href={`${observation}#skupenstvi-srazek`}>přehled měření skupenství srážek</Link>.
      </p>

      <h4 id="test-povodi" className={styles.testHeading}>Test 3 · Tání v horském povodí</h4>
      <p>
        Pro přechod od jednotlivých srážek k celé sezoně potřebujeme sledovat ukládání a ztrátu vody den po dni.
        Keith Musselman a kolegové v roce 2017 použili fyzikální model Alpine3D pro povodí Kaweah v kalifornské Sierra Nevadě.
        Výpočet v buňkách o straně 100 metrů řídili meteorologickými měřeními.
        Důvěryhodný výpočet má zachytit průběh zásoby a ústup sněhu.
        Kontrolou byly tři sezony 2008–2010, které zahrnovaly přibližně běžný, sušší a vlhčí rok.
        <SourceLink id="DOI_10_5194_tc_11_2847_2017"> (Musselman a kol. 2017)</SourceLink>
      </p>
      <p>
        <Link href={`${observation}#mereni-kaweah`}>Sněhové podušky, ruční odběry a snímače výšky</Link> poskytly kontrolu odlišnou od vstupního měření počasí.
        V sezonách 2008 a 2010 nepřesáhla typická velikost chyby výpočtu vodní hodnoty na třech automatických stanicích 100 mm.
        Autoři ji vyjádřili odmocninou průměru čtverců chyb, která více zdůrazňuje velké odchylky.
        V sušším roce 2009 však model na výše položených stanicích zásobu podhodnocoval.
        Úspěch tedy spočíval v zachycení hlavního průběhu při známých chybách, nikoli v přesné shodě každého dne.
        <SourceLink id="DOI_10_5194_tc_11_2847_2017"> (Musselman a kol. 2017, obr. 3–4)</SourceLink>
      </p>
      <p>
        Teprve potom autoři zkoušeli oteplení o 1 až 6 °C při stejných úhrnech srážek.
        S teplotou upravili také příchozí tepelné záření. Ponechali stejnou relativní vlhkost,
        tedy vlhkost vyjádřenou v procentech nasycení vodní párou při dané teplotě.
        Roční objem vody vzniklé táním v celém povodí klesal podle výchozí sezony přibližně o <strong>9,3 až 10,8 % na stupeň</strong>.
        Rozpětí označuje tři zkoumané sezony, není intervalem spolehlivosti ani univerzálním pravidlem pro jiné hory.
        Jde o modelový pokus se změněnými podmínkami, nikoli o naměřenou budoucnost.
        <SourceLink id="DOI_10_5194_tc_11_2847_2017"> (Musselman a kol. 2017, obr. 7 a doplňková tabulka S4)</SourceLink>
      </p>
      <p>
        Část tání se přesunula do časnějších měsíců s menším přísunem sluneční energie.
        Sníh proto mohl mizet dříve, a přitom během jednotlivých dnů tát pomaleji.
        Menší počáteční zásoba k úplnému zániku potřebuje méně energie.
        <strong>Dřívější konec sezony tedy sám nedokazuje vyšší denní rychlost tání.</strong>
        Studie tento rozdíl předpověděla fyzikálním výpočtem, opřeným o ověření výchozích sezon.
        <SourceLink id="DOI_10_5194_tc_11_2847_2017"> (Musselman a kol. 2017, oddíl 4.2)</SourceLink>
      </p>

      <h4 id="test-prisouzeni" className={styles.testHeading}>Test 4 · Dlouhodobé změny povodí</h4>
      <p>
        Horský pokus ukazuje citlivost na oteplení. Pro vysvětlení skutečných desetiletí navíc potřebujeme určit,
        zda k takové změně klimatu došlo a jakou část lze spojit s lidskou činností.
        Alexander Gottlieb a Justin Mankin v roce 2024 zkoumali březnovou vodní hodnotu sněhu za roky 1981–2020 ve 169 povodích severní polokoule.
        Ze <Link href={`${observation}#zasoba-v-povodich`}>sněhových dat</Link> a teplot a srážek za listopad až březen sestavili 120 variant statistické rekonstrukce.
        Program se z existujících sezon učil, jak se březnová zásoba mění při různých kombinacích zimního počasí.
        Těchto 120 kombinací není 120 nezávislých měření, protože varianty sdílejí vstupy.
        <SourceLink id="DOI_10_1038_s41586_023_06794_y"> (Gottlieb a Mankin 2024)</SourceLink>
      </p>
      <p>
        Závislost zásoby na počasí ověřili také na 2 961 stanicích nezahrnutých do učení statistického modelu.
        Klimatické simulace se všemi vlivy a pouze s přírodními vlivy pak poskytly odhad lidského příspěvku ke změnám teploty a srážek.
        Autoři o tento příspěvek upravili vstupní klima, u teploty odečtením rozdílu a u srážek přepočtem jejich poměru, a znovu vypočítali sníh.
        Rozdíl proti původnímu výpočtu odhaduje lidský vliv. Tento krok závisí na klimatických modelech a jejich předpokladech,
        protože skutečný svět bez lidských emisí současně pozorovat nemůžeme.
        <SourceLink id="DOI_10_1038_s41586_023_06794_y"> (Gottlieb a Mankin 2024, metody)</SourceLink>
      </p>
      <p>
        Lidský vliv byl podle kritérií studie rozlišitelný ve <strong>31 ze 169 povodí</strong>.
        Tento počet zahrnuje úbytky v mírnějších oblastech i přírůstky v části chladné Arktidy.
        Tam mohou větší srážky stále padat jako sníh a zimní zásobu zvýšit.
        Výsledek odpovídá předpovědi rozdílné reakce studených a teplejších zim, nepřisuzuje však každý místní pokles lidskému vlivu.
        <SourceLink id="DOI_10_1038_s41586_023_06794_y"> (Gottlieb a Mankin 2024, obr. 3)</SourceLink>
      </p>
      <p>
        <strong>Společné působení teploty a srážek prošlo různými zkouškami.</strong> Hlášení skupenství ověřují vznik sněhu,
        měření zásoby kontroluje fyzikální výpočet sezony a rozbor povodí testuje prostorový obraz dlouhodobých změn.
        Tyto postupy nejsou zcela nezávislé ve vstupních datech, ale sledují různé předpovědi téhož vysvětlení.
        Právě tato návaznost poskytuje silnější oporu než samotná souvislost teploty s bílou plochou na mapě.
      </p>
    </HypothesisStory>

    <h2 id="mechanismus">Jak se mění zásoba a konec sněhové sezony</h2>
    <p>
      Samotný pokles srážek nevysvětlil úbytek ve všech zkoumaných horských oblastech.
      Podpořené vysvětlení spojuje množství srážek s jejich skupenstvím a s energií pro tání.
      V mírné zimě může stejné množství srážek vytvořit méně sněhu, zatímco ve velmi studené zimě může vyšší úhrn zásobu zvětšit.
      Jarní výsledek pak závisí na tom, kolik vody se uložilo a kdy začne odcházet.
    </p>
    <p>
      Pro vymezenou plochu vyjádříme všechny přírůstky a ztráty v milimetrech vody.
      Zásoba <InlineMath tex="S" /> zahrnuje led i kapalnou vodu dosud zadrženou ve sněhu.
      Její změnu za zvolené období vyjadřuje zachování hmotnosti:
    </p>
    <Equation tex={String.raw`\Delta S = P - R - E + D`} />
    <p>
      <InlineMath tex="P" /> je voda přidaná srážkami, <InlineMath tex="R" /> voda, která odteče,
      a <InlineMath tex="E" /> čistá ztráta vody přechodem do páry.
      Při ukládání vodní páry má <InlineMath tex="E" /> záporné znaménko.
      <InlineMath tex="D" /> vyjadřuje čistý přísun sněhu větrem přes hranice plochy, při odnosu je záporný.
      <strong>Samotné roztání ledu ještě vodu ze zásoby neodstraní.</strong> Odstraní ji až odtok nebo přechod do páry.
      Voda může ve sněhu dočasně zůstat a v chladnější vrstvě znovu zmrznout.
      <SourceLink id="DOI_10_5194_tc_11_2847_2017"> (Musselman a kol. 2017, popis modelu)</SourceLink>
    </p>
    <p>
      Pro sníh již ohřátý k bodu tání můžeme ukázat velikost energetického účinku jednoduchým výpočtem.
      Pokud po odečtení všech ztrát zbývá pro tání 30 wattů na metr čtvereční, dostává každý metr čtvereční 30 joulů za sekundu.
      Za celý den při tomto stálém příkonu získá 2,592 megajoulu.
      Po vydělení teplem tání to stačí přibližně na 7,8 kilogramu ledu, tedy 7,8 milimetru vody:
    </p>
    <Equation tex={[String.raw`m = \frac{Q\,t}{L_f}`, String.raw`= \frac{30\ \mathrm{W\,m^{-2}}\times86\,400\ \mathrm{s}}{334\,000\ \mathrm{J\,kg^{-1}}}`, String.raw`\approx 7{,}8\ \mathrm{kg\,m^{-2}}`]} />
    <p>
      <InlineMath tex="m" /> je hmotnost roztátého ledu na metr čtvereční, <InlineMath tex="Q" /> čistý příkon pro tání,{" "}
      <InlineMath tex="t" /> doba a <InlineMath tex="L_f" /> teplo potřebné na kilogram ledu.
      Jde o zvolený příklad s konstantním příkonem, nikoli o měření určitého svahu.
      O stejných 7,8 mm klesne zásoba jen tehdy, když všechna vzniklá voda odteče a žádná nová nepřibude.
      <SourceLink id="DOI_10_6028_jres_023_043"> Laboratorní převod podle Osborna (1939)</SourceLink> a{" "}
      <a href={`${media}/vypocty.mjs`}>zveřejněný výpočet</a> umožňují aritmetiku zopakovat.
    </p>
    <p>
      Délku sezony tedy neurčuje samotná denní rychlost tání.
      Ilustrační zásoba 200 mm by při stálé čisté ztrátě 10 mm denně vydržela 20 dnů.
      Zásoba 80 mm při menší ztrátě 8 mm denně vydrží jen 10 dnů.
      Příklad předpokládá, že nepřibývá nový sníh a ztráta skutečně opouští pokrývku.
      Vysvětluje, proč se kratší sezona může slučovat s pomalejším denním táním, jak ukázal horský model.
      <SourceLink id="DOI_10_5194_tc_11_2847_2017"> (Musselman a kol. 2017)</SourceLink>
    </p>
    <p>
      V Arktidě se proto mohou současně objevit velká dubnová zásoba a malá červnová plocha sněhu.
      Zimní přírůstky a podmínky jarního tání se vyvíjejí v různých částech roku.
      Přesně takovou sezonní kombinaci zachytil i rok 2025: dubnová hmotnost byla v obou arktických kontinentech nad průměrem 1991–2020,
      ale červnový rozsah zůstal pod ním. Jednotlivý rok sám neurčuje dlouhodobou příčinu, ukazuje však, proč musíme obě veličiny oddělovat.
      <SourceLink id="DOI_10_25923_cfhv_c239"> (Mudryk a kol. 2025)</SourceLink>
    </p>

    <h2 id="nejistoty">Co zůstává nejisté</h2>
    <p>
      Fyzikální vazba mezi energií a táním je dobře ověřená. Více nejistoty je v tom, kolik sněhu leží v členité krajině,
      kolik energie k němu dorazí a jaký podíl místní změny připadá na jednotlivé vlivy.
      Horské výsledky proto nelze převést jediným procentem na celou Arktidu nebo na české nížiny.
    </p>
    <details className="article-details">
      <summary>Rozdíly měření, modelů a dostupnosti dat</summary>
      <p>
        Sněhové profily představují konkrétní místa a družice hůře rozlišují sníh pod lesem či v členitém terénu.
        U starších profilů může měření ovlivnit růst lesa nebo změna data návštěvy.
        Proto nestačí shoda jednoho modelu s jednou řadou. Srovnáváme výšku, hmotnost a plochu i měření různými přístroji.
        <SourceLink id="DOI_10_1175_bams_86_1_39"> (Mote a kol. 2005)</SourceLink>
      </p>
      <p>
        Kaweah používá pro déšť a sníh pevný práh 1,2 °C a nezahrnuje přemisťování sněhu větrem.
        Výsledky Jenningse ukazují, proč je takový práh zjednodušením.
        Tři sezony také nezahrnují všechny možné průběhy počasí.
        Článek a doplňkové tabulky jsou veřejné, úplné vstupy a výstupy však Musselmanova studie nabízí na vyžádání.
        Z veřejných tabulek lze ověřit citovaná čísla, ne samostatně zopakovat celý modelový běh.
        <SourceLink id="DOI_10_5194_tc_11_2847_2017"> (Musselman a kol. 2017)</SourceLink>
      </p>
      <p>
        Ani hemisférické soubory nejsou plně nezávislé: mohou sdílet meteorologické vstupy nebo stanice.
        Učení statistického vztahu a kontrola na vynechaných stanicích tuto závislost omezují, neodstraňují ji úplně.
        Přisouzení lidského vlivu navíc závisí na klimatických simulacích.
        Nerozlišitelný příspěvek v konkrétním povodí znamená nedostatečně přesvědčivý výsledek daného testu, nikoli důkaz nulového vlivu.
        <SourceLink id="DOI_10_1038_s41586_023_06794_y"> (Gottlieb a Mankin 2024)</SourceLink>
      </p>
    </details>

    <h2 id="dalsi-overeni">Jak lze vysvětlení dále prověřovat</h2>
    <p>
      Přísnější kontrolu poskytne předpověď pro nové sezony a stanice, podle nichž se model nenastavoval.
      Na stejném místě je třeba současně měřit skupenství a množství srážek, vodní hodnotu sněhu, záření a odtok.
      Pokud by výpočet se správně změřenými vstupy soustavně předpovídal úbytek, zatímco zásoba opakovaně rostla,
      museli bychom hledat chybějící přísun, chybný přenos energie nebo nedostatky popisu vody ve sněhu.
      Teprve kontrola těchto možností by ukázala, kterou část vysvětlení je nutné opravit.
    </p>

    <div className="article-observation-summary">
      <p className="eyebrow">Závěr</p>
      <p>
        Množství sněhu určuje přísun srážek, jejich skupenství a následné ztráty vody.
        Oteplování v mírnějších zimách přesouvá část srážek k dešti a mění průběh tání.
        Ve velmi studených oblastech může větší sněžení zimní zásobu zvýšit, aniž zabrání dřívějšímu jarnímu zániku.
        Měření srážek, zásoby a energie umožňují tyto příčiny rozlišovat.
        Kratší sněhová sezona přitom nemusí znamenat rychlejší tání každý den.
      </p>
    </div>

    <h2 id="prameny">Prameny a data</h2>
    <div className="article-source-groups">
      <section><h3>Fyzika a přímé zkoušky</h3><ul>
        <li><SourceLink id="DOI_10_6028_jres_023_043">Osborne, 1939: Heat of fusion of ice. Laboratorní určení tepla tání.</SourceLink></li>
        <li><SourceLink id="DOI_10_1175_bams_86_1_39">Mote a kol., 2005: Declining Mountain Snowpack in Western North America.</SourceLink></li>
        <li><SourceLink id="DOI_10_1038_s41467_018_03629_7">Jennings a kol., 2018: Spatial variation of the rain–snow temperature threshold across the Northern Hemisphere.</SourceLink></li>
        <li><SourceLink id="DOI_10_5194_tc_11_2847_2017">Musselman a kol., 2017: Snowmelt response to simulated warming across a large elevation gradient, southern Sierra Nevada, California.</SourceLink></li>
      </ul></section>
      <section><h3>Dlouhodobé změny a příčiny</h3><ul>
        <li><SourceLink id="DOI_10_25923_cfhv_c239">Mudryk a kol., 2025: Terrestrial Snow Cover. Arktická plocha a hmotnost sněhu.</SourceLink></li>
        <li><SourceLink id="DOI_10_1038_s41586_023_06794_y">Gottlieb a Mankin, 2024: Evidence of human influence on Northern Hemisphere snow loss.</SourceLink></li>
      </ul></section>
      <section><h3>Samostatná kontrola</h3><ul>
        <li><SourceLink id="DOI_10_5061_dryad_c9h35">Jennings a kol., 2019: staniční údaje, vypočtené teplotní prahy a kód v Dryadu.</SourceLink></li>
        <li><SourceLink id="MEDIA_SNOW_COVER_MECHANISMS_2026">Přepis regionálních výsledků, výpočty, schémata a návod k použití původních dat.</SourceLink></li>
        <li><Link href={`${observation}#horske-snehove-zasoby`}>Pozorování: výběr stanic, zpracování a meze měření sněhu.</Link></li>
      </ul></section>
    </div>
  </div></article>;
}
