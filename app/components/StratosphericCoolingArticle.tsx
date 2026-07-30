import Image from "next/image";
import type { ReactNode } from "react";

function ReferenceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="article-reference" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function StratosphericCoolingArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>Tlaková hladina</dt>
            <dd>
              Plocha v atmosféře se stejným tlakem, například 50 hPa. Zkratka hPa znamená hektopascal; výška
              hladiny se mění podle místa a času.
            </dd>
          </div>
          <div>
            <dt>Radiosonda</dt>
            <dd>
              Přístroj nesený balónem. Během výstupu měří teplotu, tlak a vlhkost a vysílá údaje na zem.
            </dd>
          </div>
          <div>
            <dt>Vrstvová teplota</dt>
            <dd>
              Průměrná teplota široké části atmosféry odvozená z družicového měření záření.
            </dd>
          </div>
          <div>
            <dt>Váhová funkce</dt>
            <dd>
              Křivka ukazující, jak silně jednotlivé výšky přispívají k jedné družicové hodnotě.
            </dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Změna o jeden kelvin má stejnou velikost jako změna o jeden stupeň Celsia. Zápis −0,5 K za desetiletí
          tedy znamená pokles o 0,5 °C za desetiletí.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Teplotou stratosféry označujeme teplotu vzduchu mezi tropopauzou a stratopauzou, přibližně od 10 do
          50 kilometrů nad zemským povrchem. Zjišťuje se balóny a družicemi v několika výškách nebo jako průměr
          přes širší vrstvu. Výsledná hodnota vždy patří k určené části stratosféry, místu a době.
        </p>

        <p>
          Stratosféra nezačíná všude ve stejné výšce. Tropopauza leží v průměru přibližně 6 kilometrů nad póly,
          kolem 9–12 kilometrů ve středních zeměpisných šířkách a až 18–20 kilometrů nad tropy. Horní hranice,
          stratopauza, leží přibližně ve výšce 50 kilometrů. Proto může hladina 100 hPa představovat dolní
          stratosféru v jedné oblasti a blízkost tropopauzy v jiné.{" "}
          <ReferenceLink href="https://prod-01-alb-www-noaa.woc.noaa.gov/jetstream/atmosphere/layers-of-atmosphere">
            NOAA: vrstvy atmosféry
          </ReferenceLink>
        </p>

        <figure className="article-figure article-figure--portrait">
          <Image
            className="article-figure__media"
            src="/media/stratosphere/noaa-atmosphere-temperature-profile.png"
            alt="Profil průměrné teploty atmosféry od zemského povrchu do výšky sto dvaceti kilometrů s vyznačenou stratosférou mezi tropopauzou a stratopauzou."
            width={670}
            height={832}
            unoptimized
          />
          <figcaption>
            Přibližný svislý profil teploty v dolních vrstvách atmosféry. Stratosféra začíná nad proměnlivou
            tropopauzou a končí u stratopauzy kolem 50 km. Graf znázorňuje typický profil, nikoli měření jednoho
            dne nebo místa. Nezměněný materiál NOAA, veřejná doména.{" "}
            <ReferenceLink href="https://prod-01-alb-www-noaa.woc.noaa.gov/jetstream/atmosphere/layers-of-atmosphere">
              Původní obrázek a popis
            </ReferenceLink>
          </figcaption>
        </figure>

        <p>
          Svislá osa obrázku také vysvětluje, proč se teplota stratosféry nevyjadřuje jedním teploměrem ani
          jediným číslem pro celou vrstvu. V dolní stratosféře bývá vzduch chladnější než ve vyšších částech a
          jeho teplota se během roku i mezi zeměpisnými oblastmi mění. Úplný údaj proto obsahuje výšku nebo
          tlakovou hladinu, zeměpisné pokrytí, časový průměr, jednotku a u odchylky také referenční období.
        </p>

        <p>
          Toto vymezení používají práce založené na různých měřicích systémech. Free a kol. a Thorne a kol.
          sestavili teplotní záznamy na standardních tlakových hladinách z radiosond. Mears a Wentz popsali
          družicovou teplotu dolní stratosféry jako průměr široké vrstvy. Zou a Qian stejným způsobem spojili
          měření střední a horní stratosféry a Steiner a kol. později porovnali balóny, několik družicových
          přístrojů, lidary a rádiová zákrytová měření. Každá práce uvádí, kterou výšku nebo vrstvu její výsledek
          skutečně zastupuje.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2005JD006169">Free et al., 2005</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1029/2004JD005753">Thorne et al., 2005</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1175/2008JTECHA1176.1">
            Mears &amp; Wentz, 2009
          </ReferenceLink>
          , <ReferenceLink href="https://doi.org/10.1175/JTECH-D-16-0018.1">Zou &amp; Qian, 2016</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI-D-19-0998.1">Steiner et al., 2020</ReferenceLink>
        </p>

        <h2>Historie měření</h2>
        <p>
          První přímé teplotní profily vysoké atmosféry vznikly pomocí registračních přístrojů zavěšených pod
          bezpilotními balóny. Už v roce 1893 některé výstupy ukázaly, že teplota nad určitou výškou přestává
          klesat. Výsledek byl zpočátku považován za ohřev přístroje slunečním zářením. Léon Teisserenc de Bort
          proto shromáždil stovky dalších výstupů, mnoho z nich v noci.
        </p>

        <p>
          Teisserenc de Bort oznámil 28. dubna 1902 Francouzské akademii věd existenci horní téměř izotermické
          oblasti. Richard Assmann zveřejnil o několik dní později obdobný výsledek z německých měření. Dobová
          zpráva uvádí 540 balónových výstupů z Trappes, z nichž 268 překročilo 11 kilometrů. Pozorovaná změna
          svislého průběhu teploty se stala základem rozdělení atmosféry na troposféru a stratosféru.{" "}
          <ReferenceLink href="https://journals.ametsoc.org/view/journals/mwre/30/7/1520-0493-30_7_356.xml">
            Monthly Weather Review, 1902
          </ReferenceLink>
          , <ReferenceLink href="https://doi.org/10.4267/2042/36222">Rochas, 2002</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1175/AMSMONOGRAPHS-D-19-0003.1">
            Baldwin et al., 2019
          </ReferenceLink>
        </p>

        <p>
          Starší registrační balón po přistání teprve vydal papírový nebo fotografický záznam. Robert Bureau ve
          Francii v roce 1929 vypustil přístroj, který teplotu během letu vysílal rádiem, a zavedl označení
          radiosonda. Ve třicátých letech vznikly praktické konstrukce v Sovětském svazu, Finsku, Německu a
          Spojených státech. Pravidelné provozní sítě se rozšířily před druhou světovou válkou a během ní.{" "}
          <ReferenceLink href="https://www.nist.gov/nist-museum/tuning-weather-forecasting">
            NIST: vývoj radiosond
          </ReferenceLink>{" "}
          a <ReferenceLink href="https://www.weather.gov/upperair/factsheet">NOAA/NWS: historie měření</ReferenceLink>
        </p>

        <figure className="article-figure article-figure--portrait">
          <Image
            className="article-figure__media"
            src="/media/stratosphere/noaa-radiosonde-balloon-1944.jpg"
            alt="Příprava meteorologického balónu s radiosondou ve Spojených státech v roce 1944."
            width={341}
            height={309}
            unoptimized
          />
          <figcaption>
            Příprava meteorologického balónu s radiosondou v roce 1944. Fotografie: U.S. Army Air Forces /
            NOAA Photo Library, nezměněný materiál veřejné domény.{" "}
            <ReferenceLink href="https://www.ncei.noaa.gov/products/weather-balloon/radiosonde-atmospheric-temperature-products">
              NOAA: radiosondová teplotní data
            </ReferenceLink>
          </figcaption>
        </figure>

        <p>
          Z jednotlivých provozních letů vznikl dlouhý klimatický záznam až po výběru stanic a opravě změn
          přístrojů. Soubor Radiosonde Atmospheric Temperature Products for Assessing Climate, zkráceně RATPAC,
          začíná rokem 1958, kdy už síť dovoluje počítat velkoplošné průměry. Jeho autoři zvolili 85 pevninských
          stanic a 13 tlakových hladin. Rok 1958 proto neoznačuje první radiosondu, ale začátek konkrétního
          pravidelně zpracovávaného globálního produktu.{" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI3198.1">Free et al., 2004</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1029/2005JD006169">Free et al., 2005</ReferenceLink>
        </p>

        <p>
          Družice TIROS-N, vypuštěná 13. října 1978, nesla mikrovlnný přístroj Microwave Sounding Unit (MSU) pro
          dolní stratosféru a infračervený Stratospheric Sounding Unit (SSU) pro střední a horní stratosféru.
          Následující družice NOAA vytvářely překrývající se měření až do roku 2005. Advanced Microwave Sounding
          Unit-A (AMSU-A) od roku 1998, Microwave Limb Sounder (MLS) od roku 2004 a později Advanced Technology
          Microwave Sounder (ATMS) umožnily pokračovat i po skončení původních MSU a SSU. Souvislé globální
          družicové záznamy proto začínají na konci roku 1978.{" "}
          <ReferenceLink href="https://www.cpc.ncep.noaa.gov/products/stratosphere/strat_a_f/NOAA-N.pdf">
            NASA/NOAA: přehled družic
          </ReferenceLink>{" "}
          a{" "}
          <ReferenceLink href="https://climatedataguide.ucar.edu/climate-data/stratospheric-temperature-satellite-datasets-used-quantify-lower-middle-and-upper">
            NCAR Climate Data Guide
          </ReferenceLink>
        </p>

        <p>
          Třetí způsob přibyl na začátku 21. století. Družice CHAMP začala v roce 2001 sledovat, jak se rádiový
          signál navigačních družic ohýbá při průchodu atmosférou. Z těchto zákrytových měření lze odvodit svislé
          profily teploty. Jejich globální klimatické zpracování začíná v roce 2002 a poskytuje další měření
          založené na odlišném fyzikálním principu.{" "}
          <ReferenceLink href="https://doi.org/10.1016/S0273-1177(03)00591-X">Wickert et al., 2004</ReferenceLink>{" "}
          a{" "}
          <ReferenceLink href="https://www.cosmic.ucar.edu/RO_Climate_Data_Record">
            klimatický soubor centra CDAAC
          </ReferenceLink>
        </p>

        <h2>Co se skutečně měří</h2>
        <h3>Radiosonda: teplota během jednoho výstupu</h3>
        <p>
          Současná radiosonda je malá jednorázová měřicí souprava zavěšená pod balónem naplněným heliem nebo
          vodíkem. Teplotní čidlo je vystavené proudícímu vzduchu, tlakové čidlo určuje tlakovou hladinu a poloha
          se sleduje pomocí družicové navigace. Přístroj vysílá hodnoty každou sekundu přijímači na zemi.
          Typický výstup trvá déle než dvě hodiny a může překročit 35 kilometrů.{" "}
          <ReferenceLink href="https://www.weather.gov/upperair/factsheet">NOAA/NWS: radiosondové pozorování</ReferenceLink>
        </p>

        <p>
          Jediný let vytvoří svislý profil podél dráhy balónu. Balón při výstupu zároveň unáší vítr, takže
          nejvyšší část profilu může ležet stovky kilometrů od místa vypuštění. Pro mezinárodní výměnu se z
          podrobného profilu ukládají také hodnoty na standardních tlakových hladinách, například 100, 70, 50 a
          30 hPa. Celosvětová síť má přibližně tisíc stanic a běžně dosahuje 30 kilometrů nebo výše. Horní
          stratosféru kolem 45–50 kilometrů tato provozní síť pokrývá jen omezeně.{" "}
          <ReferenceLink href="https://wmo.int/activities/global-observing-system-gos/global-observing-system-gos">
            WMO Global Observing System
          </ReferenceLink>
        </p>

        <p>
          Sluneční záření může čidlo během dne ohřát a v řídkém vzduchu se jeho vliv zvětšuje. Výrobci a
          meteorologické služby proto používají stínění, malé rychle reagující snímače a korekce závislé na typu
          přístroje, výšce a osvětlení. Přesný postup se mezi generacemi radiosond měnil. Klimatické zpracování
          musí znát datum těchto změn, protože výměna čidla může v místním záznamu vytvořit skok.{" "}
          <ReferenceLink href="https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/instruments-and-methods-of-observation-programme-imop/guide-instruments-and-methods-of-observation-wmo-no-8">
            WMO Guide to Instruments and Methods of Observation
          </ReferenceLink>
        </p>

        <h3>Družice: teplota široké vrstvy</h3>
        <p>
          Mikrovlnné sondéry MSU, AMSU-A a ATMS měří záření molekulárního kyslíku v pásmu kolem 60 gigahertzů.
          Kyslík je v atmosféře dobře promíchaný a intenzita záření nese informaci o teplotě vzduchu. Přístroj
          nejprve zaznamená elektrický signál, který se kalibrací převede na jasovou teplotu. Ta vyjadřuje
          teplotu, jež by při stejné intenzitě vyzařovala ideální černá plocha.
        </p>

        <p>
          Jeden kanál zachytí záření z mnoha výšek současně. Jeho váhová funkce ukazuje, odkud přichází největší
          část signálu. Kanál označovaný TLS, z anglického <em>temperature lower stratosphere</em>, je
          nejcitlivější přibližně v 17 kilometrech a zastupuje dolní stratosféru zhruba mezi 13 a 22 kilometry.
          Původní SSU měřil infračervené záření oxidu uhličitého ve třech ještě širších kanálech. Jejich maxima
          leží přibližně ve 30, 38 a 45 kilometrech.{" "}
          <ReferenceLink href="https://doi.org/10.1175/2008JTECHA1176.1">
            Mears &amp; Wentz, 2009
          </ReferenceLink>{" "}
          a <ReferenceLink href="https://doi.org/10.1002/2014JD021603">Zou et al., 2014</ReferenceLink>
        </p>

        <figure className="article-figure article-figure--portrait">
          <Image
            className="article-figure__media"
            src="/media/stratosphere/ncar-stratospheric-weighting-functions.png"
            alt="Váhové funkce čtyř družicových měření TLS, SSU1, SSU2 a SSU3 od zemského povrchu do šedesáti kilometrů."
            width={1592}
            height={1888}
            unoptimized
          />
          <div className="article-figure__key" aria-label="Vysvětlení grafu váhových funkcí">
            <p>
              <strong>TLS:</strong> dolní stratosféra, přibližně 13–22 km; maximum kolem 17 km.
            </p>
            <p>
              <strong>SSU1:</strong> široká vrstva přibližně 20–40 km; maximum kolem 30 km.
            </p>
            <p>
              <strong>SSU2:</strong> široká vrstva přibližně 25–45 km; maximum kolem 38 km.
            </p>
            <p>
              <strong>SSU3:</strong> široká vrstva přibližně 35–55 km; maximum kolem 45 km.
            </p>
          </div>
          <figcaption>
            Váhové funkce družicových měření. Výška na svislé ose ukazuje, odkud signál přichází; šířka křivky
            ukazuje relativní příspěvek dané výšky. Překryv křivek je skutečnou vlastností měření, takže kanály
            nejsou ostře oddělené výškové přihrádky. Graf: William Randel, NSF NCAR Climate Data Guide, beze změny;
            stránka uvádí „Usage Restrictions: None“.{" "}
            <ReferenceLink href="https://climatedataguide.ucar.edu/climate-data/stratospheric-temperature-satellite-datasets-used-quantify-lower-middle-and-upper">
              Původní obrázek a odborný popis
            </ReferenceLink>
          </figcaption>
        </figure>

        <p>
          Obrázek je klíčem ke čtení všech dalších hodnot. Teplota TLS není teplotou přesně v 17 kilometrech a
          SSU3 není teplotou přesně ve 45 kilometrech. Jde o průměry s největší citlivostí poblíž těchto výšek a
          s menším příspěvkem z okolí. Dva kanály se navíc částečně překrývají. Vzájemně porovnat lze pouze
          produkty se stejnou nebo přepočtenou váhovou funkcí.
        </p>

        <h3>Rádiový zákryt: teplotní profil z ohybu signálu</h3>
        <p>
          Navigační družice vysílá rádiový signál a druhá družice na nízké oběžné dráze jej sleduje při západu za
          zemský okraj. Atmosféra signál zpomalí a ohne. Z přesného času a fáze se nejprve vypočte úhel ohybu a
          index lomu, z nich tlak a nakonec svislý profil takzvané suché teploty. Ve stratosféře, kde je málo
          vodní páry, se tento výpočet používá přímo.
        </p>

        <p>
          Měření nepotřebuje klasickou teplotní kalibraci a funguje za oblačnosti. Jeden zákryt poskytne jemně
          rozlišený profil, zatímco měsíční klimatický produkt spojuje tisíce profilů z několika družic. Současný
          soubor COSMIC Data Analysis and Archive Center (CDAAC) začíná v březnu 2002, nabízí teplotu mezi 10 a
          40 kilometry na výškovém kroku 200 metrů a ukládá ji v zeměpisné mřížce 5° × 10°.{" "}
          <ReferenceLink href="https://www.cosmic.ucar.edu/RO_Climate_Data_Record">
            klimatický soubor CDAAC
          </ReferenceLink>{" "}
          a <ReferenceLink href="https://doi.org/10.5194/amt-13-3081-2020">Gleisner et al., 2020</ReferenceLink>
        </p>

        <h2>Jak vzniká zveřejněný záznam</h2>
        <h3>1. Jednotlivé profily projdou kontrolou</h3>
        <p>
          U radiosond se kontrolují souřadnice, čas, tlak, výška a fyzikálně možné změny mezi sousedními body.
          Archiv Integrated Global Radiosonde Archive (IGRA) zachovává podrobná měření i standardní tlakové
          hladiny a přidává značky kvality. U družicových dat začíná kontrola u radiance každého záběru. U
          rádiových zákrytů se vyřadí profily, které nesplní kontrolu přesnosti dráhy, signálu a odvozených
          veličin. Tyto archivy tvoří vstup pro měsíční klimatické produkty.{" "}
          <ReferenceLink href="https://doi.org/10.1175/JTECH-D-17-0223.1">Durre et al., 2018</ReferenceLink>
        </p>

        <h3>2. Radiosondy se porovnají v čase</h3>
        <p>
          Stanice může během desítek let vystřídat několik typů radiosond, výpočetních postupů i časů vypouštění.
          Změna se hledá v doprovodných záznamech a porovnáním s okolními stanicemi. Lanzante, Klein a Seidel
          sestavili ručně posouzený soubor 87 stanic. Haimberger později vyvinul automatické postupy RAOBCORE a
          RICH, které využívají rozdíly vůči okolním pozorováním a meteorologickým analýzám. Výsledkem jsou
          alternativní opravené verze, nikoli jeden neomylný přepis minulosti.{" "}
          <ReferenceLink href="https://doi.org/10.1175/1520-0442(2003)016%3C0224:THOMRT%3E2.0.CO;2">
            Lanzante et al., 2003
          </ReferenceLink>
          , <ReferenceLink href="https://doi.org/10.1175/JCLI4050.1">Haimberger, 2007</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI-D-11-00668.1">Haimberger et al., 2012</ReferenceLink>
        </p>

        <h3>3. Z vybraných stanic se vytvoří velkoplošný průměr</h3>
        <p>
          RATPAC-A používá 85 dlouhých pevninských záznamů. Pro období 1958–1995 vychází z dříve opravených
          měsíčních hodnot. Od roku 1996 nejprve počítá rozdíl mezi sousedními měsíci u jednotlivých stanic,
          teprve potom tyto rozdíly spojuje do velkých zeměpisných oblastí a z nich obnoví dlouhodobý průběh.
          Postup omezuje vliv skoků a mezer, zároveň však přidává nejistotu tam, kde je stanic málo.{" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI3198.1">Free et al., 2004</ReferenceLink> a{" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/access/metadata/landing-page/bin/iso?id=gov.noaa.ncdc%3AC00978">
            NOAA RATPAC v2
          </ReferenceLink>
        </p>

        <h3>4. Každá družice se nejprve kalibruje samostatně</h3>
        <p>
          Sondér během každého skenu sleduje Zemi i vnitřní teplý kalibrační terč a u mikrovlnných přístrojů také
          chladný vesmír. Z těchto referencí se elektrický signál převádí na radianci. Dále se opravuje závislost
          na úhlu pohledu, nelinearita přijímače a pomalá změna kalibrace. Výsledkem je mřížka teplot pro jeden
          přístroj a jeden kanál.
        </p>

        <h3>5. Překrývající se družice se spojí</h3>
        <p>
          Žádná jednotlivá družice neměřila od roku 1978 dodnes. Klimatický záznam vzniká ze šestnácti nebo více
          přístrojů, které se po určitou dobu překrývají. Během překryvu lze určit jejich rozdíl. Zpracování také
          koriguje posun místního času přeletu, protože dráha družice se postupně mění a stejnou oblast může po
          letech pozorovat v jinou denní dobu. Právě volba kalibrace, překryvů a korekce dráhy tvoří hlavní
          rozdíl mezi produkty NOAA, RSS a UAH.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2011JD016205">Zou &amp; Wang, 2011</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1029/2010JD014954">Mears et al., 2011</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1007/s13143-017-0010-y">Spencer et al., 2017</ReferenceLink>
        </p>

        <h3>6. Staré a nové kanály dostanou stejnou výškovou citlivost</h3>
        <p>
          Původní MSU, novější AMSU-A a dnešní ATMS nemají zcela stejné kanály. Pro dolní stratosféru se spojuje
          MSU kanál 4, AMSU-A kanál 9 a ATMS kanál 10. Ve střední a horní stratosféře se několik užších kanálů
          AMSU-A matematicky složí tak, aby napodobily široké váhové funkce SSU1, SSU2 a SSU3. Druhý nezávislý
          postup aplikuje tytéž funkce na podrobnější profily přístroje MLS. Obě pokračování původního SSU pak lze
          přímo porovnat.{" "}
          <ReferenceLink href="https://doi.org/10.1175/JTECH-D-16-0018.1">Zou &amp; Qian, 2016</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI-D-15-0629.1">Randel et al., 2016</ReferenceLink>
        </p>

        <h3>7. Měsíční mapy se převedou na globální hodnotu</h3>
        <p>
          Družicové produkty nejprve skládají jednotlivé záběry do pravidelné zeměpisné mřížky. NOAA v5 používá
          buňky 2,5° × 2,5°. Měsíční globální průměr se počítá s vahou odpovídající ploše buněk, aby úzké buňky u
          pólů neměly stejný vliv jako větší buňky u rovníku. Od každého kalendářního měsíce se může odečíst jeho
          průměr v referenčním období. Výsledná křivka pak ukazuje odchylky, nikoli absolutní teplotu celé
          stratosféry.
        </p>

        <h3>8. Nejistota se posuzuje porovnáním více zpracování</h3>
        <p>
          U radiosond zahrnuje nejistota změny přístrojů, řídké prostorové pokrytí a volbu homogenizačního
          postupu. U družic zahrnuje kalibraci, spojení přístrojů, posun doby přeletu a odlišné váhové funkce.
          Mears a kol. vytvářejí mnoho přípustných variant korekcí, zatímco současné přehledy zároveň porovnávají
          výsledky RSS, NOAA a UAH. Shoda více zpracování stejného signálu zmenšuje nejistotu metody, ale
          nepředstavuje tři nezávislé soustavy družic.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2010JD014954">Mears et al., 2011</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI-D-19-0998.1">Steiner et al., 2020</ReferenceLink>
        </p>

        <h2>Zveřejňovaná data</h2>
        <p>
          Níže jsou hlavní veřejné produkty, z nichž lze převzít hodnoty nebo provést vlastní výpočet. Název
          vrstvy, verze a období musí zůstat u každého grafu, protože stejně pojmenované soubory se při nové
          kalibraci mohou změnit.
        </p>

        <div className="article-data-list">
          <section className="article-data-item">
            <h3>RATPAC v2</h3>
            <p>
              Radiosondová měření z 85 pevninských stanic od roku 1958. NOAA zveřejňuje měsíční hodnoty na 13
              tlakových hladinách a průměry tří širších částí atmosféry. RATPAC-A je určen pro globální,
              polokoulové, tropické a mimotropické průměry; RATPAC-B obsahuje jednotlivé stanice. Část RATPAC-B
              po roce 1997 není homogenizovaná stejným způsobem jako starší údaje.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://www.ncei.noaa.gov/access/metadata/landing-page/bin/iso?id=gov.noaa.ncdc%3AC00978">
                Popis a stažení
              </ReferenceLink>
              {" · "}
              <ReferenceLink href="https://doi.org/10.7289/V5SF2T7J">DOI dat</ReferenceLink>
              {" · "}
              <ReferenceLink href="https://doi.org/10.1029/2005JD006169">Metodická práce</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>Remote Sensing Systems: TLS v4.0</h3>
            <p>
              Měsíční a mřížkové teploty dolní stratosféry od konce roku 1978. Remote Sensing Systems spojuje
              měření MSU a AMSU-A vlastním postupem kalibrace, korekce dráhy a výběru překryvů. Název organizace
              se v grafech zkracuje na RSS. Produkt zastupuje přibližně 13–22 kilometrů.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://www.remss.com/missions/amsu/">Data RSS</ReferenceLink>
              {" · "}
              <ReferenceLink href="https://doi.org/10.1175/2008JTECHA1176.1">Metoda</ReferenceLink>
              {" · "}
              <ReferenceLink href="https://doi.org/10.1029/2010JD014954">Nejistota</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>NOAA STAR: TLS v5.0</h3>
            <p>
              Produkt Center for Satellite Applications and Research, zkráceně STAR. Globální měsíční mřížka
              2,5° × 2,5° začíná v prosinci 1978. Verze 5 spojuje tři generace přístrojů MSU, AMSU-A a ATMS na
              šestnácti polárních družicích. NOAA uvádí referenční období 2000–2019 a měsíční aktualizaci celého
              záznamu.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://www.ncei.noaa.gov/products/climate-data-records/mean-layer-temperature-noaa">
                Produkt a dokumentace
              </ReferenceLink>
              {" · "}
              <ReferenceLink href="https://doi.org/10.25921/tn91-wv50">DOI dat</ReferenceLink>
              {" · "}
              <ReferenceLink href="https://www.star.nesdis.noaa.gov/smcd/emb/mscat/products.php">
                Přímé soubory
              </ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>University of Alabama in Huntsville: TLS v6.1</h3>
            <p>
              Třetí pravidelně aktualizované zpracování společných mikrovlnných pozorování dolní stratosféry.
              University of Alabama in Huntsville, v grafech UAH, zveřejňuje globální a regionální měsíční
              hodnoty i mřížková data od prosince 1978.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://www.nsstc.uah.edu/data/msu/">Data UAH</ReferenceLink>
              {" · "}
              <ReferenceLink href="https://doi.org/10.1007/s13143-017-0010-y">Metodická práce</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>NOAA SSU+AMSU v3.0 a NCAR SSU+MLS</h3>
            <p>
              Dva způsoby pokračování měření střední a horní stratosféry po skončení SSU. NOAA napodobuje tři
              původní kanály kombinací měření AMSU-A. NCAR váží podrobné profily MLS stejnými funkcemi SSU.
              Produkty pokrývají přibližně 20–55 kilometrů a dovolují porovnat dvě nezávislé návaznosti po roce
              2004.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://www.star.nesdis.noaa.gov/smcd/emb/mscat/introduction.php">
                NOAA SSU+AMSU
              </ReferenceLink>
              {" · "}
              <ReferenceLink href="https://doi.org/10.1175/JTECH-D-16-0018.1">Metoda NOAA</ReferenceLink>
              {" · "}
              <ReferenceLink href="https://doi.org/10.1175/JCLI-D-15-0629.1">Metoda NCAR</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>CDAAC: rádiové zákrytové profily</h3>
            <p>
              Sloučené rádiové zákrytové profily od března 2002. Měsíční mřížka obsahuje suchou teplotu mezi 10 a
              40 kilometry s výškovým krokem 200 metrů. Kratší období omezuje dlouhodobé srovnání, jemné svislé
              rozlišení však umožňuje ověřovat změny v dolní a střední stratosféře bez váhové funkce širokého
              mikrovlnného kanálu.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://www.cosmic.ucar.edu/RO_Climate_Data_Record">
                Popis a stažení dat
              </ReferenceLink>
              {" · "}
              <ReferenceLink href="https://doi.org/10.5194/amt-13-3081-2020">Vyhodnocení dat</ReferenceLink>
            </p>
          </section>
        </div>

        <h2>Srovnání družicových dat</h2>
        <p>
          Následující graf spojuje čtyři výškové oblasti do jednoho obrazu. Každá křivka zobrazuje globální
          měsíční odchylku po odečtení obvyklého ročního chodu. Dolní stopa patří TLS, tři vyšší stopy postupně
          SSU1, SSU2 a SSU3. Šedá přerušovaná čára je nula příslušné stopy a svislé měřítko od −1 do +1 °C se
          používá pro každou stopu zvlášť. Křivky jsou od sebe posunuté pouze proto, aby se nepřekrývaly.
        </p>

        <p>
          U TLS představují tři červené odstíny zpracování UAH, NOAA a RSS. Vycházejí převážně ze stejných
          družicových radiancí, ale používají vlastní kalibraci a korekce. U SSU1 až SSU3 porovnává oranžová
          křivka pokračování pomocí AMSU-A a modrá pokračování pomocí MLS. Jejich podobnost po roce 2004 je
          důležitá, protože novější části vznikly z odlišných přístrojů a zpracovatelských postupů.
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div
            className="article-figure__scroll"
            tabIndex={0}
            aria-label="Vodorovně posuvný graf globální teploty dolní, střední a horní stratosféry"
          >
            <Image
              className="article-figure__media"
              src="/media/stratosphere/ncar-stratospheric-temperature-1979-2024.png"
              alt="Globální měsíční odchylky teploty dolní, střední a horní stratosféry od roku 1979 do roku 2024 ve čtyřech výškových stopách."
              width={3268}
              height={4217}
              unoptimized
            />
          </div>
          <div className="article-figure__key" aria-label="Vysvětlení srovnávacího grafu">
            <p>
              <strong>TLS, dolní stopa:</strong> asi 13–22 km; UAH, NOAA a RSS v červených odstínech.
            </p>
            <p>
              <strong>SSU1:</strong> široká vrstva s maximem kolem 30 km.
            </p>
            <p>
              <strong>SSU2:</strong> široká vrstva s maximem kolem 38 km.
            </p>
            <p>
              <strong>SSU3, horní stopa:</strong> široká vrstva s maximem kolem 45 km.
            </p>
            <p>
              <strong>Oranžová:</strong> návaznost původního SSU vytvořená z měření AMSU-A.
            </p>
            <p>
              <strong>Modrá:</strong> návaznost původního SSU vytvořená z profilů MLS.
            </p>
          </div>
          <figcaption>
            Odsezónované globální měsíční odchylky teploty čtyř širokých vrstev, 1979–2024. Jednotlivé stopy jsou
            svisle posunuté; šedá čára označuje jejich vlastní nulu. Graf: William Randel, NSF NCAR Climate Data
            Guide, aktualizace odborného přehledu v roce 2025, beze změny; stránka uvádí „Usage Restrictions:
            None“.{" "}
            <ReferenceLink href="https://climatedataguide.ucar.edu/climate-data/stratospheric-temperature-satellite-datasets-used-quantify-lower-middle-and-upper">
              Původní graf, data a úplný kredit
            </ReferenceLink>
          </figcaption>
        </figure>

        <p>
          Graf dovoluje číst tři vlastnosti současně. Všechny čtyři stopy končí níže než na začátku. Pokles je
          větší ve střední a horní stratosféře než v TLS. Průběh také není rovná čára: obsahuje krátké vrcholy,
          víceleté vlnění i období s malou čistou změnou. Jediné číslo sklonu proto vždy potřebuje počáteční a
          koncový rok.
        </p>

        <h2 id="pozorovani">Pozorování</h2>
        <p className="article-prose__intro">
          Globální družicová měření ukazují, že dolní, střední i horní stratosféra jsou dnes chladnější než na
          začátku souvislého pozorování na konci roku 1978. Velikost a časový průběh změny se s výškou liší.
          Největší pokles v globálním průměru vykazuje horní ze sledovaných vrstev.
        </p>

        <p>
          Steiner a kol. porovnali nejnovější verze družicových produktů s radiosondami, lidary a rádiovými
          zákryty pro období 1979–2018. Z globálních dat NOAA/STAR vypočítali běžnou lineární regresí změnu
          −0,25 ± 0,16 K za desetiletí pro TLS, −0,56 ± 0,13 K pro SSU1, −0,62 ± 0,13 K pro SSU2 a −0,70 ±
          0,14 K pro SSU3. Znaménko minus znamená pokles. Uvedené hodnoty ± jsou nejistoty sklonu, které autoři
          připojili ke konkrétnímu statistickému výpočtu.{" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI-D-19-0998.1">Steiner et al., 2020</ReferenceLink>
        </p>

        <p>
          Za 39 let tohoto období odpovídají uvedené sklony přibližně poklesu o 1 °C v TLS, 2,2 °C v SSU1,
          2,4 °C v SSU2 a 2,7 °C v SSU3. Jde o změnu globálního průměru širokých vrstev mezi začátkem a koncem
          lineárního proložení. Teplota na jednotlivém místě nebo v jednotlivém měsíci se od tohoto průměru může
          lišit o několik stupňů a krátkodobě se může pohybovat opačným směrem.
        </p>

        <p>
          Dolní stratosféra vykazuje dva výrazné teplé vrcholy na začátku osmdesátých a devadesátých let a
          následné prudké poklesy. Od poloviny devadesátých let se její globální křivka pohybuje převážně v
          užším pásmu a dlouhodobý sklon za kratší novější období je menší než sklon od roku 1979. Tento tvar se
          objevuje v RSS, NOAA i UAH a také v radiosondových zpracováních.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2008JD010421">Randel et al., 2009</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1002/2015JD024039">Seidel et al., 2016</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI-D-19-0998.1">Steiner et al., 2020</ReferenceLink>
        </p>

        <p>
          Ve střední a horní stratosféře pokračuje pokles i v novější části grafu. Dvě návaznosti původního SSU,
          oranžová SSU+AMSU a modrá SSU+MLS, mají po roce 2004 podobný průběh. Další nezávislé měření přidal
          přístroj Optical Spectrograph and InfraRed Imager System (OSIRIS). Dubé a kol. spojili jeho profily s
          SSU3 a pro období 1979–2021 dostali poblíž 45 kilometrů pokles přibližně 0,6 K za desetiletí.
          Samostatné profily OSIRIS, MLS a infračerveného přístroje Sounding of the Atmosphere using Broadband
          Emission Radiometry (SABER) se pro roky 2005–2021 rovněž shodly na poklesu v horní stratosféře.{" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI-D-15-0629.1">Randel et al., 2016</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.5194/acp-24-12925-2024">Dubé et al., 2024</ReferenceLink>
        </p>

        <p>
          Rádiová zákrytová měření poskytují od roku 2002 podrobnější svislé profily. Jejich období je příliš
          krátké pro přímé zopakování celého výpočtu od roku 1979, ale ve společném období potvrzují pokles v
          dolní stratosféře a umožňují sledovat, jak se změna liší po kilometrových výškách. Výsledky několika
          zpracovatelských center se v globálním a šířkovém průměru navzájem blíží.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2009GL039777">Steiner et al., 2009</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1038/s41612-022-00229-7">Gleisner et al., 2022</ReferenceLink>
        </p>

        <p>
          Nejnovější uzavřený roční přehled v tomto článku končí rokem 2024. Zpráva State of the Climate uvádí,
          že globální průměr dolní, střední a horní stratosféry se během roku 2024 mírně zvýšil. Celé období
          1979–2024 přesto zůstává ve všech těchto vrstvách klesající. Jeden teplejší rok tedy změnil poslední
          bod křivky, ale neobrátil mnohadesetiletý rozdíl mezi jejím začátkem a koncem.{" "}
          <ReferenceLink href="https://ametsoc.net/sotc2024/02GlobalClimate_SotC2024.pdf">
            State of the Climate in 2024
          </ReferenceLink>
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Přesné shrnutí pozorování</p>
          <p>
            Balónová měření od roku 1958, souvislá družicová měření od konce roku 1978 a rádiové zákrytové
            profily od roku 2002 společně dokumentují pokles globální teploty stratosféry. V družicových datech
            za roky 1979–2018 činí podle použité široké vrstvy přibližně 0,25 až 0,70 °C za desetiletí a s výškou
            roste. Dolní stratosféra má od poloviny devadesátých let menší čistou změnu než v první části
            záznamu, zatímco střední a horní vrstvy pokračují v poklesu. Jednotlivé roky a oblasti mohou vykazovat
            opačný pohyb; dlouhodobý globální rozdíl do roku 2024 zůstává ve všech čtyřech sledovaných vrstvách
            záporný.
          </p>
        </div>

        <h2>Prameny, data a licence</h2>
        <div className="article-source-groups">
          <section>
            <h3>Historie a přímá měření</h3>
            <ul>
              <li>
                <ReferenceLink href="https://journals.ametsoc.org/view/journals/mwre/30/7/1520-0493-30_7_356.xml">
                  The International Aeronautical Congress at Berlin
                </ReferenceLink>
                , dobová zpráva z roku 1902 o balónových měřeních Teisserenca de Borta a Assmanna.
              </li>
              <li>
                Rochas, M. J. (2002):{" "}
                <ReferenceLink href="https://doi.org/10.4267/2042/36222">
                  Le contexte scientifique de la surprenante découverte de la stratosphère
                </ReferenceLink>
                .
              </li>
              <li>
                Baldwin, M. P. et al. (2019):{" "}
                <ReferenceLink href="https://doi.org/10.1175/AMSMONOGRAPHS-D-19-0003.1">
                  100 Years of Progress in Understanding the Stratosphere and Mesosphere
                </ReferenceLink>
                .
              </li>
              <li>
                WMO:{" "}
                <ReferenceLink href="https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/instruments-and-methods-of-observation-programme-imop/guide-instruments-and-methods-of-observation-wmo-no-8">
                  Guide to Instruments and Methods of Observation
                </ReferenceLink>
                , kapitola o měření ve volné atmosféře.
              </li>
              <li>
                Durre, I. et al. (2018):{" "}
                <ReferenceLink href="https://doi.org/10.1175/JTECH-D-17-0223.1">
                  Overview of the Integrated Global Radiosonde Archive Version 2
                </ReferenceLink>
                .
              </li>
            </ul>
          </section>

          <section>
            <h3>Metodické práce</h3>
            <ul>
              <li>
                Lanzante, J. R. et al. (2003):{" "}
                <ReferenceLink href="https://doi.org/10.1175/1520-0442(2003)016%3C0224:THOMRT%3E2.0.CO;2">
                  Temporal Homogenization of Monthly Radiosonde Temperature Data
                </ReferenceLink>
                .
              </li>
              <li>
                Free, M. et al. (2004):{" "}
                <ReferenceLink href="https://doi.org/10.1175/JCLI3198.1">
                  Using First Differences to Reduce Inhomogeneity in Radiosonde Temperature Datasets
                </ReferenceLink>
                .
              </li>
              <li>
                Free, M. et al. (2005):{" "}
                <ReferenceLink href="https://doi.org/10.1029/2005JD006169">
                  Radiosonde Atmospheric Temperature Products for Assessing Climate
                </ReferenceLink>
                .
              </li>
              <li>
                Thorne, P. W. et al. (2005):{" "}
                <ReferenceLink href="https://doi.org/10.1029/2004JD005753">
                  Revisiting radiosonde upper-air temperatures from 1958 to 2002
                </ReferenceLink>
                .
              </li>
              <li>
                Haimberger, L. (2007):{" "}
                <ReferenceLink href="https://doi.org/10.1175/JCLI4050.1">
                  Homogenization of Radiosonde Temperature Time Series
                </ReferenceLink>
                .
              </li>
              <li>
                Haimberger, L. et al. (2012):{" "}
                <ReferenceLink href="https://doi.org/10.1175/JCLI-D-11-00668.1">
                  Homogenization of the Global Radiosonde Temperature Dataset through Combined Comparison with Reanalysis
                </ReferenceLink>
                .
              </li>
              <li>
                Mears, C. A. &amp; Wentz, F. J. (2009):{" "}
                <ReferenceLink href="https://doi.org/10.1175/2008JTECHA1176.1">
                  Construction of the RSS Atmospheric Temperature Records from the MSU and AMSU Microwave Sounders
                </ReferenceLink>
                .
              </li>
              <li>
                Mears, C. A. et al. (2011):{" "}
                <ReferenceLink href="https://doi.org/10.1029/2010JD014954">
                  Assessing uncertainty in estimates of atmospheric temperature changes from MSU and AMSU
                </ReferenceLink>
                .
              </li>
              <li>
                Zou, C.-Z. et al. (2014):{" "}
                <ReferenceLink href="https://doi.org/10.1002/2014JD021603">
                  Recalibration and merging of SSU observations for stratospheric temperature trend studies
                </ReferenceLink>
                .
              </li>
              <li>
                Zou, C.-Z. &amp; Qian, H. (2016):{" "}
                <ReferenceLink href="https://doi.org/10.1175/JTECH-D-16-0018.1">
                  Stratospheric Temperature Climate Data Record from Merged SSU and AMSU-A Observations
                </ReferenceLink>
                .
              </li>
              <li>
                Spencer, R. W. et al. (2017):{" "}
                <ReferenceLink href="https://doi.org/10.1007/s13143-017-0010-y">
                  UAH Version 6 Global Satellite Temperature Products
                </ReferenceLink>
                .
              </li>
              <li>
                Gleisner, H. et al. (2020):{" "}
                <ReferenceLink href="https://doi.org/10.5194/amt-13-3081-2020">
                  Evaluation of the 15-year ROM SAF monthly mean GPS radio occultation climate data record
                </ReferenceLink>
                .
              </li>
            </ul>
          </section>

          <section>
            <h3>Práce vyhodnocující pozorování</h3>
            <ul>
              <li>
                Randel, W. J. et al. (2009):{" "}
                <ReferenceLink href="https://doi.org/10.1029/2008JD010421">
                  An update of observed stratospheric temperature trends
                </ReferenceLink>
                .
              </li>
              <li>
                Randel, W. J. et al. (2016):{" "}
                <ReferenceLink href="https://doi.org/10.1175/JCLI-D-15-0629.1">
                  Stratospheric Temperature Trends over 1979–2015 Derived from Combined SSU, MLS, and SABER Observations
                </ReferenceLink>
                .
              </li>
              <li>
                Seidel, D. J. et al. (2016):{" "}
                <ReferenceLink href="https://doi.org/10.1002/2015JD024039">
                  Stratospheric temperature changes during the satellite era
                </ReferenceLink>
                .
              </li>
              <li>
                Steiner, A. K. et al. (2020):{" "}
                <ReferenceLink href="https://doi.org/10.1175/JCLI-D-19-0998.1">
                  Observed Temperature Changes in the Troposphere and Stratosphere from 1979 to 2018
                </ReferenceLink>
                .
              </li>
              <li>
                Gleisner, H. et al. (2022):{" "}
                <ReferenceLink href="https://doi.org/10.1038/s41612-022-00229-7">
                  Monitoring global climate change using GNSS radio occultation
                </ReferenceLink>
                .
              </li>
              <li>
                Dubé, K. et al. (2024):{" "}
                <ReferenceLink href="https://doi.org/10.5194/acp-24-12925-2024">
                  Upper-stratospheric temperature trends: new results from OSIRIS
                </ReferenceLink>
                .
              </li>
              <li>
                Randel, W. J. et al. (2025):{" "}
                <ReferenceLink href="https://ametsoc.net/sotc2024/02GlobalClimate_SotC2024.pdf">
                  State of the Climate in 2024: Stratospheric Temperature
                </ReferenceLink>
                .
              </li>
            </ul>
          </section>

          <section>
            <h3>Data ke stažení</h3>
            <ul>
              <li>
                <ReferenceLink href="https://www.ncei.noaa.gov/access/metadata/landing-page/bin/iso?id=gov.noaa.ncdc%3AC00978">
                  RATPAC v2
                </ReferenceLink>
                : měsíční radiosondové hodnoty od roku 1958.
              </li>
              <li>
                <ReferenceLink href="https://www.remss.com/missions/amsu/">RSS TLS v4.0</ReferenceLink>: měsíční
                globální, regionální a mřížková data dolní stratosféry.
              </li>
              <li>
                <ReferenceLink href="https://www.ncei.noaa.gov/products/climate-data-records/mean-layer-temperature-noaa">
                  NOAA STAR TLS v5.0
                </ReferenceLink>
                : mřížková data MSU, AMSU-A a ATMS.
              </li>
              <li>
                <ReferenceLink href="https://www.nsstc.uah.edu/data/msu/">UAH TLS v6.1</ReferenceLink>: textové a
                mřížkové soubory dolní stratosféry.
              </li>
              <li>
                <ReferenceLink href="https://www.star.nesdis.noaa.gov/smcd/emb/mscat/introduction.php">
                  NOAA SSU+AMSU v3.0
                </ReferenceLink>
                : střední a horní stratosféra.
              </li>
              <li>
                <ReferenceLink href="https://www.cosmic.ucar.edu/RO_Climate_Data_Record">
                  CDAAC GNSS-RO
                </ReferenceLink>
                : měsíční profily teploty, úhlu ohybu a indexu lomu od roku 2002.
              </li>
              <li>
                <ReferenceLink href="https://climatedataguide.ucar.edu/climate-data/stratospheric-temperature-satellite-datasets-used-quantify-lower-middle-and-upper">
                  NCAR Climate Data Guide
                </ReferenceLink>
                : aktuální rozcestník verzí, odborné pokyny a srovnávací grafy.
              </li>
            </ul>
          </section>

          <section>
            <h3>Obrázky a práva k použití</h3>
            <ul>
              <li>
                Profil atmosféry: NOAA JetStream.{" "}
                <ReferenceLink href="https://prod-01-alb-www-noaa.woc.noaa.gov/jetstream/atmosphere/layers-of-atmosphere">
                  Původní obrázek
                </ReferenceLink>
                . Použit beze změny jako materiál NOAA ve veřejné doméně.
              </li>
              <li>
                Historická fotografie radiosondy: U.S. Army Air Forces / NOAA Photo Library. Použita beze změny
                jako materiál vlády USA ve veřejné doméně.
              </li>
              <li>
                Váhové funkce a srovnávací graf: William Randel, NSF NCAR Climate Data Guide.{" "}
                <ReferenceLink href="https://climatedataguide.ucar.edu/climate-data/stratospheric-temperature-satellite-datasets-used-quantify-lower-middle-and-upper">
                  Zdroj, kredit a odborný kontext
                </ReferenceLink>
                . Oba soubory jsou převzaty beze změny; zdrojová stránka uvádí „Usage Restrictions: None“.
              </li>
              <li>
                NOAA uvádí, že její materiály lze bez zvláštního svolení použít, pokud u položky není uvedeno
                jinak; požaduje uvedení zdroje a zakazuje dojem oficiálního schválení.{" "}
                <ReferenceLink href="https://oceanservice.noaa.gov/about/faq.html">
                  Pravidla použití NOAA
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
