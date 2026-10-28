import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function DendrochronologyArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak čteme čas a růst v letokruzích</h2>
        <p className="article-prose__intro">
          Dendrochronologie je metoda určování stáří a zkoumání růstu dřeva podle
          letokruhů. Jednotlivým přírůstkům přiřazuje kalendářní roky a umožňuje
          sledovat, jak se růst stromů měnil. V klimatologii se takto datované
          záznamy používají k rekonstrukci minulých teplot nebo vláhových poměrů.
          Zde se zaměříme na šířku letokruhů jehličnanů a na její využití
          při studiu letních teplot na severní Sibiři.{" "}
          <SourceLink id="WEB_NCEI_Tree_Ring_Methods">(NOAA: metodika letokruhových dat)</SourceLink>{" "}
          <SourceLink id="DOI_10_1016_j_quascirev_2013_04_008">(Briffa a kol. 2013)</SourceLink>
        </p>

        <h3>Proč ve dřevě vzniká roční záznam</h3>
        <p>
          Kmen tloustne přidáváním nového dřeva pod kůrou. U jehličnanů
          se sezónním růstem tvoří na začátku vegetačního období zpravidla
          větší buňky s tenčími stěnami. Vzniká světlejší jarní dřevo.
          Později přibývají menší buňky se silnějšími stěnami, které vytvářejí
          tmavší pozdní dřevo. Po zimní přestávce začíná další přírůstek.
          Celý tento roční přírůstek je jeden letokruh. Starší dřevo zůstává
          uvnitř kmene, takže se jeho záznam postupně prodlužuje.{" "}
          <SourceLink id="WEB_NPS_Dendrochronology_2019">(Eakin a Hortonová 2019)</SourceLink>
        </p>
        <p>
          Šířka letokruhu vyjadřuje, o kolik v daném směru přibylo dřeva.
          Růst potřebuje vhodnou teplotu i vodu. Blízko severní hranice lesa
          může jeho průběh výrazně omezovat chladné léto, v suchém prostředí
          zase nedostatek vláhy. Stromy stejného druhu na podobném stanovišti
          prožívají část těchto podmínek společně. V jejich letokruzích proto
          hledáme společné střídání silnějšího a slabšího růstu.{" "}
          <SourceLink id="WEB_NCEI_Tree_Ring_Methods">(NOAA: výběr stanoviště)</SourceLink>{" "}
          <SourceLink id="DOI_10_1016_j_quascirev_2013_04_008">(Briffa a kol. 2013, oddíl 3)</SourceLink>
        </p>

        <h3>Výběr stromů a odběr vzorku</h3>
        <p>
          Stanoviště vybíráme podle klimatické veličiny, kterou chceme poznat.
          Pro záznam letních teplot jsou vhodné například modříny poblíž
          arktické hranice lesa. Odebírá se více stromů, aby bylo možné
          rozpoznat společný průběh růstu. Z jednoho kmene se zpravidla získají
          dva vývrty z různých směrů. Jejich porovnání pomáhá zachytit letokruh
          i tam, kde je na jedné straně kmene velmi úzký.{" "}
          <SourceLink id="WEB_NCEI_Tree_Ring_Methods">(NOAA: odběr vzorků)</SourceLink>{" "}
          <SourceLink id="2003_GrissinoMayer_IncrementBorer">(Grissino-Mayer 2003)</SourceLink>
        </p>
        <p>
          K odběru slouží přírůstový nebozez, nazývaný také Presslerův nebozez.
          Jeho dutý vrták se otáčením příčné rukojeti zašroubuje do kmene
          směrem ke středu. Dřevo uvnitř dutiny zůstane jako tenký váleček,
          který protíná postupně mladší a starší letokruhy.
          Do vrtáku se pak zasune úzká kovová lžička, na níž se váleček vytáhne.
          Běžný vývrt má průměr přibližně pět milimetrů. U zachovaného mrtvého
          dřeva lze odebrat také příčný řez kmenem.{" "}
          <SourceLink id="2003_GrissinoMayer_IncrementBorer">(Grissino-Mayer 2003, s. 64–70)</SourceLink>
        </p>
        <figure className="article-figure article-figure--instrument">
          <Image className="article-figure__media" src="/media/dendrochronology/increment-borer.png"
            alt="Tři snímky odběru dřeva: otáčení modrou příčnou rukojetí nebozezu, vytažení tenkého válečku kovovou lžičkou a detail letokruhů na získaném vývrtu."
            width={1336} height={1763} unoptimized />
          <figcaption>
            Odběr borovice těžké při výzkumu růstu a minulého prostředí
            v Dinosaur National Monument v USA. Nahoře je přírůstový nebozez
            v kmeni a vyjímání vzorku, dole vývrt s viditelnými letokruhy.
            Sestava fotografií zveřejněná USGS v roce 2023.
            Foto: ReBecca Hunt-Foster / National Park Service, beze změny.{" "}
            <SourceLink id="WEB_USGS_Tree_Coring_2023">Původ a kontext snímků</SourceLink>.{" "}
            <SourceLink id="WEB_NPS_Public_Domain">Dílo americké federální správy, public domain v USA</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Vývrt se upevní do podložky a jeho povrch se jemně obrousí,
          aby pod lupou nebo mikroskopem vynikla rozhraní letokruhů.
          Každý vzorek si ponechává označení stromu, místa a odběru.
          Právě rozhraní mezi dvěma ročními přírůstky bude sloužit
          pro datování i měření jejich šířky.{" "}
          <SourceLink id="WEB_NCEI_Tree_Ring_Methods">(NOAA: příprava vzorků)</SourceLink>
        </p>

        <h3>Jak přiřadíme jednotlivým letokruhům roky</h3>
        <p>
          U živého stromu známe rok odběru a podle doby odběru určíme poslední
          dokončený letokruh. Od něj můžeme postupovat směrem do minulosti.
          Rozhodující je přitom porovnání více vzorků. Výrazně úzké a široké
          letokruhy vytvářejí sled, který hledáme také na ostatních stromech.
          Když se shoduje delší posloupnost těchto znaků, můžeme odpovídající
          letokruhy spojit se stejnými kalendářními roky. Tento postup
          se nazývá křížové datování.{" "}
          <SourceLink id="WEB_NPS_Dendrochronology_2019">(Eakin a Hortonová 2019)</SourceLink>{" "}
          <SourceLink id="1983_Holmes_Crossdating">(Holmes 1983)</SourceLink>
        </p>
        <p>
          Stejným způsobem připojíme starší dřevo. Jeho nejmladší část může
          zachycovat období, které se překrývá s nejstarší částí živého stromu.
          Shoda v překryvu umožní přiřadit roky celému staršímu vzorku.
          Přidáváním dalších překrývajících se vzorků tak časový záznam
          prodloužíme za délku života jednotlivého stromu.{" "}
          <SourceLink id="WEB_NPS_Dendrochronology_2019">(Eakin a Hortonová 2019)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/dendrochronology/crossdating.svg"
            alt="Staré dřevo a živý strom mají překrývající se úsek se stejným pořadím užších a širších letokruhů. Jejich přiřazení prodlouží kalendářní záznam do minulosti."
            width={720} height={620} unoptimized />
          <figcaption>
            Sloupky představují proměnlivou šířku letokruhů, nikoli řez kmenem.
            Barevně vyznačený překryv spojuje stejné roky v obou vzorcích.
            Staré dřevo prodlužuje záznam vlevo, živý strom jej ukotvuje
            ke známým rokům vpravo. Vlastní ilustrační schéma podle{" "}
            <SourceLink id="WEB_NPS_Dendrochronology_2019">popisu křížového datování</SourceLink>.
          </figcaption>
        </figure>

        <h3>Měření šířky a porovnání průběhů</h3>
        <p>
          Šířku měříme podél směru růstu mezi sousedními rozhraními letokruhů.
          Použít lze posuvný měřicí stolek pod mikroskopem nebo digitální obraz
          vzorku. U obrazu potřebujeme převést obrazové body, tedy pixely,
          na skutečnou délku. Označíme na něm vzdálenost známou z délkové
          reference a zadáme její velikost v milimetrech. Tím vznikne měřítko,
          podle něhož program přepočte vzdálenosti mezi označenými rozhraními.
          Výsledkem je šířka každého letokruhu s přiřazeným rokem.{" "}
          <SourceLink id="WEB_NCEI_Tree_Ring_Methods">(NOAA: měření šířek)</SourceLink>{" "}
          <SourceLink id="WEB_ImageJ_Spatial_Calibration">(ImageJ: délková kalibrace obrazu)</SourceLink>
        </p>
        <p>
          Naměřené průběhy můžeme vykreslit nad sebe a jejich shodu také
          vyčíslit. Používá se k tomu Pearsonův korelační koeficient,
          označovaný <InlineMath tex="r" />. Ten
          porovnává, jak se hodnoty obou záznamů společně odchylují od svých
          průměrů. Nabývá hodnot od −1 do 1 a nemá jednotku.
          Vyjadřuje přitom, jak dobře lze vztah obou záznamů popsat přímkou.
          Hodnota blízká 1 znamená, že nadprůměrné i podprůměrné hodnoty
          nastávají společně v těsné lineární souvislosti. Hodnota blízká nule
          znamená slabou lineární shodu. Při záporné hodnotě vyšším hodnotám
          jednoho záznamu obvykle odpovídají nižší hodnoty druhého.{" "}
          <SourceLink id="1983_Holmes_Crossdating">(Holmes 1983)</SourceLink>
        </p>
        <p>
          Pro datování porovnáváme záznamy také s různými časovými posuny.
          Vedle shody stejných roků vyčíslíme shodu s dřívějšími nebo
          pozdějšími roky druhého vzorku. Takové porovnání pomáhá najít
          úseky, jejichž přiřazení rokům je potřeba znovu prohlédnout.{" "}
          <SourceLink id="1983_Holmes_Crossdating">(Holmes 1983, s. 69–72)</SourceLink>
        </p>

        <h3>Jak oddělíme vliv věku a spojíme více stromů</h3>
        <p>
          Z datovaných měření nyní sestavíme společný růstový záznam.
          Pokud máme z jednoho stromu více vývrtů, nejprve zprůměrujeme
          šířky jeho odpovídajících letokruhů. Každý strom tak vstoupí
          do dalších kroků jedním záznamem a nezíská větší váhu
          jen díky většímu počtu odběrů.{" "}
          <SourceLink id="WEB_Briffa_2013_Chronology_Methods">(Briffa a kol. 2013, doplněk SM1)</SourceLink>
        </p>
        <p>
          Pro klimatické využití potřebujeme porovnat růst stromů různého věku.
          Šířka letokruhů se totiž mění také s velikostí kmene. Stejný přírůstek
          plochy dřeva se na větším obvodu rozloží do tenčí vrstvy.
          Stejně příznivé podmínky tak mohou u mladého a staršího stromu
          vést k různé šířce letokruhu.
          Tento růstový průběh odhadujeme z měření a oddělujeme jej
          při zpracování nazývaném standardizace.{" "}
          <SourceLink id="WEB_NCEI_Tree_Ring_Methods">(NOAA: standardizace)</SourceLink>{" "}
          <SourceLink id="DOI_10_1016_j_quascirev_2013_04_008">(Briffa a kol. 2013, oddíl 4)</SourceLink>
        </p>
        <p>
          Jednou možností je společná regionální růstová křivka.
          Letokruhy mnoha stromů nejprve seřadíme podle jejich vzdálenosti
          v letech od středu kmene. Srovnáváme tedy například stejný pořadový
          letokruh stromů, které žily v různých stoletích. Tento věk počítáme
          od středu kmene ve výšce odběru vzorku. Pro jednotlivé
          věky vypočteme průměrnou šířku a její průběh vyhladíme.
          Získáme odhad obvyklé šířky při daném věku na zkoumaném stanovišti.
          Rozložení vzorků do různých kalendářních období pomáhá odlišit
          tento věkový průběh od společných klimatických změn.{" "}
          <SourceLink id="DOI_10_1016_j_quascirev_2013_04_008">(Briffa a kol. 2013, oddíl 4.1)</SourceLink>
        </p>
        <p>
          Naměřenou šířku pak vydělíme očekávanou šířkou z této křivky:
        </p>
        <Equation tex={String.raw`I = \frac{w}{g}`} />
        <p>
          <InlineMath tex="w" /> je naměřená šířka letokruhu a <InlineMath tex="g" />{" "}
          očekávaná šířka pro jeho věk, obě v milimetrech.
          Podíl <InlineMath tex="I" /> je růstový index bez jednotky.
          Hodnota 1 odpovídá očekávanému růstu, vyšší hodnota širšímu
          a nižší užšímu letokruhu. Křivku používáme pro soubor stromů,
          pro který vhodně popisuje závislost růstu na věku.{" "}
          <SourceLink id="WEB_Briffa_2013_Chronology_Methods">(Briffa a kol. 2013, doplněk SM1)</SourceLink>
        </p>
        <p>
          Indexy nyní vrátíme do pořadí podle kalendářních roků.
          Pro každý rok je zprůměrujeme napříč stromy.
          Vzniká společný roční průběh růstu, označovaný jako letokruhová
          chronologie. U každého roku známe také počet stromů, které jej
          dokládají. Chronologie zachycuje společné změny lépe než jednotlivý
          strom, jehož růst výrazněji ovlivňují místní okolnosti.{" "}
          <SourceLink id="WEB_Briffa_2013_Chronology_Methods">(Briffa a kol. 2013, doplněk SM1)</SourceLink>
        </p>

        <h3>Jak růst souvisí s minulými teplotami</h3>
        <p>
          Klimatický význam chronologie určíme v období, kdy máme současně
          letokruhy a přístrojová měření. Porovnáváme jejich změny
          a zjišťujeme, ke kterým měsícům se růst vztahuje nejsilněji.
          U sibiřských modřínů z Jamalu Briffa a kolegové využili teplotní
          záznam začínající rokem 1883. Šířka letokruhů se zde vztahovala
          především k teplotám v červnu a červenci. Výsledná rekonstrukce
          proto popisuje tuto část roku v dané oblasti.{" "}
          <SourceLink id="DOI_10_1016_j_quascirev_2013_04_008">(Briffa a kol. 2013, oddíl 8)</SourceLink>
        </p>
        <p>
          Převod na stupně Celsia se stanoví z překryvu obou záznamů.
          V jamalské studii autoři zvětšili nebo zmenšili kolísání chronologie
          tak, aby odpovídalo kolísání měřených teplot, a posunuli její průměr
          na teplotní průměr stejného období. Krátké výkyvy a změny trvající
          několik desetiletí přitom zpracovali odděleně, protože růst
          na obou časových měřítkách reaguje odlišně. Takto získaným vztahem
          převedli starší část chronologie na odhad minulých letních teplot.{" "}
          <SourceLink id="WEB_Briffa_2013_Temperature_Methods">(Briffa a kol. 2013, doplněk SM8)</SourceLink>
        </p>
        <p>
          Spojení živých a zachovaných mrtvých stromů umožnilo v této studii
          rekonstruovat letní teploty Jamalu za více než dva tisíce let.
          Jde o regionální sezónní záznam. Navazuje na přístrojová měření,
          jejichž vznik a prostorové skládání vysvětluje článek o{" "}
          <Link href="/pozorovani/gmst">globální teplotě u povrchu</Link>.
          Jiný přírodní archiv představují{" "}
          <Link href="/metody/sedimentarni-jadra-a-stratigrafie">sedimentární jádra</Link>,
          u nichž se časová osa obvykle sestavuje z datovacích opěrných bodů.
          Letokruhy umožňují při zachovaném a ověřeném ročním sledu přiřazovat
          přírůstky přímo ke kalendářním rokům.{" "}
          <SourceLink id="DOI_10_1016_j_quascirev_2013_04_008">(Briffa a kol. 2013)</SourceLink>
        </p>

        <h3>Vývoj metody a další vlastnosti letokruhů</h3>
        <p>
          Andrew Ellicott Douglass už v roce 1917 ukazoval společné změny
          růstu stromů a porovnával je se srážkovými záznamy z Arizony.
          Počítačové zpracování později umožnilo systematicky procházet
          dlouhé soubory měření. Holmes v roce 1983 popsal program COFECHA,
          který porovnává úseky záznamů a označuje podezřelá místa
          k nové kontrole dřeva. Dnešní veřejná Mezinárodní databáze
          letokruhů, anglicky International Tree-Ring Data Bank,
          uchovává původní měření i zpracované chronologie.{" "}
          <SourceLink id="1917_Douglass_Tree_Records">(Douglass 1917)</SourceLink>{" "}
          <SourceLink id="1983_Holmes_Crossdating">(Holmes 1983)</SourceLink>{" "}
          <SourceLink id="WEB_NCEI_ITRDB">(NOAA: ITRDB)</SourceLink>
        </p>
        <p>
          Standardizace může použít křivku pro jednotlivý strom nebo společné
          křivky pro skupiny stromů. Jamalská studie rozlišila rychleji
          a pomaleji rostoucí skupinu, aby rozdíly jejich běžného růstu
          méně ovlivňovaly výslednou chronologii. Vedle šířky lze měřit
          hustotu pozdního dřeva nebo izotopové složení jednotlivých letokruhů.
          Hustota vypovídá o množství hmoty v objemu dřeva, izotopová analýza
          zjišťuje poměry různých hmotnostních variant atomů.
          Datování přitom těmto rozborům poskytuje stejnou roční časovou osu.{" "}
          <SourceLink id="DOI_10_1016_j_quascirev_2013_04_008">(Briffa a kol. 2013)</SourceLink>{" "}
          <SourceLink id="WEB_NCEI_ITRDB">(NOAA: typy letokruhových dat)</SourceLink>
        </p>

        <h2>Nejistoty a kontrola výsledku</h2>
        <p>
          Výsledek ovlivňuje správné datování, výběr stromů, odstranění
          věkového průběhu i proměnlivost vztahu růstu ke klimatu.
          Briffa a kolegové porovnali oddělené soubory z Jamalu a Polárního
          Uralu. U změn kratších než 15 let dosáhla korelace jejich
          chronologií šířek hodnoty 0,82. Shoda podporuje existenci
          společného regionálního průběhu růstu.{" "}
          <SourceLink id="DOI_10_1016_j_quascirev_2013_04_008">(Briffa a kol. 2013, oddíl 7)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Podrobnosti k datování, zpracování a klimatické rekonstrukci</summary>
          <p>
            Některý letokruh může v části kmene chybět nebo být obtížně
            rozlišitelný. Uvnitř ročního přírůstku může také vzniknout rozhraní,
            které připomíná nový rok. Rozhoduje porovnání více poloměrů
            a stromů. COFECHA před porovnáním potlačuje pomalé změny růstu
            a testuje jednotlivé úseky proti ostatním vzorkům.
            Označený nesoulad je podnětem k prohlídce a opravě měření
            či datování, nikoli automatickým důvodem posunout záznam.{" "}
            <SourceLink id="1983_Holmes_Crossdating">(Holmes 1983)</SourceLink>
          </p>
          <p>
            Dlouhé klimatické změny se mohou podobat změnám růstu spojeným
            s věkem. Příliš pružná růstová křivka proto může část klimatické
            informace odstranit. U společné regionální křivky zase záleží
            na zastoupení věků a stanovišť v jednotlivých obdobích.
            Jamalská studie proto zkoumala samostatné skupiny stromů
            a různé způsoby standardizace. Srovnání Jamalu s Polárním Uralem
            využívá odlišné stromy, ale sdílí způsob zpracování.
            Samo o sobě tedy neověřuje všechny předpoklady tohoto postupu.{" "}
            <SourceLink id="DOI_10_1016_j_quascirev_2013_04_008">(Briffa a kol. 2013, oddíly 4 a 7)</SourceLink>
          </p>
          <p>
            Shoda s teplotami během období použitého ke stanovení převodu
            není ověřením na dalších, při nastavování nepoužitých datech.
            Jamalská rekonstrukce využívá téměř celý dostupný překryv
            od roku 1883. U změn delších než století je tento překryv příliš
            krátký pro samostatné určení převodu, a autoři proto přebírají
            měřítko z kratších změn. Uváděná nejistota zahrnuje rozptyl
            mezi stromy a nedokonalý vztah růstu k letní teplotě.
            Omezený počet pomalých výkyvů navíc přispívá k nejistotě
            převodního měřítka, kterou studie samostatně nevyčíslila.{" "}
            <SourceLink id="WEB_Briffa_2013_Temperature_Methods">(Briffa a kol. 2013, doplněk SM8)</SourceLink>
          </p>
        </details>

        <h2>Příklad: porovnání dvou záznamů z Jamalu</h2>
        <p>
          Vezmeme první dva záznamy ze zveřejněného souboru lokality YAD
          na Jamalu, označené YAD011 a YAD021. Pocházejí z modřínu sibiřského.
          Použijeme čtyřicet let 1950–1989. Data již obsahují kalendářní roky
          určené původními badateli. Zopakujeme malou kontrolu jejich
          vzájemné shody, bez standardizace a převodu na teplotu.{" "}
          <SourceLink id="DATA_Briffa_2013_Yamal">(Briffa a kol.: původní měření, verze 9. března 2016)</SourceLink>
        </p>
        <p>
          V původním souboru jsou šířky zapsané jako celá čísla v tisícinách
          milimetru. Hodnota 3870 proto znamená 3,870 milimetru.
          Následující výřez ukazuje čtyři roky z celého porovnávaného období:
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap">
            <table>
              <caption>Naměřené šířky letokruhů</caption>
              <thead><tr><th>Rok</th><th>YAD011 (mm)</th><th>YAD021 (mm)</th></tr></thead>
              <tbody>
                <tr><td>1965</td><td>3,870</td><td>2,750</td></tr>
                <tr><td>1966</td><td>2,010</td><td>1,730</td></tr>
                <tr><td>1967</td><td>2,120</td><td>2,140</td></tr>
                <tr><td>1968</td><td>1,380</td><td>1,430</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>
          V obou záznamech následuje po roce 1965 pokles, potom mírný nárůst
          a další pokles. Jejich šířky přitom nejsou stejné.
          Pro celých čtyřicet dvojic vychází korelační koeficient
          {" "}<InlineMath tex={String.raw`r \doteq 0{,}513`} />.
          Když místo stejných roků přiřadíme k prvnímu záznamu vždy předchozí
          rok druhého, klesne na 0,200. Při přiřazení následujícího roku
          vyjde −0,061. V tomto porovnání tedy nejlépe souhlasí původní
          přiřazení ke stejným rokům.
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/dendrochronology/width-comparison.svg"
            alt="Dva průběhy naměřených šířek letokruhů od roku 1950 do roku 1989 ve stejném měřítku. Vzorky sdílejí některé vzestupy a poklesy, ale liší se velikostí přírůstků."
            width={720} height={680} unoptimized />
          <figcaption>
            Vodorovná osa ukazuje kalendářní rok, svislé osy šířku letokruhu
            v milimetrech. Oba panely mají stejné měřítko. Vykresleny jsou
            původní šířky, bez vyhlazení a odstranění věkového průběhu.
            Vlastní graf ze{" "}
            <SourceLink id="DATA_Briffa_2013_Yamal">zveřejněného souboru YAD</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Ukázka vysvětluje, proč při datování hledáme delší společný vzor.
          Porovnání dvou vzorků a tří posunů ověřuje jen malou část práce.
          K přiřazení neznámého dřeva ke kalendáři se používá více vzorků,
          delší překryvy a prohlídka samotných letokruhů.{" "}
          <SourceLink id="1983_Holmes_Crossdating">(Holmes 1983)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Data a postup pro zopakování</summary>
          <p>
            Použit je soubor <code>yam/yad.raw</code> z archivu
            <code> raw-2016-03-09.zip</code>, přístup 28. října 2026.
            Lokalitu popisuje doplněk SM2 v tabulkách YT1 a YT2.
            Příloha CSV obsahuje roky 1949–1990, aby byly dostupné
            i krajní hodnoty potřebné pro oba posuny.
            V každém porovnání zůstává přesně 40 dvojic.
            Koncový kód −9999 označuje konec záznamu a není měřením.{" "}
            <SourceLink id="DATA_Briffa_2013_Yamal">Původní archiv a dokumentace</SourceLink>.{" "}
            <SourceLink id="WEB_NCEI_Tree_Ring_Methods">Popis datového formátu</SourceLink>.
          </p>
          <ul>
            <li><a href="/data/methods/dendrochronology/yad.raw">Původní soubor měření YAD</a></li>
            <li><a href="/data/methods/dendrochronology/comparison.csv">Vybrané hodnoty v milimetrech</a></li>
            <li><a href="/data/methods/dendrochronology/reproduce.py">Skript pro kontrolu výběru a výpočet korelací</a></li>
            <li><a href="/data/methods/dendrochronology/provenance.json">Původ dat, verze a kontrolní součty</a></li>
            <li><a href="/data/methods/dendrochronology/README.txt">Návod a úplná citace</a></li>
          </ul>
          <p>
            Soubory uložte do společné složky a spusťte <code>python reproduce.py</code>.
            Skript načte původní měření, ověří převod do CSV a vypočte
            všechny tři korelace. Používá jen standardní knihovnu Pythonu.
            Jde o prosté porovnání šířek, nikoli o spuštění programu COFECHA.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Letokruhy spojují zachované dřevo s konkrétními roky.
            Porovnání více stromů umožňuje sestavit společný průběh růstu
            a prodloužit jej do doby před přístrojovými měřeními.
            Teprve doložený vztah tohoto růstu k místním klimatickým
            podmínkám umožňuje rekonstruovat minulou teplotu nebo vláhu.
          </p>
        </div>
      </div>
    </article>
  );
}