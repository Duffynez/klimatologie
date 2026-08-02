import Image from "next/image";
import type { ReactNode } from "react";

function ReferenceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="article-reference" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function SnowPermafrostArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>Rozsah sněhu</dt>
            <dd>Plocha území, na níž je podle pravidel daného souboru přítomen sníh. Obvykle se uvádí v km².</dd>
          </div>
          <div>
            <dt>Vodní hodnota sněhu</dt>
            <dd>
              Výška vody, která by vznikla roztáním sněhu na daném místě. Značí se SWE; jeden milimetr odpovídá
              jednomu kilogramu vody na metr čtvereční.
            </dd>
          </div>
          <div>
            <dt>Permafrost</dt>
            <dd>Půda nebo hornina, jejíž teplota zůstává nejvýše 0 °C alespoň dva roky po sobě.</dd>
          </div>
          <div>
            <dt>Aktivní vrstva</dt>
            <dd>Vrchní vrstva půdy nad permafrostem, která během roku rozmrzá a znovu zamrzá.</dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Sněhová pokrývka a permafrost se často vyskytují na stejném území, ale popisují se jinými veličinami a měří
          jinými přístroji. Tento článek proto vede obě pozorování souběžně a jejich výsledky neslučuje do jednoho čísla.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Sníh na souši pozorujeme jako plochu, dobu trvání, výšku a množství vody uložené ve sněhové pokrývce.
          Permafrost pozorujeme jako teplotu půdy nebo horniny v určené hloubce a jako největší hloubku, do níž během
          roku rozmrzne aktivní vrstva. Výsledkem je několik samostatně označených údajů, u nichž musí být uvedeno
          místo, období, jednotka a způsob měření.
        </p>

        <p>
          Toto vymezení odpovídá způsobu, jakým jsou pozorování zveřejňována v hlavních odborných souborech. Rozsah
          sněhu nad severní polokoulí popisují <ReferenceLink href="https://doi.org/10.5194/essd-7-137-2015">Estilow,
          Young a Robinson, 2015</ReferenceLink>; vodní hodnotu a hmotnost sněhu{" "}
          <ReferenceLink href="https://doi.org/10.1038/s41597-021-00939-2">Luojus et al., 2021</ReferenceLink>.
          Teplotu permafrostu a hloubku aktivní vrstvy shromažďuje Global Terrestrial Network for Permafrost (GTN-P);
          její databázi popsali{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-7-245-2015">Biskaborn et al., 2015</ReferenceLink>.
          Globální změnu teploty vrtů vyhodnotili{" "}
          <ReferenceLink href="https://doi.org/10.1038/s41467-018-08240-4">Biskaborn et al., 2019</ReferenceLink> a
          opakované měření sezónního rozmrzání shrnuje program Circumpolar Active Layer Monitoring (CALM).{" "}
          <ReferenceLink href="https://doi.org/10.1080/1088937X.2021.1988001">Nelson, Shiklomanov a Nyland, 2021</ReferenceLink>
        </p>

        <h3>Sníh: plocha, trvání a množství vody</h3>
        <p>
          Rozsah sněhu udává, kolik území splnilo v daném dni, týdnu nebo měsíci podmínku „pokryto sněhem“. Družicová
          mapa je rozdělena na buňky a každá buňka dostane označení sníh, bez sněhu, případně podíl pokrytý sněhem.
          Rozsah vznikne součtem ploch označených buněk. Doba trvání se počítá z počtu dnů mezi objevením a zmizením
          sněhu nebo z celkového počtu dnů se sněhem. Výsledek tedy závisí i na prostorovém rozlišení, četnosti snímků
          a hranici, od které se buňka považuje za zasněženou.
        </p>

        <p>
          Výška sněhu říká, jak silná je vrstva od země k povrchu. Vodní hodnota navíc zahrnuje hustotu: dvacet
          centimetrů lehkého čerstvého sněhu může obsahovat méně vody než deset centimetrů starého zhutněného sněhu.
          V terénu se proto odebere svislý válec sněhu o známé ploše, změří se jeho délka a hmotnost a z nich se určí
          výška i vodní hodnota. Stejnou veličinu průběžně měří sněhové polštáře a ve velkých oblastech ji odhadují
          družicové mikrovlnné přístroje. Jednotnou definici SWE uvádí{" "}
          <ReferenceLink href="https://space.oscar.wmo.int/variables/view/snow_water_equivalent">Světová meteorologická organizace</ReferenceLink>.
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/snow-permafrost/usgs-snow-core-measurement.jpg"
            alt="Odběr svislého válce sněhu kovovou měřicí trubicí u ledovce Sperry v Montaně"
            width={1000}
            height={667}
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption>
            Měření sněhu u ledovce Sperry v americké Montaně. Kovová trubice vyřízne sloupec sněhu až k podkladu.
            Délka sloupce poskytne výšku sněhu, jeho zvážení množství vody. Jedno místo nereprezentuje celou krajinu;
            sněhový profil se proto opakuje na předem určených bodech trasy. Zdroj:{" "}
            <ReferenceLink href="https://www.usgs.gov/media/images/snow-core-measurement">USGS</ReferenceLink>, fotografie
            vlády USA, volné dílo.
          </figcaption>
        </figure>

        <h3>Permafrost: teplota a sezónní rozmrzání</h3>
        <p>
          Permafrost je vymezen teplotou, nikoli druhem povrchu. Může být ve zmrzlé rašelině, štěrku i pevné skále a
          může obsahovat mnoho ledu, málo ledu nebo žádný viditelný led. Ve vrtu se proto uvádí teplota v přesné
          hloubce. Pro porovnání více let se často volí hloubka, kde už je roční kolísání menší než přibližně 0,1 °C;
          Biskaborn et al. ji při globálním vyhodnocení označili jako hloubku nulové roční amplitudy. V mělkém vrtu se
          naopak sleduje celý průběh zamrzání a rozmrzání.
        </p>

        <p>
          Tloušťka aktivní vrstvy je největší svislá vzdálenost mezi povrchem a rozhraním, kam v daném roce proniklo
          tání. V zemině se obvykle zjišťuje na konci léta sondou zasouvanou až k tvrdé zmrzlé vrstvě. V kamenité půdě,
          kde sonda neprojde, se používají trubice naplněné kapalinou nebo teplotní čidla v několika hloubkách.
          Opakování na stejné síti bodů omezuje vliv náhodného výběru místa. Protokol sítě{" "}
          <ReferenceLink href="https://nsidc.org/data/ggd313/versions/1">CALM</ReferenceLink> používá podle lokality
          čtvercové sítě o straně přibližně 100 až 1 000 metrů nebo opakované transekty.
        </p>

        <h2>Historie pozorování</h2>
        <h3>Sníh</h3>
        <p>
          Pravidelné místní záznamy výšky sněhu vznikaly u meteorologických stanic, ale pro vodní zásobu bylo třeba
          měřit také hustotu. James E. Church zavedl roku 1909 na Mount Rose v Nevadě odběr celého sněhového sloupce
          přenosnou trubicí a váhou. Jeho postup se stal základem sněhoměrných tras, na nichž se během zimy opakovaně
          měří stejné body. Historii metody a její rozšíření v západních Spojených státech popisuje{" "}
          <ReferenceLink href="https://www.nrcs.usda.gov/sites/default/files/2023-01/History-of-Snow-Survey-and-Water-Supply-Forecasting.pdf">historie programu Snow Survey</ReferenceLink>
          americké služby NRCS.
        </p>

        <p>
          Souvislý obraz celé severní polokoule přinesly meteorologické družice. Americká NOAA začala v říjnu 1966
          vytvářet týdenní mapy sněhové pokrývky z viditelných snímků. Zpočátku se kreslily ručně na přibližně
          dvousetkilometrovou síť; přístroje, podkladové mapy i pracovní postup se v dalších desetiletích měnily. Soubor
          Rutgers Global Snow Lab zachoval původní mapy a spojil je s denním systémem Interactive Multisensor Snow and
          Ice Mapping System (IMS) používaným od roku 1997.
          Podrobný popis vzniku, kontrol a změn publikovali{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-7-137-2015">Estilow, Young a Robinson, 2015</ReferenceLink>.
        </p>

        <p>
          Množství vody ve sněhu začaly nad kontinenty soustavně mapovat pasivní mikrovlnné radiometry. Záznam
          GlobSnow využívá mikrovlnná měření družice Nimbus-7 od roku 1979 a měření navazujících družic. Družicový
          signál se v něm spojuje s výškou sněhu naměřenou stanicemi. Tím vznikají denní mapy SWE pro pevninu severně
          od 40° s výjimkou horských oblastí. Verzi 3 a celý výpočet popsali{" "}
          <ReferenceLink href="https://doi.org/10.1038/s41597-021-00939-2">Luojus et al., 2021</ReferenceLink>.
        </p>

        <h3>Permafrost</h3>
        <p>
          Teploty zmrzlé půdy se dlouho měřily v jednotlivých vrtech pro stavby, doly a místní výzkum. Příkladem jsou
          čtyři vrty v Utqiaġviku na Aljašce, v nichž USGS měřila teplotu v letech 1950–1961. Původní tabulky byly
          později digitalizovány a dnes jsou veřejně dostupné včetně popisu vrtů a dobových přístrojů.{" "}
          <ReferenceLink href="https://doi.org/10.5066/P9WRGCI3">USGS: Permafrost ground temperature 1950–1961</ReferenceLink>
        </p>

        <p>
          Mezinárodně srovnatelné sledování aktivní vrstvy začalo vznikat v roce 1991 jako program CALM. Jeho smyslem
          bylo měřit každoročně stejné body stejným postupem a uchovat i údaje o vegetaci, půdě a poloze. Druhou část
          systému tvoří vrty s teplotními čidly. Obě větve byly spojeny v síti Global Terrestrial Network for Permafrost,
          která spravuje údaje o teplotě permafrostu a tloušťce aktivní vrstvy. Vývoj sítě shrnují{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-7-245-2015">Biskaborn et al., 2015</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1080/1088937X.2021.1988001">Nelson, Shiklomanov a Nyland, 2021</ReferenceLink>.
        </p>

        <p>
          Mezinárodní polární rok 2007–2009 rozšířil počet vrtů a sjednotil část jejich odečtů. Právě roky 2007–2016
          proto umožnily první jednotné globální vyhodnocení změny teploty permafrostu ze 154 vrtů. Některé místní
          záznamy jsou mnohem delší: například soubor severoaljašských vrtů zahrnuje měření od roku 1973.{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-6-201-2014">Clow, 2014</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1038/s41467-018-08240-4">Biskaborn et al., 2019</ReferenceLink>
        </p>

        <h2>Jak vzniká zveřejněný záznam</h2>
        <h3>Mapa rozsahu sněhu</h3>
        <p>
          Viditelné a blízké infračervené snímky rozeznávají sníh podle toho, jak odráží různé vlnové délky světla.
          Novější systém IMS dává analytikovi vedle několika družic také mikrovlnná data, hlášení stanic a předchozí
          mapu. Analytik označí buňky se sněhem a ledem a výslednou mapu zkontroluje vůči sousedním dnům. Denní produkt
          je od roku 1997 dostupný v rozlišení přibližně 24 km, od roku 2004 také 4 km a později 1 km.{" "}
          <ReferenceLink href="https://doi.org/10.7265/N52R3PMC">NOAA/NCEI: IMS Daily Northern Hemisphere Snow and Ice Analysis</ReferenceLink>
        </p>

        <p>
          Mraky zakrývají povrch a polární noc omezuje viditelné snímky. Analytik proto používá více zdrojů a někdy
          přenese hranici sněhu z předchozího dne. Les, hory a roztříštěná jarní pokrývka mohou v jedné buňce skrýt
          malé zasněžené plochy. Pro výpočet dlouhodobého rozsahu se denní mapy převádějí na společnou síť a plocha
          každé zasněžené buňky se váží podle její skutečné velikosti na kulovém povrchu.
        </p>

        <h3>Vodní hodnota a hmotnost sněhu</h3>
        <p>
          Pasivní mikrovlnný radiometr měří přirozené záření povrchu na několika frekvencích. Sněhová zrna záření
          rozptylují a rozdíl mezi kanály souvisí s množstvím sněhu. V GlobSnow se pro každý den nejprve odhadne
          průměrná velikost zrn pomocí družicového signálu a okolních staničních měření výšky. Potom se vypočítá SWE v
          jednotlivých buňkách o rozměru 25 × 25 km. Denní mapy se mohou zprůměrovat na měsíce a součet SWE násobený
          plochou buněk dává hmotnost sněhu.{" "}
          <ReferenceLink href="https://doi.org/10.1038/s41597-021-00939-2">Luojus et al., 2021, popis algoritmu a ověření</ReferenceLink>
        </p>

        <p>
          Přesnost se ověřovala na měřeních sněhoměrných tras, která nebyla použita při výpočtu mapy. Pro roky
          1980–2016 vyšla celková střední kvadratická chyba 52,6 mm SWE; u hodnot pod 150 mm činila 32,7 mm. Hluboký
          sníh bývá podhodnocen, protože mikrovlnný signál postupně přestává růst. Hustý les mění záření a hory se
          kvůli prudkým rozdílům výšky a nedostatku stanic z produktu vynechávají. GlobSnow proto nepředstavuje
          veškerý sníh severní polokoule, ale přesně vymezenou pevninu severně od 40° bez horské masky.
        </p>

        <h3>Teplota ve vrtu</h3>
        <p>
          Do vrtu se spustí kabel s elektrickými teploměry v přesně změřených hloubkách. V některých vrtech zůstává
          kabel trvale a zapisovač ukládá hodnoty několikrát denně; jinde se přenosná sonda spouští při pravidelné
          návštěvě. Po vrtání je třeba počkat, než se teplota okolní horniny vrátí k původnímu stavu. Zveřejněný údaj
          musí uvádět hloubku čidla, datum, kalibraci a odhad nejistoty.
        </p>

        <p>
          Pro dlouhodobé porovnání se používá roční průměr v hloubce, kde je sezónní kolísání malé. Jednotlivé vrty
          mají odlišnou hloubku, a proto Biskaborn et al. vybírali u každého místa nejhlubší vhodné čidlo, zpravidla
          mezi 10 a 25 metry. Každoroční hodnoty porovnali pouze tam, kde byly mezery dostatečně krátké. Při výpočtu
          regionálních a globálních změn omezili převahu hustě sledovaných oblastí prostorovým vážením.{" "}
          <ReferenceLink href="https://doi.org/10.1038/s41467-018-08240-4">Biskaborn et al., 2019, metody</ReferenceLink>
        </p>

        <h3>Hloubka aktivní vrstvy</h3>
        <p>
          Mechanická sonda se na konci období tání zatlačí svisle do půdy, dokud nenarazí na zmrzlé rozhraní. Odečtená
          vzdálenost se zapíše v každém bodu sítě a z bodů se vypočítá průměr i rozpětí. Pokud tání pokračuje po dni
          návštěvy, jednorázové měření může roční maximum podhodnotit. Teplotní čidla nebo mrazové trubice naopak
          umožňují určit okamžik a hloubku maxima během celé sezóny, ale nemusí měřit přesně stejný objem půdy jako
          sonda.
        </p>

        <p>
          Místa se výrazně liší půdou, sněhem, vegetací, vodou i ledem v podloží. Změna průměru vybrané sítě vrtů nebo
          sond proto popisuje tato monitorovací místa, nikoli každý metr arktické pevniny. Síť CALM uchovává jednotlivé
          body i souhrnné hodnoty, aby bylo možné rozdíl mezi prostorovou proměnlivostí a změnou v čase znovu
          zkontrolovat. <ReferenceLink href="https://www.permafrost.org/data/circumpolar-active-layer-monitoring-network-calm/">International Permafrost Association: CALM</ReferenceLink>
        </p>

        <h2>Zveřejňovaná data</h2>
        <div className="article-data-list">
          <section className="article-data-item">
            <h3>NOAA Climate Data Record of Northern Hemisphere Snow Cover Extent</h3>
            <p>
              Týdenní mapy od 4. října 1966 a z nich odvozené měsíční hodnoty. Starší část vychází z ručně
              interpretovaných družicových map, novější z denních analýz IMS. Data, dokumentace i verze jsou veřejné.
            </p>
            <p>
              <ReferenceLink href="https://www.ncei.noaa.gov/products/climate-data-records/snow-cover-extent">Popis produktu</ReferenceLink>{" · "}
              <ReferenceLink href="https://doi.org/10.7289/V5N014G9">Data ke stažení a trvalý identifikátor</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>NOAA Interactive Multisensor Snow and Ice Mapping System</h3>
            <p>
              Denní mapy sněhu a ledu severní polokoule od února 1997. Produkt kombinuje družicové snímky, mikrovlnná
              měření, hlášení stanic a ruční kontrolu. K dispozici jsou mřížky o velikosti 24, 4 a 1 km podle období.
            </p>
            <p>
              <ReferenceLink href="https://nsidc.org/data/g02156/versions/1">Popis a metodika IMS</ReferenceLink>{" · "}
              <ReferenceLink href="https://doi.org/10.7265/N52R3PMC">Archiv NCEI a soubory ke stažení</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>GlobSnow v3</h3>
            <p>
              Denní a měsíční vodní hodnota sněhu pro roky 1979–2018 na nezaledněné pevnině severně od 40° mimo
              horské oblasti. Součástí jsou mapy nejistoty a opravené měsíční hodnoty.
            </p>
            <p>
              <ReferenceLink href="https://doi.org/10.1594/PANGAEA.911944">Data v úložišti PANGAEA</ReferenceLink>{" · "}
              <ReferenceLink href="https://github.com/fmidev/GlobSnow3.0">Zdrojový kód zpracování</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>ESA Snow Climate Change Initiative v3.1</h3>
            <p>
              Denní mapy vodní hodnoty sněhu od roku 1979 do roku 2022 vytvořené z pasivních mikrovlnných měření a
              staniční výšky sněhu. Jde o jeden ze čtyř podkladů použitých v hodnocení Arctic Report Card 2025.
            </p>
            <p>
              <ReferenceLink href="https://doi.org/10.5285/9d9bfc488ec54b1297eca2c9662f9c81">Data ke stažení z CEDA Archive</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>Global Terrestrial Network for Permafrost</h3>
            <p>
              Mezinárodní databáze teploty permafrostu a tloušťky aktivní vrstvy. Portál umožňuje vybrat stanici,
              zobrazit její metadata a stáhnout dostupná pozorování. Pokrytí a délka záznamu se mezi místy liší.
            </p>
            <p>
              <ReferenceLink href="https://data.gtn-p.org/">Datový portál GTN-P</ReferenceLink>{" · "}
              <ReferenceLink href="https://doi.org/10.1594/PANGAEA.884711">Vrty použité v globálním vyhodnocení 2007–2016</ReferenceLink>{" · "}
              <ReferenceLink href="https://doi.org/10.1594/PANGAEA.842821">Archiv metadat GTN-P</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>Circumpolar Active Layer Monitoring</h3>
            <p>
              Měření největší roční hloubky rozmrzání na opakovaných sítích a transektech od roku 1991. NSIDC
              zpřístupňuje tabulky lokalit, roční hodnoty i popis terénních metod.
            </p>
            <p>
              <ReferenceLink href="https://nsidc.org/data/ggd313/versions/1">Data CALM v NSIDC</ReferenceLink>{" · "}
              <ReferenceLink href="https://www.permafrost.org/data/circumpolar-active-layer-monitoring-network-calm/">Popis monitorovací sítě</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>ESA Permafrost Climate Change Initiative v5.0</h3>
            <p>
              Roční mapy modelované teploty půdy, tloušťky aktivní vrstvy a pravděpodobnosti permafrostu pro pevninu
              severně od 30° v letech 1997–2023, v rozlišení 1 km. Výpočet kombinuje družicovou teplotu povrchu,
              meteorologická data a model CryoGrid; nejde o náhradu jednotlivých vrtů.
            </p>
            <p>
              <ReferenceLink href="https://doi.org/10.5285/5675b0be944f45a8af0e7ddbeb47a011">Teplota půdy</ReferenceLink>{" · "}
              <ReferenceLink href="https://doi.org/10.5285/a6fbedd8ee5b472c8e84e55f746c1704">Aktivní vrstva</ReferenceLink>{" · "}
              <ReferenceLink href="https://doi.org/10.5285/d235665772ec4b558e9a89ac85595e71">Rozsah permafrostu</ReferenceLink>
            </p>
          </section>
        </div>

        <h2>Co lze mezi soubory porovnávat</h2>
        <p>
          Plocha sněhu a jeho hmotnost odpovídají na rozdílné otázky. Velká plocha s tenkým sněhem může obsahovat méně
          vody než menší plocha s hlubokým a hustým sněhem. V zimě může být téměř celé sledované území zasněžené a
          rozdíly se projeví hlavně v SWE. Na jaře se naopak rychle mění hranice sněhu a plocha je citlivá na okamžik
          tání. Graf rozsahu proto nelze přepočítat na hmotnost bez dalších měření.
        </p>

        <p>
          Dlouhý soubor NOAA/Rutgers zachovává historické mapy vytvořené různými družicemi a postupy. To je jeho
          přednost i omezení. Elias Chereque et al. v roce 2025 zjistili, že rostoucí citlivost rozpoznávání sněhu
          vytvořila umělé přírůstky v období nástupu sněhu, zejména od září do listopadu. Po opravě se pokles objevil
          ve všech měsících kromě ledna. Jarní květnové a červnové změny zobrazené níže neleží v hlavním období tohoto
          problému, ale každé použití podzimních hodnot musí změnu detekce uvést.{" "}
          <ReferenceLink href="https://doi.org/10.1126/sciadv.adv7926">Elias Chereque et al., 2025</ReferenceLink>
        </p>

        <p>
          Také permafrost má dvě odlišné úrovně výsledků. Vrty a sondy jsou přímá místní pozorování. Souvislá mapa ESA
          Permafrost CCI dopočítává prostor mezi nimi fyzikálním modelem a družicovými údaji o povrchu. Mapa umožňuje
          jednotné plošné srovnání, zatímco vrt zachovává skutečně naměřenou teplotu v hloubce. Článek proto označuje
          modelované mapy a přímá pozorování zvlášť.
        </p>

        <p>
          Vrty nejsou rozmístěny rovnoměrně. V databázi z roku 2015 bylo 73 % vrtů mělčích než 25 metrů a velké části
          Sibiře, vysokých hor i Antarktidy měly řídké pokrytí. Některé vrty navíc začínají pozdě nebo mají mezery.
          Globální průměr Biskaborna et al. proto používá prostorové vážení a uvádí nejistotu. Novější regionální
          měření, například z Aljašky do roku 2024, lze přidat jako aktuální stav regionu, nikoli jako prodloužení
          stejného globálního průměru za rok 2016.{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-7-245-2015">Biskaborn et al., 2015</ReferenceLink>
        </p>

        <h2 id="pozorovani">Pozorování</h2>
        <h3>Jarní rozsah sněhu v Arktidě</h3>
        <p>
          NOAA Arctic Report Card vyhodnocuje zasněženou pevninu severně od 60° severní šířky bez Grónska. Od roku
          1967 do roku 2025 klesl květnový rozsah o 15 %, což odpovídá trendu −2,5 % za desetiletí. Červnový rozsah
          klesl za stejné období o 50 %, tedy −8,7 % za desetiletí. Graf pod textem nezobrazuje tato procenta přímo:
          každý měsíc převádí na standardizovanou odchylku vůči období 1991–2020.{" "}
          <ReferenceLink href="https://arctic.noaa.gov/report-card/report-card-2025/terrestrial-snow-cover-2025/">NOAA Arctic Report Card 2025</ReferenceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Posouvatelný graf jarního rozsahu sněhu">
            <Image
              className="article-figure__media"
              src="/media/snow-permafrost/noaa-arctic-snow-extent-1967-2025.png"
              alt="Květnové a červnové odchylky rozsahu sněhu v severoamerické a euroasijské Arktidě v letech 1967 až 2025"
              width={1600}
              height={759}
              sizes="(max-width: 900px) 1200px, 1000px"
              unoptimized
            />
          </div>
          <figcaption>
            Standardizované odchylky rozsahu sněhu v květnu (a) a červnu (b) v letech 1967–2025. Nula je průměr let
            1991–2020 a svislá osa udává odchylku v násobcích směrodatné odchylky, nikoli v km². Černá patří
            severoamerické a červená euroasijské části Arktidy; kolečka jsou jednotlivé roky, silné čáry pětileté
            klouzavé průměry a plný bod rok 2025. Zdroj:{" "}
            <ReferenceLink href="https://arctic.noaa.gov/report-card/report-card-2025/terrestrial-snow-cover-2025/">Mudryk et al., NOAA Arctic Report Card 2025, obr. 1</ReferenceLink>;
            dílo vlády USA, volné dílo.
          </figcaption>
        </figure>

        <p>
          Doba tání se v téže zprávě porovnává z týdenních map. V letech 2010–2024 začínalo květnové a červnové tání
          v severoamerické i euroasijské části Arktidy přibližně o jeden až dva týdny dříve než v letech 1967–1981.
          Jde o rozdíl mezi dvěma určenými obdobími, nikoli o údaj, že se každý rok přidává stejný počet dnů.{" "}
          <ReferenceLink href="https://doi.org/10.25923/cfhv-c239">Mudryk et al., 2025, obr. 2</ReferenceLink>
        </p>

        <h3>Hmotnost sněhu během jara</h3>
        <p>
          Čtyři nezávislé podklady použité v Arctic Report Card ukazují, že roční maximum sněhové hmotnosti v zimě
          2024/2025 bylo nad průměrem 1991–2020. Do června však plocha i hmotnost klesly pod průměr. Za období
          1981–2025 vychází dubnová změna přibližně −3 % a není statisticky významná; květnová činí −13 % a červnová
          −33 %. Jeden zasněžený rok proto může mít vysoké zimní maximum a současně rychlé jarní ubývání.
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Posouvatelný graf dubnové hmotnosti sněhu">
            <Image
              className="article-figure__media"
              src="/media/snow-permafrost/noaa-arctic-snow-mass-1981-2025.png"
              alt="Dubnové odchylky hmotnosti sněhu v severoamerické a euroasijské Arktidě v letech 1981 až 2025"
              width={1500}
              height={1500}
              sizes="(max-width: 900px) 1100px, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Dubnová hmotnost sněhu v severoamerické (a) a euroasijské (b) Arktidě v letech 1981–2025. Svislá osa je
            standardizovaná odchylka od průměru 1991–2020. Černá a červená kolečka jsou roční hodnoty, silné čáry
            pětileté průměry a barevné pásmo rozpětí čtyř použitých produktů. Plný bod označuje rok 2025. Graf ukazuje
            duben; květnová a červnová procenta v textu pocházejí z odděleného měsíčního vyhodnocení stejné zprávy.
            Zdroj: <ReferenceLink href="https://arctic.noaa.gov/report-card/report-card-2025/terrestrial-snow-cover-2025/">Mudryk et al., NOAA Arctic Report Card 2025, obr. 4</ReferenceLink>;
            dílo vlády USA, volné dílo.
          </figcaption>
        </figure>

        <p>
          GlobSnow poskytuje samostatný fyzikální rozměr výsledku. Na pevnině severně od 40° mimo hory dosahovala v
          letech 1980–2018 průměrná roční nejvyšší hmotnost sněhu 3 062 ± 35 Gt. Na Severní Ameriku připadalo
          1 128 ± 31 Gt a na Eurasii 1 934 ± 35 Gt. V březnu klesala severoamerická hmotnost tempem −46 ± 42 Gt za
          desetiletí, zatímco euroasijská změna byla vzhledem k nejistotě zanedbatelná. Čísla nezahrnují horskou masku
          a nemají se přičítat k údajům Arctic Report Card bez sjednocení území a období.{" "}
          <ReferenceLink href="https://doi.org/10.1038/s41597-021-00939-2">Luojus et al., 2021</ReferenceLink>
        </p>

        <h3>Teplota permafrostu ve vrtech</h3>
        <p>
          Globální soubor Biskaborna et al. zahrnul 154 vrtů; u 123 z nich bylo možné vypočítat změnu za celé období
          2007–2016. Prostorově vážený průměr se za deset let zvýšil o 0,29 ± 0,12 °C. V souvislém arktickém permafrostu
          činila změna 0,39 ± 0,15 °C, v nesouvislém arktickém permafrostu 0,20 ± 0,10 °C a v horském permafrostu
          0,19 ± 0,05 °C. Antarktický odhad 0,37 ± 0,10 °C autoři kvůli malému počtu a rozložení vrtů nevyhodnotili jako
          statisticky průkazný.
        </p>

        <p>
          Ze 123 vrtů s úplným desetiletým výsledkem se 71 oteplilo, 12 ochladilo a 40 zůstalo v pásmu změny přibližně
          ±0,1 °C. Pět míst během období překročilo v použité hloubce 0 °C. Tato rozmanitost je podstatná: globální
          průměr popisuje společný posun sítě, ale jednotlivé vrty mohou mít jiný průběh.{" "}
          <ReferenceLink href="https://doi.org/10.1038/s41467-018-08240-4">Biskaborn et al., 2019</ReferenceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Posouvatelná globální mapa teploty permafrostu">
            <Image
              className="article-figure__media"
              src="/media/snow-permafrost/biskaborn-global-permafrost-2007-2016.png"
              alt="Globální mapy teploty permafrostu a její změny ve vrtech mezi lety 2007 a 2016"
              width={2002}
              height={1382}
              sizes="(max-width: 900px) 1300px, 1000px"
              unoptimized
            />
          </div>
          <figcaption>
            Měření sítě GTN-P. Mapy (a) a (b) ukazují průměrnou roční teplotu půdy v letech 2014–2016 na severní
            polokouli a v Antarktidě; barvu hodnoty udává čtverec u každého vrtu. Mapy (c) a (d) ukazují změnu za
            desetiletí 2007–2016; barvu změny udává kolečko. Modré pozadí vyznačuje souvislý a fialové nesouvislý
            permafrost, nikoli teplotu naměřenou ve vrtu. Zdroj:{" "}
            <ReferenceLink href="https://doi.org/10.1038/s41467-018-08240-4">Biskaborn et al., 2019, obr. 2</ReferenceLink>,
            licence <ReferenceLink href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</ReferenceLink>.
          </figcaption>
        </figure>

        <h3>Novější regionální měření a aktivní vrstva</h3>
        <p>
          Aljašské vrty pokračují za konec globálního vyhodnocení. V roce 2024 zaznamenalo 9 z 20 dlouhodobě
          sledovaných míst nejvyšší teplotu za celou dobu svého měření. Ve studeném permafrostu severní Aljašky se teplota v
          posledních čtyřech desetiletích zvyšovala o 0,3 až 0,7 °C za desetiletí; v teplejším permafrostu vnitrozemí o
          0,02 až 0,3 °C za desetiletí. Jde o regionální měření v hloubce 20 metrů na severu a 15 metrů ve vnitrozemí,
          nikoli o novou globální hodnotu.{" "}
          <ReferenceLink href="https://arctic.noaa.gov/report-card/report-card-2024/arctic-terrestrial-carbon-cycling/">NOAA Arctic Report Card 2024</ReferenceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Posouvatelná mapa a graf aljašských vrtů">
            <Image
              className="article-figure__media"
              src="/media/snow-permafrost/noaa-alaska-permafrost-2024.jpg"
              alt="Mapa aljašských vrtů a grafy teplot permafrostu v severní Aljašce a vnitrozemí do roku 2024"
              width={1600}
              height={2249}
              sizes="(max-width: 900px) 1100px, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Nahoře jsou polohy dlouhodobých vrtů na Aljašce. Prostřední graf ukazuje průměrnou roční teplotu v hloubce
            20 m na North Slope, dolní graf v hloubce 15 m ve vnitrozemí; každá barva patří jednomu vrtu. Vodorovná osa
            zachycuje roky přibližně 1978–2024 a svislá teplotu ve °C. Zápornější hodnota znamená chladnější půdu. Různý
            začátek křivek ukazuje, že vrty nemají shodně dlouhý záznam. Zdroj:{" "}
            <ReferenceLink href="https://arctic.noaa.gov/report-card/report-card-2024/arctic-terrestrial-carbon-cycling/">NOAA Arctic Report Card 2024</ReferenceLink>;
            dílo vlády USA, volné dílo.
          </figcaption>
        </figure>

        <p>
          Aktivní vrstva se mění prostorově ještě výrazněji než hluboká teplota. Vyhodnocení dostupných míst CALM za
          roky 2000–2018 zjistilo pro cirkumpolární síť průměrné prohlubování ročního rozmrzání o 0,8 cm za rok. Pro
          severská místa zahrnutá do stejného rozboru vyšel průměr 0,5 cm za rok. Jde o lineární změny průměru
          vybraných monitorovacích míst; jednotlivé lokality mohou vykazovat menší, větší i opačnou změnu a výsledek
          není univerzální přírůstek hloubky na celé Arktidě.{" "}
          <ReferenceLink href="https://doi.org/10.1002/ppp.2088">Strand et al., 2021</ReferenceLink>
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            Na arktické pevnině severně od 60° bez Grónska se mezi roky 1967 a 2025 zmenšil květnový rozsah sněhu o
            15 % a červnový o 50 %. Mezi roky 1981 a 2025 klesla květnová hmotnost sněhu o 13 % a červnová o 33 %.
            Průměrná teplota permafrostu se v letech 2007–2016 zvýšila o 0,29 °C a aktivní vrstva se v letech
            2000–2018 prohlubovala v průměru o 0,8 centimetru za rok.
          </p>
        </div>

        <h2>Prameny a data</h2>
        <div className="article-source-groups">
          <section>
            <h3>Sněhová pokrývka</h3>
            <ul>
              <li><ReferenceLink href="https://doi.org/10.5194/essd-7-137-2015">Estilow et al., 2015: A long-term Northern Hemisphere snow cover extent data record</ReferenceLink></li>
              <li><ReferenceLink href="https://doi.org/10.1038/s41597-021-00939-2">Luojus et al., 2021: GlobSnow v3.0 Northern Hemisphere snow water equivalent dataset</ReferenceLink></li>
              <li><ReferenceLink href="https://doi.org/10.5194/tc-5-219-2011">Brown a Robinson, 2011: Northern Hemisphere spring snow cover variability and change</ReferenceLink></li>
              <li><ReferenceLink href="https://doi.org/10.5194/tc-14-2495-2020">Mudryk et al., 2020: Historical Northern Hemisphere snow cover trends and projected changes</ReferenceLink></li>
              <li><ReferenceLink href="https://doi.org/10.1038/s41586-020-2258-0">Pulliainen et al., 2020: Patterns and trends of Northern Hemisphere snow mass</ReferenceLink></li>
              <li><ReferenceLink href="https://doi.org/10.1126/sciadv.adv7926">Elias Chereque et al., 2025: Artifacts in the NOAA snow-cover climate record</ReferenceLink></li>
              <li><ReferenceLink href="https://doi.org/10.25923/cfhv-c239">Mudryk et al., 2025: Terrestrial Snow Cover, NOAA Arctic Report Card</ReferenceLink></li>
            </ul>
          </section>

          <section>
            <h3>Permafrost</h3>
            <ul>
              <li><ReferenceLink href="https://doi.org/10.5194/essd-7-245-2015">Biskaborn et al., 2015: The new database of the Global Terrestrial Network for Permafrost</ReferenceLink></li>
              <li><ReferenceLink href="https://doi.org/10.1038/s41467-018-08240-4">Biskaborn et al., 2019: Permafrost is warming at a global scale</ReferenceLink></li>
              <li><ReferenceLink href="https://doi.org/10.1080/1088937X.2021.1988001">Nelson et al., 2021: The Circumpolar Active Layer Monitoring Network</ReferenceLink></li>
              <li><ReferenceLink href="https://doi.org/10.1002/ppp.2088">Strand et al., 2021: Active-layer monitoring in the Nordic Arctic</ReferenceLink></li>
              <li><ReferenceLink href="https://doi.org/10.5194/essd-6-201-2014">Clow, 2014: Temperature data from deep boreholes in arctic Alaska</ReferenceLink></li>
              <li><ReferenceLink href="https://doi.org/10.1175/BAMS-D-25-0104.1">State of the Climate in 2024: permafrost temperature and active-layer thickness</ReferenceLink></li>
              <li><ReferenceLink href="https://arctic.noaa.gov/report-card/report-card-2024/arctic-terrestrial-carbon-cycling/">NOAA Arctic Report Card 2024: permafrost observations in Alaska</ReferenceLink></li>
            </ul>
          </section>

          <section>
            <h3>Datové portály</h3>
            <ul>
              <li><ReferenceLink href="https://doi.org/10.7289/V5N014G9">NOAA/Rutgers Snow Cover Extent CDR</ReferenceLink></li>
              <li><ReferenceLink href="https://doi.org/10.1594/PANGAEA.911944">GlobSnow v3 SWE</ReferenceLink></li>
              <li><ReferenceLink href="https://doi.org/10.5285/9d9bfc488ec54b1297eca2c9662f9c81">ESA Snow CCI v3.1 SWE</ReferenceLink></li>
              <li><ReferenceLink href="https://data.gtn-p.org/">GTN-P: teplota permafrostu a aktivní vrstva</ReferenceLink></li>
              <li><ReferenceLink href="https://doi.org/10.1594/PANGAEA.884711">GTN-P: globální vrtná data 2007–2016</ReferenceLink></li>
              <li><ReferenceLink href="https://nsidc.org/data/ggd313/versions/1">CALM: Circumpolar Active Layer Monitoring</ReferenceLink></li>
              <li><ReferenceLink href="https://climate.esa.int/en/projects/permafrost/">ESA Permafrost CCI</ReferenceLink></li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
