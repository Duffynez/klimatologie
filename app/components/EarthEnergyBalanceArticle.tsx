import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function EarthEnergyBalanceArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2 id="co-vysvetlujeme">Jak si vysvětlujeme přibývání tepla v oceánu</h2>
        <p className="article-prose__intro">
          V oceánu dlouhodobě přibývá teplo. Podle výpočtu Chenga a kolegů
          rostl jeho obsah v horních 2 000 metrech v letech 1955–2023 průměrně
          o 6,4 ± 0,3 zettajoulu ročně. Zettajoule je jednotka energie,
          která odpovídá 10²¹ joulům, uvedené rozmezí je 90% interval spolehlivosti.
          Měření i vývoj jednotlivých vrstev rozebírá pozorování{' '}
          <Link href="/pozorovani/tepelny-obsah-oceanu/#pozorovani">obsahu tepla v oceánu</Link>.{' '}
          <SourceLink id="DOI_10_5194_essd_16_3517_2024">(Cheng a kol. 2024)</SourceLink>
        </p>
        <p>
          Odkud se tato energie bere? Mohlo by jí více přicházet ze Slunce,
          mohla by se přesouvat z jiné části Země nebo by planeta mohla změnit,
          kolik energie odevzdává do vesmíru. Potřebujeme vysvětlení, které
          odpovídá ohřevu oceánu i současnému{' '}
          <Link href="/pozorovani/gmst/#pozorovani">růstu teploty u povrchu</Link>.
          Rozlišení těchto možností vyžaduje sledovat celou Zemi včetně atmosféry.
        </p>

        <h2 id="priciny">Jaká vysvětlení přicházejí v úvahu</h2>
        <h3>Silnější záření Slunce</h3>
        <p>
          Hlavním zdrojem energie pro klima je sluneční záření. Kdyby Slunce
          začalo dodávat více energie, mohla by se Země ohřívat i při stejném
          složení atmosféry. Část dopadajícího záření planeta odráží zpět
          do vesmíru, především oblaky a světlými povrchy. Zbytek pohltí,
          a tím získá energii. Pro tuto hypotézu je tedy rozhodující,
          zda zesílilo záření, které ke Zemi skutečně přichází.{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: energetická bilance Země)</SourceLink>
        </p>
        <h3>Přirozené kolísání oceánu a atmosféry</h3>
        <p>
          Oceánské proudy přenášejí teplo mezi oblastmi i hloubkami.
          Voda si je také vyměňuje se vzduchem. Takové přesuny mohou
          oteplit jednu část klimatického systému a ochladit jinou.
          Mají i další účinek: změněná teplota hladiny ovlivňuje tvorbu
          oblaků. Když se změní oblačnost, změní se také odraz slunečního
          záření a výdej energie do vesmíru. Přirozené kolísání proto může
          ovlivnit i množství energie v Zemi jako celku.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíl 3.2)</SourceLink>
        </p>
        <h3>Změny složení atmosféry</h3>
        <p>
          Země sama vysílá tepelné záření, kterým odevzdává energii do vesmíru.
          Při pozemských teplotách jde převážně o infračervené záření,
          pro oko neviditelné. Skleníkové plyny, například oxid uhličitý označovaný CO₂,
          část tohoto záření pohlcují a také samy vyzařují. Změna jejich
          množství proto mění průchod energie atmosférou. Přidání CO₂
          při jinak stejném stavu povrchu a spodní atmosféry omezuje únik
          tepelného záření. Země pak může energii získávat i při nezměněném Slunci.{' '}
          <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967)</SourceLink>
        </p>
        <p id="historie">
          Toto vysvětlení má základ v otázce, jak atmosféra udržuje teplotu
          povrchu. Fourier v roce 1827 rozebíral rozdíl mezi průchodem
          slunečního a zemského tepelného záření. Arrhenius v roce 1896
          vypočítal, jak by změna množství CO₂ mohla změnit teplotu.
          Manabe a Wetherald v roce 1967 spojili přenos záření s vertikálním
          přenosem tepla v atmosféře a s vlhkostí. Postupně tak vznikalo
          číselné vysvětlení, které lze porovnávat s měřením.{' '}
          <SourceLink id="1827_Fourier_Temperatures">(Fourier 1827)</SourceLink>{' '}
          <SourceLink id="1896_Arrhenius">(Arrhenius 1896)</SourceLink>{' '}
          <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967)</SourceLink>
        </p>
        <p>
          Složení atmosféry mění také aerosoly, drobné pevné částice
          a kapalné kapičky rozptýlené ve vzduchu. Některé sluneční záření
          rozptylují, jiné je pohlcují a další ovlivňují vlastnosti oblaků.
          Jejich změny mohou účinek skleníkových plynů zeslabovat nebo zesilovat.
          Při zkoumání příčin proto porovnáváme součet těchto vlivů
          s přirozeným kolísáním. Jednotlivé procesy mohou působit současně.{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021)</SourceLink>
        </p>

        <h2 id="predpovedi">Co z vysvětlení vyplývá a jak obstála</h2>
        <h3>Přesouvá se teplo, nebo ho celkově přibývá?</h3>
        <p>
          Samotný přesun tepla má jasný důsledek. Když jej jedna část Země
          získá, jiná musí stejné množství odevzdat. V součtu by energie
          nepřibyla. Tento důsledek můžeme ověřit tím, že k oceánu připočteme
          změny energie v atmosféře, pevnině a ledu. Takový součet zahrnuje
          i energii spotřebovanou na tání.{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics, oddíly 1.5 a 3.3)</SourceLink>
        </p>
        <p>
          Globální inventura pro roky 1971–2020 zjistila přírůstek
          381 ± 61 zettajoulů v celém klimatickém systému, s přibližně
          95% intervalem spolehlivosti. Asi 89 % připadlo na oceán,
          6 % na pevninu, 4 % na tání ledu a 1 % na atmosféru.
          Tento výsledek, uvedený i v{' '}
          <Link href="/pozorovani/tepelny-obsah-oceanu/#souvislost-s-bilanci">pozorování celkového přírůstku energie</Link>,
          vylučuje pouhý přesun jako úplné vysvětlení ohřevu.
          Přirozené změny oblaků a výměny energie s vesmírem musíme posoudit zvlášť.{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023, oddíl 6)</SourceLink>
        </p>
        <h3>Přibylo slunečního záření?</h3>
        <p>
          Vysvětlení silnějším Sluncem předpovídá růst dopadajícího
          slunečního záření. Ten můžeme odlišit od změny odrazivosti:
          měříme zvlášť záření přicházející ke Zemi a záření odražené zpět.
          V období od září 2002 do března 2020 Země pohlcovala stále více
          sluneční energie, dopadající záření však mírně ubývalo.
          Přírůstek pohlcené energie tedy vznikal menším odrazem.
          Růst slunečního příkonu je s výsledkem tohoto testu v rozporu.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíl 3.2)</SourceLink>
        </p>
        <h3>Stačí přirozené kolísání?</h3>
        <p>
          Přirozené kolísání může měnit i oblačnost, a proto jeho vliv
          nevyřeší samotný součet zásob. Potřebujeme zjistit, jak velkou
          a dlouhotrvající změnu může takto vytvořit. Raghuraman a kolegové
          použili dlouhé výpočty 47 modelů propojeného oceánu a atmosféry.
          Vnější podmínky, například množství skleníkových plynů,
          v nich zůstávaly stálé. Oceán, atmosféra, oblaka a led se mohly
          vzájemně ovlivňovat a přirozeně kolísat.{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, metody)</SourceLink>
        </p>
        <p>
          Autoři rozdělili výpočty na dvacetileté úseky a porovnali je
          s družicovým záznamem z let 2001–2020. V něm rostl rozdíl mezi
          příjmem a výdejem energie výrazněji, než bývalo běžné v kontrolních
          výpočtech. Samotné přirozené kolísání tak vyšlo jako velmi
          nepravděpodobné vysvětlení tohoto trendu. Jeho příspěvek tím
          nezmizel. Test ukazuje, že podle proměnlivosti zachycené těmito
          modely potřebujeme také měnící se vnější působení.{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, obr. 2)</SourceLink>
        </p>
        <h3>Odpovídají měření změnám složení atmosféry?</h3>
        <p>
          Vyšší koncentrace skleníkových plynů mají omezit odchod
          tepelného záření oproti stavu se stejnou teplotou a původním
          složením atmosféry. Oteplování samo naopak vyzařování zvyšuje.
          V pozorovaném vývoji proto mohou nastávat oba účinky současně:
          Země vyzařuje více než dříve, ale méně, než by při stejném
          oteplení vyzařovala bez přidaných skleníkových plynů.{' '}
          <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967)</SourceLink>{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021)</SourceLink>
        </p>
        <p>
          Takové porovnání provedli Raghuraman a kolegové dvěma sadami
          výpočtů atmosféry. Oběma zadali pozorované teploty hladiny
          a rozsah mořského ledu. V jedné nechali působení složení
          atmosféry stálé, ve druhé je měnili podle historického vývoje.
          Ověřovaným výsledkem bylo záření, teplota hladiny byla vstupem.{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, metody)</SourceLink>
        </p>
        <p>
          Se změnami skleníkových plynů a aerosolů výpočet zachytil růst
          energetické nerovnováhy z let 2001–2020 v mezích nejistoty měření.
          Pět dalších propojených klimatických modelů se změnami vnějšího
          působení poskytlo rovněž slučitelné trendy, většinou nižší než
          prostřední odhad z družic. Tyto testy podporují lidský příspěvek
          k růstu nerovnováhy v daném období.{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, obr. 3 a 4)</SourceLink>
        </p>

        <h2 id="vysvetleni">Jak Země získává a ukládá energii</h2>
        <p>
          Porovnání ukazují souběh změn složení atmosféry a odezvy oceánu,
          oblaků a povrchu. Silnější Slunce nevysvětluje růst pohlcené energie
          ve zkoumaném družicovém období a samotné přirozené kolísání
          nevysvětluje dobře trend nerovnováhy v letech 2001–2020.
          Vliv těchto příčin na ohřev spojuje energetická bilance:
          porovnání energie přijaté a odevzdané celou Zemí.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021)</SourceLink>{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021)</SourceLink>
        </p>
        <h3 id="toky-energie">Příjem a výdej na hranici Země</h3>
        <p>
          Pro bilanci si představíme hranici nad atmosférou. Dovnitř
          přichází sluneční záření. Ven odchází jeho odražená část
          a tepelné záření Země. Když od příjmu odečteme oba odcházející
          toky, získáme čistý příjem energie. Kladný výsledek znamená,
          že Země energii získává, záporný, že ji ztrácí.
          Při nulovém rozdílu je její bilance vyrovnaná.{' '}
          <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/energeticka-bilance-zeme/toky-energie.svg"
            alt="Sluneční záření přichází k Zemi. Část se odráží zpět do vesmíru a část Země pohltí. Tepelné záření odnáší energii do vesmíru. Přebytek pohlcené energie zůstává v klimatickém systému."
            width={760} height={620} />
          <figcaption>
            Žluté šipky označují sluneční záření, červená tepelné záření.
            Rámeček zahrnuje povrch i atmosféru. Šířky šipek nevyjadřují
            velikost toků. Vlastní kresba podle vymezení bilance v{' '}
            <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">Loeb a kol. (2018)</SourceLink>.
          </figcaption>
        </figure>
        <p>
          V globálním a dlouhodobém průměru dopadá na každý metr čtvereční
          Země přibližně 340 wattů slunečního záření. Asi 100 wattů
          se odráží a 240 wattů se pohltí. Watt vyjadřuje rychlost přenosu
          energie, jeden joule za sekundu. Hodnota 240 W/m² tedy znamená
          240 joulů za sekundu na metr čtvereční. Jde o průměr přes celý
          povrch koule, včetně noční strany. Oproti těmto tokům je současný
          přebytek malý, řádově jeden watt na metr čtvereční.{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: energetická bilance Země)</SourceLink>{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>
        </p>
        <h3>Jak přibývání skleníkových plynů změní bilanci</h3>
        <p>
          Tepelné záření povrchu prochází atmosférou jen částečně.
          Zbytek pohltí skleníkové plyny a oblaka, čímž získají energii.
          Atmosféra sama vyzařuje vzhůru i dolů. Část tohoto záření
          proto znovu přijme povrch, část unikne do vesmíru.
          Výdej celé Země závisí na tom, kolik záření projde přímo
          a kolik ho do vesmíru vyšlou jednotlivé vrstvy atmosféry.{' '}
          <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967)</SourceLink>{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: přirozený skleníkový efekt)</SourceLink>
        </p>
        <p>
          Přidaný CO₂ zachytí část záření, které by při jeho menším
          množství prošlo. Při výpočtu celého účinku započítáme i to,
          co plyn sám vyzáří. Pro původní teploty povrchu a spodní
          atmosféry vyjde menší odchod energie do vesmíru.
          Právě proto se začne energie hromadit. Postupné oteplování
          pak výdej zvyšuje, až může příjem a výdej znovu vyrovnat
          při vyšší teplotě. Tento sled vypočítali Manabe a Wetherald
          v modelu atmosférického sloupce, který zahrnoval záření,
          přenos tepla vzhůru i změnu množství vodní páry.{' '}
          <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967)</SourceLink>
        </p>
        <h3 id="nerovnovaha-a-teplota">Proč přebytek energie ohřívá oceán</h3>
        <p>
          Jestliže Země přijímá více energie, než vydává, energie se v ní
          hromadí. Podle zákona zachování energie se tento přebytek
          musí projevit ve změně jejích zásob.
          Pohlcená energie zvyšuje teplotu vody, půdy a vzduchu.
          Část se spotřebuje na tání ledu, při němž se mění skupenství,
          aniž by musela růst teplota tající směsi vody a ledu.{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics, oddíly 1.5 a 3.3)</SourceLink>
        </p>
        <p>
          Oceán může přijmout velké množství energie při malém zvýšení
          teploty. Voda má vysokou tepelnou kapacitu: na ohřátí kilogramu
          o jeden stupeň potřebujeme přibližně čtyři tisíce joulů.
          A v oceánu se ohřívá obrovská hmotnost vody. Proudění a promíchávání
          přenášejí teplo od hladiny do hlubších vrstev, takže jej postupně
          může přijímat stále větší objem. Proto je při sledování energetické
          změny důležitá i nepatrná změna teploty pod hladinou.{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics, oddíl 1.5)</SourceLink>{' '}
          <SourceLink id="DOI_10_5194_essd_16_3517_2024">(Cheng a kol. 2024)</SourceLink>
        </p>
        <h3>Proč oteplování postupně zvyšuje výdej</h3>
        <p>
          Ohřívající se Země zároveň silněji vyzařuje. Tento vztah
          mezi teplotou a zářením můžeme měřit v laboratoři. Rubens
          a Kurlbaum například měřili dlouhovlnné záření zahřívaného
          tělesa. Jejich výsledkům nevyhovoval tehdejší Wienův vztah,
          zatímco Planckův vztah odpovídal i této části měření.
          Zákon tepelného záření tak dostal podobu ověřitelnou při
          různých teplotách a vlnových délkách.{' '}
          <SourceLink id="DOI_10_1086_140874">(Rubens a Kurlbaum 1901, obr. 2 a 3)</SourceLink>{' '}
          <SourceLink id="DOI_10_1002_andp_19013090310">(Planck 1901)</SourceLink>
        </p>
        <p>
          Celkový vyzářený výkon ideálního černého tělesa, které pohltí
          všechno dopadající záření, popisuje Stefanův–Boltzmannův zákon:
        </p>
        <Equation tex={String.raw`F = \sigma T^4`} />
        <p>
          <InlineMath tex="F" /> je výkon vyzářený z jednoho metru čtverečního
          ve W/m² a <InlineMath tex="T" /> teplota v kelvinech.
          Kelviny získáme přičtením 273,15 k teplotě ve stupních Celsia.
          Konstanta <InlineMath tex="\sigma" /> je přibližně{' '}
          <InlineMath tex={String.raw`5{,}67\times10^{-8}\,\mathrm{W\,m^{-2}\,K^{-4}}`} />.
          Vyšší teplota tedy znamená větší výdej energie a čtvrtá mocnina
          určuje, jak rychle výdej roste.{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics, oddíl 1.6)</SourceLink>
        </p>
        <p>
          U Země přichází záření z povrchu i různých výšek atmosféry.
          Pro výpočet výdeje do vesmíru proto skládáme jejich příspěvky
          a sledujeme průchod záření dalšími vrstvami. Samotné rovnoměrné
          oteplení povrchu a troposféry, spodní části atmosféry,
          při ostatních vlastnostech beze změny zvyšuje výdej přibližně
          o 3,1–3,2 W/m² na jeden stupeň. Této stabilizující reakci
          říkáme Planckova odezva. Část původního přebytku se díky ní
          postupně vyzáří a rychlost dalšího ohřevu se zmenší.{' '}
          <SourceLink id="DOI_10_1175_2007JCLI2110_1">(Soden a kol. 2008)</SourceLink>
        </p>
        <p>
          Oteplování zároveň mění další vlastnosti Země. Když například
          ustoupí sníh nebo led a odkryje se tmavší povrch, pohltí se více
          sluneční energie. Tato změna zesiluje původní oteplení.
          Reakci, která zpětně ovlivňuje svou příčinu, nazýváme zpětnou
          vazbou. Podobně působí změny vodní páry a oblaků, každý proces
          však mění záření jinak. Výsledné přibližování k rovnováze určuje
          jejich součet s teplotní odezvou a s pokračujícími změnami
          složení atmosféry.{' '}
          <SourceLink id="DOI_10_1175_2007JCLI2110_1">(Soden a kol. 2008)</SourceLink>
        </p>
        <p>
          Země se proto může současně oteplovat, více vyzařovat a přesto
          dál získávat energii. Rozhodující je, zda rostoucí výdej už
          vyrovnal příjem. V rozboru období od září 2002 do března 2020
          vyšší teplota opravdu působila směrem k většímu výdeji.
          Změny plynů, vody, oblaků a odrazivosti jej však v součtu
          převážily, takže energetický přebytek rostl.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíl 3.2)</SourceLink>
        </p>
        <h3 id="vypocet-bilance">Odpovídá velikost přebytku uložené energii?</h3>
        <p>
          Energetická bilance dává přesnou vazbu mezi zářením a ohřevem.
          Označíme dopadající sluneční tok <InlineMath tex="S" />,
          odražený tok <InlineMath tex="R" /> a odcházející tepelné záření{' '}
          <InlineMath tex="L" />. Všechny vztáhneme k ploše celé Země
          a vyjádříme ve W/m². Čistý příjem <InlineMath tex="N" /> pak je:
        </p>
        <Equation tex="N = S - R - L" />
        <p>
          Množství získané energie zjistíme vynásobením průměrného
          čistého příjmu plochou Země a délkou sledované doby.
          Plocha je přibližně 510 milionů km². Kdyby čistý příjem
          po celý rok činil 1 W/m², přibylo by asi 16,1 zettajoulu.
          Jde o názorný přepočet, ne o hodnotu konkrétního roku.
          Zákon zachování energie vyžaduje, aby takto vypočtený přírůstek
          odpovídal součtu změn v oceánu, pevnině, atmosféře a ledu.{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics, oddíl 3.3)</SourceLink>{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>
        </p>
        <p>
          Přírůstek 381 ± 61 zettajoulů za roky 1971–2020 autoři
          inventury vyjádřili jako průměrný čistý příjem
          0,48 ± 0,10 W/m². Tím dostává pozorovaný ohřev fyzikální
          měřítko: k jeho vzniku stačí dlouhodobý rozdíl příjmu a výdeje
          o několik desetin wattu na metr čtvereční.
          Tato hodnota je přepočtem inventury. Další kontrolu poskytuje
          porovnání jejího časového vývoje s měřením záření.{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>
        </p>
        <h3 id="porovnani">Zachycují změnu také družice?</h3>
        <p>
          Jestliže čistý příjem energie roste, mělo by se zrychlovat
          i její ukládání. Družicové přístroje CERES sledují odražené
          a tepelné záření, oceánské sondy měří teplotu vody v různých
          hloubkách. Porovnáváme tedy dva fyzicky odlišné způsoby měření.
          Jejich výsledky uvádí také{' '}
          <Link href="/pozorovani/tepelny-obsah-oceanu/#porovnani-se-zarenim">pozorování oceánského ohřevu a záření</Link>.
          Postup družicového měření vysvětluje{' '}
          <Link href="/metody/mereni-radiacnich-toku/#druzicova-bilance">metoda měření radiačních toků</Link>.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021)</SourceLink>
        </p>
        <p>
          Graf porovnává růst obou toků od poloviny roku 2005
          do poloviny roku 2019. Ukazuje, o kolik W/m² se tok zvýšil
          za deset let. Bod označuje odhad, úsečka jeho 90% interval
          spolehlivosti. Oba postupy zachytily slučitelné zrychlování
          ukládání energie. Oceánský výsledek se zde týká horních
          2 000 metrů, oba toky jsou přepočtené na plochu celé Země.
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/energeticka-bilance-zeme/porovnani-trendu.svg"
            alt="Růst toku za deset let od poloviny roku 2005 do poloviny roku 2019. Oceán 0 až 2 000 metrů: 0,43 plus minus 0,40 W/m². Družice CERES: 0,50 plus minus 0,47 W/m². Zobrazeny 90procentní intervaly."
            width={760} height={500} />
          <figcaption>
            Vodorovná osa ukazuje růst toku za deset let, nikoli teplotu
            nebo celkovou zásobu energie. Vlastní graf podle{' '}
            <SourceLink id="DOI_10_1029_2021GL093047">Loeba a kol. (2021), oddíl 3.1</SourceLink>.
            Odhady a intervaly převzaté beze změny.{' '}
            <a href="/media/energeticka-bilance-zeme/porovnani-trendu.csv" download>Hodnoty grafu</a>.
          </figcaption>
        </figure>
        <p>
          Nezávislou kontrolu zde poskytují časové změny. Průměrný
          čistý příjem v družicovém produktu CERES EBAF je nastaven
          podle inventury energie, jeho shoda s oceánem tedy sama
          další důkaz nepřidává. Průběh kolísání a trend družicového
          záznamu však oceánskému záznamu přizpůsobeny nejsou.
          Právě jejich soulad podporuje vysvětlení, že se rostoucí
          přebytek záření projevuje rostoucí rychlostí ukládání tepla.{' '}
          <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018, kalibrace EBAF)</SourceLink>{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíl 3.1)</SourceLink>
        </p>
        <h3 id="nejistoty">Co je doložené a co se dále zpřesňuje</h3>
        <p>
          Přibývání energie a jeho vazbu na výměnu záření podporují
          měření i ověřené fyzikální zákony. Testy z let 2001–2020
          podporují lidský příspěvek k růstu nerovnováhy.
          Méně přesně známe podíly jednotlivých změn oblaků,
          aerosolů a přirozeného kolísání. Přesnější měření jejich
          účinků mohou změnit rozdělení příčin a odhad rychlosti dalšího ohřevu.{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, diskuse)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Podrobnosti nejistot a dalších testů</summary>
          <p>
            Přesnost oceánské inventury omezuje nerovnoměrné měření,
            zejména v hloubkách a polárních oblastech. Některé výpočty
            sdílejí stejné profily, takže jejich shoda není plně nezávislá.
            U družicového trendu je podstatná dlouhodobá stálost
            přístrojů. Soustavný rozpor mezi změnou zásob a měřeným
            příjmem energie by vyžadoval hledat chybějící přenos nebo
            chybu některého měření.{' '}
            <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>{' '}
            <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018)</SourceLink>
          </p>
          <p>
            Rozlišení příčin závisí také na tom, jak dobře modely
            zachycují přirozené kolísání. Studie z let 2001–2020 využívá
            mnoho modelů, regionální změny oblaků a aerosolů však
            zachycuje s rozdílnou úspěšností. Výpočty navíc často dávají
            nižší růst nerovnováhy než prostřední odhad z družic.
            Kdyby modely lépe ověřené na dlouhých záznamech dokázaly
            vysvětlit tento trend samotným přirozeným kolísáním,
            oslabilo by to uvedený závěr o příčinách.{' '}
            <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021)</SourceLink>
          </p>
          <p>
            Rozklad družicových změn na účinky teploty, vody,
            oblaků a plynů používá výpočet přenosu záření upravený
            tak, aby odpovídal měřeným tokům. Jde o modelovou
            interpretaci pozorování, nikoli další nezávislé měření
            každého příspěvku. Data pro její kontrolu jsou{' '}
            <SourceLink id="DATA_CERES_PRP_2021">veřejně dostupná</SourceLink>.{' '}
            <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíly 2 a 3.2)</SourceLink>
          </p>
        </details>

        <h2 id="shrnuti">Shrnutí mechanismu</h2>
        <div className="method-conclusion">
          <p>
            Země získává energii, když pohltí více slunečního záření,
            než odevzdá tepelným zářením do vesmíru. Přibývání skleníkových
            plynů omezuje únik energie, změny oblaků, částic a povrchu
            ovlivňují také její příjem. Přebytek se ukládá především
            v oceánu. Oteplování současně zvyšuje vyzařování, a tím
            působí proti dalšímu ohřevu. Dokud se příjem a výdej
            nevyrovnají, zásoba energie dál roste.
          </p>
          <p>
            Tímto mechanismem vysvětlujeme{' '}
            <Link href="/pozorovani/tepelny-obsah-oceanu/#pozorovani">dlouhodobé přibývání tepla v oceánu</Link>.
            Jeho vazbu na záření potvrzuje porovnání oceánských
            a družicových změn. Testy příčin pro roky 2001–2020
            podporují lidský příspěvek k růstu energetické nerovnováhy.
            Přirozené kolísání ovlivňuje průběh této změny.
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
              <li><SourceLink id="1896_Arrhenius">Arrhenius 1896</SourceLink>: raný výpočet vlivu množství CO₂ na teplotu.</li>
              <li><SourceLink id="1967_Manabe_Wetherald">Manabe a Wetherald 1967</SourceLink>: výpočet teplotní odezvy atmosféry.</li>
              <li><SourceLink id="2016_OpenStax_University_Physics_2">University Physics, svazek 2</SourceLink>: otevřená učebnice, oddíly 1.5, 1.6 a 3.3.</li>
              <li><SourceLink id="DOI_10_1175_2007JCLI2110_1">Soden a kol. 2008</SourceLink>: oddělení teplotní odezvy a zpětných vazeb.</li>
              <li><SourceLink id="WEB_NASA_Earth_Energy_Budget">NASA: Climate and Earth’s Energy Budget</SourceLink>: vymezení globálních toků a jejich velikosti.</li>
            </ul>
          </section>
          <section>
            <h3>Měření a porovnání vysvětlení</h3>
            <ul>
              <li><SourceLink id="DOI_10_5194_essd_16_3517_2024">Cheng a kol. 2024</SourceLink>: vývoj obsahu tepla v oceánu v letech 1955–2023.</li>
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
