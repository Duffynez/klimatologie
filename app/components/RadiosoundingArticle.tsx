import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import { Equation, InlineMath } from "./Equation";
import example from "../../public/data/methods/radiosounding/example.json";

const dataPath = "/data/methods/radiosounding";
const number = (value: number, digits = 1) => value.toLocaleString("cs-CZ", {
  minimumFractionDigits: digits, maximumFractionDigits: digits,
});

export function RadiosoundingArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Výškový profil</dt><dd>Průběh veličiny, například teploty, podle výšky nebo tlaku vzduchu.</dd></div>
          <div><dt>Tlaková hladina</dt><dd>Místa se stejným tlakem vzduchu. Jejich výška se mění podle stavu atmosféry.</dd></div>
          <div><dt>Geopotenciální výška</dt><dd>Výšková souřadnice zohledňující tíhové pole Země. Udává se v geopotenciálních metrech, značka gpm.</dd></div>
          <div><dt>UTC</dt><dd>Koordinovaný světový čas. Umožňuje porovnávat termíny měření z různých zemí.</dd></div>
        </dl>
        <p className="article-glossary__note">Radiosonda měří postupně během letu. Vítr ji přitom unáší, takže jednotlivé výšky obvykle odpovídají různým místům i časům.</p>
      </aside>

      <div className="article-prose">
        <h2>Jak radiosondáž měří atmosféru</h2>
        <p className="article-prose__intro">
          Radiosondáž je měření vlastností atmosféry pomocí radiosondy, přístroje zavěšeného
          pod balonem. Radiosonda během výstupu opakovaně měří teplotu a vlhkost vzduchu,
          podle provedení také tlak, a své údaje vysílá rádiem na zem. Z její polohy a pohybu
          získáváme výšku a vítr. Uspořádáním těchto údajů podle výšky vzniká <strong>výškový profil</strong>,
          tedy záznam toho, jak se vlastnosti atmosféry mění směrem vzhůru.
        </p>
        <p>
          Podrobně si postup vysvětlíme na sondě Vaisala RS41-SGP, která má čidla teploty,
          vlhkosti i tlaku. Balon ji dopravuje do vyšších vrstev, elektronika odečítá čidla
          a pozemní přijímač shromažďuje vysílaná data. Provedení sondy a zpracování jejích údajů
          popisuje <SourceLink id="2023_GRUAN_RS41_TD8">metodická dokumentace Sommera a spoluautorů
          z roku 2023</SourceLink>.
        </p>

        <h3>Přístroj pod balonem</h3>
        <p>
          Balon je naplněný vodíkem nebo heliem. Tyto plyny mají menší hustotu než okolní vzduch,
          takže vztlak může zvednout balon i zavěšenou sondu. Při výstupu tlak okolního vzduchu
          klesá a plyn uvnitř balonu se rozpíná. Obal se postupně napíná, až praskne. Sonda potom
          klesá, zpravidla s padákem. Pozemní anténa přijímá její údaje během letu, jak ukazuje
          <SourceLink id="WEB_NOAA_Radiosonde_Observation_27e1f005"> popis provozu americké
          meteorologické služby</SourceLink>.
        </p>
        <p>
          Teplotní a vlhkostní čidlo vyčnívají na raménku z těla sondy přímo do proudícího vzduchu.
          Elektronika, baterie a přijímač družicové navigace jsou chráněné uvnitř. Dlouhý závěs
          odděluje sondu od balonu, aby čidla měřila vzduch co nejméně ovlivněný jeho povrchem.
          Při stoupání kolem čidel stále proudí nový vzduch z právě procházené vrstvy.
          <SourceLink id="2023_GRUAN_RS41_TD8"> Kapitola 2 dokumentace</SourceLink> zachycuje
          uspořádání i jednotlivé součásti.
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media"
            src="/media/methods/radiosounding/noaa-atomic-radiosonde-launch.png"
            alt="Vypouštění bílého balonu a malé radiosondy s vyčnívajícím raménkem z paluby výzkumné lodi Ronald H. Brown."
            width={1666} height={916} sizes="(max-width: 700px) 100vw, 770px" unoptimized />
          <figcaption>
            Vypouštění radiosondy z lodi Ronald H. Brown při výzkumu atmosféry a oceánu ATOMIC
            v lednu 2020. Balon vlevo vynáší malý přístroj, který právě pouští výzkumnice vpravo.
            Z bílé skříňky vyčnívá raménko s čidly vystavenými vzduchu.
            Foto: Richard Marchbanks, CIRES/NOAA. Zdroj:{" "}
            <SourceLink id="2020_NOAA_ATOMIC_Photos">fotogalerie ATOMIC</SourceLink>,
            {" "}<SourceLink id="WEB_NOAA_Using_Content_FAQ">podmínky použití NOAA</SourceLink>.
          </figcaption>
        </figure>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Cesta od vzduchu kolem sondy k výškovému profilu">
            <div><span>1</span><strong>Sonda pod balonem</strong><small>Čidla reagují na vzduch v právě procházené vrstvě.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Elektronika a vysílač</strong><small>Odečty čidel a údaje o poloze putují rádiem na zem.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Pozemní zpracování</strong><small>Kalibrační převody a korekce poskytují hodnoty měřených veličin.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Profil atmosféry</strong><small>Teplota, vlhkost a vítr jsou přiřazené k výšce a času.</small></div>
          </div>
          <figcaption>
            Vlastní schéma podle <SourceLink id="2023_GRUAN_RS41_TD8">GRUAN-TD-8, kapitol 2 a 7</SourceLink>.
            Šipky ukazují předání odečtů elektronice, rádiový přenos a sestavení profilu.
            Část převodů může proběhnout už v sondě, jejich rozdělení mezi přístroj a pozemní software
            závisí na systému.
          </figcaption>
        </figure>

        <h3>Jak získáme teplotu, vlhkost a tlak</h3>
        <p>
          Každé čidlo převádí působení okolního vzduchu na změnu elektrické vlastnosti, kterou umí
          elektronika odečíst. Aby z ní vznikl údaj ve stupních nebo procentech, potřebujeme
          <strong> kalibraci</strong>. V laboratoři vystavíme čidlo známým podmínkám a jeho odečty
          porovnáme s referenčními přístroji. Z těchto porovnání stanovíme vztah, podle kterého
          pak převádíme odečet při letu na měřenou veličinu.
        </p>
        <p>
          Referenční teploměry a vlhkoměry výrobce mají doložený řetězec porovnání až k jednotkám
          mezinárodní soustavy SI. Tato <strong>metrologická návaznost</strong> umožňuje spojit údaj
          konkrétní sondy se společnou měřicí stupnicí. Každé porovnání přitom zahrnuje vlastní
          nejistotu. <SourceLink id="2017_Vaisala_RS41">Dokumentace výrobce, kapitoly 2 a 3</SourceLink>,
          popisuje použité reference. <SourceLink id="2012_VIM_Calibration">Metrologický slovník
          VIM</SourceLink> odlišuje kalibraci, která vztah zjišťuje, od seřízení, které odezvu
          přístroje mění.
        </p>
        <p>
          Teplotní čidlo RS41 využívá platinu, jejíž elektrický odpor s oteplením roste.
          Odpor vyjadřuje, jak silně materiál brání průchodu elektrického proudu. Elektronika
          odečte odpor a podle kalibračního vztahu mu přiřadí teplotu čidla. Protože čidlo
          přijímá a odevzdává teplo okolnímu vzduchu, jeho teplota sleduje teplotu procházené
          vrstvy. Samotný princip podrobněji vysvětluje
          <Link href="/metody/odporova-termometrie-a-termistory"> odporová termometrie</Link>,
          provedení sondy <SourceLink id="2017_Vaisala_RS41">kapitola 2 dokumentace RS41</SourceLink>.
        </p>
        <p>
          Vlhkostní čidlo zjišťuje <strong>relativní vlhkost</strong>, značenou RH z anglického
          <em> relative humidity</em>. Vodní pára tvoří část vzduchu a přispívá k jeho tlaku.
          Relativní vlhkost porovnává tento příspěvek s tlakem páry při nasycení za téže teploty.
          Při nasycení je pára v rovnováze s kapalnou vodou, do které se vrací stejné množství
          molekul, jaké se z ní vypařuje. Poměr vyjádřený v procentech říká, jak blízko je vzduch
          tomuto stavu. Tlak při nasycení s teplotou roste, a proto údaj o relativní vlhkosti
          vždy patří k určité teplotě.
        </p>
        <p>
          Čidlo obsahuje tenkou vrstvu polymeru, látky tvořené dlouhými molekulovými řetězci,
          mezi dvěma vodivými vrstvami. Polymer přijímá a uvolňuje vodu podle relativní
          vlhkosti okolí. Přijatá voda mění elektrickou
          <strong> kapacitu</strong>, tedy množství náboje, které se v čidle uloží při daném napětí.
          Elektronika změnu kapacity odečte a kalibrační vztah ji převede na relativní vlhkost
          u povrchu čidla. Podrobnější vysvětlení nabízí
          <Link href="/metody/hygrometrie"> hygrometrie</Link>.
        </p>
        <p>
          Vlhkostní prvek RS41 se za letu vyhřívá, aby na něm voda nekondenzovala a nenamrzala.
          Je proto teplejší než okolní vzduch a má vlastní teplotní čidlo. Software z jeho teploty
          a relativní vlhkosti určí tlak vodní páry. Ten potom porovná s tlakem při nasycení
          za teploty okolního vzduchu, kterou dodá platinový teploměr. Tak získá relativní
          vlhkost procházené vrstvy. Z týchž údajů lze dopočítat rosný bod, tedy teplotu,
          při níž by ochlazovaný vzduch za stejného tlaku a obsahu páry dosáhl nasycení.
          Tento převod popisuje <SourceLink id="2017_Vaisala_RS41">kapitola 3 dokumentace RS41</SourceLink>.
        </p>
        <p>
          Tlakové čidlo varianty RS41-SGP má tenkou křemíkovou membránu nad uzavřenou dutinou.
          Tlak okolního vzduchu membránu prohýbá. Tím se mění vzdálenost vodivých ploch v čidle,
          a tedy i jejich elektrická kapacita. Převod určený při známých tlacích a teplotách
          poskytne tlak vzduchu. V meteorologii jej běžně udáváme v hektopascalech, značka hPa,
          přičemž jeden hektopascal je sto pascalů.
          <SourceLink id="2023_GRUAN_RS41_TD8"> Oddíl 2.1.3</SourceLink> popisuje konstrukci tohoto čidla.
        </p>
        <p>
          Před vypuštěním projde sonda pozemní přípravou. Obsluha ověří její funkci, ohřev odstraní
          nečistoty z vlhkostního prvku a umožní zkontrolovat jeho odezvu při téměř nulové relativní
          vlhkosti. Tlakové čidlo se porovná s barometrem, přístrojem pro měření tlaku na stanici.
          Do systému se zadá poloha
          stanice a výšky referenčních přístrojů, aby pozemní a letová měření používala společný
          výškový základ. Průběh přípravy uvádí
          <SourceLink id="2023_GRUAN_RS41_TD8"> oddíl 3.2 dokumentace</SourceLink>.
        </p>

        <h3>Kde sonda měří a jak určuje vítr</h3>
        <p>
          Ke každému odečtu potřebujeme znát místo měření. Přijímač družicového systému GPS,
          anglicky <em>Global Positioning System</em>, sleduje časování signálů několika družic.
          Z doby jejich cesty a známých poloh družic určuje polohu sondy. Opakovaná určení polohy
          poskytují zeměpisnou šířku, délku a výšku podél celé dráhy letu.
        </p>
        <p>
          Výška z GPS se nejprve vztahuje k referenčnímu elipsoidu, hladké ploše, která matematicky
          přibližuje tvar Země. Software ji pomocí modelu střední mořské hladiny převede na
          nadmořskou výšku. V meteorologických souborech se navíc často používá
          <strong> geopotenciální výška</strong>. Ta upravuje výškovou souřadnici podle toho,
          že tíhové zrychlení není ve všech zeměpisných šířkách a výškách stejné.
          Díky tomu lze při výpočtech s tíhou vzduchu používat jednu standardní hodnotu
          tíhového zrychlení. Udává se v geopotenciálních metrech, značka gpm. Je blízká běžné
          nadmořské výšce a rovněž se vztahuje k hladině moře, nikoli k místu startu.
          Převody popisuje <SourceLink id="2023_GRUAN_RS41_TD8">dokumentace na straně 23</SourceLink>.
        </p>
        <p>
          Vítr získáváme z vodorovného pohybu sondy. Balon se nechává unášet okolním vzduchem,
          a proto jeho posun za známý čas poskytuje rychlost a směr proudění. Software odděluje
          plynulý pohyb soupravy od kývání sondy na závěsu a od drobných výkyvů navigačních údajů.
          Svislý pohyb má jiný význam: výstup zajišťuje i vlastní vztlak balonu, takže rychlost
          stoupání není přímo rychlostí svislého proudění vzduchu.
        </p>
        <p>
          Konkrétní výpočet větru se liší podle zpracování. Software výrobce využívá spolu
          s polohou také Dopplerův jev, změnu přijímané frekvence družicových signálů způsobenou
          vzájemným pohybem. Referenční síť výškových měření GRUAN,
          <em> GCOS Reference Upper-Air Network</em>, počítá vítr ze změn vyhlazených souřadnic za čas.
          Vyhlazení potlačí rychlé výkyvy a zachová pomalejší pohyb soupravy.
          <SourceLink id="2023_GRUAN_RS41_TD8"> Strana 24 a oddíl 4.4.3</SourceLink> rozlišují
          oba postupy. GRUAN je součástí globálního systému sledování klimatu a poskytuje také
          podrobný postup zpracování s vyčíslenými nejistotami.
        </p>

        <h3>Jak vznikne hotový profil</h3>
        <p>
          Pozemní software spojuje přijaté odečty čidel s časem a polohou. Součástí převodu na
          teplotu vzduchu je i oprava ohřevu čidla slunečním zářením, nazývaná radiační korekce.
          Její základ vzniká v laboratoři: čidlo se ozařuje při různém tlaku a proudění
          a zjišťuje se, o kolik se ohřeje nad teplotu vzduchu. Při letu software tento vztah
          použije spolu s odhadem osvětlení a větrání čidla. Odhadnutý příspěvek slunečního
          ohřevu od naměřené teploty odečte.
        </p>
        <p>
          Další zpracování se týká rychlosti odezvy. Čidlo potřebuje určitý čas, aby se přizpůsobilo
          nové vrstvě, kterou sonda právě prolétá. Referenční postup GRUAN využívá laboratorně
          zjištěnou dobu reakce vlhkoměru k opravě tohoto zpoždění. Údaj přiřazený dané výšce
          tak lépe odpovídá místní vlhkosti. Použité vztahy, vstupy a pořadí výpočtů jsou popsány
          v <SourceLink id="2023_GRUAN_RS41_TD8">oddílech 4.1, 4.2 a kapitole 7</SourceLink>.
        </p>
        <p>
          Výsledkem je soubor, jehož jednotlivé záznamy spojují čas, výšku, polohu a naměřené
          či dopočítané veličiny. Zvolíme-li teplotu a vyneseme ji proti výšce, dostaneme
          teplotní profil. Ukáže, ve kterých vrstvách se směrem vzhůru ochlazuje a kde naopak
          otepluje. Stejným způsobem lze číst změny vlhkosti nebo větru.
          Jednotlivé body vznikají postupně během letu na místech, kam sondu unáší vítr.
        </p>
        <p>
          K porovnání dvou výšek můžeme vypočítat průměrnou změnu teploty na kilometr.
          Od teploty v horním bodě odečteme teplotu v dolním bodě a rozdíl ΔT vydělíme
          rozdílem výšek ΔH. Jestliže teplotní rozdíl vyjádříme ve stupních Celsia a výškový
          rozdíl v kilometrech, podíl <InlineMath tex={String.raw`\frac{\Delta T}{\Delta H}`} /> má jednotku °C/km. Záporný výsledek označuje
          ochlazování směrem vzhůru, kladný oteplování. U geopotenciální výšky odpovídá kilometr
          tisíci gpm. Tento podíl charakterizuje celou vybranou vrstvu, uvnitř ní se sklon
          profilu může měnit.
        </p>
        <p>
          Místo výšky může svislou polohu určovat tlak. <strong>Tlaková hladina</strong> je
          úroveň se zvoleným tlakem vzduchu. Její výška se mění podle stavu atmosféry,
          takže umožňuje porovnávat měření při stejném tlaku i tehdy, když se nacházejí
          v různých nadmořských výškách. Převody vysvětluje
          <Link href="/metody/mereni-tlaku-a-hydrostaticke-vysky"> měření tlaku a hydrostatické výšky</Link>.
        </p>

        <h3>Využití opakovaných sondáží</h3>
        <p>
          Jednotlivý profil zachycuje stav atmosféry během letu. Pro klimatologii spojujeme
          opakované výstupy z mnoha stanic a porovnáváme stejné tlakové hladiny či výšky
          ve srovnatelných termínech. Tak lze sledovat dlouhodobé změny popsané v článcích
          <Link href="/pozorovani/stratosfericke-ochlazovani"> Teplota stratosféry</Link> a
          <Link href="/pozorovani/narust-vlhkosti"> Vlhkost atmosféry</Link>.
        </p>
        <p>
          <SourceLink id="WEB_NOAA_Integrated_Global_Radiosonde_Archive_IGRA_ab0ea6c1">Integrovaný
          globální radiosondový archiv, IGRA</SourceLink>, shromažďuje měření z různých stanic
          a kontroluje jejich kvalitu. Pro dlouhodobá porovnání na tuto kontrolu navazuje
          homogenizace. Ta pomocí historie stanic a porovnání měření hledá a upravuje skoky
          způsobené změnami přístrojů nebo provozu. Postup rozvádí
          <Link href="/metody/kontrola-kvality-a-homogenizace"> kontrola kvality a homogenizace</Link>.
        </p>
        <p>
          Konkrétní klimatické zpracování představili
          <SourceLink id="DOI_10_1029_2005jd006169"> Freeová a spoluautoři v roce 2005</SourceLink>.
          Z měření 85 stanic sestavili oblastní průměry teplotních odchylek na třinácti
          tlakových hladinách pro období 1958–2004. Odchylka vyjadřuje rozdíl proti
          zvolenému dlouhodobému průměru, takže ukazuje, jak se teplota v čase mění.
          Výsledkem je soubor RATPAC,
          <em> Radiosonde Atmospheric Temperature Products for Assessing Climate</em>, určený
          ke sledování vývoje teploty atmosféry. Práce dokládá výběr vstupů a úpravy
          nehomogenit. Sonda zde poskytuje místní měření, jejich souhrn a následné zpracování
          umožňují sledovat změny klimatu.
        </p>

        <h3>Rádiový přenos a provedení bez tlakového čidla</h3>
        <p>
          Rádiový přenos umožnil získávat údaje už během letu balonu. Jedno z raných praktických
          řešení popsali <SourceLink id="1938_Diamond_Radiometeorography">Diamond, Hinman a Dunmore
          v roce 1938</SourceLink>. Jejich přístroj převáděl odezvu čidel na změny frekvence
          signálu, kterým byl upravován rádiový přenos. Tlakem ovládaný přepínač postupně
          zapojoval jednotlivá čidla a přidával značky pro tlakovou stupnici. Pozemní přístroj
          signál zapisoval do grafu, sledování směru přicházejícího vysílání pomáhalo určit
          vítr. Studie obsahuje zapojení, kalibraci i skutečný záznam letu. Dnešní sondy
          používají digitální přenos a družicovou navigaci.
        </p>
        <p>
          Družicové určení výšky umožňuje také konstrukci bez tlakového čidla, například RS41-SG.
          Výchozí tlak dodá barometr na stanici. Z něj se postupuje vzhůru po tenkých vrstvách,
          jejichž tloušťku známe z navigace a teplotu a vlhkost z čidel.
          Výpočet předpokládá <strong>hydrostatickou rovnováhu</strong>: rozdíl tlaku mezi
          dolní a horní hranicí vrstvy vyvažuje tíhu vzduchu uvnitř. Z vlastností vrstvy
          tak můžeme určit, o kolik v ní tlak klesne.
        </p>
        <p>
          Teplota a vlhkost vstupují do výpočtu proto, že ovlivňují hustotu vzduchu, a tedy
          hmotnost dané vrstvy. Jejich společný vliv vyjadřuje <strong>virtuální teplota</strong>.
          Je to teplota, kterou by měl suchý vzduch se stejným tlakem a hustotou jako měřený
          vlhký vzduch. Díky tomuto přepočtu můžeme použít vztah pro suchý vzduch i tehdy,
          když obsahuje vodní páru.
        </p>
        <p>
          Pro vrstvu s přibližně stálou virtuální teplotou platí v geopotenciální výšce:
        </p>
        <Equation tex={String.raw`p_1 = p_0\times\exp\!\left[-\frac{g_0\,\Delta H}{R_d\,T_v}\right]`} />
        <p>
          Tlaky <InlineMath tex={String.raw`p_0`} /> a <InlineMath tex={String.raw`p_1`} /> patří
          dolní a horní hranici vrstvy a dosazují se ve stejných jednotkách. ΔH je rozdíl
          geopotenciálních výšek v gpm. Standardní tíhové zrychlení g₀ má hodnotu 9,80665 m/s²
          a měrná plynová konstanta suchého vzduchu R<sub>d</sub> přibližně 287,05 J/(kg·K).
          Tato konstanta spojuje v plynovém zákonu tlak, hustotu a teplotu suchého vzduchu.
          T<sub>v</sub> je virtuální teplota v kelvinech. Teplotu v kelvinech získáme přičtením
          273,15 k údaji ve stupních Celsia.
          Značka exp označuje exponenciální funkci. Záporný výraz v jejím argumentu zajistí,
          že při postupu vzhůru dostaneme menší tlak.
        </p>
        <p>
          Vypočtený tlak na horní hranici se stane výchozím tlakem pro další vrstvu.
          Postup opakujeme s její teplotou a vlhkostí až do konce profilu.
          <SourceLink id="2023_GRUAN_RS41_TD8"> Oddíl 4.4.2 dokumentace GRUAN</SourceLink>
          {" "}uvádí výpočet s geometrickou výškou a místním tíhovým zrychlením, který vychází
          ze stejné rovnováhy. Obě provedení sondy tedy poskytují tlakový profil,
          jedno z tlakového čidla a druhé výpočtem z výšky a vlastností vzduchu.
        </p>

        <h2>Nejistoty a ověření měření</h2>
        <p>
          Výsledek nejvíce ovlivňují ohřev čidel sluncem, rychlost jejich reakce a podmínky letu.
          Korekce tyto vlivy omezují, jemné přechody mezi vrstvami však mohou zůstat vyhlazené.
          <SourceLink id="DOI_10_5194_amt_9_3115_2016"> Porovnání dvaceti společných letů RS41 a RS92
          v Oklahomě</SourceLink> zjistilo pod 28 km velikost mediánu teplotního rozdílu nejvýše 0,13 °C.
          Medián je prostřední hodnota rozdílů mezi sondami po jejich seřazení v dané výšce. Takové porovnání
          ověřuje vzájemnou shodu za podmínek kampaně, společnou chybu obou přístrojů může přehlédnout.
        </p>
        <details className="method-details">
          <summary>Podrobnosti o přesnosti, rozlišení a porovnání sond</summary>
          <p>
            Ohřev sluncem závisí na záření, tlaku a proudění kolem čidla. V chladu se navíc
            zpomaluje reakce vlhkoměru. Sekundový přenos dat proto neznamená, že sonda rozliší
            každou tenkou vrstvu. Záleží i na rychlosti výstupu, vyhlazování a výpadcích příjmu.
            Hodnoty převedené na standardní tlakové hladiny mohou být interpolované,
            tedy odhadnuté mezi sousedními záznamy.
            <SourceLink id="2023_GRUAN_RS41_TD8"> GRUAN, oddíly 4.1 a 4.2</SourceLink>, dokládá
            zkoušky odezvy i nejistoty korekcí.
          </p>
          <p>
            <SourceLink id="2017_Vaisala_RS41">Výrobce v tabulkách 2.1 a 3.1 dokumentace z roku 2017</SourceLink>
            {" "}uvádí rozsah teploty −90 až +60 °C, rozlišení 0,01 °C a rozšířenou nejistotu
            za letu 0,3 °C do 16 km a 0,4 °C výše. Pro vlhkost uvádí rozsah 0–100 % RH,
            rozlišení 0,1 procentního bodu a rozšířenou nejistotu čtyři procentní body
            při −60 až +60 °C. Procentní bod je jednotka rozdílu dvou procentních údajů.
            Faktor pokrytí <InlineMath tex={String.raw`k = 2`} /> znamená dvojnásobek standardní
            nejistoty, za obvyklých statistických předpokladů přibližně 95% pokrytí.
            Jde o parametry tohoto výrobku, nikoli všech radiosond.
          </p>
          <p>
            Stabilitu kalibrace po skladování prověřují pozemní kontroly.
            <SourceLink id="2023_GRUAN_RS41_TD8"> GRUAN v oddílu 3.2</SourceLink> přidává porovnání
            se samostatnými referencemi v ustálené vlhkostní komoře. Výsledky používá
            k posouzení kvality a nejistoty, nikoli k dalšímu seřízení. Chování v chladném
            a řídkém vzduchu ověřují laboratorní zkoušky a skutečné lety.
          </p>
          <p>
            <SourceLink id="DOI_10_5194_amt_9_3115_2016">Jensen a spoluautoři</SourceLink> porovnávali
            sondy v Oklahomě 3.–8. června 2014. Vedle teploty zjistili, že přes 90 % vlhkostních
            údajů pod 28 km se lišilo nejvýše o dva procentní body RH. Větší rozdíly po průletu
            oblaky s kapalnými kapkami spojili s ochlazováním navlhlého čidla odpařováním.
            Tato letová data byla oddělená od kalibračních dat. Přístroje měly vlastní čidla
            a zpracování, sdílely však balon, okolní vzduch a část pozemního přijímače včetně
            navigační antény. Výsledky letní kampaně neověřují všechny typy sond a podmínky.
          </p>
          <p>
            U tlaku vypočteného z výšky přispívají k nejistotě také pozemní barometr, navigace
            a teplotní měření. U výpočtu změny teploty na kilometr potřebujeme nejistoty obou
            teplot a výšek i jejich společné chyby. Pražský soubor použitý níže tyto podklady
            neobsahuje, proto nejistotu výsledku nevyčíslujeme. Počet desetinných míst
            vyjadřuje způsob zápisu, nikoli přesnost měření.
          </p>
          <p>
            Při sestupu se mění větrání a orientace sondy i procházená část atmosféry.
            Produkt RS41-GDP.1 popsaný v <SourceLink id="2023_GRUAN_RS41_TD8">dokumentaci GRUAN</SourceLink>
            {" "}proto zahrnuje jen výstup. <SourceLink id="2025_CHMU_Radiosonde_Format">ČHMÚ zveřejňuje
            výstup a sestup odděleně</SourceLink>.
          </p>
          <p>
            V klimatických záznamech mohou změny čidel, korekcí, času vypouštění nebo stanoviště
            vytvářet umělé skoky. <SourceLink id="DOI_10_1029_2005jd006169">Autoři RATPAC</SourceLink>
            {" "}upozorňují také na neúplnou historii stanic. Shoda produktů využívajících stejné
            sondáže není nezávislou kontrolou čidel. Pro porovnání s družicemi je navíc
            nutné sladit čas, oblast a výškový rozsah: sonda měří podél úzké dráhy,
            družicový přístroj může zachycovat záření z rozsáhlejší vrstvy.
          </p>
        </details>

        <h2>Skutečný profil z Prahy-Libuše</h2>
        <p>
          Na měření z <strong>1. ledna 2025</strong> si ukážeme, jak číst teplotní profil
          a vypočítat změnu teploty ve vybrané vrstvě. Použijeme vzestupnou část letu
          z <SourceLink id="2025_CHMU_Prague_Radiosonde_January">měsíčního archivu Českého
          hydrometeorologického ústavu, ČHMÚ</SourceLink>. Sonda odstartovala v 11:15:10 UTC,
          tedy koordinovaného světového času. Pozorování je zařazené k termínu 12:00 UTC,
          jednotlivé údaje však mají vlastní časy podle toho, kdy sonda danou vrstvou prolétla.
          Soubor obsahuje 5 059 záznamů a končí po 87 minutách a 34 sekundách ve výšce
          34 806,7 gpm.
        </p>
        <p>
          Pracujeme se zveřejněnými fyzikálními veličinami, které už prošly zpracováním
          a měsíční validací ČHMÚ. Soubor neuvádí typ konkrétní sondy, její elektrické odečty,
          kalibrační koeficienty ani verzi původního zpracování. Popis RS41 výše tedy vysvětluje
          reprezentativní přístroj, nedokládá vybavení tohoto letu. Zopakujeme výběr a výpočet
          ze zveřejněných hodnot.
        </p>
        <p>
          Tabulka vybírá osm okamžiků letu. Každý řádek spojuje čas od vypuštění, geopotenciální
          výšku a teplotu v daném místě. Úplný profil obsahuje podle
          <SourceLink id="2025_CHMU_Radiosonde_Format"> popisu formátu ČHMÚ</SourceLink>
          {" "}také tlak, vlhkost, rosný bod, vítr a zeměpisné souřadnice.
        </p>
        <figure className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" aria-label="Vybrané hodnoty pražského profilu" tabIndex={0}>
            <table>
              <thead><tr><th scope="col">Čas od startu (min:s)</th><th scope="col">Výška (gpm)</th><th scope="col">Teplota (°C)</th></tr></thead>
              <tbody>
                {example.selectedRows.map((row) => (
                  <tr key={row.elapsedSeconds}>
                    <th scope="row">{Math.floor(row.elapsedSeconds / 60)}:{String(row.elapsedSeconds % 60).padStart(2, "0")}</th>
                    <td>{number(row.heightGpm)}</td><td>{number(row.temperatureC)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption>
            Výběr osmi původních záznamů ze vzestupné části letu. Časy označují jednotlivá pozorování,
            nikoli desetiminutové průměry. Hodnoty jsme neinterpolovali. Zdroj:
            <SourceLink id="2025_CHMU_Prague_Radiosonde_January"> ČHMÚ, Praha-Libuš, leden 2025</SourceLink>.
          </figcaption>
        </figure>
        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/radiosounding/prague-temperature-profile.png"
            alt="Teplotní profil z Prahy-Libuše 1. ledna 2025. Teplota nejprve převážně klesá, kolem třinácti tisíc geopotenciálních metrů dosahuje minima a výše kolísá. Vyznačeny jsou záznamy v desáté a dvacáté minutě."
            width={1280} height={1440} sizes="(max-width: 700px) 100vw, 770px" unoptimized
          />
          <figcaption>
            Vlastní graf ze všech 5 059 záznamů <SourceLink id="2025_CHMU_Prague_Radiosonde_January">ČHMÚ</SourceLink>.
            Vodorovná osa ukazuje teplotu ve °C, svislá geopotenciální výšku v tisících gpm. Zelená
            křivka spojuje zveřejněné hodnoty bez dodatečného vyhlazení. Oranžové body a světlý pás
            vymezují vrstvu použitou ve výpočtu níže. Časové mezery mezi záznamy nejsou všude stejné.
          </figcaption>
        </figure>
        <p>
          Graf ukazuje celý teplotní profil. Pro výpočet zvolíme vrstvu mezi desátou a dvacátou
          minutou letu, vyznačenou oranžovými body. V dolním bodě byla teplota −10,1 °C
          a výška 4 086,4 gpm. V horním bodě sonda naměřila −37,9 °C ve výšce 8 224,2 gpm.
          Rozdíl teplot je tedy −27,8 °C a rozdíl výšek 4 137,8 gpm, neboli
          4,1378 geopotenciálního kilometru. Podílem obou rozdílů dostaneme:
        </p>
        <Equation tex={[
          String.raw`\frac{\Delta T}{\Delta H} = \frac{-27{,}8}{4{,}1378}`,
          String.raw`\approx -6{,}72\,\frac{{}^\circ\mathrm{C}}{\mathrm{km}}`,
        ]} />
        <p>
          Výsledek <strong>−6,72 °C/km</strong> říká, že ve vybrané vrstvě připadal na kilometr
          výšky průměrný pokles teploty o 6,72 °C. ΔT označuje rozdíl horní a dolní teploty,
          ΔH rozdíl jejich výšek. Jde o prostorovou změnu podél dráhy sondy během tohoto letu.
        </p>
        <p>
          Dráhu můžeme sledovat i v zeměpisných souřadnicích. Od startu do posledního záznamu
          se délka změnila z 14,44690° na 17,65844° východní délky a šířka z 50,00780°
          na 50,24151° severní šířky. Sonda tedy během výstupu postupovala převážně na východ.
          Profil spojuje měření z těchto postupně navštívených míst.
        </p>
        <details className="method-details">
          <summary>Data a skript pro zopakování výpočtu</summary>
          <p>
            Stáhněte tři soubory do jedné složky a spusťte <code>node reproduce.mjs</code> v Node.js 22
            nebo novějším. Skript nepotřebuje síť ani další knihovny. Ověří kontrolní součet původního
            CSV, počet záznamů, časy a číselné hodnoty. Vypíše tabulkový výběr i výsledek výpočtu.
          </p>
          <ul>
            <li><a href={`${dataPath}/25010112_Praha_ascent_111510.csv`} download>Úplný původní profil ČHMÚ</a></li>
            <li><a href={`${dataPath}/example.json`} download>Původ, výběr, verze formátu a kontrolní součty</a></li>
            <li><a href={`${dataPath}/reproduce.mjs`} download>Výpočet a kontrola vstupů</a></li>
          </ul>
          <p>
            Původní soubor <code>25010112_Praha_ascent_111510.csv</code> odpovídá
            <SourceLink id="2025_CHMU_Radiosonde_Format"> formátu ČHMÚ 1.0 z 1. dubna 2025</SourceLink>.
            CSV ukládá hodnoty oddělené čárkami. Zachováváme jej beze změny včetně původních konců řádků.
            Kontrolní součty SHA-256 v metadatech
            určují obsah tohoto souboru i celého měsíčního archivu staženého 4. října 2026.
            Změněný vstup skript odmítne. Chybějící údaje nenahrazuje nulou a neodhaduje chybějící
            časové body. Kontroly slouží tomuto příkladu a nenahrazují validaci poskytovatele.
          </p>
          <p>
            Zdroj dat: Český hydrometeorologický ústav, opendata.chmi.cz.
            <SourceLink id="2026_CHMU_Open_Data_Licence"> ČHMÚ uvádí licenci Creative Commons BY 4.0</SourceLink>.
            Původní soubor poskytujeme se stejným uvedením původu. Tabulka a graf jsou naše zpracování.
            Graf lze stáhnout také jako <a href="/media/radiosounding/prague-temperature-profile.svg" download>vektorový obrázek</a>.
          </p>
        </details>
        <div className="method-conclusion">
          <h2>Co radiosondáž umožňuje zjistit</h2>
          <p>
            Radiosondáž zpřístupňuje svislou stavbu atmosféry. Ukazuje, jak se teplota,
            vlhkost a vítr mění mezi vrstvami, které přízemní přístroj neměří. Opakované
            srovnatelné výstupy umožňují sledovat proměny těchto vrstev v čase a po spojení
            měření z více stanic také dlouhodobý vývoj atmosféry nad širšími oblastmi.
          </p>
        </div>
      </div>
    </article>
  );
}
