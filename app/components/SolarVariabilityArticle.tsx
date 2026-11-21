import Image from "next/image";
import Link from "next/link";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./SolarVariabilityArticle.module.css";

const media = "/media/slunecni-promenlivost";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "kosmicke-zareni", name: "Sluneční vliv výrazně zesiluje změna oblaků přes kosmické záření",
    prediction: "Při zeslabení kosmického záření zvenčí Sluneční soustavy má přes úbytek nabitých molekul a částic klesnout odrazivost nízkých oblaků. Změnu oblaků bychom měli najít i po krátkých poklesech kosmického záření.",
    test: "V komoře měníme počet elektricky nabitých molekul vzduchu. Pak počítáme, kolik vzniklých částic doroste do jader pro kapky, a v družicových datech hledáme předpovězenou změnu oblaků po poklesech kosmického záření.",
    observation: "Ionty mohou podporovat vznik částic. Výpočet pro dnešní atmosféru však dává mezi slunečním minimem a maximem jen 0,2% změnu počtu jader pro nízké oblaky. Družicové testy dávají rozdílné výsledky.",
    verdict: "Silné zesílení není prokázané",
    explanation: "Laboratorní dílčí děj obstál. Jeho převod na velký klimatický účinek přes oblaka nemá přesvědčivou oporu v souhrnu testů.", state: "insufficient",
  },
  {
    id: "zmeny-zareni", name: "Klima reaguje na změny příkonu a spektra slunečního záření",
    prediction: "Pohlcování proměnlivého ultrafialového záření má zanechat oteplující stopu ve stratosféře. Spolu s ní čekáme menší globální teplotní odezvu u povrchu, odpovídající slabému kolísání celkového příkonu.",
    test: "Z družicových teplot oddělíme cyklickou složku a dlouhodobý trend. Velikost odezvy u povrchu odhadneme při současném zahrnutí sopek, lidského působení a kolísání tropického Pacifiku a porovnáme ji s fyzikálními modely.",
    observation: "Družicový záznam 1979–2015 obsahuje oteplující sluneční signál, výraznější v horní stratosféře. Odhad u povrchu z roku 2021 činí 0,05 °C na 1 W/m² slunečního příkonu, s 95% intervalem 0,03–0,09 °C.",
    verdict: "Obstála, dnes přijímaná",
    explanation: "Vysvětluje malou cyklickou odezvu bez nutnosti velkého zesílení přes kosmické záření. Podrobné regionální změny proudění zůstávají méně jisté.", state: "supported",
  },
];

function Graphic({ name, alt, children }: { name: string; alt: string; children: React.ReactNode }) {
  return <figure id={`${name}-schema`} className={`article-figure ${styles.explanatoryFigure}`}>
    <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Vysvětlující grafika, na úzké obrazovce posuvná do stran">
      <a href={`${media}/${name}.png`} aria-label="Otevřít grafiku v plné velikosti">
        <Image className="article-figure__media" src={`${media}/${name}.png`} width={name === "kosmicke-zareni" ? 1199 : 1122} height={name === "kosmicke-zareni" ? 1312 : 1402} alt={alt} unoptimized />
      </a>
    </div>
    <figcaption>{children} Vlastní vysvětlující ilustrace vytvořená pomocí AI, CC BY 4.0. Přístroje a prostředí jsou ilustrace. <a href={`${media}/podklady.txt`}>Prameny a význam čísel</a>.</figcaption>
  </figure>;
}

