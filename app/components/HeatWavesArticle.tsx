import Image from "next/image";
import { SourceLink } from "./SourceLink";

export function HeatWavesArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>Denní maximum</dt>
            <dd>Nejvyšší teplota vzduchu zaznamenaná na stanici během vymezeného pozorovacího dne.</dd>
          </div>
          <div>
            <dt>Denní minimum</dt>
            <dd>Nejnižší teplota vzduchu zaznamenaná během téhož dne; obvykle nastává v noci nebo ráno.</dd>
          </div>
          <div>
            <dt>Percentil</dt>
            <dd>Hranice v seřazeném souboru hodnot. Pod 90. percentilem nebo na něm leží přibližně 90 % srovnávaných měření.</dd>
          </div>
          <div>
            <dt>Referenční období</dt>
            <dd>Určený úsek minulých měření, vůči němuž se posuzují další roky; například léta 1961–1990.</dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Vlna veder se vždy určuje z denních teplot podle zveřejněného pravidla. K číslu proto patří teplotní
          veličina, hranice, nejkratší délka události, roční období, území a sledované roky.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Vlna veder je souvislé období několika dnů s neobvykle vysokou teplotou. Pro její vyhledání v měřeních
          se stanoví teplotní hranice a pravidlo trvání. Z denních měření lze určit, kolik takových událostí nastalo, kolik dnů dohromady trvaly a o kolik
          byla hranice překročena. Každý výsledek proto patří k přesnému pravidlu, podle kterého byly události v
          měřeních vyhledány.
        </p>

        <p>
          Definice se liší podle toho, jakou vlastnost horka potřebujeme zachytit. Některé požadují překročení
          hranice každý den, jiné posuzují průměr za několik dnů. Metodické srovnání{" "}
          <SourceLink id="DOI_10_1175_jcli_d_12_00383_1">Perkins a Alexander, 2013</SourceLink>{" "}
          proto hodnotí zvlášť události z denních maxim, minim a kombinovaného ukazatele. Slova „vlna veder“ sama
          o sobě ještě neurčují výpočet. Zde sledujeme teplotu vzduchu nad souší; zdravotní zátěž by vyžadovala
          další údaje, například vlhkost, a samostatné vyhodnocení.
        </p>

        <h3>Dva způsoby určení hranice</h3>
        <p>
          Pevná hranice má v každém místě stejnou hodnotu. V české klimatologii je například tropický den dnem, kdy
          denní maximum dosáhne alespoň 30 °C. Počet tropických dnů je přímo srozumitelný, ale jednotlivý tropický den
          ještě nevytváří vícedenní událost. Pro vlnu veder musí být navíc určeno, kolik takových dnů má následovat bez
          přerušení. Přehled českých definic a měření zveřejňuje{" "}
          <SourceLink id="WEB_Cesky_hydrometeorologicky_us_Vlny_veder_v_historii_a_dnes_27ba4cfb">Český hydrometeorologický ústav</SourceLink>.
        </p>

        <p>
          Místní hranice se odvozuje zvlášť pro každou stanici nebo bod mapy a část roku. Často se používá 90.
          percentil: v referenčním období byla pro daný kalendářní den vyšší denní maxima přibližně v jedné desetině
          případů. Hranice tak může být jiná v Helsinkách, Praze a Aténách a současně se během roku mění. Tento způsob
          umožňuje srovnávat neobvykle teplá období vzhledem k místním podmínkám, nikoli stejnou absolutní teplotu ve
          všech oblastech. Podrobné vymezení používají například{" "}
          <SourceLink id="DOI_10_1175_jcli_d_12_00383_1">Perkins a Alexander, 2013</SourceLink>.
        </p>

        <h3>Den, noc a trvání</h3>
        <p>
          Hranici lze vztáhnout k dennímu maximu, minimu nebo průměru. Denní maximum zachycuje nejteplejší část dne,
          minimum obvykle souvisí s nočním ochlazením. Je to však nejnižší hodnota celého pozorovacího dne,
          nikoli automaticky měření za přesně vymezenou noc. Také denní průměr se může počítat z různě častých
          odečtů nebo jen z maxima a minima. <SourceLink id="DOI_10_1175_jcli_d_12_00383_1">Perkins a Alexander, 2013</SourceLink>
          {" "}tyto teplotní veličiny při porovnání definic důsledně rozlišují.
        </p>

        <p>
          Ukazatel EHF, anglicky <em>Excess Heat Factor</em>, kombinuje neobvyklost horka vzhledem k místnímu
          klimatu a k předchozím dnům. V původní práci se denní teplota vypočítá jako průměr maxima a minima.
          Průměr za tři dny se potom porovná s místním 95. percentilem všech dnů let 1971–2000 a s průměrem
          předcházejících třiceti dnů. Překročení dlouhodobé hranice určuje výskyt horka; rozdíl proti nedávnému
          počasí upravuje jeho intenzitu. Tato definice nevyžaduje, aby hranici samostatně překročil každý ze tří
          dnů. Výpočet i volbu pozorovacího dne vysvětlují{" "}
          <SourceLink id="DOI_10_3390_ijerph120100227">Nairn a Fawcett, 2015</SourceLink>.
        </p>

        <p>
          Také nejkratší délka mění počet nalezených událostí. Definice se třemi dny zachytí více krátkých případů než
          definice se šesti dny, pokud ostatní pravidla zůstanou stejná. Globální archiv vln veder a teplých období
          GHWR, anglicky <em>Global Heatwave and Warm-Spell Record</em>, proto zveřejnil souběžné výpočty pro 2, 3, 4, 5, 6, 7 a 10 po
          sobě jdoucích dnů a pro několik pevných i místních hranic. Nejde o sedm verzí téhož čísla, ale o záměrné
          měření citlivosti výsledku na volbu pravidla.{" "}
          <SourceLink id="DOI_10_1038_sdata_2018_206">Raei et al., 2018</SourceLink>
        </p>

        <h3>Standardní ukazatel WSDI</h3>
        <p>
          Ukazatel trvání teplých období WSDI, anglicky <em>Warm Spell Duration Index</em>, počítá za rok všechny dny, které patří do období alespoň šesti po sobě
          jdoucích dnů s denním maximem nad místním 90. percentilem. Hranice se pro každý kalendářní den počítá z
          pětidenního okna v referenčním období, často z let 1961–1990. Výsledek má jednotku dnů za rok. WSDI tedy
          neudává počet událostí ani délku nejdelší z nich: dvě šestidenní události dávají 12 dnů stejně jako jedna
          dvanáctidenní. Počítají se i neobvykle teplá období mimo léto, která nemusí být horká v absolutních
          stupních Celsia. Percentilovou definici používá globální analýza{" "}
          <SourceLink id="DOI_10_1029_2005jd006290">Alexander et al., 2006</SourceLink> a současné provedení
          dokumentuje <SourceLink id="WEB_Met_Office_uzivatelska_prirucka_HadEX3_6eb86927">uživatelská příručka HadEX3</SourceLink>.
        </p>

        <h3>Co lze z jedné definice spočítat</h3>
        <p>
          Ze stejného seznamu událostí lze zveřejnit několik výsledků. Počet událostí říká, kolikrát byla podmínka
          splněna. Celkový počet dnů sečte všechny dny uvnitř událostí. Délka může označovat nejdelší událost nebo
          průměrnou délku; intenzita může být absolutní teplotou či překročením hranice. Význam musí být uveden
          u konkrétního výsledku. Jednotný rámec pro takové srovnání navrhli{" "}
          <SourceLink id="DOI_10_1175_jcli_d_12_00383_1">Perkins a Alexander, 2013</SourceLink> a
          součet denních překročení přidala globální analýza{" "}
          <SourceLink id="DOI_10_1038_s41467_020_16970_7">Perkins-Kirkpatrick a Lewis, 2020</SourceLink>.
        </p>

        <p>
          Součet překročení současně zachycuje délku i velikost teplotní odchylky. Při překročení o 2 °C ve třech
          dnech dostaneme 6 °C·den, tedy šest stupňodnů. Autoři jej nazývají <em>cumulative heat</em> a v grafech
          používají zkrácenou jednotku °C. Jde o součet denních teplotních odchylek; množství energie přijaté
          člověkem, půdou nebo atmosférou tím změřeno není. Dvě epizody se stejným součtem mohou mít jinou délku
          a jiné nejvyšší teploty.
        </p>

        <h2>Historie měření</h2>
        <p>
          Dlouhé záznamy denních maxim a minim vznikly později než měsíční průměry. Střední Anglie má souvislý
          soubor denní průměrné teploty od roku 1772, zatímco přímo použitelné denní maximum a minimum začíná rokem
          1878. Způsob sestavení a pozdější opravy tohoto historického souboru popsali{" "}
          <SourceLink id="DOI_10_1002_joc_3370120402">Parker et al., 1992</SourceLink> a{" "}
          <SourceLink id="DOI_10_1002_joc_1190">Parker a Horton, 2005</SourceLink>. Je to regionální
          měření, nikoli globální obraz, ale ukazuje, jak dlouhá musí být denní pozorování, chceme-li ve starších
          obdobích vyhledávat několikadenní teplotní události.
        </p>

        <p>
          <SourceLink id="DOI_10_3354_cr019193">Frich a spoluautoři v roce 2002</SourceLink>
          {" "}spojili přibližně 3 000 dlouhodobých záznamů ročních ukazatelů do globálního přehledu deseti
          teplotních a srážkových extrémů. Každý použitý záznam měl nejméně čtyřicet let v období 1946–1999.
          Jejich ukazatel HWDI sledoval nejdelší alespoň šestidenní úsek s maximem o více než 5 °C nad obvyklou
          hodnotou daného data v letech 1961–1990. V tropech tato hranice často nedala žádnou událost, protože
          tam teplota mezi dny kolísá méně. Náhradu pevného rozdílu percentilem, tedy přechod k WSDI, vysvětlují{" "}
          <SourceLink id="DOI_10_1029_2005jd006290">Alexander et al., 2006</SourceLink>.
          Změnil se tím nejen zdroj dat, ale i význam ukazatele: WSDI sčítá všechny vyhovující dny v roce.
        </p>

        <p>
          <SourceLink id="DOI_10_1029_2019jd032263">HadEX3 zveřejněný Dunnem a spoluautory v roce 2020</SourceLink>
          {" "}spojil staniční ukazatele extrémů do pravidelné zeměpisné mřížky pro léta 1901–2018.
          <SourceLink id="DOI_10_1029_2023ea003279"> Rozšíření z roku 2024</SourceLink>
          {" "}přidalo ukazatele určené mimo jiné pro zemědělství a zdraví, například dny s maximem alespoň 30 °C
          nebo další charakteristiky vln veder. Historické pokrytí se tím neprodloužilo za rok 2018. Aktuální
          vydání 3.0.4 je nadále pevně vymezeným výzkumným souborem.
        </p>

        <h2>Jak vzniká zveřejněný záznam</h2>
        <h3>Od teploměru k dennímu maximu a minimu</h3>
        <p>
          Meteorologická stanice měří teplotu vzduchu čidlem, které se s okolním vzduchem tepelně vyrovnává.
          Dříve se běžně odečítala poloha kapaliny v teploměru, dnes se často měří elektrický odpor platinového
          čidla, který se s teplotou mění. Převod na stupně Celsia se ověřuje porovnáním s kalibrovaným
          referenčním teploměrem. Radiační kryt omezuje přímé sluneční ohřívání přístroje a zároveň umožňuje
          proudění vzduchu. Doporučená výška je 1,25–2 metry nad zemí. Principy a zdroje chyb popisuje{" "}
          <SourceLink id="WEB_World_Meteorological_Organiz_prirucka_WMO_c_8_f7933a04">
            příručka Světové meteorologické organizace (WMO), svazek I, kapitola 2
          </SourceLink>.
        </p>

        <p>
          Maximum a minimum uchová speciální teploměr nebo se vyberou z průběžných elektronických odečtů.
          Pozorovací den může končit například večer či ráno; nemusí odpovídat kalendářnímu dni od půlnoci.
          Umístění stanice, kryt, typ čidla, interval záznamu i čas odečtu proto patří k metadatům, tedy popisu
          okolností měření. Přesun stanice může změnit denní maxima, přestože je nové čidlo správně kalibrované.
          Při spojování starých a nových měření se sledují překryvy a rozdíly vůči okolním stanicím. Konkrétní
          opravy a jejich nejistoty pro střední Anglii rozebírají{" "}
          <SourceLink id="DOI_10_1002_joc_1190">Parker a Horton, 2005</SourceLink>.
        </p>

        <p>
          Národní služby posílají denní souhrny do společných archivů. Globální síť historických klimatologických
          denních měření GHCN-Daily vybírá při překryvu zdrojů jednu
          preferovanou hodnotu a používá automatické kontroly rozsahu, vnitřní shody, opakovaných hodnot i neobvyklých
          rozdílů vůči okolním stanicím. Podezřelé údaje dostanou příznak kvality a původní hodnota zůstává dohledatelná.
          Automatická kontrola jednotlivých chyb se liší od homogenizace, tedy opravy dlouhodobých změn
          způsobených například přesunem stanice. GHCN-Daily takovou jednotnou globální opravu neprovádí.
          Pro analýzu trendu je nutné ověřit, jak s těmito změnami naložil navazující výzkum.{" "}
          <SourceLink id="DOI_10_1175_jtech_d_11_00103_1">Menne et al., 2012</SourceLink>
        </p>

        <h3>Místní hranice a souvislé události</h3>
        <p>
          U percentilové definice se nejprve pro každou stanici a kalendářní den vytvoří místní hranice. Okolní dny
          se spojují do pohyblivého okna, aby výpočet nestál jen na třiceti hodnotách stejného data. Pro 15. červenec
          tak pětidenní okno zahrne 13.–17. červenec každého referenčního roku: při úplných třiceti letech až
          150 měření. Z jejich rozdělení se určí hranice; velikost okna patří k definici ukazatele. Potom algoritmus
          prochází den po dni a označí úseky, v nichž je hranice překročena požadovaný počet dnů bez přerušení. Z těchto
          úseků se spočítají události, dny, délka a zvolená míra intenzity.{" "}
          <SourceLink id="DOI_10_1029_2005jd006290">Alexander et al., 2006</SourceLink>
        </p>

        <p>
          Percentil vypočtený z omezeného referenčního období má vlastní výběrovou nejistotu. Bez opravy by se stejná
          data použitá k určení hranice chovala statisticky jinak než roky před a po referenčním období. Zhang a
          spoluautoři navrhli pro počty překročení opakované přepočítávání: hodnocený rok vynechají z určení
          hranice, doplní jej kopií jednoho ze zbývajících roků a výsledek průměrují přes všechny tyto náhrady.
          Hodnocený rok tak není současně použit k nastavení své vlastní hranice. Oprava omezuje umělý skok
          na okrajích referenčního období; neopravuje chyby teploměru ani přesuny stanic. Postup a jeho zkoušku
          na simulovaných i skutečných teplotách zveřejnili{" "}
          <SourceLink id="DOI_10_1175_jcli3366_1">Zhang et al., 2005</SourceLink>.
        </p>

        <h3>Od stanic k mapě</h3>
        <p>
          HadEX3 neinterpoluje každou denní teplotu. Nejprve se na stanicích vypočítají roční ukazatele, například
          počet dnů WSDI, a teprve ty se převádějí do mřížky o velikosti 1,875° zeměpisné délky krát 1,25° šířky.
          Hodnota v centru buňky je váženým průměrem dostupných stanic; váha zohledňuje vzdálenost i jejich
          rozmístění kolem tohoto bodu. Není to přímé měření celé plochy buňky. Pro výpočet musí být v
          dosahu, v němž spolu stanice ještě dostatečně souvisejí, alespoň tři použitelné stanice. Z přibližně 37 000
          dodaných stanic prošlo požadavky na kvalitu a délku pro jednotlivé teplotní ukazatele nejvýše asi 7 000.{" "}
          <SourceLink id="DOI_10_1029_2019jd032263">Dunn et al., 2020</SourceLink>;{" "}
          <SourceLink id="WEB_Met_Office_uzivatelska_prirucka_HadEX3_6eb86927">HadEX3 Product User Guide</SourceLink>
        </p>

        <p>
          Výběr stanic a kontrola ročních ukazatelů však neznamenají, že všechny vstupní denní teploty prošly
          stejnou homogenizací. HadEX3 kombinuje národní podklady s různými postupy oprav i záznamy bez takových
          oprav. Autoři proto připouštějí zbytková zkreslení, zvlášť při souběžné změně přístrojů na mnoha
          stanicích. Tuto mez uvádějí přímo v <SourceLink id="DOI_10_1029_2019jd032263">popisu vstupních dat</SourceLink>.
        </p>

        <p>
          Buňka bez potřebného počtu stanic zůstane prázdná. Globální křivka HadEX3 vzniká plošným vážením
          dostupných buněk a pro dlouhodobé srovnání používá buňky s alespoň 90% úplností v čase. Trendová mapa
          požaduje nejméně 66 % ročních hodnot a poslední platný rok alespoň 2009; trend se počítá jako medián sklonů
          mezi všemi dvojicemi ročních hodnot. Tečky v mapě označují buňky, kde 95% interval odhadu nezahrnuje nulu.
          Tato pravidla i mapy pokrytí zveřejnili{" "}
          <SourceLink id="DOI_10_1029_2019jd032263">Dunn et al., 2020</SourceLink>.
        </p>

        <h3>Co vytváří nejistotu</h3>
        <p>
          Výsledek ovlivňuje úplnost denních měření, změny stanice a čidla, délka referenčního období, zvolený
          percentil, minimální počet dnů i zeměpisné pokrytí. Krátká událost může po jediném chybějícím dni zmizet nebo
          se rozdělit na dvě. U globální mapy navíc záleží na tom, kde stanice existují a které buňky splní požadavek na
          úplnost. Zveřejněná práce proto musí uvést nejen sklon změny, ale i období, definici a pravidlo pokrytí.
          Citlivost na délku období podrobně vyhodnotili{" "}
          <SourceLink id="DOI_10_1038_s41467_020_16970_7">Perkins-Kirkpatrick a Lewis, 2020</SourceLink>.
        </p>

        <h2>Zveřejňovaná data</h2>
        <p>
          Následující soubory nejsou zaměnitelné. První dva zveřejňují denní teplotu, z níž lze události vypočítat.
          HadEX3 už obsahuje hotové roční ukazatele. ERA5 doplňuje měření fyzikálně souvislou rekonstrukcí atmosféry a
          GHWR nabízí mnoho hotových definic vedle sebe.
        </p>

        <div className="article-data-list">
          <section className="article-data-item">
            <h3>GHCN-Daily</h3>
            <p>
              <strong>Obsah:</strong> denní staniční měření; teplotní maximum a minimum jsou dostupné z více než 25 000
              míst. Celý archiv obsahuje přes 100 000 stanic, z nichž mnoho měří pouze srážky. <strong>Období:</strong>{" "}
              nejstarší maximum a minimum je z 2. ledna 1833 v belgickém Uccle; délka se liší podle stanice. <strong>Pokrytí:</strong>{" "}
              světová souš, velmi nerovnoměrně v místě i čase. <strong>Verze:</strong> GHCN-Daily v3, průběžné denní
              aktualizace a pravidelné přestavění archivu. <strong>Stažení:</strong>{" "}
              <SourceLink id="WEB_NOAA_Index_of_pub_data_ghcn_daily_96798b50">veřejné soubory NOAA</SourceLink>.{" "}
              <strong>Metoda:</strong> <SourceLink id="DOI_10_1175_jtech_d_11_00103_1">Menne et al., 2012</SourceLink>;{" "}
              <SourceLink id="DOI_10_7289_v5d21vhz">datový záznam a dokumentace formátu</SourceLink>.
              Počty stanic a nejstarší datum uvádí <SourceLink id="WEB_NOAA_Global_Historical_Climatology_Network_daily_GHCN_14491e06">správce archivu NOAA</SourceLink>,
              americký Národní úřad pro oceán a atmosféru; nejde o počet stanic použitých v každé analýze vln veder.
            </p>
          </section>

          <section className="article-data-item">
            <h3>E-OBS</h3>
            <p>
              <strong>Obsah:</strong> evropské denní mapy maximální a minimální teploty odvozené ze stanic; vedle
              průměru poskytuje rozpětí odhadů prostorové interpolace mezi jejich 5. a 95. percentilem.
              Aktuální vydání vychází z 20 variant výpočtu;
              metodický článek z roku 2018 popisoval 100 variant. <strong>Období:</strong>{" "}
              1. ledna 1950 až 31. prosince 2025. <strong>Pokrytí:</strong> evropská souš v mřížce 0,1° nebo 0,25°.
              <strong> Verze:</strong> 33.0e, vydaná v květnu 2026. <strong>Stažení:</strong>{" "}
              <SourceLink id="WEB_Copernicus_E_OBS_data_access_94a6a7b1">portál E-OBS</SourceLink>.{" "}
              <strong>Metoda:</strong> <SourceLink id="DOI_10_1029_2017jd028200">Cornes et al., 2018</SourceLink>;{" "}
              <SourceLink id="DOI_10_24381_cds_151d3ec6">datový záznam</SourceLink>. Rozdíly mezi variantami
              vyjadřují nejistotu doplnění prostoru mezi stanicemi, nikoli veškeré chyby měření a změn staniční sítě.
            </p>
          </section>

          <section className="article-data-item">
            <h3>HadEX3</h3>
            <p>
              <strong>Obsah:</strong> roční a u některých veličin i měsíční ukazatele extrémů převedené ze stanic
              do globální mřížky. Původní sada obsahuje WSDI; po rozšíření soubor nabízí přes 80 ukazatelů.
              <strong> Období:</strong> 1901–2018. <strong>Pokrytí:</strong>{" "}
              světová souš s prázdnými místy tam, kde chybějí vhodné stanice. <strong>Verze:</strong> 3.0.4,
              původní ukazatele z ledna 2022 a rozšíření z března 2024. Percentilové ukazatele mají varianty pro
              referenční období 1961–1990 a 1981–2010. <strong>Stažení:</strong>{" "}
              <SourceLink id="WEB_Met_Office_Met_Office_Hadley_Centre_observations_datasets_dd07bd35">Met Office HadEX3</SourceLink>.{" "}
              <strong>Metoda:</strong> <SourceLink id="DOI_10_1029_2019jd032263">Dunn et al., 2020</SourceLink> a{" "}
              <SourceLink id="DOI_10_1029_2023ea003279">Dunn et al., 2024</SourceLink>.
            </p>
          </section>

          <section className="article-data-item">
            <h3>ERA5</h3>
            <p>
              <strong>Obsah:</strong> hodinový stav atmosféry, včetně teploty ve dvou metrech, vytvořený propojením
              předpovědního systému a mnoha druhů pozorování. <strong>Období:</strong> od roku 1940, průběžně doplňované.
              <strong> Pokrytí:</strong> celý svět; původní prostorové rozlišení přibližně 31 km, běžný výstup
              převedený do mřížky 0,25°. <strong>Verze:</strong> pátá generace reanalýzy Evropského střediska pro
              střednědobé předpovědi počasí (ECMWF). Reanalýza je zpětná rekonstrukce počasí kombinující měření
              a fyzikální model, nikoli síť teploměrů v každé buňce. <strong>Stažení:</strong>{" "}
              <SourceLink id="WEB_Copernicus_ERA5_hourly_data_on_single_levels_from_1940_to_p_7e4f50d4">Copernicus Climate Data Store</SourceLink>.{" "}
              <strong>Metoda:</strong> <SourceLink id="DOI_10_1002_qj_3803">Hersbach et al., 2020</SourceLink>;{" "}
              <SourceLink id="DOI_10_24381_cds_adbb2d47">datový záznam</SourceLink>. Stažení v datovém úložišti
              Copernicus vyžaduje bezplatný účet a přijetí podmínek produktu.
            </p>
          </section>

          <section className="article-data-item">
            <h3>GHWR</h3>
            <p>
              <strong>Obsah:</strong> denní označení událostí a roční souhrny pro mnoho kombinací denního maxima,
              minima či průměru, pevných i místních hranic a délky 2 až 10 dnů. <strong>Období:</strong> 1979–2017.
              <strong> Pokrytí:</strong> světová souš v mřížce 0,5°, odvozená z denních teplot amerického
              Centra pro klimatické předpovědi (CPC). <strong>Verze:</strong>{" "}
              statický výzkumný archiv publikovaný v roce 2018. <strong>Stažení:</strong>{" "}
              <SourceLink id="DOI_10_6084_m9_figshare_c_4004668">Figshare</SourceLink>.{" "}
              <strong>Metoda:</strong> <SourceLink id="DOI_10_1038_sdata_2018_206">Raei et al., 2018</SourceLink>.
              Archiv zahrnuje popis formátu i zdrojový kód, takže lze zkontrolovat konkrétní pravidlo; každá
              definice ovšem není novým nezávislým měřením.
            </p>
          </section>
        </div>

        <h3>Jak si ověřit konkrétní českou epizodu</h3>
        <p>
          V <SourceLink id="WEB_CHMU_Straznice_denni_maxima_TMA">souboru denních maxim ze Strážnice</SourceLink>
          {" "}lze vybrat srpen 2015. Stanice má identifikátor <code>0-203-0-11755</code>, veličina{" "}
          <code>TMA</code> je denní maximum ve °C. Sloupec <code>DT</code> obsahuje datum s termínem
          záznamu 20:00Z a <code>VALUE</code> hodnotu. Písmeno Z označuje světový čas UTC; tento údaj
          neříká, že maximum nastalo ve 20 hodin. Soubory <code>meta1.csv</code> a <code>meta2.csv</code>
          {" "}v <SourceLink id="WEB_Cesky_hydrometeorologicky_us_Index_of_meteorology_climate_historical_csv_13ecfbd3">metadatech ČHMÚ</SourceLink>
          {" "}spojují identifikátor s místem, jednotkou, výškou čidla dva metry a pozorovacím termínem.
        </p>
        <p>
          Od 3. do 16. srpna 2015 dosáhlo maximum každý den alespoň 30 °C: šlo o čtrnáct souvislých tropických
          dnů. Předchozí 2. srpen měl 27,9 °C, následující 17. srpen 22,6 °C. Za celý srpen jich bylo osmnáct,
          protože další čtyři připadly na 28.–31. srpen. Postup je jednoduchý: seřadit záznamy podle data,
          zkontrolovat chybějící dny a příznaky kvality, vybrat maxima alespoň 30 °C a teprve potom hledat
          nepřerušené úseky. Tento přímý přepočet veřejné textové tabulky CSV dokládá konkrétní událost. Pro WSDI by bylo
          navíc třeba dlouhé referenční období a jeho místní percentily; jedna epizoda sama neurčuje klimatický trend.
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" tabIndex={0} role="region" aria-label="Graf odchylek WSDI, na úzké obrazovce lze posouvat vodorovně">
            <Image
              className="article-figure__media"
              src="/media/heatwaves/hadex3-wsdi-timeseries.png"
              alt="Roční odchylka počtu dnů WSDI nad světovou souší v souborech HadEX3, HadEX2, HadEX a GHCNDEX od roku 1901 do roku 2018"
              width={2400}
              height={1650}
              sizes="(max-width: 900px) 100vw, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Vodorovná osa ukazuje roky, svislá odchylku ročního počtu dnů WSDI vůči průměru let 1961–1990 nad
            pokrytou světovou souší. Přerušovaná nula znamená tento průměr; záporná hodnota znamená méně dnů
            vůči němu, nikoli záporný počet dnů. Zkratka „Ann“ označuje roční hodnoty. Černá
            je HadEX3, červená HadEX2, zelená starší HadEX a modrá GHCNDEX. Každá křivka používá vlastní dostupné
            buňky, takže rozdíly nejsou pouze rozdíly v teplotě; mění se také vstupní stanice a pokrytí. HadEX3 pro
            globální výpočet vybírá buňky s alespoň 90% úplností a váží je podle plochy. Všechny čtyři výpočty v době
            společného pokrytí zachycují vzestup od konce 20. století, jednotlivé roky i velikost odchylky se liší.
            Starší části s řídkým pokrytím nereprezentují stejnou plochu jako novější roky.
            Zdroj: <SourceLink id="WEB_Met_Office_Met_Office_Hadley_Centre_observations_datasets_b4e2ac85">Met Office HadEX3</SourceLink>,
            původní graf beze změny, © Crown copyright, Met Office, Open Government Licence v3.0.
          </figcaption>
        </figure>

        <h2>Jaké výsledky lze srovnávat</h2>
        <p>
          Přímé srovnání vyžaduje stejnou teplotní veličinu, hranici, referenční období, minimální délku, roční období,
          prostor a výslednou míru. Šestidenní WSDI nelze číselně zaměnit s počtem třídenních událostí. Počet
          tropických dnů v celé České republice nelze zaměnit s délkou nejdelší události na jedné stanici. Nejvyšší
          denní maximum léta zase měří jeden den, nikoli trvání vlny.
        </p>

        <p>
          Shodu lze posuzovat i mezi rozdílnými výpočty, pokud je přesně řečeno, co se srovnává. Perkins a Alexander
          zjistili, že výsledky z denních maxim, denních minim a ukazatele nadměrného tepla se v mnoha oblastech
          shodují ve směru dlouhodobých změn, avšak liší se v počtu nalezených dnů a v zeměpisném rozložení. GHWR
          ukazuje totéž systematicky: změna délky nebo hranice mění události, které do souboru vstoupí.{" "}
          <SourceLink id="DOI_10_1175_jcli_d_12_00383_1">Perkins a Alexander, 2013</SourceLink>;{" "}
          <SourceLink id="DOI_10_1038_sdata_2018_206">Raei et al., 2018</SourceLink>
        </p>

        <p>
          HadEX3 a jeho předchůdci sdílejí část staničních měření. Jejich shoda je kontrolou výběru a zpracování,
          nikoli čtyřmi plně nezávislými důkazy. Také prostorové pořadí výpočtu mění výsledek: nejprve vyhledat
          události na každé stanici a pak průměrovat ukazatele dává obecně něco jiného než nejprve zprůměrovat
          denní teploty a v nich hledat souvislé horké dny. Tento rozdíl mezi HadEX3 a produkty vytvořenými
          z denních map rozebírají <SourceLink id="DOI_10_1029_2019jd032263">Dunn et al., 2020</SourceLink>.
        </p>

        <h2 id="pozorovani">Pozorování</h2>
        <h3>Dlouhá teplá období nad světovou souší</h3>
        <p>
          Staniční výpočty ukazují, že od konce 20. století přibývá nad většinou dostatečně pokryté světové souše dnů,
          které patří do alespoň šestidenních období nad místním 90. percentilem denního maxima. Globální křivky
          HadEX3, HadEX2, HadEX a GHCNDEX se liší použitými stanicemi a pokrytím, ale ve společných desetiletích
          zachycují stejný pozdní vzestup WSDI. Mapa HadEX3 pro období označené v grafu jako 1950–2018 ukazuje kladné
          sklony ve většině dostupných buněk Evropy, Asie, Střední a Jižní Ameriky a Austrálie.{" "}
          <SourceLink id="DOI_10_1029_2019jd032263">Dunn et al., 2020</SourceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" tabIndex={0} role="region" aria-label="Mapa trendů WSDI, na úzké obrazovce lze posouvat vodorovně">
            <Image
              className="article-figure__media"
              src="/media/heatwaves/hadex3-wsdi-trend.png"
              alt="Mapa sklonu ročního počtu dnů WSDI na světové souši v HadEX3 pro období 1950 až 2018"
              width={2400}
              height={1650}
              sizes="(max-width: 900px) 100vw, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Změna ročního počtu dnů WSDI v HadEX3 za desetiletí pro období označené v grafu jako 1950–2018. Červené
            a žluté odstíny znamenají více dnů za desetiletí, modré méně; jednotlivé barevné třídy mají různé
            rozsahy, jejich hranice jsou uvedeny pod mapou. Tečky označují buňky, kde 95% interval odhadu sklonu nezahrnuje nulu. Šedá pevnina nemá
            dostatečné staniční pokrytí: pro mapu je potřeba alespoň 66 % ročních hodnot a poslední platný rok nejdříve
            2009. Prázdná oblast proto neznamená nulovou změnu. Zdroj:{" "}
            <SourceLink id="WEB_Met_Office_Met_Office_Hadley_Centre_observations_datasets_b4e2ac85">Met Office HadEX3</SourceLink>, původní
            graf beze změny, © Crown copyright, Met Office, Open Government Licence v3.0.
          </figcaption>
        </figure>

        <h3>Počet dnů, délka a součet překročení se nemění stejně</h3>
        <p>
          Perkins-Kirkpatrick a Lewis použili denní maxima ze staničních map Berkeley Earth s rozlišením 1°
          v letech 1950–2017. Vyhledali alespoň tři dny nad místním 90. percentilem, určeným z patnáctidenního
          okna v letech 1961–1990. Hodnotili květen až září na severní polokouli a listopad až březen na jižní.
          Z 26 velkých oblastí vynechali kvůli nedostatku dat společnou oblast severní Kanady, Grónska a Islandu.
          Sklon počítali jako medián změn mezi dvojicemi roků. Statistický test hodnotil převahu vzestupných
          nebo sestupných změn. Zvolená 5% hladina znamená, že stejně výrazný nebo výraznější výsledek by
          podle předpokladů testu při nulovém trendu nastal nejvýše v pěti případech ze sta.
          Použili pouze body s nejméně 70 % denních údajů za celé období
          a nejméně devíti lety měření po roce 2000.{" "}
          <SourceLink id="DOI_10_1038_s41467_020_16970_7">Perkins-Kirkpatrick a Lewis, 2020</SourceLink>
        </p>

        <p>
          V období 1950–2017 se počet dnů ve vlnách zvyšoval ve většině sledovaných oblastí
          alespoň o jeden den za desetiletí; v mnoha nízkých zeměpisných šířkách činil sklon tři až pět dnů za
          desetiletí. V žádné z hodnocených oblastí nezjistili statisticky průkazný pokles tohoto počtu. Nejdelší
          událost se podle oblasti prodlužovala přibližně o 0,2 až více než jeden den za desetiletí.{" "}
          <SourceLink id="DOI_10_1038_s41467_020_16970_7">Perkins-Kirkpatrick a Lewis, 2020</SourceLink>
        </p>

        <p>
          Součet denních překročení hranice během všech započtených dnů měl průkazný kladný
          sklon ve všech hodnocených oblastech kromě střední části Severní Ameriky. Naproti tomu průměrné překročení
          hranice během jednoho započteného dne se ve většině oblastí průkazně neměnilo. Neprůkazný výsledek však
          nepotvrzuje přesně nulovou změnu. Výsledek je důležitý pro čtení
          slov „silnější vlna“: součet překročení může růst hlavně tím, že přibývají nebo se prodlužují horké
          dny, i když se jejich průměrné překročení hranice mění méně.{" "}
          <SourceLink id="DOI_10_1038_s41467_020_16970_7">Perkins-Kirkpatrick a Lewis, 2020</SourceLink>
        </p>

        <p>
          Autoři výsledky zkontrolovali také pomocí denních map HadGHCND s rozlišením 3,75° délky a 2,5° šířky.
          Porovnali společné období 1950–2014 a společně pokryté oblasti. Tím zkoušeli citlivost na výběr a
          zpracování stanic; oba soubory však mohou čerpat z týchž původních teploměrů, takže nejde o zcela
          nezávislé měření.{" "}
          <SourceLink id="DOI_10_1038_s41467_020_16970_7">Perkins-Kirkpatrick a Lewis, 2020</SourceLink>
        </p>

        <p>
          Stejná práce ukázala citlivost sklonu na zvolené počáteční datum. Ve Středomoří byl sklon počtu dnů do roku
          2017 něco přes dva dny za desetiletí při začátku v roce 1950, ale 6,4 dne za desetiletí při začátku na
          počátku osmdesátých let. Kratší interval zachytil jinou část kolísání a měl méně roků. Sklon proto vždy
          uvádíme s oběma krajními roky; samotná hodnota „dnů za desetiletí“ není úplným výsledkem.{" "}
          <SourceLink id="DOI_10_1038_s41467_020_16970_7">Perkins-Kirkpatrick a Lewis, 2020</SourceLink>
        </p>

        <h3>Evropa</h3>
        <p>
          Rousi a spoluautoři vyhledali v ERA5 události v červenci a srpnu 1979–2020. Denní maximum muselo překročit
          místní 90. percentil nejméně šest dnů po sobě. Hranice byla odvozena z patnáctidenních oken celého
          období 1979–2020. V posouvaném čtverci o velikosti 4° šířky a 4° délky musela zasažená plocha přesáhnout
          40 000 km²; pravidlo nevyžaduje, aby všechny započtené body přímo sousedily. Pro
          evropskou oblast 35–70° severní šířky a 10° západní až 50° východní délky zjistili průměrný sklon 0,61 dne
          ve vlnách za desetiletí. Ve zbytku severních středních zeměpisných šířek činil 0,21 dne za desetiletí.
          Sklony autoři získali proložením přímky metodou nejmenších čtverců. Čísla patří k této
          prostorové a šestidenní definici; třídenní varianta je ve studii uvedena zvlášť.{" "}
          <SourceLink id="DOI_10_1038_s41467_022_31432_y">Rousi et al., 2022</SourceLink>
        </p>

        <p>
          Jiný evropský výsledek sleduje nejteplejší den léta v každém místě. Vautard a spoluautoři porovnali ERA5 a E-OBS
          pro západní Evropu mezi 5° západní a 15° východní délky a 45–55° severní šířky v letech 1950–2022. Nejvyšší
          denní maximum za červen až srpen nejprve určili v každém bodě a teprve potom zprůměrovali přes oblast.
          Nejteplejší dny různých míst tedy nemusely připadat na stejné datum. Takto získaný ukazatel se v obou
          souborech měnil o 3,4 °C na každý stupeň změny globální průměrné teploty; 95% interval byl 2,4–4,3 °C.
          Jde o statistický vztah ve sledovaném období, nikoli o změnu za desetiletí nebo předpověď pro další roky.
          Výsledek také neudává počet ani trvání vln veder.{" "}
          <SourceLink id="DOI_10_1038_s41467_023_42143_3">Vautard et al., 2023</SourceLink>
        </p>

        <h3>Česká republika</h3>
        <p>
          Souhrn ČHMÚ z června 2026 dovoluje číst pevnou hranici 30 °C přímo v počtu dnů. Průměr pro Českou
          republiku činil 5 tropických dnů za rok v období 1961–1990, přibližně 11 v letech 1991–2020 a více než 13 v
          letech 2011–2025. Rok 2024 měl v průměru 18,5 tropického dne a rok 2015 téměř 26. V srpnu 2015 byl tropický
          den alespoň na jedné stanici šestnáct dnů v řadě; nejdelší souvislý úsek na jedné stanici měl čtrnáct dnů.
          Celostátní průměr, výskyt někde na území a jediná stanice jsou tři různé souhrny a ČHMÚ je proto uvádí odděleně.{" "}
          <SourceLink id="WEB_Cesky_hydrometeorologicky_us_Vlny_veder_v_historii_a_dnes_27ba4cfb">ČHMÚ, 2026</SourceLink>
        </p>

        <p>
          Tato zpráva neuvádí úplný seznam použitých stanic ani postup prostorového průměrování. Uvedené
          celostátní průměry z ní proto nelze samostatně přepočítat. Výše popsaný postup s denními maximy
          ve Strážnici umožňuje ověřit konkrétní čtrnáctidenní úsek 3.–16. srpna 2015, nikoli tím sám potvrdit
          všechny celostátní hodnoty nebo dlouhodobý trend.{" "}
          <SourceLink id="WEB_CHMU_Straznice_denni_maxima_TMA">ČHMÚ: denní maxima ve Strážnici</SourceLink>
        </p>

        <h3>Co v mapách zůstává neznámé</h3>
        <p>
          Globální staniční mapy mají nejúplnější pokrytí od druhé poloviny 20. století v Severní Americe, Evropě,
          části Asie a Austrálii. Rozsáhlé části Afriky, Jižní Ameriky a vnitrozemí Asie mají kratší nebo řidší záznamy.
          HadEX3 v takových místech hodnotu nezveřejní, pokud nesplní minimální počet stanic a úplnost. ERA5 poskytne
          souvislou mapu i tam, ale je to reanalýza propojující pozorování s výpočtem atmosféry. Shodný směr ve více
          souborech je proto užitečná kontrola; ani souvislá mapa však nenahrazuje údaj o vstupních měřeních a použité
          definici.{" "}
          <SourceLink id="DOI_10_1029_2019jd032263">Dunn et al., 2020</SourceLink>;{" "}
          <SourceLink id="DOI_10_1002_qj_3803">Hersbach et al., 2020</SourceLink>
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            Od poloviny 20. století přibylo ve většině sledovaných oblastí souše dnů ve vlnách veder, nejdelší
            události se prodloužily a vzrostl součet teplotních překročení během horkých dnů. V letech 1950–2017 se počet dnů ve většině
            oblastí zvyšoval alespoň o jeden den za desetiletí a v mnoha nízkých zeměpisných šířkách o tři až pět dnů.
            Nejdelší události se podle oblasti prodlužovaly přibližně o 0,2 až více než jeden den za desetiletí. V
            Evropě se v letech 1979–2020 počet dnů v dlouhých vlnách zvyšoval v průměru o 0,61 dne za desetiletí,
            zatímco ve zbytku severních středních šířek o 0,21 dne. V České republice vzrostl průměrný počet tropických
            dnů z pěti ročně v období 1961–1990 na přibližně jedenáct v letech 1991–2020 a více než třináct v období
            2011–2025; rok 2024 měl v celostátním průměru 18,5 tropického dne.
          </p>
        </div>

        <h2>Prameny a data</h2>
        <div className="article-source-groups">
          <section>
            <h3>Definice a metodické práce</h3>
            <ul>
              <li><SourceLink id="DOI_10_3354_cr019193">Frich et al., 2002: první globální soubor deseti ukazatelů extrémů</SourceLink></li>
              <li><SourceLink id="DOI_10_1175_jcli3366_1">Zhang et al., 2005: výpočet percentilů uvnitř referenčního období</SourceLink></li>
              <li><SourceLink id="DOI_10_1175_jcli_d_12_00383_1">Perkins a Alexander, 2013: jednotné měření vlastností vln veder</SourceLink></li>
              <li><SourceLink id="DOI_10_3390_ijerph120100227">Nairn a Fawcett, 2015: ukazatel nadměrného tepla</SourceLink></li>
              <li><SourceLink id="DOI_10_1038_sdata_2018_206">Raei et al., 2018: více definic v archivu GHWR</SourceLink></li>
              <li><SourceLink id="DOI_10_1175_jtech_d_11_00103_1">Menne et al., 2012: sestavení a kontrola GHCN-Daily</SourceLink></li>
            </ul>
          </section>

          <section>
            <h3>Historické a globální staniční práce</h3>
            <ul>
              <li><SourceLink id="DOI_10_1002_joc_3370120402">Parker et al., 1992: denní teplota ve střední Anglii od roku 1772</SourceLink></li>
              <li><SourceLink id="DOI_10_1002_joc_1190">Parker a Horton, 2005: nejistoty maxim a minim od roku 1878</SourceLink></li>
              <li><SourceLink id="DOI_10_1029_2005jd006290">Alexander et al., 2006: globální změny denních extrémů</SourceLink></li>
              <li><SourceLink id="DOI_10_1029_2019jd032263">Dunn et al., 2020: vznik HadEX3</SourceLink></li>
              <li><SourceLink id="DOI_10_1029_2023ea003279">Dunn et al., 2024: rozšíření HadEX3 o další ukazatele</SourceLink></li>
            </ul>
          </section>

          <section>
            <h3>Současná pozorování</h3>
            <ul>
              <li><SourceLink id="DOI_10_1038_s41467_020_16970_7">Perkins-Kirkpatrick a Lewis, 2020: globální počet, délka a součet překročení 1950–2017</SourceLink></li>
              <li><SourceLink id="DOI_10_1038_s41467_022_31432_y">Rousi et al., 2022: evropské vlny veder 1979–2020</SourceLink></li>
              <li><SourceLink id="DOI_10_1038_s41467_023_42143_3">Vautard et al., 2023: nejteplejší letní dny v západní Evropě</SourceLink></li>
              <li><SourceLink id="WEB_Cesky_hydrometeorologicky_us_Vlny_veder_v_historii_a_dnes_27ba4cfb">ČHMÚ, 2026: tropické dny a souvislé události v České republice</SourceLink></li>
            </ul>
          </section>

          <section>
            <h3>Datové portály</h3>
            <ul>
              <li><SourceLink id="WEB_NOAA_Global_Historical_Climatology_Network_daily_GHCN_14491e06">GHCN-Daily: popis</SourceLink> a <SourceLink id="WEB_NOAA_Index_of_pub_data_ghcn_daily_96798b50">soubory ke stažení</SourceLink></li>
              <li><SourceLink id="WEB_Copernicus_E_OBS_data_access_94a6a7b1">E-OBS v33.0e: evropské denní mapy</SourceLink></li>
              <li><SourceLink id="WEB_Met_Office_Met_Office_Hadley_Centre_observations_datasets_dd07bd35">HadEX3 v3.0.4: mřížkované ukazatele a pomocná data</SourceLink></li>
              <li><SourceLink id="WEB_Copernicus_ERA5_hourly_data_on_single_levels_from_1940_to_p_7e4f50d4">ERA5: hodinová reanalýza</SourceLink></li>
              <li><SourceLink id="DOI_10_6084_m9_figshare_c_4004668">GHWR: více metod určení vln veder</SourceLink></li>
              <li><SourceLink id="WEB_Cesky_hydrometeorologicky_us_Index_of_meteorology_climate_historical_csv_13ecfbd3">ČHMÚ: otevřená historická staniční data v CSV</SourceLink></li>
              <li><SourceLink id="WEB_CHMU_Straznice_denni_maxima_TMA">ČHMÚ: Strážnice, denní maxima pro vlastní kontrolu</SourceLink></li>
            </ul>
          </section>

          <section>
            <h3>Obrazy a podmínky použití</h3>
            <ul>
              <li>
                Oba grafy pocházejí z{" "}
                <SourceLink id="WEB_Met_Office_Met_Office_Hadley_Centre_observations_datasets_b4e2ac85">oficiální stránky HadEX3</SourceLink>{" "}
                a zobrazují ukazatel WSDI z verze 3.0.4. Met Office je zpřístupňuje pod{" "}
                <SourceLink id="WEB_Met_Office_Met_Office_Hadley_Centre_observations_datasets_cdb0d8ce">Open Government Licence v3.0</SourceLink>.
                Soubory jsou převzaty beze změny; české vysvětlení barev, výběru buněk a omezení je doplněno v
                popiscích této stránky.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
