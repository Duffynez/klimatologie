import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import { Equation, InlineMath } from "./Equation";
import example from "../../public/data/methods/rain-gauges/example.json";

const dataPath = "/data/methods/rain-gauges";
const number = (value: number) => value.toLocaleString("cs-CZ", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export function RainGaugeArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Srážkový úhrn</dt><dd>Množství vody spadlé na jednotku vodorovné plochy za určenou dobu. Jeden milimetr odpovídá jednomu litru na metr čtvereční.</dd></div>
          <div><dt>Intenzita srážek</dt><dd>Úhrn dělený délkou intervalu, obvykle v milimetrech za hodinu. Vždy potřebuje údaj o tom, přes jak dlouhý interval se počítala.</dd></div>
          <div><dt>Vodní hodnota sněhu</dt><dd>Množství kapalné vody, které by vzniklo roztáním sněhu. Liší se od výšky sněhové vrstvy.</dd></div>
          <div><dt>Disdrometr</dt><dd>Přístroj pro měření vlastností jednotlivých srážkových částic. Z jejich velikostí a počtů vzniká rozdělení velikostí kapek či vloček.</dd></div>
        </dl>
        <p className="article-glossary__note">Stejný hodinový úhrn může vzniknout z dlouhého mírného deště i z krátké prudké přeháňky. Rozliší je měření v kratších intervalech.</p>
      </aside>

      <div className="article-prose">
        <h2>Jak se měří srážky</h2>
        <p className="article-prose__intro">
          Srážkoměr je přístroj, který zachycuje déšť nebo sníh a měří množství vody spadlé
          na určitou plochu. Disdrometr měří vlastnosti jednotlivých padajících kapek či
          vloček, především jejich velikost a rychlost. Společně umožňují popsat, kolik
          vody při srážkách spadlo, jak rychle přibývala a z jakých částic srážky sestávaly.
        </p>
        <p>
          Váhový srážkoměr si vysvětlíme na přístroji Geonor T-200B v americké referenční
          klimatické síti USCRN, anglicky U.S. Climate Reference Network. Tento přístroj
          průběžně váží obsah sběrné nádoby. Potom se podíváme na optický disdrometr
          OTT Parsivel², který sleduje průchod částic pásem laserového světla.
        </p>

        <h3>Množství vody a síla deště</h3>
        <p>
          Při stejném dešti zachytí větší otvor více vody než menší. Abychom mohli výsledky
          porovnávat, dělíme zachycený objem plochou otvoru. Výsledek si můžeme představit
          jako výšku vodní vrstvy rozprostřené po této ploše. Nazývá se <strong>srážkový úhrn</strong>{" "}
          a obvykle jej udáváme v milimetrech. Jeden milimetr odpovídá jednomu litru vody
          na metr čtvereční. Jde o množství dopadající vody před odtokem, vsakem a výparem.
          Tento základ měření popisuje <SourceLink id="WEB_World_Meteorological_Organiz_prirucka_WMO_c_8_f7933a04">příručka
          Světové meteorologické organizace, svazek I, kapitola 6</SourceLink>.
        </p>
        <p>
          Objem můžeme odečíst přímo nebo jej získat vážením. K převodu hmotnosti na objem
          potřebujeme hustotu vody, tedy hmotnost připadající na jednotku objemu.
          Hmotnost vydělíme hustotou a získaný objem plochou otvoru. Obě cesty tak vedou
          ke stejnému vztahu:
        </p>
        <Equation tex={String.raw`P = \frac{V}{A} = \frac{\Delta m}{\rho A}`} />
        <p>
          P označuje srážkový úhrn, V zachycený objem a A plochu otvoru.
          Δm je hmotnost přidané vody a ρ její hustota. Značka Δ znamená změnu za sledovaný
          interval. Dosadíme-li objem v m³ a plochu v m², vyjde úhrn v metrech.
          Stejného výsledku dosáhneme s hmotností v kilogramech a hustotou v kg/m³.
          Násobením tisícem převedeme metry na milimetry.
        </p>
        <p>
          Vážením lze měřit i zachycený sníh. Jeho hmotnost převedeme pomocí hustoty
          kapalné vody na objem, který by vznikl po roztání. Tak získáme <strong>vodní hodnotu
          sněhu</strong>. Výška samotné sněhové vrstvy je jiná veličina, protože mezi
          vločkami zůstává vzduch.
        </p>
        <p>
          Úhrn vždy patří určitému místu a době. Chceme-li vyjádřit sílu deště, potřebujeme
          také vědět, jak rychle voda přibývala. Úhrn vydělíme délkou intervalu a dostaneme
          <strong> průměrnou intenzitu srážek</strong>:
        </p>
        <Equation tex={String.raw`R = \frac{P}{\Delta t}`} />
        <p>
          R je průměrná intenzita a Δt délka intervalu. S úhrnem P v milimetrech a časem
          v hodinách vyjde intenzita v mm/h. Kratší intervaly podrobněji zachycují,
          kdy déšť zesílil a kdy zeslábl. Poznáme tak, zda hodinový úhrn vznikl
          rovnoměrným deštěm, nebo krátkou prudkou přeháňkou.
        </p>

        <h3>Váhový srážkoměr</h3>
        <p>
          Geonor T-200B má sběrný otvor o ploše 200 cm², tedy 0,02 m². Srážky jím padají
          do nádoby zavěšené na snímačích zatížení. V provedení USCRN nádobu společně
          nesou tři snímače. Kolem přístroje jsou větrolamy, které zpomalují proudění
          vzduchu nad otvorem. Vyhřívané ústí udržuje cestu do nádoby průchodnou i při
          namrzání a sněžení. Uspořádání zachycuje <SourceLink id="2026_NOAA_Geonor_Description">technický
          popis NOAA</SourceLink>.
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/rain-gauges/noaa-uscrn-precipitation-gauges.png"
            alt="Váhový srážkoměr vpravo uvnitř kruhu kovových lamel a záložní srážkoměr vlevo. Oba stojí uvnitř dřevěného větrolamu."
            width={1300} height={975} sizes="(max-width: 700px) 100vw, 770px" unoptimized />
          <figcaption>
            Srážkoměry na stanici USCRN. Vpravo je váhový přístroj obklopený lamelami
            větrolamu, vlevo záložní srážkoměr s překlápěcími nádobkami. Vnější dřevěná
            konstrukce dále zmírňuje proudění vzduchu. Fotografie: <SourceLink id="2018_NOAA_USCRN_Precipitation_Photo">NOAA NCEI</SourceLink>,
            použita podle <SourceLink id="WEB_NOAA_Using_Content_FAQ">podmínek NOAA</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Uvnitř každého snímače je napnutá kovová struna. Přibývající voda zvětšuje
          zatížení, a tím i napnutí struny. Napjatější struna kmitá rychleji.
          Elektronický impulz ji rozkmitá a elektronika změří její frekvenci, tedy
          počet kmitů za sekundu. Jednotkou je hertz, značka Hz. Změnu hmotnosti tak
          přístroj nejprve zaznamená jako změnu frekvence.
        </p>
        <p>
          Abychom z frekvence zjistili množství vody, potřebujeme kalibraci. Při ní
          porovnáváme odezvu snímače se známým zatížením. Známou hmotnost můžeme podle
          plochy otvoru vyjádřit rovnou v milimetrech vody. Získáme tak dvojice hodnot:
          frekvenci a odpovídající obsah nádoby. Kalibrační vztah potom umožní převádět
          i hodnoty mezi těmito body.
        </p>
        <p>
          Známé zatížení při kalibraci se opírá o doložený sled porovnání
          s referencemi pro měření hmotnosti. Tím se i odečet srážkoměru propojuje
          s referenčními měřeními. Tomuto propojení říkáme metrologická návaznost.
        </p>
        <p>
          Převod pro Geonor začíná odečtením frekvence prázdné nádoby od právě měřené
          frekvence. K rozdílu přiřadí množství vody pomocí dvou koeficientů, tedy čísel
          určených kalibrací konkrétního snímače. První člen roste přímo s rozdílem
          frekvencí, druhý zachycuje zakřivení převodního vztahu:
        </p>
        <Equation tex={[
          String.raw`H = 10\bigl[a(f-f_0)`,
          String.raw`+ b(f-f_0)^2\bigr]`,
        ]} />
        <p>
          H je obsah nádoby vyjádřený výškou vody v milimetrech. Frekvence f je aktuální
          odečet a <InlineMath tex={String.raw`f_0`} /> odečet prázdné nádoby při kalibraci,
          obě v Hz. Koeficient a má v tomto zápisu jednotku cm/Hz a b jednotku cm/Hz².
          Výraz v hranaté závorce proto dává centimetry a násobení deseti je převádí
          na milimetry. Koeficienty jsou v protokolu každého snímače. Rovnici uvádí
          <SourceLink id="2016_Geonor_T200B_Manual"> oddíl 7.2 manuálu</SourceLink>, kde
          jsou frekvence přibližně 1 000 Hz pro prázdnou a 3 000 Hz pro plnou nádobu.
        </p>
        <p>
          Veličina H popisuje veškerý obsah nádoby v okamžiku odečtu. Srážkový úhrn
          za určitou dobu získáváme z jeho přírůstku. V síti USCRN každý ze tří snímačů
          poskytuje vlastní záznam obsahu nádoby, převedený vlastním kalibračním vztahem.
          Tyto záznamy se následně zpracují společně do pětiminutových úhrnů.
        </p>

        <h3>Zpracování přírůstků vody</h3>
        <p>
          Při zpracování rozlišujeme přibývání srážek od kolísání odečtů. Nádoba se může
          chvět a elektronický signál obsahuje drobné výkyvy, kterým říkáme šum.
          Výpar zase pomalu ubírá vodu ze skutečného obsahu nádoby.
          <SourceLink id="2015_USCRN_OAP2"> Algoritmus NOAA OAP 2.0 z roku 2015</SourceLink>{" "}
          proto kombinuje údaje všech tří snímačů a využívá také samostatný detektor,
          který rozpoznává přítomnost padajících srážek.
        </p>
        <p>
          Příspěvky tří snímačů mají různou váhu. Ta se určuje podle jejich kolísání
          v předchozích hodinách. Klidnější záznam má na společný výsledek větší vliv.
          Algoritmus zároveň kontroluje chybné odečty a zohledňuje kladné i záporné
          změny. Při kolísání kolem stálého obsahu se totiž zdánlivé přírůstky a úbytky
          střídají. Zachování obou znamének umožňuje tyto výkyvy vzájemně vyrovnat.
        </p>
        <p>
          Velmi malé příspěvky se přenášejí do dalšího vhodného intervalu, dokud
          nahromaděné množství dosáhne vykazovacího prahu 0,2 mm. Práh tedy určuje,
          kdy se drobné množství objeví ve výsledku. Hotové úhrny se zapisují s krokem
          0,1 mm. Tento krok určuje odstup sousedních zapisovaných hodnot.
          Zpracované pětiminutové úhrny už můžeme sčítat za delší dobu nebo převádět
          na průměrnou intenzitu deště.
        </p>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Postup měření váhovým srážkoměrem">
            <div><span>1</span><strong>Zachycené srážky</strong><small>Voda a sníh přidávají hmotnost do nádoby s otvorem 200 cm².</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Obsah nádoby</strong><small>Frekvence tří strun se podle kalibrace převádějí na obsah v mm vody.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Přírůstky vody</strong><small>Společné zpracování záznamů poskytne pětiminutové úhrny.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Úhrn a intenzita</strong><small>Úhrny sčítáme. Dělením dobou měření získáme intenzitu.</small></div>
          </div>
          <figcaption>
            Vlastní schéma podle <SourceLink id="2026_USCRN_Measurements">popisu měření USCRN</SourceLink>{" "}
            a <SourceLink id="2015_USCRN_OAP2">algoritmu NOAA</SourceLink>.
            Šipky sledují převod zachycených srážek na úhrn a intenzitu.
          </figcaption>
        </figure>

        <h3>Optický disdrometr</h3>
        <p>
          Disdrometr sleduje srážkové částice během pádu. Optický
          <SourceLink id="2024_OTT_Parsivel2_Manual"> OTT Parsivel²</SourceLink> má proti
          sobě vysílač a přijímač. Mezi nimi prochází vodorovný pás laserového světla.
          Padající částice část světla na krátkou dobu zastíní. Přijímač převádí
          množství dopadajícího světla na elektrické napětí, takže průchod částice
          zaznamená jako krátký pokles napětí.
        </p>
        <figure className="article-figure article-figure--portrait" style={{ maxWidth: 400 }}>
          <Image className="article-figure__media" src="/media/rain-gauges/nasa-impacts-parsivel.png"
            alt="Disdrometr Parsivel se dvěma protilehlými hlavami na ramenech ve tvaru písmene V, upevněný nad skříní na travnatém stanovišti."
            width={400} height={400} sizes="(max-width: 440px) 100vw, 400px" unoptimized />
          <figcaption>
            Optický disdrometr Parsivel v terénu. Částice procházejí mezerou mezi
            dvěma hlavami s vysílačem a přijímačem. Fotografie: <SourceLink id="2022_NASA_IMPACTS_Parsivel_Photo">NASA,
            přehled přístrojů kampaně IMPACTS 2022</SourceLink>, použita podle
            <SourceLink id="WEB_NASA_Guidelines_for_using_NASA_Images_and_Media_Guide_e6f9e9e4"> podmínek NASA</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Velikost poklesu napětí nese informaci o velikosti částice. Větší částice
          zastíní větší část světla. Převod mezi zastíněním a velikostí se určuje
          kalibrací. Výrobce používá referenční částice o rozměrech 0,5, 1, 2 a 4 mm,
          jejichž známé velikosti porovnává s optickou odezvou.
        </p>
        <p>
          Doba poklesu napětí ukazuje, jak dlouho částice procházela světelným pásem.
          Signál začne při vstupu částice a skončí, když pás celá opustí. K určení
          uražené dráhy proto potřebujeme rozměr částice i tloušťku pásu.
          Dráha dělená dobou průchodu pak dává rychlost pádu.
        </p>
        <p>
          Každou částici přístroj zařadí podle velikosti a rychlosti do příslušného
          rozmezí neboli třídy. Používá 32 velikostních a 32 rychlostních tříd.
          Výsledná tabulka má 1 024 polí pro jejich vzájemné kombinace.
          V každém poli je počet částic, které za sledovanou dobu měly současně
          danou velikost i rychlost. Sečtením počtů přes rychlostní třídy získáme,
          kolik částic připadlo na jednotlivá rozmezí velikosti.
        </p>
        <p>
          Manuál z února 2024 uvádí měřicí plochu 180 × 30 mm, tedy 54 cm².
          Pokrývá velikosti kapalných částic od 0,2 do 8 mm, pevných od 0,2 do 25 mm
          a rychlosti od 0,2 do 20 m/s. Velikostní i rychlostní třídy mají různou
          šířku, takže částice seskupují s různou podrobností v různých částech rozsahu.
        </p>
        <p>
          Velikost a rychlost společně pomáhají rozlišovat i druh srážek.
          Přístroj porovnává zastoupení částic v tabulce s pravidly pro déšť, sníh
          a další druhy. Označení druhu srážky tak vzniká zpracováním těchto dvou
          měřených vlastností.
        </p>

        <h3>Úhrn deště z počtu a velikosti kapek</h3>
        <p>
          Z počtů kapek můžeme získat také množství vody. Nejprve však zpracování
          odděluje padající déšť od kapek vzniklých rozstřikem na okolních předmětech.
          Takové kapky se mohou pohybovat jinak než déšť. <SourceLink id="DOI_10_1175_jtech_d_13_00174_1">Tokay,
          Wolff a Petersen</SourceLink> popisují filtr, který vyřazuje nepravděpodobné
          kombinace velikosti a rychlosti. Teprve přijaté počty vstupují do výpočtu úhrnu.
        </p>
        <p>
          Pro každou velikostní třídu potřebujeme objem jedné kapky. Malé kapky jsou
          přibližně kulové, větší jsou zploštělé. Při převodu používáme průměr koule,
          která má stejný objem jako kapka. Tento průměr se proto nazývá objemově
          ekvivalentní. Zpracování každé třídě přiřadí jeden takový průměr,
          který při výpočtu zastupuje kapky v daném rozmezí velikostí.
        </p>
        <p>
          Objem koule o průměru D je <InlineMath tex={String.raw`\pi D^3/6`} />.
          Symbol π označuje číslo přibližně 3,1416 a třetí mocnina znamená součin
          tří stejných hodnot průměru. Objem jedné kapky vynásobíme počtem kapek
          příslušné třídy. Tím získáme objem vody připadající na kapky v této třídě
          za sledovanou dobu.
        </p>
        <p>
          Stejně jako u sběrné nádoby převádíme objem na úhrn dělením plochou.
          Zde používáme <strong>účinnou měřicí plochu</strong>: část světelného pásu,
          ve které lze kapku dané velikosti správně započítat. U okrajů pásu může být
          zastínění neúplné, proto se plocha upravuje podle velikosti kapek.
          Příspěvky všech velikostních tříd pak sečteme:
        </p>
        <Equation tex={String.raw`P \approx \sum_i \frac{n_i\,\pi D_i^3}{6 A_i}`} />
        <p>
          Index i označuje velikostní třídu. <InlineMath tex={String.raw`n_i`} /> je počet
          jejích kapek za sledovaný interval, <InlineMath tex={String.raw`D_i`} /> jejich
          reprezentativní objemově ekvivalentní průměr a <InlineMath tex={String.raw`A_i`} />{" "}
          účinná plocha pro tuto velikost. Symbol Σ znamená součet přes všechny třídy.
          S průměrem v milimetrech a plochou v mm² vyjde úhrn P v milimetrech.
          Dělením dobou v hodinách získáme intenzitu v mm/h.
        </p>
        <p>
          Rovnice ukazuje geometrický základ převodu kapalného deště. Konkrétní
          zpracování přístroje k němu přidává svá pravidla pro okraje pásu, třídění
          a filtrování. U sněhu potřebujeme navíc vztah mezi rozměrem a hmotností
          vločky. Teprve hmotnost umožní určit vodní hodnotu sněžení.
        </p>

        <h3>Využití měření v klimatologii</h3>
        <p>
          Srážkoměr poskytuje místní úhrn a při častém odečítání i časový průběh deště.
          Disdrometr k němu přidává rozdělení velikostí a rychlostí částic.
          Tato měření slouží také ke kontrole <Link href="/metody/aktivni-radarove-mereni">radarových
          odhadů srážek</Link>. Radar sleduje odraz vyslaného záření od částic ve vzduchu,
          zatímco pozemní přístroje zachycují srážky dopadající na měřicí místo.
        </p>
        <p>
          Pro klimatologii spojujeme místní měření do dlouhých řad a porovnáváme je
          mezi stanicemi. <SourceLink id="2013_Diamond_USCRN">Diamond a spoluautoři</SourceLink>{" "}
          popsali USCRN jako referenční síť se stabilně volenými místy, opakovaným
          měřením a evidencí provozu. Záznamy o změnách stanice pomáhají udržet
          srovnatelnost měření v čase. Srovnatelné pokrytí území pak umožňuje
          porovnávat srážkové poměry různých období.
        </p>
        <p>
          Z dlouhých řad lze určit, jak často přicházejí silné deště, jak dlouho trvají
          a jakou mívají intenzitu. Takové ukazatele obsahuje <SourceLink id="DOI_10_1038_s41597_023_02238_4">GSDR-I,
          globální soubor popsaný Pritchardem a spoluautory v roce 2023</SourceLink>.
          Vychází z 18 591 staničních záznamů s intervaly kratšími než den.
          Před výpočtem autoři kontrolovali mimo jiné záměnu denního úhrnu za hodinový,
          podezřele dlouhá období nul a nesoulad se sousedními stanicemi.
        </p>
        <p>
          Výsledky GSDR-I jsou dostupné také v prostorové mřížce, tedy v soustavě
          buněk pokrývajících území. Hodnoty mezi stanicemi vznikají odhadem
          z okolních měření. Dlouhodobé změny srážek, včetně pokrytí území daty,
          rozebírá článek <Link href="/pozorovani/srazky-a-privalove-srazky">Srážky
          a přívalové srážky</Link>.
        </p>
        <p>
          Měření padajícího sněhu určuje, kolik vody do krajiny přibývá sněžením.
          Na zemi potom sníh taje, přesouvá se větrem a slehává.
          Výsledná <Link href="/pozorovani/snehova-pokryvka-a-permafrost">sněhová
          pokrývka</Link> proto vyžaduje další měření, která sledují její vývoj po dopadu.
        </p>

        <h3>Další provedení a vývoj záznamu</h3>
        <p>
          Nejjednodušší srážkoměr tvoří sběrná nádoba, jejíž objem pozorovatel ručně
          odečítá, obvykle jednou denně. Automatický překlápěcí srážkoměr zachycuje
          vodu do malých nádobek. Naplněná nádobka se překlopí a přístroj zaznamená
          impuls. Počet impulsů násobený objemem na jedno překlopení dává zachycený
          objem. Dělením plochou otvoru opět získáme úhrn. Konstrukce popisuje
          <SourceLink id="WEB_World_Meteorological_Organiz_prirucka_WMO_c_8_f7933a04"> příručka WMO</SourceLink>.
        </p>
        <p>
          Potřeba zachytit také časový průběh vedla k registračním srážkoměrům.
          <SourceLink id="WEB_DWD_Hellmann_1897_Ein_neuer_registrirender_Regenmesser"> Hellmannův
          popis z roku 1897</SourceLink> ukazuje nádobu s plovákem spojeným s perem.
          Přibývající voda plovák zvedala a pero zaznamenávalo vzestup na papír
          posouvaný hodinovým strojem. Po naplnění vodu odváděl sifon, trubice
          sloužící k vyprázdnění nádoby. Dnešní automatické snímače umožňují časté
          elektronické odečty a společné zpracování dlouhých záznamů.
        </p>

        <h2>Nejistoty a omezení</h2>
        <p>
          U srážkoměru je významný vliv větru, zvláště při sněžení. U disdrometru
          záleží na převodu zastínění na velikost částic a na jejich třídění.
          Porovnání Parsivelu² s překlápěcími srážkoměry poskytlo pro úhrny celých
          dešťových událostí průměrnou absolutní odchylku přibližně 6 %.
          <SourceLink id="DOI_10_1175_jtech_d_13_00174_1"> Tento výsledek</SourceLink>{" "}
          patří konkrétní zkoušce a nelze jej přenést na každou minutu měření.
        </p>
        <details className="method-details">
          <summary>Podrobněji o nejistotách a ověření</summary>
          <h3>Vážení a zachycení srážek</h3>
          <p>
            Kalibrací určujeme převodní vztah včetně nejistot. Seřízením měníme odezvu
            přístroje, proto po něm převod znovu ověřujeme. Toto rozlišení stanovuje
            <SourceLink id="2012_VIM_Calibration"> metrologický slovník VIM</SourceLink>.
          </p>
          <p>
            <SourceLink id="2016_Geonor_T200B_Manual">Manuál Geonoru</SourceLink> předepisuje kontrolu
            prázdné nádoby a přidání 1 kg vody, odpovídajícího přibližně 50 mm.
            Odchylka nad 0,5 % je důvodem k nové kalibraci. Pro variantu s kapacitou
            600 mm uvádí citlivost 0,05 mm a opakovatelnost 0,1 mm.
            První údaj popisuje odezvu na malé přídavky, druhý shodu opakovaných
            měření za stejných podmínek. Úplnou nejistotu terénního úhrnu nevyjadřují.
            Referenční zatížení i převod mají vlastní nejistoty.
          </p>
          <p>
            <SourceLink id="2026_USCRN_Measurements">USCRN</SourceLink> kombinuje pravidelné kalibrace
            s denní kontrolou měření. Porovnání tří strun může odhalit odchylku
            jednoho snímače. Všechny však sdílejí nádobu a prostředí, takže shoda
            neodhalí společnou ztrátu srážek před zachycením. Vítr může odklonit
            částice mimo otvor. <SourceLink id="DOI_10_5194_hess_21_1973_2017">Kochendorfer
            a spoluautoři</SourceLink> uvádějí, že nechráněný přístroj při sněžení
            a větru nad 5 m/s může zachytit méně než polovinu skutečných srážek.
          </p>
          <p>
            Ve studii z USA a Norska sloužily jako reference váhové srážkoměry uvnitř
            velkého dvojitého větrolamu. Porovnání přístrojů stejného principu
            s různou ochranou umožnilo odvodit opravy podle větru a teploty.
            U většiny zkoušek se vztah odvozoval na 90 % dat a ověřoval na zbývajících
            10 %, postupně pro deset skupin. Výsledné koeficienty využily celý soubor,
            odhad nejistoty vycházel z odděleného ověřování. U zmenšeného dvojitého
            větrolamu se tento postup nezdařil a odvození i kontrola použily stejná data.
            Také chráněná reference má vlastní chyby zachycení.
          </p>
          <p>
            Překlápěcí srážkoměry ovlivňuje voda přitékající během pohybu nádobky.
            Proto se kalibrují při různých rychlostech přítoku.
            U váhového přístroje mohou velmi slabé srážky dosáhnout vykazovacího prahu
            až v pozdějším intervalu. Pravidla zpracování tak ovlivňují i časové
            rozdělení malých úhrnů.
          </p>
          <h3>Optické měření a nezávislé porovnání</h3>
          <p>
            Při převodu průměru kapky na objem vstupuje průměr do třetí mocniny,
            takže se jeho chyba zesiluje. Výsledek ovlivňují také tvary částic
            a filtry rozstřiku. Laboratorní kalibraci proto doplňuje terénní porovnání.{" "}
            <SourceLink id="DOI_10_1175_jtech_d_13_00174_1">Tokay a kolegové</SourceLink> v roce 2011
            porovnávali Parsivel² se dvěma překlápěcími srážkoměry a nárazovým
            disdrometrem, který odvozuje vlastnosti částic z jejich nárazů.
          </p>
          <p>
            U jednotlivých dešťových událostí zprůměrovali velikosti rozdílů úhrnů
            bez ohledu na znaménko a vydělili je průměrným referenčním úhrnem.
            Tak získali uvedenou odchylku přibližně 6 %. Optika a sběr vody mají
            různé principy, ale sdílejí počasí včetně větru. I referenční srážkoměry
            mají vlastní chyby.
          </p>
          <h3>Časové a prostorové rozlišení</h3>
          <p>
            Krok zápisu 0,1 mm není chyba ±0,1 mm. Při pětiminutovém intervalu
            odpovídá odstupu intenzit 1,2 mm/h. Úplný rozpočet nejistoty hodiny
            z Blue Hill, tedy vyčíslení jednotlivých příspěvků a jejich spojení,
            použité soubory neposkytují. Shoda pětiminutového a hodinového součtu
            kontroluje práci se stejnými daty, nikoli nezávisle samotný přístroj.
            Při převodu staničních měření na mapu se navíc uplatňuje nerovnoměrné
            rozmístění stanic a odhad mezi nimi.
          </p>
        </details>

        <h2>Skutečný příklad: déšť na Blue Hill</h2>
        <p>
          Stanice MA Blue Hill 0 W v Massachusetts zaznamenala 7. června 2025 mezi
          14:00 a 15:00 místního standardního času (UTC−5) úhrn 9,2 mm. Projdeme dvanáct
          pětiminutových úhrnů, abychom zjistili, jak se síla deště během hodiny měnila.
          Používáme <SourceLink id="2025_USCRN_Blue_Hill_Subhourly">pětiminutový soubor NOAA</SourceLink>{" "}
          a <SourceLink id="2025_USCRN_Blue_Hill_Hourly">odpovídající hodinový záznam</SourceLink>,
          stažené 4. října 2026.
        </p>
        <p>
          Sloupec PRECIPITATION v souboru obsahuje již zpracované úhrny v milimetrech.
          Odtud začíná náš výpočet. Čas každého řádku označuje <strong>konec předchozích
          pěti minut</strong>, takže 14:30 patří dešti od 14:25 do 14:30.
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" aria-label="Pětiminutové srážky na Blue Hill" tabIndex={0}>
            <table>
              <caption>Blue Hill · 7. června 2025 · čas konce intervalu (UTC−5)</caption>
              <thead><tr><th scope="col">Čas</th><th scope="col">Úhrn <span className="method-data-output__unit">[mm]</span></th><th scope="col">Intenzita <span className="method-data-output__unit">[mm/h]</span></th></tr></thead>
              <tbody>{example.rows.map((row) => <tr key={row.endTimeLST}><th scope="row">{row.endTimeLST}</th><td>{number(row.depthMm)}</td><td>{number(row.meanRateMmPerHour)}</td></tr>)}</tbody>
              <tfoot><tr><th scope="row">Celá hodina</th><td>{number(example.hourlyDepthMm)}</td><td>{number(example.hourlyDepthMm)}</td></tr></tfoot>
            </table>
          </div>
        </div>

        <p>
          Sečtením dvanácti úhrnů získáme 9,2 mm. Stejnou hodnotu obsahuje pole
          P_CALC v hodinovém souboru. Podle <SourceLink id="2026_USCRN_Hourly_Readme">popisu
          formátu NOAA</SourceLink> toto pole udává úhrn za hodinu končící uvedeným
          časem. Porovnání tedy potvrzuje, že jsme vybrali a sečetli odpovídající intervaly.
        </p>
        <p>
          Nejsilnější pětiminutový úsek nastal od 14:25 do 14:30, kdy spadlo 2,6 mm.
          Pro průměrnou intenzitu tento úhrn P vydělíme dobou Δt v hodinách.
          Pět minut je 5/60 hodiny, tedy její dvanáctina:
        </p>
        <Equation tex={[
          String.raw`R = \frac{P}{\Delta t} = \frac{2{,}6}{\frac{5}{60}}`,
          String.raw`= 31{,}2\,\frac{\mathrm{mm}}{\mathrm{h}}`,
        ]} />
        <p>
          Výsledek 31,2 mm/h vyjadřuje rychlost přibývání vody během těchto pěti minut.
          Kdyby déšť pokračoval stejnou průměrnou intenzitou celou hodinu, spadlo by
          31,2 mm. Ve skutečnosti déšť během hodiny zesiloval a slábl. Celkových
          9,2 mm za jednu hodinu proto odpovídá hodinové průměrné intenzitě 9,2 mm/h.
        </p>
        <p>
          Každá intenzita v tabulce shrnuje celý pětiminutový úsek. I uvnitř něj mohl
          déšť kolísat. Pro jeho podrobnější průběh bychom potřebovali úhrny za ještě
          kratší intervaly.
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/rain-gauges/blue-hill-rain.png" alt="Pětiminutová intenzita deště na Blue Hill stoupá z 3,6 na 31,2 mm za hodinu a potom klesá. Hodinový průměr je 9,2 mm za hodinu." width={1600} height={1120} sizes="(max-width: 800px) 100vw, 850px" unoptimized />
          <figcaption>
            Vlastní výpočet z <SourceLink id="2025_USCRN_Blue_Hill_Subhourly">dat NOAA</SourceLink>.
            Modré sloupce pokrývají jednotlivé pětiminutové intervaly, jejich výška udává
            průměrnou intenzitu v mm/h. Přerušovaná čára ukazuje průměr celé hodiny.
            Časová osa používá místní standardní čas. Nejvyšší sloupec od 14:25 do 14:30
            patří nejsilnějšímu pětiminutovému úseku.
          </figcaption>
        </figure>

        <details className="method-details">
          <summary>Výběr dat a opakování výpočtu</summary>
          <p>
            Vybrali jsme první úplnou hodinu od června do srpna 2025 s alespoň 5 mm
            srážek, teplotou nad 10 °C ve všech dvanácti intervalech a bez přechodu
            přes půlnoc. Jde o příklad vydatného letního deště, nikoli výběr maxima
            roku. Identifikátor stanice je 94785 a verze programu stanice 2.623.
            <SourceLink id="2017_USCRN_Subhourly_Readme"> Verze zpracovaných dat 2.1.1</SourceLink>{" "}
            navazuje na algoritmus z roku 2015 s pozdějšími opravami.
          </p>
          <p>
            Místní standardní čas zůstává UTC−5 i v létě. Vybraná hodina tedy
            odpovídá 19:00 až 20:00 jednotného světového času UTC. Místní občanské
            hodiny v této době ukazují o hodinu více než standardní čas v tabulce.
          </p>
          <p>
            Dokumentace poli PRECIPITATION nepřiřazuje samostatný příznak kvality,
            tedy značku výsledku kontroly údaje. Neplatné hodnoty označuje zvláštním
            záporným číslem. Náš skript vyžaduje všech dvanáct platných úhrnů ve správném
            časovém pořadí a bez mezer. Chybějící měření nenahrazuje nulou.
            Příznaky kvality jiných veličin, například slunečního záření, k tomuto
            srážkovému poli nepřevádí.
          </p>
          <p>
            Uložte <a href={`${dataPath}/blue-hill-five-minute.txt`} download>12 původních pětiminutových záznamů</a>,
            <a href={`${dataPath}/blue-hill-hourly.txt`} download> hodinový záznam</a>,
            <a href={`${dataPath}/example.json`} download> popis výběru a kontrolní součty</a> a
            <a href={`${dataPath}/reproduce.mjs`} download> výpočet v JavaScriptu</a> do jedné složky.
            Příkaz <code>node reproduce.mjs</code> v Node.js 22 nebo novějším ověří soubory,
            návaznost časů a platnost hodnot. Vypíše tabulku a porovnání s hodinovým
            úhrnem. Podle návodu ve skriptu lze zadat také oba úplné roční soubory.
          </p>
          <p>
            Původní řádky NOAA jsou zachovány beze změny. Kontrolní součty SHA-256
            umožňují rozpoznat změnu vstupu. Opakovat lze postup od publikovaných
            úhrnů. Použité soubory neobsahují surové frekvence strun ani kalibrační
            protokoly stanice. Graf vytvoří přiložený
            <a href={`${dataPath}/plot.py`} download> skript pro Python a Matplotlib</a>.
          </p>
        </details>
        <details className="method-details">
          <summary>Doplňkový převod objemu na milimetry</summary>
          <p>
            Ilustrační výpočet ukazuje vliv velikosti otvoru. Zachytíme-li otvorem
            o ploše 200 cm² objem 20 mililitrů, tedy 20 cm³, dostaneme dělením
            20/200 výšku 0,1 cm. To je úhrn 1 mm. Na metru čtverečním odpovídá
            stejný úhrn jednomu litru vody. Obdobně údaj 10 mm za den vyjadřuje
            10 litrů na metr čtvereční za tento den.
          </p>
        </details>

        <section className="method-conclusion">
          <h2>Co těmito metodami zjistíme</h2>
          <p>
            Srážkoměry určují množství vody spadlé na měřicím místě za vymezenou dobu.
            Časté odečty ukazují průběh deště a umožňují vypočítat jeho intenzitu.
            Disdrometry přidávají velikosti, rychlosti a odvozený druh padajících
            částic. Společně tato měření podpírají kontrolu radarových odhadů
            a při spojení do dlouhých srovnatelných řad také poznání změn srážkových
            úhrnů, četnosti a síly krátkých dešťů.
          </p>
        </section>
      </div>
    </article>
  );
}
