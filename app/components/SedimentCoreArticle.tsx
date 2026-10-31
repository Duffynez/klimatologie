import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function SedimentCoreArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak sestavujeme záznam z usazenin</h2>
        <p className="article-prose__intro">
          Sedimentární jádro je sloupec usazenin odebraný ze dna jezera nebo oceánu
          tak, aby zachoval jejich uspořádání. Stratigrafie zkoumá sled vrstev
          a jejich vzájemné vztahy. Spojením odběru, rozboru a datování získáváme
          záznam minulého prostředí. Postup zde projdeme na mořských usazeninách
          z lokality U1385 západně od Pyrenejského poloostrova.{" "}
          <SourceLink id="DOI_10_5194_sd_16_13_2013">(Hodell a kol. 2013)</SourceLink>
        </p>

        <h3>Co se ukládá na dně</h3>
        <p>
          Na mořské dno klesají drobné minerální částice i zbytky organismů.
          U Pyrenejského poloostrova se tak mísí materiál přinesený z pevniny
          s vápenatými schránkami mořských organismů. Změní-li se přísun některé
          složky, mění se také složení usazeniny. Nový materiál postupně překrývá
          starší. V neporušeném sledu proto hlouběji uložené vrstvy vznikly dříve.{" "}
          <SourceLink id="DOI_10_5194_sd_16_13_2013">(Hodell a kol. 2013)</SourceLink>
        </p>
        <p>
          Klima ovlivňuje, kolik materiálu přichází z okolí a jaké organismy
          ve vodě žijí. Záznam přetrvá, když se jejich částice po uložení zachovají.
          Vlastnost usazeniny, která nese informaci o minulých podmínkách,
          označujeme jako nepřímý ukazatel neboli <em>proxy</em>.
          Nejprve ale potřebujeme zjistit, kde v odebraném sloupci jednotlivé
          vzorky leží a kdy se uložily. Teprve pak lze jejich změny číst v čase.{" "}
          <SourceLink id="WEB_NCAR_Lake_Sediment_Guide">(Broadmanová a Laroccová, Climate Data Guide)</SourceLink>
        </p>

        <h3>Výběr místa a odběr jádra</h3>
        <p>
          Pro podrobný klimatický záznam hledáme místo, kde se usazeniny
          dlouhodobě hromadí. Rychlejší ukládání rozprostře stejnou dobu do větší
          tloušťky a umožní jemnější odběr vzorků. Lokalita U1385 byla vybrána
          i kvůli dřívějším jádrům z okolí, která zachycovala rychlé změny
          severoatlantického klimatu. Vrty zde zpřístupnily delší sled vrstev
          než krátké odběry ze samotného povrchu dna.{" "}
          <SourceLink id="DOI_10_5194_sd_16_13_2013">(Hodell a kol. 2013)</SourceLink>
        </p>
        <p>
          Měkký sediment lze odebrat pístovým odběračem. Do dna proniká trubice
          s vnitřním plastovým obalem, do kterého vstupuje sloupec usazenin.
          Uvnitř je těsnící píst, který zůstává vůči dnu přibližně na místě.
          Při pohybu trubice dolů klesá tlak mezi pístem a vrškem přijímaného
          vzorku. Vnější tlak pak pomáhá vtlačovat sediment do trubice
          a překonávat tření o její stěnu. Tím se omezuje stlačování vrstev
          při odběru.{" "}
          <SourceLink id="1947_Kullenberg_Piston">(Kullenberg 1947, popis principu)</SourceLink>
        </p>
        <p>
          Na lodi <em>JOIDES Resolution</em> se používal hydraulický systém APC,
          anglicky <em>Advanced Piston Corer</em>. Tlak vody vysune odběrovou trubici
          z konce vrtného nástroje do sedimentu. Jedním záběrem může odebrat
          přibližně 9,5 metru materiálu. Vnitřní trubice se vytáhne lanem
          vrtným potrubím na loď, zatímco potrubí zůstává na místě.
          Po vyjmutí vzorku se nástroj posune hlouběji a odběr pokračuje.{" "}
          <SourceLink id="WEB_IODP_APC_2012">(IODP: Advanced Piston Corer)</SourceLink>
        </p>
        <p>
          V pevnějších hlubších vrstvách se používá rotační odběr. Řezná korunka
          obrušuje materiál kolem válce, který vstupuje do odběrové trubice.
          Expedice 397 tak v lokalitě U1385 navázala na pístové odběry a dosáhla
          hloubky kolem 400 metrů pod dnem. Patřila do programu IODP,
          anglicky International Ocean Discovery Program, zaměřeného
          na výzkum oceánů pomocí vrtání.{" "}
          <SourceLink id="DOI_10_14379_iodp_proc_397_102_2024">(Abrantesová a kol. 2024, oddíl 1.3)</SourceLink>{" "}
          <SourceLink id="DOI_10_14379_iodp_proc_397_204_2026">(Hodell a kol. 2026)</SourceLink>
        </p>

        <h3>Jak jádro připravíme a proměříme</h3>
        <p>
          Na palubě se plastový obal s jádrem rozdělí na kratší úseky.
          U každého zůstává zaznamenaná poloha ve vrtu. Nejdřív se měří celý
          válec, potom se podélně rozřízne na pracovní a archivní polovinu.
          Pracovní část poskytne vzorky pro jednotlivé rozbory.
          Archivní polovina umožňuje opakované prohlížení a další měření.{" "}
          <SourceLink id="DOI_10_14379_iodp_proc_397_102_2024">(Abrantesová a kol. 2024, oddíl 1.5)</SourceLink>
        </p>
        <figure className="article-figure article-figure--instrument">
          <Image className="article-figure__media" src="/media/sediment-cores/whole-core-logger.jpg"
            alt="Hisashi Ikeda stojí u vodorovné měřicí dráhy se sedimentárním jádrem v plastovém obalu. Nad dráhou jsou snímače a obrazovky s průběhy měření."
            width={750} height={1000} unoptimized />
          <figcaption>
            Hisashi Ikeda u přístroje pro měření celých jader na lodi
            JOIDES Resolution během expedice 397 v roce 2022.
            Jádro se posouvá v měřicí dráze mezi snímači vlastností sedimentu.
            Foto: Xiaolei Pang / IODP, IODP JRSO, beze změny.{" "}
            <SourceLink id="WEB_IODP_397_Logger_Photo">Původní snímek</SourceLink>.{" "}
            <SourceLink id="WEB_IODP_Photo_License">Licence CC BY 4.0</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Fotografie rozříznutého jádra zachytí barvy a rozhraní vrstev.
          Další přístroje měří například hustotu nebo magnetickou susceptibilitu,
          tedy jak silně materiál reaguje na přiložené magnetické pole.
          Výsledkem jsou průběhy vlastností podél jádra.
          Aby přístroj poskytoval porovnatelné hodnoty, měří se také reference
          se známými vlastnostmi. U měření hustoty slouží například obal
          naplněný destilovanou vodou a hliníkovými válci. Jejich známá hustota
          umožňuje stanovit vztah mezi odezvou přístroje a hustotou vzorku.{" "}
          <SourceLink id="DOI_10_14379_iodp_proc_397_102_2024">(Abrantesová a kol. 2024, oddíly 2 a 6)</SourceLink>
        </p>
        <p>
          Pro U1385 se po expedici podrobně měřilo také složení pomocí
          rentgenové fluorescence. Dopadající rentgenové záření vyvolá v materiálu
          záření charakteristické pro jednotlivé prvky. Přístroj zaznamenává
          jeho intenzitu podél jádra. Poměr signálů vápníku a titanu,
          zapisovaný Ca/Ti, zde zvýrazňuje střídání usazenin různého složení.
          Právě jeho střídající se maxima a minima pomohou rozpoznat stejné
          vrstvy v sousedním vrtu.{" "}
          <SourceLink id="DOI_10_14379_iodp_proc_397_204_2026">(Hodell a kol. 2026, oddíl 2.1)</SourceLink>
        </p>

        <h3>Jak navážeme úseky z více vrtů</h3>
        <p>
          Vedle sebe se odebírá několik vrtů a jejich jednotlivé záběry
          začínají v různých hloubkách. Úsek u konce jednoho jádra tak můžeme
          porovnat s vnitřkem jádra ze sousedního vrtu.
          V naměřených průbězích hledáme shodnou posloupnost změn.
          Přiřazování odpovídajících vrstev se nazývá stratigrafická korelace.{" "}
          <SourceLink id="DOI_10_5194_sd_16_13_2013">(Hodell a kol. 2013)</SourceLink>
        </p>
        <p>
          Rozpoznané úseky posuneme na společnou hloubkovou osu.
          Z překrývajících se částí pak vybereme jednu návaznou cestu.
          Sestavený sloupec obsahuje za každou vrstvu vybraný vzorek z některého
          vrtu a zachovává údaj o jeho původu. Jeho hloubka je souřadnicí
          tohoto složeného záznamu. Může se lišit od původní hloubky pod dnem,
          protože odebraná jádra se mohou různě roztáhnout nebo stlačit.
          V datech nese tato stupnice zkratku CCSF, z anglického
          Core Composite Depth below Sea Floor, tedy složená hloubka pod dnem.{" "}
          <SourceLink id="DOI_10_14379_iodp_proc_397_102_2024">(Abrantesová a kol. 2024, oddíl 8)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/sediment-cores/princip.svg"
            alt="Dva vrty mají stejné barevné vrstvy, ale mezery na různých místech. Po přiřazení odpovídajících vrstev se ze zeleně označených úseků sestaví návazný sloupec, ke kterému se následně přiřadí stáří."
            width={720} height={860} unoptimized />
          <figcaption>
            Barevné pásy znázorňují stejné vrstvy ve dvou blízkých vrtech.
            Přerušení bílými mezerami představuje chybějící odběr.
            Zelené obrysy označují vybrané úseky. Sestavení společného
            sloupce ještě neurčuje jeho stáří. Vlastní schéma podle{" "}
            <SourceLink id="DOI_10_14379_iodp_proc_397_102_2024">metodiky expedice 397</SourceLink>,
            bez hloubkového měřítka.
          </figcaption>
        </figure>

        <h3>Jak hloubce přiřadíme stáří</h3>
        <p>
          Pro číselné datování potřebujeme opěrné body, tedy úrovně se stanoveným
          stářím. U mořských sedimentů lze využít opakující se změny izotopového
          složení schránek. Izotopy jsou varianty atomů téhož prvku, které se
          liší hmotností. Poměr těžšího a lehčího kyslíku ve schránkách odráží
          teplotu vody i její izotopové složení. To se mění také při růstu
          a ústupu pevninského ledu. Ve více mořských záznamech proto nacházíme
          společný průběh spojený se střídáním dob ledových a meziledových.{" "}
          <SourceLink id="DOI_10_1029_2004PA001071">(Lisiecki a Raymo 2005)</SourceLink>
        </p>
        <p>
          Ze vzorku sedimentu se vyberou schránky dírkovců, drobných jednobuněčných
          organismů. Pro datování popisovaného záznamu se používají druhy žijící
          na dně. Jejich izotopové složení změří{" "}
          <Link href="/metody/hmotnostni-a-izotopova-spektrometrie">hmotnostní spektrometr</Link>.
          Z opakovaných rozborů vznikne průběh podle hloubky,
          který lze porovnat s referenčním průběhem složeným z mnoha vrtů.{" "}
          <SourceLink id="DOI_10_5194_cp_19_607_2023">(Hodell a kol. 2023, oddíl 2.1)</SourceLink>
        </p>
        <p>
          Jeden takový referenční záznam, Prob-stack, kombinuje 180
          izotopových záznamů a popisuje i jejich rozptyl. Místní průběh
          přiřazujeme k jeho odpovídajícím částem. Vztah k referenci poskytne
          vybraným hloubkám stáří. Jde o datování prostřednictvím
          společných změn, které přebírá časovou stupnici reference.{" "}
          <SourceLink id="DOI_10_1093_climsys_dzx002">(Ahn a kol. 2017)</SourceLink>
        </p>
        <p>
          Časovou osu použité reference určuje stupnice LR04. Její autoři
          vyšli z vypočtených změn letního oslunění daných proměnami oběžné
          dráhy Země a sklonu její osy. Jednoduchým modelem odhadli,
          jak by na ně reagoval objem ledu. Porovnáním tohoto průběhu
          s izotopovým záznamem přiřadili záznamu čas.
          Při ladění také omezovali příliš prudké změny průměrného
          tempa ukládání sedimentů.{" "}
          <SourceLink id="DOI_10_1029_2004PA001071">(Lisiecki a Raymo 2005)</SourceLink>
        </p>
        <p>
          Mezi opěrnými body sestavíme vztah hloubky a stáří, nazývaný
          model stáří. Nejjednodušší propojení předpokládá uvnitř každého
          úseku stálé tempo ukládání. Stejné přírůstky hloubky pak znamenají
          stejné přírůstky času. Průměrnou rychlost ukládání vypočteme
          z tloušťky úseku a doby, za kterou vznikl:
        </p>
        <Equation tex={String.raw`s = \frac{z_2-z_1}{t_2-t_1}`} />
        <p>
          <InlineMath tex="s" /> označuje průměrnou rychlost ukládání.
          <InlineMath tex="z_1" /> a <InlineMath tex="z_2" /> jsou hloubky horního
          a dolního bodu na stejné stupnici.
          <InlineMath tex="t_1" /> a <InlineMath tex="t_2" /> jsou jejich stáří,
          která rostou směrem do minulosti. Při hloubce v centimetrech
          a stáří v tisících let vyjde rychlost v centimetrech za tisíc let.
          Vztah používáme pro úsek se zachovaným ukládáním mezi oběma body.{" "}
          <SourceLink id="DOI_10_14379_iodp_proc_397_204supp_2026">(Hodell a kol. 2026, tabulka 11)</SourceLink>
        </p>

        <h3>Co datovaný záznam vypovídá o klimatu</h3>
        <p>
          Naměřené vlastnosti už nyní mají místo na časové ose.
          U1385 umožňuje sledovat změny povrchové i hluboké vody,
          protože uchovává schránky organismů z obou prostředí.
          Hodell a kolegové na jejich izotopových záznamech zkoumali,
          jak se rychlé klimatické výkyvy vyskytovaly během různých
          ledových cyklů posledního přibližně půldruhého milionu let.
          Uspořádání vzorků umožňuje posoudit také pořadí změn uvnitř
          téhož sedimentárního sledu.{" "}
          <SourceLink id="DOI_10_5194_cp_19_607_2023">(Hodell a kol. 2023)</SourceLink>
        </p>
        <p>
          Převod konkrétního ukazatele na teplotu vyžaduje samostatně
          stanovený vztah. Datované jádro mu poskytuje materiál a časovou osu.
          Porovnání s dalšími archivy pak spojuje různé části klimatického
          systému. Například{" "}
          <Link href="/metody/ledova-jadra-a-analyza-uzavreneho-vzduchu">ledová jádra</Link>{" "}
          uchovávají vzduch, z něhož vychází starší část{" "}
          <Link href="/pozorovani/atmosfericka-koncentrace-co2/#vzduch-v-ledu">pozorování atmosférického CO₂</Link>.
          Sedimentární vzorky k tomu přidávají záznam prostředí oceánu.{" "}
          <SourceLink id="WEB_NCAR_Lake_Sediment_Guide">(Climate Data Guide: převod nepřímých ukazatelů)</SourceLink>{" "}
          <SourceLink id="DOI_10_5194_cp_19_607_2023">(Hodell a kol. 2023)</SourceLink>
        </p>

        <p>
          Propojení vrtů z různých částí oceánu prodlužuje záznam do ještě vzdálenější
          minulosti. Soubor CENOGRID spojuje izotopové rozbory schránek dírkovců do
          časové řady za posledních 66 000 000 let. Umožňuje sledovat přechody mezi
          teplými obdobími a světem s rozsáhlými ledovými příkrovy.{" "}
          <SourceLink id="DOI_10_1594_PANGAEA_917503">(Westerhold, 2020: CENOGRID)</SourceLink>
        </p>

        <h3>Vývoj odběru a jezerní varianty</h3>
        <p>
          Kullenbergův popis z roku 1947 ukázal, jak pístový odběrač
          přizpůsobený práci v hlubokém moři získává dlouhé sloupce sedimentu.
          Pozdější hydraulický odběr vrtným potrubím dovolil opakovat
          záběry bez vytažení celé vrtné sestavy. U1385 se v roce 2011
          odebírala právě tímto způsobem. Následné expedice doplnily další
          materiál a hlubší vrstvy.{" "}
          <SourceLink id="1947_Kullenberg_Piston">(Kullenberg 1947)</SourceLink>{" "}
          <SourceLink id="WEB_IODP_APC_2012">(IODP: APC)</SourceLink>{" "}
          <SourceLink id="DOI_10_14379_iodp_proc_397_204_2026">(Hodell a kol. 2026)</SourceLink>
        </p>
        <p>
          V jezerech se obdobně odebírají sloupce usazenin, často s vyšším
          tempem ukládání. Některá jezera zachovávají i pravidelný sezónní
          sled tenkých vrstviček. Jeho roční soubor se nazývá varva
          a po ověření ročního rytmu umožňuje počítat jednotlivé roky.
          Jinde se stáří opírá například o rozpad radioaktivních prvků
          v datovatelném materiálu. Způsob datování se tak volí podle
          zachovaných složek a stáří záznamu.{" "}
          <SourceLink id="WEB_NCAR_Lake_Sediment_Guide">(Broadmanová a Laroccová, Climate Data Guide)</SourceLink>{" "}
          Zachovaný pyl v těchto vrstvách umožňuje sledovat někdejší vegetaci.
          Jeho rozbor vysvětluje článek o{" "}
          <Link href="/metody/pylova-analyza-a-mikrofosilie">pylové analýze a mikrofosiliích</Link>.{" "}
          Jiný způsob sestavení ročního záznamu vysvětluje článek o{" "}
          <Link href="/metody/dendrochronologie">dendrochronologii</Link>,
          která přiřazuje kalendářní roky letokruhům dřeva.{" "}
          <SourceLink id="WEB_NPS_Dendrochronology_2019">(Eakin a Hortonová 2019)</SourceLink>
        </p>

        <h2>Nejistoty a kontrola návaznosti</h2>
        <p>
          Podrobnost záznamu omezuje promíchání sedimentu organismy,
          porušení při odběru i nejistota datování. Chybějící úsek se ověřuje
          porovnáním dalších vrtů. Práce z roku 2026 tak doplnila ve starší
          sestavě U1385 přibližně 30 tisíc let chybějícího záznamu.
          To ukazuje význam opakovaného odběru i následné revize již
          sestavené stratigrafie.{" "}
          <SourceLink id="DOI_10_14379_iodp_proc_397_204_2026">(Hodell a kol. 2026, oddíly 1 a 3.1)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Podrobnosti k úplnosti, stáří a nezávislé kontrole</summary>
          <p>
            Promíchávání usazenin organismy, označované jako bioturbace,
            rozptyluje materiál mezi sousední úrovně. Jemný krok měření
            proto nezaručuje zachování stejně krátkých klimatických změn.
            Přidává se deformace jádra a ztráta materiálu při odběru.
            Při sestavování profilu se vybírají zachované překrývající se úseky
            a kontrolují se jejich fotografie i naměřené vlastnosti.{" "}
            <SourceLink id="DOI_10_14379_iodp_proc_397_102_2024">(Abrantesová a kol. 2024)</SourceLink>{" "}
            <SourceLink id="DOI_10_14379_iodp_proc_397_204_2026">(Hodell a kol. 2026)</SourceLink>
          </p>
          <p>
            Vztah hloubky a stáří závisí na počtu opěrných bodů i jejich
            přiřazení k referenci. Prob-stack zahrnuje rozptyl izotopových
            hodnot a nejistotu jejich vzájemného přiřazení, ale jeho časová
            osa nadále přebírá chronologii LR04. Shoda s touto referencí,
            použitou k datování, proto sama nepotvrzuje správnost stáří
            nezávislým měřením. Podobně společně datované vrty neslouží
            jako nezávislé hodiny.{" "}
            <SourceLink id="DOI_10_1093_climsys_dzx002">(Ahn a kol. 2017)</SourceLink>
          </p>
          <p>
            Hodell a kolegové v roce 2023 porovnali více časových stupnic
            pro U1385. Astronomicky laděná stupnice se obecně shodovala
            s LR04 v mezích odhadované nejistoty LR04: přibližně ±4 tisíce let
            za poslední milion let a ±6 tisíc let v intervalu jednoho
            až půldruhého milionu let. Oba postupy však využívají
            astronomické vztahy. Tyto hodnoty nejsou samostatně vyčíslenou
            nejistotou každého místního vzorku.{" "}
            <SourceLink id="DOI_10_5194_cp_19_607_2023">(Hodell a kol. 2023, oddíl 2.3)</SourceLink>
          </p>
        </details>

        <h2>Příklad: kolik času představuje úsek sedimentu</h2>
        <p>
          Použijeme dvě sousední datovací úrovně z tabulky 11 publikované
          k lokalitě U1385 v roce 2026. Leží v hlubší části záznamu,
          pod horním úsekem odebraným pístem. Vstupem jsou už přiřazené
          hloubky a stáří na stupnici LR04. Budeme z nich počítat
          průměrné tempo ukládání, nikoli znovu určovat stáří.{" "}
          <SourceLink id="DOI_10_14379_iodp_proc_397_204supp_2026">(Hodell a kol. 2026, tabulka 11)</SourceLink>
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap">
            <table>
              <caption>Dva body na složené hloubkové stupnici CCSF</caption>
              <thead><tr><th>Úroveň</th><th>Hloubka (m)</th><th>Stáří (tisíce let)</th></tr></thead>
              <tbody>
                <tr><td>Horní</td><td>179,62</td><td>1 441,8</td></tr>
                <tr><td>Dolní</td><td>180,92</td><td>1 457,4</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>
          Rozdíl hloubek je 1,30 metru, tedy 130 centimetrů.
          Rozdíl stáří činí 15,6 tisíce let. Jejich podíl dá:
        </p>
        <Equation tex={String.raw`s = \frac{130\,\mathrm{cm}}{15{,}6\,\text{tisíce let}} \doteq 8{,}33\,\frac{\mathrm{cm}}{\text{tisíc let}}`} />
        <p>
          Složený záznam v tomto úseku tedy přibýval průměrně o přibližně
          8,33 centimetru za tisíc let. Obráceným podílem dostaneme dobu
          připadající na jeden centimetr: 15 600 let děleno 130 centimetry
          je 120 let na centimetr. To popisuje průměrné časové rozestupy
          centimetrového vzorkování. Skutečné časové rozlišení dále ovlivňuje
          promíchání a uchování sedimentu.
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/sediment-cores/age-depth.svg"
            alt="Dva body vztahu stáří a složené hloubky: 179,62 metru při stáří 1 441,8 tisíce let a 180,92 metru při 1 457,4 tisíce let. Jejich spojnice vyjadřuje průměrné tempo v úseku."
            width={720} height={520} unoptimized />
          <figcaption>
            Hloubka roste směrem dolů, stáří doprava.
            Body jsou publikované datovací úrovně. Spojnice znázorňuje
            průměrné tempo mezi nimi. Původní tabulka uvádí pro tento interval
            stejný výsledek, přibližně 8,33 cm za tisíc let.
            Vlastní graf z{" "}
            <SourceLink id="DOI_10_14379_iodp_proc_397_204supp_2026">dat Hodella a kolegů</SourceLink>.
          </figcaption>
        </figure>
        <details className="article-details">
          <summary>Data a postup pro zopakování</summary>
          <p>
            Zdrojový soubor 397-U1385TABLES.XLSX pochází z doplňku zveřejněného
            29. ledna 2026. Výběr používá list Table 11, řádky 3 a 4,
            sloupce A, C, D a E. Přístup 28. října 2026.
            Hloubka je v metrech CCSF a stáří v tisících let.
            Desetinná místa zachovávají publikované hodnoty, nevyjadřují
            přesnost datování na stovky let.{" "}
            <SourceLink id="DOI_10_14379_iodp_proc_397_204supp_2026">Původní sešit a doplněk</SourceLink>.
          </p>
          <ul>
            <li><a href="/data/methods/sediment-cores/age-depth-points.csv">Oba datovací body v CSV</a></li>
            <li><a href="/data/methods/sediment-cores/reproduce.py">Skript pro zopakování výpočtu</a></li>
            <li><a href="/data/methods/sediment-cores/provenance.json">Původ, výběr a kontrolní součty dat</a></li>
            <li><a href="/data/methods/sediment-cores/README.txt">Návod, licence a úplná citace</a></li>
          </ul>
          <p>
            Uložte soubory do společné složky a spusťte <code>python reproduce.py</code>.
            Skript zkontroluje výběr a zopakuje výpočet.
            Po stažení původního sešitu lze příkazem{" "}
            <code>python reproduce.py --source 397-U1385TABLES.XLSX</code>{" "}
            ověřit také shodu s původními buňkami.
            Stačí standardní knihovna Pythonu.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Sedimentární jádra zpřístupňují materiál, který se ukládal během minulých
            změn prostředí. Stratigrafie umožňuje spojit jeho úseky a určit jejich
            pořadí, datování k nim přidá časovou osu. Rozbory vzorků pak ukazují, jak se
            prostředí postupně proměňovalo.
          </p>
          <p>
            Z jezerních a mořských usazenin rekonstruujeme teplotu, vegetaci, přísun
            materiálu z pevniny i změny oceánu a zalednění. Propojením více mořských
            vrtů lze sledovat vývoj klimatu za posledních 66 000 000 let. Takový dosah
            má soubor CENOGRID, sestavený z izotopových rozborů schránek mořských
            organismů.{" "}
            <SourceLink id="WEB_NCAR_Lake_Sediment_Guide">(NCAR: jezerní sedimenty)</SourceLink>,{" "}
            <SourceLink id="DOI_10_1594_PANGAEA_917503">(Westerhold, 2020: CENOGRID)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
