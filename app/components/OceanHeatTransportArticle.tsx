import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./OceanHeatTransportArticle.module.css";

const media = "/media/pohlcovani-a-presun-tepla-oceanem";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "mistni-promichavani",
    name: "Teplo se ukládá pod místem příjmu",
    prediction: "Pokud pomalý ohřev hladiny vysvětluje především místní hluboké promíchávání, má se oblast pomalého oteplování překrývat s nejhlubší promíchanou vrstvou.",
    test: "Z profilů teploty a slanosti určíme hloubku zimního promíchání. Její rozložení porovnáme s rozložením dlouhodobého povrchového oteplování.",
    observation: "Nejhlubší zimní promíchané vrstvy leží při severním okraji Antarktického cirkumpolárního proudu. Právě severněji, kolem 40–50° j. š., bylo oteplování rychlejší.",
    verdict: "Jako hlavní vysvětlení nestačí",
    explanation: "Velký promíchaný objem ohřev zpomaluje. Samotný tento účinek však nevystihuje prostorové rozložení změn v Jižním oceánu.",
    state: "insufficient",
  },
  {
    id: "prenos-proudenim",
    name: "Proudění odnáší přijaté teplo",
    prediction: "Příjem a ukládání tepla se mohou odehrávat v jiných oblastech. Základní rozložení změn má vzniknout i při zachování dosavadního proudění.",
    test: "Porovnáme toky přes hladinu s ohřevem vodního sloupce. V modelu pak sledujeme přidané teplo, kterému nedovolíme změnit proudění.",
    observation: "Rozložení změn z let 1982–2012 odpovídá přenosu tepla na sever. Model s nezměněným prouděním znovu vytváří pomalé oteplování na jihu a ukládání tepla severněji.",
    verdict: "Obstála, dnes přijímaná",
    explanation: "Rozhoduje výstup hlubinné vody, odnášení povrchové vody na sever a její zanořování. Promíchávání a oceánské víry se na ukládání také podílejí.",
    state: "supported",
  },
];

function Graphic({ name, alt, children }: { name: string; alt: string; children: React.ReactNode }) {
  return <figure className={`article-figure ${styles.explanatoryFigure}`}>
    <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Vysvětlující grafika, na úzké obrazovce posuvná do stran">
      <a href={`${media}/${name}.png`} aria-label="Otevřít grafiku v plné velikosti"><Image className="article-figure__media" src={`${media}/${name}.png`} width={1024} height={1536} alt={alt} unoptimized /></a>
    </div>
    <figcaption>{children} Vlastní ilustrace vytvořená pomocí AI, CC BY 4.0. Hloubky, šipky i oranžové značky jsou schematické a neudávají měřenou velikost. <SourceLink id="MEDIA_OCEAN_HEAT_TRANSPORT_2026">Podklady a zadání grafik</SourceLink>.</figcaption>
  </figure>;
}

