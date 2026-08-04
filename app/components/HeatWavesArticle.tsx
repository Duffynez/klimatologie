import Image from "next/image";
import { SourceLink } from "./SourceLink";

export function HeatWavesArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>Denní maximum</dt>
            <dd>Nejvyšší teplota vzduchu zaznamenaná na stanici během vymezeného pozorovacího dne.</dd>
          </div>
          <div>
            <dt>Denní minimum</dt>
            <dd>Nejnižší teplota vzduchu zaznamenaná během téhož dne; obvykle nastává v noci nebo ráno.</dd>
          </div>
          <div>
            <dt>Percentil</dt>
            <dd>Hranice v rozdělení hodnot. Pod 90. percentilem nebo přesně na něm leží 90 % srovnávaných měření.</dd>
          </div>
          <div>
            <dt>Referenční období</dt>
            <dd>Určená část minulých měření, z níž se pro každý den roku vypočítá místní teplotní hranice.</dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Vlna veder se vždy určuje z denních teplot podle zveřejněného pravidla. K číslu proto patří teplotní
          veličina, hranice, nejkratší délka události, roční období, území a sledované roky.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Vlna veder je souvislé období několika dnů, v němž teplota na určitém místě překračuje předem určenou
          hranici. Z denních měření lze určit, kolik takových událostí nastalo, kolik dnů dohromady trvaly a o kolik
          byla hranice překročena. Každý výsledek proto patří k přesnému pravidlu, podle kterého byly události v
          měřeních vyhledány.
        </p>

        <p>
          Tento společný základ používají globální ukazatele sestavené z meteorologických stanic od práce{" "}
          <SourceLink id="DOI_10_3354_cr019193">Frich et al., 2002</SourceLink> přes analýzu{" "}
          <SourceLink id="DOI_10_1029_2005jd006290">Alexander et al., 2006</SourceLink> až po
          metodické srovnání <SourceLink id="DOI_10_1175_jcli_d_12_00383_1">Perkins a Alexander, 2013</SourceLink>.
          Stejnou stavbu, tedy hranici a minimální počet po sobě jdoucích dnů, mají také ukazatel nadměrného tepla
          navržený <SourceLink id="DOI_10_3390_ijerph120100227">Nairnem a Fawcettem, 2015</SourceLink>
          a víceúčelový globální archiv{" "}
          <SourceLink id="DOI_10_1038_sdata_2018_206">Sadegh et al., 2018</SourceLink>. Konkrétní
          hranice i požadovaná délka se mezi nimi liší. Slova „vlna veder“ proto sama o sobě ještě neurčují výpočet.
        </p>

        <h3>Dva způsoby určení hranice</h3>
        <p>
          Pevná hranice má v každém místě stejnou hodnotu. V české klimatologii je například tropický den dnem, kdy
          denní maximum dosáhne alespoň 30 °C. Počet tropických dnů je přímo srozumitelný, ale jednotlivý tropický den
          ještě nevytváří vícedenní událost. Pro vlnu veder musí být navíc určeno, kolik takových dnů má následovat bez
          přerušení. Přehled českých definic a měření zveřejňuje{" "}
          <SourceLink id="WEB_Cesky_hydrometeorologicky_us_Vlny_veder_v_historii_a_dnes_27ba4cfb">Český hydrometeorologický ústav</SourceLink>.
        </p>

        <p>
          Místní hranice se odvozuje zvlášť pro každou stanici nebo bod mapy a část roku. Často se používá 90.
          percentil: v referenčním období byla pro daný kalendářní den vyšší denní maxima přibližně v jedné desetině
          případů. Hranice tak může být jiná v Helsinkách, Praze a Aténách a současně se během roku mění. Tento způsob
          umožňuje srovnávat neobvykle teplá období vzhledem k místním podmínkám, nikoli stejnou absolutní teplotu ve
          všech oblastech. Podrobné vymezení používají například{" "}
          <SourceLink id="DOI_10_1175_jcli_d_12_00383_1">Perkins a Alexander, 2013</SourceLink>.
        </p>

        <h3>Den, noc a trvání</h3>
        <p>
          Hranici lze vztáhnout k dennímu maximu, minimu nebo průměru. Denní maximum zachycuje nejteplejší část dne,
          minimum vyjadřuje noční ochlazení a průměr spojuje celý den do jedné hodnoty. Perkins a Alexander proto
          vedle událostí z denních maxim porovnávali i události z minimálních teplot. Nairn a Fawcett používají
          třídenní průměr teploty a porovnávají jej jak s dlouhodobou místní hranicí, tak s předchozími třiceti dny.
          Výsledky těchto postupů odpovídají na příbuzné, ale odlišné otázky.{" "}
          <SourceLink id="DOI_10_1175_jcli_d_12_00383_1">Perkins a Alexander, 2013</SourceLink>;{" "}
          <SourceLink id="DOI_10_3390_ijerph120100227">Nairn a Fawcett, 2015</SourceLink>
        </p>

        <p>
          Také nejkratší délka mění počet nalezených událostí. Definice se třemi dny zachytí více krátkých případů než
          definice se šesti dny. Globální archiv GHWR proto zveřejnil souběžné výpočty pro 2, 3, 4, 5, 6, 7 a 10 po
          sobě jdoucích dnů a pro několik pevných i místních hranic. Nejde o sedm verzí téhož čísla, ale o záměrné
          měření citlivosti výsledku na volbu pravidla.{" "}
          <SourceLink id="DOI_10_1038_sdata_2018_206">Sadegh et al., 2018</SourceLink>
        </p>

        <h3>Standardní ukazatel WSDI</h3>
        <p>
          Mezinárodně používaný ukazatel WSDI počítá za rok všechny dny, které patří do období alespoň šesti po sobě
          jdoucích dnů s denním maximem nad místním 90. percentilem. Hranice se pro každý kalendářní den počítá z
          pětidenního okna v referenčním období, často z let 1961–1990. Výsledek má jednotku dnů za rok. WSDI tedy
          neudává počet událostí ani délku nejdelší z nich: dvě šestidenní události dávají 12 dnů stejně jako jedna
          dvanáctidenní. Definici zavedl soubor ukazatelů použitý v práci{" "}
          <SourceLink id="DOI_10_3354_cr019193">Frich et al., 2002</SourceLink> a současné provedení
          dokumentuje <SourceLink id="WEB_Met_Office_uzivatelska_prirucka_HadEX3_6eb86927">uživatelská příručka HadEX3</SourceLink>.
        </p>

        <h3>Co lze z jedné definice spočítat</h3>
        <p>
          Ze stejného seznamu událostí lze zveřejnit několik výsledků. Počet událostí říká, kolikrát byla podmínka
          splněna. Celkový počet dnů sečte všechny dny uvnitř událostí. Délka označuje nejdelší souvislou událost,
          vrchol její nejvyšší teplotu a průměrná intenzita obvyklé překročení hranice během započtených dnů.
          Kumulované teplo sčítá každé denní překročení hranice, takže roste současně s délkou i velikostí překročení.
          Tyto vlastnosti systematicky oddělili{" "}
          <SourceLink id="DOI_10_1175_jcli_d_12_00383_1">Perkins a Alexander, 2013</SourceLink> a
          pozdější globální analýza{" "}
          <SourceLink id="DOI_10_1038_s41467_020_16970_7">Perkins-Kirkpatrick a Lewis, 2020</SourceLink>.
        </p>

        <h2>Historie měření</h2>
        <p>
          Dlouhé záznamy denních maxim a minim vznikly později než měsíční průměry. Střední Anglie má souvislý
          soubor denní průměrné teploty od roku 1772, zatímco přímo použitelné denní maximum a minimum začíná rokem
          1878. Způsob sestavení a pozdější opravy tohoto historického souboru popsali{" "}
          <SourceLink id="DOI_10_1002_joc_3370120402">Parker et al., 1992</SourceLink> a{" "}
          <SourceLink id="DOI_10_1002_joc_1190">Parker a Horton, 2005</SourceLink>. Je to regionální
          měření, nikoli globální obraz, ale ukazuje, jak dlouhá musí být denní pozorování, chceme-li ve starších
          obdobích vyhledávat několikadenní teplotní události.
        </p>

        <p>
          První společný globální výpočet deseti ukazatelů teplotních a srážkových extrémů publikovali Frich a
          spoluautoři v roce 2002. Shromáždili přibližně 3 000 ročních záznamů vypočtených ze stanic pro období
          1946–1999; pokrytí bylo řídké zejména v Africe a části Jižní Ameriky.{" "}
          <SourceLink id="DOI_10_3354_cr019193">Frich et al., 2002</SourceLink> Alexander a
          spoluautoři pak v roce 2006 vytvořili globální mapy z větší sítě stanic a zveřejnili změny několika
          teplotních ukazatelů včetně WSDI.{" "}
          <SourceLink id="DOI_10_1029_2005jd006290">Alexander et al., 2006</SourceLink>
        </p>

        <p>
          V roce 2013 vznikl sjednocený rámec pro samostatné měření počtu událostí, dnů, délky a intenzity. V roce
          2018 přibyl globální archiv, v němž lze tutéž denní teplotu vyhodnotit více pravidly. HadEX3 zveřejněný v
          roce 2020 spojil staniční ukazatele do mřížky od roku 1901 do roku 2018; aktualizace metody z roku 2024
          doplnila zejména popis pokrytí, srovnání a nejistot. Dnešní verze HadEX3 3.0.4 zůstává uzavřeným historickým
          souborem končícím rokem 2018.{" "}
          <SourceLink id="DOI_10_1175_jcli_d_12_00383_1">Perkins a Alexander, 2013</SourceLink>;{" "}
          <SourceLink id="DOI_10_1038_sdata_2018_206">Sadegh et al., 2018</SourceLink>;{" "}
          <SourceLink id="DOI_10_1029_2019jd032263">Dunn et al., 2020</SourceLink>;{" "}
          <SourceLink id="DOI_10_1029_2023ea003279">Dunn et al., 2024</SourceLink>
        </p>

        <h2>Jak vzniká zveřejněný záznam</h2>
        <h3>Od teploměru k dennímu maximu a minimu</h3>
        <p>
          Meteorologická stanice měří teplotu vzduchu v radiačním krytu, zpravidla přibližně dva metry nad zemí. Z
          průběžných měření přístroj uchová nejvyšší a nejnižší hodnotu pozorovacího dne. Přesná hranice dne, typ
          krytu, čidlo a způsob odečtu patří k metadatům stanice. Doporučené přístroje, umístění a provoz popisuje{" "}
          <SourceLink id="WEB_World_Meteorological_Organiz_prirucka_WMO_c_8_f7933a04">
            příručka WMO č. 8
          </SourceLink>.
        </p>

        <p>
          Národní služby posílají denní souhrny do společných archivů. GHCN-Daily vybírá při překryvu zdrojů jednu
          preferovanou hodnotu a používá automatické kontroly rozsahu, vnitřní shody, opakovaných hodnot i neobvyklých
          rozdílů vůči okolním stanicím. Podezřelé údaje dostanou příznak kvality a původní hodnota zůstává dohledatelná.
          Změna stanice nebo přístroje se řeší podle metodiky konkrétního následného produktu; samotný GHCN-Daily není
          jedním globálně homogenizovaným výpočtem teplotních extrémů.{" "}
          <SourceLink id="DOI_10_1175_jtech_d_11_00103_1">Menne et al., 2012</SourceLink>
        </p>

        <h3>Místní hranice a souvislé události</h3>
        <p>
          U percentilové definice se nejprve pro každou stanici a kalendářní den vytvoří místní hranice. Okolní dny
          se spojují do pohyblivého okna, aby výpočet nestál jen na třiceti hodnotách stejného data. Potom algoritmus
          prochází den po dni a označí úseky, v nichž je hranice překročena požadovaný počet dnů bez přerušení. Z těchto
          úseků se spočítají události, dny, délka a zvolená míra intenzity.
        </p>

        <p>
          Percentil vypočtený z omezeného referenčního období má vlastní výběrovou nejistotu. Bez opravy by se stejná
          data použitá k určení hranice chovala statisticky jinak než roky před a po referenčním období. Zhang a
          spoluautoři proto zavedli opakovaný výběr hodnot, který omezuje umělý skok v ukazatelích založených na
          percentilech. Tento postup používají datové soubory ETCCDI včetně HadEX3.{" "}
          <SourceLink id="DOI_10_1175_jcli3366_1">Zhang et al., 2005</SourceLink>;{" "}
          <SourceLink id="DOI_10_1029_2019jd032263">Dunn et al., 2020</SourceLink>
        </p>

        <h3>Od stanic k mapě</h3>
        <p>
          HadEX3 neinterpoluje každou denní teplotu. Nejprve se na stanicích vypočítají roční ukazatele, například
          počet dnů WSDI, a teprve ty se převádějí do mřížky o velikosti 1,875° zeměpisné délky krát 1,25° šířky.
          Hodnota buňky je váženým průměrem dostupných stanic; váha klesá se vzdáleností. Pro výpočet musí být v
          dosahu, v němž spolu stanice ještě dostatečně souvisejí, alespoň tři použitelné stanice. Z přibližně 37 000
          dodaných stanic prošlo požadavky na kvalitu a délku pro jednotlivé teplotní ukazatele nejvýše asi 7 000.{" "}
          <SourceLink id="DOI_10_1029_2019jd032263">Dunn et al., 2020</SourceLink>;{" "}
          <SourceLink id="WEB_Met_Office_uzivatelska_prirucka_HadEX3_6eb86927">HadEX3 Product User Guide</SourceLink>
        </p>

        <p>
          Buňka bez potřebného počtu stanic zůstane prázdná. Globální křivka HadEX3 vzniká plošným vážením
          dostupných buněk a pro dlouhodobé srovnání používá buňky s alespoň 90% úplností v čase. Trendová mapa
          požaduje nejméně 66 % ročních hodnot a poslední platný rok alespoň 2009; trend se počítá jako medián sklonů
          mezi všemi dvojicemi ročních hodnot. Tečky v mapě označují buňky, kde 95% interval odhadu nezahrnuje nulu.
          Tato pravidla i mapy pokrytí zveřejnili{" "}
          <SourceLink id="DOI_10_1029_2019jd032263">Dunn et al., 2020</SourceLink>.
        </p>

        <h3>Co vytváří nejistotu</h3>
        <p>
          Výsledek ovlivňuje úplnost denních měření, změny stanice a čidla, délka referenčního období, zvolený
          percentil, minimální počet dnů i zeměpisné pokrytí. Krátká událost může po jediném chybějícím dni zmizet nebo
          se rozdělit na dvě. U globální mapy navíc záleží na tom, kde stanice existují a které buňky splní požadavek na
          úplnost. Zveřejněná práce proto musí uvést nejen sklon změny, ale i období, definici a pravidlo pokrytí.
          Citlivost na délku období podrobně vyhodnotili{" "}
          <SourceLink id="DOI_10_1038_s41467_020_16970_7">Perkins-Kirkpatrick a Lewis, 2020</SourceLink>.
        </p>

        <h2>Zveřejňovaná data</h2>
        <p>
          Následující soubory nejsou zaměnitelné. První dva zveřejňují denní teplotu, z níž lze události vypočítat.
          HadEX3 už obsahuje hotové roční ukazatele. ERA5 doplňuje měření fyzikálně souvislou rekonstrukcí atmosféry a
          GHWR nabízí mnoho hotových definic vedle sebe.
        </p>

        <div className="article-data-list">
          <section className="article-data-item">
            <h3>GHCN-Daily</h3>
            <p>
              <strong>Obsah:</strong> denní staniční měření; teplotní maximum a minimum jsou dostupné z více než 25 000
              míst. Celý archiv obsahuje přes 100 000 stanic, z nichž mnoho měří pouze srážky. <strong>Období:</strong>{" "}
              nejstarší maximum a minimum je z 2. ledna 1833; délka se liší podle stanice. <strong>Pokrytí:</strong>{" "}
              světová souš, velmi nerovnoměrně v místě i čase. <strong>Verze:</strong> GHCN-Daily v3, průběžné denní
              aktualizace a pravidelné přestavění archivu. <strong>Stažení:</strong>{" "}
              <SourceLink id="WEB_NOAA_Index_of_pub_data_ghcn_daily_96798b50">veřejné soubory NOAA</SourceLink>.{" "}
              <strong>Metoda:</strong> <SourceLink id="DOI_10_1175_jtech_d_11_00103_1">Menne et al., 2012</SourceLink>;{" "}
              <SourceLink id="DOI_10_7289_v5d21vhz">datový záznam a DOI</SourceLink>.
            </p>
          </section>

          <section className="article-data-item">
            <h3>E-OBS</h3>
            <p>
              <strong>Obsah:</strong> evropské denní mapy maximální a minimální teploty odvozené ze stanic; vedle
              nejlepšího odhadu zveřejňuje soubor 20 realizací pro prostorovou nejistotu. <strong>Období:</strong>{" "}
              1. ledna 1950 až 31. prosince 2025. <strong>Pokrytí:</strong> evropská souš v mřížce 0,1° nebo 0,25°.
              <strong> Verze:</strong> 33.0e, vydaná v květnu 2026. <strong>Stažení:</strong>{" "}
              <SourceLink id="WEB_Copernicus_E_OBS_data_access_94a6a7b1">portál E-OBS</SourceLink>.{" "}
              <strong>Metoda:</strong> <SourceLink id="DOI_10_1029_2017jd028200">Cornes et al., 2018</SourceLink>;{" "}
              <SourceLink id="DOI_10_24381_cds_151d3ec6">datový záznam</SourceLink>.
            </p>
          </section>

          <section className="article-data-item">
            <h3>HadEX3</h3>
            <p>
              <strong>Obsah:</strong> roční a měsíční staniční ukazatele 17 teplotních a 12 srážkových extrémů,
              převedené do globální mřížky; mezi nimi WSDI. <strong>Období:</strong> 1901–2018. <strong>Pokrytí:</strong>{" "}
              světová souš s prázdnými místy tam, kde chybějí vhodné stanice. <strong>Verze:</strong> 3.0.4, statický
              soubor s variantami pro referenční období 1961–1990 a 1981–2010. <strong>Stažení:</strong>{" "}
              <SourceLink id="WEB_Met_Office_Met_Office_Hadley_Centre_observations_datasets_dd07bd35">Met Office HadEX3</SourceLink>.{" "}
              <strong>Metoda:</strong> <SourceLink id="DOI_10_1029_2019jd032263">Dunn et al., 2020</SourceLink> a{" "}
              <SourceLink id="DOI_10_1029_2023ea003279">Dunn et al., 2024</SourceLink>.
            </p>
          </section>

          <section className="article-data-item">
            <h3>ERA5</h3>
            <p>
              <strong>Obsah:</strong> hodinový stav atmosféry, včetně teploty ve dvou metrech, vytvořený propojením
              předpovědního systému a mnoha druhů pozorování. <strong>Období:</strong> od roku 1940, průběžně doplňované.
              <strong> Pokrytí:</strong> celý svět; běžný výstup v mřížce 0,25°. <strong>Verze:</strong> pátá generace
              reanalýzy ECMWF. <strong>Stažení:</strong>{" "}
              <SourceLink id="WEB_Copernicus_ERA5_hourly_data_on_single_levels_from_1940_to_p_7e4f50d4">Copernicus Climate Data Store</SourceLink>.{" "}
              <strong>Metoda:</strong> <SourceLink id="DOI_10_1002_qj_3803">Hersbach et al., 2020</SourceLink>;{" "}
              <SourceLink id="DOI_10_24381_cds_adbb2d47">datový záznam</SourceLink>.
            </p>
          </section>

          <section className="article-data-item">
            <h3>Global Heatwave and Warm-Spell Record</h3>
            <p>
              <strong>Obsah:</strong> denní označení událostí a roční souhrny pro mnoho kombinací denního maxima,
              minima či průměru, pevných i místních hranic a délky 2 až 10 dnů. <strong>Období:</strong> 1979–2017.
              <strong> Pokrytí:</strong> světová souš v mřížce 0,5°, odvozená z denních dat CPC. <strong>Verze:</strong>{" "}
              statický výzkumný archiv publikovaný v roce 2018. <strong>Stažení:</strong>{" "}
              <SourceLink id="DOI_10_6084_m9_figshare_c_4004668">Figshare</SourceLink>.{" "}
              <strong>Metoda:</strong> <SourceLink id="DOI_10_1038_sdata_2018_206">Sadegh et al., 2018</SourceLink>.
            </p>
          </section>
        </div>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/heatwaves/hadex3-wsdi-timeseries.png"
            alt="Roční odchylka počtu dnů WSDI nad světovou souší v souborech HadEX3, HadEX2, HadEX a GHCNDEX od roku 1901 do roku 2018"
            width={2000}
            height={1336}
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption>
            Roční odchylka ukazatele WSDI nad pokrytou světovou souší v počtu dnů vůči průměru let 1961–1990. Černá
            je HadEX3, červená HadEX2, zelená starší HadEX a modrá GHCNDEX. Každá křivka používá vlastní dostupné
            buňky, takže rozdíly nejsou pouze rozdíly v teplotě; mění se také vstupní stanice a pokrytí. HadEX3 pro
            globální výpočet vybírá buňky s alespoň 90% úplností a váží je podle plochy. Všechny čtyři výpočty v době
            společného pokrytí zachycují vzestup od konce 20. století, jednotlivé roky i velikost odchylky se liší.
            Zdroj: <SourceLink id="WEB_Met_Office_Met_Office_Hadley_Centre_observations_datasets_b4e2ac85">Met Office HadEX3</SourceLink>,
            původní graf beze změny, Open Government Licence v3.0.
          </figcaption>
        </figure>

        <h2>Jaké výsledky lze srovnávat</h2>
        <p>
          Přímé srovnání vyžaduje stejnou teplotní veličinu, hranici, referenční období, minimální délku, roční období,
          prostor a výslednou míru. Šestidenní WSDI nelze číselně zaměnit s počtem třídenních událostí. Počet
          tropických dnů v celé České republice nelze zaměnit s délkou nejdelší události na jedné stanici. Nejvyšší
          denní maximum léta zase měří jeden den, nikoli trvání vlny.
        </p>

        <p>
          Shodu lze posuzovat i mezi rozdílnými výpočty, pokud je přesně řečeno, co se srovnává. Perkins a Alexander
          zjistili, že výsledky z denních maxim, denních minim a ukazatele nadměrného tepla se v mnoha oblastech
          shodují ve směru dlouhodobých změn, avšak liší se v počtu nalezených dnů a v zeměpisném rozložení. GHWR
          ukazuje totéž systematicky: změna délky nebo hranice mění události, které do souboru vstoupí.{" "}
          <SourceLink id="DOI_10_1175_jcli_d_12_00383_1">Perkins a Alexander, 2013</SourceLink>;{" "}
          <SourceLink id="DOI_10_1038_sdata_2018_206">Sadegh et al., 2018</SourceLink>
        </p>

        <h2 id="pozorovani">Pozorování</h2>
        <h3>Dlouhá teplá období nad světovou souší</h3>
        <p>
          Staniční výpočty ukazují, že od konce 20. století přibývá nad většinou dostatečně pokryté světové souše dnů,
          které patří do alespoň šestidenních období nad místním 90. percentilem denního maxima. Globální křivky
          HadEX3, HadEX2, HadEX a GHCNDEX se liší použitými stanicemi a pokrytím, ale ve společných desetiletích
          zachycují stejný pozdní vzestup WSDI. Mapa HadEX3 pro období označené v grafu jako 1950–2018 ukazuje kladné
          sklony ve většině dostupných buněk Evropy, Asie, Střední a Jižní Ameriky a Austrálie.{" "}
          <SourceLink id="DOI_10_1029_2019jd032263">Dunn et al., 2020</SourceLink>
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/heatwaves/hadex3-wsdi-trend.png"
            alt="Mapa sklonu ročního počtu dnů WSDI na světové souši v HadEX3 pro období 1950 až 2018"
            width={2000}
            height={1336}
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption>
            Změna ročního počtu dnů WSDI v HadEX3 za desetiletí pro období označené v grafu jako 1950–2018. Červené
            odstíny znamenají více dnů za desetiletí, modré méně; stupnice je nelineární a její hodnoty jsou uvedeny
            pod mapou. Tečky označují buňky, kde 95% interval odhadu sklonu nezahrnuje nulu. Bílá pevnina nemá
            dostatečné staniční pokrytí: pro mapu je potřeba alespoň 66 % ročních hodnot a poslední platný rok nejdříve
            2009. Prázdná oblast proto neznamená nulovou změnu. Zdroj:{" "}
            <SourceLink id="WEB_Met_Office_Met_Office_Hadley_Centre_observations_datasets_b4e2ac85">Met Office HadEX3</SourceLink>, původní
            graf beze změny, Open Government Licence v3.0.
          </figcaption>
        </figure>

        <h3>Počet dnů, délka a kumulované teplo se nemění stejně</h3>
        <p>
          Perkins-Kirkpatrick a Lewis vyhodnotili denní maxima nad místním 90. percentilem po dobu alespoň tří dnů v
          pětiměsíční teplé sezóně. V období 1950–2017 se počet dnů ve vlnách zvyšoval ve většině sledovaných oblastí
          alespoň o jeden den za desetiletí; v mnoha nízkých zeměpisných šířkách činil sklon tři až pět dnů za
          desetiletí. V žádné z hodnocených oblastí nezjistili statisticky průkazný pokles tohoto počtu. Nejdelší
          událost se podle oblasti prodlužovala přibližně o 0,2 až více než jeden den za desetiletí.{" "}
          <SourceLink id="DOI_10_1038_s41467_020_16970_7">Perkins-Kirkpatrick a Lewis, 2020</SourceLink>
        </p>

        <p>
          Kumulované teplo, tedy součet každého překročení hranice během všech započtených dnů, mělo průkazný kladný
          sklon ve všech hodnocených oblastech kromě střední části Severní Ameriky. Naproti tomu průměrné překročení
          hranice během jednoho započteného dne se ve většině oblastí průkazně neměnilo. Výsledek je důležitý pro čtení
          slov „silnější vlna“: celkové zatížení událostí může růst hlavně tím, že přibývají nebo se prodlužují horké
          dny, i když se jejich průměrné překročení hranice mění méně.{" "}
          <SourceLink id="DOI_10_1038_s41467_020_16970_7">Perkins-Kirkpatrick a Lewis, 2020</SourceLink>
        </p>

        <p>
          Stejná práce ukázala citlivost sklonu na zvolené počáteční datum. Ve Středomoří byl sklon počtu dnů do roku
          2017 něco přes dva dny za desetiletí při začátku v roce 1950, ale 6,4 dne za desetiletí při začátku na
          počátku osmdesátých let. Kratší interval zachytil jinou část kolísání a měl méně roků. Sklon proto vždy
          uvádíme s oběma krajními roky; samotná hodnota „dnů za desetiletí“ není úplným výsledkem.{" "}
          <SourceLink id="DOI_10_1038_s41467_020_16970_7">Perkins-Kirkpatrick a Lewis, 2020</SourceLink>
        </p>

        <h3>Evropa</h3>
        <p>
          Rousi a spoluautoři vyhledali v ERA5 události v červenci a srpnu 1979–2020. Denní maximum muselo překročit
          místní 90. percentil nejméně šest dnů po sobě a souvislá zasažená plocha musela mít alespoň 40 000 km². Pro
          evropskou oblast 35–70° severní šířky a 10° západní až 50° východní délky zjistili průměrný sklon 0,61 dne
          ve vlnách za desetiletí. Ve zbytku severních středních zeměpisných šířek činil 0,21 dne za desetiletí.
          Kumulované překročení hranice mělo odpovídající sklony 1,69 °C a 0,44 °C za desetiletí. Čísla patří k této
          prostorové a šestidenní definici; třídenní varianta je ve studii uvedena zvlášť.{" "}
          <SourceLink id="DOI_10_1038_s41467_022_31432_y">Rousi et al., 2022</SourceLink>
        </p>

        <p>
          Jiný evropský výsledek sleduje jediný nejteplejší den léta. Vautard a spoluautoři porovnali ERA5 a E-OBS
          pro západní Evropu mezi 5° západní a 15° východní délky a 45–55° severní šířky v letech 1950–2022. Nejvyšší
          letní denní maximum se v obou souborech měnilo o 3,4 °C na každý stupeň změny globální průměrné teploty;
          uvedený interval byl 2,4–4,3 °C. Toto číslo popisuje teplotu jednoho nejteplejšího dne v létě, nikoli počet
          ani trvání vln veder. Jeho zařazení ukazuje, proč je třeba nejteplejší den a vícedenní událost držet odděleně.{" "}
          <SourceLink id="DOI_10_1038_s41467_023_42143_3">Vautard et al., 2023</SourceLink>
        </p>

        <h3>Česká republika</h3>
        <p>
          Analýza 133 homogenizovaných českých stanic z let 1961–2020 zjistila statisticky průkazné kladné sklony
          absolutních maxim i minim a také počtu letních dnů, tropických dnů, tropických nocí, dnů ve vlnách veder a
          dnů s teplou odchylkou. Autoři zveřejnili výsledky pro jednotlivé stanice a typy cirkulace; tvrzení se tedy
          neopírá o jedinou městskou stanici ani o jeden teplý rok.{" "}
          <SourceLink id="DOI_10_1002_joc_7505">Zahradníček et al., 2022</SourceLink>
        </p>

        <p>
          Aktuální souhrn ČHMÚ dovoluje číst pevnou hranici 30 °C přímo v počtu dnů. Plošný průměr pro Českou
          republiku činil 5 tropických dnů za rok v období 1961–1990, přibližně 11 v letech 1991–2020 a více než 13 v
          letech 2011–2025. Rok 2024 měl v průměru 18,5 tropického dne a rok 2015 téměř 26. V srpnu 2015 byl tropický
          den alespoň na jedné stanici šestnáct dnů v řadě; nejdelší souvislý úsek na jedné stanici měl čtrnáct dnů.
          Plošný průměr, výskyt někde na území a jediná stanice jsou tři různé souhrny a ČHMÚ je proto uvádí odděleně.{" "}
          <SourceLink id="WEB_Cesky_hydrometeorologicky_us_Vlny_veder_v_historii_a_dnes_27ba4cfb">ČHMÚ, 2026</SourceLink>
        </p>

        <h3>Co v mapách zůstává neznámé</h3>
        <p>
          Globální staniční mapy mají nejúplnější pokrytí od druhé poloviny 20. století v Severní Americe, Evropě,
          části Asie a Austrálii. Rozsáhlé části Afriky, Jižní Ameriky a vnitrozemí Asie mají kratší nebo řidší záznamy.
          HadEX3 v takových místech hodnotu nezveřejní, pokud nesplní minimální počet stanic a úplnost. ERA5 poskytne
          souvislou mapu i tam, ale je to reanalýza propojující pozorování s výpočtem atmosféry. Shodný směr ve více
          souborech je proto užitečná kontrola; ani souvislá mapa však nenahrazuje údaj o vstupních měřeních a použité
          definici.{" "}
          <SourceLink id="DOI_10_1029_2019jd032263">Dunn et al., 2020</SourceLink>;{" "}
          <SourceLink id="DOI_10_1002_qj_3803">Hersbach et al., 2020</SourceLink>
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            Od poloviny 20. století přibylo ve většině sledovaných oblastí souše dnů ve vlnách veder, nejdelší
            události se prodloužily a vzrostlo jejich kumulované teplo. V letech 1950–2017 se jejich počet ve většině
            oblastí zvyšoval alespoň o jeden den za desetiletí a v mnoha nízkých zeměpisných šířkách o tři až pět dnů.
            Nejdelší události se podle oblasti prodlužovaly přibližně o 0,2 až více než jeden den za desetiletí. V
            Evropě se v letech 1979–2020 počet dnů v dlouhých vlnách zvyšoval v průměru o 0,61 dne za desetiletí,
            zatímco ve zbytku severních středních šířek o 0,21 dne. V České republice vzrostl průměrný počet tropických
            dnů z pěti ročně v období 1961–1990 na přibližně jedenáct v letech 1991–2020 a více než třináct v období
            2011–2025; rok 2024 měl v plošném průměru 18,5 tropického dne.
          </p>
        </div>

        <h2>Prameny a data</h2>
        <div className="article-source-groups">
          <section>
            <h3>Definice a metodické práce</h3>
            <ul>
              <li><SourceLink id="DOI_10_3354_cr019193">Frich et al., 2002: první globální soubor deseti ukazatelů extrémů</SourceLink></li>
              <li><SourceLink id="DOI_10_1175_jcli3366_1">Zhang et al., 2005: výpočet percentilů uvnitř referenčního období</SourceLink></li>
              <li><SourceLink id="DOI_10_1175_jcli_d_12_00383_1">Perkins a Alexander, 2013: jednotné měření vlastností vln veder</SourceLink></li>
              <li><SourceLink id="DOI_10_3390_ijerph120100227">Nairn a Fawcett, 2015: ukazatel nadměrného tepla</SourceLink></li>
              <li><SourceLink id="DOI_10_1038_sdata_2018_206">Sadegh et al., 2018: více definic v archivu GHWR</SourceLink></li>
              <li><SourceLink id="DOI_10_1175_jtech_d_11_00103_1">Menne et al., 2012: sestavení a kontrola GHCN-Daily</SourceLink></li>
            </ul>
          </section>

          <section>
            <h3>Historické a globální staniční práce</h3>
            <ul>
              <li><SourceLink id="DOI_10_1002_joc_3370120402">Parker et al., 1992: denní teplota ve střední Anglii od roku 1772</SourceLink></li>
              <li><SourceLink id="DOI_10_1002_joc_1190">Parker a Horton, 2005: nejistoty maxim a minim od roku 1878</SourceLink></li>
              <li><SourceLink id="DOI_10_1029_2005jd006290">Alexander et al., 2006: globální změny denních extrémů</SourceLink></li>
              <li><SourceLink id="DOI_10_1029_2019jd032263">Dunn et al., 2020: vznik HadEX3</SourceLink></li>
              <li><SourceLink id="DOI_10_1029_2023ea003279">Dunn et al., 2024: aktualizace a hodnocení HadEX3</SourceLink></li>
            </ul>
          </section>

          <section>
            <h3>Současná pozorování</h3>
            <ul>
              <li><SourceLink id="DOI_10_1038_s41467_020_16970_7">Perkins-Kirkpatrick a Lewis, 2020: globální počet, délka a kumulované teplo 1950–2017</SourceLink></li>
              <li><SourceLink id="DOI_10_1038_s41467_022_31432_y">Rousi et al., 2022: evropské vlny veder 1979–2020</SourceLink></li>
              <li><SourceLink id="DOI_10_1038_s41467_023_42143_3">Vautard et al., 2023: nejteplejší letní dny v západní Evropě</SourceLink></li>
              <li><SourceLink id="DOI_10_1002_joc_7505">Zahradníček et al., 2022: české teplotní extrémy 1961–2020</SourceLink></li>
              <li><SourceLink id="WEB_Cesky_hydrometeorologicky_us_Vlny_veder_v_historii_a_dnes_27ba4cfb">ČHMÚ, 2026: tropické dny a souvislé události v České republice</SourceLink></li>
            </ul>
          </section>

          <section>
            <h3>Datové portály</h3>
            <ul>
              <li><SourceLink id="WEB_NOAA_Global_Historical_Climatology_Network_daily_GHCN_14491e06">GHCN-Daily: popis</SourceLink> a <SourceLink id="WEB_NOAA_Index_of_pub_data_ghcn_daily_96798b50">soubory ke stažení</SourceLink></li>
              <li><SourceLink id="WEB_Copernicus_E_OBS_data_access_94a6a7b1">E-OBS v33.0e: evropské denní mapy</SourceLink></li>
              <li><SourceLink id="WEB_Met_Office_Met_Office_Hadley_Centre_observations_datasets_dd07bd35">HadEX3 v3.0.4: mřížkované ukazatele a pomocná data</SourceLink></li>
              <li><SourceLink id="WEB_Copernicus_ERA5_hourly_data_on_single_levels_from_1940_to_p_7e4f50d4">ERA5: hodinová reanalýza</SourceLink></li>
              <li><SourceLink id="DOI_10_6084_m9_figshare_c_4004668">GHWR: více metod určení vln veder</SourceLink></li>
              <li><SourceLink id="WEB_Cesky_hydrometeorologicky_us_Index_of_meteorology_climate_historical_csv_13ecfbd3">ČHMÚ: otevřená historická staniční data v CSV</SourceLink></li>
            </ul>
          </section>

          <section>
            <h3>Obrazy a podmínky použití</h3>
            <ul>
              <li>
                Oba grafy pocházejí z{" "}
                <SourceLink id="WEB_Met_Office_Met_Office_Hadley_Centre_observations_datasets_b4e2ac85">oficiální stránky HadEX3</SourceLink>
                a zobrazují ukazatel WSDI z verze 3.0.4. Met Office je zpřístupňuje pod{" "}
                <SourceLink id="WEB_Met_Office_Met_Office_Hadley_Centre_observations_datasets_cdb0d8ce">Open Government Licence v3.0</SourceLink>.
                Soubory jsou převzaty beze změny; české vysvětlení barev, výběru buněk a omezení je doplněno v
                popiscích této stránky.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
