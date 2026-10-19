import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import { Equation, InlineMath } from "./Equation";
import example from "../../public/data/methods/thaw-depth/example.json";

const dataPath = "/data/methods/thaw-depth";
const number = (value: number, digits = 2) => value.toLocaleString("cs-CZ", { maximumFractionDigits: digits });

export function ThawDepthArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Permafrost</dt><dd>Půda nebo hornina s teplotou nejvýše 0 °C po dobu alespoň dvou po sobě jdoucích let.</dd></div>
          <div><dt>Aktivní vrstva</dt><dd>Vrstva nad permafrostem, která během roku rozmrzá a znovu zamrzá.</dd></div>
          <div><dt>Rozhraní rozmrzání</dt><dd>Hranice, kam v daném okamžiku proniklo rozmrzání. Její hloubka se během léta mění.</dd></div>
          <div><dt>CALM</dt><dd>Mezinárodní program sledování aktivní vrstvy, anglicky Circumpolar Active Layer Monitoring.</dd></div>
        </dl>
        <p className="article-glossary__note">Sonda měří hloubku od povrchu půdy. Opakování během sezóny ukáže postup rozmrzání, měření výšky povrchu zachytí i sesedání terénu.</p>
      </aside>

      <div className="article-prose">
        <h2>Jak se měří hloubka rozmrzlé půdy</h2>
        <p className="article-prose__intro">
          Měření hloubky sezónního rozmrzání zjišťuje vzdálenost od povrchu půdy k hranici,
          pod kterou půda zůstává zmrzlá. Tuto hranici lze v jemnozrnné vlhké půdě nahmatat
          kovovou sondou. Opakováním měření sledujeme, jak hluboko rozmrzání během léta postupuje.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 4.3.1)</SourceLink>
        </p>
        <p>
          V oblastech s <strong>permafrostem</strong> zůstává část půdy nebo hornin při teplotě
          nejvýše 0 °C alespoň dva roky po sobě. Půdu nad permafrostem, která v létě rozmrzá
          a v zimě znovu zamrzá, nazýváme <strong>aktivní vrstvou</strong>.
          Její tloušťku určuje největší hloubka, do které půda v daném roce rozmrzla.
          Tento vztah mezi sezónním rozmrzáním a aktivní vrstvou vymezuje{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">příručka Světové meteorologické organizace (WMO, 2024), kapitola 4</SourceLink>.
        </p>

        <h3>Co sonda nahmatá a jak získáme hloubku</h3>
        <p>
          Ve zmrzlé vlhké půdě spojuje led jednotlivá zrna a vytváří pevnou hmotu.
          Když led roztaje, lze půdou snáze protlačit kovovou tyč. Při zasouvání sondy proto
          postupujeme rozmrzlou vrstvou až k místu, kde hrot narazí na výrazný odpor zmrzlé půdy.
          Poloha hrotu tím vyznačí spodní hranici vrstvy, kterou chceme změřit.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 4.3.4.3)</SourceLink>
        </p>
        <p>
          Ruční sonda má pevnou tyč se zúženým hrotem, rukojeť a délkovou stupnici.
          WMO popisuje běžné nerezové provedení dlouhé přibližně 1–1,3 m, s průměrem kolem 1 cm
          a stupnicí po centimetrech. Tyč pomalu zatlačujeme do půdy. Jakmile se zastaví
          na zmrzlé vrstvě, palcem označíme místo, kde tyč prochází povrchem. Sondu vytáhneme
          a na stupnici přečteme vzdálenost mezi hrotem a označeným místem. To je naměřená hloubka.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíly 4.3.4.1 a 4.3.4.3)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/thaw-depth/usgs-frost-probes.jpg"
            width={3648} height={2736} unoptimized
            alt="Pracovníci USGS při sondování půdy v porostu na Aljašce. Výzkumník drží dlouhou kovovou sondu svisle mezi oběma rukama." />
          <figcaption>
            Ruční sondování při výzkumu permafrostu na Aljašce. Kovová tyč v rukou výzkumníka
            slouží k nalezení zmrzlé vrstvy pod povrchem. Foto{" "}
            <SourceLink id="2015_USGS_Frost_Probes_Photo">USGS, EROS Center</SourceLink>,
            přibližně 2015. Volné dílo (Public Domain).
          </figcaption>
        </figure>
        <p>
          Před měřením ověříme, jak údaj stupnice odpovídá skutečné délce. Její značky porovnáme
          s referenčním měřidlem, jehož kalibrace je doloženě navázaná na jednotku metr.
          Zkontrolujeme vzdálenosti od hrotu v celém používaném rozsahu. Taková <strong>kalibrace</strong>{" "}
          určí odchylky stupnice i nejistotu porovnání a umožní odečty opravit.
          <SourceLink id="2012_VIM_Calibration"> Metrologický slovník VIM</SourceLink>{" "}
          ji odlišuje od seřízení, při kterém do přístroje zasahujeme. Po posunutí stupnice
          nebo výměně části sondy proto porovnání zopakujeme.
        </p>
        <p>
          Horním koncem měřené vzdálenosti je povrch půdy. V trávě jej hledáme pod listy,
          u měkkého mechu zachováváme stejný způsob přiložení a stlačení. Je-li nad půdou voda,
          její výšku změříme zvlášť. Díky tomu odečet zahrnuje rozmrzlou půdu až k jejímu povrchu,
          nikoli také vodní sloupec nad ní. Při opakovaných návštěvách používáme stejný postup.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 4.3.4.3)</SourceLink>
        </p>
        <p>
          K určení vzdálenosti patří také směr sondy. WMO popisuje zasunutí kolmo k místnímu
          povrchu, zatímco <SourceLink id="WEB_CALM_Active_Layer_Protocol">protokol programu CALM</SourceLink>{" "}
          používá svislé sondování. Na vodorovné půdě oba směry splývají. Na svahu míří kolmice
          k povrchu šikmo vůči svislici, a měří se tedy jiná vzdálenost. Pro srovnání v čase
          zachováváme zvolený směr a uvádíme jej v popisu měření.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 4.3.4.3)</SourceLink>
        </p>

        <h3>Jak spojíme měření na více místech</h3>
        <p>
          Půda může na jediné ploše rozmrzat do různých hloubek podle porostu, vlhkosti a vlastností
          podloží. Proto sondování opakujeme v síti pevných bodů. Takto pracuje mezinárodní
          program CALM, anglicky <em>Circumpolar Active Layer Monitoring</em>, který sleduje
          aktivní vrstvu na opakovaně navštěvovaných lokalitách. Pravidelná síť rozkládá měření
          po celé sledované ploše a při další návštěvě umožňuje vrátit se na stejná místa.{" "}
          <SourceLink id="WEB_CALM_Active_Layer_Protocol">(CALM: uspořádání sítě)</SourceLink>
        </p>
        <p>
          U každého bodu lze provést dva blízké vpichy a vypočítat jejich průměr.
          WMO doporučuje vzdálenost do 1 m od bodu i mezi oběma vpichy.
          Označíme-li hloubky z těchto vpichů <InlineMath tex={String.raw`d_{i,1}`} /> a{" "}
          <InlineMath tex={String.raw`d_{i,2}`} />, je hodnota bodu <InlineMath tex={String.raw`d_i`} />:{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 4.3.4.3)</SourceLink>
        </p>
        <Equation tex={String.raw`d_i = \frac{d_{i,1}+d_{i,2}}{2}`} />
        <p>
          Písmeno <InlineMath tex="i" /> označuje pořadové číslo bodu, číslice 1 a 2 jeho dva vpichy.
          Všechny hloubky uvádíme v centimetrech. Sečtením a vydělením dvěma dostaneme hodnotu
          uprostřed mezi oběma odečty, která zastupuje bezprostřední okolí daného bodu.
          Stejný postup zopakujeme v dalších bodech sítě.
        </p>
        <p>
          Hodnoty jednotlivých bodů potom spojíme do průměru sítě. Sečteme všechny platné
          hloubky a vydělíme je počtem bodů, ze kterých pocházejí. V následujícím vztahu
          označuje <InlineMath tex="n" /> tento počet a <InlineMath tex={String.raw`d_1`} /> až{" "}
          <InlineMath tex={String.raw`d_n`} /> hloubky v centimetrech:
        </p>
        <Equation tex={String.raw`\text{průměr sítě} = \frac{d_1+d_2+\cdots+d_n}{n}`} />
        <p>
          Každý zahrnutý bod tak dostává stejnou váhu. Výsledkem je <strong>průměr měřených bodů sítě</strong>{" "}
          v centimetrech pro danou návštěvu. Jako průměr celé plochy jej lze použít tehdy,
          když body dostatečně zastupují její různé půdy, porosty a vlhkostní podmínky.
          Rozmístění bodů je proto součástí měřicího postupu.{" "}
          <SourceLink id="DOI_10_1080_10889370009377698">(Brown a kol., návrh měřicí sítě)</SourceLink>
        </p>
        <p>
          Vedle průměru popisujeme i rozdíly mezi místy. Nejmenší a největší hodnota vymezují
          naměřené rozpětí. <strong>Směrodatná odchylka</strong> vyjadřuje, jak široce jsou hloubky
          rozptýlené kolem průměru. Má stejnou jednotku jako hloubka a roste s velikostí těchto
          rozdílů. V tomto použití popisuje prostorovou proměnlivost půdy.
        </p>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Postup měření a průměrování hloubek">
            <div><span>1</span><strong>Nahmatat hranici</strong><small>Hrot sondy se zastaví na půdě zpevněné ledem.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Odečíst hloubku</strong><small>Stupnice udává vzdálenost hrotu od povrchu půdy.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Spojit dva vpichy</strong><small>Průměr dvou blízkých odečtů poskytne hodnotu bodu.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Spojit body sítě</strong><small>Platné hodnoty sečteme a vydělíme počtem zahrnutých bodů.</small></div>
          </div>
          <figcaption>
            Sondování v síti se dvěma vpichy na bod. Šipky ukazují postup od kontaktu
            se zmrzlou půdou přes délkový odečet ke dvěma úrovním průměrování.
            Výsledná hloubka se vztahuje k ploše pokryté body a k datu návštěvy.{" "}
            <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 4.3.4)</SourceLink>
          </figcaption>
        </figure>

        <h3>Co porovnáváme mezi roky</h3>
        <p>
          Hloubka rozmrzání během léta obvykle narůstá a maxima dosahuje před podzimním promrzáním.
          Pro tloušťku aktivní vrstvy nás zajímá právě toto maximum. Opakované sondování během
          sezóny ukáže průběh rozmrzání a pomůže určit termín jeho největší hloubky.
          Při dlouhodobém sledování se proto spojuje návrat do stejných bodů s měřením
          ve srovnatelné části sezóny. <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">WMO, oddíly 4.3.3–4.3.5</SourceLink>,
          popisuje také přístroje, které uchovají maximum nebo zaznamenávají průběh mezi návštěvami.
        </p>
        <p>
          V půdě bohaté na led může s rozmrzáním klesat i povrch. Led roztaje a půda sesedne.
          Při příštím sondování pak začínáme měřit z nižšího místa. Chceme-li sledovat,
          kam se posunula samotná hranice rozmrzání, změříme také výšku povrchu vůči pevnému
          výškovému bodu. Od této výšky odečteme svislou hloubku zjištěnou sondou:{" "}
          <SourceLink id="DOI_10_1029_2023jf007262">(O’Neill a kol., metody a výsledky)</SourceLink>
        </p>
        <Equation tex={String.raw`z_{\text{rozhraní}} = z_{\text{povrchu}} - d`} />
        <p>
          Symbol <InlineMath tex={String.raw`z_{\text{povrchu}}`} /> označuje výšku povrchu
          a <InlineMath tex={String.raw`z_{\text{rozhraní}}`} /> výšku spodní hranice rozmrzlé půdy.
          Obě výšky počítáme od stejné pevné reference, kladně vzhůru.
          Hloubka <InlineMath tex="d" /> je kladná směrem dolů, proto ji od výšky povrchu odčítáme.
          Všechny tři veličiny musí mít stejné jednotky a vztahovat se ke stejnému místu a okamžiku.
          Opakováním tohoto měření oddělíme pokles povrchu od posunu rozhraní v podloží.
        </p>

        <h3>Přístroje pro sledování mezi návštěvami</h3>
        <p>
          Největší hloubku rozmrzání dokáže uchovat <strong>mrazová trubice</strong>.
          Tvoří ji vnější trubka pevně ukotvená v permafrostu a vyjímatelná průhledná trubice s vodou
          uvnitř. Voda v ní v zimě zamrzne. Při letním odtávání ledu shora klesá malá skleněná
          kulička a zůstává na rozhraní vody a ledu. Při opětovném zamrznutí uvázne v ledu
          v nejnižší dosažené poloze. Tím uchová údaj i po skončení léta.{" "}
          <SourceLink id="DOI_10_4095_202802">(Nixon a kol., konstrukce měřidla)</SourceLink>
        </p>
        <p>
          <SourceLink id="DOI_10_4095_202802">Nixon a spoluautoři (1995)</SourceLink>{" "}
          popsali kanadské provedení s vnější trubkou o průměru 2,5 cm, ukotvenou přibližně 4 m
          hluboko, a barevnou kuličkou o průměru 3 mm. Polohu kuličky odečítali vůči stálé značce
          při následující letní návštěvě, ještě před novým sezónním maximem. Pak vložili novou kuličku
          odlišné barvy. Pohyblivá objímka spojená s povrchem navíc ryla stopu do vnější trubky.
          Zaznamenávala tak zdvih i sesedání půdy vůči ukotvené opoře.
        </p>
        <p>
          Jinou možností jsou <strong>teplotní čidla</strong> uložená v několika známých hloubkách.
          Průběžný záznam ukáže, jakých teplot půda v každé hloubce během roku dosáhla.
          Pro sledování rozmrzání vybereme nejvyšší roční teplotu každého čidla a hledáme hloubku,
          kde tato maxima přecházejí z kladných do záporných hodnot. Tam podle teplotního měření
          leží největší roční hloubka dosažená teplotou 0 °C.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 4.3.6)</SourceLink>
        </p>
        <p>
          Hledaná hloubka obvykle leží mezi dvěma čidly. Jedno za rok zaznamenalo maximum nad nulou,
          druhé pod nulou. Běžný výpočet předpokládá mezi nimi plynulou změnu teplotního maxima
          po přímce a najde místo, kde tato přímka protíná 0 °C. Tento postup se nazývá
          <strong>přímková interpolace</strong>. WMO uvádí v okolí rozhraní rozestupy čidel
          přibližně 2–20 cm podle podmínek a požadované přesnosti. Bližší čidla zkracují úsek,
          pro který průběh teploty dopočítáváme. Samotný převod elektrického signálu čidla na teplotu
          vysvětluje <Link href="/metody/odporova-termometrie-a-termistory">odporová termometrie</Link>.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 4.3.6)</SourceLink>
        </p>

        <h3>Dlouhodobé sledování aktivní vrstvy</h3>
        <p>
          Spojení těchto postupů rozšířilo jednoduché sondování o záznam dění mezi návštěvami.
          Nixonova zpráva dokumentuje instalace z let 1990–1992, které spojovaly sondy, mrazové trubice,
          pohyb povrchu a automatické teplotní záznamníky. Autoři přitom upravili trubici popsanou
          J. Rossem Mackayem v roce 1973.{" "}
          <SourceLink id="DOI_10_4095_202802">(Nixon a kol., úvod a terénní zkoušky)</SourceLink>
        </p>
        <p>
          Porovnání různých lokalit zase usnadnilo sjednocení měřicích postupů. V programu CALM
          se v 90. letech sjednocovalo rozmístění bodů, termíny měření i ukládání údajů.
          Vývoj protokolu včetně setkání v letech 1995 a 1997 popisují{" "}
          <SourceLink id="DOI_10_1080_10889370009377698">Brown, Hinkel a Nelson (2000)</SourceLink>.
        </p>
        <p>
          Dlouhé řady hloubek ukazují, jak se aktivní vrstva mění mezi roky.
          <SourceLink id="DOI_10_1038_s43247_026_03824_1"> Streletskiy a spoluautoři (2026)</SourceLink>{" "}
          takto analyzovali záznamy CALM z let 2000–2024. Terénní měření poskytla hloubky
          a jejich místní proměnlivost. Autoři pak vybrali dostatečně dlouhé řady, vypočítali
          jejich trendy a porovnali je s klimatickými podmínkami. Spolu s teplotou půdy
          a <Link href="/metody/mereni-vysky-hustoty-a-vodni-hodnoty-snehu">měřením sněhu</Link>{" "}
          pomáhají tyto údaje zkoumat příčiny změn. Výsledky a širší souvislosti shrnuje pozorování{" "}
          <Link href="/pozorovani/snehova-pokryvka-a-permafrost">Sněhová pokrývka a permafrost</Link>.
        </p>

        <h2>Co ovlivňuje přesnost měření</h2>
        <p>
          U sondy rozhoduje rozpoznání zmrzlé půdy a určení povrchu, u celoročního výsledku také
          načasování návštěv a rozmístění bodů. WMO uvádí pro jemnozrnnou půdu s jasnou hranicí
          orientační přesnost ±2 cm. Metody se ověřují také vzájemným porovnáním.
          Na aljašském West Docku například v roce 1998 vyšel průměr sondované sítě 34 cm
          a hloubka z teplotního profilu 33 cm podle{" "}
          <SourceLink id="DOI_10_1080_10889370009377698">Browna a spoluautorů (2000), tabulky 2</SourceLink>.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 4.3.4.4)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Podrobnosti o nejistotách a ověření</summary>
          <h3>Rozpoznání hranice a odečet</h3>
          <p>
            Kámen nebo kořen může sondu zastavit před zmrzlou půdou. Podezřelý vpich proto opakujeme
            poblíž a zaznamenáme překážku i posun. V kamenité půdě mohou rozdíly dosahovat několika
            až desítek centimetrů a ve skalním podloží se sondování nehodí. Délka tyče omezuje dosah,
            delší sondy se hůře zasouvají a vytahují. Zaokrouhlení na centimetry přispívá nejvýše
            půl centimetrem. Ani průměr dvou odečtů zapsaný na půl centimetru tím nezískává takovou
            přesnost. Hodnota ±2 cm v <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">oddílu 4.3.4.3 příručky WMO</SourceLink>{" "}
            platí pro dobře rozpoznatelné rozhraní v jemnozrnné půdě.
          </p>
          <p>
            Při výměně sondy či pozorovatele pomůže souběžné měření odhalit rozdílný tlak,
            stlačování mechu nebo rozpoznávání odporu. Rozhraní lze ověřit i odkrytím půdy,
            výkop však narušuje místo pro další měření. Teplotní metoda vychází z jiného fyzikálního signálu.
            Brownova tabulka uvádí pro West Dock také dvojice 30 a 22 cm v roce 1996 a 28 a 26 cm
            v roce 2000, vždy sonda a teplota. Sondy pokrývaly síť o straně 100 m, teplotní profil jedno místo.
            Rozdíl proto zahrnuje prostorovou proměnlivost i různé vymezení hranice a neurčuje chybu konkrétní sondy.{" "}
            <SourceLink id="DOI_10_1080_10889370009377698">(Brown a kol., tabulka 2)</SourceLink>
          </p>
          <h3>Jiné přístroje a jiná vymezení hranice</h3>
          <p>
            U mrazových trubic uvádí WMO orientační přesnost kolem 2 cm i při milimetrovém odečtu.
            Trubice může měnit tok tepla v půdě, nedostatečné ukotvení dovoluje zdvih přístroje mrazem.
            U teplotních čidel záleží na kalibraci, skutečné hloubce, četnosti záznamu a interpolaci.{" "}
            <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 4.3.5.3)</SourceLink>
          </p>
          <p>
            Teplota 0 °C a mechanicky pevná hranice nemusejí ležet ve stejné hloubce.
            Rozpuštěné soli snižují teplotu mrznutí a část vody v jemných pórech zůstává kapalná i pod nulou.
            Během tání se teplo spotřebovává na změnu ledu ve vodu, takže teplota dlouho zůstává téměř
            stejná. Přesnou polohu hranice pak z teplotního profilu určujeme obtížně.{" "}
            <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíly 4.1 a 4.3.6)</SourceLink>
          </p>
          <p>
            Pokud půda nad permafrostem v zimě nezamrzne úplně, zůstane mezi ním a sezónně promrzající
            půdou trvale nezamrzlá vrstva. Aktivní vrstva pak nesahá až k permafrostu.
            Samotná hloubka rozmrzání také neurčuje teplotu hlubšího podloží, jeho celkovou
            zmrzlou tloušťku ani obsah uhlíku. Tyto veličiny vyžadují další měření.{" "}
            <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíly 4.1 a 4.3.1)</SourceLink>
          </p>
          <h3>Pokrytí plochy a sezóny</h3>
          <p>
            Stejný kalendářní termín nezaručuje zachycení maxima, jehož načasování ovlivňuje počasí,
            sníh a půda.{" "}
            <SourceLink id="WEB_CALM_Active_Layer_Protocol">(CALM: termín měření)</SourceLink>
          </p>
          <p>
            Výpadek zaplavených bodů nenahradí více vpichů v suché části sítě.
            Sousední body mívají podobné podmínky, a nejsou tedy nezávislým vzorkem.
            Rozmístění lokalit CALM zase není rovnoměrným vzorkem veškerého permafrostu.
            <SourceLink id="WEB_CALM_Active_Layer_Protocol"> Protokol CALM</SourceLink>{" "}
            doporučuje umístit trubici tam, kde sondování dříve odpovídalo průměru sítě.
            Shoda tohoto místa s původním průměrem proto sama neověřuje zastoupení celé plochy.
          </p>
          <p>
            V datech z Barrow použitých níže neznáme velikost společné chyby při určení povrchu
            ani odchylku od skutečného ročního maxima. Archiv používá srpnové měření jako roční údaj,
            ale samotný export nedokládá, zda později rozmrzání pokračovalo. Neobsahuje kalibrační list
            ani úplnou bilanci nejistoty návštěvy. Prostorovou směrodatnou odchylku proto nelze
            považovat za nejistotu výsledku. Ani její vydělení odmocninou z počtu bodů by uvedené
            vlivy nezahrnulo. Výpočet z veřejných dat ověřuje zpracování dostupných hodnot.
          </p>
        </details>

        <h2>Příklady z měřicích sítí</h2>
        <h3>Průměrná hloubka v Barrow 18. srpna 1996</h3>
        <p>
          Lokalita U1 Barrow na pobřeží Aljašky má síť o straně 1 km. Body jsou rozmístěné
          po 100 m, takže jich včetně okrajů vzniká 11 × 11, celkem 121.
          <SourceLink id="WEB_GTN_P_Barrow_ALT_dataset_14"> Veřejný soubor GTN-P číslo 14</SourceLink>{" "}
          obsahuje jejich hloubky pro jednotlivé návštěvy. GTN-P je globální síť sledování permafrostu,
          která údaje zveřejňuje spolu s popisem lokality. Ten uvádí dva vpichy u každého bodu
          a jejich zprůměrování. <strong>Samostatné odečty obou vpichů v exportu nejsou.</strong>{" "}
          Náš výpočet tedy začíná zveřejněnými průměry bodů.
        </p>
        <p>
          Vybereme návštěvu z 18. srpna 1996. Ze 121 záznamů dva nemají číselnou hloubku,
          protože se v těchto místech kvůli vodě neměřilo. Pro výpočet zbývá <strong>119 platných hodnot</strong>.
          Tabulka ukazuje prvních pět bodů horní řady sítě zleva doprava. Souřadnice{" "}
          <InlineMath tex="x" /> a <InlineMath tex="y" /> udávají jejich polohu v metrech,
          poslední sloupec obsahuje hloubku v centimetrech.
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" tabIndex={0} aria-label="Pět vstupních bodů z Barrow v srpnu 1996">
            <table>
              <caption>Ukázka zveřejněných vstupů pro 18. srpen 1996</caption>
              <thead><tr><th>ID záznamu</th><th>x <span className="method-data-output__unit">(m)</span></th><th>y <span className="method-data-output__unit">(m)</span></th><th>Hloubka <span className="method-data-output__unit">(cm)</span></th></tr></thead>
              <tbody>{example.result.firstFive.map((row) => (
                <tr key={row.id}><td>{row.id}</td><td>{number(row.xM)}</td><td>{number(row.yM)}</td><td>{number(row.depthCm)}</td></tr>
              ))}</tbody>
            </table>
          </div>
        </div>
        <p>
          Součet všech 119 platných hloubek je <strong>{number(example.result.sumCm)} cm</strong>.
          Vydělíme jej počtem zahrnutých bodů:
        </p>
        <Equation tex={String.raw`\text{průměr sítě} = \frac{4\,236{,}5\,\mathrm{cm}}{119} \doteq 35{,}60\,\mathrm{cm}`} />
        <p>
          Průměrná hloubka rozmrzlé půdy v těchto bodech byla po zaokrouhlení <strong>35,60 cm</strong>.
          Jednotlivé hloubky sahaly od {number(example.result.minCm)} do {number(example.result.maxCm)} cm
          a jejich výběrová směrodatná odchylka byla {number(example.result.sampleSdCm)} cm.
          Tato poslední hodnota popisuje rozdíly mezi body. Na mapě je vidíme jako rozdílné barvy,
          zatímco křížky v pravém dolním rohu označují dvě místa bez měření.
        </p>
        <p>
          Obě prázdná místa zůstávají mimo výpočet. Kdybychom jim místo chybějícího údaje přidělili
          nulu, dělili bychom tentýž součet všemi 121 body. Vyšlo by {number(example.result.incorrectZeroFilledMeanCm)} cm,
          protože by výpočet započítal i dvě nulové hloubky, které nikdo nezměřil.
        </p>
        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Mapa měřených bodů, na malém displeji posuvná do stran">
            <Image className="article-figure__media" src="/media/thaw-depth/barrow-grid.png" width={1728} height={1512} unoptimized
              alt="Síť 11 krát 11 bodů na ploše jednoho kilometru čtverečního. Barva ukazuje hloubku 19 až 68 cm, dva body v pravém dolním rohu nemají měření kvůli vodě." />
          </div>
          <figcaption>
            Hloubka rozmrzání v bodech Barrow U1 dne 18. srpna 1996. Obě osy udávají polohu v síti
            v metrech, barevná stupnice hloubku v centimetrech. Křížky označují dva chybějící údaje.
            Každá barva patří pouze k označenému bodu. Prostor mezi body není dopočítaný.
            Vlastní graf Klimatologie.eu podle
            <SourceLink id="WEB_GTN_P_Barrow_ALT_dataset_14"> dat N. Shiklomanova, CALM a GTN-P</SourceLink>.
            Data i graf jsou dostupné pod licencí CC BY 4.0.
          </figcaption>
        </figure>
        <details className="method-details">
          <summary>Data, kontrola výpočtu a soubory ke stažení</summary>
          <p>
            Používáme export GTN-P stažený 4. října 2026. Jeho metadata uvádějí poslední změnu
            25. června 2026. <a href={`${dataPath}/barrow-gtnp.zip`}>Původní soubor ZIP</a>{" "}
            uchováváme beze změny. Obsahuje CSV s hloubkami a JSON s metadaty.
            <a href={`${dataPath}/barrow-1996.csv`}> Výběr 121 záznamů pro rok 1996</a>{" "}
            zachovává hodnoty a příznaky, pouze je řadí podle souřadnic. CSV používá desetinnou tečku
            a čárku jako oddělovač. Chybějící měření leží na souřadnicích 1 000 a 100 m
            a 1 000 a 0 m, vždy v pořadí <InlineMath tex="x" />, <InlineMath tex="y" />.
          </p>
          <p>
            <a href={`${dataPath}/reproduce.py`}>Skript reproduce.py</a>{" "}
            a <a href={`${dataPath}/example.json`}>popis vstupu, licence a výsledků v example.json</a>{" "}
            uložte vedle souboru ZIP. Příkaz <code>python -B reproduce.py</code> vypočítá výsledky
            v Pythonu 3 bez dalších knihoven. Skript kontroluje otisk SHA-256 archivu, datum,
            identifikátory, souřadnice a příznaky chybějících údajů. Výběrovou směrodatnou odchylku
            počítá se jmenovatelem <InlineMath tex="n-1" />, tedy s počtem platných bodů zmenšeným o jeden.
            <a href={`${dataPath}/plot.py`}> Kód pro vytvoření grafu</a>{" "}
            navíc potřebuje knihovnu Matplotlib.
          </p>
        </details>

        <h3>Prohlubování rozmrzání při sesedání půdy v Kanadě</h3>
        <p>
          <SourceLink id="DOI_10_1029_2023jf007262">O’Neill a spoluautoři (2023)</SourceLink>{" "}
          vyhodnotili údaje z mrazových trubic na 28 kanadských lokalitách se záznamy zasahujícími
          do všech tří desetiletí období 1991–2018. Měřili polohu rozhraní rozmrzání i povrchu
          vůči pevné referenci. Před porovnáním vyřadili období s poškozenými nebo nestabilními přístroji.
        </p>
        <p>
          Mezi průměry let 1991–1999 a 2010–2018 se hranice rozmrzání vůči pevné referenci
          posunula v průměru o 12 cm hlouběji. <strong>Povrch klesl o 7 cm</strong>.
          Tloušťka aktivní vrstvy se proto zvětšila o rozdíl těchto posunů,
          tedy o 12 − 7 = 5 cm. Jde o průměr celého souboru lokalit.
          Společné měření hloubky a výšky povrchu zde odhaluje část postupu tání,
          kterou by samotný odečet od sesedající půdy nezachytil.
        </p>

        <section className="method-conclusion">
          <h2>Co měření ukazuje</h2>
          <p>
            Hloubka sezónního rozmrzání ukazuje, jak hluboko půda na sledovaných místech rozmrzla.
            Opakovaná měření u sezónního maxima umožňují porovnávat tloušťku aktivní vrstvy mezi roky.
            Doplnění výšky povrchu oddělí její změnu od sesedání terénu. Spolu s teplotou půdy
            a stavem sněhu tato měření poskytují podklady pro zkoumání změn permafrostu.
          </p>
        </section>

      </div>
    </article>
  );
}
