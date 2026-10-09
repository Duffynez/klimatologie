import Image from "next/image";
import { SourceLink } from "./SourceLink";

export function ArcticSeaIceArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>Koncentrace ledu</dt>
            <dd>Podíl jedné mapové buňky pokrytý mořským ledem. Udává se od 0 do 100 %.</dd>
          </div>
          <div>
            <dt>Rozsah ledu</dt>
            <dd>Součet celých ploch buněk, v nichž led pokrývá alespoň 15 %. Udává se v km².</dd>
          </div>
          <div>
            <dt>Plocha ledu</dt>
            <dd>Součet ploch skutečně pokrytých ledem. Každá buňka se započítá podle své koncentrace.</dd>
          </div>
          <div>
            <dt>Víceletý led</dt>
            <dd>Led, který přežil alespoň jedno letní období tání. Jeho stáří lze sledovat po celých letech.</dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Rozsah a plocha se vyjadřují v milionech km², tloušťka v metrech a objem v km³. Stejný ledový pokryv proto
          může být popsán několika různými čísly, která nelze zaměňovat.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Arktický mořský led je zmrzlá mořská voda, která pokrývá část Severního ledového oceánu a okolních moří.
          Pozorujeme, jak velkou část oceánu zabírá, jak souvisle ji pokrývá, jak je silný a kolik let jednotlivé kry
          přežívají. Výsledkem jsou mapy a hodnoty rozsahu, plochy, tloušťky, stáří a objemu ledu.
        </p>

        <p>
          Tyto veličiny vznikají různými postupy. Z družicového mikrovlnného záření se odhaduje podíl ledu v mapových
          buňkách a z něj rozsah a plocha. Stáří se počítá sledováním pohybu a přežití ledu. Tloušťka se odvozuje
          například z výšky jeho povrchu nad hladinou. Rozsah a plochu rozlišuje příručka Sea Ice Index,
          výpočet stáří popisují Tschudi a kol. a spojení různých měření tloušťky vyhodnotil Kwok.{" "}
          <SourceLink id="WEB_National_Snow_and_Ice_Data_C_uzivatelske_prirucce_Sea_Ice_Index_v4_48d7d043">Sea Ice Index v4</SourceLink>,{" "}
          <SourceLink id="DOI_10_5194_tc_14_1519_2020">Tschudi et al., 2020</SourceLink> a{" "}
          <SourceLink id="DOI_10_1088_1748_9326_aae3ec">Kwok, 2018</SourceLink>
        </p>

        <p>
          Nejčastěji zveřejňované číslo je rozsah. Mapa se rozdělí na buňky a každá buňka s koncentrací alespoň 15 % se
          započítá celou svou plochou. Kdyby buňka měla 600 km² a led pokrýval 75 %, přidá k rozsahu 600 km², ale k
          ploše ledu pouze 450 km². Při stejném výběru buněk je proto rozsah nejméně stejně velký jako plocha.
          U Sea Ice Index se i do plochy započítávají pouze buňky s koncentrací alespoň 15 %. Zvlášť se řeší
          nepozorovaná oblast kolem pólu. Přesný postup uvádí uživatelská příručka{" "}
          <SourceLink id="WEB_National_Snow_and_Ice_Data_C_uzivatelske_prirucce_Sea_Ice_Index_v4_48d7d043">
            Sea Ice Index v4
          </SourceLink>
          .
        </p>

        <p>
          Led se během roku pravidelně zvětšuje a zmenšuje. Arktický rozsah obvykle dosáhne nejvyšší hodnoty v březnu
          a nejnižší v září, ale přesný den se rok od roku mění. Denní minimum označuje jediný den nebo vyhlazený
          několikadenní údaj. Zářijový průměr vyjadřuje celý měsíc. NSIDC, americké Národní centrum dat o sněhu a
          ledu, při oznamování minim a maxim používá průměr daného dne a čtyř předchozích dnů. Zářijový průměr,
          minimum tohoto vyhlazeného záznamu a nejnižší nevyhlazený denní údaj se proto mohou lišit.{" "}
          <SourceLink id="WEB_National_Snow_and_Ice_Data_C_uzivatelske_prirucce_Sea_Ice_Index_v4_48d7d043">Příručka Sea Ice Index v4</SourceLink>
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/arctic-sea-ice/nasa-minimum-2025.jpg"
            alt="Arktida 10. září 2025 s bílým mořským ledem a žlutou hranicí průměrného minima 1981 až 2010"
            width={1024}
            height={576}
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption>
            Rozsah arktického mořského ledu při denním minimu 10. září 2025 podle produktu NASA a NSIDC činil 4,60
            milionu km². Žlutá čára označuje průměrnou polohu denního minima v letech 1981–2010, nikoli pobřeží ani
            hranici souvislého ledu. Led na mapě je odvozen z měření japonského mikrovlnného radiometru AMSR2.
            Jde o snímek sezóny 2025. Novější výsledek pro rok 2026 je uveden níže. Vizualizace: Trent L. Schindler.
            Vědecká konzultace: Walt Meier. Kredit: NASA Scientific Visualization Studio a JAXA. Zdroj:{" "}
            <SourceLink id="WEB_NASA_NASA_Scientific_Visualization_Studio_Arctic_Sea_8c5c7d01">NASA SVS 5583</SourceLink>. Použití pro
            informační účely dovolují{" "}
            <SourceLink id="WEB_NASA_Guidelines_for_using_NASA_Images_and_Media_Guide_e6f9e9e4">
              pravidla NASA pro obrazový materiál
            </SourceLink>
            .
          </figcaption>
        </figure>

        <h2>Historie pozorování</h2>
        <p>
          Před družicemi vznikaly mapy z hlášení lodí, pobřežních pozorovatelů a výprav. Dánský meteorologický ústav
          sestavoval pro letní měsíce mapy Arktidy od roku 1893 do roku 1956. Jejich značky odlišují místa, kde byl led
          přímo hlášen, od úseků hranice doplněných zkušeností kartografů. U dopočtených částí dnes nelze zpětně určit
          chybu, a proto se tyto mapy nemají vydávat za stejně úplné měření jako současné družicové pokrytí. Originály,
          popis pozorovatelů i upozornění na nejistotu zveřejňuje{" "}
          <SourceLink id="DOI_10_7265_n56d5qxc">archiv map DMI 1893–1956</SourceLink>.
        </p>

        <p>
          Další dlouhý soubor vznikl v ruské Arktidě. Ledové mapy, které od roku 1933 připravoval Arktický a
          antarktický výzkumný ústav, umožnily Mahoneymu a kol. určit polohu okraje a regionální rozsah podél severního
          pobřeží Eurasie. Walsh a kol. později spojili historické zdroje do měsíčních map od roku 1850. Čím
          dále se jde před období družic, tím více buněk pochází z řídkých pozorování a rekonstrukce. Dlouhé historické
          soubory proto slouží k jiné otázce než přesný denní záznam od roku 1978.{" "}
          <SourceLink id="DOI_10_1029_2008jc004830">Mahoney et al., 2008</SourceLink>,{" "}
          <SourceLink id="WEB_NSIDC_Walsh_Sea_Ice_1850_v2_Guide">metodická příručka historického souboru</SourceLink> a{" "}
          <SourceLink id="DOI_10_7265_jj4s_tq79">Walsh et al., data v2</SourceLink>
        </p>

        <p>
          První několikaleté mapování celé Arktidy pomocí pasivního mikrovlnného radiometru přinesla družice Nimbus 5.
          Její mikrovlnný radiometr s elektronickým snímáním, označovaný ESMR, sledoval led v letech 1973–1976
          a ukázal, že mikrovlny dovolují pozorovat povrch i během polární
          noci a přes většinu oblačnosti. Záznam však nenavazuje bez mezery na dnešní měření. Mapy, postup i tehdejší
          omezení shrnuli Parkinson a kol. v monografii{" "}
          <SourceLink id="WEB_NASA_Arctic_Sea_ice_1973_1976_Satellite_passive_micro_d558d4bf">Arctic Sea Ice, 1973–1976</SourceLink>.
        </p>

        <p>
          Souvislý moderní záznam začíná 26. října 1978 skenujícím vícekanálovým mikrovlnným radiometrem SMMR na
          družici Nimbus 7. Od srpna 1987 pokračovaly mikrovlnné zobrazovací přístroje SSM/I, později jejich
          nástupci SSMIS. Sea Ice Index v4 používá od 1. ledna 2025 měření radiometru AMSR2. Překryv mezi
          přístroji umožnil porovnat jejich odezvu a upravit převodní hodnoty tak, aby změna družice nevytvořila
          nepravý skok. Všechny generace však nemají stejné rozlišení ani stejnou oblast kolem severního pólu, takže
          verze produktu a zacházení s těmito rozdíly patří k výsledku.{" "}
          <SourceLink id="DOI_10_5067_qozivyv3v9jp">SMMR 1978–1987</SourceLink>,{" "}
          <SourceLink id="WEB_NASA_Cavalieri_1997_Sea_Ice_User_Guide">Cavalieri et al., 1997</SourceLink> a{" "}
          <SourceLink id="DOI_10_7265_a98x_0f50">Sea Ice Index v4</SourceLink>
        </p>

        <p>
          Při přechodu na AMSR2 autoři upravili prostorové vyhlazení jeho jemnějších vstupů tak, aby se přiblížily
          staršímu přístroji SSMIS, a porovnali výsledné rozsahy během překryvu. Rozdíly tím nezmizely úplně.
          Verze 4 ponechává období před rokem 2025 shodné s verzí 3, takže jde o spojení přístrojů, které musí být
          doloženo srovnáním. Postup a rozdíly rozsahu i plochy ukazuje technická zpráva{" "}
          <SourceLink id="WEB_NSIDC_Sea_Ice_Index_v4_Analysis_2025">Sea Ice Index Version 4 Analysis</SourceLink>.
        </p>

        <p>
          Tloušťka má jinou historii. Vrty a elektromagnetické sondy poskytují místní profily. Sonar obrácený vzhůru z
          ponorky nebo zakotveného přístroje měří, jak hluboko led zasahuje pod hladinu. Uvolněné americké ponorkové
          profily sahají do roku 1958, ale pokrývají vybrané trasy a roky. Družice ICESat měřila výšku povrchu ledu v
          letech 2003–2009, CryoSat-2 měří radarem od roku 2010 a ICESat-2 laserem od roku 2018. Teprve tyto přístroje
          přinesly opakované mapy velké části oceánu, převážně pro období od podzimu do jara.{" "}
          <SourceLink id="DOI_10_1029_2009gl039035">Kwok &amp; Rothrock, 2009</SourceLink>,{" "}
          <SourceLink id="DOI_10_1002_grl_50193">Laxon et al., 2013</SourceLink> a{" "}
          <SourceLink id="DOI_10_1088_1748_9326_aae3ec">Kwok, 2018</SourceLink>
        </p>

        <h2>Jak vzniká zveřejněný záznam</h2>
        <h3>Výpočet koncentrace ledu z mikrovlnného záření</h3>
        <p>
          Pasivní mikrovlnný radiometr zaznamenává přirozené mikrovlnné záření povrchu. Jeho intenzitu vyjadřuje
          jako jasovou teplotu: teplotu ideálního zářiče, který by vysílal stejně silný signál. To je měřítko záření,
          nikoli přímý údaj o teplotě ledu. Přístroj měří v několika frekvencích a polarizacích, tedy při různých
          rychlostech kmitání a směrech elektrické složky záření. Otevřená voda a mořský led vysílají mikrovlny odlišně,
          takže z kombinace kanálů lze odhadnout, jaká část sledované plochy je pokryta ledem. Metoda NASA Team používá
          typické hodnoty pro otevřenou vodu, jednoletý led a víceletý led a z jejich poměrů vypočte koncentraci. Její
          vstupy, kontrolu a propojení přístrojů popisuje původní příručka tvůrců souboru.{" "}
          <SourceLink id="WEB_NASA_Cavalieri_1997_Sea_Ice_User_Guide">Cavalieri et al., 1997</SourceLink>
        </p>

        <p>
          Jedno měření družice pokrývá oválnou stopu o rozměrech desítek kilometrů. Výsledky se ukládají do pravidelné
          polární mapy. Sea Ice Index používá buňky po 25 km. Algoritmus odstraňuje falešný led vznikající vlivem vodní
          páry, větrem zdrsněné hladiny a blízkosti pevniny. V létě navíc leží na ledu voda v tůních, jejíž mikrovlnný
          signál připomíná otevřené moře. Příručka Sea Ice Index proto uvádí pro koncentraci jedné buňky obvykle asi
          ±5 procentních bodů v zimě a ±15 bodů v létě s tůněmi. Jde o nejistotu místní koncentrace, nikoli přímo o
          nejistotu součtu celé Arktidy.{" "}
          <SourceLink id="WEB_National_Snow_and_Ice_Data_C_uzivatelske_prirucce_Sea_Ice_Index_v4_48d7d043">
            Sea Ice Index v4, kapitola 6
          </SourceLink>
        </p>

        <p>
          Nízké koncentrace se obtížně rozlišují od vlivu počasí nebo okolní pevniny. Sea Ice Index proto při
          výpočtu rozsahu vynechává buňky s méně než 15 % ledu. Hranice je konvence pro srovnatelné zpracování
          v čase. Neznamená, že na jedné
          straně čáry je souvislá pevná deska a na druhé žádný led. Okraj často tvoří široké pásmo rozlámaných ker a
          otevřené vody. Změna algoritmu, rozlišení nebo pobřežní masky proto může posunout výsledný rozsah, i když
          všechny produkty vycházejí z téhož družicového přeletu. Srovnání třiceti algoritmů při malém i velkém
          pokrytí ledem, za přítomnosti tenkého ledu a tůní provedli{" "}
          <SourceLink id="DOI_10_5194_tc_9_1797_2015">Ivanova et al., 2015</SourceLink>.
        </p>

        <h3>Výpočet měsíčních hodnot, minima a trendu</h3>
        <p>
          Denní rozsah vznikne součtem ploch všech buněk s koncentrací alespoň 15 %. Měsíční rozsah se počítá jako průměr denních
          součtů. Naproti tomu měsíční mapa koncentrace nejprve průměruje jednotlivé dny v každé buňce. Buňka s
          průměrnou koncentrací 50 % tak mohla mít polovinu měsíce plný led a polovinu otevřenou vodu, nebo mohla být
          po celý měsíc pokryta z poloviny. Mapa sama tyto dvě situace nerozliší. Pro dlouhodobé srovnání doporučuje
          NSIDC měsíční hodnoty, protože část denních chyb a krátkých přesunů ledu se v nich zprůměruje.
        </p>

        <p>
          Družice kvůli sklonu oběžné dráhy nevidí malou oblast přímo kolem pólu. Při výpočtu rozsahu Sea Ice Index
          předpokládá, že tato oblast má alespoň 15 % ledu. Při výpočtu plochy ji vynechává. Velikost nepozorované
          oblasti se s přístroji změnila z 1,19 milionu km² u SMMR na 0,064 milionu km² u AMSR2. V ploše ledu proto při
          změnách přístroje vznikají známé nespojitosti, zatímco rozsah je pro dlouhý přehled stabilnější. Tyto kroky jsou
          popsány a tabulkově vyčísleny v{" "}
          <SourceLink id="WEB_National_Snow_and_Ice_Data_C_uzivatelske_prirucce_Sea_Ice_Index_v4_48d7d043">
            uživatelské příručce Sea Ice Index v4
          </SourceLink>
          .
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div
            className="article-figure__scroll"
            tabIndex={0}
            aria-label="Vodorovně posuvný graf měsíčních odchylek rozsahu mořského ledu v roce 2025"
          >
            <Image
              className="article-figure__media"
              src="/media/arctic-sea-ice/noaa-seasonal-cycle-2025.png"
              alt="Měsíční odchylky rozsahu arktického mořského ledu v roce 2025 a průměry dvou starších období"
              width={1600}
              height={1151}
              sizes="(max-width: 900px) 100vw, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Měsíční odchylka rozsahu od průměru 1991–2020. Černá plná křivka ukazuje rok 2025, černá přerušovaná rok
            2005, modrá průměr let 2005–2024 a červená průměr let 1979–2004. Šedé pole sahá od nejnižší po nejvyšší
            měsíční odchylku v letech 1979–2024. Svislá osa je v milionech km². Graf ukazuje každý kalendářní měsíc,
            nikoli jen březnové maximum a zářijové minimum. Zdroj: Meier et al., Arctic Report Card 2025, obr. 2. Data
            Sea Ice Index v4. Kredit: NOAA Arctic Program a autoři. Původní zpráva:{" "}
            <SourceLink id="DOI_10_25923_mmxf_0r86">DOI 10.25923/mmxf-0r86</SourceLink>.
          </figcaption>
        </figure>

        <h3>Jak se určuje stáří</h3>
        <p>
          Výpočet stáří rozdělí led na pomyslné částice a každý týden
          je posune podle map pohybu ledu, které vznikají z družicových obrazů a poloh unášených bójí. Částice, která se
          dostane mimo ledovou oblast, ze záznamu zmizí. Částice, která přežije týden letního minima, zestárne o jeden
          rok. Když se v jedné buňce setká více věkových tříd, zveřejněný produkt zachová stáří nejstarší z nich.
        </p>

        <p>
          Postup navazuje na sledování pohybu ledu rozvíjené od 80. let. Verzi 4 podrobně popsali Tschudi a kol.
          Její týdenní buňky mají 12,5 km. Přímý nezávislý soubor, který by dovolil zkontrolovat stáří každé kry v celé
          Arktidě, neexistuje. Autoři proto ověřují především vstupní pohyb ledu a zkoumají chyby, které vznikají při
          spojování různých zdrojů pohybu. Stáří je užitečné také jako hrubý ukazatel tloušťky, ale dvě stejně staré kry
          nemusí být stejně silné.{" "}
          <SourceLink id="DOI_10_5194_tc_14_1519_2020">Tschudi et al., 2020</SourceLink> a{" "}
          <SourceLink id="DOI_10_3390_rs8060457">Tschudi et al., 2016</SourceLink>
        </p>

        <h3>Jak se měří tloušťka a odhaduje objem</h3>
        <p>
          Sonar pod ledem měří ponor, tedy vzdálenost od hladiny ke spodní straně ledu. Družicový výškoměr měří opačnou
          část: volný bok, tedy malou výšku sněhu nebo ledu nad okolní hladinou. Tloušťka se z ní vypočte z rovnováhy
          plovoucí kry. K výpočtu je nutné znát nebo odhadnout hloubku a hustotu sněhu a hustotu ledu i mořské vody.
          Laser ICESat-2 zachycuje povrch sněhu. U radaru CryoSat-2 se v zimních podmínkách předpokládá hlavní
          odraz na rozhraní sněhu a ledu. Počítá se i se zpomalením signálu ve sněhu. Odchylka od tohoto předpokladu
          mění vypočtenou tloušťku. Zveřejněná tloušťka je proto odhad
          z výšky a doprovodných údajů, nikoli přímý odečet celé ledové desky. Základ obou přístupů popisují{" "}
          <SourceLink id="DOI_10_1002_grl_50193">Laxon et al., 2013</SourceLink> a{" "}
          <SourceLink id="DOI_10_1029_2019jc016008">Kwok et al., 2020</SourceLink>.
        </p>

        <p>
          Tůně a mokrý sníh v létě komplikují rozpoznání odrazné plochy, proto se současné družicové mapy tloušťky
          běžně zveřejňují pro období od podzimu do jara. ICESat-2 v produktu v4 poskytuje měsíční mapy od listopadu
          2018 do dubna 2026. Níže uvedený soubor CryoSat-2 L4 v1 obsahuje třicetidenní odhady od září 2010 do
          května 2025, vždy pro měsíce září až květen.
          Výsledky se kontrolují proti leteckým radarům, sonarům a místním měřením, jejichž pokrytí je však podstatně
          řidší než družicová mapa. Každý produkt musí uvést také variantu sněhové vrstvy, protože právě ta patří k
          hlavním zdrojům rozdílů v tloušťce.
        </p>

        <p>
          Objem vznikne vynásobením plochy každé buňky její koncentrací a tloušťkou a následným součtem. Přímé
          celoroční mapy tloušťky pro celou Arktidu nejsou k dispozici, a proto souvislé denní údaje o objemu často
          pocházejí z modelu, který přijímá pozorovanou koncentraci a dopočítává pohyb, růst a tání ledu. Příkladem je
          PIOMAS od roku 1979, systém modelování arktického oceánu a ledu, do něhož se průběžně vkládají měření.
          Jeho výsledek je modelový odhad omezený pozorováními, nikoli samostatné družicové měření
          objemu. Model a jeho nejistotu popisují{" "}
          <SourceLink id="DOI_10_1175_1520_0493_2003_131_0845_mgsiwa_2_0_co_2">
            Zhang &amp; Rothrock, 2003
          </SourceLink>{" "}
          a{" "}
          <SourceLink id="DOI_10_1029_2011jc007084">Schweiger et al., 2011</SourceLink>.
        </p>

        <h3>Co znamená nejistota</h3>
        <p>
          Jedno číslo nejistoty nemůže popsat všechny způsoby použití dat. Meier a Stewart měnili vstupní přístroje a
          parametry stále stejného zpracování Sea Ice Index. Pro takto porovnávané hodnoty odhadli relativní nejistotu
          rozsahu na 30 000–70 000 km² a u arktického minima přibližně 40 000 km². „Relativní“ zde znamená nejistotu
          vzájemného porovnání ve stejném produktu, nikoli procentní podíl. Při porovnání různých produktů našli
          sezónní rozdíly 0,5–1,0 milionu km², protože algoritmy reagují jinak na okraj ledu a používají jiné rozlišení.
          První údaj tedy popisuje porovnání uvnitř jednoho produktu. Druhý vyjadřuje rozdíly absolutních hodnot mezi
          produkty. Studie hodnotí tehdejší zpracování. Sama o sobě neurčuje nejistotu všech pozdějších verzí a
          přechodů mezi přístroji.{" "}
          <SourceLink id="DOI_10_1088_1748_9326_aaf52c">Meier &amp; Stewart, 2019</SourceLink>
        </p>

        <p>
          Wernecke a kol. přenesli do celkového rozsahu také místní nejistoty koncentrace a jejich prostorovou a
          časovou souvislost: chyby sousedních buněk a po sobě jdoucích dnů nejsou zcela nezávislé. Pro soubor
          koncentrace z klimatické iniciativy Evropské kosmické agentury (ESA CCI v2.1) a rok 2015 dostali
          průměrnou nejistotu denního arktického rozsahu 296 000 km² a
          měsíčního 156 000 km². Tato čísla jsou větší, protože zahrnují jinou část měřicí nejistoty než předchozí
          zkouška parametrů a týkají se jiného produktu. Navazující práce z roku 2026 ukázala, že u plochy ledu zůstávají vedle náhodné složky také
          systematické vlivy volby masek, oprav, doplnění oblasti pólu a spojení přístrojů. Poctivý graf proto uvádí
          název produktu, verzi, období, veličinu a způsob výpočtu nejistoty.{" "}
          <SourceLink id="DOI_10_5194_tc_18_2473_2024">Wernecke et al., 2024</SourceLink> a{" "}
          <SourceLink id="DOI_10_5194_tc_20_3783_2026">Wernecke et al., 2026</SourceLink>
        </p>

        <h2>Zveřejňovaná data</h2>
        <div className="article-data-list">
          <section className="article-data-item">
            <h3>NOAA/NSIDC Sea Ice Index, verze 4</h3>
            <p>
              Denní a měsíční koncentrace, rozsah, plocha, okraje a obrazové mapy na mřížce 25 km. Pokrytí začíná 26.
              října 1978 a pokračuje do současnosti. Verze 4 používá od roku 2025 AMSR2. Starší část je shodná s verzí
              3. Číselné přehledy lze stáhnout jako tabulky CSV, mapy jako obrázky PNG a prostorová data ve formátech
              GeoTIFF a shapefile. Dlouhodobé trendy je vhodné počítat z měsíčních hodnot. Starší vstupní koncentrace
              NASA Team jsou samostatně dostupné ve verzi 2, která končí prosincem 2025.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="DOI_10_7265_a98x_0f50">Data a citace</SourceLink>{" "}·{" "}
              <SourceLink id="WEB_National_Snow_and_Ice_Data_C_uzivatelske_prirucce_Sea_Ice_Index_v4_48d7d043">
                metodika v4
              </SourceLink>{" "}·{" "}
              <SourceLink id="DOI_10_5067_mpyg15waa4wx">koncentrace NASA Team v2</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>Evropská koncentrace ledu OSI SAF</h3>
            <p>
              OSI SAF je služba organizace EUMETSAT pro družicové sledování oceánu a ledu. Zveřejňuje samostatně
              zpracované mapy koncentrace včetně nejistoty každé buňky. Soubor OSI-450-a1, opravená verze 3.1,
              pokrývá říjen 1978 až prosinec 2020 na mřížce 25 km. Navazující OSI-430-a skončil 16. října 2025.
              Poskytovatel pro novější období doporučuje soubor OSI-438 z přístroje AMSR2, dostupný od ledna 2021.
              Od září 2026 přibylo pokračování OSI-438-a z přístroje AMSR3. Při spojování je nutné dodržet
              dokumentaci dané verze. Níže převzaté grafy Copernicus používají souhrnný Sea Ice Index v2.3 a
              zachovávají jeho tehdejší zpracování.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="DOI_10_15770_eum_saf_osi_0023">OSI-450-a1</SourceLink>{" "}·{" "}
              <SourceLink id="DOI_10_15770_eum_saf_osi_0014">OSI-430-a</SourceLink>{" "}·{" "}
              <SourceLink id="DOI_10_15770_eum_saf_osi_0024">OSI-438</SourceLink>{" "}·{" "}
              <SourceLink id="DOI_10_15770_eum_saf_osi_0027">OSI-438-a</SourceLink>{" "}·{" "}
              <SourceLink id="DOI_10_5194_tc_13_49_2019">základ metodiky, Lavergne et al., 2019</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>EASE-Grid Sea Ice Age, verze 4</h3>
            <p>
              Týdenní stáří ledu od 1. ledna 1984 do 31. prosince 2025 na mřížce 12,5 km. Produkt spojuje mapy rozsahu
              s vypočteným pohybem ledu. Pro novější týdny slouží předběžná verze Quicklook. Číselné mapy ve vědeckém
              formátu NetCDF i obrázky PNG lze stáhnout z NSIDC.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="DOI_10_5067_utav7490fepb">Stáří v4</SourceLink>{" "}·{" "}
              <SourceLink id="DOI_10_5067_2xxgzy3dugnq">Quicklook</SourceLink>{" "}·{" "}
              <SourceLink id="DOI_10_5194_tc_14_1519_2020">metodická studie</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>ICESat-2 a CryoSat-2: tloušťka</h3>
            <p>
              ICESat-2 L4 v4 obsahuje měsíční zimní tloušťku, volný bok a použité vlastnosti sněhu na mřížce 25 km od
              listopadu 2018 do dubna 2026. CryoSat-2 L4 v1 zveřejňuje třicetidenní odhady od září 2010 do května
              2025 pro období září až květen. Označení L4 znamená zpracovaný výsledek v pravidelné mapové mřížce.
              Stažení dat vyžaduje bezplatný účet NASA Earthdata. Soubory obsahují také nejistoty nebo jejich
              vstupní složky. Uvedené časové rozsahy odpovídají katalogům při kontrole 3. října 2026.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="DOI_10_5067_txdhdj1jt0cg">ICESat-2 v4</SourceLink>{" "}·{" "}
              <SourceLink id="DOI_10_5067_96jo0kifdas8">CryoSat-2 L4</SourceLink>{" "}·{" "}
              <SourceLink id="DOI_10_5067_04yyikxw0gjs">spojený produkt ICESat-2/CryoSat-2</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>Historické mapy a rekonstruované pokrytí</h3>
            <p>
              DMI zpřístupňuje letní mapy z let 1893–1956 včetně hlášených a odhadnutých okrajů. Databáze Walsh a kol.
              skládá měsíční mapy od roku 1850 z historických zdrojů a od konce roku 1978 z družic. Součástí dat
              je kód původu každé hodnoty. Rozlišuje také doplnění chybějících míst podle jiných let s podobným
              rozložením ledu. Mapy tak umožňují sledovat historii i míru, v níž konkrétní výsledek závisí na rekonstrukci.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="DOI_10_7265_n56d5qxc">DMI 1893–1956</SourceLink>{" "}·{" "}
              <SourceLink id="DOI_10_7265_jj4s_tq79">Walsh v2</SourceLink>{" "}·{" "}
              <SourceLink id="WEB_NSIDC_Walsh_Sea_Ice_1850_v2_Guide">popis databáze a kódů původu</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>PIOMAS: modelový odhad objemu</h3>
            <p>
              Denní a měsíční objem od roku 1979 a průměrná tloušťka v oblasti modelu. PIOMAS počítá pohyb,
              růst a tání ledu a přijímá pozorovanou koncentraci a teplotu povrchu moře. Data jsou volně ke stažení
              jako text a CSV. Při použití musí být výsledek označen jako modelová reanalýza, nikoli jako přímé
              arktické měření tloušťky.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="WEB_psc_apl_uw_edu_Polar_Science_Center_raquo_PIOMAS_Data_dbaf6399">
                Data PIOMAS
              </SourceLink>{" "}·{" "}
              <SourceLink id="DOI_10_1029_2011jc007084">nejistota modelu</SourceLink>
            </p>
          </section>
        </div>

        <h2>Srovnání nezávislých výpočtů</h2>
        <p>
          Sea Ice Index NSIDC a evropský OSI SAF mají samostatné zpracování, ale využívají z velké části stejné
          družicové mikrovlnné vstupy. Jejich shoda proto kontroluje hlavně postup výpočtu. Nepředstavuje dvě
          zcela nezávislá měření. Liší se převodem jasových teplot na koncentraci, filtry
          počasí, pobřežními maskami, rozlišením vstupů a zpracováním okraje. Rozdíl je nejviditelnější u absolutního
          rozsahu. V září 2025 uvádí NSIDC měsíční průměr 4,75 milionu km², zatímco OSI SAF 5,20 milionu km². U denního
          minima je to 4,60 milionu km² dne 10. září proti 5,07 milionu km² dne 7. září. Rozdíl sám o sobě neříká,
          který odhad je blíže skutečnému rozsahu. Ten není pro celou Arktidu přesně znám. Ke každému číslu proto
          patří název produktu a způsob výpočtu.{" "}
          <SourceLink id="DOI_10_25923_mmxf_0r86">
            NOAA Arctic Report Card 2025
          </SourceLink>{" "}
          a{" "}
          <SourceLink id="WEB_Copernicus_Sea_ice_cover_for_September_2025_Copernicus_88c9834a">
            Copernicus, září 2025
          </SourceLink>
        </p>

        <p>
          Stejnou opatrnost ukazuje březen 2026. NSIDC našel denní zimní maximum 14,29 milionu km² dne 15. března. OSI SAF uvádí 14,43 milionu km² dne 7. března. Oba poskytovatelé považují hodnotu za statisticky nerozlišitelnou od
          nízkého maxima roku 2025, ale pořadí dnů a přesná plocha se liší. Rozdíl je praktickou ukázkou toho, proč se
          hodnoty z různých produktů nemají spojovat do jedné křivky bez přepočtu celého období stejnou metodou.{" "}
          <SourceLink id="WEB_National_Snow_and_Ice_Data_C_Arctic_sea_ice_record_low_maximum_strikes_again_20554b0e">NSIDC, maximum 2026</SourceLink> a{" "}
          <SourceLink id="WEB_Copernicus_Sea_ice_cover_for_March_2026_Copernicus_f75f3111">
            Copernicus, březen 2026
          </SourceLink>
        </p>

        <h2 id="pozorovani">Pozorování</h2>
        <h3>Rozsah během celého roku</h3>
        <p>
          Družicový záznam ukazuje menší arktický rozsah ve všech kalendářních měsících, přičemž změna je největší na
          konci léta. V produktu NSIDC se měsíční březnový rozsah v letech 1979–2025 měnil v průměru o −38 000 km² za
          rok a zářijový o −76 100 km² za rok. Jde o lineární sklon celého období, ne o tvrzení, že každý jednotlivý rok
          ztratil právě tuto plochu. Meziroční kolísání je zřetelné a velikost změny závisí na zvoleném počátečním a
          konečném roce. Čísla i přesné období uvádí tabulka 1 v{" "}
          <SourceLink id="DOI_10_25923_mmxf_0r86">Arctic Report Card 2025</SourceLink>.
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div
            className="article-figure__scroll"
            tabIndex={0}
            aria-label="Vodorovně posuvný graf březnového rozsahu arktického mořského ledu 1979 až 2026"
          >
            <Image
              className="article-figure__media"
              src="/media/arctic-sea-ice/copernicus-march-1979-2026.png"
              alt="Odchylky březnového rozsahu arktického mořského ledu od průměru 1991 až 2020"
              width={1600}
              height={1252}
              sizes="(max-width: 900px) 100vw, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Březnový měsíční rozsah podle OSI SAF Sea Ice Index v2.3 od roku 1979 do roku 2026. Sloupce udávají
            procentní odchylku od březnového průměru 1991–2020, který činí 15,03 milionu km². Březen 2026 byl o 5,7 %
            pod tímto průměrem a v tomto produktu je nejnižším březnem v záznamu. Graf neukazuje denní maximum, ale
            průměr celého března. Kredit: C3S/ECMWF/EUMETSAT. Zdroj:{" "}
            <SourceLink id="WEB_Copernicus_Sea_ice_cover_for_March_2026_Copernicus_f75f3111">
              Copernicus, březen 2026
            </SourceLink>
            . Obsahuje informace Copernicus Climate Change Service 2026. Evropská komise ani ECMWF neodpovídají za
            jejich další použití.
          </figcaption>
        </figure>

        <p>
          Nejnovější oznámené letní minimum patří roku 2026. Podle předběžné zprávy NSIDC z 23. září dosáhl rozsah
          4,60 milionu km² dne 12. září 2026. V rámci nejistoty se dělí o desáté nejnižší místo s roky 2008, 2010
          a 2025. Posledních dvacet minim, z let 2007–2026, je současně dvacet nejnižších v družicovém záznamu.
          Tento údaj je stav předběžného vyhodnocení, nikoli nový přepočet trendů ve výše uvedené zprávě za rok 2025.{" "}
          <SourceLink id="WEB_NSIDC_Arctic_Sea_Ice_Minimum_2026">NSIDC, minimum 2026</SourceLink>
        </p>

        <p>
          Rekordem zůstává minimum 3,39 milionu km² ze 17. září 2012. Pro kratší úsek 2007–2025 NSIDC ve zprávě
          za rok 2025 nezjistil statisticky významný další lineární pokles minim. To je slučitelné s poklesem
          za celé období od roku 1979: pozdější roky leží níže než starší část záznamu, zatímco uvnitř kratšího
          úseku výrazně kolísají. Hodnocení statistické významnosti pro roky 2007–2025 zde neprodlužujeme o rok 2026.{" "}
          <SourceLink id="WEB_National_Snow_and_Ice_Data_C_2025_Arctic_sea_ice_minimum_squeezes_into_the_te_15e854cc">
            NSIDC, minimum 2025
          </SourceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div
            className="article-figure__scroll"
            tabIndex={0}
            aria-label="Vodorovně posuvný graf zářijového rozsahu arktického mořského ledu 1979 až 2025"
          >
            <Image
              className="article-figure__media"
              src="/media/arctic-sea-ice/copernicus-september-1979-2025.png"
              alt="Odchylky zářijového rozsahu arktického mořského ledu od průměru 1991 až 2020"
              width={1600}
              height={1328}
              sizes="(max-width: 900px) 100vw, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Zářijový měsíční rozsah podle OSI SAF Sea Ice Index v2.3 od roku 1979 do roku 2025. Sloupce udávají
            procentní odchylku od zářijového průměru 1991–2020, který činí 5,91 milionu km². Září 2025 bylo o 12 % pod
            průměrem a na 13. místě od nejnižší hodnoty tohoto produktu. Nejnižší zůstává září 2012 s odchylkou −32 %.
            Jde o měsíční hodnoty OSI SAF. Od denního minima NSIDC za rok 2025 se liší produkt i časové průměrování. Kredit:
            C3S/ECMWF/EUMETSAT. Zdroj:{" "}
            <SourceLink id="WEB_Copernicus_Sea_ice_cover_for_September_2025_Copernicus_88c9834a">
              Copernicus, září 2025
            </SourceLink>
            . Obsahuje informace Copernicus Climate Change Service 2025. Evropská komise ani ECMWF neodpovídají za
            jejich další použití.
          </figcaption>
        </figure>

        <p>
          Sea Ice Index NSIDC určil zimní maximum 14,29 milionu km² dne
          15. března 2026. Od maxima roku 2025 se lišilo o 20 000 km², což je méně než přibližná nejistota 40 000 km².
          NSIDC proto oba roky označuje jako shodně nejnižší maximum 48letého záznamu.{" "}
          <SourceLink id="WEB_National_Snow_and_Ice_Data_C_Arctic_sea_ice_record_low_maximum_strikes_again_20554b0e">NSIDC, maximum 2026</SourceLink>
        </p>

        <h3>Stáří ledu</h3>
        <p>
          Mapa stáří ukazuje přesun od pokryvu s velkým podílem víceletého ledu k pokryvu, v němž převládá led mladší
          než jeden rok. V týdnu minima 2025 zůstával víceletý led převážně u severního pobřeží Grónska a Kanadského
          arktického souostroví. Jeho plocha byla o 47 % menší než v roce 2005. Led starší než čtyři roky zabíral 95 000
          km². To je o 72 % méně než průměr let 2005–2024 a o 95 % méně než průměr 1,72 milionu km² z let 1985–2004.
          Údaj je výsledkem sledování pohybu a přežití ker, nikoli přímou mapou tloušťky.{" "}
          <SourceLink id="DOI_10_25923_mmxf_0r86">
            Meier et al., 2025
          </SourceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div
            className="article-figure__scroll"
            tabIndex={0}
            aria-label="Vodorovně posuvné mapy stáří arktického mořského ledu v letech 1985, 2005 a 2025"
          >
            <Image
              className="article-figure__media"
              src="/media/arctic-sea-ice/noaa-sea-ice-age-1985-2005-2025.png"
              alt="Tři mapy Arktidy rozlišující stáří mořského ledu při minimu v letech 1985, 2005 a 2025"
              width={1600}
              height={655}
              sizes="(max-width: 900px) 100vw, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Stáří ledu v týdnu ročního minima: panel a) rok 1985, b) rok 2005 a c) rok 2025. Tmavě modrá značí led
            mladší než jeden rok, světlejší odstíny postupně 1–2, 2–3 a 3–4 roky a nejsvětlejší žlutá led starší než
            čtyři roky. Mapa zobrazuje nejstarší věkovou třídu v každé buňce. Zdroj: EASE-Grid Sea Ice Age v4 a Quicklook. Meier et al., Arctic Report Card 2025, obr. 4. Kredit: NOAA Arctic Program, NSIDC a autoři.{" "}
            <SourceLink id="DOI_10_25923_mmxf_0r86">Původní zpráva</SourceLink>.
          </figcaption>
        </figure>

        <h3>Tloušťka a objem</h3>
        <p>
          Dlouhodobé údaje o tloušťce jsou řidší než mapy rozsahu, přesto se nezávislá měření v překryvných oblastech
          dají spojit. Kwok porovnal ponorkové sonary z let 1958–2000, ICESat z let 2003–2008 a CryoSat-2 z let
          2011–2018. V šesti oblastech, kde bylo možné napodobit historické vzorkování, klesla průměrná tloušťka blízko
          konce tání mezi obdobím ponorek 1958–1976 a obdobím CryoSat-2 2011–2018 o 2,0 m, tedy přibližně o 66 %. Toto
          číslo se vztahuje k šesti vybraným oblastem a sjednocenému datu 15. září. Není to souvislé měření každého roku
          ani plošný průměr celé Arktidy.{" "}
          <SourceLink id="DOI_10_1088_1748_9326_aae3ec">Kwok, 2018</SourceLink>
        </p>

        <p>
          Samostatná práce Sahry Kacimi a Rona Kwoka spojila laserový volný bok ICESat-2 s radarovým volným bokem CryoSat-2,
          aby současně odhadla sníh i tloušťku. Autoři zasadili tři zimy 2018–2021 do staršího družicového záznamu a pro
          období 2003–2021 vyčíslili úbytek zimního objemu přibližně o 6 000 km³, tedy asi třetinu. Vyhodnocují
          Severní ledový oceán ohraničený průlivy k Tichému oceánu, Kanadskému arktickému souostroví, Grónskému a
          Barentsovu moři. Zimní porovnání používá únor a březen. Velikost výsledku závisí na použité sněhové vrstvě:
          jde o odhad složený z měření výšky a fyzikálního výpočtu.{" "}
          <SourceLink id="DOI_10_1029_2021gl097448">Kacimi &amp; Kwok, 2022</SourceLink>
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            Rozsah arktického mořského ledu se od roku 1979 zmenšoval ve všech měsících a největší pokles nastal na
            konci léta. Březnový rozsah ubýval do roku 2025 přibližně o 38 000 km² ročně a zářijový o 76 100 km²
            ročně. Podle předběžného vyhodnocení roku 2026 dosáhlo letošní minimum 4,60 milionu km² a všech dvacet
            minim z let 2007–2026 bylo nižších než kterékoli minimum z let 1979–2006. Proměnilo se také stáří ledu:
            plocha ledu staršího než čtyři roky byla v roce 2025 o 95 % menší než
            průměr let 1985–2004. V šesti dlouhodobě srovnávaných oblastech se tloušťka na konci tání zmenšila mezi
            obdobími 1958–1976 a 2011–2018 přibližně o dva metry, tedy o 66 %. Ve vyhodnoceném Severním ledovém
            oceánu se zimní objem mezi roky 2003 a 2021 snížil přibližně o 6 000 km³, zhruba o třetinu.
          </p>
        </div>

        <h2>Prameny a data</h2>
        <p>
          Všechny zde použité odborné práce a metodické dokumenty mají veřejně dostupný plný text. U studií vede
          DOI na bibliografický záznam a samostatný odkaz v katalogu na celý text. Datové portály uvádějí verzi,
          pokrytí a podmínky stažení. Některá data NASA vyžadují bezplatné přihlášení Earthdata. Kontrola proběhla
          3. října 2026. Zdroje tohoto článku nepoužívají archivní kopie na Google Drive.
        </p>
        <div className="article-source-groups">
          <section>
            <h3>Primární studie</h3>
            <ul>
              <li>
                <SourceLink id="WEB_NASA_Cavalieri_1997_Sea_Ice_User_Guide">Cavalieri et al., 1997</SourceLink>:
                původní příručka zpracování koncentrace a propojení přístrojů SMMR a SSM/I.
              </li>
              <li>
                <SourceLink id="DOI_10_1029_2008jc004830">Mahoney et al., 2008</SourceLink>:
                zpracování historických ledových map ruské Arktidy z let 1933–2006.
              </li>
              <li>
                <SourceLink id="DOI_10_1029_2009gl039035">Kwok &amp; Rothrock, 2009</SourceLink> a{" "}
                <SourceLink id="DOI_10_1088_1748_9326_aae3ec">Kwok, 2018</SourceLink>: sonarová a
                družicová měření tloušťky v letech 1958–2018.
              </li>
              <li>
                <SourceLink id="DOI_10_1029_2021gl097448">Kacimi &amp; Kwok, 2022</SourceLink>:
                společný odhad sněhu, tloušťky a objemu z ICESat-2 a CryoSat-2.
              </li>
            </ul>
          </section>

          <section>
            <h3>Metodické práce</h3>
            <ul>
              <li>
                <SourceLink id="DOI_10_5194_tc_13_49_2019">Lavergne et al., 2019</SourceLink>:
                evropský klimatický záznam koncentrace OSI SAF a ESA CCI.
              </li>
              <li>
                <SourceLink id="DOI_10_5194_tc_14_1519_2020">Tschudi et al., 2020</SourceLink>:
                současná metoda pohybu a stáří ledu v NSIDC.
              </li>
              <li>
                <SourceLink id="DOI_10_1088_1748_9326_aaf52c">Meier &amp; Stewart, 2019</SourceLink>,{" "}
                <SourceLink id="DOI_10_5194_tc_18_2473_2024">Wernecke et al., 2024</SourceLink> a{" "}
                <SourceLink id="DOI_10_5194_tc_20_3783_2026">Wernecke et al., 2026</SourceLink>:
                různé složky nejistoty rozsahu, plochy a jejich trendů.
              </li>
              <li>
                <SourceLink id="DOI_10_5194_tc_9_1797_2015">Ivanova et al., 2015</SourceLink>:
                srovnání třiceti algoritmů koncentrace.
              </li>
              <li>
                <SourceLink id="DOI_10_1029_2011jc007084">Schweiger et al., 2011</SourceLink>:
                nejistota modelového objemu PIOMAS.
              </li>
            </ul>
          </section>

          <section>
            <h3>Datové portály a stahování</h3>
            <ul>
              <li>
                <SourceLink id="DOI_10_7265_a98x_0f50">Sea Ice Index v4</SourceLink>: denní a
                měsíční koncentrace, rozsah, plocha, mapy a hranice od roku 1978.
              </li>
              <li>
                <SourceLink id="DOI_10_15770_eum_saf_osi_0023">OSI-450-a1</SourceLink> a{" "}
                <SourceLink id="DOI_10_15770_eum_saf_osi_0014">OSI-430-a</SourceLink>: evropská
                koncentrace, nejistota buněk a starší pokračování. Nynější aktualizace poskytují{" "}
                <SourceLink id="DOI_10_15770_eum_saf_osi_0024">OSI-438</SourceLink> a{" "}
                <SourceLink id="DOI_10_15770_eum_saf_osi_0027">OSI-438-a</SourceLink>.
              </li>
              <li>
                <SourceLink id="DOI_10_5067_utav7490fepb">EASE-Grid Sea Ice Age v4</SourceLink>:
                týdenní stáří od roku 1984.
              </li>
              <li>
                <SourceLink id="DOI_10_5067_txdhdj1jt0cg">ICESat-2 v4</SourceLink> a{" "}
                <SourceLink id="DOI_10_5067_96jo0kifdas8">CryoSat-2 L4</SourceLink>: zimní
                tloušťka, volný bok, sníh a nejistoty.
              </li>
              <li>
                <SourceLink id="DOI_10_7265_n56d5qxc">DMI 1893–1956</SourceLink>,{" "}
                <SourceLink id="DOI_10_7265_jj4s_tq79">Walsh v2</SourceLink> a{" "}
                <SourceLink id="WEB_psc_apl_uw_edu_Polar_Science_Center_raquo_PIOMAS_Data_dbaf6399">
                  PIOMAS
                </SourceLink>
                : historické mapy, rekonstrukce a modelový objem.
              </li>
            </ul>
          </section>

          <section>
            <h3>Obrazy, grafy a podmínky použití</h3>
            <ul>
              <li>
                <SourceLink id="WEB_NASA_NASA_Scientific_Visualization_Studio_Arctic_Sea_8c5c7d01">NASA SVS: Arctic Sea Ice Minimum 2025</SourceLink>.
                Kredit NASA Scientific Visualization Studio, JAXA a uvedení tvůrci. Podmínky:{" "}
                <SourceLink id="WEB_NASA_Guidelines_for_using_NASA_Images_and_Media_Guide_e6f9e9e4">
                  NASA Images and Media Guidelines
                </SourceLink>
                .
              </li>
              <li>
                <SourceLink id="DOI_10_25923_mmxf_0r86">Arctic Report Card 2025</SourceLink>, obr.
                2 a 4. Kredit NOAA Arctic Program, NSIDC a autoři.
              </li>
              <li>
                <SourceLink id="WEB_Copernicus_Sea_ice_cover_for_March_2026_Copernicus_f75f3111">Copernicus, březen 2026</SourceLink>{" "}
                a{" "}
                <SourceLink id="WEB_Copernicus_Sea_ice_cover_for_September_2025_Copernicus_88c9834a">
                  Copernicus, září 2025
                </SourceLink>
                . Kredit C3S/ECMWF/EUMETSAT. Licence dovoluje bezplatné převzetí s uvedením zdroje a prohlášením o
                odpovědnosti:{" "}
                <SourceLink id="WEB_Copernicus_Licence_to_use_Copernicus_Products_rev_12_4244ad0f">
                  Licence to use Copernicus Products
                </SourceLink>
                .
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
