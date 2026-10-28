import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function RadioOccultationArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak navigační signál měří atmosféru</h2>
        <p className="article-prose__intro">
          Rádiový zákryt GNSS je metoda, která z průchodu navigačního signálu
          atmosférou určuje její vlastnosti v různých výškách. Navigační družici
          při jejím zdánlivém západu nebo východu za okrajem Země sleduje přijímač
          na jiné družici. Atmosféra mění šíření signálu. Z těchto změn lze
          vypočítat výškový průběh hustoty, tlaku a teploty vzduchu.
          GNSS je anglická zkratka pro globální družicové navigační systémy
          (Global Navigation Satellite Systems). Patří mezi ně americký GPS
          a ruský GLONASS.{" "}
          <SourceLink id="DOI_10_1029_97JD01569">(Kursinski a kol. 1997)</SourceLink>
        </p>

        <h3>Proč se rádiová vlna v atmosféře ohýbá</h3>
        <p>
          Navigační signál je elektromagnetická vlna. Její elektrické pole
          působí na elektrické náboje v molekulách vzduchu. Odezva molekul
          ovlivňuje šíření vlny, která tak v dolní atmosféře postupuje o něco
          pomaleji než ve vakuu. Tento rozdíl popisuje index lomu. Hodnota jedna
          odpovídá vakuu, v běžném vzduchu je index lomu nepatrně větší.
          Čím více molekul připadá na stejný objem suchého vzduchu, tím větší
          je jeho účinek na signál.{" "}
          <SourceLink id="DOI_10_1029_97JD01569">(Kursinski a kol. 1997, oddíl 2.3)</SourceLink>
        </p>
        <p>
          S výškou vzduch zpravidla řídne a index lomu se zmenšuje. Vlna tedy
          prochází prostředím, jehož vlastnosti se postupně mění. Její dráha
          se přitom zakřivuje směrem k většímu indexu lomu, obvykle k zemskému
          povrchu. Právě míra tohoto ohybu nese informaci o rozložení vzduchu.
          Pro měření je výhodná dráha, která atmosférou prochází téměř vodorovně.
          Signál v ní urazí dlouhou vzdálenost a účinek vzduchu se nasčítá.{" "}
          <SourceLink id="DOI_10_1029_97JD01569">(Kursinski a kol. 1997, oddíl 2.2)</SourceLink>
        </p>

        <h3>Jak družice postupně prohlédne různé výšky</h3>
        <p>
          Přijímač obíhá Zemi níže než navigační družice. Když se z jeho pohledu
          navigační družice přibližuje k zemskému okraji, prochází signál stále
          nižšími vrstvami atmosféry. Nejnižší bod jeho dráhy se postupně posouvá
          dolů. Při východu navigační družice probíhá sled výšek opačně.
          Jeden zákryt trvá přibližně jednu až dvě minuty. V této době přijímač
          souvisle zaznamenává signál, ze kterého vznikne jeden výškový profil.{" "}
          <SourceLink id="DOI_10_1038_s41612_022_00229_7">(Gleisner a kol. 2022, obrázek 1)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/occultation/principle.svg" width={900} height={760}
            className="article-figure__media" unoptimized
            alt="Navigační družice vysílá signál podél zemského okraje k přijímači. Dráha se ohýbá směrem k Zemi. Následující schéma spojuje měření fáze s výpočtem ohybu, refraktivity, hustoty, tlaku a teploty." />
          <figcaption>
            Modrá křivka ukazuje dráhu rádiového signálu a šipka směr jeho šíření.
            Tečka označuje nejnižší bod dráhy nad povrchem. Pohyb družic mění
            výšku tohoto bodu, a tím i vrstvy, kterými signál prochází.
            Ohyb i tloušťka atmosféry jsou pro názornost zvětšené, vzdálenosti
            nejsou v měřítku. Spodní část shrnuje výpočet pro suchý vzduch.
            Vlastní schéma podle{" "}
            <SourceLink id="DOI_10_1029_97JD01569">Kursinského a kol. (1997)</SourceLink>.
          </figcaption>
        </figure>
        <p>
          K příjmu zákrytového signálu slouží anténa namířená k zemskému okraji.
          Další anténa sleduje navigační družice vysoko nad obzorem. Z těchto
          pozorování se určuje dráha měřicí družice a chod jejích hodin.
          Na fotografii jsou oba druhy antén přístroje GRAS, který měří
          z družic Metop. Menší anténa vlevo slouží k určení dráhy,
          větší soustava vpravo přijímá zákrytový signál. Přístroj má takové
          zákrytové antény dvě, pro pohled ve směru letu a proti němu.{" "}
          <SourceLink id="WEB_ESA_GRAS_Design">(ESA: uspořádání přístroje GRAS)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/occultation/gras-antennas.jpg" width={400} height={296}
            className="article-figure__media" unoptimized style={{ maxWidth: 400, marginInline: "auto" }}
            alt="Dvě zlatavé anténní sestavy GRAS. Menší vlevo má dva kruhové prvky, větší vpravo osmnáct prvků v šesti řadách." />
          <figcaption>
            Antény GRAS pro družice Metop. Menší sestava
            přijímá signály pro výpočet dráhy, osmnáctiprvková sestava
            zákrytové signály pro měření atmosféry. Elektronika přijímače
            na snímku není. Foto © ESA, použito pro vzdělávací výklad.{" "}
            <SourceLink id="WEB_ESA_GRAS_Antennas_2002">Původní fotografie</SourceLink>,{" "}
            <SourceLink id="WEB_ESA_Media_Terms_2024">podmínky použití ESA</SourceLink>.
          </figcaption>
        </figure>

        <h3>Co přijímač zaznamená a jak se určí ohyb</h3>
        <p>
          Přijímač průběžně sleduje fázi rádiové vlny, tedy polohu v jejím
          opakujícím se kmitu. Porovnává přijatou vlnu s místním signálem.
          Pokud se změní doba průchodu mezi družicemi, posune se také poloha
          přijaté vlny v kmitu. Souvislé sledování tohoto posunu umožňuje
          zachytit i velmi malé změny. Přijímač zaznamenává také amplitudu,
          která popisuje velikost kmitání přijatého signálu.{" "}
          <SourceLink id="DOI_10_1029_97JD01569">(Kursinski a kol. 1997, oddíl 2.1)</SourceLink>{" "}
          <SourceLink id="DOI_10_3390_atmos13091409">(Weiss a kol. 2022, oddíl 2.2)</SourceLink>
        </p>
        <p>
          Většinu změny fáze způsobuje samotný pohyb družic. Z jejich přesně
          určených poloh a rychlostí se proto spočítá, jak by signál vypadal
          při šíření vakuem. Časovou a frekvenční referenci poskytují
          navigační signály a přesná řešení družicových hodin. U měřicí
          mise COSMIC-2 se používají předem vypočtené dráhy a hodiny družic GPS.
          Po započtení odchylek hodin se očekávaný průběh porovná s měřením.
          Zbude příspěvek prostředí mezi družicemi.{" "}
          <SourceLink id="DOI_10_1029_97JD01569">(Kursinski a kol. 1997, oddíl 2.1)</SourceLink>{" "}
          <SourceLink id="DOI_10_3390_atmos13091409">(Weiss a kol. 2022, oddíl 2.4)</SourceLink>
        </p>
        <p>
          Změna tohoto příspěvku v čase poskytuje dodatečný posun frekvence, tedy počtu
          kmitů za sekundu. Pohyb zdroje a přijímače mění přijímanou frekvenci
          podle směru, kterým se vůči nim vlna šíří. Ohyb dráhy tento směr
          pozmění. Z odchylky frekvence a známého pohybu obou družic tak
          můžeme dopočítat úhel ohybu.{" "}
          <SourceLink id="DOI_10_1029_97JD01569">(Kursinski a kol. 1997, oddíly 2.1–2.2)</SourceLink>
        </p>
        <p>
          Signál prochází také ionosférou, vysokou částí atmosféry s volnými
          elektrony. Jejich působení závisí na rádiové frekvenci. Přístroj
          proto přijímá dvě frekvence stejné navigační družice. Kombinací
          obou záznamů se potlačí hlavní příspěvek ionosféry a získá se ohyb
          působený převážně níže ležícím vzduchem.{" "}
          <SourceLink id="DOI_10_1029_97JD01569">(Kursinski a kol. 1997, oddíl 3.7)</SourceLink>{" "}
          <SourceLink id="DOI_10_3390_atmos13091409">(Weiss a kol. 2022, oddíl 2.4)</SourceLink>
        </p>

        <h3>Jak se vypočítá teplota jednotlivých vrstev</h3>
        <p>
          Jeden paprsek prochází mnoha vrstvami. K určení jejich vlastností
          se proto využije celý sled paprsků s různou nejnižší výškou.
          Paprsek s nízko položeným nejnižším bodem prochází i vrstvami nad ním.
          Tyto vyšší vrstvy však zachycují také ostatní paprsky. Společné
          vyhodnocení umožní rozdělit celkový ohyb mezi výšky.
          Matematický postup se nazývá Abelova inverze. Předpokládá, že
          v okolí zákrytu závisí index lomu hlavně na výšce a jeho vrstvy
          přibližně sledují zakřivení Země.{" "}
          <SourceLink id="DOI_10_1029_97JD01569">(Kursinski a kol. 1997, oddíl 2.2)</SourceLink>{" "}
          <SourceLink id="DOI_10_1038_s41612_022_00229_7">(Gleisner a kol. 2022, Methods)</SourceLink>
        </p>
        <p>
          Výstupem je index lomu v jednotlivých výškách. Protože se jeho
          hodnota jen málo liší od jedné, používá se přehlednější veličina
          <strong> refraktivita</strong>. Od indexu lomu odečteme jedničku
          a rozdíl vynásobíme milionem:
        </p>
        <Equation tex={String.raw`N=(n-1)\,10^6`} />
        <p>
          Písmeno <InlineMath tex="n" /> označuje index lomu
          a <InlineMath tex="N" /> refraktivitu. Obě veličiny jsou bezrozměrné.
          Pro suchý vzduch je refraktivita přibližně úměrná jeho hustotě.
          Výškový průběh refraktivity proto poskytne také průběh hmotnosti
          vzduchu v jednotkovém objemu.{" "}
          <SourceLink id="DOI_10_1029_97JD01569">(Kursinski a kol. 1997, rovnice 7–8)</SourceLink>
        </p>
        <p>
          Z hustoty se určí tlak. Vrstva vzduchu nese tíhu vzduchu nad sebou.
          Známe-li hustotu v jednotlivých výškách a zemskou přitažlivost,
          můžeme tíhu nadložních vrstev postupně sečíst. Výpočet začíná
          vysoko v atmosféře s odhadem tlaku a pokračuje dolů. Při přidání
          další vrstvy se tlak zvětší o její tíhu připadající na jednotku
          plochy. Tomuto vztahu mezi tlakem a tíhou říkáme hydrostatická
          rovnováha. Horní část profilu, kam už měření dostatečně nedosahuje,
          doplňuje atmosférický model.{" "}
          <SourceLink id="DOI_10_1029_97JD01569">(Kursinski a kol. 1997, oddíl 2.3.2)</SourceLink>{" "}
          <SourceLink id="DOI_10_1038_s41612_022_00229_7">(Gleisner a kol. 2022, Methods)</SourceLink>
        </p>
        <p>
          Zbývá určit teplotu. Tlak plynu závisí jak na počtu molekul v daném
          objemu, tak na jejich tepelném pohybu. Hustota a tlak společně
          proto umožňují teplotu dopočítat. Při zanedbání vodní páry lze
          použít následující přibližný vztah:
        </p>
        <Equation tex={String.raw`T_{\mathrm d}=77{,}6\,\frac{p_{\mathrm d}}{N}`} />
        <p>
          <InlineMath tex={String.raw`T_{\mathrm d}`} /> je takzvaná suchá teplota
          v kelvinech. <InlineMath tex={String.raw`p_{\mathrm d}`} /> je tlak
          v hektopascalech vypočtený za stejného předpokladu suchého vzduchu
          a <InlineMath tex="N" /> refraktivita. Koeficient 77,6 má při těchto
          jednotkách rozměr kelvin na hektopascal. Jeho hodnota vychází
          z měření vztahu mezi vlastnostmi vzduchu a šířením rádiových vln.{" "}
          <SourceLink id="DOI_10_1029_97JD01569">(Kursinski a kol. 1997, rovnice 7–9)</SourceLink>
        </p>
        <p>
          Stratosféra leží nad troposférou, spodní vrstvou atmosféry,
          ve které probíhá většina počasí. Ve stratosféře je vodní páry málo,
          a suchá teplota tam proto dobře přibližuje skutečnou teplotu vzduchu.{" "}
          <SourceLink id="DOI_10_1029_97JD01569">(Kursinski a kol. 1997, rovnice 7–9)</SourceLink>{" "}
          <SourceLink id="DOI_10_1038_s41612_022_00229_7">(Gleisner a kol. 2022, Methods)</SourceLink>
        </p>
        <p>
          Ve vlhkém vzduchu významně přispívají k refraktivitě také molekuly
          vodní páry. K oddělení vlhkosti a teploty se pak používá další
          informace, například předpovězený stav atmosféry. Výpočet upravuje
          předpovězené profily tak, aby odpovídaly měřenému zákrytu,
          a přitom zohledňuje nejistotu obou vstupů. Tímto postupem vznikají
          samostatné produkty s teplotou a vlhkostí. Archiv COSMIC-2
          je rozlišuje od profilů suché teploty.{" "}
          <SourceLink id="DOI_10_3390_atmos13091409">(Weiss a kol. 2022, oddíl 2.4)</SourceLink>{" "}
          <SourceLink id="DOI_10_5065_T353_C093">(UCAR: datové produkty COSMIC-2)</SourceLink>
        </p>

        <h3>Co profil vypovídá o klimatu</h3>
        <p>
          Výsledný profil přiřazuje jednotlivým výškám refraktivitu, tlak
          a teplotu. Vodorovně měření zahrnuje protáhlou oblast podél dráhy
          signálu, typicky dlouhou stovky kilometrů. Výškové rozlišení je
          podstatně jemnější, řádově stovky metrů až přibližně kilometr
          podle podmínek a zpracování. Nejnižší bod paprsku se během zákrytu
          posouvá i vodorovně, takže profil obsahuje souřadnice pro
          jednotlivé výšky.{" "}
          <SourceLink id="DOI_10_1029_97JD01569">(Kursinski a kol. 1997, oddíl 2.5)</SourceLink>{" "}
          <SourceLink id="DOI_10_5065_T353_C093">(COSMIC-2: údaje jednotlivých profilů)</SourceLink>
        </p>
        <p>
          Pro sledování klimatu se mnoho profilů seskupí podle místa,
          výšky a období. Z měsíčních průměrů se odstraní běžný roční chod
          a porovnávají se změny v průběhu let. Gleisner a spoluautoři
          takto zpracovali zákrytová měření za roky 2002–2020. Zjistili
          oteplování troposféry a ochlazování dolní stratosféry. Změny
          byly patrné také v samotném ohybu signálu, tedy už před převodem
          na teplotu. Na tyto výsledky navazuje článek o{" "}
          <Link href="/pozorovani/stratosfericke-ochlazovani">teplotě stratosféry</Link>.{" "}
          <SourceLink id="DOI_10_1038_s41612_022_00229_7">(Gleisner a kol. 2022, obrázek 2)</SourceLink>
        </p>
        <p>
          Družicové rádiové zákryty se nejprve uplatnily při výzkumu atmosfér
          jiných planet. Pro měření Země pomocí GPS bylo rozhodující
          demonstrační měření GPS/MET, jehož družice odstartovala v roce 1995.
          Později počet profilů zvýšily vícedružicové mise. Šest družic
          COSMIC-2, vypuštěných v roce 2019, hustě měří zejména tropy
          a subtropy. Jejich pokrytí doplňují jiné mise, například Metop.
          Přijímače se liší anténami, sledovanými navigačními systémy
          a schopností udržet signál v nízkých vrstvách atmosféry.{" "}
          <SourceLink id="DOI_10_1029_97JD01569">(Kursinski a kol. 1997, úvod)</SourceLink>{" "}
          <SourceLink id="DOI_10_3390_atmos13091409">(Weiss a kol. 2022, úvod)</SourceLink>
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Největší opatrnost vyžaduje vlhká dolní atmosféra a horní část
          profilu, kde zeslábne měřený ohyb. Výsledek ovlivňují také vodorovné
          rozdíly ve vzduchu a způsob zpracování. Při ověřování COSMIC-2
          byla mezi 6 a 40 kilometry průměrná odchylka ohybu a refraktivity
          vůči krátkodobé předpovědi Evropského centra pro střednědobé
          předpovědi počasí (ECMWF) malá. V nejnižších vrstvách se rozdíly zvětšovaly.
          Studie porovnávala také radiosondy a blízká měření dvou družic.{" "}
          <SourceLink id="DOI_10_1029_2019GL086841">(Schreiner a kol. 2020, oddíly 2.2–2.3)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Co ovlivňuje přesnost a jak se ověřuje</summary>
          <p>
            <strong>Dolní atmosféra.</strong> Prudké změny vlhkosti mohou
            vytvořit několik drah, kterými signál současně dorazí k přijímači.
            Zpracování proto využívá i vlnový popis jeho šíření. Při zvlášť
            silném poklesu refraktivity s výškou může nastat superrefrakce,
            kdy se paprsky výrazně stáčejí k povrchu. Běžná inverze pak
            může refraktivitu podhodnocovat. Vliv má také slabý signál
            a výška, do níž se jej podaří sledovat. Suchou teplotu ve vlhkém
            vzduchu nelze bez dalšího považovat za skutečnou teplotu.{" "}
            <SourceLink id="DOI_10_1029_2019GL086841">(Schreiner a kol. 2020, oddíly 2.1 a 2.3)</SourceLink>{" "}
            <SourceLink id="DOI_10_1029_97JD01569">(Kursinski a kol. 1997, oddíl 2.3)</SourceLink>
          </p>
          <p>
            <strong>Horní okraj a prostorové rozdíly.</strong> Ve vysokých
            vrstvách roste relativní význam šumu, zbytkového působení
            ionosféry a modelového doplnění horní části profilu.
            Vodorovné změny vzduchu zase narušují předpoklad vrstev
            používaný při Abelově inverzi. Jemný krok tabulky sám o sobě
            neudává skutečné rozlišení ani nejistotu teploty.{" "}
            <SourceLink id="DOI_10_1029_97JD01569">(Kursinski a kol. 1997, oddíly 3.2–3.3 a 3.10)</SourceLink>{" "}
            <SourceLink id="DOI_10_1038_s41612_022_00229_7">(Gleisner a kol. 2022, Methods)</SourceLink>
          </p>
          <p>
            <strong>Opakovatelnost měření.</strong> Schreiner a spoluautoři
            porovnali 265 dvojic blízkých zákrytů COSMIC-2 z léta 2019,
            jejichž nejnižší body byly od sebe méně než 20 kilometrů.
            Ve výškách 30–60 kilometrů odhadli náhodnou nejistotu jednoho
            měření ohybu přibližně na 1,6 mikroradiánu, tedy
            1,6 miliontiny radiánu. Odhad předpokládá stejně velké
            a vzájemně nekorelované náhodné chyby obou měření.
            Společnou chybu obou přístrojů toto porovnání neodhalí.
            Údaj se týká ohybu, nelze jej přímo převést na stejnou
            číselnou nejistotu teploty.{" "}
            <SourceLink id="DOI_10_1029_2019GL086841">(Schreiner a kol. 2020, obrázek 4)</SourceLink>
          </p>
          <p>
            <strong>Porovnání a dlouhé řady.</strong> Tatáž studie porovnala
            říjnová data roku 2019 s radiosondami, předpověďmi a reanalýzou,
            tedy modelem zpracovaným záznamem minulého počasí. Tehdejší
            data COSMIC-2 ještě do porovnávaných modelů nevstupovala,
            což posiluje nezávislost kontroly. Modely však mohou sdílet
            další vstupy a blízká měření zachycují poněkud odlišný vzduch.
            Pro klimatické řady je navíc nutné posoudit změny pokrytí
            a udržet srovnatelné zpracování navazujících misí. Šest družic
            COSMIC-2 samo neposkytuje globální pokrytí.
            V našem příkladu zkoušíme shodu výpočtu s uloženým výsledkem.
            To je kontrola přepočtu, nikoli nezávislé ověření teploměrem.{" "}
            <SourceLink id="DOI_10_1029_2019GL086841">(Schreiner a kol. 2020, oddíl 2.3)</SourceLink>{" "}
            <SourceLink id="DOI_10_3390_atmos13091409">(Weiss a kol. 2022, úvod)</SourceLink>{" "}
            <SourceLink id="DOI_10_1038_s41612_022_00229_7">(Gleisner a kol. 2022)</SourceLink>
          </p>
        </details>

        <h2>Příklad: teplota nad Korálovým mořem</h2>
        <p>
          Použijeme skutečný profil družice COSMIC-2 E1, která přijímala
          signál družice GPS označené G11. Je uložen v denním archivu
          pro 1. ledna 2024. Vybrané body leží nad Korálovým mořem,
          přibližně na 17,5° jižní šířky a 149,2° východní délky.
          Profil prošel kontrolou kvality poskytovatele. Zopakujeme poslední
          krok suchého výpočtu, určení teploty z již vypočteného tlaku
          a refraktivity.{" "}
          <SourceLink id="DOI_10_5065_T353_C093">(UCAR: COSMIC-2, produkt atmPrf)</SourceLink>
        </p>
        <p>
          Z profilu vybíráme body nejbližší výškám 20, 25 a 30 kilometrů.
          Tlak i refraktivita směrem vzhůru klesají. Teplotu však určuje
          jejich poměr, proto si všimneme obou sloupců současně.
          Desetinná místa ponecháváme kvůli zopakování výpočtu.
        </p>
        <div className="method-data-output method-data-output--compact method-data-output__table-wrap" role="region" aria-label="Tři hladiny skutečného zákrytového profilu" tabIndex={0}>
          <table>
            <caption>Vybrané hodnoty z profilu COSMIC-2</caption>
            <thead><tr><th scope="col">Výška nad mořem</th><th scope="col">Suchý tlak</th><th scope="col">Refraktivita</th><th scope="col">Suchá teplota</th></tr></thead>
            <tbody>
              <tr><td>19,9956 km</td><td>56,898964 hPa</td><td>21,691633</td><td>−69,60 °C</td></tr>
              <tr><td>24,9962 km</td><td>25,408434 hPa</td><td>9,059811</td><td>−55,52 °C</td></tr>
              <tr><td>30,0082 km</td><td>11,840955 hPa</td><td>4,054682</td><td>−46,53 °C</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Pro prostřední bod dosadíme tlak a refraktivitu do vztahu
          vysvětleného výše. Výsledek vyjde v kelvinech. Teplotu ve stupních
          Celsia získáme odečtením 273,15:
        </p>
        <Equation tex={[
          String.raw`T_{\mathrm d}=77{,}6\,\frac{25{,}408434}{9{,}059811}`,
          String.raw`T_{\mathrm d}\approx217{,}63\ \mathrm K`,
          String.raw`217{,}63-273{,}15=-55{,}52\ {}^\circ\mathrm C`,
        ]} />
        <p>
          Ve výšce přibližně 25 kilometrů tedy získáme <strong>−55,52 °C</strong>.
          Stejnou hodnotu po zaokrouhlení obsahuje původní soubor.
          Mezi vybranými výškami 20 a 30 kilometrů teplota roste.
          Jde o svislou změnu v jednom profilu. Dlouhodobé ochlazování
          stratosféry se zjišťuje porovnáním mnoha takových profilů
          za různá období.
        </p>
        <details className="article-details">
          <summary>Data a postup pro zopakování</summary>
          <p>
            Základem je soubor <code>atmPrf_C2E1.2024.001.00.01.G11_0001.0001_nc</code>{" "}
            z <SourceLink id="DOI_10_5065_T353_C093">denního adresáře UCAR</SourceLink>.
            Patří do archivu <code>atmPrf_nrt_2024_001.tar.gz</code>, který má
            přibližně 2 GB. Název profilu je identifikátorem události.
            Atributy začátku záznamu v souboru uvádějí 31. prosince 2023
            ve 23:58:47, což zachováváme v popisu původu dat.
            Použita je veřejná operativní verze dostupná 28. října 2026,
            zpracovaná centrem UCAR/CDAAC pomocí <code>newroam</code>,
            s parametry <code>parms12</code> a příznakem <code>bad = 0</code>.
          </p>
          <p>
            Čteme proměnné <code>MSL_alt</code> (výška v kilometrech),{" "}
            <code>Ref</code> (refraktivita), <code>Pres</code> (suchý tlak)
            a <code>Temp</code> (suchá teplota ve stupních Celsia).
            Jednotka tlaku <code>mb</code> znamená milibar a je rovna
            hektopascalu. Vybrané indexy, počítané od nuly, jsou 2993,
            2747 a 2498. Hodnoty jsme neinterpolovali. Jde o produkt{" "}
            <code>atmPrf</code>, odlišný od produktu <code>wetPf2</code>,
            který spojuje zákryt s meteorologickou předpovědí.{" "}
            <SourceLink id="DOI_10_5065_T353_C093">(UCAR: popis produktů a metadata souboru)</SourceLink>
          </p>
          <p>
            Zveřejňujeme <a href="/data/methods/occultation/profile-extract.csv">tři řádky CSV</a>,{" "}
            <a href="/data/methods/occultation/provenance.json">původ dat a kontrolní součty</a>{" "}
            a <a href="/data/methods/occultation/reproduce.py">skript pro zopakování</a>.
            Uložte je do stejné složky a spusťte <code>python reproduce.py</code>.
            Základní výpočet nepotřebuje další balíčky.
            Volba <code>--profile cesta-k-souboru</code> porovná výřez
            s původním souborem pomocí balíčku <code>netCDF4</code>.
            Postup získání jediného profilu bez stahování celého archivu
            obsahuje <a href="/data/methods/occultation/README.txt">doprovodný návod</a>.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Rádiový zákryt využívá ohyb a zpoždění navigačního signálu při průchodu
            atmosférou. Postupně sleduje různé výšky, a tím odhaluje svislé uspořádání
            vzduchu. Převod naměřených změn na vlastnosti atmosféry poskytuje další
            nezávislý pohled na její vývoj.
          </p>
          <p>
            Rádiové zákryty umožňují určovat výškové profily hustoty, tlaku a teploty
            vzduchu a ve spojení s dalšími údaji také vlhkosti. Účinek atmosféry na
            signál lze sledovat přibližně od povrchu do výšky 60 km. Opakované profily
            slouží předpovědi počasí i sledování oteplování a ochlazování jednotlivých
            vrstev.{" "}
            <SourceLink id="DOI_10_1029_97JD01569">(Kursinski a kol., 1997)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
