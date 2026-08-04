import Image from "next/image";
import Link from "next/link";
import { Citation } from "./Citation";

const blueHillDays = [
  { date: "1. 1.", minimum: "2,4", average: "5,9", maximum: "8,1" },
  { date: "2. 1.", minimum: "−0,8", average: "1,5", maximum: "4,8" },
  { date: "3. 1.", minimum: "−3,8", average: "−0,9", maximum: "1,9" },
  { date: "4. 1.", minimum: "−5,2", average: "−3,9", maximum: "−2,1" },
  { date: "5. 1.", minimum: "−7,4", average: "−3,4", maximum: "−0,2" },
  { date: "6. 1.", minimum: "−9,6", average: "−7,3", maximum: "−5,2" },
  { date: "7. 1.", minimum: "−11,4", average: "−8,0", maximum: "−4,7" },
];

export function ResistanceThermometryArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>Elektrický odpor</dt>
            <dd>
              Vlastnost, která vyjadřuje, jak silně vodič brání průchodu elektrického proudu. Značí se <em>R</em>
              a měří se v ohmech, značka Ω.
            </dd>
          </div>
          <div>
            <dt>Pt100</dt>
            <dd>
              Platinové odporové čidlo s jmenovitým odporem 100 Ω při 0 °C. Označení neříká, jak je hotová sonda
              přesná ani jak rychle reaguje.
            </dd>
          </div>
          <div>
            <dt>NTC termistor</dt>
            <dd>
              Polovodičové čidlo se záporným teplotním součinitelem: s rostoucí teplotou jeho odpor klesá. NTC je
              zkratka anglického <em>negative temperature coefficient</em>.
            </dd>
          </div>
          <div>
            <dt>ITS-90</dt>
            <dd>
              Mezinárodní teplotní stupnice z roku 1990. Určuje praktický, celosvětově srovnatelný způsob, jak
              realizovat a předávat hodnoty teploty.
            </dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Odporový teploměr měří nejprve teplotu vlastního čidla. Teplotu okolního vzduchu, vody nebo půdy
          představuje tehdy, když s nimi čidlo dostatečně vyměnilo teplo a jeho umístění omezuje rušivé vlivy.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co je odporová termometrie</h2>
        <p className="article-prose__intro">
          Odporová termometrie je způsob měření teploty, při němž se využívá opakovatelná závislost elektrického
          odporu čidla na jeho teplotě. Měřicí obvod pošle čidlem malý elektrický proud, změří napětí, určí odpor
          a pomocí známého vztahu převede odpor na teplotu. Do této rodiny patří platinové odporové teploměry i
          polovodičové termistory. <Citation id="2021_BIPM_IPRT" /> <Citation id="2014_BIPM_Thermistors" />
        </p>

        <p>
          Oba typy čidel poskytují elektrický signál, který lze automaticky číst, ukládat a přenášet. Liší se však
          materiálem a průběhem změny odporu. U platiny odpor s oteplením roste poměrně pravidelně a její dlouhodobá
          stabilita umožňuje přesná referenční i provozní měření. U nejčastějších termistorů typu NTC odpor s
          oteplením výrazně klesá. Termistor tak bývá citlivější a může být velmi malý a rychlý, jeho převodní
          křivka je však silněji zakřivená a obvykle platí v užším rozsahu teplot. <Citation id="2021_BIPM_IPRT" />{" "}
          <Citation id="2014_BIPM_Thermistors" />
        </p>

        <p>
          Název <strong>termistor</strong> zahrnuje více druhů teplotně citlivých polovodičových rezistorů. Existují
          termistory NTC, jejichž odpor při oteplení klesá, i termistory PTC s kladným teplotním součinitelem, u
          nichž odpor roste. Pro přesná měření teploty se běžně používají zejména termistory NTC. Když proto tento
          článek dále mluví bez dalšího upřesnění o termistoru, myslí právě tento typ. <Citation id="2014_BIPM_Thermistors" />
        </p>

        <p>
          Slova <strong>čidlo</strong>, <strong>sonda</strong> a <strong>teploměr</strong> proto označují různé
          části. Čidlo je samotný odporový prvek. Sonda přidává pouzdro, přívody a těsnění, aby mohl být prvek
          ponořen do vody, zasunut do půdy nebo umístěn do vzduchu. Teploměr zahrnuje také měřicí elektroniku a
          převod odporu na teplotu. Meteorologická stanice, plovák v oceánu nebo půdní vrt jsou teprve měřicí
          platformy, na nichž takový teploměr pracuje.
        </p>

        <h2>Proč se odpor mění s teplotou</h2>
        <h3>Platina: více srážek elektronů</h3>
        <p>
          Elektrický proud v kovu přenášejí elektrony. Atomy platiny jsou uspořádány v krystalové mřížce a s
          rostoucí teplotou kolem svých poloh kmitají silněji. Pohybující se elektrony jsou pak častěji
          rozptylovány, a průchod proudu proto naráží na větší odpor. Změna není dokonale přímková, ale v širokém
          rozsahu je plynulá a dobře popsatelná. Platina se pro přesné teploměry hodí také proto, že je chemicky
          málo reaktivní, lze ji vyrobit velmi čistou a její vlastnosti zůstávají po správném tepelném zpracování
          stabilní. <Citation id="2021_BIPM_IPRT" />
        </p>

        <p>
          Platinový odporový prvek může tvořit tenký drátek navinutý na keramické nosné konstrukci nebo tenká
          vrstva platiny nanesená na keramickém podkladu. Drátkové provedení může dosahovat vyšší stability, ale
          bývá citlivější na otřesy. Tenkovrstvé čidlo je malé, rychlé a mechanicky odolné; pevné spojení platiny s
          podkladem však může při opakovaném zahřívání a ochlazování měnit jeho odpor. Volba provedení je tedy
          kompromisem mezi stabilitou, rychlostí, rozměry a odolností. <Citation id="2021_BIPM_IPRT" />
        </p>

        <h3>Termistor: více nosičů elektrického náboje</h3>
        <p>
          Teplotní závislost termistoru vzniká jinak. NTC termistory se vyrábějí z keramické směsi oxidů kovů,
          která se při vysoké teplotě slinuje do polovodiče. Při zahřátí získá více elektronů dost energie k
          pohybu mezi dostupnými energetickými stavy. Počet pohyblivých nosičů náboje roste a elektrický odpor
          klesá. Proto se stejné zvýšení teploty projeví u běžného NTC termistoru mnohem větší změnou odporu než u
          platinového čidla. <Citation id="2014_BIPM_Thermistors" />
        </p>

        <div className="method-comparison" aria-label="Srovnání platinového čidla a NTC termistoru">
          <section>
            <p className="eyebrow">Platinové čidlo</p>
            <h3>Odpor s teplotou roste</h3>
            <p>
              Dobře známý průběh, široký použitelný rozsah a vysoká dlouhodobá stabilita. Typické použití:
              referenční laboratoře, meteorologické stanice a průmyslové sondy.
            </p>
          </section>
          <section>
            <p className="eyebrow">NTC termistor</p>
            <h3>Odpor s teplotou klesá</h3>
            <p>
              Velká citlivost, malé rozměry a rychlá odezva v omezeném rozsahu. Typické použití: oceánografické
              sondy, půdní čidla a hustá měření teplotních změn.
            </p>
          </section>
        </div>

        <h2>Jak probíhá měření</h2>
        <p>
          Měření začíná tepelným kontaktem. Kovové pouzdro nebo přímo zapouzdřené čidlo přijímá a odevzdává teplo
          okolí, dokud se jeho teplota nepřiblíží teplotě měřeného prostředí. Elektronika potom nechá čidlem
          procházet přesně řízený proud a změří napětí mezi jeho vývody. Z proudu a napětí určí odpor. Kalibrační
          vztah nebo tabulka převede odpor na teplotu a záznamník k výsledku připojí čas, identifikaci čidla a
          další provozní údaje.
        </p>

        <figure className="method-flow" aria-labelledby="resistance-flow-caption">
          <div className="method-flow__track">
            <div>
              <span>1</span>
              <strong>Prostředí předá teplo čidlu</strong>
              <small>vzduch, voda, půda, sníh nebo pevný povrch</small>
            </div>
            <b aria-hidden="true">→</b>
            <div>
              <span>2</span>
              <strong>Elektronika přivede malý proud</strong>
              <small>proud musí být známý a nesmí čidlo znatelně zahřát</small>
            </div>
            <b aria-hidden="true">→</b>
            <div>
              <span>3</span>
              <strong>Změří se napětí a odpor</strong>
              <small>přesnost ovlivňuje také zapojení přívodních vodičů</small>
            </div>
            <b aria-hidden="true">→</b>
            <div>
              <span>4</span>
              <strong>Kalibrace určí teplotu</strong>
              <small>výsledek se uloží ve °C nebo K spolu s časem a metadaty</small>
            </div>
          </div>
          <figcaption id="resistance-flow-caption">
            Schéma měřicího řetězce. Každý krok přidává vlastní podmínky a zdroje nejistoty: od výměny tepla přes
            elektrické zapojení až po kalibrační rovnici a záznam dat.
          </figcaption>
        </figure>

        <figure className="article-figure article-figure--sample">
          <Image
            className="article-figure__media"
            src="/media/methods/resistance-thermometry/uscrn-platinum-resistance-thermometer.png"
            alt="Platinová odporová sonda s kovovým stonkem a dlouhým přívodním kabelem používaná v síti USCRN."
            width={325}
            height={244}
            unoptimized
          />
          <figcaption>
            Platinová odporová sonda používaná v americké síti klimatických referenčních stanic USCRN. Samotný
            citlivý prvek je ukryt uvnitř kovového stonku; kabel jej spojuje s měřicí elektronikou stanice.
            Foto: americký Národní úřad pro oceán a atmosféru (NOAA), National Centers for Environmental
            Information (NCEI), převzato beze změny. NOAA u svého webového obsahu žádá uvedení zdroje. {" "}
            <a className="article-reference" href="https://www.noaa.gov/disclaimer" target="_blank" rel="noreferrer">Podmínky použití NOAA</a>. {" "}
            <Citation id="2026_USCRN_Measurements" />
          </figcaption>
        </figure>

        <h3>Dva, tři nebo čtyři vodiče</h3>
        <p>
          Dlouhý měděný kabel má vlastní elektrický odpor. Ve dvouvodičovém zapojení se přičte k odporu čidla a
          může být mylně vyhodnocen jako změna teploty. Třívodičové zapojení používá další vodič a předpokládá, že
          odpory dvojice přívodů jsou si podobné. Čtyřvodičové zapojení oddělí dvojici vodičů, jimiž protéká
          měřicí proud, od dvojice, na níž se měří napětí. Vstup voltmetru odebírá jen zanedbatelný proud, takže
          úbytek napětí na měřicích vodičích prakticky neovlivní výsledek. V referenčních laboratořích je proto
          čtyřvodičové zapojení běžnou volbou. <Citation id="2021_BIPM_IPRT" />
        </p>

        <h2>Co přístroj měří přímo</h2>
        <p>
          Odporové čidlo nevytváří hotovou hodnotu teploty. Elektronika přímo zaznamená elektrické napětí a známý
          měřicí proud, případně poměr napětí na čidle a na přesném referenčním rezistoru. Z těchto elektrických
          veličin vznikne odpor v ohmech. Teplota ve stupních Celsia nebo kelvinech je až výsledkem převodu podle
          kalibrace konkrétního čidla.
        </p>

        <div className="article-formula" aria-label="Výpočet elektrického odporu z napětí a proudu">
          <span>R</span>
          <b>=</b>
          <span>U / I</span>
        </div>

        <p>
          Ve vztahu je <em>R</em> elektrický odpor v ohmech, <em>U</em> napětí ve voltech a <em>I</em> proud v
          ampérech. Pokud například čidlem protéká proud jeden miliampér (1 mA) a naměří se na něm napětí 0,100
          voltu (V), odpovídá tomu odpor 100 Ω. Teprve další krok rozhodne, jaké teplotě takový odpor odpovídá.
        </p>

        <p>
          Označení Pt100 znamená jmenovitých 100 Ω při 0 °C. Standard IEC 60751, který vydává Mezinárodní
          elektrotechnická komise, určuje společné vlastnosti průmyslových platinových čidel. Standardní čidlo má při 100 °C
          přibližně 138,51 Ω. Jiný typ může mít při 0 °C jmenovitě 1 000 Ω a označuje se Pt1000. U termistorů bývá
          jmenovitý odpor často uváděn při 25 °C; například metodická příručka BIPM používá pro výklad konkrétní
          modelový NTC termistor s odporem 10 kiloohmů (kΩ) při 25 °C. Tato čísla popisují typ čidla, nikoli kalibrační
          přesnost hotové sondy. <Citation id="2022_IEC_60751" /> <Citation id="2014_BIPM_Thermistors" />
        </p>

        <h2>Od odporu k teplotě</h2>
        <h3>Platinové čidlo</h3>
        <p>
          Průmyslové platinové teploměry se často popisují Callendarovou–Van Dusenovou rovnicí. Nad 0 °C má pro
          standardizované čidlo podobu:
        </p>

        <div className="article-formula method-equation" aria-label="Callendarova–Van Dusenova rovnice nad nulou">
          <span>R(t)</span>
          <b>=</b>
          <span>
            R<sub>0</sub> [1 + At + Bt<sup>2</sup>]
          </span>
        </div>

        <p>
          <em>R(t)</em> je odpor při teplotě <em>t</em>, <em>R</em><sub>0</sub> odpor při 0 °C a <em>A</em> a
          <em> B</em> jsou koeficienty popisující tvar křivky. Pod 0 °C se doplňuje člen
          <em> C(t − 100)t</em><sup>3</sup>. Standard IEC 60751 používá pro běžné platinové čidlo hodnoty
          A = 3,9083 × 10<sup>−3</sup> °C<sup>−1</sup>, B = −5,775 × 10<sup>−7</sup> °C<sup>−2</sup> a pod nulou
          také C = −4,183 × 10<sup>−12</sup> °C<sup>−4</sup>. Při přesné kalibraci lze místo jmenovitých hodnot
          určit koeficienty konkrétní sondy. <Citation id="2021_BIPM_IPRT" /> <Citation id="2022_IEC_60751" />
        </p>

        <p>
          Měřicí přístroj obvykle potřebuje opačný převod: zná odpor a hledá teplotu. Může použít tabulku hodnot,
          numericky rovnici obrátit nebo pracovat s kalibračním polynomem uloženým v paměti. Zaokrouhlení,
          rozlišení převodníku a správná volba koeficientů jsou proto součástí výsledku stejně jako samotné
          čidlo.
        </p>

        <h3>Termistor</h3>
        <p>
          Odpor NTC termistoru se mění mnohem nelineárněji. John Steinhart a Stanley Hart v roce 1968 při
          kalibraci oceánografických termistorů ukázali, že průběh lze v širokém rozsahu velmi dobře popsat
          vztahem mezi převrácenou absolutní teplotou a přirozeným logaritmem odporu. <Citation id="1968_Steinhart_Hart" />
        </p>

        <div className="article-formula method-equation" aria-label="Steinhartova–Hartova rovnice">
          <span>1 / T</span>
          <b>=</b>
          <span>
            a + b ln(R) + c [ln(R)]<sup>3</sup>
          </span>
        </div>

        <p>
          <em>T</em> je teplota v kelvinech, <em>R</em> odpor termistoru a <em>ln</em> přirozený logaritmus.
          Koeficienty <em>a</em>, <em>b</em> a <em>c</em> se získají z měření odporu při několika známých teplotách.
          Jde o jiné koeficienty než písmena A, B a C v rovnici pro platinu. Přesný převod musí vždy uvést použitý
          vztah, rozsah kalibrace a hodnoty koeficientů; samotný údaj „10k termistor“ k reprodukci měření nestačí.
          <Citation id="1968_Steinhart_Hart" /> <Citation id="2014_BIPM_Thermistors" />
        </p>

        <h2>Kalibrace a návaznost</h2>
        <p>
          Kalibrace porovnává zkoušený teploměr s teploměrem, jehož vztah k mezinárodní teplotní stupnici je známý.
          Obě sondy se umístí blízko sebe do dobře promíchávané kapalné lázně nebo do zařízení s ustálenou
          teplotou. Po dosažení tepelné rovnováhy se odečte odpor zkoušeného čidla a teplota referenčního
          teploměru. Postup se opakuje v několika bodech celého používaného rozsahu. Z rozdílů vzniknou korekce,
          vlastní koeficienty převodní rovnice a vyčíslení nejistoty.
          {" "}<Citation id="2021_BIPM_IPRT" /> <Citation id="2014_BIPM_Thermistors" />
        </p>

        <p>
          Mezinárodní teplotní stupnice ITS-90 používá ve velké části svého rozsahu etalonové platinové odporové
          teploměry, anglicky <em>standard platinum resistance thermometers</em> neboli SPRT. Kalibrují se v přesně
          definovaných pevných bodech, například při trojném bodu vody, v němž vedle sebe existují led, kapalná
          voda a vodní pára. Průmyslové platinové sondy a termistory se na tuto úroveň obvykle navazují
          porovnáním s dříve kalibrovaným referenčním teploměrem. Vzniká tak doložitelný řetězec od terénního
          čidla přes kalibrační laboratoř až k realizaci jednotky teploty. <Citation id="2021_BIPM_SPRT" />
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/methods/resistance-thermometry/nist-sprt-calibration-laboratory.png"
            alt="Laboratoř NIST s teplotními lázněmi, měřicími můstky, referenčními odpory a počítači pro kalibraci platinových teploměrů."
            width={1225}
            height={579}
            unoptimized
          />
          <figcaption>
            Laboratoř NIST pro kalibraci etalonových platinových odporových teploměrů. Dlouhé lázně a aparatury
            udržují definované teplotní podmínky; odporové můstky porovnávají teploměr s referenčními odpory.
            Foto: National Institute of Standards and Technology (NIST), nezměněný veřejný materiál; NIST žádá
            uvedení zdroje. <a className="article-reference" href="https://www.nist.gov/image/sprt-calibration-laboratory" target="_blank" rel="noreferrer">Původní snímek a kredit</a>
          </figcaption>
        </figure>

        <p>
          Kalibrační laboratoř NIST například porovnává průmyslové platinové teploměry a termistory s
          etalonovým platinovým teploměrem v míchaných lázních. Uváděná rozšířená nejistota samotné kalibrační
          služby je v části běžného rozsahu řádu několika milikelvinů. Takové číslo však nepopisuje nejistotu
          měření na meteorologické stanici: k ní se přidává elektronika, ochranný kryt, sluneční záření, proudění
          vzduchu, umístění čidla a jeho změny mezi kalibracemi. <Citation id="2025_NIST_Thermometer_Calibrations" />
        </p>

        <h2>Jak se metoda vyvíjela</h2>
        <p>
          Charles William Siemens předložil Královské společnosti v roce 1871 práci o růstu elektrického odporu
          kovových vodičů s teplotou a o využití tohoto vztahu pro měření běžných i pecních teplot. Dochovaný
          šedesátistránkový rukopis odděluje zkoumání vlastnosti kovů, návrh teploměru a způsob měření odporu.
          Právě tato trojice tvoří základ metody dodnes. <Citation id="1871_Siemens_Thermometry" />
        </p>

        <p>
          Hugh Longbourne Callendar v roce 1887 podrobně prozkoumal platinový odporový teploměr v Cavendishově
          laboratoři. Porovnával jej s tehdejšími teplotními standardy, zkoumal opakovatelnost platinového drátu
          a odvodil praktický vztah mezi odporem a teplotou. Pozdější doplnění pro teploty pod nulou vedlo k dnes
          používané Callendarově–Van Dusenově rovnici. Callendarova práce tak proměnila obecný fyzikální princip v
          přesně kalibrovatelný teploměr. <Citation id="1887_Callendar_Thermometry" />{" "}
          <Citation id="2021_BIPM_IPRT" />
        </p>

        <p>
          Termistory se rozšířily později s výrobou stabilních polovodičových keramik. Steinhart a Hart řešili v
          roce 1968 velmi praktický problém hlubokomořských měření: jak jedinou rovnicí popsat kalibrační křivky
          různých termistorů přes široké rozpětí odporů a teplot. Jejich vztah se stal jedním ze základních
          převodů termistorové termometrie. Současné přístroje mohou používat také jiné vícečlenné polynomy;
          rozhodující je doložená kalibrace konkrétního čidla, nikoli jméno rovnice samo o sobě. <Citation id="1968_Steinhart_Hart" />{" "}
          <Citation id="2014_BIPM_Thermistors" />
        </p>

        <h2>Použití v klimatologii</h2>
        <h3>Teplota vzduchu u povrchu</h3>
        <p>
          Automatické meteorologické stanice používají platinová čidla pro pravidelná měření teploty vzduchu.
          Samotná sonda je umístěna v radiačním krytu, který omezuje ohřívání přímým slunečním zářením. U přesných
          stanic proudí přes kryt vzduch pomocí ventilátoru. Americká síť klimatických referenčních stanic,
          anglicky <em>U.S. Climate Reference Network</em> neboli USCRN, má na každém místě tři samostatné
          platinové odporové teploměry ve třech nuceně větraných krytech. Každý se čte po dvou sekundách a stanice
          vytváří samostatné pětiminutové průměry. <Citation id="2013_Diamond_USCRN" /> {" "}
          <Citation id="2026_USCRN_Measurements" />
        </p>

        <p>
          Návrh světové referenční sítě pozemních klimatických stanic, který vydal Globální systém pozorování
          klimatu (GCOS) jako zprávu GCOS-226, uvádí pro teplotu vzduchu Pt100
          podle standardu IEC 60751, rozsah nejméně −40 až +50 °C, citlivost a rozlišení 0,005 K, každoroční
          kalibraci a půlroční ověření. Doporučuje tři teploměry v samostatných krytech. Jde o požadavky navržené
          pro referenční síť, nikoli o popis každé běžné meteorologické stanice. <Citation id="2019_GCOS_GSRN" />
        </p>

        <p>
          Odporová termometrie zde vytváří místní měření. Teprve staniční síť, kontrola metadat a prostorový
          výpočet spojují mnoho místních hodnot do výsledku popsaného v článku{" "}
          <Link className="text-link" href="/pozorovani/gmst">Globální teplota u povrchu</Link>.
        </p>

        <h3>Voda v oceánu</h3>
        <p>
          Oceánografická sonda potřebuje malé čidlo s rychlou odezvou, protože při pohybu vodním sloupcem
          prochází vrstvami s různou teplotou. Současná sonda Sea-Bird SBE 41/41CP Deep určená pro profilovací
          plováky Argo používá stárnutý a proti tlaku chráněný termistor. Výrobce pro tuto konkrétní verzi z roku
          2026 uvádí rozsah −5 až 35 °C, počáteční přesnost ±0,002 °C, rozlišení 0,0001 °C a typickou stabilitu
          0,0002 °C za rok. Jde o technické parametry přístroje v určených podmínkách, nikoli o obecnou vlastnost
          všech termistorů. <Citation id="2026_SeaBird_SBE41" />
        </p>

        <p>
          Plovák ukládá teplotu spolu s tlakem a elektrickou vodivostí vody v jednotlivých hloubkách. Ve veřejném
          souboru Argo jsou základní proměnné označeny TEMP (<em>temperature</em>, teplota), PRES
          (<em>pressure</em>, tlak) a PSAL (<em>practical salinity</em>, praktická salinita); ke každé patří značka
          kontroly kvality a případně odborně upravená hodnota. Teplotní profil je jedním ze vstupů výpočtu popsaného v článku{" "}
          <Link className="text-link" href="/pozorovani/tepelny-obsah-oceanu">Obsah tepla v oceánu</Link>.
          <Citation id="2026_Argo_Data" />
        </p>

        <h3>Půda, sníh, permafrost a atmosféra ve výšce</h3>
        <p>
          Malé termistory se ukládají do půdních sond, vrtů v permafrostu i sněhových profilů. Jejich rozměr
          umožňuje měřit několik hloubek bez velkého narušení okolí. USCRN například používá v půdních sondách
          termistor přitlačený k čelní ploše sondy a ukládá teplotu v několika hloubkách. Pro dlouhodobé měření je
          nutné znát přesnou hloubku, tepelný kontakt s půdou, změny vlhkosti a stabilitu čidla. Souvislosti jsou
          rozvedeny v článku <Link className="text-link" href="/pozorovani/snehova-pokryvka-a-permafrost">Sněhová pokrývka a permafrost</Link>.
          <Citation id="2013_Diamond_USCRN" />
        </p>

        <p>
          Termistory jsou také součástí radiosond vynášených meteorologickým balonem. Tam se mimo laboratorní
          kalibraci řeší rychlá odezva řídkému vzduchu, ohřev slunečním zářením a ochlazování vyzařováním. Odporové
          čidlo tak přispívá k pozorováním popsaným v článku{" "}
          <Link className="text-link" href="/pozorovani/stratosfericke-ochlazovani">Teplota stratosféry</Link>,
          ale výsledný profil vzniká až společně s měřením tlaku, polohy a časem letu.
        </p>

        <h2>Skutečný výstup měření</h2>
        <p>
          Následující hodnoty jsou převzaty přímo z veřejného denního souboru stanice USCRN Blue Hill v
          Massachusetts pro prvních sedm dnů roku 2025. V tomto produktu má stanice identifikátor 94785 a soubor uvádí její
          polohu 42,21° severní šířky a 71,11° západní délky. Tabulka zachovává tři zveřejněné teplotní údaje:
          denní minimum, průměr všech platných pětiminutových hodnot a denní maximum. <Citation id="2025_USCRN_Blue_Hill" />
        </p>

        <figure className="method-data-output">
          <div className="method-data-output__table-wrap">
            <table>
              <caption>Stanice Blue Hill, 1.–7. ledna 2025; teplota vzduchu v °C</caption>
              <thead>
                <tr>
                  <th scope="col">Datum</th>
                  <th scope="col">Minimum</th>
                  <th scope="col">Průměr měření</th>
                  <th scope="col">Maximum</th>
                </tr>
              </thead>
              <tbody>
                {blueHillDays.map((day) => (
                  <tr key={day.date}>
                    <th scope="row">{day.date}</th>
                    <td>{day.minimum}</td>
                    <td>{day.average}</td>
                    <td>{day.maximum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption>
            Zdroj: National Centers for Environmental Information (NCEI), datové centrum amerického Národního
            úřadu pro oceán a atmosféru (NOAA); produkt USCRN Daily01, soubor
            CRND0103-2025-MA_Blue_Hill_0_W.txt. Data jsou veřejně dostupná jako prostý text a dokumentace popisuje
            každé pole, jednotku i chybějící hodnoty. <Citation id="2026_USCRN_Daily01_Readme" />
          </figcaption>
        </figure>

        <p>
          První řádek ukazuje maximum 8,1 °C, minimum 2,4 °C a průměr všech měření 5,9 °C. Tento průměr je v
          původním souboru uložen v poli T_DAILY_AVG. Soubor obsahuje ještě pole T_DAILY_MEAN, které používá
          historický výpočet (maximum + minimum) / 2. Pro tentýž den je jeho hodnota 5,3 °C. Rozdíl 0,6 °C
          nevznikl chybou teploměru: jde o dvě odlišné definice denní hodnoty. Čtenář proto musí vedle čísla znát
          název proměnné a dokumentaci produktu.
        </p>

        <p>
          Ve veřejném denním souboru už není napětí ani odpor jednotlivého čidla. Stanice nejprve převedla
          elektrická měření tří teploměrů na teplotu, vytvořila pětiminutové hodnoty a z nich denní souhrn. NCEI
          odvozenou hodnotu zveřejní jen tehdy, když potřebná vstupní měření projdou kontrolou kvality; jinak je
          pole označeno jako chybějící. Jediný řádek tabulky je tedy konec měřicího řetězce, nikoli jeho začátek.
          <Citation id="2013_Diamond_USCRN" /> <Citation id="2025_USCRN_Blue_Hill" /> {" "}
          <Citation id="2026_USCRN_Daily01_Readme" />
        </p>

        <h2>Nejistoty a omezení</h2>
        <h3>Čidlo může ohřívat samo sebe</h3>
        <p>
          Měření odporu vyžaduje proud a elektrický výkon se v čidle mění na teplo. Pro Pt100 při 0 °C vytvoří
          proud 1 mA výkon 100 mikrowattů (µW). O kolik se čidlo zahřeje, závisí na pouzdru a na tom, jak snadno
          odvádí teplo okolí: pohybující se voda odvádí teplo lépe než klidný vzduch. Při přesné kalibraci se měří při dvou
          proudech a odpor se může extrapolovat k nulovému výkonu. V provozu se používá dostatečně malý proud nebo
          stejný proud jako při kalibraci. <Citation id="2021_BIPM_IPRT" />
        </p>

        <h3>Teploměr potřebuje tepelnou rovnováhu</h3>
        <p>
          Čidlo reaguje na teplo přicházející ze všech směrů. Ve vzduchu je ovlivňuje proudění, sluneční záření,
          tepelné vyzařování okolních povrchů a kapky vody na krytu. V půdě záleží na kontaktu pouzdra se zeminou;
          v kapalině na hloubce ponoření a proudění kolem sondy. Teplo se může vést také kovovým stonkem a kabelem
          z jiné teplotní oblasti. Proto je ochranný kryt, ventilace, hloubka zasunutí a čekání na ustálení
          neoddělitelnou součástí kontaktní termometrie. <Citation id="2021_BIPM_IPRT" />
        </p>

        <h3>Rychlá změna a časová odezva</h3>
        <p>
          Každá sonda potřebuje čas, aby se přiblížila nové teplotě. Malý holý termistor může reagovat během
          milisekund, zatímco robustní sonda v silném kovovém pouzdru mnohem pomaleji. Výrobci proto uvádějí
          časovou konstantu pro konkrétní médium a rychlost proudění. Hodnota naměřená sondou pohybující se přes
          ostré rozhraní v oceánu může být směsí teplot z několika předchozích okamžiků; stejný problém vzniká při
          rychlém výstupu radiosondy. <Citation id="2014_BIPM_Thermistors" />
        </p>

        <h3>Odpor se může měnit i bez změny teploty</h3>
        <p>
          Mechanické napětí, teplotní cykly, vlhkost v izolaci a pronikání nečistot mohou postupně změnit odpor
          čidla. U platinových teploměrů se sleduje posun odporu v pevném kontrolním bodě. U termistorů pomáhá
          stárnutí před použitím, skleněné zapouzdření a opakovaná kalibrace. Interval kontroly se volí podle
          požadované přesnosti a prostředí; laboratorní etalon, oceánský plovák a levné půdní čidlo proto nemohou
          mít společný univerzální interval. <Citation id="2021_BIPM_IPRT" /> {" "}
          <Citation id="2014_BIPM_Thermistors" />
        </p>

        <h3>Elektronika a přívodní vodiče</h3>
        <p>
          K výsledku přispívá přesnost měřicího proudu, napěťového převodníku, referenčního rezistoru i odpor
          kabelu. Změnou směru proudu lze potlačit malá parazitní napětí vznikající na spojích různých kovů.
          Třívodičové a čtyřvodičové zapojení omezuje vliv přívodů. Rozlišení displeje přitom nelze zaměňovat s
          přesností: údaj 12,345 °C může mít tři desetinná místa, ale skutečná nejistota celé instalace může být
          podstatně větší. <Citation id="2021_BIPM_IPRT" />
        </p>

        <h3>Místní teplota zastupuje jen své místo</h3>
        <p>
          I dokonale kalibrovaný teploměr popisuje teplotu čidla na konkrétním místě a v konkrétním čase. Teplota
          se může během několika centimetrů lišit mezi sluncem a stínem, mezi povrchem a půdou nebo mezi vrstvami
          oceánu. Klimatologický význam vzniká až opakovaným měřením na doloženém místě, ochranou okolí stanice,
          evidencí změn přístroje a spojením více pozorování podle pravidel daného datového produktu.
          {" "}<Citation id="2013_Diamond_USCRN" /> <Citation id="2019_GCOS_GSRN" />
        </p>

        <h2>Co metoda umožňuje zjistit</h2>
        <div className="method-conclusion">
          <p className="eyebrow">Výsledek metody</p>
          <p>
            Odporová termometrie umožňuje převést teplotu malého čidla na opakovatelný elektrický údaj a tento
            údaj dlouhodobě automaticky zaznamenávat. Platinová čidla poskytují stabilní základ pro přesná a
            navzájem srovnatelná měření; termistory přidávají vysokou citlivost, malé rozměry a rychlou odezvu.
            Díky kalibraci lze místní měření vzduchu, vody, půdy, sněhu nebo ledu vztáhnout ke společné teplotní
            stupnici. Z těchto jednotlivých pozorování pak mohou vznikat teplotní profily, staniční záznamy a po
            dalším zpracování také klimatologické datové produkty.
          </p>
        </div>

        <h2>Zdroje a otevřená data</h2>
        <div className="article-source-groups">
          <section>
            <h3>Původní práce</h3>
            <ul>
              <li>Siemensův rukopis z roku 1871 lze v archivu Royal Society otevřít i stáhnout jako PDF. <Citation id="1871_Siemens_Thermometry" /></li>
              <li>Callendarova práce z roku 1887 je dohledatelná pod trvalým DOI. <Citation id="1887_Callendar_Thermometry" /></li>
              <li>Původní kalibrační práce Steinharta a Harta z roku 1968 je vedena pod DOI vydavatele. <Citation id="1968_Steinhart_Hart" /></li>
            </ul>
          </section>
          <section>
            <h3>Současná metodika a standardy</h3>
            <ul>
              <li>Příručky BIPM pro průmyslové platinové teploměry, etalonové teploměry a termistory jsou volně dostupné jako PDF. <Citation id="2021_BIPM_IPRT" /> <Citation id="2021_BIPM_SPRT" /> <Citation id="2014_BIPM_Thermistors" /></li>
              <li>Stránka IEC shrnuje platný standard 60751:2022; úplné znění normy je placené. <Citation id="2022_IEC_60751" /></li>
              <li>NIST zveřejňuje popis kalibračního postupu i nejistoty jednotlivých služeb. <Citation id="2025_NIST_Thermometer_Calibrations" /></li>
            </ul>
          </section>
          <section>
            <h3>Klimatologické použití a data</h3>
            <ul>
              <li>Popis sítě USCRN vysvětluje trojici teploměrů, časování měření a kontrolu výsledků. <Citation id="2013_Diamond_USCRN" /> <Citation id="2026_USCRN_Measurements" /></li>
              <li>Textový soubor stanice Blue Hill lze otevřít a uložit přímo z NOAA/NCEI; samostatný soubor vysvětluje všechna jeho pole. <Citation id="2025_USCRN_Blue_Hill" /> <Citation id="2026_USCRN_Daily01_Readme" /></li>
              <li>Argo vysvětluje strukturu profilových souborů a Sea-Bird zveřejňuje parametry konkrétní oceánografické sondy. <Citation id="2026_Argo_Data" /> <Citation id="2026_SeaBird_SBE41" /></li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
