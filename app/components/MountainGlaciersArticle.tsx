import Image from "next/image";
import { SourceLink } from "./SourceLink";

export function MountainGlaciersArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>Hmotnostní bilance</dt>
            <dd>Změna hmotnosti ledovce mezi dvěma určenými daty. Kladná hodnota znamená přírůstek, záporná úbytek.</dd>
          </div>
          <div>
            <dt>Vodní ekvivalent</dt>
            <dd>Hmotnostní změna přepočtená na vrstvu vody. Jeden metr vodního ekvivalentu odpovídá 1 000 kg na m².</dd>
          </div>
          <div>
            <dt>Výškový model</dt>
            <dd>Digitální mapa nadmořské výšky povrchu. Rozdíl dvou takových map ukazuje, kde ledovec zesílil nebo zeslábl.</dd>
          </div>
          <div>
            <dt>Gigatuna</dt>
            <dd>Jedna miliarda tun, tedy 10¹² kg. Jedna gigatuna vody má objem přibližně jeden kilometr krychlový.</dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Poloha čela se měří v metrech, plocha v km², změna výšky v metrech, bilance v metrech vodního ekvivalentu a
          celková hmotnostní změna v gigatunách. Tato čísla popisují různé vlastnosti ledovce.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Horský ledovec je dlouhodobě přetrvávající masa ledu, která vznikla na souši ze sněhu a pod vlastní vahou
          pomalu teče. Pozorujeme polohu jeho čela, obrys, výšku povrchu a změnu hmotnosti. Výsledkem je záznam o tom, zda
          se ledovec mezi určenými daty prodloužil či zkrátil, zvětšil či zmenšil, zesílil či zeslábl a kolik hmotnosti
          získal nebo ztratil.
        </p>

        <p>
          Tato definice a rozdělení měřených veličin odpovídají mezinárodnímu glaciologickému slovníku, metodickému
          průvodci Světové meteorologické organizace a současným globálním vyhodnocením WGMS. Slovo „ledovec“ v nich
          zahrnuje údolní ledovce, menší ledové čapky a ledová pole vzniklá na souši. V globálních součtech se hodnotí
          ledovce mimo hlavní grónský a antarktický ledový příkrov; započítávají se však samostatné ledovce na jejich
          okrajích. <SourceLink id="WEB_World_Glacier_Monitoring_Ser_glosar_UNESCO_a_WGMS_06fc9a79">Cogley et al., 2011</SourceLink>,{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">WMO, 2024</SourceLink> a{" "}
          <SourceLink id="DOI_10_1038_s41586_024_08545_z">GlaMBIE Team, 2025</SourceLink>
        </p>

        <p>
          Délka, plocha a hmotnost se nemusejí měnit stejným tempem. Poloha čela reaguje také na rychlost proudění ledu
          a na tvar údolí; čelo některého ledovce se proto může dočasně posunout dopředu, i když ledovec jako celek
          ztrácí hmotnost. Hmotnostní bilance naproti tomu porovnává množství ledu a sněhu na začátku a na konci přesně
          vymezeného období. Při čtení výsledku je tedy vždy nutné uvést veličinu, oblast a období měření. Tento rozdíl
          podrobně vymezuje <SourceLink id="WEB_World_Glacier_Monitoring_Ser_glosar_UNESCO_a_WGMS_06fc9a79">glosář UNESCO a WGMS</SourceLink>.
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/mountain-glaciers/usgs-grinnell-1938-2019.jpg"
            alt="Grinnellův ledovec fotografovaný ze stejného stanoviště v letech 1938 a 2019"
            width={2000}
            height={1500}
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption>
            Grinnellův ledovec v americké Montaně v letech 1938 a 2019, fotografovaný z vrcholu Mount Gould. Snímek
            ukazuje změnu jednoho konkrétního ledovce. Opakovaná fotografie zachytí polohu čela a viditelný rozsah ledu;
            sama o sobě však neurčí změnu hmotnosti ani vývoj ledovců v jiných oblastech. Fotografie: T. J. Hileman,
            Glacier National Park Archives, a Lisa
            McKeon, USGS. Zdroj: <SourceLink id="WEB_U_S_Geological_Survey_Grinnell_Glacier_Pair_248d244b">USGS</SourceLink>;
            licence: volné dílo.
          </figcaption>
        </figure>

        <h2>Historie pozorování</h2>
        <p>
          Nejstarší dlouhé záznamy sledují čelo ledovce. Jeho polohu bylo možné určit podle značek v terénu, měřických
          bodů, map, obrazů a později fotografií. Mezinárodně koordinované sledování začalo roku 1894 založením
          Mezinárodní komise pro ledovce v Curychu; François-Alphonse Forel zveřejnil první společný přehled v roce 1895.
          Původním cílem bylo každoročně shromažďovat posuny čel z různých zemí podle srovnatelného postupu. Historii
          sítě dokládají <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WGMS_2020_6e490990">WGMS, 2020</SourceLink> a{" "}
          <SourceLink id="DOI_10_3189_2015jog15j017">Zemp et al., 2015</SourceLink>.
        </p>

        <p>
          Přímé každoroční měření hmotnostní bilance se rozšířilo po druhé světové válce. Nejdelší nepřerušené moderní
          měření celého ledovce začalo na švédském Storglaciären v glaciologickém roce 1945/46. Valter Schytt popsal
          prvních šestnáct let tohoto programu už v roce 1962. V terénu se od té doby
          opakovaně měří množství zimního sněhu a letní úbytek ledu. Dlouhé záznamy z jednotlivých ledovců zachycují
          změny rok po roce, jejich počet je však malý ve srovnání s množstvím ledovců na Zemi. Historický původ a
          terminologii shrnují <SourceLink id="DOI_10_3189_s002214300002757x">Schytt, 1962</SourceLink> a{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_glosar_UNESCO_a_WGMS_06fc9a79">Cogley et al., 2011</SourceLink>.
        </p>

        <p>
          Letecké snímkování a přesné mapování přidaly možnost porovnat výšku celého povrchu. Od sedmdesátých let se
          postupně připojily družice a od roku 2000 poskytl archiv stereoskopických snímků ASTER opakované výškové mapy
          téměř všech ledovcových oblastí. Hugonnet a kol. z těchto snímků vypočítali stejným postupem změny výšky pro
          roky 2000–2019. Jejich výsledek už nevycházel jen z několika dobře dostupných ledovců, ale z družicového
          pokrytí celého světa. <SourceLink id="DOI_10_1038_s41586_021_03436_z">Hugonnet et al., 2021</SourceLink>
        </p>

        <p>
          Dnešní globální přehled spojuje obě tradice. Každoroční terénní měření popisují průběh jednotlivých let;
          družicové změny výšky určují dlouhodobý úbytek u přibližně 200 000 ledovců. Dussaillant a kol. tento postup
          použili pro roční hodnoty 1976–2024 a WGMS jej v roce 2026 doplnila o glaciologický rok 2025.{" "}
          <SourceLink id="DOI_10_5194_essd_17_1977_2025">Dussaillant et al., 2025</SourceLink> a{" "}
          <SourceLink id="DOI_10_1038_s43017_026_00777_z">WGMS Network, 2026</SourceLink>
        </p>

        <p>
          Glaciologický rok sleduje celý cyklus od začátku zimního hromadění sněhu do konce následujícího léta. V tomto
          globálním produktu znamená rok 2025 na severní polokouli období od 1. října 2024 do 30. září 2025, na jižní
          polokouli od 1. dubna 2024 do 31. března 2025 a v tropech kalendářní rok 2025. Rok v grafu proto není ve všech
          oblastech totožný s kalendářním rokem, ale vždy obsahuje jeden úplný sezónní cyklus.{" "}
          <SourceLink id="DOI_10_5194_essd_17_1977_2025">Dussaillant et al., 2025, oddíl 2.2</SourceLink>
        </p>

        <h2>Jak vzniká zveřejněný záznam</h2>
        <h3>Poloha čela a plocha</h3>
        <p>
          Poloha čela se určuje vůči pevnému bodu nebo podél předem stanovené osy. Starší záznamy vznikaly pásmem,
          teodolitem a opakovanou fotografií; dnes se používá také přesná družicová poloha a snímky z letadel či družic.
          Z obrysu ledovce lze vypočítat plochu. U suti na povrchu, trvalých sněhových polí a navazujících ledovců však
          nemusí být hranice na snímku jednoznačná, proto k obrysu patří datum, zdroj obrazu a popis kvality mapování. Na
          tato omezení upozorňují <SourceLink id="DOI_10_3189_2015jog15j017">Zemp et al., 2015</SourceLink> a dokumentace{" "}
          <SourceLink id="WEB_National_Snow_and_Ice_Data_C_Randolph_Glacier_Inventory_A_Dataset_of_Global_G_4155a535">Randolph Glacier Inventory v7</SourceLink>.
        </p>

        <h3>Tyče, sondy a sněhové jámy</h3>
        <p>
          Při přímém glaciologickém měření jsou body rozmístěny od spodní části ledovce po jeho nejvyšší část. Na jaře
          se sondou zjišťuje hloubka zimního sněhu a ve sněhové jámě nebo jádru také jeho hustota. Na podzim se u tyčí
          zavrtaných do ledu odečte, o kolik klesl povrch. Hloubka a hustota sněhu se v každém bodě převedou na hmotnost vody
          na metr čtvereční. Standardní postup popisují <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">WMO, 2024</SourceLink> a{" "}
          <SourceLink id="DOI_10_1017_jog_2019_66">O’Neel et al., 2019</SourceLink>.
        </p>

        <p>
          Bodová měření se následně rozloží přes celou plochu ledovce, obvykle podle výškových pásem. Výsledkem je
          průměrná změna hmotnosti na metr čtvereční, vyjádřená v metrech vodního ekvivalentu. Hodnota −1 m vodního
          ekvivalentu znamená, že ledovec za dané období ztratil v průměru 1 000 kg na každý metr čtvereční své plochy;
          nejde nutně o přesně jeden metr ledu, protože čerstvý sníh, starší zrnitý sníh zvaný firn a led mají různou
          hustotu. Celková změna hmotnosti
          vznikne vynásobením plošného průměru plochou ledovce.
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/mountain-glaciers/usgs-ablation-stake.jpg"
            alt="Výrazně odkrytá měřicí tyč na Wolverine Glacier na Aljašce"
            width={4032}
            height={3024}
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption>
            Měřicí tyč na Wolverine Glacier na Aljašce na konci léta. Tyč byla na začátku období zasazena pod povrch;
            délka odkryté části dovoluje odečíst úbytek sněhu a ledu v tomto bodě. Fotografie: Emily Baker, USGS. Zdroj:{" "}
            <SourceLink id="WEB_U_S_Geological_Survey_Ablation_Stake_on_Wolverine_Glacier_276f80c5">USGS</SourceLink>;
            licence: volné dílo.
          </figcaption>
        </figure>

        <h3>Rozdíl dvou výškových map</h3>
        <p>
          Měření označované jako geodetická metoda začíná dvěma výškovými modely téhož ledovce z různých dat. Po přesném vzájemném zarovnání se
          v každém místě odečte starší výška od novější. Kladný rozdíl značí zesílení, záporný zeslabení. Součet změn
          přes celý obrys poskytne změnu objemu. Postup vyžaduje opravit posun map, odfiltrovat mraky a chybné body a
          odhadnout místa, kde výška chybí. Základní korekce popsali{" "}
          <SourceLink id="DOI_10_5194_tc_5_271_2011">Nuth &amp; Kääb, 2011</SourceLink>; globální zpracování použili{" "}
          <SourceLink id="DOI_10_1038_s41586_021_03436_z">Hugonnet et al., 2021</SourceLink>.
        </p>

        <p>
          Družice měří výšku, nikoli přímo hmotnost. Změna objemu se proto násobí odhadem hustoty materiálu, který
          přibyl nebo zmizel. Pro víceleté geodetické období se běžně používá 850 ± 60 kg na m³; pro krátké intervaly
          může být převod podstatně méně spolehlivý, protože se mění podíl sněhu, firnu a ledu. Huss proto doporučuje
          tento převod pro dostatečně dlouhá období a Dussaillant a kol. do svého globálního výpočtu nepřijímají
          geodetická období kratší než pět let. <SourceLink id="DOI_10_5194_tc_7_877_2013">Huss, 2013</SourceLink> a{" "}
          <SourceLink id="DOI_10_5194_essd_17_1977_2025">Dussaillant et al., 2025</SourceLink>
        </p>

        <h3>Od jednotlivých ledovců ke globálnímu součtu</h3>
        <p>
          Současný každoroční produkt WGMS využívá terénní měření k odhadu, jak se hmotnost měnila rok po roce i u
          okolních ledovců bez pravidelných návštěv. Tento roční průběh pak upraví tak, aby jeho součet odpovídal
          dlouhodobé změně výšky, kterou u jednotlivých ledovců změřily družice. Výsledkem je odhad pro každý rok a každý
          zahrnutý ledovec: terénní data ukazují, ve kterých letech byl úbytek v oblasti větší nebo menší, zatímco
          výškové mapy určují celkovou změnu za delší období. Metodu, ověření vynecháním části stanic i výpočet nejistot
          zveřejnili <SourceLink id="DOI_10_5194_essd_17_1977_2025">Dussaillant et al., 2025</SourceLink>.
        </p>

        <p>
          Přibližně 207 000 ledovců s geodetickým měřením představuje 96 % světové zaledněné plochy v tomto produktu.
          Ledovcům bez přímého geodetického záznamu se přiřadí průměr příslušné oblasti. Jednotlivé výsledky se násobí
          plochou, sečtou do 19 světových oblastí a nakonec do globální hodnoty v gigatunách. Nejistota zahrnuje chybu
          výšky, převod objemu na hmotnost, řídkost terénních měření a změnu plochy; roste tam, kde jsou pozorované
          ledovce vzdálenější. <SourceLink id="DOI_10_5194_essd_17_1977_2025">Dussaillant et al., 2025, metodika a ověření</SourceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div
            className="article-figure__scroll"
            tabIndex={0}
            aria-label="Vodorovně posuvná mapa míst terénního a družicového měření ledovců"
          >
            <Image
              className="article-figure__media"
              src="/media/mountain-glaciers/copernicus-observation-locations-2026.png"
              alt="Mapa světa s přibližně 500 terénně měřenými a 200 000 družicově měřenými ledovci"
              width={10369}
              height={8187}
              sizes="(max-width: 900px) 1400px, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Žluté body označují přibližně 500 ledovců s glaciologickým terénním měřením, světle modré body přibližně
            200 000 ledovců s geodetickým družicovým měřením. Mapa ukazuje rozdíl v prostorovém pokrytí obou metod;
            překrývající se body mohou na této velikosti splývat. Data: WGMS, RGI 6.0 a GTN-G; graf: C3S/ECMWF/WGMS,
            2026. Zdroj: <SourceLink id="WEB_Copernicus_Glaciers_Copernicus_5ae74590">Copernicus Climate Indicator: Glaciers, obr. 3b</SourceLink>.
          </figcaption>
        </figure>

        <h3>Co znamená uvedená nejistota</h3>
        <p>
          Interval nejistoty není připojen až k hotovému globálnímu číslu. Vzniká už u výškových map, hustotního
          převodu a odhadu ročního průběhu v místech bez terénního měření. Při součtu se zohledňuje, že chyby blízkých
          ledovců mohou být podobné. Dussaillant a kol. ověřovali prostorové doplňování tak, že část pozorování
          opakovaně vynechali a porovnali odhad se skrytou hodnotou. U produktu 1976–2024 uvádějí intervaly jako jednu
          směrodatnou odchylku. <SourceLink id="DOI_10_5194_essd_17_1977_2025">Dussaillant et al., 2025</SourceLink>
        </p>

        <p>
          Druhý globální projekt GlaMBIE spojil 233 odhadů od 35 výzkumných týmů a čtyři typy pozorování: terénní
          měření, rozdíly výškových modelů, družicové výškoměry a družicové měření změn gravitačního pole. Autoři
          upozorňují, že některé vstupy sdílejí stejné snímky nebo podobné postupy, a jejich chyby tedy nejsou zcela
          nezávislé. Náhodná nejistota může být proto spíše dolní hranicí skutečné nejistoty oblasti; známé systematické
          rozdíly mezi metodami zůstávají předmětem srovnání. <SourceLink id="DOI_10_1038_s41586_024_08545_z">GlaMBIE Team, 2025</SourceLink>
        </p>

        <h2>Zveřejňovaná data</h2>
        <div className="article-data-list">
          <section className="article-data-item">
            <p className="eyebrow">Jednotlivá pozorování</p>
            <h3>Fluctuations of Glaciers</h3>
            <p>
              Databáze WGMS obsahuje polohu čela, plochu, objem, terénní i geodetickou hmotnostní bilanci a popis metod
              jednotlivých ledovců. Vydání z 10. února 2026 zahrnuje historické i současné záznamy; stažení je dostupné
              jako archiv tabulek CSV a má přidělené trvalé DOI.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="DOI_10_5904_wgms_fog_2026_02_10">Data FoG 2026</SourceLink>{" "}
              <SourceLink id="WEB_World_Glacier_Monitoring_Ser_database_versions_world_glacier_monitoring_servi_ccf7faf7">Všechna vydání a dokumentace</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <p className="eyebrow">Obrysy</p>
            <h3>Randolph Glacier Inventory v7 a GLIMS</h3>
            <p>
              RGI v7 poskytuje jeden globální soubor obrysů jednotlivých ledovců přibližně pro rok 2000, rozdělený také
              podle oblastí. Jde o referenční snímek, nikoli o souvislý záznam změny plochy každého ledovce. Databáze
              GLIMS naproti tomu uchovává obrysy z různých dat a je vhodná pro vyhledání opakovaných mapování, jejich
              časové pokrytí však není všude stejné.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="DOI_10_5067_f6jmovy5navz">RGI v7: data a příručka</SourceLink>{" "}
              <SourceLink id="WEB_glims_org_GLIMS_Glacier_Database_2d3c95bb">GLIMS: databáze a stažení</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <p className="eyebrow">Roční globální hodnoty</p>
            <h3>Annual Mass Change Estimates 1976–2025</h3>
            <p>
              WGMS zveřejňuje roční změnu hmotnosti pro jednotlivé ledovce, mřížku po 0,5°, 19 oblastí i celý svět.
              Aktuální vydání končí glaciologickým rokem 2025 a vzniká spojením terénního ročního průběhu s
              dlouhodobými geodetickými změnami. Data lze stáhnout přímo od WGMS nebo z Copernicus Climate Data Store.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="DOI_10_5904_wgms_amce_2026_02_10">WGMS AMCE 2026</SourceLink>{" "}
              <SourceLink id="DOI_10_24381_cds_ba597449">Copernicus CDS</SourceLink>{" "}
              <SourceLink id="DOI_10_5194_essd_17_1977_2025">Metodická studie</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <p className="eyebrow">Nezávislé globální odhady</p>
            <h3>GlaMBIE a Hugonnet et al.</h3>
            <p>
              GlaMBIE zpřístupňuje vstupy i kombinované regionální hodnoty čtyř pozorovacích metod pro roky 2000–2023.
              Hugonnet a kol. zveřejnili změny výšky a hmotnosti pro jednotlivé ledovce, mapové dlaždice i globální
              součty pro roky 2000–2019. Oba soubory dovolují zkontrolovat globální výsledek postupem odlišným od
              každoročního produktu WGMS.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="DOI_10_5904_wgms_glambie_2024_07">Data GlaMBIE</SourceLink>{" "}
              <SourceLink id="DOI_10_6096_13">Data Hugonnet et al.</SourceLink>{" "}
              <SourceLink id="WEB_GitHub_GitHub_rhugonnet_ww_tvol_study_Process_global_sc_300ee76a">Kód Hugonnet et al.</SourceLink>
            </p>
          </section>
        </div>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/mountain-glaciers/copernicus-annual-mass-1976-2025.png"
            alt="Sloupcový graf roční globální změny hmotnosti ledovců od roku 1976 do roku 2025"
            width={1440}
            height={1098}
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption>
            Roční globální změna hmotnosti ledovců v letech 1976–2025 v gigatunách. Modré sloupce označují rok s
            přírůstkem, červené rok s úbytkem; nula znamená stejnou celkovou hmotnost na začátku a konci daného
            glaciologického roku. Graf neukazuje interval nejistoty jednotlivých let, proto jsou přesná čísla v textu
            uváděna s nejistotou z primární studie. Data: WGMS; graf: C3S/ECMWF/WGMS, 2026. Zdroj:{" "}
            <SourceLink id="WEB_Copernicus_Glaciers_Copernicus_5ae74590">Copernicus Climate Indicator: Glaciers, obr. 1</SourceLink>.
          </figcaption>
        </figure>

        <h2>Srovnání měřicích postupů</h2>
        <p>
          Terénní metoda poskytuje každoroční a často i zimní a letní bilanci konkrétního ledovce, ale globální síť je
          řídká. Rozdíl výškových modelů pokrývá téměř celý svět a spolehlivě určuje dlouhodobou změnu, avšak mezi dvěma
          mapami sám nerozliší jednotlivé roky a potřebuje převod objemu na hmotnost. Družicový výškoměr sleduje změny
          podél drah družice. Gravitační mise odvozují změnu hmotnosti z proměn gravitačního pole, ale až pro oblasti o
          rozměru stovek kilometrů. Každý postup tak poskytuje jinou kombinaci podrobnosti v čase a prostoru.{" "}
          <SourceLink id="DOI_10_1038_s41586_024_08545_z">GlaMBIE Team, 2025</SourceLink>
        </p>

        <p>
          GlaMBIE nejprve sjednotila období, plochu a jednotky 233 regionálních odhadů. Poté oddělila dlouhodobou změnu
          od meziročního kolísání a spojila výsledky po metodách i mezi metodami. Rozdíly často spadaly do uváděných
          intervalů nejistoty, v některých oblastech však zůstaly systematické odchylky. Globální součet proto není
          prostým průměrem všech publikovaných čísel a shoda na celosvětové hodnotě sama nezaručuje shodu v každém
          pohoří. <SourceLink id="DOI_10_1038_s41586_024_08545_z">GlaMBIE Team, 2025</SourceLink>
        </p>

        <h2 id="pozorovani">Pozorování</h2>
        <p>
          Dlouhodobá měření ukazují dvě souběžné změny: čela ledovců jsou ve většině sledovaných oblastí dále proti
          směru toku než v minulosti a celková hmotnost světových ledovců klesá. Jednotlivé ledovce i oblasti mají
          odlišný průběh a v některých desetiletích se část čel posouvala dopředu. Globální převaha ústupu je však v
          souboru přibližně 42 000 změn čela od roku 1600 patrná v měřítku staletí.{" "}
          <SourceLink id="DOI_10_3189_2015jog15j017">Zemp et al., 2015</SourceLink>
        </p>

        <p>
          Nejnovější každoroční vyhodnocení WGMS uvádí pro glaciologický rok 2025 globální změnu −408 ± 132 Gt. Záporné
          znaménko znamená, že součet ztracené hmotnosti byl o tuto hodnotu větší než součet přírůstků. Od začátku
          výpočtu v roce 1975 činí kumulovaná změna −9 583 ± 1 211 Gt. Šest největších ročních úbytků celého záznamu
          nastalo během sedmi let 2019–2025. <SourceLink id="DOI_10_1038_s43017_026_00777_z">WGMS Network, 2026</SourceLink>
        </p>

        <p>
          Velikost těchto čísel je srozumitelnější po převodu na objem vody. Jedna gigatuna je miliarda tun a přibližně jeden kilometr krychlový
          vody. Úbytek 408 Gt v roce 2025 tedy odpovídá asi 408 km³ vody rozložené mezi ledovce světa. Kumulovaných
          9 583 Gt odpovídá 26,4 ± 3,3 mm globální střední hladiny moře; roční hodnota 2025 odpovídá 1,1 ± 0,4 mm. Tento
          přepočet popisuje tentýž hmotnostní úbytek v jiné jednotce, nikoli samostatné měření hladiny.{" "}
          <SourceLink id="DOI_10_1038_s43017_026_00777_z">WGMS Network, 2026</SourceLink>
        </p>

        <p>
          Nezávislé globální zpracování družicových výškových map zjistilo pro roky 2000–2019 průměrný úbytek 267 ± 16
          Gt za rok. Autoři současně vyčíslili, že tempo úbytku se během těchto dvou desetiletí zvyšovalo o 48 ± 16 Gt za
          rok za desetiletí. Tento výsledek vznikl z opakovaných stereoskopických snímků ASTER a byl ověřován vůči
          přesnějším regionálním měřením. <SourceLink id="DOI_10_1038_s41586_021_03436_z">Hugonnet et al., 2021</SourceLink>
        </p>

        <p>
          GlaMBIE pro překrývající se, ale delší období 2000–2023 spojila čtyři měřicí postupy. Výsledkem je −6 542 ±
          387 Gt za celé období, v průměru −273 ± 16 Gt za rok. Průměrný roční úbytek vzrostl z 231 ± 23 Gt v letech
          2000–2011 na 314 ± 23 Gt v letech 2012–2023, tedy o 36 ± 10 %. Shoda s družicovým odhadem pro roky 2000–2019
          se týká globální velikosti; GlaMBIE současně nachází větší rozdíly mezi metodami v některých jednotlivých
          oblastech. <SourceLink id="DOI_10_1038_s41586_024_08545_z">GlaMBIE Team, 2025</SourceLink>
        </p>

        <p>
          Úbytek není mezi oblastmi rozdělen rovnoměrně. V letech 2000–2023 ztratilo hmotnost všech 19 oblastí GlaMBIE.
          Největší podíl globálního úbytku v gigatunách připadal na Aljašku (22 %), kanadskou Arktidu (20 %), okrajové
          ledovce Grónska (13 %) a jižní Andy (10 %). Vzhledem k počáteční hmotnosti byly největší relativní ztráty ve
          střední Evropě (39 %), na Kavkaze (35 %) a na Novém Zélandu (29 %). Absolutní gigatuny a procento původní
          hmotnosti proto odpovídají na dvě různé otázky. <SourceLink id="DOI_10_1038_s41586_024_08545_z">GlaMBIE Team, 2025</SourceLink>
        </p>

        <p>
          Také jediný rok může mít v jednotlivých oblastech odlišné pořadí podle zvolené jednotky. V roce 2025 byla
          plošně průměrná ztráta největší v západní Kanadě a USA, na Islandu a ve střední Evropě. Největší příspěvek ke
          globálnímu součtu v gigatunách však pocházel z vysokohorské Asie, Aljašky a ruské Arktidy, protože tyto
          oblasti mají větší plochu ledovců. <SourceLink id="DOI_10_1038_s43017_026_00777_z">WGMS Network, 2026</SourceLink>
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/mountain-glaciers/copernicus-cumulative-mass-1976-2025.png"
            alt="Křivka kumulované globální změny hmotnosti ledovců od roku 1976 do roku 2025"
            width={1440}
            height={1164}
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption>
            Kumulovaná globální změna hmotnosti od začátku glaciologického roku 1976. Křivka sčítá kladné a záporné
            roční hodnoty; světle modré pole vyjadřuje zveřejněnou nejistotu. Grafická verze Copernicus popisuje koncový
            součet zaokrouhleně jako −9 581 Gt, zatímco související recenzovaná práce WGMS uvádí −9 583 ± 1 211 Gt;
            v textu používáme údaj z práce. Data: WGMS; graf: C3S/ECMWF/WGMS, 2026. Zdroj:{" "}
            <SourceLink id="WEB_Copernicus_Glaciers_Copernicus_5ae74590">Copernicus Climate Indicator: Glaciers, obr. 4</SourceLink>.
          </figcaption>
        </figure>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            U horských ledovců po celém světě dlouhodobě převažuje ústup čela a úbytek hmotnosti. Mezi roky 2000 a
            2023 ztratilo hmotnost všech 19 sledovaných ledovcových oblastí; celkový úbytek činil přibližně 6 540
            gigatun. Průměrná roční ztráta vzrostla z 231 gigatun v letech 2000–2011 na 314 gigatun v letech
            2012–2023, tedy o 36 %. Od roku 1975 do roku 2025 ubylo přibližně 9 600 gigatun ledu a šest největších
            ročních ztrát nastalo během sedmi let 2019–2025. Samotný glaciologický rok 2025 přinesl úbytek asi
            400 gigatun. Největší část globální ztráty v gigatunách připadala na Aljašku a kanadskou Arktidu, zatímco
            největší podíl původní hmotnosti ztratily ledovce ve střední Evropě, na Kavkaze a na Novém Zélandu.
          </p>
        </div>

        <h2>Prameny a data</h2>
        <div className="article-source-groups">
          <section>
            <h3>Primární studie</h3>
            <ul>
              <li>
                <SourceLink id="DOI_10_3189_s002214300002757x">Schytt, 1962</SourceLink>:
                původní popis prvních šestnácti let hmotnostní bilance Storglaciären.
              </li>
              <li>
                <SourceLink id="DOI_10_3189_2015jog15j017">Zemp et al., 2015</SourceLink>:
                společné vyhodnocení historických změn délky, objemu a hmotnosti do roku 2010.
              </li>
              <li>
                <SourceLink id="DOI_10_1038_s41586_019_1071_0">Zemp et al., 2019</SourceLink>:
                globální a regionální hmotnostní změny v letech 1961–2016.
              </li>
              <li>
                <SourceLink id="DOI_10_1038_s41586_021_03436_z">Hugonnet et al., 2021</SourceLink>:
                globální změny výšky a hmotnosti z družicových snímků v letech 2000–2019.
              </li>
              <li>
                <SourceLink id="DOI_10_1038_s41586_024_08545_z">GlaMBIE Team, 2025</SourceLink>:
                porovnání a spojení čtyř pozorovacích metod pro roky 2000–2023.
              </li>
              <li>
                <SourceLink id="DOI_10_1038_s43017_026_00777_z">WGMS Network, 2026</SourceLink>:
                aktuální globální a regionální bilance za rok 2025 a od roku 1975.
              </li>
            </ul>
          </section>

          <section>
            <h3>Metodické práce</h3>
            <ul>
              <li>
                <SourceLink id="WEB_World_Glacier_Monitoring_Ser_glosar_UNESCO_a_WGMS_06fc9a79">Cogley et al., 2011</SourceLink>:
                mezinárodní definice ledovce, hmotnostní bilance, období a jednotek.
              </li>
              <li>
                <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">WMO, 2024</SourceLink>:
                současný návod pro měření ledovců v terénu a dálkovým průzkumem.
              </li>
              <li>
                <SourceLink id="DOI_10_1017_jog_2019_66">O’Neel et al., 2019</SourceLink>:
                terénní měření, prostorové rozložení bodů a geodetická kontrola dlouhých záznamů.
              </li>
              <li>
                <SourceLink id="DOI_10_5194_tc_5_271_2011">Nuth &amp; Kääb, 2011</SourceLink> a{" "}
                <SourceLink id="DOI_10_5194_tc_7_877_2013">Huss, 2013</SourceLink>:
                zarovnání výškových modelů a převod změny objemu na hmotnost.
              </li>
              <li>
                <SourceLink id="DOI_10_5194_essd_17_1977_2025">Dussaillant et al., 2025</SourceLink>:
                roční globální produkt, prostorové doplňování, ověření a výpočet nejistoty.
              </li>
            </ul>
          </section>

          <section>
            <h3>Datové portály a stahování</h3>
            <ul>
              <li>
                <SourceLink id="DOI_10_5904_wgms_fog_2026_02_10">FoG 2026</SourceLink>:
                jednotlivá historická a současná pozorování ve stahovatelných tabulkách.
              </li>
              <li>
                <SourceLink id="DOI_10_5904_wgms_amce_2026_02_10">AMCE 1976–2025</SourceLink>:
                roční hodnoty pro ledovce, mřížku, oblasti a celý svět.
              </li>
              <li>
                <SourceLink id="DOI_10_5904_wgms_glambie_2024_07">GlaMBIE</SourceLink>:
                vstupní i kombinované odhady podle metod a oblastí.
              </li>
              <li>
                <SourceLink id="DOI_10_6096_13">Hugonnet et al., data</SourceLink>:
                výškové a hmotnostní změny pro jednotlivé ledovce i mapové dlaždice.
              </li>
              <li>
                <SourceLink id="DOI_10_5067_f6jmovy5navz">RGI v7</SourceLink> a{" "}
                <SourceLink id="WEB_glims_org_GLIMS_Glacier_Database_2d3c95bb">GLIMS</SourceLink>:
                globální obrysy, atributy a opakovaná mapování ledovců.
              </li>
            </ul>
          </section>

          <section>
            <h3>Obrazy, grafy a podmínky použití</h3>
            <ul>
              <li>
                <SourceLink id="WEB_U_S_Geological_Survey_Grinnell_Glacier_Pair_248d244b">Grinnell Glacier Pair</SourceLink> a{" "}
                <SourceLink id="WEB_U_S_Geological_Survey_Ablation_Stake_on_Wolverine_Glacier_276f80c5">Ablation Stake on Wolverine Glacier</SourceLink>:
                USGS označuje oba soubory jako volné dílo; fotografové a původ jsou uvedeni u obrazů.
              </li>
              <li>
                <SourceLink id="WEB_Copernicus_Glaciers_Copernicus_5ae74590">Copernicus Climate Indicator: Glaciers</SourceLink>,
                obr. 1, 3b a 4; data WGMS, kredit C3S/ECMWF/WGMS.
              </li>
              <li>
                Převzetí grafů dovoluje{" "}
                <SourceLink id="WEB_Copernicus_Licence_to_use_Copernicus_Products_rev_12_4244ad0f">
                  Licence to use Copernicus Products
                </SourceLink>
                . Materiál je použit beze změny. Evropská komise ani ECMWF neodpovídají za způsob jeho dalšího použití.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
