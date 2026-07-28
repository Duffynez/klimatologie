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
      <div className="article-prose">
        <p className="article-prose__intro">
          Globální teplota u povrchu je plošně vážená časová řada teplotních odchylek na celé Zemi. V běžných
          pozorovacích datových souborech spojuje dvě příbuzné, ale odlišně měřené veličiny: teplotu vzduchu u
          povrchu nad pevninou a teplotu mořské hladiny nad nezamrzlým oceánem. Vědecké datové soubory tuto
          kombinaci zveřejňují po měsících i letech jako odchylku v °C od přesně určeného referenčního období.
          Podrobný současný popis takové řady podávají Morice a kol. v práci o HadCRUT5, kde jsou pozemní a
          oceánská měření spojena do globálního souboru včetně nejistot. {" "}
          <ReferenceLink href="https://doi.org/10.1029/2019JD032361">Morice et al., 2021</ReferenceLink>
        </p>

        <p>
          Takové globální řady nevznikly až s HadCRUT5. Parker a kol. v roce 1994 sestavili globální pole dekádních
          anomálií z teploty vzduchu nad pevninou a SST. {" "}
          <ReferenceLink href="https://doi.org/10.1029/94JD00548">Parker et al., 1994</ReferenceLink>{" "}
          Folland a kol. v roce 2001 z téže dvojice dat spočítali globální a hemisférické roční anomálie. {" "}
          <ReferenceLink href="https://doi.org/10.1029/2001GL012877">Folland et al., 2001</ReferenceLink>{" "}
          Smith a Reynolds v roce 2005 popsali její měsíční globální rekonstrukci. {" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI3362.1">Smith &amp; Reynolds, 2005</ReferenceLink>
        </p>

        <p>
          Novější datové soubory se liší mřížkou, prací s mezerami a popisem nejistoty. Základní dvojice měření však
          zůstává stejná. Morice a kol. v roce 2012 spojili teplotu vzduchu u povrchu a SST do HadCRUT4. {" "}
          <ReferenceLink href="https://doi.org/10.1029/2011JD017187">Morice et al., 2012</ReferenceLink>{" "}
          Rohde a Hausfather v roce 2020 stejnou kombinaci popsali pro řadu Berkeley Earth jako teplotu vzduchu ve
          výšce 2 metrů nad pevninou a SST nad oceánem. {" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-12-3469-2020">Rohde &amp; Hausfather, 2020</ReferenceLink>
        </p>


        <p>
          Každé číslo v této řadě proto musí nést tři údaje: použitý datový soubor, období, ke kterému je
          odchylka vztažena, a verzi dat. Bez nich není hodnota úplně určená. Například GISTEMP používá jako nulu
          průměr let 1951–1980, HadCRUT5 období 1961–1990 a současný NOAAGlobalTemp období 1991–2020. Posun
          referenčního období změní polohu křivky na svislé ose, ale nemění rozdíl mezi dvěma měsíci nebo dvěma
          roky. {" "}
          <ReferenceLink href="https://data.giss.nasa.gov/gistemp/faq/">NASA GISTEMP FAQ</ReferenceLink>
        </p>

        <h2>Od kdy máme globální řadu</h2>
        <p>
          Otázka „od kdy měříme globální teplotu“ má přesnou odpověď jen tehdy, když se uvede konkrétní datový
          soubor. Současné řady HadCRUT a NOAAGlobalTemp začínají v lednu 1850. NASA GISTEMP začíná v roce 1880.
          Tyto roky označují začátek souvislých časových řad daného produktu, sestavených z dochovaných pozemních
          a lodních pozorování. {" "}
          <ReferenceLink href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">HadCRUT5</ReferenceLink>, {" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/products/land-based-station/noaa-global-temp">
            NOAAGlobalTemp
          </ReferenceLink>{" "}
          a <ReferenceLink href="https://data.giss.nasa.gov/gistemp/index.html">NASA GISTEMP</ReferenceLink>.
        </p>

        <p>
          Rok 1850 neznamená okamžik, kdy byla Země pokryta rovnoměrnou sítí stanic. Starší část záznamu má méně
          pozorování, zejména nad oceány, na jižní polokouli a v polárních oblastech. Právě proto se s každou
          globální řadou zveřejňuje také odhad nejistoty. Už Brohan a kol. při popisu HadCRUT3 rozlišovali chybu
          samotného měření, chybu vyplývající z omezeného počtu pozorování, možné systematické odchylky a chybu z
          neúplného plošného pokrytí. {" "}
          <ReferenceLink href="https://doi.org/10.1029/2005JD006548">Brohan et al., 2006</ReferenceLink>
        </p>

        <p>
          Jednou z raných podrobných metodických prací o globálním spojení staničních teplot je studie Hansena a
          Lebedeffa z roku 1987. Pracovala především s obdobím 1880–1985, zkoumala rozmístění meteorologických
          stanic, prostorovou souvislost teplotních odchylek a chybu vznikající nerovnoměrným pokrytím. {" "}
          <ReferenceLink href="https://doi.org/10.1029/JD092iD11p13345">Hansen &amp; Lebedeff, 1987</ReferenceLink>
        </p>

        <h2>Co se měří nad pevninou</h2>
        <p>
          Pozemní složkou globální řady je teplota vzduchu v blízkosti zemského povrchu. Meteorologická teplota
          se měří ve větraném ochranném krytu, který omezuje přímý vliv slunečního záření, srážek a tepelného
          záření okolních povrchů. Standardní popis pro klimatické pozorování uvádí teplotu vzduchu ve větraném
          krytu přibližně 1,5 metru nad zemí; skutečná výška, poloha a vybavení stanice mají být zaznamenány v
          metadatech. {" "}
          <ReferenceLink href="https://gcos.wmo.int/sites/default/files/2019-06/gcos_226_en.pdf">
            WMO/GCOS: definice povrchové teploty vzduchu
          </ReferenceLink>
        </p>

        <p>
          Jednotlivé stanice mohou poskytovat okamžité odečty, denní minima a maxima nebo denní průměry. Z nich
          se vytvářejí měsíční hodnoty, protože globální teplotní řady pracují hlavně s měsíčním krokem. Současná
          databáze GHCN-M v4 sdružuje měsíční teplotní údaje z mezinárodní sítě stanic a připojuje k nim kontrolní
          příznaky a informace o původu. Její metodický článek popisuje, jak se denní a měsíční záznamy z mnoha
          archivů spojují do jedné databáze. {" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI-D-18-0094.1">Menne et al., 2018</ReferenceLink>
        </p>

        <p>
          Mapa níže převádí tuto databázi do konkrétní podoby: ukazuje rozmístění stanic použitých v analýze GISTEMP
          v4. Neříká, kolik pozorování bylo v každém měsíci k dispozici ani jakou historii má každá stanice; tyto
          informace jsou v datech a metadatech.
        </p>
        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/gmst/gistemp-stations-robinson.png"
            alt="Mapa rozmístění meteorologických stanic používaných v analýze GISTEMP v4."
            width={3840}
            height={2160}
            unoptimized
          />
          <figcaption>
            Meteorologické stanice používané v analýze GISTEMP v4. Vizualizace: NASA Scientific Visualization
            Studio; data: NASA GISS. {" "}
            <ReferenceLink href="https://svs.gsfc.nasa.gov/4961/">Původní záznam a kredit</ReferenceLink>
          </figcaption>
        </figure>

        <p>
          Přístroj na stanici se v čase může změnit. Historické záznamy obsahují ruční odečty, zatímco část
          dnešních stanic používá automatická elektronická čidla. Může se změnit i poloha stanice, výška čidla,
          okolní povrch nebo čas denního odečtu. Tyto změny samy o sobě vytvářejí ve staniční řadě skok, i když se
          v daném měsíci nezmění teplotní poměry širšího okolí. Proto je historie stanice součástí práce s daty,
          nikoli jen administrativní poznámka.
        </p>

        <h2>Co se měří na oceánu</h2>
        <p>
          Oceánská složka používá teplotu mořské hladiny, anglicky sea-surface temperature neboli SST. Pozorování
          pocházejí z lodí, kotvených bójí a plovoucích bójí. WMO uvádí lodě a bóje jako základní prvky
          pozorovací sítě nad oceány. {" "}
          <ReferenceLink href="https://wmo.int/activities/global-observing-system-gos/global-observing-system-gos">
            WMO: globální pozorovací systém
          </ReferenceLink>
        </p>

        <p>
          Fotografie níže ukazuje jednu z kotvených bójí v této pozorovací síti. Je to příklad současné platformy pro
          měření SST.
        </p>
        <figure className="article-figure article-figure--portrait">
          <Image
            className="article-figure__media"
            src="/media/gmst/noaa-weather-buoy-44008.jpg"
            alt="Žlutá meteorologická bóje NOAA na mořské hladině."
            width={1511}
            height={2016}
            unoptimized
          />
          <figcaption>
            Meteorologická bóje 44008 s čidly pro teplotu mořské hladiny a další pozorování. Foto: James Elliott,
            National Data Buoy Center; zdroj: NOAA PMEL. {" "}
            <ReferenceLink href="https://www.pmel.noaa.gov/media/image/44008-pic1-2025june13jpg">
              Původní fotografie
            </ReferenceLink>
          </figcaption>
        </figure>

        <p>
          Fotografie zachycuje moderní bóji, historická lodní měření však nevznikala jedinou technikou. Námořníci měřili vodu ve vědrech vytažených z
          moře, později se používala voda nasávaná do strojovny, čidla na trupu lodě a nakonec stále větší počet
          bójí. Jednotlivé postupy se liší místem, kde vodu snímají, materiálem nádoby, dobou mezi odběrem a
          odečtem i konstrukcí čidla. Kennedy ve studii o historických oceánských záznamech rozlišuje právě tyto
          skupiny pozorování a popisuje, jak se jejich odlišnosti evidují a zapracovávají do homogenizované řady
          SST. {" "}
          <ReferenceLink href="https://doi.org/10.1029/2010JD015220">Kennedy, 2011</ReferenceLink>
        </p>

        <p>
          Moderní datový soubor HadSST4 pracuje s rozsáhlým souborem lodních a bójových měření od roku 1850 a
          vytváří soubor možných realizací dat, aby zahrnul nejistotu spojenou s historickými metodami měření. {" "}
          <ReferenceLink href="https://doi.org/10.1029/2018JD029867">Kennedy et al., 2019</ReferenceLink> Tato
          oceánská řada je pak jedním ze vstupů do HadCRUT5.
        </p>

        <h2>Proč se používají anomálie</h2>
        <p>
          Absolutní teplota má na různých místech Země velmi odlišný běžný rozsah. Stanice v horách, na pobřeží
          nebo ve vnitrozemí proto neposkytují přímo srovnatelné absolutní hodnoty. Globální řady místo toho
          počítají, o kolik se daný měsíc nebo rok liší od obvyklé hodnoty téhož místa.
        </p>


        <p>
          Ve vzorci znamená <em>i</em> konkrétní stanici, <em>m</em> kalendářní měsíc a <em>y</em> rok.
        </p>

        <div className="article-formula" aria-label="Výpočet teplotní anomálie">
          <span>anomálie(i, m, y)</span>
          <b>=</b>
          <span>naměřená teplota(i, m, y)</span>
          <b>−</b>
          <span>průměr stanice(i, m) v referenčním období</span>
        </div>

        <p>
          Stanice tak může mít například jinou běžnou lednovou teplotu než jiná stanice, ale obě mohou vykazovat
          stejně velkou lednovou odchylku od vlastního dlouhodobého průměru. NASA vysvětluje, že právě práce s
          anomáliemi umožňuje spojovat pozorování z míst s odlišným klimatem a nadmořskou výškou. {" "}
          <ReferenceLink href="https://science.nasa.gov/earth/measuring_global_temperature/">
            NASA: sestavení globální teploty
          </ReferenceLink>
        </p>

        <p>
          Volba referenčního období neurčuje velikost změny mezi jednotlivými roky. Určuje pouze, vůči kterému
          průměru je na grafu nula. Proto se při porovnávání různých souborů nejprve sjednocuje referenční období
          a teprve potom se překrývají křivky.
        </p>

        <h2>Globální průměr</h2>
        <p>
          Prvním krokem je kontrola dat. Databáze hledají duplicity, nesmyslné hodnoty, chybějící měsíce, nesoulad
          s metadaty a další zjevné problémy. GHCN-M v4 například zveřejňuje příznaky pro duplicitní hodnoty,
          klimatologické odlehlé hodnoty nebo údaje označené po ruční kontrole jako chybné. {" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/products/land-based-station/global-historical-climatology-network-monthly">
            NOAA: GHCN-M a kontrola kvality
          </ReferenceLink>
        </p>

        <p>
          Dalším krokem je homogenizace. Jejím úkolem je rozlišit postupný průběh teplotní řady od náhlého skoku
          vzniklého změnou měřicí praxe nebo stanice. Metoda dvojic stanic, popsaná Mennem a Williamsem, vytváří
          rozdíly mezi blízkými stanicemi a hledá okamžiky, kdy se jedna řada náhle odchýlí od více sousedních řad.
          Pokud se takový zlom podaří odhadnout, vytvoří se upravená klimatická řada pro další výpočty. {" "}
          <ReferenceLink href="https://doi.org/10.1175/2008JCLI2263.1">Menne &amp; Williams, 2009</ReferenceLink>
        </p>

        <p>
          Zpracované pozemní a oceánské anomálie se následně ukládají do geografické mřížky. Každá buňka
          představuje část zemského povrchu. Z buněk se počítají oblasti, polokoule a nakonec globální průměr,
          přičemž jednotlivé části mají váhu podle své plochy. Bez tohoto kroku by hustě měřená území měla
          nepřiměřený vliv.
        </p>

        <p>
          Hansen a Lebedeff ukázali, že teplotní anomálie stanic ve středních a vysokých zeměpisných šířkách jsou
          na vzdálenostech menších než zhruba 1 000 km silně prostorově související. To je empirický podklad pro
          spojování stanic v širších oblastech. {" "}
          <ReferenceLink href="https://doi.org/10.1029/JD092iD11p13345">Hansen &amp; Lebedeff, 1987</ReferenceLink>
        </p>

        <p>
          Jednotlivé datové soubory volí různé způsoby práce s buňkami bez přímého měření. HadCRUT5 zveřejňuje dvě
          varianty: neinfillovanou, která ponechává chybějící buňky prázdné, a analytickou variantu, která
          statisticky rozšiřuje odhad tam, kde jsou dostupná pozorování dostatečně informativní. Obě varianty jsou
          součástí téhož datového produktu a jejich rozdíl musí být u grafu vždy uveden. {" "}
          <ReferenceLink href="https://doi.org/10.1029/2019JD032361">Morice et al., 2021</ReferenceLink>
        </p>

        <p>
          Animace níže zachycuje výstup jedné konkrétní řady, GISTEMP v4, jako pětileté průměry anomálií. Není
          soupisem jednotlivých stanic ani porovnáním všech datových souborů: ukazuje, jak tento produkt převádí
          zpracovaná pozorování do postupných map.
        </p>
        <figure className="article-figure">
          <video
            controls
            className="article-figure__media"
            playsInline
            preload="metadata"
            aria-label="Pětileté průměry anomálií GISTEMP v4 od roku 1880 do roku 2025."
          >
            <source src="/media/gmst/gistemp-five-year-anomaly-1880-2025.mp4" type="video/mp4" />
            Váš prohlížeč nepodporuje přehrávání videa.
          </video>
          <figcaption>
            Pětileté průměry anomálií GISTEMP v4, 1880–2025. Tato verze nedopočítává hodnoty v oblastech bez
            dat. NASA GISS. {" "}
            <ReferenceLink href="https://data.giss.nasa.gov/gistemp/animations/">
              Původní animace a popis
            </ReferenceLink>
          </figcaption>
        </figure>

        <h2>Nejistota je součást výsledku</h2>
        <p>
          Globální teplotní řada nevzniká bez nejistoty. Hlavní zdroje jsou nepřesnost jednotlivých měření,
          nerovnoměrné plošné pokrytí, změny přístrojů a stanic, historické změny oceánského měření a způsob odhadu
          oblastí bez přímých dat.
        </p>

        <p>
          HadCRUT5 proto nevydává jen jednu řadu, ale soubor 200 možných realizací. Ty zachycují nejistoty
          pozemních stanic, oceánských pozorování, prostorového pokrytí a statistického dopočtu. {" "}
          <ReferenceLink href="https://doi.org/10.1029/2019JD032361">Morice et al., 2021</ReferenceLink> GISTEMP
          v4 má rovněž samostatně publikovaný soubor pozorovacích nejistot; Lenssen a kol. do něj zahrnuli mimo
          jiné nejistoty oceánských dat, homogenizace stanic a měnícího se pokrytí. {" "}
          <ReferenceLink href="https://doi.org/10.1029/2023JD040179">Lenssen et al., 2024</ReferenceLink>
        </p>

        <p>
          Na stránce proto má mít každý graf vedle hlavní čáry i informaci o nejistotě, verzi dat a metodě práce s
          mezerami. Nejde o doplněk pro odborníky. Je to součást definice výsledku.
        </p>

        <h2>Současné globální soubory</h2>
        <p>
          <strong>HadCRUT5.1</strong> je společný produkt britského Met Office Hadley Centre a Climatic Research
          Unit na University of East Anglia. Začíná v roce 1850, používá pozemní řadu CRUTEM5 a oceánskou řadu
          HadSST4. Poskytuje měsíční mřížková data, globální a regionální řady i soubory nejistot. {" "}
          <ReferenceLink href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">Datový portál HadCRUT5</ReferenceLink>
        </p>

        <p>
          <strong>NASA GISTEMP v4</strong> začíná rokem 1880. NASA zveřejňuje tabulky globálního land-ocean indexu,
          mřížková data i dokumentaci k metodě a nejistotě. Aktuální odborný soubor nejistot pro tuto verzi popsali
          Lenssen a kol. v roce 2024. {" "}
          <ReferenceLink href="https://data.giss.nasa.gov/gistemp/index.html">Data GISTEMP</ReferenceLink>
        </p>

        <p>
          <strong>NOAAGlobalTemp v6.1</strong> začíná rokem 1850 a kombinuje pozemní data GHCN-M v4 s oceánskou
          řadou ERSST v6. Současná verze používá pro rekonstrukci chybějících oblastí neuronovou síť; postup je
          popsán v metodickém článku Yina a kol. {" "}
          <ReferenceLink href="https://doi.org/10.1175/BAMS-D-24-0012.1">Yin et al., 2024</ReferenceLink> Aktuální
          soubory, časové řady a mřížková data jsou dostupné na {" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/products/land-based-station/noaa-global-temp">portálu NOAA</ReferenceLink>.
        </p>


        <p>
          Vedle tří řad popsaných výše pracuje také Berkeley Earth. Následující obrázek je převzaté srovnání čtyř
          samostatně sestavovaných produktů, nikoli nový přepočet vytvořený pro tento web. Původní popisek a odkaz pod
          grafem proto patří k jeho významu.
        </p>
        <figure className="article-figure">
          <Image
            src="/media/gmst/global-temperature-four-datasets-nasa.jpg"
            className="article-figure__media"
            alt="Graf porovnávající globální teplotní řady NASA GISTEMP, NOAA NCEI, Hadley Centre a Berkeley Earth."
            width={1536}
            height={989}
            unoptimized
          />
          <figcaption>
            Srovnání čtyř nezávisle sestavovaných globálních teplotních řad: NASA GISTEMP, NOAA NCEI, Hadley
            Centre/Climatic Research Unit a Berkeley Earth. Vizualizace: Gavin Schmidt / NASA. {" "}
            <ReferenceLink href="https://science.nasa.gov/earth/climate-change/the-raw-truth-on-global-temperature-records/">Původní graf a popis</ReferenceLink>
          </figcaption>
        </figure>


        <p>
          Srovnání křivek samo o sobě nenahrazuje údaje o jejich konstrukci. Tyto soubory nepoužívají stejnou nulu grafu, stejnou mřížku ani zcela stejný postup pro oblasti bez
          měření. Každý graf na webu proto musí uvést název souboru, verzi, datum stažení, referenční období, zda
          obsahuje statistické doplnění mezer, a přímý odkaz na data i metodický článek.
        </p>
      </div>

      <aside className="article-glossary" aria-label="Slovníček pojmů">
        <p className="eyebrow">Slovníček</p>
        <h2>Pojmy v článku</h2>
        <dl>
          <div>
            <dt>SST</dt>
            <dd><em>Sea-surface temperature</em>, teplota mořské hladiny měřená loděmi a bójemi.</dd>
          </div>
          <div>
            <dt>Referenční období</dt>
            <dd>Víceleté období, které určuje nulu grafu, například 1961–1990.</dd>
          </div>
          <div>
            <dt>Mřížka</dt>
            <dd>Rozdělení zemského povrchu na buňky pro plošně vážený průměr.</dd>
          </div>
          <div>
            <dt>Infill</dt>
            <dd>Statistický odhad pro oblast bez přímého měření; neinfillovaná data takovou buňku ponechají prázdnou.</dd>
          </div>
          <div>
            <dt>HadCRUT5</dt>
            <dd>Globální řada složená z CRUTEM5 nad pevninou a HadSST4 nad oceánem.</dd>
          </div>
          <div>
            <dt>CRUTEM5</dt>
            <dd><em>Climatic Research Unit Temperature</em>, pozemní složka HadCRUT5.</dd>
          </div>
          <div>
            <dt>HadSST4</dt>
            <dd><em>Hadley Centre Sea Surface Temperature</em>, oceánská složka HadCRUT5.</dd>
          </div>
          <div>
            <dt>GISTEMP v4</dt>
            <dd><em>GISS Surface Temperature Analysis</em>, globální řada NASA Goddard Institute for Space Studies.</dd>
          </div>
          <div>
            <dt>NOAAGlobalTemp v6.1</dt>
            <dd>Globální řada NOAA založená na GHCN-M v4 a ERSST v6.</dd>
          </div>
          <div>
            <dt>GHCN-M v4</dt>
            <dd><em>Global Historical Climatology Network Monthly</em>, databáze měsíčních pozemních stanic.</dd>
          </div>
          <div>
            <dt>ERSST v6</dt>
            <dd><em>Extended Reconstructed Sea Surface Temperature</em>, rekonstruovaná oceánská řada SST.</dd>
          </div>
        </dl>
      </aside>
    </article>
  );
}
