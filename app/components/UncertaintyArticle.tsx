import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function UncertaintyArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak určujeme nejistotu výsledku</h2>
        <p className="article-prose__intro">
          Vyčíslení nejistoty popisuje, jak široký rozsah hodnot měřené veličiny
          připouštějí dostupné informace. Přenos nejistoty určuje, jak se nejistoty
          vstupů promítnou do výsledku výpočtu. Nejprve vysvětlíme postup pro
          součet dvou příspěvků včetně jejich společných vlivů. Potom ukážeme,
          jak stejný úkol řeší opakované výpočty s různými přípustnými vstupy.{" "}
          <SourceLink id="DOI_10_59161_JCGM100_2008E">(mezinárodní příručka GUM)</SourceLink>{" "}
          <SourceLink id="DOI_10_59161_JCGM101_2008">(přenos pomocí simulací)</SourceLink>
        </p>

        <h3>Nejdříve určíme, jaká veličina vzniká výpočtem</h3>
        <p>
          Vyhodnocení začíná přesným vymezením výsledku. U teploty potřebujeme
          vědět, zda jde o okamžitou hodnotu na stanici, průměr určitého období,
          nebo rozdíl vůči referenci. Podle toho sestavíme vztah mezi výsledkem
          a vstupy. Tento vztah se nazývá <strong>model měření</strong>.
          Zahrnuje měřené údaje i potřebné opravy. Pokud kalibrace odhalí
          soustavný posun čidla, použijeme jeho odhad k opravě odečtu.
          Nejistota takové opravy pak vstupuje do nejistoty výsledku.{" "}
          <SourceLink id="DOI_10_6028_NIST_tn_1297">(Taylor a Kuyatt 1994, oddíl 5 a příloha A)</SourceLink>
        </p>
        <p>
          Nejjednodušší vztah tohoto druhu je součet dvou veličin:{" "}
          <InlineMath tex="y=a+b" />. Symboly <InlineMath tex="a" /> a{" "}
          <InlineMath tex="b" /> označují vstupní hodnoty a <InlineMath tex="y" />{" "}
          výsledek. Může tak vzniknout opravený údaj přičtením kalibrační opravy.
          Pro další výklad předpokládáme, že všechny tři veličiny vyjadřujeme
          ve stejné jednotce, například ve stupních Celsia. Nyní potřebujeme
          ke každému vstupu přiřadit také jeho nejistotu.{" "}
          <SourceLink id="DOI_10_6028_NIST_tn_1297">(vztah vstupů a výsledku)</SourceLink>
        </p>

        <h3 id="slozky-nejistoty">Jednotlivé příspěvky převedeme na stejnou míru</h3>
        <p>
          Základní mírou je <strong>standardní nejistota</strong>, označovaná
          písmenem <InlineMath tex="u" />. Vyjadřuje nejistotu jako směrodatnou
          odchylku, tedy míru rozptýlení hodnot kolem jejich středu.
          U teploty má jednotku °C. Vychází z rozdělení pravděpodobnosti: to popisuje, jakou váhu
          podle měření a dalších podkladů přisuzujeme jednotlivým rozsahům
          hodnot. Větší standardní nejistota znamená širší rozptýlení.
          Samotná chyba měření je rozdíl mezi naměřenou a skutečnou hodnotou.
          Nejistota vyjadřuje naše poznání tohoto výsledku i tehdy, když skutečnou
          chybu neznáme.{" "}
          <SourceLink id="DOI_10_6028_NIST_tn_1297">(standardní nejistota a chyba měření)</SourceLink>
        </p>
        <p>
          Jednu část nejistoty lze vyhodnotit z opakovaných měření stejné,
          stabilní veličiny. Směrodatná odchylka jednotlivých odečtů popíše jejich
          rozptýlení. Je-li výsledkem průměr nezávislých odečtů, příspěvek tohoto
          rozptýlení k nejistotě průměru získáme dělením odmocninou z počtu měření.
          Více nezávislých měření tak zpřesňuje průměr. Tento statistický způsob
          se označuje jako <strong>vyhodnocení typu A</strong>.{" "}
          <SourceLink id="DOI_10_6028_NIST_tn_1297">(typ A, oddíl 3 a vztah A-5)</SourceLink>
        </p>
        <p>
          Další podklady poskytují kalibrační certifikáty, znalost chování
          přístroje nebo ověřené referenční hodnoty. Jejich využití se označuje
          jako <strong>vyhodnocení typu B</strong>. Známe-li pouze dolní a horní
          mez a máme důvod považovat hodnoty uvnitř za stejně pravděpodobné,
          použijeme rovnoměrné rozdělení. Jeho standardní nejistota je polovina
          šířky intervalu dělená odmocninou ze tří. Typ A a typ B tedy rozlišují
          způsob získání nejistoty. Oba poskytují stejný druh údaje, který lze
          zapojit do dalšího výpočtu.{" "}
          <SourceLink id="DOI_10_6028_NIST_tn_1297">(typ B a rovnoměrné rozdělení, oddíl 4)</SourceLink>
        </p>

        <h3>Společné vlivy propojují nejistoty vstupů</h3>
        <p>
          U dvou vstupů potřebujeme zjistit, zda se jejich možné odchylky
          mění společně. Dvě měření například mohou používat stejnou kalibrační
          referenci. Její nejistota pak působí na oba údaje současně.
          Tuto souvislost popisuje <strong>korelace</strong>. Kladná korelace
          znamená převahu odchylek stejným směrem, záporná převahu opačných
          směrů. Koeficient <InlineMath tex="r" /> nabývá hodnot od −1 do +1
          a nemá jednotku. Nulová hodnota znamená nepřítomnost lineární
          souvislosti těchto odchylek.{" "}
          <SourceLink id="DOI_10_59161_JCGM100_2008E">(korelované vstupy, oddíl 5.2)</SourceLink>
        </p>
        <p>
          Pro součet <InlineMath tex="y=a+b" /> se standardní nejistota
          vypočítá takto:
        </p>
        <Equation tex={String.raw`u(y)=\sqrt{u(a)^2+u(b)^2+2r\,u(a)u(b)}`} />
        <p>
          Výrazy <InlineMath tex="u(a)" /> a <InlineMath tex="u(b)" /> označují
          standardní nejistoty vstupů, <InlineMath tex="u(y)" /> nejistotu výsledku.
          Všechny mají stejnou jednotku jako příslušné veličiny.
          Čtverec směrodatné odchylky se nazývá <strong>rozptyl</strong>
          a popisuje průměrnou velikost čtverců odchylek. U součtu veličin
          se sčítají jejich rozptyly a přidává se člen zachycující společný
          pohyb odchylek. Ten může výsledek zvětšit i zmenšit.
          Odmocnina převede výsledek zpět
          z čtverce jednotky na původní jednotku.{" "}
          <SourceLink id="DOI_10_59161_JCGM100_2008E">(zákon přenosu nejistoty)</SourceLink>
        </p>
        <p>
          U nekorelovaných vstupů je <InlineMath tex="r=0" /> a zůstane
          odmocnina ze součtu čtverců obou nejistot. Při kladné korelaci je
          nejistota součtu větší, protože společný vliv posouvá oba příspěvky
          stejným směrem. U rozdílu <InlineMath tex="y=a-b" /> má člen
          s korelací opačné znaménko. Stejný posun obou vstupů se totiž při
          odečtení ruší. Právě způsob výpočtu rozhoduje, jak se společný vliv
          projeví ve výsledku.{" "}
          <SourceLink id="DOI_10_6028_NIST_tn_1297">(příloha A, přenos včetně kovariancí)</SourceLink>
        </p>
        <p>
          Stejná logika platí při průměrování mnoha měření. Nezávislé odchylky
          se mohou částečně vyrovnávat, společný posun celé skupiny zůstává
          i v jejím průměru. Proto sestavujeme <strong>rozpočet nejistoty</strong>:
          přehled jednotlivých příspěvků, jejich velikostí, původu a vzájemných
          vazeb. Ten umožní určit celkovou nejistotu i poznat, které zlepšení
          měření by výsledek nejvíce zpřesnilo.{" "}
          <SourceLink id="DOI_10_6028_NIST_tn_1297">(slučování a vykazování příspěvků)</SourceLink>
        </p>

        <h3>Standardní nejistotu převedeme na interval</h3>
        <p>
          Výsledkem předchozího kroku je jedna směrodatná odchylka.
          Chceme-li vyjádřit širší rozsah hodnot, stanovíme interval pokrytí.
          U přibližně normálního, zvonovitého rozdělení s dobře určenou
          směrodatnou odchylkou připadá přibližně 95 % pravděpodobnosti
          do intervalu vzdáleného od středu nejvýše o 1,96 standardní nejistoty.
          Polovina šířky takového intervalu se nazývá <strong>rozšířená
          nejistota</strong>.{" "}
          <SourceLink id="DOI_10_6028_NIST_tn_1297">(standardní a rozšířená nejistota, oddíly 5–7)</SourceLink>
        </p>
        <Equation tex={String.raw`U=k\,u(y),\qquad y\pm U`} />
        <p>
          Symbol <InlineMath tex="U" /> označuje rozšířenou nejistotu
          ve stejné jednotce jako výsledek. Bezrozměrný <InlineMath tex="k" />{" "}
          je koeficient rozšíření, v právě popsaném případě přibližně 1,96.
          Zápis <InlineMath tex={String.raw`y\pm U`} /> vymezuje dolní mez{" "}
          <InlineMath tex="y-U" /> a horní mez <InlineMath tex="y+U" />.
          Spolu s intervalem uvádíme jeho pokrytí a použitý model rozdělení.
          Čtenář pak ví, jak široký rozsah hodnot s výsledkem spojujeme.{" "}
          <SourceLink id="DOI_10_6028_NIST_tn_1297">(význam koeficientu a zápisu výsledku)</SourceLink>
        </p>

        <h3 id="soubor-realizaci">Složitější výpočty lze opakovat s různými vstupy</h3>
        <p>
          U jiných výpočtů než prostého součtu záleží také na citlivosti
          výsledku vůči každému vstupu. Pokud malá změna vstupu způsobí
          dvojnásobnou změnu výstupu, násobí se dvěma i jeho příspěvek
          ke standardní nejistotě. Tento násobek popisuje místní sklon vztahu:
          jak rychle se výsledek mění při malé změně daného vstupu,
          zatímco ostatní vstupy zůstávají stejné. Tento postup je vhodný, když místní přiblížení dobře
          vystihuje vztah v celém podstatném rozsahu nejistých vstupů.{" "}
          <SourceLink id="DOI_10_6028_NIST_tn_1297">(citlivostní koeficienty, příloha A)</SourceLink>
        </p>
        <p>
          Jinou cestou je <strong>metoda Monte Carlo</strong>. Každému vstupu
          přiřadíme rozdělení odpovídající dostupným informacím. Potom z těchto
          rozdělení opakovaně vybíráme možné vstupy a pokaždé provedeme celý
          původní výpočet. Společné vlivy vybíráme společně, aby se zachovaly
          vztahy mezi vstupy. Tak vznikne soubor možných výsledků,
          označovaný také jako <strong>soubor realizací</strong>.{" "}
          <SourceLink id="DOI_10_59161_JCGM101_2008">(postup Monte Carlo)</SourceLink>
        </p>
        <p>
          Směrodatná odchylka těchto výsledků odhaduje standardní nejistotu.
          Od každé realizace odečteme průměr celého souboru a rozdíly
          umocníme na druhou. Součet vydělíme počtem realizací zmenšeným o jednu
          a odmocníme.
          Každá realizace představuje možný výsledek téhož měření či analýzy.
          Jejich rozptýlení proto používáme přímo jako nejistotu výsledku.
          Počet realizací určuje, jak přesně jsme toto rozptýlení výpočtem
          vystihli.{" "}
          <SourceLink id="DOI_10_59161_JCGM101_2008">(souhrn simulovaných výsledků a stabilita výpočtu)</SourceLink>
        </p>
        <p>
          Z realizací lze získat interval i bez předpokladu zvonovitého tvaru.
          Výsledky seřadíme podle velikosti a určíme meze, pod nimiž leží
          přibližně 2,5 % a 97,5 % rozdělení. Mezi nimi zůstává středních 95 %.
          Takový interval může být vůči střední hodnotě nesouměrný.
          Podobu výsledku tím zachováme i u vztahů, kde se vstupní nejistota
          výrazně proměňuje při průchodu výpočtem.{" "}
          <SourceLink id="DOI_10_59161_JCGM101_2008">(intervaly pokrytí z realizací)</SourceLink>
        </p>

        <h3 id="klimaticke-zaznamy">V klimatologii nejistota prochází celým zpracováním</h3>
        <p>
          Teplotní soubor HadCRUT5 spojuje údaje o teplotě vzduchu nad pevninou
          a vody u hladiny oceánu. Jeho 200 realizací zachycuje různé přípustné
          opravy měření a odhady teplotních map. Varianta označená jako
          <em> analysis</em> zahrnuje v realizacích také nejistotu jednotlivých
          měření, omezeného počtu pozorování i doplnění map v místech
          s nedostatkem údajů.
          Každou realizaci lze převést na oblastní průměr nebo časovou změnu
          a teprve potom z jejich rozptýlení určit nejistotu výsledku.
          HadCRUT5 zveřejňuje měsíční pole v buňkách 5° zeměpisné šířky
          a 5° délky od ledna 1850. Použitá verze 5.2.0.0 obsahuje úplné
          roční průměry za období 1850–2025.{" "}
          <SourceLink id="DATA_HadCRUT_5_2_0_0_Annual_Ensemble">(rozsah veřejných dat)</SourceLink>{" "}
          <SourceLink id="DOI_10_1029_2019jd032361">(Morice a kol. 2021, klimatologické použití)</SourceLink>
        </p>
        <p>
          V oblastech, které nepokrývá ani tato rekonstrukce, přidávají autoři
          samostatný příspěvek nejistoty. Určují jej pomocí úplnějšího
          teplotního pole z reanalýzy ERA5, která spojuje pozorování
          s fyzikálním modelem. Porovnávají průměr celého pole s průměrem
          po vynechání stejných oblastí, jaké chybějí v HadCRUT5.
          Rozdíly při různých teplotních průbězích vyčíslují, jak se chybějící
          část světa může projevit v globálním průměru.{" "}
          <SourceLink id="WEB_HadCRUT5_Supporting_Information">(odhad nejistoty pokrytí, oddíly S3 a S4)</SourceLink>{" "}
          Význam výsledného ukazatele vysvětluje pozorování{" "}
          <Link href="/pozorovani/gmst/#nejistota">globální teploty u povrchu</Link>.
        </p>
        <p>
          Podobný rozbor potřebují i jiné veličiny. U HadISDH autoři oddělují
          nejistoty měření a zpracování od nejistoty omezeného zastoupení
          prostoru a času. Které z těchto složek se vztahují k přízemním
          a družicovým údajům, rozebírá pozorování
          <Link href="/pozorovani/narust-vlhkosti/#nejistota"> vlhkosti atmosféry</Link>.{" "}
          <SourceLink id="DOI_10_5194_cp_10_1983_2014">(Willettová a kol. 2014, oddíly 4 a 6)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/uncertainty/workflow.svg" width={760} height={1100}
            alt="Postup vyhodnocení nejistoty od definice výsledku přes vstupní nejistoty a jejich vazby k přenosu výpočtem a intervalu výsledku." />
          <figcaption>
            Šipky spojují čtyři kroky od vymezení veličiny k nejistotě výsledku.
            Nejistota prochází stejným výpočtem jako hodnota veličiny.
            Společné vlivy se zachovávají
            ve vztazích mezi vstupy. Vlastní schéma podle{" "}
            <SourceLink id="DOI_10_59161_JCGM100_2008E">GUM</SourceLink>{" "}
            a <SourceLink id="DOI_10_59161_JCGM101_2008">jeho doplňku o Monte Carlo</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Dnešní společný způsob vyjadřování nejistoty vychází z mezinárodního
          doporučení z roku 1980. Příručka GUM vyšla v roce 1993 a sjednotila
          použití standardních nejistot i jejich slučování. Zde odkazujeme
          na vydání z roku 2008 s drobnými opravami.{" "}
          <SourceLink id="DOI_10_59161_JCGM100_2008E">(vydání příručky)</SourceLink>{" "} Samostatný doplněk
          z roku 2008 rozpracoval přenos celých rozdělení metodou Monte Carlo.
          Obě cesty umožňují předávat nejistotu mezi navazujícími měřeními
          a výpočty v jednotném významu.{" "}
          <SourceLink id="DOI_10_6028_NIST_tn_1297">(původ společného postupu)</SourceLink>{" "}
          <SourceLink id="DOI_10_59161_JCGM101_2008">(rozšíření o simulace)</SourceLink>
        </p>

        <h2>Spolehlivost odhadu a jeho ověření</h2>
        <p>
          Výsledek závisí na tom, zda model zahrnul podstatné vlivy,
          správně popsal jejich velikost a zachoval jejich vzájemné vazby.
          Další kontrolu poskytuje porovnání různých zpracování.
          Morice a kol. zjistili velmi dobrou shodu globálního vývoje HadCRUT5
          s dalšími teplotními soubory. Regionální rozdíly byly větší tam,
          kde je méně pozorování a více záleží na způsobu rekonstrukce.{" "}
          <SourceLink id="DOI_10_1029_2019jd032361">(porovnání analýz, oddíl 4.3)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Co kontrolujeme u rozpočtu nejistoty</summary>
          <p>
            Opakovaná měření zachytí jen vlivy, které se při opakování
            skutečně mění. Stálý posun společné reference proto vyhodnocujeme
            zvlášť. Také typ A a typ B označují způsob vyhodnocení, nikoli
            automaticky náhodnou a soustavnou chybu. Při slučování hlídáme,
            aby stejný příspěvek nebyl zahrnut dvakrát.{" "}
            <SourceLink id="DOI_10_6028_NIST_tn_1297">(původ a rozlišení příspěvků)</SourceLink>
          </p>
          <p>
            Jednoduchý přenos pomocí místních sklonů ověřujeme u silně
            zakřivených vztahů porovnáním s Monte Carlo. Doplněk GUM popisuje
            kontrolu shody mezí obou intervalů v předem zvolené numerické
            toleranci. Oba výpočty přitom používají stejný model a stejné
            vstupní informace. Jejich shoda ověřuje výpočet, úplnost modelu
            vyžaduje také poznatky z měření.{" "}
            <SourceLink id="DOI_10_59161_JCGM101_2008">(ověření, oddíl 8)</SourceLink>
          </p>
          <p>
            Koeficient 1,96 předpokládá přibližně normální rozdělení
            a dostatečně dobře určenou standardní nejistotu. Při malém počtu
            opakovaných měření může být pro stejné pokrytí potřeba širší
            interval. Pro nesouměrné rozdělení používáme odpovídající meze
            rozdělení. Zveřejněné minimum a maximum několika realizací
            samo o sobě neurčuje 95% interval.{" "}
            <SourceLink id="DOI_10_6028_NIST_tn_1297">(koeficienty rozšíření)</SourceLink>{" "}
            <SourceLink id="DOI_10_59161_JCGM101_2008">(intervaly z rozdělení)</SourceLink>
          </p>
          <p>
            Teplotní soubory HadCRUT5, GISTEMP, Berkeley Earth a NOAAGlobalTemp vznikají
            odlišnými postupy, sdílejí však část staničních a oceánských
            pozorování. Jejich porovnání prověřuje citlivost na volbu dat
            a zpracování, není čtyřmi úplně nezávislými měřeními.
            ERA5 navíc v HadCRUT5 slouží už k odhadu nejistoty pokrytí.
            Při porovnání s ERA5 je proto potřeba tuto vazbu zohlednit.{" "}
            <SourceLink id="DOI_10_1029_2019jd032361">(původ dat, odhad pokrytí a porovnání)</SourceLink>
          </p>
          <p>
            Změny počasí mezi dny nebo roky mají vlastní fyzikální původ.
            Nejistotu stanovení určitého ročního průměru oddělujeme od kolísání
            těchto průměrů mezi roky. Statistické posouzení trendu z časového
            kolísání vysvětluje metoda{" "}
            <Link href="/metody/analyza-casovych-zmen-a-extremu">analýza časových změn a extrémů</Link>.
            Zde počítáme nejistotu odvozeného teplotního údaje podle modelu
            pozorovacích nejistot HadCRUT5.{" "}
            <SourceLink id="DOI_10_1029_2019jd032361">(rozsah nejistoty HadCRUT5)</SourceLink>
          </p>
        </details>

        <h2>Příklad na globální teplotě roku 2024</h2>
        <p>
          Použijeme veřejné roční soubory HadCRUT.5.2.0.0 ve variantě
          <em> analysis</em>, stažené 30. října 2026. Vybereme všech 200
          realizací globální teplotní anomálie pro rok 2024 a připojenou
          nejistotu pokrytí. Anomálie zde znamená rozdíl vůči průměru let
          1961–1990. Výpočet začíná u již zpracovaných globálních hodnot.
          Předchozí spojování měření a tvorbu realizací dokládá původní práce.{" "}
          <SourceLink id="DATA_HadCRUT_5_2_0_0_Annual_Ensemble">(přesná verze veřejných dat)</SourceLink>{" "}
          <SourceLink id="DOI_10_1029_2019jd032361">(vznik vstupů)</SourceLink>
        </p>
        <p>
          Průměr 200 realizací je <strong>1,187449 °C</strong>.
          Jejich směrodatná odchylka vychází přibližně
          <strong> 0,021262 °C</strong>. Vypočetli jsme ji ze součtu čtverců
          odchylek od průměru, vyděleného číslem 199 a odmocněného.
          Tato hodnota zachycuje nejistoty obsažené v realizacích.
          Samostatný příspěvek pokrytí ve zdrojovém souboru je přibližně
          <strong> 0,003618 °C</strong>.{" "}
          <SourceLink id="WEB_HadCRUT5_Supporting_Information">(souhrn realizací, vztahy 23 a 24)</SourceLink>
        </p>
        <p>
          Metodika HadCRUT5 kombinuje tyto dva příspěvky jako nekorelované.
          Jejich čtverce proto sečteme a výsledek odmocníme.
          Označíme-li celkovou standardní nejistotu <InlineMath tex="u" />,
          dostaneme:{" "}
          <SourceLink id="WEB_HadCRUT5_Supporting_Information">(vztah 28)</SourceLink>
        </p>
        <Equation tex={[
          String.raw`u=\sqrt{0{,}021262^2+0{,}003618^2}\,{}^\circ\mathrm{C}`,
          String.raw`\approx 0{,}021568\,{}^\circ\mathrm{C}`,
        ]} />
        <p>
          Po vynásobení koeficientem 1,96 získáme rozšířenou nejistotu
          přibližně <strong>0,042273 °C</strong>. Výsledek tedy můžeme
          za uvedeného normálního přiblížení zapsat jako
          <strong> 1,187 ± 0,042 °C</strong> s přibližným 95% pokrytím.
          Před zaokrouhlením sahá interval od 1,145176 do 1,229722 °C.
          Vždy jde o globální anomálii roku 2024 vůči letům 1961–1990.
        </p>
        <figure className="article-figure">
          <Image src="/media/uncertainty/hadcrut2024.svg" width={800} height={1050}
            alt="Rozdělení 200 realizací globální teplotní anomálie roku 2024 a porovnání standardní nejistoty realizací, pokrytí a jejich kombinace." />
          <figcaption>
            Nahoře sloupce počítají realizace v jednotlivých teplotních
            intervalech, svislá čára označuje jejich průměr. Všechny realizace
            popisují tentýž rok. Dole jsou délky úseček úměrné standardním
            nejistotám v °C. Kombinovaná hodnota vzniká součtem čtverců
            příspěvků a odmocněním. Vlastní výpočet z{" "}
            <SourceLink id="DATA_HadCRUT_5_2_0_0_Annual_Ensemble">HadCRUT.5.2.0.0</SourceLink>,
            © British Crown Copyright, Met Office 2026, Open Government Licence v3.0.
          </figcaption>
        </figure>
        <p>
          Pro kontrolu použijeme také veřejný soubor hotových složek nejistoty
          a soubor výsledných intervalů. Náš průměr, obě dílčí nejistoty,
          jejich kombinace i meze intervalu se se zveřejněnými čísly shodují
          s rozdílem menším než 0,0000001 °C. Tento velmi malý rozdíl odpovídá
          zaokrouhlení desetinných hodnot v souborech. Ověřuje zopakování
          výpočtu, fyzikální podklady odhadu zůstávají převzaté z HadCRUT5.{" "}
          <SourceLink id="DATA_HadCRUT_5_2_0_0_Annual_Ensemble">(realizace, složky a souhrnný výsledek)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Data, skript a kontrola společných vlivů</summary>
          <p>
            Ke stažení jsou nezměněné původní soubory{" "}
            <a href="/data/methods/uncertainty/ensemble-original.csv">ročních realizací</a>,{" "}
            <a href="/data/methods/uncertainty/component-original.csv">složek nejistoty</a>{" "}
            a <a href="/data/methods/uncertainty/summary-original.csv">souhrnných intervalů</a>.
            Výběr 200 realizací pro roky 2023 a 2024 je navíc uložen v{" "}
            <a href="/data/methods/uncertainty/realizations.csv">přehledné tabulce</a>.
          </p>
          <p>
            <a href="/data/methods/uncertainty/reproduce.py">Skript pro Python</a>{" "}
            znovu ověří původní soubory, vybere rok 2024, vypočte průměr,
            směrodatnou odchylku a celý interval. Používá všech 200 realizací,
            dělitel 199, nulovou korelaci mezi dvěma výslednými složkami
            a koeficient rozšíření 1,96. Porovnání před zaokrouhlením obsahuje{" "}
            <a href="/data/methods/uncertainty/results.json">soubor výsledků</a>.
          </p>
          <p>
            Stejná data umožňují ověřit vliv korelace na rozdíl dvou let.
            Zde sledujeme pouze složku popsanou realizacemi. Pro každou
            realizaci odečteme hodnotu roku 2023 od hodnoty roku 2024.
            Směrodatná odchylka 200 takto získaných rozdílů je přibližně
            0,02093 °C. Při chybném předpokladu nezávislosti obou let by vyšla
            0,02875 °C. Korelace odchylek je přibližně 0,4723.
            Dosazení této korelace do vztahu pro rozdíl poskytne stejný výsledek
            jako přímé odečítání uvnitř realizací. Úplný interval meziroční
            změny by vyžadoval také přenos samostatného příspěvku pokrytí.
          </p>
          <p>
            Původní adresy, verzi, datum stažení a kontrolní otisky zaznamenává{" "}
            <a href="/data/methods/uncertainty/provenance.json">původ dat</a>.
            <a href="/data/methods/uncertainty/README.txt"> Návod k opakování</a>{" "}
            obsahuje popis sloupců, licenci a přesný rozsah obou výpočtů.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Nejistotu výsledku získáváme z nejistot jeho vstupů a ze vztahu,
            který je spojuje. Společné vlivy se při sčítání a odečítání
            projevují různě. Výpočet podle vzorce i soubor přípustných realizací
            proto musí zachovat jejich vazby. Výsledná standardní nejistota
            nebo interval pak vyjadřují rozptýlení hodnot, které připouštějí podklady pro danou veličinu.
          </p>
          <p>
            Metoda umožňuje vyčíslovat nejistotu teplot, koncentrací, srážek
            i dalších měřených veličin a přenášet ji do průměrů, rozdílů,
            trendů nebo rekonstrukcí. V klimatologickém provedení HadCRUT5
            se používá pro měsíční teplotní pole na síti 5° × 5°
            a pro regionální i globální průměry. Použitá verze poskytuje
            úplné roční hodnoty za období 1850–2025. Soubor 200 realizací spolu
            s nejistotou pokrytí umožňuje určit standardní nejistotu
            a přibližné 95% intervaly.{" "}
            <SourceLink id="DOI_10_1029_2019jd032361">(veličiny a rozsah HadCRUT5)</SourceLink>{" "}
            <SourceLink id="DATA_HadCRUT_5_2_0_0_Annual_Ensemble">(veřejné provedení)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
