import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import example from "../../public/data/methods/conductometry/example.json";

const dataPath = "/data/methods/conductometry";
const number = (value: number, digits = 4) => value.toLocaleString("cs-CZ", {
  minimumFractionDigits: digits, maximumFractionDigits: digits,
});

export function ConductometryArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Elektrická vodivost</dt><dd>Vlastnost látky určující, jak snadno v ní elektrické pole vyvolá proud. U vody závisí na rozpuštěných iontech, teplotě a tlaku.</dd></div>
          <div><dt>Iont</dt><dd>Částice s elektrickým nábojem. Pohyb iontů přenáší elektrický proud v mořské vodě.</dd></div>
          <div><dt>Praktická salinita</dt><dd>Bezrozměrné číslo odvozené z vodivosti podle stupnice PSS-78. Její hodnota potřebuje také teplotu a tlak měřené vody.</dd></div>
          <div><dt>CTD</dt><dd>Souprava pro měření vodivosti, teploty a tlaku vody. Anglická zkratka znamená Conductivity, Temperature, Depth. Hloubka se počítá z tlaku.</dd></div>
        </dl>
        <p className="article-glossary__note">Stejně slaná voda může mít při jiné teplotě výrazně jinou vodivost. Proto čidlo vodivosti pracuje společně s teploměrem a tlakoměrem.</p>
      </aside>

      <div className="article-prose">
        <h2>Jak proud procházející vodou vypovídá o jejím složení</h2>
        <p className="article-prose__intro">
          Konduktometrie je měření elektrické vodivosti látky. V mořské vodě využívá pohyb iontů,
          tedy částic s elektrickým nábojem, které vznikají rozpuštěním solí. Elektrické pole
          jejich pohyb usměrňuje a vytváří proud. Z odezvy vody na přiložené napětí přístroj určí
          vodivost. Společně s teplotou a tlakem z ní můžeme vypočítat salinitu, veličinu
          vyjadřující slanost vody podle stanovené stupnice.
        </p>
        <p>
          Podrobně projdeme čidlo Sea-Bird SBE 4C používané v lodních soupravách CTD.
          Zkratka pochází z anglického Conductivity, Temperature, Depth, tedy vodivost,
          teplota a hloubka. Poslední údaj souprava odvozuje z tlaku. Navazujeme proto na
          <Link href="/metody/odporova-termometrie-a-termistory"> měření teploty</Link> a
          <Link href="/metody/mereni-tlaku-a-hydrostaticke-vysky"> měření tlaku a hydrostatické výšky</Link>.
          Veřejný kalibrační protokol nám umožní sledovat převod frekvence čidla až na praktickou salinitu.
        </p>

        <h2>Od elektrod k frekvenci</h2>
        <p>
          Při měření mezi elektrodami záleží na vlastnostech vody i na geometrii prostoru,
          kterým proud prochází. Delší a užší cesta klade větší elektrický odpor.
          Vodivost vody proto získáme teprve po zohlednění rozměrů měřicí části.
          Její jednotkou je siemens na metr, značka S/m. Siemens vyjadřuje převrácenou hodnotu
          elektrického odporu v ohmech. Vodivost tak umožňuje porovnávat vzorky nezávisle
          na rozměrech použité měřicí nádobky.
        </p>
        <p>
          <SourceLink id="2025_SeaBird_SBE4_Datasheet">Technický list SBE 4 z května 2025</SourceLink>{" "}
          popisuje skleněnou průtočnou trubici se třemi platinovými elektrodami.
          Dvě krajní elektrody jsou propojené. Odpor vody mezi nimi a prostřední elektrodou
          ovlivňuje frekvenci elektronického obvodu, který vytváří pravidelné střídavé kmity.
          Přístroj zaznamenává frekvenci, tedy počet kmitů za sekundu, nikoli počet gramů soli.
          Kilohertz, značka kHz, znamená tisíc kmitů za sekundu.
        </p>
        <p>
          Pro SBE 4 výrobce uvádí rozsah 0 až 7 S/m a výstup přibližně 2,5 až 7,5 kHz.
          Rozlišení 0,00004 S/m se vztahuje k soupravě SBE 911plus při 24 odečtech za sekundu.
          Počáteční přesnost ±0,0003 S/m je jiný údaj než rozlišení. Samotné rychlé odečítání
          nezaručuje stejně rychlou odezvu: s čerpadlem dosáhne čidlo podle technického listu
          63 % konečné změny přibližně za 0,060 sekundy.
        </p>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Od mořské vody k praktické salinitě">
            <div><span>1</span><strong>Voda v měřicí trubici</strong><small>Proud nesou ionty. Odezvu ovlivňuje složení vody, její teplota i tlak.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Frekvence čidla</strong><small>Odpor vody mění kmitání obvodu. Elektronika spočítá kmity.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Vodivost v S/m</strong><small>Kalibrační vztah převede signál a opraví změny rozměrů trubice.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Praktická salinita</strong><small>Výpočet PSS-78 přidá teplotu a tlak vody. Výsledkem je bezrozměrné číslo.</small></div>
          </div>
          <figcaption>
            Vlastní schéma podle <SourceLink id="2025_SeaBird_SBE4_Datasheet">dokumentace SBE 4</SourceLink>{" "}
            a <SourceLink id="2015_TEOS10_SP_From_C">výpočtu PSS-78</SourceLink>.
            Šipky oddělují fyzikální odezvu, kalibraci přístroje a převod na jinou veličinu.
            Teplota a tlak vstupují do posledních dvou kroků pokaždé z jiného důvodu.
          </figcaption>
        </figure>
        <p>
          V soupravě <SourceLink id="2010_SeaBird_9plus_Manual">SBE 9plus</SourceLink> žene čerpadlo
          vodu kolem teploměru a vodivostním čidlem. Zpracování musí přiřadit oběma údajům
          tentýž vzorek. Ve vrstvě s rychlou změnou teploty by spojení vodivosti jedné vody
          s teplotou jiné vytvořilo falešnou špičku salinity. Další oprava zohledňuje teplo
          předávané stěnou vodivostní trubice. Časové posunutí údajů a tepelná odezva měřicí
          části patří k postupu popsanému v manuálu, nikoli ke změnám samotného oceánu.
        </p>
        <div className="method-comparison" aria-label="Další provedení konduktometrie">
          <section>
            <h3>Laboratorní salinometr</h3>
            <p>Analyzuje odebraný vzorek v řízené teplotě a porovnává jej se standardní mořskou vodou. Odpadá pohyb čidla mezi vrstvami oceánu. Přibývá však riziko změny vzorku při odběru a skladování.</p>
          </section>
          <section>
            <h3>Indukční čidlo</h3>
            <p>Proud ve vodě vyvolává proměnné magnetické pole cívky. Další cívka snímá jeho účinek. Měření tak využívá jinou konstrukci než elektrody uvnitř trubice, ale stále potřebuje kalibraci a kontrolu geometrie měření.</p>
          </section>
        </div>
        <p>
          Laboratorní analýzu lodních vzorků dokládá
          <SourceLink id="DOI_10_7289_v5dr2sgz"> zpráva NOAA z plavby EN551 v únoru 2015</SourceLink>.
          Indukční přístroj RBR a elektrodová čidla Sea-Bird porovnává
          <SourceLink id="DOI_10_1175_jtech_d_24_0051_1"> studie Thierryové a spoluautorů z roku 2025</SourceLink>.
          SBE 4C je zde naším podrobným příkladem. Jeho koeficienty ani specifikace nelze přenášet na tyto další přístroje.
        </p>

        <h2>Jakou salinitu z vodivosti získáme</h2>
        <p>
          Praktická salinita, značená S<sub>P</sub>, je číslo stanovené stupnicí PSS-78,
          anglicky Practical Salinity Scale 1978. Stupnice vychází z poměru vodivostí vzorku
          a referenčního roztoku chloridu draselného za stejných podmínek. Poměru jedna
          při referenční teplotě 15 °C a atmosférickém tlaku přiřazuje hodnotu 35.
          <SourceLink id="DOI_10_1109_joe_1980_1145448"> Lewisova původní práce z roku 1980</SourceLink>{" "}
          vysvětluje definici i laboratorní pokusy s ředěnou a zahušťovanou standardní mořskou vodou.
        </p>
        <p>
          V oceánu se teplota a tlak liší od referenčních podmínek. Algoritmus proto nejprve
          zohlední jejich vliv na vodivost a pak použije empirický vztah určený laboratorními
          měřeními. S<sub>P</sub> nemá jednotku. Zápis „PSU“, který bývá i na přístrojových
          protokolech, nepředstavuje fyzikální jednotku a v našem výsledku jej nepoužíváme.
          Hodnota 35 rovněž není přesným tvrzením, že kilogram konkrétní vody obsahuje 35 gramů solí.
        </p>
        <p>
          Pro výpočty hustoty a obsahu tepla používá soustava TEOS-10, tedy termodynamický
          popis mořské vody z roku 2010, <strong>absolutní salinitu S<sub>A</sub></strong> v gramech
          na kilogram. Ta vyjadřuje hmotnostní podíl rozpuštěného materiálu.
          <SourceLink id="2015_TEOS10_SA_From_SP">Převod z praktické salinity</SourceLink>{" "}
          používá také polohu a tlak, aby odhadl odchylky složení od standardní mořské vody.
          Samotná vodivost nerozpozná všechny změny poměrů rozpuštěných látek. Čísla
          praktické a absolutní salinity proto nelze bez převodu zaměňovat.
        </p>

        <h2>Kalibrace a skutečný převod signálu</h2>
        <p>
          Kalibrace stanovuje vztah mezi odečtem přístroje a referenčními hodnotami včetně
          jejich nejistot. Seřízení mění odezvu přístroje. Toto rozlišení přebíráme z
          <SourceLink id="2012_VIM_Calibration"> metrologického slovníku VIM</SourceLink>.
          U vodivostního čidla se určí koeficienty převodu frekvence, které odpovídají jeho
          elektrickému obvodu a skutečným rozměrům měřicí trubice.
        </p>
        <p>
          <SourceLink id="2025_SeaBird_SBE4_Datasheet">Sea-Bird popisuje kalibraci v lázni</SourceLink>,
          z níž se při každém bodu odebere vzorek. Laboratorní salinometr Guildline Autosal
          jej porovná se standardní mořskou vodou IAPSO. Tato zkratka označuje Mezinárodní
          asociaci pro fyzikální vědy o oceánech. Návaznost výsledku vede přes tuto referenci,
          salinometr a teploměr lázně až ke kalibrovanému čidlu. Každý článek tohoto řetězce
          má vlastní nejistotu. Pouhá malá odchylka od proložené křivky celý řetězec neprověří.
        </p>
        <p>
          Použijeme <SourceLink id="2014_SeaBird_C3860_Calibration">protokol čidla číslo 3860
          z 15. října 2014</SourceLink> ve veřejném archivu Atlantické oceánografické a
          meteorologické laboratoře amerického Národního úřadu pro oceán a atmosféru, zkráceně
          NOAA AOML. Obsahuje šest bodů v lázni a jeden nulový bod. Nulový bod uchováváme
          v datech, ale nepočítáme z něj salinitu. Jeho měřicí prostředí protokol samostatně
          nepopisuje. Pro zbývajících šest bodů rekonstruujeme laboratorní výpočet s tlakem
          p = 0 dbar. Je to zvolená referenční podmínka, nikoli doložený odečet barometru.
        </p>
        <p>
          Převod frekvence na vodivost pro tento snímač zní:
        </p>
        <p className="article-formula method-equation">C = (g + h f² + i f³ + j f⁴) / [10 (1 + a t + b p)]</p>
        <p>
          C je vodivost v S/m, f frekvence v kHz, t teplota vody ve °C a p tlak v dbar.
          Decibar, značka dbar, je 10 000 pascalů. V navazujícím výpočtu PSS-78 znamená p
          absolutní tlak po odečtení standardní atmosféry 10,1325 dbar. Nula tedy odpovídá
          referenčnímu atmosférickému tlaku. Koeficienty g, h, i a j určují kalibrační
          křivku konkrétního čidla. Písmena a a b zde označují koeficienty CTcor a CPcor
          z protokolu, které opravují tepelnou roztažnost a stlačení skleněné trubice.
          Jde o změny přístroje. Vliv teploty a tlaku na vodivost samotné vody zohlední až
          následující výpočet salinity.
        </p>
        <p>
          Vytištěnému vzorci v protokolu chybí faktor 10 ve jmenovateli. Uvedený tvar
          dokládá <SourceLink id="DOI_10_7289_v5dr2sgz">zpráva NOAA, strana 13</SourceLink>,
          pro stejné sériové číslo, datum a koeficienty. Odpovídá také tabulkovým vodivostem.
          Frekvence v tabulce už jsou v kHz, takže je znovu nedělíme tisícem.
        </p>
        <figure className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" aria-label="Šest skutečných bodů kalibrace vodivosti" tabIndex={0}>
            <table>
              <thead><tr><th scope="col">Teplota (°C)</th><th scope="col">Frekvence <span className="method-data-output__unit">(kHz)</span></th><th scope="col">Vypočtená vodivost <span className="method-data-output__unit">(S/m)</span></th><th scope="col">Vypočtená S<sub>P</sub></th><th scope="col">Referenční S<sub>P</sub> lázně</th></tr></thead>
              <tbody>
                {example.rows.map((row) => (
                  <tr key={row.step}><th scope="row">{number(row.temperatureC)}</th><td>{number(row.frequencyKhz, 5)}</td><td>{number(row.calculatedSm, 5)}</td><td>{number(row.SP)}</td><td>{number(row.bathSP)}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption>
            Vlastní přepočet šesti vodních bodů <SourceLink id="2014_SeaBird_C3860_Calibration">kalibrace SBE 4C 3860</SourceLink>.
            Teplota, frekvence a referenční salinita pocházejí z protokolu. Dva prostřední
            výsledkové sloupce vznikly naším výpočtem z jeho zaokrouhlených vstupů.
            Počet desetinných míst zachycuje výpočet a není údajem o jeho nejistotě.
          </figcaption>
        </figure>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/conductometry/conductivity-temperature.png"
            alt="Šest kalibračních bodů. Při zvýšení teploty přibližně z −1 na 32,5 °C roste vodivost z 2,792 na 6,048 S/m, zatímco vypočtená praktická salinita všech bodů zůstává mezi 34,634 a 34,643."
            width={1600} height={1040} sizes="(max-width: 700px) 100vw, 770px" unoptimized />
          <figcaption>
            Vodorovná osa ukazuje teplotu lázně, svislá vypočtenou vodivost.
            Zelené body jsou skutečné kalibrační odečty převedené na vodivost, spojnice
            pouze vedou mezi nimi. Vodivost se mezi krajními body zvětšila přibližně
            2,17krát, ačkoli se salinita měnila jen málo. Nápisy u krajních bodů udávají
            jejich vypočtenou praktickou salinitu, která nemá jednotku.
          </figcaption>
        </figure>
        <p>
          Sledujme bod při 15,0000 °C. Frekvence 5,96800 kHz dává po dosazení koeficientů
          vodivost přibližně 4,252531 S/m. Protokol tiskne 4,25254 S/m, rozdíl je přibližně
          0,000009 S/m. Zpětný výpočet ze zaokrouhlených koeficientů a frekvencí proto
          nemusí obnovit poslední tištěnou číslici.
        </p>
        <p>
          Další kroky stanovuje <SourceLink id="2015_TEOS10_SP_From_C">dokumentace výpočtu
          gsw_SP_from_C v soustavě TEOS-10, příloha E</SourceLink>. Teplotu na stupnici ITS-90
          převedeme pro starší vztah na stupnici IPTS-68 násobením 1,00024, tedy na 15,0036 °C.
          Obě značky označují mezinárodní teplotní stupnice z let 1990 a 1968. Vodivost vydělíme
          referenční hodnotou 4,2914 S/m, která odpovídá S<sub>P</sub> = 35 při 15 °C na stupnici
          IPTS-68 a p = 0. Dostaneme poměr přibližně 0,9909426.
        </p>
        <p>
          Tento poměr výpočet opraví o vliv teploty a tlaku vody. V našem bodě je tlaková
          oprava rovna jedné a po teplotní opravě vychází poměr 0,9908609.
          Dosazením jeho odmocniny do polynomu PSS-78, tedy součtu mocnin s laboratorně
          určenými koeficienty, včetně malé teplotní opravy výsledné salinity získáme
          <strong> S<sub>P</sub> ≈ 34,6424</strong>. Reference lázně byla 34,6427.
          Jejich rozdíl asi −0,0003 popisuje tento kalibrační bod. Nepředstavuje nezávislou
          zkoušku ani úplnou nejistotu budoucího měření v moři.
        </p>
        <details className="method-details">
          <summary>Koeficienty, data a zopakování výpočtu</summary>
          <p>
            Z protokolu přebíráme g = −10,3209641, h = 1,48289601,
            i = −0,000612897590 a j = 0,000127926748.
            CTcor je 3,25 × 10⁻⁶ na °C a CPcor −9,57 × 10⁻⁸ na dbar.
            Hodnoty g až j jsou číselné koeficienty pro uvedené jednotky f a C.
            Nelze je použít beze změny s frekvencí zadanou v Hz.
          </p>
          <p>
            První tři soubory uložte do společné složky a spusťte <code>node reproduce.mjs</code>{" "}
            v Node.js 22 nebo novějším. Skript zkontroluje přepis a vypíše šest výsledků
            včetně mezikroků. Používá původní rozsah PSS-78, tedy salinitu mezi 2 a 42,
            teplotu na stupnici IPTS-68 od −2 do 35 °C a tlak od 0 do 10 000 dbar.
            Mimo něj výpočet odmítne. Úplná knihovna GSW, anglicky Gibbs SeaWater,
            je soubor programů pro výpočty vlastností mořské vody. Má navíc rozšíření pro nízké salinity.
          </p>
          <ul>
            <li><a href={`${dataPath}/calibration.csv`} download>Přepis všech sedmi řádků a číselných sloupců protokolu</a></li>
            <li><a href={`${dataPath}/example.json`} download>Původ dat, jednotky, koeficienty a výsledky</a></li>
            <li><a href={`${dataPath}/reproduce.mjs`} download>Výpočet od frekvence k praktické salinitě</a></li>
            <li><a href={`${dataPath}/plot.py`} download>Skript grafu pro Python s knihovnou Matplotlib</a></li>
          </ul>
          <p>
            Metadata uvádějí přístup 4. října 2026 a kontrolní součty SHA-256 přepisu i původního
            PDF pro rozpoznání změn souboru. Vstupní data, výběr i předpoklad p = 0 jsou zachované.
            Program znovu neodhaduje kalibrační koeficienty. Naše funkce přijímá vodivost v S/m,
            zatímco původní gsw_SP_from_C v mS/cm, tedy milisiemensech na centimetr.
            Před použitím původní funkce by se vodivost v S/m násobila deseti.
          </p>
        </details>

        <h2>Kontrola v oceánu a nezávislost výsledků</h2>
        <p>
          Odběr vody vedle ponořené soupravy umožňuje porovnat profil s laboratorním
          salinometrem. <SourceLink id="DOI_10_7289_v5dr2sgz">Zpráva z plavby EN551</SourceLink>{" "}
          uvádí konkrétní standardní mořskou vodu IAPSO, šarži P-157, a kontroly salinometru
          během analýz. Tento postup prověřuje jiné čidlo v jiných podmínkách.
          Oba výsledky však sdílejí stupnici a návaznost na standardní mořskou vodu.
          Vzorky použité k opravě lodního čidla navíc nejsou nezávislými daty pro ověření téže opravy.
        </p>
        <p>
          <SourceLink id="DOI_10_1175_jtech_d_24_0051_1">Thierryová a spoluautoři v roce 2025</SourceLink>{" "}
          porovnali čtyři plováky, z nichž každý nesl dvě nebo tři soupravy CTD.
          Zahrnuli elektrodová čidla Sea-Bird a indukční RBR a profily do 4 000 dbar.
          Společná platforma omezila rozdíly způsobené měřením jiné vody. Zároveň vyšla
          najevo tlaková závislost odchylek salinity. Autoři ji opravili pomocí lodního
          referenčního profilu. Po opravách byly rozdíly salinity mezi soupravami pod
          500 dbar menší než 0,004.
        </p>
        <p>
          Toto porovnání ukazuje shodu různých konstrukcí i jejich původní nedostatky.
          Konečná shoda však zčásti vychází ze společného lodního měření použitého k nastavení
          oprav. Sama neprokazuje stejně malou absolutní chybu všech čidel.
          Studie navíc zkoušela jiné modely než náš laboratorní SBE 4C. Výsledek nelze
          vydávat za ověření čidla číslo 3860.
        </p>

        <h2>Co omezuje přesnost a dlouhodobou srovnatelnost</h2>
        <p>
          Usazeniny, povlak organismů nebo bublina mění cestu proudu v měřicí části.
          Pomalý posun odezvy se označuje jako drift. Kontrola před nasazením a po návratu
          pomáhá určit, zda se převod změnil. Vyčištění může odezvu změnit znovu,
          proto potřebujeme uchovat pořadí údržby a kalibrací. Postup a omezení stability
          popisuje <SourceLink id="2010_SeaBird_9plus_Manual">manuál SBE 9plus</SourceLink>.
          V silně znečištěné nebo biologicky aktivní vodě nelze automaticky předpokládat
          stabilitu udanou výrobcem pro příznivější podmínky.
        </p>
        <p>
          K nejistotě salinity přispívá vodivost, teplota, tlak, jejich časové sladění a
          kalibrační reference. V klidné lázni odpadají rychlé přechody mezi vrstvami.
          V ostrém teplotním rozhraní může rozhodovat sladění čidel, při dlouhém nasazení
          drift a v hluboké vodě tlaková oprava. Náš protokol neuvádí úplný rozpočet nejistoty.
          Z jeho šesti vodních bodů proto nelze stanovit univerzální přesnost salinity
          pro všechny tyto situace.
        </p>
        <p>
          Praktický význam driftu ukázali <SourceLink id="DOI_10_5194_essd_15_383_2023">Wongová,
          Gilson a Cabanesová v roce 2023</SourceLink> na datech programu Argo dostupných
          v dubnu 2022. Popsali zvýšený výskyt posunu k vyšší salinitě u části plováků
          nasazených po roce 2015 a způsob následných oprav. Kontrola s odstupem času
          porovnává profily s lodními a prověřenými plovákovými měřeními a posuzuje stabilitu
          v čase. Autoři výslovně upozorňují, že část referenčních dat slouží i ke korekcím,
          takže výsledné porovnání není zcela nezávislé. Studie popisuje určitý historický
          soubor, nikoli stav všech dnešních dat Argo.
        </p>
        <p>
          Pro klimatickou analýzu proto záleží na verzi a příznacích kvality dat.
          <SourceLink id="WEB_International_Argo_Program_Data_from_GDACs_b2737bdf">Globální datová centra
          Argo</SourceLink> zpřístupňují profily, technické údaje i informace o přístrojích.
          Sloupec <code>PSAL</code> obsahuje vypočtenou praktickou salinitu, nikoli původní
          frekvenci. <code>PSAL_ADJUSTED</code> uchovává upravený výsledek a doprovodné
          příznaky určují jeho použitelnost. Změna po odborné kontrole se musí odlišit
          od skutečné změny oceánu.
        </p>

        <h2>Od laboratorního vzorku ke společné stupnici</h2>
        <p>
          <SourceLink id="DOI_10_1109_joe_1980_1145448">Lewisova práce z roku 1980</SourceLink>{" "}
          zasazuje vznik PSS-78 do vývoje elektrických salinometrů. V letech 1955–1959
          vznikaly laboratorní přístroje s teplotně řízenou lázní. V roce 1961 už byly dostupné
          menší přístroje s elektronickou kompenzací teplotního rozdílu vzorku a standardu.
          Následné měření přímo v oceánu potřebovalo převodní vztahy i pro jeho chladné vrstvy.
          Lewis popsal, jak různé vztahy vedly k rozdílům i při zpracování stejných vstupů.
          Jeho práce představuje PSS-78 jako společnou definici založenou na reprodukovatelném
          vodivostním poměru. Laboratoře pak mohly porovnávat výsledky podle jednotného vztahu.
        </p>
        <p>
          Rozšíření autonomních plováků přidalo dlouhé profily bez pravidelného návratu do
          laboratoře. Tím vzrostl význam kontroly driftu a uchovávání původních i opravených
          hodnot. Termodynamické výpočty TEOS-10 dále oddělily praktickou salinitu od
          odhadu absolutní salinity. Srovnatelný klimatický záznam tak vyžaduje doložit
          návaznost přístrojů i použitých převodů.
        </p>

        <h2>Jak měření navazuje na klimatická pozorování</h2>
        <p>
          V <Link href="/pozorovani/tepelny-obsah-oceanu">obsahu tepla v oceánu</Link> doplňuje
          salinita teplotu a tlak při určování vlastností vody. U
          <Link href="/pozorovani/gmsl"> výšky mořské hladiny</Link> pomáhá oddělit změnu
          objemu způsobenou změnou hustoty. Při sledování
          <Link href="/pozorovani/acidifikace-oceanu"> acidifikace oceánu</Link> patří salinita
          k podmínkám chemických přepočtů. Hodnotu pH a množství uhlíku zjišťují další metody.
          Vodivost sama žádnou z těchto veličin přímo neměří.
        </p>
        <p>
          Konkrétní klimatologické zpracování provedli
          <SourceLink id="DOI_10_1175_jcli_d_20_0366_1"> Cheng a spoluautoři v roce 2020</SourceLink>.
          Pro období 1960–2017 rekonstruovali rozložení salinity v horních 2 000 metrech
          oceánu. Použili lodní odběry, soupravy CTD a Argo ze Světové oceánografické databáze
          stažené v červenci 2018. Praktickou salinitu převedli na absolutní a z bodových
          měření sestavili měsíční mapy. Doplnění mezer využívalo vztahy prostorové a časové
          proměnlivosti z modelových simulací a autoři je prověřovali záměrným odebíráním
          části hustěji rozmístěných měření.
        </p>
        <p>
          Konduktometrie v takové práci poskytuje vstupy pro jednotlivé profily.
          Globální mapa navíc závisí na výběru dat a doplnění míst bez měření.
          Výklad změn salinity pomocí výparu, srážek a pohybu vody je další krok.
          Rozdíl mezi mapami proto nelze celý připsat vlastnostem čidla a samotný profil
          nedokládá změnu světového koloběhu vody.
        </p>
        <div className="method-conclusion">
          <h2>Co metoda umožňuje zjistit</h2>
          <p>
            Konduktometrie měří elektrickou vlastnost vody, ze které při známé teplotě a
            tlaku určujeme praktickou salinitu. Dává tak srovnatelný údaj o slanosti
            jednotlivých vzorků a oceánských vrstev. Dlouhodobé změny lze opřít o měření,
            u nichž je doložená kalibrace, stabilita čidel a způsob následných oprav.
            Výpočty hustoty, tepla a chemických vlastností na tento údaj navazují dalšími
            měřeními a výslovně stanovenými vztahy.
          </p>
        </div>
      </div>
    </article>
  );
}
