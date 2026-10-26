import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function PhotogrammetryArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak ze snímků určíme výšku povrchu</h2>
        <p className="article-prose__intro">
          Fotogrammetrie je metoda určování polohy, tvaru a rozměrů předmětů
          z fotografických snímků. Když stejné místo zachytíme z různých směrů,
          můžeme vypočítat jeho polohu v prostoru včetně výšky. Z mnoha takových
          bodů sestavíme výškový model, tedy mapu, která každému místu přiřazuje
          výšku povrchu. Porovnání modelů z různých let pak ukáže, kde se povrch
          zvedl a kde klesl. Vysvětlíme si snímkování ledovce kamerou na dronu
          a následný výpočet změny jeho objemu.{" "}
          <SourceLink id="DOI_10_3133_tm11C11">(USGS 2026, „Aerial Imagery and Photogrammetry Concepts“)</SourceLink>
        </p>

        <h3>Proč potřebujeme různé pohledy</h3>
        <p>
          Fotoaparát soustředí světlo objektivem na obrazový snímač. Jeho
          světlocitlivé prvky zaznamenají dopadající světlo a elektronika z jejich
          odezvy vytvoří číselný obraz. Každý jeho drobný prvek, pixel, popisuje
          jas v určité části snímku. Tento vznik obrazu podrobněji vysvětluje
          článek o <Link href="/metody/opticke-a-multispektralni-snimkovani">optickém snímkování</Link>.
          Při fotogrammetrii zjišťujeme především to, na kterém místě obrazu se
          určitý bod povrchu objevil.{" "}
          <SourceLink id="DOI_10_3133_tm11C11">(USGS 2026, geometrie kamery a snímků)</SourceLink>
        </p>
        <p>
          Známe-li polohu a natočení fotoaparátu i jeho vnitřní geometrii,
          určíme z polohy bodu ve snímku směr,
          kterým k objektivu přicházelo jeho světlo. Bod tedy leží někde na
          přímce vedoucí od fotoaparátu tímto směrem. Jediný snímek nám jeho
          vzdálenost ještě neurčí. Druhý fotoaparát na jiném místě však vidí
          stejný bod v jiném směru. Obě přímky se setkávají v hledaném bodě.
          Jeho prostorovou polohu tak získáme z geometrie dvou pohledů.
          Tento postup se nazývá triangulace.{" "}
          <SourceLink id="DOI_10_3133_tm11C11">(USGS 2026, „Extrinsic Geometry: Camera Location in Space“)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/photogrammetry/two-views.svg" width={560} height={560} unoptimized style={{ maxWidth: "35rem", width: "100%", height: "auto", marginInline: "auto" }}
            alt="Schéma dvou poloh fotoaparátu A a B nad povrchem. Z každé polohy vede jiný směr pohledu ke stejnému bodu P. Jejich průsečík určuje polohu bodu." />
          <figcaption>
            Dva pohledy na tentýž bod P. Modrá a oranžová přímka představují
            směry určené z polohy bodu v jednotlivých snímcích. Jejich průsečík
            určuje polohu P, svislá úsečka jeho výšku nad společnou výškovou
            referencí. Schéma ukazuje řez prostorovým uspořádáním, není v měřítku.
            Vlastní kresba podle geometrie popsané v{" "}
            <SourceLink id="DOI_10_3133_tm11C11">příručce USGS</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Oba pohledy může pořídit jediná kamera, která se mezi snímky přesune.
          Potřebujeme přitom zachytit tentýž povrch dříve, než se znatelně změní.
          Dron proto letí v navazujících pásech a fotografuje tak často, aby se
          snímky výrazně překrývaly. Jedno místo vidíme na několika fotografiích
          a z více poloh. V počítači potom hledáme stejné podrobnosti povrchu
          napříč snímky.{" "}
          <SourceLink id="DOI_10_1029_2011JF002289">(James a Robson 2012, oddíl 2)</SourceLink>
        </p>

        <h3>Kamera, let a body zaměřené na zemi</h3>
        <p>
          Gindrauxová a její kolegové měřili tři švýcarské ledovce kamerou
          Canon S110 nesenou dronem eBee. Při průměrné výšce letu 115 metrů
          odpovídal pixel přibližně šesti centimetrům povrchu.
          Snímky se překrývaly ze 75 % ve směru letu a z 80 % mezi pásy.{" "}
          <SourceLink id="DOI_10_3390_rs9020186">(Gindraux a kol. 2017, oddíl 2)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/photogrammetry/ebee-and-control-points.png" width={579} height={429} unoptimized
            alt="Červený terč na ledovci, jeho zaměření družicovým přijímačem a měřicí dron eBee vedle počítače v horském terénu." />
          <figcaption>
            Vlevo nahoře terč, vpravo jeho zaměření. Dole dron s kamerou
            uvnitř a řídicí počítač. Obrázek 2 z práce{" "}
            <SourceLink id="DOI_10_3390_rs9020186">Gindraux a kol. (2017)</SourceLink>,
            beze změny, © autoři, <SourceLink id="WEB_Creative_Commons_Deed_Attribution_4_0_International_Creative_Comm_f3dd853d">CC BY 4.0</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Aby prostorový model měl správné rozměry a ležel na správném místě
          mapy, připojíme k fotografiím body se známými souřadnicemi.
          V terénu lze rozmístit výrazné terče, které jsou na snímcích snadno
          rozpoznatelné. Jejich polohu a výšku změří geodetický přijímač pomocí
          signálů navigačních družic a referenčního měření. Střed každého terče
          pak označíme také ve fotografiích. Počítač tím dostává vazbu mezi
          místem na snímku a skutečně zaměřeným místem v krajině.
          Takovým bodům říkáme vlícovací body.{" "}
          <SourceLink id="DOI_10_3133_tm11C11">(USGS 2026, „Georeferencing“)</SourceLink>
        </p>

        <h3>Jak počítač najde polohy kamery a povrchu</h3>
        <p>
          První část výpočtu vyhledá ve snímcích výrazné podrobnosti a spojí
          jejich výskyty. Může jít o rozhraní světlého a tmavého ledu nebo
          rozpoznatelný útvar na skále. Jedna taková shoda říká, že několik
          fotografií zachytilo stejný bod. Z mnoha vzájemných shod počítač
          odhadne polohy fotoaparátu při jednotlivých expozicích i prostorové
          polohy společných bodů.{" "}
          <SourceLink id="DOI_10_3133_tm11C11">(USGS 2026, „Initial Alignment and Optimization“)</SourceLink>
        </p>
        <p>
          Pro převod mezi místem na snímku a směrem pohledu potřebujeme znát
          také vnitřní geometrii kamery. Ohnisková vzdálenost určuje měřítko
          tohoto převodu. Čím je delší, tím dál od středu obrazu leží bod
          pozorovaný pod stejným úhlem vůči ose objektivu. Dále potřebujeme
          místo v obrazu odpovídající pohledu podél této osy
          a popis zkreslení objektivu, které posouvá obrazové body oproti
          ideálnímu promítání. Tyto vlastnosti stanovuje geometrická kalibrace.
          Mohou být známé z předchozího měření kamery nebo se spolu s ostatními
          parametry zpřesňují z překrývajících se snímků a vlícovacích bodů.{" "}
          <SourceLink id="DOI_10_3133_tm11C11">(USGS 2026, „Intrinsic Geometry“ a tab. 7)</SourceLink>
        </p>
        <p>
          Výpočet nyní zkusí odhadnuté prostorové body promítnout zpátky do
          každé fotografie. Porovná, kam podle modelu dopadnou, s tím, kde je
          skutečně našel. Postupně upravuje polohy a natočení kamery, její
          kalibrační parametry i souřadnice bodů tak, aby se rozdíly zmenšovaly.
          Zahrne přitom zaměřené souřadnice vlícovacích bodů a jejich přesnost.
          Společnému řešení této soustavy se říká svazkové vyrovnání.
          Jeho výsledkem je uspořádání, které současně odpovídá mnoha snímkům
          i pozemnímu zaměření.{" "}
          <SourceLink id="DOI_10_3133_tm11C11">(USGS 2026, vyrovnání, optimalizace a připojení k souřadnicím)</SourceLink>
        </p>
        <p>
          Jakmile je geometrie snímků určena, může počítač hledat shody mnohem
          hustěji. U dalších drobných částí obrazu hledá odpovídající místo
          v sousedních snímcích a ze směrů pohledu vypočítá prostorovou polohu.
          Vznikne mračno bodů, tedy velký soubor souřadnic popisující povrch.
          Z něj vytvoříme pravidelnou mapovou síť. Do každé buňky se vypočítá
          výška povrchu podle okolních bodů. Tak vzniká digitální výškový model.{" "}
          <SourceLink id="DOI_10_3133_tm11C11">(USGS 2026, tvorba mračna bodů a výškového modelu)</SourceLink>
        </p>
        <p>
          Model popisuje povrch viditelný na snímcích. Na zasněženém ledovci
          je to horní plocha sněhu, na odkrytém ledovci povrch ledu.
          Každá výška se vztahuje ke stanovené výškové referenci, obdobně jako
          nadmořská výška na mapě. Rozměr buňky říká, jak hustě model ukládá
          výšky. Když síť zjemníme, přidáme místa s vypočtenou hodnotou,
          ale další pozorované podrobnosti získáme teprve z odpovídajících
          snímků.{" "}
          <SourceLink id="DOI_10_3133_tm11C11">(USGS 2026, definice výškových modelů a jejich tvorba)</SourceLink>
        </p>

        <h3>Co musí mít dvě výškové mapy společné</h3>
        <p>
          Pro sledování změny zopakujeme měření v jiném roce. Výšky obou
          modelů nejprve vztáhneme ke stejné výškové referenci a stejným
          mapovým souřadnicím. Potřebujeme také shodná místa porovnání.
          Pokud mají modely různě rozmístěné buňky, převedeme je do společné
          sítě a výšky v jejích bodech dopočítáme z okolních hodnot.
          Teprve pak mají dvě čísla v jedné buňce význam výšek téhož místa.{" "}
          <SourceLink id="DOI_10_5194_tc_5_271_2011">(Nuth a Kääb 2011, oddíly 2–3)</SourceLink>
        </p>
        <p>
          Zbylý vzájemný posun zjistíme na okolním terénu, který považujeme
          za stabilní. Na svahu by i malý posun mapy do strany porovnával
          vyšší místo s nižším. Výpočet proto hledá vodorovné a svislé posunutí,
          při kterém si modely okolního terénu nejlépe odpovídají. Stejné
          posunutí pak použijeme i nad ledovcem. Tomuto prostorovému
          zarovnání se říká koregistrace. Ledovec sám k hledání posunu
          nepoužíváme, protože právě jeho změnu chceme zachovat a změřit.{" "}
          <SourceLink id="DOI_10_5194_tc_5_271_2011">(Nuth a Kääb 2011, oddíl 3.1)</SourceLink>
        </p>

        <h3>Jak změna výšky určuje změnu objemu</h3>
        <p>
          V každé buňce odečteme starší výšku od novější. Rozdíl označíme
          <InlineMath tex="\Delta h_i" />, kde značka Δ znamená změnu a písmeno
          <InlineMath tex="i" /> označuje konkrétní buňku. Výšky
          <InlineMath tex="z_{\text{nové},i}" /> a <InlineMath tex="z_{\text{staré},i}" />
          i jejich rozdíl jsou v metrech. Kladný výsledek znamená vzestup
          povrchu, záporný jeho pokles.
        </p>
        <Equation tex="\Delta h_i = z_{\text{nové},i} - z_{\text{staré},i}" />
        <p>
          Nad každou buňkou si můžeme představit svislý sloupec. Jeho základna
          má plochu buňky a rozdíl mezi starým a novým povrchem určuje změnu
          jeho výšky. Součin plochy a změny výšky proto dává změnu objemu
          tohoto sloupce. Sečtením příspěvků ze všech zahrnutých buněk získáme
          celkovou změnu objemu <InlineMath tex="\Delta V" />:
        </p>
        <Equation tex="\Delta V = \sum_{i=1}^{N} a_i\,\Delta h_i" />
        <p>
          Značka Σ znamená součet přes všech <InlineMath tex="N" /> buněk.
          Plocha <InlineMath tex="a_i" /> je v metrech čtverečních a výsledný
          objem v metrech krychlových. Výpočet předpokládá, že hodnota
          v buňce vystihuje průměrnou změnu výšky nad její plochou.
          Při výpočtu pro celý ledovec zahrneme také území, ze kterého led
          mezitím ustoupil. Tam novější model zachycuje odkryté podloží.
          Součet přes malý výřez naproti tomu popisuje pouze tento výřez.{" "}
          <SourceLink id="DOI_10_5194_tc_16_3249_2022">(Mannerfelt a kol. 2022, oddíl 3.4)</SourceLink>
        </p>
        <p>
          Pro určení změny hmotnosti potřebujeme ještě vědět, jaká hmotnost
          odpovídá vypočtené změně objemu. Ledovec obsahuje hustý led i lehčí
          sníh a firn, tedy starší sníh postupně se měnící v led.
          Při zhutňování firnu ubývá vzduch mezi zrny, takže stejná hmotnost
          může zabírat menší objem. Převod proto používá odhad, který
          zohledňuje složení a vývoj ledovce během sledovaného období.
          Takto odvozené změně hmotnosti celého ledovce říkáme geodetická bilance.{" "}
          <SourceLink id="DOI_10_5194_tc_7_877_2013">(Huss 2013, oddíly 1 a 5)</SourceLink>
        </p>
        <p>
          Sledování celého ledovce se tím doplňuje s <Link href="/metody/terenni-mereni-bilance-ledovcu">terénním měřením bilance</Link>.
          Měřicí tyče a sněhové sondy zachycují přírůstky a úbytky na vybraných
          místech, výškové modely poskytují prostorový obraz změny.
          Led zároveň proudí, a tak se výška na jednom místě mění také tím,
          kolik ledu přiteče a odteče. Výškový rozdíl v malé části ledovce proto
          čteme jako změnu místního objemu. K celkové bilanci přejdeme
          zahrnutím celého ledovce a převodem objemu na hmotnost.{" "}
          <SourceLink id="DOI_10_5194_tc_7_877_2013">(Huss 2013, oddíl 1)</SourceLink>
        </p>

        <h3>Co umožňují staré fotografie a různé způsoby snímkování</h3>
        <p>
          Fotografická měření umožňují vracet se i k dávno změněnému povrchu.
          Mannerfelt a jeho kolegové zpracovali 21 703 pozemních fotografií
          švýcarských ledovců z let 1916–1947. Zrekonstruované výšky porovnali
          s moderními daty. Po doplnění nepokrytých míst a převedení různých
          dat snímkování na společné období odhadli, že mezi roky 1931 a 2016
          ubylo 51,5 ± 8,0 % objemu švýcarských ledovců. Rok 1931 je společná
          časová reference, nikoli datum všech starých snímků.{" "}
          <SourceLink id="DOI_10_5194_tc_16_3249_2022">(Mannerfelt a kol. 2022, oddíly 3–4)</SourceLink>
        </p>
        <p>
          Historie tohoto využití sahá do 19. století. Pozemní fotografické
          zaměření Vernagtferneru z let 1888–1889 umožnilo sestavit mapu
          ledovce. Při novém mapování v roce 1969 už sloužilo šest leteckých
          snímků ve dvou pásech. Popis jejich zpracování ukazuje přechod
          od pozemních stanovišť k leteckému pokrytí.{" "}
          <SourceLink id="1972_Finsterwalder_Vernagtferner">(Finsterwalder 1972, s. 5–6)</SourceLink>
        </p>
        <p>
          Další změnu přineslo automatické hledání shod v digitálních snímcích.
          James a Robson v roce 2012 popsali a ověřili dostupný postup,
          který společně rekonstruoval geometrii povrchu a polohy běžných
          fotoaparátů. Označení <em>structure from motion</em>, zkráceně SfM,
          znamená rekonstrukci prostorového uspořádání z různých pohledů
          pohybující se kamery. Na tomto přístupu stojí i popsané zpracování
          snímků z dronu.{" "}
          <SourceLink id="DOI_10_1029_2011JF002289">(James a Robson 2012, oddíly 2–3)</SourceLink>
        </p>
        <p>
          Pozemní kamera, letadlo, dron i družice mohou poskytnout pohledy
          potřebné k určení výšky. Liší se dosahem, velikostí zachycených
          podrobností a možností opakovat snímkování. Družicová stereoskopie,
          tedy snímkování stejného území z různých směrů, rozšířila tento
          postup na ledovce celého světa. Hugonnet a kolegové využili
          opakovaná družicová měření k výpočtu jejich změn v letech 2000–2019.
          Návazné výsledky vysvětluje článek o <Link href="/pozorovani/ustup-ledovcu">ústupu ledovců</Link>.{" "}
          <SourceLink id="DOI_10_1038_s41586_021_03436_z">(Hugonnet a kol. 2021)</SourceLink>
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Výsledek ovlivňuje rozpoznatelnost povrchu, geometrie snímkování
          a připojení k souřadnicím. Ověření využívá body vynechané
          z nastavení modelu. Studie tří švýcarských ledovců doložila
          zlepšování výsledku s přibývajícími vlícovacími body. Po jejich
          dostatečně hustém rozmístění přestával další nárůst počtu pomáhat.{" "}
          <SourceLink id="DOI_10_3390_rs9020186">(Gindraux a kol. 2017, oddíly 3.2 a 4.1)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Co ověření ukazuje a kde vznikají odchylky</summary>
          <p>
            Na čerstvém hladkém sněhu může chybět kresba, podle které výpočet
            spojuje fotografie. Podobně mohou vadit zastíněná místa nebo
            proměnlivé odlesky. Pokrytí pak obsahuje mezery a záleží na tom,
            jak se doplní. Výběr snímků a jejich překrytí ovlivňuje i to,
            z kolika směrů je bod pozorován. Podmínky a příčiny rozebírají{" "}
            <SourceLink id="DOI_10_1029_2011JF002289">James a Robson (2012, oddíl 2)</SourceLink>.
          </p>
          <p>
            Odhad nejlepšího dosažitelného výsledku vycházel podle měření
            na 0,10–0,25 metru směrodatné odchylky. Ta vyjadřuje rozptýlení
            výškových rozdílů kolem jejich průměru. Odhad vznikl proložením
            závislosti na hustotě vlícovacích bodů. Kontrolní body
            sdílely s vlícovacími body stejný způsob družicového zaměření.
            Porovnání tedy není nezávislé na této referenci.{" "}
            <SourceLink id="DOI_10_3390_rs9020186">(Gindraux a kol. 2017, obr. 4–5 a tab. 2)</SourceLink>
          </p>
          <p>
            Prostorové zarovnání odstraní celkový posun, ale model může
            obsahovat i deformace, které se v ploše mění. Nuth a Kääb proto
            vedle posunů zkoumají závislost odchylek na nadmořské výšce
            a na způsobu snímkování. Samotná malá průměrná odchylka nestačí
            k potvrzení správnosti každé části mapy.{" "}
            <SourceLink id="DOI_10_5194_tc_5_271_2011">(2011, oddíly 3.2–3.3)</SourceLink>
          </p>
          <p>
            Chyby sousedních buněk spolu často souvisejí. Nejistotu
            průměrné změny proto nelze zmenšovat, jako by každá buňka
            představovala nezávislé měření. Záleží na prostorovém dosahu
            odchylek i na doplnění chybějících oblastí. Takový rozbor
            provedli <SourceLink id="DOI_10_5194_tc_16_3249_2022">Mannerfelt a kol. (2022, oddíl 3.5)</SourceLink>.
          </p>
          <p>
            Sníh přítomný při jednom letu a chybějící při druhém se projeví
            ve výškovém rozdílu. Pro srovnání se proto volí podobná část
            sezóny nebo se její vliv vyčísluje. Při převodu objemu na
            hmotnost přistupuje nejistota vývoje hustoty sněhu a firnu.
            Huss ukázal, že zejména u krátkých intervalů může mít tato
            složka velkou váhu.{" "}
            <SourceLink id="DOI_10_5194_tc_7_877_2013">(2013, oddíly 4–5)</SourceLink>
          </p>
          <p>
            U následující ukázky kontrolujeme rozdíly modelů na vynechaných
            částech okolního terénu. Tím ověřujeme účinek zarovnání, nikoli
            absolutní správnost obou původních modelů. Rozptyl těchto rozdílů
            není intervalem nejistoty průměru nad vybraným čtvercem.
            Pro ukázku jsme formální interval nejistoty nevypočítali.
          </p>
        </details>

        <h2>Příklad: změna části ledovce Scott Turnerbreen</h2>
        <p>
          Použijeme dva veřejné výškové modely z okolí Longyearbyenu
          na Špicberkách. Pocházejí z leteckých stereosnímků Norského polárního
          institutu a v ukázkovém souboru projektu xDEM mají označení 1990
          a 2009. Začínáme tedy u již vytvořených výškových modelů.
          Ukázka opakuje jejich zarovnání a výpočet změny, nikoli rekonstrukci
          z původních fotografií.{" "}
          <SourceLink id="DOI_10_21334_NPOLAR_2014_DCE53A47">(Norský polární institut: výšková data)</SourceLink>{" "}
          <SourceLink id="2026_xDEM_Longyearbyen_Frozen">(přesná použitá verze a její dokumentace)</SourceLink>
        </p>
        <p>
          Nejprve vynecháme ledovce a jejich bezprostřední okolí a na
          zbývajícím vhodném terénu hledáme vzájemné posunutí modelů.
          Část území z hledání vyčleníme pro následnou kontrolu.
          Na těchto kontrolních místech se prostřední hodnota výškového
          rozdílu po zarovnání změnila z −2,65 na −0,09 metru.
          Tím se výrazně zmenšil celkový výškový nesoulad obou map.
          Použité hranice ledovců pocházejí ze souboru Norského polárního
          institutu pro rok 1990 a období 2001–2010.{" "}
          <SourceLink id="DOI_10_21334_NPOLAR_2013_89F430F8">(hranice ledovců)</SourceLink>{" "}
          Výsledek našeho výpočtu obsahují <a href="/data/methods/photogrammetry/example.json">metadata příkladu</a>.
        </p>
        <p>
          Z ledovce Scott Turnerbreen vybereme čtverec o straně 400 metrů.
          Každá buňka mapy má rozměr 20 × 20 metrů, takže do čtverce patří
          20 řádků a 20 sloupců, celkem 400 buněk. Červená barva v následující
          mapě označuje pokles povrchu, modrá jeho vzestup. Silný černý rámeček
          vymezuje plochu, pro kterou budeme počítat objem.
        </p>
        <figure className="article-figure">
          <div style={{ overflowX: "auto" }} tabIndex={0} role="region" aria-label="Mapa změny výšky na Scott Turnerbreen">
          <Image src="/media/photogrammetry/scott-turnerbreen-change.png" width={1368} height={1260} unoptimized style={{ minWidth: "34rem" }}
            alt="Mapa výškových rozdílů na Scott Turnerbreen. Uvnitř vybraného čtverce převažuje pokles přibližně o 10 až 25 metrů. Tenká čára ukazuje hranici ledovce v roce 1990." />
          </div>
          <figcaption>
            Výškový model označený 2009 minus prostorově zarovnaný model 1990.
            Barevná stupnice udává rozdíl v metrech, osy mapové souřadnice
            v kilometrech. Sever je nahoře. Tenká čára ukazuje obrys
            ledovce v roce 1990. Vlastní zpracování dat © Norský polární
            institut, CC BY 4.0, z <SourceLink id="2026_xDEM_Longyearbyen_Frozen">uvedené verze xDEM</SourceLink>.
          </figcaption>
        </figure>
        <p>
          V první buňce tabulky má zarovnaný starší model výšku 460,262 metru
          a novější model 440,302 metru. Rozdíl je přibližně −19,960 metru.
          Plocha buňky je 400 metrů čtverečních, takže její příspěvek ke
          změně objemu vychází přibližně −7 984 metrů krychlových.
          Stejný postup zopakujeme pro ostatní buňky.
        </p>
        <Equation tex={["\\Delta V_1 \\approx 400\\,\\mathrm{m^2}\\times(-19{,}960\\,\\mathrm{m})", "= -7\\,984\\,\\mathrm{m^3}"]} />
        <p>
          Součet všech 400 příspěvků je přibližně <strong>−2,77 milionu metrů
          krychlových</strong>. Po vydělení celkovou plochou 160 000 metrů
          čtverečních dostaneme průměrnou změnu výšky −17,32 metru.
          Oba údaje tedy popisují tutéž změnu: jeden jako objem mezi dvěma
          povrchy, druhý jako průměrné snížení nad vybranou plochou.
          Výpočet používá plné hodnoty z <a href="/data/methods/photogrammetry/patch.csv">tabulky všech buněk</a>,
          zde je zaokrouhlujeme.
        </p>
        <p>
          Výsledek se vztahuje pouze k vyznačenému čtverci. Zahrnuje změny
          způsobené táním, přísunem sněhu i prouděním ledu, které výškové
          modely samy neoddělují. V ukázce jej nepřevádíme na hmotnost.
          Roky přebíráme z označení souborů, přesné dny snímkování tento
          výřez dat neuvádí, a proto z něj nepočítáme roční rychlost změny.{" "}
          <SourceLink id="2026_xDEM_Longyearbyen_Frozen">(dokumentace vstupů)</SourceLink>{" "}
          <SourceLink id="DOI_10_5194_tc_7_877_2013">(význam výškové změny: Huss 2013)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Data, prostorové zarovnání a zopakování výpočtu</summary>
          <p>
            Data jsme stáhli 26. října 2026 z neměnné verze repozitáře
            xdem-data <code>ca0e87271925d28928526bbce200162f002d6a93</code>.
            Oba modely mají 1 332 sloupců, 985 řádků a shodnou síť
            ETRS89 / UTM 33N, EPSG:25833. Výšky jsou podle dokumentace
            vztaženy ke střední hladině moře. Přesnější označení výškového
            systému soubory GeoTIFF neobsahují. Původní popis a licenci
            zachovává <a href="/data/methods/photogrammetry/source-README.md">README datového souboru</a>.
          </p>
          <p>
            K dispozici jsou <a href="/data/methods/photogrammetry/DEM_1990.tif">model 1990 (4,5 MB)</a>,{" "}
            <a href="/data/methods/photogrammetry/DEM_2009_ref.tif">model 2009 (4,5 MB)</a>{" "}
            a <a href="/data/methods/photogrammetry/excluded-glaciers.tif">maska vyloučených ledovců</a>.
            Maska zahrnuje oba soubory obrysů rozšířené o 100 metrů.
            Z okolního terénu vybíráme buňky nad 50 metry, se sklonem
            5–45° a počátečním rozdílem výšek menším než 50 metrů.
            Vynecháváme okraje sítě a chybějící hodnoty. Tyto filtry
            jsou nastavením naší ukázky, nikoli obecným předpisem metody.
          </p>
          <p>
            Plochu rozdělíme na bloky 400 × 400 metrů. Každou pátou diagonálu
            bloků ponecháme pro kontrolu, z ostatních vhodných buněk vybereme
            12 000 bodů s pevným nastavením náhodného výběru.
            Hledáme tři posuny, které zmenšují rozdíly výšek. Používáme
            robustní minimalizaci, v níž mají velmi velké rozdíly menší vliv
            než při prostém součtu čtverců. Jde o vlastní jednoduchý
            výpočet posunu, nikoli o přesnou implementaci algoritmu
            Nutha a Kääba.
          </p>
          <p>
            Při posunu dopočítáváme hodnoty mezi čtyřmi sousedními buňkami
            podle jejich vzdálenosti, tedy bilineární interpolací.
            Na 160 866 vynechaných kontrolních buňkách je po zarovnání
            medián rozdílů −0,095 metru. Robustní míra rozptylu NMAD
            vychází 2,554 metru. Počítá se jako 1,4826násobek mediánu
            absolutních odchylek od mediánu. Úplné parametry, výsledky
            a kontrolní součty souborů obsahuje <a href="/data/methods/photogrammetry/example.json">example.json</a>.
          </p>
          <p>
            Vybraný čtverec tvoří řádky 208 až 227 a sloupce 917 až 936,
            číslované od nuly. Jeho hranice mají východní souřadnice
            521 150 a 521 550 metrů a severní souřadnice 8 669 470
            a 8 669 870 metrů. Je celý uvnitř obrysu z roku 1990
            i novějšího obrysu, který pro tento ledovec pochází z roku 2003.
            Samotný název souboru obrysů „2010“ tedy neoznačuje rok
            snímku každého ledovce.
          </p>
          <p>
            Pro jednoduché zopakování součtu stáhněte CSV, example.json
            a <a href="/data/methods/photogrammetry/reproduce.py">reproduce.py</a>{" "}
            do jedné složky a spusťte <code>python reproduce.py</code>.
            Stačí standardní knihovna Pythonu. Úplné zarovnání zopakuje{" "}
            <a href="/data/methods/photogrammetry/process.py">process.py</a>{" "}
            s knihovnami NumPy, SciPy a Rasterio. Potřebuje oba modely,
            masku a example.json. Mapu znovu nakreslí <a href="/data/methods/photogrammetry/plot.py">plot.py</a>,
            navíc s knihovnou Matplotlib a <a href="/data/methods/photogrammetry/scott-outline-1990.geojson">obrysem ledovce</a>.
            Masku z původních obrysů obnoví <a href="/data/methods/photogrammetry/build-mask.py">build-mask.py</a>.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion"><p>
          Různé pohledy na stejný bod umožňují určit jeho polohu v prostoru.
          Z husté sítě takových bodů vznikne výškový model povrchu.
          Dva modely připojené ke stejné referenci a prostorově zarovnané
          ukazují změnu výšky. Vynásobením plochami buněk a sečtením získáme
          změnu objemu. Tato cesta propojuje fotografický záznam ledovce
          s měřitelnou změnou jeho tvaru a velikosti.
        </p></div>
      </div>
    </article>
  );
}
