import Image from "next/image";
import Link from "next/link";
import { Equation } from "./Equation";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./OceanAcidificationMechanismArticle.module.css";

const media = "/media/okyselovani-oceanu-mechanismus";
const hypotheses: readonly MechanismHypothesis[] = [{
  id: "prisun-co2", name: "Příjem CO₂ z atmosféry",
  prediction: "Ve vodě, nad níž je ve vzduchu více CO₂, klesne pH a ubude uhličitanových iontů. Z růstu CO₂ ve vzduchu lze odhadnout i rychlost poklesu pH.",
  test: "V laboratoři porovnáme chemický výpočet s měřením plynu nad vodou. U Havaje porovnáme očekávaný pokles pH s odběry. V globálních mapách oddělíme vliv CO₂ od dalších změn vody.",
  observation: "Výpočet vystihl laboratorní měření v ověřeném rozsahu. U Havaje pH klesalo podobně rychle, jak předpovídal růst CO₂. V globálním průměru měl příjem CO₂ největší vliv.",
  verdict: "Hlavní příčina dlouhodobého poklesu pH",
  explanation: "Platí pro povrchový oceán jako celek. Místní tempo závisí také na teplotě vody, proudění a životě v moři.",
  state: "supported",
}];
const tests = [
  { title: "1. Rovnováha v laboratoři", prediction: "Ze složení vody lze určit, kolik CO₂ obsahuje plyn, který je s ní v rovnováze.", test: "Vědci změřili složení vody i plynu nad ní. Z rozboru vody pak vypočítali hodnotu, kterou mají naměřit v plynu.", result: "Při nižším obsahu CO₂ v plynu se výpočet od měření v průměru lišil o 0,07 %. Při vyšším obsahu činila odchylka 3,35 %." },
  { title: "2. Dlouhé měření u Havaje", prediction: "Podle růstu CO₂ ve vzduchu by pH povrchové vody mělo klesat asi o 0,016 jednotky za desetiletí.", test: "S předpovědí porovnáme pH vypočtené ze složení vody a pH změřené pomocí barviva.", result: "Z rozborů vody vyšel pokles o 0,019 jednotky za desetiletí. Optické měření za dvě kratší období ukázalo pokles o 0,014." },
  { title: "3. Rozbor globálních příčin", prediction: "Pokud pH klesá hlavně kvůli příjmu CO₂ ze vzduchu, měl by tento příjem změnit pH více než samotné oteplování vody.", test: "Z měsíčních map vědci odhadli, jak změnu kyselosti ovlivnily přísun CO₂, teplota a další změny ve vodě.", result: "V letech 1982–2021 měl největší vliv příjem CO₂ ze vzduchu. Oteplování pokles pH zesilovalo, úbytek uhlíku z jiných příčin jej tlumil." },
];

export function OceanAcidificationMechanismArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Jak se změnila voda u hladiny</h2>
    <p className="article-prose__intro">
      Mezi lety 1982 a 2021 kleslo průměrné pH povrchové mořské vody přibližně o 0,06 jednotky.
      Tento odhad vychází z <Link href="/pozorovani/acidifikace-oceanu/#globalni-povrch">map sestavených z oceánských měření</Link>, které pokrývají 96 % povrchu oceánu bez trvalého ledu.
      Nižší pH znamená, že ve vodě přibylo vodíkových iontů, částic s kladným elektrickým nábojem. Voda se tak okyseluje, i když dál zůstává mírně zásaditá.
      <SourceLink id="DOI_10_1029_2023gb007765"> (Ma a kol. 2023, tab. 1 a obr. 2)</SourceLink>
    </p>
    <p>
      Na jednom místě se pH mění i během roku. Záleží na tom, jak je voda teplá, co k hladině přinášejí proudy a kolik uhlíku z vody odeberou řasy při fotosyntéze.
      Vedle těchto místních změn působí na celý povrch oceánu rostoucí množství oxidu uhličitého (CO₂) v atmosféře.
      Jak velkou část dlouhodobého poklesu pH můžeme vysvětlit tím, že se tento plyn rozpouští v moři?
      <SourceLink id="DOI_10_1017_9781009157896_007"> (IPCC 2021, oddíl 5.3.2.2)</SourceLink>
    </p>

    <h2 id="hypotezy">Co předpovídá přísun CO₂</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="ocean-acidification-hypotheses-caption"
      context={<p>Představme si dva vzorky téže mořské vody při stejné teplotě. Nad jedním z nich zvýšíme množství CO₂ ve vzduchu a u obou necháme vodu a vzduch dosáhnout rovnováhy. Rozdíl v konečném pH pak připadá na přidaný CO₂.</p>}
      caption={<>V otevřeném oceánu se voda pohybuje a její teplota se mění. Třetí zkouška proto sleduje, jak velký je účinek přísunu CO₂ vedle těchto dalších vlivů.</>} />

    <h2 id="pribehy">Jak se přísun CO₂ projeví ve vodě</h2>
    <HypothesisStory id="prisun-co2" number={1} title="Příjem CO₂ z atmosféry">
      <p>
        Roger Revelle a Hans Suess se v roce 1957 ptali, kolik CO₂ ze spalování paliv může přijmout oceán.
        V mořské vodě je už rozpuštěno obrovské množství uhlíku. Pro příjem dalšího CO₂ podle nich záleží na tom, kolik uhlíku ve vodě zůstane v podobě rozpuštěného plynu. Právě v této podobě může uhlík přes hladinu opět uniknout do vzduchu.
        <SourceLink id="DOI_10_1111_j_2153_3490_1957_tb01849_x"> (Revelle a Suess 1957, s. 24–26)</SourceLink>
      </p>

      <h4 id="vymena">Kdy přechází více CO₂ do vody než zpět do vzduchu</h4>
      <p>
        Molekuly CO₂ přecházejí přes hladinu oběma směry. Když jich za stejnou dobu do vody vstoupí tolik, kolik jich z ní unikne, je voda s okolním vzduchem v rovnováze.
        Když CO₂ ve vzduchu přibude, více molekul vstupuje do vody, než se jich vrací zpět. Jak v ní rozpuštěného CO₂ přibývá, zesiluje i tok zpět do vzduchu.
        Pokud se teplota ani množství CO₂ ve vzduchu dále nemění, oba toky se postupně znovu vyrovnají. O tom, kolik uhlíku mezitím ve vodě přibude, rozhodují i jeho chemické přeměny.
        <SourceLink id="DOI_10_1017_9781009157896_007"> (IPCC 2021, oddíly 5.2.1.5 a 5.3.2.2)</SourceLink>
      </p>

      <h4 id="chemie">Proč přibývá vodíkových iontů a ubývá uhličitanů</h4>
      <p>
        Když rozpuštěný CO₂ reaguje s vodou, vzniká hydrogenuhličitan (HCO₃⁻) a uvolňuje se vodíkový ion (H⁺).
        Hydrogenuhličitan je jednou z podob, v nichž uhlík ve vodě zůstává. V rovnici značí H₂O vodu a CO₂* rozpuštěný oxid uhličitý spolu s malým množstvím kyseliny uhličité.
        Dvojitá šipka říká, že reakce může probíhat oběma směry.
      </p>
      <Equation tex={String.raw`\mathrm{CO_2^* + H_2O \rightleftharpoons H^+ + HCO_3^-}`} label="Rozpuštěný oxid uhličitý, voda, vodíkový ion a hydrogenuhličitan" />
      <p>
        Ve vodě jsou také uhličitanové ionty (CO₃²⁻). Část uvolněných vodíkových iontů se na ně naváže, a tím vznikne další hydrogenuhličitan.
        V následující rovnici tomuto ději odpovídá směr zprava doleva.
      </p>
      <Equation tex={String.raw`\mathrm{HCO_3^- \rightleftharpoons H^+ + CO_3^{2-}}`} label="Rovnováha mezi hydrogenuhličitanem a uhličitanem" />
      <p>
        Tím, že uhličitany část H⁺ navážou, tlumí změnu kyselosti. V nové rovnováze je přesto koncentrace vodíkových iontů vyšší než na začátku, a pH proto klesne.
        Zároveň ubude uhličitanových iontů, přestože rozpuštěného uhlíku celkem přibylo. Ve schématu ukazují modré šipky výměnu CO₂ přes hladinu, oranžové jeho přeměny ve vodě.
        Zeleně jsou vyznačeny děje, které mění podmínky na jednotlivých místech.
        <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a"> (Dickson a kol. 2007, kap. 2, rovnice 2–9)</SourceLink>
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

      <h4 className={styles.testHeading} id="test-laborator">Zkouška 1. Odpovídá výpočet z vody měření v plynu?</h4>
      <p>
        Známe-li teplotu a slanost vody, stačí k výpočtu rovnováhy dvě chemická měření.
        Jedním zjistíme, kolik uhlíku voda obsahuje dohromady v rozpuštěném CO₂, hydrogenuhličitanech a uhličitanech. Této veličině říkáme <strong>celkový rozpuštěný anorganický uhlík</strong>.
        Druhým měřením určíme <strong>alkalinitu</strong>, tedy schopnost vody neutralizovat přidanou kyselinu. Při <Link href="/pozorovani/acidifikace-oceanu/#mereni-alkalinity">měření alkalinity</Link> se ke vzorku přidává přesně odměřená kyselina. Podle změny pH se určí, kolik jí voda zneutralizovala.
        Samotné rozpuštění dalšího CO₂ zvyšuje množství uhlíku a mění poměr mezi jeho rozpuštěnými formami. Alkalinita přitom zůstává stejná.
        <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a"> (Dickson a kol. 2007, kap. 2 a postup 3b)</SourceLink>
      </p>
      <p>
        Pokud rovnice správně popisují tyto přeměny uhlíku, mělo by se dát z rozboru vody určit i to, kolik CO₂ obsahuje plyn v rovnováze s vodou.
        Timothy Lueker, Andrew Dickson a Charles Keeling to v roce 2000 vyzkoušeli s mořskou vodou při různých teplotách a s plynnými směsmi o různém obsahu CO₂.
        Po ustavení rovnováhy obsah CO₂ v plynu přímo změřili. S tímto měřením porovnali hodnotu vypočtenou z uhlíku a alkalinity ve vodě.
        Rovnovážné konstanty, které v rovnicích určují poměr mezi formami uhlíku, převzali ze starších pokusů. Mohli tak ověřit, jak přesně s nimi výpočet předpoví nové měření.
        <SourceLink id="DOI_10_1016_s0304_4203_00_00022_0"> (Lueker a kol. 2000, oddíl 5 a tab. 3)</SourceLink>
      </p>
      <p>
        Obsah CO₂ ve směsi vědci vyjádřili jeho dílčím tlakem, tedy částí celkového tlaku, která na CO₂ připadá. Po malé opravě na chování skutečného plynu se této veličině říká fugacita.
        Při fugacitě pod 500 mikroatmosfér, tedy 500 miliontin atmosféry, činila průměrná relativní odchylka výpočtu od měření 0,07 ± 0,50 %.
        Uvedené rozpětí je 95% interval spolehlivosti pro průměrnou odchylku. Zahrnuje i nulu. S některými jinými tehdy používanými konstantami se výpočet od měření lišil asi o 10 %.
        Zvolený soubor konstant tedy při tomto množství CO₂ dokázal vystihnout rovnováhu vody s plynem.
        <SourceLink id="DOI_10_1016_s0304_4203_00_00022_0"> (Lueker a kol. 2000, tab. 4)</SourceLink>
      </p>

      <h4 className={styles.testHeading} id="test-havaj">Zkouška 2. Jak rychle klesalo pH u Havaje?</h4>
      <p>
        U Havaje mohli vědci postup obrátit. Znali růst CO₂ v atmosféře a ptali se, jak rychle by klesalo pH mořské vody, kdyby se s takovým vzduchem udržovala v rovnováze.
        Pro roky 1988–2007 tak John Dore a kolegové vypočítali očekávaný pokles o 0,016 ± 0,0003 jednotky pH za desetiletí.
        Na stanici ALOHA přitom téměř každý měsíc odebírali vzorky z horních 30 metrů oceánu. Mohli tedy očekávané tempo porovnat s tím, jak se voda za stejné období změnila.
        <SourceLink id="DOI_10_1073_pnas_0906044106"> (Dore a kol. 2009)</SourceLink>
      </p>
      <p>
        Z naměřeného obsahu uhlíku a alkalinity vody vyšel pokles o 0,019 ± 0,002 jednotky pH za desetiletí.
        V letech 1992–1998 a 2003–2007 vědci navíc měřili pH pomocí barviva. Barvivo při různém pH mění barvu. Při <Link href="/metody/spektrofotometrie/#princip">optickém měření</Link> proto lze pH určit podle toho, kolik světla vzorek pohltí na dvou vybraných vlnových délkách.
        Měřili při 25 °C a výsledky přepočítali na teplotu při odběru. Z těchto měření vyšel pokles o 0,014 ± 0,002 jednotky za desetiletí.
        <SourceLink id="DOI_10_1073_pnas_0906044106"> (Dore a kol. 2009, s. 12236)</SourceLink>
      </p>
      <p>
        Každý bod v grafu představuje jeden odhad. Čím dál vlevo od nuly leží, tím rychlejšímu poklesu pH odpovídá.
        Úsečka u každého bodu vyznačuje jednu standardní chybu odhadu sklonu na každou stranu, tedy statistickou nejistotu tempa za celé sledované období.
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
        Autoři ve svém porovnání nezjistili průkazný rozdíl mezi třemi odhady. Růst CO₂ ve vzduchu tak u Havaje vystihl i rychlost, jakou pH klesalo.
        Barvivo poskytlo samostatnou kontrolu, protože k odečtení pH z barvy vzorku vědci nepotřebovali znát jeho obsah uhlíku ani alkalinitu.
        Přepočet optického měření na teplotu v oceánu ovšem využívá některé stejné chemické vztahy jako výpočet pH z uhlíku a alkalinity.
        <Link href="/pozorovani/acidifikace-oceanu/#aloha-povrch">Havajská pozorování</Link> a <SourceLink id="WEB_hahana_soest_hawaii_edu_HOT_the_Hawaii_Ocean_Time_series_d7da8037">data programu Hawaii Ocean Time-series</SourceLink> uvádějí také období jednotlivých odběrů.
        <SourceLink id="DOI_10_1073_pnas_0906044106"> (Dore a kol. 2009)</SourceLink>
      </p>

      <h4 className={styles.testHeading} id="test-globalni">Zkouška 3. Co určuje pokles pH v celém oceánu?</h4>
      <p>
        Jak dobře vystihne růst CO₂ ve vzduchu také změny jinde než u Havaje? Siv Lauvsetová a kolegové v roce 2015 odvodili pH povrchové vody z lodních měření CO₂ a z odhadů alkalinity podle teploty a slanosti.
        Ve 13 oblastech zjistili statisticky průkaznou dlouhodobou změnu. Podle délky místních záznamů hodnotili buď období 1981–2011, nebo 1991–2011. V šesti z nich pH klesalo tempem slučitelným s očekáváním podle samotného růstu CO₂ v atmosféře.
        V sedmi se tempo průkazně lišilo. K vysvětlení těchto rozdílů proto bylo třeba zjistit, co dalšího se ve vodě měnilo.
        <SourceLink id="DOI_10_5194_bg_12_1285_2015"> (Lauvset a kol. 2015, oddíl 3.2 a obr. 6)</SourceLink>
      </p>
      <p id="dalsi-vlivy">
        Proud například může k hladině přinést hlubší vodu tak bohatou na rozpuštěný CO₂, že z ní plyn uniká do vzduchu. Jedna oblast tedy může CO₂ vydávat i v době, kdy ho oceán jako celek přijímá.
        Také teplota působí dvěma cestami. Oteplení při stejném obsahu uhlíku mění chemickou rovnováhu a snižuje pH. Zároveň klesá rozpustnost CO₂, takže voda může následně část plynu ztratit.
        <SourceLink id="DOI_10_1017_9781009157896_007"> (IPCC 2021, oddíly 5.2.1.5 a 5.3.2–5.3.3)</SourceLink>
      </p>
      <p>
        Do změn pH se promítá i život v moři. Při fotosyntéze odebírají řasy z vody CO₂ a pH v okolní vodě může stoupat.
        Dýcháním organismů a rozkladem organické hmoty se CO₂ do vody vrací a pH může opět klesat. Tyto sezónní výkyvy se překrývají s dlouhodobým okyselováním.
        <SourceLink id="DOI_10_1017_9781009157896_007"> (IPCC 2021, oddíly 5.3.2–5.3.3)</SourceLink>
      </p>
      <p>
        Velikost jednotlivých vlivů odhadli Danling Ma, Luke Gregor a Nicolas Gruber z <Link href="/pozorovani/acidifikace-oceanu/#prostorove-zpracovani">měsíčních map povrchového oceánu</Link> OceanSODA-ETHZ za roky 1982–2021.
        Mapy vycházejí z měření CO₂ a alkalinity z lodí. V místech bez odběrů se tyto veličiny odhadují podle vztahů k teplotě, slanosti a dalším vlastnostem, které známe z proměřených míst.
        Z takto doplněných údajů lze pro každé místo vypočítat pH. V průměru za celý zmapovaný oceán vyšel pokles o 0,0166 ± 0,0010 jednotky pH za desetiletí.
        <SourceLink id="DOI_10_1029_2023gb007765"> (Ma a kol. 2023, oddíl 2.1 a tab. 1)</SourceLink>
      </p>
      <p>
        Koncentrace uhlíku ve vodě se může změnit i bez výměny CO₂ se vzduchem. Déšť například povrchovou vodu zředí. Stejné množství uhlíku je pak rozpuštěno ve větším objemu vody.
        Autoři proto přepočítali koncentraci uhlíku a alkalinitu na společnou slanost. Mohli pak vyčíslit zvlášť účinek změn uhlíku a alkalinity, změn teploty i přibývání nebo úbytku sladké vody.
        <SourceLink id="DOI_10_1029_2023gb007765"> (Ma a kol. 2023, oddíl 2.3)</SourceLink>
      </p>
      <p>
        V celkové změně uhlíku se stále překrýval přísun CO₂ z atmosféry se změnami způsobenými prouděním a životem v moři. Kolik ho přibylo vlivem rostoucího CO₂ ve vzduchu, autoři odhadli z chemické rovnováhy.
        V modelu tento odhad upravili podle toho, jak rychle se voda stačí se vzduchem vyrovnávat. Když takto odhadnutý přírůstek odečetli od celkové změny uhlíku, získali takzvanou přirozenou složku.
        Patří k ní změny způsobené prouděním, rozpustností plynu i činností organismů. Také tato složka může reagovat na oteplování způsobené člověkem.
        <SourceLink id="DOI_10_1029_2023gb007765"> (Ma a kol. 2023, oddíl 2.3)</SourceLink>
      </p>
      <p>
        V globálním průměru zvýšil koncentraci vodíkových iontů nejvíc přísun CO₂ z atmosféry. Samotné oteplování vody vysvětlovalo přibližně 15 % celkového růstu koncentrace vodíkových iontů.
        Přirozené složky uhlíku však u hladiny ubylo, což působilo opačným směrem a z velké části účinek oteplování vyrovnalo.
        Celkový pokles pH se tak blížil poklesu očekávanému ze samotného přísunu CO₂.
        <SourceLink id="DOI_10_1029_2023gb007765"> (Ma a kol. 2023, obr. 3 a oddíl 3.3)</SourceLink>
      </p>
    </HypothesisStory>

    <h2 id="mechanismus">Co se mění spolu s kyselostí vody</h2>
    <p>
      U Havaje klesalo pH tempem předpovězeným z růstu CO₂ ve vzduchu. Příjem CO₂ vysvětluje hlavní část dlouhodobé změny také v globálním rozboru, který počítá i s oteplováním vody a dalšími vlivy. Oba výsledky odpovídají hodnocení Mezivládního panelu pro změnu klimatu (IPCC).
      <SourceLink id="DOI_10_1017_9781009157896_007"> (IPCC 2021, oddíl 5.3.2.2)</SourceLink>
    </p>
    <h3 id="velikost-zmeny">Co znamená pokles o desetinu jednotky pH</h3>
    <p>
      Stupnice pH je logaritmická. Pokles o jednu jednotku odpovídá desetinásobnému růstu koncentrace vodíkových iontů. Stejný vztah platí i pro menší změnu.
      Od počátečního pH odečteme konečné pH a na tento rozdíl umocníme desítku. Vyjde nám poměr konečné a počáteční koncentrace. Koncentraci v rovnici označuje písmeno <i>c</i>.
    </p>
    <Equation tex={String.raw`\frac{c_{\mathrm{H,konec}}}{c_{\mathrm{H,zacatek}}}=10^{\mathrm{pH}_{\mathrm{zacatek}}-\mathrm{pH}_{\mathrm{konec}}}`} label="Přepočet rozdílu pH na poměr koncentrací vodíkových iontů" />
    <p>
      Například pokles z 8,2 na 8,1 dává rozdíl 0,1. Deset na mocninu 0,1 je přibližně 1,26, takže koncentrace vodíkových iontů po takovém poklesu vzroste asi o 26 %.
      Obě hodnoty pH přitom musí být na stejné stupnici. U mořské vody se používá několik stupnic podle toho, které vodíkové ionty se do koncentrace započítávají.
      Jak při porovnání vzorků zohlednit i teplotu, vysvětluje <Link href="/pozorovani/acidifikace-oceanu/#stupnice-a-teplota">pozorování o stupnicích pH a teplotě vody</Link>.
      <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a"> (Dickson a kol. 2007, kap. 2, oddíl 4.4)</SourceLink>
    </p>

    <h3>Proč zbývá méně uhličitanů pro tvorbu schránek</h3>
    <p>
      Pokles pH provází úbytek uhličitanových iontů, protože část z nich navázala vodíkový ion a změnila se na hydrogenuhličitan.
      Méně uhličitanových iontů je tak k dispozici pro vznik aragonitu, jedné z forem uhličitanu vápenatého, z níž některé mořské organismy tvoří schránky.
      Tento posun chemické rovnováhy zachycují vedle pH také <Link href="/pozorovani/acidifikace-oceanu/">údaje o nasycení vody aragonitem</Link>.
      <SourceLink id="DOI_10_1017_9781009157896_007"> (IPCC 2021, oddíl 5.3.2)</SourceLink>
    </p>

    <h2 id="nejistoty">Jak přesně známe tempo a příčiny poklesu</h2>
    <p>
      Tempo poklesu pH známe nejlépe tam, kde se vzorky odebírají po celý rok a po mnoho let. Jinde musí mapy doplnit měsíce či celé oblasti bez měření.
      Další nejistota vzniká při rozdělování příčin. Čím pomaleji se voda vyrovnává se vzduchem, tím méně uhlíku můžeme za dané období připsat růstu atmosférického CO₂.
      <SourceLink id="DOI_10_1029_2023gb007765"> (Ma a kol. 2023, oddíly 2.2–2.3)</SourceLink>
    </p>
    <details className="article-details"><summary>Podrobnosti o přesnosti a společných podkladech</summary>
      <p>
        Přesnost chemického výpočtu závisí i na rozsahu, v němž byly rovnice vyzkoušeny. Nad hranicí 500 mikroatmosfér v pokusu Luekera a kolegů vzrostla průměrná relativní odchylka na 3,35 ± 1,22 %.
        Rozpětí je opět 95% interval spolehlivosti průměrné odchylky. Havajské úsečky naproti tomu vyjadřují jednu standardní chybu tempa poklesu pH a globální odhad zahrnuje i nejistotu vstupních dat.
        <SourceLink id="DOI_10_1016_s0304_4203_00_00022_0"> (Lueker a kol. 2000, tab. 4)</SourceLink>
        <SourceLink id="DOI_10_1073_pnas_0906044106"> (Dore a kol. 2009)</SourceLink>
        <SourceLink id="DOI_10_1029_2023gb007765"> (Ma a kol. 2023, oddíl 2.2)</SourceLink>
      </p>
      <p>
        Při dlouhodobém optickém měření by změna barviva či kalibrace přístroje mohla posunout část záznamu pH a zkreslit tak i odhad tempa poklesu.
        Právě takový posun může odhalit porovnání s pH vypočteným z uhlíku a alkalinity. Případná chyba společných chemických konstant se naopak může promítnout do obou výsledků.
        <SourceLink id="DOI_10_1073_pnas_0906044106"> (Dore a kol. 2009)</SourceLink>
      </p>
      <p>
        Mapy OceanSODA a starší rozbory jednotlivých oblastí vycházejí zčásti ze stejných lodních měření. U globální mapy záleží navíc na modelovém odhadu, o kolik příjem CO₂ zaostává za rovnováhou se vzduchem.
        Když Ma a kolegové změnili odhad této nerovnováhy o ±30 %, zbytková přirozená složka uhlíku v jejich výpočtu stále klesala. Její přesná velikost na tomto předpokladu závisí.
        <SourceLink id="DOI_10_1029_2023gb007765"> (Ma a kol. 2023, oddíl 3.3)</SourceLink>
      </p>
      <p>
        U pobřeží může pH výrazně ovlivnit říční voda či místní rozklad organické hmoty. Do hlubokého oceánu se uhlík přijatý na hladině dostává se zpožděním.
        K odhadu tempa pro taková místa jsou potřeba místní měření. Samotný pokles pH ani údaj o nasycení vody aragonitem neurčuje, jak rychle se bude tvořit nebo rozpouštět schránka konkrétního organismu.
        <SourceLink id="DOI_10_1017_9781009157896_007"> (IPCC 2021, oddíly 5.3.2, 5.3.3.1 a 5.3.4.1)</SourceLink>
      </p>
    </details>

    <h2 id="dalsi-overeni">Jaký výsledek by vysvětlení oslabil</h2>
    <p>
      Chemické vysvětlení by zpochybnil opakovaný pokus, v němž by voda při stejné teplotě, slanosti a alkalinitě přijala další CO₂ a její pH by po ustavení rovnováhy zůstalo stejné nebo vzrostlo.
      Odchylka od předpovědi by musela být větší než nejistota měření. Pro přehodnocení příčiny v oceánu by byly rozhodující dlouhé záznamy získané nezávislým měřením pH a uhlíku.
      Pokud by soustavně ukazovaly jiné tempo poklesu, než odpovídá příjmu CO₂ i po započtení teploty, proudění a biologických změn, bylo by třeba hledat další příčinu.
    </p>

    <div className="article-observation-summary" id="zaver"><p className="eyebrow">Shrnutí mechanismu</p><p>
      Povrchový oceán přijímá část CO₂, který přibývá ve vzduchu. Při reakci CO₂ s vodou vznikají vodíkové ionty. Část jich navážou uhličitany, takže změnu kyselosti zmírní. Koncentrace vodíkových iontů přesto vzroste a pH klesne.
      U Havaje růst atmosférického CO₂ vysvětlil i přibližnou rychlost poklesu. V globálním průměru byl přísun CO₂ v letech 1982–2021 hlavní příčinou okyselování povrchové vody. Na jednotlivých místech jeho účinek měnily i teplota, proudění a život v moři.
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
