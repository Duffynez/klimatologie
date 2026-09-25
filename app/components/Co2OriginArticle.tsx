import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";

const comparisonRows = [
  {
    property: "Poměr přírůstku v atmosféře k emisím ze spalování",
    fossil: "Přírůstek menší než emise, protože oceán a pevnina část CO₂ pohlcují.",
    ocean: "Přírůstek nezávislý na emisích; oceán by musel uhlík ztrácet.",
    volcanoes: "Přírůstek úměrný sopečné činnosti, nikoli spotřebě paliv.",
    land: "Přírůstek úměrný ztrátě uhlíku z vegetace a půdy.",
    observed: "Emise 11,1 GtC, přírůstek 5,9 GtC v roce 2023.",
  },
  {
    property: "Uhlík v povrchovém oceánu",
    fossil: "Roste, pH klesá.",
    ocean: "Klesá, pH roste.",
    volcanoes: "Roste jen nepatrně.",
    land: "Roste, pH klesá.",
    observed: "Na sedmi stanicích roste o 0,78 až 1,89 µmol/kg ročně, pH klesá.",
  },
  {
    property: "Poměr ¹³C v atmosférickém CO₂ (δ¹³C)",
    fossil: "Klesá.",
    ocean: "Není rozhodující.",
    volcanoes: "Bez výrazné změny; přísun je příliš malý.",
    land: "Klesá.",
    observed: "Pokles z −6,6 ‰ v roce 1850 na −8,4 ‰ v roce 2015.",
  },
  {
    property: "Radiouhlík ¹⁴C (Δ¹⁴C)",
    fossil: "Klesá, fosilní uhlík ¹⁴C neobsahuje.",
    ocean: "Není rozhodující.",
    volcanoes: "Klesá jen nepatrně.",
    land: "Téměř beze změny, uhlík biosféry je mladý.",
    observed: "Pokles přibližně o 20 ‰ mezi lety 1850 a 1950, před jadernými testy.",
  },
  {
    property: "Kyslík v atmosféře",
    fossil: "Klesá, spalování spotřebovává kyslík.",
    ocean: "Nemá klesat; oceán při uvolnění CO₂ kyslík nespotřebuje.",
    volcanoes: "Nemá klesat.",
    land: "Klesá.",
    observed: "Pokles o 19 per meg ročně.",
  },
];

