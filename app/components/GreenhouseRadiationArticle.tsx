import Link from "next/link";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { SourceLink } from "./SourceLink";
import styles from "./GreenhouseRadiationArticle.module.css";

const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "nasyceni",
    name: "Účinek CO₂ je už téměř nasycený",
    prediction: "Po oddělení změn teploty a vlhkosti má další CO₂ měnit tepelné záření jen nepatrně. Plyn už podle této představy pohlcuje téměř vše, co pohltit může.",
    test: "Na dvou stanicích sledujeme záření při růstu CO₂. Pro každé měření vypočítáme vliv teploty, vodní páry a dalších plynů. Zjistíme, zda zbývá rostoucí příspěvek CO₂.",
    observation: "V letech 2000–2010 rostl příspěvek CO₂ k záření na povrch na obou stanicích asi o 0,20 W/m² za deset let. Odhadované nejistoty byly ±0,06 a ±0,07.",
    verdict: "Pro celou atmosféru nestačí",
    explanation: "Nasycení části spektra nevysvětlí naměřený přírůstek účinku CO₂.",
    state: "insufficient",
  },
  {
    id: "promena-prenosu",
    name: "Další CO₂ mění přenos záření",
    prediction: "Další CO₂ má zesilovat záření k povrchu a omezovat odchod záření v částech svého pásma. Tvar a velikost změny mají odpovídat výpočtu pro daný stav atmosféry.",
    test: "Vypočtené spektrum, tedy rozdělení záření podle vlnové délky, porovnáme s pozemním měřením v Oklahomě a na Aljašce. V dalším testu porovnáme výpočet změn odcházejícího spektra s družicí.",
    observation: "Výpočty odpovídaly pozemnímu spektru i jeho změnám. Družicový test za roky 2003–2021 navíc podpořil očekávané změny záření odcházejícího do vesmíru.",
    verdict: "Obstála, dnes přijímaná",
    explanation: "Spojuje laboratorní fyziku, výpočty vrstev atmosféry a měření v přírodě.",
    state: "supported",
  },
];

