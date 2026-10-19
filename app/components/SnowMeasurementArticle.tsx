import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import { Equation, InlineMath } from "./Equation";
import example from "../../public/data/methods/snow-measurements/example.json";

const dataPath = "/data/methods/snow-measurements";
const number = (value: number) => value.toLocaleString("cs-CZ", { maximumFractionDigits: 2 });

export function SnowMeasurementArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Výška sněhu</dt><dd>Svislá vzdálenost od podkladu k povrchu sněhu v daném místě. Podkladem může být půda nebo led.</dd></div>
          <div><dt>Hustota sněhu</dt><dd>Hmotnost sněhu dělená jeho objemem, včetně pórů mezi zrny. Udává se v kg/m³.</dd></div>
          <div><dt>Vodní hodnota</dt><dd>Množství vody uložené ve sněhu, vyjádřené výškou vodního sloupce. Zkratka SWE vychází z anglického snow water equivalent.</dd></div>
          <div><dt>Sněhový profil</dt><dd>Popis sněhu od povrchu k podkladu. Zahrnuje polohy vrstev a měření jejich vlastností, například hustoty.</dd></div>
        </dl>
        <p className="article-glossary__note">Jeden milimetr vodní hodnoty odpovídá jednomu kilogramu vody na metr čtvereční. K převodu výšky sněhu na zásobu vody potřebujeme jeho hustotu.</p>
      </aside>

      <div className="article-prose">
        <h2>Jak měříme zásobu vody ve sněhu</h2>
        <p className="article-prose__intro">
          Terénní měření sněhu zjišťuje výšku sněhové pokrývky, její hustotu
          a množství vody, které obsahuje. Výšku odečteme měřicí tyčí nebo
          pravítkem. Hustotu určíme zvážením vzorku známého objemu.
          Spojením těchto údajů vypočítáme zásobu vody nad danou plochou.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíly 2.3 a 2.4)</SourceLink>
        </p>
        <p>
          Tuto zásobu vyjadřujeme jako <strong>vodní hodnotu sněhu</strong>.
          Představuje výšku vrstvy vody, která má nad stejnou plochou stejnou
          hmotnost jako měřený sníh. Používá se pro ni zkratka SWE z anglického
          <em> snow water equivalent</em>. Údaj v milimetrech vody tak dovoluje
          porovnat zásobu uloženou v různě vysokých a různě hustých pokrývkách.
          Význam veličin stanovuje <SourceLink id="2009_Fierz_Snow_Classification">mezinárodní
          klasifikace sněhu Fierze a kolegů</SourceLink>.
        </p>

        <h3>Proč potřebujeme výšku i hustotu</h3>
        <p>
          Sníh tvoří ledová zrna a póry, tedy mezery mezi nimi vyplněné vzduchem.
          Při tání se v něm nachází také kapalná voda. Hustota popisuje hmotnost
          celého tohoto materiálu v jednotce objemu. Objem vzorku proto zahrnuje
          i póry. Čím více hmoty připadá na stejný objem, tím je sníh hustší.{" "}
          <SourceLink id="2009_Fierz_Snow_Classification">(Klasifikace sněhu, hustota a obsah vody)</SourceLink>
        </p>
        <p>
          Při sesedání se zrna přeskupují a pokrývka zaujímá menší objem.
          Pokud se její hmotnost nezmění, hustota přitom roste. Sníh tedy může
          být nižší a stále obsahovat stejnou zásobu vody. Společné měření výšky
          a hustoty umožňuje sledovat tuto zásobu i během zhutňování.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, kapitola 2)</SourceLink>
        </p>
        <p>
          Pro podrobné vysvětlení zvolíme odběry v odkryté sněhové stěně.
          Na ní změříme polohu jednotlivých odběrů od podkladu až k povrchu.
          Každému přiřadíme hustotu a získáme <strong>sněhový profil</strong>,
          tedy popis uspořádání sněhu a jeho vlastností v různých výškách.
          Budeme sledovat sestavu z expedice MOSAiC, při níž loď Polarstern
          v letech 2019–2020 doprovázela unášený arktický mořský led.
          Postup dokládají <SourceLink id="DOI_10_1038_s41597_023_02273_1">Macfarlane a kolegové</SourceLink>.
        </p>

        <h3>Výška pokrývky a poloha odběrů</h3>
        <p>
          Nejprve určíme podklad, od kterého výšku počítáme. Na pevnině je jím
          obvykle zem, na mořském ledu horní povrch ledu. Měřicí tyč zasuneme
          svisle až k tomuto rozhraní a odečteme polohu povrchu sněhu.
          V odkryté stěně lze přímo prohlédnout podklad i rozhraní uvnitř sněhu.
          Pravítko u stěny potom ukazuje, v jaké výšce vzorky odebíráme.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 2.3.1)</SourceLink>
        </p>
        <p>
          Pro zásobu vody nad vodorovnou plochou používáme svislou výšku.
          Na svahu je směr svisle dolů jiný než směr kolmý k jeho povrchu.
          U rovnoběžného podkladu a sněhového povrchu je kolmá tloušťka rovna
          svislé výšce násobené kosinem sklonu svahu. Kosinus zde vyjadřuje
          geometrický převod mezi oběma směry. Čím je svah strmější, tím menší
          část svislé výšky představuje kolmá tloušťka. Směr měření je proto
          součástí popisu výšky podle
          <SourceLink id="2009_Fierz_Snow_Classification"> klasifikace sněhu</SourceLink>.
        </p>
        <p>
          Odběry rozdělíme do navazujících výškových intervalů. U každého
          zapíšeme horní a dolní hranici, jejich rozdíl dává jeho tloušťku.
          Při expedici MOSAiC se vzorkovalo po 3 cm. Takto vymezené odběry
          pokrývají sněhový sloupec postupně od povrchu až k ledu.
          Interval je úsek zvolený pro měření, může zahrnovat i více tenkých
          vrstev vzniklých při různém sněžení nebo přeměně sněhu.{" "}
          <SourceLink id="DOI_10_1038_s41597_023_02273_1">(Macfarlane a kol., měření hustoty)</SourceLink>
        </p>

        <h3>Odběr známého objemu a vážení</h3>
        <p>
          V popsané sestavě se používá odběrák o objemu 100 cm³ a digitální
          váha Emerald500. Odběrák je malá nádobka s hranami umožňujícími
          vyříznout vzorek ze stěny. Její objem určuje, kolik prostoru měl sníh
          před vyjmutím. Váha následně zjistí hmotnost, která tento prostor
          vyplňovala. Rozměry a vybavení uvádí <SourceLink id="DOI_10_1038_s41597_023_02273_1">popis
          měření při MOSAiC</SourceLink>.
        </p>
        <p>
          Před měřením potřebujeme znát vztah mezi údajem váhy a hmotností
          vloženého vzorku. Při <strong>kalibraci</strong> porovnáváme její odečty
          s referenčními závažími. Jejich hmotnosti jsou doloženy návaznými
          kalibracemi, které místní měření propojují s jednotkou kilogram.
          Z porovnání získáme vztah pro převod údaje váhy na hmotnost včetně
          nejistot. Takto kalibraci vymezuje <SourceLink id="2012_VIM_Calibration">mezinárodní
          metrologický slovník VIM</SourceLink>.
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> Příručka Světové
          meteorologické organizace, zkráceně WMO</SourceLink>, požaduje sezónní
          ověření váhy kalibračním závažím.
        </p>
        <p>
          Samostatně určíme objem odběráku a zkontrolujeme délkovou stupnici.
          Objem lze zjistit z rozměrů nádobky nebo z hmotnosti vody, kterou
          pojme. Ve druhém případě vydělíme hmotnost vody její známou hustotou
          a dostaneme objem. Pravítko, nádobka a váha tak poskytují tři potřebné
          údaje: polohu odběru, objem a hmotnost.{" "}
          <SourceLink id="DOI_10_5194_tc_10_371_2016">(Proksch a kol., rozměry odběráků v oddílu 2.2)</SourceLink>
        </p>
        <p>
          V odkryté stěně vybereme sníh nenarušený kopáním. Odběrák zasuneme
          tak, aby se úplně naplnil, a sníh zarovnáme s jeho hranami.
          Vzorek vyjmeme bez stlačení a bez ztráty zrn či vody.
          Tím zachováme spojení mezi odebranou hmotností a známým objemem,
          který sníh zaujímal ve stěně. Odběr opakujeme v dalších intervalech.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 2.4.1.2)</SourceLink>
        </p>
        <p>
          Váha reaguje na tíhovou sílu vzorku a pomocí kalibračního vztahu
          ji vyjadřuje jako hmotnost. Zvážíme nádobku se sněhem a odečteme
          hmotnost prázdné nádobky. Zůstane <strong>čistá hmotnost</strong>{" "}
          odebraného sněhu. Zahrnuje ledová zrna i případnou kapalnou vodu mezi nimi.
          Souvislé odběry a jejich vážení popisuje <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">WMO,
          oddíl 2.4.1</SourceLink>.
        </p>

        <h3>Hustota jednotlivých vzorků</h3>
        <p>
          Nyní známe hmotnost i objem každého vzorku. Hustotu získáme vydělením
          hmotnosti objemem. Tím ji vyjádříme na jednotku prostoru:
        </p>
        <Equation tex={String.raw`\rho = \frac{m}{V}`} />
        <p>
          Řecké písmeno ρ označuje hustotu v kilogramech na metr krychlový,
          zapisovaných kg/m³. m je čistá hmotnost sněhu v kilogramech a V objem
          vzorku v metrech krychlových včetně pórů. Nádobka o objemu 100 cm³
          představuje 0,0001 m³. Při dosazování tedy převedeme odečtené gramy
          na kilogramy a objem nádobky na metry krychlové.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 2.4.1)</SourceLink>
        </p>
        <p>
          Výsledná hustota je průměrem přes celý odebraný objem. Přiřadíme ji
          výškovému intervalu, ze kterého vzorek pochází. Postupným odběrem
          získáme pro každý úsek dvě hodnoty: jeho hustotu a svislou tloušťku.
          Z nich už lze určit hmotnost sněhu v celém sloupci.
        </p>

        <h3>Převod na vodní hodnotu</h3>
        <p>
          Uvažujme nejprve jediný interval. Jeho objem nad jednotkou vodorovné
          plochy určuje svislá tloušťka. Když tuto tloušťku vynásobíme hustotou,
          dostaneme hmotnost sněhu nad jednotkou plochy, vyjádřenou v kg/m².
          Stejný postup použijeme pro každý interval a hmotnosti sečteme.
        </p>
        <p>
          Celkovou zásobu chceme vyjádřit jako výšku vrstvy vody.
          Hmotnost nad jednotkou plochy proto vydělíme hustotou vody.
          Voda má vyšší hustotu než sníh s póry, takže stejné hmotnosti
          odpovídá nižší vrstva. Pro tento převod používáme
          referenční hustotu vody 1 000 kg/m³.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, rovnice 2.5 a 2.6)</SourceLink>
        </p>
        <p>
          Výpočet můžeme zapsat jako součet vodních hodnot všech intervalů:
        </p>
        <Equation tex={String.raw`\mathrm{SWE} = \sum_i \frac{\rho_i}{\rho_w}\,\Delta h_i`} />
        <p>
          Znak Σ znamená součet a index i označuje jeden interval.
          ρ<sub>i</sub> je jeho hustota, ρ<sub>w</sub> referenční hustota vody,
          obě v kg/m³. Δh<sub>i</sub> je svislá tloušťka intervalu v metrech,
          tedy rozdíl jeho horní a dolní hranice. Poměr hustot nemá jednotku.
          Výsledek SWE proto vychází v metrech vody.
          Tento vztah uvádí <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">WMO,
          rovnice 2.5 a 2.6</SourceLink>.
        </p>
        <p>
          Pro milimetry výsledek vynásobíme tisícem. Při použité hustotě vody
          se tím vyruší předchozí dělení tisícem. Součin hustoty sněhu v kg/m³
          a tloušťky v metrech tedy rovnou udává číselnou hodnotu SWE v milimetrech.
          Jeden milimetr vodní hodnoty tak odpovídá jednomu kilogramu vody
          na metr čtvereční.
        </p>
        <p>
          Součet počítá s intervaly, které na sebe navazují a pokrývají celou
          výšku sněhu právě jednou. Hustota každého vzorku přitom zastupuje
          jeho příslušný interval. Z celkové hmotnosti na jednotku plochy
          získáme také průměrnou hustotu profilu: vydělíme ji celkovou svislou
          výškou. Silnější interval má v tomto průměru větší váhu, protože
          tvoří větší část objemu sloupce. Prostý průměr hustot můžeme použít
          tehdy, když mají všechny intervaly stejnou tloušťku.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 2.4.1)</SourceLink>
        </p>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Od odběru sněhu k vodní hodnotě">
            <div><span>1</span><strong>Vymezit interval</strong><small>Pravítko určí horní a dolní hranici odběru nad podkladem.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Odebrat a zvážit</strong><small>Známý objem V vyjmeme bez stlačení a zjistíme čistou hmotnost m.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Vypočítat hustotu</strong><small>Podíl m/V přiřadíme vzorkovanému intervalu.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Sečíst vodu</strong><small>Hustotu násobíme tloušťkou intervalu a příspěvky sečteme.</small></div>
          </div>
          <figcaption>
            Schéma odběru ve sněhovém profilu. Šipky ukazují postup od vymezení vzorku k součtu vody
            nad jednotkovou plochou. Pravítko, objem odběráku a váha poskytují tři samostatné vstupy.
            Vlastní schéma Klimatologie.eu, CC BY 4.0, podle <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">WMO (2024)</SourceLink>.
          </figcaption>
        </figure>

        <h3>Měření na větším území a v čase</h3>
        <p>
          Výsledek jednoho profilu popisuje konkrétní místo. Pro zásobu vody
          na větším území opakujeme měření na sněhoměrných trasách.
          Rozmístění bodů zachycuje různé povrchy a terén, protože vítr přesouvá
          sníh do závějí a stromy mění jeho ukládání i tání.
          Více vážených odběrů kombinujeme s hustší sítí rychlých odečtů výšky.
          Při spojování výsledků zohledníme, jak velkou část území jednotlivá
          měřená místa zastupují. Tyto postupy popisuje <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">WMO,
          oddíly 2.3 a 2.4</SourceLink>.
        </p>
        <p>
          Opakované návštěvy ukazují vývoj zásoby během sezóny i mezi roky.
          Pro dlouhodobé porovnání zachováváme termíny měření a zaznamenáváme
          změny okolí nebo použitého přístroje. Výška celé pokrývky popisuje
          stav v daný okamžik. Nový sníh naproti tomu označuje přírůstek
          za stanovený časový interval.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíly 2.2 a 2.3)</SourceLink>
        </p>

        <h3>Použití v klimatologii</h3>
        <p>
          Společné záznamy výšky a vodní hodnoty ukazují, jak se mění sněhová
          zásoba a jak se pokrývka zhutňuje. Změna zásoby mezi návštěvami je
          výsledkem sněžení, tání a odtoku vody, výparu i přenosu sněhu větrem.
          Měření proto navazuje na <Link href="/metody/srazkomery-a-disdrometry">srážkoměry
          a disdrometry</Link>. Dlouhodobé výsledky shrnuje článek
          o <Link href="/pozorovani/snehova-pokryvka-a-permafrost">sněhové pokrývce a permafrostu</Link>.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, kapitola 2)</SourceLink>
        </p>
        <p>
          Terénní údaje pomáhají také vytvářet a kontrolovat družicové odhady.
          <SourceLink id="DOI_10_1038_s41597_021_00939_2"> Datový soubor GlobSnow v3.0</SourceLink>{" "}
          spojuje družicové mikrovlnné měření s pozemní výškou sněhu a odhaduje
          vodní hodnotu v mimohorských oblastech severní polokoule.
          Sněhoměrné trasy poskytují přímá měření SWE, s nimiž se odhady porovnávají.
          Ze soustavných rozdílů se určují opravy nadhodnocení či podhodnocení.
          Terénní hodnoty současně slouží k vyhodnocení shody výsledného produktu
          s měřením. Družicový princip vysvětluje <Link href="/metody/pasivni-mikrovlnna-radiometrie">pasivní
          mikrovlnná radiometrie</Link>.
        </p>
        <p>
          Na <Link href="/pozorovani/ubytek-arktickeho-ledu">arktickém mořském ledu</Link>{" "}
          sněhový profil určuje, jaká hmotnost led zatěžuje. Tento údaj pomáhá
          vykládat družicová měření jeho výšky. Na <Link href="/pozorovani/ustup-ledovcu">horských
          ledovcích</Link> se výška zimního sněhu pomocí hustoty převádí na
          přírůstek hmotnosti. Na něj navazuje <Link href="/metody/terenni-mereni-bilance-ledovcu">terénní
          měření bilance ledovců</Link>, které zahrnuje i úbytek sněhu a ledu během roku.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, kapitoly 2 a 3)</SourceLink>
        </p>
        <p>
          Na <Link href="/pozorovani/nestabilita-prikrovu">ledovcových příkrovech</Link>{" "}
          se sníh postupně zhutňuje do firnu. Firn je starší zrnitý materiál,
          mezistupeň mezi sněhem a kompaktním ledem. Převod změny výšky povrchu
          na změnu hmotnosti zde potřebuje také údaje o zhutňování této hlubší
          vrstvy. Souvislosti rozebírá <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">WMO,
          kapitoly 2 a 3</SourceLink>.
        </p>

        <h3>Celý sněhový sloupec a vývoj měřidel</h3>
        <p>
          Rychlejší variantou vážení je odběr celého sněhového sloupce trubicí.
          Trubice se známou vnitřní plochou řezu vyjme sníh od povrchu až
          k podkladu. Zvážíme celý vzorek a odečteme hmotnost prázdného odběráku.
          Čistou hmotnost vydělíme plochou řezu, čímž ji přepočteme na jednotku
          plochy. Dalším dělením hustotou vody získáme vodní hodnotu:
        </p>
        <Equation tex={String.raw`\mathrm{SWE} = \frac{m}{A\rho_w}`} />
        <p>
          m je čistá hmotnost sněhu v kg, A vnitřní plocha řezu trubice v m²
          a ρ<sub>w</sub> hustota vody 1 000 kg/m³. SWE vychází v metrech vody.
          Vztah platí pro úplný sloupec sněhu odebraný nad plochou A.
          Známe-li také jeho výšku, můžeme určit průměrnou hustotu.
          Obě varianty gravimetrického měření, tedy měření založeného na vážení,
          popisuje <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">WMO</SourceLink>.
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/snow-permafrost/usgs-snow-core-measurement.jpg"
            alt="Výzkumník měří skládacím metrem délku sněhového válce na ledovci Sperry. Vpravo stojí trubicový odběrák."
            width={1000} height={667} sizes="(max-width: 900px) 100vw, 900px" unoptimized />
          <figcaption>
            Měření odebraného sněhového válce na ledovci Sperry v Montaně.
            Skládací metr určuje délku vzorku, vpravo je trubicový odběrák.
            Takové odběry slouží k určení hmotnostní bilance ledovce.
            Fotografie: <SourceLink id="WEB_U_S_Geological_Survey_Snow_core_measurement_04ddf039">USGS,
            původní snímek a podmínky použití</SourceLink>. Volné dílo.
          </figcaption>
        </figure>
        <p>
          Trubicový odběr umožňuje rychle postupovat mezi více místy.
          Odkrytá stěna zase ukazuje rozhraní a rozložení hustoty s výškou.
          Její příprava trvá déle a místo naruší, při další návštěvě proto
          odebíráme neporušený sníh vedle. Při MOSAiC se používaly obě varianty:
          malé odběráky i trubice ETH pro vodní hodnotu celého sloupce.
          Jejich porovnání uvádí <SourceLink id="DOI_10_1038_s41597_023_02273_1">studie expedice</SourceLink>.
        </p>
        <p>
          Spojení přenosného odběráku s váhou umožnilo zjišťovat horskou zásobu
          vody přímo v terénu už na počátku 20. století.
          <SourceLink id="DOI_10_1038_092520a0"> Zpráva v časopise Nature z ledna 1914</SourceLink>{" "}
          popisuje přístroj, který James E. Church představil Královské
          meteorologické společnosti 17. prosince 1913. Church spojil měření
          výšky a vodního obsahu sněhu se studiem hor a lesů i se zásobováním
          vodou pro zavlažování.
        </p>
        <p>
          Pozdější automatické přístroje umožnily sledovat změny mezi návštěvami
          stanice. Ultrazvukové čidlo nad sněhem určuje vzdálenost z doby návratu
          zvuku. Výpočet používá i teplotu vzduchu, protože na ní závisí rychlost
          zvuku. Od známé vzdálenosti čidla k holému podkladu odečteme vzdálenost
          ke sněhu a získáme jeho výšku. Laserový přístroj využívá světlo.
          Oba postupy vycházejí ze stálé polohy čidla vůči podkladu.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 2.3.2)</SourceLink>
        </p>
        <p>
          Automaticky lze sledovat také hmotnost sněhu. Sněhový polštář je nádoba
          s kapalinou zapuštěná do úrovně terénu. Sníh nádobu zatěžuje a zvyšuje
          tlak kapaliny. Z tohoto tlaku se určuje hmotnost nad měřenou plochou
          a její vodní hodnota. Sněhová váha zachycuje zatížení nosné plochy
          silovým snímačem, který reaguje na působící sílu.
          Automatické přístroje popisuje <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">WMO,
          oddíly 2.3.2 a 2.4.2</SourceLink>.
        </p>
        <p>
          Společný popis vrstev a vlastností podle <SourceLink id="2009_Fierz_Snow_Classification">mezinárodní
          klasifikace sněhu</SourceLink> umožňuje spojovat výsledky různých
          pozorovatelů. Moderní profily, například z MOSAiC, doplňují vážení
          také měřením struktury a složení sněhu. Zveřejněné záznamy jednotlivých
          odběrů pak umožňují opakovat převod hustoty na vodní hodnotu.
        </p>

        <h2>Nejistoty a omezení</h2>
        <p>
          Výsledek závisí na úplnosti vzorku, jeho objemu, vážení a určení
          tloušťky. Pro větší území je podstatné i rozmístění odběrů.
          <SourceLink id="DOI_10_5194_tc_10_371_2016"> Porovnání s rentgenovým měřením</SourceLink>{" "}
          vyčíslilo u krabičkového odběráku celkovou velikost rozdílů na 7 %
          průměrné referenční hustoty. Použitá míra rozdíly nejprve umocňuje,
          takže se kladné a záporné odchylky navzájem nevyruší.
          Výsledek platí pro podmínky daného porovnání v Davosu.
        </p>
        <details className="method-details">
          <summary>Podrobněji o nejistotách a ověření</summary>
          <h3>Odběr a měřidla</h3>
          <p>
            Krusta, kámen nebo vegetace mohou sondu zastavit nad podkladem,
            měkká půda dovolí zatlačení pod něj. Výška pak vyjde příliš malá,
            nebo velká. Ztráta zrn a odtok vody snižují zjištěnou hustotu,
            stlačení při odběru ji může zvýšit. Společná chyba objemu odběráku
            posune celý profil a součtem vrstev nezmizí. Příliš velký objem
            dosazený do výpočtu vede k podhodnocení hustoty. Neúplný nebo stlačený
            vzorek odebíráme znovu.{" "}
            <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíly 2.3.1 a 2.4.1.3)</SourceLink>
          </p>
          <p>
            V terénu chráníme vážení před větrem, kontrolujeme čistotu a suchost
            nádobky, hrany odběráku i nulu váhy. Odečtení nádobky odstraní její
            hmotnost, neověří správnost vážení. Seřízení mění odezvu přístroje,
            zatímco kalibrace podle <SourceLink id="2012_VIM_Calibration">VIM</SourceLink>{" "}
            určuje její vztah k referenci. Pro navazující válcové odběry
            <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO</SourceLink>{" "}
            doporučuje třetí vzorek, liší-li se opakované výšky či hmotnosti
            o více než 5 %. Je to kontrolní pravidlo, nikoli pětiprocentní
            nejistota. Rozdíly mohou obsahovat i skutečnou proměnlivost sněhu.
          </p>
          <p>
            Třícentimetrový odběr zprůměruje i tenké vrstvy uvnitř vzorku.
            Tato rozlišovaná tloušťka popisuje prostorové rozlišení, rozlišení
            váhy zase rozeznatelné změny hmotnosti. Ani jedno samo neudává
            nejistotu. Hustoty 174–288 kg/m³ v našem příkladu jsou rozsahem
            zveřejněných hodnot, ne provozním rozsahem přístroje.
          </p>
          <h3>Porovnání s jinými postupy</h3>
          <p>
            <SourceLink id="DOI_10_5194_tc_10_371_2016">Proksch a kolegové</SourceLink>{" "}
            porovnali odběráky s rentgenovou mikrotomografií. Ta z prostorových
            snímků určuje podíl ledu a pórů, z něj pak hustotu. Podrobnější
            tomografické profily zprůměrovali na intervaly odběrů. Pro terénní
            porovnání bez ledových vrstev rozdíly umocnili na druhou,
            zprůměrovali a odmocnili. Výsledek činil podle typu odběráku
            7 %, 9 % a 5 % průměrné tomografické hustoty.
          </p>
          <p>
            U krabičkového odběráku byl průměr se zachovanými znaménky −1 %.
            Popisuje posun, při němž se opačné odchylky ruší, zatímco 7 %
            popisuje celkovou velikost rozdílů. Vážení a tomografie mají jiný
            princip, sdílejí však profil a nejistotu přiřazení sousedních vzorků.
            Tomografie také potřebuje rozlišit led od vzduchu v obraze.
            Výsledky jsou ověřením, v našem výpočtu z nich neurčujeme opravu
            ani nejistotu arktického profilu.{" "}
            <SourceLink id="DOI_10_5194_tc_10_371_2016">(Proksch a kol., výsledky a diskuse)</SourceLink>
          </p>
          <p>
            <SourceLink id="DOI_10_1038_s41597_023_02273_1">Porovnání při MOSAiC, obrázek 9</SourceLink>,
            spojovalo trubici ETH s odhadem z malých odběrů. Oba postupy
            využívaly vážení a odhad z odběrů přebíral výšku z trubice ETH.
            Kontrola proto nebyla nezávislá ve všech vstupech.
          </p>
          <p>
            U automatických polštářů a vah může pevná sněhová či ledová vrstva přenášet část
            zatížení do okolí. Ruční odběry pomáhají tuto odchylku odhalit.{" "}
            <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 2.4.2)</SourceLink>
          </p>
          <h3>Rozsah výsledků</h3>
          <p>
            Vybraný profil má jeden odběr na interval a neobsahuje kalibrační
            protokoly ani vyčíslení nejistých vstupů. Doložený interval „±“
            proto neuvádíme. Sníh na mořském ledu může obsahovat sůl.
            Počítáme hmotnostní ekvivalent s referencí 1 000 kg/m³,
            bez korekce na slanost a bez určení přesného objemu roztáté slané vody.
            Desetinná místa výsledku vyjadřují výpočet ze zveřejněných vstupů.{" "}
            <SourceLink id="DOI_10_1038_s41597_023_02273_1">(Macfarlane a kol., složení sněhu)</SourceLink>
          </p>
          <p>
            Jeden profil nezastupuje průměrný arktický sníh a jediný bod
            nevystihne závěje i obnažené svahy. Samotná změna vodní hodnoty
            také nerozdělí úbytek mezi odtok, výpar a přenos větrem.
          </p>
          <p>
            U <SourceLink id="DOI_10_1038_s41597_021_00939_2">GlobSnow</SourceLink>{" "}
            kanadská data pro opravy pokrývají roky 1981–2003, pro ověření
            1980–2016. Původ měření i období se překrývají, jejich nezávislost
            proto nelze předpokládat.
          </p>
        </details>

        <h2>Skutečný profil: 12 cm sněhu nad mořským ledem</h2>
        <p>
          Výpočet ukážeme na profilu změřeném při expedici MOSAiC
          <strong> 2. prosince 2019</strong>. Čtyři odběry pokrývají celých
          12 cm sněhu nad mořským ledem. Údaje pocházejí z <SourceLink id="DOI_10_1594_PANGAEA_940214">datového
          souboru Macfarlane a kolegů</SourceLink> zveřejněného v repozitáři PANGAEA.
          Profil jsme vybrali proto, že umožňuje souvislý výpočet od povrchu
          až k podkladu.
        </p>
        <p>
          Veřejný soubor obsahuje <strong>již vypočtené hustoty</strong>{" "}
          a horní a dolní hranice odběrů. Postup proto zopakujeme od těchto
          hodnot. Původní hmotnosti nádobek a sněhu v souboru nejsou, předchozí odběr
          a vážení dokládá popis metody. Všechny čtyři hustoty přebíráme
          v publikované podobě.
        </p>
        <p>
          Nejvyšší interval sahá od 9 do 12 cm nad ledem. Jeho tloušťka je
          tedy 3 cm neboli 0,03 m. Zveřejněná hustota činí 174 kg/m³.
          Součinem hustoty a tloušťky získáme příspěvek tohoto intervalu
          k vodní hodnotě: <InlineMath tex={String.raw`174\times 0{,}03 = 5{,}22`} /> mm vody.
          Tabulka ukazuje stejný výpočet pro všechny čtyři odběry.
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" aria-label="Čtyři intervaly sněhového profilu" tabIndex={0}>
            <table>
              <caption>Všechny čtyři odběry vybraného profilu</caption>
              <thead><tr><th>Výška nad ledem <span className="method-data-output__unit">cm</span></th><th>Hustota <span className="method-data-output__unit">kg/m³</span></th><th>Příspěvek vody <span className="method-data-output__unit">mm</span></th></tr></thead>
              <tbody>{example.result.layers.map((row) => <tr key={row.excelRow}><th scope="row">{number(row.bottomCm)}–{number(row.topCm)}</th><td>{number(row.densityKgM3)}</td><td>{number(row.sweMm)}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
        <p>
          Intervaly pokrývají celou výšku bez mezer a překryvů. Jejich příspěvky
          proto sečteme: <InlineMath tex={String.raw`5{,}22 + 6{,}54 + 8{,}64 + 8{,}10`} />{" "}
          = <strong>{number(example.result.sweMm)} mm SWE</strong>.
          Dvanáct centimetrů sněhu v tomto místě tedy obsahuje 28,5 kg hmoty
          na metr čtvereční, vyjádřených vodní vrstvou vysokou 28,5 mm.
        </p>
        <p>
          Průměrnou hustotu celého profilu získáme vydělením této hmotnosti
          na jednotku plochy celkovou výškou sněhu. Výšku 12 cm převedeme
          na 0,12 m a vypočítáme <InlineMath tex={String.raw`\frac{28{,}5}{0{,}12}`} />{" "}
          = <strong>{number(example.result.meanDensityKgM3)} kg/m³</strong>.
          Tato hustota popisuje celý sloupec. Jednotlivé intervaly se od ní
          liší, jak ukazuje graf.
        </p>
        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Posouvatelný graf hustoty a vodní hodnoty sněhu">
            <Image className="article-figure__media" src="/media/snow-measurements/snow-profile.png"
              alt="Čtyři intervaly sněhu od povrchu k ledu mají hustoty 174, 218, 288 a 270 kg na metr krychlový. Jejich vodní hodnoty jsou 5,22, 6,54, 8,64 a 8,10 mm, dohromady 28,5 mm."
              width={1600} height={1120} sizes="(max-width: 900px) 780px, 900px" unoptimized />
          </div>
          <figcaption>
            Svislá osa obou panelů ukazuje výšku nad ledem. Vlevo je zveřejněná hustota,
            vpravo vypočtená vodní hodnota příslušného třícentimetrového intervalu.
            Barvy spojují stejné odběry v obou panelech. Všechny intervaly mají stejnou tloušťku,
            proto nejvíce vody obsahuje interval 3–6 cm s nejvyšší hustotou.
            Hranice sloupců vymezují odběry, nemusí odpovídat přirozeným vrstvám sněhu.
            Vlastní graf z <SourceLink id="DOI_10_1594_PANGAEA_940214">dat Macfarlane et al. (2022)</SourceLink>,
            data i graf CC BY 4.0, graf Klimatologie.eu.
          </figcaption>
        </figure>
        <details className="method-details">
          <summary>Data a opakování výpočtu</summary>
          <p>
            Vybrána je událost <code>PS122-1_10-11</code>, lokalita
            <code> ds-coring-SYI</code>, na 85,922758° severní šířky
            a 113,808365° východní délky. Výběr zahrnuje řádky 2–5 listu
            Sheet1, se stejným označením vah <code>SensorScale = 1</code>{" "}
            a časem 2019-12-02 07:59:30 zapsaným poskytovatelem.
            Nulová výška odpovídá rozhraní sněhu a ledu.
          </p>
          <p>
            Původní soubor <code>metadata_DensityCutter_removedOvalues.xlsx</code>{" "}
            jsme stáhli 4. října 2026. Jeho nezměněná kopie má zde kratší
            název <code>density.xlsx</code>. V profilu žádnou hodnotu
            neopravujeme, nedoplňujeme ani nevyřazujeme.
          </p>
          <p>
            Stáhněte do jedné složky <a href={`${dataPath}/density.xlsx`} download>původní tabulku</a>,{" "}
            <a href={`${dataPath}/example.json`} download>metadata a výsledky</a> a{" "}
            <a href={`${dataPath}/reproduce.py`} download>výpočetní skript</a>.
            Příkaz <code>python reproduce.py</code> používá Python 3 bez
            doplňkových knihoven. Zkontroluje otisk SHA-256 souboru, shodu
            místa a času, platné hodnoty a návaznost intervalů bez mezer
            a překryvů. Potom vypíše příspěvky vody a jejich součet.
            Pro graf je dostupný <a href={`${dataPath}/plot.py`} download>skript s knihovnou Matplotlib</a>.
          </p>
        </details>
        <details className="method-details">
          <summary>Doplňkový výpočet: příspěvek jednoho centimetru sněhu</summary>
          <p>
            Z průměrné hustoty profilu můžeme odvodit příspěvek vrstvy silné
            1 cm. Jde o vytvořenou ilustraci s touto hustotou, nikoli o další
            odběr. Po převedení tloušťky na 0,01 m vyjde
            <InlineMath tex={String.raw`237{,}5\times 0{,}01 = 2{,}375`} /> mm vody.
            To je přibližně 8,3 % vypočtené zásoby celého profilu.
            Takové množství by ve výsledku chybělo, pokud by se tento úsek
            neproměřil. Výpočet ilustruje citlivost na úplnost profilu,
            neurčuje chybu skutečných odběrů.
          </p>
        </details>

        <section className="method-conclusion">
          <h2>Co nám měření sněhu ukazuje</h2>
          <p>
            Měření výšky a hustoty zpřístupňuje zásobu vody uloženou ve sněhu
            i její rozložení ve svislém profilu. Umožňuje sledovat úbytek
            hmotnosti společně se změnami výšky a zhutňováním pokrývky.
            Opakované odběry na více místech poskytují podklad pro
            sledování sněhové zásoby, hmotnostní bilance ledovců a kontrolu
            družicových odhadů.
          </p>
        </section>
      </div>
    </article>
  );
}
