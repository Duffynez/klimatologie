import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import example from "../../public/data/methods/pressure-height/example.json";

const dataPath = "/data/methods/pressure-height";
const number = (value: number, digits = 3) => value.toLocaleString("cs-CZ", {
  minimumFractionDigits: digits, maximumFractionDigits: digits,
});

export function PressureHeightArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Absolutní tlak</dt><dd>Tlak vztažený k vakuu. Ponořené čidlo zaznamenává společně tlak vody i vzduchu nad hladinou.</dd></div>
          <div><dt>Hydrostatická rovnováha</dt><dd>Stav, při němž rozdíl tlaku mezi dvěma výškami vyvažuje tíhu kapaliny nebo plynu mezi nimi.</dd></div>
          <div><dt>Decibar</dt><dd>Jednotka tlaku se značkou dbar. Jeden dbar je 10 000 pascalů. V oceánografii se běžně používá jako svislá souřadnice.</dd></div>
          <div><dt>CTD</dt><dd>Souprava pro měření vodivosti, teploty a tlaku vody. Anglická zkratka znamená Conductivity, Temperature, Depth. Hloubka vzniká výpočtem z tlaku.</dd></div>
        </dl>
        <p className="article-glossary__note">Tlak potřebuje určenou referenci. Hloubka navíc potřebuje hustotu vody, tíhové zrychlení a vymezení hladiny, od které ji počítáme.</p>
      </aside>

      <div className="article-prose">
        <h2>Jak tlak vypovídá o výšce</h2>
        <p className="article-prose__intro">
          Měření tlaku využívá sílu, kterou kapalina nebo plyn působí na jednotku plochy.
          V klidné vodě tlak roste směrem dolů podle tíhy vodního sloupce nad čidlem.
          Z rozdílu tlaků a známé hustoty proto můžeme určit hloubku ponoření nebo výšku hladiny.
          Obdobný vztah platí ve vzduchu, jehož hustota se s výškou výrazně mění.
        </p>
        <p>
          Podrobně si ukážeme oceánografickou soupravu SBE 9plus s křemenným tlakoměrem Digiquartz.
          Její <SourceLink id="2010_SeaBird_9plus_Manual">technická dokumentace</SourceLink> popisuje
          převod elektrického signálu na tlak. Veřejný kalibrační protokol konkrétního kusu nám
          pak umožní přepočítat rozdíly vůči laboratorní referenci. Pro výšku hladiny a atmosféru
          následně odlišíme další provedení i potřebné vstupy.
        </p>

        <h2>Vodní sloupec nad čidlem</h2>
        <p>
          Ponořené absolutní čidlo nese tlak vzduchu nad hladinou i příspěvek vody mezi hladinou
          a čidlem. Odečtením současného tlaku vzduchu získáme tlak odpovídající samotné vodě.
          Jestliže jsou hustota a tíhové zrychlení v tomto sloupci přibližně stálé, platí:
        </p>
        <p className="article-formula method-equation">h = (p<sub>s</sub> − p₀) / (ρ g)</p>
        <p>
          h je kladná hloubka čidla pod hladinou v metrech. p<sub>s</sub> označuje absolutní tlak
          u čidla a p₀ tlak vzduchu nad hladinou, oba v pascalech, značka Pa. Řecké písmeno ρ
          označuje hustotu vody v kilogramech na metr krychlový a g místní tíhové zrychlení v m/s².
          Pascal je síla jednoho newtonu působící na metr čtvereční.
          <SourceLink id="DOI_10_3133_twri08a3"> Příručka americké geologické služby USGS z roku 2004</SourceLink>{" "}
          vysvětluje tento převod i různé tlakové reference ponorných čidel.
        </p>
        <p>
          Pro představu vezměme ilustrační sloupec vody o hustotě 1 000 kg/m³ a standardní tíhové
          zrychlení 9,80665 m/s². Rozdíl jednoho hektopascalu, značka hPa, tedy 100 Pa, odpovídá přibližně 10,2 mm vody.
          Neodečtená změna tlaku vzduchu o 10 hPa by tak vytvořila zdánlivou změnu hladiny asi
          10,2 cm. Tato čísla jsou výpočtem pro zvolené podmínky, nikoli záznamem určité stanice.
        </p>
        <p>
          Hustota mořské vody závisí na teplotě, obsahu solí a tlaku. V hlubokém oceánu proto
          nestačí dělit tlak jednou hustotou. Převod zohledňuje její změny ve vodním sloupci
          i tíhové zrychlení závislé na zeměpisné šířce. Postup
          <SourceLink id="2021_TEOS10_Height_From_Pressure"> gsw_z_from_p v soustavě TEOS-10</SourceLink>,
          která popisuje termodynamické vlastnosti mořské vody, ukazuje také rozdíl mezi převodem
          pro referenční oceán a výpočtem s údaji o skutečném
          rozložení hustoty. Hloubka tak obsahuje fyzikální předpoklady, které samotný sloupec
          „tlak“ v datovém souboru neprozradí.
        </p>

        <h2>Jak vzniká signál tlakoměru</h2>
        <p>
          V tlakoměrech Digiquartz přenáší pružný tlakový člen zatížení na křemenný rezonátor.
          Ten kmitá s frekvencí, která se mění podle mechanického napětí. Elektronika kmity
          udržuje a měří jejich frekvenci nebo periodu, tedy dobu jednoho kmitu.
          Frekvence se udává v hertzech, značka Hz, tedy v počtu kmitů za sekundu.
          <SourceLink id="2026_Paroscientific_Quartz_Principle"> Technický popis výrobce Paroscientific</SourceLink>{" "}
          ukazuje pro vyšší tlaky zahnutou pružnou trubici, která se tlakem narovnává a napíná
          rezonátor. Pro malé tlaky používá jiné provedení s pružným měchem. Uzavření měřicí
          části ve vakuu poskytuje referenci pro absolutní tlak.
        </p>
        <p>
          U SBE 9plus vede tlak z okolní vody dovnitř přístroje přes olejem naplněnou kapiláru.
          Elektronika zaznamenává frekvenční signál a vnitřní teplotu tlakoměru.
          Kalibrační vztah převádí oba vstupy na tlak, protože teplota ovlivňuje také odezvu
          samotného snímače. Tento vnitřní teploměr má jinou úlohu než čidlo měřící teplotu
          mořské vody. Zapojení a zpracování popisuje
          <SourceLink id="2010_SeaBird_9plus_Manual"> manuál SBE 9plus, strany 7–10 a 44–46</SourceLink>.
        </p>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Od tlaku vody k vypočtené hloubce">
            <div><span>1</span><strong>Tlak vody a vzduchu</strong><small>Zatíží pružný člen a změní napětí křemenného rezonátoru.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Frekvence a teplota</strong><small>Elektronika změří kmitání a teplotu tlakoměru.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Kalibrovaný tlak</strong><small>Vztah určený v laboratoři převede signál na tlak se známou referencí.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Hloubka nebo hladina</strong><small>Výpočet přidá hustotu, tíhové zrychlení a příslušnou výškovou referenci.</small></div>
          </div>
          <figcaption>
            Vlastní schéma podle <SourceLink id="2026_Paroscientific_Quartz_Principle">Paroscientific</SourceLink>,{" "}
            <SourceLink id="2010_SeaBird_9plus_Manual">Sea-Bird</SourceLink> a{" "}
            <SourceLink id="DOI_10_3133_twri08a3">USGS</SourceLink>.
            Šipky označují mechanickou odezvu, převod signálu a následný hydrostatický výpočet.
            Poslední krok potřebuje další údaje, které tlakové čidlo samo nezískává.
          </figcaption>
        </figure>
        <p>
          Manuál z roku 2010 uvádí pro SBE 9plus záznam 24 souborů měření za sekundu.
          U tlakoměru s rozsahem 10 000 psia, přibližně 6 895 dbar absolutního tlaku,
          odpovídá uvedené rozlišení 0,001 % plného rozsahu asi 0,069 dbar. Značka psia
          znamená absolutní tlak v librách síly na čtvereční palec. Výrobcem udaná počáteční
          přesnost 0,015 % rozsahu odpovídá přibližně 1,03 dbar. Jsou to specifikace tohoto
          provedení, které samy nevyjadřují nejistotu každého následného měření hloubky.
        </p>
        <div className="method-comparison" aria-label="Jiná provedení měření tlaku">
          <section>
            <h3>Membránová čidla</h3>
            <p>Průhyb membrány může měnit elektrický odpor nebo kapacitu. Přístroj pak zaznamenává jinou elektrickou odezvu než křemenný tlakoměr. Převod opět vyžaduje kalibraci při různých tlacích a teplotách.</p>
          </section>
          <section>
            <h3>Čidla s odvětranou referencí</h3>
            <p>Tenká trubička přivádí vzduch nad hladinou na druhou stranu membrány. Čidlo tak rovnou sleduje rozdíl vůči místní atmosféře. Ucpání nebo zavlhnutí trubičky tuto výhodu poruší.</p>
          </section>
        </div>
        <p>
          Obě varianty a jejich provozní omezení rozebírá
          <SourceLink id="DOI_10_3133_twri08a3"> příručka USGS, oddíly o konstrukci a instalaci</SourceLink>.
          U absolutního záznamníku se tlak vzduchu měří zvlášť. U odvětraného přístroje by jeho
          opětovné odečtení bylo chybou. Rozhoduje konstrukce čidla i to, jaké opravy již provedl software.
        </p>

        <h2>Kalibrace a skutečný protokol</h2>
        <p>
          Kalibrace určuje vztah mezi odečtem a referenčními hodnotami včetně jejich nejistot.
          Seřízení mění odezvu přístroje. Toto rozlišení stanovuje
          <SourceLink id="2012_VIM_Calibration"> metrologický slovník VIM</SourceLink>.
          Pro tlakoměr můžeme vytvořit známý tlak závažím působícím na píst o známé účinné ploše.
          Reference přitom potřebuje doloženou hmotnost, plochu, tíhové zrychlení a příslušné korekce.
          Návaznost je řetězec takových porovnání s vyčíslenou nejistotou.
        </p>
        <p>
          <SourceLink id="2010_SeaBird_9plus_Manual">Sea-Bird na stranách 31–32</SourceLink> popisuje
          kontrolu v celém rozsahu pomocí pístového tlakového etalonu i kontrolu počátku stupnice
          barometrem. Jediný bod u atmosférického tlaku neprověří chování čidla v hlubokém moři.
          Před porovnáním musí být přístroj teplotně ustálený a v předepsané poloze.
        </p>
        <p>
          Použijeme <SourceLink id="2022_SeaBird_P1207_Calibration">kalibrační protokol Sea-Bird Scientific
          z 6. června 2022</SourceLink>, zveřejněný v archivu Atlantické oceánografické
          a meteorologické laboratoře amerického Národního úřadu pro oceán a atmosféru, zkráceně NOAA AOML.
          Patří soupravě <strong>SBE 9plus, sériové číslo 1207</strong>, s tlakovým snímačem číslo
          131013 a rozsahem 10 000 psia. Tabulka zachovává jedenáct bodů při postupném zvýšení
          a následném snížení tlaku. Obsahuje referenci, frekvenci, vnitřní teplotu a tlak před
          opravou i po ní. Jde o laboratorní kalibraci, nikoli o profil oceánu.
        </p>
        <figure className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" aria-label="Všech jedenáct kalibračních bodů" tabIndex={0}>
            <table>
              <thead><tr><th scope="col">Absolutní reference (dbar)</th><th scope="col">Rozdíl před opravou (dbar)</th><th scope="col">Rozdíl po opravě (dbar)</th></tr></thead>
              <tbody>
                {example.rows.map((row) => (
                  <tr key={row.step}><th scope="row">{number(row.referenceDbar)}</th><td>{number(row.beforeDbar)}</td><td>{number(row.afterDbar)}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption>
            Vlastní výpočet ze všech řádků <SourceLink id="2022_SeaBird_P1207_Calibration">protokolu</SourceLink>{" "}
            v původním pořadí. Rozdíl je údaj přístroje minus reference. Kladné číslo znamená,
            že přístroj ukazuje více. Původní jednotky psi jsme převedli na dbar násobením 0,689476
            podle manuálu Sea-Bird. Desetinná místa zachycují přepočet, nikoli deklarovanou nejistotu.
          </figcaption>
        </figure>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/pressure-height/calibration-residuals.png"
            alt="Rozdíly mezi tlakoměrem a referencí v jedenácti kalibračních bodech. Oprava snižuje největší absolutní rozdíl přibližně z 0,725 na 0,273 dbar. Výsledky při rostoucím a klesajícím tlaku se zcela nepřekrývají."
            width={1600} height={1216} sizes="(max-width: 700px) 100vw, 770px" unoptimized />
          <figcaption>
            Vlastní graf stejných jedenácti bodů. Vodorovná osa je absolutní referenční tlak,
            svislá rozdíl od reference. Oranžová znamená stav před opravou, zelená po opravě.
            Kruhy a plné čáry sledují zvyšování tlaku, čtverce a přerušované čáry jeho snižování.
            Spojnice pouze vedou mezi měřenými body. Rozdíly mezi oběma směry nemůžeme celé připsat
            mechanické paměti čidla, protože se při zkoušce měnila také jeho teplota.
          </figcaption>
        </figure>
        <p>
          Osmý řádek uvádí frekvenci 35 196,00 Hz a vnitřní teplotu 23,5 °C. Referenční tlak
          byl 5 976,138 psia, údaj přístroje před opravou 5 977,189 psia a po opravě
          5 976,534 psia. Odečtením reference od opraveného údaje dostaneme:
        </p>
        <p className="article-formula method-equation">(5 976,534 − 5 976,138) × 0,689476 ≈ 0,273 dbar</p>
        <p>
          Přístroj po opravě ukázal o 0,396 psi více než reference. Zároveň jde o největší
          absolutní rozdíl po opravě v této tabulce. Před opravou byl největší rozdíl asi
          0,725 dbar. V ilustrační vodě s hustotou 1 000 kg/m³ by rozdíl 0,273 dbar odpovídal
          přibližně 0,278 m vodního sloupce. To je převod tlakové odchylky za zadaných podmínek,
          nikoli hloubka naměřená tímto přístrojem ani její celková nejistota.
        </p>
        <p>
          Přepočet začíná u tlaků vytištěných v protokolu. Neobnovuje převod původní frekvence
          a teploty na tlak. Koeficienty i odečty v dokumentu jsou zaokrouhlené, takže z nich
          nelze požadovat přesnou reprodukci interního výpočtu. Protokol také neuvádí úplný
          rozpočet nejistoty ani neprokazuje, že tabulkové body byly vyhrazeny pro nezávislé
          ověření. Menší rozdíly po opravě proto dokládají lepší shodu v této zkoušce.
        </p>
        <details className="method-details">
          <summary>Data a výpočet ke stažení</summary>
          <p>
            Ukládáme vlastní přepis číselné tabulky ve formátu CSV, tedy s hodnotami oddělenými čárkami.
            Stáhněte první tři soubory do jedné složky a spusťte <code>node reproduce.mjs</code>{" "}
            v Node.js 22 nebo novějším. Skript ověří kontrolní součet CSV a vstupní hodnoty,
            vypočítá rozdíly a vypíše použitý osmý řádek i oba ilustrační převody na výšku.
            Žádný řádek nevyřazuje, neprokládá křivku ani znovu neodhaduje kalibrační koeficienty.
          </p>
          <ul>
            <li><a href={`${dataPath}/calibration.csv`} download>Přepis všech číselných sloupců protokolu</a></li>
            <li><a href={`${dataPath}/example.json`} download>Původ, jednotky, postup a kontrolní součty</a></li>
            <li><a href={`${dataPath}/reproduce.mjs`} download>Skript pro kontrolu a výpočet</a></li>
            <li><a href={`${dataPath}/plot.py`} download>Samostatný skript grafu pro Python s knihovnou Matplotlib</a></li>
          </ul>
          <p>
            Metadata obsahují datum přístupu 4. října 2026 a kontrolní součty SHA-256 přepisu
            i původního PDF. Ty pomáhají rozpoznat změnu souboru, samy však nepotvrzují správnost
            přepisu. Číselné hodnoty lze porovnat s
            <SourceLink id="2022_SeaBird_P1207_Calibration"> veřejným originálem v archivu NOAA</SourceLink>.
            Datum kalibrace přebíráme z dokumentu. Jeho název souboru uvádí následující den.
          </p>
        </details>

        <h2>Kdy tlak ještě není hloubkou</h2>
        <p>
          V oceánských datech se často ukládá tlak po odečtení pevné referenční atmosféry.
          TEOS-10 definuje tuto veličinu jako absolutní tlak minus 10,1325 dbar, což je
          101 325 Pa. Nejde o odečtení právě změřeného tlaku vzduchu nad danou hladinou.
          Dokumentace <SourceLink id="2021_TEOS10_Height_From_Pressure">převodu tlaku na výšku</SourceLink>{" "}
          navíc používá souřadnici z kladnou vzhůru, takže pod hladinou vychází záporná.
          Hloubka kladná dolů má opačné znaménko.
        </p>
        <p>
          <SourceLink id="2010_SeaBird_9plus_Manual">Manuál SBE 9plus na straně 46</SourceLink>{" "}
          uvádí vlastní převod s odečtením 14,7 psi. Je to zaokrouhlená standardní atmosféra.
          Při přesném zpracování proto ověříme jednotky, referenci i verzi použitého programu.
          Automatické odečtení barometru od každého dostupného sloupce „tlak“ může jednu
          opravu provést dvakrát.
        </p>
        <p>
          Pevně upevněný záznamník umožňuje z hloubky ponoření sledovat pohyb hladiny.
          Posun jeho závěsu nebo podloží však změní stejný údaj. Výšku moře vůči pobřeží
          proto musíme navázat na stabilní body a kontrolovat polohu přístroje. Tento další
          krok rozvíjí metoda <Link href="/metody/pobrezni-mereni-hladiny-a-vyskova-reference">pobřežního
          měření hladiny a výškové reference</Link>. Tlak sám neodliší vzestup vody od poklesu čidla.
        </p>
        <p>
          Ve vzduchu je hustota mnohem menší a mění se s tlakem, teplotou a vlhkostí.
          Pro výšku tlakové hladiny proto potřebujeme stav celé vrstvy mezi oběma tlaky.
          <Link href="/metody/radiosondaz"> Radiosondáž</Link> vysvětluje výpočet po vrstvách
          i opačný postup, kdy se tlak odvozuje z výšky zjištěné navigací. Zpracování sítě referenčních výškových měření
          <SourceLink id="2023_GRUAN_RS41_TD8"> GRUAN, oddíl 4.4.2</SourceLink>, výslovně zahrnuje
          teplotu, vlhkost, tíhové zrychlení a počáteční tlak změřený na stanici.
        </p>

        <h2>Nezávislá kontrola a meze výsledku</h2>
        <p>
          Doloženou zkoušku mimo laboratoř výrobce provedli
          <SourceLink id="DOI_10_3133_ofr20131173"> Carnley, Fulfordová a Brooks z USGS v roce 2013</SourceLink>.
          Zkoušeli tři absolutní záznamníky Level TROLL 100 s keramickým odporovým snímačem,
          tedy jiné přístroje než uvedený SBE 9plus. Tlak určoval samostatný laboratorní
          regulátor s doloženou kalibrací. Další barometr umožnil odečíst tlak vzduchu.
          Zkouška měnila tlak i teplotu a prověřovala výstupy hotových přístrojů.
        </p>
        <p>
          V teplotním rozsahu 0 až 50 °C, pro který výrobce kompenzoval odezvu, se většina
          výsledků vešla do udané meze ±0,039 psi. Čtyři záznamy dosáhly +0,040 psi
          a mez těsně překročily. Při −20 °C, mimo kompenzovaný rozsah, byly odchylky větší.
          Nejde o nové nastavení koeficientů ze stejné kalibrační tabulky. Jde o samostatné
          porovnání s externí referencí za řízených podmínek. Tlaková reference a barometr
          přesto mají vlastní nejistotu a společný přívod tlaku sdílejí všechny zkoušené kusy.
          Výsledek nelze přenést na SBE 9plus ani na všechny dnešní záznamníky hladiny.
        </p>
        <p>
          V terénu přibývá drift, tedy pomalý posun odezvy čidla, a nejistota jeho polohy.
          Opakované porovnání s barometrem prověří počátek absolutní tlakové stupnice.
          Ruční odečet hladiny vůči pevnému bodu zase kontroluje celý převod včetně instalace.
          Pravidelné kontroly, záznam zásahů a souběžná měření při výměně přístroje doporučuje
          <SourceLink id="DOI_10_3133_twri08a3"> příručka USGS</SourceLink>.
          Dva záznamníky sdílející stejný chybný barometr mohou souhlasně ukazovat chybnou hladinu.
        </p>
        <p>
          Celkovou nejistotu hloubky skládáme z nejistoty tlaku, jeho reference, hustoty,
          tíhového zrychlení a polohy čidla. V mělké vodě může rozhodovat barometr a upevnění,
          ve velké hloubce také převod hustoty a stabilita tlakoměru. Pro odhad vlivu hustoty
          je užitečný jednoduchý důsledek vzorce: chyba hustoty o 0,1 % způsobí přibližně
          stejně velkou relativní chybu vypočtené hloubky, ale opačného znaménka.
          Jde o citlivost výpočtu, nikoli o odhad skutečné chyby konkrétních dat.
        </p>
        <p>
          Při rychlém proudění může tlakový vstup zachytit i účinek pohybu vody.
          Vlny a svislé zrychlení rovněž omezují jednoduchý předpoklad klidného sloupce.
          Umístění vstupu, ochrana proti nečistotám a vhodné časové průměrování jsou proto
          součástí měření. Kalibrační protokol našeho přístroje tyto vlivy v oceánu nevyčísluje.
          Z jeho jedenácti bodů nemůžeme určit celkovou nejistotu budoucího profilu ani dlouhodobé hladiny.
        </p>

        <h2>Vývoj tlakoměrů</h2>
        <p>
          Původní <SourceLink id="1648_Perier_PuyDeDome">dopis Florina Périera Blaisi Pascalovi
          z 22. září 1648</SourceLink> popisuje pokus uskutečněný o tři dny dříve na Puy-de-Dôme.
          Rtuťový sloupec v trubici byl na vrcholu nižší než dole v Clermontu. Druhé uspořádání
          ponechané dole sloužilo jako kontrola a porovnání se opakovalo po návratu.
          Podstatná byla vazba výšky rtuťového sloupce na tlak vzduchu a kontrola, zda rozdíl
          nezpůsobila pouze změna během dne.
        </p>
        <p>
          Tlak tak získal pozorovatelný protějšek ve výšce kapaliny. Pružné a později elektronické
          snímače umožnily ukládat údaje v krátkých intervalech a nést tlakoměr na pohybující se
          soupravě. Křemenné provedení popsané výše převádí mechanické zatížení na frekvenci.
          Pro klimatický záznam ale nestačí zachovat jednotku tlaku. Při změně přístroje je potřeba
          doložit i návaznost jeho odezvy, teplotních oprav a stability.
        </p>

        <h2>Proč na tlaku záleží v klimatických pozorováních</h2>
        <p>
          V <Link href="/pozorovani/tepelny-obsah-oceanu">měření obsahu tepla v oceánu</Link>{" "}
          tlak přiřazuje teplotním údajům svislou polohu. Soupravy CTD na lodích a plováky
          programu Argo používají různé snímače, ale chybná tlaková souřadnice může v obou
          případech přiřadit teplotu nesprávné vrstvě. Teplotu dodává
          <Link href="/metody/odporova-termometrie-a-termistory"> termometrie</Link> a hustota navazuje
          také na salinitu odvozenou <Link href="/metody/konduktometrie">z elektrické vodivosti</Link>.
        </p>
        <p>
          <SourceLink id="DOI_10_1175_2011jtecho831_1">Barker a spoluautoři v roce 2011</SourceLink>{" "}
          zpracovali tlakové chyby v tehdejších datech Argo z let 2000–2008, stažených v lednu 2009.
          Záznamy při vynoření umožnily rozpoznat a u části plováků opravit posun tlakové stupnice.
          U některých přístrojů však firmware záporné odchylky nezachoval, což opravu omezilo.
          Studie doložila, že tlakové chyby ovlivnily odhady oceánského oteplování a výšky hladiny
          odvozené z teplotní roztažnosti. Popisuje konkrétní historický soubor, nikoli stav všech
          současných dat Argo. Srovnání před opravou a po ní navíc sdílí původní profily,
          takže nepředstavuje dvě nezávislá pozorování oceánu.
        </p>
        <p>
          U <Link href="/pozorovani/acidifikace-oceanu">acidifikace oceánu</Link> tlak pomáhá určit,
          odkud pochází odebraný vzorek, a patří k podmínkám potřebným pro chemické přepočty.
          Chemické složení měří další metody. U
          <Link href="/pozorovani/gmsl"> výšky mořské hladiny</Link> může ponorné tlakové čidlo
          poskytovat místní záznam po navázání na výškovou referenci. Globální průměr vyžaduje
          další prostorové zpracování a měření. V atmosféře navazuje určování tlakových hladin
          na radiosondové záznamy <Link href="/pozorovani/stratosfericke-ochlazovani">teploty stratosféry</Link>{" "}
          a <Link href="/pozorovani/narust-vlhkosti">vlhkosti</Link>.
        </p>
        <div className="method-conclusion">
          <h2>Co metoda umožňuje zjistit</h2>
          <p>
            Tlakové měření zpřístupňuje zatížení čidla okolní kapalinou nebo plynem.
            S určenou tlakovou referencí a popisem tekutiny umožňuje odvodit hloubku,
            výšku hladiny nebo polohu tlakové hladiny v atmosféře. Spolehlivost těchto údajů
            stojí na doložené kalibraci, kontrolách během provozu a správném převodu mezi
            tlakem a výškou. Klimatický vývoj pak dokládají navazující srovnatelné časové záznamy.
          </p>
        </div>
      </div>
    </article>
  );
}
