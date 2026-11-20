import { HypothesisStory } from "./HypothesisStory";
import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";
import { EnergyHypothesisDiagram } from "./EnergyHypothesisDiagram";
import styles from "./EarthEnergyBalanceArticle.module.css";

export function EarthEnergyBalanceArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2 id="co-vysvetlujeme">Kde přibývá energie</h2>
        <p className="article-prose__intro">
          Voda, vzduch i půda se dlouhodobě ohřívají a část získané energie se spotřebovává
          na tání ledu. Podle <Link href="/pozorovani/tepelny-obsah-oceanu/#souvislost-s-bilanci">součtu za celý klimatický systém</Link>
          {' '}přibylo za roky 1971–2020 celkem 381 ± 61 zettajoulů. Zettajoule je 10²¹ joulů
          a uvedené rozmezí představuje přibližně 95% interval spolehlivosti.
          Asi 89 % přírůstku připadlo na oceán.{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>
        </p>
        <p>
          Výměna tepla mezi vodou a vzduchem dokáže změnit jak{' '}
          <Link href="/pozorovani/tepelny-obsah-oceanu/#pozorovani">teplotu oceánu</Link>, tak{' '}
          <Link href="/pozorovani/gmst/#pozorovani">teplotu u povrchu Země</Link>.
          Při samotném přesunu se však přírůstek v jedné části vyrovná s úbytkem v jiné.
          Jak tedy vznikl přebytek energie v celé Zemi?
        </p>

        <h2 id="priciny">Tři hypotézy a jejich předpovědi</h2>
        <EnergyHypothesisDiagram />

        <h2 id="predpovedi">Jak vědci rozlišili možné příčiny</h2>
        <HypothesisStory id="slunecni-hypoteza" number={1} title="Silnější záření Slunce">
          <p>
            Slunce dodává Zemi většinu energie, která udržuje její klima. Už v roce 1801
            se William Herschel ptal, zda se množství světla a tepla vyzařovaného Sluncem
            mění a podle čeho by se to dalo poznat. Kdyby záření zesílilo a Země dál
            odrážela stejný podíl, více energie by pohltila.{' '}
            <SourceLink id="HERSCHEL_1801_SOLAR_VARIATION">(Herschel 1801, původní rukopis)</SourceLink>{' '}
            <SourceLink id="DOI_10_1029_2010GL045777">(Kopp a Leanová 2011)</SourceLink>
          </p>
          <p>
            Sluneční záření zahřívá různé části atmosféry dvěma cestami. Pevnina a voda
            pohltí část světla a předávají energii troposféře, nejnižší vrstvě atmosféry.
            Výše, ve stratosféře, pohlcuje ozon ultrafialové záření přímo. Kdyby příkon
            vzrostl s podobným zastoupením různých složek záření jako při slunečním cyklu,
            čekali bychom ohřev u povrchu i v horní stratosféře.{' '}
            <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA, energetická bilance Země)</SourceLink>{' '}
            <SourceLink id="DOI_10_1029_2008JD010114">(Rind a kol. 2008, oddíl 4.1.1)</SourceLink>
          </p>
          <figure id="slunecni-schema" className={`article-figure ${styles.explanatoryFigure}`}>
            <div className={styles.figureScroll} tabIndex={0} role="region"
              aria-label="Schéma slunečního ohřevu, na úzké obrazovce posuvné do stran">
              <a href="/media/energeticka-bilance-zeme/silnejsi-slunce.png"
                aria-label="Otevřít schéma slunečního ohřevu v plné velikosti">
                <Image className="article-figure__media"
                  src="/media/energeticka-bilance-zeme/silnejsi-slunce.png"
                  alt="Silnější Slunce dodává více energie už nad atmosférou. Ozon pohlcuje ultrafialové záření ve stratosféře, další záření ohřívá povrch a přes něj troposféru. Vpravo je očekávané oteplování povrchu, troposféry a horní stratosféry. Testujeme sluneční příkon a rozložení teplotních změn podle výšky."
                  width={1536} height={1024} unoptimized />
              </a>
            </div>
            <figcaption>
              Fialová ukazuje ultrafialové záření, žlutá další sluneční záření
              a červená přenos tepla. Modrá šipka představuje přenos energie
              vypařováním a kondenzací vody. Pravý panel ukazuje směr očekávané
              změny teploty, délky šipek nevyjadřují její velikost.
              Jde o vysvětlující schéma, nikoli naměřené hodnoty. Vlastní
              ilustrace Klimatologie.eu vytvořená pomocí AI, CC BY 4.0, podle{' '}
              <SourceLink id="DOI_10_1029_2008JD010114">Rinda a kol. (2008)</SourceLink>
              {' '}a <SourceLink id="DOI_10_1029_2010GL045777">Koppa a Leanové (2011)</SourceLink>.{' '}
              Na menší obrazovce lze schéma posouvat do stran.{' '}
              <a href="/media/energeticka-bilance-zeme/silnejsi-slunce.png">Otevřít v plné velikosti</a>.{' '}
              <a href="/media/energeticka-bilance-zeme/silnejsi-slunce.txt">Podklady a licence</a>.
            </figcaption>
          </figure>

          <h4 id="slunecni-prikon" className={styles.testHeading}>Přichází ze Slunce více energie?</h4>
          <p>
            Tmavé skvrny na Slunci září slaběji než okolí, zatímco jiné oblasti jsou
            jasnější. Výsledný příkon měříme přímo družicemi ještě před průchodem
            záření zemskou atmosférou. Souvislý záznam od roku 1978 zachytil přibližně
            jedenáctiletý cyklus. Mezi minimem a maximem tehdejších cyklů se měsíční
            průměry příkonu lišily asi o 0,12 %.{' '}
            <SourceLink id="DOI_10_1029_2010GL045777">(Kopp a Leanová 2011, oddíly 1–2 a obr. 1)</SourceLink>
          </p>
          <p>
            Jak velká teplotní odezva připadá na{' '}
            <Link href="/mechanismy/slunecni-promenlivost/#co-vysvetlujeme">sluneční cyklus</Link>?
            Leanová a Rind porovnali
            měsíční teploty z let 1889–2006 s průběhy slunečního záření, sopečné činnosti,
            kolísání Pacifiku a lidských vlivů. Hledali velikost a zpoždění jednotlivých
            odezev, jejichž součet by nejlépe odpovídal teplotnímu záznamu. Slunci v tomto
            výpočtu přisoudili změnu asi o 0,11 °C mezi minimem a maximem cyklu
            v třináctiměsíčních průměrech. Za období 1979–2005 ale vyšel dlouhodobý sluneční
            příspěvek blízký nule, −0,004 ± 0,004 °C za deset let.{' '}
            <SourceLink id="DOI_10_1029_2008GL034864">(Leanová a Rind 2008, oddíly 2–3 a tab. 1)</SourceLink>
          </p>
          <p>
            O příčině pozdějšího přírůstku energie vypovídají přímo toky záření.
            Loeb a kolegové odečetli od dopadajícího slunečního toku světlo
            odražené zpět do vesmíru. Zbytek Země pohltí. Od září 2002 do března 2020
            měl příchozí tok záporný trend −0,053 W/m² za deset let.{' '}
            <strong>Pohlcený tok přitom rostl</strong> o 0,65 ± 0,17 W/m²
            za deset let, s 90% intervalem spolehlivosti. Oba toky jsou přepočtené na
            plochu celé Země. Více energie se pohltilo díky poklesu odrazu, zatímco
            příkon měl směr opačný, než předpovídá hypotéza silnějšího Slunce.{' '}
            <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíl 3.2)</SourceLink>
          </p>

          <h4 id="slunecni-vyskovy-test" className={styles.testHeading}>Které vrstvy atmosféry se ohřívají?</h4>
          <p>
            Rind a kolegové porovnali výpočty pro silnější a slabší Slunce. V jednotlivých
            pokusech měnili, zda může reagovat teplota oceánského povrchu a množství ozonu.
            Tím rozlišili ohřev vzduchu od povrchu a přímý ohřev ve stratosféře.
            Při silnějším Slunci model vypočetl ohřev troposféry i horní stratosféry,
            s různou velikostí podle výšky, místa a roční doby.{' '}
            <SourceLink id="DOI_10_1029_2008JD010114">(Rind a kol. 2008, oddíly 2 a 4)</SourceLink>
          </p>
          <p>
            Steinerová a kolegové porovnali změny teplot v jednotlivých vrstvách.
            Vedle družicových záznamů využili například měření balónových sond a laserových
            přístrojů. Za roky 1979–2018 se troposféra v globálním průměru oteplila asi o 0,6–0,8 °C,
            zatímco stratosféra se ochladila přibližně o 1–3 °C. V horní stratosféře tedy
            měření ukázala opačný směr, než předpovídá samotný sluneční ohřev.{' '}
            <Link href="/pozorovani/stratosfericke-ochlazovani/#pozorovani">Záznamy z jednotlivých vrstev</Link>{' '}
            podrobněji ukazují, kde se změna odehrála.{' '}
            <SourceLink id="DOI_10_1175_jcli_d_19_0998_1">(Steinerová a kol. 2020)</SourceLink>
          </p>
          <p>
            Změny Slunce a sopečné erupce mohou krátkodobě měnit teplotu jednotlivých
            vrstev různě.{' '}
            <a href="#lidske-pusobeni-vyskovy-test">Santerovo porovnání</a> proto
            bere v úvahu i to, kde a jak silně se která vrstva otepluje nebo ochlazuje.{' '}
            <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013, obr. 1–4)</SourceLink>
          </p>
        </HypothesisStory>

        <HypothesisStory id="prirozena-hypoteza" number={2} title="Samotné přirozené kolísání">
          <p>
            Oceán a atmosféra si předávají energii a tím mění své teploty i při stejném
            slunečním příkonu a složení vzduchu. Jacob Bjerknes v roce 1969 navázal na
            dřívější vysvětlení teplé epizody v rovníkovém Pacifiku z let 1957–1958
            a porovnal ji s epizodami z let 1963–1964 a 1965–1966. Když zeslábnou pasáty,
            převládající větry od východu, slábne i výstup chladnější vody k hladině
            a povrch se otepluje. Teplejší voda pak mění, kde vzniká déšť a jak proudí
            vzduch. Tím může pasáty dále oslabit. Tento společný výkyv
            oceánu a atmosféry známe v teplé fázi jako El Niño.{' '}
            <SourceLink id="DOI_10_1175_BJERKNES_1969">(Bjerknes 1969, oddíly 2–4)</SourceLink>
          </p>
          <p>
            Při předávání tepla získá vzduch právě tolik energie, kolik jí voda odevzdá.
            Část přenosu zajišťuje odpar. Energie odebraná vodě se uvolní ve vzduchu,
            když pára zkondenzuje na kapičky. Součet energie vody a vzduchu se tímto
            přenosem nezmění.{' '}
            <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA, přenos energie mezi povrchem a atmosférou)</SourceLink>
          </p>
          <p>
            Kolísání ale může změnit také množství energie, které Zemi opouští.
            Změní-li se například oblaka, může planeta odrážet méně světla a více
            ho pohltit. Oblaka současně ovlivňují únik tepelného záření. Když se zmenší
            součet těchto dvou ztrát, v klimatickém systému skutečně přibude energie.
            Vedle přesunu tepla mezi vodou a vzduchem proto musíme ověřit i tuto možnost.{' '}
            <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA, příjem a výdej záření)</SourceLink>{' '}
            <SourceLink id="DOI_10_1017_9781009157896_005">(IPCC AR6, rámeček 3.1 a oddíl 3.7)</SourceLink>
          </p>
          <figure id="prirozene-kolisani-schema" className={`article-figure ${styles.explanatoryFigure}`}>
            <div className={styles.figureScroll} tabIndex={0} role="region"
              aria-label="Schéma přirozeného kolísání a obou testů, na úzké obrazovce posuvné do stran">
              <a href="/media/energeticka-bilance-zeme/prirozene-kolisani.png"
                aria-label="Otevřít schéma přirozeného kolísání a obou testů v plné velikosti">
                <Image className="article-figure__media"
                  src="/media/energeticka-bilance-zeme/prirozene-kolisani.png"
                  alt="Vlevo předání tepla z oceánu otepluje přijímající vzduch a ochlazuje odevzdávající vodu. Vpravo menší odraz světla a menší únik tepelného záření působí oteplujícím směrem, opačné změny ochlazujícím. Pod každým dějem následují předpověď, postup testu a výsledek. První test sčítá změny energie celé Země, druhý porovnává družicový trend energetického přebytku s modelovým rozsahem přirozeného kolísání."
                  width={1672} height={1960} unoptimized />
              </a>
            </div>
            <figcaption>
              Horní část vysvětluje dva děje, spodní jejich testy. Červené
              popisky označují oteplující účinek, modré ochlazující.
              Šipky jsou schematické. Graf vpravo dole porovnává změnu
              energetického přebytku ve W/m² za deset let. Jeho úsečky
              vyjadřují přibližně 95% rozsah modelového kolísání a přibližně
              95% rozsah chyby družicového měření.
              Vlastní grafika Klimatologie.eu, horní ilustrace vytvořená
              pomocí AI, CC BY 4.0. Podklady:{' '}
              <SourceLink id="WEB_NASA_Earth_Energy_Budget">NASA</SourceLink>,{' '}
              <SourceLink id="DOI_10_5194_essd_15_1675_2023">von Schuckmannová a kol. (2023)</SourceLink>
              {' '}a <SourceLink id="DOI_10_1038_s41467_021_24544_4">Raghuraman a kol. (2021)</SourceLink>.{' '}
              Na menší obrazovce lze obrázek posouvat do stran.{' '}
              <a href="/media/energeticka-bilance-zeme/prirozene-kolisani.png">Otevřít v plné velikosti</a>.{' '}
              <a href="/media/energeticka-bilance-zeme/prirozene-kolisani.csv" download>Číselné podklady</a>.{' '}
              <a href="/media/energeticka-bilance-zeme/prirozene-kolisani.txt">Podklady a licence</a>.
            </figcaption>
          </figure>

          <h4 id="prirozene-kolisani-inventura" className={styles.testHeading}>Stačí vysvětlení přesunem tepla?</h4>
          <p>
            Inventura v úvodu zkoumá, zda přírůstek v jedné části Země nevyvažují ztráty
            v jiné. Von Schuckmannová a kolegové z měřených změn teploty vody, vzduchu
            a půdy odvodili, kolik energie tyto složky získaly či ztratily. Připočetli
            i energii potřebnou k roztátí ledu. Za roky 1971–2020 vyšly kladně všechny
            čtyři složky a celkový přírůstek zůstal kladný i na spodní hranici
            intervalu spolehlivosti. Pouhý přesun už přítomného tepla takový součet
            nevytvoří.{' '}
            <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023, oddíly 2–6)</SourceLink>
          </p>
          <p>
            Přesouvání tepla přesto pomáhá vysvětlit{' '}
            <Link href="/pozorovani/gmst/#zpomaleni-2002-2012">zpomalení povrchového oteplování v letech 2002–2012</Link>.
            Kosaka a Xie použili dva modelové pokusy se stejným vývojem vnějších vlivů.
            V jednom se oceán vyvíjel volně. Ve druhém autoři řídili teplotu hladiny
            ve středním a východním rovníkovém Pacifiku podle měření. Tato oblast
            zabírala 8,2 % povrchu Země. Zkouška měla ukázat, zda model zachytí
            také pozorované změny mimo tuto oblast.{' '}
            <SourceLink id="DOI_10_1038_nature12534">(Kosaka a Xie 2013, uspořádání pokusů)</SourceLink>
          </p>
          <p>
            Se zadaným Pacifikem model zachytil zpomalení globálního povrchového
            oteplování i jeho výraznější projev v chladné části roku na severní
            polokouli. Obsah tepla v modelovém oceánu dál rostl. Kolísání v jedné
            oblasti tedy dokázalo na čas zpomalit růst povrchové teploty zároveň
            s tím, jak v oceánu přibývala energie.{' '}
            <SourceLink id="DOI_10_1038_nature12534">(Kosaka a Xie 2013, obr. 1 a rozšířený obr. 3)</SourceLink>
          </p>

          <h4 id="prirozene-kolisani-radiacni-test" className={styles.testHeading}>Může kolísání vysvětlit růst přebytku?</h4>
          <p>
            Když se vlivem kolísání mění oblačnost nebo teplota, mění se i energetický
            přebytek, tedy rozdíl mezi příjmem a výdejem záření. Raghuraman a kolegové
            se ptali, jak často tento děj vytvoří tak velký růst přebytku, jaký viděly
            družice od roku 2001 do roku 2020. Vzali 1 293 stejně dlouhých úseků ze
            47 modelů. V nich se oceán a atmosféra vyvíjely volně při stálých slunečních,
            sopečných a lidských vlivech. V každém úseku spočítali, jak rychle se měnil
            rozdíl příjmu a výdeje.{' '}
            <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, obr. 1–2)</SourceLink>
          </p>
          <p>
            V modelech se růsty a poklesy soustředily kolem nuly. Přibližně 95 % trendů
            se vešlo mezi −0,19 a +0,19 W/m² za deset let. Družicový trend byl{' '}
            <strong>+0,38 W/m² za deset let</strong>. I po zahrnutí nejistoty trendu
            způsobené chybami měření, přibližně ±0,20 W/m² za deset let na 95% úrovni,
            vyšel tak velký nárůst při samotném kolísání v tomto testu
            s pravděpodobností pod 1 %. Přirozené kolísání
            dokáže měnit i příjem energie celé Země, ale v tomto porovnání na
            naměřený růst přebytku nestačí.{' '}
            <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, obr. 2)</SourceLink>
          </p>
        </HypothesisStory>

        <HypothesisStory id="lidske-pusobeni" number={3} title="Změny způsobené lidskou činností">
          <p id="historie">
            Fourier už v roce 1827 vysvětloval, že atmosféra mění, jak snadno Země
            odevzdává teplo. Které složky vzduchu to způsobují, prověřil John Tyndall.
            V roce 1861 popsal, jak nechal tepelné záření projít trubicí nejprve
            bez plynu a potom s různými plyny. Dusík a kyslík propouštěly
            záření mnohem lépe než vodní pára a oxid uhličitý. Změna množství
            i méně zastoupeného plynu tak může ovlivnit, kolik záření vzduch propustí.{' '}
            <SourceLink id="1827_Fourier_Temperatures">(Fourier 1827)</SourceLink>{' '}
            <SourceLink id="1862_Tyndall">(Tyndall 1861, popis pokusu a závěr)</SourceLink>
          </p>
          <p>
            Arrhenius v roce 1896 počítal, jak by se s množstvím CO₂ měnila
            teplota v různých zeměpisných šířkách. Zahrnul přitom i vodní páru.
            Callendar v roce 1938 vztáhl tento účinek ke spalování paliv.
            Z údajů o spalování a o množství CO₂ v ovzduší odhadl účinek plynu
            na teplotu a porovnal jej s měřeními asi 200 stanic.
            Jeho výpočtu pro CO₂ vycházelo oteplení o 0,003 °C ročně, měřený
            růst teploty za předchozí půlstoletí tehdy odhadl na 0,005 °C ročně.
            Podle tehdejších podkladů tedy mohl přírůstek CO₂ vysvětlit značnou
            část naměřeného oteplování.{' '}
            <SourceLink id="1896_Arrhenius">(Arrhenius 1896)</SourceLink>{' '}
            <SourceLink id="1938_Callendar">(Callendar 1938)</SourceLink>
          </p>
          <p>
            Manabe a Wetherald v roce 1967 spojili výpočet záření s přenosem tepla
            vzhůru a s vlhkostí. V modelu drželi stálou relativní vlhkost,
            tedy podíl vodní páry vzhledem k nasycení vzduchu při dané teplotě.
            Když se vzduch ohřál, stejný podíl nasycení znamenal více páry.
            Ta zesilovala počáteční účinek CO₂. Při jeho zdvojnásobení vyšlo
            v tomto výpočtu oteplení povrchu přibližně o 2 °C.{' '}
            <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967)</SourceLink>
          </p>

          <h4 id="lidske-pusobeni-princip" className={styles.subheading}>Proč se povrch otepluje a stratosféra chladne</h4>
          <p>
            Když přibude CO₂ a povrch ani spodní atmosféra se zatím neohřejí,
            do vesmíru uniká méně tepelného záření. Při stejném slunečním příjmu
            se začne energie hromadit a ohřívá povrch a troposféru. Ve stratosféře
            naopak více CO₂ usnadňuje ztrátu energie zářením. Úbytek ozonu
            vyvolaný lidskou činností současně oslabil ohřev ultrafialovým zářením,
            především v dolní stratosféře. Povrch a vyšší
            atmosféra se tak mohou měnit opačným směrem.{' '}
            <SourceLink id="DOI_10_1016_S0065_2687_08_60171_5">(Manabe 1983, s. 45–47)</SourceLink>{' '}
            <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013)</SourceLink>
          </p>
          <figure id="lidske-pusobeni-schema" className={`article-figure ${styles.explanatoryFigure}`}>
            <div className={styles.figureScroll} tabIndex={0} role="region"
              aria-label="Schéma lidského působení a obou testů, na úzké obrazovce posuvné do stran">
              <a href="/media/energeticka-bilance-zeme/lidske-pusobeni.png"
                aria-label="Otevřít schéma lidského působení a obou testů v plné velikosti">
                <Image className="article-figure__media"
                  src="/media/energeticka-bilance-zeme/lidske-pusobeni.png"
                  alt="CO₂ pohlcuje a vyzařuje tepelné záření. Povrch a troposféra se oteplují, stratosféra se ochlazuje. První test porovnává záření v pásmech CO₂ na dvou stanicích v letech 2000–2010. Druhý porovnává výškové a zeměpisné rozložení družicových teplotních změn v letech 1979–2012 s modely lidského působení a přirozených vlivů. Oba testy oddělují předpověď, postup a výsledek."
                  width={1586} height={2037} unoptimized />
              </a>
            </div>
            <figcaption>
              Červenooranžové šipky ukazují tepelné záření, žlutá příchod
              slunečního záření. Modré popisky označují ochlazování.
              Přerušované linie u družice vyznačují pozorované vrstvy.
              Počet ani šířka šipek nejsou měřítkem toku energie.
              Dolní část odděluje <a href="#lidske-pusobeni-spektralni-test">test záření</a>
              {' '}a <a href="#lidske-pusobeni-vyskovy-test">test teplot</a>.
              Tabulka teplotních změn shrnuje jejich směr, nikoli velikost.
              Vlastní grafika Klimatologie.eu, horní ilustrace vytvořená
              pomocí AI, CC BY 4.0. Podklady:{' '}
              <SourceLink id="DOI_10_1016_S0065_2687_08_60171_5">Manabe (1983)</SourceLink>,{' '}
              <SourceLink id="DOI_10_1038_nature14240">Feldman a kol. (2015)</SourceLink>,{' '}
              <SourceLink id="DOI_10_1073_pnas_1305332110">Santer a kol. (2013)</SourceLink>
              {' '}a <SourceLink id="DOI_10_1017_9781009157896_009">IPCC AR6, kapitola 7</SourceLink>.{' '}
              Na menší obrazovce lze obrázek posouvat do stran.{' '}
              <a href="/media/energeticka-bilance-zeme/lidske-pusobeni.png">Otevřít v plné velikosti</a>.{' '}
              <a href="/media/energeticka-bilance-zeme/lidske-pusobeni.csv" download>Číselné podklady</a>.{' '}
              <a href="/media/energeticka-bilance-zeme/lidske-pusobeni.txt">Podklady a licence</a>.
            </figcaption>
          </figure>

          <h4 id="lidske-pusobeni-spektralni-test" className={styles.testHeading}>Zesílilo záření v pásmech CO₂?</h4>
          <p>
            CO₂ pohlcuje a vyzařuje v určitých pásmech vlnových délek. Podobně jako
            podle vlnové délky rozlišíme barvy viditelného světla, můžeme rozlišit
            i části neviditelného infračerveného záření. S přibývajícím CO₂ má záření
            z atmosféry k povrchu zesílit právě v jeho pásmech.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015)</SourceLink>
          </p>
          <p>
            Feldman a kolegové porovnali bezoblačná měření z Oklahomy a severu
            Aljašky s výpočtem, který používal měřené teploty a vlhkost i údaje
            o dalších plynech. CO₂ v něm drželi na výchozí koncentraci. Rozdíl ukázal,
            která část naměřené změny
            v tomto výpočtu chybí. Když vědci započítali i skutečný růst CO₂,
            model zachytil zesílení záření v očekávaných pásmech.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, obr. 2)</SourceLink>
          </p>
          <p>
            V letech 2000–2010 vzrostlo zastoupení CO₂ o 22 miliontin. Z porovnání
            vyšel na obou místech příspěvek tohoto nárůstu k záření k povrchu
            přibližně 0,20 W/m² za deset let, s publikovanými nejistotami ±0,06 v Oklahomě
            a ±0,07 na Aljašce ve stejných jednotkách. Shoda v konkrétních pásmech
            ukazuje, že přibývající CO₂ měnil záření už za sledovanou dekádu.
            Podklady rozebírá <Link href="/pozorovani/atmosfericka-koncentrace-co2/#zmena-infracerveneho-zareni">pozorování CO₂ a infračerveného záření</Link>.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, obr. 2 a 4)</SourceLink>
          </p>

          <h4 id="lidske-pusobeni-vyskovy-test" className={styles.testHeading}>Odpovídají teploty atmosféry lidskému působení?</h4>
          <p>
            U dvou stanic se podařilo přímo sledovat změny záření. Jinou zkoušku
            nabízí <a href="#slunecni-vyskovy-test">rozložení teplot v atmosféře</a>.
            Santer a kolegové porovnali dva způsoby zpracování družicových měření
            z let 1979–2012 s modely. V dolní troposféře, ve střední až horní
            troposféře a v dolní stratosféře zkoumali, jak silně se teplota
            mění v různých zeměpisných šířkách. Pro stejné vrstvy a šířky měli
            výpočty zahrnující lidské působení a výpočty pouze se změnami
            Slunce, sopečnou činností a vnitřním kolísáním.{' '}
            <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013, data a obr. 1–4)</SourceLink>
          </p>
          <p>
            Oteplování troposféry a ochlazování dolní stratosféry mělo v obou
            zpracováních družicových měření podobné zeměpisné rozložení jako ve výpočtech
            s lidskými vlivy. Při samotných přirozených vlivech tento dlouhodobý
            obraz nevznikal ani v testech s většími změnami Slunce a sopečné činnosti,
            než jaké nastaly za dobu měření. Rozhodoval společný obraz změn v různých
            výškách a zeměpisných šířkách.{' '}
            <Link href="/pozorovani/stratosfericke-ochlazovani/#vyskovy-obraz">Pozorování výškových změn teploty</Link>{' '}
            ukazuje naměřené rozdíly mezi vrstvami.{' '}
            <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013, obr. 3–4 a závěr)</SourceLink>
          </p>

          <h4 className={styles.subheading}>Co prozrazuje hloubka oceánského ohřevu</h4>
          <p>
            V oceánu, kde se ukládá nejvíc energie, se nabízí obdobné porovnání.
            Barnett a kolegové v roce 2005 použili měření od roku 1960. V Atlantiku
            zasahoval ohřev do hloubky nejméně 700 metrů. V severním Pacifiku
            se soustředil hlavně do horních 100 metrů.{' '}
            <Link href="/pozorovani/tepelny-obsah-oceanu/#hloubkovy-obraz">Rozdílná hloubka ohřevu</Link>{' '}
            pomáhá rozlišit příčiny přesněji než jediný globální průměr.{' '}
            <SourceLink id="DOI_10_1126_science_1112418">(Barnett a kol. 2005, obr. 1)</SourceLink>
          </p>
          <p>
            Autoři porovnali sílu a rozložení naměřeného ohřevu s výpočty dvou modelů.
            Při stálých vnějších vlivech bylo samotné kolísání oproti měření slabé.
            Pozorovaný ohřev nevysvětlilo ani započtení změn Slunce a sopečné činnosti.
            Po zahrnutí lidských vlivů oba modely zachytily jeho podstatné rysy.
            Tento test prověřil příčinu ohřevu přímo v prostředí, kam připadá
            většina přibývající energie.{' '}
            <SourceLink id="DOI_10_1126_science_1112418">(Barnett a kol. 2005, obr. 2–3)</SourceLink>
          </p>
          <p>
            Souhrn studií umožnil posoudit i velikost lidského příspěvku.
            Podle IPCC byl lidský vliv s pravděpodobností 95–100 % hlavní příčinou
            růstu obsahu tepla v oceánu od 70. let 20. století. Hlavní příčinou
            se zde rozumí příspěvek větší než polovina změny.{' '}
            <SourceLink id="DOI_10_1017_9781009157896_005">(IPCC AR6, shrnutí a oddíl 3.5.1)</SourceLink>
          </p>
        </HypothesisStory>

        <h2 id="vysvetleni">Jak se přebytek energie ukládá v oceánu</h2>
        <p>
          V období družicových měření se zvýšilo pohlcování slunečního záření,
          přestože ho ze Slunce přicházelo mírně méně. Samotné přirozené kolísání
          zase v testech jen výjimečně vedlo k tak rychlému růstu přebytku.
          Hlavní příčinu ukazuje souhra měření záření a teplot v atmosféře
          i v oceánu. Lidská činnost mění složení atmosféry a s ním i to,
          kolik energie může planeta při stejné teplotě odevzdat zářením.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021)</SourceLink>{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021)</SourceLink>{' '}
          <SourceLink id="DOI_10_1017_9781009157896_005">(IPCC AR6, kapitola 3)</SourceLink>
        </p>

        <h3 id="toky-energie">Co Země přijímá a co odevzdává</h3>
        <p>
          Energetická bilance porovnává záření, které přechází pomyslnou hranici
          nad atmosférou. Dovnitř vstupuje sluneční světlo. Zpět do vesmíru
          se vrací jeho odražená část a Země tam současně vysílá vlastní tepelné
          záření. Po odečtení obou odcházejících toků zbude čistý příjem.
          Jeho hodnota určuje, jak rychle se celková zásoba energie mění.
          Při kladném rozdílu roste, při záporném klesá a při nulovém se nemění.{' '}
          <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/energeticka-bilance-zeme/toky-energie.svg"
            alt="Sluneční záření přichází k Zemi. Část se odráží zpět do vesmíru a část Země pohltí. Tepelné záření odnáší energii do vesmíru. Přebytek pohlcené energie zůstává v klimatickém systému."
            width={760} height={620} />
          <figcaption>
            Žluté šipky označují sluneční záření, červená tepelné záření.
            Rámeček zahrnuje povrch i atmosféru. Šířky šipek nevyjadřují
            velikost toků. Vlastní kresba podle vymezení bilance v{' '}
            <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">Loeb a kol. (2018)</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Na metr čtvereční zemského povrchu připadá v průměru asi 340 wattů
          dopadajícího slunečního záření. Kolem 100 wattů Země odráží
          a 240 pohltí. Průměr zahrnuje i noční stranu. Proti těmto velkým
          tokům je rozdíl příjmu a výdeje malý, v současnosti řádově jeden
          watt na metr čtvereční. I takový rozdíl se však den za dnem sčítá
          v zásobě energie.{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA, energetická bilance Země)</SourceLink>{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>
        </p>

        <h3>Jak CO₂ mění výdej energie</h3>
        <p>
          Část tepelného záření projde od povrchu přímo do vesmíru. Další část
          pohltí skleníkové plyny a oblaka. Ty pak samy vyzařují všemi směry,
          takže do vesmíru přichází záření také z vrstev atmosféry.
          Výdej celé planety proto závisí i na tom, které vrstvy přispívají
          a jakou mají teplotu.{' '}
          <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967)</SourceLink>{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA, přirozený skleníkový efekt)</SourceLink>
        </p>
        <p>
          Když přibude CO₂, záření z nižších vrstev na cestě vzhůru častěji
          narazí na plyn, který je pohltí. V částech spektra, odkud do vesmíru
          vyzařuje hlavně troposféra, tak vzroste příspěvek vyšších vrstev.
          Ty bývají chladnější a vyzařují slaběji. V těchto pásmech proto uniká
          méně záření. Když při původních teplotách sečteme změny napříč spektrem,
          celkový výdej tepelného záření klesne. Jak se účinek liší v jednotlivých pásmech,
          objasňuje <Link href="/mechanismy/radiacni-pusobeni-sklenikovych-plynu/">výklad přenosu tepelného záření při růstu CO₂</Link>.{' '}
          <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967)</SourceLink>
        </p>

        <h3 id="nerovnovaha-a-teplota">Proč se nejvíc energie ukládá v oceánu</h3>
        <p>
          Když výdej klesne a Země dál přijímá stejné množství energie, část,
          kterou dřív vyzářila do vesmíru, v systému zůstane. Ohřívá vodu, půdu
          a vzduch. Pohlcuje ji také tající led. Při tání na vodu se energie
          ukládá ve změně skupenství i při stejné teplotě.{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics, oddíly 1.5 a 3.3)</SourceLink>
        </p>
        <p>
          Ohřát kilogram vody o jeden stupeň vyžaduje přibližně čtyři tisíce joulů.
          Teplo přijaté u hladiny navíc proudění a promíchávání přenášejí
          hlouběji. I malá změna teploty v tak velké hmotnosti vody proto představuje
          velké množství uložené energie. To vysvětluje, proč v bilanci z úvodu
          převládá přírůstek v oceánu.{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics, oddíl 1.5)</SourceLink>{' '}
          <SourceLink id="DOI_10_5194_essd_16_3517_2024">(Cheng a kol. 2024)</SourceLink>
        </p>

        <h3>Proč oteplování zvyšuje výdej</h3>
        <p>
          S rostoucí teplotou roste výkon tepelného záření. V laboratoři Rubens
          a Kurlbaum měřili, jak zahřívané těleso září při dlouhých vlnových délkách.
          Jejich měření odpovídala Planckovu vztahu, zatímco dřívější Wienův
          vztah se v této části spektra od výsledků odchyloval. Celkový výkon
          ideálního černého tělesa, které pohltí všechno dopadající záření, udává
          Stefanův–Boltzmannův zákon.{' '}
          <SourceLink id="DOI_10_1086_140874">(Rubens a Kurlbaum 1901, obr. 2 a 3)</SourceLink>{' '}
          <SourceLink id="DOI_10_1002_andp_19013090310">(Planck 1901)</SourceLink>
        </p>
        <Equation tex={String.raw`F = \sigma T^4`} />
        <p>
          V rovnici je <InlineMath tex="F" /> výkon z metru čtverečního v W/m² a{' '}
          <InlineMath tex="T" /> teplota v kelvinech, tedy teplota ve stupních Celsia
          zvýšená o 273,15. Konstanta <InlineMath tex="\sigma" /> je přibližně{' '}
          <InlineMath tex={String.raw`5{,}67\times10^{-8}\,\mathrm{W\,m^{-2}\,K^{-4}}`} />.
          Čtvrtá mocnina vyjadřuje, že další stupeň ohřevu zvýší výkon více
          u teplejšího tělesa.{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics, oddíl 1.6)</SourceLink>
        </p>
        <p>
          U Země musíme sečíst záření povrchu i jednotlivých vrstev atmosféry
          a započítat, kolik ho cestou k vesmíru pohltí vrstvy nad nimi.
          Pokud se povrch a troposféra stejnoměrně ohřejí o jeden stupeň
          a ostatní vlastnosti se nezmění, výdej vzroste asi o 3,1–3,2 W/m².
          Této reakci říkáme Planckova odezva. Při stejném příjmu vyšší výdej
          zmenšuje přebytek a zpomaluje další ohřev. Při ustáleném složení atmosféry
          a stejném příjmu se může bilance vyrovnat při vyšší teplotě.{' '}
          <SourceLink id="DOI_10_1175_2007JCLI2110_1">(Soden a kol. 2008)</SourceLink>
        </p>
        <p>
          Oteplení může současně zvýšit příjem energie. Když ustoupí sníh nebo led,
          odkrytý tmavší povrch pohltí více slunečního záření. Počáteční oteplení tak
          vyvolá změnu, která ho sama zesílí. Takovému vztahu říkáme zpětná vazba.
          Změny množství vodní páry a oblačnosti také působí zpět na bilanci,
          každá jiným způsobem.{' '}
          <SourceLink id="DOI_10_1175_2007JCLI2110_1">(Soden a kol. 2008)</SourceLink>
        </p>
        <p>
          Složení atmosféry se mění i přímo lidskou činností. Vedle skleníkových
          plynů přibývají nebo ubývají <Link href="/mechanismy/prumyslove-aerosoly-a-oblaka/">aerosoly</Link>,
          drobné částice a kapičky rozptýlené ve vzduchu. Mění množství odraženého
          světla i vlastnosti oblaků a v souhrnu tlumí část oteplení vyvolaného
          skleníkovými plyny.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíl 7.3)</SourceLink>
        </p>
        <p>
          Země může více vyzařovat a přitom získávat energii stále rychleji.
          Od září 2002 do března 2020 rostlo pohlcené sluneční záření rychleji
          než výdej tepelného záření. Přebytek se proto zvětšoval. Podle výpočtu
          Loeba a kolegů účinky změn plynů, vodní páry, oblaků a odrazivosti
          v tomto období v součtu převážily nad přímým zvýšením výdeje teplejší Země.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíl 3.2)</SourceLink>
        </p>

        <h3 id="vypocet-bilance">Kolik energie odpovídá malému přebytku?</h3>
        <p>
          Označme dopadající sluneční tok <InlineMath tex="S" />, odražený tok{' '}
          <InlineMath tex="R" /> a odcházející tepelné záření <InlineMath tex="L" />.
          Všechny toky vyjádříme ve W/m² na plochu celé Země.
          Po odečtení obou odcházejících toků získáme čistý příjem <InlineMath tex="N" />.
        </p>
        <Equation tex="N = S - R - L" />
        <p>
          Jeden watt je jeden joule za sekundu. Proto průměrný čistý příjem ve W/m²
          násobíme plochou Země a počtem sekund ve sledované době. Na ploše asi
          510 milionů km² by přebytek 1 W/m² za rok dodal přibližně 16,1 zettajoulu.
          Autoři inventury vyjádřili přírůstek za roky 1971–2020 jako
          průměrný čistý příjem 0,48 ± 0,10 W/m².
          I několik desetin wattu na metr čtvereční tedy za půlstoletí stačí
          na pozorovaný přírůstek energie.{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics, oddíl 3.3)</SourceLink>{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>
        </p>

        <h3 id="porovnani">Zrychlil se příjem i ukládání energie?</h3>
        <p>
          Jestliže Země získává energii stále rychleji, mělo by se také
          zrychlovat její ukládání. Loeb a kolegové porovnali{' '}
          <Link href="/pozorovani/tepelny-obsah-oceanu/#porovnani-se-zarenim">změnu příjmu ze záření se změnou ukládání tepla v oceánu</Link>.{' '}
          <Link href="/metody/mereni-radiacnich-toku/#druzicova-bilance">Družicová měření CERES</Link>{' '}
          sledují odražené světlo a tepelné záření unikající do vesmíru.
          Oceánské sondy měří teplotu v různých hloubkách. Z jejího vývoje
          autoři vypočítali rychlost ukládání energie v horních 2 000 metrech.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíl 3.1)</SourceLink>
        </p>
        <p>
          Od poloviny roku 2005 do poloviny roku 2019 rostl družicový čistý
          příjem o 0,50 ± 0,47 W/m² za deset let. Rychlost ukládání energie
          v oceánu rostla o 0,43 ± 0,40 W/m² za deset let. Obě čísla jsou vztažená
          k ploše celé Země. V grafu bod označuje odhad, úsečka jeho 90% interval
          spolehlivosti. Intervaly se překrývají a obě měření ukazují zrychlení.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíl 3.1 a obr. 1)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/energeticka-bilance-zeme/porovnani-trendu.svg"
            alt="Růst toku za deset let od poloviny roku 2005 do poloviny roku 2019. Oceán 0 až 2 000 metrů: 0,43 plus minus 0,40 W/m². Družice CERES: 0,50 plus minus 0,47 W/m². Zobrazeny 90procentní intervaly."
            width={760} height={500} />
          <figcaption>
            Vodorovná osa ukazuje růst toku za deset let, nikoli teplotu
            nebo celkovou zásobu energie. Vlastní graf podle{' '}
            <SourceLink id="DOI_10_1029_2021GL093047">Loeba a kol. (2021), oddíl 3.1</SourceLink>.
            Odhady a intervaly převzaté beze změny.{' '}
            <a href="/media/energeticka-bilance-zeme/porovnani-trendu.csv" download>Hodnoty grafu</a>.
          </figcaption>
        </figure>
        <p>
          Průměrný čistý příjem v družicovém produktu CERES EBAF je nastavený
          podle inventury energie. Porovnání proto zkoumá, jak se údaje mění
          v čase. Průběh kolísání ani trend družicového záznamu totiž autoři
          oceánským měřením nepřizpůsobili. Shoda obou trendů ukazuje, že se
          rostoucí přebytek záření projevil i v rychlejším přibývání tepla
          pod hladinou.{' '}
          <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018, kalibrace EBAF)</SourceLink>{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíl 3.1)</SourceLink>
        </p>

        <h3 id="nejistoty">Co se v bilanci ještě zpřesňuje</h3>
        <p>
          Největší prostor ke zpřesnění zbývá v tom, kolik k bilanci přispěly
          jednotlivé plyny, aerosoly, změny oblačnosti a přirozené kolísání.
          Jejich podíly ovlivňují hlavně výklad změn v jednotlivých desetiletích
          a odhad toho, jak rychle se oceán bude dál ohřívat.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_005">(IPCC AR6, oddíly 3.5.1 a 3.8)</SourceLink>{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, diskuse)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Podrobnosti nejistot a dalších testů</summary>
          <p>
            Nejméně měření máme z velkých hloubek a polárních oblastí oceánu.
            Některé odhady navíc vycházejí ze stejných teplotních profilů.
            U družic záleží na tom, zda přístroje měří po desetiletí stejně.
            Trvalý rozpor mezi měřenou změnou zásoby energie a jejím čistým
            příjmem by ukázal na problém v některém z těchto odhadů.{' '}
            <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>{' '}
            <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018)</SourceLink>
          </p>
          <p>
            Odhad slunečního příspěvku od Leanové a Rinda závisí na tom, jak dobře
            vstupní záznamy vystihují každý vliv a zda se jejich teplotní odezvy
            dají přibližně sčítat. Uvedená statistická nejistota popisuje výsledek
            pro zvolené vstupy. Chyby ve vstupních záznamech by odhad mohly
            dále posunout.{' '}
            <SourceLink id="DOI_10_1029_2008GL034864">(Leanová a Rind 2008, oddíly 2–4)</SourceLink>
          </p>
          <p>
            Modely v Santerově testu většinou ukázaly větší ohřev troposféry
            a menší ochlazení dolní stratosféry než měření. Odpovídalo rozložení
            změn mezi vrstvami a zeměpisnými šířkami. Jejich přesnou velikost
            modely zachytily hůř.{' '}
            <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013, diskuse)</SourceLink>
          </p>
          <p>
            Celkový 95% interval družicového trendu v práci Raghuramana a kolegů
            je 0,38 ± 0,24 W/m² za deset let. V něm je zahrnuta chyba měření
            i nejistota trendu v kolísavém záznamu. V testu příčin se používá
            ±0,20 pro samotnou chybu měření, protože kolísání dodávají už modely.{' '}
            <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, obr. 1–2)</SourceLink>
          </p>
          <p>
            Odhad pravděpodobnosti v tomto testu závisí na tom, jak velké
            přirozené výkyvy modely vytvářejí. Ty s měnícími se vnějšími vlivy
            často vypočítaly menší růst přebytku, než činil střední odhad
            z družic. Kdyby modely ověřené na delších měřeních běžně vytvářely
            tak velký růst i při stálých vnějších vlivech, oslabilo by to závěr
            tohoto testu.{' '}
            <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, diskuse)</SourceLink>
          </p>
          <p>
            Feldmanův test se vztahuje k záření k povrchu za jasné oblohy.
            Vyčíslení příspěvku CO₂ závisí na výpočtu přenosu záření. Bilance
            celé planety se určuje z jiných měření, zahrnuje i oblaka
            a sleduje toky na horní hranici atmosféry.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, metody)</SourceLink>
          </p>
          <p>
            Loebův rozklad družicových změn na účinky teploty, vody, oblaků
            a plynů využívá model přenosu záření. Součet vypočtených toků
            je přizpůsobený skutečným měřením. Jednotlivé příspěvky jsou
            tedy výsledkem výpočtu.{' '}
            <SourceLink id="DATA_CERES_PRP_2021">Data k rozkladu</SourceLink>{' '}
            umožňují postup zkontrolovat.{' '}
            <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíly 2 a 3.2)</SourceLink>
          </p>
        </details>

        <h2 id="shrnuti">Shrnutí mechanismu</h2>
        <div className="method-conclusion">
          <p>
            Hlavní příčinou dlouhodobého přibývání energie je lidský vliv na složení atmosféry.
            Více skleníkových plynů znamená, že při stejné teplotě uniká do vesmíru
            méně tepelného záření. Země pak pohltí víc energie, než vyzáří,
            a většina přebytku se ukládá v oceánu. Oteplování postupně zesiluje
            tepelné vyzařování. Dokud Země pohltí víc, než vyzáří, zásoba dál roste.
          </p>
          <p>
            Toto vysvětlení spojuje nárůst záření v pásmech CO₂ s rozložením
            ohřevu v atmosféře a oceánu. Družice a oceánské sondy zachytily
            slučitelné zrychlování příjmu a ukládání tepla. Přirozené kolísání
            dál ovlivňuje, kde a jak rychle se v jednotlivých obdobích mění{' '}
            <Link href="/pozorovani/tepelny-obsah-oceanu/#souvislost-s-bilanci">zásoby energie v klimatickém systému</Link>.
          </p>
        </div>

        <h2 id="prameny">Prameny, data a obrázky</h2>
        <p>
          Plné texty jsou dostupné bez předplatného přes karty zdrojů.
          Historické prameny dokládají vývoj vysvětlení, moderní studie
          poskytují jeho číselné testy. Grafy používají zveřejněné souhrnné
          odhady, jejichž původní intervaly zachovávají.
        </p>
        <div className="article-source-groups">
          <section>
            <h3>Fyzikální základ a historie</h3>
            <ul>
              <li><SourceLink id="HERSCHEL_1801_SOLAR_VARIATION">Herschel 1801</SourceLink>: otázka proměnlivého vyzařování Slunce, původní rukopis v archivu Královské společnosti.</li>
              <li><SourceLink id="1827_Fourier_Temperatures">Fourier 1827</SourceLink>: původní práce o teplotách Země, sken Francouzské akademie věd.</li>
              <li><SourceLink id="1862_Tyndall">Tyndall 1861</SourceLink>: laboratorní porovnání pohlcování tepelného záření různými plyny.</li>
              <li><SourceLink id="DOI_10_1086_140874">Rubens a Kurlbaum 1901</SourceLink> a <SourceLink id="DOI_10_1002_andp_19013090310">Planck 1901</SourceLink>: laboratorní měření a zákon tepelného záření.</li>
              <li><SourceLink id="1896_Arrhenius">Arrhenius 1896</SourceLink>: raný výpočet vlivu množství CO₂ na teplotu.</li>
              <li><SourceLink id="1938_Callendar">Callendar 1938</SourceLink>: propojení spalování paliv, růstu CO₂ a teplotních měření.</li>
              <li><SourceLink id="1967_Manabe_Wetherald">Manabe a Wetherald 1967</SourceLink>: výpočet teplotní odezvy atmosféry.</li>
              <li><SourceLink id="DOI_10_1016_S0065_2687_08_60171_5">Manabe 1983</SourceLink>: fyzikální vysvětlení oteplování povrchu a troposféry a ochlazování stratosféry, s. 45–47.</li>
              <li><SourceLink id="DOI_10_1175_BJERKNES_1969">Bjerknes 1969</SourceLink>: vzájemné působení rovníkového Pacifiku a atmosféry při teplých epizodách.</li>
              <li><SourceLink id="2016_OpenStax_University_Physics_2">University Physics, svazek 2</SourceLink>: otevřená učebnice, oddíly 1.5, 1.6 a 3.3.</li>
              <li><SourceLink id="DOI_10_1175_2007JCLI2110_1">Soden a kol. 2008</SourceLink>: oddělení teplotní odezvy a zpětných vazeb.</li>
              <li><SourceLink id="WEB_NASA_Earth_Energy_Budget">NASA: Climate and Earth’s Energy Budget</SourceLink>: vymezení globálních toků a jejich velikosti.</li>
            </ul>
          </section>
          <section>
            <h3>Měření a porovnání vysvětlení</h3>
            <ul>
              <li><SourceLink id="DOI_10_1029_2010GL045777">Kopp a Leanová 2011</SourceLink>: družicový záznam slunečního příkonu a jeho proměnlivost.</li>
              <li><SourceLink id="DOI_10_1029_2008GL034864">Leanová a Rind 2008</SourceLink>: oddělení slunečního cyklu a dlouhodobého trendu při současném porovnání dalších vlivů.</li>
              <li><SourceLink id="DOI_10_1029_2008JD010114">Rind a kol. 2008</SourceLink>: modelové oddělení slunečního ohřevu přes povrch a přes stratosféru, podklad vysvětlujícího obrázku.</li>
              <li><SourceLink id="DOI_10_1175_jcli_d_19_0998_1">Steinerová a kol. 2020</SourceLink>: porovnání pozorovaných teplotních změn od troposféry po horní stratosféru za roky 1979–2018.</li>
              <li><SourceLink id="DOI_10_1126_science_1112418">Barnett a kol. 2005</SourceLink>: rozložení ohřevu v oceánu a porovnání přirozených a lidských vlivů.</li>
              <li><SourceLink id="DOI_10_1038_nature12534">Kosaka a Xie 2013</SourceLink>: modelový pokus s předepsaným vývojem rovníkového Pacifiku a zpomalením povrchového oteplování.</li>
              <li><SourceLink id="DOI_10_1073_pnas_1305332110">Santer a kol. 2013</SourceLink>: test výškového a zeměpisného rozložení změn teploty atmosféry.</li>
              <li><SourceLink id="DOI_10_1038_nature14240">Feldman a kol. 2015</SourceLink>: test příspěvku rostoucího CO₂ k záření na povrch, dvě stanice v letech 2000–2010.</li>
              <li><SourceLink id="DOI_10_5194_essd_16_3517_2024">Cheng a kol. 2024</SourceLink>: vývoj obsahu tepla v oceánu v letech 1955–2023.</li>
              <li><SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">Loeb a kol. 2018</SourceLink>: dokumentace produktu CERES EBAF a jeho kalibrace.</li>
              <li><SourceLink id="DOI_10_1029_2021GL093047">Loeb a kol. 2021</SourceLink>: porovnání družic a oceánských měření, oddíl 3.1 a obr. 1.</li>
              <li><SourceLink id="DOI_10_5194_essd_15_1675_2023">Von Schuckmannová a kol. 2023</SourceLink>: inventura energie, oddíl 6 a obr. 8.</li>
              <li><SourceLink id="DOI_10_1038_s41467_021_24544_4">Raghuraman a kol. 2021</SourceLink>: test vnitřní proměnlivosti a vnějšího působení. Oddíly Data availability a Code availability odkazují na veřejná data a výpočetní kód.</li>
              <li><SourceLink id="DOI_10_1017_9781009157896_005">IPCC AR6, kapitola 3</SourceLink>: souhrnné odborné posouzení lidského vlivu, zejména oddíl 3.5.1 o oceánu.</li>
              <li><SourceLink id="DOI_10_1017_9781009157896_009">IPCC AR6, kapitola 7</SourceLink>: ukládání energie v klimatickém systému a souhrn radiačních účinků plynů a aerosolů, oddíly 7.2 a 7.3.</li>
            </ul>
          </section>
          <section>
            <h3>Veřejná data a podklady grafů</h3>
            <ul>
              <li><SourceLink id="DATA_GCOS_EHI_1960_2020">Inventura energie GCOS 1960–2020</SourceLink>: data k součtům jednotlivých prostředí, licence CC BY 4.0.</li>
              <li><SourceLink id="DATA_CERES_PRP_2021">Data CERES k rozkladu radiačních změn</SourceLink>: příspěvky z analýzy Loeba a kolegů za září 2002 až březen 2020.</li>
              <li><a href="/media/energeticka-bilance-zeme/porovnani-trendu.csv" download>Hodnoty porovnávacího grafu</a> a <a href="/media/energeticka-bilance-zeme/README.txt">popis podkladů</a>. Přepis publikovaných souhrnných odhadů, nikoli nové zpracování jednotlivých měření.</li>
              <li><a href="/media/energeticka-bilance-zeme/generate_figures.py" download>Skript pro vytvoření grafu a schématu</a>. Vlastní grafika Klimatologie.eu, CC BY 4.0. Číselný podklad: Loeb a kol. 2021, CC BY 4.0.</li>
              <li><a href="/media/energeticka-bilance-zeme/silnejsi-slunce.png">Schéma slunečního ohřevu</a> a <a href="/media/energeticka-bilance-zeme/silnejsi-slunce.txt">jeho podklady a licence</a>. Vlastní ilustrace vytvořená pomocí AI, CC BY 4.0. Teplotní šipky vyjadřují očekávaný směr změny.</li>
              <li><a href="/media/energeticka-bilance-zeme/prirozene-kolisani.svg">Schéma přirozeného kolísání s oběma testy</a>, <a href="/media/energeticka-bilance-zeme/prirozene-kolisani.csv" download>jeho číselné podklady</a> a <a href="/media/energeticka-bilance-zeme/prirozene-kolisani.txt">popis a licence</a>. Vlastní grafika, CC BY 4.0. Ilustrační část vytvořená pomocí AI, číselná část podle von Schuckmannové a kol. (2023) a Raghuramana a kol. (2021).</li>
              <li><a href="/media/energeticka-bilance-zeme/lidske-pusobeni.svg">Schéma lidského působení s oběma testy</a>, <a href="/media/energeticka-bilance-zeme/lidske-pusobeni.csv" download>jeho číselné podklady</a> a <a href="/media/energeticka-bilance-zeme/lidske-pusobeni.txt">popis a licence</a>. Vlastní grafika, CC BY 4.0. Horní ilustrace vytvořená pomocí AI. Číselné výsledky podle Feldmana a kol. (2015), kvalitativní porovnání teplotních změn podle Santera a kol. (2013).</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