export function SolarVariabilityArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Co se mění mezi slunečním minimem a maximem?</h2>
    <p className="article-prose__intro">
      Magnetická aktivita Slunce zesiluje a slábne v cyklu dlouhém přibližně jedenáct let. Spolu s ní se mění i sluneční příkon. Ten udává, kolik energie dopadá za sekundu na metr čtvereční plochy kolmé ke slunečním paprskům. V roce 2015 naměřila družice SORCE nad atmosférou v průměru o 0,90 wattu na metr čtvereční (W/m²) víc než v roce 2008. Rozdíl asi 0,07 % vychází z <Link href="/pozorovani/slunecni-zareni/#pozorovani">měření přepočtených na stejnou vzdálenost od Slunce</Link>. <SourceLink id="DATA_SORCE_TIM_V20">(SORCE TIM, verze 20)</SourceLink>
    </p>
    <p>
      Vliv těchto změn lze hledat v <Link href="/pozorovani/stratosfericke-ochlazovani/#slunecni-cyklus">teplotě stratosféry</Link>, vrstvy vzduchu nad oblastí běžného počasí. Přestože tato vrstva po několik desetiletí chladla, v jejích teplotních záznamech se opakuje slabé oteplení v době vyšší sluneční aktivity. Jak velký výkyv má změna záření vyvolat u zemského povrchu? A mohou ho zesílit oblaky tím, že během slunečního maxima odrazí méně světla zpět do vesmíru? <SourceLink id="DOI_10_1175_jcli_d_15_0629_1">(Randel a kol. 2016)</SourceLink>
    </p>

    <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="solar-hypotheses-caption"
      context={<p>Příkon zde vyjadřuje energii přicházející za sekundu na metr čtvereční plochy kolmé ke slunečním paprskům nad atmosférou. Není to průměr na metr čtvereční celého povrchu Země. Částice, na nichž vznikají oblačné kapky, budeme nazývat jádra pro kapky. Uvedených 0,2 % je změna jejich počtu v modelu, nikoli změna plochy oblaků.</p>}
      caption={<>Porovnáváme vysvětlení odezvy na sluneční cyklus. Dílčí procesy mohou existovat současně. Sporné je především to, zda cesta přes kosmické záření vyvolává velké zesílení. Podmínky a zdroje jednotlivých výsledků rozebírají následující příběhy.</>} />

    <h2 id="pribehy">Jak se sluneční vliv zkoumal</h2>
    <HypothesisStory id="kosmicke-zareni" number={1} title="Sluneční vliv výrazně zesiluje změna oblaků přes kosmické záření">
      <p>
        V roce 1997 si Henrik Svensmark a Eigil Friis-Christensen všimli, že družicové odhady oblačnosti kolísaly spolu s množstvím kosmického záření. Zajímaly je rychlé elektricky nabité částice, které k nám přilétají z prostoru mimo Sluneční soustavu. Sluneční vítr, proud částic ze Slunce, nese magnetické pole, které některé z těchto příchozích částic odklání. Při slunečním maximu jich proto do zemské atmosféry zpravidla proniká méně. <SourceLink id="DOI_10_1016_S1364_6826_97_00001_1">(Svensmark a Friis-Christensen 1997)</SourceLink>
      </p>
      <p>
        Když taková částice vyrazí z molekuly vzduchu elektron, získá molekula kladný elektrický náboj a stane se z ní iont. Tento náboj může udržet pohromadě shluk několika molekul. Pokud se k nim přidávají další molekuly z okolních par, může shluk dorůst v částici dost velkou na to, aby na ní vznikla oblačná kapka. Takové částici říkáme kondenzační jádro. <SourceLink id="DOI_10_1126_science_aaf2649">(Dunne a kol. 2016)</SourceLink>{" "}<SourceLink id="DOI_10_1002_2017JD026844">(Gordon a kol. 2017)</SourceLink> Kdyby při slunečním maximu těchto jader výrazně ubylo, stejné množství kapalné vody by v oblaku připadlo na menší počet větších kapek. Takový oblak zpravidla odráží méně světla. Země by pak pohltila víc sluneční energie. Výsledek by ovlivnila i případná změna plochy nebo životnosti oblaků. <SourceLink id="DOI_10_1002_2017JD026844">(Gordon a kol. 2017, úvod a oddíl 3.5)</SourceLink>
      </p>
      <Graphic name="kosmicke-zareni" alt="Hypotéza: aktivnější Slunce snižuje přísun galaktických částic, přes ionty a růst částic by se mohla změnit odrazivost oblaků. Komora CLOUD potvrzuje pomoc iontů při vzniku částic. Globální model dává pro dnešní atmosféru jen 0,2% změnu jader pro nízké oblaky mezi slunečním minimem a maximem.">Horní část sleduje předpokládaný řetězec. V laboratorním testu měníme vznik částic. Druhý test ověřuje, kolik jich přežije a doroste. Jeho číselný výsledek je modelový výpočet. <SourceLink id="DOI_10_1126_science_aaf2649">(Dunne a kol. 2016)</SourceLink>{" "}<SourceLink id="DOI_10_1002_2017JD026844">(Gordon a kol. 2017, tabulka 4)</SourceLink></Graphic>
      <h4 id="test-komora" className={styles.testHeading}>Jak ionty ovlivní vznik částic v komoře?</h4>
      <p>
        V experimentu CLOUD v CERNu mohli vědci měnit počet iontů a přitom udržovat stejnou teplotu, vlhkost i složení vzduchu. Svazkem rychlých částic vytvářeli další ionty, elektrickým polem je naopak z komory odstraňovali. Eimear Dunneová s kolegy v roce 2016 vyhodnotila přibližně 350 měření s kyselinou sírovou a amoniakem spolu s výsledky pokusů s organickými látkami. <SourceLink id="DOI_10_1126_science_aaf2649">(Dunne a kol. 2016)</SourceLink> Ionty pomáhaly při vzniku mnoha drobných částic. Při zvýšení počtu iontů se však vznik nových částic zrychlil jen málo. Záleželo také na teplotě a na tom, kolik bylo ve vzduchu par, z nichž částice mohly vznikat. <SourceLink id="DOI_10_1126_science_aaf2649">(Dunne a kol. 2016)</SourceLink>
      </p>
      <h4 id="test-rust" className={styles.testHeading}>Kolik nových částic doroste v jádra pro kapky?</h4>
      <p>
        V atmosféře může nově vzniklá částice splynout s větší částicí dřív, než na ní začne růst vlastní kapka. I částice, které se nesrazí, se dělí o omezené množství par potřebných k růstu. Hamish Gordon a jeho kolegové proto v roce 2017 převzali z komorových pokusů údaje o vzniku částic a v globálním modelu počítali, kolik z nich doroste ve výšce nízkých oblaků v kondenzační jádra. <SourceLink id="DOI_10_1002_2017JD026844">(Gordon a kol. 2017)</SourceLink>
      </p>
      <p>
        Pro dnešní atmosféru vyšel mezi slunečním minimem a maximem rozdíl v počtu jader jen 0,2 % v celosvětovém ročním průměru. Pro atmosféru před průmyslovou revolucí to bylo 0,3 %. Vědci přitom v obou výpočtech počítali částice, na nichž by při stejné vlhkosti mohla vyrůst kapka. Změna v přísunu kosmického záření se tedy do počtu jader promítla jen slabě. <SourceLink id="DOI_10_1002_2017JD026844">(Gordon a kol. 2017, oddíl 3.5 a tabulka 4)</SourceLink>
      </p>
      <h4 id="test-oblaka" className={styles.testHeading}>Co se s oblaky stane po náhlém úbytku kosmického záření?</h4>
      <p>
        Přísun kosmického záření občas poklesne i na několik dnů. Pokud je účinek na oblaky silný, měly by po takovém Forbushově poklesu odrážet méně světla. Změna by se projevila s odstupem, protože částice potřebují čas k růstu. V roce 2008 zkoumal tým Jóna Egilla Kristjánssona 22 takových událostí nad málo znečištěnými oceány jižní polokoule. Družice sledovaly plochu oblaků, velikost kapek, množství kapalné vody i to, nakolik oblak zeslabí procházející záření. Když autoři zohlednili, že se oblačnost ze dne na den často příliš nemění, u žádné ze čtyř vlastností nevyšla v průměru přes všechny události statisticky průkazná změna. <SourceLink id="DOI_10_5194_acp_8_7373_2008">(Kristjánsson a kol. 2008)</SourceLink>
      </p>
      <p>
        Svensmarkův tým v roce 2021 vybral ze svého družicového záznamu pět nejsilnějších poklesů ionizace. Pomocí družicových měření porovnal, kolik záření na horní hranici atmosféry přichází a kolik odchází zpět do vesmíru. Po vybraných událostech se tato bilance změnila v průměru o 1,7 W/m². Většinu změny tým připsal nízkým oblakům s vodními kapkami nad čistšími oceány. <SourceLink id="DOI_10_1038_s41598_021_99033_1">(Svensmark a kol. 2021)</SourceLink> Oba týmy tedy sledovaly různé veličiny a jiný výběr událostí. Krátkodobý výkyv po pěti zvlášť silných poklesech ponechává otevřenou otázku, jak velkou změnu oblačnosti může vyvolat běžný jedenáctiletý cyklus. <SourceLink id="DOI_10_5194_acp_8_7373_2008">(Kristjánsson a kol. 2008)</SourceLink>
      </p>
    </HypothesisStory>

    <HypothesisStory id="zmeny-zareni" number={2} title="Klima reaguje na změny příkonu a spektra slunečního záření">
      <p>
        Kolik sluneční energie k Zemi přichází, sledují družice soustavně od roku 1978. Když se přes viditelný sluneční kotouč přesune skupina tmavých skvrn, může příkon na několik dnů klesnout. V aktivní části cyklu však vedle skvrn přibývá i jasných magnetických oblastí. V průměru jejich příspěvek převáží, takže v době maxima dostává Země o něco více záření. <SourceLink id="DOI_10_1029_2010GL045777">(Kopp a Leanová 2011)</SourceLink>
      </p>
      <p>
        Kam se energie dostane, závisí na vlnové délce záření. Viditelné světlo a část infračerveného záření procházejí až k povrchu. Kratší vlnové délky ultrafialového záření (UV) zachytí už výše v atmosféře kyslík a ozon. Ve stratosféře ohřívá vzduch zejména záření pohlcené ozonem, plynem složeným z molekul se třemi atomy kyslíku. UV záření zároveň ovlivňuje reakce, při kterých ozon vzniká a zaniká. Už v 90. letech zkoumala Joanna Haighová v modelech, jak změny UV záření a ozonu ovlivní ohřev stratosféry a proudění pod ní. Její pokusy popisuje <SourceLink id="DOI_10_1029_2009RG000282">Grayová a kol. (2010, oddíl 4.2)</SourceLink>.
      </p>
      <p>
        Při vyšší sluneční aktivitě bychom tedy měli najít oteplení ve výškách, kde vzduch pohlcuje víc UV záření. U povrchu čekáme slabší výkyv. Dodatečné energie tam doputuje málo a v oceánu se navíc rozděluje mezi hladinu a vodu pod ní. <SourceLink id="DOI_10_1175_jcli_d_15_0629_1">(Randel a kol. 2016)</SourceLink>{" "}<SourceLink id="DOI_10_1175_JCLI_D_20_0312_1">(Amdur a kol. 2021)</SourceLink>
      </p>
      <Graphic name="zmeny-zareni" alt="Dvě cesty proměnlivého slunečního záření. Povrch a oceán pohlcují část dodané energie, UV mění ohřev a ozon ve stratosféře. Družicové teploty ukazují oteplující sluneční signál ve výšce. Odhad povrchové odezvy je malý, 0,05 stupně na 1 watt na metr čtvereční slunečního příkonu.">Zlaté a fialové šipky rozlišují průchod k povrchu a pohlcování UV ve výšce. Část UV pohlcuje také kyslík. Výškové pásy jsou schematické, výška spodního okraje stratosféry se mění podle oblasti. Spodní panely spojují předpověď s konkrétním testem. <SourceLink id="DOI_10_1029_2009RG000282">(Grayová a kol. 2010)</SourceLink>{" "}<SourceLink id="DOI_10_1175_jcli_d_15_0629_1">(Randel a kol. 2016)</SourceLink>{" "}<SourceLink id="DOI_10_1175_JCLI_D_20_0312_1">(Amdur a kol. 2021)</SourceLink></Graphic>
      <h4 id="test-stratosfera" className={styles.testHeading}>V jaké výšce je sluneční oteplení nejvýraznější?</h4>
      <p>
        William Randel a jeho kolegové spojili měření z několika generací družic a získali záznam teploty v různých výškách za roky 1979–2015. Oddělili v něm dlouhodobý pokles teploty a kolísání související s prouděním vzduchu. Při vyšší sluneční aktivitě byla stratosféra teplejší, než by odpovídalo samotnému dlouhodobému vývoji. Tento výkyv se nejzřetelněji projevil v tropech a přilehlých oblastech a sílil směrem do horní stratosféry. <SourceLink id="DOI_10_1175_jcli_d_15_0629_1">(Randel a kol. 2016, oddíl 5d a obr. 15)</SourceLink>
      </p>
      <p>
        Přístroje se během měření vystřídaly. Aby autoři zjistili, nakolik na jejich výběru záleží, připojili ke stejným starším měřením vždy data z jednoho ze tří novějších přístrojů. Ve všech třech verzích vyšlo oteplení s výškou podobně, v souladu s očekávaným vlivem UV záření. Shoda tedy prověřila především novější část záznamu. <SourceLink id="DOI_10_1175_jcli_d_15_0629_1">(Randel a kol. 2016)</SourceLink>
      </p>
      <h4 id="test-povrch" className={styles.testHeading}>O kolik se během cyklu ohřeje zemský povrch?</h4>
      <p>
        U povrchu mohou sluneční výkyv překrýt částice ze sopečných erupcí, které na několik let odstíní část slunečního světla. Teplotu z roku na rok mění také výměna tepla mezi tropickým Pacifikem a vzduchem. Navíc je třeba počítat s dlouhodobým oteplováním způsobeným člověkem. Ted Amdur, Alexander Stine a Peter Huybers proto sledovali teplotu a sluneční příkon po mnoho cyklů. V měsíčních údajích za roky 1882–2019 odhadovali všechny tyto vlivy společně a připustili, že se změna příkonu projeví v teplotě až se zpožděním. Pro období před nástupem družic využili odhady příkonu ze záznamů sluneční aktivity. <SourceLink id="DOI_10_1175_JCLI_D_20_0312_1">(Amdur a kol. 2021)</SourceLink>
      </p>
      <p>
        Pro cyklus, v němž příkon od minima k maximu vzroste o 1 W/m² na ploše kolmé k paprskům, vyšlo jako nejpravděpodobnější oteplení u povrchu o 0,05 °C v celosvětovém průměru. Autoři pro tento odhad uvádějí 95% interval spolehlivosti 0,03–0,09 °C. Jde o část teplotního výkyvu, kterou lze připsat Slunci po zohlednění ostatních vlivů. <SourceLink id="DOI_10_1175_JCLI_D_20_0312_1">(Amdur a kol. 2021)</SourceLink> Když tým na delších záznamech zopakoval starší výpočty, které původně ukazovaly silnější oteplení, vyšlo i těmito postupy menší oteplení, bližší výsledkům fyzikálních modelů klimatu. <SourceLink id="DOI_10_1175_JCLI_D_20_0312_1">(Amdur a kol. 2021, oddíly 5–7)</SourceLink>
      </p>
    </HypothesisStory>

    <h2 id="mechanismus">Kde se energie ze slunečního maxima projeví</h2>
    <p>
      Změna záření vysvětluje jak oteplení horní stratosféry během maxima, tak mnohem slabší výkyv globální teploty u povrchu. U kosmického záření ukázal pokus v komoře, jak ionty pomáhají tvořit zárodky částic. V modelu se však mění počet jader pro oblačné kapky jen málo a družicová měření oblaků dávají rozdílné výsledky. Už před zveřejněním rozboru pěti nejsilnějších poklesů označila zpráva IPCC z roku 2021 výrazný vliv kosmického záření na dnešní klima prostřednictvím oblaků za nepravděpodobný. <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíl 7.3.4.5)</SourceLink> Pro přímý sluneční ohřev je důležité, jakou část záření navíc Země pohltí.
    </p>
    <h3 id="prikon">Kolik dodatečného záření Země pohltí?</h3>
    <p>
      Když družice naměří o 1 W/m² víc, připadá jeden watt navíc na metr čtvereční obrácený přímo ke Slunci. Země sluneční paprsky zachycuje průřezem ve tvaru kruhu. Celý povrch koule, včetně noční strany, má čtyřikrát větší plochu než tento kruh. Na jeden metr čtvereční celého povrchu tak v průměru připadá čtvrtina původního rozdílu, tedy 0,25 W/m². <SourceLink id="DOI_10_1175_JCLI_D_20_0312_1">(Amdur a kol. 2021, úvod)</SourceLink> Jestliže se stále 30 % dopadajícího záření odráží zpět do vesmíru, Země pohltí zbývajících 70 %. Pohlcený příkon se v tomto příkladu zvýší o 0,25 × 0,70 = 0,175 W/m². Podíl odraženého světla lze ověřit <Link href="/metody/mereni-radiacnich-toku/#druzicova-bilance">družicovým měřením příchozího a odraženého záření</Link>. <SourceLink id="DOI_10_1017_9781009157896_009">(IPCC AR6, oddíl 7.2)</SourceLink>
    </p>
    <h3 id="ocean-a-vyska">Proč se oceán a stratosféra ohřívají rozdílně?</h3>
    <p>
      Část záření pohltí oceán. Ohřátá voda se mísí s vodou pod hladinou, a tak se o přijatou energii dělí větší množství vody. Povrch se ohřívá pomaleji a část uloženého tepla se z oceánu uvolňuje ještě v době, kdy sluneční příkon znovu klesá. Největší ohřev hladiny tak může přijít až po slunečním maximu. Při <Link href="/mechanismy/energeticka-bilance-zeme/#slunecni-hypoteza">změně příkonu trvající desítky let</Link> by měl oceán na ohřev víc času. Velikost jedenáctiletého výkyvu proto sama neurčuje, o kolik se teplota změní při trvale vyšším příkonu. <SourceLink id="DOI_10_1175_JCLI_D_20_0312_1">(Amdur a kol. 2021)</SourceLink>
    </p>
    <p>
      Ve stratosféře záleží na tom, jak se během cyklu mění ultrafialové záření. Na některých jeho vlnových délkách je rozdíl mezi minimem a maximem v procentech podstatně větší než u slunečního záření jako celku. Tam, kde ozon pohlcuje více energie, se vzduch více ohřeje. Když se změní teplotní rozdíly mezi oblastmi, mění se i vítr. V pozměněném proudění se jinak šíří atmosférické vlny, tedy rozsáhlé výkyvy v pohybu vzduchu. Sluneční cyklus se tak může v určité oblasti a roční době projevit výrazněji, než naznačuje globální průměr. <SourceLink id="DOI_10_1029_2009RG000282">(Grayová a kol. 2010, oddíl 4.2)</SourceLink>
    </p>
    <p>
      O kolik se mění záření nad atmosférou, měří družice přímo. Odhad slabého výkyvu teploty u povrchu více závisí na délce záznamu a na tom, jak dobře se podaří oddělit vliv sopek a oceánu. Pro jednotlivé oblasti k tomu přistupují změny proudění. Pokud by delší, nezávisle zpracované teplotní záznamy i po oddělení ostatních vlivů ukázaly při stejné změně slunečního příkonu podstatně větší oteplení, bylo by třeba jeho vysvětlení rozšířit. <SourceLink id="DOI_10_1175_JCLI_D_20_0312_1">(Amdur a kol. 2021)</SourceLink>
    </p>
    <details className="method-details"><summary>Nejistoty a co by současné vysvětlení změnilo</summary>
      <p>
        Amdurův tým vyzkoušel různé teplotní záznamy a různé rekonstrukce slunečního příkonu. Podle výběru vstupních dat vycházelo oteplení mezi 0,02 a 0,09 °C na 1 W/m². I dobře určená statistická nejistota jednoho výpočtu tedy zachycuje jen část nejistoty, s níž sluneční vliv známe. Na simulovaných teplotních záznamech autoři také zkoušeli, jak spolehlivě jejich postup najde známý sluneční výkyv uprostřed přirozeného kolísání teploty. <SourceLink id="DOI_10_1175_JCLI_D_20_0312_1">(Amdur a kol. 2021)</SourceLink>
      </p>
      <p>
        V Gordonově modelu je kondenzačním jádrem částice, na níž se vytvoří kapka při přesycení vodní páry o 0,2 %. Vzduch za této podmínky obsahuje o 0,2 % víc páry, než odpovídá nasycení nad rovnou vodní hladinou při stejné teplotě. Vlhkost je podmínka, kterou vědci zadali před výpočtem. Až z výsledků pro sluneční minimum a maximum pak určili změnu počtu jader. <SourceLink id="DOI_10_1002_2017JD026844">(Gordon a kol. 2017)</SourceLink>
      </p>
      <p>
        Model růstu částic vychází z měření v komoře. Samostatně tedy zkouší hlavně to, co se s částicemi děje po jejich vzniku. <SourceLink id="DOI_10_1002_2017JD026844">(Gordon a kol. 2017)</SourceLink> Družicové studie sledují skutečné oblaky, ale záleží na výběru událostí, oblasti i na tom, s jakým odstupem se po poklesu kosmického záření hledá změna. <SourceLink id="DOI_10_5194_acp_8_7373_2008">(Kristjánsson a kol. 2008)</SourceLink>{" "}<SourceLink id="DOI_10_1038_s41598_021_99033_1">(Svensmark a kol. 2021)</SourceLink> Silné zesílení přes oblaky by podpořilo, kdyby další týmy při opakovaných poklesech zachytily celý sled změn od ionizace přes počet jader až po odpovídající úbytek odraženého světla. Tak by se dal prověřit i výsledek z pěti nejsilnějších událostí. <SourceLink id="DOI_10_1038_s41598_021_99033_1">(Svensmark a kol. 2021)</SourceLink>
      </p>
    </details>

    <h2 id="shrnuti">Shrnutí mechanismu</h2>
    <div className="method-conclusion">
      <p>
        V aktivnější části cyklu vysílá Slunce k Zemi o něco víc energie. V horní stratosféře pohlcuje ozon více ultrafialového záření a vzduch se ohřívá. U povrchu část tepla ukládá oceán, takže se oteplení rozloží v čase. Pokud se sluneční příkon od minima k maximu zvýší o 1 W/m², vychází z teplotních záznamů globální oteplení u povrchu asi o 0,05 °C. Pro výrazné zesílení tohoto výkyvu působením kosmického záření na oblaky zatím chybí přesvědčivý doklad.
      </p>
    </div>
    <aside className="article-related-mechanism" aria-label="Navazující vysvětlení"><p>Zda může Slunce vysvětlit i dlouhodobé oteplování posledních desetiletí, zkoumá <Link href="/mechanismy/energeticka-bilance-zeme/#slunecni-hypoteza">porovnání příčin přibývání energie</Link>. Jak se může měnit i množství tepla, které Země vyzáří do vesmíru, vysvětluje článek <Link href="/mechanismy/radiacni-pusobeni-sklenikovych-plynu/">Proč další CO₂ mění tepelné záření Země?</Link></p></aside>

    <h2 id="prameny">Prameny a veřejná data</h2>
    <div className="article-source-groups">
      <section><h3>Kosmické záření, částice a oblaka</h3><ul>
        <li><SourceLink id="DOI_10_1016_S1364_6826_97_00001_1">Svensmark a Friis-Christensen 1997</SourceLink>: historický návrh vazby a porovnání oblačnosti s kosmickým zářením.</li>
        <li><SourceLink id="DOI_10_1126_science_aaf2649">Dunne a kol. 2016</SourceLink>: řízené komorové pokusy CLOUD a model vzniku částic.</li>
        <li><SourceLink id="DOI_10_1002_2017JD026844">Gordon a kol. 2017</SourceLink>: růst a ztráty částic, sluneční porovnání v oddílu 3.5 a tabulce 4.</li>
        <li><SourceLink id="DOI_10_5194_acp_8_7373_2008">Kristjánsson a kol. 2008</SourceLink>: družicový test 22 Forbushových poklesů, otevřený článek i recenzní diskuse.</li>
        <li><SourceLink id="DOI_10_1038_s41598_021_99033_1">Svensmark a kol. 2021</SourceLink>: odlišný výsledek pěti nejsilnějších událostí a radiační bilance, doplňkové údaje u článku.</li>
      </ul></section>
      <section><h3>Záření a teplotní odezva</h3><ul>
        <li><SourceLink id="DOI_10_1029_2010GL045777">Kopp a Leanová 2011</SourceLink>: družicový příkon, jeho proměnlivost a laboratorní kontrola kalibrace.</li>
        <li><SourceLink id="DOI_10_1029_2009RG000282">Grayová a kol. 2010</SourceLink>: přehled fyziky a historie slunečního působení, zejména oddíl 4.2.</li>
        <li><SourceLink id="DOI_10_1175_jcli_d_15_0629_1">Randel a kol. 2016</SourceLink>: původní zpracování družicových teplot a sluneční složka v obrázku 15.</li>
        <li><SourceLink id="DOI_10_1175_JCLI_D_20_0312_1">Amdur, Stine a Huybers 2021</SourceLink>: velikost povrchové odezvy, porovnání postupů a modelová kontrola.</li>
        <li><SourceLink id="DOI_10_1017_9781009157896_009">IPCC AR6, kapitola 7</SourceLink>: společné vyhodnocení slunečního působení v oddílech 7.3.4.4 a 7.3.4.5.</li>
      </ul></section>
      <section><h3>Data a obrazové podklady</h3><ul>
        <li><SourceLink id="DATA_AMDUR_2021_SOLAR">Amdur 2021: veřejná data a kód</SourceLink>: autorský repozitář obsahuje vstupní teploty a působící vlivy i skripty pro výpočty teplotní odezvy.</li>
        <li><SourceLink id="DATA_SORCE_TIM_V20">SORCE TIM Level 3, verze 20</SourceLink>: denní měření 25. 2. 2003 – 25. 2. 2020. <Link href="/pozorovani/slunecni-zareni/#data">Kopie dat a reprodukce grafu</Link>.</li>
        <li><SourceLink id="WEB_University_Corporation_for_A_Stratospheric_Temperature_Satellite_Datasets_Use_394cf021">NCAR: družicové teploty stratosféry</SourceLink>: veřejné datové soubory, navazující dokumentace a grafy.</li>
        <li><a href={`${media}/podklady.csv`}>Číselné podklady grafik</a> a <a href={`${media}/podklady.txt`}>jejich význam a prameny</a>. Jde o přepis zveřejněných výsledků, nikoli o surová měření.</li>
        <li>Vlastní grafiky <a href={`${media}/kosmicke-zareni.png`}>kosmického záření</a> a <a href={`${media}/zmeny-zareni.png`}>působení proměnlivého záření</a>, vytvořené pomocí AI, CC BY 4.0.</li>
      </ul></section>
    </div>
  </div></article>;
}
