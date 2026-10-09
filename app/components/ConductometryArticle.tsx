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
          <div><dt>Praktická salinita</dt><dd>Číselný údaj o slanosti vody získaný porovnáním vodivostí podle stupnice PSS-78. Výpočet potřebuje také teplotu a tlak. Výsledek nemá jednotku.</dd></div>
          <div><dt>CTD</dt><dd>Souprava pro měření vodivosti, teploty a tlaku vody. Anglická zkratka znamená Conductivity, Temperature, Depth. Hloubka se počítá z tlaku.</dd></div>
        </dl>
        <p className="article-glossary__note">Stejně slaná voda může mít při jiné teplotě výrazně jinou vodivost. Proto čidlo vodivosti pracuje společně s teploměrem a tlakoměrem.</p>
      </aside>

      <div className="article-prose">
        <h2>Jak proud procházející vodou vypovídá o jejím složení</h2>
        <p className="article-prose__intro">
          Konduktometrie je měření elektrické vodivosti látky. Vodivost popisuje, jak snadno
          látkou prochází elektrický proud. U mořské vody souvisí s rozpuštěnými solemi.
          Měření vodivosti proto využíváme k určení salinity, tedy veličiny vyjadřující
          slanost vody podle stanovené stupnice.
        </p>
        <p>
          Rozpuštěné soli jsou ve vodě přítomné v podobě iontů, částic s elektrickým nábojem.
          Přiložené napětí vytváří elektrické pole, které jejich pohyb usměrňuje.
          Tento pohyb nábojů představuje elektrický proud. Přístroj sleduje elektrickou
          odezvu vody a z ní určuje vodivost.
        </p>
        <p>
          Vodivost však ovlivňuje také teplota a tlak. Stejně slaná voda může mít při jiné
          teplotě výrazně jinou vodivost. Abychom tyto vlivy odlišili od rozdílu ve slanosti,
          potřebujeme současně znát teplotu a tlak měřené vody. Teprve z těchto tří údajů
          vypočítáme salinitu.
        </p>
        <p>
          Postup ukážeme na čidle Sea-Bird SBE 4C používaném v lodních soupravách CTD.
          Zkratka pochází z anglického Conductivity, Temperature, Depth, tedy vodivost,
          teplota a hloubka. Poslední údaj souprava odvozuje z tlaku. Navazujeme proto na
          <Link href="/metody/odporova-termometrie-a-termistory"> měření teploty</Link> a
          <Link href="/metody/mereni-tlaku-a-hydrostaticke-vysky"> měření tlaku a hydrostatické výšky</Link>.
          Na veřejném protokolu později projdeme celý výpočet od zaznamenaného signálu
          přes vodivost až k výsledné salinitě.
        </p>

        <h2>Elektrody a elektrický signál čidla</h2>
        <p>
          Elektrický kontakt s vodou zajišťují elektrody, vodivé části ponořené do vzorku.
          Proud prochází vodou mezi nimi. Záleží přitom na vlastnostech vody i na rozměrech
          prostoru, kterým proud teče. Delší a užší cesta klade větší elektrický odpor.
          Při stejném napětí jí tedy prochází menší proud.
        </p>
        <p>
          Chceme určit vlastnost vody, kterou půjde porovnávat mezi různými přístroji.
          Proto při převodu elektrické odezvy na vodivost zohledníme rozměry měřicí části.
          Vodivost vody vyjadřujeme v siemensech na metr, značka S/m. Siemens odpovídá
          převrácené hodnotě ohmu, jednotky elektrického odporu. Údaj v S/m nám umožňuje
          porovnávat vodu i tehdy, když měřicí nádobky nemají stejné rozměry.
        </p>
        <p>
          <SourceLink id="2025_SeaBird_SBE4_Datasheet">Technický list SBE 4 z května 2025</SourceLink>{" "}
          popisuje skleněnou průtočnou trubici se třemi platinovými elektrodami.
          Dvě krajní elektrody jsou propojené. Voda mezi nimi a prostřední elektrodou
          je součástí elektrického obvodu, který vytváří pravidelné střídavé kmity.
          Její odpor ovlivňuje, jak rychle obvod kmitá.
          Elektronika počítá kmity za sekundu a zaznamenává jejich frekvenci.
          Kilohertz, značka kHz, znamená tisíc kmitů za sekundu.
        </p>
        <p>
          Zaznamenaná frekvence je tedy elektrický signál čidla. Abychom z něj získali
          vodivost, potřebujeme znát vztah mezi frekvencí a vodivostí známých vzorků.
          Tento vztah stanovujeme kalibrací. Její průběh a konkrétní převod ukážeme níže.
        </p>
        <p>
          Pro SBE 4 výrobce uvádí rozsah 0 až 7 S/m a výstup přibližně 2,5 až 7,5 kHz.
          Pro soupravu SBE 911plus při 24 odečtech za sekundu uvádí rozlišení 0,00004 S/m.
          Rozlišení popisuje jemnost, s jakou lze změny údaje rozlišit. Výrobce zvlášť
          udává počáteční přesnost ±0,0003 S/m, která vyjadřuje mez odchylky za stanovených
          podmínek. Jemné rozlišení proto samo neurčuje, jak blízko je údaj skutečné vodivosti.
        </p>
        <p>
          Při přechodu do vody s jinými vlastnostmi potřebuje čidlo určitý čas, než se jeho
          odezva ustálí. S čerpadlem dosáhne podle technického listu 63 % konečné změny
          přibližně za 0,060 sekundy. Tento čas popisuje reakci na změnu vody.
          Počet odečtů za sekundu naproti tomu říká, jak často elektronika údaj zaznamená.
        </p>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Od mořské vody k praktické salinitě">
            <div><span>1</span><strong>Voda v měřicí trubici</strong><small>Proud nesou ionty. Odezvu ovlivňuje složení vody, její teplota i tlak.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Frekvence čidla</strong><small>Odpor vody mění kmitání obvodu. Elektronika spočítá kmity.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Vodivost v S/m</strong><small>Kalibrační vztah převede signál a opraví změny rozměrů trubice.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Praktická salinita</strong><small>Z vodivosti, teploty a tlaku výpočet určí údaj o slanosti podle společné stupnice.</small></div>
          </div>
          <figcaption>
            Vlastní schéma podle <SourceLink id="2025_SeaBird_SBE4_Datasheet">dokumentace SBE 4</SourceLink>{" "}
            a <SourceLink id="2015_TEOS10_SP_From_C">výpočtu PSS-78</SourceLink>.
            Šipky oddělují fyzikální odezvu, kalibraci přístroje a převod na jinou veličinu.
            Při převodu na vodivost opravujeme vliv teploty a tlaku na rozměry čidla.
            Při výpočtu salinity zohledňujeme jejich vliv na vlastnosti samotné vody.
          </figcaption>
        </figure>
        <p>
          V soupravě <SourceLink id="2010_SeaBird_9plus_Manual">SBE 9plus</SourceLink> žene čerpadlo
          vodu kolem teploměru a vodivostním čidlem. Voda prochází oběma místy postupně.
          Údaje proto musíme časově posunout tak, aby teplota a vodivost patřily stejnému
          vzorku. Jinak bychom při průchodu mezi různě teplými vrstvami spojili vodivost
          jedné vody s teplotou jiné. Výpočet by pak mohl ukázat krátký výkyv salinity,
          který vznikl chybným spojením údajů.
        </p>
        <p>
          Vodu ovlivňuje také teplo předávané stěnou vodivostní trubice. Proto zpracování
          vedle časového sladění čidel opravuje i tuto tepelnou odezvu měřicí části.
          Obě opravy popsané v manuálu pomáhají oddělit chování přístroje od změn oceánu.
        </p>
        <div className="method-comparison" aria-label="Další provedení konduktometrie">
          <section>
            <h3>Laboratorní salinometr</h3>
            <p>Určuje salinitu odebraného vzorku při řízené teplotě. Jeho vodivost porovnává se standardní mořskou vodou, která slouží jako reference. Odpadá pohyb čidla mezi vrstvami oceánu. Výsledek ale může ovlivnit změna vzorku při odběru a skladování.</p>
          </section>
          <section>
            <h3>Indukční čidlo</h3>
            <p>Cívka, tvořená navinutým vodičem, vytváří proměnné magnetické pole. To vyvolává proud ve vodě a druhá cívka snímá jeho účinek. Také u tohoto provedení potřebujeme kalibraci a musíme zohlednit rozměry prostoru, ve kterém měření probíhá.</p>
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
          Pro srovnatelné vyjádření slanosti potřebujeme společnou stupnici. Praktická
          salinita, značená S<sub>P</sub>, používá stupnici PSS-78, anglicky Practical
          Salinity Scale 1978. Je založená na porovnání elektrické vodivosti vzorku
          s vodivostí referenčního roztoku chloridu draselného za stejných podmínek.
          Chlorid draselný je sůl použitá pro definici této reference.
        </p>
        <p>
          Vodivost vzorku dělíme vodivostí reference a získáme jejich poměr. Pokud jsou
          obě vodivosti stejné, vyjde jedna. Právě tomuto poměru při referenční teplotě
          15 °C a atmosférickém tlaku přiřazuje stupnice praktickou salinitu 35.
          <SourceLink id="DOI_10_1109_joe_1980_1145448"> Lewisova původní práce z roku 1980</SourceLink>{" "}
          vysvětluje definici i laboratorní pokusy s ředěnou a zahušťovanou standardní mořskou vodou.
        </p>
        <p>
          V oceánu měříme za jiných teplot a tlaků. Přímé porovnání vodivostí by proto
          směšovalo rozdíly ve slanosti s vlivem těchto podmínek. Výpočet nejprve zohlední
          teplotu a tlak vody. Pak použije empirický vztah, tedy převod určený laboratorními
          měřeními, který opravenému poměru přiřadí praktickou salinitu.
        </p>
        <p>
          Výsledná S<sub>P</sub> je číslo na této stupnici a nemá jednotku.
          Právě to znamená označení bezrozměrná veličina. Zápis „PSU“, který bývá
          i na přístrojových protokolech, nepředstavuje fyzikální jednotku a zde jej
          nepoužíváme. Hodnota 35 vyjadřuje výsledek porovnání vodivostí. Sama není přesným
          tvrzením, že kilogram konkrétní vody obsahuje 35 gramů solí.
        </p>
        <p>
          Pro výpočty hustoty a obsahu tepla potřebujeme také údaj o hmotnosti rozpuštěných
          látek. Ten vyjadřuje <strong>absolutní salinita S<sub>A</sub></strong> v gramech
          na kilogram mořské vody. Používá ji soustava TEOS-10, termodynamický popis mořské
          vody z roku 2010. Jde o soubor vztahů pro výpočty jejích fyzikálních vlastností.
        </p>
        <p>
          Praktickou salinitu proto před těmito výpočty převádíme na absolutní.{" "}
          <SourceLink id="2015_TEOS10_SA_From_SP">Převod z praktické salinity</SourceLink>{" "}
          používá také polohu a tlak, aby odhadl odchylky složení od standardní mořské vody.
          Tyto doplňující údaje jsou potřebné, protože samotná vodivost nerozpozná všechny
          změny vzájemných poměrů rozpuštěných látek. Praktická a absolutní salinita tak
          představují dva různé údaje, mezi nimiž potřebujeme uvedený převod.
        </p>

        <h2>Kalibrace a skutečný převod signálu</h2>
        <p>
          Vrátíme se nyní k čidlu a jeho frekvenci. Potřebujeme zjistit, jaká vodivost
          odpovídá jeho odečtu. Při kalibraci porovnáváme odezvu čidla s referenčními
          hodnotami a stanovujeme mezi nimi převodní vztah včetně nejistot.
          U našeho přístroje má tento vztah podobu rovnice. Její koeficienty, tedy čísla
          určující konkrétní podobu převodu, odpovídají elektrickému obvodu a skutečným
          rozměrům měřicí trubice.
        </p>
        <p>
          Seřízení znamená zásah, kterým odezvu přístroje měníme. Rozlišení kalibrace
          a seřízení přebíráme z <SourceLink id="2012_VIM_Calibration">metrologického
          slovníku VIM</SourceLink>, který vymezuje pojmy používané při měření.
        </p>
        <p>
          <SourceLink id="2025_SeaBird_SBE4_Datasheet">Sea-Bird popisuje kalibraci v lázni</SourceLink>,
          při které se mění teplota vody. V každém kalibračním bodě máme odečet čidla
          a údaje o vodě, ve které právě měřilo. Z lázně se odebere vzorek a laboratorní
          salinometr Guildline Autosal jej porovná se standardní mořskou vodou IAPSO.
          Tím získáme referenční salinitu lázně. Zkratka IAPSO označuje Mezinárodní
          asociaci pro fyzikální vědy o oceánech.
        </p>
        <p>
          Reference je tak s čidlem spojená přes laboratorní salinometr a teploměr lázně.
          Tento doložený sled porovnání se označuje jako návaznost měření. Každá jeho část
          má vlastní nejistotu, která přispívá k nejistotě výsledku. Dobrá shoda odečtů
          s kalibrační křivkou ukazuje, jak dobře zvolený vztah popisuje tyto body.
          Sama ale neověří správnost všech přístrojů a referencí, ze kterých body vznikly.
        </p>
        <p>
          Použijeme <SourceLink id="2014_SeaBird_C3860_Calibration">protokol čidla číslo 3860
          z 15. října 2014</SourceLink> ve veřejném archivu Atlantické oceánografické a
          meteorologické laboratoře amerického Národního úřadu pro oceán a atmosféru, zkráceně
          NOAA AOML. Obsahuje šest bodů měření vody v lázni a jeden nulový bod.
          U šesti vodních bodů budeme postupovat od frekvence k vodivosti a potom k salinitě.
        </p>
        <p>
          Nulový bod uchováváme v datech, ale salinitu z něj nepočítáme. Protokol
          samostatně nepopisuje jeho měřicí prostředí. Pro šest vodních bodů volíme při
          výpočtu referenční atmosférický tlak. V použitém zápisu jej vyjadřuje p = 0 dbar.
          Tuto podmínku jsme zvolili pro rekonstrukci laboratorního výpočtu, protokol
          ji nedokládá odečtem barometru.
        </p>
        <p>
          První převod určuje vodivost z frekvence čidla. Rovnice zároveň zohledňuje změny
          rozměrů trubice s teplotou a tlakem. Pro tento snímač zní:
        </p>
        <p className="article-formula method-equation">C = (g + h f² + i f³ + j f⁴) / [10 (1 + a t + b p)]</p>
        <p>
          C je vodivost v S/m, f frekvence v kHz, t teplota vody ve °C a p tlak v dbar.
          Decibar, značka dbar, je jednotka tlaku odpovídající 10 000 pascalům.
          V navazujícím výpočtu PSS-78 se tlak zapisuje po odečtení standardního
          atmosférického tlaku 10,1325 dbar od absolutního tlaku. Nula tak znamená
          referenční atmosférický tlak, nikoli úplnou nepřítomnost tlaku.
        </p>
        <p>
          Koeficienty g, h, i a j určují kalibrační křivku konkrétního čidla.
          V čitateli násobí jednotlivé mocniny frekvence. Například f² znamená frekvenci
          vynásobenou sebou samou. Součet těchto členů popisuje převod elektrického signálu.
        </p>
        <p>
          Ve jmenovateli jsou členy a t a b p. Písmena a a b označují koeficienty CTcor
          a CPcor z protokolu. Opravují vliv tepelné roztažnosti a stlačení skleněné
          trubice, tedy změn prostoru, kterým proud prochází. Po tomto kroku známe
          vodivost vody při její teplotě a tlaku. Vliv těchto podmínek na vodivost samotné
          vody odlišíme od slanosti až při následujícím výpočtu salinity.
        </p>
        <p>
          Vytištěnému vzorci v protokolu chybí faktor 10 ve jmenovateli. Uvedený tvar
          dokládá <SourceLink id="DOI_10_7289_v5dr2sgz">zpráva NOAA, strana 13</SourceLink>,
          pro stejné sériové číslo, datum a koeficienty. Odpovídá také tabulkovým vodivostem.
          Frekvence v tabulce už jsou v kHz, takže je znovu nedělíme tisícem.
        </p>
        <p>
          Každý řádek následující tabulky představuje jeden kalibrační bod. První dva
          sloupce udávají teplotu a zaznamenanou frekvenci. Z nich při zvoleném tlaku
          počítáme vodivost a salinitu v dalších dvou sloupcích. Poslední sloupec obsahuje
          referenční salinitu lázně, se kterou můžeme výsledek porovnat.
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
        <p>
          Na těchto bodech je vidět, proč potřebujeme současně měřit teplotu.
          Vodivost se s ohříváním lázně výrazně mění, zatímco salinita zůstává téměř
          stejná. Graf níže ukazuje právě tuto změnu vodivosti. Její růst bychom bez
          znalosti teploty mohli mylně připsat většímu množství rozpuštěných solí.
        </p>
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
          Podrobně nyní projdeme jeden řádek, bod při 15,0000 °C. Čidlo zaznamenalo
          frekvenci 5,96800 kHz. Po dosazení do uvedené rovnice s koeficienty z protokolu
          dostaneme vodivost přibližně 4,252531 S/m. Tím je dokončen převod elektrického
          signálu na vlastnost vody.
        </p>
        <p>
          Protokol tiskne vodivost 4,25254 S/m. Náš výsledek se od ní liší přibližně
          o 0,000009 S/m. Počítáme ze zaokrouhlených koeficientů a frekvencí, takže
          zpětným výpočtem nemusíme obnovit poslední tištěnou číslici.
        </p>
        <p>
          Dalším cílem je určit z vodivosti praktickou salinitu. Postup stanovuje
          <SourceLink id="2015_TEOS10_SP_From_C"> dokumentace výpočtu gsw_SP_from_C
          v soustavě TEOS-10, příloha E</SourceLink>. Nejdříve sjednotíme zápis teploty.
          Náš údaj používá mezinárodní teplotní stupnici ITS-90 z roku 1990, zatímco
          starší vztah PSS-78 pracuje se stupnicí IPTS-68 z roku 1968. Pro tento převod
          násobíme teplotu 1,00024 a dostaneme 15,0036 °C. Jde o vyjádření téže teploty
          na druhé stupnici.
        </p>
        <p>
          Teď porovnáme vodivost vzorku s referencí. Hodnota 4,2914 S/m odpovídá
          praktické salinitě 35 při 15 °C na stupnici IPTS-68 a p = 0.
          Naši vodivost touto hodnotou vydělíme a získáme poměr přibližně 0,9909426.
          Je o něco menší než jedna, protože vodivost vzorku je o něco menší než
          uvedená referenční vodivost.
        </p>
        <p>
          Tento poměr ještě obsahuje vliv podmínek, při kterých jsme měřili.
          Výpočet jej proto opraví o teplotu a tlak vody. V našem bodě je tlakový
          opravný faktor roven jedné, takže poměr nemění. Po teplotní opravě vychází
          0,9908609. Nyní máme poměr připravený pro převod na stupnici salinity.
        </p>
        <p>
          Převod PSS-78 nejprve používá odmocninu tohoto poměru. Je to číslo, které
          vynásobené sebou samým dává původní poměr. Výpočet dále pracuje s jeho mocninami,
          tedy opakovaným násobením. Jednotlivé členy násobí koeficienty určenými
          laboratorním měřením a sčítá je. Takový součet
          se nazývá polynom. Koeficienty zajišťují, aby vztah odpovídal laboratorně
          zjištěné souvislosti mezi vodivostí a salinitou. Po zahrnutí malé teplotní
          opravy výsledné salinity dostaneme <strong>S<sub>P</sub> ≈ 34,6424</strong>.
        </p>
        <p>
          Referenční salinita lázně byla 34,6427. Rozdíl vypočtené a referenční salinity
          činí asi −0,0003. To ukazuje shodu v tomto kalibračním bodě.
          Kalibrační vztah čidla ale vznikl právě při kalibraci, ke které bod patří.
          Porovnání proto nepředstavuje nezávislou zkoušku. Také neříká, jak velkou
          nejistotu bude mít budoucí měření v moři, kde přibudou další vlivy.
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
          Měření v různých hloubkách vytváří profil, tedy záznam toho, jak se salinita
          s hloubkou mění. Jeho kontrolu umožňuje odběr vody vedle ponořené soupravy.
          Salinitu odebraného vzorku změříme laboratorním salinometrem a porovnáme ji
          s údajem soupravy v místě odběru.
          <SourceLink id="DOI_10_7289_v5dr2sgz"> Zpráva z plavby EN551</SourceLink>{" "}
          uvádí konkrétní standardní mořskou vodu IAPSO, šarži P-157, a kontroly salinometru
          během analýz.
        </p>
        <p>
          Takové porovnání používá jiné čidlo v jiných podmínkách, takže může odhalit
          rozdíly mezi měřením v moři a v laboratoři. Oba výsledky přitom používají
          stejnou stupnici a navazují na standardní mořskou vodu. Chybu této společné
          reference jejich shoda sama nevyloučí. Pokud navíc odebrané vzorky použijeme
          k nastavení opravy lodního čidla, jejich následná shoda s opravenými údaji
          ještě neposkytuje nezávislé ověření téže opravy.
        </p>
        <p>
          <SourceLink id="DOI_10_1175_jtech_d_24_0051_1">Thierryová a spoluautoři v roce 2025</SourceLink>{" "}
          porovnali čtyři plováky, tedy plovoucí platformy pro oceánská měření.
          Každý nesl dvě nebo tři soupravy CTD.
          Zahrnuli elektrodová čidla Sea-Bird a indukční RBR a profily do 4 000 dbar.
          Soupravy na jednom plováku měřily blízko sebe. Tím se omezily rozdíly,
          které by vznikly měřením vody na různých místech.
        </p>
        <p>
          Porovnání odhalilo odchylky salinity, jejichž velikost závisela na tlaku.
          Autoři je opravili pomocí referenčního profilu změřeného z lodi.
          Po opravách byly rozdíly salinity mezi soupravami v hloubkách odpovídajících
          tlaku nad 500 dbar menší než 0,004.
        </p>
        <p>
          Studie tak ukazuje, jak se podařilo přiblížit výsledky různých konstrukcí
          po opravě jejich původních odchylek. Při hodnocení této shody musíme vzít
          v úvahu společné lodní měření použité k nastavení oprav. Čidla mohou mít
          malý vzájemný rozdíl a současně sdílet odchylku vůči skutečné hodnotě.
          Rozdíl menší než 0,004 proto sám neurčuje absolutní chybu každého čidla.
          Studie navíc zkoušela jiné modely než náš laboratorní SBE 4C. Výsledek nelze
          vydávat za ověření čidla číslo 3860.
        </p>

        <h2>Co omezuje přesnost a dlouhodobou srovnatelnost</h2>
        <p>
          Usazeniny, povlak organismů nebo bublina mění cestu proudu v měřicí části.
          Čidlo pak může na stejnou vodu reagovat jinak než při kalibraci. Pomalý posun
          jeho odezvy se označuje jako drift. Kontrola před nasazením a po návratu
          pomáhá určit, zda původní převod stále odpovídá čidlu. Vyčištění může odezvu změnit znovu,
          proto potřebujeme uchovat pořadí údržby a kalibrací. Postup a omezení stability
          popisuje <SourceLink id="2010_SeaBird_9plus_Manual">manuál SBE 9plus</SourceLink>.
          V silně znečištěné nebo biologicky aktivní vodě nelze automaticky předpokládat
          stabilitu udanou výrobcem pro příznivější podmínky.
        </p>
        <p>
          Salinitu počítáme z vodivosti, teploty a tlaku, takže nejistota každého z těchto
          údajů přispívá k nejistotě výsledku. Přidává se jejich časové sladění a nejistota
          kalibrační reference. Význam jednotlivých příspěvků se mění podle podmínek.
          V klidné lázni odpadají rychlé přechody mezi vrstvami. Tam, kde se teplota
          prudce mění s hloubkou, může rozhodovat sladění čidel. Při dlouhém nasazení
          nabývá na významu drift a v hluboké vodě tlaková oprava.
        </p>
        <p>
          Úplný rozpočet nejistoty by popsal velikost těchto příspěvků a jejich spojení
          v nejistotu výsledné salinity. Náš protokol takový rozpočet neuvádí.
          Z jeho šesti vodních bodů proto nelze stanovit univerzální přesnost salinity
          pro všechny tyto situace.
        </p>
        <p>
          Praktický význam driftu ukázali <SourceLink id="DOI_10_5194_essd_15_383_2023">Wongová,
          Gilson a Cabanesová v roce 2023</SourceLink> na datech programu Argo dostupných
          v dubnu 2022. Popsali zvýšený výskyt posunu k vyšší salinitě u části plováků
          nasazených po roce 2015 a způsob následných oprav.
        </p>
        <p>
          Kontrola s odstupem času porovnává profily s lodními a prověřenými plovákovými
          měřeními a posuzuje stabilitu
          v čase. Autoři výslovně upozorňují, že část referenčních dat slouží i ke korekcím,
          takže výsledné porovnání není zcela nezávislé. Studie popisuje určitý historický
          soubor, nikoli stav všech dnešních dat Argo.
        </p>
        <p>
          Oprava driftu může změnit hodnotu uloženou v datovém souboru, přestože jde
          stále o totéž původní měření. Pro klimatickou analýzu proto potřebujeme znát
          verzi dat a jejich příznaky kvality, tedy značky popisující výsledek kontroly.{" "}
          <SourceLink id="WEB_International_Argo_Program_Data_from_GDACs_b2737bdf">Globální datová centra
          Argo</SourceLink> zpřístupňují profily, technické údaje i informace o přístrojích.
          Sloupec <code>PSAL</code> obsahuje vypočtenou praktickou salinitu, nikoli původní
          frekvenci. <code>PSAL_ADJUSTED</code> uchovává upravený výsledek a doprovodné
          příznaky určují jeho použitelnost. Změna po odborné kontrole se musí odlišit
          od skutečné změny oceánu.
        </p>

        <h2>Vývoj salinometrů a společné stupnice salinity</h2>
        <p>
          <SourceLink id="DOI_10_1109_joe_1980_1145448">Lewisova práce z roku 1980</SourceLink>{" "}
          zasazuje vznik PSS-78 do vývoje elektrických salinometrů. V letech 1955–1959
          vznikaly laboratorní přístroje s teplotně řízenou lázní. V roce 1961 už byly dostupné
          menší přístroje s elektronickou kompenzací teplotního rozdílu vzorku a standardu.
          Elektronika tedy zohledňovala rozdíl jejich teplot při porovnání vodivostí.
        </p>
        <p>
          Následné měření přímo v oceánu potřebovalo převodní vztahy i pro jeho chladné vrstvy.
          Lewis popsal, jak různé vztahy vedly k rozdílům i při zpracování stejných vstupů.
          Jeho práce představuje PSS-78 jako společnou definici založenou na reprodukovatelném
          vodivostním poměru. Laboratoře pak mohly porovnávat výsledky podle jednotného vztahu.
        </p>
        <p>
          Rozšíření autonomních plováků umožnilo pořizovat profily při dlouhých nasazeních
          bez pravidelného návratu do laboratoře. Tím vzrostl význam kontroly driftu
          a uchovávání původních i opravených
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
          stažené v červenci 2018. Praktickou salinitu převedli na absolutní a z měření
          na jednotlivých místech sestavili měsíční mapy.
        </p>
        <p>
          Pro mapu bylo potřeba odhadnout hodnoty také tam, kde měření chyběla.
          Autoři k tomu využili vztahy z modelových simulací, které popisují, jak
          spolu souvisejí změny salinity v prostoru a čase. Postup kontrolovali
          v oblastech s hustěji rozmístěnými měřeními. Část z nich záměrně vynechali
          a zkoušeli, jak dobře je dokáže doplnění mezer obnovit.
        </p>
        <p>
          Konduktometrie v takové práci poskytuje vstupy pro jednotlivé profily.
          Výsledná globální mapa závisí také na výběru dat a odhadech v místech bez
          měření. Při porovnávání map proto potřebujeme znát i způsob jejich sestavení.
          Vysvětlení změn salinity pomocí výparu, srážek a pohybu vody potom vyžaduje
          další rozbor. Samotný profil ukazuje místní rozložení salinity, pro závěr
          o změně světového koloběhu vody potřebujeme širší soubor podkladů.
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
