import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import example from "../../public/data/methods/resistance-thermometry/example.json";

const dataPath = "/data/methods/resistance-thermometry";

export function ResistanceThermometryArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Elektrický odpor</dt><dd>Veličina vyjadřující, jak vodič brání průchodu elektrického proudu. Značí se <em>R</em> a měří v ohmech, značka Ω.</dd></div>
          <div><dt>Pt100</dt><dd>Platinové čidlo s jmenovitým odporem 100 Ω při 0 °C. Označení samo neurčuje nejistotu celého teploměru.</dd></div>
          <div><dt>NTC termistor</dt><dd>Polovodičové čidlo, jehož odpor při oteplení klesá. NTC znamená záporný teplotní součinitel.</dd></div>
          <div><dt>ITS-90</dt><dd>Mezinárodní teplotní stupnice z roku 1990. Předepisuje referenční teploty a postupy, které umožňují předávat srovnatelné hodnoty teploty.</dd></div>
        </dl>
        <p className="article-glossary__note">Teploměr nejprve zjišťuje teplotu vlastního čidla. Vztah k teplotě vzduchu, vody nebo půdy závisí také na umístění sondy a výměně tepla s okolím.</p>
      </aside>

      <div className="article-prose">
        <h2>Co je odporová termometrie</h2>
        <p className="article-prose__intro">
          Odporová termometrie je způsob měření teploty založený na tom, že se elektrický odpor materiálu
          mění s jeho teplotou. Elektronika změří odpor čidla a pomocí kalibračního vztahu jej převede na
          teplotu. Tuto možnost využívají platinové odporové teploměry i polovodičové termistory.
          Výsledek lze průběžně ukládat, takže metoda umožňuje sledovat i pomalé změny a krátké výkyvy.
        </p>
        <p>
          Podrobně si projdeme platinový teploměr a jeho použití v americké síti klimatických referenčních
          stanic, anglicky <em>U.S. Climate Reference Network</em>, zkráceně USCRN. Na samostatném laboratorním
          příkladu přepočítáme změřený odpor na teplotu. Potom z veřejných dat stanice Blue Hill vypočítáme
          hodinový průměr. Termistory porovnáme s platinou a ukážeme jejich použití v oceánu a ve vrtech.
          Princip a laboratorní postupy popisují otevřené příručky Mezinárodního úřadu pro váhy a míry,
          BIPM, pro <SourceLink id="2021_BIPM_IPRT">platinové teploměry</SourceLink> a{" "}
          <SourceLink id="2014_BIPM_Thermistors">termistory</SourceLink>.
        </p>

        <h2>Proč lze teplotu poznat podle odporu</h2>
        <p>
          V platině přenášejí elektrický proud elektrony. Při oteplení se zesiluje kmitání atomů kovu a
          elektrony se při pohybu častěji rozptylují. Odpor proto roste. Pro teploměr potřebujeme, aby se
          při návratu na stejnou teplotu obnovil také stejný odpor. Změní-li se čidlo například mechanickým
          namáháním nebo znečištěním, může původní převod přestat platit.
        </p>
        <p>
          Běžný termistor pro přesná měření tvoří polovodičová keramika. Při oteplení v ní přibývá
          pohyblivých nosičů náboje, takže odpor klesá. Odtud označení NTC, z anglického
          <em> negative temperature coefficient</em>. Existují také termistory s opačným průběhem.
          Dále budeme slovem termistor označovat typ NTC, kterému se věnuje i{" "}
          <SourceLink id="2014_BIPM_Thermistors">příručka Whitea a spoluautorů</SourceLink>.
          Závislost jeho odporu na teplotě je výrazně zakřivená, a proto potřebuje jiný převod než platina.
        </p>
        <div className="method-comparison" aria-label="Platinové čidlo a termistor">
          <section>
            <h3>Platinové čidlo</h3>
            <p>Odpor s teplotou roste. Odporový prvek může být z tenkého drátku nebo z vrstvy platiny na podkladu. Výhodou je stabilita vhodného provedení a dobře popsaná kalibrace.</p>
            <p>Čidlo Pt100 má při 0 °C jmenovitě 100 Ω. U typu Pt1000 je to 1 000 Ω. Konkrétní kus se od jmenovitého vztahu může odchylovat.</p>
          </section>
          <section>
            <h3>NTC termistor</h3>
            <p>Odpor s teplotou klesá. Velká relativní změna odporu usnadňuje rozlišení malých změn teploty. Drobný prvek může rychle reagovat, pokud jej nezpomaluje pouzdro.</p>
            <p>Převod závisí na konkrétním typu a kalibraci. Údaj o odporu při jedné teplotě, například 10 kΩ při 25 °C, celou převodní křivku neurčuje.</p>
          </section>
        </div>

        <h2>Od vzduchu k elektrickému údaji</h2>
        <p>
          Samotné čidlo je odporový prvek. Sonda k němu přidává pouzdro a přívody. Teploměr zahrnuje také
          elektroniku a výpočet teploty. Meteorologická stanice pak zajišťuje umístění, napájení, ukládání
          a přenos údajů. Rozlišení těchto částí je potřebné, protože každá může ovlivnit výsledek jinak.
        </p>
        <p>
          <SourceLink id="2026_USCRN_Measurements">Dokumentace USCRN</SourceLink> popisuje tři platinové
          sondy Thermometrics v samostatných radiačních krytech Met One. Kryt omezuje ohřev slunečním
          zářením a ventilátor jím protahuje vzduch. Čidlo tak snáze sleduje teplotu vzduchu kolem stanice.
          Jeho tepelnou rovnováhu ale může narušit například porucha ventilátoru nebo voda na povrchu sondy.
        </p>
        <figure className="article-figure article-figure--instrument">
          <Image src="/media/methods/resistance-thermometry/uscrn-platinum-resistance-thermometer.png"
            alt="Platinová teplotní sonda USCRN s kovovým pouzdrem a přívodním kabelem."
            width={325} height={244} unoptimized />
          <figcaption>
            Sonda USCRN. Odporový prvek je uvnitř pouzdra, kabel jej spojuje s elektronikou. Radiační kryt
            s ventilátorem na fotografii není. Zdroj: <SourceLink id="2026_USCRN_Measurements">NOAA/NCEI</SourceLink>,{" "}
            <SourceLink id="WEB_NOAA_Podminky_pouziti_NOAA_17f3c88c">podmínky použití NOAA</SourceLink>.
          </figcaption>
        </figure>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Postup odporového měření teploty">
            <div><span>1</span><strong>Vzduch a sonda</strong><small>Výměna tepla v krytu s ventilátorem.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Elektrický signál</strong><small>Malý proud I a měřené napětí U.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Odpor R</strong><small>Výpočet odporu s omezením vlivu přívodů.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Teplota t</strong><small>Převod podle kalibrace dané sondy.</small></div>
          </div>
          <figcaption>
            Schéma ukazuje obecný postup, nikoli elektrické zapojení konkrétní stanice. První šipka
            spojuje teplotu sondy s jejím elektrickým chováním. Další dvě označují výpočty.
            Časové průměrování a porovnání tří sond USCRN následují až za tímto převodem.
          </figcaption>
        </figure>
        <p>
          Elektronika potřebuje zjistit odpor, i když nakonec ukládá pouze teplotu. Zná-li proud
          <em> I</em> v ampérech a změří napětí <em>U</em> ve voltech přímo na odporovém prvku,
          vypočítá odpor <em>R</em> v ohmech podle Ohmova zákona:
        </p>
        <p className="article-formula method-equation">R = U / I</p>
        <p>
          V přesných přístrojích lze také porovnávat úbytky napětí na čidle a na známém referenčním odporu.
          Při stejném proudu jejich poměr určuje poměr odporů. Převodník v elektronice převádí napětí
          na číslo a záznamník mu přiřadí čas. Veřejný sloupec teploty je tedy už výsledkem několika kroků.
        </p>
        <p>
          U dvouvodičového připojení se k odporu čidla přičítá odpor kabelů. Čtyřvodičové připojení vede
          proud jedním párem vodičů a napětí snímá druhým párem, kterým protéká zanedbatelný proud.
          Tím silně omezuje vliv přívodů. Třívodičové zapojení jej kompenzuje za předpokladu dostatečně
          shodných odporů příslušných vodičů. Zapojení a jeho meze rozebírá{" "}
          <SourceLink id="2021_BIPM_IPRT">příručka BIPM v oddílu 4.4</SourceLink>.
          Změna nebo prodloužení kabelu proto může vyžadovat novou kontrolu celé sestavy.
        </p>

        <h2>Jak se odpor převádí na teplotu</h2>
        <p>
          Převodní vztah popisuje, jaký odpor očekáváme při určité teplotě. Pro platinová čidla se používá
          například Callendarova–Van Dusenova rovnice. Pro nezáporné teploty má tvar:
        </p>
        <p className="article-formula method-equation">R(t) = R₀ [1 + At + Bt²]</p>
        <p>
          <em>R(t)</em> je odpor při teplotě <em>t</em> ve stupních Celsia a <em>R₀</em> odpor při 0 °C.
          Koeficienty <em>A</em> a <em>B</em> určují sklon a zakřivení vztahu. Mají jednotky °C⁻¹ a °C⁻².
          Pro jmenovitou křivku běžného typu Pt100 uvádí otevřené doporučení{" "}
          <SourceLink id="2003_OIML_R84">OIML R 84, příloha A</SourceLink> hodnoty
          R₀ = 100 Ω, A = 3,9083 × 10⁻³ °C⁻¹ a B = −5,775 × 10⁻⁷ °C⁻².
          To jsou parametry jmenovité křivky. Kalibrace jednotlivého kusu může vyžadovat jiné koeficienty
          nebo jiný převodní vztah.
        </p>
        <p>
          Ilustrační výpočet ukáže velikost signálu. Uvedené jmenovité křivce při 20 °C odpovídá
          107,7935 Ω. Při proudu 1 mA, tedy 0,001 A, by napětí na prvku bylo 0,1077935 V.
          Z takového napětí a proudu dostaneme zpět odpor a řešením rovnice teplotu 20 °C.
          Tato čísla jsme vytvořili dosazením do vztahu. Nejsou odečtem stanice Blue Hill.
        </p>
        <details className="method-details">
          <summary>Převod pod bodem mrazu a vztah pro termistor</summary>
          <p>
            Pro záporné teploty přibývá v hranaté závorce platinové rovnice člen C(t − 100 °C)t³.
            Koeficient C má jednotku °C⁻⁴ a pro uvedenou jmenovitou křivku je −4,183 × 10⁻¹² °C⁻⁴.
            Rozsah použitelnosti hotové sondy určují její konstrukce a kalibrace. Rozsah rovnice sám
            nezaručuje, že v něm lze používat každý teploměr.
          </p>
          <p>
            Pro termistor lze použít například Steinhartovu–Hartovu rovnici v následující podobě,
            kterou rozebírá <SourceLink id="2014_BIPM_Thermistors">příručka pro termistory</SourceLink>:
          </p>
          <p className="article-formula method-equation">1/T = a + b ln(R / 1 Ω) + c [ln(R / 1 Ω)]³</p>
          <p>
            T je absolutní teplota v kelvinech, R odpor a ln přirozený logaritmus. Výraz R / 1 Ω
            je číselná hodnota odporu v ohmech, takže logaritmujeme bezrozměrné číslo.
            Koeficienty a, b a c mají v tomto zápisu jednotku K⁻¹ a určují se kalibrací.
            Po výpočtu převrácené hodnoty pravé strany získáme T. Od hodnoty v kelvinech odečteme
            273,15 a dostaneme teplotu ve stupních Celsia. Změna jednotky odporu bez přepočtu
            koeficientů by dala chybný výsledek.
          </p>
          <p>
            Jde o empirický popis, tedy vztah přizpůsobený měřením. Pro některé rozsahy a požadované
            nejistoty je vhodnější více členů. Platnost převodu se musí ověřit v používaném rozsahu,
            včetně teplot mezi kalibračními body.
          </p>
        </details>

        <h2>Kalibrace a skutečný převod změřeného odporu</h2>
        <p>
          Kalibrací určujeme vztah mezi údajem přístroje a referenčními hodnotami včetně jejich nejistot,
          abychom z údaje mohli získat výsledek měření. Tak ji vymezuje{" "}
          <SourceLink id="2012_VIM_Calibration">mezinárodní metrologický slovník VIM</SourceLink>.
          Seřízení je jiný úkon: mění odezvu přístroje. Teploměr lze zkalibrovat, zjistit jeho odchylku
          a používat příslušnou korekci, aniž bychom jej seřídili.
        </p>
        <p>
          Při porovnávací kalibraci umístíme zkoušenou sondu a referenční teploměr například do míchané
          kapalinové lázně. Po ustálení odečteme oba přístroje. Postup opakujeme při různých teplotách,
          aby převod popsal celý zamýšlený rozsah. Musíme zkontrolovat také stejnoměrnost lázně,
          dostatečné ponoření sond a stabilitu teploty během odečtu. Tento postup používá i{" "}
          <SourceLink id="2025_NIST_Thermometer_Calibrations">kalibrační laboratoř amerického metrologického institutu NIST</SourceLink>.
        </p>
        <p>
          Referenční teploměr má vlastní kalibraci. Ta může navazovat na etalonový platinový teploměr,
          který podle <SourceLink id="2021_BIPM_SPRT">stupnice ITS-90</SourceLink> porovnáváme
          s předepsanými pevnými body. Příkladem je trojný bod vody, při němž za stanovených podmínek
          společně existují led, voda a vodní pára. Dokumentovaný řetězec kalibrací s vyčíslenými
          nejistotami vytváří metrologickou návaznost. Umožňuje porovnávat výsledky různých laboratoří.
        </p>
        <figure className="article-figure">
          <Image src="/media/methods/resistance-thermometry/nist-sprt-calibration-laboratory.png"
            alt="Laboratoř NIST s aparaturami pro pevné teplotní body a měřicími můstky."
            width={1225} height={579} unoptimized />
          <figcaption>
            Laboratoř NIST pro etalonové platinové teploměry. Aparatury vytvářejí pevné teplotní body,
            měřicí můstky slouží k přesnému porovnávání odporů. Fotografie ilustruje laboratorní
            vybavení, nezachycuje následující příklad z příručky BIPM. Foto: NIST, zveřejněno 2025,{" "}
            <SourceLink id="WEB_nist_gov_SPRT_Calibration_Laboratory_NIST_eaa9779d">původní obrazový zdroj</SourceLink>.
          </figcaption>
        </figure>
        <h3>Naměřených 111,54535 Ω</h3>
        <p>
          <SourceLink id="2021_BIPM_IPRT">Příručka BIPM, verze z 22. listopadu 2021, tabulka 5.3.1</SourceLink>,
          zveřejňuje kalibraci jednoho Pt100. Obsahuje deset odečtů při sedmi různých teplotách
          od přibližně −40 do 155 °C, s opakovanými návraty k trojnému bodu vody.
          Teploty lázní byly určeny porovnáním se dvěma kalibrovanými etalonovými teploměry.
          V pátém bodě byl změřen odpor 111,54535 Ω při referenční teplotě 29,8655 °C.
        </p>
        <p>
          Autoři proložili údaje křivkou tak, aby součet čtverců rozdílů mezi vypočtenými a referenčními
          teplotami byl co nejmenší. Křivka umožňuje přímo vypočítat teplotu ze změřeného odporu.
          Na straně 54 uvádějí následující přibližné koeficienty. Označíme-li r číselnou hodnotu
          odporu v ohmech, vyjde číselná hodnota teploty ve °C:
        </p>
        <p className="article-formula method-equation">
          t / °C = −246,6585 + 2,37430r + 0,00088611r² + 0,000000471085r³
        </p>
        <p>
          Po dosazení r = 111,54535 dostáváme přibližně <strong>29,8627 °C</strong>, o 0,0028 °C
          méně než referenčních 29,8655 °C. Malý rozdíl ukazuje, jak křivka vystihuje tento kalibrační bod.
          Bod ale vstoupil už do určení křivky, takže nejde o nezávislý test. Tabulka příručky uvádí
          29,8631 °C, protože vytištěné koeficienty rovnice jsou zaokrouhlené. Rozdíl v posledních
          desetinných místech při opakování výpočtu tedy očekáváme.
        </p>
        <p>
          Také samotná kalibrace má omezení. Odpor při prvním a posledním návratu na 0,0100 °C
          v tabulce klesl z 99,96530 na 99,96272 Ω. Opakovatelnost sondy proto nelze považovat za
          dokonalou. Rozdíly od křivky nepředstavují celou nejistotu, ke které přispívají i reference,
          lázeň a měření odporu. Tento převod patří pouze uvedenému laboratornímu čidlu.
          Koeficienty bychom nesměli převzít pro jiný Pt100 ani pro stanici Blue Hill.
        </p>

        <h2>Jak z měření vzniknou data stanice</h2>
        <p>
          USCRN používá tři souběžná měření k odhalení závady jednotlivého čidla a k zachování záznamu,
          když jedno vypadne. <SourceLink id="2013_Diamond_USCRN">Diamond a spoluautoři (2013)</SourceLink>
          v příloze svého popisu sítě vysvětlují výběr pětiminutové teploty. Pokud se tři hodnoty
          shodují v rozmezí 0,3 °C, použije se prostřední z nich, tedy medián. Když jeden přístroj
          chybí nebo se odchyluje a zbývající dvojice se shoduje do 0,3 °C, použije se její průměr.
          Výběr tedy vychází ze vzájemné shody měřicích sestav.
        </p>
        <p>
          Dokumentace se přitom vztahuje k určitým verzím postupu. Soubor{" "}
          <SourceLink id="2017_USCRN_Subhourly_Readme">Subhourly01 README, aktualizovaný 6. července 2017</SourceLink>,
          zaznamenává například změny kontroly otáček ventilátorů v roce 2016, které mohou ovlivnit
          přijatelnost teploty. Pro zdejší výpočet začínáme až u zveřejněné, kontrolou prošlé
          pětiminutové hodnoty. Tento soubor neobsahuje napětí, odpory, kalibrační koeficienty
          jednotlivých sond ani všechny údaje potřebné k zopakování jejich výběru.
        </p>
        <p>
          U výsledného sloupce <code>AIR_TEMPERATURE</code> je krok zápisu 0,1 °C. Každý údaj
          zastupuje pětiminutový interval a jeho časová značka označuje konec intervalu.
          Takové časové a číselné rozlišení neříká, jak velká je nejistota měření. Rozsah a požadavky
          sítě shrnuje <SourceLink id="2013_Diamond_USCRN">tabulka 2 v práci Diamonda a spoluautorů</SourceLink>:
          pro teploty od −50 do +50 °C uvádí požadavek přesnosti ±0,3 °C, v krajních pásmech
          od −60 do −50 °C a od +50 do +60 °C ±0,6 °C. Tyto technické požadavky nejsou
          individuálními intervaly nejistoty každého řádku veřejných dat.
        </p>

        <h2>Blue Hill: výpočet jedné hodiny</h2>
        <p>
          Vybereme stanici <strong>MA Blue Hill 0 W</strong>, identifikátor WBAN 94785,
          na souřadnicích 42,21° severní šířky a 71,11° západní délky. Použijeme 1. leden 2025
          mezi 00:00 a 01:00 místního standardního času, zkráceně LST. Ten je zde pět hodin za
          světovým časem UTC. Značky konců intervalů tedy probíhají od 00:05 do 01:00 LST,
          což odpovídá 05:05 až 06:00 UTC.
        </p>
        <p>
          Vstupem je devátý sloupec <SourceLink id="2025_USCRN_Blue_Hill_Subhourly">ročního souboru
          CRNS0101-05-2025-MA_Blue_Hill_0_W.txt</SourceLink>, staženého 4. října 2026.
          Záznamy uvádějí verzi programu záznamníku <code>CRX_VN = 2.623</code>.
          To je verze programu na stanici, nikoli označení všech následných úprav v archivu.
          Pro opakování uchováváme vybrané řádky i kontrolní součty stažených souborů.
        </p>
        <figure className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap">
            <table>
              <caption>Blue Hill, 1. ledna 2025. Všech 12 vstupních hodnot.</caption>
              <thead><tr><th scope="col">Konec intervalu, LST</th><th scope="col">Teplota (°C)</th></tr></thead>
              <tbody>{example.rows.map((row) => (
                <tr key={row.endLST}><th scope="row">{row.endLST.slice(0, 2)}:{row.endLST.slice(2)}</th><td>{row.temperatureC.toFixed(1).replace(".", ",")}</td></tr>
              ))}</tbody>
            </table>
          </div>
          <figcaption>
            Každá hodnota už vznikla z měření více sond. Žádný z vybraných intervalů nechybí.
            Údaj 00:00 bychom nepřidávali, protože podle dokumentace zastupuje posledních pět minut
            předchozího dne. Zdroj: <SourceLink id="2025_USCRN_Blue_Hill_Subhourly">NOAA/NCEI Subhourly01</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Nejprve ověříme stanici, datum, pořadí a úplnost dvanácti intervalů. Hodnotu −9999,0,
          která znamená chybějící údaj, nesmíme zahrnout jako skutečnou teplotu. V této hodině
          nechybí žádné měření, takže nic nevyřazujeme ani nedoplňujeme. Intervaly jsou stejně dlouhé,
          proto mají v průměru stejnou váhu. Jejich součet je 64,9 °C:
        </p>
        <p className="article-formula method-equation">t̄ = (t₁ + t₂ + … + t₁₂) / 12 = 64,9 / 12 °C ≈ 5,4083 °C</p>
        <p>
          Symbol t̄ označuje průměr a t₁ až t₁₂ jednotlivé pětiminutové teploty. Po zaokrouhlení
          na desetinu dostáváme <strong>5,4 °C</strong>. Stejnou hodnotu obsahuje sloupec
          <code> T_HR_AVG</code> v <SourceLink id="2025_USCRN_Blue_Hill_Hourly">hodinovém souboru NOAA</SourceLink>
          u záznamu končícího v 06:00 UTC. Vedlejší sloupec <code>T_CALC</code> má 5,7 °C,
          protože zastupuje jen posledních pět minut hodiny. Význam obou polí rozlišuje{" "}
          <SourceLink id="2026_USCRN_Hourly_Readme">dokumentace Hourly02</SourceLink>.
        </p>
        <p>
          Porovnali jsme dvě úrovně zpracování týchž měření. Shoda potvrzuje tento krok výpočtu při
          veřejném rozlišení dat. Nepotvrzuje kalibraci sond ani přesnost na čtyři desetinná místa.
          Desetinná místa v hodnotě 5,4083 vznikla dělením už zaokrouhlených vstupů.
          Pokud byl každý vstup zaokrouhlen na nejbližší desetinu, samotné zaokrouhlení může posunout
          tento průměr až o 0,05 °C. Společná odchylka všech vstupů se průměrováním nezmenší.
        </p>
        <p>
          Hodinové ani denní extrémy tímto postupem nereprodukujeme. USCRN podle{" "}
          <SourceLink id="2026_USCRN_Measurements">popisu měření</SourceLink> vyhledává teplotní extrémy
          i pomocí pětiminutového okna posouvaného po deseti sekundách. Minimum tak nemusí být
          nejnižší hodnotou v uvedené tabulce. Pro porozumění výsledku je nutné znát také časový výběr.
        </p>
        <details className="method-details">
          <summary>Data a výpočet ke stažení</summary>
          <p>
            Uložte následující čtyři soubory do jedné složky. V prostředí Node.js 22 nebo novějším
            spusťte <code>node reproduce.mjs</code>. Skript nepotřebuje další knihovny ani síť.
            Zkontroluje původní řádky a vypočítá hodinový průměr i laboratorní převod odporu.
          </p>
          <ul>
            <li><a href={`${dataPath}/blue-hill-five-minute.txt`} download>Dvanáct původních pětiminutových řádků</a></li>
            <li><a href={`${dataPath}/blue-hill-hourly.txt`} download>Původní hodinový řádek pro porovnání</a></li>
            <li><a href={`${dataPath}/example.json`} download>Zdroje, výběr, koeficienty a kontrolní součty</a></li>
            <li><a href={`${dataPath}/reproduce.mjs`} download>Skript reproduce.mjs</a></li>
          </ul>
          <p>
            Po stažení celých ročních souborů od NOAA lze skriptu předat jejich cesty, nejprve
            pětiminutový a potom hodinový soubor. Vybere stejné intervaly. Chybějící, duplicitní nebo
            jinak časově zařazený vstup odmítne. Tato malá ukázka nenahrazuje obecný algoritmus NOAA
            pro hodiny s neúplnými daty.
          </p>
        </details>

        <h2>Jak se výsledek ověřuje mimo kalibrační lázeň</h2>
        <p>
          Tři shodné sondy na stanici poskytují kontrolu jednotlivých poruch. Sdílejí ale typ přístroje,
          prostředí i postup zpracování. Podobná odezva všech tří na společný rušivý vliv může jejich
          vzájemnému porovnání uniknout. Také porovnání hodinového a pětiminutového souboru výše
          sdílí původní měření. Pro kontrolu celé sestavy potřebujeme další přístroje a terénní pokus.
        </p>
        <p>
          <SourceLink id="2004_Hubbard_USCRN">Hubbard, Lin a Baker (2004)</SourceLink> popsali takový
          pokus u Lincolnu v Nebrasce, provedený od listopadu 2002 do října 2003.
          Dvě sestavy USCRN porovnávali se soustavou R. M. Young a přístrojem
          <em> Precision Meteorological Thermometer</em>, v práci označeným PMT.
          Srovnávací přístroje výrobci zkalibrovali před pokusem.
          V lednu 2003 při 744 hodinách porovnání ukazovala první sonda USCRN v průměru
          o 0,07 °C více než R. M. Young a o 0,02 °C méně než PMT.
          Směrodatné odchylky, které vyjadřují kolísání rozdílů kolem jejich průměru, byly 0,09 a 0,04 °C.
        </p>
        <p>
          Porovnání má samostatné přístroje a kryty a používá nové terénní údaje, nikoli body
          použité k jejich předchozí kalibraci. Stále však sleduje stejné místo a počasí.
          Z rozdílu dvojice samotné nelze určit, která sestava je blíže teplotě vzduchu.
          Shodné radiační ovlivnění by mohlo zůstat skryté. Uvedená čísla se vztahují k tomuto
          pokusu a měsíci. Nepřiřazujeme je jako nejistotu všem pozdějším měřením USCRN.
          Odkaz vede na původní konferenční příspěvek, z jehož tabulky 1 zde čerpáme.
        </p>

        <h2>Co omezuje měření a jeho použití</h2>
        <h3>Ohřev čidla a výměna tepla s okolím</h3>
        <p>
          Měřicí proud sám čidlo ohřívá. Elektrický výkon je P = I²R, kde P je výkon ve wattech,
          I proud v ampérech a R odpor v ohmech. Ilustrační Pt100 při 0 °C a proudu 1 mA
          uvolňuje 0,0001 W, tedy 100 mikrowattů. O kolik se ohřeje, závisí na odvodu tepla.
          Stejný výkon proto nemusí způsobit stejné oteplení ve vodě a v klidném vzduchu.
          Vliv lze při ustálené teplotě zkoušet změnou měřicího proudu. Kalibrace a použití
          musí zohlednit rozdílné podmínky odvodu tepla.
        </p>
        <p>
          U venkovního měření je podstatné i záření, větrání a případné smáčení sondy.
          V <SourceLink id="2004_Hubbard_USCRN">popsaném terénním pokusu</SourceLink> autoři porovnávali
          rozdíly teplot také se slunečním zářením. Zjistili rozdílnou odezvu sestav na oslunění.
          To je konkrétní důvod, proč laboratorní kalibrace samotného odporového prvku nemůže
          zaručit správné měření venkovního vzduchu. U konkrétní hodiny Blue Hill nemáme v použitých
          dvou souborech podklady k samostatnému vyčíslení zbývajícího radiačního vlivu.
        </p>
        <h3>Stabilita, přívody a rychlost odezvy</h3>
        <p>
          Dlouhodobý posun převodu se zjišťuje opakovanou kontrolou při známé teplotě.
          Změna odporu může vzniknout stárnutím čidla, namáháním nebo porušením izolace.
          Kontrola pouze elektroniky známým rezistorem neověří tepelný kontakt sondy s prostředím.
          Naopak porovnání v lázni nemusí odhalit problém, který vznikne až s terénním kabelem.
          <SourceLink id="2013_Diamond_USCRN">Popis údržby USCRN</SourceLink> uvádí výměnu jedné
          teplotní sondy za nedávno kalibrovanou při každoroční servisní návštěvě.
          Kontrola tak propojuje laboratorní reference se souběžným terénním záznamem.
        </p>
        <p>
          Sonda také potřebuje čas, aby se přizpůsobila nové teplotě. Krátký výkyv může tlumit
          tepelná setrvačnost pouzdra i následné průměrování. Pro rychle stoupající radiosondu
          nebo profil vody proto nestačí znát jen statickou kalibraci.
          <SourceLink id="2021_BIPM_IPRT">Příručka pro platinové teploměry</SourceLink> popisuje
          zkoušky vlastní odezvy, samohřevu a vedení tepla podél sondy.
          Doba reakce se musí vztahovat ke konkrétní sondě a prostředí.
        </p>
        <h3>Nejistota průměru a prostorové pokrytí</h3>
        <p>
          U příkladu Blue Hill známe počet a délku intervalů, krok zápisu a výsledek výpočtu.
          Neznáme však úplný rozpočet nejistoty dané hodiny, tedy číselné příspěvky všech
          měřicích vlivů a jejich vzájemné závislosti. Z dvanácti hodnot jej nemůžeme odhadnout
          jen jako směrodatnou odchylku teplot dělenou odmocninou z dvanácti. Teplota vzduchu se skutečně
          měnila, sousední intervaly spolu souvisejí a odchylka kalibrace může být společná.
        </p>
        <p>
          Teploměr navíc zastupuje konkrétní místo. Ani přesný záznam Blue Hill sám nepopisuje
          průměr Massachusetts nebo celé Země. Přechod k oblastnímu výsledku vyžaduje další
          stanice, posouzení jejich okolí, prostorové váhy a kontrolu změn v historii měření.
          Úpravy neklimatických zlomů patří k <Link href="/metody/kontrola-kvality-a-homogenizace">homogenizaci</Link>,
          prostorové spojování a výpočet globálního výsledku vysvětlujeme u{" "}
          <Link href="/pozorovani/gmst">globální teploty u povrchu</Link>.
        </p>

        <h2>Která pozorování na termometrii navazují</h2>
        <p>
          Přízemní stanice dodávají část vstupů pro <Link href="/pozorovani/gmst">globální teplotu u povrchu</Link>
          a denní teplotní charakteristiky pro <Link href="/pozorovani/vlny-veder">vlny veder</Link>.
          USCRN je konkrétní referenční síť. Její postup nelze automaticky přisoudit historickým
          stanicím s jiným vybavením. Vlhkostní měření potřebuje teplotu například při převodu
          relativní vlhkosti na množství vodní páry. Tuto návaznost vysvětluje článek o{" "}
          <Link href="/pozorovani/narust-vlhkosti">vlhkosti atmosféry</Link>.
        </p>
        <p>
          V oceánu pracují termistory například v sondách plováků Argo. Technický list konkrétního
          přístroje <SourceLink id="2026_SeaBird_SBE41">Sea-Bird SBE 41/41CP Deep z roku 2026</SourceLink>
          uvádí teplotní rozsah −5 až +35 °C, počáteční přesnost ±0,002 °C a rozlišení 0,0001 °C.
          Tato odlišná čísla dobře ukazují rozdíl mezi rozlišením a přesností. Jde o specifikaci
          uvedeného modelu, nikoli všech termistorů nebo všech plováků Argo.
          V <SourceLink id="2026_Argo_Data">datech Argo</SourceLink> je teplota už zpracovanou
          veličinou. Vedle hodnoty je třeba číst příznaky kvality a rozlišit původně vydané
          a později upravené údaje.
        </p>
        <p>
          Teplotní profily spolu s tlakem a slaností vstupují do výpočtu{" "}
          <Link href="/pozorovani/tepelny-obsah-oceanu">obsahu tepla v oceánu</Link> a do odhadu
          teplotní složky <Link href="/pozorovani/gmsl">změny hladiny moře</Link>.
          Samotný teploměr neměří energii ani výšku moře. Teplotu vzorku potřebujeme také při
          stanovení a přepočtu pH, jak ukazuje článek o <Link href="/pozorovani/acidifikace-oceanu">acidifikaci oceánu</Link>.
        </p>
        <p>
          <SourceLink id="DOI_10_5194_essd_6_201_2014">Clowův popis měření v aljašských vrtech</SourceLink>
          dokládá kalibraci termistorů pro dlouhodobé sledování permafrostu. Záznamy z různých
          hloubek využíváme v článku <Link href="/pozorovani/snehova-pokryvka-a-permafrost">Sněhová pokrývka a permafrost</Link>.
          Elektrická kontaktní čidla na radiosondách tvoří také jednu z cest k{" "}
          <Link href="/pozorovani/stratosfericke-ochlazovani">teplotě stratosféry</Link>.
          Tam je nutné zohlednit ohřev sluncem a zpomalenou odezvu v řídkém vzduchu.
          Platinové odporové čidlo a jeho korekce popisuje například{" "}
          <SourceLink id="2017_Vaisala_RS41">technická dokumentace radiosondy Vaisala RS41, kapitola 2</SourceLink>.
          Balón je nosičem přístroje, zatímco odporová termometrie je principem tohoto čidla.
        </p>

        <h2>Jak se metoda vyvíjela</h2>
        <p>
          <SourceLink id="1871_Siemens_Thermometry">Siemensův rukopis z roku 1871</SourceLink>,
          zpřístupněný v úplných digitálních snímcích archivu Royal Society, rozebírá teplotní
          závislost odporu kovů, její použití pro teploměry včetně měření v pecích a měření odporu.
          Dokládá tak rané spojení materiálové vlastnosti s praktickým měřicím postupem.
          Archiv jej označuje za rukopis, který tehdy nebyl vydán v plném znění.
        </p>
        <p>
          Dalším krokem bylo ověřování, zda různé platinové teploměry dávají srovnatelné výsledky
          i mezi kalibračními body. <SourceLink id="1942_Hoge_Brickwedde">Hoge a Brickwedde (1942)</SourceLink>
          zkalibrovali a porovnali osm přístrojů mezi −190 a +445 °C. Po omezení vlivu vzájemných
          kalibračních odchylek se sedm z nich mezi 0 a 100 °C lišilo nanejvýš o 0,0013 °C.
          Osmý vykazoval odlišné chování. Práce ukazuje význam konstrukce čidla i kontroly
          mezi pevnými body, nikoli záruku takové přesnosti u běžného venkovního teploměru.
        </p>
        <p>
          Automatické odečítání a přenos dat umožnily dlouhodobé měření bez přítomnosti pozorovatele.
          <SourceLink id="2013_Diamond_USCRN">Síť USCRN, uvedená do provozu v roce 2004</SourceLink>,
          spojila souběžné sondy, údržbu a dokumentaci stanovišť. V oceánu umožnily malé stabilní
          termistory opakované profily autonomních plováků. Výrobce{" "}
          <SourceLink id="2026_SeaBird_SBE41">SBE 41</SourceLink> datuje vývoj tohoto přístroje do roku 1997.
          Přínosem těchto změn je pokrytí míst a časů, které ruční odečítání nedokázalo soustavně sledovat.
        </p>

        <h2>Co metoda umožňuje zjistit</h2>
        <div className="method-conclusion">
          <p>
            Odporová termometrie poskytuje teplotu čidla navázanou na kalibrační reference.
            Při známé výměně tepla s prostředím z ní získáváme teplotu vzduchu, vody nebo půdy
            v určitém místě a čase. Opakovaná měření dovolují popsat průběh teploty, vypočítat
            průměry a sledovat změny v atmosféře, oceánu i permafrostu. Síla takového záznamu
            závisí na kalibraci, stabilitě celé sestavy, terénních kontrolách a uchování postupu
            zpracování. K závěru o změně klimatu navíc potřebujeme dostatečné časové a prostorové
            pokrytí. Příčinu změny samotný teploměr neurčuje.
          </p>
        </div>
        <h2>Zdroje a podklady k ověření</h2>
        <p>
          Odkazy v textu vedou na bibliografické karty s veřejnými plnými texty nebo daty.
          Pro kontrolu převodu odporu jsou rozhodující příloha A doporučení OIML a tabulka 5.3.1
          s rovnicí 5.2.1 v příručce BIPM. Výběr teploty USCRN popisuje příloha práce Diamonda
          a spoluautorů, terénní porovnání tabulka 1 příspěvku Hubbarda a spoluautorů.
          U příkladu Blue Hill jsou zde ke stažení použité řádky, jejich původ a výpočet.
          Datové a metodické odkazy byly zkontrolovány 4. října 2026.
        </p>
      </div>
    </article>
  );
}