export function Co2OriginArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>GtC</dt>
            <dd>
              Gigatuna uhlíku, tedy miliarda tun. Uhlíkové bilance počítají hmotnost samotného uhlíku. Jedna GtC
              odpovídá 3,67 miliardy tun CO₂, protože molekula CO₂ je o dva atomy kyslíku těžší.
            </dd>
          </div>
          <div>
            <dt>δ¹³C</dt>
            <dd>
              Odchylka poměru těžkého izotopu uhlíku ¹³C k běžnému ¹²C od mezinárodního standardu, v promilích
              (‰). Zápornější hodnota znamená relativně méně ¹³C.
            </dd>
          </div>
          <div>
            <dt>Δ¹⁴C</dt>
            <dd>
              Odchylka obsahu radioaktivního izotopu ¹⁴C od standardu, v promilích. Izotop ¹⁴C se rozpadá s
              poločasem přibližně 5 700 let, takže uhlík uložený miliony let jej už neobsahuje.
            </dd>
          </div>
          <div>
            <dt>Per meg</dt>
            <dd>
              Jednotka změny poměru kyslíku k dusíku ve vzduchu. Pokles o 19 per meg znamená, že z každého milionu
              molekul kyslíku jich ubylo 19.
            </dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Propadem rozumíme proces, který uhlík z atmosféry odebírá a ukládá jinde, například v oceánu nebo ve
          vegetaci. Zdrojem rozumíme proces, který uhlík do atmosféry přidává.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co potřebujeme vysvětlit</h2>
        <p className="article-prose__intro">
          Podíl oxidu uhličitého v atmosféře vzrostl z přibližně 278 ppm v roce 1750 na 419,3 ppm v roce 2023.
          Předběžná hodnota pro rok 2024 je 422,5 ppm, o 52 % více než před průmyslovou revolucí. V letech
          2023 a 2024 přibylo 2,79 a 2,87 ppm.{" "}
          <SourceLink id="DOI_10_5194_essd_17_965_2025">Friedlingstein et al., 2025</SourceLink>
        </p>

        <p>
          Jak se tato čísla měří a proč jim lze věřit, popisuje článek{" "}
          <Link className="text-link" href="/pozorovani/atmosfericka-koncentrace-co2">
            Oxid uhličitý v atmosféře
          </Link>
          . Zde pozorování znovu nedokazujeme. Potřebujeme vysvětlit jeho vlastnosti: nárůst začíná s průmyslovou
          érou, zrychluje se, probíhá současně na všech stanicích od Mauna Loa po jižní pól a vede k hodnotám, které
          vzduch uzavřený v antarktickém ledu nezaznamenal za posledních 800 000 let. V tomto období se podíl CO₂
          pohyboval mezi 172 a 300 ppm.{" "}
          <SourceLink id="DOI_10_1038_nature06949">Lüthi et al., 2008</SourceLink>
        </p>

        <p>
          Současně s tím se mění chemie oceánu: v povrchové vodě přibývá rozpuštěného uhlíku a klesá pH. Tento jev
          popisuje článek{" "}
          <Link className="text-link" href="/pozorovani/acidifikace-oceanu">
            Acidifikace oceánu
          </Link>
          . Otázka proto nezní jen „odkud se CO₂ bere“, ale také „proč ho přibývá v atmosféře i v oceánu zároveň“.
        </p>

        <h2>Co mechanismus popisuje</h2>
        <p>
          Mechanismus popisuje přenos uhlíku z geologických zásob do rychle se vyměňujících rezervoárů na povrchu
          Země. Spalováním uhlí, ropy a zemního plynu, výrobou cementu a odlesňováním se do atmosféry dostává uhlík,
          který byl miliony let uložen v horninách nebo desítky až stovky let ve vegetaci a půdě. Část tohoto uhlíku
          zůstane v atmosféře, část se rozpustí v oceánu a část přijme pevninská vegetace.
        </p>

        <p>
          Rozlišujeme čtyři vrstvy výkladu. <strong>Příčinou</strong> je lidská činnost, která uvolňuje uhlík
          z dlouhodobých zásob. <strong>Mechanismem</strong> je chemická přeměna uhlíku na CO₂ a jeho následné
          rozdělení mezi atmosféru, oceán a pevninu. <strong>Následkem</strong> je rostoucí podíl CO₂ v atmosféře a
          rostoucí obsah uhlíku v oceánu. <strong>Zpětné vazby</strong> mění, jak velkou část emisí propady
          odeberou: s rostoucím obsahem uhlíku klesá schopnost povrchové vody další CO₂ chemicky vázat a teplejší
          voda rozpouští plyny hůře. Tyto zpětné vazby mění velikost propadů, nikoli původ přírůstku.
        </p>

        <h2>Kauzální řetězec</h2>
        <figure className="method-flow" aria-labelledby="co2-origin-flow-caption">
          <div className="method-flow__track">
            <div>
              <span>1</span>
              <strong>Uhlík z fosilních zásob a vegetace se oxiduje</strong>
              <small>spalování, výroba cementu, odlesňování</small>
            </div>
            <b aria-hidden="true">→</b>
            <div>
              <span>2</span>
              <strong>CO₂ vstupuje do atmosféry</strong>
              <small>spolu s úbytkem kyslíku a izotopovým otiskem zdroje</small>
            </div>
            <b aria-hidden="true">→</b>
            <div>
              <span>3</span>
              <strong>Oceán a pevnina část CO₂ odeberou</strong>
              <small>rozpouštění ve vodě a fotosyntéza</small>
            </div>
            <b aria-hidden="true">→</b>
            <div>
              <span>4</span>
              <strong>Zbytek se hromadí v atmosféře</strong>
              <small>měřený přírůstek ppm a současné změny v oceánu</small>
            </div>
          </div>
          <figcaption id="co2-origin-flow-caption">
            Schéma přenosu uhlíku. Každý krok lze měřit samostatně: emise z energetických a průmyslových statistik,
            přírůstek v atmosféře na měřicích stanicích, příjem uhlíku oceánem z chemie mořské vody a změny
            kyslíku a izotopů ve vzorcích vzduchu.
          </figcaption>
        </figure>

        <p>
          <strong>Krok 1 → 2.</strong> Při spalování se uhlík slučuje se vzdušným kyslíkem. Každý atom uhlíku, který
          shoří, odebere z atmosféry molekulu kyslíku a vodík v palivu odebere další kyslík na vznik vody. Pro
          celosvětovou směs fosilních paliv se proto spotřebuje přibližně 1,4 molekuly kyslíku na každou vzniklou
          molekulu CO₂. U rostlinné hmoty je tento poměr asi 1,1.{" "}
          <SourceLink id="DOI_10_5194_acp_19_9269_2019">Tohjima et al., 2019</SourceLink>
        </p>

        <p>
          <strong>Krok 2 → 3.</strong> CO₂ je ve vodě rozpustný a v mořské vodě reaguje s uhličitanovými ionty. Pokud
          je ho v atmosféře více, než odpovídá rovnováze s povrchovou vodou, přechází do oceánu. Rostliny ho
          odebírají fotosyntézou. Oba propady jsou měřitelné: v oceánu přibývá rozpuštěného uhlíku a v atmosféře se
          mění poměr kyslíku a CO₂, jak ukazujeme níže.
        </p>

        <p>
          <strong>Krok 3 → 4.</strong> Propady fungují jen do té míry, do jaké je atmosféra od rovnováhy vzdálená.
          Nemohou odebrat všechen přidaný uhlík, protože by tím zanikl rozdíl, který je pohání. Hromadění v atmosféře
          je proto nutným důsledkem toho, že se uhlík přidává rychleji, než jej oceán a pevnina stačí převzít.
        </p>

        <h2>Kvantitativní základ</h2>
        <p>
          Vysvětlení musí sedět nejen směrem, ale také velikostí. K tomu slouží uhlíková bilance, kterou každoročně
          sestavuje mezinárodní projekt Global Carbon Project. Vychází ze zákona zachování hmoty: uhlík, který se do
          atmosféry dostane, v ní buď zůstane, nebo přejde jinam.
        </p>

        <p className="article-formula method-equation">
          E<sub>FOS</sub> + E<sub>LUC</sub> = G<sub>ATM</sub> + S<sub>OCEAN</sub> + S<sub>LAND</sub> + B<sub>IM</sub>
        </p>

        <p>
          E<sub>FOS</sub> jsou emise ze spalování fosilních paliv a výroby cementu, E<sub>LUC</sub> emise ze změn
          využití krajiny, hlavně odlesňování. G<sub>ATM</sub> je přírůstek uhlíku v atmosféře, S<sub>OCEAN</sub> a
          S<sub>LAND</sub> jsou propady v oceánu a na pevnině. B<sub>IM</sub> je nesoulad bilance: rozdíl, který
          zůstane, protože jednotlivé členy se odhadují nezávisle. Všechny členy se uvádějí v GtC za rok. Přírůstek
          v atmosféře se na ppm převádí vztahem 1 ppm = 2,124 GtC.
        </p>

        <p>
          Pro rok 2023 vychází bilance takto: fosilní emise 10,1 ± 0,5 GtC, emise ze změn využití krajiny
          1,0 ± 0,7 GtC, přírůstek v atmosféře 5,9 ± 0,2 GtC, tedy 2,79 ppm, propad v oceánu 2,9 ± 0,4 GtC a propad
          na pevnině 2,3 ± 1,0 GtC. Nesoulad bilance činil −0,02 GtC.{" "}
          <SourceLink id="DOI_10_5194_essd_17_965_2025">Friedlingstein et al., 2025</SourceLink>
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/co2-origin/uhlikova-bilance-2023.svg"
            alt="Dva vodorovné pruhy. Horní ukazuje uvolněný uhlík: 10,1 GtC z fosilních paliv a cementu a 1,0 GtC ze změn využití krajiny. Dolní ukazuje, kam uhlík odešel: 5,9 GtC zůstalo v atmosféře, 2,9 GtC převzal oceán a 2,3 GtC pevnina."
            width={770}
            height={252}
            sizes="(max-width: 850px) 100vw, 770px"
            unoptimized
          />
          <figcaption>
            Globální uhlíková bilance za rok 2023 v miliardách tun uhlíku. Oba pruhy mají stejnou délku, protože
            uhlík nemizí: co se uvolní, to buď zůstane v atmosféře, nebo přejde do oceánu či na pevninu. Přírůstek v
            atmosféře je měřený, emise z fosilních paliv vycházejí ze statistik, ostatní členy jsou odhady s
            nejistotou uvedenou v textu. Nesoulad bilance −0,02 GtC je v grafu zanedbán. Data: Global Carbon Budget
            2024, graf vlastní.{" "}
            <SourceLink id="DOI_10_18160_gcp_2024">Global Carbon Project, 2024</SourceLink>
          </figcaption>
        </figure>

        <p>
          Kdyby v atmosféře zůstaly všechny emise roku 2023, tedy 11,1 GtC, podíl CO₂ by vzrostl přibližně o 5,2 ppm.
          Změřený přírůstek byl 2,79 ppm. V atmosféře tedy zůstalo 53 % emisí a zbytek převzaly propady. Lidské
          emise tak nestačí jen vysvětlit pozorovaný přírůstek: jsou téměř dvakrát větší. Právě tento přebytek
          musí každé vysvětlení zohlednit.
        </p>

        <p>
          Jednoduchý výpočet má svá omezení. Emise z fosilních paliv se odvozují z energetických statistik a jejich
          nejistota je malá. Emise ze změn využití krajiny a propad na pevnině jsou nejistější a autoři bilance je
          uvádějí jako hlavní otevřené otázky. Nejistota se však týká rozdělení mezi propady, nikoli toho, zda emise
          převyšují přírůstek.{" "}
          <SourceLink id="DOI_10_5194_essd_17_965_2025">Friedlingstein et al., 2025</SourceLink>
        </p>

        <h2>Předpovědi a rozlišující znaky</h2>
        <p>
          Pokud přírůstek CO₂ skutečně pochází z fosilních paliv a odlesňování, musíme pozorovat souběh několika
          jevů, z nichž každý se měří jinou metodou:
        </p>
        <ul>
          <li>
            <strong>Směr a velikost:</strong> přírůstek v atmosféře menší než emise a rostoucí spolu s nimi.
          </li>
          <li>
            <strong>Uhlík-13:</strong> fosilní paliva vznikla z rostlin, které při fotosyntéze přednostně přijímají
            lehčí izotop ¹²C. Jejich uhlík je proto na ¹³C chudší a jeho přidání musí δ¹³C atmosféry snižovat.
          </li>
          <li>
            <strong>Uhlík-14:</strong> fosilní paliva ležela v zemi mnohem déle, než je poločas rozpadu ¹⁴C, a tento
            izotop už neobsahují. Jejich přidání musí podíl ¹⁴C v atmosféře ředit.
          </li>
          <li>
            <strong>Kyslík:</strong> spalování spotřebovává kyslík, takže jeho podíl ve vzduchu musí klesat v poměru
            daném chemií paliv.
          </li>
          <li>
            <strong>Oceán:</strong> pokud je oceán propadem, musí v něm uhlíku přibývat a pH musí klesat.
          </li>
          <li>
            <strong>Časový průběh:</strong> meziroční výkyvy přírůstku mohou souviset s počasím a oceánskými
            oscilacemi, dlouhodobý trend však musí sledovat emise.
          </li>
        </ul>
        <p>
          Nejcennější jsou znaky, ve kterých se vysvětlení navzájem liší. Pokles kyslíku odlišuje spalování od
          uvolňování CO₂ z oceánu či ze sopek. Úbytek ¹⁴C odlišuje fosilní uhlík od uhlíku z vegetace. Rostoucí
          obsah uhlíku v oceánu odlišuje oceán jako propad od oceánu jako zdroje.
        </p>

        <h2>Historie vysvětlení</h2>
        <p>
          Arvid Högbom v roce 1894 sestavil jeden z prvních rozborů koloběhu uhlíku mezi horninami, atmosférou a
          oceánem. Zjistil, že tehdejší spalování uhlí přidávalo do vzduchu CO₂ v množství srovnatelném s
          přirozenými geologickými toky. Svante Arrhenius tuto úvahu převzal do své práce z roku 1896, známé
          především výpočtem vlivu CO₂ na teplotu.{" "}
          <SourceLink id="1894_Hogbom">Högbom, 1894</SourceLink> a{" "}
          <SourceLink id="1896_Arrhenius">Arrhenius, 1896</SourceLink>
        </p>

        <p>
          Guy Stewart Callendar v roce 1938 spojil odhad CO₂ vyrobeného spalováním paliv s tehdy dostupnými měřeními
          a s otázkou, jak by tento přírůstek mohl ovlivnit teplotu. Spolehlivost tehdejších měření však byla
          omezená.{" "}
          <SourceLink id="1938_Callendar">Callendar, 1938</SourceLink>
        </p>

        <p>
          Rozhodující změnu přinesl radiouhlík. Hans Suess zjistil, že dřevo z posledních desetiletí obsahuje
          méně ¹⁴C, než by odpovídalo jeho stáří. V roce 1957 spolu s Rogerem Revellem porovnali poměry ¹⁴C a ¹³C ve
          dřevě a v mořském materiálu a odhadli, že molekula CO₂ zůstane v atmosféře v průměru asi deset let, než se
          rozpustí v oceánu. Vyvodili z toho, že většinu CO₂ ze spalování už musel převzít oceán a že přírůstek v
          atmosféře je zatím malý, ale při dalším růstu spotřeby paliv může být v příštích desetiletích významný.{" "}
          <SourceLink id="DOI_10_3402_tellusa_v9i1_9075">Revelle &amp; Suess, 1957</SourceLink>
        </p>

        <p>
          Tuto předpověď bylo nutné ověřit přímým měřením. Charles David Keeling v roce 1960 popsal první přesná
          měření: na severní polokouli našel pravidelné kolísání během roku a v Antarktidě malý, ale trvalý nárůst.{" "}
          <SourceLink id="DOI_10_1111_j_2153_3490_1960_tb01300_x">Keeling, 1960</SourceLink>{" "}
          Pozdější desetiletí ukázala, že závěr Revella a Suesse o oceánu byl příliš optimistický. Výměna molekul
          mezi vzduchem a vodou je sice rychlá, čistý přesun uhlíku do oceánu je ale omezený jeho chemií. V atmosféře
          proto zůstává zhruba polovina emisí, v roce 2023 to bylo 53 %.{" "}
          <SourceLink id="DOI_10_5194_essd_17_965_2025">Friedlingstein et al., 2025</SourceLink>
        </p>

        <p>
          Poslední nezávislý test přinesla měření kyslíku. Změny, o které jde, jsou nepatrné, a proto bylo nutné vyvinout
          metody schopné rozlišit změnu o několik milióntin. Síť Scripps Institution of Oceanography měří poměr
          kyslíku k dusíku v odebraných vzorcích vzduchu od roku 1989.{" "}
          <SourceLink id="DOI_10_1111_j_1600_0889_2006_00175_x">Manning &amp; Keeling, 2006</SourceLink>
        </p>

        <h2>Důkazy, že mechanismus skutečně působí</h2>

        <h3>1. Základní důkaz: chemie spalování a složení paliv</h3>
        <p>
          Že spalování uhlíkatých paliv vytváří CO₂ a spotřebovává kyslík, je základní chemie ověřitelná v každé
          laboratoři. Pro klimatologii je podstatné, že lze změřit i poměr obou plynů: pro celosvětovou směs paliv
          je to přibližně 1,4 molekuly kyslíku na molekulu CO₂.{" "}
          <SourceLink id="DOI_10_5194_acp_19_9269_2019">Tohjima et al., 2019</SourceLink>{" "}
          Stejně dobře je známé izotopové složení paliv: neobsahují ¹⁴C a jsou ochuzené o ¹³C.{" "}
          <SourceLink id="DOI_10_1029_2019gb006170">Graven et al., 2020</SourceLink>
        </p>

        <h3>2. Přímý důkaz: otisk zdroje v atmosféře</h3>
        <p>
          Celosvětový průměr δ¹³C atmosférického CO₂ klesl z −6,6 ‰ v roce 1850 na −8,4 ‰ v roce 2015. Podíl ¹⁴C klesl
          mezi lety 1850 a 1950 přibližně o 20 ‰. Tento pokles nastal dříve, než atmosféru zasáhly jaderné zkoušky,
          které na čas ¹⁴C naopak přidaly.{" "}
          <SourceLink id="DOI_10_1029_2019gb006170">Graven et al., 2020</SourceLink>{" "}
          Starší průběh δ¹³C zachycuje také vzduch uzavřený v ledu na antarktickém Law Dome.{" "}
          <SourceLink id="DOI_10_5194_essd_11_473_2019">Rubino et al., 2019</SourceLink>
        </p>

        <p>
          Kyslíku v atmosféře ubývá o 19 per meg ročně: z každého milionu molekul kyslíku jich každý rok zmizí
          přibližně devatenáct. Pro dýchání to nemá význam, jde ale o přímý chemický otisk spalování.{" "}
          <SourceLink id="WEB_Scripps_O2_Program_Atmospheric_Oxygen_Research">Scripps O₂ Program</SourceLink>
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/co2-origin/otisky-v-atmosfere.svg"
            alt="Tři grafy nad sebou se společnou časovou osou od roku 1991. Podíl CO₂ na Mauna Loa roste z přibližně 354 na 429 ppm, δ¹³C klesá z −7,75 na −8,75 promile a poměr kyslíku k dusíku klesá z −117 na −854 per meg."
            width={770}
            height={640}
            sizes="(max-width: 850px) 100vw, 770px"
            unoptimized
          />
          <figcaption>
            Tři veličiny změřené na observatoři Mauna Loa: podíl CO₂ v nasávaném vzduchu, δ¹³C a poměr kyslíku k
            dusíku v odebraných vzorcích. Zobrazeny jsou měsíční hodnoty po odečtení pravidelného sezónního cyklu.
            Kyslík je vyjádřen jako odchylka od referenčního vzduchu, na absolutní hodnotě proto nezáleží, jen na
            změně. Od roku 1991 na této stanici ubylo přibližně 740 per meg. Mezery v řadách odpovídají měsícům bez
            platného měření; δ¹³C je zatím zveřejněno do prosince 2024. Erupce Mauna Loa přerušila měření na
            observatoři od prosince 2022; výpadek CO₂ Scripps vyplnil měřeními z nedalekého vrcholu Maunakea. Data: Scripps CO₂ Program a
            Scripps O₂ Program, CC BY 4.0; graf vlastní. Hodnoty použité v grafu jsou ke stažení jako{" "}
            <a className="text-link" href="/media/co2-origin/scripps-mauna-loa-mesicne.csv">
              tabulka CSV
            </a>
            .{" "}
            <SourceLink id="WEB_scrippsco2_ucsd_edu_Mauna_Loa_Observatory_Hawaii_Scripps_CO2_4d2260fe">
              Scripps CO₂: Mauna Loa
            </SourceLink>{" "}
            a{" "}
            <SourceLink id="WEB_Scripps_O2_Program_Mauna_Loa_Data">Scripps O₂: Mauna Loa</SourceLink>
          </figcaption>
        </figure>

        <h3>3. Rozlišující důkaz: kombinace znaků</h3>
        <p>
          Žádný ze znaků sám o sobě nestačí, rozhodující je jejich souběh. Pokles δ¹³C by mohla způsobit i ztráta
          uhlíku z vegetace a půdy, protože i ta je na ¹³C chudá. Ředění ¹⁴C by mohl způsobit i sopečný CO₂, který
          pochází z hlubokých zásob a ¹⁴C také neobsahuje. Pokles kyslíku by mohlo způsobit i rozkládání rostlinné
          hmoty. Jediné vysvětlení, které vede ke všem třem změnám současně, je spalování fosilních
          paliv doplněné odlesňováním.
        </p>

        <p>
          Oceán zároveň uhlík přijímá. Na sedmi dlouhodobých oceánských stanicích v Atlantiku a Pacifiku přibývá v
          povrchové vodě rozpuštěného uhlíku o 0,78 až 1,89 µmol/kg ročně, parciální tlak CO₂ ve vodě roste o 1,29 až
          2,95 µatm ročně a pH klesá o 0,0013 až 0,0025 ročně. Autoři tyto změny popisují jako shodné s očekávaným
          příjmem CO₂ z atmosféry.{" "}
          <SourceLink id="DOI_10_5670_oceanog_2014_16">Bates et al., 2014</SourceLink>
        </p>

        <h3>4. Kvantitativní důkaz: bilance sedí</h3>
        <p>
          Jak ukazuje oddíl o kvantitativním základu, emise z fosilních paliv a změn využití krajiny jsou přibližně
          dvakrát větší než přírůstek v atmosféře a samostatně odhadnuté propady rozdíl uzavírají s nesouladem
          −0,02 GtC za rok 2023. Vysvětlení tedy dává nejen správný směr, ale i správnou velikost.{" "}
          <SourceLink id="DOI_10_5194_essd_17_965_2025">Friedlingstein et al., 2025</SourceLink>
        </p>

        <h3>5. Nezávislá kontrola: kyslík a rozdělení propadů</h3>
        <p>
          Kyslík umožňuje propady rozdělit bez modelů oceánu či vegetace. Když oceán rozpouští CO₂, kyslík se tím
          nemění. Když rostliny CO₂ přijímají, kyslík uvolňují. Z poklesu kyslíku, přírůstku CO₂ a známých emisí lze
          proto dopočítat, kolik uhlíku převzal oceán a kolik pevnina. Manning a Keeling tak pro léta 1990–2000
          odhadli propad v oceánu 1,9 ± 0,6 GtC ročně a na pevnině 1,2 ± 0,8 GtC ročně. Tohjima a kol. pro léta
          2000–2016 z nezávislé japonské sítě získali 2,6 ± 0,7 a 1,5 ± 0,9 GtC ročně.{" "}
          <SourceLink id="DOI_10_1111_j_1600_0889_2006_00175_x">Manning &amp; Keeling, 2006</SourceLink> a{" "}
          <SourceLink id="DOI_10_5194_acp_19_9269_2019">Tohjima et al., 2019</SourceLink>
        </p>

        <p>
          Obě měření ukazují, že oceán i pevnina uhlík přijímají, nikoli uvolňují. Hodnoty nejsou přímo srovnatelné
          s bilancí pro rok 2023, protože pocházejí z jiných období a propady se v čase zvětšují. Směr a řád
          velikosti se ale shodují s výsledky získanými jinými metodami.
        </p>

        <h2>Alternativní vysvětlení</h2>

        <h3>Sopky</h3>
        <p>
          <strong>Co navrhuje:</strong> přírůstek CO₂ pochází ze sopečné činnosti. <strong>Co by mělo platit:</strong>{" "}
          sopečné emise by musely být srovnatelné s měřeným přírůstkem, tedy asi 5,9 GtC ročně.{" "}
          <strong>V čem odpovídá datům:</strong> sopky CO₂ skutečně uvolňují a jejich CO₂ neobsahuje ¹⁴C.{" "}
          <strong>Kde se rozchází:</strong> současný odhad pro všechny sopky na souši včetně středooceánských hřbetů
          je 280 až 360 milionů tun CO₂ ročně.{" "}
          <SourceLink id="DOI_10_1017_9781108677950_008">Werner et al., 2019</SourceLink>{" "}
          To je méně než jedno procento fosilních emisí, které v roce 2023 činily 37 miliard tun CO₂. Sopečný CO₂
          navíc nevzniká spalováním, takže by nevysvětlil pokles kyslíku.
        </p>

        <h3>Uvolňování CO₂ z teplejšího oceánu</h3>
        <p>
          <strong>Co navrhuje:</strong> oceán se ohřívá, teplejší voda rozpouští méně plynu, a proto CO₂ uvolňuje.{" "}
          <strong>Co by mělo platit:</strong> v povrchové vodě by uhlíku ubývalo, pH by rostlo a oceán by musel
          uvolňovat více uhlíku, než ho do atmosféry přidávají lidé.{" "}
          <strong>V čem odpovídá datům:</strong> rozpustnost CO₂ s teplotou skutečně klesá a ohřívání oceánu příjem
          uhlíku oslabuje.{" "}
          <strong>Kde se rozchází:</strong> měření ukazují opak. V povrchové vodě uhlíku přibývá a pH klesá.{" "}
          <SourceLink id="DOI_10_5670_oceanog_2014_16">Bates et al., 2014</SourceLink>{" "}
          Oceán je propadem o velikosti 2,9 ± 0,4 GtC ročně.{" "}
          <SourceLink id="DOI_10_5194_essd_17_965_2025">Friedlingstein et al., 2025</SourceLink>{" "}
          Uvolňování z oceánu by také nevysvětlilo pokles kyslíku.
        </p>

        <h3>Přirozená ztráta uhlíku z vegetace a půdy</h3>
        <p>
          <strong>Co navrhuje:</strong> přírůstek způsobují přirozené změny pevninské biosféry, například
          rozklad půdní organické hmoty.{" "}
          <strong>Co by mělo platit:</strong> pokles δ¹³C a pokles kyslíku v poměru přibližně 1,1 molekuly kyslíku
          na molekulu CO₂, bez výrazného úbytku ¹⁴C.{" "}
          <strong>V čem odpovídá datům:</strong> vysvětlilo by pokles δ¹³C a část poklesu kyslíku. Odlesňování
          skutečně uhlík uvolňuje a v bilanci je započteno jako lidský zdroj.{" "}
          <strong>Kde se rozchází:</strong> uhlík vegetace je mladý a obsahuje ¹⁴C, takže nevysvětlí ředění
          radiouhlíku v první polovině 20. století.{" "}
          <SourceLink id="DOI_10_1029_2019gb006170">Graven et al., 2020</SourceLink>{" "}
          Měření kyslíku navíc ukazují, že pevnina jako celek uhlík přijímá.{" "}
          <SourceLink id="DOI_10_1111_j_1600_0889_2006_00175_x">Manning &amp; Keeling, 2006</SourceLink>
        </p>

        <h3>Přirozené kolísání klimatu</h3>
        <p>
          <strong>Co navrhuje:</strong> podíl CO₂ se mění s teplotou a přirozenými oscilacemi, jako je El Niño, a
          dnešní růst je součástí takového kolísání.{" "}
          <strong>Co by mělo platit:</strong> přírůstek by se střídal s poklesy a nesledoval by emise.{" "}
          <strong>V čem odpovídá datům:</strong> meziroční výkyvy přírůstku skutečně existují a jejich největší
          příčinou je jižní oscilace El Niño, která mění příjem uhlíku pevninou.{" "}
          <SourceLink id="DOI_10_5194_essd_17_965_2025">Friedlingstein et al., 2025</SourceLink>{" "}
          <strong>Kde se rozchází:</strong> výkyvy mění tempo růstu, ale nemění jeho znaménko. Za posledních 800 000
          let se podíl CO₂ při přirozených změnách klimatu, včetně střídání dob ledových a meziledových, pohyboval
          mezi 172 a 300 ppm.{" "}
          <SourceLink id="DOI_10_1038_nature06949">Lüthi et al., 2008</SourceLink>{" "}
          Dnešní hodnota tento rozsah překračuje o více než 100 ppm. Přirozené kolísání také nevysvětluje izotopový
          otisk ani pokles kyslíku.
        </p>

        <h2>Rozhodující porovnání</h2>
        <p>
          Tabulka shrnuje, co jednotlivá vysvětlení předpovídají a co se skutečně naměřilo. Přirozené kolísání
          klimatu není v tabulce samostatně, protože nepředpovídá trvalou změnu žádné z uvedených veličin.
        </p>

        <figure className="method-data-output mechanism-comparison">
          <div className="method-data-output__table-wrap">
            <table>
              <caption>Předpovědi vysvětlení a měření</caption>
              <thead>
                <tr>
                  <th scope="col">Vlastnost</th>
                  <th scope="col">Fosilní paliva a odlesňování</th>
                  <th scope="col">Uvolňování z oceánu</th>
                  <th scope="col">Sopky</th>
                  <th scope="col">Přirozená ztráta z pevniny</th>
                  <th scope="col">Naměřeno</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.property}>
                    <th scope="row">{row.property}</th>
                    <td>{row.fossil}</td>
                    <td>{row.ocean}</td>
                    <td>{row.volcanoes}</td>
                    <td>{row.land}</td>
                    <td>{row.observed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption>
            Měřené hodnoty: uhlíková bilance roku 2023 podle Global Carbon Budget 2024; oceánské stanice podle Bates
            a kol. (2014); izotopy podle Graven a kol. (2020); kyslík podle programu Scripps O₂. Předpovědi alternativ
            vycházejí z chemie a izotopového složení daného zdroje, jak je popsáno v textu.
          </figcaption>
        </figure>

        <p>
          Každá alternativa odpovídá některému pozorování, ale žádná všem současně. Spalování fosilních paliv
          doplněné odlesňováním je jediné vysvětlení, jehož předpovědi odpovídají ve všech řádcích tabulky.
        </p>

        <h2>Modely a experimenty</h2>
        <p>
          Hlavní část argumentu modely nepotřebuje. Emise se počítají ze statistik, přírůstek v atmosféře se měří a
          izotopy, kyslík a chemie oceánu jsou přímá pozorování. Modely vstupují až do rozdělení propadů. Global
          Carbon Budget odhaduje oceánský propad z modelů oceánské biogeochemie a z produktů založených na měření CO₂
          v povrchové vodě. Propad na pevnině odhaduje z modelů vegetace, které obsahují fotosyntézu, dýchání
          rostlin a rozklad půdní organické hmoty.{" "}
          <SourceLink id="DOI_10_5194_essd_17_965_2025">Friedlingstein et al., 2025</SourceLink>
        </p>

        <p>
          Modely se tu nekontrolují samy sebou. Kontrolou je nesoulad bilance: protože přírůstek v atmosféře se
          měří nezávisle, součet modelových propadů a emisí s ním musí souhlasit. Druhou kontrolou je metoda
          kyslíku, která propady rozděluje bez modelů vegetace. Autoři bilance sami upozorňují, že se odhady
          oceánského propadu z různých metod rozcházejí a že velikost propadu na severních
          pevninách je nejistá.{" "}
          <SourceLink id="DOI_10_5194_essd_17_965_2025">Friedlingstein et al., 2025</SourceLink>
        </p>

        <h2>Rozsah platnosti a nejistoty</h2>
        <ol>
          <li>
            <strong>Je mechanismus fyzikálně skutečný?</strong> Ano. Spalování uhlíkatých paliv vytváří CO₂ a
            spotřebovává kyslík v měřitelném poměru.
          </li>
          <li>
            <strong>Působí v klimatickém systému?</strong> Ano. Jeho izotopový a kyslíkový otisk je v atmosféře
            přímo měřitelný.
          </li>
          <li>
            <strong>Jakým směrem systém ovlivňuje?</strong> Zvyšuje podíl CO₂ v atmosféře a obsah uhlíku v oceánu.
          </li>
          <li>
            <strong>Jak velkou část přírůstku vysvětluje?</strong> Celý přírůstek od průmyslové revoluce. Emise jsou
            větší než přírůstek a přirozené rezervoáry jsou jako celek propadem, nikoli zdrojem.
          </li>
        </ol>
        <p>
          Nejistota zůstává v tom, jak se přebytek dělí mezi oceán a pevninu, jaké jsou emise ze změn využití
          krajiny a jak se propady budou měnit s dalším oteplováním a s rostoucím obsahem uhlíku v oceánu. Na
          oceánských stanicích už je vidět, že schopnost povrchové vody další CO₂ chemicky vázat klesá.{" "}
          <SourceLink id="DOI_10_5670_oceanog_2014_16">Bates et al., 2014</SourceLink>{" "}
          Tyto otázky jsou důležité pro odhad budoucího vývoje, na původu dosavadního přírůstku však nic nemění.
        </p>

        <h2>Co by mohlo závěr změnit</h2>
        <p>Vysvětlení by oslabilo nebo vyvrátilo kterékoli z těchto zjištění:</p>
        <ul>
          <li>pokud by při pokračujících emisích přestal klesat podíl ¹³C nebo kyslíku v atmosféře,</li>
          <li>pokud by dlouhodobá měření ukázala, že v povrchovém oceánu uhlíku ubývá,</li>
          <li>pokud by se ukázalo, že emise ze statistik jsou nadhodnocené natolik, že by byly menší než přírůstek,</li>
          <li>
            pokud by byl objeven přirozený zdroj srovnatelný s lidskými emisemi, jehož otisk v kyslíku a izotopech
            by odpovídal měřením.
          </li>
        </ul>
        <p>
          Žádné z těchto zjištění dosud nebylo učiněno. Vysvětlení tedy vede k jasným předpovědím, které by bylo
          možné měřením vyvrátit, a dosud všechny obstály.
        </p>

        <h2>Stav poznání</h2>
        <p>
          Jde o <strong>dobře doložené vysvětlení pozorované změny</strong>. Samotný proces je přímo ověřený,
          velikost zdroje je známá ze statistik a jeho otisk v atmosféře i oceánu je změřen několika nezávislými
          metodami. Otevřené zůstávají otázky velikosti jednotlivých propadů, nikoli původu přírůstku.
        </p>

        <div className="method-conclusion">
          <p className="eyebrow">Shrnutí mechanismu</p>
          <p>
            Spalováním fosilních paliv, výrobou cementu a odlesňováním se do atmosféry dostává uhlík z dlouhodobých
            zásob. Asi polovina v ní zůstává a zbytek převezme oceán a pevnina. Mechanismus vysvětluje růst podílu CO₂
            z 278 ppm na více než 420 ppm i současný růst obsahu uhlíku v oceánu. Největší váhu mu dává souběh
            nezávislých znaků: emise jsou větší než přírůstek, v atmosféře klesá podíl ¹³C a ¹⁴C a ubývá kyslíku a oceán uhlík přijímá, místo aby jej uvolňoval.
          </p>
        </div>

        <h2>Prameny, data a licence</h2>
        <p>
          Všechny zdroje citované v článku jsou dostupné v plném znění bez předplatného. Karty zdrojů obsahují DOI a
          odkaz na otevřenou verzi.
        </p>

        <div className="article-source-groups">
          <section>
            <h3>Historické a primární práce</h3>
            <ul>
              <li>
                Högbom, 1894: první rozbor koloběhu uhlíku se započtením spalování uhlí.{" "}
                <SourceLink id="1894_Hogbom">Zdroj</SourceLink>
              </li>
              <li>
                Arrhenius, 1896: převzetí Högbomova rozboru.{" "}
                <SourceLink id="1896_Arrhenius">Zdroj</SourceLink>
              </li>
              <li>
                Callendar, 1938: spojení emisí ze spalování s měřeními CO₂.{" "}
                <SourceLink id="1938_Callendar">Zdroj</SourceLink>
              </li>
              <li>
                Revelle &amp; Suess, 1957: radiouhlík, izotopy a výměna CO₂ s oceánem.{" "}
                <SourceLink id="DOI_10_3402_tellusa_v9i1_9075">Zdroj</SourceLink>
              </li>
              <li>
                Keeling, 1960: první přesná měření a trvalý nárůst v Antarktidě.{" "}
                <SourceLink id="DOI_10_1111_j_2153_3490_1960_tb01300_x">Zdroj</SourceLink>
              </li>
            </ul>
          </section>

          <section>
            <h3>Pozorovací testy a kvantitativní studie</h3>
            <ul>
              <li>
                Friedlingstein a kol., 2025: Global Carbon Budget 2024.{" "}
                <SourceLink id="DOI_10_5194_essd_17_965_2025">Zdroj</SourceLink>
              </li>
              <li>
                Graven, Keeling a Rogelj, 2020: změny izotopů uhlíku v atmosférickém CO₂.{" "}
                <SourceLink id="DOI_10_1029_2019gb006170">Zdroj</SourceLink>
              </li>
              <li>
                Manning &amp; Keeling, 2006: propady odvozené z měření kyslíku.{" "}
                <SourceLink id="DOI_10_1111_j_1600_0889_2006_00175_x">Zdroj</SourceLink>
              </li>
              <li>
                Tohjima a kol., 2019: nezávislá síť měření kyslíku v západním Pacifiku.{" "}
                <SourceLink id="DOI_10_5194_acp_19_9269_2019">Zdroj</SourceLink>
              </li>
              <li>
                Bates a kol., 2014: chemie povrchového oceánu na sedmi stanicích.{" "}
                <SourceLink id="DOI_10_5670_oceanog_2014_16">Zdroj</SourceLink>
              </li>
              <li>
                Werner a kol., 2019: emise CO₂ ze sopek.{" "}
                <SourceLink id="DOI_10_1017_9781108677950_008">Zdroj</SourceLink>
              </li>
              <li>
                Rubino a kol., 2019: CO₂ a δ¹³C z ledu Law Dome.{" "}
                <SourceLink id="DOI_10_5194_essd_11_473_2019">Zdroj</SourceLink>
              </li>
              <li>
                Lüthi a kol., 2008: CO₂ za posledních 800 000 let.{" "}
                <SourceLink id="DOI_10_1038_nature06949">Zdroj</SourceLink>
              </li>
            </ul>
          </section>

          <section>
            <h3>Data ke stažení</h3>
            <ul>
              <li>
                Global Carbon Project: tabulky globální bilance, národních emisí a emisí ze změn využití krajiny.{" "}
                <SourceLink id="DOI_10_18160_gcp_2024">Data</SourceLink>
              </li>
              <li>
                Scripps O₂ Program: měsíční poměr kyslíku a dusíku z Mauna Loa.{" "}
                <SourceLink id="WEB_Scripps_O2_Program_Mauna_Loa_Data">Data</SourceLink>
              </li>
              <li>
                Scripps CO₂ Program: měsíční CO₂ a δ¹³C z Mauna Loa.{" "}
                <SourceLink id="WEB_scrippsco2_ucsd_edu_Mauna_Loa_Observatory_Hawaii_Scripps_CO2_4d2260fe">Data</SourceLink>
              </li>
              <li>
                Hodnoty vykreslené v grafu atmosférických změn jako{" "}
                <a className="text-link" href="/media/co2-origin/scripps-mauna-loa-mesicne.csv">
                  tabulka CSV
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h3>Grafy a práva k použití</h3>
            <ul>
              <li>
                Oba grafy jsou vytvořené pro tento článek skriptem <code>scripts/build-co2-origin-charts.mjs</code>{" "}
                z uvedených veřejných dat.
              </li>
              <li>
                Data programů Scripps CO₂ a Scripps O₂ jsou zveřejněna pod licencí Creative Commons Attribution 4.0
                s povinností uvést Scripps Institution of Oceanography, UC San Diego.{" "}
                <SourceLink id="WEB_Scripps_O2_Program_Mauna_Loa_Data">Podmínky u dat</SourceLink>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
