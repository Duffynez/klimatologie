import Link from "next/link";
import { SourceLink } from "./SourceLink";
import example from "../../public/data/methods/hygrometry/example.json";

const dataPath = "/data/methods/hygrometry";

export function HygrometryArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Relativní vlhkost</dt><dd>Poměr skutečného tlaku vodní páry k tlaku při nasycení za dané teploty. Vyjadřuje se v procentech a značí RH.</dd></div>
          <div><dt>Rosný bod</dt><dd>Teplota, při které by při ochlazení vzduchu za stejného tlaku a obsahu vodní páry nastalo nasycení vůči kapalné vodě.</dd></div>
          <div><dt>Elektrická kapacita</dt><dd>Vztah mezi uloženým elektrickým nábojem a napětím. U vlhkoměru ji ovlivňuje voda přijatá citlivou vrstvou.</dd></div>
          <div><dt>Procentní bod</dt><dd>Jednotka rozdílu dvou procentních údajů. Změna RH z 80 na 82 % je nárůst o dva procentní body.</dd></div>
        </dl>
        <p className="article-glossary__note">Relativní vlhkost se může změnit i při pouhém ohřátí vzduchu. Pro sledování množství vodní páry proto potřebujeme znát také teplotu a přesně určit použitou veličinu.</p>
      </aside>

      <div className="article-prose">
        <h2>Co je hygrometrie</h2>
        <p className="article-prose__intro">
          Hygrometrie je měření vlhkosti plynů. V meteorologii zjišťuje přítomnost vodní páry ve vzduchu
          podle toho, jak pára mění vlastnosti citlivého materiálu, jak se mokrý povrch ochlazuje
          odpařováním nebo při jaké teplotě pára začne kondenzovat. Výsledkem může být relativní vlhkost,
          rosný bod nebo jiná přesně určená veličina.
        </p>
        <p>
          Zde sledujeme především kapacitní vlhkoměr na pozemní stanici. Projdeme cestu od změny
          elektrické vlastnosti čidla ke kalibrovanému údaji a z veřejných měření stanice Blue Hill
          vypočítáme hodinový průměr. Psychrometr a chlazené zrcátko ukážou jiné způsoby měření i možnosti
          kontroly. Základní rozdělení vysvětluje <SourceLink id="2013_NPL_Humidity">příručka Stephanie Bell
          z britské Národní fyzikální laboratoře, NPL</SourceLink>.
        </p>

        <h2>Co znamená údaj o vlhkosti</h2>
        <p>
          Vodní pára přispívá k celkovému tlaku vzduchu vlastním dílčím tlakem, který značíme <em>e</em>.
          Při nasycení vůči kapalné vodě je pára v rovnováze s vodním povrchem. Tlak páry při tomto
          stavu označíme <em>eₛ</em>. Relativní vlhkost, anglicky <em>relative humidity</em> neboli RH,
          porovnává oba tlaky:
        </p>
        <p className="article-formula method-equation">RH = 100 × e / eₛ</p>
        <p>
          Tlaky e a eₛ dosazujeme ve stejných jednotkách, například v hektopascalech, značka hPa.
          Výsledné RH je v procentech. Hodnota 50 % znamená, že tlak vodní páry je polovinou hodnoty
          při nasycení. Hodnota eₛ závisí silně na teplotě, v přesných výpočtech také na celkovém tlaku
          vzduchu. Vztahy mezi vlhkostními veličinami a tlakem uvádí
          <SourceLink id="2021_NIST_Humidity_Calibration"> kalibrační metodika amerického Národního
          institutu pro standardy a technologie, NIST, oddíl 3</SourceLink>.
        </p>
        <p>
          Při ohřátí vzduchu za stálého tlaku a bez přidání či odebrání vody hodnota eₛ vzroste,
          zatímco e zůstane stejná. Relativní vlhkost proto klesne. <SourceLink id="2013_NPL_Humidity">NPL
          v oddílu 3.2</SourceLink> uvádí názorný příklad: ohřátí z 20 na 21 °C sníží původní RH 50 %
          přibližně na 47 %. To je ilustrace teplotní závislosti, nikoli měření na Blue Hill.
        </p>
        <p>
          Množství páry lze vyjádřit také měrnou vlhkostí, tedy hmotností vodní páry na kilogram
          vlhkého vzduchu, obvykle v gramech na kilogram. K jejímu výpočtu z RH potřebujeme teplotu
          a tlak. Rosný bod vyjadřuje stejnou vlhkost jiným způsobem: jako teplotu, na kterou bychom
          vzduch museli ochladit, aby dosáhl nasycení vůči vodě. Pod bodem mrazu záleží na tom, zda
          počítáme nasycení nad kapalnou vodou, nebo nad ledem. Odpovídající teplota nad ledem se nazývá
          bod ojínění. Tyto hodnoty se nesmějí zaměňovat.
        </p>

        <h2>Jak kapacitní čidlo získává údaj</h2>
        <p>
          Kapacitní vlhkoměr využívá tenkou polymerní vrstvu mezi vodivými elektrodami. Vrstva přijímá
          vodu z okolního vzduchu a při vysychání ji zase uvolňuje. Tím se mění její působení v elektrickém
          poli, a tedy kapacita celého prvku. Elektrody s vrstvou tvoří kondenzátor. Jeho kapacita
          vyjadřuje, kolik náboje se uloží při daném napětí, a měří se ve faradech, značka F.
          Pro vlhkoměr je užitečné, že změnu kapacity lze elektronicky přečíst a opakovaně převádět na RH.
        </p>
        <p>
          Vztah mezi kapacitou a vlhkostí se určuje experimentálně. Čidlo vystavíme známým vlhkostem
          a teplotám a zaznamenáme jeho odezvu. Z těchto dvojic vznikne převodní vztah nebo tabulka,
          podle kterých elektronika vyhodnotí další měření. Teplotní kompenzace opravuje změny odezvy
          samotného materiálu s teplotou. Je to jiný krok než přepočet RH na rosný bod.
          Převod předpokládá dostatečné ustálení vrstvy s okolním vzduchem. Při rychlé změně může údaj za okolím zaostávat.
          Odezvu, teplotní vlivy a pomalejší reakci v chladu rozebírají
          <SourceLink id="DOI_10_1175_jtech_d_12_00232_1"> Ingleby a spoluautoři v oddílu 2d</SourceLink>.
        </p>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Postup kapacitního měření vlhkosti">
            <div><span>1</span><strong>Vzduch u sondy</strong><small>Pára projde ochranným filtrem k citlivé vrstvě.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Polymer a elektrody</strong><small>Přijatá voda změní elektrickou kapacitu.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Elektronika a teplota</strong><small>Odečet se převede podle kalibrace na RH.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Časový záznam</strong><small>Stanice ukládá průměry s časem a kontrolou kvality.</small></div>
          </div>
          <figcaption>
            Vlastní schéma obecného postupu. První dvě šipky zachycují přenos vody a změnu elektrické
            vlastnosti. Třetí označuje předání vypočteného údaje záznamníku. Teplota vstupuje do převodu
            ve třetím kroku. Princip popisuje <SourceLink id="2013_NPL_Humidity">NPL, oddíl 3.1</SourceLink>,
            ukládání pětiminutových průměrů <SourceLink id="2026_USCRN_Measurements">dokumentace USCRN</SourceLink>.
            Schéma není výkresem zapojení konkrétního výrobku.
          </figcaption>
        </figure>
        <p>
          Americká síť klimatických referenčních stanic, anglicky <em>U.S. Climate Reference Network</em>
          {" "}neboli USCRN, uvádí ve <SourceLink id="2026_USCRN_Instruments">svém seznamu přístrojů</SourceLink>
          {" "}vlhkoměr Vaisala HMT337. Sonda obsahuje citlivý prvek a ochranný filtr, převodník zajišťuje
          vyhodnocení a výstup. Stanice k tomu přidává kryt, napájení, záznamník a přenos dat.
          USCRN je měřicí síť. Její hodinový soubor je až datový produkt vzniklý ze záznamů stanic.
        </p>
        <p>
          Podle <SourceLink id="2026_USCRN_Measurements">popisu měření USCRN</SourceLink> je jediný
          vlhkostní senzor umístěn v prvním ze tří teplotních krytů vedle teploměru. Krytem proudí
          vzduch nucený ventilátorem a plášť omezuje sluneční ohřev. Výška teplotních sond je zpravidla
          1,5 metru. Vlhkost tedy nemá stejnou kontrolu třemi souběžnými čidly jako
          <Link href="/metody/odporova-termometrie-a-termistory"> teplota</Link>.
          Porucha společného větrání navíc může ovlivnit obě veličiny.
        </p>
        <details className="method-details">
          <summary>Proč se některé vlhkostní sondy zahřívají</summary>
          <p>
            <SourceLink id="2013_Vaisala_HMT330">Příručka HMT330, verze K, strany 25 a 46</SourceLink>,
            popisuje HMT337 s vyhřívanou sondou. Teplota sondy nad okolím omezuje kondenzaci na čidle.
            RH u teplejšího čidla se ale liší od RH venkovního vzduchu. Pro výstup vztažený k okolí
            proto potřebujeme také jeho teplotu, kterou lze měřit samostatnou sondou.
          </p>
          <p>
            Převod nejprve určí tlak páry z RH a teploty vlhkostního čidla. Potom jej porovná s tlakem
            při nasycení za teploty okolí. Předpokladem je, že ohřev změnil teplotu vzorku bez změny
            jeho obsahu páry. Roční datový soubor Blue Hill neuvádí sériové číslo, zapojení vyhřívání
            ani kalibrační list konkrétní sondy. Z názvu typu proto tyto podrobnosti pro naši hodinu
            nedovozujeme.
          </p>
        </details>

        <h2>Psychrometr a chlazené zrcátko</h2>
        <p>
          Další dvě běžné metody spojují vlhkost s měřením teploty. Jejich odlišné fyzikální principy
          umožňují kontrolovat kapacitní čidla. <SourceLink id="2013_NPL_Humidity">Příručka NPL,
          oddíl 3.1</SourceLink>, vysvětluje, co každý přístroj skutečně snímá.
        </p>
        <div className="method-comparison" aria-label="Dvě další metody měření vlhkosti">
          <section>
            <h3>Psychrometr</h3>
            <p>Porovnává suchý teploměr s teploměrem obaleným navlhčeným knotem. Odpařování odebírá teplo, takže mokrý teploměr bývá chladnější. Z obou teplot, tlaku a vztahu pro dané provedení se vypočítá vlhkost.</p>
            <p>Výsledek závisí na proudění vzduchu a zásobování knotu čistou vodou. Při vysychání knotu se teploty sbližují a vypočtená vlhkost může být příliš vysoká. Za mrazu musíme rozlišit mokrý a zaledněný povrch.</p>
          </section>
          <section>
            <h3>Chlazené zrcátko</h3>
            <p>Elektronika ochlazuje zrcátko a opticky sleduje vznik kondenzátu. Regulace udržuje rovnovážnou vrstvičku rosy nebo jinovatky. Teploměr zrcátka pak určuje rosný bod nebo bod ojínění.</p>
            <p>Pro RH přibývá měření teploty vzduchu. Prach a soli na zrcátku ovlivňují vznik i optické rozpoznání kondenzátu. Pod nulou je nutné zjistit, zda se vytvořila kapalná voda, nebo led.</p>
          </section>
        </div>
        <details className="method-details">
          <summary>Co se počítá z dvojice teploměrů psychrometru</summary>
          <p className="article-formula method-equation">e ≈ eₛ(Tw) − A p (T − Tw)</p>
          <p>
            T je teplota suchého teploměru, Tw teplota mokrého teploměru, obě ve °C. Tlak p je celkový
            tlak vzduchu v hPa. eₛ(Tw) je tlak nasycené páry při teplotě mokrého povrchu, také v hPa.
            Součinitel A má jednotku K⁻¹, kde K znamená kelvin, jednotku teplotního rozdílu. Rozdíl
            jednoho kelvinu má stejnou velikost jako rozdíl jednoho stupně Celsia. Součin A p (T − Tw)
            tedy vychází v hPa.
          </p>
          <p>
            Součinitel A závisí na konstrukci, větrání a stavu mokrého povrchu. Po výpočtu e získáme RH
            dělením hodnotou eₛ při teplotě suchého teploměru. <SourceLink id="DOI_10_1175_jtech_d_12_00232_1">Ingleby
            a spoluautoři, rovnice 3 a tabulka 3</SourceLink>, ukazují, proč nelze bez kontroly přenést
            jeden součinitel na každý psychrometr.
          </p>
        </details>

        <h2>Jak se vlhkoměr kalibruje</h2>
        <p>
          Při kalibraci vystavíme přístroj podmínkám se známou referenční vlhkostí. Porovnáme jeho údaje
          s referencí, stanovíme vztah pro vyhodnocení měření a přiřadíme mu nejistotu. Seřízení je
          další, odlišný zásah: například změna koeficientů v elektronice tak, aby přístroj ukazoval
          předepsané hodnoty. Toto rozlišení vychází z
          <SourceLink id="2012_VIM_Calibration"> mezinárodního metrologického slovníku VIM, hesla 2.39</SourceLink>.
        </p>
        <p>
          Referenční vlhkost může vytvořit generátor. <SourceLink id="2021_NIST_Humidity_Calibration">Metodika
          Meyera, Hermana a Millera z roku 2021</SourceLink> popisuje zařízení NIST, které vzduch sytí
          vodou při měřené teplotě a tlaku. Nižších vlhkostí dosahuje změnou tlaku nebo smícháním
          známých proudů vlhkého a suchého plynu. V testovací komoře navíc měří teplotu vzduchu.
          Vlhkostní reference tak navazuje na měření teploty, tlaku a podle režimu také průtoku.
        </p>
        <p>
          Kalibrační komora musí mít dostatečně stálé a rovnoměrné podmínky. Kdyby čidlo bylo chladnější
          než referenční teploměr, oba přístroje by se mohly lišit kvůli skutečně jiné místní RH.
          Kontrolují se proto teplotní rozdíly, ustálení, netěsnosti i voda ulpívající v přívodech.
          Nejistota reference přechází do nejistoty kalibrovaného přístroje.
        </p>
        <p>
          Pro kapacitní čidlo potřebujeme ověřit více vlhkostí v používaném rozsahu, podle účelu také
          více teplot. Opakovaný průchod od suchých podmínek k vlhkým a zpět odhalí hysterezi,
          tedy závislost údaje na předchozím stavu čidla. Následná kontrola má použít další měření,
          aby ukázala, jak převod funguje po seřízení. Shoda s body použitými k nastavení sama o sobě
          takovou kontrolou není.
        </p>
        <p>
          Stabilitu v provozu sledujeme opakovanou kalibrací a srovnáním před údržbou a po ní.
          <SourceLink id="2026_USCRN_Instruments">USCRN uvádí každoroční kalibraci nebo ověření přístrojů</SourceLink>
          {" "}a průběžný dohled nad daty. Důležitý je záznam stavu před seřízením. Právě ten pomáhá určit,
          zda se starší měření mohla postupně posouvat.
        </p>

        <h2>Skutečný příklad: jedna hodina na Blue Hill</h2>
        <p>
          Vybereme stanici <strong>MA Blue Hill 0 W</strong> s identifikačním číslem 94785 a hodinu
          od 00:00 do 01:00 místního standardního času dne <strong>1. ledna 2025</strong>.
          Odpovídá 05:00 až 06:00 světového času UTC. Jde o stejnou stanici a hodinu jako v článku
          o termometrii, takže můžeme sledovat dvě různé veličiny ze stejného místa.
          Vstupy pocházejí z <SourceLink id="2025_USCRN_Blue_Hill_Subhourly">pětiminutového souboru
          za rok 2025</SourceLink>, který zveřejňuje americké Národní centrum pro informace o životním
          prostředí, NCEI, při Národním úřadu pro oceán a atmosféru, NOAA. Stav dat jsme převzali 4. října 2026.
        </p>
        <p>
          Veřejný údaj RH je už výsledkem kalibrace, vyhodnocení a časového průměrování. Soubor
          neobsahuje jednotlivé kapacity čidla ani jeho převodní koeficienty. Samostatná kontrola
          našeho příkladu proto začíná u zveřejněných pětiminutových průměrů. Předchozí kroky známe
          z dokumentace, ale z těchto souborů je znovu vypočítat nemůžeme.
        </p>
        <p>
          <SourceLink id="2017_USCRN_Subhourly_Readme">Popis formátu subhourly01</SourceLink> určuje
          ve sloupci 16 relativní vlhkost RH_AVG v procentech a v následujícím sloupci příznak kvality.
          Čas na řádku označuje konec pětiminutového intervalu. Záznam 00:05 tedy patří období
          00:00–00:05. Hodnota −9999 znamená chybějící RH a nesmí vstoupit do průměru jako skutečné číslo.
        </p>
        <figure className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" aria-label="Vlhkost na Blue Hill po pěti minutách" tabIndex={0}>
            <table>
              <thead><tr><th scope="col">Konec intervalu</th><th scope="col">RH (%)</th><th scope="col">Příznak kvality</th></tr></thead>
              <tbody>
                {example.rows.map((row) => (
                  <tr key={row.endLST}>
                    <th scope="row">{row.endLST.slice(0, 2)}:{row.endLST.slice(2)}</th>
                    <td>{row.relativeHumidityPercent}</td><td>{row.qualityFlag}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption>
            Dvanáct původních pětiminutových průměrů ze stanice Blue Hill, 1. ledna 2025.
            Časy jsou místní standardní, UTC − 5 hodin. Nulový příznak znamená údaj bez označené chyby,
            nikoli měření s nulovou nejistotou. Tabulka zobrazuje vybrané sloupce
            <SourceLink id="2025_USCRN_Blue_Hill_Subhourly"> veřejných dat NOAA/NCEI</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Nejprve zkontrolujeme stanici, datum, pořadí a úplnost intervalů. Všech dvanáct hodnot má
          příznak kvality 0. Žádná nechybí, takže stejně dlouhé intervaly mohou mít stejnou váhu.
          Sečtením RH dostaneme 1 016 a podělíme počtem intervalů:
        </p>
        <p className="article-formula method-equation">Průměrná RH = 1 016 / 12 = 84,666… %</p>
        <p>
          Po zaokrouhlení na celá procenta vychází <strong>85 %</strong>.
          <SourceLink id="2025_USCRN_Blue_Hill_Hourly"> Hodinový soubor NOAA</SourceLink> uvádí
          pro interval končící v 01:00 ve sloupci RH_HR_AVG právě 85 % a příznak kvality 0.
          <SourceLink id="2026_USCRN_Hourly_Readme"> Dokumentace hourly02, poznámka I</SourceLink>,
          potvrzuje, že hodinová RH vzniká z pětiminutových průměrů.
        </p>
        <p>
          Shoda ověřuje výběr údajů a tento krok průměrování. Hodinový a pětiminutový soubor sdílejí
          stejný vlhkoměr, takže nejde o nezávislé potvrzení jeho správnosti. Oba produkty navíc
          zveřejňují RH v celých procentech. Nezaokrouhlený průběh z nich neobnovíme a desetinná místa
          našeho výpočtu nevyjadřují přesnost měření.
        </p>
        <details className="method-details">
          <summary>Data a skript pro zopakování příkladu</summary>
          <p>
            Stáhněte následující čtyři soubory do jedné složky. Skript vyžaduje Node.js 22 nebo novější
            a spustí se příkazem <code>node reproduce.mjs</code>. Nepotřebuje další knihovny ani síťové
            připojení. Vypíše počet hodnot, součet, průměr, zaokrouhlený výsledek a porovnání s NOAA.
          </p>
          <ul>
            <li><a href={`${dataPath}/blue-hill-five-minute.txt`} download>Původních 12 řádků pětiminutových dat</a></li>
            <li><a href={`${dataPath}/blue-hill-hourly.txt`} download>Původní řádek hodinových dat</a></li>
            <li><a href={`${dataPath}/example.json`} download>Výběr dat, verze a kontrolní součty</a></li>
            <li><a href={`${dataPath}/reproduce.mjs`} download>Výpočet a kontrola vstupů</a></li>
          </ul>
          <p>
            Zachováváme všechny původní sloupce. Soubor pětiminutových dat má formát 05, hodinový formát
            03. Údaj CRX_VN 2.623 na vybraných řádcích označuje verzi programu záznamníku, nikoli verzi
            celého archivu. Kontrolní součty SHA-256 určují přesný obsah výřezů i původních ročních
            souborů. Pokud se soubor změní, skript skončí chybou.
          </p>
          <p>
            Skript lze spustit i nad staženými ročními soubory, jejichž cesty předáte jako dva argumenty.
            Hlídá úplnost hodiny, časy v UTC i místním čase, verzi, rozsah RH a příznaky kvality.
            Chybějící nebo označený údaj nepřepočítává na nulu a odmítne i duplicitní interval.
            Jde o kontrolu této úplné hodiny, nikoli o náhradu všech pravidel NOAA pro neúplná data.
            Veřejné údaje přebíráme s uvedením původu podle
            <SourceLink id="WEB_NOAA_Using_Content_FAQ"> podmínek NOAA</SourceLink>.
          </p>
        </details>

        <h2>Co ukázalo porovnání různých přístrojů</h2>
        <p>
          <SourceLink id="DOI_10_1175_jtech_d_12_00232_1">Ingleby a spoluautoři v roce 2013</SourceLink>
          {" "}publikovali terénní zkoušky z Camborne v jihozápadní Anglii. Při zkoušce v roce 2008
          porovnávali psychrometry a kapacitní čidla HygroClip se dvěma přístroji Thygan s chlazeným
          zrcátkem. Pokusný psychrometr ukazoval v průměru přibližně o jeden procentní bod nižší RH než
          reference. U kapacitních čidel se lišily odchylky jednotlivých kusů a projevoval se postupný
          posun k vyšším údajům. Výsledky patří testovaným přístrojům a podmínkám, ne všem vlhkoměrům.
        </p>
        <p>
          Reference využívala jiný princip a samostatné měření rosného bodu. Převod na RH však používal
          společnou teplotu z teploměru v meteorologickém krytu. Porovnání tak nebylo nezávislé ve všech
          vstupech. Také obě zrcátka měla vlastní chyby. Terénní data vznikla po laboratorním nastavení
          čidel, a proto poskytla kontrolu jejich následného chování. Na rozdíl od našeho porovnání
          dvou souborů NOAA zde přibylo skutečně další měření.
        </p>

        <h2>Jaké nejistoty ve výsledku zůstávají</h2>
        <p>
          Rozlišení veřejných dat Blue Hill je jeden procentní bod RH. To říká, jak jemně je údaj
          zapsaný. Nejistotu konkrétního měření určují také kalibrace, teplota, čistota sondy a její
          stav v době pozorování. Úplné vyčíslení těchto vlivů roční soubor neobsahuje. Interval nejistoty
          konkrétní hodnoty 85 % proto z dostupných podkladů neurčíme.
        </p>
        <p>
          Pro orientaci lze použít technické údaje konkrétního provedení. <SourceLink id="2013_Vaisala_HMT330">Příručka
          HMT330, verze K, strana 169</SourceLink>, uvádí rozsah 0–100 % RH a pro uvedené senzory
          HUMICAP 180 při 15–25 °C přesnost ±1 procentní bod v rozsahu 0–90 % RH, nad 90 % pak ±1,7 bodu.
          To je specifikace výrobku za daných podmínek, nikoli nejistota naší zimní hodiny ani údaj
          platný pro celou hygrometrii.
        </p>
        <p>
          Stejná příručka ukazuje vliv ochranného filtru na rychlost. U HUMICAP 180 a 180C v klidném
          vzduchu činí doba dosažení 90 % změny osm sekund s mřížkou a čtyřicet sekund se slinutým
          filtrem. Časový krok veřejných dat je přesto pět minut. Krátký výkyv může tlumit už čidlo
          a další část se ztratí průměrováním. Z hodinového údaje nelze zjistit nejkratší špičky.
        </p>
        <p>
          Znečištění může změnit vazbu vody v citlivé vrstvě. Po orosení zase může sonda zůstávat vlhká,
          i když okolí už vysychá. Tyto vlivy se odhalují porovnáním s referencí, kontrolou před čištěním
          a po něm a měřením odezvy při změně podmínek. V nízkých teplotách se ustalování zpomaluje.
          <SourceLink id="2013_NPL_Humidity">NPL v oddílech 4 a 5</SourceLink> proto spojuje hodnocení
          výsledku s podmínkami měření a opakovanou kalibrací.
        </p>
        <p>
          Průměrování omezuje část rychlého kolísání. Trvalou odchylku kalibrace ale neodstraní.
          Kdyby čidlo celou hodinu ukazovalo příliš vysoko, stejným směrem se posune i průměr.
          Rozptyl dvanácti hodnot přitom obsahuje skutečné změny vlhkosti vzduchu. Bez dalšího měření
          jej nemůžeme vydávat za chybu přístroje ani z něj odvodit celkovou nejistotu hodiny.
        </p>

        <h2>Vývoj mechanických a elektrických vlhkoměrů</h2>
        <p>
          Mechanické vlhkoměry využívaly změnu délky vlasu či jiného materiálu při vlhnutí.
          <SourceLink id="1938_Dunmore_Hygrometer">Francis Dunmore v původní práci z roku 1938</SourceLink>
          {" "}popsal problém tohoto řešení na stoupajícím meteorologickém balonu: vlasový vlhkoměr
          reagoval na změny pomalu, zvlášť v chladu. Jeho elektrické provedení využívalo vrstvu se solí
          na skleněné trubici a dvojici vodičů. S přijatou vodou se měnil elektrický odpor a připojený
          obvod převáděl změnu na frekvenci přenášeného signálu.
        </p>
        <p>
          Při popsaném letu zaznamenal elektrický přístroj výrazné změny, na které vlasový vlhkoměr
          reagoval slabě přibližně o dvě minuty později. Za tu dobu balon vystoupal asi o 670 metrů.
          Studie současně sledovala teplotní závislost a stárnutí citlivých vrstev. Zlepšení rychlosti
          tedy otevřelo podrobnější pohled na svislé rozložení vlhkosti, ale potřeba kalibrace zůstala.
        </p>
        <p>
          Dunmoreův přístroj měřil odpor. U dnešního zde popsaného polymerního čidla sledujeme kapacitu.
          Elektrický výstup obou provedení umožňuje vzdálené a automatické zaznamenávání. Přechod mezi
          principy ovšem mění i charakter chyb. Historie přístrojů je proto součástí podkladů pro
          hodnocení dlouhodobých změn vlhkosti.
        </p>

        <h2>Jak z místních měření vzniká klimatický záznam</h2>
        <p>
          Hlavní návazností je článek <Link href="/pozorovani/narust-vlhkosti">Vlhkost atmosféry</Link>.
          Hygrometrie mu poskytuje místní údaje o RH nebo rosném bodu. Abychom posoudili změnu množství
          páry za desetiletí, musíme přidat teplotu, případně tlak, a spojit měření z mnoha míst.
          Jedna hodina na Blue Hill ukazuje vznik údaje. Sama neurčuje regionální ani globální trend.
        </p>
        <p>
          <SourceLink id="DOI_10_5194_cp_10_1983_2014">Willettová a spoluautoři v metodice HadISDH
          z roku 2014</SourceLink> popsali převod jednotlivých staničních hlášení teploty a rosného
          bodu na několik vlhkostních veličin. Teprve potom počítali měsíční hodnoty a prostorové
          průměry. Pořadí je důležité, protože vztahy jsou nelineární. Rosný bod vypočtený z průměrné
          teploty a průměrné RH obecně není průměrem rosných bodů z jednotlivých měření.
        </p>
        <p>
          Při spojování dlouhých záznamů musíme posoudit změny čidla, krytu, větrání, místa a časů
          pozorování. <Link href="/metody/kontrola-kvality-a-homogenizace">Kontrola kvality a homogenizace</Link>
          {" "}hledá chyby a skoky spojené s těmito změnami. HadISDH odděluje nejistoty měření,
          zpracování a neúplného pokrytí. Shoda dvou klimatických produktů se společnými stanicemi
          kontroluje hlavně rozdíly jejich zpracování, ne všechny možné chyby původních přístrojů.
        </p>
        <p>
          Vlhkoměry na <Link href="/metody/radiosondaz">radiosondách</Link> přidávají měření ve výšce.
          <SourceLink id="DOI_10_5194_amt_7_4463_2014">Dirksen a spoluautoři v popisu referenčního
          zpracování GRUAN pro sondu RS92</SourceLink> opravují mimo jiné sluneční ohřev a opožděnou
          odezvu vlhkostního čidla. GRUAN je síť pro referenční měření ve volné atmosféře. Sonda se
          pohybuje a její podmínky se rychle mění, takže údaje o přesnosti pozemní HMT337 na ni
          nemůžeme přenést.
        </p>
        <p>
          Množství vodní páry v celém sloupci atmosféry se zjišťuje také
          <Link href="/metody/pozemni-mereni-vodni-pary-pomoci-gnss"> pozemním měřením signálů globálních
          navigačních družicových systémů, GNSS</Link>
          {" "}a <Link href="/metody/pasivni-mikrovlnna-radiometrie">mikrovlnnou radiometrií</Link>.
          Pro porovnání s vlhkoměrem potřebujeme
          sladit místo, čas a sledovanou část atmosféry. Přízemní RH a celkový obsah páry ve sloupci
          jsou různé veličiny.
        </p>
        <div className="method-conclusion">
          <h2>Co hygrometrie umožňuje zjistit</h2>
          <p>
            Hygrometrie umožňuje určit vlhkost vzduchu v místě a čase měření a sledovat její průběh.
            Společně s teplotou a tlakem dovoluje převádět relativní vlhkost na veličiny vyjadřující
            množství vodní páry. Dlouhodobě srovnatelná měření z mnoha stanic a výšek pak mohou doložit,
            kde a jak se toto množství mění. Výsledek čidla podpírá tvrzení o stavu vzduchu. Vysvětlení
            příčin klimatické změny vyžaduje další pozorování a fyzikální souvislosti.
          </p>
        </div>
      </div>
    </article>
  );
}
