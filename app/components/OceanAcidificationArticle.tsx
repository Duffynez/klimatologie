import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";

export function OceanAcidificationArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>pH</dt>
            <dd>
              Číselné vyjádření kyselosti vody. Nižší pH znamená vyšší koncentraci vodíkových iontů, tedy nabitých
              částic vodíku. Na stejné stupnici pH odpovídá rozdíl jedné jednotky desetinásobné koncentraci.
            </dd>
          </div>
          <div>
            <dt>DIC</dt>
            <dd>
              Rozpuštěný anorganický uhlík, z anglického dissolved inorganic carbon. Součet uhlíku v rozpuštěném
              CO₂ včetně kyseliny uhličité, hydrogenuhličitanu a uhličitanu, vztažený na kilogram vody.
            </dd>
          </div>
          <div>
            <dt>Celková alkalinita</dt>
            <dd>
              Schopnost vzorku vázat přidané vodíkové ionty, určená laboratorní titrací. V datech se často označuje
              zkratkou TA, z anglického total alkalinity.
            </dd>
          </div>
          <div>
            <dt>Stav nasycení Ω</dt>
            <dd>
              Poměr popisující nasycení vody minerálem uhličitanu vápenatého, například aragonitem. Hodnota 1
              odpovídá rovnováze s minerálem, vyšší hodnota přesycení a nižší nenasycení.
            </dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Z vhodné dvojice změřených veličin, například DIC a celkové alkalinity, lze dopočítat ostatní veličiny
          uhličitanového systému. Výpočet potřebuje také teplotu, obsah solí, tlak a podle podmínek další údaje.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Acidifikace oceánu je dlouhodobý posun chemického stavu mořské vody k vyšší koncentraci vodíkových iontů a
          nižšímu pH. Současně se mění zastoupení rozpuštěných forem anorganického uhlíku a nasycení vody minerály
          uhličitanu vápenatého. Pozorování proto netvoří jediné číslo, ale několik navzájem propojených měřených a
          vypočtených veličin.
        </p>

        <p>
          Pozorovací základ dobře ukazuje srovnání sedmi dlouhodobě sledovaných míst, které zveřejnili{" "}
          <SourceLink id="DOI_10_5670_oceanog_2014_16">Bates a kol. (2014)</SourceLink>. Autoři porovnali změny pH,
          rozpuštěného uhlíku a nasycení aragonitem ze staničních odběrů. Na globální povrch oceánu se zaměřili{" "}
          <SourceLink id="DOI_10_1029_2023gb007765">Ma a kol. (2023)</SourceLink> a{" "}
          <SourceLink id="DOI_10_5194_essd_16_121_2024">Chau a kol. (2024)</SourceLink>: z dostupných měření a
          statistických výpočtů sestavili mapy, v nichž lze sledovat změnu v jednotlivých oblastech i v celkovém průměru.
        </p>

        <p>
          Slovo „acidifikace“ popisuje směr změny. Běžná povrchová mořská voda má pH přibližně 8, a je tedy na běžné
          stupnici zásaditá. Pokles z 8,10 na 8,00 na stejné stupnici zvýší koncentraci vodíkových iontů přibližně o
          25,9 %. Výsledek plyne z logaritmické stupnice: poměr mezi oběma hodnotami je 10<sup>0,10</sup>. Procentní změna
          se proto počítá z jejich koncentrace, nikoli jako procento z čísel 8,10 a 8,00. Tento způsob výpočtu podrobně
          vysvětluje{" "}
          <SourceLink id="WEB_NOAA_A_primer_on_pH_d5a1e990">Pacifická mořská environmentální laboratoř (PMEL)</SourceLink>
          {" "}amerického Národního úřadu pro oceán a atmosféru (NOAA).
        </p>

        <p>
          Každé jednotlivé měření patří k určitému místu, hloubce, okamžiku, teplotě a stupnici pH. Povrch uprostřed
          oceánu, hluboká voda a pobřežní zátoka mohou mít odlišné hodnoty i odlišný sezónní průběh. Pojem „globální
          povrchové pH“ proto označuje plošný průměr z mapy povrchu oceánu. Taková mapa v současnosti nevzniká z husté
          sítě přímých pH čidel. Většina jejích buněk je statisticky dopočtena z řídkých lodních měření, dalších
          pozorovaných vlastností oceánu a rovnic uhličitanového systému, jak podrobně popisují{" "}
          <SourceLink id="DOI_10_5194_essd_16_121_2024">Chau a kol. (2024)</SourceLink>.
        </p>

        <p>
          V tomto článku proto rozlišujeme tři úrovně. „Změřeno“ znamená laboratorní rozbor vzorku nebo odečet čidla.
          „Vypočteno“ znamená chemický výpočet z alespoň dvou změřených veličin. „Rekonstruováno“ znamená, že metoda
          odhadla také místa a měsíce bez vzorku. Každý postup má vlastní předpoklady a nejistoty. Z jeho popisu
          musí být zřejmé, kterou část výsledku určují měření a kterou výpočet.
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div
            className="article-figure__scroll"
            tabIndex={0}
            aria-label="Vodorovně posuvný graf globálního povrchového pH"
          >
            <Image
              className="article-figure__media"
              src="/media/ocean-acidification/copernicus-global-surface-ph.png"
              alt="Rekonstruovaný roční globální průměr povrchového pH oceánu od roku 1985 do roku 2024"
              width={3775}
              height={2039}
              sizes="(max-width: 900px) 100vw, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Vodorovná osa ukazuje roky 1985–2024, svislá osa povrchové pH na celkové stupnici. Křížky jsou plošné průměry
            rekonstruované mapy celého hodnoceného oceánu. Tyrkysový pás je 68% interval nejistoty ročních hodnot.
            Číslo ±0,019 v rámečku zdroj definuje jako směrodatnou odchylku zbytků kolem přímky, nikoli jako standardní
            nejistotu jejího sklonu. Zdroj a kredit: E.U. Copernicus Marine Service Information, produkt{" "}
            <SourceLink id="DOI_10_48670_moi_00224">GLOBAL_OMI_HEALTH_carbon_ph_area_averaged</SourceLink>.
          </figcaption>
        </figure>

        <h2>Historie měření</h2>
        <p>
          Stupnice pH vznikla na začátku 20. století. Dánský chemik Søren P. L. Sørensen ji zavedl v roce 1909
          při práci s roztoky. Měření mořské vody později vyžadovalo vlastní kalibrace: obsah solí i teplota
          ovlivňují odezvu přístroje a při přesném porovnávání záleží na definici použité stupnice. Tento vývoj
          přibližuje <SourceLink id="WEB_nist_gov_How_Do_You_Measure_the_Acidity_pH_of_the_Ocean_N_3a09e72c">americký Národní institut pro standardy a technologie (NIST)</SourceLink>.
        </p>
        <p>
          Oceánografické výpravy postupně rozšířily měření od povrchu do hlubokého oceánu. Program GEOSECS,
          z anglického Geochemical Ocean Sections Study, tedy studium geochemických průřezů oceánem,
          v letech 1972–1978 mapoval chemické látky a jejich rozložení ve vodě. Pro pozdější sledování malých
          změn mezi desetiletími však bylo potřeba zlepšit shodu mezi laboratořemi. Andrew Dickson, který
          vyvíjel referenční mořskou vodu, v otevřené práci{" "}
          <SourceLink id="DOI_10_5670_oceanog_2010_22">Standards for Ocean Measurements (2010)</SourceLink>{" "}
          popisuje první zkušební distribuci vzorků v roce 1990 i potíže s jejich stabilitou. Od roku 1996 se
          nové šarže certifikují pro celkovou alkalinitu i DIC. Láhev s nezávisle stanovenou hodnotou umožňuje
          laboratoři ověřit, zda její výsledek odpovídá společnému měřítku.
        </p>
        <p>
          Pravidelné odběry na jednom místě doplnily výpravy napříč oceány. V roce 1988 začal program Bermuda
          Atlantic Time-series Study, zkráceně BATS, v Sargasovém moři a program Hawaii Ocean Time-series,
          zkráceně HOT, na stanici ALOHA severně od havajského ostrova Oahu. U Bermud lze novější měření spojit
          s odběry na blízké stanici Hydrostation S. Tyto programy umožňují sledovat sezónní průběh i změnu
          mezi desetiletími. Historii odběrů a návaznost metod popisují{" "}
          <SourceLink id="DOI_10_3389_fmars_2023_1289931">Bates a Johnson (2023)</SourceLink> a{" "}
          <SourceLink id="DOI_10_1073_pnas_0906044106">Dore a kol. (2009)</SourceLink>.
        </p>
        <p>
          Vedle elektrod se rozvinulo měření pH pomocí světla a indikátorového barviva, tedy spektrofotometrie.
          <SourceLink id="DOI_10_5194_os_7_597_2011"> Aßmann a kol. (2011)</SourceLink> popsali automatický
          přístroj pro průběžně čerpanou mořskou vodu včetně regulace teploty, optické kalibrace a kontroly
          vlivu barviva. Jinou cestou jsou elektrická čidla: první mořské zkoušky polovodičového čidla Durafet
          zveřejnili <SourceLink id="DOI_10_4319_lom_2010_8_172">Martz a kol. (2010)</SourceLink>. Tlakuvzdorné
          varianty se dnes používají na profilujících plovácích programu{" "}
          <SourceLink id="WEB_International_Argo_Program_Biogeochemical_Argo_e740e98e">BGC-Argo</SourceLink>,
          což je biogeochemická část programu Argo. Čidla rozšířila pokrytí odlehlých oblastí a zároveň přinesla
          nutnost dlouhodobě kontrolovat posun jejich kalibrace.
        </p>

        <h2>Jak se chemie oceánu měří</h2>
        <h3>Odběr vody a doprovodné údaje</h3>
        <p>
          Výzkumná loď spustí do oceánu rám s čidly teploty, vodivosti a tlaku. Vodivost se převádí na salinitu, tedy údaj o obsahu rozpuštěných solí, a
          <Link href="/metody/mereni-tlaku-a-hydrostaticke-vysky"> z tlaku se odvozuje hloubka</Link>. Kolem rámu jsou Niskinovy lahve, které se na povel uzavřou ve vybraných hloubkách. Po vytažení
          se voda rozdělí do samostatných lahví pro DIC, alkalinitu, pH, živiny a další rozbory. U každého vzorku se
          zachová čas, poloha, tlak, teplota, salinita, číslo lahve a způsob analýzy. Bez těchto údajů nelze hodnotu pH
          správně převést na podmínky v oceánu ani porovnat s jinou výpravou. Potřebná metadata vymezují{" "}
          <SourceLink id="DOI_10_5194_essd_7_117_2015">Jiang a kol. (2015)</SourceLink>.
        </p>

        <figure className="article-figure article-figure--portrait">
          <Image
            className="article-figure__media"
            src="/media/ocean-acidification/noaa-wcoa-2026-ctd-rosette.jpeg"
            alt="Oceánografická růžice s čidly a lahvemi spouštěná z výzkumné lodi do oceánu"
            width={768}
            height={1024}
            sizes="(max-width: 900px) 100vw, 700px"
            unoptimized
          />
          <figcaption>
            Odběrová růžice během výpravy West Coast Ocean Acidification 2026. Čidla na rámu průběžně měří tlak,
            teplotu a vodivost. Lahve se zavřou v určených hloubkách a přinesou vodu pro laboratorní rozbor. Fotografie:
            NOAA Ocean Acidification Program, červenec 2026. Zdroj:{" "}
            <SourceLink id="WEB_NOAA_Day_1_Images_from_the_field_NOAA_Ocean_Acidifica_0193e647">WCOA 2026, snímky z terénu</SourceLink>.
            Dílo NOAA je podle uvedeného kreditu federálním dílem USA a lze je použít s uvedením zdroje.
          </figcaption>
        </figure>

        <p>
          Při odběru pro DIC a alkalinitu se omezuje kontakt vody se vzduchem. Láhev se propláchne a naplní
          přetékáním. Před uzavřením se ponechá malý, předepsaný prostor pro tepelnou roztažnost vody. Příručka
          doporučuje přibližně 1 % objemu, pokud vzorek nečeká mimořádně velká změna teploty. Konzervace omezuje biologické změny
          během skladování. Podmínky a důvody tohoto postupu uvádí kapitola o odběru vzorků v{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">příručce Dicksona, Sabina a Christiana (2007)</SourceLink>.
        </p>

        <h3>pH: světlo, barvivo a přesná teplota</h3>
        <p>
          Při spektrofotometrickém měření se do vzorku přidá malé známé množství barviva, obvykle m-kresolové
          červeně. Jeho dvě formy pohlcují různě silně světlo při dvou zvolených vlnových délkách. Přístroj
          zaznamená zeslabení světla, z jeho poměru a kalibrace vypočte pH a opraví i malou změnu způsobenou
          přidáním barviva. Teplota měřicí nádobky se pečlivě udržuje a zapisuje. V konstrukci popsané{" "}
          <SourceLink id="DOI_10_5194_os_7_597_2011">Aßmannem a kol. (2011)</SourceLink> lze sledovat cestu
          od čerpané vody přes dávkování barviva a optický detektor až k výsledku. Autoři zároveň upozorňují,
          že nečistoty v barvivu mohou posunout pH přibližně o 0,01. Dobrá opakovatelnost sama takovou chybu neodhalí.
        </p>

        <p>
          Elektroda nebo polovodičové čidlo měří elektrický potenciál, který závisí na vodíkových iontech. Výhodou je
          rychlý a opakovaný odečet přímo ve vodě. Krátkodobá přesnost Durafetu v pokusech Martze a kol. při atmosférickém tlaku dosahovala
          ±0,0005 pH a stabilita během týdnů až měsíců byla lepší než 0,005 pH. Dlouhodobý oceánský profil však ovlivňuje
          tlak, stárnutí referenční elektrody a posun kalibrace. Plovák proto neposílá „hotové“ číslo bez další kontroly:
          surový potenciál se převádí pomocí laboratorní kalibrace a později se porovnává s nezávislými lodními daty.{" "}
          <SourceLink id="DOI_10_4319_lom_2010_8_172">Martz a kol., 2010</SourceLink> a{" "}
          <SourceLink id="DOI_10_13155_97828">BGC-Argo: postup kontroly pH</SourceLink>
        </p>

        <h3>DIC: uvolnění a spočítání oxidu uhličitého</h3>
        <p>
          Při měření DIC se do odměřeného vzorku přidá kyselina, která převede rozpuštěné formy anorganického
          uhlíku na CO₂. Nosný plyn jej odvede do coulometru. Tam se množství CO₂ stanoví pomocí elektrického
          náboje spotřebovaného při navazující reakci. Výsledný náboj se po odečtení pozadí a kalibraci převede
          na množství uhlíku v kilogramu původní vody. Laboratoř tedy změří společný součet, nikoli každou
          rozpuštěnou formu zvlášť. Svůj postup a laboratorní přesnost i správnost přibližně ±0,05 % uvádí{" "}
          <SourceLink id="WEB_NOAA_Laboratory_Analysis_1a101421">laboratoř NOAA PMEL</SourceLink>.
        </p>

        <h3>Celková alkalinita: titrace známou kyselinou</h3>
        <p>
          Při titraci se do vzorku postupně přidává kyselina o známé koncentraci. Přístroj zaznamenává její
          dávky a elektrický potenciál elektrody, z něhož se sleduje změna kyselosti. Výpočet z průběhu titrace
          určí celkovou alkalinitu a zohlední další kyseliny a zásady přítomné v mořské vodě. Výsledek se obvykle
          udává v mikromolech na kilogram: mikromol je miliontina molu, jednotky látkového množství odvozené od
          počtu částic. Pro certifikaci referenční vody jsou v{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">standardním pracovním postupu 3b příručky (2007)</SourceLink>{" "}
          stanoveny cíle opakovatelnosti pod 1 a systematické odchylky pod 2 mikromoly na kilogram. Alkalinita
          vyjadřuje jinou vlastnost vzorku než pH, a obě veličiny se proto mohou měnit odlišně.
        </p>

        <h3>Množství rozpuštěného CO₂</h3>
        <p>
          Na lodích se povrchová voda často vede nepřetržitě do vyrovnávací nádoby. Nad vodou proudí plyn, který se s ní
          přiblíží rovnováze, a infračervený analyzátor změří podíl CO₂ v tomto plynu. Z tlaku, teploty a složení plynu se
          určí pCO₂, tedy dílčí tlak CO₂ v plynu v rovnováze s vodou. Fugacita fCO₂ tento údaj ještě opravuje
          o malé odchylky chování skutečného plynu od ideálního. Přístroj se
          během plavby kontroluje několika lahvemi plynu se známým obsahem CO₂. Výsledkem jsou tisíce bodů podél dráhy
          lodi, ale pouze v tenké povrchové vrstvě, z níž loď čerpá vodu. Standardní přístrojové uspořádání a opravy
          shrnuje měřicí příručka. Jednotnou kontrolu dat používá atlas SOCAT, z anglického Surface Ocean CO₂ Atlas,
          tedy atlas CO₂ při povrchu oceánu.{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">Dickson a kol., 2007, standardní pracovní postup 5</SourceLink> a{" "}
          <SourceLink id="DOI_10_5194_essd_8_383_2016">Bakker a kol., 2016</SourceLink>
        </p>

        <h3>Ze dvou měření k výpočtu uhličitanového systému</h3>
        <p>
          Čtyři hlavní veličiny uhličitanového systému jsou pH, DIC, celková alkalinita a pCO₂ nebo fCO₂. Když laboratoř
          změří vhodnou dvojici, například DIC a alkalinitu, a přidá teplotu, salinitu, tlak a podle potřeby živiny, rovnovážné rovnice dovolí
          dopočítat ostatní. Program CO2SYS tento výpočet standardizoval a jeho současné verze zároveň šíří nejistoty
          vstupních měření a chemických konstant do výsledku. V tabulce musí zůstat uvedeno, které dvě veličiny byly
          skutečně změřeny a které sloupce vznikly výpočtem. Bez této informace vypadají chemicky odlišné postupy jako
          stejný druh pozorování.{" "}
          <SourceLink id="WEB_cdiac_ess_dive_lbl_gov_Lewis_Wallace_1998_CO2SYS_e42bd642">Lewis a Wallace, 1998</SourceLink>,{" "}
          <SourceLink id="DOI_10_1016_j_marchem_2018_10_006">Orr a kol., 2018</SourceLink> a{" "}
          <SourceLink id="DOI_10_5194_gmd_15_15_2022">Humphreys a kol., 2022</SourceLink>
        </p>

        <h2>Jak vzniká zveřejněný výsledek</h2>
        <h3>Stupnice pH a teplota</h3>
        <p>
          U mořské vody existuje několik stupnic pH podle toho, které vodíkové ionty definice zahrnuje.
          Volná stupnice počítá volné ionty, celková stupnice zahrnuje navíc ionty vázané v hydrogensíranu
          a stupnice mořské vody také vazbu s fluoridy. Výsledek má stejný název „pH“, jeho číselná hodnota
          však závisí na zvolené definici. Převody mezi stupnicemi a jejich použití ve výpočtu vysvětlují{" "}
          <SourceLink id="DOI_10_5194_gmd_15_15_2022">Humphreys a kol. (2022)</SourceLink>. Proto musí údaj
          o stupnici zůstat součástí zveřejněných dat. Vzor takových metadat připravili{" "}
          <SourceLink id="DOI_10_5194_essd_7_117_2015">Jiang a kol. (2015)</SourceLink>.
        </p>

        <p>
          pH mořské vody se mění také s teplotou a tlakem, i když ve vzorku nepřibude ani neubude žádná látka. Laboratoř
          může změřit vzorek při 25 °C, zatímco v oceánu měl 4 °C a ležel v hloubce jednoho kilometru. Zveřejní proto buď
          laboratorní hodnotu s teplotou měření, nebo ji rovnicemi převede na teplotu a tlak při odběru. Současné
          globální produkty obvykle uvádějí pH na celkové stupnici při podmínkách přímo v oceánu. Úplný údaj proto vedle
          hodnoty „pH 8,05“ obsahuje také stupnici, teplotu a informaci o případném převodu. Postup výpočtu
          při změně podmínek popisují <SourceLink id="DOI_10_5194_gmd_15_15_2022">Humphreys a kol. (2022)</SourceLink>.
        </p>

        <h3>Kontrola jedné výpravy a návaznost mezi výpravami</h3>
        <p>
          První kontrola probíhá uvnitř jedné plavby. Laboratoř opakuje část vzorků, měří referenční mořskou vodu a
          sleduje rozdíl mezi známou a získanou hodnotou. Podezřelé vzorky dostanou značku kvality a původní hodnota se
          zachová. U DIC a celkové alkalinity lze měření přímo navázat na certifikovaný materiál. U pH se používají
          pufry, tedy roztoky s dobře známým a stabilním pH, a nezávislá kontrola další dvojicí veličin. Pravidla pro doporučené nejistoty a úplná
          metadata shrnuje příručka Dicksona a kol. a novější doporučení skupiny Ocean Carbonate System Intercomparison Forum, která porovnává
          měření a výpočty oceánského uhličitanového systému.{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">Dickson a kol., 2007</SourceLink> a{" "}
          <SourceLink id="DOI_10_1002_lno_12477">Carter a kol., 2023</SourceLink>
        </p>

        <p>
          Druhá kontrola porovnává různé výpravy v hluboké vodě, kde se v blízkých místech očekává během několika let
          menší změna než na povrchu. Datový tým hledá soustavný rozdíl celé plavby proti dřívějším průřezům. Pokud jej
          doloží, zveřejní vedle původního sloupce také doporučenou úpravu a její zdůvodnění. Projekt GLODAP,
          z anglického Global Ocean Data Analysis Project, tedy projekt analýzy globálních oceánských dat, tímto způsobem
          sjednocuje DIC a alkalinitu napříč desetiletími. U jeho současné verze 3 však pH a jednotlivá měření fCO₂
          neprošla stejnou druhotnou kontrolou. Databáze je obsahuje, ale uživatel je nesmí považovat za stejně
          vzájemně sjednocené jako hlavní proměnné DIC a alkalinitu.{" "}
          <SourceLink id="DOI_10_5194_essd_8_297_2016">Olsen a kol., 2016</SourceLink> a{" "}
          <SourceLink id="DOI_10_25921_m6tp_mj50">GLODAPv3: metadata verze 2026</SourceLink>
        </p>

        <h3>Dlouhé pozorování na jednom místě</h3>
        <p>
          Stanice BATS a HOT se vracejí přibližně na stejné souřadnice a odebírají vodu v několika hloubkách. Každý měsíc
          se však neměří přesně ve stejný den a některé plavby chybějí. Pro odhad dlouhodobé změny se hodnoty nejprve
          rozdělí podle měsíců, pro každý měsíc se určí jeho obvyklá hodnota a ta se odečte. Tím se porovnává leden s
          lednem a červenec s červencem místo směšování sezón. Původní měsíční data zůstávají dostupná a publikovaný sklon
          uvádí počet bodů, zvolené období a statistickou nejistotu. Takto postupovali při vyhodnocení Bermud{" "}
          <SourceLink id="DOI_10_3389_fmars_2023_1289931">Bates a Johnson (2023)</SourceLink>.
        </p>

        <p>
          U BATS je pH v dlouhém grafu vypočteno z laboratorně změřeného DIC a celkové alkalinity spolu s teplotou a
          salinitou. Bates a Johnson uvádějí výpočetní nejistotu pH 0,003 a používají stupnici mořské vody. Dlouhý záznam
          na stanici tvoří navázaná chemická měření. Přístroje se během čtyřiceti let měnily. Autoři popisují
          původní kalibrace i pravidelné používání certifikované referenční vody při analýze DIC od roku 1991. Výsledek proto může být delší než životnost
          kteréhokoli jednotlivého přístroje.{" "}
          <SourceLink id="DOI_10_3389_fmars_2023_1289931">Bates a Johnson, 2023</SourceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div
            className="article-figure__scroll"
            tabIndex={0}
            aria-label="Vodorovně posuvný graf pH a nasycení aragonitem u Bermud"
          >
            <Image
              className="article-figure__media"
              src="/media/ocean-acidification/bats-ph-aragonite-1983-2023.webp"
              alt="Změny povrchového pH a nasycení aragonitem u Bermud od roku 1983 do roku 2023"
              width={1300}
              height={997}
              sizes="(max-width: 900px) 100vw, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Sezónně očištěné změny povrchové vody na spojených stanicích Hydrostation S a BATS u Bermud v letech
            1983–2023. Panel A ukazuje odchylku pH vypočteného ze změřeného DIC a celkové alkalinity na stupnici mořské
            vody. Sklon je −0,018 pH za desetiletí. Panel B ukazuje vypočtenou změnu nasycení aragonitem. Sklon je −0,09
            za desetiletí. Vodorovné osy udávají roky, svislé osy odchylky od obvyklé hodnoty příslušného měsíce,
            označené řeckým písmenem Δ (delta). Zelené body jsou jednotlivé hodnoty, černé přímky jejich dlouhodobý sklon.
            Obrázek 7 z práce{" "}
            <SourceLink id="DOI_10_3389_fmars_2023_1289931">Bates a Johnson, 2023</SourceLink>, licence{" "}
            <SourceLink id="WEB_Creative_Commons_Deed_Attribution_4_0_International_Creative_Comm_f3dd853d">Creative Commons Uveďte původ 4.0 (CC BY 4.0)</SourceLink>.
          </figcaption>
        </figure>

        <h3>Z lodních bodů ke globální povrchové mapě</h3>
        <p>
          Nejhustší globální základ tvoří SOCAT, atlas povrchového fCO₂. Výzkumné a obchodní lodě měří podél svých tras,
          takže některé severoatlantické tratě obsahují mnoho opakování a jižní oceány zůstávají řidší. Statistický model
          se učí vztah mezi dostupným fCO₂ a současně známou teplotou, salinitou, obsahem chlorofylu (zeleného barviva), hloubkou promíchané vrstvy,
          polohou a měsícem. Potom odhadne fCO₂ i v buňkách bez lodě. Jde o rekonstrukci založenou na pozorováních, nikoli
          o přímé změření každé buňky. Konkrétní řetězec vstupů a výpočtů zveřejňují{" "}
          <SourceLink id="DOI_10_5194_essd_16_121_2024">Chau a kol. (2024)</SourceLink>.
        </p>

        <p>
          Produkt CMEMS-LSCE spojuje v názvu mořskou službu Copernicus a francouzskou Laboratoř věd o klimatu
          a životním prostředí, která jej vytváří. Nejprve na mřížce 0,25° × 0,25° zeměpisné šířky a délky sestavuje
          několik statistických rekonstrukcí povrchového pCO₂.
          Celkovou alkalinitu odhaduje z dalších pozorovaných vlastností vody a z těchto dvou veličin počítá pomocí CO2SYS
          pH, DIC a stavy nasycení. Měsíční mapy se převedou na roční průměry a každá buňka dostane váhu podle své plochy.
          Rozptyl mezi členy výpočtu a porovnání s nezávislými vzorky určují nejistotu. Chau a kol. zveřejnili postup,
          mapy odchylek od kontrolních měření i data, takže globální křivku lze znovu spočítat.{" "}
          <SourceLink id="DOI_10_5194_essd_16_121_2024">Chau a kol., 2024</SourceLink>
        </p>

        <h2>Nejistota a hranice měření</h2>
        <p>
          U jednoho laboratorního vzorku lze nejistotu odvodit z opakovaných rozborů, referenční vody, teploty a
          kalibrace. U vypočteného pH nebo stavu nasycení přibývá nejistota druhého vstupu a chemických konstant. Orr a
          kol. ukázali, že nejistota rovnovážných konstant může u některých kombinací vstupů převážit nad samotnou
          laboratorní chybou. Proto se k výsledku ukládá použitá sada konstant i verze programu, ne pouze dvě vstupní
          hodnoty.{" "}
          <SourceLink id="DOI_10_1016_j_marchem_2018_10_006">Orr a kol., 2018</SourceLink>
        </p>

        <p>
          U dlouhého pozorování je důležitá návaznost mezi přístroji a odběry. Sezónní výkyv pH může být větší než změna
          za několik let, takže nestejné zastoupení zimy a léta posune sklon. Pobřežní voda se navíc může během jediného
          dne výrazně měnit. Časové a prostorové měřítko těchto rozdílů popisují{" "}
          <SourceLink id="DOI_10_5194_essd_18_1405_2026">Jiang a kol. (2026)</SourceLink>. Výsledek z otevřeného oceánu proto nelze použít jako
          hodnotu pro konkrétní zátoku. Správná otázka zní, pro jakou oblast, hloubku a časové rozlišení byl sklon
          vypočten.
        </p>

        <p>
          Autonomní čidla zvyšují počet profilů, ale jejich pomalý posun se obtížně kontroluje bez lahve referenční vody.
          Zhang a kol. v roce 2026 porovnali 10 003 profilů ze 176 plováků v Jižním oceánu s lodními daty a nalezli
          soustavný rozdíl v pH. Z něj vypočtené povrchové pCO₂ bylo proti lodním datům v průměru vyšší o 15 ± 3 mikroatmosféry, tedy miliontiny standardní atmosféry jako jednotky tlaku.
          Autoři navrhují prověřit kalibraci v několika hloubkách místo jediného hlubokého bodu. Rozsah výsledku je konkrétní:
          vymezuje chybu jednoho současného zpracování a ukazuje, proč musí být profilující čidla průběžně porovnávána
          s lodními vzorky.{" "}
          <SourceLink id="DOI_10_1038_s41598_026_43863_4">Zhang a kol., 2026</SourceLink>
        </p>

        <p>
          Globální mapa má další vrstvu nejistoty: chybějící místa. Různé statistické postupy mohou z týchž lodních bodů
          vytvořit mírně odlišné mapy, zejména v polárních oceánech a u pobřeží. Globální produkty často sdílejí část
          měřického základu: SOCAT pro fCO₂, GLODAP pro alkalinitu a stejné satelitní pomocné veličiny. Shoda několika
          produktů je užitečná, ale nelze ji počítat jako shodu několika oddělených měřicích
          sítí. Přehled Jiang a kol. v roce 2026 katalogizoval 68 produktů a výslovně oddělil původní lodní data,
          časová pozorování, statisticky doplněné mapy a modelové výstupy.{" "}
          <SourceLink id="DOI_10_5194_essd_18_1405_2026">Jiang a kol., 2026</SourceLink>
        </p>

        <h2>Zveřejňovaná data</h2>
        <h3>GLODAPv3: vzorky od hladiny do hlubokého oceánu</h3>
        <p>
          GLODAPv3, zveřejněný v roce 2026, spojuje 1 181 výzkumných plaveb z období 1972–2023. Každý řádek odpovídá
          konkrétnímu vzorku a obsahuje polohu, datum, tlak, teplotu, salinitu, chemické hodnoty, značky kvality a
          doporučené úpravy. DIC a celková alkalinita prošly společnou kontrolou mezi plavbami. Dosažená vnitřní shoda je
          uváděna jako 1,2 mikromolu na kilogram pro DIC a 1,4 mikromolu na kilogram pro alkalinitu. pH a fCO₂ jsou v souboru také,
          ale bez stejné druhotné kontroly. Kompletní bodový soubor lze stáhnout jako CSV nebo NetCDF a regionální části
          jako menší soubory. Licence CC BY 4.0 dovoluje další použití s uvedením autora a zdroje.{" "}
          <SourceLink id="DOI_10_25921_m6tp_mj50">GLODAPv3: data a úplná metadata</SourceLink>
        </p>

        <h3>SOCAT 2026: hustá povrchová měření CO₂</h3>
        <p>
          Surface Ocean CO₂ Atlas verze 2026 sdružuje desítky milionů povrchových měření CO₂ z let 1957–2025.
          Základem je měření plynu uvedeného do rovnováhy s mořskou vodou. Obsahuje fCO₂, teplotu, polohu, čas, hloubku přívodu vody a značku kvality, takže může být
          vstupem pro výpočet a mapování uhličitanového systému. Původní data jsou dostupná pod trvalým identifikátorem
          NOAA. Přepočtená varianta Forda a kol. navíc převádí hodnoty na společnou hloubku a teplotu těsně pod hladinou.
          Nabízí jednotlivé body v tabulce i měsíční buňky 1° × 1° ve formátu NetCDF. Oba balíky jsou velké, úplná
          tabulka má několik gigabajtů.{" "}
          <SourceLink id="DOI_10_25921_8dba_fr90">SOCAT v2026</SourceLink> a{" "}
          <SourceLink id="DOI_10_5281_zenodo_20757579">přepočtený SOCAT 2026</SourceLink>
        </p>

        <h3>BATS a HOT: jednotlivé odběry v čase</h3>
        <p>
          BATS zveřejňuje hodnoty z jednotlivých lahví včetně DIC, celkové alkalinity, teploty, salinity,
          živin, hloubky a značek kvality. Verze 10, vydaná 24. července 2026, sahá od října 1988 do prosince
          2025. Na stránce BCO-DMO, pracoviště pro správu biologických a chemických oceánografických dat, je
          dostupný tabulkový soubor označený jako verze 10. Publikovaný trend Batese a Johnsona níže ovšem
          vychází z období končícího rokem 2023. Zveřejnění novějších odběrů tento výsledek samo nepřepočítává.{" "}
          <SourceLink id="DOI_10_26008_1912_bco_dmo_3782_10">Data BATS, verze 10</SourceLink>
        </p>
        <p>
          <SourceLink id="WEB_hahana_soest_hawaii_edu_HOT_the_Hawaii_Ocean_Time_series_d7da8037">Program HOT</SourceLink>{" "}
          nabízí vyhledávání jednotlivých plaveb, textové soubory, analytické postupy a každoroční zprávy.
          U obou programů je při vlastním přepočtu potřeba zachovat použitou datovou verzi, hloubku, stupnici
          pH a informaci o tom, které veličiny byly změřeny a které vypočteny.
        </p>

        <h3>BGC-Argo: profily z autonomních plováků</h3>
        <p>
          BGC-Argo poskytuje jednotlivé profily pH na celkové stupnici při teplotě a tlaku přímo v oceánu. Soubor
          rozlišuje okamžitě odeslaná data od později kontrolovaných hodnot a ke každému bodu připojuje značku kvality.
          Plováky obvykle měří od povrchu do přibližně 2 000 metrů a opakují profil v několikadenním cyklu. Uživatel má
          stahovat upravenou proměnnou a současně kontrolovat stav následného zpracování. Práce Zhang a kol. z roku 2026
          ukazuje, že ani označení následně zkontrolovaných dat samo nezaručuje odstranění všech regionálních systematických chyb.{" "}
          <SourceLink id="WEB_International_Argo_Program_Biogeochemical_Argo_cf88bda9">BGC-Argo: přístup k datům</SourceLink>
        </p>

        <h3>Copernicus a OceanSODA: hotové globální rekonstrukce</h3>
        <p>
          Copernicus Marine zveřejňuje roční globální průměr pH a mapu jeho sklonu od roku 1985. Soubory ve vědeckém
          datovém formátu NetCDF, který uchovává číselná pole spolu s popisem jejich souřadnic a jednotek,
          obsahují vedle pH také nejistotu a úplná dokumentace popisuje plošné vážení. Produkt je vhodný pro globální a
          regionální povrchový přehled, nikoli pro ověřování jednoho laboratorního vzorku. OceanSODA-ETHZ nabízí měsíční
          pH, DIC, alkalinitu, pCO₂ a stav nasycení na mřížce 1° × 1° od roku 1982. Název OceanSODA označuje
          soubor pro studium acidifikace oceánu a ETHZ jeho tvůrce na Spolkové vysoké technické škole v Curychu.
          Verze použitá v práci Ma a kol. sahá do
          roku 2021 a pokrývá 96 % povrchu oceánu bez trvalého ledu. Současná verze OceanSODA v2025 už končí
          rokem 2024. Ani zde nelze bez nového výpočtu připsat staršímu trendu delší období. Data lze stáhnout bezplatně, u každého výsledku má
          zůstat název a verze produktu.{" "}
          <SourceLink id="DOI_10_48670_moi_00224">Copernicus: globální pH</SourceLink>,{" "}
          <SourceLink id="DOI_10_48670_moi_00277">Copernicus: mapa sklonů</SourceLink> a{" "}
          <SourceLink id="DOI_10_25921_m5wx_ja34">OceanSODA-ETHZ</SourceLink>
        </p>

        <h3>Trojrozměrná rekonstrukce do hloubky 2 000 metrů</h3>
        <p>
          Zhong a kol. v roce 2025 zveřejnili měsíční pole pH od povrchu do 2 000 metrů pro roky 1992–2020. Statistický
          model byl naučen na pozorováních GLODAP a poskytuje 41 hloubkových úrovní na mřížce 1° × 1°. Při porovnání
          s kontrolními vzorky byla odmocnina průměru čtverců odchylek, tedy chyba vyjádřená opět v jednotkách pH,
          rovna 0,028. U povrchu činila 0,044 a ve 2 000 metrech 0,013. Jde o
          rekonstrukci, nikoli o doplnění chybějících míst novým měřením. Datový balík je přesto užitečný pro přesně
          vymezené prostorové otázky, pokud se uvede tato chyba vůči kontrolním vzorkům.{" "}
          <SourceLink id="DOI_10_5194_essd_17_719_2025">Zhong a kol., 2025</SourceLink> a{" "}
          <SourceLink id="DOI_10_12157_iocas_20230720_001">datový záznam a soubory</SourceLink>.
          Metadata portálu jsou veřejná. Pro stažení souborů portál vyžaduje přihlášení.
        </p>

        <h2>Srovnání výsledků</h2>
        <p>
          Místní pozorování a globální rekonstrukce odpovídají na jiné otázky. BATS popisuje jeden bod v severním
          subtropickém Atlantiku, ale stojí na pravidelných laboratorních vzorcích. Copernicus popisuje téměř celý
          povrch oceánu, ale většinu buněk statisticky odhaduje. Ma a kol. porovnali OceanSODA s BATS a HOT. Pro BATS v
          letech 1992–2021 dostali z rekonstrukce sklon −0,0174 ± 0,0004 pH za desetiletí. Ze staničních dat vyšel sklon,
          který se od něj v rámci uvedené nejistoty nelišil. Pro HOT v letech 1989–2021 vyšel z rekonstrukce −0,0182 ± 0,0005 a ze staničních
          dat −0,0180 ± 0,0006 za desetiletí. Toto porovnání kontroluje, zda globální metoda zachová změnu na dvou
          dlouhých stanicích. Samo nekontroluje oblasti bez stanice.{" "}
          <SourceLink id="DOI_10_1029_2023gb007765">Ma a kol., 2023</SourceLink>
        </p>

        <p>
          Absolutní hodnoty nelze porovnat bez kontroly stupnice. BATS v práci Batese a Johnsona uvádí pH na stupnici
          mořské vody, zatímco OceanSODA a Copernicus používají celkovou stupnici. Pro porovnání je nutné použít společnou stupnici a stejné podmínky. Dvě hodnoty pH z tabulek
          se nesmějí odečíst pouze podle názvu sloupce. Další
          rozdíl vzniká výběrem hloubky: SOCAT obvykle měří vodu nasávanou několik metrů pod hladinou, BATS používá
          vzorky z 0–10 metrů a globální produkty označují tuto tenkou vrstvu společně jako povrch. Potřebu sjednotit hloubku a teplotu výslovně řeší{" "}
          <SourceLink id="DOI_10_5281_zenodo_20757579">přepočtený SOCAT od Forda a kol. (2026)</SourceLink>.
        </p>

        <p>
          OceanSODA i CMEMS-LSCE používají SOCAT jako hlavní zdroj povrchového CO₂ a GLODAP při odhadu alkalinity. Liší se
          statistickou metodou, rozlišením a některými pomocnými daty. Podobný sklon přetrvává při použití odlišných
          algoritmů, zatímco společné vstupy znamenají, že část chyb oba produkty sdílejí. Poctivé srovnání proto uvádí
          zároveň shodu i tuto závislost. Vstupy obou postupů jsou popsány v pracích{" "}
          <SourceLink id="DOI_10_1029_2023gb007765">Ma a kol. (2023)</SourceLink> a{" "}
          <SourceLink id="DOI_10_5194_essd_16_121_2024">Chau a kol. (2024)</SourceLink>.
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div
            className="article-figure__scroll"
            tabIndex={0}
            aria-label="Vodorovně posuvná mapa změny povrchového pH"
          >
            <Image
              className="article-figure__media"
              src="/media/ocean-acidification/copernicus-surface-ph-trend-map.png"
              alt="Mapa rekonstruovaných změn povrchového pH oceánu od roku 1985 do roku 2024"
              width={2542}
              height={1451}
              sizes="(max-width: 900px) 100vw, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Mapa rekonstruované změny povrchového pH v letech 1985–2024. Osy udávají zeměpisnou délku a šířku,
            barevná stupnice změnu za desetiletí. Všechny barevné
            oblasti mají záporný sklon. Modré odstíny jsou blíže −0,008 a hnědé blíže −0,026 pH za desetiletí. Purpurové
            křížkování označuje oblasti s nejvyšší odhadovanou nejistotou, které produkt z hodnocení vylučuje. Mapa má
            rozlišení 0,25° × 0,25° a vznikla ze statisticky rekonstruovaných měsíčních polí, nikoli z přímého pH čidla v
            každé buňce. Zdroj a kredit: E.U. Copernicus Marine Service Information, produkt{" "}
            <SourceLink id="DOI_10_48670_moi_00277">GLOBAL_OMI_HEALTH_carbon_ph_trend</SourceLink>.
          </figcaption>
        </figure>

        <h2 id="pozorovani">Pozorování</h2>
        <p>
          Dlouhá pozorování na jednotlivých stanicích ukazují pokles povrchového pH. Na spojeném záznamu Hydrostation S
          a BATS v Sargasovém moři kleslo sezónně očištěné pH vypočtené ze změřeného DIC a alkalinity v letech 1983–2023 o
          0,0752 jednotky. Lineární sklon byl −0,0018 ± 0,0001 pH za rok, tedy −0,018 ± 0,001 za desetiletí. V témže
          výpočtu klesl stav nasycení aragonitem o 0,354 a jeho sklon byl −0,009 ± 0,001 za rok. Výpočetní nejistota
          jednotlivého pH byla odhadnuta na 0,003.{" "}
          <SourceLink id="DOI_10_3389_fmars_2023_1289931">Bates a Johnson, 2023</SourceLink>
        </p>

        <p>
          Nezávislé dlouhé odběry u Havaje ukazují podobnou změnu. Dore a kol. pro povrchovou vodu stanice ALOHA v
          období 1988–2007 vypočetli z DIC a alkalinity sklon pH −0,0019 ± 0,0002 za rok. Přímá měření pH byla dostupná
          jen v letech 1992–1998 a 2003–2007. Po převodu na teplotu a tlak při odběru dala sklon −0,0014 ± 0,0002 za rok.
          Oba postupy tedy ukázaly pokles. Autoři je v rámci svého
          statistického vyhodnocení označili za nerozlišitelné. Souhrn Batese a kol. porovnal sedm stanic v
          Atlantiku, Tichém oceánu, Islandském moři a u Nového Zélandu. Všechny vykazovaly pokles pH. Zveřejněné sklony
          ležely přibližně mezi −0,0013 a −0,0026 za rok. Stanice neměly stejnou délku, sezónnost ani kombinaci měřených
          vstupů, proto je rozpětí popisem různých míst, nikoli nejistotou jednoho globálního čísla.{" "}
          <SourceLink id="DOI_10_1073_pnas_0906044106">Dore a kol., 2009</SourceLink> a{" "}
          <SourceLink id="DOI_10_5670_oceanog_2014_16">Bates a kol., 2014</SourceLink>
        </p>

        <p>
          Lauvset a kol. rozdělili oceán do 17 velkých oblastí podle teploty, hloubky promíchané vrstvy a obsahu chlorofylu.
          Pro období 1991–2011 mělo dostatek dat 15 oblastí. Statisticky významný pokles pH našli přibližně v 70 %
          všech 17 oblastí. Průměrná rychlost poklesu za toto období byla −0,018 ± 0,004 za desetiletí. Novější
          OceanSODA-ETHZ pokryl 96 % povrchu oceánu bez trvalého ledu a pro roky 1982–2021 odhadl globální sklon
          −0,0166 ± 0,0010 pH za desetiletí. Za celé období klesl jeho globální průměr přibližně o 0,06 pH a stav nasycení
          aragonitem přibližně o 10 %. Jde o výsledky statistických rekonstrukcí založených na měřeních, nikoli o prostý
          průměr pH odebraného ve všech buňkách.{" "}
          <SourceLink id="DOI_10_5194_bg_12_1285_2015">Lauvset a kol., 2015</SourceLink> a{" "}
          <SourceLink id="DOI_10_1029_2023gb007765">Ma a kol., 2023</SourceLink>
        </p>

        <p>
          CMEMS-LSCE odhadl globální povrchové pH 8,110 ± 0,017 v roce 1985 a 8,049 ± 0,014 v roce 2021.
          Sklon za toto období byl −0,017 ± 0,004 za desetiletí. Tyto hodnoty i postup výpočtu nejistoty
          zveřejnili <SourceLink id="DOI_10_5194_essd_16_121_2024">Chau a kol. (2024)</SourceLink>.
          Graf Copernicus v tomto článku zachycuje pozdější aktualizaci do roku 2024. Rozmezí nejistoty
          ročního průměru a nejistota dlouhodobého sklonu vyjadřují různé věci. Jejich velikosti nelze zaměňovat.
          Podobnost globálních sklonů OceanSODA a CMEMS-LSCE navíc částečně vychází ze společných vstupů SOCAT a GLODAP.
        </p>

        <p>
          Tempo změny se mezi oceánskými oblastmi liší. Mapa Copernicus pro roky 1985–2024 obsahuje nad většinou hodnoceného oceánu
          záporné sklony přibližně od −0,008 do −0,026 pH za desetiletí a oblasti s nejvyšší nejistotou označuje a
          vylučuje. Globální průměr proto nepopisuje tempo v jednotlivém moři. Současně se kolem dlouhodobého sklonu
          odehrávají sezónní a meziroční výkyvy: u BATS byl běžný sezónní rozsah povrchového pH přibližně 0,08, tedy
          několikanásobek ročního dlouhodobého sklonu. Trend vzniká z mnoha let se srovnatelně zastoupenými měsíci, ne ze
          srovnání dvou náhodně vybraných odběrů. Sezónní průběh i jeho oddělení od dlouhodobé změny ukazují{" "}
          <SourceLink id="DOI_10_3389_fmars_2023_1289931">Bates a Johnson (2023)</SourceLink>.
        </p>

        <p>
          Změna se objevuje také pod povrchem. <SourceLink id="DOI_10_1073_pnas_1504613112">Ríos a kol. (2015)</SourceLink>{" "}
          porovnali opakované atlantické průřezy mezi 50° jižní a 36° severní šířky z let 1993–1994 a 2013.
          Vyhodnocovali vodní hmoty, tedy části oceánu s podobnou teplotou, obsahem solí a původem.
          Největší pokles mezi sledovanými vodními hmotami, −0,042 ± 0,003 pH, zjistili v centrální vodě
          jižního Atlantiku. V hlubokých a dnových vodách se celková změna blížila nule. Výsledek ukazuje
          rozdíl mezi částmi oceánu a nedovoluje připsat povrchové tempo celé jeho hloubce.
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            Povrchové pH světového oceánu během posledních čtyř desetiletí klesalo přibližně o 0,017 za desetiletí.
            Mezi roky 1982 a 2021 se globální povrchový průměr snížil asi o 0,06 jednotky pH a stav nasycení aragonitem přibližně
            o 10 %. U Bermud kleslo pH mezi roky 1983 a 2023 o 0,0752 a stav nasycení aragonitem o 0,354. Dlouhá
            pozorování na sedmi místech v Atlantiku, Tichém oceánu, Islandském moři a u Nového Zélandu zaznamenala
            pokles pH přibližně o 0,013 až 0,026 za desetiletí. Tempo se mezi oceánskými oblastmi i během roku liší.
            Pokles je patrný i pod povrchem Atlantiku: v centrální vodě jeho jižní části dosáhl mezi lety
            1993–1994 a 2013 přibližně 0,042 jednotky pH. V hlubokých a dnových vodách tohoto průřezu byla změna mnohem menší.
          </p>
        </div>

        <h2>Prameny, data a licence</h2>
        <p>
          Všechny odborné práce a metodické dokumenty použité v tomto článku mají veřejný plný text.
          Karty zdrojů nabízejí DOI a samostatný odkaz na článek nebo příručku. U dat odkazují na veřejný
          soubor či portál poskytovatele. Zdroje tohoto článku nepoužívají kopie na Google Drivu.
        </p>
        <div className="article-sources">
          <section>
            <h3>Staniční pozorování a změny v hloubce</h3>
            <ul>
              <li><SourceLink id="DOI_10_1073_pnas_0906044106">Dore a kol. (2009): stanice ALOHA</SourceLink> – plný text v PubMed Central, přímé a vypočtené pH.</li>
              <li><SourceLink id="DOI_10_5670_oceanog_2014_16">Bates a kol. (2014): sedm dlouhodobých pozorování</SourceLink> – veřejné PDF vydavatele.</li>
              <li><SourceLink id="DOI_10_3389_fmars_2023_1289931">Bates a Johnson (2023): Bermudy 1983–2023</SourceLink> – otevřený článek, tabulka trendů a grafy.</li>
              <li><SourceLink id="DOI_10_1073_pnas_1504613112">Ríos a kol. (2015): vodní hmoty Atlantiku</SourceLink> – plný text a doplňky v PubMed Central.</li>
            </ul>
          </section>
          <section>
            <h3>Globální rekonstrukce</h3>
            <ul>
              <li><SourceLink id="DOI_10_5194_bg_12_1285_2015">Lauvset a kol. (2015): povrchové pH 1991–2011</SourceLink> – otevřený článek a PDF.</li>
              <li><SourceLink id="DOI_10_1029_2023gb007765">Ma a kol. (2023): OceanSODA 1982–2021</SourceLink> – veřejné PDF v repozitáři ETH.</li>
              <li><SourceLink id="DOI_10_5194_essd_16_121_2024">Chau a kol. (2024): CMEMS-LSCE</SourceLink> – otevřený popis výpočtu a ověření.</li>
              <li><SourceLink id="DOI_10_5194_essd_17_719_2025">Zhong a kol. (2025): trojrozměrné pH</SourceLink> – otevřená práce a kontrola rekonstrukce do 2 000 metrů.</li>
              <li><SourceLink id="DOI_10_5194_essd_18_1405_2026">Jiang a kol. (2026): přehled datových produktů</SourceLink> – rozlišení původních měření, doplněných map a modelů.</li>
            </ul>
          </section>
          <section>
            <h3>Měření, kalibrace a nejistoty</h3>
            <ul>
              <li><SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">Dickson a kol. (2007): měřicí příručka</SourceLink> – veřejné PDF s postupy odběru a analýz.</li>
              <li><SourceLink id="DOI_10_5670_oceanog_2010_22">Dickson (2010): referenční materiály</SourceLink> – historie a ověření popsané jejich tvůrcem.</li>
              <li><SourceLink id="DOI_10_5194_os_7_597_2011">Aßmann a kol. (2011): spektrofotometrie</SourceLink> – otevřený popis přístroje a kontrol.</li>
              <li><SourceLink id="DOI_10_4319_lom_2010_8_172">Martz a kol. (2010): čidlo Durafet</SourceLink> – veřejná původní studie.</li>
              <li><SourceLink id="DOI_10_13155_97828">Johnson a kol. (2023): kontrola pH v BGC-Argo</SourceLink> – veřejná metodická příručka.</li>
              <li><SourceLink id="DOI_10_5194_essd_7_117_2015">Jiang a kol. (2015): metadata měření</SourceLink> – otevřený popis údajů potřebných pro další použití.</li>
              <li><SourceLink id="WEB_cdiac_ess_dive_lbl_gov_Lewis_Wallace_1998_CO2SYS_e42bd642">Lewis a Wallace (1998): CO2SYS</SourceLink> – úplná dokumentace výpočtu.</li>
              <li><SourceLink id="DOI_10_1016_j_marchem_2018_10_006">Orr a kol. (2018): šíření nejistot</SourceLink> – veřejné PDF v repozitáři americké Národní vědecké nadace.</li>
              <li><SourceLink id="DOI_10_5194_gmd_15_15_2022">Humphreys a kol. (2022): PyCO₂SYS</SourceLink> – otevřený článek, kód a ověření výpočtu.</li>
              <li><SourceLink id="DOI_10_1002_lno_12477">Carter a kol. (2023): zdroje nejistoty</SourceLink> – veřejné PDF přes NIST.</li>
              <li><SourceLink id="DOI_10_1038_s41598_026_43863_4">Zhang a kol. (2026): soustavný rozdíl pH plováků</SourceLink> – otevřená studie pro Jižní oceán.</li>
            </ul>
          </section>
          <section>
            <h3>Původní data a jejich kontrola</h3>
            <ul>
              <li><SourceLink id="DOI_10_25921_m6tp_mj50">GLODAPv3</SourceLink> – jednotlivé vzorky 1 181 plaveb, metadata a licence CC BY 4.0.</li>
              <li><SourceLink id="DOI_10_5194_essd_8_297_2016">Olsen a kol. (2016)</SourceLink> – otevřený metodický základ GLODAPv2.</li>
              <li><SourceLink id="DOI_10_25921_8dba_fr90">SOCAT v2026</SourceLink> – povrchové fCO₂, značky kvality a soubory ke stažení.</li>
              <li><SourceLink id="DOI_10_5194_essd_8_383_2016">Bakker a kol. (2016)</SourceLink> – otevřená metodika atlasu SOCAT.</li>
              <li><SourceLink id="DOI_10_5281_zenodo_20757579">Ford a kol. (2026)</SourceLink> – přepočtený SOCAT se sjednocenou hloubkou a teplotou.</li>
              <li><SourceLink id="DOI_10_26008_1912_bco_dmo_3782_10">BATS, verze 10</SourceLink> – odběry do prosince 2025. Přímý odkaz na textovou tabulku s hodnotami oddělenými čárkami (CSV).</li>
              <li><SourceLink id="WEB_hahana_soest_hawaii_edu_HOT_the_Hawaii_Ocean_Time_series_d7da8037">HOT</SourceLink> – data z jednotlivých plaveb a analytické postupy.</li>
              <li><SourceLink id="WEB_International_Argo_Program_Biogeochemical_Argo_cf88bda9">BGC-Argo</SourceLink> – profily a jejich kontrolované varianty.</li>
              <li><SourceLink id="WEB_NOAA_Ocean_Carbon_and_Acidification_Data_System_OCADS_23d31f11">Datový systém NOAA pro oceánský uhlík a acidifikaci (OCADS)</SourceLink> – vyhledávání původních dat.</li>
            </ul>
          </section>
          <section>
            <h3>Data globálních rekonstrukcí</h3>
            <ul>
              <li><SourceLink id="DOI_10_48670_moi_00224">Copernicus: globální povrchové pH</SourceLink> – roční průměry, dokumentace a nejistoty.</li>
              <li><SourceLink id="DOI_10_48670_moi_00277">Copernicus: regionální změny pH</SourceLink> – mapa a data na mřížce 0,25°.</li>
              <li><SourceLink id="DOI_10_25921_m5wx_ja34">OceanSODA-ETHZ v2025</SourceLink> – měsíční chemické veličiny pro roky 1982–2024.</li>
              <li><SourceLink id="DOI_10_12157_iocas_20230720_001">Zhong a kol.: pH 1992–2020</SourceLink> – datový záznam trojrozměrné rekonstrukce.</li>
              <li><SourceLink id="WEB_oceanco2_github_io_Ocean_CO2_Products_5426de62">Katalog produktů oceánské chemie</SourceLink> – odkazy na původní a zpracovaná data.</li>
            </ul>
          </section>
          <section>
            <h3>Obrázky a licence</h3>
            <ul>
              <li>Globální graf a mapa: <SourceLink id="DOI_10_48670_moi_00224">E.U. Copernicus Marine Service Information</SourceLink>. Zachován kredit poskytovatele. Obrázky zobrazují aktualizaci do roku 2024.</li>
              <li>Odběrová růžice: <SourceLink id="WEB_NOAA_Day_1_Images_from_the_field_NOAA_Ocean_Acidifica_0193e647">NOAA, WCOA 2026</SourceLink>, podle uvedeného kreditu federální dílo USA.</li>
              <li>Graf BATS: obrázek 7 z práce <SourceLink id="DOI_10_3389_fmars_2023_1289931">Batese a Johnsona (2023)</SourceLink>, licence <SourceLink id="WEB_Creative_Commons_Deed_Attribution_4_0_International_Creative_Comm_f3dd853d">CC BY 4.0</SourceLink>.</li>
              <li>Pravidla pro použití materiálů: <SourceLink id="WEB_NOAA_NOAA_s_National_Ocean_Service_About_Us_4ba21b52">NOAA Ocean Service</SourceLink>.</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
