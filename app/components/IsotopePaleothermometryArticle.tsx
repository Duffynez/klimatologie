import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function IsotopePaleothermometryArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak izotopová paleotermometrie funguje</h2>
        <p className="article-prose__intro">
          Izotopová paleotermometrie je určování minulých teplot podle zastoupení
          různých izotopů v přírodních materiálech. Izotopy jsou atomy téhož prvku,
          které se liší hmotností. Při vzniku minerálu nebo srážek se mohou rozdělovat
          v závislosti na teplotě. Uchovaný materiál tak nese informaci o podmínkách
          svého vzniku. Podrobně projdeme měření kyslíku ve vápenatých schránkách
          mořských dírkonošců a jeho převod na teplotu vody.{" "}
          <SourceLink id="DOI_10_1039_JR9470000562">(Urey 1947, princip izotopového teploměru)</SourceLink>
        </p>

        <h3>Proč se teplota projeví ve složení schránky</h3>
        <p>
          Dírkonošci jsou jednobuněčné organismy. Mnohé druhy si vytvářejí schránku
          z uhličitanu vápenatého, obvykle v podobě minerálu kalcitu.
          Některé žijí ve vodním sloupci, jiné na mořském dně nebo těsně pod jeho
          povrchem. Vznikající schránka přijímá kyslík z okolního prostředí.
          Její složení proto můžeme vztáhnout k vodě, ve které organismus rostl.{" "}
          <SourceLink id="DOI_10_5194_essd_12_1053_2020">(Jonkers a kol. 2020, záznamy mořských dírkonošců)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/isotope-temperature/foraminifera.jpg" width={1409} height={638}
            alt="Různě tvarované světlé schránky planktonních dírkonošců na tmavém podkladu pod mikroskopem."
            className="article-figure__media" unoptimized />
          <figcaption>
            Schránky planktonních dírkonošců pod mikroskopem. Podle USGS mají
            velikost zrnka písku. Snímek ukazuje rozmanitost schránek, konkrétní
            druhy ani měřítko zdroj neurčuje. USGS, Florence Bascom Geoscience
            Center, zveřejněno 22. listopadu 2024, Public Domain.{" "}
            <SourceLink id="WEB_USGS_Forams_2024">Původ fotografie</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Kyslík se v přírodě vyskytuje především jako lehký izotop ¹⁶O,
          vedle něj také jako těžší ¹⁸O. Oba mají v jádře osm protonů,
          ale ¹⁸O obsahuje o dva neutrony více. Chemicky se chovají velmi
          podobně. Rozdílná hmotnost však mění kmitání atomů v chemických vazbách,
          a tím i to, jak výhodné je pro daný izotop být součástí vody nebo
          minerálu. Oba izotopy jsou stabilní. Měříme jejich vzájemné
          zastoupení ve vzorku.{" "}
          <SourceLink id="WEB_USGS_Stable_Isotopes_1999">(USGS: vlastnosti stabilních izotopů)</SourceLink>{" "}
          <SourceLink id="DOI_10_1039_JR9470000562">(Urey 1947, vliv hmotnosti na izotopovou výměnu)</SourceLink>
        </p>
        <p>
          Rozdělení izotopů mezi dvě látky nazýváme <strong>izotopová frakcionace</strong>.
          Kalcit je vůči vodě, ze které vzniká, obohacen o těžký kyslík.
          Při nižší teplotě je toto obohacení větší, při vyšší menší.
          Pokud známe složení vody, můžeme z naměřeného rozdílu určit teplotu
          vzniku kalcitu. Závislost byla ověřena jak při laboratorním srážení
          kalcitu, tak na schránkách organismů rostoucích při známých teplotách.{" "}
          <SourceLink id="DOI_10_1016_j_gca_2013_12_034">(Marchitto a kol. 2014, porovnání kalcitu a dírkonošců)</SourceLink>
        </p>

        <h3>Jak získáme vhodný vzorek</h3>
        <p>
          Po odumření dírkonošce může jeho schránka zůstat v usazeninách na dně.
          Pro rekonstrukci vybíráme místo s dochovaným sledem vrstev a dobře
          zachovanými schránkami. Odebereme sedimentární jádro a rozdělíme je
          na vzorky z jednotlivých hloubek. Usazeninu promyjeme přes síto
          a pod mikroskopem vybereme schránky jednoho určeného druhu a vhodné
          velikosti. Každý vzorek tak představuje vymezenou část záznamu.
          Odběr vrstev a sestavení jejich časové osy vysvětluje článek o{" "}
          <Link href="/metody/sedimentarni-jadra-a-stratigrafie">sedimentárních jádrech</Link>.{" "}
          <SourceLink id="DOI_10_5194_essd_12_1053_2020">(Jonkers a kol. 2020, původ vzorků a časové osy)</SourceLink>{" "}
          <SourceLink id="DOI_10_1016_j_gca_2013_12_034">(Marchitto a kol. 2014, výběr schránek)</SourceLink>
        </p>
        <p>
          Stáří vrstvy určujeme samostatně, například radiokarbonovým datováním
          mladších mořských usazenin. Z datovaných úrovní sestavíme vztah mezi
          hloubkou a časem, tedy model stáří. Ten přiřadí stáří i vzorkům mezi
          opěrnými body. Izotopový rozbor pak poskytne údaj o prostředí pro
          tuto část časového záznamu. V databázi PalMod jsou proto vedle
          chemických měření uloženy i podklady časových os.{" "}
          <SourceLink id="DOI_10_5194_essd_12_1053_2020">(Jonkers a kol. 2020, databáze PalMod za posledních 130 000 let)</SourceLink>
        </p>

        <h3>Co měří laboratoř</h3>
        <p>
          Očištěný uhličitan necháme v uzavřené nádobě reagovat s kyselinou
          fosforečnou. Při reakci se uvolní oxid uhličitý, který nese izotopovou
          informaci ze schránky. Odstraníme doprovodnou vodní páru a plyn
          přivedeme do hmotnostního spektrometru. Přístroj oddělí různě těžké
          ionty plynu a porovná velikost jejich signálů. Z toho se určí poměr
          těžkého a lehkého kyslíku. Celý přístrojový postup rozvíjí{" "}
          <Link href="/metody/hmotnostni-a-izotopova-spektrometrie">hmotnostní a izotopová spektrometrie</Link>.{" "}
          <SourceLink id="DOI_10_3133_ofr01257">(Révészová a kol. 2001, příprava uhličitanu a měření)</SourceLink>
        </p>
        <p>
          Spolu se vzorky zpracujeme referenční uhličitany se známým složením.
          Procházejí stejnou reakcí i měřením. Tím spojíme odezvu přístroje
          s mezinárodní stupnicí a zahrneme také izotopový posun vznikající
          při přípravě plynu. Výsledkem je složení původního uhličitanu.
          Tato laboratorní kalibrace je prvním převodem. Vztah mezi složením
          schránky a teplotou vody stanovíme až v dalším kroku.{" "}
          <SourceLink id="DOI_10_3133_ofr01257">(USGS, referenční materiály a postup analýzy)</SourceLink>{" "}
          <SourceLink id="2025_FIRMS_IRMS_Guide">(FIRMS 2025, návaznost měření na referenční stupnice)</SourceLink>
        </p>
        <p>
          Laboratoře obvykle uvádějí složení pomocí značky δ¹⁸O,
          čtené „delta osmnáct O“. Vyjadřuje relativní rozdíl mezi poměrem
          ¹⁸O/¹⁶O ve vzorku a v referenci:
        </p>
        <Equation tex={String.raw`\delta^{18}\mathrm{O}=\left(\frac{R}{R_{\mathrm{ref}}}-1\right)\cdot1000\,\text{promile}`} />
        <p>
          <InlineMath tex="R" /> je poměr počtu atomů ¹⁸O k počtu atomů ¹⁶O
          ve vzorku a <InlineMath tex={String.raw`R_{\mathrm{ref}}`} /> je stejný poměr
          v referenci. Oba poměry jsou bezrozměrné. Promile, značka ‰, znamená
          tisícinu. Zde vztahujeme rozdíl k referenčnímu poměru. Kladná
          delta říká, že vzorek má vůči referenci vyšší poměr těžkého
          kyslíku k lehkému, záporná nižší.{" "}
          <SourceLink id="2025_FIRMS_IRMS_Guide">(FIRMS 2025, oddíl 3.3)</SourceLink>
        </p>
        <p>
          Pro uhličitany se používá zejména stupnice VPDB, jejíž název
          Vienna Pee Dee Belemnite odkazuje na historický uhličitanový standard.
          Voda se běžně vztahuje ke stupnici VSMOW, Vienna Standard Mean Ocean
          Water, založené na referenční vodě. Při spojování údajů o schránce
          a vodě proto musí být určeno, ze které stupnice každý údaj pochází.{" "}
          <SourceLink id="2025_FIRMS_IRMS_Guide">(FIRMS 2025, referenční materiály VPDB a VSMOW)</SourceLink>
        </p>

        <h3>Jak složení převedeme na teplotu</h3>
        <p>
          Teplotní kalibraci získáme z organismů, které rostou při známé
          teplotě a ve vodě se změřeným izotopovým složením. Takto Bemis
          a kolegové pěstovali dírkonošce <em>Orbulina universa</em> při
          15–25 °C. Pro každý vzorek znali teplotu lázně i izotopový rozdíl
          mezi schránkou a vodou. Body proložili přímkou, která tento rozdíl
          převádí na stupně Celsia.{" "}
          <SourceLink id="DOI_10_1029_98PA00070">(Bemis a kol. 1998, laboratorní kalibrace)</SourceLink>
        </p>
        <p>
          Pro skupinu pěstovanou při slabém osvětlení použijeme jejich vztah
          níže. Osvětlení určuje aktivitu řas žijících uvnitř tohoto druhu,
          a tím také podmínky tvorby schránky. Pro slabě a silně osvětlené
          jedince autoři stanovili samostatné převody. Vybraná skupina rostla
          při původním obsahu uhličitanových iontů v mořské vodě. Tyto
          rozpuštěné částice se účastní tvorby uhličitanu. Nejprve připravíme
          izotopový rozdíl v konvenci jejich kalibrace:
        </p>
        <Equation tex={String.raw`D=\delta_{\mathrm{c}}-\left(\delta_{\mathrm{w}}-0{,}27\,\text{promile}\right)`} />
        <Equation tex={String.raw`T=16{,}5\,^{\circ}\mathrm{C}-4{,}80\,\frac{^{\circ}\mathrm{C}}{\text{promile}}\,D`} />
        <p>
          <InlineMath tex={String.raw`\delta_{\mathrm{c}}`} /> označuje δ¹⁸O
          kalcitu v promile VPDB a <InlineMath tex={String.raw`\delta_{\mathrm{w}}`} />
          δ¹⁸O vody v promile VSMOW. Číslo 0,27 ‰ patří k laboratorní konvenci
          původní rovnice. <InlineMath tex="D" /> je upravený rozdíl v promile
          a <InlineMath tex="T" /> výsledná teplota ve stupních Celsia.
          Hodnoty 16,5 a 4,80 byly určeny z pokusu. Záporné znaménko vyjadřuje,
          že větší obohacení schránky o těžký kyslík odpovídá nižší teplotě.
          Tuto rovnici používáme pro uvedený druh a podmínky pokusu.{" "}
          <SourceLink id="DOI_10_1029_98PA00070">(Bemis a kol. 1998, rovnice 1 a sjednocení konvence)</SourceLink>
        </p>
        <p>
          U dávné schránky doplníme ještě odhad izotopového složení tehdejší
          vody. Při růstu pevninských ledovců se v ledu ukládá voda chudší
          na ¹⁸O a zbývající oceán se o něj obohacuje. Záznam objemu ledu
          nebo výšky moře proto pomáhá určit změnu průměrného složení oceánu.
          V jednotlivých oblastech je dále mění výpar, srážky a přítok sladké
          vody. Místní hodnotu lze odhadovat z dalších měření a z modelů
          oběhu vody. Tyto podklady poskytují druhý vstup do teplotního
          výpočtu vedle samotné schránky.{" "}
          <SourceLink id="DOI_10_5194_cp_19_1265_2023">(Gaskell a Hullová 2023, odhady složení mořské vody)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/isotope-temperature/principle.svg" width={700} height={940}
            alt="Postup od schránek ze známé vrstvy přes laboratorní měření k teplotě. Do výpočtu zvlášť vstupuje složení vody a teplotní kalibrace, datování připojí čas."
            className="article-figure__media" unoptimized />
          <figcaption>
            Do teplotního výpočtu vstupuje změřené složení schránky,
            složení vody a kalibrační vztah. Šipky ukazují, kde se tyto
            informace spojují. Samostatně určené stáří umožní teplotu
            zařadit do minulosti. Vlastní schéma podle laboratorního postupu USGS
            a metodiky převodu izotopů na teplotu.{" "}
            <SourceLink id="DOI_10_3133_ofr01257">USGS 2001</SourceLink>,{" "}
            <SourceLink id="DOI_10_5194_cp_19_1265_2023">Gaskell a Hullová 2023</SourceLink>.
          </figcaption>
        </figure>

        <h3>Jaký záznam teplot získáme</h3>
        <p>
          Vypočtená hodnota popisuje teplotu vody při tvorbě schránky.
          U planktonních druhů ji vztahujeme k části vodního sloupce,
          ve které rostly. Dírkonošci žijící u dna poskytují informace
          o hlubších vodách. Opakováním analýzy v navazujících vrstvách
          získáme průběh teplot v čase. Propojení různých vrtů pak umožní
          porovnávat vývoj jednotlivých částí oceánu.{" "}
          <SourceLink id="DOI_10_5194_essd_12_1053_2020">(Jonkers a kol. 2020, mořské záznamy a jejich metadata)</SourceLink>
        </p>
        <p>
          Rozsah použití ukazuje studie Gaskella a kolegů z roku 2022.
          Z rozsáhlého souboru měření vybrali 4 238 hodnot dobře zachovaných
          planktonních schránek z tropů a vysokých jižních šířek. Se znalostí
          jejich někdejší polohy, stáří a s modelovými odhady složení mořské
          vody rekonstruovali rozdíly teplot mezi oblastmi za posledních
          95 milionů let. Metoda tak dovoluje zkoumat i teplá období
          dávno před vznikem lidských přístrojových měření.{" "}
          <SourceLink id="DOI_10_1073_pnas_2111332119">(Gaskell a kol. 2022, výběr dat a klimatologická aplikace)</SourceLink>
        </p>

        <h3>Vývoj metody a další izotopové teploměry</h3>
        <p>
          Harold Urey v roce 1947 odvodil teplotní závislost rozdělení izotopů
          a navrhl její použití k určování teplot vzniku uhličitanů.
          McKinney a kolegové v roce 1950 popsali hmotnostní spektrometr,
          který umožnil přesně porovnávat malé rozdíly izotopových poměrů.
          Pozdější kultivační pokusy, včetně práce Bemise a kolegů,
          oddělily vliv teploty od podmínek růstu konkrétních organismů.{" "}
          <SourceLink id="DOI_10_1039_JR9470000562">(Urey 1947)</SourceLink>{" "}
          <SourceLink id="DOI_10_1063_1_1745698">(McKinney a kol. 1950)</SourceLink>{" "}
          <SourceLink id="DOI_10_1029_98PA00070">(Bemis a kol. 1998)</SourceLink>
        </p>
        <p>
          Pro jiné druhy se používají jiné kalibrace. Marchitto a kolegové
          spojili měření dírkonošců žijících u dna z tropických i polárních
          vod. Pro rody <em>Cibicidoides</em> a <em>Planulina</em> stanovili
          vztah podložený teplotami od −0,6 do 25,6 °C. V tomto širším
          rozsahu jej popsali mírně zakřivenou křivkou. Rozdíl oproti
          jednoduché přímce se projevuje zejména při porovnání velmi
          studených a teplých vod.{" "}
          <SourceLink id="DOI_10_1016_j_gca_2013_12_034">(Marchitto a kol. 2014, rovnice 9)</SourceLink>
        </p>
        <p>
          Jiný princip využívají izotopy kyslíku a vodíku v ledovcovém ledu.
          Při ochlazování vlhkého vzduchu přecházejí těžší molekuly vody
          přednostně do srážek. Zbývající pára se o ně ochuzuje a její další
          srážky mívají nižší izotopové poměry. Sníh uložený v ledu tento
          průběh zachovává. Vztah k místní teplotě stanovujeme z pozorování
          srážek a doplňujeme znalostí jejich původu a sezónnosti.
          Odběr a datování rozebírá článek o{" "}
          <Link href="/metody/ledova-jadra-a-analyza-uzavreneho-vzduchu">ledových jádrech</Link>.{" "}
          <SourceLink id="DOI_10_3402_tellusa_v16i4_8993">(Dansgaard 1964, izotopy srážek a vztah k teplotě)</SourceLink>
        </p>
        <p>
          U uhličitanů lze také měřit, jak často se těžký uhlík ¹³C a těžký
          kyslík ¹⁸O nacházejí společně v jedné skupině atomů. Při nižší
          teplotě je toto sdružování výraznější. Metoda sdružených izotopů,
          anglicky <em>clumped isotopes</em>, porovnává jeho četnost s náhodným
          rozdělením izotopů. Kalibrace na vzorcích vzniklých při známé
          teplotě pak určí teplotu z uhličitanu samotného, bez předchozí
          znalosti složení vody.{" "}
          <SourceLink id="DOI_10_1016_j_gca_2007_03_015">(Ghosh a kol. 2007, ověření na uhličitanu z rybího vnitřního ucha)</SourceLink>
        </p>

        <h2>Nejistoty a omezení</h2>
        <p>
          Výsledek nejvíce ovlivňuje zachování schránky, odhad složení vody
          a volba vztahu pro příslušný organismus. U planktonních druhů
          záleží také na hloubce a období růstu. Bemis a kolegové porovnali
          laboratorní kalibraci <em>O. universa</em> s jedinci z Indického
          oceánu. Po úpravách pro chemické podmínky vody získali velmi
          podobnou teplotní závislost. Tato kontrola podporuje přenos
          laboratorního vztahu do přírody.{" "}
          <SourceLink id="DOI_10_1029_98PA00070">(Bemis a kol. 1998, oddíl 3.4)</SourceLink>{" "}
          <SourceLink id="DOI_10_5194_cp_19_1265_2023">(Gaskell a Hullová 2023, meze převodu)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Co určuje spolehlivost výsledku</summary>
          <p>
            <strong>Zachování záznamu.</strong> Původní uhličitan se může rozpouštět
            a znovu vysrážet. Nově vzniklý minerál přijímá izotopové složení
            pozdějšího prostředí. Proto se kontroluje vzhled a struktura schránek
            a pro teplotní rekonstrukci se vybírají dobře zachované vzorky.
            Takový výběr byl zásadní i ve studii za 95 milionů let.{" "}
            <SourceLink id="DOI_10_1073_pnas_2111332119">(Gaskell a kol. 2022, výběr podle zachování)</SourceLink>
          </p>
          <p>
            <strong>Voda a prostředí růstu.</strong> Chyba odhadu δ¹⁸O vody
            o 0,1 ‰ posune teplotu v použité rovnici o 0,48 °C.
            Jde o vypočtenou citlivost, nikoli o celkovou nejistotu metody.
            Osvětlení, chemické složení vody i velikost schránek mohou ovlivnit
            převod. Období a hloubka růstu určují, kterou teplotu vody
            organismus zaznamenal. Stáří vzorku má vlastní nejistotu danou
            datováním a modelem stáří.{" "}
            <SourceLink id="DOI_10_1029_98PA00070">(Bemis a kol. 1998)</SourceLink>{" "}
            <SourceLink id="DOI_10_5194_essd_12_1053_2020">(Jonkers a kol. 2020)</SourceLink>
          </p>
          <p>
            <strong>Co bylo ověřeno.</strong> Laboratorní vztah pro slabě
            osvětlenou <em>O. universa</em> má směrnici −4,80 °C na 1 ‰,
            přepočtený vztah z nezávisle odebraných oceánských jedinců
            −4,81 °C na 1 ‰. Oba vztahy dávají při nulovém rozdílu
            schránky a vody stejnou teplotu 16,5 °C. Terénní údaje
            pocházejí z jiného souboru než kultivační kalibrace. Porovnání
            však sdílí izotopové reference a obsahuje úpravu pro rozdílnou
            koncentraci uhličitanových iontů. Není nezávislou kontrolou všech
            laboratorních a interpretačních předpokladů.{" "}
            <SourceLink id="DOI_10_1029_98PA00070">(Bemis a kol. 1998, rovnice 1 a 8)</SourceLink>
          </p>
          <p>
            <strong>Čtení čísel.</strong> Stálost laboratorní odezvy sledujeme
            opakovaným měřením referenčních materiálů v průběhu série.{" "}
            <SourceLink id="2025_FIRMS_IRMS_Guide">(FIRMS 2025, kontrola kvality měření)</SourceLink>{" "}
            Publikovaná směrodatná chyba
            laboratorního vztahu je přibližně 0,7 °C. Popisuje rozptyl
            použitých kalibračních vzorků kolem přímky. Nelze ji bez dalšího
            přenést na dávnou schránku s neznámým složením vody.
            Úprava o 0,27 ‰ patří ke konvenci této rovnice, není obecným
            převodem všech hodnot mezi stupnicemi VPDB a VSMOW.
            U dat, která již obsahují upravený rozdíl schránky a vody,
            se znovu nepřičítá.{" "}
            <SourceLink id="DOI_10_1029_98PA00070">(Bemis a kol. 1998, oddíly 2.3 a 3.1)</SourceLink>{" "}
            <SourceLink id="DOI_10_1016_j_gca_2013_12_034">(Marchitto a kol. 2014, oddíl 2.4)</SourceLink>
          </p>
        </details>

        <h2>Výpočet z laboratorně pěstovaných schránek</h2>
        <p>
          Použijeme skutečná měření z pokusů Bemise a kolegů z let
          1994–1996. Dírkonošce odebrali u kalifornského ostrova Santa Catalina
          a dále pěstovali v laboratoři. Veřejný soubor NOAA obsahuje
          teploty a již vypočtené izotopové rozdíly schránek a vody.
          Začínáme tedy u laboratorních výsledků, nikoli u elektrických
          signálů spektrometru.{" "}
          <SourceLink id="DOI_10_25921_0n13_nf40">(Bemis a kol., data NOAA 98-003)</SourceLink>
        </p>
        <p>
          Vybereme všech 39 měření <em>O. universa</em> ze skupiny se slabým
          osvětlením a původní koncentrací uhličitanových iontů 171 µmol/kg.
          Značka µmol znamená miliontinu molu, jednotky látkového množství.
          Koncentrace tak udává množství těchto iontů v kilogramu vody.
          Výběr odpovídá podmínkám vysvětlené rovnice. Zahrnuje sedm teplot
          lázně od 15 do 25 °C. Pět měření při 19 °C má tyto hodnoty:
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap">
          <table>
            <caption>Izotopový rozdíl schránky a vody při teplotě lázně 19 °C</caption>
            <thead><tr><th>Měření v této skupině</th><th>Rozdíl D v ‰</th><th>Vypočtená teplota</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>−0,49</td><td>18,85 °C</td></tr>
              <tr><td>2</td><td>−0,54</td><td>19,09 °C</td></tr>
              <tr><td>3</td><td>−0,55</td><td>19,14 °C</td></tr>
              <tr><td>4</td><td>−0,57</td><td>19,24 °C</td></tr>
              <tr><td>5</td><td>−0,56</td><td>19,19 °C</td></tr>
            </tbody>
          </table>
          </div>
        </div>
        <p>
          V souboru je voda již převedena do konvence kalibrace.
          Přímo proto dosadíme uvedené <InlineMath tex="D" />.
          Průměr pěti rozdílů je −0,542 ‰. Z něj vychází:
        </p>
        <Equation tex={String.raw`T=16{,}5-4{,}80\cdot(-0{,}542)=19{,}1016\,^{\circ}\mathrm{C}`} />
        <p>
          Zaokrouhlený výsledek je <strong>19,1 °C</strong>, proti nastavené
          teplotě lázně 19,0 °C. Autoři udržovali teplotu s kolísáním přibližně
          ±0,2 °C. Ukázka reprodukuje převod původních měření na teplotu.
          Vzorky byly součástí kalibrace, takže jejich shoda s přímkou
          nepředstavuje nový nezávislý test.{" "}
          <SourceLink id="DOI_10_25921_0n13_nf40">(NOAA, data a doprovodný popis pokusu)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/isotope-temperature/calibration-check.svg" width={760} height={640}
            alt="Srovnání teploty lázně 15 až 25 stupňů Celsia s teplotou vypočtenou z 39 schránek. Jednotlivé výsledky leží v okolí čáry shody, čtverce označují skupinové průměry."
            className="article-figure__media" unoptimized />
          <figcaption>
            Vodorovná osa ukazuje teplotu lázně, svislá teplotu vypočtenou
            z izotopů. Každý kroužek je jedno měření, čtverec průměr pro danou
            lázeň. Šikmá čára označuje přesnou shodu. Zobrazeno je všech
            39 vybraných měření bez vyřazování. Body patří do souboru,
            ze kterého vznikla kalibrace. Vlastní výpočet a graf z{" "}
            <SourceLink id="DOI_10_25921_0n13_nf40">veřejných dat NOAA</SourceLink>.
          </figcaption>
        </figure>
        <details className="article-details">
          <summary>Data a postup pro zopakování</summary>
          <p>
            Zachováváme původní tabulku a popis souboru NOAA 98-003,
            stažené 28. října 2026. Archiv uvádí původní příjem v únoru 1998,
            současný katalog datum zveřejnění 14. listopadu 2003.
            Skript vybírá řádky s hodnotami <code>Species = O. universa</code>,{" "}
            <code>Irradiance = LL</code> a <code>[CO32-] = 171</code>.
            Z původních 135 řádků zůstane 39. Pro každý dosadí sloupec{" "}
            <code>dc-dw (VPDB)</code> do rovnice 1 Bemise a kolegů.
            Úpravu 0,27 ‰ již neopakuje. Průměry počítá až po tomto výběru,
            žádná měření nevyřazuje ani nevyhlazuje.
          </p>
          <ul>
            <li><a href="/data/methods/isotope-temperature/bemis1998-original.txt">Původní tabulka měření NOAA</a></li>
            <li><a href="/data/methods/isotope-temperature/bemis1998-readme.txt">Původní popis pokusu a sloupců</a></li>
            <li><a href="/data/methods/isotope-temperature/selected-results.csv">Vybraných 39 měření a výsledné teploty</a></li>
            <li><a href="/data/methods/isotope-temperature/group-means.csv">Průměry pro sedm teplot lázně</a></li>
            <li><a href="/data/methods/isotope-temperature/reproduce.py">Skript pro výpočet a graf</a></li>
            <li><a href="/data/methods/isotope-temperature/README.txt">Návod a význam výsledků</a></li>
            <li><a href="/data/methods/isotope-temperature/provenance.json">Původ a kontrolní otisky vstupů</a></li>
          </ul>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Teplota ovlivňuje rozdělení izotopů mezi vodu a vznikající
            uhličitan. Změříme-li složení zachované schránky a doplníme
            složení vody, kalibrační vztah je převede na teplotu jejího
            vzniku. Datování pak umožní sestavit časový průběh těchto teplot.
          </p>
          <p>
            Izotopová paleotermometrie umožňuje rekonstruovat teplotu
            povrchových i hlubokých vod oceánu a pomocí ledu také změny
            teplot v polárních oblastech. Mořské schránky se využívají
            i ke zkoumání klimatu před 95 000 000 lety. Metoda sdružených
            izotopů navíc určuje teplotu vzniku uhličitanu bez předchozí
            znalosti izotopového složení vody.{" "}
            <SourceLink id="DOI_10_1073_pnas_2111332119">(Gaskell a kol. 2022)</SourceLink>{" "}
            <SourceLink id="DOI_10_3402_tellusa_v16i4_8993">(Dansgaard 1964)</SourceLink>{" "}
            <SourceLink id="DOI_10_1016_j_gca_2007_03_015">(Ghosh a kol. 2007)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
