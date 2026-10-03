import Image from "next/image";
import { SourceLink } from "./SourceLink";

export function SnowPermafrostArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>Rozsah sněhu</dt>
            <dd>Plocha území, na níž je podle pravidel daného souboru přítomen sníh. Obvykle se uvádí v km².</dd>
          </div>
          <div>
            <dt>Vodní hodnota sněhu</dt>
            <dd>
              Výška vody, která by vznikla roztáním sněhu na daném místě. Značí se SWE; jeden milimetr odpovídá
              jednomu kilogramu vody na metr čtvereční.
            </dd>
          </div>
          <div>
            <dt>Permafrost</dt>
            <dd>Půda nebo hornina, jejíž teplota zůstává nejvýše 0 °C alespoň dva roky po sobě.</dd>
          </div>
          <div>
            <dt>Aktivní vrstva</dt>
            <dd>Vrchní vrstva půdy nad permafrostem, která během roku rozmrzá a znovu zamrzá.</dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Sněhová pokrývka a permafrost se často vyskytují na stejném území, ale popisují se jinými veličinami a měří
          jinými přístroji. Tento článek proto vede obě pozorování souběžně a jejich výsledky neslučuje do jednoho čísla.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Sníh na souši pozorujeme jako plochu, dobu trvání, výšku a množství vody uložené ve sněhové pokrývce.
          U permafrostu sledujeme teplotu půdy nebo horniny v určené hloubce a největší hloubku, do níž během
          roku rozmrzne aktivní vrstva. Výsledkem je několik samostatně označených údajů, u nichž musí být uvedeno
          místo, období, jednotka a způsob měření.
        </p>

        <p>
          Toto vymezení odpovídá způsobu, jakým jsou pozorování zveřejňována v hlavních odborných souborech. Rozsah
          sněhu nad severní polokoulí popisují <SourceLink id="DOI_10_5194_essd_7_137_2015">Estilow,
          Young a Robinson, 2015</SourceLink>; vodní hodnotu a hmotnost sněhu{" "}
          <SourceLink id="DOI_10_1038_s41597_021_00939_2">Luojus et al., 2021</SourceLink>.
          Teplotu permafrostu a hloubku aktivní vrstvy shromažďuje celosvětová pozorovací síť Global Terrestrial Network for Permafrost (GTN-P);
          její databázi popsali{" "}
          <SourceLink id="DOI_10_5194_essd_7_245_2015">Biskaborn et al., 2015</SourceLink>.
          Globální změnu teploty vrtů vyhodnotili{" "}
          <SourceLink id="DOI_10_1038_s41467_018_08240_4">Biskaborn et al., 2019</SourceLink> a
          opakované měření sezónního rozmrzání koordinuje program Circumpolar Active Layer Monitoring (CALM),
          původně zaměřený na oblasti kolem severního pólu a později rozšířený i do hor a Antarktidy.{" "}
          <SourceLink id="DOI_10_1080_1088937x_2021_1988001">Nelson, Shiklomanov a Nyland, 2021</SourceLink>
        </p>

        <h3>Sníh: plocha, trvání a množství vody</h3>
        <p>
          Rozsah sněhu udává, kolik území splnilo v daném dni, týdnu nebo měsíci podmínku „pokryto sněhem“. Družicová
          mapa je rozdělena na buňky a každá buňka dostane označení sníh, bez sněhu, případně podíl pokrytý sněhem.
          Rozsah vznikne součtem ploch označených buněk. Doba trvání se počítá z počtu dnů mezi objevením a zmizením
          sněhu nebo z celkového počtu dnů se sněhem. Výsledek tedy závisí i na prostorovém rozlišení, četnosti snímků
          a hranici, od které se buňka považuje za zasněženou.
        </p>

        <p>
          Výška sněhu říká, jak silná je vrstva od země k povrchu. Vodní hodnota navíc zahrnuje hustotu: dvacet
          centimetrů lehkého čerstvého sněhu může obsahovat méně vody než deset centimetrů starého zhutněného sněhu.
          V terénu se proto odebere svislý válec sněhu o známé ploše, změří se jeho délka a hmotnost a z nich se určí
          výška i vodní hodnota. Ve velkých oblastech vodní hodnotu odhadují
          družicové mikrovlnné přístroje. Jednotnou definici SWE uvádí{" "}
          <SourceLink id="WEB_World_Meteorological_Organiz_WMO_OSCAR_nbsp_nbsp_Details_for_Variable_Snow_wa_142b8371">Světová meteorologická organizace</SourceLink>.
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/snow-permafrost/usgs-snow-core-measurement.jpg"
            alt="Odběr svislého válce sněhu kovovou měřicí trubicí na ledovci Sperry v Montaně"
            width={1000}
            height={667}
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption>
            Měření sněhu na ledovci Sperry v americké Montaně. Kovová trubice odebírá válec přes celou sněhovou vrstvu.
            Délka sloupce poskytne výšku sněhu, jeho zvážení množství vody. Jedno místo nereprezentuje celou krajinu;
            sněhový profil se proto opakuje na předem určených bodech trasy. Zdroj:{" "}
            <SourceLink id="WEB_U_S_Geological_Survey_Snow_core_measurement_04ddf039">USGS</SourceLink>, fotografie
            vlády USA, volné dílo.
          </figcaption>
        </figure>

        <h3>Permafrost: teplota a sezónní rozmrzání</h3>
        <p>
          Permafrost je vymezen teplotou, nikoli druhem povrchu. Může být ve zmrzlé rašelině, štěrku i pevné skále a
          může obsahovat mnoho ledu, málo ledu nebo žádný viditelný led. Ve vrtu se proto uvádí teplota v přesné
          hloubce. Pro porovnání více let se často volí hloubka, kde už je roční kolísání menší než přibližně 0,1 °C.
          Tato hloubka se nazývá hloubka nulového ročního kolísání. V mělkém vrtu se naopak sleduje celý průběh
          zamrzání a rozmrzání. <SourceLink id="DOI_10_1038_s41467_018_08240_4">Biskaborn et al., 2019</SourceLink>
        </p>

        <p>
          Tloušťka aktivní vrstvy je největší svislá vzdálenost mezi povrchem a rozhraním, kam v daném roce proniklo
          tání. V zemině se obvykle zjišťuje na konci léta sondou zasouvanou až k tvrdé zmrzlé vrstvě. V kamenité půdě,
          kde sonda neprojde, se používají trubice naplněné kapalinou nebo teplotní čidla v několika hloubkách.
          Opakování na stejné síti bodů omezuje vliv náhodného výběru místa. Protokol sítě{" "}
          <SourceLink id="WEB_National_Snow_and_Ice_Data_C_Circumpolar_Active_Layer_Monitoring_CALM_Program_28cfbc3c">CALM</SourceLink> používá podle lokality
          čtvercové sítě o straně přibližně 100 až 1 000 metrů nebo transekty, tedy trasy s opakovaným měřením ve stejných bodech.
        </p>

        <h2>Historie pozorování</h2>
        <h3>Sníh</h3>
        <p>
          Pravidelné místní záznamy výšky sněhu vznikaly u meteorologických stanic, ale pro vodní zásobu bylo třeba
          měřit také hustotu. James E. Church zavedl roku 1909 na Mount Rose v Nevadě odběr celého sněhového sloupce
          přenosnou trubicí a váhou. Jeho postup se stal základem sněhoměrných tras, na nichž se během zimy opakovaně
          měří stejné body. Historii metody a její rozšíření v západních Spojených státech popisuje{" "}
          <SourceLink id="WEB_nrcs_usda_gov_historie_programu_Snow_Survey_f7dd6c0d">historie programu Snow Survey</SourceLink>{" "}
          americké služby pro ochranu přírodních zdrojů (NRCS).
        </p>

        <p>
          Souvislý obraz celé severní polokoule přinesly meteorologické družice. Americká Národní správa pro oceán
          a atmosféru (NOAA) začala v říjnu 1966
          vytvářet týdenní mapy sněhové pokrývky z viditelných snímků. Zpočátku se kreslily ručně; při převodu do
          digitální podoby odpovídá buňka na 60° severní šířky přibližně 191 kilometrům. Přístroje, podkladové mapy
          i pracovní postup se v dalších desetiletích měnily. Soubor
          Rutgers Global Snow Lab zachoval původní mapy a spojil je s denním systémem Interactive Multisensor Snow and
          Ice Mapping System (IMS), který soustřeďuje údaje z více přístrojů a funguje od roku 1997.
          Do dlouhodobého souboru jeho mapy vstupují od června 1999.
          Podrobný popis vzniku, kontrol a změn publikovali{" "}
          <SourceLink id="DOI_10_5194_essd_7_137_2015">Estilow, Young a Robinson, 2015</SourceLink>.
        </p>

        <p>
          Množství vody ve sněhu začaly nad kontinenty soustavně mapovat pasivní mikrovlnné radiometry. Záznam
          GlobSnow využívá mikrovlnná měření družice Nimbus-7 od roku 1979 a měření navazujících družic. Družicový
          signál se v něm spojuje s výškou sněhu naměřenou stanicemi. Tím vznikají mapy SWE pro nezaledněnou pevninu
          severně od 40° s výjimkou horských oblastí. Starší družice měřila obden, od podzimu 1987 jsou podklady
          denní. Verzi 3 a celý výpočet popsali{" "}
          <SourceLink id="DOI_10_1038_s41597_021_00939_2">Luojus et al., 2021</SourceLink>.
        </p>

        <h3>Permafrost</h3>
        <p>
          Teploty zmrzlé půdy se dlouho měřily v jednotlivých vrtech pro stavby, doly a místní výzkum. Příkladem jsou
          čtyři vrty v Utqiaġviku na Aljašce, v nichž pracovníci laboratoře Naval Arctic Research Laboratory měřili
          teplotu v letech 1950–1961. Americká geologická služba USGS v roce 2025 zveřejnila digitalizované původní
          hodnoty, kalibrační tabulky i opravené teploty. Oprava zahrnuje převod elektrického odporu na teplotu,
          kontrolu v ledové lázni a odstranění zjevných odlehlých hodnot. Skeny původních listů jsou podle popisu
          poskytovány na vyžádání.{" "}
          <SourceLink id="DOI_10_5066_p9wrgci3">USGS: Permafrost ground temperature 1950–1961</SourceLink>
        </p>

        <p>
          Mezinárodně srovnatelné sledování aktivní vrstvy začalo vznikat v roce 1991 jako program CALM. Jeho smyslem
          bylo měřit každoročně stejné body stejným postupem a uchovat i údaje o vegetaci, půdě a poloze. Druhou část
          systému tvoří vrty s teplotními čidly. Obě větve byly spojeny v síti Global Terrestrial Network for Permafrost,
          která spravuje údaje o teplotě permafrostu a tloušťce aktivní vrstvy. Vývoj sítě shrnují{" "}
          <SourceLink id="DOI_10_5194_essd_7_245_2015">Biskaborn et al., 2015</SourceLink> a{" "}
          <SourceLink id="DOI_10_1080_1088937x_2021_1988001">Nelson, Shiklomanov a Nyland, 2021</SourceLink>.
        </p>

        <p>
          Mezinárodní polární rok 2007–2009 rozšířil počet vrtů a sjednotil část jejich odečtů. Právě roky 2007–2016
          proto umožnily jednotné globální vyhodnocení: autoři shromáždili údaje ze 154 vrtů a pro výpočet trendu
          vybrali 123 dostatečně dlouhých záznamů. Některé místní
          záznamy jsou mnohem delší: například soubor severoaljašských vrtů zahrnuje měření od roku 1973.{" "}
          <SourceLink id="DOI_10_5194_essd_6_201_2014">Clow, 2014</SourceLink> a{" "}
          <SourceLink id="DOI_10_1038_s41467_018_08240_4">Biskaborn et al., 2019</SourceLink>
        </p>

        <h2>Jak vzniká zveřejněný záznam</h2>
        <h3>Mapa rozsahu sněhu</h3>
        <p>
          Viditelné a blízké infračervené snímky rozeznávají sníh podle toho, jak odráží různé vlnové délky světla.
          Novější systém IMS dává analytikovi vedle několika družic také mikrovlnná data, hlášení stanic a předchozí
          mapu. Analytik označí buňky se sněhem a ledem a výslednou mapu zkontroluje vůči sousedním dnům. Denní produkt
          je od roku 1997 dostupný v rozlišení přibližně 24 km, od roku 2004 také 4 km a od roku 2014 také 1 km.{" "}
          <SourceLink id="DOI_10_7265_n52r3pmc">U.S. National Ice Center: IMS</SourceLink>.
          Data uchovává Národní středisko pro data o sněhu a ledu (NSIDC).
        </p>

        <p>
          Mraky zakrývají povrch a polární noc omezuje viditelné snímky. Analytik proto používá více zdrojů a někdy
          přenese hranici sněhu z předchozího dne. Les, hory a roztříštěná jarní pokrývka mohou v jedné buňce skrýt
          malé zasněžené plochy. Historická týdenní mapa zachycovala poslední dostupný pohled na povrch během
          týdne, nikoli průměr všech sedmi dnů.
        </p>

        <p>
          Spojení starých a nových map vyžaduje výslovnou kontrolu. Historická buňka se označovala za zasněženou,
          pokud sníh pokrýval alespoň polovinu její pevniny. Autoři dlouhodobého souboru přepočítali jemnější IMS
          na původní hrubou síť a porovnali souběžná měření z června 1997 až května 1999. Nejlepší návaznost vyšla
          při hranici 42 % zasněžených pevninských bodů IMS v hrubé buňce. Od června 1999 používají pondělní mapy
          IMS, aby časově navázali na konec staršího mapovacího týdne. Rozsah sněhu pak získají součtem skutečných
          ploch buněk. Toto sjednocení omezuje skok při změně systému, ale samo neodstraní všechny změny citlivosti
          družicového pozorování. <SourceLink id="DOI_10_5194_essd_7_137_2015">Estilow et al., 2015, oddíl 3</SourceLink>
        </p>

        <h3>Vodní hodnota a hmotnost sněhu</h3>
        <p>
          Pasivní mikrovlnný radiometr měří přirozené záření povrchu na několika frekvencích. Sněhová zrna záření
          rozptylují a rozdíl mezi kanály souvisí s množstvím sněhu. GlobSnow v3 kombinuje kanály kolem 19 a 37 GHz
          se staniční výškou sněhu. Gigahertz vyjadřuje miliardu kmitů za sekundu. Model nejprve přizpůsobí velikost
          zrn tak, aby co nejlépe vysvětlil záření a naměřenou výšku; nejde o přímé měření jednotlivých zrn.
          Potom odhadne SWE v buňkách o rozměru 25 × 25 km. Používá přitom stálou hustotu sněhu 240 kg/m³.
          U mokrého sněhu mikrovlnný odhad nefunguje a výpočet se opírá pouze o výšku dopočítanou mezi stanicemi.
          Součet SWE násobené plochou buněk dává hmotnost sněhu.{" "}
          <SourceLink id="DOI_10_1038_s41597_021_00939_2">Luojus et al., 2021, popis algoritmu a ověření</SourceLink>
        </p>

        <p>
          Denní mapy se ověřovaly pomocí nezávislých sněhoměrných tras z Kanady, Finska a Ruska. Pro roky
          1980–2016 vyšla chyba označovaná RMSE 52,6 mm SWE; u hodnot pod 150 mm činila 32,7 mm. RMSE je odmocnina
          průměru čtverců rozdílů od kontrolních měření: vyjadřuje velikost odchylek a větším chybám dává větší váhu.
          Hluboký sníh bývá podhodnocen, protože mikrovlnný signál postupně přestává růst. Hustý les mění záření
          a horské oblasti se kvůli složitému terénu a nedostatku stanic vynechávají.
        </p>

        <p>
          Měsíční produkt navíc obsahuje variantu opravenou podle sněhoměrných tras. Tyto trasy pak už nemohou
          současně sloužit jako nezávislý důkaz přesnosti téže opravy. Oprava je pro daný kalendářní měsíc stejná
          ve všech letech a je dostupná pro leden až květen. Čísla z ověření denních map proto nelze vydávat za
          nezávislé ověření opravené měsíční hmotnosti. Omezení výslovně rozebírají{" "}
          <SourceLink id="DOI_10_1038_s41597_021_00939_2">Luojus et al., 2021, oddíly Technical Validation a Usage Notes</SourceLink>.
        </p>

        <h3>Teplota ve vrtu</h3>
        <p>
          Do vrtu se spustí kabel s elektrickými teploměry v přesně změřených hloubkách. V některých vrtech zůstává
          kabel trvale a zapisovač ukládá hodnoty několikrát denně; jinde se přenosná sonda spouští při pravidelné
          návštěvě. Po vrtání je třeba počkat, než se teplota okolní horniny vrátí k původnímu stavu. Zveřejněný údaj
          musí uvádět hloubku čidla, datum, kalibraci a odhad nejistoty. Čidlo obvykle měří elektrický odpor,
          který se převádí na teplotu pomocí kalibrace. Clow popisuje porovnání každého přístroje s referenčním
          platinovým teploměrem v řízené lázni i změnu převodního výpočtu po modernizaci laboratoře v 90. letech.
          U starších aljašských vrtů také upozorňuje, že zveřejněná teplota ještě obsahuje zbytkový vliv vrtání.{" "}
          <SourceLink id="DOI_10_5194_essd_6_201_2014">Clow, 2014, oddíly 1 a 2.2.2</SourceLink>
        </p>

        <p>
          Pro dlouhodobé porovnání se používá roční průměr v hloubce, kde je sezónní kolísání malé. Jednotlivé vrty
          mají odlišnou hloubku, a proto Biskaborn et al. vybírali čidlo nejblíže hloubce s ročním kolísáním nejvýše
          0,1 °C; prostřední hodnota těchto hloubek byla 12 metrů. V každém vrtu pak porovnávali stále stejnou hloubku. Pro trend
          požadovali nejméně pět ročních průměrů, alespoň jeden z let 2007–2009 a jeden z let 2015–2016.
          Kratší záznamy někdy prodloužili vypočteným trendem o jeden až tři roky. Blízké vrty seskupili,
          zohlednili kvalitu záznamu a deset geografických oblastí vážili podle jejich plochy permafrostu.{" "}
          <SourceLink id="DOI_10_1038_s41467_018_08240_4">Biskaborn et al., 2019, metody</SourceLink>
        </p>

        <p>
          Kalibrace určuje přesnost jednotlivé teploty, stálost přístroje přesnost její změny. V globálním souboru
          uváděli autoři přesnost čidel od 0,01 do 0,25 °C. Stálá kalibrační odchylka se při rozdílu dvou teplot
          odečte, měnící se chyba čidla však může trend zkreslit. Přenosné sondy lze znovu kontrolovat v lázni;
          čidla trvale zamrzlá ve vrtu se kontrolují hůře a podezřelá měření se vyřazují.{" "}
          <SourceLink id="DOI_10_1038_s41467_018_08240_4">Biskaborn et al., 2019, kontrola kvality</SourceLink>
        </p>

        <h3>Hloubka aktivní vrstvy</h3>
        <p>
          Mechanická sonda se na konci období tání zatlačí svisle do půdy, dokud nenarazí na zmrzlé rozhraní. Odečtená
          vzdálenost se zapíše v každém bodu sítě a z bodů se vypočítá průměr i rozpětí. Pokud tání pokračuje po dni
          návštěvy, jednorázové měření může roční maximum podhodnotit. Teplotní čidla nebo mrazové trubice naopak
          umožňují určit okamžik a hloubku maxima během celé sezóny, ale nemusí měřit přesně stejný objem půdy jako
          sonda. V běžné síti 100 × 100 metrů se měří 121 bodů a v každém se vpich dvakrát až třikrát opakuje.
          Přesnost jednotlivého měření sondou je přibližně 2 cm; průměrování více bodů omezuje náhodné rozdíly,
          neodstraní však společnou chybu způsobenou například příliš časnou návštěvou.{" "}
          <SourceLink id="DOI_10_1038_s43247_026_03824_1">Streletskiy et al., 2026, terénní metody</SourceLink>
        </p>

        <p>
          Sonda měří vzdálenost od současného povrchu. Pokud podzemní led taje a terén sesedá, může se rozhraní
          rozmrzání posouvat dolů, aniž se naměřená vzdálenost od klesajícího povrchu výrazně zvětší. Na vybraných
          místech se proto současně geodeticky měří výška povrchu vůči stálému bodu. Tak lze odlišit tloušťku
          aktivní vrstvy od skutečného prohlubování tání vůči původnímu terénu.{" "}
          <SourceLink id="DOI_10_1080_1088937x_2021_1988001">Nelson et al., 2021, měření sesedání</SourceLink>
        </p>

        <p>
          Místa se výrazně liší půdou, sněhem, vegetací, vodou i ledem v podloží. Změna průměru vybrané sítě vrtů nebo
          sond proto popisuje tato monitorovací místa, nikoli každý metr arktické pevniny. Síť CALM uchovává jednotlivé
          body i souhrnné hodnoty, aby bylo možné rozdíl mezi prostorovou proměnlivostí a změnou v čase znovu
          zkontrolovat. <SourceLink id="WEB_International_Permafrost_Ass_Circumpolar_Active_Layer_Monitoring_Network_CALM_34543ac5">International Permafrost Association: CALM</SourceLink>
        </p>

        <h2>Zveřejňovaná data</h2>
        <div className="article-data-list">
          <section className="article-data-item">
            <h3>NOAA Climate Data Record of Northern Hemisphere Snow Cover Extent</h3>
            <p>
              Týdenní mapy od 4. října 1966 a z nich odvozené měsíční hodnoty. Starší část vychází z ručně
              interpretovaných družicových map, novější z pondělních analýz IMS. V letech 1968, 1969 a 1971
              dohromady chybí devět měsíců. Název CDR označuje dlouhodobý klimatický datový záznam.
              Data, dokumentace i verze jsou veřejné.
            </p>
            <p>
              <SourceLink id="WEB_NOAA_Snow_Cover_Extent_Northern_Hemisphere_CDR_85362472">Popis produktu</SourceLink>{" · "}
              <SourceLink id="DOI_10_7289_v5n014g9">Data ke stažení a trvalý identifikátor</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>NOAA Interactive Multisensor Snow and Ice Mapping System</h3>
            <p>
              Denní mapy sněhu a ledu severní polokoule od února 1997. Produkt kombinuje družicové snímky, mikrovlnná
              měření, hlášení stanic a ruční kontrolu. K dispozici jsou mřížky o velikosti 24, 4 a 1 km podle období.
            </p>
            <p>
              <SourceLink id="WEB_National_Snow_and_Ice_Data_C_IMS_Daily_Northern_Hemisphere_Snow_and_Ice_Analy_254b6e7e">Popis a metodika IMS</SourceLink>{" · "}
              <SourceLink id="DOI_10_7265_n52r3pmc">Archiv NSIDC a soubory ke stažení</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>GlobSnow v3</h3>
            <p>
              Produkt popsaný studií pokrývá roky 1979–2018 na nezaledněné pevnině severně od 40° mimo
              horské oblasti. Odkazovaný archiv PANGAEA poskytuje měsíční mapy pro roky 1980–2018 a jejich
              opravenou variantu pro leden až květen. Denní mapy jsou odlišný výstup; jejich archiv odkazuje
              metodická studie Luojuse et al.
            </p>
            <p>
              <SourceLink id="DOI_10_1594_pangaea_911944">Data v úložišti PANGAEA</SourceLink>{" · "}
              <SourceLink id="WEB_GitHub_GitHub_fmidev_GlobSnow3_0_1859ddbe">Zdrojový kód zpracování</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>ESA Snow Climate Change Initiative v3.1</h3>
            <p>
              Klimatická datová iniciativa (Climate Change Initiative, CCI) Evropské kosmické agentury (ESA)
              poskytuje mapy vodní hodnoty sněhu od ledna 1979 do května 2022 vytvořené z pasivních mikrovlnných měření a
              staniční výšky sněhu. Před podzimem 1987 vznikají obden, potom denně, převážně v zimní části roku.
              Na rozdíl od GlobSnow v3 používá verze 3.1 hustotu proměnlivou v prostoru i čase.
              Jde o jeden z podkladů dlouhodobého porovnání v Arctic Report Card 2025, nikoli o měření roku 2025.
            </p>
            <p>
              <SourceLink id="DOI_10_5285_9d9bfc488ec54b1297eca2c9662f9c81">Data ke stažení z CEDA Archive</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>Global Terrestrial Network for Permafrost</h3>
            <p>
              Mezinárodní databáze teploty permafrostu a tloušťky aktivní vrstvy. Portál umožňuje vybrat stanici,
              zobrazit její metadata a stáhnout dostupná pozorování. Pokrytí a délka záznamu se mezi místy liší.
            </p>
            <p>
              <SourceLink id="WEB_International_Permafrost_Ass_Global_Terrestrial_Network_for_Permafrost_GTN_P_f5ca4a29">Datový portál GTN-P</SourceLink>{" · "}
              <SourceLink id="DOI_10_1594_pangaea_884711">Vrty použité v globálním vyhodnocení 2007–2016</SourceLink>{" · "}
              <SourceLink id="DOI_10_1594_pangaea_842821">Archiv metadat GTN-P</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>Circumpolar Active Layer Monitoring</h3>
            <p>
              Síť od roku 1991 soustřeďuje měření největší roční hloubky rozmrzání. Katalog NSIDC odkazuje na
              provozovatele dat; skutečné pokrytí je nutné kontrolovat pro každou lokalitu. Ke studii z roku 2026
              je zveřejněn také doprovodný soubor CSV: 3 500 řádků pro 140 kódů lokalit a roky 2000–2024, včetně
              prázdných hodnot. Je to výběr pro grafy a mapy, nikoli úplný export všech 156 míst analyzovaných studií.
              Sloupec ALT udává tloušťku aktivní vrstvy v centimetrech, TREND její změnu v centimetrech za rok
              a METHOD_PLAIN použitou měřicí metodu.
            </p>
            <p>
              <SourceLink id="WEB_National_Snow_and_Ice_Data_C_Circumpolar_Active_Layer_Monitoring_CALM_Program_28cfbc3c">Katalog CALM v NSIDC</SourceLink>{" · "}
              <SourceLink id="WEB_International_Permafrost_Ass_Circumpolar_Active_Layer_Monitoring_Network_CALM_34543ac5">Popis monitorovací sítě</SourceLink>{" · "}
              <SourceLink id="DOI_10_6084_m9_figshare_32885756">Doprovodná data studie 2026, verze 1</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>ESA Permafrost Climate Change Initiative v5.0</h3>
            <p>
              Roční mapy modelované teploty půdy, tloušťky aktivní vrstvy a podílu plochy s permafrostem v buňce
              pro pevninu severně od 30° v letech 1997–2023, v rozlišení 1 km. Fyzikální model CryoGrid počítá
              teplotní poměry v půdě. Pro roky 2003–2023 využívá družicovou teplotu povrchu a meteorologické údaje
              ERA5, které spojují měření s modelem počasí. Starší část 1997–2002 vychází z ERA5 a je opravena podle
              pozdějšího společného období. Jde o plošný modelový odhad, nikoli přímé měření teploty v každé buňce.
            </p>
            <p>
              <SourceLink id="DOI_10_5285_5675b0be944f45a8af0e7ddbeb47a011">Teplota půdy</SourceLink>{" · "}
              <SourceLink id="DOI_10_5285_a6fbedd8ee5b472c8e84e55f746c1704">Aktivní vrstva</SourceLink>{" · "}
              <SourceLink id="DOI_10_5285_d235665772ec4b558e9a89ac85595e71">Rozsah permafrostu</SourceLink>
            </p>
          </section>
        </div>

        <h2>Co lze mezi soubory porovnávat</h2>
        <p>
          Plocha sněhu a jeho hmotnost odpovídají na rozdílné otázky. Velká plocha s tenkým sněhem může obsahovat méně
          vody než menší plocha s hlubokým a hustým sněhem. V zimě může být téměř celé sledované území zasněžené a
          rozdíly se projeví hlavně v SWE. Na jaře se naopak rychle mění hranice sněhu a plocha je citlivá na okamžik
          tání. Graf rozsahu proto nelze přepočítat na hmotnost bez dalších měření.
        </p>

        <p>
          Dlouhý soubor NOAA/Rutgers zachovává historické mapy vytvořené různými družicemi a postupy. To je jeho
          přednost i omezení. Elias Chereque et al. v roce 2025 zjistili, že rostoucí citlivost rozpoznávání sněhu
          vytvořila umělé přírůstky v období nástupu sněhu, zejména od září do listopadu. Porovnali záznam s výpočtem
          sněhu řízeným třemi meteorologickými rekonstrukcemi a s nezávislým družicovým souborem japonské agentury
          JAXA. Pokles prahu, od kterého systém sníh rozpozná, zjistili od září do února. Autoři navrhli upravené
          odhady trendů; neznamená to, že byl automaticky opraven celý veřejný archiv NOAA. Na jaře jejich model
          hůře vystihuje tání, takže tato práce sama neověřuje přesnost květnových a červnových trendů níže.{" "}
          <SourceLink id="DOI_10_1126_sciadv_adv7926">Elias Chereque et al., 2025</SourceLink>
        </p>

        <p>
          Také permafrost má dvě odlišné úrovně výsledků. Vrty a sondy jsou přímá místní pozorování. Souvislá mapa ESA
          Permafrost CCI dopočítává prostor mezi nimi fyzikálním modelem a družicovými údaji o povrchu. Mapa umožňuje
          jednotné plošné srovnání, zatímco vrt zachovává skutečně naměřenou teplotu v hloubce. Článek proto označuje
          modelované mapy a přímá pozorování zvlášť.
        </p>

        <p>
          Vrty nejsou rozmístěny rovnoměrně. V databázi z roku 2015 bylo 73 % vrtů mělčích než 25 metrů a velké části
          Sibiře, vysokých hor i Antarktidy měly řídké pokrytí. Některé vrty navíc začínají pozdě nebo mají mezery.
          Globální průměr Biskaborna et al. proto používá prostorové vážení a uvádí nejistotu. Novější regionální
          měření, například z Aljašky do roku 2024, lze přidat jako aktuální stav regionu, nikoli jako prodloužení
          stejného globálního průměru za rok 2016.{" "}
          <SourceLink id="DOI_10_5194_essd_7_245_2015">Biskaborn et al., 2015</SourceLink>
        </p>

        <h2 id="pozorovani">Pozorování</h2>
        <h3>Jarní rozsah sněhu v Arktidě</h3>
        <p>
          NOAA Arctic Report Card vyhodnocuje zasněženou pevninu severně od 60° severní šířky bez Grónska.
          Z trendu za roky 1967–2025 vychází pokles květnového rozsahu přibližně o 15 %, tedy −2,5 % za desetiletí,
          a červnového o 50 %, tedy −8,7 % za desetiletí. Jde o shrnutí dlouhodobého trendu,
          nikoli prosté odečtení dvou krajních let. Graf pod textem nezobrazuje tato procenta přímo:
          každý měsíc převádí na standardizovanou odchylku vůči období 1991–2020.{" "}
          <SourceLink id="WEB_NOAA_Terrestrial_Snow_Cover_NOAA_Arctic_33ece5d4">NOAA Arctic Report Card 2025</SourceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Posouvatelný graf jarního rozsahu sněhu">
            <Image
              className="article-figure__media"
              src="/media/snow-permafrost/noaa-arctic-snow-extent-1967-2025.png"
              alt="Květnové a červnové odchylky rozsahu sněhu v severoamerické a euroasijské Arktidě v letech 1967 až 2025"
              width={1600}
              height={759}
              sizes="(max-width: 900px) 1200px, 1000px"
              unoptimized
            />
          </div>
          <figcaption>
            Standardizované odchylky rozsahu sněhu v květnu (a) a červnu (b) v letech 1967–2025. Nula je průměr let
            1991–2020 a svislá osa vyjadřuje, kolikrát je rozdíl velký vůči běžnému kolísání v tomto období
            (směrodatné odchylce), nikoli plochu v km². Černá patří
            severoamerické a červená euroasijské části Arktidy; kolečka jsou jednotlivé roky, silné čáry pětileté
            klouzavé průměry a plný bod rok 2025. Zdroj:{" "}
            <SourceLink id="WEB_NOAA_Terrestrial_Snow_Cover_NOAA_Arctic_33ece5d4">Mudryk et al., NOAA Arctic Report Card 2025, obr. 1</SourceLink>;
            převzato bez úprav podle <SourceLink id="WEB_NOAA_Using_Content_FAQ">podmínek použití obsahu NOAA</SourceLink>.
          </figcaption>
        </figure>

        <p>
          Doba tání se v téže zprávě porovnává z týdenních map. V letech 2010–2024 začínalo květnové a červnové tání
          v severoamerické i euroasijské části Arktidy přibližně o jeden až dva týdny dříve než v letech 1967–1981.
          Jde o rozdíl mezi dvěma určenými obdobími, nikoli o údaj, že se každý rok přidává stejný počet dnů.{" "}
          <SourceLink id="DOI_10_25923_cfhv_c239">Mudryk et al., 2025, obr. 2</SourceLink>
        </p>

        <h3>Hmotnost sněhu během jara</h3>
        <p>
          Podle Arctic Report Card byla dubnová hmotnost sněhu v roce 2025 nad průměrem 1991–2020 v severoamerické
          i euroasijské Arktidě. V červnu už rozsah zasněžené plochy klesl pod průměr; z toho však neplyne, že na
          všech zbývajících zasněžených místech bylo málo vody. Z trendů hmotnosti za období 1981–2025 vychází
          dubnový pokles přibližně o 3 %, který není statisticky průkazný; květnový činí 13 % a červnový 33 %.{" "}
          <SourceLink id="DOI_10_25923_cfhv_c239">Mudryk et al., 2025</SourceLink>
        </p>

        <p>
          Zpráva porovnává čtyři datové produkty: Snow CCI, meteorologické rekonstrukce MERRA-2 a ERA5-Land
          a sněhový model Crocus řízený údaji ERA5. Jejich shoda není shodou čtyř zcela nezávislých měření:
          některé sdílejí meteorologické vstupy a liší se i délkou dostupného záznamu. Snow CCI v3.1 například
          končí rokem 2022. Rozpětí dostupných produktů ukazuje rozdíly postupů, ale nezachytí chybu společnou
          jejich vstupům.{" "}
          <SourceLink id="DOI_10_25923_cfhv_c239">Mudryk et al., 2025, oddíl Methods and data</SourceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Posouvatelný graf dubnové hmotnosti sněhu">
            <Image
              className="article-figure__media"
              src="/media/snow-permafrost/noaa-arctic-snow-mass-1981-2025.png"
              alt="Dubnové odchylky hmotnosti sněhu v severoamerické a euroasijské Arktidě v letech 1981 až 2025"
              width={1500}
              height={1500}
              sizes="(max-width: 900px) 1100px, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Jediný panel porovnává dubnovou hmotnost sněhu v severoamerické (černá) a euroasijské (červená) Arktidě
            v letech 1981–2025. Svislá osa je standardizovaná odchylka od průměru 1991–2020, definovaná u předchozího
            grafu. Kolečka jsou roční hodnoty, silné čáry pětileté průměry a barevná pásma rozpětí dostupných
            datových produktů, nikoli úplný interval nejistoty. Plný bod označuje rok 2025. Graf ukazuje
            duben; květnová a červnová procenta v textu pocházejí z odděleného měsíčního vyhodnocení stejné zprávy.
            Zdroj: <SourceLink id="WEB_NOAA_Terrestrial_Snow_Cover_NOAA_Arctic_33ece5d4">Mudryk et al., NOAA Arctic Report Card 2025, obr. 4</SourceLink>;
            převzato bez úprav podle <SourceLink id="WEB_NOAA_Using_Content_FAQ">podmínek NOAA</SourceLink>.
          </figcaption>
        </figure>

        <p>
          GlobSnow vyjadřuje výsledek také jako hmotnost. Na nezaledněné pevnině severně od 40° mimo hory dosahovala v
          letech 1980–2018 průměrná roční nejvyšší hmotnost sněhu 3 062 ± 35 Gt. Maximum měsíčních hodnot připadá
          na březen. Gigatuna (Gt)
          je miliarda tun. Na Severní Ameriku připadalo
          1 128 ± 31 Gt a na Eurasii 1 934 ± 35 Gt. V březnu klesala severoamerická hmotnost tempem −46 ± 42 Gt za
          desetiletí, zatímco euroasijská změna byla vzhledem k nejistotě zanedbatelná. Značka ± zachovává nejistoty
          uvedené autory. Výsledky opraveného měsíčního produktu nezahrnují hory a popisují jiné území a období než
          Arctic Report Card.{" "}
          <SourceLink id="DOI_10_1038_s41597_021_00939_2">Luojus et al., 2021</SourceLink>
        </p>

        <h3>Teplota permafrostu ve vrtech</h3>
        <p>
          Z celkem 154 vrtů použili Biskaborn et al. pro trend 123 míst. Prostorově vážené tempo oteplování
          za období 2007–2016 vyšlo 0,29 ± 0,12 °C za desetiletí. Jde o sklon přímky proložené ročními teplotami
          a přepočtený na deset let, nikoli o prostý rozdíl prvního a posledního měření. Číslo za ± zde vyjadřuje
          polovinu 95% intervalu spolehlivosti vypočteného odhadu. Tento interval nenahrazuje chybějící pozorování
          v málo sledovaných oblastech.
        </p>

        <p>
          V souvislém arktickém permafrostu, který zabírá více než 90 % plochy daného území, vyšlo oteplování
          0,39 ± 0,15 °C za desetiletí. V oblastech s méně souvislým permafrostem činilo 0,20 ± 0,10 °C a v horách
          0,19 ± 0,05 °C za desetiletí. Pro Antarktidu je záznam kratší a pokrytí řídké; autoři tam rozdíl teplot
          svým statistickým testem nepotvrdili. V pěti vrtech během sledování teplota v hloubce 10 metrů přesáhla
          0 °C. Takové měření dokládá změnu v dané hloubce, nikoli rozmrznutí celého tělesa permafrostu.{" "}
          <SourceLink id="DOI_10_1038_s41467_018_08240_4">Biskaborn et al., 2019</SourceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Posouvatelná globální mapa teploty permafrostu">
            <Image
              className="article-figure__media"
              src="/media/snow-permafrost/biskaborn-global-permafrost-2007-2016.png"
              alt="Globální mapy teploty permafrostu a její změny ve vrtech mezi lety 2007 a 2016"
              width={2002}
              height={1382}
              sizes="(max-width: 900px) 1300px, 1000px"
              unoptimized
            />
          </div>
          <figcaption>
            Měření sítě GTN-P. Mapy (a) a (b) ukazují průměrnou roční teplotu půdy v letech 2014–2016 na severní
            polokouli a v Antarktidě ve 129 vrtech; barvu hodnoty udává čtverec u každého vrtu. Mapy (c) a (d)
            ukazují trend ze 123 vrtů za období 2007–2016 v °C za desetiletí; barvu změny udává kolečko.
            Modré pozadí vyznačuje souvislý a fialové méně souvislý
            permafrost, nikoli teplotu naměřenou ve vrtu. Zdroj:{" "}
            <SourceLink id="DOI_10_1038_s41467_018_08240_4">Biskaborn et al., 2019, obr. 2</SourceLink>,
            licence <SourceLink id="WEB_Creative_Commons_Deed_Attribution_4_0_International_Creative_Comm_f3dd853d">CC BY 4.0</SourceLink>.
            Mapový podklad World Borders má podle původního popisku licenci CC BY-SA 3.0. Obrázek převzat bez úprav.
          </figcaption>
        </figure>

        <h3>Novější regionální měření a aktivní vrstva</h3>
        <p>
          Aljašské vrty pokračují za konec globálního vyhodnocení. V roce 2024 zaznamenalo 9 z 20 dlouhodobě
          sledovaných míst nejvyšší teplotu za celou dobu svého měření. Ve studeném permafrostu severní Aljašky se teplota v
          posledních čtyřech desetiletích zvyšovala o 0,3 až 0,7 °C za desetiletí; v teplejším permafrostu vnitrozemí o
          0,02 až 0,3 °C za desetiletí. Jde o regionální měření v hloubce 20 metrů na severu a 15 metrů ve vnitrozemí,
          nikoli o novou globální hodnotu.{" "}
          <SourceLink id="WEB_NOAA_Arctic_Terrestrial_Carbon_Cycling_NOAA_Arctic_4138f338">NOAA Arctic Report Card 2024</SourceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Posouvatelná mapa a graf aljašských vrtů">
            <Image
              className="article-figure__media"
              src="/media/snow-permafrost/noaa-alaska-permafrost-2024.jpg"
              alt="Mapa aljašských vrtů a grafy teplot permafrostu v severní Aljašce a vnitrozemí do roku 2024"
              width={1600}
              height={2249}
              sizes="(max-width: 900px) 1100px, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Nahoře jsou polohy dlouhodobých vrtů na Aljašce: žluté trojúhelníky označují sever, oranžové vnitrozemí.
            Barvy podkladu rozlišují, jak souvisle je permafrost v krajině zastoupen. Horní část grafu pod mapou
            ukazuje průměrnou roční teplotu v hloubce 15 m ve vnitrozemí (Interior), dolní část v hloubce 20 m
            na severu (North Slope); každá barva křivky patří jednomu vrtu. Vodorovná osa
            zachycuje roky přibližně 1978–2024 a svislá teplotu ve °C. Zápornější hodnota znamená chladnější půdu. Různý
            začátek křivek ukazuje, že vrty nemají shodně dlouhý záznam. Zdroj:{" "}
            <SourceLink id="WEB_NOAA_Arctic_Terrestrial_Carbon_Cycling_NOAA_Arctic_4138f338">NOAA Arctic Report Card 2024</SourceLink>;
            graf připravila Christina Shintani. Převzato bez úprav podle{" "}
            <SourceLink id="WEB_NOAA_Using_Content_FAQ">podmínek NOAA</SourceLink>.
          </figcaption>
        </figure>

        <p>
          Aktivní vrstva se mezi místy výrazně liší. Strand et al. vyhodnotili roky 2000–2018 a pro pět severských
          lokalit ve Švédsku, Grónsku a na Špicberkách zjistili průměrný trend 0,5 cm za rok. Často uváděných
          0,8 cm za rok z jejich širšího arktického srovnání je průměr pouze 37 lokalit se statisticky průkazným
          trendem. Není to průměr celé sítě CALM: místa bez průkazného trendu do tohoto čísla nevstupují.{" "}
          <SourceLink id="DOI_10_1002_ppp_2088">Strand et al., 2021</SourceLink>
        </p>

        <p>
          Novější <SourceLink id="DOI_10_1038_s43247_026_03824_1">studie Streletského a kolegů z roku 2026</SourceLink>{" "}
          analyzuje období 2000–2024. Z 316 registrovaných míst vybrala 156 s alespoň deseti roky měření a návštěvou
          nejméně jednou v letech 2019–2024; vyloučila místa narušená například požárem nebo se vznikající trvale
          nezamrzlou vrstvou. Statisticky průkazné zvětšení aktivní vrstvy zjistila u 55 % arktických a 38 %
          antarktických míst, v evropských a asijských vysokých horách u více než 90 %. Jde o podíly sledovaných
          lokalit, nikoli procenta rozlohy permafrostu. Prostorové mezery přetrvávají a po roce 2022 výrazně ubylo
          hlášení z Ruska. Také regionální průměry této práce zahrnují jen statisticky průkazné trendy, což je
          třeba při srovnání čísel zachovat.
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            Na arktické pevnině severně od 60° bez Grónska odpovídá trend za roky 1967–2025 zmenšení květnového
            rozsahu sněhu přibližně o 15 % a červnového o 50 %. Jarní tání v letech 2010–2024 začínalo přibližně o jeden až dva týdny dříve než
            v letech 1967–1981. Mezi roky 1981 a 2025 klesla květnová hmotnost sněhu o 13 % a červnová o 33 %.
            Teplota permafrostu ve sledované globální síti rostla v období 2007–2016 průměrným tempem 0,29 °C
            za desetiletí. V roce 2024 dosáhlo 9 z 20 dlouhodobě sledovaných míst na Aljašce nejvyšší teploty svého
            záznamu. Vyhodnocení aktivní vrstvy za roky 2000–2024 zjistilo její průkazné zvětšení u 55 %
            sledovaných arktických a 38 % antarktických lokalit, v evropských a asijských vysokých horách u více
            než 90 % míst.
          </p>
        </div>

        <h2>Prameny a data</h2>
        <div className="article-source-groups">
          <section>
            <h3>Sněhová pokrývka</h3>
            <ul>
              <li><SourceLink id="DOI_10_5194_essd_7_137_2015">Estilow et al., 2015: A long-term Northern Hemisphere snow cover extent data record</SourceLink></li>
              <li><SourceLink id="DOI_10_1038_s41597_021_00939_2">Luojus et al., 2021: GlobSnow v3.0 Northern Hemisphere snow water equivalent dataset</SourceLink></li>
              <li><SourceLink id="DOI_10_1126_sciadv_adv7926">Elias Chereque et al., 2025: Determining the cause of inconsistent onset-season trends in the Northern Hemisphere snow cover extent record</SourceLink></li>
              <li><SourceLink id="DOI_10_25923_cfhv_c239">Mudryk et al., 2025: Terrestrial Snow Cover, NOAA Arctic Report Card</SourceLink></li>
            </ul>
          </section>

          <section>
            <h3>Permafrost</h3>
            <ul>
              <li><SourceLink id="DOI_10_5194_essd_7_245_2015">Biskaborn et al., 2015: The new database of the Global Terrestrial Network for Permafrost</SourceLink></li>
              <li><SourceLink id="DOI_10_1038_s41467_018_08240_4">Biskaborn et al., 2019: Permafrost is warming at a global scale</SourceLink></li>
              <li><SourceLink id="DOI_10_1080_1088937x_2021_1988001">Nelson et al., 2021: Cool, CALM, collected: the Circumpolar Active Layer Monitoring program and network</SourceLink></li>
              <li><SourceLink id="DOI_10_1002_ppp_2088">Strand et al., 2021: Active layer thickening and controls on interannual variability in the Nordic Arctic compared to the circum-Arctic</SourceLink></li>
              <li><SourceLink id="DOI_10_5194_essd_6_201_2014">Clow, 2014: Temperature data from deep boreholes in arctic Alaska</SourceLink></li>
              <li><SourceLink id="DOI_10_1038_s43247_026_03824_1">Streletskiy et al., 2026: Long-term monitoring of active layer thickness confirms global permafrost degradation</SourceLink></li>
              <li><SourceLink id="WEB_NOAA_Arctic_Terrestrial_Carbon_Cycling_NOAA_Arctic_4138f338">NOAA Arctic Report Card 2024: permafrost observations in Alaska</SourceLink></li>
            </ul>
          </section>

          <section>
            <h3>Datové portály</h3>
            <ul>
              <li><SourceLink id="DOI_10_7289_v5n014g9">NOAA/Rutgers Snow Cover Extent CDR</SourceLink></li>
              <li><SourceLink id="DOI_10_1594_pangaea_911944">GlobSnow v3 SWE</SourceLink></li>
              <li><SourceLink id="DOI_10_5285_9d9bfc488ec54b1297eca2c9662f9c81">ESA Snow CCI v3.1 SWE</SourceLink></li>
              <li><SourceLink id="WEB_International_Permafrost_Ass_Global_Terrestrial_Network_for_Permafrost_GTN_P_f5ca4a29">GTN-P: teplota permafrostu a aktivní vrstva</SourceLink></li>
              <li><SourceLink id="DOI_10_1594_pangaea_884711">GTN-P: globální vrtná data 2007–2016</SourceLink></li>
              <li><SourceLink id="WEB_National_Snow_and_Ice_Data_C_Circumpolar_Active_Layer_Monitoring_CALM_Program_28cfbc3c">CALM: Circumpolar Active Layer Monitoring</SourceLink></li>
              <li><SourceLink id="WEB_European_Space_Agency_Permafrost_019b533c">ESA Permafrost CCI</SourceLink></li>
              <li><SourceLink id="DOI_10_6084_m9_figshare_32885756">Streletskiy, 2026: doprovodná data CALM 2000–2024</SourceLink></li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
