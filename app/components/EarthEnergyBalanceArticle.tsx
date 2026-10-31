import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function EarthEnergyBalanceArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2 id="co-vysvetlujeme">Co potřebujeme vysvětlit</h2>
        <p className="article-prose__intro">
          Energetická bilance Země je porovnání energie, kterou planeta přijímá,
          s energií, kterou odevzdává do okolního vesmíru. Její nerovnováha mění
          množství energie uložené v oceánu, atmosféře, pevnině a ledu.
          Tato souvislost spojuje dvě naše pozorování: růst{' '}
          <Link href="/pozorovani/gmst/#pozorovani">globální teploty u povrchu</Link> a přibývání{' '}
          <Link href="/pozorovani/tepelny-obsah-oceanu/#pozorovani">tepla v oceánu</Link>.
          Spojovacím článkem je energie, kterou Země získává z rozdílu mezi příjmem a výdejem.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021)</SourceLink>
        </p>
        <p>
          Za roky 1971–2020 se v klimatickém systému nahromadilo přibližně
          381 zettajoulů energie. Joule je jednotka energie a jeden zettajoule
          odpovídá 10²¹ joulům. Asi 89 % tohoto přírůstku připadlo na oceán.
          Vysvětlení proto musí zachytit nejen růst teploty vzduchu,
          ale i ukládání tepla do vody pod hladinou. Musí také objasnit,
          proč se rychlost tohoto ukládání v čase mění a jak souvisí
          s měřeným zářením Země.{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>
        </p>

        <h2 id="toky-energie">Kudy energie přichází a odchází</h2>
        <p>
          Zemi v tomto článku bereme jako jeden celek včetně atmosféry. Sluneční
          záření do něj přináší energii. Část se odrazí od oblaků, povrchu a částic
          v atmosféře zpět do vesmíru. Zbytek se pohltí a předá energii prostředí,
          ve kterém k pohlcení došlo. Při výpočtu ohřevu proto od dopadajícího
          slunečního záření nejprve odečítáme jeho odraženou část.{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: energetická bilance Země)</SourceLink>
        </p>
        <p>
          Povrch, atmosférické plyny i oblaka současně vysílají vlastní tepelné
          záření. Při pozemských teplotách leží převážně v infračervené oblasti,
          tedy na delších vlnových délkách než viditelné světlo.
          Záření, které nakonec unikne do vesmíru, odnáší energii z celého systému.
          Počítáme tedy dva různé odcházející toky: odražené sluneční záření
          a tepelné záření vydávané Zemí.{' '}
          <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018, úvod)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/energeticka-bilance-zeme/toky-energie.svg"
            alt="Sluneční záření přichází k Zemi. Část se odráží zpět do vesmíru a část Země pohltí. Tepelné záření odnáší energii do vesmíru. Přebytek pohlcené energie zůstává v klimatickém systému."
            width={760} height={620} />
          <figcaption>
            Žluté šipky označují sluneční záření, červená tepelné záření.
            Rámeček zahrnuje povrch i atmosféru. Schéma ukazuje směr přenosu,
            šířky šipek nevyjadřují velikost toků. Vlastní kresba podle vymezení bilance v{' '}
            <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">Loeb a kol. (2018)</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Uvnitř tohoto celku se energie přesouvá také prouděním vzduchu a vody,
          vedením tepla nebo vypařováním a kondenzací vody. Energie, kterou
          oceán odevzdá atmosféře, zůstává součástí jejich společného součtu.
          Pro bilanci celé planety rozhoduje až přenos přes její vnější hranici.
          Proto měření záření u zemského povrchu odpovídá na jinou otázku než
          měření výměny Země s vesmírem. Obě uspořádání vysvětluje{' '}
          <Link href="/metody/mereni-radiacnich-toku/#druzicova-bilance">metoda měření radiačních toků</Link>.{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics, oddíly 1.6 a 3.3)</SourceLink>
        </p>

        <h2 id="nerovnovaha-a-teplota">Jak nerovnováha mění teplotu</h2>
        <p>
          Jestliže Země po určitou dobu přijímá více energie, než vydává,
          její zásoba energie roste. To je použití zákona zachování energie.
          Pohlcená energie může zvýšit teplotu vody, vzduchu nebo půdy.
          Může také roztavit led. Při tání se spotřebuje na změnu skupenství,
          aniž by musela současně růst teplota tající směsi vody a ledu.{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics, oddíly 1.5 a 3.3)</SourceLink>
        </p>
        <p>
          Změnu může spustit zvýšení slunečního příkonu, menší odrazivost Země
          nebo omezení úniku tepelného záření do vesmíru. Tyto příčiny mění
          některý z energetických toků. Následuje hromadění energie a odezva
          teploty. Oteplující se Země však zároveň mění svůj vlastní výdej:
          teplejší povrch a teplejší vrstvy atmosféry při jinak stejných
          vlastnostech vyzařují více. Tím se původní přebytek energie zmenšuje.{' '}
          <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967)</SourceLink>
        </p>
        <h3>Proč oteplení zvyšuje vyzařování</h3>
        <p>
          Vztah mezi teplotou a tepelným zářením lze změřit v laboratoři.
          Pro ideální černé těleso, které pohlcuje veškeré dopadající záření,
          jej v součtu přes všechny vlnové délky vyjadřuje Stefanův–Boltzmannův zákon:
        </p>
        <Equation tex={String.raw`F = \sigma T^4`} />
        <p>
          <InlineMath tex="F" /> je vyzářený výkon z jednoho metru čtverečního
          ve W/m². Watt znamená jeden joule energie za sekundu.{' '}
          <InlineMath tex="T" /> je absolutní teplota v kelvinech,
          získaná přičtením 273,15 k teplotě ve stupních Celsia.
          Konstanta <InlineMath tex="\sigma" /> má hodnotu přibližně{' '}
          <InlineMath tex={String.raw`5{,}67\times10^{-8}\,\mathrm{W\,m^{-2}\,K^{-4}}`} />.
          Čtvrtá mocnina říká, že i malé oteplení zvýší vyzařovaný výkon.
          Zákon a jeho použití rozebírá{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">University Physics, oddíl 1.6</SourceLink>.
        </p>
        <p>
          U Země záření přichází z povrchu i z různých výšek atmosféry.
          Výpočet proto skládá jejich příspěvky a průchod záření jednotlivými
          vrstvami. Když v takovém výpočtu zvýšíme teplotu povrchu a celé
          troposféry o stejnou hodnotu a ostatní vlastnosti ponecháme,
          dostaneme základní stabilizující odezvu. Troposféra je spodní část
          atmosféry, v níž probíhá většina počasí. Soden a kolegové pro tento
          postup ve srovnávaných modelech získali zvýšení výdeje přibližně o 3,1–3,2 W/m² na jeden stupeň
          oteplení. Jde o izolovanou teplotní odezvu, označovanou jako Planckova.{' '}
          <SourceLink id="DOI_10_1175_2007JCLI2110_1">(Soden a kol. 2008, oddíl 5g)</SourceLink>
        </p>
        <p>
          Ve skutečném klimatu se s teplotou mění také množství vodní páry,
          oblaka a rozsah sněhu a ledu. Tyto změny opět zasahují do energetických
          toků. Říkáme jim zpětné vazby, protože jsou odezvou na změnu klimatu
          a samy ovlivňují její další průběh. Některé zesilují oteplení, jiné
          ho tlumí. Výsledná změna bilance zahrnuje tyto účinky
          i přímý účinek teploty. Jejich oddělení popisuje stejná{' '}
          <SourceLink id="DOI_10_1175_2007JCLI2110_1">studie Sodena a kolegů</SourceLink>.
        </p>
        <p>
          Pokud se původní působení ustálí, tento proces směřuje k nové bilanci
          při změněné teplotě. Oceán přitom přijímá a přenáší teplo do hloubky,
          takže se celý systém přizpůsobuje postupně. Po dobu, kdy výdej stále
          zaostává za příjmem, energie přibývá. Tento průběh spojuje změnu
          záření s pokračujícím ohříváním oceánu. Teplota vzduchu u povrchu
          přitom může mezi jednotlivými roky kolísat i podle toho, jak se
          teplo mezi vzduchem a oceánem rozděluje.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, úvod)</SourceLink>
        </p>

        <h2 id="vypocet-bilance">Jak se bilance počítá</h2>
        <p>
          Pro planetární bilanci používáme průměr přes celou Zemi, tedy také
          přes noční stranu, a za uvedené období. Označme dopadající sluneční
          tok <InlineMath tex="S" />, jeho odraženou část <InlineMath tex="R" />
          {' '}a odcházející tepelné záření <InlineMath tex="L" />.
          Všechny tři hodnoty jsou kladné velikosti toků ve W/m².
          Jejich rozdíl <InlineMath tex="N" /> je radiační nerovnováha:
        </p>
        <Equation tex={String.raw`N = S - R - L`} />
        <p>
          Kladné <InlineMath tex="N" /> znamená přírůstek energie,
          záporné její úbytek. Při nule se příjem a výdej vyrovnávají.
          V tomto zápisu již <InlineMath tex="S" /> představuje globální průměr.
          U Země je přibližně 340 W/m², z nichž se zhruba 100 W/m² odrazí.
          Asi 240 W/m² se tak pohltí. Takto zaokrouhlená čísla ukazují velikost
          hlavních toků. Malý rozdíl mezi příjmem a výdejem se určuje
          z přesnějších měření.{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: globální průměry)</SourceLink>{' '}
          <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018: měření nerovnováhy)</SourceLink>
        </p>
        <p>
          Abychom tok porovnali s přibýváním tepla, vynásobíme ho plochou Země
          a dobou, po kterou působí. Pro průměrnou nerovnováhu
          {' '}<InlineMath tex="\overline{N}" /> za časový interval
          {' '}<InlineMath tex="\Delta t" /> platí přibližně:
        </p>
        <Equation tex={String.raw`\Delta H \simeq A\,\overline{N}\,\Delta t`} />
        <p>
          <InlineMath tex="\Delta H" /> je přírůstek energie v joulech,{' '}
          <InlineMath tex="A" /> plocha celé Země, přibližně{' '}
          <InlineMath tex={String.raw`5{,}10\times10^{14}\,\mathrm{m^2}`} />,
          a <InlineMath tex="\Delta t" /> čas v sekundách.
          Toto radiační přiblížení používáme pro současné klimatické změny,
          u nichž jsou změny ostatních přívodů energie malé.
          Stejný převod umožňuje porovnávat součet energie uložené v jednotlivých
          prostředích s planetárním tokem.{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023, oddíl 6)</SourceLink>
        </p>
        <p>
          Pro představu zvolme stálý přebytek 1 W/m² po dobu jednoho roku
          o 365,25 dnech. Násobíme 1 × 5,10 × 10¹⁴ × 31 557 600
          a dostaneme přibližně 1,61 × 10²² joulů, tedy 16,1 zettajoulu.
          Jeden zettajoule je 10²¹ joulů. Jde o ilustrační výpočet se zvoleným
          tokem, nikoli o hodnotu naměřenou v konkrétním roce. Ukazuje, proč
          má i malý přebytek na každém metru čtverečním v planetárním součtu
          velký účinek.
        </p>

        <h2 id="predpovedi">Co má měření ukázat</h2>
        <p>
          Ze vztahu mezi tokem a uloženou energií vyplývá přímý test.
          Po dobu kladné bilance má celková zásoba energie růst.
          Při zesílení přebytku má růst rychleji. Družicový záznam toku
          a měření přírůstku tepla se proto mají shodovat v časových změnách,
          pokud je převedeme na stejnou plochu a stejná období. Tuto předpověď
          ve svém porovnání výslovně testovali{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">Loeb a kolegové (2021)</SourceLink>.
        </p>
        <p>
          Prostorový obraz má další podmínku: místní příjem energie může
          kompenzovat její přenos jinam. Tropické oblasti v ročním průměru
          získávají zářením přebytek, který atmosféra a oceán částečně
          přenášejí do vyšších zeměpisných šířek. Globální bilanci proto
          kontrolujeme součtem všech oblastí. Změny teploty v jednotlivých
          místech navíc závisejí na proudění a na tom, jak hluboko se teplo
          ukládá.{' '}
          <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018, úvod)</SourceLink>
        </p>

        <h2 id="historie">Jak se vysvětlení začalo ověřovat</h2>
        <p>
          Fourier v práci vydané roku 1827 rozlišoval sluneční ohřev,
          teplo pocházející z nitra Země a výměnu záření s okolím.
          Zkoumal, jak se při těchto přenosech ustavuje teplota planety.
          Šlo o rané vymezení fyzikálního problému. Dnešní přesné měření
          jednotlivých toků ani zákon tepelného záření tehdy neměl k dispozici.{' '}
          <SourceLink id="1827_Fourier_Temperatures">(Fourier 1827)</SourceLink>
        </p>
        <p>
          Zákon záření se vyvíjel pod tlakem laboratorních výsledků.
          Rubens a Kurlbaum měřili dlouhovlnné záření při různých teplotách
          a porovnávali naměřené hodnoty s navrženými vztahy.
          Planck v práci z roku 1901 výslovně uvedl, že právě nová měření
          ukázala meze dosavadního vztahu, a předložil nový zákon.
          Závislost vyzařování na teplotě tak získala oporu nezávislou
          na záznamech pozemského klimatu.{' '}
          <SourceLink id="DOI_10_1086_140874">(Rubens a Kurlbaum 1901)</SourceLink>{' '}
          <SourceLink id="DOI_10_1002_andp_19013090310">(Planck 1901)</SourceLink>
        </p>
        <p>
          Manabe a Wetherald roku 1967 počítali, jak se teplota povrchu
          a svislého sloupce atmosféry přizpůsobí změně záření.
          Zahrnuli pohlcování a vyzařování plyny, přenos tepla svislým
          promícháváním a změnu vodní páry při zachování relativní vlhkosti.
          Relativní vlhkost zde určuje, jak blízko je vzduch nasycení při dané
          teplotě. Jejich výpočet spojil původní zásah do bilance s novým
          teplotním stavem. Šlo o zjednodušený model atmosféry,
          nikoli o dodatečné přizpůsobení dnešním družicovým údajům.{' '}
          <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967)</SourceLink>
        </p>

        <h2 id="porovnani">Odpovídá tok energie skutečnému ohřívání Země?</h2>
        <h3>Energie uložená v jednotlivých prostředích</h3>
        <p>
          Von Schuckmannová a kolegové sestavili inventuru z měření oceánu,
          pevniny a atmosféry a z odhadů energie spotřebované na tání ledu.
          Za roky 1971–2020 vyčíslili přírůstek na 381 ± 61 zettajoulů,
          odpovídající průměrnému toku 0,48 ± 0,10 W/m² přes plochu celé Země.
          Uvedené nejistoty vycházejí z jejich přibližně 95% intervalů.
          Asi 89 % přírůstku připadlo na oceán, 6 % na pevninu,
          4 % na tání ledu a 1 % na atmosféru.
          Výsledek tedy zachycuje hromadění energie v celém systému
          s výraznou převahou oceánu.{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023, oddíl 6)</SourceLink>
        </p>
        <h3>Dvě měřicí cesty ke změně rychlosti ohřevu</h3>
        <p>
          Družicové přístroje CERES, systém pro měření oblaků a energetické
          bilance Země, sledují odražené sluneční a odcházející tepelné záření.
          Ve vodě naproti tomu sondy měří teploty v různých hloubkách.
          Jejich převod na uložené teplo popisuje{' '}
          <Link href="/pozorovani/tepelny-obsah-oceanu/#soucet-tepla">výpočet obsahu tepla v oceánu</Link>.
          Loeb a kolegové porovnali časové změny obou výsledků od poloviny
          roku 2005 do poloviny roku 2019.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíly 2 a 3.1)</SourceLink>
        </p>
        <p>
          U oceánu porovnávali změnu rychlosti ukládání tepla ve vrstvě
          0–2 000 metrů. U družic změnu čistého příjmu energie.
          Oba výsledky vztáhli k ploše celé Země. Graf proto ukazuje,
          o kolik W/m² se příslušný tok zvýšil za deset let.
          Bod je odhad změny a úsečka její 90% interval spolehlivosti.
          Podkladem jsou zveřejněné hodnoty v oddílu 3.1 citované studie.
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/energeticka-bilance-zeme/porovnani-trendu.svg"
            alt="Nárůst toku energie za deset let v období od poloviny roku 2005 do poloviny roku 2019. Oceán 0 až 2 000 metrů: 0,43 plus minus 0,40 W/m². Družice CERES: 0,50 plus minus 0,47 W/m². Zobrazeny 90procentní intervaly."
            width={760} height={500} />
          <figcaption>
            Oceánské měření a družice zachycují slučitelné zvyšování rychlosti
            ohřevu. Vodorovná osa ukazuje změnu toku za deset let, nikoli celkový
            tok ani teplotu. Vlastní graf podle{' '}
            <SourceLink id="DOI_10_1029_2021GL093047">Loeba a kol. (2021)</SourceLink>,
            údaje a intervaly převzaté beze změny.{' '}
            <a href="/media/energeticka-bilance-zeme/porovnani-trendu.csv" download>Stáhnout hodnoty grafu</a>.
          </figcaption>
        </figure>
        <p>
          Pro váhu tohoto testu je podstatné, co se skutečně porovnává.
          Dlouhodobý průměr družicového produktu CERES EBAF se nastavuje
          podle odhadu ukládání tepla v Zemi. Shoda průměru tedy vzniká
          zčásti konstrukcí produktu. Časové kolísání a trend družicového
          záznamu však nejsou předepsány oceánským průběhem.
          Právě jejich porovnání přináší další kontrolu.{' '}
          <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018, kalibrace EBAF)</SourceLink>
        </p>
        <p>
          Samotný účinek vyšší teploty na vyzařování lze v měřeném vývoji
          hledat odděleně od účinků vody, oblaků a plynů. Výpočty přenosu
          záření postupně mění vždy jednu z pozorovaných vlastností
          a zjišťují její příspěvek k výslednému toku. Tímto postupem
          Loeb a kolegové zjistili, že rostoucí teplota působila směrem
          k většímu výdeji energie. Ostatní změny v jejich součtu přesto
          zvýšily nerovnováhu. To odpovídá očekávání stabilizující teplotní odezvy.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíl 3.2)</SourceLink>
        </p>

        <h2 id="priciny">Co porovnání říká o příčinách</h2>
        <p>
          Přírůstek uložené energie a měřená radiační nerovnováha dokládají,
          že Země energii získává. Původ této změny určíme až porovnáním
          jednotlivých toků a jejich možných příčin. Následující tabulka
          rozlišuje očekávání od výsledku testu. U vnitřní proměnlivosti
          počítá i s tím, že změny oceánu mohou ovlivnit oblaka a následně
          výměnu energie s vesmírem. Mezi další příčiny patří změny aerosolů,
          drobných kapalných nebo pevných částic rozptýlených ve vzduchu.
        </p>
        <div className="energy-comparison">
          <span className="energy-comparison__hint">Tabulku lze posunout do stran.</span>
          <div className="energy-comparison__scroll" role="region" aria-label="Porovnání vysvětlení energetické nerovnováhy" tabIndex={0}>
            <table>
              <caption>Možné příčiny a jejich rozlišující znaky</caption>
              <thead><tr><th scope="col">Vysvětlení</th><th scope="col">Co očekáváme</th><th scope="col">Co ukazuje test</th></tr></thead>
              <tbody>
                <tr>
                  <th scope="row">Silnější sluneční příkon</th>
                  <td>Větší dopadající sluneční tok, který může zvýšit pohlcenou energii.</td>
                  <td>V září 2002 až březnu 2020 pohlcené sluneční energie přibývalo,
                    ale dopadající sluneční tok takový růst nevykazoval.
                    Měnila se především odražená část.{' '}
                    <SourceLink id="DOI_10_1029_2021GL093047">Loeb 2021, oddíl 3.2</SourceLink></td>
                </tr>
                <tr>
                  <th scope="row">Přesun tepla uvnitř systému</th>
                  <td>Ohřev jedné části se při samotném přesunu vyrovná ochlazením jiné.
                    Pokud se současně změní oblaka a záření, může kolísat i celková zásoba energie.</td>
                  <td>Součet zásob dlouhodobě roste. Pro trend nerovnováhy v letech
                    2001–2020 vychází samotná vnitřní proměnlivost v testovaných modelech
                    jako velmi nepravděpodobné vysvětlení.{' '}
                    <SourceLink id="DOI_10_1038_s41467_021_24544_4">Raghuraman 2021</SourceLink></td>
                </tr>
                <tr>
                  <th scope="row">Změny plynů, aerosolů a odezva klimatu</th>
                  <td>Změní se únik tepelného záření i odraz slunečního záření.
                    Oteplování současně zvyšuje teplotní příspěvek k výdeji.</td>
                  <td>Výpočty se změnami lidského působení a klimatickou odezvou
                    dokážou zachytit pozorovaný růst nerovnováhy v letech 2001–2020.
                    Regionální rozdíly zůstávají.{' '}
                    <SourceLink id="DOI_10_1038_s41467_021_24544_4">Raghuraman 2021</SourceLink></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>
          Raghuraman a kolegové porovnávali měřený dvacetiletý trend
          s dlouhými modelovými běhy při stálém vnějším působení.
          Zkoumali tak, jak velké trendy může vyrobit samotné kolísání
          atmosféry a oceánu. Výsledek prověřili na 47 spojených modelech
          atmosféry a oceánu a na dalších řízených pokusech.
          V části výpočtů zadali skutečně pozorované teploty hladiny a mořský led,
          zatímco měnili působení plynů a aerosolů. Hodnotili vypočtené záření,
          nikoli úspěšnost předpovědi teplot, které sami zadali.
          Zjištění podpírá lidský příspěvek k růstu nerovnováhy v tomto období.{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, metody a obr. 2–4)</SourceLink>
        </p>
        <p>
          Jednotlivé příčiny a zpětné vazby mají v našem katalogu samostatná témata:
          {' '}<Link href="/mechanismy/radiacni-pusobeni-sklenikovych-plynu/">skleníkové plyny</Link>,
          {' '}<Link href="/mechanismy/slunecni-promenlivost/">Slunce</Link>,
          {' '}<Link href="/mechanismy/sopecne-aerosoly/">sopečné aerosoly</Link>,
          {' '}<Link href="/mechanismy/prumyslove-aerosoly-a-oblaka/">aerosoly z lidské činnosti</Link>,
          {' '}<Link href="/mechanismy/oblaka-a-jejich-klimaticke-zpetne-vazby/">oblaka</Link>,
          {' '}<Link href="/mechanismy/vodni-para-jako-zpetna-vazba/">vodní pára</Link> a
          {' '}<Link href="/mechanismy/odrazivost-snehu-a-ledu-jako-zpetna-vazba/">odrazivost sněhu a ledu</Link>.
          Energetická bilance jim poskytuje společnou kontrolu: jejich součet
          musí odpovídat výměně záření i skutečnému přírůstku energie.
        </p>

        <h2 id="nejistoty">Rozsah platnosti a nejistoty</h2>
        <p>
          Zákon zachování energie a růst tepelného vyzařování s teplotou mají
          pevný fyzikální základ. Současné hromadění energie dokládají měření.
          Hlavní nejistoty se týkají přesné velikosti přírůstku, krátkodobých
          výkyvů a rozdělení změny mezi jednotlivé příčiny. Rozlišujeme proto
          ověření mechanismu od určení podílu konkrétního působení.
        </p>
        <details className="method-details">
          <summary>Podrobnosti měření a rozlišení příčin</summary>
          <p>
            Družice určují malou nerovnováhu jako rozdíl mnohem
            větších toků. Jejich dlouhodobou stabilitu se daří určit přesněji
            než absolutní úroveň tohoto rozdílu. Proto CERES EBAF váže
            průměr na inventuru energie. Změny kalibrace by mohly ovlivnit
            trend, který se kontroluje i mezi přístroji na různých družicích.{' '}
            <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018)</SourceLink>
          </p>
          <p>
            Inventuru ovlivňuje nerovnoměrné pokrytí oceánu, zvláště
            hlubokých, polárních a mělkých pobřežních oblastí.
            Různé oceánské výpočty mohou sdílet stejné profily, a proto
            jejich shoda nepředstavuje úplnou nezávislost. U tání ledu
            vstupuje do výsledku také převod změny hmotnosti na spotřebovanou
            energii. Uvedené intervaly se vztahují ke konkrétním součtům
            a období.{' '}
            <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>
          </p>
          <p>
            Kolísání oceánu může prostřednictvím oblaků ovlivnit i bilanci
            s vesmírem. Při rozlišení příčin proto potřebujeme sledovat
            časový i prostorový obraz. Modelové porovnání z let 2001–2020
            podporuje lidský příspěvek, ale některé regionální změny
            oblaků a aerosolů zachycuje hůře. Přesný rozklad těchto příspěvků
            je méně jistý než zjištění, že energie v systému přibývá.{' '}
            <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, diskuse)</SourceLink>
          </p>
        </details>
        <h3>Jaké zjištění by vyžadovalo změnu výkladu</h3>
        <p>
          Kdyby dlouhodobě a po započtení všech významných zásob přibývalo
          jiné množství energie, než odpovídá toku přes hranici systému,
          museli bychom hledat chybějící přenos nebo chybu měření.
          To je konkrétní test uzavření bilance. Rozdělení příčin by se změnilo,
          kdyby přesnější měření záření, oblaků či složení atmosféry ukázala
          odlišné příspěvky, nebo kdyby lépe ověřené modely vysvětlily
          pozorovaný trend jinou kombinací procesů.
        </p>

        <h2 id="shrnuti">Shrnutí mechanismu</h2>
        <div className="method-conclusion">
          <p>
            Když Země pohltí více energie, než vyzáří do vesmíru,
            energie se v ní hromadí a ohřívá především oceán.
            Vyšší teplota současně zvyšuje vyzařování a působí proti
            původní nerovnováze. Tento fyzikálně ověřený mechanismus
            propojuje měřené záření s dlouhodobým přírůstkem tepla.
            Jeho silným testem je shoda časových změn získaných družicemi
            a měřením uvnitř oceánu. Určení podílů jednotlivých příčin
            pak vyžaduje další porovnání jejich odlišných účinků.
          </p>
        </div>

        <h2 id="prameny">Prameny, data a obrázky</h2>
        <p>
          Plné texty jsou dostupné bez předplatného přes karty zdrojů.
          Historické prameny dokládají vývoj vysvětlení, moderní studie
          poskytují jeho číselné testy. Graf používá zveřejněné souhrnné
          odhady, jejichž původní intervaly zachovává.
        </p>
        <div className="article-source-groups">
          <section>
            <h3>Fyzikální základ a historie</h3>
            <ul>
              <li><SourceLink id="1827_Fourier_Temperatures">Fourier 1827</SourceLink>: původní práce o teplotách Země, sken Francouzské akademie věd.</li>
              <li><SourceLink id="DOI_10_1086_140874">Rubens a Kurlbaum 1901</SourceLink> a <SourceLink id="DOI_10_1002_andp_19013090310">Planck 1901</SourceLink>: laboratorní měření a zákon tepelného záření.</li>
              <li><SourceLink id="1967_Manabe_Wetherald">Manabe a Wetherald 1967</SourceLink>: výpočet teplotní odezvy atmosféry.</li>
              <li><SourceLink id="2016_OpenStax_University_Physics_2">University Physics, svazek 2</SourceLink>: otevřená učebnice, oddíly 1.5, 1.6 a 3.3.</li>
              <li><SourceLink id="DOI_10_1175_2007JCLI2110_1">Soden a kol. 2008</SourceLink>: oddělení teplotní odezvy a zpětných vazeb.</li>
              <li><SourceLink id="WEB_NASA_Earth_Energy_Budget">NASA: Climate and Earth’s Energy Budget</SourceLink>: vymezení globálních toků a jejich velikosti.</li>
            </ul>
          </section>
          <section>
            <h3>Měření a porovnání vysvětlení</h3>
            <ul>
              <li><SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">Loeb a kol. 2018</SourceLink>: dokumentace produktu CERES EBAF a jeho kalibrace.</li>
              <li><SourceLink id="DOI_10_1029_2021GL093047">Loeb a kol. 2021</SourceLink>: porovnání družic a oceánských měření, oddíl 3.1 a obr. 1.</li>
              <li><SourceLink id="DOI_10_5194_essd_15_1675_2023">Von Schuckmannová a kol. 2023</SourceLink>: inventura energie, oddíl 6 a obr. 8.</li>
              <li><SourceLink id="DOI_10_1038_s41467_021_24544_4">Raghuraman a kol. 2021</SourceLink>: test vnitřní proměnlivosti a vnějšího působení. Oddíly Data availability a Code availability odkazují na veřejná data a výpočetní kód.</li>
            </ul>
          </section>
          <section>
            <h3>Veřejná data a reprodukce grafu</h3>
            <ul>
              <li><SourceLink id="DATA_GCOS_EHI_1960_2020">Inventura energie GCOS 1960–2020</SourceLink>: data k součtům jednotlivých prostředí, licence CC BY 4.0.</li>
              <li><SourceLink id="DATA_CERES_PRP_2021">Data CERES k rozkladu radiačních změn</SourceLink>: příspěvky z analýzy Loeba a kolegů za září 2002 až březen 2020.</li>
              <li><a href="/media/energeticka-bilance-zeme/porovnani-trendu.csv" download>Hodnoty porovnávacího grafu</a> a <a href="/media/energeticka-bilance-zeme/README.txt">popis podkladů</a>. Přepis publikovaných souhrnných odhadů, nikoli nové zpracování jednotlivých měření.</li>
              <li><a href="/media/energeticka-bilance-zeme/generate_figures.py" download>Skript pro vytvoření grafu a schématu</a>. Vlastní grafika Klimatologie.eu, CC BY 4.0. Číselný podklad: Loeb a kol. 2021, CC BY 4.0.</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
