import Link from "next/link";
import { SourceLink } from "./SourceLink";
import { Equation, InlineMath } from "./Equation";
import example from "../../public/data/methods/hygrometry/example.json";

const dataPath = "/data/methods/hygrometry";

export function HygrometryArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Relativní vlhkost</dt><dd>Poměr skutečného tlaku vodní páry k tlaku při nasycení za dané teploty. Vyjadřuje se v procentech a značí RH.</dd></div>
          <div><dt>Rosný bod</dt><dd>Teplota, při které by při ochlazení vzduchu za stejného tlaku a obsahu vodní páry nastalo nasycení vůči kapalné vodě.</dd></div>
          <div><dt>Elektrická kapacita</dt><dd>Veličina vyjadřující, kolik elektrického náboje se uloží při daném napětí. U vlhkoměru se mění podle vody přijaté citlivou vrstvou.</dd></div>
          <div><dt>Procentní bod</dt><dd>Jednotka rozdílu dvou procentních údajů. Změna RH z 80 na 82 % je nárůst o dva procentní body.</dd></div>
        </dl>
      </aside>

      <div className="article-prose">
        <h2>Jak se měří vlhkost vzduchu</h2>
        <p className="article-prose__intro">
          Hygrometrie je měření vlhkosti plynů, tedy obsahu vodní páry v nich. V meteorologii se
          používá k měření vlhkosti vzduchu u země i ve vyšších vrstvách atmosféry. Vlhkoměr může
          vyjadřovat výsledek jako relativní vlhkost v procentech, rosný bod ve stupních Celsia nebo
          jinou vlhkostní veličinu. Každá popisuje přítomnost vodní páry jiným způsobem.
        </p>
        <p>
          Podrobně zde vysvětlíme kapacitní vlhkoměr, který převádí změnu elektrické vlastnosti
          citlivé vrstvy na údaj o relativní vlhkosti. Takové čidlo pracuje například na automatické
          meteorologické stanici. Nejprve proto potřebujeme porozumět tomu, co procentní údaj o vlhkosti
          znamená.
        </p>

        <h3>Relativní vlhkost a teplota</h3>
        <p>
          Vzduch je směs plynů a vodní pára tvoří jednu z jejích složek. Každý plyn přispívá k celkovému
          tlaku svým dílem. Příspěvek vodní páry se nazývá její <strong>dílčí tlak</strong>
          {" "}a značíme jej <em>e</em>. Při stejné teplotě je větší dílčí tlak spojen s větším
          množstvím páry v daném objemu vzduchu.
        </p>
        <p>
          Pro určení relativní vlhkosti tento tlak porovnáváme s tlakem páry při nasycení.
          Nasycení si můžeme představit jako rovnováhu nad vodní hladinou: do vzduchu se vypařuje
          stejné množství vody, jaké se z páry vrací do kapaliny. Tlak páry v tomto stavu
          označujeme <InlineMath tex={String.raw`e_s`} />. Závisí především na teplotě, s jejím růstem
          se zvyšuje. <SourceLink id="2021_NIST_Humidity_Calibration">Kalibrační metodika amerického
          Národního institutu pro standardy a technologie, NIST, oddíl 3</SourceLink>, popisuje
          tento vztah i menší vliv celkového tlaku vzduchu.
        </p>
        <p>
          <strong>Relativní vlhkost</strong> je podíl skutečného tlaku páry a tlaku při nasycení
          za téže teploty, vyjádřený v procentech. Značka RH pochází z anglického
          {" "}<em>relative humidity</em>:
        </p>
        <Equation tex={String.raw`\mathrm{RH} = 100\times\frac{e}{e_s}`} />
        <p>
          Oba tlaky, <em>e</em> i <InlineMath tex={String.raw`e_s`} />, dosazujeme ve stejných
          jednotkách, například v hektopascalech, značka hPa. Jejich podíl říká, jak velkou část
          hodnoty při nasycení skutečný tlak páry dosahuje. Násobení stem jej převede na procenta.
          Při nasycení se oba tlaky rovnají a RH je 100 %.
        </p>
        <p>
          Relativní vlhkost se proto může měnit i bez přidání nebo odebrání vody. Když vzduch
          ohřejeme za stálého celkového tlaku a se stejným obsahem páry, její dílčí tlak zůstane
          stejný. Tlak při nasycení však vzroste. Ve zlomku tak dělíme stejnou hodnotu větším číslem
          a RH klesá. Právě tato vazba vysvětluje, proč se vlhkost měří společně s teplotou.
          Popisuje ji také <SourceLink id="2013_NPL_Humidity">příručka britské Národní fyzikální
          laboratoře, NPL, oddíl 3.2</SourceLink>.
        </p>

        <h3>Čidlo, které přijímá vodu ze vzduchu</h3>
        <p>
          Kapacitní vlhkoměr využívá tenkou vrstvu polymeru, materiálu tvořeného dlouhými
          molekulárními řetězci. Tato vrstva přijímá vodu z okolního vzduchu a při vysychání ji zase
          uvolňuje. Po ustálení odpovídá obsah vody ve vrstvě vlhkosti jejího okolí. Abychom tuto změnu
          mohli měřit elektricky, je vrstva umístěna mezi dvěma vodivými elektrodami.
        </p>
        <p>
          Elektrody oddělené izolační vrstvou tvoří <strong>kondenzátor</strong>, součástku schopnou
          uchovávat elektrický náboj. Kolik náboje se v ní uloží při daném napětí, vyjadřuje
          elektrická kapacita. Její jednotkou je farad, značka F. Kapacita závisí také na materiálu
          mezi elektrodami. Když polymer přijme vodu, změní se jeho chování v elektrickém poli,
          a tím i kapacita čidla. Elektronika měří právě tuto změnu.
          Princip shrnuje <SourceLink id="2013_NPL_Humidity">NPL v oddílu 3.1</SourceLink>.
        </p>
        <p>
          K získání vlhkosti zbývá určit, jaká RH jednotlivým odečtům kapacity odpovídá.
          Tento vztah zjišťujeme měřením ve známých podmínkách, tedy kalibrací. Protože odezvu
          polymeru ovlivňuje také teplota, patří ke čidlu i její měření. Převod pak může zohlednit
          současně kapacitu a teplotu.
        </p>

        <h3>Kalibrace a převod na vlhkost</h3>
        <p>
          Při kalibraci vystavíme čidlo několika známým vlhkostem a zaznamenáme jeho odezvu.
          Počkáme vždy na ustálení, aby vrstva měla čas přijmout nebo uvolnit vodu. Měření podle
          zamýšleného použití opakujeme i při různých teplotách. Získáme tak vztah mezi odečtem
          přístroje a referenční vlhkostí včetně nejistoty tohoto vztahu. Pokud podle výsledku
          změníme nastavení přístroje, provádíme <strong>seřízení</strong>. Rozdíl mezi kalibrací
          a seřízením vymezuje <SourceLink id="2012_VIM_Calibration">mezinárodní metrologický
          slovník VIM, heslo 2.39</SourceLink>.
        </p>
        <p>
          Známou vlhkost může připravit laboratorní generátor. NIST používá zařízení,
          v němž se vzduch nasytí vodní párou
          při měřené teplotě a tlaku. Tyto dvě veličiny určují referenční stav páry.
          Nižší vlhkosti zařízení vytváří změnou tlaku nebo smícháním známých průtoků vlhkého
          a suchého plynu. Teploměr v testovací komoře pak umožní vyjádřit výslednou relativní
          vlhkost při teplotě kalibrovaného čidla. Postup dokládá
          <SourceLink id="2021_NIST_Humidity_Calibration"> metodika Meyera, Hermana a Millera
          z roku 2021</SourceLink>.
        </p>
        <p>
          Převodní vztah může mít podobu tabulky nebo rovnice uložené v elektronice vlhkoměru.
          Při dalším měření elektronika přečte kapacitu a teplotu a podle tohoto vztahu určí RH.
          Zohlednění teplotní závislosti samotného čidla se nazývá <strong>teplotní kompenzace</strong>.
          Jejím účelem je, aby přístroj rozlišil změnu kapacity způsobenou vlhkostí od změny způsobené
          teplotou materiálu. Chování kapacitních čidel popisují
          <SourceLink id="DOI_10_1175_jtech_d_12_00232_1"> Ingleby a spoluautoři v oddílu 2d</SourceLink>.
        </p>

        <h3>Měření na meteorologické stanici</h3>
        <p>
          Pro soustavné venkovní měření se čidlo stává součástí sondy s ochranným filtrem.
          Převodník zpracovává jeho elektrický signál a záznamník ukládá vypočtenou vlhkost s časem
          měření. Tento způsob používá i americká síť klimatických referenčních stanic,
          anglicky <em>U.S. Climate Reference Network</em>, zkráceně USCRN.
          <SourceLink id="2026_USCRN_Instruments"> Její seznam přístrojů</SourceLink> uvádí
          vlhkoměr Vaisala HMT337.
        </p>
        <p>
          Vlhkostní sonda USCRN je umístěna vedle teploměru v krytu, jehož plášť omezuje sluneční
          ohřev. Ventilátor krytem protahuje okolní vzduch. Čidla tak měří vzduch, který soustavně
          přichází zvenčí. Teplotní sondy jsou zpravidla 1,5 metru nad zemí a vlhkoměr je v prvním
          ze tří teplotních krytů. Uspořádání popisuje
          <SourceLink id="2026_USCRN_Measurements"> dokumentace měření USCRN</SourceLink>.
        </p>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Postup kapacitního měření vlhkosti">
            <div><span>1</span><strong>Vzduch u sondy</strong><small>Pára projde filtrem k citlivé vrstvě.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Polymer a elektrody</strong><small>Přijatá voda změní elektrickou kapacitu.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Převod na vlhkost</strong><small>Elektronika použije kalibraci a teplotu čidla.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Časový záznam</strong><small>Stanice uloží průměrnou RH za daný interval.</small></div>
          </div>
          <figcaption>
            Vlastní schéma kapacitního měření. Šipky postupně propojují přijetí vody, elektrický odečet
            a předání vypočtené vlhkosti záznamníku. Teplota vstupuje do převodu ve třetím kroku.
            Schéma shrnuje princip podle <SourceLink id="2013_NPL_Humidity">NPL, oddílu 3.1</SourceLink>,
            a ukládání údajů podle <SourceLink id="2026_USCRN_Measurements">dokumentace USCRN</SourceLink>.
          </figcaption>
        </figure>
        <p>
          USCRN zveřejňuje pětiminutové průměry RH. Každá taková hodnota popisuje vlhkost vzduchu
          u sondy za jeden časový úsek. Z pětiminutových hodnot vzniká také hodinový údaj.
          U úplné hodiny se stejně dlouhými intervaly sečteme všech dvanáct hodnot a vydělíme
          součet dvanácti. Způsob ukládání a průměrování stanovují
          <SourceLink id="2026_USCRN_Measurements"> popis měření</SourceLink>
          {" "}a <SourceLink id="2026_USCRN_Hourly_Readme">dokumentace hodinových dat USCRN</SourceLink>.
        </p>

        <h3>Co z měření zjistíme o atmosféře</h3>
        <p>
          Relativní vlhkost říká, jak blízko je vzduch nasycení při své současné teplotě.
          Se znalostí teploty ji můžeme přepočítat na tlak vodní páry: z úvodního vztahu
          plyne, že RH vydělíme stem a vynásobíme tlakem při nasycení. Pro získaný tlak páry
          pak hledáme teplotu, při níž by právě nastalo nasycení. Tato teplota je
          <strong>rosný bod</strong>. Vyjadřuje, na kolik by se vzduch musel ochladit při
          nezměněném tlaku a obsahu páry, aby dosáhl nasycení vůči kapalné vodě.
        </p>
        <p>
          Pro sledování množství páry se používá také <strong>měrná vlhkost</strong>.
          Udává hmotnost vodní páry připadající na kilogram vlhkého vzduchu, obvykle v gramech
          na kilogram. K jejímu určení z RH potřebujeme vedle teploty i celkový tlak.
          Tyto převody popisuje <SourceLink id="2021_NIST_Humidity_Calibration">metodika NIST</SourceLink>.
          Umožňují sledovat změny obsahu vody i tehdy, když se současně mění teplota a s ní relativní vlhkost.
        </p>
        <p>
          Dlouhodobé záznamy z mnoha stanic pak umožňují porovnávat vlhkost mezi oblastmi a obdobími.
          <SourceLink id="DOI_10_5194_cp_10_1983_2014"> Willettová a spoluautoři v metodice souboru
          HadISDH z roku 2014</SourceLink> popsali zpracování jednotlivých hlášení teploty a rosného
          bodu na několik vlhkostních veličin. Nejprve provedli převody pro jednotlivá hlášení
          a potom počítali měsíční a prostorové průměry. Toto pořadí zachovává vazbu mezi vlhkostí
          a teplotou ve stejném okamžiku. Protože převod není lineární, převést průměrné vstupy
          by obecně dalo jiný výsledek než zprůměrovat jednotlivě převedená měření.
          Na jejich klimatické využití navazuje článek
          <Link href="/pozorovani/narust-vlhkosti"> Vlhkost atmosféry</Link>.
        </p>
        <p>
          <Link href="/metody/radiosondaz">Radiosondy</Link> nesou vlhkoměry do výšky a doplňují
          staniční měření o svislé rozložení vlhkosti. Referenční síť měření ve volné atmosféře
          GRUAN používá podrobně popsané zpracování, které u sondy RS92 zahrnuje opravy slunečního
          ohřevu a opožděné reakce čidla. Postup zveřejnili
          <SourceLink id="DOI_10_5194_amt_7_4463_2014"> Dirksen a spoluautoři</SourceLink>.
          Měření z různých výšek tak společně zachycují stav atmosféry nad stanicí.
        </p>
        <p>
          Další metody sledují celkovou vodní páru ve sloupci atmosféry, tedy její součet přes
          jednotlivé výšky. Patří k nim
          <Link href="/metody/pozemni-mereni-vodni-pary-pomoci-gnss"> pozemní měření signálů
          globálních navigačních družicových systémů, GNSS</Link>,
          {" "}a <Link href="/metody/pasivni-mikrovlnna-radiometrie">mikrovlnná radiometrie</Link>.
          Jejich výsledky doplňují místní údaje vlhkoměrů. Při společném vyhodnocení proto
          rozlišujeme údaj z jedné výšky a obsah páry v celém sloupci.
        </p>

        <h3>Vývoj elektrického měření</h3>
        <p>
          Mechanické vlhkoměry využívaly změnu délky vlasu nebo jiného materiálu při vlhnutí.
          <SourceLink id="1938_Dunmore_Hygrometer"> Francis Dunmore v práci z roku 1938</SourceLink>
          {" "}popsal elektrický vlhkoměr s vrstvou obsahující sůl na skleněné trubici.
          Voda přijatá vrstvou měnila její elektrický odpor. Dva vodiče ji spojovaly s obvodem,
          který převáděl změnu odporu na frekvenci rádiově přenášeného signálu. Vlhkost tak bylo
          možné zaznamenávat během letu meteorologického balonu.
        </p>
        <p>
          Při popsaném letu elektrický přístroj zachytil výrazné změny vlhkosti, na které vlasový
          vlhkoměr reagoval slabě a přibližně o dvě minuty později. Balon za tu dobu vystoupal
          asi o 670 metrů. Rychlejší odezva umožnila podrobněji rozlišit vlhkost v jednotlivých
          výškách. Dunmoreovo čidlo měřilo odpor, zatímco zde popsané polymerní čidlo měří kapacitu.
          Obě provedení poskytují elektrický signál vhodný pro automatický a vzdálený záznam.
        </p>

        <h3>Další způsoby měření vlhkosti</h3>
        <h4>Psychrometr</h4>
        <p>
          Psychrometr zjišťuje vlhkost z ochlazování mokrého povrchu. Má dva teploměry, kolem
          kterých proudí vzduch. Jeden měří teplotu vzduchu, druhý je obalený navlhčeným knotem.
          Voda se z knotu odpařuje a odebírá teplo, takže mokrý teploměr se ochladí.
          Při stejné teplotě a proudění je v sušším vzduchu odpařování intenzivnější a rozdíl
          teplot větší. Za ustálených podmínek tento rozdíl umožňuje určit vlhkost.
        </p>
        <p>
          Při odpařování je u mokrého povrchu pára nasycená, zatímco v okolním vzduchu je její tlak nižší.
          Výpočet vychází z tlaku nasycené páry při teplotě mokrého povrchu a odečítá tento rozdíl.
          Jeho velikost určuje z ochlazení teploměru, celkového tlaku vzduchu a vztahu pro dané
          provedení psychrometru. Výsledkem je tlak páry v okolním vzduchu:
        </p>
        <Equation tex={[
          String.raw`e \approx e_s(T_w)`,
          String.raw`- A p(T-T_w)`,
        ]} />
        <p>
          <em>T</em> je teplota suchého teploměru a <InlineMath tex={String.raw`T_w`} /> teplota
          mokrého teploměru, obě ve °C. Jejich rozdíl vyjadřuje ochlazení odpařováním.
        </p>
        <p>
          <em>p</em> je celkový tlak vzduchu v hPa
          a <InlineMath tex={String.raw`e_s(T_w)`} /> tlak nasycené páry při teplotě mokrého povrchu,
          také v hPa. Výsledný dílčí tlak páry <em>e</em> proto také vychází v hPa.
        </p>
        <p>
          Součinitel <em>A</em> odpovídá konstrukci, větrání a stavu povrchu.
          Má jednotku K⁻¹. Kelvin, značka K, je zde jednotkou teplotního rozdílu a rozdíl
          jednoho kelvinu je stejně velký jako rozdíl jednoho stupně Celsia.
          Při násobení se jednotky teplotního rozdílu vykrátí a celý odečítaný člen vychází v hPa.
        </p>
        <p>
          Z vypočteného tlaku páry získáme RH úvodním vztahem: vydělíme jej tlakem při nasycení
          za teploty suchého teploměru a vynásobíme stem.
          <SourceLink id="DOI_10_1175_jtech_d_12_00232_1"> Ingleby a spoluautoři, rovnice 3
          a tabulka 3</SourceLink>, dokládají použití vztahu a hodnoty součinitele pro různá
          provedení. Za mrazu volíme vztah podle toho, zda je knot mokrý, nebo pokrytý ledem.
        </p>

        <h4>Chlazené zrcátko</h4>
        <p>
          Vlhkoměr s chlazeným zrcátkem určuje přímo teplotu, při které se tvoří rosa.
          Přístroj zrcátko ochlazuje a pomocí světla sleduje vznik kapiček na jeho povrchu.
          Jejich objevení změní odraz světla. Regulace podle tohoto signálu nastavuje teplotu tak,
          aby se udržovala tenká rovnovážná vrstva rosy. Teploměr zrcátka pak udává rosný bod.
          Tento princip popisuje <SourceLink id="2013_NPL_Humidity">NPL v oddílu 3.1</SourceLink>.
        </p>
        <p>
          Rosnému bodu odpovídá určitý tlak nasycené páry. Tím získáme tlak páry v měřeném vzduchu
          a společně s teplotou vzduchu z něj vypočteme RH. Pod nulou se může na zrcátku vytvořit
          kapalná voda i led. Nad ledem nastává rovnováha při jiném tlaku páry než nad vodou
          stejné teploty. Teplotu rovnováhy s ledem označujeme jako <strong>bod ojínění</strong>
          a při převodu používáme vztah pro nasycení nad ledem.
        </p>

        <h4>Vyhřívaná kapacitní sonda</h4>
        <p>
          Některé kapacitní sondy se mírně zahřívají, aby na čidle nekondenzovala voda.
          Takové provedení HMT337 popisuje
          <SourceLink id="2013_Vaisala_HMT330"> příručka Vaisala HMT330, verze K, strany 25 a 46</SourceLink>.
          Ohřev snižuje relativní vlhkost u čidla podle stejného vztahu, který jsme vysvětlili
          v úvodu. Přístroj proto nejprve určí tlak páry z RH a teploty zahřátého čidla.
          Potom jej porovná s tlakem při nasycení za teploty okolního vzduchu, měřené samostatným
          teploměrem. Výsledkem je RH okolí. Převod předpokládá, že ohřev změnil teplotu vzduchu
          u čidla bez přidání či odebrání vodní páry.
        </p>

        <h2>Nejistoty a ověření měření</h2>
        <p>
          Výsledek ovlivňují teplota u čidla, jeho čistota, rychlost odezvy a stálost kalibrace.
          Pomalá odezva tlumí krátké výkyvy, posun kalibrace ovlivní i dlouhodobý průměr.
          Terénní porovnání v Camborne ukázalo u zkoušeného psychrometru průměrně asi o jeden
          procentní bod nižší RH než u reference s chlazeným zrcátkem. U kapacitních čidel se
          projevily rozdíly mezi kusy i postupný posun k vyšším hodnotám.
          <SourceLink id="DOI_10_1175_jtech_d_12_00232_1"> Výsledky Inglebyho a spoluautorů</SourceLink>
          {" "}se vztahují k testovaným přístrojům a podmínkám.
        </p>
        <details className="method-details">
          <summary>Podrobnosti nejistot a ověření</summary>
          <h3>Podmínky u čidla</h3>
          <p>
            Teplota ovlivňuje RH i odezvu citlivé vrstvy. Porucha ventilace proto může změnit
            současně údaj vlhkoměru i sousedního teploměru. USCRN má v sestavě jediný vlhkoměr,
            zatímco <Link href="/metody/odporova-termometrie-a-termistory">teplotu</Link> měří třemi
            čidly. Tuto odlišnost popisuje <SourceLink id="2026_USCRN_Measurements">dokumentace sítě</SourceLink>.
            Znečištění polymeru může změnit příjem vody a po orosení může sonda zůstávat vlhká
            déle než okolí. U psychrometru vysychající knot zmenšuje ochlazení a vede k příliš vysoké RH.
            U zrcátka prach a soli ovlivňují tvorbu a optické rozpoznání kondenzátu.
          </p>
          <h3>Kalibrace a stálost odezvy</h3>
          <p>
            Kalibrační reference přispívá svou nejistotou k výsledku. V komoře se proto podle
            <SourceLink id="2021_NIST_Humidity_Calibration"> metodiky NIST</SourceLink> kontrolují
            teplotní rozdíly, ustálení, netěsnosti a voda v přívodech. Průchod od suchých podmínek
            k vlhkým a zpět odhaluje hysterezi, tedy závislost údaje na předchozím stavu.
            Další měření po nastavení převodu ověřují jeho použitelnost mimo body použité k nastavení.
          </p>
          <p>
            <SourceLink id="2026_USCRN_Instruments">USCRN uvádí každoroční kalibraci nebo ověření
            přístrojů</SourceLink> a průběžný dohled nad daty. Porovnání před údržbou a po ní
            pomáhá odhalit změnu odezvy. <SourceLink id="2013_NPL_Humidity">NPL</SourceLink> spojuje
            opakovanou kalibraci s posouzením podmínek provozu.
          </p>
          <h3>Terénní porovnání</h3>
          <p>
            <SourceLink id="DOI_10_1175_jtech_d_12_00232_1">Ingleby a spoluautoři</SourceLink>
            {" "}porovnávali v Camborne v roce 2008 psychrometry a kapacitní čidla HygroClip
            se dvěma přístroji Thygan s chlazeným zrcátkem. Zkouška sledovala chování po laboratorním
            nastavení. Reference měřila rosný bod jiným principem, převod na RH však používal
            společnou teplotu vzduchu. Porovnání tedy poskytlo další měření vlhkosti, ale sdílelo
            jeden vstup a zahrnovalo i vlastní chyby zrcátek.
          </p>
          <h3>Rozlišení, přesnost a rychlost</h3>
          <p>
            <SourceLink id="2013_Vaisala_HMT330">Příručka HMT330, verze K, strana 169</SourceLink>,
            uvádí pro senzory HUMICAP 180 rozsah 0–100 % RH. Při 15–25 °C udává přesnost
            ±1 procentní bod do 90 % RH a ±1,7 bodu nad touto hodnotou. Jde o specifikaci
            uvedeného provedení za těchto podmínek. U HUMICAP 180 a 180C trvá v klidném vzduchu
            dosažení 90 % změny osm sekund s mřížkou a čtyřicet sekund se slinutým filtrem.
            V chladu se odezva zpomaluje. Rychlé výkyvy tlumí čidlo i následné průměrování.
          </p>
          <p>
            Rozlišení veřejných údajů USCRN je jeden procentní bod. Popisuje jemnost zápisu,
            nikoli celkovou nejistotu měření. Datový soubor neobsahuje úplné vyčíslení vlivů
            konkrétní sondy, takže z něj interval nejistoty jednotlivé hodiny neurčíme.
            Průměrování může omezit rychlé kolísání, trvalý posun kalibrace však zachová.
            Rozptyl naměřených hodnot navíc obsahuje skutečné změny vlhkosti.
          </p>
          <h3>Dlouhodobé záznamy</h3>
          <p>
            Výměny čidel, krytů nebo místa a času pozorování mohou narušit srovnatelnost měření.
            <Link href="/metody/kontrola-kvality-a-homogenizace"> Kontrola kvality a homogenizace</Link>
            {" "}takové změny hledá a posuzuje. <SourceLink id="DOI_10_5194_cp_10_1983_2014">HadISDH</SourceLink>
            {" "}odděluje nejistoty měření, zpracování a neúplného pokrytí. Shoda produktů se společnými
            stanicemi kontroluje především rozdíly zpracování, protože chyby původních přístrojů mohou sdílet.
          </p>
        </details>

        <h2>Příklad měření a výpočtu</h2>
        <h3>Hodinová vlhkost na Blue Hill</h3>
        <p>
          Na stanici <strong>MA Blue Hill 0 W</strong> se dne <strong>1. ledna 2025</strong> mezi
          půlnocí a jednou hodinou místního standardního času pohybovaly zveřejněné pětiminutové
          průměry relativní vlhkosti od 80 do 87 %. Z těchto dvanácti údajů vypočítáme vlhkost
          za celou hodinu. Jde o stejné místo a období jako v článku
          o <Link href="/metody/odporova-termometrie-a-termistory">odporové termometrii</Link>.
        </p>
        <p>
          Vstupy pocházejí z <SourceLink id="2025_USCRN_Blue_Hill_Subhourly">veřejného pětiminutového
          souboru USCRN za rok 2025</SourceLink>. Zveřejňuje jej americké Národní centrum pro
          informace o životním prostředí, NCEI, při Národním úřadu pro oceán a atmosféru, NOAA.
          Pracujeme s podobou dat převzatou 4. října 2026. Veřejné údaje už prošly kalibrací
          a průměrováním. Jednotlivé elektrické odečty a kalibrační koeficienty soubor neobsahuje,
          náš výpočet proto začíná u zveřejněných pětiminutových hodnot.
        </p>
        <p>
          Čas na řádku označuje konec intervalu. Údaj 00:05 tedy popisuje období 00:00–00:05.
          Vedle RH je příznak kvality, který označuje výsledek automatické kontroly dat.
          Všech dvanáct vybraných hodnot má příznak 0, tedy údaj bez označené chyby,
          a žádná nechybí. Význam sloupců stanovuje
          <SourceLink id="2017_USCRN_Subhourly_Readme"> popis formátu subhourly01</SourceLink>.
        </p>
        <figure className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" aria-label="Vlhkost na Blue Hill po pěti minutách" tabIndex={0}>
            <table>
              <thead><tr><th scope="col">Konec intervalu</th><th scope="col">RH (%)</th><th scope="col">Příznak kvality</th></tr></thead>
              <tbody>
                {example.rows.map((row) => (
                  <tr key={row.endLST}>
                    <th scope="row">{row.endLST.slice(0, 2)}:{row.endLST.slice(2)}</th>
                    <td>{row.relativeHumidityPercent}</td><td>{row.qualityFlag}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption>
            Dvanáct původních pětiminutových průměrů ze stanice Blue Hill, 1. ledna 2025.
            Časy jsou místní standardní, UTC − 5 hodin. Tabulka zobrazuje vybrané sloupce
            <SourceLink id="2025_USCRN_Blue_Hill_Subhourly"> veřejných dat NOAA/NCEI</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Každá hodnota zastupuje stejně dlouhých pět minut, takže všechny dostanou v průměru
          stejnou váhu. Jejich součet je 1 016. Vydělením počtem intervalů získáme:
        </p>
        <Equation tex={[
          String.raw`\text{Průměrná RH} = \frac{1\,016}{12}`,
          String.raw`= 84{,}666\ldots\,\%`,
        ]} />
        <p>
          Po zaokrouhlení na celá procenta vychází <strong>85 %</strong>.
          <SourceLink id="2025_USCRN_Blue_Hill_Hourly"> Hodinový soubor NOAA</SourceLink> uvádí
          pro interval končící v 01:00 právě 85 %, rovněž s příznakem kvality 0.
          Z dvanácti kratších intervalů jsme tak získali stejný hodinový údaj, jaký zveřejňuje síť.
          Shoda ověřuje výběr a zprůměrování dat, oba soubory přitom pocházejí ze stejného vlhkoměru.
          Desetinná místa výpočtu vznikla dělením údajů zaokrouhlených na celá procenta.
        </p>
        <details className="method-details">
          <summary>Data a skript pro zopakování příkladu</summary>
          <p>
            Stáhněte následující čtyři soubory do jedné složky. Skript vyžaduje Node.js 22 nebo novější
            a spustí se příkazem <code>node reproduce.mjs</code>. Nepotřebuje další knihovny ani síťové
            připojení. Vypíše počet hodnot, součet, průměr, zaokrouhlený výsledek a porovnání s NOAA.
          </p>
          <ul>
            <li><a href={`${dataPath}/blue-hill-five-minute.txt`} download>Původních 12 řádků pětiminutových dat</a></li>
            <li><a href={`${dataPath}/blue-hill-hourly.txt`} download>Původní řádek hodinových dat</a></li>
            <li><a href={`${dataPath}/example.json`} download>Výběr dat, verze a kontrolní součty</a></li>
            <li><a href={`${dataPath}/reproduce.mjs`} download>Výpočet a kontrola vstupů</a></li>
          </ul>
          <p>
            Stanice má identifikační číslo 94785. Vybraná hodina odpovídá 05:00–06:00 světového času UTC.
            V pětiminutovém souboru je RH_AVG ve sloupci 16 a příznak kvality ve sloupci 17,
            v hodinovém souboru je RH_HR_AVG ve sloupci 27 a příznak ve sloupci 28.
            Hodnota −9999 označuje chybějící RH.
          </p>
          <p>
            Zachováváme všechny původní sloupce. Soubor pětiminutových dat má formát 05, hodinový formát
            03. Údaj CRX_VN 2.623 na vybraných řádcích označuje verzi programu záznamníku, nikoli verzi
            celého archivu. Kontrolní součty SHA-256 určují přesný obsah výřezů i původních ročních
            souborů. Pokud se soubor změní, skript skončí chybou.
          </p>
          <p>
            Roční soubor neuvádí sériové číslo, zapojení vyhřívání ani kalibrační list konkrétní sondy.
            Podrobnosti uspořádání pro tuto hodinu proto nelze určit jen podle názvu typu HMT337.
          </p>
          <p>
            Skript lze spustit i nad staženými ročními soubory, jejichž cesty předáte jako dva argumenty.
            Hlídá úplnost hodiny, časy v UTC i místním čase, verzi, rozsah RH a příznaky kvality.
            Chybějící nebo označený údaj nepřepočítává na nulu a odmítne i duplicitní interval.
            Jde o kontrolu této úplné hodiny, nikoli o náhradu všech pravidel NOAA pro neúplná data.
            Veřejné údaje přebíráme s uvedením původu podle
            <SourceLink id="WEB_NOAA_Using_Content_FAQ"> podmínek NOAA</SourceLink>.
          </p>
        </details>

        <h3>Ilustrace vlivu teploty</h3>
        <p>
          Vliv ohřátí na relativní vlhkost ukazuje samostatný ilustrační příklad
          z <SourceLink id="2013_NPL_Humidity">příručky NPL, oddílu 3.2</SourceLink>.
          Vzduch s RH 50 % při 20 °C má po ohřátí na 21 °C za stálého tlaku a bez změny obsahu páry
          RH přibližně 47 %. Obsah vody zůstal stejný, ale zvýšil se tlak při nasycení, s nímž
          skutečný tlak páry porovnáváme. Proto procentní údaj klesl. Při sledování změn množství
          vodní páry tedy potřebujeme vedle RH znát i teplotu.
        </p>

        <div className="method-conclusion">
          <h2>Co hygrometrie umožňuje zjistit</h2>
          <p>
            Hygrometrie poskytuje údaje o vlhkosti vzduchu v místě a čase měření. Společně s teplotou
            a tlakem umožňuje určit množství vodní páry a sledovat jeho změny. Dlouhodobě srovnatelná
            měření z pozemních stanic a radiosond dokládají, jak se vlhkost liší mezi oblastmi,
            výškami a obdobími. Tvoří tak měřicí základ pro poznávání změn vlhkosti atmosféry.
          </p>
        </div>
      </div>
    </article>
  );
}
