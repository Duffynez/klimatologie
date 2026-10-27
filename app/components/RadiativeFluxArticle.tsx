import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function RadiativeFluxArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak měříme přenos energie zářením</h2>
        <p className="article-prose__intro">
          Měření radiačních toků určuje, kolik energie přenáší záření za jednotku času
          přes jednotku plochy. U zemského povrchu měříme zvlášť záření přicházející
          shora a záření odcházející vzhůru. Jejich rozdíl ukazuje, jak rychle povrch
          zářením energii získává nebo ztrácí. Vysvětlíme si pozemní měřicí sestavu
          používanou v síti SURFRAD americké agentury NOAA, která dlouhodobě sleduje
          radiační bilanci povrchu. Na konci výkladu připojíme měření z družic.{" "}
          <SourceLink id="WEB_NOAA_SURFRAD_Overview">(NOAA: účel a uspořádání sítě SURFRAD)</SourceLink>
        </p>

        <h3>Co představují čtyři měřené složky</h3>
        <p>
          Výsledek udáváme ve wattech na metr čtvereční, zkráceně W/m². Jeden watt
          znamená přenos jednoho joulu energie za sekundu. Údaj ve W/m² tento
          přenos vztahuje na každý metr čtvereční. U pozemní stanice měříme toky
          pro vodorovnou plochu.
          Abychom získali její radiační bilanci, potřebujeme zachytit všechny směry,
          ze kterých k ní záření přichází. Přístroj obrácený vzhůru proto přijímá
          záření z celé oblohy nad horizontem.{" "}
          <SourceLink id="DOI_10_2172_1432706">(Andreas a kol. 2018, oddíly 5.1 a 8.1–8.2)</SourceLink>
        </p>
        <p>
          Přístroje rozlišují dvě široká pásma záření. Krátkovlnné pásmo zachycuje
          především sluneční záření, včetně viditelného světla. Část slunečního
          záření se od povrchu odrazí zpět vzhůru. Dlouhovlnné pásmo zachycuje tepelné
          infračervené záření, které vydává povrch, atmosférické plyny i oblaka.
          To k povrchu přichází také v noci. Označení krátkovlnné a dlouhovlnné
          odkazuje na vlnovou délku, tedy vzdálenost mezi sousedními vrcholy
          elektromagnetické vlny. Pro bilanci tak máme čtyři složky: sluneční
          a tepelné záření, obě směrem dolů i vzhůru.{" "}
          <SourceLink id="WEB_NOAA_SURFRAD_Overview">(NOAA: měřené složky záření)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/radiative-fluxes/four-fluxes.svg" width={560} height={460} unoptimized
            style={{ maxWidth: "35rem", width: "100%", height: "auto", marginInline: "auto" }}
            alt="Čtyři šipky mezi oblohou a povrchem. Sluneční i tepelné záření měříme zvlášť směrem dolů a vzhůru. Příchozí složky přičítáme a odchozí odečítáme." />
          <figcaption>
            Oranžové šipky označují sluneční záření, modré tepelné záření.
            Šipka dolů znamená příjem povrchu, šipka vzhůru jeho výdej.
            Značky S a L použijeme také ve výpočtu. Šířky šipek nevyjadřují
            velikost toků. Vlastní schéma podle{" "}
            <SourceLink id="WEB_NOAA_SURFRAD_Overview">uspořádání měření SURFRAD</SourceLink>.
          </figcaption>
        </figure>

        <h3>Jak sluneční záření vytvoří elektrický signál</h3>
        <p>
          Sluneční záření z celé oblohy měří pyranometr. U běžného tepelného
          provedení dopadá záření přes skleněnou kopulku na černou přijímací
          plochu. Černý povrch záření pohlcuje a ohřívá se. Teplo se z něj současně
          odvádí do těla přístroje. Při silnějším ozáření tak vzniká větší rozdíl
          teplot mezi přijímací plochou a tělem. Kopulka propouští měřené sluneční
          záření a chrání přijímač před počasím.{" "}
          <SourceLink id="WEB_NOAA_Radiation_Instruments">(NOAA: pyranometr Eppley PSP)</SourceLink>
        </p>
        <p>
          Rozdíl teplot snímá termočlánek, tvořený spojenými vodiči z různých
          materiálů. Jeden jeho spoj sleduje teplotu přijímače, druhý teplotu těla
          přístroje. Když se teploty těchto spojů liší, mezi vývody vzniká
          elektrické napětí. V pyranometru je takových článků
          více a jejich napětí se sčítají. Celé sestavě se říká termoelektrická
          baterie. Záznamová elektronika měří její napětí, které se mění podle
          dopadajícího záření. Samotný převod energie záření na elektrický údaj
          tedy probíhá přes ohřev přijímací plochy.{" "}
          <SourceLink id="WEB_NOAA_Radiation_Instruments">(NOAA: termoelektrická čidla radiometrů)</SourceLink>{" "}
          a <SourceLink id="DOI_10_2172_1432706">(Andreas a kol. 2018, oddíl 8.1.6)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/radiative-fluxes/pyranometer.svg" width={560} height={540} unoptimized
            style={{ maxWidth: "35rem", width: "100%", height: "auto", marginInline: "auto" }}
            alt="Zjednodušený řez pyranometrem. Sluneční záření prochází kopulkou na černou plochu. Termočlánky mezi ní a tělem přístroje vytvářejí měřené napětí." />
          <figcaption>
            Černá plocha pohlcuje záření. Termočlánky využívají její rozdíl teplot
            vůči tělu přístroje, vodiče odvádějí elektrický signál do záznamové
            jednotky. Vlastní zjednodušený řez, bez skutečných rozměrů a vnitřního
            zapojení, podle{" "}
            <SourceLink id="WEB_NOAA_Radiation_Instruments">popisu NOAA</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Aby napětí dostalo význam ve W/m², potřebujeme kalibraci. Při ní přístroj
          porovnáme se známým radiačním tokem a určíme jeho citlivost: kolik
          mikrovoltů připadá na jeden W/m². Mikrovolt je miliontina voltu.
          V základním lineárním převodu pak napětí citlivostí vydělíme:
        </p>
        <Equation tex={String.raw`E = \frac{U}{c}`} />
        <p>
          Zde je <InlineMath tex="E" /> měřený tok ve W/m², <InlineMath tex="U" /> napětí
          v mikrovoltech a <InlineMath tex="c" /> kalibrovaná citlivost
          v mikrovoltech na W/m². Vztah používáme v podmínkách, pro které platí
          daná kalibrace. Kalibrace může popisovat také změnu citlivosti s teplotou
          přístroje nebo směrem dopadu záření. Při zpracování se potom použije
          citlivost odpovídající těmto podmínkám.{" "}
          <SourceLink id="DOI_10_2172_1432706">(Andreas a kol. 2018, oddíly 8.1.2.4 a 8.3.2)</SourceLink>
        </p>

        <h3>Přímé slunce a světlo rozptýlené oblohou</h3>
        <p>
          Stanice SURFRAD měří přicházející sluneční záření také po dvou složkách.
          Přímé záření přichází ze směru slunečního kotouče. Záření rozptýlené
          molekulami vzduchu, částicemi a oblaky přichází z ostatních částí oblohy.
          Této druhé složce říkáme difuzní záření. Zastíníme-li pyranometru
          samotné Slunce malým kotoučkem, dostaneme měření difuzní složky.
          Pro přímou složku slouží pyrheliometr, přístroj s úzkým průhledem,
          který motorická montáž průběžně natáčí ke Slunci.{" "}
          <SourceLink id="WEB_NOAA_SURFRAD_Overview">(NOAA: samostatná měření přímé a difuzní složky)</SourceLink>
        </p>
        <p>
          Pyrheliometr přijímá paprsky kolmo na svou měřicí plochu. My je ale
          potřebujeme vztáhnout k vodorovnému povrchu. Když Slunce klesá k obzoru,
          stejný svazek paprsků se rozloží na větší vodorovnou plochu, takže na její
          metr čtvereční připadá méně energie. Tento geometrický převod vyjadřuje
          kosinus úhlu mezi směrem ke Slunci a svislicí. Po převodu přímé složky
          přičteme složku difuzní:
        </p>
        <Equation tex={String.raw`S_{\downarrow} = B\cos\theta + D`} />
        <p>
          <InlineMath tex={String.raw`S_{\downarrow}`} /> je celkový sluneční tok
          na vodorovnou plochu, <InlineMath tex="B" /> přímý tok na plochu kolmou
          k paprskům a <InlineMath tex="D" /> difuzní tok na vodorovnou plochu.
          Všechny tři veličiny mají jednotku W/m². Úhel <InlineMath tex={String.raw`\theta`} /> měříme
          od svislice ke Slunci. Při Slunci v zenitu je nulový a převodní činitel
          je jedna, u obzoru je úhel 90° a přímý příspěvek k vodorovné ploše klesá
          k nule. Tento vztah použijeme v příkladu se Sluncem nad obzorem. NOAA
          součet obou složek upřednostňuje před samostatným nezastíněným
          pyranometrem.{" "}
          <SourceLink id="WEB_NOAA_SURFRAD_Readme">(NOAA: „Net radiation processing“)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/radiative-fluxes/table-mountain-tracker.jpg" width={1024} height={768} unoptimized
            alt="Přístroje na slunečním sledovači stanice Table Mountain. Nad kopulkami jsou tři stínicí kotoučky, po straně montáže je trubicový pyrheliometr mířící ke Slunci." />
          <figcaption>
            Sledovač Slunce na stanici Table Mountain v Coloradu. Kotoučky na
            dlouhých ramenech stíní čidla pod nimi. Sestava obsahuje pyranometr,
            pyrgeometr i samostatné čidlo ultrafialového záření. Trubicový
            pyrheliometr je upevněn po straně. Bílé pláště kolem čidel slouží
            k jejich ochraně a ventilaci. Nedatovaný snímek a identifikace
            přístrojů: <SourceLink id="WEB_NOAA_SURFRAD_Table_Mountain">NOAA Global Monitoring Laboratory, Boulder, Colorado, USA</SourceLink>.
            Převzato beze změny, veřejná doména podle{" "}
            <SourceLink id="WEB_NOAA_GML_Terms">podmínek NOAA GML</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Stejné rozdělení na přímé a difuzní záření pomáhá vytvořit kalibrační
          referenci. Přímou složku lze změřit dutinovým radiometrem. Záření v něm
          pohlcuje černá dutina a jeho ohřev porovnáváme s ohřevem elektrickým
          proudem o známém výkonu. Tím navážeme měření záření na měření elektrického
          výkonu. K přímé složce převedené na vodorovnou plochu přidáme difuzní
          složku z referenčního pyranometru. Tak vznikne hodnota, se kterou
          porovnáme napětí kalibrovaného přístroje. Referenční přístroje sítě
          SURFRAD jsou navázány na světovou radiační referenci v Davosu.{" "}
          <SourceLink id="WEB_NOAA_Radiation_Instruments">(NOAA: dutinový radiometr)</SourceLink>{" "}
          a <SourceLink id="DOI_10_2172_1432706">(Andreas a kol. 2018, oddíl 8.3)</SourceLink>
        </p>

        <h3>Proč při měření tepelného záření měříme také teplotu čidla</h3>
        <p>
          Tepelné záření měří pyrgeometr. Také používá černou přijímací plochu
          a termočlánky, jeho kopulka však propouští dlouhovlnné záření a potlačuje
          sluneční pásmo. U přístroje Eppley PIR jde přibližně o vlnové délky
          3,5 až 50 mikrometrů, tedy miliontin metru. Přijímač je přitom sám tělesem o určité teplotě
          a tepelné záření také vydává. Jeho ohřev nebo ochlazení proto závisí
          na rozdílu mezi přijímanou a vydávanou energií. Napětí termočlánků
          zachycuje právě tuto výměnu.{" "}
          <SourceLink id="DOI_10_5194_amt_19_983_2026">(Michalsky a kol. 2026, oddíl 1 a obrázek 1)</SourceLink>
        </p>
        <p>
          Chceme-li zjistit přicházející záření, musíme k údaji o této výměně
          připočíst záření vydávané přijímačem. Určujeme je pomocí měření teploty
          těla přístroje a kalibračního vztahu. Do stejného výpočtu vstupuje teplota
          kopulky, protože i ona část záření pohltí, vydává vlastní záření a ovlivňuje
          výměnu s přijímačem. Zpracování tak spojuje tři měřené údaje: napětí,
          teplotu těla a teplotu kopulky. Teploty se získávají pomocí termistorů,
          jejichž princip vysvětluje <Link href="/metody/odporova-termometrie-a-termistory">článek o odporové termometrii</Link>.{" "}
          <SourceLink id="DOI_10_5194_amt_19_983_2026">(Michalsky a kol. 2026, rovnice 1–3)</SourceLink>
        </p>
        <p>
          Kalibrace pyrgeometru určí koeficienty, které tyto údaje převádějí
          na přicházející dlouhovlnný tok. Koeficienty se hledají tak, aby výpočet
          z napětí a teplot co nejlépe odpovídal současnému referenčnímu měření.
          NOAA porovnává provozní přístroje
          s trojicí referenčních pyrgeometrů kalibrovaných ve světovém radiačním
          centru v Davosu. Porovnání probíhá pod skutečnou oblohou za různých
          podmínek, aby zahrnulo různé teploty i hodnoty záření. Konečným výstupem
          je opět tok ve W/m².{" "}
          <SourceLink id="DOI_10_5194_amt_19_983_2026">(Michalsky a kol. 2026, oddíly 2–3)</SourceLink>
        </p>

        <h3>Radiační bilance povrchu</h3>
        <p>
          Dosud jsme sledovali přístroje obrácené vzhůru, které měří záření
          přicházející k povrchu. Druhou dvojici obrátíme dolů. Pyranometr potom
          přijímá sluneční záření odražené povrchem a pyrgeometr jeho dlouhovlnné
          záření. V síti SURFRAD jsou dolů hledící přístroje na rameni věže
          přibližně deset metrů nad zemí, aby viděly větší plochu okolního terénu.
          Sestava se rozmísťuje tak, aby věž nestínila čidla sledující oblohu.{" "}
          <SourceLink id="WEB_NOAA_SURFRAD_Overview">(NOAA: uspořádání stanice)</SourceLink>
        </p>
        <p>
          Příjem energie nyní sečteme a výdej odečteme. Čistý radiační tok
          směrem do povrchu, označený <InlineMath tex="R" />, je
        </p>
        <Equation tex={[String.raw`R = S_{\downarrow} - S_{\uparrow}`, String.raw`{}+ L_{\downarrow} - L_{\uparrow}`]} />
        <p>
          Písmeno <InlineMath tex="S" /> označuje sluneční a <InlineMath tex="L" /> dlouhovlnné
          tepelné záření. Šipky určují směr vůči povrchu. Všechny členy i výsledek
          mají jednotku W/m². Kladné <InlineMath tex="R" /> znamená, že povrch
          získává zářením více energie, než zářením ztrácí. Záporné číslo znamená
          čistou ztrátu. Této bilanci se říká také radiační bilance povrchu.{" "}
          <SourceLink id="WEB_NOAA_SURFRAD_Readme">(NOAA: definice čistých toků)</SourceLink>
        </p>
        <p>
          Záznamová jednotka stanice sleduje přístroje během celého dne.
          Z jednosekundových měření vznikají minutové průměry. Při jejich
          zpracování se uplatní kalibrace příslušného přístroje a kontrola kvality.
          Ve veřejném souboru pak vedle každé veličiny najdeme příznak, zda prošla
          kontrolami. Z těchto údajů můžeme sestavit průběh během dne i delší
          průměry. Pro průměr celé hodiny potřebujeme měření pokrývající celou
          hodinu, aby některá její část ve výsledku nechyběla.{" "}
          <SourceLink id="WEB_NOAA_SURFRAD_Readme">(NOAA: časové průměry a příznaky kvality)</SourceLink>
        </p>
        <p>
          Průměrný tok ještě můžeme převést na energii přijatou za sledované
          období. Vynásobíme jej délkou období:
        </p>
        <Equation tex={String.raw`Q_A = \overline{R}\,\Delta t`} />
        <p>
          <InlineMath tex={String.raw`Q_A`} /> je čistě přijatá radiační energie
          na metr čtvereční v J/m², <InlineMath tex={String.raw`\overline{R}`} /> průměrný
          tok ve W/m² a <InlineMath tex={String.raw`\Delta t`} /> doba v sekundách.
          Vztah plyne z významu wattu jako joulu za sekundu. Proměnlivý tok
          zachytíme průměrem za celé období, případně sečteme energii jednotlivých
          měřených intervalů. U stejně dlouhých minutových intervalů dávají oba
          postupy stejný výsledek.{" "}
          <SourceLink id="WEB_NOAA_SURFRAD_Readme">(vlastní převod jednotek nad minutovými průměry NOAA)</SourceLink>
        </p>
        <p>
          Radiační příjem se podílí na ohřevu povrchu, výparu vody i tání sněhu.
          Pro úplnou energetickou bilanci se k němu připojují další výměny energie,
          například předávání tepla vzduchu a vedení tepla do půdy. Dlouhodobá
          radiační měření umožňují sledovat změny přísunu slunečního záření,
          odrazivosti povrchu i tepelné výměny s atmosférou. Síť SURFRAD poskytuje
          taková místní měření také pro kontrolu klimatických modelů a výpočtů
          založených na družicových datech.{" "}
          <SourceLink id="WEB_NOAA_SURFRAD_Overview">(NOAA: použití radiační bilance)</SourceLink>
        </p>

        <h3>Historie a měření z družic</h3>
        <p>
          Srovnávání ohřevu zářením s elektrickým ohřevem má dlouhou historii.
          Knut Ångström v práci z roku 1899 popsal kompenzační pyrheliometr
          se dvěma podobnými začerněnými proužky. Jeden ozařovalo Slunce,
          druhý byl zastíněný a zahřívaný proudem. Když se jejich teploty vyrovnaly,
          známý elektrický příkon umožnil určit účinek dopadajícího záření.
          Autor přístroj popsal na základě šesti let jeho používání. Moderní
          dutinové radiometry rozvíjejí stejnou myšlenku elektrické náhrady ohřevu.
          Automatické stanice k ní přidaly soustavný záznam všech čtyř složek
          bilance a společné kalibrační reference.{" "}
          <SourceLink id="1899_Angstrom_Pyrheliometer">(Ångström 1899)</SourceLink>{" "}
          a <SourceLink id="WEB_NOAA_Radiation_Instruments">(NOAA: dutinové radiometry)</SourceLink>
        </p>
        <p>
          Družicové radiometry sledují záření odcházející ze Země do vesmíru.
          Program CERES, anglicky <em>Clouds and the Earth’s Radiant Energy
          System</em>, měří sluneční pásmo a široké pásmo zahrnující i tepelné
          záření. Družice však vidí každé místo jen z určitého směru. K výpočtu
          celkového toku proto slouží vztahy popisující, jak se záření rozděluje
          do různých směrů. Vycházejí z pozorování různých povrchů a oblačnosti.
          Jednotlivá měření se potom spojují v prostoru a čase.{" "}
          <SourceLink id="WEB_NASA_CERES_FAQ">(NASA: měření CERES a převod na toky)</SourceLink>
        </p>
        <p>
          Výsledkem jsou například měsíční mapy produktu EBAF, anglicky
          <em> Energy Balanced and Filled</em>, které popisují radiační bilanci
          na horní hranici atmosféry. Příchozí sluneční energii do bilance
          dodávají samostatná družicová měření Slunce. Přepočítávají se podle
          osvětlení jednotlivých částí Země. Od příjmu pak odečítáme záření
          odražené zpět do vesmíru a odcházející tepelné záření.{" "}
          <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018, produkt Edition 4.0)</SourceLink>
        </p>
        <p>
          Tato bilance zahrnuje Zemi jako celek. Její dlouhodobý přebytek souvisí
          s ukládáním energie v klimatickém systému, zejména s růstem{" "}
          <Link href="/pozorovani/tepelny-obsah-oceanu">obsahu tepla v oceánu</Link>.
          Absolutní průměr bilance produktu EBAF autoři nastavují pomocí
          nezávislého odhadu ukládání tepla, zatímco družice poskytují její
          prostorové a časové změny. Získání toků přímo u povrchu navíc vyžaduje
          výpočet průchodu záření atmosférou. Tyto výpočty můžeme porovnat
          s pozemními radiometry.{" "}
          <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018, oddíl 3)</SourceLink>{" "}
          a <SourceLink id="DOI_10_1029_2020EA001224">(Hinkelman a Marchand 2020)</SourceLink>
        </p>
        <p>
          Takové porovnání provedli Hinkelmanová a Marchand pro ostrov Macquarie
          v Jižním oceánu. Pozemní měření z let 2016–2018 porovnali s produkty
          CERES. V ročním průměru vycházelo z družicových výpočtů přibližně
          o 10 W/m² více příchozího slunečního záření a o 10 W/m² méně příchozího
          dlouhovlnného záření. Rozdíly se měnily během dne i roku. Pozemní
          stanice tak umožnila určit, kterou část širšího výpočtu je potřeba
          zlepšit, například popis nízké oblačnosti v noci.{" "}
          <SourceLink id="DOI_10_1029_2020EA001224">(Hinkelman a Marchand 2020, oddíly 2–4)</SourceLink>
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Výsledek ovlivňuje kalibrace, sklon a čistota čidel i jejich tepelná
          výměna s okolím. Místní měření také závisí na tom, jaký povrch přístroje
          vidí. Michalsky a kolegové v roce 2026 ověřili přenos kalibrace
          pyrgeometrů na datech oddělených od kalibračních dat. Mediány rozdílů
          proti referenčním přístrojům zůstaly menší než 1 W/m².
          To dokládá dobrou shodu přístrojů, celková nejistota však zahrnuje
          i nejistotu společné reference.{" "}
          <SourceLink id="DOI_10_5194_amt_19_983_2026">(Michalsky a kol. 2026, oddíl 4 a obrázek 7)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Podrobnosti nejistot a nezávislé kontroly</summary>
          <h3>Sluneční záření a stav stanice</h3>
          <p>
            Pyranometr musí správně vážit záření dopadající pod různými úhly.
            Při nízkém Slunci nabývá na významu jeho odchylka od ideální úhlové
            odezvy i malé naklonění. Nečistoty, námraza a zastínění mění množství
            záření procházejícího k přijímači. Kontrola zahrnuje čištění,
            vodorovnost a porovnávání přímé, difuzní a celkové složky. Tato
            měření mají odlišné přístrojové chyby, ale sdílejí kalibrační
            návaznost. Jejich shoda proto neodhalí každou společnou odchylku.{" "}
            <SourceLink id="WEB_NOAA_SURFRAD_Overview">(NOAA: kontrola a kalibrace)</SourceLink>
          </p>
          <p>
            Černý přijímač pyranometru se může vyzařováním ochlazovat vůči okolí.
            To přidává k signálu odchylku, která se v noci může projevit zápornou
            hodnotou slunečního toku. NOAA proto pro celkový příchozí sluneční
            tok doporučuje součet přímé a difuzní složky. Pyranometr pro difuzní
            záření používá od roku 2001 černou a bílou přijímací plochu, jejichž
            podobné tepelné vyzařování tento vliv výrazně potlačuje. Nulový
            příznak kvality sám o sobě neznamená nulovou chybu měření.{" "}
            <SourceLink id="WEB_NOAA_SURFRAD_Readme">(NOAA: zpracování slunečních měření)</SourceLink>
          </p>
          <h3>Pyrgeometry a jejich reference</h3>
          <p>
            V testu z roku 2026 autoři použili jednu polovinu záznamu ke kalibraci
            a druhou k ověření, poté poloviny prohodili. Ověřovací měření tedy
            nevstupovala do určení zkoušených koeficientů. Reference zůstala
            stejná trojice přístrojů navázaná na světovou infračervenou referenci.
            Autoři u této reference uvádějí nejistotu přibližně 4 W/m².
            Porovnáním kalibrací z let 2018, 2022 a 2024 také zkoumali její
            stabilitu. Rozdíly vypočtených toků byly většinou do 1 W/m².
            Čísla popisují konkrétní přístroje a test, nejsou univerzální
            nejistotou všech pyrgeometrů.{" "}
            <SourceLink id="DOI_10_5194_amt_19_983_2026">(Michalsky a kol. 2026, oddíl 4)</SourceLink>
          </p>
          <h3>Prostor, čas a společné vstupy</h3>
          <p>
            Sníh, vegetace nebo půda pod věží ovlivňují odražené a vyzařované
            toky. Srovnání s družicovým výpočtem musí respektovat rozdíl mezi
            místním měřením a průměrem rozsáhlé oblasti i rozdílné časy měření.
            Srovnání na Macquarie využívá odlišné pozorovací postupy, zahrnuje
            však i tyto rozdíly pokrytí. U globálního produktu CERES EBAF je navíc
            průměrná bilance ukotvena odhadem ukládání tepla. Shodu tohoto průměru
            s oceánskými údaji proto nelze pokládat za zcela nezávislou kontrolu.{" "}
            <SourceLink id="DOI_10_1029_2020EA001224">(Hinkelman a Marchand 2020)</SourceLink>{" "}
            a <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018)</SourceLink>
          </p>
        </details>

        <h2>Příklad: jedna hodina na stanici Table Mountain</h2>
        <p>
          Spočítáme radiační bilanci povrchu u stanice Table Mountain v Coloradu
          21. června 2023 mezi 18:00 a 19:00 UTC. UTC je společný světový čas,
          na stanici tehdy odpovídal intervalu od poledne do jedné hodiny odpoledne
          místního letního času. Vstupem jsou veřejné minutové toky, které NOAA
          již převedla z přístrojových signálů pomocí kalibrací. Náš výpočet
          navazuje sestavením bilance a časovým průměrem.{" "}
          <SourceLink id="DATA_NOAA_SURFRAD_tbl23172">(NOAA: soubor tbl23172.dat, přístup 27. října 2026)</SourceLink>
        </p>
        <p>
          Pro každou minutu vypočítáme příchozí sluneční tok z přímé a difuzní
          složky. Pak připojíme odražený sluneční tok a oba dlouhovlnné toky.
          Všech 60 minut má u těchto pěti vstupních měření nulový příznak kvality,
          takže žádnou minutu nevyřazujeme ani nedoplňujeme. Z úplného souboru
          vypočítáme hodinové průměry jednotlivých složek:
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" tabIndex={0} role="region" aria-label="Hodinové průměry radiačních toků">
            <table>
              <thead><tr><th>Složka</th><th>Průměr (W/m²)</th></tr></thead>
              <tbody>
                <tr><td>Sluneční záření dolů</td><td>935,56</td></tr>
                <tr><td>Sluneční záření vzhůru</td><td>151,55</td></tr>
                <tr><td>Tepelné záření dolů</td><td>364,69</td></tr>
                <tr><td>Tepelné záření vzhůru</td><td>490,67</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>
          Sluneční příjem po odečtení odrazu převyšuje tepelnou ztrátu povrchu.
          Dosazením do vysvětlené bilance dostáváme
        </p>
        <Equation tex={[String.raw`\overline{R} = (935{,}56 - 151{,}55`, String.raw`{}+ 364{,}69 - 490{,}67)\,\mathrm{W/m^2}`, String.raw`\approx 658\,\mathrm{W/m^2}`]} />
        <p>
          Výsledek je kladný. Povrch ve sledované hodině získával zářením
          v průměru přibližně 658 joulů za sekundu na každý metr čtvereční.
          Za hodinu, tedy 3 600 sekund, to představuje
        </p>
        <Equation tex={[String.raw`Q_A \approx 658\,\mathrm{W/m^2} \times 3\,600\,\mathrm{s}`, String.raw`\approx 2{,}37\,\mathrm{MJ/m^2}`]} />
        <p>
          Megajoule, označený MJ, je milion joulů. Záření tedy za tuto hodinu
          dodalo povrchu čistě asi 2,37 megajoulu na metr čtvereční. Sluneční
          příjem se přitom během hodiny výrazně měnil, jak ukazuje graf.
          Hodinový výsledek zahrnuje celý tento proměnlivý průběh.
          Vlastní výpočet používá hodnoty před zaokrouhlením tabulky.{" "}
          <SourceLink id="DATA_NOAA_SURFRAD_tbl23172">(výpočet z minutových dat NOAA)</SourceLink>
        </p>
        <figure className="article-figure">
          <div style={{ overflowX: "auto" }} tabIndex={0} role="region" aria-label="Průběh záření během hodiny, na úzké obrazovce posuvný">
            <Image src="/media/radiative-fluxes/hour.png" width={1440} height={1120} unoptimized
              style={{ minWidth: "34rem" }}
              alt="Minutové toky na stanici Table Mountain mezi 18 a 19 UTC. Nahoře čtyři složky záření, dole čistá radiační bilance s průměrem přibližně 658 wattů na metr čtvereční." />
          </div>
          <figcaption>
            Vodorovná osa ukazuje čas UTC, svislé osy toky ve W/m².
            Horní panel rozlišuje čtyři složky barevně podle legendy.
            Dolní panel ukazuje jejich bilanci, čárkovaná čára hodinový průměr.
            Body představují minutové průměry a jsou označené časem konce minuty.
            Vlastní graf z <SourceLink id="DATA_NOAA_SURFRAD_tbl23172">dat NOAA GML</SourceLink>.
          </figcaption>
        </figure>
        <details className="method-details">
          <summary>Data a postup pro zopakování výpočtu</summary>
          <p>
            Původní soubor má označení verze 1 a obsahuje 1 440 minutových
            záznamů. Čas označuje konec měřeného intervalu. Pro hodinu
            18:00–19:00 UTC proto vybíráme záznamy 18:01 až 19:00 včetně.
            Úhel Slunce uvedený na řádku se vztahuje ke středu dané minuty.{" "}
            <SourceLink id="WEB_NOAA_SURFRAD_Readme">(NOAA: popis formátu a časových značek)</SourceLink>
          </p>
          <p>
            Skript používá sloupce 8 (úhel Slunce), 11 (sluneční tok vzhůru),
            13 (přímý tok), 15 (difuzní tok), 17 (dlouhovlnný tok dolů)
            a 23 (dlouhovlnný tok vzhůru), počítáno od jedničky. Příznaky kvality
            jsou v bezprostředně následujících sloupcích u jednotlivých toků.
            Úhel převede ze stupňů na radiány pro funkci kosinus a bilanci
            počítá samostatně pro každou minutu. Kontroluje úplnost hodinového
            pokrytí a totožnost vstupního souboru pomocí otisku SHA-256.
          </p>
          <p>
            Výpočet dává 658,036 W/m² a 2,36893 MJ/m² před konečným zaokrouhlením.
            Tyto další číslice slouží pouze ke kontrole výpočtu. Od již publikované
            minutové bilance NOAA se náš výpočet liší nejvýše o 0,16 W/m²,
            při přepočtu totiž používáme již zaokrouhlené zveřejněné toky a úhly.
            Soubor NOAA v příkladu nijak nepřepisujeme.
          </p>
          <ul>
            <li><a href="/data/methods/radiative-fluxes/tbl23172.dat" download>Původní denní soubor NOAA</a> a <a href="/data/methods/radiative-fluxes/source-README.txt" download>jeho dokumentace a licence CC0 1.0</a>.</li>
            <li><a href="/data/methods/radiative-fluxes/hour.csv" download>Vybraná hodina a mezivýsledky v CSV</a>.</li>
            <li><a href="/data/methods/radiative-fluxes/example.json" download>Původ dat, nastavení a kontrolní otisky</a>.</li>
            <li><a href="/data/methods/radiative-fluxes/reproduce.py" download>Výpočet v Pythonu</a> a <a href="/data/methods/radiative-fluxes/plot.py" download>skript pro graf</a>.</li>
          </ul>
          <p>
            Denní soubor, soubor example.json a skript reproduce.py uložíme
            do stejné složky. Příkaz <code>python reproduce.py</code> provede
            výpočet a vytvoří hour.csv. Potřebuje pouze standardní knihovnu
            Pythonu 3. Graf vytvoří <code>python plot.py</code> s knihovnou
            Matplotlib. Data poskytla NOAA Global Monitoring Laboratory,
            Boulder, Colorado, USA. Úprava a výpočet: Klimatologie.eu.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Měření radiačních toků ukazuje, jak rychle povrch získává a vydává
            energii zářením. Samostatné měření slunečního a tepelného záření
            v obou směrech umožňuje určit jejich bilanci i sledovat, která
            složka se mění. Pozemní stanice poskytují soustavný místní záznam
            a oporu pro kontrolu družicových výpočtů. Družice rozšiřují pohled
            na radiační výměnu celé Země s vesmírem.
          </p>
        </div>
      </div>
    </article>
  );
}
