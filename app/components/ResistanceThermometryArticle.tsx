import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import { Equation, InlineMath } from "./Equation";
import example from "../../public/data/methods/resistance-thermometry/example.json";

const dataPath = "/data/methods/resistance-thermometry";

export function ResistanceThermometryArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak odporový teploměr měří teplotu</h2>
        <p className="article-prose__intro">
          Odporová termometrie je měření teploty pomocí změn elektrického odporu. Využívá čidlo
          z materiálu, jehož odpor se mění s teplotou. Elektronika odpor změří a podle předem
          určeného vztahu mu přiřadí teplotu. Tak pracují platinové odporové teploměry i termistory.
          S vhodnou sondou měříme teplotu vzduchu, vody nebo půdy a při opakovaném měření sledujeme
          její průběh.{" "}
          <SourceLink id="2021_BIPM_IPRT">(BIPM, kapitola 2)</SourceLink>
        </p>
        <p>
          Podrobně si vysvětlíme platinový teploměr používaný při měření vzduchu.
          Jeho uplatnění ukazuje americká síť klimatických referenčních stanic{" "}
          <em> U.S. Climate Reference Network</em>, zkráceně USCRN.
        </p>

        <figure className="article-figure article-figure--instrument">
          <Image className="article-figure__media"
            src="/media/methods/resistance-thermometry/noaa-uscrn-mauna-loa.jpg"
            alt="Stožár stanice USCRN na Mauna Loa se třemi bílými kryty teplotních sond a solárním panelem v sopečné krajině."
            width={640} height={480} sizes="(max-width: 700px) 100vw, 620px" unoptimized />
          <figcaption>
            Stanice USCRN u observatoře Mauna Loa. Teplotní sondy jsou uvnitř tří bílých krytů
            na ramenech stožáru. Kryty je chrání před sluncem a ventilátory k nim přivádějí
            okolní vzduch. Foto: <SourceLink id="WEB_NOAA_MLO_USCRN_Photos">NOAA Mauna Loa Observatory</SourceLink>,
            {" "}<SourceLink id="WEB_NOAA_Using_Content_FAQ">volně použitelné dílo NOAA</SourceLink>.
          </figcaption>
        </figure>

        <h3>Proč odpor platiny prozrazuje její teplotu</h3>
        <p>
          Čidlem platinového teploměru je tenký platinový drátek nebo vrstva platiny na podkladu.
          Elektrický proud v tomto kovu přenášejí elektrony, částice nesoucí elektrický náboj.
          Napětí přivedené na konce čidla usměrňuje jejich pohyb, a kovem tak prochází proud.
          Jak velký proud při daném napětí prochází, závisí na elektrickém odporu materiálu.
          Větší odpor znamená při stejném napětí menší proud.{" "}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics 2, oddíly 9.1 a 9.3)</SourceLink>
        </p>
        <p>
          Atomy platiny kmitají a tento tepelný pohyb narušuje usměrněný pohyb elektronů.
          Elektrony při něm mění směr, čemuž říkáme rozptyl.
          Při oteplení atomy kmitají intenzivněji a elektrony se rozptylují častěji.
          Průchod proudu je tím obtížnější a odpor platiny roste.
          Měřením odporu tedy můžeme sledovat změny teploty čidla.
          Princip a jeho využití popisuje{" "}
          <SourceLink id="2021_BIPM_IPRT">příručka Mezinárodního úřadu pro váhy a míry (BIPM)</SourceLink>.
        </p>

        <h3>Jak sonda převezme teplotu vzduchu</h3>
        <p>
          Platinový prvek je uložený v pouzdře a připojený ke kabelu. Tato sestava tvoří
          teplotní sondu. Vzduch a sonda si vyměňují teplo, takže se teplota čidla přibližuje
          teplotě vzduchu. Spolu s teplotou se mění i odpor platiny uvnitř.
          Výměna tepla tak propojuje veličinu, kterou chceme zjistit, s odporem, který změříme
          elektricky.{" "}
          <SourceLink id="2016_OpenStax_University_Physics_2">(University Physics 2, oddíl 1.1)</SourceLink>
        </p>
        <p>
          Při měření venku umisťujeme sondu do krytu, který ji chrání před přímým slunečním
          ohřevem a zároveň k ní propouští vzduch.{" "}
          <SourceLink id="2026_USCRN_Measurements">Stanice USCRN</SourceLink> používají
          platinové sondy Thermometrics v radiačních krytech Met One.
          Vzduch krytem protahuje ventilátor. Proudění usnadňuje výměnu tepla mezi vzduchem
          a sondou, aby čidlo sledovalo teplotu měřeného vzduchu.
        </p>
        <figure className="article-figure article-figure--instrument">
          <Image src="/media/methods/resistance-thermometry/uscrn-platinum-resistance-thermometer.png"
            alt="Platinová teplotní sonda USCRN s kovovým pouzdrem a přívodním kabelem."
            width={325} height={244} unoptimized />
          <figcaption>
            Sonda USCRN. Platinový prvek je uvnitř pouzdra, kabel jej spojuje s elektronikou.
            Radiační kryt s ventilátorem na fotografii není. Zdroj:{" "}
            <SourceLink id="2026_USCRN_Measurements">NOAA/NCEI</SourceLink>,{" "}
            <SourceLink id="WEB_NOAA_Podminky_pouziti_NOAA_17f3c88c">podmínky použití NOAA</SourceLink>.
          </figcaption>
        </figure>

        <h3>Jak elektronika změří odpor</h3>
        <p>
          Kabel spojuje sondu s měřicí elektronikou. Ta čidlem nechá procházet malý známý proud
          a změří napětí mezi jeho konci. Při stejném proudu je k průchodu čidlem s větším odporem
          potřeba větší napětí. Z obou elektrických veličin proto můžeme odpor vypočítat.
          Podle Ohmova zákona vydělíme napětí proudem:
        </p>
        <Equation tex={String.raw`R = \frac{U}{I}`} />
        <p>
          Ve vztahu je <em>R</em> odpor v ohmech (Ω), <em>U</em> napětí ve voltech (V)
          a <em>I</em> proud v ampérech (A).
          Elektronický převodník převede měřené napětí na číselný údaj.
          Jeho vydělením známým proudem přístroj získá hodnotu odporu pro další výpočet.{" "}
          <SourceLink id="2021_BIPM_IPRT">(BIPM, oddíly 3.3 a 4.4)</SourceLink>
        </p>
        <p>
          Abychom určili odpor samotného čidla, potřebujeme snímat napětí přímo mezi jeho konci.
          Měřicí proud totiž prochází také přívodními kabely a i ty mají odpor.
          Při jednoduchém dvouvodičovém zapojení tak do změřeného odporu vstupují čidlo i přívody.
          Čtyřvodičové zapojení oddělí vedení proudu od snímání napětí.{" "}
          <SourceLink id="2021_BIPM_IPRT">(BIPM, oddíl 4.4)</SourceLink>
        </p>
        <p>
          Jedním párem vodičů přivedeme proud k čidlu a zpět. Druhý pár připojíme přímo na jeho
          konce a použijeme ke snímání napětí.
          Tímto druhým párem protéká zanedbatelný proud, takže na odporu jeho vodičů vzniká
          zanedbatelný úbytek napětí. Přístroj proto měří napětí na čidle s výrazně omezeným
          vlivem přívodů. Zapojení vysvětluje{" "}
          <SourceLink id="2021_BIPM_IPRT">oddíl 4.4 příručky BIPM</SourceLink>.
        </p>

        <h3>Jak kalibrace spojí odpor s teplotou</h3>
        <p>
          Kalibrace určí vztah mezi změřeným odporem a známou teplotou.
          U platinového čidla využíváme opakovatelnosti, tedy schopnosti poskytovat při stejné
          teplotě stejný odpor. Vztah proto můžeme nejprve zjistit v laboratoři a potom podle něj
          převádět odpor na teplotu při běžném měření.{" "}
          <SourceLink id="2021_BIPM_IPRT">(BIPM, oddíl 5.1)</SourceLink>
        </p>
        <p>
          Do míchané kapalinové lázně vložíme zkoušenou sondu a referenční teploměr.
          Referenční teploměr poskytuje známou teplotu lázně, zkoušená sonda svůj odpor.
          Oba přístroje dostatečně ponoříme a lázeň necháme ustálit.
          Míchání pomáhá udržovat rovnoměrnou teplotu kapaliny, takže oba přístroje porovnáváme
          při stejné teplotě.{" "}
          <SourceLink id="2025_NIST_Thermometer_Calibrations">(NIST: porovnávací kalibrace)</SourceLink>
        </p>
        <p>
          Společně odečteme teplotu reference a odpor sondy.
          Potom teplotu lázně změníme, znovu vyčkáme na ustálení a oba odečty zopakujeme.
          Tak postupně získáme dvojice teploty a odporu napříč rozsahem, ve kterém budeme
          teploměr používat. Takto provádí porovnávací kalibrace například{" "}
          <SourceLink id="2025_NIST_Thermometer_Calibrations">americký Národní institut
          pro standardy a technologie (NIST)</SourceLink>.
        </p>
        <p>
          Z těchto dvojic sestavíme převodní vztah.
          Kalibrace podle{" "}
          <SourceLink id="2012_VIM_Calibration">mezinárodního metrologického slovníku VIM</SourceLink>{" "}
          zahrnuje také nejistoty referenčních hodnot a údajů přístroje.
          Jejím výsledkem může být rovnice pro výpočet teploty nebo korekce, tedy oprava
          již zobrazované hodnoty. Samostatným úkonem je seřízení, při kterém měníme odezvu
          samotného přístroje.
        </p>
        <p>
          Referenční teploměr je sám zkalibrovaný podle dalšího referenčního přístroje.
          Tato návaznost může vést až k etalonovému platinovému teploměru.
          Etalon je přístroj určený k uchovávání a předávání referenčních hodnot.
          Jeho kalibrace využívá přesně předepsané teplotní stavy, například trojný bod vody.
          Při něm za stanovených podmínek společně existují led, kapalná voda a vodní pára.{" "}
          <SourceLink id="2021_BIPM_SPRT">(BIPM: etalonové platinové teploměry)</SourceLink>
        </p>
        <p>
          Předepsané teplotní stavy a kalibrační postupy vymezuje{" "}
          <SourceLink id="2021_BIPM_SPRT">Mezinárodní teplotní stupnice z roku 1990, ITS-90</SourceLink>.
          Výsledek běžné sondy tak přes dokumentovaný řetězec kalibrací navazuje na společné
          reference. Tento řetězec zahrnuje i nejistoty jednotlivých kalibrací a nazývá se
          metrologická návaznost. Umožňuje porovnávat teploty naměřené různými přístroji
          a laboratořemi.
        </p>
        <figure className="article-figure">
          <Image src="/media/methods/resistance-thermometry/nist-sprt-calibration-laboratory.png"
            alt="Laboratoř NIST s aparaturami pro pevné teplotní body a měřicími můstky."
            width={1225} height={579} unoptimized />
          <figcaption>
            Laboratoř NIST pro etalonové platinové teploměry. Aparatury vytvářejí pevné teplotní
            body, měřicí můstky přesně porovnávají odpory.
            Foto: NIST, zveřejněno 2025,{" "}
            <SourceLink id="WEB_nist_gov_SPRT_Calibration_Laboratory_NIST_eaa9779d">původní obrazový zdroj</SourceLink>.
          </figcaption>
        </figure>

        <h3>Jak přístroj vypočítá teplotu</h3>
        <p>
          Kalibrace poskytla několik dvojic odporu a teploty.
          Při měření se ale čidlo dostává i na teploty mezi těmito body.
          Proto soubor bodů popíšeme souvislou křivkou. Její rovnice nám umožní přiřadit teplotu
          také odporům mezi kalibračními hodnotami.{" "}
          <SourceLink id="2021_BIPM_IPRT">(BIPM, oddíl 5.2)</SourceLink>
        </p>
        <p>
          Pro platinová čidla se používá například Callendarova–Van Dusenova rovnice.
          Popisuje odpor jako funkci teploty, tedy říká, jaký odpor má čidlo při zadané teplotě.
          Pro teploty od 0 °C výše má tuto podobu:
        </p>
        <Equation tex={String.raw`R(t) = R_0\left[1 + At + Bt^2\right]`} />
        <p>
          Písmeno <em>t</em> označuje teplotu ve stupních Celsia.
          Zápis <InlineMath tex={String.raw`R(t)`} /> znamená odpor při této teplotě
          a <InlineMath tex={String.raw`R_0`} /> odpor při 0 °C. Oba odpory vyjadřujeme v ohmech.
          Právě podle odporu při 0 °C se pojmenovávají běžná platinová čidla.
          Typ Pt100 má při této teplotě jmenovitě 100 Ω.
          Jmenovitá hodnota je předepsaná pro daný typ, skutečný vztah jednotlivého kusu
          zjišťujeme kalibrací.{" "}
          <SourceLink id="2003_OIML_R84">(OIML R 84, příloha A)</SourceLink>
        </p>
        <p>
          Čísla <em>A</em> a <em>B</em> jsou koeficienty určující tvar křivky.
          Člen <InlineMath tex={String.raw`At`} /> popisuje změnu úměrnou teplotě.
          S tímto členem by závislost odporu na teplotě tvořila přímku.
          Člen <InlineMath tex={String.raw`Bt^2`} /> ji zakřivuje, aby lépe vystihla chování platiny.
          Druhá mocnina <InlineMath tex={String.raw`t^2`} /> znamená teplotu vynásobenou
          sebou samou. Koeficienty <em>A</em> a <em>B</em> mají jednotky °C⁻¹ a °C⁻².
        </p>
        <p>
          Pro teploty pod 0 °C se do hranaté závorky přidává člen{" "}
          <InlineMath tex={String.raw`C(t-100\,{}^\circ\mathrm{C})t^3`} />.
          Třetí mocnina je součin <InlineMath tex={String.raw`t \cdot t \cdot t`} />{" "}
          a koeficient <em>C</em> má jednotku °C⁻⁴.
          Tento člen upravuje průběh křivky v záporných teplotách.
          Obě části rovnice popisuje{" "}
          <SourceLink id="2003_OIML_R84">příloha A doporučení OIML R 84</SourceLink>.
        </p>
        <p>
          Při měření známe odpor a hledáme odpovídající teplotu.
          Přístroj tedy používá rovnici opačným směrem, než jak je zapsaná.
          Najde takovou teplotu, při které rovnice dává právě naměřený odpor.
          Tím získá výsledek ve stupních Celsia.
        </p>

        <p>
          Převodní vztah můžeme sestavit také tak, aby přímo počítal teplotu z odporu.
          Jednou z možností je polynom, tedy součet konstanty a členů obsahujících odpor
          a jeho mocniny. Mocniny vyjadřují opakované násobení odporu sebou samým.
          Každý člen má vlastní koeficient a společně určují průběh křivky.
          Koeficienty určíme z naměřených kalibračních dvojic.
          Takový vztah nazýváme empirický, protože je přizpůsobený měřením.{" "}
          <SourceLink id="2021_BIPM_IPRT">(BIPM, oddíl 5.2.1)</SourceLink>
        </p>
        <p>
          K nalezení koeficientů slouží například metoda nejmenších čtverců.
          Pro zvolené koeficienty nejprve vypočítáme teplotu v každém kalibračním bodě
          a porovnáme ji s referenční teplotou.
          Každý rozdíl vynásobíme sebou samým a všechny takto získané hodnoty sečteme.
          Potom hledáme koeficienty, při kterých je tento součet nejmenší.
          Umocněním rozdílů zajistíme, že se kladné a záporné odchylky navzájem nevyruší.
          Tento způsob určení převodu ukazuje{" "}
          <SourceLink id="2021_BIPM_IPRT">kalibrační postup v příručce BIPM</SourceLink>.
        </p>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Postup odporového měření teploty">
            <div><span>1</span><strong>Vzduch a sonda</strong><small>Výměna tepla v krytu s ventilátorem.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Elektrický signál</strong><small>Známý proud I a měřené napětí U.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Odpor R</strong><small>Napětí vydělené proudem, s omezením vlivu přívodů.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Teplota t</strong><small>Převod podle kalibrace dané sondy.</small></div>
          </div>
          <figcaption>
            Celý postup pro jednu sondu. První šipka spojuje teplotu sondy s jejím elektrickým
            chováním, další dvě označují výpočty. Schéma shrnuje princip, nezobrazuje elektrické
            zapojení konkrétní stanice. Dalším krokem USCRN je porovnání výsledků tří sond.{" "}
            <SourceLink id="2021_BIPM_IPRT">(BIPM, kapitoly 2, 3 a 5)</SourceLink>
          </figcaption>
        </figure>

        <h3>Jak vznikne teplota zveřejněná stanicí</h3>
        <p>
          Teploměr poskytl teplotu čidla a záznamník k ní přiřadí čas měření.
          Meteorologická stanice zajišťuje umístění a napájení přístroje, ukládání údajů
          i jejich přenos.
          Na stanici USCRN pracují současně tři teploměry, každý ve vlastním krytu.
          Při zpracování jejich výsledky porovnáme a pro daný časový interval z nich vybereme
          jednu výslednou teplotu.{" "}
          <SourceLink id="2013_Diamond_USCRN">(Diamond a kol., příloha)</SourceLink>
        </p>
        <p>
          Výběr výsledné pětiminutové teploty popisují{" "}
          <SourceLink id="2013_Diamond_USCRN">Diamond a spoluautoři (2013) v příloze článku o USCRN</SourceLink>.
          Pokud se tři hodnoty shodují v rozmezí 0,3 °C, seřadí se od nejnižší k nejvyšší
          a použije se prostřední hodnota, nazývaná medián.
          Když jeden údaj chybí nebo se odchyluje a zbývající dva se shodují do 0,3 °C,
          použije se jejich průměr. Z více souběžných měření tak vznikne jeden údaj pro daný interval.
        </p>
        <p>
          Ve veřejném pětiminutovém souboru je tato výsledná teplota ve sloupci{" "}
          <code> AIR_TEMPERATURE</code>.
          Uvádí se po desetinách stupně Celsia. Každý údaj zastupuje pětiminutový interval
          a jeho časová značka označuje konec tohoto intervalu.
          Takto význam sloupce vymezuje{" "}
          <SourceLink id="2017_USCRN_Subhourly_Readme">dokumentace Subhourly01</SourceLink>.
        </p>
        <p>
          Pro výpočet hodinového průměru potřebujeme dvanáct navazujících pětiminutových intervalů.
          U úplné hodiny je sečteme a součet vydělíme dvanácti. Každý interval trvá stejně dlouho,
          a má proto v průměru stejnou váhu:
        </p>
        <Equation tex={String.raw`\bar{t} = \frac{t_1+t_2+\cdots+t_{12}}{12}`} />
        <p>
          Symbol <InlineMath tex={String.raw`\bar{t}`} /> označuje průměrnou teplotu hodiny.
          Hodnoty <InlineMath tex={String.raw`t_1`} /> až <InlineMath tex={String.raw`t_{12}`} /> jsou
          teploty jejích jednotlivých pětiminutových intervalů. Všechny teploty vyjadřujeme
          ve stupních Celsia. Výsledek zastupuje celou hodinu měření na jedné stanici.
        </p>
        <p>
          <SourceLink id="2026_USCRN_Hourly_Readme">Hodinový soubor USCRN</SourceLink>{" "}
          ukládá průměr celé hodiny do sloupce <code>T_HR_AVG</code>.
          Vedle něj uvádí i hodnotu <code>T_CALC</code>, která zastupuje posledních pět minut.
          Oba údaje se vztahují ke stejnému konci hodiny, každý ale shrnuje jinak dlouhou dobu.
          Jestliže se teplota během hodiny mění, budou se zpravidla lišit.
        </p>

        <h3>K čemu teplotní záznam slouží</h3>
        <p>
          Opakovaná měření zachycují výkyvy teploty i její dlouhodobé změny.
          Přízemní stanice poskytují vstupy pro výpočet{" "}
          <Link href="/pozorovani/gmst">globální teploty u povrchu</Link> a denní teplotní
          charakteristiky pro sledování <Link href="/pozorovani/vlny-veder">vln veder</Link>.
          K oblastnímu výsledku se dostaneme spojením více stanic. Každé měření při něm přispívá
          podle toho, jakou část území zastupuje.{" "}
          <SourceLink id="DOI_10_1029_2019jd032361">(Morice a kol., metody)</SourceLink>
          <SourceLink id="DOI_10_1175_jtech_d_11_00103_1">(Menne a kol.: denní teplotní data)</SourceLink>
        </p>

        <p>
          Teplotu potřebujeme i při určování dalších veličin.
          Pomáhá například převést relativní vlhkost na množství vodní páry, jak vysvětluje
          článek o <Link href="/pozorovani/narust-vlhkosti">vlhkosti atmosféry</Link>.
          Teplotu vzorku používáme také při stanovení a přepočtu pH v měřeních{" "}
          <Link href="/pozorovani/acidifikace-oceanu">acidifikace oceánu</Link>.{" "}
          <SourceLink id="2021_NIST_Humidity_Calibration">(NIST, oddíl 3)</SourceLink>
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(Dickson a kol., kapitola 2 a SOP 6)</SourceLink>
        </p>
        <p>
          Pro měření ve výšce vynáší balón{" "}
          <Link href="/metody/radiosondaz">radiosondu</Link>.
          Ta během výstupu zaznamenává teplotu v různých výškách a vytváří teplotní profil
          atmosféry. Tato měření slouží také ke sledování{" "}
          <Link href="/pozorovani/stratosfericke-ochlazovani">teploty stratosféry</Link>.
          Platinové odporové čidlo používá například{" "}
          <SourceLink id="2017_Vaisala_RS41">radiosonda Vaisala RS41, popsaná v kapitole 2
          technické dokumentace</SourceLink>.
        </p>

        <h3>Termistory a další provedení</h3>
        <p>
          Termistor určuje teplotu stejným postupem: převezme ji z prostředí, elektronika změří
          jeho odpor a z kalibračního vztahu vypočítá teplotu.
          Čidlo je ale z jiného materiálu. Pro přesná měření se často používá polovodičová keramika.
          Při oteplení v ní přibývá pohyblivých nosičů elektrického náboje, tedy částic, které
          mohou přenášet proud. Proud díky tomu prochází snáze a odpor klesá.{" "}
          <SourceLink id="2014_BIPM_Thermistors">(BIPM, princip termistoru)</SourceLink>
        </p>
        <p>
          Směr změny odporu rozlišuje různé typy termistorů.
          Čidla, jejichž odpor při oteplení klesá, nesou označení NTC,
          z anglického <em>negative temperature coefficient</em>, česky záporný teplotní součinitel.
          Existují také termistory s rostoucím odporem.
          Zde popisujeme převod pro typ NTC, kterému se věnuje{" "}
          <SourceLink id="2014_BIPM_Thermistors">příručka Whitea a spoluautorů pro BIPM</SourceLink>.
        </p>
        <p>
          U termistoru závisí velikost změny odporu výrazně na tom, v jaké části teplotního rozsahu
          měříme. Stejné oteplení proto může vyvolat různě velkou změnu odporu.
          Kalibrační křivka je silně zakřivená a pro její popis se používá jiný vztah než u platiny.{" "}
          <SourceLink id="2014_BIPM_Thermistors">(BIPM, kalibrační vztahy)</SourceLink>
        </p>
        <p>
          Jedním z používaných převodů je Steinhartova–Hartova rovnice.
          Ze změřeného odporu počítá teplotu vyjádřenou v kelvinech, kterou označíme <em>T</em>.
          Kelvinová stupnice má stejně velké dílky jako Celsiova, její počátek je však posunutý.
          Od hodnoty v kelvinech odečteme 273,15 a dostaneme teplotu ve stupních Celsia.
        </p>
        <p>
          Rovnice pracuje s přirozeným logaritmem, označeným <em>ln</em>.
          Když vstupní číslo opakovaně násobíme stejným číslem větším než jedna, jeho logaritmus
          se pokaždé zvětší o stejný přírůstek.
          V našem výpočtu je vstupem číselná hodnota odporu v ohmech, zapsaná jako{" "}
          <InlineMath tex={String.raw`\frac{R}{1\,\Omega}`} />.
          Písmeno <em>R</em> označuje odpor. Vydělením jedním ohmem získáme číslo bez jednotky.
        </p>
        <Equation tex={[
          String.raw`\frac{1}{T} = a + b\ln\!\left(\frac{R}{1\,\Omega}\right)`,
          String.raw`+ c\left[\ln\!\left(\frac{R}{1\,\Omega}\right)\right]^3`,
        ]} />
        <p>
          Koeficienty <em>a</em>, <em>b</em> a <em>c</em> určíme při kalibraci.
          V tomto zápisu mají jednotku K⁻¹.
          Rovnice sčítá konstantu <em>a</em>, člen s logaritmem a člen s jeho třetí mocninou.
          Nastavením koeficientů přizpůsobíme jejich společný průběh naměřeným kalibračním bodům.
          Jde tedy opět o empirický převod.{" "}
          <SourceLink id="2014_BIPM_Thermistors">(BIPM, Steinhartova–Hartova rovnice)</SourceLink>
        </p>
        <p>
          Po dosazení odporu získáme na pravé straně převrácenou hodnotu teploty, tedy{" "}
          <InlineMath tex={String.raw`\frac{1}{T}`} />.
          Vydělením jedničky touto hodnotou dostaneme <em>T</em> v kelvinech.
          Nakonec odečteme 273,15 pro výsledek ve stupních Celsia.
          Měření odporu tak i u termistoru končí teplotou čidla.
        </p>
        <div className="method-comparison" aria-label="Platinové čidlo a termistor">
          <section>
            <h4>Platinové čidlo</h4>
            <p>Odpor s teplotou roste. Vhodné provedení nabízí stabilní vztah mezi odporem a teplotou a dobře popsanou kalibraci.</p>
            <p>Vedle Pt100 s jmenovitými 100 Ω při 0 °C se používá Pt1000 s jmenovitými 1 000 Ω při 0 °C.{" "}
              <SourceLink id="2021_BIPM_IPRT">(BIPM, kapitola 2)</SourceLink>
            </p>
          </section>
          <section>
            <h4>NTC termistor</h4>
            <p>
              Velká změna odporu vzhledem k jeho výchozí hodnotě usnadňuje rozlišení malých změn teploty.
              Drobný prvek může rychle reagovat, rychlost celé sondy ovlivňuje také její pouzdro.
            </p>
            <p>
              Kalibrace popisuje průběh závislosti v používaném rozsahu.
              Jmenovitý údaj, například 10 kΩ při 25 °C, určuje odpor při jediné teplotě.{" "}
              <SourceLink id="2014_BIPM_Thermistors">(BIPM, konstrukce a charakteristiky čidel)</SourceLink>
            </p>
          </section>
        </div>
        <p>
          Pro měření ve vodě a půdě se konstrukce sondy přizpůsobuje danému prostředí.
          Princip zůstává stejný: výměna tepla propojí teplotu okolí s teplotou čidla.{" "}
          <SourceLink id="2021_BIPM_IPRT">(BIPM, oddíly 2.5 a 4.3)</SourceLink>
        </p>
        <p>
          V oceánu měří termistory například v sondách autonomních plováků Argo.
          Teplotní profily spolu s tlakem a slaností vstupují do výpočtu{" "}
          <Link href="/pozorovani/tepelny-obsah-oceanu">obsahu tepla v oceánu</Link> a do odhadu
          části <Link href="/pozorovani/gmsl">změny hladiny moře</Link> způsobené oteplováním vody.
          Teploměr v těchto výpočtech poskytuje teplotu. Energie nebo změna objemu vody se z ní
          a z dalších údajů teprve odvozují.{" "}
          Naměřené profily zpřístupňují <SourceLink id="2026_Argo_Data">veřejná data Argo</SourceLink>.{" "}
          <SourceLink id="2026_SeaBird_SBE41">(Sea-Bird: SBE 41)</SourceLink>
        </p>
        <p>
          Termistory mohou dlouhodobě měřit i teplotu v různých hloubkách půdy a hornin.{" "}
          <SourceLink id="DOI_10_5194_essd_6_201_2014">Clowův popis měření v aljašských vrtech</SourceLink>{" "}
          dokládá jejich kalibraci pro sledování permafrostu.
          Využití těchto teplotních profilů vysvětlujeme u{" "}
          <Link href="/pozorovani/snehova-pokryvka-a-permafrost">sněhové pokrývky a permafrostu</Link>.
        </p>
        <h3>Další zapojení pro měření odporu</h3>
        <p>
          Elektronika může odpor zjistit také porovnáním se známým odporem referenčního rezistoru.
          To je součástka, jejíž odpor slouží jako srovnávací hodnota.
          Čidlem i rezistorem necháme procházet stejný proud a změříme napětí na obou.
          Podle Ohmova zákona se při stejném proudu poměr napětí rovná poměru odporů.
          Ze známého referenčního odporu a tohoto poměru získáme odpor čidla.{" "}
          <SourceLink id="2021_BIPM_IPRT">(BIPM, oddíl 4.4.3)</SourceLink>
        </p>
        <p>
          Jinou variantou je připojení čidla třemi vodiči.
          Vliv přívodů se v něm vyrovnává za předpokladu, že odpory příslušných vodičů jsou
          dostatečně shodné. Čtyřvodičové zapojení vysvětlené výše naproti tomu odděluje vodiče
          přivádějící proud od vodičů snímajících napětí.
          Obě zapojení a další způsoby měření popisuje{" "}
          <SourceLink id="2021_BIPM_IPRT">příručka BIPM, oddíl 4.4</SourceLink>.
        </p>

        <h3>Jak se metoda rozvíjela</h3>
        <p>
          Rané využití teplotní závislosti odporu kovů dokládá{" "}
          <SourceLink id="1871_Siemens_Thermometry">Siemensův rukopis z roku 1871</SourceLink>.
          Popisuje princip i teploměry určené mimo jiné k měření v pecích.
          Archiv Royal Society jej zpřístupňuje v úplných digitálních snímcích a označuje
          za rukopis, který tehdy nebyl vydán v plném znění.
        </p>
        <p>
          S rozvojem přesných teploměrů se zkoumalo také to, jak se různé přístroje shodují
          mezi kalibračními body.{" "}
          <SourceLink id="1942_Hoge_Brickwedde">Hoge a Brickwedde (1942)</SourceLink> zkalibrovali
          a porovnali osm platinových teploměrů mezi −190 a +445 °C.
          Po omezení vlivu vzájemných kalibračních odchylek se sedm z nich mezi 0 a 100 °C
          lišilo nanejvýš o 0,0013 °C. Osmý vykazoval odlišné chování.
          Porovnání ukázalo, jak konstrukce konkrétních čidel ovlivňuje jejich shodu
          i mimo body, podle kterých byla zkalibrována.
        </p>
        <p>
          Automatické odečítání a přenos dat rozšířily měření do míst a časů, které nebylo možné
          soustavně pokrýt ručně.{" "}
          <SourceLink id="2013_Diamond_USCRN">Síť USCRN, uvedená do provozu v roce 2004</SourceLink>,
          propojila souběžné sondy, pravidelnou údržbu a dokumentaci stanovišť.
          Malé stabilní termistory zase umožnily opakované teplotní profily autonomních plováků.
          Výrobce přístroje{" "}
          <SourceLink id="2026_SeaBird_SBE41">Sea-Bird SBE 41, používaného pro Argo</SourceLink>,
          datuje jeho vývoj do roku 1997.
        </p>

        <h2>Nejistoty a ověření měření</h2>
        <p>
          Výsledek ovlivňuje kalibrace, změny čidla a výměna tepla s okolím.
          Sonda může za teplotou vzduchu zaostávat nebo ji ohřívá slunce či měřicí proud.
          V <SourceLink id="2004_Hubbard_USCRN">terénním pokusu u Lincolnu</SourceLink> se první
          sonda USCRN v lednu 2003 lišila od dvou srovnávacích přístrojů v měsíčním průměru
          o +0,07 °C a −0,02 °C. Tyto rozdíly patří danému porovnání.
          Nejistotu jednotlivého údaje je třeba posoudit podle konkrétního měření.
        </p>
        <details className="method-details">
          <summary>Podrobnosti nejistot a ověření</summary>
          <h3>Výměna tepla s okolím</h3>
          <p>
            Sonda se nové teplotě přizpůsobuje postupně. Při rychlé změně proto za okolím
            zaostává, což ovlivňuje zejména měření během výstupu radiosondy nebo pohybu sondy
            vodou. Odezva závisí na pouzdře a prostředí. U radiosondy RS41 se opravuje
            také ohřev sluncem, jak popisuje{" "}
            <SourceLink id="2017_Vaisala_RS41">technická dokumentace Vaisaly</SourceLink>.
          </p>
          <p>
            Čidlo zahřívá i měřicí proud. Tento samohřev závisí na elektrickém výkonu{" "}
            <InlineMath tex={String.raw`P = I^2 R`} />, kde <em>P</em> je výkon ve wattech,
            <em> I</em> proud v ampérech a <em>R</em> odpor v ohmech.
            Druhá mocnina znamená proud vynásobený sebou samým.
            Oteplení závisí také na odvodu tepla do okolí. Samohřev zkoušíme změnou proudu
            při ustálené teplotě.{" "}
            <SourceLink id="2021_BIPM_IPRT">(BIPM, oddíl 4.1)</SourceLink>
          </p>
          <p>
            Venku působí také záření, proudění vzduchu a smáčení sondy.
            Kontrolujeme proto celou sestavu včetně krytu, ventilátoru a přívodů.
            Zkoušky odezvy, samohřevu a vedení tepla podél sondy shrnuje{" "}
            <SourceLink id="2021_BIPM_IPRT">příručka BIPM</SourceLink>.
          </p>

          <h3>Kalibrace a její stálost</h3>
          <p>
            Stárnutí, namáhání nebo znečištění může změnit vztah odporu a teploty.
            Posun zjistíme opakováním měření při známé teplotě.{" "}
            <SourceLink id="2013_Diamond_USCRN">USCRN</SourceLink> při každoroční údržbě
            vyměňuje jednu ze tří sond za nedávno kalibrovanou.
            Připojením známého rezistoru samostatně prověříme elektroniku.
            Výměnu tepla s okolím tato zkouška neposoudí.
          </p>
          <p>
            K nejistotě kalibrace přispívá referenční teploměr, podmínky lázně, měření odporu
            a opakovatelnost čidla. Pro nezávislé ověření převodní křivky potřebujeme další
            měření v používaném rozsahu, také mezi kalibračními body.
            Shoda s body použitými k sestavení křivky sama celkovou nejistotu neurčuje.{" "}
            <SourceLink id="2021_BIPM_IPRT">(BIPM, oddíl 5.3)</SourceLink>
          </p>

          <p>
            Použitelný rozsah určuje konstrukce sondy a její kalibrace.
            U termistoru může být pro větší rozsah nebo menší nejistotu potřeba převodní rovnice
            s více členy. Koeficienty vždy odpovídají konkrétnímu zápisu rovnice a jednotkám.
            Záměna ohmů za kiloohmy proto vyžaduje také jejich přepočet.{" "}
            <SourceLink id="2014_BIPM_Thermistors">(BIPM, kalibrační vztahy)</SourceLink>
          </p>

          <h3>Porovnání přístrojů v terénu</h3>
          <p>
            <SourceLink id="2004_Hubbard_USCRN">Hubbard, Lin a Baker (2004)</SourceLink>{" "}
            porovnávali u Lincolnu v Nebrasce dvě sestavy USCRN se samostatně kalibrovanými
            přístroji R. M. Young a <em>Precision Meteorological Thermometer</em> (PMT).
            Pokus trval od listopadu 2002 do října 2003.
            Za 744 hodin ledna 2003 ukazovala první sonda USCRN v průměru o 0,07 °C více
            než R. M. Young a o 0,02 °C méně než PMT.
          </p>
          <p>
            Směrodatné odchylky těchto rozdílů byly 0,09 °C a 0,04 °C.
            Popisují kolísání hodinových rozdílů kolem měsíčního průměru.
            Porovnání využilo nová terénní měření, nezahrnutá do kalibrace.
            Přístroje však sdílely místo a počasí a jejich odezva na oslunění se lišila.
            Výsledky proto patří tomuto pokusu. Společný vliv prostředí může porovnání přehlédnout.
            Obdobně tři sondy USCRN pomáhají zachytit jednotlivou závadu a překlenout výpadek,
            ale sdílejí typ přístroje i zpracování.{" "}
            <SourceLink id="2004_Hubbard_USCRN">(Hubbard a kol., výsledky porovnání)</SourceLink>
          </p>

          <h3>Rozlišení a přesnost</h3>
          <p>
            Rozlišení říká, jak malou změnu přístroj rozezná.
            Nejistota vyjadřuje, jak přesně známe výsledek měření.
            Pětiminutová data USCRN se zapisují po 0,1 °C.{" "}
            <SourceLink id="2013_Diamond_USCRN">Požadavky sítě</SourceLink> stanovují přesnost
            ±0,3 °C mezi −50 a +50 °C a ±0,6 °C v pásmech −60 až −50 °C a +50 až +60 °C.
            Nejde o nejistotu každého zveřejněného údaje.
          </p>
          <p>
            <SourceLink id="2026_SeaBird_SBE41">Sea-Bird SBE 41/41CP Deep</SourceLink> má podle
            technického listu z roku 2026 rozsah −5 až +35 °C, počáteční přesnost ±0,002 °C
            a rozlišení 0,0001 °C. Parametry platí pro tento model a podmínky specifikace.
          </p>

          <h3>Průměrování a dlouhodobé záznamy</h3>
          <p>
            Společný kalibrační posun se přenese i do průměru.
            Kolísání vstupních teplot navíc zahrnuje skutečné změny počasí a souvislost sousedních
            intervalů, takže samo neurčuje nejistotu průměru.
            Zaokrouhlení všech vstupů na nejbližší desetinu stupně může průměr posunout
            až o 0,05 °C.
          </p>
          <p>
            Oblastní teplotu získáváme{" "}
            <Link href="/pozorovani/gmst">propojením více stanic podle zastoupené plochy</Link>.
            Změny přístrojů či okolí mohou vytvořit skok v dlouhodobém záznamu.
            Jeho rozpoznání a úpravě se věnuje{" "}
            <Link href="/metody/kontrola-kvality-a-homogenizace">kontrola kvality a homogenizace</Link>.{" "}
            <SourceLink id="DOI_10_1029_2019jd032361">(Morice a kol., metody)</SourceLink>
          </p>
        </details>

        <h2>Příklady převodu a výpočtu</h2>
        <p>
          Následující výpočty ukazují dvě různé části postupu.
          Nejprve převedeme elektrický odpor na teplotu. Potom ze zveřejněných pětiminutových
          teplot vypočítáme průměr jedné hodiny.
          Laboratorní čidlo a stanice Blue Hill jsou dva samostatné příklady.
        </p>

        <h3>Ilustrační signál platinového čidla</h3>
        <p>
          Než použijeme skutečné měření, ukážeme si velikost elektrického signálu na vytvořených
          hodnotách. Pro jmenovitou křivku Pt100 uvádí{" "}
          <SourceLink id="2003_OIML_R84">OIML R 84, příloha A</SourceLink> odpor při 0 °C{" "}
          <InlineMath tex={String.raw`R_0 = 100\,\Omega`} /> a koeficienty{" "}
          <InlineMath tex={String.raw`A = 3{,}9083\times 10^{-3}\,{}^\circ\mathrm{C}^{-1}`} /> a{" "}
          <InlineMath tex={String.raw`B = -5{,}775\times 10^{-7}\,{}^\circ\mathrm{C}^{-2}`} />.
          Dosazením teploty 20 °C do platinové rovnice dostaneme odpor 107,7935 Ω.
          Při proudu 1 mA, tedy 0,001 A, by tomuto odporu odpovídalo napětí 0,1077935 V.
        </p>
        <p>
          Při měření bychom postupovali opačně. Napětí 0,1077935 V vydělíme známým proudem
          0,001 A a získáme odpor 107,7935 Ω. V převodní rovnici pak hledáme teplotu, které
          tento odpor odpovídá. Pro uvedenou jmenovitou křivku vyjde 20 °C.
          Tento výpočet ilustruje princip. Skutečné kalibrační měření použijeme v další ukázce.
        </p>

        <h3>Laboratorní měření: převod odporu na teplotu</h3>
        <p>
          <SourceLink id="2021_BIPM_IPRT">Příručka BIPM, verze z 22. listopadu 2021,
          tabulka 5.3.1</SourceLink>, zveřejňuje kalibraci jednoho Pt100.
          Obsahuje deset odečtů při sedmi různých teplotách od přibližně −40 do 155 °C,
          s opakovanými návraty k trojnému bodu vody.
          Teploty lázní byly určeny porovnáním se dvěma kalibrovanými etalonovými teploměry.
        </p>
        <p>
          Použijeme pátý bod tabulky. Naměřený odpor je 111,54535 Ω a referenční teplota
          29,8655 °C. Autoři z kalibračních dvojic určili převodní polynom metodou nejmenších
          čtverců, kterou jsme vysvětlili výše.
          Na straně 54 uvádějí jeho přibližné koeficienty:
        </p>
        <Equation tex={[
          String.raw`\frac{t}{{}^\circ\mathrm{C}} = -246{,}6585`,
          String.raw`+ 2{,}37430r`,
          String.raw`+ 0{,}00088611r^2`,
          String.raw`+ 0{,}000000471085r^3`,
        ]} />
        <p>
          Malé <em>r</em> je číselná hodnota odporu v ohmech, tedy odpor vydělený jedním ohmem.
          Výrazy <InlineMath tex={String.raw`r^2`} /> a{" "}
          <InlineMath tex={String.raw`r^3`} /> jsou jeho druhá a třetí mocnina.
          Levá strana, teplota <em>t</em> vydělená stupněm Celsia, vyjadřuje číselnou hodnotu
          teploty ve °C. Do rovnice tedy dosadíme{" "}
          <InlineMath tex={String.raw`r = 111{,}54535`} />, vypočítáme jednotlivé členy
          a sečteme je.
        </p>
        <p>
          Výsledkem je přibližně <strong>29,8627 °C</strong>.
          Proti referenčním 29,8655 °C je vypočtená teplota o 0,0028 °C nižší.
          Tím jsme ověřili dosazení do převodní rovnice a zjistili, jak vystihuje tento
          kalibrační bod. Protože bod vstoupil už do určení křivky, porovnání hodnotí shodu
          s kalibračními daty.
        </p>
        <p>
          Tabulka příručky uvádí vypočtenou teplotu 29,8631 °C.
          Drobný rozdíl vzniká tím, že používáme zaokrouhlené koeficienty vytištěné v příručce.
          Výsledek s těmito koeficienty lze zopakovat skriptem připojeným na konci příkladů.
          Převod patří tomuto laboratornímu čidlu.{" "}
          <SourceLink id="2021_BIPM_IPRT">(BIPM, oddíl 5.3.1)</SourceLink>
        </p>

        <h3>Blue Hill: průměrná teplota jedné hodiny</h3>
        <p>
          Druhý skutečný příklad začíná u hotových pětiminutových teplot.
          Veřejný soubor obsahuje zpracované výsledky.
          Napětí, odpory a kalibrační koeficienty sond ani všechny vstupy jejich vzájemného
          porovnání v něm zveřejněné nejsou.
          Z těchto podkladů tedy můžeme zopakovat navazující výpočet hodinového průměru.
        </p>
        <p>
          Vybereme stanici <strong>MA Blue Hill 0 W</strong> a 1. leden 2025
          mezi 00:00 a 01:00 místního standardního času, označovaného LST.
          Ten je zde pět hodin za světovým časem UTC.
          Pracujeme s teplotou této stanice během jedné hodiny.
        </p>
        <p>
          Vstupem je sloupec <code>AIR_TEMPERATURE</code> v{" "}
          <SourceLink id="2025_USCRN_Blue_Hill_Subhourly">pětiminutovém souboru NOAA pro Blue Hill</SourceLink>,
          staženém 4. října 2026.
          Protože časová značka označuje konec intervalu, první potřebný řádek má čas 00:05.
          Jeho 5,1 °C zastupuje pět minut od 00:00 do 00:05.
          Následuje dalších jedenáct stejně dlouhých intervalů až do 01:00.
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
            Tabulka pokrývá hodinu 00:00 až 01:00 místního standardního času.
            Každá hodnota už vznikla z měření více sond a žádný z intervalů nechybí.
            Čas 00:00 by označoval posledních pět minut předchozího dne.
            Zdroj: <SourceLink id="2025_USCRN_Blue_Hill_Subhourly">NOAA/NCEI Subhourly01</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Máme všech dvanáct navazujících intervalů vybrané hodiny, každý právě jednou.
          Součet jejich teplot je 64,9 °C.
          Všechny intervaly trvají stejně dlouho, a mají proto stejnou váhu.
          Součet vydělíme dvanácti:
        </p>
        <Equation tex={String.raw`\bar{t} = \frac{64{,}9}{12}\,{}^\circ\mathrm{C} \approx 5{,}4083\,{}^\circ\mathrm{C}`} />
        <p>
          Symbol <InlineMath tex={String.raw`\bar{t}`} /> opět označuje průměrnou teplotu.
          Po zaokrouhlení na desetinu stupně dostáváme <strong>5,4 °C</strong>.
          Stejnou hodnotu najdeme ve sloupci <code>T_HR_AVG</code> v{" "}
          <SourceLink id="2025_USCRN_Blue_Hill_Hourly">hodinovém souboru NOAA</SourceLink>{" "}
          u záznamu končícího v 06:00 UTC, tedy v 01:00 LST.
          Výpočet tak souhlasí se zveřejněným hodinovým průměrem.
        </p>
        <p>
          Vedlejší sloupec <code>T_CALC</code> obsahuje 5,7 °C.
          To je teplota posledních pěti minut hodiny, shodná s posledním řádkem tabulky.
          Průměr 5,4 °C shrnuje celou hodinu, údaj 5,7 °C její závěr.
          Význam obou sloupců rozlišuje{" "}
          <SourceLink id="2026_USCRN_Hourly_Readme">dokumentace Hourly02</SourceLink>.
        </p>
        <p>
          Z veřejných pětiminutových teplot jsme tak získali hodinový průměr a porovnali jej
          s hodnotou zveřejněnou NOAA. Shoda potvrzuje tento krok zpracování týchž měření
          při rozlišení dostupných dat.
          Oba výsledky vycházejí ze stejných vstupů, takže porovnání neověřuje nezávisle
          kalibraci sond.
        </p>
        <details className="method-details">
          <summary>Podklady k příkladům, data a výpočet ke stažení</summary>
          <h3>Kalibrační hodnoty a koeficienty</h3>
          <p>
            Pro ilustrační Pt100 jsou uvedené koeficienty parametry jmenovité křivky.
            Pro její část pod bodem mrazu je koeficient <em>C</em> roven −4,183 × 10⁻¹² °C⁻⁴.
            Kalibrace konkrétního čidla může vést k jiným koeficientům nebo jinému převodnímu vztahu.
            Koeficienty skutečného laboratorního příkladu pocházejí z rovnice 5.2.1 příručky BIPM.
            Nepatří sondám stanice Blue Hill ani libovolnému jinému Pt100.
          </p>
          <p>
            Tabulka 5.3.1 příručky BIPM obsahuje také opakované návraty na referenčních
            0,0100 °C. Při prvním byl odpor 99,96530 Ω, při posledním 99,96272 Ω.
            Tyto údaje slouží k posouzení opakovatelnosti čidla.
          </p>

          <h3>Samohřev v ilustračním výpočtu</h3>
          <p>
            Samohřev můžeme vyčíslit pro ilustrační čidlo Pt100 z první ukázky.
            Pt100 při 0 °C a proudu 1 mA uvolňuje podle vztahu{" "}
            <InlineMath tex={String.raw`P = I^2 R`} /> výkon 0,0001 W, tedy 100 mikrowattů.{" "}
            <em> P</em> zde označuje výkon, <em>I</em> proud a <em>R</em> odpor.
            K převodu tohoto výkonu na oteplení čidla bychom potřebovali znát odvod tepla
            v daném prostředí.
          </p>

          <h3>Přesný výběr dat Blue Hill</h3>
          <p>
            Stanice má identifikátor WBAN 94785 a leží na souřadnicích 42,21° severní šířky
            a 71,11° západní délky.
            Vstupní soubor se jmenuje <code>CRNS0101-05-2025-MA_Blue_Hill_0_W.txt</code>.
            Teplota je v devátém sloupci.
            Konce vybraných intervalů od 00:05 do 01:00 LST odpovídají 05:05 až 06:00 UTC.
          </p>
          <p>
            Záznamy uvádějí <code>CRX_VN = 2.623</code>, verzi programu záznamníku na stanici.
            Tento údaj neoznačuje všechny následné úpravy v archivu.
            Uchováváme původní vybrané řádky, datum stažení a kontrolní součty vybraných
            i celých ročních souborů.
            Značka −9999,0 znamená chybějící údaj a při výpočtu se nesmí použít jako teplota.
            Tyto soubory neobsahují úplný rozpočet nejistoty hodiny, který by zahrnoval
            i zbývající vliv záření.
          </p>

          <h3>Proč se teplotní extrémy počítají jinak</h3>
          <p>
            Pro hodinová a denní minima a maxima používá USCRN podle{" "}
            <SourceLink id="2026_USCRN_Measurements">popisu měření</SourceLink>{" "}
            také pětiminutové časové okno posouvané po deseti sekundách.
            Okno tak může zachytit nejchladnější nebo nejteplejší část hodiny v jiném úseku
            než pevné intervaly veřejného souboru.
            Výběrem nejnižší a nejvyšší hodnoty z naší tabulky bychom tento postup nezopakovali.
            V příkladu jsme počítali pouze hodinový průměr.
          </p>

          <h3>Opakování výpočtu</h3>
          <p>
            Uložte následující čtyři soubory do jedné složky. V prostředí Node.js 22 nebo novějším
            spusťte <code>node reproduce.mjs</code>.
            Skript nepotřebuje další knihovny ani síť. Zkontroluje původní řádky a vypočítá
            hodinový průměr i laboratorní převod odporu.
          </p>
          <ul>
            <li><a href={dataPath + "/blue-hill-five-minute.txt"} download>Dvanáct původních pětiminutových řádků</a></li>
            <li><a href={dataPath + "/blue-hill-hourly.txt"} download>Původní hodinový řádek pro porovnání</a></li>
            <li><a href={dataPath + "/example.json"} download>Zdroje, výběr, koeficienty a kontrolní součty</a></li>
            <li><a href={dataPath + "/reproduce.mjs"} download>Skript reproduce.mjs</a></li>
          </ul>
          <p>
            Po stažení celých ročních souborů od NOAA lze skriptu předat jejich cesty,
            nejprve pětiminutový a potom hodinový soubor. Vybere stejné intervaly.
            Chybějící, duplicitní nebo jinak časově zařazený vstup odmítne.
            Tento výpočet je určený pro vybranou úplnou hodinu.
            Obecný algoritmus NOAA pro hodiny s neúplnými daty neprovádí.
          </p>
        </details>

        <h2>Co díky odporové termometrii zjišťujeme</h2>
        <div className="method-conclusion">
          <p>
            Odporová termometrie umožňuje soustavně sledovat teplotu vzduchu, vody a půdy.
            Jednotlivá měření zachycují průběh teploty na daném místě.
            Jejich propojením v čase a prostoru získáváme podklady pro sledování oteplování
            atmosféry, změn oceánu i permafrostu.
            Kalibrace je váže na společné teplotní reference a zveřejněné údaje umožňují
            kontrolovat návazné výpočty.
          </p>
        </div>

        <h2>Zdroje a podklady k ověření</h2>
        <p>
          Odkazy v textu vedou na bibliografické karty s veřejnými plnými texty nebo daty.
          Pro kontrolu převodu odporu jsou rozhodující příloha A doporučení OIML a tabulka 5.3.1
          s rovnicí 5.2.1 v příručce BIPM.
          Výběr teploty USCRN popisuje příloha práce Diamonda a spoluautorů,
          terénní porovnání tabulka 1 příspěvku Hubbarda a spoluautorů.
          U příkladu Blue Hill jsou ke stažení použité řádky, jejich původ a výpočet.
          Datové a metodické odkazy byly zkontrolovány 4. října 2026.
        </p>
      </div>
    </article>
  );
}
