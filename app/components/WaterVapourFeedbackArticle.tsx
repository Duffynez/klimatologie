import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./WaterVapourFeedbackArticle.module.css";

const media = "/media/vodni-para-jako-zpetna-vazba";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "vysusovani",
    name: "Výstup vzduchu nad teplejším oceánem vysuší horní troposféru",
    prediction: "Pokud nad teplejším tropickým oceánem ubude páry ve výšce, bude odtud snáze unikat tepelné záření do vesmíru. To by oteplení tlumilo.",
    test: "Jak se měnilo množství páry ve výšce, když byl tropický oceán teplejší? A jak se v delším období vyvíjelo záření v pásmu citlivém na páru ve srovnání s teplotou vzduchu?",
    observation: "V letech 1993–1999 bylo při teplejším tropickém oceánu asi 11 km nad zemí více páry. Také vývoj záření za roky 1979–2005 odpovídal přibývání páry ve výšce.",
    verdict: "Předpověď převládajícího vysušování neobstála",
    explanation: "Srážky skutečně odnášejí vodu z oblaků. V průměru však bylo při teplejším oceánu v tropickém vzduchu ve výšce více páry, i když jeho relativní vlhkost klesla.",
    state: "rejected",
  },
  {
    id: "zesileni",
    name: "Vodní pára zesiluje původní změnu teploty",
    prediction: "Při oteplení přibude páry, která pohltí více tepelného záření a oteplení zesílí. Při ochlazení páry ubude a její slabší skleníkový účinek prohloubí pokles teploty.",
    test: "Po erupci Pinatuba vědci porovnali naměřené ochlazení s výpočty, ve kterých změny páry buď ovlivňovaly tepelné záření, nebo se v něm neprojevily. Z dalších družicových měření odhadli, jak se účinek páry mění mezi teplejšími a chladnějšími měsíci.",
    observation: "Ochlazení po erupci lépe vystihl výpočet, v němž úbytek páry zeslabil její skleníkový účinek. V pěti srovnáních teplejšího a chladnějšího ledna přispívala vodní pára pokaždé k oteplení.",
    verdict: "Měření podporují zesilující zpětnou vazbu",
    explanation: "Při oteplení i ochlazení působila změna množství páry stejným směrem jako počáteční změna teploty. Velikost zesílení závisí také na tom, v jaké výšce páry přibude nebo ubude.",
    state: "supported",
  },
];

function Graphic({ name, alt, children }: { name: string; alt: string; children: React.ReactNode }) {
  return <figure className={`article-figure ${styles.explanatoryFigure}`}>
    <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Vysvětlující grafika, na úzké obrazovce posuvná do stran">
      <a href={`${media}/${name}.png`} aria-label="Otevřít grafiku v plné velikosti"><Image className="article-figure__media" src={`${media}/${name}.png`} width={1536} height={2048} alt={alt} unoptimized /></a>
    </div>
    <figcaption>{children} Vlastní ilustrace vytvořená pomocí AI, CC BY 4.0. Výšky, počty teček a šířky šipek jsou schematické. <SourceLink id="MEDIA_WATER_VAPOUR_2026">Podklady a zadání grafik</SourceLink>.</figcaption>
  </figure>;
}

