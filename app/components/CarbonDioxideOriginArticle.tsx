import Image from "next/image";
import Link from "next/link";
import { Equation } from "./Equation";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./CarbonDioxideOriginArticle.module.css";

const media = "/media/puvod-rustu-atmosferickeho-co2";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "ocean", name: "Hlavním čistým zdrojem je oceán",
    prediction: "Oceán musí za sledované období odevzdávat do atmosféry více uhlíku, než z ní přijímá. Rozhoduje součet přes celou hladinu, ne jednotlivá oblast.",
    test: "Z měření CO₂ ve vodě a vzduchu odhadneme směr a velikost výměny. Opakované odběry v hloubce pak ověří, zda v oceánu přibývá uhlík přijatý z atmosféry.",
    observation: "V desetiletí 2015–2024 převládalo pohlcování. Rozbory vody za roky 1994–2007 nezávisle doložily růst odhadované zásoby uhlíku přidaného lidskou činností o 34 ± 4 miliardy tun.",
    verdict: "Pro současný růst neobstála",
    explanation: "Oceán v uvedených obdobích část přísunu do atmosféry zachycoval. Místní uvolňování CO₂ přitom skutečně probíhá.", state: "rejected",
  },
  {
    id: "pevnina", name: "Převažuje úbytek uhlíku z pevninské biosféry",
    prediction: "Pevninské ekosystémy musí být velkým čistým zdrojem. Rozklad a hoření by kromě CO₂ přidávaly také spotřebu kyslíku nad účinek fosilních paliv.",
    test: "Společně vyhodnotíme CO₂ a kyslík. Výsledek porovnáme s oddělenými odhady emisí z využívání půdy a pohlcování vegetací a půdami.",
    observation: "Kyslíkový test ukázal pro roky 1991–1994 čisté ukládání na pevnině. V bilanci 2015–2024 převyšovalo pohlcování 2,4 ± 0,8 emise z využití půdy 1,4 ± 0,7 miliardy tun uhlíku ročně.",
    verdict: "Skutečný příspěvek, nedostatečné vysvětlení",
    explanation: "Odlesňování přidává CO₂ a počasí mění jeho meziroční růst. Celkovou současnou změnu však převaha pevninského uvolňování nevysvětluje.", state: "insufficient",
  },
  {
    id: "fosilni-uhlik", name: "Převládají fosilní emise, část přísunu pohltí příroda",
    prediction: "Ve vzduchu musí být zjistitelná příměs starého uhlíku z paliv. Fosilní emise a změny využití půdy po odečtení pohlcování musí vysvětlit atmosférický přírůstek.",
    test: "Izotopy uhlíku porovnáme s očekávanou příměsí z paliv. Z emisních statistik, pozorování a výpočtů sestavíme uhlíkovou bilanci a zkontrolujeme její součet.",
    observation: "Radiouhlíkový test v USA zjistil fosilní přísun i jeho velikost. Globální bilance 2015–2024 dává po odečtení pohlcování přibližně 5,6 miliardy tun uhlíku ročně, v souladu s růstem v atmosféře.",
    verdict: "Obstála, dnes přijímaná",
    explanation: "Vysvětluje původ uhlíku, jeho množství i současné ukládání na souši a v oceánu. Zahrnuje rovněž emise z využívání půdy.", state: "supported",
  },
];

function Graphic({ name, alt, children }: { name: string; alt: string; children: React.ReactNode }) {
  return (
    <figure id={`${name}-schema`} className={`article-figure ${styles.explanatoryFigure}`}>
      <div className={styles.figureScroll} tabIndex={0} role="region" aria-label={`${alt.split(".")[0]}, na úzké obrazovce posuvné do stran`}>
        <a href={`${media}/${name}.png`} aria-label="Otevřít vysvětlující grafiku v plné velikosti">
          <Image className="article-figure__media" src={`${media}/${name}.png`} alt={alt} width={1122} height={1402} unoptimized />
        </a>
      </div>
      <figcaption>{children}{" "}Vlastní vysvětlující ilustrace vytvořená pomocí AI, CC BY 4.0. Krajina a přístroje jsou ilustrace. <a href={`${media}/podklady.csv`}>Číselné podklady</a>{" · "}<a href={`${media}/podklady.txt`}>Prameny a licence</a>.</figcaption>
    </figure>
  );
}

