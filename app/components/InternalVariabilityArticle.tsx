import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import styles from "./InternalVariabilityArticle.module.css";

const media = "/media/enso-mechanismus";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "zpetna-vazba",
    name: "Vítr a teplota oceánu se navzájem ovlivňují",
    prediction: "Oteplení středního a východního Pacifiku doprovodí oslabení pasátů a změna sklonu termokliny. Propojený model může vytvářet výkyvy bez nového vnějšího impulzu pro každou událost.",
    test: "1. Necháme běžet propojený model oceánu a atmosféry. 2. Porovnáme sled změn větru, teploty a podpovrchové vody během let 1997–1998.",
    observation: "Model z roku 1987 vytvářel nepravidelné výkyvy s převahou návratů po 3–4 letech. Bóje zachytily společný vývoj větru, teploty a termokliny.",
    verdict: "Podpořené zesilování výkyvu",
    explanation: "Vzájemné působení vysvětluje růst události. K jejímu ukončení potřebujeme také pomalejší změny v oceánu.",
    state: "supported",
  },
  {
    id: "pamet-oceanu",
    name: "Zásoba teplé vody připravuje obrat",
    prediction: "Změna zásoby vody pod hladinou má předcházet změně povrchové teploty. Během teplé fáze se zásoba v rovníkovém pásu zmenšuje.",
    test: "1. Zahrneme do výpočtu pomalé přesuny teplé vody. 2. V letech 1980–1999 porovnáme její objem s povrchovou teplotou východního Pacifiku.",
    observation: "Jinův jednoduchý model vytvářel cykly dlouhé 3–5 let. V měřeních byla nejsilnější souvislost při předstihu objemu teplé vody o 7 měsíců.",
    verdict: "Podpořená paměť oceánu",
    explanation: "Předstih je vlastnost sledovaného souboru, nikoli pevná čekací doba platná pro každou událost.",
    state: "supported",
  },
  {
    id: "vetrne-impulzy",
    name: "Krátké větrné epizody mění průběh události",
    prediction: "Při stejném počátečním oceánu mohou jiné větrné impulzy zesílit nebo přibrzdit následné oteplení.",
    test: "1. Do tří sad modelových výpočtů vložíme různé impulzy z roku 2014. 2. Porovnáme předpovědi let 2014 a 2015 ze dvou dalších systémů.",
    observation: "Přidání červnového větru od východu snížilo průměrné modelové oteplení. Další systémy rovněž ukázaly význam větrných epizod i okolních teplot oceánu.",
    verdict: "Podpořený vliv na sílu a načasování",
    explanation: "Vítr pomáhá vysvětlit nepravidelnost. Zásoba vody ani jedna větrná epizoda samy neurčují konečný výsledek.",
    state: "supported",
  },
];

function Graphic({ name, alt, children }: { name: string; alt: string; children: React.ReactNode }) {
  return <figure className={"article-figure " + styles.explanatoryFigure}>
    <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Vysvětlující grafika, na úzké obrazovce posuvná do stran">
      <a href={media + "/" + name + ".png"} aria-label="Otevřít grafiku v plné velikosti"><Image className="article-figure__media" src={media + "/" + name + ".png"} width={1536} height={1024} alt={alt} unoptimized /></a>
    </div>
    <figcaption>{children} Vlastní ilustrace vytvořená pomocí AI, CC BY 4.0. Rozměry vrstev a šipky jsou schematické. Nejde o naměřený profil ani výstup modelu. <SourceLink id="MEDIA_ENSO_MECHANISM_2026">Podklady a zadání grafik</SourceLink>.</figcaption>
  </figure>;
}

