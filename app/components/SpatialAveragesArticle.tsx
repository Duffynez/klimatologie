import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function SpatialAveragesArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak z měření sestavíme mapu a průměr území</h2>
        <p className="article-prose__intro">
          Prostorové zpracování přiřazuje měřeným údajům místo a skládá je do mapy
          sledované veličiny. Plošné průměrování pak spojuje hodnoty z této mapy
          podle velikosti území, které zastupují. Z místních měření tak získáváme
          údaj pro region, polokouli nebo celou Zemi. Postup vysvětlíme na měsíčních
          změnách teploty vzduchu v souboru CRUTEM5, který připravují britská
          Climatic Research Unit a Met Office Hadley Centre.{" "}
          <SourceLink id="DOI_10_1029_2019jd032352">(Osborn a kol. 2021)</SourceLink>
        </p>

        <h3>Proč záleží na rozmístění stanic</h3>
        <p>
          Meteorologické stanice jsou rozmístěné nerovnoměrně. Kdyby každá dostala
          při výpočtu stejnou váhu, hustě měřené oblasti by výsledné číslo
          ovlivňovaly víc než stejně velké oblasti s několika stanicemi.
          Při určování průměrné změny teploty území však potřebujeme, aby vliv
          jednotlivých částí odpovídal jejich ploše. Proto nejprve sestavíme
          hodnoty pro vymezené části mapy a teprve z nich počítáme územní průměr.{" "}
          <SourceLink id="DOI_10_1029_2019jd032352">(princip mřížky CRUTEM5, oddíl 4)</SourceLink>
        </p>
        <p>
          Začínáme měsíčními průměry teploty na stanicích. Ke každému údaji patří
          poloha stanice a měsíc, za který byl vypočten. Prostorový výstup CRUTEM5
          začíná v roce 1850, přičemž dostupné stanice se v čase mění.
          Část záznamů přebírá už s úpravami změn stanoviště či měření od národních
          služeb a výzkumných týmů. Přípravu takových vstupů rozebírá článek o{" "}
          <Link href="/metody/kontrola-kvality-a-homogenizace">kontrole kvality a homogenizaci</Link>.{" "}
          <SourceLink id="DOI_10_1029_2019jd032352">(původ a příprava staničních údajů)</SourceLink>
        </p>

        <h3>Každé místo porovnáváme s jeho obvyklou teplotou</h3>
        <p>
          Jednotlivá místa mají různou obvyklou teplotu. Pro sledování její změny
          proto nejprve porovnáme každou stanici s jejím vlastním dlouhodobým
          průměrem. V CRUTEM5 se tento průměr vztahuje k období 1961–1990 a počítá
          se zvlášť pro každý kalendářní měsíc. Lednovou teplotu porovnáváme
          s lednovým průměrem, červencovou s červencovým. Získaný rozdíl se nazývá
          <strong> teplotní anomálie</strong>. Říká, o kolik byl daný měsíc
          v místě teplejší nebo chladnější než jeho zvolené referenční období.{" "}
          <SourceLink id="DOI_10_1029_2019jd032352">(výpočet anomálií)</SourceLink>
        </p>
        <Equation tex={String.raw`d = T - N`} />
        <p>
          Symbol <InlineMath tex="T" /> označuje měsíční teplotu stanice,{" "}
          <InlineMath tex="N" /> její průměr pro tentýž kalendářní měsíc v referenčním
          období a <InlineMath tex="d" /> výslednou anomálii. Teploty i jejich rozdíl
          zde vyjadřujeme ve stupních Celsia. Odečtením místního průměru odstraníme
          stálý rozdíl mezi obvykle teplejšími a chladnějšími místy. Společně pak
          můžeme zpracovávat jejich odchylky od místních podmínek.{" "}
          <SourceLink id="DOI_10_1029_2019jd032352">(metoda teplotních anomálií)</SourceLink>
        </p>

        <h3>Stanice spojíme do buněk mapy</h3>
        <p>
          CRUTEM5 rozděluje povrch pravidelnou sítí rovnoběžek a poledníků.
          Každá buňka zabírá 5° zeměpisné šířky a 5° zeměpisné délky.
          Pro vybraný měsíc vezmeme anomálie všech použitelných stanic uvnitř
          buňky, sečteme je a vydělíme počtem stanic. Tak vznikne jeden odhad
          anomálie pro celou buňku. Stanice přispívá do buňky, ve které leží.{" "}
          <SourceLink id="DOI_10_1029_2019jd032352">(standardní mřížka, oddíl 4.1)</SourceLink>
        </p>
        <p>
          Výsledkem je mapa měsíčních odchylek, v níž každá vyplněná buňka nese
          jednu hodnotu. Buňka bez použitelné stanice zůstává v tomto provedení
          prázdná. Prázdné místo má jiný význam než nula: nula označuje teplotu
          rovnou místnímu referenčnímu průměru. Při následném průměrování proto
          vybíráme buňky, pro které hodnota skutečně existuje.{" "}
          <SourceLink id="DOI_10_1029_2019jd032352">(pokrytí standardní mřížky)</SourceLink>
        </p>

        <figure className="article-figure">
          <Image src="/media/spatial-averages/workflow.svg" width={760} height={1160}
            alt="Postup zpracování: měsíční teploty stanic, odchylky od místních průměrů, hodnoty buněk a plošně vážený průměr." />
          <figcaption>
            Čtyři kroky základního postupu. Teploty nejprve převedeme na odchylky
            od místních průměrů. Stanice uvnitř jedné buňky pak poskytnou společný
            odhad a buňky přispějí do výsledku podle své plochy. Šipky ukazují
            návaznost operací. Vlastní schéma podle{" "}
            <SourceLink id="DOI_10_1029_2019jd032352">metodiky CRUTEM5</SourceLink>.
          </figcaption>
        </figure>

        <h3 id="plosne-vazeni">Váhu buňky určuje plocha</h3>
        <p>
          Buňky vymezené stejným počtem stupňů nemají všude stejnou plochu.
          Poledníky se směrem k pólům sbíhají, takže se buňky v tomto směru zužují.
          Aby každý kilometr čtvereční přispíval stejně, násobíme anomálii každé
          buňky její plochou. Součiny sečteme a vydělíme součtem použitých ploch.
          Tento postup se nazývá <strong>plošně vážený průměr</strong>.{" "}
          <SourceLink id="WEB_NCAR_Area_Weighted_Average">(NCAR, výpočet plošného průměru)</SourceLink>
        </p>
        <Equation tex={String.raw`\bar d = \frac{\sum_i A_i d_i}{\sum_i A_i}`} />
        <p>
          Značka <InlineMath tex={String.raw`\bar d`} /> je výsledná průměrná
          anomálie v °C. Index <InlineMath tex="i" /> rozlišuje jednotlivé buňky,{" "}
          <InlineMath tex="d_i" /> je jejich anomálie v °C a <InlineMath tex="A_i" />{" "}
          plocha v km². Znak <InlineMath tex={String.raw`\sum`} /> znamená součet
          přes vybrané buňky. Ve jmenovateli sčítáme přesně stejné plochy, jejichž
          hodnoty jsme použili v čitateli. Výsledek tak vyjadřuje průměrnou
          odchylku nad zastoupenou částí území.{" "}
          <SourceLink id="WEB_NCAR_Area_Weighted_Average">(váhy a chybějící hodnoty)</SourceLink>
        </p>
        <p>
          U pravidelné sítě 5° × 5° lze výpočet zkrátit. Na kulové Zemi je plocha
          celé buňky úměrná kosinu zeměpisné šířky jejího středu. Kosinus je zde
          geometrický faktor, který vyjadřuje zmenšování buněk směrem k pólům.
          Místo ploch v km² tedy stačí použít tyto bezrozměrné váhy, protože
          společný převodní faktor by se v podílu vykrátil. Pro nepravidelné buňky
          nebo výběr oříznutý hranicí území použijeme plochy skutečně zahrnutých
          částí.{" "}
          <SourceLink id="WEB_NCAR_Area_Weighted_Average">(plošné a kosinové váhy)</SourceLink>
        </p>

        <h3>Co výsledná mapa a průměr znamenají</h3>
        <p>
          Mapa ukazuje, kde se teplota v daném měsíci lišila od místního průměru
          z let 1961–1990. Územní průměr tuto prostorovou informaci shrnuje do
          jediného čísla. Opakováním výpočtu pro další měsíce vzniká časový záznam
          změny teploty oblasti. U CRUTEM5 jde o teplotu vzduchu nad pevninou.
          Výpočet společného ukazatele pro pevninu a oceán potřebuje také měření
          vody u hladiny, jak vysvětluje článek o{" "}
          <Link href="/pozorovani/gmst/#plosne-vazeni">globální teplotě u povrchu</Link>.{" "}
          <SourceLink id="DOI_10_1029_2019jd032361">(Morice a kol. 2021, spojení pevniny a oceánu)</SourceLink>
        </p>
        <p>
          Stejný princip plošného průměru používáme také u jiných veličin.
          Z mapy měsíčních srážkových úhrnů v milimetrech dostaneme průměrnou
          výšku srážek nad územím. Z mapy tepelného toku ve wattech na metr
          čtvereční dostaneme jeho průměr za plochu. Vždy potřebujeme hodnotu
          představující danou buňku a její plochu. Způsob, jakým vytvoříme samotnou
          mapu, se přizpůsobuje vlastnostem zpracovávané veličiny.{" "}
          <SourceLink id="WEB_NCAR_Area_Weighted_Average">(obecný výpočet pro prostorová pole)</SourceLink>
        </p>

        <h3 id="interpolace">Jak odhadujeme hodnoty mezi měřenými místy</h3>
        <p>
          Dosud jsme pracovali s mapou, v níž jsou vyplněné pouze buňky obsahující
          stanice. Další možností je využít vztahy mezi místy a odhadnout teplotu
          také v mezerách. Tento postup se nazývá <strong>prostorová interpolace</strong>.
          Opírá se o to, že teplotní výkyvy zasahují širší oblasti. Změna
          zaznamenaná na jednom místě proto obsahuje informaci o změně v jeho okolí.{" "}
          <SourceLink id="DOI_10_1029_jd092id11p13345">(Hansen a Lebedeff 1987, podobnost změn mezi stanicemi)</SourceLink>
        </p>
        <p>
          Prostorová analýza HadCRUT5 popisuje tuto podobnost statistickým
          vztahem. Určuje, jak silně spolu teplotní odchylky souvisejí a jak
          tato souvislost slábne se vzdáleností. Vztah nastavuje z měsíčních
          map za období 1961–1990, zvlášť pro pevninu a oceán. Z nich určí
          typickou velikost výkyvů a vzdálenost, s níž podobnost slábne.
          Vznikne tím podklad pro odhad toho, kolik informace o hledané buňce
          poskytují jednotlivé okolní buňky.{" "}
          <SourceLink id="DOI_10_1029_2019jd032361">(nastavení prostorového vztahu, příloha A.2)</SourceLink>
        </p>
        <p>
          Výpočet potom spojí dostupné anomálie podle této informační váhy.
          Bere přitom v úvahu také nejistotu vstupů a podobnost okolních údajů
          mezi sebou. Když blízká místa zachycují téměř stejný výkyv, jejich
          informace se z velké části opakuje. Výpočet tuto vzájemnou podobnost
          zahrne do vah, aby shluk údajů nepůsobil jako stejný počet nezávislých
          pozorování. Výstupem je odhad anomálie
          v hledané buňce a jeho nejistota. Použitá metoda se nazývá regrese
          s Gaussovým procesem a patří do stejné rodiny prostorových postupů
          jako kriging.{" "}
          <SourceLink id="DOI_10_1029_2019jd032361">(prostorová analýza, oddíl 3.3 a příloha A)</SourceLink>
        </p>
        <p>
          HadCRUT5 takto přepočítává i buňky s pozorováním a ponechává oblasti,
          kde mají data pro odhad dostatečnou oporu. Z rozšířené mapy se pak
          znovu počítá plošný průměr. Váhy zde mají dvě odlišné úlohy:
          při interpolaci určují, jak pozorování pomůže odhadnout jednu buňku,
          při průměrování určují, jak velké území tato buňka zastupuje.{" "}
          <SourceLink id="DOI_10_1029_2019jd032361">(výsledná pole a výběr pokrytých oblastí)</SourceLink>
        </p>

        <h3 id="dalsi-veliciny">Mapy vlhkosti, srážek a teplotních extrémů</h3>
        <p>
          Spojování místních údajů do buněk a plošné vážení využívá také
          pozorování <Link href="/pozorovani/narust-vlhkosti/#prostorove-zpracovani">vlhkosti atmosféry</Link>.
          HadISDH vytváří měsíční buňky, mezery ponechává prázdné a při
          oblastním průměrování zohledňuje rozdílnou plochu buněk.{" "}
          <SourceLink id="DOI_10_5194_cp_10_1983_2014">(Willettová a kol. 2014, oddíl 4)</SourceLink>
        </p>
        <p>
          U extrémů záleží také na pořadí operací. HadEX3 nejprve z denních
          měření na každé stanici vypočítá roční ukazatel. Teprve potom jej
          odhaduje v mřížce pomocí okolních stanic, jejich vzdálenosti
          a rozmístění. Do mapy tak vstupují již určené počty horkých dnů
          nebo srážková maxima. Konkrétní postup rozebírají pozorování
          <Link href="/pozorovani/vlny-veder/#mapy-ukazatelu"> vln veder</Link> a
          <Link href="/pozorovani/srazky-a-privalove-srazky/#prostorove-zpracovani"> srážek</Link>.{" "}
          <SourceLink id="DOI_10_1029_2019jd032263">(Dunn a kol. 2020, sestavení map HadEX3)</SourceLink>
        </p>
        <h3>Vývoj globálních výpočtů</h3>
        <p>
          Hansen a Lebedeff v roce 1987 doložili podobnost změn teploty mezi
          stanicemi a použili ji ke skládání regionálního a globálního záznamu.
          Správnost prostorového odhadu zkoumali také na úplných polích
          klimatického modelu, ze kterých vybírali pouze místa skutečných stanic.
          Získali tak možnost porovnat výsledek řídkého výběru se známým celkem.{" "}
          <SourceLink id="DOI_10_1029_jd092id11p13345">(původní studie z roku 1987)</SourceLink>
        </p>
        <p>
          Dnešní produkty rozvíjejí různé varianty tohoto úkolu. CRUTEM5 zachovává
          jednoduché průměrování stanic uvnitř buněk a poskytuje také alternativu,
          která více rozšiřuje zastoupení polárních stanic. HadCRUT5 spojuje
          pevninská a oceánská data a zveřejňuje jak verzi s prostorovou analýzou,
          tak verzi bez doplňování mezer. Volba produktu tak současně určuje,
          jak se z dostupných měření sestavuje mapa.{" "}
          <SourceLink id="DOI_10_1029_2019jd032352">(varianty CRUTEM5)</SourceLink>{" "}
          <SourceLink id="DOI_10_1029_2019jd032361">(varianty HadCRUT5)</SourceLink>
        </p>

        <h2>Nejistoty a ověření výsledku</h2>
        <p>
          Výsledek nejvíce ovlivňuje pokrytí území, kvalita vstupů a způsob
          odhadu v mezerách. Osborn a kol. porovnali dvě prostorová uspořádání
          CRUTEM5. Lepší zastoupení polárních stanic zvýšilo odhad oteplení
          pevniny mezi obdobími 1861–1900 a 2015–2019 z přibližně 1,6 na 1,7 °C.
          Porovnání ukazuje význam prostorové volby při zachování závěru
          o oteplování.{" "}
          <SourceLink id="DOI_10_1029_2019jd032352">(porovnání standardní a alternativní mřížky)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Co ovlivňuje pokrytí, interpolaci a nezávislost kontroly</summary>
          <p>
            Průměr dostupných buněk přímo popisuje pokrytou část mapy.
            Použijeme-li jej pro celé území, přibývá nejistota z chybějících
            oblastí. Pokud se vyvíjejí jinak než měřená část, může být odhad
            celku posunutý. Samotné plošné vážení tento rozdíl nedoplní.
            HadCRUT5 proto samostatně vyčísluje vliv neúplného pokrytí.{" "}
            <SourceLink id="DOI_10_1029_2019jd032361">(oddíl 3.5)</SourceLink>
          </p>
          <p>
            Velikost buňky udává prostorové členění výstupu. Síť 5° × 5°
            neznamená, že máme ve všech jejích částech stejně podrobné měření.
            Nejistotu hodnoty ovlivňuje také počet a rozmístění stanic uvnitř
            buňky. Společná chyba několika vstupů se průměrováním neodstraní
            stejně účinně jako nezávislé náhodné odchylky.{" "}
            <SourceLink id="DOI_10_1029_2019jd032352">(chyby buněk CRUTEM5)</SourceLink>{" "}
            <SourceLink id="DOI_10_1029_2019jd032361">(přenos nejistot do územních průměrů)</SourceLink>
          </p>
          <p>
            Interpolace závisí na přijatém popisu prostorových vztahů.
            HadCRUT5 nastavuje jeho parametry z 360 měsíčních map let 1961–1990.
            To je nastavení metody, nikoli její ověření na nezávislých údajích.
            Použitý vztah představuje typické kolísání a jeho parametry se
            nemění podle regionu a ročního období. V místech se slabou oporou
            v pozorování výstup vyřazuje. Nejistotu zachycuje souborem 200
            možných podob mapy a doplňujícím odhadem vlivu zbývajících mezer.{" "}
            <SourceLink id="DOI_10_1029_2019jd032361">(příloha A a oddíl 3.5)</SourceLink>
          </p>
          <p>
            Porovnání dvou mřížek CRUTEM5 mění prostorové zpracování týchž
            staničních podkladů. Rozdíl přibližně 0,1 °C tedy není obecnou chybou
            každého plošného průměru. Morice a kol. navíc porovnali HadCRUT5
            s GISTEMP, NOAAGlobalTemp a dalšími analýzami. Nejbližší výsledky
            našli v hustě měřených oblastech, větší rozdíly v řídce pokrytých
            regionech. Ani tyto analýzy nejsou zcela nezávislé, protože sdílejí
            část stanic a oceánských pozorování. Shoda prověřuje zejména vliv
            rozdílného zpracování společně s rozdíly vstupních souborů.{" "}
            <SourceLink id="DOI_10_1029_2019jd032352">(srovnání mřížek)</SourceLink>{" "}
            <SourceLink id="DOI_10_1029_2019jd032361">(porovnání analýz, oddíl 4.3)</SourceLink>
          </p>
        </details>

        <h2>Příklad na šestnácti buňkách nad Evropou</h2>
        <p>
          Spočítáme průměr anomálií CRUTEM5 za leden 2024 pro buňky mezi
          45° a 65° severní šířky a mezi 5° a 25° východní délky.
          Použijeme standardní mřížku verze 5.2.0.0 staženou 30. října 2026.
          Všech šestnáct buněk má v tomto měsíci hodnotu. Začínáme tedy u veřejné
          mapy již zpracovaných teplotních anomálií a opakujeme krok plošného
          průměrování.{" "}
          <SourceLink id="DATA_CRUTEM_5_2_0_0_Grids">(zdrojová data CRUTEM5)</SourceLink>
        </p>
        <p>
          Vybraný obdélník slouží jako přesně vymezená ukázka, nejde o oficiální
          průměr Evropy. Každou hodnotu CRUTEM5 vážíme plochou celé její buňky,
          stejně jako při základním průměrování této mřížky. I pobřežní buňky
          obsahují odhad teploty vzduchu ze stanic na pevnině. V tomto výpočtu
          je nespojujeme s teplotou moře ani neořezáváme podle podílu souše.{" "}
          <SourceLink id="DOI_10_1029_2019jd032352">(význam mřížky a plošné průměrování)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/spatial-averages/january-2024.svg" width={800} height={1000}
            alt="Šestnáct buněk CRUTEM5 za leden 2024. Jižní pás má kladnější anomálie, severní pás je zčásti chladnější než průměr let 1961 až 1990." />
          <figcaption>
            Čísla a barvy označují lednovou anomálii v °C vůči období 1961–1990.
            Červená znamená teplejší a modrá chladnější měsíc. Osy vymezují
            zeměpisnou délku a šířku. Obdélníkové zobrazení používá stejné
            rozestupy stupňů, skutečná plocha buněk se však k severu zmenšuje.
            Vlastní graf z dat{" "}
            <SourceLink id="DATA_CRUTEM_5_2_0_0_Grids">CRUTEM5, licence OGL v3</SourceLink>.
          </figcaption>
        </figure>
        <p>
          V každém šířkovém pásu leží čtyři stejně velké buňky. Nejdříve proto
          můžeme spočítat jejich obyčejný průměr a potom vážit čtyři vzniklé
          pásy. Jejich plocha je úměrná kosinu šířky středu. Tabulka ukazuje
          průměry pásů a tyto váhy, zaokrouhlené pro čtení.
        </p>
        <div className="method-data-output method-data-output--compact method-data-output__table-wrap" role="region" tabIndex={0} aria-label="Průměry a váhy čtyř šířkových pásů">
          <table>
            <thead><tr><th>Pás severní šířky</th><th>Průměrná odchylka</th><th>Plošná váha</th></tr></thead>
            <tbody>
              <tr><td>45–50°</td><td>+2,8239 °C</td><td>0,67559</td></tr>
              <tr><td>50–55°</td><td>+2,1089 °C</td><td>0,60876</td></tr>
              <tr><td>55–60°</td><td>+0,2904 °C</td><td>0,53730</td></tr>
              <tr><td>60–65°</td><td>−0,5658 °C</td><td>0,46175</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          První pás přispívá do váženého součtu přibližně
          2,8239 × 0,67559 = 1,9078 °C. Stejně vynásobíme další tři průměry
          jejich vahami. Součet těchto příspěvků vychází 3,0863 °C a součet
          vah 2,2834. Jejich podíl dává výslednou odchylku:
        </p>
        <Equation tex={String.raw`\bar d = \frac{3{,}0863}{2{,}2834}\,^\circ\mathrm{C} \approx +1{,}35\,^\circ\mathrm{C}`} />
        <p>
          Plošný průměr vybraných buněk byl tedy přibližně o 1,35 °C vyšší
          než jejich referenční lednová hodnota. Kdybychom všech šestnáct buněk
          vážili stejně, dostali bychom přibližně +1,16 °C.
          Rozdíl 0,19 °C vzniká tím, že jižní, v tomto měsíci teplejší pásy
          zabírají větší plochu než severní. Výpočty používají nezaokrouhlené
          vstupy, které jsou dostupné v doplňku.
        </p>
        <details className="method-details">
          <summary>Data, geometrie buněk a opakování výpočtu</summary>
          <p>
            <a href="/data/methods/spatial-averages/cells.csv">Tabulka šestnácti buněk</a>{" "}
            zachovává jejich hranice a nezaokrouhlené vstupy.
            <a href="/data/methods/spatial-averages/reproduce.py"> Skript pro Python</a>{" "}
            z ní bez dalších knihoven vypočte výsledky a porovná je s{" "}
            <a href="/data/methods/spatial-averages/results.json">uloženým výsledkem</a>.
            Vstupní veličina má v původním souboru jednotku kelvin. Protože jde
            o rozdíl teplot, její číselná hodnota je stejná i ve stupních Celsia.
          </p>
          <p>
            Pro kontrolu výběru poskytujeme také{" "}
            <a href="/data/methods/spatial-averages/crutem5-anomalies-original.nc">původní soubor NetCDF (13,5 MB)</a>,{" "}
            <a href="/data/methods/spatial-averages/extract.py">skript výběru buněk</a>{" "}
            a <a href="/data/methods/spatial-averages/provenance.json">původ, verzi a kontrolní otisky</a>.
            Postup a oprávnění k datům shrnuje{" "}
            <a href="/data/methods/spatial-averages/README.txt">doprovodný návod</a>.
            Zdrojový soubor byl sestaven 22. října 2026 a obsahuje měsíce
            od ledna 1850 do září 2026. Výběr ponechává pouze leden 2024.
          </p>
          <p>
            Kosinové váhy lze ověřit přímo z geometrie koule. Plocha buňky
            mezi dvěma rovnoběžkami a dvěma poledníky je:
          </p>
          <Equation tex={String.raw`A = R^2 \Delta\lambda (\sin\varphi_2 - \sin\varphi_1)`} />
          <p>
            Symbol <InlineMath tex="A" /> označuje plochu v km²,{" "}
            <InlineMath tex="R" /> poloměr koule v km,{" "}
            <InlineMath tex={String.raw`\Delta\lambda`} /> rozdíl délek krajních
            poledníků v radiánech a <InlineMath tex={String.raw`\varphi_1`} />{" "}
            a <InlineMath tex={String.raw`\varphi_2`} /> jižní a severní šířku.
            Radián je úhlová jednotka, v níž celý kruh měří{" "}
            <InlineMath tex={String.raw`2\pi`} />. Symbol <InlineMath tex={String.raw`\pi`} />{" "}
            je poměr obvodu kruhu k jeho průměru. Funkce sinus vyjadřuje
            výškovou polohu rovnoběžky na kouli. Pro stejně široké pásy
            lze rozdíl sinusů rozložit na společný faktor a kosinus šířky
            středu. Společný faktor i poloměr se ve váženém průměru vykrátí.
            Skript kontroluje shodu obou výpočtů s přesností číselného výpočtu.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Prostorové zpracování spojuje místní údaje do mapy. Plošný průměr
            pak přiděluje jednotlivým částem vliv podle zastoupeného území.
            Díky tomu můžeme sledovat změnu rozsáhlé oblasti i ze sítě,
            v níž jsou měření rozmístěná nerovnoměrně. Odhadování mezer
            využívá doložené vztahy mezi místy a rozšiřuje pokrytí mapy.
          </p>
          <p>
            Metoda umožňuje sestavovat mapy teploty, srážek a dalších veličin,
            odhadovat hodnoty mezi měřenými místy a určovat regionální i globální
            průměry. Konkrétní provedení CRUTEM5 zpracovává měsíční odchylky
            teploty vzduchu na síti 5° × 5° od roku 1850. Zde uložená verze
            sahá do září 2026. Výstupem jsou mapy a průměry změn v °C vůči
            období 1961–1990.{" "}
            <SourceLink id="DATA_CRUTEM_5_2_0_0_Grids">(rozsah CRUTEM5)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
