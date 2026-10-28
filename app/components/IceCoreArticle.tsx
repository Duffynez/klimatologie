import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function IceCoreArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak čteme záznam v ledovém jádru</h2>
        <p className="article-prose__intro">
          Ledové jádro je válec ledu vyvrtaný z ledovce nebo ledového příkrovu.
          Uchovává postupně navrstvený sníh, příměsi, které s ním dopadly na povrch,
          a vzduch uzavřený později v bublinkách. Analýza těchto složek umožňuje
          zkoumat minulé prostředí. Zde se zaměříme na měření oxidu uhličitého
          v zachovaném vzduchu, konkrétně na postup používaný pro antarktický Law Dome.{" "}
          <SourceLink id="WEB_AAD_Ice_Cores">(Australian Antarctic Program)</SourceLink>
        </p>

        <h3>Jak se vzduch uzavře do ledu</h3>
        <p>
          Tam, kde se sníh každoročně hromadí a v létě neroztaje, překrývají nové
          vrstvy ty starší. Zatížení roste, sněhová zrna se přeskupují a spojují
          a volného prostoru mezi nimi ubývá. Vzniká firn, starý zrnitý sníh,
          který je hustší než čerstvá sněhová pokrývka, ale stále obsahuje
          propojené vzduchové póry.{" "}
          <SourceLink id="DOI_10_5194_cp_16_503_2020">(Fourteau a kol. 2020, oddíl 2)</SourceLink>
        </p>
        <p>
          Těmito póry mohou molekuly plynů pronikat do hloubky i zpět k povrchu.
          Jejich náhodný pohyb postupně promíchává vzduch a vyrovnává rozdíly
          v jeho složení. Tento děj se nazývá difuze. Vzduch ve firnu se tak
          dál vyměňuje s atmosférou, zatímco sníh, který ho obklopuje, už stárne.
          Teprve při dalším zhutnění se spojení mezi póry přeruší a vzniknou
          uzavřené bublinky.{" "}
          <SourceLink id="DOI_10_5194_acp_13_1485_2013">(Trudinger a kol. 2013, oddíl 2)</SourceLink>
        </p>
        <p>
          <strong>Vzduch je proto mladší než led, ve kterém se nachází.</strong>
          Navíc se všechny póry neuzavřou současně a už před uzavřením obsahují
          směs vzduchu různého stáří. Jednomu vzorku tedy přiřazujeme reprezentativní
          datum vzduchu a časové rozpětí, které vzorek zachycuje.
          Právě tento způsob vzniku záznamu určuje, jak podrobně lze sledovat
          změny dávné atmosféry.{" "}
          <SourceLink id="DOI_10_5194_cp_16_503_2020">(Fourteau a kol. 2020)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/ice-cores/princip.svg"
            alt="Sníh se mění v porézní firn, kterým ještě prochází vzduch, a poté v led s uzavřenými bublinkami. Z téhož jádra se zvlášť určuje datum ledu a složení i datum vzduchu."
            width={720} height={980} unoptimized />
          <figcaption>
            V horní části probíhá výměna vzduchu s atmosférou, níže zůstává vzduch
            uzavřený v ledu. Modré kroužky představují póry a bublinky, šipky
            ukazují pohyb vzduchu a následnou práci se vzorkem. Schéma nemá
            hloubkové měřítko. Vlastní zpracování podle{" "}
            <SourceLink id="DOI_10_5194_cp_16_503_2020">Fourteaua a kol.</SourceLink> a{" "}
            <SourceLink id="DOI_10_5194_essd_11_473_2019">Rubina a kol.</SourceLink>
          </figcaption>
        </figure>

        <h3>Kde vrtat a jak odebrat vzorek</h3>
        <p>
          Pro podrobný záznam posledních staletí je výhodné místo s vydatným
          pravidelným sněžením, dobře zachovanými vrstvami a malým výskytem tání.
          Takové podmínky nabízí Law Dome při pobřeží východní Antarktidy.
          Jeho rychle přibývající sníh vytváří silné roční vrstvy a vzduch se
          uzavírá dostatečně brzy, aby nejmladší ledové vzorky časově navazovaly
          na přímé měření atmosféry.{" "}
          <SourceLink id="DOI_10_5194_essd_11_473_2019">(Rubino a kol. 2019, oddíly 2.1 a 3.1)</SourceLink>
        </p>
        <p>
          Vrták odebírá jádro postupně po kratších úsecích. Po každém záběru se
          vytáhne na povrch, ledový válec se vyjme a vrtání pokračuje hlouběji.
          Hloubka každého úseku zachová jeho místo v původním sledu vrstev.
          Jádro se rozděluje mezi jednotlivé analýzy a část zůstává v archivu.
          Do laboratoře putuje zmrazené, aby se zachoval led i uzavřený vzduch.{" "}
          <SourceLink id="WEB_AAD_Ice_Cores">(Australian Antarctic Program)</SourceLink>{" "}
          <SourceLink id="1988_Stauffer_Ice_Core_Processing">(Stauffer a kol. 1988)</SourceLink>
        </p>
        <figure className="article-figure article-figure--instrument">
          <Image className="article-figure__media" src="/media/ice-cores/core-and-drill.jpg"
            alt="Na stole v antarktickém táboře leží vlevo vnitřní tubus vrtáku se spirálou a vpravo metrový válec ledu v bílém žlábku. Za stolem je naviják a stožár."
            width={1400} height={933} unoptimized />
          <figcaption>
            Vlevo je vnitřní tubus čtyřpalcového vrtáku, vpravo metrový úsek
            jádra WDC06B. Naviják a stožár v pozadí slouží ke spouštění vrtáku.
            Snímek ukazuje odběr v projektu WAIS Divide, nikoli vrt Law Dome.
            Foto: Joseph Souney, sezóna 2006–2007. Zmenšeno pro web.
            Použito pro vzdělávání podle{" "}
            <SourceLink id="WEB_WAIS_Photo_Usage">podmínek galerie</SourceLink>.{" "}
            <SourceLink id="WEB_WAIS_Core_Drill_Photo">Původní fotografie a popis</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Pro rozbor plynu se odřízne vnější povrch vybraného kusu jádra.
          Tím se odstraní část, která byla v kontaktu s okolím při vrtání
          a manipulaci. V laboratoři australské Organizace pro vědecký a průmyslový výzkum
          Commonwealthu (CSIRO) se obvykle připraví přibližně kilogram ledu
          a před uvolněním vzduchu se důkladně ochladí. Tento vzorek
          obsahuje mnoho bublinek, jejichž společný obsah bude analyzátor měřit.{" "}
          <SourceLink id="DOI_10_5194_essd_11_473_2019">(Rubino a kol. 2019, oddíl 2.2)</SourceLink>
        </p>

        <h3>Jak se změří vzduch z bublinek</h3>
        <p>
          Led se vloží do uzavřené nádoby s děrovaným vnitřním válcem,
          který funguje jako struhadlo. Z nádoby se nejprve odčerpá okolní vzduch.
          Při mechanickém třepání se pak led strouhá o stěny válce. Bublinky
          se otevřou a jejich obsah zaplní vyčerpaný prostor. Led přitom zůstává
          zmrzlý, proto se postup označuje jako suchá extrakce, tedy uvolnění
          plynu bez roztavení vzorku.{" "}
          <SourceLink id="DOI_10_5194_essd_11_473_2019">(Rubino a kol. 2019, oddíl 2.2)</SourceLink>
        </p>
        <p>
          Uvolněný vzduch projde silně ochlazeným úsekem aparatury, takzvanou
          studenou pastí. Vodní pára se zde usadí jako led, zatímco ostatní plyny
          pokračují dál. Další past je ochlazená natolik, že se v ní zachytí
          i samotný vzduch. Z rozptýleného plynu tak vznikne vzorek soustředěný
          v malé nádobce.
          Po zahřátí této pasti se plyny znovu uvolní a promíchají.
          Z připraveného ledu laboratoř získává obvykle jen desítky mililitrů
          vzduchu, které musí rozdělit mezi jednotlivé rozbory.{" "}
          <SourceLink id="DOI_10_5194_essd_11_473_2019">(Rubino a kol. 2019, oddíly 2.2–2.3)</SourceLink>
        </p>
        <p>
          CO₂ se v tomto provedení měří plynovou chromatografií.
          Vzduch prochází trubicí s náplní, která různé plyny zadržuje různě
          dlouho. CO₂ tak přichází na výstup odděleně od ostatních složek.
          Před detektorem se chemicky převede na metan, na který detektor reaguje.
          Jeho průchod vyvolá krátký elektrický signál. Velikost tohoto signálu
          se porovná se signály referenčních směsí o známém složení.
          Podrobněji vznik a převod signálu vysvětluje metoda{" "}
          <Link href="/metody/plynova-chromatografie">plynové chromatografie</Link>.{" "}
          <SourceLink id="DOI_10_5194_essd_11_473_2019">(Rubino a kol. 2019, oddíl 2.3)</SourceLink>
        </p>
        <p>
          Výsledná koncentrace říká, jaký podíl molekul suchého vzduchu tvoří CO₂.
          Vyjadřuje se v ppm, tedy v miliontinách. Hodnota 280 ppm znamená
          280 molekul CO₂ na milion molekul vzduchu po vyloučení vodní páry.
          Reference musí pokrýt také nižší koncentrace starého vzduchu.
          Publikovaný soubor Law Dome používá pro CO₂ kalibrační stupnici
          X2007 Světové meteorologické organizace (WMO). Ta přiřazuje referenčním
          směsím navzájem porovnatelné hodnoty koncentrace.{" "}
          <SourceLink id="DOI_10_5194_essd_11_473_2019">(Rubino a kol. 2019)</SourceLink>
        </p>
        <p>
          Součástí zpracování je také měření známého vzduchu, který projde
          aparaturou spolu s laboratorně připraveným ledem bez viditelných bublinek.
          Rozdíl proti známému složení ukáže příspěvek samotné extrakce a umožní
          jej opravit ve výsledku vzorku.{" "}
          <SourceLink id="DOI_10_5194_essd_11_473_2019">(Rubino a kol. 2019, oddíl 2.2)</SourceLink>
        </p>
        <p>
          Další oprava se týká vzduchu ještě před uzavřením bublinek.
          Vlivem gravitace se ve spodní části firnu mírně zvyšuje zastoupení
          těžších molekul, mezi něž patří CO₂. Změřenou koncentraci proto
          zpracování sníží o tento vypočtený příspěvek, aby odpovídala
          složení atmosféry nad povrchem.{" "}
          <SourceLink id="DOI_10_5194_essd_11_473_2019">(Rubino a kol. 2019, doplněk S1.2)</SourceLink>
        </p>

        <h3>Jak měření přiřadíme k datu</h3>
        <p>
          Nejdřív potřebujeme určit datum sněhu, ze kterého vznikl led.
          Na Law Dome se počítají roční vrstvy podle pravidelných změn jeho
          složení. Vodík a kyslík ve vodě mají i těžší varianty atomů, izotopy.
          Jejich zastoupení ve sněhu se v průběhu roku mění. Opakování tohoto
          průběhu spolu se sezónními změnami chemických příměsí umožňuje postupovat
          jádrem rok po roce. Plummerová a kolegové tak sestavili datování
          více než dvou tisíciletí jádra DSS bez přizpůsobování předem známým
          datům sopečných erupcí.{" "}
          <SourceLink id="DOI_10_5194_cp_8_1929_2012">(Plummer a kol. 2012, oddíl 2)</SourceLink>
        </p>
        <p>
          Datum vzduchu vyžaduje ještě popis jeho pohybu ve firnu.
          Vědci odebírají vzduch z různých hloubek otevřených pórů a měří plyny,
          jejichž nedávný vývoj v atmosféře už znají. Model počítá, jak se takový
          vývoj postupně šíří do hloubky. Rychlost promíchávání se nastavuje tak,
          aby vypočtené složení odpovídalo odebranému vzduchu. Výsledkem je
          odhad, jak starý vzduch a v jakých podílech daná hloubka obsahuje.{" "}
          <SourceLink id="DOI_10_5194_acp_13_1485_2013">(Trudinger a kol. 2013)</SourceLink>
        </p>
        <p>
          Pro datování uzavřeného vzduchu se tento popis propojí se stářím ledu
          a uzavíráním pórů. Rozdíl stáří pak umožní přiřadit naměřenou koncentraci
          ke správnému místu na časové ose. Pokud používáme letopočty,
          datum mladšího vzduchu získáme přičtením tohoto rozdílu k datu ledu:
        </p>
        <Equation tex={String.raw`y_{\mathrm{vzduch}} = y_{\mathrm{led}} + \Delta t`} />
        <p>
          <InlineMath tex={String.raw`y_{\mathrm{led}}`} /> je kalendářní rok
          vzniku vrstvy sněhu a{" "}
          <InlineMath tex={String.raw`y_{\mathrm{vzduch}}`} /> reprezentativní
          kalendářní rok vzduchu. Kladné{" "}
          <InlineMath tex={String.raw`\Delta t`} /> udává, o kolik let je led
          starší než vzduch. Jde o přepočet mezi dvěma způsoby datování téhož
          vzorku. Velikost rozdílu se určuje pro daný vrt a podmínky tvorby ledu.{" "}
          <SourceLink id="DOI_10_5194_essd_11_473_2019">(Rubino a kol. 2019, doplněk S1)</SourceLink>
        </p>

        <h3>Co datovaný výsledek umožňuje zjistit</h3>
        <p>
          Každý vzorek nyní poskytuje koncentraci CO₂ přiřazenou k datu vzduchu.
          Postupným proměřením jádra vzniká záznam jeho změn.
          Law Dome umožňuje podrobně sledovat poslední dvě tisíciletí
          a spojit starší vzduch s měřením z otevřeného firnu a dnešní atmosféry.
          Tím prodlužuje přístrojová pozorování do doby před jejich začátkem.{" "}
          <SourceLink id="DOI_10_5194_essd_11_473_2019">(Rubino a kol. 2019)</SourceLink>{" "}
          Celkový průběh rozebírá článek{" "}
          <Link href="/pozorovani/atmosfericka-koncentrace-co2">Oxid uhličitý v atmosféře</Link>.
        </p>
        <p>
          Z jiných částí jádra lze měřit například prach nebo izotopové složení
          samotné vody. Příměsi nesou informace o přenosu materiálu atmosférou.
          Izotopy vody pomáhají rekonstruovat teplotní podmínky vzniku sněhu,
          protože jejich poměr se mění při vypařování a srážení vody.
          Jde o nepřímý ukazatel, jehož převod vyžaduje vlastní vztah k teplotě.
          U bublinek naproti tomu analyzujeme zachovaný vzorek vzduchu.
          Při vzájemném porovnání těchto záznamů proto používáme jejich příslušná
          data, datum ledu pro vodu a datum plynu pro složení atmosféry.{" "}
          <SourceLink id="WEB_AAD_Ice_Cores">(Australian Antarctic Program)</SourceLink>{" "}
          <SourceLink id="DOI_10_5194_cp_16_503_2020">(Fourteau a kol. 2020)</SourceLink>
        </p>

        <h3>Vývoj metody a další provedení</h3>
        <p>
          Suché rozbíjení ledu a optické měření uvolněného CO₂ bylo použitelné
          už na začátku 80. let. Stauffer a kolegové v roce 1984 popsali analýzu
          malých vzorků pomocí drtiče a infračerveného laseru.
          Vývoj později přinesl jemnější rozmělňování a automatizaci.
          Odstředivý mikrotom popsaný Bereiterem a kolegy v roce 2013 při otáčení
          ořezává led pevným nožem. Z analyzovaných vzorků uvolňoval alespoň
          90 % vzduchu a následně měřil CO₂ infračerveným analyzátorem.{" "}
          <SourceLink id="DOI_10_3189_1984aog5_1_160_164">(Stauffer a kol. 1984)</SourceLink>{" "}
          <SourceLink id="DOI_10_5194_amt_6_251_2013">(Bereiter a kol. 2013)</SourceLink>
        </p>
        <p>
          Vedle mechanického rozmělňování se používá sublimace, při níž led
          přechází přímo v páru. Umožňuje úplné uvolnění plynů i z hlubokého ledu,
          v němž tlak uzavřel část vzduchu do krystalových struktur zvaných
          klatráty. Tavení je další možností, využívanou například při analýze
          metanu. Pro CO₂ je vhodnější suchý postup, protože při tavení se
          část CO₂ může rozpouštět a kapalná voda umožňuje chemické reakce.
          Volba způsobu uvolnění proto závisí na sledovaném plynu i podobě ledu.{" "}
          <SourceLink id="DOI_10_5194_amt_6_251_2013">(Bereiter a kol. 2013, úvod)</SourceLink>
        </p>

        <h2>Nejistoty a ověření výsledku</h2>
        <p>
          Přesnost záznamu ovlivňuje uvolnění a analýza plynu, určení data
          i promíchání vzduchu před uzavřením. Krátké výkyvy se ve směsi různě
          starého vzduchu zeslabují. Kontrolu poskytuje porovnání vrtů:
          revidovaný záznam CO₂ z Law Dome se záznamy z vrtu EPICA v Zemi královny Maud
          a z jižního pólu shodoval s náhodnými rozdíly do 4 ppm. Přetrvávají i nevysvětlené rozdíly,
          například záznam WAIS Divide
          ze západní Antarktidy ležel v průměru přibližně o 3 ppm výše.
          Tyto rozdíly jsou podstatné při posuzování drobných změn.{" "}
          <SourceLink id="DOI_10_5194_essd_11_473_2019">(Rubino a kol. 2019, oddíly 1 a 3.2)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Podrobnosti k nejistotám a nezávislé kontrole</summary>
          <p>
            Nejistota jednotlivé koncentrace v souboru Law Dome zahrnuje analýzu,
            opravu vlivu extrakce a kvalitu konkrétního vzorku. Autoři ji odvozují
            zejména z rozptylu kontrolních měření známého vzduchu a z hodnot
            příznaků kvality. Vzorky s prokazatelným závažným problémem, například
            s vrstvou taveniny, vyřazují. Uvedená nejistota nezahrnuje dodatečné
            rozdíly mezi vrty. Pro část předindustriálního období tyto rozdíly
            podle autorů mohou dosahovat až 5 ppm.{" "}
            <SourceLink id="DOI_10_5194_essd_11_473_2019">(Rubino a kol. 2019 a doplněk S1)</SourceLink>
          </p>
          <p>
            Rozdíl stáří ledu a vzduchu není totéž co šířka časového záběru vzorku.
            První údaj posouvá bod na časové ose, druhý popisuje, přes jak dlouhé
            období se atmosférický signál promíchal. Přesnější analyzátor tento
            přirozený časový záběr nezúží. Model pohybu vzduchu má navíc nejisté
            parametry. Trudingerová a kolegové proto zkoumali více nastavení,
            která vyhovují naměřeným profilům plynů, a vyčíslili jejich dopad
            na odhad stáří.{" "}
            <SourceLink id="DOI_10_5194_acp_13_1485_2013">(Trudinger a kol. 2013)</SourceLink>
          </p>
          <p>
            Porovnání více jader odebraných na Law Dome kontroluje místní
            rozdíly, sdílí však laboratoř i kalibrační stupnici. Srovnání
            s vrty v Zemi královny Maud a na jižním pólu zahrnuje také měření v Bernu,
            a je proto nezávislejší. Shoda s dnešním vzduchem zase prověřuje
            návaznost obou způsobů odběru. Při jejím posouzení je nutné vědět,
            že známé atmosférické průběhy slouží také k nastavení modelu firnu.
            Takové porovnání samo o sobě není nezávislým ověřením datování.{" "}
            <SourceLink id="DOI_10_5194_essd_11_473_2019">(Rubino a kol. 2019)</SourceLink>{" "}
            <SourceLink id="DOI_10_5194_acp_13_1485_2013">(Trudinger a kol. 2013)</SourceLink>
          </p>
        </details>

        <h2>Příklad: dvě měření z Law Dome</h2>
        <p>
          Z veřejného souboru CSIRO vybereme dva vzorky jádra DE08.
          Pracujeme už s publikovanými koncentracemi po kalibraci a opravách
          a s převzatým datováním. Ukázka proto začíná čtením hotových výsledků,
          nikoli původním elektrickým signálem chromatografu.
          Tabulka uvádí kalendářní roky. Číslice za desetinnou čárkou určují
          polohu uvnitř roku.{" "}
          <SourceLink id="DOI_10_25919_5bfe29ff807fb">(Rubino a kol., data CSIRO, verze 3)</SourceLink>
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap">
            <table>
              <caption>Dva vzorky DE08. Hodnoty zaokrouhlené pro čtení.</caption>
              <thead><tr><th>Vzorek</th><th>Rok ledu</th><th>Rok vzduchu</th><th>CO₂ (ppm)</th></tr></thead>
              <tbody>
                <tr><td>DE08 200</td><td>1820,30</td><td>1851,30</td><td>285,47</td></tr>
                <tr><td>DE08 205</td><td>1938,69</td><td>1969,69</td><td>323,79</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>
          U prvního vzorku je vzduch o 31 let mladší než led.
          Proto naměřených 285,47 ppm přiřazujeme roku 1851,30:
        </p>
        <Equation tex={String.raw`y_{\mathrm{vzduch}} = 1820{,}30 + 31 = 1851{,}30`} />
        <p>
          Stejný odstup mají i data druhého vybraného vzorku.
          Jeho vzduch odpovídá přibližně roku 1969,69.
          Odečtením koncentrací zjistíme, o kolik se zachycený podíl CO₂ mezi
          těmito dvěma vzorky změnil. S koncentracemi uvedenými na tři desetinná místa dostaneme:
        </p>
        <Equation tex={String.raw`\Delta c = 323{,}787 - 285{,}469 = 38{,}318\,\mathrm{ppm}`} />
        <p>
          <InlineMath tex={String.raw`\Delta c`} /> označuje rozdíl koncentrací.
          Pozdější vzorek má přibližně o 38,3 ppm více CO₂.
          Porovnáváme dvě měření směsí různě starého vzduchu přiřazených
          k uvedeným datům. Samotné odečtení nerozhoduje o příčině nárůstu,
          ukazuje však konkrétní výsledek, kterým ledový archiv doplňuje
          přímé pozorování atmosféry.{" "}
          <SourceLink id="DOI_10_25919_5bfe29ff807fb">(Data CSIRO)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Data a postup pro zopakování</summary>
          <p>
            Použit je původní soubor Law_Dome_GHG_2000years.xlsx, list CO2byCore,
            řádky 2 a 5. Datová kolekce má verzi 3 z 4. září 2024,
            list ReadMe uvádí poslední úpravu dat v listopadu 2018.
            Přístup 28. října 2026. Podmínky: CC BY 4.0, Rubino a kolegové / CSIRO.
            Sloupce Ice Age a CO2 Age obsahují kalendářní roky, nikoli počet
            let před současností. Jejich desetinná místa nevyjadřují jistotu
            datování na setiny roku.{" "}
            <SourceLink id="DOI_10_25919_5bfe29ff807fb">Původní data a metadata</SourceLink>.
          </p>
          <p>
            Sloupec Uncert uvádí pro vzorky DE08 200 a DE08 205 hodnoty
            0,942 a 0,628 ppm. Jejich význam a sestavení popisuje doplněk
            metodické studie. Neobsahují nejistotu datování ani všechny možné
            společné odchylky měření. Rozdíl 38,318 ppm proto ponecháváme jako
            aritmetický výsledek a věcně jej shrnujeme zaokrouhleně.{" "}
            <SourceLink id="DOI_10_5194_essd_11_473_2019">(Rubino a kol. 2019, doplněk S1.3)</SourceLink>
          </p>
          <ul>
            <li><a href="/data/methods/ice-cores/Law_Dome_GHG_2000years.xlsx">Původní datový soubor XLSX</a></li>
            <li><a href="/data/methods/ice-cores/de08-extract.csv">Výběr obou vzorků v CSV</a></li>
            <li><a href="/data/methods/ice-cores/reproduce.py">Skript Python pro čtení originálu a zopakování výpočtu</a></li>
            <li><a href="/data/methods/ice-cores/provenance.json">Původ dat, výběr a kontrolní součty</a></li>
            <li><a href="/data/methods/ice-cores/README.txt">Návod a citace</a></li>
          </ul>
          <p>
            Uložte soubory do společné složky a spusťte <code>python reproduce.py</code>.
            Skript vystačí se standardní knihovnou, zkontroluje otisky souborů,
            načte skutečné hodnoty z původního sešitu a porovná je s CSV.
            Tím ověřuje tuto ukázku, nikoli nezávisle laboratorní měření.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Ledové jádro uchovává vzduch, jehož složení lze změřit v laboratoři.
            Spojení analýzy plynu s datováním ukazuje vývoj atmosféry i před
            začátkem pravidelného přístrojového měření. K porovnání se záznamem
            v samotném ledu potřebujeme rozlišit obě stáří. Díky tomu lze
            sledovat souvislosti mezi změnami atmosféry a prostředí, v němž
            sníh vznikal.
          </p>
        </div>
      </div>
    </article>
  );
}
