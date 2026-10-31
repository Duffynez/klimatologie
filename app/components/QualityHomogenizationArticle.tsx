import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function QualityHomogenizationArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak získáme srovnatelný klimatický záznam</h2>
        <p className="article-prose__intro">
          Kontrola kvality prověřuje naměřené údaje a označuje hodnoty podezřelé
          z chyby. Homogenizace hledá a upravuje dlouhodobé posuny vzniklé změnou
          přístroje, stanoviště nebo způsobu pozorování. Společně připravují záznam,
          ve kterém lze porovnávat počasí a klima v různých obdobích. Postup si
          vysvětlíme na měsíčních průměrech teploty vzduchu z meteorologických stanic.{" "}
          <SourceLink id="DOI_10_1175_jcli_d_18_0094_1">(Menne a kol. 2018)</SourceLink>
        </p>

        <h3>Co se může změnit společně s teplotou</h3>
        <p>
          Teploměr měří vzduch v místě svého umístění. Přesunutím na jiné místo
          se mohou změnit jeho okolní podmínky, například zastínění nebo blízkost
          zpevněných ploch. Jiný kryt zase může změnit, jak dobře je čidlo chráněné
          před slunečním zářením. Taková změna může posunout zaznamenávané teploty
          i tehdy, když se počasí v oblasti vyvíjí dál stejně. V dlouhém záznamu se
          pak spojují úseky pořízené za odlišných podmínek.{" "}
          <SourceLink id="DOI_10_1175_2008jcli2263_1">(Menne a Williams 2009, původ nehomogenit)</SourceLink>
        </p>
        <p>
          K rozpoznání místního posunu využíváme stanice se společným průběhem
          počasí. Teplý nebo chladný měsíc se zpravidla projeví na více místech
          oblasti. Když se dlouhodobě změní jen vztah jedné stanice k ostatním,
          vzniká podklad pro hledání změny právě v jejím záznamu.
          <strong> Relativní homogenizace</strong> je název pro takové posuzování
          stanice vůči dalším měřením. Jejím předpokladem je dostatečně podobné
          klimatické kolísání porovnávaných míst.{" "}
          <SourceLink id="DOI_10_1175_2008jcli2263_1">(princip porovnávání stanic)</SourceLink>
        </p>

        <h3>Nejprve potřebujeme vědět, co údaje představují</h3>
        <p>
          Vstupem do vysvětlovaného postupu jsou měsíční průměry teploty,
          identifikátory stanic a údaje o jejich poloze. U každé hodnoty musí být
          dohledatelný měsíc, jednotka a původ. Připojuje se historie stanice,
          tedy záznamy o přesunech, výměnách přístrojů nebo změnách odečítání.
          Tyto doprovodné informace se nazývají <strong>metadata</strong>.
          Pomáhají spojit změnu v číslech se změnou měření.{" "}
          <SourceLink id="WEB_NOAA_GHCNMv4_ATBD_2018">(NOAA, vstupy a historie stanic)</SourceLink>
        </p>
        <p>
          Konkrétním příkladem takového vstupu je GHCN-M, celosvětový archiv
          historických měsíčních klimatologických údajů spravovaný americkou
          Národní správou pro oceán a atmosféru (NOAA).
          Jeho teplotní verze 4 spojuje staniční záznamy z různých zdrojů a podle
          dostupnosti počítá měsíční průměry také z denních údajů. Obsahuje měření
          z pevniny, jejichž délka i úplnost se mezi stanicemi liší. V tomto kroku
          tedy už pracujeme se sestavenými měsíčními hodnotami. Vznik samotného
          teplotního měření vysvětluje článek o{" "}
          <Link href="/metody/odporova-termometrie-a-termistory">odporové termometrii</Link>.{" "}
          <SourceLink id="DOI_10_1175_jcli_d_18_0094_1">(vznik GHCN-M v4)</SourceLink>
        </p>

        <h3 id="kontrola-udaju">Kontrola jednotlivých údajů</h3>
        <p>
          Kontrola začíná vlastnostmi, které lze posoudit v samotném souboru.
          Hledá nesprávně zopakované záznamy, dlouhé úseky se stále stejným číslem
          nebo hodnoty mimo fyzikálně a klimatologicky přijatelné meze.
          Srovnání s obvyklými teplotami konkrétního kalendářního měsíce pak ukáže
          údaje, které se výrazně vymykají dosavadnímu průběhu. Každá kontrola
          se tak ptá na určitý druh možné chyby.{" "}
          <SourceLink id="DOI_10_1175_jcli_d_18_0094_1">(kontroly GHCN-M, tabulka 1)</SourceLink>
        </p>
        <p>
          Další oporu poskytuje okolí. U neobvykle teplého měsíce se porovnává,
          zda nezvykle vysoké teploty hlásily také blízké stanice. Porovnávají se
          odchylky od běžných podmínek daného místa, protože horská stanice
          a nížinná stanice mají různou obvyklou teplotu. Společný výkyv může
          odpovídat skutečné povětrnostní události, osamocený údaj vyžaduje
          podrobnější prověření.{" "}
          <SourceLink id="WEB_NOAA_GHCNMv4_ATBD_2018">(prostorové kontroly)</SourceLink>
        </p>
        <p>
          Výstupem kontroly je údaj doplněný <strong>příznakem kvality</strong>,
          značkou popisující výsledek příslušného testu. V GHCN-M zůstává
          označená hodnota v nehomogenizované verzi dostupná. Pro následnou
          homogenizovanou verzi se hodnoty, které kontrolou neprošly, vyřadí.
          Uživatel tak může sledovat, které číslo bylo vyloučeno a z jakého důvodu.{" "}
          <SourceLink id="WEB_NOAA_GHCNMv4_Format">(formát a příznaky NOAA)</SourceLink>
        </p>

        <figure className="article-figure">
          <Image src="/media/homogenization/workflow.svg" width={760} height={1210}
            alt="Schéma navazující kontroly údajů, porovnání dvojic stanic, určení místních posunů a vytvoření homogenizované verze." />
          <figcaption>
            Kontrola kvality vybírá použitelné jednotlivé údaje. Homogenizace pak
            z porovnání stanic určuje úpravy celých úseků. Šipky ukazují postup
            zpracování, původní archiv se uchovává vedle výsledku.
            Vlastní schéma podle{" "}
            <SourceLink id="WEB_NOAA_GHCNMv4_ATBD_2018">metodiky NOAA</SourceLink>.
          </figcaption>
        </figure>

        <h3 id="porovnani-stanic">Proč odečítáme průběhy dvou stanic</h3>
        <p>
          I jednotlivě věrohodné teploty mohou tvořit záznam s místním posunem.
          Proto po kontrole údajů přichází porovnávání delších úseků. Pro každou
          stanici se vyberou další stanice, jejichž měsíční výkyvy se jí podobají
          a které mají měření ve společných obdobích. Podobnost se vyjadřuje
          korelací, tedy mírou toho, jak souběžně hodnoty kolísají.
          V párovém postupu NOAA má tato podobnost větší význam než samotná
          vzdálenost.{" "}
          <SourceLink id="DOI_10_1175_2008jcli2263_1">(výběr sousedních záznamů)</SourceLink>{" "}
          <SourceLink id="WEB_NOAA_GHCNMv4_ATBD_2018">(prostorový dosah porovnání)</SourceLink>
        </p>
        <p>
          Aby porovnání neovládalo pravidelné střídání zimy a léta, teploty
          vyjádříme jako odchylky od dlouhodobého průměru příslušného kalendářního
          měsíce. Leden porovnáváme s obvyklým lednem, červenec s obvyklým
          červencem. Tak získáme průběh, který zachycuje nezvykle teplé a chladné
          měsíce vůči podmínkám dané stanice.{" "}
          <SourceLink id="DOI_10_1175_2008jcli2263_1">(měsíční odchylky v párové analýze)</SourceLink>
        </p>
        <p>
          Potom pro každou dvojici a každý společný měsíc odečteme odchylku
          sousední stanice od odchylky posuzované stanice. Pokud obě místa
          prodělala podobný teplý nebo chladný měsíc, jejich společná část
          se odečtením oslabí. Zřetelnější zůstane to, čím se obě místa liší.{" "}
          <SourceLink id="DOI_10_1175_2008jcli2263_1">(význam párového rozdílu)</SourceLink>
        </p>
        <Equation tex={String.raw`D_{ij}(t)=a_i(t)-a_j(t)`} />
        <p>
          Značka <InlineMath tex={String.raw`t`} /> označuje měsíc,
          <InlineMath tex={String.raw`i`} /> posuzovanou stanici a{" "}
          <InlineMath tex={String.raw`j`} /> jejího souseda. Hodnoty{" "}
          <InlineMath tex={String.raw`a_i`} /> a <InlineMath tex={String.raw`a_j`} /> jsou
          jejich teplotní odchylky, <InlineMath tex={String.raw`D_{ij}`} /> je
          vypočtený rozdíl. Všechny tři veličiny zde vyjadřujeme ve °C.
          Sledujeme, zda tento rozdíl v čase mění svou obvyklou úroveň.{" "}
          <SourceLink id="DOI_10_1175_2008jcli2263_1">(párové rozdíly)</SourceLink>
        </p>

        <h3>Jak se najde období a stanice se změnou</h3>
        <p>
          V průběhu rozdílů se hledá okamžik, před kterým a po kterém hodnoty
          kolísají kolem odlišných průměrů. Takové rozhraní nazýváme
          <strong> zlomem</strong>. Statistický test porovnává velikost rozdílu
          obou průměrů s běžnou velikostí kolísání uvnitř obou úseků a bere v úvahu jejich délku.
          Silný, dlouho přetrvávající posun se tak odlišuje od krátkého výkyvu.
          Po nalezení zlomu se stejným způsobem prozkoumají vzniklé části
          záznamu a znovu se posoudí, která rozhraní mají oporu v datech.{" "}
          <SourceLink id="DOI_10_1175_2008jcli2263_1">(hledání více zlomů)</SourceLink>
        </p>
        <p>
          Postup dále rozlišuje náhlý skok a pozvolný vývoj. Pro tutéž část
          průběhu porovná několik matematických popisů: stálou úroveň, postupné
          stoupání nebo klesání a změnu úrovně spojenou s takovým vývojem.
          Při výběru poměřuje shodu s daty s množstvím čísel, která musí
          z průběhu odhadnout, například úrovní teploty a rychlostí její změny.
          Složitější popis se tak použije tehdy, když přinese dostatečné zlepšení.
          Tím se určí, zda je vhodné daný úsek opravovat jako skok.{" "}
          <SourceLink id="DOI_10_1175_2008jcli2263_1">(rozlišení skoku a trendu)</SourceLink>
        </p>
        <p>
          Samotný rozdíl dvou stanic ukazuje změnu jejich vztahu. K určení,
          které stanici změna náleží, se spojí výsledky mnoha dvojic.
          Hledá se stanice společná více porovnáním se zlomem ve stejném období.
          Současně se využívají porovnání jejích sousedů mezi sebou. Historie
          stanice může nalezený termín podpořit záznamem o změně měření.
          Výsledkem je určení stanice a období posunu, ze kterého vychází
          odhad potřebné úpravy.{" "}
          <SourceLink id="DOI_10_1175_2008jcli2263_1">(přiřazení zlomů stanicím)</SourceLink>
        </p>

        <h3>Jak se určí a použije úprava</h3>
        <p>
          Velikost posunu se odhaduje z porovnání s těmi sousedy, u kterých
          ve stejném období nebyl nalezen vlastní zlom. U jednoduchého skoku mezi dvěma stálými úrovněmi vezmeme průběh
          párových rozdílů a spočítáme jeho průměr před zlomem i po něm.
          Od průměru po zlomu odečteme průměr před zlomem. Výsledek udává,
          o kolik a kterým směrem se vztah stanic změnil. Když průběh obsahuje
          i pozvolný vývoj, použije se popis, který jej odděluje od skoku.{" "}
          <SourceLink id="DOI_10_1175_2008jcli2263_1">(odhad velikosti posunu)</SourceLink>
        </p>
        <p>
          Z více sousedů tak vznikne více odhadů téže úpravy. Původní párový
          algoritmus z nich použije medián: odhady se seřadí podle velikosti
          a zvolí se jejich prostřední hodnota. Při sudém počtu se vezme průměr
          dvou prostředních hodnot.{" "}
          <SourceLink id="DOI_10_1175_2008jcli2263_1">(spojení párových odhadů)</SourceLink>
        </p>
        <p>
          Úseky záznamu se potom převádějí
          na podmínky nejnovějšího úseku. U starších hodnot se sčítají příslušné
          úpravy ze všech pozdějších zlomů, které je oddělují od současných
          podmínek měření.{" "}
          <SourceLink id="DOI_10_1175_2008jcli2263_1">(výpočet úprav, oddíl 3f)</SourceLink>{" "}
          <SourceLink id="DOI_10_1175_jcli_d_18_0094_1">(návaznost na nejnovější podmínky)</SourceLink>
        </p>
        <Equation tex={String.raw`T_{\mathrm{h}}(t)=T_{\mathrm{u}}(t)+c(t)`} />
        <p>
          <InlineMath tex={String.raw`T_{\mathrm{u}}(t)`} /> je měsíční teplota
          před homogenizací, <InlineMath tex={String.raw`c(t)`} /> souhrnná úprava
          pro příslušný měsíc a <InlineMath tex={String.raw`T_{\mathrm{h}}(t)`} />
          {" "}výsledná homogenizovaná teplota. Všechny hodnoty jsou ve °C.
          Kladná úprava teplotu zvýší, záporná ji sníží. V popsaném provedení
          GHCN-M v4 se stejná úprava vztahuje na všechny kalendářní měsíce
          uvnitř příslušného úseku. Zachová se tak kolísání jednotlivých měsíců,
          zatímco se změní úroveň celého úseku.{" "}
          <SourceLink id="WEB_NOAA_GHCNMv4_ATBD_2018">(použití úprav v GHCN-M v4)</SourceLink>
        </p>

        <h3>Co získáme pro klimatologii</h3>
        <p>
          Výsledkem jsou srovnatelnější staniční záznamy a informace o jejich
          zpracování. GHCN-M zveřejňuje vedle sebe verzi QCU, která prošla
          kontrolou kvality a zachovává teploty před homogenizačními úpravami
          tohoto archivu, a verzi QCF s provedenými úpravami. To umožňuje
          zkoumat jejich účinek na konkrétní stanici i na souhrn stanic.{" "}
          <SourceLink id="WEB_NOAA_GHCNMv4_Format">(význam verzí QCU a QCF)</SourceLink>
        </p>
        <p>
          Z takto zpracovaných teplot lze počítat dlouhodobé změny a regionální
          nebo globální průměry. Údaje GHCN-M tvoří pozemní podklad některých
          globálních teplotních souborů. Navazující výběr oblastí a jejich
          plošné vážení vysvětluje pozorování{" "}
          <Link href="/pozorovani/gmst/#plosne-vazeni">globální povrchové teploty</Link>.
          Homogenizace zde řeší srovnatelnost měření v čase, na kterou další
          výpočty navazují.{" "}
          <SourceLink id="DOI_10_1175_jcli_d_18_0094_1">(klimatologické použití)</SourceLink>
        </p>

        <h3 id="denni-a-hodinova-data">Další provedení a vývoj postupu</h3>
        <p>
          Kontrola kvality pracuje také s kratšími časovými kroky. HadISD
          prověřuje meteorologická hlášení uspořádaná do hodinového záznamu,
          zejména teplotu, tlak a údaje o vlhkosti vzduchu.
          GHCN-Daily kontroluje denní údaje,
          například teplotní minima a maxima, srážky nebo sníh. Denní kontrola
          tohoto archivu sama o sobě neprovádí plošnou homogenizaci všech
          záznamů. Časové kroky 1 hodina, 1 den a 1 měsíc proto označují odlišná
          provedení zpracování s různými cíli.{" "}
          <SourceLink id="DOI_10_5194_cp_8_1649_2012">(hodinový HadISD)</SourceLink>{" "}
          <SourceLink id="DOI_10_1175_jtech_d_11_00103_1">(denní GHCN-Daily)</SourceLink>
        </p>
        <p>
          Kontrolované hodinové údaje HadISD tvoří základ souboru HadISDH.
          Ten převádí teplotu a vlhkostní údaje na měsíční hodnoty a hledá
          místní zlomy párovým porovnáváním stanic. Návaznost jednotlivých
          kroků ukazuje pozorování <Link href="/pozorovani/narust-vlhkosti/#kontrola-dat">vlhkosti atmosféry</Link>.{" "}
          <SourceLink id="DOI_10_5194_cp_10_1983_2014">(Willettová a kol. 2014, oddíly 2 a 3)</SourceLink>
        </p>
        <p>
          Denní měření se dále používají ke sledování
          <Link href="/pozorovani/vlny-veder/#mereni-teploty"> vln veder</Link> a
          <Link href="/pozorovani/srazky-a-privalove-srazky/#kontrola-dat"> srážkových extrémů</Link>.
          U těchto pozorování vysvětlujeme, které kontroly proběhly před
          výpočtem ukazatele a jak navazující soubory zacházejí se změnami
          měřicích podmínek.{" "}
          <SourceLink id="DOI_10_1175_jtech_d_11_00103_1">(Menne a kol. 2012, denní archiv)</SourceLink>
        </p>
        <p>
          Stejnou otázku srovnatelnosti řeší i výšková měření atmosféry.
          Postupy RAOBCORE a RICH hledají změny radiosondových teplot pomocí
          porovnání s meteorologickými analýzami a okolními sondážemi.
          Konkrétní zpracování a navazující záznamy popisuje pozorování
          <Link href="/pozorovani/stratosfericke-ochlazovani/#homogenizace"> teploty stratosféry</Link>.{" "}
          <SourceLink id="DOI_10_1175_jcli_d_11_00668_1">(Haimberger a kol. 2012)</SourceLink>
        </p>
        <p>
          U srážek se při homogenizaci často porovnávají poměry úhrnů namísto
          rozdílů teplot. Oprava potom může mít podobu násobícího koeficientu,
          který vyjadřuje relativní změnu zachyceného množství vody.
          Pro teplotu a srážky proto existují odlišné varianty postupů.
          U denních údajů je navíc potřeba zachovat podobu rozdělení hodnot,
          včetně četnosti silných srážek nebo velmi horkých dnů.{" "}
          <SourceLink id="DOI_10_5194_cp_8_89_2012">(teplotní a srážkové postupy)</SourceLink>{" "}
          <SourceLink id="DOI_10_5194_cp_8_1649_2012">(zachování extrémů při kontrole)</SourceLink>
        </p>
        <p>
          Párové porovnávání rozvinuli Menne a Williams v roce 2009 do
          automatického postupu, který hledá zlomy a přiřazuje je jednotlivým
          stanicím. V roce 2012 přinesl projekt HOME společné porovnání
          různých homogenizačních metod. Verze GHCN-M v4 popsaná v roce 2018
          pak spojila rozsáhlejší staniční archiv s odhady nejistoty jednotlivých
          záznamů a celkového výsledku.{" "}
          <SourceLink id="DOI_10_1175_2008jcli2263_1">(původní párový algoritmus)</SourceLink>{" "}
          <SourceLink id="DOI_10_5194_cp_8_89_2012">(porovnání HOME)</SourceLink>{" "}
          <SourceLink id="DOI_10_1175_jcli_d_18_0094_1">(rozšíření ve verzi 4)</SourceLink>
        </p>

        <h3 id="oceanske-profily">Kontrola oceánských profilů</h3>
        <p>
          Při zpracování <Link href="/pozorovani/tepelny-obsah-oceanu/#kontrola-dat">teplot oceánu</Link>{" "}
          se kontroluje také průběh hodnot s hloubkou. IAPv4 porovnává údaje
          s rozsahem obvyklým pro dané místo a s běžnými svislými změnami teploty.
          Kontroly přizpůsobuje typu přístroje. Samostatný krok opravuje známé
          systematické odchylky, například chybu teploty a odvozené hloubky
          jednorázových sond XBT. Zkontrolované a opravené profily pak vstupují
          do prostorové rekonstrukce.{" "}
          <SourceLink id="DOI_10_5194_essd_16_3517_2024">(Cheng a kol. 2024, oddíly 2.2 a 2.3)</SourceLink>
        </p>
        <h3 id="chemie-oceanu">Sjednocení chemických rozborů z různých plaveb</h3>
        <p>
          U <Link href="/pozorovani/acidifikace-oceanu/#kontrola-dat">oceánské chemie</Link>{" "}
          poskytují společnou kontrolu místa, kde se trasy výprav kříží nebo
          přibližují. GLODAPv2 porovnával zejména hlubokou vodu, která se mění
          pomaleji než povrchová. Z rozdílů mezi plavbami odhadl soustavné posuny
          rozborů. Navržené opravy pak autoři posuzovali také podle skutečného
          vývoje vody v čase. Tento postup umožňuje spojovat například měření
          DIC a alkalinity z různých laboratoří. Rozsah kontrol jednotlivých
          veličin v aktuální verzi databáze uvádí navazující pozorování.{" "}
          <SourceLink id="DOI_10_5194_essd_8_297_2016">(Olsen a kol. 2016, oddíl 3)</SourceLink>
        </p>
        <h3 id="atmosfericky-co2">Výběr vzduchu pro záznam CO₂</h3>
        <p>
          U <Link href="/pozorovani/atmosfericka-koncentrace-co2/#kontrola-dat">atmosférického CO₂</Link>{" "}
          záleží vedle správného chodu analyzátoru také na tom, jaký vzduch
          chceme sledovat. NOAA na Mauna Loa vybírá stabilní období, kdy je vzduch
          málo ovlivněn blízkými zdroji a pohlcováním CO₂. Zohledňuje denní
          proudění po svahu a proměnlivost koncentrace.
          Příznaky kvality uchovávají informaci o důvodu výběru.
          Srovnatelnou číselnou stupnici zajišťují referenční plyny a návaznost
          kalibrací. Výběr vzorků a kalibrace zde řeší dvě různé části přípravy záznamu.{" "}
          <SourceLink id="WEB_NOAA_Carbon_Cycle_Greenhouse_Gases_NOAA_Global_Monito_66691a03">(NOAA: měření a zpracování Mauna Loa)</SourceLink>
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Výsledek závisí hlavně na dostupnosti vhodných sousedů, délce společných
          měření a velikosti místního posunu. Krátké úseky a změny společné celé
          síti se rozlišují obtížněji. Projekt HOME porovnal 25 řešení odevzdaných bez znalosti změn,
          které autoři do testovacích záznamů vložili. Relativní postupy
          obvykle zlepšily teplotní záznamy.
          U srážek zlepšení dosáhly jen nejlepší postupy, takže úspěch u jedné
          veličiny nelze automaticky přenést na druhou.{" "}
          <SourceLink id="DOI_10_5194_cp_8_89_2012">(Venema a kol. 2012)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Podrobněji o chybách, ověření a jejich mezích</summary>
          <h3>Vynechaná chyba a vyřazený skutečný extrém</h3>
          <p>
            Kontrola může přehlédnout vadný údaj, ale také označit skutečný
            extrém. Dunn a kolegové při vývoji HadISD posuzovali oba směry
            chyby a kombinovali časové, prostorové a další kontroly. Silně
            neobvyklá hodnota proto potřebuje více souvislostí než jedinou
            pevnou mez. Prázdný příznak GHCN-M může znamenat úspěšný průchod
            kontrolou i nedostatek podkladů pro její provedení.{" "}
            <SourceLink id="DOI_10_5194_cp_8_1649_2012">(kontroly HadISD)</SourceLink>{" "}
            <SourceLink id="WEB_NOAA_GHCNMv4_Format">(význam prázdného příznaku)</SourceLink>
          </p>
          <h3>Malé posuny a společné změny</h3>
          <p>
            Malý skok se může ztratit v běžných rozdílech mezi stanicemi.
            Změna společná všem porovnávaným stanicím se naopak při odečítání
            oslabí spolu s počasím. Pomáhá dohledání historie přístrojů a způsobu měření. Blízkost stanic sama nezaručuje vhodnost
            srovnání, zejména v členitém terénu. U izolovaných míst tak může
            zůstat větší část nejistoty neodstraněná.{" "}
            <SourceLink id="DOI_10_1175_2008jcli2263_1">(meze párového porovnání)</SourceLink>{" "}
            <SourceLink id="DOI_10_1175_jcli_d_18_0094_1">(nezachycené nehomogenity)</SourceLink>
          </p>
          <h3>Jak se odhaduje nejistota úprav</h3>
          <p>
            Jednotliví sousedé mohou dát různé odhady stejného posunu.
            Původní algoritmus požaduje pro jeho úpravu nejméně tři párové
            odhady a porovnává jejich vzájemné rozdíly. Při odhadu využívá sousední
            úseky bez nalezeného zlomu alespoň 24 měsíců před změnou i po ní.
            GHCN-M v4 dále vytváří soubor zpracování s různými nastaveními
            a odhaduje i vliv nerozpoznaných změn. Nejistota je proto závislá
            na stanici a období. Zápis na 0,01 °C vyjadřuje krok uložených
            hodnot, nikoli takto malou nejistotu homogenizace.{" "}
            <SourceLink id="DOI_10_1175_2008jcli2263_1">(podmínky odhadu)</SourceLink>{" "}
            <SourceLink id="DOI_10_1175_jcli_d_18_0094_1">(soubor zpracování a nejistoty)</SourceLink>
          </p>
          <h3>Co ověřila slepá zkouška</h3>
          <p>
            Projekt HOME použil také uměle vytvořené záznamy se známým
            klimatickým průběhem, do kterých autoři vložili zlomy, chybějící
            údaje a místní trendy. Účastníci při prvním odevzdání neznali
            vložené změny. Bylo tedy možné porovnat jejich výsledky se známou
            výchozí teplotou nebo srážkami a posoudit chybu hodnot i trendu.
            Vedle 25 slepých řešení studie vyhodnotila dalších 22 řešení
            odevzdaných po zveřejnění změn. Tyto dvě skupiny mají odlišnou
            nezávislost na správné odpovědi. Zkouška ověřuje výkon pro
            zastoupené druhy změn, nikoli bezchybnost každé skutečné stanice.{" "}
            <SourceLink id="DOI_10_5194_cp_8_89_2012">(uspořádání a výsledky HOME)</SourceLink>
          </p>
        </details>

        <h2>Příklad: kontrola a úpravy teplot v Ruzyni</h2>
        <p>
          Použijeme stanici Ruzyně, označenou v GHCN-M jako
          <strong> EZM00011518</strong>. Vybereme leden 1961 až prosinec 2020
          z verze archivu <strong>v4.0.1.20261029</strong>, stažené 30. října 2026.
          Pracujeme se dvěma zveřejněnými soubory NOAA, QCU a QCF. Ukázka
          porovnává jejich údaje a převzaté homogenizační úpravy, původní
          hledání zlomů v celé síti zde znovu neprovádí.{" "}
          <SourceLink id="WEB_NOAA_GHCNMv4_20261029">(vstupní data NOAA)</SourceLink>
        </p>
        <p>
          Nejprve spárujeme stejné měsíce a přečteme jejich hodnoty i příznaky.
          Pro výpočet rozdílu vyžadujeme teplotu v obou verzích a prázdný příznak
          kvality na obou stranách. Z 720 měsíců tuto podmínku splní
          <strong> 719</strong>. V březnu 2020 je v QCU teplota 4,80 °C
          označená příznakem W. Ten podle dokumentace upozorňuje na podezřelé
          zopakování hodnoty předchozího měsíce. Ve verzi QCF už teplota
          pro tento měsíc chybí.{" "}
          <SourceLink id="WEB_NOAA_GHCNMv4_Format">(čtení hodnot a příznaku W)</SourceLink>{" "}
          <SourceLink id="WEB_NOAA_GHCNMv4_20261029">(údaje stanice)</SourceLink>
        </p>
        <p>
          U použitelných měsíců určíme souhrnnou úpravu odečtením QCU od QCF.
          V lednu 1965 uvádí původní verze 0,30 °C a homogenizovaná verze
          −0,04 °C. Použijeme už vysvětlený vztah mezi původní teplotou,
          úpravou a výsledkem:
        </p>
        <Equation tex={[String.raw`c=T_{\mathrm{h}}-T_{\mathrm{u}}`, String.raw`=(-0{,}04)-0{,}30=-0{,}34\,^{\circ}\mathrm{C}`]} />
        <p>
          Lednová teplota se v této verzi zpracování snížila o
          <strong> 0,34 °C</strong>. Jde o souhrn úprav vztahujících se k danému
          období, nikoli o nový odečet teploměru. U pozdějších úseků vychází
          jiná změna. Leden 1990 se zvýšil o 0,01 °C, leden 2005 se snížil
          o 0,31 °C a leden 2015 zůstal na původní hodnotě.{" "}
          <SourceLink id="WEB_NOAA_GHCNMv4_20261029">(vlastní porovnání verzí NOAA)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/homogenization/ruzyne-comparison.svg" width={576} height={936}
            alt="Lednové teploty v Ruzyni 1961–2020 před homogenizací a po ní. Dolní panel ukazuje měsíční úpravy od −0,34 do +0,01 stupně Celsia." />
          <figcaption>
            Nahoře jsou lednové průměry: rezavá čára označuje QCU, přerušovaná
            zelená QCF. Osa ukazuje teplotu ve °C. Dole je rozdíl QCF minus QCU
            pro všechny použitelné měsíce, opět ve °C. Vodorovná osa v obou
            panelech udává rok. Schody v dolním panelu ukazují, že se úprava
            týká celých období, jejichž měsíční kolísání zůstává zachováno.
            Vlastní graf z{" "}
            <SourceLink id="WEB_NOAA_GHCNMv4_20261029">dat NOAA</SourceLink>.
          </figcaption>
        </figure>
        <details className="article-details">
          <summary>Data a postup pro zopakování příkladu</summary>
          <p>
            Přiložené staniční výřezy zachovávají původní řádky obou archivů
            včetně všech příznaků. Hodnoty jsou uložené jako celočíselné setiny
            °C, značka −9999 znamená chybějící údaj. Skript ověří kontrolní
            součty vstupů, vybere období, spáruje měsíce a vytvoří tabulku rozdílů.
            Stačí Python 3 bez dalších knihoven. Přesné adresy, názvy souborů,
            pravidla výběru a význam rozsahu ukázky obsahuje návod.
          </p>
          <ul>
            <li><a href="/data/methods/homogenization/README.txt">Návod a pravidla výpočtu</a></li>
            <li><a href="/data/methods/homogenization/EZM00011518.qcu-original.dat">Původní staniční výřez QCU</a> a{" "}<a href="/data/methods/homogenization/EZM00011518.qcf-original.dat">QCF</a></li>
            <li><a href="/data/methods/homogenization/station-original.inv">Původní identifikace a poloha stanice</a></li>
            <li><a href="/data/methods/homogenization/comparison.csv">Porovnání všech 720 měsíců</a> a{" "}<a href="/data/methods/homogenization/results.json">výsledky</a></li>
            <li><a href="/data/methods/homogenization/reproduce.py">Skript k zopakování</a> a{" "}<a href="/data/methods/homogenization/provenance.json">původ a kontrolní součty</a></li>
          </ul>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Kontrola kvality určuje, které jednotlivé údaje vyžadují vyřazení
            nebo prověření. Homogenizace porovnává delší záznamy stanic a pomocí
            jejich společného kolísání odhaduje místní posuny. Výsledkem jsou
            lépe srovnatelné údaje, ze kterých lze počítat klimatické změny
            při omezeném vlivu změn měření.
          </p>
          <p>
            Tyto postupy slouží ke zpracování teploty, srážek, vlhkosti a dalších
            meteorologických veličin pro sledování průměrů, proměnlivosti
            a extrémů. Kontrola jednotlivých údajů může pracovat s krokem
            <strong> 1 hodina nebo 1 den</strong>, vysvětlená párová homogenizace
            s krokem <strong>1 měsíc</strong>. Umožňují připravit měření
            pořízená za různých podmínek pro dlouhodobé klimatické srovnání.{" "}
            <SourceLink id="DOI_10_5194_cp_8_1649_2012">(hodinové údaje)</SourceLink>{" "}
            <SourceLink id="DOI_10_1175_jtech_d_11_00103_1">(denní údaje)</SourceLink>{" "}
            <SourceLink id="DOI_10_1175_jcli_d_18_0094_1">(měsíční homogenizace)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
