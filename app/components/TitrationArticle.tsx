import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

const dataPath = "/data/methods/titration";

export function TitrationArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Titrant</dt><dd>Roztok se známou koncentrací, který při titraci přidáváme ke vzorku. Zde je to kyselina chlorovodíková.</dd></div>
          <div><dt>Celková alkalinita</dt><dd>Bilance schopnosti látek ve vodě přijímat a uvolňovat vodíkové ionty podle společné chemické reference. V mořské vodě ji tvoří hlavně hydrogenuhličitany a uhličitany.</dd></div>
          <div><dt>Byreta</dt><dd>Zařízení, které dávkuje roztok a umožňuje určit přidaný objem.</dd></div>
          <div><dt>Granův graf</dt><dd>Převod části titrační křivky na přibližnou přímku. Její průsečík s vodorovnou osou poskytuje odhad spotřeby kyseliny.</dd></div>
        </dl>
        <p className="article-glossary__note">Spotřebu činidla zjišťujeme ze známých dávek a z reakce vzorku na jejich přidávání.</p>
      </aside>
      <div className="article-prose">
        <h2>Jak ze spotřeby kyseliny zjistíme alkalinitu</h2>
        <p className="article-prose__intro">
          Titrace je analytická metoda, při níž určujeme množství látky nebo skupiny látek
          podle jejich reakce s postupně přidávaným činidlem známé koncentrace. V oceánografii
          se tak měří například celková alkalinita, která popisuje schopnost mořské vody
          neutralizovat kyselinu. Vysvětlíme si její stanovení kyselinou chlorovodíkovou
          v otevřené nádobě, s průběžným měřením pomocí skleněné elektrody.
        </p>
        <h3>Co přidaná kyselina ve vodě mění</h3>
        <p>
          Kyselina chlorovodíková dodává do vody vodíkové ionty, kladně nabité částice
          vodíku. Budeme je zapisovat značkou H⁺. Část látek rozpuštěných v mořské vodě
          tyto ionty přijímá a přechází přitom do jiné chemické formy. Právě na této
          reakci je měření založeno.
        </p>
        <p>
          Největší podíl mají v běžné mořské vodě hydrogenuhličitanové a uhličitanové ionty.
          Oba obsahují uhlík a kyslík, ale vážou rozdílné množství vodíku. Uhličitan
          přijme jeden H⁺ a vznikne hydrogenuhličitan. Ten může přijmout další H⁺.
          Při dostatečném okyselení se tak uhlík převede na rozpuštěný oxid uhličitý a vznikne voda.
        </p>
        <Equation tex={String.raw`\begin{aligned}
          \mathrm{CO_3^{2-}}+\mathrm{H^+}&\longrightarrow\mathrm{HCO_3^-}\\
          \mathrm{HCO_3^-}+\mathrm{H^+}&\longrightarrow\mathrm{CO_2}+\mathrm{H_2O}
        \end{aligned}`} />
        <p>
          Značka CO₃²⁻ označuje uhličitanový iont a HCO₃⁻ hydrogenuhličitanový iont.
          Horní znaménka vyjadřují elektrický náboj, CO₂ je oxid uhličitý a H₂O voda.
          Rovnice ukazují celkovou bilanci při okyselování. Na převedení jednoho
          uhličitanového iontu na CO₂ jsou potřeba dva vodíkové ionty,
          na převedení jednoho hydrogenuhličitanového iontu jeden.
          Z množství spotřebované kyseliny proto získáváme informaci o složení vzorku.
        </p>
        <p>
          Kyselinu přijímají také další složky vody, například boritanové ionty obsahující bor.
          Jejich příspěvky se přičítají, příspěvky přítomných kyselin se odečítají.
          Výslednou bilanci nazýváme <strong>celková alkalinita</strong> a označujeme ji{" "}
          <InlineMath tex={String.raw`A_\mathrm{T}`} />. Počítá se podle jednotné dohody
          o výchozích chemických formách látek. Pro uhlík je touto referencí rozpuštěný CO₂,
          proto mají hydrogenuhličitan a uhličitan právě příspěvky jedna a dvě.
          Úplnou definici a jednotlivé příspěvky uvádí{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">oceánografická příručka, postup 3b</SourceLink>.
        </p>
        <p>
          Alkalinita a pH zachycují různé vlastnosti téže vody. pH vyjadřuje její okamžitou
          kyselost, tedy chemické působení vodíkových iontů. Alkalinita popisuje bilanci,
          která se projeví až při přidávání kyseliny. Dva vzorky se stejným pH tak mohou
          spotřebovat různé množství kyseliny. Pro popis uhličitanového systému oceánu
          potřebujeme právě více takových, vzájemně se doplňujících údajů.
        </p>
        <h3>Co dělá byreta a co elektroda</h3>
        <p>
          Do titrační nádoby přeneseme vzorek se známou hmotností. Na souši ji můžeme
          zjistit vážením, při práci na lodi se používá také přesně odměřený objem
          a převod na hmotnost podle hustoty vody. Nádobou je zde otevřená kádinka
          obklopená vodním pláštěm. V plášti cirkuluje voda ze stálé teplotní lázně,
          takže vzorek během rozboru zůstává přibližně na stejné teplotě.
        </p>
        <p>
          Kyselinu dávkuje <strong>byreta</strong>. V automatickém provedení ji píst
          vytlačuje po malých, odměřených dávkách hadičkou do vzorku. Přidávanému
          roztoku říkáme titrant. Míchadlo každou dávku rozptýlí v celé nádobě.
          Z objemu a hustoty titrantu vypočteme jeho hmotnost a ze známé koncentrace
          množství přidané kyseliny. Titrant obsahuje také chlorid sodný,
          aby se solné prostředí vzorku při jeho přidávání měnilo co nejméně.
        </p>
        <p>
          Aby dávka znamenala známé množství kyseliny, kalibrujeme dávkování i koncentraci
          titrantu. Byretou opakovaně vydáme vodu, zvážíme ji a podle její hustoty
          vypočteme skutečný objem. Porovnání s údajem byrety poskytne převod
          pro její další použití. Koncentraci kyseliny stanovíme samostatným
          rozborem. V referenčním postupu se k tomu používá coulometrie,
          při níž se množství reagující látky určuje z prošlého elektrického náboje.
        </p>
        <p>
          Skleněná elektroda spolu s referenční elektrodou sleduje, jak se vzorek
          okyseluje. Měřicí přístroj mezi nimi odečítá napětí. Desetinásobné
          zvýšení koncentrace vodíkových iontů vyvolá přibližně stejný přírůstek
          napětí, ať začínáme u nižší, nebo u vyšší koncentrace. Při stálé teplotě a téměř stálém solném
          prostředí lze tuto odezvu použít při výpočtu titrace. Podrobněji ji vysvětluje{" "}
          <Link href="/metody/potenciometrie">článek o potenciometrii</Link>.
        </p>
        <figure className="article-figure">
          <div style={{ overflowX: "auto" }}>
            <Image src="/media/titration/open-cell.svg" width={900} height={540} unoptimized
              style={{ minWidth: "36rem" }}
              alt="Byreta dávkuje kyselinu do míchané mořské vody. Elektroda měří napětí, teploměr teplotu a proud vzduchu odvádí oxid uhličitý. Počítač spojuje tyto údaje s přidaným objemem." />
          </div>
          <figcaption>
            Otevřená titrační soustava. Oranžová cesta vede kyselinu z byrety do vzorku,
            modře je vyznačena voda a její teplotní plášť. Elektroda a teploměr poskytují
            údaje pro výpočet, přiváděný vzduch pomáhá odstraňovat CO₂.
            Vlastní schéma podle{" "}
            <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">postupu 3b, obrázku 1</SourceLink>.
          </figcaption>
        </figure>
        <h3>Jak probíhá jedna titrace</h3>
        <p>
          První větší dávka kyseliny sníží pH vzorku přibližně do oblasti 3,5 až 4.
          Hydrogenuhličitany a uhličitany se při tom převedou převážně na CO₂.
          Vzorek potom několik minut intenzivně mícháme a probubláváme vzduchem,
          aby vzniklý CO₂ unikl. Otevřená nádoba je záměrnou součástí metody:
          po odstranění většiny uhlíku se závěrečný výpočet obejde bez znalosti
          jeho původního celkového množství.
        </p>
        <p>
          Potom pokračujeme malými dávkami kyseliny přibližně k pH 3.
          Po každém přídavku počkáme na ustálení a zapíšeme celkový přidaný objem,
          napětí a teplotu. Vznikne titrační křivka, tedy záznam odezvy vzorku
          na postupné přidávání kyseliny. V závěrečné části už je kyseliny přebytek.
          Právě z jeho růstu lze dopočítat, kolik kyseliny původní vzorek spotřeboval.
          Postup popisují{" "}
          <SourceLink id="DOI_10_1016_S0304_4203_02_00133_0">Dickson, Afghan a Anderson (2003)</SourceLink>{" "}
          a jeho novější pracovní verze{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">SOP 3b z roku 2016</SourceLink>.
        </p>
        <figure className="article-figure">
          <Image src="/media/titration/vindta-noc.jpg" width={688} height={542} unoptimized
            alt="Laboratorní systém VINDTA v National Oceanography Centre. Vlevo je dávkovací jednotka kyseliny, dole uprostřed skleněná titrační nádoba na míchadle, do níž zasahuje elektroda." />
          <figcaption>
            Systém VINDTA 3C v National Oceanography Centre, používaný při rozborech
            mořské vody pro projekt DEFRApH zaměřený na acidifikaci britských vod.
            Vlevo stojí dávkovač kyseliny, dole uprostřed je titrační nádoba
            s elektrodou. Další skleněné části slouží i k samostatné analýze anorganického
            uhlíku. Jde o automatizované provedení, jehož pracovní postup se v detailech
            liší od zde vysvětlené otevřené titrace.
            Snímek beze změn z{" "}
            <SourceLink id="2011_Hartman_VINDTA">Hartman, Dumousseaud a Roberts (2011), NOC Internal Document 01, obrázek 1.1, s. 9</SourceLink>.
            NERC Open Research Archive (NORA), vzdělávací užití podle{" "}
            <SourceLink id="2022_NORA_Reuse_Policy">podmínek repozitáře</SourceLink>.
          </figcaption>
        </figure>
        <h3>Od titrační křivky ke spotřebě kyseliny</h3>
        <p>
          Výpočet stojí na jednoduché bilanci: od množství přidané kyseliny odečteme
          přebytek, který v okyseleném roztoku zbývá. Rozdíl je množství spotřebované
          původním vzorkem. Po vydělení hmotností vzorku získáme alkalinitu:
        </p>
        <Equation tex={String.raw`A_\mathrm{T}=\frac{n_\text{přidané}-n_\text{přebytek}}{m_0}`} />
        <p>
          Obě veličiny označené <InlineMath tex={String.raw`n`} /> jsou látková množství
          vyjádřená v molech vodíkových iontů. Mol je jednotka pro počet částic.
          Značka <InlineMath tex={String.raw`m_0`} /> znamená původní hmotnost mořské vody
          v kilogramech. Výsledek má jednotku mol/kg, v oceánografii obvykle používáme
          milionkrát menší mikromol, tedy µmol/kg. Přebytek se určuje vůči stejné
          chemické referenci jako alkalinita.
        </p>
        <p>
          Přidané množství známe z dávkování. Přebytek odvozujeme z odezvy elektrody,
          která zaznamenala změnu kyselosti. Využijeme její právě popsanou odezvu
          k převodu napětí na veličinu úměrnou koncentraci vodíkových iontů.
          Koncentrace se vztahuje k jednomu kilogramu roztoku. Když ji vynásobíme
          hmotností celého roztoku, získáme údaj úměrný přebytku kyseliny v celé
          nádobě. Tak vznikne pomocná veličina pro <strong>Granův graf</strong>.
        </p>
        <Equation tex={String.raw`G=(m_0+m)\,10^{(E-E_\mathrm{ref})/s}`} />
        <p>
          Zde <InlineMath tex={String.raw`m`} /> označuje hmotnost přidaného titrantu
          v kilogramech, <InlineMath tex={String.raw`E`} /> naměřené napětí
          v milivoltech a <InlineMath tex={String.raw`E_\mathrm{ref}`} /> jedno pevně
          zvolené napětí, například první odečet. Teoretická citlivost{" "}
          <InlineMath tex={String.raw`s`} /> je změna napětí v milivoltech odpovídající
          desetinásobné koncentraci H⁺ při dané teplotě. Pomocná veličina{" "}
          <InlineMath tex={String.raw`G`} /> má při tomto zápisu jednotku kilogram.
          Sama není hmotností žádné látky, slouží k přehlednému přepočtu křivky.
        </p>
        <p>
          V kyselé části titrace roste tato veličina přibližně po přímce s hmotností
          přidaného titrantu. Přímku prodloužíme zpět k hodnotě nula. Její průsečík
          ukáže odhad dávky, která by právě vyrovnala původní alkalinitu bez
          přebytku kyseliny. Tomuto stavu říkáme bod ekvivalence.
          Známe-li hmotnost takové dávky a koncentraci titrantu, můžeme spočítat
          spotřebu kyseliny a první odhad alkalinity.
        </p>
        <p>
          Pro konečný výsledek se použije podrobnější popis roztoku. Při nízkém pH
          vážou část přidaných vodíkových iontů také sírany a fluoridy. Výpočet určí,
          jak se vodík rozdělí mezi volné ionty a tyto vázané formy. Z celkové
          slanosti vody, označované jako salinita, odhadne množství síranů a fluoridů.
          Změřená teplota pak pomáhá určit chemické rovnováhy, tedy ustálené
          zastoupení jednotlivých forem látek za daných podmínek.
        </p>
        <p>
          Program pak hledá alkalinitu a výchozí posun odezvy elektrody, při nichž
          vypočtená bilance nejlépe souhlasí s body titrace v rozmezí pH 3 až 3,5.
          Používá metodu nejmenších čtverců: rozdíl mezi výpočtem a měřením
          v každém bodě umocní na druhou, tyto hodnoty sečte a hledá jejich nejmenší
          součet. Granův odhad slouží jako výchozí hodnota tohoto zpřesnění.
          Oba kroky včetně chemických rovnic jsou zveřejněny v{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">oddílu 7 postupu 3b</SourceLink>.
        </p>
        <p>
          Celým postupem necháme projít také certifikovanou mořskou vodu.
          Je to referenční materiál, jehož alkalinita byla předem stanovena a uvedena
          v certifikátu. Porovnání propojí výsledek laboratoře se společnou
          referencí používanou na dalších pracovištích. Vznik těchto materiálů
          a jejich návaznost na měření kyseliny vysvětluje{" "}
          <SourceLink id="DOI_10_5670_oceanog_2010_22">Dickson (2010)</SourceLink>.
        </p>
        <h3>Co výsledek říká o oceánu</h3>
        <p>
          Alkalinita vztažená ke kilogramu vyjadřuje složení vzorku bez závislosti
          na jeho tepelné roztažnosti. V kombinaci s celkovým rozpuštěným anorganickým
          uhlíkem, tedy součtem uhlíku v CO₂, hydrogenuhličitanech a uhličitanech,
          poskytuje podklad pro výpočet jejich vzájemného zastoupení i pH.
          Chemické rovnováhy při něm počítáme pro teplotu, salinitu a tlak vody,
          kterou chceme popsat.
        </p>
        <p>
          Takto využívá alkalinitu program Hawaii Ocean Time-series na stanici
          ALOHA severně od Havaje. Z jeho měření alkalinity a anorganického uhlíku
          v letech 1988–2007 vypočítali{" "}
          <SourceLink id="DOI_10_1073_pnas_0906044106">Dore a kolegové (2009)</SourceLink>{" "}
          pokles pH povrchové vrstvy do 30 metrů o 0,0019 ± 0,0002 za rok.
          Uvedené ± vyjadřuje standardní chybu odhadu časového trendu.
          Titrace zde dodala jednu ze vstupních veličin, pH vzniklo navazujícím
          výpočtem. Program zveřejňuje{" "}
          <SourceLink id="2026_HOT_Alkalinity_Method">popis měření, kontroly i odkazy na data</SourceLink>.
          Širší souvislosti rozebírá{" "}
          <Link href="/pozorovani/acidifikace-oceanu">pozorování acidifikace oceánu</Link>.
        </p>
        <h3>Jak se postup vyvíjel a jaké má varianty</h3>
        <p>
          Spojení známé dávky kyseliny s měřením jejího přebytku má v oceánografii
          dlouhou historii.{" "}
          <SourceLink id="1940_Thompson_Anderson_Alkalinity">Thompson a Anderson (1940)</SourceLink>{" "}
          popsali použití skleněné elektrody v lodní laboratoři. Po jediné dávce
          kyseliny měřili zbývající kyselost. Pozdější postupy začaly využívat více
          bodů křivky a výpočet chemických rovnováh. Dvoustupňovou otevřenou titraci
          pro certifikaci mořské vody doložili{" "}
          <SourceLink id="DOI_10_1016_S0304_4203_02_00133_0">Dickson a kolegové (2003)</SourceLink>.
        </p>
        <p>
          Vedle otevřené nádoby existuje uzavřená titrační cela, která během měření
          zadržuje CO₂. Její výpočet proto zahrnuje i uhlík, který ve vzorku zůstává.
          Průběh titrace lze místo elektrody sledovat také opticky pomocí
          barviva citlivého na pH. Titrace označuje reakci se známými dávkami
          činidla, zatímco potenciometrie nebo{" "}
          <Link href="/metody/spektrofotometrie">spektrofotometrie</Link>{" "}
          určuje, jak reakci sledujeme. Otevřené a uzavřené provedení popisují{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">postupy 3b a 3a měřicí příručky</SourceLink>.
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Výsledek nejvíce závisí na znalosti dávky a koncentrace kyseliny,
          hmotnosti vzorku a chování elektrody. U vod s neobvyklým složením
          mohou k výsledku přispívat další látky, které běžný výpočet nezahrnuje. Referenční otevřený postup{" "}
          <SourceLink id="DOI_10_1016_S0304_4203_02_00133_0">Dicksona a kolegů (2003)</SourceLink>{" "}
          dosáhl při zkouškách známých roztoků odchylek do 2 µmol/kg.
          Tato hodnota charakterizuje jejich ověřenou soustavu a pracovní postup.
        </p>
        <details className="article-details">
          <summary>Podrobnosti o přesnosti a nezávislé kontrole</summary>
          <p>
            Chybná koncentrace kyseliny nebo nesprávný objem byrety posune všechny
            výsledky podobným směrem. Kolísání elektrody se může projevit větším
            rozptylem opakovaných titrací i změnou průměru. Průběžně měřené referenční
            vzorky a dvojice opakovaných rozborů se proto zapisují do kontrolních
            grafů, které umožní odhalit změnu v čase. Předepsaný postup zahrnuje
            rovněž kontrolu vah, teploměrů a voltmetru.
          </p>
          <p>
            Dickson a kolegové ověřili výsledek na roztocích připravených ze
            zvážených množství látek se známou čistotou. U roztoku uhličitanu
            sodného byla vypočtená alkalinita 2172,0 µmol/kg a otevřená titrace
            poskytla 2172,21 µmol/kg, se směrodatnou odchylkou 0,51 µmol/kg
            ze čtyř rozborů. Roztoky sloužily k ověření celého postupu,
            koncentrace titrační kyseliny byla stanovena samostatně coulometricky.
          </p>
          <p>
            U přirozené mořské vody porovnali otevřenou titraci s coulometrickou
            zpětnou titrací. Průměry byly 2279,15 a 2278,52 µmol/kg, tedy rozdíl
            0,63 µmol/kg. Rozdílný způsob dávkování dává porovnání hodnotu,
            oba postupy však sdílely laboratoř, potenciometrické určení konce
            reakce a návaznost na měření kyseliny. Také srovnání s uzavřenými
            titracemi v Miami mělo společný prvek: obě laboratoře používaly
            coulometrickou kalibraci kyseliny.
          </p>
          <p>
            Dlouhodobé sledování referenční šarže 35 dalo směrodatnou odchylku
            0,70 µmol/kg ze 143 rozborů během přibližně tří let. Autoři do této
            statistiky nezahrnuli období problémů s elektrodami.
            Směrodatná odchylka popisuje rozptyl, uvedená odchylka do 2 µmol/kg
            vychází z kontroly správnosti. Ani jedna není obecným parametrem
            libovolného titrátoru.
          </p>
          <p>
            Výpočet otevřené titrace předpokládá odstranění většiny CO₂ a používá
            kyselou část křivky. Nedostatečné odplynění zanechá ve vzorku další
            reagující uhlík. Neobvyklé složení vody nebo významný příspěvek
            organických kyselin může vyžadovat jiný chemický popis.
            Úplné ověření i jeho hranice obsahují{" "}
            <SourceLink id="DOI_10_1016_S0304_4203_02_00133_0">oddíly 3–5 původní studie</SourceLink>{" "}
            a{" "}
            <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">SOP 3b, oddíly 7–8</SourceLink>.
          </p>
        </details>

        <h2>Příklad: přepočet zveřejněné titrace</h2>
        <p>
          Měřicí příručka zveřejňuje celý záznam titrace vzorku mořské vody:
          22 dvojic přidaného objemu kyseliny a napětí elektrody.
          Použijeme{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">SOP 3b, verzi 3.02 z 5. ledna 2016, oddíl 7.4, s. 9–10</SourceLink>.
          Příručka u tohoto vzorku neuvádí místo ani datum odběru.
          Zopakujeme počáteční Granův odhad a porovnáme jej s konečným výsledkem
          uvedeným v příručce.
        </p>
        <p>
          Hmotnost vody byla 140,32 g, praktická salinita 33,923 a teplota titrace
          24,25 °C. Praktická salinita je bezrozměrný údaj o slanosti získaný
          z elektrické vodivosti. Kyselina měla koncentraci 0,10046 mol/kg roztoku
          a hustotu 1,02393 g/ml. Následující tabulka ukazuje tři z použitých
          odečtů, přepočet využívá všech 21 bodů od 3,500 do 4,500 ml.
        </p>
        <div className="method-data-output">
          <div className="method-data-output__table-wrap" tabIndex={0} role="region" aria-label="Vybrané body titrace">
            <table>
              <thead><tr><th>Celkový objem kyseliny</th><th>Napětí elektrody</th><th>Hmotnost titrantu</th></tr></thead>
              <tbody>
                <tr><td>3,500 ml</td><td>186,07 mV</td><td>3,583755 g</td></tr>
                <tr><td>4,000 ml</td><td>206,17 mV</td><td>4,095720 g</td></tr>
                <tr><td>4,500 ml</td><td>217,32 mV</td><td>4,607685 g</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>
          Poslední sloupec vzniká násobením objemu hustotou. Z napětí spočítáme
          veličinu <InlineMath tex={String.raw`G`} /> podle již vysvětleného vztahu,
          s prvním odečtem 186,07 mV jako pevnou referencí. Pro uvedenou teplotu
          vychází teoretická citlivost elektrody přibližně 59,0106 mV na
          desetinásobnou koncentraci H⁺. Proložená přímka protne vodorovnou
          osu při hmotnosti kyseliny 3,161427 g, což odpovídá objemu asi 3,08754 ml.
        </p>
        <figure className="article-figure">
          <div style={{ overflowX: "auto" }}>
            <Image src="/media/titration/gran-example.svg" width={900} height={510} unoptimized
              style={{ minWidth: "36rem" }}
              alt="Granův graf z jednadvaceti zveřejněných odečtů. Body leží blízko přímky, která po prodloužení protíná osu hmotnosti kyseliny při 3,1614 gramu." />
          </div>
          <figcaption>
            Vodorovná osa udává hmotnost přidaného titrantu, svislá pomocnou
            veličinu G. Modré body jsou přepočtené odečty, oranžová přímka
            jejich proložení. Přerušovaný úsek vede k odhadnutému bodu ekvivalence.
            Vlastní výpočet z dat příručky, stále jde o počáteční Granův odhad.
          </figcaption>
        </figure>
        <p>
          V této odhadnuté dávce je po přepočtu gramů na kilogramy
          přibližně 0,00031760 mol kyseliny. Vydělíme je hmotností původní vody:
        </p>
        <Equation tex={[
          String.raw`A_{\mathrm{T,Gran}}=\frac{0{,}003161427\,\mathrm{kg}\times0{,}10046\,\mathrm{mol\,kg^{-1}}}{0{,}14032\,\mathrm{kg}}`,
          String.raw`\approx2263{,}38\,\mathrm{\mu mol\,kg^{-1}}`,
        ]} />
        <p>
          Konečný výpočet příručky, který zahrnuje sírany a fluoridy, uvádí{" "}
          <strong>2260,06 µmol/kg</strong>. Rozdíl proti našemu prvnímu odhadu
          je přibližně 3,32 µmol/kg. Ukazuje význam zpřesnění chemického popisu,
          není odhadem nejistoty měření. Konečnou hodnotu zde přebíráme ze zdroje,
          přiložený skript opakuje výpočet Granova odhadu.
        </p>
        <details className="article-details">
          <summary>Data, nastavení a opakování výpočtu</summary>
          <p>
            K dispozici jsou{" "}
            <a href={`${dataPath}/sop3b-titration.csv`}>všechny zveřejněné odečty v CSV</a>,{" "}
            <a href={`${dataPath}/example.json`}>původ a nastavení výpočtu v JSON</a>{" "}
            a{" "}
            <a href={`${dataPath}/reproduce.py`}>skript pro Python 3</a>.
            Uložte je do stejné složky a spusťte <code>python reproduce.py</code>.
            Skript vystačí se standardní knihovnou a kontroluje otisk vstupních dat.
          </p>
          <p>
            V proložení mají všechny body stejnou váhu. Odečet při 4,550 ml
            zůstává v CSV, ale nepoužíváme jej, protože ho příručka označuje
            jako bod mimo její závěrečný interval pH. V tomto opakování je
            výběr bodů pevný. Nepřepočítáváme výběr podle pH ani závěrečné
            nelineární proložení.
          </p>
          <p>
            Citlivost počítáme ze vztahu{" "}
            <InlineMath tex={String.raw`s=1000\ln(10)RT/F`} />,
            kde <InlineMath tex={String.raw`R`} /> je molární plynová konstanta
            8,314472 J/(mol·K), <InlineMath tex={String.raw`T`} /> teplota
            297,40 K a <InlineMath tex={String.raw`F`} /> Faradayova konstanta
            96485,3399 C/mol. Přirozený logaritmus deseti je{" "}
            <InlineMath tex={String.raw`\ln(10)`} />, faktor 1000 převádí volty
            na milivolty. Číselné konstanty přebíráme z kapitoly 5 příručky.
            Její konečný výsledek 2260,06 µmol/kg předchází případné opravě
            na zředění konzervačním roztokem.
          </p>
        </details>
        <h2>Shrnutí</h2>
        <div className="method-conclusion"><p>
          Titrace převádí známé dávky kyseliny a odezvu vzorku na celkovou alkalinitu
          mořské vody. Spolu s měřením rozpuštěného anorganického uhlíku umožňuje
          určit stav uhličitanového systému a sledovat jeho dlouhodobé změny.
          Vazbu mezi laboratořemi zajišťují kalibrované dávky a společné referenční materiály.
        </p></div>
      </div>
    </article>
  );
}
