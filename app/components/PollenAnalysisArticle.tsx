import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function PollenAnalysisArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak pylová analýza funguje</h2>
        <p className="article-prose__intro">
          Pylová analýza je určování a počítání pylových zrn, podle kterých
          zjišťujeme složení vegetace. Pyl uchovaný v usazeninách umožňuje
          sledovat, jaké rostliny rostly v minulosti a jak se jejich zastoupení
          měnilo. Z jejich nároků na teplo a vodu pak získáváme informace
          o tehdejším klimatu. Podrobně projdeme rozbor pylu z jezerního dna.
          Podobně lze využívat i další mikrofosilie, tedy drobné zachované
          organismy nebo části jejich těl.{" "}
          <SourceLink id="WEB_USGS_Paleoclimate_Proxies">(USGS: biologické záznamy minulého klimatu)</SourceLink>
        </p>

        <h3>Proč se v jezerním bahně uchová zpráva o rostlinách</h3>
        <p>
          Semenné rostliny vytvářejí pyl při rozmnožování. Část zrn unese vítr
          a některá dopadnou na hladinu jezera. Další přinese voda z jeho okolí.
          Zrna postupně klesají ke dnu a ukládají se spolu s jemným materiálem.
          Nové usazeniny překrývají starší, takže v různých hloubkách zůstává
          pyl z různých období.{" "}
          <SourceLink id="WEB_USGS_Paleoclimate_Proxies">(USGS: původ a ukládání pylu)</SourceLink>
        </p>
        <p>
          Uchovat se může především odolná vnější stěna zrna.
          Obsahuje sporopolenin, látku, kterou běžné rozkladné procesy
          narušují obtížně. V trvale zamokřených usazeninách s nedostatkem
          kyslíku se rozklad dále zpomaluje. I po zániku vlastní rostliny
          tak může zůstat zachovaný obal pylu s rozpoznatelným tvarem
          a povrchem.{" "}
          <SourceLink id="DOI_10_1080_01916122_2021_1878305">(Riding 2021, vlastnosti a uchování pylových stěn)</SourceLink>{" "}
          <SourceLink id="WEB_USGS_Palynology_Laboratory">(USGS: uchování pylu v usazeninách)</SourceLink>
        </p>
        <p>
          Podobu zrna můžeme porovnat s pylem dnešních známých rostlin.
          Sledujeme tvar, velikost, kresbu povrchu a počet i rozmístění
          otvorů a rýh ve stěně. Kombinace těchto znaků umožňuje přiřadit
          zrno k určité skupině rostlin. Tím vzniká spojení mezi drobným
          nálezem v usazenině a vegetací, která pyl vytvořila.{" "}
          <SourceLink id="WEB_NPS_Florissant_Microscopic">(NPS: rozpoznávání fosilního pylu)</SourceLink>
        </p>

        <h3>Odběr a příprava vzorku</h3>
        <p>
          V jezeře vybíráme místo, kde se zachoval souvislý sled usazenin.
          Trubicovým odběračem vyjmeme jejich sloupec, označovaný jako
          sedimentární jádro. Jeho popis a fotografie zachytí vrstvy
          a jejich polohu. Ze známých hloubek potom oddělujeme malé vzorky.
          U každého tak víme, ze které části záznamu pochází.{" "}
          <SourceLink id="WEB_USGS_Palynology_Laboratory">(USGS: terénní odběr a evidence vzorků)</SourceLink>{" "}
          Celý postup odběru a propojení vrstev vysvětluje článek o{" "}
          <Link href="/metody/sedimentarni-jadra-a-stratigrafie">sedimentárních jádrech a stratigrafii</Link>.
        </p>
        <p>
          Pyl potřebujeme oddělit od hmoty, která jej obklopuje.
          Laboratorní příprava proto postupně odstraňuje minerální částice
          a snadněji rozložitelnou organickou hmotu. Chemické ošetření
          a prosévání zanechají malý zbytek bohatý na pylové obaly.
          Použité kroky volíme podle složení usazeniny.
          Zbytek rozptýlíme v průhledném prostředí na podložním sklíčku
          a překryjeme tenkým krycím sklíčkem. Tím vznikne preparát
          pro mikroskop.{" "}
          <SourceLink id="DOI_10_1080_01916122_2021_1878305">(Riding 2021, oddělení pylu a příprava preparátů)</SourceLink>
        </p>

        <h3>Co pod mikroskopem určujeme a počítáme</h3>
        <p>
          Světelný mikroskop prosvěcuje preparát a zvětšuje obraz zrn.
          Přeostřováním sledujeme jejich povrch i stěnu v různých rovinách.
          Ve výzkumu usazenin z oblasti jezera Elgygytgyn na Čukotce se používalo
          zvětšení 400krát a určovací atlasy. Ty umožňují porovnávat nálezy
          se zdokumentovanými znaky známého pylu.{" "}
          <SourceLink id="DOI_10_5194_cp_8_1287_2012">(Andreev a kol. 2012, laboratorní postup)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/pollen/pollen-microscope.jpg"
            width={2370} height={2383} unoptimized
            alt="Pohled okulárem světelného mikroskopu na pylová zrna různých tvarů promíchaná s většími zbytky organické hmoty." />
          <figcaption>
            Skutečný pohled na pyl v preparátu. Vedle zaoblených zrn jsou
            viditelné i větší nepravidelné zbytky organické hmoty.
            Fotografie ukazuje podobu mikroskopického rozboru, nepochází
            z jezera použitého v příkladu. Diana Carriker, USGS, 2018.
            Public domain, převzato beze změny.{" "}
            <SourceLink id="WEB_USGS_Pollen_Microscope">Původní snímek a podmínky použití</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Preparát procházíme postupně a nalezená zrna zapisujeme do
          určených skupin. Skupina může odpovídat botanickému druhu nebo širší
          skupině příbuzných druhů, například rodu olše.
          Pylový typ sdružuje zrna se stejnými rozpoznávacími znaky.
          Jeden typ proto může zahrnovat více blízce příbuzných druhů.
          Výsledkem počítání je tabulka s počtem zrn v každé skupině.{" "}
          <SourceLink id="DOI_10_1080_01916122_2021_1878305">(Riding 2021, práce s pylovými preparáty)</SourceLink>
        </p>
        <p>
          Pro porovnání vzorků převedeme počty na procenta. Nejdříve
          vymezíme, která zrna patří do společného součtu, nazývaného
          pylová suma. Při sledování suchozemské vegetace to bývá pyl
          suchozemských rostlin. Vodní řasy a výtrusy se vyhodnocují
          odděleně. Podíl jedné skupiny potom získáme vydělením jejího
          počtu společnou sumou a vynásobením stem.{" "}
          <SourceLink id="DOI_10_5194_cp_8_1287_2012">(Andreev a kol. 2012, základ procentního výpočtu)</SourceLink>
        </p>
        <Equation tex={String.raw`p_i = 100\,\frac{n_i}{N}`} />
        <p>
          <InlineMath tex={String.raw`p_i`} /> je procentní podíl zvolené
          skupiny, <InlineMath tex={String.raw`n_i`} /> počet jejích zrn
          a <InlineMath tex="N" /> počet všech zrn zahrnutých do pylové sumy.
          Index <InlineMath tex="i" /> označuje právě sledovanou skupinu.
          Poměr dvou počtů zrn nemá fyzikální jednotku. Násobení stem
          jej vyjádří v procentech. Při porovnávání používáme stejně vymezenou sumu.
          Podíly několika skupin v témže vzorku pak můžeme sečíst, pokud
          chceme sledovat jejich společné zastoupení.
        </p>

        <h3>Jak získáme časový záznam vegetace</h3>
        <p>
          Každá tabulka zatím patří k určité hloubce. Pro sledování změn
          v čase k ní potřebujeme přiřadit stáří. U mladších jezerních
          usazenin lze datovat například zachované rostlinné zbytky
          radiouhlíkovou metodou. Ta využívá postupný úbytek radioaktivního
          uhlíku po odumření organismu. Několik datovaných úrovní poskytne
          opěrné body, mezi nimiž sestavíme vztah hloubky a stáří.{" "}
          <SourceLink id="DOI_10_5194_cp_8_1287_2012">(Andreev a kol. 2012, datování rostlinného materiálu)</SourceLink>
        </p>
        <p>
          Dlouhé záznamy potřebují i další časová vodítka. U jezera
          Elgygytgyn vědci využili známé změny polarity zemského magnetického
          pole, zachycené magnetickými minerály v usazeninách. Časovou osu
          dále zpřesnili porovnáním průběhu několika vlastností sedimentu
          s jinými klimatickými řadami a s vypočtenými změnami oslunění.
          Výsledný vztah mezi hloubkou a stářím se označuje jako model
          stáří. Díky němu dostane časový údaj každý pylový vzorek.{" "}
          <SourceLink id="DOI_10_5194_cp_9_2413_2013">(Nowaczyk a kol. 2013, sestavení časové osy)</SourceLink>
        </p>
        <p>
          Datované podíly zakreslíme do pylového diagramu. Každý jeho sloupec
          ukazuje jednu skupinu rostlin, vodorovná osa její procentní
          zastoupení. Všechny sloupce mají společnou svislou osu stáří.
          Pohledem napříč diagramem tedy čteme složení jednoho vzorku,
          pohledem podél časové osy jeho proměny. Současný ústup některých
          typů a rozšíření jiných ukazuje změnu vegetace.{" "}
          <SourceLink id="DOI_10_5194_cp_10_1017_2014">(Andreev a kol. 2014, pylové diagramy a jejich vyhodnocení)</SourceLink>
        </p>
        <p>
          Význam změny určujeme podle rostlin, které jednotlivé typy
          zastupují, a podle jejich společného výskytu. V arktickém záznamu
          může převaha trav a pelyňků charakterizovat otevřenou krajinu,
          zatímco výraznější zastoupení zakrslých bříz a olší ukazuje
          rozšíření keřové vegetace. Celé společenstvo tak pomáhá rozpoznat
          podobu prostředí, ze kterého pyl přicházel.{" "}
          <SourceLink id="DOI_10_5194_cp_16_799_2020">(Dietzeová a kol. 2020, význam pylových skupin na Čukotce)</SourceLink>
        </p>

        <h3>Jak z vegetace odhadujeme klima</h3>
        <p>
          Pro číselný odhad teploty nebo srážek potřebujeme navázat další
          vztah. Z dnešních míst s různým klimatem shromáždíme povrchové
          vzorky pylu. U každého známe pylové složení a údaje o místní
          teplotě či srážkách. Vznikne referenční soubor, který propojuje
          pozorovaná pylová společenstva s klimatickými podmínkami.{" "}
          <SourceLink id="DOI_10_1016_j_earscirev_2020_103384">(Chevalier a kol. 2020, moderní referenční soubory)</SourceLink>
        </p>
        <p>
          Jedním postupem je hledání moderních obdob. Složení starého
          vzorku porovnáme se současnými vzorky podle zastoupení stejných
          pylových typů. Vybereme několik nejpodobnějších a z jejich
          známého klimatu vypočítáme odhad pro minulost. Při váženém průměru
          dostanou podobnější vzorky větší vliv. Postup využívá předpoklad,
          že obdobné rostlinné společenstvo mělo obdobné nároky na klima.{" "}
          <SourceLink id="DOI_10_1016_j_earscirev_2020_103384">(Chevalier a kol. 2020, metoda moderních obdob)</SourceLink>
        </p>
        <p>
          Výstupem může být například průměrná červencová teplota
          ve stupních Celsia nebo roční úhrn srážek v milimetrech.
          Soubor LegacyClimate 1.0 takto a dalšími statistickými postupy
          zpracovává 2 594 pylových záznamů severní polokoule.
          Jeho řady pokrývají posledních 30 000 let a některé sahají hlouběji.
          Společné zpracování umožňuje porovnávat průběh klimatických změn
          mezi oblastmi.{" "}
          <SourceLink id="DOI_10_5194_essd_15_2235_2023">(Herzschuhová a kol. 2023, LegacyClimate 1.0)</SourceLink>
        </p>
        <p>
          Dosah pylové analýzy určuje také stáří dochovaných usazenin.
          Dlouhé jezerní vrty umožňují sledovat vegetaci i přibližně
          3 600 000 let nazpět, jak dokládá výzkum jezera Elgygytgyn.
          Rozlišování rostlinných společenstev a odhad jejich klimatických
          podmínek tak propojuje nedávnou minulost s opakovanými dobami
          ledovými a ještě staršími teplými obdobími.{" "}
          <SourceLink id="DOI_10_5194_cp_10_1017_2014">(Andreev a kol. 2014, dlouhý arktický záznam)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/pollen/analysis-path.svg"
            width={700} height={950} unoptimized
            alt="Schéma postupu: pyl se uloží v jezerních vrstvách, odebraný vzorek se vyčistí a zrna určí a spočítají. Procentní složení se spojí s datováním. Porovnání s dnešními pylovými vzorky a jejich klimatem umožní odhad minulých podmínek." />
          <figcaption>
            Vlastní schéma ukazuje, jak na sebe kroky navazují.
            Datování přidává pylovému složení časovou osu.
            Dnešní vzorky se známým klimatem poskytují vztah potřebný
            k převodu na teplotu nebo srážky. Šipky označují předávání
            informace, nikoli pohyb pylu ve všech částech schématu.{" "}
            <SourceLink id="DOI_10_1016_j_earscirev_2020_103384">Metodický podklad</SourceLink>.
          </figcaption>
        </figure>

        <h3>Vývoj metody a další mikrofosilie</h3>
        <p>
          Porovnávání pylových podílů má kořeny na počátku 20. století.
          Holstova práce z roku 1909 obsahuje Lagerheimovy rozbory
          švédských usazenin a tabulku změn zastoupení stromového pylu.
          V roce 1916 představil Lennart von Post systematické využití
          pylových diagramů při sledování minulosti vegetace.
          Pozdější rozvoj datování a počítačového zpracování umožnil
          spojovat jednotlivé rozbory do rozsáhlých časových a prostorových
          souborů, jakým je dnešní LegacyClimate.{" "}
          <SourceLink id="BOOK_Holst_1909_Postglaciala">(Holst 1909, s. 29–30)</SourceLink>{" "}
          <SourceLink id="DOI_10_1007_s00334_017_0629_8">(Edwards 2018, historické prameny)</SourceLink>{" "}
          <SourceLink id="DOI_10_5194_essd_15_2235_2023">(Herzschuhová a kol. 2023)</SourceLink>
        </p>
        <p>
          Podobnou cestou zkoumáme rozsivky, jednobuněčné řasy se schránkami
          z oxidu křemičitého. Schránky se uchovávají v usazeninách
          a podle jejich tvaru určujeme jednotlivé druhy.
          Zastoupení druhů porovnáváme s jejich výskytem v dnešních vodách.
          Protože různým rozsivkám vyhovuje jiné chemické prostředí,
          získáváme tak informace například o někdejší slanosti vody
          nebo změnách pobřežních mokřadů.{" "}
          <SourceLink id="DOI_10_3133_fs20103115">(Smithová a Flocks 2010, rozbor rozsivek)</SourceLink>
        </p>
        <p>
          V mořských usazeninách jsou důležité také schránky dírkovců,
          jednobuněčných organismů. Jejich druhové složení vypovídá
          o prostředí, ve kterém žili, včetně teploty vody.
          Spojení různých skupin mikrofosilií rozšiřuje pohled
          z okolní souše na samotné vodní prostředí.{" "}
          <SourceLink id="WEB_USGS_Paleoclimate_Proxies">(USGS: mořské biologické ukazatele)</SourceLink>
        </p>

        <h2>Nejistoty a omezení</h2>
        <p>
          Výsledek ovlivňuje množství a doprava pylu, jeho uchování,
          datování i volba dnešních vzorků pro srovnání. Procento pylu
          proto neodpovídá přímo procentu plochy pokryté rostlinou.
          V souboru LegacyClimate měla metoda moderních obdob při kontrole
          na vynechávaných dnešních vzorcích souhrnnou chybu odhadu
          červencové teploty, označovanou RMSEP, v průměru 1,90 °C. Tato míra popisuje rozdíly
          mezi odhadem a známou teplotou, nikoli o zaručenou přesnost
          každého starého vzorku.{" "}
          <SourceLink id="DOI_10_5194_essd_15_2235_2023">(Herzschuhová a kol. 2023, ověření rekonstrukcí)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Co ovlivňuje výsledek a jak se ověřuje</summary>
          <h3>Co skutečně představuje pylový podíl</h3>
          <p>
            Rostliny produkují různá množství pylu a jejich zrna se šíří
            do různých vzdáleností. Jezero tedy sbírá nerovnoměrně zastoupený
            vzorek okolní vegetace. Kromě toho je procentní složení provázané:
            přibude-li pyl jedné skupiny, podíly ostatních mohou klesnout
            i bez úbytku jejich zrn. Při interpretaci pomáhají současné
            vzorky, znalost šíření pylu a porovnání s většími rostlinnými
            zbytky, například semeny. Ty mohou doložit místní výskyt rostliny.{" "}
            <SourceLink id="DOI_10_1016_j_earscirev_2020_103384">(Chevalier a kol. 2020)</SourceLink>{" "}
            <SourceLink id="WEB_USGS_Paleoclimate_Proxies">(USGS: rostlinné zbytky)</SourceLink>
          </p>
          <h3>Uchování, počítání a stáří</h3>
          <p>
            Poškozená zrna se určují hůře a různé typy mohou rozklad
            přežívat různě. Rozbor zahrnuje jen spočítanou část vzorku,
            takže zvláště málo zastoupené typy zachycujeme méně jistě.
            V publikovaném postupu pro oblast Elgygytgyn autoři počítali
            nejméně 250 pylových zrn na vzorek. Tento počet popisuje
            jejich provedení, není obecnou zárukou přesnosti.{" "}
            <SourceLink id="DOI_10_1080_01916122_2021_1878305">(Riding 2021)</SourceLink>{" "}
            <SourceLink id="DOI_10_5194_cp_8_1287_2012">(Andreev a kol. 2012)</SourceLink>
          </p>
          <p>
            Nejisté stáří posouvá změny po časové ose.
            U Elgygytgynu se na sestavení stáří podílelo také porovnávání
            klimaticky ovlivněných vlastností sedimentu včetně pylu
            s referenčními řadami. Následná časová shoda s týmiž řadami
            proto není nezávislým potvrzením datování.
            Počet číslic ve zveřejněném stáří jeho přesnost nevyjadřuje.{" "}
            <SourceLink id="DOI_10_5194_cp_9_2413_2013">(Nowaczyk a kol. 2013)</SourceLink>
          </p>
          <h3>Kontrola převodu na klima</h3>
          <p>
            Při křížovém ověření postupně vynecháme jeden dnešní vzorek,
            odhadneme jeho klima pomocí ostatních a porovnáme odhad
            se známou hodnotou. Rozdíly umocníme na druhou, zprůměrujeme a odmocníme.
            Výsledná RMSEP vyjadřuje typickou velikost chyby ve stupních Celsia.
            Vynechaný vzorek se nepoužije k vlastnímu odhadu,
            soubor však stále sdílí klimatická data a prostorově blízká
            místa. Test proto nezajišťuje úplnou nezávislost ani nezahrnuje
            všechny nejistoty fosilního záznamu.{" "}
            <SourceLink id="DOI_10_5194_essd_15_2235_2023">(Herzschuhová a kol. 2023, křížové ověření a meze)</SourceLink>
          </p>
          <p>
            Vegetaci mění také požáry, půda a lidské zásahy.
            Klimatický výklad proto porovnáváme s dalšími záznamy
            a posuzujeme, zda změnu dokáže vysvětlit jiný vliv.
            Při porovnání dvou výpočtových metod nad stejnými pylovými
            daty kontrolujeme citlivost výpočtu. Nezískáváme tím druhé
            nezávislé měření minulého klimatu.{" "}
            <SourceLink id="DOI_10_5194_cp_16_799_2020">(Dietzeová a kol. 2020, vegetace a požáry)</SourceLink>{" "}
            <SourceLink id="DOI_10_1016_j_earscirev_2020_103384">(Chevalier a kol. 2020, vyhodnocení rekonstrukcí)</SourceLink>
          </p>
        </details>

        <h2>Proměna vegetace u jezera Elgygytgyn</h2>
        <p>
          Použijeme veřejný soubor 19 vzorků ze sedimentárního jádra PG1351.
          Pro souvislou ukázku vybíráme všech 11 vzorků mladšího úseku,
          datovaných od 144 460 do 117 460 let před rokem 1950.
          Pracujeme se zveřejněnými procenty a převzatým modelem stáří.
          Jednotlivé počty zrn tento soubor neobsahuje.
          Opakujeme tedy vyhodnocení pylového složení, které následuje
          po laboratorním počítání.{" "}
          <SourceLink id="DOI_10_1594_PANGAEA_915749">(Andreev, Dietzeová a Herzschuhová 2020, data PG1351)</SourceLink>
        </p>
        <p>
          Sledujeme olše, břízy zakrslého typu a společně trávy s pelyňky.
          Latinská jména v souboru jsou <i>Alnus</i>, <i>Betula</i> sect.
          <i> Nanae</i>, <i>Poaceae</i> a <i>Artemisia</i>.
          Pro společný podíl trav a pelyňků sčítáme jejich dvě procenta
          v každém vzorku. Ostatní skupiny z původní pylové sumy
          ponecháváme v základu výpočtu, vybrané křivky nepřepočítáváme
          na nové celkové procento.
        </p>
        <div className="article-table-wrap">
          <table className="article-table">
            <caption>Dva vzorky z vybraného úseku a výpočet společného podílu</caption>
            <thead>
              <tr><th>Údaj</th><th>Starší vzorek 117</th><th>Mladší vzorek 109</th></tr>
            </thead>
            <tbody>
              <tr><td>Hloubka v jádře</td><td>6,220 m</td><td>5,765 m</td></tr>
              <tr><td>Stáří podle modelu</td><td>134 246 let před 1950</td><td>125 590 let před 1950</td></tr>
              <tr><td>Trávy</td><td>40,9 %</td><td>2,9 %</td></tr>
              <tr><td>Pelyňky</td><td>47,2 %</td><td>0,0 %</td></tr>
              <tr><td>Trávy a pelyňky dohromady</td><td>88,1 %</td><td>2,9 %</td></tr>
              <tr><td>Břízy zakrslého typu</td><td>0,7 %</td><td>45,2 %</td></tr>
              <tr><td>Olše</td><td>0,0 %</td><td>49,7 %</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Ve starším vzorku dostáváme součtem 40,9 + 47,2 podíl 88,1 %.
          V mladším je to 2,9 + 0,0, tedy 2,9 %.
          Společné zastoupení trav a pelyňků se mezi těmito vzorky snížilo
          o 85,2 procentního bodu. Současně výrazně přibylo pylu bříz
          zakrslého typu a olší. Následující diagram ukazuje obě hodnoty
          v kontextu všech 11 vzorků. Starší leží dole, mladší nahoře.
        </p>
        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" tabIndex={0} role="region" aria-label="Pylový diagram, na úzké obrazovce lze posouvat vodorovně">
          <Image className="article-figure__media" src="/media/pollen/elgygytgyn-pollen.svg"
            width={780} height={680} unoptimized
            alt="Tři pylové křivky za dobu před 144 460 až 117 460 lety. V dolní starší části převládají trávy a pelyňky. V mladší části roste zastoupení bříz zakrslého typu a olší." />
          </div>
          <figcaption>
            Vlastní graf ze zveřejněných dat. Body jsou jednotlivé vzorky,
            spojnice usnadňují sledování jejich pořadí. Vodorovné osy
            ukazují procenta ze stejné pylové sumy, svislá osa modelové
            stáří v tisících let před rokem 1950. Každý sloupec má stejné
            měřítko 0–100 %. Tři zobrazené podíly dohromady netvoří celý
            vzorek. Na malé obrazovce lze graf posouvat vodorovně.{" "}
            <SourceLink id="DOI_10_1594_PANGAEA_915749">Data PANGAEA, CC BY 4.0</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Proměna složení odpovídá rozšíření keřové vegetace na úkor
          otevřené krajiny s vysokým zastoupením trav a pelyňků.
          V regionálním výkladu patří k přechodu z chladné doby ledové
          do teplejšího meziledového období. Přesnou teplotu jsme tímto
          součtem nevypočítali. K ní by bylo třeba navázat popsané
          porovnání s moderními pylovými soubory.{" "}
          <SourceLink id="DOI_10_5194_cp_16_799_2020">(Dietzeová a kol. 2020, vegetační a klimatický kontext)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Data a postup pro zopakování</summary>
          <p>
            Zdrojem je PANGAEA.915749, zveřejněná 29. dubna 2020,
            stažená 28. října 2026. Uchováváme původní tabulkový export
            včetně metadat a licence CC BY 4.0. Hloubky, procenta a stáří
            přebíráme beze změny. Stáří v tisících let před rokem 1950
            násobíme tisícem pro tabulku v článku. Skript vybírá řádky
            s publikovaným označením MIS 5e a MIS 6, tedy z příslušného
            meziledového období a předchozí doby ledové.
          </p>
          <p>
            Sloupec společného podílu je součtem <code>Poac [%]</code>
            a <code>Artemisia [%]</code>. Původní chybějící hodnoty bychom
            nepovažovali za nuly. Ve vybraných sloupcích žádné nejsou.
            Graf nepoužívá vyhlazení ani změnu časové osy.
            Skript potřebuje Python 3, pro vytvoření grafu navíc Matplotlib.
          </p>
          <ul>
            <li><a href="/data/methods/pollen/pg1351-original.tsv">Původní export PANGAEA</a></li>
            <li><a href="/data/methods/pollen/selected-pollen.csv">Vybraných 11 vzorků a vypočtené součty v CSV</a></li>
            <li><a href="/data/methods/pollen/reproduce.py">Skript pro výpočet a graf</a></li>
            <li><a href="/data/methods/pollen/README.txt">Návod, původ a význam sloupců</a></li>
            <li><a href="/data/methods/pollen/provenance.json">Verze vstupu a kontrolní otisk souboru</a></li>
          </ul>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Pylová zrna uchovávají rozpoznatelné znaky rostlin,
            které je vytvořily. Jejich určením a spočítáním získáme
            složení jednotlivých vzorků. Datování ukáže, kdy se vegetace
            měnila, a srovnání s dnešními společenstvy umožní vyložit
            také klimatické podmínky těchto změn.
          </p>
          <p>
            Metoda umožňuje rekonstruovat vegetaci, teplotu vzduchu
            a srážky. Další mikrofosilie doplňují informace o teplotě
            a chemickém prostředí vod. Pyl z dlouhých jezerních sledů
            umožňuje zkoumat vývoj krajiny a klimatu i v období
            před přibližně 3 600 000 lety.{" "}
            <SourceLink id="DOI_10_5194_cp_10_1017_2014">(Andreev a kol. 2014)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
