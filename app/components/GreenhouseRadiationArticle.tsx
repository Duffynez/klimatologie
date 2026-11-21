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
    prediction: "Pokud už CO₂ pohlcuje téměř vše, co může, jeho další přírůstek změní záření v jeho pásmu jen nepatrně.",
    test: "V trubici ubereme třetinu CO₂ a změříme, kolik záření projde. Na dvou stanicích porovnáme záření oblohy s výpočtem, v němž CO₂ nepřibývá.",
    observation: "V trubici se pohlcený podíl změnil nejvýše o 0,4 procentního bodu. V letech 2000–2010 rostl na obou stanicích příspěvek CO₂ k záření k povrchu přibližně o 0,20 W/m² za deset let.",
    verdict: "Závěr z trubice pro celou atmosféru nestačí",
    explanation: "Některými částmi pásma projde velmi málo původního záření. Záření samotné atmosféry se přesto mění.",
    state: "insufficient",
  },
  {
    id: "promena-prenosu",
    name: "Další CO₂ mění přenos záření",
    prediction: "Při stejných teplotách má v části pásma zesílit záření teplého vzduchu k povrchu. Do vesmíru ho má odcházet méně tam, kde začne přicházet z vyššího, chladnějšího vzduchu.",
    test: "Pozemní měření porovnáme s výpočtem při skutečném růstu CO₂. Pro srovnání s družicí zahrneme také pozorované změny teploty, vlhkosti a oblaků.",
    observation: "Výpočet vystihl zesílení záření oblohy na obou stanicích. Družice zachytila úbytek záření v části pásma CO₂ a růst v průhlednějších částech spektra.",
    verdict: "Vysvětluje pozemní i družicová měření",
    explanation: "Při výpočtu rozhoduje, kolik záření vrstva pohltí, kolik ho při své teplotě vyšle a kolik ho od ní dojde k přístroji.",
    state: "supported",
  },
];

