import { HypothesisStory } from "./HypothesisStory";
import Image from "next/image";
import Link from "next/link";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { SourceLink } from "./SourceLink";
import styles from "./GreenhouseRadiationArticle.module.css";

const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "nasyceni",
    name: "Účinek CO₂ je už téměř nasycený",
    prediction: "Při dnešním množství CO₂ má být jeho další vliv na záření téměř vyčerpaný. Po zohlednění teploty a vlhkosti má v jeho pásmu zbývat jen zanedbatelná změna záření.",
    test: "Historický pokus mění množství CO₂ v trubici. Dnešní test porovnává záření na dvou stanicích s výpočtem pro měnící se teplotu a vlhkost, ale stálý CO₂.",
    observation: "Trubice ukázala malou změnu pohlcování. V atmosféře za roky 2000–2010 zbýval rostoucí příspěvek CO₂: 0,20 ± 0,06 W/m² za deset let v Oklahomě a 0,20 ± 0,07 na Aljašce.",
    verdict: "Pro celou atmosféru nestačí",
    explanation: "Nasycení části spektra platí. Jeho zobecnění na celou atmosféru naměřenou změnu nevysvětlí.",
    state: "insufficient",
  },
  {
    id: "promena-prenosu",
    name: "Další CO₂ mění přenos záření",
    prediction: "Při daném stavu atmosféry má další CO₂ zesilovat záření k povrchu a omezovat výdej v částech svého pásma. Výpočet musí vystihnout velikost i rozložení změny podle vlnové délky.",
    test: "Výpočet s rostoucím CO₂ porovnáme s pozemními spektry. Změny odcházejícího záření z družice porovnáme s výpočtem zahrnujícím růst plynů i reakci teploty, vlhkosti a oblaků.",
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
          context={
            <p>
              Tok ve wattech na metr čtvereční (W/m²) říká, kolik energie
              záření přenese za sekundu přes metr čtvereční plochy.
              U pozemního testu sledujeme záření přicházející z atmosféry
              na povrch. Trend za deset let udává, o kolik se tento tok
              za desetiletí v průměru mění.
            </p>
          }
          caption={<>Obě možnosti připouštějí, že CO₂ pohlcuje záření. Liší se v tom, zda jeho další přírůstek ještě významně mění přenos energie. Pozemní test platí pro jasnou oblohu na uvedených stanicích. Prameny a podmínky jednotlivých zkoušek rozebírají následující příběhy.</>}
        />

        <h2 id="pribehy">Jak se vysvětlení zkoumala</h2>
        <HypothesisStory id="nasyceni" number={1} title="Účinek CO₂ je už téměř nasycený">
          <p>
            Podle této hypotézy už atmosféra obsahuje tolik CO₂, že ze záření,
            které tento plyn dokáže pohltit, zbývá jen malý nepohlcený
            podíl. Přidání plynu by proto mělo měnit přenos energie jen
            nepatrně. Takové uvažování vychází ze skutečné vlastnosti pohlcování:
            z téměř úplně zeslabeného svazku může další vrstva odebrat už jen
            malý zbytek. Tomuto stavu říkáme nasycení absorpce.{' '}
            <SourceLink id="2016_Harvey_Analytical_Chemistry">(Harvey, oddíl 10.2)</SourceLink>
          </p>
          <p>
            Na konci 19. století šlo o podstatnou námitku proti představě,
            že změny CO₂ mohou výrazně měnit klima. Svante Arrhenius v roce
            1896 vypočítal oteplení při přidání CO₂. Knut Ångström v práci
            z roku 1900 zpochybnil velikost účinku změn jeho množství.
            Soustředil se na to, kolik záření plyn skutečně pohltí a jak
            citlivé je toto pohlcování na množství plynu.{' '}
            <SourceLink id="1896_Arrhenius">(Arrhenius 1896)</SourceLink>{' '}
            <SourceLink id="DOI_10_1002_andp_19003081208">(Ångström 1900, s. 723–725)</SourceLink>
          </p>
          <p>
            Záření můžeme rozdělit podle vlnové délky, podobně jako viditelné
            světlo rozdělujeme na barvy. Takovému rozdělení říkáme spektrum.
            CO₂ pohlcuje některé jeho části mnohem silněji než jiné.
            Rozsah vlnových délek s výrazným pohlcováním nazýváme absorpční
            pásmo. Pro posouzení nasycení potřebujeme vědět, co se děje
            v celém pásmu, včetně jeho slaběji pohlcujících částí.{' '}
            <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, obr. 2–3)</SourceLink>
          </p>
          <p>
            Horní křivka v obrázku zachycuje nasycení na jedné zvolené
            vlnové délce. Čím více záření už plyn pohltil, tím méně ho
            zbývá pro další přírůstek plynu. Pod křivkou sledujeme dvě
            zkoušky: nejprve změnu pohlcování v trubici, potom změnu
            záření přicházejícího ze skutečné atmosféry.
          </p>
          <figure id="nasyceni-schema" className={`article-figure ${styles.explanatoryFigure}`}>
            <div className={styles.figureScroll} tabIndex={0} role="region"
              aria-label="Nasycení pohlcování a oba testy, na úzké obrazovce posuvné do stran">
              <a href="/media/radiacni-pusobeni-sklenikovych-plynu/nasyceni-co2.png"
                aria-label="Otevřít grafiku nasycení CO₂ a obou testů v plné velikosti">
                <Image className="article-figure__media"
                  src="/media/radiacni-pusobeni-sklenikovych-plynu/nasyceni-co2.png"
                  alt="Pohlcený podíl záření na jedné vlnové délce se s množstvím plynu blíží 100 %. Kochův pokus snížil tlak CO₂ v třiceticentimetrové trubici z 780 na 520 mmHg, pohlcený podíl se změnil nejvýše o 0,4 procentního bodu. V atmosféře však měření za roky 2000–2010 ukázala rostoucí příspěvek CO₂ k záření k povrchu: 0,20 ± 0,06 W/m² za deset let v Oklahomě a 0,20 ± 0,07 na severu Aljašky."
                  width={1122} height={1402} unoptimized />
              </a>
            </div>
            <figcaption>
              Křivka znázorňuje princip pohlcování na jedné vlnové délce.
              Červená představuje infračervené záření, které lidské oko
              nevidí. Přístroje jsou schematické ilustrace. Dolní panely
              spojují <a href="#nasyceni-laboratorni-test">pokus v trubici</a>
              {' '}a <a href="#nasyceni-atmosfericky-test">měření atmosféry</a>.
              Údaje v pravém panelu popisují růst příspěvku CO₂ k záření
              směřujícímu k povrchu za jasné oblohy na dvou stanicích.
              Vlastní grafika Klimatologie.eu vytvořená pomocí AI,
              CC BY 4.0. Podklady:{' '}
              <SourceLink id="2016_Harvey_Analytical_Chemistry">Harvey, oddíl 10.2</SourceLink>,{' '}
              <SourceLink id="DOI_10_1002_andp_19003081208">Ångström (1900, s. 724)</SourceLink>
              {' '}a <SourceLink id="DOI_10_1038_nature14240">Feldman a kol. (2015)</SourceLink>.{' '}
              Na menší obrazovce lze obrázek posouvat do stran.{' '}
              <a href="/media/radiacni-pusobeni-sklenikovych-plynu/nasyceni-co2.png">Otevřít v plné velikosti</a>.{' '}
              <a href="/media/radiacni-pusobeni-sklenikovych-plynu/nasyceni-co2.csv" download>Číselné podklady</a>.{' '}
              <a href="/media/radiacni-pusobeni-sklenikovych-plynu/nasyceni-co2.txt">Podklady a licence</a>.
            </figcaption>
          </figure>

          <h4 id="nasyceni-laboratorni-test" className={styles.testHeading}>První test: méně CO₂ v trubici</h4>
          <p>
            Při téměř úplném nasycení by ani výrazné ubrání plynu
            nemuselo pohlcený podíl příliš změnit. Právě to zkoumal
            pokus J. Kocha, který Ångström popsal ve své práci.
            Tepelné záření zdroje o teplotě 100 °C procházelo 30 centimetry
            CO₂. Porovnáním dopadajícího a prošlého záření se určovalo,
            jakou část plyn pohltil.{' '}
            <SourceLink id="DOI_10_1002_andp_19003081208">(Ångström 1900, s. 724)</SourceLink>
          </p>
          <p>
            Zpočátku byl tlak plynu 780 milimetrů rtuťového sloupce,
            zapisovaných jako mmHg. To je přibližně atmosférický tlak.
            Plyn při něm pohltil asi 10 % dopadajícího záření. Potom tlak
            klesl na dvě třetiny, tedy na 520 mmHg. Při stejném objemu
            a teplotě tak bylo v dráze záření o třetinu méně molekul CO₂.{' '}
            <SourceLink id="DOI_10_1002_andp_19003081208">(Ångström 1900, s. 724)</SourceLink>
          </p>
          <p>
            Pohlcený podíl se změnil nejvýše o 0,4 procentního bodu.
            Jinými slovy, změna se týkala nanejvýš 0,4 % veškerého
            dopadajícího záření. Výrazné ubrání plynu tedy ovlivnilo
            pohlcování jen málo. Výsledek podporoval nasycení v podmínkách
            pokusu. Ångström z něj odvodil
            širší závěr, že změny atmosférického CO₂ mají na celkové
            pohlcování zemského záření jen malý vliv.{' '}
            <SourceLink id="DOI_10_1002_andp_19003081208">(Ångström 1900, s. 724–725)</SourceLink>
          </p>
          <p>
            Tím se otázka přesunula z trubice do atmosféry. Tam záření
            prochází vrstvami s různou teplotou, tlakem a vlhkostí. Vrstvy
            zároveň samy vyzařují. Celkový výdej energie proto závisí také
            na tom, ze kterých vrstev záření pochází a kolik ho cestou
            pohltí další plyn. Tuto část děje samotný údaj o zeslabení
            svazku v trubici nepopisuje.{' '}
            <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, obr. 1)</SourceLink>
          </p>
          <p>
            Podobný problém měl argument o vodní páře. Ta skutečně pohlcuje
            část stejných vlnových délek jako CO₂. Její podíl však směrem
            vzhůru výrazně ubývá, zatímco CO₂ zůstává promíchaný mnohem
            rovnoměrněji. Gilbert Plass v roce 1956 ukázal, proč překryv
            pohlcování u povrchu nestačí k posouzení přenosu celou atmosférou.
            K jeho výpočtu se vrátíme v příběhu druhé hypotézy.{' '}
            <SourceLink id="1956_Plass">(Plass 1956, s. 141–142)</SourceLink>
          </p>

          <h4 id="nasyceni-atmosfericky-test" className={styles.testHeading}>Druhý test: záření skutečné atmosféry</h4>
          <p>
            Představu téměř vyčerpaného účinku lze dnes zkoušet přímo
            v atmosféře. Při růstu CO₂ by po zohlednění teploty a vlhkosti
            měl zbývat jen zanedbatelný přírůstek záření v jeho pásmu.
            Pozemní přístroj měří tepelné záření přicházející z atmosféry
            a rozděluje je podle vlnové délky. Sledujeme tak velikost
            změny i její rozložení ve spektru, podle kterého lze
            rozpoznat příspěvek CO₂.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, obr. 1–2)</SourceLink>
          </p>
          <p>
            Feldmanův tým využil měření za jasné oblohy v Oklahomě
            a na severu Aljašky. Pro každé porovnání vypočítal, jaké
            záření by k přístroji přicházelo, kdyby CO₂ zůstal na stálé
            koncentraci. Teplota a vlhkost v jednotlivých vrstvách
            přitom odpovídaly pozorování. Výpočet tak zachytil jejich
            proměny a umožnil hledat účinek přibývajícího CO₂ v rozdílu
            mezi naměřeným a vypočteným zářením.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, obr. 2)</SourceLink>
          </p>
          <p>
            Koncentraci CO₂ vyjadřujeme v ppm, tedy počtem jeho molekul
            na milion molekul suchého vzduchu. V letech 2000–2010 vzrostla
            o 22 ppm. Příspěvek CO₂ k záření na povrch rostl tempem
            0,20 ± 0,06 W/m² za deset let v Oklahomě a 0,20 ± 0,07 W/m²
            za deset let na Aljašce. Znaménkem ± jsou zde uvedeny
            publikované nejistoty trendu.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, obr. 4 a metody)</SourceLink>
          </p>
          <p>
            Rozdíl proti výpočtu se stálým CO₂ na obou místech rostl
            právě v jeho absorpčním pásmu. Atmosféra tedy poskytla
            výsledek, který představa téměř vyčerpaného účinku dalšího
            CO₂ nevysvětlovala. Přehled měření
            a jeho zpracování obsahuje{' '}
            <Link href="/pozorovani/atmosfericka-koncentrace-co2/#zmena-infracerveneho-zareni">pozorování změny infračerveného záření</Link>.
            V následujícím příběhu ukážeme také druhou polovinu testu:
            zda výpočet s rostoucím CO₂ tento rozdíl správně vysvětlí.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015)</SourceLink>
          </p>

          <h4 className={styles.subheading}>Co z hypotézy zůstalo platné</h4>
          <p>
            Pokus v trubici podpořil nasycení pohlcování za daných podmínek.
            Měření atmosféry přesto ukázalo rostoucí příspěvek dalšího CO₂.
            Obě zjištění patří do dnešního vysvětlení: silné nasycení
            některých částí pásma je skutečné, jeho rozšíření na téměř
            vyčerpaný účinek CO₂ v celé atmosféře však neobstálo.
            Slabší části pásma i vyzařování jednotlivých vrstev zůstávají
            citlivé na množství plynu. Proto musíme současně vysvětlit
            nasycení v části spektra i pozorovanou změnu přenosu energie.{' '}
            <SourceLink id="1956_Plass">(Plass 1956, s. 141–142)</SourceLink>{' '}
            <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011)</SourceLink>
          </p>
        </HypothesisStory>

        <HypothesisStory id="promena-prenosu" number={2} title="Další CO₂ mění přenos záření">
          <p>
            Druhé vysvětlení vychází z atmosféry, která záření pohlcuje
            a zároveň je sama vysílá. S přibývajícím CO₂ se mění jak průchod
            záření mezi vrstvami, tak jejich příspěvek k záření mířícímu
            k povrchu a do vesmíru. Síla změny se liší podle vlnové délky.
            Výpočet musí zachytit také části spektra, kde už další plyn
            vyvolá jen malou změnu.{' '}
            <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, obr. 1–3)</SourceLink>
          </p>
          <p>
            Toto vysvětlení vznikalo postupně z laboratorních pokusů,
            měření spekter a výpočtů atmosféry. Jeho počátky předcházejí
            Ångströmově práci. Oba příběhy se proto časově překrývají:
            námitka nasycení pomáhala určit, které vlastnosti plynu
            a které kroky výpočtu je třeba prověřit.{' '}
            <SourceLink id="1862_Tyndall">(Tyndall 1861)</SourceLink>{' '}
            <SourceLink id="1896_Arrhenius">(Arrhenius 1896)</SourceLink>{' '}
            <SourceLink id="1956_Plass">(Plass 1956, úvod)</SourceLink>
          </p>

          <h4 className={styles.subheading}>Laboratoř ukázala, že záleží na složení vzduchu</h4>
          <p>
            John Tyndall v roce 1861 porovnával průchod tepelného záření
            různými plyny. Do trubice uzavřené okénky z kamenné soli
            postupně zaváděl jednotlivé plyny a tepelným detektorem
            měřil, kolik záření prošlo. Kamenná sůl propouštěla i záření,
            které by běžné sklo silně pohltilo. Stejná sestava tak
            umožňovala porovnávat vlastnosti různých náplní.{' '}
            <SourceLink id="1862_Tyndall">(Tyndall 1861, popis pokusů)</SourceLink>
          </p>
          <p>
            Dusík a kyslík propouštěly zkoumané záření mnohem lépe než
            CO₂ a vodní pára. I plyn zastoupený v malém množství proto
            mohl být pro přenos energie důležitý. Tyndall zkoumal také
            záření vydávané zahřátými plyny. Spojení obou vlastností,
            pohlcování a vyzařování, se později stalo základem výpočtů
            záření v atmosféře.{' '}
            <SourceLink id="1862_Tyndall">(Tyndall 1861, pokusy s absorpcí a vyzařováním)</SourceLink>
          </p>

          <h4 className={styles.subheading}>Výpočty postupně zahrnuly spektrum i vrstvy atmosféry</h4>
          <p>
            Arrhenius v roce 1896 převedl otázku pohlcování na energetickou
            bilanci povrchu. Bilance porovnává příjem a výdej energie.
            Jestliže při původní teplotě odejde méně energie, začne jí
            přibývat. Arrhenius hledal teplotu, při které by se příjem
            s výdejem opět vyrovnal. Počítal různá množství CO₂,
            zeměpisné šířky i roční období a získal oteplení při přidání
            plynu a ochlazení při jeho úbytku.{' '}
            <SourceLink id="1896_Arrhenius">(Arrhenius 1896, výpočty a tabulky)</SourceLink>
          </p>
          <p>
            Další pokrok vyžadoval podrobnější znalost spektra. Absorpční
            pásmo tvoří mnoho úzkých čar. Každá odpovídá určité změně
            energie molekuly a některé jsou mnohem silnější než jiné.
            Jejich šířka i síla závisí na tlaku a teplotě. Z těchto údajů
            lze určit, jak plyn v konkrétní vrstvě záření zeslabí
            a jak sám vyzařuje.{' '}
            <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, s. 233–237)</SourceLink>
          </p>
          <p>
            Plassův výpočet z roku 1956 využil novější laboratorní údaje
            a elektronický počítač. V pásmu CO₂ kolem 15 mikrometrů,
            tedy patnácti miliontin metru, počítal záření po kilometrových
            vrstvách od povrchu do výšky 75 kilometrů. Zahrnul různé síly
            čar, jejich překrývání a závislost na tlaku i teplotě. Slabší
            čáry a okraje pásma umožňovaly další změnu přenosu, přestože
            silné části už byly téměř neprůhledné.{' '}
            <SourceLink id="1956_Plass">(Plass 1956, s. 141–142)</SourceLink>
          </p>
          <p>
            Aby z takového výpočtu vznikl popis teploty atmosféry, bylo
            třeba zahrnout i pohyb vzduchu. Syukuro Manabe a Richard
            Wetherald v roce 1967 spojili záření s konvekcí, tedy přenosem
            tepla stoupajícím a klesajícím vzduchem. V jejich modelu se
            teploty vrstev měnily, dokud se přenosy energie nevyrovnaly.
            Model tak počítal i to, jak atmosféra na změnu CO₂ reaguje.{' '}
            <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967)</SourceLink>
          </p>
          <p>
            Autoři porovnali pevné množství vodní páry se zachováním
            relativní vlhkosti. Ta říká, jak blízko je vzduch nasycení
            vodní párou při dané teplotě. Při stejné relativní vlhkosti
            obsahuje teplejší vzduch páry více. Její přírůstek dále mění
            záření a zesiluje oteplování. Při této podmínce model po
            zdvojnásobení CO₂ vypočítal oteplení povrchu přibližně o 2 °C
            a ochlazení stratosféry, vrstvy nad spodní atmosférou.
            Byla to předpověď konkrétního modelu s uvedenými předpoklady.{' '}
            <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967, abstrakt a oddíl 5)</SourceLink>
          </p>
          <p>
            Tyto práce ukázaly, jak lze z vlastností plynu sestavit
            vysvětlení pro celou atmosféru. Výpočet záření má
            konkrétní předpověď: při známém růstu CO₂ se musí změnit
            záření v určitých částech spektra a výpočet musí vystihnout
            jeho velikost. To lze zkoušet měřením ze země i z vesmíru.{' '}
            <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, obr. 3)</SourceLink>
          </p>

          <h4 className={styles.subheading}>Co má další CO₂ změnit</h4>
          <p>
            Přidání CO₂ zeslabuje záření přicházející z nižších vrstev.
            V částech pásma, kde záření do vesmíru pochází hlavně
            z troposféry, proto více přispívají vyšší vrstvy.
            Troposféra je spodní část atmosféry a její teplota obvykle
            s výškou klesá. Vyšší, chladnější vrstvy vyzařují slaběji.
            Při stejném teplotním uspořádání tak v těchto částech
            spektra odchází méně energie.{' '}
            <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, výklad emisní výšky)</SourceLink>
          </p>
          <p>
            Zároveň se mění záření směřující dolů. Vrstva, která při
            určité vlnové délce účinněji pohlcuje, při stejné teplotě
            také účinněji vyzařuje. Teplé spodní vrstvy tak mohou
            s přibývajícím CO₂ posílat k povrchu více záření.
            Výrazně se uplatní slabší části pásma, kde pohlcování
            a vyzařování ještě mohou znatelně růst.{' '}
            <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, s. 234–237)</SourceLink>
          </p>
          <p>
            Obrázek spojuje tyto děje s oběma zkouškami. Nahoře
            porovnáváme různá množství CO₂ při stejných teplotách
            vrstev. Dole ověřujeme předpovědi v měnící se skutečné
            atmosféře, nejprve ze země a potom z družice.
          </p>
          <figure id="prenos-zareni-schema" className={`article-figure ${styles.explanatoryFigure}`}>
            <div className={styles.figureScroll} tabIndex={0} role="region"
              aria-label="Přenos záření při růstu CO₂ a oba testy, na úzké obrazovce posuvné do stran">
              <a href="/media/radiacni-pusobeni-sklenikovych-plynu/prenos-zareni-co2.png"
                aria-label="Otevřít grafiku přenosu záření při růstu CO₂ v plné velikosti">
                <Image className="article-figure__media"
                  src="/media/radiacni-pusobeni-sklenikovych-plynu/prenos-zareni-co2.png"
                  alt="Při stejných teplotách vrstev další CO₂ zeslabuje záření zespodu. V částech pásma s vyzařováním z troposféry proto více přispívají vyšší, chladnější vrstvy a do vesmíru odchází méně energie. Slabší části pásma dál reagují na přidání plynu. Teplé spodní vrstvy mohou vysílat více záření k povrchu. Pozemní test za roky 2000–2010 a družicový test za roky 2003–2021 porovnávají předpověď s měřenou změnou spektra."
                  width={1122} height={1402} unoptimized />
              </a>
            </div>
            <figcaption>
              Barvy pozadí ukazují stejný průběh teploty v obou
              sloupcích, růžová zvýrazňuje vyzařující oblasti.
              Červené vlnité šipky znázorňují směr tepelného záření.
              Horní křivky ilustrují pohlcování při různých vlnových
              délkách. Dolní panely shrnují{' '}
              <a href="#prenos-pozemni-test">pozemní test</a>
              {' '}a <a href="#prenos-druzicovy-test">družicový test</a>.
              Šipky v družicové tabulce znamenají úbytek nebo přírůstek
              záření odcházejícího do vesmíru. Kresby přístrojů jsou
              ilustrace. Vlastní grafika Klimatologie.eu vytvořená
              pomocí AI, CC BY 4.0, podle{' '}
              <SourceLink id="DOI_10_1063_1_3653855">Pierrehumberta (2011)</SourceLink>,{' '}
              <SourceLink id="DOI_10_1038_nature14240">Feldmana a kol. (2015)</SourceLink>
              {' '}a <SourceLink id="DOI_10_1029_2023GL103947">Raghuramana a kol. (2023)</SourceLink>.{' '}
              Na menší obrazovce lze obrázek posouvat do stran.{' '}
              <a href="/media/radiacni-pusobeni-sklenikovych-plynu/prenos-zareni-co2.png">Otevřít v plné velikosti</a>.{' '}
              <a href="/media/radiacni-pusobeni-sklenikovych-plynu/prenos-zareni-co2.csv" download>Číselné podklady</a>.{' '}
              <a href="/media/radiacni-pusobeni-sklenikovych-plynu/prenos-zareni-co2.txt">Podklady a licence</a>.
            </figcaption>
          </figure>

          <h4 id="prenos-pozemni-test" className={styles.testHeading}>První test: záření k povrchu</h4>
          <p>
            První test využívá stejná měření z Oklahomy a severu Aljašky
            jako předchozí příběh. Tentokrát zkoušíme, zda výpočet
            s rostoucím CO₂ pozorovanou změnu správně předpoví.
            Feldmanův tým do něj zahrnul skutečný růst koncentrace
            i pozorované teploty a vlhkost. Vypočtenou změnu potom
            porovnal s měřením za jasné oblohy, zvlášť pro jednotlivé
            části spektra.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, obr. 2–3)</SourceLink>
          </p>
          <p>
            Výpočet naměřenou změnu vystihl. V letech 2000–2010
            rostl příspěvek CO₂ k záření přicházejícímu na povrch
            o 0,20 ± 0,06 W/m² za deset let v Oklahomě a o
            0,20 ± 0,07 W/m² za deset let na severu Aljašky.
            Uvedené nejistoty se vztahují k těmto trendům.
            Shoda podpořila předpověď dalšího účinku CO₂ na záření
            k povrchu v obou sledovaných prostředích.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, obr. 2–4 a metody)</SourceLink>
          </p>
          <p>
            Pro vysvětlení je důležitá právě shoda podle vlnové délky.
            CO₂, vodní pára i změna teploty ovlivňují spektrum rozdílně.
            Výpočet proto musí současně vystihnout části citlivé na CO₂
            i ostatní části spektra. Porovnání poskytuje podstatně více
            informací než jediný údaj o celkovém toku energie. Měření
            takových rozdílů vysvětluje{' '}
            <Link href="/metody/absorpcni-spektroskopie/">absorpční spektroskopie</Link>.{' '}
            <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, obr. 2–3)</SourceLink>
          </p>

          <h4 id="prenos-druzicovy-test" className={styles.testHeading}>Druhý test: záření do vesmíru</h4>
          <p>
            Z vesmíru sledujeme opačný směr přenosu. Horní část obrázku
            izoluje účinek přidání CO₂ při stejných teplotách.
            Ve skutečném záznamu se Země současně otepluje a teplejší
            povrch i vzduch vyzařují více. Družice proto zachytí
            souběh změny složení a teplotní reakce. Výpočet musí
            vystihnout jejich společný projev v celém sledovaném spektru.{' '}
            <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011)</SourceLink>
          </p>
          <p>
            Raghuraman a kolegové v roce 2023 porovnali spektra přístroje
            AIRS na družici Aqua za roky 2003–2021 s výpočty přenosu záření.
            Nejprve nechali růst skleníkové plyny při stálém stavu povrchu
            a atmosféry. V dalším výpočtu zahrnuli i proměny teploty,
            vlhkosti a oblaků. Tím oddělili jednotlivé příspěvky
            a jejich součet porovnali s pozorovanou změnou.{' '}
            <SourceLink id="DOI_10_1029_2023GL103947">(Raghuraman a kol. 2023, oddíly 2–3)</SourceLink>
          </p>
          <p>
            Výsledek shrnuje pravý dolní panel obrázku: v části pásma
            CO₂ záření ubývalo, zatímco v průhlednějších částech
            spektra přibývalo. Výpočty tento rozdíl vystihly.
            Růst skleníkových plynů a ochlazování stratosféry přispívaly
            k menšímu výdeji. Oteplování povrchu a spodní atmosféry
            naopak zvyšovalo vyzařování, výrazně právě tam, kde
            záření snáze prochází do vesmíru.
            {' '}
            <SourceLink id="DOI_10_1029_2023GL103947">(Raghuraman a kol. 2023, obr. 1–2)</SourceLink>
          </p>
          <p>
            Studie využila dva postupy výpočtu přenosu záření
            a ověřila také soulad celkových toků AIRS s přístrojem CERES,
            který měří záření v širokých pásmech. Porovnání tak
            kontrolovalo, zda se podrobný spektrální záznam shoduje
            s jiným měřením celkového výdeje.{' '}
            <SourceLink id="DOI_10_1029_2023GL103947">(Raghuraman a kol. 2023, oddíly 2–3 a doplňkový obr. S3)</SourceLink>
          </p>
          <p>
            Podporu hypotéze dává shoda tohoto rozložení změn.
            Výsledek rozlišuje vliv přibývajících plynů od reakce
            oteplující se Země. Části měření a výpočtů rozebírá{' '}
            <Link href="/pozorovani/atmosfericka-koncentrace-co2/#odchazejici-spektrum">pozorování odcházejícího spektra</Link>.{' '}
            <SourceLink id="DOI_10_1029_2023GL103947">(Raghuraman a kol. 2023, oddíl 4)</SourceLink>
          </p>

          <h4 className={styles.subheading}>Proč dnes toto vysvětlení přijímáme</h4>
          <p>
            Laboratorní pokusy určují, jak plyn pohlcuje a vyzařuje.
            Výpočet z těchto vlastností odvozuje záření celé atmosféry.
            Pozemní a družicová měření pak kontrolují výsledek
            z opačných stran a v různých podmínkách. Vysvětlení tak
            spojuje fyziku molekul s konkrétními změnami měřeného záření.{' '}
            <SourceLink id="1862_Tyndall">(Tyndall 1861)</SourceLink>{' '}
            <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011)</SourceLink>
          </p>
          <p>
            Současné hodnocení IPCC považuje působení dalšího CO₂
            na záření, které přispívá k oteplování, za dobře doložené.
            Opírá se o tento soubor fyzikálních vztahů a jejich ověření.
            Výzkum dále zpřesňuje velikost působení a navazující
            reakce atmosféry.{' '}
            <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíl 7.3.2.1)</SourceLink>
          </p>
        </HypothesisStory>

        <h2 id="mechanismus">Jak skleníkové plyny mění cestu energie</h2>
        <p>
          Nasycení správně popisuje silné pohlcování v části spektra,
          ale nestačí jako vysvětlení účinku dalšího CO₂ v celé atmosféře.
          Pozemní měření zachytilo změnu i tam, kde by podle této představy
          měl být další účinek zanedbatelný. Lépe obstálo vysvětlení,
          které počítá pohlcování i vyzařování všech vrstev. Vystihlo
          změny záření k povrchu i do vesmíru. Nyní projdeme, proč
          přidaný CO₂ působí i při silném pohlcování a jak mění přenos
          energie mezi povrchem, atmosférou a vesmírem.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíl 7.3.2.1)</SourceLink>
        </p>
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

        <h3 id="zareni-k-povrchu">Proč může k povrchu přicházet více záření</h3>
        <p>
          Atmosférický plyn při své teplotě vyzařuje stejnými částmi
          spektra, kterými záření pohlcuje. Vrstva, která při určité
          vlnové délce pohlcuje účinněji, při stejné teplotě také
          účinněji vyzařuje. Přidání CO₂ proto může zesílit záření
          mířící dolů z vrstev nad povrchem. Zvlášť důležité jsou
          části pásma, kde vyzařování ještě není blízko svému limitu
          pro danou teplotu.{' '}
          <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, s. 234–235, Kirchhoffův zákon)</SourceLink>
        </p>
        <p>
          Záření z vyšší vrstvy se cestou dolů může znovu pohltit.
          Výpočet proto sčítá příspěvky jednotlivých vrstev až po
          započtení toho, co z nich skutečně dojde na povrch.
          Právě tento součet porovnáváme s pozemním měřením.
          Silně pohlcující střed pásma a jeho průhlednější části
          přispívají různě, takže změna má charakteristický tvar
          ve spektru.{' '}
          <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, výklad přenosu po vrstvách)</SourceLink>
        </p>

        <h3 id="vyska-vyzarovani">Záleží také na místě, odkud záření přichází</h3>
        <p>
          Podobně skládáme také záření mířící opačným směrem, do vesmíru.
          Záření z vyšší vrstvy má nad sebou méně plynu,
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
          V samotném středu pásma CO₂ zachytává družice především
          záření ze stratosféry. V části této vrstvy teplota s výškou
          roste. Posun původu záření do vyšších, teplejších vrstev
          proto může výdej na těchto vlnových délkách zvýšit.
          Celkový účinek zjistíme výpočtem přes celé spektrum,
          který použije skutečné teploty jednotlivých vrstev.{' '}
          <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, obr. 3)</SourceLink>
        </p>

        <h3 id="pusobeni-a-odezva">Jak se změna záření promítá do oteplování</h3>
        <p>
          Když při stejném teplotním uspořádání přidáme CO₂ a sečteme
          změny přes celé spektrum, vyjde menší výdej energie do vesmíru.
          Změnu energetické bilance vyvolanou například změnou složení
          atmosféry označujeme jako radiační působení.
          Při jeho výpočtu oddělujeme účinek přidaného plynu od
          následného oteplování povrchu. Jinak by se příčina a teplotní
          reakce smíchaly v jediném čísle.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíly 7.3.1–7.3.2)</SourceLink>
        </p>
        <p>
          IPCC pro zdvojnásobení koncentrace z předindustriálních
          278 na 556 ppm uvádí centrální odhad účinného radiačního
          působení přibližně 3,9 W/m². Tento údaj zahrnuje rychlé
          přizpůsobení atmosféry, například ochlazení stratosféry,
          zatímco vliv následného oteplování
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
            součástí původní práce. Dvě stanice ověřují různá prostředí,
            ale používají stejný postup zpracování a sdílejí některé
            zdroje nejistoty.{' '}
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

        <p>
          Jak se oteplování projeví během konkrétního počasí, rozebírá článek{" "}
          <Link href="/mechanismy/mechanismy-vln-veder/#teplejsi-klima">Proč jsou vlny veder častější a silnější?</Link>.
          Porovnává příspěvky teplotních podmínek, proudění a půdní vody.
        </p>

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
          <section>
            <h3>Podklady vysvětlující grafiky</h3>
            <ul>
              <li><a href="/media/radiacni-pusobeni-sklenikovych-plynu/nasyceni-co2.png">Nasycení pohlcování a oba testy</a>, <a href="/media/radiacni-pusobeni-sklenikovych-plynu/nasyceni-co2.csv" download>číselné podklady</a> a <a href="/media/radiacni-pusobeni-sklenikovych-plynu/nasyceni-co2.txt">popis a licence</a>. Vlastní grafika vytvořená pomocí AI, CC BY 4.0. Křivka ilustruje princip. Čísla přebírají publikované výsledky Ångströma (1900) a Feldmana a kol. (2015).</li>
              <li><a href="/media/radiacni-pusobeni-sklenikovych-plynu/prenos-zareni-co2.png">Přenos záření při růstu CO₂ a oba testy</a>, <a href="/media/radiacni-pusobeni-sklenikovych-plynu/prenos-zareni-co2.csv" download>číselné podklady</a> a <a href="/media/radiacni-pusobeni-sklenikovych-plynu/prenos-zareni-co2.txt">popis a licence</a>. Vlastní grafika vytvořená pomocí AI, CC BY 4.0. Horní část ilustruje princip. Pozemní hodnoty přebírá z Feldmana a kol. (2015), směry družicových změn z Raghuramana a kol. (2023).</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
