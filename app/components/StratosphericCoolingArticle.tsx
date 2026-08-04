import Image from "next/image";
import { SourceLink } from "./SourceLink";

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
          <SourceLink id="WEB_NOAA_Layers_of_the_Atmosphere_29f17d10">
            NOAA: vrstvy atmosféry
          </SourceLink>
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
            <SourceLink id="WEB_NOAA_Layers_of_the_Atmosphere_29f17d10">
              Původní obrázek a popis
            </SourceLink>
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
          <SourceLink id="DOI_10_1029_2005jd006169">Free et al., 2005</SourceLink>,{" "}
          <SourceLink id="DOI_10_1029_2004jd005753">Thorne et al., 2005</SourceLink>,{" "}
          <SourceLink id="DOI_10_1175_2008jtecha1176_1">
            Mears &amp; Wentz, 2009
          </SourceLink>
          , <SourceLink id="DOI_10_1175_jtech_d_16_0018_1">Zou &amp; Qian, 2016</SourceLink> a{" "}
          <SourceLink id="DOI_10_1175_jcli_d_19_0998_1">Steiner et al., 2020</SourceLink>
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
          <SourceLink id="WEB_journals_ametsoc_org_The_International_Aeronautical_Congress_at_Berli_8cb3a239">
            Monthly Weather Review, 1902
          </SourceLink>
          , <SourceLink id="DOI_10_4267_2042_36222">Rochas, 2002</SourceLink> a{" "}
          <SourceLink id="DOI_10_1175_amsmonographs_d_19_0003_1">
            Baldwin et al., 2019
          </SourceLink>
        </p>

        <p>
          Starší registrační balón po přistání teprve vydal papírový nebo fotografický záznam. Robert Bureau ve
          Francii v roce 1929 vypustil přístroj, který teplotu během letu vysílal rádiem, a zavedl označení
          radiosonda. Ve třicátých letech vznikly praktické konstrukce v Sovětském svazu, Finsku, Německu a
          Spojených státech. Pravidelné provozní sítě se rozšířily před druhou světovou válkou a během ní.{" "}
          <SourceLink id="WEB_nist_gov_Tuning_into_Weather_Forecasting_NIST_be922613">
            NIST: vývoj radiosond
          </SourceLink>{" "}
          a <SourceLink id="WEB_NOAA_Radiosonde_Observation_27e1f005">NOAA/NWS: historie měření</SourceLink>
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
            <SourceLink id="WEB_NOAA_Radiosonde_Atmospheric_Temperature_Products_for_960a4f75">
              NOAA: radiosondová teplotní data
            </SourceLink>
          </figcaption>
        </figure>

        <p>
          Z jednotlivých provozních letů vznikl dlouhý klimatický záznam až po výběru stanic a opravě změn
          přístrojů. Soubor Radiosonde Atmospheric Temperature Products for Assessing Climate, zkráceně RATPAC,
          začíná rokem 1958, kdy už síť dovoluje počítat velkoplošné průměry. Jeho autoři zvolili 85 pevninských
          stanic a 13 tlakových hladin. Rok 1958 proto neoznačuje první radiosondu, ale začátek konkrétního
          pravidelně zpracovávaného globálního produktu.{" "}
          <SourceLink id="DOI_10_1175_jcli3198_1">Free et al., 2004</SourceLink> a{" "}
          <SourceLink id="DOI_10_1029_2005jd006169">Free et al., 2005</SourceLink>
        </p>

        <p>
          Družice TIROS-N, vypuštěná 13. října 1978, nesla mikrovlnný přístroj Microwave Sounding Unit (MSU) pro
          dolní stratosféru a infračervený Stratospheric Sounding Unit (SSU) pro střední a horní stratosféru.
          Následující družice NOAA vytvářely překrývající se měření až do roku 2005. Advanced Microwave Sounding
          Unit-A (AMSU-A) od roku 1998, Microwave Limb Sounder (MLS) od roku 2004 a později Advanced Technology
          Microwave Sounder (ATMS) umožnily pokračovat i po skončení původních MSU a SSU. Souvislé globální
          družicové záznamy proto začínají na konci roku 1978.{" "}
          <SourceLink id="WEB_NOAA_NASA_NOAA_prehled_druzic_a566a73a">
            NASA/NOAA: přehled družic
          </SourceLink>{" "}
          a{" "}
          <SourceLink id="WEB_University_Corporation_for_A_Stratospheric_Temperature_Satellite_Datasets_Use_394cf021">
            NCAR Climate Data Guide
          </SourceLink>
        </p>

        <p>
          Třetí způsob přibyl na začátku 21. století. Družice CHAMP začala v roce 2001 sledovat, jak se rádiový
          signál navigačních družic ohýbá při průchodu atmosférou. Z těchto zákrytových měření lze odvodit svislé
          profily teploty. Jejich globální klimatické zpracování začíná v roce 2002 a poskytuje další měření
          založené na odlišném fyzikálním principu.{" "}
          <SourceLink id="DOI_10_1016_s0273_1177_03_00591_x">Wickert et al., 2004</SourceLink>{" "}
          a{" "}
          <SourceLink id="WEB_University_Corporation_for_A_RO_Climate_Data_Record_Constellation_Observing_S_03516764">
            klimatický soubor centra CDAAC
          </SourceLink>
        </p>

        <h2>Co se skutečně měří</h2>
        <h3>Radiosonda: teplota během jednoho výstupu</h3>
        <p>
          Současná radiosonda je malá jednorázová měřicí souprava zavěšená pod balónem naplněným heliem nebo
          vodíkem. Teplotní čidlo je vystavené proudícímu vzduchu, tlakové čidlo určuje tlakovou hladinu a poloha
          se sleduje pomocí družicové navigace. Přístroj vysílá hodnoty každou sekundu přijímači na zemi.
          Typický výstup trvá déle než dvě hodiny a může překročit 35 kilometrů.{" "}
          <SourceLink id="WEB_NOAA_Radiosonde_Observation_27e1f005">NOAA/NWS: radiosondové pozorování</SourceLink>
        </p>

        <p>
          Jediný let vytvoří svislý profil podél dráhy balónu. Balón při výstupu zároveň unáší vítr, takže
          nejvyšší část profilu může ležet stovky kilometrů od místa vypuštění. Pro mezinárodní výměnu se z
          podrobného profilu ukládají také hodnoty na standardních tlakových hladinách, například 100, 70, 50 a
          30 hPa. Celosvětová síť má přibližně tisíc stanic a běžně dosahuje 30 kilometrů nebo výše. Horní
          stratosféru kolem 45–50 kilometrů tato provozní síť pokrývá jen omezeně.{" "}
          <SourceLink id="WEB_World_Meteorological_Organiz_Global_Observing_System_GOS_cd0817f4">
            WMO Global Observing System
          </SourceLink>
        </p>

        <p>
          Sluneční záření může čidlo během dne ohřát a v řídkém vzduchu se jeho vliv zvětšuje. Výrobci a
          meteorologické služby proto používají stínění, malé rychle reagující snímače a korekce závislé na typu
          přístroje, výšce a osvětlení. Přesný postup se mezi generacemi radiosond měnil. Klimatické zpracování
          musí znát datum těchto změn, protože výměna čidla může v místním záznamu vytvořit skok.{" "}
          <SourceLink id="WEB_World_Meteorological_Organiz_Guide_to_Instruments_and_Methods_of_Observation_93c4c4a4">
            WMO Guide to Instruments and Methods of Observation
          </SourceLink>
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
          <SourceLink id="DOI_10_1175_2008jtecha1176_1">
            Mears &amp; Wentz, 2009
          </SourceLink>{" "}
          a <SourceLink id="DOI_10_1002_2014jd021603">Zou et al., 2014</SourceLink>
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
            <SourceLink id="WEB_University_Corporation_for_A_Stratospheric_Temperature_Satellite_Datasets_Use_394cf021">
              Původní obrázek a odborný popis
            </SourceLink>
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
          <SourceLink id="WEB_University_Corporation_for_A_RO_Climate_Data_Record_Constellation_Observing_S_03516764">
            klimatický soubor CDAAC
          </SourceLink>{" "}
          a <SourceLink id="DOI_10_5194_amt_13_3081_2020">Gleisner et al., 2020</SourceLink>
        </p>

        <h2>Jak vzniká zveřejněný záznam</h2>
        <h3>1. Jednotlivé profily projdou kontrolou</h3>
        <p>
          U radiosond se kontrolují souřadnice, čas, tlak, výška a fyzikálně možné změny mezi sousedními body.
          Archiv Integrated Global Radiosonde Archive (IGRA) zachovává podrobná měření i standardní tlakové
          hladiny a přidává značky kvality. U družicových dat začíná kontrola u radiance každého záběru. U
          rádiových zákrytů se vyřadí profily, které nesplní kontrolu přesnosti dráhy, signálu a odvozených
          veličin. Tyto archivy tvoří vstup pro měsíční klimatické produkty.{" "}
          <SourceLink id="DOI_10_1175_jtech_d_17_0223_1">Durre et al., 2018</SourceLink>
        </p>

        <h3>2. Radiosondy se porovnají v čase</h3>
        <p>
          Stanice může během desítek let vystřídat několik typů radiosond, výpočetních postupů i časů vypouštění.
          Změna se hledá v doprovodných záznamech a porovnáním s okolními stanicemi. Lanzante, Klein a Seidel
          sestavili ručně posouzený soubor 87 stanic. Haimberger později vyvinul automatické postupy RAOBCORE a
          RICH, které využívají rozdíly vůči okolním pozorováním a meteorologickým analýzám. Výsledkem jsou
          alternativní opravené verze, nikoli jeden neomylný přepis minulosti.{" "}
          <SourceLink id="DOI_10_1175_1520_0442_2003_016_0224_thomrt_2_0_co_2">
            Lanzante et al., 2003
          </SourceLink>
          , <SourceLink id="DOI_10_1175_jcli4050_1">Haimberger, 2007</SourceLink> a{" "}
          <SourceLink id="DOI_10_1175_jcli_d_11_00668_1">Haimberger et al., 2012</SourceLink>
        </p>

        <h3>3. Z vybraných stanic se vytvoří velkoplošný průměr</h3>
        <p>
          RATPAC-A používá 85 dlouhých pevninských záznamů. Pro období 1958–1995 vychází z dříve opravených
          měsíčních hodnot. Od roku 1996 nejprve počítá rozdíl mezi sousedními měsíci u jednotlivých stanic,
          teprve potom tyto rozdíly spojuje do velkých zeměpisných oblastí a z nich obnoví dlouhodobý průběh.
          Postup omezuje vliv skoků a mezer, zároveň však přidává nejistotu tam, kde je stanic málo.{" "}
          <SourceLink id="DOI_10_1175_jcli3198_1">Free et al., 2004</SourceLink> a{" "}
          <SourceLink id="WEB_NOAA_Radiosonde_Atmospheric_Temperature_Products_for_d1952dde">
            NOAA RATPAC v2
          </SourceLink>
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
          <SourceLink id="DOI_10_1029_2011jd016205">Zou &amp; Wang, 2011</SourceLink>,{" "}
          <SourceLink id="DOI_10_1029_2010jd014954">Mears et al., 2011</SourceLink> a{" "}
          <SourceLink id="DOI_10_1007_s13143_017_0010_y">Spencer et al., 2017</SourceLink>
        </p>

        <h3>6. Staré a nové kanály dostanou stejnou výškovou citlivost</h3>
        <p>
          Původní MSU, novější AMSU-A a dnešní ATMS nemají zcela stejné kanály. Pro dolní stratosféru se spojuje
          MSU kanál 4, AMSU-A kanál 9 a ATMS kanál 10. Ve střední a horní stratosféře se několik užších kanálů
          AMSU-A matematicky složí tak, aby napodobily široké váhové funkce SSU1, SSU2 a SSU3. Druhý nezávislý
          postup aplikuje tytéž funkce na podrobnější profily přístroje MLS. Obě pokračování původního SSU pak lze
          přímo porovnat.{" "}
          <SourceLink id="DOI_10_1175_jtech_d_16_0018_1">Zou &amp; Qian, 2016</SourceLink> a{" "}
          <SourceLink id="DOI_10_1175_jcli_d_15_0629_1">Randel et al., 2016</SourceLink>
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
          <SourceLink id="DOI_10_1029_2010jd014954">Mears et al., 2011</SourceLink> a{" "}
          <SourceLink id="DOI_10_1175_jcli_d_19_0998_1">Steiner et al., 2020</SourceLink>
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
              <SourceLink id="WEB_NOAA_Radiosonde_Atmospheric_Temperature_Products_for_d1952dde">
                Popis a stažení
              </SourceLink>
              {" · "}
              <SourceLink id="DOI_10_7289_v5sf2t7j">DOI dat</SourceLink>
              {" · "}
              <SourceLink id="DOI_10_1029_2005jd006169">Metodická práce</SourceLink>
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
              <SourceLink id="WEB_Remote_Sensing_Systems_Remote_Sensing_Systems_25160e34">Data RSS</SourceLink>
              {" · "}
              <SourceLink id="DOI_10_1175_2008jtecha1176_1">Metoda</SourceLink>
              {" · "}
              <SourceLink id="DOI_10_1029_2010jd014954">Nejistota</SourceLink>
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
              <SourceLink id="WEB_NOAA_Mean_Layer_Temperature_NOAA_CDR_743b717d">
                Produkt a dokumentace
              </SourceLink>
              {" · "}
              <SourceLink id="DOI_10_25921_tn91_wv50">DOI dat</SourceLink>
              {" · "}
              <SourceLink id="WEB_NOAA_Center_for_Satellite_Applications_and_Research_N_c3fa6ee2">
                Přímé soubory
              </SourceLink>
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
              <SourceLink id="WEB_nsstc_uah_edu_Index_of_data_msu_9b9f4900">Data UAH</SourceLink>
              {" · "}
              <SourceLink id="DOI_10_1007_s13143_017_0010_y">Metodická práce</SourceLink>
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
              <SourceLink id="WEB_NOAA_Center_for_Satellite_Applications_and_Research_N_aabcb47e">
                NOAA SSU+AMSU
              </SourceLink>
              {" · "}
              <SourceLink id="DOI_10_1175_jtech_d_16_0018_1">Metoda NOAA</SourceLink>
              {" · "}
              <SourceLink id="DOI_10_1175_jcli_d_15_0629_1">Metoda NCAR</SourceLink>
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
              <SourceLink id="WEB_University_Corporation_for_A_RO_Climate_Data_Record_Constellation_Observing_S_03516764">
                Popis a stažení dat
              </SourceLink>
              {" · "}
              <SourceLink id="DOI_10_5194_amt_13_3081_2020">Vyhodnocení dat</SourceLink>
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
            <SourceLink id="WEB_University_Corporation_for_A_Stratospheric_Temperature_Satellite_Datasets_Use_394cf021">
              Původní graf, data a úplný kredit
            </SourceLink>
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
          <SourceLink id="DOI_10_1175_jcli_d_19_0998_1">Steiner et al., 2020</SourceLink>
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
          <SourceLink id="DOI_10_1029_2008jd010421">Randel et al., 2009</SourceLink>,{" "}
          <SourceLink id="DOI_10_1002_2015jd024039">Seidel et al., 2016</SourceLink> a{" "}
          <SourceLink id="DOI_10_1175_jcli_d_19_0998_1">Steiner et al., 2020</SourceLink>
        </p>

        <p>
          Ve střední a horní stratosféře pokračuje pokles i v novější části grafu. Dvě návaznosti původního SSU,
          oranžová SSU+AMSU a modrá SSU+MLS, mají po roce 2004 podobný průběh. Další nezávislé měření přidal
          přístroj Optical Spectrograph and InfraRed Imager System (OSIRIS). Dubé a kol. spojili jeho profily s
          SSU3 a pro období 1979–2021 dostali poblíž 45 kilometrů pokles přibližně 0,6 K za desetiletí.
          Samostatné profily OSIRIS, MLS a infračerveného přístroje Sounding of the Atmosphere using Broadband
          Emission Radiometry (SABER) se pro roky 2005–2021 rovněž shodly na poklesu v horní stratosféře.{" "}
          <SourceLink id="DOI_10_1175_jcli_d_15_0629_1">Randel et al., 2016</SourceLink> a{" "}
          <SourceLink id="DOI_10_5194_acp_24_12925_2024">Dubé et al., 2024</SourceLink>
        </p>

        <p>
          Rádiová zákrytová měření poskytují od roku 2002 podrobnější svislé profily. Jejich období je příliš
          krátké pro přímé zopakování celého výpočtu od roku 1979, ale ve společném období potvrzují pokles v
          dolní stratosféře a umožňují sledovat, jak se změna liší po kilometrových výškách. Výsledky několika
          zpracovatelských center se v globálním a šířkovém průměru navzájem blíží.{" "}
          <SourceLink id="DOI_10_1029_2009gl039777">Steiner et al., 2009</SourceLink> a{" "}
          <SourceLink id="DOI_10_1038_s41612_022_00229_7">Gleisner et al., 2022</SourceLink>
        </p>

        <p>
          Nejnovější uzavřený roční přehled v tomto článku končí rokem 2024. Zpráva State of the Climate uvádí,
          že globální průměr dolní, střední a horní stratosféry se během roku 2024 mírně zvýšil. Celé období
          1979–2024 přesto zůstává ve všech těchto vrstvách klesající. Jeden teplejší rok tedy změnil poslední
          bod křivky, ale neobrátil mnohadesetiletý rozdíl mezi jejím začátkem a koncem.{" "}
          <SourceLink id="WEB_ametsoc_net_State_of_the_Climate_in_2024_Stratospheric_Tempe_d68326f7">
            State of the Climate in 2024
          </SourceLink>
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            Globální teplota dolní, střední i horní stratosféry je nižší než na začátku souvislého pozorování na konci
            roku 1978. V letech 1979–2018 činil pokles podle výškové vrstvy přibližně 0,25 až 0,70 °C za desetiletí,
            což za 39 let odpovídá ochlazení zhruba o 1 °C v dolní a až o 2,7 °C v horní sledované vrstvě. Dolní
            stratosféra prodělala výrazné teplé vrcholy na začátku osmdesátých a devadesátých let a od poloviny
            devadesátých let se ochlazovala pomaleji. Ve střední a horní stratosféře pokračoval pokles také v novější
            části záznamu. Rok 2024 byl proti předchozímu roku mírně teplejší, celý průběh let 1979–2024 však zůstal
            ve všech sledovaných vrstvách klesající.
          </p>
        </div>

        <h2>Prameny, data a licence</h2>
        <div className="article-source-groups">
          <section>
            <h3>Historie a přímá měření</h3>
            <ul>
              <li>
                <SourceLink id="WEB_journals_ametsoc_org_The_International_Aeronautical_Congress_at_Berli_8cb3a239">
                  The International Aeronautical Congress at Berlin
                </SourceLink>
                , dobová zpráva z roku 1902 o balónových měřeních Teisserenca de Borta a Assmanna.
              </li>
              <li>
                Rochas, M. J. (2002):{" "}
                <SourceLink id="DOI_10_4267_2042_36222">
                  Le contexte scientifique de la surprenante découverte de la stratosphère
                </SourceLink>
                .
              </li>
              <li>
                Baldwin, M. P. et al. (2019):{" "}
                <SourceLink id="DOI_10_1175_amsmonographs_d_19_0003_1">
                  100 Years of Progress in Understanding the Stratosphere and Mesosphere
                </SourceLink>
                .
              </li>
              <li>
                WMO:{" "}
                <SourceLink id="WEB_World_Meteorological_Organiz_Guide_to_Instruments_and_Methods_of_Observation_93c4c4a4">
                  Guide to Instruments and Methods of Observation
                </SourceLink>
                , kapitola o měření ve volné atmosféře.
              </li>
              <li>
                Durre, I. et al. (2018):{" "}
                <SourceLink id="DOI_10_1175_jtech_d_17_0223_1">
                  Overview of the Integrated Global Radiosonde Archive Version 2
                </SourceLink>
                .
              </li>
            </ul>
          </section>

          <section>
            <h3>Metodické práce</h3>
            <ul>
              <li>
                Lanzante, J. R. et al. (2003):{" "}
                <SourceLink id="DOI_10_1175_1520_0442_2003_016_0224_thomrt_2_0_co_2">
                  Temporal Homogenization of Monthly Radiosonde Temperature Data
                </SourceLink>
                .
              </li>
              <li>
                Free, M. et al. (2004):{" "}
                <SourceLink id="DOI_10_1175_jcli3198_1">
                  Using First Differences to Reduce Inhomogeneity in Radiosonde Temperature Datasets
                </SourceLink>
                .
              </li>
              <li>
                Free, M. et al. (2005):{" "}
                <SourceLink id="DOI_10_1029_2005jd006169">
                  Radiosonde Atmospheric Temperature Products for Assessing Climate
                </SourceLink>
                .
              </li>
              <li>
                Thorne, P. W. et al. (2005):{" "}
                <SourceLink id="DOI_10_1029_2004jd005753">
                  Revisiting radiosonde upper-air temperatures from 1958 to 2002
                </SourceLink>
                .
              </li>
              <li>
                Haimberger, L. (2007):{" "}
                <SourceLink id="DOI_10_1175_jcli4050_1">
                  Homogenization of Radiosonde Temperature Time Series
                </SourceLink>
                .
              </li>
              <li>
                Haimberger, L. et al. (2012):{" "}
                <SourceLink id="DOI_10_1175_jcli_d_11_00668_1">
                  Homogenization of the Global Radiosonde Temperature Dataset through Combined Comparison with Reanalysis
                </SourceLink>
                .
              </li>
              <li>
                Mears, C. A. &amp; Wentz, F. J. (2009):{" "}
                <SourceLink id="DOI_10_1175_2008jtecha1176_1">
                  Construction of the RSS Atmospheric Temperature Records from the MSU and AMSU Microwave Sounders
                </SourceLink>
                .
              </li>
              <li>
                Mears, C. A. et al. (2011):{" "}
                <SourceLink id="DOI_10_1029_2010jd014954">
                  Assessing uncertainty in estimates of atmospheric temperature changes from MSU and AMSU
                </SourceLink>
                .
              </li>
              <li>
                Zou, C.-Z. et al. (2014):{" "}
                <SourceLink id="DOI_10_1002_2014jd021603">
                  Recalibration and merging of SSU observations for stratospheric temperature trend studies
                </SourceLink>
                .
              </li>
              <li>
                Zou, C.-Z. &amp; Qian, H. (2016):{" "}
                <SourceLink id="DOI_10_1175_jtech_d_16_0018_1">
                  Stratospheric Temperature Climate Data Record from Merged SSU and AMSU-A Observations
                </SourceLink>
                .
              </li>
              <li>
                Spencer, R. W. et al. (2017):{" "}
                <SourceLink id="DOI_10_1007_s13143_017_0010_y">
                  UAH Version 6 Global Satellite Temperature Products
                </SourceLink>
                .
              </li>
              <li>
                Gleisner, H. et al. (2020):{" "}
                <SourceLink id="DOI_10_5194_amt_13_3081_2020">
                  Evaluation of the 15-year ROM SAF monthly mean GPS radio occultation climate data record
                </SourceLink>
                .
              </li>
            </ul>
          </section>

          <section>
            <h3>Práce vyhodnocující pozorování</h3>
            <ul>
              <li>
                Randel, W. J. et al. (2009):{" "}
                <SourceLink id="DOI_10_1029_2008jd010421">
                  An update of observed stratospheric temperature trends
                </SourceLink>
                .
              </li>
              <li>
                Randel, W. J. et al. (2016):{" "}
                <SourceLink id="DOI_10_1175_jcli_d_15_0629_1">
                  Stratospheric Temperature Trends over 1979–2015 Derived from Combined SSU, MLS, and SABER Observations
                </SourceLink>
                .
              </li>
              <li>
                Seidel, D. J. et al. (2016):{" "}
                <SourceLink id="DOI_10_1002_2015jd024039">
                  Stratospheric temperature changes during the satellite era
                </SourceLink>
                .
              </li>
              <li>
                Steiner, A. K. et al. (2020):{" "}
                <SourceLink id="DOI_10_1175_jcli_d_19_0998_1">
                  Observed Temperature Changes in the Troposphere and Stratosphere from 1979 to 2018
                </SourceLink>
                .
              </li>
              <li>
                Gleisner, H. et al. (2022):{" "}
                <SourceLink id="DOI_10_1038_s41612_022_00229_7">
                  Monitoring global climate change using GNSS radio occultation
                </SourceLink>
                .
              </li>
              <li>
                Dubé, K. et al. (2024):{" "}
                <SourceLink id="DOI_10_5194_acp_24_12925_2024">
                  Upper-stratospheric temperature trends: new results from OSIRIS
                </SourceLink>
                .
              </li>
              <li>
                Randel, W. J. et al. (2025):{" "}
                <SourceLink id="WEB_ametsoc_net_State_of_the_Climate_in_2024_Stratospheric_Tempe_d68326f7">
                  State of the Climate in 2024: Stratospheric Temperature
                </SourceLink>
                .
              </li>
            </ul>
          </section>

          <section>
            <h3>Data ke stažení</h3>
            <ul>
              <li>
                <SourceLink id="WEB_NOAA_Radiosonde_Atmospheric_Temperature_Products_for_d1952dde">
                  RATPAC v2
                </SourceLink>
                : měsíční radiosondové hodnoty od roku 1958.
              </li>
              <li>
                <SourceLink id="WEB_Remote_Sensing_Systems_Remote_Sensing_Systems_25160e34">RSS TLS v4.0</SourceLink>: měsíční
                globální, regionální a mřížková data dolní stratosféry.
              </li>
              <li>
                <SourceLink id="WEB_NOAA_Mean_Layer_Temperature_NOAA_CDR_743b717d">
                  NOAA STAR TLS v5.0
                </SourceLink>
                : mřížková data MSU, AMSU-A a ATMS.
              </li>
              <li>
                <SourceLink id="WEB_nsstc_uah_edu_Index_of_data_msu_9b9f4900">UAH TLS v6.1</SourceLink>: textové a
                mřížkové soubory dolní stratosféry.
              </li>
              <li>
                <SourceLink id="WEB_NOAA_Center_for_Satellite_Applications_and_Research_N_aabcb47e">
                  NOAA SSU+AMSU v3.0
                </SourceLink>
                : střední a horní stratosféra.
              </li>
              <li>
                <SourceLink id="WEB_University_Corporation_for_A_RO_Climate_Data_Record_Constellation_Observing_S_03516764">
                  CDAAC GNSS-RO
                </SourceLink>
                : měsíční profily teploty, úhlu ohybu a indexu lomu od roku 2002.
              </li>
              <li>
                <SourceLink id="WEB_University_Corporation_for_A_Stratospheric_Temperature_Satellite_Datasets_Use_394cf021">
                  NCAR Climate Data Guide
                </SourceLink>
                : aktuální rozcestník verzí, odborné pokyny a srovnávací grafy.
              </li>
            </ul>
          </section>

          <section>
            <h3>Obrázky a práva k použití</h3>
            <ul>
              <li>
                Profil atmosféry: NOAA JetStream.{" "}
                <SourceLink id="WEB_NOAA_Layers_of_the_Atmosphere_29f17d10">
                  Původní obrázek
                </SourceLink>
                . Použit beze změny jako materiál NOAA ve veřejné doméně.
              </li>
              <li>
                Historická fotografie radiosondy: U.S. Army Air Forces / NOAA Photo Library. Použita beze změny
                jako materiál vlády USA ve veřejné doméně.
              </li>
              <li>
                Váhové funkce a srovnávací graf: William Randel, NSF NCAR Climate Data Guide.{" "}
                <SourceLink id="WEB_University_Corporation_for_A_Stratospheric_Temperature_Satellite_Datasets_Use_394cf021">
                  Zdroj, kredit a odborný kontext
                </SourceLink>
                . Oba soubory jsou převzaty beze změny; zdrojová stránka uvádí „Usage Restrictions: None“.
              </li>
              <li>
                NOAA uvádí, že její materiály lze bez zvláštního svolení použít, pokud u položky není uvedeno
                jinak; požaduje uvedení zdroje a zakazuje dojem oficiálního schválení.{" "}
                <SourceLink id="WEB_NOAA_NOAA_s_National_Ocean_Service_About_Us_4ba21b52">
                  Pravidla použití NOAA
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
