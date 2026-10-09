import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import example from "../../public/data/methods/glacier-balance/example.json";

const dataPath = "/data/methods/glacier-balance";
const number = (value: number, digits = 3) => value.toLocaleString("cs-CZ", { maximumFractionDigits: digits });

export function GlacierBalanceArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Hmotnostní bilance</dt><dd>Přírůstek nebo úbytek hmotnosti za určené období. Kladná hodnota znamená přírůstek.</dd></div>
          <div><dt>Vodní ekvivalent</dt><dd>Hmotnost přepočtená na vrstvu vody. Jeden metr odpovídá 1 000 kg na metr čtvereční.</dd></div>
          <div><dt>Firn</dt><dd>Starší sníh, který přečkal alespoň jednu sezonu tání a postupně se mění v led.</dd></div>
          <div><dt>Geodetická bilance</dt><dd>Odhad změny hmotnosti z rozdílu dvou map výšky povrchu a z předpokládané hustoty změněného objemu.</dd></div>
        </dl>
        <p className="article-glossary__note">Odečet u tyče popisuje jedno místo. Bilance celého ledovce vyžaduje měření rozmístěná po jeho povrchu a výpočet pro plochy mezi nimi.</p>
      </aside>

      <div className="article-prose">
        <h2>Kolik sněhu a ledu přibylo nebo ubylo</h2>
        <p className="article-prose__intro">
          Terénní měření bilance ledovce zjišťuje přírůstky a úbytky sněhu a ledu pomocí tyčí zavrtaných
          do ledovce, sněhových sond a odběrů pro měření hustoty. Z tloušťky a hustoty přidané nebo ztracené
          vrstvy vypočítáme změnu hmotnosti na jednotku plochy. Síť těchto bodů pak slouží k odhadu
          bilance povrchu celého ledovce.
        </p>
        <p>
          Přírůstek hmotnosti se nazývá <strong>akumulace</strong>, úbytek <strong>ablace</strong>.
          Sníh mohou přinášet srážky, vítr i laviny. Hmotnost povrchu ubývá například táním s odtokem vody
          nebo přímým přechodem ledu na vodní páru. Bilance je součet těchto změn za přesně vymezenou dobu.
          Znaménko plus označuje přírůstek, minus úbytek.
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_glosar_UNESCO_a_WGMS_06fc9a79"> Glosář Cogley et al. (2011)</SourceLink>{" "}
          vymezuje povrchovou bilanci vůči změnám uvnitř ledovce, u podloží a na jeho čele.
        </p>
        <p>
          V tomto článku projdeme běžný postup na horském ledovci s měřením zimního sněhu a podzimním
          odečtem tyčí. Souvislost s dlouhodobými výsledky ukazuje pozorování
          <Link href="/pozorovani/ustup-ledovcu"> Horské ledovce</Link>.
          Podrobnosti vážení sněhu rozvádí metoda
          <Link href="/metody/mereni-vysky-hustoty-a-vodni-hodnoty-snehu"> Měření výšky, hustoty a vodní hodnoty sněhu</Link>.
        </p>

        <h2>Tyč je ukotvená v pohybujícím se ledu</h2>
        <p>
          Do otvoru vyvrtaného mechanickou nebo parní vrtačkou se zasune měřicí tyč. Její spodní část
          zůstane pevně v ledu, horní vyčnívá nad povrch. Při návštěvě změříme vzdálenost od stejné značky
          na tyči k okolnímu povrchu. Když led odtaje, odkrytá část tyče se prodlouží. Odečet opakujeme
          na více stranách, aby drobná prohlubeň přímo u tyče nezastupovala celé okolí.
          Uložíme také označení bodu, datum, polohu a druh povrchu.
        </p>
        <p>
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">Příručka Světové meteorologické organizace
          (WMO, 2024), oddíl 3.8</SourceLink>, popisuje například hliníkové tyče dlouhé 4–6 m,
          plastové trubky a spojované bambusové díly. Použitelný rozsah odečtu omezuje délka pevně
          ukotvené tyče. Při velkém tání se musí tyč včas znovu zavrtat a starý odečet propojit s novým.
          Pro místa s úbytkem 8–12 m ledu za sezonu příručka uvádí i ocelové dráty v hlubších vrtech.
          Tyto rozměry popisují konkrétní uspořádání, nikoli jediný předepsaný přístroj.
        </p>
        <p>
          Tyč se pohybuje spolu s ledem. Rozdíl odečtů proto vyjadřuje změnu povrchu vůči materiálu,
          v němž tyč drží. Výška povrchu vůči pevnému bodu v údolí navíc závisí na přítoku a odtoku ledu
          i na jeho deformaci. Pokles nadmořské výšky povrchu a úbytek u tyče jsou odlišné veličiny.
          Pro dlouhodobé sledování místa se poloha tyče kontroluje a síť se podle pohybu ledovce obnovuje.
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_glosar_UNESCO_a_WGMS_06fc9a79"> Cogley et al. (2011)</SourceLink>{" "}
          vysvětlují tento rozdíl mezi bilancí a změnou geometrie.
        </p>

        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Od terénního odečtu k bilanci ledovce">
            <div><span>1</span><strong>Odečíst vrstvu</strong><small>Tyč, sonda nebo jáma určí změnu ledu či množství sněhu mezi zvolenými daty.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Převést hmotnost</strong><small>Tloušťka a hustota dají bilanci jednoho bodu ve vodním ekvivalentu.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Doplnit plochu</strong><small>Rozmístěná měření a popsaný model odhadnou bilanci mezi body.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Zvážit plochou</strong><small>Bilance jednotlivých pásem se násobí jejich plochou a spojí do průměru.</small></div>
          </div>
          <figcaption>
            Schéma přímého glaciologického postupu. Šipky vedou od terénního měření k odvozenému výsledku.
            Třetí krok potřebuje předpoklady o neměřených místech. Poslední krok už provádí plošný součet.
            Vlastní schéma podle <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">WMO (2024), kapitola 3</SourceLink>.
          </figcaption>
        </figure>

        <h2>Sníh potřebuje rozhraní a hustotu</h2>
        <p>
          Na konci zimy se sondou měří sníh nad loňským letním povrchem. Ve spodní části ledovce
          jím bývá tvrdý led. Výše může ležet <strong>firn</strong>, tedy starší sníh, který přečkal sezonu
          tání. Sonda musí rozpoznat právě loňské rozhraní. Ledová krusta uvnitř letošního sněhu ji může
          zastavit příliš brzy. Sněhová jáma nebo odvrtané jádro umožní vrstvy prohlédnout a správné
          rozhraní zkontrolovat. Tento postup popisuje
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO (2024), oddíl 3.7</SourceLink>.
        </p>
        <p>
          Zvážení známého objemu v jednotlivých vrstvách určí hustotu. Součet součinů hustoty a tloušťky
          dá hmotnost sněhu nad metrem čtverečním. Na konci léta se stejným principem zjišťuje, kolik
          letošního sněhu zůstalo. Samotné zkrácení sněhového sloupce vůči tyči by zaměnilo odtátí se
          sesedáním sněhu. Tyč se navíc může do firnu propadat. Proto musí odečty doprovázet informace
          o hustotě, ukotvení a sledovaném rozhraní.
          <SourceLink id="DOI_10_5194_essd_14_3293_2022"> Geibel et al. (2022), oddíl 2.3</SourceLink>
        </p>
        <p>
          Na holém ledu lze při svislé, pevně ukotvené tyči a známé hustotě ρ<sub>i</sub> převést rozdíl odečtů přímo.
          Označíme-li odkrytou délku tyče při první návštěvě l<sub>1</sub> a při druhé l<sub>2</sub>, platí:
        </p>
        <div className="article-formula method-equation"><p>b = −(l<sub>2</sub> − l<sub>1</sub>) ρ<sub>i</sub> / ρ<sub>w</sub></p></div>
        <p>
          b je bilance bodu v metrech vodního ekvivalentu, obě délky jsou v metrech.
          Hustoty ledu ρ<sub>i</sub> a referenční vody ρ<sub>w</sub> mají jednotku kg/m³.
          Pro vodu používáme 1 000 kg/m³. Záporné znaménko zajišťuje, že prodloužení odkryté tyče
          znamená ztrátu hmotnosti. Jeden metr vodního ekvivalentu odpovídá 1 000 kg/m², jeden milimetr
          jednomu kg/m². Na švýcarských ledovcích se pro běžný kompaktní led používá odhad 900 kg/m³.
          Ten se nesmí automaticky přenést na sníh nebo firn.
          <SourceLink id="DOI_10_5194_essd_14_3293_2022"> Geibel et al. (2022)</SourceLink>
        </p>

        <h2>Které období a kterou plochu porovnáváme</h2>
        <p>
          Jarní a podzimní návštěva málokdy přesně zachytí okamžik největší a nejmenší zásoby sněhu.
          Bilance za skutečná data návštěv proto může být jiná než bilance za pevně určený hydrologický
          rok. Ve švýcarských přehledech trvá tento rok od 1. října do 30. září. Přepočet na pevná data
          vyžaduje odhad sněžení a tání mezi návštěvou a hranicí období. Datový soubor
          <SourceLink id="DOI_10_18750_massbalance_2021_r2021"> GLAMOS (2021)</SourceLink>{" "}
          zveřejňuje obě varianty odděleně. V našem příkladu zůstaneme u skutečných termínů návštěv.
        </p>
        <p>
          Body mají zastupovat různé nadmořské výšky, orientace svahů a podmínky ukládání sněhu.
          Měření pouze podél snadno průchodného středu ledovce nemusí zachytit závěje nebo lavinový
          sníh u okrajů. U profilového postupu se z bodů odhadne bilance jednotlivých výškových pásem.
          Plochy pásem získáme z obrysu ledovce a mapy výšek. Příručka
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO (2024), oddíl 3.9</SourceLink>,
          popisuje i mapování linií stejné bilance a prostorové modely.
        </p>
        <p>
          Švýcarský postup popsaný <SourceLink id="DOI_10_3189_2015jog15j015">Hussem et al. (2015)</SourceLink>{" "}
          používá denní model hromadění sněhu a tání. Spojuje bodová měření s teplotou, srážkami,
          výškou terénu a rozdíly slunečního ozáření. Parametry se upravují podle dostupných terénních
          pozorování každého roku. Tím vzniknou hodnoty i mezi tyčemi a nad nejvyšším měřeným bodem.
          Pokud v některém roce měření chybí, doplněný průběh už závisí na meteorologických vstupech
          a dříve nastaveném modelu. Takový rok musí být rozpoznatelný v dokumentaci.
        </p>
        <div className="article-formula method-equation"><p>B = Σ (A<sub>j</sub> b<sub>j</sub>) / Σ A<sub>j</sub></p></div>
        <p>
          B označuje průměrnou bilanci povrchu, b<sub>j</sub> bilanci výškového pásma j a A<sub>j</sub> jeho
          vodorovnou mapovou plochu. Znak Σ znamená součet přes všechna pásma. Plochy mohou být v km²,
          pokud mají všechny stejnou jednotku. Výsledná bilance má stejnou jednotku jako b<sub>j</sub>.
          Velké pásmo přispěje do výsledku více než malý zbytek ledu u vrcholu. Při sledování skutečné
          bilance měnícího se ledovce se musí aktualizovat také jeho plocha. Použití neměnné referenční
          geometrie odpovídá jiné otázce a musí být uvedeno.
          <SourceLink id="DOI_10_5194_tc_7_1227_2013"> Zemp et al. (2013), rovnice 7 a 8</SourceLink>
        </p>

        <h2>Griesgletscher: bodová bilance při úbytku 398 cm</h2>
        <p>
          Použijeme dvě pevně označená vydání dat GLAMOS z roku 2021, otevřená 4. října 2026.
          GLAMOS je švýcarská síť sledování ledovců. Zvolili jsme Griesgletscher, identifikátor
          <code> B45-04</code>, a období <strong>14. září 2020 až 18. září 2021</strong>.
          Jde o 369 dní, nikoli kalendářní rok ani přesný hydrologický rok. Tento historický příklad
          slouží k opakování výpočtu, nikoli k popisu nejnovějšího stavu ledovce.
        </p>
        <p>
          <SourceLink id="DOI_10_18750_massbalance_point_2021_r2021">Soubor bodových měření</SourceLink>{" "}
          uvádí u tyče <strong>22</strong> v nadmořské výšce 2 479 m změnu tloušťky <strong>−398 cm</strong>
          a hustotu <strong>900 kg/m³</strong>. Kódy označují známá data návštěv, běžný odečet tyče
          a použití hustoty ledu. Zde již máme rozdíl odečtů. Původní dvě délky odkryté tyče ani
          terénní zápisník nejsou součástí tohoto souboru.
        </p>
        <div className="article-formula method-equation"><p>−3,98 m × 900 / 1 000 = −3,582 m vodního ekvivalentu</p></div>
        <p>
          Výsledek je <strong>−3 582 mm vodního ekvivalentu</strong>, tedy úbytek 3 582 kg na metr čtvereční
          v tomto bodě za uvedené období. Shoduje se s publikovaným sloupcem <code>mb_we</code>.
          Předpokládá správně určený úbytek ledu, stabilní ukotvení a přiměřený odhad jeho hustoty.
          V datovém souboru je změna tloušťky zapsána v celých centimetrech a bilance v celých milimetrech
          vody. Tento krok zápisu čísel neurčuje nejistotu měření.
        </p>
        <p>
          Pro stejnou tyč jsou zveřejněné příspěvky nejistoty odečtu <strong>45 mm</strong> a hustoty
          <strong> 71 mm</strong> vodního ekvivalentu. Celkový odhad je <strong>84 mm</strong>, přibližně
          2,3 % velikosti úbytku. Součet příspěvků přes odmocninu součtu čtverců dává přibližně stejnou
          hodnotu. Odhady přebíráme z vydání 2021. Nevydáváme je za nezávisle ověřenou nejistotu této
          tyče ani za interval s uvedenou pravděpodobností pokrytí. Metodický článek
          <SourceLink id="DOI_10_5194_essd_14_3293_2022"> Geibel et al. (2022), oddíl 3.3</SourceLink>,
          vysvětluje přiřazování příspěvků podle druhu měření a jeho dokumentace. Jeho pozdější tabulku
          zde nepoužíváme k přepisování chybových polí staršího vydání dat.
        </p>

        <h2>Celý ledovec: plocha změní váhu jednotlivých míst</h2>
        <p>
          Druhý výpočet začne u <strong>již zpracovaných bilancí deseti výškových pásem</strong> ze souboru
          <SourceLink id="DOI_10_18750_massbalance_2021_r2021"> GLAMOS Swiss Glacier Mass Balance (2021)</SourceLink>.
          Nejsou to další odečty tyčí. Zahrnují prostorové zpracování autorů, které zde znovu neprovádíme.
          Samostatně ověříme poslední krok, tedy převod pásem na plošný průměr. Pro stejné období
          zobrazíme také všech 16 bodových měření. Vybraná tyč 22 leží v dolní části ledovce a její
          silný úbytek nemůže zastupovat výše položené plochy.
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" aria-label="Bilance a plochy výškových pásem Griesgletscheru" tabIndex={0}>
            <table>
              <caption>Griesgletscher, 14. 9. 2020 – 18. 9. 2021</caption>
              <thead><tr><th scope="col">Výškové pásmo <span className="method-data-output__unit">(m)</span></th><th scope="col">Plocha <span className="method-data-output__unit">(km²)</span></th><th scope="col">Bilance <span className="method-data-output__unit">(m vody)</span></th></tr></thead>
              <tbody>{example.result.bands.map((band) => (
                <tr key={band.lowerM}><th scope="row">{number(band.lowerM)}–{number(band.upperM)}</th><td>{number(band.areaKm2, 5)}</td><td>{number(band.annualMm / 1000)}</td></tr>
              ))}</tbody>
            </table>
          </div>
        </div>
        <p>
          Součet ploch pásem je <strong>{number(example.result.areaKm2, 5)} km²</strong>.
          Sečtení součinů ploch a bilancí a vydělení celkovou plochou dává
          <strong> −0,893 m vodního ekvivalentu</strong> po zaokrouhlení.
          Prostý průměr deseti bilancí by vyšel −1,005 m. Přisoudil by totiž stejnou váhu pásmu
          o ploše 1,32 km² i vrcholovému pásmu o ploše 0,0025 km².
        </p>
        <p>
          V souhrnné tabulce GLAMOS je zveřejněno −0,892 m a plocha 4,10187 km².
          Výpočet z pásem se tedy liší o necelý 1 mm vody a součet ploch o 10 m².
          Zveřejněná přesnost vstupních čísel omezuje přesnou shodu obou tabulek.
          Bez nezaokrouhlených mezivýsledků nelze původ rozdílu úplně rozložit.
          Skript oba výsledky zachovává a nic nedorovnává. Z pásem také vychází úbytek přibližně
          <strong> 3,66 milionu m³ vodního ekvivalentu</strong>. Tento objem vody vyjadřuje hmotnostní
          změnu, nikoli přímo objem odtátého ledu.
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Graf bilance a plochy Griesgletscheru">
            <Image className="article-figure__media" src="/media/glacier-balance/gries-balance.png" alt="V dolní části Griesgletscheru převažují silně záporné bodové bilance. Největší plochu mají pásma mezi 2 900 a 3 100 metry s menším úbytkem." width={1792} height={1248} sizes="(max-width: 900px) 100vw, 900px" unoptimized />
          </div>
          <figcaption>
            Vlevo jsou černě bodová měření a jejich zveřejněné odhady nejistoty, modrozeleně průměry
            pásem po prostorovém zpracování. Hodnoty pásem jsou umístěné doprostřed jejich výškového
            intervalu, nikoli do místa odečtu. Oranžová přerušovaná čára značí náš plošný průměr.
            Vpravo jsou plochy, kterými se jednotlivá pásma váží. Nejvyšší pásmo je ledem obsazené
            jen po 3 320 m. Graf názorně odděluje bodová měření od odhadu pro celou plochu.
            Vlastní výpočet a graf z dat
            <SourceLink id="DOI_10_18750_massbalance_point_2021_r2021"> GLAMOS, body (2021)</SourceLink> a
            <SourceLink id="DOI_10_18750_massbalance_2021_r2021"> GLAMOS, pásma (2021)</SourceLink>.
            Licence vstupních dat: CC BY 4.0.
          </figcaption>
        </figure>

        <details className="method-details">
          <summary>Data a opakování obou výpočtů</summary>
          <p>
            Stáhněte do jedné složky <a href={`${dataPath}/point.zip`} download>původní archiv bodových měření</a>,{" "}
            <a href={`${dataPath}/balance.zip`} download>původní archiv bilancí</a>,{" "}
            <a href={`${dataPath}/example.json`} download>metadata a výsledky</a> a{" "}
            <a href={`${dataPath}/reproduce.py`} download>výpočetní skript</a>.
            Příkaz <code>python -B reproduce.py</code> používá Python 3 bez dalších knihoven.
            Archivy nerozbalujte. Skript ověří jejich kontrolní otisky SHA-256, vybere ledovec a přesná
            data návštěv, přepočte tyč 22 a spočítá vážený průměr. Také kontroluje úplnost pásem,
            jejich plochy a shodu s publikovaným výsledkem do 1 mm, s ohledem na přesnost tabulek.
          </p>
          <p>
            Bod je na řádku 1671 souboru <code>annual/gries_annual.dat</code>, počítáno i s hlavičkou.
            Druhý archiv obsahuje tabulky <code>massbalance_observation_elevationbins_2021_r2021.csv</code>{" "}
            a <code>massbalance_observation_2021_r2021.csv</code>. V obou se vybírá identifikátor
            <code> B45-04</code> a termíny uvedené v článku. Archivy jsou nezměněné kopie vydání 2021
            pod kratšími názvy. Licence CC BY 4.0 je uvedená na stránkách těchto vydání.
            <a href={`${dataPath}/plot.py`} download> Skript pro graf</a> navíc potřebuje knihovnu Matplotlib.
          </p>
          <p>
            Skript reprodukuje dva oddělené kroky. Neobnovuje původní terénní zápisník ani celé
            prostorové a časové zpracování GLAMOS. Ověření posledního plošného součtu proto samo
            nepotvrzuje správnost modelu, který vytvořil bilance pásem.
          </p>
        </details>

        <h2>Kalibrace měřidel a kontrola celého výsledku</h2>
        <p>
          Délková stupnice, váha a objem odběráku potřebují vlastní metrologickou kontrolu.
          Kalibrace určí vztah mezi údajem přístroje a referenční hodnotou včetně nejistot.
          U pásma je referencí známá délka, u váhy závaží s doloženou návazností na jednotku hmotnosti.
          Změna odezvy váhy při seřízení je jiný úkon. Toto rozlišení stanovuje
          <SourceLink id="2012_VIM_Calibration"> mezinárodní metrologický slovník VIM</SourceLink>.
          Kontrola známé délky nebo závaží před sezonou a po ní pomůže zjistit změnu přístroje.
          Konkrétní kalibrační protokoly měřidel použitých u našeho bodu ve veřejném souboru chybějí.
        </p>
        <p>
          V terénu se navíc kontroluje, zda se tyč nenaklonila, nepropadla nebo neuvolnila z ledu.
          U sněhu se porovnávají okolní sondáže a rozhraní ve sněhové jámě. Rozdíl má vést ke kontrole
          zápisů a opakování měření, ne k automatickému vyřazení neobvyklé hodnoty.
          Ztracená tyč, odhadnuté datum nebo hustota převzatá odjinud se musí označit.
          <SourceLink id="DOI_10_5194_essd_14_3293_2022"> Geibel et al. (2022)</SourceLink>{" "}
          pro tyto situace zveřejňují kódy kvality, aby šel původ údaje zpětně posoudit.
        </p>
        <p>
          Jinou kontrolu poskytuje <strong>geodetická bilance</strong>. Ze dvou map výšky povrchu
          se získá změna objemu a pomocí odhadu hustoty změna hmotnosti. Měření výšky z leteckých
          nebo družicových snímků má jiné chyby než odečet tyče. Před porovnáním je nutné sjednotit
          období a plochu a posoudit změny uvnitř ledovce a u podloží. Rozdíl obou metod pak může
          odhalit soustavnou chybu v rozmístění bodů nebo doplnění neměřených částí.
        </p>
        <p>
          Konkrétní test provedli <SourceLink id="DOI_10_5194_tc_7_1227_2013">Zemp et al. (2013)</SourceLink>{" "}
          pro 46 porovnávaných období na 12 ledovcích. Použili statistický test s pětiprocentní hladinou
          významnosti. Ten označí rozdíl za významný, pokud by při skutečné shodě metod tak velká
          nebo větší odchylka vznikala náhodou v méně než 5 % případů za předpokladů testu.
          Takový rozdíl našli v devíti obdobích. U ostatních rozdíl neprokázali.
          To ještě nezaručuje přesnou shodu, protože při velkých nejistotách může test přehlédnout
          i podstatnou odchylku. Autoři proto hodnotí také velikost rozdílu, kterou je porovnání
          schopné rozpoznat.
        </p>
        <p>
          Oba postupy mohou sdílet obrys ledovce, mapu výšek a opravy na společné datum.
          Jejich nezávislost je proto částečná. Další omezení vznikne, když geodetická data pomohou
          upravit prostorový model. <SourceLink id="DOI_10_3189_2015jog15j015">Huss et al. (2015)</SourceLink>{" "}
          takto při zjištěném nesouladu upravovali parametry rozložení sněhu a tání. Následná shoda
          s týmiž mapami je výsledkem tohoto nastavení. Nezávislé ověření upraveného postupu potřebuje
          další pozorování, která k nastavení použita nebyla.
        </p>

        <h2>Co rozhoduje o nejistotě</h2>
        <p>
          U jednotlivé tyče rozhodují odečet, ukotvení, nerovný povrch a převod hustoty. U celého
          ledovce k nim přistupuje především rozmístění bodů a odhad mezi nimi. Zemp et al. ve svém
          souboru odhadli průměrnou roční nejistotu bodových terénních měření na 0,14 m a prostorového
          převodu na 0,28 m vodního ekvivalentu. Jsou to hodnoty pro jejich analyzovaná období a způsob
          hodnocení, nikoli univerzální přesnost terénní metody.
          <SourceLink id="DOI_10_5194_tc_7_1227_2013"> Zemp et al. (2013), oddíl 5.3</SourceLink>
        </p>
        <p>
          V našem příkladu máme číselný odhad nejistoty pro tyč 22. Tabulka výškových pásem však
          neposkytuje úplnou nejistotu průměru ani informaci, jak spolu chyby jednotlivých pásem
          souvisejí. Proto k výsledku −0,893 m nepřidáváme vlastní interval. Chyba společného odhadu
          hustoty nebo chybějícího sněhu ve vyšších polohách se nezmenší jako náhodný rozptyl
          nezávislých měření. Rozdíl necelého milimetru mezi naším součtem a tabulkou GLAMOS je kontrola
          výpočtu, nikoli nejistota bilance ledovce.
        </p>
        <p>
          Obtížně přístupné strmé části, suť a lavinové nánosy snižují reprezentativnost dostupné sítě.
          Při velmi silném tání mohou vypadnout právě tyče v místech největšího úbytku.
          Na ledovci končícím ve vodě je navíc třeba samostatně určit odlamování a podvodní tání čela.
          Terénní bilance povrchu také sama nepostihne veškeré zamrzání a tání uvnitř ledovce a u podloží.
          Tyto hranice metody vymezují
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_glosar_UNESCO_a_WGMS_06fc9a79"> Cogley et al. (2011)</SourceLink>.
        </p>

        <h2>Historie a klimatologické využití měření bilance</h2>
        <p>
          Valter Schytt v <SourceLink id="DOI_10_3189_s002214300002757x">původní práci z roku 1962</SourceLink>{" "}
          popsal šestnáct let bilance švédského Storglaciären od zimy 1945/46. Upozorňoval, že v horní
          části ledovce sonda často nerozpozná letní rozhraní. Odběr sněhových jader tam dovolil zahustit
          měření bez kopání velkého počtu hlubokých jam. Jeho mapa akumulace pro rok 1961 vycházela
          z 370 bodů. Už tento raný program ukazoval, že jednoduchý přístroj může dát použitelný
          výsledek pro celý ledovec až při promyšleném rozmístění měření.
        </p>
        <p>
          Dnešní výpočetní postupy sjednocují starší zápisy, měnící se plochu ledovce i různá data
          návštěv. Huss et al. (2015) tak sestavili nebo znovu vyhodnotili 19 dlouhých sezonních záznamů
          ve švýcarských Alpách. Jejich studie ukazuje klimatologické využití metody: porovnat jednotlivá
          léta a rozlišit zimní přírůstek od letního úbytku.
          <SourceLink id="DOI_10_3189_2015jog15j015"> Huss et al. (2015)</SourceLink>
        </p>
        <p>
          V souhrnné tabulce našeho příkladu je zimní bilance +1,674 m a letní −2,566 m vodního ekvivalentu.
          Jejich součet dává roční −0,892 m za zvolené návštěvy. Stejná roční ztráta může v jiném roce
          vzniknout jiným poměrem zimního sněhu a letního tání. K určení příčiny změn potřebujeme také
          údaje o počasí a fyzikální vysvětlení, nikoli pouze znaménko bilance.
          <SourceLink id="DOI_10_18750_massbalance_2021_r2021"> GLAMOS (2021)</SourceLink>
        </p>
        <p>
          Družicové mapování rozšiřuje pokrytí na ledovce bez terénních návštěv. Terénní měření k němu
          přidává průběh jednotlivých sezon a místní kontrolu. Metodicky na tento článek navazují
          <Link href="/metody/fotogrammetrie-a-porovnavani-vyskovych-modelu"> fotogrammetrie a porovnávání výškových modelů</Link>.
          Propojení měření se změnami hmotnosti celých horských oblastí rozvádí
          <Link href="/pozorovani/ustup-ledovcu"> pozorování horských ledovců</Link>.
          Stejný princip terénních odečtů přispívá také ke sledování povrchu
          <Link href="/pozorovani/nestabilita-prikrovu"> ledových příkrovů</Link>.
          Pro jejich celkovou bilanci je třeba určit navíc odtok ledu do moře a další hmotnostní změny.
        </p>

        <section className="method-conclusion">
          <h2>Co metoda umožňuje zjistit</h2>
          <p>
            Tyče, sondy a odběry sněhu umožňují určit, kolik hmotnosti na povrchu ledovce v daných místech
            za určenou dobu přibylo nebo ubylo. Při známé hustotě převádějí změnu vrstvy na srovnatelný
            vodní ekvivalent. Rozmístěná síť a doložené prostorové zpracování dovolují odhadnout bilanci
            celého povrchu a její zimní a letní složku. Takový záznam dokládá, kdy a kde ledovec získával
            či ztrácel hmotnost. Jeho spolehlivost pro celou plochu závisí na pokrytí měřením a kontrole
            jinou metodou, zejména víceletým porovnáním výšky povrchu.
          </p>
        </section>
      </div>
    </article>
  );
}