export function WaterVapourFeedbackArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Přibývá vodní páry i vysoko nad povrchem?</h2>
    <p className="article-prose__intro">
      Nad nezamrzlými oceány přibylo podle družicových měření z let 1988–2017 v průměru 0,436 kg vodní páry
      na metr čtvereční za desetiletí. To odpovídá růstu o 1,49 % za desetiletí. Měření zahrnuje páru v celém
      sloupci vzduchu nad mořskou hladinou. Také u některých stanic na souši páry přibývalo, i když relativní
      vlhkost klesala a vzduch měl k nasycení dál. Výsledky družic i pozemních stanic shrnuje{" "}
      <Link href="/pozorovani/narust-vlhkosti/#pozorovani">přehled měření vlhkosti atmosféry</Link>.{" "}
      <SourceLink id="DOI_10_1002_2018ea000363">(Mears a kol. 2018)</SourceLink>{" "}<SourceLink id="DOI_10_1073_pnas_1722312115">(Byrne a O’Gorman 2018)</SourceLink>
    </p>
    <p>
      Pro teplotu Země záleží i na tom, kde pára přibývá. Pohlcuje část tepelného záření, jímž Země ztrácí
      energii do vesmíru. Zvlášť citelný účinek má vysoko v troposféře, spodní části atmosféry, kde se odehrává
      většina počasí. V těchto výškách je vzduch chladnější a sám vyzařuje méně energie než vzduch u povrchu. Celkový přírůstek páry
      nad oceánem přitom ještě neříká, zda jí přibylo i vysoko nad hladinou.{" "}
      <SourceLink id="DOI_10_1146_annurev_energy_25_1_441">(Held a Soden 2000)</SourceLink>
    </p>

    <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="water-vapour-hypotheses-caption"
      context={<p>Relativní vlhkost říká, jak blízko je vzduch při své teplotě k nasycení vodní párou. Zpětná vazba vzniká, když změna teploty ovlivní množství páry a pára pak zpětně ovlivní teplotu. Zesilující vazba může prohloubit i ochlazení. <SourceLink id="2013_NPL_Humidity">(Bell 2013)</SourceLink>{" "}<SourceLink id="DOI_10_1126_science_296_5568_727">(Soden a kol. 2002)</SourceLink></p>}
      caption={<>Obě hypotézy počítají se suchým vzduchem, který v tropech sestupuje mezi oblastmi s vysokými oblaky. Liší se v tom, zda v teplejší atmosféře začne ve výšce převažovat úbytek páry a jak se tím změní únik tepla do vesmíru. <SourceLink id="DOI_10_1175_1520_0442_2004_017_1272_WVFITT">(Minschwaner a Dessler 2004)</SourceLink></>} />

    <h2 id="pribehy">Co ukázala měření nad tropy a ochlazení po sopečné erupci</h2>
    <HypothesisStory id="vysusovani" number={1} title="Výstup vzduchu nad teplejším oceánem vysuší horní troposféru">
      <p>
        Když teplý a vlhký vzduch stoupá v tropickém bouřkovém oblaku, rozpíná se a chladne. Část jeho vodní páry
        se mění v kapičky a ledové krystalky. Srážky pak část vody odnášejí. Nahoře z oblaku proudí do okolí vzduch,
        kterému z původní zásoby zbývá málo páry. Když tento vzduch dále od oblaku sestupuje, stlačuje se a ohřívá.
        Jeho relativní vlhkost tak dál klesá, i když už žádnou vodu neztratí.{" "}
        <SourceLink id="DOI_10_1175_1520_0477_1990_071_0288_SCCGW">(Lindzen 1990, s. 296–297)</SourceLink>
      </p>
      <p>
        Richard Lindzen v roce 1990 navrhl, že nad teplejším oceánem by bouřkové oblaky mohly sahat výše a cestou
        vzhůru ztrácet ještě více vody. Pokud by do širokého okolí dodávaly sušší vzduch, v horní troposféře by ubylo
        páry pohlcující tepelné záření. Do vesmíru by tak při téže teplotě unikalo více energie, což by původní oteplení
        tlumilo. Pro tuto předpověď je rozhodující, zda ve výšce při oteplení skutečně ubude vodní páry.{" "}
        <SourceLink id="DOI_10_1175_1520_0477_1990_071_0288_SCCGW">(Lindzen 1990, obrázky 7 a 8)</SourceLink>
      </p>
      <p>
        Na obrázku lze cestu vzduchu sledovat po oranžových šipkách vzhůru oblakem a pak po modrých šipkách do stran
        a dolů. Samostatná oranžová šipka nad oblakem ukazuje, kudy by za těchto podmínek snáze unikalo tepelné záření.
      </p>
      <Graphic name="vysusovani" alt="Historická hypotéza: teplejší oceán zesílí hluboké výstupy, kondenzace a srážky odeberou vodu a sušší vzduch ve výšce usnadní únik záření. Test HALOE v letech 1993–1999 ale našel v teplejších obdobích více páry.">Horní panel představuje hypotézu. Spodní výsledek se týká uvedeného družicového testu v tropech, nikoli každého sestupného proudu. <SourceLink id="DOI_10_1175_1520_0477_1990_071_0288_SCCGW">(Lindzen 1990)</SourceLink>{" "}<SourceLink id="DOI_10_1175_1520_0442_2004_017_1272_WVFITT">(Minschwaner a Dessler 2004)</SourceLink></Graphic>
      <h4 id="test-vysusovani" className={styles.testHeading}>Je nad teplejším tropickým oceánem ve výšce méně páry?</h4>
      <p>
        Záleží i na teplotě, při níž vzduch oblak opouští. Ken Minschwaner a Andrew Dessler proto v roce 2004
        spočítali, jak se spolu mění přísun vlhkosti z oblaků, sestup vzduchu v okolí a jeho ochlazování vyzařováním.
        V jejich modelu vzduch nad teplejším oceánem opouštěl oblaky sice výše, ale při vyšší teplotě. Po kondenzaci
        mu tak zbylo více páry, kterou přinesl do okolí.{" "}
        <SourceLink id="DOI_10_1175_1520_0442_2004_017_1272_WVFITT">(Minschwaner a Dessler 2004, oddíly 3 a 6)</SourceLink>
      </p>
      <p>
        Mezi 20° jižní a 20° severní šířky porovnali autoři teplotu oceánu v oblastech
        výstupu vzduchu s družicovými údaji z let 1993–1999. Když byl oceán teplejší, přístroj HALOE zjistil
        více páry i ve výšce asi 11 km nad hladinou, kde má vzduch tlak přibližně 215 hektopascalů. Jiný družicový
        přístroj, MLS, ve srovnatelné výšce zaznamenal pokles relativní vlhkosti. Páry přibylo, jen pomaleji, než s teplotou rostlo množství potřebné k nasycení.{" "}
        <SourceLink id="DOI_10_1175_1520_0442_2004_017_1272_WVFITT">(Minschwaner a Dessler 2004, oddíl 5)</SourceLink>
      </p>
      <p>
        Zda podobný vývoj zachytí družice i v delším období a v globálním průměru, zkoumal tým Eui-Seoka Chunga.
        Mikrovlnné měření mu poskytlo údaje o teplotě vzduchu. Intenzita{" "}
        <Link href="/metody/pasivni-infracervena-radiometrie/#teplota-atmosfery">infračerveného záření</Link>{" "}
        v pásmu, kde záření pohlcuje pára, závisí i na množství vody ve výšce. V letech 1979–2005 rostl
        mikrovlnný signál rychleji než infračervený. Autoři spočítali, jak by se při stejném oteplování vyvíjel
        rozdíl obou signálů, kdyby ve výšce páry přibývalo nebo kdyby její množství zůstalo stejné. Naměřený směr
        změny vystihl pouze výpočet s přibývající párou. Hodnoty i jejich nejistoty uvádí{" "}
        <Link href="/pozorovani/narust-vlhkosti/#horni-troposfera">pozorování horní troposféry</Link>.{" "}
        <SourceLink id="DOI_10_1073_pnas_1409659111">(Chung a kol. 2014, obrázek 1)</SourceLink>
      </p>
      <p>
        Suchý vzduch proudící z jednotlivých oblaků a přibývání páry v průměru nad tropy se tedy nevylučují.
        Lindzenova předpověď vyžadovala, aby při oteplování v horní troposféře převládl úbytek páry. Tropická měření
        i delší globální záznam ukázaly opačný směr.{" "}
        <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC 2021, oddíl 7.4.2.2)</SourceLink>
      </p>
    </HypothesisStory>

    <HypothesisStory id="zesileni" number={2} title="Vodní pára zesiluje původní změnu teploty">
      <p>
        V roce 1861 měřil John Tyndall, kolik tepelného záření projde trubicí naplněnou vzduchem. Když vysušený
        vzduch nahradil vlhkým, na druhý konec trubice dorazilo méně záření. Pokusem tak oddělil vliv vodní páry
        od vlivu ostatních plynů ve vzduchu. Na tomto principu stojí i dnešní{" "}
        <Link href="/metody/absorpcni-spektroskopie/#pohlcovani-svetla">absorpční spektroskopie</Link>. O kolik by
        se zesílilo oteplení, kdyby páry v atmosféře přibylo?{" "}
        <SourceLink id="1862_Tyndall">(Tyndall 1861)</SourceLink>
      </p>
      <p>
        Syukuro Manabe a Richard Wetherald tuto otázku v roce 1967 zkoumali na modelu jednoho sloupce atmosféry.
        V obou variantách pokusu zdvojnásobili koncentraci oxidu uhličitého. Pak spočítali, o kolik se musí
        povrch oteplit, aby se příjem a výdej energie opět vyrovnaly. Když ponechali množství vodní páry stejné, povrch se oteplil asi o 1,3 °C.
        Když ponechali stejnou relativní vlhkost, mohlo s teplotou přibývat i páry a oteplení dosáhlo asi 2,3 °C.
        Zbývalo ověřit, jak se vlhkost mění ve skutečné atmosféře.{" "}
        <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967, závěr 4)</SourceLink>
      </p>
      <p>
        Zesilující vliv páry se dá vyzkoušet i při poklesu teploty. Pokud v chladnoucím vzduchu ubude páry,
        unikne do vesmíru více tepelného záření, než kdyby si vzduch při téže teplotě podržel původní vlhkost.
        Pokles teploty by se tím měl prohloubit. V červnu 1991 se po erupci sopky Pinatubo v atmosféře vytvořila vrstva drobných částic. Část slunečního světla rozptýlily
        zpět do vesmíru. Po erupci tak bylo možné sledovat,
        co se děje s párou, když Země po určitou dobu dostává méně sluneční energie.{" "}
        <SourceLink id="DOI_10_1126_science_296_5568_727">(Soden a kol. 2002)</SourceLink>
      </p>
      <Graphic name="zesileni" alt="Přibývající vodní pára mění výšku, ze které uniká tepelné záření, a při stejném teplotním profilu snižuje výdej energie. Dva testy porovnávají ochlazení po Pinatubu a radiační účinek družicových vlhkostních profilů.">Tečky označují neviditelnou vodní páru. Ve středních panelech ponecháváme stejný průběh teploty s výškou, abychom oddělili samotný radiační účinek přidané páry. Modré oblasti jsou chladnější, oranžové teplejší. Čárkované čáry představují orientační hladiny úniku záření v pásmech páry. <SourceLink id="DOI_10_1146_annurev_energy_25_1_441">(Held a Soden 2000)</SourceLink>{" "}<SourceLink id="DOI_10_1126_science_296_5568_727">(Soden a kol. 2002)</SourceLink>{" "}<SourceLink id="DOI_10_1029_2008GL035333">(Dessler a kol. 2008)</SourceLink></Graphic>
      <h4 id="test-pinatubo" className={styles.testHeading}>Jak vodní pára ovlivnila ochlazení po erupci Pinatuba?</h4>
      <p>
        Brian Soden a jeho kolegové v roce 2002 zadali do modelu účinek sopečných částic podle měření. V jednom
        výpočtu mohla ubývající pára ovlivnit přenos tepelného záření. Ve druhém se množství páry v modelové atmosféře
        měnilo také, ale pro výpočet tepelného záření model tuto změnu nezohlednil. Z rozdílu výsledných teplot tak
        autoři mohli určit, nakolik úbytek páry v jejich modelu prohloubil ochlazení.{" "}
        <SourceLink id="DOI_10_1126_science_296_5568_727">(Soden a kol. 2002, obrázek 4)</SourceLink>
      </p>
      <p>
        Od června 1991 do prosince 1995 byla dolní troposféra podle družicových měření v globálním průměru o 0,30 °C chladnější
        než od ledna do května 1991. Tuto hodnotu ukazuje v grafu modrý sloupec. Další dva sloupce porovnávají
        modelové ochlazení vůči výpočtu bez erupce. Když model zohlednil i slabší skleníkový účinek ubývající páry,
        vyšlo 0,31 °C. Když tento účinek vynechal, vyšlo 0,19 °C.
      </p>
      <figure className="article-figure article-figure--scroll-mobile">
        <div className="article-figure__scroll"><a href={`${media}/pinatubo.png`} aria-label="Otevřít graf ochlazení v plné velikosti"><Image className="article-figure__media" src={`${media}/pinatubo.png`} width={1400} height={760} alt="Průměrná velikost ochlazení dolní troposféry od června 1991 do prosince 1995: družicový odhad 0,30 °C, model s vlhkostní zpětnou vazbou 0,31 °C a model s potlačenou dlouhovlnnou odezvou páry 0,19 °C." unoptimized /></a></div>
        <figcaption>Vlastní přepis tří souhrnných hodnot z textu <SourceLink id="DOI_10_1126_science_296_5568_727">Sodena a kol. (2002, s. 729)</SourceLink>. Pozorování používá odchylku vůči lednu až květnu 1991, model rozdíl sopečného a kontrolního pokusu. Zobrazený pozorovací odhad nemá odstraněný vliv El Niño. Pro tuto trojici článek neuvádí společné intervaly nejistoty, proto je do grafu nedoplňujeme. <Link href={`${media}/pinatubo.csv`}>CSV</Link>{" · "}<Link href={`${media}/plot.py`}>reprodukční skript</Link>. Graf CC BY 4.0.</figcaption>
      </figure>
      <p>
        Podobnou teplotu mohou dát i výpočty, které změnu vlhkosti vystihnou špatně. Autoři proto ověřili také to,
        zda a kde po erupci páry ubylo.
        Družice po erupci změřily pokles množství páry v celém sloupci vzduchu. Změna infračerveného záření v pásmu
        citlivém na páru zároveň odpovídala úbytku vlhkosti vysoko v troposféře. Ochlazení tak provázela právě ta změna,
        kterou model potřeboval k jeho zesílení.{" "}
        <SourceLink id="DOI_10_1126_science_296_5568_727">(Soden a kol. 2002, obrázky 2 a 3)</SourceLink>
      </p>
      <h4 id="test-profily" className={styles.testHeading}>Jak se změny vlhkosti v různých výškách promítají do bilance energie?</h4>
      <p>
        Účinek páry lze odhadnout i během běžného střídání teplejších a chladnějších let. Andrew Dessler a kolegové
        použili údaje z infračerveného přístroje AIRS na družici Aqua, z nichž se odhaduje teplota a množství páry
        v různých výškách. Každý leden od roku 2003 do roku 2007 porovnali s chladnějším lednem 2008. V modelu pak měnili vlhkost v každé vrstvě zvlášť podle družicových měření.
        Počítali, jak tato změna ovlivní rozdíl mezi příchozím a odchozím zářením na horním okraji atmosféry. Příspěvky vrstev sečetli a spočítali průměr za celou Zemi. Ten vydělili rozdílem globální povrchové
        teploty mezi oběma ledny.{" "}
        <SourceLink id="DOI_10_1029_2008GL035333">(Dessler a kol. 2008, oddíly 2 a 4)</SourceLink>
      </p>
      <p>
        Ve všech pěti teplejších lednech změna množství páry podle výpočtu zvýšila čistý příjem energie Země.
        V přepočtu na jeden stupeň rozdílu v globální povrchové teplotě činil tento příspěvek v průměru 2,04 wattu
        na metr čtvereční. Jednotlivé odhady sahaly od 0,94 do 2,69 W/m² na stupeň. Rozpětí ukazuje, jak se od sebe
        lišilo pět lednových srovnání. Hodnoty najdete v <Link href={`${media}/dessler2008.csv`}>přepisu tabulky 1 v CSV</Link>.{" "}
        <SourceLink id="DOI_10_1029_2008GL035333">(Dessler a kol. 2008)</SourceLink>
      </p>
      <p>
        Pět lednových srovnání zachycuje jen krátké kolísání. Pro delší období si Chungův tým položil jinou otázku.
        Mohly změny sluneční aktivity a sopečné erupce vysvětlit přibývání páry ve výšce v letech 1979–2005?
        Při působení samotných přírodních vlivů modely pozorovaný trend nevystihly. Přiblížily se mu až pokusy,
        které zahrnuly i lidský vliv, zejména růst koncentrací skleníkových plynů. Toto srovnání pomáhá určit
        příčinu dlouhodobé změny vlhkosti.{" "}
        <SourceLink id="DOI_10_1073_pnas_1409659111">(Chung a kol. 2014, obrázky 2 a 3)</SourceLink>
      </p>
    </HypothesisStory>

    <h2 id="mechanismus">Jak oteplení změní vlhkost a vlhkost pak teplotu Země</h2>
    <p>
      Přibývání páry ve výšce při teplejším oceánu odporuje předpovědi, že převládne vysušování. Měření po erupci
      Pinatuba zachytila i opačný průběh. Páry ubylo a pokles teploty lépe vystihl výpočet, který její úbytek promítl
      do přenosu záření. Oba výsledky podporují zesilující zpětnou vazbu. Na jejím začátku se s teplotou mění rovnováha mezi vypařováním vody a její kondenzací.
    </p>
    <h3 id="nasyceni">Proč k nasycení teplejšího vzduchu potřebujeme více páry</h3>
    <p>
      I nad klidnou vodní hladinou část molekul opouští kapalinu a část se z páry do kapaliny vrací. Je-li vzduch
      u hladiny nasycený, v průměru se za stejnou dobu vrátí tolik molekul, kolik se jich vypaří. Když se voda ohřeje,
      molekuly z hladiny unikají rychleji. Rovnováha se obnoví při vyšším tlaku vodní páry. Tuto závislost tlaku
      nasycené páry na teplotě popisuje Clausiova–Clapeyronova rovnice. Aby v ovzduší opravdu přibylo vody, musí ji
      dodat výpar nebo přinést proudící vzduch.{" "}
      <SourceLink id="DOI_10_1146_annurev_energy_25_1_441">(Held a Soden 2000, s. 443–445)</SourceLink>{" "}<SourceLink id="2013_NPL_Humidity">(Bell 2013, oddíl 3)</SourceLink>
    </p>
    <p>
      Relativní vlhkost (RH) vyjadřuje v procentech poměr dvou tlaků. Při relativní vlhkosti 50 % dosahuje tlak
      vodní páry poloviny tlaku potřebného k nasycení při dané teplotě. Tlak páry je ta část celkového tlaku vzduchu,
      kterou působí molekuly vody.{" "}
      <SourceLink id="2013_NPL_Humidity">(Bell 2013, oddíl 3.2)</SourceLink>
    </p>
    <Equation tex={String.raw`\mathrm{RH}=100\,\frac{e}{e_{\mathrm{s}}(T)}\,\%`} />
    <p>
      V čitateli je skutečný tlak páry <InlineMath tex="e" />, ve jmenovateli tlak nasycené páry{" "}
      <InlineMath tex={String.raw`e_{\mathrm{s}}(T)`} /> při teplotě <InlineMath tex="T" />. Oba tlaky vyjadřujeme
      ve stejných jednotkách, například v pascalech. Když po oteplení stoupne tlak v čitateli pomaleji než ve
      jmenovateli, relativní vlhkost klesne. Jak ji v praxi určíme, vysvětluje článek o{" "}
      <Link href="/metody/hygrometrie/#princip">měření vlhkosti vzduchu</Link>.{" "}
      <SourceLink id="2013_NPL_Humidity">(Bell 2013)</SourceLink>
    </p>
    <h3 id="sous-a-ocean">Proč nad souší může relativní vlhkost klesat</h3>
    <p>
      Nad pevninu přináší velkou část vodní páry vzduch od oceánu. Když se moře ohřívá, může tento vzduch přinášet
      více vláhy. Souš se však často otepluje rychleji než sousední oceán. K udržení stejné relativní vlhkosti by
      nad ní muselo páry přibývat rychleji, než ji oceán dodává. Vzduch nad pevninou tak může obsahovat více vody
      a přitom mít k nasycení dál. Výsledek místně ovlivňuje také výpar z půdy a rostlin.{" "}
      <SourceLink id="DOI_10_1073_pnas_1722312115">(Byrne a O’Gorman 2018)</SourceLink>
    </p>
    <p>
      Michael Byrne a Paul O’Gorman tento vztah prověřili na údajích z let 1979–2016. Ze změn teploty a vlhkosti
      nad oceánem odhadli, jak by se měly změnit podmínky nad pevninou, a odhad porovnali s údaji z pozemních stanic.
      Zachytili tak dlouhodobý směr změn teploty i vlhkosti. Výkyvy relativní vlhkosti v kratších obdobích byly
      větší, než dokázal jejich výpočet vysvětlit.{" "}
      <SourceLink id="DOI_10_1073_pnas_1722312115">(Byrne a O’Gorman 2018)</SourceLink>
    </p>
    <h3 id="zareni">Proč s větším množstvím páry uniká při stejné teplotě méně energie</h3>
    <p>
      Povrch i atmosféra vydávají energii v podobě infračerveného záření. Molekuly vodní páry je v určitých
      pásmech vlnových délek pohlcují a samy v těchto pásmech vyzařují všemi směry. Když páry přibude,
      menší část záření z nižších vrstev projde atmosférou až do vesmíru. Záření, které pak v těchto pásmech
      zachytí družice, pochází v průměru z větší výšky. V troposféře bývá výše chladněji
      a chladnější vrstvy vyzařují méně. Dokud se teploty nezmění, Země tak vydává méně energie. Tento rozdíl přispívá k dalšímu ohřevu. Teplejší povrch a vzduch pak opět vyzařují více energie.{" "}
      <SourceLink id="DOI_10_1146_annurev_energy_25_1_441">(Held a Soden 2000, s. 445–449)</SourceLink>
    </p>
    <p>
      Pára přidaná blízko teplého povrchu proto může mít jiný účinek než stejné množství přidané výše v chladném
      vzduchu. K výpočtu používají vědci údaje o tom, kolik páry přibylo v každé vrstvě. Postupně mění vlhkost
      v jednotlivých výškách a přitom ponechávají stejné teploty i oblaky. Tím mohou vyčíslit příspěvek páry
      k toku energie i tehdy, když se ve skutečné atmosféře mění všechny tyto veličiny najednou.{" "}
      <SourceLink id="DOI_10_1175_2007JCLI2110_1">(Soden a kol. 2008)</SourceLink>
    </p>
    <p>
      V dlouhodobých výpočtech dvou generací klimatických modelů vyšel pro vodní páru v troposféře průměrný
      příspěvek k energetické bilanci Země +1,77 W/m² na 1 °C globálního oteplení. Hodnota ± 0,20 W/m² na stupeň
      vyjadřuje jednu směrodatnou odchylku mezi výsledky modelů. Kladné znaménko znamená, že pára podporuje další oteplování. Na stejný směr účinku ukázalo také pět
      lednových srovnání z družice Aqua. O celkovém oteplení ale rozhoduje i to, jak se s výškou mění
      teplota vzduchu. Když se horní troposféra ohřeje silněji než povrch, vyzařuje více energie do vesmíru a část
      účinku přidané páry vyvažuje.{" "}
      <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC 2021, oddíl 7.4.2.2)</SourceLink>
    </p>
    <p>
      Nejistota se týká hlavně velikosti zesílení. Družice sledují některé výšky a oblasti zakryté oblaky hůře než
      jiné. Závěr o směru vazby by oslabil například dlouhodobý záznam, v němž by při oteplování v horní troposféře
      soustavně ubývalo páry. Zároveň by měření musela ukázat, že tento úbytek zvýšil únik tepelného záření i po
      oddělení vlivu teploty a oblaků.{" "}
      <SourceLink id="DOI_10_1073_pnas_1409659111">(Chung a kol. 2014)</SourceLink>{" "}<SourceLink id="DOI_10_1017_9781009157896_009">(IPCC 2021)</SourceLink>
    </p>
    <details className="method-details">
      <summary>Co omezuje přesnost jednotlivých zkoušek</summary>
      <p>
        Přístroj HALOE měřil horní troposféru především v sušších oblastech s jasnou oblohou. Když autoři ze srovnání
        vyloučili několik zvlášť výrazných výkyvů spojených s El Niño, kdy se otepluje povrch střední a východní části tropického
        Tichého oceánu, vztah mezi teplotou oceánu a množstvím páry zeslábl. Z této krátké tropické řady proto nelze spolehlivě určit velikost vazby pro celou Zemi.{" "}
        <SourceLink id="DOI_10_1175_1520_0442_2004_017_1272_WVFITT">(Minschwaner a Dessler 2004)</SourceLink>
      </p>
      <p>
        El Niño ovlivňovalo globální teplotu také v době po erupci Pinatuba. Podle toho, jak autoři jeho vliv odhadli a odečetli, vyšlo průměrné ochlazení dolní troposféry
        v rozmezí 0,29 až 0,36 °C. Model navíc zastupoval oceán jen promíchanou povrchovou vrstvou. Porovnání pokusů
        vyčíslilo vliv změn páry na tepelné záření během několika let po erupci. Přesnou velikost stejné vazby při desítkách let oteplování jedna erupce neurčí.{" "}
        <SourceLink id="DOI_10_1126_science_296_5568_727">(Soden a kol. 2002, poznámky 26, 42 a 43)</SourceLink>
      </p>
      <p>
        U dlouhé řady z let 1979–2005 museli vědci navázat měření z různých družic a zohlednit změny citlivosti
        jejich přístrojů. Pět lednových srovnání z družice Aqua má jinou mez. Všechna mají společný referenční leden
        2008, takže chyba údajů z tohoto měsíce by ovlivnila každý z pěti odhadů. Oba týmy využily výpočty přenosu záření, a jejich závěry tak závisí částečně na stejných fyzikálních předpokladech.{" "}
        <SourceLink id="DOI_10_1073_pnas_1409659111">(Chung a kol. 2014)</SourceLink>{" "}<SourceLink id="DOI_10_1029_2008GL035333">(Dessler a kol. 2008)</SourceLink>
      </p>
    </details>

    <h2 id="shrnuti">Shrnutí</h2>
    <div className="method-conclusion">
      <p>
        Při globálním oteplování přibývá vodní páry i vysoko v troposféře. V pásmech, kde pára pohlcuje tepelné
        záření, pak energie uniká do vesmíru v průměru z vyšších, chladnějších vrstev. Země tím při stejných teplotách ztrácí
        méně energie a dále se otepluje. Při ochlazení ubývající pára naopak pokles teploty prohlubuje, jak ukázalo
        porovnání měření po erupci Pinatuba s modelovými pokusy. Pro sílu této zpětné vazby je důležité, kolik páry přibude nebo ubude v různých
        výškách. Relativní vlhkost přitom může místy klesat, pokud páry přibývá pomaleji, než roste množství potřebné k nasycení.
      </p>
    </div>

    <h2 id="prameny">Prameny, data a podklady</h2>
    <ul>
      <li><SourceLink id="1862_Tyndall">Tyndall 1861</SourceLink>: původní laboratorní měření pohlcování tepelného záření.</li>
      <li><SourceLink id="1967_Manabe_Wetherald">Manabe a Wetherald 1967</SourceLink>: modelové porovnání zachovaného množství páry a relativní vlhkosti.</li>
      <li><SourceLink id="DOI_10_1175_1520_0477_1990_071_0288_SCCGW">Lindzen 1990</SourceLink>: původní vysušující hypotéza, s. 296–297 a obrázky 7–8.</li>
      <li><SourceLink id="DOI_10_1146_annurev_energy_25_1_441">Held a Soden 2000</SourceLink>: fyzikální základ, historie a porovnání argumentů.</li>
      <li><SourceLink id="DOI_10_1126_science_296_5568_727">Soden a kol. 2002</SourceLink>: ochlazení po Pinatubu a potlačení radiační odezvy páry.</li>
      <li><SourceLink id="DOI_10_1175_1520_0442_2004_017_1272_WVFITT">Minschwaner a Dessler 2004</SourceLink>: výstupy z oblaků, model a družicové testy.</li>
      <li><SourceLink id="DOI_10_1029_2008GL035333">Dessler a kol. 2008</SourceLink>: AIRS, radiační odezva a tabulka pěti porovnání. Karta odkazuje na veřejnou kopii původního článku.</li>
      <li><SourceLink id="DOI_10_1175_2007JCLI2110_1">Soden a kol. 2008</SourceLink>: oddělení radiačních příspěvků jednotlivých změn.</li>
      <li><SourceLink id="DOI_10_1073_pnas_1409659111">Chung a kol. 2014</SourceLink>: dlouhodobý signál horní troposféry a modelové zkoušky jeho původu.</li>
      <li><SourceLink id="DOI_10_1073_pnas_1722312115">Byrne a O’Gorman 2018</SourceLink>: propojení teploty a vlhkosti nad souší s oceánem.</li>
      <li><SourceLink id="DOI_10_1002_2018ea000363">Mears a kol. 2018</SourceLink>: dlouhodobá sloupcová pára nad oceány. <SourceLink id="WEB_Remote_Sensing_Systems_Remote_Sensing_Systems_e8e6fee6">RSS</SourceLink> zpřístupňuje navazující měsíční data.</li>
      <li><SourceLink id="2013_NPL_Humidity">Bell 2013, NPL</SourceLink>: definice, nasycení a převody vlhkostních veličin.</li>
      <li><SourceLink id="DOI_10_1017_9781009157896_009">IPCC 2021, kapitola 7</SourceLink>: současná odborná syntéza, zejména oddíl 7.4.2.2.</li>
      <li><SourceLink id="DATA_NOAA_HIRS_UTH_V4">NOAA IR Sounder UTH v4</SourceLink>: veřejná měsíční data a dokumentace. Současná verze rozšiřuje původní záznam, není totožná s verzí použitou v roce 2014.</li>
      <li><SourceLink id="MEDIA_WATER_VAPOUR_2026">Obrazové a číselné podklady článku</SourceLink>: <Link href={`${media}/pinatubo.csv`}>ochlazení po Pinatubu</Link>, <Link href={`${media}/dessler2008.csv`}>pět odhadů AIRS</Link>, <Link href={`${media}/chung2014.csv`}>družicové trendy</Link>, <Link href={`${media}/plot.py`}>skript grafu</Link> a <Link href={`${media}/prompts.json`}>zadání AI ilustrací</Link>. CSV přepisují publikované souhrny, ne jednotlivá původní měření.</li>
    </ul>
  </div></article>;
}
