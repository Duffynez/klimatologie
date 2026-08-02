import Image from "next/image";
import type { ReactNode } from "react";

function ReferenceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="article-reference" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function GmstArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>SST</dt>
            <dd>
              Zkratka anglického <em>sea-surface temperature</em>. V převzatých grafech označuje teplotu vody
              měřenou u mořské hladiny.
            </dd>
          </div>
          <div>
            <dt>Referenční období</dt>
            <dd>
              Víceleté období, jehož průměr tvoří nulu grafu. Jeho změna posune celou křivku, nikoli rozdíl mezi
              dvěma roky.
            </dd>
          </div>
          <div>
            <dt>Mřížka</dt>
            <dd>
              Rozdělení povrchu Země na zeměpisné buňky. V každé buňce se nejprve spojí místní pozorování.
            </dd>
          </div>
          <div>
            <dt>Plošné vážení</dt>
            <dd>
              Průměr, v němž každá buňka přispívá podle své skutečné plochy. Hustá síť stanic tak sama nezíská
              větší váhu.
            </dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Nad pevninou se měří vzduch přibližně 1,25–2 metry nad zemí. Nad nezamrzlým oceánem se používá teplota
          vody u hladiny; přesná hloubka závisí na přístroji.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Globální teplota u povrchu vyjadřuje, jak se průměrná teplota v blízkosti povrchu Země změnila za
          určitý měsíc nebo rok. Nad pevninou vychází z teploty vzduchu měřené meteorologickými stanicemi, nad
          nezamrzlým oceánem z teploty vody měřené u hladiny. Výsledkem je plošně vážený rozdíl ve stupních
          Celsia vůči zvolenému víceletému průměru.
        </p>

        <p>
          Jednotlivý teploměr poskytne místní hodnotu. Globální číslo vznikne až spojením pozorování z mnoha
          pevninských a oceánských oblastí. Jones, Wigley a Wright tak v roce 1986 sestavili globální výpočet pro
          roky 1861–1984. Parker a kol. v roce 1994 popsali globální mapy založené na stejné dvojici měřených
          veličin: teplotě vzduchu nad pevninou a teplotě vody u hladiny oceánu.{" "}
          <ReferenceLink href="https://doi.org/10.1038/322430a0">Jones et al., 1986</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1029/94JD00548">Parker et al., 1994</ReferenceLink>
        </p>

        <p>
          Tuto definici používají i současné práce vzniklé nezávisle v několika výzkumných skupinách. Hansen a
          kol. ji popsali pro výpočet NASA, Rohde a Hausfather pro Berkeley Earth, Morice a kol. pro HadCRUT5 a
          Yin a kol. pro NOAAGlobalTemp. Metody se liší v podrobnostech, ale všechny tyto produkty spojují
          pozemní teplotu vzduchu s oceánskou teplotou vody u hladiny.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2010RG000345">Hansen et al., 2010</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-12-3469-2020">
            Rohde &amp; Hausfather, 2020
          </ReferenceLink>
          , <ReferenceLink href="https://doi.org/10.1029/2019JD032361">Morice et al., 2021</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1175/BAMS-D-24-0012.1">Yin et al., 2024</ReferenceLink>
        </p>

        <p>
          Každá hodnota potřebuje název produktu, jeho verzi a referenční období. GISTEMP v4 například zveřejňuje
          rozdíly vůči průměru let 1951–1980, HadCRUT5 vůči letům 1961–1990 a NOAAGlobalTemp v6.1.0 vůči letům
          1991–2020. Pro vzájemné srovnání lze všechny hodnoty převést ke společnému základu. Změní se tím poloha
          nuly, zatímco rozdíl mezi dvěma roky zůstane stejný.
        </p>

        <p>
          Místní průměr se počítá zvlášť pro každý kalendářní měsíc. Lednové měření v Praze se tedy porovnává s
          dlouhodobým lednovým průměrem Prahy, červencové měření s červencovým průměrem. Tento postup odstraní z
          globálního výpočtu běžné rozdíly mezi ročními obdobími i mezi teplými a chladnými místy. Teprve místní
          rozdíly se spojují do mapy a globálního průměru.
        </p>

        <h2>Historie globálního výpočtu</h2>
        <p>
          Teplota vzduchu se na jednotlivých místech zapisovala dávno před vznikem globálního výpočtu.
          Meteorologické stanice se během 19. století rozšířily hlavně v Evropě a Severní Americe. Pozorování nad
          oceánem přibývala v lodních denících podél pravidelných plavebních tras. Rok 1850, kterým začínají
          HadCRUT5, NOAAGlobalTemp a Berkeley Earth, označuje nejstarší období použité pro jejich souvislé globální
          výpočty. Rozmístění pozorování tehdy bylo výrazně řidší než dnes.
        </p>

        <p>
          Guy Stewart Callendar v roce 1938 porovnal roční teplotní rozdíly 147 stanic za období 1880–1935.
          Stanice rozdělil podle zeměpisné šířky a z jejich skupin počítal průměry. V roce 1961 svůj výpočet
          rozšířil na více než 400 stanic a skládal je nejprve do oblastí a šířkových pásů. Obě práce ukazují ranou
          podobu cesty od jednotlivých stanic ke globálnímu číslu a současně omezení tehdejšího prostorového
          pokrytí.{" "}
          <ReferenceLink href="https://doi.org/10.1002/qj.49706427503">Callendar, 1938</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1002/qj.49708737102">Callendar, 1961</ReferenceLink>
        </p>

        <p>
          Hansen a Lebedeff v roce 1987 zkoumali, jak dobře se měsíční změny na jedné stanici podobají změnám na
          okolních stanicích. Na tomto základě skládali pozemní měření do oblastí a odhadovali chybu způsobenou
          nepravidelným rozmístěním stanic. Jones, Wigley a Wright o rok dříve zveřejnili výpočet, který spojil
          pozemní a oceánská pozorování od roku 1861. Tyto práce patří k přímým předchůdcům dnešních globálních
          produktů.{" "}
          <ReferenceLink href="https://doi.org/10.1029/JD092iD11p13345">
            Hansen &amp; Lebedeff, 1987
          </ReferenceLink>
        </p>

        <p>
          Od devadesátých let se rozšířily digitální archivy, měsíční aktualizace a zveřejňování map. Přibyly
          podrobné opravy změn přístrojů, několik způsobů odhadu oblastí bez přímého měření a samostatné výpočty
          nejistoty. Historická pozorování se přitom nezamykají do jedné neměnné tabulky: nově nalezený lodní deník,
          opravené datum nebo lepší informace o stanici se mohou projevit i ve starší části nového vydání dat.
        </p>

        <h2>Co se skutečně měří</h2>
        <h3>Nad pevninou</h3>
        <p>
          Meteorologická stanice měří teplotu okolního vzduchu v ochranném krytu, který omezuje přímé sluneční
          záření a vliv srážek. Světová meteorologická organizace uvádí pro běžné povrchové pozorování výšku
          přístroje 1,25 až 2 metry nad zemí. Současné automatické stanice často používají elektrický odporový
          teploměr; starší záznamy vznikaly odečtem kapalinových teploměrů. Poloha stanice, výška přístroje, typ
          krytu a změny vybavení se zapisují jako doprovodné údaje.{" "}
          <ReferenceLink href="https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/instruments-and-methods-of-observation-programme-imop/guide-instruments-and-methods-of-observation-wmo-no-8">
            WMO: Guide to Instruments and Methods of Observation
          </ReferenceLink>
        </p>

        <p>
          Pro globální výpočet se používají měsíční průměry. Jedna stanice tak může přispět až dvanácti hodnotami
          za rok. Národní meteorologické služby je vytvářejí z denních odečtů, případně předávají dochované
          historické měsíční záznamy. Mezinárodní archiv GHCN-M v4 tyto údaje a další sbírky spojuje, vyhledává
          duplicity a přidává značky kontroly kvality. Jeho metodický popis uvádí původ dat i postup sestavení
          databáze.{" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI-D-18-0094.1">Menne et al., 2018</ReferenceLink>
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/gmst/gistemp-stations-robinson.png"
            alt="Mapa meteorologických stanic používaných v analýze GISTEMP v4."
            width={3840}
            height={2160}
            unoptimized
          />
          <figcaption>
            Rozmístění 20 924 meteorologických stanic zobrazených pro GISTEMP v4. Velikost značek pouze omezuje
            jejich překrývání a nevyjadřuje význam stanice. Vizualizace: NASA Scientific Visualization Studio,
            Mark SubbaRao a AJ Christensen; produkce Kathryn Mersmann. Nezměněný materiál NASA.{" "}
            <ReferenceLink href="https://svs.gsfc.nasa.gov/4961/">Původní mapa a úplný kredit</ReferenceLink>
          </figcaption>
        </figure>

        <p>
          Mapa ukazuje místa, z nichž NASA může čerpat, nikoli počet stanic použitých v každém měsíci. Délka
          záznamu se mezi stanicemi liší a síť se v čase mění. Husté soustředění bodů v Evropě také neznamená, že
          Evropa dostane v globálním výsledku větší váhu. Pozorování se nejprve spojí v zeměpisných oblastech a
          teprve ty se váží podle plochy.
        </p>

        <h3>Nad oceánem</h3>
        <p>
          Lodě měřily teplotu vody vytažené v dřevěných, plátěných nebo izolovaných vědrech a později také vodu
          proudící k sání lodního motoru. Vědro může během vytažení ztrácet teplo odpařováním; měření v útrobách
          lodi může naopak ovlivnit teplé okolí. Záznamy proto potřebují informaci o použitém způsobu. Datový
          produkt HadSST4 vytváří více možných oprav podle typu vědra, měření v sání motoru a období, v němž se
          jednotlivé metody používaly.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2018JD029867">Kennedy et al., 2019</ReferenceLink>
        </p>

        <p>
          Od konce 20. století poskytují stále větší podíl přímých oceánských pozorování zakotvené a volně
          unášené bóje. Teploměr driftující bóje je umístěn několik centimetrů pod rozhraním vody a vzduchu a
          hodnotu odesílá družicí. Lodní a bójová měření se shromažďují v archivu ICOADS, který zachovává typ
          platformy, polohu, čas a dostupné údaje o způsobu měření.{" "}
          <ReferenceLink href="https://doi.org/10.1002/joc.4775">Freeman et al., 2017</ReferenceLink>
        </p>

        <figure className="article-figure article-figure--portrait">
          <Image
            className="article-figure__media"
            src="/media/gmst/noaa-drifting-buoy-deployment.jpg"
            alt="Driftující oceánská bóje vypouštěná z plachetnice Bark Europa u Jižní Afriky."
            width={600}
            height={800}
            unoptimized
          />
          <figcaption>
            Vypouštění driftující bóje z lodi Bark Europa u Jižní Afriky. Bóje měří teplotu vody několik
            centimetrů pod hladinou a data odesílá družicí. Foto: NOAA/AOML, nezměněný materiál NOAA.{" "}
            <ReferenceLink href="https://www.aoml.noaa.gov/index.php/2014/08/06/noaas-array-of-drifting-ocean-buoys/">
              Původní fotografie a popis přístroje
            </ReferenceLink>
          </figcaption>
        </figure>

        <p>
          Družice mohou mapovat teplotu velmi tenké vrstvy na samotném povrchu oceánu, ale hlavní historické
          produkty popsané v tomto článku stojí nad oceánem na přímých měřeních z lodí a bójí. GISTEMP v4
          například používá oceánský produkt ERSST v5, HadCRUT5 používá HadSST4 a NOAAGlobalTemp v6.1.0 používá
          ERSST v6. Každý z nich začíná jednotlivými pozorováními z mezinárodních námořních archivů a následně
          řeší mezery a změny měřicích metod vlastním postupem.
        </p>

        <h2>Jak vzniká globální výpočet</h2>
        <h3>1. Pozorování dostane místo, čas a původ</h3>
        <p>
          Každý měsíční údaj stanice nese její zeměpisnou polohu a identifikátor. Oceánské měření nese polohu
          lodi nebo bóje, čas a pokud možno také typ přístroje. Archivy hledají duplicity, nemožné souřadnice,
          chybné jednotky a hodnoty, které neodpovídají okolním pozorováním. Podezřelé údaje dostanou kontrolní
          značku nebo se z konkrétního výpočtu vyřadí; původní archiv a zpracovaný vstup jsou zveřejňovány
          odděleně.
        </p>

        <h3>2. Posoudí se změny stanice a měřicího postupu</h3>
        <p>
          Přestěhování stanice, nový kryt, změna teploměru nebo jiná denní doba odečtu mohou v místním záznamu
          vytvořit skok. Doprovodné údaje někdy změnu přímo popisují. Statistické postupy ji zároveň hledají
          porovnáním stanice s okolními místy: společná změna počasí se obvykle projeví u sousedů, místní skok
          pouze u jedné stanice. Menne a Williams v roce 2009 popsali párový postup používaný při zpracování
          pozemních dat NOAA.{" "}
          <ReferenceLink href="https://doi.org/10.1175/2008JCLI2263.1">
            Menne &amp; Williams, 2009
          </ReferenceLink>
        </p>

        <p>
          Oceánská část řeší podobný problém jinými prostředky. Autoři porovnávají souběžná měření lodí, bójí a
          teplotních profilů a odhadují odchylky jednotlivých způsobů odběru. HadSST4 proto není jedna opravená
          minulost, ale soubor 200 možných zpracování, která zastupují přípustné hodnoty nejistých oprav. Tato
          informace pokračuje až do nejistoty výsledného HadCRUT5.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2018JD029867">Kennedy et al., 2019</ReferenceLink>
        </p>

        <h3>3. Spočítá se místní měsíční rozdíl</h3>
        <p>
          Pro každou stanici nebo oceánskou buňku se určí obvyklá teplota jednotlivých kalendářních měsíců v
          referenčním období. Od každého měsíčního měření se odečte odpovídající dlouhodobý průměr. Výsledek říká,
          o kolik byl daný měsíc na daném místě teplejší nebo chladnější než jeho vlastní základ. Tento místní
          rozdíl se může podobat hodnotám v širokém okolí mnohem více než samotná teplota, což umožňuje spojovat
          nepravidelně rozmístěná pozorování.{" "}
          <ReferenceLink href="https://doi.org/10.1029/JD092iD11p13345">
            Hansen &amp; Lebedeff, 1987
          </ReferenceLink>
        </p>

        <h3>4. Místní hodnoty se rozmístí do mapy</h3>
        <p>
          Povrch Země se rozdělí na buňky a pozorování uvnitř nebo v okolí každé buňky se spojí. HadCRUT5
          zveřejňuje mapu v buňkách o velikosti 5° zeměpisné šířky a 5° délky. GISTEMP nabízí pravidelnou mřížku
          2° × 2° a používá pozemní stanice až do určené vzdálenosti od středu buňky. Rozlišení souboru proto
          popisuje velikost výstupní buňky, nikoli hustotu ani přesnost původních teploměrů.
        </p>

        <h3>5. Určí se zacházení s oblastmi bez měření</h3>
        <p>
          HadCRUT5 nabízí dvě odpovědi. První ponechá buňku bez dostatečných pozorování prázdnou. Druhá odhadne
          chybějící hodnotu z prostorové souvislosti okolních dat a přidá nejistotu tohoto odhadu. GISTEMP
          rozšiřuje pozemní změny do vzdálenosti až 1 200 kilometrů, pokud má v dosahu vhodnou stanici. Berkeley
          Earth používá vlastní statistický prostorový výpočet. NOAAGlobalTemp v6 využívá neuronovou síť pro
          pozemní oblasti a Arktidu; verze 6.1.0 přidala stejně založenou oceánskou rekonstrukci ERSST v6.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2019JD032361">Morice et al., 2021</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1029/2010RG000345">Hansen et al., 2010</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1175/BAMS-D-24-0012.1">Yin et al., 2024</ReferenceLink>
        </p>

        <h3>6. Buňky se váží podle plochy</h3>
        <p>
          Buňky stejné úhlové velikosti mají u rovníku větší plochu než u pólů. Globální průměr proto zohledňuje
          jejich skutečnou plochu. Některé postupy nejprve počítají šířkové pásy nebo polokoule, jiné pracují
          přímo s plošnými vahami jednotlivých buněk. Hustota stanic ovlivní, jak dobře je oblast popsána, ale
          konečný příspěvek oblasti určuje její plocha, nikoli počet teploměrů.
        </p>

        <h3>7. K výsledku se připojí nejistota</h3>
        <p>
          Nejistota zahrnuje přesnost jednotlivých měření, omezený počet pozorování uvnitř buňky, možné chyby
          oprav, chybějící oblasti i volbu prostorového postupu. Je největší v 19. století, kdy bylo měření málo,
          zejména nad oceány a v polárních oblastech. S rozšířením stanic a bójí se zmenšuje, ale zcela nemizí.
          Brohan a kol. tyto složky oddělili pro HadCRUT3; novější HadCRUT5 je převádí do 200 možných realizací
          pozemní, oceánské a globální mapy.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2005JD006548">Brohan et al., 2006</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1029/2019JD032361">Morice et al., 2021</ReferenceLink>
        </p>

        <p>
          NASA zveřejňuje pro GISTEMP v4 obdobný soubor 200 možných měsíčních map pro roky 1880–2020. Každá
          varianta představuje jedno přípustné zpracování vzhledem k popsaným nejistotám. Rozptyl variant lze
          přenést do dalšího výpočtu místo toho, aby uživatel pracoval pouze s jednou střední křivkou.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2023JD040179">Lenssen et al., 2024</ReferenceLink>
        </p>

        <h2>Zveřejňovaná data</h2>
        <p>
          Níže jsou čtyři pravidelně používané globální produkty. Každý uvádí měsíční nebo roční rozdíly ve
          stupních Celsia, ale používá vlastní referenční období a vlastní způsob práce s prázdnými oblastmi.
          Uvedené verze a odkazy odpovídají stavu k datu tohoto článku.
        </p>

        <div className="article-data-list">
          <section className="article-data-item">
            <h3>HadCRUT.5.1.0.0</h3>
            <p>
              Společný produkt Met Office Hadley Centre a Climatic Research Unit při University of East Anglia.
              Spojuje pozemní CRUTEM5 a oceánský HadSST4 od ledna 1850. Nabízí měsíční mapy 5° × 5°, globální a
              oblastní hodnoty, verzi s prázdnými buňkami i statisticky doplněnou analýzu. Obě podoby mají 200
              realizací nejistoty a používají referenční období 1961–1990.
            </p>
            <p>
              <ReferenceLink href="https://hadleyserver.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.1.0.0/download.html">
                CSV a NetCDF ke stažení
              </ReferenceLink>{" "}
              · <ReferenceLink href="https://doi.org/10.1029/2019JD032361">metodická studie</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>NASA GISTEMP v4</h3>
            <p>
              Výpočet Goddardova institutu NASA začíná rokem 1880. Současná provozní verze spojuje pozemní
              GHCN-M v4 s oceánským ERSST v5, používá referenční období 1951–1980 a aktualizuje se každý měsíc.
              NASA nabízí globální tabulky, mapy 2° × 2°, zdrojový kód i samostatný soubor 200 realizací
              pozorovací nejistoty.
            </p>
            <p>
              <ReferenceLink href="https://data.giss.nasa.gov/gistemp/data_v4.html">
                Tabulky, CSV a NetCDF ke stažení
              </ReferenceLink>{" "}
              ·{" "}
              <ReferenceLink href="https://data.giss.nasa.gov/gistemp/uncertainty/">
                data a kód nejistoty
              </ReferenceLink>{" "}
              · <ReferenceLink href="https://doi.org/10.1029/2010RG000345">metodická studie</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>NOAAGlobalTemp v6.1.0</h3>
            <p>
              Produkt NOAA začíná lednem 1850 a spojuje GHCN-M v4 nad pevninou s ERSST v6 nad oceánem.
              Zveřejňuje globální měsíční mapy 5° × 5° a časové přehledy od roku 1850 do současnosti. Verze 6.1.0
              používá referenční období 1991–2020 a neuronové sítě pro rekonstrukci pozemních i oceánských oblastí
              bez přímého měření.
            </p>
            <p>
              <ReferenceLink href="https://www.ncei.noaa.gov/data/noaa-global-surface-temperature/v6.1/access/timeseries/">
                Měsíční a roční hodnoty
              </ReferenceLink>{" "}
              ·{" "}
              <ReferenceLink href="https://www.ncei.noaa.gov/data/noaa-global-surface-temperature/v6.1/access/gridded/">
                mapy NetCDF
              </ReferenceLink>{" "}
              ·{" "}
              <ReferenceLink href="https://doi.org/10.25921/vvaa-wq11">záznam datové verze</ReferenceLink> ·{" "}
              <ReferenceLink href="https://doi.org/10.1175/BAMS-D-24-0012.1">
                metodika verze 6
              </ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>Berkeley Earth Land/Ocean</h3>
            <p>
              Nevládní výzkumná organizace Berkeley Earth spojuje vlastní pozemní výpočet s upraveným HadSST4.
              Globální měsíční hodnoty začínají rokem 1850 a jsou uváděny vůči letům 1951–1980. Portál současně
              nabízí novou globální mřížku 0,25° × 0,25° jako předběžnou verzi; její výsledky mohou být před
              konečným vydáním změněny. Původní metodická práce z roku 2020 popisuje standardní globální produkt.
            </p>
            <p>
              <ReferenceLink href="https://berkeleyearth.org/data/">Datový portál a soubory ke stažení</ReferenceLink>{" "}
              ·{" "}
              <ReferenceLink href="https://doi.org/10.5194/essd-12-3469-2020">
                metodická studie
              </ReferenceLink>
            </p>
          </section>
        </div>

        <p>
          Následující animace ukazuje jednu z těchto zpracovaných map. Každý snímek je pětiletým průměrem
          GISTEMP v4; první zachycuje roky 1880–1884 a poslední roky 2021–2025. Barva vyjadřuje místní rozdíl
          vůči průměru 1951–1980. Šedá místa nemají v daném výpočtu dostatek údajů a NASA je v této animaci
          nedopočítává.
        </p>

        <figure className="article-figure">
          <video className="article-figure__media" controls muted playsInline preload="metadata">
            <source src="/media/gmst/gistemp-five-year-anomaly-1880-2025.mp4" type="video/mp4" />
            Váš prohlížeč neumí přehrát vložené video.
          </video>
          <figcaption>
            Pětileté průměry místních teplotních rozdílů GISTEMP v4 od let 1880–1884 do let 2021–2025,
            referenční období 1951–1980. Animace: NASA Goddard Institute for Space Studies, nezměněný materiál
            NASA.{" "}
            <ReferenceLink href="https://data.giss.nasa.gov/gistemp/animations/">
              Původní animace a popis
            </ReferenceLink>
          </figcaption>
        </figure>

        <h2>Srovnání dat</h2>
        <p>
          Jednotlivé produkty čerpají z velké části ze stejných mezinárodních archivů. GISTEMP a NOAAGlobalTemp
          používají pozemní GHCN-M v4; HadCRUT5 a Berkeley Earth sdílejí část oceánských podkladů HadSST4. Shoda
          jejich křivek proto není srovnáním čtyř zcela oddělených sítí teploměrů. Srovnává především několik
          způsobů, jak z mnoha společných i odlišných vstupů sestavit globální výsledek.
        </p>

        <p>
          Největší metodické rozdíly se týkají oblastí bez přímého měření, polárních oblastí, zacházení s mořským
          ledem a oprav historických oceánských měření. V 19. století je pozorování méně, takže se křivky rozcházejí
          více než v posledních desetiletích. Referenční období lze pro graf sjednotit; rozdíly vzniklé
          pokrytím a metodou tím nezmizí.
        </p>

        <p>
          Graf Copernicus převádí šest produktů na společný základ 1850–1900. Barevné sloupce zobrazují
          atmosférickou rekonstrukci ERA5 od roku 1940. Bílé body přidávají JRA-3Q, GISTEMP v4,
          NOAAGlobalTemp v6, Berkeley Earth a HadCRUT5 v letech, pro něž jsou dostupné. Graf tak odpovídá na
          jedinou otázku: jak podobně vycházejí roční globální hodnoty po sjednocení referenčního období.
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Vodorovně posuvný graf globální teploty">
            <Image
              className="article-figure__media"
              src="/media/gmst/c3s-global-temperature-datasets-1850-2025.png"
              alt="Srovnání ročních globálních teplotních rozdílů několika datových produktů od roku 1850 do roku 2025 vůči období 1850 až 1900."
              width={9003}
              height={5165}
              unoptimized
            />
          </div>
          <figcaption>
            Roční globální teplotní rozdíly vůči průměru 1850–1900. Sloupce: ERA5; bílé body: JRA-3Q, GISTEMP v4,
            NOAAGlobalTemp v6, Berkeley Earth a HadCRUT5. Obrázek byl aktualizován 28. ledna 2026. Zdroj a kredit:
            C3S/ECMWF; nezměněný materiál. V přehledu ERA5 vychází rok 2025 jako třetí nejteplejší. Souhrn WMO
            níže používá devět produktů a připouští druhé i třetí místo podle konkrétního souboru.{" "}
            <ReferenceLink href="https://climate.copernicus.eu/GCH2025-graphics-gallery">
              Původní graf a data
            </ReferenceLink>{" "}
            ·{" "}
            <ReferenceLink href="https://cds.climate.copernicus.eu/licences/licence-to-use-copernicus-products">
              licence Copernicus
            </ReferenceLink>
          </figcaption>
        </figure>

        <h2 id="pozorovani">Pozorování</h2>
        <p className="article-prose__intro">
          Zveřejněné globální výpočty ukazují dlouhodobý posun k vyšším hodnotám. Roční výsledky přitom kolísají a
          jednotlivé produkty se v přesném čísle i pořadí blízkých let mírně liší. Společný časový průběh je
          patrný v pozorovacích produktech s odlišnými způsoby prostorového zpracování.
        </p>

        <p>
          Šestá hodnotící zpráva IPCC porovnala více globálních produktů a pro desetiletí 2011–2020 vyhodnotila
          průměrnou změnu o 1,09 °C vůči období 1850–1900. Uvedené rozmezí 0,95 až 1,20 °C zahrnuje nejistotu
          pozorování i rozdíly mezi použitými produkty. Jde o průměr deseti let, nikoli o hodnotu jediného roku.{" "}
          <ReferenceLink href="https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-2/">
            IPCC AR6, kapitola 2
          </ReferenceLink>
        </p>

        <p>
          Nejnovější dokončené roční vyhodnocení zveřejnila Světová meteorologická organizace ve zprávě za rok
          2025. Její souhrn devíti globálních produktů určil rok 2025 na 1,43 ± 0,13 °C nad průměrem 1850–1900;
          uvedený interval má devadesátiprocentní úroveň nejistoty. Ve dvou produktech byl rok 2025 druhý
          nejteplejší a v sedmi třetí. Rozdíl mezi blízkými roky je tedy menší než nejistota, s níž lze jejich
          přesné pořadí určit.{" "}
          <ReferenceLink href="https://wmo.int/publication-series/state-of-global-climate/state-of-global-climate-2025">
            WMO: State of the Global Climate 2025
          </ReferenceLink>
        </p>

        <p>
          Stejný souhrn uvádí pro rok 2024 hodnotu 1,55 ± 0,13 °C nad obdobím 1850–1900 a označuje jej za
          nejteplejší rok ve všech devíti použitých produktech. Roky 2023, 2024 a 2025 tvoří v každém z nich tři
          nejteplejší roky, i když se jejich druhé a třetí místo může prohodit. Všech jedenáct let od roku 2015 do
          roku 2025 patří mezi jedenáct nejteplejších roků pozorovaného období.
        </p>

        <p>
          Starší část grafu má širší rozpětí mezi produkty a větší uváděnou nejistotu, protože pozorování jsou
          řidší a větší část povrchu musí být ponechána prázdná nebo odhadnuta. V posledních desetiletích se roční
          křivky drží těsněji u sebe. WMO uvádí, že rozdíly mezi devíti produkty mění odhad dlouhodobého posunu
          přibližně o 0,1 až 0,2 °C; tento rozptyl zahrnuje do nejistoty hodnot vztažených k období 1850–1900.
          Přesná hodnota proto vždy patří ke konkrétnímu produktu a verzi, zatímco dlouhodobý posun je společným
          výsledkem všech zde srovnaných zpracování.{" "}
          <ReferenceLink href="https://wmo.int/publication-series/state-of-global-climate/state-of-global-climate-2025">
            WMO: State of the Global Climate 2025
          </ReferenceLink>
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            Globální teplota u povrchu dlouhodobě roste. Desetiletí 2011–2020 bylo o 1,09 °C teplejší než období
            1850–1900 a rok 2025 byl o 1,43 °C nad stejným základem.
          </p>
        </div>

        <h2>Prameny, data a licence</h2>
        <div className="article-source-groups">
          <section>
            <h3>Historické a primární práce</h3>
            <ul>
              <li>
                Callendar, G. S. (1938):{" "}
                <ReferenceLink href="https://doi.org/10.1002/qj.49706427503">
                  The artificial production of carbon dioxide and its influence on temperature
                </ReferenceLink>
                . Pro tento článek je použita část s výpočtem teplot ze 147 stanic.
              </li>
              <li>
                Callendar, G. S. (1961):{" "}
                <ReferenceLink href="https://doi.org/10.1002/qj.49708737102">
                  Temperature fluctuations and trends over the earth
                </ReferenceLink>
                .
              </li>
              <li>
                Jones, P. D., Wigley, T. M. L. &amp; Wright, P. B. (1986):{" "}
                <ReferenceLink href="https://doi.org/10.1038/322430a0">
                  Global temperature variations between 1861 and 1984
                </ReferenceLink>
                .
              </li>
              <li>
                Hansen, J. &amp; Lebedeff, S. (1987):{" "}
                <ReferenceLink href="https://doi.org/10.1029/JD092iD11p13345">
                  Global trends of measured surface air temperature
                </ReferenceLink>
                .
              </li>
              <li>
                Parker, D. E. et al. (1994):{" "}
                <ReferenceLink href="https://doi.org/10.1029/94JD00548">
                  Interdecadal changes of surface temperature since the late nineteenth century
                </ReferenceLink>
                .
              </li>
            </ul>
          </section>

          <section>
            <h3>Metodické práce</h3>
            <ul>
              <li>
                Brohan, P. et al. (2006):{" "}
                <ReferenceLink href="https://doi.org/10.1029/2005JD006548">
                  Uncertainty estimates in regional and global observed temperature changes
                </ReferenceLink>
                .
              </li>
              <li>
                Menne, M. J. &amp; Williams, C. N. (2009):{" "}
                <ReferenceLink href="https://doi.org/10.1175/2008JCLI2263.1">
                  Homogenization of Temperature Series via Pairwise Comparisons
                </ReferenceLink>
                .
              </li>
              <li>
                Hansen, J. et al. (2010):{" "}
                <ReferenceLink href="https://doi.org/10.1029/2010RG000345">
                  Global Surface Temperature Change
                </ReferenceLink>
                .
              </li>
              <li>
                Freeman, E. et al. (2017):{" "}
                <ReferenceLink href="https://doi.org/10.1002/joc.4775">
                  ICOADS Release 3.0: a major update to the historical marine climate record
                </ReferenceLink>
                .
              </li>
              <li>
                Menne, M. J. et al. (2018):{" "}
                <ReferenceLink href="https://doi.org/10.1175/JCLI-D-18-0094.1">
                  The Global Historical Climatology Network Monthly Temperature Dataset, Version 4
                </ReferenceLink>
                .
              </li>
              <li>
                Kennedy, J. J. et al. (2019):{" "}
                <ReferenceLink href="https://doi.org/10.1029/2018JD029867">
                  An Ensemble Data Set of Sea-Surface Temperature Change From 1850
                </ReferenceLink>
                .
              </li>
              <li>
                Rohde, R. A. &amp; Hausfather, Z. (2020):{" "}
                <ReferenceLink href="https://doi.org/10.5194/essd-12-3469-2020">
                  The Berkeley Earth Land/Ocean Temperature Record
                </ReferenceLink>
                .
              </li>
              <li>
                Morice, C. P. et al. (2021):{" "}
                <ReferenceLink href="https://doi.org/10.1029/2019JD032361">
                  An Updated Assessment of Near-Surface Temperature Change From 1850: The HadCRUT5 Data Set
                </ReferenceLink>
                .
              </li>
              <li>
                Yin, X. et al. (2024):{" "}
                <ReferenceLink href="https://doi.org/10.1175/BAMS-D-24-0012.1">
                  NOAAGlobalTemp Version 6: An AI-Based Global Surface Temperature Dataset
                </ReferenceLink>
                .
              </li>
              <li>
                Lenssen, N. et al. (2024):{" "}
                <ReferenceLink href="https://doi.org/10.1029/2023JD040179">
                  A NASA GISTEMPv4 Observational Uncertainty Ensemble
                </ReferenceLink>
                .
              </li>
            </ul>
          </section>

          <section>
            <h3>Data ke stažení</h3>
            <ul>
              <li>
                <ReferenceLink href="https://www.ncei.noaa.gov/products/land-based-station/global-historical-climatology-network-monthly">
                  GHCN-M v4
                </ReferenceLink>
                : měsíční pozemní pozorování a doprovodné údaje.
              </li>
              <li>
                <ReferenceLink href="https://icoads.noaa.gov/">ICOADS</ReferenceLink>: jednotlivá historická a
                současná pozorování z lodí, bójí a dalších mořských platforem.
              </li>
              <li>
                <ReferenceLink href="https://hadleyserver.metoffice.gov.uk/hadobs/hadcrut5/data/HadCRUT.5.1.0.0/download.html">
                  HadCRUT.5.1.0.0
                </ReferenceLink>
                : globální tabulky, mřížková data a 200 realizací.
              </li>
              <li>
                <ReferenceLink href="https://data.giss.nasa.gov/gistemp/data_v4.html">GISTEMP v4</ReferenceLink>:
                tabulky, CSV, NetCDF a další formáty.
              </li>
              <li>
                <ReferenceLink href="https://www.ncei.noaa.gov/products/land-based-station/noaa-global-temp">
                  NOAAGlobalTemp v6.1.0
                </ReferenceLink>
                : dokumentace, měsíční mapy a globální hodnoty.
              </li>
              <li>
                <ReferenceLink href="https://berkeleyearth.org/data/">Berkeley Earth</ReferenceLink>: globální
                měsíční hodnoty a mřížková data.
              </li>
              <li>
                <ReferenceLink href="https://wmo.int/publication-series/state-of-global-climate/state-of-global-climate-2025">
                  WMO State of the Global Climate 2025
                </ReferenceLink>
                : souhrn devíti produktů a výsledné hodnoty použité v kapitole Pozorování.
              </li>
            </ul>
          </section>

          <section>
            <h3>Obrázky a práva k použití</h3>
            <ul>
              <li>
                Mapa stanic: NASA Scientific Visualization Studio.{" "}
                <ReferenceLink href="https://svs.gsfc.nasa.gov/4961/">Původní soubor a kredit</ReferenceLink>. NASA
                své obrazové materiály dovoluje používat pro informační účely při uvedení zdroje, pokud není u
                položky uvedeno jinak.{" "}
                <ReferenceLink href="https://www.nasa.gov/nasa-brand-center/images-and-media/">
                  pravidla NASA
                </ReferenceLink>
                .
              </li>
              <li>
                Fotografie bóje: NOAA/AOML.{" "}
                <ReferenceLink href="https://www.aoml.noaa.gov/index.php/2014/08/06/noaas-array-of-drifting-ocean-buoys/">
                  Původní stránka
                </ReferenceLink>
                . Neoznačené fotografie NOAA jsou materiálem veřejné domény; kredit NOAA/AOML je zachován.{" "}
                <ReferenceLink href="https://oceanservice.noaa.gov/about/faq.html">podmínky NOAA</ReferenceLink>.
              </li>
              <li>
                Animace pětiletých průměrů: NASA GISS.{" "}
                <ReferenceLink href="https://data.giss.nasa.gov/gistemp/animations/">
                  Původní MP4 a popis
                </ReferenceLink>
                ; použit beze změny podle pravidel NASA.
              </li>
              <li>
                Srovnávací graf: Copernicus Climate Change Service / ECMWF, aktualizace 28. ledna 2026.{" "}
                <ReferenceLink href="https://climate.copernicus.eu/GCH2025-graphics-gallery">
                  Původní PNG a data
                </ReferenceLink>
                . Generováno s použitím informací Copernicus Climate Change Service 2026; Evropská komise ani
                ECMWF nenesou odpovědnost za další použití těchto informací.{" "}
                <ReferenceLink href="https://cds.climate.copernicus.eu/licences/licence-to-use-copernicus-products">
                  licence Copernicus
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
