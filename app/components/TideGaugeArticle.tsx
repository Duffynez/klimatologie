import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import example from "../../public/data/methods/tide-gauges/example.json";

const dataPath = "/data/methods/tide-gauges";
const number = (value: number) => value.toLocaleString("cs-CZ", { minimumFractionDigits: 3, maximumFractionDigits: 3 });

export function TideGaugeArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Relativní hladina</dt><dd>Výška hladiny vzhledem k místní pevnině. Mění se při pohybu vody i při pohybu souše.</dd></div>
          <div><dt>Výšková reference</dt><dd>Nula, od které se počítají výšky. Její návaznost na fyzické body musí být známá i po výměně přístroje.</dd></div>
          <div><dt>Nivelace</dt><dd>Geodetické měření výškového rozdílu mezi body, například mezi značkou na pevnině a uložením čidla.</dd></div>
          <div><dt>GNSS</dt><dd>Globální družicové navigační systémy. Dlouhodobé geodetické měření jejich signálů umožňuje určit pohyb pevniny.</dd></div>
        </dl>
        <p className="article-glossary__note">Číslo o výšce hladiny potřebuje místo, čas, jednotku a výškovou nulu. Bez této nuly nelze porovnávat ani dva údaje ze stejného přístavu.</p>
      </aside>

      <div className="article-prose">
        <h2>Výška vody vůči pobřeží</h2>
        <p className="article-prose__intro">
          Pobřežní vodočet je přístroj, který opakovaně určuje výšku mořské hladiny vzhledem k místní výškové
          referenci. Využívá polohu plováku, tlak vody nebo dobu návratu zvukového či radarového signálu.
          Geodetické měření propojuje čidlo s pevnými značkami na pobřeží. Díky tomuto propojení lze spojovat
          záznamy po opravách a výměnách přístrojů.
        </p>
        <p>
          Výsledkem je <strong>relativní hladina</strong>, tedy poloha vody vůči souši. Jestliže pobřeží klesá,
          voda vůči němu stoupá i při nezměněné poloze mořského povrchu v širším zemském systému.
          Proto se dlouhodobý vodočet doplňuje měřením pohybu pevniny. Rozlišení těchto dvou pohybů
          podrobně rozebírají <SourceLink id="DOI_10_1002_2015rg000502">Wöppelmann a Marcos (2016)</SourceLink>.
          Zde projdeme jednu radarovou sestavu a skutečný převod veřejných dat mezi dvěma výškovými nulami.
          Na výsledky více stanic navazuje článek o <Link href="/pozorovani/gmsl">globální střední hladině moře</Link>.
        </p>

        <h2>Radar nad hladinou</h2>
        <p>
          Příkladem je pulzní radar WaterLog H-3611i, jehož instalaci v americké síti pobřežních stanic
          popisuje <SourceLink id="2013_NOAA_Radar_Installation">příručka NOAA z roku 2013</SourceLink>.
          Zkratka NOAA označuje americký Národní úřad pro oceán a atmosféru.
          Anténa míří svisle na vodu, vysílá krátké mikrovlnné impulzy a přijímá jejich odrazy.
          Elektronika z časového zpoždění odrazu určuje vzdálenost hladiny od přístroje. Čím výše je voda,
          tím kratší je cesta signálu.
        </p>
        <div className="article-formula method-equation"><p>r = c Δt / 2 <span> a </span> h = H − r</p></div>
        <p>
          r je vzdálenost k vodě, Δt doba letu signálu tam a zpět v sekundách a c rychlost jeho šíření ve vzduchu
          v metrech za sekundu, blízká rychlosti světla. Dvojka zohledňuje obě části cesty. H je výška měřicího počátku radaru
          nad zvolenou nulou a h výsledná výška hladiny nad touto nulou. Obě výšky i vzdálenost vyjadřujeme
          v metrech. Rovnice předpokládá svislé zaměření a správně rozpoznaný odraz od vody.
        </p>
        <p>
          H-3611i podle příručky pracuje na frekvenci 26 GHz, tedy 26 miliard kmitů za sekundu,
          má maximální měřicí vzdálenost 40 m a úhel svazku 10°. Tyto hodnoty patří tomuto modelu.
          Měřená plocha se se vzdáleností rozšiřuje, proto musí zůstat mimo svazek pilíře, žebříky
          i jiné konstrukce. Technik kontroluje sílu odrazů v závislosti na vzdálenosti, aby přístroj
          nesledoval pevnou překážku. Radar upevňuje na tuhé rameno, jehož průhyb by se promítl do výšky vody.
        </p>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Od radarového odrazu k relativní výšce hladiny">
            <div><span>1</span><strong>Odraz od vody</strong><small>Anténa vysílá impulz a elektronika změří zpoždění návratu.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Vzdálenost r</strong><small>Čidlo převede odezvu na vzdálenost v metrech a předá ji záznamové jednotce.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Návaznost na souš</strong><small>Nivelace určí H. Rozdíl H − r dá výšku vody nad místní nulou.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Kontrola a průměr</strong><small>Kontrolované krátké záznamy se převádějí na zveřejňované hodnoty.</small></div>
          </div>
          <figcaption>
            Schéma radarové sestavy. Šipky sledují vznik výsledku, geodetické měření ve třetím kroku dodává
            samostatný vstup H. Bez něj známe pouze vzdálenost vody od čidla. Vlastní schéma podle
            <SourceLink id="2013_NOAA_Radar_Installation"> instalační příručky NOAA</SourceLink>.
          </figcaption>
        </figure>

        <h3>Další způsoby sledování vody</h3>
        <p>
          Plovák stoupá a klesá ve studni spojené s mořem. Studna tlumí krátké vlny a pohyb plováku
          přechází na záznam polohy. Historický mechanismus s hodinami a papírem popsal
          <SourceLink id="DOI_10_1098_rstl_1831_0013"> Palmer v roce 1831</SourceLink>.
          Současná provedení mohou polohu převést na digitální údaj snímačem natočení hřídele,
          jak uvádí <SourceLink id="2025_NOAA_Water_Level_Specifications">specifikace NOAA</SourceLink>.
          Průchodnost spojení s mořem a volný pohyb plováku jsou součástí kontroly stanice.
        </p>
        <p>
          Tlakový vodočet využívá tlak vodního sloupce nad čidlem. U probublávacího provedení se měří tlak plynu
          vytlačovaného trubicí do vody. Převod potřebuje hustotu vody a podle konstrukce také odečtení tlaku
          vzduchu. Princip vysvětluje <Link href="/metody/mereni-tlaku-a-hydrostaticke-vysky">měření tlaku a hydrostatické výšky</Link>.
          Akustický vodočet měří dobu návratu zvuku v trubici. Rychlost zvuku závisí na teplotě vzduchu,
          a proto musí sestava zohlednit její změny. Vlastnosti tlakových a akustických přístrojů při
          porovnání s radarem popisuje <SourceLink id="2011_NOAA_Radar_Evaluation">validační zpráva NOAA</SourceLink>.
        </p>

        <h2>Jak udržet stejnou výškovou nulu</h2>
        <p>
          Výškovou referenci uchovávají geodetické značky, například kovové body zasazené do skalního podloží
          nebo stabilních staveb. <strong>Nivelace</strong> měří výškové rozdíly mezi nimi a určeným bodem
          přístroje. U popsaného radaru se lať staví na označené místo montážního límce, které má známou
          vazbu na měřicí počátek čidla. Změnu výšky ramene pak lze odlišit od změny vzdálenosti k vodě.
          Konstrukci límce i měřicí postup dokumentuje <SourceLink id="2013_NOAA_Radar_Installation">NOAA</SourceLink>.
        </p>
        <p>
          Soustava několika značek umožňuje odhalit, že se jedna z nich pohnula. Jejich vzájemná shoda
          však neodhalí společné zvedání celého pobřeží. Při výměně čidla potřebujeme znovu změřit jeho
          výškové připojení a pokud možno získat období souběžného provozu obou přístrojů.
          <SourceLink id="2026_NOAA_Tidal_Datums"> Doporučení NOAA pro spojování výškových soustav</SourceLink>{" "}
          uvádí připojení k více značkám, přednostně ke třem, právě kvůli kontrole jejich stability.
        </p>
        <p>
          Konkrétním dokladem je <SourceLink id="2003_NOAA_San_Francisco_Benchmarks">list výškových bodů stanice San Francisco 9414290</SourceLink>.
          Uvádí popis jejich polohy, označení i výšky. Bod označený „180 1936“ má ve zveřejněném listu
          výšku 3,972 m nad místní referencí MLLW. Jde o referenční výšku v daném listu,
          nikoli o záruku, že se fyzický bod od roku 1936 vůbec nepohnul.
        </p>
        <h3>Střední hladina a přílivová reference</h3>
        <p>
          <strong>MSL</strong>, z anglického <em>mean sea level</em>, je střední hladina.
          Jako výšková reference NOAA představuje průměr hodinových výšek za stanovené období.
          <strong>MLLW</strong>, <em>mean lower low water</em>, je průměr nižších denních odlivových hladin
          za takové období. Obě nuly vycházejí z měření, ale odpovídají jiné části jeho průběhu.
          Jejich <SourceLink id="2026_NOAA_Tidal_Datums">definice</SourceLink> nesmíme zaměnit
          ani mezi sebou, ani za nadmořskou výšku platnou všude na pobřeží.
        </p>
        <p>
          Stálá služba pro střední hladinu moře, zkráceně PSMSL z anglického <em>Permanent Service for Mean Sea Level</em>,
          uchovává pro dlouhodobé záznamy návaznost na <strong>RLR</strong>, revidovanou místní referenci,
          anglicky <em>Revised Local Reference</em>.
          Z dostupných údajů o změnách místní nuly převádí hodnoty na souvislou referenci jednotlivé stanice.
          Její nula se obvykle volí přibližně 7 m pod střední hladinou, aby vycházela kladná čísla.
          Výška 7 000 mm proto sama neznamená sedm metrů nad globální střední hladinou.
          <SourceLink id="WEB_Permanent_Service_for_Mean_S_Revised_Local_Reference_RLR_Definition_25cc4b55"> Definice RLR</SourceLink>{" "}
          také upozorňuje, že méně úplně doložená „metrická“ data nejsou automaticky vhodná pro výpočet trendu.
        </p>

        <h2>Kalibrace a ověření na skutečném moři</h2>
        <p>
          Kalibrace určuje vztah mezi údajem přístroje a referenční hodnotou včetně jejich nejistot.
          Seřízení je následný zásah do odezvy přístroje. Toto rozlišení odpovídá
          <SourceLink id="2012_VIM_Calibration"> mezinárodnímu metrologickému slovníku VIM</SourceLink>.
          U radaru potřebujeme vedle správné výškové nuly ověřit i to, zda správně měří různé vzdálenosti.
        </p>
        <p>
          <SourceLink id="2011_NOAA_Radar_Evaluation">Heitsenrether a Davis (2011)</SourceLink> popsali laboratorní
          zkoušku s pevným terčem například ve vzdálenostech 2, 4, 6, 8 a 12 m. Skutečná poloha terče
          se změří přesnou referencí a radar ji sleduje alespoň minutu v každé poloze. Zpráva požadovala
          rozdíly v mezích ±1 cm s přihlédnutím k nejistotě referenčního měření. Při soustavné závislosti
          chyby na vzdálenosti lze určit korekční vztah, který musí být dále ověřen. Dlouhé sledování
          nehybného terče kontroluje šum, pohyblivý terč časovou odezvu a nádrž s měnící se vodou rozpoznání
          odrazu od hladiny. Výsledek zkoušky pevného terče sám neurčuje chybu na rozvlněném moři.
        </p>
        <p>
          Přímo v terénu porovnali <SourceLink id="2003_Woodworth_Smith_Radar_Bubbler">Woodworth a Smith (2003)</SourceLink>{" "}
          radar OTT Kalesto s tlakovým probublávacím vodočtem u Liverpoolu po dobu delší než rok.
          Po opravě rozdílu měřítka odhadnuté z dat a vyřazení rozdílů větších než 5 cm vyšla kvadratická
          velikost rozdílů patnáctiminutových hodnot 1,50 cm. Jde o odmocninu z průměru čtverců rozdílů,
          takže se kladné a záporné odchylky vzájemně neruší. Přibližný odhad 1 cm pro každý přístroj
          předpokládal podobně velké, nesouvisející chyby obou měření. Za bouří se navíc objevovaly
          rozdíly několika centimetrů.
        </p>
        <p>
          Toto porovnání má vlastní meze. Korekce měřítka byla odhadnuta ze stejného souboru, na kterém se
          hodnotila shoda. Jde tedy o kontrolu po společném vyrovnání, nikoli o ověření korekce na vyhrazených
          nových datech. Přístroje využívaly odlišnou fyziku, ale sledovaly stejnou vodu a místní výškové
          prostředí. Studie odhalila také vliv předpokládané hustoty vody v tlakovém měření a chyby hodin.
          Číslo 1 cm z tohoto pokusu nelze přenést na každý radar ani na naši ukázku ze San Franciska.
        </p>

        <h2>Od krátkých měření k veřejnému údaji</h2>
        <p>
          Přijímač nejprve zaznamenává odezvu na radarový odraz. Záznamová jednotka popsané sestavy už
          dostává přístrojem vypočítanou vzdálenost. Po převodu na výšku nad místní nulou vznikají další
          průměry a kontroly. Pro pobřežní mikrovlnná čidla uvádí
          <SourceLink id="2025_NOAA_Water_Level_Specifications"> specifikace NOAA z prosince 2025</SourceLink>{" "}
          průměrování 360 sekundových vzorků se zkouškou odlehlých hodnot za hranicí tří směrodatných odchylek.
          Každých šest minut se zveřejní jedna hodnota. Směrodatná odchylka vyjadřuje rozptýlení vzorků
          kolem průměru a pomáhá popsat krátké kolísání vody.
        </p>
        <p>
          Veřejné rozhraní NOAA rozlišuje předběžné a ověřené hodnoty. U ověřených dat příznaky
          označují například odhadnutou hodnotu, příliš dlouhé opakování stejného údaje, nezvyklou
          rychlost změny nebo překročení povoleného rozsahu. Význam jednotlivých polí uvádí
          <SourceLink id="2026_NOAA_Water_Level_API"> dokumentace datového rozhraní</SourceLink>.
          Před průměrováním proto kontrolujeme čas, jednotky, referenci, mezery a stav kvality.
          Výpadek během vysoké vody by mohl snížit průměr, i kdyby všechny zbývající údaje byly správné.
        </p>

        <h2>Skutečný příklad: jeden den a dvě reference</h2>
        <p>
          Vybrali jsme první den posledního úplného roku, <strong>1. leden 2025</strong>, ve stanici
          San Francisco 9414290. Výběr tedy necílí na rekordní příliv nebo bouři.
          <SourceLink id="2025_NOAA_San_Francisco_Day"> Veřejná odpověď NOAA</SourceLink> obsahuje 240 hodnot
          po šesti minutách od 00:00 do 23:54 v koordinovaném světovém čase UTC. V požadavku se tato časová
          volba jmenuje <code>gmt</code>. Přístup a uložení vstupů proběhly 4. října 2026.
        </p>
        <p>
          Všechny hodnoty mají stav <code>q=v</code>, tedy ověřeno, a čtyři nulové příznaky
          <code> f=0,0,0,0</code>. Žádná hodnota nechybí a žádnou nedoplňujeme.
          Jde již o zpracovanou hladinu v metrech. Veřejný
          <SourceLink id="2026_NOAA_San_Francisco_Sensors"> seznam čidel stanice</SourceLink> uvádí mikrovlnné
          měření, ale samotná historická odpověď neobsahuje výrobní číslo čidla ani radarové odrazy.
          Náš příklad proto ověřuje převod a průměrování od zveřejněných šestiminutových údajů.
          Převod samotného radarového signálu je zde doložen metodickou dokumentací.
        </p>
        <p>
          <SourceLink id="2026_NOAA_San_Francisco_Datums">Metadata stanice</SourceLink> uvádějí pro období
          1983–2001 výšku MLLW 1,822 m a MSL 2,773 m nad staniční nulou.
          Rozdíl je 2,773 − 1,822 = <strong>0,951 m</strong>. Hodnota vztažená k vyšší nule MSL
          je proto o 0,951 m menší než hodnota vůči MLLW. Tyto reference nejsou znovu vypočtené z našeho jediného dne.
        </p>
        <div className="article-formula method-equation"><p>h<sub>MSL</sub> = h<sub>MLLW</sub> − 0,951 m</p></div>
        <p>
          Index u h určuje použitou nulu. Například v 00:00 vyjde 0,035 − 0,951 = −0,916 m.
          Záporná hodnota znamená vodu pod referenční úrovní, nikoli neplatné měření.
          Pro kontrolu jsme stáhli i stejný produkt přímo vůči MSL. Přepočet souhlasí se všemi 240
          zveřejněnými hodnotami. Obě odpovědi ovšem vycházejí ze stejného měření, takže tato shoda
          ověřuje převod reference, nikoli nezávisle správnost přístroje.
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" aria-label="Čtyři hodnoty přepočtu hladiny" tabIndex={0}>
            <table>
              <caption>Čtyři kontrolní okamžiky z 240 hodnot</caption>
              <thead><tr><th>Čas UTC</th><th>Vůči MLLW <span className="method-data-output__unit">m</span></th><th>Vůči MSL <span className="method-data-output__unit">m</span></th></tr></thead>
              <tbody>{example.result.checkRows.map((row) => <tr key={row.time}><th scope="row">{row.time}</th><td>{number(row.mllwM)}</td><td>{number(row.mslM)}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/tide-gauges/san-francisco-datums.png"
            alt="Dvě stejně tvarované křivky hladiny v San Francisku 1. ledna 2025, lišící se pouze svislým posunem 0,951 metru podle výškové reference."
            width={1600} height={1120} sizes="(max-width: 900px) 100vw, 900px" unoptimized />
          <figcaption>
            Vodorovná osa ukazuje čas UTC, svislá výšku vody v metrech nad zvolenou nulou.
            Modrá plná čára používá MLLW, hnědá přerušovaná MSL. Čáry spojují šestiminutové hodnoty
            téhož měření, žádná není druhým přístrojem. Jejich odstup 0,951 m je rozdíl referencí.
            Vlastní graf z <SourceLink id="2025_NOAA_San_Francisco_Day">dat NOAA</SourceLink>, Klimatologie.eu, CC BY 4.0.
          </figcaption>
        </figure>
        <p>
          Aritmetický průměr všech 240 rovnoměrně rozložených hodnot je {number(example.result.meanMllwM)} m
          vůči MLLW a {number(example.result.meanMslM)} m vůči MSL. Nejnižší zveřejněná hodnota dne
          byla −0,358 m v 02:18, nejvyšší 1,973 m v 19:30 vůči MLLW. Rozdíl maxima a minima
          činí {number(example.result.rangeM)} m v obou referencích. Jsou to krajní šestiminutové údaje,
          nikoli výšky jednotlivých krátkých vln.
        </p>
        <p>
          Průměr tohoto jednoho dne není klimatický trend ani oficiální dlouhodobá MSL.
          Zůstává v něm vliv přílivového průběhu a dalších změn hladiny daného dne.
          Dlouhodobé hodnocení potřebuje mnoho měsíců až desetiletí, souvislou referenci, kontrolu výpadků
          a zohlednění pohybu souše. Výpočet zde záměrně končí u převodu a popisu konkrétního dne.
        </p>
        <details className="method-details">
          <summary>Data, přesný výběr a opakování výpočtu</summary>
          <p>
            Uloženy jsou původní odpovědi rozhraní bez přepisu. Soubor s metadaty obsahuje úplné adresy
            požadavků, datum přístupu a kontrolní otisky SHA-256, které ověřují shodu souborů.
            Skript vyžaduje správnou stanici, metry, čas UTC, referenční období, všech 240 časů a ověřené
            hodnoty bez příznaků. Při mezeře skončí chybou. Záporné platné výšky zachová.
          </p>
          <p>
            Stáhněte do jedné složky <a href={`${dataPath}/water-level-mllw.json`} download>měření vůči MLLW</a>,{" "}
            <a href={`${dataPath}/water-level-msl.json`} download>měření vůči MSL</a>,{" "}
            <a href={`${dataPath}/datums.json`} download>výškové reference</a>,{" "}
            <a href={`${dataPath}/example.json`} download>metadata a výsledky</a> a{" "}
            <a href={`${dataPath}/reproduce.mjs`} download>výpočetní skript</a>.
            Příkaz <code>node reproduce.mjs</code> v Node.js 22 nebo novějším provede kontrolu souborů a výpočet.
            Pro graf je k dispozici <a href={`${dataPath}/plot.py`} download>skript pro Python s Matplotlib</a>.
          </p>
          <p>
            Převod počítá v celých milimetrech, aby jej neovlivnilo zaokrouhlování desetinných čísel v počítači.
            Průměr ponechává ve výstupu více číslic, ale článek jej zaokrouhluje na milimetry.
            Dodatečná desetinná místa nevyjadřují vyšší přesnost měření.
          </p>
        </details>

        <h2>Co omezuje přesnost výsledku</h2>
        <p>
          <SourceLink id="2025_NOAA_Water_Level_Specifications">Specifikace NOAA</SourceLink> uvádí pro primární
          pobřežní mikrovlnné měření minimální rozlišení 0,001 m a odhad přesnosti vůči referenci ±0,02 m
          pro jednotlivý zveřejňovaný údaj, pro měsíční průměr ±0,005 m. Dokument u těchto čísel neurčuje
          pravděpodobnost pokrytí. Nejde tedy o doložený 95% interval našeho denního průměru a měsíční
          údaj nelze přenést na jeden den. Samotná odpověď datového rozhraní pro náš příklad úplnou nejistotu neposkytuje.
        </p>
        <p>
          Pole <code>s</code> v prvním záznamu má hodnotu 0,052 m. Podle
          <SourceLink id="2026_NOAA_Water_Level_API"> dokumentace</SourceLink> jde o směrodatnou odchylku
          krátkých vstupních vzorků, nikoli o celkovou nejistotu výšky. Zahrnuje skutečné rychlé kolísání vody.
          Není správné vydávat ji za chybu průměru nebo z ní bez znalosti časové závislosti vzorků
          vypočítat velmi úzký interval. Společnou chybu výškové nuly průměrování neodstraní.
        </p>
        <p>
          Velikost chyb v terénu ovlivňuje rozvlnění vody, odrazy od překážek, pohyb držáku a správnost času.
          Laboratorní terč tyto podmínky plně nenapodobí. Liverpoolské porovnání ukázalo bouřkové rozdíly
          až kolem 5 cm, ale bez souběžného měření vln nedovolilo jejich příčinu úplně rozdělit mezi oba
          přístroje. Pro náš den nepřebíráme žádnou takovou korekci. Původní
          <SourceLink id="2003_Woodworth_Smith_Radar_Bubbler"> studie</SourceLink> dokládá důvod pro terénní
          kontrolu, nikoli univerzální velikost chyby.
        </p>

        <h2>Jak se odděluje pohyb pevniny</h2>
        <p>
          Dlouhodobý geodetický přijímač systémů GNSS, tedy globálních družicových navigačních systémů,
          sleduje polohu antény v zemském referenčním systému. K vodočtu musí být připojen měřením výškového
          rozdílu a toto připojení se musí kontrolovat. Přijímač o několik kilometrů dál může stát na
          jinak se pohybujícím podloží. Také krátký geodetický záznam nemusí reprezentovat celé století
          staršího měření hladiny. Tyto meze shrnují <SourceLink id="DOI_10_1002_2015rg000502">Wöppelmann a Marcos</SourceLink>.
        </p>
        <div className="article-formula method-equation"><p>v<sub>moře</sub> = v<sub>relativní</sub> + v<sub>souše</sub></p></div>
        <p>
          v označuje rychlost výškové změny za stejné období, například v milimetrech za rok.
          Kladné znaménko znamená pohyb vzhůru. Ilustračně: při relativním růstu 4 mm za rok
          a poklesu souše o 2 mm za rok vyjde růst mořského povrchu 4 + (−2) = 2 mm za rok.
          Tato vytvořená čísla pouze vysvětlují znaménka. Nejsou výsledkem pro San Francisco.
          Výpočet potřebuje, aby geodetické měření skutečně vystihovalo pohyb místa vodočtu.
        </p>

        <h2>Od záznamu přílivu ke klimatologii</h2>
        <p>
          <SourceLink id="DOI_10_1098_rstl_1831_0013">Henry R. Palmer (1831)</SourceLink> popsal přístroj,
          ve kterém plovák a hodinový mechanismus společně vykreslovaly průběh hladiny na posouvaný papír.
          Jeho původní práce obsahuje konstrukční výkresy a vysvětluje potřebu soustavného sledování
          při změnách přístavních staveb v Londýně. Automatický zápis umožnil uchovat průběh mezi
          ručními odečty i v noci. Digitalizace a pozdější bezkontaktní čidla změnily způsob záznamu,
          potřeba uchovat výškovou referenci však zůstala.
        </p>
        <p>
          Klimatologické využití ukazuje <SourceLink id="DOI_10_1038_s41586_020_2591_3">práce Frederikseho a kolegů z roku 2020</SourceLink>.
          Z pobřežních záznamů rekonstruovali vývoj hladiny od roku 1900. Před spojením stanic zohlednili
          pohyb pevniny i prostorově rozdílné změny hladiny a přenesli nejistoty do výsledku.
          Vodočty zde zajišťují dlouhý místní záznam, další postupy jeho propojení mezi oblastmi.
          Globální výsledek proto nevzniká prostým průměrem všech přístavů.
        </p>
        <p>
          Pobřežní měření poskytuje také kontrolu
          <Link href="/metody/radarova-a-laserova-altimetrie"> družicové altimetrie</Link>, která určuje výšku
          hladiny z oběžné dráhy. Srovnání vyžaduje sladit výškový systém, období i oblast.
          Pokud je rozdíl družice a vodočtu sám použit k odhadu pohybu souše, nelze následnou shodu
          opraveného vodočtu s toutéž družicí považovat za plně nezávislý test. Práce Frederikseho a kolegů
          využívá vedle GNSS právě i tento typ informace, a proto je původ každé opravy podstatný.
        </p>
        <div className="method-conclusion">
          <h2>Co metoda umožňuje zjistit</h2>
          <p>
            Pobřežní vodočet s doloženou výškovou referencí umožňuje určit, jak se mění výška vody vůči
            konkrétnímu pobřeží od přílivového cyklu po dlouhodobý vývoj. Návaznost na geodetické body
            zachovává srovnatelnost při výměnách přístrojů. Měření pohybu souše pak dovoluje odlišit její
            podíl na relativní změně. Teprve propojení takto prověřených místních záznamů s dalšími daty
            podpírá tvrzení o větších oblastech a o oceánu jako celku.
          </p>
        </div>
        <h2>Prameny, data a licence</h2>
        <p>
          Citace v textu vedou na veřejné plné studie, původní Palmerův článek, technické příručky NOAA
          a dokumentaci dat. Data příkladu pocházejí z NOAA CO-OPS a jejich uložené kopie lze porovnat
          s původními požadavky. Graf a schéma vytvořila Klimatologie.eu pod licencí CC BY 4.0.
          Skripty umožňují opakovat výpočet i vytvoření grafu.
        </p>
      </div>
    </article>
  );
}
