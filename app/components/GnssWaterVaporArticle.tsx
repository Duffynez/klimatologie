import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function GnssWaterVaporArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak navigační signál měří vodní páru</h2>
        <p className="article-prose__intro">
          Pozemní měření vodní páry pomocí GNSS určuje množství páry v celém sloupci
          vzduchu nad stanicí podle zpoždění rádiových signálů navigačních družic.
          GNSS je zkratka pro globální družicové navigační systémy
          (Global Navigation Satellite Systems), mezi které patří například GPS.
          Přijímač stojí na pevném místě a průběžně sleduje několik družic.
          Změny atmosféry se projeví v průchodu jejich signálů.{" "}
          <SourceLink id="DOI_10_1029_92jd01517">(Bevis a kol. 1992)</SourceLink>
        </p>
        <p>
          Výsledkem je takzvaná srážitelná voda. Představme si, že bychom všechnu
          páru ze svislého sloupce vzduchu proměnili v kapalinu a nechali ji na jeho
          základně. Výška vzniklé vrstvy vody v milimetrech vyjadřuje její množství.
          Jeden milimetr odpovídá jednomu kilogramu vody nad čtverečním metrem.
          Tato veličina popisuje zásobu vodní páry v atmosféře. Vlhkoměr u země
          naproti tomu zjišťuje vlhkost vzduchu v místě svého čidla.{" "}
          <SourceLink id="DOI_10_1029_2006JD007529">(Wang a kol. 2007, úvod)</SourceLink>
        </p>

        <h3>Proč vzduch mění průchod signálu</h3>
        <p>
          Rádiový signál je elektromagnetická vlna. Její elektrické pole působí
          na náboje v molekulách vzduchu a odezva molekul mění rychlost jejího šíření.
          V neutrální atmosféře, tedy ve vzduchu podstatně neovlivněném volnými
          elektrony, se signál šíří o něco pomaleji než ve vakuu. K přijímači
          proto dorazí později, než by odpovídalo samotné vzdálenosti družice.{" "}
          <SourceLink id="DOI_10_1029_92jd01517">(Bevis a kol. 1992)</SourceLink>
        </p>
        <p>
          Vodní pára se na této odezvě podílí zvlášť výrazně. Molekula vody má
          nerovnoměrně rozložený elektrický náboj, takže se v elektrickém poli
          může natáčet. Tato vlastnost zesiluje její účinek na rádiovou vlnu.
          Více vodní páry proto při stejné teplotě znamená větší příspěvek
          ke zpoždění. Právě tento vztah umožňuje využít navigační signály
          k měření vody v atmosféře.{" "}
          <SourceLink id="DOI_10_1029_92jd01517">(Bevis a kol. 1992)</SourceLink>
        </p>
        <p>
          Zpoždění se obvykle zapisuje jako délka. Čas, o který signál přijde
          později, se vynásobí rychlostí světla ve vakuu. Dostaneme tak údaj,
          o kolik delší by se cesta signálu jevila při výpočtu bez atmosféry.
          Zpoždění uvedené v milimetrech tedy vyjadřuje účinek vzduchu na signál.
          Milimetry srážitelné vody získáme až následným převodem.{" "}
          <SourceLink id="DOI_10_1029_2006JD007529">(Wang a kol. 2007, rovnice 1)</SourceLink>
        </p>

        <h3>Co zaznamenává pozemní stanice</h3>
        <p>
          Pro podrobný výklad zvolíme stálou geodetickou stanici, tedy stanici
          určenou k přesnému sledování polohy. Její přijímač měří na dvou
          rádiových frekvencích. Anténa je upevněna na stabilní
          konstrukci a přijímá signály z různých částí oblohy. Měření doplňují
          meteorologické údaje, především tlak. Takové uspořádání používá
          například síť SuomiNet, vybudovaná pro výzkum atmosféry.{" "}
          <SourceLink id="DOI_Ware_2000_SuomiNet">(Ware a kol. 2000)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" unoptimized src="/media/gnss-water/p711-station.jpg" width={1800} height={1198}
            alt="Stanice P711 v Yellowstonu: anténa pod šedým krytem na pevné konstrukci, vpravo solární panely." />
          <figcaption>
            Stálá stanice GPS P711 u Madison Campground v Yellowstonu.
            Anténa je pod šedým zaobleným krytem, který ji chrání před počasím.
            Vpravo jsou solární panely pro napájení stanice.
            Foto Scott K. Johnson (UNAVCO), 11. května 2022. USGS uvádí Public Domain.{" "}
            <SourceLink id="WEB_USGS_P711_2022">(původ fotografie)</SourceLink>
          </figcaption>
        </figure>
        <p>
          Přijímač sleduje časové značky zakódované v signálu a také jeho fázi,
          tedy okamžitou polohu v pravidelně se opakujícím kmitu rádiové vlny.
          Změny fáze umožňují velmi jemně sledovat změny délky cesty signálu.
          Samotná fáze ovšem nerozlišuje celé opakované kmity. Jejich počáteční
          neznámý počet se proto určuje společně s dalšími parametry měření.{" "}
          <SourceLink id="DOI_10_1029_92jd01517">(Bevis a kol. 1992)</SourceLink>
        </p>
        <p>
          K oddělení atmosférického příspěvku potřebujeme vědět, kde družice byla
          a jak přesně šly její hodiny. Zpracování používá přesné dráhy a opravy
          družicových hodin, například od Mezinárodní služby GNSS (IGS).
          Současně určuje odchylku hodin přijímače. Dvě měřené frekvence pomáhají
          odstranit hlavní účinek ionosféry, horní oblasti atmosféry s volnými
          elektrony. Její vliv závisí na frekvenci jinak než vliv neutrálního vzduchu.{" "}
          <SourceLink id="DOI_10_5194_amt_9_79_2016">(Ning a kol. 2016, oddíly 1 a 3.1)</SourceLink>
        </p>
        <p>
          Do výpočtu vstupuje také kalibrace antény. Signál přicházející z různých
          směrů se v ní může projevit, jako by byl přijat v nepatrně odlišném bodě.
          Kalibrační tabulka popisuje tuto odezvu podle směru příchodu a umožňuje
          ji při zpracování opravit. Používá se tabulka pro příslušný typ antény
          a případného krytu. Z rozdílů mezi směry tak odstraníme známou
          odezvu antény ještě před určením atmosférického zpoždění.{" "}
          <SourceLink id="DOI_10_5194_amt_9_79_2016">(Ning a kol. 2016, oddíly 3.1.4 a 3.2)</SourceLink>
        </p>

        <h3>Proč se měření převádí na svislý směr</h3>
        <p>
          Jednotlivé družice se nacházejí v různých výškách nad obzorem.
          Signál od nízké družice prochází vzduchem šikmo a urazí v něm delší
          cestu než signál přicházející shora. I při stejném množství páry
          proto jednotlivé signály získají různě velká zpoždění.
          Pro společný výsledek je potřebujeme vztáhnout ke stejné geometrii.{" "}
          <SourceLink id="DOI_10_1029_2006JD007529">(Wang a kol. 2007, oddíl 2.1)</SourceLink>
        </p>
        <p>
          Výpočet proto používá převodní vztahy, označované jako mapovací funkce.
          Ty vyjadřují, kolikrát je atmosférické zpoždění v daném šikmém směru
          větší než ve směru svislém. Vycházejí z uspořádání atmosféry a počítají
          i se zakřivením Země a dráhy signálu. Z mnoha pozorovaných směrů
          se pak společně odhaduje zpoždění pro pomyslný signál přicházející
          kolmo shora. Nazývá se zenitové, protože zenit je bod na obloze
          přímo nad pozorovatelem.{" "}
          <SourceLink id="DOI_10_5194_amt_9_79_2016">(Ning a kol. 2016, oddíl 3.1.5)</SourceLink>
        </p>
        <p>
          Zpracování hledá takové zenitové zpoždění, které po převodu
          do jednotlivých směrů nejlépe vysvětlí naměřené signály. Pomáhá
          přitom rozdíl mezi účinkem hodin a atmosféry. Odchylka hodin
          přijímače působí společně na všechny přijímané signály, zatímco
          atmosférické zpoždění se mění podle délky cesty vzduchem. Pozorování
          družic v různých směrech umožňuje tyto příspěvky oddělovat.{" "}
          <SourceLink id="DOI_10_5194_amt_9_79_2016">(Ning a kol. 2016, oddíly 1 a 3.1)</SourceLink>
        </p>

        <h3>Jak oddělíme příspěvek vodní páry</h3>
        <p>
          Celkové zpoždění rozdělujeme na hydrostatickou a mokrou složku.
          Hydrostatická složka je svázána s celkovou hmotností vzduchu nad stanicí.
          Tato hmotnost vytváří přízemní tlak. Z tlaku proto lze vypočítat její
          příspěvek ke zpoždění, s drobnou opravou podle zeměpisné šířky a výšky
          stanice, které ovlivňují tíži. Počítá se s tlakem ve výšce antény.
          Je-li tlakoměr níže, tlak se nejprve přepočítá do této výšky.
          Jeho odezvu určuje kalibrace vůči referenčnímu tlakoměru, která
          propojuje údaj čidla se známými hodnotami tlaku.{" "}
          <SourceLink id="DOI_10_5194_amt_9_79_2016">(Ning a kol. 2016, oddíl 3.2)</SourceLink>
        </p>
        <p>
          Po odečtení hydrostatické složky zůstane mokré zpoždění, které nese
          hledanou informaci o vodní páře. Označme celkové zpoždění{" "}
          <InlineMath tex={String.raw`D_{\mathrm t}`} />, hydrostatickou část{" "}
          <InlineMath tex={String.raw`D_{\mathrm h}`} /> a mokrou část{" "}
          <InlineMath tex={String.raw`D_{\mathrm w}`} />. Všechny tři údaje
          vyjadřujeme v milimetrech ekvivalentní délky dráhy:
        </p>
        <Equation tex={String.raw`D_{\mathrm w}=D_{\mathrm t}-D_{\mathrm h}`} />
        <p>
          Hydrostatické složce se někdy říká suchá. Přesnější název je zde
          užitečný, protože se počítá z tlaku celého vzduchu, včetně podílu
          vodní páry. Mokrá složka vyjadřuje její zbývající, silně
          teplotně závislý příspěvek.{" "}
          <SourceLink id="DOI_10_1029_92jd01517">(Bevis a kol. 1992)</SourceLink>
        </p>
        <p>
          Stejné množství páry má při různých teplotách poněkud jiný účinek
          na šíření signálu. Pro převod proto potřebujeme teplotu vzduchu,
          ve kterém se pára nachází. Vrstvy s větším množstvím páry mají
          větší váhu. Z teploty a vlhkosti v jednotlivých výškách se vypočítá
          odpovídající vážená teplota sloupce, označovaná{" "}
          <InlineMath tex={String.raw`T_{\mathrm m}`} /> a vyjádřená v kelvinech.
          Na této teplotní stupnici odpovídá 0 °C hodnotě 273,15 K.
          Tyto profily může poskytnout meteorologický model. Jinou možností
          je odhad z teploty u povrchu pomocí vztahu odvozeného ze společných
          měření přízemní teploty a teplotních i vlhkostních profilů.{" "}
          <SourceLink id="DOI_10_1029_2006JD007529">(Wang a kol. 2007, oddíl 3.1)</SourceLink>
        </p>
        <p>
          Vážená teplota určuje převodní koeficient{" "}
          <InlineMath tex={String.raw`\Pi`} />. Ten říká, kolik milimetrů
          srážitelné vody odpovídá jednomu milimetru mokrého zpoždění.
          Běžně se pohybuje kolem 0,15. Hledané množství vody{" "}
          <InlineMath tex={String.raw`W`} /> v milimetrech pak získáme násobením:
        </p>
        <Equation tex={String.raw`W=\Pi(T_{\mathrm m})\,D_{\mathrm w}`} />
        <p>
          Závorka v zápisu připomíná, že koeficient závisí na teplotě.
          Samotný koeficient je bezrozměrný, protože oba délkové údaje
          používáme ve stejných jednotkách. Přesný vztah a konstanty pro
          zopakování převodu jsou v doplňku k příkladu.{" "}
          <SourceLink id="DOI_10_5194_amt_9_79_2016">(Ning a kol. 2016, rovnice 26 a tabulka 4)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" unoptimized src="/media/gnss-water/princip.svg" width={720} height={1120}
            alt="Signály tří navigačních družic míří ke stanici. Z jejich společného zpracování vzniká zenitové zpoždění, po odečtení hydrostatické složky a teplotním převodu množství vody." />
          <figcaption>
            Šikmé dráhy nahoře představují signály různých družic.
            Přerušovaná svislice vyznačuje společný směr, ke kterému se
            zpoždění vztahuje. Šipky pod stanicí ukazují postup výpočtu,
            doplňující popisky úlohu tlaku a teploty. Vlastní schéma podle
            <SourceLink id="DOI_10_1029_2006JD007529"> Wangové a kol. (2007)</SourceLink>.
            Geometrie není v měřítku.
          </figcaption>
        </figure>

        <h3>Co měření přináší klimatologii</h3>
        <p>
          Opakováním výpočtu vzniká časová řada množství vody nad stanicí.
          Zachycuje změny během dne i střídání vlhčích a sušších ročních období.
          Veřejný soubor amerického Národního centra pro výzkum atmosféry
          (NCAR) spojuje výsledky několika sítí a poskytuje je
          po dvou hodinách. Kromě výsledné vody uchovává zpoždění, tlak
          a váženou teplotu, takže lze sledovat návaznost jednotlivých kroků.{" "}
          <SourceLink id="DOI_10_5065_047C_HV45">(NCAR: veřejná data)</SourceLink>{" "}
          <SourceLink id="WEB_NCAR_GPS_PW_Readme">(popis datového formátu)</SourceLink>
        </p>
        <p>
          Pro klimatologii jsou důležité mnohaleté řady. Alshawafová
          a spoluautoři v roce 2017 zkoumali změny množství vodní páry na
          113 stanicích převážně v Německu. Použili řady dlouhé 10 až 19 let,
          oddělili pravidelné střídání ročních období a potom odhadovali
          dlouhodobou změnu. Jednotlivé stanice ukazovaly různé směry i rychlosti
          změn. Práce tak ukazuje, jak se soustavná geodetická měření využívají
          ke sledování vlhkosti atmosféry v konkrétních oblastech.{" "}
          <SourceLink id="DOI_10_5194_amt_10_3117_2017">(Alshawaf a kol. 2017, oddíly 3–4)</SourceLink>
        </p>
        <p>
          Širší souvislosti shrnuje článek o <Link href="/pozorovani/narust-vlhkosti">vlhkosti atmosféry</Link>.
          GNSS poskytuje součet přes výšku, zatímco <Link href="/metody/radiosondaz">radiosondáž</Link>{" "}
          sleduje teplotu a vlhkost při stoupání balónu a rozlišuje jednotlivé
          vrstvy. Tyto dva pohledy se doplňují. Další uspořádání,
          <Link href="/metody/radiove-zakryty-gnss"> rádiové zákryty GNSS</Link>,
          využívá přijímač na družici a průchod signálu při okraji Země
          k získání výškových profilů.{" "}
          <SourceLink id="DOI_10_1029_92jd01517">(Bevis a kol. 1992)</SourceLink>
        </p>
        <p>
          Bevis a spoluautoři v roce 1992 popsali, jak z geodetického zpoždění
          získávat množství vodní páry. Rocken a spoluautoři pak v roce 1993
          zveřejnili měření mezi dvěma stanicemi v Coloradu, kde rozdíly
          množství páry určovali pomocí GPS a porovnávali je s radiometry.
          Rozvoj stálých sítí rozšířil tento postup na soustavné meteorologické
          měření, včetně projektu SuomiNet popsaného v roce 2000.{" "}
          <SourceLink id="DOI_10_1029_92jd01517">(Bevis a kol. 1992)</SourceLink>{" "}
          <SourceLink id="DOI_10_1029_93GL02935">(Rocken a kol. 1993)</SourceLink>{" "}
          <SourceLink id="DOI_Ware_2000_SuomiNet">(Ware a kol. 2000)</SourceLink>
        </p>
        <p>
          Zpracování může využívat společné řešení více stanic nebo určovat
          parametry jedné stanice pomocí přesných družicových drah a hodin.
          Druhý postup se označuje jako přesné bodové určování polohy.
          V obou případech zůstává převod zenitového zpoždění na vodu
          založen na stejném principu.{" "}
          <SourceLink id="DOI_10_5194_amt_9_79_2016">(Ning a kol. 2016, úvod a závěr)</SourceLink>
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Výsledek ovlivňuje určení zpoždění, tlak i odhad vážené teploty.
          Pro dlouhé řady je důležitá stabilita stanice a srovnatelné zpracování.
          Wangová a spoluautoři porovnali výsledky s radiosondami na 98 místech
          v letech 2003–2004. Souhrnná velikost rozdílu činila 2,83 milimetru vody. Autoři ji
          vyjádřili střední kvadratickou hodnotou, která zvýrazňuje větší odchylky. Tento údaj zahrnuje chyby obou metod i rozdíl mezi vzduchem,
          který skutečně zachytily.{" "}
          <SourceLink id="DOI_10_1029_2006JD007529">(Wang a kol. 2007, oddíl 4.1)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Co ovlivňuje přesnost a jak se ověřuje</summary>
          <p>
            <strong>Stanice a její okolí.</strong> Část signálu se může před
            přijetím odrazit od povrchu nebo konstrukce. Přijímač pak zachytí
            více cest současně. Tento vliv závisí na okolí antény, například
            na vegetaci nebo vlhkosti půdy. Výsledek mohou posunout také
            výměny antény či jejího krytu. Pro sledování stability se uchovává
            historie vybavení a porovnávají se souběžná měření.{" "}
            <SourceLink id="DOI_10_5194_amt_9_79_2016">(Ning a kol. 2016, oddíly 3.1.3–3.1.4)</SourceLink>
          </p>
          <p>
            <strong>Tlak, teplota a dlouhé řady.</strong> Chyba tlaku přejde
            přes hydrostatickou složku do vypočtené vody. Význam má správná
            výška tlakoměru i jeho pravidelná kalibrace. Odhad vážené teploty
            zase ovlivňuje převodní koeficient. Před výpočtem klimatického
            trendu se hledají skoky způsobené přístroji nebo změnou zpracování.
            Alshawafová a spoluautoři k tomu použili také porovnání s reanalýzou,
            tedy modelově zpracovaným záznamem minulého počasí. Délka řady
            a její počátek ovlivňují, jakou část přirozeného kolísání zachytí.{" "}
            <SourceLink id="DOI_10_5194_amt_9_79_2016">(Ning a kol. 2016, oddíly 3.2–3.3)</SourceLink>{" "}
            <SourceLink id="DOI_10_5194_amt_10_3117_2017">(Alshawaf a kol. 2017, oddíly 1 a 4)</SourceLink>
          </p>
          <p>
            <strong>Co znamená porovnání s radiosondami.</strong> Uvedená
            studie vybírala stanice do vzdálenosti 50 kilometrů a s výškovým
            rozdílem menším než 100 metrů. Časy GNSS byly nejvýše hodinu od
            vypuštění sondy. Radiosonda měří jiným fyzikálním způsobem,
            ale unáší ji vítr, zatímco GNSS využívá svazek šikmých drah.
            Ani měření blízko sebe tedy nevzorkují přesně totožný vzduch.
            Průměrně vycházela radiosondová voda o 1,08 milimetru nižší,
            především kvůli známým suchým odchylkám některých sond.
            Střední kvadratický rozdíl 2,83 milimetru zdůrazňuje větší
            odchylky a nelze jej připsat pouze GNSS.{" "}
            <SourceLink id="DOI_10_1029_2006JD007529">(Wang a kol. 2007, oddíl 4.1)</SourceLink>
          </p>
          <p>
            <strong>Nezávislost kontroly.</strong> GNSS a radiosonda mají
            odlišné měřené signály. Převod GNSS však v tomto datovém souboru
            využívá váženou teplotu z reanalýzy, která sama zpracovává
            meteorologická pozorování včetně radiosond. Úplná nezávislost
            všech vstupů proto není zaručena. Studie přidává porovnání
            s mikrovlnnými radiometry na třech místech. Jejich signálem
            je tepelné záření atmosféry. Náš příklad níže kontroluje
            pouze poslední číselný převod, nikoli správnost měření
            nezávislým přístrojem.{" "}
            <SourceLink id="DOI_10_1029_2006JD007529">(Wang a kol. 2007, oddíly 2.2 a 4.2)</SourceLink>
          </p>
        </details>

        <h2>Příklad: voda nad stanicí Pecný</h2>
        <p>
          Použijeme stanici GOPE na Pecném v Česku a záznam pro
          1. července 2012 v 09:00 UTC, tedy v 11 hodin tehdejšího českého
          letního času. Vezmeme jej z veřejného dvouhodinového souboru NCAR.
          Začínáme již zpracovaným zenitovým zpožděním a zopakujeme jeho
          převod na množství vody.{" "}
          <SourceLink id="WEB_EPN_GOPE">(EPN: stanice GOPE)</SourceLink>{" "}
          <SourceLink id="DOI_10_5065_047C_HV45">(NCAR: data)</SourceLink>
        </p>
        <p>
          Tabulka obsahuje vstupy jednoho záznamu. Hydrostatická složka
          už byla vypočtena z tlaku. V této datové sadě poskytují tlak okolní
          meteorologické stanice po přepočtu na polohu, výšku a čas měření GNSS.
          Vážená teplota pochází z reanalýzy amerických center pro předpověď
          počasí a výzkum atmosféry, označované NCEP/NCAR. Jde o modelově
          zpracovaný záznam minulého počasí. Nejde tedy o dva
          údaje přímo odečtené z přístrojů u antény.{" "}
          <SourceLink id="DOI_10_1029_2006JD007529">(Wang a kol. 2007, oddíl 3.1)</SourceLink>{" "}
          <SourceLink id="WEB_NCAR_GPS_PW_Readme">(dokumentace dat)</SourceLink>
        </p>
        <div className="method-data-output method-data-output--compact method-data-output__table-wrap" role="region" aria-label="Vstupy výpočtu pro stanici GOPE" tabIndex={0}>
          <table>
            <caption>GOPE, 1. července 2012 v 09:00 UTC</caption>
            <thead><tr><th scope="col">Veličina</th><th scope="col">Hodnota</th></tr></thead>
            <tbody>
              <tr><th scope="row">Tlak ve výšce stanice</th><td>954,19 hPa</td></tr>
              <tr><th scope="row">Celkové zenitové zpoždění</th><td>2 315,01 mm</td></tr>
              <tr><th scope="row">Hydrostatické zpoždění</th><td>2 172,9 mm</td></tr>
              <tr><th scope="row">Vážená teplota sloupce</th><td>283,54 K</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Nejprve odečteme hydrostatickou část od celkového zpoždění.
          Zůstane přibližně 142,1 milimetru mokrého zpoždění:
        </p>
        <Equation tex={[
          String.raw`D_{\mathrm w}=2\,315{,}01-2\,172{,}9`,
          String.raw`D_{\mathrm w}=142{,}11\ \mathrm{mm}`,
        ]} />
        <p>
          Pro uvedenou váženou teplotu vychází převodní koeficient přibližně
          0,1616. Vynásobíme jím mokré zpoždění:
        </p>
        <Equation tex={[
          String.raw`W\approx0{,}1616\times142{,}11\ \mathrm{mm}`,
          String.raw`W\approx23{,}0\ \mathrm{mm}`,
        ]} />
        <p>
          Nad stanicí tak v daném čase připadalo přibližně <strong>23 kilogramů
          vodní páry na čtvereční metr</strong>. Po kondenzaci celého sloupce
          by vznikla vrstva vody vysoká asi 23 milimetrů. Takto čteme i výsledek
          uložený v původním souboru, který po zaokrouhlení na desetinu dává
          stejných 23,0 milimetru. Jde o stav atmosféry v jednom čase,
          nikoli o předpověď množství deště.
        </p>
        <details className="article-details">
          <summary>Data a postup pro zopakování</summary>
          <p>
            Použita je sada <code>d721001</code>, DOI 10.5065/047C-HV45,
            veřejná verze dostupná 28. října 2026. Z archivu
            <code> igs+suo.2012.tar.gz</code> vybíráme soubor
            <code> 2012/GOPE.2012</code> a v něm den roku 183, hodinu 9.
            Rok 2012 byl přestupný. Souřadnice stanice v seznamu poskytovatele
            jsou 49,913703° severní šířky a 14,785620° východní délky.{" "}
            <SourceLink id="DOI_10_5065_047C_HV45">(NCAR: soubory a seznam stanic)</SourceLink>
          </p>
          <p>
            Sloupce <code>Ps</code>, <code>ZTD</code>, <code>ZDD</code>,
            <code> ZWD</code>, <code>Tm</code> a <code>PW</code> označují tlak,
            celkové, hydrostatické a mokré zenitové zpoždění, váženou teplotu
            a srážitelnou vodu. Původní mokré zpoždění je 142,09 mm,
            zatímco odečtením zaokrouhlených sloupců získáme 142,11 mm.{" "}
            <SourceLink id="WEB_NCAR_GPS_PW_Readme">(popis formátu)</SourceLink>
          </p>
          <p>
            Koeficient počítáme ze vztahu:
          </p>
          <Equation tex={String.raw`\Pi=\frac{10^6}{\rho_{\mathrm w}R_{\mathrm v}(k'_2+k_3/T_{\mathrm m})}`} />
          <p>
            Hustota kapalné vody <InlineMath tex={String.raw`\rho_{\mathrm w}`} /> je
            1 000 kg/m³, měrná plynová konstanta páry{" "}
            <InlineMath tex={String.raw`R_{\mathrm v}`} /> je 461,5 J/(kg·K).
            Konstanty odezvy vlhkého vzduchu jsou{" "}
            <InlineMath tex={String.raw`k'_2=0{,}221\ \mathrm{K/Pa}`} /> a{" "}
            <InlineMath tex={String.raw`k_3=3\,739\ \mathrm{K^2/Pa}`} />.
            Používáme zde pascaly, a proto jsou číselné hodnoty těchto dvou
            konstant stokrát menší než při zápisu s hektopascaly.
            Teplotu dosazujeme v kelvinech. Vztah platí pro převod mokré
            složky zpoždění navigačních mikrovlnných signálů.{" "}
            <SourceLink id="DOI_10_5194_amt_9_79_2016">(Ning a kol. 2016, rovnice 26 a tabulka 4)</SourceLink>
          </p>
          <p>
            S těmito konstantami vyjde koeficient 0,1616103 a voda přibližně
            22,966 mm. Archiv obsahuje 22,98727 mm. Rozdíl asi 0,021 mm
            ponecháváme viditelný. Dokumentace nespecifikuje všechny číselné
            volby původního převodu, a netvrdíme proto shodu posledních
            desetinných míst. Oba výsledky po zaokrouhlení dávají 23,0 mm.
          </p>
          <p>
            Ke stažení je <a href="/data/methods/gnss-water/gope-extract.csv">výřez CSV</a>,
            <a href="/data/methods/gnss-water/GOPE.2012"> původní staniční soubor</a>,
            <a href="/data/methods/gnss-water/provenance.json"> původ dat a kontrolní součty</a>,
            <a href="/data/methods/gnss-water/reproduce.py"> výpočetní skript</a> a
            <a href="/data/methods/gnss-water/README.txt"> návod</a>.
            Uložte je do stejné složky a spusťte <code>python reproduce.py</code>.
            Skript používá pouze standardní knihovnu Pythonu. Data poskytlo
            NCAR Earth Observing Laboratory / UCAR pod licencí CC BY 4.0.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Stálé přijímače navigačních družic umožňují soustavně sledovat,
            kolik vodní páry obsahuje atmosféra nad jednotlivými místy.
            Zpoždění signálů získává tento význam ve spojení s tlakem
            a teplotou vzduchu. Dlouhé řady zachycují denní, sezonní
            i mnohaleté změny množství vody a doplňují výškové profily
            radiosond i plošná družicová pozorování.
          </p>
        </div>
      </div>
    </article>
  );
}
