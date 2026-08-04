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
          i databáze <SourceLink id="DOI_10_1007_s00484_018_1512_8">PEP725</SourceLink>.
        </p>

        <p>
          U označené rostliny lze opakovaně odpovídat, zda je fáze přítomna, nepřítomna nebo zda si pozorovatel není
          jistý. Současně lze určit její intenzitu: počet květů, podíl otevřených květů nebo procento koruny s listy.
          Výsledek pak neobsahuje jen první zaznamenaný den, ale také trvání a velikost jevu. U pohyblivých živočichů
          se stejná myšlenka převádí na počet zjištěných jedinců nebo na kumulovaný průběh sezóny; z něj lze určit den,
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
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/phenology/denny-event-status-intensity.png"
            alt="Srovnání jediného data události, opakovaných záznamů přítomnosti a záznamů přítomnosti s intenzitou u listů a květů"
            width={2286}
            height={1004}
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption>
            Tři způsoby zápisu téhož sezónního děje. Nahoře je pouze první den události. Uprostřed jsou opakovaná
            pozorování přítomnosti (černý bod) a nepřítomnosti (prázdný bod). Dole je navíc intenzita: vlevo podíl
            koruny s listy a zbarvenými listy, vpravo počet otevřených květů. Panel a zachycuje listy jednoho javoru
            cukrového v Maine, panel b květy jedné zlatice v Massachusetts v roce 2012. Druhé krátké kvetení na konci
            roku je vidět jen v opakovaných záznamech. Zdroj:{" "}
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
          Robert Marsham začal roku 1736 na svém panství v anglickém Norfolku zapisovat 27 každoročních „znamení
          jara“, mezi nimi první listy, květy a přílety ptáků. Po jeho smrti pokračovali členové rodiny; odborné
          zpracování používá záznamy do roku 1947. Ve Švédsku vznikl jiný typ práce: Linného{" "}
          <SourceLink id="WEB_db_huntbot_org_Original_Linnaean_Dissertations_Hunt_Institute_f_b8827d4c">Calendarium Florae</SourceLink>, obhájený 31.
          března 1756, uspořádal dobu kvetení rostlin podle pozorování v Uppsale roku 1755. Marshamův soubor později
          vyhodnotili <SourceLink id="DOI_10_2307_2261570">Sparks a Carey, 1995</SourceLink>.
        </p>

        <p>
          V devatenáctém a dvacátém století začaly vznikat regionální a státní sítě s formuláři, seznamem druhů a
          společnými definicemi. Mezinárodní fenologické zahrady přidaly další kontrolu: od roku 1959 se na různých
          místech Evropy sledují geneticky shodné dřeviny rozmnožené z téhož materiálu. Tím se omezuje rozdíl mezi
          jednotlivými odrůdami. Vývoj sítě od první zahrady založené roku 1957 shrnují{" "}
          <SourceLink id="DOI_10_1007_s00484_021_02185_y">Brügger a Vassella, 2022</SourceLink>.
        </p>

        <p>
          Celoplošný pohled vznikl až s opakovanými družicovými snímky. První postupy odvozovaly sezónu vegetace z
          časového průběhu indexu zeleně v kilometrových obrazových bodech. Produkt MODIS od roku 2001 poskytuje
          každoroční údaje v rozlišení 500 metrů; evropský Copernicus od roku 2017 vytváří obdobné údaje ze Sentinel-2
          v rozlišení 10 metrů. Mezi terénem a družicí dnes stojí automatické kamery, které fotografují stále stejný
          porost obvykle několikrát za hodinu.{" "}
          <SourceLink id="DOI_10_1016_0034_4257_94_90014_0">Reed et al., 1994</SourceLink>;{" "}
          <SourceLink id="DOI_10_5194_essd_17_6531_2025">Young et al., 2025</SourceLink>
        </p>

        <h2>Jak vzniká zveřejněný záznam</h2>
        <h3>Jednotlivá rostlina</h3>
        <p>
          Pozorovatel nejprve určí druh, místo a konkrétní rostlinu. Pro každou návštěvu zapíše datum a stav přesně
          formulované fáze, například „jsou vidět otevřené květy?“. Odpověď „ne“ je stejně důležitá jako „ano“:
          poslední nepřítomnost a první přítomnost vymezují interval, ve kterém fáze začala. Jestliže byly návštěvy 1.
          a 11. května, nelze začátek vydávat za přesně známý den; nastal někdy mezi nimi. Častější návštěvy tento
          interval zkracují. <SourceLink id="DOI_10_1007_s00484_014_0789_5">Denny et al., 2014</SourceLink>
        </p>

        <p>
          Pro srovnání druhů a sítí se původní názvy fází převádějí na společný slovník. Dvoumístná stupnice BBCH
          rozděluje vývoj rostlin do hlavních skupin: 0 klíčení či rašení, 1 vývoj listů, 5 vznik květenství, 6
          kvetení, 8 zrání plodů a 9 stárnutí nebo nástup klidu. Databáze PEP725 uchovává původní druh, fázi, místo,
          rok a den roku a převádí záznamy partnerských sítí na odpovídající kódy BBCH. Převod usnadňuje porovnání,
          avšak nezaručuje, že starší pozorovatelé v různých zemích používali úplně stejné podrobnosti definice.{" "}
          <SourceLink id="DOI_10_1007_s00484_018_1512_8">Templ et al., 2018</SourceLink>
        </p>

        <h3>Populace a pohybliví živočichové</h3>
        <p>
          U skupiny rostlin lze uvést den, kdy danou fázi dosáhlo 10, 50 nebo 90 % sledovaných jedinců. U ptáků,
          motýlů a dalších pohyblivých živočichů se během sezóny opakují sčítání na stejném místě a stejným postupem.
          Z denních počtů vznikne kumulovaný průběh; jeho polovina je medián průchodu a vrchol je den nejvyšší
          odhadnuté aktivity. Vedle data musí zůstat informace o délce návštěvy, počtu pozorovatelů, ploše, zařízení a
          dnech bez měření, protože změna úsilí mění pravděpodobnost, že bude jedinec zaznamenán.
        </p>

        <p>
          Datum úplně prvního pozorovaného jedince je zvlášť citlivé na počet návštěv a velikost populace. Při větším
          počtu pozorovatelů roste šance zachytit mimořádně časného jedince, i kdyby se načasování celé populace
          nezměnilo. Simulace deseti běžných ukazatelů ukázaly, že pro průběh celé sezóny jsou stabilnější vážený
          průměr, percentily nebo vyhlazená křivka než první záznam. Staré prameny někdy nic jiného než první datum
          neobsahují; takový výsledek je použitelný, pokud je označen a porovnává se s obdobně vzniklými údaji.{" "}
          <SourceLink id="DOI_10_1111_j_1365_2745_2008_01436_x">Miller-Rushing et al., 2008</SourceLink>;{" "}
          <SourceLink id="DOI_10_1007_s00442_008_0959_4">van Strien et al., 2008</SourceLink>;{" "}
          <SourceLink id="DOI_10_1111_j_2041_210x_2010_00020_x">Moussus et al., 2010</SourceLink>
        </p>

        <h3>Kamery</h3>
        <p>
          Fenologická kamera pořizuje stále ze stejného směru fotografie porostu. Správce na obrazu vyznačí oblast,
          která obsahuje sledovaný typ vegetace a vynechá oblohu, budovy nebo části, jež se nemají započítat. Pro
          každý snímek se z červeného, zeleného a modrého kanálu počítá podíl zelené barvy Gcc: zelená dělená součtem
          červené, zelené a modré. Snímky se kontrolují kvůli sněhu, mlze, kapkám, změně záběru a automatickému vyvážení
          bílé. Denní hodnoty se vyhladí a z rostoucí a klesající části křivky se určí přechodová data.{" "}
          <SourceLink id="DOI_10_1038_sdata_2018_28">Richardson et al., 2018</SourceLink>
        </p>

        <p>
          Část kamer pořizuje vedle běžného snímku také obraz s blízkým infračerveným zářením. Z dvojice vzniká
          cameraNDVI, druhý pohled na proměnu porostu. Verze PhenoCam 3 zahrnuje snímky z let 2000–2023 na 738 místech,
          většinou v Severní Americe. Zveřejňuje původní obrazy, denní barvové hodnoty i odvozená přechodová data; u
          každého místa zůstává maska sledované části obrazu a údaj o kontrole kvality.{" "}
          <SourceLink id="DOI_10_5194_essd_17_6531_2025">Young et al., 2025</SourceLink>
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/phenology/phenocam-greenness-comparison.png"
            alt="Roční průběh dvou ukazatelů zelenosti z fenologických kamer ve dvou listnatých lesích"
            width={1892}
            height={913}
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption>
            Dva ukazatele ze stejných kamerových záběrů listnatého lesa: fialové body jsou cameraNDVI, zelená čára
            vyhlazený podíl zelené barvy Gcc. Vlevo je stanoviště Morgan Monroe v roce 2022, vpravo Harvard Forest v
            roce 2019. Prudký jarní vrchol Gcc vzniká velmi sytou barvou mladých listů; cameraNDVI jej nemá a na podzim
            klesá pozvolněji. Křivky tedy zachycují odlišné vlastnosti téhož porostu a jejich přechodová data nemusejí
            být shodná. Zdroj:{" "}
            <SourceLink id="DOI_10_5194_essd_17_6531_2025">Young et al., 2025, obr. 5</SourceLink>,
            licence CC BY 4.0.
          </figcaption>
        </figure>

        <h3>Družice</h3>
        <p>
          Družicový přístroj změří odraz světla v několika vlnových délkách. Po odstranění oblaků, jejich stínů a
          nekvalitních pozorování se pro každý obrazový bod sestaví průběh indexu zeleně během roku. MODIS MCD12Q2
          používá EVI2 odvozený z červeného a blízkého infračerveného záření. Algoritmus proloží pozorování křivkou a
          pro nejvýše dva vegetační cykly určí začátek růstu zeleně, její maximum, začátek poklesu a klidovou část roku.
          Součástí jsou příznaky kvality pro celý bod i jednotlivá data.{" "}
          <SourceLink id="WEB_U_S_Geological_Survey_Prirucka_MCD12Q2_v6_1_dbceb14f">Příručka MCD12Q2 v6.1</SourceLink>
        </p>

        <p>
          Jeden bod MODIS nebo VIIRS má přibližně 500 × 500 metrů a může obsahovat několik druhů, půdu i vodu. Datum
          začátku zelenání proto patří směsi odrazů v tomto bodu. Evropský HR-VPP využívá Sentinel-2 a vytváří
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
              osmnáctého století, soustavné sítě převážně k roku 1950. Pokrytí je silně nerovnoměrné; asi 14 milionů
              záznamů pochází z německé sítě DWD. Původní fáze jsou přiřazeny ke stupnici BBCH.
            </p>
            <p>
              <SourceLink id="WEB_pep725_eu_Dataset_PEP725_5a0c6dbb">Data a ukázkový soubor CC BY 4.0</SourceLink>{" · "}
              <SourceLink id="DOI_10_1007_s00484_018_1512_8">Popis databáze</SourceLink>
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
              intenzitu jednotlivých fází, údaje o rostlině, návštěvě i kontrole kvality. Soubory lze stáhnout po
              lokalitách a měsících nebo získat přes rozhraní API.
            </p>
            <p>
              <SourceLink id="WEB_data_neonscience_org_NEON_Data_Product_94759182">Popis, dokumentace a stažení</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>UK Nature&apos;s Calendar</h3>
            <p>
              Historická a dobrovolnická pozorování rostlin a živočichů ve Spojeném království. Úplný provozní archiv
              spravuje Woodland Trust; data použitá pro studii prvního kvetení 406 druhů v letech 1753–2019 jsou
              popsána a doložena v jejích doplňkových souborech.
            </p>
            <p>
              <SourceLink id="WEB_naturescalendar_woodlandtrus_Nature_s_Calendar_b68eee94">Portál a vkládání pozorování</SourceLink>{" · "}
              <SourceLink id="DOI_10_6084_m9_figshare_c_5800155">Soubory studie Büntgen et al.</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>Radarová migrace ptáků</h3>
            <p>
              Odvozená data ke studii nočního tahu nad souvislými Spojenými státy za 24 let. Obsahují sezónní
              načasování z meteorologických radarů; veřejný balíček na Figshare má popis souborů a licenci CC BY 4.0.
            </p>
            <p>
              <SourceLink id="DOI_10_6084_m9_figshare_10062239_v1">Data studie</SourceLink>{" · "}
              <SourceLink id="DOI_10_1038_s41558_019_0648_9">Odborný článek</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>PhenoCam v3</h3>
            <p>
              Kontrolovaná verze snímků a odvozených hodnot z 738 stanovišť za roky 2000–2023. Jednotlivá místa lze
              prohlížet a stahovat v portálu; archiv ORNL vyžaduje bezplatný účet NASA Earthdata. Průběžná data jsou
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
              2001; VIIRS VNP22Q2 navazuje měřením od roku 2012. Soubory HDF, příznaky kvality a dokumentaci lze
              bezplatně stáhnout po přihlášení k NASA Earthdata.
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
          nebo rozdíl mezi nimi je samostatný výsledek, nikoli chyba, pokud každý údaj odpovídá své zveřejněné
          definici. Studie, které porovnávají terén, kamery a družice, proto pracují s konkrétními přechody a uvádějí
          prostorové rozlišení i nejistotu data.{" "}
          <SourceLink id="DOI_10_1016_j_agrformet_2014_05_008">Petach et al., 2014</SourceLink>;{" "}
          <SourceLink id="DOI_10_1016_j_agrformet_2018_03_003">Zhang et al., 2018</SourceLink>
        </p>

        <p>
          Srovnání oblastí musí počítat také s tím, co v archivech chybí. PEP725 obsahuje přibližně 16 milionů
          pozorování, ale 14 milionů dodala německá síť. PhenoCam má 738 stanovišť, většinu v Severní Americe. Globální
          souhrn ptačí fenologie od Romana a kolegů zahrnuje pět kontinentů, avšak 50,05 % podkladů pochází z Evropy,
          33,65 % ze Severní Ameriky a žádný z Jižní či Střední Ameriky. Počet záznamů proto není totéž co rovnoměrné
          pokrytí planety. <SourceLink id="DOI_10_1007_s00484_018_1512_8">Templ et al., 2018</SourceLink>;{" "}
          <SourceLink id="DOI_10_5194_essd_17_6531_2025">Young et al., 2025</SourceLink>;{" "}
          <SourceLink id="DOI_10_1002_ecm_1552">Romano et al., 2023</SourceLink>
        </p>

        <h2 id="pozorovani">Pozorování</h2>
        <h3>Rostliny v Evropě</h3>
        <p>
          Nejrozsáhlejší společné evropské vyhodnocení pro roky 1971–2000 zahrnulo více než 125 000 měření v čase pro
          542 rostlinných a 19 živočišných druhů ve 21 zemích. Z pozorování rašení listů, kvetení a zrání plodů mělo 78
          % dřívější průběh; u 30 % byl posun statisticky průkazný. Statisticky průkazné pozdější načasování měly 3 %.
          Průměrný posun jarních a letních fází činil 2,5 dne za desetiletí směrem k dřívějším dnům. Výsledky zbarvení
          a opadu listů neměly v tomto souboru jednotný směr.{" "}
          <SourceLink id="DOI_10_1111_j_1365_2486_2006_01193_x">Menzel et al., 2006</SourceLink>
        </p>

        <p>
          Novější zpracování použilo úplná pozorování z Německa, Rakouska a Švýcarska v letech 1951–2018. Do výpočtu
          vstoupilo 96 996 kombinací druhu, fáze a stanice s délkou alespoň 30 let a posledním pozorováním v roce 2000
          nebo později; samotných zápisů bylo přes 4,25 milionu. U rašení listů a kvetení mělo 89 % výsledků dřívější
          načasování a 54 % bylo statisticky průkazných. Průměr činil 0,240 dne za rok směrem k dřívějšímu datu. U
          zbarvení listů bylo 57 % výsledků pozdějších a průměrný posun činil 0,036 dne za rok směrem k pozdějšímu
          datu. Síla i směr se lišily mezi fázemi a mezi třicetiletými obdobími.{" "}
          <SourceLink id="DOI_10_1111_gcb_15000">Menzel et al., 2020</SourceLink>
        </p>

        <p>
          Britský soubor prvního kvetení obsahuje po kontrole 419 354 pozorování 406 druhů z let 1753–2019. Průměrný
          den roku byl 132 v části do roku 1986 a 106 v letech 1987–2019, tedy o 25,94 dne dříve v novější části.
          Srovnání zahrnuje jiné počty pozorování, měnící se zastoupení míst a druhů a mimořádně dlouhé časové rozpětí;
          neznamená proto, že každý druh na každém místě posunul kvetení přesně o 26 dnů. Autoři zveřejnili také
          oddělené výsledky pro růstové formy, sever a jih, města a venkov i soubor 25 druhů zaznamenávaných v obou
          částech. <SourceLink id="DOI_10_1098_rspb_2021_2456">Büntgen et al., 2022</SourceLink>
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/phenology/buntgen-uk-flowering-1753-2019.jpg"
            alt="Rozdělení 419 354 britských pozorování prvního kvetení podle dne roku a dvou období"
            width={782}
            height={380}
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption>
            Rozložení 419 354 britských dat prvního kvetení během roku. Šedá ukazuje všechna pozorování z let
            1753–2019, modrá 122 574 pozorování do roku 1986 a červená 296 780 pozorování z let 1987–2019. Svislé čáry
            označují průměrný den každého souboru: 132 ve starší a 106 v novější části, rozdíl 25,94 dne. Graf zobrazuje
            rozdělení všech zahrnutých zápisů, nikoli křivku jediného druhu nebo stejné skupiny míst v každém roce.
            Zdroj: <SourceLink id="DOI_10_1098_rspb_2021_2456">Büntgen et al., 2022, obr. 2</SourceLink>,
            licence CC BY 4.0.
          </figcaption>
        </figure>

        <h3>Ptáci</h3>
        <p>
          Meteorologické radary umožnily sledovat noční tah nad celými souvislými Spojenými státy stejným typem
          měření. Zpracování 24 let zjistilo, že průměrné datum vrcholu tahu se posunulo k dřívějším dnům na jaře i na
          podzim; velikost změny byla obecně větší ve vyšších zeměpisných šířkách. Radar nerozlišuje jednotlivé druhy,
          ale zaznamenává souhrnný pohyb stovek druhů přes kontinent a jeho výsledek nezávisí na počtu dobrovolníků v
          terénu. <SourceLink id="DOI_10_1038_s41558_019_0648_9">Horton et al., 2020</SourceLink>
        </p>

        <p>
          Druhově rozlišený pohled poskytlo 2 826 588 okroužkovaných lesňáčků 19 druhů na 46 jarních a 124 podzimních
          stanovištích v Severní Americe v letech 1961–2018. Autoři počítali medián průchodu, nikoli pouze prvního
          ptáka. Směr dlouhodobé změny nebyl společný všem druhům a oběma částem roku; u některých druhů a míst byl
          patrný dřívější průchod, u jiných nebyla lineární změna průkazná.{" "}
          <SourceLink id="DOI_10_1111_1365_2656_13887">Horton et al., 2023</SourceLink>
        </p>

        <p>
          Celosvětová metaanalýza spojila více než 5 500 výsledků pro 684 druhů z let 1811–2018. Předhnízdní tah a
          hnízdění se v průměru posunuly o přibližně 2–3 dny za desetiletí k dřívějším termínům. U tahu po hnízdění
          nebyla společná změna statisticky průkazná. Výsledek má výrazně nerovnoměrné zeměpisné pokrytí a zahrnuje
          různé ukazatele počátku i středu sezóny; popisuje proto průměr přes zveřejněné podklady, ne jednotný posun
          každého ptačího druhu na Zemi.{" "}
          <SourceLink id="DOI_10_1002_ecm_1552">Romano et al., 2023</SourceLink>
        </p>

        <h3>Co lze z těchto výsledků říci společně</h3>
        <p>
          Přímá evropská pozorování rostlin ukazují převahu dřívějšího rašení, kvetení a zrání v posledních
          desetiletích, zatímco podzimní zbarvení a opad mají slabší a méně jednotný průběh. Britský historický soubor
          ukazuje výrazně dřívější rozložení prvního kvetení v letech 1987–2019 než v předchozí části archivu. U ptáků
          se dřívější načasování objevuje v souhrnném radarovém tahu, v části kroužkovacích měření a v globálním
          souhrnu předhnízdního tahu a hnízdění; tah po hnízdění společný průkazný posun nevykazuje. Rozsah změny není
          stejný mezi druhy, fázemi, místy ani částmi roku.
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
              <li><SourceLink id="DOI_10_1007_s00484_018_1512_8">Templ et al., 2018: evropská databáze PEP725</SourceLink></li>
              <li><SourceLink id="DOI_10_1111_j_1365_2745_2008_01436_x">Miller-Rushing et al., 2008: přesnost prvních dat kvetení</SourceLink></li>
              <li><SourceLink id="DOI_10_1007_s00442_008_0959_4">van Strien et al., 2008: vliv počtu pozorování na první záznam</SourceLink></li>
              <li><SourceLink id="DOI_10_1111_j_2041_210x_2010_00020_x">Moussus et al., 2010: porovnání deseti ukazatelů sezónního načasování</SourceLink></li>
            </ul>
          </section>

          <section>
            <h3>Historické prameny</h3>
            <ul>
              <li><SourceLink id="WEB_db_huntbot_org_Original_Linnaean_Dissertations_Hunt_Institute_f_b8827d4c">Berger a Linnaeus, 1756: Calendarium Florae, původní tisk a PDF</SourceLink></li>
              <li><SourceLink id="DOI_10_2307_2261570">Sparks a Carey, 1995: Marshamova pozorování 1736–1947</SourceLink></li>
              <li><SourceLink id="DOI_10_1002_joc_1594">Aono a Kazui, 2008: rekonstrukce kvetení třešní v Kjótu</SourceLink></li>
              <li><SourceLink id="DOI_10_1007_s00484_021_02185_y">Brügger a Vassella, 2022: historie Mezinárodních fenologických zahrad</SourceLink></li>
            </ul>
          </section>

          <section>
            <h3>Současná pozorování</h3>
            <ul>
              <li><SourceLink id="DOI_10_1111_j_1365_2486_2006_01193_x">Menzel et al., 2006: 125 000 evropských měření v letech 1971–2000</SourceLink></li>
              <li><SourceLink id="DOI_10_1111_gcb_15000">Menzel et al., 2020: rostlinné fáze v Německu, Rakousku a Švýcarsku 1951–2018</SourceLink></li>
              <li><SourceLink id="DOI_10_1098_rspb_2021_2456">Büntgen et al., 2022: první kvetení ve Spojeném království 1753–2019</SourceLink></li>
              <li><SourceLink id="DOI_10_1038_s41558_019_0648_9">Horton et al., 2020: noční tah ptáků z meteorologických radarů</SourceLink></li>
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
