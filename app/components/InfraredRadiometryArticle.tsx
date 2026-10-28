import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function InfraredRadiometryArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak ze záření zjistíme teplotu</h2>
        <p className="article-prose__intro">
          Pasivní infračervená radiometrie je měření přirozeného infračerveného záření,
          ze kterého odvozujeme teplotu povrchu, oblaků nebo atmosféry. Přístroj přijímá
          záření přicházející ze sledovaného místa. Označení pasivní znamená, že k němu
          nevysílá vlastní měřicí paprsek. Postup si vysvětlíme na přístroji TIRS,
          tepelném infračerveném senzoru družice Landsat 8, a na určení teploty
          zemského povrchu.{" "}
          <SourceLink id="WEB_NASA_TIRS">(NASA: Thermal Infrared Sensor)</SourceLink>
        </p>

        <h3>Co spojuje teplotu se zářením</h3>
        <p>
          Půda, voda i listy rostlin vydávají tepelné záření. Při teplotách běžných
          na zemském povrchu připadá velká část tohoto záření na infračervené vlnové
          délky, které lidské oko nevidí. Vlnová délka je vzdálenost mezi sousedními
          vrcholy elektromagnetické vlny. Povrch tak vyzařuje ve dne i v noci.
          Tepelný snímek využívá právě toto vlastní vyzařování. V článku o{" "}
          <Link href="/metody/opticke-a-multispektralni-snimkovani">optickém a multispektrálním snímkování</Link>{" "}
          jsme naproti tomu sledovali sluneční světlo odražené od povrchu.{" "}
          <SourceLink id="WEB_NASA_TIRS">(NASA: princip tepelného snímkování)</SourceLink>
        </p>
        <p>
          Pro převod záření na teplotu potřebujeme známý vztah. Poskytuje jej Planckův
          zákon pro černé těleso. Tak nazýváme ideální těleso, které pohltí veškeré
          dopadající záření a jehož vlastní vyzařování je určeno teplotou.
          Planckův zákon říká, kolik záření při dané teplotě připadá na jednotlivé
          vlnové délky. Při oteplení přibývá záření i v pásmu, které sleduje
          náš přístroj. Když tento vztah obrátíme, můžeme z naměřeného záření
          určit odpovídající teplotu.{" "}
          <SourceLink id="DOI_10_1002_andp_19013090310">(Planck 1901)</SourceLink>
        </p>
        <p>
          Skutečný povrch porovnáváme s černým tělesem pomocí emisivity. Emisivita
          vyjadřuje, jaký podíl jeho vyzařování povrch při stejné teplotě vydává
          v daném pásmu a směru. Její hodnota leží mezi nulou a jedničkou.
          Když emisivitu známe, můžeme oddělit vliv teploty od vlivu materiálu.
          Proto družicové zpracování potřebuje vedle samotného měření záření
          také informaci o vyzařovacích vlastnostech sledovaného povrchu.{" "}
          <SourceLink id="WEB_USGS_C2_Surface_Temperature">(USGS: emisivita v produktu povrchové teploty)</SourceLink>
        </p>

        <h3>Jak přístroj zachytí infračervené záření</h3>
        <p>
          Landsat 8 pořizuje tepelné snímky po řádcích. Dalekohled soustřeďuje záření
          na soustavu drobných detektorů, z nichž každý sleduje malou část povrchu.
          Pohyb družice přivádí do zorného pole další místa, takže postupně vzniká
          dvourozměrný obraz. Detektory TIRS snímají ze směru přímo pod družicí
          povrch s prostorovým rozlišením přibližně 100 metrů.{" "}
          <SourceLink id="2019_USGS_Landsat8_Handbook">(USGS: příručka Landsatu 8, oddíl 2.3)</SourceLink>
        </p>
        <p>
          Před detektory jsou filtry, které propustí pouze vybrané vlnové délky.
          Pro zde vysvětlovaný produkt používá americká geologická služba USGS
          pásmo 10, přibližně od 10,6
          do 11,2 mikrometru. Mikrometr je miliontina metru. Toto pásmo
          leží v části infračerveného spektra, kterou za bezoblačné oblohy prochází
          podstatná část záření povrchu až k družici.{" "}
          <SourceLink id="WEB_NASA_TIRS">(NASA: pásma TIRS)</SourceLink>{" "}
          a <SourceLink id="2024_USGS_Landsat_C2_L2_Guide">(USGS: volba pásma pro povrchovou teplotu)</SourceLink>
        </p>
        <p>
          Detektor převádí dopadající záření na elektrický signál. V TIRS tuto práci
          vykonávají polovodičové vrstvy, ve kterých jsou elektrony vázány v určitých
          energetických stavech. Pohlcení infračerveného záření může elektronu dodat
          energii potřebnou k přechodu do stavu, ve kterém přispěje k elektrickému
          proudu. Více zachyceného záření tak vytváří větší signál. Elektronika jej
          změří a uloží jako číselný údaj pro příslušné místo v obrazu.{" "}
          <SourceLink id="WEB_NASA_TIRS">(NASA: polovodičové detektory TIRS)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/infrared-radiometry/tirs-testing.jpg" width={3327} height={2550} unoptimized
            alt="Technik v ochranném oděvu u přístroje TIRS a kalibračního vybavení po zkoušce v tepelné vakuové komoře NASA Goddard." />
          <figcaption>
            Přístroj TIRS pro budoucí Landsat 8 při pozemních zkouškách v NASA
            Goddard, 4. října 2011. Snímek zachycuje přístroj spolu s testovacím
            a kalibračním vybavením. Drobné detektory jsou uvnitř optické sestavy.
            Foto: NASA/Goddard/Bill Hrybyk.{" "}
            <SourceLink id="WEB_NASA_TIRS_Test_2011">Původ a popis fotografie</SourceLink>,{" "}
            <SourceLink id="WEB_NASA_Guidelines_for_using_NASA_Images_and_Media_Guide_e6f9e9e4">podmínky vzdělávacího použití NASA</SourceLink>.
          </figcaption>
        </figure>

        <h3>Jak signál dostane fyzikální význam</h3>
        <p>
          Vztah mezi číselným údajem detektoru a dopadajícím zářením se stanovuje
          kalibrací. Před vypuštěním se TIRS díval na kalibrační zdroj o známé teplotě
          a známé emisivitě. Z těchto dvou vlastností lze spočítat jeho vyzařování.
          Změnou teploty zdroje získali technici různé známé úrovně záření a k nim
          odpovídající odezvu každého detektoru. Tím vznikl převodní vztah pro
          následné měření Země. Použitý zdroj byl navázán na referenci amerického
          Národního institutu pro standardy a technologie.{" "}
          <SourceLink id="DOI_10_3390_rs6098803">(Montanaro a kol. 2014, oddíl 3)</SourceLink>
        </p>
        <p>
          Za letu přístroj střídá pohled na Zemi s pohledem na vlastní kalibrační
          zdroj a do volného kosmu. Pohled do kosmu pomáhá určit signál, který vzniká
          v samotném přístroji. Zdroj o sledované teplotě umožňuje kontrolovat jeho
          odezvu na známé záření. Pozemní zpracování tyto údaje využívá při převodu
          obrazu na fyzikální veličinu zvanou zář.{" "}
          <SourceLink id="DOI_10_3390_rs6098803">(Montanaro a kol. 2014, oddíl 4)</SourceLink>
        </p>
        <p>
          Zář vyjadřuje, jak silné záření přichází z určitého směru. Aby údaje
          nezávisely na velikosti dalekohledu a šířce jeho záběru, vztahujeme je
          k jednotce plochy a jednotce prostorového úhlu. Prostorový úhel popisuje
          velikost sledovaného kužele směrů a měří se ve steradiánech.
          TIRS navíc vybírá jen určité pásmo vlnových délek, takže používáme
          spektrální zář průměrovanou podle citlivosti tohoto pásma.{" "}
          <SourceLink id="2019_USGS_Landsat8_Handbook">(USGS: radiometrické veličiny, oddíl 5.3)</SourceLink>
        </p>
        <p>
          Výsledná jednotka je W/(m²·sr·µm). Watt znamená energii přenesenou
          za sekundu, metr čtvereční vztažnou plochu kolmou k paprsku, steradián
          prostorový úhel a mikrometr vlnový interval. Údaj tak můžeme porovnat
          s vyzařováním vypočteným ze stejného směru a pro stejné pásmo.
          Pro určení celkového přenosu energie přes plochu bychom ještě museli
          sečíst příspěvky z příslušných směrů a vlnových délek. Tím se zabývá
          <Link href="/metody/mereni-radiacnich-toku"> měření radiačních toků</Link>.{" "}
          <SourceLink id="2019_USGS_Landsat8_Handbook">(USGS: jednotky záře)</SourceLink>
        </p>

        <h3>Jak oddělíme povrch od atmosféry</h3>
        <p>
          K družici doputuje směs několika příspěvků. Povrch vydává vlastní záření
          a současně odráží část tepelného záření, které na něj dopadá z atmosféry.
          Cestou vzhůru atmosféra oba příspěvky zeslabí pohlcováním. Zároveň sama
          vyzařuje směrem k družici. Pro určení teploty povrchu potřebujeme tyto
          příspěvky rozlišit.{" "}
          <SourceLink id="DOI_10_3390_rs61111244">(Cook a kol. 2014, rovnice 7)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/infrared-radiometry/radiance-paths.svg" width={600} height={570} unoptimized
            style={{ maxWidth: "37.5rem", width: "100%", height: "auto", marginInline: "auto" }}
            alt="Vlastní vyzařování povrchu a odražené záření atmosféry procházejí zeslabující atmosférou. Ta k měření přidává vlastní záření směrem k družici." />
          <figcaption>
            Oranžová šipka sleduje vlastní vyzařování povrchu. Zelená ukazuje záření
            atmosféry odražené od povrchu a modrá přímý příspěvek atmosféry směrem
            k družici. Přerušované úseky připomínají zeslabení při průchodu vzduchem.
            Vlastní zjednodušené schéma pro bezoblačnou scénu podle{" "}
            <SourceLink id="DOI_10_3390_rs61111244">Cooka a kol. (2014)</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Atmosférické příspěvky počítá model přenosu záření. Dostane informaci,
          jak se nad sledovaným místem mění s výškou teplota vzduchu, jeho tlak
          a obsah vodní páry. Z vlastností plynů potom spočítá, jakou část záření
          atmosféra propustí a kolik sama vyzáří. Potřebný stav atmosféry poskytují
          meteorologické systémy NASA, které spojují pozorování s výpočtem
          vývoje atmosféry.
          Jde tedy o pomocný vstup do zpracování družicového obrazu.{" "}
          <SourceLink id="WEB_USGS_Atmospheric_Auxiliary">(USGS: atmosférické podklady pro jednotlivá období)</SourceLink>
        </p>
        <p>
          Vyzařovací vlastnosti povrchu dodává databáze emisivity odvozená z přístroje
          ASTER. Je to pokročilý družicový radiometr pro měření tepelného
          vyzařování a odrazu, který pracuje na družici Terra. Zpracování ji přizpůsobuje aktuálnímu
          vegetačnímu pokryvu podle optických pásem Landsatu. Tepelná a optická část
          měření tak mají odlišné úlohy: tepelná pásma zachytí záření potřebné
          k určení teploty, optická pomohou popsat povrch, který je vydává.{" "}
          <SourceLink id="WEB_USGS_C2_Surface_Temperature">(USGS: vstupy a úprava emisivity ASTER GED)</SourceLink>
        </p>
        <p>
          Máme nyní vše potřebné k oddělení příspěvků. Použijeme model
          neprůsvitného povrchu, který odražené záření rozptyluje do všech směrů.
          Pro bezoblačnou scénu a pásmo, ve kterém zanedbáme sluneční příspěvek,
          pak bilanci zapíšeme takto:
        </p>
        <Equation tex={String.raw`L = \tau\,[\varepsilon B(T) + (1-\varepsilon)D] + U`} />
        <p>
          <InlineMath tex="L" /> je zář naměřená u družice a <InlineMath tex="U" /> příspěvek
          atmosféry přímo směrem k ní. <InlineMath tex="D" /> označuje účinnou zář
          atmosféry dopadající na povrch, ze které model počítá odražený příspěvek.{" "}
          <InlineMath tex="B(T)" /> je zář černého tělesa při hledané teplotě <InlineMath tex="T" />.
          Všechny tyto záře patří ke stejnému pásmu a mají jednotku W/(m²·sr·µm).
          Teplotu <InlineMath tex="T" /> vyjadřujeme v kelvinech, na stupnici
          začínající absolutní nulou.{" "}
          <InlineMath tex={String.raw`\tau`} /> je propustnost atmosféry a <InlineMath tex={String.raw`\varepsilon`} /> emisivita,
          obě bez jednotky. Pro uvedený model je odražený podíl roven{" "}
          <InlineMath tex={String.raw`1-\varepsilon`} />.{" "}
          <SourceLink id="DOI_10_3390_rs61111244">(Cook a kol. 2014, oddíly 2.2 a 4.1)</SourceLink>
        </p>
        <p>
          Výpočet postupuje zpátky po cestě záření. Nejprve odečteme příspěvek
          atmosféry směrem k družici. Vydělením propustností obnovíme zář před
          průchodem atmosférou. Potom odečteme odražené záření oblohy.
          Zbývá vlastní vyzařování povrchu, které vydělením emisivitou převedeme
          na zář stejně teplého černého tělesa:
        </p>
        <Equation tex={String.raw`B(T)=\frac{(L-U)/\tau-(1-\varepsilon)D}{\varepsilon}`} />

        <h3>Od opravené záře k teplotní mapě</h3>
        <p>
          Teď už hledáme teplotu černého tělesa, které by vydávalo vypočtenou zář.
          Přesný převod zohledňuje citlivost přístroje uvnitř celého pásma.
          Pro názorný výpočet použijeme běžnou pásmovou aproximaci Planckova zákona
          s dvěma konstantami uvedenými v metadatech Landsatu:
        </p>
        <Equation tex={String.raw`T \approx \frac{K_2}{\ln(1+K_1/B)}`} />
        <p>
          <InlineMath tex="B" /> je právě získaná zář stejně teplého černého tělesa,{" "}
          <InlineMath tex="T" /> teplota v kelvinech a <InlineMath tex={String.raw`\ln`} /> přirozený
          logaritmus. <InlineMath tex="K_1" /> má stejnou jednotku jako zář
          a <InlineMath tex="K_2" /> jednotku kelvin. Jejich hodnoty patří konkrétnímu
          přístroji a pásmu. Stupně Celsia získáme odečtením 273,15 od teploty
          v kelvinech.{" "}
          <SourceLink id="2019_USGS_Landsat8_Handbook">(USGS: teplotní převod, oddíl 5.3.3)</SourceLink>
        </p>
        <p>
          Teplotním údajem můžeme vyjádřit i původní zář zachycenou u družice.
          Stejný převod aplikovaný přímo na tuto zář poskytuje
          takzvanou jasovou teplotu: teplotu černého tělesa, které by vytvořilo
          tento dosud neopravený signál.{" "}
          <SourceLink id="2019_USGS_Landsat8_Handbook">(USGS: převod záře na jasovou teplotu, oddíl 5.3.3)</SourceLink>
        </p>
        <p>
          Provedením celého postupu na jednotlivých místech vznikne mapa teploty
          povrchu v okamžiku přeletu. Nad vegetací se týká viditelných částí porostu,
          nad holou půdou jejího povrchu a nad vodou tenké povrchové vrstvy,
          ze které infračervené záření uniká. Teplota vzduchu několik metrů nad zemí
          je jiná veličina a získává se jiným měřením. Pro rozlišení těchto údajů
          je užitečný článek o <Link href="/pozorovani/gmst">globální teplotě u povrchu</Link>.{" "}
          <SourceLink id="WEB_USGS_C2_Surface_Temperature">(USGS: význam produktu)</SourceLink>{" "}
          a <SourceLink id="DOI_10_1038_s41597_019_0236_x">(Merchant a kol. 2019: teplota povrchové vrstvy oceánu)</SourceLink>
        </p>
        <p>
          Opakované teplotní mapy ukazují prostorové rozdíly v ohřívání krajiny
          a poskytují vstup do výpočtů její energetické a vodní bilance.
          Landsat se používá například ke sledování výparu a spotřeby vody
          v zemědělské krajině. Teplotní snímek do takového výpočtu přináší stav
          povrchu, další meteorologické údaje popisují podmínky výměny energie
          s okolím.{" "}
          <SourceLink id="WEB_NASA_TIRS">(NASA: účel a použití tepelného snímkování)</SourceLink>
        </p>

        <h3>Historie a další použití principu</h3>
        <p>
          Planck v roce 1901 publikoval vztah mezi teplotou a rozdělením záření
          mezi vlnové délky, který tvoří fyzikální základ tohoto převodu.
          Mezi raná použitelná družicová provedení patřil radiometr TIROS II,
          který od roku 1960 měřil mimo jiné záření v pásmu 8–12 mikrometrů.
          TIRS na Landsatu 8, vypuštěném v roce 2013, navázal na
          starší tepelné přístroje Landsatu a pořizuje obrazy ve dvou infračervených
          pásmech. Ve zde popsaném produktu USGS se pro povrchovou teplotu
          používá jedno z nich, pásmo 10.{" "}
          <SourceLink id="DOI_10_1002_andp_19013090310">(Planck 1901)</SourceLink>,{" "}
          <SourceLink id="1961_Hanel_Stroud_TIROS_II">(Hanel a Stroud 1961)</SourceLink>,{" "}
          <SourceLink id="DOI_10_3390_rs6098803">(Montanaro a kol. 2014)</SourceLink>{" "}
          a <SourceLink id="2024_USGS_Landsat_C2_L2_Guide">(USGS: Collection 2)</SourceLink>
        </p>
        <p>
          Nad oceánem dovoluje porovnání více tepelných pásem lépe rozlišit
          vyzařování hladiny od vlivu atmosféry. Merchant a kolegové tak z měření
          radiometrů na amerických a evropských družicích sestavili globální záznam teploty hladiny
          za roky 1981–2016. Využili přitom opakované snímky oceánu z několika
          postupně provozovaných přístrojů. Spojení jejich měření vyžadovalo sjednocení
          kalibrace, výběr bezoblačných pozorování a ošetření rozdílné denní doby
          přeletů. Výsledný záznam umožňuje zkoumat dlouhodobé změny i mořské
          vlny veder.{" "}
          <SourceLink id="DOI_10_1038_s41597_019_0236_x">(Merchant a kol. 2019)</SourceLink>
        </p>
        <p>
          Pro měření atmosféry se naopak vybírají také pásma, ve kterých plyny
          záření výrazně pohlcují a vydávají. Různá pásma mají odlišnou citlivost
          k různým výškovým vrstvám. Z jejich společného vyhodnocení lze odvodit
          průběh teploty s výškou. Systém CLIMCAPS, určený ke společnému vyhodnocování
          infračervených a mikrovlnných měření pro klimatické účely, takto vytváří
          teplotní profily. Neprůhledná oblaka zase poskytují záření ze své
          horní části. Výběrem pásma a způsobu zpracování tedy určujeme,
          kterou část systému povrch–atmosféra chceme poznat.{" "}
          <SourceLink id="WEB_NASA_CLIMCAPS_Temperature">(NASA/JPL: teplotní sondování)</SourceLink>
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Výsledek ovlivňuje kalibrace přístroje, znalost emisivity a atmosféry,
          přítomnost oblaků i směs různě teplých povrchů uvnitř měřeného místa.
          Cook a kolegové při raném ověření postupu na 32 bezoblačných snímcích
          Landsatu 8 zjistili u pásma 10 shodu s bójovými teplotami do 1,5 °C
          v 28 případech. Takové porovnání ukazuje dosaženou přesnost konkrétního
          provedení a podmínek. Číslo z této studie z roku 2014 není univerzální
          nejistotou dnešních teplotních map.{" "}
          <SourceLink id="DOI_10_3390_rs61111244">(Cook a kol. 2014, oddíl 5)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Podrobnosti o přesnosti a nezávislé kontrole</summary>
          <p>
            Kalibraci TIRS kontrolují vnitřní reference i pozemní měření nad vodními
            plochami. Pohled na vnitřní zdroj je zvlášť vhodný ke sledování stability.
            Pozemní porovnání zahrnuje také skutečnou cestu záření atmosférou.
            Právě taková kontrola pomohla odhalit záření, které do Landsatu 8 vstupovalo
            mimo zamýšlené zorné pole. Oprava tohoto rozptýleného záření vstoupila
            do zpracování v roce 2017, následovaly další kalibrační úpravy.
            Výsledky různých verzí zpracování proto rozlišujeme.{" "}
            <SourceLink id="WEB_USGS_TIRS_Calibration_Notices">(USGS: přehled změn kalibrace)</SourceLink>
          </p>
          <p>
            U citovaného testu z roku 2014 byl průměrný rozdíl teploty z pásma 10
            vůči bójím −0,56 K a směrodatná odchylka rozdílů 0,76 K. Rozdíl jednoho
            kelvinu je stejně velký jako rozdíl jednoho stupně Celsia. Bójové čidlo
            měřilo jiným fyzikálním postupem, jeho údaj však autoři upravovali
            z hloubky na povrchovou vrstvu vody. Pozemní reference tak měla vlastní
            nejistotu. Vývoj a ověření postupu navíc využívaly příbuzné atmosférické
            modely a bójové podklady. Studie neprokazuje nezávislost všech kroků
            ani přesnost nad každým typem pevninského povrchu.{" "}
            <SourceLink id="DOI_10_3390_rs61111244">(Cook a kol. 2014, oddíly 2, 4 a 5, tabulka 3)</SourceLink>
          </p>
          <p>
            Pro pevninu záleží zejména na emisivitě. Databáze ASTER představuje
            starší průměrné podmínky a její úprava podle vegetace může při změnách
            pokryvu selhávat. Kde emisivita chybí, chybí i výsledek. Oblaka povrch
            zakrývají a také blízkost oblaků může zhoršit atmosférickou korekci.
            Kontrolní vrstvy proto doprovázejí vlastní teplotu. Vrstva ST_QA
            udává odhad nejistoty pro jednotlivá místa. Jemný krok uložených
            čísel sám o sobě takovou přesnost nezaručuje.{" "}
            <SourceLink id="WEB_USGS_C2_Surface_Temperature">(USGS: známá omezení)</SourceLink>{" "}
            a <SourceLink id="2024_USGS_Landsat_C2_L2_Guide">(USGS: kontrolní vrstvy)</SourceLink>
          </p>
          <p>
            Tepelná data Landsatu 8 jsou převzorkována ze zhruba stometrového
            rozlišení do mřížky po 30 metrech. Sousední buňky této mřížky tedy
            nepředstavují samostatná třicetimetrová tepelná měření. Při sledování
            klimatu je navíc nutné pracovat s dobou přeletu a s tím, že bezoblačná
            pozorování nepokrývají všechny povětrnostní situace.{" "}
            <SourceLink id="2019_USGS_Landsat8_Handbook">(USGS: rozlišení a zpracování)</SourceLink>{" "}
            a <SourceLink id="DOI_10_1038_s41597_019_0236_x">(Merchant a kol. 2019: časový výběr)</SourceLink>
          </p>
          <p>
            Družicový záznam oceánské teploty má vůči bójím různou míru nezávislosti
            v různých obdobích. Merchant a kolegové pro roky 1981–1995 použili měření
            ve vodě jako kalibrační referenci ve velkém prostorovém měřítku.
            V pozdější části záznamu se opírali především o evropské radiometry
            sledující stejné místo ze dvou směrů,
            a nezávislost vůči bójím je proto větší.{" "}
            <SourceLink id="DOI_10_1038_s41597_019_0236_x">(Merchant a kol. 2019)</SourceLink>
          </p>
        </details>

        <h2>Příklad: teplota jednoho místa u Aletschského ledovce</h2>
        <p>
          Použijeme snímek Landsatu 8 z 20. srpna 2023, pořízený v 10:16:52 UTC
          nad švýcarskými Alpami. Vybereme stejné místo C s vegetačním pokryvem
          jako v článku o optickém snímkování. Nyní k jeho odraženému světlu
          přidáme tepelné měření. Pracujeme s veřejnými daty USGS Collection 2
          Level 2, která už obsahují kalibrovanou zář a vypočtené atmosférické
          i povrchové vstupy. Z nich zopakujeme závěrečné oddělení příspěvků
          a přibližný převod na teplotu.{" "}
          <SourceLink id="2023_Landsat_Aletsch_STAC">(konkrétní snímek)</SourceLink>{" "}
          a <SourceLink id="DOI_10_5066_P9OGBGM6">(datový soubor USGS)</SourceLink>
        </p>
        <figure className="article-figure">
          <div style={{ overflowX: "auto" }} tabIndex={0} role="region" aria-label="Porovnání optického obrazu a teplotní mapy, na malém displeji posuvné">
            <Image src="/media/infrared-radiometry/temperature-map.png" width={1440} height={1296} unoptimized
              style={{ minWidth: "34rem" }}
              alt="Stejný výřez Aletschského ledovce a okolí v odraženém světle a v teplotě povrchu. Bod C leží v jižní vegetované části výřezu." />
          </div>
          <figcaption>
            Vlevo obraz odraženého světla, vpravo hotová povrchová teplota USGS
            v okamžiku přeletu. Barvy vpravo vyjadřují stupně Celsia podle stupnice,
            šedě jsou vyřazená nebo chybějící teplotní data. Vyřazujeme označené
            oblaky, jejich okolní masku, cirry, stíny a příznaky saturace nebo
            zakrytí terénem. C označuje místo výpočtu. Vlastní zobrazení veřejných{" "}
            <SourceLink id="DOI_10_5066_P9OGBGM6">dat USGS</SourceLink>, výřez přibližně 10,2 × 17,9 km.
          </figcaption>
        </figure>
        <p>
          Pro bod C přečteme z doprovodných vrstev následující hodnoty. Zář u družice
          pochází z měření přístroje, atmosférické členy z modelu a emisivita
          z popisu povrchu. Čísla v tabulce už jsou převedena ze způsobu uložení
          na fyzikální hodnoty.{" "}
          <SourceLink id="2024_USGS_Landsat_C2_L2_Guide">(USGS: jednotky a měřítka vrstev)</SourceLink>
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" tabIndex={0} role="region" aria-label="Vstupy pro výpočet teploty bodu C">
            <table>
              <thead><tr><th>Veličina</th><th>Vrstva</th><th>Hodnota</th></tr></thead>
              <tbody>
                <tr><td>Zář u družice L</td><td>ST_TRAD</td><td>9,724 W/(m²·sr·µm)</td></tr>
                <tr><td>Příspěvek atmosféry vzhůru U</td><td>ST_URAD</td><td>1,907 W/(m²·sr·µm)</td></tr>
                <tr><td>Zář atmosféry k povrchu D</td><td>ST_DRAD</td><td>0,938 W/(m²·sr·µm)</td></tr>
                <tr><td>Propustnost atmosféry τ</td><td>ST_ATRAN</td><td>0,7333</td></tr>
                <tr><td>Emisivita ε</td><td>ST_EMIS</td><td>0,9850</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>
          Nejprve odečteme atmosférický příspěvek od záře u družice a výsledek
          vydělíme propustností. Potom odečteme odražené záření atmosféry
          a vydělíme emisivitou. První krok dává zář před průchodem atmosférou,
          se kterou pokračujeme dál:
        </p>
        <Equation tex={[
          String.raw`\frac{L-U}{\tau}=\frac{9{,}724-1{,}907}{0{,}7333}\approx10{,}6599`,
          String.raw`B=\frac{10{,}6599-0{,}0150\cdot0{,}938}{0{,}9850}`,
          String.raw`B\approx10{,}8081\,\mathrm{W/(m^2\,sr\,\mu m)}`,
        ]} />
        <p>
          Z metadat pásma 10 převezmeme konstanty <InlineMath tex="K_1" /> = 774,8853
          W/(m²·sr·µm) a <InlineMath tex="K_2" /> = 1321,0789 K. Přibližný převod
          záře na teplotu potom dává:
        </p>
        <Equation tex={[
          String.raw`T\approx\frac{1321{,}0789}{\ln(1+774{,}8853/10{,}8081)}\,\mathrm{K}`,
          String.raw`T\approx308{,}21\,\mathrm{K}=35{,}06\,{}^\circ\mathrm{C}`,
        ]} />
        <p>
          Dostáváme teplotu povrchu přibližně 35 °C. Hotový produkt USGS pro stejné
          místo uvádí 34,95 °C. Pokud bychom převod použili rovnou na zář u družice
          bez oddělení atmosféry a emisivity, vyšla by jasová teplota 27,74 °C.
          Rozdíl ukazuje, co nám přineslo zpracování: od teplotního vyjádření
          přijatého signálu jsme došli k odhadu teploty sledovaného povrchu.
          Jde o místní okamžitou hodnotu při jednom přeletu.
        </p>
        <details className="method-details">
          <summary>Data, přesný výběr a zopakování výpočtu</summary>
          <p>
            Produkt má identifikátor LC08_L2SP_195028_20230820_20230826_02_T1.
            Data jsme získali 27. října 2026 z distribuce Microsoft Planetary Computer.
            Metadata uvádějí zpracování LPGS 16.3.0 a teplotní algoritmus st_1.5.0.
            Atmosférický stav pro tento snímek poskytl systém NASA GEOS FP-IT.
            Bod C leží na 46,38256209° severní šířky a 8,05288608° východní délky.
            V původním rastru jde o řádek 2717 a sloupec 5609, počítané od nuly.
            Výběr navazuje na interpretaci optického snímku a nepředstavuje
            reprezentativní vzorek oblasti.{" "}
            <SourceLink id="2023_Landsat_Aletsch_STAC">Původní metadata a pásma</SourceLink>.
          </p>
          <p>
            Uložené celé hodnoty jsou 9724, 1907 a 938 pro tři záře, 7333 pro
            propustnost a 9850 pro emisivitu. Záře násobíme 0,001, propustnost
            a emisivitu 0,0001. Vrstva ST_B10 obsahuje 46546, takže oficiální
            teplota je 46546 × 0,00341802 + 149 = 308,09515892 K.
            Kontrolní údaj QA_PIXEL je 21824, příznaky chybějících dat, oblaků,
            cirrů a stínu jsou nulové. QA_RADSAT je také nula. Nejbližší označený
            oblak je podle ST_CDIST vzdálen 2,42 km. Vrstva ST_QA obsahuje hodnotu
            252, tedy odhad nejistoty 2,52 K.{" "}
            <SourceLink id="2024_USGS_Landsat_C2_L2_Guide">(USGS: formát a příznaky)</SourceLink>
          </p>
          <p>
            Náš ruční výpočet používá zaokrouhlené mezivýsledky z veřejných vrstev
            a pásmovou aproximaci s konstantami z metadat. Produkční převod
            zohledňuje spektrální odezvu pásma pomocí převodní tabulky.
            Rozdíl přibližně 0,12 K vůči hotovému produktu zde slouží ke kontrole
            výpočtu, nikoli jako nezávislé ověření teploty. Sdílíme s produktem
            vstupy a neopakujeme předchozí kalibraci ani atmosférické modelování.{" "}
            <SourceLink id="DOI_10_3390_rs61111244">(Cook a kol. 2014: pásmové veličiny a převodní tabulka)</SourceLink>
          </p>
          <p>
            Ke stažení jsou <a href="/data/methods/infrared-radiometry/sample.csv">číselné vstupy bodu C</a>,{" "}
            <a href="/data/methods/infrared-radiometry/aletsch-thermal.tif">výřez deseti tepelných a kontrolních vrstev</a>,{" "}
            <a href="/data/methods/infrared-radiometry/example.json">původ, nastavení a kontrolní otisky souborů</a>{" "}
            a <a href="/data/methods/optical-imaging/source-MTL.txt">původní metadata snímku</a>.
            Výpočet zopakuje <a href="/data/methods/infrared-radiometry/reproduce.py">skript reproduce.py</a>{" "}
            ve standardním Pythonu, uložený vedle dat a metadat. Pro opětovné
            stažení stejných výřezů slouží <a href="/data/methods/infrared-radiometry/download.py">download.py</a>.{" "}
            <a href="/data/methods/infrared-radiometry/plot.py">Skript grafu</a> využívá také{" "}
            <a href="/data/methods/optical-imaging/aletsch-20230820.tif">dříve zveřejněná optická pásma</a>.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Teplota povrchu ovlivňuje jeho tepelné vyzařování. Infračervený radiometr
            toto záření změří a propojí je s popisem povrchu a atmosféry. Z jednotlivých
            měření tak vzniká teplotní mapa, kterou lze porovnávat mezi místy i
            obdobími.
          </p>
          <p>
            Infračervená radiometrie umožňuje mapovat teplotu pevniny, oceánské hladiny
            a oblaků. Vhodná pásma zpřístupňují také teplotní profily atmosféry.
            Družicový přístroj TIRS na Landsatu 8 rozlišuje na povrchu podrobnosti o
            velikosti přibližně 100 m, což umožňuje sledovat rozdíly mezi částmi krajiny
            i města.{" "}
            <SourceLink id="WEB_NASA_TIRS">(NASA: TIRS)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
