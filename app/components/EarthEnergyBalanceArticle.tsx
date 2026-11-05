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
        <h2 id="co-vysvetlujeme">Jak si vysvětlujeme přibývání energie v Zemi</h2>
        <p className="article-prose__intro">
          V oceánu, pevnině, atmosféře a tajícím ledu přibývá energie.
          Za roky 1971–2020 činil její celkový přírůstek podle globální inventury
          381 ± 61 zettajoulů, s přibližně 95% intervalem spolehlivosti.
          Zettajoule odpovídá 10²¹ joulům. Asi 89 % tohoto přírůstku připadlo
          na oceán. Měření a výpočty rozebírá{' '}
          <Link href="/pozorovani/tepelny-obsah-oceanu/#souvislost-s-bilanci">pozorování celkového přírůstku energie</Link>.{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>
        </p>
        <p>
          Proč energie přibývá? Projdeme tři vysvětlení: silnější Slunce,
          přirozené kolísání oceánu a atmosféry a změny vyvolané lidskou činností.
          Jejich příběhy začínají v různých dobách a postupně se setkávají
          při vysvětlování dnešního ohřevu. Rozhodovat budou předpovědi,
          které lze porovnat s měřením. Dnes přijímané vysvětlení musí objasnit
          dlouhodobý <Link href="/pozorovani/tepelny-obsah-oceanu/#pozorovani">ohřev oceánu</Link>
          {' '}i související <Link href="/pozorovani/gmst/#pozorovani">růst teploty u povrchu</Link>.
        </p>

        <h2 id="priciny">Tři hypotézy a jejich předpovědi</h2>
        <EnergyHypothesisDiagram />

        <h2 id="predpovedi">Jak se vysvětlení zkoumala</h2>
        <h3 id="slunecni-hypoteza" className={styles.hypothesisHeading}>
          <span className={styles.hypothesisLabel}>Hypotéza 1</span>{' '}
          Silnější záření Slunce
        </h3>
        <p>
          Slunce dodává Zemi převážnou většinu energie, která udržuje její
          klima. Možnost, že se tento přísun mění, proto patřila k přirozeným
          otázkám při hledání příčin klimatických změn. William Herschel
          předložil Královské společnosti v roce 1801 práci, v níž zkoumal
          příčiny a známky proměnlivého vyzařování světla a tepla ze Slunce.
          Šlo o otázku proměnlivého zdroje energie, položenou dlouho před
          vznikem dnešního globálního záznamu oteplování.{' '}
          <SourceLink id="HERSCHEL_1801_SOLAR_VARIATION">(Herschel 1801, původní rukopis)</SourceLink>{' '}
          <SourceLink id="DOI_10_1029_2010GL045777">(Kopp a Leanová 2011)</SourceLink>
        </p>
        <p>
          Silnější sluneční záření by při stejné odrazivosti dodávalo více
          energie povrchu i atmosféře. Pohlcené záření ohřívá pevninu a vodu.
          Povrch pak předává energii spodní vrstvě atmosféry, troposféře,
          tepelným zářením a stoupáním teplého vzduchu. Další část energie
          odnáší vypařující se voda. Když vodní pára výše kondenzuje na
          kapičky, tato energie se uvolní a ohřívá okolní vzduch.{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: energetická bilance Země)</SourceLink>
        </p>
        <p>
          Sluneční záření ohřívá také vrstvu nad troposférou, stratosféru.
          Zde ozon pohlcuje ultrafialové záření, neviditelnou část slunečního
          světla. Při jeho zesílení se v této vrstvě ukládá více energie.
          Sluneční změna tak může ohřívat spodní atmosféru prostřednictvím
          povrchu a současně horní stratosféru prostřednictvím ozonu.{' '}
          <SourceLink id="DOI_10_1029_2008JD010114">(Rind a kol. 2008, úvod a oddíl 4.1.1)</SourceLink>
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

        <h4 id="slunecni-prikon" className={styles.testHeading}>První test měří příkon ze Slunce</h4>
        <p>
          Pro tuto hypotézu je podstatné, kolik energie ze Slunce opravdu
          přichází. Pozorování jeho povrchu poskytuje jen nepřímé vodítko.
          Tmavé sluneční skvrny místně vyzařování snižují, zatímco jasnější
          oblasti je zvyšují. Jejich účinky se skládají. Samotný počet skvrn
          proto ještě neříká, o kolik se změnil příkon pro Zemi.{' '}
          <SourceLink id="DOI_10_1029_2010GL045777">(Kopp a Leanová 2011, oddíl 1)</SourceLink>
        </p>
        <p>
          Družicový přístroj míří na Slunce a měří záření před jeho
          průchodem atmosférou. Změny mraků nebo CO₂ pod družicí proto
          jeho měření slunečního příkonu nezvyšují.{' '}
          <SourceLink id="DOI_10_1029_2010GL045777">(Kopp a Leanová 2011, oddíl 2)</SourceLink>
        </p>
        <p>
          Souvislá družicová měření slunečního příkonu začala v roce 1978.
          Zachytila skutečné změny, včetně přibližně jedenáctiletého cyklu.
          Kopp a Leanová v rozboru z roku 2011 uvádějí mezi minimy a maximy
          tehdejších cyklů rozdíl přibližně 0,12 % v měsíčních průměrech.
          Proměnlivost Slunce se tím stala měřeným vstupem do výpočtů klimatu.
          Zbývalo zjistit, zda její dlouhodobý průběh odpovídá pozemskému ohřevu.{' '}
          <SourceLink id="DOI_10_1029_2010GL045777">(Kopp a Leanová 2011, obr. 1)</SourceLink>
        </p>
        <p>
          Jak velkou část oteplování lze Slunci přisoudit, zkoumali Leanová
          a Rind v roce 2008. Porovnali měsíční teploty z let 1889–2006
          s průběhem slunečního záření, sopečné činnosti, kolísání Pacifiku
          a lidských vlivů. Každý z těchto vlivů se měnil jinak a v jinou
          dobu. Autoři hledali takové velikosti jejich příspěvků a zpoždění
          teplotní odezvy, aby jejich součet co nejlépe odpovídal měřeným
          teplotám. Předpokládali přitom, že se jednotlivé odezvy dají
          přibližně sčítat.{' '}
          <SourceLink id="DOI_10_1029_2008GL034864">(Leanová a Rind 2008, oddíl 2)</SourceLink>
        </p>
        <p>
          Ve výsledku se sluneční cyklus projevil: mezi jeho minimem
          a maximem vycházela ve třináctiměsíčních průměrech změna globální
          teploty asi o 0,11 °C. Dlouhodobý příspěvek byl jiný.
          Pro roky 1979–2005 autoři odhadli sluneční trend
          −0,004 ± 0,004 °C za deset let. Uvedená statistická nejistota
          výpočtu nezahrnuje všechny chyby vstupních záznamů.
          Slunce v tomto rozboru vysvětlovalo malé opakované výkyvy,
          ale tehdejší růst teploty mu připsat nešlo.{' '}
          <SourceLink id="DOI_10_1029_2008GL034864">(Leanová a Rind 2008, oddíl 3 a tab. 1)</SourceLink>
        </p>
        <p>
          Rozlišení cyklu a trendu je podstatné. Měřitelná odezva
          na sluneční cyklus sama neurčuje, čím je způsoben dlouhodobý
          růst teploty. Statistické rozdělení teplot
          mezi vlivy navíc můžeme prověřit jiným způsobem: sledovat přímo
          přicházející energii.{' '}
          <SourceLink id="DOI_10_1029_2008GL034864">(Leanová a Rind 2008, oddíl 4)</SourceLink>
        </p>
        <p>
          Hypotéza silnějšího Slunce má pro energii jednoduchou předpověď:
          více pohlcené energie má následovat po růstu slunečního příkonu.
          Musíme proto odděleně sledovat záření, které přichází, a část,
          kterou Země odráží. Při stejném Slunci může planeta získávat více
          energie také tím, že méně odráží. To už by vyžadovalo změnu vlastností
          Země, například oblaků nebo povrchu.{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: energetická bilance Země)</SourceLink>
        </p>
        <p>
          Takové porovnání provedli Loeb a kolegové pro září 2002 až březen 2020.
          Přenos energie vyjádřili ve wattech na metr čtvereční, W/m²,
          zprůměrovaných přes plochu celé Země. Jeden watt znamená jeden joule
          za sekundu. Dopadající sluneční tok měl mírně záporný trend,
          −0,053 W/m² za deset let. Pohlcený sluneční tok přitom rostl
          o 0,65 ± 0,17 W/m² za deset let, s 90% intervalem spolehlivosti.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíl 3.2)</SourceLink>
        </p>
        <p>
          Směr změny se tedy obrátil proti předpovědi: sluneční energie
          přicházelo nepatrně méně, ale Země jí pohlcovala více.
          Růst příkonu ze Slunce je jako vysvětlení tohoto výsledku vyvrácen.
          Více energie zůstávalo díky poklesu odražené části. Tím se otázka
          přesunula k oblakům, částicím v atmosféře a vlastnostem povrchu.
          Jednotlivé naměřené toky uvádí{' '}
          <Link href="/pozorovani/tepelny-obsah-oceanu/#porovnani-se-zarenim">pozorování záření a oceánského ohřevu</Link>.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021)</SourceLink>
        </p>

        <h4 id="slunecni-vyskovy-test" className={styles.testHeading}>Druhý test porovnává oteplování v různých výškách</h4>
        <p>
          Další předpověď vychází z míst, kde se sluneční energie pohlcuje.
          Samotné zesílení Slunce s obvyklou změnou jeho spektra, tedy
          zastoupení různých druhů záření, má ohřívat povrch a troposféru
          i horní stratosféru. Neznamená to rovnoměrný ohřev celé atmosféry.
          Velikost odezvy se mění s výškou, polohou a roční dobou.{' '}
          <SourceLink id="DOI_10_1029_2008JD010114">(Rind a kol. 2008)</SourceLink>
        </p>
        <p>
          Tuto odezvu zkoumali Rind a kolegové v roce 2008. Porovnávali
          výpočty pro období silnějšího a slabšího Slunce a měnili, zda
          dovolí reagovat teplotě oceánského povrchu a množství ozonu.
          Tak oddělovali působení přes povrch od působení přes stratosféru.
          Výpočty zachycovaly oteplování troposféry i výrazný ohřev horní
          stratosféry. Vznikla tím konkrétní předpověď rozložení změny,
          kterou lze porovnat s měřením.{' '}
          <SourceLink id="DOI_10_1029_2008JD010114">(Rind a kol. 2008, oddíly 2 a 4)</SourceLink>
        </p>
        <p>
          Měřený dlouhodobý vývoj má jiný tvar. Steinerová a kolegové
          porovnali družice s dalšími měřeními atmosféry. Za roky
          1979–2018 zjistili v globálním průměru oteplení troposféry
          přibližně o 0,6–0,8 °C, zatímco stratosféra se ochladila
          přibližně o 1–3 °C. Horní stratosféra se tedy měnila opačným
          směrem, než očekáváme od samotného zesílení Slunce.
          Průběh, rozdíly mezi vrstvami a podklady ukazuje{' '}
          <Link href="/pozorovani/stratosfericke-ochlazovani/#pozorovani">pozorování stratosférického ochlazování</Link>.{' '}
          <SourceLink id="DOI_10_1175_jcli_d_19_0998_1">(Steinerová a kol. 2020)</SourceLink>
        </p>
        <p>
          Přísnější test porovnává celý obraz změny s více možnými příčinami.
          Santer a kolegové v roce 2013 použili dvě zpracování družicových
          teplot za roky 1979–2012. Sledovali tři široké vrstvy od spodní
          troposféry po dolní stratosféru a jejich změny od jihu k severu.
          S měřením porovnali modelové výpočty s lidskými vlivy i výpočty
          s přirozeným kolísáním, změnami Slunce a sopečnou činností.
          Tím prověřovali také jiné procesy, které mohou dočasně změnit
          teplotu horních a dolních vrstev opačnými směry.{' '}
          <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013, obr. 1 až 4)</SourceLink>
        </p>
        <p>
          Pozorovaný souběh dlouhodobého oteplování troposféry a ochlazování
          dolní stratosféry, včetně jeho zeměpisného rozložení, se v obou
          družicových zpracováních shodoval s obrazem lidského působení.
          Samotné přirozené vlivy jej v testovaných modelech nevysvětlily,
          ani když autoři připustili větší kolísání Slunce a sopečné činnosti,
          než jaké nastalo za dobu družicových měření. Rozhodoval tedy
          společný průběh a rozložení změn, nejen dvě opačná znaménka.{' '}
          <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013, výsledky a závěr)</SourceLink>
        </p>
        <p>
          Obě kontroly se doplňují. První zjišťuje, zda přibylo energie
          přicházející ze Slunce. Druhá zjišťuje, zda se atmosféra mění tak,
          jak by takový zdroj ohřevu vyžadoval. Sluneční cyklus skutečně
          ovlivňuje klima, ale silnější Slunce v uvedených obdobích
          nevysvětluje pozorovaný dlouhodobý ohřev a rozložení teplotních změn.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021)</SourceLink>{' '}
          <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013)</SourceLink>
        </p>

        <h3 id="prirozena-hypoteza" className={styles.hypothesisHeading}>
          <span className={styles.hypothesisLabel}>Hypotéza 2</span>{' '}
          Samotné přirozené kolísání
        </h3>
        <p>
          Oceán a atmosféra mohou měnit své chování i bez změny Slunce nebo
          složení vzduchu. Významný krok k pochopení této možnosti udělal
          Jacob Bjerknes. V roce 1969 porovnal teplé epizody v rovníkovém
          Tichém oceánu z let 1957–1958, 1963–1964 a 1965–1966.
          Navázal přitom na své vysvětlení první epizody z roku 1966.
          Opakované souvislosti mezi teplotou vody a prouděním vzduchu mu
          umožnily prověřit, zda dříve navržený děj funguje také v dalších letech.{' '}
          <SourceLink id="DOI_10_1175_BJERKNES_1969">(Bjerknes 1969)</SourceLink>
        </p>
        <p>
          Při zeslábnutí pasátů, převládajících východních větrů v tropech,
          slábne výstup chladnější vody k hladině. Střední a východní
          rovníkový Pacifik se může oteplit. Teplejší hladina pak mění
          předávání tepla a vlhkosti vzduchu, tvorbu dešťových oblaků
          i proudění v atmosféře. Voda a vzduch se tak vzájemně ovlivňují.
          Bjerknes vysvětloval pozorované epizody, které dnes spojujeme s El Niño,
          teplou fází tohoto kolísání.{' '}
          <SourceLink id="DOI_10_1175_BJERKNES_1969">(Bjerknes 1969, oddíly 2 až 4)</SourceLink>
        </p>
        <p>
          Tato zkušenost dala otázce příčin oteplování důležitý rozměr:
          jak velkou změnu může vytvořit samotné kolísání systému?
          Oceán a atmosféra si mohou přerozdělovat už přítomnou energii.
          Změny teploty a oblačnosti však ovlivňují také výměnu energie
          s vesmírem. Tyto dvě cesty je potřeba vysvětlit a ověřit zvlášť.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_005">(IPCC AR6, rámeček 3.1 a oddíl 3.7)</SourceLink>
        </p>
        <p>
          Při první cestě oceán předává teplo vzduchu. Vzduch tím získává
          energii a otepluje se, zatímco voda, která ji odevzdává, se tímto
          přenosem ochlazuje. Část energie z vody odnáší odpar a uvolní ji
          v atmosféře, když vodní pára zkondenzuje na kapičky. Skutečná
          změna teploty vody závisí na součtu všech přísunů a ztrát.
          Pokud současně pohltí dostatek slunečního záření, může se
          oteplovat i při předávání tepla vzduchu.{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: přenos energie mezi povrchem a atmosférou)</SourceLink>
        </p>
        <p>
          Při druhé cestě se mění, kolik energie zůstává v celé Zemi.
          Jestliže při stejném slunečním příkonu méně světla odrazí,
          více ho pohltí. To má oteplující účinek. Stejný směr účinku má
          menší odchod tepelného záření do vesmíru. Větší odraz nebo
          větší únik tepelného záření naopak působí ochlazujícím směrem.
          Oblaky ovlivňují oba odcházející toky, a proto musíme sledovat
          jejich společný účinek.{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: příjem a výdej záření)</SourceLink>
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

        <h4 id="prirozene-kolisani-inventura" className={styles.testHeading}>První test sčítá změny energie celé Země</h4>
        <p>
          Pokud by pozorovaný ohřev vznikal pouze přesunem tepla,
          přírůstek energie jedné části by musel vyvažovat úbytek jiné.
          Test proto sčítá změny energie oceánu, atmosféry, pevniny a ledu.
          Změřené změny teploty vody, vzduchu a půdy převedeme na změny
          jejich obsahu energie. U ledu započteme také energii potřebnou
          k tání. Při pouhém přesunu by se přírůstky a úbytky v celkovém
          součtu vyrušily.{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023, oddíly 2 až 6)</SourceLink>
        </p>
        <p>
          Globální inventura však za roky 1971–2020 dává kladný součet
          381 ± 61 zettajoulů, s přibližně 95% intervalem nejistoty.
          Vedle oceánu získaly energii také pevnina, atmosféra a tající
          led. V celé Zemi tedy energie přibyla a samotné přemisťování
          tepla tento přírůstek nevysvětluje. Měření jednotlivých složek
          shrnuje{' '}
          <Link href="/pozorovani/tepelny-obsah-oceanu/#souvislost-s-bilanci">pozorování přírůstku energie v klimatickém systému</Link>.{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>
        </p>
        <p>
          Další kontrola sleduje, kde a v jakých hloubkách se oceán ohřívá.
          Takové porovnání zveřejnili Barnett a kolegové v roce 2005
          pro změny od roku 1960.
          Oceány se lišily. V Atlantiku zasahoval zjištěný ohřev do hloubek
          700 metrů a více, zatímco v severním Pacifiku se soustředil hlavně
          do horních 100 metrů. Takové rozdíly poskytují více informací
          než jediný průměr za celý oceán. Tyto{' '}
          <Link href="/pozorovani/tepelny-obsah-oceanu/#hloubkovy-obraz">rozdíly v rozložení ohřevu</Link>
          {' '}doplňují celkovou bilanci.{' '}
          <SourceLink id="DOI_10_1126_science_1112418">(Barnett a kol. 2005, obr. 1)</SourceLink>
        </p>
        <p>
          Pro oddělení příčin použili autoři klimatické modely.
          Ty počítají vývoj oceánu a atmosféry podle fyzikálních vztahů
          pro proudění a přenos energie. Ve výpočtu lze ponechat Slunce
          a složení atmosféry beze změny, nebo zadat jejich historický vývoj.
          Porovnáním těchto pokusů zjistíme, co přidání určitého vlivu změní.{' '}
          <SourceLink id="DOI_10_1126_science_1112418">(Barnett a kol. 2005)</SourceLink>
        </p>
        <p>
          Autoři hledali stejný prostorový a hloubkový obraz v dlouhém
          modelovém výpočtu bez měnících se vnějších vlivů. Vznikající
          kolísání bylo proti pozorování příliš slabé. Nepomohly ani výpočty
          zahrnující tehdejší změny Slunce a sopečné činnosti.
          Při zahrnutí lidských vlivů naopak dva různé modely zachytily
          podstatné rysy ohřevu. Rozhodoval soulad jeho velikosti a rozložení.
          Výsledek je testem příčin měřeného ohřevu, nikoli popřením existence
          oceánského kolísání.{' '}
          <SourceLink id="DOI_10_1126_science_1112418">(Barnett a kol. 2005, obr. 2 a 3)</SourceLink>
        </p>
        <p>
          Jinou otázku přineslo dočasné zpomalení oteplování u povrchu
          na začátku 21. století.
          Kosaka a Xie se v roce 2013 ptali, zda je dokáže vysvětlit
          chladnější rovníkový Pacifik. Pozorovaný průběh shrnuje{' '}
          <Link href="/pozorovani/gmst/#zpomaleni-2002-2012">porovnání sezónních teplot v letech 2002–2012</Link>.
          Pokud zpomalení vzniklo v této oblasti, mělo by zadání její
          skutečné teploty do modelu vyvolat odpovídající odezvu i jinde.{' '}
          <SourceLink id="DOI_10_1038_nature12534">(Kosaka a Xie 2013)</SourceLink>
        </p>
        <p>
          Autoři připravili dva pokusy se stejnými změnami složení
          atmosféry a slunečního záření. V jednom nechali oceán vyvíjet
          volně. Ve druhém předepsali naměřený průběh teploty hladiny
          ve středním a východním rovníkovém Pacifiku, na 8,2 % povrchu Země.
          Zbytek oceánu a atmosféra se dál vyvíjely podle modelových
          fyzikálních vztahů. Testovali tedy, co změna této jedné oblasti
          udělá s širším klimatem. Teplota zadané oblasti byla vstupem,
          ověřovaným výsledkem byla odezva mimo ni.{' '}
          <SourceLink id="DOI_10_1038_nature12534">(Kosaka a Xie 2013, uspořádání pokusů)</SourceLink>
        </p>
        <p>
          Pokus se zadaným Pacifikem zachytil zpomalení růstu globální
          povrchové teploty i jeho silnější projev v chladné části roku
          severní polokoule.
          Obsah tepla v modelovém oceánu přitom dál rostl.
          Studie tak ukázala konkrétní úlohu přirozeného kolísání:
          dokáže na čas přibrzdit oteplování vzduchu u povrchu,
          zatímco klimatický systém dál získává energii. Oba děje
          se mohou odehrávat současně.{' '}
          <SourceLink id="DOI_10_1038_nature12534">(Kosaka a Xie 2013, obr. 1 a rozšířený obr. 3)</SourceLink>
        </p>
        <h4 id="prirozene-kolisani-radiacni-test" className={styles.testHeading}>Druhý test porovnává změny příjmu a výdeje energie</h4>
        <p>
          Přirozené změny oblačnosti a teploty mohou měnit také výměnu
          energie s vesmírem. Druhý test proto zjišťuje, zda tento děj
          stačí na naměřený vývoj energetického přebytku. Přebytek je
          rozdíl mezi příchozím slunečním zářením a součtem odraženého
          světla a odcházejícího tepelného záření. Z družic sledujeme
          jednotlivé toky a počítáme, jak se jejich rozdíl mění v čase.{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, úvod a obr. 1)</SourceLink>
        </p>
        <p>
          Má-li celý pozorovaný růst vysvětlit samotné přirozené kolísání,
          musí být slučitelný s velikostí a trváním změn, které tento
          proces dokáže vytvořit.
          Raghuraman a kolegové v roce 2021 porovnali družicový trend
          z let 2001–2020 s přirozeným kolísáním ve 47 klimatických modelech.
          V dlouhých výpočtech se oceán a atmosféra vyvíjely volně,
          zatímco sluneční, sopečné a lidské vlivy zůstávaly stálé.
          Získali tak 1 293 dvacetiletých úseků, na kterých zkoumali,
          jak velký trend vytvoří samotné kolísání a jeho vliv na záření.{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021)</SourceLink>
        </p>
        <p>
          Bez změny vnějších vlivů modely vytvářely růsty i poklesy
          bilance soustředěné kolem nuly. Přibližně 95 % přirozeného
          kolísání dvacetiletých trendů pokrývalo pásmo
          ±0,19 W/m² za deset let. To je číselná předpověď této varianty
          hypotézy. Velký růst může vzniknout i náhodou, ale čím dál leží
          od obvyklého rozsahu, tím méně pravděpodobně. Chybu družicového
          měření autoři zahrnuli do testu zvlášť.{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, obr. 2a)</SourceLink>
        </p>
        <p>
          Družicový růst energetického přebytku činil
          0,38 W/m² za deset let. Autoři mu v tomto porovnání přisoudili
          nejistotu měření ±0,20 W/m² za deset let, odpovídající přibližně
          95% rozsahu předpokládaných chyb přístrojů.
          Při použitých odhadech přirozeného kolísání a chyby měření vyšla
          pravděpodobnost takového výsledku bez měnícího se vnějšího působení
          pod 1 %. Tento test doplňuje starší oceánská porovnání o další
          období a veličinu. Samotné přirozené kolísání jako úplné vysvětlení
          neobstálo, jeho vliv na jednotlivá desetiletí a rozmístění tepla zůstává.{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, obr. 2)</SourceLink>
        </p>

        <h3 id="lidske-pusobeni" className={styles.hypothesisHeading}>
          <span className={styles.hypothesisLabel}>Hypotéza 3</span>{' '}
          Změny způsobené lidskou činností
        </h3>
        <p id="historie">
          Příběh tohoto vysvětlení začal otázkou, jak atmosféra ovlivňuje
          teplotu Země. Fourier v práci vydané roku 1827 rozebíral rozdíl
          mezi příchodem slunečního záření a odchodem tepla ze Země.
          Vzdušný obal podle něj měnil podmínky, za kterých povrch energii
          odevzdává. K vysvětlení změn klimatu bylo potřeba zjistit,
          které složky vzduchu mají tento účinek a jak jej jejich množství mění.{' '}
          <SourceLink id="1827_Fourier_Temperatures">(Fourier 1827)</SourceLink>
        </p>
        <p>
          John Tyndall v práci z roku 1861 popsal pokusy, při kterých
          nechával tepelné záření procházet trubicí naplněnou různými plyny.
          Porovnával, kolik záření projde prázdnou trubicí a kolik po vpuštění
          plynu. Dusík a kyslík je propouštěly mnohem lépe než vodní pára
          nebo oxid uhličitý. Tím ukázal, že i vedlejší složka vzduchu může
          výrazně ovlivnit přenos tepelného záření. Z výsledků také odvodil,
          že proměny těchto složek mohou měnit klima.{' '}
          <SourceLink id="1862_Tyndall">(Tyndall 1861, popis pokusu a závěr)</SourceLink>
        </p>
        <p>
          Svante Arrhenius v roce 1896 převedl tuto možnost na výpočet.
          Zkoumal, jak by při různém množství CO₂ vycházela teplota povrchu,
          a zapojil také vodní páru a rozdíly mezi zeměpisnými šířkami.
          Původní otázka se týkala vysvětlení velkých změn klimatu v minulosti.
          Významným posunem bylo, že z vlastností plynů odvozoval číselný
          účinek na teplotu. Vysvětlení tak začalo určovat také velikost změny,
          kterou je třeba hledat v přírodě.{' '}
          <SourceLink id="1896_Arrhenius">(Arrhenius 1896)</SourceLink>
        </p>
        <p>
          Guy Stewart Callendar v roce 1938 obrátil pozornost ke spalování
          paliv. Spojil odhady přidaného CO₂, údaje o jeho množství ve vzduchu
          a teplotní záznamy přibližně 200 stanic. Vypočítal tehdejší příspěvek
          CO₂ k oteplování asi 0,003 °C ročně a porovnal jej s odhadovaným
          růstem teploty asi 0,005 °C ročně za předchozí půlstoletí.
          Předložil tak konkrétní hypotézu, že člověk už mění teplotu planety.
          Tato čísla patří k jeho historickému výpočtu a tehdejším podkladům.{' '}
          <SourceLink id="1938_Callendar">(Callendar 1938)</SourceLink>
        </p>
        <p>
          Výpočet se postupně rozšiřoval o děje, které určují teplotu celé
          atmosféry. Manabe a Wetherald v roce 1967 spojili přenos záření
          s vertikálním přenosem tepla a s vlhkostí. Pro zdvojnásobení CO₂
          při zachované relativní vlhkosti dostali oteplení povrchu
          přibližně o 2 °C. Relativní vlhkost vyjadřuje, jak blízko je
          vzduch nasycení vodní párou. Tento předpoklad dovoloval množství
          páry s oteplením růst, a tím zesilovat počáteční účinek CO₂.{' '}
          <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967)</SourceLink>
        </p>
        <h4 id="lidske-pusobeni-princip" className={styles.subheading}>Proč se povrch otepluje a stratosféra chladne</h4>
        <p>
          CO₂ pohlcuje část tepelného záření a sám vyzařuje do různých
          směrů. Jeho přibývání proto mění průchod záření atmosférou
          i vyzařování jednotlivých vrstev. Při původní teplotě povrchu
          a spodní atmosféry vychází celkový odchod energie do vesmíru
          menší. Pokud Slunce dodává stejně jako předtím, příjem převýší
          výdej. Přebytek ohřívá povrch a troposféru. Oteplování postupně
          zesiluje vyzařování, takže při stálém složení atmosféry může
          vzniknout nová rovnováha při vyšší teplotě.{' '}
          <SourceLink id="DOI_10_1016_S0065_2687_08_60171_5">(Manabe 1983, s. 45–47)</SourceLink>
        </p>
        <p>
          Stratosféra má vlastní příjem a výdej energie. CO₂ jí pomáhá
          energii vyzařovat. Když ho přibude, při původní teplotě se
          zesílí její ztráta energie zářením a vrstva chladne. Současně
          ji ohřívá ozon, který pohlcuje sluneční ultrafialové záření.
          Lidskou činností vyvolaný úbytek ozonu tento ohřev oslabil,
          což významně přispělo k ochlazování dolní stratosféry.
          Odlišné změny teploty dole a nahoře tedy vyplývají z toho,
          jak se v každé vrstvě změní příjem a výdej.{' '}
          <SourceLink id="DOI_10_1016_S0065_2687_08_60171_5">(Manabe 1983, s. 47)</SourceLink>{' '}
          <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013)</SourceLink>
        </p>
        <p>
          Obrázek spojuje tento děj se dvěma testy. První hledá přímo
          změnu záření způsobenou CO₂. Druhý ověřuje, zda rozložení
          teplotních změn odpovídá společnému lidskému působení.
          V obou případech nejprve potřebujeme určit předpověď,
          potom provést porovnání s měřením.
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

        <h4 id="lidske-pusobeni-spektralni-test" className={styles.testHeading}>První test hledá účinek CO₂ v záření k povrchu</h4>
        <p>
          Plyny pohlcují záření v určitých pásmech vlnových délek.
          Vlnová délka rozlišuje jednotlivé druhy záření podobně, jako ve
          viditelném světle rozlišuje barvy. Účinek rostoucího CO₂ proto
          má zesílit záření k povrchu v charakteristických infračervených
          pásmech, která jsou pro oko neviditelná. Takto určený vzorec
          umožňuje odlišit jeho působení od změn teploty a vlhkosti.{' '}
          <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015)</SourceLink>
        </p>
        <p>
          Feldman a kolegové v roce 2015 použili měření z Oklahomy
          a severu Aljašky. Záření k povrchu porovnali s výpočtem,
          v němž teplota a vlhkost odpovídaly měření, ale CO₂ zůstával
          na výchozí koncentraci. Přidali údaje o dalších plynech.
          Rozdíl mezi měřením a tímto výpočtem ukázal, co přineslo
          přibývání CO₂. Samostatný výpočet s rostoucím CO₂ pak ověřil,
          zda změna odpovídá očekávaným pásmům.{' '}
          <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, obr. 2)</SourceLink>
        </p>
        <p>
          V bezoblačném záznamu z let 2000–2010 předpověď obstála.
          Nárůstu koncentrace CO₂ o 22 miliontin odpovídal na obou místech
          přírůstek tohoto příspěvku k toku k povrchu 0,20 W/m² za deset let.
          Publikovaná nejistota trendu činila ±0,06 v Oklahomě a ±0,07 na Aljašce
          ve stejných jednotkách. Změna v pásmech CO₂ tak doložila působení
          tohoto plynu na záření dopadající na povrch.
          Měření a jeho zpracování rozebírá{' '}
          <Link href="/pozorovani/atmosfericka-koncentrace-co2/#zmena-infracerveneho-zareni">pozorování CO₂ a infračerveného záření</Link>.{' '}
          <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, obr. 2 a 4)</SourceLink>
        </p>

        <h4 id="lidske-pusobeni-vyskovy-test" className={styles.testHeading}>Druhý test porovnává rozložení teplotních změn</h4>
        <p>
          Následující test sleduje teplotní následek změněného záření.
          Růst skleníkových plynů spolu s úbytkem ozonu má vytvářet
          oteplování troposféry a ochlazování stratosféry.
          V různých zeměpisných šířkách přitom očekáváme různou sílu změny.
          Tento společný obraz lze porovnat s obrazy vyvolanými Sluncem,
          sopkami a vnitřním kolísáním klimatu. Navazuje tím na{' '}
          <a href="#slunecni-vyskovy-test">výškový test sluneční hypotézy</a>.{' '}
          <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013, obr. 1–3)</SourceLink>
        </p>
        <p>
          Santer a kolegové v roce 2013 porovnali družicový záznam
          z let 1979–2012 s výpočty více klimatických modelů.
          Sledovali tři široké vrstvy: dolní troposféru, střední
          a horní troposféru a dolní stratosféru. V každé porovnávali
          změny podle zeměpisné šířky. Modelové běhy s lidskými vlivy
          poskytly očekávaný obraz. Běhy s přirozenými vlivy ukázaly,
          jak podobný obraz může vzniknout bez lidského působení.{' '}
          <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013, data a obr. 2–4)</SourceLink>
        </p>
        <p>
          Obraz lidského působení byl rozpoznatelný v obou použitých
          zpracováních družicových dat. Samotné přirozené vlivy v tomto
          testu nevysvětlily jeho dlouhodobé zesilování.
          Přesná velikost změn se mezi modely a měřením lišila,
          rozlišující prostorový obraz přesto obstál.
          <Link href="/pozorovani/stratosfericke-ochlazovani/#vyskovy-obraz">Pozorování výškových změn teploty</Link>
          {' '}ukazuje měřený vývoj jednotlivých vrstev.{' '}
          <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013, obr. 3 a 4)</SourceLink>
        </p>
        <h4 className={styles.subheading}>Jak se výsledky obou testů doplňují</h4>
        <p>
          První test zachycuje účinek konkrétního plynu v záření,
          druhý ověřuje prostorový obraz teplotní reakce na lidské vlivy.
          K nim se přidává porovnání oceánského ohřevu Barnetta a kolegů
          popsané výše. Laboratorní pokus, záření měřené na povrchu
          a teploty atmosféry a oceánu tak zachycují různé části stejného
          děje. Vlastnosti plynů mají měřitelný účinek v přírodě a jejich
          zahrnutí pomáhá vysvětlit také rozložení následného ohřevu.{' '}
          <SourceLink id="1862_Tyndall">(Tyndall 1861)</SourceLink>{' '}
          <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015)</SourceLink>{' '}
          <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013)</SourceLink>{' '}
          <SourceLink id="DOI_10_1126_science_1112418">(Barnett a kol. 2005)</SourceLink>
        </p>
        <p>
          Dnešní vysvětlení zahrnuje celý součet lidských vlivů.
          Vedle skleníkových plynů se mění aerosoly, drobné částice
          a kapičky rozptýlené ve vzduchu. Ovlivňují sluneční záření
          i vlastnosti oblaků. V souhrnu část oteplujícího účinku plynů
          kompenzují.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíl 7.3)</SourceLink>
        </p>
        <p>
          Odborné hodnocení IPCC z roku 2021 dospělo ze souboru studií
          k závěru, že lidský vliv byl s pravděpodobností 95–100 % hlavní
          příčinou růstu obsahu tepla v oceánu od 70. let 20. století.
          V této kapitole „hlavní“ znamená více než polovinu změny.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_005">(IPCC AR6, shrnutí a oddíl 3.5.1)</SourceLink>
        </p>
        <p>
          Přijímaným vysvětlením je proto lidské působení spolu s reakcemi
          oceánu, atmosféry a povrchu. Přirozené kolísání určuje část průběhu
          a regionálních rozdílů. Nyní můžeme projít, jak tyto procesy spojí
          změnu složení vzduchu s přibýváním energie v celé Zemi.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_005">(IPCC AR6, oddíly 3.5.1 a 3.8)</SourceLink>
        </p>

        <h2 id="vysvetleni">Jak Země získává a ukládá energii</h2>
        <p>
          Změny složení atmosféry ovlivňují přenos záření. Abychom pochopili,
          jak se jejich účinek projeví i daleko pod hladinou oceánu,
          potřebujeme sledovat energii celé planety. Energetická bilance
          porovnává, kolik energie Země přijme a kolik jí odevzdá.
          Rozdíl spojuje děje v atmosféře s ohřevem vody, půdy a vzduchu.{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: energetická bilance Země)</SourceLink>
        </p>
        <h3 id="toky-energie">Příjem a výdej na hranici Země</h3>
        <p>
          Pro bilanci si představíme hranici nad atmosférou. Dovnitř
          přichází sluneční záření. Ven odchází jeho odražená část
          a tepelné záření Země. Když od příjmu odečteme oba odcházející
          toky, získáme čistý příjem energie. Kladný výsledek znamená,
          že Země energii získává, záporný, že ji ztrácí.
          Při nulovém rozdílu je její bilance vyrovnaná.{' '}
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
          V globálním a dlouhodobém průměru dopadá na každý metr čtvereční
          Země přibližně 340 wattů slunečního záření. Asi 100 wattů
          se odráží a 240 wattů se pohltí. Jde o průměr přes celý
          povrch koule, včetně noční strany. Oproti těmto tokům je současný
          přebytek malý, řádově jeden watt na metr čtvereční.{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: energetická bilance Země)</SourceLink>{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>
        </p>
        <h3>Jak přibývání skleníkových plynů změní bilanci</h3>
        <p>
          Tepelné záření povrchu prochází atmosférou jen částečně.
          Zbytek pohltí skleníkové plyny a oblaka, čímž získají energii.
          Atmosféra sama vyzařuje vzhůru i dolů. Část tohoto záření
          proto znovu přijme povrch, část unikne do vesmíru.
          Výdej celé Země závisí na tom, kolik záření projde přímo
          a kolik ho do vesmíru vyšlou jednotlivé vrstvy atmosféry.{' '}
          <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967)</SourceLink>{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: přirozený skleníkový efekt)</SourceLink>
        </p>
        <p>
          Přidaný CO₂ zachytí část záření, které by při jeho menším
          množství prošlo. Při výpočtu celého účinku započítáme i to,
          co plyn sám vyzáří. Pro původní teploty povrchu a spodní
          atmosféry vyjde menší odchod energie do vesmíru.
          Právě proto se začne energie hromadit. Postupné oteplování
          pak výdej zvyšuje, až může příjem a výdej znovu vyrovnat
          při vyšší teplotě. Tento sled vypočítali Manabe a Wetherald
          v modelu atmosférického sloupce, který zahrnoval záření,
          přenos tepla vzhůru i změnu množství vodní páry.{' '}
          <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967)</SourceLink>
        </p>
        <p>
          Samotný přenos záření a historický spor o jeho nasycení podrobně
          rozebírá článek{' '}
          <Link href="/mechanismy/radiacni-pusobeni-sklenikovych-plynu/">Proč další CO₂ mění tepelné záření Země</Link>.
        </p>
        <h3 id="nerovnovaha-a-teplota">Proč přebytek energie ohřívá oceán</h3>
        <p>
          Jestliže Země přijímá více energie, než vydává, energie se v ní
          hromadí. Podle zákona zachování energie se tento přebytek
          musí projevit ve změně jejích zásob.
          Pohlcená energie zvyšuje teplotu vody, půdy a vzduchu.
          Část se spotřebuje na tání ledu, při němž se mění skupenství,
          aniž by musela růst teplota tající směsi vody a ledu.{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics, oddíly 1.5 a 3.3)</SourceLink>
        </p>
        <p>
          Oceán může přijmout velké množství energie při malém zvýšení
          teploty. Voda má vysokou tepelnou kapacitu: na ohřátí kilogramu
          o jeden stupeň potřebujeme přibližně čtyři tisíce joulů.
          A v oceánu se ohřívá obrovská hmotnost vody. Proudění a promíchávání
          přenášejí teplo od hladiny do hlubších vrstev, takže jej postupně
          může přijímat stále větší objem. Proto je při sledování energetické
          změny důležitá i nepatrná změna teploty pod hladinou.{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics, oddíl 1.5)</SourceLink>{' '}
          <SourceLink id="DOI_10_5194_essd_16_3517_2024">(Cheng a kol. 2024)</SourceLink>
        </p>
        <h3>Proč oteplování postupně zvyšuje výdej</h3>
        <p>
          Ohřívající se Země zároveň silněji vyzařuje. Tento vztah
          mezi teplotou a zářením můžeme měřit v laboratoři. Rubens
          a Kurlbaum například měřili dlouhovlnné záření zahřívaného
          tělesa. Jejich výsledkům nevyhovoval tehdejší Wienův vztah,
          zatímco Planckův vztah odpovídal i této části měření.
          Zákon tepelného záření tak dostal podobu ověřitelnou při
          různých teplotách a vlnových délkách.{' '}
          <SourceLink id="DOI_10_1086_140874">(Rubens a Kurlbaum 1901, obr. 2 a 3)</SourceLink>{' '}
          <SourceLink id="DOI_10_1002_andp_19013090310">(Planck 1901)</SourceLink>
        </p>
        <p>
          Celkový vyzářený výkon ideálního černého tělesa, které pohltí
          všechno dopadající záření, popisuje Stefanův–Boltzmannův zákon:
        </p>
        <Equation tex={String.raw`F = \sigma T^4`} />
        <p>
          <InlineMath tex="F" /> je výkon vyzářený z jednoho metru čtverečního
          ve W/m² a <InlineMath tex="T" /> teplota v kelvinech.
          Kelviny získáme přičtením 273,15 k teplotě ve stupních Celsia.
          Konstanta <InlineMath tex="\sigma" /> je přibližně{' '}
          <InlineMath tex={String.raw`5{,}67\times10^{-8}\,\mathrm{W\,m^{-2}\,K^{-4}}`} />.
          Vyšší teplota tedy znamená větší výdej energie a čtvrtá mocnina
          určuje, jak rychle výdej roste.{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics, oddíl 1.6)</SourceLink>
        </p>
        <p>
          U Země přichází záření z povrchu i různých výšek atmosféry.
          Pro výpočet výdeje do vesmíru proto skládáme jejich příspěvky
          a sledujeme průchod záření dalšími vrstvami. Samotné rovnoměrné
          oteplení povrchu a troposféry, spodní části atmosféry,
          při ostatních vlastnostech beze změny zvyšuje výdej přibližně
          o 3,1–3,2 W/m² na jeden stupeň. Této stabilizující reakci
          říkáme Planckova odezva. Část původního přebytku se díky ní
          postupně vyzáří a rychlost dalšího ohřevu se zmenší.{' '}
          <SourceLink id="DOI_10_1175_2007JCLI2110_1">(Soden a kol. 2008)</SourceLink>
        </p>
        <p>
          Oteplování zároveň mění další vlastnosti Země. Když například
          ustoupí sníh nebo led a odkryje se tmavší povrch, pohltí se více
          sluneční energie. Tato změna zesiluje původní oteplení.
          Reakci, která zpětně ovlivňuje svou příčinu, nazýváme zpětnou
          vazbou. Podobně působí změny vodní páry a oblaků, každý proces
          však mění záření jinak. Výsledné přibližování k rovnováze určuje
          jejich součet s teplotní odezvou a s pokračujícími změnami
          složení atmosféry.{' '}
          <SourceLink id="DOI_10_1175_2007JCLI2110_1">(Soden a kol. 2008)</SourceLink>
        </p>
        <p>
          Země se proto může současně oteplovat, více vyzařovat a přesto
          dál získávat energii. Rozhodující je, zda rostoucí výdej už
          vyrovnal příjem. V rozboru období od září 2002 do března 2020
          vyšší teplota opravdu působila směrem k většímu výdeji.
          Změny plynů, vody, oblaků a odrazivosti jej však v součtu
          převážily, takže energetický přebytek rostl.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíl 3.2)</SourceLink>
        </p>
        <h3 id="vypocet-bilance">Odpovídá velikost přebytku uložené energii?</h3>
        <p>
          Energetická bilance dává přesnou vazbu mezi zářením a ohřevem.
          Označíme dopadající sluneční tok <InlineMath tex="S" />,
          odražený tok <InlineMath tex="R" /> a odcházející tepelné záření{' '}
          <InlineMath tex="L" />. Všechny vztáhneme k ploše celé Země
          a vyjádříme ve W/m². Čistý příjem <InlineMath tex="N" /> pak je:
        </p>
        <Equation tex="N = S - R - L" />
        <p>
          Množství získané energie zjistíme vynásobením průměrného
          čistého příjmu plochou Země a délkou sledované doby.
          Plocha je přibližně 510 milionů km². Kdyby čistý příjem
          po celý rok činil 1 W/m², přibylo by asi 16,1 zettajoulu.
          Jde o názorný přepočet, ne o hodnotu konkrétního roku.
          Zákon zachování energie vyžaduje, aby takto vypočtený přírůstek
          odpovídal součtu změn v oceánu, pevnině, atmosféře a ledu.{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics, oddíl 3.3)</SourceLink>{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>
        </p>
        <p>
          Přírůstek 381 ± 61 zettajoulů za roky 1971–2020 autoři
          inventury vyjádřili jako průměrný čistý příjem
          0,48 ± 0,10 W/m². Tím dostává pozorovaný ohřev fyzikální
          měřítko: k jeho vzniku stačí dlouhodobý rozdíl příjmu a výdeje
          o několik desetin wattu na metr čtvereční.
          Tato hodnota je přepočtem inventury. Další kontrolu poskytuje
          porovnání jejího časového vývoje s měřením záření.{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>
        </p>
        <h3 id="porovnani">Zachycují změnu také družice?</h3>
        <p>
          Jestliže čistý příjem energie roste, mělo by se zrychlovat
          i její ukládání. Družicové přístroje CERES sledují odražené
          a tepelné záření, oceánské sondy měří teplotu vody v různých
          hloubkách. Porovnáváme tedy dva fyzicky odlišné způsoby měření.
          Jejich výsledky uvádí také{' '}
          <Link href="/pozorovani/tepelny-obsah-oceanu/#porovnani-se-zarenim">pozorování oceánského ohřevu a záření</Link>.
          Postup družicového měření vysvětluje{' '}
          <Link href="/metody/mereni-radiacnich-toku/#druzicova-bilance">metoda měření radiačních toků</Link>.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021)</SourceLink>
        </p>
        <p>
          Graf porovnává růst obou toků od poloviny roku 2005
          do poloviny roku 2019. Ukazuje, o kolik W/m² se tok zvýšil
          za deset let. Bod označuje odhad, úsečka jeho 90% interval
          spolehlivosti. Oba postupy zachytily slučitelné zrychlování
          ukládání energie. Oceánský výsledek se zde týká horních
          2 000 metrů, oba toky jsou přepočtené na plochu celé Země.
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
          Nezávislou kontrolu zde poskytují časové změny. Průměrný
          čistý příjem v družicovém produktu CERES EBAF je nastaven
          podle inventury energie, jeho shoda s oceánem tedy sama
          další důkaz nepřidává. Průběh kolísání a trend družicového
          záznamu však oceánskému záznamu přizpůsobeny nejsou.
          Právě jejich soulad podporuje vysvětlení, že se rostoucí
          přebytek záření projevuje rostoucí rychlostí ukládání tepla.{' '}
          <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018, kalibrace EBAF)</SourceLink>{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíl 3.1)</SourceLink>
        </p>
        <h3 id="nejistoty">Co je doložené a co se dále zpřesňuje</h3>
        <p>
          Účinek skleníkových plynů a hlavní lidský podíl na dlouhodobém
          ohřevu oceánu podpírá soubor fyzikálních, pozorovacích a modelových
          výsledků. Přesné rozdělení změn mezi plyny, aerosoly, oblaka
          a přirozené kolísání se dále zpřesňuje. To ovlivňuje zejména
          vysvětlení jednotlivých desetiletí a odhad rychlosti dalšího ohřevu.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_005">(IPCC AR6, oddíly 3.5.1 a 3.8)</SourceLink>{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, diskuse)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Podrobnosti nejistot a dalších testů</summary>
          <p>
            Přesnost oceánské inventury omezuje nerovnoměrné měření,
            zejména v hloubkách a polárních oblastech. Některé výpočty
            sdílejí stejné profily, takže jejich shoda není plně nezávislá.
            U družicového trendu je podstatná dlouhodobá stálost
            přístrojů. Soustavný rozpor mezi změnou zásob a měřeným
            příjmem energie by vyžadoval hledat chybějící přenos nebo
            chybu některého měření.{' '}
            <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>{' '}
            <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018)</SourceLink>
          </p>
          <p>
            Rozbor Leanové a Rinda přiděluje jednotlivým vlivům teplotní
            příspěvky statistickým přizpůsobením společnému záznamu.
            Záleží proto na úplnosti vstupů a předpokladu přibližně
            sčitatelných odezev. U výškového testu Santera a kolegů modely
            v průměru nadhodnocovaly troposférický ohřev a podhodnocovaly
            ochlazování dolní stratosféry. Zachycení rozlišujícího obrazu
            tedy neznamená shodu každé vypočtené teploty.{' '}
            <SourceLink id="DOI_10_1029_2008GL034864">(Leanová a Rind 2008)</SourceLink>{' '}
            <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013, diskuse)</SourceLink>
          </p>
          <p>
            Rozlišení příčin závisí také na tom, jak dobře modely
            zachycují přirozené kolísání. Studie z let 2001–2020 využívá
            mnoho modelů, regionální změny oblaků a aerosolů však
            zachycuje s rozdílnou úspěšností. Výpočty navíc často dávají
            nižší růst nerovnováhy než prostřední odhad z družic.
            Kdyby modely lépe ověřené na dlouhých záznamech dokázaly
            vysvětlit tento trend samotným přirozeným kolísáním,
            oslabilo by to uvedený závěr o příčinách.{' '}
            <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021)</SourceLink>
          </p>
          <p>
            Celkový 95% interval družicového trendu v této studii je
            0,38 ± 0,24 W/m² za deset let. Zahrnuje chybu měření
            i nejistotu odhadu trendu v kolísajícím záznamu. Při porovnání
            s modelovým rozpětím přirozeného kolísání proto autoři
            používají užší nejistotu ±0,20 uvedenou výše. Jinak by vliv
            kolísání započetli dvakrát.{' '}
            <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, dvě porovnání nejistot)</SourceLink>
          </p>
          <p>
            Pozemní test CO₂ zachycuje bezoblačné podmínky na dvou místech.
            Jeho výsledek nelze ztotožnit s globální bilancí nad atmosférou.
            Oddělení příspěvku CO₂ využívá výpočet přenosu záření,
            takže pozorování a výpočet sdílejí část fyzikálních podkladů.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, metody)</SourceLink>
          </p>
          <p>
            Rozklad družicových změn na účinky teploty, vody,
            oblaků a plynů používá výpočet přenosu záření upravený
            tak, aby odpovídal měřeným tokům. Jde o modelovou
            interpretaci pozorování, nikoli další nezávislé měření
            každého příspěvku. Data pro její kontrolu jsou{' '}
            <SourceLink id="DATA_CERES_PRP_2021">veřejně dostupná</SourceLink>.{' '}
            <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíly 2 a 3.2)</SourceLink>
          </p>
        </details>

        <h2 id="shrnuti">Shrnutí mechanismu</h2>
        <div className="method-conclusion">
          <p>
            Země získává energii, když pohltí více slunečního záření,
            než odevzdá tepelným zářením do vesmíru. Přibývání skleníkových
            plynů omezuje únik energie, změny oblaků, částic a povrchu
            ovlivňují také její příjem. Přebytek se ukládá především
            v oceánu. Oteplování současně zvyšuje vyzařování, a tím
            působí proti dalšímu ohřevu. Dokud se příjem a výdej
            nevyrovnají, zásoba energie dál roste.
          </p>
          <p>
            Tímto mechanismem vysvětlujeme{' '}
            <Link href="/pozorovani/tepelny-obsah-oceanu/#souvislost-s-bilanci">přírůstek energie v klimatickém systému</Link>,
            jehož největší část připadá na oceán.
            Dnes jej vysvětlujeme především lidským působením na složení
            atmosféry a následnými reakcemi klimatu. Toto vysvětlení
            propojuje vlastnosti plynů ověřené v laboratoři, změny
            měřeného záření, teploty v různých výškách atmosféry
            a rozložení ohřevu v oceánu.
            Přirozené kolísání ovlivňuje průběh a rozmístění změny.
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
