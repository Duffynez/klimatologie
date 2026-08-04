import Image from "next/image";
import { SourceLink } from "./SourceLink";

export function GlobalMeanSeaLevelArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>Střední hladina</dt>
            <dd>
              Průměrná výška mořské hladiny za určenou dobu. Průměrování potlačí příliv, odliv, vlny a krátké výkyvy.
            </dd>
          </div>
          <div>
            <dt>Relativní hladina</dt>
            <dd>
              Výška moře vůči pevnému bodu na pobřeží. Změní se při pohybu vody i při pohybu samotné pevniny.
            </dd>
          </div>
          <div>
            <dt>Výškový bod</dt>
            <dd>
              Stabilně označený bod na souši, ke kterému je přístroj geodeticky připojen. Umožňuje zachovat stejnou nulu
              měření po výměně přístroje.
            </dd>
          </div>
          <div>
            <dt>Družicová altimetrie</dt>
            <dd>
              Měření výšky oceánu z oběžné dráhy radarovým impulzem. Výška hladiny vznikne z polohy družice a vzdálenosti
              mezi družicí a mořem.
            </dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Hodnota v milimetrech vyjadřuje změnu vůči zvolené nule grafu. Nejde o hloubku oceánu ani o výšku hladiny v
          jednom přístavu.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Globální střední hladina moře vyjadřuje průměrnou změnu výšky světového oceánu. Jednotlivá pobřeží a jednotlivé
          části oceánu se mohou vyvíjet odlišně; globální hodnota vzniká plošným průměrem přes oceán. Výsledek se uvádí v
          milimetrech nebo centimetrech vůči přesně určenému počátku.
        </p>

        <p>
          Takto vymezenou veličinu používají práce založené na pobřežních stanicích i na družicích. Church a White v roce
          2011 a Hay a kol. v roce 2015 odhadovali globální průměr z dlouhých pobřežních záznamů. Ablain a kol. v roce 2019
          jej počítali z výšek hladiny změřených družicemi a Frederikse a kol. v roce 2020 znovu sestavili vývoj od roku
          1900. Gregory a kol. pro sjednocení terminologie výslovně definovali „globální“ jako průměr vážený plochou přes
          spojený povrch světového oceánu. Stejnou definici používá současná analýza Hamlingtona a kol.{" "}
          <SourceLink id="DOI_10_1007_s10712_011_9119_1">Church &amp; White, 2011</SourceLink>,{" "}
          <SourceLink id="DOI_10_1038_nature14093">Hay et al., 2015</SourceLink>,{" "}
          <SourceLink id="DOI_10_5194_essd_11_1189_2019">Ablain et al., 2019</SourceLink>,{" "}
          <SourceLink id="DOI_10_1007_s10712_019_09525_z">Gregory et al., 2019</SourceLink>,{" "}
          <SourceLink id="DOI_10_1038_s41586_020_2591_3">Frederikse et al., 2020</SourceLink> a{" "}
          <SourceLink id="DOI_10_1038_s43247_024_01761_5">Hamlington et al., 2024</SourceLink>
        </p>

        <p>
          Plošné vážení je podstatné. Jeden centimetr změny v malé zátoce nemá v globálním průměru stejnou váhu jako jeden
          centimetr nad rozsáhlou částí Tichého oceánu. Družicový výpočet proto nejprve rozdělí oceán na stejně vymezené
          plochy a teprve potom jejich hodnoty zprůměruje. U staršího období, kdy jsou k dispozici hlavně body na pobřeží,
          je nutné průběh mezi stanicemi statisticky odhadnout; zveřejněný výsledek proto vždy patří ke konkrétní metodě a
          její nejistotě.
        </p>

        <p>
          Nula grafu je dohoda, nikoli zvláštní fyzická výška. Datový soubor může nastavit první rok na nulu, odečíst
          průměr z celého období nebo použít vlastní výškovou referenci. Změna nuly posune celou křivku nahoru či dolů, ale
          nezmění rozdíl mezi dvěma měsíci ani sklon za stejné období. Proto lze porovnávat tempo změny mezi soubory, i
          když se jejich svislé osy na první pohled neshodují.
        </p>

        <figure className="article-figure article-figure--wide">
          <Image
            className="article-figure__media"
            src="/media/sea-level/nasa-global-mean-sea-level-1993-2025.png"
            alt="Družicové měření globální střední hladiny moře od roku 1993 do roku 2025"
            width={3840}
            height={2160}
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption>
            Globální střední hladina moře z navazujících družicových misí od roku 1993 do konce roku 2025. Světlá křivka
            ponechává pravidelné kolísání během roku; vodorovné čáry po jednom centimetru usnadňují čtení celkové změny.
            Graf vyjadřuje rozdíl vůči počátku záznamu, nikoli absolutní výšku oceánu. Zdroj:{" "}
            <SourceLink id="WEB_NASA_NASA_Scientific_Visualization_Studio_Global_Mean_def00bc2">NASA Scientific Visualization Studio</SourceLink>.
            Použití podle <SourceLink id="WEB_NASA_Guidelines_for_using_NASA_Images_and_Media_Guide_e6f9e9e4">pravidel NASA pro média</SourceLink>.
          </figcaption>
        </figure>

        <h2>Historie měření</h2>
        <p>
          Nejstarší dlouhé záznamy vznikaly kvůli plavbě, stavbě přístavů a předpovědi přílivu. V Amsterdamu se dochovaly
          pravidelné odečty od roku 1682 a ve Stockholmu od roku 1774. Pozorovatelé zapisovali výšku vody na stupnici v
          určených hodinách nebo při vysoké a nízké vodě. Tyto záznamy jsou cenné svou délkou, ale jejich četnost, poloha
          stupnice a návaznost na dnešní přístroje se musí ověřovat jednotlivě.{" "}
          <SourceLink id="WEB_Permanent_Service_for_Mean_S_PSMSL_amsterdamska_mereni_od_roku_1682_a5054f03">PSMSL: dlouhý amsterdamský záznam</SourceLink> a{" "}
          <SourceLink id="WEB_Permanent_Service_for_Mean_S_Data_and_Station_Information_for_STOCKHOLM_52369772">PSMSL: Stockholm</SourceLink>
        </p>

        <p>
          Zásadní změnu přinesl samopisný vodočet. Zařízení spuštěné v Sheernessu v září 1831 převádělo pohyb plováku na
          souvislou čáru na papíru. Zachytilo celý průběh hladiny, nikoli jen několik ručních odečtů. Z denního záznamu tak
          bylo možné vypočítat průměr a současně dohledat mezery nebo neobvyklé výkyvy. Konstrukci a dochované záznamy
          popisují Matthäus a novější digitalizace historických měření v ústí Temže.{" "}
          <SourceLink id="DOI_10_1017_s0080455x00002083">Matthäus, 1972</SourceLink> a{" "}
          <SourceLink id="DOI_10_1038_s41597_022_01223_7">Haigh et al., 2022</SourceLink>
        </p>

        <p>
          Jednotlivé přístavy dlouho uchovávaly údaje v odlišných výškových soustavách a formátech. Permanent Service for
          Mean Sea Level, zkráceně PSMSL, vznikla v roce 1933 a začala shromažďovat měsíční a roční průměry z celého světa.
          Její hlavní soubor dnes propojuje každou stanici s historií místní nuly a s výškovými body na souši. Díky tomu lze
          spojit starší a novější přístroj bez umělého skoku. Databázi a její současný systém popisují Holgate a kol.{" "}
          <SourceLink id="WEB_Permanent_Service_for_Mean_S_About_PSMSL_7904d751">PSMSL: historie služby</SourceLink> a{" "}
          <SourceLink id="DOI_10_2112_jcoastres_d_12_00175_1">Holgate et al., 2013</SourceLink>
        </p>

        <p>
          První pokusy o měření výšky oceánu z vesmíru přinesly družice v 70. letech. Seasat v roce 1978 ověřil, že radar
          může sledovat povrch oceánu z oběžné dráhy, jeho mise však trvala jen 105 dní. Přesný a dlouhodobý globální
          záznam začal až misí TOPEX/Poseidon, vypuštěnou 10. srpna 1992. Pravidelná měření použitá v dnešních globálních
          souborech začínají na počátku roku 1993.{" "}
          <SourceLink id="WEB_NASA_NASA_JPL_Seasat_b80d8dde">NASA/JPL: Seasat</SourceLink> a{" "}
          <SourceLink id="WEB_NASA_TOPEX_POSEIDON_PO_DAAC_JPL_NASA_b5a07e8b">PO.DAAC: TOPEX/Poseidon</SourceLink>
        </p>

        <p>
          TOPEX/Poseidon následovaly Jason-1, Jason-2, Jason-3 a Sentinel-6 Michael Freilich. Nová družice vždy určitou
          dobu letěla současně se svou předchůdkyní ve stejné nebo těsně související dráze. Překryv dovolil změřit rozdíl
          mezi přístroji dříve, než starší mise skončila. Sentinel-6B, vypuštěný 16. listopadu 2025, pokračuje ve stejné
          návaznosti. Dlouhý záznam tedy nevytváří jeden satelit, ale kalibrovaná posloupnost misí.{" "}
          <SourceLink id="WEB_NASA_Happy_30th_Anniversary_to_TOPEX_Poseidon_Ocean_S_16a22cc4">NASA/JPL: návaznost misí</SourceLink> a{" "}
          <SourceLink id="WEB_NASA_Sentinel_6B_Extends_Global_Ocean_Height_Record_N_4996a256">NASA: Sentinel-6B</SourceLink>
        </p>

        <figure className="article-figure article-figure--wide">
          <Image
            className="article-figure__media"
            src="/media/sea-level/noaa-san-francisco-tide-station.jpg"
            alt="Historická budova pobřežního vodočtu v San Francisku"
            width={960}
            height={376}
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption>
            Pobřežní měřicí stanice v San Francisku. Uvnitř historické budovy pracoval plovák v uklidňovací šachtě;
            současná stanice používá elektronická čidla. Každý přístroj měří moře vůči bodům na molu a pevnině, proto jde
            o relativní hladinu v jednom místě. Fotografie:{" "}
            <SourceLink id="WEB_NOAA_What_is_a_tide_gauge_ecb1078b">NOAA Ocean Service</SourceLink>;
            dílo federální vlády USA je veřejnou doménou.
          </figcaption>
        </figure>

        <h2>Jak se hladina měří</h2>
        <h3>Pobřežní stanice</h3>
        <p>
          Klasický přístroj vedl vodu úzkým otvorem do šachty, kde vlny zeslábly a plovák sledoval pomalejší pohyb hladiny.
          Dnešní stanice obvykle měří dobu návratu zvukového nebo mikrovlnného impulzu. Z jednotlivých odečtů se po
          odstranění zjevně chybných hodnot počítají minutové, hodinové, denní a měsíční průměry. Příliv se tím nemaže z
          původních dat; jeho střídání se při dostatečně dlouhém průměrování z velké části vyrovná.{" "}
          <SourceLink id="WEB_NOAA_What_is_a_tide_gauge_ecb1078b">NOAA: jak pracuje pobřežní vodočet</SourceLink>
        </p>

        <p>
          Čidlo samo nestačí. Technik pravidelně přenáší jeho nulu geodetickým měřením na několik stabilních bodů v okolí.
          Když bouře, stavba mola nebo výměna zařízení posune přístroj, lze změnu odhalit a starou a novou část správně
          navázat. PSMSL tuto historii používá pro soubor RLR, jehož název znamená <em>Revised Local Reference</em>, česky
          revidovaná místní reference. Pouze stanice s doloženou návazností místní nuly jsou vhodné pro dlouhodobé
          porovnání.{" "}
          <SourceLink id="WEB_Permanent_Service_for_Mean_S_Revised_Local_Reference_RLR_Definition_25cc4b55">PSMSL: definice RLR</SourceLink>
        </p>

        <p>
          Pobřežní stanice zaznamená pohyb moře vůči souši. Klesne-li molo o tři milimetry a poloha vodní hladiny v prostoru
          zůstane stejná, přístroj přesto ukáže tří-milimetrový vzestup. Současné sítě proto doplňují vodočet přijímačem
          družicové navigace, který měří svislý pohyb pevniny. Pro globální rekonstrukci lze také použít geologické modely
          a srovnání stanice s družicovou hladinou v okolním oceánu. Význam této opravy rozebírají Wöppelmann a Marcos a
          její vliv na globální odhad přímo testovali Hamlington a kol.{" "}
          <SourceLink id="DOI_10_1002_2015rg000502">Wöppelmann &amp; Marcos, 2016</SourceLink> a{" "}
          <SourceLink id="DOI_10_1002_2016jc011747">Hamlington et al., 2016</SourceLink>
        </p>

        <h3>Družice</h3>
        <p>
          Radarový výškoměr vyšle k oceánu krátký mikrovlnný impulz a změří dobu, za kterou se odraz vrátí. Z této doby
          vznikne vzdálenost mezi anténou a mořskou hladinou. Současně musí být velmi přesně určena poloha družice vůči
          Zemi. Výška moře se vypočte jako výška družice nad referenčním povrchem Země minus změřená vzdálenost k oceánu.
          Jeden výsledek má přesnost řádově centimetrů; globální průměr je přesnější díky velkému počtu opakovaných měření.{" "}
          <SourceLink id="WEB_NASA_How_do_satellites_measure_sea_level_change_NASA_702bb114">NASA Sea Level: družicová altimetrie</SourceLink>
        </p>

        <p>
          Radarový impulz při cestě zpomaluje vodní pára a elektricky nabité částice v atmosféře. Výpočet proto používá
          měření mikrovlnného radiometru na družici, informace o ionosféře, tlak vzduchu a model přílivu. Opravuje také vliv
          vln na tvar odraženého signálu. Poloha družice se určuje několika nezávislými systémy: navigačními družicemi,
          pozemními rádiovými majáky a laserovým měřením vzdálenosti. Každá z těchto oprav je zveřejněnou součástí
          metodiky, nikoli dodatečným posouváním výsledku podle očekávaného vývoje.{" "}
          <SourceLink id="DOI_10_1007_s10712_016_9389_8">Ablain et al., 2017</SourceLink> a{" "}
          <SourceLink id="WEB_NASA_Sentinel_6B_Extends_Global_Ocean_Height_Record_N_4996a256">NASA: měřicí systém Sentinel-6</SourceLink>
        </p>

        <h3>Kontrola družic pobřežními stanicemi</h3>
        <p>
          Pobřežní stanice a družice neměří tutéž místní veličinu, ale v čase se mohou vzájemně kontrolovat. Průměr vhodně
          vybraných stanic se porovnává s družicovou změnou v jejich okolí. Pokud rozdíl postupně narůstá, může ukázat
          pomalý posun přístroje, dráhy nebo některé opravy. Mitchum tento postup popsal v roce 2000 a síť stanic se od té
          doby používá ke kontrole stability celé posloupnosti družic.{" "}
          <SourceLink id="DOI_10_1080_01490410050128591">Mitchum, 2000</SourceLink>
        </p>

        <h2>Jak vzniká globální výsledek</h2>
        <h3>Z pobřežních stanic</h3>
        <p>
          Archiv nejprve převede jednotlivé odečty na měsíční průměry a zachová značky chybějících nebo podezřelých dat.
          Výzkumný tým vybere stanice s dostatečně dlouhým a navázaným záznamem, opraví doložený svislý pohyb pevniny a
          vyjádří každou stanici jako změnu vůči jejímu vlastnímu základu. Tím se odstraní nesrovnatelnost místních nul;
          zachová se pouze změna v čase.
        </p>

        <p>
          Stanice nejsou rozmístěny rovnoměrně. Nejvíce dlouhých záznamů leží v Evropě a Severní Americe, zatímco jižní
          polokoule a dlouhá oceánská pobřeží jsou zastoupena méně. Prostý průměr všech stanic by proto přisoudil hustě
          měřeným oblastem nepřiměřenou váhu. Rekonstrukce rozdělují oceán na oblasti se společným průběhem, používají
          prostorové vzory z kratšího období s lepším pokrytím nebo sestavují mnoho statisticky přípustných variant.
        </p>

        <p>
          Jednotlivé metody vedou k mírně odlišným hodnotám, zejména v první polovině 20. století. Church a White použili
          prostorové vzory z měření a oceánských modelů. Hay a kol. sestavili pravděpodobnostní odhad, který současně
          zahrnul neúplné pokrytí i pohyb pevniny. Frederikse a kol. vytvořili 5 000 možných průběhů odpovídajících
          dostupným stanicím a zveřejnili jejich rozptyl. Rozdíl mezi metodami je součástí nejistoty historického
          globálního výsledku, ne důvodem vybrat jedinou křivku bez srovnání.{" "}
          <SourceLink id="DOI_10_1007_s10712_011_9119_1">Church &amp; White, 2011</SourceLink>,{" "}
          <SourceLink id="DOI_10_1038_nature14093">Hay et al., 2015</SourceLink> a{" "}
          <SourceLink id="DOI_10_1038_s41586_020_2591_3">Frederikse et al., 2020</SourceLink>
        </p>

        <h3>Z družicových měření</h3>
        <p>
          Družice během přibližně desetidenního cyklu opakovaně protne oceán po předem určených drahách. Z opravených
          výšek se vytvoří mapa odchylek hladiny. Hodnota každé buňky se při průměrování násobí plochou oceánu, kterou
          zastupuje. NASA ve svém ukazateli používá měření zhruba mezi 66° jižní a 66° severní šířky; polární oblasti mimo
          dráhu družic nejsou přímo pokryty.{" "}
          <SourceLink id="WEB_NASA_NASA_SSH_popis_globalniho_vypoctu_2d3d3dce">NASA SSH: popis globálního výpočtu</SourceLink>
        </p>

        <p>
          Na přechodu mezi misemi se nejprve změří jejich vzájemný rozdíl a záznamy se navážou. Zvláštní pozornost vyžaduje
          první přístroj TOPEX/Poseidon. Po letech se ukázalo, že jedna jeho provozní větev vykazovala pomalý posun.
          Beckley a kol. v roce 2017 zveřejnili opravu odvozenou z interního kalibračního režimu a porovnání s pobřežními
          stanicemi. Některé současné produkty první roky opravují, jiné je při výpočtu zrychlení raději vynechávají. Tato
          volba musí být uvedena u výsledku.{" "}
          <SourceLink id="DOI_10_1002_2017jc013090">Beckley et al., 2017</SourceLink> a{" "}
          <SourceLink id="WEB_Copernicus_Sea_level_Copernicus_b943a537">Copernicus: popis ukazatele</SourceLink>
        </p>

        <p>
          Část produktů přidává opravu dlouhodobého pohybu oceánského dna po zániku dávných ledových příkrovů. Běžně se
          označuje GIA, z anglického <em>glacial isostatic adjustment</em>. Oprava nemění samotné radarové měření; převádí
          změnu průměrné výšky hladiny na změnu objemu oceánu při stálé ploše pánví. NASA nabízí záznam i bez této opravy,
          zatímco studie Hamlingtona a kol. ji pro svůj výpočet použila. U přesného čísla proto uvádíme konkrétní datový
          soubor, nikoli jen slovo „družice“.
        </p>

        <h2>Nejistota měření</h2>
        <p>
          Nejistota globálního výsledku má několik podob. Jednotlivý bod ovlivňuje šum radarového odrazu a krátkodobý stav
          oceánu. Celý záznam může ovlivnit pomalý posun dráhy, radiometru nebo propojení dvou misí. Výpočet dlouhodobého
          sklonu navíc závisí na délce zvoleného období. Proto nestačí připojit ke každému měsíci stejnou chybovou úsečku;
          je nutné popsat také chyby, které spolu v čase souvisejí.
        </p>

        <p>
          Ablain a kol. sestavili pro období 1993–2017 úplnou matici těchto časových souvislostí. Pro sklon za celé období
          odhadli 3,35 ± 0,40 mm za rok a pro změnu tempa 0,12 ± 0,07 mm za rok za rok; obě rozpětí představují 90% interval
          spolehlivosti. Guérou a kol. výpočet aktualizovali do roku 2021 a zúžili nejistotu sklonu na ±0,30 mm za rok a
          nejistotu změny tempa na ±0,05 mm za rok za rok. Neznamená to, že je hladina každý rok o přesně stejné číslo
          výše. Jednotka „milimetr za rok za rok“ říká, o kolik se během dalšího roku změní roční tempo. Jde o odhad
          dlouhodobého průběhu přes měsíční a meziroční výkyvy.{" "}
          <SourceLink id="DOI_10_5194_essd_11_1189_2019">Ablain et al., 2019</SourceLink> a{" "}
          <SourceLink id="DOI_10_5194_os_19_431_2023">Guérou et al., 2023</SourceLink>
        </p>

        <figure className="article-figure article-figure--wide">
          <Image
            className="article-figure__media"
            src="/media/sea-level/hamlington-global-mean-sea-level-1993-2023.png"
            alt="Družicový vývoj globální střední hladiny moře s proloženou zrychlující křivkou"
            width={1000}
            height={596}
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption>
            Modrá čára je družicový záznam globální střední hladiny; červená čára je kvadratické proložení, jehož sklon se
            v čase mění. Rámeček uvádí průměrný sklon 3,3 ± 0,3 mm za rok, změnu tempa 0,077 ± 0,061 mm za rok za rok a
            odhad sklonu 2,1 ± 1,0 mm za rok na začátku oproti 4,5 ± 1,0 mm za rok na konci. Intervaly jsou 90%. Obrázek 1
            z práce <SourceLink id="DOI_10_1038_s43247_024_01761_5">Hamlington et al., 2024</SourceLink>,{" "}
            licence <SourceLink id="WEB_Creative_Commons_Deed_Attribution_4_0_International_Creative_Comm_f3dd853d">CC BY 4.0</SourceLink>.
          </figcaption>
        </figure>

        <h2>Zveřejňovaná data</h2>
        <h3>PSMSL: jednotlivé pobřežní stanice</h3>
        <p>
          PSMSL zveřejňuje měsíční a roční průměry, souřadnice, historii místní nuly i poznámky ke každé stanici. Pro
          dlouhodobé porovnání je určen soubor RLR. Kompletní archiv lze stáhnout jako ZIP; v jednotlivých textových
          souborech jsou hodnoty, značky chybějících měsíců a informace o kvalitě. Jde o místní relativní hladinu, nikoli o
          hotový globální průměr.{" "}
          <SourceLink id="WEB_Permanent_Service_for_Mean_S_Complete_PSMSL_Data_Set_05055002">Stáhnout kompletní archiv PSMSL</SourceLink>
        </p>

        <h3>Frederikse et al.: globální rekonstrukce 1900–2018</h3>
        <p>
          Datový balíček k práci z roku 2020 obsahuje globální i oceánské rekonstrukce, jednotlivé pravděpodobné varianty a
          tabulky nejistot. Lze jej stáhnout ve formátu NetCDF a tabulkových souborech; zveřejněn je také zdrojový kód.
          Tento soubor je vhodný pro dlouhodobý vývoj před družicemi. Čísla jsou roční a jejich nejistota je v první části
          období větší kvůli menšímu počtu stanic.{" "}
          <SourceLink id="DOI_10_5281_zenodo_3862995">Stáhnout data ze Zenodo</SourceLink> a{" "}
          <SourceLink id="WEB_GitHub_GitHub_thomasfrederikse_sealevelbudget_20c_4d484230">výpočetní kód</SourceLink>
        </p>

        <h3>NASA SSH: družicový globální průměr od roku 1993</h3>
        <p>
          Zkratka SSH znamená anglické <em>sea-surface height</em>, tedy výšku mořské hladiny. NASA zveřejňuje textový
          soubor vytvořený z jednoduchých mřížkových map této výšky. Obsahuje datum, globální průměr a doplňující varianty
          zpracování. Datový portál uvádí verzi, datum aktualizace i trvalý identifikátor 10.5067/NSIND-GMSV1. Tento produkt
          zachovává sezónní kolísání a neobsahuje opravu GIA; přesná čísla se proto mohou lišit od grafu v primární studii,
          která tuto opravu přidala.{" "}
          <SourceLink id="WEB_NASA_NASA_SSH_popis_globalniho_vypoctu_2d3d3dce">Stáhnout NASA SSH</SourceLink>
        </p>

        <h3>Copernicus: globální i regionální družicové mapy</h3>
        <p>
          Copernicus Climate Change Service zveřejňuje denní a měsíční mapy na mřížce 0,25° od roku 1993. Uživatel může
          stáhnout výšku hladiny, její odchylku i nejistotu pro jednotlivé buňky. Současný klimatický ukazatel používá
          stejný základ, odstraňuje pravidelné roční kolísání a pro přehledový graf data vyhlazuje. Globální křivku v CSV a
          mapu regionálních sklonů ve formátu NetCDF, určeném pro vícerozměrná vědecká data, lze stáhnout přímo. CSV je
          běžná textová tabulka, kterou otevře i tabulkový procesor.{" "}
          <SourceLink id="WEB_Copernicus_Sea_level_gridded_data_from_satellite_observatio_0b1348c4">Copernicus Climate Data Store</SourceLink>,{" "}
          <SourceLink id="WEB_Copernicus_globalni_data_CSV_e4635f0c">globální data CSV</SourceLink> a{" "}
          <SourceLink id="WEB_Copernicus_regionalni_data_NetCDF_a6fb7ddf">regionální data NetCDF</SourceLink>
        </p>

        <h2>Srovnání výsledků</h2>
        <p>
          Pobřežní rekonstrukce a družice se překrývají od roku 1993. Church a White pro období 1993–2009 odhadli z
          družic 3,2 ± 0,4 mm za rok a z pobřežních dat 2,8 ± 0,8 mm za rok. Rozpětí se překrývají. Shoda je důležitá,
          protože oba postupy mají jiné hlavní slabiny: pobřežní výpočet je prostorově řídký a družicový výpočet musí
          dlouhodobě udržet stabilitu několika navazujících přístrojů.{" "}
          <SourceLink id="DOI_10_1007_s10712_011_9119_1">Church &amp; White, 2011</SourceLink>
        </p>

        <p>
          Ani družicové skupiny nezpracovávají data úplně stejně. Ablain a kol. porovnali šest tehdejších globálních
          produktů. Jejich měsíční hodnoty se při krátkých výkyvech lišily zhruba o 1 až 2 mm a odhady dlouhodobého sklonu
          přibližně o 0,15 mm za rok. Část chyb je však společná všem produktům, protože používají stejné dráhy a podobné
          atmosférické opravy. Malý rozptyl mezi křivkami proto není úplnou mírou nejistoty.{" "}
          <SourceLink id="DOI_10_5194_essd_11_1189_2019">Ablain et al., 2019</SourceLink>
        </p>

        <p>
          Rozdílné aktuální číslo tedy nemusí znamenat rozdílné měření. Nejprve je třeba zkontrolovat počáteční nulu,
          poslední zahrnutý měsíc, ponechání či odstranění sezónního cyklu, vyhlazení, opravu GIA a zacházení s prvními roky
          TOPEX/Poseidon. Teprve při shodném období a shodných volbách lze porovnat jednotlivé milimetry přímo.
        </p>

        <figure className="article-figure article-figure--wide">
          <Image
            className="article-figure__media"
            src="/media/sea-level/copernicus-regional-sea-level-trends-1999-2025.png"
            alt="Mapa regionálních změn hladiny oceánu od února 1999 do května 2025"
            width={3103}
            height={2399}
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption>
            Průměrná roční změna hladiny v jednotlivých částech oceánu od února 1999 do května 2025. Červená znamená
            vzestup, modrá pokles; stupnice sahá od −10 do +10 mm za rok. Mapa ukazuje, proč globální průměr nelze použít
            jako předpověď pro konkrétní pobřeží. Zdroj a kredit: C3S/ECMWF/CMEMS,{" "}
            <SourceLink id="WEB_Copernicus_Sea_level_Copernicus_b943a537">Copernicus Climate Change Service</SourceLink>.
            Vytvořeno s použitím informací služby Copernicus Climate Change Service 2026; Evropská komise ani ECMWF
            nenesou odpovědnost za další použití.
          </figcaption>
        </figure>

        <h2 id="pozorovani">Pozorování</h2>
        <p>
          Pobřežní stanice dokládají, že globální střední hladina stoupala už před začátkem družicového měření. Frederikse
          a kol. pro roky 1900–2018 odhadli průměrný sklon 1,56 ± 0,33 mm za rok; nejistota představuje 90% rozpětí. Vývoj
          nebyl rok od roku rovnoměrný a starší část má širší interval kvůli menšímu počtu stanic. Nezávislé rekonstrukce
          Churcha a Whitea, Haye a kol. a Dangendorfa a kol. se liší v jednotlivých desetiletích, ale všechny ukazují vyšší
          globální střední hladinu na konci 20. století než na jeho začátku.{" "}
          <SourceLink id="DOI_10_1038_s41586_020_2591_3">Frederikse et al., 2020</SourceLink>,{" "}
          <SourceLink id="DOI_10_1038_nature14093">Hay et al., 2015</SourceLink> a{" "}
          <SourceLink id="DOI_10_1038_s41558_019_0531_8">Dangendorf et al., 2019</SourceLink>
        </p>

        <p>
          Družice poskytují téměř globální a pravidelně opakované měření od roku 1993. Aktuální ukazatel NASA uvádí pro
          červenec 2026 hodnotu 102,4 ± 4,0 mm vůči počátku svého záznamu. Křivka v průběhu každého roku klesá a stoupá o
          několik milimetrů, ale její dlouhodobá poloha se posunula přibližně o deset centimetrů výše. Číslo 102,4 mm
          patří přesně k produktu NASA, jeho nule, ponechanému sezónnímu průběhu a stavu dat v červenci 2026.{" "}
          <SourceLink id="WEB_NASA_Sea_Level_Earth_Indicator_NASA_Science_07caffec">NASA Earth Indicator</SourceLink>
        </p>

        <p>
          Změnilo se také tempo. Hamlington a kol. odhadli pro období 1993–2023 průměrný sklon 3,3 ± 0,3 mm za rok. Sklon
          pro začátek záznamu vyšel 2,1 ± 1,0 mm za rok a pro jeho konec 4,5 ± 1,0 mm za rok. Odpovídající změna tempa byla
          0,08 ± 0,06 mm za rok za rok. Všechny nejistoty jsou 90% intervaly a výpočet zahrnuje chyby měření, návaznost
          misí i časově související výkyvy.{" "}
          <SourceLink id="DOI_10_1038_s43247_024_01761_5">Hamlington et al., 2024</SourceLink>
        </p>

        <p>
          Jednotlivé roky se od dlouhodobého průběhu výrazně odchylují. NASA vyčíslila přírůstek v roce 2024 na 5,9 mm,
          zatímco v roce 2025 na 0,8 mm. Jeden pomalý rok proto neruší změnu zjištěnou za tři desetiletí a jeden rychlý rok
          ji sám neurčuje. Pro sklon a změnu tempa se používá celý záznam s uvedenou nejistotou.{" "}
          <SourceLink id="WEB_NASA_NASA_Analysis_Shows_La_Nina_Limited_Sea_Level_Ri_3e8936b8">NASA: roční změna 2025</SourceLink>
        </p>

        <p>
          Globální průměr současně nepopisuje všechny části oceánu. Mapa Copernicus pro únor 1999 až květen 2025 obsahuje
          rozsáhlé oblasti se sklonem o několik milimetrů za rok vyšším i nižším než globální hodnota; místy se rozdíl
          blíží ±5 mm za rok. Pobřežní výsledek navíc mění svislý pohyb souše. Pro konkrétní město je proto nutný místní
          vodočet a místní pohyb pevniny, zatímco globální střední hladina odpovídá na otázku, jak se mění oceán jako celek.
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            Globální střední hladina moře během 20. století stoupala v průměru přibližně o 1,56 milimetru za rok.
            Od začátku roku 1993 do července 2026 se zvýšila přibližně o 102 milimetrů, tedy o deset centimetrů.
            Průměrné tempo za roky 1993–2023 činilo 3,3 milimetru za rok a během tohoto období vzrostlo přibližně z
            2,1 na 4,5 milimetru za rok. Jednotlivé roky kolem dlouhodobého růstu výrazně kolísají: v roce 2024 hladina
            stoupla o 5,9 milimetru a v roce 2025 o 0,8 milimetru. Také jednotlivé části oceánu se mění různou rychlostí;
            jejich dlouhodobý průběh se místy liší od globální hodnoty přibližně o pět milimetrů za rok oběma směry.
          </p>
        </div>

        <h2>Prameny a data</h2>
        <div className="article-sources">
          <section>
            <h3>Definice a primární práce</h3>
            <ul>
              <li><SourceLink id="DOI_10_1007_s10712_019_09525_z">Gregory et al. (2019): terminologie místní a globální hladiny</SourceLink> – otevřený článek a PDF.</li>
              <li><SourceLink id="DOI_10_1007_s10712_011_9119_1">Church &amp; White (2011): globální rekonstrukce od konce 19. století</SourceLink> – otevřený článek a PDF.</li>
              <li><SourceLink id="DOI_10_1038_nature14093">Hay et al. (2015): pravděpodobnostní rekonstrukce 20. století</SourceLink> – abstrakt; plný text podle přístupu vydavatele.</li>
              <li><SourceLink id="DOI_10_1038_s41586_020_2591_3">Frederikse et al. (2020): globální hladina od roku 1900</SourceLink> – článek, data a kód jsou dostupné samostatně.</li>
              <li><SourceLink id="DOI_10_1038_s43247_024_01761_5">Hamlington et al. (2024): tempo a jeho změna v družicovém období</SourceLink> – otevřený článek, PDF a obrázky CC BY 4.0.</li>
            </ul>
          </section>

          <section>
            <h3>Historie měření</h3>
            <ul>
              <li><SourceLink id="WEB_Permanent_Service_for_Mean_S_PSMSL_amsterdamska_mereni_od_roku_1682_a5054f03">PSMSL: amsterdamská měření od roku 1682</SourceLink> – tabulky, popis oprav a odkazy na původní práce.</li>
              <li><SourceLink id="DOI_10_1017_s0080455x00002083">Matthäus (1972): historie samopisných vodočtů</SourceLink> – článek vydavatele.</li>
              <li><SourceLink id="DOI_10_1038_s41597_022_01223_7">Inayatillah et al. (2022): digitalizace historických měření v ústí Temže</SourceLink> – otevřený článek, PDF a data.</li>
              <li><SourceLink id="WEB_Permanent_Service_for_Mean_S_About_PSMSL_7904d751">PSMSL: mezinárodní služba založená v roce 1933</SourceLink>.</li>
              <li><SourceLink id="WEB_NASA_TOPEX_POSEIDON_PO_DAAC_JPL_NASA_b5a07e8b">NASA PO.DAAC: mise TOPEX/Poseidon</SourceLink> – popis mise a dat.</li>
            </ul>
          </section>

          <section>
            <h3>Měření, návaznost a nejistota</h3>
            <ul>
              <li><SourceLink id="DOI_10_1007_s10712_016_9389_8">Ablain et al. (2017): družicová altimetrie v globálním a regionálním měřítku</SourceLink>.</li>
              <li><SourceLink id="DOI_10_1080_01490410050128591">Mitchum (2000): kalibrace družic pobřežními stanicemi</SourceLink>.</li>
              <li><SourceLink id="DOI_10_1002_2017jc013090">Beckley et al. (2017): oprava posunu TOPEX/Poseidon</SourceLink> – otevřený článek.</li>
              <li><SourceLink id="DOI_10_5194_essd_11_1189_2019">Ablain et al. (2019): úplný rozpočet nejistot</SourceLink> – otevřený článek, PDF a data.</li>
              <li><SourceLink id="DOI_10_5194_os_19_431_2023">Guérou et al. (2023): aktualizovaný družicový výsledek a nejistoty</SourceLink> – otevřený článek a PDF.</li>
              <li><SourceLink id="DOI_10_1002_2015rg000502">Wöppelmann &amp; Marcos (2016): svislý pohyb pevniny</SourceLink>.</li>
              <li><SourceLink id="DOI_10_2112_jcoastres_d_12_00175_1">Holgate et al. (2013): databáze PSMSL</SourceLink>.</li>
            </ul>
          </section>

          <section>
            <h3>Stažení dat</h3>
            <ul>
              <li><SourceLink id="WEB_Permanent_Service_for_Mean_S_Complete_PSMSL_Data_Set_05055002">PSMSL: kompletní měsíční a roční pobřežní data</SourceLink> – ZIP a textové soubory.</li>
              <li><SourceLink id="DOI_10_5281_zenodo_3862995">Frederikse et al.: rekonstrukce 1900–2018</SourceLink> – NetCDF a tabulky.</li>
              <li><SourceLink id="WEB_NASA_NASA_SSH_popis_globalniho_vypoctu_2d3d3dce">NASA SSH Global Mean Sea Level</SourceLink> – textový soubor a metadata.</li>
              <li><SourceLink id="WEB_Copernicus_Sea_level_gridded_data_from_satellite_observatio_0b1348c4">Copernicus: globální družicové mapy hladiny</SourceLink> – NetCDF po bezplatném přihlášení.</li>
              <li><SourceLink id="DOI_10_17882_58344">Ablain et al.: matice nejistot globálního družicového záznamu</SourceLink> – volně stažitelná vědecká data.</li>
            </ul>
          </section>

          <section>
            <h3>Obrázky a licence</h3>
            <ul>
              <li>Graf 1993–2025: <SourceLink id="WEB_NASA_NASA_Scientific_Visualization_Studio_Global_Mean_def00bc2">NASA Scientific Visualization Studio</SourceLink>, použití podle pravidel NASA.</li>
              <li>Pobřežní stanice: <SourceLink id="WEB_NOAA_What_is_a_tide_gauge_ecb1078b">NOAA Ocean Service</SourceLink>, veřejná doména USA.</li>
              <li>Graf tempa: obrázek 1 v <SourceLink id="DOI_10_1038_s43247_024_01761_5">Hamlington et al. (2024)</SourceLink>, licence CC BY 4.0.</li>
              <li>Regionální mapa: <SourceLink id="WEB_Copernicus_Sea_level_Copernicus_b943a537">C3S/ECMWF/CMEMS</SourceLink>, licence Copernicus s uvedeným kreditem a vyloučením odpovědnosti.</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