export function GreenhouseRadiationArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2 id="co-vysvetlujeme">Co se změnilo v záření jasné oblohy</h2>
        <p className="article-prose__intro">
          Přístroje v Oklahomě a na severu Aljašky měřily, kolik tepelného záření dopadá z jasné oblohy na zem.
          V záznamech se projevily změny teploty i vlhkosti vzduchu. I po jejich započtení na obou místech v letech 2000–2010
          přibývalo záření na vlnových délkách typických pro oxid uhličitý (CO₂). Podle tohoto přírůstku vědci určili,
          jak rostl příspěvek CO₂ k záření oblohy.
          Obě měření popisuje <Link href="/pozorovani/atmosfericka-koncentrace-co2/#zmena-infracerveneho-zareni">pozorování CO₂ a infračerveného záření</Link>.{' '}
          <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015)</SourceLink>
        </p>
        <p>
          Podobně jako lze viditelné světlo rozložit na barvy, lze i infračervené záření rozdělit podle vlnové délky.
          Takové rozložení tvoří spektrum. Oblast spektra, ve které plyn výrazně pohlcuje záření, se nazývá absorpční pásmo.
          Na některých vlnových délkách v pásmu CO₂ pohltí atmosféra téměř všechno záření od zemského povrchu.
          Jak může další CO₂ přenos energie ještě změnit?{' '}
          <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, obr. 2–3)</SourceLink>
        </p>

        <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
        <HypothesisDiagram
          hypotheses={hypotheses}
          captionId="greenhouse-hypotheses-caption"
          context={
            <p>
              U pozemních měření sledujeme tok záření směrem dolů. Hodnota ve wattech na metr čtvereční (W/m²)
              říká, kolik joulů energie dopadne za sekundu na metr čtvereční povrchu. Trend udává, o kolik se tok v průměru změní za deset let.
            </p>
          }
          caption={<>Obě vysvětlení lze vyzkoušet na týchž měřeních jasné oblohy. Družice poskytuje další možnost ověření, protože zachycuje záření odcházející do vesmíru.</>}
        />

        <h2 id="pribehy">Jak se zkoumal účinek dalšího CO₂</h2>
        <HypothesisStory id="nasyceni" number={1} title="Účinek CO₂ je už téměř nasycený">
          <p>
            V roce 1896 vypočítal Svante Arrhenius, že by se při zvýšení množství CO₂ v atmosféře zemský povrch oteplil.
            Knut Ångström o čtyři roky později zpochybnil velikost tohoto účinku. Kdyby už přítomný CO₂ pohltil téměř
            všechno záření, které pohltit dokáže, změnilo by přidání nebo ubrání plynu energetickou bilanci Země jen málo.{' '}
            <SourceLink id="1896_Arrhenius">(Arrhenius 1896)</SourceLink>{' '}
            <SourceLink id="DOI_10_1002_andp_19003081208">(Ångström 1900, s. 723–725)</SourceLink>
          </p>
          <p>
            Pro svazek záření jedné vlnové délky má tato úvaha jednoduchý důvod. Každá další vrstva plynu může pohltit jen to,
            co k ní prošlo předchozími vrstvami. Když z původního svazku zbývá zlomek, přidání plynu už pohlcený podíl téměř nezvýší.
            Tomuto stavu říkáme nasycení pohlcování. Na obrázku je vidět v místě, kde se horní křivka blíží ke 100 %.{' '}
            <SourceLink id="2016_Harvey_Analytical_Chemistry">(Harvey, oddíl 10.2)</SourceLink>
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

          <h4 id="nasyceni-laboratorni-test" className={styles.testHeading}>První test · Kolik záření projde při menším množství CO₂?</h4>
          <p>
            J. Koch, jehož pokus Ångström popsal, nechal záření zdroje o teplotě 100 °C procházet vrstvou CO₂ dlouhou 30 centimetrů.
            Z rozdílu mezi dopadajícím a prošlým zářením určil, kolik ho plyn pohltil. Při tlaku 780 milimetrů rtuťového sloupce (mmHg),
            přibližně odpovídajícím atmosférickému tlaku, to bylo asi 10 % veškerého dopadajícího záření. Poté tlak snížil na dvě třetiny,
            tedy na 520 mmHg. Při stejném objemu a teplotě tím z dráhy záření ubyla třetina molekul CO₂.{' '}
            <SourceLink id="DOI_10_1002_andp_19003081208">(Ångström 1900, s. 724)</SourceLink>
          </p>
          <p>
            Při nižším tlaku se pohlcený podíl od původních přibližně 10 % lišil nejvýše o <strong>0,4 procentního bodu</strong>.
            Detektor sčítal záření napříč vlnovými délkami. V některých částech pásma proto mohl plyn pohltit téměř vše,
            i když z veškerého záření zdroje pohltil jen desetinu.
            Ångström z malé změny usoudil, že také změny množství CO₂ jen málo ovlivní pohlcování zemského záření.
            V atmosféře přitom záření prochází vrstvami s různým tlakem, teplotou a vlhkostí, které navíc samy vyzařují.{' '}
            <SourceLink id="DOI_10_1002_andp_19003081208">(Ångström 1900, s. 724–725)</SourceLink>{' '}
            <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, obr. 1)</SourceLink>
          </p>

          <h4 id="nasyceni-atmosfericky-test" className={styles.testHeading}>Druhý test · Vysvětlí záření oblohy výpočet se stálým CO₂?</h4>
          <p>
            Pokud je účinek dalšího CO₂ už nepatrný, měl by vývoj záření na obou stanicích dobře vystihnout i výpočet, v němž CO₂ nepřibývá.
            Feldmanův tým pro jednotlivá měření za jasné oblohy zadal do výpočtu teplotu a vlhkost vzduchu naměřenou v různých výškách.
            Koncentraci CO₂ přitom ponechal stálou. Potom na jednotlivých vlnových délkách porovnal měřené záření s tím, které mělo podle výpočtu
            dorazit k přístroji. Hledal, zda se s přibývajícím CO₂ zvětšuje rozdíl právě v jeho pásmu.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, obr. 1–2)</SourceLink>
          </p>
          <p>
            V letech 2000–2010 vzrostla koncentrace CO₂ o 22 ppm, tedy o 22 molekul na milion molekul suchého vzduchu.
            Během týchž let se na obou stanicích v pásmu CO₂ zvětšoval rozdíl mezi měřením a výpočtem. Z něj autoři odvodili přírůstek záření mířícího k povrchu,
            který připadá na CO₂. V Oklahomě činil <strong>0,20 ± 0,06 W/m² za deset let</strong>, na severu Aljašky
            <strong> 0,20 ± 0,07 W/m² za deset let</strong>. Na obou místech byl větší než publikovaná nejistota trendu.
            Předpověď, že účinek dalšího CO₂ bude příliš malý, než aby se dal v atmosféře rozlišit, na těchto místech neobstála.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, obr. 2 a 4 a metody)</SourceLink>
          </p>
        </HypothesisStory>

        <HypothesisStory id="promena-prenosu" number={2} title="Další CO₂ mění přenos záření">
          <p>
            Část přicházejícího záření vrstvou vzduchu projde, část plyn pohltí. K prošlému záření se přidá také to,
            které vrstva sama vyzáří. Pohlcování i vyzařování plynů zkoumal John Tyndall už v roce 1861.
            Do téže trubice postupně vpouštěl různé plyny. Okénka z kamenné soli propouštěla i tepelné záření, které by pohltilo běžné sklo.
            Při stejném zdroji prošlo přes dusík a kyslík mnohem víc záření než přes CO₂ nebo vodní páru.
            Tyndall měřil také záření, které vydávaly samotné zahřáté plyny.{' '}
            <SourceLink id="1862_Tyndall">(Tyndall 1861, pokusy s pohlcováním a vyzařováním)</SourceLink>{' '}
            <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, obr. 1)</SourceLink>
          </p>
          <p>
            I plyn, kterého je ve vzduchu málo, tedy může výrazně ovlivnit přenos energie. Arrhenius v roce 1896 zkoumal,
            jak by se to projevilo na teplotě povrchu. Pro různá množství CO₂ hledal takovou teplotu, při níž by se příjem a výdej energie
            znovu vyrovnaly. Počítal tuto rovnováhu pro různé zeměpisné šířky i roční období. Při vyšší koncentraci CO₂ mu vyšel teplejší
            povrch, při nižší chladnější. O velikost této změny se pak vedl spor o nasycení.{' '}
            <SourceLink id="1896_Arrhenius">(Arrhenius 1896, výpočty a tabulky)</SourceLink>{' '}
            <SourceLink id="DOI_10_1002_andp_19003081208">(Ångström 1900, s. 723–725)</SourceLink>
          </p>

          <h4 className={styles.subheading}>Co propouštějí jednotlivé vrstvy vzduchu</h4>
          <p>
            K posouzení nasycení bylo potřeba rozlišit, co se děje na různých místech téhož pásma.
            Pásmo CO₂ kolem vlnové délky 15 mikrometrů, tedy 15 miliontin metru, se skládá z mnoha úzkých absorpčních čar.
            Každá čára označuje úzké rozmezí vlnových délek odpovídající určité změně energie molekuly. Ve středu silných čar projde jen zlomek záření původního zdroje.
            Na okrajích čar a ve slabších čarách ho projde víc, takže tam další CO₂ může průchod ještě znatelně zeslabit.{' '}
            <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, s. 233–237)</SourceLink>{' '}
            <SourceLink id="1956_Plass">(Plass 1956, s. 141–142)</SourceLink>
          </p>
          <p>
            Šířka a síla čar závisí také na tlaku a teplotě. Gilbert Plass proto v roce 1956 počítal přenos záření od povrchu
            do výšky 75 kilometrů po kilometrových vrstvách. Z laboratorních údajů o čarách pro každou vrstvu na počítači určil,
            kolik záření zespodu propustí a kolik sama vyzáří. Vyšlo mu, že přidání CO₂ dál mění přenos energie zejména ve slabších čarách
            a na okrajích pásma.{' '}
            <SourceLink id="1956_Plass">(Plass 1956, s. 141–142)</SourceLink>
          </p>
          <p>
            Rozlišení podle výšky objasnilo také to, jak se o pohlcování dělí CO₂ s vodní párou. Oba plyny pohlcují některé stejné vlnové délky.
            Vodní páry ale s výškou výrazně ubývá, zatímco CO₂ je ve vzduchu promíchán rovnoměrněji. V suchých vrstvách nad povrchem proto
            může CO₂ pohltit záření i na vlnových délkách, kde u země silně pohlcuje vodní pára.{' '}
            <SourceLink id="1956_Plass">(Plass 1956, s. 141–142)</SourceLink>
          </p>

          <h4 className={styles.subheading}>Co má ukázat měření zdola a shora</h4>
          <p>
            Oba sloupce vzduchu v horní části obrázku mají v každé výšce shodnou teplotu. Liší se množstvím CO₂.
            Tam, kde přidaný plyn zvýší pohlcování, může vrstva při téže teplotě také více vyzařovat.
            U povrchu tak lze čekat silnější záření z teplých spodních vrstev.
            Do vesmíru se současně dostane méně záření zespodu a větší podíl toho, které unikne, bude pocházet z vyšších vrstev.
            Ve spodní části atmosféry, troposféře, teplota zpravidla s výškou klesá. Tam, kde se původ záření posune do chladnějšího vzduchu,
            očekáváme slabší vyzařování do vesmíru.{' '}
            <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, obr. 1–3)</SourceLink>
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

          <h4 id="prenos-pozemni-test" className={styles.testHeading}>První test · Odpovídá výpočet s rostoucím CO₂ měření na obou stanicích?</h4>
          <p>
            V <a href="#nasyceni-atmosfericky-test">porovnání se stálým CO₂</a> se rozdíl mezi měřením a výpočtem postupně zvětšoval.
            Feldmanův tým proto výpočet zopakoval pro tatáž měření z Oklahomy a severu Aljašky. Teplotu a vlhkost v každé výšce zadal stejně,
            tentokrát však nechal CO₂ přibývat podle naměřené koncentrace. Vodní pára, teplota a CO₂ ovlivňují odlišné části spektra různou měrou.
            Pokud rozdíl opravdu souvisel s CO₂, mělo tak jít předpovědět, o kolik záření zesílí a na kterých vlnových délkách.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, obr. 2–3)</SourceLink>{' '}
            <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, obr. 2–3)</SourceLink>
          </p>
          <p>
            Výpočet s rostoucím CO₂ vystihl na obou stanicích velikost přírůstku za jasné oblohy i jeho rozložení ve spektru.
            Přidání naměřeného růstu CO₂ tak vysvětlilo právě tu změnu, která ve výpočtu se stálou koncentrací chyběla.
            Jak lze rozeznat plyn podle vlnových délek, na nichž pohlcuje záření, vysvětluje{' '}
            <Link href="/metody/absorpcni-spektroskopie/">absorpční spektroskopie</Link>.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, obr. 2–4)</SourceLink>
          </p>

          <h4 id="prenos-druzicovy-test" className={styles.testHeading}>Druhý test · Co se změnilo v záření odcházejícím do vesmíru?</h4>
          <p>
            Družice sleduje přenos energie z opačné strany. V pásmu CO₂ může do vesmíru odcházet méně záření i v době, kdy
            oteplující se povrch vyzařuje víc. Záření z povrchu totiž družice zachytí snáze na vlnových délkách, které atmosféra dobře propouští.
            Raghuraman a kolegové využili spektra naměřená infračerveným spektrometrem AIRS na družici Aqua.
            Sledovali, na kterých vlnových délkách mezi lety 2003 a 2021 záření přibylo a na kterých ho ubylo.{' '}
            <SourceLink id="DOI_10_1029_2023GL103947">(Raghuraman a kol. 2023, oddíly 2–3)</SourceLink>
          </p>
          <p>
            Aby rozlišili příčiny těchto změn, spočítali nejprve, jak by se odcházející záření změnilo při rostoucím množství skleníkových plynů,
            kdyby stav povrchu, teploty vzduchu, vlhkost a oblaka zůstaly stejné. Pak do výpočtu zahrnuli i proměny těchto podmínek.
            Příspěvky jednotlivých vlivů tak mohli odhadnout odděleně a výslednou změnu porovnat s pozorovaným spektrem.{' '}
            <SourceLink id="DOI_10_1029_2023GL103947">(Raghuraman a kol. 2023, oddíly 2–3)</SourceLink>
          </p>
          <p>
            V části pásma CO₂, například mezi 13,89 a 14,08 mikrometru, družice zaznamenala pokles odcházejícího záření.
            V průhlednějších částech spektra záření naopak přibylo. Výpočty vystihly oba směry změny.
            K poklesu podle nich přispěl růst množství skleníkových plynů i ochlazování stratosféry, vrstvy nad troposférou.
            Tam, kde záření mohlo projít snadněji, se projevilo silnější vyzařování teplejšího povrchu a spodní atmosféry.{' '}
            <SourceLink id="DOI_10_1029_2023GL103947">(Raghuraman a kol. 2023, obr. 1–2)</SourceLink>
          </p>
          <p>
            Autoři použili dva postupy výpočtu přenosu záření. Celkový tok získaný sečtením příspěvků přes spektrum AIRS navíc
            porovnali s měřením přístroje CERES, který zachycuje záření v širokých pásmech. Oba postupy měření dávaly slučitelný celkový výdej.
            Naměřené a dopočtené části záznamu rozlišuje <Link href="/pozorovani/atmosfericka-koncentrace-co2/#odchazejici-spektrum">pozorování odcházejícího spektra</Link>.{' '}
            <SourceLink id="DOI_10_1029_2023GL103947">(Raghuraman a kol. 2023, oddíly 2–4 a doplňkový obr. S3)</SourceLink>
          </p>
        </HypothesisStory>

        <h2 id="mechanismus">Jak další CO₂ mění přenos energie</h2>
        <p>
          Kochův pokus ukázal, jak málo se může změnit průchod záření, když už plyn silně pohlcuje.
          Na obou stanicích však nadále přibývalo záření v pásmu CO₂. Jeho přírůstek vysvětlil výpočet s rostoucí koncentrací plynu.
          U družice odpovídalo rozložení změn ve spektru výpočtu, který zahrnul také oteplování povrchu a změny v atmosféře.
          V obou směrech záleží na tom, co molekuly vzduchu pohltí a co při své teplotě samy vyzáří.{' '}
          <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015)</SourceLink>{' '}
          <SourceLink id="DOI_10_1029_2023GL103947">(Raghuraman a kol. 2023)</SourceLink>{' '}
          <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíl 7.3.2.1)</SourceLink>
        </p>
        <h3 id="molekuly">Jak si CO₂ vyměňuje energii se vzduchem a se zářením</h3>
        <p>
          Zemský povrch vyzařuje při své teplotě převážně v infračervené oblasti. Toto záření má delší vlnovou délku než viditelné světlo
          a přenáší energii do atmosféry i do vesmíru. Čím je povrch za jinak stejných podmínek teplejší, tím víc energie za sekundu vyzáří.{' '}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics 2, oddíl 1.6)</SourceLink>{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: energetická bilance)</SourceLink>
        </p>
        <p>
          Molekula CO₂ může pohltit záření těch vlnových délek, které jí dodají právě tolik energie, kolik potřebuje ke změně svého kmitání a otáčení.
          Proto má CO₂ ve spektru své charakteristické absorpční čáry. Při srážkách může molekula část získané energie předat okolnímu vzduchu.
          Energii může při srážce také získat a později ji vyzářit. Vrstva vzduchu tak vysílá vlastní infračervené záření vzhůru i dolů.
          Jeho intenzita závisí na teplotě vrstvy.{' '}
          <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, s. 233–235)</SourceLink>
        </p>

        <h3 id="jadra-a-okraje">Proč záleží na okrajích absorpčních čar</h3>
        <p>
          Sledujme původní svazek záření při průchodu dvěma stejně dlouhými vrstvami plynu o shodném tlaku, teplotě a složení.
          Na zvolené vlnové délce každá pohltí stejný podíl toho, co do ní vstoupí. Pohltí-li první vrstva polovinu,
          ke druhé dorazí také polovina. Druhá z ní pohltí polovinu, tedy čtvrtinu původního záření. Obě vrstvy dohromady pohltí 75 %.
          Jak velký rozdíl udělá přidání vrstvy, závisí na tom, kolik původního záření se k ní ještě dostane.{' '}
          <SourceLink id="2016_Harvey_Analytical_Chemistry">(Harvey, oddíl 10.2)</SourceLink>
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
          V pásmu CO₂ nastávají oba případy vedle sebe. Uprostřed silné čáry už k další vrstvě téměř nic z původního svazku nedorazí.
          Na jejích okrajích nebo ve slabších čarách zbývá k pohlcení větší část. S přibývajícím plynem se tak zvětšuje rozsah
          vlnových délek, na nichž atmosféra původní záření silně zeslabí.{' '}
          <SourceLink id="1956_Plass">(Plass 1956, s. 142)</SourceLink>
        </p>

        <h3 id="zareni-k-povrchu">Proč pozemní přístroj zachytí víc záření</h3>
        <p>
          Pozemní přístroj přijímá záření z mnoha výšek. Od každé vrstvy k němu dorazí ta část jejího vlastního záření,
          kterou cestou nepohltil vzduch pod ní. Na stejné vlnové délce přitom platí, že vrstva, která účinněji pohlcuje,
          při dané teplotě také účinněji vyzařuje. V částečně průhledné oblasti pásma tak s přibývajícím CO₂ mohou víc zářit i vrstvy těsně nad přístrojem.{' '}
          <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, s. 234–235, Kirchhoffův zákon)</SourceLink>
        </p>
        <p>
          Záření ze vzdálenějších vrstev přitom cestou dolů více zeslábne. Větší díl celku pak může pocházet ze vzduchu v menší výšce.
          Pokud je tento vzduch teplejší než vrstvy nad ním, přijde k povrchu více energie i při stejném průběhu teplot s výškou.
          Proto se v pozemním měření projeví i samotný růst koncentrace CO₂.{' '}
          <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, přenos po vrstvách)</SourceLink>{' '}
          <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, obr. 2–4)</SourceLink>
        </p>

        <h3 id="vyska-vyzarovani">Z jaké výšky unikne záření do vesmíru</h3>
        <p>
          Družice se na stejné vrstvy dívá shora. Kde je atmosféra dobře průhledná, přichází k ní záření i přímo od zemského povrchu.
          Na silněji pohlcujících vlnových délkách přichází většina záření ze samotného vzduchu.
          Nad vyšší vrstvou zbývá méně plynu, který by její záření mohl pohltit. Vlastní záření vyšší vrstvy tak má snazší cestu do vesmíru.{' '}
          <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, obr. 1 a 3)</SourceLink>
        </p>
        <p>
          S rostoucí koncentrací CO₂ přibude pohlcujícího plynu i nad vrstvami, odkud záření dosud unikalo. Větší část záření zdola se cestou pohltí
          a v tom, co dorazí k družici, vzroste podíl vyšších vrstev. Tento posun může nastat i tam, kde už od povrchu až do vesmíru téměř
          nic neprocházelo. V částech pásma, kde k družici září hlavně troposféra, to při nezměněných teplotách obvykle znamená
          posun do chladnějšího vzduchu. Odtud na stejné vlnové délce odchází méně energie.{' '}
          <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, výklad emisní výšky)</SourceLink>
        </p>
        <p>
          V samém středu pásma kolem 15 mikrometrů přijímá družice záření především ze stratosféry. V části této vrstvy teplota s výškou roste.
          Při nezměněném průběhu teplot tak může posun do vyššího, teplejšího vzduchu vyzařování na těchto vlnových délkách zesílit.
          Když se ale stratosféra v průběhu let ochlazuje, samotný vzduch v ní září slaběji. V družicovém záznamu se projeví jak změna výšky,
          odkud záření přichází, tak změna teploty vzduchu v této výšce.{' '}
          <SourceLink id="DOI_10_1063_1_3653855">(Pierrehumbert 2011, obr. 3)</SourceLink>{' '}
          <SourceLink id="DOI_10_1029_2023GL103947">(Raghuraman a kol. 2023, obr. 1–2)</SourceLink>
        </p>

        <h3 id="pusobeni-a-odezva">Jak se změna záření promítne do oteplování</h3>
        <p>
          Po sečtení všech vlnových délek vychází, že bezprostředně po přidání CO₂ při původních teplotách odchází do vesmíru méně energie.
          Pokud příjem energie ze Slunce zůstane stejný, začne se na Zemi energie hromadit. Změnu rozdílu mezi příjmem a výdejem
          vyvolanou přidáním plynu označujeme jako jeho <strong>radiační působení</strong>. Kladné znaménko znamená, že se bilance mění
          ve prospěch příjmu energie.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíly 7.3.1–7.3.2)</SourceLink>
        </p>
        <p>
          Při určení <strong>účinného radiačního působení</strong> se započítá také rychlé přizpůsobení atmosféry, například ochlazení
          stratosféry. Pozdější změna způsobená oteplením povrchu se posuzuje zvlášť. Pro zdvojnásobení koncentrace CO₂ z předindustriálních
          278 na 556 ppm uvádí Mezivládní panel pro změnu klimatu (IPCC) odhad přibližně <strong>3,9 W/m²</strong> s nejistotou asi ±12 %.
          O tolik se po rychlém přizpůsobení zvětší rozdíl mezi příjmem a výdejem na horní hranici atmosféry v průměru přes celou Zemi.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíl 7.3.2.1)</SourceLink>
        </p>
        <p>
          Jak se povrch a spodní atmosféra postupně oteplují, vyzařují více energie. Tím se původní přebytek příjmu zmenšuje.
          Velikost oteplení závisí i na tom, jak se přitom změní vlhkost a oblačnost. Souvislost mezi ukládáním energie a teplotou
          rozebírá článek o <Link href="/mechanismy/energeticka-bilance-zeme/#nerovnovaha-a-teplota">energetické bilanci Země</Link>.
          Příjem a výdej energie lze sledovat <Link href="/metody/mereni-radiacnich-toku/#druzicova-bilance">měřením radiačních toků</Link>.{' '}
          <SourceLink id="WEB_NASA_Earth_Energy_Budget">(NASA: energetická bilance)</SourceLink>
        </p>
        <p>
          Jak vodní pára ovlivní výsledné oteplení, zkoumali už v roce 1967 Syukuro Manabe a Richard Wetherald.
          V jejich modelu se teploty ustalovaly působením záření a přenosem tepla stoupajícím a klesajícím vzduchem, tedy konvekcí.
          V jedné variantě ponechali množství vodní páry stálé. Ve druhé zachovali relativní vlhkost, tedy míru nasycení vzduchu vodní párou při dané teplotě.
          Teplejší vzduch pak obsahoval více páry, která sama pohlcuje infračervené záření a oteplení zesiluje.
          Právě v této variantě vyšlo po zdvojnásobení CO₂ oteplení povrchu asi o 2 °C a ochlazení stratosféry.{' '}
          <SourceLink id="1967_Manabe_Wetherald">(Manabe a Wetherald 1967, oddíl 5)</SourceLink>
        </p>

        <h3 id="nejistoty">Jak přesně známe velikost změny</h3>
        <p>
          Pozemní přístroj sleduje tok k povrchu na konkrétním místě za jasné oblohy. Družice zachytí záření odcházející do vesmíru
          při různých teplotách a oblačnosti. Pro každé z měření proto počítáme tok v odpovídajícím směru a za podmínek měření.
          Přesnost odhadu účinku CO₂ závisí i na tom, jak dobře známe teplotu, vlhkost a změny oblaků.{' '}
          <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíly 7.3–7.4)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Podrobnosti nejistot a dalších testů</summary>
          <p>
            U pozemních měření mohou odchylky v teplotě a vlhkosti jednotlivých vrstev ovlivnit, jak velká část změny vyjde na CO₂.
            Záleží také na laboratorních údajích o pohlcování a na dlouhodobé stálosti přístroje. Oklahoma a sever Aljašky nabízejí
            různé podmínky, obě stanice však používají stejný postup zpracování a část zdrojů nejistoty sdílejí.{' '}
            <SourceLink id="DOI_10_1038_nature14240">(Feldman a kol. 2015, metody)</SourceLink>
          </p>
          <p>
            U družice lze s pozorováním srovnat výslednou změnu spektra. Podíl přibývajících plynů, teploty a ostatních vlivů od sebe
            oddělují výpočty. Navíc se v datovém produktu AIRS statisticky doplňují části spektra, které přístroj nepokrývá.
            Uvedený úsek mezi 13,89 a 14,08 mikrometru leží v měřeném rozsahu.{' '}
            <SourceLink id="DATA_AIRS_SPECTRAL_OLR">(NASA, spektrální toky AIRS)</SourceLink>{' '}
            <SourceLink id="DOI_10_1029_2023GL103947">(Raghuraman a kol. 2023, oddíly 2–3)</SourceLink>
          </p>
          <p>
            Vysvětlení lze dále zkoušet na stanicích s jiným podnebím. Kdyby se při známém přírůstku CO₂ a změřených teplotách a vlhkosti
            opakovaně objevovala jiná změna spektra, než vychází z výpočtu, záleželo by na velikosti rozdílu. Trvalá odchylka přesahující
            společnou nejistotu měření a výpočtu by vyžadovala prověřit vstupní údaje i samotný popis přenosu záření.
          </p>
        </details>

        <h2 id="shrnuti">Shrnutí mechanismu</h2>
        <div className="method-conclusion">
          <p>
            CO₂ v některých částech svého pásma pohltí téměř vše, co přichází od povrchu. Na okrajích čar a ve slabších čarách může
            přidaný plyn pohltit víc. Vzduch přitom také sám vyzařuje. Když CO₂ přibude, záření z nižších vrstev hůře prochází.
            V části pásma pak družice zachytí větší podíl záření z vyšších, chladnějších vrstev. Ty vyzařují slaběji. V součtu přes celé spektrum Země
            při původních teplotách vydává méně energie. Při stejném příjmu energie ze Slunce se proto začne oteplovat.
          </p>
          <p>
            Směrem k povrchu mohou naopak více zářit teplé spodní vrstvy. Na dvou stanicích za jasné oblohy výpočet s přibývajícím CO₂
            vystihl, na kterých vlnových délkách záření zesílilo i o kolik. Z družice bylo v části pásma CO₂ vidět menší výdej do vesmíru
            a v průhlednějších částech silnější vyzařování oteplujícího se povrchu a spodní atmosféry.
          </p>
        </div>

        <p>
          Jak teplejší klima, proudění vzduchu a množství vody v půdě ovlivňují jednotlivá horká období,
          ukazuje <Link href="/mechanismy/mechanismy-vln-veder/#teplejsi-klima">vysvětlení vln veder</Link>.
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
