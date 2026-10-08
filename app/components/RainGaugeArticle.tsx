import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import example from "../../public/data/methods/rain-gauges/example.json";

const dataPath = "/data/methods/rain-gauges";
const number = (value: number) => value.toLocaleString("cs-CZ", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export function RainGaugeArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Srážkový úhrn</dt><dd>Množství vody spadlé na jednotku vodorovné plochy za určenou dobu. Jeden milimetr odpovídá jednomu litru na metr čtvereční.</dd></div>
          <div><dt>Intenzita srážek</dt><dd>Úhrn dělený délkou intervalu, obvykle v milimetrech za hodinu. Vždy potřebuje údaj o tom, přes jak dlouhý interval se počítala.</dd></div>
          <div><dt>Vodní hodnota sněhu</dt><dd>Množství kapalné vody, které by vzniklo roztáním sněhu. Liší se od výšky sněhové vrstvy.</dd></div>
          <div><dt>Disdrometr</dt><dd>Přístroj pro měření vlastností jednotlivých srážkových částic. Z jejich velikostí a počtů vzniká rozdělení velikostí kapek či vloček.</dd></div>
        </dl>
        <p className="article-glossary__note">Stejný hodinový úhrn může vzniknout z dlouhého mírného deště i z krátké prudké přeháňky. Rozliší je měření v kratších intervalech.</p>
      </aside>

      <div className="article-prose">
        <h2>Kolik vody spadlo a z jakých částic</h2>
        <p className="article-prose__intro">
          Srážkoměr měří množství srážek zachycených otvorem o známé ploše. Z objemu nebo hmotnosti vody
          určí srážkový úhrn, tedy výšku vodní vrstvy odpovídající tomuto množství. Disdrometr sleduje
          jednotlivé padající kapky či sněhové částice. U optického provedení částice procházejí
          světelným paprskem. Z toho, jak silně a na jak dlouho světlo zeslabí, přístroj
          odvozuje jejich velikost a rychlost pádu.
        </p>
        <p>
          Podrobně projdeme váhový přístroj Geonor T-200B v americké referenční klimatické síti
          USCRN, anglicky U.S. Climate Reference Network. Doplní jej optický OTT Parsivel².
          Jejich údaje tvoří podklad pro <Link href="/pozorovani/srazky-a-privalove-srazky">pozorování srážek a přívalových dešťů</Link>{" "}
          a pro kontrolu <Link href="/metody/aktivni-radarove-mereni">radarových odhadů srážek</Link>.
          Nejprve vysvětlíme, jak množství zachycené vody vyjádřit tak, aby šlo porovnávat
          různé srážkoměry. Na skutečné hodině deště potom ukážeme rozdíl mezi celkovým
          množstvím vody a rychlostí, s jakou přibývala. Nakonec se dostaneme k tomu,
          co místní měření poskytuje pro poznání srážek na větším území.
        </p>

        <h2>Proč srážky vyjadřujeme v milimetrech</h2>
        <p>
          Větší sběrný otvor může při stejném dešti zachytit více vody než menší.
          Samotný objem v nádobě proto nestačí k porovnání množství srážek. Objem vody
          dělíme plochou sběrného otvoru a získáme výšku vrstvy, kterou by voda na této
          ploše vytvořila. Jeden litr rozprostřený na jednom metru čtverečním
          vytvoří vrstvu vysokou jeden milimetr. Údaj 10 mm za den tedy odpovídá 10 litrům na metr
          čtvereční. Jde o množství dopadající vody před odtokem, vsakem a výparem.
          Základ měření i konstrukce srážkoměrů popisuje
          <SourceLink id="WEB_World_Meteorological_Organiz_prirucka_WMO_c_8_f7933a04"> příručka Světové meteorologické organizace, svazek I, kapitola 6</SourceLink>.
        </p>
        <p>
          Objem můžeme zjistit přímo nebo jej vypočítat z přírůstku hmotnosti vody.
          K druhému postupu potřebujeme hustotu, tedy hmotnost připadající na jednotku
          objemu. Dělením hmotnosti hustotou dostaneme objem a dalším dělením plochou úhrn:
        </p>
        <div className="article-formula method-equation">
          <p>P = V / A = Δm / (ρ A)</p>
        </div>
        <p>
          P je úhrn, V objem zachycené vody, A plocha otvoru, Δm přírůstek hmotnosti a ρ hustota
          kapalné vody. Značka Δ označuje změnu, zde hmotnost přidanou za sledovaný interval.
          Při dosazení objemu v metrech krychlových a plochy v metrech čtverečních vyjde P
          v metrech. Pro stejný výsledek z hmotnosti dosazujeme kilogramy a hustotu
          v kilogramech na metr krychlový. Násobením tisícem získáme milimetry.
          U sněhu převádíme hmotnost na objem vody po roztání.
          Tak získaná <strong>vodní hodnota</strong> vypovídá o množství vody ve sněhu, zatímco
          výška sněhové vrstvy závisí také na tom, kolik vzduchu zůstává mezi vločkami.
        </p>
        <p>
          Sběrný otvor Geonoru má plochu 200 cm², tedy 0,02 m². Ilustračně: 20 mililitrů
          zachycené vody proto odpovídá úhrnu 1 mm. Tato geometrie vysvětluje převod,
          ale ještě neříká, zda přístroj zachytil všechny částice, které by na jeho místo
          dopadly bez přítomnosti nádoby. Rozměr a uspořádání uvádí
          <SourceLink id="2026_NOAA_Geonor_Description"> technický popis NOAA</SourceLink>.
        </p>
        <p>
          Každý úhrn patří určitému místu a časovému intervalu. Chceme-li popsat sílu deště,
          potřebujeme také vědět, za jak dlouho voda spadla. Úhrn dělený délkou intervalu
          nazýváme průměrnou intenzitou srážek a obvykle jej vyjadřujeme v milimetrech
          za hodinu, značka mm/h. Stejný hodinový úhrn může vzniknout při rovnoměrném dešti
          i během krátké prudké přeháňky. Kratší intervaly nám umožní tyto průběhy rozlišit.
        </p>

        <h2>Váhový srážkoměr: od nádoby ke kmitání struny</h2>
        <p>
          Voda a sníh padají do nádoby zavěšené na snímačích zatížení. V provedení USCRN nese
          nádobu trojice snímačů s napnutými kovovými strunami. Elektronický impulz strunu rozkmitá.
          Větší zatížení mění její napnutí, a tím i frekvenci, počet kmitů za sekundu.
          Jednotka hertz, značka Hz, znamená jeden kmit za sekundu. Elektronika tak nejprve
          zaznamená frekvenci. Pro převod na obsah nádoby potřebujeme vztah mezi frekvencí
          a známým zatížením. Určujeme jej kalibrací, tedy porovnáním odezvy přístroje
          s referenčními hodnotami.
          <SourceLink id="2026_NOAA_Geonor_Description"> NOAA popisuje právě tento převod</SourceLink>.
        </p>
        <p>
          Obsah nádoby po převodu vyjadřujeme v milimetrech vody vztažených k ploše otvoru.
          Je to údaj o všem, co už nádoba obsahuje. Pro úhrn za zvolený interval potřebujeme
          zjistit, o kolik tento obsah mezi začátkem a koncem intervalu přibyl.
          Teprve změna obsahu je vstupem pro určení srážky za danou dobu.
        </p>
        <p>
          Při sněžení musí zůstat sběrný otvor průchodný. V USCRN omezuje vyhřívání ústí
          namrzání a ucpání sněhem, zatímco větrolamy zmírňují účinky větru.
          <SourceLink id="2026_USCRN_Measurements"> Dokumentace měřicí sítě</SourceLink> tyto součásti
          popisuje spolu se snímači. Správný převod frekvence by chybějící sníh z ucpaného otvoru nenahradil.
        </p>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Od zachycených srážek k úhrnu za hodinu">
            <div><span>1</span><strong>Nádoba s otvorem</strong><small>Otvor 200 cm² zachycuje srážky. Jejich hmotnost zatěžuje tři snímače.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Kmitající struny</strong><small>Tři frekvence se vlastními kalibračními vztahy převedou na obsah nádoby v mm.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Přírůstky vody</strong><small>Změny obsahu projdou kontrolou šumu a přítomnosti srážek. Vzniknou pětiminutové úhrny.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Úhrn a intenzita</strong><small>Úhrny se sčítají. Dělení délkou intervalu určí průměrnou intenzitu.</small></div>
          </div>
          <figcaption>
            Vlastní schéma podle <SourceLink id="2026_USCRN_Measurements">popisu měření USCRN</SourceLink> a
            <SourceLink id="2015_USCRN_OAP2"> algoritmu NOAA</SourceLink>.
            Šipky sledují převod fyzikálního signálu na množství vody a následné zpracování.
            Trojice strun sdílí jednu nádobu. Poskytuje kontrolu snímačů, ale společnou ztrátu
            srážek nad otvorem tímto porovnáním neodhalí.
          </figcaption>
        </figure>
        <p>
          <SourceLink id="2016_Geonor_T200B_Manual">Manuál z března 2016</SourceLink> uvádí pro variantu
          s kapacitou 600 mm citlivost 0,05 mm a opakovatelnost 0,1 mm. Frekvence se pohybuje
          přibližně od 1 000 Hz u prázdné po 3 000 Hz u plné nádoby. Citlivost zde popisuje
          schopnost reagovat na malé přídavky vody, opakovatelnost shodu opakovaných
          měření za stejných podmínek. Tyto technické údaje patří konkrétnímu přístroji.
          Nejistotu pětiminutového deště v terénu ovlivňuje také zachycení srážek a zpracování
          změn zatížení, ke kterému nyní přejdeme.
        </p>
        <details className="method-details">
          <summary>Kalibrační převod frekvence</summary>
          <p>
            Kalibrační vztah nejprve porovná měřenou frekvenci s frekvencí prázdné nádoby.
            Z rozdílu vypočítá obsah nádoby. Pro konkrétní strunu používá dva koeficienty,
            tedy čísla určující podobu převodu:
          </p>
          <div className="article-formula method-equation"><p>H = 10 [a (f − f₀) + b (f − f₀)²]</p></div>
          <p>
            H je obsah nádoby vyjádřený výškou vody v milimetrech, f měřená frekvence v Hz
            a f₀ frekvence prázdné nádoby při kalibraci. Koeficienty a a b patří konkrétní struně
            a jsou v jejím kalibračním protokolu. V uvedené konvenci dávají výsledek v centimetrech,
            proto se násobí deseti. Značky jsme upravili, aby se nepletly s plochou otvoru A.
            Rovnici obsahuje <SourceLink id="2016_Geonor_T200B_Manual">oddíl 7.2 manuálu</SourceLink>.
            Pro srážku za interval potřebujeme změnu H v čase.
          </p>
        </details>

        <h2>Jak se ze změny zatížení stane srážka</h2>
        <p>
          Rozdíl dvou odečtů nemusí přesně odpovídat přidané srážce. Elektronický šum
          a chvění nádoby způsobují kolísání údajů, výpar jejího obsahu zase může skutečně
          snížit zatížení. Zpracování proto musí odlišit přibývání srážek od těchto vlivů.{" "}
          <SourceLink id="2015_USCRN_OAP2">Oficiální algoritmus NOAA OAP 2.0</SourceLink>,
          anglicky Official Algorithm for Precipitation, určuje postup této kontroly a výpočtu.
        </p>
        <p>
          Algoritmus kombinuje údaje tří snímačů podle jejich kolísání v několika posledních
          hodinách. Klidnější záznam má při výpočtu větší váhu, tedy více ovlivňuje společný
          výsledek. Samostatný detektor mokrého povrchu pomáhá určit, zda skutečně padaly
          srážky. Poskytuje tak další informaci vedle samotné změny zatížení.
        </p>
        <p>
          Postup kontroluje chybné odečty a pracuje i se zápornými změnami. Při kolísání
          kolem stálého obsahu se mohou střídat zdánlivé přírůstky a úbytky.
          Prosté odstranění všech záporných hodnot by ponechalo kladnou polovinu šumu
          a vytvářelo zdánlivý déšť. Algoritmus proto záporné příspěvky zohledňuje při úpravě
          kladných, místo aby je pouze zahodil.
        </p>
        <p>
          Malé zbytky algoritmus převádí do dalšího vhodného intervalu, dokud dosáhnou
          vykazovacího prahu 0,2 mm. Slabý déšť se tak může v záznamu objevit později než jeho
          první kapky. Výstup má krok 0,1 mm, tedy odstup sousedních vykazovaných hodnot.
          Práh určuje, kdy se nahromaděné malé množství vykáže, zatímco krok určuje jemnost
          zápisu výsledku. Ani jeden údaj sám nevyjadřuje nejistotu měření.
        </p>
        <p>
          Použitá data jsou podle <SourceLink id="2017_USCRN_Subhourly_Readme">dokumentace archivu</SourceLink>{" "}
          ve verzi 2.1.1. Navazují na základní postup z roku 2015 s pozdějšími opravami.
          V příkladu počítáme až z hotových pětiminutových úhrnů. Převod jednotlivých frekvencí,
          výběr vah a vyřazení vadných odečtů zde zpětně nesestavujeme.
        </p>
        <div className="method-comparison" aria-label="Další provedení srážkoměru">
          <section>
            <h3>Ruční sběrná nádoba</h3>
            <p>Pozorovatel odečte zachycený objem, obvykle jednou denně. Zná úhrn mezi odečty, ale jeho rozdělení do minut tím nezíská.</p>
          </section>
          <section>
            <h3>Překlápěcí nádobky</h3>
            <p>Naplněná nádobka se překlopí a přístroj zaznamená impuls. Počet impulsů násobený objemem na jedno překlopení dá zachycený objem vody. Po vydělení plochou otvoru získáme úhrn. Při silném dešti ovlivňuje výsledek i voda přitékající během pohybu.</p>
          </section>
        </div>
        <p>
          U překlápěcího přístroje proto záleží na kalibraci při různých rychlostech přítoku.
          Rozdíly těchto konstrukcí a laboratorní zkoušky shrnuje
          <SourceLink id="WEB_World_Meteorological_Organiz_prirucka_WMO_c_8_f7933a04"> WMO v kapitole 6</SourceLink>.
        </p>

        <h2>Skutečný příklad: déšť na Blue Hill</h2>
        <p>
          Stanice MA Blue Hill 0 W v Massachusetts vykázala 7. června 2025 mezi 14:00 a 15:00
          místního standardního času úhrn {number(example.hourlyDepthMm)} mm. Standardní čas
          v souboru zůstává UTC−5 i v létě, kdy místní občanské hodiny ukazují o hodinu více.
          V jednotném světovém čase UTC tedy jde o 19:00 až 20:00.
          Používáme <SourceLink id="2025_USCRN_Blue_Hill_Subhourly">pětiminutový soubor NOAA za rok 2025</SourceLink>{" "}
          a <SourceLink id="2025_USCRN_Blue_Hill_Hourly">odpovídající hodinový záznam</SourceLink>, stažené 4. října 2026.
        </p>
        <p>
          Ukázku jsme vybrali jako první úplnou hodinu od června do srpna 2025 s alespoň 5 mm
          srážek a teplotou nad 10 °C ve všech dvanácti pětiminutových intervalech.
          Není výběrem největší srážky roku. Označení stanice je 94785, verze programu
          stanice v záznamu 2.623. Ta se liší od verze zpracovaných dat 2.1.1.
        </p>
        <p>
          Ze sloupce PRECIPITATION přebíráme již zpracovaný úhrn v milimetrech.
          <SourceLink id="2017_USCRN_Subhourly_Readme"> Význam sloupců stanovuje NOAA</SourceLink>.
          Dokumentace tomuto odvozenému poli nepřiřazuje samostatný příznak kvality,
          tedy značku s výsledkem kontroly daného údaje. Neplatné výsledky mají zvláštní zápornou
          značku chybějící hodnoty. Náš výpočet vyžaduje všech dvanáct platných úhrnů,
          správné pořadí a návaznost časů. Mezeru by nedoplnil nulou, protože chybějící údaj
          neznamená, že nepršelo.
        </p>
        <p>
          Každý čas v tabulce označuje <strong>konec předcházejících pěti minut</strong>.
          Řádek 14:30 tedy patří dešti od 14:25 do 14:30. Jeho úhrn 2,6 mm říká, kolik vody
          za těchto pět minut spadlo. Ve třetím sloupci je stejný údaj vyjádřený průměrnou
          intenzitou v mm/h. Převod si projdeme hned za tabulkou.
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" aria-label="Pětiminutové srážky na Blue Hill" tabIndex={0}>
            <table>
              <caption>Blue Hill · 7. června 2025 · čas konce intervalu (UTC−5)</caption>
              <thead><tr><th scope="col">Čas</th><th scope="col">Úhrn <span className="method-data-output__unit">[mm]</span></th><th scope="col">Intenzita <span className="method-data-output__unit">[mm/h]</span></th></tr></thead>
              <tbody>{example.rows.map((row) => <tr key={row.endTimeLST}><th scope="row">{row.endTimeLST}</th><td>{number(row.depthMm)}</td><td>{number(row.meanRateMmPerHour)}</td></tr>)}</tbody>
              <tfoot><tr><th scope="row">Celá hodina</th><td>{number(example.hourlyDepthMm)}</td><td>{number(example.hourlyDepthMm)}</td></tr></tfoot>
            </table>
          </div>
        </div>
        <p>
          Součet úhrnů je 9,2 mm. Shoduje se s hodnotou P_CALC v samostatném hodinovém souboru,
          kde toto pole znamená množství srážek za hodinu končící uvedeným časem.
          <SourceLink id="2026_USCRN_Hourly_Readme"> Popis hodinového formátu</SourceLink> umožňuje kontrolu
          zopakovat. Oba soubory však vycházejí ze stejného přístroje a zpracování.
          Shoda pomáhá odhalit chybu při výběru intervalů nebo jejich sčítání.
          Správnost samotného srážkoměru nezávisle neověřuje, protože jeho případnou chybu
          mohou obsahovat oba soubory.
        </p>
        <p>
          Nyní chceme zjistit průměrnou intenzitu nejsilnějšího pětiminutového úseku.
          Od 14:25 do 14:30 přibylo 2,6 mm vody. Tento úhrn P vydělíme délkou intervalu
          Δt v hodinách. Pět minut je dvanáctina hodiny, takže dělení tímto časem odpovídá
          násobení úhrnu dvanácti:
        </p>
        <div className="article-formula method-equation"><p>R = P / Δt = 2,6 / (5/60) = 31,2 mm/h</p></div>
        <p>
          R je průměrná intenzita. Výsledek 31,2 mm/h znamená, že při zachování této průměrné
          rychlosti přibývání vody po celou hodinu by spadlo 31,2 mm. V našem záznamu se
          však tato hodnota vztahuje pouze k uvedeným pěti minutám.
          Za celou hodinu spadlo 9,2 mm a hodinová průměrná intenzita tedy byla 9,2 mm/h.
          Déšť mohl i uvnitř pětiminutového úseku zesilovat a slábnout.
          Okamžité maximum z těchto dat nezjistíme, protože máme pouze souhrn za celý interval.
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/rain-gauges/blue-hill-rain.png" alt="Pětiminutová intenzita deště na Blue Hill stoupá z 3,6 na 31,2 mm za hodinu a potom klesá. Hodinový průměr je 9,2 mm za hodinu." width={1600} height={1120} sizes="(max-width: 800px) 100vw, 850px" unoptimized />
          <figcaption>
            Vlastní výpočet z <SourceLink id="2025_USCRN_Blue_Hill_Subhourly">dat NOAA</SourceLink>.
            Modré sloupce pokrývají jednotlivé pětiminutové intervaly, jejich výška udává
            průměrnou intenzitu v mm/h. Přerušovaná čára ukazuje průměr celé hodiny.
            Časová osa používá místní standardní čas. Nejvyšší sloupec od 14:25 do 14:30
            ukazuje, jak výrazně může krátký úsek přesáhnout hodinový průměr.
            Graf zachovává časové rozlišení
            dat a neukazuje podrobnější průběh mezi odečty.
          </figcaption>
        </figure>
        <details className="method-details">
          <summary>Data a opakování výpočtu</summary>
          <p>
            Uložte <a href={`${dataPath}/blue-hill-five-minute.txt`} download>12 původních pětiminutových záznamů</a>,
            <a href={`${dataPath}/blue-hill-hourly.txt`} download> hodinový záznam</a>,
            <a href={`${dataPath}/example.json`} download> popis výběru a kontrolní součty</a> a
            <a href={`${dataPath}/reproduce.mjs`} download> výpočet v JavaScriptu</a> do jedné složky.
            Příkaz <code>node reproduce.mjs</code> pro Node.js 22 a novější ověří nezměněné soubory,
            časy a chybějící hodnoty a vypíše tabulku i porovnání s hodinovým úhrnem.
            Přijme také oba úplné roční soubory podle návodu ve skriptu.
          </p>
          <p>
            Původní textové řádky NOAA jsou zachované beze změny. Jejich kontrolní součty SHA-256
            umožňují poznat pozdější změnu vstupu. Čtenář může samostatně zopakovat výpočet
            od publikovaných úhrnů. Surové frekvence strun a kalibrační protokoly dané stanice
            tyto dva soubory neobsahují. Pro graf je k dispozici také
            <a href={`${dataPath}/plot.py`} download> skript pro Python a Matplotlib</a>.
          </p>
        </details>

        <h2>Disdrometr: co se dozvíme z průchodu kapky světlem</h2>
        <p>
          Optický <SourceLink id="2024_OTT_Parsivel2_Manual">OTT Parsivel²</SourceLink> vysílá vodorovný
          pás laserového světla směrem k přijímači. Padající částice při průchodu část
          světla zastíní. Přijímač převede změnu množství světla na změnu elektrického
          napětí. Zaznamenaným signálem je tak krátký pokles napětí.
        </p>
        <p>
          Na tomto poklesu přístroj sleduje dvě vlastnosti. Velikost poklesu nese informaci
          o velikosti částice, doba jeho trvání o tom, jak dlouho částice procházela
          paprskem. Ze známých rozměrů měřicího uspořádání a doby průchodu se odvozuje
          rychlost pádu. Velikost a rychlost jsou tedy výsledky převodu optického signálu.
        </p>
        <p>
          Přístroj zařazuje částice do 32 velikostních a 32 rychlostních tříd.
          Každá třída představuje určitý interval velikosti nebo rychlosti.
          Výstupní tabulka má pro jejich kombinace 1 024 polí. Každé pole obsahuje počet
          částic, které za sledovaný interval spadaly současně do dané velikostní
          a rychlostní třídy.
        </p>
        <p>
          Manuál z února 2024 uvádí měřicí plochu 180 × 30 mm, tedy 54 cm², rozsah velikostí
          kapalných částic 0,2 až 8 mm, pevných 0,2 až 25 mm a rychlostí 0,2 až 20 m/s.
          Třídy mají různou šířku. Počet polí proto neznamená rozlišení stejné pro všechny velikosti.
          Výrobní kalibrace používá referenční částice o rozměrech 0,5, 1, 2 a 4 mm.
          Ty prověřují optickou odezvu, zatímco zachycení proměnlivého deště ověřuje až srovnání v terénu.
        </p>
        <p>
          Kombinace velikostí a rychlostí pomáhá rozlišit déšť, sníh a další druhy srážek.
          Přístroj porovnává zastoupení částic v jednotlivých třídách se svými pravidly
          pro určení druhu srážky. Označení druhu je tedy výsledek klasifikace odvozený
          z měřených vlastností částic.
        </p>
        <p>
          K výpočtu úhrnu kapalného deště potřebujeme z velikostí a počtů kapek získat
          jejich celkový objem. Zpracování proto potřebuje předpoklad o tvaru kapky.
          Menší kapky se blíží kouli, větší jsou zploštělé. Pro výpočet se používá průměr
          koule, která má stejný objem jako kapka. Objemy připadající na jednotlivé
          velikostní třídy se vztáhnou k účinné měřicí ploše pro danou velikost a jejich
          příspěvky se sečtou. Účinná plocha zohledňuje, na jaké části měřicího prostoru
          lze kapku dané velikosti započítat, včetně omezení na okraji paprsku.
          Stejně jako u srážkoměru tím vznikne výška vodní vrstvy. Jde o geometrický
          základ převodu, podoba výsledku závisí také na třídění a filtrech přístroje.
        </p>
        <p>
          Výsledek závisí na správném odhadu velikostí. Při výpočtu objemu násobíme tři
          stejné hodnoty průměru, tedy používáme jeho třetí mocninu. Chyba průměru se proto
          v objemu zesiluje. U sněhové vločky optický rozměr sám neurčuje její hmotnost.
          Pro vodní hodnotu sněhu bychom proto
          potřebovali další vztah mezi velikostí a hmotností.
        </p>
        <p>
          Záleží také na tom, které zaznamenané částice do výpočtu zahrneme.{" "}
          <SourceLink id="DOI_10_1175_jtech_d_13_00174_1">Tokay, Wolff a Petersen</SourceLink> popisují
          také vyřazování částic s nepravděpodobnou kombinací velikosti a rychlosti, které mohou
          pocházet z rozstřiku. Filtr se tak snaží oddělit padající srážky od částic
          vzniklých jinak. Pravidlo pro vyřazení je zvolenou součástí zpracování
          a ovlivňuje výsledné počty i vypočtený úhrn.
        </p>
        <details className="method-details">
          <summary>Jak z počtu kapek vzniká úhrn deště</summary>
          <p>
            V každé velikostní třídě násobíme počet kapek objemem kapky o reprezentativním
            průměru. Tento průměr zastupuje velikosti uvnitř třídy. Po zohlednění účinné
            plochy a sečtení příspěvků získáme přibližný úhrn kapalného deště:
          </p>
          <div className="article-formula method-equation"><p>P ≈ Σ nᵢ πDᵢ³ / (6 Aᵢ)</p></div>
          <p>
            Symbol Σ znamená součet přes velikostní třídy. nᵢ je počet kapek v třídě i
            za zvolený interval, Dᵢ reprezentativní průměr koule o stejném objemu jako kapka
            a Aᵢ účinná měřicí plocha pro tuto velikost. Objem koule je πDᵢ³/6.
            Součet objemů dělených plochou poskytne výšku vody. S rozměry v milimetrech
            a plochou v mm² vyjde P v mm. Následným dělením dobou v hodinách dostaneme mm/h.
          </p>
          <p>
            Je to geometrické vysvětlení výpočtu pro kapalné kapky, nikoli úplný přepis
            programu výrobce. Skutečný postup řeší částice na okraji paprsku, zvolené třídy
            a filtry. Průměr vstupuje do třetí mocniny, takže jeho chyba se v objemu zesiluje.
            U sněhu by stejný součet objemů koulí bez dalšího vztahu mezi velikostí a hmotností
            nedal vodní hodnotu srážek.
          </p>
        </details>

        <h2>Kalibrace, kontrola a vliv větru</h2>
        <p>
          Při kalibraci zjišťujeme, jaký údaj přístroj poskytne pro známé referenční hodnoty.
          Určujeme tak převodní vztah včetně nejistot. Pro váhový přístroj potřebujeme
          známé zatížení. Jeho hodnota musí být doložená návazností na měření hmotnosti,
          tedy sledem porovnání s referencemi, z nichž každá má vlastní nejistotu.
          Pokud do odezvy přístroje zasahujeme, provádíme seřízení. Toto rozlišení vychází z
          <SourceLink id="2012_VIM_Calibration"> mezinárodního metrologického slovníku VIM</SourceLink>.
          Shoda s referencí po seřízení musí být znovu ověřena.
        </p>
        <p>
          <SourceLink id="2016_Geonor_T200B_Manual">Manuál Geonoru</SourceLink> předepisuje kontrolu
          prázdné nádoby a odezvy po přidání 1 kg vody, který odpovídá přibližně 50 mm.
          Odchylka větší než 0,5 % při této zkoušce je důvodem k nové kalibraci.
          <SourceLink id="2026_USCRN_Measurements"> USCRN</SourceLink> k pravidelným kalibracím přidává
          denní sledování stavu měření. Porovnání tří strun může upozornit na snímač,
          jehož odezva se od ostatních odchýlila. Všechny ale sdílejí nádobu a prostředí.
          Pokud část srážek do nádoby vůbec nedopadne, mohou se tři údaje shodovat,
          přestože je výsledný úhrn podhodnocený.
        </p>
        <p>
          Vítr mění dráhy částic nad sběrným otvorem. Část srážek proto může otvor minout
          a do vážení se vůbec nedostane. U lehkých vloček může tato ztráta převážit
          nad chybou samotného vážení. <SourceLink id="DOI_10_5194_hess_21_1973_2017">Kochendorfer a spoluautoři</SourceLink>{" "}
          porovnali přístroje s různými větrolamy v USA a Norsku. Nechráněný váhový srážkoměr
          může při sněžení a větru nad 5 m/s zachytit méně než polovinu skutečného množství.
          Toto zjištění se týká uvedených podmínek, nelze jím automaticky opravovat náš letní déšť.
        </p>
        <p>
          Referenci v této studii poskytovaly srážkoměry uvnitř velkého dvojitého plotového
          větrolamu. Sdílely princip vážení, lišily se ochranou před větrem. Porovnání tak
          umožňovalo sledovat vliv této ochrany. Ani reference není bezchybným zachycením
          každé vločky. Vztahy pro opravu ztrát autoři odvozovali z větru a teploty.
        </p>
        <p>
          U většiny zkoušek oddělovali data pro odvození a kontrolu. Vztah nastavili
          na devíti desetinách měření a zkoušeli na zbývající desetině. Tím ověřovali,
          zda oprava funguje také pro měření, podle kterých její podobu neurčili.
          U zmenšeného dvojitého větrolamu se tento postup nezdařil, takže jeho odhad
          nejistoty stejnou kontrolu nemá.
        </p>
        <p>
          <SourceLink id="DOI_10_1175_jtech_d_13_00174_1">Tokay a kolegové</SourceLink> v roce 2011
          zkoušeli novou verzi Parsivelu vedle dvou překlápěcích srážkoměrů a nárazového
          disdrometru, který odvozuje vlastnosti částic z jejich nárazů.
          Pro jednotlivé srážkové události porovnali úhrn optického přístroje s úhrnem
          referenčního srážkoměru. Velikosti rozdílů bez ohledu na jejich znaménko
          zprůměrovali a vydělili průměrným referenčním úhrnem. Takto vyjádřená
          průměrná absolutní odchylka byla přibližně 6 %.
        </p>
        <p>
          Výsledek popisuje shodu celých událostí v tomto porovnání. Není obecnou přesností
          každé minuty měření. Optika a nádobky mají odlišný princip, takže jejich
          porovnání může odhalit rozdíl mezi optickým převodem a sběrem vody.
          Společné místo a působení větru ale omezují nezávislost kontroly.
          Referenční srážkoměr měl také vlastní chyby.
        </p>
        <p>
          U ukázky z Blue Hill známe časový krok a publikované zaokrouhlení, ale nemáme úplný
          rozpočet nejistoty dané hodiny, tedy vyčíslení a spojení jednotlivých zdrojů
          nejistoty výsledku. Krok 0,1 mm proto nesmíme vydávat za chybu ±0,1 mm.
          Ani jeho přepočet na 1,2 mm/h není nejistotou intenzity. Vyjadřuje pouze odstup
          sousedních vykazovaných hodnot při pětiminutovém intervalu.
          Chybu zachycení a předchozího zpracování samotným součtem nevyčíslíme.
        </p>

        <h2>Od průběžného zápisu ke klimatickému záznamu</h2>
        <p>
          Hellmannův <SourceLink id="WEB_DWD_Hellmann_1897_Ein_neuer_registrirender_Regenmesser">původní popis registračního srážkoměru z roku 1897</SourceLink>{" "}
          ukazuje plovák zvedaný přibývající vodou, pero a papírový záznam poháněný hodinovým
          strojem. Stoupající plovák pohyboval perem, zatímco hodinový stroj posouval
          papírový záznam v čase. Po naplnění vyprázdnil nádobu sifon, trubice odvádějící
          vodu z nádoby. Proti jedinému odečtu nádoby přidal
          záznam časového průběhu. Dnešní automatické snímače tento požadavek zachovávají,
          ale umožňují časté odečty a systematickou kontrolu elektronických záznamů.
        </p>
        <p>
          <SourceLink id="2013_Diamond_USCRN">Diamond a spoluautoři v roce 2013</SourceLink> popsali
          USCRN jako referenční síť se stabilně volenými místy, opakovaným měřením a evidencí
          provozu. Síť zajišťuje podmínky, za kterých lze jednotlivé údaje spojovat v dlouhodobý
          záznam. Přístroj poskytuje místní úhrn. Posouzení změn klimatu navíc potřebuje dostatečně
          dlouhé období, kontrolu změn stanice a srovnatelné pokrytí území. Jinak by rozdíl
          mezi obdobími mohl souviset se změnou měřicích podmínek nebo s tím, které části
          území byly měřeny.
        </p>
        <p>
          Konkrétní navazující produkt představuje <SourceLink id="DOI_10_1038_s41597_023_02238_4">GSDR-I, popsaný Pritchardem a spoluautory v roce 2023</SourceLink>.
          Zkratka označuje globální soubor ukazatelů srážek v intervalech kratších než den.
          Autoři vyšli z 18 591 staničních záznamů a počítali charakteristiky intenzity, délky
          a četnosti dešťů. Kontrolovali například záměnu denního úhrnu za hodinový,
          dlouhá podezřelá období nul a nesoulad se sousedními stanicemi. Tyto kontroly
          pomáhají najít záznamy, které by mohly zkreslit výpočet síly nebo četnosti dešťů.
          Výsledky převáděli také do prostorové mřížky, tedy soustavy buněk pokrývajících
          území. Místní údaje ze stanic přitom doplnili odhadem mezi stanicemi.
          Výsledek v mřížce proto závisí také na nerovnoměrném rozmístění měření.
        </p>
        <p>
          Naše hodinová ukázka vysvětluje nejmenší část takového postupu. Teprve soubor mnoha
          srovnatelných hodin dovoluje hledat změnu četnosti či síly krátkých dešťů.
          Příslušné výsledky a pokrytí dat rozebírá článek
          <Link href="/pozorovani/srazky-a-privalove-srazky"> Srážky a přívalové srážky</Link>.
          Vodní hodnotu padajícího sněhu je zároveň nutné rozlišovat od měření
          <Link href="/pozorovani/snehova-pokryvka-a-permafrost"> sněhové pokrývky na zemi</Link>,
          kde množství sněhu mění i tání, přesun větrem a slehávání.
        </p>

        <section className="method-conclusion">
          <h2>Co těmito metodami zjistíme</h2>
          <p>
            Srážkoměry umožňují určit, kolik vody spadlo na měřicím místě za vymezenou dobu,
            a při častém odečítání rozlišit průběh deště. Disdrometry přidávají informace
            o velikostech, rychlostech a druhu padajících částic. Tyto údaje podpírají
            porovnání srážkových úhrnů a krátkých extrémů i kontrolu radarových odhadů.
            Jejich výpověď o větším území a dlouhodobé změně závisí na rozmístění stanic,
            stálosti měřicích podmínek a doloženém zpracování.
          </p>
        </section>
      </div>
    </article>
  );
}
