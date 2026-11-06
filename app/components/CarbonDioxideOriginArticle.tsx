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
          Na Mauna Loa vzrostl roční průměr oxidu uhličitého z 315,98 ppm v roce 1959 na 427,35 ppm v roce 2025.
          Ppm udává počet molekul CO₂ na milion molekul suchého vzduchu. Dlouhodobý růst zachycují také další
          stanice a vzduch uchovaný v ledu. Měření a jejich porovnání rozebírá{" "}
          <Link href="/pozorovani/atmosfericka-koncentrace-co2/#pozorovani">pozorování atmosférického CO₂</Link>.{" "}
          <SourceLink id="WEB_NOAA_Trends_in_CO2_NOAA_Global_Monitoring_Laboratory_8f52d95b">(NOAA, záznam Mauna Loa)</SourceLink>
        </p>
        <p>
          Odkud přibývající uhlík pochází? Oceán i živá příroda si s atmosférou vyměňují velká množství CO₂.
          Další uhlík uvolňuje spalování paliv a využívání půdy. Projdeme tři vysvětlení hlavního přísunu
          a ukážeme, jak mezi nimi rozlišit. Hledáme příčinu dlouhodobého růstu, vedle ní vysvětlíme i to,
          proč koncentrace během roku kolísá a proč v některých letech roste rychleji.
        </p>

        <h2 id="hypotezy">Tři hypotézy a jejich předpovědi</h2>
        <HypothesisDiagram hypotheses={hypotheses} captionId="carbon-origin-hypotheses-caption"
          context={<p>Uhlík sledujeme při přechodu mezi vzduchem, vodou, rostlinami a půdou. Miliarda tun uhlíku označuje hmotnost samotného uhlíku, bez kyslíku v CO₂. Čistý zdroj více odevzdává, než přijímá. Čisté pohlcování znamená opačný rozdíl. Čísla za rok vyjadřují rychlost změny zásoby. Značka ± uvádí odhadovanou nejistotu výsledku.</p>}
          caption={<>Porovnáváme hlavní čistý přísun pro současný dlouhodobý růst. Jednotlivé procesy mohou působit současně. Druhá možnost zahrnuje i lidské odlesňování, třetí je zachovává jako dílčí zdroj. Starší testy mají vlastní uvedené období. Současné porovnání používá průměr let 2015–2024.</>} />

        <h2 id="pribehy">Jak se původ uhlíku zkoumal</h2>
        <HypothesisStory id="ocean" number={1} title="Hlavním čistým zdrojem je oceán">
          <p>
            Oceán obsahuje rozpuštěný uhlík a přes hladinu si s atmosférou neustále vyměňuje CO₂.
            Při stejné koncentraci ve vzduchu teplejší voda udržuje méně rozpuštěného plynu.
            Oteplení proto podporuje jeho přechod do atmosféry. K hladině se navíc může dostat hlubší voda,
            v níž se uhlík nahromadil rozkladem organických zbytků. Oteplování i změna proudění tak nabízejí
            skutečný mechanismus, kterým může moře CO₂ uvolnit. <SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, oddíl 5.2.1.3)</SourceLink>
          </p>
          <p>
            Roger Revelle a Hans Suess v roce 1957 zkoumali, jak se mezi atmosféru a oceán rozdělí uhlík
            ze spalování paliv. Zvažovali také další příčiny tehdy odhadovaného růstu CO₂, mezi nimi oteplení moře.
            Voda pro ně nebyla bezednou nádobou na přebytečný plyn. Její chemické složení určuje, kolik
            přidaného uhlíku může přijmout a jak rychle při tom vzroste množství CO₂ schopného vracet se do vzduchu.
            Jejich práce tak zároveň pomohla vysvětlit, proč část lidských emisí zůstává v atmosféře.{" "}
            <SourceLink id="DOI_10_1111_j_2153_3490_1957_tb01849_x">(Revelle a Suess 1957, s. 23–26)</SourceLink>
          </p>
          <p>
            O směru dnešní změny rozhodne měření. V jedné oblasti může CO₂ z oceánu vystupovat, zatímco
            jinde se rozpouští. Aby oceán vysvětlil dlouhodobé přibývání uhlíku ve vzduchu jako jeho čistý zdroj,
            musel by za celé sledované období převažovat první směr. První test proto sečte výměnu přes hladinu.
            Druhý hledá pod hladinou stopu pohlcování, které tento součet ukazuje.{" "}
            <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíl 2.5)</SourceLink>
          </p>
          <Graphic name="ocean" alt="Oceánská hypotéza a dvě kontroly přenosu uhlíku. Oteplení a přísun vody z hloubky mohou podporovat uvolňování CO₂. Celková výměna v letech 2015–2024 však směřovala do oceánu. Odhad jeho zásoby antropogenního uhlíku vzrostl mezi roky 1994 a 2007 o 34 ± 4 miliardy tun.">
            Horní část ukazuje možný zdroj, spodní panely výsledky dvou zkoušek. Korálová označuje uvolňování a tyrkysová pohlcování CO₂. Šipka uvnitř vody představuje proudění. „Místní propad“ znamená oblast, která CO₂ čistě přijímá. Šipky nejsou stupnicí velikosti toku. Druhý test ověřuje ukládání zjištěné prvním, samotný odhad antropogenní zásoby nenahrazuje bilanci všech toků. <SourceLink id="DOI_10_1126_science_aau5153">(Gruber a kol. 2019)</SourceLink>{" "}<SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026)</SourceLink>
          </Graphic>
          <h4 id="ocean-hladina" className={styles.testHeading}>První test: přenos přes hladinu</h4>
          <p>
            Nejprve zjistíme, jaký tlak by měl samotný CO₂ v plynu nad vzorkem povrchové vody,
            kdyby se jeho přechod mezi vodou a plynem vyrovnal. Tento takzvaný parciální tlak porovnáme
            s parciálním tlakem CO₂ v okolním vzduchu. Je-li na vodní straně vyšší, výměna směřuje
            do vzduchu. Je-li nižší, voda CO₂ přijímá.
            Rozdíl spolu s větrem pomáhá vypočítat rychlost přenosu. Lodní měření pokrývají mnoho tras, mezery mezi
            nimi doplňují výpočty využívající například teplotu vody. Zpracování jednotlivých oblastí se pak spojí
            do světového součtu. <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíly 2.5 a 3.6)</SourceLink>
          </p>
          <p>
            Výsledek má opačný směr, než potřebuje hypotéza hlavního oceánského zdroje. V letech 2015–2024
            světový oceán v součtu CO₂ přijímal. Souhrnná bilance odhaduje pohlcování přidaného uhlíku na
            3,2 ± 0,4 miliardy tun ročně. Tento údaj porovnává stav s přirozenou výměnou před průmyslovou érou,
            kdy oceán část uhlíku dodaného řekami vracel do vzduchu. Také po započtení tohoto původního
            uvolňování zůstává současný celkový tok směrem do oceánu. Rozdíly mezi výpočty mění velikost příjmu,
            nikoli tento závěr. <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíly 2.5.2 a 3.8.1)</SourceLink>
          </p>
          <h4 id="ocean-zasoba" className={styles.testHeading}>Druhý test: uhlík uvnitř oceánu</h4>
          <p>
            Příjem z atmosféry by měl zanechat stopu i v mořské vodě. Nicolas Gruber a kolegové proto porovnali
            rozsáhlé oceánské výpravy z 90. let s opakovanými odběry v následujícím desetiletí. Rozbory určovaly
            celkový rozpuštěný anorganický uhlík, tedy CO₂ a jeho rozpuštěné chemické formy. Autoři pomocí dalších
            vlastností vody oddělovali změny proudění a biologického rozkladu. Zbývající přírůstek přisoudili
            uhlíku přidanému lidskou činností. Jde o odhad z měření a výpočtu, jehož vznik popisuje také{" "}
            <Link href="/pozorovani/acidifikace-oceanu/#zasoba-uhliku">pozorování zásoby uhlíku v oceánu</Link>.{" "}
            <SourceLink id="DOI_10_1126_science_aau5153">(Gruber a kol. 2019)</SourceLink>
          </p>
          <p>
            Pro roky 1994–2007 vyšel přírůstek 34 ± 4 miliardy tun uhlíku. Rozdělení do hloubek odpovídalo
            vstupu přes hladinu a následnému přesunu vody. Tento výsledek neposkytuje sám o sobě součet všech
            přirozených výměn. Spolu s povrchovými měřeními ale ukazuje dvě stránky téhož děje: uhlík přes
            hladinu přichází a v oceánu se ukládá. Hypotéza, podle níž současný růst atmosférického CO₂ pohání
            převládající oceánské uvolňování, těmto výsledkům neodpovídá.{" "}
            <SourceLink id="DOI_10_1126_science_aau5153">(Gruber a kol. 2019, obr. 1 a tab. 2)</SourceLink>
          </p>
        </HypothesisStory>

        <HypothesisStory id="pevnina" number={2} title="Převažuje úbytek uhlíku z pevninské biosféry">
          <p>
            Pevninskou biosférou zde rozumíme rostliny, další organismy a organický uhlík v půdě.
            Rostliny při fotosyntéze využívají energii světla k tvorbě organických látek z CO₂ a vody.
            Uhlík tak přechází ze vzduchu do listů, dřeva a kořenů. Dýchání organismů, rozklad zbytků a hoření
            jej vracejí jako CO₂. Kdyby dlouhodobě převažovalo uvolňování, zásoba na pevnině by klesala a ve
            vzduchu přibývala. <SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, oddíl 5.2.1.4)</SourceLink>
          </p>
          <p>
            Úlohu rostlin ukazovala už raná měření Charlese Keelinga. Vzduch ovlivněný půdou a vegetací se lišil
            množstvím CO₂ a severní stanice zachycovaly výrazný roční cyklus.
            To otevřelo důležitou otázku: vyrovná se během celého roku příjem s výdejem, nebo pevnina
            dodává uhlík trvale? Samotné letní snížení a zimní zvýšení koncentrace o celoročním rozdílu nerozhoduje.{" "}
            <SourceLink id="DOI_10_1111_j_2153_3490_1960_tb01300_x">(Keeling 1960)</SourceLink>
          </p>
          <p>
            Výzkumníci proto začali sčítat změny lesů, zemědělských ploch a půdních zásob.
            Richard Houghton a kolegové v roce 1983 sestavili výpočet pro 69 regionálních ekosystémů.
            Propojili rozlohu změněné půdy s tím, jak po kácení, obdělávání nebo opětovném růstu ubývá či
            přibývá uhlík. Pro rok 1980 odhadli čisté emise z těchto změn na 1,8 až 4,7 miliardy tun uhlíku.
            Široké rozpětí odráželo zejména neúplné údaje o odlesňování. Byl to významný zdroj, který bylo
            nutné do bilance zahrnout. <SourceLink id="DOI_10_2307_1942531">(Houghton a kol. 1983, s. 235–236)</SourceLink>
          </p>
          <p>
            Tento výpočet se týkal lidského využívání půdy. Pro úplnou pevninskou bilanci však potřebujeme
            také odpověď lesů a půd na změny CO₂, teploty a srážek. Emise z kácení mohou existovat zároveň
            s ukládáním uhlíku jinde. Grafika proto ukazuje oba směry a dvě cesty k jejich rozlišení:
            nejprve společnou změnu CO₂ a kyslíku, potom oddělené výpočty pevninských příspěvků.{" "}
            <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíly 2.3 a 2.6)</SourceLink>
          </p>
          <Graphic name="pevnina" alt="Pevnina současně uhlík uvolňuje a ukládá. Kyslíkový test za roky 1991–1994 odhadl čistý příjem 2,0 ± 0,9 miliardy tun uhlíku ročně. V bilanci 2015–2024 proti emisím z využití půdy 1,4 ± 0,7 stojí pohlcování 2,4 ± 0,8 miliardy tun uhlíku ročně.">
            Horní část porovnává uvolňování při hoření a rozkladu za přístupu kyslíku s ukládáním při růstu.
            Korálové šipky míří z ekosystému do vzduchu, tyrkysové k rostlinám. Spodní hodnoty představují
            čisté příspěvky v uvedených obdobích, údaj 2,4 není celá fotosyntéza. <SourceLink id="DOI_10_1038_381218a0">(Keeling a kol. 1996)</SourceLink>{" "}<SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026)</SourceLink>
          </Graphic>
          <h4 id="pevnina-kyslik" className={styles.testHeading}>První test: společná změna CO₂ a O₂</h4>
          <p>
            Kyslík poskytl další možnost kontroly. Spalování paliv a rozklad organické hmoty za přístupu
            vzduchu kyslík spotřebovávají. Fotosyntéza jej uvolňuje. Rozpouštění CO₂ v oceánu takovou spotřebu
            atmosférického kyslíku samo nevyžaduje. Dva stejné úbytky CO₂ z atmosféry tak mohou zanechat
            rozdílnou stopu v kyslíku podle toho, zda uhlík přijala voda, nebo rostliny.{" "}
            <SourceLink id="DOI_10_1146_annurev_energy_23_1_207">(Bender, Battle a Keeling 1998)</SourceLink>
          </p>
          <p>
            Ralph Keeling a Stephen Shertz v roce 1992 zveřejnili měření, která už dokázala vedle ročního
            kolísání rozlišit i nepatrný dlouhodobý pokles kyslíku. V roce 1996 Keeling, Stephen Piper a Martin
            Heimann použili vzorky z Alertu, La Jolly a mysu Grim ke společné bilanci CO₂ a O₂.
            Z množství a druhu spotřebovaných paliv nejprve vypočítali očekávanou změnu obou plynů.
            Potom hledali kombinaci pevninského a oceánského příjmu, která rozdíl vůči měření vysvětlí.{" "}
            <SourceLink id="DOI_10_1038_358723a0">(Keeling a Shertz 1992)</SourceLink>{" "}
            <SourceLink id="DOI_10_1038_381218a0">(Keeling a kol. 1996)</SourceLink>
          </p>
          <p>
            Pro roky 1991–1994 vyšlo čisté ukládání na pevnině 2,0 ± 0,9 miliardy tun uhlíku ročně.
            Kyslíku ubývalo méně, než by odpovídalo samotnému spalování: část jeho spotřeby vyrovnávala
            tvorba organické hmoty. Další čisté uvolňování z pevniny by působilo opačně.
            Výsledek tedy pro toto období podpořil ukládání, nikoli velký čistý pevninský zdroj.
            Samotné změřené změny plynů odděleně uvádí{" "}
            <Link href="/pozorovani/atmosfericka-koncentrace-co2/#uhlik-a-kyslik">pozorování uhlíku a kyslíku ve vzduchu</Link>.{" "}
            <SourceLink id="DOI_10_1038_381218a0">(Keeling a kol. 1996, obr. 2)</SourceLink>
          </p>
          <h4 id="pevnina-bilance" className={styles.testHeading}>Druhý test: dnešní bilance pevniny</h4>
          <p>
            Novější bilance oddělují dvě položky. První zachycuje změny využití půdy, včetně odlesnění,
            těžby dřeva a následného dorůstání. Druhá popisuje změnu ukládání vyvolanou prostředím, zejména
            rostoucím CO₂, klimatem a přísunem živin. Výpočty sledují růst, dýchání a zásoby uhlíku v ekosystémech.
            Součet lze porovnat s jiným postupem, který hledá povrchové toky odpovídající rozložení CO₂
            v atmosféře a známému proudění vzduchu. <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíly 2.3, 2.6 a 2.7)</SourceLink>
          </p>
          <p>
            Pro roky 2015–2024 vycházejí emise z využívání půdy 1,4 ± 0,7 miliardy tun uhlíku ročně
            a pohlcování při změnách prostředí 2,4 ± 0,8. Rozdíl středních hodnot je přibližně miliarda tun
            ročně ukládaná na pevnině. Výpočet z atmosférického rozložení CO₂ dává čistý příjem
            1,3 ± 0,3 miliardy tun ročně. Kyslíkový odhad 0,7 ± 0,8 má větší nejistotu a sám připouští
            i téměř nulovou bilanci. Společně však tyto postupy nepodporují velký pevninský přísun,
            který by vysvětlil současný atmosférický růst. <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, tab. 7 a oddíl 3.8.1)</SourceLink>
          </p>
          <p>
            Pevnina přesto výrazně ovlivňuje jednotlivé roky. Sucho může omezit růst rostlin,
            teplo urychlit rozklad a požáry uvolnit uložený uhlík. I pouhé zeslábnutí pohlcování nechá
            větší část emisí ve vzduchu. Takto pevnina pomáhá vysvětlit kolísání rychlosti růstu CO₂.
            Odlesňování zase zůstává skutečným lidským zdrojem. Opravit je třeba představu o jejich
            převaze v celkové současné bilanci, nikoli popřít tyto děje.{" "}
            <SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, oddíl 5.2.1.4)</SourceLink>
          </p>
        </HypothesisStory>

        <HypothesisStory id="fosilni-uhlik" number={3} title="Převládají fosilní emise, část přísunu pohltí příroda">
          <p>
            Uhlí, ropa a zemní plyn obsahují uhlík dlouho uložený v zemské kůře. Při spalování se spojuje
            s kyslíkem a přechází do vzduchu jako CO₂. Guy Stewart Callendar v roce 1938 porovnal tehdejší
            údaje o spotřebě paliv se staršími měřeními koncentrace. Odhadl, že lidé za předchozí půlstoletí
            uvolnili přibližně 150 miliard tun CO₂. Měl tím konkrétní zdroj i měřítko jeho velikosti.
            Jeho odhad podílu zůstávajícího ve vzduchu se později zpřesnil spolu s měřením a poznáním oceánu.{" "}
            <SourceLink id="1938_Callendar">(Callendar 1938)</SourceLink>
          </p>
          <p>
            Spotřebu paliv lze evidovat, původ uhlíku však můžeme hledat i přímo ve vzduchu.
            Uhlík má izotopy, tedy atomy téhož prvku s různou hmotností. Nejčastější je uhlík 12,
            menší část tvoří stabilní uhlík 13. Rostliny při fotosyntéze přednostně přijímají lehčí uhlík.
            Z této organické hmoty vznikala i fosilní paliva. Přidávání takového uhlíku proto snižuje
            poměr uhlíku 13 k uhlíku 12 v atmosférickém CO₂. Stejný směr může mít i uvolňování dnešní
            rostlinné hmoty, takže k rozlišení jejich původu potřebujeme další stopu.{" "}
            <SourceLink id="DOI_10_1029_2019GB006170">(Graven, Keeling a Rogelj 2020, oddíly 2–3)</SourceLink>
          </p>
          <p>
            Tou je radioaktivní uhlík 14, označovaný také jako radiouhlík. V atmosféře průběžně vzniká
            a živé rostliny jej přijímají s CO₂. V palivech uložených miliony let se původní radiouhlík
            mezitím rozpadl. Jejich spalování proto přidává uhlík téměř bez něj. Hans Suess už v roce 1955
            rozpoznal takové ředění při porovnávání letokruhů. Dnešní analýzy kombinují oba izotopy se
            znalostí výměny mezi atmosférou, pevninou a oceánem. Princip rozboru vysvětluje{" "}
            <Link href="/metody/hmotnostni-a-izotopova-spektrometrie/">hmotnostní a izotopová spektrometrie</Link>.{" "}
            <SourceLink id="DOI_10_1029_2019GB006170">(Graven a kol. 2020, oddíl 2)</SourceLink>
          </p>
          <p>
            Obrázek spojuje původ uhlíku se dvěma zkouškami. První ukazuje, jak lze pomocí radiouhlíku
            kontrolovat emise celé země. Druhá porovná světový přísun s tím, co zůstává ve vzduchu a co
            přijímají ostatní části systému. Vedle složení uhlíku tak ověříme i jeho množství.
          </p>
          <Graphic name="fosilni-uhlik" alt="Původ uhlíku z fosilních paliv a dvě zkoušky. Fosilní uhlík má rostlinnou izotopovou stopu a téměř neobsahuje radiouhlík. Test USA za rok 2010 odhadl 1,653 ± 0,030 miliardy tun uhlíku z fosilních zdrojů a cementu. Globální bilance 2015–2024 porovnává emise 9,8 a 1,4 s pohlcováním 3,2 a 2,4 a atmosférickým přírůstkem 5,6 miliardy tun uhlíku ročně.">
            Horní část vysvětluje přísun a mísení. Barevné oblaky znázorňují vzorky plynu, nejsou viditelným CO₂.
            Čísla dole přebírají publikované výsledky. U bilance jde o změny vůči přirozenému pozadí, nikoli
            o všechny výměny. Fosilní položka zahrnuje výrobu cementu i odečet jeho následného pohlcování CO₂.
            Význam nejistot a rozdílný rozsah obou testů rozvádí text. <SourceLink id="DOI_10_1073_pnas_1919032117">(Basu a kol. 2020)</SourceLink>{" "}<SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026)</SourceLink>
          </Graphic>
          <h4 id="fosilni-radiouhlik" className={styles.testHeading}>První test: radiouhlík ve vzduchu</h4>
          <p>
            Sourish Basu a kolegové v roce 2020 použili vzorky CO₂ a radiouhlíku z roku 2010,
            odebrané převážně v severoamerické síti NOAA. Model proudění spojoval každý vzorek s oblastmi,
            kterými vzduch před odběrem prošel. Výpočet hledal emise, při nichž by model reprodukoval
            měřené množství i složení CO₂. Autoři opakovali výpočet s různými výchozími emisními mapami,
            aby prověřili, nakolik výsledek určují samotná měření.{" "}
            <SourceLink id="DOI_10_1073_pnas_1919032117">(Basu a kol. 2020)</SourceLink>
          </p>
          <p>
            Pro USA vyšlo 1,653 ± 0,030 miliardy tun uhlíku za rok z fosilních paliv a výroby cementu.
            Uvedená nejistota odpovídá jedné směrodatné odchylce. Ta vyjadřuje rozptyl výsledků,
            který v tomto výpočtu způsobují zahrnuté náhodné chyby.
            Výsledek odpovídal podrobné inventuře Vulcan, ale byl vyšší než několik jiných emisních soupisů.
            Test tak nejen zjistil fosilní příměs. Ukázal také, že měření atmosféry může odhalovat rozdíly
            v evidenci emisí. Jde o regionální kontrolu za jeden rok, která doplňuje světovou bilanci.{" "}
            <SourceLink id="DOI_10_1073_pnas_1919032117">(Basu a kol. 2020, obr. 2–3)</SourceLink>
          </p>
          <h4 id="fosilni-bilance" className={styles.testHeading}>Druhý test: globální bilance</h4>
          <p>
            Uhlík se při těchto přesunech neztrácí. Co přidají emise, musí zvýšit zásobu v atmosféře,
            oceánu nebo na pevnině. Soubor Global Carbon Budget proto spojuje údaje o těžbě a spotřebě
            paliv, výpočty změn využití půdy, změřený růst atmosférického CO₂ a odhady obou pohlcujících
            částí systému. Každá položka má vlastní postup a nejistotu. Jejich součet lze zkontrolovat,
            aniž bychom neznámé pohlcování jen definovali jako chybějící zbytek.{" "}
            <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíl 2)</SourceLink>
          </p>
          <p>
            Tabulka ukazuje roční průměry za celé desetiletí 2015–2024 podle vydání Global Carbon Budget 2025,
            publikovaného v květnu 2026. První dvě položky uhlík do atmosféry přidávají, následující dvě jej
            odebírají. Pohlcování na pevnině je uvedeno odděleně od emisí z využití půdy. Bilance sleduje
            lidský přísun a změny pohlcování vůči přirozenému pozadí. Fosilní položka už odečítá
            karbonataci, tedy postupné vázání CO₂ při chemických reakcích cementových materiálů. <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, tab. 7)</SourceLink>
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
          <p>
            Z uvedených středních hodnot dostáváme jednoduchou
            kontrolu, stále v miliardách tun uhlíku za rok:
          </p>
          <Equation tex={String.raw`9{,}8 + 1{,}4 - 3{,}2 - 2{,}4 \approx 5{,}6`} />
          <p>
            Emise jsou přibližně dvojnásobné oproti tomu, co přibývá ve vzduchu. Oceán a pevnina zbývající
            část přijímají. Desetiletý součet tak vystihuje velikost růstu. Izotopy navíc spojují přísun s fosilním uhlíkem a kyslíkový test podporuje
            rozdělení pohlcování. Právě souběh těchto zkoušek je důvodem, proč současné odborné hodnocení
            přisuzuje průmyslový růst atmosférického CO₂ lidské činnosti.{" "}
            <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026)</SourceLink>{" "}
            <SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, oddíl 5.2.1)</SourceLink>
          </p>
        </HypothesisStory>

        <h2 id="mechanismus">Proč lidský přísun zvyšuje zásobu ve vzduchu</h2>
        <p>
          Oceánská hypotéza neobstála jako vysvětlení současného růstu, protože moře uhlík v součtu přijímá.
          Pevnina vysvětluje část emisí a kolísání mezi roky, ale v hodnoceném desetiletí rovněž převažovalo
          ukládání. Nejlépe proto obstálo vysvětlení založené na fosilních emisích doplněných změnami
          využívání půdy. Jejich velikost i původ odpovídají souboru testů. Nyní zbývá vysvětlit, proč
          se tento přísun hromadí ve vzduchu, přestože příroda část CO₂ pohlcuje.
        </p>
        <h3>Nový přísun do rychlého koloběhu</h3>
        <p>
          Uhlíkový cyklus je soubor přesunů uhlíku mezi atmosférou, vodou, organismy, půdou a horninami.
          Uhlík z fosilních paliv byl po geologicky dlouhou dobu mimo rychlou výměnu vzduchu s oceánem
          a vegetací. Jeho vytěžení a spálení přidává do této výměny další materiál. Když současně
          kácíme les a část jeho zásoby shoří nebo se rozloží, přesuneme do vzduchu také uhlík z pevniny.{" "}
          <SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, oddíl 5.1.1)</SourceLink>
        </p>
        <p>
          Pro atmosférickou koncentraci rozhoduje rozdíl mezi přísunem a odběrem. Velká přirozená výměna
          může mít malý čistý součet, protože se oba směry z velké části vyrovnávají. Další menší přísun
          pak stačí ke změně zásoby, pokud jej nevyrovná stejně velké dodatečné pohlcování.
          Změřený růst proto neposuzujeme podle toho, zda jsou lidské emise větší než veškeré dýchání
          nebo veškerá výměna přes hladinu. Porovnáváme úplnou bilanci přísunů a úbytků.{" "}
          <SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, obr. 5.12)</SourceLink>
        </p>
        <h3>Proč příjem oceánem a pevninou nestačí</h3>
        <p>
          Vyšší koncentrace CO₂ ve vzduchu podporuje jeho přechod do moře. Rozpuštěný CO₂ reaguje
          s vodou a přechází také do hydrogenuhličitanových a uhličitanových iontů, tedy elektricky
          nabitých rozpuštěných částic. Tím může voda přijmout více uhlíku, než kdyby zůstával pouze
          ve formě CO₂. S přibývajícím uhlíkem ale roste i parciální tlak CO₂ na vodní straně. Zmenšuje se tím
          rozdíl, který žene další příjem ze vzduchu. Odnášení uhlíku do hloubky naopak umožňuje
          povrchové vodě přijímat další CO₂. Rychlost ukládání proto závisí na chemii vody i proudění.
          Současnou změnu chemického složení dokládá{" "}
          <Link href="/pozorovani/acidifikace-oceanu/">pozorování acidifikace</Link>.{" "}
          <SourceLink id="DOI_10_1111_j_2153_3490_1957_tb01849_x">(Revelle a Suess 1957)</SourceLink>{" "}
          <SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, oddíl 5.2.1.3)</SourceLink>
        </p>
        <p>
          Také rostliny mohou při vyšším CO₂ přijímat více uhlíku. Výsledná zásoba však závisí na tom,
          kolik nové hmoty vznikne a kolik se spotřebuje dýcháním, rozloží nebo shoří. Růst ovlivňuje voda,
          živiny i teplota. Příjem oceánem a pevninou proto reaguje na rostoucí koncentraci, nemá však
          předem zaručenou velikost rovnou emisím. V hodnoceném desetiletí dohromady zachytil přibližně
          polovinu lidského přísunu. Zbytek se přidal k atmosférické zásobě.{" "}
          <SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, oddíl 5.2.1.4)</SourceLink>{" "}
          <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, tab. 7)</SourceLink>
        </p>
        <h3>Proč se dlouhodobý růst a roční kolísání liší</h3>
        <p>
          Na severní polokouli bývá v jarní a letní části roku silnější příjem vegetací, zatímco mimo
          vegetační období pokračuje návrat uhlíku rozkladem a dýcháním. Vzniká tak roční vlna na dlouhodobě
          rostoucím záznamu. Rozdíly mezi roky závisejí mimo jiné na suchu, požárech a změnách proudění.
          Proto rychlejší růst CO₂ v jednom roce automaticky neznamená stejně velké zvýšení emisí
          z paliv. Stejné emise mohou zanechat větší přírůstek, když příroda pohltí méně.{" "}
          <SourceLink id="DOI_10_1111_j_2153_3490_1960_tb01300_x">(Keeling 1960)</SourceLink>{" "}
          <SourceLink id="DOI_10_1017_9781009157896_007">(IPCC AR6, oddíl 5.2.1)</SourceLink>
        </p>
        <p>
          Pro původ dlouhodobého růstu máme vzájemně se doplňující důkazy. Méně přesné je rozdělení
          pohlcování mezi regiony a jednotlivé roky, zejména na pevnině. Tyto rozdíly ovlivňují velikost
          dílčích příspěvků a vyžadují další měření. <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíl 3.8)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Nejistoty, rozsah platnosti a další kontroly</summary>
          <p>Jednotlivé testy nejsou všechny nezávislé. Atmosférické bilance mohou sdílet emisní inventury, stanice a předpoklady o proudění. Oceánské výpravy přidávají jiný druh měření. Odhad antropogenního uhlíku ale i u nich potřebuje oddělit přirozenou proměnlivost a doplnit neproměřené oblasti. <SourceLink id="DOI_10_1126_science_aau5153">(Gruber a kol. 2019)</SourceLink></p>
          <p>Poměr uhlíku 13 sám nerozlišuje spalování fosilních paliv od rozkladu rostlin. Radiouhlík ovlivňují také výměna se starší vodou a půdou, jaderné provozy a atmosférické zkoušky jaderných zbraní. Ty ve 20. století jeho množství výrazně zvýšily. Dlouhodobý záznam uhlíku 14 proto není jednoduchou klesající křivkou. Rozhoduje výpočet všech důležitých příspěvků spolu s dalšími měřeními. <SourceLink id="DOI_10_1029_2019GB006170">(Graven a kol. 2020)</SourceLink></p>
          <p>Kyslíkovou bilanci ovlivňuje i výměna O₂ s oceánem. Pozdější výpočty zohledňují jeho uvolňování při oteplování moře a změny biologie. Historický odhad z let 1991–1994 proto uvádíme jako tehdejší test s jeho předpoklady. Pro současnou bilanci používáme současné hodnocení. <SourceLink id="DOI_10_1146_annurev_energy_23_1_207">(Bender a kol. 1998)</SourceLink>{" "}<SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíl 2.8)</SourceLink></p>
          <p>Bilance 2015–2024 sleduje lidské narušení uhlíkového cyklu. Oceánský příjem je očištěn o odhad původního uvolňování uhlíku dodaného řekami, 0,65 ± 0,3 miliardy tun ročně. Pevninské pohlcování je oddělené od využívání půdy. Zaokrouhlená desetiletá bilance se uzavírá, rok 2024 však vykazuje rozdíl přibližně 1,7 miliardy tun mezi odhadnutými emisemi a součtem přírůstku a pohlcování. Zvláště odhad pevninského příjmu v tomto roce vyžaduje další zpřesnění. <SourceLink id="DOI_10_5194_essd_18_3211_2026">(Friedlingstein a kol. 2026, oddíly 3.8–3.9)</SourceLink></p>
          <p>U radiouhlíkového testu USA uvedená nejistota nezahrnuje každou možnou systematickou chybu. Autoři například prověřovali citlivost na předepsanou výměnu s biosférou. Výsledek proto neposouváme na celý svět ani na jiné roky. <SourceLink id="DOI_10_1073_pnas_1919032117">(Basu a kol. 2020)</SourceLink></p>
          <p>Současné vysvětlení by zásadně oslabila dlouhodobá a vzájemně slučitelná měření, podle nichž přírodní zásobníky uhlík ve velkém čistě uvolňují, fosilní přísun je podstatně menší než evidovaný a izotopové i kyslíkové změny odpovídají tomuto jinému původu. Zpřesnění samotné jedné položky pohlcování by měnilo rozdělení bilance, nikoli automaticky původ celého atmosférického růstu.</p>
        </details>

        <h2 id="shrnuti">Shrnutí mechanismu</h2>
        <div className="method-conclusion">
          <p>Spalování uhlí, ropy a plynu přidává do rychlého uhlíkového cyklu uhlík z geologických zásob. Další emise vznikají změnami využívání půdy. Oceán a pevninské ekosystémy část přísunu přijímají, ale jeho zbytek zvyšuje množství CO₂ v atmosféře. V průměru let 2015–2024 zůstávala ve vzduchu přibližně polovina lidských emisí.</p>
          <p>Toto vysvětlení podporuje uhlíková bilance, příměs starého uhlíku zjišťovaná izotopy i společné změny CO₂ a kyslíku. Přírodní výměna určuje sezónní vlnu a část rozdílů mezi roky. Oceán a pevnina však v hodnoceném desetiletí dlouhodobý růst celkově tlumily.</p>
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
