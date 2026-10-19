import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

const dataPath = "/data/methods/potentiometry";

export function PotentiometryArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Elektroda</dt><dd>Část měřicí soustavy vytvářející elektrický kontakt s roztokem. Její potenciál závisí na dějích na jejím povrchu.</dd></div>
          <div><dt>Aktivita iontu</dt><dd>Veličina vyjadřující chemické působení iontu v roztoku. Zahrnuje jeho koncentraci i vliv okolních iontů.</dd></div>
          <div><dt>Pufr</dt><dd>Roztok, který při malém přídavku kyseliny nebo zásady mění pH jen málo. Pufr se známým pH slouží jako reference.</dd></div>
          <div><dt style={{ textTransform: "none" }}>pHₜ</dt><dd>pH na celkové stupnici pro mořskou vodu. Vychází ze součtu koncentrací volných vodíkových iontů a hydrogensíranu.</dd></div>
        </dl>
        <p className="article-glossary__note">Měřeným signálem je napětí. Známé roztoky mu při kalibraci přiřadí hodnotu pH.</p>
      </aside>
      <div className="article-prose">
        <h2>Jak měříme pH pomocí elektrod</h2>
        <p className="article-prose__intro">
          Potenciometrie je metoda, která určuje vlastnosti roztoku z elektrického napětí mezi
          dvěma elektrodami při téměř nulovém odběru proudu. Používá se například k měření pH,
          tedy kyselosti vody. Vysvětlíme si ji na skleněné elektrodě ponořené do vzorku mořské
          vody a ukážeme, jak se napětí převádí na údaj využitelný při sledování oceánu.
        </p>
        <h3>Na co reaguje skleněný povrch</h3>
        <p>
          Kyselost vody souvisí s vodíkovými ionty, kladně nabitými částicemi vodíku, které se
          ve vodě vážou na její molekuly. Jejich chemické působení závisí na tom, kolik jich
          roztok obsahuje, i na okolních iontech. Veličinu, která obojí zahrnuje, nazýváme{" "}
          <strong>aktivita</strong>. Právě na aktivitu vodíkových iontů reaguje skleněná elektroda.
        </p>
        <p>
          Obecná definice pH vyjadřuje tuto aktivitu pomocí záporného desítkového logaritmu. Znamená to,
          že desetinásobná aktivita odpovídá pH nižšímu o jeden stupeň. pH je bezrozměrné číslo. Rozlišení aktivity a
          koncentrace při měření mořské vody rozebírají <SourceLink id="DOI_10_1515_pac_2020_0202">Stoica a kolegyně (2021)</SourceLink>.
        </p>
        <p>
          Citlivou částí elektrody je tenká skleněná baňka. Na jejím povrchu se ve vodě vytvoří
          hydratovaná vrstva, tedy vrstva obsahující vodu. Vodíkové ionty se v ní mohou vyměňovat
          s ionty původně přítomnými ve skle. Tato výměna mění elektrický náboj povrchu.
          Ustálí se podle aktivity vodíkových iontů v okolním roztoku, takže povrch získá
          elektrický potenciál závislý na pH. Potenciál zde popisuje elektrický stav povrchu,
          který můžeme porovnat s jinou elektrodou.
        </p>
        <p>
          Uvnitř baňky je roztok se stálým složením a vnitřní elektrický kontakt.
          I vnitřní povrch skla reaguje s vodou, ale jeho prostředí zůstává stejné. Když vně
          baňky vyměníme jeden vzorek za druhý, změní se především potenciál její vnější strany.
          Rozdíl mezi oběma stranami tak nese informaci o kyselosti vzorku. Konstrukci baňky
          a vznik této odezvy popisuje <SourceLink id="2008_USGS_pH_Field_Manual">metodika USGS, oddíl 6.4.1</SourceLink>.
        </p>
        <h3>Proč potřebujeme dvě elektrody</h3>
        <p>
          Napětí je rozdíl dvou elektrických potenciálů. K měřicí skleněné elektrodě proto
          přidáme <strong>referenční elektrodu</strong>, která poskytuje srovnávací potenciál.
          Běžné provedení obsahuje stříbrný vodič pokrytý chloridem stříbrným, ponořený do
          roztoku chloridu draselného. Stálé složení tohoto vnitřního roztoku udržuje také
          potenciál referenční elektrody.
        </p>
        <p>
          Referenční roztok má spojení se vzorkem přes malý porézní otvor, označovaný jako
          kapalný spoj nebo diafragma. Ionty jím procházejí a vytvářejí elektrické spojení
          mezi oběma roztoky. Skleněná a referenční elektroda mohou být samostatné, nebo mohou
          být zabudované do jediné sondy. Takové sondě říkáme kombinovaná elektroda.
        </p>
        <p>
          Obě elektrody připojíme k pH-metru. Jeho měřicí obvod má velmi vysoký vstupní odpor,
          takže při odečtu napětí odebírá jen nepatrný proud. Díky tomu měření téměř nenarušuje
          elektrické poměry, které se na površích ustálily. Prvotní údaj přístroje je napětí
          v milivoltech, tedy v tisícinách voltu. Uspořádání měřicího článku stanovuje také{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">oceánografický postup 6a</SourceLink>.
        </p>
        <figure className="article-figure">
          <div style={{ overflowX: "auto" }}>
            <Image src="/media/potentiometry/electrode-principle.svg" width={900} height={560} unoptimized
              style={{ minWidth: "36rem" }}
              alt="Skleněná a referenční elektroda ponořené do společného vzorku. Vodiče vedou k voltmetru. Ve spodní části schématu známý pufr a vzorek poskytují dvě napětí pro výpočet pH." />
          </div>
          <figcaption>
            Dvě oddělené elektrody pro přehlednost. Oranžově je citlivá skleněná baňka,
            zeleně kapalný spoj reference. Černé čáry představují vodiče, spodní šipky postup
            zpracování. Vnitřní roztok skleněné elektrody je oddělen od vzorku sklem.
            Vlastní schéma podle <SourceLink id="2008_USGS_pH_Field_Manual">USGS</SourceLink> a{" "}
            <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">postupu 6a</SourceLink>.
          </figcaption>
        </figure>
        <h3>Jak kalibrace přiřadí napětí hodnotu pH</h3>
        <p>
          Při stálé teplotě se napětí dobře fungujícího článku mění přibližně lineárně s pH.
          Stejnému rozdílu pH tedy odpovídá stejný rozdíl napětí. Tento vztah vychází z
          Nernstovy rovnice. Pro zvolenou orientaci elektrických vývodů jej zapíšeme takto:
        </p>
        <Equation tex={String.raw`E = E_0 - s\,\mathrm{pH}`} />
        <p>
          <InlineMath tex="E" /> je naměřené napětí a <InlineMath tex="E_0" /> je posun celé
          převodní přímky, obojí v milivoltech. Posun zahrnuje stálé příspěvky jednotlivých
          částí článku. Kladné číslo <InlineMath tex="s" /> udává změnu napětí připadající na
          jeden stupeň pH, v milivoltech na stupeň. Při 25 °C má ideální hodnotu přibližně
          59,16 mV na stupeň pH. Znaménko minus vyjadřuje, že při tomto zapojení s rostoucím
          pH napětí klesá. Při jiné teplotě se mění i hodnota <InlineMath tex="s" />.
        </p>
        <p>
          Kalibrací zjistíme, kam převodní přímka patří a jaký má sklon. Použijeme k tomu
          roztoky se známým pH. Obvykle jde o <strong>pufry</strong>: směsi, které přijímají nebo
          uvolňují vodíkové ionty, a tím brání velké změně pH při malém přídavku kyseliny nebo
          zásady. Například pufr TRIS obsahuje látku tris(hydroxymethyl)aminomethan a její
          podobu s navázaným vodíkovým iontem. Jejich poměr určuje pH pufru při dané teplotě.
        </p>
        <p>
          Pro mořskou vodu připravíme pufry v umělé mořské vodě s obdobným obsahem solí.
          Důvod souvisí s kapalným spojem reference. Různé ionty se v něm pohybují různou
          rychlostí, čímž na rozhraní roztoků vzniká další příspěvek k napětí. Podobné složení
          pufru a vzorku pomáhá tento příspěvek při jejich výměně zachovat. Převod pak
          vztahujeme k prostředí, ve kterém budeme měřit.
        </p>
        <p>
          Dva pufry s různým známým pH poskytují dva body převodní přímky. Z rozdílu jejich
          napětí a rozdílu pH určíme sklon, z jednoho bodu potom posun. Tak postupovala studie{" "}
          <SourceLink id="DOI_10_1515_pac_2020_0202">Stoicy a kolegyň (2021)</SourceLink>.
          Oceánografický <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">postup 6a</SourceLink>{" "}
          používá příbuznou variantu: dvěma pufry ověří sklon vůči Nernstově rovnici a při
          vyhovující odezvě počítá s teoretickým sklonem pro danou teplotu.
        </p>
        <h3>Stupnice pro mořskou vodu a vlastní měření</h3>
        <p>
          V oceánografii se často používá <strong>celková stupnice pHₜ</strong>. Část vodíkových
          iontů je v mořské vodě navázána v hydrogensíranovém iontu. Ten vzniká, když síranový
          iont přijme vodíkový iont. Celková stupnice vychází ze součtu koncentrací volných vodíkových iontů a hydrogensíranu,
          vyjádřeného na kilogram roztoku. I zde znamená desetinásobný součet pHₜ nižší o jeden
          stupeň.
        </p>
        <p>
          Pufrům lze přiřadit hodnoty právě na této stupnici.
          Když s nimi kalibrujeme, dostaneme na stejné stupnici i výsledek pro vzorek.
          Elektroda přitom stále reaguje na volné vodíkové ionty. Vazbu na celkovou stupnici
          zajišťuje kalibrace v odpovídajícím prostředí.
        </p>
        <p>
          Vzorek nalijeme do měřicí nádobky, ponoříme elektrody a ustálíme stejnou teplotu,
          jakou měly pufry. Nádobku během měření uzavřeme kolem elektrod, aby si voda
          nevyměňovala oxid uhličitý s okolním vzduchem. Ten se totiž účastní reakcí určujících
          pH vody. Po ustálení odečteme napětí. Známe-li napětí jednoho referenčního pufru
          a sklon převodu, získáme pH vzorku:
        </p>
        <Equation tex={String.raw`\mathrm{pH}_{\mathrm{vzorek}} = \mathrm{pH}_{\mathrm{pufr}} + \frac{E_{\mathrm{pufr}}-E_{\mathrm{vzorek}}}{s}`} />
        <p>
          Indexy označují vzorek a známý pufr. Obě napětí <InlineMath tex="E" /> dosazujeme
          v milivoltech, sklon <InlineMath tex="s" /> v milivoltech na stupeň pH.
          Rozdíl napětí vydělený sklonem říká, o kolik se pH vzorku liší od pufru.
          Přičtením k jeho známé hodnotě získáme výsledek. Jde o stejnou přímku jako výše,
          jen vyjádřenou pomocí změřeného referenčního bodu místo posunu <InlineMath tex="E_0" />.
        </p>
        <p>
          Výsledkem je pH konkrétního vzorku na zvolené stupnici a při teplotě měření.
          Laboratorní údaj při 25 °C umožňuje srovnávat vzorky za stejných podmínek.
          Pro pH vody při její původní teplotě v oceánu potřebujeme další chemický přepočet,
          nebo měření přímo v moři. Teplotní kompenzace pH-metru upravuje sklon odezvy
          elektrody. Samotnou změnu chemických rovnováh ve vodě tím nepočítá. Rozlišení
          stupnic a laboratorní postup vysvětluje{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">příručka pro měření oceánského CO₂</SourceLink>.
        </p>
        <h3>Použití v oceánu a vývoj čidel</h3>
        <p>
          Opakovaná měření pH ukazují, jak se mění kyselost vody v čase nebo s hloubkou.
          Pro výzkum <Link href="/pozorovani/acidifikace-oceanu">acidifikace oceánu</Link> potřebujeme
          dlouhodobý vývoj zasadit do denních a sezonních změn. Přístroj ponechaný ve vodě
          může zachytit i kolísání mezi jednotlivými odběry. Taková měření pomáhají popsat
          prostředí, kterému jsou vystaveny mořské organismy, a volit podmínky laboratorních
          experimentů s okyselováním.
        </p>
        <p>
          Skleněné rozhraní zkoumali již <SourceLink id="DOI_10_1515_zpch_1909_6720">Haber a Klemensiewicz (1909)</SourceLink>.
          V původní práci spojili teorii elektrických potenciálů na rozhraní látek s pokusy,
          při nichž se napětí skleněné elektrody měnilo po přidávání kyseliny a zásady.
          Dnešní kombinované elektrody mají tento princip zabudovaný do snadno použitelné sondy.
        </p>
        <p>
          Pro dlouhé pobyty v moři se používají také polovodičová čidla typu{" "}
          <strong>ISFET</strong>, anglicky ion-sensitive field-effect transistor, tedy tranzistor
          citlivý na ionty. Vodíkové ionty mění náboj povrchu jeho izolační vrstvy.
          Ten ovlivňuje průchod proudu uvnitř tranzistoru. Elektronika upravuje napětí vůči
          referenční elektrodě tak, aby proud udržela stálý, a potřebná hodnota napětí slouží
          jako signál pH. Skleněnou baňku tak nahrazuje polovodičová součástka.
          {" "}<SourceLink id="DOI_10_4319_lom_2010_8_172">Martz a kolegové (2010)</SourceLink>{" "}
          ověřovali čidlo Durafet tohoto typu v nádrži, při měření za plavby i na mořském kotvení.
        </p>
        <p>
          Tuto konstrukci využívá oceánský přístroj SeaFET. Na stanovišti Porcupine Abyssal
          Plain v severovýchodním Atlantiku byl například v roce 2019 součástí měřicího rámu
          zavěšeného 30 metrů pod povrchovou bójí. Přístroj zaznamenával pH společně s časem
          a teplotou. Jeho instalaci, nastavení a soubory měření popisuje{" "}
          <SourceLink id="2019_NOC_Discovery_103">zpráva z plavby RRS Discovery 103</SourceLink>.
          Další cestu k měření stejné vlastnosti vody představuje{" "}
          <Link href="/metody/spektrofotometrie">spektrofotometrie</Link>, která místo elektrického
          potenciálu využívá pohlcování světla indikátorovým barvivem.
        </p>
        <figure className="article-figure">
          <Image src="/media/potentiometry/seafet-pap-frame.jpg" width={873} height={582} unoptimized
            alt="Šedé válcové pouzdro přístroje SeaFET upevněné mezi dalšími senzory na kovovém měřicím rámu." />
          <figcaption>
            SeaFET číslo 257 na měřicím rámu pro observatoř Porcupine Abyssal Plain.
            Jeho šedé válcové pouzdro je v zadní části snímku. Kovová konstrukce nese více
            přístrojů, samotná citlivá plocha pH čidla zde není rozlišitelná.
            Snímek zachycuje polovodičovou variantu, nikoli skleněnou elektrodu ze schématu.
            © National Oceanography Centre, 2019. Susan Hartman a kol.,{" "}
            <SourceLink id="2019_NOC_Discovery_103">RRS Discovery Cruise 103, Cruise Report 61, s. 60</SourceLink>.
            NERC Open Research Archive (NORA). Převzato beze změn pro vzdělávací použití podle{" "}
            <SourceLink id="2022_NORA_Reuse_Policy">podmínek repozitáře</SourceLink>.
          </figcaption>
        </figure>
        <h2>Nejistoty a ověření</h2>
        <p>
          Výsledek ovlivňují zejména referenční roztoky, teplota a změny potenciálu kapalného
          spoje. Při delším nasazení přibývá stárnutí a znečištění čidla. Laboratorní studie <SourceLink id="DOI_10_1515_pac_2020_0202">Stoicy a kolegyň</SourceLink>{" "}
          se čtyřmi novými elektrodami a pufry v umělé mořské vodě dosáhla rozšířené nejistoty
          přibližně 0,01 pH. Platí to pro její kontrolované podmínky. Pro sledování malých
          dlouhodobých změn je proto podstatná návazná kontrola jednotlivých nasazení a
          porovnání s jiným měřením, například spektrofotometrickým.
        </p>
        <details className="article-details">
          <summary>Co ovlivňuje výsledek a jak se to kontroluje</summary>
          <h3>Reference a složení vody</h3>
          <p>
            Nejistota známého pH pufru přechází do výsledku vzorku. Rozdílné složení pufru
            a vzorku navíc mění potenciál kapalného spoje. <SourceLink id="DOI_10_1515_pac_2020_0202">Stoica a kolegyně</SourceLink>{" "}
            proto ověřovaly kalibraci ve slaném prostředí na třetím roztoku, který k určení
            přímky nepoužily. Při 25 °C a praktické salinitě 35 získaly pro kontrolní pHₜ
            8,101 výsledky 8,09 až 8,10. Rozšířené nejistoty činily 0,005 u reference a 0,01
            u měření, obojí s koeficientem rozšíření 2. Ten za obvyklých předpokladů odpovídá
            přibližně 95% pokrytí. Rozpočet zahrnoval referenci, odchylku od ní, proměnlivost
            měření a rozlišení přístroje.
          </p>
          <p>
            Kontrolní roztok prověřil použití kalibrace na dalším vzorku. Sdílel však se
            dvěma kalibračními roztoky prostředí umělé mořské vody a postup přiřazení referenčních
            hodnot. Studie zkoušela nové elektrody. Dlouhodobou stabilitu v oceánu tím neověřila.
          </p>
          <h3>Stabilita a teplota</h3>
          <p>
            Opětovným měřením stejného pufru zjistíme, zda se převod během práce neposunul.
            Opakované vzorky ukazují rozptyl výsledků. <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">Postup 6a</SourceLink>{" "}
            uvádí dosažitelnou směrodatnou odchylku opakovaných měření 0,003 pH při pečlivé
            práci. Tento rozptyl není celková nejistota. Teplota ovlivňuje současně sklon
            elektrody, pH pufru i pH vzorku, proto musí být při jejich porovnání známá a ustálená.
          </p>
          <h3>Ověření při nasazení v moři</h3>
          <p>
            V testech <SourceLink id="DOI_10_4319_lom_2010_8_172">Martze a kolegů</SourceLink>{" "}
            vykazoval Durafet při atmosférickém tlaku stabilitu lepší než 0,005 pH v průběhu týdnů až měsíců.
            Autoři porovnávali čidla také se spektrofotometrickými rozbory odebraných vzorků.
            Tyto rozbory ovšem sloužily i k přiřazení kalibračního posunu, takže shoda
            neznamená nezávislé ověření absolutní stupnice. Dlouhodobá stabilita závisí
            na konkrétním čidle a prostředí. Zpráva <SourceLink id="2019_NOC_Discovery_103">Discovery 103, s. 63</SourceLink>{" "}
            například u vyfotografovaného SeaFETu popisuje dlouhé ustalování a závadu uznanou
            dodavatelem. Fotografie dokládá jeho nasazení, nikoli správnost všech získaných údajů.
          </p>
        </details>
        <h2>Příklad kalibrace a kontroly výsledku</h2>
        <h3>Třetí roztok ověří převod</h3>
        <p>
          Použijeme zveřejněný experiment <SourceLink id="DOI_10_1515_pac_2020_0202">Stoicy a kolegyň (2021), tabulky 3 a 7</SourceLink>.
          Dva roztoky měly při 25 °C přiřazené pHₜ 7,622 a 8,209. Autorky jimi kalibrovaly
          čtyři kombinované skleněné elektrody. Pak změřily třetí roztok s referenčním pHₜ
          8,101. Všechny tři roztoky měly praktickou salinitu 35, bezrozměrný údaj o slanosti
          přibližně odpovídající běžné mořské vodě. Přiřazené hodnoty obou kalibračních
          roztoků měly rozšířenou nejistotu 0,005 pH, stejně jako kontrolní roztok.
        </p>
        <p>
          Z veřejné tabulky přebíráme již vypočtené hodnoty pHₜ. Náš přepočet proto začíná
          kontrolou výsledků, nikoli původními napětími. U každé elektrody odečteme referenční
          hodnotu 8,101. Záporný rozdíl znamená nižší výsledek než reference.
        </p>
        <div className="method-data-output"><div className="method-data-output__table-wrap" tabIndex={0} role="region" aria-label="Výsledky ověření čtyř elektrod">
          <table>
            <caption>Kontrolní roztok č. 2 po kalibraci slanými pufry při 25 °C</caption>
            <thead><tr><th>Elektroda</th><th>Naměřené pHₜ</th><th>Rozdíl vůči 8,101</th></tr></thead>
            <tbody>
              <tr><td>Unitrode 1</td><td>8,10 ± 0,01</td><td>−0,001</td></tr>
              <tr><td>Unitrode 2</td><td>8,10 ± 0,01</td><td>−0,001</td></tr>
              <tr><td>Primatrode 1</td><td>8,09 ± 0,01</td><td>−0,011</td></tr>
              <tr><td>Primatrode 2</td><td>8,10 ± 0,01</td><td>−0,001</td></tr>
            </tbody>
          </table>
        </div></div>
        <p>
          Rozdíly jsou vypočtené z publikovaných zaokrouhlených čísel. Třetí desetinné místo
          tedy nepředstavuje vyšší rozlišení měření. Uvedené „±“ označuje rozšířenou nejistotu
          s koeficientem 2, tedy přibližně 95% pokrytí za obvyklých předpokladů. Referenční hodnota je 8,101 ± 0,005. Výsledky ukazují, že převod získaný ze dvou pufrů fungoval také pro třetí roztok,
          který se na kalibraci nepodílel.
        </p>
        <h3>Jak vypadá samotný převod napětí</h3>
        <p>
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">Postup 6a, oddíl 8.3</SourceLink>{" "}
          obsahuje také číselnou ukázku celého převodu. Je to příklad z metodické příručky,
          který není přiřazen ke konkrétnímu odběru v oceánu. Při 25 °C a salinitě 35 má
          pufr TRIS pHₜ 8,0936 a naměřené napětí −72,4 mV. Napětí vzorku je −67,0 mV.
          Se sklonem 59,16 mV na stupeň pH dosadíme:
        </p>
        <Equation tex={[
          String.raw`\mathrm{pH}_{\mathrm{T,vzorek}} = 8{,}0936 + \frac{-72{,}4-(-67{,}0)}{59{,}16}`,
          String.raw`\approx 8{,}0023`,
        ]} />
        <p>
          Rozdíl napětí je −5,4 mV. Po vydělení sklonem dostáváme rozdíl přibližně −0,0913
          pH vůči pufru. Vzorek má tedy nižší pHₜ než pufr, při stejné teplotě 25 °C.
          Čtyři desetinná místa zde umožňují zkontrolovat aritmetiku převodu.
        </p>
        <details className="article-details">
          <summary>Data a zopakování obou výpočtů</summary>
          <p>
            Přepis čtyř kontrolních výsledků je v <a href={dataPath + "/control-results.csv"}>tabulce CSV</a>.
            <a href={dataPath + "/example.json"}> Datový soubor JSON</a> obsahuje referenční hodnoty,
            zdrojové tabulky, stupnici, teplotu, salinitu i oddělenou ukázku z postupu 6a.
            Přístup ke zdrojům byl ověřen 19. října 2026. V metodické ukázce druhý pufr,
            2-aminopyridin, poskytuje pHₜ 6,7866 a napětí 4,9 mV. Oba pufry dávají sklon
            59,14 mV na stupeň pH, blízký teoretické hodnotě 59,16 použité ve výpočtu vzorku.
          </p>
          <p>
            Stáhněte JSON a <a href={dataPath + "/reproduce.py"}>skript pro Python</a> do stejné složky
            a spusťte <code>python reproduce.py</code>. Skript nepotřebuje další knihovny.
            Vypíše čtyři rozdíly, kontrolní sklon a pHₜ ukázkového vzorku. Vstupní čísla
            zachovávají počet desetinných míst zveřejněný v podkladech.
          </p>
        </details>
        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Potenciometrie využívá vztah mezi chemickým prostředím a elektrickým potenciálem
            citlivého povrchu. Kalibrace známými roztoky umožňuje převést napětí mezi elektrodami
            na pH vody. Laboratorní rozbory i samostatná čidla v oceánu tak zpřístupňují
            změny kyselosti a jejich časový průběh, které potřebujeme znát při výzkumu acidifikace.
          </p>
        </div>
      </div>
    </article>
  );
}

