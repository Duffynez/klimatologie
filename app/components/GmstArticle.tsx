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
          Historická lodní měření nevznikala jedinou technikou. Námořníci měřili vodu ve vědrech vytažených z
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

        <h2>Od staničních dat k mapě a globálnímu průměru</h2>
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
          Tyto soubory nepoužívají stejnou nulu grafu, stejnou mřížku ani zcela stejný postup pro oblasti bez
          měření. Každý graf na webu proto musí uvést název souboru, verzi, datum stažení, referenční období, zda
          obsahuje statistické doplnění mezer, a přímý odkaz na data i metodický článek.
        </p>
      </div>

      <aside className="article-facts" aria-label="Technický přehled článku">
        <p className="eyebrow">Datový přehled</p>
        <dl>
          <div>
            <dt>Veličina</dt>
            <dd>Teplota vzduchu nad pevninou + SST nad oceánem</dd>
          </div>
          <div>
            <dt>Časový krok</dt>
            <dd>Měsíc a rok</dd>
          </div>
          <div>
            <dt>Nejdelší řady</dt>
            <dd>Od ledna 1850</dd>
          </div>
          <div>
            <dt>Výstup</dt>
            <dd>Anomálie v °C vůči referenčnímu období</dd>
          </div>
          <div>
            <dt>Nutné údaje</dt>
            <dd>Verze, nula grafu, pokrytí, nejistota</dd>
          </div>
        </dl>
      </aside>
    </article>
  );
}
