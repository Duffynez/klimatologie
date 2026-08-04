import Image from "next/image";
import { SourceLink } from "./SourceLink";

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
          <SourceLink id="DOI_10_1038_322430a0">Jones et al., 1986</SourceLink> a{" "}
          <SourceLink id="DOI_10_1029_94jd00548">Parker et al., 1994</SourceLink>
        </p>

        <p>
          Tuto definici používají i současné práce vzniklé nezávisle v několika výzkumných skupinách. Hansen a
          kol. ji popsali pro výpočet NASA, Rohde a Hausfather pro Berkeley Earth, Morice a kol. pro HadCRUT5 a
          Yin a kol. pro NOAAGlobalTemp. Metody se liší v podrobnostech, ale všechny tyto produkty spojují
          pozemní teplotu vzduchu s oceánskou teplotou vody u hladiny.{" "}
          <SourceLink id="DOI_10_1029_2010rg000345">Hansen et al., 2010</SourceLink>,{" "}
          <SourceLink id="DOI_10_5194_essd_12_3469_2020">
            Rohde &amp; Hausfather, 2020
          </SourceLink>
          , <SourceLink id="DOI_10_1029_2019jd032361">Morice et al., 2021</SourceLink> a{" "}
          <SourceLink id="DOI_10_1175_bams_d_24_0012_1">Yin et al., 2024</SourceLink>
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
          <SourceLink id="1938_Callendar">Callendar, 1938</SourceLink> a{" "}
          <SourceLink id="DOI_10_1002_qj_49708737102">Callendar, 1961</SourceLink>
        </p>

        <p>
          Hansen a Lebedeff v roce 1987 zkoumali, jak dobře se měsíční změny na jedné stanici podobají změnám na
          okolních stanicích. Na tomto základě skládali pozemní měření do oblastí a odhadovali chybu způsobenou
          nepravidelným rozmístěním stanic. Jones, Wigley a Wright o rok dříve zveřejnili výpočet, který spojil
          pozemní a oceánská pozorování od roku 1861. Tyto práce patří k přímým předchůdcům dnešních globálních
          produktů.{" "}
          <SourceLink id="DOI_10_1029_jd092id11p13345">
            Hansen &amp; Lebedeff, 1987
          </SourceLink>
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
          <SourceLink id="WEB_World_Meteorological_Organiz_Guide_to_Instruments_and_Methods_of_Observation_93c4c4a4">
            WMO: Guide to Instruments and Methods of Observation
          </SourceLink>
        </p>

        <p>
          Pro globální výpočet se používají měsíční průměry. Jedna stanice tak může přispět až dvanácti hodnotami
          za rok. Národní meteorologické služby je vytvářejí z denních odečtů, případně předávají dochované
          historické měsíční záznamy. Mezinárodní archiv GHCN-M v4 tyto údaje a další sbírky spojuje, vyhledává
          duplicity a přidává značky kontroly kvality. Jeho metodický popis uvádí původ dat i postup sestavení
          databáze.{" "}
          <SourceLink id="DOI_10_1175_jcli_d_18_0094_1">Menne et al., 2018</SourceLink>
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
            <SourceLink id="WEB_NASA_NASA_Scientific_Visualization_Studio_Temperature_bec5836b">Původní mapa a úplný kredit</SourceLink>
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
          <SourceLink id="DOI_10_1029_2018jd029867">Kennedy et al., 2019</SourceLink>
        </p>

        <p>
          Od konce 20. století poskytují stále větší podíl přímých oceánských pozorování zakotvené a volně
          unášené bóje. Teploměr driftující bóje je umístěn několik centimetrů pod rozhraním vody a vzduchu a
          hodnotu odesílá družicí. Lodní a bójová měření se shromažďují v archivu ICOADS, který zachovává typ
          platformy, polohu, čas a dostupné údaje o způsobu měření.{" "}
          <SourceLink id="DOI_10_1002_joc_4775">Freeman et al., 2017</SourceLink>
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
            <SourceLink id="WEB_NOAA_raquo_NOAA_s_Array_of_Drifting_Ocean_Buoys_90005d3e">
              Původní fotografie a popis přístroje
            </SourceLink>
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
          <SourceLink id="DOI_10_1175_2008jcli2263_1">
            Menne &amp; Williams, 2009
          </SourceLink>
        </p>

        <p>
          Oceánská část řeší podobný problém jinými prostředky. Autoři porovnávají souběžná měření lodí, bójí a
          teplotních profilů a odhadují odchylky jednotlivých způsobů odběru. HadSST4 proto není jedna opravená
          minulost, ale soubor 200 možných zpracování, která zastupují přípustné hodnoty nejistých oprav. Tato
          informace pokračuje až do nejistoty výsledného HadCRUT5.{" "}
          <SourceLink id="DOI_10_1029_2018jd029867">Kennedy et al., 2019</SourceLink>
        </p>

        <h3>3. Spočítá se místní měsíční rozdíl</h3>
        <p>
          Pro každou stanici nebo oceánskou buňku se určí obvyklá teplota jednotlivých kalendářních měsíců v
          referenčním období. Od každého měsíčního měření se odečte odpovídající dlouhodobý průměr. Výsledek říká,
          o kolik byl daný měsíc na daném místě teplejší nebo chladnější než jeho vlastní základ. Tento místní
          rozdíl se může podobat hodnotám v širokém okolí mnohem více než samotná teplota, což umožňuje spojovat
          nepravidelně rozmístěná pozorování.{" "}
          <SourceLink id="DOI_10_1029_jd092id11p13345">
            Hansen &amp; Lebedeff, 1987
          </SourceLink>
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
          <SourceLink id="DOI_10_1029_2019jd032361">Morice et al., 2021</SourceLink>,{" "}
          <SourceLink id="DOI_10_1029_2010rg000345">Hansen et al., 2010</SourceLink> a{" "}
          <SourceLink id="DOI_10_1175_bams_d_24_0012_1">Yin et al., 2024</SourceLink>
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
          <SourceLink id="DOI_10_1029_2005jd006548">Brohan et al., 2006</SourceLink> a{" "}
          <SourceLink id="DOI_10_1029_2019jd032361">Morice et al., 2021</SourceLink>
        </p>

        <p>
          NASA zveřejňuje pro GISTEMP v4 obdobný soubor 200 možných měsíčních map pro roky 1880–2020. Každá
          varianta představuje jedno přípustné zpracování vzhledem k popsaným nejistotám. Rozptyl variant lze
          přenést do dalšího výpočtu místo toho, aby uživatel pracoval pouze s jednou střední křivkou.{" "}
          <SourceLink id="DOI_10_1029_2023jd040179">Lenssen et al., 2024</SourceLink>
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
              <SourceLink id="WEB_Met_Office_Met_Office_Hadley_Centre_observations_datasets_2d3e1c4c">
                CSV a NetCDF ke stažení
              </SourceLink>{" "}
              · <SourceLink id="DOI_10_1029_2019jd032361">metodická studie</SourceLink>
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
              <SourceLink id="WEB_NASA_Data_GISS_GISS_Surface_Temperature_Analysis_GIST_4f73fdd3">
                Tabulky, CSV a NetCDF ke stažení
              </SourceLink>{" "}
              ·{" "}
              <SourceLink id="WEB_NASA_Data_GISS_GISTEMP_Uncertainty_Analysis_Observati_77ee7299">
                data a kód nejistoty
              </SourceLink>{" "}
              · <SourceLink id="DOI_10_1029_2010rg000345">metodická studie</SourceLink>
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
              <SourceLink id="WEB_NOAA_Index_of_data_noaa_global_surface_temperature_v6_382f4cae">
                Měsíční a roční hodnoty
              </SourceLink>{" "}
              ·{" "}
              <SourceLink id="WEB_NOAA_Index_of_data_noaa_global_surface_temperature_v6_aef36414">
                mapy NetCDF
              </SourceLink>{" "}
              ·{" "}
              <SourceLink id="DOI_10_25921_vvaa_wq11">záznam datové verze</SourceLink> ·{" "}
              <SourceLink id="DOI_10_1175_bams_d_24_0012_1">
                metodika verze 6
              </SourceLink>
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
              <SourceLink id="WEB_berkeleyearth_org_Data_Overview_Berkeley_Earth_b889a1aa">Datový portál a soubory ke stažení</SourceLink>{" "}
              ·{" "}
              <SourceLink id="DOI_10_5194_essd_12_3469_2020">
                metodická studie
              </SourceLink>
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
            <SourceLink id="WEB_NASA_Data_GISS_Surface_Temperature_Animations_34f35b4b">
              Původní animace a popis
            </SourceLink>
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
            <SourceLink id="WEB_Copernicus_Graphics_Gallery_Copernicus_4a265eb8">
              Původní graf a data
            </SourceLink>{" "}
            ·{" "}
            <SourceLink id="WEB_Copernicus_Licence_to_use_Copernicus_Products_rev_12_4244ad0f">
              licence Copernicus
            </SourceLink>
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
          <SourceLink id="WEB_Intergovernmental_Panel_on_C_Chapter_2_Changing_State_of_the_Climate_System_9c4e122d">
            IPCC AR6, kapitola 2
          </SourceLink>
        </p>

        <p>
          Nejnovější dokončené roční vyhodnocení zveřejnila Světová meteorologická organizace ve zprávě za rok
          2025. Její souhrn devíti globálních produktů určil rok 2025 na 1,43 ± 0,13 °C nad průměrem 1850–1900;
          uvedený interval má devadesátiprocentní úroveň nejistoty. Ve dvou produktech byl rok 2025 druhý
          nejteplejší a v sedmi třetí. Rozdíl mezi blízkými roky je tedy menší než nejistota, s níž lze jejich
          přesné pořadí určit.{" "}
          <SourceLink id="WEB_World_Meteorological_Organiz_State_of_the_Global_Climate_2025_53cbb3f3">
            WMO: State of the Global Climate 2025
          </SourceLink>
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
          <SourceLink id="WEB_World_Meteorological_Organiz_State_of_the_Global_Climate_2025_53cbb3f3">
            WMO: State of the Global Climate 2025
          </SourceLink>
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            Globální teplota u povrchu dlouhodobě roste a meziroční kolísání se odehrává kolem tohoto vzestupného
            průběhu. Desetiletí 2011–2020 bylo v průměru o 1,09 °C teplejší než období 1850–1900. Rok 2024 dosáhl
            1,55 °C nad tímto základem a byl nejteplejším rokem celého záznamu; rok 2025 následoval s hodnotou
            1,43 °C. Roky 2023, 2024 a 2025 tvoří tři nejteplejší roky a všech jedenáct let od roku 2015 do roku
            2025 patří mezi jedenáct nejteplejších roků pozorovaného období.
          </p>
        </div>

        <h2>Prameny, data a licence</h2>
        <div className="article-source-groups">
          <section>
            <h3>Historické a primární práce</h3>
            <ul>
              <li>
                Callendar, G. S. (1938):{" "}
                <SourceLink id="1938_Callendar">
                  The artificial production of carbon dioxide and its influence on temperature
                </SourceLink>
                . Pro tento článek je použita část s výpočtem teplot ze 147 stanic.
              </li>
              <li>
                Callendar, G. S. (1961):{" "}
                <SourceLink id="DOI_10_1002_qj_49708737102">
                  Temperature fluctuations and trends over the earth
                </SourceLink>
                .
              </li>
              <li>
                Jones, P. D., Wigley, T. M. L. &amp; Wright, P. B. (1986):{" "}
                <SourceLink id="DOI_10_1038_322430a0">
                  Global temperature variations between 1861 and 1984
                </SourceLink>
                .
              </li>
              <li>
                Hansen, J. &amp; Lebedeff, S. (1987):{" "}
                <SourceLink id="DOI_10_1029_jd092id11p13345">
                  Global trends of measured surface air temperature
                </SourceLink>
                .
              </li>
              <li>
                Parker, D. E. et al. (1994):{" "}
                <SourceLink id="DOI_10_1029_94jd00548">
                  Interdecadal changes of surface temperature since the late nineteenth century
                </SourceLink>
                .
              </li>
            </ul>
          </section>

          <section>
            <h3>Metodické práce</h3>
            <ul>
              <li>
                Brohan, P. et al. (2006):{" "}
                <SourceLink id="DOI_10_1029_2005jd006548">
                  Uncertainty estimates in regional and global observed temperature changes
                </SourceLink>
                .
              </li>
              <li>
                Menne, M. J. &amp; Williams, C. N. (2009):{" "}
                <SourceLink id="DOI_10_1175_2008jcli2263_1">
                  Homogenization of Temperature Series via Pairwise Comparisons
                </SourceLink>
                .
              </li>
              <li>
                Hansen, J. et al. (2010):{" "}
                <SourceLink id="DOI_10_1029_2010rg000345">
                  Global Surface Temperature Change
                </SourceLink>
                .
              </li>
              <li>
                Freeman, E. et al. (2017):{" "}
                <SourceLink id="DOI_10_1002_joc_4775">
                  ICOADS Release 3.0: a major update to the historical marine climate record
                </SourceLink>
                .
              </li>
              <li>
                Menne, M. J. et al. (2018):{" "}
                <SourceLink id="DOI_10_1175_jcli_d_18_0094_1">
                  The Global Historical Climatology Network Monthly Temperature Dataset, Version 4
                </SourceLink>
                .
              </li>
              <li>
                Kennedy, J. J. et al. (2019):{" "}
                <SourceLink id="DOI_10_1029_2018jd029867">
                  An Ensemble Data Set of Sea-Surface Temperature Change From 1850
                </SourceLink>
                .
              </li>
              <li>
                Rohde, R. A. &amp; Hausfather, Z. (2020):{" "}
                <SourceLink id="DOI_10_5194_essd_12_3469_2020">
                  The Berkeley Earth Land/Ocean Temperature Record
                </SourceLink>
                .
              </li>
              <li>
                Morice, C. P. et al. (2021):{" "}
                <SourceLink id="DOI_10_1029_2019jd032361">
                  An Updated Assessment of Near-Surface Temperature Change From 1850: The HadCRUT5 Data Set
                </SourceLink>
                .
              </li>
              <li>
                Yin, X. et al. (2024):{" "}
                <SourceLink id="DOI_10_1175_bams_d_24_0012_1">
                  NOAAGlobalTemp Version 6: An AI-Based Global Surface Temperature Dataset
                </SourceLink>
                .
              </li>
              <li>
                Lenssen, N. et al. (2024):{" "}
                <SourceLink id="DOI_10_1029_2023jd040179">
                  A NASA GISTEMPv4 Observational Uncertainty Ensemble
                </SourceLink>
                .
              </li>
            </ul>
          </section>

          <section>
            <h3>Data ke stažení</h3>
            <ul>
              <li>
                <SourceLink id="WEB_NOAA_Global_Historical_Climatology_Network_monthly_GH_3f6fc0cd">
                  GHCN-M v4
                </SourceLink>
                : měsíční pozemní pozorování a doprovodné údaje.
              </li>
              <li>
                <SourceLink id="WEB_NOAA_International_Comprehensive_Ocean_Atmosphere_Dat_9d4f6713">ICOADS</SourceLink>: jednotlivá historická a
                současná pozorování z lodí, bójí a dalších mořských platforem.
              </li>
              <li>
                <SourceLink id="WEB_Met_Office_Met_Office_Hadley_Centre_observations_datasets_2d3e1c4c">
                  HadCRUT.5.1.0.0
                </SourceLink>
                : globální tabulky, mřížková data a 200 realizací.
              </li>
              <li>
                <SourceLink id="WEB_NASA_Data_GISS_GISS_Surface_Temperature_Analysis_GIST_4f73fdd3">GISTEMP v4</SourceLink>:
                tabulky, CSV, NetCDF a další formáty.
              </li>
              <li>
                <SourceLink id="WEB_NOAA_NOAAGlobalTemp_0f2189d0">
                  NOAAGlobalTemp v6.1.0
                </SourceLink>
                : dokumentace, měsíční mapy a globální hodnoty.
              </li>
              <li>
                <SourceLink id="WEB_berkeleyearth_org_Data_Overview_Berkeley_Earth_b889a1aa">Berkeley Earth</SourceLink>: globální
                měsíční hodnoty a mřížková data.
              </li>
              <li>
                <SourceLink id="WEB_World_Meteorological_Organiz_State_of_the_Global_Climate_2025_53cbb3f3">
                  WMO State of the Global Climate 2025
                </SourceLink>
                : souhrn devíti produktů a výsledné hodnoty použité v kapitole Pozorování.
              </li>
            </ul>
          </section>

          <section>
            <h3>Obrázky a práva k použití</h3>
            <ul>
              <li>
                Mapa stanic: NASA Scientific Visualization Studio.{" "}
                <SourceLink id="WEB_NASA_NASA_Scientific_Visualization_Studio_Temperature_bec5836b">Původní soubor a kredit</SourceLink>. NASA
                své obrazové materiály dovoluje používat pro informační účely při uvedení zdroje, pokud není u
                položky uvedeno jinak.{" "}
                <SourceLink id="WEB_NASA_Guidelines_for_using_NASA_Images_and_Media_Guide_e6f9e9e4">
                  pravidla NASA
                </SourceLink>
                .
              </li>
              <li>
                Fotografie bóje: NOAA/AOML.{" "}
                <SourceLink id="WEB_NOAA_raquo_NOAA_s_Array_of_Drifting_Ocean_Buoys_90005d3e">
                  Původní stránka
                </SourceLink>
                . Neoznačené fotografie NOAA jsou materiálem veřejné domény; kredit NOAA/AOML je zachován.{" "}
                <SourceLink id="WEB_NOAA_NOAA_s_National_Ocean_Service_About_Us_4ba21b52">podmínky NOAA</SourceLink>.
              </li>
              <li>
                Animace pětiletých průměrů: NASA GISS.{" "}
                <SourceLink id="WEB_NASA_Data_GISS_Surface_Temperature_Animations_34f35b4b">
                  Původní MP4 a popis
                </SourceLink>
                ; použit beze změny podle pravidel NASA.
              </li>
              <li>
                Srovnávací graf: Copernicus Climate Change Service / ECMWF, aktualizace 28. ledna 2026.{" "}
                <SourceLink id="WEB_Copernicus_Graphics_Gallery_Copernicus_4a265eb8">
                  Původní PNG a data
                </SourceLink>
                . Generováno s použitím informací Copernicus Climate Change Service 2026; Evropská komise ani
                ECMWF nenesou odpovědnost za další použití těchto informací.{" "}
                <SourceLink id="WEB_Copernicus_Licence_to_use_Copernicus_Products_rev_12_4244ad0f">
                  licence Copernicus
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
