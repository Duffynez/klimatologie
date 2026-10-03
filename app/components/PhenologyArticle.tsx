import Image from "next/image";
import { SourceLink } from "./SourceLink";

export function PhenologyArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>Fenologie</dt>
            <dd>Sledování každoročně se opakujících fází života rostlin a živočichů a jejich načasování.</dd>
          </div>
          <div>
            <dt>Fenofáze</dt>
            <dd>Přesně popsaná pozorovatelná fáze, například první otevřený květ, přítomnost listů nebo tah ptáků.</dd>
          </div>
          <div>
            <dt>Den roku</dt>
            <dd>Pořadové číslo dne od 1. ledna. Například 1. duben je v nepřestupném roce den 91.</dd>
          </div>
          <div>
            <dt>Vegetační sezóna</dt>
            <dd>Část roku, během níž je sledovaná vegetace aktivní; její začátek a konec závisejí na použité definici.</dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Jedno datum nemůže popsat veškerou živou přírodu. U každého výsledku proto uvádíme organismus nebo porost,
          konkrétní fázi, místo, období a způsob, kterým bylo datum určeno.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Fenologické pozorování je datum nebo sled opakovaných záznamů o přesně vymezené, sezónně se opakující fázi
          organismu či porostu. U rostlin může jít o rašení listů, otevření květů, dozrávání plodů, zbarvení listů nebo
          jejich opad. U živočichů se zaznamenává například začátek a průběh tahu, snášení vajec, líhnutí nebo doba, kdy
          jsou jedinci určitého vývojového stadia přítomni. Každá fáze má vlastní definici a vlastní datum nebo průběh.
          Takto fenofázi vymezují standardní protokoly{" "}
          <SourceLink id="DOI_10_1007_s00484_014_0789_5">Denny et al., 2014</SourceLink>, evropská{" "}
          <SourceLink id="WEB_openagrar_de_Meier_2001_stupnice_BBCH_f90d8917">
            stupnice BBCH
          </SourceLink>{" "}
          i evropská databáze <SourceLink id="DOI_10_1111_nph_70869">PEP725</SourceLink>.
        </p>

        <p>
          U označené rostliny lze opakovaně odpovídat, zda je fáze přítomna, nepřítomna nebo zda si pozorovatel není
          jistý. Současně lze určit její intenzitu: počet květů, podíl otevřených květů nebo procento koruny s listy.
          Výsledek pak neobsahuje jen první zaznamenaný den, ale také trvání a velikost jevu. U pohyblivých živočichů
          se stejná myšlenka převádí na počet zjištěných jedinců a jejich postupný součet během sezóny; z něj lze určit den,
          kdy bylo zaznamenáno například 10, 50 nebo 90 % celkového počtu.{" "}
          <SourceLink id="DOI_10_1007_s00484_014_0789_5">Denny et al., 2014</SourceLink>;{" "}
          <SourceLink id="DOI_10_1111_j_2041_210x_2010_00020_x">Moussus et al., 2010</SourceLink>
        </p>

        <p>
          Kamery a družice sledují jinou úroveň. Z opakovaných obrazů určují změny barvy a množství zelené vegetace v
          koruně, na louce nebo v obrazovém bodu krajiny. Z křivky během roku se odvozuje začátek zelenání, vrchol,
          ústup zeleně a konec sezóny. Takové datum popisuje pozorovaný porost nebo zemský povrch, nikoli první list či
          květ určitého druhu. Způsob převodu obrazu na sezónní údaje popisují{" "}
          <SourceLink id="DOI_10_1038_sdata_2018_28">Richardson et al., 2018</SourceLink>,{" "}
          <SourceLink id="DOI_10_1016_s0034_4257_02_00135_9">Zhang et al., 2003</SourceLink> a
          současné produkty <SourceLink id="DOI_10_5067_modis_mcd12q2_061">MODIS MCD12Q2</SourceLink>.
          MODIS označuje zobrazovací spektrometry středního rozlišení, které na družicích měří záření
          v několika barevných a infračervených pásmech.
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Posouvatelný graf způsobů zápisu fenofází">
            <Image
              className="article-figure__media"
              src="/media/phenology/denny-event-status-intensity.png"
              alt="Srovnání jediného data události, opakovaných záznamů přítomnosti a záznamů přítomnosti s intenzitou u listů a květů"
              width={2286}
              height={1004}
              sizes="(max-width: 900px) 100vw, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Tři způsoby zápisu téhož sezónního děje. Nahoře je pouze první den události. Uprostřed jsou opakovaná
            pozorování přítomnosti (černý bod) a nepřítomnosti (prázdný bod). Dole je navíc intenzita: vlevo podíl
            koruny s listy a zbarvenými listy, vpravo počet otevřených květů. Panel a zachycuje listy jednoho javoru
            cukrového v Maine, panel b květy jedné zlatice v Massachusetts v roce 2012. Druhé krátké kvetení na konci
            roku je vidět jen v opakovaných záznamech. Vodorovná osa udává den roku. Dole vlevo plná křivka
            a kruhy ukazují přítomné listy, přerušovaná křivka a trojúhelníky zbarvené listy. Počty květů
            vpravo mají násobkovou stupnici 1, 10, 100, 1 000 a 10 000. Zdroj:{" "}
            <SourceLink id="DOI_10_1007_s00484_014_0789_5">Denny et al., 2014, obr. 1</SourceLink>,
            licence CC BY.
          </figcaption>
        </figure>

        <h2>Historie pozorování</h2>
        <p>
          Nejstarší údaje často nevznikaly jako součást dnešní pozorovací sítě. V Kjótu lze dobu plného kvetení
          okrasných třešní odvozovat z datovaných dvorských deníků, kronik a záznamů o slavnostech. Nejstarší použitý
          záznam pochází z roku 812, mezi jednotlivými staletími však zůstávají mezery a měnil se význam i přesnost
          zápisu. Od devatenáctého století se uplatňují přímá pozorování a od dvacátého století také údaje
          meteorologické služby. Původ a výběr těchto historických zpráv popsali{" "}
          <SourceLink id="DOI_10_1002_joc_1594">Aono a Kazui, 2008</SourceLink>.
        </p>

        <p>
          Jinou podobu mělo soustavné zapisování sezónních fází přímo za účelem poznávání přírody. Disertace{" "}
          <SourceLink id="WEB_db_huntbot_org_Original_Linnaean_Dissertations_Hunt_Institute_f_b8827d4c">Calendarium Florae</SourceLink>,
          kterou pod Linného vedením obhájil Alexander Malachias Berger 31. března 1756, uspořádala dobu kvetení
          rostlin podle měsíců a ročních období. Vycházela z pozorování v Uppsale roku 1755; Hunt Institute
          zpřístupňuje katalogový záznam i digitalizovaný původní tisk.
        </p>

        <p>
          V devatenáctém a dvacátém století začaly vznikat regionální a státní sítě s formuláři, seznamem druhů a
          společnými definicemi. Mezinárodní fenologické zahrady přidaly další kontrolu: od roku 1959 se na různých
          místech Evropy sledují dřeviny původně rozmnožované ze stejných matečných rostlin. Takové klony pomáhají
          omezit vliv genetických rozdílů mezi lokalitami. Síť ale postupně měnila zdroje sadebního materiálu,
          takže nelze genetickou shodu předpokládat u každé dnešní výsadby. Vývoj od první zahrady z roku 1957
          a začátku sítě roku 1959 dokládají{" "}
          <SourceLink id="DOI_10_1007_s00484_021_02185_y">Renner a Chmielewski, 2021</SourceLink>.
        </p>

        <p>
          Družicové snímky umožnily sledovat sezónu celých porostů. Zhang a kolegové v roce 2003 popsali postup,
          který prokládal průběh vegetačního indexu z přístroje MODIS matematickou křivkou a z jejího tvaru
          určoval sezónní přechody. Současný produkt MCD12Q2 už používá jiný výpočet, popsaný níže. Mezi
          jednotlivou rostlinou a družicovým pohledem dnes stojí automatické kamery, které fotografují stále
          stejný porost, často několikrát za hodinu.{" "}
          <SourceLink id="DOI_10_1016_s0034_4257_02_00135_9">Zhang et al., 2003</SourceLink>;{" "}
          <SourceLink id="DOI_10_5194_essd_17_6531_2025">Young et al., 2025</SourceLink>
        </p>

        <h2>Jak vzniká zveřejněný záznam</h2>
        <h3>Jednotlivá rostlina</h3>
        <p>
          Pozorovatel nejprve určí druh, místo a konkrétní rostlinu. Pro každou návštěvu zapíše datum a stav přesně
          formulované fáze, například „jsou vidět otevřené květy?“. Odpověď „ne“ je stejně důležitá jako „ano“:
          poslední nepřítomnost a první přítomnost vymezují interval začátku pozorované epizody. Jestliže 1. května
          květy nebyly a 11. května už byly otevřené, zaznamenáme první přítomnost 11. května, ale neznáme přesný
          den otevření. Krátké kvetení mezi návštěvami může zůstat zcela nezachyceno. Častější návštěvy tento
          interval zkracují. <SourceLink id="DOI_10_1007_s00484_014_0789_5">Denny et al., 2014</SourceLink>
        </p>

        <p>
          Pro srovnání druhů a sítí se původní názvy fází převádějí na společný slovník. BBCH je název dvoumístné
          stupnice vývoje rostlin, odvozený od názvů institucí, které se podílely na jejím vzniku. První číslice
          rozděluje vývoj rostlin do hlavních skupin: 0 klíčení či rašení, 1 vývoj listů, 5 vznik květenství, 6
          kvetení, 8 zrání plodů a 9 stárnutí nebo nástup klidu. Databáze PEP725 uchovává původní druh, fázi, místo,
          rok a den roku a převádí záznamy partnerských sítí na odpovídající kódy BBCH. Druhá číslice upřesňuje fázi:
          například v obecné stupnici 61 znamená 10 % otevřených květů a 65 plné kvetení. Podrobnou definici je potřeba číst pro danou
          skupinu rostlin; samotné shodné číslo neodstraní rozdíly starších pozorovacích pokynů.{" "}
          <SourceLink id="WEB_openagrar_de_Meier_2001_stupnice_BBCH_f90d8917">Meier, 2001</SourceLink>;{" "}
          <SourceLink id="DOI_10_1111_nph_70869">Templ et al., 2026</SourceLink>
        </p>

        <h3>Populace a pohybliví živočichové</h3>
        <p>
          U skupiny rostlin lze uvést den, kdy danou fázi dosáhlo 10, 50 nebo 90 % sledovaných jedinců. U ptáků,
          motýlů a dalších pohyblivých živočichů se během sezóny opakují sčítání na stejném místě a stejným postupem.
          Denní počty se postupně sčítají. Den dosažení poloviny celkového počtu je medián průchodu; den největšího
          počtu je jiný ukazatel, vrchol aktivity. Vedle data musí zůstat informace o délce návštěvy, počtu pozorovatelů, ploše, zařízení a
          dnech bez měření, protože změna úsilí mění pravděpodobnost, že bude jedinec zaznamenán.
        </p>

        <p>
          Datum úplně prvního pozorovaného jedince je zvlášť citlivé na počet návštěv a velikost populace. Při větším
          počtu pozorovatelů roste šance zachytit mimořádně časného jedince, i kdyby se načasování celé populace
          nezměnilo. Moussus a kolegové porovnali deset ukazatelů na uměle vytvořených datech se známým posunem
          sezóny, různými počty jedinců a mezerami v pozorování. V průměru nejlépe vycházelo průměrné datum
          a vyhlazení průběhu, první výskyt byl méně spolehlivý. Pořadí metod ale záviselo na tvaru sezóny;
          ani prostřední datum není vždy nejlepší. Staré prameny někdy nic jiného než první datum
          neobsahují; takový výsledek je použitelný, pokud je označen a porovnává se s obdobně vzniklými údaji.{" "}
          <SourceLink id="DOI_10_1111_j_2041_210x_2010_00020_x">Moussus et al., 2010</SourceLink>
        </p>

        <p>
          Meteorologický radar zachycuje záření rozptýlené objekty ve vzduchu. Z intenzity a změny frekvence
          vráceného signálu se odvozuje množství a pohyb rozptylujících objektů. Nejdříve se musí oddělit srážky:
          postup MistNet například využívá algoritmus naučený na radarových obrazech a ověřený proti ručnímu
          označení deště. Zbylý signál ještě není seznam ptačích druhů; může obsahovat i hmyz a další objekty.
          Radar proto doplňuje druhově rozlišené odchyty, ale nenahrazuje je.{" "}
          <SourceLink id="DOI_10_1111_2041_210x_13280">Lin et al., 2019</SourceLink>
        </p>

        <h3>Kamery</h3>
        <p>
          Fenologická kamera pořizuje stále ze stejného směru fotografie porostu. Správce na obrazu vyznačí oblast,
          která obsahuje sledovaný typ vegetace a vynechá oblohu, budovy nebo části, jež se nemají započítat. Pro
          každý snímek se zprůměrují hodnoty červeného, zeleného a modrého kanálu ve vybrané oblasti. Podíl zelené
          barvy, označovaný Gcc, je zelená dělená součtem všech tří hodnot. Kamera má mít pevné vyvážení bílé,
          aby automatické úpravy barvy nevytvářely falešnou sezónní změnu. Kontrola odhaluje sníh, mlhu, kapky
          na objektivu nebo posunutý záběr. Z jednodenních či třídenních skupin snímků se používá například
          90. percentil: hodnota, pod níž leží 90 % naměřených hodnot. Tím se omezuje kolísání osvětlení.
          Vyhlazená křivka pak určuje dny dosažení 10, 25 a 50 % rozdílu mezi sezónním minimem a maximem
          i interval nejistoty těchto dnů. Nejde o procenta rozvinutých listů.{" "}
          <SourceLink id="DOI_10_1038_sdata_2018_28">Richardson et al., 2018</SourceLink>
        </p>

        <p>
          Část kamer pořizuje vedle běžného snímku také obraz s blízkým infračerveným zářením. Z dvojice vzniká
          cameraNDVI, kamerová obdoba normalizovaného rozdílového vegetačního indexu. Porovnává blízké infračervené
          a červené záření po zohlednění expozice. Není to další nezávislá síť ani automaticky stejná veličina
          jako index z kalibrované družicové odrazivosti.{" "}
          <SourceLink id="DOI_10_1016_j_agrformet_2014_05_008">Petach et al., 2014</SourceLink>
        </p>
        <p>
          Verze PhenoCam 3 zahrnuje 738 míst, převážně v Severní Americe, s různě dlouhými záznamy v období
          2000–2023. Pouze 58 záznamů z hlavní skupiny standardizovaných kamer dosahuje alespoň deseti let.
          Archiv zveřejňuje snímky, vyznačení sledované oblasti, barevné ukazatele a data přechodů odvozená z Gcc.
          Pro cameraNDVI verze 3 zveřejňuje denní a třídenní hodnoty, ale přechodová data z něj nepočítá.{" "}
          <SourceLink id="DOI_10_5194_essd_17_6531_2025">Young et al., 2025</SourceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Posouvatelný graf kamerových ukazatelů">
            <Image
              className="article-figure__media"
              src="/media/phenology/phenocam-greenness-comparison.png"
              alt="Roční průběh dvou ukazatelů zelenosti z fenologických kamer ve dvou listnatých lesích"
              width={1892}
              height={913}
              sizes="(max-width: 900px) 100vw, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Dva ukazatele ze stejných kamerových záběrů listnatého lesa: fialové body jsou cameraNDVI, zelená čára
            vyhlazený podíl zelené barvy Gcc. Vlevo je stanoviště Morgan Monroe v roce 2022, vpravo Harvard Forest v
            roce 2019. Prudký jarní vrchol Gcc vzniká velmi sytou barvou mladých listů; cameraNDVI jej nemá a na podzim
            klesá pozvolněji. Vodorovná osa uvádí měsíce (Feb únor, Apr duben, Jun červen, Aug srpen,
            Oct říjen, Dec prosinec), levá svislá osa cameraNDVI a pravá Gcc; hodnoty na obou
            osách jsou bezrozměrné. Graf ukazuje průběhy ukazatelů, nikoli dvě shodná měření data rašení. Zdroj:{" "}
            <SourceLink id="DOI_10_5194_essd_17_6531_2025">Young et al., 2025, obr. 5</SourceLink>,
            licence CC BY 4.0.
          </figcaption>
        </figure>

        <h3>Družice</h3>
        <p>
          Družicový přístroj měří záření, které k němu přichází v několika pásmech vlnových délek. Po korekcích
          vlivu atmosféry a úhlu pozorování vzniká odhad odrazivosti povrchu. Produkt MCD12Q2 z přístrojů MODIS
          na družicích Terra a Aqua z ní počítá EVI2, dvoupásmový vylepšený vegetační index využívající červené
          a blízké infračervené záření. Vyřadí nebo sníží váhu nekvalitních pozorování a průběh vyhladí po částech
          navazujícími křivkami. Výpočet využívá i sousední roky, aby sezóna mohla překročit 31. prosinec.
        </p>
        <p>
          Ve verzi 6.1 je začátek zelenání den, kdy vyhlazený index vystoupá na 15 % rozdílu mezi minimem
          a maximem daného cyklu. Další přechody používají 50 a 90 %; při poklesu se hledají stejné hranice
          v opačném směru. Hranice 15 % tedy neznamená, že 15 % stromů má listy. Podrobná data se ukládají
          pro nejvýše dva nejvýraznější cykly, spolu s hodnocením kvality. V souboru jsou data vyjádřena jako
          počet dnů od 1. ledna 1970, takže je před srovnáním s terénním dnem roku nutný převod.{" "}
          <SourceLink id="WEB_U_S_Geological_Survey_Prirucka_MCD12Q2_v6_1_dbceb14f">Příručka MCD12Q2 v6.1</SourceLink>
        </p>
        <p>
          Nejistota roste tam, kde se vegetační index během roku mění jen málo nebo kde chybějí dobré snímky.
          Příručka upozorňuje zejména na slabý sezónní signál stálezelených lesů ve vysokých zeměpisných šířkách:
          začátek může vycházet příliš časně a konec příliš pozdě. Prostřední přechody na hranici 50 % bývají
          v takových případech stabilnější. Výsledek proto potřebuje kontrolu kvality a srovnání s jiným měřením,
          samotné zveřejněné datum ještě nezaručuje dobře zachycenou sezónu.{" "}
          <SourceLink id="WEB_U_S_Geological_Survey_Prirucka_MCD12Q2_v6_1_dbceb14f">Příručka MCD12Q2 v6.1</SourceLink>
        </p>

        <p>
          Jeden bod MODIS nebo VIIRS má přibližně 500 × 500 metrů a může obsahovat několik druhů, půdu i vodu. Datum
          začátku zelenání proto patří směsi odrazů v tomto bodu. Evropský produkt HR-VPP, tedy fenologie
          a produktivita vegetace ve vysokém rozlišení, využívá družice Sentinel-2 a vytváří
          desetimetrové mapy od roku 2017, ale i zde jde o vlastnost povrchu. Vyšší rozlišení zmenšuje mísení různých
          porostů; nepřevádí družicový výsledek na datum prvního listu konkrétní rostliny.{" "}
          <SourceLink id="DOI_10_1016_j_rse_2018_06_047">Zhang et al., 2018</SourceLink>;{" "}
          <SourceLink id="DOI_10_2909_5ae0f2a2_7ad8_4f7c_878d_f1b09d78d7a1">Copernicus HR-VPP</SourceLink>
        </p>

        <h2>Zveřejňovaná data</h2>
        <p>
          Fenologická data mají různou základní jednotku. Terénní tabulka může obsahovat každý jednotlivý zápis
          „ano/ne/nejisté“, jiná pouze odvozené datum fáze. Kamerový soubor přidává obrazy, masku porostu, denní
          ukazatele barvy a přechodová data. Družicový produkt ukládá každoročně několik dat a příznaků kvality pro
          každý obrazový bod. Při stažení je proto potřeba vybrat nejen období a území, ale také úroveň zpracování.
        </p>

        <div className="article-data-list">
          <section className="article-data-item">
            <h3>PEP725</h3>
            <p>
              Přibližně 16 milionů evropských pozorování rostlin. Nejstarší jednotlivé údaje sahají do konce
              osmnáctého století, soustavné sítě převážně k roku 1950. Podle portálu při revizi v říjnu 2026
              pochází asi 14 milionů záznamů z německé meteorologické služby DWD. Ukázkový soubor je dostupný
              přímo; úplný výběr vyžaduje registraci, souhlas s podmínkami a uvedení účelu použití. Licence se
              liší podle poskytovatele, celý archiv proto nelze označit jedinou licencí CC BY.
            </p>
            <p>
              V ukázkové tabulce lze sledovat celý zápis: číslo stanice, souřadnice, druh, kód fáze, rok,
              den roku, kalendářní datum a licenci. První řádek například zaznamenává sněženku
              (<i>Galanthus nivalis</i>), fázi 60, na stanici 3618 dne 7. ledna 2014. Číslo fáze je nutné
              číst se slovníkem poskytovatele; samotný řádek není výpočtem klimatického trendu.
            </p>
            <p>
              <SourceLink id="WEB_pep725_eu_Dataset_PEP725_5a0c6dbb">Data, ukázkový soubor a podmínky přístupu</SourceLink>{" · "}
              <SourceLink id="DOI_10_1111_nph_70869">Popis databáze z roku 2026</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>USA National Phenology Network</h3>
            <p>
              Jednotlivá pozorování rostlin a živočichů z programu Nature&apos;s Notebook od roku 2009 a připojené
              historické údaje šeříků a zimolezů od roku 1955. Portál umožňuje vybrat datum, oblast, druh a fenofázi a
              stáhnout výsledek jako tabulku.
            </p>
            <p>
              <SourceLink id="WEB_pct_usanpn_org_Observational_Data_USA_National_Phenology_Networ_1b964494">Výběr a stažení dat</SourceLink>{" · "}
              <SourceLink id="DOI_10_5066_f78s4n1v">Trvalý identifikátor souboru</SourceLink>{" · "}
              <SourceLink id="DOI_10_3133_ofr20181060">Dokumentace</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>NEON Plant Phenology</h3>
            <p>
              Opakovaná pozorování označených rostlin na stanovištích americké sítě NEON. Tabulky obsahují stav a
              intenzitu jednotlivých fází, údaje o rostlině, návštěvě i kontrole kvality. NEON je americká
              Národní síť ekologických observatoří. Soubory lze stáhnout po lokalitách a měsících nebo získat
              přes programové rozhraní, označované API.
            </p>
            <p>
              <SourceLink id="WEB_data_neonscience_org_NEON_Data_Product_94759182">Popis, dokumentace a stažení</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>UK Nature&apos;s Calendar</h3>
            <p>
              Historická a dobrovolnická pozorování rostlin a živočichů ve Spojeném království. Úplný provozní archiv
              spravuje Woodland Trust, který vyřizuje žádosti o výzkumná data. Studie prvního kvetení 406 druhů
              v letech 1753–2019 odkazuje na tento archiv. Její veřejný doplněk obsahuje pět doplňujících
              obrázků s popisky; není to soubor všech 419 354 původních pozorování.
            </p>
            <p>
              <SourceLink id="WEB_naturescalendar_woodlandtrus_Nature_s_Calendar_b68eee94">Portál a vkládání pozorování</SourceLink>{" · "}
              <SourceLink id="DOI_10_6084_m9_figshare_c_5800155">Doplňkový materiál studie Büntgen et al.</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>Radarová migrace ptáků</h3>
            <p>
              Dvě veřejné tabulky pro jaro a podzim uvádějí dny dosažení 10, 50 a 90 % souhrnného tahového
              pohybu u 143 radarů v souvislé části USA v období 1995–2018. Jde o již odvozená sezónní data,
              nikoli původní radarové snímky nebo druhové počty. Balíček na Figshare má licenci CC BY 4.0.
            </p>
            <p>
              <SourceLink id="DOI_10_6084_m9_figshare_10062239_v1">Popis a stažení obou tabulek</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>PhenoCam v3</h3>
            <p>
              Kontrolovaná verze snímků a odvozených hodnot z 738 stanovišť za roky 2000–2023. Jednotlivá místa lze
              prohlížet a stahovat v portálu; datový archiv laboratoře Oak Ridge vyžaduje bezplatný účet NASA Earthdata. Průběžná data jsou
              novější, ale neprošla stejnou závěrečnou kontrolou jako verze 3.
            </p>
            <p>
              <SourceLink id="DOI_10_3334_ornldaac_2364">Původní snímky</SourceLink>{" · "}
              <SourceLink id="DOI_10_3334_ornldaac_2389">Odvozená data</SourceLink>{" · "}
              <SourceLink id="WEB_phenocam_nau_edu_PhenoCam_Explorer_V3_173fd14b">Prohlížeč míst</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>MODIS a VIIRS</h3>
            <p>
              Globální každoroční mapy sezónního vývoje vegetace v rozlišení 500 metrů. MODIS MCD12Q2 začíná rokem
              2001; citovaná verze VIIRS VNP22Q2.002 poskytuje výsledky od roku 2013. VIIRS je zobrazovací
              přístroj pro viditelné a infračervené záření na družici Suomi NPP. Oba produkty používají různé
              výpočty sezónních přechodů, takže je nelze prostě spojit do jednoho dlouhodobého záznamu.
              Soubory ve formátu HDF, který ukládá více datových vrstev v jednom souboru, jsou dostupné
              po bezplatném přihlášení k NASA Earthdata.
            </p>
            <p>
              <SourceLink id="DOI_10_5067_modis_mcd12q2_061">MODIS MCD12Q2 v6.1</SourceLink>{" · "}
              <SourceLink id="DOI_10_5067_viirs_vnp22q2_002">VIIRS VNP22Q2 v2</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>Copernicus HR-VPP</h3>
            <p>
              Každoroční desetimetrové mapy evropské vegetace od roku 2017. Pro nejvýše dvě sezóny poskytují datum
              začátku a konce, délku, vrchol a ukazatele produktivity spolu s příznakem kvality. Data jsou volná a
              stahují se podle území a roku.
            </p>
            <p>
              <SourceLink id="WEB_Copernicus_Seasonal_Productivity_2017_present_raster_10_m_E_9528f67a">
                Prohlížení a stažení
              </SourceLink>{" · "}
              <SourceLink id="DOI_10_2909_5ae0f2a2_7ad8_4f7c_878d_f1b09d78d7a1">Trvalý identifikátor</SourceLink>
            </p>
          </section>
        </div>

        <h2>Srovnání pozorovacích postupů</h2>
        <p>
          Terénní pozorování označeného jedince přesně spojuje datum s druhem a fází, ale počet míst je omezený a
          výsledek závisí na četnosti návštěv. Záznam celé populace zachytí začátek, střed i konec jevu, vyžaduje však
          soustavné sčítání se stálým úsilím. Kamera měří denní proměnu stejného porostu a dovoluje zpětně zkontrolovat
          obraz, ale pokrývá jen svůj záběr a změna kamery či masky může záznam přerušit. Družice poskytuje pravidelné
          mapy rozsáhlých území, její obrazový bod však mísí více jedinců a často i více druhů.
        </p>

        <p>
          Také názvy výsledků nejsou automaticky zaměnitelné. „První květ“ jednotlivé rostliny, „50 % jedinců kvete“,
          jarní vzestup Gcc z kamery a začátek růstu EVI2 v družicovém bodu mohou připadnout na čtyři různé dny. Shoda
          nebo rozdíl mezi nimi je samostatný výsledek. Než rozdíl označíme za chybu měření, musíme porovnat
          definice a plochu, kterou každý přístroj vidí. Ve srovnání VIIRS a kamer PhenoCam pro roky 2013–2014
          činil průměrný absolutní rozdíl dat 7–11 dnů při jarním zelenání a 10–13 dnů při podzimním ústupu
          vegetace. Tato čísla platí pro družicový EVI2 a konkrétní kamerový index VCI, který zachycuje barevný
          kontrast vegetace včetně podzimních odstínů; nejsou univerzální chybou všech družicových dat.{" "}
          <SourceLink id="DOI_10_1016_j_agrformet_2014_05_008">Petach et al., 2014</SourceLink>;{" "}
          <SourceLink id="DOI_10_1016_j_agrformet_2018_03_003">Zhang et al., 2018</SourceLink>
        </p>

        <p>
          Srovnání oblastí musí počítat také s tím, co v archivech chybí. PEP725 obsahuje přibližně 16 milionů
          pozorování, ale 14 milionů dodala německá síť. PhenoCam má 738 stanovišť, většinu v Severní Americe. Globální
          souhrn ptačí fenologie od Romana a kolegů zahrnuje pět kontinentů, avšak 50,05 % podkladů pochází z Evropy,
          33,65 % ze Severní Ameriky a žádný z Jižní či Střední Ameriky. Počet záznamů proto není totéž co rovnoměrné
          pokrytí planety. <SourceLink id="WEB_pep725_eu_Dataset_PEP725_5a0c6dbb">PEP725, datový portál</SourceLink>;{" "}
          <SourceLink id="DOI_10_5194_essd_17_6531_2025">Young et al., 2025</SourceLink>;{" "}
          <SourceLink id="DOI_10_1002_ecm_1552">Romano et al., 2023</SourceLink>
        </p>

        <h2 id="pozorovani">Pozorování</h2>
        <h3>Rostliny v Evropě</h3>
        <p>
          Evropské vyhodnocení pro roky 1971–2000 shromáždilo přes 125 000 dlouhodobých záznamů pro 542
          rostlinných a 19 živočišných druhů ve 21 zemích. Jeden takový záznam sleduje druh a fázi na určitém
          místě po více let; číslo neoznačuje jednotlivé návštěvy. Do souhrnu rostlinných trendů vstoupilo
          103 199 kombinací s alespoň 15 pozorovanými roky. Pro každou autoři proložili datum fáze přímkou
          podle roku a spočítali její sklon. U rašení, kvetení a zrání mělo 78 % trendů směr k dřívějším dnům;
          30 % všech těchto trendů bylo statisticky průkazných směrem dopředu a 3 % směrem dozadu.
          Průměrný posun jarních a letních fází činil 2,5 dne za desetiletí dopředu. Podzimní zbarvení a opad
          neměly obdobně jednotný směr.{" "}
          <SourceLink id="DOI_10_1111_j_1365_2486_2006_01193_x">Menzel et al., 2006</SourceLink>
        </p>

        <p>
          Novější zpracování vybralo pozorování z Německa, Rakouska a Švýcarska z období 1951–2018. Do výpočtu
          vstoupilo 96 996 kombinací druhu, fáze a stanice s nejméně 30 pozorovanými roky a posledním pozorováním v roce 2000
          nebo později; samotných zápisů bylo přes 4,25 milionu. U rašení listů a kvetení mělo 89 % výsledků dřívější
          načasování a 54 % bylo statisticky průkazných. Průměr činil 0,240 dne za rok směrem k dřívějšímu datu. U
          zbarvení listů bylo 57 % výsledků pozdějších a průměrný posun činil 0,036 dne za rok směrem k pozdějšímu
          datu. Při posuzování průkaznosti autoři zohlednili, že současně testují mnoho trendů, mezi nimiž mohou
          některé vyjít náhodně. Obě evropská zpracování z velké části čerpají ze stejných národních sítí:
          novější studie prodlužuje a znovu zpracovává podklady, není zcela nezávislým opakováním měření.{" "}
          <SourceLink id="DOI_10_1111_gcb_15000">Menzel et al., 2020</SourceLink>
        </p>

        <p>
          Britský soubor prvního kvetení obsahuje po kontrole 419 354 pozorování 406 druhů z let 1753–2019.
          Autoři odstranili duplicity a při více datech stejného druhu, místa a roku ponechali nejčasnější.
          Soubor zahrnuje také Jersey, Guernsey a ostrov Man. Průměrný
          den roku byl 132 v části do roku 1986 a 106 v letech 1987–2019, tedy o 25,94 dne dříve v novější části.
          Srovnání zahrnuje jiné počty pozorování, měnící se zastoupení míst a druhů a mimořádně dlouhé časové rozpětí;
          neznamená proto, že každý druh na každém místě posunul kvetení přesně o 26 dnů. Autoři zveřejnili také
          oddělené výsledky pro růstové formy, sever a jih, města a venkov i soubor 25 druhů zaznamenávaných v obou
          částech. <SourceLink id="DOI_10_1098_rspb_2021_2456">Büntgen et al., 2022</SourceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Posouvatelný graf britského kvetení">
            <Image
              className="article-figure__media"
              src="/media/phenology/buntgen-uk-flowering-1753-2019.jpg"
              alt="Rozdělení 419 354 britských pozorování prvního kvetení podle dne roku a dvou období"
              width={782}
              height={380}
              sizes="(max-width: 900px) 100vw, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Rozložení 419 354 britských dat prvního kvetení během roku. Šedá ukazuje všechna pozorování z let
            1753–2019, modrá 122 574 pozorování do roku 1986 a červená 296 780 pozorování z let 1987–2019. Svislé čáry
            označují průměrný den každého souboru: 132 ve starší a 106 v novější části, rozdíl 25,94 dne. Graf zobrazuje
            rozdělení všech zahrnutých zápisů, nikoli křivku jediného druhu nebo stejné skupiny míst v každém roce.
            Vodorovná osa je den roku (DOY); záporné hodnoty označují kvetení už na podzim předchozího roku.
            Svislá osa uvádí počty pozorování v tisících.
            Zdroj: <SourceLink id="DOI_10_1098_rspb_2021_2456">Büntgen et al., 2022, obr. 2</SourceLink>,
            licence CC BY 4.0.
          </figcaption>
        </figure>

        <h3>Ptáci</h3>
        <p>
          Druhově rozlišený pohled poskytlo 2 826 588 kroužkovacích záznamů lesňáčků, americké skupiny drobných
          pěvců. Šlo o 19 druhů v Severní Americe v období 1961–2018. Odchyty autoři seskupili do buněk o velikosti
          půl zeměpisného stupně: 46 pro jaro a 124 pro podzim. To nejsou nutně jednotlivé kroužkovací stanice.
          Každá zařazená sezóna musela mít alespoň 25 dnů odchytů a 15 ptáků daného druhu; místa musela poskytovat
          nejméně deset let pozorování. Počítal se den dosažení poloviny odchytů, tedy medián průchodu.
        </p>
        <p>
          Ve statistickém modelu, který zohlednil také teplotu a polohu, mělo na jaře průkazný posun s rokem
          osm druhů: sedm k dřívějším a jeden k pozdějším dnům. Na podzim bylo průkazných dvanáct druhů,
          sedm dřívějších a pět pozdějších. Společný podzimní trend přes všechny druhy průkazný nebyl.
          Výsledek tak závisí na části roku a druhu; model navíc odděluje změnu spojenou s rokem od souvislosti
          s teplotou, takže jeho sklon není prostým celkovým posunem pozorovaných dat.{" "}
          <SourceLink id="DOI_10_1111_1365_2656_13887">Horton et al., 2023</SourceLink>
        </p>

        <p>
          Celosvětová metaanalýza, tedy společné statistické vyhodnocení mnoha prací, spojila 5 589 výsledků
          pro 684 druhů. Podklady sahají do období 1811–2018, jednotlivé záznamy však trvaly průměrně asi 39 let.
          Autoři odděleně vyhodnotili počáteční a prostřední část sezóny a zohlednili příbuznost druhů i výsledky
          pocházející ze stejných studií. Předhnízdní tah a
          hnízdění se v průměru posunuly o přibližně 2–3 dny za desetiletí k dřívějším termínům. U tahu po hnízdění
          nebyla společná změna statisticky průkazná. Výsledek má výrazně nerovnoměrné zeměpisné pokrytí a zahrnuje
          různé ukazatele počátku i středu sezóny; popisuje proto průměr přes zveřejněné podklady, ne jednotný posun
          každého ptačího druhu na Zemi.{" "}
          <SourceLink id="DOI_10_1002_ecm_1552">Romano et al., 2023</SourceLink>
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            V evropských pozorováních rostlin nastává většina jarních a letních fází dříve než v minulých
            desetiletích. V letech 1971–2000 se dřívější rašení, kvetení nebo zrání objevilo u 78 % sledovaných
            případů a průměrný posun činil 2,5 dne za desetiletí. V Německu, Rakousku a Švýcarsku mělo v letech
            1951–2018 dřívější průběh 89 % sledovaných případů rašení a kvetení, zatímco zbarvení listů se u 57 % případů
            posouvalo k pozdějším datům. Britská pozorování prvního kvetení měla v období 1987–2019 průměrné datum
            téměř o 26 dnů dřívější než záznamy do roku 1986. U ptáků se předhnízdní tah a hnízdění v celosvětovém
            souhrnu posunuly přibližně o dva až tři dny za desetiletí k dřívějším termínům.
          </p>
        </div>

        <h2>Prameny a data</h2>
        <div className="article-source-groups">
          <section>
            <h3>Definice a terénní metody</h3>
            <ul>
              <li><SourceLink id="DOI_10_1007_s00484_014_0789_5">Denny et al., 2014: standardizované sledování stavu a intenzity fenofází</SourceLink></li>
              <li><SourceLink id="WEB_openagrar_de_Meier_2001_stupnice_BBCH_f90d8917">Meier, 2001: stupnice BBCH</SourceLink></li>
              <li><SourceLink id="DOI_10_1111_nph_70869">Templ et al., 2026: evropská databáze PEP725</SourceLink></li>
              <li><SourceLink id="DOI_10_1111_2041_210x_13280">Lin et al., 2019: oddělení srážek od biologického radarového signálu</SourceLink></li>
              <li><SourceLink id="DOI_10_1111_j_2041_210x_2010_00020_x">Moussus et al., 2010: porovnání deseti ukazatelů sezónního načasování</SourceLink></li>
            </ul>
          </section>

          <section>
            <h3>Historické prameny</h3>
            <ul>
              <li><SourceLink id="WEB_db_huntbot_org_Original_Linnaean_Dissertations_Hunt_Institute_f_b8827d4c">Berger a Linnaeus, 1756: Calendarium Florae, původní tisk a PDF</SourceLink></li>
              <li><SourceLink id="DOI_10_1002_joc_1594">Aono a Kazui, 2008: rekonstrukce kvetení třešní v Kjótu</SourceLink></li>
              <li><SourceLink id="DOI_10_1007_s00484_021_02185_y">Renner a Chmielewski, 2021: historie Mezinárodních fenologických zahrad</SourceLink></li>
            </ul>
          </section>

          <section>
            <h3>Současná pozorování</h3>
            <ul>
              <li><SourceLink id="DOI_10_1111_j_1365_2486_2006_01193_x">Menzel et al., 2006: více než 125 000 dlouhodobých evropských záznamů v letech 1971–2000</SourceLink>.
                Autorský text začíná na straně 157 souboru PDF v univerzitním repozitáři.</li>
              <li><SourceLink id="DOI_10_1111_gcb_15000">Menzel et al., 2020: rostlinné fáze v Německu, Rakousku a Švýcarsku 1951–2018</SourceLink></li>
              <li><SourceLink id="DOI_10_1098_rspb_2021_2456">Büntgen et al., 2022: první kvetení ve Spojeném království 1753–2019</SourceLink></li>
              <li><SourceLink id="DOI_10_1111_1365_2656_13887">Horton et al., 2023: šest desetiletí kroužkovacích záznamů lesňáčků</SourceLink></li>
              <li><SourceLink id="DOI_10_1002_ecm_1552">Romano et al., 2023: celosvětový souhrn ptačího tahu a hnízdění</SourceLink></li>
            </ul>
          </section>

          <section>
            <h3>Kamery a družice</h3>
            <ul>
              <li><SourceLink id="DOI_10_1038_sdata_2018_28">Richardson et al., 2018: metodika a první verze PhenoCam</SourceLink></li>
              <li><SourceLink id="DOI_10_5194_essd_17_6531_2025">Young et al., 2025: PhenoCam v3, 738 míst a data do roku 2023</SourceLink></li>
              <li><SourceLink id="DOI_10_1016_s0034_4257_02_00135_9">Zhang et al., 2003: odvození sezónních přechodů z MODIS</SourceLink></li>
              <li><SourceLink id="DOI_10_1016_j_rse_2018_06_047">Zhang et al., 2018: vznik a ověření produktu VIIRS</SourceLink></li>
              <li><SourceLink id="DOI_10_1016_j_agrformet_2018_03_003">Zhang et al., 2018: porovnání přechodových dat VIIRS a PhenoCam</SourceLink></li>
              <li><SourceLink id="DOI_10_5067_modis_mcd12q2_061">MODIS MCD12Q2 v6.1</SourceLink> a{" "}
                <SourceLink id="DOI_10_5067_viirs_vnp22q2_002">VIIRS VNP22Q2 v2</SourceLink>: globální data ke stažení.</li>
              <li><SourceLink id="DOI_10_2909_5ae0f2a2_7ad8_4f7c_878d_f1b09d78d7a1">Copernicus HR-VPP</SourceLink>: desetimetrová evropská data od roku 2017.</li>
            </ul>
          </section>

          <section>
            <h3>Obrazy a podmínky použití</h3>
            <ul>
              <li>
                Metodický obraz pochází z{" "}
                <SourceLink id="DOI_10_1007_s00484_014_0789_5">Denny et al., 2014, obr. 1</SourceLink>.
                Článek i obraz jsou zveřejněny pod licencí CC BY; převzatý soubor je z univerzitní výukové kopie se
                zachovaným odkazem na původní práci.
              </li>
              <li>
                Graf kvetení pochází z{" "}
                <SourceLink id="DOI_10_1098_rspb_2021_2456">Büntgen et al., 2022, obr. 2</SourceLink>,
                publikovaného pod licencí CC BY 4.0.
              </li>
              <li>
                Kamerový graf pochází z{" "}
                <SourceLink id="DOI_10_5194_essd_17_6531_2025">Young et al., 2025, obr. 5</SourceLink>,
                publikovaného pod licencí CC BY 4.0. Všechny tři obrazy jsou převzaty beze změny; české vysvětlení je
                uvedeno v popisku stránky.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
