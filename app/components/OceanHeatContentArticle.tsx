import Image from "next/image";
import type { ReactNode } from "react";

function ReferenceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="article-reference" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function OceanHeatContentArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary" aria-labelledby="ohc-glossary-title">
        <p className="eyebrow">Potřebné informace</p>
        <h2 id="ohc-glossary-title">Pojmy v článku</h2>
        <dl>
          <div>
            <dt>OHC</dt>
            <dd><i>Ocean heat content</i>, tepelný obsah vymezené části oceánu.</dd>
          </div>
          <div>
            <dt>ZJ</dt>
            <dd>Zettajoule: 10<sup>21</sup> joulů. Jednotka používaná pro globální OHC.</dd>
          </div>
          <div>
            <dt>Profil</dt>
            <dd>Řada měření od hladiny do hloubky v jednom místě a čase.</dd>
          </div>
          <div>
            <dt>CTD</dt>
            <dd><i>Conductivity, temperature, depth</i>: přístroj měřící vodivost, teplotu a tlak.</dd>
          </div>
          <div>
            <dt>XBT</dt>
            <dd><i>Expendable bathythermograph</i>, jednorázová sonda pro teplotní profil.</dd>
          </div>
          <div>
            <dt>Argo</dt>
            <dd>Mezinárodní síť volně plujících profilovacích přístrojů, většinou do 2 000 m.</dd>
          </div>
          <div>
            <dt>0–700 m / 0–2 000 m</dt>
            <dd>Horní a dolní mez hloubkové vrstvy, přes kterou je OHC sečten.</dd>
          </div>
          <div>
            <dt>Referenční období</dt>
            <dd>Období, jehož průměr určuje nulu anomálie datového produktu.</dd>
          </div>
        </dl>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Tepelný obsah oceánů vyjadřuje změnu tepelné energie uložené ve vymezeném objemu mořské vody. Globální řada
          proto vždy uvádí, který oceánský prostor a kterou hloubkovou vrstvu zahrnuje, jaké referenční období používá a
          zda jde o hodnotu v joulech, nebo o přírůstek energie za určitý čas. Levitus a kol. při výpočtu řad 0–700 a
          0–2 000 metrů výslovně pracují s tepelným obsahem jako s anomálií vůči referenčnímu stavu. {" "}
          <ReferenceLink href="https://doi.org/10.1029/2012GL051106">Levitus et al., 2012</ReferenceLink>
        </p>

        <p>
          Teplota na mořské hladině popisuje úzkou horní vrstvu oceánu. Tepelný obsah naproti tomu spojuje teplotní
          odchylky ze všech zvolených hloubek a objemů vody. Stejná změna teploty nemá stejný energetický význam v jedné
          desetimetrové vrstvě a ve vrstvě sahající do dvou kilometrů. Právě proto se OHC zveřejňuje po vrstvách, nejčastěji
          0–700 m, 700–2 000 m a 0–2 000 m. Tento způsob členění používají nezávislé soubory NOAA/NCEI, IAP/CAS i práce,
          která porovnala několik světových analýz horního oceánu. {" "}
          <ReferenceLink href="https://doi.org/10.1038/nature09043">Lyman et al., 2010</ReferenceLink>, {" "}
          <ReferenceLink href="https://doi.org/10.1126/sciadv.1601545">Cheng et al., 2017</ReferenceLink>{" "}
          a <ReferenceLink href="https://doi.org/10.5194/essd-16-3517-2024">Cheng et al., 2024</ReferenceLink>.
        </p>

        <p>
          Výpočet se provádí po malých prostorových a hloubkových buňkách. V každé z nich se změna teploty přepočítá na
          energii a výsledky se sečtou. Praktický zápis takového součtu vypadá následovně:
        </p>

        <div className="article-formula" aria-label="Zjednodušený výpočet změny tepelného obsahu oceánu">
          <b>ΔOHC</b>
          <span>= Σ<sub>k</sub> ρ<sub>k</sub> · c<sub>p,k</sub> · ΔT<sub>k</sub> · ΔV<sub>k</sub></span>
        </div>

        <p>
          Index <em>k</em> označuje konkrétní buňku mřížky a hloubkovou vrstvu; ρ je hustota mořské vody, c<sub>p</sub>
          její měrná tepelná kapacita, ΔT teplotní odchylka od referenčního průměru a ΔV objem buňky. Datové produkty
          dokumentují, jakou teplotní veličinu, hustotu, mřížku a referenční období volí. Současný produkt IAPv4 například
          poskytuje měsíční pole teploty a OHC v mřížce 1° × 1° pro horních 6 000 metrů oceánu; jeho autoři popisují
          jednotlivé kroky od kontroly profilů až po prostorovou rekonstrukci. {" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-16-3517-2024">Cheng et al., 2024</ReferenceLink>
        </p>

        <p>
          OHC tedy není odečet z jediného teploměru ani průměr teplot mořské hladiny. Je to zveřejněný datový produkt,
          který vychází z mnoha přímých profilů a jasně vymezeného výpočtu. NOAA Climate Data Record nabízí například
          řady anomálií od roku 1955 po třech měsících, letech a pětiletých obdobích; každá z nich je zvlášť vydaná pro
          určitou vrstvu a oblast. {" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/products/climate-data-records/global-ocean-heat-content">
            NOAA/NCEI Global Ocean Heat Content CDR
          </ReferenceLink>
        </p>

        <figure className="article-figure article-figure--portrait">
          <Image
            className="article-figure__media"
            src="/media/ocean-heat-content/argo-float-deployment-noaa-pmel.jpg"
            alt="Profilovací plovák Argo před vypuštěním z výzkumné lodi NOAA."
            width={1600}
            height={1064}
            unoptimized
          />
          <figcaption>
            Profilovací plovák Argo před vypuštěním z lodi NOAA <i>Ronald H. Brown</i>. Přístroj na výstupu k hladině
            zaznamenává svislý profil teploty, tlaku a vodivosti. Foto a zdroj: NOAA PMEL, materiál vlády USA ve veřejné
            doméně. {" "}
            <ReferenceLink href="https://floats.pmel.noaa.gov/gallery/field-operations">Původní fotografie</ReferenceLink>.
          </figcaption>
        </figure>

        <h2>Historie</h2>
        <p>
          Předchůdcem dnešních řad byly jednotlivé teplotní profily z výzkumných plaveb. Expedice HMS <i>Challenger</i>{" "}
          v letech 1873–1876 pořizovala sériová pozorování teploty v různých hloubkách. Její původní fyzikální zpráva
          obsahuje samostatnou část s hlubokomořskými teplotami odečtenými během plavby; NOAA dnes tyto historické profily
          zpřístupňuje i jako digitální datový soubor. {" "}
          <ReferenceLink href="https://escholarship.org/uc/item/38p2q583">Challenger Expedition, 1885</ReferenceLink>{" "}
          a <ReferenceLink href="https://catalog.data.gov/dataset/oceanographic-temperature-profiles-from-the-hms-challenger-in-the-antarctic-north-atlantic">
            NOAA/NCEI: digitalizované profily Challengeru
          </ReferenceLink>.
        </p>

        <p>
          Ve 20. století přibyly opakované lodní stanice, převrácené teploměry, láhve na odběr vody a později sondy CTD.
          Od druhé poloviny 60. let rozšířily počet profilů jednorázové sondy XBT, vypouštěné z lodí na opakovaných trasách.
          Síť globálních XBT řezů poskytuje souvislá měření teplotních profilů od roku 1967; archiv World Ocean Database
          uchovává jejich původ, technické údaje i výsledky kontrol kvality. {" "}
          <ReferenceLink href="https://doi.org/10.1175/BAMS-D-18-0005.1">Goni et al., 2019</ReferenceLink>{" "}
          a <ReferenceLink href="https://www.ncei.noaa.gov/access/world-ocean-database/xbt-bibliography.html">NOAA/NCEI: XBT archive</ReferenceLink>.
        </p>

        <p>
          Zásadní změnu pokrytí přinesl program Argo. Standardní plovák v desetidenním cyklu sestoupí přibližně do 2 000 m,
          při výstupu změří profil a na hladině jej odešle přes satelit. Síť je navržena jako globální soustava přibližně
          čtyř tisíc plováků; její data doplňují lodní CTD, kotvená měření, kluzáky a opakované hlubokomořské řezy. {" "}
          <ReferenceLink href="https://doi.org/10.1038/nclimate2872">Riser et al., 2016</ReferenceLink>{" "}
          a <ReferenceLink href="https://argo.ucsd.edu/how-do-floats-work/">Argo: jak plováky pracují</ReferenceLink>.
        </p>

        <p>
          Počátek řady proto závisí na konkrétním produktu. NOAA/NCEI publikuje globální OHC od roku 1955. IAPv4 ukládá
          měsíční pole od roku 1940, přičemž jeho autoři označují globální rekonstrukci po roce 1957 za spolehlivější díky
          hustšímu pokrytí. Historické profily tak mají v dnešních řadách své místo, ale jejich četnost a prostorové rozložení
          se liší od období Argo. {" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/products/climate-data-records/global-ocean-heat-content">NOAA/NCEI CDR</ReferenceLink>{" "}
          a <ReferenceLink href="https://doi.org/10.5194/essd-16-3517-2024">IAPv4</ReferenceLink>.
        </p>

        <h2>Jak vzniká časová řada</h2>
        <p>
          Základní vstup tvoří profil: k určité poloze a času náleží hodnoty teploty v řadě hloubek. Moderní plovák Argo
          zároveň měří tlak a vodivost, z níž se určuje slanost. Lodní CTD pořizuje podobný profil při spuštění z paluby.
          Starší láhve, mechanické batytermografy a XBT nesou odlišné přístroje i metadatové záznamy. Soubor IAPv4 zahrnuje
          všechny tyto druhy pozorování a výslovně je rozlišuje při kontrole kvality a korekcích. {" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-16-3517-2024">Cheng et al., 2024</ReferenceLink>.
        </p>

        <p>
          Po kontrole se jednotlivé profily převedou na teplotní odchylky v definovaných hloubkách a sestaví se do pravidelné
          prostorové mřížky. Každá buňka nese pozorování, odhad pro okolní oblast a informaci o nejistotě. NCEI používá pro
          vrstvy 0–700 m šestnáct standardních hloubek a pro 0–2 000 m dvacet šest; z mřížky pak počítá oblasti, oceánské
          pánve a globální součet v jednotkách 10<sup>22</sup> J. {" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/products/world-ocean-database">NOAA/NCEI: World Ocean Database a metodika</ReferenceLink>.
        </p>

        <p>
          Historické přístroje dostávají vlastní korekce. Sonda XBT například určuje hloubku nepřímo z doby pádu; porovnání
          s CTD a láhvemi proto odhalilo časově i hloubkově proměnné odchylky. Gouretski a Koltermann je kvantifikovali pro
          globální soubor a následné práce testovaly korekce podle typu sondy, času a měřené teplotní veličiny. Tyto kroky
          jsou součástí publikované metodiky řady, ne dodatečná poznámka pod grafem. {" "}
          <ReferenceLink href="https://doi.org/10.1029/2006GL027834">Gouretski &amp; Koltermann, 2007</ReferenceLink>{" "}
          a <ReferenceLink href="https://doi.org/10.1175/JTECH-D-13-00197.1">Cheng et al., 2014</ReferenceLink>.
        </p>

        <p>
          Rozdílné metody mapování, volba klimatologie a korekce přístrojů vytvářejí měřitelný rozptyl mezi publikovanými
          produkty. Boyer a kol. jej zkoumali systematicky pro globální OHC 0–700 m a hodnotili zvlášť vliv mapování,
          korekcí XBT i referenčních klimatologií. IAPv4 zveřejňuje pro své řady interval spolehlivosti, v němž zahrnuje
          chybu přístroje, odběru vzorků a mapování; autoři zároveň popisují, které další zdroje nejistoty interval zatím
          nezahrnuje. {" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI-D-15-0801.1">Boyer et al., 2016</ReferenceLink>{" "}
          a <ReferenceLink href="https://doi.org/10.5194/essd-16-3517-2024">Cheng et al., 2024</ReferenceLink>.
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/ocean-heat-content/iapv4-observation-coverage.png"
            alt="Grafy a mapy znázorňující počet a prostorové pokrytí oceánských teplotních profilů podle typu přístroje od roku 1940 do roku 2023."
            width={2067}
            height={3143}
            unoptimized
          />
          <figcaption>
            Proměna dostupných teplotních profilů v souboru IAPv4. Panel (a) ukazuje počet profilů za rok podle přístroje,
            panel (b) podíl buněk mřížky s pozorováním a panel (c) jejich prostorové rozložení. Zkratky: Bottle = láhvové
            odběry, CTD = vodivost–teplota–hloubka, MBT = mechanický batytermograf, XBT = jednorázový batytermograf,
            PFL = profilovací plováky Argo, GLD = kluzáky, APB = přístroje nesené mořskými savci, MRB a DRB = kotvené a
            unášené bóje. Cheng a kol., 2024, obr. 1; převzato beze změny pod licencí CC BY 4.0. {" "}
            <ReferenceLink href="https://doi.org/10.5194/essd-16-3517-2024">Zdroj a licence</ReferenceLink>.
          </figcaption>
        </figure>

        <h2>Datové řady</h2>
        <p>
          <strong>NOAA/NCEI Global Ocean Heat Content CDR</strong> poskytuje řady od roku 1955 pro světový oceán, hlavní
          pánve a obě polokoule. Uživatel si může stáhnout tříměsíční, roční a pětileté hodnoty pro 0–700 a 0–2 000 metrů,
          včetně standardní chyby. Datová sada má vlastní DOI a zveřejněnou algoritmickou dokumentaci. {" "}
          <ReferenceLink href="https://doi.org/10.7289/V53F4MVP">Data NOAA/NCEI</ReferenceLink>.
        </p>

        <p>
          <strong>IAPv4</strong> je měsíční mřížkový produkt teploty a OHC od roku 1940 do 6 000 m. Pro dlouhodobý vývoj
          0–2 000 m publikuje anomálie, intervaly nejistoty i samostatná data. V grafu níže jsou vedle sebe verze IAPv4 a
          předchozí IAPv3; každá vrstva má vlastní svislou osu a všechny hodnoty jsou vztaženy k průměru let 1981–2010. {" "}
          <ReferenceLink href="https://doi.org/10.12157/IOCAS.20240117.001">Data IAPv4</ReferenceLink>.
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/ocean-heat-content/iapv4-ohc-depth-series.png"
            alt="Čtyři grafy časových řad tepelného obsahu oceánu pro vrstvy 0 až 700, 700 až 2000, 0 až 2000 a 2000 až 6000 metrů."
            width={2067}
            height={1705}
            unoptimized
          />
          <div className="article-figure__key">
            <p><strong>a) 0–700 m:</strong> horní vrstva; červeně IAPv4, černě IAPv3.</p>
            <p><strong>b) 700–2 000 m:</strong> střední vrstva; stejné barvy a časové vyhlazení.</p>
            <p><strong>c) 0–2 000 m:</strong> součet prvních dvou vrstev, hlavní globální řada článku.</p>
            <p><strong>d) 2 000–6 000 m:</strong> hluboká vrstva; modře dřívější odhad Purkey &amp; Johnson (2010).</p>
          </div>
          <figcaption>
            Globální řady OHC v IAPv4 a IAPv3. Tenké čáry jsou měsíční hodnoty, silné čáry dvanáctiměsíční klouzavé
            průměry a růžová plocha 95% interval nejistoty IAPv4. Osy ukazují zettajouly (ZJ); každá část má jiný rozsah
            svislé osy. Referenční období je 1981–2010. Cheng a kol., 2024, obr. 11; převzato beze změny pod licencí CC BY 4.0. {" "}
            <ReferenceLink href="https://doi.org/10.5194/essd-16-3517-2024">Zdroj a licence</ReferenceLink>.
          </figcaption>
        </figure>

        <h2>Srovnání řad</h2>
        <p>
          Srovnání nezávislých produktů je užitečné jen tehdy, když se nejprve sjednotí hloubka, oblast, období a nula osy.
          Následující graf proto převádí roční anomálie všech řad na vrstvu 0–2 000 m a na referenční období 2005–2019.
          Neměří stejnými vstupy ani stejnou metodou: některé produkty vycházejí hlavně z přímých profilů, jiné kombinují
          profily s dalšími pozorováními nebo rekonstrukcí. Čára, která nezačíná v roce 1955, vyjadřuje kratší dostupné
          období daného produktu.
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/ocean-heat-content/iapv4-ohc-products-comparison.png"
            alt="Srovnávací graf třinácti datových produktů globálního tepelného obsahu oceánu do hloubky 2000 metrů mezi lety 1955 a 2024."
            width={2067}
            height={1578}
            unoptimized
          />
          <div className="article-figure__key">
            <p><strong>IAPv4:</strong> červená čára; růžová plocha je jeho 90% interval nejistoty.</p>
            <p><strong>IAPv3:</strong> černá čára, předchozí verze téhož produktu.</p>
            <p><strong>Další přímé analýzy:</strong> NCEI, Ishii, PMEL, RFROM, JAMSTEC, KvS11, Bagnell, Scripps a BOA.</p>
            <p><strong>Další rekonstrukce:</strong> Zanna a OPEN; styl čáry v původním grafu rozlišuje přímé a nepřímé odhady.</p>
          </div>
          <figcaption>
            Roční anomálie OHC 0–2 000 m z více datových produktů. Hodnoty jsou v ZJ vůči průměru let 2005–2019; popisky
            barev jsou přímo součástí grafu. Cheng a kol., 2024, obr. 12, aktualizováno z Cheng a kol., 2022; převzato beze
            změny pod licencí CC BY 4.0. {" "}
            <ReferenceLink href="https://doi.org/10.5194/essd-16-3517-2024">Zdroj a licence</ReferenceLink>.
          </figcaption>
        </figure>

        <p>
          Graf neukazuje jednu křivku jako jediný správný výsledek. Ukazuje rozsah výsledků, který vzniká při různém výběru
          profilů, korekcí, prostorového doplnění a referenční klimatologie. Ve starší části řad je rozptyl mezi produkty
          širší; po rozšíření sítě Argo se řady překrývají v hustěji pozorovaném období. Studie o citlivosti OHC proto
          hodnotí metodu mapování, korekce XBT a základní klimatologii jako samostatné součásti výsledku. {" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI-D-15-0801.1">Boyer et al., 2016</ReferenceLink>.
        </p>

        <h2>Pozorování</h2>
        <p>
          V řadě IAPv4 pro vrstvu 0–2 000 m roste globální anomálie od druhé poloviny 20. století a v grafu dosahuje v roce
          2023 přibližně 280 ZJ vzhledem k průměru 1981–2010. Autoři pro období 1955–2023 uvádějí trend 6,4 ± 0,3 ZJ za rok
          pro tuto vrstvu; samostatně uvádějí 4,4 ± 0,2 ZJ za rok pro 0–700 m a 2,0 ± 0,1 ZJ za rok pro 700–2 000 m. Jde o
          výsledky konkrétní verze IAPv4, jejího referenčního období a zveřejněné metody trendu. {" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-16-3517-2024">Cheng et al., 2024</ReferenceLink>.
        </p>

        <p>
          Záznam po vrstvách rozlišuje časové vývoje v horní a střední části oceánu. V období 2005–2023 uvádí IAPv4 pro
          0–2 000 m průměrnou rychlost změny 10,7 ± 1,0 ZJ za rok a pro vrstvu 700–2 000 m 3,6 ± 0,5 ZJ za rok. Hluboká
          vrstva 2 000–6 000 m má výrazně kratší a řidší záznam; autoři ji proto zobrazují od počátku 90. let a s širším
          intervalem nejistoty. {" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-16-3517-2024">Cheng et al., 2024</ReferenceLink>.
        </p>

        <p>
          Nezávislé řady v porovnávacím grafu mají společný dlouhodobý vzestup 0–2 000 m, liší se však velikostí hodnot v
          jednotlivých letech a zejména starší částí záznamu. Při čtení takového výsledku patří k hodnotě vždy i název
          produktu, hloubkový interval, referenční období a interval nejistoty. Bez těchto čtyř údajů nelze dvě čísla OHC
          přesně porovnat.
        </p>

        <p>
          Nejnovější roční souhrny už doplňují graf IAPv4 končící rokem 2023. Článek Pan a kol. publikovaný v roce 2026
          vyhodnotil data do roku 2025 a uvádí pro horních 2 000 m další roční rekord v rámci své analýzy; NOAA/NCEI zároveň
          uvádí rekordní hodnotu své řady 0–700 m v roce 2025. Obě věty se vztahují k přesně vymezeným produktům a vrstvám,
          ne k přímému měření celé vodní masy oceánu až ke dnu. {" "}
          <ReferenceLink href="https://doi.org/10.1007/s00376-026-5876-0">Pan et al., 2026</ReferenceLink>{" "}
          a <ReferenceLink href="https://www.ncei.noaa.gov/news/global-climate-202513">NOAA/NCEI: souhrn roku 2025</ReferenceLink>.
        </p>

        <h2>Prameny a data</h2>
        <p>
          <strong>Primární a metodické práce:</strong> {" "}
          <ReferenceLink href="https://doi.org/10.1029/2012GL051106">Levitus et al., 2012</ReferenceLink>, {" "}
          <ReferenceLink href="https://doi.org/10.1038/nature09043">Lyman et al., 2010</ReferenceLink>, {" "}
          <ReferenceLink href="https://doi.org/10.1126/sciadv.1601545">Cheng et al., 2017</ReferenceLink>, {" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-16-3517-2024">Cheng et al., 2024</ReferenceLink>, {" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI-D-15-0801.1">Boyer et al., 2016</ReferenceLink>, {" "}
          <ReferenceLink href="https://doi.org/10.1029/2006GL027834">Gouretski &amp; Koltermann, 2007</ReferenceLink>, {" "}
          <ReferenceLink href="https://doi.org/10.1175/JTECH-D-13-00197.1">Cheng et al., 2014</ReferenceLink>{" "}
          a <ReferenceLink href="https://doi.org/10.1038/nclimate2872">Riser et al., 2016</ReferenceLink>.
        </p>
        <p>
          <strong>Datové portály:</strong> {" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/products/climate-data-records/global-ocean-heat-content">NOAA/NCEI Global Ocean Heat Content CDR</ReferenceLink>, {" "}
          <ReferenceLink href="https://doi.org/10.12157/IOCAS.20240117.001">IAPv4 Global Ocean Heat Content</ReferenceLink>, {" "}
          <ReferenceLink href="https://argo.ucsd.edu/data/argo-data-products/">Argo data products</ReferenceLink>{" "}
          a <ReferenceLink href="https://www.ncei.noaa.gov/products/world-ocean-database">World Ocean Database</ReferenceLink>.
        </p>
        <p>
          <strong>Obrázky a licence:</strong> fotografie plováku Argo pochází z NOAA PMEL a je materiálem vlády USA ve
          veřejné doméně. Všechny tři grafy jsou převzaty z Cheng a kol., 2024 pod licencí {" "}
          <ReferenceLink href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</ReferenceLink>.
        </p>
      </div>
    </article>
  );
}
