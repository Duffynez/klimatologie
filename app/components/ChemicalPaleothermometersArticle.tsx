import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function ChemicalPaleothermometersArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak chemické a biologické paleoteploměry fungují</h2>
        <p className="article-prose__intro">
          Chemické a biologické paleoteploměry jsou postupy, kterými určujeme minulé
          teploty podle složení látek vytvořených organismy. Teplota vody se může
          projevit v zastoupení organických molekul nebo v množství hořčíku
          zabudovaného do vápenaté schránky. Pokud se tento materiál zachová
          v usazenině, můžeme jej odebrat a analyzovat. Podrobně projdeme
          alkenonový teploměr, který využívá látky vytvářené některými mořskými řasami.{" "}
          <SourceLink id="DOI_10_1029_2000GC000058">(Prahl a kol. 2000)</SourceLink>{" "}
          <SourceLink id="DOI_10_1029_2002PA000846">(Anand a kol. 2003)</SourceLink>
        </p>

        <h3>Co řasa ukládá do svých molekul</h3>
        <p>
          Alkenony jsou organické látky s dlouhým řetězcem atomů uhlíku.
          Některé jednobuněčné řasy je hromadí uvnitř buňky jako zásobní lipidy,
          tedy látky příbuzné tukům. Pro náš teploměr jsou podstatné dvě molekuly
          se stejným počtem 37 atomů uhlíku. Jedna má v uhlíkovém řetězci dvě
          dvojné vazby, druhá tři. Dvojná vazba označuje způsob spojení sousedních
          atomů uhlíku. Zkratky C₃₇:₂ a C₃₇:₃ tak říkají, kolik uhlíků
          a kolik těchto vazeb molekula obsahuje.{" "}
          <SourceLink id="DOI_10_1038_s41598_018_20741_2">(Kitamura a kol. 2018)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/organic-thermometers/emiliania.png" width={650} height={650}
            style={{ maxWidth: "560px", marginInline: "auto" }}
            alt="Elektronový mikrosnímek jediné buňky mořské řasy, jejíž povrch pokrývají překrývající se vápenaté destičky."
            className="article-figure__media" unoptimized />
          <figcaption>
            Mořská řasa ve studiích označovaná jako <i>Emiliania huxleyi</i>.
            Na povrchu vidíme vápenaté destičky. Alkenonový teploměr využívá
            organické látky uvnitř buňky. Elektronový mikrosnímek Alison R. Taylor,
            University of North Carolina Wilmington Microscopy Facility,
            obálka PLOS Biology z června 2011. Převzato beze změny,
            licence <SourceLink id="WEB_CC_BY_2_5">CC BY 2.5</SourceLink>.{" "}
            <SourceLink id="WEB_PLOS_Emiliania_Cover_2011">Původ snímku</SourceLink>.
          </figcaption>
        </figure>
        <p>
          V chladnější vodě roste podíl molekul se třemi dvojnými vazbami,
          v teplejší podíl molekul se dvěma. Kitamura a kolegové tuto reakci
          sledovali přímo v kultuře řas: po ochlazení z 25 na 15 °C se již
          vytvořené molekuly C₃₇:₂ přeměňovaly na C₃₇:₃. Řasa tedy na změnu
          teploty reaguje změnou složení svých zásobních látek. Právě poměr
          těchto dvou látek později využijeme k určení teploty.{" "}
          <SourceLink id="DOI_10_1038_s41598_018_20741_2">(experiment Kitamury a kol. 2018)</SourceLink>
        </p>

        <h3>Jak se záznam dostane do mořského dna</h3>
        <p>
          Řasy žijí v osvětlené svrchní části oceánu. Po jejich odumření se část
          organické hmoty dostává do klesajících částic a ukládá se na dně.
          Alkenony mohou přetrvat i po rozkladu samotné buňky. Postupné ukládání
          sedimentu, tedy usazeniny, pak překrývá starší materiál novějšími vrstvami.
          V různých hloubkách dna tak nacházíme molekuly vzniklé v různých dobách.{" "}
          <SourceLink id="DOI_10_1029_2000GC000058">(Prahl a kol. 2000, uchování alkenonového záznamu)</SourceLink>
        </p>
        <p>
          Pro odběr vybíráme místo, kde se ukládá dostatek organického materiálu
          a kde lze sledovat návaznost vrstev. Z výzkumné lodi vyzvedneme sloupec
          usazeniny, sedimentární jádro. Z jeho jednotlivých hloubek odebereme
          malé vzorky a každý rozbor vztáhneme k příslušné vrstvě.
          {" "}
          <SourceLink id="DOI_10_2973_odp_proc_sr_186_111_2003">(Fujine a kol. 2003, odběr vzorků)</SourceLink>{" "}
          Samotné získání jádra podrobně popisuje článek o{" "}
          <Link href="/metody/sedimentarni-jadra-a-stratigrafie">sedimentárních jádrech a stratigrafii</Link>.
        </p>
        <p>
          Hloubku vzorku potřebujeme spojit také s jeho stářím. K tomu slouží
          samostatné <Link href="/metody/radiometricke-a-expozicni-datovani">radiometrické datování</Link>: například radiouhlíkové stáří schránek
          v mladších usazeninách nebo rozpoznání vrstev se známým stářím.
          Tato datovaná místa umožní sestavit vztah mezi hloubkou a časem
          a přiřadit stáří i mezilehlým vzorkům. Chemický rozbor určí teplotu,
          datování určí, do které doby výsledek patří.{" "}
          <SourceLink id="DOI_10_5194_essd_12_1053_2020">(Jonkers a kol. 2020, chronologie mořských záznamů)</SourceLink>
        </p>

        <h3>Jak v laboratoři změříme obě látky</h3>
        <p>
          Odebraný sediment nejprve vysušíme a zvážíme. Potřebné organické látky
          z něj získáme rozpouštědlem. V popisovaném provedení slouží jako rozpouštědlo směs
          dichlormethanu a methanolu. Uvolnění látek podpoří ultrazvuk.
          Vzniklý kapalný výluh obsahuje i mnoho dalších sloučenin.
          Proto jej rozdělíme na skupiny látek průchodem přes sloupec silikagelu,
          jemného porézního materiálu. K dalšímu měření odebrali tu část,
          ve které se nacházely alkenony.{" "}
          <SourceLink id="DOI_10_2973_odp_proc_sr_186_111_2003">(Fujine a kol. 2003, laboratorní postup)</SourceLink>
        </p>
        <p>
          Jednotlivé alkenony od sebe oddělí plynový chromatograf. Malé množství
          roztoku se v něm odpaří a proud plynu je unáší tenkou trubicí, kolonou.
          Její vnitřní povrch zadržuje různé molekuly různě dlouho, takže z kolony
          vycházejí postupně. Detektor jejich příchod zaznamenává. Záznam
          tvoří píky, krátká zvýšení signálu nad základní úroveň.
          Poloha píku pomáhá látku rozpoznat a jeho plocha slouží k určení množství.{" "}
          <SourceLink id="2016_Harvey_Analytical_Chemistry">(Harvey, oddíl 12.4)</SourceLink>
        </p>
        <p>
          Použít lze například plamenový ionizační detektor. Látky vystupující
          z kolony vstupují do malého vodíkového plamene. Při jejich reakcích
          vznikají elektricky nabité částice, jejichž pohyb mezi elektrodami
          vytváří měřitelný proud. Změna tohoto proudu v čase pak tvoří pík
          v záznamu. Tak vzniká elektrický signál, který můžeme porovnat
          se signálem známého množství látky.{" "}
          <SourceLink id="2016_Harvey_Analytical_Chemistry">(Harvey, plamenový ionizační detektor)</SourceLink>
        </p>
        <p>
          Plochu píku musíme převést na množství pomocí reference. Do rozboru
          proto přidáme známé množství vhodné látky, vnitřního standardu,
          která vytvoří vlastní oddělený pík. Porovnáním odezvy alkenonu
          s odezvou standardu, při známém poměru citlivostí detektoru,
          získáme množství alkenonu. Ve zde použité studii byl standardem
          uhlovodík s 36 atomy uhlíku, přidaný před měřením připraveného výluhu.
          Tato analytická kalibrace nám poskytne množství obou látek.{" "}
          <SourceLink id="2016_Harvey_Analytical_Chemistry">(Harvey, kalibrace s vnitřním standardem)</SourceLink>{" "}
          <SourceLink id="DOI_10_2973_odp_proc_sr_186_111_2003">(Fujine a kol. 2003, použitá reference)</SourceLink>
        </p>
        <p>
          Princip rozdělení směsi a vzniku signálu rozvádí také článek o{" "}
          <Link href="/metody/plynova-chromatografie">plynové chromatografii</Link>.
          Zde již máme dva údaje ze stejného vzorku: množství C₃₇:₂
          a množství C₃₇:₃. Dalším krokem je vyjádřit, jak velký díl jejich
          součtu připadá na první z nich.
        </p>

        <h3>Jak poměr molekul převedeme na teplotu</h3>
        <p>
          Podíl látky C₃₇:₂ označujeme <InlineMath tex={String.raw`U_{37}^{K'}`} />.
          Tato značka je názvem alkenonového indexu, tedy jediného čísla
          shrnujícího zastoupení obou molekul. Počítáme jej takto:{" "}
          <SourceLink id="DOI_10_1029_2000GC000058">(Prahl a kol. 2000)</SourceLink>
        </p>
        <Equation tex={String.raw`U_{37}^{K'}=\frac{C_{37:2}}{C_{37:2}+C_{37:3}}`} />
        <p>
          Symboly <InlineMath tex={String.raw`C_{37:2}`} /> a{" "}
          <InlineMath tex={String.raw`C_{37:3}`} /> v rovnici znamenají naměřená
          množství příslušných látek, vyjádřená ve stejných jednotkách.
          Jednotky se při dělení vykrátí. Index je proto bezrozměrný
          a leží mezi nulou a jedničkou. Větší hodnota znamená větší zastoupení
          molekul se dvěma dvojnými vazbami, které řasa tvoří v teplejší vodě.
          Celkové množství zachované organické hmoty se může mezi vzorky lišit,
          zde porovnáváme jejich složení.
        </p>
        <p>
          K určení teploty potřebujeme druhou kalibraci: vztah mezi indexem
          a teplotou vody. Získáme jej pěstováním řas při známých teplotách
          a rozborem jejich alkenonů. Každá kultura poskytne dvojici údajů,
          teplotu a index. Těmito body proložíme vztah, který pak umožní
          přiřadit teplotu i indexu naměřenému v usazenině.
          Klasická kultivační kalibrace Prahla a kolegů z roku 1988
          pokrývala 8 až 25 °C a měla podobu přímky:{" "}
          <SourceLink id="DOI_10_1029_2000GC000058">(Prahl a kol. 2000, popis původních pokusů)</SourceLink>
        </p>
        <Equation tex={String.raw`U_{37}^{K'}=0{,}034\,\mathrm{^{\circ}C^{-1}}\,T+0{,}039`} />
        <p>
          Písmeno <InlineMath tex="T" /> označuje teplotu ve stupních Celsia.
          Koeficient 0,034 °C⁻¹ říká, o kolik se podle této přímky zvýší index
          při oteplení o jeden stupeň. Číslo 0,039 určuje posunutí přímky.
          Obě čísla pocházejí z experimentu. Pro vzorek s neznámou teplotou
          rovnici obrátíme: od indexu odečteme 0,039 a výsledek vydělíme 0,034 °C⁻¹.
        </p>
        <Equation tex={String.raw`T=\frac{U_{37}^{K'}-0{,}039}{0{,}034\,\mathrm{^{\circ}C^{-1}}}`} />
        <figure className="article-figure">
          <Image src="/media/organic-thermometers/pathway.svg" width={700} height={940}
            alt="Pět navazujících kroků: růst řasy, uchování molekul v sedimentu, laboratorní rozbor, výpočet podílu a převod kalibrací na teplotu. Datování přidává stáří vrstvy."
            className="article-figure__media" unoptimized />
          <figcaption>
            Šipky sledují tutéž informaci od vzniku alkenonů po výsledek.
            Laboratorní rozbor poskytne množství dvou látek. Z jejich podílu
            získáme index a teplotní kalibrací teplotu. Stáří vrstvy přidá
            samostatné datování. Vlastní schéma podle{" "}
            <SourceLink id="DOI_10_2973_odp_proc_sr_186_111_2003">Fujina a kol. (2003)</SourceLink>{" "}
            a <SourceLink id="DOI_10_5194_essd_12_1053_2020">Jonkerse a kol. (2020)</SourceLink>.
          </figcaption>
        </figure>

        <h3>Co výsledná teplota popisuje</h3>
        <p>
          Výsledek vztahujeme k vodě, ve které řasy rostly. Teplotu povrchového
          oceánu rekonstruujeme rozborem molekul uchovaných na dně.
          V jedné vrstvě se přitom obvykle spojí materiál z mnoha období růstu.
          Kalibrace na současných mořských usazeninách porovnává tento souhrnný
          záznam s měřenou průměrnou teplotou vody nad odběrovým místem.
          Klasická globální kalibrace zahrnovala teploty 0 až 29 °C.{" "}
          <SourceLink id="DOI_10_1002_2017PA003201">(Tierney a Tingley 2018, přehled kalibrací)</SourceLink>
        </p>
        <p>
          Opakováním rozboru v postupných vrstvách získáme průběh minulých teplot.
          Záznam z jednoho místa pomáhá sledovat například změny přísunu teplé
          a studené vody. Srovnání více míst ukazuje, jak se měnily rozdíly
          mezi oblastmi oceánu. Konkrétním programem, který takové vzorky
          zpřístupnil, byl Ocean Drilling Program, mezinárodní program
          oceánských vrtů. U japonského pobřeží se alkenony použily k rekonstrukci
          teplot v oblasti ovlivňované teplým proudem Kurošio a studeným Ojašio.{" "}
          <SourceLink id="DOI_10_2973_odp_proc_sr_186_111_2003">(Fujine a kol. 2003)</SourceLink>
        </p>

        <h3>Vývoj metody a další paleoteploměry</h3>
        <p>
          Alkenonový teploměr se rozvinul v 80. letech 20. století propojením
          kultivačních pokusů s rozborem mořských usazenin. Ranou praktickou
          aplikaci publikovali Farrimond, Poynter a Eglinton v roce 1990:
          analyzovali 84 vzorků z vrtu u Peru a sledovali teplotní proměny
          spojené i s výstupem hlubší vody k povrchu. Novější kalibrace BAYSPLINE
          z roku 2018 využila soubor 1 344 povrchových vzorků. Umožnila popsat
          také zakřivení teplotního vztahu a sezónní rozdíly mezi oblastmi.{" "}
          <SourceLink id="DOI_10_2973_odp_proc_sr_112_150_1990">(Farrimond a kol. 1990)</SourceLink>{" "}
          <SourceLink id="DOI_10_1002_2017PA003201">(Tierney a Tingley 2018)</SourceLink>
        </p>
        <p>
          Jiný paleoteploměr využívá <strong>poměr hořčíku a vápníku, Mg/Ca</strong>,
          ve schránkách dírkonošců. Tyto jednobuněčné organismy vytvářejí
          schránku z uhličitanu vápenatého. Malou část vápníku může při jejím
          růstu zastoupit hořčík a jeho podíl zpravidla stoupá s teplotou vody.
          Vybrané schránky stejného druhu vyčistíme, rozpustíme a stanovíme
          množství obou prvků. Jejich poměr převedeme příslušnou kalibrací
          na teplotu vzniku schránky. Podle zvoleného druhu tak sledujeme
          různá hloubková prostředí oceánu.{" "}
          <SourceLink id="DOI_10_1029_2002PA000846">(Anand a kol. 2003)</SourceLink>
        </p>
        <p>
          U organických látek se používá také <strong>TEX₈₆</strong>, zkratka
          názvu <i>TetraEther indeX</i>. Číslo 86 odkazuje na počet uhlíků
          v základní molekulové struktuře. Tento index využívá membránové
          lipidy archeí, skupiny jednobuněčných mikroorganismů. Jejich membrána
          odděluje nitro buňky od okolní vody. V dlouhých molekulách jejích lipidů
          se vyskytují uhlíkové kruhy a zastoupení různých molekul souvisí
          s teplotou prostředí. Zastoupení lipidů zachovaných v sedimentu tak
          uchovává další chemickou informaci o někdejší vodě.{" "}
          <SourceLink id="DOI_10_5194_bg_22_6465_2025">(Bijl a kol. 2025, princip TEX₈₆)</SourceLink>
        </p>
        <p>
          Také tyto lipidy nejprve získáme ze sedimentu rozpouštědlem.
          Při kapalinové chromatografii je kolonou unáší kapalina a rozděluje
          je na jednotlivé složky. Připojený hmotnostní spektrometr vytvoří
          z molekul elektricky nabité částice a rozliší je podle hmotnosti
          a náboje. Z odezvy jednotlivých složek stanovíme jejich zastoupení,
          vypočteme TEX₈₆ a jeho vlastní kalibrací teplotu svrchních vod oceánu.
          Tento postup využívá jiné organismy i jinou skupinu látek
          než alkenonový teploměr.{" "}
          <SourceLink id="DOI_10_5194_bg_22_6465_2025">(Bijl a kol. 2025, současná metodika)</SourceLink>
        </p>
        <p>
          Z téhož sedimentu tak můžeme získat několik teplotních záznamů.
          Hořčík ve schránce lze navíc spojit s rozborem jejích izotopů kyslíku.
          Vlastní teplotní odhad z Mg/Ca pomáhá při vyhodnocení izotopů určit
          i složení někdejší mořské vody. Tuto návaznost vysvětluje článek o{" "}
          <Link href="/metody/izotopova-paleotermometrie">izotopové paleotermometrii</Link>.{" "}
          <SourceLink id="DOI_10_1029_2002PA000846">(Anand a kol. 2003, společné využití obou měření)</SourceLink>
        </p>

        <h2>Nejistoty a ověření výsledků</h2>
        <p>
          Výsledek závisí hlavně na uchování materiálu, podmínkách růstu organismů
          a použité kalibraci. Řasy mohou nejvíce růst v určité sezoně, takže jejich
          záznam nemusí přesně odpovídat celoročnímu průměru. Při porovnání 370 mořských povrchových
          vzorků s teplotami oceánu vyšla kalibrační přímka shodná
          v mezích chyb s původní kultivační kalibrací.{" "}
          <SourceLink id="DOI_10_1029_2000GC000058">(Prahl a kol. 2000)</SourceLink>{" "}
          <SourceLink id="DOI_10_1002_2017PA003201">(Tierney a Tingley 2018)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Podrobněji k nejistotám a ověřování</summary>
          <h3>Uchování, měření a časové rozlišení</h3>
          <p>
            Promíchání sedimentu spojí materiál různého stáří, přenos proudy
            může přidat látky z jiného místa. Rozklad a pozdější zahřátí sedimentu
            mohou pozměnit jeho složení. Kontrolujeme proto stav vrstev
            i zachování organických látek. Časové rozlišení závisí na rychlosti
            usazování, promíchání a tloušťce vzorku. Nejistota datování se promítá
            do umístění změny v čase.{" "}
            <SourceLink id="DOI_10_1029_2000GC000058">(Prahl a kol. 2000)</SourceLink>{" "}
            <SourceLink id="DOI_10_5194_bg_22_6465_2025">(Bijl a kol. 2025)</SourceLink>
          </p>
          <p>
            V laboratoři záleží na oddělení píků, správném odečtení základní úrovně
            a stabilitě odezvy. Opakované analýzy reference pomáhají sledovat
            změnu citlivosti detektoru, opakovaný rozbor vzorku opakovatelnost
            postupu. Standard přidaný až do hotového výluhu nekontroluje předchozí
            ztráty při extrakci. Při velmi malém množství C₃₇:₃ se jeho pík
            přibližuje šumu a index se blíží jedničce. Další oteplení se pak
            projevuje stále menší změnou indexu.{" "}
            <SourceLink id="2016_Harvey_Analytical_Chemistry">(Harvey)</SourceLink>{" "}
            <SourceLink id="DOI_10_1002_2017PA003201">(Tierney a Tingley 2018)</SourceLink>
          </p>
          <h3>Co ověřuje porovnání s oceánem</h3>
          <p>
            Laboratorní kultury a povrchové mořské sedimenty jsou dva odlišné
            soubory materiálu. Oceánské teploty se určovaly nezávislým měřením vody.
            Blízkost obou kalibračních přímek tak podporuje přenos laboratorního
            vztahu do přírodních podmínek. Oba postupy však sdílejí alkenonový
            index a chromatografickou analýzu. Soubor 370 sedimentů navíc sloužil
            k sestavení vlastní oceánské kalibrace, nebyl odděleným testem této
            nové přímky.{" "}
            <SourceLink id="DOI_10_1029_2000GC000058">(Prahl a kol. 2000)</SourceLink>
          </p>
          <p>
            U klasické globální kalibrace byla standardní chyba přibližně
            1,5 °C. Jde o rozptyl převodu mezi indexem a teplotou, nikoli
            o rozlišení přístroje nebo univerzální chybu každého vzorku.
            Novější BAYSPLINE výslovně zachycuje pokles citlivosti nad přibližně
            24 °C. Shoda přepočtu s již publikovanými teplotami, kterou ukazujeme
            níže, kontroluje pouze výpočet.{" "}
            <SourceLink id="DOI_10_1002_2017PA003201">(Tierney a Tingley 2018, tabulka 1)</SourceLink>
          </p>
          <h3>Další varianty</h3>
          <p>
            U Mg/Ca záleží na druhu a velikosti schránky, jejím čištění
            a případném rozpouštění na dně. U TEX₈₆ prověřujeme původ lipidů
            a hloubku, ve které je archea tvořila. Shoda různých paleoteploměrů
            má největší vypovídací hodnotu, když skutečně popisují srovnatelné
            prostředí a období. Mohou sdílet stáří sedimentu i některé referenční
            teploty, jejich výsledky proto nejsou ve všem nezávislé.{" "}
            <SourceLink id="DOI_10_1029_2002PA000846">(Anand a kol. 2003)</SourceLink>{" "}
            <SourceLink id="DOI_10_5194_bg_22_6465_2025">(Bijl a kol. 2025)</SourceLink>
          </p>
        </details>

        <h2>Příklad z mořského dna u Japonska</h2>
        <p>
          Fujine, Yamamoto a Tada zveřejnili rozbor 75 vzorků z vrtu 1151C
          u severovýchodního pobřeží Japonska. Z jejich tabulky vezmeme nejprve
          vzorek označený 186-1151C-1H-1, 5–7, z opravené hloubky 0,06 m
          pod mořským dnem. Veřejná data začínají hotovými koncentracemi
          jednotlivých látek. Předchozí laboratorní kroky popisuje jejich studie.{" "}
          <SourceLink id="WEB_ODP_1151_Alkenones_Table2">(původní tabulka T2)</SourceLink>{" "}
          <SourceLink id="DOI_10_2973_odp_proc_sr_186_111_2003">(metodika rozboru)</SourceLink>
        </p>
        <p>
          Pro C₃₇:₂ tabulka uvádí 30,39 a pro C₃₇:₃ hodnotu 24,64.
          Jednotkou je µg/g organického uhlíku, tedy mikrogram látky na gram
          uhlíku obsaženého v organické hmotě vzorku. Obě koncentrace jsou
          přepočtené na stejný základ. Při výpočtu jejich podílu se tato společná
          jednotka vykrátí:
        </p>
        <Equation tex={String.raw`U_{37}^{K'}=\frac{30{,}39}{30{,}39+24{,}64}\doteq 0{,}55224`} />
        <p>
          Přibližně 55,2 % součtu obou alkenonů tedy připadá na C₃₇:₂.
          Nyní použijeme tutéž kultivační kalibraci jako autoři studie.
          Z indexu odečteme 0,039 a výsledek vydělíme citlivostí 0,034 °C⁻¹:
        </p>
        <Equation tex={String.raw`T=\frac{0{,}55224-0{,}039}{0{,}034\,\mathrm{^{\circ}C^{-1}}}\doteq 15{,}1\,\mathrm{^{\circ}C}`} />
        <p>
          Výsledných <strong>15,1 °C</strong> je odhad teploty svrchní vody
          z alkenonů uložených v tomto vzorku. Stejný postup zopakujeme pro
          sousední vrstvy. První tři výsledky ukazuje tabulka, ve které jsou
          koncentrace stále v µg/g organického uhlíku.
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap">
            <table>
              <thead><tr><th>Opravená hloubka</th><th>C₃₇:₂</th><th>C₃₇:₃</th><th>Teplota</th></tr></thead>
              <tbody>
                <tr><td>0,06 m</td><td>30,39</td><td>24,64</td><td>15,1 °C</td></tr>
                <tr><td>0,37 m</td><td>14,23</td><td>8,91</td><td>16,9 °C</td></tr>
                <tr><td>0,68 m</td><td>20,26</td><td>28,51</td><td>11,1 °C</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>
          Ve třetím vzorku převažuje C₃₇:₃, takže vypočtená teplota je nižší.
          Všech 75 vzorků poskytuje po stejném přepočtu přibližně
          11,1 až 21,9 °C. Graf je řadí podle publikované opravené hloubky.
          Každý bod představuje jeden vzorek a jeho polohu čteme jako dvojici
          teplota a hloubka.{" "}
          <SourceLink id="WEB_ODP_1151_Alkenones_Table2">(vlastní výpočet z tabulky T2)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/organic-thermometers/site1151.svg" width={760} height={640}
            alt="Přepočtené teploty všech 75 vzorků leží mezi 11,1 a 21,9 stupně Celsia. Hloubka roste shora dolů od povrchu dna do 21 metrů."
            className="article-figure__media" unoptimized />
          <figcaption>
            Vodorovná osa je rekonstruovaná teplota, svislá hloubka pod mořským
            dnem rostoucí směrem dolů. Modrozelené body představují jednotlivé
            vzorky, oranžový kroužek označuje vzorek z výpočtu.
            Hloubku ponecháváme v metrech, původní tabulka nedává přesné stáří
            každé vrstvy. Vlastní graf ze všech 75 publikovaných koncentrací.{" "}
            <SourceLink id="WEB_ODP_1151_Alkenones_Table2">Zdroj dat</SourceLink>.
          </figcaption>
        </figure>
        <details className="article-details">
          <summary>Data a postup pro zopakování</summary>
          <p>
            Původní tabulku T2 jsme stáhli 29. října 2026 a uchovali její přesné
            bajty jako textový soubor. Skript čte všech 75 řádků, sloupce
            37:2MK a 37:3MK. Index počítá z koncentrací bez mezilehlého
            zaokrouhlení. Graf používá sloupec Corrected depth, jehož opravu
            podle délky vyzvednutého jádra provedli autoři. Přiřazení stáří,
            vyhlazování ani vyřazování vzorků neprovádíme.
          </p>
          <p>
            Výsledky se od publikovaných teplot liší nejvýše o 0,05 °C.
            Koncentrace i teploty v původní tabulce jsou zaokrouhlené.
            Pro první vzorek vychází 15,0954 °C proti publikovaným 15,09 °C.
            Návod uvádí také význam sloupců a neobvyklý původní hloubkový údaj
            v posledním řádku. Původní data zachováváme beze změny.
          </p>
          <ul>
            <li><a href="/data/methods/organic-thermometers/fujine2003-table-original.txt">Původní tabulka T2</a></li>
            <li><a href="/data/methods/organic-thermometers/results.tsv">Všech 75 vzorků a přepočtené teploty</a></li>
            <li><a href="/data/methods/organic-thermometers/reproduce.py">Skript pro výpočet a graf</a></li>
            <li><a href="/data/methods/organic-thermometers/README.txt">Návod a popis dat</a></li>
            <li><a href="/data/methods/organic-thermometers/provenance.json">Původ a kontrolní otisk vstupu</a></li>
          </ul>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Organismy vytvářejí materiál, jehož složení souvisí s teplotou vody.
            U alkenonového teploměru změříme zastoupení dvou látek zachovaných
            v sedimentu a jejich podíl převedeme kalibrací na teplotu.
            Rozbor postupných vrstev spolu s datováním umožní sledovat
            teplotní vývoj oceánu.
          </p>
          <p>
            Chemické a biologické paleoteploměry rekonstruují teploty povrchových
            i podpovrchových vod podle organických molekul nebo složení schránek.
            Slouží ke zkoumání minulých klimatických změn, oceánských proudů
            a rozdílů mezi oblastmi oceánu. Klasická globální alkenonová kalibrace
            pokrývá 0 až 29 °C. Konkrétní hloubkové prostředí určuje použitá
            metoda a organismus, ze kterého záznam pochází.{" "}
            <SourceLink id="DOI_10_1002_2017PA003201">(Tierney a Tingley 2018)</SourceLink>{" "}
            <SourceLink id="DOI_10_1029_2002PA000846">(Anand a kol. 2003)</SourceLink>{" "}
            <SourceLink id="DOI_10_5194_bg_22_6465_2025">(Bijl a kol. 2025)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
