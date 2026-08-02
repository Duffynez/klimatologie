import Image from "next/image";
import type { ReactNode } from "react";

function ReferenceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="article-reference" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function AtmosphericHumidityArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>Měrná vlhkost</dt>
            <dd>
              Hmotnost vodní páry připadající na hmotnost vlhkého vzduchu. Obvykle se uvádí v gramech vodní páry na
              kilogram vzduchu, tedy v g/kg.
            </dd>
          </div>
          <div>
            <dt>Relativní vlhkost</dt>
            <dd>
              Poměr skutečného tlaku vodní páry k tlaku při nasycení za stejné teploty. Udává se v procentech.
            </dd>
          </div>
          <div>
            <dt>Rosný bod</dt>
            <dd>
              Teplota, při které by se vzduch při daném množství vodní páry právě nasytil a začala by vznikat rosa.
            </dd>
          </div>
          <div>
            <dt>Vodní pára ve sloupci</dt>
            <dd>
              Celková hmotnost vodní páry nad jedním metrem čtverečním povrchu. Hodnota 25 kg/m² odpovídá 25 mm
              kapalné vody po úplném zkondenzování.
            </dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Tyto veličiny se navzájem doplňují, ale nejsou zaměnitelné. Údaj o měrné vlhkosti, relativní vlhkosti a
          vodní páře v celém sloupci popisuje pokaždé jinou vlastnost vzduchu.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Vlhkost atmosféry popisuje množství vodní páry ve vzduchu. U povrchu ji přístroje sledují v místě stanice,
          na lodi nebo bóji, radiosonda ji zaznamenává během letu vzhůru a družice či pozemní přijímače měří její
          množství v celém sloupci atmosféry. Výsledek proto vždy potřebuje název veličiny, místo nebo oblast, výšku a
          čas.
        </p>

        <p>
          U povrchu se pro dlouhodobé sledování používají především měrná a relativní vlhkost. Měrná vlhkost říká,
          kolik gramů vodní páry připadá na kilogram vlhkého vzduchu. Relativní vlhkost vyjadřuje, jak blízko je
          vzduch nasycení při své současné teplotě. Stejný vzduch proto může mít nezměněné množství vodní páry, ale po
          změně teploty jinou relativní vlhkost. Vymezení obou veličin i způsob jejich výpočtu z teploty a rosného bodu
          popisuje{" "}
          <ReferenceLink href="https://repository.oceanbestpractices.org/bitstream/handle/11329/83/wmo_8_en-2012.pdf?sequence=1">
            přístrojová příručka WMO
          </ReferenceLink>
          .
        </p>

        <p>
          Dai v roce 2006 sestavil globální přehled měrné a relativní vlhkosti z více než 15 000 pozemních a lodních
          záznamů. Willett a kol. v roce 2008 vytvořili společný soubor HadCRUH pro pevninu i oceán. Následné práce
          oddělily podrobně zpracovaná měření nad pevninou a mořem do dnešního souboru HadISDH. Všechny tyto práce
          používají stejné základní rozlišení: množství vodní páry a míra nasycení vzduchu jsou dvě samostatně
          zveřejňované veličiny.{" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI3816.1">Dai, 2006</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1175/2008JCLI2274.1">Willett et al., 2008</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.5194/cp-10-1983-2014">Willett et al., 2014</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-12-2853-2020">Willett et al., 2020</ReferenceLink>
        </p>

        <p>
          Radiosonda přidává třetí rozměr. Během výstupu měří tlak, teplotu a relativní vlhkost, takže pro každou
          dosaženou výšku vznikne samostatný údaj. Z těchto profilů lze také sečíst vodní páru mezi povrchem a zvolenou
          horní hladinou. Archiv IGRA uchovává původní profily i odvozené veličiny; přesnost dlouhodobého srovnání
          závisí na znalosti typu čidla a změn v provozu stanice.{" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI3594.1">Durre et al., 2006</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.5194/amt-7-4463-2014">Dirksen et al., 2014</ReferenceLink>
        </p>

        <p>
          Nad oceány se od roku 1987 sleduje také celkové množství vodní páry mikrovlnnými radiometry na družicích.
          Výsledek se uvádí v kg/m². Protože jeden kilogram vody rozprostřený na jednom metru čtverečním vytvoří vrstvu
          vysokou jeden milimetr, stejné číslo lze zapsat také v milimetrech. Mears a kol. takto spojili měření
          jedenácti družicových přístrojů do vzájemně kalibrovaného záznamu od ledna 1988.{" "}
          <ReferenceLink href="https://doi.org/10.1002/2018EA000363">Mears et al., 2018</ReferenceLink>
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/atmospheric-humidity/nasa-water-vapor-noaa20.jpg"
            alt="Družice NOAA-20 nad Zemí, za ní prostorové zobrazení vodní páry a pod ním mapa jejího celkového množství ve sloupci"
            width={1024}
            height={576}
            sizes="(max-width: 850px) 100vw, 770px"
            unoptimized
          />
          <figcaption>
            Dva způsoby zobrazení téhož přeletu družice NOAA-20 v lednu 2021. Bílá struktura znázorňuje rozložení
            vlhkosti s výškou, barva na povrchu celkové množství vodní páry ve sloupci. Jde o prostorovou orientaci,
            nikoli o graf dlouhodobé změny; výška i hustota bílé vrstvy jsou ve vizualizaci zvětšeny. Data: přístroj
            ATMS na NOAA-20. Vizualizace a kredit:{" "}
            <ReferenceLink href="https://svs.gsfc.nasa.gov/4939">
              NASA Scientific Visualization Studio
            </ReferenceLink>
            .
          </figcaption>
        </figure>

        <h2>Historie měření</h2>
        <p>
          Horace-Bénédict de Saussure v roce 1783 vydal <em>Essais sur l&apos;hygrométrie</em>, rozsáhlý popis
          vlasového vlhkoměru, jeho kalibrace i pozorování v různých podmínkách. Odmaštěný lidský vlas se při změně
          vlhkosti prodlužoval nebo zkracoval a přes páku pohyboval ručičkou. Přístroj umožnil opakovatelně sledovat
          změny vlhkosti, jeho stupnice však vyjadřovala odezvu konkrétního materiálu.{" "}
          <ReferenceLink href="https://books.google.com/books?id=Zmkfb8I-kVEC">
            de Saussure, 1783, digitalizovaný svazek
          </ReferenceLink>
        </p>

        <p>
          John Frederic Daniell v roce 1820 popsal kondenzační vlhkoměr. Jednu část přístroje ochlazoval odpařováním
          éteru a zaznamenal teplotu, při níž se na druhé baňce objevila rosa. Tím získal rosný bod, tedy veličinu
          založenou na pozorovaném okamžiku kondenzace. Dochovaný přístroj a odkaz na původní článek zveřejňuje
          Smithsonian Institution.{" "}
          <ReferenceLink href="https://www.si.edu/object/nmah_1167504">
            Daniellův vlhkoměr, Smithsonian
          </ReferenceLink>
        </p>

        <p>
          V první polovině 19. století se rozšířil psychrometr se dvěma teploměry. Baňka jednoho zůstává suchá, druhou
          obaluje navlhčený knot. Odpařování ochlazuje vlhký teploměr a z rozdílu obou teplot se společně s tlakem
          vypočte vlhkost. Tento princip se stal základem velké části historických staničních i lodních měření a WMO
          jej dodnes popisuje jako jednu z referenčních měřicích metod.{" "}
          <ReferenceLink href="https://repository.oceanbestpractices.org/bitstream/handle/11329/83/wmo_8_en-2012.pdf?sequence=1">
            WMO, kapitola o měření vlhkosti
          </ReferenceLink>
        </p>

        <p>
          Měření ve volné atmosféře umožnily radiosondy. V roce 1930 vznikly přístroje, které rádiem předávaly údaje o
          tlaku, teplotě a vlhkosti během letu na balónu; v prosinci 1931 vypustil první finskou radiosondu Vilho
          Väisälä. Pravidelné výstupy se během dalších desetiletí staly součástí meteorologických sítí. Historii
          jednotlivých konstrukcí shrnuje přehled vývoje atmosférických pozorovacích systémů a vlastní měření dnes
          uchovává archiv IGRA.{" "}
          <ReferenceLink href="https://doi.org/10.1175/AMSMONOGRAPHS-D-18-0006.1">
            Fleming et al., 2018
          </ReferenceLink>
        </p>

        <p>
          Další dva způsoby rozšířily měření celého sloupce atmosféry. Družicový radiometr SSM/I začal pravidelně
          pracovat v červenci 1987 a jeho nástupci poskytují mikrovlnná měření nad oceány. Bevis a kol. v roce 1992
          ukázali, že množství vodní páry lze určit také ze zpoždění rádiového signálu mezi navigační družicí a přesně
          zaměřeným přijímačem na zemi.{" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/products/ssmi-hydrological">NOAA SSM/I</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1029/92JD01517">Bevis et al., 1992</ReferenceLink>
        </p>

        <h2>Jak se vlhkost měří</h2>
        <h3>Stanice, lodě a bóje</h3>
        <p>
          Meteorologická stanice obvykle zaznamenává teplotu vzduchu a jeden přímý vlhkostní údaj: relativní vlhkost,
          rosný bod nebo rozdíl mezi suchým a vlhkým teploměrem. Moderní elektronické čidlo mění svou elektrickou
          kapacitu či odpor podle množství pohlcené vodní páry. Kondenzační vlhkoměr naopak ochlazuje zrcátko a měří
          teplotu, při které se na jeho povrchu vytvoří rosa nebo jinovatka. Z teploty, tlaku a jednoho takového údaje
          lze podle standardních vztahů vypočítat další vlhkostní veličiny.{" "}
          <ReferenceLink href="https://repository.oceanbestpractices.org/bitstream/handle/11329/83/wmo_8_en-2012.pdf?sequence=1">
            WMO Guide No. 8
          </ReferenceLink>
        </p>

        <p>
          Čidlo potřebuje proudící okolní vzduch, ochranu před srážkami a slunečním zářením a známou výšku nad
          povrchem. Nad pevninou se běžně pracuje s měřením přibližně ve dvou metrech. Na lodích se výška přístroje
          mezi plavidly liší a s výměnou lodního parku se v čase měnila; HadISDH.marine proto používá informace o
          výšce a typu ventilace při korekci známých rozdílů.{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-12-2853-2020">Willett et al., 2020</ReferenceLink>
        </p>

        <h3>Radiosonda</h3>
        <p>
          Malou sondu vynese balón obvykle do výšky přes 25 kilometrů. Přístroj během letu opakovaně vysílá tlak,
          teplotu, relativní vlhkost a polohu. Z každé sekundy letu tak vzniká bod s časem a výškou; spojením bodů
          vznikne svislý profil. Ve studii Durre a kol. byly z teploty, tlaku a poklesu rosného bodu vypočteny také
          součty vodní páry mezi povrchem a tlakovou hladinou 500 hPa.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2008JD010989">Durre et al., 2009</ReferenceLink>
        </p>

        <figure className="article-figure article-figure--portrait">
          <Image
            className="article-figure__media"
            src="/media/atmospheric-humidity/noaa-rawinsonde-launch.jpg"
            alt="Vypuštěný meteorologický balón s padákem a malou radiosondou zavěšenou pod ním"
            width={1184}
            height={1796}
            sizes="(max-width: 600px) 100vw, 460px"
            unoptimized
          />
          <figcaption>
            Radiosonda krátce po vypuštění. Nahoře je balón, uprostřed padák a dole přístrojová skříňka, která během
            letu měří mimo jiné teplotu, tlak a relativní vlhkost a údaje vysílá přijímací stanici. Fotografie a popis:{" "}
            <ReferenceLink href="https://www.noaa.gov/noaa-collections/photo-library/nssl0020jpg">
              NOAA Photo Library, NSSL
            </ReferenceLink>
            ; dílo federální vlády USA.
          </figcaption>
        </figure>

        <p>
          Vlhkostní čidlo radiosondy reaguje pomaleji v chladném vzduchu a za dne jej ovlivňuje sluneční záření.
          Jednotlivé typy sond mají odlišnou kalibraci a v minulosti se velmi nízké hodnoty někdy vůbec nehlásily.
          Referenční síť GRUAN proto ke každému profilu připojuje korekce i nejistotu závislou na výšce. Dirksen a kol.
          u sondy Vaisala RS92 popsali například opravu suchého zkreslení způsobeného zářením a porovnání s
          přesnějšími mrazovými vlhkoměry.{" "}
          <ReferenceLink href="https://doi.org/10.5194/amt-7-4463-2014">Dirksen et al., 2014</ReferenceLink>
        </p>

        <h3>Mikrovlnný radiometr na družici</h3>
        <p>
          Povrch oceánu a atmosféra vyzařují mikrovlnné záření. Radiometr měří jeho intenzitu v několika přesně
          zvolených frekvenčních pásmech, z nichž některá jsou citlivá na vodní páru. Výpočet hledá takové množství
          vodní páry, při kterém modelované záření nejlépe odpovídá měření. Nad nezamrzlým oceánem lze zároveň odhadnout
          vliv kapalné vody v oblacích, větru a teploty mořské hladiny.{" "}
          <ReferenceLink href="https://doi.org/10.1002/2018EA000363">Mears et al., 2018</ReferenceLink>
        </p>

        <p>
          Jedna družice nepokrývá celé sledované období. Soubor Remote Sensing Systems proto převádí přístroje SSM/I,
          SSMIS, AMSR-E, WindSat a další na společnou kalibraci, porovnává jejich souběžná měření a teprve poté skládá
          denní a měsíční mapy. Výsledkem je pozorování celkové vodní páry nad nezamrzlými oceány od ledna 1988 v
          buňkách o velikosti jednoho stupně.{" "}
          <ReferenceLink href="https://www.remss.com/measurements/atmospheric-water-vapor/tpw-1-deg-product/">
            RSS TPW Version 7 Release 1
          </ReferenceLink>
        </p>

        <h3>Pozemní přijímač navigačních družic</h3>
        <p>
          Rádiový signál navigační družice se ve vlhké atmosféře zpozdí. Přesně zaměřený přijímač GNSS změří celkové
          zpoždění, z tlaku u stanice se vypočte jeho suchá část a zbývající část se převede na množství vodní páry nad
          přijímačem. Potřebná je také teplota, která tento převod zpřesňuje. Metodu formulovali Bevis a kol.; dnešní
          sítě poskytují téměř souvislá měření za každého počasí.{" "}
          <ReferenceLink href="https://doi.org/10.1029/92JD01517">Bevis et al., 1992</ReferenceLink>
        </p>

        <h2>Jak vzniká zveřejněný záznam</h2>
        <h3>1. Z původního hlášení vzniknou vlhkostní veličiny</h3>
        <p>
          Pozemní a lodní hlášení obsahuje čas, polohu, teplotu, tlak a rosný bod nebo relativní vlhkost. HadISDH
          provádí převody už z jednotlivých hodinových hodnot. To je důležité, protože vztahy mezi teplotou, rosným
          bodem a relativní vlhkostí nejsou lineární; měsíční průměr jedné veličiny proto nelze beze zbytku převést na
          měsíční průměr jiné.{" "}
          <ReferenceLink href="https://doi.org/10.5194/cp-10-1983-2014">Willett et al., 2014</ReferenceLink>
        </p>

        <h3>2. Automatické kontroly označí nepravděpodobná měření</h3>
        <p>
          Kontroluje se platnost polohy a času, fyzikálně možné meze, náhlé opakování stejné hodnoty, neobvyklý skok i
          soulad se sousedními stanicemi. Podezřelý údaj dostane příznak kvality a do klimatického výpočtu nevstoupí.
          Původní hlášení přitom zůstává oddělené od opraveného souboru, takže lze zpětně zjistit, co kontrola
          vyřadila.{" "}
          <ReferenceLink href="https://doi.org/10.5194/cp-8-1649-2012">Dunn et al., 2012</ReferenceLink>
        </p>

        <h3>3. Změny přístroje a stanice se hledají v sousedních záznamech</h3>
        <p>
          Přestěhování stanice, změna denní doby odečtu nebo výměna psychrometru za elektronické čidlo mohou vytvořit
          skok, který nepatří skutečné změně okolního vzduchu. HadISDH hledá takové zlomy porovnáním stanice s okolními
          místy a používá údaje o známých změnách provozu. U lodí se samostatně opravuje výška měření a nedostatečné
          proudění vzduchu kolem některých přístrojů.{" "}
          <ReferenceLink href="https://doi.org/10.5194/cp-10-1983-2014">Pevnina</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-12-2853-2020">oceán</ReferenceLink>
        </p>

        <h3>4. Měsíční hodnoty se ukládají do zeměpisné mřížky</h3>
        <p>
          HadISDH zprůměruje platná měření stanice nebo lodi za měsíc a poté je spojí v buňkách širokých pět stupňů
          zeměpisné délky i šířky. Zveřejňuje skutečné hodnoty i odchylky od průměru let 1991–2020. Prázdná buňka zůstane
          prázdná; HadISDH do ní nedopočítává chybějící pozorování. Globální průměr proto popisuje dostupné buňky mezi
          70° jižní a 70° severní šířky, nikoli rovnoměrně pozorovaný celý povrch.
        </p>

        <h3>5. Družicová měření se nejprve sjednotí mezi přístroji</h3>
        <p>
          Radiometry se liší oběžnou dráhou, frekvencemi i dobou místního přeletu. RSS porovnává současně pracující
          přístroje, opravuje vzájemné posuny a z výsledků vytváří mapy se stejnou mřížkou. Měření nad pevninou, mořským
          ledem a při silném dešti jsou z klimatického souboru mikrovlnné vodní páry vynechána, protože odezvu povrchu
          a kapalné vody nelze stejným postupem spolehlivě oddělit.{" "}
          <ReferenceLink href="https://doi.org/10.1002/2018EA000363">Mears et al., 2018</ReferenceLink>
        </p>

        <h3>6. Nejistota se počítá pro měření i pro nepozorovaná místa</h3>
        <p>
          U HadISDH se odděleně vyčísluje nejistota přístroje, zaokrouhlení starých hlášení, výpočtu referenčního
          průměru, úprav známých zkreslení, zastoupení jednotlivých dnů v měsíci a zeměpisného pokrytí. U družicového
          souboru přibývá nejistota kalibrace, převodového výpočtu a spojení jednotlivých radiometrů. Proto je vedle
          samotného čísla podstatná i verze souboru, maska dostupných míst a interval nejistoty.
        </p>

        <h2>Zveřejňovaná data</h2>
        <p>
          Následující soubory zveřejňují přímo měřenou vlhkost nebo výsledek odvozený z konkrétního přístrojového
          signálu. Každý má jiný prostorový rozsah, počátek i časové rozlišení.
        </p>

        <div className="article-data-list">
          <section className="article-data-item">
            <h3>HadISDH.land</h3>
            <p>
              Měsíční vlhkost nad pevninou od ledna 1973. Verze 4.6.1.2024f vychází z hodinových hlášení více než
              5 600 stanic, po kontrolách a požadavku na dostatečnou délku však počet použitých stanic závisí na
              veličině a měsíci. Data mají mřížku 5° × 5°, referenční období 1991–2020 a zveřejněnou nejistotu.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://www.metoffice.gov.uk/hadobs/hadisdh/downloadLAND.html">
                Stažení dat
              </ReferenceLink>
              {" · "}
              <ReferenceLink href="https://www.metoffice.gov.uk/hadobs/hadisdh/onlinematerialLAND.html">
                Grafy a textové tabulky
              </ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>HadISDH.marine a HadISDH.blend</h3>
            <p>
              Měsíční lodní měření nad oceány a jejich spojení s pevninou od ledna 1973. Konečné verze
              HadISDH.marine.1.6.1.2024f a HadISDH.blend.1.5.1.2024f končí prosincem 2024. Pokrytí je nejúplnější v
              severních oceánech a podstatně řidší jižně od 20° jižní šířky.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://www.metoffice.gov.uk/hadobs/hadisdh/downloadMARINE.html">
                Oceánská data
              </ReferenceLink>
              {" · "}
              <ReferenceLink href="https://www.metoffice.gov.uk/hadobs/hadisdh/downloadBLEND.html">
                Spojená data
              </ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>IGRA 2.2</h3>
            <p>
              Archiv jednotlivých radiosondážních profilů z více než 2 800 stanic. Obsahuje tlak, teplotu, relativní
              vlhkost, pokles rosného bodu, vítr a odvozené veličiny. Nejstarší části archivu začínají rokem 1905,
              dostupnost vlhkosti je však u každé stanice a výšky jiná a často začíná mnohem později.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://www.ncei.noaa.gov/products/weather-balloon/integrated-global-radiosonde-archive">
                Popis, dokumentace a stažení
              </ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>GRUAN</h3>
            <p>
              Referenčně zpracované radiosondáže s korekcemi a nejistotou uvedenou u každé výšky. Síť je menší než
              IGRA, ale její postup je určen pro přesné porovnávání přístrojů a dlouhodobé sledování horní atmosféry.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://www.gruan.org/data/data-products">
                Certifikované datové produkty
              </ReferenceLink>
              {" · "}
              <ReferenceLink href="https://doi.org/10.5194/amt-7-4463-2014">Metodika</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>RSS Total Precipitable Water</h3>
            <p>
              Celkové množství vodní páry nad nezamrzlými oceány od ledna 1988. Klimatický produkt Version 7 Release
              1 spojuje mikrovlnné radiometry do měsíčních map 1° × 1° a zveřejňuje je v souborech NetCDF.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://www.remss.com/measurements/atmospheric-water-vapor/tpw-1-deg-product/">
                Data, dokumentace a citace
              </ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>State of the Climate</h3>
            <p>
              Každoroční srovnání HadISDH, mikrovlnných radiometrů, pozemních GNSS přijímačů, rádiových zákrytů a
              atmosférických reanalýz. Zpráva uvádí stejnou základní periodu 1991–2020, přesné masky a období trendů,
              takže je možné porovnat, kde se nezávislé způsoby měření shodují a kde se rozcházejí.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://repository.library.noaa.gov/view/noaa/71485/noaa_71485_DS1.pdf">
                State of the Climate in 2024
              </ReferenceLink>
            </p>
          </section>
        </div>

        <h2>Srovnání dat</h2>
        <p>
          HadISDH sleduje vzduch přibližně ve dvou metrech nad pevninou a kolem deseti metrů nad oceánem. Družicové a
          GNSS soubory sčítají vodní páru v celé výšce atmosféry. Radiosonda mezi těmito pohledy ukazuje, ve kterých
          výškách se vodní pára nacházela. Shodný směr změny těchto výsledků je vzájemně podpůrný, jejich číselné trendy
          se však přímo odečítat nebo průměrovat nesmějí.
        </p>

        <p>
          Pozorovací soubor ponechává nepozorovaná místa prázdná. Reanalýza naproti tomu kombinuje rozmanitá měření s
          výpočtovým modelem a vytváří souvislou mapu. Allan a kol. ukázali, že změna zeměpisného pokrytí může ovlivnit
          globální průměr HadISDH; proto vedle čistě pozorovaných buněk porovnávali i variantu doplněnou reanalýzou.
          Zpráva za rok 2024 z téhož důvodu ukazuje ERA5 jak na celé ploše, tak pouze v místech pokrytých HadISDH.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2022JD036728">Allan et al., 2022</ReferenceLink>
        </p>

        <p>
          Relativní vlhkost nad oceánem je nejobtížnější součást srovnání. Lodní přístroje pracovaly v různých výškách
          a s různým prouděním vzduchu, pokrytí jižních oceánů je řídké a jednotlivé reanalýzy se v meziročním průběhu
          rozcházejí. Zpráva <em>State of the Climate in 2024</em> proto u oceánské relativní vlhkosti neuvádí
          dlouhodobý rekord a výslovně označuje její nejistotu za velkou.
        </p>

        <h2>Rozložení změn u povrchu</h2>
        <p>
          Mapa měrné vlhkosti odpovídá na otázku, kde se mezi lety 1973 a 2024 měnilo množství vodní páry v jednom
          kilogramu vzduchu. Zelené buňky mají kladný trend a hnědé záporný. Bílá místa nemají dostatek pozorování pro
          výpočet; neznamenají nulovou změnu.
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll">
            <Image
              className="article-figure__media"
              src="/media/atmospheric-humidity/hadisdh-specific-humidity-trend-1973-2024.png"
              alt="Mapa trendu měrné vlhkosti HadISDH v letech 1973 až 2024 a souhrn trendů podle zeměpisné šířky"
              width={1000}
              height={500}
              sizes="(max-width: 700px) 720px, 770px"
              unoptimized
            />
          </div>
          <div className="article-figure__key" aria-label="Vysvětlení mapy měrné vlhkosti">
            <p>
              <strong>a) Mapa.</strong> Každý barevný čtverec je trend v jedné buňce 5° × 5° v g/kg za desetiletí.
              Ohraničené buňky mají devadesátiprocentní interval spolehlivosti celý na jedné straně nuly.
            </p>
            <p>
              <strong>b) Zeměpisné šířky.</strong> Tečky jsou jednotlivé buňky, černá čára jejich průměr v dané šířce.
              Šedé plochy ukazují dostupnou zeměpisnou plochu a její skutečně pozorovanou část.
            </p>
          </div>
          <figcaption>
            Lineární trend měrné vlhkosti u povrchu v souboru HadISDH.blend.1.5.1.2024f, 1973–2024. Výpočet používá
            pozorované buňky nad pevninou a z lodí; intervaly zohledňují časovou závislost ročních hodnot. Zdroj:{" "}
            <ReferenceLink href="https://www.metoffice.gov.uk/hadobs/hadisdh/trendmaterialBLEND.html">
              Met Office Hadley Centre
            </ReferenceLink>
            . © British Crown copyright 2025, Met Office. Contains public sector information licensed under the{" "}
            <ReferenceLink href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">
              Open Government Licence v3.0
            </ReferenceLink>
            .
          </figcaption>
        </figure>

        <p>
          Relativní vlhkost odpovídá na jinou otázku: jak se změnila míra nasycení vzduchu při teplotě, kterou měl v
          okamžiku měření. Hnědé buňky na druhé mapě tedy označují pokles relativní vlhkosti, nikoli automaticky úbytek
          vodní páry. Právě proto jsou obě mapy zveřejněny vedle sebe a používají rozdílné jednotky.
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll">
            <Image
              className="article-figure__media"
              src="/media/atmospheric-humidity/hadisdh-relative-humidity-trend-1973-2024.png"
              alt="Mapa trendu relativní vlhkosti HadISDH v letech 1973 až 2024 a souhrn trendů podle zeměpisné šířky"
              width={1000}
              height={500}
              sizes="(max-width: 700px) 720px, 770px"
              unoptimized
            />
          </div>
          <div className="article-figure__key" aria-label="Vysvětlení mapy relativní vlhkosti">
            <p>
              <strong>a) Mapa.</strong> Barva udává změnu relativní vlhkosti v procentních bodech za desetiletí.
              Hnědá znamená pokles, zelená vzestup a bílá chybějící výpočet.
            </p>
            <p>
              <strong>b) Zeměpisné šířky.</strong> Černá čára shrnuje pozorované buňky v každém šířkovém pásu. Rozsah
              osy je jiný než u předchozí mapy, protože jednotkou jsou procentní body.
            </p>
          </div>
          <figcaption>
            Lineární trend relativní vlhkosti u povrchu v souboru HadISDH.blend.1.5.1.2024f, 1973–2024. Zdroj:{" "}
            <ReferenceLink href="https://www.metoffice.gov.uk/hadobs/hadisdh/trendmaterialBLEND.html">
              Met Office Hadley Centre
            </ReferenceLink>
            . © British Crown copyright 2025, Met Office. Contains public sector information licensed under the{" "}
            <ReferenceLink href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">
              Open Government Licence v3.0
            </ReferenceLink>
            .
          </figcaption>
        </figure>

        <h2 id="pozorovani">Pozorování</h2>
        <p className="article-prose__intro">
          Přímá měření u povrchu ukazují, že od roku 1973 vzrostlo množství vodní páry v pozorovaných částech pevniny i
          oceánu. Relativní vlhkost se vyvíjela odlišně: v globálním souhrnu pozemních stanic poklesla, zatímco nad
          oceány zůstává její dlouhodobá změna podstatně méně jistá. Družicová měření současně ukazují růst celkového
          množství vodní páry ve sloupci nad nezamrzlými oceány od roku 1988.
        </p>

        <p>
          Konečná verze HadISDH za období 1973–2024 uvádí pro pozorované pozemní buňky trend měrné vlhkosti{" "}
          <strong>+0,10 g/kg za desetiletí</strong> s devadesátiprocentním intervalem od +0,08 do +0,12 g/kg. Nad
          oceánem vychází stejná střední hodnota <strong>+0,10 g/kg za desetiletí</strong>, interval je širší: +0,07 až
          +0,12 g/kg. Čísla se vztahují k dostupným buňkám mezi 70° jižní a 70° severní šířky a zahrnují opravu časové
          závislosti ročních hodnot.{" "}
          <ReferenceLink href="https://www.metoffice.gov.uk/hadobs/hadisdh/onlinematerialLAND.html">
            HadISDH.land 4.6.1.2024f
          </ReferenceLink> a{" "}
          <ReferenceLink href="https://www.metoffice.gov.uk/hadobs/hadisdh/onlinematerialMARINE.html">
            HadISDH.marine 1.6.1.2024f
          </ReferenceLink>
        </p>

        <p>
          U relativní vlhkosti nad pevninou uvádí HadISDH v témže období trend{" "}
          <strong>−0,17 procentního bodu za desetiletí</strong>, s intervalem −0,28 až −0,07. Oceánský výsledek je
          −0,07 procentního bodu za desetiletí s intervalem −0,14 až 0,00. Oceánský interval dosahuje nuly a jednotlivé
          datové soubory se v průběhu relativní vlhkosti nad mořem neshodují natolik, aby zpráva za rok 2024 označila
          dlouhodobý oceánský trend za spolehlivě určený.
        </p>

        <p>
          Rok 2024 měl v HadISDH průměrnou měrnou vlhkost nad pevninou o <strong>0,49 g/kg</strong> a nad oceánem o{" "}
          <strong>0,56 g/kg</strong> vyšší než průměr let 1991–2020. Obě hodnoty byly v daných souborech nejvyšší od
          začátku záznamu v roce 1973. Ostatní produkty uvedené ve <em>State of the Climate in 2024</em> rovněž
          označily rok 2024 za nejvyšší: odchylky měrné vlhkosti se pohybovaly od 0,32 do 0,58 g/kg nad pevninou a od
          0,35 do 0,56 g/kg nad oceánem.{" "}
          <ReferenceLink href="https://repository.library.noaa.gov/view/noaa/71485/noaa_71485_DS1.pdf">
            Willett et al., 2025, tabulka 2.6
          </ReferenceLink>
        </p>

        <p>
          Relativní vlhkost nad pevninou zůstala v roce 2024 u všech produktů kromě MERRA-2 pod průměrem let
          1991–2020. HadISDH uvádí odchylku <strong>−0,13 procentního bodu</strong>. Nad oceánem měla v témže souboru
          hodnotu +0,71 procentního bodu, zatímco ERA5 uváděla +0,03. Tento rozdíl je konkrétním příkladem nejistoty,
          kvůli které nelze oceánskou relativní vlhkost shrnout jediným jistým dlouhodobým číslem.
        </p>

        <p>
          Mikrovlnné radiometry nad nezamrzlými oceány poskytují další, přístrojově nezávislé pozorování. Mears a kol.
          pro období 1988–2017 vypočetli trend celkové vodní páry <strong>+0,436 kg/m² za desetiletí</strong>, tedy
          +1,49 % za desetiletí. Aktualizované srovnání ve zprávě za rok 2024 uvádí pro období 1991–2024{" "}
          <strong>+0,48 ± 0,07 kg/m² za desetiletí</strong>, neboli +1,64 ± 0,25 % za desetiletí.{" "}
          <ReferenceLink href="https://doi.org/10.1002/2018EA000363">Mears et al., 2018</ReferenceLink> a{" "}
          <ReferenceLink href="https://repository.library.noaa.gov/view/noaa/71485/noaa_71485_DS1.pdf">
            State of the Climate in 2024, tabulka 2.8
          </ReferenceLink>
        </p>

        <p>
          Zpráva za rok 2024 porovnala také tři reanalýzy, rádiové zákryty GNSS a 166 pozemních přijímačů GNSS.
          Všechny soubory označily rok 2024 za rok s nejvyšším množstvím vodní páry ve sloupci ve svém období.
          Globální odchylka mezi 60° jižní a 60° severní šířky dosáhla přibližně pěti procent nad průměr let 1991–2020.
          Pro období 1991–2024 leží trendy tří reanalýz mezi 0,37 a 0,42 kg/m² za desetiletí; družicový mikrovlnný
          výsledek nad oceány je uveden výše.
        </p>

        <p>
          Radiosondy poskytují delší místní profily, ale jejich globální využití omezuje výměna čidel a nerovnoměrné
          pokrytí. Durre a kol. po úpravě zdokumentovaných i nezaznamenaných zlomů zjistili v přibližně 300 stanicích
          severní polokoule mezi roky 1973 a 2006 trend vodní páry od povrchu do 500 hPa{" "}
          <strong>+0,45 mm za desetiletí</strong>. Výsledek se vztahuje pouze k pevninským oblastem zastoupeným těmito
          stanicemi a k vymezené části atmosféry.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2008JD010989">Durre et al., 2009</ReferenceLink>
        </p>

        <p>
          Zeměpisné mapy doplňují globální čísla. Měrná vlhkost v letech 1973–2024 rostla ve velké většině dobře
          pozorovaných buněk severní polokoule a v mnoha tropických oblastech; jednotlivé záporné oblasti se vyskytují
          zejména tam, kde je pozorování řídké nebo místně odlišné. Relativní vlhkost nad pevninou naopak v rozsáhlých
          částech středních zeměpisných šířek klesala, zatímco v některých tropických a oceánských buňkách vzrostla.
          Bílé plochy na obou mapách zůstávají bez závěru.
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            Od roku 1973 se měrná vlhkost vzduchu u povrchu zvýšila nad pevninou i oceánem, zatímco relativní vlhkost
            nad pevninou poklesla. Celkové množství vodní páry nad nezamrzlými oceány od roku 1988 vzrostlo a v roce
            2024 dosáhlo nejvyšší hodnoty celého sledovaného období.
          </p>
        </div>

        <h2>Prameny, data a licence</h2>
        <div className="article-source-groups">
          <section>
            <h3>Historické a primární práce</h3>
            <ul>
              <li>
                de Saussure, H.-B. (1783): <em>Essais sur l&apos;hygrométrie</em>, původní popis vlasového vlhkoměru.{" "}
                <ReferenceLink href="https://books.google.com/books?id=Zmkfb8I-kVEC">
                  Digitalizovaný svazek
                </ReferenceLink>
              </li>
              <li>
                Daniell, J. F. (1820): původní kondenzační vlhkoměr a bibliografické údaje.{" "}
                <ReferenceLink href="https://www.si.edu/object/nmah_1167504">
                  Smithsonian Institution
                </ReferenceLink>
              </li>
              <li>
                Dai, A. (2006): globální klimatologie a trendy povrchové vlhkosti v letech 1975–2005.{" "}
                <ReferenceLink href="https://doi.org/10.1175/JCLI3816.1">DOI 10.1175/JCLI3816.1</ReferenceLink>
              </li>
              <li>
                Willett, K. M. et al. (2008): spojený pozemní a oceánský soubor HadCRUH.{" "}
                <ReferenceLink href="https://doi.org/10.1175/2008JCLI2274.1">
                  DOI 10.1175/2008JCLI2274.1
                </ReferenceLink>
              </li>
              <li>
                Willett, K. M. et al. (2014): vznik víceproměnného HadISDH nad pevninou.{" "}
                <ReferenceLink href="https://doi.org/10.5194/cp-10-1983-2014">
                  DOI 10.5194/cp-10-1983-2014
                </ReferenceLink>
              </li>
              <li>
                Willett, K. M. et al. (2020): vznik a nejistoty HadISDH.marine.{" "}
                <ReferenceLink href="https://doi.org/10.5194/essd-12-2853-2020">
                  DOI 10.5194/essd-12-2853-2020
                </ReferenceLink>
              </li>
              <li>
                Durre, I. et al. (2009): radiosondážní změny vodní páry nad pevninou severní polokoule.{" "}
                <ReferenceLink href="https://doi.org/10.1029/2008JD010989">
                  DOI 10.1029/2008JD010989
                </ReferenceLink>
              </li>
              <li>
                Bevis, M. et al. (1992): určení integrované vodní páry z GPS.{" "}
                <ReferenceLink href="https://doi.org/10.1029/92JD01517">
                  DOI 10.1029/92JD01517
                </ReferenceLink>
              </li>
              <li>
                Mears, C. A. et al. (2018): spojení družicových mikrovlnných radiometrů a vyčíslení nejistoty.{" "}
                <ReferenceLink href="https://doi.org/10.1002/2018EA000363">
                  DOI 10.1002/2018EA000363
                </ReferenceLink>
              </li>
              <li>
                Allan, R. P. et al. (2022): porovnání povrchové, sloupcové a výškové vlhkosti v letech 1979–2020.{" "}
                <ReferenceLink href="https://doi.org/10.1029/2022JD036728">
                  DOI 10.1029/2022JD036728
                </ReferenceLink>
              </li>
            </ul>
          </section>

          <section>
            <h3>Metody a nejistoty</h3>
            <ul>
              <li>
                WMO: <em>Guide to Meteorological Instruments and Methods of Observation</em>, kapitola 4 o měření
                vlhkosti.{" "}
                <ReferenceLink href="https://repository.oceanbestpractices.org/bitstream/handle/11329/83/wmo_8_en-2012.pdf?sequence=1">
                  Příručka WMO No. 8
                </ReferenceLink>
              </li>
              <li>
                Dunn, R. J. H. et al. (2012): automatické kontroly hodinových pozemních hlášení HadISD.{" "}
                <ReferenceLink href="https://doi.org/10.5194/cp-8-1649-2012">
                  DOI 10.5194/cp-8-1649-2012
                </ReferenceLink>
              </li>
              <li>
                Durre, I. et al. (2006): vznik a kontrola archivu IGRA.{" "}
                <ReferenceLink href="https://doi.org/10.1175/JCLI3594.1">
                  DOI 10.1175/JCLI3594.1
                </ReferenceLink>
              </li>
              <li>
                Dirksen, R. J. et al. (2014): korekce a nejistota referenčních radiosondáží GRUAN.{" "}
                <ReferenceLink href="https://doi.org/10.5194/amt-7-4463-2014">
                  DOI 10.5194/amt-7-4463-2014
                </ReferenceLink>
              </li>
            </ul>
          </section>

          <section>
            <h3>Data ke stažení</h3>
            <ul>
              <li>
                Met Office Hadley Centre: HadISDH.land, HadISDH.marine a HadISDH.blend, konečné verze do prosince
                2024.{" "}
                <ReferenceLink href="https://www.metoffice.gov.uk/hadobs/hadisdh/">
                  Hlavní stránka, dokumentace a rozcestník
                </ReferenceLink>
              </li>
              <li>
                NOAA/NCEI: Integrated Global Radiosonde Archive, verze 2.2.{" "}
                <ReferenceLink href="https://www.ncei.noaa.gov/products/weather-balloon/integrated-global-radiosonde-archive">
                  Profily, měsíční hodnoty a odvozené parametry
                </ReferenceLink>
              </li>
              <li>
                GRUAN: referenční profily tlaku, teploty, vlhkosti a větru s nejistotami.{" "}
                <ReferenceLink href="https://www.gruan.org/data/data-products">Datové produkty</ReferenceLink>
              </li>
              <li>
                Remote Sensing Systems: Total Precipitable Water, Version 7 Release 1.{" "}
                <ReferenceLink href="https://www.remss.com/measurements/atmospheric-water-vapor/tpw-1-deg-product/">
                  Měsíční mapy a NetCDF
                </ReferenceLink>
              </li>
              <li>
                NOAA a American Meteorological Society: <em>State of the Climate in 2024</em>, oddíly o povrchové a
                sloupcové vlhkosti.{" "}
                <ReferenceLink href="https://repository.library.noaa.gov/view/noaa/71485/noaa_71485_DS1.pdf">
                  Úplná kapitola Global Climate
                </ReferenceLink>
              </li>
            </ul>
          </section>

          <section>
            <h3>Obrázky a práva k použití</h3>
            <ul>
              <li>
                Vizualizace vodní páry a přístroje ATMS byla převzata z{" "}
                <ReferenceLink href="https://svs.gsfc.nasa.gov/4939">
                  NASA Scientific Visualization Studio
                </ReferenceLink>
                ; stránka požaduje kredit NASA&apos;s Scientific Visualization Studio.
              </li>
              <li>
                Fotografie radiosondy pochází z{" "}
                <ReferenceLink href="https://www.noaa.gov/noaa-collections/photo-library/nssl0020jpg">
                  NOAA Photo Library
                </ReferenceLink>
                . Kredit: NOAA Central Library; OAR/ERL/National Severe Storms Laboratory. Materiál NOAA je dílem
                federální vlády USA, pokud u položky není uvedeno jinak.
              </li>
              <li>
                Mapy trendů byly převzaty beze změny z{" "}
                <ReferenceLink href="https://www.metoffice.gov.uk/hadobs/hadisdh/trendmaterialBLEND.html">
                  Met Office Hadley Centre
                </ReferenceLink>
                . © British Crown copyright 2025, Met Office. Contains public sector information licensed under the{" "}
                <ReferenceLink href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">
                  Open Government Licence v3.0
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
