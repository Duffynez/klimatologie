import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function RadiometricDatingArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak určujeme stáří přírodních záznamů</h2>
        <p className="article-prose__intro">
          Radiometrické datování určuje stáří materiálu podle proměn radioaktivních
          atomů. Expoziční datování zjišťuje, jak dlouho byl povrch horniny vystaven
          kosmickému záření. Oba postupy umožňují zařadit přírodní záznam do času:
          určit dobu vzniku dřeva, růstu krápníku nebo odkrytí skály po ústupu ledovce.
          Podrobně projdeme datování dřeva pomocí uhlíku ¹⁴C a potom datování
          hornin pomocí beryllia ¹⁰Be. Na jejich výsledky navazují rekonstrukce minulého klimatu.{" "}
          <SourceLink id="DOI_10_1017_RDC_2020_41">(Reimerová a kol. 2020)</SourceLink>{" "}
          <SourceLink id="DOI_10_1016_j_quageo_2007_12_001">(Balco a kol. 2008)</SourceLink>
        </p>

        <h3>Proč může uhlík uchovávat informaci o čase</h3>
        <p>
          Atomy jednoho prvku mohou mít v jádře různý počet neutronů,
          jedněch z částic tvořících atomové jádro. Takovým variantám říkáme
          izotopy. Číslo u značky izotopu udává celkový počet protonů a neutronů
          v jeho jádře. U uhlíku rozlišujeme stabilní
          izotopy ¹²C a ¹³C a radioaktivní ¹⁴C, označovaný také jako radiouhlík.
          Jeho jádro se samovolně mění na jádro dusíku. Ve velkém souboru atomů
          probíhá tato přeměna pravidelným tempem: za přibližně 5 730 let
          se přemění polovina původního množství ¹⁴C. Tuto dobu nazýváme poločas přeměny.{" "}
          <SourceLink id="DOI_10_1017_S0033822200011504">(Libby 1980, princip radiouhlíkového datování)</SourceLink>
        </p>
        <p>
          Radiouhlík průběžně vzniká v atmosféře. Částice přilétající z vesmíru
          vyvolávají srážky, při nichž vznikají neutrony. Jejich reakcí s dusíkem
          vzniká ¹⁴C. Ten se stává součástí oxidu uhličitého a při fotosyntéze
          vstupuje do rostlin. Strom tak při vytváření nového dřeva zabudovává
          také malé množství radioaktivního uhlíku.{" "}
          <SourceLink id="DOI_10_1017_S0033822200011504">(Libby 1980)</SourceLink>
        </p>
        <p>
          Jakmile se uhlík v určité části dřeva přestane vyměňovat s okolím,
          další ¹⁴C už do ní nepřibývá. Přítomné atomy se dál rozpadají, a jejich
          podíl proto klesá. Po jednom poločasu zbývá polovina, po dvou čtvrtina
          a po třech osmina výchozího množství. Měření tohoto úbytku nám umožní
          určit dobu, která od uzavření uhlíku uplynula. Pro datování dřeva je tak
          podstatná doba vzniku odebraných letokruhů.{" "}
          <SourceLink id="DOI_10_1017_S0033822200011504">(Libby 1980)</SourceLink>{" "}
          <SourceLink id="DOI_10_1191_0959683606hl964rp">(Joerin a kol. 2006, výběr letokruhů)</SourceLink>
        </p>

        <h3>Co odebereme a jak připravíme vzorek</h3>
        <p>
          V přírodním archivu hledáme materiál, jehož vznik dokážeme spojit
          se zkoumanou událostí. Dřevo překryté ledovcem vypovídá o době,
          kdy na jeho místě mohla růst vegetace. Rostlinný zbytek ve vrstvě
          jezerního sedimentu pomáhá datovat tuto část usazeniny.
          Při odběru proto zaznamenáme polohu vzorku a jeho vztah k okolním
          vrstvám. U dřeva vybereme konkrétní letokruhy, které budeme analyzovat.{" "}
          <SourceLink id="DOI_10_1191_0959683606hl964rp">(Joerin a kol. 2006, dřevo z předpolí ledovců)</SourceLink>{" "}
          <SourceLink id="DOI_10_1017_RDC_2020_41">(Reimerová a kol. 2020, rostlinné zbytky v jezerních sedimentech)</SourceLink>
        </p>
        <p>
          Z odebraného dřeva nejprve oddělíme zeminu, kořínky a další příměsi.
          V laboratoři následuje chemické čištění. Kyselina odstraní uhličitany,
          zásaditý roztok látky, které do dřeva mohly proniknout z půdy.
          Některé postupy dále izolují celulózu, pevnou složku buněčných stěn.
          Cílem je získat uhlík patřící vybranému rostlinnému materiálu.{" "}
          <SourceLink id="WEB_NOSAMS_Sample_Preparation">(NOSAMS, příprava rostlin a dřeva)</SourceLink>{" "}
          <SourceLink id="DOI_10_1017_RDC_2020_49">(Wacker a kol. 2020, izolace celulózy)</SourceLink>
        </p>
        <p>
          Vyčištěný vzorek spálíme a vzniklý oxid uhličitý převedeme na pevný
          uhlík, grafit. Malé množství grafitu vtlačíme do držáku, který vložíme
          do přístroje. Tím jsme připravili uhlík do podoby vhodné pro počítání
          jeho izotopů. Toto provedení používá například oceánografická
          laboratoř NOSAMS ve Woods Hole.{" "}
          <SourceLink id="WEB_NOSAMS_14C_Procedures_2023">(NOSAMS, laboratorní postup z roku 2023)</SourceLink>
        </p>

        <h3>Jak změříme zbývající radiouhlík</h3>
        <p>
          Atomy počítá urychlovačový hmotnostní spektrometr, označovaný zkratkou
          AMS z anglického <i>accelerator mass spectrometry</i>. Ze vzorku
          uvolní elektricky nabité částice, ionty, a urychlí je elektrickým polem.
          Magnety následně rozdělují jejich dráhy podle hmotnosti a náboje.
          Detektor zaznamenává jednotlivé vzácné ionty ¹⁴C, zatímco mnohem
          početnější stabilní izotopy vytvářejí měřitelný elektrický proud.
          Z obou údajů získáme poměr radioaktivního a stabilního uhlíku.{" "}
          <SourceLink id="WEB_NOSAMS_14C_Calculations">(NOSAMS, měření a zpracování signálu)</SourceLink>{" "}
          Rozdělování iontů podrobněji vysvětluje článek o{" "}
          <Link href="/metody/hmotnostni-a-izotopova-spektrometrie">hmotnostní a izotopové spektrometrii</Link>.
        </p>
        <p>
          Společně se vzorkem měříme referenční materiál se známým obsahem ¹⁴C.
          Ten propojí odezvu přístroje s dohodnutou stupnicí. Celou přípravou
          projde také materiál bez zjistitelného původního radiouhlíku, takzvaný
          slepý vzorek. Jeho signál ukáže příspěvek přidaný při zpracování,
          který při výpočtu odečítáme.{" "}
          <SourceLink id="WEB_NOSAMS_14C_Procedures_2023">(NOSAMS, reference a korekce)</SourceLink>
        </p>
        <p>
          Další úprava se týká samotné rostliny. Při přijímání uhlíku dává
          mírnou přednost lehčím izotopům, a tím mění jejich zastoupení.
          Část rozdílu v obsahu ¹⁴C tak vzniká už při růstu.
          Změříme proto také poměr stabilních izotopů ¹³C a ¹²C, které
          se radioaktivně nerozpadají. Z něj odhadneme velikost tohoto
          výběru a převedeme výsledek na společnou dohodnutou úroveň.
          Pak můžeme obsah radiouhlíku porovnávat mezi různými vzorky.{" "}
          <SourceLink id="WEB_NOSAMS_14C_Calculations">(NOSAMS, izotopová normalizace)</SourceLink>
        </p>
        <p>
          Výsledkem těchto kroků je číslo <InlineMath tex="F" />, které vyjadřuje
          obsah radiouhlíku vůči dohodnuté moderní referenci. Je bez jednotky:
          hodnota 1 odpovídá referenci, hodnota 0,5 polovině jejího obsahu.
          Laboratoř ho převádí na konvenční radiouhlíkové stáří{" "}
          <InlineMath tex="t_{14}" /> v letech podle vztahu:
        </p>
        <Equation tex={String.raw`t_{14}=-8033\,\ln(F)`} />
        <p>
          Značka <InlineMath tex="\ln" /> označuje přirozený logaritmus.
          Každý další poločas snižuje zbývající podíl uhlíku na polovinu.
          Logaritmus umožní z výsledného podílu zjistit, kolik takových
          časových úseků uplynulo. Konstanta 8 033 let vychází z historicky
          používaného poločasu 5 568 let. Ten se pro vykazování radiouhlíkového
          stáří zachoval dohodou, aby bylo možné porovnávat laboratorní výsledky.
          Hodnota <InlineMath tex="t_{14}" /> je proto mezivýsledek na společné
          stupnici. Převod na kalendářní čas je dalším krokem.{" "}
          <SourceLink id="WEB_NOSAMS_14C_Calculations">(NOSAMS, definice radiouhlíkového stáří)</SourceLink>
        </p>

        <h3>Proč potřebujeme kalibrační křivku</h3>
        <p>
          Obsah ¹⁴C v atmosféře se v minulosti měnil. Strom rostoucí v jedné
          době proto nemusel začínat se stejným podílem radiouhlíku jako strom
          z jiné doby. Abychom určili kalendářní stáří, porovnáváme vzorek
          s materiálem, jehož dobu vzniku známe jiným způsobem. Významnou
          část této časové opory tvoří letokruhy datované jejich překrývajícími
          se posloupnostmi. Postup popisuje{" "}
          <Link href="/metody/dendrochronologie">dendrochronologie</Link>.{" "}
          <SourceLink id="DOI_10_1017_RDC_2020_41">(Reimerová a kol. 2020)</SourceLink>
        </p>
        <p>
          Z dvojic známého kalendářního stáří a změřeného radiouhlíkového
          stáří sestavujeme kalibrační křivku. Pro suchozemské vzorky ze severní
          polokoule slouží IntCal20. Pokrývá 0 až 55 000 kalendářních let před
          rokem 1950. Starší část propojuje také další samostatně datované
          archivy, například jezerní usazeniny, korály a krápníky.
          Označení <i>cal BP</i> znamená kalendářní roky před rokem 1950.
          Samotné <i>BP</i> u laboratorního výsledku obvykle označuje konvenční
          radiouhlíkové stáří se stejným referenčním rokem.{" "}
          <SourceLink id="DOI_10_1017_RDC_2020_41">(IntCal20 a časové stupnice)</SourceLink>
        </p>
        <p>
          Při kalibraci hledáme na křivce kalendářní roky, kterým odpovídá
          naměřené radiouhlíkové stáří. Křivka se vlní, takže stejnému výsledku
          může odpovídat několik různých období. Výpočet porovná výsledek měření
          s každým úsekem křivky a zahrne nejistotu obou hodnot. Vznikne
          rozdělení pravděpodobnosti: ukáže, které kalendářní roky jsou
          se vzorkem lépe slučitelné. Z něj vymezíme časový interval
          s uvedenou pravděpodobností. Tento převod potřebujeme i u velmi přesného
          laboratorního měření.{" "}
          <SourceLink id="DOI_10_1017_RDC_2020_41">(Reimerová a kol. 2020, kalibrace dat)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/radiometric-dating/radiocarbon-path.svg" width={760} height={880}
            alt="Pět navazujících kroků: vznik a uzavření uhlíku ve dřevě, čištění a příprava grafitu, měření izotopů s referencemi, radiouhlíkové stáří, kalibrace na kalendářní období."
            className="article-figure__media" unoptimized />
          <figcaption>
            Postup radiouhlíkového datování. Šipky spojují fyzický vzorek,
            laboratorní výsledek a jeho časové zařazení. Kalibrace přidává
            informaci z nezávisle datovaných archivů. Vlastní schéma podle{" "}
            <SourceLink id="WEB_NOSAMS_14C_Procedures_2023">metodiky NOSAMS</SourceLink> a{" "}
            <SourceLink id="DOI_10_1017_RDC_2020_41">IntCal20</SourceLink>.
          </figcaption>
        </figure>
        <p>
          V sedimentárním jádře přiřadíme vypočtené stáří k hloubce odebraného
          vzorku. Několik takových bodů vytvoří časovou oporu pro další vrstvy.
          Rekonstrukce z <Link href="/metody/chemicke-a-biologicke-paleoteplomery">chemických paleoteploměrů</Link>,
          pylu nebo dalších ukazatelů pak můžeme číst jako posloupnost
          změn v čase a porovnávat je se záznamy odjinud.{" "}
          <SourceLink id="DOI_10_5194_essd_12_1053_2020">(Jonkers a kol. 2020, chronologie mořských záznamů)</SourceLink>
        </p>

        <h3>Jak datujeme odkrytí horniny</h3>
        <p>
          Odkrytá hornina může uchovávat jiný časový záznam. Částice kosmického
          záření v ní vytvářejí nové atomy, takzvané kosmogenní nuklidy.
          Nuklid označuje atomy s určitým složením jádra. V křemeni vzniká
          například beryllium ¹⁰Be, zejména při srážkách částic s jádry kyslíku.
          Jeho množství na odkrytém povrchu postupně narůstá. Silná vrstva ledu
          nebo horniny přísun částic výrazně omezuje, takže odkrytí povrchu
          spustí hromadění, které můžeme využít k datování.{" "}
          <SourceLink id="DOI_10_1016_j_quageo_2016_02_001">(Corbettová a kol. 2016)</SourceLink>
        </p>
        <p>
          Pro datování ledovcové morény, tedy valu materiálu uloženého ledovcem,
          vybíráme stabilní balvany s odkrytým povrchem. Odebereme vzorek
          jeho svrchní části. Změříme polohu, nadmořskou výšku, tloušťku vzorku
          a zakrytí oblohy okolními svahy. Tyto údaje určují, kolik kosmického
          záření k odebranému materiálu proniká. Stejné množství ¹⁰Be totiž
          při rychlejší tvorbě vznikne za kratší dobu než při pomalejší.{" "}
          <SourceLink id="DOI_10_1016_j_quageo_2007_12_001">(Balco a kol. 2008, vstupy výpočtu)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/radiometric-dating/moraine-sampling.jpg" width={4320} height={3240}
            alt="Dva lidé na velkém balvanu ledovcové morény, stojící pracovnice měří úhel okolního horizontu přístrojem přiloženým k oku."
            className="article-figure__media" unoptimized />
          <figcaption>
            Balvan ledovcové morény v jižní části pohoří Sawatch v Coloradu.
            Stojící pracovnice měří sklonoměrem úhel okolního horizontu,
            potřebný k určení stínění kosmického záření. Vlastní obsah ¹⁰Be
            se měří později v laboratoři. Foto Andrew Cyr, USGS,
            zveřejněno 16. července 2015. Public domain, převzato beze změny.{" "}
            <SourceLink id="WEB_USGS_Moraine_Sampling_2015">Původ a podmínky použití snímku</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Z rozdrcené horniny oddělíme a vyčistíme křemen. Přidáme známé množství
          stabilního beryllia ⁹Be, s nímž při měření
          porovnáme množství velmi vzácného ¹⁰Be. Křemen rozpustíme a beryllium chemicky
          oddělíme od ostatních prvků. AMS potom změří poměr ¹⁰Be a ⁹Be.
          Ze známého přídavku ⁹Be a hmotnosti křemene vypočteme, kolik atomů
          ¹⁰Be připadá na gram vzorku. Také zde používáme měřicí standardy
          a slepé vzorky.{" "}
          <SourceLink id="DOI_10_1016_j_quageo_2016_02_001">(Corbettová a kol. 2016, příprava a měření)</SourceLink>
        </p>
        <p>
          Zbývá stanovit rychlost, jakou ¹⁰Be v daném místě vzniká.
          Opíráme se o povrchy se stářím známým z jiného datování a o popis
          průchodu kosmického záření atmosférou a horninou. Poločas ¹⁰Be činí přibližně 1 400 000 let, takže za mnohem kratší
          dobu se rozpadne jen malá část vytvořených atomů.{" "}
          <SourceLink id="DOI_10_1016_j_quageo_2016_02_001">(Corbettová a kol. 2016)</SourceLink>{" "}
          Pro takovou dobu můžeme princip vyjádřit jednoduše. Je-li rychlost tvorby stálá, povrch neubývá erozí a na začátku
          obsahuje zanedbatelné množství ¹⁰Be, platí přibližně:
        </p>
        <Equation tex={String.raw`t_{\mathrm{exp}}\approx\frac{C}{P}`} />
        <p>
          Expoziční stáří <InlineMath tex="t_{\mathrm{exp}}" /> je v letech,
          koncentrace <InlineMath tex="C" /> udává počet atomů ¹⁰Be v gramu
          křemene a rychlost tvorby <InlineMath tex="P" /> počet nových atomů
          v gramu za rok. Dělení tedy říká, kolik let bylo potřeba k nahromadění
          změřeného množství. Úplný výpočet zahrnuje také rozpad ¹⁰Be a změny
          rychlosti tvorby v čase. Jeho výsledkem je doba vystavení povrchu
          záření. U skály obnažené ústupem ledovce ji spojujeme s odledněním,
          u morény s uložením a odkrytím balvanů.{" "}
          <SourceLink id="DOI_10_1016_j_quageo_2007_12_001">(Balco a kol. 2008, výpočet expozičního stáří)</SourceLink>
        </p>

        <h3>Další varianty a vývoj metody</h3>
        <p>
          U radiouhlíkového datování volíme kalibrační křivku podle původu uhlíku.
          Pro suchozemské vzorky z jižní polokoule slouží SHCal20.
          Pro mořské schránky používáme Marine20 a místní úpravu.
          Jejich uhlík pochází z oceánu, ve kterém se různě staré vody
          promíchávají a vyměňují uhlík s atmosférou. Mořská křivka tento
          odlišný vývoj převádí do vztahu mezi radiouhlíkovým a kalendářním stářím.{" "}
          <SourceLink id="DOI_10_1017_RDC_2020_41">(Reimerová a kol. 2020, volba křivky)</SourceLink>
        </p>
        <p>
          Krápníky a korály můžeme datovat podle přeměny uranu na thorium.
          Při vzniku uhličitanu se do něj dostává uran z vody. Jeho přeměnami
          postupně přibývá ²³⁰Th. Z poměrů izotopů uranu a thoria,
          po započtení případného počátečního thoria, určujeme dobu od vzniku
          dané vrstvy. U vhodně zachovaného materiálu sahá tato metoda přibližně
          do 600 000 let. Její využití rozvádí článek o{" "}
          <Link href="/metody/krapniky-a-jeskynni-sedimenty">krápnících a jeskynních sedimentech</Link>.{" "}
          <SourceLink id="DOI_10_3285_eg_57_1_2_3">(Scholz a Hoffmann 2008)</SourceLink>
        </p>
        <p>
          Radiouhlíkové datování rozvinuli na konci čtyřicátých let Willard Libby,
          James Arnold a Ernest Anderson. První provedení počítalo radioaktivní
          přeměny a ověřovalo se na dřevu a předmětech známého stáří.
          Libby později popsal, jak srovnání s letokruhy odhalilo potřebu
          kalendářní kalibrace. Urychlovačová spektrometrie rozšířila možnosti
          metody tím, že počítá samotné atomy a vystačí s podstatně menším vzorkem.
          Wacker a kolegové při porovnání moderních laboratoří pracovali
          s jednotlivými letokruhy, pro které by starší přesné měření
          radioaktivních přeměn vyžadovalo mnohem více dřeva.{" "}
          <SourceLink id="DOI_10_1017_S0033822200011504">(Libbyho vlastní popis vývoje, 1980)</SourceLink>{" "}
          <SourceLink id="DOI_10_1017_RDC_2020_49">(Wacker a kol. 2020)</SourceLink>
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          U radiouhlíku rozhoduje čistota a původ vzorku i tvar kalibrační křivky.
          U expozičního datování potřebujeme znát rychlost tvorby nuklidů a historii
          odkrytí povrchu. Ověření radiouhlíkového měření v 16 laboratořích ukázalo,
          že polovina z nich měla soustavné odchylky od společného průměru
          přibližně do 10 radiouhlíkových let. Některé další laboratoře se odchylovaly
          o 20 až 30 let. Porovnání tak doložilo dosažitelnou shodu a současně
          odhalilo podhodnocené nejistoty části měření.{" "}
          <SourceLink id="DOI_10_1017_RDC_2020_49">(Wacker a kol. 2020)</SourceLink>{" "}
          <SourceLink id="DOI_10_1016_j_quageo_2007_12_001">(Balco a kol. 2008)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Co ovlivňuje stáří a jak se kontroluje</summary>
          <p>
            <strong>Materiál a měření.</strong> Příměs mladšího uhlíku může starý
            vzorek omladit, příměs starého uhlíku ho může posunout opačně.
            Slepé vzorky zachycují příspěvek laboratorní přípravy, opakovaná
            měření a kontrolní materiály odhalují rozptyl a posun přístroje.
            NOSAMS zahrnuje do vykázané chyby počítání iontů, opakovatelnost,
            standardy a opravu o slepý vzorek. Rozdíly mezi samostatně odebranými
            a připravenými vzorky mohou být větší.{" "}
            <SourceLink id="WEB_NOSAMS_14C_Procedures_2023">(NOSAMS 2023)</SourceLink>
          </p>
          <p>
            <strong>Kalendářní čas a datovaná událost.</strong> Zvlnění kalibrační
            křivky může rozdělit výsledek do několika období. Rozsah IntCal20
            do 55 000 cal BP je rozsahem křivky, nikoli zárukou datovatelnosti
            každého tak starého vzorku. U dřeva určujeme vznik odebraných letokruhů.
            Mezi jejich vznikem, odumřením stromu a uložením dřeva mohl uplynout
            další čas. Věk dřeva proto spojujeme s ledovcovou událostí podle
            nálezové situace.{" "}
            <SourceLink id="DOI_10_1017_RDC_2020_41">(Reimerová a kol. 2020)</SourceLink>{" "}
            <SourceLink id="DOI_10_1191_0959683606hl964rp">(Joerin a kol. 2006)</SourceLink>
          </p>
          <p>
            <strong>Co ověřilo mezilaboratorní porovnání.</strong> Wackerův tým
            rozeslal dřevo se známými letokruhy z let 1730–1750 a 280–300 n. l.,
            části laboratoří také starší dřevo. Laboratoře vzorky samostatně
            připravovaly a měřily. Směrodatná odchylka výsledků mladších dvou souborů byla přibližně
            21 radiouhlíkových let, zatímco medián hlášených chyb činil 17,5 roku.
            Jde o porovnání samostatných měření, která sdílejí vzorky
            a mezinárodní referenční stupnici. Společný průměr není nezávislou
            hodnotou přesného obsahu ¹⁴C. Letokruhové podklady IntCal20 slouží
            k sestavení kalibrační křivky, proto jejich shodu s touto křivkou
            nepovažujeme za nové nezávislé ověření.{" "}
            <SourceLink id="DOI_10_1017_RDC_2020_49">(Wacker a kol. 2020)</SourceLink>{" "}
            <SourceLink id="DOI_10_1017_RDC_2020_41">(podklady IntCal20)</SourceLink>
          </p>
          <p>
            <strong>Historie horninového povrchu.</strong> Dřívější odkrytí může
            zanechat zděděné ¹⁰Be a zvýšit zdánlivé stáří. Pozdější zakrytí,
            převrácení balvanu nebo odnos povrchu naopak omezí zachovaný záznam.
            Proto se porovnává více balvanů i jejich poloha v terénu.
            Nejistota expozičního stáří zahrnuje měření koncentrace a odhad
            rychlosti tvorby. Povrchy použité k nastavení této rychlosti jsou
            kalibračními podklady. Pokud jejich stáří pochází z radiouhlíku,
            obě datovací metody v tomto bodě sdílejí časovou referenci.{" "}
            <SourceLink id="DOI_10_1016_j_quageo_2007_12_001">(Balco a kol. 2008, kalibrace a meze výpočtu)</SourceLink>
          </p>
        </details>

        <h2>Příklad: stáří dřeva u ledovce Forno</h2>
        <p>
          Joerin a kolegové zkoumali dřevo a rašelinu vyplavené zpod švýcarských
          ledovců. Vzorek dřeva Fo-101 pochází z předpolí ledovce Forno.
          V tabulce 3 jejich studie má laboratorní označení B-8518
          a radiouhlíkové stáří <strong>8 252 ± 31 let BP</strong>.
          Číslo 31 označuje jednu směrodatnou odchylku měření.
          Začneme tímto zveřejněným laboratorním výsledkem. Původní studie pracovala s konvenčním radiouhlíkovým datováním.
          Zde zopakujeme následný převod naměřeného stáří na kalendářní čas.{" "}
          <SourceLink id="DOI_10_1191_0959683606hl964rp">(Joerin a kol. 2006, tabulka 3)</SourceLink>
        </p>
        <p>
          Nejprve můžeme ověřit význam laboratorního čísla. Obrácením vztahu
          pro radiouhlíkové stáří získáme ekvivalentní podíl vůči moderní
          referenci. Značka <InlineMath tex="e" /> označuje základ přirozeného
          logaritmu:
        </p>
        <Equation tex={String.raw`F=e^{-8252/8033}\approx0{,}358`} />
        <p>
          Publikované stáří tedy odpovídá přibližně 35,8 % obsahu moderní
          reference na konvenční stupnici. Jde o dopočet z publikovaného stáří.
          Nyní potřebujeme určit, kterému kalendářnímu období naměřený
          výsledek odpovídá.
        </p>
        <p>
          Protože jde o suchozemské dřevo ze severní polokoule, použijeme
          IntCal20. Na grafu porovnáváme laboratorní stáří s příslušnou částí
          křivky. Výpočet zahrnuje chybu měření 31 let i nejistotu křivky
          v jednotlivých kalendářních letech. V této ukázce předem
          nezvýhodňujeme žádné období další informací o vzorku.{" "}
          <SourceLink id="WEB_IntCal20_Curve">(veřejná data IntCal20)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/radiometric-dating/forno-calibration.svg" width={760} height={840}
            alt="Nahoře kalibrační křivka IntCal20 pro 9 000 až 9 500 cal BP a naměřené stáří 8 252 let. Dole několik vrcholů kalibrované pravděpodobnosti, medián 9 221 cal BP a centrální interval 9 050 až 9 396 cal BP."
            className="article-figure__media" unoptimized />
          <figcaption>
            Vodorovná osa obou panelů udává kalendářní roky před rokem 1950.
            Nahoře je zeleně IntCal20, rezavě laboratorní stáří vzorku.
            Pásy zobrazují jednu směrodatnou odchylku. Dole je pravděpodobnost
            připadající na jednotlivé roky v našem výpočtu. Světlá plocha
            vyznačuje centrální interval s 95,4 % pravděpodobnosti, svislá
            přerušovaná čára medián. Vlastní výpočet z{" "}
            <SourceLink id="DOI_10_1191_0959683606hl964rp">měření Joerina a kol.</SourceLink> a{" "}
            <SourceLink id="WEB_IntCal20_Curve">křivky IntCal20</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Výsledkem je medián přibližně <strong>9 220 cal BP</strong>:
          polovina vypočtené pravděpodobnosti leží na mladší straně,
          polovina na starší. Centrální interval s 95,4 % pravděpodobnosti
          sahá po zaokrouhlení přibližně od <strong>9 050 do 9 400 cal BP</strong>.
          Jednotlivé roky uvnitř tohoto intervalu nejsou stejně pravděpodobné,
          jak ukazují vrcholy a propady grafu. Původní studie použila starší
          IntCal04 a zveřejnila medián 9 230 cal BP. Zde ukazujeme nový převod
          jednoho jejího měření s výslovně uvedenou křivkou a nastavením.{" "}
          <SourceLink id="DOI_10_1191_0959683606hl964rp">(původní kalibrace z roku 2006)</SourceLink>
        </p>
        <p>
          Stáří zařazuje vznik dřeva do doby, kdy v části povodí dnešního
          ledovce rostla vegetace. Autoři vybírali povodí tak, aby vyloučili
          běžný přísun dřeva ze současných stromů nebo lavin z okolních svahů.
          Soubor 143 datování spolu s nálezovou situací využili k rozpoznání
          období, kdy byly zkoumané ledovce menší než v referenčním roce 1985.
          Jeden kus dřeva tak přispívá k rekonstrukci minulého rozsahu ledovce
          prostřednictvím svého stáří a místa původu.{" "}
          <SourceLink id="DOI_10_1191_0959683606hl964rp">(Joerin a kol. 2006, interpretace souboru)</SourceLink>{" "}
          Takto získaná historie doplňuje novodobá pozorování{" "}
          <Link href="/pozorovani/ustup-ledovcu">ústupu horských ledovců</Link>.
        </p>
        <details className="article-details">
          <summary>Data a přesný postup pro zopakování</summary>
          <p>
            Z tabulky 3 na straně 700 přebíráme řádek Fo-101 / B-8518.
            Autoři datovali 10 až 20 nejvnějších dochovaných letokruhů.
            Používáme jejich zveřejněné stáří a chybu jako výsledek pro jeden
            souhrnný vzorek. Neprovádíme samostatné modelování jednotlivých
            letokruhů. Původní počty radioaktivních přeměn studie neuvádí.
          </p>
          <p>
            Soubor IntCal20 má 9 501 řádků. Mezi jeho body lineárně interpolujeme
            radiouhlíkové stáří i jeho směrodatnou odchylku na mřížku
            0 až 55 000 cal BP s krokem jednoho roku. Pro každý rok vypočteme
            normální věrohodnost měření: rozdíl mezi 8 252 lety a střední
            hodnotou křivky porovnáme s odmocninou součtu čtverců obou
            směrodatných odchylek. Předpokládáme nezávislé normální chyby
            a rovnoměrné předchozí rozdělení kalendářního stáří.
          </p>
          <p>
            Váhy normalizujeme na součet 1. Medián je kvantil 0,5,
            meze centrálního intervalu jsou kvantily 0,023 a 0,977.
            Nezaokrouhlené výsledky na roční mřížce činí 9 221 cal BP
            a 9 050–9 396 cal BP. Jde o centrální interval,
            nikoli soubor nejpravděpodobnějších oddělených úseků.
            Roční krok určuje jemnost výpočtu, nikoli přesnost datování.
            Nepřidáváme rezervoárovou opravu ani podmínky pořadí vrstev.
          </p>
          <ul>
            <li><a href="/data/methods/radiometric-dating/sample.csv">Přepsaný řádek měření a původní kalibrace</a></li>
            <li><a href="/data/methods/radiometric-dating/intcal20-original.14c">Původní soubor IntCal20 beze změny</a></li>
            <li><a href="/data/methods/radiometric-dating/reproduce.py">Výpočet v Pythonu bez doplňkových knihoven</a></li>
            <li><a href="/data/methods/radiometric-dating/results.json">Číselné výsledky</a> a <a href="/data/methods/radiometric-dating/posterior.csv">úplné rozdělení pravděpodobnosti</a></li>
            <li><a href="/data/methods/radiometric-dating/README.txt">Návod a přesný vztah výpočtu</a>, <a href="/data/methods/radiometric-dating/provenance.json">původ dat a kontrolní součty</a></li>
          </ul>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Radioaktivní přeměny a hromadění kosmogenních atomů dávají přírodním
            záznamům časové zařazení. Laboratorní rozbor určí množství izotopů,
            datovací výpočet ho spojí s uplynulou dobou a nálezová situace
            ukáže, ke které události stáří patří.
          </p>
          <p>
            Tyto metody určují stáří organických zbytků, vrstev krápníků a korálů
            i dobu odkrytí hornin a uložení ledovcových morén. Umožňují časově
            porovnávat změny vegetace, teploty, hladiny moře a rozsahu ledovců.
            Radiouhlíková kalibrace IntCal20 pokrývá 0–55 000 kalendářních let
            před rokem 1950, uran-thoriové datování vhodných uhličitanů sahá
            přibližně do 600 000 let.{" "}
            <SourceLink id="DOI_10_1017_RDC_2020_41">(IntCal20)</SourceLink>{" "}
            <SourceLink id="DOI_10_3285_eg_57_1_2_3">(uran-thoriové datování)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
