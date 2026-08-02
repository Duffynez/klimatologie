import Image from "next/image";
import type { ReactNode } from "react";

function ReferenceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="article-reference" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

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
          Toto rozdělení vychází přímo z měřicích postupů. Cavalieri, Gloersen a Campbell v roce 1984 popsali převod
          družicového mikrovlnného záření na koncentraci ledu. Parkinson a kol. v roce 1999 z těchto map odděleně
          počítali rozsah a plochu. Fowler, Emery a Maslanik v roce 2004 zavedli sledování stáří putujících ker a Kwok
          v roce 2018 společně vyhodnotil sonarová a družicová měření tloušťky a objemu. Současný Sea Ice Index i
          evropský záznam OSI SAF zachovávají stejné rozlišení základních veličin.{" "}
          <ReferenceLink href="https://doi.org/10.1029/JD089iD04p05355">Cavalieri et al., 1984</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1029/1999JC900082">Parkinson et al., 1999</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1109/LGRS.2004.824741">Fowler et al., 2004</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1088/1748-9326/aae3ec">Kwok, 2018</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.7265/a98x-0f50">Sea Ice Index v4</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.5194/tc-13-49-2019">Lavergne et al., 2019</ReferenceLink>
        </p>

        <p>
          Nejčastěji zveřejňované číslo je rozsah. Mapa se rozdělí na buňky a každá buňka s koncentrací alespoň 15 % se
          započítá celou svou plochou. Kdyby buňka měla 600 km² a led pokrýval 75 %, přidá k rozsahu 600 km², ale k
          ploše ledu pouze 450 km². Rozsah je proto vždy nejméně stejně velký jako plocha a obě hodnoty odpovídají na
          jinou otázku. Přesný postup i tento způsob vážení uvádí uživatelská příručka{" "}
          <ReferenceLink href="https://nsidc.org/sites/default/files/documents/user-guide/g02135-v004-userguide.pdf">
            Sea Ice Index v4
          </ReferenceLink>
          .
        </p>

        <p>
          Led se během roku pravidelně zvětšuje a zmenšuje. Arktický rozsah obvykle dosáhne nejvyšší hodnoty v březnu
          a nejnižší v září, ale přesný den se rok od roku mění. Denní minimum označuje jediný den nebo vyhlazený
          několikadenní údaj; zářijový průměr vyjadřuje celý měsíc. Při srovnávání let proto musí být vždy uvedeno, zda
          jde o denní krajní hodnotu, nebo měsíční průměr.
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
            hranici souvislého ledu. Led na mapě je odvozen z měření přístroje AMSR2. Vizualizace: Trent L. Schindler;
            vědecká konzultace: Walt Meier; kredit: NASA Scientific Visualization Studio a JAXA. Zdroj:{" "}
            <ReferenceLink href="https://svs.gsfc.nasa.gov/5583/">NASA SVS 5583</ReferenceLink>. Použití pro
            informační účely dovolují{" "}
            <ReferenceLink href="https://www.nasa.gov/nasa-brand-center/images-and-media/">
              pravidla NASA pro obrazový materiál
            </ReferenceLink>
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
          <ReferenceLink href="https://doi.org/10.7265/N56D5QXC">archiv map DMI 1893–1956</ReferenceLink>.
        </p>

        <p>
          Další dlouhý soubor vznikl v ruské Arktidě. Ledové mapy, které od roku 1933 připravoval Arktický a
          antarktický výzkumný ústav, umožnily Mahoneymu a kol. určit polohu okraje a regionální rozsah podél severního
          pobřeží Eurasie. Walsh a kol. později spojili devět historických zdrojů do měsíčních map od roku 1850. Čím
          dále se jde před období družic, tím více buněk pochází z řídkých pozorování a rekonstrukce. Dlouhé historické
          soubory proto slouží k jiné otázce než přesný denní záznam od roku 1978.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2008JC004830">Mahoney et al., 2008</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1111/j.1931-0846.2016.12195.x">Walsh et al., 2017</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.7265/jj4s-tq79">Walsh et al., data v2</ReferenceLink>
        </p>

        <p>
          První několikaleté mapování celé Arktidy pomocí pasivního mikrovlnného radiometru přinesla družice Nimbus 5.
          Přístroj ESMR sledoval led v letech 1973–1976 a ukázal, že mikrovlny dovolují pozorovat povrch i během polární
          noci a přes většinu oblačnosti. Záznam však nenavazuje bez mezery na dnešní měření. Mapy, postup i tehdejší
          omezení shrnuli Parkinson a kol. v monografii{" "}
          <ReferenceLink href="https://ntrs.nasa.gov/citations/19870015437">Arctic Sea Ice, 1973–1976</ReferenceLink>.
        </p>

        <p>
          Souvislý moderní záznam začíná 26. října 1978 přístrojem SMMR na družici Nimbus 7. Od srpna 1987 pokračovaly
          přístroje SSM/I, později SSMIS, a Sea Ice Index v4 používá od 1. ledna 2025 měření AMSR2. Překryv mezi
          přístroji umožnil porovnat jejich odezvu a upravit převodní hodnoty tak, aby změna družice nevytvořila
          nepravý skok. Všechny generace však nemají stejné rozlišení ani stejnou oblast kolem severního pólu, takže
          verze produktu a zacházení s těmito rozdíly patří k výsledku.{" "}
          <ReferenceLink href="https://doi.org/10.5067/QOZIVYV3V9JP">SMMR 1978–1987</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.5067/8GQ8LZQVL0VL">NASA Team concentration</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.7265/a98x-0f50">Sea Ice Index v4</ReferenceLink>
        </p>

        <p>
          Tloušťka má jinou historii. Vrty a elektromagnetické sondy poskytují místní profily; sonar obrácený vzhůru z
          ponorky nebo zakotveného přístroje měří, jak hluboko led zasahuje pod hladinu. Uvolněné americké ponorkové
          profily sahají do roku 1958, ale pokrývají vybrané trasy a roky. Družice ICESat měřila výšku povrchu ledu v
          letech 2003–2009, CryoSat-2 měří radarem od roku 2010 a ICESat-2 laserem od roku 2018. Teprve tyto přístroje
          přinesly opakované mapy velké části oceánu, převážně pro období od podzimu do jara.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2009GL039035">Kwok &amp; Rothrock, 2009</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1002/grl.50193">Laxon et al., 2013</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1088/1748-9326/aae3ec">Kwok, 2018</ReferenceLink>
        </p>

        <h2>Jak vzniká zveřejněný záznam</h2>
        <h3>Od mikrovlnného záření ke koncentraci</h3>
        <p>
          Pasivní mikrovlnný radiometr nevysílá paprsek k Zemi. Zaznamenává přirozené mikrovlnné záření povrchu jako
          jasovou teplotu v několika frekvencích a polarizacích. Otevřená voda a mořský led vysílají mikrovlny odlišně,
          takže z kombinace kanálů lze odhadnout, jaká část sledované plochy je pokryta ledem. Metoda NASA Team používá
          typické hodnoty pro otevřenou vodu, jednoletý led a víceletý led a z jejich poměrů vypočte koncentraci. Její
          fyzikální i početní základ popsali Cavalieri, Gloersen a Campbell.{" "}
          <ReferenceLink href="https://doi.org/10.1029/JD089iD04p05355">Cavalieri et al., 1984</ReferenceLink>
        </p>

        <p>
          Jedno měření družice pokrývá oválnou stopu o rozměrech desítek kilometrů. Výsledky se ukládají do pravidelné
          polární mapy; Sea Ice Index používá buňky po 25 km. Algoritmus odstraňuje falešný led vznikající vlivem vodní
          páry, větrem zdrsněné hladiny a blízkosti pevniny. V létě navíc leží na ledu voda v tůních, jejíž mikrovlnný
          signál připomíná otevřené moře. Příručka Sea Ice Index proto uvádí pro koncentraci jedné buňky obvykle asi
          ±5 procentních bodů v zimě a ±15 bodů v létě s tůněmi. Jde o nejistotu místní koncentrace, nikoli přímo o
          nejistotu součtu celé Arktidy.{" "}
          <ReferenceLink href="https://nsidc.org/sites/default/files/documents/user-guide/g02135-v004-userguide.pdf">
            Sea Ice Index v4, kapitola 6
          </ReferenceLink>
        </p>

        <p>
          Hodnoty pod 15 % jsou pro tyto přístroje příliš nejisté a při výpočtu okraje ledu se považují za otevřenou
          vodu. Hranice 15 % je konvence, která dovoluje porovnávat stejné zpracování v čase; neznamená, že na jedné
          straně čáry je souvislá pevná deska a na druhé žádný led. Okraj často tvoří široké pásmo rozlámaných ker a
          otevřené vody. Změna algoritmu, rozlišení nebo pobřežní masky proto může posunout výsledný rozsah, i když
          všechny produkty vycházejí z téhož družicového přeletu. Srovnání jedenácti algoritmů provedli{" "}
          <ReferenceLink href="https://doi.org/10.1109/TGRS.2014.2310136">Ivanova et al., 2014</ReferenceLink>.
        </p>

        <h3>Od denní mapy k měsíci, minimu a trendu</h3>
        <p>
          Denní rozsah vznikne součtem ploch všech buněk nad prahem 15 %. Měsíční rozsah se počítá jako průměr denních
          součtů. Naproti tomu měsíční mapa koncentrace nejprve průměruje jednotlivé dny v každé buňce. Buňka s
          průměrnou koncentrací 50 % tak mohla mít polovinu měsíce plný led a polovinu otevřenou vodu, nebo mohla být
          po celý měsíc pokryta z poloviny. Mapa sama tyto dvě situace nerozliší. Pro dlouhodobé srovnání doporučuje
          NSIDC měsíční hodnoty, protože část denních chyb a krátkých přesunů ledu se v nich zprůměruje.
        </p>

        <p>
          Družice kvůli sklonu oběžné dráhy nevidí malou oblast přímo kolem pólu. Při výpočtu rozsahu Sea Ice Index
          předpokládá, že tato oblast má alespoň 15 % ledu; při výpočtu plochy ji vynechává. Velikost nepozorované
          oblasti se s přístroji změnila z 1,19 milionu km² u SMMR na 0,064 milionu km² u AMSR2. V ploše ledu proto při
          změnách přístroje vznikají známé nespojitosti, zatímco rozsah je pro dlouhý přehled stabilnější. Tyto kroky jsou
          popsány a tabulkově vyčísleny v{" "}
          <ReferenceLink href="https://nsidc.org/sites/default/files/documents/user-guide/g02135-v004-userguide.pdf">
            uživatelské příručce Sea Ice Index v4
          </ReferenceLink>
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
            nikoli jen březnové maximum a zářijové minimum. Zdroj: Meier et al., Arctic Report Card 2025, obr. 2; data
            Sea Ice Index v4. Kredit: NOAA Arctic Program a autoři. Původní zpráva:{" "}
            <ReferenceLink href="https://doi.org/10.25923/mmxf-0r86">DOI 10.25923/mmxf-0r86</ReferenceLink>.
          </figcaption>
        </figure>

        <h3>Jak se určuje stáří</h3>
        <p>
          Stáří se neodečítá z barvy jedné družicové fotografie. Výpočet rozdělí led na pomyslné částice a každý týden
          je posune podle map pohybu ledu, které vznikají z družicových obrazů a poloh unášených bójí. Částice, která se
          dostane mimo ledovou oblast, ze záznamu zmizí. Částice, která přežije týden letního minima, zestárne o jeden
          rok. Když se v jedné buňce setká více věkových tříd, zveřejněný produkt zachová stáří nejstarší z nich.
        </p>

        <p>
          První takový postup zveřejnili Fowler, Emery a Maslanik. Současnou verzi 4 podrobně popsali Tschudi a kol.;
          její týdenní buňky mají 12,5 km. Přímý nezávislý soubor, který by dovolil zkontrolovat stáří každé kry v celé
          Arktidě, neexistuje. Autoři proto ověřují především vstupní pohyb ledu a zkoumají chyby, které vznikají při
          spojování různých zdrojů pohybu. Stáří je užitečné také jako hrubý ukazatel tloušťky, ale dvě stejně staré kry
          nemusí být stejně silné.{" "}
          <ReferenceLink href="https://doi.org/10.1109/LGRS.2004.824741">Fowler et al., 2004</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.5194/tc-14-1519-2020">Tschudi et al., 2020</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.3390/rs8060457">Tschudi et al., 2016</ReferenceLink>
        </p>

        <h3>Jak se měří tloušťka a odhaduje objem</h3>
        <p>
          Sonar pod ledem měří ponor, tedy vzdálenost od hladiny ke spodní straně ledu. Družicový výškoměr měří opačnou
          část: volný bok, tedy malou výšku sněhu nebo ledu nad okolní hladinou. Tloušťka se z ní vypočte z rovnováhy
          plovoucí kry. K výpočtu je nutné znát nebo odhadnout hloubku a hustotu sněhu a hustotu ledu i mořské vody.
          Radar CryoSat-2 a laser ICESat-2 navíc zachycují odlišné odrazné plochy. Zveřejněná tloušťka je proto odhad
          z výšky a doprovodných údajů, nikoli přímý odečet celé ledové desky. Základ obou přístupů popisují{" "}
          <ReferenceLink href="https://doi.org/10.1002/grl.50193">Laxon et al., 2013</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1029/2019JC016008">Kwok et al., 2020</ReferenceLink>.
        </p>

        <p>
          Tůně a mokrý sníh v létě komplikují rozpoznání odrazné plochy, proto se současné družicové mapy tloušťky
          běžně zveřejňují pro období od podzimu do jara. ICESat-2 v produktu v4 poskytuje měsíční mapy od listopadu
          2018 do dubna 2025; CryoSat-2 má průběžné třicetidenní odhady od září 2010 pro měsíce září až květen.
          Výsledky se kontrolují proti leteckým radarům, sonarům a místním měřením, jejichž pokrytí je však podstatně
          řidší než družicová mapa. Každý produkt musí uvést také variantu sněhové vrstvy, protože právě ta patří k
          hlavním zdrojům rozdílů v tloušťce.
        </p>

        <p>
          Objem vznikne vynásobením plochy každé buňky její koncentrací a tloušťkou a následným součtem. Přímé
          celoroční mapy tloušťky pro celou Arktidu nejsou k dispozici, a proto souvislé denní údaje o objemu často
          pocházejí z modelu, který přijímá pozorovanou koncentraci a dopočítává pohyb, růst a tání ledu. Příkladem je
          PIOMAS od roku 1979. Jeho výsledek je modelový odhad omezený pozorováními, nikoli samostatné družicové měření
          objemu. Model a jeho nejistotu popisují{" "}
          <ReferenceLink href="https://doi.org/10.1175/1520-0493(2003)131%3C0845:MGSIWA%3E2.0.CO;2">
            Zhang &amp; Rothrock, 2003
          </ReferenceLink>{" "}
          a{" "}
          <ReferenceLink href="https://doi.org/10.1029/2011JC007084">Schweiger et al., 2011</ReferenceLink>.
        </p>

        <h3>Co znamená nejistota</h3>
        <p>
          Jedno číslo nejistoty nemůže popsat všechny způsoby použití dat. Meier a Stewart měnili vstupní přístroje a
          parametry stále stejného zpracování Sea Ice Index. Pro takto porovnávané hodnoty odhadli relativní nejistotu
          rozsahu na 30 000–70 000 km² a u arktického minima přibližně 40 000 km². Při porovnání různých produktů našli
          sezónní rozdíly 0,5–1,0 milionu km², protože algoritmy reagují jinak na okraj ledu a používají jiné rozlišení.
          První údaj tedy odpovídá otázce, jak jistě porovnávat rok se stejným produktem; druhý ukazuje, jak moc se může
          změnit absolutní číslo při změně produktu.{" "}
          <ReferenceLink href="https://doi.org/10.1088/1748-9326/aaf52c">Meier &amp; Stewart, 2019</ReferenceLink>
        </p>

        <p>
          Wernecke a kol. přenesli do celkového rozsahu také místní nejistoty koncentrace a jejich prostorovou a
          časovou souvislost. Pro rok 2015 dostali průměrnou nejistotu denního arktického rozsahu 296 000 km² a
          měsíčního 156 000 km². Tato čísla jsou větší, protože zahrnují jinou část měřicí nejistoty než předchozí
          zkouška parametrů. Navazující práce z roku 2026 ukázala, že u plochy ledu zůstávají vedle náhodné složky také
          systematické vlivy volby masek, oprav, doplnění oblasti pólu a spojení přístrojů. Poctivý graf proto uvádí
          název produktu, verzi, období, veličinu a způsob výpočtu nejistoty.{" "}
          <ReferenceLink href="https://doi.org/10.5194/tc-18-2473-2024">Wernecke et al., 2024</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.5194/tc-20-3783-2026">Wernecke et al., 2026</ReferenceLink>
        </p>

        <h2>Zveřejňovaná data</h2>
        <div className="article-data-list">
          <section className="article-data-item">
            <h3>NOAA/NSIDC Sea Ice Index, verze 4</h3>
            <p>
              Denní a měsíční koncentrace, rozsah, plocha, okraje a obrazové mapy na mřížce 25 km. Pokrytí začíná 26.
              října 1978 a pokračuje do současnosti. Verze 4 používá od roku 2025 AMSR2; starší část je shodná s verzí
              3. Data jsou v CSV, GeoTIFF, PNG a shapefile. Dlouhodobé trendy je vhodné počítat z měsíčních hodnot.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://doi.org/10.7265/a98x-0f50">Data a citace</ReferenceLink>{" "}·{" "}
              <ReferenceLink href="https://nsidc.org/sites/default/files/documents/user-guide/g02135-v004-userguide.pdf">
                metodika v4
              </ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>EUMETSAT OSI SAF, verze 3</h3>
            <p>
              Nezávisle zpracované denní mapy koncentrace na mřížce 25 km včetně odhadu nejistoty každé buňky. Pevný
              klimatický záznam OSI-450-a pokrývá říjen 1978 až prosinec 2020; průběžný OSI-430-a navazuje od ledna
              2021. Evropský Sea Ice Index v2.3 z těchto dat zveřejňuje denní a měsíční rozsah a plochu.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://doi.org/10.15770/EUM_SAF_OSI_0023">OSI-450-a1</ReferenceLink>{" "}·{" "}
              <ReferenceLink href="https://doi.org/10.15770/EUM_SAF_OSI_0014">OSI-430-a</ReferenceLink>{" "}·{" "}
              <ReferenceLink href="https://doi.org/10.5194/tc-13-49-2019">Lavergne et al., 2019</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>EASE-Grid Sea Ice Age, verze 4</h3>
            <p>
              Týdenní stáří ledu od 1. ledna 1984 do 31. prosince 2024 na mřížce 12,5 km. Produkt spojuje mapy rozsahu
              s vypočteným pohybem ledu; pro novější týdny slouží rychle aktualizovaná verze Quicklook. Soubory NetCDF
              i mapy PNG lze stáhnout z NSIDC.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://doi.org/10.5067/UTAV7490FEPB">Stáří v4</ReferenceLink>{" "}·{" "}
              <ReferenceLink href="https://doi.org/10.5067/2XXGZY3DUGNQ">Quicklook</ReferenceLink>{" "}·{" "}
              <ReferenceLink href="https://doi.org/10.5194/tc-14-1519-2020">metodická studie</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>ICESat-2 a CryoSat-2: tloušťka</h3>
            <p>
              ICESat-2 L4 v4 obsahuje měsíční zimní tloušťku, volný bok a použité vlastnosti sněhu na mřížce 25 km od
              listopadu 2018 do dubna 2025. CryoSat-2 L4 v1 zveřejňuje třicetidenní odhady od září 2010 do současnosti
              pro období září až květen. Oba portály vyžadují bezplatný účet NASA Earthdata a poskytují proměnné
              nejistoty nebo jejich vstupní složky.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://doi.org/10.5067/TXDHDJ1JT0CG">ICESat-2 v4</ReferenceLink>{" "}·{" "}
              <ReferenceLink href="https://doi.org/10.5067/96JO0KIFDAS8">CryoSat-2 L4</ReferenceLink>{" "}·{" "}
              <ReferenceLink href="https://doi.org/10.5067/04YYIKXW0GJS">spojený produkt ICESat-2/CryoSat-2</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>Historické mapy a rekonstruované pokrytí</h3>
            <p>
              DMI zpřístupňuje letní mapy z let 1893–1956 včetně hlášených a odhadnutých okrajů. Databáze Walsh a kol.
              skládá měsíční mapy od roku 1850 z devíti historických zdrojů a po roce 1978 z družic. Jsou vhodné pro
              dlouhé historické otázky, ale jejich pokrytí a nejistota se v čase výrazně mění.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://doi.org/10.7265/N56D5QXC">DMI 1893–1956</ReferenceLink>{" "}·{" "}
              <ReferenceLink href="https://doi.org/10.7265/jj4s-tq79">Walsh v2</ReferenceLink>{" "}·{" "}
              <ReferenceLink href="https://doi.org/10.1111/j.1931-0846.2016.12195.x">popis databáze</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>PIOMAS: modelový odhad objemu</h3>
            <p>
              Denní a měsíční objem od roku 1979 a průměrná tloušťka v oblasti modelu. PIOMAS počítá pohyb a
              termodynamiku ledu a přijímá pozorovanou koncentraci a teplotu povrchu moře. Data jsou volně ke stažení
              jako text a CSV. Při použití musí být výsledek označen jako modelová reanalýza, nikoli jako přímé
              arktické měření tloušťky.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://psc.apl.uw.edu/research/projects/arctic-sea-ice-volume-anomaly/data/">
                Data PIOMAS
              </ReferenceLink>{" "}·{" "}
              <ReferenceLink href="https://doi.org/10.1029/2011JC007084">nejistota modelu</ReferenceLink>
            </p>
          </section>
        </div>

        <h2>Srovnání nezávislých výpočtů</h2>
        <p>
          Sea Ice Index NSIDC a evropský OSI SAF sledují stejný fyzický objekt a oba používají pasivní mikrovlnná
          měření, ale nejsou dvěma kopiemi jednoho výpočtu. Liší se převodem jasových teplot na koncentraci, filtry
          počasí, pobřežními maskami, rozlišením vstupů a zpracováním okraje. Rozdíl je nejviditelnější u absolutního
          rozsahu. V září 2025 uvádí NSIDC měsíční průměr 4,75 milionu km², zatímco OSI SAF 5,20 milionu km². U denního
          minima je to 4,60 milionu km² dne 10. září proti 5,07 milionu km² dne 7. září. Každé číslo je správně pouze se
          jménem svého produktu.{" "}
          <ReferenceLink href="https://arctic.noaa.gov/report-card/report-card-2025/sea-ice-2025/">
            NOAA Arctic Report Card 2025
          </ReferenceLink>{" "}
          a{" "}
          <ReferenceLink href="https://climate.copernicus.eu/sea-ice-cover-september-2025">
            Copernicus, září 2025
          </ReferenceLink>
        </p>

        <p>
          Stejnou opatrnost ukazuje březen 2026. NSIDC našel denní zimní maximum 14,29 milionu km² dne 15. března;
          OSI SAF 14,43 milionu km² dne 7. března. Oba poskytovatelé považují hodnotu za statisticky nerozlišitelnou od
          nízkého maxima roku 2025, ale pořadí dnů a přesná plocha se liší. Rozdíl je praktickou ukázkou toho, proč se
          hodnoty z různých produktů nemají spojovat do jedné křivky bez přepočtu celého období stejnou metodou.{" "}
          <ReferenceLink href="https://nsidc.org/ru/node/431729">NSIDC, maximum 2026</ReferenceLink> a{" "}
          <ReferenceLink href="https://climate.copernicus.eu/sea-ice-cover-march-2026">
            Copernicus, březen 2026
          </ReferenceLink>
        </p>

        <h2 id="pozorovani">Pozorování</h2>
        <h3>Rozsah během celého roku</h3>
        <p>
          Družicový záznam ukazuje menší arktický rozsah ve všech kalendářních měsících, přičemž změna je největší na
          konci léta. V produktu NSIDC se měsíční březnový rozsah v letech 1979–2025 měnil v průměru o −38 000 km² za
          rok a zářijový o −76 100 km² za rok. Jde o lineární sklon celého období, ne o tvrzení, že každý jednotlivý rok
          ztratil právě tuto plochu. Meziroční kolísání je zřetelné a velikost změny závisí na zvoleném počátečním a
          konečném roce. Čísla i přesné období uvádí tabulka 1 v{" "}
          <ReferenceLink href="https://doi.org/10.25923/mmxf-0r86">Arctic Report Card 2025</ReferenceLink>.
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
            <ReferenceLink href="https://climate.copernicus.eu/sea-ice-cover-march-2026">
              Copernicus, březen 2026
            </ReferenceLink>
            . Obsahuje informace Copernicus Climate Change Service 2026; Evropská komise ani ECMWF neodpovídají za
            jejich další použití.
          </figcaption>
        </figure>

        <p>
          Nejnovější dokončené letní minimum v době napsání článku patří roku 2025. Sea Ice Index NSIDC určil denní
          minimum 4,60 milionu km² na 10. září. V rámci nejistoty se dělilo o desáté nejnižší místo s roky 2008 a 2010;
          rekordem produktu zůstává 3,39 milionu km² ze 17. září 2012. Všech devatenáct denních minim od roku 2007 do
          roku 2025 bylo nižších než všechna minima z let 1979–2006. Pro samotný krátký úsek 2007–2025 však NSIDC
          nezjistil statisticky významný další sklon. Obě věty mohou platit současně: pozdější roky leží níže než starší
          část záznamu a uvnitř posledních devatenácti let je velké kolísání bez průkazného lineárního směru.{" "}
          <ReferenceLink href="https://nsidc.org/sea-ice-today/analyses/2025-arctic-sea-ice-minimum-squeezes-ten-lowest-minimums">
            NSIDC, minimum 2025
          </ReferenceLink>
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
            průměrem a na 13. místě od nejnižší hodnoty tohoto produktu; nejnižší zůstává září 2012 s odchylkou −32 %.
            Jde o měsíční hodnoty OSI SAF, a proto se čísla liší od předchozího denního minima NSIDC. Kredit:
            C3S/ECMWF/EUMETSAT. Zdroj:{" "}
            <ReferenceLink href="https://climate.copernicus.eu/sea-ice-cover-september-2025">
              Copernicus, září 2025
            </ReferenceLink>
            . Obsahuje informace Copernicus Climate Change Service 2025; Evropská komise ani ECMWF neodpovídají za
            jejich další použití.
          </figcaption>
        </figure>

        <p>
          Zimní část aktuálního roku je už známá, letní nikoli. Sea Ice Index NSIDC určil maximum 14,29 milionu km² dne
          15. března 2026. Od maxima roku 2025 se lišilo o 20 000 km², což je méně než přibližná nejistota 40 000 km²;
          NSIDC proto oba roky označuje jako shodně nejnižší maximum 48letého záznamu. Dne 31. července 2026 ještě
          arktická sezóna tání pokračuje. Číslo pro minimum 2026 ani jeho pořadí v tomto článku proto není uvedeno.
        </p>

        <h3>Stáří ledu</h3>
        <p>
          Mapa stáří ukazuje přesun od pokryvu s velkým podílem víceletého ledu k pokryvu, v němž převládá led mladší
          než jeden rok. V týdnu minima 2025 zůstával víceletý led převážně u severního pobřeží Grónska a Kanadského
          arktického souostroví. Jeho plocha byla o 47 % menší než v roce 2005. Led starší než čtyři roky zabíral 95 000
          km²; to je o 72 % méně než průměr let 2005–2024 a o 95 % méně než průměr 1,72 milionu km² z let 1985–2004.
          Údaj je výsledkem sledování pohybu a přežití ker, nikoli přímou mapou tloušťky.{" "}
          <ReferenceLink href="https://arctic.noaa.gov/report-card/report-card-2025/sea-ice-2025/">
            Meier et al., 2025
          </ReferenceLink>
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
            mladší než jeden rok; světlejší odstíny postupně 1–2, 2–3 a 3–4 roky; nejsvětlejší žlutá led starší než
            čtyři roky. Mapa zobrazuje nejstarší věkovou třídu v každé buňce. Zdroj: EASE-Grid Sea Ice Age v4 a
            Quicklook; Meier et al., Arctic Report Card 2025, obr. 4. Kredit: NOAA Arctic Program, NSIDC a autoři.{" "}
            <ReferenceLink href="https://doi.org/10.25923/mmxf-0r86">Původní zpráva</ReferenceLink>.
          </figcaption>
        </figure>

        <h3>Tloušťka a objem</h3>
        <p>
          Dlouhodobé údaje o tloušťce jsou řidší než mapy rozsahu, přesto se nezávislá měření v překryvných oblastech
          dají spojit. Kwok porovnal ponorkové sonary z let 1958–2000, ICESat z let 2003–2008 a CryoSat-2 z let
          2011–2018. V šesti oblastech, kde bylo možné napodobit historické vzorkování, klesla průměrná tloušťka blízko
          konce tání mezi obdobím ponorek 1958–1976 a obdobím CryoSat-2 2011–2018 o 2,0 m, tedy přibližně o 66 %. Toto
          číslo se vztahuje k šesti vybraným oblastem a sjednocenému datu 15. září; není to souvislé měření každého roku
          ani plošný průměr celé Arktidy.{" "}
          <ReferenceLink href="https://doi.org/10.1088/1748-9326/aae3ec">Kwok, 2018</ReferenceLink>
        </p>

        <p>
          Samostatná práce Kacimiho a Kwoka spojila laserový volný bok ICESat-2 s radarovým volným bokem CryoSat-2,
          aby současně odhadla sníh i tloušťku. Autoři zasadili tři zimy 2018–2021 do staršího družicového záznamu a pro
          období od začátku měření ICESat v roce 2003 vyčíslili úbytek zimního objemu přibližně o 6 000 km³, tedy asi
          třetinu. Zároveň ukázali, že velikost výsledku závisí na použité sněhové vrstvě. Jde proto o odhad složený z
          měření výšky a fyzikálního výpočtu, nikoli o přímé změření všech kry.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2021GL097448">Kacimi &amp; Kwok, 2022</ReferenceLink>
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            Rozsah arktického mořského ledu se od roku 1979 zmenšoval ve všech měsících a největší pokles nastal na
            konci léta. Březnový rozsah ubýval do roku 2025 přibližně o 38 000 km² ročně a zářijový o 76 100 km²
            ročně. Všech devatenáct letních minim od roku 2007 do roku 2025 bylo nižších než kterékoli minimum z let
            1979–2006. Proměnilo se také stáří ledu: plocha starší než čtyři roky byla v roce 2025 o 95 % menší než
            průměr let 1985–2004. V šesti dlouhodobě srovnávaných oblastech se tloušťka na konci tání zmenšila mezi
            obdobími 1958–1976 a 2011–2018 přibližně o dva metry, tedy o 66 %. Od roku 2003 se zimní objem snížil
            přibližně o 6 000 km³, zhruba o třetinu.
          </p>
        </div>

        <h2>Prameny a data</h2>
        <div className="article-source-groups">
          <section>
            <h3>Primární studie</h3>
            <ul>
              <li>
                <ReferenceLink href="https://doi.org/10.1029/JD089iD04p05355">Cavalieri et al., 1984</ReferenceLink>
                : první podrobný popis získání koncentrace z přístroje SMMR.
              </li>
              <li>
                <ReferenceLink href="https://doi.org/10.1029/1999JC900082">Parkinson et al., 1999</ReferenceLink>:
                rozsah, plocha a trendy v prvních 18 letech moderního družicového záznamu.
              </li>
              <li>
                <ReferenceLink href="https://doi.org/10.1109/LGRS.2004.824741">Fowler et al., 2004</ReferenceLink> a{" "}
                <ReferenceLink href="https://doi.org/10.1029/2011GL047735">Maslanik et al., 2011</ReferenceLink>:
                vývoj metody a první dlouhá vyhodnocení stáří ledu.
              </li>
              <li>
                <ReferenceLink href="https://doi.org/10.1029/2009GL039035">Kwok &amp; Rothrock, 2009</ReferenceLink> a{" "}
                <ReferenceLink href="https://doi.org/10.1088/1748-9326/aae3ec">Kwok, 2018</ReferenceLink>: sonarová a
                družicová měření tloušťky v letech 1958–2018.
              </li>
              <li>
                <ReferenceLink href="https://doi.org/10.1029/2021GL097448">Kacimi &amp; Kwok, 2022</ReferenceLink>:
                společný odhad sněhu, tloušťky a objemu z ICESat-2 a CryoSat-2.
              </li>
            </ul>
          </section>

          <section>
            <h3>Metodické práce</h3>
            <ul>
              <li>
                <ReferenceLink href="https://doi.org/10.5194/tc-13-49-2019">Lavergne et al., 2019</ReferenceLink>:
                evropský klimatický záznam koncentrace OSI SAF a ESA CCI.
              </li>
              <li>
                <ReferenceLink href="https://doi.org/10.5194/tc-14-1519-2020">Tschudi et al., 2020</ReferenceLink>:
                současná metoda pohybu a stáří ledu v NSIDC.
              </li>
              <li>
                <ReferenceLink href="https://doi.org/10.1088/1748-9326/aaf52c">Meier &amp; Stewart, 2019</ReferenceLink>,{" "}
                <ReferenceLink href="https://doi.org/10.5194/tc-18-2473-2024">Wernecke et al., 2024</ReferenceLink> a{" "}
                <ReferenceLink href="https://doi.org/10.5194/tc-20-3783-2026">Wernecke et al., 2026</ReferenceLink>:
                různé složky nejistoty rozsahu, plochy a jejich trendů.
              </li>
              <li>
                <ReferenceLink href="https://doi.org/10.1109/TGRS.2014.2310136">Ivanova et al., 2014</ReferenceLink>:
                srovnání jedenácti algoritmů koncentrace.
              </li>
              <li>
                <ReferenceLink href="https://doi.org/10.1029/2011JC007084">Schweiger et al., 2011</ReferenceLink>:
                nejistota modelového objemu PIOMAS.
              </li>
            </ul>
          </section>

          <section>
            <h3>Datové portály a stahování</h3>
            <ul>
              <li>
                <ReferenceLink href="https://doi.org/10.7265/a98x-0f50">Sea Ice Index v4</ReferenceLink>: denní a
                měsíční koncentrace, rozsah, plocha, mapy a hranice od roku 1978.
              </li>
              <li>
                <ReferenceLink href="https://doi.org/10.15770/EUM_SAF_OSI_0023">OSI-450-a1</ReferenceLink> a{" "}
                <ReferenceLink href="https://doi.org/10.15770/EUM_SAF_OSI_0014">OSI-430-a</ReferenceLink>: evropská
                koncentrace, nejistota buněk a průběžné pokračování.
              </li>
              <li>
                <ReferenceLink href="https://doi.org/10.5067/UTAV7490FEPB">EASE-Grid Sea Ice Age v4</ReferenceLink>:
                týdenní stáří od roku 1984.
              </li>
              <li>
                <ReferenceLink href="https://doi.org/10.5067/TXDHDJ1JT0CG">ICESat-2 v4</ReferenceLink> a{" "}
                <ReferenceLink href="https://doi.org/10.5067/96JO0KIFDAS8">CryoSat-2 L4</ReferenceLink>: zimní
                tloušťka, volný bok, sníh a nejistoty.
              </li>
              <li>
                <ReferenceLink href="https://doi.org/10.7265/N56D5QXC">DMI 1893–1956</ReferenceLink>,{" "}
                <ReferenceLink href="https://doi.org/10.7265/jj4s-tq79">Walsh v2</ReferenceLink> a{" "}
                <ReferenceLink href="https://psc.apl.uw.edu/research/projects/arctic-sea-ice-volume-anomaly/data/">
                  PIOMAS
                </ReferenceLink>
                : historické mapy, rekonstrukce a modelový objem.
              </li>
            </ul>
          </section>

          <section>
            <h3>Obrazy, grafy a podmínky použití</h3>
            <ul>
              <li>
                <ReferenceLink href="https://svs.gsfc.nasa.gov/5583/">NASA SVS: Arctic Sea Ice Minimum 2025</ReferenceLink>;
                kredit NASA Scientific Visualization Studio, JAXA a uvedení tvůrci. Podmínky:{" "}
                <ReferenceLink href="https://www.nasa.gov/nasa-brand-center/images-and-media/">
                  NASA Images and Media Guidelines
                </ReferenceLink>
                .
              </li>
              <li>
                <ReferenceLink href="https://doi.org/10.25923/mmxf-0r86">Arctic Report Card 2025</ReferenceLink>, obr.
                2 a 4; kredit NOAA Arctic Program, NSIDC a autoři.
              </li>
              <li>
                <ReferenceLink href="https://climate.copernicus.eu/sea-ice-cover-march-2026">Copernicus, březen 2026</ReferenceLink>{" "}
                a{" "}
                <ReferenceLink href="https://climate.copernicus.eu/sea-ice-cover-september-2025">
                  Copernicus, září 2025
                </ReferenceLink>
                ; kredit C3S/ECMWF/EUMETSAT. Licence dovoluje bezplatné převzetí s uvedením zdroje a prohlášením o
                odpovědnosti:{" "}
                <ReferenceLink href="https://cds.climate.copernicus.eu/licences/licence-to-use-copernicus-products">
                  Licence to use Copernicus Products
                </ReferenceLink>
                .
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
