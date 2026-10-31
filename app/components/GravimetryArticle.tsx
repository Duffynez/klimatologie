import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function GravimetryArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak změny gravitace ukazují přesuny hmoty</h2>
        <p className="article-prose__intro">
          Družicová gravimetrie určuje gravitační pole Země z měření pohybu družic.
          Gravitační pole popisuje, jak silně a kterým směrem Země přitahuje tělesa
          v jednotlivých místech. Jeho změny umožňují sledovat, kde na Zemi hmota
          přibývá a kde ubývá. Dvojice družic tak může měřit změny zásob vody
          a hmotnosti ledových příkrovů. K tomu přesně sleduje vzájemnou
          vzdálenost obou těles.{" "}
          <SourceLink id="DOI_10_1038_s41558_019_0456_2">(Tapley a kol. 2019)</SourceLink>
        </p>

        <h3>Proč se mění vzdálenost družic</h3>
        <p>
          Přitažlivost Země závisí na rozložení její hmoty. Přispívají k ní horniny,
          oceán, led i voda v půdě a pod zemí. Když v určité oblasti přibude voda,
          změní se také její gravitační působení na prolétající družici. Pohyb
          družice tak nese informaci o hmotě pod její dráhou. Sledováním stejné
          oblasti v různých měsících můžeme zjistit, jak se toto působení mění.{" "}
          <SourceLink id="DOI_10_1038_s41558_019_0456_2">(Tapley a kol. 2019)</SourceLink>
        </p>
        <p>
          Na tomto principu pracovala mise GRACE, anglicky Gravity Recovery
          and Climate Experiment, tedy experiment pro určení gravitačního pole
          a výzkum klimatu. Její družice letěly po téměř stejné dráze nad oběma
          polárními oblastmi přibližně 220 kilometrů za sebou. Oblast s větší hmotností přitahuje přibližující se přední
          družici ve směru letu. Zadní družice je zatím dál, a proto na ni oblast
          působí jinak. Jejich vzdálenost se mění. Jak dvojice pokračuje v letu,
          mění se směr přitažlivosti vůči přední družici a k oblasti se přibližuje
          druhá. Výsledkem je průběh nepatrného vzdalování a přibližování,
          který přístroje nepřetržitě zaznamenávají.{" "}
          <SourceLink id="DOI_10_1038_s41558_019_0456_2">(Tapley a kol. 2019, rámeček 1)</SourceLink>
        </p>
        <p>
          Obě družice sledují tutéž oblast s krátkým časovým odstupem. Právě
          rozdíl jejich pohybu je citlivý na nerovnoměrné rozložení hmoty.
          K určení změn rozložení hmoty potřebujeme opakované přelety. Země se pod dráhou
          otáčí, takže dvojice postupně měří nad různými oblastmi. Z přibližně
          měsíce měření lze sestavit globální obraz gravitačního pole.{" "}
          <SourceLink id="DOI_10_1038_s41558_019_0456_2">(Tapley a kol. 2019)</SourceLink>
        </p>

        <h3>Co přístroje skutečně měří</h3>
        <p>
          Stejné uspořádání používá navazující mise GRACE-FO. Dodatek FO
          znamená Follow-On, tedy pokračování. Každá družice vysílá k druhé mikrovlnný signál a současně přijímá její
          signál. Přístroj sleduje fázi, tedy polohu v opakujícím se kmitu vlny.
          Když se dráha signálu prodlouží, přijatá vlna se vůči místnímu signálu
          posune v kmitu. Frekvence říká, kolik kmitů proběhne za sekundu. Z průběžně
          sledovaného posunu a známé frekvence se určí
          změna vzdálenosti. Měření v obou směrech se spojí a vztáhne ke společnému
          času. Pro výpočet gravitačního pole se používá zejména rychlost, s jakou
          se vzájemná vzdálenost mění.{" "}
          <SourceLink id="WEB_GRACEFO_L1_Handbook_2019">(příručka GRACE-FO, oddíl 3.3)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/gravimetry/grace-fo-clean-room.jpg" width={6569} height={4693}
            className="article-figure__media" unoptimized
            alt="Dvě družice GRACE-FO s bílými panely v čistém prostoru. Každá je upevněna mezi velkými oblouky pozemního otočného přípravku." />
          <figcaption>
            Dvojice GRACE-FO při přípravě na základně Vandenberg v Kalifornii.
            Bílé hranaté sestavy jsou těla družic, velké oblouky kolem nich
            patří k pozemním otočným přípravkům. Měřicí přístroje jsou součástí
            družic. Snímek NASA zveřejnila 12. března 2018.
            Foto NASA/JPL-Caltech/USAF.{" "}
            <SourceLink id="WEB_NASA_GRACEFO_PIA22341_2018">Původní snímek</SourceLink>,{" "}
            <SourceLink id="WEB_NASA_Guidelines_for_using_NASA_Images_and_Media_Guide_e6f9e9e4">podmínky použití NASA</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Abychom průběh vzdálenosti přiřadili místům na Zemi, potřebujeme znát
          dráhy obou družic. Ty určují přijímače družicového navigačního systému
          GPS, anglicky Global Positioning System. GPS poskytuje také časovou
          referenci pro sladění záznamů. Hvězdné kamery porovnávají snímky hvězd
          s jejich známými polohami a určují natočení družic. Díky tomu lze
          převést vzdálenost mezi anténami na vzdálenost mezi těžišti, jejichž
          pohyb popisuje výpočet dráhy.{" "}
          <SourceLink id="WEB_GRACEFO_L1_Handbook_2019">(příručka GRACE-FO, oddíly 2 a 3)</SourceLink>
        </p>
        <p>
          Pohyb ovlivňuje také odpor řídké atmosféry a tlak slunečního záření.
          Jejich účinek zaznamenává akcelerometr uvnitř každé družice. Obsahuje
          zkušební těleso, které by volně padalo v gravitačním poli. Když okolní
          prostředí zatlačí na družici, její pouzdro se vůči tělesu snaží posunout.
          Přístroj těleso udržuje ve stanovené poloze a z potřebného působení
          určuje negravitační zrychlení. Tento údaj umožňuje při zpracování
          oddělit odpor atmosféry a tlak záření od gravitačního účinku.{" "}
          <SourceLink id="WEB_GFZ_GRACE_Instruments">(GFZ: akcelerometr GRACE)</SourceLink>{" "}
          <SourceLink id="DOI_10_1007_s00190_005_0480_z">(Tapley a kol. 2005)</SourceLink>
        </p>
        <p>
          Při přípravě záznamů se opravují odchylky palubních hodin vůči času GPS
          a započítává se pohyb družic během letu signálu. Přístroj používá dvě
          mikrovlnné frekvence. Jejich společné vyhodnocení potlačuje zpoždění
          způsobené ionosférou, tedy elektricky nabitou částí vysoké atmosféry.
          U akcelerometrů se při řešení drah odhadují posun nuly a měřítko odezvy.
          Posun nuly odstraňuje stálou složku odezvy. Měřítko určuje, jak velkému
          zrychlení odpovídá změna údaje. Takto kalibrované zrychlení vstupuje
          do výpočtu pohybu.{" "}
          <SourceLink id="WEB_GRACEFO_L1_Handbook_2019">(příručka GRACE-FO, oddíl 3)</SourceLink>{" "}
          <SourceLink id="DOI_10_1007_s00190_005_0480_z">(Tapley a kol. 2005, oddíl 2)</SourceLink>
        </p>

        <h3>Jak z pohybu vznikne mapa hmotnosti</h3>
        <p>
          Výpočet vychází z fyzikálního modelu pohybu družic. Pro zadané rozložení
          hmoty lze spočítat, jaké gravitační působení vyvolá a jak se budou
          družice pohybovat. Zpracování tento postup obrátí. Hledá takové rozložení
          hmoty, pro které vypočtené změny vzdálenosti co nejlépe odpovídají
          naměřeným záznamům. Současně využívá polohy z GPS a negravitační
          zrychlení z akcelerometrů. Jedna měsíční mapa tak shrnuje mnoho přeletů
          nad různými místy.{" "}
          <SourceLink id="DOI_10_1007_s00190_005_0480_z">(Tapley a kol. 2005)</SourceLink>
        </p>
        <p>
          Část rozložení hmoty se mění rychleji než jednou za měsíc. Patří sem
          příliv a odliv nebo přesuny vzduchu a oceánské vody během počasí.
          Jejich průběh dodávají modely atmosféry, oceánu a slapů. Zpracování
          započítá jejich gravitační působení v čase jednotlivých měření.
          Zbylý signál pak slouží k určení pomalejších změn. Tím se omezí situace,
          kdy by se krátký děj zachycený při několika přeletech promítl do výsledku
          jako změna celého měsíce.{" "}
          <SourceLink id="DOI_10_1007_s00190_005_0480_z">(Tapley a kol. 2005, oddíl 2)</SourceLink>{" "}
          <SourceLink id="DOI_10_1038_s41558_019_0456_2">(Tapley a kol. 2019)</SourceLink>
        </p>
        <p>
          Jedním způsobem výpočtu je rozdělení povrchu na větší oblasti
          a hledání změny hmotnosti každé z nich. Tyto prvky se nazývají
          <em>mascony</em>, podle anglického mass concentration, tedy soustředění
          hmoty. Řešení Jet Propulsion Laboratory, zkráceně JPL, používá
          4 551 stejně velkých oblastí. Výpočet využívá také předpoklad,
          že změny v sousedních oblastech a blízkých měsících spolu do určité
          míry souvisejí. Sílu této vazby odvozuje z geofyzikálních modelů.
          Tím potlačuje kolísání způsobené šumem.{" "}
          <SourceLink id="DOI_10_1002_2014JB011547">(Watkins a kol. 2015)</SourceLink>{" "}
          <SourceLink id="WEB_JPL_Mascon_RL061Mv3_Notes_2022">(JPL, dokumentace verze 3)</SourceLink>
        </p>
        <p>
          Pro sledování vody a ledu se odečítá také modelovaný příspěvek pomalé
          přestavby zemského nitra po poslední době ledové. Podloží se dodnes
          přizpůsobuje někdejšímu zatížení ledem. Přesouvá se přitom hmota hornin,
          a tím se mění gravitace. Tento děj se označuje jako glaciální
          izostatické přizpůsobování, anglicky Glacial Isostatic Adjustment,
          zkráceně GIA. Nad ledovými příkrovy tak oddělíme dlouhodobý
          příspěvek podloží od hledané změny ledu. V datovém produktu
          použitém níže je tento krok již proveden modelem ICE6G-D.{" "}
          <SourceLink id="DOI_10_1038_s41558_019_0456_2">(Tapley a kol. 2019)</SourceLink>{" "}
          <SourceLink id="WEB_JPL_Mascon_RL061Mv3_Notes_2022">(JPL, dokumentace verze 3)</SourceLink>
        </p>
        <p>
          Část masconů zasahuje současně na souš i do moře. Jejich hmotnost
          proto rozdělí pobřežní filtr mezi obě části. Využívá k tomu odhady
          z okolních pevninských a oceánských oblastí a zachovává celkovou
          hmotnost masconu. Tento krok pomáhá přiřadit změnu správné straně
          pobřeží. Ve zkratkách datových produktů se označuje CRI,
          anglicky Coastline Resolution Improvement, tedy zpřesnění rozlišení
          pobřeží.{" "}
          <SourceLink id="DOI_10_1002_2016WR019344">(Wiese a kol. 2016)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/gravimetry/measurement-to-mass.svg" width={640} height={850}
            className="article-figure__media" unoptimized
            alt="Postup od změn vzdálenosti dvojice družic přes určení drah a oddělení dalších sil k měsíčnímu rozložení hmoty a součtu změny hmotnosti ve vybrané oblasti." />
          <figcaption>
            Cesta od přístrojových záznamů k výsledku. Šipky ukazují návaznost
            kroků. Mapa vzniká společným vyhodnocením mnoha přeletů, poté se
            její hodnoty sečtou pro vybrané území. Schéma Klimatologie.eu podle{" "}
            <SourceLink id="WEB_GRACEFO_L1_Handbook_2019">příručky GRACE-FO</SourceLink>{" "}
            a <SourceLink id="DOI_10_1002_2016WR019344">Wieseho a kol. (2016)</SourceLink>.
          </figcaption>
        </figure>

        <h3>Co znamenají hodnoty na mapě</h3>
        <p>
          Výstupní mapy často vyjadřují změnu hmotnosti pomocí ekvivalentní výšky
          vody. Představíme si vrstvu kapalné vody rovnoměrně rozprostřenou
          po dané ploše. Její hmotnost má být stejná jako zjištěná změna hmotnosti.
          Výška této vrstvy dovoluje porovnávat oblasti různých velikostí.
          Stejné vyjádření se používá i tam, kde skutečnou změnu tvoří led
          nebo voda uložená pod zemí.{" "}
          <SourceLink id="DOI_10_1002_2014JB011547">(Watkins a kol. 2015)</SourceLink>
        </p>
        <Equation tex={String.raw`m_i(t)=\rho_{\mathrm w}\,A_i\,h_i(t)`} />
        <p>
          Značka <InlineMath tex="i" /> označuje vybranou oblast mapy a{" "}
          <InlineMath tex="t" /> měsíc. Výška <InlineMath tex="h_i(t)" /> je
          v metrech, plocha <InlineMath tex="A_i" /> v metrech čtverečních
          a referenční hustota vody <InlineMath tex={String.raw`\rho_{\mathrm w}`} /> je
          1 000 kilogramů na metr krychlový. Součin plochy a výšky dává objem,
          vynásobením hustotou získáme změnu hmotnosti <InlineMath tex="m_i(t)" />
          v kilogramech. Pro větší území se příspěvky jeho ploch sečtou.
          Výsledek se obvykle udává v gigatunách, zkráceně Gt. Jedna gigatuna
          je miliarda tun, tedy bilion kilogramů.{" "}
          <SourceLink id="WEB_NASA_Ice_Mass_Datasheet_2023">(NASA: popis dat a jednotek)</SourceLink>
        </p>
        <p>
          Tyto hodnoty představují odchylku od zvoleného referenčního období.
          Nulová hodnota proto znamená stejnou hmotnost jako ve výchozím stavu.
          Záporná hodnota znamená, že hmoty ubylo. Pro porovnání dvou měsíců
          odečteme dřívější hodnotu od pozdější. Společná reference se tím
          vyruší.{" "}
          <SourceLink id="WEB_NASA_Ice_Mass_Datasheet_2023">(NASA: význam časové řady)</SourceLink>
        </p>
        <Equation tex={String.raw`\Delta M=M(t_2)-M(t_1)`} />
        <p>
          <InlineMath tex="M" /> je odchylka hmotnosti celého vybraného území
          od reference, zde v gigatunách. Časy <InlineMath tex="t_1" /> a{" "}
          <InlineMath tex="t_2" /> označují dřívější a pozdější měsíc.
          Rozdíl <InlineMath tex={String.raw`\Delta M`} /> vyjadřuje změnu
          mezi nimi. Záporný rozdíl odpovídá úbytku. Každá vstupní hodnota
          zastupuje měsíční období měření.
        </p>

        <h3>K čemu se gravimetrie používá</h3>
        <p>
          Nad Grónskem a Antarktidou gravimetrie určuje celkovou změnu hmotnosti
          ledových příkrovů. Tím doplňuje{" "}
          <Link href="/metody/radarova-a-laserova-altimetrie/">altimetrii</Link>,
          která měří změnu výšky povrchu. Sasgen a spoluautoři tak v roce 2020
          vyhodnotili výrazný grónský úbytek během roku 2019. Gravitační měření
          spojili s výpočty sněžení a tání a s měřením odtoku ledu do moře.
          Tím mohli celkový úbytek vysvětlit příspěvky jednotlivých procesů.
          Širší porovnání metod a dlouhodobé výsledky rozebírá článek o{" "}
          <Link href="/pozorovani/nestabilita-prikrovu/">ledových příkrovech</Link>.{" "}
          <SourceLink id="DOI_10_1038_s43247_020_0010_1">(Sasgen a kol. 2020)</SourceLink>
        </p>
        <p>
          Nad pevninou se sleduje společná zásoba vody ve sněhu, půdě, řekách,
          jezerech a podzemí. K oddělení těchto složek se přidávají další měření
          a hydrologické modely. Nad oceánem gravimetrie zachycuje změnu hmotnosti
          vody. Spolu s měřením hladiny a teploty oceánu tak pomáhá rozlišit
          přírůstek vody od zvětšení jejího objemu při oteplování.{" "}
          <SourceLink id="DOI_10_1038_s41558_019_0456_2">(Tapley a kol. 2019)</SourceLink>
        </p>
        <p>
          Gravitační pole se určovalo z drah družic už před GRACE. Mise zahájená
          v roce 2002 přidala přesné průběžné měření mezi dvojicí družic.
          Studie modelu GGM02 z roku 2005 dokládá, jak tím vzrostla podrobnost
          globálního gravitačního pole. V roce 2018 na GRACE navázala mise
          GRACE-FO. Vedle mikrovlnného přístroje nese také laserový interferometr,
          který sleduje změnu vzdálenosti pomocí fáze laserového záření.{" "}
          <SourceLink id="DOI_10_1007_s00190_005_0480_z">(Tapley a kol. 2005)</SourceLink>{" "}
          <SourceLink id="WEB_GRACEFO_L1_Handbook_2019">(příručka GRACE-FO)</SourceLink>
        </p>
        <p>
          Zpracovatelská centra poskytují vedle masconových map také gravitační
          pole vyjádřené součtem prostorových funkcí, takzvaných sférických
          harmonických. Každá z nich popisuje jinak velké a jinak rozmístěné
          změny na zeměkouli. Jejich složením vznikne globální pole, z něhož se
          následně počítá změna hmotnosti zvoleného území. Tuto cestu použili
          Sasgen a spoluautoři. Mascony naproti tomu vyjadřují výsledek rovnou
          pomocí oblastí. Obě varianty vycházejí ze stejného družicového měření.{" "}
          <SourceLink id="DOI_10_1038_s43247_020_0010_1">(Sasgen a kol. 2020, metodika)</SourceLink>
        </p>

        <h3 id="hmotnost-oceanu">Hmotnost oceánu jako příspěvek ke změně hladiny</h3>
        <p>
          Změnu hmotnosti vody nad oceánskou plochou lze vyjádřit jako výšku
          odpovídající vrstvy vody. Tím dostaneme příspěvek v milimetrech,
          který lze sečíst s objemovou změnou odvozenou z teplotních profilů.
          Součet se porovnává s vývojem
          <Link href="/pozorovani/gmsl/#bilance-hladiny"> globální hladiny moře</Link>.
          Frederikse a kolegové pro období 2003–2018 použili k určení
          hmotnostního příspěvku měření GRACE.{" "}
          <SourceLink id="DOI_10_1038_s41586_020_2591_3">(Frederikse a kol. 2020, bilance hladiny)</SourceLink>
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Gravimetrie rozlišuje změny v rozsáhlých oblastech, typicky stovkách
          kilometrů. Výsledek ovlivňuje šum měření, oddělení sousedních oblastí
          a modely atmosféry, oceánu i pohybu podloží. Ověřuje se porovnáním
          s jinými měřeními i testy zpracování. V simulaci JPL snížil pobřežní
          filtr průměrnou chybu přenosu signálu mezi souší a oceánem přibližně
          ze dvou na jeden centimetr ekvivalentní výšky vody. Jde o výsledek
          konkrétního testu mimo zaledněné oblasti, nikoli o celkovou nejistotu
          každé mapy.{" "}
          <SourceLink id="DOI_10_1002_2016WR019344">(Wiese a kol. 2016)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Podrobnosti nejistot a nezávislé kontroly</summary>
          <p>
            <strong>Velikost rozlišovaných oblastí.</strong> Mascony JPL mají
            rozměr plochu odpovídající přibližně třem krát třem
            úhlovým stupňům na rovníku. Jemnější půlstupňová mřížka
            zveřejněné mapy obsahuje hodnoty těchto větších prvků. Samostatné
            políčko proto nepředstavuje nezávislé měření malého ledovce.{" "}
            <SourceLink id="DOI_10_1002_2014JB011547">(Watkins a kol. 2015)</SourceLink>
            Část signálu může být připsána sousední oblasti. Wiese a kolegové
            testovali pobřežní filtr na syntetických datech z modelů vody, oceánu
            a ledu, u nichž znali vstupní hmotnost. Takto ověřili chování
            algoritmu, nikoli všechny chyby skutečného měření.{" "}
            <SourceLink id="DOI_10_1002_2016WR019344">(Wiese a kol. 2016, oddíl 3)</SourceLink>
          </p>
          <p>
            <strong>Přístroje a návaznost řady.</strong> Kontrola sleduje
            skoky fáze, mezery záznamu, změny hodin a odezvy akcelerometrů.
            Verze JPL RL06.1M v3 použitá v příkladu využívá upravený produkt
            akcelerometru, který při potížích jednoho přístroje přenáší část
            informace z druhé družice. Nejistota takto doplněného vstupu se
            musí zohlednit. Mezi koncem GRACE a začátkem GRACE-FO je mezera
            v letech 2017–2018. Současná měření obou misí pro přímé porovnání
            neexistují. Také laserové měření GRACE-FO používá mikrovlnné měření
            k určení měřítka a časového posunu, takže jejich shoda není zcela
            nezávislou kontrolou.{" "}
            <SourceLink id="WEB_GRACEFO_L1_Handbook_2019">(příručka GRACE-FO)</SourceLink>{" "}
            <SourceLink id="WEB_JPL_Mascon_RL061Mv3_Notes_2022">(JPL, změny verze 3)</SourceLink>{" "}
            <SourceLink id="DOI_10_1038_s43247_020_0010_1">(Sasgen a kol. 2020)</SourceLink>
          </p>
          <p>
            <strong>Jiná měření.</strong> Tapley a kolegové ověřili model
            GGM02S také laserovým měřením drah jiných družic. U družice Starlette
            klesla průměrná velikost rozdílu vyjádřená pomocí RMS z 3,7 centimetru
            se starším modelem EGM96 na 2,7 centimetru s GGM02S. RMS je odmocnina
            průměru čtverců rozdílů. Tyto laserové údaje nebyly vstupem do
            GGM02S. Test podpořil správnost průměrného gravitačního pole,
            přímo však neověřoval dnešní měsíční bilanci ledu.
            Sasgen a kolegové porovnali grónskou řadu s bilancí sněžení, tání
            a odtoku. Její dlouhodobý trend před porovnáním sladili s GRACE.
            Shoda kratších změn proto poskytuje kontrolu časového průběhu,
            ne nezávislé ověření tohoto trendu.{" "}
            <SourceLink id="DOI_10_1007_s00190_005_0480_z">(Tapley a kol. 2005, oddíl 5.1)</SourceLink>{" "}
            <SourceLink id="DOI_10_1038_s43247_020_0010_1">(Sasgen a kol. 2020)</SourceLink>
          </p>
          <p>
            <strong>Nejistota změny hmotnosti.</strong> Odhad závisí i na
            použitém modelu GIA a na předpokladech zpracování. Společné modely
            mohou vytvářet společnou chybu několika produktů. Jednotlivé měsíce
            mohou mít rovněž související chyby. Tabulka NASA uvádí pro každý
            měsíc nejistotu na úrovni jedné směrodatné odchylky, zahrnující
            měření a přenos signálu mezi oblastmi. Neposkytuje jejich vzájemné
            kovariance, tedy údaje o společném kolísání chyb. Z těchto dvou
            čísel proto v příkladu nepočítáme interval nejistoty rozdílu.{" "}
            <SourceLink id="WEB_NASA_Ice_Mass_Data_2023">(záhlaví původních dat NASA)</SourceLink>{" "}
            <SourceLink id="WEB_JPL_Mascon_RL061Mv3_Notes_2022">(JPL, dokumentace verze 3)</SourceLink>
          </p>
        </details>

        <h2>Skutečný příklad: změna hmotnosti Grónska</h2>
        <p>
          NASA zveřejňuje tabulku grónské a antarktické hmotnostní řady
          od dubna 2002 do září 2022. Jde o veřejný výběr z produktu JPL
          RL06.1M CRI, verze 3.0, připravený 24. ledna 2023.
          Použijeme dvě grónské hodnoty: duben 2019 a duben 2020.
          Vstupujeme do postupu až po výpočtu gravitačního pole, odečtení
          modelovaného pohybu podloží a sečtení hmotnosti území.
          Zopakujeme poslední krok, tedy porovnání dvou měsíčních výsledků.{" "}
          <SourceLink id="WEB_NASA_Ice_Mass_Data_2023">(NASA: datový soubor)</SourceLink>{" "}
          <SourceLink id="WEB_NASA_Ice_Mass_Datasheet_2023">(popis původu a úprav dat)</SourceLink>
        </p>
        <div className="method-data-output method-data-output--compact method-data-output__table-wrap" role="region" aria-label="Dvě měsíční hodnoty hmotnosti Grónska" tabIndex={0}>
          <table>
            <caption>Odchylka hmotnosti Grónska vůči dubnu 2002</caption>
            <thead><tr><th scope="col">Měsíční období</th><th scope="col">Odchylka hmotnosti</th><th scope="col">Uvedená nejistota (1σ)</th></tr></thead>
            <tbody>
              <tr><td>Duben 2019</td><td>−4 238,98 Gt</td><td>15,74 Gt</td></tr>
              <tr><td>Duben 2020</td><td>−4 755,02 Gt</td><td>15,75 Gt</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Obě odchylky se vztahují k dubnu 2002. Záporná čísla říkají,
          o kolik byla hmotnost nižší než v tomto výchozím měsíci.
          Od pozdější hodnoty odečteme dřívější:{" "}
          <SourceLink id="WEB_NASA_Ice_Mass_Data_2023">(list Greenland Original Data, řádky 207 a 219)</SourceLink>
        </p>
        <Equation tex={[
          String.raw`\Delta M=(-4\,755{,}02)-(-4\,238{,}98)`,
          String.raw`\Delta M=-516{,}04\ \mathrm{Gt}`,
        ]} />
        <p>
          Mezi uvedenými měsíčními obdobími tedy podle této řady ubylo přibližně
          <strong> 516 miliard tun</strong>. Desetinná místa ponecháváme
          kvůli zopakování výpočtu, nejistotu měření ukazuje tabulka.
          Výsledek popisuje rozdíl dubnových hodnot, nikoli bilanci kalendářního
          roku 2019. Změna reference celé řady by obě vstupní hodnoty posunula
          stejně a tento rozdíl by zachovala.
        </p>
        <details className="article-details">
          <summary>Data a postup pro zopakování</summary>
          <p>
            <SourceLink id="WEB_NASA_Ice_Mass_Data_2023">Sešit NASA</SourceLink>{" "}
            obsahuje původní textové řady i list s rozdělenými sloupci.
            Z listu <code>Greenland Original Data</code> vybíráme buňky
            A207 a A219 s časovými značkami 2019.29 a 2020.29.
            Zaokrouhlený desetinný rok označuje měsíční období, nepřevádíme
            jej na přesný den. Stejná čísla jsou na řádcích 173 a 185 listu
            <code> Greenland &amp; Ant Derived Data</code>. Podkladový produkt
            JPL má DOI <code>10.5067/TEMSC-3MJ62</code>.
          </p>
          <p>
            Zveřejňujeme <a href="/data/methods/gravimetry/greenland-april.csv">dva vybrané řádky CSV</a>,{" "}
            <a href="/data/methods/gravimetry/provenance.json">původ a kontrolní součty souborů</a>{" "}
            a <a href="/data/methods/gravimetry/reproduce.py">skript pro zopakování</a>.
            Uložte je do jedné složky a spusťte <code>python reproduce.py</code>.
            Skript ověří výřez a vypočítá rozdíl bez dalších balíčků.
            Volba <code>--workbook cesta-k-sesitu.xlsx</code> navíc porovná
            čísla s původním sešitem NASA. Historickou verzi zde zachováváme,
            aby šel výpočet přesně zopakovat i po vydání novějších dat.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Změna rozložení hmoty mění gravitační pole Země a s ním i pohyb družic.
            Přesné sledování jejich vzájemné vzdálenosti umožňuje tuto změnu změřit.
            Opakované přelety tak ukazují, kde hmota přibývá a kde ubývá.
          </p>
          <p>
            Družicová gravimetrie umožňuje určovat změny hmotnosti ledových příkrovů,
            celkových zásob vody na pevnině a vody v oceánu. Dvojice GRACE a GRACE-FO
            poskytují zpravidla měsíční výsledky pro oblasti o rozměru přibližně 300 km
            a více. Lze tak sledovat sezónní přesuny vody, sucha i dlouhodobý úbytek
            ledu.{" "}
            <SourceLink id="DOI_10_1038_s41558_019_0456_2">(Tapley a kol., 2019)</SourceLink>,{" "}
            <SourceLink id="DOI_10_1038_s43247_020_0010_1">(Sasgen a kol., 2020)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
