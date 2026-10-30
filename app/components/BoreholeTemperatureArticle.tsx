import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function BoreholeTemperatureArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak teplota v podzemí uchovává minulost</h2>
        <p className="article-prose__intro">
          Rekonstrukce teploty z vrtů je metoda, která z dnešních teplot v různých
          hloubkách odvozuje minulé změny teploty zemského povrchu. Využívá toho,
          že se oteplení a ochlazení povrchu postupně šíří do hornin nebo ledu.
          Změní tam rozložení teplot a tato stopa přetrvává i po změně podmínek
          nahoře. Nejprve projdeme postup v horninách, potom jeho použití v ledovcích.{" "}
          <SourceLink id="DOI_10_5194_cp_17_451_2021">(Cuesta-Valero a kol. 2021, fyzikální základ)</SourceLink>{" "}
          <SourceLink id="DOI_10_3189_172756499781821102">(Dahl-Jensenová a kol. 1999, ledovcové provedení)</SourceLink>
        </p>

        <h3>Jak se změna povrchu dostane do hloubky</h3>
        <p>
          Zemský povrch přijímá sluneční záření, vyzařuje teplo a vyměňuje energii
          se vzduchem i vodou. Jeho teplota se proto mění spolu s počasím
          a dlouhodobě i s klimatem. Když je povrch teplejší než hornina pod ním,
          předává jí teplo. V hornině se energie šíří vedením: sousední části
          materiálu si ji předávají, aniž by se hornina jako celek přesouvala.{" "}
          <SourceLink id="DOI_10_5194_cp_5_97_2009">(González-Rouco a kol. 2009, spojení povrchu a podzemí)</SourceLink>
        </p>
        <p>
          Při dlouhodobém oteplení se nejprve ohřeje hornina těsně pod povrchem.
          Ta předává teplo dál a změna se postupně projevuje ve větší hloubce.
          Čím hlouběji sestoupíme, tím slabší a pozvolnější odezvu najdeme.
          Krátké výkyvy se utlumí blízko povrchu, zatímco déle trvající změny
          ovlivní mocnější vrstvu. Podzemí tak uchovává hlavně pomalé změny
          teploty, rozložené do desetiletí a staletí.{" "}
          <SourceLink id="DOI_10_5194_cp_5_97_2009">(González-Rouco a kol. 2009, oddíl 2.2)</SourceLink>
        </p>
        <p>
          Rychlost tohoto vyrovnávání popisuje <strong>teplotní vodivost</strong>.
          Závisí na tom, jak dobře hornina vede teplo a kolik energie potřebuje
          k vlastnímu ohřátí. Označíme ji řeckým písmenem <InlineMath tex="\kappa" />
          a vyjadřujeme v metrech čtverečních za sekundu. Pro stejnou horninu
          roste charakteristická hloubka šíření s odmocninou uplynulé doby.
          Dvojnásobná hloubka tedy odpovídá přibližně čtyřnásobné době.{" "}
          <SourceLink id="DOI_10_5194_cp_17_451_2021">(Cuesta-Valero a kol. 2021, rovnice 4 a 15)</SourceLink>
        </p>
        <Equation tex={String.raw`d = 2\sqrt{\kappa\tau}`} />
        <p>
          Zde je <InlineMath tex="d" /> charakteristická hloubka v metrech
          a <InlineMath tex="\tau" /> doba od změny povrchu v sekundách.
          Vztah platí pro šíření tepla vedením v prostředí se stálou teplotní
          vodivostí. Popisuje hloubkové měřítko rozprostřené změny.
          Teplotní stopa slábne plynule a pokračuje i pod tuto hloubku.{" "}
          <SourceLink id="DOI_10_5194_cp_17_451_2021">(Cuesta-Valero a kol. 2021, model vedení tepla)</SourceLink>
        </p>

        <figure className="article-figure">
          <Image src="/media/borehole-temperature/principle.svg" width={960} height={1080}
            alt="Schéma ukazuje ohřívaný povrch, šíření tepla do podzemí a sondu ve vrtu. Navazují měřený teplotní profil, odečtení hlubinného pozadí a hledání minulé teploty povrchu."
            className="article-figure__media" unoptimized />
          <figcaption>
            Vlastní schéma principu. Rezavé šipky znázorňují přenos tepla
            z otepleného povrchu, zelená přenos z hlubšího zemského nitra.
            Teploměr na kabelu změří jejich společný projev v různých hloubkách.
            Dolní část ukazuje pořadí zpracování. Nákres není v měřítku.{" "}
            <SourceLink id="DOI_10_5194_cp_17_451_2021">(fyzikální vztahy a postup)</SourceLink>
          </figcaption>
        </figure>

        <h3>Co změříme ve vrtu</h3>
        <p>
          Pro rekonstrukci vybíráme vrt, kolem kterého se teplo šíří převážně
          vedením. Geologické údaje nám řeknou, jaké horniny protíná,
          a informace o podzemní vodě pomohou posoudit proudění v okolí.
          Často se využijí starší průzkumné vrty. Před měřením musí odeznít
          teplotní změna způsobená vrtáním a oběhem vrtné kapaliny,
          aby naměřené hodnoty vystihovaly okolní horninu.{" "}
          <SourceLink id="DOI_10_5194_cp_5_97_2009">(výběr prostředí)</SourceLink>{" "}
          <SourceLink id="DOI_10_5194_essd_6_201_2014">(Clow 2014, využití a ustálení průzkumných vrtů)</SourceLink>
        </p>
        <p>
          Do vrtu spouštíme teplotní sondu zavěšenou na kabelu.
          Naviják řídí její pohyb a měřicí kolečko sleduje délku odvinutého
          kabelu, z níž určíme hloubku čidla. Sondu můžeme v jednotlivých
          hloubkách zastavovat nebo ji pomalu spouštět za souvislého záznamu.
          Výsledkem je <strong>teplotní profil</strong>, tedy soubor dvojic
          hloubka a teplota, doplněný datem měření.{" "}
          <SourceLink id="DOI_10_3133_tm2E3">(Clow 2008, měřicí sestava)</SourceLink>
        </p>
        <p>
          Čidlem bývá termistor, drobná součástka, jejíž elektrický odpor se
          mění s teplotou. Přístroj změří odpor a pomocí kalibračního vztahu
          ho převede na stupně Celsia. Tento vztah se předem určí v lázni:
          sondu postupně vystavíme známým teplotám a zaznamenáme její odpor.
          Ve vysoce přesné sestavě americké geologické služby USGS určuje
          referenční teplotu lázně platinový teploměr. Tím se údaj sondy naváže
          na společnou teplotní stupnici.{" "}
          <SourceLink id="DOI_10_3133_tm2E3">(Clow 2008, kalibrace v oddílu 3.1.3)</SourceLink>{" "}
          Princip čidla rozvádí článek o{" "}
          <Link href="/metody/odporova-termometrie-a-termistory">odporové termometrii a termistorech</Link>.
        </p>
        <figure className="article-figure">
          <Image src="/media/borehole-temperature/koluktak-logging.jpeg" width={1378} height={1034}
            alt="Terénní stan a ústí vrtu Koluktak v aljašské tundře. Nad ústím je kladka vedoucí kabel teplotní sondy do vrtu."
            className="article-figure__media" unoptimized />
          <figcaption>
            Měření teploty ve vrtu Koluktak na Aljašce. Nad ústím vrtu je
            vedena měřicí kabeláž. Teplotní čidlo se spouští pod zem,
            viditelná armatura patří k ústí vrtu. Tato stanoviště slouží
            sledování teploty trvale zmrzlého podloží i studiu klimatické
            teplotní stopy. Fotografie z práce G. D. Clowa / USGS (2014),
            obrázek 3. Převzato beze změny, licence CC BY 3.0.{" "}
            <SourceLink id="DOI_10_5194_essd_6_201_2014">(původní snímek a popis stanoviště)</SourceLink>{" "}
            <SourceLink id="WEB_CC_BY_3_0">(licence)</SourceLink>
          </figcaption>
        </figure>

        <h3>Jak oddělíme hlubinné teplo</h3>
        <p>
          Teplota pod zemí je ovlivněna také teplem přicházejícím z nitra Země.
          V hornině se stálými tepelnými vlastnostmi by při dlouhodobě
          neměnné teplotě povrchu přibývala s hloubkou přibližně rovnoměrně.
          V grafu teploty proti hloubce by takové ustálené rozložení tvořilo
          přímku. Změny povrchu se k němu přidávají a profil zakřivují.{" "}
          <SourceLink id="DOI_10_5194_cp_17_451_2021">(Cuesta-Valero a kol. 2021, rovnice 1 a 2)</SourceLink>
        </p>
        <p>
          Toto hlubinné pozadí odhadneme z hlubšího úseku vrtu, kam se
          novodobé změny povrchu promítají méně. Přímku zvolíme tak,
          aby co nejlépe vystihovala naměřené hodnoty v tomto úseku.
          Její sklon je <strong>geotermický gradient</strong>, přírůstek teploty
          na jednotku hloubky. Prodloužením přímky směrem k povrchu získáme
          odhad pozadí také pro mělké části vrtu.{" "}
          <SourceLink id="DOI_10_5194_cp_17_451_2021">(odhad pozadí v oddílech 2.1 a 3.3)</SourceLink>
        </p>
        <Equation tex={String.raw`T_{\mathrm{poz}}(z)=T_0+gz`} />
        <p>
          Symbol <InlineMath tex="z" /> znamená hloubku v metrech,
          <InlineMath tex="T_{\mathrm{poz}}(z)" /> odhad teploty pozadí v této
          hloubce ve °C a <InlineMath tex="g" /> gradient v kelvinech na metr.
          Teplotní rozdíl jeden kelvin má stejnou velikost jako rozdíl jeden
          stupeň Celsia. Parametr <InlineMath tex="T_0" /> je hodnota
          ve °C, ke které přímka dospěje v nulové hloubce. Představuje odhad
          dlouhodobého povrchového základu, vůči němuž budeme změny vyjadřovat.{" "}
          <SourceLink id="DOI_10_5194_cp_17_451_2021">(význam členů rovnice)</SourceLink>
        </p>
        <p>
          V každé hloubce nyní od naměřené teploty odečteme pozadí.
          Získáme teplotní odchylku, často nazývanou anomálie.
          Kladná odchylka znamená, že je hornina teplejší než vypočtené
          pozadí. Záporná odpovídá nižší teplotě. Soubor těchto odchylek
          zachycuje tvar teplotní stopy, který použijeme k rekonstrukci.{" "}
          <SourceLink id="DOI_10_5194_cp_17_451_2021">(oddělení proměnlivé části profilu)</SourceLink>
        </p>

        <h3>Jak z profilu hledáme průběh minulých teplot</h3>
        <p>
          Pro časový výpočet potřebujeme hodnotu teplotní vodivosti horniny,
          která určuje rychlost šíření změn. Standardní postup ve studii
          z roku 2021 používá <InlineMath tex="\kappa=10^{-6}\,\mathrm{m^2/s}" />.
          Jde o převzatý modelový vstup. Autoři jej stanovili z předpokládané
          schopnosti horniny vést a ukládat teplo. S touto hodnotou
          lze určit, jak hluboko by se projevila změna stará určitý počet let.{" "}
          <SourceLink id="DOI_10_5194_cp_17_451_2021">(vstupní tepelné vlastnosti v oddílu 3.3.1)</SourceLink>
        </p>
        <p>
          Dalším krokem je vypočítat, jaká historie povrchu by dnešní
          odchylky vytvořila. Nejprve si představme opačný směr výpočtu:
          známe teplotu povrchu v minulosti a chceme zjistit její dnešní
          projev pod zemí. Z minulého průběhu, data měření a teplotní
          vodivosti horniny umíme pomocí rovnice vedení tepla vypočítat
          očekávaný teplotní profil.{" "}
          <SourceLink id="DOI_10_5194_cp_17_451_2021">(přímý výpočet, rovnice 3–5)</SourceLink>
        </p>
        <p>
          Minulost při tom rozdělíme do časových úseků. Každému přiřadíme
          teplotu povrchu a spočítáme jeho příspěvek k dnešní teplotě
          v jednotlivých hloubkách. Starší změna měla více času proniknout
          dolů, novější se silněji projevuje blízko povrchu.
          V uvažovaném modelu se tyto příspěvky sčítají. Každá naměřená
          teplota proto obsahuje společný účinek více období.{" "}
          <SourceLink id="DOI_10_5194_cp_17_451_2021">(skládání teplotních změn, rovnice 5)</SourceLink>
        </p>
        <p>
          Při rekonstrukci hledáme neznámé teploty jednotlivých období tak,
          aby jejich společný profil odpovídal měření. Tomuto obrácenému
          postupu říkáme <strong>inverze</strong>. Počítač porovnává
          vypočtené a naměřené odchylky v celém použitém hloubkovém úseku.
          Hloubce tak nepřiřazujeme jediný rok. Časové zařazení plyne
          z fyzikálního výpočtu šíření tepla a z okamžiku měření.{" "}
          <SourceLink id="DOI_10_5194_cp_17_451_2021">(inverzní úloha v oddílu 2.3)</SourceLink>
        </p>
        <p>
          Používaný výpočet nejprve určí, které změny povrchové historie
          by se v dnešním profilu projevily výrazně a které jen nepatrně.
          Rekonstrukci potom sestaví z těch dobře rozlišitelných.
          Tím omezí vliv drobných chyb měření na hledaný průběh.
          Protože se nejlépe uchovávají dlouhodobé změny, výsledná historie
          zachytí především pozvolný vývoj teploty. Čím starší období
          zkoumáme, tím širší časový úsek potřebujeme k rozpoznání změny.{" "}
          <SourceLink id="DOI_10_5194_cp_17_451_2021">(výběr rozlišitelných změn v oddílu 2.3)</SourceLink>
        </p>

        <h3>Co získaná historie říká o klimatu</h3>
        <p>
          Výstupem je průběh změn teploty <strong>zemského povrchu</strong>
          v okolí vrtu. Povrch a vzduch si vyměňují teplo, takže jejich
          dlouhodobé změny spolu souvisejí. Historie získaná z vrtu proto
          doplňuje meteorologická měření a další přírodní záznamy
          při zkoumání dlouhodobého oteplování a ochlazování.{" "}
          <SourceLink id="DOI_10_5194_cp_5_97_2009">(vztah teploty povrchu a vzduchu)</SourceLink>
        </p>
        <p>
          Z většího souboru vrtů lze sestavit obraz změn na pevninách.
          Nejprve převedeme historii každého vrtu na kalendářní období,
          protože jednotlivá měření proběhla v různých letech.
          Pro společná období potom porovnáme a zprůměrujeme dostupné
          místní rekonstrukce. Globální zpracování Cuesty-Valera
          a spoluautorů vycházelo z 1 079 vybraných profilů a pro každý
          rekonstruovalo 400 let před měřením.{" "}
          <SourceLink id="DOI_10_5194_cp_17_451_2021">(výběr dat a společné časové zařazení)</SourceLink>
        </p>
        <p>
          Sklon teplotního profilu umožňuje určit také <strong>tok tepla</strong>,
          tedy množství energie, které za jednotku času projde jednotkou plochy.
          Při známé schopnosti horniny vést teplo odpovídá prudší změně
          teploty s hloubkou silnější přenos energie. Vztah mezi gradientem
          a tokem tak propojí naměřené teploty s ohříváním nebo ochlazováním
          podzemí.{" "}
          <SourceLink id="DOI_10_5194_cp_17_451_2021">(tok tepla a Fourierův vztah v oddílu 2.2)</SourceLink>
        </p>
        <p>
          Teplotní profily slouží také k určování tepla uloženého v podzemí.
          Tepelná kapacita vyjadřuje, kolik energie je potřeba k ohřátí
          určitého množství horniny o jeden stupeň. Z ní a z teplotní
          odchylky vypočteme, kolik energie přibylo v dané vrstvě. Součtem přes hloubku získáme
          změnu zásoby tepla pod jednotkou plochy.
          Časový vývoj těchto zásob pomáhá zjistit, jak se přebytečná
          energie v klimatickém systému rozděluje mezi pevniny a ostatní
          prostředí.{" "}
          <SourceLink id="DOI_10_5194_cp_17_451_2021">(změny toku a obsahu tepla)</SourceLink>
        </p>
        <p>
          Opakovaným měřením stejného vrtu navíc sledujeme současné
          oteplování podzemí přímo. Takové záznamy jsou součástí
          pozorování <Link href="/pozorovani/snehova-pokryvka-a-permafrost">sněhu a permafrostu</Link>.
          Rekonstrukce využívá prostorový tvar teplotního profilu,
          a může proto doplnit i historii před zahájením těchto pravidelných měření.{" "}
          <SourceLink id="DOI_10_5194_essd_6_201_2014">(Clow 2014, pozorovací síť a klimatické využití)</SourceLink>
        </p>

        <h3>Vývoj metody a provedení v ledu</h3>
        <p>
          Klimatické využití navázalo na měření zemského tepla.
          Vývoj na Aljašce popsal účastník měřicího programu Gary Clow:
          průzkumné vrty ze 70. let byly zachovány pro sledování podzemních
          teplot a v 80. letech v nich vědci rozpoznali stopu povrchového
          oteplování. Od roku 1993 USGS vyvíjela přesnější polární měřicí
          sestavu, která umožnila zachycovat menší teplotní rozdíly.
          Pozdější mezinárodní databáze zpřístupnily společné zpracování
          vrtů z více kontinentů, běžně za posledních 500 let.{" "}
          <SourceLink id="DOI_10_5194_essd_6_201_2014">(Clow 2014, historie programu)</SourceLink>{" "}
          <SourceLink id="DOI_10_3133_tm2E3">(Clow 2008, vývoj přístroje)</SourceLink>{" "}
          <SourceLink id="WEB_NOAA_Borehole_CZ_HV105N_2016">(databáze Huang, Pollack a Shen, vymezení rekonstrukcí)</SourceLink>
        </p>
        <p>
          Také led vede teplo a uchovává stopu minulých povrchových teplot.
          Současně ale přibývá sněhem a pomalu se pohybuje.
          Při výpočtu proto sledujeme vedení tepla i přesun ledu,
          který přenáší svou teplotu do jiné hloubky. Potřebujeme znát
          nebo odhadnout tloušťku ledovce, rychlost přibývání sněhu
          a způsob proudění. U hlubokých vrtů model zahrnuje i přísun
          tepla z podloží.{" "}
          <SourceLink id="DOI_10_3189_172756499781821102">(Dahl-Jensenová a kol. 1999, spojený model tepla a pohybu ledu)</SourceLink>
        </p>
        <p>
          Na antarktickém Law Dome umožnil přibližně 1 200 metrů hluboký
          vrt rekonstruovat posledních 4 000 let povrchových teplot.
          Autoři porovnávali mnoho možných historií a sledovali, které
          dokážou vysvětlit měřený profil. Ve stejném vrtu lze získat
          i <Link href="/metody/ledova-jadra-a-analyza-uzavreneho-vzduchu">ledové jádro</Link>
          s izotopovým záznamem. Teplota ve vrtu a složení odebraného ledu
          poskytují dva odlišné podklady k poznání minulého klimatu.{" "}
          <SourceLink id="DOI_10_3189_172756499781821102">(časový dosah a porovnání s izotopy)</SourceLink>
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Časové podrobnosti se při vedení tepla vyhlazují. Výsledek závisí
          také na odhadu hlubinného pozadí, vlastnostech hornin a změnách
          místního prostředí. Přesto lze dlouhodobý signál porovnat s jinými
          měřeními: v globální studii z roku 2021 vyšlo mezi obdobími
          1950–1975 a 1975–2000 oteplení povrchu přibližně 0,3–0,4 °C,
          zatímco porovnávaný meteorologický záznam ukázal asi 0,4 °C.{" "}
          <SourceLink id="DOI_10_5194_cp_17_451_2021">(Cuesta-Valero a kol. 2021, tabulka 1 a obrázek 3)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Co určuje přesnost a jak probíhá kontrola</summary>
          <p>
            <strong>Měření a jeho stálost.</strong> Clow pro konkrétní sestavu
            USGS z roku 2008 vyčíslil standardní nejistotu teploty
            na 0,0030–0,0033 °C v rozsahu −60 až 0 °C. Jde o nejistotu
            jednotlivého měření, nikoli rekonstruované historie.
            Do této nejistoty započítal kalibraci, elektrické měření
            i další příspěvky. Pravidelná kontrola sond v referenční lázni
            pomáhá odhalit změnu jejich odezvy. Opakované záznamy vrtu
            umožňují sledovat také doznívání vlivu vrtání.{" "}
            <SourceLink id="DOI_10_3133_tm2E3">(rozpočet nejistoty přístroje)</SourceLink>{" "}
            <SourceLink id="DOI_10_5194_essd_6_201_2014">(kontroly a opakovaná měření)</SourceLink>
          </p>
          <p>
            <strong>Prostředí a pozadí.</strong> Proudící podzemní voda přenáší
            teplo a různé horninové vrstvy je vedou různě dobře.
            Zakřivení profilu proto může mít i jiný původ než změnu klimatu.
            Důležité jsou také sklon terénu, změna vegetace, sněhu
            nebo využití půdy. Odhad pozadí z příliš mělkého úseku může
            pohltit část hledané teplotní stopy. Tyto vlivy se posuzují
            podle geologie, historie místa a srovnání více vrtů.{" "}
            <SourceLink id="DOI_10_5194_cp_5_97_2009">(místní vlivy a vztah povrchu ke vzduchu)</SourceLink>{" "}
            <SourceLink id="DOI_10_5194_cp_17_451_2021">(nejistota pozadí)</SourceLink>
          </p>
          <p>
            <strong>Časové rozlišení.</strong> Starší krátké výkyvy mohou
            vytvořit téměř stejný dnešní profil jako plynulejší změna.
            Jemný časový krok výpočtu proto nezaručuje stejně jemný záznam
            minulosti. Autoři studie z roku 2021 porovnávali kroky
            25, 40 a 50 let a pro každý vrt počítali různé přípustné
            tepelné vlastnosti a podoby pozadí. Rozptyl takových výsledků
            zachycuje část modelové nejistoty. Neúplné geografické pokrytí
            a rozdílná data měření přidávají další nejistotu souhrnům.{" "}
            <SourceLink id="DOI_10_5194_cp_17_451_2021">(soubor inverzí a pokrytí)</SourceLink>
          </p>
          <p>
            <strong>Nezávislost porovnání.</strong> Meteorologický soubor
            pracoviště Climatic Research Unit, zkráceně CRU, obsahuje
            měření teploty vzduchu. Vrty poskytují jiný vstup, teplotu podzemí.
            Pro graf autoři sjednotili průměr za roky 1950–1970
            a provedli i porovnání při stejném prostorovém a časovém
            pokrytí. Shoda změn má proto větší význam než shoda
            absolutní úrovně křivek. Z CRU však odvodili také meze
            přípustných skoků teploty a tepelného toku, kterými filtrovali
            rozšířený soubor inverzí. Porovnání tak používá odlišná měření,
            ale část výběru výsledků již meteorologická data ovlivnila.{" "}
            <SourceLink id="DOI_10_5194_cp_17_451_2021">(oddíly 3.2–3.4 a popisek obrázku 3)</SourceLink>
          </p>
        </details>

        <h2>Příklad: teplotní profil českého vrtu</h2>
        <p>
          Použijeme veřejný záznam vrtu <strong>CZ-hv-105n</strong>
          na souřadnicích 48,95° severní šířky a 16,51° východní délky.
          Měření pochází z roku 1976. Soubor v databázi amerického
          Národního úřadu pro oceán a atmosféru, zkráceně NOAA,
          obsahuje 38 teplot od 20 do 390 metrů.
          Na těchto skutečných datech zopakujeme oddělení hlubinného
          pozadí, tedy přípravu teplotní stopy pro následnou inverzi.{" "}
          <SourceLink id="WEB_NOAA_Borehole_CZ_HV105N_2016">(Huang, Pollack a Shen, verze z října 2016)</SourceLink>
        </p>
        <p>
          Zvolíme hloubkové intervaly použité ve studii Cuesty-Valera
          a spoluautorů. Pro výpočet ponecháme 29 měření do 300 metrů
          a pozadí určíme z 11 bodů mezi 200 a 300 metry včetně krajních
          hodnot. Hledáme přímku s nejmenším součtem čtverců rozdílů
          mezi ní a těmito naměřenými teplotami. Každý bod má stejnou váhu.
          Vyjde průsečík <InlineMath tex="T_0" /> přibližně 7,9891 °C
          a gradient <InlineMath tex="g" /> přibližně 0,038582 K/m,
          tedy 38,582 K na kilometr.{" "}
          <SourceLink id="DOI_10_5194_cp_17_451_2021">(volba hloubek a způsob odhadu pozadí)</SourceLink>
        </p>
        <p>
          V hloubce 50 metrů byla naměřena teplota 11,170 °C.
          Přímka pozadí zde dává přibližně 9,918 °C.
          Odečtením získáme odchylku přibližně <strong>1,252 °C</strong>:
        </p>
        <Equation tex={String.raw`\begin{aligned}T_{\mathrm{poz}}(50\,\mathrm{m})&\approx 7{,}9891 + 0{,}038582\times50\\&\approx 9{,}918\,^{\circ}\mathrm{C}\\\Delta T(50\,\mathrm{m})&\approx 11{,}170-9{,}918\\&\approx 1{,}252\,^{\circ}\mathrm{C}\end{aligned}`} />
        <p>
          Značka <InlineMath tex="\Delta T" /> označuje rozdíl mezi měřením
          a pozadím. Výpočet provedeme v každé vybrané hloubce.
          U mělkých bodů vycházejí kladné odchylky, v hloubce 200 až
          300 metrů jsou malé. Hornina v horní části vrtu je tedy
          teplejší, než odpovídá prodloužení hlubinného průběhu.
          Velikost a časový průběh změny na povrchu by se teprve hledaly
          inverzí celého tohoto profilu.
        </p>
        <figure className="article-figure">
          <Image src="/media/borehole-temperature/hv105n-profile.svg" width={760} height={1080}
            alt="Dva grafy vrtu HV-105n. Naměřená teplota v horní části přesahuje přímku hlubinného pozadí. Po odečtení pozadí je v 50 metrech kladná odchylka 1,252 °C, která směrem dolů slábne."
            className="article-figure__media" unoptimized />
          <figcaption>
            Horní graf porovnává měřené teploty s přímkou pozadí.
            Dolní graf ukazuje jejich rozdíl. V obou roste hloubka směrem
            dolů. Šedý pás označuje úsek 200–300 m použitý k odhadu pozadí,
            rezavý bod výpočet v 50 metrech. Vlastní zpracování dat{" "}
            <SourceLink id="WEB_NOAA_Borehole_CZ_HV105N_2016">NOAA, vrt CZ-hv-105n</SourceLink>.
          </figcaption>
        </figure>
        <details className="article-details">
          <summary>Data a přesný postup pro zopakování</summary>
          <p>
            Původní soubor uchováváme beze změny. Datum měření je v něm
            zapsáno jako 1976.58, verze dat byla odevzdána v říjnu 2016.
            Začínáme zveřejněnými teplotami, původní odpory čidla nejsou
            v souboru dostupné. Záznam obsahuje také parametry a výsledky
            starší rekonstrukce. Ty v tomto výpočtu nepoužíváme.
          </p>
          <p>
            Výběr 15–300 m podle publikované metodiky zde obsahuje body
            20–300 m. Na úseku 200–300 m provedeme obyčejnou lineární
            regresi, tedy popsané proložení přímkou. Body nevyhlazujeme
            ani dále nevyřazujeme. Přesné výsledky jsou
            <InlineMath tex="T_0\approx7{,}9890909091\,^{\circ}\mathrm{C}" />
            a <InlineMath tex="g\approx0{,}0385818182\,\mathrm{K/m}" />.
            Odchylka v 50 m vychází 1,2518181818 °C.
          </p>
          <p>
            Uložte originál, soubor s původem dat a skript do jedné složky.
            Příkaz <code>python reproduce.py</code> v Pythonu 3.10 nebo
            novějším ověří vstup a vytvoří tabulku všech 29 odchylek
            i soubor číselných výsledků. Nepotřebuje síť ani další knihovny.
            Ukázka končí odečtením pozadí, úplnou inverzi povrchové historie neprovádí.
          </p>
          <ul>
            <li><a href="/data/methods/borehole-temperature/huang2016-CZ-hv-105n-original.txt">Původní soubor NOAA včetně metadat</a></li>
            <li><a href="/data/methods/borehole-temperature/reproduce.py">Výpočet v Pythonu</a></li>
            <li><a href="/data/methods/borehole-temperature/profile.csv">Teploty, pozadí a odchylky</a>, <a href="/data/methods/borehole-temperature/results.json">číselné výsledky</a></li>
            <li><a href="/data/methods/borehole-temperature/README.txt">Návod a podrobnosti výpočtu</a>, <a href="/data/methods/borehole-temperature/provenance.json">původ dat a kontrolní součet</a></li>
          </ul>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Změny teploty povrchu se vedením tepla ukládají do podzemí.
            Měření v různých hloubkách zachytí jejich společnou stopu.
            Po oddělení hlubinného pozadí hledáme takový průběh minulých
            povrchových teplot, který tento profil vysvětlí.
          </p>
          <p>
            Metoda rekonstruuje dlouhodobé změny teploty zemského povrchu
            a pomáhá určit tok i zásobu tepla v podzemí.
            Horninové vrty se běžně používají pro posledních 500 let.
            Ledovcové provedení má doložený dosah alespoň 4 000 let,
            například při hloubce 1 200 m na Law Dome.
            Časový dosah závisí na hloubce a vlastnostech prostředí.{" "}
            <SourceLink id="WEB_NOAA_Borehole_CZ_HV105N_2016">(horninové vrty)</SourceLink>{" "}
            <SourceLink id="DOI_10_3189_172756499781821102">(led)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
