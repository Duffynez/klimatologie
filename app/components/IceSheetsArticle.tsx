import Image from "next/image";
import { SourceLink } from "./SourceLink";

export function IceSheetsArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>Ledový příkrov</dt>
            <dd>Souvislá masa ledovcového ledu na pevnině o ploše větší než 50 000 km². Dnes existuje v Grónsku a Antarktidě.</dd>
          </div>
          <div>
            <dt>Gigatuna</dt>
            <dd>Jedna miliarda tun, značená Gt. Jedna gigatuna vody má objem přibližně jeden kilometr krychlový.</dd>
          </div>
          <div>
            <dt>Firn</dt>
            <dd>Starší stlačený sníh mezi čerstvým sněhem a ledem. Jeho proměny mohou měnit výšku povrchu bez stejné změny hmotnosti.</dd>
          </div>
          <div>
            <dt>Linie ukotvení</dt>
            <dd>Hranice, na níž led přestává spočívat na podloží a začíná plout na moři jako ledový šelf.</dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Změna za celé období se uvádí v gigatunách, rychlost změny v gigatunách za rok. Přepočet na milimetry
          vyjadřuje odpovídající příspěvek ke globální střední hladině moře, nikoli výšku ledu na příkrovu.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Změna hmotnosti ledového příkrovu vyjadřuje, o kolik se mezi dvěma určenými okamžiky změnila celková
          hmotnost ledu a sněhu v Grónsku nebo Antarktidě. Kladná hodnota znamená přírůstek, záporná úbytek. Výsledek
          může popisovat celý příkrov, jeho část nebo rychlost změny za jeden rok. Území a období patří k údaji
          stejně jako jeho číselná hodnota.
        </p>

        <p>
          Takto vymezenou veličinu používají práce, které ji určují z pohybu a tloušťky ledu, ze změny výšky povrchu i
          ze změn gravitačního pole Země. Jejich společným cílem je zjistit rozdíl mezi hmotností na začátku a na konci
          období, přestože k němu docházejí různými měřeními. Tři postupy a jejich omezení porovnali už{" "}
          <SourceLink id="DOI_10_1126_science_1073888">Rignot a Thomas v roce 2002</SourceLink>.
          Mezinárodní projekt IMBIE, zaměřený na vzájemné porovnání hmotnostních bilancí příkrovů, z nich sestavuje
          společná vyhodnocení. V článku rozlišujeme jeho vydání pro roky 1992–2020 a novější vydání do roku 2023.
        </p>

        <p>
          Hmotnostní bilance je součet všech přírůstků a úbytků během zvoleného období. Sníh přidává hmotnost na
          povrchu. Voda odtékající z příkrovu a led překračující linii ukotvení ji z pevninské části odvádějí. Metoda
          označovaná jako vstup–výstup tyto složky odhaduje odděleně. Výškoměry a gravitační družice naproti tomu
          sledují jejich výsledný součet. Toto rozdělení popisují metodické přehledy{" "}
          <SourceLink id="DOI_10_1007_s10712_023_09795_8">Otosaka et al., 2023</SourceLink> a{" "}
          <SourceLink id="DOI_10_5194_essd_15_1597_2023">společné vyhodnocení IMBIE</SourceLink>.
        </p>

        <p>
          Zveřejněné číslo je změna vůči zvolenému počátku, nikoli zvážení celé zásoby ledu. Družice například
          zjistí, že se od dubna 2002 změnilo rozložení hmoty v Grónsku. Z této změny lze vypočítat úbytek v
          gigatunách, aniž by bylo nutné znát absolutní hmotnost každého kusu ledu. Počáteční bod grafu proto bývá
          nastaven na nulu nebo na průměr vybraného období. Posunutí této nuly nemění rychlost úbytku.{" "}
          <SourceLink id="DOI_10_1038_s41558_019_0456_2">Tapley et al., 2019</SourceLink>
        </p>

        <p>
          Do hlavního výsledku se započítává především led spočívající na pevnině. Za linií ukotvení pokračuje část
          antarktického ledu jako plovoucí šelf. Ten se sleduje samostatně a není součástí zde uváděné změny hmotnosti
          pevninského příkrovu. Zvláštní pozornost vyžadují také menší ledovce na okrajích Grónska a Antarktidy. Některá
          gravitační měření je kvůli hrubšímu prostorovému rozlišení zachytí spolu s příkrovem, zatímco výškové
          výpočty je mohou oddělit. IMBIE tento rozdíl výslovně testovala. Po odečtení okrajových ledovců se její odhad
          úbytku ve vydání 1992–2020 změnil o 4,1 % v Grónsku a o 3,3 % v Antarktidě, tedy méně než uváděná
          nejistota výsledku. Šlo o test vlivu okrajových ledovců, nikoli o jejich úplné oddělení v hlavním souboru.{" "}
          <SourceLink id="DOI_10_5194_essd_15_1597_2023">Otosaka et al., 2023, oddíl 3</SourceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Vodorovně posuvné mapy změny hmotnosti Grónska a Antarktidy">
            <Image
              className="article-figure__media"
              src="/media/ice-sheets/nasa-grace-polar-mass-2025.png"
              alt="Mapy změny hmotnosti pevninského ledu v Grónsku a Antarktidě od dubna 2002 do března 2025"
              width={1920}
              height={1080}
              sizes="(max-width: 900px) 980px, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Změna hmotnosti pevninského ledu od dubna 2002 do března 2025 podle družic GRACE a GRACE-FO. Barva
            vyjadřuje změnu hmotnosti přepočtenou na metry vodního ekvivalentu: červená označuje úbytek, modrá
            přírůstek. Vodní ekvivalent je tloušťka vrstvy vody o stejné hmotnosti jako změna sněhu a ledu.
            Malý graf má na vodorovné ose roky, na svislé změnu hmotnosti v Gt. Žlutá křivka ukazuje Grónsko,
            modrá Antarktidu. Šedé plochy kolem Antarktidy jsou plovoucí ledové šelfy. Vizualizace používá pouze
            gravitační měření a má hrubší prostorové rozlišení než fotografie nebo výšková mapa. Zdroj a kredit:{" "}
            <SourceLink id="WEB_NASA_NASA_Scientific_Visualization_Studio_GRACE_and_G_1879a9f3">NASA a JPL/Caltech, 2025</SourceLink>.
          </figcaption>
        </figure>

        <h2>Historie pozorování</h2>
        <p>
          Měřické výpravy dokázaly sledovat jednotlivá místa na příkrovech už dříve, ale celé Grónsko ani Antarktidu
          nebylo možné pravidelně přeměřovat ze země. První družicový výškoměr určený pro oceán ukázal, že lze z oběžné
          dráhy mapovat také led. Brooks a kol. v roce 1978 sestavili z měření družice GEOS-3 mapu povrchu jižního
          Grónska a navrhli, aby se opakovanými přeletovými profily hledaly budoucí změny.{" "}
          <SourceLink id="DOI_10_1038_274539a0">Brooks et al., 1978</SourceLink>
        </p>

        <p>
          Dlouhý výškový záznam používaný v dnešních společných vyhodnoceních začíná roku 1992 měřeními evropské
          družice ERS-1. Navázaly ERS-2, Envisat, laserový ICESat, CryoSat-2 a ICESat-2. Jejich měření se v čase
          částečně překrývají, což umožňuje určit a opravit rozdíly mezi přístroji. Spojení těchto šesti misí pro
          Grónsko popsali <SourceLink id="DOI_10_5194_essd_18_1729_2026">Nilsson a Gardner, 2026</SourceLink>.
          Starší měření měla menší pokrytí, zejména na strmých okrajích příkrovů.{" "}
          <SourceLink id="DOI_10_1007_s10712_023_09795_8">Otosaka et al., 2023, metodický přehled</SourceLink>
        </p>

        <p>
          Jiná větev měření porovnávala množství sněhu přidaného na povrchu s ledem, který odtéká přes okraj
          příkrovu. Družicové snímky postupně zpřesnily rychlost proudění a radarová měření tloušťku ledu. Rignot a
          Thomas v roce 2002 shrnuli takto sestavené bilance Grónska a Antarktidy a současně ukázali, které části
          výpočtu byly tehdy nejisté. <SourceLink id="DOI_10_1126_science_1073888">Rignot a Thomas, 2002</SourceLink>
        </p>

        <p>
          Třetí postup umožnila dvojice družic GRACE vypuštěná v roce 2002. Název označuje experiment zaměřený na
          gravitační pole a klima. Isabella Velicogna a John Wahr zpracovali v roce 2006 celou Antarktidu z 34
          měsíčních gravitačních map pořízených mezi dubnem 2002 a srpnem 2005. Původní GRACE měřila do roku 2017.
          Pokračující mise GRACE-FO poskytuje data od června 2018.{" "}
          <SourceLink id="DOI_10_1126_science_1123785">Velicogna a Wahr, 2006</SourceLink> a{" "}
          <SourceLink id="WEB_NASA_Overview_Mission_GRACE_FO_7d1519d7">NASA/JPL: přehled misí</SourceLink>
        </p>

        <p>
          Jednotlivé týmy zpočátku publikovaly výsledky s různými hranicemi, obdobími a korekcemi. Projekt IMBIE je
          poprvé převedl na společné zadání a v roce 2012 spojil výškoměrná, gravitační a vstupně-výstupní měření za
          roky 1992–2011. Samostatná vyhodnocení Antarktidy a Grónska následovala v letech 2018 a 2020. Společný
          soubor vydaný v roce 2023 prodloužil záznam do konce roku 2020. <SourceLink id="DOI_10_1126_science_1228102">Shepherd et al., 2012</SourceLink>,{" "}
          <SourceLink id="DOI_10_1038_s41586_018_0179_y">IMBIE Team, 2018</SourceLink>,{" "}
          <SourceLink id="DOI_10_1038_s41586_019_1855_2">IMBIE Team, 2020</SourceLink> a{" "}
          <SourceLink id="DOI_10_5194_essd_15_1597_2023">Otosaka et al., 2023</SourceLink>
        </p>

        <p>
          V září 2026 vyšlo další vyhodnocení IMBIE. Sahá do roku 2023 a pomocí starších snímků družic Landsat
          rozšiřuje začátek odhadu do roku 1972 pro Grónsko a 1979 pro Antarktidu. Tyto rané části stojí na metodě
          vstup–výstup a na doplňování neúplného měření rychlosti ledu. Tři družicové postupy jsou společně
          k dispozici až od roku 2002. <SourceLink id="DOI_10_1038_s41597_026_08088_0">Otosaka et al., 2026, vstupní data</SourceLink>
        </p>

        <h2>Jak vzniká zveřejněný záznam</h2>
        <h3>Výška povrchu</h3>
        <p>
          Družicový výškoměr vysílá k povrchu radarový nebo laserový impuls a měří dobu jeho návratu. Z polohy družice
          a této doby se určí výška bodu na ledu. Opakované průlety ukážou, kde se povrch mezi dvěma daty zvýšil nebo
          snížil. Jednotlivé profily se spojí do mapy a chybějící místa se odhadnou podle okolních měření. Radar může
          pronikat do sněhu různě hluboko, zatímco laser častěji ztrácí měření pod mraky. Zpracování proto sleduje
          vlastnosti odrazu i rozdíly mezi družicemi. <SourceLink id="DOI_10_1007_s10712_023_09795_8">Otosaka et al., 2023</SourceLink> a{" "}
          <SourceLink id="DOI_10_5194_essd_18_1729_2026">Nilsson a Gardner, 2026</SourceLink>
        </p>

        <p>
          Změna výšky se potom převádí na změnu hmotnosti. Nejprve se odečte pohyb skalního podloží a změna objemu
          firnu, která vznikla stlačením nebo rozpínáním vzduchových mezer. Zbývající objem ledu se násobí jeho
          hustotou. Právě model firnu rozhoduje, zda pozorované snížení povrchu znamená úbytek ledu, nebo zhutnění sněhu
          bez stejného úbytku hmotnosti. Grónský soubor Nilssona a Gardnera používá dva různé modely firnu
          a jejich rozdíl započítává do nejistoty. <SourceLink id="DOI_10_5194_essd_18_1729_2026">Nilsson a Gardner, 2026</SourceLink>
        </p>

        <p>
          Důležitou kontrolou jsou měření mimo družice. Nilsson a Gardner porovnali svůj výškový produkt s leteckým
          laserovým měřením nad Grónskem z let 1993–2019. Rozdíly jsou větší na strmých okrajích než uvnitř
          příkrovu. Shoda výšek však sama neověřuje převod na hmotnost: nejistotu modelů firnu je nutné posoudit
          zvlášť. <SourceLink id="DOI_10_5194_essd_18_1729_2026">Nilsson a Gardner, 2026, oddíl 4 a obr. 3</SourceLink>
        </p>

        <h3>Změna gravitačního pole</h3>
        <p>
          GRACE a GRACE-FO tvoří vždy dvě družice letící po téměř stejné dráze přibližně 220 kilometrů za sebou. Když
          první přeletí nad oblastí s větší hmotností, nepatrně zrychlí a vzdálenost mezi družicemi se změní. Přístroje
          opakovaně měří tuto vzdálenost s mikrometrovou přesností. Z měsíce přeletů pak vznikne globální mapa změny
          gravitačního pole a z ní mapa přesunu hmoty. <SourceLink id="WEB_NASA_How_GRACE_FO_Measures_Gravity_GRACE_FO_3fe022bf">NASA/JPL: jak GRACE-FO měří gravitaci</SourceLink>
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/ice-sheets/nasa-grace-how-gravity-is-measured.jpg"
            alt="Čtyři fáze přeletu dvojice družic GRACE-FO nad oblastí s větší hmotností"
            width={798}
            height={719}
            sizes="(max-width: 900px) 100vw, 760px"
            unoptimized
          />
          <figcaption>
            Princip gravitačního měření ve čtyřech okamžicích přeletu. Družice udržují přibližně stejnou dráhu, ale
            jejich vzájemná vzdálenost se při průletu nad místem s větší hmotností nejprve zvětší a potom zmenší. Z
            mnoha takových změn vzniká měsíční mapa. Obrázek vysvětluje měření vzdálenosti, nikoli velikost změny
            grónského nebo antarktického ledu. Zdroj: <SourceLink id="WEB_NASA_How_GRACE_FO_Measures_Gravity_GRACE_FO_3fe022bf">NASA/JPL</SourceLink>.
            Kredit podle zdrojové stránky: NASA.
          </figcaption>
        </figure>

        <p>
          Gravitační mapa zachytí všechny přesuny hmoty, nejen led. Z výpočtu se proto odstraňuje známý vliv atmosféry,
          oceánu a vody na pevnině. Zvlášť důležitá je pomalá odezva zemského pláště na dávné zatížení ledem, označovaná
          jako glaciálně izostatické vyrovnávání. Její velikost se počítá modely a v Antarktidě patří k hlavním zdrojům
          nejistoty. Přístroje měřící zrychlení současně pomáhají odečíst odpor řídké atmosféry a další síly,
          které nejsou gravitační. <SourceLink id="DOI_10_1038_s41558_019_0456_2">Tapley et al., 2019</SourceLink>
        </p>

        <p>
          Měsíční gravitační řešení rozezná změny na plochách o rozměru stovek kilometrů. Při vyhlazení může část
          signálu přesáhnout hranici příkrovu nebo se naopak ztratit. Tato vlastnost se označuje jako únik signálu.
          Týmy jej opravují různými maskami a výpočty soustředěné hmoty. GRACE proto výborně určuje celkovou změnu
          velkého území, ale nedává přesnou hmotnost jednotlivého údolního ledovce. Rozsah rozdílů mezi šestnácti
          gravitačními řešeními vyhodnotili <SourceLink id="DOI_10_5194_essd_15_1597_2023">Otosaka et al., 2023</SourceLink>.
        </p>

        <h3>Vstup a výstup ledu</h3>
        <p>
          Třetí postup sestavuje účet přírůstků a úbytků. Množství ledu překračujícího linii ukotvení se vypočítá z
          jeho rychlosti a tloušťky na profilech napříč proudem. Rychlost poskytují opakované radarové a optické snímky.
          Tloušťku poskytuje radar z letadel. Kde měření chybí, používají se mapy podloží odvozené kombinací měření
          a výpočtu toku ledu. Součet všech profilů udává výstup ledu z pevninské
          části. Základ metody popsali <SourceLink id="DOI_10_1126_science_1073888">Rignot a Thomas, 2002</SourceLink>.
          Novější antarktický výpočet zveřejnili <SourceLink id="DOI_10_1073_pnas_1812883116">Rignot et al., 2019</SourceLink>.
        </p>

        <p>
          Přírůstky a úbytky na povrchu poskytují regionální modely, do nichž vstupují měření počasí, družicová data a
          fyzikální popis sněhu. Od výsledku na povrchu se odečte tok přes linii ukotvení. Tento postup má výhodu, že
          ukáže obě části účtu samostatně, zároveň však dědí nejistotu modelu sněhu, tloušťky i rychlosti ledu. Pro
          Grónsko jej zpracovali <SourceLink id="DOI_10_1073_pnas_1904242116">Mouginot et al., 2019</SourceLink>.
          Jejich výpočet například předpokládá, že povrchová rychlost u výstupního profilu odpovídá průměrné
          rychlosti v celé tloušťce ledu. Měření toku není úplné všude. Pro část ledovců se musí doplnit odhad.
        </p>

        <h3>Jak IMBIE spojuje výsledky</h3>
        <p>
          Vydání IMBIE 1992–2020 nejprve převede příspěvky na společně vymezené oblasti, měsíční časové body a jednotky.
          Z dodaných záznamů kumulované hmotnosti vypočítá rychlost změny v posuvných tříletých úsecích,
          aby mezi sebou šly porovnat výsledky s odlišným
          časovým rozlišením. Potom samostatně spojí všechna výšková, všechna gravitační a všechna vstupně-výstupní
          řešení. Teprve tři výsledky měřicích skupin se spojí do konečného odhadu. Skupina s mnoha podobnými výpočty
          tak automaticky nepřeváží metodu zastoupenou jedinou prací. Při obou spojeních mají přesnější odhady větší
          váhu. Převod na měsíční body sám nepřidává nové pozorování do let, v nichž byl původní odhad řidší.{" "}
          <SourceLink id="DOI_10_5194_essd_15_1597_2023">Otosaka et al., 2023, oddíl 3</SourceLink>
        </p>

        <p>
          Nejistota spojeného výsledku se počítá z nejistot dodaných odhadů. U
          výškoměrů do ní vstupuje zejména pokrytí, převod výšky na hmotnost a model firnu. U gravitační metody zahrnuje
          korekci pohybu zemského pláště a únik signálu přes hranice. U vstupně-výstupního postupu pochází z měření toku
          ledu a modelovaného povrchového účtu. Výsledný interval tedy nevyjadřuje přesnost jednoho čidla, ale celý
          postup od družicového měření po kontinentální součet. Rozdíly mezi metodami se pak porovnávají s touto
          nejistotou jako samostatná kontrola. Jejich rozptyl není automaticky přičten k chybě výsledku. Údaje se
          symbolem ± přebíráme v podobě uvedené autory, nepřevádíme je na 95% intervaly spolehlivosti.{" "}
          <SourceLink id="DOI_10_5194_essd_15_1597_2023">Otosaka et al., 2023, rovnice 3–7 a oddíl 4</SourceLink>
        </p>

        <p>
          Vydání z roku 2026 používá aktualizované vstupy, upravený výpočet nejistoty a váhy úměrné převrácené
          druhé mocnině chyby. V Grónsku navíc doplňuje okolní ledovce do odhadů, které je původně vynechávaly.
          V Antarktidě obdobnou opravu kvůli neshodě dostupných podkladů neprovádí. Nové vydání tedy přepočítává
          i starší roky. <SourceLink id="DOI_10_1038_s41597_026_08088_0">Otosaka et al., 2026, metody</SourceLink>
        </p>

        <h2>Zveřejňovaná data</h2>
        <div className="article-data-list">
          <section className="article-data-item">
            <p className="eyebrow">Spojení tří postupů</p>
            <h3>IMBIE: Grónsko a Antarktida 1992–2020</h3>
            <p>
              Dvanáct tabulek CSV, textových souborů s oddělenými sloupci, obsahuje roční změnu hmotnosti, její
              nejistotu, kumulovaný součet a jeho nejistotu v
              gigatunách i milimetrech. Samostatné soubory jsou pro oba příkrovy dohromady, Grónsko, celou Antarktidu,
              západní a východní Antarktidu a Antarktický poloostrov. Vydání spojuje 50 odhadů ze 14 družicových misí a
              končí 31. prosince 2020.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="DOI_10_5285_77b64c55_7166_4a06_9def_2e400398e452">Záznam datového vydání 1992–2020</SourceLink>{" "}
              <SourceLink id="DOI_10_5194_essd_15_1597_2023">Metodická studie</SourceLink>{" "}
              <SourceLink id="WEB_GitHub_IMBIE_b7c56ec3">Výpočetní kód</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <p className="eyebrow">Aktualizované společné vyhodnocení</p>
            <h3>IMBIE 2026: záznam od 70. let do roku 2023</h3>
            <p>
              Nové vydání spojuje 42 odhadů ze 27 družicových misí. Deset tabulek CSV obsahuje celkovou bilanci
              i její rozdělení na změny na povrchu a odtok ledu.
              Výsledky jsou pro Grónsko, Antarktidu a její tři oblasti, vždy v gigatunách a v milimetrech hladiny.
              Záznam dat uvádí začátek 1. července 1971 pro Grónsko. Roční výsledky studie začínají rokem 1972.
              Antarktida začíná lednem 1979, oba záznamy končí prosincem 2023.
            </p>
            <p>
              Při kontrole 3. října 2026 hlásil datový katalog British Antarctic Survey dočasnou nedostupnost
              a stažení obou vydání IMBIE se nepodařilo ověřit. Plné metodické články včetně tabulek a grafů jsou
              přístupné. Dostupnost dat lze znovu zkontrolovat přes přehled vydání IMBIE.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="DOI_10_5285_128c5e33_5224_4197_82f0_19dcc95b80a0">Záznam datového vydání do roku 2023</SourceLink>{" "}
              <SourceLink id="DOI_10_1038_s41597_026_08088_0">Metody a výsledkové tabulky</SourceLink>{" "}
              <SourceLink id="WEB_imbie_org_imbie_org_e2c3f887">Přehled vydání IMBIE</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <p className="eyebrow">Měsíční gravitační měření</p>
            <h3>NASA GRACE a GRACE-FO 2002–2025</h3>
            <p>
              Zde použitá vizualizace NASA zachycuje změny hmotnosti od dubna 2002 do března 2025, odvozené z
              dvojic gravitačních družic. Původní měření GRACE končí v roce 2017 a GRACE-FO navazuje od června 2018.
              Mezera mezi misemi zůstává v datech označená. Obrázky a animace lze stáhnout přímo, vědecké soubory jsou
              dostupné po bezplatné registraci NASA Earthdata. Datový produkt laboratoře JPL ve verzi RL06.3Mv04
              udává změnu jako výšku vrstvy vody. Jeho půlstupňová výstupní síť je jemnější než skutečné rozlišení
              gravitačního měření. Sousední body nejsou samostatně změřené ledovce. Tato datová verze není
              novým vydáním zde převzatého obrázku.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="WEB_NASA_Ice_Sheets_Earth_Indicator_NASA_Science_77404de9">NASA Earth Indicator a data</SourceLink>{" "}
              <SourceLink id="WEB_NASA_NASA_Scientific_Visualization_Studio_GRACE_and_G_1879a9f3">Obrázky a animace 2002–2025</SourceLink>{" "}
              <SourceLink id="DOI_10_5067_temsc_3jc634">JPL: gravitační data RL06.3Mv04</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <p className="eyebrow">Evropský gravitační produkt</p>
            <h3>Copernicus: gravitační bilance, verze 5</h3>
            <p>
              Climate Data Store, datový katalog služby Copernicus, uvádí pokrytí 2003–2023 a měsíční bilanci
              obou příkrovů i jednotlivých oblastí odtoku. Verze 5 vychází ze zpracování gravitačních měření
              CSR RL06.02, tedy vydání Centra pro výzkum vesmíru Texaské univerzity. Katalog byl aktualizován
              27. října 2025, uvádí licenci CC BY 4.0 a další aktualizace neočekává. Jde o jiné zpracování týchž
              misí GRACE a GRACE-FO, nikoli o další nezávislý přístroj.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="DOI_10_24381_cds_38b9366c">Copernicus CDS: data a dokumentace</SourceLink>{" "}
              <SourceLink id="WEB_Copernicus_Gravimetric_mass_balance_data_for_the_Antarctic_cc600157">Metodika verze 5</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <p className="eyebrow">Výškové změny</p>
            <h3>ITS_LIVE Greenland 1992–2023</h3>
            <p>
              Soubor spojuje šest radarových a laserových družic do měsíčních map změny výšky Grónska s rozlišením
              přibližně 1,9 km. Zvlášť rozlišuje vlastní příkrov a okrajové ledovce. Autoři zveřejnili mapy, model výšky,
              odhad hmotnosti, nejistoty i přesný postup převodu pomocí dvou modelů firnu. Název ITS_LIVE označuje
              projekt NASA spojující měření rychlosti a výšky pevninského ledu napříč misemi. DOI tohoto vydání vede
              přímo na velký soubor NetCDF o velikosti přibližně 1,85 GB, dostupný bez přihlášení.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="DOI_10_5067_icfvi7dkhzjv">NASA ITS_LIVE: data</SourceLink>{" "}
              <SourceLink id="DOI_10_5194_essd_18_1729_2026">Popis dat a výsledků</SourceLink>{" "}
              <SourceLink id="WEB_NASA_ITS_LIVE_a_NASA_MEaSURES_program_NASA_JPL_370c26c4">Portál ITS_LIVE</SourceLink>
            </p>
          </section>
        </div>

        <h2>Srovnání měřicích postupů</h2>
        <p>
          Tři postupy nezačínají stejnou veličinou. Výškoměr zaznamenává polohu povrchu, gravitační dvojice přesun
          hmoty a metoda vstup–výstup množství přidaného a odvedeného ledu. Jejich pomocná data a hlavní chyby se proto
          liší. Sdílejí však část pomocných podkladů: model firnu používá meteorologická data podobně jako výpočet
          povrchové bilance a výškové i gravitační odhady potřebují korekci pohybu podloží. Shoda těchto postupů je
          proto cennou kontrolou, ale nelze ji vydávat za tři zcela nezávislé experimenty.{" "}
          <SourceLink id="DOI_10_1007_s10712_023_09795_8">Otosaka et al., 2023, oddíl 3</SourceLink>
        </p>

        <p>
          Ve vydání IMBIE z roku 2023 jsou grónské výsledky tří skupin pro společné období 2003–2018 blízko u sebe:
          směrodatná odchylka, která vyjadřuje rozptýlení jejich průměrných odhadů, činí 19 Gt za rok.
          V Antarktidě pro roky 2002–2019 je tato odchylka 79 Gt za rok, přibližně čtyřikrát větší. Největší rozdíl vzniká ve východní
          Antarktidě, kde je změna malá ve srovnání s rozlohou oblasti a kde korekce pomalého pohybu zemského pláště
          výrazně ovlivňuje gravitační odhad. <SourceLink id="DOI_10_5194_essd_15_1597_2023">Otosaka et al., 2023</SourceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div
            className="article-figure__scroll"
            tabIndex={0}
            aria-label="Vodorovně posuvný graf srovnávající tři způsoby měření ledových příkrovů"
          >
            <Image
              className="article-figure__media"
              src="/media/ice-sheets/imbie-method-comparison-2023.png"
              alt="Srovnání změny hmotnosti Antarktidy a Grónska podle výškoměrů, gravitačních družic a metody vstup–výstup"
              width={4695}
              height={2969}
              sizes="(max-width: 900px) 980px, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Srovnání průměrné roční změny hmotnosti ve třech skupinách měření ve vydání IMBIE z roku 2023. Panel a zachycuje roky
            2002–2019 pro celou Antarktidu (AIS), západní Antarktidu (WAIS), východní Antarktidu (EAIS) a Antarktický
            poloostrov (APIS). Panel b zachycuje Grónsko (GrIS) v letech 2003–2018. Růžová označuje družicové
            výškoměry, zelená gravitační měření a modrá metodu vstup–výstup. Úsečky vyjadřují nejistotu. Šedý obdélník
            je spojený odhad IMBIE s nejistotou spočtenou z chyb vstupních odhadů. Hodnoty pod nulou znamenají úbytek. Zdroj: obr. 3 v práci{" "}
            <SourceLink id="DOI_10_5194_essd_15_1597_2023">Otosaka et al., 2023</SourceLink>.
            Licence CC BY 4.0, obrázek převzat beze změny.
          </figcaption>
        </figure>

        <p>
          Graf současně ukazuje hranici takového srovnání. Každý sloupec je průměr za celé společné období, takže
          neukazuje jednotlivé roky. Shoda grónských sloupců proto znamená podobný průměrný úbytek mezi roky 2003 a
          2018, nikoli totožné měsíční hodnoty. U východní Antarktidy se metody neshodují ani na znaménku:
          vstup–výstup ukazuje úbytek, gravitační měření přírůstek. Rozdíl těchto dvou odhadů činí 105 ± 33 Gt za
          rok. Tuto neshodu by tvrzení o společné shodě měření zakrylo.{" "}
          <SourceLink id="DOI_10_5194_essd_15_1597_2023">Otosaka et al., 2023, obr. 3 a oddíl 4</SourceLink>
        </p>

        <p>
          Ani vydání z roku 2026 tuto neshodu ve východní Antarktidě neodstranilo. Pro Grónsko vychází
          směrodatná odchylka mezi metodami 24 Gt za rok za roky 2002–2023, pro Antarktidu 70 Gt za rok za roky
          2002–2021. Antarktickou skupinu vstup–výstup zastupuje jediný odhad, který proto získává větší váhu než
          jednotlivé práce uvnitř početnějších skupin. Autoři výslovně uvádějí, že to může snižovat výsledný odhad
          přírůstku ve východní Antarktidě. <SourceLink id="DOI_10_1038_s41597_026_08088_0">Otosaka et al., 2026, porovnání metod</SourceLink>
        </p>

        <h2 id="pozorovani">Pozorování</h2>
        <h3>Společné vyhodnocení 1992–2020</h3>
        <p>
          Společné vyhodnocení výškoměrů, gravitačních družic a metody vstup–výstup ukazuje, že se součet hmotnosti
          grónského a antarktického příkrovu mezi začátkem roku 1992 a koncem roku 2020 zmenšil. Změna nebyla v každém
          roce stejně velká a nebyla rovnoměrně rozložena mezi oba kontinenty ani mezi části Antarktidy.{" "}
          <SourceLink id="DOI_10_5194_essd_15_1597_2023">Otosaka et al., 2023</SourceLink>
        </p>

        <p>
          Za celé období 1992–2020 činil spojený úbytek 7 563 ± 699 Gt. Odpovídá 21,0 ± 1,9 mm globální střední hladiny
          moře. Přepočet pouze vyjadřuje tutéž změnu hmotnosti v jiné jednotce: přibližně 360 Gt pevninského ledu
          odpovídá jednomu milimetru globální hladiny. Nejde o samostatné měření oceánu ani o tvrzení, že hladina byla
          v každém místě vyšší přesně o tuto hodnotu.{" "}
          <SourceLink id="DOI_10_5194_essd_15_1597_2023">Otosaka et al., 2023</SourceLink>
        </p>

        <p>
          Grónsko ztratilo za 29 let 4 892 ± 457 Gt, v průměru 169 ± 16 Gt za rok. Roční hodnoty výrazně kolísaly:
          IMBIE uvádí úbytek 86 ± 75 Gt v roce 2017 a 444 ± 93 Gt v roce 2019. Proto je nutné odlišit průměr celého
          období od výsledku jednotlivého roku. <SourceLink id="DOI_10_5194_essd_15_1597_2023">Otosaka et al., 2023, oddíl 4</SourceLink>
        </p>

        <p>
          Antarktida ztratila ve stejném období 2 671 ± 530 Gt, což odpovídá 7,4 ± 1,5 mm globální hladiny. Západní
          Antarktida vykazovala průměrný úbytek 82 ± 9 Gt za rok a Antarktický poloostrov 13 ± 5 Gt za rok. Pro
          východní Antarktidu vychází malý přírůstek 3 ± 15 Gt za rok. Interval nejistoty je však větší než samotný
          odhad a zahrnuje přírůstek i úbytek. Přesné pozorování proto zní, že znaménko malé změny východní Antarktidy
          není pro celé období spolehlivě rozlišeno.{" "}
          <SourceLink id="DOI_10_5194_essd_15_1597_2023">Otosaka et al., 2023, tabulka 2</SourceLink>
        </p>

        <p>
          Průměrný společný úbytek v prvních pěti letech 1992–1996 činil 105 Gt za rok. V posledních pěti letech
          souboru 2016–2020 činil 372 Gt za rok. Tato dvě čísla jsou pětileté průměry a nejsou vybrána z jediného
          mimořádného roku. Křivka kumulované změny níže ukazuje, jak se roční hodnoty postupně sčítají.{" "}
          <SourceLink id="DOI_10_5194_essd_15_1597_2023">Otosaka et al., 2023</SourceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div
            className="article-figure__scroll"
            tabIndex={0}
            aria-label="Vodorovně posuvný graf kumulované změny hmotnosti ledových příkrovů od roku 1992 do roku 2020"
          >
            <Image
              className="article-figure__media"
              src="/media/ice-sheets/imbie-cumulative-mass-2023.png"
              alt="Kumulovaná změna hmotnosti Grónska, Antarktidy a jejích tří oblastí v letech 1992 až 2020"
              width={4532}
              height={2204}
              sizes="(max-width: 900px) 980px, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Kumulovaná změna hmotnosti od ledna 1992 do prosince 2020. Modrá křivka ukazuje Grónsko, fialová celou
            Antarktidu, zelená západní Antarktidu, žlutá východní Antarktidu a červená Antarktický poloostrov. Levá osa
            je změna v gigatunách, pravá odpovídající příspěvek ke globální střední hladině moře. Barevná pole
            vyjadřují nejistotu vypočtenou skládáním chyb v čase. Plné čáry jsou vyhodnocení z roku 2023,
            čárkované starší vydání IMBIE. Graf neobsahuje revizi publikovanou v roce 2026. Zdroj:
            obr. 4 v práci <SourceLink id="DOI_10_5194_essd_15_1597_2023">Otosaka et al., 2023</SourceLink>.
            Licence CC BY 4.0, obrázek převzat beze změny.
          </figcaption>
        </figure>

        <h3>Aktualizace IMBIE do roku 2023</h3>
        <p>
          Vyhodnocení zveřejněné v září 2026 uvádí pro společné období 1979–2023 úbytek 11 309 ± 565 Gt,
          odpovídající 31,4 ± 1,6 mm globální hladiny. Obsahuje delší období i změněné výpočty. Pro stejné roky
          1992–2020 jako ve starším vydání vychází v Grónsku průměrný úbytek 180 ± 12 Gt za rok oproti dřívějším
          169 ± 16, v Antarktidě pak 140 ± 13 oproti 92 ± 18 Gt za rok. Antarktická revize tedy přesahuje uvedené
          nejistoty. Autoři ji spojují zejména s aktualizovanými výškovými odhady na Antarktickém poloostrově.
          Změnila se také váha vstupních výsledků. <SourceLink id="DOI_10_1038_s41597_026_08088_0">Otosaka et al., 2026, srovnání s předchozím vydáním</SourceLink>
        </p>
        <p>
          Úbytek neroste každý rok. Pro roky 2020–2023 nové vydání udává v Grónsku průměrnou ztrátu 199 ± 29 Gt
          za rok a v Antarktidě 59 ± 73 Gt za rok. Západní Antarktida přitom dále ztrácela 162 ± 34 Gt za rok,
          zatímco východní část získávala 92 ± 63 Gt za rok. U celé Antarktidy zahrnuje nejistota tohoto krátkého
          období i nulovou bilanci. Dlouhodobý úbytek a několik let menší ztráty se proto nevylučují.{" "}
          <SourceLink id="DOI_10_1038_s41597_026_08088_0">Otosaka et al., 2026, tabulka 4</SourceLink>
        </p>

        <h3>Kontrola gravitačním a výškovým měřením</h3>
        <p>
          Novější gravitační měření prodlužuje pozorování za konec grafu IMBIE. NASA pro období od dubna 2002 do
          března 2025 uvádí průměrný úbytek přibližně 264 Gt za rok v Grónsku a 135 Gt za rok v Antarktidě. Tato čísla
          pocházejí pouze z GRACE a GRACE-FO, začínají o deset let později a končí o více než čtyři roky později než
          graf z roku 2023. Nelze je proto použít jako prostou aktualizaci jeho posledního bodu, ale ukazují zápornou změnu
          hmotnosti obou příkrovů i v delším gravitačním záznamu. <SourceLink id="WEB_NASA_NASA_Scientific_Visualization_Studio_GRACE_and_G_1879a9f3">NASA a JPL/Caltech, 2025</SourceLink>
        </p>

        <p>
          Výškové zpracování šesti družic poskytuje další kontrolu pro Grónsko. Nilsson a Gardner v tabulce 3
          rozlišují za roky 1992–2023 příkrov s průměrným úbytkem 160 ± 17 Gt za rok a okolní ledovce s úbytkem
          23 ± 5 Gt za rok. Pro porovnání s gravitací používají stejné území včetně okolních ledovců a stejné roky
          2002–2023: výškoměry dávají úbytek 246 ± 23 Gt za rok, gravitační měření 267 ± 20 Gt za rok. Rozdíl leží
          v uvedených nejistotách. Takové srovnání je výstižnější než vedle sebe položit součty za odlišná období.{" "}
          <SourceLink id="DOI_10_5194_essd_18_1729_2026">Nilsson a Gardner, 2026, oddíl 5.2 a tabulka 3</SourceLink>
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            Grónsko i Antarktida za sledovaná desetiletí ztratily hmotnost. Aktualizované vyhodnocení pro roky
            1979–2023 udává společný úbytek přibližně 11 310 gigatun, což odpovídá asi 31 milimetrům globální
            střední hladiny moře. Ztráty jsou nerovnoměrné v čase i prostoru. V Antarktidě se soustřeďují hlavně
            na západě a na Antarktickém poloostrově. Východní část v letech 2020–2023 hmotnost získávala.
            Poslední čtyři roky tohoto vyhodnocení vykazují u obou příkrovů menší průměrný úbytek než předchozí
            desetiletí. Gravitační záznam od dubna 2002 do března 2025 jako celek ukazuje průměrnou ztrátu
            přibližně 264 gigatun ročně v Grónsku a 135 gigatun ročně v Antarktidě.
          </p>
        </div>

        <h2>Prameny a data</h2>
        <div className="article-source-groups">
          <section>
            <h3>Primární studie</h3>
            <ul>
              <li>
                <SourceLink id="DOI_10_1038_274539a0">Brooks et al., 1978</SourceLink>:
                první mapa části grónského příkrovu z družicového výškoměru GEOS-3.
              </li>
              <li>
                <SourceLink id="DOI_10_1126_science_1073888">Rignot a Thomas, 2002</SourceLink>:
                rané kontinentální bilance z přírůstků na povrchu a toku ledu.
              </li>
              <li>
                <SourceLink id="DOI_10_1126_science_1123785">Velicogna a Wahr, 2006</SourceLink>:
                raný odhad změny hmotnosti celé Antarktidy z družic GRACE.
              </li>
              <li>
                <SourceLink id="DOI_10_1126_science_1228102">Shepherd et al., 2012</SourceLink>:
                první společné vyhodnocení tří měřicích postupů v projektu IMBIE.
              </li>
              <li>
                <SourceLink id="DOI_10_1038_s41586_018_0179_y">IMBIE Team, 2018</SourceLink> a{" "}
                <SourceLink id="DOI_10_1038_s41586_019_1855_2">IMBIE Team, 2020</SourceLink>:
                samostatná vyhodnocení Antarktidy do roku 2017 a Grónska do roku 2018.
              </li>
              <li>
                <SourceLink id="DOI_10_5194_essd_15_1597_2023">Otosaka et al., 2023</SourceLink>:
                společný výsledek pro oba příkrovy v letech 1992–2020 a zdroj dvou grafů.
              </li>
              <li>
                <SourceLink id="DOI_10_1038_s41597_026_08088_0">Otosaka et al., 2026</SourceLink>:
                aktualizované vyhodnocení od 70. let do roku 2023, včetně porovnání s předchozím vydáním.
              </li>
              <li>
                <SourceLink id="DOI_10_5194_essd_18_1729_2026">Nilsson a Gardner, 2026</SourceLink>:
                spojení šesti výškoměrných misí nad Grónskem v letech 1992–2023.
              </li>
            </ul>
          </section>

          <section>
            <h3>Metodické práce</h3>
            <ul>
              <li>
                <SourceLink id="DOI_10_1007_s10712_023_09795_8">Otosaka et al., 2023</SourceLink>:
                přehled výškoměrné, gravitační a vstupně-výstupní metody včetně korekcí a nejistot.
              </li>
              <li>
                <SourceLink id="DOI_10_1038_s41558_019_0456_2">Tapley et al., 2019</SourceLink>:
                princip, zpracování a vědecké využití misí GRACE.
              </li>
              <li>
                <SourceLink id="DOI_10_1073_pnas_1812883116">Rignot et al., 2019</SourceLink> a{" "}
                <SourceLink id="DOI_10_1073_pnas_1904242116">Mouginot et al., 2019</SourceLink>:
                současné provedení metody vstup–výstup pro Antarktidu a Grónsko.
              </li>
              <li>
                <SourceLink id="WEB_NASA_How_GRACE_FO_Measures_Gravity_GRACE_FO_3fe022bf">NASA/JPL: How GRACE-FO Measures Gravity</SourceLink>:
                srozumitelný popis přímého měření vzdálenosti mezi družicemi.
              </li>
            </ul>
          </section>

          <section>
            <h3>Datové portály a stahování</h3>
            <ul>
              <li>
                <SourceLink id="DOI_10_5285_77b64c55_7166_4a06_9def_2e400398e452">IMBIE 1992–2020</SourceLink>:
                záznam staršího datového vydání s ročními a kumulovanými změnami v Gt a mm včetně nejistot.
              </li>
              <li>
                <SourceLink id="DOI_10_5285_128c5e33_5224_4197_82f0_19dcc95b80a0">IMBIE do roku 2023</SourceLink>:
                záznam nového vydání. Dočasné omezení přístupu k oběma souborům popisuje oddíl Zveřejňovaná data.
              </li>
              <li>
                <SourceLink id="WEB_imbie_org_imbie_org_e2c3f887">IMBIE Data Downloads</SourceLink> a{" "}
                <SourceLink id="WEB_GitHub_IMBIE_b7c56ec3">IMBIE GitHub</SourceLink>:
                přehled vydání, dat a veřejného kódu pro jejich spojení.
              </li>
              <li>
                <SourceLink id="WEB_NASA_Ice_Sheets_Earth_Indicator_NASA_Science_77404de9">NASA Ice Sheets Indicator</SourceLink> a{" "}
                <SourceLink id="DOI_10_5067_temsc_3jc634">JPL RL06.3Mv04</SourceLink>:
                současný gravitační záznam a měsíční vědecké soubory. Stažení dat vyžaduje bezplatný účet Earthdata.
              </li>
              <li>
                <SourceLink id="DOI_10_24381_cds_38b9366c">Copernicus, gravitační bilance v5</SourceLink>:
                gravitační bilance Grónska a Antarktidy, dokumentace kvality a licence CC BY 4.0.
              </li>
              <li>
                <SourceLink id="DOI_10_5067_icfvi7dkhzjv">ITS_LIVE Greenland 1992–2023</SourceLink>:
                měsíční výškové mapy, výškový model a odvozené změny hmotnosti.
              </li>
            </ul>
          </section>

          <section>
            <h3>Obrazy, grafy a podmínky použití</h3>
            <ul>
              <li>
                Mapa změny hmotnosti a schéma gravitačního měření pocházejí z portálů{" "}
                <SourceLink id="WEB_NASA_NASA_Scientific_Visualization_Studio_GRACE_and_G_1879a9f3">NASA Scientific Visualization Studio</SourceLink> a{" "}
                <SourceLink id="WEB_NASA_How_GRACE_FO_Measures_Gravity_GRACE_FO_3fe022bf">NASA/JPL GRACE-FO</SourceLink>.
                Kredit je uveden u každého obrazu.
              </li>
              <li>
                Podmínky dalšího použití materiálů NASA shrnuje{" "}
                <SourceLink id="WEB_NASA_Guidelines_for_using_NASA_Images_and_Media_Guide_e6f9e9e4">NASA Images and Media</SourceLink>.
                Použití zde nevyjadřuje podporu webu ze strany NASA nebo JPL.
              </li>
              <li>
                Srovnávací a kumulovaný graf jsou obr. 3 a 4 v práci{" "}
                <SourceLink id="DOI_10_5194_essd_15_1597_2023">Otosaka et al., 2023</SourceLink>.
                Článek i obrazy jsou vydány pod licencí CC BY 4.0 a byly převzaty beze změny.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
