import Image from "next/image";
import type { ReactNode } from "react";

function ReferenceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="article-reference" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

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
          <ReferenceLink href="https://doi.org/10.1007/s10712-011-9119-1">Church &amp; White, 2011</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1038/nature14093">Hay et al., 2015</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-11-1189-2019">Ablain et al., 2019</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1007/s10712-019-09525-z">Gregory et al., 2019</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1038/s41586-020-2591-3">Frederikse et al., 2020</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1038/s43247-024-01761-5">Hamlington et al., 2024</ReferenceLink>
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
            <ReferenceLink href="https://svs.gsfc.nasa.gov/5611/">NASA Scientific Visualization Studio</ReferenceLink>.
            Použití podle <ReferenceLink href="https://www.nasa.gov/nasa-brand-center/images-and-media/">pravidel NASA pro média</ReferenceLink>.
          </figcaption>
        </figure>

        <h2>Historie měření</h2>
        <p>
          Nejstarší dlouhé záznamy vznikaly kvůli plavbě, stavbě přístavů a předpovědi přílivu. V Amsterdamu se dochovaly
          pravidelné odečty od roku 1682 a ve Stockholmu od roku 1774. Pozorovatelé zapisovali výšku vody na stupnici v
          určených hodinách nebo při vysoké a nízké vodě. Tyto záznamy jsou cenné svou délkou, ale jejich četnost, poloha
          stupnice a návaznost na dnešní přístroje se musí ověřovat jednotlivě.{" "}
          <ReferenceLink href="https://psmsl.org/data/longrecords/ancill_rep.htm">PSMSL: dlouhý amsterdamský záznam</ReferenceLink> a{" "}
          <ReferenceLink href="https://psmsl.org/data/obtaining/stations/78.php">PSMSL: Stockholm</ReferenceLink>
        </p>

        <p>
          Zásadní změnu přinesl samopisný vodočet. Zařízení spuštěné v Sheernessu v září 1831 převádělo pohyb plováku na
          souvislou čáru na papíru. Zachytilo celý průběh hladiny, nikoli jen několik ručních odečtů. Z denního záznamu tak
          bylo možné vypočítat průměr a současně dohledat mezery nebo neobvyklé výkyvy. Konstrukci a dochované záznamy
          popisují Matthäus a novější digitalizace historických měření v ústí Temže.{" "}
          <ReferenceLink href="https://doi.org/10.1017/S0080455X00002083">Matthäus, 1972</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1038/s41597-022-01223-7">Haigh et al., 2022</ReferenceLink>
        </p>

        <p>
          Jednotlivé přístavy dlouho uchovávaly údaje v odlišných výškových soustavách a formátech. Permanent Service for
          Mean Sea Level, zkráceně PSMSL, vznikla v roce 1933 a začala shromažďovat měsíční a roční průměry z celého světa.
          Její hlavní soubor dnes propojuje každou stanici s historií místní nuly a s výškovými body na souši. Díky tomu lze
          spojit starší a novější přístroj bez umělého skoku. Databázi a její současný systém popisují Holgate a kol.{" "}
          <ReferenceLink href="https://psmsl.org/about_us/">PSMSL: historie služby</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.2112/JCOASTRES-D-12-00175.1">Holgate et al., 2013</ReferenceLink>
        </p>

        <p>
          První pokusy o měření výšky oceánu z vesmíru přinesly družice v 70. letech. Seasat v roce 1978 ověřil, že radar
          může sledovat povrch oceánu z oběžné dráhy, jeho mise však trvala jen 105 dní. Přesný a dlouhodobý globální
          záznam začal až misí TOPEX/Poseidon, vypuštěnou 10. srpna 1992. Pravidelná měření použitá v dnešních globálních
          souborech začínají na počátku roku 1993.{" "}
          <ReferenceLink href="https://www.jpl.nasa.gov/missions/seasat/">NASA/JPL: Seasat</ReferenceLink> a{" "}
          <ReferenceLink href="https://podaac.jpl.nasa.gov/TOPEX-POSEIDON">PO.DAAC: TOPEX/Poseidon</ReferenceLink>
        </p>

        <p>
          TOPEX/Poseidon následovaly Jason-1, Jason-2, Jason-3 a Sentinel-6 Michael Freilich. Nová družice vždy určitou
          dobu letěla současně se svou předchůdkyní ve stejné nebo těsně související dráze. Překryv dovolil změřit rozdíl
          mezi přístroji dříve, než starší mise skončila. Sentinel-6B, vypuštěný 16. listopadu 2025, pokračuje ve stejné
          návaznosti. Dlouhý záznam tedy nevytváří jeden satelit, ale kalibrovaná posloupnost misí.{" "}
          <ReferenceLink href="https://sealevel.jpl.nasa.gov/news/1596/happy-30th-anniversary-to-topexposeidon/">NASA/JPL: návaznost misí</ReferenceLink> a{" "}
          <ReferenceLink href="https://science.nasa.gov/science-research/earth-science/sentinel-6b-extends-global-ocean-height-record/">NASA: Sentinel-6B</ReferenceLink>
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
            <ReferenceLink href="https://oceanservice.noaa.gov/facts/tide-gauge.html">NOAA Ocean Service</ReferenceLink>;
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
          <ReferenceLink href="https://oceanservice.noaa.gov/facts/tide-gauge.html">NOAA: jak pracuje pobřežní vodočet</ReferenceLink>
        </p>

        <p>
          Čidlo samo nestačí. Technik pravidelně přenáší jeho nulu geodetickým měřením na několik stabilních bodů v okolí.
          Když bouře, stavba mola nebo výměna zařízení posune přístroj, lze změnu odhalit a starou a novou část správně
          navázat. PSMSL tuto historii používá pro soubor RLR, jehož název znamená <em>Revised Local Reference</em>, česky
          revidovaná místní reference. Pouze stanice s doloženou návazností místní nuly jsou vhodné pro dlouhodobé
          porovnání.{" "}
          <ReferenceLink href="https://psmsl.org/data/obtaining/rlr.php">PSMSL: definice RLR</ReferenceLink>
        </p>

        <p>
          Pobřežní stanice zaznamená pohyb moře vůči souši. Klesne-li molo o tři milimetry a poloha vodní hladiny v prostoru
          zůstane stejná, přístroj přesto ukáže tří-milimetrový vzestup. Současné sítě proto doplňují vodočet přijímačem
          družicové navigace, který měří svislý pohyb pevniny. Pro globální rekonstrukci lze také použít geologické modely
          a srovnání stanice s družicovou hladinou v okolním oceánu. Význam této opravy rozebírají Wöppelmann a Marcos a
          její vliv na globální odhad přímo testovali Hamlington a kol.{" "}
          <ReferenceLink href="https://doi.org/10.1002/2015RG000502">Wöppelmann &amp; Marcos, 2016</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1002/2016JC011747">Hamlington et al., 2016</ReferenceLink>
        </p>

        <h3>Družice</h3>
        <p>
          Radarový výškoměr vyšle k oceánu krátký mikrovlnný impulz a změří dobu, za kterou se odraz vrátí. Z této doby
          vznikne vzdálenost mezi anténou a mořskou hladinou. Současně musí být velmi přesně určena poloha družice vůči
          Zemi. Výška moře se vypočte jako výška družice nad referenčním povrchem Země minus změřená vzdálenost k oceánu.
          Jeden výsledek má přesnost řádově centimetrů; globální průměr je přesnější díky velkému počtu opakovaných měření.{" "}
          <ReferenceLink href="https://sealevel.nasa.gov/faq/19/how-do-satellites-measure-sea-level-change/">NASA Sea Level: družicová altimetrie</ReferenceLink>
        </p>

        <p>
          Radarový impulz při cestě zpomaluje vodní pára a elektricky nabité částice v atmosféře. Výpočet proto používá
          měření mikrovlnného radiometru na družici, informace o ionosféře, tlak vzduchu a model přílivu. Opravuje také vliv
          vln na tvar odraženého signálu. Poloha družice se určuje několika nezávislými systémy: navigačními družicemi,
          pozemními rádiovými majáky a laserovým měřením vzdálenosti. Každá z těchto oprav je zveřejněnou součástí
          metodiky, nikoli dodatečným posouváním výsledku podle očekávaného vývoje.{" "}
          <ReferenceLink href="https://doi.org/10.1007/s10712-016-9389-8">Ablain et al., 2017</ReferenceLink> a{" "}
          <ReferenceLink href="https://science.nasa.gov/science-research/earth-science/sentinel-6b-extends-global-ocean-height-record/">NASA: měřicí systém Sentinel-6</ReferenceLink>
        </p>

        <h3>Kontrola družic pobřežními stanicemi</h3>
        <p>
          Pobřežní stanice a družice neměří tutéž místní veličinu, ale v čase se mohou vzájemně kontrolovat. Průměr vhodně
          vybraných stanic se porovnává s družicovou změnou v jejich okolí. Pokud rozdíl postupně narůstá, může ukázat
          pomalý posun přístroje, dráhy nebo některé opravy. Mitchum tento postup popsal v roce 2000 a síť stanic se od té
          doby používá ke kontrole stability celé posloupnosti družic.{" "}
          <ReferenceLink href="https://doi.org/10.1080/01490410050128591">Mitchum, 2000</ReferenceLink>
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
          <ReferenceLink href="https://doi.org/10.1007/s10712-011-9119-1">Church &amp; White, 2011</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1038/nature14093">Hay et al., 2015</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1038/s41586-020-2591-3">Frederikse et al., 2020</ReferenceLink>
        </p>

        <h3>Z družicových měření</h3>
        <p>
          Družice během přibližně desetidenního cyklu opakovaně protne oceán po předem určených drahách. Z opravených
          výšek se vytvoří mapa odchylek hladiny. Hodnota každé buňky se při průměrování násobí plochou oceánu, kterou
          zastupuje. NASA ve svém ukazateli používá měření zhruba mezi 66° jižní a 66° severní šířky; polární oblasti mimo
          dráhu družic nejsou přímo pokryty.{" "}
          <ReferenceLink href="https://data.nasa.gov/dataset/nasa-ssh-global-mean-sea-level-from-simple-gridded-sea-surface-height">NASA SSH: popis globálního výpočtu</ReferenceLink>
        </p>

        <p>
          Na přechodu mezi misemi se nejprve změří jejich vzájemný rozdíl a záznamy se navážou. Zvláštní pozornost vyžaduje
          první přístroj TOPEX/Poseidon. Po letech se ukázalo, že jedna jeho provozní větev vykazovala pomalý posun.
          Beckley a kol. v roce 2017 zveřejnili opravu odvozenou z interního kalibračního režimu a porovnání s pobřežními
          stanicemi. Některé současné produkty první roky opravují, jiné je při výpočtu zrychlení raději vynechávají. Tato
          volba musí být uvedena u výsledku.{" "}
          <ReferenceLink href="https://doi.org/10.1002/2017JC013090">Beckley et al., 2017</ReferenceLink> a{" "}
          <ReferenceLink href="https://climate.copernicus.eu/climate-indicators/sea-level">Copernicus: popis ukazatele</ReferenceLink>
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
          <ReferenceLink href="https://doi.org/10.5194/essd-11-1189-2019">Ablain et al., 2019</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.5194/os-19-431-2023">Guérou et al., 2023</ReferenceLink>
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
            z práce <ReferenceLink href="https://doi.org/10.1038/s43247-024-01761-5">Hamlington et al., 2024</ReferenceLink>,{" "}
            licence <ReferenceLink href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</ReferenceLink>.
          </figcaption>
        </figure>

        <h2>Zveřejňovaná data</h2>
        <h3>PSMSL: jednotlivé pobřežní stanice</h3>
        <p>
          PSMSL zveřejňuje měsíční a roční průměry, souřadnice, historii místní nuly i poznámky ke každé stanici. Pro
          dlouhodobé porovnání je určen soubor RLR. Kompletní archiv lze stáhnout jako ZIP; v jednotlivých textových
          souborech jsou hodnoty, značky chybějících měsíců a informace o kvalitě. Jde o místní relativní hladinu, nikoli o
          hotový globální průměr.{" "}
          <ReferenceLink href="https://psmsl.org/data/obtaining/complete.php">Stáhnout kompletní archiv PSMSL</ReferenceLink>
        </p>

        <h3>Frederikse et al.: globální rekonstrukce 1900–2018</h3>
        <p>
          Datový balíček k práci z roku 2020 obsahuje globální i oceánské rekonstrukce, jednotlivé pravděpodobné varianty a
          tabulky nejistot. Lze jej stáhnout ve formátu NetCDF a tabulkových souborech; zveřejněn je také zdrojový kód.
          Tento soubor je vhodný pro dlouhodobý vývoj před družicemi. Čísla jsou roční a jejich nejistota je v první části
          období větší kvůli menšímu počtu stanic.{" "}
          <ReferenceLink href="https://doi.org/10.5281/zenodo.3862995">Stáhnout data ze Zenodo</ReferenceLink> a{" "}
          <ReferenceLink href="https://github.com/thomasfrederikse/sealevelbudget_20c">výpočetní kód</ReferenceLink>
        </p>

        <h3>NASA SSH: družicový globální průměr od roku 1993</h3>
        <p>
          Zkratka SSH znamená anglické <em>sea-surface height</em>, tedy výšku mořské hladiny. NASA zveřejňuje textový
          soubor vytvořený z jednoduchých mřížkových map této výšky. Obsahuje datum, globální průměr a doplňující varianty
          zpracování. Datový portál uvádí verzi, datum aktualizace i trvalý identifikátor 10.5067/NSIND-GMSV1. Tento produkt
          zachovává sezónní kolísání a neobsahuje opravu GIA; přesná čísla se proto mohou lišit od grafu v primární studii,
          která tuto opravu přidala.{" "}
          <ReferenceLink href="https://data.nasa.gov/dataset/nasa-ssh-global-mean-sea-level-from-simple-gridded-sea-surface-height">Stáhnout NASA SSH</ReferenceLink>
        </p>

        <h3>Copernicus: globální i regionální družicové mapy</h3>
        <p>
          Copernicus Climate Change Service zveřejňuje denní a měsíční mapy na mřížce 0,25° od roku 1993. Uživatel může
          stáhnout výšku hladiny, její odchylku i nejistotu pro jednotlivé buňky. Současný klimatický ukazatel používá
          stejný základ, odstraňuje pravidelné roční kolísání a pro přehledový graf data vyhlazuje. Globální křivku v CSV a
          mapu regionálních sklonů ve formátu NetCDF, určeném pro vícerozměrná vědecká data, lze stáhnout přímo. CSV je
          běžná textová tabulka, kterou otevře i tabulkový procesor.{" "}
          <ReferenceLink href="https://cds.climate.copernicus.eu/datasets/satellite-sea-level-global">Copernicus Climate Data Store</ReferenceLink>,{" "}
          <ReferenceLink href="https://climate.copernicus.eu/sites/default/files/custom-uploads/indicators-2025/sea-level/fig1_data.csv">globální data CSV</ReferenceLink> a{" "}
          <ReferenceLink href="https://climate.copernicus.eu/sites/default/files/custom-uploads/indicators-2025/sea-level/fig2_data.nc">regionální data NetCDF</ReferenceLink>
        </p>

        <h2>Srovnání výsledků</h2>
        <p>
          Pobřežní rekonstrukce a družice se překrývají od roku 1993. Church a White pro období 1993–2009 odhadli z
          družic 3,2 ± 0,4 mm za rok a z pobřežních dat 2,8 ± 0,8 mm za rok. Rozpětí se překrývají. Shoda je důležitá,
          protože oba postupy mají jiné hlavní slabiny: pobřežní výpočet je prostorově řídký a družicový výpočet musí
          dlouhodobě udržet stabilitu několika navazujících přístrojů.{" "}
          <ReferenceLink href="https://doi.org/10.1007/s10712-011-9119-1">Church &amp; White, 2011</ReferenceLink>
        </p>

        <p>
          Ani družicové skupiny nezpracovávají data úplně stejně. Ablain a kol. porovnali šest tehdejších globálních
          produktů. Jejich měsíční hodnoty se při krátkých výkyvech lišily zhruba o 1 až 2 mm a odhady dlouhodobého sklonu
          přibližně o 0,15 mm za rok. Část chyb je však společná všem produktům, protože používají stejné dráhy a podobné
          atmosférické opravy. Malý rozptyl mezi křivkami proto není úplnou mírou nejistoty.{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-11-1189-2019">Ablain et al., 2019</ReferenceLink>
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
            <ReferenceLink href="https://climate.copernicus.eu/climate-indicators/sea-level">Copernicus Climate Change Service</ReferenceLink>.
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
          <ReferenceLink href="https://doi.org/10.1038/s41586-020-2591-3">Frederikse et al., 2020</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1038/nature14093">Hay et al., 2015</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1038/s41558-019-0531-8">Dangendorf et al., 2019</ReferenceLink>
        </p>

        <p>
          Družice poskytují téměř globální a pravidelně opakované měření od roku 1993. Aktuální ukazatel NASA uvádí pro
          červenec 2026 hodnotu 102,4 ± 4,0 mm vůči počátku svého záznamu. Křivka v průběhu každého roku klesá a stoupá o
          několik milimetrů, ale její dlouhodobá poloha se posunula přibližně o deset centimetrů výše. Číslo 102,4 mm
          patří přesně k produktu NASA, jeho nule, ponechanému sezónnímu průběhu a stavu dat v červenci 2026.{" "}
          <ReferenceLink href="https://science.nasa.gov/earth/explore/earth-indicators/sea-leve/">NASA Earth Indicator</ReferenceLink>
        </p>

        <p>
          Změnilo se také tempo. Hamlington a kol. odhadli pro období 1993–2023 průměrný sklon 3,3 ± 0,3 mm za rok. Sklon
          pro začátek záznamu vyšel 2,1 ± 1,0 mm za rok a pro jeho konec 4,5 ± 1,0 mm za rok. Odpovídající změna tempa byla
          0,08 ± 0,06 mm za rok za rok. Všechny nejistoty jsou 90% intervaly a výpočet zahrnuje chyby měření, návaznost
          misí i časově související výkyvy.{" "}
          <ReferenceLink href="https://doi.org/10.1038/s43247-024-01761-5">Hamlington et al., 2024</ReferenceLink>
        </p>

        <p>
          Jednotlivé roky se od dlouhodobého průběhu výrazně odchylují. NASA vyčíslila přírůstek v roce 2024 na 5,9 mm,
          zatímco v roce 2025 na 0,8 mm. Jeden pomalý rok proto neruší změnu zjištěnou za tři desetiletí a jeden rychlý rok
          ji sám neurčuje. Pro sklon a změnu tempa se používá celý záznam s uvedenou nejistotou.{" "}
          <ReferenceLink href="https://www.nasa.gov/earth/nasa-analysis-shows-la-nina-limited-sea-level-rise-in-2025/">NASA: roční změna 2025</ReferenceLink>
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
              <li><ReferenceLink href="https://doi.org/10.1007/s10712-019-09525-z">Gregory et al. (2019): terminologie místní a globální hladiny</ReferenceLink> – otevřený článek a PDF.</li>
              <li><ReferenceLink href="https://doi.org/10.1007/s10712-011-9119-1">Church &amp; White (2011): globální rekonstrukce od konce 19. století</ReferenceLink> – otevřený článek a PDF.</li>
              <li><ReferenceLink href="https://doi.org/10.1038/nature14093">Hay et al. (2015): pravděpodobnostní rekonstrukce 20. století</ReferenceLink> – abstrakt; plný text podle přístupu vydavatele.</li>
              <li><ReferenceLink href="https://doi.org/10.1038/s41586-020-2591-3">Frederikse et al. (2020): globální hladina od roku 1900</ReferenceLink> – článek, data a kód jsou dostupné samostatně.</li>
              <li><ReferenceLink href="https://doi.org/10.1038/s43247-024-01761-5">Hamlington et al. (2024): tempo a jeho změna v družicovém období</ReferenceLink> – otevřený článek, PDF a obrázky CC BY 4.0.</li>
            </ul>
          </section>

          <section>
            <h3>Historie měření</h3>
            <ul>
              <li><ReferenceLink href="https://psmsl.org/data/longrecords/ancill_rep.htm">PSMSL: amsterdamská měření od roku 1682</ReferenceLink> – tabulky, popis oprav a odkazy na původní práce.</li>
              <li><ReferenceLink href="https://doi.org/10.1017/S0080455X00002083">Matthäus (1972): historie samopisných vodočtů</ReferenceLink> – článek vydavatele.</li>
              <li><ReferenceLink href="https://doi.org/10.1038/s41597-022-01223-7">Inayatillah et al. (2022): digitalizace historických měření v ústí Temže</ReferenceLink> – otevřený článek, PDF a data.</li>
              <li><ReferenceLink href="https://psmsl.org/about_us/">PSMSL: mezinárodní služba založená v roce 1933</ReferenceLink>.</li>
              <li><ReferenceLink href="https://podaac.jpl.nasa.gov/TOPEX-POSEIDON">NASA PO.DAAC: mise TOPEX/Poseidon</ReferenceLink> – popis mise a dat.</li>
            </ul>
          </section>

          <section>
            <h3>Měření, návaznost a nejistota</h3>
            <ul>
              <li><ReferenceLink href="https://doi.org/10.1007/s10712-016-9389-8">Ablain et al. (2017): družicová altimetrie v globálním a regionálním měřítku</ReferenceLink>.</li>
              <li><ReferenceLink href="https://doi.org/10.1080/01490410050128591">Mitchum (2000): kalibrace družic pobřežními stanicemi</ReferenceLink>.</li>
              <li><ReferenceLink href="https://doi.org/10.1002/2017JC013090">Beckley et al. (2017): oprava posunu TOPEX/Poseidon</ReferenceLink> – otevřený článek.</li>
              <li><ReferenceLink href="https://doi.org/10.5194/essd-11-1189-2019">Ablain et al. (2019): úplný rozpočet nejistot</ReferenceLink> – otevřený článek, PDF a data.</li>
              <li><ReferenceLink href="https://doi.org/10.5194/os-19-431-2023">Guérou et al. (2023): aktualizovaný družicový výsledek a nejistoty</ReferenceLink> – otevřený článek a PDF.</li>
              <li><ReferenceLink href="https://doi.org/10.1002/2015RG000502">Wöppelmann &amp; Marcos (2016): svislý pohyb pevniny</ReferenceLink>.</li>
              <li><ReferenceLink href="https://doi.org/10.2112/JCOASTRES-D-12-00175.1">Holgate et al. (2013): databáze PSMSL</ReferenceLink>.</li>
            </ul>
          </section>

          <section>
            <h3>Stažení dat</h3>
            <ul>
              <li><ReferenceLink href="https://psmsl.org/data/obtaining/complete.php">PSMSL: kompletní měsíční a roční pobřežní data</ReferenceLink> – ZIP a textové soubory.</li>
              <li><ReferenceLink href="https://doi.org/10.5281/zenodo.3862995">Frederikse et al.: rekonstrukce 1900–2018</ReferenceLink> – NetCDF a tabulky.</li>
              <li><ReferenceLink href="https://data.nasa.gov/dataset/nasa-ssh-global-mean-sea-level-from-simple-gridded-sea-surface-height">NASA SSH Global Mean Sea Level</ReferenceLink> – textový soubor a metadata.</li>
              <li><ReferenceLink href="https://cds.climate.copernicus.eu/datasets/satellite-sea-level-global">Copernicus: globální družicové mapy hladiny</ReferenceLink> – NetCDF po bezplatném přihlášení.</li>
              <li><ReferenceLink href="https://doi.org/10.17882/58344">Ablain et al.: matice nejistot globálního družicového záznamu</ReferenceLink> – volně stažitelná vědecká data.</li>
            </ul>
          </section>

          <section>
            <h3>Obrázky a licence</h3>
            <ul>
              <li>Graf 1993–2025: <ReferenceLink href="https://svs.gsfc.nasa.gov/5611/">NASA Scientific Visualization Studio</ReferenceLink>, použití podle pravidel NASA.</li>
              <li>Pobřežní stanice: <ReferenceLink href="https://oceanservice.noaa.gov/facts/tide-gauge.html">NOAA Ocean Service</ReferenceLink>, veřejná doména USA.</li>
              <li>Graf tempa: obrázek 1 v <ReferenceLink href="https://doi.org/10.1038/s43247-024-01761-5">Hamlington et al. (2024)</ReferenceLink>, licence CC BY 4.0.</li>
              <li>Regionální mapa: <ReferenceLink href="https://climate.copernicus.eu/climate-indicators/sea-level">C3S/ECMWF/CMEMS</ReferenceLink>, licence Copernicus s uvedeným kreditem a vyloučením odpovědnosti.</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
