import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function MicrowaveRadiometryArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak mikrovlny rozliší led a vodu</h2>
        <p className="article-prose__intro">
          Pasivní mikrovlnná radiometrie je měření přirozeného mikrovlnného záření,
          ze kterého odvozujeme vlastnosti povrchu a atmosféry. Přístroj toto záření
          přijímá, aniž by k měřenému místu vysílal vlastní signál. Jedním z jejích
          hlavních klimatologických použití je určování koncentrace mořského ledu,
          tedy podílu sledované plochy, který pokrývá led. Tuto cestu si vysvětlíme
          na družicovém radiometru SSM/I a výpočetním postupu NASA Team. Název SSM/I
          znamená Special Sensor Microwave/Imager, speciální mikrovlnný zobrazovací
          přístroj. NASA Team označuje způsob vyhodnocení jeho měření.{" "}
          <SourceLink id="WEB_NASA_SSMI_Validation_1992">(Cavalieri, ed., 1992, kapitoly 2 a 4)</SourceLink>
        </p>

        <h3>Co nám říká přijaté záření</h3>
        <p>
          Voda, led i půda vydávají tepelné záření. Jeho součástí jsou mikrovlny,
          elektromagnetické vlny delší než infračervené záření. V pásmech používaných
          pro mořský led může podstatná část záření povrchu projít běžnou oblačností.
          Měření navíc nepotřebuje sluneční světlo. Družice proto získává informace
          o rozsáhlých polárních oblastech i v noci a při zatažené obloze.{" "}
          <SourceLink id="WEB_NASA_SSMI_SWG_1984">(NASA 1984, oddíl 2.2)</SourceLink>
        </p>
        <p>
          Sílu záření vyjadřujeme pomocí jasové teploty. Představme si ideální těleso,
          které pohltí všechno dopadající záření a jehož vyzařování určuje pouze teplota.
          Říkáme mu černé těleso. Jasová teplota říká, jakou teplotu by takový zářič
          potřeboval, aby v měřeném pásmu vytvořil stejnou intenzitu záření. Uvádí se
          v kelvinech, na teplotní stupnici začínající absolutní nulou. Číslo je tedy
          způsobem, jak vyjádřit záření přicházející do přístroje. Se stejným pojmem
          pracuje také <Link href="/metody/pasivni-infracervena-radiometrie">infračervená radiometrie</Link>.{" "}
          <SourceLink id="WEB_NASA_SSMI_SWG_1984">(NASA 1984, oddíl 3.1)</SourceLink>
        </p>
        <p>
          Skutečný povrch zpravidla vyzařuje méně než stejně teplé černé těleso.
          Poměr obou vyzařování označujeme jako emisivitu. Závisí na materiálu,
          vlnové délce a směru pohledu. Mořská voda a led se v mikrovlnách emisivitou
          výrazně liší, takže mohou mít podobnou skutečnou teplotu a přitom různé
          jasové teploty. Právě tento rozdíl využíváme k rozpoznání ledového pokryvu.{" "}
          <SourceLink id="WEB_NASA_SSMI_SWG_1984">(NASA 1984, oddíly 2.2 a 3.1)</SourceLink>
        </p>

        <h3>Proč měříme několika kanály</h3>
        <p>
          Jeden kanál přístroje přijímá určitou část mikrovlnného záření. Jeho výběr
          popisujeme frekvencí, počtem kmitů za sekundu. Jednotka gigahertz, GHz,
          znamená miliardu kmitů za sekundu. Pro náš postup jsou důležité frekvence
          19,35 a 37 GHz. Při vyšší frekvenci je vlnová délka kratší a záření reaguje
          na sníh a led jinak. Porovnání obou pásem proto přidává informaci o povrchu,
          kterou by samotné měření jediného pásma neposkytlo.{" "}
          <SourceLink id="WEB_NASA_SSMI_Validation_1992">(Cavalieri, ed., 1992, kapitoly 2 a 4)</SourceLink>
        </p>
        <p>
          Druhou volbou je polarizace, směr kmitání elektrického pole vlny.
          Vodorovná polarizace H má elektrické pole rovnoběžné s povrchem.
          Svislá polarizace V kmitá v rovině, která obsahuje směr pohledu a místní
          svislici. Přijímací anténa tyto dvě složky rozlišuje. Nad otevřenou vodou
          bývá při šikmém pohledu rozdíl jejich jasových teplot mnohem větší než
          nad kompaktním ledem. Porovnáním H a V tak získáme další vodítko k podílu vody a ledu.{" "}
          <SourceLink id="WEB_NASA_SSMI_SWG_1984">(NASA 1984, obrázky 3 a 8, oddíl 3.2)</SourceLink>
        </p>
        <p>
          NASA Team spojuje tři kanály: 19V, 19H a 37V. Číslo je zaokrouhlená
          frekvence v gigahertzích a písmeno označuje polarizaci. Dvojice 19V a 19H
          pomáhá rozlišit otevřenou vodu od ledu. Porovnání 37V s 19V pomáhá
          zachytit rozdíl mezi ledem vytvořeným během poslední zimy a starším ledem,
          který přežil léto. Potřebujeme obě informace, protože změna druhu ledu
          může měnit záření i při stejném celkovém pokrytí hladiny.{" "}
          <SourceLink id="WEB_NASA_SSMI_Validation_1992">(Cavalieri, ed., 1992, oddíly 4.1 a 4.2)</SourceLink>
        </p>

        <h3>Anténa, přijímač a kalibrace</h3>
        <p>
          SSM/I letěl na družicích amerického vojenského meteorologického programu
          DMSP, zkratky Defense Meteorological Satellite Program. Jeho zakřivený
          reflektor soustřeďuje mikrovlny do ústí přijímací antény. Sestava se otáčí
          a postupně sleduje místa v širokém pásu podél dráhy družice. Pohyb družice
          přivádí do záběru další území. Na kanálech kolem 19 GHz přitom jedno
          měření zahrnuje oválnou stopu o rozměrech přibližně 70 × 45 kilometrů.{" "}
          <SourceLink id="WEB_NASA_SSMI_SWG_1984">(NASA 1984, oddíl 5.1)</SourceLink>{" "}
          a <SourceLink id="WEB_NASA_SSMI_Validation_1992">(Cavalieri, ed., 1992, tabulka 2.3)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/microwave-radiometry/ssmi-prototype.png"
            alt="Prototyp radiometru SSM/I s velkým horním reflektorem, nosnou konstrukcí, malým kalibračním zrcadlem a elektronikou ve spodní části."
            width={883} height={1100} sizes="(max-width: 700px) 100vw, 640px" unoptimized />
          <figcaption>
            Prototyp SSM/I připravený pro umístění na družici, vyobrazený ve zprávě
            NASA z roku 1984. Horní reflektor soustřeďuje záření, konstrukce pod ním
            jej drží nad přijímací anténou. Malé zrcadlo obrací její pohled do kosmu,
            za ním leží teplá kalibrační reference. Spodní část obsahuje elektroniku
            a mechanismus otáčení. Původní anglické značky označují tyto součásti.
            Výřez obrázku 19 ze zprávy <SourceLink id="WEB_NASA_SSMI_SWG_1984">NASA Science Working Group, s. 42</SourceLink>.
            Autor jednotlivé fotografie není uveden, archiv NTRS povoluje veřejné užití vládního díla.
          </figcaption>
        </figure>
        <p>
          Přijaté mikrovlny vyvolávají elektrický signál. Přijímač vybere frekvenční
          pásmo a polarizaci, signál zesílí a změří jeho průměrný výkon. Elektronika
          tento výsledek uloží jako číslo. K převodu na jasovou teplotu potřebujeme
          znát vztah mezi tímto číslem a zářením, které vstoupilo do antény. Tuto
          vazbu určuje kalibrace.{" "}
          <SourceLink id="WEB_NASA_SSMI_Validation_1992">(Cavalieri, ed., 1992, oddíl 2.1)</SourceLink>
        </p>
        <p>
          Při každé otáčce se přijímač vedle Země podívá také na dvě reference.
          Jednou je záření chladného kosmu přivedené malým zrcadlem. Druhou je
          dobře pohlcující a vyzařující těleso, jehož teplotu sledují teplotní čidla.
          Dostáváme tak dvě známé úrovně záření a dvě odpovídající odezvy přijímače.
          Při přibližně lineární odezvě z jejich rozdílu určíme převodní měřítko
          a z jedné reference jeho počátek. Každému kroku v uložených číslech tak
          přiřadíme odpovídající změnu jasové teploty. Tím můžeme převést i odezvu
          při pohledu na Zemi.{" "}
          <SourceLink id="WEB_NOAA_RSS_Microwave_ATBD_2018">(RSS/NOAA 2018, oddíl 3.4, rovnice 19–21)</SourceLink>
        </p>
        <p>
          Následná korekce zohlední, odkud anténa záření přijímá. Největší citlivost
          má v hlavním směru pohledu, menší část signálu však zachytí také z okolí
          a z druhé polarizace. Změřené vlastnosti antény umožňují tyto příspěvky
          oddělit. Zpracování dále sjednocuje odezvu různých přístrojů během období,
          kdy pozorují Zemi současně. Výsledkem jsou kalibrované jasové teploty
          jednotlivých kanálů s přiřazeným místem a časem měření.{" "}
          <SourceLink id="WEB_NOAA_RSS_Microwave_ATBD_2018">(RSS/NOAA 2018, oddíly 3.4 a 3.4.7)</SourceLink>
        </p>

        <h3>Jak z několika jasových teplot získáme podíl ledu</h3>
        <p>
          Pro denní mapu se měření nejprve přiřadí do společné polární mřížky.
          Hodnoty z více přeletů, které připadnou na stejnou buňku, se zprůměrují.
          Klasické zpracování NASA Team používá mřížku s krokem 25 kilometrů.
          Pro každou buňku pak máme tři jasové teploty potřebné k výpočtu. Mřížka
          určuje, kam údaj uložíme, zatímco velikost měřené stopy určuje, z jak
          širokého okolí do něj vstupuje záření.{" "}
          <SourceLink id="WEB_NASA_SSMI_Validation_1992">(Cavalieri, ed., 1992, kapitoly 3 a 4)</SourceLink>
        </p>
        <p>
          Z prvních dvou kanálů vypočteme rozdíl jasových teplot a vydělíme jej
          jejich součtem. Získáme tak relativní rozdíl polarizací. Stejný postup
          použijeme pro porovnání frekvencí. Označíme je <InlineMath tex="P" /> a <InlineMath tex="G" />:
        </p>
        <Equation tex={String.raw`P=\frac{T_{19V}-T_{19H}}{T_{19V}+T_{19H}}`} />
        <Equation tex={String.raw`G=\frac{T_{37V}-T_{19V}}{T_{37V}+T_{19V}}`} />
        <p>
          <InlineMath tex={String.raw`T_{19V},\ T_{19H},\ T_{37V}`} /> jsou jasové teploty
          uvedených kanálů v kelvinech. <InlineMath tex="P" /> je polarizační poměr,
          <InlineMath tex="G" /> frekvenční poměr, oba bez jednotky. Dělení součtem
          potlačuje změny, které oba porovnávané signály násobí podobným faktorem.
          Tím se omezuje vliv společné změny teploty povrchu a lépe vyniknou rozdíly
          spojené s jeho složením.{" "}
          <SourceLink id="WEB_NASA_SSMI_Validation_1992">(Cavalieri, ed., 1992, rovnice 4.1 a 4.2)</SourceLink>
        </p>
        <p>
          Abychom poměry převedli na podíl ledu, potřebujeme referenční hodnoty
          pro známé povrchy. NASA Team používá otevřenou vodu, jednoletý led
          a víceletý led. Pro každý z nich stanoví typickou jasovou teplotu ve všech
          třech kanálech. Tyto hodnoty vznikly výběrem pozorovaných oblastí se známým
          pokryvem a porovnáním měření. Jde tedy o hodnoty odvozené ze skutečných
          pozorování, které ve výpočtu zastupují jednotlivé druhy povrchu.{" "}
          <SourceLink id="WEB_NASA_SSMI_Validation_1992">(Cavalieri, ed., 1992, oddíl 4.2)</SourceLink>
        </p>
        <p>
          Sledovanou plochu nyní popíšeme jako směs těchto tří povrchů. Nechť
          <InlineMath tex="f" /> označuje podíl jednoletého ledu a <InlineMath tex="m" /> podíl
          víceletého ledu. Na vodu zbývá <InlineMath tex="1-f-m" />. Modelová jasová
          teplota směsi v jednom kanálu je součtem referenčních hodnot násobených
          příslušnými podíly:
        </p>
        <Equation tex={String.raw`M_j=(1-f-m)W_j+fF_j+mO_j`} />
        <p>
          Index <InlineMath tex="j" /> vybírá kanál 19V, 19H nebo 37V.
          <InlineMath tex="W_j" /> je jeho referenční jasová teplota otevřené vody,
          <InlineMath tex="F_j" /> jednoletého a <InlineMath tex="O_j" /> víceletého ledu.
          Stejně jako modelová hodnota <InlineMath tex="M_j" /> mají jednotku kelvin.
          Podíly <InlineMath tex="f" /> a <InlineMath tex="m" /> jsou bez jednotky
          a jejich součet leží mezi nulou a jedničkou. Model předpokládá, že směs
          lze popsat těmito referenčními povrchy a jejich příspěvky sčítat podle
          zastoupení ve sledované ploše. Se třemi kanály přitom zachází jako
          s pozorováním stejné směsi.{" "}
          <SourceLink id="WEB_NASA_SSMI_SWG_1984">(NASA 1984, oddíl 3.2.2)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/microwave-radiometry/mixing.svg"
            alt="Tři referenční povrchy se skládají do směsi. Její tři modelové jasové teploty poskytují dva poměry, které porovnáváme s družicovým měřením."
            width={560} height={650} sizes="(max-width: 560px) 100vw, 560px" unoptimized />
          <figcaption>
            Vlastní schéma směšovacího modelu. Modrá představuje vodu, světlá
            jednoletý a tmavší víceletý led. Šipky ukazují výpočet tří modelových
            jasových teplot a jejich porovnání s měřením pomocí dvou poměrů.
            Hledáme takové podíly, při kterých oba poměry souhlasí.
            Schéma nezobrazuje skutečné rozložení ker. Podle{" "}
            <SourceLink id="WEB_NASA_SSMI_SWG_1984">NASA 1984</SourceLink> a{" "}
            <SourceLink id="WEB_NASA_SSMI_Validation_1992">Cavalieriho, ed., 1992</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Z modelových teplot vytvoříme stejné dva poměry jako z měření. Potom
          hledáme takové <InlineMath tex="f" /> a <InlineMath tex="m" />, aby se oba
          modelové poměry rovnaly naměřeným. Po vynásobení jejich jmenovateli dostaneme:
        </p>
        <Equation tex={String.raw`M_{19V}-M_{19H}=P(M_{19V}+M_{19H})`} />
        <Equation tex={String.raw`M_{37V}-M_{19V}=G(M_{37V}+M_{19V})`} />
        <p>
          Každé <InlineMath tex="M" /> zde nahradíme právě vysvětleným součtem
          příspěvků vody a obou druhů ledu. Reference i naměřené poměry už známe,
          takže zbývají dvě rovnice pro dva neznámé podíly. Jejich řešením získáme
          <InlineMath tex="f" /> a <InlineMath tex="m" />. Celková koncentrace je
          <InlineMath tex="C=f+m" />, v procentech <InlineMath tex="100C" />.
          Běžný zápis algoritmu tento postup shrnuje do převodních koeficientů,
          které se předem vypočítají z referencí.{" "}
          <SourceLink id="WEB_NASA_SSMI_Validation_1992">(Cavalieri, ed., 1992, rovnice 4.3–4.6)</SourceLink>
        </p>
        <p>
          Zpracování doplňuje výpočet výběrem vhodných měření. Pára, oblačná voda
          a větrem rozvlněné moře mohou zvýšit signál nad otevřenou vodou.
          Klasická verze proto používá frekvenční poměr také jako filtr: pokud
          <InlineMath tex="G" /> překročí 0,05, nastaví koncentraci na nulu.
          V blízkosti pobřeží se navíc uplatňuje maska pevniny a oprava jejího
          příspěvku do široké měřené stopy. Smyslem těchto kroků je oddělit
          ledový signál od příspěvků, které mají jiný původ.{" "}
          <SourceLink id="WEB_NASA_SSMI_Validation_1992">(Cavalieri, ed., 1992, oddíl 4.1)</SourceLink>{" "}
          a <SourceLink id="WEB_NASA_Cavalieri_1997_Sea_Ice_User_Guide">(Cavalieri a kol. 1997, oddíl 3.2)</SourceLink>
        </p>

        <h3>Co znamená výsledná mapa</h3>
        <p>
          Mapa přiřazuje každé buňce odhad podílu zamrzlé hladiny. Koncentrace
          100 % znamená úplné pokrytí, 0 % otevřenou vodu. Vynásobením koncentrace
          plochou buňky získáme příspěvek k ploše ledu. Pro rozsah ledu se používá
          jiná operace: sečtou se celé plochy buněk, které splní zvolený práh.
          Produkt Sea Ice Index používá hranici 15 % a pod ní buňky vynechává
          také při součtu plochy ledu. Koncentrace, plocha a rozsah
          tak odpovídají třem odlišným otázkám o stejném pokryvu.{" "}
          <SourceLink id="WEB_National_Snow_and_Ice_Data_C_uzivatelske_prirucce_Sea_Ice_Index_v4_48d7d043">(NSIDC: Sea Ice Index v4)</SourceLink>
        </p>
        <p>
          Opakováním postupu získáme sezónní průběh a dlouhodobé změny.
          Parkinsonová a Cavalieri ve své studii zpracovali mikrovlnná pozorování
          za roky 1979–1999 pro celou severní polární oblast i devět jejích regionů.
          Z denních map vypočítali rozsahy a porovnali jejich měsíční a sezónní
          průběhy. Ukázali tak celkový úbytek i rozdíly mezi oblastmi a ročními
          obdobími. Na současné soubory a jejich výsledky navazuje článek o{" "}
          <Link href="/pozorovani/ubytek-arktickeho-ledu">arktickém mořském ledu</Link>.{" "}
          <SourceLink id="DOI_10_3189_172756402781817725">(Parkinson a Cavalieri 2002)</SourceLink>
        </p>

        <h3>Vývoj metody a další použití</h3>
        <p>
          Družice Nimbus 5 od roku 1972 přinesla soustavné mapování mořského ledu
          v jediném mikrovlnném pásmu. Nimbus 7, vypuštěný v roce 1978, přidal
          více frekvencí a obě polarizace. Zpráva pracovní skupiny NASA z roku 1984
          už popsala, jak jejich kombinaci využít a jak na ni naváže SSM/I.
          Jeho měření začalo v roce 1987. Pozdější přístroje rozšířily počet kanálů
          a zlepšily prostorové rozlišení. Při jejich spojování se reference
          a zpracování porovnávají v překryvných obdobích. Takto navázal i přístroj
          AMSR2, Advanced Microwave Scanning Radiometer 2, pokročilý mikrovlnný
          skenující radiometr druhé generace. Jeho údaje používá Sea Ice Index v4
          od roku 2025.{" "}
          <SourceLink id="WEB_NASA_SSMI_SWG_1984">(NASA 1984, oddíl 2.2)</SourceLink>,{" "}
          <SourceLink id="WEB_NASA_Cavalieri_1997_Sea_Ice_User_Guide">(Cavalieri a kol. 1997)</SourceLink>{" "}
          a <SourceLink id="WEB_NSIDC_Sea_Ice_Index_v4_Analysis_2025">(Windnagel a kol. 2025)</SourceLink>
        </p>
        <h3 id="teplota-atmosfery">Teplota vrstev atmosféry</h3>
        <p>
          U atmosféry vybíráme pásma, ve kterých významně vyzařují a pohlcují plyny.
          Mikrovlnné teplotní sondy používají například kyslíková pásma kolem
          50–60 GHz. Různé kanály přijímají různé podíly záření z jednotlivých
          výškových vrstev, a proto jejich společné vyhodnocení poskytuje informaci
          o teplotě atmosféry. Na toto použití navazuje pozorování{" "}
          <Link href="/pozorovani/stratosfericke-ochlazovani/#druzicove-vrstvy">teploty stratosféry</Link>.{" "}
          <SourceLink id="WEB_NOAA_SSMT_Temperature">(NOAA: přístroj SSM/T)</SourceLink>{" "}
          a <SourceLink id="WEB_NASA_CLIMCAPS_Temperature">(NASA/JPL: teplotní sondování)</SourceLink>
        </p>
        <p>
          Každá vrstva přispívá podle své teploty a podle toho, kolik jejího záření
          doletí k přístroji. Blíže ke středu absorpčního pásma se záření cestou
          silněji pohlcuje, takže přístroj vidí především výše položené vrstvy.
          V průhlednějších částech pásma dostává více záření také zespodu.
          Rozložení těchto příspěvků s výškou se nazývá váhová funkce.
          Jednomu kanálu tak odpovídá široká vrstva, jejíž teplotní změny můžeme
          sledovat v čase.{" "}
          <SourceLink id="DOI_10_1175_jtech_d_16_0018_1">(Zou a Qian 2016, oddíl 3 a obrázek 1)</SourceLink>
        </p>

        <h3 id="vodni-para">Vodní pára nad oceánem</h3>
        <p>
          Vodní pára také pohlcuje a vydává mikrovlnné záření, výrazně například
          v okolí frekvence 22,235 GHz. Změna jejího množství proto mění kombinaci
          jasových teplot v jednotlivých kanálech. Jeden údaj by však nestačil.
          Do přijatého záření přispívá také kapalná voda v oblacích a mořská
          hladina, jejíž vyzařování závisí na teplotě a rozvlnění větrem.
          Porovnání několika pásem pomáhá tyto příspěvky odlišit.{" "}
          <SourceLink id="WEB_RSS_AMSR_Ocean_ATBD_2000">(Wentz a Meissner, oddíly 1.3 a 2.3)</SourceLink>
        </p>
        <p>
          Převod využívá model, který pro zadaný stav hladiny a atmosféry
          vypočítá záření očekávané v každém kanálu. Například postup pro
          přístroj AMSR (Advanced Microwave Scanning Radiometer, pokročilý
          mikrovlnný skenující radiometr) opakovaně upravuje odhad teploty hladiny, rychlosti
          větru a množství vodní páry i oblačné vody, až se vypočtené jasové
          teploty dostatečně přiblíží naměřeným. Vodní páru vyjádří jako množství
          vody v celém sloupci atmosféry nad jednotkovou plochou.
          Milimetr takové vodní vrstvy odpovídá jednomu kilogramu vody na metr
          čtvereční. Výpočet je zde určen pro nezamrzlý oceán bez deště.{" "}
          <SourceLink id="WEB_RSS_AMSR_Ocean_ATBD_2000">(oceánský algoritmus, oddíly 3.1–3.4)</SourceLink>
        </p>
        <p>
          Z opakovaných měření vznikají mapy celkového množství vodní páry.
          RSS spojuje několik radiometrů do měsíčního záznamu od ledna 1988
          na mřížce 1° × 1°. Jeho použití a porovnání s pozemními měřeními
          rozebírá článek o <Link href="/pozorovani/narust-vlhkosti/#mikrovlnna-mereni">vlhkosti atmosféry</Link>.{" "}
          <SourceLink id="WEB_Remote_Sensing_Systems_Remote_Sensing_Systems_e8e6fee6">(RSS TPW, konstrukce společného souboru)</SourceLink>
        </p>

        <h3 id="srazky">Srážky z mikrovlnných měření</h3>
        <p>
          Déšť a sněžení mění záření jiným způsobem než samotná vodní pára.
          Kapky záření pohlcují a vydávají, ledové částice jej také rozptylují.
          Pro odhad srážek proto potřebujeme vztah mezi signálem radiometru
          a rozložením kapalné vody a ledu v oblaku.{" "}
          <SourceLink id="WEB_NASA_GPROF2021_ATBD_2022">(GPROF2021, princip a databáze profilů)</SourceLink>
        </p>
        <p>
          Postup GPROF (Goddard Profiling Algorithm, algoritmus pro odhad
          srážkového profilu) porovnává naměřenou kombinaci jasových teplot s databází možných
          srážkových profilů. Každý profil popisuje rozložení vody a ledu
          s výškou a má přiřazený odpovídající mikrovlnný signál.
          Výpočet spojí odpovídající profily a větší váhu dá těm, jejichž
          signál lépe souhlasí s měřením vzhledem k jeho nejistotě.
          Výsledkem je mimo jiné odhad intenzity srážek u povrchu v mm/h.
          Databáze se opírá také o společná pozorování družicového radaru
          a radiometru.{" "}
          <SourceLink id="WEB_NASA_GPROF2021_ATBD_2022">(GPROF2021, oddíly 1.3 a 3.3)</SourceLink>
        </p>
        <p>
          Tyto odhady lze spojovat v čase a prostoru s dalšími družicovými údaji.
          Vznik půlhodinových map z takového společného zpracování
          popisuje pozorování <Link href="/pozorovani/srazky-a-privalove-srazky/#druzice">srážek a přívalových srážek</Link>.{" "}
          <SourceLink id="WEB_NASA_Algorithm_Theoretical_Basis_Document_79780237">(IMERG V07, oddíl 3.2)</SourceLink>
        </p>

        <h3>Voda ve sněhu a v půdě</h3>
        <p>
          Nad souší lze mikrovlnami zkoumat také sníh. Suchý sníh rozptyluje
          záření kolem 37 GHz silněji než kolem 19 GHz. Rozdíl kanálů proto pomáhá
          odhadnout množství sněhu. Datový soubor GlobSnow tuto informaci spojuje
          s pozemními měřeními jeho výšky a modelem vyzařování. Výsledkem je odhad
          množství vody obsažené ve sněhové pokrývce.{" "}
          <SourceLink id="DOI_10_1038_s41597_021_00939_2">(Luojus a kol. 2021: GlobSnow v3)</SourceLink>
        </p>
        <p>
          U půdy mění přibývající kapalná voda elektrické vlastnosti materiálu,
          a tím jeho odrazivost a emisivitu. Tuto závislost využívá družicová mise
          SMAP, Soil Moisture Active Passive, určená pro aktivní a pasivní měření
          vlhkosti půdy. Její radiometr přijímá záření při frekvenci přibližně
          1,4 GHz. Převod jasové teploty na vlhkost půdy zde používá model
          vyzařování půdy a vegetace, která ji pokrývá.{" "}
          <SourceLink id="WEB_NASA_SMAP_Passive_ATBD_2014">(O’Neill a kol. 2014: půdní vlhkost)</SourceLink>
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Výsledek ovlivňují vlastnosti sněhu a ledu, letní tůně, počasí,
          blízkost pevniny i kalibrace. V původním ověření NASA Team měly podzimní
          koncentrace při použití společných referencí proti optickým snímkům Landsatu
          průměrný rozdíl 0,1 procentního bodu. Jednotlivé rozdíly kolem tohoto
          průměru kolísaly. Jejich směrodatná odchylka, která velikost tohoto
          kolísání popisuje, byla 6,2 procentního bodu. Jde o výsledek konkrétního historického porovnání, přesnost se mění
          s podmínkami a provedením.{" "}
          <SourceLink id="WEB_NASA_SSMI_Validation_1992">(Cavalieri, ed., 1992, oddíl 5.6)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Podrobnosti o přesnosti a nezávislé kontrole</summary>
          <p>
            Rozdíly mezi ledovými povrchy nejsou vyčerpány třemi referencemi.
            Tenký nově vznikající led může mít signál mezi otevřenou vodou
            a silnějším ledem. Letní tůně přidávají kapalnou vodu na vrchol
            ledových ker. Oba jevy mohou snížit vypočtenou koncentraci, i když
            hladinu fyzicky pokrývá led. Víceletá složka modelu je proto především
            radiometrická klasifikace. Stáří jednotlivých ker se spolehlivěji
            sleduje jejich pohybem a přežíváním.{" "}
            <SourceLink id="WEB_NASA_SSMI_Validation_1992">(Cavalieri, ed., 1992, oddíl 4.3)</SourceLink>{" "}
            a <SourceLink id="DOI_10_5194_tc_9_1797_2015">(Ivanova a kol. 2015)</SourceLink>
          </p>
          <p>
            Vodní pára, oblačná voda a rozvlněná hladina mění mikrovlnný signál.
            Meteorologické filtry pomáhají odstranit falešný led, současně však
            omezují zachycení řídkého pokryvu. U pobřeží se do stejné stopy může
            dostat pevnina. Mřížka po 25 km sama nezmenší stopu kanálu 19 GHz,
            a proto sousední údaje nejsou zcela prostorově nezávislé. Ivanova
            a kolegové porovnali třicet algoritmů a ukázali, že jejich reakce na
            tyto vlivy se liší i při společných vstupních měřeních.{" "}
            <SourceLink id="DOI_10_5194_tc_9_1797_2015">(Ivanova a kol. 2015)</SourceLink>
          </p>
          <p>
            Landsat poskytuje kontrolu jinou fyzikální cestou a v jemnějším
            prostorovém měřítku. Také z něj se však podíl ledu vyhodnocuje a mezi
            přelety se kry mohou posunout. Původní zpráva navíc rozlišuje společné
            a místně upravené reference. Lepší shoda při místním nastavení není
            nezávislým ověřením tohoto nastavení. Některá letecká pozorování pomohla
            už při výběru referencí, a proto nelze všechny kontroly v programu
            považovat za nezávislé na vývoji algoritmu.{" "}
            <SourceLink id="WEB_NASA_SSMI_Validation_1992">(Cavalieri, ed., 1992, oddíly 4.2 a 5.3–5.6)</SourceLink>
          </p>
          <p>
            Dlouhodobou stabilitu ověřují pozorování kalibračních referencí
            a porovnávání družic při společném provozu. Převody využívají také
            modely přenosu záření a další měření, například oceánských podmínek.
            Dva produkty ze stejného radiometru proto mohou sdílet kalibrační
            odchylku. Shoda jejich algoritmů je jinou kontrolou než porovnání
            s optickým snímkem nebo terénním pozorováním. Výsledek vždy patří
            k určité verzi kalibrace, referencí, filtrů a doplňování chybějících dat.{" "}
            <SourceLink id="WEB_NOAA_RSS_Microwave_ATBD_2018">(RSS/NOAA 2018)</SourceLink>{" "}
            a <SourceLink id="WEB_NASA_Cavalieri_1997_Sea_Ice_User_Guide">(Cavalieri a kol. 1997)</SourceLink>
          </p>
        </details>

        <h2>Příklad: zimní měření severně od Aljašky</h2>
        <p>
          Použijeme jedno měření SSM/I na družici DMSP F11 z 1. března 1992.
          Střed stopy ležel na 76,92° severní šířky a 157,84° západní délky,
          v Beaufortově moři. Veřejný soubor společnosti Remote Sensing Systems (RSS), verze 7,
          poskytuje již kalibrované
          jasové teploty. Z nich zopakujeme jádro převodu NASA Team s referencemi
          pro F11 zveřejněnými v roce 1997. Výsledkem bude náš přepočet jedné
          stopy pomocí těchto zvolených vstupů.{" "}
          <SourceLink id="DOI_10_7289_V5SJ1HKZ">(Wentz a Mears: RSS v7)</SourceLink>{" "}
          a <SourceLink id="WEB_NASA_Cavalieri_1997_Sea_Ice_User_Guide">(Cavalieri a kol. 1997, tabulka 3)</SourceLink>
        </p>
        <p>
          První řádek tabulky obsahuje družicové měření. Další tři řádky jsou
          reference, které do výpočtu přebíráme. Všechny hodnoty jsou jasové
          teploty v kelvinech. U měření zobrazujeme dvě desetinná místa:
        </p>
        <div className="method-data-output">
        <div className="method-data-output__table-wrap" role="region" aria-label="Měření a referenční jasové teploty" tabIndex={0}>
          <table>
            <thead><tr><th>Vstup</th><th>19V</th><th>19H</th><th>37V</th></tr></thead>
            <tbody>
              <tr><td>Měření RSS</td><td>232,15 K</td><td>213,21 K</td><td>214,92 K</td></tr>
              <tr><td>Otevřená voda W</td><td>185,1 K</td><td>113,6 K</td><td>204,8 K</td></tr>
              <tr><td>Jednoletý led F</td><td>251,4 K</td><td>235,3 K</td><td>242,0 K</td></tr>
              <tr><td>Víceletý led O</td><td>222,5 K</td><td>198,3 K</td><td>185,1 K</td></tr>
            </tbody>
          </table>
        </div>
        </div>
        <p>
          Z měření nejprve vytvoříme oba poměry. Polarizační rozdíl je malý
          a jasová teplota 37V je nižší než 19V, takže frekvenční poměr vychází záporný:
        </p>
        <Equation tex={String.raw`P=\frac{232{,}15-213{,}21}{232{,}15+213{,}21}\approx0{,}04253`} />
        <Equation tex={String.raw`G=\frac{214{,}92-232{,}15}{214{,}92+232{,}15}\approx-0{,}03854`} />
        <p>
          Teď do dvou rovnic pro shodu modelu s měřením dosadíme tyto poměry
          a referenční teploty z tabulky. Po sloučení členů a změně znamének
          dostaneme soustavu pro podíly <InlineMath tex="f" /> a <InlineMath tex="m" />.
          Koeficienty i pravé strany mají jednotku kelvin:
        </p>
        <Equation tex={String.raw`63{,}395f+52{,}493m\approx58{,}797`} />
        <Equation tex={String.raw`25{,}111f+56{,}418m\approx34{,}727`} />
        <p>
          Z první rovnice vyjádříme <InlineMath tex="f" /> pomocí <InlineMath tex="m" />
          a dosadíme do druhé. Zbude tak jediná neznámá, <InlineMath tex="m" />.
          Po jejím výpočtu získáme zpětným dosazením také <InlineMath tex="f" />.
          Řešení dává přibližně <InlineMath tex="f=0{,}6616" /> a <InlineMath tex="m=0{,}3210" />.
          Jejich součet je 0,9827, tedy asi 98 % ledu. V tomto modelu připadá
          přibližně 66 % celé stopy na jednoletou a 32 % na víceletou složku.
          Zbývají necelá 2 % vody. Frekvenční poměr je pod hranicí 0,05,
          takže popsaný meteorologický filtr tento výsledek nevyřadí.
          Získali jsme odhad pro rozsáhlou měřenou stopu v jednom okamžiku,
          nikoli podíl ledu celé oblasti.
        </p>
        <details className="method-details">
          <summary>Data, přesný výběr a zopakování výpočtu</summary>
          <p>
            Zdrojový soubor je <code>RSS_SSMI_FCDR_V07R00_F11_D19920301_S0056_E0249_R01322.nc</code>.
            Používáme sken 797 a stopu 44, číslováno od nuly. Sken začal
            v 01:47:20,2972 UTC. Soubor u něj uvádí nulové všechny příznaky
            kvality a nulový podíl pevniny. Vybraný bod slouží k předvedení
            výpočtu za zimních podmínek, nejde o statistický výběr pro celou Arktidu.
            Původní data poskytli Frank Wentz a Carl Mears z Remote Sensing Systems
            prostřednictvím NOAA CDR.{" "}
            <SourceLink id="DOI_10_7289_V5SJ1HKZ">(datový soubor)</SourceLink>{" "}
            a <SourceLink id="WEB_NOAA_RSS_CDR_Use">(podmínky otevřeného užití)</SourceLink>
          </p>
          <p>
            RSS v7 je pozdější překalibrování původních měření. Reference z roku
            1997 vznikly pro tehdejší zpracování a zde je znovu nenastavujeme.
            Ukázka proto opakuje matematické jádro metody, nikoli oficiální
            denní mapu NSIDC. Neprovádíme převod na denní mřížku, pobřežní opravu
            ani doplňování mezer. U referencí přebíráme hotové hodnoty z tabulky 3,
            které už zahrnují v tabulce popsané úpravy. Zvlášť je nepřičítáme.{" "}
            <SourceLink id="WEB_NOAA_RSS_Microwave_ATBD_2018">(RSS: kalibrace)</SourceLink>{" "}
            a <SourceLink id="WEB_NASA_Cavalieri_1997_Sea_Ice_User_Guide">(původ referencí)</SourceLink>
          </p>
          <p>
            Stáhněte <a href="/data/methods/microwave-radiometry/sample.csv">vstupní CSV</a>,{" "}
            <a href="/data/methods/microwave-radiometry/example.json">původ dat, reference a kontrolní součty</a>{" "}
            a <a href="/data/methods/microwave-radiometry/reproduce.py">výpočet v Pythonu</a> do jedné složky.
            Příkaz <code>python reproduce.py</code> nepotřebuje doplňkové knihovny.
            Použije nezkrácené hodnoty ze souboru, zkontroluje příznaky kvality
            a po výpočtu ověří oba poměry zpětným dosazením získaných podílů.
          </p>
          <p>
            <a href="/data/methods/microwave-radiometry/extract.py">Skript pro ověření původu vstupů</a>{" "}
            navíc stáhne původní oběh o velikosti přibližně 6,5 MB, ověří jeho
            kontrolní součet a zopakuje výběr bodu. Potřebuje knihovnu <code>h5py</code>.
            Přesná adresa původního souboru i verze zpracování jsou v souboru JSON.
            Přístup k datům: 27. října 2026.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Pasivní mikrovlnná radiometrie zachycuje přirozené záření povrchu a
            atmosféry. Kombinace několika pásem umožňuje rozlišit jejich vlastnosti. U
            mořského ledu převádí rozdílné vyzařování vody a ledu na podíl zamrzlé
            hladiny, který lze sledovat i během polární noci.
          </p>
          <p>
            Metoda umožňuje určovat podíl mořského ledu, teplotní profily atmosféry,
            množství vodní páry ve sloupci atmosféry, intenzitu srážek, zásobu vody ve sněhu
            a vlhkost půdy. Ledové pokrytí vyjadřuje od 0 do 100 %.
            Družicový radiometr SSM/I v pásmu 19 GHz zahrnuje do jednoho měření plochu
            přibližně 70 × 45 km, takže zachycuje proměny rozsáhlých oblastí.{" "}
            <SourceLink id="WEB_NASA_SSMI_Validation_1992">(Cavalieri, ed., 1992)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
