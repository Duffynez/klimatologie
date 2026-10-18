import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import { Equation, InlineMath } from "./Equation";
import example from "../../public/data/methods/tide-gauges/example.json";

const dataPath = "/data/methods/tide-gauges";
const number = (value: number) => value.toLocaleString("cs-CZ", { minimumFractionDigits: 3, maximumFractionDigits: 3 });

export function TideGaugeArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Relativní hladina</dt><dd>Výška hladiny vzhledem k místní pevnině. Mění se při pohybu vody i při pohybu souše.</dd></div>
          <div><dt>Výšková reference</dt><dd>Nula, od které se počítají výšky. Její návaznost na fyzické body musí být známá i po výměně přístroje.</dd></div>
          <div><dt>Nivelace</dt><dd>Geodetické měření výškového rozdílu mezi body, například mezi značkou na pevnině a uložením čidla.</dd></div>
          <div><dt>GNSS</dt><dd>Globální družicové navigační systémy. Dlouhodobé geodetické měření jejich signálů umožňuje určit pohyb pevniny.</dd></div>
        </dl>
        <p className="article-glossary__note">Číslo o výšce hladiny potřebuje místo, čas, jednotku a výškovou nulu. Při porovnávání výšek převádíme údaje ke společné nule.</p>
      </aside>

      <div className="article-prose">
        <h2>Jak pobřežní vodočet měří hladinu</h2>
        <p className="article-prose__intro">
          Pobřežní vodočet je přístroj, který opakovaně měří výšku mořské hladiny vůči
          zvolené místní nule. Tato nula se nazývá výšková reference. Její polohu
          uchováváme pomocí značek na pevnině, jejichž výškové vztahy jsou změřené.
          Záznam vodočtu tak ukazuje, jak voda stoupá a klesá vzhledem ke konkrétnímu pobřeží.
        </p>
        <p>
          Podrobně si vysvětlíme radarový vodočet WaterLog H-3611i. Jeho použití
          v pobřežní síti popisuje <SourceLink id="2013_NOAA_Radar_Installation">příručka
          amerického Národního úřadu pro oceán a atmosféru, zkráceně NOAA</SourceLink>.
          Radar je upevněný nad vodou a měří vzdálenost k jejímu povrchu.
          K určení výšky hladiny potřebujeme tuto vzdálenost spojit se známou výškou přístroje.
        </p>

        <h3>Vzdálenost z radarového odrazu</h3>
        <p>
          Radar vysílá krátké impulzy mikrovlnného záření, tedy elektromagnetických
          vln, které se vzduchem šíří rychlostí blízkou rychlosti světla.
          Anténa míří svisle dolů. Část záření se od vody odrazí a vrátí se k přístroji.
          Přijímač zachytí odraz a elektronika změří dobu mezi vysláním a návratem impulzu.
        </p>
        <p>
          Rychlost šíření vynásobená dobou letu udává délku uražené cesty.
          Impulz však urazil vzdálenost k vodě dvakrát, jednou dolů a jednou zpět.
          Vzdálenost radaru od hladiny proto získáme vydělením celé cesty dvěma:
        </p>
        <Equation tex={String.raw`r = \frac{c\,\Delta t}{2}`} />
        <p>
          r je vzdálenost k hladině v metrech, c rychlost šíření záření ve vzduchu
          v metrech za sekundu a Δt doba letu tam a zpět v sekundách. Značka Δt
          označuje časový rozdíl mezi vysláním a přijetím. Při svislém zaměření
          tak dostáváme svislou vzdálenost mezi měřicím počátkem radaru a vodou.
          Měřicí počátek je místo, od kterého přístroj vzdálenosti počítá.
        </p>
        <p>
          Radar osvětluje určitou plochu vody. Jeho záření se rozbíhá do svazku,
          který se směrem od antény rozšiřuje. Přístroj se proto vysouvá na pevném
          rameni nad volnou vodu, aby ve svazku nebyly pilíře, žebříky ani jiné
          překážky. Technik při instalaci prohlédne záznam síly odrazů podle
          vzdálenosti a ověří, že přístroj sleduje odraz od hladiny.
        </p>
        <p>
          Popsaný model pracuje na frekvenci 26 GHz, tedy 26 miliard kmitů za sekundu.
          Podle <SourceLink id="2013_NOAA_Radar_Installation">instalační příručky</SourceLink>{" "}
          má úhel svazku 10° a největší měřicí vzdálenost 40 m. Úhel určuje,
          jak rychle se svazek rozšiřuje, a pomáhá zvolit délku ramene nad vodou.
        </p>

        <h3>Kalibrace vzdálenosti</h3>
        <p>
          Převod radarového signálu na vzdálenost se kalibruje porovnáním se známými
          vzdálenostmi. Před radar se umístí pevný terč a jeho poloha se změří
          referenčním měřidlem. Radar sleduje terč v několika polohách.
          Pro každou tak získáme dvojici hodnot: vzdálenost podle radaru
          a vzdálenost podle reference.
        </p>
        <p>
          <SourceLink id="2011_NOAA_Radar_Evaluation">Heitsenrether a Davis ve zprávě NOAA z roku 2011</SourceLink>{" "}
          doporučují polohy přibližně 2, 4, 6, 8 a 12 m od čidla a alespoň minutu
          měření v každé z nich. Skutečná vzdálenost terče se při každém umístění
          určí přesněji referenčním měřením. Rozdíly ukážou, zda radar všechny
          vzdálenosti posouvá podobně, nebo se odchylka se vzdáleností mění.
        </p>
        <p>
          Opakuje-li se určitá závislost rozdílu na vzdálenosti, lze z ní určit
          vztah pro opravu odečtů. Kalibrace tak poskytuje doložené spojení mezi
          údajem přístroje a měřenou vzdáleností. Záznamová jednotka stanice již
          od radaru přebírá vypočítanou vzdálenost v metrech.
        </p>

        <h3>Výška přístroje a výška vody</h3>
        <p>
          Vzdálenost k vodě nyní známe. Abychom ji převedli na výšku hladiny,
          potřebujeme ještě výšku měřicího počátku radaru nad zvolenou nulou.
          Tuto výšku označíme H. Určuje se geodetickým měřením, které propojuje
          přístroj se značkami na pobřeží.
        </p>
        <p>
          Značky bývají například kovové body zasazené do skalního podloží nebo
          stabilních staveb. Měření výškových rozdílů mezi nimi se nazývá
          <strong> nivelace</strong>. Nivelační přístroj vodorovně zaměřuje svislé měřicí latě
          postavené na jednotlivých bodech. Rozdíl odečtů určí, o kolik leží jeden
          bod výše než druhý. Stejným postupem lze připojit i bod na držáku vodočtu.
        </p>
        <p>
          U popsaného radaru stojí lať na označeném místě montážního límce,
          plochého kovového kotouče kolem čidla. Známe také výškový vztah této
          plochy k měřicímu počátku radaru. Nivelace tak umožní určit H,
          kterou potřebujeme pro převod vzdálenosti na výšku vody.
          Podobu límce i postup popisuje <SourceLink id="2013_NOAA_Radar_Installation">NOAA</SourceLink>.
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/tide-gauges/noaa-radar-levelling.jpeg"
            alt="Dvě fotografie měření výškové reference na pobřežní stanici. Vlevo technik u celé sestavy, vpravo měřicí lať vedle radarového čidla na rameni nad vodou."
            width={1120} height={754} sizes="(max-width: 700px) 100vw, 770px" unoptimized />
          <figcaption>
            Měření výškové reference radarového vodočtu WaterLog H-3611i.
            Vlevo je pohled na sestavu stanice, vpravo detail čidla a měřicí latě
            u montážního límce. Límec poskytuje určený bod pro geodetické připojení
            přístroje. Fotografie: <SourceLink id="2013_NOAA_Radar_Installation">NOAA CO-OPS,
            instalační příručka, dolní část obrázku 3-9 na straně 29</SourceLink>.
            Převzato podle <SourceLink id="WEB_NOAA_Using_Content_FAQ">podmínek použití NOAA</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Od výšky přístroje H odečteme svislou vzdálenost r k vodě.
          Zbude výška hladiny h nad stejnou nulou:
        </p>
        <Equation tex={String.raw`h = H-r`} />
        <p>
          Všechny tři veličiny jsou v metrech. H popisuje polohu měřicího počátku
          radaru, r vzdálenost od něj k vodě a h polohu vody. Když voda stoupá,
          vzdálenost r se zkracuje. Odečítáme tedy menší číslo a výsledná výška h roste.
        </p>
        <p>
          Při výměně přístroje změříme výšku nového čidla vůči stejným pobřežním
          značkám. Jeho odečty tak můžeme převést ke stejné nule jako starší záznam.
          Kde je to možné, oba přístroje po určitou dobu pracují současně.
          Souběh poskytne přímé porovnání jejich údajů během stejných změn hladiny.
          <SourceLink id="2026_NOAA_Tidal_Datums"> NOAA doporučuje</SourceLink> připojení
          k více značkám, přednostně ke třem. Opakovaná nivelace pak sleduje
          výškové vztahy mezi značkami i přístrojem.
        </p>

        <h3>Volba výškové nuly</h3>
        <p>
          Geodetické značky uchovávají výškové vztahy na pobřeží. Úroveň, kterou
          zvolíme za nulu, však můžeme odvodit z dlouhodobého měření vody.
          Jedna stanice proto může zveřejňovat stejné měření vůči několika
          různým nulám. Často se používá střední hladina nebo reference založená
          na odlivových stavech.
        </p>
        <p>
          <strong>MSL</strong> je zkratka anglického <em>mean sea level</em>, tedy
          střední hladiny moře. NOAA tuto referenci určuje zprůměrováním hodinových
          výšek za stanovené dlouhé období. Průměrná úroveň z tohoto období potom
          slouží jako pevná nula pro vyjadřování dalších výšek.
        </p>
        <p>
          <strong>MLLW</strong>, anglicky <em>mean lower low water</em>, označuje
          průměr nižších denních odlivových hladin. V místech se dvěma odlivy
          za den se vybírá nižší z nich. MSL zahrnuje celý hodinový záznam,
          tedy i vysoké a střední stavy. MLLW proto leží níže než MSL.
          Přesný způsob určení obou referencí stanovují <SourceLink id="2026_NOAA_Tidal_Datums">definice NOAA</SourceLink>.
        </p>
        <p>
          Při převodu stejné vody k vyšší nule vychází menší výška.
          Rozdíl mezi nulami proto odečítáme od původního údaje:
        </p>
        <Equation tex={String.raw`h_{\mathrm{MSL}} = h_{\mathrm{MLLW}} - \Delta Z`} />
        <p>
          h označuje výšku vody a index určuje, od které nuly ji počítáme.
          ΔZ je výškový rozdíl mezi MSL a MLLW, kladný směrem vzhůru od MLLW.
          Všechny hodnoty jsou v metrech a vztah používá reference téže stanice
          pro stejné referenční období. Změnou nuly se celý průběh posune
          o stálou hodnotu. Vzestupy a poklesy zůstanou stejně velké.
          Záporná výška znamená, že voda leží pod příslušnou nulou.
        </p>
        <p>
          Pro dlouhodobé klimatické záznamy potřebujeme udržet stejnou nulu
          po mnoho desetiletí. Tuto návaznost sleduje Stálá služba pro střední
          hladinu moře, zkráceně PSMSL z anglického <em>Permanent Service for Mean
          Sea Level</em>. Shromažďuje pobřežní záznamy i údaje o jejich výškových referencích.
        </p>
        <p>
          PSMSL převádí hodnoty jednotlivé stanice k <strong>revidované místní
          referenci</strong>, označované RLR z anglického <em>Revised Local Reference</em>.
          Využívá přitom doložené změny původních nul a jejich vazby na pobřežní
          značky. Nula RLR se obvykle volí přibližně 7 m pod střední hladinou,
          aby záznam obsahoval kladná čísla. Hodnota kolem 7 000 mm se tedy vztahuje
          k této místní nule. Postup popisuje <SourceLink id="WEB_Permanent_Service_for_Mean_S_Revised_Local_Reference_RLR_Definition_25cc4b55">definice RLR</SourceLink>.
        </p>

        <h3>Zpracování časového záznamu</h3>
        <p>
          Vodní povrch se neustále pohybuje. Krátké vlny způsobují rychlé kolísání
          jednotlivých odečtů, zatímco příliv a odliv mění hladinu v průběhu hodin.
          Pro zveřejňované údaje proto stanice sdružuje krátké odečty do průměrů.
          <SourceLink id="2025_NOAA_Water_Level_Specifications"> Specifikace NOAA z prosince 2025</SourceLink>{" "}
          uvádí pro pobřežní mikrovlnná čidla 360 vzorků měřených po jedné sekundě.
          Každých šest minut tak vznikne jedna souhrnná výška hladiny. Její
          časová značka odpovídá středu intervalu, ze kterého se vzorky průměrují.
        </p>
        <p>
          Před výpočtem výsledného průměru se zkoušejí odlehlé hodnoty, tedy odečty
          neobvykle vzdálené od ostatních. Postup používá hranici tří směrodatných
          odchylek od průměru. Směrodatná odchylka vyjadřuje, jak jsou hodnoty
          kolem průměru rozptýlené. Hranice kontroly tak vychází z kolísání
          konkrétního souboru krátkých odečtů.
        </p>
        <p>
          NOAA rozlišuje předběžné a ověřené údaje. U ověřených záznamů připojuje
          příznaky, tedy značky výsledku kontroly. Mohou označovat odhadnutou
          hodnotu, dlouhé opakování stejného čísla, nezvyklou rychlost změny nebo
          překročení rozsahu. <SourceLink id="2026_NOAA_Water_Level_API">Dokumentace datového
          rozhraní</SourceLink> umožňuje tyto značky přečíst a vybrat údaje pro další výpočet.
        </p>
        <p>
          Zkontrolované šestiminutové výšky lze dále průměrovat za delší období.
          Pro úplný záznam s pravidelnými rozestupy sečteme všechny výšky a vydělíme
          je počtem hodnot. Každá pak zastupuje stejně dlouhou část období a má
          stejnou váhu. Denní průměr shrnuje konkrétní den, zatímco měsíční a delší
          záznamy umožňují sledovat pomalejší změny hladiny.
        </p>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Postup měření radarovým vodočtem">
            <div><span>1</span><strong>Odraz od hladiny</strong><small>Elektronika měří dobu mezi vysláním a návratem impulzu.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Vzdálenost r</strong><small>Radar převádí signál na vzdálenost, ověřenou kalibrací.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Výška h</strong><small>Nivelace dodá výšku přístroje H. Rozdíl H − r určí výšku vody nad nulou.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Časový záznam</strong><small>Kontrola a průměrování krátkých odečtů poskytují souhrnné výšky.</small></div>
          </div>
          <figcaption>
            Šipky sledují vznik zveřejňovaného údaje. Geodetické měření ve třetím
            kroku dodává samostatný vstup H. Vlastní schéma podle
            <SourceLink id="2013_NOAA_Radar_Installation"> instalační příručky NOAA</SourceLink>,
            Klimatologie.eu, CC BY 4.0.
          </figcaption>
        </figure>

        <h3>Pohyb vody a pohyb pevniny</h3>
        <p>
          Výška zaznamenaná pobřežním vodočtem je <strong>relativní hladina</strong>:
          popisuje polohu vody vůči souši, na které je měření ukotveno.
          Klesající pobřeží se od vodního povrchu vzdaluje směrem dolů, a voda
          proto vůči němu stoupá. Do dlouhodobého záznamu se tak promítá jak pohyb
          moře, tak pohyb pevniny. Jejich vztah rozebírají
          <SourceLink id="DOI_10_1002_2015rg000502"> Wöppelmann a Marcos</SourceLink>.
        </p>
        <p>
          Pohyb pevniny měří stálé geodetické přijímače globálních družicových
          navigačních systémů, označovaných GNSS z anglického <em>Global Navigation
          Satellite Systems</em>. Ze signálů družic určují polohu antény vůči Zemi
          jako celku. Dlouhodobá změna její výšky ukazuje, zda podloží pod přijímačem
          stoupá, nebo klesá.
        </p>
        <p>
          Přijímač se k vodočtu připojuje měřením výškových rozdílů a toto spojení
          se opakovaně kontroluje. Pro stejné období pak můžeme spojit rychlost
          relativní změny hladiny s rychlostí svislého pohybu souše.
          K relativní změně přičteme pohyb souše s jeho znaménkem:
        </p>
        <Equation tex={String.raw`v_{\text{moře}} = v_{\text{relativní}} + v_{\text{souše}}`} />
        <p>
          v označuje rychlost výškové změny, například v milimetrech za rok.
          Index rozlišuje mořský povrch, relativní hladinu a souš. Kladná hodnota
          znamená pohyb vzhůru, záporná pokles. Přičtení záporné hodnoty pro
          klesající pevninu zmenší relativní růst o část způsobenou poklesem pobřeží.
          Výsledkem je rychlost změny mořského povrchu vůči Zemi jako celku.
          Vztah používá pohyb souše v místě vodočtu a rychlosti za stejné období.
        </p>

        <h3>Použití v klimatologii</h3>
        <p>
          Pobřežní vodočty poskytují dlouhé místní záznamy, které lze spojovat
          do obrazu změn ve větších oblastech. <SourceLink id="DOI_10_1038_s41586_020_2591_3">Frederikse
          a kolegové v roce 2020</SourceLink> z těchto záznamů rekonstruovali
          vývoj hladiny od roku 1900. Opravy pohybu souše získávali z GNSS
          i z rozdílu mezi pobřežním a družicovým měřením.
        </p>
        <p>
          Při spojování stanic autoři upravovali místní záznamy také o odhadované
          prostorové rozdíly změn hladiny. Blízké záznamy postupně slučovali,
          přičemž jejich výškové nuly sladili podle společného období měření.
          Tím získali vývoj pro jednotlivé oceánské oblasti. Globální výsledek
          potom vytvořili průměrováním těchto oblastí s vahami podle jejich plochy.
        </p>
        <p>
          Pobřežní záznamy slouží také k porovnávání s <Link href="/metody/radarova-a-laserova-altimetrie">družicovou
          altimetrií</Link>, která měří výšku hladiny z oběžné dráhy.
          Při porovnání se sladí výškový systém, období a oblast, ke které se údaje vztahují.
          Výsledky dlouhodobých měření a jejich prostorové pokrytí rozebírá článek
          o <Link href="/pozorovani/gmsl">globální střední hladině moře</Link>.
        </p>

        <h3>Další vodočty a vývoj záznamu</h3>
        <p>
          Plovákový vodočet sleduje plovák ve studni spojené s mořem. Vodní hladina
          ve studni stoupá a klesá spolu s mořem, zatímco spojení tlumí krátké vlny.
          Plovák tento pohyb přenáší na záznamový mechanismus. <SourceLink id="DOI_10_1098_rstl_1831_0013">Henry
          R. Palmer v roce 1831</SourceLink> popsal spojení plováku s hodinovým
          mechanismem a perem, které kreslilo průběh na posouvaný papír.
        </p>
        <p>
          Palmerův přístroj umožnil soustavně sledovat změny hladiny při úpravách
          londýnských přístavních staveb. Automatický zápis uchoval i průběh mezi
          ručními odečty a během noci. Dnešní plovákové přístroje mohou pohyb
          převádět na digitální údaj snímačem natočení hřídele, jak popisuje
          <SourceLink id="2025_NOAA_Water_Level_Specifications"> specifikace NOAA</SourceLink>.
        </p>
        <p>
          Tlakový vodočet využívá tlak sloupce vody nad čidlem. U probublávacího
          provedení se měří tlak plynu potřebný k jeho vytlačování trubicí do vody.
          Pro převod na výšku vodního sloupce potřebujeme hustotu vody.
          Podle konstrukce také odečítáme atmosférický tlak, aby zůstal tlak
          způsobený vodou. Postup vysvětluje <Link href="/metody/mereni-tlaku-a-hydrostaticke-vysky">měření
          tlaku a hydrostatické výšky</Link>.
        </p>
        <p>
          Akustický vodočet měří dobu návratu zvuku v trubici. Převod na vzdálenost
          vychází z rychlosti zvuku ve vzduchu, která se mění s teplotou.
          Měření teploty proto umožňuje převod průběžně upravovat.
          Tlakové a akustické přístroje s radarem porovnává
          <SourceLink id="2011_NOAA_Radar_Evaluation"> validační zpráva NOAA</SourceLink>.
        </p>

        <h2>Nejistoty a omezení</h2>
        <p>
          Výsledek ovlivňují odrazy na rozvlněné vodě, stabilita uložení čidla
          a návaznost výškové nuly. Pro dlouhodobé změny je podstatný také pohyb
          pevniny. <SourceLink id="2003_Woodworth_Smith_Radar_Bubbler">Porovnání radaru
          a tlakového vodočtu u Liverpoolu</SourceLink> shrnulo po opravě měřítka
          a vyřazení odlehlých hodnot rozdíly do hodnoty 1,50 cm. Ta je odmocninou
          průměru čtverců rozdílů, takže se kladné a záporné odchylky navzájem
          nevyruší. Výsledek popisuje shodu konkrétních přístrojů za podmínek této zkoušky.
        </p>
        <details className="method-details">
          <summary>Podrobněji o nejistotách a ověření</summary>
          <h3>Kalibrace a technické parametry</h3>
          <p>
            Kalibrace určuje převod včetně nejistot. Seřízení mění odezvu přístroje,
            proto po něm vztah znovu ověřujeme. Tyto pojmy rozlišuje
            <SourceLink id="2012_VIM_Calibration"> slovník VIM</SourceLink>.
            Laboratorní zkouška NOAA požadovala rozdíly vůči terči v mezích ±1 cm
            s přihlédnutím k nejistotě reference. Dlouhé sledování pevného terče
            prověřuje šum, pohyblivý terč odezvu na změnu a vodní nádrž rozpoznání hladiny.
          </p>
          <p>
            <SourceLink id="2025_NOAA_Water_Level_Specifications">Specifikace NOAA</SourceLink>{" "}
            uvádí rozlišení 0,001 m a odhad přesnosti vůči referenci ±0,02 m pro
            jednotlivý údaj, ±0,005 m pro měsíční průměr. Rozlišení není velikostí
            chyby. Dokument těmto mezím nepřiřazuje pravděpodobnost pokrytí,
            takže nejde o doložené 95% intervaly. Nejistotu našeho denního průměru
            z nich ani z odpovědi datového rozhraní nevyčíslíme.
          </p>
          <h3>Porovnání přístrojů na moři</h3>
          <p>
            <SourceLink id="2003_Woodworth_Smith_Radar_Bubbler">Woodworth a Smith</SourceLink>{" "}
            porovnávali radar OTT Kalesto s probublávacím vodočtem déle než rok.
            Opravili rozdíl měřítka, tedy velikosti změn zaznamenaných oběma
            přístroji, a vyřadili rozdíly nad 5 cm. Zbývající patnáctiminutové
            rozdíly umocnili, zprůměrovali a odmocnili. Výsledných 1,50 cm
            tak vyjadřuje jejich kvadratickou velikost bez rušení kladných a záporných odchylek.
          </p>
          <p>
            Odhad přibližně 1 cm pro každý přístroj předpokládal podobně velké,
            vzájemně nesouvisející chyby. Oprava měřítka byla určena ze stejných
            dat, na kterých se hodnotila shoda. Přístroje sdílely vodu i místní
            výškové prostředí. Za bouří se rozdíly blížily 5 cm, bez souběžného
            měření vln však nešlo vlivy rozdělit mezi přístroje. Studie odhalila
            také účinek předpokládané hustoty vody a chyb hodin.
          </p>
          <h3>Stabilita a průměrování</h3>
          <p>
            Pevné překážky mohou vytvářet další odrazy, pohyb ramene měnit polohu
            radaru. U plováku záleží na volném pohybu a průchodnosti spojení s mořem.
            Nivelace mezi více značkami odhalí pohyb jedné z nich, společné
            zvedání pobřeží však ponechá jejich rozdíly stejné. Chyba výškové nuly
            posouvá všechny hodnoty, a proto ji průměrování neodstraní.
          </p>
          <p>
            Pole <code>s</code> v prvním záznamu našeho příkladu obsahuje 0,052 m.
            Podle <SourceLink id="2026_NOAA_Water_Level_API">dokumentace NOAA</SourceLink>{" "}
            je to směrodatná odchylka krátkých vzorků, zahrnující skutečné kolísání
            vody. Nevyjadřuje celkovou nejistotu ani chybu průměru. Tu ovlivňuje
            i vzájemná souvislost sousedních vzorků. Výpadky navíc mění zastoupení
            vysokých a nízkých stavů, například chybějící vysoká voda může průměr snížit.
          </p>
          <h3>Dlouhodobý vývoj</h3>
          <p>
            Přijímač GNSS vzdálený od vodočtu může sledovat jiné podloží.
            Krátký geodetický záznam také nemusí vystihovat celé století starších
            měření. Tyto meze rozebírají <SourceLink id="DOI_10_1002_2015rg000502">Wöppelmann
            a Marcos</SourceLink>. U „metrických“ dat PSMSL může chybět doložení
            návaznosti nuly, proto se jejich použitelnost pro trend posuzuje zvlášť.
            Jednodenní průměr z příkladu zachycuje i přílivový průběh, nikoli dlouhodobou MSL.
          </p>
          <p>
            Pobřežní stanice pokrývají oceán nerovnoměrně, proto globální rekonstrukce
            potřebuje další prostorové odhady. Frederikse a kolegové sledovali
            vliv nejistot opakováním výpočtu s různými přípustnými hodnotami vstupů.
            Pokud se pohyb souše odvodí z rozdílu
            družice a vodočtu, následná shoda opraveného vodočtu s toutéž družicí
            není nezávislým ověřením. Také obě výškové reference našeho příkladu
            vycházejí ze stejných měření, jejich shoda kontroluje převod nuly.
          </p>
        </details>

        <h2>Skutečný příklad: jeden den a dvě reference</h2>
        <p>
          Na měření ze San Franciska ukážeme převod výškové nuly a výpočet denního
          průměru. Použijeme <SourceLink id="2025_NOAA_San_Francisco_Day">240 ověřených
          šestiminutových údajů NOAA z 1. ledna 2025</SourceLink>. Pokrývají celý den
          od 00:00 do 23:54 v koordinovaném světovém čase UTC.
          Jde o první den posledního úplného roku před stažením dat v říjnu 2026.
          Tím je výběr určen předem, bez hledání mimořádného přílivu nebo bouře.
        </p>
        <p>
          Výpočet začíná od zveřejněných šestiminutových údajů o hladině v metrech.
          <SourceLink id="2026_NOAA_San_Francisco_Sensors"> Seznam čidel stanice</SourceLink>{" "}
          uvádí mikrovlnné měření. Historická odpověď však neobsahuje původní
          radarové odrazy ani výrobní číslo tehdejšího čidla. Předchozí převod
          signálu na vzdálenost proto dokládá metodická dokumentace.
        </p>

        <h3>Převod od jedné nuly ke druhé</h3>
        <p>
          Nejprve potřebujeme rozdíl mezi oběma referenčními úrovněmi.
          <SourceLink id="2026_NOAA_San_Francisco_Datums"> Metadata stanice</SourceLink>{" "}
          uvádějí pro období 1983–2001 výšku MLLW 1,822 m a MSL 2,773 m nad
          společnou staniční nulou. Odečtením těchto výšek získáme vzdálenost mezi
          referencemi: <InlineMath tex={String.raw`2{,}773 - 1{,}822`} /> = <strong>0,951 m</strong>.
          Nula MSL leží o tuto vzdálenost výše než MLLW.
        </p>
        <p>
          Výšku téže vody nyní vyjádříme od vyšší nuly MSL. Od původního údaje
          vůči MLLW proto odečteme 0,951 m:
        </p>
        <Equation tex={String.raw`h_{\mathrm{MSL}} = h_{\mathrm{MLLW}} - 0{,}951\,\mathrm{m}`} />
        <p>
          h je výška hladiny v metrech a index označuje použitou nulu.
          První záznam v 00:00 udává 0,035 m vůči MLLW. Dosazením vyjde
          <InlineMath tex={String.raw`0{,}035 - 0{,}951 = -0{,}916\,\mathrm{m}`} />.
          Voda tedy leží 0,035 m nad MLLW a současně 0,916 m pod MSL.
        </p>
        <p>
          Stejnou hodnotu odečteme od každého z 240 záznamů. Pro kontrolu jsme
          stáhli údaje za tentýž den také přímo vůči MSL. Všechny přepočtené
          výšky souhlasí s touto druhou odpovědí NOAA. Tabulka ukazuje čtyři
          okamžiky a graf celý průběh dne.
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" aria-label="Čtyři hodnoty přepočtu hladiny" tabIndex={0}>
            <table>
              <caption>Čtyři kontrolní okamžiky z 240 hodnot</caption>
              <thead><tr><th>Čas UTC</th><th>Vůči MLLW <span className="method-data-output__unit">m</span></th><th>Vůči MSL <span className="method-data-output__unit">m</span></th></tr></thead>
              <tbody>{example.result.checkRows.map((row) => <tr key={row.time}><th scope="row">{row.time}</th><td>{number(row.mllwM)}</td><td>{number(row.mslM)}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/tide-gauges/san-francisco-datums.png"
            alt="Dvě stejně tvarované křivky hladiny v San Francisku 1. ledna 2025, lišící se pouze svislým posunem 0,951 metru podle výškové reference."
            width={1600} height={1120} sizes="(max-width: 900px) 100vw, 900px" unoptimized />
          <figcaption>
            Vodorovná osa ukazuje čas UTC, svislá výšku vody v metrech nad zvolenou nulou.
            Modrá plná čára používá MLLW, hnědá přerušovaná MSL. Obě mají stejné vzestupy a poklesy,
            protože spojují šestiminutové hodnoty téhož měření. Jejich stálý svislý odstup 0,951 m
            je rozdíl referencí. Druhá čára tak ukazuje změnu nuly, nikoli měření druhým přístrojem.
            Vlastní graf z <SourceLink id="2025_NOAA_San_Francisco_Day">dat NOAA</SourceLink>, Klimatologie.eu, CC BY 4.0.
          </figcaption>
        </figure>

        <h3>Denní průměr a rozsah kolísání</h3>
        <p>
          Záznam je úplný a hodnoty mají pravidelné rozestupy. Každá proto
          zastupuje stejně dlouhou část dne. Denní průměr získáme součtem všech
          240 výšek a vydělením počtem hodnot. Vyjde <strong>{number(example.result.meanMllwM)} m
          vůči MLLW</strong> a <strong>{number(example.result.meanMslM)} m vůči MSL</strong>.
          Také průměry se liší o 0,951 m, protože jsme tuto hodnotu odečetli
          od každého jednotlivého záznamu.
        </p>
        <p>
          Nejnižší šestiminutová výška byla −0,358 m v 02:18, nejvyšší 1,973 m
          v 19:30 vůči MLLW. Rozdíl maxima a minima činí {number(example.result.rangeM)} m.
          Stejný rozsah dostaneme i vůči MSL. Při odečtení minima od maxima
          se totiž společný posun obou výšek vyruší.
          Rozsah zde popisuje kolísání šestiminutových výšek během dne.
        </p>
        <details className="method-details">
          <summary>Data, výškové body a opakování výpočtu</summary>
          <p>
            Vstupy jsme stáhli 4. října 2026 pro stanici San Francisco 9414290.
            Požadavek vybírá produkt <code>water_level</code>, metry, časovou volbu
            <code> gmt</code> a den od 00:00 do 23:54 UTC. Všechny hodnoty mají
            stav <code>q=v</code>, tedy ověřeno, a nulové příznaky <code>f=0,0,0,0</code>.
            Žádná hodnota nechybí a žádnou nedoplňujeme.
          </p>
          <p>
            Vazbu referencí na pevninu dokládá také <SourceLink id="2003_NOAA_San_Francisco_Benchmarks">výškový
            list stanice vydaný v roce 2003</SourceLink>. Značce „180 1936“
            přiřazuje výšku 3,972 m nad MLLW. Jde o doložený vztah v tomto listu,
            nikoli o tvrzení, že poloha značky zůstala od roku 1936 beze změny.
            Výšky MLLW a MSL pro výpočet přebíráme z metadat pro období 1983–2001.
          </p>
          <p>
            Uloženy jsou původní odpovědi rozhraní bez přepisu. Soubor s metadaty
            obsahuje úplné adresy požadavků, datum přístupu a kontrolní otisky
            SHA-256, které ověřují shodu souborů. Skript kontroluje stanici,
            jednotky, čas, referenční období, všech 240 okamžiků a kvalitu údajů.
            Při chybějící hodnotě skončí chybou. Platné záporné výšky zachová.
          </p>
          <p>
            Stáhněte do jedné složky <a href={`${dataPath}/water-level-mllw.json`} download>měření vůči MLLW</a>,{" "}
            <a href={`${dataPath}/water-level-msl.json`} download>měření vůči MSL</a>,{" "}
            <a href={`${dataPath}/datums.json`} download>výškové reference</a>,{" "}
            <a href={`${dataPath}/example.json`} download>metadata a výsledky</a> a{" "}
            <a href={`${dataPath}/reproduce.mjs`} download>výpočetní skript</a>.
            Příkaz <code>node reproduce.mjs</code> v Node.js 22 nebo novějším
            provede kontrolu souborů a výpočet. Pro graf je k dispozici
            <a href={`${dataPath}/plot.py`} download> skript pro Python s Matplotlib</a>.
          </p>
          <p>
            Převod počítá v celých milimetrech, aby jej neovlivnilo zaokrouhlování
            desetinných čísel v počítači. Průměr ponechává ve výstupu více číslic,
            článek jej zaokrouhluje na milimetry. Dodatečná desetinná místa
            nevyjadřují vyšší přesnost měření.
          </p>
        </details>
        <details className="method-details">
          <summary>Doplňkový výpočet: započtení pohybu souše</summary>
          <p>
            Následující hodnoty jsou vytvořenou ilustrací znamének, nikoli
            měřením ze San Franciska. Uvažujme relativní růst hladiny 4 mm za rok
            a pokles souše o 2 mm za rok ve stejném místě a období.
            Rychlost pohybu souše je při kladném směru vzhůru −2 mm za rok.
            Do vztahu pro pohyb mořského povrchu dosadíme:
          </p>
          <Equation tex={String.raw`v_{\text{moře}} = 4 + (-2) = 2\,\mathrm{mm/rok}`} />
          <p>
            v označuje rychlost výškové změny a index moře se vztahuje k vodnímu
            povrchu vůči Zemi jako celku. Všechny rychlosti jsou v milimetrech za rok.
            Mořský povrch v této ilustraci stoupá o 2 mm za rok. Další 2 mm
            relativního růstu způsobuje klesající pevnina.
          </p>
        </details>

        <div className="method-conclusion">
          <h2>Co nám pobřežní měření ukazuje</h2>
          <p>
            Pobřežní vodočty zachycují změny hladiny vůči konkrétnímu pobřeží,
            od přílivu a odlivu po vývoj trvající desetiletí. Doložená výšková
            reference propojuje měření přes výměny přístrojů. Geodetické údaje
            pak umožňují oddělit podíl pohybu souše. Spojením místních záznamů
            s údaji o dalších oblastech získáváme obraz dlouhodobých změn
            mořské hladiny.
          </p>
        </div>
      </div>
    </article>
  );
}
