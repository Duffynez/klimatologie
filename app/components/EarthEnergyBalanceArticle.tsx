import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";
import { EnergyHypothesisDiagram } from "./EnergyHypothesisDiagram";

export function EarthEnergyBalanceArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2 id="co-vysvetlujeme">Jak si vysvětlujeme přibývání energie v Zemi</h2>
        <p className="article-prose__intro">
          V oceánu, pevnině, atmosféře a tajícím ledu přibývá energie.
          Za roky 1971–2020 činil její celkový přírůstek podle globální inventury
          381 ± 61 zettajoulů, s přibližně 95% intervalem spolehlivosti.
          Zettajoule odpovídá 10²¹ joulům. Asi 89 % tohoto přírůstku připadlo
          na oceán. Měření a výpočty rozebírá{' '}
          <Link href="/pozorovani/tepelny-obsah-oceanu/#souvislost-s-bilanci">pozorování celkového přírůstku energie</Link>.{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>
        </p>
        <p>
          Proč energie přibývá? Projdeme tři vysvětlení: silnější Slunce,
          přirozené kolísání oceánu a atmosféry a změny vyvolané lidskou činností.
          Jejich příběhy začínají v různých dobách a postupně se setkávají
          při vysvětlování dnešního ohřevu. Rozhodovat budou předpovědi,
          které lze porovnat s měřením. Dnes přijímané vysvětlení musí objasnit
          dlouhodobý <Link href="/pozorovani/tepelny-obsah-oceanu/#pozorovani">ohřev oceánu</Link>
          {' '}i související <Link href="/pozorovani/gmst/#pozorovani">růst teploty u povrchu</Link>.
        </p>

        <h2 id="priciny">Tři hypotézy a jejich předpovědi</h2>
        <EnergyHypothesisDiagram />

        <h2 id="predpovedi">Jak se vysvětlení zkoumala</h2>
        <h3 id="slunecni-hypoteza">Silnější záření Slunce</h3>
        <p>
          Slunce dodává Zemi převážnou většinu energie, která udržuje její
          klima. Možnost, že se tento přísun mění, proto patřila k přirozeným
          otázkám při hledání příčin klimatických změn. William Herschel
          předložil Královské společnosti v roce 1801 práci, v níž zkoumal
          příčiny a známky proměnlivého vyzařování světla a tepla ze Slunce.
          Šlo o otázku proměnlivého zdroje energie, položenou dlouho před
          vznikem dnešního globálního záznamu oteplování.{' '}
          <SourceLink id="HERSCHEL_1801_SOLAR_VARIATION">(Herschel 1801, původní rukopis)</SourceLink>{' '}
          <SourceLink id="DOI_10_1029_2010GL045777">(Kopp a Leanová 2011)</SourceLink>
        </p>
        <p>
          Pro tuto hypotézu je podstatné, kolik energie ze Slunce opravdu
          přichází. Pozorování jeho povrchu poskytuje jen nepřímé vodítko.
          Tmavé sluneční skvrny místně vyzařování snižují, zatímco jasnější
          oblasti je zvyšují. Jejich účinky se skládají. Samotný počet skvrn
          proto ještě neříká, o kolik se změnil příkon pro Zemi.{' '}
          <SourceLink id="DOI_10_1029_2010GL045777">(Kopp a Leanová 2011, oddíl 1)</SourceLink>
        </p>
        <p>
          Souvislá družicová měření slunečního příkonu začala v roce 1978.
          Zachytila skutečné změny, včetně přibližně jedenáctiletého cyklu.
          Kopp a Leanová v rozboru z roku 2011 uvádějí mezi minimy a maximy
          tehdejších cyklů rozdíl přibližně 0,12 % v měsíčních průměrech.
          Proměnlivost Slunce se tím stala měřeným vstupem do výpočtů klimatu.
          Zbývalo zjistit, zda její dlouhodobý průběh odpovídá pozemskému ohřevu.{' '}
          <SourceLink id="DOI_10_1029_2010GL045777">(Kopp a Leanová 2011, obr. 1)</SourceLink>
        </p>
        <p>
          Jak velkou část oteplování lze Slunci přisoudit, zkoumali Leanová
          a Rind v roce 2008. Porovnali měsíční teploty z let 1889–2006
          s průběhem slunečního záření, sopečné činnosti, kolísání Pacifiku
          a lidských vlivů. Každý z těchto vlivů se měnil jinak a v jinou
          dobu. Autoři hledali takové velikosti jejich příspěvků a zpoždění
          teplotní odezvy, aby jejich součet co nejlépe odpovídal měřeným
          teplotám. Předpokládali přitom, že se jednotlivé odezvy dají
          přibližně sčítat.{' '}
          <SourceLink id="DOI_10_1029_2008GL034864">(Leanová a Rind 2008, oddíl 2)</SourceLink>
        </p>
        <p>
          Ve výsledku se sluneční cyklus projevil: mezi jeho minimem
          a maximem vycházela ve třináctiměsíčních průměrech změna globální
          teploty asi o 0,11 °C. Dlouhodobý příspěvek byl jiný.
          Pro roky 1979–2005 autoři odhadli sluneční trend
          −0,004 ± 0,004 °C za deset let. Uvedená statistická nejistota
          výpočtu nezahrnuje všechny chyby vstupních záznamů.
          Slunce v tomto rozboru vysvětlovalo malé opakované výkyvy,
          ale tehdejší růst teploty mu připsat nešlo.{' '}
          <SourceLink id="DOI_10_1029_2008GL034864">(Leanová a Rind 2008, oddíl 3 a tab. 1)</SourceLink>
        </p>
        <p>
          Rozlišení cyklu a trendu je podstatné. Měřitelná odezva
          na sluneční cyklus sama neurčuje, čím je způsoben dlouhodobý
          růst teploty. Statistické rozdělení teplot
          mezi vlivy navíc můžeme prověřit jiným způsobem: sledovat přímo
          přicházející energii.{' '}
          <SourceLink id="DOI_10_1029_2008GL034864">(Leanová a Rind 2008, oddíl 4)</SourceLink>
        </p>
        <p>
          Hypotéza silnějšího Slunce má pro energii jednoduchou předpověď:
          více pohlcené energie má následovat po růstu slunečního příkonu.
          Musíme proto odděleně sledovat záření, které přichází, a část,
          kterou Země odráží. Při stejném Slunci může planeta získávat více
          energie také tím, že méně odráží. To už by vyžadovalo změnu vlastností
          Země, například oblaků nebo povrchu.{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: energetická bilance Země)</SourceLink>
        </p>
        <p>
          Takové porovnání provedli Loeb a kolegové pro září 2002 až březen 2020.
          Přenos energie vyjádřili ve wattech na metr čtvereční, W/m²,
          zprůměrovaných přes plochu celé Země. Jeden watt znamená jeden joule
          za sekundu. Dopadající sluneční tok měl mírně záporný trend,
          −0,053 W/m² za deset let. Pohlcený sluneční tok přitom rostl
          o 0,65 ± 0,17 W/m² za deset let, s 90% intervalem spolehlivosti.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021, oddíl 3.2)</SourceLink>
        </p>
        <p>
          Směr změny se tedy obrátil proti předpovědi: sluneční energie
          přicházelo nepatrně méně, ale Země jí pohlcovala více.
          Růst příkonu ze Slunce je jako vysvětlení tohoto výsledku vyvrácen.
          Více energie zůstávalo díky poklesu odražené části. Tím se otázka
          přesunula k oblakům, částicím v atmosféře a vlastnostem povrchu.
          Jednotlivé naměřené toky uvádí{' '}
          <Link href="/pozorovani/tepelny-obsah-oceanu/#porovnani-se-zarenim">pozorování záření a oceánského ohřevu</Link>.{' '}
          <SourceLink id="DOI_10_1029_2021GL093047">(Loeb a kol. 2021)</SourceLink>
        </p>

        <h3 id="prirozena-hypoteza">Samotné přirozené kolísání</h3>
        <p>
          Oceán a atmosféra mohou měnit své chování i bez změny Slunce nebo
          složení vzduchu. Významný krok k pochopení této možnosti udělal
          Jacob Bjerknes. V roce 1969 porovnal teplé epizody v rovníkovém
          Tichém oceánu z let 1957–1958, 1963–1964 a 1965–1966.
          Navázal přitom na své vysvětlení první epizody z roku 1966.
          Opakované souvislosti mezi teplotou vody a prouděním vzduchu mu
          umožnily prověřit, zda dříve navržený děj funguje také v dalších letech.{' '}
          <SourceLink id="DOI_10_1175_BJERKNES_1969">(Bjerknes 1969)</SourceLink>
        </p>
        <p>
          Při zeslábnutí pasátů, převládajících východních větrů v tropech,
          slábne výstup chladnější vody k hladině. Střední a východní
          rovníkový Pacifik se může oteplit. Teplejší hladina pak mění
          předávání tepla a vlhkosti vzduchu, tvorbu dešťových oblaků
          i proudění v atmosféře. Voda a vzduch se tak vzájemně ovlivňují.
          Bjerknes vysvětloval pozorované epizody, které dnes spojujeme s El Niño,
          teplou fází tohoto kolísání.{' '}
          <SourceLink id="DOI_10_1175_BJERKNES_1969">(Bjerknes 1969, oddíly 2 až 4)</SourceLink>
        </p>
        <p>
          Tato zkušenost dala otázce příčin oteplování důležitý rozměr:
          jak velkou změnu může vytvořit samotné kolísání systému?
          Přesuny tepla mění teplotu vzduchu i rozmístění tepla v oceánu.
          Změněné oblaky navíc mohou ovlivnit odraz slunečního záření.
          Potřebujeme proto prověřit dvě věci: zda jde pouze o přesun
          existujícího tepla a zda přirozené změny výměny energie s vesmírem
          stačí na dlouhodobý přírůstek.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_005">(IPCC AR6, rámeček 3.1 a oddíl 3.7)</SourceLink>
        </p>
        <p>
          Pouhý přesun by vyžadoval, aby ohřev jedné části Země vyvažovalo
          ochlazení jiné. Globální inventura z úvodu však takový výsledek
          nedává. Za roky 1971–2020 vychází kladný součet 381 ± 61 zettajoulů.
          Vedle oceánu získaly energii také pevnina, atmosféra a tající led.
          Samotné přemisťování tepla tedy celkový přírůstek nevysvětluje.{' '}
          <SourceLink id="DOI_10_5194_essd_15_1675_2023">(von Schuckmannová a kol. 2023)</SourceLink>
        </p>
        <p>
          Přísnější test sleduje, kde a v jakých hloubkách se oceán ohřívá.
          Barnett a kolegové jej zveřejnili v roce 2005 pro změny od roku 1960.
          Oceány se lišily. V Atlantiku zasahoval zjištěný ohřev do hloubek
          700 metrů a více, zatímco v severním Pacifiku se soustředil hlavně
          do horních 100 metrů. Takové rozdíly poskytují více informací
          než jediný průměr za celý oceán. Tyto{' '}
          <Link href="/pozorovani/tepelny-obsah-oceanu/#hloubkovy-obraz">rozdíly v rozložení ohřevu</Link>
          {' '}doplňují celkovou bilanci.{' '}
          <SourceLink id="DOI_10_1126_science_1112418">(Barnett a kol. 2005, obr. 1)</SourceLink>
        </p>
        <p>
          Pro oddělení příčin použili autoři klimatické modely.
          Ty počítají vývoj oceánu a atmosféry podle fyzikálních vztahů
          pro proudění a přenos energie. Ve výpočtu lze ponechat Slunce
          a složení atmosféry beze změny, nebo zadat jejich historický vývoj.
          Porovnáním těchto pokusů zjistíme, co přidání určitého vlivu změní.{' '}
          <SourceLink id="DOI_10_1126_science_1112418">(Barnett a kol. 2005)</SourceLink>
        </p>
        <p>
          Autoři hledali stejný prostorový a hloubkový obraz v dlouhém
          modelovém výpočtu bez měnících se vnějších vlivů. Vznikající
          kolísání bylo proti pozorování příliš slabé. Nepomohly ani výpočty
          zahrnující tehdejší změny Slunce a sopečné činnosti.
          Při zahrnutí lidských vlivů naopak dva různé modely zachytily
          podstatné rysy ohřevu. Rozhodoval soulad jeho velikosti a rozložení.
          Výsledek je testem příčin měřeného ohřevu, nikoli popřením existence
          oceánského kolísání.{' '}
          <SourceLink id="DOI_10_1126_science_1112418">(Barnett a kol. 2005, obr. 2 a 3)</SourceLink>
        </p>
        <p>
          Jinou otázku přineslo dočasné zpomalení oteplování u povrchu
          na začátku 21. století.
          Kosaka a Xie se v roce 2013 ptali, zda je dokáže vysvětlit
          chladnější rovníkový Pacifik. Pozorovaný průběh shrnuje{' '}
          <Link href="/pozorovani/gmst/#zpomaleni-2002-2012">porovnání sezónních teplot v letech 2002–2012</Link>.
          Pokud zpomalení vzniklo v této oblasti, mělo by zadání její
          skutečné teploty do modelu vyvolat odpovídající odezvu i jinde.{' '}
          <SourceLink id="DOI_10_1038_nature12534">(Kosaka a Xie 2013)</SourceLink>
        </p>
        <p>
          Autoři připravili dva pokusy se stejnými změnami složení
          atmosféry a slunečního záření. V jednom nechali oceán vyvíjet
          volně. Ve druhém předepsali naměřený průběh teploty hladiny
          ve středním a východním rovníkovém Pacifiku, na 8,2 % povrchu Země.
          Zbytek oceánu a atmosféra se dál vyvíjely podle modelových
          fyzikálních vztahů. Testovali tedy, co změna této jedné oblasti
          udělá s širším klimatem. Teplota zadané oblasti byla vstupem,
          ověřovaným výsledkem byla odezva mimo ni.{' '}
          <SourceLink id="DOI_10_1038_nature12534">(Kosaka a Xie 2013, uspořádání pokusů)</SourceLink>
        </p>
        <p>
          Pokus se zadaným Pacifikem zachytil zpomalení růstu globální
          povrchové teploty i jeho silnější projev v chladné části roku
          severní polokoule.
          Obsah tepla v modelovém oceánu přitom dál rostl.
          Studie tak ukázala konkrétní úlohu přirozeného kolísání:
          dokáže na čas přibrzdit oteplování vzduchu u povrchu,
          zatímco klimatický systém dál získává energii. Oba děje
          se mohou odehrávat současně.{' '}
          <SourceLink id="DOI_10_1038_nature12534">(Kosaka a Xie 2013, obr. 1 a rozšířený obr. 3)</SourceLink>
        </p>
        <p>
          Zbývala proto otázka celkové bilance: proč se přísun energie ještě zrychloval?
          Raghuraman a kolegové v roce 2021 porovnali družicový trend
          z let 2001–2020 s přirozeným kolísáním ve 47 klimatických modelech.
          Z dlouhých výpočtů získali 1 293 dvacetiletých úseků bez změn
          vnějšího působení. Mohli tak zkoumat, jak velký trend vytvoří
          samotný oceán, atmosféra a jejich vzájemné reakce.{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021)</SourceLink>
        </p>
        <p>
          Bez změny vnějších vlivů modely vytvářely růsty i poklesy
          bilance soustředěné kolem nuly. Přibližně 95 % přirozeného
          kolísání dvacetiletých trendů pokrývalo pásmo
          ±0,19 W/m² za deset let. To je číselná předpověď této varianty
          hypotézy. Velký růst může vzniknout i náhodou, ale čím dál leží
          od obvyklého rozsahu, tím méně pravděpodobně. Chybu družicového
          měření autoři zahrnuli do testu zvlášť.{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, obr. 2a)</SourceLink>
        </p>
        <p>
          Družicový růst energetického přebytku činil
          0,38 W/m² za deset let. Autoři mu v tomto porovnání přisoudili
          nejistotu měření ±0,20 W/m² za deset let, odpovídající přibližně
          95% rozsahu předpokládaných chyb přístrojů.
          Při použitých odhadech přirozeného kolísání a chyby měření vyšla
          pravděpodobnost takového výsledku bez měnícího se vnějšího působení
          pod 1 %. Tento test doplňuje starší oceánská porovnání o další
          období a veličinu. Samotné přirozené kolísání jako úplné vysvětlení
          neobstálo, jeho vliv na jednotlivá desetiletí a rozmístění tepla zůstává.{' '}
          <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, obr. 2)</SourceLink>
        </p>

        <h3 id="lidske-pusobeni">Změny způsobené lidskou činností</h3>
        <p id="historie">
          Příběh tohoto vysvětlení začal otázkou, jak atmosféra ovlivňuje
          teplotu Země. Fourier v práci vydané roku 1827 rozebíral rozdíl
          mezi příchodem slunečního záření a odchodem tepla ze Země.
          Vzdušný obal podle něj měnil podmínky, za kterých povrch energii
          odevzdává. K vysvětlení změn klimatu bylo potřeba zjistit,
          které složky vzduchu mají tento účinek a jak jej jejich množství mění.{' '}
          <SourceLink id="1827_Fourier_Temperatures">(Fourier 1827)</SourceLink>
        </p>
        <p>
          John Tyndall v práci z roku 1861 popsal pokusy, při kterých
          nechával tepelné záření procházet trubicí naplněnou různými plyny.
          Porovnával, kolik záření projde prázdnou trubicí a kolik po vpuštění
          plynu. Dusík a kyslík je propouštěly mnohem lépe než vodní pára
          nebo oxid uhličitý. Tím ukázal, že i vedlejší složka vzduchu může
          výrazně ovlivnit přenos tepelného záření. Z výsledků také odvodil,
          že proměny těchto složek mohou měnit klima.{' '}
          <SourceLink id="1862_Tyndall">(Tyndall 1861, popis pokusu a závěr)</SourceLink>
        </p>
        <p>
          Svante Arrhenius v roce 1896 převedl tuto možnost na výpočet.
          Zkoumal, jak by při různém množství CO₂ vycházela teplota povrchu,
          a zapojil také vodní páru a rozdíly mezi zeměpisnými šířkami.
          Původní otázka se týkala vysvětlení velkých změn klimatu v minulosti.
          Významným posunem bylo, že z vlastností plynů odvozoval číselný
          účinek na teplotu. Vysvětlení tak začalo určovat také velikost změny,
          kterou je třeba hledat v přírodě.{' '}
          <SourceLink id="1896_Arrhenius">(Arrhenius 1896)</SourceLink>
        </p>
        <p>
          Guy Stewart Callendar v roce 1938 obrátil pozornost ke spalování
          paliv. Spojil odhady přidaného CO₂, údaje o jeho množství ve vzduchu
          a teplotní záznamy přibližně 200 stanic. Vypočítal tehdejší příspěvek
          CO₂ k oteplování asi 0,003 °C ročně a porovnal jej s odhadovaným
          růstem teploty asi 0,005 °C ročně za předchozí půlstoletí.
          Předložil tak konkrétní hypotézu, že člověk už mění teplotu planety.
          Tato čísla patří k jeho historickému výpočtu a tehdejším podkladům.{' '}
          <SourceLink id="1938_Callendar">(Callendar 1938)</SourceLink>
        </p>
        <p>
          Výpočet se postupně rozšiřoval o děje, které určují teplotu celé
          atmosféry. Manabe a Wetherald v roce 1967 spojili přenos záření
          s vertikálním přenosem tepla a s vlhkostí. Pro zdvojnásobení CO₂
          při zachované relativní vlhkosti dostali oteplení povrchu
          přibližně o 2 °C. Relativní vlhkost vyjadřuje, jak blízko je
          vzduch nasycení vodní párou. Tento předpoklad dovoloval množství
          páry s oteplením růst, a tím zesilovat počáteční účinek CO₂.{' '}
          <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967)</SourceLink>
        </p>
        <p>
          Výpočet teploty atmosféry otevřel také test podle výšky.
          Změny složení vzduchu ve druhé polovině 20. století měly
          ohřívat troposféru, spodní vrstvu atmosféry, a ochlazovat
          stratosféru nad ní.
          V dolní stratosféře se přitom výrazně uplatňuje lidské poškozování
          ozonu, který tam jinak pohlcováním slunečního záření dodává teplo.
          Santer a kolegové v roce 2013 porovnali očekávaný společný obraz
          s družicovými teplotami z let 1979–2012.{' '}
          <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013, obr. 1 a 2)</SourceLink>
        </p>
        <p>
          Nestačilo najít dvě opačná znaménka. Sopečné erupce a následné
          zotavení atmosféry také mění teploty obou vrstev různými směry.
          Autoři proto porovnali souběh změn ve třech širokých výškových
          vrstvách a v různých zeměpisných šířkách. Z modelů odvodili
          rozložení očekávané při lidském působení a zjišťovali, zda se
          v měření postupně prosazuje nad přirozeným kolísáním.
          To odhadovali z výpočtů se stálými podmínkami i s proměnlivým
          Sluncem a sopečnou činností.{' '}
          <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013, porovnání signálu a kolísání)</SourceLink>
        </p>
        <p>
          <Link href="/pozorovani/stratosfericke-ochlazovani/#vyskovy-obraz">Naměřený výškový obraz změn</Link>
          {' '}odpovídal lidskému působení. Výsledek obstál i při porovnání
          s větší přirozenou proměnlivostí v modelových výpočtech minulých
          staletí. Přesná velikost změn se mezi modely a měřením lišila.
          Rozlišující prostorový obraz byl přesto zjistitelný v obou
          použitých zpracováních družicových dat. K oceánským profilům
          tak přibyl test teplot v atmosféře.{' '}
          <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013, obr. 3 a 4)</SourceLink>
        </p>
        <p>
          Samotný účinek přibývajícího CO₂ lze hledat přímo v záření.
          Tento test sleduje jiný článek vysvětlovaného děje než teplotní
          porovnání.
          Plyny pohlcují záření v určitých pásmech vlnových délek.
          Vlnová délka rozlišuje jednotlivé druhy záření podobně, jako ve
          viditelném světle rozlišuje barvy. Účinek rostoucího CO₂ proto
          musí zanechat konkrétní změnu v infračerveném záření, které je
          pro oko neviditelné. K jejímu nalezení změříme jednotlivá pásma
          a oddělíme vliv měnící se teploty, vlhkosti a dalších plynů.{' '}
          <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015)</SourceLink>
        </p>
        <p>
          Feldman a kolegové tento test zveřejnili v roce 2015.
          Použili pozemní měření záření přicházejícího z atmosféry
          na dvou místech, v Oklahomě a na severu Aljašky.
          Ve záznamu bezoblačných podmínek z let 2000–2010 oddělili pomocí
          měřených profilů atmosféry a výpočtu přenosu záření účinek CO₂.
          Nárůstu jeho koncentrace o 22 miliontin odpovídal na obou místech
          přírůstek tohoto příspěvku k toku k povrchu 0,20 W/m² za deset let.
          Publikovaná nejistota trendu činila ±0,06 v Oklahomě a ±0,07 na Aljašce
          ve stejných jednotkách.
          Výsledek se shodoval s očekávanou změnou v pásmu CO₂.
          Záznam a postup jeho zpracování doplňuje{' '}
          <Link href="/pozorovani/atmosfericka-koncentrace-co2/#zmena-infracerveneho-zareni">pozorování CO₂ a infračerveného záření</Link>.{' '}
          <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, obr. 2 a 4)</SourceLink>
        </p>
        <p>
          Zde se ověřuje účinek konkrétního plynu. K vysvětlení oceánského
          ohřevu se přidává prostorové porovnání Barnetta a kolegů popsané
          výše. Laboratorní pokus, záření měřené na povrchu a teplotní profily
          oceánu zachycují různé části stejného děje. Jejich společný význam
          spočívá v tom, že fyzikální příčina má měřitelný účinek v atmosféře
          a její zahrnutí pomáhá vysvětlit také rozložení následného ohřevu.{' '}
          <SourceLink id="1862_Tyndall">(Tyndall 1861)</SourceLink>{' '}
          <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015)</SourceLink>{' '}
          <SourceLink id="DOI_10_1126_science_1112418">(Barnett a kol. 2005)</SourceLink>
        </p>
        <p>
          Dnešní vysvětlení zahrnuje celý součet lidských vlivů.
          Vedle skleníkových plynů se mění aerosoly, drobné částice
          a kapičky rozptýlené ve vzduchu. Ovlivňují sluneční záření
          i vlastnosti oblaků a část oteplujícího účinku plynů kompenzují.
          Odborné hodnocení IPCC z roku 2021 dospělo ze souboru studií
          k závěru, že lidský vliv byl s pravděpodobností 95–100 % hlavní
          příčinou růstu obsahu tepla v oceánu od 70. let 20. století.
          V této kapitole „hlavní“ znamená více než polovinu změny.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_005">(IPCC AR6, shrnutí a oddíl 3.5.1)</SourceLink>
        </p>
        <p>
          Přijímaným vysvětlením je proto lidské působení spolu s reakcemi
          oceánu, atmosféry a povrchu. Přirozené kolísání určuje část průběhu
          a regionálních rozdílů. Nyní můžeme projít, jak tyto procesy spojí
          změnu složení vzduchu s přibýváním energie v celé Zemi.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_005">(IPCC AR6, oddíly 3.5.1 a 3.8)</SourceLink>
        </p>

        <h2 id="vysvetleni">Jak Země získává a ukládá energii</h2>
        <p>
          Změny složení atmosféry ovlivňují přenos záření. Abychom pochopili,
          jak se jejich účinek projeví i daleko pod hladinou oceánu,
          potřebujeme sledovat energii celé planety. Energetická bilance
          porovnává, kolik energie Země přijme a kolik jí odevzdá.
          Rozdíl spojuje děje v atmosféře s ohřevem vody, půdy a vzduchu.{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: energetická bilance Země)</SourceLink>
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
          se odráží a 240 wattů se pohltí. Jde o průměr přes celý
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
        <p>
          Samotný přenos záření a historický spor o jeho nasycení podrobně
          rozebírá článek{' '}
          <Link href="/mechanismy/radiacni-pusobeni-sklenikovych-plynu/">Proč další CO₂ mění tepelné záření Země</Link>.
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
          Účinek skleníkových plynů a hlavní lidský podíl na dlouhodobém
          ohřevu oceánu podpírá soubor fyzikálních, pozorovacích a modelových
          výsledků. Přesné rozdělení změn mezi plyny, aerosoly, oblaka
          a přirozené kolísání se dále zpřesňuje. To ovlivňuje zejména
          vysvětlení jednotlivých desetiletí a odhad rychlosti dalšího ohřevu.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_005">(IPCC AR6, oddíly 3.5.1 a 3.8)</SourceLink>{' '}
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
            Rozbor Leanové a Rinda přiděluje jednotlivým vlivům teplotní
            příspěvky statistickým přizpůsobením společnému záznamu.
            Záleží proto na úplnosti vstupů a předpokladu přibližně
            sčitatelných odezev. U výškového testu Santera a kolegů modely
            v průměru nadhodnocovaly troposférický ohřev a podhodnocovaly
            ochlazování dolní stratosféry. Zachycení rozlišujícího obrazu
            tedy neznamená shodu každé vypočtené teploty.{' '}
            <SourceLink id="DOI_10_1029_2008GL034864">(Leanová a Rind 2008)</SourceLink>{' '}
            <SourceLink id="DOI_10_1073_pnas_1305332110">(Santer a kol. 2013, diskuse)</SourceLink>
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
            Celkový 95% interval družicového trendu v této studii je
            0,38 ± 0,24 W/m² za deset let. Zahrnuje chybu měření
            i nejistotu odhadu trendu v kolísajícím záznamu. Při porovnání
            s modelovým rozpětím přirozeného kolísání proto autoři
            používají užší nejistotu ±0,20 uvedenou výše. Jinak by vliv
            kolísání započetli dvakrát.{' '}
            <SourceLink id="DOI_10_1038_s41467_021_24544_4">(Raghuraman a kol. 2021, dvě porovnání nejistot)</SourceLink>
          </p>
          <p>
            Pozemní test CO₂ zachycuje bezoblačné podmínky na dvou místech.
            Jeho výsledek nelze ztotožnit s globální bilancí nad atmosférou.
            Oddělení příspěvku CO₂ využívá výpočet přenosu záření,
            takže pozorování a výpočet sdílejí část fyzikálních podkladů.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, metody)</SourceLink>
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
            <Link href="/pozorovani/tepelny-obsah-oceanu/#souvislost-s-bilanci">přírůstek energie v klimatickém systému</Link>,
            jehož největší část připadá na oceán.
            Dnes jej vysvětlujeme především lidským působením na složení
            atmosféry a následnými reakcemi klimatu. Toto vysvětlení
            propojuje vlastnosti plynů ověřené v laboratoři, změny
            měřeného záření a rozložení ohřevu v oceánu.
            Přirozené kolísání ovlivňuje průběh a rozmístění změny.
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
              <li><SourceLink id="HERSCHEL_1801_SOLAR_VARIATION">Herschel 1801</SourceLink>: otázka proměnlivého vyzařování Slunce, původní rukopis v archivu Královské společnosti.</li>
              <li><SourceLink id="1827_Fourier_Temperatures">Fourier 1827</SourceLink>: původní práce o teplotách Země, sken Francouzské akademie věd.</li>
              <li><SourceLink id="1862_Tyndall">Tyndall 1861</SourceLink>: laboratorní porovnání pohlcování tepelného záření různými plyny.</li>
              <li><SourceLink id="DOI_10_1086_140874">Rubens a Kurlbaum 1901</SourceLink> a <SourceLink id="DOI_10_1002_andp_19013090310">Planck 1901</SourceLink>: laboratorní měření a zákon tepelného záření.</li>
              <li><SourceLink id="1896_Arrhenius">Arrhenius 1896</SourceLink>: raný výpočet vlivu množství CO₂ na teplotu.</li>
              <li><SourceLink id="1938_Callendar">Callendar 1938</SourceLink>: propojení spalování paliv, růstu CO₂ a teplotních měření.</li>
              <li><SourceLink id="1967_Manabe_Wetherald">Manabe a Wetherald 1967</SourceLink>: výpočet teplotní odezvy atmosféry.</li>
              <li><SourceLink id="DOI_10_1175_BJERKNES_1969">Bjerknes 1969</SourceLink>: vzájemné působení rovníkového Pacifiku a atmosféry při teplých epizodách.</li>
              <li><SourceLink id="2016_OpenStax_University_Physics_2">University Physics, svazek 2</SourceLink>: otevřená učebnice, oddíly 1.5, 1.6 a 3.3.</li>
              <li><SourceLink id="DOI_10_1175_2007JCLI2110_1">Soden a kol. 2008</SourceLink>: oddělení teplotní odezvy a zpětných vazeb.</li>
              <li><SourceLink id="WEB_NASA_Earth_Energy_Budget">NASA: Climate and Earth’s Energy Budget</SourceLink>: vymezení globálních toků a jejich velikosti.</li>
            </ul>
          </section>
          <section>
            <h3>Měření a porovnání vysvětlení</h3>
            <ul>
              <li><SourceLink id="DOI_10_1029_2010GL045777">Kopp a Leanová 2011</SourceLink>: družicový záznam slunečního příkonu a jeho proměnlivost.</li>
              <li><SourceLink id="DOI_10_1029_2008GL034864">Leanová a Rind 2008</SourceLink>: oddělení slunečního cyklu a dlouhodobého trendu při současném porovnání dalších vlivů.</li>
              <li><SourceLink id="DOI_10_1126_science_1112418">Barnett a kol. 2005</SourceLink>: rozložení ohřevu v oceánu a porovnání přirozených a lidských vlivů.</li>
              <li><SourceLink id="DOI_10_1038_nature12534">Kosaka a Xie 2013</SourceLink>: modelový pokus s předepsaným vývojem rovníkového Pacifiku a zpomalením povrchového oteplování.</li>
              <li><SourceLink id="DOI_10_1073_pnas_1305332110">Santer a kol. 2013</SourceLink>: test výškového a zeměpisného rozložení změn teploty atmosféry.</li>
              <li><SourceLink id="DOI_10_1038_nature14240">Feldman a kol. 2015</SourceLink>: test příspěvku rostoucího CO₂ k záření na povrch, dvě stanice v letech 2000–2010.</li>
              <li><SourceLink id="DOI_10_5194_essd_16_3517_2024">Cheng a kol. 2024</SourceLink>: vývoj obsahu tepla v oceánu v letech 1955–2023.</li>
              <li><SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">Loeb a kol. 2018</SourceLink>: dokumentace produktu CERES EBAF a jeho kalibrace.</li>
              <li><SourceLink id="DOI_10_1029_2021GL093047">Loeb a kol. 2021</SourceLink>: porovnání družic a oceánských měření, oddíl 3.1 a obr. 1.</li>
              <li><SourceLink id="DOI_10_5194_essd_15_1675_2023">Von Schuckmannová a kol. 2023</SourceLink>: inventura energie, oddíl 6 a obr. 8.</li>
              <li><SourceLink id="DOI_10_1038_s41467_021_24544_4">Raghuraman a kol. 2021</SourceLink>: test vnitřní proměnlivosti a vnějšího působení. Oddíly Data availability a Code availability odkazují na veřejná data a výpočetní kód.</li>
              <li><SourceLink id="DOI_10_1017_9781009157896_005">IPCC AR6, kapitola 3</SourceLink>: souhrnné odborné posouzení lidského vlivu, zejména oddíl 3.5.1 o oceánu.</li>
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
