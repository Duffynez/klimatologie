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
    name: "Vítr a teplota hladiny zesilují počáteční výkyv",
    prediction: "Když pasáty zeslábnou, východní část rovníkového Pacifiku se může oteplit. Deště se pak posunou na východ a změna proudění vzduchu pasáty dále oslabí.",
    test: "V propojeném modelu reagoval vítr na teplotu vody a oceán na vítr. Při události z let 1997–1998 bylo možné sledovat stejný sled změn pomocí bójí a družic.",
    observation: "V modelu se teplé události vracely nejčastěji po třech až čtyřech letech. V roce 1997 přístroje zachytily slabší pasáty, teplejší hladinu i hlubší teplou vrstvu na východě.",
    verdict: "Vítr a oceán mohou výkyv společně zesílit",
    explanation: "Při oteplování východního Pacifiku se zmenšuje rozdíl teplot mezi západem a východem, který pomáhá udržovat pasáty. Při ochlazování se naopak zvětšuje.",
    state: "supported",
  },
  {
    id: "pamet-oceanu",
    name: "Přesun teplé vody od rovníku připravuje obrat",
    prediction: "Během El Niño může v celém rovníkovém pásu ubývat teplé vody, i když povrch na východě ještě zůstává teplý. Chladnější voda se pak snáze dostane k hladině.",
    test: "Do modelu vědci zahrnuli pomalé změny zásoby teplé vody. Potom z měření za dvacet let určili, jak se její objem měnil před oteplením a ochlazením hladiny.",
    observation: "V jednoduchém modelu trval cyklus přibližně tři až pět let. V záznamu za roky 1980–1999 souvisela změna objemu teplé vody nejsilněji s tím, jaká byla teplota hladiny o sedm měsíců později.",
    verdict: "Zásoba teplé vody pomáhá vysvětlit obrat",
    explanation: "Teplota hladiny může ještě odpovídat dosavadní fázi, zatímco pod ní už se připravuje opačná změna. Časový odstup se mezi událostmi liší.",
    state: "supported",
  },
  {
    id: "vetrne-impulzy",
    name: "Krátké změny větru ovlivňují sílu události",
    prediction: "I když je na začátku rozložení teplé vody stejné, několik týdnů větru od západu může oteplení východního Pacifiku podpořit a vítr od východu ho může přibrzdit.",
    test: "V jednom modelu vědci přidávali větrné epizody podle měření z roku 2014. Ve dvou předpovědních systémech pak srovnali, jak souvisel vítr s vývojem teploty v letech 2014 a 2015.",
    observation: "Přidání červnového větru od východu snížilo v modelu zimní oteplení. V předpovědích pro rok 2015 byly západní větry výraznější a oceán se oteplil více než v předpovědích pro rok 2014.",
    verdict: "Počasí mění průběh jednotlivých událostí",
    explanation: "Větrná epizoda může změnit výsledek během několika týdnů. Záleží při tom i na teplotě vody mimo rovníkový pás.",
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
    <h2 id="co-vysvetlujeme">Z teplé fáze do chladné během jediného roku</h2>
    <p className="article-prose__intro">
      Od listopadu 1997 do ledna 1998 byl povrch oceánu ve střední části rovníkového Pacifiku v průměru
      o 2,4 °C teplejší, než je v těchto měsících obvyklé. O rok později byla tatáž oblast o 1,5 °C chladnější
      než obvykle. Obě čísla pocházejí z indexu ONI, který porovnává teplotu hladiny v oblasti zvané Niño3.4
      s dlouhodobým průměrem pro stejné tři měsíce. Průběh podle teplotní řady ERSSTv6 ukazuje{" "}
      <Link href="/pozorovani/tepelny-obsah-oceanu/#enso-pacifik">graf měření v rovníkovém Pacifiku</Link>.{" "}
      <SourceLink id="WEB_NOAA_ONI_ERSSTV6">(NOAA, ONI)</SourceLink>
    </p>
    <p>
      Teplou fázi nazýváme El Niño, chladnou La Niña. Spolu s teplotou vody kolísá nad oceánem i rozdíl tlaku
      vzduchu mezi západem a východem a s ním se mění vítr. Této atmosférické části jevu se říká jižní oscilace.
      Pro obě části dohromady se používá zkratka ENSO. Jak může vítr zprvu zesílit změnu teploty a proč se pak
      oceán někdy během několika měsíců obrátí od oteplování k ochlazování?{" "}
      <SourceLink id="DOI_10_1029_2024RG000843">(Vialard a kol. 2025, oddíl 2)</SourceLink>
    </p>

    <h2 id="hypotezy">Tři části vysvětlení a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="enso-diagram-caption"
      context={<p>Pasáty jsou větry, které nad rovníkovým Pacifikem obvykle vanou od východu na západ. Pod prohřátou vrstvou oceánu leží termoklina. V této vrstvě teplota s hloubkou rychle klesá. Podle hloubky, v níž voda dosahuje 20 °C, lze v tropech sledovat polohu termokliny i odhadnout objem teplejší vody nad ní.</p>}
      caption={<>Pro zesílení výkyvu je důležité, jak je teplá voda rozložená mezi západem a východem. Pro obrat záleží také na tom, kolik jí v rovníkovém pásu zbývá. Krátké změny větru mohou tento vývoj urychlit nebo přibrzdit.</>} />

    <h2 id="pribehy">Co ukázaly modelové pokusy a měření v Pacifiku</h2>
    <HypothesisStory id="zpetna-vazba" number={1} title="Vítr a teplota hladiny zesilují počáteční výkyv">
      <p>
        Pasáty obvykle ženou povrchovou vodu od východu na západ k Indonésii. Teplá vrstva tam proto sahá hlouběji
        než u pobřeží Jižní Ameriky. Pod ní leží termoklina, vrstva, v níž teplota vody s hloubkou rychle klesá.
        Otáčení Země odklání vodu hnanou větrem na severní straně rovníku doprava a na jižní doleva. Povrchové proudy
        se tak od rovníku rozcházejí a vodu, která odtéká, nahrazuje voda z hloubky. Tento výstup ochlazuje hladinu
        zvlášť účinně na východě, kde chladná voda leží blízko povrchu.{" "}
        <SourceLink id="DOI_10_1029_2024RG000843">(Vialard a kol. 2025, oddíl 2.1)</SourceLink>
      </p>
      <p>
        Rozdíl mezi teplým západem a chladnějším východem se promítá i do proudění vzduchu. Nad teplou vodou na západě
        stoupá vlhký vzduch a vznikají mohutné dešťové oblaky. Při přeměně vodní páry na kapičky se uvolňuje teplo,
        které výstup vzduchu podporuje. Ve výšce proudí vzduch na východ, nad chladnější hladinou sestupuje
        a při hladině se vrací na západ. Rozdíl v teplotě oceánu tak pomáhá udržovat pasáty. Ty zase ženou teplou
        vodu na západ a udržují východ chladnější.{" "}
        <SourceLink id="DOI_10_1175_BJERKNES_1969">(Bjerknes 1969, oddíl 3)</SourceLink>
      </p>
      <p>
        Jacob Bjerknes v roce 1969 porovnával teplé epizody z let 1957–1958, 1963–1964 a 1965–1966. Navrhl, jak
        se může počáteční oteplení samo zesílit. Když pasáty zeslábnou, teplá povrchová voda se rozšíří dále na východ
        a chladnější voda z hloubky tam hladinu méně ochlazuje. Teplotní rozdíl mezi západem a východem se zmenší.
        Za teplou vodou se posunou dešťové oblaky i oblast výstupu vzduchu. Tato změna atmosférického proudění může
        pasáty dále oslabit. Vzájemnému zesilování změn ve větru a teplotě hladiny se říká Bjerknesova zpětná vazba.{" "}
        <SourceLink id="DOI_10_1175_BJERKNES_1969">(Bjerknes 1969, oddíly 2 až 4)</SourceLink>
      </p>
      <Graphic name="zpetna-vazba" alt="Řez rovníkovým Pacifikem porovnává běžné pasáty a nakloněnou termoklinu s oslabenými pasáty, teplejším východem a plošší termoklinou při El Niño. Smyčka spojuje oteplení oceánu se změnou deště a dalším oslabením pasátů.">Vlevo je západ Pacifiku, vpravo východ. Tmavé šipky nad hladinou ukazují vítr, světlé ve vodě výstup vody. Oranžová označuje teplejší vrstvu a modrá chladnější vodu pod ní. Termoklinu zastupuje čára. <SourceLink id="DOI_10_1175_BJERKNES_1969">(Bjerknes 1969)</SourceLink>{" "}<SourceLink id="DOI_10_1029_2024RG000843">(Vialard a kol. 2025, obrázek 1)</SourceLink></Graphic>
      <h4 id="test-propojeny-model" className={styles.testHeading}>Dokáže propojený model oceánu a atmosféry vytvořit výkyvy sám?</h4>
      <p>
        Stephen Zebiak a Mark Cane v roce 1987 propojili model tropické atmosféry s modelem oceánu. Z teploty hladiny
        počítali změny větru. Ty ovlivnily proudy i hloubku termokliny a spolu s nimi teplotu hladiny v dalším kroku.
        Předepsané podmínky sledovaly stále stejný roční chod. Víceleté výkyvy se proto mohly objevit jen vzájemným
        působením oceánu a atmosféry uvnitř modelu.{" "}
        <SourceLink id="DOI_10_1175_ZEBIAK_CANE_1987">(Zebiak a Cane 1987, oddíly 2 a 3)</SourceLink>
      </p>
      <p>
        Za devadesát modelových let vznikaly teplé i chladné epizody. Teplé se vracely nejčastěji po třech až
        čtyřech letech. Spolu s teplotou kolísal také vítr, podobně jako v pozorováních. Model hůře vystihl začátek
        oteplování u pobřeží Jižní Ameriky. Uměl tedy vytvořit víceletý výkyv sám, ale pro ověření průběhu konkrétního
        El Niño bylo potřeba sledovat vítr i oceán během téže události.{" "}
        <SourceLink id="DOI_10_1175_ZEBIAK_CANE_1987">(Zebiak a Cane 1987, obrázky 1 až 3 a oddíl 3a)</SourceLink>
      </p>
      <h4 id="test-boje-1997" className={styles.testHeading}>Co při El Niño v letech 1997–1998 zaznamenaly bóje?</h4>
      <p>
        Ukotvené bóje sítě TAO tehdy měřily vítr nad oceánem a teplotu vody na hladině i v různých hloubkách.
        Michael McPhaden porovnal jejich pětidenní průměry podél rovníku. Z hloubky, v níž měla voda 20 °C, určil,
        jak se měnila poloha termokliny. Když v roce 1997 pasáty ve středním a západním Pacifiku zeslábly a místy
        se obrátily, teplá povrchová voda se rozšířila na východ. Stejným směrem se šířilo prohloubení termokliny.
        Družice zároveň zachytily posun oblasti vysokých dešťových oblaků nad oteplenou hladinu.{" "}
        <SourceLink id="DOI_10_1126_science_283_5404_950">(McPhaden 1999, obrázky 1 a 2)</SourceLink>
      </p>
      <p>
        V prosinci 1997 byl povrch ve východněji položené oblasti Niño3 téměř o 4 °C teplejší než obvykle.
        Je to údaj za jeden měsíc a za jinou část Pacifiku než úvodní tříměsíční hodnota 2,4 °C. Záznamy z{" "}
        <Link href="/metody/odporova-termometrie-a-termistory/">elektrických teploměrů</Link> na bójích spolu
        s měřením větru ukázaly, že oteplování doprovázelo očekávané zeslábnutí pasátů. Způsob měření pod hladinou
        vysvětluje <Link href="/pozorovani/tepelny-obsah-oceanu/#mereni-profilu">článek o teplotních profilech oceánu</Link>.{" "}
        <SourceLink id="DOI_10_1126_science_283_5404_950">(McPhaden 1999, obrázky 1 až 4)</SourceLink>
      </p>
      <p>
        Na jaře 1998 se chladnější voda na východě už přibližovala k povrchu, zatímco hladina zůstávala nezvykle
        teplá. Až když v polovině května znovu zesílily pasáty, začala tato voda vystupovat k hladině a ochlazovat
        ji. Bóje na rovníku na 125° západní délky tehdy zaznamenala pokles teploty hladiny o 8 °C za třicet dní.
        Tento místní záznam ukazuje obrázek 5 v téže McPhadenově studii. Co přiblížilo chladnější vodu k povrchu
        ještě před návratem pasátů?
      </p>
    </HypothesisStory>

    <HypothesisStory id="pamet-oceanu" number={2} title="Přesun teplé vody od rovníku připravuje obrat">
      <p>
        Při přesunu ze západu na východ zůstává teplá voda v rovníkovém pásu. Vítr však nepůsobí všude stejně a za
        El Niño se mění i proudy mířící z tohoto pásu na sever a na jih. Když přes jeho okraje odtéká více teplé vody,
        než do něj přitéká, zásoba v pásu klesá. Východní část oceánu tak může mít stále nezvykle teplý povrch,
        zatímco v celém pásu už teplé vody ubývá.{" "}
        <SourceLink id="DOI_10_1175_JIN_1997_RECHARGE">(Jin 1997, oddíl 2a)</SourceLink>
      </p>
      <p>
        Fei-Fei Jin v roce 1997 navázal na práce Klause Wyrtkiho, Marka Canea a Stephena Zebiaka. V jednoduchém modelu
        spojil teplotu hladiny ve východním Pacifiku s průměrnou tloušťkou teplé vrstvy podél rovníku. Když se vrstva
        ztenčí, může po návratu pasátů vystupovat k povrchu chladnější voda než dřív. Za chladné fáze La Niña se zase
        může více teplé vody k rovníku vracet a postupně tuto vrstvu doplnit. Její tloušťka tak závisí i na větrech,
        které nad oceánem vanuly v předchozích měsících.{" "}
        <SourceLink id="DOI_10_1175_JIN_1997_RECHARGE">(Jin 1997, úvod a obrázek 1)</SourceLink>
      </p>
      <Graphic name="pamet-oceanu" alt="Čtyři fáze ukazují nejprve větší podpovrchovou zásobu teplé vody, její odtok z rovníkového pásu při El Niño, přiblížení chladnější vody k povrchu a obnovování zásoby během La Niña. Změna zásoby předchází změně povrchové teploty.">Pořadí čteme po šipkách 1 až 4. Šipky mezi kartami znamenají časovou návaznost. Šipky u severní a jižní strany pásu vyjadřují vodorovný přenos vody. Oranžová vrstva je nad 20 °C i při La Niña, kdy je její povrch chladnější než obvykle v daném místě. Schéma záměrně rozlišuje teplotu povrchu a množství teplé vody pod ním. <SourceLink id="DOI_10_1175_JIN_1997_RECHARGE">(Jin 1997, obrázek 1)</SourceLink></Graphic>
      <h4 id="test-pomaly-obrat" className={styles.testHeading}>Za jak dlouho může pomalý přesun vody obrátit vývoj teploty?</h4>
      <p>
        V Jinově výpočtu stačila rychlá odezva větru na teplotu zesílit počáteční výkyv dřív, než proudy přemístily
        dost teplé vody, aby se vývoj obrátil. Podle síly vzájemného působení oceánu a atmosféry trval celý modelový
        cyklus přibližně tři až pět let. Kdyby se zásoba vody měnila stejně i ve skutečnosti, měla by dosáhnout maxima
        dříve než teplota hladiny na východě.{" "}
        <SourceLink id="DOI_10_1175_JIN_1997_RECHARGE">(Jin 1997, oddíly 2b a 3)</SourceLink>
      </p>
      <h4 id="test-predstih" className={styles.testHeading}>Předchází změna zásoby teplé vody oteplení nebo ochlazení hladiny?</h4>
      <p>
        Christopher Meinen a Michael McPhaden v roce 2000 porovnali dvě řady z let 1980–1999. Z teplot měřených
        v různých hloubkách odhadli objem vody teplejší než 20 °C v pásu od 5° jižní do 5° severní šířky,
        mezi 120° východní a 80° západní délky. Druhá řada zachycovala teplotu hladiny v oblasti Niño3. Autoři sledovali také vítr nad rovníkem.
        Z teplotní i objemové řady
        odečetli obvyklý průběh roku a zprůměrovali vždy pět sousedních měsíců. Pak zkoušeli, při jakém časovém
        posunu si růst a pokles obou veličin odpovídají nejlépe.{" "}
        <SourceLink id="DOI_10_1175_MEINEN_MCPHADEN_2000">(Meinen a McPhaden 2000, obrázky 4 a 5)</SourceLink>
      </p>
      <p>
        Nejtěsnější vztah vyšel, když změny zásoby teplé vody předcházely změnám teploty hladiny o sedm měsíců.
        Míru shody obou průběhů vyjadřuje korelace, která při tomto posunu dosáhla 0,70. Větší zásobu tak zpravidla následovala teplejší hladina a menší
        zásobu chladnější. Při El Niño v letech 1997–1998 ubyla v měřeném rovníkovém pásu téměř čtvrtina celkového
        objemu teplé vody. Data tak zachytila očekávaný úbytek zásoby už během teplé fáze.{" "}
        <SourceLink id="DOI_10_1175_MEINEN_MCPHADEN_2000">(Meinen a McPhaden 2000, oddíly 3 a 4)</SourceLink>
      </p>
      <p>
        Sedmiměsíční předstih popisuje vztah za celých dvacet let. U jednotlivých událostí se čas mezi změnou pod
        hladinou a teplotním vrcholem lišil. Do výpočtu objemu vstoupila i měření ze sítě TAO. Sledování celé řady
        tak rozšiřuje obraz z bójí za roky 1997–1998 o další události, ale část údajů mají obě studie společnou.
      </p>
    </HypothesisStory>

    <HypothesisStory id="vetrne-impulzy" number={3} title="Krátké změny větru ovlivňují sílu události">
      <p>
        I při velké zásobě teplé vody záleží na tom, odkud a jak dlouho vítr vane. Vítr od západu může během několika dní
        až týdnů posunout teplou vodu na východ. Oceánem se zároveň šíří vlna, při jejímž průchodu se termoklina
        prohloubí a studená voda zůstane dál od hladiny. Vítr od východu může oteplování naopak přibrzdit. Výskyt
        těchto větrných epizod ovlivňuje i sám oceán, protože poloha teplé hladiny souvisí s tím, kde vznikají
        tropické bouřky.{" "}
        <SourceLink id="DOI_10_1029_2024RG000843">(Vialard a kol. 2025, oddíl 3.2)</SourceLink>
      </p>
      <p>
        Na začátku roku 2014 zafoukal nad rovníkem dvakrát silný vítr od západu. Teplá voda postupovala na východ
        a oceán se začal oteplovat. V červnu přišel silný vítr od východu a oteplování se zastavilo. Shineng Hu a
        Alexey Fedorov v roce 2016 porovnali, jak se při tom měnily vítr, výška hladiny a povrchová teplota podle
        družicových měření. Aby zjistili, kolik z obratu mohl způsobit červnový vítr, potřebovali určit, jak by se
        stejný oceán vyvíjel bez něj.{" "}
        <SourceLink id="DOI_10_1073_pnas_1514182113">(Hu a Fedorov 2016, obrázky 1 až 3)</SourceLink>
      </p>
      <Graphic name="vetrne-impulzy" alt="Dvě varianty se stejným počátečním oceánem. Západní větrné impulzy podporují oteplení východu Pacifiku. Přidání červnového větru od východu oteplení brzdí. V každé variantě se opakuje deset výpočtů s mírně odlišnou atmosférou.">Západní vítr vane od západu na východ, východní opačně. Obrázek zobrazuje dvě varianty s vloženými impulzy. Studie obsahovala také kontrolní sadu bez těchto přidaných impulzů. Čáry zastupují termoklinu, jejíž skutečná přechodová vrstva má nenulovou tloušťku. <SourceLink id="DOI_10_1073_pnas_1514182113">(Hu a Fedorov 2016, modelový experiment)</SourceLink></Graphic>
      <h4 id="test-zmena-vetru" className={styles.testHeading}>Jak silné oteplení vyjde s červnovým větrem a bez něj?</h4>
      <p>
        Hu a Fedorov vyšli z modelového oceánu, který se podobal Pacifiku na začátku roku 2014. Připravili tři sady
        po deseti výpočtech. Všechny začínaly se stejným oceánem, zatímco počáteční stav atmosféry se mezi běhy mírně
        lišil. V první sadě ponechali vítr, jak ho vypočítal model. Do druhé přidali dvě časné epizody západního větru
        podle měření. Ve třetí k nim přidali ještě červnový vítr od východu.
      </p>
      <p>
        V první sadě dosáhla zimní odchylka povrchové teploty v oblasti Niño3 v průměru asi +1,4 °C.
        Se dvěma západními epizodami vyšlo přibližně +2,1 °C. Když se přidal i červnový vítr od východu, dosáhla
        odchylka v prosinci jen asi +1,1 °C. Jde o průměry z deseti výpočtů v každé sadě. Přidaný vítr tedy změnil,
        jaké oteplení bylo v modelu pravděpodobné. Rozmezí jednotlivých výsledků se přitom překrývala.{" "}
        <SourceLink id="DOI_10_1073_pnas_1514182113">(Hu a Fedorov 2016, obrázek 4 a metodický oddíl)</SourceLink>
      </p>
      <h4 id="test-dalsi-predpovedi" className={styles.testHeading}>Souvisel vítr se silou oteplení také v jiných předpovědích?</h4>
      <p>
        Sarah Ineson a její kolegové v roce 2018 srovnali květnové předpovědi pro dva rozdílné roky. V roce 2014
        zůstalo oteplení slabé, v roce 2015 se rozvinulo silné El Niño. Met Office, britská meteorologická služba,
        měla pro každý rok 42 výpočtů, Evropské centrum pro střednědobé předpovědi počasí (ECMWF) jich mělo 51.
        Tým srovnal západní větry v prvních dvou měsících předpovědi s říjnovou teplotou v oblasti Niño3.4. Pro rok
        2015 oba systémy vypočítaly výraznější západní větry než o rok dříve. Silnější byly v evropském modelu, který
        také předpověděl větší oteplení.{" "}
        <SourceLink id="DOI_10_1038_s41598_018_29130_1">(Ineson a kol. 2018, obrázky 1 a 6)</SourceLink>
      </p>
      <p>
        Pro říjen 2015 vyšla proti říjnovému průměru let 1996–2009 odchylka teploty hladiny +2,0 °C v britském
        a +2,8 °C v evropském modelu. V měřeních mírně přesáhla +2,1 °C. Výsledek však závisel také na stavu okolního
        oceánu. V roce 2014 souviselo slabé oteplení s chladnější vodou jihovýchodně od rovníku a v některých výpočtech
        El Niño vzniklo i bez časných západních větrů. Oba systémy tak ukázaly vliv větru za jiných podmínek než
        řízený pokus Hu a Fedorova. Předpovídaly však stejné roky, a sdílely tedy i pozorovaný výchozí stav oceánu.{" "}
        <SourceLink id="DOI_10_1038_s41598_018_29130_1">(Ineson a kol. 2018, oddíly Hypothesis 1, Hypothesis 3 a Discussion)</SourceLink>
      </p>
    </HypothesisStory>

    <h2 id="spolecne-vysvetleni">Jak se teplý Pacifik může přehoupnout do chladné fáze</h2>
    <p>
      Bóje v letech 1997–1998 zachytily zeslábnutí pasátů a posun teplé povrchové vody na východ. Delší řada
      měření ukázala, že zásoba teplé vody u rovníku se mění už před obratem povrchové teploty. A v pokusu
      s větrem z roku 2014 se oteplení měnilo podle směru větru, i když všechny výpočty začínaly se stejným
      oceánem. Průběh události tak závisí na tom, jak na sebe navážou pomalé přesuny vody a rychlejší změny větru.{" "}
      <SourceLink id="DOI_10_1029_2024RG000843">(Vialard a kol. 2025)</SourceLink>
    </p>
    <p>
      Před El Niño může být u rovníku nahromaděná teplá voda, i když to na teplotě hladiny na východě ještě
      není znát. Jakmile pasáty povolí, začne se teplá voda snáze šířit na východ a voda vystupující z hloubky
      tam povrch méně ochlazuje. Oblast dešťů a výstupu vzduchu se posune za teplou vodou. Pasáty tím dál slábnou.
      Západní vítr, který po přechodnou dobu vane proti jejich obvyklému směru, může oteplení ještě zesílit.{" "}
      <SourceLink id="DOI_10_1175_BJERKNES_1969">(Bjerknes 1969)</SourceLink>{" "}<SourceLink id="DOI_10_1073_pnas_1514182113">(Hu a Fedorov 2016)</SourceLink>
    </p>
    <p>
      Už během této teplé fáze odvádějí proudy část teplé vody od rovníku. Po nějaké době proto leží chladnější
      voda na východě blíž k hladině. Když se obnoví pasáty, začne tato voda vystupovat k hladině a ochlazovat ji. Pokud se východ ochladí
      pod obvyklou teplotu, zvětší se rozdíl mezi ním a teplým západem. To posiluje pasáty, které dál podporují
      výstup chladnější vody. Stejná vazba, která předtím zesilovala oteplení, nyní prohlubuje chladnou fázi
      La Niña. Pomalejší proudění přitom může zásobu teplé vody u rovníku opět doplnit.{" "}
      <SourceLink id="DOI_10_1175_JIN_1997_RECHARGE">(Jin 1997)</SourceLink>{" "}<SourceLink id="DOI_10_1175_MEINEN_MCPHADEN_2000">(Meinen a McPhaden 2000)</SourceLink>
    </p>
    <p>
      Modelové pokusy ukazují, jak mohou víceleté výkyvy vznikat i při opakujícím se ročním chodu slunečního záření. Oceán přerozděluje teplo a předává
      je přes hladinu vzduchu nebo je z něj přijímá. Když se posune oblast, kde nad tropickým Pacifikem stoupá teplý
      vzduch, mění se proudění i daleko od rovníku. El Niño a La Niña se proto projeví také ve výkyvech{" "}
      <Link href="/pozorovani/gmst/#zpomaleni-2002-2012">globální povrchové teploty</Link>. Jak se toto přerozdělování
      tepla liší od dlouhodobého přírůstku energie celé Země, vysvětluje{" "}
      <Link href="/mechanismy/energeticka-bilance-zeme/#prirozena-hypoteza">článek o energetické bilanci</Link>.{" "}
      <SourceLink id="DOI_10_1175_ZEBIAK_CANE_1987">(Zebiak a Cane 1987)</SourceLink>{" "}<SourceLink id="DOI_10_1175_BJERKNES_1969">(Bjerknes 1969)</SourceLink>
    </p>
    <p>
      Jednotlivé události se liší místem největšího oteplení, silou i trváním. U každé zůstává otázkou, jak velký
      podíl měla předchozí zásoba teplé vody a jak velký následné počasí. Vysvětlení obratu by oslabil například
      dlouhý záznam z celého rovníkového pásu, v němž by se zásoba vody soustavně měnila až po změně povrchové
      teploty. Podobně by bylo třeba přehodnotit roli větru, kdyby jeho zesílení vedlo při srovnatelných podmínkách
      v oceánu opakovaně k opačné odezvě, než jakou ukazují modelové pokusy.{" "}
      <SourceLink id="DOI_10_1029_2024RG000843">(Vialard a kol. 2025, oddíly 5 až 7)</SourceLink>
    </p>
    <details className="method-details"><summary>Co lze vyčíst z objemu teplé vody a z modelů</summary>
      <p>
        Vnitřní proměnlivost znamená, že každý jednotlivý výkyv může vzniknout i při stále stejném sezonním průběhu
        slunečního záření. Dlouhodobé oteplování přitom mění průměrný stav oceánu, v němž se následné epizody El Niño
        a La Niña rozvíjejí. Se změnou tohoto výchozího stavu se mohou měnit i vlastnosti samotného kolísání.{" "}
        <SourceLink id="DOI_10_1029_2024RG000843">(Vialard a kol. 2025, oddíl 5.3)</SourceLink>
      </p>
      <p>
        Objem vody teplejší než 20 °C závisí na ploše sledovaného pásu a na hloubce, kde voda této teploty dosahuje.
        Úbytek objemu v pásu u rovníku proto ještě neurčuje, kolik energie získal nebo ztratil celý oceán. Pro zopakování
        studie z let 1980–1999 záleží i na použitých datech. Tehdejší výpočet vycházel z rozboru označovaného BMRC.
        Dnešní veřejná řada GODAS kombinuje měření s oceánským modelem jiným způsobem.{" "}
        <SourceLink id="WEB_NOAA_PACIFIC_WWV">(NOAA, dokumentace WWV)</SourceLink>
      </p>
      <p>
        Jak dlouho by oceán a atmosféra dokázaly kolísat bez dalších nepravidelných změn větru? Elle Weeks a Eli
        Tziperman v roce 2025 zkoušeli, zda to lze poznat z průběhu teplot. Vytvořili umělé řady, u nichž předem
        věděli, zda výkyvy samy přetrvají, nebo postupně zeslábnou. Když těmto řadám přizpůsobili jednoduchý model,
        naznačil v některých případech útlum i tam, kde kolísání ve skutečnosti pokračovalo. Z takového odhadu proto
        nelze bezpečně určit, zda by skutečné ENSO postupně zaniklo bez dalších podnětů počasí.{" "}
        <SourceLink id="DOI_10_1029_2025GL116328">(Weeks a Tziperman 2025, oddíly 2 a 3)</SourceLink>
      </p>
    </details>

    <h2 id="shrnuti">Shrnutí</h2>
    <div className="method-conclusion">
      <p>
        Když pasáty zeslábnou, teplá voda se může rozšířit na východ rovníkového Pacifiku. Za ní se posune oblast
        dešťů, pasáty dál slábnou a El Niño sílí. Už za teplé fáze však může z okolí rovníku teplá voda odtékat.
        Při návratu pasátů se pak k hladině snáze dostane chladnější voda, jak ukázala měření na jaře 1998.
        Pokud ochlazení na východě dál posílí pasáty, může se rozvinout La Niña. O tom, zda a kdy teplou fázi
        vystřídá chladná, tak spolurozhoduje hloubka teplé vrstvy i průběh větru nad ní.
      </p>
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
