import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function LidarArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak lidar rozpoznává vrstvy atmosféry a porostu</h2>
        <p className="article-prose__intro">
          Lidar je metoda, která vysílá laserové světlo a zaznamenává jeho návrat
          ze sledovaného prostředí. Z času návratu určuje vzdálenost a ze síly
          signálu získává informace o tom, co světlo zasáhlo. V atmosféře tak
          rozpoznává vrstvy oblaků a aerosolu, tedy drobných pevných či kapalných
          částic rozptýlených ve vzduchu. Při pohledu na les zachycuje uspořádání
          korun a jejich výšku nad půdou. Název pochází z anglického
          Light Detection and Ranging, detekce světlem a měření vzdálenosti.{" "}
          <SourceLink id="WEB_CALIPSO_Final_Report_2026">(Trepte 2026)</SourceLink>{" "}
          a <SourceLink id="DOI_10_1016_j_srs_2020_100002">(Dubayah a kol. 2020)</SourceLink>
        </p>

        <h3>Co prozradí čas návratu světla</h3>
        <p>
          Laser vyšle krátký světelný pulz, tedy záblesk s přesně známým začátkem.
          Molekuly vzduchu, částice nebo povrch přesměrují část světla do okolí.
          Tomuto ději říkáme rozptyl. Malý podíl světla se vrátí k přístroji,
          jehož dalekohled jej soustředí na detektor. Detektor přemění světlo na
          elektrický signál a elektronika zaznamená, jak se tento signál mění
          v čase. Blízké části prostředí se v záznamu ozvou dříve než vzdálené.{" "}
          <SourceLink id="WEB_CALIPSO_Final_Report_2026">(Trepte 2026, přístroj CALIOP)</SourceLink>
        </p>
        <Equation tex={String.raw`r=\frac{c\,\Delta t}{2}`} />
        <p>
          Vzdálenost <InlineMath tex="r" /> získáme v metrech, pokud dobu mezi
          vysláním a návratem <InlineMath tex={String.raw`\Delta t`} /> dosadíme
          v sekundách a rychlost světla v prostředí <InlineMath tex="c" />
          v metrech za sekundu. Ve vzduchu je přibližně 300 milionů metrů za sekundu.
          Dělíme dvěma, protože světlo urazilo cestu k rozptylujícímu místu i zpět.
          Přesný výpočet započítává zpomalení světla v atmosféře. Stejný princip
          času letu používá také <Link href="/metody/aktivni-radarove-mereni">radar</Link>,
          který vysílá rádiové vlny.{" "}
          <SourceLink id="WEB_GEDI_Geolocation_ATBD_2019">(Luthcke a kol. 2019, oddíly 2 a 4)</SourceLink>
        </p>

        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/lidar/principle.svg"
            alt="Lidar vysílá pulz dolů. Návrat z vyšší vrstvy přichází dříve, návrat z nižší vrstvy později. Atmosférické měření skládá profil oblaků a aerosolu, měření porostu rozlišuje návraty z korun a půdy."
            width={760} height={830} sizes="(max-width: 760px) 100vw, 760px" unoptimized />
          <figcaption>
            Modré šipky ukazují vyslané světlo, oranžové jeho návrat.
            V obou kresbách míří přístroj dolů. Z času se určí poloha,
            další zpracování se řídí tím, zda měříme atmosféru, nebo porost.
            Kresba není v měřítku a šířky šipek nevyjadřují sílu signálu.
            Vlastní schéma podle{" "}
            <SourceLink id="WEB_CALIPSO_Final_Report_2026">dokumentace CALIOP</SourceLink>{" "}
            a <SourceLink id="DOI_10_1016_j_srs_2020_100002">popisu GEDI</SourceLink>.
          </figcaption>
        </figure>

        <h3>Měření atmosféry přístrojem CALIOP</h3>
        <p>
          Atmosférickou cestu si projdeme na družicovém lidaru CALIOP,
          z anglického Cloud-Aerosol Lidar with Orthogonal Polarization.
          Jde o lidar pro oblaky a aerosol, který rozlišuje také dva směry
          kmitání elektrického pole světla. Pracoval na družici CALIPSO,
          jejíž vědecká měření probíhala v letech 2006–2023.
          Pro vysvětlení zvolíme jeho noční měření zeleným světlem s vlnovou
          délkou 532 nanometrů. Nanometr je miliardtina metru a vlnová délka
          udává vzdálenost mezi sousedními vrcholy světelné vlny.{" "}
          <SourceLink id="WEB_CALIPSO_Final_Report_2026">(Trepte 2026)</SourceLink>{" "}
          a <SourceLink id="DOI_10_5194_amt_11_1459_2018">(Kar a kol. 2018)</SourceLink>
        </p>
        <p>
          Přístroj vysílal téměř svisle dolů. Světlo se cestou rozptylovalo
          na molekulách vzduchu i na částicích a přijímač zaznamenával návraty
          z jednotlivých výškových úseků. Optické filtry před detektorem
          propouštěly úzké pásmo kolem vyslané vlnové délky, aby omezily světlo
          z jiných zdrojů. Ze záznamu se odečte pozadí, tedy úroveň signálu,
          kterou přístroj zachycuje i bez návratu sledovaného pulzu.{" "}
          <SourceLink id="WEB_CALIPSO_Final_Report_2026">(Trepte 2026)</SourceLink>{" "}
          a <SourceLink id="DOI_10_5194_amt_11_1459_2018">(Kar a kol. 2018, oddíl 2)</SourceLink>
        </p>
        <p>
          Dva stejně rozptylující úseky mohou dát rozdílný signál, pokud jsou
          od přístroje různě daleko nebo je zasáhly různě silné pulzy.
          Ze vzdálenějšího místa zachytí dalekohled menší podíl rozptýleného
          světla. Silnější vyslaný pulz naopak může vytvořit silnější návrat
          i beze změny měřeného prostředí.
          Zpracování proto započítá změřenou energii každého vyslaného pulzu
          a geometrický vliv vzdálenosti. V základní lidarové rovnici se signál
          po odečtení pozadí násobí druhou mocninou vzdálenosti a dělí energií
          pulzu. Tím se připraví k porovnání s fyzikální referencí.{" "}
          <SourceLink id="DOI_10_5194_amt_11_1459_2018">(Kar a kol. 2018, rovnice 1–3)</SourceLink>
        </p>
        <p>
          Referencí noční kalibrace CALIOP ve verzi zpracování 4 je rozptyl
          ve výškách 36–39 kilometrů. Zde převažují molekuly vzduchu.
          Jejich příspěvek lze vypočítat ze známých vlastností rozptylu a z hustoty
          vzduchu, která se určuje z modelových údajů o tlaku a teplotě.
          Výpočet zahrnuje také malý zbytkový příspěvek aerosolu a zeslabení
          světla cestou. Porovnáním očekávaného a zaznamenaného signálu vznikne
          kalibrační koeficient. Ten umožní převést odezvu detektoru
          na fyzikální veličinu společnou různým měřením.{" "}
          <SourceLink id="DOI_10_5194_amt_11_1459_2018">(Kar a kol. 2018, oddíly 2 a 3)</SourceLink>
        </p>

        <h3>Jak číst atmosférický profil</h3>
        <p>
          Základním výstupem je profil zeslabeného zpětného rozptylu.
          Profil znamená řadu hodnot seřazených podle výšky.
          Zpětný rozptyl popisuje, jak silně prostředí posílá světlo zpět k lidaru.
          Slovo „zeslabený“ připomíná, že část světla se ztratila z paprsku cestou
          do měřené vrstvy a při návratu. Hodnota v každé výšce proto závisí
          na místním rozptylu i na tom, kolik světla prošlo vrstvami nad ní.
          Sousední profily podél dráhy družice vytvoří svislý řez atmosférou,
          v němž jsou vidět polohy a rozsah oblaků a aerosolových vrstev.{" "}
          <SourceLink id="DOI_10_5194_acp_13_3345_2013">(Winker a kol. 2013, oddíl 2)</SourceLink>
        </p>
        <p>
          Pro klimatologii je užitečné zjistit i to, jak částice záření zeslabují.
          Poměrný úbytek světla z paprsku na jednotku délky dráhy popisuje
          koeficient extinkce. Úbytek vztahuje k množství světla, které
          do daného úseku vstoupilo. Zahrnuje rozptyl do jiných směrů
          i pohlcení a může se vyjadřovat v převrácených kilometrech.
          K jeho odhadu potřebujeme vztah mezi světlem vráceným k přístroji
          a světlem odstraněným z původního paprsku celkem.
          Tento vztah závisí na druhu částic.{" "}
          <SourceLink id="DOI_10_5194_acp_13_3345_2013">(Winker a kol. 2013, oddíl 2)</SourceLink>
        </p>
        <p>
          Zpracování CALIOP nejprve rozpozná vrstvy a podle jejich optických
          vlastností, výšky a dalších údajů odliší oblaky a druhy aerosolu.
          Pro vybraný druh použije poměr extinkce ke zpětnému rozptylu,
          označovaný jako lidarový poměr. S jeho pomocí postupuje od horních
          vrstev dolů: odhaduje extinkci a započítává zeslabení, které již světlo
          prodělalo. Výsledkem je profil extinkce odvozený z měření
          a ze zvoleného vztahu pro částice.{" "}
          <SourceLink id="DOI_10_5194_acp_13_3345_2013">(Winker a kol. 2013)</SourceLink>
        </p>
        <p>
          Winker a kolegové spojili šest let měření do měsíčních prostorových
          přehledů. Před průměrováním vyřadili nevhodná měření podle příznaků
          kvality a odlišili oblaky, aerosol a části profilu, kam světlo
          neproniklo. Takto získali obraz výškového rozložení aerosolu a jeho
          sezónních změn. Ten ukazuje například přepravu částic ve vyšších
          vrstvách atmosféry, kterou samotný součet aerosolu v celém sloupci
          vzduchu nerozliší.{" "}
          <SourceLink id="DOI_10_5194_acp_13_3345_2013">(Winker a kol. 2013, oddíly 3–5)</SourceLink>
        </p>

        <h3>Co zaznamená lidar nad lesem</h3>
        <p>
          Při měření vegetace hledáme návraty od listů, větví a půdy.
          Přístroj GEDI, Global Ecosystem Dynamics Investigation, byl navržen
          pro měření struktury ekosystémů z Mezinárodní vesmírné stanice.
          Vysílá blízké infračervené světlo o vlnové délce 1 064 nanometrů.
          Jeden pulz osvítí na zemi plochu o průměru přibližně 25 metrů,
          označovanou jako stopa. V této ploše může být více korun i volná místa
          mezi nimi.{" "}
          <SourceLink id="DOI_10_1016_j_srs_2020_100002">(Dubayah a kol. 2020)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/lidar/gedi-receiver.jpg"
            alt="Velké kruhové zrcadlo přijímacího dalekohledu GEDI v čistém prostoru. V zrcadle je vidět odraz inženýrky Bente Eegholmové při práci na optickém sestavení."
            width={1200} height={801} sizes="(max-width: 800px) 100vw, 800px" unoptimized />
          <figcaption>
            Přijímací dalekohled GEDI při přípravě v Goddardově středisku NASA.
            Hlavní zrcadlo shromažďuje slabé světlo vracející se z porostu
            a půdy. Vidíme v něm odraz Bente Eegholmové, která vedla optické
            sestavení. Foto Desiree Stover / NASA, před odesláním přístroje
            k vypuštění, zveřejněno 1. února 2019.{" "}
            <SourceLink id="WEB_NASA_GEDI_Receiver_Photo_2019">Původní snímek</SourceLink>,{" "}
            <SourceLink id="WEB_NASA_Guidelines_for_using_NASA_Images_and_Media_Guide_e6f9e9e4">podmínky použití NASA</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Část pulzu se vrátí z horních větví. Další světlo pokračuje mezerami
          mezi listy a větvemi níže a část dosáhne půdy. Přijímač zaznamenává
          celý časový průběh vracejícího se signálu. Vzniká křivka, jejíž
          jednotlivé vrcholy zachycují silnější návraty z různých částí
          osvětlené plochy. Při pohledu dolů přichází návrat z korun dříve
          než návrat ze země.{" "}
          <SourceLink id="DOI_10_1016_j_srs_2020_100002">(Dubayah a kol. 2020)</SourceLink>
        </p>
        <p>
          Pro převod času na výšku potřebujeme polohu přístroje a směr,
          kterým vysílal. Polohu poskytuje družicová navigace, orientaci mimo
          jiné kamery sledující hvězdy. Výpočet opravuje zpoždění uvnitř
          přístroje a průchod světla atmosférou. Dokumentace kalibrace GEDI
          využívá také cílená měření nad oceánem: porovnání návratů se známým
          průběhem hladiny umožňuje určit soustavné odchylky směru, času
          a měřené vzdálenosti. Tyto opravy se pak promítnou do polohy
          jednotlivých vzorků záznamu.{" "}
          <SourceLink id="WEB_GEDI_Geolocation_ATBD_2019">(Luthcke a kol. 2019, oddíly 4 a 6)</SourceLink>
        </p>
        <p>
          Další krok vyhledá v křivce návrat z půdy. Program nejprve určí
          úroveň pozadí a jeho kolísání. Křivku vyhladí, aby omezil drobné
          náhodné výkyvy, a vyhledá návraty přesahující zvolený práh nad
          pozadím. Z rozpoznaných vrcholů vybere nejnižší, který podle pravidel
          algoritmu odpovídá skutečnému návratu. Jeho střed slouží jako odhad
          výšky půdy v osvětlené ploše. Odečtením této výšky od výšek dalších
          částí záznamu získáme jejich výšky nad půdou.{" "}
          <SourceLink id="WEB_GEDI_Waveform_ATBD_2019">(Hoftonová a Blair 2019, oddíly 4.3 a 5.2)</SourceLink>
        </p>

        <h3>Výška odvozená z rozložení vráceného světla</h3>
        <p>
          Celý průběh návratu umožňuje popsat více než jediný vrchol koruny.
          Po odečtení pozadí se příspěvky vyhlazeného signálu sčítají
          od spodního okraje rozpoznaného návratu směrem vzhůru.
          Sledujeme, ve které výšce součet dosáhne zvoleného podílu veškeré
          energie tohoto návratu. Započítává se přitom světlo z vegetace
          i ze země.{" "}
          <SourceLink id="WEB_GEDI_Waveform_ATBD_2019">(Hoftonová a Blair 2019, oddíl 4.3.8)</SourceLink>
        </p>
        <p>
          Ukazatel RH98 označuje výšku nad odhadnutou půdou, pod kterou leží
          98 procent této součtové energie. Zkratka RH znamená Relative Height,
          relativní výška. RH98 charakterizuje horní část porostu, ale jeho
          definice je založena na vráceném světle. Hodnota se proto liší od
          výšky nejvyšší větve i od výšky, pod kterou roste 98 procent stromů.
          Ukazatele pro nižší procenta zachycují další části rozložení návratu.{" "}
          <SourceLink id="DOI_10_1016_j_srs_2020_100002">(Dubayah a kol. 2020)</SourceLink>{" "}
          a <SourceLink id="WEB_GEDI_Waveform_ATBD_2019">(Hoftonová a Blair 2019, oddíl 5.2.2)</SourceLink>
        </p>
        <p>
          Elektronika GEDI odečítá sílu signálu v pravidelných časových
          odstupech. Jednotlivým odečtům říkáme časové vzorky.
          Produkt uvádí výšku prvního a posledního vzorku. Pro mezilehlé
          polohy používá výpočet relativních výšek rovnoměrné rozdělení
          tohoto výškového rozdílu. Pokud záznam obsahuje
          <InlineMath tex="N" /> vzorků, je mezi nimi
          <InlineMath tex="N-1" /> intervalů. Výškový krok je:
        </p>
        <Equation tex={String.raw`\delta z=\frac{z_0-z_{N-1}}{N-1}`} />
        <p>
          <InlineMath tex={String.raw`z_0`} /> je výška prvního a
          <InlineMath tex={String.raw`z_{N-1}`} /> posledního vzorku v metrech.
          Obě se vztahují ke stejnému referenčnímu elipsoidu, tedy k hladké
          matematické ploše přibližující tvar Země.
          Krok <InlineMath tex={String.raw`\delta z`} /> vychází v metrech
          na jeden interval. Záznam z přístroje mířícího dolů postupuje
          od vyšších poloh k nižším.{" "}
          <SourceLink id="WEB_GEDI_Geolocation_ATBD_2019">(Luthcke a kol. 2019)</SourceLink>{" "}
          a <SourceLink id="WEB_GEDI_Waveform_ATBD_2019">(Hoftonová a Blair 2019, oddíl 5.2.1)</SourceLink>
        </p>
        <p>
          Program přiřadí polohu v záznamu také středu návratu z půdy a místu,
          kde součet energie dosáhl 98 procent. Jejich vzdálenost ve vzorcích
          násobená výškovým krokem poskytne RH98:
        </p>
        <Equation tex={String.raw`h_{98}=(i_{\mathrm{p}}-i_{98})\,\delta z`} />
        <p>
          <InlineMath tex={String.raw`h_{98}`} /> je hledaná výška v metrech,
          <InlineMath tex={String.raw`i_{\mathrm{p}}`} /> poloha středu návratu
          z půdy a <InlineMath tex={String.raw`i_{98}`} /> poloha 98procentní
          hranice. Polohy jsou čísla vzorků a mohou ležet i mezi dvěma vzorky.
          Půda se v záznamu objeví později, proto od jejího vyššího čísla
          odečítáme číslo polohy v koruně. Stejný postup se používá
          pro další procentní hranice.{" "}
          <SourceLink id="WEB_GEDI_Waveform_ATBD_2019">(Hoftonová a Blair 2019, oddíl 5.2.2)</SourceLink>
        </p>
        <p>
          Pro výzkum uhlíkového cyklu lze tyto výškové ukazatele propojit
          s množstvím nadzemní biomasy, tedy hmotností živých nadzemních částí
          rostlin. Duncansonová a kolegové sestavili vztahy mezi ukazateli
          laserového návratu a biomasou odhadnutou z terénních měření stromů.
          Pro jejich sestavení použili návraty podobné GEDI, které vypočítali
          z podrobných leteckých laserových měření nad terénními plochami.
          Rozlišili přitom skupiny porostů a oblasti světa.
          Lidar dodává prostorovou strukturu, terénní údaje vztah mezi touto
          strukturou a hmotností. Odhad biomasy pak poskytuje podklad pro
          stanovení zásoby uhlíku v lesích.{" "}
          <SourceLink id="DOI_10_1016_j_rse_2021_112845">(Duncansonová a kol. 2022)</SourceLink>
        </p>

        <h3 id="dalsi-provedeni">Vývoj a další provedení</h3>
        <p>
          Laserové sledování atmosféry se rozvíjelo už v šedesátých letech.
          Fiocco a Grams popsali měření z Aljašky a Švédska v létě 1964,
          při kterém rubínový laser a přijímací dalekohled zachycovaly vrstvy
          vysoko v atmosféře. Pozdější družicová měření rozšířila pokrytí na
          velkou část Země. U vegetace předcházely GEDI letecké přístroje,
          na nichž se rozvíjel záznam a rozbor celého průběhu návratu.{" "}
          <SourceLink id="DOI_10_3402_tellusa_v18i1_9185">(Fiocco a Grams 1966)</SourceLink>{" "}
          a <SourceLink id="DOI_10_1016_j_srs_2020_100002">(Dubayah a kol. 2020)</SourceLink>
        </p>
        <p id="ramanuv-lidar">
          Jinou variantou je Ramanův lidar. Sleduje slabou část rozptýleného
          světla, která si při setkání s molekulou vyměnila energii a změnila
          vlnovou délku. Přijímač může oddělit návraty charakteristické pro
          vodní páru a pro dusík. Jejich poměr po kalibraci a započtení průchodu
          atmosférou poskytne výškový profil vodní páry. Tím lidar doplňuje
          postupy popsané v článku o <Link href="/pozorovani/narust-vlhkosti/#ramanuv-lidar">vlhkosti atmosféry</Link>.
          Davidová a kolegové například zkoumali kalibraci a stabilitu
          pozemního přístroje Rameau.{" "}
          <SourceLink id="DOI_10_5194_amt_10_2745_2017">(Davidová a kol. 2017)</SourceLink>
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Dosah lidaru omezuje zeslabení světla v prostředí. Pod hustým oblakem
          může signál zcela chybět a u hustého porostu se obtížněji rozpoznává
          půda. Odhad extinkce závisí na zvoleném vztahu pro částice, výšku
          porostu ovlivňuje i sklon terénu. Kalibraci CALIOP prověřilo
          porovnání s leteckým lidarem: při 35 nočních letech byl průměrný
          rozdíl zeslabeného zpětného rozptylu přibližně 1,6 procenta.
          Tento výsledek se vztahuje k porovnaným profilům, nikoli k přesnosti
          všech odvozených veličin.{" "}
          <SourceLink id="DOI_10_5194_amt_11_1459_2018">(Kar a kol. 2018)</SourceLink>{" "}
          a <SourceLink id="DOI_10_1016_j_srs_2020_100002">(Dubayah a kol. 2020)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Co ovlivňuje výsledek a jak se kontroluje</summary>
          <p>
            Světlo pozadí a kolísání detektoru znesnadňují rozpoznání slabých
            vrstev. Průměrování více pulzů zvyšuje jejich rozpoznatelnost,
            ale slučuje větší část prostoru. Hustý oblak může zastínit vrstvy
            pod sebou. Chybějící údaj proto neznamená nulový aerosol.
            Výběr profilů a rozdíly mezi denními a nočními podmínkami se
            promítají i do měsíčních průměrů. Dokumentace konkrétní verze
            určuje, které záznamy byly zahrnuty.{" "}
            <SourceLink id="DOI_10_5194_acp_13_3345_2013">(Winker a kol. 2013)</SourceLink>
          </p>
          <p>
            Kar a kolegové porovnali noční CALIOP s leteckým přístrojem HSRL,
            High Spectral Resolution Lidar, v letech 2006–2014, převážně mezi
            30. a 40. stupněm severní šířky. HSRL odděluje molekulární
            a částicový příspěvek podle jemných rozdílů ve spektru světla.
            CALIOP ve verzi 4 poskytoval v průměru o 1,6 procenta nižší
            zeslabený zpětný rozptyl. Autoři uvádějí také váženou směrodatnou
            odchylku 2,4 procenta. Jde o souhrn rozdílů v tomto porovnání,
            ne o univerzální interval chyby jednotlivého pulzu.{" "}
            <SourceLink id="DOI_10_5194_amt_11_1459_2018">(Kar a kol. 2018, oddíl 4)</SourceLink>
          </p>
          <p>
            Letecká data nesloužila jako reference molekulární kalibrace
            CALIOP. Porovnání však sdílelo modelové údaje pro opravu
            molekulárního a ozonového zeslabení nad letadlem a výběr používal
            i rozpoznání vrstev z CALIOP. Nezachycený aerosol nad letadlem
            mohl vysvětlit část rozdílu. Stabilitu kalibrace autoři sledovali
            také kolem změn optického seřízení přístroje. Kontrola dlouhé
            časové řady tedy zahrnuje přímé porovnání i sledování změn
            samotného měřidla.{" "}
            <SourceLink id="DOI_10_5194_amt_11_1459_2018">(Kar a kol. 2018, oddíly 3 a 4)</SourceLink>
          </p>
          <p>
            U GEDI se v jedné stopě sčítají návraty z více míst.
            Svažitá půda se ozývá po delší dobu a může se překrývat s návraty
            z nízké vegetace. Výběr zemního vrcholu a práh rozpoznání signálu
            proto ovlivňují relativní výšky. Rozestup vzorků kolem 15 centimetrů
            vyjadřuje hustotu časového záznamu, nikoli nejistotu výšky stromů.
            Data nesou příznaky kvality a informace o použitém algoritmu.
            Výpočet níže opakuje závěrečný převod produktu verze 001,
            samostatně neověřuje správnost jeho výběru půdy.{" "}
            <SourceLink id="WEB_GEDI_Waveform_ATBD_2019">(Hoftonová a Blair 2019)</SourceLink>{" "}
            a <SourceLink id="DOI_10_1016_j_srs_2020_100002">(Dubayah a kol. 2020)</SourceLink>
          </p>
          <p>
            Odhad biomasy přidává nejistotu terénních údajů a vztahu mezi
            strukturou a hmotností. Duncansonová a kolegové vyhodnocovali
            modely geografickou křížovou validací. Vztah nastavili na datech
            z části oblastí a hodnotili jej v dalších oblastech téže skupiny
            porostů. Výsledky této kontroly používali také při výběru modelu.
            Zůstává ale závislá na pokrytí dostupných terénních souborů
            a na způsobu, jakým z rozměrů stromů odhadují biomasu.{" "}
            <SourceLink id="DOI_10_1016_j_rse_2021_112845">(Duncansonová a kol. 2022)</SourceLink>
          </p>
        </details>

        <h2>Příklad: výška porostu z jednoho pulzu GEDI</h2>
        <p>
          Použijeme skutečné měření z 18. dubna 2019 v brazilské oblasti
          Cerrado, přibližně na 13,7343° jižní šířky a 44,1246° západní délky.
          Jde o záznam zpřístupněný ve výukovém výřezu projektu rGEDI.
          Obsahuje křivku návratu z produktu GEDI L1B i již vypočtené polohy
          z produktu L2A, obojí ve verzi 001. L1B poskytuje opravený záznam
          s určenou polohou, L2A výsledek rozpoznání půdy a výškové ukazatele.
          Zopakujeme poslední krok: převod poloh v záznamu na relativní výšku.{" "}
          <SourceLink id="WEB_rGEDI_Frozen_Samples_2026">(veřejný výřez rGEDI)</SourceLink>,{" "}
          <SourceLink id="DOI_10_5067_GEDI_GEDI01_B_001">(GEDI L1B)</SourceLink>{" "}
          a <SourceLink id="DOI_10_5067_GEDI_GEDI02_A_001">(GEDI L2A)</SourceLink>
        </p>
        <p>
          Křivka níže ukazuje sílu přijatého signálu po odečtení zveřejněné
          střední úrovně pozadí. Výška na svislé ose se vztahuje ke středu
          zemního návratu určenému produktem L2A. Je vidět silný návrat
          v okolí půdy a další nad ním. Čárkovaná čára označuje RH98 převzaté
          z téhož produktu.
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/lidar/gedi-waveform.svg"
            alt="Skutečný návrat pulzu GEDI z porostu v Cerradu. Vodorovná osa ukazuje signál po odečtení pozadí, svislá výšku nad odhadnutou půdou. RH98 je 10,90 metru."
            width={760} height={720} sizes="(max-width: 760px) 100vw, 760px" unoptimized />
          <figcaption>
            Modrá křivka je záznam L1B po odečtení pozadí, bez našeho dalšího
            vyhlazení. Šedá čára označuje půdu, oranžová RH98 z L2A.
            Vodorovné hodnoty jsou číselné jednotky přijímače po odečtení
            pozadí, nikoli počet listů. Graf zobrazuje výškový výřez, ke stažení
            je všech 878 vzorků. Vlastní graf z{" "}
            <SourceLink id="WEB_rGEDI_Frozen_Samples_2026">dat GEDI ve výřezu rGEDI</SourceLink>.
          </figcaption>
        </figure>
        <p>
          První vzorek leží podle L1B ve výšce 840,0280 metru a poslední
          ve výšce 708,6272 metru vůči referenčnímu elipsoidu.
          Záznam má 878 vzorků, tedy 877 intervalů. Z jejich výškového
          rozdílu vypočteme krok:
        </p>
        <Equation tex={String.raw`\begin{array}{rcl}\delta z&=&\frac{840{,}0280-708{,}6272}{877}\,\mathrm{m}\\&\approx&0{,}14983\,\mathrm{m}\end{array}`} />
        <p>
          Zpracování L2A umístilo střed zemního návratu na pozici 384,75
          a hranici 98 procent energie na pozici 312,00.
          Rozdíl je 72,75 intervalu. Po převodu na metry dostaneme:
        </p>
        <Equation tex={String.raw`\begin{array}{rcl}h_{98}&=&(384{,}75-312{,}00)\,\delta z\\&\approx&72{,}75\cdot0{,}14983\,\mathrm{m}\\&\approx&10{,}90\,\mathrm{m}\end{array}`} />
        <p>
          Výsledek 10,90 metru odpovídá zveřejněnému RH98 po zaokrouhlení
          na centimetry. Znamená výšku 98procentní hranice energie nad
          odhadnutou půdou pro tuto jednu osvětlenou plochu.
          Stejným převodem vychází hranice celého rozpoznaného návratu,
          RH100, na 12,81 metru. Rozdíl obou hodnot ukazuje, proč je při
          porovnávání porostů třeba uvádět, který výškový ukazatel používáme.{" "}
          <SourceLink id="DOI_10_5067_GEDI_GEDI02_A_001">(GEDI L2A V001)</SourceLink>{" "}
          a <SourceLink id="WEB_GEDI_Waveform_ATBD_2019">(definice relativních výšek)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Data a postup pro zopakování výpočtu</summary>
          <p>
            Vybraný pulz má identifikátor <code>19640521100108408</code>
            a patří do svazku <code>BEAM0101</code>. V obou výřezech je
            na pozici 38 při číslování od nuly. Používáme příklad dokumentovaný
            projektem rGEDI, nikoli náhodný nebo reprezentativní výběr
            brazilských lesů. Přesné soubory, původní identifikátory NASA,
            kontrolní součty a neměnnou verzi repozitáře uvádí{" "}
            <a href="/data/methods/lidar/provenance.json">záznam původu dat</a>.
          </p>
          <p>
            Stáhněte <a href="/data/methods/lidar/inputs.json">vstupní hodnoty</a>{" "}
            a <a href="/data/methods/lidar/reproduce.py">výpočet v Pythonu</a>{" "}
            do jedné složky a spusťte <code>python reproduce.py</code>.
            Skript používá plnou přesnost vstupů a vystačí se standardní
            knihovnou. Pro porovnání je dostupný{" "}
            <a href="/data/methods/lidar/result.json">uložený výsledek</a>.
            Polohy zemního návratu a procentních hranic přebíráme z L2A.
            Jejich vyhledání ani původní vyhlazení zde znovu neprovádíme.
          </p>
          <p>
            <a href="/data/methods/lidar/extract.py">Skript pro výběr ze zdrojových souborů</a>{" "}
            stáhne dva malé archivy z pevně určené verze rGEDI, ověří jejich
            kontrolní součty a vytvoří vstupy i{" "}
            <a href="/data/methods/lidar/waveform.csv">úplnou křivku návratu v CSV</a>.
            Vyžaduje knihovnu h5py, ověřeno s verzí 3.16.0.
            Záznam má příznaky <code>quality_flag=1</code>,{" "}
            <code>degrade_flag=0</code> a používá algoritmus 1.
            Jde o historické produkty V001, nikoli o jejich pozdější
            přepracování. <a href="/data/methods/lidar/plot.py">Skript grafu</a>{" "}
            umožňuje zopakovat i zobrazení.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Lidar přiřazuje vrácené světlo ke vzdálenosti, a tím rozlišuje vrstvy, které
            při pohledu shora splývají. Průběh návratu ukazuje, kde se světlo rozptýlilo
            a jak silně. Nad lesem dovoluje odlišit odrazy od korun a od půdy.
          </p>
          <p>
            Lidar umožňuje měřit výšku a rozložení oblaků a aerosolu, výšku lesa i
            uspořádání jeho korun. Tato měření slouží také odhadům biomasy a zásob
            uhlíku. Atmosférický lidar CALIOP zaznamenával rozptyl světla až přibližně
            do výšky 40 km, lesní lidar GEDI měří porost v kruzích o průměru přibližně
            25 m.{" "}
            <SourceLink id="WEB_CALIPSO_Final_Report_2026">(CALIPSO: závěrečná zpráva, 2026)</SourceLink>,{" "}
            <SourceLink id="DOI_10_1016_j_srs_2020_100002">(Dubayah a kol., 2020)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
