import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function TimeExtremesArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak rozpoznáváme změny v čase</h2>
        <p className="article-prose__intro">
          Analýza časových změn zjišťuje, jak se sledovaná veličina vyvíjí,
          jaká část kolísání se pravidelně opakuje a zda se mění její dlouhodobá
          úroveň. Analýza extrémů sleduje nejvyšší či nejnižší hodnoty,
          překračování stanovených hranic a trvání neobvyklých podmínek.
          Vysvětlíme oba postupy na denních maximálních teplotách vzduchu:
          nejprve výpočet ročního průměru a jeho trendu, potom ukazatele
          teplotních extrémů.{" "}
          <SourceLink id="BOOK_Hyndman_Athanasopoulos_2021">(Hyndman a Athanasopoulos 2021)</SourceLink>{" "}
          <SourceLink id="WEB_Met_Office_uzivatelska_prirucka_HadEX3_6eb86927">(definice ukazatelů HadEX3)</SourceLink>
        </p>

        <h3>Nejdříve vymezíme sledovanou veličinu a období</h3>
        <p>
          Denní maximální teplota je nejvyšší teplota zaznamenaná za měřicí den
          na daném místě. Z těchto hodnot můžeme pro každý rok vypočítat průměr.
          Výsledek popisuje obvyklou úroveň denních maxim v roce.
          Abychom mohli jednotlivé roky porovnávat, potřebujeme vždy stejnou
          veličinu, jednotku a časové vymezení měření. Vstupem jsou proto
          teploty doplněné datem, identitou stanice a údaji o kvalitě.{" "}
          <SourceLink id="DOI_10_1175_jtech_d_11_00103_1">(Menne a kol. 2012, denní klimatické údaje)</SourceLink>
        </p>
        <p>
          Před výpočtem zvolíme celé sledované období a pravidlo pro chybějící
          dny. Pro názorné provedení použijeme pouze úplné roky: sečteme všechna
          denní maxima a vydělíme jejich počtem. Každý rok tak zastupuje celý
          roční cyklus. Záznam připravený tímto způsobem obsahuje jednu hodnotu
          za rok. Kontrolu jednotlivých údajů a změn měřicích podmínek vysvětluje
          samostatná metoda{" "}
          <Link href="/metody/kontrola-kvality-a-homogenizace">kontrola kvality a homogenizace</Link>.{" "}
          <SourceLink id="DOI_10_1175_jtech_d_11_00103_1">(vstupy a jejich příprava)</SourceLink>
        </p>

        <h3 id="sezonni-prubeh">Sezónní kolísání a referenční období</h3>
        <p>
          Teplota v průběhu roku pravidelně stoupá a klesá.
          Tato opakující se změna se nazývá <strong>sezónní kolísání</strong>.
          Roční průměr spojuje všechny části cyklu do jedné hodnoty.
          Pokud chceme sledovat jednotlivé měsíce, porovnáváme je se stejným
          kalendářním měsícem v delším referenčním období. Lednovou hodnotu
          tedy porovnáme s průměrem lednů a červencovou s průměrem červenců.{" "}
          <SourceLink id="BOOK_Hyndman_Athanasopoulos_2021">(sezónnost a časové vzorce)</SourceLink>{" "}
          <SourceLink id="WEB_Met_Office_uzivatelska_prirucka_HadEX3_6eb86927">(referenční období v klimatologickém použití)</SourceLink>
        </p>
        <p>
          Rozdíl vůči referenčnímu průměru nazýváme <strong>anomálií</strong>.
          Kladná teplotní anomálie znamená teplejší podmínky než ve zvoleném
          základu, záporná chladnější. U ročních hodnot odečítáme roční
          referenční průměr, u měsíčních hodnot odpovídající měsíční průměr.
          Nulová úroveň grafu tím získává jasný význam. Odečtení stejné konstanty
          od všech ročních hodnot posune celý graf nahoru nebo dolů a zachová
          jeho sklon.{" "}
          <SourceLink id="DOI_10_3389_fclim_2022_989505">(Dunn a kol. 2022, porovnávání anomálií)</SourceLink>{" "}
          <SourceLink id="BOOK_Hyndman_Athanasopoulos_2021">(lineární vztah a jeho sklon)</SourceLink>
        </p>

        <p>
          Sezónní průběh je potřeba oddělit také při sledování
          <Link href="/pozorovani/atmosfericka-koncentrace-co2/#casovy-zaznam"> atmosférického CO₂</Link>.
          NOAA popisuje staniční záznam součtem pomalého vývoje a opakujících
          se ročních vln. Tak lze odhadnout sezónní složku a sledovat změnu
          po jejím odečtení.{" "}
          <SourceLink id="WEB_NOAA_Global_Means_Method">(NOAA: proložení časové křivky)</SourceLink>{" "}
          Sezónnost se promítá i do chemických záznamů oceánu. Její oddělení
          od dlouhodobé změny ukazuje pozorování
          <Link href="/pozorovani/acidifikace-oceanu/#casovy-zaznam"> acidifikace u Bermud</Link>.{" "}
          <SourceLink id="DOI_10_3389_fmars_2023_1289931">(Bates a Johnson 2023)</SourceLink>
        </p>

        <h3 id="trend">Trend shrnuje změnu za celé zvolené období</h3>
        <p>
          <strong>Trend</strong> vyjadřuje dlouhodobý směr vývoje v určitém
          období. Jednoduchým popisem je přímka proložená všemi ročními hodnotami.
          Její sklon udává průměrnou změnu za jednotku času, například v °C za
          desetiletí. Proložení využívá také průběh mezi prvním a posledním
          rokem, takže výsledek neurčuje pouze rozdíl dvou krajních hodnot.{" "}
          <SourceLink id="BOOK_Hyndman_Athanasopoulos_2021">(regrese a časový trend)</SourceLink>
        </p>
        <p>
          Přímku zde volíme metodou <strong>nejmenších čtverců</strong>.
          U každého roku změříme svislou vzdálenost mezi pozorovanou hodnotou
          a přímkou. Vzdálenosti umocníme na druhou, aby se kladné a záporné
          rozdíly navzájem nerušily. Hledáme takovou polohu a sklon přímky,
          při kterých je součet těchto čtverců nejmenší. Pro přímku s volnou
          polohou lze sklon vypočítat přímo:{" "}
          <SourceLink id="BOOK_Hyndman_Athanasopoulos_2021">(odhad nejmenšími čtverci)</SourceLink>
        </p>
        <Equation tex={String.raw`b = \frac{\sum_i (t_i-\bar t)(y_i-\bar y)}{\sum_i (t_i-\bar t)^2}`} />
        <p>
          Symbol <InlineMath tex="b" /> označuje sklon v °C za rok.{" "}
          <InlineMath tex="t_i" /> je čas příslušného roku vyjádřený v letech
          a <InlineMath tex="y_i" /> jeho teplotní hodnota v °C.
          Index <InlineMath tex="i" /> rozlišuje roky, pruh nad symbolem
          označuje průměr za celé sledované období a znak{" "}
          <InlineMath tex={String.raw`\sum`} /> součet přes všechny použité roky.
          Čitatel zachycuje, jak spolu souvisejí postup času a odchylky teploty.
          Jmenovatel převádí tento vztah na změnu za jeden rok.
          Proložená přímka prochází bodem daným průměrným časem a průměrnou teplotou.{" "}
          <SourceLink id="BOOK_Hyndman_Athanasopoulos_2021">(výpočet a význam koeficientů)</SourceLink>
        </p>


        <p>
          U mořského ledu se stejným principem vyhodnocuje změna rozsahu.
          Pokud vybíráme zářijové měsíční průměry, dostaneme jednu hodnotu
          za rok a sklon přímky v km² za rok. Sea Ice Index vyjadřuje
          tento sklon také v procentech referenčního průměru za desetiletí.
          Rozdíl mezi měsíčním průměrem a denním minimem vysvětluje
          pozorování <Link href="/pozorovani/ubytek-arktickeho-ledu/#rozsah-a-cas">arktického mořského ledu</Link>.{" "}
          <SourceLink id="WEB_National_Snow_and_Ice_Data_C_uzivatelske_prirucce_Sea_Ice_Index_v4_48d7d043">(Sea Ice Index v4, měsíční trendy)</SourceLink>
        </p>

        <h3>Jak posuzujeme statistickou průkaznost trendu</h3>
        <p>
          Jednotlivé roky obvykle neleží přesně na proložené přímce.
          Rozdíl mezi pozorovanou hodnotou a hodnotou přímky se nazývá
          <strong> reziduum</strong>. Rezidua ukazují zbývající meziroční kolísání.
          Z jeho velikosti a časového uspořádání odhadujeme, jak moc by se mohl
          vypočtený sklon měnit při jiném průběhu takového kolísání.
          Tento odhad rozptýlení sklonu nazýváme jeho <strong>směrodatnou chybou</strong>.{" "}
          <SourceLink id="BOOK_Hyndman_Athanasopoulos_2021">(rezidua a nejistota odhadu)</SourceLink>
        </p>
        <p>
          Pro časový záznam je podstatné také to, zda po kladné odchylce často
          následuje další kladná odchylka. Taková návaznost se nazývá{" "}
          <strong>autokorelace</strong>. Několik sousedních let potom může
          zachycovat část společného výkyvu. Při odhadu směrodatné chyby proto
          potřebujeme popsat i vztahy mezi odchylkami vzdálenými o jeden či více let.{" "}
          <SourceLink id="BOOK_Hyndman_Athanasopoulos_2021">(časové vztahy reziduí)</SourceLink>
        </p>
        <p>
          Použijeme postup Neweyho a Westa. Vychází z reziduí a jejich součinů
          pro různě vzdálené roky. Zahrnuje tak velikost kolísání i jeho časovou
          návaznost. Vliv zahrnutých vzdálenějších dvojic postupně snižuje
          a největší započtený odstup volíme před vyhodnocením výsledku.
          Odhadnutý sklon přímky se tím nemění, přepočítává se jeho směrodatná
          chyba. Tato varianta dovoluje také rozdílnou velikost kolísání
          v různých částech záznamu.{" "}
          <SourceLink id="DOI_10_3386_t0055">(Newey a West 1986, původní postup)</SourceLink>
        </p>
        <p>
          Ze sklonu a jeho směrodatné chyby sestavíme interval spolehlivosti.
          V použitém přiblížení pro dostatečně dlouhý záznam má přibližný
          95% interval tvar:
        </p>
        <Equation tex={String.raw`b \pm 1{,}96\,s_b`} />
        <p>
          Symbol <InlineMath tex="s_b" /> označuje směrodatnou chybu sklonu
          ve stejné jednotce jako <InlineMath tex="b" />. Číslo 1,96 je
          koeficient pro 95% interval založený na normálním rozdělení,
          tedy na běžném zvonovitém popisu rozptýlení odhadu.
          Při splnění předpokladů by přibližně 95 % intervalů vytvořených
          tímto postupem při opakování obsahovalo skutečný sklon modelového trendu.{" "}
          <SourceLink id="DOI_10_3386_t0055">(intervaly založené na odhadu rozptýlení koeficientů)</SourceLink>{" "}
          <SourceLink id="BOOK_Hyndman_Athanasopoulos_2021">(normální přiblížení)</SourceLink>
        </p>
        <p>
          Pomocí intervalu můžeme také posoudit, zda údaje svědčí pro změnu.
          Pokud celý interval leží nad nulou, vychází růst statisticky průkazný.
          Interval pod nulou obdobně podpírá pokles. Obsahuje-li nulu,
          zvolený test nulový sklon nevylučuje. Protože hledáme růst i pokles,
          jde o <strong>oboustranný test</strong>. Použití 95% intervalu
          odpovídá přibližné 5% hladině testu: při splnění předpokladů by test
          asi v 5 % opakování označil trend za průkazný i při skutečně nulovém sklonu.{" "}
          <SourceLink id="DOI_10_3386_t0055">(testování koeficientů)</SourceLink>
        </p>

        <h3 id="extremy">Extrém potřebuje vlastní definici</h3>
        <p>
          Pro popis extrémů se vrátíme k denním údajům. Roční ukazatel
          <strong> TXx</strong> vybereme jako nejvyšší denní maximální teplotu
          v celém roce. Výsledek má jednotku °C a popisuje velikost nejvyšší
          zaznamenané hodnoty. Jinou otázku klade ukazatel <strong>SU</strong>,
          počet letních dnů. Ten spočítá dny s maximální teplotou vyšší než 25 °C.
          Výsledkem je počet dnů za rok. Oba ukazatele vznikají ze stejných
          denních maxim, ale každý zachycuje jinou vlastnost počasí.{" "}
          <SourceLink id="WEB_Met_Office_uzivatelska_prirucka_HadEX3_6eb86927">(definice TXx a SU)</SourceLink>
        </p>
        <p>
          Hranici lze stanovit také podle místních poměrů. Ukazatel teplých
          dnů TX90p používá 90. percentil: hodnotu, pod níž leží přibližně
          90 % referenčních teplot. Hranice se určuje zvlášť pro jednotlivé
          části roku, takže zachycuje neobvyklé teplo i mimo léto.
          Výsledkem je procento dnů, které příslušnou hranici překročily.
          Pro hodnocení trvání se navíc sledují po sobě jdoucí dny,
          jak podrobně vysvětluje pozorování{" "}
          <Link href="/pozorovani/vlny-veder/#hranice-a-trvani">vln veder</Link>.{" "}
          <SourceLink id="WEB_Met_Office_uzivatelska_prirucka_HadEX3_6eb86927">(percentilové ukazatele)</SourceLink>
        </p>
        <p>
          Po výpočtu ukazatele pro každý rok získáme další časový záznam.
          Můžeme tedy sledovat trend ročního maxima, počtu letních dnů
          nebo délky teplých období. U srážek stejným způsobem vybíráme
          nejvyšší jednodenní úhrn nebo počítáme dny nad stanoveným množstvím vody.
          Jednotka trendu vždy odpovídá ukazateli: °C za desetiletí,
          dny za desetiletí nebo milimetry za desetiletí.{" "}
          <SourceLink id="DOI_10_1029_2005jd006290">(Alexander a kol. 2006, klimatologické použití)</SourceLink>{" "}
          Výsledky pro srážky rozebírá článek o{" "}
          <Link href="/pozorovani/srazky-a-privalove-srazky/#ukazatele">srážkách a přívalových srážkách</Link>.
        </p>

        <figure className="article-figure">
          <Image src="/media/time-extremes/workflow.svg" width={760} height={1160}
            alt="Schéma dvou cest ze stejných denních teplot. Roční průměry vedou k trendu, denní maxima také k ročnímu extrému a počtu dnů nad hranicí." />
          <figcaption>
            Denní údaje mohou odpovídat na různé otázky. Pro trend průměrné
            úrovně nejprve počítáme průměry, pro extrémy nejvyšší hodnoty nebo
            překročení hranice. Teprve potom sledujeme změnu těchto ukazatelů
            v čase. Vlastní schéma podle{" "}
            <SourceLink id="BOOK_Hyndman_Athanasopoulos_2021">výkladu časových modelů</SourceLink>{" "}
            a <SourceLink id="WEB_Met_Office_uzivatelska_prirucka_HadEX3_6eb86927">definic HadEX3</SourceLink>.
          </figcaption>
        </figure>

        <h3>Společné ukazatele umožňují porovnávat regiony</h3>
        <p>
          Vývoj metody spojil statistické postupy s dohodnutými definicemi
          klimatických ukazatelů. Newey a West v roce 1986 zveřejnili zde
          použitý odhad nejistoty pro časově související údaje. Alexander
          a kol. v roce 2006 sestavili globální analýzu extrémů za období
          1951–2003. Shodné definice umožnily spojit výpočty z různých zemí
          do jednoho porovnatelného souboru.{" "}
          <SourceLink id="DOI_10_3386_t0055">(původ statistického postupu)</SourceLink>{" "}
          <SourceLink id="DOI_10_1029_2005jd006290">(původní globální analýza)</SourceLink>
        </p>
        <p>
          Dnešní HadEX3 poskytuje měsíční a roční ukazatele pro období
          1901–2018. Spojením staničních výsledků vznikají mapy, které ukazují
          rozdíly mezi regiony.{" "}
          <SourceLink id="WEB_Met_Office_uzivatelska_prirucka_HadEX3_6eb86927">(rozsah a zpracování HadEX3)</SourceLink>{" "}
          Dunn a kol. při porovnání HadEX3 s dalšími produkty použili jiný
          odhad sklonu: vypočetli sklony mezi všemi dvojicemi let a vybrali jejich
          medián, tedy prostřední hodnotu v seřazeném souboru nebo průměr
          dvou prostředních hodnot při jejich sudém počtu.{" "}
          <SourceLink id="DOI_10_3389_fclim_2022_989505">(alternativní odhad trendu)</SourceLink>
        </p>
        <p>
          Přímka shrnuje celé zvolené období jednou rychlostí změny.
          Zakřivený průběh lze popsat hladkou křivkou,
          různé fáze vývoje oddělenými časovými úseky. Volba odpovídá otázce,
          kterou záznamu klademe, a stanovuje, co výsledný trend shrnuje.{" "}
          <SourceLink id="BOOK_Hyndman_Athanasopoulos_2021">(varianty časového modelu)</SourceLink>
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Výsledek závisí na délce a výběru období, úplnosti měření a vhodnosti
          časového modelu. Změna přístroje či stanoviště může přidat dlouhodobý
          posun. V našem příkladu statistický interval popisuje kolísání kolem
          trendu, nezahrnuje takové možné posuny stanice. Porovnání HadEX3
          s reanalýzami ukázalo dobrou shodu časových změn teplotních ukazatelů,
          u srážkových ukazatelů byla shoda slabší.{" "}
          <SourceLink id="DOI_10_1175_jtech_d_11_00103_1">(vlastnosti staničních vstupů)</SourceLink>{" "}
          <SourceLink id="DOI_10_3389_fclim_2022_989505">(Dunn, Donat a Alexander 2022)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Co ověřujeme u trendu a ukazatelů extrémů</summary>
          <p>
            Krátké období může zachytit jen část delšího výkyvu. Volba začátku
            a konce proto ovlivňuje sklon. Přímku kontrolujeme také pomocí
            reziduí: dlouhý oblouk nebo náhlý skok upozorní, že jeden stálý
            sklon nepopisuje celý průběh dobře. Zjištěný trend je popisem
            vymezeného období. Určování jeho příčin vyžaduje další důkazy.{" "}
            <SourceLink id="BOOK_Hyndman_Athanasopoulos_2021">(kontrola modelu a interpretace regrese)</SourceLink>
          </p>
          <p>
            Neweyho–Westův postup předpokládá dostatečně slábnoucí závislost
            vzdálených údajů a dostatečně dlouhý záznam. Volíme také největší
            zahrnutý časový odstup. U ukázky používáme tři roky a zvlášť
            kontrolujeme odstupy jeden, pět a osm let. Ve všech těchto
            nastaveních zůstává interval trendu ročního průměru nad nulou,
            zatímco interval trendu TXx nulu obsahuje. Jde o citlivost
            statistického výpočtu na nastavení, nikoli o další nezávislá měření.{" "}
            <SourceLink id="DOI_10_3386_t0055">(předpoklady a časové váhy)</SourceLink>
          </p>
          <p>
            Chybějící den může skrýt právě roční maximum. Proto pro ukázku
            vyžadujeme úplný kalendář. GHCN-Daily provádí kontroly jednotlivých
            údajů, ale soubor není homogenizován. Výsledek pro Blue Hill
            zde vztahujeme k použitému staničnímu záznamu.
            Podklady pro širší klimatický závěr musí prověřit také dlouhodobou
            srovnatelnost měření a shodu s dalšími stanicemi.{" "}
            <SourceLink id="DOI_10_1175_jtech_d_11_00103_1">(kontrola kvality a homogenita GHCN-Daily)</SourceLink>
          </p>
          <p>
            U percentilových ukazatelů záleží na referenčním období i způsobu
            určení hranice. HadEX3 proto zveřejňuje dvě referenční varianty
            a používá zavedené postupy pro výpočty uvnitř a vně referenčního
            období. Při porovnávání produktů musíme nejprve sjednotit definici
            ukazatele, období a zastoupené území.{" "}
            <SourceLink id="WEB_Met_Office_uzivatelska_prirucka_HadEX3_6eb86927">(definice a reference)</SourceLink>
          </p>
          <p>
            Dunn, Donat a Alexander porovnali staniční produkty s reanalýzami,
            které spojují pozorování s fyzikálním modelem. U teplot zjistili
            dobrou shodu anomálií, trendů i meziročního kolísání, přestože se
            absolutní hodnoty místy lišily. V horských a řídce měřených
            oblastech záleželo na prostorovém zpracování. Produkty sdílejí
            část pozorování, jejich srovnání je proto hlavně kontrolou
            různých způsobů zpracování a kombinování vstupů.{" "}
            <SourceLink id="DOI_10_3389_fclim_2022_989505">(ověření a meze porovnání)</SourceLink>
          </p>
        </details>

        <h2>Příklad na denních teplotách z Blue Hill</h2>
        <p>
          Použijeme stanici Blue Hill LCD v americkém Massachusetts,
          označenou v GHCN-Daily jako USW00014753. Z veřejného souboru
          vybereme denní maxima od 1. ledna 1961 do 31. prosince 2024.
          Záznam obsahuje všech 23 376 kalendářních dnů a žádný vybraný údaj
          nemá příznak nevyhovující kvality. Pracujeme s verzí archivu
          3.35-upd-2026102817, staženou 30. října 2026.{" "}
          <SourceLink id="DOI_10_7289_v5d21vhz">(veřejný archiv NOAA)</SourceLink>{" "}
          <SourceLink id="WEB_NOAA_GHCND_Format">(formát a příznaky údajů)</SourceLink>
        </p>
        <p>
          Za každý z 64 let vypočteme průměr denních maxim. Průměr třiceti
          ročních hodnot z let 1961–1990 je přibližně 14,0535 °C a zvolíme ho
          jako referenci. V roce 2024 dává průměr všech 366 denních maxim
          15,8773 °C. Jeho anomálie proto vychází přibližně +1,8238 °C.
          Stejně připravíme odchylky ostatních let.
        </p>
        <p>
          Pro výpočet trendu použijeme všech 64 ročních hodnot.
          Součet v čitateli vzorce pro sklon je přibližně 606,0299 °C·rok,
          součet ve jmenovateli 21 840 rok². Po vydělení a přepočtu na
          desetiletí dostáváme:
        </p>
        <Equation tex={[
          String.raw`b = \frac{606{,}0299}{21\,840}\,{}^\circ\mathrm{C}/\mathrm{rok}`,
          String.raw`\approx 0{,}02775\,{}^\circ\mathrm{C}/\mathrm{rok}`,
          String.raw`\approx 0{,}28\,{}^\circ\mathrm{C}/(10\,\mathrm{let})`,
        ]} />
        <p>
          Neweyho–Westova směrodatná chyba s největším odstupem tři roky
          vychází přibližně 0,03465 °C za desetiletí. Po dosazení do vztahu
          pro interval dostaneme přibližně <strong>+0,21 až +0,35 °C
          za desetiletí</strong>. Celý interval leží nad nulou. Zvolený
          statistický model tedy podpírá růst průměru denních maxim
          v tomto staničním záznamu za období 1961–2024.
        </p>
        <p>
          Nyní ze stejných denních vstupů vybereme pro každý rok nejvyšší
          hodnotu TXx. V roce 2024 to bylo <strong>34,4 °C</strong>,
          zaznamenaných 20. června a 2. srpna. Počet letních dnů SU
          za tentýž rok činil <strong>84 dnů</strong> s maximem vyšším
          než 25 °C. První číslo vyjadřuje výšku ročního extrému,
          druhé četnost překročení teplotní hranice.
        </p>
        <figure className="article-figure">
          <Image src="/media/time-extremes/blue-hill-trends.svg" width={800} height={1160}
            alt="Dva grafy pro Blue Hill v letech 1961 až 2024. Horní ukazuje anomálie ročních průměrů denních maxim, dolní nejvyšší denní maximum každého roku. Oba mají vlastní proloženou přímku." />
          <figcaption>
            Tečky představují roční hodnoty, přímky jejich lineární trendy.
            Nahoře jsou odchylky průměrů denních maxim vůči letům 1961–1990.
            Dole jsou absolutní roční maxima TXx. Svislé osy mají různé
            měřítko, protože zobrazují jiné ukazatele.
            Vlastní výpočet z <SourceLink id="DOI_10_7289_v5d21vhz">veřejných dat NOAA GHCN-Daily</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Pro roční maximum TXx vychází sklon přibližně +0,08 °C
          za desetiletí a stejným postupem určený interval přibližně
          <strong> −0,09 až +0,25 °C za desetiletí</strong>.
          Tento interval obsahuje nulu. V použitém období tedy test
          nerozlišuje trend TXx od nulového sklonu na zvolené hladině.
          U průměru denních maxim jsme naopak dostali interval celý nad nulou.
          Záznam tedy přesvědčivěji dokládá růst průměrné úrovně denních maxim
          než změnu nejvyšší teploty jednotlivých let.
        </p>
        <details className="method-details">
          <summary>Původní data a zopakování všech kroků</summary>
          <p>
            <a href="/data/methods/time-extremes/USW00014753-original.dly">Nezměněný staniční soubor NOAA</a>{" "}
            zachovává všechny původní veličiny i příznaky. Příklad vybírá
            pouze TMAX, denní maximální teplotu v desetinách °C.
            Hodnota −9999 označuje chybějící údaj a neprázdný příznak kvality
            vyřazení z našeho výběru. Všech 64 vybraných let je úplných.{" "}
            <SourceLink id="WEB_NOAA_GHCND_Format">(dokumentace formátu)</SourceLink>
          </p>
          <p>
            Pro kontrolu jsou připraveny{" "}
            <a href="/data/methods/time-extremes/daily.csv">vybrané denní údaje</a>,{" "}
            <a href="/data/methods/time-extremes/annual.csv">roční průměry, TXx a SU</a>{" "}
            a <a href="/data/methods/time-extremes/monthly.csv">měsíční průměry a anomálie</a>.
            Měsíční reference vzniká průměrem třiceti hodnot stejného měsíce
            v letech 1961–1990. Roční reference vzniká zvlášť z ročních hodnot.
          </p>
          <p>
            <a href="/data/methods/time-extremes/reproduce.py">Skript pro Python</a>{" "}
            bez dalších knihoven znovu načte originál, ověří kalendář
            a příznaky, vypočte ukazatele i oba trendy a porovná je
            s <a href="/data/methods/time-extremes/results.json">uloženými výsledky</a>.
            Pro směrodatnou chybu používá Bartlettovy váhy:
            nejprve násobí každé reziduum vzdáleností příslušného roku od
            středu období, čímž zachytí jeho vliv na sklon. Součiny takto
            upravených reziduí pro dvojice let vzdálené jeden, dva a tři roky
            pak započítává s vahami 0,75, 0,50 a 0,25. Nepoužívá dodatečnou opravu pro malý počet let.
          </p>
          <p>
            Časový střed je 1992,5 a obě přímky mají volnou polohu.
            Intervaly používají normální koeficient 1,9599639845 a zaokrouhlují
            se až při zobrazení. Nastavení alternativních odstupů a jejich
            výsledky jsou ve stejném souboru. Počet desetinných míst
            uložených koeficientů slouží opakování výpočtu.
          </p>
          <p>
            <a href="/data/methods/time-extremes/provenance.json">Původ a kontrolní otisky souborů</a>,{" "}
            <a href="/data/methods/time-extremes/ghcnd-version-original.txt">původní označení verze NOAA</a>{" "}
            a <a href="/data/methods/time-extremes/station.txt">údaje o stanici</a>{" "}
            vymezují použitý vstup. Spuštění popisuje{" "}
            <a href="/data/methods/time-extremes/README.txt">návod k opakování</a>.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Časová analýza nejprve vymezí srovnatelné údaje a oddělí pravidelný
            roční cyklus. Trend pak shrne jejich dlouhodobou změnu a statistický
            interval vyjádří, jak přesně ji daný model určuje. Extrémy získáme
            vlastním výběrem z denních dat, takže změnu průměru, nejvyšší hodnoty
            a četnosti teplých dnů můžeme hodnotit samostatně.
          </p>
          <p>
            Metoda umožňuje určovat rychlost změn teploty a srážek, četnost
            překročení hranic i trvání neobvyklých podmínek. Z denních údajů
            sestavuje měsíční a roční ukazatele, jejichž trendy vyjadřuje
            například v °C, milimetrech nebo dnech za 10 let. Konkrétní
            klimatologické provedení HadEX3 poskytuje měsíční a roční
            ukazatele extrémů pro roky 1901–2018.{" "}
            <SourceLink id="WEB_Met_Office_uzivatelska_prirucka_HadEX3_6eb86927">(rozsah a veličiny HadEX3)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