export function InternalVariabilityArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Jak si vysvětlujeme střídání teplých a chladných epizod v Pacifiku</h2>
    <p className="article-prose__intro">El Niño je teplá fáze společného kolísání tropického Pacifiku a atmosféry, jehož chladnou fázi nazýváme La Niña. V oblasti Niño3.4 u rovníku dosáhla teplotní odchylka za listopad 1997 až leden 1998 hodnoty +2,4 °C. O rok později činila −1,5 °C. Jde o tříměsíční průměry vůči obvyklé teplotě dané části roku v indexu ONI, verzi ERSSTv6. Změny povrchu i vody pod ním rozebírá <Link href="/pozorovani/tepelny-obsah-oceanu/#enso-pacifik">pozorování rovníkového Pacifiku</Link>. <SourceLink id="WEB_NOAA_ONI_ERSSTV6">(NOAA, ONI)</SourceLink></p>
    <p>Proč se tak velká oblast nejprve oteplí a poté ochladí? Potřebujeme vysvětlit růst výkyvu, jeho obrat i nepravidelné opakování. Následující tři příběhy sledují procesy, které se doplňují: vzájemné působení větru a vody, pomalou změnu zásoby teplé vody a krátké větrné epizody. Společně tvoří vysvětlení jevu označovaného ENSO, tedy El Niño a jižní oscilace. Jižní oscilace je jeho atmosférická část, pozorovaná jako kolísání tlaku a proudění. <SourceLink id="DOI_10_1029_2024RG000843">(Vialard a kol. 2025, oddíl 2)</SourceLink></p>

    <h2 id="hypotezy">Tři části vysvětlení a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="enso-diagram-caption"
      context={<p>Termoklina je vrstva, v níž teplota vody s hloubkou rychle klesá. Její hloubka určuje, jak blízko povrchu leží chladnější voda. „Zásoba teplé vody“ níže označuje objem vody nad hranicí 20 °C v rovníkovém Pacifiku. Povrchová teplota a tato podpovrchová zásoba se mohou měnit v jinou dobu.</p>}
      caption={<>Větve ověřují zesilování, obrat a nepravidelnost téhož jevu. Hodnocení se vztahuje k této úloze každého procesu. Podrobné podmínky modelů a měření rozebírají jednotlivé příběhy.</>} />

    <h2 id="pribehy">Jak se vysvětlení postupně skládalo</h2>
    <HypothesisStory id="zpetna-vazba" number={1} title="Vítr a teplota oceánu se navzájem ovlivňují">
      <p>Nad rovníkovým Pacifikem obvykle vanou pasáty od východu na západ. Působí na hladinu a ženou povrchovou vodu směrem k Indonésii. Tam vzniká silnější vrstva teplé vody, zatímco u Jižní Ameriky leží chladnější voda blíže povrchu. Vítr zároveň podporuje rozestup povrchových proudů od rovníku. Uvolněný prostor doplňuje voda vystupující zespodu, a východní část oceánu tak ochlazuje. <SourceLink id="DOI_10_1029_2024RG000843">(Vialard a kol. 2025, oddíl 2.1)</SourceLink></p>
      <p>Rozdíl teplot se promítá do atmosféry. Nad teplým západem častěji vystupuje vlhký vzduch a vznikají mohutné dešťové oblaky. Při kondenzaci páry se uvolňuje teplo, které pomáhá pohánět tento výstup. Vzduch se ve výšce přesouvá, nad chladnějším východem sestupuje a při povrchu proudí zpět na západ. Teplotní rozložení oceánu tím pomáhá udržovat pasáty, které zase udržují teplotní rozložení vody. <SourceLink id="DOI_10_1175_BJERKNES_1969">(Bjerknes 1969, oddíl 3)</SourceLink></p>
      <p>Jacob Bjerknes v roce 1969 spojil tuto vzájemnou vazbu s pozorovanými teplými epizodami. Porovnával mimo jiné roky 1957–1958, 1963–1964 a 1965–1966. Při oslabení pasátů se teplá voda rozšiřuje na východ a klesá tam ochlazující účinek vody přicházející zespodu. Výstup vzduchu a déšť se posouvají nad nově oteplenou oblast. Změna atmosférického proudění může pasáty dále oslabit. Počáteční výkyv tak sám vytváří podmínky pro další zesílení. Tomuto kruhu příčin říkáme Bjerknesova zpětná vazba. <SourceLink id="DOI_10_1175_BJERKNES_1969">(Bjerknes 1969, oddíly 2 až 4)</SourceLink></p>
      <Graphic name="zpetna-vazba" alt="Řez rovníkovým Pacifikem porovnává běžné pasáty a nakloněnou termoklinu s oslabenými pasáty, teplejším východem a plošší termoklinou při El Niño. Smyčka spojuje oteplení oceánu se změnou deště a dalším oslabením pasátů.">Vlevo je západ Pacifiku, vpravo východ. Tmavé šipky nad hladinou ukazují vítr, světlé ve vodě výstup vody. Oranžová označuje teplejší vrstvu a modrá chladnější vodu pod ní. Termoklinu zastupuje čára. <SourceLink id="DOI_10_1175_BJERKNES_1969">(Bjerknes 1969)</SourceLink>{" "}<SourceLink id="DOI_10_1029_2024RG000843">(Vialard a kol. 2025, obrázek 1)</SourceLink></Graphic>
      <h4 id="test-propojeny-model" className={styles.testHeading}>První test: vytvoří propojený systém výkyvy sám?</h4>
      <p>Stephen Zebiak a Mark Cane v roce 1987 nechali vzájemně reagovat model tropického oceánu a model atmosféry. Atmosféra odpovídala na povrchovou teplotu a její vítr měnil oceánské proudy, hloubku termokliny a teplotu. Předepsané průměrné podmínky obsahovaly opakující se roční chod. Pro každé další El Niño však autoři nevkládali nový vnější impulz ani předem určený průběh oceánské teploty. <SourceLink id="DOI_10_1175_ZEBIAK_CANE_1987">(Zebiak a Cane 1987, oddíly 2 a 3)</SourceLink></p>
      <p>Devadesátiletý výpočet vytvářel nepravidelné teplé a chladné epizody s převahou návratů teplých událostí po třech až čtyřech letech. Autoři je porovnali s pozorovanými teplotními a větrnými průběhy. Model zachytil střídání fází i související změny větru, ale například počátek oteplení u amerického pobřeží nevystihoval stejně dobře. Výsledek ukázal, že propojené vnitřní děje mohou kolísání vytvářet. Samostatný výpočet ještě nemohl rozhodnout, zda správně zachycuje všechny kroky skutečné události. <SourceLink id="DOI_10_1175_ZEBIAK_CANE_1987">(Zebiak a Cane 1987, obrázky 1 až 3 a oddíl 3a)</SourceLink></p>
      <h4 id="test-boje-1997" className={styles.testHeading}>Druhý test: probíhá předpovězený děj také v oceánu?</h4>
      <p>Událost 1997–1998 už zachytila soustava ukotvených bójí TAO, doplněná družicemi. Michael McPhaden porovnal pětidenní průměry větru, povrchové teploty a hloubky vody o teplotě 20 °C. Měření ukázala oslabení a místy obrácení pasátů, posun teplé vody na východ i prohloubení termokliny v této části oceánu. Změna podpovrchových vrstev se šířila východním směrem. S oteplováním se měnila také oblast mohutných dešťových oblaků. <SourceLink id="DOI_10_1126_science_283_5404_950">(McPhaden 1999, obrázky 1 a 2)</SourceLink></p>
      <p>V prosinci 1997 dosahovala odchylka ve východnější oblasti Niño3 téměř +4 °C. Tento údaj má jinou oblast a časové průměrování než úvodní ONI. Podstatný byl společný sled změn: vítr, voda pod hladinou a povrch se vyvíjely způsobem očekávaným od propojeného systému. Teplotu měřily <Link href="/metody/odporova-termometrie-a-termistory/">elektrické teploměry</Link>, zatímco samostatná větrná a družicová pozorování doplňovala další články děje. Podrobnosti měření najdete v <Link href="/pozorovani/tepelny-obsah-oceanu/#mereni-profilu">pozorování teplotních profilů</Link>. <SourceLink id="DOI_10_1126_science_283_5404_950">(McPhaden 1999, obrázky 1 až 4)</SourceLink></p>
      <p><strong>Závěr:</strong> zesilující vazbu podpírá fyzikální model i pozorovaný společný vývoj vody a atmosféry. Zůstává další otázka: co teplou epizodu zastaví, když se její počáteční změny navzájem podporují?</p>
    </HypothesisStory>

    <HypothesisStory id="pamet-oceanu" number={2} title="Zásoba teplé vody připravuje obrat">
      <p>Oceán se nepřizpůsobí změně větru všude zároveň. Povrchová teplota může už růst, zatímco hlubší proudění teprve přestavuje zásobu teplé vody. Změna větrného pole během El Niño ovlivňuje také proudy na sever a na jih od rovníku. Z rovníkového pásu může postupně odtékat více teplé vody, než do něj přitéká. Tím se připravuje pozdější ochlazení, přestože je povrch ještě teplý. <SourceLink id="DOI_10_1175_JIN_1997_RECHARGE">(Jin 1997, oddíl 2a)</SourceLink></p>
      <p>Tuto představu postupně rozvíjeli Klaus Wyrtki, Mark Cane a Stephen Zebiak. Fei-Fei Jin ji v roce 1997 uspořádal do jednoduchého modelu, který spojil povrchovou teplotu s pomalu se měnící hloubkou teplé vrstvy. Při jejím úbytku se chladnější voda přiblíží k hladině. Výstup vody pak dokáže povrch ochlazovat účinněji. V chladné fázi se může zásoba opět obnovovat a připravovat opačný přechod. <SourceLink id="DOI_10_1175_JIN_1997_RECHARGE">(Jin 1997, úvod a obrázek 1)</SourceLink></p>
      <Graphic name="pamet-oceanu" alt="Čtyři fáze ukazují nejprve větší podpovrchovou zásobu teplé vody, její odtok z rovníkového pásu při El Niño, přiblížení chladnější vody k povrchu a obnovování zásoby během La Niña. Změna zásoby předchází změně povrchové teploty.">Pořadí čteme po šipkách 1 až 4. Šipky mezi kartami znamenají časovou návaznost. Šipky u severní a jižní strany pásu vyjadřují vodorovný přenos vody. Oranžová vrstva je nad 20 °C i při La Niña, kdy je její povrch chladnější než obvykle v daném místě. Schéma záměrně rozlišuje teplotu povrchu a množství teplé vody pod ním. <SourceLink id="DOI_10_1175_JIN_1997_RECHARGE">(Jin 1997, obrázek 1)</SourceLink></Graphic>
      <h4 id="test-pomaly-obrat" className={styles.testHeading}>První test: vytvoří pomalá odezva střídání fází?</h4>
      <p>Jinův výpočet sledoval dvě spojené změny: vývoj povrchové teploty a přestavbu teplé vrstvy. Zesilující vazba rozvíjela teplou či chladnou fázi, zatímco pomalejší odezva oceánu připravovala její obrat. Při změnách síly propojení model vytvářel cykly dlouhé přibližně tři až pět let. Výpočet tím vysvětloval, jak může z rychlejší odezvy atmosféry a pomalejšího přeskupování vody vzniknout víceleté kolísání. Délku a návaznost fází bylo následně nutné prověřit pozorováním. <SourceLink id="DOI_10_1175_JIN_1997_RECHARGE">(Jin 1997, oddíly 2b a 3)</SourceLink></p>
      <h4 id="test-predstih" className={styles.testHeading}>Druhý test: předchází změna zásoby změně povrchu?</h4>
      <p>Christopher Meinen a Michael McPhaden v roce 2000 porovnali teplotní profily z let 1980–1999 s teplotou povrchu a větrem. Pro pás 5° jižní až 5° severní šířky, od 120° východní do 80° západní délky vypočítali objem vody teplejší než 20 °C. Před porovnáním odečetli obvyklý roční chod a řady vyhladili průměrováním vždy pěti sousedních měsíců. Změna tohoto objemu předcházela změně povrchové teploty oblasti Niño3. Nejsilnější korelace, 0,70, vyšla při předstihu sedmi měsíců. Korelace měří souběh dvou průběhů, zde po jejich časovém posunutí. <SourceLink id="DOI_10_1175_MEINEN_MCPHADEN_2000">(Meinen a McPhaden 2000, obrázky 4 a 5)</SourceLink></p>
      <p>Během události 1997–1998 ubyla v tomto pásu téměř čtvrtina celkového objemu teplé vody. Povrchové oteplení tedy provázel úbytek podpovrchové zásoby, jak předpovídal mechanismus obratu. Podstatný je sled změn v širším období, nikoli jen tento jeden extrém. Studie přitom využívá i bóje TAO z předchozího příběhu. Jde o širší časovou a prostorovou zkoušku se zčásti společnými měřeními. <SourceLink id="DOI_10_1175_MEINEN_MCPHADEN_2000">(Meinen a McPhaden 2000, oddíly 3 a 4)</SourceLink></p>
      <p><strong>Závěr:</strong> oceán uchovává informaci o předchozím vývoji v rozložení teplé vody. Pozorovaný předstih a její úbytek během teplých událostí podporují tuto paměť oceánu. Sedm měsíců je výsledek konkrétního porovnání, nikoli pravidlo pro každou budoucí epizodu.</p>
    </HypothesisStory>

    <HypothesisStory id="vetrne-impulzy" number={3} title="Krátké větrné epizody mění průběh události">
      <p>Na pomalý vývoj oceánu působí proměnlivé počasí. Několikadenní až několikatýdenní vítr od západu může podpořit přesun teplé vody na východ a vyvolat šířící se prohloubení termokliny. Vítr od východu může tento vývoj brzdit. Větrné epizody navíc reagují na polohu teplé vody a dešťových oblaků. Jsou součástí propojeného systému, ne vnější příčinou, která by byla na oceánu zcela nezávislá. <SourceLink id="DOI_10_1029_2024RG000843">(Vialard a kol. 2025, oddíl 3.2)</SourceLink></p>
      <p>Výmluvný případ přišel v roce 2014. Po dvou výrazných západních epizodách na začátku roku se teplá voda posouvala na východ. V červnu však nastala silná epizoda větru od východu a další oteplování zesláblo. Shineng Hu a Alexey Fedorov v roce 2016 porovnali družicové teploty, hladinu a vítr. Samotné následování dvou změn ale ještě neříkalo, kolik ochlazení způsobil právě vítr. Proto provedli také řízený zásah do modelu. <SourceLink id="DOI_10_1073_pnas_1514182113">(Hu a Fedorov 2016, obrázky 1 až 3)</SourceLink></p>
      <Graphic name="vetrne-impulzy" alt="Dvě varianty se stejným počátečním oceánem. Západní větrné impulzy podporují oteplení východu Pacifiku. Přidání červnového větru od východu oteplení brzdí. V každé variantě se opakuje deset výpočtů s mírně odlišnou atmosférou.">Západní vítr vane od západu na východ, východní opačně. Obrázek zobrazuje dvě varianty s vloženými impulzy. Studie obsahovala také kontrolní sadu bez těchto přidaných impulzů. Čáry zastupují termoklinu, jejíž skutečná přechodová vrstva má nenulovou tloušťku. <SourceLink id="DOI_10_1073_pnas_1514182113">(Hu a Fedorov 2016, modelový experiment)</SourceLink></Graphic>
      <h4 id="test-zmena-vetru" className={styles.testHeading}>První test: změní vložený vítr výslednou teplotu?</h4>
      <p>Autoři vybrali modelový oceán podobný počátku roku 2014. Jednu sadu výpočtů ponechali jako kontrolu, do druhé vložili dvě pozorované západní epizody a do třetí navíc červnovou východní epizodu. Každá sada měla deset běhů se stejným počátečním oceánem a mírně odlišnou atmosférou. Průměrný vrchol oteplení v oblasti Niño3 vzrostl po přidání západních impulzů přibližně z 1,4 na 2,1 °C. Další přidání východního impulzu jej snížilo přibližně na 1,1 °C. <SourceLink id="DOI_10_1073_pnas_1514182113">(Hu a Fedorov 2016, obrázek 4 a metodický oddíl)</SourceLink></p>
      <p>Rozdíl mezi sadami dokládá příčinný účinek větru v tomto modelu. Jednotlivé běhy se překrývaly, takže hodnoty nejsou přesnou předpovědí pro každou událost. Modelová zkouška spolu s pozorováním podporuje význam větrné epizody pro rok 2014, nikoli tvrzení, že výsledek určoval pouze tento jediný vliv.</p>
      <h4 id="test-dalsi-predpovedi" className={styles.testHeading}>Druhý test: ukazují další systémy stejnou roli větru?</h4>
      <p>Sarah Ineson a kolegové v roce 2018 prozkoumali květnové předpovědi let 2014 a 2015 ze systémů britského Met Office a evropského ECMWF. První měl 42 členů, druhý 51. Porovnávali, jak se v jednotlivých bězích lišily větrné epizody a následná říjnová teplota. V roce 2015 oba systémy vytvářely větší aktivitu západních impulzů než v roce 2014. Systém ECMWF měl zároveň výraznější impulzy i silnější předpovídané oteplení. <SourceLink id="DOI_10_1038_s41598_018_29130_1">(Ineson a kol. 2018, obrázky 1 a 6)</SourceLink></p>
      <p>Porovnání podpořilo význam větru, ale ukázalo také roli chladnější vody jihovýchodně od rovníku. Některé běhy vytvořily El Niño i bez časných západních impulzů. Dvě odlišné modelové soustavy tak rozšířily kontrolu, aniž by zopakovaly přesně stejný zásah jako Hu a Fedorov. Vycházely přitom z pozorování stejných let, takže nejde o dvě zcela nezávislé události. <SourceLink id="DOI_10_1038_s41598_018_29130_1">(Ineson a kol. 2018, oddíly Hypothesis 1, Hypothesis 3 a Discussion)</SourceLink></p>
      <p><strong>Závěr:</strong> počasí dokáže změnit sílu a načasování události připravené pomalejším oceánem. Proto stejná počáteční zásoba teplé vody nezaručuje stejný konečný výsledek.</p>
    </HypothesisStory>

    <h2 id="spolecne-vysvetleni">Jak vzniká společné kolísání oceánu a atmosféry</h2>
    <p>První příběh doložil zesilující vazbu větru a teploty, druhý pomalejší přestavbu oceánu, která připravuje obrat, a třetí vliv krátkých větrných epizod na další průběh. Důkazy podporují jejich společné působení. Dnešní souhrnné vysvětlení proto spojuje vzájemné zesilování, paměť oceánu a proměnlivé počasí. Projděme nyní, jak na sebe tyto děje navazují během teplé a chladné fáze. <SourceLink id="DOI_10_1029_2024RG000843">(Vialard a kol. 2025)</SourceLink></p>
    <p>Před teplou epizodou může mít rovníkový Pacifik větší zásobu teplé vody, než naznačuje samotná teplota hladiny. Oslabení pasátů nebo vhodně načasovaný západní impulz umožní oteplení střední a východní části. Změní se poloha deště a výstupu vzduchu. Atmosféra pak může původní změnu větru posílit a tím podpořit další oteplování. To je rostoucí fáze El Niño. <SourceLink id="DOI_10_1175_BJERKNES_1969">(Bjerknes 1969)</SourceLink>{" "}<SourceLink id="DOI_10_1073_pnas_1514182113">(Hu a Fedorov 2016)</SourceLink></p>
    <p>Současně se mění celá zásoba vody v rovníkovém pásu. Její úbytek postupně přibližuje chladnější vrstvy k povrchu. Při obnovení pasátů se jejich ochlazující účinek projeví výrazněji. Chladnější východ potom pomáhá posilovat pasáty a může se rozvinout La Niña. V této fázi se podpovrchová zásoba může znovu doplňovat. Obrat tedy vzniká tím, že pomalejší změna oceánu nakonec převáží nad dějem, který původní výkyv zesiloval. <SourceLink id="DOI_10_1175_JIN_1997_RECHARGE">(Jin 1997)</SourceLink>{" "}<SourceLink id="DOI_10_1175_MEINEN_MCPHADEN_2000">(Meinen a McPhaden 2000)</SourceLink></p>
    <p>Tato posloupnost vysvětluje víceleté kolísání bez nutnosti nové změny slunečního záření nebo složení atmosféry pro každou epizodu. Oceán a atmosféra si vyměňují teplo a mění jeho rozložení. Dopad přesahuje Pacifik, protože změna tropického ohřevu přestavuje i vzdálené atmosférické proudění. Vztah k výkyvům <Link href="/pozorovani/gmst/#zpomaleni-2002-2012">globální povrchové teploty</Link> a jejich odlišení od dlouhodobého přírůstku energie podrobněji rozebírá <Link href="/mechanismy/energeticka-bilance-zeme/#prirozena-hypoteza">mechanismus energetické bilance</Link>. <SourceLink id="DOI_10_1175_ZEBIAK_CANE_1987">(Zebiak a Cane 1987)</SourceLink>{" "}<SourceLink id="DOI_10_1175_BJERKNES_1969">(Bjerknes 1969)</SourceLink></p>
    <p>Jednotlivé události se liší místem nejsilnějšího oteplení, velikostí i trváním. Přesný podíl pomalého cyklu a proměnlivého počasí zůstává předmětem výzkumu. Vysvětlení by vyžadovalo podstatnou změnu, kdyby dlouhé, dobře pokryté záznamy soustavně postrádaly předpovězené vazby mezi větrem, podpovrchovou zásobou a povrchovou teplotou nebo kdyby modelové zásahy do větru vedly k opačné odezvě, než zachycují měření. <SourceLink id="DOI_10_1029_2024RG000843">(Vialard a kol. 2025, oddíly 5 až 7)</SourceLink></p>
    <details className="method-details"><summary>Co zůstává otevřené a jak číst výsledky testů</summary>
      <p>Vnitřní proměnlivost neznamená, že je systém izolovaný od Slunce nebo od dlouhodobé změny klimatu. Znamená, že sledovaný výkyv může vznikat vzájemným působením jeho částí i při opakujících se vnějších podmínkách. Dlouhodobá změna průměrného stavu oceánu může ovlivnit i vlastnosti ENSO. <SourceLink id="DOI_10_1029_2024RG000843">(Vialard a kol. 2025, oddíl 5.3)</SourceLink></p>
      <p>Objem vody nad 20 °C je užitečný ukazatel podpovrchové zásoby, nikoli přímý součet energie v joulech. Závisí na poloze teplotní hranice a vymezené oblasti. Zmenšení objemu v rovníkovém pásu neznamená, že stejné množství tepla zmizelo z celé Země. Veřejný dnešní soubor GODAS navíc používá jiné zpracování než původní BMRC ve studii z roku 2000. <SourceLink id="WEB_NOAA_PACIFIC_WWV">(NOAA, dokumentace WWV)</SourceLink></p>
      <p>Otevřená je také otázka, zda by skutečné ENSO bez nepravidelných povětrnostních podnětů postupně utichlo, nebo dokázalo kolísat samo. Elle Weeks a Eli Tziperman v roce 2025 prověřili postup, kterým se tato vlastnost odhaduje z dat. Na umělých řadách se známým mechanismem ukázali, že přizpůsobení jednoduchého modelu může mylně naznačit útlum i u systému, který se udržuje sám. Výsledek nevyvrací vliv větrných impulzů. Omezuje sílu jednoho způsobu rozhodování mezi dvěma režimy. <SourceLink id="DOI_10_1029_2025GL116328">(Weeks a Tziperman 2025, oddíly 2 a 3)</SourceLink></p>
    </details>

    <h2 id="shrnuti">Shrnutí</h2>
    <div className="method-conclusion">
      <p>El Niño a La Niña vznikají společným vývojem tropického oceánu a atmosféry. Vítr mění proudy a přístup chladnější vody k povrchu. Změněná teplota oceánu následně ovlivní déšť a vítr, takže se výkyv může zesílit. Pomalejší přesuny teplé vody připravují jeho ukončení a případný přechod do opačné fáze.</p>
      <p>Toto vysvětlení podpírá společné měření větru a oceánu, předstih změn podpovrchové zásoby i řízené zásahy do modelů. Krátké větrné epizody a stav okolního oceánu mění výslednou sílu a načasování. ENSO proto není pravidelný kalendář a každé El Niño nemusí bezprostředně vystřídat La Niña.</p>
    </div>
    <h2 id="prameny">Prameny, data a licence</h2>
    <ul>
      <li><SourceLink id="DOI_10_1175_BJERKNES_1969">Bjerknes 1969</SourceLink>: historická formulace vzájemného působení rovníkového Pacifiku a atmosféry.</li>
      <li><SourceLink id="DOI_10_1175_ZEBIAK_CANE_1987">Zebiak a Cane 1987</SourceLink>: propojený model a porovnání jeho teplotních a větrných výkyvů s pozorováním.</li>
      <li><SourceLink id="DOI_10_1175_JIN_1997_RECHARGE">Jin 1997</SourceLink>: teorie pomalého doplňování a úbytku zásoby teplé vody.</li>
      <li><SourceLink id="DOI_10_1126_science_283_5404_950">McPhaden 1999</SourceLink>: měřený vývoj události 1997–1998.</li>
      <li><SourceLink id="DOI_10_1175_MEINEN_MCPHADEN_2000">Meinen a McPhaden 2000</SourceLink>: pozorovací test objemu teplé vody v období 1980–1999.</li>
      <li><SourceLink id="DOI_10_1073_pnas_1514182113">Hu a Fedorov 2016</SourceLink>: pozorování roku 2014 a řízené změny větrných impulzů v modelu CESM.</li>
      <li><SourceLink id="DOI_10_1038_s41598_018_29130_1">Ineson a kol. 2018</SourceLink>: předpovědní soubory Met Office a ECMWF pro roky 2014 a 2015.</li>
      <li><SourceLink id="DOI_10_1029_2024RG000843">Vialard a kol. 2025</SourceLink>: současná syntéza mechanismu, modelů a otevřených otázek.</li>
      <li><SourceLink id="DOI_10_1029_2025GL116328">Weeks a Tziperman 2025</SourceLink>: test spolehlivosti odhadu útlumu či samostatného udržování ENSO.</li>
      <li><SourceLink id="WEB_NOAA_ONI_ERSSTV6">NOAA, ONI z ERSSTv6</SourceLink>: veřejné tříměsíční teplotní odchylky oblasti Niño3.4.</li>
      <li><SourceLink id="WEB_NOAA_PACIFIC_WWV">NOAA, objem teplé vody</SourceLink>: data GODAS a odkaz na historický archiv BMRC.</li>
      <li><SourceLink id="MEDIA_ENSO_MECHANISM_2026">Obrazové a číselné podklady</SourceLink>: licence, úplná zadání tří AI ilustrací a data grafu v navázaném pozorování.</li>
    </ul>
  </div></article>;
}