export function OceanHeatTransportArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Proč se hladina u Antarktidy ohřívala tak pomalu?</h2>
    <p className="article-prose__intro">
      V letech 1950–2012 se hladina jižně od 50° jižní šířky ohřívala v průměru o 0,02 °C za deset let. Dál od Antarktidy, v pásu mezi 40° a 50° jižní šířky, to bylo 0,11 °C za deset let. Teprve z <Link href="/pozorovani/tepelny-obsah-oceanu/#jizni-ocean">měření teploty v různých hloubkách</Link> se dá zjistit, kolik tepla přibylo i pod hladinou. <SourceLink id="DOI_10_1038_ngeo2731">(Armour a kol. 2016)</SourceLink>
    </p>
    <p>
      Oceán přijímá část <Link href="/mechanismy/energeticka-bilance-zeme/">energie, která se na Zemi hromadí</Link>. Jestliže se u Antarktidy povrchová voda promíchá s velkým množstvím vody pod sebou, může pohltit hodně tepla a přitom se ohřát jen málo. Teplo však mohou odnést také proudy. Která z těchto dvou cest vysvětluje, kde se Jižní oceán oteplil nejvíc?
    </p>

    <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="ocean-transport-hypotheses-caption"
      context={<p>Jižní šířka roste směrem k jižnímu pólu. Pás 40–50° j. š. tedy leží severněji než vody blíže Antarktidě. „Příjem tepla“ znamená energii vstupující přes hladinu, „ukládání“ její přibývání ve sledovaném objemu vody.</p>}
      caption={<>Porovnání se týká dlouhodobého prostorového rozložení změn v Jižním oceánu. Promíchávání a proudění mohou působit společně. Rozlišujeme jejich úlohu v pomalém oteplování jižní části. <SourceLink id="DOI_10_1002_jgrc_20157">(Sallée a kol. 2013)</SourceLink>{" "}<SourceLink id="DOI_10_1038_ngeo2731">(Armour a kol. 2016)</SourceLink></>} />

    <h2 id="pribehy">Jak se hledalo vysvětlení</h2>
    <HypothesisStory id="mistni-promichavani" number={1} title="Teplo se ukládá pod místem příjmu">
      <p>
        V roce 1989 zkoumali Ronald Stouffer, Syukuro Manabe a Kirk Bryan, jak rychle zareagují různé části Země na růst koncentrace CO₂. Ve dvou výpočtech sledovali atmosféru a oceán po sto let. V jednom koncentrace rostla o 1 % ročně, ve druhém zůstala stejná. V modelu se okolí Antarktidy ohřívalo pomaleji než většina severní polokoule. Autoři to přičítali tomu, jak velké množství vody se na jihu do oteplování zapojuje. Jejich model přitom zahrnoval jak místní promíchávání, tak oceánské proudy. <SourceLink id="DOI_10_1038_342660a0">(Stouffer a kol. 1989)</SourceLink>
      </p>
      <p>
        Vítr a zimní ochlazování promíchávají horní část oceánu. Od hladiny ke spodnímu okraji promíchané vrstvy se pak teplota a slanost mění jen málo. Čím hlouběji promíchávání sahá, tím větší množství vody se pod každým metrem čtverečním hladiny ohřívá společně. Kolik energie k tomu potřebuje, vyjadřuje rovnice pro ohřev vody. <SourceLink id="BOOK_STEWART_PHYSICAL_OCEANOGRAPHY_2006">(Stewart 2006, oddíly 5.1 a 6.4)</SourceLink>
      </p>
      <Equation tex={String.raw`\Delta E = m\,c_p\,\Delta T`} />
      <p>
        Když se voda o hmotnosti <InlineMath tex="m" /> kilogramů ohřeje v průměru o <InlineMath tex={String.raw`\Delta T`} /> kelvinů, přibude jí energie <InlineMath tex={String.raw`\Delta E`} /> v joulech. Měrná tepelná kapacita <InlineMath tex="c_p" /> udává, kolik joulů je třeba k ohřátí jednoho kilogramu o jeden kelvin. Při malém ohřevu ji můžeme považovat za stálou. Teplotní rozdíl jednoho kelvinu má stejnou velikost jako rozdíl jednoho stupně Celsia. <SourceLink id="BOOK_STEWART_PHYSICAL_OCEANOGRAPHY_2006">(Stewart 2006, oddíl 5.1)</SourceLink>
      </p>
      <p>
        Rozdělí-li se stejné množství energie mezi desetkrát větší hmotnost vody, její průměrná teplota stoupne jen o desetinu původního přírůstku. Kdyby o pomalém ohřevu u Antarktidy rozhodoval hlavně tento účinek, měla by při srovnatelném příjmu tepla právě tam sahat promíchaná vrstva nejhlouběji. <SourceLink id="DOI_10_1038_ngeo2731">(Armour a kol. 2016, úvod)</SourceLink>
      </p>
      <Graphic name="mistni-promichavani" alt="Stejný přísun energie ohřeje hlubší promíchanou vrstvu méně než mělkou. Pozorované nejhlubší zimní vrstvy však leží severněji, v oblasti rychlejšího oteplování. Samotná místní tepelná kapacita proto nevysvětluje celý prostorový vzor.">Horní dvojice sloupců ukazuje podmíněné očekávání při stejném přísunu energie na stejnou plochu. Dolní řez shrnuje geografický vztah, ne jeden konkrétní změřený profil. <SourceLink id="DOI_10_1002_jgrc_20157">(Sallée a kol. 2013)</SourceLink>{" "}<SourceLink id="DOI_10_1038_ngeo2731">(Armour a kol. 2016)</SourceLink></Graphic>
      <h4 id="test-promichavani" className={styles.testHeading}>Kde sahá zimní promíchání nejhlouběji?</h4>
      <p>
        Jean-Baptiste Sallée a jeho kolegové v roce 2013 porovnali měření z lodí a z oceánských plováků Argo s výsledky klimatických modelů. Z <Link href="/metody/odporova-termometrie-a-termistory/#termistory">teploty vody v různých hloubkách</Link> a ze <Link href="/metody/konduktometrie/#salinita">slanosti odvozené z vodivosti</Link> určili její hustotu. Spodní okraj promíchané vrstvy hledali tam, kde se hustota začala zřetelně lišit od hodnoty u hladiny. Stejným postupem pak určili hloubku promíchání i v klimatických modelech. <SourceLink id="BOOK_STEWART_PHYSICAL_OCEANOGRAPHY_2006">(Stewart 2006, oddíly 5.1 a 6.5–6.7)</SourceLink>
      </p>
      <p>
        Nejhlouběji se voda v zimě promíchávala při severním okraji Antarktického cirkumpolárního proudu, který obtéká celý kontinent. Místy tam zimní promíchání dosahovalo o více než 400 metrů hlouběji než letní. <SourceLink id="DOI_10_1002_jgrc_20157">(Sallée a kol. 2013, oddíly 2 a 3)</SourceLink> Právě v tomto severnějším pásu se ovšem hladina oteplovala rychleji. Samotná hloubka promíchání tedy nevysvětluje, proč se nejpomaleji ohřívaly vody blíž k Antarktidě. <SourceLink id="DOI_10_1038_ngeo2731">(Armour a kol. 2016)</SourceLink>
      </p>
    </HypothesisStory>

    <HypothesisStory id="prenos-proudenim" number={2} title="Proudění odnáší přijaté teplo">
      <p>
        Ve Stoufferově modelu vystupovala u Antarktidy k hladině voda z hloubky. U povrchu pak proudila na sever a dál od Antarktidy se znovu zanořovala. <SourceLink id="DOI_10_1038_342660a0">(Stouffer a kol. 1989, s. 662)</SourceLink> Po takové dráze může voda přenést teplo daleko od místa, kde je u hladiny přijala. Nejvíc tepla by pak mohlo přibývat až tam, kde se tato voda dostává do hloubky. <SourceLink id="DOI_10_1098_rsta_2013_0040">(Marshall a kol. 2014, obrázek 4)</SourceLink>
      </p>
      <p>
        John Marshall a jeho kolegové v roce 2014 zkoumali, zda rozdíl mezi jihem a severem vznikne i při rovnoměrném přísunu tepla. Na nezamrzlé hladině modelu proto všude zvýšili tepelný příkon o 4 W/m², tedy o čtyři jouly za sekundu na metr čtvereční. Vítr a přísun sladké vody zadali stejně jako v kontrolním výpočtu. Jak se hladina ohřívala, nechali dodatečný příjem tepla slábnout. I při stejném počátečním příkonu se za sto let hladina kolem Antarktidy ohřála méně než dál na sever. <SourceLink id="DOI_10_1098_rsta_2013_0040">(Marshall a kol. 2014, oddíl 2)</SourceLink>
      </p>
      <Graphic name="prenos-proudenim" alt="Hlubinná voda s malým přírůstkem tepla vystupuje jižněji, u hladiny přijímá další energii a proudění ji odnáší na sever. Tam se voda zanořuje a teplo ukládá. Testy porovnávají místo příjmu a ukládání a opakují modelový pokus bez změny proudění.">Oranžová vyjadřuje přírůstek tepla proti dřívějšímu stavu. Hlubinná voda může být teplejší než polární hladina, a přitom nést méně tepla z nedávného oteplování. Řez zobrazuje jednu větev složitější cirkulace. <SourceLink id="DOI_10_1098_rsta_2013_0040">(Marshall a kol. 2014)</SourceLink>{" "}<SourceLink id="DOI_10_1038_ngeo2731">(Armour a kol. 2016)</SourceLink></Graphic>
      <h4 id="test-rozlozeni" className={styles.testHeading}>Kde teplo prošlo hladinou a kde ho ve vodě přibylo?</h4>
      <p>
        K ověření ve skutečném oceánu potřeboval Kyle Armour s kolegy údaje o výměně energie přes hladinu i o teplotě v různých hloubkách. Proto se zaměřili na kratší období, roky 1982–2012, pro které měli obojí. Z výměny mezi oceánem a atmosférou odhadli, kde začal oceán přijímat více tepla než dřív. Z měření teploty spočítali, kde tepla přibylo ve vodním sloupci. Pokud se část tepla přemístila po proudu, měly tyto dvě mapy ukázat různá místa. <SourceLink id="BOOK_STEWART_PHYSICAL_OCEANOGRAPHY_2006">(Stewart 2006, oddíly 5.1 a 5.7)</SourceLink>
      </p>
      <p>
        Blíž k Antarktidě příjem přes hladinu rostl, i když se tam povrchová voda ohřívala málo a místy chladla. Nejvíc tepla ve vodním sloupci naproti tomu přibylo kolem 40–50° jižní šířky. Tam se výměna přes hladinu dokonce měnila směrem k větším ztrátám energie z oceánu. Aby tam tepla přesto přibývalo, musely je přinášet také proudy z okolí. <SourceLink id="DOI_10_1038_ngeo2731">(Armour a kol. 2016, obrázek 1)</SourceLink>
      </p>
      <p>
        Kolik tepla touto cestou prošlo, odhadli autoři pro stejné období ve dvanácti klimatických modelech. Z dodatečného tepla přijatého přes hladinu jižně od 50° jižní šířky odnesly proudy přes tuto rovnoběžku na sever v průměru 68 ± 11 %. Hodnota 11 procentních bodů je jedna směrodatná odchylka mezi modely. <SourceLink id="DOI_10_1038_ngeo2731">(Armour a kol. 2016, obrázek 2 a metody)</SourceLink>
      </p>
      <h4 id="test-stale-proudeni" className={styles.testHeading}>Musí proudy zesílit, aby odnesly víc tepla?</h4>
      <p>
        Pokud se voda cestou ohřeje, odnese s sebou víc energie i při stejném průtoku. Armourův tým tuto možnost ověřil dalším modelovým pokusem. Teplo přidávané u hladiny v něm zastupovala veličina, kterou proudy mohly unášet a promíchávat. Na hustotu vody ani na proudění přitom tato veličina neměla vliv. Příkon u hladiny a jeho slábnutí při ohřevu zadali vědci stejně jako ve výpočtu, kde proudění na ohřev reagovat mohlo. <SourceLink id="DOI_10_1038_ngeo2731">(Armour a kol. 2016, metody)</SourceLink>
      </p>
      <p>
        I při původním proudění se takto sledované teplo hromadilo hlavně dál na sever. U hladiny blíž k Antarktidě ho přibylo málo. Proudění tedy může vytvořit pozorovaný rozdíl, i když nezesílí. Otevřená zůstala otázka, nakolik ho změny proudění dokážou zvětšit nebo zmenšit. <SourceLink id="DOI_10_1038_ngeo2731">(Armour a kol. 2016, rozbor pasivně přenášené veličiny)</SourceLink>
      </p>
      <p>
        Adele Morrisonová a její kolegové proto použili model CM2.6, který v oblasti ukládání tepla zachycuje i jednotlivé oceánské víry. Koncentrace CO₂ rostla o 1 % ročně po osmdesát let. Posledních dvacet let tohoto pokusu porovnali s výpočtem při stálé koncentraci CO₂. Přenos tepla z jižní oblasti na sever vzrostl hlavně tím, že dosavadní proudy unášely teplejší vodu. Zesílený výstup vody z hloubky vysvětlil v oblasti příjmu asi 20 % tohoto nárůstu. <SourceLink id="DOI_10_1175_JCLI_D_15_0579_1">(Morrisonová a kol. 2016, oddíly 2 a 5)</SourceLink> Dál na sever se uplatnily i víry. Za obvyklých podmínek vracely část tepla k jihu. Když tento zpětný přenos zeslábl, zůstalo ho víc v severnějších vodách. <SourceLink id="DOI_10_1175_JCLI_D_15_0579_1">(Morrisonová a kol. 2016, oddíly 4 a 6)</SourceLink>
      </p>
    </HypothesisStory>

    <h2 id="jak-mechanismus-funguje">Jak se teplo dostává od Antarktidy pod hladinu dál na severu</h2>
    <p>
      Hluboké promíchávání pomáhá uložit teplo v severnějším pásu. Samo však nevysvětluje, proč právě tam tepla přibývalo nejvíc, když změna toku přes hladinu směřovala k větším ztrátám. Potřebné teplo tam v modelových pokusech přinesly proudy od Antarktidy, a to i při nezměněné rychlosti. Na jižním konci této cesty může voda získat dodatečnou energii už tím, že jí do vzduchu odevzdá méně než dřív.
    </p>
    <h3 id="pres-hladinu">Kolik tepla vodě zůstane</h3>
    <p>
      Voda pohlcuje sluneční záření i tepelné záření z atmosféry a sama také vyzařuje. Oceán ztrácí energii také odpařováním a vyměňuje si teplo se vzduchem, který se vody dotýká. O výsledku rozhoduje součet těchto toků. <SourceLink id="BOOK_STEWART_PHYSICAL_OCEANOGRAPHY_2006">(Stewart 2006, kapitola 5)</SourceLink> V pokusu Morrisonové byl nad velkou částí Jižního oceánu vzduch chladnější než hladina. Vzduch se však ohříval rychleji než voda, takže se jejich teploty postupně sbližovaly. Hladina pak předávala chladnějšímu vzduchu méně tepla a oceánu zůstávalo víc energie než dřív. <SourceLink id="DOI_10_1175_JCLI_D_15_0579_1">(Morrisonová a kol. 2016, oddíl 3)</SourceLink>
    </p>
    <h3 id="vystup-a-prenos">Co udržuje pomalé oteplování jižní hladiny</h3>
    <p>
      Kolem Antarktidy vanou převládající západní větry k východu. Třením rozhýbávají vodu u hladiny. Vlivem rotace Země míří na jižní polokouli celkový přenos vody ve vrstvě poháněné větrem doleva od směru větru, v tomto případě k severu. Vodu, která odtud odteče, zčásti nahrazuje voda vystupující z hloubky. <SourceLink id="BOOK_STEWART_PHYSICAL_OCEANOGRAPHY_2006">(Stewart 2006, oddíly 9.3 a 13.5)</SourceLink>
    </p>
    <p>
      Hlubinná voda byla dlouho mimo dosah oteplující se atmosféry. Může být i teplejší než voda u polární hladiny, přestože se sama za poslední desetiletí ohřála jen málo. <SourceLink id="DOI_10_1098_rsta_2013_0040">(Marshall a kol. 2014, oddíly 2 a 3)</SourceLink> Jakmile z jižní oblasti odteče voda ohřátá u hladiny, zaujme část jejího místa hlubinná voda s menším přírůstkem teploty. Hladina se proto ohřívá jen zvolna, zatímco proudění průběžně odnáší nově přijaté teplo na sever. <SourceLink id="DOI_10_1098_rsta_2013_0040">(Marshall a kol. 2014, oddíl 2)</SourceLink>
    </p>
    <h3 id="zanorovani">Kudy se teplo dostává do hloubky</h3>
    <p>
      Při severním okraji proudu kolem Antarktidy se voda v zimě ochlazuje. Tím roste její hustota a voda se promíchává do hloubky. Hustotu ovlivňuje také slanost. Proudění může tuto vodu odvést pod lehčí povrchovou vrstvu a dál ji nést podél vrstev podobné hustoty. Oceánografové tomuto přechodu z povrchu do nitra oceánu říkají zanořování neboli subdukce. I voda ochlazená v zimě tak může přinést do hloubky dodatečné teplo, pokud je teplejší, než tu bývala voda dřív. <SourceLink id="DOI_10_1002_jgrc_20157">(Sallée a kol. 2013, úvod a oddíl 3)</SourceLink>{" "}<SourceLink id="BOOK_STEWART_PHYSICAL_OCEANOGRAPHY_2006">(Stewart 2006, oddíly 6.4–6.5)</SourceLink>
    </p>
    <p>
      Takto zanořenou vodu lze sledovat dál na sever podle její charakteristické teploty a slanosti. Oceánografové rozlišují mimo jiné subantarktickou modální vodu a antarktickou intermediální vodu. S těmito vodními hmotami se teplo z povrchu Jižního oceánu dostává přibližně do horního kilometru subtropických oceánů jižní polokoule. Přenos a promíchávání tepla touto cestou hodnotí IPCC s vysokou mírou jistoty. To vyjadřuje sílu a vzájemnou shodu důkazů. <SourceLink id="DOI_10_1017_9781009157896_011">(IPCC 2021, oddíl 9.2.3.2)</SourceLink>
    </p>
    <h3 id="bilance">Kolik tepla přinesly proudy</h3>
    <p>
      Kolik tepla přinesly proudy, lze odvodit ze zákona zachování energie. Za stejné období určíme, kolik tepla přibylo ve vodě od hladiny ke dnu a kolik energie prošlo hladinou po započtení zisků i ztrát. Rozdíl udává, o kolik víc tepla do oblasti přinesly proudy, než z ní odnesly. Samotné místní promíchání může změnit, v jaké hloubce teplo najdeme. Jeho celkové množství ve sloupci přitom zůstane stejné. <SourceLink id="BOOK_STEWART_PHYSICAL_OCEANOGRAPHY_2006">(Stewart 2006, oddíly 5.1 a 5.7)</SourceLink>
    </p>

    <p>
      Tato cesta tepla vysvětluje dlouhodobý rozdíl mezi oběma oblastmi. V jednotlivých desetiletích jeho velikost mění také větry, přítok sladké vody a rozsah mořského ledu. <SourceLink id="DOI_10_1017_9781009157896_011">(IPCC 2021, oddíly 9.2.1–9.2.3)</SourceLink> Úlohu přenosu na sever by bylo třeba přehodnotit, kdyby souběžná měření pod ledem, v hlubších vrstvách a na hranici mezi oblastmi ukázala, že většina tepla přijatého blízko Antarktidy zůstává na místě.
    </p>
    <details className="method-details"><summary>Nejistoty a další ověřování</summary>
      <p>
        Největší mezery v měřeních jsou pod mořským ledem a v hloubce. Soubor <SourceLink id="DATA_WHOI_OAFLUX">OAFlux</SourceLink> odhaduje výměnu tepla přes hladinu z meteorologických údajů a pro záření využívá údaje z družic. V rozboru za roky 1982–2012 hodnoty pod ledem chyběly. Zpracování teplotních profilů zase závisí na tom, kde a jak hluboko se v daném období měřilo. Z map tak lze určit, že se místa příjmu a ukládání lišila, zatímco číselný odhad podílu odneseného tepla pochází z modelů. <SourceLink id="DOI_10_1038_ngeo2731">(Armour a kol. 2016)</SourceLink> Mezery v pozorováních popisuje také <SourceLink id="DOI_10_1017_9781009157896_011">IPCC 2021, kapitola 9</SourceLink>.
      </p>
      <p>
        Model Morrisonové umožnil odlišit vliv oteplení vody od účinku silnějšího proudění při pravidelném růstu koncentrace CO₂. Přenést jeho odhad 20 % na konkrétní desetiletí by vyžadovalo ověřit, jak se v té době na cestě k severu měnila teplota vody i rychlost proudů. <SourceLink id="DOI_10_1175_JCLI_D_15_0579_1">(Morrisonová a kol. 2016)</SourceLink>
      </p>
    </details>

    <h2 id="shrnuti">Shrnutí</h2>
    <div className="method-conclusion"><p>
      U Antarktidy vítr odnáší povrchovou vodu na sever. Na její místo vystupuje hlubinná voda, kterou nedávné oteplování zatím málo zasáhlo. Jižní hladina se proto může ohřívat zvolna, i když oceán získává více tepla než dřív. Část získaného tepla putuje s vodou na sever a tam se při zanořování dostává pod hladinu. Právě v tomto severnějším pásu zachytila měření největší ohřev vodního sloupce. Jak velkou část přijatého tepla proudy odnesly, zatím víme především z modelových výpočtů.
    </p></div>

    <h2 id="prameny">Prameny, veřejná data a grafiky</h2>
    <ul>
      <li><SourceLink id="DOI_10_1038_342660a0">Stouffer, Manabe a Bryan 1989</SourceLink>: původní výpočet rozdílné odezvy polokoulí, včetně proudění a promíchávání.</li>
      <li><SourceLink id="DOI_10_1002_jgrc_20157">Sallée a kol. 2013</SourceLink>: zimní promíchané vrstvy, porovnání profilů z lodí a Argo s modely.</li>
      <li><SourceLink id="DOI_10_1098_rsta_2013_0040">Marshall a kol. 2014</SourceLink>: odezva oceánu na prostorově stejné přidané působení.</li>
      <li><SourceLink id="DOI_10_1038_ngeo2731">Armour a kol. 2016</SourceLink>: pozorované rozložení změn, bilance dvanácti modelů a pokus s nezměněným prouděním.</li>
      <li><SourceLink id="DOI_10_1175_JCLI_D_15_0579_1">Morrisonová a kol. 2016</SourceLink>: nezávislý model zachycující oceánské víry a rozdělení přenosu mezi procesy.</li>
      <li><SourceLink id="DOI_10_1017_9781009157896_011">IPCC 2021, kapitola 9</SourceLink>: souhrnné hodnocení změn oceánu a přenosu tepla.</li>
      <li><SourceLink id="BOOK_STEWART_PHYSICAL_OCEANOGRAPHY_2006">Stewart: Introduction to Physical Oceanography, vydání 2006</SourceLink>: otevřená učebnice, zejména kapitoly 5, 6, 9 a 13.</li>
      <li><SourceLink id="DATA_NOAA_ERSST_V3B">NOAA ERSST v3b</SourceLink>: archiv původní verze povrchových teplot pro porovnání 1950–2012. <SourceLink id="DATA_METOFFICE_EN4">EN4</SourceLink>: profily teploty a slanosti a jejich mřížková vyhodnocení. <SourceLink id="DATA_WHOI_OAFLUX">WHOI OAFlux</SourceLink>: odhady povrchových energetických toků.</li>
      <li><SourceLink id="MEDIA_OCEAN_HEAT_TRANSPORT_2026">Podklady Klimatologie.eu</SourceLink>: <a href={media + "/armour2016-sst.csv"}>publikované teplotní trendy v CSV</a>, <a href={media + "/plot.py"}>skript pozorovacího grafu</a>, <a href={media + "/prompts.json"}>zadání ilustrací</a> a <a href={media + "/edits.json"}>zadání opravy</a>. Číselné výsledky přebíráme z prací, ne z nového zpracování původních měření.</li>
    </ul>
    <p>Armourova práce odkazuje také na veřejný kód MITgcm a modelová data CMIP5. Vlastní soubory výsledků této práce nabízí na vyžádání u autora. Zde zpřístupněný CSV proto obsahuje pouze tři publikované, zaokrouhlené povrchové trendy, nikoli výstup modelového pokusu. <SourceLink id="DOI_10_1038_ngeo2731">(Armour a kol. 2016, dostupnost dat a kódu)</SourceLink></p>
  </div></article>;
}