export function CarbonDioxideOriginArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2 id="co-vysvetlujeme">Jak si vysvětlujeme přibývání CO₂ v atmosféře</h2>
        <p className="article-prose__intro">
          Na havajské stanici Mauna Loa naměřili v roce 1959 průměrnou roční koncentraci oxidu uhličitého
          315,98 ppm. V roce 2025 už to bylo 427,35 ppm. Jednotka ppm udává, kolik molekul CO₂ připadá na milion
          molekul suchého vzduchu. Tentýž dlouhodobý růst zachycují i <Link href="/pozorovani/atmosfericka-koncentrace-co2/#pozorovani">měření z jiných stanic a rozbory vzduchu uchovaného v ledu</Link>.{" "}
          <SourceLink id="WEB_NOAA_Trends_in_CO2_NOAA_Global_Monitoring_Laboratory_8f52d95b">(NOAA, záznam Mauna Loa)</SourceLink>
        </p>
        <p>
          Když se moře ohřeje nebo v lese zetlí dřevo, může se do vzduchu uvolnit CO₂. Jinde se v téže době
          CO₂ v moři rozpouští a rostoucí stromy ukládají uhlík do dřeva. Mohou oceán a pevnina dlouhodobě
          vydávat víc uhlíku, než kolik ho přijmou? Dalším možným zdrojem je uhlí, ropa a zemní plyn.
          Jejich spalováním se do ovzduší dostává uhlík, který do té doby zůstával v horninách.
        </p>

        <h2 id="hypotezy">Tři hypotézy a jejich předpovědi</h2>
        <HypothesisDiagram hypotheses={hypotheses} captionId="carbon-origin-hypotheses-caption"
          context={<p>Uhlík sledujeme při přechodu mezi vzduchem, vodou, rostlinami a půdou. Miliarda tun uhlíku označuje hmotnost samotného uhlíku, bez kyslíku v CO₂. Čistý zdroj více odevzdává, než přijímá. Čisté pohlcování znamená opačný rozdíl. Čísla za rok vyjadřují rychlost změny zásoby. Značka ± uvádí odhadovanou nejistotu výsledku.</p>}
          caption={<>Porovnáváme hlavní čistý přísun pro současný dlouhodobý růst. Jednotlivé procesy mohou působit současně. Druhá možnost zahrnuje i lidské odlesňování, třetí je zachovává jako dílčí zdroj. Starší testy mají vlastní uvedené období. Současné porovnání používá průměr let 2015–2024.</>} />

        <h2 id="pribehy">Jak se původ uhlíku zkoumal</h2>
        <HypothesisStory id="ocean" number={1} title="Hlavním čistým zdrojem je oceán">
          <p>
            Ve studené mořské vodě se za jinak stejných podmínek rozpustí více CO₂ než v teplé. Když se tedy
            povrch moře ohřeje, může část rozpuštěného plynu uniknout do vzduchu. CO₂ se může
            uvolňovat také tam, kde k hladině vystupuje hlubší voda bohatá na uhlík z rozložených zbytků organismů.{" "}
            <SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, oddíl 5.2.1.3)</SourceLink>
          </p>
          <p>
            Oteplení moře zvažovali už v roce 1957 Roger Revelle a Hans Suess jako jednu z možných příčin tehdy
            odhadovaného růstu CO₂. Zároveň zkoumali, kolik CO₂ ze spalování paliv oceán pohltí. Ukázali, že chemické
            reakce v mořské vodě ovlivňují, jak velká část přijatého uhlíku v ní může zůstat.{" "}
            <SourceLink id="DOI_10_1111_j_2153_3490_1957_tb01849_x">(Revelle a Suess 1957, s. 23–26)</SourceLink> Kdyby oceán sám dodával do atmosféry uhlík, který v ní dlouhodobě přibývá, muselo by se přes jeho
            hladinu za celé sledované období uvolnit víc CO₂, než kolik ho moře přijalo.{" "}
            <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíl 2.5)</SourceLink>
          </p>
          <Graphic name="ocean" alt="Oceánská hypotéza a dvě kontroly přenosu uhlíku. Oteplení a přísun vody z hloubky mohou podporovat uvolňování CO₂. Celková výměna v letech 2015–2024 však směřovala do oceánu. Odhad jeho zásoby antropogenního uhlíku vzrostl mezi roky 1994 a 2007 o 34 ± 4 miliardy tun.">
            Horní část ukazuje možný zdroj, spodní panely výsledky dvou zkoušek. Korálová označuje uvolňování a tyrkysová pohlcování CO₂. Šipka uvnitř vody představuje proudění. „Místní propad“ znamená oblast, která CO₂ čistě přijímá. Šipky nejsou stupnicí velikosti toku. Druhý test ověřuje ukládání zjištěné prvním, samotný odhad antropogenní zásoby nenahrazuje bilanci všech toků. <SourceLink id="DOI_10_1126_science_aau5153">(Gruber a kol. 2019)</SourceLink>{" "}<SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026)</SourceLink>
          </Graphic>
          <h4 id="ocean-hladina" className={styles.testHeading}>Kterým směrem přechází CO₂ přes hladinu?</h4>
          <p>
            Na výzkumné lodi lze porovnat okolní vzduch se vzduchem, který se nechá ustálit v kontaktu se vzorkem
            povrchové vody. V obou se změří parciální tlak CO₂, tedy část celkového tlaku, kterou vytváří tento plyn.
            Je-li parciální tlak CO₂ vyšší u vzorku než v okolním vzduchu, moře na daném místě plyn uvolňuje. Při opačném rozdílu
            ho přijímá. Z rozdílu tlaků a z rychlosti větru se odhaduje, kolik plynu projde přes hladinu.
            Pro celosvětový součet vědci doplňují mezery mezi lodními trasami mimo jiné podle teploty vody.{" "}
            <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíly 2.5 a 3.6)</SourceLink>
          </p>
          <p>
            V letech 2015–2024 pohltil světový oceán podle souhrnné bilance v průměru o 3,2 ± 0,4 miliardy tun
            uhlíku ročně více než před průmyslovou érou. Tehdy moře v součtu uvolňovalo do vzduchu část uhlíku,
            který do něj přinášely řeky, odhadem 0,65 ± 0,3 miliardy tun ročně. Dodatečný příjem je větší než tento
            původní výdej. I po jeho započtení tedy přes hladinu procházelo více CO₂ do oceánu než z něj do ovzduší.{" "}
            <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíly 2.5.2 a 3.8.1)</SourceLink>
          </p>
          <h4 id="ocean-zasoba" className={styles.testHeading}>Kolik uhlíku přibylo pod hladinou?</h4>
          <p>
            Uhlík přijatý přes hladinu může s vodou postupovat do hloubky. Jestli se tam skutečně ukládá,
            lze zjistit opakovanými odběry. Takové vzorky měl tým Nicolase Grubera z výprav v 90. letech 20. století
            a z následujícího desetiletí. Vědci měřili anorganický uhlík rozpuštěný
            ve vodě, který zahrnuje CO₂ i jeho další chemické formy. Z dalších vlastností vody odhadli, jakou část
            změny lze připsat proudění a rozkladu organických zbytků. Tak mohli odlišit{" "}
            <Link href="/pozorovani/acidifikace-oceanu/#zasoba-uhliku">přírůstek zásoby uhlíku z lidských emisí</Link>.{" "}
            <SourceLink id="DOI_10_1126_science_aau5153">(Gruber a kol. 2019)</SourceLink>
          </p>
          <p>
            Za celé období 1994–2007 tak podle odhadu přibylo v oceánu 34 ± 4 miliardy tun uhlíku z lidské činnosti. Jeho rozložení v hloubce odpovídalo tomu, že vstoupil přes hladinu a dál ho nesla voda.
            Odběry tak dokládají ukládání části emisí už v dřívějším období. O celkovém směru výměny v letech
            2015–2024 vypovídají měření na hladině, která zahrnují také přirozené uvolňování CO₂.{" "}
            <SourceLink id="DOI_10_1126_science_aau5153">(Gruber a kol. 2019, obr. 1 a tab. 2)</SourceLink>
          </p>
        </HypothesisStory>

        <HypothesisStory id="pevnina" number={2} title="Převažuje úbytek uhlíku z pevninské biosféry">
          <p>
            V lese najdeme uhlík ve dřevě a kořenech stejně jako v tělech dalších organismů a v odumřelé hmotě
            v půdě. Tyto zásoby sledujeme i v ostatních ekosystémech na souši, které dohromady tvoří pevninskou
            biosféru. Rostliny při fotosyntéze využívají světlo k tvorbě organických látek z CO₂ a vody. Dýcháním,
            rozkladem a při požárech se uhlík vrací do vzduchu. Pokud by na souši dlouhodobě převládal výdej,
            musely by se zásoby uhlíku v rostlinách a půdě zmenšovat.{" "}
            <SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, oddíl 5.2.1.4)</SourceLink>
          </p>
          <p>
            První soustavná měření Charlese Keelinga zachytila na severní polokouli výrazné sezónní kolísání.
            Když během vegetačního období přijímají rostliny více uhlíku, než se ho vrací dýcháním a rozkladem,
            koncentrace CO₂ ve vzduchu klesá. Jakmile fotosyntéza zeslábne, může se poměr obrátit. V místních
            vzorcích Keeling zachytil i CO₂ uvolněný z půdy. Samotná roční vlna však neříká, kolik uhlíku ve
            vegetaci a půdě zůstalo za celý rok.{" "}
            <SourceLink id="DOI_10_1111_j_2153_3490_1960_tb01300_x">(Keeling 1960)</SourceLink>{" "}<SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, oddíl 5.2.1)</SourceLink>
          </p>
          <p>
            Množství uhlíku uvolněného po odlesnění se dá odhadnout ze změn v krajině. Tým Richarda Houghtona
            v roce 1983 spočítal pro 69 regionálních ekosystémů změny zásob po vykácení lesa, obdělávání půdy
            a opětovném zarůstání. Odhady vztáhl k ploše, na které tyto změny proběhly. Za rok 1980 tak vyšel
            čistý únik 1,8 až 4,7 miliardy tun uhlíku do vzduchu. Široké rozpětí odráželo hlavně nejistotu
            v tehdejší rozloze odlesnění.{" "}
            <SourceLink id="DOI_10_2307_1942531">(Houghton a kol. 1983, s. 235–236)</SourceLink> Uhlík ovšem mohou ukládat jiné lesy i půdy. O směru výměny mezi celou pevninou a ovzduším
            proto rozhoduje bilance všech ekosystémů.{" "}
            <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíly 2.3 a 2.6)</SourceLink>
          </p>
          <Graphic name="pevnina" alt="Pevnina současně uhlík uvolňuje a ukládá. Kyslíkový test za roky 1991–1994 odhadl čistý příjem 2,0 ± 0,9 miliardy tun uhlíku ročně. V bilanci 2015–2024 proti emisím z využití půdy 1,4 ± 0,7 stojí pohlcování 2,4 ± 0,8 miliardy tun uhlíku ročně.">
            Horní část porovnává uvolňování při hoření a rozkladu za přístupu kyslíku s ukládáním při růstu.
            Korálové šipky míří z ekosystému do vzduchu, tyrkysové k rostlinám. Spodní hodnoty představují
            čisté příspěvky v uvedených obdobích, údaj 2,4 není celá fotosyntéza. <SourceLink id="DOI_10_1038_381218a0">(Keeling a kol. 1996)</SourceLink>{" "}<SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026)</SourceLink>
          </Graphic>
          <h4 id="pevnina-kyslik" className={styles.testHeading}>Co o ukládání uhlíku prozrazuje kyslík ve vzduchu?</h4>
          <p>
            Při spalování paliv v ovzduší přibývá CO₂ a ubývá kyslíku. Když uhlík ze vzduchu přijímají rostliny
            při fotosyntéze, uvolňují kyslík zpět. Při dýchání a rozkladu za přístupu vzduchu se kyslík naopak
            spotřebovává. Přechod CO₂ do mořské vody takovou výměnu kyslíku nevyžaduje. Změny obou plynů proto pomáhají rozlišit, kolik uhlíku přijala pevnina a kolik oceán.{" "}
            <SourceLink id="DOI_10_1146_annurev_energy_23_1_207">(Bender, Battle a Keeling 1998)</SourceLink>
          </p>
          <p>
            Ralph Keeling a Stephen Shertz v roce 1992 ukázali, že přesná měření poměru kyslíku k dusíku ve vzduchu
            dokážou rozlišit nepatrný dlouhodobý pokles kyslíku i při jeho sezónním kolísání.{" "}
            <SourceLink id="DOI_10_1038_358723a0">(Keeling a Shertz 1992)</SourceLink> V roce 1996 pak Keeling, Stephen Piper a Martin Heimann porovnali{" "}
            <Link href="/pozorovani/atmosfericka-koncentrace-co2/#uhlik-a-kyslik">změny CO₂ a kyslíku</Link> ve vzorcích z Alertu, La Jolly a mysu Grim. Ze spotřeby jednotlivých paliv
            spočítali, kolik kyslíku by při jejich spálení mělo ubýt a kolik CO₂ by mělo přibýt. Pak hledali,
            jak velký příjem uhlíku na souši a v moři odpovídá naměřeným změnám obou plynů.{" "}
            <SourceLink id="DOI_10_1038_381218a0">(Keeling a kol. 1996)</SourceLink>
          </p>
          <p>
            V letech 1991–1994 ubývalo kyslíku pomaleji, než odpovídalo samotnému spalování. Při tehdejších předpokladech
            o výměně kyslíku s oceánem vysvětlovala rozdíl čistá tvorba organické hmoty na souši. Z obou plynů
            autoři odhadli, že pevnina přijala v průměru o 2,0 ± 0,9 miliardy tun uhlíku ročně více, než vydala.{" "}
            <SourceLink id="DOI_10_1038_381218a0">(Keeling a kol. 1996, obr. 2)</SourceLink>
          </p>
          <h4 id="pevnina-bilance" className={styles.testHeading}>Kolik uhlíku pevnina vydala a přijala v letech 2015–2024?</h4>
          <p>
            Pro roky 2015–2024 jsou vedle měření plynů k dispozici také dva odhady vycházející ze změn na souši.
            První zachycuje emise z kácení, obdělávání půdy a těžby dřeva po odečtení uhlíku uloženého
            při následném růstu. Druhý sleduje, jak růst rostlin, dýchání a zásoby uhlíku v půdě
            reagují na koncentraci CO₂, teplotu, srážky a dostupnost živin. Díky tomuto rozdělení se může projevit
            úbytek uhlíku po odlesnění, i když jinde vegetace uhlík získává.{" "}
            <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíly 2.3, 2.6 a 2.7)</SourceLink>
          </p>
          <p>
            Emise ze změn využití půdy činily v tomto desetiletí v průměru 1,4 ± 0,7 miliardy tun uhlíku ročně.
            Vlivem změn prostředí přitom vegetace a půdy pohlcovaly 2,4 ± 0,8 miliardy tun ročně. Podle středních
            odhadů tak na souši zůstávala v průměru jedna miliarda tun uhlíku ročně navíc.
          </p>
          <p>
            Stejný rozdíl lze odhadnout také z měření vzduchu. Vědci podle proudění hledali, kde a v jakém množství
            by pevnina musela CO₂ přijímat nebo vydávat, aby vysvětlili koncentrace naměřené na stanicích.
            Vyšel jim čistý příjem 1,3 ± 0,3 miliardy tun uhlíku ročně. Z kyslíkové bilance vyšlo pro stejné období
            0,7 ± 0,8 miliardy tun ročně. Druhý odhad připouští i malý čistý výdej. Žádný z těchto výsledků však
            neukazuje tak velký úbytek uhlíku na souši, aby mohl vysvětlit dlouhodobý růst CO₂ ve vzduchu.{" "}
            <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, tab. 7 a oddíl 3.8.1)</SourceLink>
          </p>
        </HypothesisStory>

        <HypothesisStory id="fosilni-uhlik" number={3} title="Převládají fosilní emise, část přísunu pohltí příroda">
          <p>
            Při spalování uhlí, ropy a zemního plynu se uhlík z paliv slučuje s kyslíkem a do ovzduší odchází
            jako CO₂. Kolik ho mohlo ve vzduchu přibýt, odhadoval už v roce 1938 Guy Stewart Callendar. Porovnal
            spotřebu paliv se staršími měřeními koncentrace a spočítal, že za předchozí půlstoletí lidé vypustili
            asi 150 miliard tun CO₂. Zde jde o hmotnost celého plynu včetně kyslíku. Podíl emisí, který ve vzduchu
            zůstává, se podařilo zpřesnit až pozdějšími měřeními atmosféry a oceánu.{" "}
            <SourceLink id="1938_Callendar">(Callendar 1938)</SourceLink>
          </p>
          <p>
            Původ uhlíku lze zkoumat i přímo ve vzduchu. Atomy uhlíku se vyskytují v různě těžkých podobách,
            kterým říkáme izotopy. Nejběžnější je stabilní uhlík 12, vzácnější je stabilní uhlík 13.
            Při fotosyntéze rostliny o něco snáze přijímají lehčí uhlík 12. Stejnou stopu si uchovala fosilní paliva vzniklá z dávné organické
            hmoty. Jejich spalováním by se proto měl v atmosférickém CO₂ snižovat poměr uhlíku 13 k uhlíku 12.
            Mezi lety 1850 a 2015 tento poměr skutečně klesl. Stejným směrem jej však může změnit i uhlík
            uvolněný z dnešních rostlin.{" "}
            <SourceLink id="DOI_10_1029_2019GB006170">(Graven, Keeling a Rogelj 2020, oddíly 2–3)</SourceLink>
          </p>
          <p>
            Stáří obou zdrojů pomáhá rozlišit uhlík 14 neboli radiouhlík. V atmosféře průběžně vzniká a živé
            rostliny ho přijímají spolu s ostatním uhlíkem. Je však radioaktivní. Za miliony let v horninách se
            v palivech prakticky všechen rozpadl. Spalováním se proto do vzduchu přidává CO₂ s téměř nulovým
            obsahem uhlíku 14 a jeho podíl v okolním CO₂ se snižuje. Takové ředění rozpoznal už v roce 1955 Hans
            Suess porovnáním uhlíku v letokruzích. Poměr izotopů lze měřit pomocí{" "}
            <Link href="/metody/hmotnostni-a-izotopova-spektrometrie/">hmotnostní spektrometrie</Link>.{" "}
            <SourceLink id="DOI_10_1029_2019GB006170">(Graven a kol. 2020, oddíl 2)</SourceLink>
          </p>
          <Graphic name="fosilni-uhlik" alt="Původ uhlíku z fosilních paliv a dvě zkoušky. Fosilní uhlík má rostlinnou izotopovou stopu a téměř neobsahuje radiouhlík. Test USA za rok 2010 odhadl 1,653 ± 0,030 miliardy tun uhlíku z fosilních zdrojů a cementu. Globální bilance 2015–2024 porovnává emise 9,8 a 1,4 s pohlcováním 3,2 a 2,4 a atmosférickým přírůstkem 5,6 miliardy tun uhlíku ročně.">
            Horní část vysvětluje přísun a mísení. Barevné oblaky znázorňují vzorky plynu, nejsou viditelným CO₂.
            Čísla dole přebírají publikované výsledky. U bilance jde o změny vůči přirozenému pozadí, nikoli
            o všechny výměny. Fosilní položka zahrnuje výrobu cementu i odečet jeho následného pohlcování CO₂.
            Význam nejistot a rozdílný rozsah obou testů rozvádí text. <SourceLink id="DOI_10_1073_pnas_1919032117">(Basu a kol. 2020)</SourceLink>{" "}<SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026)</SourceLink>
          </Graphic>
          <h4 id="fosilni-radiouhlik" className={styles.testHeading}>Dají se emise USA odhadnout ze vzorků vzduchu?</h4>
          <p>
            Vzorek vzduchu vypovídá i o emisích z míst, přes která vzduch před odběrem proudil. Sourish Basu
            a kolegové tuto souvislost využili pro odhad emisí USA za rok 2010. Z větší části měli vzorky ze
            severoamerické sítě amerického úřadu pro oceán a atmosféru (NOAA). Pomocí modelu proudění hledali
            takové rozložení emisí, při kterém by na stanice dorazil vzduch s naměřeným množstvím CO₂ i podílem radiouhlíku.
            Výpočet opakovali s různými výchozími mapami emisí, aby zjistili, nakolik výsledek určuje volba mapy.{" "}
            <SourceLink id="DOI_10_1073_pnas_1919032117">(Basu a kol. 2020)</SourceLink>
          </p>
          <p>
            Pro USA vyšel za rok 2010 odhad 1,653 ± 0,030 miliardy tun uhlíku z fosilních paliv a výroby cementu.
            Také při výrobě cementu se z vápence uvolňuje geologicky starý uhlík. Uvedená nejistota odpovídá jedné
            směrodatné odchylce a zachycuje náhodné chyby zahrnuté do výpočtu. Odhad ze vzorků vzduchu odpovídal
            podrobné americké evidenci emisí Vulcan a převyšoval několik jiných soupisů.{" "}
            <SourceLink id="DOI_10_1073_pnas_1919032117">(Basu a kol. 2020, obr. 2–3)</SourceLink>
          </p>
          <h4 id="fosilni-bilance" className={styles.testHeading}>Odpovídá světová bilance přírůstku CO₂ ve vzduchu?</h4>
          <p>
            Americká měření dávají odhad emisí jedné země. Pro vysvětlení růstu CO₂ v atmosféře jako celku
            potřebujeme znát přísun i pohlcování za celý svět. Jestliže lidé uhlíku
            vypouštějí víc, než kolik ho navíc pohltí oceán a pevnina, rozdíl by měl být měřitelný v atmosféře.
            Global Carbon Budget proto porovnává emise podle spotřeby paliv a změn využití půdy s odhady pohlcování
            z oceánských a pevninských měření a výpočtů. Atmosférický přírůstek se určuje přímo ze změn koncentrace
            CO₂. Kdyby se pohlcování pouze dopočítalo jako chybějící zbytek, vyšla by shoda automaticky.{" "}
            <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíl 2)</SourceLink>
          </p>
          <p>
            Tabulka uvádí průměrné roční hodnoty za období 2015–2024 podle vydání Global Carbon Budget 2025,
            které vyšlo v květnu 2026. První dva řádky sečteme a od výsledku odečteme pohlcování na dalších dvou
            řádcích. Výsledek můžeme porovnat s měřením v posledním řádku. U fosilních paliv a průmyslu je již
            odečten CO₂, který postupně vážou cementové materiály při chemické reakci zvané karbonatace.{" "}
            <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, tab. 7)</SourceLink>
          </p>
          <div className={styles.tableScroll}>
            <table className={styles.budget}>
              <caption>Světová bilance 2015–2024. Miliardy tun uhlíku za rok, ± jedna směrodatná odchylka podle zdroje.</caption>
              <thead><tr><th scope="col">Příspěvek</th><th scope="col">Hodnota</th></tr></thead>
              <tbody>
                <tr><th scope="row">Fosilní paliva a průmysl, po odečtení karbonatace cementu</th><td>9,8 ± 0,5</td></tr>
                <tr><th scope="row">Emise ze změn využití půdy</th><td>1,4 ± 0,7</td></tr>
                <tr><th scope="row">Pohlcování oceánem</th><td>3,2 ± 0,4</td></tr>
                <tr><th scope="row">Pohlcování pevninou při změnách prostředí</th><td>2,4 ± 0,8</td></tr>
                <tr><th scope="row">Změřený přírůstek v atmosféře</th><td>5,6 ± 0,02</td></tr>
              </tbody>
            </table>
          </div>
          <Equation tex={String.raw`9{,}8 + 1{,}4 - 3{,}2 - 2{,}4 \approx 5{,}6`} />
          <p>
            Z 11,2 miliardy tun uhlíku, které lidé za rok v průměru vypustili, tak podle výpočtu zůstalo v atmosféře
            přibližně 5,6 miliardy tun. Přírůstek odvozený z měření atmosférického CO₂ činil za stejné desetiletí
            5,6 ± 0,02 miliardy tun uhlíku ročně.{" "}
            <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026)</SourceLink>
          </p>
        </HypothesisStory>

        <h2 id="mechanismus">Proč část emisí zůstává v atmosféře</h2>
        <p>
          Oceán v letech 2015–2024 uhlík v součtu přijímal. Na pevnině se část uhlíku vracela do vzduchu
          kvůli odlesňování, celkově však i zde převládalo ukládání. Izotopové složení uhlíku spolu se světovou
          bilancí ukazuje na spalování fosilních paliv jako hlavní příčinu růstu.{" "}
          <SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, oddíl 5.2.1)</SourceLink> Spalováním se do výměny mezi vzduchem, vodou a organismy zapojuje uhlík, který byl
          miliony let uložený pod zemí. Moře a rostliny si každý rok vymění s atmosférou mnohem více uhlíku,
          než kolik ho lidé uvolní spalováním paliv. Velikost této výměny však sama o sobě růst koncentrace
          nezastaví. Rozhoduje, kolik uhlíku oceán a pevnina po odečtení vlastního výdeje skutečně uloží.{" "}
          <SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, oddíl 5.1.1)</SourceLink>{" "}<SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, obr. 5.12)</SourceLink>
        </p>
        <h3>Co omezuje pohlcování v oceánu a na souši</h3>
        <p>
          Když ve vzduchu nad hladinou přibývá CO₂, zvětšuje se rozdíl parciálních tlaků, který podporuje
          rozpouštění plynu. Část CO₂ ve vodě chemicky reaguje. Uhlík je pak ve vodě rozpuštěný i v podobě
          hydrogenuhličitanových a uhličitanových iontů, tedy elektricky nabitých částic. Voda tím může pojmout
          více uhlíku, než kdyby všechen zůstával v podobě CO₂. Jak ale přibývá rozpuštěného CO₂, stoupá i jeho
          parciální tlak na straně vody a další příjem zpomaluje. Proudění může část uhlíku odnést do hloubky,
          takže povrchová voda může dál přijímat CO₂ ze vzduchu. Změny složení vody zachycují také{" "}
          <Link href="/pozorovani/acidifikace-oceanu/">měření kyselosti oceánu</Link>.{" "}
          <SourceLink id="DOI_10_1111_j_2153_3490_1957_tb01849_x">(Revelle a Suess 1957)</SourceLink>{" "}<SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, oddíl 5.2.1.3)</SourceLink>
        </p>
        <p>
          Na souši může vyšší koncentrace CO₂ podpořit fotosyntézu. Kolik uhlíku díky tomu uloží třeba les,
          záleží i na tom, zda mají stromy dost vody a živin. Když strom odumře a jeho dřevo se rozkládá, část
          uhlíku se vrací do ovzduší. Pro dlouhodobé pohlcování proto záleží na tom, o kolik se zásoba uhlíku
          v porostu a v půdě za danou dobu zvětší.{" "}
          <SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, oddíl 5.2.1.4)</SourceLink>{" "}<SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, tab. 7)</SourceLink>
        </p>
        <h3>Proč v některém roce přibude více CO₂ než v jiném</h3>
        <p>
          Sezónní pokles a opětovný růst CO₂ se v měřeních z Mauna Loa opakují. Velikost celoročního přírůstku
          se přitom rok od roku mění.{" "}
          <SourceLink id="DOI_10_1111_j_2153_3490_1960_tb01300_x">(Keeling 1960)</SourceLink> V suchém roce mohou rostliny přijmout méně CO₂ a požáry mohou uvolnit uhlík uložený v předchozích
          letech. Mezi roky se mění také rozklad v půdě a proudění v oceánu. V ovzduší tak může přibýt více CO₂
          i při stejné spotřebě paliv.{" "}
          <SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, oddíl 5.2.1.4)</SourceLink>
        </p>
        <p>
          Zvlášť nejistý je odhad, kolik uhlíku v konkrétním roce přijala pevnina. Například v roce 2024 přesáhl součet
          pohlcování a atmosférického přírůstku podle těchto odhadů emise asi o 1,7 miliardy tun uhlíku.
          I když se bilance v průměru za desetiletí uzavírá, v jednotlivém roce v ní může zůstat takto velký rozdíl.{" "}
          <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíly 3.8–3.9)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Co omezuje přesnost odhadů</summary>
          <p>
            Některé odhady pohlcování vycházejí ze stejných stanic, emisních statistik nebo výpočtů proudění.
            Chyba ve společném vstupu se může projevit v několika výsledcích najednou. Rozbory mořské vody
            poskytují jiný druh kontroly, i u nich však záleží na tom, jak se oddělí vliv přirozených změn
            a jak se doplní neproměřené oblasti.{" "}
            <SourceLink id="DOI_10_1126_science_aau5153">(Gruber a kol. 2019)</SourceLink>{" "}<SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíl 3.8)</SourceLink>
          </p>
          <p>
            Při výpočtu fosilních emisí z uhlíku 14 záleží i na jeho dalších zdrojích. Jeho množství v atmosféře
            ovlivňuje výměna se starší
            vodou a půdou, provoz jaderných zařízení a atmosférické zkoušky jaderných zbraní, které ve 20. století
            výrazně zvýšily obsah radiouhlíku. S těmito vlivy je třeba v izotopovém odhadu počítat.{" "}
            <SourceLink id="DOI_10_1029_2019GB006170">(Graven a kol. 2020)</SourceLink>
          </p>
          <p>
            Oceán si s atmosférou vyměňuje také kyslík. Oteplující se voda může část rozpuštěného kyslíku vydat do
            vzduchu. Přisouzení všeho tohoto kyslíku fotosyntéze na souši by nadhodnotilo množství uhlíku, které
            pevnina uložila. Současné odhady proto zahrnují také oteplování vody a změny činnosti mořských organismů.
            Starší odhad z let 1991–1994 vychází z tehdejších předpokladů o této výměně.{" "}
            <SourceLink id="DOI_10_1146_annurev_energy_23_1_207">(Bender a kol. 1998)</SourceLink>{" "}<SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíl 2.8)</SourceLink>
          </p>
          <p>
            U radiouhlíkového odhadu amerických emisí zachycuje údaj ±0,030 miliardy tun zahrnuté náhodné chyby.
            Odlišný předpoklad o výměně uhlíku mezi vzduchem a vegetací však může posunout celý výsledek. Autoři
            proto zkoušeli také citlivost odhadu na tuto výměnu.{" "}
            <SourceLink id="DOI_10_1073_pnas_1919032117">(Basu a kol. 2020)</SourceLink>
          </p>
          <p>
            Kdyby opakované odhady z atmosféry dlouhodobě ukazovaly na podstatně menší fosilní emise, než vycházejí
            ze spotřeby paliv, bylo by nutné jejich příspěvek k růstu CO₂ přehodnotit. Vysvětlení založené hlavně
            na přírodním zdroji by navíc muselo doložit odpovídající úbytek uhlíku v oceánu nebo na souši
            a vysvětlit současně změny izotopů uhlíku i množství kyslíku ve vzduchu.
          </p>
        </details>

        <h2 id="shrnuti">Shrnutí mechanismu</h2>
        <div className="method-conclusion">
          <p>
            CO₂ v atmosféře dlouhodobě přibývá hlavně proto, že spalováním uhlí, ropy a zemního plynu uvolňujeme
            uhlík z geologických zásob. Jeho příměs lze rozpoznat podle izotopového složení CO₂ ve vzduchu.
            Další uhlík se uvolňuje například po vykácení lesa. Rozbory mořské vody a změny kyslíku ve vzduchu
            pomáhají určit, kolik uhlíku oceán a pevnina zase přijaly. V průměru let 2015–2024 takto pohltily
            zhruba polovinu lidských emisí. Druhá polovina zvýšila množství CO₂ v atmosféře.
          </p>
        </div>

        <aside className="article-related-mechanism" aria-label="Navazující vysvětlení">
          <p>Co přibývající CO₂ dělá se zářením, vysvětluje článek <Link href="/mechanismy/radiacni-pusobeni-sklenikovych-plynu/">Proč další CO₂ mění tepelné záření Země?</Link></p>
        </aside>

        <h2 id="prameny">Prameny a veřejná data</h2>
        <div className="article-source-groups">
          <section><h3>Historické kroky</h3><ul>
            <li><SourceLink id="1938_Callendar">Callendar 1938</SourceLink>: bilance spalování a atmosférického přibývání CO₂.</li>
            <li><SourceLink id="DOI_10_1111_j_2153_3490_1957_tb01849_x">Revelle a Suess 1957</SourceLink>: oceánská výměna, chemie mořské vody a možné příčiny růstu.</li>
            <li><SourceLink id="DOI_10_1111_j_2153_3490_1960_tb01300_x">Keeling 1960</SourceLink>: složení vzduchu a sezónní vývoj.</li>
            <li><SourceLink id="DOI_10_2307_1942531">Houghton a kol. 1983</SourceLink>: změny zásob po využití půdy. Veřejný přetisk v příloze D zprávy ORNL/CDIAC-79 začíná na straně 118 souboru PDF.</li>
            <li><SourceLink id="DOI_10_1038_358723a0">Keeling a Shertz 1992</SourceLink> a <SourceLink id="DOI_10_1038_381218a0">Keeling, Piper a Heimann 1996</SourceLink>: přesná kyslíková měření a rozdělení propadů.</li>
          </ul></section>
          <section><h3>Nezávislé testy a výklad</h3><ul>
            <li><SourceLink id="DOI_10_1126_science_aau5153">Gruber a kol. 2019</SourceLink>: odhad změny zásoby antropogenního uhlíku v oceánu, 1994–2007.</li>
            <li><SourceLink id="DOI_10_1073_pnas_1919032117">Basu a kol. 2020</SourceLink>: radiouhlíková kontrola emisí USA za rok 2010.</li>
            <li><SourceLink id="DOI_10_1029_2019GB006170">Graven, Keeling a Rogelj 2020</SourceLink>: fyzika, historie a záznamy izotopů uhlíku.</li>
            <li><SourceLink id="DOI_10_1146_annurev_energy_23_1_207">Bender, Battle a Keeling 1998</SourceLink>: vysvětlení kyslíkové bilance a jejích předpokladů.</li>
            <li><SourceLink id="DOI_10_1017_9781009157896_007">IPCC AR6, kapitola 5</SourceLink>: souhrnné hodnocení uhlíkového cyklu, původu růstu a zpětných vazeb.</li>
            <li><SourceLink id="DOI_10_5194_essd_18_3211_2026">Global Carbon Budget 2025</SourceLink>, Friedlingstein a kol. 2026: postupy a výsledky globální bilance, zejména tabulka 7 a oddíly 2.5–2.8 a 3.6–3.9.</li>
          </ul></section>
          <section><h3>Pozorování, data a podklady grafik</h3><ul>
            <li><SourceLink id="WEB_NOAA_Trends_in_CO2_NOAA_Global_Monitoring_Laboratory_8f52d95b">NOAA: Mauna Loa</SourceLink>: tabulky přímého měření. Použitá čísla odpovídají verzi v navazujícím pozorovacím článku.</li>
            <li><SourceLink id="DATA_GCB_2025">Datový doplněk Global Carbon Budget 2025</SourceLink>: globální a národní bilance, verze 1.0.</li>
            <li><SourceLink id="DATA_GRUBER_2019_OCEAN">NOAA: oceánský uhlík 1994–2007</SourceLink>: původní zpracované výsledky Gruberova týmu a dokumentace.</li>
            <li><SourceLink id="DATA_SCRIPPS_O2">Scripps O₂: veřejná měření</SourceLink>: současné staniční záznamy CO₂ a poměru kyslíku k dusíku.</li>
            <li><a href={`${media}/podklady.csv`}>Přepis čísel použitých v článku a grafikách</a>, <a href={`${media}/podklady.txt`}>význam údajů, prameny a licence</a>. Přepis souhrnných výsledků nenahrazuje původní měření.</li>
            <li>Vlastní grafiky: <a href={`${media}/ocean.png`}>oceán</a>, <a href={`${media}/pevnina.png`}>pevnina</a>, <a href={`${media}/fosilni-uhlik.png`}>fosilní uhlík</a>. Vytvořeno pomocí AI, CC BY 4.0.</li>
          </ul></section>
        </div>
      </div>
    </article>
  );
}
