import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function OpticalImagingArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak z odraženého světla poznáváme povrch</h2>
        <p className="article-prose__intro">
          Optické snímkování je měření záření přicházejícího z jednotlivých míst
          pozorovaného povrchu, ze kterého přístroj skládá obraz. Multispektrální
          snímkování zaznamenává tentýž povrch odděleně v několika rozsazích
          vlnových délek. Jejich porovnání pomáhá rozlišovat vegetaci, sníh, led
          nebo odkrytou půdu a sledovat jejich změny. Vysvětlíme si měření
          odraženého slunečního světla přístrojem OLI na družici Landsat 8.
          Zkratka OLI znamená <em>Operational Land Imager</em>, tedy přístroj
          pro snímkování zemského povrchu.{" "}
          <SourceLink id="2019_USGS_Landsat8_Handbook">(USGS, kap. 2 a 4)</SourceLink>
        </p>

        <h3>Proč se díváme na několik druhů světla</h3>
        <p>
          Sluneční záření obsahuje mnoho vlnových délek. Vlnová délka je vzdálenost
          mezi dvěma sousedními vrcholy světelné vlny. Ve viditelné oblasti ji
          vnímáme jako barvu. Za červenou částí spektra následuje infračervené
          záření, které už lidské oko nevidí. Družicový přístroj může měřit
          i tuto část spektra.{" "}
          <SourceLink id="2000_NASA_Measuring_Vegetation">(NASA: světlo a vegetace)</SourceLink>
        </p>
        <p>
          Když světlo dopadne na povrch, část se pohltí a část se odrazí.
          Poměr se mění podle materiálu a vlnové délky. Chlorofyl, zelené barvivo
          listů, silně pohlcuje červené světlo. Blízké infračervené záření se
          naproti tomu výrazně rozptyluje uvnitř listů a značná část se vrací ven.
          Porost proto může být v červeném pásmu poměrně tmavý a v blízkém
          infračerveném pásmu světlý. Tato dvojice měření poskytuje informaci
          o vegetaci, která v běžné barevné fotografii není vidět.{" "}
          <SourceLink id="2000_NASA_Measuring_Vegetation">(NASA: optické vlastnosti listů)</SourceLink>
        </p>
        <p>
          Sníh a čistý led mají jiný průběh odrazu. Ve viditelné oblasti odrážejí
          mnohem více záření než v některých krátkovlnných infračervených pásmech,
          kde led silně pohlcuje. Přístroj proto nemusí hledat pouze světlá místa.
          Může hledat místa, která jsou světlá v jednom pásmu a tmavá v druhém.
          Právě rozdíl mezi pásmy pomáhá oddělit sníh a led od okolního terénu.{" "}
          <SourceLink id="DOI_10_1016_0034_4257_95_00137_P">(Hall a kol. 1995, oddíl „Snow-Mapping Algorithm“)</SourceLink>
        </p>
        <p>
          Rozsahu vlnových délek, který měříme společně, říkáme spektrální pásmo.
          OLI má devět pásem. Pro následující výklad využijeme čtyři z nich.
          Vlnové délky v tabulce jsou přibližné a jsou uvedeny v mikrometrech,
          značka µm. Jeden mikrometr je miliontina metru.{" "}
          <SourceLink id="2019_USGS_Landsat8_Handbook">(USGS, tab. 2-1 a obr. 4-3)</SourceLink>
        </p>
        <figure className="method-data-output method-data-output--compact">
        <div className="method-data-output__table-wrap" tabIndex={0} role="region" aria-label="Spektrální pásma OLI">
          <table>
            <thead><tr><th>Pásmo OLI</th><th>Oblast spektra</th><th>Vlnová délka</th></tr></thead>
            <tbody>
              <tr><td>B3</td><td>Zelená</td><td>0,53–0,59 µm</td></tr>
              <tr><td>B4</td><td>Červená</td><td>0,64–0,67 µm</td></tr>
              <tr><td>B5</td><td>Blízká infračervená</td><td>0,85–0,88 µm</td></tr>
              <tr><td>B6</td><td>Krátkovlnná infračervená</td><td>1,57–1,65 µm</td></tr>
            </tbody>
          </table>
        </div>
        </figure>

        <h3>Jak přístroj vytvoří obraz</h3>
        <p>
          Záření odražené od Země vstupuje do dalekohledu přístroje OLI.
          Zrcadla je soustředí na řady světlocitlivých detektorů. Před nimi jsou
          filtry, z nichž každý propouští příslušné spektrální pásmo. Detektor
          v zeleném pásmu tak zaznamenává jinou část přicházejícího záření než
          detektor v infračerveném pásmu. Z jednoho místa postupně získáme
          několik oddělených měření.{" "}
          <SourceLink id="DOI_10_3390_rs61110286">(Knight a Kvaran 2014, oddíl 2.1)</SourceLink>
        </p>
        <p>
          Dopadající světlo vytváří v polovodičovém detektoru elektrický náboj.
          Po stanovenou dobu se náboj shromažďuje a elektronika jej převede
          na číselný údaj. Při stejné době sběru odpovídá silnějšímu osvětlení
          větší signál. Řada detektorů zabírá pás území napříč směrem letu.
          Pohyb družice přináší do zorného pole další území, takže za sebou
          vznikají řádky obrazu.{" "}
          <SourceLink id="2019_USGS_Landsat8_Handbook">(USGS, oddíl 2.2.1)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/optical-imaging/oli-before-flight.jpg" width={1430} height={639} unoptimized
            alt="Dvě fotografie přístroje OLI před letem. Vlevo je odkrytá konstrukce s chladičem a kalibračními panely, vpravo přístroj zakrytý bílou tepelnou izolací." />
          <figcaption>
            OLI před instalací na družici Landsat 8. V levém snímku je u levého
            okraje chladič a uprostřed zadní strany panelů používaných při
            sluneční kalibraci. Detektory jsou uvnitř přístroje. Pravý snímek
            ukazuje stejný přístroj s tepelnou izolací.
            Převzato beze změny z{" "}
            <SourceLink id="DOI_10_3390_rs61110286">Knight a Kvaran (2014), obr. 2</SourceLink>,
            © autoři, <SourceLink id="WEB_Creative_Commons_Deed_Attribution_4_0_International_Creative_Comm_f3dd853d">CC BY 4.0</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Každému obrazovému prvku neboli pixelu musíme přiřadit místo na Zemi.
          Zpracování využívá polohu a orientaci družice, geometrii přístroje,
          známé body v krajině a model výšky terénu. Podle nich obraz srovná
          do mapové sítě. Výškový model je potřebný, protože vrchol hory se při
          šikmém pohledu promítá jinam než místo v údolí. U čtyř vybraných pásem
          Landsatu 8 má výsledná síť buňky 30 × 30 metrů. Pro každou buňku máme
          hodnotu ze zeleného, červeného i obou infračervených pásem.{" "}
          <SourceLink id="2019_USGS_Landsat8_Handbook">(USGS, oddíly 3.2 a 4.1)</SourceLink>
        </p>

        <h3>Jak číselný signál získá fyzikální význam</h3>
        <p>
          Abychom z údaje detektoru zjistili sílu přicházejícího záření,
          potřebujeme kalibraci. Před letem se přístroj osvětluje zdroji se známými
          vlastnostmi a zaznamenává se jeho odezva při různých úrovních osvětlení.
          Tím vznikne převod mezi číselným signálem a měřeným zářením. Referenční
          měření OLI byla navázána na etalony amerického metrologického ústavu NIST.{" "}
          <SourceLink id="DOI_10_3390_rs61212275">(Markham a kol. 2014, oddíly 2–5)</SourceLink>
        </p>
        <p>
          Na oběžné dráze přístroj pravidelně snímá rozptylný panel osvětlený
          Sluncem. Jeho odrazové vlastnosti byly změřeny před startem, takže
          poskytuje známou referenci pro další měření. Záznam při uzavřené
          cloně ukazuje elektrickou odezvu bez přicházejícího světla. Zpracování
          ji odečítá a zohledňuje také rozdílnou citlivost jednotlivých detektorů.
          Tak vzniknou vzájemně srovnatelné hodnoty pro celý obraz.{" "}
          <SourceLink id="2019_USGS_Landsat8_Handbook">(USGS, oddíl 3.1)</SourceLink>
        </p>
        <p>
          Kalibrovaný a prostorově přiřazený snímek se zveřejňuje jako produkt
          Level 1. Jeho hodnoty popisují záření, které dorazilo k družici nad
          atmosférou. Pro porovnání samotných povrchů potřebujeme ještě zohlednit
          osvětlení a cestu světla vzduchem. Molekuly plynů a drobné částice
          v atmosféře část záření pohltí nebo rozptýlí. Do zorného pole přístroje
          se zároveň rozptyluje světlo z jiných směrů.{" "}
          <SourceLink id="2019_USGS_Landsat8_Handbook">(USGS, oddíl 5.2)</SourceLink>{" "}
          <SourceLink id="2024_USGS_Landsat_C2_L2_Guide">(příručka Level 2, oddíl 1.1.1)</SourceLink>
        </p>
        <p>
          Atmosférická korekce tyto děje vyčísluje pomocí modelu šíření záření.
          Pro Landsat 8 se používá postup LaSRC. Využívá údaje o slunečním
          osvětlení, výšce terénu, vodní páře, ozonu a aerosolu, tedy drobných
          částicích rozptýlených ve vzduchu. Hledá odraz povrchu, který by po
          průchodu takovou atmosférou odpovídal pozorování družice. Výsledkem
          jsou data odrazivosti povrchu v produktu Level 2.{" "}
          <SourceLink id="2024_USGS_Landsat_C2_L2_Guide">(USGS, oddíly 1.1.1 a 7.1)</SourceLink>
        </p>
        <p>
          Odrazivost zde vyjadřuje, jak silně povrch vrací dopadající světlo
          v daném pásmu a směru pohledu. Porovnáváme jeho jasnost s ideálním
          bílým povrchem, který odráží všechno dopadající záření a při stejném
          osvětlení vypadá stejně jasný z různých směrů. Výsledný poměr nemá
          jednotku. Odborně jde o faktor odrazivosti. Pásma nyní můžeme
          porovnávat podle toho, jak silně v nich povrch odráží světlo.{" "}
          <SourceLink id="DOI_10_1016_j_rse_2006_03_002">(Schaepman-Strub a kol. 2006, oddíl 2)</SourceLink>
        </p>
        <figure className="article-figure">
            <Image src="/media/optical-imaging/principle.svg" width={450} height={990} unoptimized style={{ maxWidth: "28rem", width: "100%", height: "auto", marginInline: "auto" }}
              alt="Schéma cesty od slunečního světla přes odraz od povrchu, měření v pásmech, kalibraci a atmosférickou korekci až k mapě povrchu." />
          <figcaption>
            Šipky sledují cestu světla a potom návazné zpracování dat.
            Level 1 zachovává pohled přístroje nad atmosférou, Level 2 poskytuje
            odhad vlastností povrchu po atmosférické korekci. Vlastní schéma podle{" "}
            <SourceLink id="2019_USGS_Landsat8_Handbook">příručky Landsatu 8</SourceLink>{" "}
            a <SourceLink id="2024_USGS_Landsat_C2_L2_Guide">příručky Level 2</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Ve stahovaném souboru je odrazivost uložena úsporně jako celé číslo.
          U produktu Landsat Collection 2 Level 2 ji převedeme zpět takto:
        </p>
        <Equation tex={String.raw`\rho_b = 0{,}0000275\,Q_b - 0{,}2`} />
        <p>
          Značka <InlineMath tex={String.raw`\rho_b`} /> označuje odrazivost
          v pásmu <InlineMath tex="b" /> a <InlineMath tex="Q_b" /> celé číslo
          uložené pro toto pásmo v souboru. Obě hodnoty jsou bez jednotky.
          Koeficient a posun platí pro tento konkrétní datový produkt.
          Tento přepočet pouze rozbaluje už zpracovaný výsledek. Kalibraci
          přístroje i atmosférickou korekci předtím provedl poskytovatel dat.{" "}
          <SourceLink id="2024_USGS_Landsat_C2_L2_Guide">(USGS, tab. 6-1)</SourceLink>
        </p>

        <h3 id="spektralni-indexy">Jak porovnání pásem ukáže vegetaci a sníh</h3>
        <p>
          Nyní máme pro každý pixel několik odrazivostí. Rozdíl mezi blízkým
          infračerveným a červeným pásmem zvýrazní vlastnost zelených listů,
          kterou jsme si popsali na začátku. U porostu bývá infračervená odrazivost
          vyšší, takže rozdíl vyjde kladný. Abychom jej vztáhli k celkové velikosti
          obou hodnot, vydělíme rozdíl jejich součtem. Dostaneme normalizovaný
          vegetační index NDVI, z anglického <em>Normalized Difference Vegetation Index</em>:{" "}
          <SourceLink id="2026_USGS_Landsat_NDVI">(USGS: NDVI)</SourceLink>
        </p>
        <Equation tex={String.raw`\mathrm{NDVI}=\frac{\rho_5-\rho_4}{\rho_5+\rho_4}`} />
        <p>
          Zde <InlineMath tex={String.raw`\rho_5`} /> je odrazivost v blízkém
          infračerveném pásmu B5 a <InlineMath tex={String.raw`\rho_4`} />
          v červeném pásmu B4. Index nemá jednotku. Pro nezáporné odrazivosti
          a nenulový součet leží mezi −1 a 1. Když jsou obě hodnoty stejné,
          vyjde nula. Pokud obě hodnoty vzrostou ve stejném poměru,
          index zůstane stejný. Čím výrazněji infračervené pásmo převažuje, tím blíže je
          výsledek jedničce. V porovnání podobných porostů pomáhá vyšší NDVI
          rozpoznat silnější zastoupení zelené vegetace.{" "}
          <SourceLink id="2026_USGS_Landsat_NDVI">(definice USGS)</SourceLink>{" "}
          <SourceLink id="2000_NASA_Measuring_Vegetation">(NASA: význam vegetačního indexu)</SourceLink>
        </p>
        <p>
          Pro sníh využijeme stejný způsob porovnání, ale jinou dvojici pásem.
          Od zelené odrazivosti odečteme krátkovlnnou infračervenou a rozdíl
          vydělíme jejich součtem. Normalizovaný sněhový index NDSI,
          z anglického <em>Normalized Difference Snow Index</em>, má pro Landsat 8 tvar:{" "}
          <SourceLink id="2026_USGS_Landsat_NDSI">(USGS: NDSI)</SourceLink>
        </p>
        <Equation tex={String.raw`\mathrm{NDSI}=\frac{\rho_3-\rho_6}{\rho_3+\rho_6}`} />
        <p>
          <InlineMath tex={String.raw`\rho_3`} /> je odrazivost v zeleném pásmu
          B3 a <InlineMath tex={String.raw`\rho_6`} /> v krátkovlnném infračerveném
          pásmu B6. Také tento index je bez jednotky a platí pro něj stejné
          podmínky výpočtu. Sníh a čistý led mají obvykle výrazně vyšší zelenou
          odrazivost, takže poskytují vysokou kladnou hodnotu. Index tak
          soustředí jejich charakteristický rozdíl mezi pásmy do jednoho čísla.{" "}
          <SourceLink id="2026_USGS_Landsat_NDSI">(definice USGS)</SourceLink>{" "}
          <SourceLink id="DOI_10_1016_0034_4257_95_00137_P">(Hall a kol. 1995)</SourceLink>
        </p>
        <p>
          Z indexu vznikne mapa sněhu teprve tehdy, když stanovíme pravidlo,
          které pixely do této třídy zařadí. Zvolíme například mezní hodnotu
          indexu a doplníme podmínku pro jasnost v dalším pásmu. Pravidlo se
          nastavuje podle známých povrchů a ověřuje na dalších místech s dostupným
          srovnáním.{" "}
          <SourceLink id="DOI_10_1016_0034_4257_95_00137_P">(Hall a kol., pravidla sněhové klasifikace)</SourceLink>
        </p>
        <p id="ledovce">
          U mapování ledovců vybíráme snímky z konce období tání,
          kdy v okolí zbývá málo sezónního sněhu. Rozlišený sníh a čistý led
          se pak spojí s vymezením jednotlivých ledovců. Části pokryté sutí
          se doplňují podle podrobnějších snímků a znalosti terénu.{" "}
          <SourceLink id="DOI_10_5194_essd_12_1805_2020">(Paul a kol. 2020, oddíl 4)</SourceLink>
        </p>

        <h3 id="fenologie">Jak ze snímků určíme začátek zelenání</h3>
        <p>
          Pro určení začátku sezóny potřebujeme celou řadu snímků stejného místa.
          Produkt MCD12Q2 z přístrojů MODIS používá dvoupásmový vylepšený
          vegetační index, označovaný EVI2.
          Ten stejně jako NDVI vychází z červeného a blízkého infračerveného
          pásma, ale kombinuje jejich odrazivosti jiným vztahem.
          Zpracování potlačí vliv nekvalitních měření a proloží časovou řadu
          hladkou křivkou. Na ní vyhledá vzestupnou a sestupnou část sezónního cyklu.{" "}
          <SourceLink id="WEB_U_S_Geological_Survey_Prirucka_MCD12Q2_v6_1_dbceb14f">(příručka MCD12Q2 v6.1, oddíl 2)</SourceLink>
        </p>
        <p>
          Ve vzestupné části spočítá rozdíl mezi počátečním minimem a vrcholem.
          Začátek zelenání stanoví na den, kdy index překročí 15 % tohoto
          rozdílu nad minimem. Pro další fáze používá 50 a 90 %.
          Procento tedy vyjadřuje polohu na křivce indexu. Takto získané datum
          patří porostu v obrazové buňce. Jeho vztah k rašení jednotlivých
          rostlin rozebírá pozorování <Link href="/pozorovani/fenologicke-posuny/#druzice">fenologických posunů</Link>.{" "}
          <SourceLink id="WEB_U_S_Geological_Survey_Prirucka_MCD12Q2_v6_1_dbceb14f">(příručka MCD12Q2 v6.1, oddíl 2.3)</SourceLink>
        </p>

        <h3>Co z těchto měření získává klimatologie</h3>
        <p>
          Opakované snímky ukazují, kde sníh přibývá a odtává, jak se mění
          hranice ledovců a kdy se krajina během roku zazelená. Pro sledování
          změn se vybírají vhodné záběry stejného území a porovnávají se stejně
          definované výsledky. Mapy sněhu poskytují jeho rozsah v daných dnech.
          Průběh vegetačního indexu v čase pomáhá určit začátek a konec sezónní
          aktivity porostu. Navazující výsledky rozebírají články o{" "}
          <Link href="/pozorovani/snehova-pokryvka-a-permafrost/#rozsah-snehu">sněhové pokrývce</Link>{" "}
          a <Link href="/pozorovani/fenologicke-posuny/#druzice">sezónních jevech v přírodě</Link>.{" "}
          <SourceLink id="DOI_10_1016_0034_4257_95_00137_P">(Hall a kol. 1995)</SourceLink>{" "}
          <SourceLink id="1974_Rouse_ERTS_Vegetation">(Rouse a kol. 1974)</SourceLink>
        </p>
        <p>
          Konkrétním použitím je soupis alpských ledovců publikovaný Paulem
          a kolegy v roce 2020. Z multispektrálních snímků družice Sentinel-2
          nejprve automaticky vymezili čistý led a sníh. Odborníci na jednotlivé
          oblasti potom doplnili části pokryté sutí a upravili obrysy.
          Snímky pocházely převážně ze srpna 2015, část z let 2016 a 2017.
          Výsledný soupis obsahuje 4 395 ledovců větších než 0,01 km²
          s celkovou plochou 1 806 ± 60 km². Znak ± zde vyjadřuje autory
          odhadnutou nejistotu celkové plochy.{" "}
          <SourceLink id="DOI_10_5194_essd_12_1805_2020">(Paul a kol. 2020, oddíly 3–5)</SourceLink>
        </p>
        <p>
          Výsledné obrysy jsou veřejně dostupné jako{" "}
          <SourceLink id="DOI_10_1594_PANGAEA_909133">mapová data v archivu PANGAEA</SourceLink>.
          Umožňují určit rozlohu jednotlivých ledovců a srovnávat jejich hranice
          se staršími soupisy. Jak se plocha vztahuje k dalším sledovaným
          vlastnostem, vysvětluje pozorování{" "}
          <Link href="/pozorovani/ustup-ledovcu/#plocha">horských ledovců</Link>.
          Změnu hmotnosti přímo na ledovci popisuje samostatná metoda{" "}
          <Link href="/metody/terenni-mereni-bilance-ledovcu">terénního měření bilance</Link>.
        </p>

        <h3>Jak se metoda rozvíjela a čím se přístroje liší</h3>
        <p>
          První družice programu Landsat začala snímkovat v roce 1972,
          tehdy pod označením ERTS-1. Rouse a kolegové ve zprávě vydané roku
          1974 popsali sledování vegetace pomocí rozdílu červeného a blízkého
          infračerveného měření děleného jejich součtem. Hallová a kolegové
          v roce 1995 rozpracovali sněhový index a pravidla mapování sněhu
          pro připravovaný přístroj MODIS. V obou případech se využití několika
          pásem opíralo o rozdílné pohlcování a odraz světla.{" "}
          <SourceLink id="2019_USGS_Landsat8_Handbook">(USGS, úvod)</SourceLink>{" "}
          <SourceLink id="1974_Rouse_ERTS_Vegetation">(Rouse a kol., s. 312–313)</SourceLink>{" "}
          <SourceLink id="DOI_10_1016_0034_4257_95_00137_P">(Hall a kol. 1995)</SourceLink>
        </p>
        <p>
          Novější přístroje rozšířily možnosti hlavně jemnějším prostorovým
          rozlišením, lepším rozlišením úrovní signálu a častějším snímáním.
          Landsat 8 poskytuje vybraná pásma v síti 30 metrů, multispektrální přístroj MSI
          družic Sentinel-2 měří viditelná a některá blízká infračervená pásma
          v síti 10 metrů a krátkovlnná infračervená pásma v síti 20 metrů.
          Při jejich společném vyhodnocení se proto data převádějí do společné
          sítě. Menší buňky dovolují podrobněji sledovat hranice malých ledovců.{" "}
          <SourceLink id="DOI_10_3390_rs8070575">(Paul a kol. 2016, tab. 2 a oddíly 3–5)</SourceLink>
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Výsledek ovlivňuje oblačnost, stín, atmosférická korekce a směs různých
          povrchů uvnitř jednoho pixelu. Hranice na mapě závisí také na zvoleném
          pravidle rozlišení. Při porovnání 155 alpských ledovců byly plochy
          čistého ledu vymezené ze Sentinel-2 v průměru o 4,8 % menší než
          z třicetimetrových pásem Landsatu 8. Jde o rozdíl dvou postupů,
          nikoli o univerzální chybu družicového měření.{" "}
          <SourceLink id="DOI_10_3390_rs8070575">(Paul a kol. 2016, oddíl 4.2)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Co bylo ověřeno a co omezuje použití výsledku</summary>
          <p>
            Kalibrace OLI byla kontrolována palubními lampami, rozptylnými panely osvětlenými Sluncem,
            pozorováním Měsíce a stabilních pouštních ploch. Markham a kolegové
            v roce 2014 odhadli relativní standardní nejistotu odrazivostní
            kalibrace přibližně na 2 %. Jde o úroveň jedné směrodatné odchylky,
            nikoli o nejistotu plochy ledovce. Pozemní kontrolní měření většinou
            souhlasila v rámci kombinovaných nejistot. Měření Arizonské
            univerzity ukazovala průměrný rozdíl přibližně 3 %, s nižšími
            hodnotami OLI. Referenční techniky měly vlastní nejistoty,
            u nejlepších pozemních postupů řádově 3 %.{" "}
            <SourceLink id="DOI_10_3390_rs61212275">(oddíly 8–9)</SourceLink>
          </p>
          <p>
            Tato ověření využívají jiné přístroje a pozorování než palubní
            kalibrace. Část referencí je však společná, například metrologická
            návaznost a modely slunečního záření. Shoda několika kontrol
            proto není souborem zcela nezávislých důkazů. Uvedené odhady
            charakterizují tehdejší kalibraci OLI, ne všechny optické přístroje
            ani celou délku provozu Landsatu 8.{" "}
            <SourceLink id="DOI_10_3390_rs61212275">(oddíly 5, 9–10)</SourceLink>
          </p>
          <p>
            U porovnání ledovců autoři neměli současně změřené celé hranice
            v terénu. Zvolená pravidla upravovali vizuálně na samotných snímcích,
            které potom porovnávali. Porovnání tedy prověřuje soulad dvou
            přístrojů a různých pásem, nikoli přesnost vůči nezávislému terénnímu
            měření hranic. Rozdíly mezi jednotlivými ledovci přitom značně kolísaly.
            Jemnější patnáctimetrové pásmo Landsatu se
            Sentinel-2 shodovalo lépe. Dva přístroje zároveň sdílejí fyzikální
            princip a podobný způsob rozlišení ledu.{" "}
            <SourceLink id="DOI_10_3390_rs8070575">(oddíly 3.3 a 4.2)</SourceLink>
          </p>
          <p>
            U alpského soupisu z roku 2020 odpovídá nejistota ±60 km²
            přibližně 3,3 % celkové plochy. Autoři její odhad opřeli o opakované
            vymezování vybraných 14 ledovců pěti hodnotiteli. Každý je zpracoval
            čtyřikrát. Rozptyl výsledků zachycuje hlavně rozdíly v rozpoznání
            a zakreslení hranic, zejména tam, kde led překrývá suť.{" "}
            <SourceLink id="DOI_10_5194_essd_12_1805_2020">(oddíly 4.5 a 5.3.1)</SourceLink>
          </p>
          <p>
            Mraky zakrývají povrch a vytvářejí mezery v čase. V horách záleží
            na stínu a nasvícení svahů. Jasný sníh může ztížit odhad aerosolu
            a atmosférickou korekci. Proto se při výběru dat čtou i příznaky
            kvality, které označují mraky, jejich stíny, přesycení detektoru
            a podmínky korekce. Jejich projití samo o sobě nezaručuje správnost
            každého pixelu.{" "}
            <SourceLink id="2024_USGS_Landsat_C2_L2_Guide">(oddíly 3.1 a 6.1)</SourceLink>
          </p>
          <p>
            Odrazivostní faktor pro jeden směr pohledu není celkovým podílem
            odražené energie. Pro něj bychom museli zahrnout odraz do všech
            směrů a příslušný rozsah vlnových délek. Tak získáváme albedo,
            které se používá při výpočtech energetické bilance povrchu.{" "}
            <SourceLink id="DOI_10_1016_j_rse_2006_03_002">(Schaepman-Strub a kol., oddíl 2)</SourceLink>
          </p>
          <p>
            NDVI závisí také na půdě viditelné mezi rostlinami a při hustém
            porostu už na další přírůstek listů reaguje slabě. Vysoké NDSI
            není procentem plochy pokryté sněhem ani samo nerozliší sníh od
            čistého ledu. Velikost pixelu je měřítkem prostorového rozlišení,
            ne přesností polohy hranice. Nejistotu konkrétní mapy je proto
            potřeba vyhodnotit pro její území a použitá pravidla.{" "}
            <SourceLink id="2000_NASA_Measuring_Vegetation">(NASA: vegetační indexy)</SourceLink>{" "}
            <SourceLink id="DOI_10_1016_0034_4257_95_00137_P">(Hall a kol., diskuse)</SourceLink>{" "}
            <SourceLink id="DOI_10_3390_rs8070575">(Paul a kol., oddíl 5)</SourceLink>
          </p>
        </details>

        <h2>Příklad: tři povrchy u Aletschského ledovce</h2>
        <p>
          Použijeme skutečný snímek Landsatu 8 z 20. srpna 2023, pořízený
          v 10:16 UTC nad švýcarskými Alpami. Z produktu Collection 2 Level 2
          vybereme oblast Aletschského ledovce. Začínáme tedy u odrazivosti
          povrchu, kterou už vypočetl USGS. Data jsou veřejně dostupná
          prostřednictvím Microsoft Planetary Computer.{" "}
          <SourceLink id="DOI_10_5066_P9OGBGM6">(datový soubor USGS)</SourceLink>{" "}
          <SourceLink id="2023_Landsat_Aletsch_STAC">(přesný záznam snímku)</SourceLink>
        </p>
        <p>
          Ve snímku jsou vyznačeny tři pixely. A leží na světlém ledovcovém
          povrchu, B na odkrytém svahu a C v porostu dole v údolí. Označení
          vychází z prohlédnutí snímku. Vybraná místa slouží k porovnání
          odrazivostí, nepředstavují průměr celé oblasti. Jejich příznaky
          kvality neoznačují mrak, oblačný stín ani přesycení detektoru.
        </p>
        <figure className="article-figure">
          <Image src="/media/optical-imaging/aletsch-samples.png" width={1088} height={1696} unoptimized
            style={{ maxWidth: "30rem", width: "100%", height: "auto", marginInline: "auto" }}
            alt="Snímek Aletschského ledovce a okolních svahů se třemi vyznačenými pixely: A na ledovcovém povrchu, B na odkrytém svahu a C ve vegetaci." />
          <figcaption>
            Barevný obraz je sestaven z červeného, zeleného a modrého pásma
            B4, B3 a B2. Pro zobrazení byl upraven kontrast. Kroužky označují
            polohy pixelů, jejich velikost je zvětšena pro čitelnost.
            S označuje sever, měřítko odpovídá mapové síti UTM.
            Vlastní zpracování <SourceLink id="2023_Landsat_Aletsch_STAC">dat USGS</SourceLink>,
            data public domain. Indexy níže počítáme z původních čísel,
            nikoli z barev tohoto obrázku.
          </figcaption>
        </figure>
        <h3>Nejprve převedeme uložená čísla na odrazivost</h3>
        <p>
          Pixel A má v zeleném pásmu uloženou hodnotu 24 804
          a v krátkovlnném infračerveném pásmu 7 490. Použijeme dříve
          vysvětlený koeficient a posun:
        </p>
        <Equation tex={String.raw`\rho_3 = 24\,804\times0{,}0000275-0{,}2 = 0{,}482110`} />
        <Equation tex={String.raw`\rho_6 = 7\,490\times0{,}0000275-0{,}2 = 0{,}005975`} />
        <p>
          Zelená odrazivost je tedy mnohem vyšší než krátkovlnná infračervená.
          Dosadíme je do vztahu pro sněhový index:
        </p>
        <Equation tex={String.raw`\mathrm{NDSI}_A=\frac{0{,}482110-0{,}005975}{0{,}482110+0{,}005975}\doteq0{,}976`} />
        <p>
          Výsledek blízký jedničce říká, že v této dvojici pásem výrazně
          převažuje zelený odraz. To odpovídá světlému sněhu či čistému ledu,
          který na vybraném místě vidíme. Stejný postup použijeme na další
          dva pixely. Z červeného a blízkého infračerveného pásma navíc
          spočítáme vegetační index.
        </p>
        <figure className="method-data-output">
        <div className="method-data-output__table-wrap" tabIndex={0} role="region" aria-label="Odrazivosti a indexy tří pixelů">
          <table>
            <thead><tr><th>Pixel</th><th>Zelená odrazivost</th><th>Krátkovlnná infračervená</th><th>NDSI</th><th>NDVI</th></tr></thead>
            <tbody>
              <tr><td>A · ledovcový povrch</td><td>0,482110</td><td>0,005975</td><td>0,976</td><td>−0,089</td></tr>
              <tr><td>B · odkrytý svah</td><td>0,224820</td><td>0,426148</td><td>−0,309</td><td>0,105</td></tr>
              <tr><td>C · vegetace</td><td>0,066503</td><td>0,253805</td><td>−0,585</td><td>0,681</td></tr>
            </tbody>
          </table>
        </div>
        </figure>
        <p>
          U svahu B a porostu C je krátkovlnná infračervená odrazivost
          vyšší než zelená, proto mají záporné NDSI. Vegetace C se zároveň
          výrazně odlišuje v druhé dvojici pásem. V červeném má odrazivost
          přibližně 0,061, v blízkém infračerveném 0,319. Její NDVI proto
          dosahuje 0,681. Z týchž čtyř měření jsme tak získali dva různé
          popisy povrchu, každý zaměřený na jiný rozdíl mezi pásmy.
        </p>
        <figure className="article-figure">
          <div style={{ overflowX: "auto" }}>
            <Image src="/media/optical-imaging/band-comparison.png" width={1440} height={864} unoptimized style={{ minWidth: "34rem" }}
              alt="Sloupcový graf odrazivostí tří pixelů. Ledovcový povrch silně odráží ve viditelných pásmech a velmi slabě v B6. Vegetace výrazněji odráží v B5 než v červeném B4." />
          </div>
          <figcaption>
            Každá barva sleduje jeden pixel ve čtyřech pásmech. Výška sloupce
            je odrazivost povrchu bez jednotky. Rozdíly, které indexy shrnují
            do jednoho čísla, jsou zde vidět přímo. Vlastní výpočet z{" "}
            <SourceLink id="2023_Landsat_Aletsch_STAC">dat USGS</SourceLink>.
          </figcaption>
        </figure>
        <details className="method-details">
          <summary>Data, přesné polohy a zopakování výpočtu</summary>
          <p>
            Zdrojový produkt je <code>LC08_L2SP_195028_20230820_20230826_02_T1</code>,
            dráha 195, řada 028. Data jsme stáhli 26. října 2026. Původní{" "}
            <a href="/data/methods/optical-imaging/source-MTL.txt">metadata USGS</a>{" "}
            uvádějí zpracování LPGS 16.3.0 a atmosférickou korekci LaSRC 1.6.0.
            Výřez má 341 sloupců a 598 řádků v souřadnicovém systému
            WGS 84 / UTM 32N, EPSG:32632. Začíná ve sloupci 5319 a řádku
            2167 původního souboru, při číslování od nuly. Převzali jsme původní
            buňky beze změny jejich hodnot a bez převodu do jiné sítě.
          </p>
          <p>
            Pixel A má střed na 46,50073551° s. š. a 7,98045953° v. d.,
            B na 46,42383568° s. š. a 7,98579846° v. d.,
            C na 46,38256209° s. š. a 8,05288608° v. d.
            Přesné řádky, sloupce a uložené hodnoty všech pásem obsahuje{" "}
            <a href="/data/methods/optical-imaging/samples.csv">tabulka CSV</a>.
          </p>
          <p>
            Ve všech třech pixelech jsou bity 0 až 4 v <code>QA_PIXEL</code>{" "}
            nulové a <code>QA_RADSAT</code> má hodnotu nula. Příznak sněhu
            ponecháváme. V <code>SR_QA_AEROSOL</code> vylučujeme nejvyšší
            kategorii aerosolu. A a B mají střední kategorii, C nízkou.
            U všech tří je aerosol odhadnut interpolací z okolí.
            Jednotlivé příznaky vysvětluje{" "}
            <SourceLink id="2024_USGS_Landsat_C2_L2_Guide">USGS v tabulkách 6-2 až 6-7</SourceLink>.
            Pro tato tři místa nemáme nezávislé pozemní měření odrazivosti.
            Uvedené indexy jsou vlastní přepočet družicového produktu.
          </p>
          <p>
            Ke zopakování čísel stačí stáhnout CSV, soubor{" "}
            <a href="/data/methods/optical-imaging/example.json">example.json</a>{" "}
            a <a href="/data/methods/optical-imaging/reproduce.py">reproduce.py</a>{" "}
            do jedné složky a spustit <code>python reproduce.py</code>.
            Skript používá pouze standardní knihovnu Pythonu. Počítá z plných
            hodnot, tabulka v článku je zaokrouhlená.
          </p>
          <p>
            Pro prostorovou kontrolu je k dispozici celý{" "}
            <a href="/data/methods/optical-imaging/aletsch-20230820.tif">výřez v GeoTIFF (1,9 MB)</a>{" "}
            s pěti optickými pásmy a třemi pásmy kvality.
            <a href="/data/methods/optical-imaging/plot.py"> Skript plot.py</a>{" "}
            z něj obnoví oba obrázky, potřebuje knihovny NumPy, Rasterio
            a Matplotlib. <a href="/data/methods/optical-imaging/download.py">Skript download.py</a>{" "}
            umožňuje stáhnout stejné výřezy z původních souborů znovu,
            navíc používá knihovnu Requests. Přesné adresy vstupů, pořadí
            pásem, koeficienty, pravidla zobrazení a kontrolní součty jsou
            v souboru example.json.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Různé povrchy odrážejí světlo v jednotlivých pásmech odlišně.
            Multispektrální snímkování využívá těchto rozdílů k rozpoznání sněhu, ledu,
            vody či vegetace. Kalibrace a atmosférická korekce převádějí zaznamenané
            záření na odrazivost, kterou lze mezi snímky porovnávat.
          </p>
          <p>
            Optické snímkování umožňuje mapovat rozsah sněhu a ledovců, změny krajinného
            pokryvu i sezónní aktivitu vegetace. Multispektrální snímky Landsatu 8 mají
            buňky 30 × 30 m. Opakované snímkování tak ukazuje ústup ledu, tání sněhu a
            změny zeleně na úrovni jednotlivých částí krajiny.{" "}
            <SourceLink id="2019_USGS_Landsat8_Handbook">(USGS, 2019: Landsat 8)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
