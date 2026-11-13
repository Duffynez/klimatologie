import Image from "next/image";
import Link from "next/link";
import { Equation } from "./Equation";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./OceanAcidificationMechanismArticle.module.css";

const media = "/media/okyselovani-oceanu-mechanismus";
const hypotheses: readonly MechanismHypothesis[] = [{
  id: "prisun-co2", name: "Přibývající atmosférický CO₂ mění chemii vody",
  prediction: "Proti vodě při stejných podmínkách a stálém CO₂ má příjem dalšího CO₂ snížit pH i množství uhličitanových iontů. Chemický výpočet musí vystihnout také velikost změny.",
  test: "1. Ověříme rovnováhu plynu a vody v laboratoři. 2. Porovnáme očekávané tempo s měřením u Havaje. 3. V globálním rozboru oddělíme uhlík, teplotu a další vlivy.",
  observation: "1. Vybrané rovnice obstály v laboratorním rozsahu. 2. Havajský pokles má očekávaný směr a podobné tempo. 3. Globálně převládá přísun CO₂, ostatní vlivy mění jeho účinek.",
  verdict: "Podpořená hlavní příčina dlouhodobého poklesu",
  explanation: "Platí pro povrchový oceán v posledních desetiletích. Místní a krátkodobé změny vyžadují také znalost teploty, proudění a biologické činnosti.",
  state: "supported",
}];
const tests = [
  { title: "1. Rovnováha v laboratoři", prediction: "Z rozboru vody má jít určit CO₂ v plynu, který je s ní v rovnováze.", test: "Měníme složení plynu nad vodou a srovnáváme přímé měření s chemickým výpočtem.", result: "V ověřeném rozsahu se průměrný rozdíl blížil nule. Jiné tehdejší rovnice se odchylovaly asi o 10 %." },
  { title: "2. Dlouhé měření u Havaje", prediction: "Růst atmosférického CO₂ má při chemickém vyrovnávání vyvolat pokles přibližně o 0,016 pH za desetiletí.", test: "Očekávání porovnáme s pH z rozborů vody a se samostatným optickým měřením.", result: "Oba postupy ukazují pokles podobného tempa. Přímé měření pokrývá kratší, přerušované období." },
  { title: "3. Rozbor globálních příčin", prediction: "Přísun dalšího CO₂ má vysvětlit většinu dlouhodobé změny i po oddělení ostatních vlivů.", test: "Z map chemie, teploty a slanosti počítáme příspěvky jednotlivých změn.", result: "V letech 1982–2021 převládal atmosférický CO₂. Oteplování pokles zesilovalo a změny přirozeného uhlíku jej tlumily." },
];

export function OceanAcidificationMechanismArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Dlouhodobý pokles pH pod proměnlivou hladinou</h2>
    <p className="article-prose__intro">
      Povrchový oceán se okyseluje: jeho pH, kterým vyjadřujeme kyselost vody, klesá. Globální rekonstrukce založená na měřeních odhaduje pro roky 1982–2021 pokles přibližně o 0,06 jednotky pH.
      Její průměrné tempo činí −0,0166 ± 0,0010 za desetiletí a výpočet pokrývá 96 % plochy oceánu bez trvalého mořského ledu.
      Vznik těchto údajů i rozdíly mezi místy vysvětluje <Link href="/pozorovani/acidifikace-oceanu/#globalni-povrch">pozorování acidifikace oceánu</Link>.
      Proč klesá pH napříč tak rozdílnými oblastmi?
      <SourceLink id="DOI_10_1029_2023gb007765"> (Ma a kol. 2023, tab. 1 a obr. 2)</SourceLink>
    </p>
    <p>
      <strong>Nižší pH znamená více vodíkových iontů</strong>, částic nesoucích kladný elektrický náboj.
      Okyselování označuje směr změny, takže může probíhat i ve vodě, která zůstává zásaditá.
      Zkoumáme dlouhodobou změnu povrchového oceánu. Její příčinu potřebujeme odlišit od výkyvů vyvolaných roční dobou, promícháváním vody a životem v ní.
      <SourceLink id="DOI_10_1017_9781009157896_007"> (IPCC 2021, oddíl 5.3.2.2)</SourceLink>
    </p>

    <h2 id="hypotezy">Jedna hypotéza a její předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="ocean-acidification-hypotheses-caption"
      context={<p>Kontrolní variantou je stejná voda při stejné teplotě, slanosti a zásobě látek neutralizujících kyselinu, ale bez růstu CO₂ v okolním vzduchu. Oddělujeme tak účinek přídavného CO₂. Tempo v jednotkách pH za desetiletí popisuje rychlost změny, nikoli kyselost jednoho vzorku.</p>}
      caption={<>Laboratorní zkouška ověřuje chemický vztah. Dlouhá pozorování a rozbor dalších vlivů pak zjišťují, jak velkou část skutečné změny vysvětluje.</>} />

    <h2 id="pribehy">Jak se chemické vysvětlení prověřovalo</h2>
    <HypothesisStory id="prisun-co2" number={1} title="Přibývající atmosférický CO₂ mění chemii vody">
      <p>
        Roger Revelle a Hans Suess v roce 1957 zkoumali, kolik CO₂ ze spalování paliv může přijmout oceán.
        Jeho obrovská zásoba uhlíku vybízela k představě velkého zásobníku. Autoři však ukázali, že další příjem omezuje chemická odezva vody.
        Přidaný uhlík mění její rovnováhu s plynem nad hladinou. Oceán proto nemůže přijímat libovolné množství CO₂ při nezměněném složení.
        Jejich práce řešila výměnu uhlíku, nikoli dnešní měřený trend pH. Zdůraznila ale chemický vztah, který lze přímo zkoušet.
        <SourceLink id="DOI_10_1111_j_2153_3490_1957_tb01849_x"> (Revelle a Suess 1957, s. 24–26)</SourceLink>
      </p>
      <p>
        Rozpuštěný CO₂ se ve vodě účastní reakcí, při nichž vznikají vodíkové ionty a uhlík přechází mezi různými rozpuštěnými formami.
        Schéma ukazuje přísun přes hladinu a následující změnu v povrchové vrstvě. Modré šipky označují výměnu CO₂, oranžové chemickou odezvu.
        Vedlejší vlivy jsou vyznačené zeleně. Tři zkoušky pod obrázkem ověřují jednotlivé části tohoto vysvětlení.
        <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a"> (Dickson a kol. 2007, kap. 2)</SourceLink>
      </p>
      <figure className={`article-figure ${styles.explanatoryFigure}`}>
        <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Chemické schéma, na úzké obrazovce posuvné do stran">
          <a href={`${media}/mechanismus.svg`} aria-label="Otevřít chemické schéma v plné velikosti"><Image className="article-figure__media" src={`${media}/mechanismus.svg`} width={1100} height={690} alt="Rostoucí CO₂ ve vzduchu podporuje jeho příjem přes hladinu. V povrchové vodě přibývá vodíkových iontů a klesá pH, zatímco část uhličitanů přechází na hydrogenuhličitany. Teplota, promíchávání a biologická činnost mění místní odezvu." unoptimized /></a>
        </div>
        <div className={styles.testPanels}>{tests.map(test => <section className={styles.testPanel} key={test.title}>
          <h4>{test.title}</h4><dl><dt>Předpověď</dt><dd>{test.prediction}</dd><dt>Zkouška</dt><dd>{test.test}</dd><dt>Výsledek</dt><dd>{test.result}</dd></dl>
        </section>)}</div>
        <figcaption>Vlastní kvalitativní schéma Klimatologie.eu připravené s pomocí AI, CC BY 4.0. Šipky nevyjadřují měřená množství.
          Chemie podle <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">Dicksona a kol. 2007</SourceLink>,
          rozlišení příspěvků podle <SourceLink id="DOI_10_1029_2023gb007765">Ma a kol. 2023</SourceLink>.
          <a href={`${media}/podklady.txt`}> Prameny a podklady</a>.
        </figcaption>
      </figure>

      <h4 className={styles.testHeading} id="test-laborator">Zkouška 1. Rovnováha v laboratoři</h4>
      <p>
        Pro chemický výpočet potřebujeme vedle teploty a slanosti dvě vlastnosti vody.
        <strong>Celkový rozpuštěný anorganický uhlík</strong> zahrnuje CO₂ a jeho uhličitanové i hydrogenuhličitanové formy.
        <strong>Alkalinita</strong> popisuje schopnost vody neutralizovat přidanou kyselinu. Vyjadřuje přebytek látek vázajících vodíkové ionty nad látkami, které je uvolňují, podle stanoveného chemického vymezení.
        Určuje se přidáváním známého množství kyseliny. Samotný přídavek CO₂ alkalinitu nemění, ale mění rozdělení uhlíku mezi formami.
        <Link href="/pozorovani/acidifikace-oceanu/#mereni-alkalinity"> Postup měření alkalinity</Link> ukazuje, proč je to jiný údaj než pH.
        <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a"> (Dickson a kol. 2007, kap. 2 a postup 3b)</SourceLink>
      </p>
      <p>
        Timothy Lueker, Andrew Dickson a Charles Keeling v roce 2000 nechali mořskou vodu vyrovnávat s plynnými směsmi známého složení.
        Měnili obsah CO₂ a teplotu, měřili uhlík i alkalinitu vody a samostatně CO₂ v plynu. Chemické rovnice měly z rozboru vody předpovědět plynové měření.
        Konstanty popisující rovnováhu přitom vycházely ze starších pokusů. Výsledek tedy ověřoval jejich použitelnost na dalších měřeních.
        <SourceLink id="DOI_10_1016_s0304_4203_00_00022_0"> (Lueker a kol. 2000, oddíl 5 a tab. 3)</SourceLink>
      </p>
      <p>
        Zastoupení CO₂ v plynu můžeme vyjádřit dílčím tlakem, částí celkového tlaku připadající na CO₂.
        V přesném výpočtu jej malá oprava přizpůsobuje chování skutečného plynu. Takto upravené měřítko se nazývá fugacita.
        V rozsahu pod 500 miliontin atmosféry, jednotky přibližně odpovídající běžnému tlaku vzduchu, vyšel průměrný relativní rozdíl 0,07 ± 0,50 %.
        Rozpětí označuje 95% interval spolehlivosti průměru. Některé jiné tehdejší soubory konstant dávaly odchylku kolem 10 %.
        Nad uvedenou hranicí měla i zvolená formulace rozdíl přibližně 3,35 ± 1,22 %. Laboratoř tak ověřila konkrétní rovnice a zároveň vymezila rozsah jejich shody.
        <SourceLink id="DOI_10_1016_s0304_4203_00_00022_0"> (Lueker a kol. 2000, tab. 4)</SourceLink>
      </p>

      <h4 className={styles.testHeading} id="test-havaj">Zkouška 2. Dlouhé měření u Havaje</h4>
      <p>
        Program Hawaii Ocean Time-series, tedy dlouhodobé oceánské pozorování u Havaje, zahájil v roce 1988 téměř měsíční odběry na stanici ALOHA.
        John Dore a kolegové v roce 2009 porovnali povrchovou vrstvu 0–30 metrů s očekáváním pro vodu vyrovnávající se s rostoucím atmosférickým CO₂.
        Jednu hodnotu pH dopočítali z rozborů uhlíku a alkalinity. Druhou určili podle světla pohlcovaného barvivem přidaným do vzorku.
        Princip této samostatné kontroly vysvětluje <Link href="/metody/spektrofotometrie/#princip">spektrofotometrie roztoků</Link>.
        <SourceLink id="DOI_10_1073_pnas_0906044106"> (Dore a kol. 2009)</SourceLink>
      </p>
      <p>
        Graf srovnává rychlosti změny. Například prostřední bod −0,019 znamená pokles o 0,019 jednotky pH za desetiletí, odvozený z rozborů vody v letech 1988–2007.
        Úsečka ukazuje jednu standardní chybu odhadu sklonu, tedy jeho statistickou nejistotu. Není to rozsah všech měsíčních výkyvů ani 95% interval.
        Přímé měření pokrývá jen roky 1992–1998 a 2003–2007. Všechny hodnoty se vztahují k podmínkám při odběru.
      </p>
      <figure className={`article-figure ${styles.explanatoryFigure}`}>
        <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Graf změny pH u Havaje, na úzké obrazovce posuvný do stran">
          <a href={`${media}/aloha-srovnani.svg`} aria-label="Otevřít havajské srovnání v plné velikosti"><Image className="article-figure__media" src={`${media}/aloha-srovnani.svg`} width={1100} height={620} alt="Stanice ALOHA: očekávaný sklon pH −0,016 ± 0,0003 za desetiletí, výpočet z rozborů vody −0,019 ± 0,002 a samostatné optické měření −0,014 ± 0,002. Optické měření pokrývá kratší, přerušované období." unoptimized /></a>
        </div>
        <figcaption>Hodnoty publikované v <SourceLink id="DOI_10_1073_pnas_0906044106">Dore a kol. 2009, s. 12236 a obr. 1</SourceLink>, přepočtené z roku na desetiletí.
          Vlastní graf Klimatologie.eu připravený s pomocí AI, CC BY 4.0.
          <a href={`${media}/aloha-trendy.csv`}> Číselné podklady</a>, <a href={`${media}/vypocty.mjs`}>výpočet</a> a <a href={`${media}/podklady.txt`}>původ údajů</a>.
        </figcaption>
      </figure>
      <p>
        Všechny tři postupy ukázaly pokles podobného tempa. Autoři ve svém statistickém vyhodnocení trendy označili za nerozlišitelné.
        Optická kontrola přitom nevychází z týchž měření uhlíku a alkalinity. Její převod na podmínky odběru však také používá chemické vztahy.
        Shoda proto podporuje předpovězenou odezvu, při hodnocení nezávislosti musíme rozlišovat vlastní měření a následné převody.
        <Link href="/pozorovani/acidifikace-oceanu/#aloha-povrch"> Rozsah havajských pozorování</Link> a
        <SourceLink id="WEB_hahana_soest_hawaii_edu_HOT_the_Hawaii_Ocean_Time_series_d7da8037"> veřejná data HOT</SourceLink> umožňují kontrolu.
        <SourceLink id="DOI_10_1073_pnas_0906044106"> (Dore a kol. 2009)</SourceLink>
      </p>

      <h4 className={styles.testHeading} id="test-globalni">Zkouška 3. Rozbor globálních příčin</h4>
      <p>
        Jedna stanice nemůže určit průměr celého oceánu. Siv Lauvsetová a kolegové v roce 2015 spojili lodní měření CO₂ s odhady alkalinity podle teploty a slanosti.
        Pro 13 oblastí s průkazným trendem v období 1981–2011 nebo 1991–2011 porovnali zjištěný pokles s odezvou na samotný atmosférický růst.
        V šesti oblastech byl výsledek s tímto očekáváním slučitelný, v sedmi se významně lišil. Srovnání tak ukázalo, kde je třeba zahrnout i jiné změny vody.
        <SourceLink id="DOI_10_5194_bg_12_1285_2015"> (Lauvset a kol. 2015, oddíl 3.2 a obr. 6)</SourceLink>
      </p>
      <p>
        Danling Ma, Luke Gregor a Nicolas Gruber v roce 2023 použili globální rekonstrukci OceanSODA-ETHZ pro roky 1982–2021.
        Obsahuje měsíční mapy chemie vody. Mezery mezi lodními měřeními CO₂ a alkalinity doplňuje podle jejich zjištěných vztahů k teplotě, slanosti a dalším vlastnostem oceánu.
        Z těchto map pak chemické rovnice určují pH. <Link href="/pozorovani/acidifikace-oceanu/#prostorove-zpracovani">Vznik globálních map</Link> rozvádí pozorovací článek.
        <SourceLink id="DOI_10_1029_2023gb007765"> (Ma a kol. 2023, oddíl 2.1)</SourceLink>
      </p>
      <p>
        Pro oddělení příčin autoři přepočítali uhlík a alkalinitu na stejnou slanost. Tím oddělili jejich změny způsobené přidáním nebo odebráním sladké vody.
        Potom rozložili změnu chemie na příspěvky uhlíku, alkalinity, teploty a sladké vody.
        Uhlík přidaný růstem atmosférického CO₂ odhadli z rovnovážného výpočtu a opravili modelem o zpožděné vyrovnávání vody se vzduchem.
        Zbytek změny uhlíku označili za přirozenou složku, související s prouděním, rozpustností a biologickou činností.
        Jde o rozdělení uhlíku podle způsobu změny. Také tato složka může reagovat na oteplování způsobené člověkem.
        <SourceLink id="DOI_10_1029_2023gb007765"> (Ma a kol. 2023, oddíl 2.3)</SourceLink>
      </p>
      <p>
        Největší příspěvek měl rostoucí atmosférický CO₂. Oteplování zvyšovalo koncentraci volných vodíkových iontů a přispělo zhruba 15 % k jejímu globálnímu růstu.
        Pokles přirozené složky uhlíku u povrchu tento vliv z velké části vyrovnával. Výsledná podobnost celkového trendu s účinkem samotného přídavného CO₂ tak vzniká i souběhem dalších příspěvků.
        Rozklad používá chemický model a předpoklad o zpoždění výměny. Je to přisouzení příčin z měření a výpočtu, nikoli přímé změření původu každého atomu.
        <SourceLink id="DOI_10_1029_2023gb007765"> (Ma a kol. 2023, obr. 3 a oddíl 3.3)</SourceLink>
      </p>
      <p>
        Laboratorní rovnováha, samostatné optické měření a plošné rozbory společně podporují přísun atmosférického CO₂ jako hlavní příčinu dlouhodobého povrchového okyselování.
        Jednotlivé výpočty přesto sdílejí část chemických vztahů a globální rekonstrukce také část lodních dat.
        Jejich souhlas má největší váhu tam, kde se doplňují různé typy kontroly. Tento soubor důkazů odpovídá hodnocení
        <SourceLink id="DOI_10_1017_9781009157896_007"> IPCC z roku 2021, oddílu 5.3.2.2</SourceLink>.
      </p>
    </HypothesisStory>

    <h2 id="mechanismus">Jak přísun CO₂ snižuje pH</h2>
    <p>
      Nejlépe obstojí chemická odezva na rostoucí atmosférický CO₂, doplněná o změny teploty, proudění a biologické činnosti.
      Základní vztah prošel laboratorním ověřením a vysvětluje směr i přibližné tempo dlouhodobého poklesu. Ostatní procesy vysvětlují část rozdílů mezi místy a obdobími.
      Toto hodnocení spojuje <SourceLink id="DOI_10_1017_9781009157896_007">syntéza IPCC 2021</SourceLink> s rozebranými původními pracemi.
      Nyní projdeme cestu molekuly CO₂ přes hladinu a změnu chemické rovnováhy, která vede k nižšímu pH.
    </p>

    <h3 id="vymena">Výměna přes hladinu</h3>
    <p>
      Molekuly CO₂ přecházejí přes hladinu oběma směry. Čistý tok míří do vody, když je CO₂ ve vzduchu více, než odpovídá rovnováze s danou vodou.
      Růst atmosférického CO₂ tento rozdíl zvětšuje. Promíchávání přenáší přijatý uhlík dál a může k hladině přivádět vodu jiného složení.
      Jednotlivá oblast přesto může CO₂ vydávat, například pokud proudění přinese vodu bohatou na uhlík.
      Dlouhodobý celkový příjem a místní směr výměny jsou proto různé údaje.
      <SourceLink id="DOI_10_1017_9781009157896_007"> (IPCC 2021, oddíly 5.2.1.5 a 5.3.2.2)</SourceLink>
    </p>

    <h3 id="chemie">Proč přibývají vodíkové ionty</h3>
    <p>
      Uhlík je v mořské vodě rozdělen mezi rozpuštěný CO₂, kyselinu uhličitou, hydrogenuhličitanové ionty a uhličitanové ionty.
      Iont je částice s elektrickým nábojem. Tyto formy se průběžně přeměňují. Uhlík se při reakcích zachovává, ale mění své spojení s vodíkem a kyslíkem.
      Při stálých podmínkách dosahují jednotlivé formy rovnovážných poměrů.
      Rozpuštěný CO₂ spolu s malým podílem kyseliny uhličité označíme CO₂*. Základní vztahy můžeme zapsat takto:
    </p>
    <Equation tex={String.raw`\mathrm{CO_2^* + H_2O \rightleftharpoons H^+ + HCO_3^-}`} label="Rozpuštěný oxid uhličitý, voda, vodíkový ion a hydrogenuhličitan" />
    <Equation tex={String.raw`\mathrm{HCO_3^- \rightleftharpoons H^+ + CO_3^{2-}}`} label="Rovnováha mezi hydrogenuhličitanem a uhličitanem" />
    <p>
      H₂O je voda, H⁺ vodíkový ion, HCO₃⁻ hydrogenuhličitan a CO₃²⁻ uhličitan. Dvojité šipky znamenají, že reakce probíhají oběma směry.
      Při přidání CO₂ vzniká více H⁺, čímž klesá pH. Část H⁺ se současně váže na uhličitan a vytváří hydrogenuhličitan.
      Tím se růst kyselosti tlumí, ale nezastaví. Ubývá uhličitanových iontů, přestože celkového rozpuštěného uhlíku přibylo.
      <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a"> (Dickson a kol. 2007, kap. 2, rovnice 2–9)</SourceLink>
    </p>
    <p>
      Zbývající množství uhličitanových iontů ovlivňuje, jaké podmínky má voda pro tvorbu a rozpouštění uhličitanu vápenatého, z něhož jsou mnohé schránky.
      Tento vztah vyjadřuje <Link href="/pozorovani/acidifikace-oceanu/">pozorovaný stav nasycení vody aragonitem</Link>, jednou z jeho minerálních forem.
      Úbytek uhličitanových iontů snižuje nasycení. Samotná hodnota pH však neurčuje rychlost růstu nebo zániku konkrétního organismu.
      <SourceLink id="DOI_10_1017_9781009157896_007"> (IPCC 2021, oddíl 5.3.2)</SourceLink>
    </p>

    <h3 id="velikost-zmeny">Co znamená desetina jednotky pH</h3>
    <p>
      Stupnice pH je logaritmická. Pokles o jednu jednotku odpovídá desetinásobnému růstu koncentrace vodíkových iontů na stejné stupnici.
      Pro menší změnu určíme poměr konečné a počáteční koncentrace následujícím vztahem. Symbol c označuje koncentraci a obě pH musejí mít stejnou definici.
    </p>
    <Equation tex={String.raw`\frac{c_{\mathrm{H,konec}}}{c_{\mathrm{H,zacatek}}}=10^{\mathrm{pH}_{\mathrm{zacatek}}-\mathrm{pH}_{\mathrm{konec}}}`} label="Přepočet rozdílu pH na poměr koncentrací vodíkových iontů" />
    <p>
      Ilustrační pokles z 8,2 na 8,1 dává 10 na mocninu 0,1, přibližně 1,26. Koncentrace je tedy asi o 26 % vyšší.
      Tento přepočet vysvětluje stupnici, nepředstavuje další měření oceánu. U mořské vody se navíc používá několik vymezení pH podle toho, které ionty zahrnujeme.
      <Link href="/pozorovani/acidifikace-oceanu/#stupnice-a-teplota"> Převody stupnic a teploty</Link> musí předcházet porovnání hodnot.
      <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a"> (Dickson a kol. 2007, kap. 2, oddíl 4.4)</SourceLink>
    </p>

    <h3 id="dalsi-vlivy">Proč každá oblast reaguje jinak</h3>
    <p>
      Teplota mění chemické rovnováhy i rozpustnost CO₂. Její přímý chemický účinek proto musíme odlišit od následné výměny uhlíku se vzduchem.
      Promíchávání zase mění složení povrchové vody přísunem z jiných hloubek. Fotosyntéza rozpuštěný uhlík spotřebovává, dýchání a rozklad organické hmoty jej vracejí.
      Proto ani stejně rychlý atmosférický růst nevede všude ke stejnému poklesu pH.
      <SourceLink id="DOI_10_1017_9781009157896_007"> (IPCC 2021, oddíly 5.3.2–5.3.3)</SourceLink>
    </p>

    <h2 id="nejistoty">Co omezuje přesnost vysvětlení</h2>
    <p>
      Největší rozdíly v odhadu místního tempa souvisejí s proměnlivostí vody a s neúplným pokrytím měření.
      Globální výpočet navíc závisí na doplnění neproměřených oblastí a na oddělení příspěvků. Tyto meze ovlivňují především velikost a rozložení účinku.
      Laboratorně ověřený směr chemické odezvy a dlouhodobý pokles zachycený různými postupy zůstávají společnou oporou závěru.
    </p>
    <details className="article-details"><summary>Podrobnosti k nezávislosti, stupnicím a přisouzení příčin</summary>
      <p>
        Měření pH vyžaduje stálou kalibraci a známou teplotu. Dlouhý záznam může ovlivnit změna přístroje nebo barviva.
        Výpočet z uhlíku a alkalinity má jiné vstupní chyby, sdílí však část chemických konstant s převody přímo měřeného pH.
        Rozdíl mezi postupy je proto užitečnou kontrolou, jejich souhlas nezaručuje odstranění každé společné chyby.
        <SourceLink id="DOI_10_1073_pnas_0906044106"> (Dore a kol. 2009)</SourceLink>
      </p>
      <p>
        Havajský graf ukazuje standardní chyby trendů, laboratorní výsledek 95% interval průměrné odchylky a globální odhad zahrnuje chyby trendu i dat.
        Tato rozpětí popisují různé věci. Nelze je zaměnit za pravděpodobnost správnosti celého vysvětlení.
        <SourceLink id="DOI_10_1016_s0304_4203_00_00022_0"> (Lueker a kol. 2000, tab. 4)</SourceLink> a
        <SourceLink id="DOI_10_1029_2023gb007765"> Ma a kol. 2023, oddíl 2.2</SourceLink>
      </p>
      <p>
        OceanSODA a starší plošné rozbory používají část stejných lodních pozorování. Přirozenou složku uhlíku navíc Ma a kolegové získali jako rozdíl,
        takže přebírá chybu odhadu složky spojené s atmosférickým růstem. Citlivostní zkouška v jejich oddílu 3.3 zachovala znaménko této zbytkové změny
        i při změně odhadu nerovnováhy vzduchu a vody o ±30 %. Závěr o příspěvcích tak má výslovně modelovou podmínku.
        <SourceLink id="DOI_10_1029_2023gb007765"> (Ma a kol. 2023)</SourceLink>
      </p>
      <p>
        Závěr článku se týká povrchového oceánu. Hluboké vody přijímají atmosférický uhlík se zpožděním a pobřeží může silně ovlivňovat říční přítok či místní rozklad organické hmoty.
        Přenesení globálního povrchového tempa na takové místo vyžaduje další měření.
        <SourceLink id="DOI_10_1017_9781009157896_007"> (IPCC 2021, oddíly 5.3.3.1 a 5.3.4.1)</SourceLink>
      </p>
    </details>

    <h2 id="dalsi-overeni">Jaký výsledek by vysvětlení oslabil</h2>
    <p>
      Chemickou část by oslabil opakovaný pokus, v němž by při stejné teplotě, slanosti a alkalinitě přibýval CO₂, ale pH by po ustavení rovnováhy neklesalo,
      a rozdíl by přesahoval ověřené chyby měření. Přisouzení hlavní globální příčiny by vyžadovalo revizi, pokud by nezávislá měření uhlíku a pH
      ukázala dlouhodobou změnu nevysvětlitelnou přísunem CO₂ ani doloženými dalšími vlivy. Pro takové porovnání potřebujeme souběžná měření více chemických veličin,
      nikoli pouze kratší úsek jednoho záznamu.
    </p>

    <div className="article-observation-summary" id="zaver"><p className="eyebrow">Shrnutí mechanismu</p><p>
      Hlavní příčinou dlouhodobého poklesu pH povrchového oceánu je přijímání dalšího CO₂ z atmosféry.
      Jeho reakce ve vodě zvyšují koncentraci vodíkových iontů a převádějí část uhličitanů na hydrogenuhličitany.
      Chemický vztah ověřují laboratorní pokusy, jeho působení dlouhé záznamy a rozbory příspěvků v oceánu.
      Teplota, proudění a biologická činnost mění místní velikost i průběh změny. Globální tempo proto nelze bez dalšího přenést na jednotlivé pobřeží nebo do hloubky.
    </p></div>

    <h2 id="prameny">Prameny a veřejné podklady</h2>
    <div className="article-sources">
      <section><h3>Chemie a laboratorní ověření</h3><ul>
        <li><SourceLink id="DOI_10_1111_j_2153_3490_1957_tb01849_x">Revelle a Suess 1957</SourceLink> – původní rozbor výměny uhlíku, veřejný sken, zejména s. 24–26.</li>
        <li><SourceLink id="DOI_10_1016_s0304_4203_00_00022_0">Lueker, Dickson a Keeling 2000</SourceLink> – plný text u UC San Diego, postup pokusu a jednotlivé výsledky v tabulkách 3–4.</li>
        <li><SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">Dickson a kol. 2007</SourceLink> – veřejná příručka, chemické vztahy v kapitole 2 a měřicí postupy v kapitole 4.</li>
      </ul></section>
      <section><h3>Oceánská měření a příčiny</h3><ul>
        <li><SourceLink id="DOI_10_1073_pnas_0906044106">Dore a kol. 2009</SourceLink> – veřejný plný text, havajská měření a jejich porovnání s očekáváním.</li>
        <li><SourceLink id="DOI_10_5194_bg_12_1285_2015">Lauvset a kol. 2015</SourceLink> – otevřený článek, regionální trendy a porovnání s atmosférickou změnou.</li>
        <li><SourceLink id="DOI_10_1029_2023gb007765">Ma, Gregor a Gruber 2023</SourceLink> – veřejný plný text, globální rozklad příčin v oddílech 2.3 a 3.3.</li>
        <li><SourceLink id="DOI_10_1017_9781009157896_007">IPCC 2021, kapitola 5</SourceLink> – odborná syntéza, zejména oddíl 5.3.2.2.</li>
      </ul></section>
      <section><h3>Data a vlastní grafika</h3><ul>
        <li><SourceLink id="WEB_hahana_soest_hawaii_edu_HOT_the_Hawaii_Ocean_Time_series_d7da8037">Veřejná data programu HOT</SourceLink> – odběry a dokumentace. Graf zde přepisuje publikované trendy z roku 2009, nepřepočítává později rozšířený záznam.</li>
        <li><SourceLink id="DOI_10_25921_m5wx_ja34">OceanSODA-ETHZ u NOAA NCEI</SourceLink> – zpracované měsíční mapy. Ma a kol. použili aktualizaci pokrývající roky 1982–2021.</li>
        <li><a href={`${media}/aloha-trendy.csv`}>Čísla havajského grafu</a>, <a href={`${media}/vypocty.mjs`}>přepočet</a>, <a href={`${media}/grafika.mjs`}>zdrojový kód obou obrázků</a> a <a href={`${media}/podklady.txt`}>původ a licence</a>. Vlastní grafika a kód CC BY 4.0.</li>
      </ul></section>
    </div>
  </div></article>;
}
