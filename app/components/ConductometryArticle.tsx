import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import { Equation, InlineMath } from "./Equation";
import example from "../../public/data/methods/conductometry/example.json";

const dataPath = "/data/methods/conductometry";
const number = (value: number, digits = 4) => value.toLocaleString("cs-CZ", {
  minimumFractionDigits: digits, maximumFractionDigits: digits,
});

export function ConductometryArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Elektrická vodivost</dt><dd>Vlastnost látky určující, jak snadno v ní elektrické pole vyvolá proud. U vody závisí na rozpuštěných iontech, teplotě a tlaku.</dd></div>
          <div><dt>Iont</dt><dd>Částice s elektrickým nábojem. Pohyb iontů přenáší elektrický proud v mořské vodě.</dd></div>
          <div><dt>Praktická salinita</dt><dd>Číselný údaj o slanosti vody získaný porovnáním vodivostí podle stupnice PSS-78. Výpočet potřebuje také teplotu a tlak. Výsledek nemá jednotku.</dd></div>
          <div><dt>CTD</dt><dd>Souprava pro měření vodivosti, teploty a tlaku vody. Anglická zkratka znamená Conductivity, Temperature, Depth. Hloubka se počítá z tlaku.</dd></div>
        </dl>
        <p className="article-glossary__note">Stejně slaná voda může mít při jiné teplotě výrazně jinou vodivost. Proto čidlo vodivosti pracuje společně s teploměrem a tlakoměrem.</p>
      </aside>

      <div className="article-prose">
        <h2>Jak konduktometrie měří slanost vody</h2>
        <p className="article-prose__intro">
          Konduktometrie je měření elektrické vodivosti látky, tedy vlastnosti, která
          určuje, jak snadno jí prochází elektrický proud. V mořské vodě proud přenášejí
          částice rozpuštěných solí. Vodivost proto využíváme k určení salinity,
          číselného údaje o slanosti vody. K výpočtu potřebujeme vedle vodivosti znát
          také teplotu a tlak vody.
        </p>
        <p>
          Celý postup vysvětlíme na čidle Sea-Bird SBE 4C používaném v lodních
          soupravách CTD. Zkratka pochází z anglického <em>Conductivity, Temperature,
          Depth</em>, tedy vodivost, teplota a hloubka. Souprava měří vodivost, teplotu
          a tlak, z něhož se hloubka počítá. Výklad navazuje na
          <Link href="/metody/odporova-termometrie-a-termistory"> termometrii</Link> a
          <Link href="/metody/mereni-tlaku-a-hydrostaticke-vysky"> měření tlaku</Link>.
        </p>

        <h3>Proč slaná voda vede proud</h3>
        <p>
          Rozpuštěné soli jsou ve vodě přítomné v podobě <strong>iontů</strong>,
          částic s elektrickým nábojem. Do vody ponoříme elektrody, vodivé části
          připojené k přístroji. Napětí mezi nimi vytváří elektrické pole.
          To usměrňuje pohyb iontů, kladných jedním směrem a záporných
          opačným. Pohyb těchto nábojů tvoří elektrický proud. Měřením elektrické
          odezvy tak získáme informaci o rozpuštěných látkách.
        </p>
        <p>
          Na velikost proudu působí také vzdálenost elektrod a šířka vodní cesty mezi nimi.
          Delší a užší cesta mezi elektrodami klade větší elektrický odpor,
          takže při stejném napětí propouští menší proud.
          Při určování vlastnosti samotné vody proto bereme v úvahu rozměry měřicí části.
        </p>
        <p>
          Výslednou vodivost vody vyjadřujeme v <strong>siemensech na metr</strong>,
          značka S/m. Siemens odpovídá převrácené hodnotě ohmu, jednotky elektrického odporu.
          Zahrnutí rozměrů umožňuje porovnávat vodu měřenou různými přístroji.
        </p>

        <h3>Jak čidlo zaznamená elektrickou odezvu</h3>
        <p>
          U SBE 4C protéká voda skleněnou trubicí se třemi platinovými elektrodami.
          Dvě krajní elektrody jsou propojené a proud prochází vodou mezi nimi
          a prostřední elektrodou. Tato část je zapojená do elektrického obvodu,
          který vytváří pravidelné střídavé kmity. Odpor vody ovlivňuje rychlost
          jeho kmitání. Konstrukci popisuje
          <SourceLink id="2025_SeaBird_SBE4_Datasheet"> technický list SBE 4 z května 2025</SourceLink>.
        </p>
        <p>
          Elektronika zjišťuje <strong>frekvenci</strong>, počet kmitů za sekundu.
          Jeden kmit za sekundu odpovídá hertzu, tisíc kmitů kilohertzu se značkou kHz.
          Frekvence je zaznamenaný signál čidla. Jakou vodivost konkrétní hodnota
          představuje, určíme porovnáním se známými vzorky při kalibraci.
        </p>
        <p>
          Při měření v oceánu žene čerpadlo soupravy
          <SourceLink id="2010_SeaBird_9plus_Manual"> SBE 9plus</SourceLink> vodu nejprve
          kolem teploměru a potom vodivostní trubicí. Voda mezi oběma místy urazí
          určitou vzdálenost, která jí zabere čas. Záznamy proto časově posuneme,
          aby se teplotní odečet spojil s vodivostí téže vody. K této dvojici
          přiřadíme současný tlak.
        </p>
        <p>
          Během průchodu čidlem si voda vyměňuje teplo se skleněnou stěnou.
          Po přechodu soupravy do jiné vrstvy si stěna ještě chvíli uchovává
          teplotu předchozí vody. Zpracování popsané v manuálu proto opravuje
          i tuto tepelnou odezvu. Časové sladění řeší cestu vody mezi čidly,
          tepelná oprava řeší její výměnu tepla s měřicí trubicí.
        </p>

        <h3>Kalibrace a výpočet vodivosti</h3>
        <p>
          Kalibrace stanovuje vztah mezi odečtem přístroje a referenční hodnotou.{" "}
          <SourceLink id="2025_SeaBird_SBE4_Datasheet">Sea-Bird kalibruje čidla
          v lázni</SourceLink>, jejíž teplotu postupně mění. Při každé teplotě
          zaznamená frekvenci čidla a odebere vzorek vody.
          Laboratorní salinometr Guildline Autosal určí salinitu tohoto vzorku
          porovnáním se standardní mořskou vodou IAPSO.
          Jde o referenční vodu s přiřazenou hodnotou, zkratka IAPSO označuje
          Mezinárodní asociaci pro fyzikální vědy o oceánech.
        </p>
        <p>
          Ze salinity a teploty lázně lze vypočítat její vodivost.
          Pro každý bod tak máme frekvenci zkoušeného čidla a referenční vodivost.
          Převodní rovnice obsahuje několik koeficientů, číselných parametrů.
          Jejich hodnoty zvolíme tak, aby vodivosti vypočtené z frekvencí co nejlépe
          odpovídaly referenčním hodnotám. Tím převod přizpůsobíme elektrickému
          obvodu a rozměrům daného kusu.
          Reference je s čidlem propojena přes salinometr, standardní mořskou vodu
          a měření teploty. Tento doložený sled porovnání tvoří návaznost měření.
        </p>
        <p>
          Kalibrací tedy zjišťujeme, co odečty znamenají. Zásah, kterým měníme
          odezvu přístroje, se nazývá seřízení. Rozlišení obou postupů vymezuje
          <SourceLink id="2012_VIM_Calibration"> mezinárodní metrologický slovník VIM</SourceLink>.
          Pro vlastní měření použijeme kalibrační koeficienty v převodní rovnici.
          U SBE 4 má podle
          <SourceLink id="2025_SeaBird_SBE4_Datasheet"> technického listu</SourceLink>
          {" "}a <SourceLink id="DOI_10_7289_v5dr2sgz">zprávy NOAA z plavby EN551, strana 13</SourceLink>
          {" "}tento tvar:
        </p>
        <Equation tex={String.raw`C = \frac{g + h f^2 + i f^3 + j f^4}{10(1 + a t + b p)}`} />
        <p>
          <em>C</em> je vodivost v S/m, <em>f</em> frekvence v kHz,
          <em> t</em> teplota vody ve stupních Celsia a <em>p</em> tlak v decibarech,
          značených dbar. Jeden decibar odpovídá 10 000 pascalům.
          Tlak zde zapisujeme vůči referenční atmosféře: od absolutního tlaku
          odečteme 10,1325 dbar. Nulový údaj tak označuje referenční atmosférický tlak.
        </p>
        <p>
          Čitatel obsahuje koeficienty <em>g</em>, <em>h</em>, <em>i</em> a <em>j</em>
          {" "}z kalibrace. Násobí jednotlivé mocniny frekvence a výsledky sčítá.
          Například <InlineMath tex={String.raw`f^2`} /> je frekvence vynásobená
          sebou samou, <InlineMath tex={String.raw`f^3`} /> obsahuje tři takové činitele.
          Součet členů s mocninami se nazývá polynom.
          Jeho tvar zde vychází z naměřených kalibračních bodů.
        </p>
        <p>
          Jmenovatel upravuje převod podle změn rozměrů skleněné trubice.
          Koeficient <em>a</em>, v protokolu označený CTcor, popisuje tepelnou
          roztažnost a je uveden na stupeň Celsia.
          Koeficient <em>b</em>, označený CPcor, popisuje stlačení tlakem
          a je uveden na decibar. Vynásobením teplotou a tlakem dostaneme
          příspěvky <em>a t</em> a <em>b p</em> bez jednotky.
          Číslo 10 převádí výsledek na S/m. Koeficienty čitatele jsou stanovené
          pro frekvenci v kHz, a v těchto jednotkách ji proto dosazujeme.
        </p>
        <p>
          Po této opravě máme vodivost vody při teplotě a tlaku, za kterých jsme
          ji měřili. Opravili jsme chování přístroje, jehož trubice mění rozměry.
          Následující výpočet salinity se už zabývá tím, jak teplota a tlak mění
          vodivost samotné vody.
        </p>

        <h3>Jak z vodivosti získáme praktickou salinitu</h3>
        <p>
          <strong>Praktická salinita</strong>, značená <InlineMath tex={String.raw`S_P`} />,
          je číslo na společné stupnici PSS-78, anglicky <em>Practical Salinity
          Scale 1978</em>. Jejím základem je poměr vodivosti vzorku a vodivosti
          referenčního roztoku chloridu draselného za stejných podmínek.
          Chlorid draselný je sůl použitá k definici této reference.
          Vodivost vzorku dělíme vodivostí reference, takže při jejich shodě vyjde jedna.
        </p>
        <p>
          Poměru jedna při referenční teplotě 15 °C a standardním atmosférickém
          tlaku přiřazuje stupnice salinitu 35. Teplota v této definici používá
          mezinárodní teplotní stupnici IPTS-68 z roku 1968.
          <SourceLink id="DOI_10_1109_joe_1980_1145448"> Lewisova původní práce z roku 1980</SourceLink>
          {" "}vysvětluje definici i pokusy s ředěnou a zahušťovanou standardní mořskou
          vodou, z nichž vznikl převod pro ostatní hodnoty.
        </p>
        <p>
          V oceánu měříme za různých teplot a tlaků. Postup pro tyto podmínky popisuje
          <SourceLink id="2015_TEOS10_SP_From_C"> dokumentace výpočtu
          gsw_SP_from_C, příloha E</SourceLink>.
          Nejprve sjednotíme teplotní stupnici. Dnešní teplotní údaje používají
          ITS-90, mezinárodní teplotní stupnici z roku 1990.
          Pro původní vztahy PSS-78 hodnotu ve stupních Celsia vynásobíme 1,00024.
          Tím vyjádříme tutéž teplotu na stupnici IPTS-68.
        </p>
        <p>
          Potom vodivost vzorku vydělíme hodnotou 4,2914 S/m. Ta odpovídá
          referenční vodivosti vody se salinitou 35 při teplotě 15 °C na IPTS-68
          a referenčním atmosférickém tlaku. Vznikne vodivostní poměr,
          který ještě obsahuje vliv teploty a tlaku měřeného vzorku.
        </p>
        <p>
          Z vodivostního poměru, teploty a tlaku výpočet určí dva opravné faktory.
          Tlakový faktor popisuje změnu vodivosti při stlačení vody.
          Teplotní faktor vyjadřuje změnu vodivosti standardní vody s teplotou.
          Získaný poměr těmito faktory vydělíme a připravíme jej pro závěrečný
          převod na salinitu. Jejich vztahy byly určeny laboratorním měřením.
        </p>
        <p>
          Převod PSS-78 dále používá odmocninu opraveného poměru.
          Je to číslo, které vynásobené sebou samým dává původní poměr.
          Z jeho mocnin sestaví polynom, tedy součet členů násobených pevnými
          koeficienty. Po přičtení malé teplotní opravy dostaneme praktickou
          salinitu. Tento empirický vztah zachycuje laboratorně zjištěnou
          souvislost mezi vodivostí a salinitou.
        </p>
        <p>
          Výsledná <InlineMath tex={String.raw`S_P`} /> nemá jednotku,
          protože vychází z poměru vodivostí a z přiřazené stupnice.
          Hodnota 35 tedy vyjadřuje polohu vzorku na této stupnici slanosti.
          Pro hmotnost rozpuštěných látek používáme jinou veličinu,
          absolutní salinitu.
        </p>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Postup měření a výpočtu salinity">
            <div><span>1</span><strong>Voda mezi elektrodami</strong><small>Ionty přenášejí proud. Odpor vody ovlivní kmitání obvodu.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Frekvence čidla</strong><small>Elektronika zaznamená počet kmitů. Připojíme teplotu a tlak stejné vody.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Vodivost v S/m</strong><small>Kalibrační vztah převede signál a opraví změny rozměrů čidla.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Praktická salinita</strong><small>PSS-78 zohlední teplotu a tlak vody a přiřadí jí údaj o slanosti.</small></div>
          </div>
          <figcaption>
            Vlastní schéma podle <SourceLink id="2025_SeaBird_SBE4_Datasheet">dokumentace SBE 4</SourceLink>{" "}
            a <SourceLink id="2015_TEOS10_SP_From_C">výpočtu PSS-78</SourceLink>.
            Šipky spojují vznik elektrického signálu, jeho převod na vodivost
            a následný výpočet salinity. Každý ze dvou převodů řeší jiný vztah.
          </figcaption>
        </figure>

        <h3>Výsledek a jeho použití v klimatologii</h3>
        <p>
          Při spouštění soupravy z lodi vzniká profil salinity, záznam jejího
          rozložení s hloubkou. Každá hodnota patří k vodě v určité vrstvě.
          Profily pořizují také samostatně se pohybující plováky programu Argo.
          Opakování měření umožňuje sledovat, jak se slanost jednotlivých vrstev
          a oblastí mění v čase.
        </p>
        <p>
          Pro výpočty hustoty a obsahu tepla převádíme praktickou salinitu
          na <strong>absolutní salinitu</strong>,
          značenou <InlineMath tex={String.raw`S_A`} /> v gramech rozpuštěných látek
          na kilogram mořské vody. Používá ji soustava TEOS-10, anglicky
          <em> Thermodynamic Equation of Seawater 2010</em>, která sjednocuje
          výpočty fyzikálních vlastností mořské vody.
          <SourceLink id="2015_TEOS10_SA_From_SP"> Převod na absolutní salinitu</SourceLink>
          {" "}využívá vedle praktické salinity také polohu a tlak.
          Z těchto údajů odhaduje odchylky složení od standardní mořské vody.
        </p>
        <p>
          Salinita pak doplňuje teplotu a tlak při určování
          <Link href="/pozorovani/tepelny-obsah-oceanu"> obsahu tepla v oceánu</Link>.
          Při sledování <Link href="/pozorovani/gmsl">výšky mořské hladiny</Link>
          {" "}pomáhá určit změny objemu související s hustotou vody.
          U <Link href="/pozorovani/acidifikace-oceanu">acidifikace oceánu</Link>
          {" "}patří k podmínkám chemických přepočtů. Měření pH a množství uhlíku
          dodávají další metody, které se s údaji o salinitě propojují.
        </p>
        <p>
          <SourceLink id="WEB_International_Argo_Program_Data_from_GDACs_b2737bdf">Globální
          datová centra Argo</SourceLink> zpřístupňují profily spolu s technickými
          údaji a informacemi o přístrojích. Položka <code>PSAL</code> obsahuje
          už vypočtenou praktickou salinitu. Pozdější odborná kontrola porovnává
          profily s dalšími měřeními a podle potřeby opravuje dlouhodobý posun
          odezvy čidla. Upravený výsledek je v <code>PSAL_ADJUSTED</code>.
          Doprovázejí jej příznaky kvality, značky popisující výsledek kontroly
          a použitelnost hodnoty.
        </p>
        <p>
          Jak se profily využívají pro klimatické mapy, ukázali
          <SourceLink id="DOI_10_1175_jcli_d_20_0366_1"> Cheng a spoluautoři v roce 2020</SourceLink>.
          Pro období 1960–2017 rekonstruovali rozložení salinity v horních
          2 000 metrech oceánu. Ze Světové oceánografické databáze stažené
          v červenci 2018 použili lodní odběry, soupravy CTD a plováky Argo.
          Praktickou salinitu převedli na absolutní a sestavili měsíční mapy.
        </p>
        <p>
          Mapa potřebuje hodnoty také mezi místy měření. Autoři je odhadovali
          pomocí vztahů z modelových simulací, které popisovaly souvislosti
          změn salinity v prostoru a čase. Postup zkoušeli na hustěji měřených
          datech tak, že část záznamů vynechali a porovnali jejich odhady
          s vynechanými hodnotami. Měření vodivosti tak dodává údaje pro jednotlivé
          profily, další zpracování z nich vytváří obraz širší oblasti.
          Vysvětlení změn pomocí výparu, srážek a pohybu vody navazuje dalším
          rozborem těchto map a dalších podkladů.
        </p>

        <h3>Vývoj a další provedení metody</h3>
        <p>
          <SourceLink id="DOI_10_1109_joe_1980_1145448">Lewisova práce z roku 1980</SourceLink>
          {" "}popisuje vývoj elektrických salinometrů. V letech 1955–1959
          vznikaly laboratorní přístroje s teplotně řízenou lázní.
          V roce 1961 už byly dostupné menší přístroje, jejichž elektronika
          započítávala rozdíl teplot vzorku a standardu.
          Měření přímo v oceánu pak vyžadovalo převodní vztahy i pro chladné
          hluboké vrstvy. PSS-78 sjednotila dřívější rozdílné převody
          společnou definicí založenou na vodivostním poměru.
        </p>
        <p>
          Laboratorní salinometry se používají také k rozboru vody odebrané
          vedle ponořené soupravy CTD. Měří ji při řízené teplotě a porovnávají
          se standardní mořskou vodou. Takové měření dokládá
          <SourceLink id="DOI_10_7289_v5dr2sgz"> zpráva z plavby EN551 v únoru 2015</SourceLink>,
          která uvádí i standard IAPSO šarže P-157 a průběžné kontroly salinometru.
          Při porovnání se soupravou tím získáme samostatné laboratorní měření
          vody z téhož místa.
        </p>
        <p>
          Další možností je <strong>indukční čidlo</strong>. Cívka, tvořená
          navinutým vodičem, vytváří proměnné magnetické pole.
          To vyvolává proud ve vodě a druhá cívka snímá jeho účinek.
          Kalibrace přiřadí této odezvě vodivost a zahrne rozměry měřicího prostoru.
          Takové čidlo RBR spolu s elektrodovými čidly Sea-Bird zkoumali
          <SourceLink id="DOI_10_1175_jtech_d_24_0051_1"> Thierryová a spoluautoři v roce 2025</SourceLink>.
          Autonomní plováky umožňují oběma konstrukcím pořizovat profily během
          dlouhého nasazení bez pravidelného návratu do laboratoře.
        </p>

        <h2>Nejistoty a ověření měření</h2>
        <p>
          Výsledek ovlivňuje stav čidla, jeho kalibrace a správné spojení vodivosti
          s teplotou a tlakem. Při dlouhém nasazení záleží také na stabilitě odezvy.
          <SourceLink id="DOI_10_1175_jtech_d_24_0051_1"> Porovnání různých souprav
          na čtyřech plovácích</SourceLink> dosáhlo po opravách rozdílů salinity
          menších než 0,004 při tlacích nad 500 dbar. Tato shoda se týká
          zkoušených modelů a zahrnuje společnou lodní referenci použitou k opravám.
        </p>
        <details className="method-details">
          <summary>Podrobnosti o přesnosti a kontrole výsledku</summary>
          <p>
            <SourceLink id="2025_SeaBird_SBE4_Datasheet">Technický list SBE 4 z roku 2025</SourceLink>
            {" "}uvádí rozsah 0 až 7 S/m a výstup přibližně 2,5 až 7,5 kHz.
            Se soupravou SBE 911plus při 24 odečtech za sekundu dosahuje rozlišení
            0,00004 S/m, tedy takto jemného rozlišení změn údaje.
            Počáteční přesnost ±0,0003 S/m je samostatná specifikace odchylky.
            Parametry tohoto provedení nelze přenášet na jiné snímače ani zaměňovat
            za nejistotu výsledné salinity.
          </p>
          <p>
            S čerpadlem dosáhne čidlo po skokové změně vodivosti 63 % konečné
            odezvy přibližně za 0,060 sekundy. Tento parametr popisuje rychlost
            reakce, počet odečtů za sekundu četnost záznamu.
            V prudce se měnících vrstvách záleží také na časovém sladění čidel
            a opravě tepla předávaného stěnou trubice.
          </p>
          <p>
            Usazeniny, organismy nebo bublina mění cestu proudu a odezvu čidla.
            Pomalý posun odezvy se nazývá drift. Kontrola před nasazením a po
            návratu umožňuje zjistit jeho velikost. Vyčištění může odezvu znovu
            změnit, proto uchováváme pořadí údržby a kalibrací.
            <SourceLink id="2010_SeaBird_9plus_Manual"> Manuál SBE 9plus</SourceLink>
            {" "}popisuje kontrolu stability. V silně znečištěné či biologicky
            aktivní vodě nelze předpokládat stejné chování jako v příznivějších podmínkách.
          </p>
          <p>
            K nejistotě salinity přispívají vodivost, teplota, tlak i kalibrační
            reference. V klidné lázni odpadají rychlé přechody mezi vrstvami,
            v hluboké vodě roste význam tlakové opravy a při dlouhém nasazení
            driftu. <SourceLink id="2014_SeaBird_C3860_Calibration">Protokol použitý
            níže</SourceLink> úplný rozpočet těchto příspěvků neuvádí.
            Jeho body sloužily ke kalibraci, a nejsou proto nezávislou ověřovací
            sadou. Desetinná místa našeho přepočtu nevyjadřují nejistotu.
          </p>
          <p>
            Porovnání lodní soupravy s laboratorním salinometrem používá jiné
            čidlo a podmínky, ale sdílí stupnici a standardní mořskou vodu.
            Shoda nevyloučí chybu společné reference. Vzorek se navíc může změnit
            při odběru či skladování. Použijeme-li jej k nastavení opravy CTD,
            následná shoda s ním není nezávislým ověřením této opravy.
          </p>
          <p>
            <SourceLink id="DOI_10_1175_jtech_d_24_0051_1">Thierryová a spoluautoři</SourceLink>
            {" "}zkoumali profily do 4 000 dbar. Každý ze čtyř plováků nesl dvě
            nebo tři soupravy, které měřily blízko sebe. Tlakově závislé odchylky
            opravili pomocí lodního profilu. Výsledný rozdíl menší než 0,004
            pod hladinou 500 dbar neurčuje absolutní chybu jednotlivých čidel,
            protože opravy sdílely referenci. Studie zkoušela jiné modely
            než SBE 4C, a neověřuje tedy náš kus číslo 3860.
          </p>
          <p>
            <SourceLink id="DOI_10_5194_essd_15_383_2023">Wongová, Gilson a Cabanesová
            v roce 2023</SourceLink> hodnotili data Argo dostupná v dubnu 2022.
            U části plováků nasazených po roce 2015 popsali zvýšený výskyt driftu
            k vyšší salinitě. Pozdější kontrola používá lodní a prověřené plovákové
            profily i stabilitu v čase. Část referenčních dat slouží zároveň
            k opravám, takže ověření není zcela nezávislé. Studie popisuje
            historický soubor. Pro další práci potřebujeme verzi dat a příznaky
            kvality, abychom odlišili opravu záznamu od změny oceánu.
          </p>
          <p>
            Vodivost nerozpozná všechny změny poměrů rozpuštěných látek,
            proto převod na absolutní salinitu přidává odhad jejich složení.
            Klimatické mapy navíc závisejí na pokrytí, výběru dat a doplnění
            mezer podle zvoleného postupu. Jeden místní profil sám
            neurčuje změnu světového koloběhu vody.
          </p>
        </details>

        <h2>Skutečný příklad z kalibrace čidla</h2>
        <p>
          <SourceLink id="2014_SeaBird_C3860_Calibration">Protokol čidla SBE 4C číslo 3860
          z 15. října 2014</SourceLink> obsahuje šest bodů měření vody v lázni
          a jeden nulový bod. Zveřejnila jej Atlantická oceánografická
          a meteorologická laboratoř amerického Národního úřadu pro oceán
          a atmosféru, zkráceně NOAA AOML. Z protokolu převezmeme frekvenci,
          teplotu a kalibrační koeficienty a zopakujeme převod na vodivost
          a praktickou salinitu.
        </p>
        <p>
          Pro šest vodních bodů počítáme s referenčním atmosférickým tlakem,
          tedy <InlineMath tex={String.raw`p = 0\,\mathrm{dbar}`} />.
          Je to zvolená podmínka rekonstrukce laboratorního výpočtu,
          protokol ji nedokládá odečtem barometru.
          Nulový bod uchováváme v datech, ale vynecháme jej při výpočtu salinity,
          protože protokol jeho měřicí prostředí samostatně nepopisuje.
        </p>

        <h3>Výpočet jednoho bodu</h3>
        <p>
          Podrobně projdeme bod při 15,0000 °C na stupnici ITS-90.
          Čidlo zaznamenalo frekvenci 5,96800 kHz. Tyto hodnoty a tlak
          dosadíme do kalibrační rovnice vysvětlené výše.
          S koeficienty z protokolu dostaneme vodivost přibližně
          <strong> 4,252531 S/m</strong>. Úplné koeficienty jsou v rozbalovacím
          doplňku a souborech ke stažení.
        </p>
        <p>
          Protokol uvádí vodivost 4,25254 S/m. Rozdíl našeho přepočtu je
          přibližně −0,000009 S/m. Vstupní frekvence a koeficienty přebíráme
          v jejich vytištěném, zaokrouhleném tvaru, který určuje přesnost
          zpětného přepočtu.
        </p>
        <p>
          Při převodu na salinitu nejprve vyjádříme teplotu na stupnici IPTS-68.
          Vynásobením 15,0000 hodnotou 1,00024 dostaneme 15,0036 °C.
          Vodivost potom vydělíme referenční hodnotou 4,2914 S/m:
        </p>
        <Equation tex={String.raw`R = \frac{4{,}252531\,\mathrm{S/m}}{4{,}2914\,\mathrm{S/m}} \approx 0{,}9909426`} />
        <p>
          <em>R</em> označuje poměr obou vodivostí. Jednotky se při dělení vykrátí
          a výsledek je o něco menší než jedna, protože vzorek má nižší vodivost
          než reference. Dále jej vydělíme tlakovým a teplotním faktorem.
          Při zvoleném nulovém tlaku je tlakový faktor roven jedné.
          Po započtení teplotního faktoru dostaneme opravený poměr 0,9908609.
        </p>
        <p>
          Z jeho odmocniny a mocnin sestavíme polynom PSS-78 a přičteme
          teplotní opravu salinity. Postup i pevné koeficienty udává
          <SourceLink id="2015_TEOS10_SP_From_C"> příloha E dokumentace TEOS-10</SourceLink>.
          Výsledek je <strong><InlineMath tex={String.raw`S_P \approx 34{,}6424`} /></strong>.
          Referenční salinita lázně byla 34,6427, takže rozdíl činí asi −0,0003.
          Tím jsme prošli celý výpočet od frekvence čidla k údaji o slanosti.
        </p>

        <h3>Všech šest bodů a vliv teploty</h3>
        <p>
          Stejně zpracujeme ostatní vodní body. Každý řádek tabulky představuje
          jeden záznam z lázně. První dva sloupce uvádějí teplotu a frekvenci,
          další dva náš výpočet vodivosti a salinity. Poslední sloupec obsahuje
          referenční salinitu pro porovnání. Využíváme všech šest vodních bodů
          a kalibrační koeficienty znovu neodhadujeme.
        </p>
        <figure className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" aria-label="Šest skutečných bodů kalibrace vodivosti" tabIndex={0}>
            <table>
              <thead><tr><th scope="col">Teplota (°C)</th><th scope="col">Frekvence <span className="method-data-output__unit">(kHz)</span></th><th scope="col">Vypočtená vodivost <span className="method-data-output__unit">(S/m)</span></th><th scope="col">Vypočtená S<sub>P</sub></th><th scope="col">Referenční S<sub>P</sub> lázně</th></tr></thead>
              <tbody>
                {example.rows.map((row) => (
                  <tr key={row.step}><th scope="row">{number(row.temperatureC)}</th><td>{number(row.frequencyKhz, 5)}</td><td>{number(row.calculatedSm, 5)}</td><td>{number(row.SP)}</td><td>{number(row.bathSP)}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption>
            Vlastní přepočet šesti vodních bodů <SourceLink id="2014_SeaBird_C3860_Calibration">kalibrace SBE 4C 3860</SourceLink>.
            Teplota, frekvence a referenční salinita pocházejí z protokolu. Dva prostřední
            výsledkové sloupce vznikly naším výpočtem z jeho zaokrouhlených vstupů.
          </figcaption>
        </figure>
        <p>
          Na těchto bodech je vidět, proč potřebujeme současně měřit teplotu.
          Vodivost se s ohříváním lázně výrazně mění, zatímco salinita zůstává téměř
          stejná. Graf níže ukazuje právě tuto změnu vodivosti. Téměř stejně slaná
          voda tak při různých teplotách poskytuje výrazně odlišnou elektrickou odezvu.
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/conductometry/conductivity-temperature.png"
            alt="Šest kalibračních bodů. Při zvýšení teploty přibližně z −1 na 32,5 °C roste vodivost z 2,792 na 6,048 S/m, zatímco vypočtená praktická salinita všech bodů zůstává mezi 34,634 a 34,643."
            width={1600} height={1040} sizes="(max-width: 700px) 100vw, 770px" unoptimized />
          <figcaption>
            Vodorovná osa ukazuje teplotu lázně, svislá vypočtenou vodivost.
            Zelené body jsou skutečné kalibrační odečty převedené na vodivost, spojnice
            pouze vedou mezi nimi. Vodivost se mezi krajními body zvětšila přibližně
            2,17krát, ačkoli se salinita měnila jen málo. Nápisy u krajních bodů udávají
            jejich vypočtenou praktickou salinitu, která nemá jednotku.
          </figcaption>
        </figure>
        <details className="method-details">
          <summary>Koeficienty, data a zopakování výpočtu</summary>
          <p>
            Z protokolu přebíráme <InlineMath tex={String.raw`g = -10{,}3209641`} />, <InlineMath tex={String.raw`h = 1{,}48289601`} />,{" "}
            <InlineMath tex={String.raw`i = -0{,}000612897590`} /> a <InlineMath tex={String.raw`j = 0{,}000127926748`} />.
            CTcor je 3,25 × 10⁻⁶ na °C a CPcor −9,57 × 10⁻⁸ na dbar.
            Hodnoty g až j jsou číselné koeficienty pro uvedené jednotky f a C.
            Nelze je použít beze změny s frekvencí zadanou v Hz.
          </p>
          <p>
            Vzorec vytištěný v protokolu postrádá faktor 10 ve jmenovateli.
            Použitý tvar dokládá <SourceLink id="DOI_10_7289_v5dr2sgz">zpráva NOAA,
            strana 13</SourceLink>, pro stejné sériové číslo, datum a koeficienty.
            Odpovídá také tabulkovým vodivostem. Frekvence už jsou v kHz,
            a znovu je proto nedělíme tisícem. Označení „PSU“ u salinity
            v originálu nepředstavuje fyzikální jednotku.
          </p>
          <p>
            První tři soubory uložte do společné složky a spusťte <code>node reproduce.mjs</code>{" "}
            v Node.js 22 nebo novějším. Skript zkontroluje přepis a vypíše šest výsledků
            včetně mezikroků. Používá původní rozsah PSS-78, tedy salinitu mezi 2 a 42,
            teplotu na stupnici IPTS-68 od −2 do 35 °C a tlak od 0 do 10 000 dbar.
            Mimo něj výpočet odmítne. Úplná knihovna GSW, anglicky Gibbs SeaWater,
            je soubor programů pro výpočty vlastností mořské vody. Má navíc rozšíření pro nízké salinity.
          </p>
          <ul>
            <li><a href={`${dataPath}/calibration.csv`} download>Přepis všech sedmi řádků a číselných sloupců protokolu</a></li>
            <li><a href={`${dataPath}/example.json`} download>Původ dat, jednotky, koeficienty a výsledky</a></li>
            <li><a href={`${dataPath}/reproduce.mjs`} download>Výpočet od frekvence k praktické salinitě</a></li>
            <li><a href={`${dataPath}/plot.py`} download>Skript grafu pro Python s knihovnou Matplotlib</a></li>
          </ul>
          <p>
            Metadata uvádějí přístup 4. října 2026 a kontrolní součty SHA-256 přepisu i původního
            PDF pro rozpoznání změn souboru. Vstupní data, výběr i předpoklad <InlineMath tex={String.raw`p = 0`} /> jsou zachované.
            Program znovu neodhaduje kalibrační koeficienty. Naše funkce přijímá vodivost v S/m,
            zatímco původní gsw_SP_from_C v mS/cm, tedy milisiemensech na centimetr.
            Před použitím původní funkce by se vodivost v S/m násobila deseti.
          </p>
        </details>
        <div className="method-conclusion">
          <h2>Co metoda umožňuje zjistit</h2>
          <p>
            Konduktometrie zpřístupňuje slanost jednotlivých vzorků i oceánských
            vrstev prostřednictvím jejich elektrické vodivosti. Společná stupnice
            umožňuje porovnávat profily z různých míst a sledovat jejich změny
            v čase. Salinita spolu s teplotou a tlakem poskytuje podklad pro výpočty
            hustoty, obsahu tepla a chemických vlastností mořské vody.
          </p>
        </div>
      </div>
    </article>
  );
}