export function GreenhouseRadiationArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2 id="co-vysvetlujeme">Jak si vysvětlujeme změnu záření při růstu CO₂</h2>
        <p className="article-prose__intro">
          S přibývajícím oxidem uhličitým se mění tepelné záření atmosféry.
          V Oklahomě a na severu Aljašky zachytila měření za roky 2000–2010
          rostoucí příspěvek CO₂ k záření přicházejícímu na povrch.
          Výsledek a jeho zpracování popisuje{' '}
          <Link href="/pozorovani/atmosfericka-koncentrace-co2/#zmena-infracerveneho-zareni">pozorování CO₂ a infračerveného záření</Link>.{' '}
          <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015)</SourceLink>
        </p>
        <p>
          Proč další CO₂ záření mění, když už jej tento plyn silně pohlcuje?
          Tato otázka provází výzkum déle než sto let. Projdeme dvě odpovědi,
          pokusy a výpočty, které mezi nimi umožnily rozhodnout. Na CO₂ si
          vysvětlíme, jak skleníkové plyny ovlivňují přenos energie mezi
          povrchem, atmosférou a vesmírem.
        </p>

        <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
        <HypothesisDiagram
          hypotheses={hypotheses}
          captionId="greenhouse-hypotheses-caption"
          context={<p>W/m² znamená watty na metr čtvereční. Udává tok energie, například záření dopadajícího na povrch. Trend za deset let vyjadřuje změnu tohoto toku. Historický spor zde převádíme do podoby testu současnými měřeními.</p>}
          caption={<>Obě možnosti připouštějí, že CO₂ pohlcuje záření. Liší se v tom, zda jeho další přírůstek ještě významně mění přenos energie. Pozemní test platí pro jasnou oblohu na uvedených stanicích. Prameny a podmínky jednotlivých zkoušek rozebírají následující příběhy.</>}
        />

        <h2 id="pribehy">Jak se vysvětlení zkoumala</h2>
        <h3 id="nasyceni">Účinek CO₂ je už téměř nasycený</h3>
        <p>
          Na konci 19. století už fyzikové věděli, že plyny nepohlcují všechny
          druhy tepelného záření stejně. Rozlišujeme je podle vlnové délky,
          podobně jako barvy viditelného světla. V určitých rozsazích,
          nazývaných absorpční pásma, může plyn pohltit téměř všechno dopadající
          záření. Pak se nabízí námitka: jestli už záření pohltila první část
          plynu, další část jej podruhé pohltit nemůže.
          Právě na slabé závislosti celkového pohlcování na množství CO₂ stavěl
          Knut Ångström svou práci z roku 1900.{' '}
          <SourceLink id="DOI_10_1002_andp_19003081208">(Ångström 1900, s. 720–725)</SourceLink>
        </p>
        <p>
          Ångström popsal pokus, který v jeho ústavu prováděl J. Koch.
          Záření zdroje zahřátého na 100 °C procházelo 30 centimetry CO₂.
          Při tlaku 780 milimetrů rtuťového sloupce, tedy přibližně
          atmosférickém tlaku, plyn pohltil asi 10 % veškerého dopadajícího
          záření. Snížení tlaku na dvě třetiny změnilo pohlcený podíl nejvýše
          o 0,4 procentního bodu. Velká změna množství plynu tedy v této
          sestavě způsobila jen malou změnu celkového pohlcování.{' '}
          <SourceLink id="DOI_10_1002_andp_19003081208">(Ångström 1900, s. 724)</SourceLink>
        </p>
        <p>
          Závěr rozšířil na atmosféru: při množstvích CO₂ blízkých tehdejšímu
          stavu se podle něj celková absorpce měnila jen málo. Další námitkou
          byl překryv s vodní párou, která pohlcuje část stejných vlnových
          délek. Tento argument zůstal ve vědecké diskusi přítomný i v polovině
          20. století, kdy jej podrobně rozebíral Gilbert Plass.{' '}
          <SourceLink id="DOI_10_1002_andp_19003081208">(Ångström 1900)</SourceLink>{' '}
          <SourceLink id="1956_Plass">(Plass 1956, s. 141–142)</SourceLink>
        </p>
        <p>
          Rozhodující otázkou bylo, zda se laboratorní výsledek dá přenést
          na celý sloupec vzduchu. Atmosféra má vrstvy s různou teplotou,
          tlakem a vlhkostí. Každá také sama vyzařuje. Výpočet proto musí
          sledovat záření procházející jednotlivými vrstvami i záření,
          které v nich vzniká. Pohlcení svazku v jedné trubici zachycuje
          pouze část tohoto děje.{' '}
          <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, obr. 1)</SourceLink>
        </p>
        <p>
          Dnešní pozemní test ukazuje konkrétní mez historického zobecnění.
          Po zohlednění teploty a vlhkosti zbývá v měření rostoucí příspěvek
          CO₂, který odpovídá výpočtu přenosu záření. V obou sledovaných
          prostředích je odlišitelný od nulového trendu. Představa, že další
          CO₂ v atmosféře už prakticky nepůsobí, tomuto výsledku neodpovídá.
          Silné pohlcování v nejneprůhlednějších částech pásma je přitom součástí
          úspěšného výpočtu. Jak se tyto dvě skutečnosti slučují, ukáže
          příběh druhého vysvětlení.{' '}
          <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015)</SourceLink>
        </p>

        <h3 id="promena-prenosu">Další CO₂ mění přenos záření</h3>
        <h4>Co ukázaly pokusy s jednotlivými plyny</h4>
        <p>
          Základy této odpovědi vznikaly ještě před Ångströmovou námitkou.
          John Tyndall ve své práci z roku 1861 porovnával, jak různé plyny
          propouštějí tepelné záření. Do trubice vpouštěl zkoumaný plyn
          a citlivým tepelným detektorem sledoval změnu záření, které prošlo.
          Okénka z kamenné soli umožňovala průchod záření, které by obyčejné
          sklo silně pohlcovalo. Kontrolované střídání náplně dovolilo
          oddělit vlastnost plynu od samotného zdroje tepla.{' '}
          <SourceLink id="1862_Tyndall">(Tyndall 1861, uspořádání pokusů)</SourceLink>
        </p>
        <p>
          Výsledky ukázaly velké rozdíly. Dusík a kyslík propouštěly
          zkoumané tepelné záření mnohem lépe než oxid uhličitý a vodní pára.
          O přenosu záření tedy nerozhodovalo jen celkové množství vzduchu.
          Důležité bylo také jeho složení, včetně plynů zastoupených
          v malém podílu. Tyndall zkoumal rovněž vyzařování plynů a spojoval
          obě vlastnosti: plyny schopné záření pohlcovat je mohou také
          vydávat. Tím vznikl experimentální základ pro výpočet celé
          atmosféry.{' '}
          <SourceLink id="1862_Tyndall">(Tyndall 1861, pokusy s absorpcí a vyzařováním)</SourceLink>
        </p>

        <h4>Jak se počítal účinek na celou atmosféru</h4>
        <p>
          Svante Arrhenius se v roce 1896 ptal, jak by se při změně CO₂
          změnila teplota povrchu. Použil tehdejší údaje o pohlcování
          záření CO₂ a vodní párou a sestavil energetickou bilanci.
          Bilance porovnává příjem a výdej energie. Když při stejné
          teplotě odejde méně energie, původní teplota už rovnováze
          neodpovídá. Arrhenius hledal teplotu, při které se příjem
          s výdejem opět vyrovná.{' '}
          <SourceLink id="1896_Arrhenius">(Arrhenius 1896)</SourceLink>
        </p>
        <p>
          Výpočty provedl pro různá množství CO₂, zeměpisné šířky
          a roční období. Získal oteplení při přidání plynu a ochlazení
          při jeho úbytku. Takový výsledek byl podmíněný tehdejšími
          absorpčními údaji a zjednodušením atmosféry. Vědecká otázka
          se ale zpřesnila: bylo třeba zjistit, zda předpokládaná změna
          výdeje energie obstojí s přesnějším měřením jednotlivých
          vlnových délek.{' '}
          <SourceLink id="1896_Arrhenius">(Arrhenius 1896, výpočty a tabulky)</SourceLink>
        </p>
        <p>
          Plassův rozbor z roku 1956 využil novější laboratorní údaje
          a elektronický počítač. V pásmu CO₂ kolem vlnové délky
          15 mikrometrů počítal záření po vrstvách od povrchu do výšky
          75 kilometrů. Mikrometr je miliontina metru. Zahrnul rozdílnou
          sílu jednotlivých absorpčních čar, jejich překrývání i změny
          s tlakem a teplotou. Čára označuje úzký rozsah vlnových délek,
          v němž molekula zvlášť dobře přijímá energii záření.{' '}
          <SourceLink id="1956_Plass">(Plass 1956, oddíly 2–3)</SourceLink>
        </p>
        <p>
          Výsledek ukázal význam slabších čar a okrajů pásma. Tam ještě
          zůstávalo záření, jehož průchod se s množstvím CO₂ měnil.
          Plass vysvětlil také problém vodní páry. Směrem vzhůru její
          zastoupení prudce ubývá, zatímco podíl CO₂ je mnohem rovnoměrnější.
          Překryv silný u povrchu proto nemusí zakrýt účinek CO₂ výše.
          Jeho výpočty dávaly měřitelnou změnu toků i při množství plynu
          odpovídajícím tehdejší atmosféře.{' '}
          <SourceLink id="1956_Plass">(Plass 1956, s. 141–142)</SourceLink>
        </p>
        <p>
          K převodu radiační změny na teplotu bylo třeba popsat i pohyb
          vzduchu. Syukuro Manabe a Richard Wetherald v roce 1967 spojili
          výpočet záření s konvekcí, tedy přenosem tepla stoupajícím
          a klesajícím vzduchem. V jejich jednorozměrném sloupci se
          teploty vrstev měnily, dokud se přenosy energie nevyrovnaly.
          Atmosféra tak mohla na změněné složení fyzikálně reagovat.{' '}
          <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967)</SourceLink>
        </p>
        <p>
          Porovnali také dvě možnosti pro vodní páru. Při pevném množství
          páry chybělo zesílení účinku, které nastalo při zachování
          relativní vlhkosti. Relativní vlhkost říká, jak blízko je
          vzduch nasycení vodní párou při své teplotě. Teplejší vzduch
          se stejnou relativní vlhkostí obsahuje páry více. Ta dále
          mění záření a zesiluje oteplování. Při této podmínce vyšlo
          po zdvojnásobení CO₂ oteplení povrchu přibližně o 2 °C
          a současně ochlazení stratosféry, vrstvy nad spodní atmosférou.
          Šlo o výsledek daného modelu a jeho předpokladů.{' '}
          <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967, abstrakt a oddíl 5)</SourceLink>
        </p>

        <h4>Jak se výpočty porovnaly s přírodou</h4>
        <p>
          Ověřit samotný radiační krok znamená měřit záření rozdělené
          podle vlnové délky. Takové rozdělení se nazývá spektrum.
          Feldmanův tým porovnal pozemní spektra s výpočtem pro skutečné
          teploty, vlhkost a složení atmosféry. Zkoumal jasnou oblohu
          v Oklahomě a na severu Aljašky. Předpověď byla konkrétní:
          změna má odpovídat absorpčnímu pásmu CO₂ a jeho rostoucímu
          množství. Prosté oteplení vzduchu by mělo jiný spektrální průběh.{' '}
          <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, obr. 1–2)</SourceLink>
        </p>
        <p>
          Zastoupení CO₂ vyjadřujeme v ppm, tedy počtem jeho molekul
          na milion molekul suchého vzduchu. Při růstu o 22 ppm
          v letech 2000–2010 vyšel přírůstek jeho
          příspěvku k záření na povrch přibližně 0,20 W/m² za deset let.
          Publikované nejistoty trendu byly ±0,06 v Oklahomě a ±0,07
          na Aljašce. Shoda v teplém i studeném prostředí podpořila
          přenositelnost výpočtu. Obě stanice však používaly stejný
          fyzikální postup zpracování.{' '}
          <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, obr. 2 a 4)</SourceLink>
        </p>
        <p>
          Další pohled poskytl přístroj AIRS na družici Aqua. Raghuraman
          a kolegové v roce 2023 porovnali změny odcházejícího spektra
          za roky 2003–2021 s výpočty přenosu záření. Samostatně počítali
          účinek růstu plynů při jinak stálém stavu atmosféry. Potom
          zahrnuli i změny teploty, vlhkosti a oblaků. Společný výsledek odpovídal
          poklesu záření v částech pásma CO₂ i růstu v jiných částech
          spektra. Vyhodnocení zahrnovalo dva výpočetní postupy pro
          přenos záření.{' '}
          <SourceLink id="DOI_10_1029_2023GL103947">(Raghuraman a kol. 2023, oddíly 3–4 a obr. 1)</SourceLink>
        </p>
        <p>
          Smyslem tohoto testu bylo vysvětlit tvar celého spektrálního
          obrazu. Rostoucí skleníkové plyny omezovaly výdej energie,
          zatímco oteplující se povrch a atmosféra jej zvyšovaly.
          Pozorovaný součet obsahuje oba příspěvky. Zpracování družicového
          měření popisuje{' '}
          <Link href="/pozorovani/atmosfericka-koncentrace-co2/#odchazejici-spektrum">pozorování odcházejícího spektra</Link>.{' '}
          <SourceLink id="DOI_10_1029_2023GL103947">(Raghuraman a kol. 2023)</SourceLink>
        </p>
        <p>
          Dnes přijímané vysvětlení tak spojuje několik různých zkoušek.
          Laboratoř určuje vlastnosti plynu, výpočty z nich odvozují
          přenos atmosférou a měření kontrolují vznikající spektrum.
          Současné odborné hodnocení IPCC považuje oteplující radiační
          účinek dalšího CO₂ za dobře doložený. Zpřesňuje jeho velikost
          i reakce atmosféry, které po změně složení následují.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíl 7.3.2.1)</SourceLink>
        </p>

        <h2 id="mechanismus">Jak skleníkové plyny mění cestu energie</h2>
        <h3 id="molekuly">Pohlcování a vyzařování</h3>
        <p>
          Radiační přenos je přenos energie elektromagnetickým zářením.
          Povrch Země vydává při své teplotě především infračervené,
          pro oko neviditelné záření. Teplejší povrch za jinak stejných
          podmínek vyzařuje více. Toto záření přenáší energii do atmosféry
          a částí spektra prochází až do vesmíru.{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics 2, oddíl 1.6)</SourceLink>{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: energetická bilance)</SourceLink>
        </p>
        <p>
          Molekula CO₂ může přijmout energii záření při určitých změnách
          svého kmitání a otáčení. Proto má charakteristické absorpční
          čáry. Srážky molekul následně předávají energii okolnímu vzduchu.
          Probíhá i opačná cesta: srážky dodávají molekulám energii,
          kterou mohou vydat jako záření. Atmosféra tedy záření pohlcuje
          i sama vyzařuje, směrem vzhůru i dolů. Síla tohoto vyzařování
          souvisí s její teplotou.{' '}
          <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, s. 233–235)</SourceLink>
        </p>

        <h3 id="jadra-a-okraje">Proč nasycení části spektra účinek nezastaví</h3>
        <p>
          Vezměme dvě stejně dlouhé vrstvy téhož plynu při stejné teplotě,
          tlaku a složení. Sledujme jen průchod původního svazku.
          Každá vrstva pohltí stejný podíl záření, které do ní právě
          vstupuje. Pokud první vrstva pohltí polovinu, druhá pohltí
          polovinu zbývající poloviny. Obě dohromady tedy pohltí 75 %.
          Při velmi silném pohlcování už druhé vrstvě zbývá mnohem méně.{' '}
          <SourceLink id="2016_Harvey_Analytical_Chemistry">(Harvey, oddíl 10.2, zákon zeslabování záření)</SourceLink>
        </p>
        <figure className="article-figure">
          <table className={styles.example} aria-label="Ilustrační pohlcené podíly původního svazku">
            <thead><tr><th scope="col">Pohlcování při dané vlnové délce</th><th scope="col">Jedna vrstva pohltí</th><th scope="col">Dvě vrstvy celkem pohltí</th></tr></thead>
            <tbody>
              <tr><th scope="row">Velmi silné</th><td>99 %</td><td>99,99 %</td></tr>
              <tr><th scope="row">Slabší</th><td>50 %</td><td>75 %</td></tr>
            </tbody>
          </table>
          <figcaption>
            Vlastní ilustrační výpočet pro dvě zvolené propustnosti,
            nikoli naměřené hodnoty CO₂. Podíly vztahujeme k původnímu
            dopadajícímu svazku. Při silném pohlcování přidá druhá vrstva
            0,99 procentního bodu, při slabším 25. Vlastní vyzařování
            plynu tato ukázka nepočítá.
          </figcaption>
        </figure>
        <p>
          V absorpčním pásmu se taková různá síla pohlcování vyskytuje
          současně. Uvnitř silných čar je průchod původního svazku už
          velmi malý. Na jejich okrajích a ve slabších čarách se ale
          s přibývajícím plynem dál zmenšuje. Celé pásmo proto nemůžeme
          posoudit podle jeho nejneprůhlednější části. Podrobnější měření
          těchto rozdílů vysvětluje{' '}
          <Link href="/metody/absorpcni-spektroskopie/">absorpční spektroskopie</Link>.{' '}
          <SourceLink id="1956_Plass">(Plass 1956, s. 142)</SourceLink>
        </p>

        <h3 id="vyska-vyzarovani">Záleží také na místě, odkud záření přichází</h3>
        <p>
          Pro výdej energie Země musíme k pohlcování přidat vyzařování
          všech vrstev. Záření z vyšší vrstvy má nad sebou méně plynu,
          a proto snáze unikne do vesmíru. Na různých vlnových délkách
          pozorujeme příspěvky z různých výšek. Kde je atmosféra dobře
          průhledná, může družice zachytit záření přímo od povrchu.
          V neprůhlednějších částech spektra více přispívá atmosféra.{' '}
          <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, obr. 1 a 3)</SourceLink>
        </p>
        <p>
          Přidání CO₂ zvyšuje neprůhlednost jeho pásma. V jeho částech,
          kde záření do vesmíru přichází hlavně z troposféry, se příspěvek
          posouvá k vyšším vrstvám. Troposféra je spodní část atmosféry
          a její teplota obvykle s výškou klesá. Chladnější plyn vyzařuje
          slaběji. Při nezměněném teplotním uspořádání tak v těchto
          částech spektra odchází méně energie.{' '}
          <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, výklad emisní výšky)</SourceLink>
        </p>
        <p>
          Velmi silný střed pásma CO₂ sahá svým původem záření až
          do stratosféry. Teplota tam s výškou může růst, takže předchozí
          jednoduché pravidlo mění znaménko. Právě proto se počítá
          celé spektrum vrstvu po vrstvě. Výsledek závisí jak na
          množství plynu, tak na skutečném průběhu teploty.{' '}
          <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, obr. 3)</SourceLink>
        </p>

        <h3 id="pusobeni-a-odezva">Jak se změna záření promítá do oteplování</h3>
        <p>
          Součet účinku přidaného CO₂ přes celé spektrum omezuje
          odchod energie. Změnu energetické bilance vyvolanou například
          změnou složení atmosféry označujeme jako radiační působení.
          Při jeho výpočtu oddělujeme účinek přidaného plynu od
          následného oteplování povrchu. Jinak by se příčina a teplotní
          reakce smíchaly v jediném čísle.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíly 7.3.1–7.3.2)</SourceLink>
        </p>
        <p>
          IPCC pro zdvojnásobení koncentrace z předindustriálních
          278 na 556 ppm uvádí centrální odhad účinného radiačního
          působení přibližně 3,9 W/m². Tento údaj zahrnuje rychlé
          přizpůsobení atmosféry, zatímco vliv následného oteplování
          povrchu se počítá odděleně. Vyjadřuje
          změnu toku energie v průměru přes celý povrch Země.
          Pro velikost tohoto působení uvádí hodnocení nejistotu
          přibližně ±12 %.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíl 7.3.2.1)</SourceLink>
        </p>
        <p>
          Když se příjem energie nezmění a výdej klesne, energie
          v klimatickém systému přibývá. Oteplování postupně zvyšuje
          vyzařování zpět do vesmíru. Zároveň se mění vlhkost, oblaka
          a další vlastnosti systému. Tento navazující děj vysvětluje
          článek{' '}
          <Link href="/mechanismy/energeticka-bilance-zeme/#nerovnovaha-a-teplota">Proč v klimatickém systému přibývá energie</Link>.
          Způsob měření celkových toků popisuje{' '}
          <Link href="/metody/mereni-radiacnich-toku/#druzicova-bilance">metoda měření radiačních toků</Link>.{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: energetická bilance)</SourceLink>
        </p>

        <h3 id="nejistoty">Co je doložené a co se dále zpřesňuje</h3>
        <p>
          Pohlcování a vyzařování CO₂ i změny při jeho přibývání
          mají laboratorní a atmosférické ověření. Nejistoty se týkají
          přesné velikosti toků, jejich rozdělení a následné teplotní
          odezvy. Místní měření za jasné oblohy a globální výdej do
          vesmíru přitom představují různé veličiny. Jejich číselné
          hodnoty porovnáváme až s výpočtem pro odpovídající podmínky.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíly 7.3–7.4)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Podrobnosti nejistot a dalších testů</summary>
          <p>
            Pozemní příspěvek CO₂ vzniká kombinací měřeného spektra
            a výpočtu vlivu ostatních proměnných. Nejistotu proto
            ovlivňuje přesnost teploty, vlhkosti, absorpčních údajů
            a dlouhodobá stálost přístroje. Popis těchto kontrol je
            součástí původní práce.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, metody)</SourceLink>
          </p>
          <p>
            Družicový záznam obsahuje i reakci klimatu. Oddělení
            jednotlivých příspěvků využívá model, jehož výstup
            porovnáváme s pozorovaným součtem. Části spektra nepokryté
            přístrojem jsou v datovém produktu dopočítané.{' '}
            <SourceLink id="DOI_10_1029_2023GL103947">(Raghuraman a kol. 2023, oddíly 2–3)</SourceLink>
          </p>
          <p>
            Další přísnou kontrolou by bylo opakované měření
            na nových místech, které při známém růstu CO₂ a změřených
            teplotách i vlhkosti nenajde předpovězenou spektrální
            změnu. Trvalý rozpor větší než společná nejistota
            měření a výpočtu by vyžadoval opravit popis přenosu
            nebo vstupní údaje. To je kontrolovatelná předpověď
            vysvětlení, které zde přijímáme.
          </p>
        </details>

        <h2 id="shrnuti">Shrnutí mechanismu</h2>
        <div className="method-conclusion">
          <p>
            Přibývající CO₂ mění pohlcování i vyzařování atmosféry.
            Silné pohlcování uvnitř části jeho pásma účinek nezastaví:
            mění se průchod záření v dalších částech pásma i výšky,
            ze kterých energie odchází do vesmíru. Při původních
            teplotách se celkový výdej zmenší. Přebytek energie
            vede k oteplování, které vyzařování zase zvyšuje.
          </p>
          <p>
            Toto vysvětlení propojuje laboratorní pokusy, výpočty
            vrstev atmosféry, rostoucí příspěvek CO₂ k záření na
            povrch a změny družicového spektra. Měření zkoušejí
            konkrétní průběh změny podle vlnové délky, takže lze
            kontrolovat samotný mechanismus přenosu energie.
          </p>
        </div>

        <h2 id="prameny">Prameny a veřejná data</h2>
        <div className="article-source-groups">
          <section>
            <h3>Historické pokusy a výpočty</h3>
            <ul>
              <li><SourceLink id="1862_Tyndall">Tyndall 1861</SourceLink>: porovnání absorpce a vyzařování plynů.</li>
              <li><SourceLink id="1896_Arrhenius">Arrhenius 1896</SourceLink>: energetická bilance při změně CO₂.</li>
              <li><SourceLink id="DOI_10_1002_andp_19003081208">Ångström 1900</SourceLink>: původní argument o nasycení, Kochův pokus na s. 724.</li>
              <li><SourceLink id="1956_Plass">Plass 1956</SourceLink>: struktura absorpčního pásma a překryv s vodní párou.</li>
              <li><SourceLink id="1967_Manabe_Wetherald">Manabe a Wetherald 1967</SourceLink>: teplotní odezva se zářením, konvekcí a vodní párou.</li>
            </ul>
          </section>
          <section>
            <h3>Pozorovací testy a fyzikální výklad</h3>
            <ul>
              <li><SourceLink id="DOI_10_1038_nature14240">Feldman a kol. 2015</SourceLink>: pozemní spektra a účinek CO₂ v letech 2000–2010. Metody uvádějí podklady programu ARM.</li>
              <li><SourceLink id="DOI_10_1029_2023GL103947">Raghuraman a kol. 2023</SourceLink>: družicový test za roky 2003–2021.</li>
              <li><SourceLink id="DOI_10_1063_1_3653855">Pierrehumbert 2011</SourceLink>: molekulární děje a přenos záření mezi vrstvami.</li>
              <li><SourceLink id="DOI_10_1017_9781009157896_009">IPCC AR6, kapitola 7</SourceLink>: současné hodnocení radiačního působení a zpětných vazeb.</li>
              <li><SourceLink id="2016_Harvey_Analytical_Chemistry">Harvey, Analytical Chemistry 2.1</SourceLink>: vztah pro vlastní číselnou ilustraci, oddíl 10.2. Pro dvě vrstvy je celkový pohlcený podíl jedna minus součin jejich propustností.</li>
              <li><SourceLink id="2016_OpenStax_University_Physics_2">University Physics 2</SourceLink>, oddíl 1.6, a <SourceLink id="WEB_NASA_Earth_Energy_Budget">NASA: energetická bilance</SourceLink>: tepelné vyzařování a energetická bilance Země.</li>
            </ul>
          </section>
          <section>
            <h3>Data k družicovému testu</h3>
            <ul>
              <li><SourceLink id="DATA_AIRS_SPECTRAL_OLR">Spektrální toky AIRS</SourceLink>: veřejný produkt NASA. Stažení může vyžadovat bezplatný účet Earthdata.</li>
              <li><SourceLink id="DATA_RAGHURAMAN_2023_SPECTRAL">Výstupy modelových experimentů</SourceLink>: samostatný archiv Zenodo k práci z roku 2023.</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
