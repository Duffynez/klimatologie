import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

const dataPath = "/data/methods/spectrophotometry";

export function SpectrophotometryArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak změříme pH pomocí světla</h2>
        <p className="article-prose__intro">
          Spektrofotometrie roztoků je metoda, která měří, jak silně roztok pohlcuje světlo při
          zvolených vlnových délkách. Umožňuje určit koncentraci rozpuštěné látky nebo jinou
          vlastnost, která ovlivňuje pohlcování. V klimatologii se používá například ke zjišťování
          pH mořské vody. Právě na tomto použití si vysvětlíme celý postup.{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(měřicí příručka, SOP 6b)</SourceLink>
        </p>
        <p>
          pH popisuje kyselost roztoku. Když přibývají vodíkové ionty, jeho hodnota klesá.
          Vodíkový iont je kladně nabitá podoba vodíku, která ve vodě přechází mezi molekulami.
          Stupnice je logaritmická: pokles o jeden stupeň znamená desetinásobek příslušné
          koncentrace vodíkových iontů. Mořská voda přitom může mít stále pH vyšší než sedm
          a zároveň postupně okyselovat. Pro sledování této změny potřebujeme zachytit i malé
          rozdíly mezi jednotlivými odběry. Souvislosti vysvětluje článek o{" "}
          <Link href="/pozorovani/acidifikace-oceanu">acidifikaci oceánu</Link>.{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(Dickson a kol., kap. 2)</SourceLink>
        </p>

        <h3>Proč barvivo reaguje na pH</h3>
        <p>
          Do vzorku přidáme malé množství indikátoru nazývaného <strong>m-kresolový purpur</strong>,
          anglicky meta-cresol purple, zkráceně mCP. V rozsahu pH obvyklém pro mořskou vodu se uplatňují dvě jeho chemické
          podoby. Jedna má navázaný vodíkový iont, druhá jej odevzdala okolní vodě. Tyto podoby
          do sebe průběžně přecházejí. Jejich poměr se ustálí podle toho, kolik vodíkových iontů
          je ve vodě k dispozici. Při nižším pH roste zastoupení podoby s navázaným iontem.{" "}
          <SourceLink id="DOI_10_3389_fmars_2018_00177">(Müller a Rehder, 2018, teoretické vztahy)</SourceLink>
        </p>
        <p>
          Navázání iontu mění také způsob, jakým molekula pohlcuje světlo. Podoba s navázaným
          iontem má výrazné pohlcování při vlnové délce 434 nanometrů, druhá při 578 nanometrech.
          Vlnová délka zde určuje barvu měřicího světla a nanometr je miliardtina metru.
          Když změříme pohlcování v obou místech, získáme informaci o zastoupení obou podob,
          a tím i o pH. Chemický vztah a překryv jejich absorpčních spekter popisují{" "}
          <SourceLink id="DOI_10_3389_fmars_2018_00177">Müller a Rehder (2018)</SourceLink>.
        </p>

        <h3>Vzorek v měřicí nádobce</h3>
        <p>
          Pro laboratorní měření odebereme vodu do kyvety, nádobky s průhlednými optickými okénky.
          Standardní oceánografický postup používá kyvetu s deset centimetrů dlouhou dráhou světla.
          Voda ji vyplní bez vzduchové bubliny a nádobka se uzavře. Pak ustálíme její teplotu,
          například na 25 °C. Tím získáme vzorek se známou teplotou, pro kterou lze použít
          příslušný převod na pH. Tento postup popisuje{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">příručka pro měření oceánského CO₂, postup 6b</SourceLink>.
        </p>
        <p>
          Spektrofotometr obsahuje zdroj světla, prostor pro kyvetu a detektor. Optická soustava
          rozlišuje vlnové délky a detektor převádí dopadající světlo na elektrický signál.
          Nejprve změříme samotnou mořskou vodu. Potom přidáme indikátor, promícháme jej a
          měření zopakujeme. První měření slouží jako pozadí, takže z výsledku můžeme vyčlenit
          pohlcování přidaného barviva. Takto pracovaly také přístroje na tichomořském řezu
          P16N v roce 2006, jejichž obsluhu popisuje{" "}
          <SourceLink id="2006_NOAA_P16N_pH_Method">veřejná dokumentace NOAA</SourceLink>.
        </p>
        <figure className="article-figure" style={{ maxWidth: "28rem", marginInline: "auto" }}>
          <Image src="/media/spectrophotometry/usgs-shipboard-ph.jpg" width={2592} height={3872} unoptimized
            alt="Pracovník obsluhuje spektrofotometr a počítač v palubní laboratoři ledoborce. Bílý přístroj s prostorem pro vzorek je vlevo dole." />
          <figcaption>
            Palubní analýza pH při výzkumu acidifikace Kanadské pánve v Severním ledovém oceánu.
            Spektrofotometr je vlevo dole, počítač zaznamenává měření.
            Zdroj: <SourceLink id="2011_USGS_Shipboard_pH_Photo">USGS, zveřejněno 17. srpna 2011</SourceLink>.
            Public Domain, bez úprav.
          </figcaption>
        </figure>

        <h3>Co znamenají čísla ze spektrofotometru</h3>
        <p>
          Zeslabení světla vyjadřujeme veličinou zvanou <strong>absorbance</strong>.
          Přístroj porovná intenzitu světla po průchodu vzorkem s referenční intenzitou.
          Použije jejich poměr a jeho záporný dekadický logaritmus:{" "}
          <SourceLink id="2016_Harvey_Analytical_Chemistry">(Harvey, oddíl 10.2)</SourceLink>
        </p>
        <Equation tex={String.raw`A_\lambda=-\log_{10}\!\left(\frac{I_\lambda}{I_{0,\lambda}}\right)`} />
        <p>
          <InlineMath tex={String.raw`A_\lambda`} /> je absorbance při vlnové délce{" "}
          <InlineMath tex={String.raw`\lambda`} />. Symboly{" "}
          <InlineMath tex={String.raw`I_\lambda`} /> a{" "}
          <InlineMath tex={String.raw`I_{0,\lambda}`} /> označují intenzitu prošlého a referenčního světla,
          vyjádřené ve stejných jednotkách. Jejich poměr i absorbance jsou bezrozměrné.
          Logaritmus převádí násobné zeslabování světla na veličinu, v níž lze příspěvky
          pohlcujících látek sčítat. Převod světelného signálu na absorbanci v konkrétním
          přístroji rozepisují <SourceLink id="DOI_10_5194_os_7_597_2011">Aßmann a kol. (2011)</SourceLink>.
        </p>
        <p>
          Změřená absorbance obsahuje také příspěvek samotného vzorku a nádobky.
          U každé vlnové délky proto odečteme měření bez barviva. K tomu měříme ještě při
          730 nanometrech, kde indikátor prakticky nepohlcuje. Změnu tohoto pozadí odečteme
          i od obou barevných měření. Tak získáme absorbance připadající na indikátor.
          Pořadí těchto odečtů stanovuje{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">postup 6b, oddíl 8.1</SourceLink>.
        </p>
        <p>
          Z jediné absorbance bychom ještě nerozpoznali, zda se změnilo pH, nebo jsme jen
          přidali více barviva. Proto použijeme <strong>poměr absorbancí</strong> při 578 a 434
          nanometrech. Při stejném pH zvýší více barviva obě absorbance stejným násobkem,
          který se při dělení vykrátí. Změna zastoupení jeho chemických podob naopak mění
          obě absorbance různě. Poměr tak zachovává informaci potřebnou k určení pH.{" "}
          <SourceLink id="2016_Harvey_Analytical_Chemistry">(Harvey, oddíl 10.2)</SourceLink>
        </p>
        <Equation tex={String.raw`R=\frac{A_{578}}{A_{434}}`} />
        <p>
          <InlineMath tex={String.raw`R`} /> je bezrozměrný poměr a{" "}
          <InlineMath tex={String.raw`A_{578}`} /> a <InlineMath tex={String.raw`A_{434}`} /> jsou
          absorbance po odečtení pozadí. Dolní čísla označují vlnové délky v nanometrech.
          Obě chemické podoby barviva trochu pohlcují i v oblasti druhé z nich, takže tento
          optický poměr ještě není přímo jejich koncentračním poměrem. Překryv zohlední
          kalibrační vztah v následujícím kroku. Jeho odvození uvádějí{" "}
          <SourceLink id="DOI_10_3389_fmars_2018_00177">Müller a Rehder (2018)</SourceLink>.
        </p>

        <h3>Kalibrace propojí barvivo se stupnicí pH</h3>
        <p>
          Převod vyžaduje znalost chemických a optických vlastností indikátoru.
          Při jejich určování se měří roztoky, v nichž silně převládá jedna jeho podoba,
          a také referenční roztoky se známým pH. Pro mořskou vodu slouží roztoky
          s látkou TRIS v umělé mořské vodě. Jde o pufry, tedy roztoky, které tlumí změnu pH
          po malém přídavku kyseliny nebo zásady. Jejich přiřazené pH poskytuje referenci
          pro kalibraci barviva. Návaznost těchto referencí na elektrochemické měření
          vysvětlují <SourceLink id="DOI_10_3389_fmars_2018_00177">Müller a Rehder (2018)</SourceLink>.
        </p>
        <p>
          Používáme celkovou stupnici pH, označenou pHₜ. Ta započítává volné vodíkové ionty
          i jejich podíl vázaný v hydrogensíranu, jedné z rozpuštěných sirných sloučenin.
          Pro čištěný mCP můžeme převod na tuto stupnici zapsat pomocí tří kalibračních parametrů:{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(SOP 6b, oddíly 2–3)</SourceLink>
        </p>
        <Equation tex={String.raw`\mathrm{pH}_{\mathrm T}=P+\log_{10}\!\left(\frac{R-e_{\mathrm a}}{1-R\,e_{\mathrm b}}\right)`} />
        <p>
          <InlineMath tex={String.raw`P`} /> určuje polohu výsledku na stupnici pH a zahrnuje
          chemickou rovnováhu indikátoru i jeho optickou odezvu. Jeho hodnota se určuje
          pomocí referenčních roztoků se známým pH.
        </p>
        <p>
          Parametr{" "}
          <InlineMath tex={String.raw`e_{\mathrm a}`} /> je poměr pohlcování podoby s navázaným
          vodíkovým iontem při 578 a 434 nanometrech. Parametr{" "}
          <InlineMath tex={String.raw`e_{\mathrm b}`} /> je poměr pohlcování druhé podoby při
          434 a 578 nanometrech. Tyto dva poměry zohledňují překryv spekter.
          Všechny tři parametry jsou bezrozměrné a vybírají se pro teplotu a salinitu vzorku.
          Salinita vyjadřuje jeho slanost, jejíž měření popisuje{" "}
          <Link href="/metody/konduktometrie">konduktometrie</Link>.{" "}
          <SourceLink id="DOI_10_1021_es200665d">(Liu a kol., 2011, rovnice 1–4)</SourceLink>
        </p>
        <p>
          V příkladu použijeme kalibraci čištěného barviva od{" "}
          <SourceLink id="DOI_10_1021_es200665d">Liua, Patsavase a Byrnea (2011)</SourceLink>.
          Platí pro teploty 5 až 35 °C a praktickou salinitu 20 až 40. Praktická salinita
          je bezrozměrná veličina, nikoli počet gramů soli v litru. Podrobné vztahy pro výpočet
          parametrů jsou u příkladu. V běžné analýze je vyhodnotí software ze zadané teploty
          a salinity, samotnou kalibraci barviva neopakuje při každém odběru.
        </p>
        <p>
          Takto získané pH zatím patří směsi vody a indikátoru. Protože indikátor sám přijímá
          a odevzdává vodíkové ionty, jeho přidání trochu změní pH vzorku.
          Změnu určíme měřením při několika malých přídavcích. Pro ně je závislost pH na
          přidaném množství přibližně přímková. Přímku prodloužíme k nulovému přídavku. Dostaneme odhad pH původní vody,
          přestože bez barviva bychom tento optický signál neměli.
          Takto korekci prováděli{" "}
          <SourceLink id="DOI_10_5194_os_7_597_2011">Aßmann a kol. (2011), obrázek 6</SourceLink>.
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" tabIndex={0} role="region" aria-label="Schéma měření pH, na malé obrazovce posuvné">
            <Image src="/media/spectrophotometry/ph-principle.svg" width={1100} height={590} unoptimized
              alt="Světlo prochází kyvetou s vodou a indikátorem do detektoru. Dvě absorbance po odečtení pozadí dávají poměr R. Kalibrační vztah s teplotou a salinitou jej převádí na pH směsi, následuje korekce přídavku barviva." />
          </div>
          <figcaption>
            Vlastní schéma měřicího postupu. Horní šipka sleduje světlo, spodní šipky zpracování
            jeho signálu. Fialová a žlutá označují dvě měřené vlnové délky. Schéma znázorňuje
            funkce součástí, nikoli konstrukci určitého modelu přístroje.{" "}
            <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(schéma podle SOP 6b)</SourceLink>
          </figcaption>
        </figure>

        <h3>Co výsledek říká o oceánu</h3>
        <p>
          Výsledkem analýzy je pH původní vody při teplotě měření. Zahřátím vody se mění
          chemické rovnováhy, a tedy i pH. Hodnotu při teplotě a tlaku v místě odběru lze
          následně dopočítat pomocí rovnic chemie mořské vody a dalších údajů o vzorku.
          Toto rozlišení laboratorního a oceánského pH používají například{" "}
          <SourceLink id="DOI_10_1073_pnas_0906044106">Dore a kol. (2009)</SourceLink>.
        </p>
        <p>
          Opakované odběry poskytují časovou řadu. Program Hawaii Ocean Time-series tak
          sleduje stanici ALOHA severně od Havaje. Dore a kolegové porovnávali přímo měřené
          pH s pH vypočteným z dalších dvou měření. První určuje celkové množství
          rozpuštěného anorganického uhlíku, tedy uhlíku v CO₂ a jeho odvozených rozpuštěných
          formách. Druhé určuje celkovou alkalitu, která popisuje schopnost vody neutralizovat kyselinu. Přímá měření v jejich
          studii pokrývala roky 1992–1998 a 2003–2007. Obě cesty zachytily pokles pH.
          Porovnání více chemických veličin pomáhá rozlišit dlouhodobou acidifikaci od
          změn spojených s teplotou, promícháváním a činností organismů. Podrobnosti
          a veřejné podklady uvádí <SourceLink id="DOI_10_1073_pnas_0906044106">původní studie</SourceLink> a{" "}
          <Link href="/pozorovani/acidifikace-oceanu">navazující pozorování</Link>.
        </p>

        <h3>Jak se metoda rozvíjela</h3>
        <p>
          Základ kvantitativního měření barevných roztoků zachytil{" "}
          <SourceLink id="DOI_10_1002_andp_18521620505">August Beer v roce 1852</SourceLink>.
          Na roztocích solí zkoumal, jak zeslabení červeného světla souvisí s koncentrací
          a délkou jeho dráhy. Moderní spektrofotometr místo porovnávání jasů okem používá
          elektronický detektor. Pro přesné oceánské pH byl dalším důležitým krokem postup
          čištění mCP a jeho kalibrace, který zveřejnili{" "}
          <SourceLink id="DOI_10_1021_es200665d">Liu a kol. (2011)</SourceLink>.
        </p>
        <p>
          Měření může probíhat ručně v jednotlivých kyvetách nebo automaticky v průtokové
          nádobce. Automatická sestava sama přivádí mořskou vodu, dávkuje barvivo a zpracuje
          odezvu. Přístroj popsaný <SourceLink id="DOI_10_5194_os_7_597_2011">Aßmannem a kol. (2011)</SourceLink>{" "}
          byl navržen pro dlouhodobý provoz na lodích a poskytoval jeden výsledek za minutu.
          Pro běžné mořské salinity i méně slané vody existují různé kalibrace barviva.
          Jejich rozsah rozšířili <SourceLink id="DOI_10_3389_fmars_2018_00177">Müller a Rehder (2018)</SourceLink>.
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Výsledek ovlivňuje teplota, čistota barviva, odečet světla a zachování vzorku při
          odběru. Liu a kolegové porovnali čištěné indikátory od sedmi dodavatelů a proti
          zvolenému referenčnímu barvivu zjistili rozdíly do ±0,0004 pH v rozsahu 7,4–8,2.
          Toto porovnání dokládá shodu čištěných barviv, nikoli celkovou nejistotu každého
          oceánského měření. Tu je potřeba posoudit pro konkrétní sestavu a podmínky.
          <SourceLink id="DOI_10_1021_es200665d"> Liu a kol., 2011</SourceLink>
        </p>
        <details className="article-details">
          <summary>Podrobnosti k nejistotám a nezávislé kontrole</summary>
          <p>
            Nečistoty mohou pohlcovat světlo ve stejných oblastech jako indikátor.
            Ve studii Liua a kolegů dosáhly rozdíly při použití nečištěných barviv až 0,018 pH
            při pH 8,2. Po vyčištění se výrazně zmenšily. Všechny výsledky ale využívaly
            společný způsob kalibrace a referenční barvivo. Shoda dodavatelů proto
            neověřuje nezávisle správnost referenční stupnice.{" "}
            <SourceLink id="DOI_10_1021_es200665d">(Liu a kol., 2011, výsledky čištění)</SourceLink>
          </p>
          <p>
            Stejní autoři uvádějí průměrnou absolutní odchylku kalibračního vztahu od
            referenčních pufrů 0,0004 a největší odchylku 0,0011 pH. Jde o shodu s podklady
            kalibrace. Tu odlišujeme od zkoušky na nových vzorcích. Ověření vlnových délek
            a odezvy detektoru prováděli pomocí referenčního roztoku oxidu holmitého a
            optických filtrů NIST. <SourceLink id="DOI_10_1021_es200665d">Liu a kol., 2011</SourceLink>
          </p>
          <p>
            Aßmannův automatický přístroj měl proti jinému spektrofotometrickému systému
            průměrný rozdíl +0,0005 pH, ale proti certifikovanému pufru +0,0081 pH.
            Oba optické systémy sdílely kalibraci indikátoru a používaly nečištěné barvivo.
            Porovnání přístrojů tedy ověřovalo jejich vzájemnou shodu, zatímco pufr
            odhalil společný posun. Tato čísla patří této sestavě, nikoli všem dnešním
            spektrofotometrům. <SourceLink id="DOI_10_5194_os_7_597_2011">Aßmann a kol., 2011</SourceLink>
          </p>
          <p>
            V provozu se opakují měření pufrů a duplicitních vzorků, aby se zachytil posun
            i rozptyl výsledků v čase. Kontakt vody se vzduchem může změnit obsah CO₂,
            bubliny nebo znečištěná okénka zase průchod světla. Počet desetinných míst
            ve výstupu sám přesnost neurčuje. Postupy kontroly a vedení kontrolních grafů
            uvádí <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">měřicí příručka, postup 6b a kapitola 3</SourceLink>.
          </p>
        </details>

        <h2>Příklad: výpočet ze skutečných absorbancí</h2>
        <p>
          Ryan Woosley zveřejnil měření mořské vody odebrané 10. října 2019 v severním
          Atlantiku. V laboratoři vědci upravili salinitu a obsah CO₂, aby mohli zkoušet
          chemické výpočty v různých podmínkách. Vybereme šarži 2, láhev 15 a první opakování A.
          Pracujeme se zveřejněnými absorbancemi, nikoli s původními elektrickými signály
          detektoru. Vypočítáme veličinu označenou v datech jako <code>raw_pHt</code>, tedy{" "}
          <strong>pH před korekcí přídavku indikátoru</strong>. Vstupy pocházejí z{" "}
          <SourceLink id="DOI_10_26008_1912_bco_dmo_905235_1">datového souboru BCO-DMO, verze 1</SourceLink>.
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" tabIndex={0} role="region" aria-label="Absorbance jednoho skutečného vzorku">
            <table>
              <thead><tr><th>Vlnová délka</th><th>Absorbance v souboru</th></tr></thead>
              <tbody>
                <tr><td>434 nm</td><td>0,654036</td></tr>
                <tr><td>578 nm</td><td>0,607583</td></tr>
                <tr><td>730 nm</td><td>0,000121</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>
          Hodnota při 730 nanometrech představuje zbývající posun pozadí. Odečteme ji od
          obou měřicích absorbancí a sestavíme jejich poměr:
        </p>
        <Equation tex={String.raw`R=\frac{0{,}607583-0{,}000121}{0{,}654036-0{,}000121}\doteq 0{,}928962`} />
        <p>
          Praktická salinita vzorku je 33,43. Soubor pro výpočet pH uvádí teplotu 25,001 °C,
          což odpovídá 298,151 kelvinu. Kalibrace Liua a kolegů pro tyto podmínky dává
          přibližně <InlineMath tex={String.raw`P=7{,}650284`} />,{" "}
          <InlineMath tex={String.raw`e_{\mathrm a}=0{,}00570667`} /> a{" "}
          <InlineMath tex={String.raw`e_{\mathrm b}=0{,}05662053`} />. Dosadíme je do již vysvětleného vztahu:
        </p>
        <Equation tex={[
          String.raw`\mathrm{pH}_{\mathrm T}=7{,}650284+`,
          String.raw`\log_{10}\!\left(\frac{0{,}928962-0{,}00570667}{1-0{,}928962\times0{,}05662053}\right)`,
          String.raw`\doteq 7{,}6391`,
        ]} />
        <p>
          Výsledek 7,6391 souhlasí s publikovaným údajem. Je to pH laboratorně upraveného
          vzorku s indikátorem při uvedené výpočetní teplotě. K pH vody před přidáním
          indikátoru by následovala popsaná korekce přídavku. Tento dílčí výpočet tedy
          ověřuje převod absorbancí, nehodnotí změnu pH oceánu v místě odběru.
          <SourceLink id="DOI_10_26008_1912_bco_dmo_905235_1"> Data a význam sloupců</SourceLink>
        </p>
        <details className="article-details">
          <summary>Úplné koeficienty a podklady pro zopakování</summary>
          <p>
            Pro čistý mCP určují <SourceLink id="DOI_10_1021_es200665d">rovnice 18 a 19 Liua a kol. (2011)</SourceLink>{" "}
            následující parametry. <InlineMath tex={String.raw`T`} /> je číselná hodnota teploty
            v kelvinech a <InlineMath tex={String.raw`S`} /> bezrozměrná praktická salinita.
            Symboly <InlineMath tex={String.raw`a,b,c,d`} /> jsou pomocné koeficienty tohoto
            empirického vztahu, platného pro 278,15–308,15 K a salinitu 20–40.{" "}
            <InlineMath tex={String.raw`\ln`} /> označuje přirozený logaritmus, zatímco
            ve výpočtu pH používáme dekadický logaritmus.
          </p>
          <Equation tex={String.raw`\begin{aligned}
            P&=a+\frac{b}{T}+c\ln T-dT\\
            a&=-246{,}64209+0{,}315971S\\
             &\quad+2{,}8855\times10^{-4}S^2\\
            b&=7229{,}23864-7{,}098137S\\
             &\quad-0{,}057034S^2\\
            c&=44{,}493382-0{,}052711S\\
            d&=0{,}0781344\\
            e_{\mathrm a}&=-0{,}007762+4{,}5174\times10^{-5}T\\
            e_{\mathrm b}&=-0{,}020813+2{,}60262\times10^{-4}T\\
             &\quad+1{,}0436\times10^{-4}(S-35)
          \end{aligned}`} />
          <p>
            V <a href={`${dataPath}/woosley-batch2-bottle15.csv`}>tabulce CSV</a> jsou čtyři
            opakování A–D vybrané láhve, všechna s příznakem kvality 2, tedy dobrá data.
            <a href={`${dataPath}/reproduce.py`}> Skript v Pythonu</a> bez dalších knihoven
            přepočítá poměry a pH a ověří shodu se zdrojem na jeho uvedená desetinná místa.
            CSV a skript uložte do stejné složky a spusťte <code>python reproduce.py</code>.
            Původ, přesný výběr, licence CC BY 4.0 a kontrolní součty jsou
            v <a href={`${dataPath}/example.json`}>metadatech příkladu</a>.
          </p>
          <p>
            Používáme sloupec <code>Calculated_Temperature</code>, který dokumentace určuje
            pro výpočet pH. Samostatný sloupec <code>Measured_Temperature</code> obsahuje
            jednotlivé teplotní odečty. U opakování A je to 24,978 °C. Skript zachovává
            význam obou sloupců a nezaokrouhluje mezivýsledky. Jejich rozlišení i označení
            pH před korekcí přídavku uvádí <SourceLink id="DOI_10_26008_1912_bco_dmo_905235_1">dokumentace dat</SourceLink>.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Spektrofotometrie určuje vlastnosti roztoku podle toho, kolik světla pohltí.
            Při měření pH mořské vody sleduje dvě barevné podoby indikátoru. Jejich
            poměr se mění s kyselostí a známý chemický vztah umožňuje převést optické
            měření na pH.
          </p>
          <p>
            Spektrofotometrie umožňuje stanovovat koncentrace rozpuštěných látek,
            například živin, a pomocí indikátorů také pH. V oceánografii slouží ke
            sledování chemického složení vody a acidifikace. Indikátor m-kresolová
            purpurová je použitelný přibližně v rozsahu pH 7,4–9,0, který zahrnuje i
            běžné mořské prostředí.{" "}
            <SourceLink id="DOI_10_5194_os_7_597_2011">(Aßmann a kol., 2011)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
