import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import example from "../../public/data/methods/snow-measurements/example.json";

const dataPath = "/data/methods/snow-measurements";
const number = (value: number) => value.toLocaleString("cs-CZ", { maximumFractionDigits: 2 });

export function SnowMeasurementArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Výška sněhu</dt><dd>Svislá vzdálenost od podkladu k povrchu sněhu v daném místě. Podkladem může být půda nebo led.</dd></div>
          <div><dt>Hustota sněhu</dt><dd>Hmotnost sněhu dělená jeho objemem, včetně pórů mezi zrny. Udává se v kg/m³.</dd></div>
          <div><dt>Vodní hodnota</dt><dd>Množství vody uložené ve sněhu, vyjádřené výškou vodního sloupce. Zkratka SWE vychází z anglického snow water equivalent.</dd></div>
          <div><dt>Sněhový profil</dt><dd>Popis sněhu od povrchu k podkladu. Zahrnuje polohy vrstev a měření jejich vlastností, například hustoty.</dd></div>
        </dl>
        <p className="article-glossary__note">Jeden milimetr vodní hodnoty odpovídá jednomu kilogramu vody na metr čtvereční. Centimetr sněhu takto převést nelze bez znalosti jeho hustoty.</p>
      </aside>

      <div className="article-prose">
        <h2>Od sněhové vrstvy k množství vody</h2>
        <p className="article-prose__intro">
          Terénní měření sněhu zjišťuje, jak je pokrývka vysoká a kolik vody obsahuje.
          Výšku změříme tyčí nebo pravítkem. Dutým odběrákem vyjmeme známý objem sněhu a zvážíme jej.
          Z hmotnosti a objemu získáme hustotu, která říká, jaká hmotnost připadá na jednotku objemu.
          Z hustoty a tloušťky jednotlivých vrstev potom vypočítáme množství vody v celé pokrývce.
        </p>
        <p>
          Sníh tvoří ledová zrna, vzduch v pórech a při tání také kapalná voda. Při sesedání se zmenšuje
          objem, který sníh zaujímá. Pokud se jeho hmotnost nezmění, připadá na stejný objem více sněhu,
          a hustota tedy roste. Výška proto může klesnout i bez úbytku vody.
          <strong> Vodní hodnota sněhu</strong>, označovaná SWE z anglického <em>snow water equivalent</em>,
          vyjadřuje tuto zásobu jako výšku vodního sloupce se stejnou hmotností nad danou plochou.
          Pro převod používáme referenční hustotu vody 1 000 kg/m³. Při ní je 1 mm SWE roven 1 kg/m²,
          tedy jednomu kilogramu na metr čtvereční. Definice a rozlišení výšky, hustoty a vodní hodnoty stanovuje
          <SourceLink id="2009_Fierz_Snow_Classification"> mezinárodní klasifikace sněhu (Fierz et al., 2009)</SourceLink>.
        </p>
        <p>
          Podrobně projdeme odběr malých vzorků v odkryté sněhové stěně. Takto lze sledovat sníh od
          povrchu k podkladu a sestavit sněhový profil, tedy popis polohy vrstev a jejich vlastností.
          Výpočet ukážeme na skutečném profilu z Arktidy.
          Potom porovnáme trubici pro celý sněhový sloupec a automatické přístroje.
          Výsledky dlouhodobého sledování shrnuje článek
          <Link href="/pozorovani/snehova-pokryvka-a-permafrost"> Sněhová pokrývka a permafrost</Link>.
        </p>

        <h2>Co znamená změřit výšku sněhu</h2>
        <p>
          Měřicí tyč zasuneme svisle až k předem určenému podkladu a odečteme polohu sněhového povrchu.
          Na pevnině je podkladem obvykle zem, na mořském ledu jeho horní povrch. Kámen, ledová krusta
          uvnitř sněhu nebo vegetace mohou sondu zastavit předčasně. V měkké půdě naopak hrozí zatlačení
          pod skutečný podklad. V prvním případě bychom výšku podhodnotili, ve druhém nadhodnotili.
          Odkrytá stěna umožní rozhraní přímo prohlédnout.
        </p>
        <p>
          Na svahu odlišujeme svislou výšku od tloušťky měřené kolmo ke svahu. Svislé měření míří
          přímo dolů, zatímco kolmé měření sleduje směr nejkratší vzdálenosti mezi rovnoběžnými rozhraními.
          Pro dvě rovnoběžná rozhraní je kolmá tloušťka rovna svislé výšce násobené kosinem sklonu.
          Kosinus zde vyjadřuje geometrický převod mezi oběma směry, na svahu proto vychází kolmá tloušťka menší.
          Záměna obou vzdáleností by změnila objem sněhu vztažený k vodorovné ploše.
          Zapisujeme proto směr měření, podklad, místo a čas. Výšku celé pokrývky rozlišujeme
          také od nového sněhu, který přibyl za určený interval.
          <SourceLink id="2009_Fierz_Snow_Classification"> Fierz et al. (2009), oddíl 2</SourceLink>
        </p>
        <p>
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">Příručka Světové meteorologické organizace
          (WMO, 2024), kapitola 2</SourceLink>, doporučuje opakované odečty a popis okolí stanice.
          Vítr přesouvá sníh mezi hřebeny a závějemi, stromy zachycují sněžení a stíní povrch.
          Jedna snadno přístupná rovná plocha tak nemusí zastupovat les ani horský svah.
          Vyšší počet desetinných míst na pravítku tuto prostorovou odlišnost neodstraní.
        </p>

        <h2>Odběrák, pravítko a váha</h2>
        <p>
          Konkrétním příkladem je sestava použitá při expedici MOSAiC, při níž výzkumná loď Polarstern
          v letech 2019–2020 doprovázela unášený arktický mořský led.
          Výzkumníci odebírali sníh nádobkou o objemu <strong>100 cm³</strong>, měřili polohu odběru
          pravítkem a používali digitální váhy Emerald500. Profil vzorkovali po 3 cm.
          Sestavu a postup popisují <SourceLink id="DOI_10_1038_s41597_023_02273_1">Macfarlane et al. (2023)</SourceLink>.
        </p>
        <p>
          V odkryté stěně musí zůstat sníh nenarušený kopáním. Odběrák zasuneme tak, aby se úplně naplnil,
          zarovnáme jeho okraje a vzorek vyjmeme bez ztráty zrn. Objem sněhu pak známe z objemu nádobky.
          Hmotnost prázdné nádobky odečteme od hmotnosti nádobky se sněhem, aby ve výsledku zůstala
          pouze hmotnost vzorku. Tu dále označujeme jako čistou hmotnost.
        </p>
        <p>
          Váha reaguje na tíhovou sílu, kterou na ni vzorek působí, a po kalibraci ji vyjadřuje
          jako hmotnost. Její displej tak poskytuje údaj o hmotnosti, pravítko o poloze odběru ve stěně.
          Hustota a vodní hodnota vzniknou až výpočtem. Stlačený, neúplný nebo vysypaný vzorek je nutné
          odebrat znovu. Postup pro souvislé odběry a jejich opakování uvádí
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO (2024), oddíl 2.4.1</SourceLink>.
        </p>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Od odběru sněhu k vodní hodnotě">
            <div><span>1</span><strong>Vymezit interval</strong><small>Pravítko určí horní a dolní hranici odběru nad podkladem.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Odebrat a zvážit</strong><small>Známý objem V vyjmeme bez stlačení a zjistíme čistou hmotnost m.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Vypočítat hustotu</strong><small>Podíl m/V přiřadíme vzorkovanému intervalu.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Sečíst vodu</strong><small>Hustotu násobíme tloušťkou intervalu a příspěvky sečteme.</small></div>
          </div>
          <figcaption>
            Schéma odběru ve sněhovém profilu. Šipky ukazují postup od vymezení vzorku k součtu vody
            nad jednotkovou plochou. Pravítko, objem odběráku a váha poskytují tři samostatné vstupy.
            Vlastní schéma podle <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">WMO (2024)</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Třícentimetrový odběr poskytne průměrnou hustotu celého odebraného objemu.
          Tenkou ledovou krustu a vzdušnější sníh kolem ní sloučí do jednoho údaje.
          Tato nejmenší rozlišovaná tloušťka je prostorovým rozlišením vzorkování. Rozlišení vah naproti
          tomu popisuje, jak malé změny hmotnosti lze v jejich údaji rozeznat. Ani jedno samo
          neudává nejistotu výsledku. V níže vybraných datech jsou hustoty 174 až 288 kg/m³ uložené
          v celých kg/m³. Jde o rozsah tohoto profilu a podobu zveřejněných čísel,
          nikoli o provozní rozsah nebo kalibrační přesnost přístroje.
        </p>

        <h2>Výpočet hustoty a vodní hodnoty</h2>
        <p>
          Nejprve potřebujeme zjistit hustotu odebraného sněhu. Máme čistou hmotnost vzorku a jeho
          známý objem. Hmotnost vydělíme objemem, čímž ji přepočteme na jednotku objemu:
        </p>
        <div className="article-formula method-equation"><p>ρ = m / V</p></div>
        <p>
          Řecké písmeno ρ označuje hustotu v kilogramech na metr krychlový (kg/m³).
          m je čistá hmotnost sněhu v kilogramech a V objem vzorku v metrech krychlových,
          včetně pórů mezi zrny. Odběrák o 100 cm³ má objem 0,0001 m³.
          Vzorec předpokládá, že odebraný sníh zachoval svůj objem a že se při přenosu neztratila
          zrna ani voda. Jde o vážení celého vzorku, takže se do jeho hmotnosti zahrne i voda mezi zrny.
        </p>
        <p>
          Z hustoty malého vzorku nyní chceme určit vodní hodnotu celého sněhového sloupce.
          Profil rozdělíme na navazující intervaly, u každého známe hustotu a svislou tloušťku.
          Jejich součin dává hmotnost sněhu v daném intervalu nad jednotkou vodorovné plochy.
          Dělením hustotou vody převedeme tuto hmotnost na výšku odpovídajícího vodního sloupce.
          Příspěvky všech intervalů pak sečteme:
        </p>
        <div className="article-formula method-equation"><p>SWE = Σ (ρ<sub>i</sub> / ρ<sub>w</sub>) Δh<sub>i</sub></p></div>
        <p>
          Znak Σ znamená součet příspěvků všech intervalů. Index i označuje konkrétní interval,
          ρ<sub>i</sub> jeho hustotu a Δh<sub>i</sub> jeho svislou tloušťku v metrech.
          Referenční hustotu vody ρ<sub>w</sub> zde volíme 1 000 kg/m³.
          Výsledek této rovnice je v metrech vody, pro milimetry jej násobíme tisícem.
          Při této volbě hustoty vody se dělení tisícem a následný převod na milimetry navzájem vyruší.
          Prakticky tedy hustota v kg/m³ násobená tloušťkou v metrech rovnou dává číselnou hodnotu SWE v mm.
          Tento součet navazujících odběrů popisuje
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO (2024), rovnice 2.5 a 2.6</SourceLink>.
        </p>
        <p>
          Výpočet přisuzuje naměřenou hustotu celému příslušnému intervalu. Vynechaná vrstva proto potřebuje
          další měření nebo výslovně označený odhad. Překrývající se odběry se nesmějí prostě sečíst,
          protože by stejná část sloupce vstoupila dvakrát. Průměrnou hustotu celého profilu počítáme
          s ohledem na tloušťku intervalů. Silnější interval zaujímá větší část sloupce, a proto má
          v průměru větší váhu. Prostý průměr jednotlivých hustot je správný pouze pro stejně silné intervaly.
        </p>

        <h2>Skutečný profil: 12 cm sněhu nad mořským ledem</h2>
        <p>
          Použijeme <SourceLink id="DOI_10_1594_PANGAEA_940214">datový soubor Macfarlane et al. (2022)</SourceLink>,
          zveřejněný v repozitáři PANGAEA. Vybrali jsme událost <code>PS122-1_10-11</code> z 2. prosince 2019,
          lokalitu <code>ds-coring-SYI</code>, na 85,922758° severní šířky a 113,808365° východní délky.
          Čtyři záznamy tvoří souvislý profil od 12 cm až k rozhraní sněhu a ledu, které má výšku 0 cm.
          Výběr slouží k ukázce úplného výpočtu, nezastupuje průměrný arktický sníh.
        </p>
        <p>
          Soubor obsahuje <strong>již vypočtené hustoty</strong> a horní a dolní hranice odběrů.
          Původní hmotnosti nádobek a sněhu ani kalibrační protokoly konkrétních vah v něm nejsou.
          Čtenář proto může samostatně zopakovat převod zveřejněných hustot na vodní hodnotu.
          Předchozí vážení známe z popisu metody. Žádnou hodnotu v tomto profilu neopravujeme,
          nedoplňujeme ani nevyřazujeme.
        </p>
        <p>
          První záznam patří nejvyššímu intervalu, od 9 do 12 cm nad ledem. Rozdíl jeho hranic dává
          tloušťku 0,03 m a zveřejněná hustota je 174 kg/m³. Vynásobením získáme příspěvek tohoto
          intervalu: 174 × 0,03 = 5,22 mm vody. Tabulka stejným způsobem ukazuje všechny čtyři odběry.
          Výšky v prvním sloupci určují jejich polohu, poslední sloupec množství vody v každém z nich.
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" aria-label="Čtyři intervaly sněhového profilu" tabIndex={0}>
            <table>
              <caption>Všechny čtyři odběry vybraného profilu</caption>
              <thead><tr><th>Výška nad ledem <span className="method-data-output__unit">cm</span></th><th>Hustota <span className="method-data-output__unit">kg/m³</span></th><th>Příspěvek vody <span className="method-data-output__unit">mm</span></th></tr></thead>
              <tbody>{example.result.layers.map((row) => <tr key={row.excelRow}><th scope="row">{number(row.bottomCm)}–{number(row.topCm)}</th><td>{number(row.densityKgM3)}</td><td>{number(row.sweMm)}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
        <p>
          Odběry pokrývají celých 12 cm sněhu bez mezer a překryvů, takže můžeme jejich příspěvky sečíst.
          Součet 5,22 + 6,54 + 8,64 + 8,10 dává <strong>{number(example.result.sweMm)} mm SWE</strong>,
          tedy 28,5 kg na metr čtvereční. Průměrnou hustotu celého profilu získáme, když hmotnost
          na jednotku plochy vydělíme celkovou výškou sněhu v metrech:
          28,5 / 0,12 = <strong>{number(example.result.meanDensityKgM3)} kg/m³</strong>.
          Výsledek říká, jaká hmotnost by připadala na metr krychlový sněhu s průměrnými vlastnostmi tohoto profilu.
          Desetinná místa ukazují výsledek výpočtu z publikovaných vstupů, ne jeho měřicí nejistotu.
        </p>
        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Posouvatelný graf hustoty a vodní hodnoty sněhu">
            <Image className="article-figure__media" src="/media/snow-measurements/snow-profile.png"
              alt="Čtyři intervaly sněhu od povrchu k ledu mají hustoty 174, 218, 288 a 270 kg na metr krychlový. Jejich vodní hodnoty jsou 5,22, 6,54, 8,64 a 8,10 mm, dohromady 28,5 mm."
              width={1600} height={1120} sizes="(max-width: 900px) 780px, 900px" unoptimized />
          </div>
          <figcaption>
            Svislá osa obou panelů ukazuje výšku nad ledem. Vlevo je zveřejněná hustota,
            vpravo vypočtená vodní hodnota příslušného třícentimetrového intervalu.
            Barvy spojují stejné odběry v obou panelech. Všechny intervaly mají stejnou tloušťku,
            proto nejvíce vody obsahuje interval 3–6 cm s nejvyšší hustotou.
            Hranice sloupců vymezují odběry, nemusí odpovídat přirozeným vrstvám sněhu.
            Vlastní graf z <SourceLink id="DOI_10_1594_PANGAEA_940214">dat Macfarlane et al. (2022)</SourceLink>,
            data i graf CC BY 4.0, graf Klimatologie.eu.
          </figcaption>
        </figure>
        <p>
          Na mořském ledu může sníh obsahovat sůl. Zde uvádíme hmotnostní vodní ekvivalent s referencí
          1 000 kg/m³. Neprovádíme korekci na slanost ani nepočítáme přesný objem slané vody po roztání.
          Přítomnost soli a její měření dokumentuje
          <SourceLink id="DOI_10_1038_s41597_023_02273_1"> studie expedice MOSAiC</SourceLink>.
        </p>
        <details className="method-details">
          <summary>Data a opakování výpočtu</summary>
          <p>
            Původní soubor <code>metadata_DensityCutter_removedOvalues.xlsx</code> byl stažen 4. října 2026.
            Nabízíme jeho nezměněnou kopii pod kratším názvem <code>density.xlsx</code>.
            Výběr zahrnuje řádky 2–5 na listu Sheet1, všechny se stejným označením události,
            vah SensorScale = 1 a časovým údajem 2019-12-02 07:59:30 zapsaným poskytovatelem.
          </p>
          <p>
            Stáhněte do jedné složky <a href={`${dataPath}/density.xlsx`} download>původní tabulku</a>,{" "}
            <a href={`${dataPath}/example.json`} download>metadata a výsledky</a> a{" "}
            <a href={`${dataPath}/reproduce.py`} download>výpočetní skript</a>.
            Příkaz <code>python reproduce.py</code> používá Python 3 bez doplňkových knihoven.
            Kontroluje otisk SHA-256 souboru, shodu místa a času, platné hodnoty a návaznost intervalů
            bez mezer a překryvů. Potom vypíše příspěvky vody a jejich součet.
            Pro opakování grafu je k dispozici <a href={`${dataPath}/plot.py`} download>skript s knihovnou Matplotlib</a>.
          </p>
        </details>

        <h2>Kalibrace a kontrola odběru</h2>
        <p>
          Při kalibraci váhy zjišťujeme, jak její údaj odpovídá hmotnosti referenčních závaží,
          a zahrnujeme přitom nejistoty obou hodnot. Hmotnost závaží musí být doložena návaznými
          kalibracemi, které propojují místní vážení s jednotkou kilogram.
          Samotná kalibrace popisuje vztah mezi údajem a referencí. Seřízení znamená změnu odezvy
          přístroje a provádí se odděleně.
          Rozlišení těchto úkonů odpovídá
          <SourceLink id="2012_VIM_Calibration"> mezinárodnímu metrologickému slovníku VIM</SourceLink>.
          Vynulování displeje nebo odečtení prázdné nádobky samo o sobě kalibraci nenahrazuje.
          Odečtením nádobky odstraníme její hmotnost z výsledku, ale neověříme tím, zda váha správně měří
          hmotnost vloženého sněhu.
        </p>
        <p>
          Před terénní prací ověříme váhu závažím, objem a nepoškozené hrany odběráku i délkovou stupnici.
          Zkouška objemu může vycházet z rozměrů nebo z hmotnosti vody známé hustoty, kterou pojme nádobka.
          Ve druhém případě vydělíme hmotnost vody její hustotou a získáme objem, který vyplnila.
          V terénu kontrolujeme čistotu a suchost nádobky, stabilitu nuly a chráníme vážení před větrem.
          Sezónní ověření váhy kalibračním závažím požaduje
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO (2024), oddíl 2.4.1.2</SourceLink>.
          Tyto kontroly popisují požadovaný postup. Veřejný soubor našeho příkladu neumožňuje doložit
          konkrétní kalibrační odchylku použitých vah.
        </p>
        <p>
          Opakovaný odběr kousek vedle prvního pomůže odhalit vysypání nebo stlačení vzorku.
          Pro postup s navazujícími válcovými odběry doporučuje WMO při rozdílu výšky či hmotnosti
          opakovaných vzorků větším než 5 % třetí odběr. Tato hranice je pravidlem kontroly odběru,
          nikoli zárukou pětiprocentní nejistoty každého měření. Rozdíl sousedních vzorků může zahrnovat
          také skutečnou proměnlivost sněhu. Opakování proto upozorní na nesoulad, ale samo nerozhodne,
          zda vznikl při odběru, nebo zda se sníh mezi místy skutečně liší.
        </p>

        <h2>Porovnání s jiným měřicím principem</h2>
        <p>
          <SourceLink id="DOI_10_5194_tc_10_371_2016">Proksch et al. (2016)</SourceLink> porovnali odběráky
          s rentgenovou mikrotomografií, která ze série rentgenových snímků rekonstruuje prostorové
          rozložení ledu a pórů. Místo vážení tedy zjišťuje, jakou část objemu zaujímá led,
          a z tohoto podílu určuje hustotu sněhu.
          Aby porovnání odpovídalo stejným výškám, autoři podrobnější tomografický profil zprůměrovali
          na rozlišení odběrů. Porovnávali tak průměry přes odpovídající výškové intervaly,
          nikoli podrobné změny z rentgenových snímků s jedinou hustotou velkého vzorku.
        </p>
        <p>
          V terénním porovnání bez ledových vrstev autoři shrnuli rozdíly mezi oběma postupy tak,
          aby se kladné a záporné odchylky vzájemně nerušily. Rozdíly umocnili na druhou,
          čtverce zprůměrovali a výsledek odmocnili. U krabičkového odběráku tento odmocněný průměr
          čtverců rozdílů činil 7 % průměrné tomografické hustoty. U dalších dvou typů odběráků
          byla stejná míra 9 % a 5 %.
        </p>
        <p>
          Průměrná odchylka krabičkového odběráku se zachováním znamének byla −1 %.
          Při tomto průměrování se odchylky opačných směrů mohou vzájemně rušit.
          Hodnota proto popisuje průměrný posun mezi postupy, zatímco předchozích 7 % celkovou velikost rozdílů.
          Výsledky patří tomuto experimentu v Davosu, nelze je připsat jako kalibrační certifikát
          arktickému profilu v našem příkladu.
        </p>
        <p>
          Rentgenové měření a vážení mají rozdílné fyzikální principy. Sdílejí však sněhový profil
          a nejistotu prostorového přiřazení, protože sousední odběry neobsahují přesně tatáž zrna.
          Tomografie navíc vyžaduje rozhodnout, které části obrazu jsou led a které vzduch.
          Srovnání tedy poskytuje samostatnou kontrolu s vlastními omezeními.
          Uvedené výsledky byly porovnáním měření, v našem výpočtu z nich neodvozujeme opravný koeficient.
        </p>

        <h2>Jak velká je nejistota</h2>
        <p>
          Chyba hmotnosti, objemu odběráku a tloušťky vzorkované vrstvy ovlivní různé části výpočtu.
          Ztráta zrn snižuje vypočtenou hustotu, stlačení sněhu při plnění ji může zvýšit.
          Stejná chyba objemu všech odběrů posune celý profil stejným směrem. Pokud bychom například
          používali příliš velký objem v děliteli m/V, vycházely by všechny hustoty nižší.
          Součtem mnoha vrstev taková společná chyba nezmizí.
          U mokrého sněhu může během manipulace odtékat voda. Ledová krusta zase ztěžuje úplné vyříznutí vzorku.
        </p>
        <p>
          Náš vybraný profil obsahuje jeden záznam pro každý interval. Chybí opakované odběry i úplný
          rozpočet nejistoty, tedy vyčíslení příspěvků jednotlivých nejistých vstupů k výsledku.
          Nemůžeme mu proto připojit doložený interval „±“.
          Citlivost výsledku na úplnost odběru můžeme ukázat výpočtem, kolik vody by chybělo,
          kdybychom neproměřili 1 cm sněhu o průměrné hustotě tohoto profilu.
          Hustotu 237,5 kg/m³ vynásobíme tloušťkou 0,01 m. Vyjde 2,375 mm vody,
          tedy asi 8,3 % jeho vypočtené vodní hodnoty.
          Je to podmíněný výpočet, nikoli zjištěná chyba profilu. Ukazuje význam správně určeného podkladu
          a úplného pokrytí výšky.
        </p>
        <p>
          Pro větší území přibývá nejistota výběru míst. Přesně zvážený vzorek v závěji nemůže sám
          určit průměrnou zásobu vody na větrem obnaženém svahu. Terénní trasy proto kombinují
          více vážených odběrů s hustší sítí rychlých měření výšky. Rozmístění bodů a poměr zastoupených
          povrchů jsou součástí výsledku. Při přechodu od bodů k území proto musíme vědět,
          jakou část území jednotlivá měřená místa zastupují. Postupy pro takové trasy uvádí
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO (2024), oddíly 2.3 a 2.4</SourceLink>.
        </p>

        <h2>Celý sněhový sloupec a automatické přístroje</h2>
        <div className="method-comparison">
          <div><h3>Trubice pro celý sloupec</h3><p>Trubice se známou vnitřní plochou odebere sníh od povrchu až k podkladu. Z čisté hmotnosti a plochy získáme celkovou vodní hodnotu, z výšky navíc průměrnou hustotu. Postup umožňuje rychlejší opakování na více místech. Uvnitř trubice se hůře kontroluje ztráta nebo stlačení jednotlivé vrstvy.</p></div>
          <div><h3>Odběry v odkryté stěně</h3><p>Menší vzorky zachytí změny hustoty s výškou a dovolí prohlédnout rozhraní. Odkrytí stěny trvá déle a místo naruší, další návštěva potřebuje neporušený sníh vedle. Hustoty jednotlivých intervalů se převádějí na jejich příspěvky vody.</p></div>
        </div>
        <p>
          U trubice nemusíme sčítat příspěvky jednotlivých intervalů, protože vážíme celý sněhový sloupec.
          Jeho hmotnost nejprve vydělíme plochou řezu trubice, abychom získali hmotnost nad jednotkou plochy.
          Dělením hustotou vody ji převedeme na výšku vodního sloupce.
          Pro úplný sloupec platí SWE v metrech vody = m / (A ρ<sub>w</sub>),
          kde m je hmotnost odebraného sněhu v kg, A plocha řezu trubice v m² a ρ<sub>w</sub> referenční
          hustota vody. Předpokladem je úplný vzorek nad touto plochou.
          Obě varianty gravimetrického měření, tedy měření založeného na vážení, rozebírá
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO (2024)</SourceLink>.
        </p>
        <p>
          V expedici MOSAiC autoři porovnali vodní hodnotu z celé trubice ETH s odhadem z hustot malých
          odběrů. Výsledky a jejich rozptyl ukazuje obrázek 9 ve
          <SourceLink id="DOI_10_1038_s41597_023_02273_1"> studii Macfarlane et al. (2023)</SourceLink>.
          Odhad z malých odběrů přitom používal výšku naměřenou trubicí ETH.
          Porovnání sdílí vstup o výšce a oba postupy využívají vážení. Ověřuje zejména různé způsoby
          odběru, neposkytuje zcela nezávislou kontrolu celé měřicí sestavy.
        </p>
        <p>
          Automatické ultrazvukové čidlo nad sněhem měří vzdálenost z doby návratu zvuku.
          Rychlost zvuku se mění s teplotou, proto výpočet potřebuje i teplotu vzduchu.
          Sníh zkracuje vzdálenost mezi čidlem a sledovaným povrchem. Od známé vzdálenosti k holému
          podkladu proto odečteme vzdálenost ke sněhu a dostaneme jeho výšku. Laserový přístroj používá světlo.
          Oba způsoby vyžadují stabilní polohu čidla a správně určenou vzdálenost bez sněhu.
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO (2024), oddíl 2.3.2</SourceLink>
        </p>
        <p>
          Sněhový polštář je nádoba s kapalinou zapuštěná do úrovně terénu.
          Sníh zatěžuje nádobu a zvyšuje tlak její kapaliny. Z tohoto tlaku se určuje hmotnost sněhu
          nad měřenou plochou a převádí se na vodní hodnotu.
          Sněhová váha měří zatížení nosné plochy přímo silovým snímačem, který reaguje na působící sílu.
          Zpevněná sněhová nebo ledová vrstva může část zatížení přenést do okolí jako most,
          takže přístroj nezaznamená celou hmotnost nad sebou. Ruční odběry v okolí pomáhají
          tento stav odhalit. Automatizace zvyšuje četnost měření, ale nenahrazuje kontrolu místa a odběrů.
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO (2024), oddíl 2.4.2</SourceLink>
        </p>

        <h2>Od horských odběrů k dnešním profilům</h2>
        <p>
          Přenosný odběrák spojený s váhou umožnil zjišťovat vodní zásobu horského sněhu přímo v terénu.
          Dochovaná <SourceLink id="DOI_10_1038_092520a0">zpráva v časopise Nature z ledna 1914</SourceLink>{" "}
          popisuje vystoupení Jamese E. Churche na schůzi Královské meteorologické společnosti
          17. prosince 1913. Church představil přístroj pro měření výšky a vodního obsahu sněhu
          a spojil měření se studiem vlivu hor a lesů i se zásobováním vodou pro zavlažování.
          Je to dobový doklad už použitelného terénního postupu.
        </p>
        <p>
          Pozdější automatické vážení a měření vzdálenosti umožnilo sledovat změny mezi návštěvami stanice.
          Mezinárodní klasifikace <SourceLink id="2009_Fierz_Snow_Classification">Fierze a kolegů (2009)</SourceLink>{" "}
          sjednotila popis výšek, vrstev a vlastností sněhu.
          Moderní profily spojují tradiční vážení s měřením struktury a složení.
          Metodický pokrok tím spočívá také v možnosti porovnat různé přístroje nad stejným sněhem
          a zveřejnit jednotlivé vstupy výpočtu.
        </p>

        <h2>Jak měření vstupuje do klimatologie</h2>
        <p>
          Místní výška říká, jak vysoká je sněhová pokrývka, vodní hodnota udává její zásobu vody.
          Při dlouhodobém porovnávání zachováváme termíny návštěv, sledujeme změny vegetace a okolí
          a evidujeme výměny přístrojů. Změna výšky při stejné vodní hodnotě může odrážet zhutnění.
          Úbytek SWE znamená úbytek hmotnosti nad danou plochou, jeho příčinu však samotné vážení neurčí.
          Rozdíl mezi dvěma návštěvami zahrnuje sněžení, tání a odtok, výpar i přenos sněhu větrem.
          Měření zásoby proto doplňuje
          <Link href="/metody/srazkomery-a-disdrometry"> měření srážek</Link>.
        </p>
        <p>
          Konkrétní použití představuje <SourceLink id="DOI_10_1038_s41597_021_00939_2">GlobSnow v3.0
          (Luojus et al., 2021)</SourceLink>. Tento soubor spojuje družicové mikrovlnné měření s pozemní
          výškou sněhu a vytváří odhady vodní hodnoty pro mimohorské oblasti severní polokoule.
          Sněhoměrné trasy poskytují referenční SWE pro dvě úlohy. Porovnání s terénními hodnotami
          slouží k opravě systematických odchylek, tedy soustavného nadhodnocování nebo podhodnocování.
          Terénní hodnoty se používají také k hodnocení toho, jak odhady odpovídají měření.
          Kanadský soubor pro ověření pokrývá roky 1980–2016, soubor pro opravu roky 1981–2003.
          Oba vycházejí z kanadského terénního měření a období se překrývají.
          Ověření proto nelze automaticky považovat za nezávislé ve všech vstupech.
          Družicová část má vlastní metodu
          <Link href="/metody/pasivni-mikrovlnna-radiometrie"> pasivní mikrovlnné radiometrie</Link>.
        </p>
        <p>
          Na <Link href="/pozorovani/ubytek-arktickeho-ledu">arktickém mořském ledu</Link> poskytuje sněhový profil
          údaje o zatížení ledu a podklad pro výklad družicového měření jeho výšky.
          Na <Link href="/pozorovani/ustup-ledovcu">horských ledovcích</Link> se výška zimního sněhu
          převádí pomocí hustoty na přírůstek hmotnosti. Celoroční výsledek zahrnuje také úbytek sněhu a ledu,
          proto na tento postup navazuje
          <Link href="/metody/terenni-mereni-bilance-ledovcu"> terénní měření bilance ledovců</Link>.
          Na <Link href="/pozorovani/nestabilita-prikrovu">ledovcových příkrovech</Link> přechází sníh
          postupným zhutňováním do firnu, staršího zrnitého materiálu před vznikem kompaktního ledu.
          Převod změny výšky povrchu na změnu hmotnosti tam potřebuje i vývoj této hlubší vrstvy.
          Souvislosti měření sněhu, ledovců a příkrovů rozebírá
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> příručka WMO (2024), kapitoly 2 a 3</SourceLink>.
        </p>

        <section className="method-conclusion">
          <h2>Co metoda umožňuje zjistit</h2>
          <p>
            Společné měření výšky a hustoty určí hmotnost sněhu nad jednotkovou plochou a její rozložení
            ve svislém profilu. Umožňuje rozlišit ztenčení pokrývky způsobené zhutněním od skutečného
            úbytku uložené vody. Opakované, prostorově rozložené odběry pak poskytují podklad pro sledování
            sněhové zásoby, bilance ledovců a kontrolu družicových odhadů. Platnost výsledku pro širší území
            závisí na rozmístění a četnosti měření stejně jako na kvalitě samotného vzorku.
          </p>
        </section>
      </div>
    </article>
  );
}
