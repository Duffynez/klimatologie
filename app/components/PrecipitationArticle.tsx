import Image from "next/image";
import type { ReactNode } from "react";

function ReferenceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="article-reference" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function PrecipitationArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>Úhrn srážek</dt>
            <dd>
              Výška vrstvy vody, která za určenou dobu dopadla na vodorovnou plochu. Jeden milimetr znamená jeden litr
              vody na metr čtvereční.
            </dd>
          </div>
          <div>
            <dt>Intenzita</dt>
            <dd>
              Množství srážek za jednotku času. Hodnota 20 mm/h znamená, že při stejné rychlosti by za hodinu napršelo
              20 mm.
            </dd>
          </div>
          <div>
            <dt>Rx1day</dt>
            <dd>
              Nejvyšší jednodenní úhrn v daném měsíci nebo roce. Jde o denní údaj, nikoli o nejvyšší hodinovou intenzitu.
            </dd>
          </div>
          <div>
            <dt>Přívalová srážka</dt>
            <dd>
              Krátká a velmi intenzivní srážka, obvykle spojená s konvekcí. Pro měření je nutné uvést délku intervalu a
              naměřený úhrn nebo intenzitu.
            </dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Denní úhrn a hodinová intenzita odpovídají na jiné otázky. Silná hodinová srážka se může v denním součtu
          ztratit a vysoký denní úhrn může naopak vznikat po mnoho hodin.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Srážkový úhrn udává, jak vysoká vrstva vody dopadla za určenou dobu na vodorovnou plochu. Měří se v
          milimetrech a vždy k němu patří místo a délka intervalu: například hodina, den, měsíc nebo rok. Jeden milimetr
          srážek odpovídá jednomu litru vody na metr čtvereční.
        </p>

        <p>
          Tato definice je společná přístrojové příručce WMO, staničnímu archivu GHCN-Daily, pozemnímu souboru GPCC,
          družicově-staničnímu souboru GPCP i globálnímu přehledu extrémů HadEX3. Liší se jejich prostorové pokrytí,
          časový krok a způsob, jakým se bodová měření převádějí do mapy, základní měřenou veličinou však zůstává výška
          vody za přesně určený interval. <ReferenceLink href="https://repository.oceanbestpractices.org/bitstream/handle/11329/83/wmo_8_en-2012.pdf?sequence=1">WMO Guide No. 8</ReferenceLink>,{" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/products/land-based-station/global-historical-climatology-network-daily">GHCN-Daily</ReferenceLink>,{" "}
          <ReferenceLink href="https://opendata.dwd.de/climate_environment/GPCC/html/download_gate.html">GPCC</ReferenceLink>,{" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/products/climate-data-records/precipitation-gpcp-monthly">GPCP</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1029/2019JD032263">Dunn et al., 2020</ReferenceLink>
        </p>

        <p>
          Celkový úhrn a silná krátká srážka se proto sledují samostatně. Pro celkové množství lze sečíst všechny mokré
          dny v roce. Pro extrém se naopak hledá nejvyšší hodnota za předem danou dobu: nejvyšší denní, hodinová nebo
          třeba desetiminutová srážka. Výsledek závisí na délce intervalu. Označení „přívalová srážka“ nemá v globálních
          datových souborech jedinou číselnou hranici, a proto zde u každého výsledku uvádíme přímo měřený interval.
        </p>

        <p>
          Globální denní přehledy běžně používají ukazatel Rx1day, tedy nejvyšší jednodenní úhrn každého roku. Hodinový
          archiv GSDR-I obdobně zveřejňuje nejvyšší úhrn za 1, 3, 6, 12 a 24 hodin. Takto přesně vymezené údaje lze
          porovnat mezi stanicemi a mezi roky; samotné slovo „příval“ k tomu nestačí. <ReferenceLink href="https://doi.org/10.1038/s41597-023-02238-4">Pritchard et al., 2023</ReferenceLink>
        </p>

        <figure className="article-figure article-figure--portrait">
          <Image
            className="article-figure__media"
            src="/media/precipitation/noaa-tipping-bucket.jpg"
            alt="Automatický překlápěcí srážkoměr na meteorologické stanici"
            width={636}
            height={586}
            sizes="(max-width: 600px) 100vw, 500px"
            unoptimized
          />
          <figcaption>
            Automatický překlápěcí srážkoměr. Voda protéká nálevkou do malé dvoudílné nádoby; po naplnění jedné části se
            mechanismus překlopí a elektricky zaznamená známý přírůstek. Součet překlopení dává úhrn a jejich časové
            rozestupy umožňují určit intenzitu. Fotografie a popis: <ReferenceLink href="https://www.weather.gov/asos/TippingBucket.html">NOAA/National Weather Service</ReferenceLink>; dílo federální vlády USA.
          </figcaption>
        </figure>

        <h2>Historie měření</h2>
        <p>
          Benedetto Castelli popsal v roce 1639 evropské měření deště nádobou se známou plochou otvoru. Christopher Wren
          v roce 1662 představil přístroj, který nasbíranou vodu po dávkách vypouštěl a počet dávek zapisoval. Robert
          Hooke jeho konstrukci dále upravil. Tyto přístroje zavedly dva principy používané dodnes: zachytit srážku na
          známé ploše a převést objem vody na výšku vrstvy. Historii konstrukcí shrnuje <ReferenceLink href="https://doi.org/10.1061/JRCEA4.0000523">Middleton, 1967</ReferenceLink>.
        </p>

        <p>
          V pražském Klementinu byly srážky zapisovány už v roce 1752, pravidelné a spolehlivé denní měření však začíná
          1. května 1804. Klementinský archiv tak ukazuje i praktický rozdíl mezi prvním dochovaným údajem a souvislým
          záznamem vhodným pro dlouhodobé srovnání. <ReferenceLink href="https://www.chmi.cz/namerena-data/historicka-data/klementinum">ČHMÚ: historická stanice Klementinum</ReferenceLink>
        </p>

        <p>
          V 19. století se rozšířily standardizované sběrné srážkoměry a samopisné přístroje. George Hellmann v roce 1897
          zavedl sifonový ombrograf, který průběžně kreslil narůstající množství vody na papírový pás. Přehled z roku 1915
          rozlišoval tři hlavní způsoby automatického záznamu: překlápěcí nádobku, váženou nádobu a plovák. <ReferenceLink href="https://doi.org/10.1038/095262a0">Mill, 1915</ReferenceLink>
        </p>

        <p>
          Ve 20. století se národní sítě rozrostly na tisíce stanic a přibylo měření radarem. Od roku 1979 poskytují
          družice souvislejší pohled také nad oceány. GPCP od roku 1979 spojuje družicové odhady se srážkoměry do měsíčních
          globálních map; IMERG od června 2000 zveřejňuje odhady po půlhodině na mřížce 0,1°. <ReferenceLink href="https://doi.org/10.1175/1525-7541(2003)004%3C1147:TVGPCP%3E2.0.CO;2">Adler et al., 2003</ReferenceLink> a{" "}
          <ReferenceLink href="https://gpm.nasa.gov/data/imerg">NASA IMERG</ReferenceLink>
        </p>

        <h2>Jak se srážky měří</h2>
        <h3>Sběrný a váhový srážkoměr</h3>
        <p>
          Sběrný srážkoměr zachytí vodu nálevkou se známou plochou a pozorovatel změří její objem. Denní úhrn vznikne
          rozdílem mezi dvěma pravidelnými odečty. Váhový přístroj místo přelévání průběžně váží nádobu a změnu hmotnosti
          převádí na milimetry vody. Dokáže proto zaznamenat i průběh srážky a po vhodné úpravě také vodní hodnotu sněhu.
        </p>

        <figure className="article-figure article-figure--portrait">
          <Image
            className="article-figure__media"
            src="/media/precipitation/noaa-eight-inch-rain-gauge.jpg"
            alt="Kovový sběrný srážkoměr umístěný na meteorologické stanici"
            width={612}
            height={390}
            sizes="(max-width: 600px) 100vw, 500px"
            unoptimized
          />
          <figcaption>
            Klasický sběrný srážkoměr. Nálevka vede vodu do užší vnitřní nádoby, ze které se určí denní nebo 24hodinový
            úhrn. Fotografie a popis: <ReferenceLink href="https://www.weather.gov/abr/coop_equipment">NOAA/National Weather Service</ReferenceLink>; dílo federální vlády USA.
          </figcaption>
        </figure>

        <p>
          Vítr odklání kapky a zejména sněhové vločky nad ústím přístroje, smáčení stěn část vody zadrží a část se může
          odpařit. Zachycené množství je proto často o něco nižší než množství, které skutečně dopadlo na okolní povrch.
          Velikost chyby závisí na větru, druhu srážky, tvaru přístroje a jeho umístění. WMO proto předepisuje srovnávací
          přístroje, ochranné štíty a evidenci typu srážkoměru. <ReferenceLink href="https://repository.oceanbestpractices.org/bitstream/handle/11329/83/wmo_8_en-2012.pdf?sequence=1">WMO, kapitola 6</ReferenceLink>
        </p>

        <h3>Překlápěcí srážkoměr</h3>
        <p>
          Pod nálevkou jsou dvě malé vyvážené nádobky. Jakmile se jedna naplní množstvím odpovídajícím například 0,2 mm,
          převáží se, vyprázdní a pod proud vody se nastaví druhá. Přístroj uloží čas každého překlopení. Deset překlopení
          znamená úhrn 2 mm; deset překlopení během pěti minut zároveň ukazuje mnohem vyšší intenzitu než stejný počet za
          dvě hodiny.
        </p>

        <p>
          Při velmi silném dešti může část vody protéct během pohybu nádobky bez započtení a u sněhu je nutné vyhřívání.
          Automatický záznam proto potřebuje laboratorní kalibraci, pravidelnou kontrolu a srovnání s jiným přístrojem.
          Met Office například uvádí sběrnou plochu 750 cm² a jeden záznam na každých 0,2 mm, zatímco americký systém
          ASOS běžně registruje krok 0,01 palce. <ReferenceLink href="https://weather.metoffice.gov.uk/guides/observations/how-we-measure-rainfall">Met Office</ReferenceLink> a{" "}
          <ReferenceLink href="https://www.weather.gov/asos/TippingBucket.html">NOAA ASOS</ReferenceLink>
        </p>

        <h3>Meteorologický radar</h3>
        <p>
          Radar vysílá krátké mikrovlnné pulzy a měří energii rozptýlenou kapkami a ledovými částicemi zpět k anténě.
          Získá mnoho měření v prostoru během několika minut, takže zachytí pohyb a vnitřní členění srážkové oblasti mezi
          stanicemi. Odrazivost se následně převádí na odhad intenzity a jednotlivé snímky se sčítají na časový úhrn.
        </p>

        <p>
          Převod závisí na velikosti a skupenství částic. Terén může paprsek zakrýt, s rostoucí vzdáleností radar sleduje
          vyšší vrstvu atmosféry a při silné srážce se signál zeslabuje. Pro klimatický záznam se proto radarové odhady
          obvykle upravují podle srážkoměrů. Radar výborně popisuje prostor konkrétní události, jeho dlouhodobý záznam je
          však kratší a změny zařízení mohou vytvářet skoky.
        </p>

        <h3>Družice</h3>
        <p>
          Družicové přístroje srážkovou vodu v nádobě nesbírají. Mikrovlnné radiometry měří záření ovlivněné kapkami a
          ledem v oblaku, radary na družicích měří svislý profil odrazivosti a infračervené snímky sledují teplotu vrcholků
          oblaků. Výpočet z těchto signálů odhaduje intenzitu na zemském povrchu.
        </p>

        <p>
          GPCP vytváří měsíční mapy od roku 1979 a používá pozemní srážkoměry ke zpřesnění odhadu nad pevninou. IMERG
          skládá měření několika družic do půlhodinových polí; konečná výzkumná verze se dodatečně přizpůsobuje měsíčnímu
          staničnímu souboru. Družice doplňují oceány a řídce osídlená území, krátkou lokální průtrž však mohou mezi
          přelety minout nebo prostorově rozmazat. <ReferenceLink href="https://gpm.nasa.gov/sites/default/files/2023-07/IMERG_V07_ATBD_final_230712.pdf">IMERG V07, popis algoritmu</ReferenceLink>
        </p>

        <h2>Jak vzniká zveřejněný záznam</h2>
        <h3>1. Přístroj uloží přírůstky nebo celkový úhrn</h3>
        <p>
          Ručně odečítaná stanice obvykle hlásí součet za den. Automatický přístroj ukládá jednotlivá překlopení nebo
          změnu hmotnosti v minutovém až hodinovém kroku. Spolu s hodnotou musí zůstat zachován začátek a konec měření,
          protože „den“ může končit o místní pozorovací hodině, o půlnoci místního času nebo o půlnoci UTC.
        </p>

        <h3>2. Kontroly označí chybné a podezřelé hodnoty</h3>
        <p>
          Automatické testy hledají nemožná čísla, dlouhé opakování stejné nenulové hodnoty, kopie jiného období,
          osamocené extrémy a nesoulad se sousedními stanicemi. GHCN-Daily hodnotu s vadnou kontrolou označí příznakem a
          při některých chybách ji vyřadí. GSDR používá pro hodinová data 25 testů a 11 pravidel pro odstranění vadných
          záznamů, po nichž následuje ruční kontrola nejvyšších hodnot. <ReferenceLink href="https://doi.org/10.1175/2010JAMC2375.1">Durre et al., 2010</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1038/s41597-023-02238-4">Pritchard et al., 2023</ReferenceLink>
        </p>

        <h3>3. Z časových údajů vzniknou přesně definované ukazatele</h3>
        <p>
          Z denních dat lze pro každý rok sečíst úhrn mokrých dnů, vybrat nejvyšší jednodenní nebo pětidenní hodnotu a
          spočítat množství vody připadající na nejvlhčí dny. Z hodinových dat lze posuvným oknem najít nejvyšší úhrn za
          1, 3, 6, 12 nebo 24 hodin. Každý ukazatel má vlastní jednotku, interval a pravidlo pro chybějící data.
        </p>

        <h3>4. Stanice se převedou do mapy</h3>
        <p>
          Srážkoměr měří bod, zatímco mapa potřebuje hodnotu pro plochu. GPCC nejprve počítá odchylku stanice od jejího
          dlouhodobého průměru a tu prostorově rozkládá do mřížky. HadEX3 vkládá již vypočtené extrémní ukazatele do buněk
          a okolním stanicím dává váhu podle vzdálenosti. E-OBS vytváří evropské denní mapy statistickou interpolací a
          vedle nejlepšího odhadu zveřejňuje i nejistotu.
        </p>

        <h3>5. Pokrytí a nejistota zůstávají součástí výsledku</h3>
        <p>
          Počet dostupných stanic se mění mezi oblastmi i roky. Mřížkovaná hodnota v husté síti střední Evropy má jiné
          podklady než hodnota v oblasti s několika stanicemi. U krátkých intenzivních srážek je tento rozdíl ještě větší,
          protože hodinové záznamy jsou kratší a hůře dostupné. Seriózní výsledek proto uvádí mapu pokrytí, pravidlo pro
          mezery a období, za které byl trend počítán.
        </p>

        <h2>Zveřejňovaná data</h2>
        <p>
          Následující soubory nejsou vzájemnými kopiemi. Každý odpovídá jiné kombinaci prostoru, časového kroku a účelu;
          odkazy vedou na původní dokumentaci a stažení.
        </p>

        <div className="article-data-list">
          <section className="article-data-item">
            <h3>GPCC Precipitation Analysis Monthly</h3>
            <p>
              Globální měsíční srážky nad pevninou od roku 1891. Verze 2025 je dostupná na mřížkách 0,25°, 0,5°, 1° a
              2,5° a je sestavena výhradně z pozemních srážkoměrů.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://opendata.dwd.de/climate_environment/GPCC/html/download_gate.html">Stažení produktů GPCC</ReferenceLink>{" "}
              <ReferenceLink href="https://www.dwd.de/EN/ourservices/gpcc/gpcc.html">Popis a dokumentace</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>GHCN-Daily</h3>
            <p>
              Původní denní staniční údaje z více než 100 000 stanic ve 180 zemích a územích. Délka záznamu se mezi
              stanicemi výrazně liší; přibližně polovina stanic hlásí pouze srážky.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://www.ncei.noaa.gov/products/land-based-station/global-historical-climatology-network-daily">Dokumentace a přístup</ReferenceLink>{" "}
              <ReferenceLink href="https://www.ncei.noaa.gov/data/global-historical-climatology-network-daily/access/">Soubory jednotlivých stanic</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>HadEX3</h3>
            <p>
              Globální pozemní mapy 29 ukazatelů teplotních a srážkových extrémů pro roky 1901–2018. Srážková část
              čerpá přibližně ze 17 000 stanic; obsahuje celkový úhrn i nejvyšší jednodenní a pětidenní hodnoty.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://hadleyserver.metoffice.gov.uk/hadex3/download_etccdi.html">NetCDF a diagnostické grafy</ReferenceLink>{" "}
              <ReferenceLink href="https://www.metoffice.gov.uk/hadobs/hadex3/hadex3_product_user_guide.pdf">Uživatelská příručka</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>E-OBS 33.0e</h3>
            <p>
              Denní evropské mapy srážek od roku 1950 do konce roku 2025. Verze 33.0e byla vydána v květnu 2026;
              samostatně jsou dostupné i odvozené ukazatele extrémů.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://surfobs.climate.copernicus.eu/dataaccess/access_eobs.php">Denní E-OBS</ReferenceLink>{" "}
              <ReferenceLink href="https://surfobs.climate.copernicus.eu/dataaccess/access_eobs_indices.php">Ukazatele srážek</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>GSDR-I</h3>
            <p>
              Ukazatele vypočtené z hodinových měření 18 591 srážkoměrů. Po přísnější podmínce alespoň jednoho účinného
              roku a méně než 20 % mezer zůstává 12 104 stanic; dostupnost se v čase i prostoru výrazně mění.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://doi.org/10.5281/zenodo.7492812">Data na Zenodu</ReferenceLink>{" "}
              <ReferenceLink href="https://doi.org/10.1038/s41597-023-02238-4">Popis datového souboru</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>GPCP a IMERG</h3>
            <p>
              GPCP spojuje družice a srážkoměry do měsíčních globálních map od ledna 1979. IMERG V07 poskytuje
              půlhodinové odhady na mřížce 0,1° od června 2000 a je vhodný pro prostorový průběh jednotlivých událostí.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://www.ncei.noaa.gov/products/climate-data-records/precipitation-gpcp-monthly">GPCP Monthly</ReferenceLink>{" "}
              <ReferenceLink href="https://gpm.nasa.gov/data/directory">Adresář dat IMERG</ReferenceLink>
            </p>
          </section>
        </div>

        <h2>Celkové roční úhrny nad pevninou</h2>
        <p>
          HadEX3 označuje celkový roční úhrn z mokrých dnů zkratkou PRCPTOT. Graf níže porovnává čtyři generace globálních
          pozemních souborů. Každá čára je plošně vážená odchylka od průměru let 1961–1990, nikoli množství vody na celé
          planetě. Starší část má řidší pokrytí a jednotlivé roky silně kolísají.
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll">
            <Image
              className="article-figure__media"
              src="/media/precipitation/hadex3-prcptot-timeseries.png"
              alt="Časový vývoj odchylky ročního úhrnu srážek nad pevninou ve čtyřech datových souborech od roku 1901"
              width={1908}
              height={1280}
              sizes="(max-width: 850px) 1200px, 770px"
              unoptimized
            />
          </div>
          <figcaption>
            Odchylka celkového ročního úhrnu na mokrých dnech v milimetrech. Černě HadEX3, červeně HadEX2, zeleně HadEX
            a modře GHCNDEX; přerušovaná čára je průměr 1961–1990. Převzato beze změny z <ReferenceLink href="https://hadleyserver.metoffice.gov.uk/hadex3/download_etccdi.html">HadEX3</ReferenceLink>.
          </figcaption>
        </figure>

        <p>
          Globální průměr zakrývá protichůdné změny. Mapa pro roky 1950–2018 ukazuje nárůst v rozsáhlých částech severní
          Eurasie, severní a východní části Severní Ameriky a v některých oblastech jižní a jihovýchodní Asie. Pokles je
          patrný například kolem Středomoří, v části západní Afriky, Chile a jihozápadní Austrálie. Šedé a bílé oblasti
          nemají dostatečná data pro zobrazení.
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll">
            <Image
              className="article-figure__media"
              src="/media/precipitation/hadex3-prcptot-trend.png"
              alt="Mapa změny celkového ročního úhrnu srážek nad pevninou v letech 1950 až 2018"
              width={1908}
              height={1280}
              sizes="(max-width: 850px) 1200px, 770px"
              unoptimized
            />
          </div>
          <figcaption>
            Změna celkového ročního úhrnu na mokrých dnech v letech 1950–2018. Zelené odstíny znamenají více, hnědé méně
            milimetrů za desetiletí; černé body označují statisticky významný trend podle kritéria autorů. Mapa: <ReferenceLink href="https://hadleyserver.metoffice.gov.uk/hadex3/download_etccdi.html">HadEX3</ReferenceLink>.
          </figcaption>
        </figure>

        <h2>Nejvyšší jednodenní úhrny</h2>
        <p>
          Ukazatel Rx1day vybírá z každého roku jediný nejvyšší denní úhrn. Neříká, jak často silně pršelo ani kolik vody
          spadlo za celý rok. Umožňuje však porovnávat stejnou, přesně definovanou část denního záznamu na tisících stanic.
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll">
            <Image
              className="article-figure__media"
              src="/media/precipitation/hadex3-rx1day-timeseries.png"
              alt="Časový vývoj odchylky nejvyššího jednodenního ročního úhrnu ve čtyřech datových souborech"
              width={1908}
              height={1280}
              sizes="(max-width: 850px) 1200px, 770px"
              unoptimized
            />
          </div>
          <figcaption>
            Plošně vážená odchylka nejvyššího jednodenního úhrnu od průměru 1961–1990. Černě HadEX3, červeně HadEX2,
            zeleně HadEX a modře GHCNDEX. Čtyři zpracování se v překryvu shodují na dlouhodobém růstu, jednotlivé roky se
            však výrazně liší. Graf: <ReferenceLink href="https://hadleyserver.metoffice.gov.uk/hadex3/download_etccdi.html">HadEX3</ReferenceLink>.
          </figcaption>
        </figure>

        <p>
          Prostorové rozložení není rovnoměrné, kladné hodnoty jsou však častější než záporné. Westra a kol. analyzovali
          8 326 stanic s nejméně třicetiletým záznamem v letech 1900–2009: 64 % stanic mělo rostoucí a 36 % klesající
          nejvyšší denní úhrn. HadEX3 s jiným výběrem stanic a mřížkováním ukazuje převážně kladné změny také pro období
          1950–2018. <ReferenceLink href="https://doi.org/10.1175/JCLI-D-12-00502.1">Westra et al., 2013</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1029/2019JD032263">Dunn et al., 2020</ReferenceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll">
            <Image
              className="article-figure__media"
              src="/media/precipitation/hadex3-rx1day-trend.png"
              alt="Mapa změny nejvyššího jednodenního ročního úhrnu v letech 1950 až 2018"
              width={1908}
              height={1280}
              sizes="(max-width: 850px) 1200px, 770px"
              unoptimized
            />
          </div>
          <figcaption>
            Změna nejvyššího jednodenního úhrnu v letech 1950–2018. Zelená znamená nárůst, hnědá pokles v milimetrech za
            desetiletí; černé body označují statisticky významný trend podle kritéria autorů. Šedé oblasti nebyly
            vyhodnoceny. Mapa: <ReferenceLink href="https://hadleyserver.metoffice.gov.uk/hadex3/download_etccdi.html">HadEX3</ReferenceLink>.
          </figcaption>
        </figure>

        <h2>Hodinové a několikahodinové srážky</h2>
        <p>
          Krátké přívalové srážky vyžadují automatický záznam. GSDR-I shromáždil hodinová měření 18 591 stanic, ale jejich
          délka a úplnost jsou velmi nerovnoměrné. Dlouhé záznamy se soustřeďují do Evropy, Severní Ameriky, východní Asie
          a Austrálie; velká část Afriky, Jižní Ameriky a Blízkého východu zůstává řídká.
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll">
            <Image
              className="article-figure__media"
              src="/media/precipitation/gsdr-i-station-coverage.png"
              alt="Mapa délky hodinových srážkových záznamů a graf počtu dostupných stanic v jednotlivých letech"
              width={685}
              height={602}
              sizes="(max-width: 850px) 900px, 770px"
              unoptimized
            />
          </div>
          <figcaption>
            Nahoře jsou stanice GSDR-I obarvené podle účinné délky záznamu. Dole je počet stanic s méně než 20 % mezer v
            jednotlivých letech; maximum 7 150 současně dostupných stanic připadá na rok 2008. Pokles na konci neznamená
            zánik světové sítě, ale hlavně rozdílný konec dodaných archivů. Obrázek 2 z <ReferenceLink href="https://doi.org/10.1038/s41597-023-02238-4">Pritchard et al., 2023</ReferenceLink>, licence CC BY 4.0.
          </figcaption>
        </figure>

        <p>
          Některé dlouhé regionální záznamy ukazují růst krátkodobých extrémů. Lenderink a kol. nalezli dlouhodobé zvýšení
          hodinových maxim v De Biltu a Hongkongu. Guerreiro a kol. porovnali australská hodinová měření z let 1966–1989 a
          1990–2013 a zjistili zvýšení velikosti i četnosti nejsilnějších hodinových srážek na kontinentální úrovni.
          Výsledky jsou pozorováním pro konkrétní sítě a období, nikoli globálním průměrem. <ReferenceLink href="https://doi.org/10.5194/hess-15-3033-2011">Lenderink et al., 2011</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1038/s41558-018-0245-3">Guerreiro et al., 2018</ReferenceLink>
        </p>

        <h2>Srovnání dat</h2>
        <p>
          Celkové množství srážek lze porovnávat v GPCC, GPCP, GHCN-Daily, E-OBS a HadEX3, pokud se sjednotí oblast,
          období a délka intervalu. Nad pevninou se produkty opírají z velké části o stejné národní stanice, liší se však
          kontrolami, počtem přijatých stanic a převodem do mřížky. Nad oceány je dlouhodobý globální přehled založen na
          družicích a začíná až rokem 1979.
        </p>

        <p>
          Nejvyšší denní úhrn lze porovnat mezi původními stanicemi a HadEX3. Hodinová maxima z GSDR-I však představují
          samostatnou vrstvu pozorování. Z denního maxima nelze zpětně určit, zda voda spadla za dvacet minut, šest hodin
          nebo celý den, a půlhodinový družicový odhad není totožný s bodem změřeným srážkoměrem.
        </p>

        <p>
          Gu a Adler analyzovali globální GPCP v letech 1979–2020. Změna globálního průměru byla slabá: pro pevninu a
          oceán dohromady dosáhla významnosti na 90% hladině, samostatně nad pevninou ani oceánem významná nebyla. Na mapě
          se přitom objevovaly velké kladné i záporné regionální změny. To je důvod, proč u srážek nestačí jedna globální
          čára. <ReferenceLink href="https://doi.org/10.1007/s00382-022-06567-9">Gu &amp; Adler, 2023</ReferenceLink>
        </p>

        <h2 id="pozorovani">Pozorování</h2>
        <p>
          Pozemní srážkoměry, radary a družice přímo dokládají, že změna srážek má několik odlišných podob. Celkové roční
          množství, nejvyšší denní úhrn a nejvyšší hodinová intenzita se počítají z jiných časových úseků a nesmějí se
          sloučit do jediného údaje.
        </p>

        <h3>Celkové úhrny</h3>
        <p>
          Od poloviny 20. století se celkové roční úhrny v pozorovaných oblastech měnily oběma směry. HadEX3 ukazuje
          rozsáhlé nárůsty v severních středních a vysokých zeměpisných šířkách a současně poklesy v některých subtropických
          a jižních oblastech. GPCP pro roky 1979–2020 potvrzuje velké kladné i záporné regionální změny a jen slabou změnu
          globálního průměru. Pozorováním je tedy především prostorově členitá změna, nikoli stejný nárůst na celé Zemi.
        </p>

        <h3>Nejvyšší jednodenní úhrny</h3>
        <p>
          Nejvyšší jednodenní úhrn se ve většině dostatečně dlouhých staničních záznamů zvyšoval. Ve studii 8 326 stanic
          pro roky 1900–2009 měl kladný trend na 64 % míst. HadEX3 pro období 1950–2018 ukazuje převahu kladných změn také
          po převedení stanic do globální mřížky, zároveň však zachovává oblasti s poklesem a rozsáhlá území bez výsledku.
        </p>

        <h3>Hodinové extrémy</h3>
        <p>
          Dlouhé hodinové záznamy z Nizozemska, Hongkongu a rozsáhlejší australské sítě dokládají zesílení nejvyšších
          hodinových srážek v uvedených oblastech a obdobích. Globální hodinový archiv je podstatně kratší a prostorově
          řidší než denní data. K 31. červenci 2026 proto umožňuje přesně popsat dostupnost a regionální změny, ale
          neposkytuje rovnocenně dlouhý globální trend přívalových srážek pro celý svět.
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            Celkové roční úhrny srážek se od poloviny 20. století měnily rozdílně podle oblasti. Rozsáhlé nárůsty se
            objevily v severních středních a vysokých zeměpisných šířkách, zatímco v části subtropů a jižních oblastí
            úhrny klesaly; změna globálního průměru byla proti těmto regionálním rozdílům malá. Nejvyšší jednodenní
            úhrny se v letech 1900–2009 zvyšovaly na 64 % z 8 326 dlouhodobě sledovaných míst a převaha růstu pokračuje
            také v širším hodnocení let 1950–2018. Nejvyšší hodinové srážky zesílily v dlouhých záznamech z Nizozemska,
            Hongkongu a Austrálie. Pozorujeme tedy prostorově rozdílný vývoj celkového množství srážek a častější růst
            jejich nejsilnějších denních a v některých oblastech také hodinových úhrnů.
          </p>
        </div>

        <h2>Prameny, data a licence</h2>
        <div className="article-source-groups">
          <section>
            <h3>Historické a primární práce</h3>
            <ul>
              <li>
                Middleton, W. E. K. (1967): vývoj srážkoměrů od Castelliho a Wrena. <ReferenceLink href="https://doi.org/10.1061/JRCEA4.0000523">DOI 10.1061/JRCEA4.0000523</ReferenceLink>
              </li>
              <li>
                Mill, H. R. (1915): přehled principů samopisných srážkoměrů. <ReferenceLink href="https://doi.org/10.1038/095262a0">DOI 10.1038/095262a0</ReferenceLink>
              </li>
              <li>
                Alexander, L. V. et al. (2006): globální změny denních teplotních a srážkových extrémů. <ReferenceLink href="https://doi.org/10.1029/2005JD006290">DOI 10.1029/2005JD006290</ReferenceLink>
              </li>
              <li>
                Westra, S. et al. (2013): trendy ročních maxim denních srážek na 8 326 stanicích. <ReferenceLink href="https://doi.org/10.1175/JCLI-D-12-00502.1">DOI 10.1175/JCLI-D-12-00502.1</ReferenceLink>
              </li>
              <li>
                Donat, M. G. et al. (2013): globální soubor extrémů HadEX2. <ReferenceLink href="https://doi.org/10.1002/jgrd.50150">DOI 10.1002/jgrd.50150</ReferenceLink>
              </li>
              <li>
                Dunn, R. J. H. et al. (2020): vývoj a vyhodnocení HadEX3. <ReferenceLink href="https://doi.org/10.1029/2019JD032263">DOI 10.1029/2019JD032263</ReferenceLink>
              </li>
              <li>
                Gu, G. &amp; Adler, R. F. (2023): globální srážky v GPCP v letech 1979–2020. <ReferenceLink href="https://doi.org/10.1007/s00382-022-06567-9">DOI 10.1007/s00382-022-06567-9</ReferenceLink>
              </li>
              <li>
                Lewis, E. et al. (2019): první vydání globálního hodinového archivu GSDR. <ReferenceLink href="https://doi.org/10.1175/JCLI-D-18-0143.1">DOI 10.1175/JCLI-D-18-0143.1</ReferenceLink>
              </li>
              <li>
                Pritchard, D. et al. (2023): ukazatele hodinových srážek GSDR-I. <ReferenceLink href="https://doi.org/10.1038/s41597-023-02238-4">DOI 10.1038/s41597-023-02238-4</ReferenceLink>
              </li>
              <li>
                Lenderink, G. et al. (2011): hodinové extrémy v De Biltu a Hongkongu. <ReferenceLink href="https://doi.org/10.5194/hess-15-3033-2011">DOI 10.5194/hess-15-3033-2011</ReferenceLink>
              </li>
              <li>
                Guerreiro, S. B. et al. (2018): hodinové extrémy v australské síti. <ReferenceLink href="https://doi.org/10.1038/s41558-018-0245-3">DOI 10.1038/s41558-018-0245-3</ReferenceLink>
              </li>
            </ul>
          </section>

          <section>
            <h3>Metody a nejistoty</h3>
            <ul>
              <li>
                WMO: <em>Guide to Meteorological Instruments and Methods of Observation</em>, kapitola o měření srážek. <ReferenceLink href="https://repository.oceanbestpractices.org/bitstream/handle/11329/83/wmo_8_en-2012.pdf?sequence=1">Příručka WMO No. 8</ReferenceLink>
              </li>
              <li>
                Menne, M. J. et al. (2012): vznik a struktura GHCN-Daily. <ReferenceLink href="https://doi.org/10.1175/JTECH-D-11-00103.1">DOI 10.1175/JTECH-D-11-00103.1</ReferenceLink>
              </li>
              <li>
                Durre, I. et al. (2010): automatické kontroly denních staničních údajů. <ReferenceLink href="https://doi.org/10.1175/2010JAMC2375.1">DOI 10.1175/2010JAMC2375.1</ReferenceLink>
              </li>
              <li>
                Becker, A. et al. (2013): produkty a postupy GPCC. <ReferenceLink href="https://doi.org/10.5194/essd-5-71-2013">DOI 10.5194/essd-5-71-2013</ReferenceLink>
              </li>
              <li>
                Cornes, R. C. et al. (2018): soubor E-OBS a vyjádření nejistoty. <ReferenceLink href="https://doi.org/10.1029/2017JD028200">DOI 10.1029/2017JD028200</ReferenceLink>
              </li>
              <li>
                Huffman, G. J. et al.: popis algoritmu IMERG Version 07. <ReferenceLink href="https://gpm.nasa.gov/sites/default/files/2023-07/IMERG_V07_ATBD_final_230712.pdf">Algorithm Theoretical Basis Document</ReferenceLink>
              </li>
            </ul>
          </section>

          <section>
            <h3>Data ke stažení</h3>
            <ul>
              <li>
                DWD/GPCC: měsíční globální pozemní srážky od roku 1891. <ReferenceLink href="https://opendata.dwd.de/climate_environment/GPCC/html/download_gate.html">Download Gate</ReferenceLink>
              </li>
              <li>
                NOAA/NCEI: původní denní stanice GHCN-Daily. <ReferenceLink href="https://www.ncei.noaa.gov/data/global-historical-climatology-network-daily/access/">HTTPS archiv</ReferenceLink>
              </li>
              <li>
                Met Office: HadEX3, NetCDF jednotlivých ukazatelů a diagnostické grafy. <ReferenceLink href="https://hadleyserver.metoffice.gov.uk/hadex3/download_etccdi.html">Stažení HadEX3</ReferenceLink>
              </li>
              <li>
                Copernicus/KNMI: evropské denní E-OBS 33.0e a odvozené ukazatele. <ReferenceLink href="https://surfobs.climate.copernicus.eu/dataaccess/access_eobs.php">Stažení E-OBS</ReferenceLink>
              </li>
              <li>
                Newcastle University: GSDR-I, hodinové ukazatele pro stanice a mřížku. <ReferenceLink href="https://doi.org/10.5281/zenodo.7492812">Zenodo 7492812</ReferenceLink>
              </li>
              <li>
                NOAA/NCEI: GPCP Monthly V2.3. <ReferenceLink href="https://www.ncei.noaa.gov/data/global-precipitation-climatology-project-gpcp-monthly/access/">Přímý datový archiv</ReferenceLink>
              </li>
              <li>
                NASA GES DISC: IMERG Final V07, půlhodinový produkt. <ReferenceLink href="https://doi.org/10.5067/GPM/IMERG/3B-HH/07">DOI datového souboru</ReferenceLink>
              </li>
            </ul>
          </section>

          <section>
            <h3>Obrázky a práva k použití</h3>
            <ul>
              <li>
                Fotografie srážkoměrů pocházejí z <ReferenceLink href="https://www.weather.gov/abr/coop_equipment">NOAA/National Weather Service</ReferenceLink>. Jde o materiál federální vlády USA, pokud u položky není uvedeno jinak.
              </li>
              <li>
                Grafy PRCPTOT a Rx1day byly převzaty beze změny z <ReferenceLink href="https://hadleyserver.metoffice.gov.uk/hadex3/download_etccdi.html">Met Office HadEX3</ReferenceLink>. © Crown copyright; data a grafy jsou poskytovány pod <ReferenceLink href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government Licence v3.0</ReferenceLink>.
              </li>
              <li>
                Mapa a časový přehled stanic GSDR-I jsou obrázkem 2 z práce <ReferenceLink href="https://doi.org/10.1038/s41597-023-02238-4">Pritchard et al., 2023</ReferenceLink>, zveřejněné pod licencí <ReferenceLink href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</ReferenceLink>.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
