import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
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
        <p className="article-glossary__note">Hloubka se vztahuje k určitému povrchu a datu. Pro dlouhodobé srovnání potřebujeme vědět, zda se změnilo i něco z toho.</p>
      </aside>

      <div className="article-prose">
        <h2>Jak hluboko půda během léta rozmrzne</h2>
        <p className="article-prose__intro">
          Hloubku sezónního rozmrzání měříme jako vzdálenost od povrchu půdy k rozhraní,
          pod kterým půda zůstává zmrzlá. V jemnozrnné vlhké půdě lze tuto hranici nahmatat
          kovovou sondou, protože led spojuje půdní částice a brání dalšímu zasunutí.
          Opakované návštěvy nebo trvale instalovaná čidla umožňují sledovat, kam rozmrzání během léta dosáhlo.
        </p>
        <p>
          <strong>Permafrost</strong> je půda či hornina, jejíž teplota zůstává nejvýše 0 °C alespoň dva
          po sobě jdoucí roky. Nad ním se může nacházet <strong>aktivní vrstva</strong>, která každoročně
          rozmrzá a zase zamrzá. Její tloušťku proto zjišťujeme při největším sezónním rozmrznutí.
          Červencový odečet popisuje stav v červenci. K označení za roční maximum potřebuje další oporu.
          Toto rozlišení používá
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> příručka Světové meteorologické organizace
          (WMO, 2024), kapitola 4</SourceLink>.
        </p>
        <p>
          Podrobně projdeme sondování v pravidelné měřicí síti. Potom ho porovnáme s mrazovou trubicí
          a s teplotními čidly. Metoda navazuje na pozorování
          <Link href="/pozorovani/snehova-pokryvka-a-permafrost"> Sněhová pokrývka a permafrost</Link>.
          Sondou zjištěná hloubka sama neurčuje teplotu hlubšího permafrostu, jeho celkovou mocnost
          ani množství uhlíku v rozmrzlé půdě. Pro každou z těchto veličin je potřeba další měření.
        </p>

        <h2>Sonda, rozhraní a místo, od kterého měříme</h2>
        <p>
          Ruční sonda má pevnou kovovou tyč, zúžený hrot, rukojeť a délkovou stupnici.
          WMO popisuje běžné provedení z nerezové oceli dlouhé přibližně 1–1,3 m, o průměru kolem
          1 cm, se stupnicí po centimetrech. Tento rozměr omezuje dosažitelnou hloubku.
          Delší tyče umožňují měřit hlouběji, ale hůře se zasouvají a vytahují. V kamení a skalním
          podloží mechanické sondování často použít nelze.
        </p>
        <p>
          Tyč pomalu zatlačujeme do půdy, až ucítíme zřetelný odpor. Palcem označíme polohu povrchu,
          sondu vytáhneme a přečteme zasunutou délku. Původním pozorováním je odpor proti zasunutí
          a poloha povrchu na stupnici. Za hloubku rozmrzání považujeme odečet teprve tehdy, když máme
          důvod přisoudit odpor zmrzlé půdě. Kámen nebo kořen může tyč zastavit dřív.
          Podezřelý vpich opakujeme v blízkém okolí a zaznamenáme překážku i případný posun místa.
          <SourceLink id="WEB_CALM_Active_Layer_Protocol"> Terénní protokol CALM</SourceLink>{" "}
          popisuje postup, jak při těchto překážkách zachovat dohledatelné umístění měření.
        </p>
        <p>
          Povrch musí mít ve všech návštěvách stejný význam. U mechu záleží na stlačení jeho měkké
          vrstvy, u travního porostu na nalezení povrchu půdy pod listy. Stojící voda se změří zvlášť,
          aby se její výška nepřičetla k tloušťce půdy. WMO doporučuje vést sondu kolmo k místnímu
          povrchu, zatímco protokol CALM popisuje svislé zasunutí. Na svahu to jsou různé vzdálenosti.
          Směr se proto musí uvést a při opakování zachovat. Náš příklad pochází z málo členité pobřežní tundry.
        </p>

        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Od zasunutí sondy k výsledku pro měřicí síť">
            <div><span>1</span><strong>Najít rozhraní</strong><small>Hrot narazí na půdu zpevněnou ledem. Podezřelou překážku ověříme dalším vpichem.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Odečíst hloubku</strong><small>Vzdálenost mezi hrotem a určeným povrchem zapíšeme v centimetrech.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Opakovat v bodě</strong><small>Dva blízké vpichy zprůměrujeme. Uchováme datum, souřadnice a poznámky.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Spojit síť bodů</strong><small>Platné hodnoty spojíme do průměru. Prázdná místa a jejich důvody zůstanou viditelné.</small></div>
          </div>
          <figcaption>
            Schéma sondování v síti se dvěma vpichy na bod. Šipky vedou od mechanického kontaktu
            přes délkový odečet ke dvěma úrovním průměrování. Výsledek stále patří k datu návštěvy.
            Určení ročního maxima vyžaduje vhodné načasování nebo průběžný záznam.
          </figcaption>
        </figure>

        <h2>Měřicí síť a výpočet průměrné hloubky</h2>
        <p>
          Program CALM, anglicky <em>Circumpolar Active Layer Monitoring</em>, sleduje aktivní vrstvu
          na opakovaně navštěvovaných místech. Na lokalitě U1 Barrow na Aljašce pokrývá síť čtverec
          o straně 1 km. Body jsou vzdálené 100 m, takže jich včetně okrajů vzniká 11 × 11, celkem 121.
          <SourceLink id="WEB_GTN_P_Barrow_ALT_dataset_14"> Popis lokality a veřejná data GTN-P</SourceLink>{" "}
          uvádějí dva vpichy u každého bodu a jejich zprůměrování. GTN-P je globální síť sledování permafrostu,
          která tato měření zpřístupňuje spolu s údaji o lokalitě.
        </p>
        <p>
          Pro dva odečty <i>d</i><sub>i,1</sub> a <i>d</i><sub>i,2</sub> v bodě <i>i</i> je jeho hodnota
          <i> d</i><sub>i</sub> jejich součet dělený dvěma. Jsou-li oba odečty zaokrouhlené na centimetry,
          může průměr končit polovinou centimetru. Jemnější zápis tím nezískává přesnost půl centimetru.
          WMO doporučuje oba vpichy provést do vzdálenosti 1 m od bodu a od sebe navzájem.
        </p>
        <p className="article-formula method-equation">
          d<sub>i</sub> = (d<sub>i,1</sub> + d<sub>i,2</sub>) / 2<br />
          průměr sítě = (d<sub>1</sub> + d<sub>2</sub> + … + d<sub>n</sub>) / n
        </p>
        <p>
          Ve druhém vztahu je <i>n</i> počet bodů s platnou hodnotou, všechny hloubky mají stejnou
          jednotku. Každý zahrnutý bod dostává stejnou váhu. Výsledkem je průměr měřených bodů sítě.
          Převod na průměr celé plochy předpokládá, že body dostatečně zastupují její různé půdy,
          porosty a vlhkostní podmínky. Když například vypadávají hlavně zaplavená místa, zbývající
          body nemusí tuto část plochy zastoupit. Četnější vpichy v jednom suchém rohu takový výpadek nenahradí.
        </p>
        <p>
          Hloubka během léta obvykle narůstá a největší hodnoty dosahuje před podzimním promrzáním.
          Načasování ovlivňuje počasí, sníh i vlastnosti půdy. Jedna návštěva ve stejném týdnu každého
          roku usnadňuje porovnání, ale nezaručuje zachycení skutečného maxima. Častější měření
          ukážou sezónní průběh. Mrazová trubice dokáže maximum uchovat i mezi návštěvami.
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO, oddíly 4.3.3–4.3.5</SourceLink>,
          rozlišuje tyto možnosti časového vzorkování.
        </p>

        <h2>Skutečný výpočet: Barrow, 18. srpna 1996</h2>
        <p>
          Z <SourceLink id="WEB_GTN_P_Barrow_ALT_dataset_14">datového souboru GTN-P číslo 14 pro lokalitu
          Barrow, CALM U1</SourceLink>, vybíráme návštěvu z 18. srpna 1996. Používáme export stažený
          4. října 2026, jehož metadata uvádějí poslední změnu 25. června 2026. Obsahuje publikované
          hodnoty jednotlivých bodů. <strong>Samostatné odečty obou vpichů v exportu nejsou.</strong>
          Výpočet proto ověřujeme od již zprůměrovaných bodů, nikoli od původního terénního zápisníku.
        </p>
        <p>
          Vybraný den má 121 záznamů. Dva nemají číselnou hloubku a nesou poznámku, že se kvůli vodě
          neměřilo. Leží na souřadnicích x = 1 000 m, y = 100 m a x = 1 000 m, y = 0 m.
          Zbývá <strong>119 platných hodnot</strong>. Následující tabulka ukazuje prvních pět bodů
          při čtení horního okraje sítě zleva doprava. Celý výběr lze stáhnout pod grafem.
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
          Dělením počtem bodů dostaneme 4 236,5 / 119 = <strong>35,60 cm</strong> po zaokrouhlení.
          Nejmenší hodnota je {number(example.result.minCm)} cm a největší {number(example.result.maxCm)} cm.
          Rozložení po ploše popisuje výběrová směrodatná odchylka {number(example.result.sampleSdCm)} cm,
          vypočtená se jmenovatelem <i>n</i> − 1. Vyjadřuje rozdíly mezi body.
          Hodnota 35,60 ± 8,46 cm by bez tohoto vysvětlení mohla mylně vypadat jako nejistota průměru.
        </p>
        <p>
          Kdybychom prázdné údaje nahradili nulami, dělili bychom stejný součet číslem 121
          a dostali {number(example.result.incorrectZeroFilledMeanCm)} cm. Takový výsledek by dvěma
          zaplaveným bodům přisoudil nulovou hloubku, kterou nikdo nezměřil. Správný průměr 35,60 cm
          naopak patří k dostupným bodům. Sám nedoplňuje stav v obou chybějících místech.
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Mapa měřených bodů, na malém displeji posuvná do stran">
            <Image className="article-figure__media" src="/media/thaw-depth/barrow-grid.png" width={1728} height={1512} unoptimized
              alt="Síť 11 krát 11 bodů na ploše jednoho kilometru čtverečního. Barva ukazuje hloubku 19 až 68 cm, dva body v pravém dolním rohu nemají měření kvůli vodě." />
          </div>
          <figcaption>
            Hloubka rozmrzání v bodech Barrow U1 dne 18. srpna 1996. Obě osy udávají polohu v síti
            v metrech, barevná stupnice hloubku v centimetrech. Křížky označují dva chybějící údaje.
            Prostor mezi body není interpolován. Barvy proto neposkytují souvislou mapu podpovrchového rozhraní.
            Vlastní graf Klimatologie.eu podle
            <SourceLink id="WEB_GTN_P_Barrow_ALT_dataset_14"> dat N. Shiklomanova, CALM a GTN-P</SourceLink>.
            Data i graf jsou dostupné pod licencí CC BY 4.0.
          </figcaption>
        </figure>
        <p>
          Výsledek popisuje hloubku při uvedené návštěvě, používanou v archivu jako roční údaj aktivní vrstvy.
          Export s jedním vybraným datem za rok sám nedokládá, že po 18. srpnu už rozmrzání nepokračovalo.
          Jeden rok zároveň nestačí k určení dlouhodobého trendu. Pro něj potřebujeme srovnatelná opakovaná
          měření a kontrolu termínů, pokrytí i změn povrchu.
        </p>
        <details className="method-details">
          <summary>Data, kontrola výpočtu a soubory ke stažení</summary>
          <p>
            <a href={`${dataPath}/barrow-gtnp.zip`}>Původní export GTN-P v ZIP</a>{" "}
            obsahuje CSV s hloubkami a JSON s metadaty. Soubor uchováváme beze změny.
            <a href={`${dataPath}/barrow-1996.csv`}> Výběr 121 záznamů pro rok 1996</a>{" "}
            zachovává hodnoty a příznaky, pouze je řadí podle souřadnic. CSV má desetinnou tečku a čárku jako oddělovač.
          </p>
          <p>
            <a href={`${dataPath}/reproduce.py`}>Skript reproduce.py</a>{" "}
            a <a href={`${dataPath}/example.json`}>popis vstupu, licence a výsledků v example.json</a>{" "}
            uložte vedle souboru ZIP. Příkaz <code>python -B reproduce.py</code> vypočítá uvedené výsledky
            v Pythonu 3 bez dalších knihoven. Skript kontroluje otisk SHA-256 původního archivu, datum,
            identifikátory, souřadnice všech bodů a příznaky chybějících údajů.
            <a href={`${dataPath}/plot.py`}> Kód pro vytvoření grafu</a>{" "}
            navíc potřebuje knihovnu Matplotlib.
          </p>
          <p>
            Zveřejněná metadata neobsahují kalibrační list konkrétní sondy, samostatné dvojice vpichů
            ani úplnou bilanci nejistoty návštěvy. Jejich správnost z tohoto exportu zpětně nepřezkoumáme.
            Opakování aritmetiky ověřuje zpracování dostupných hodnot.
          </p>
        </details>

        <h2>Jak ověřit stupnici a správné nalezení rozhraní</h2>
        <p>
          Kalibrace určuje vztah mezi údajem přístroje a referenční hodnotou včetně nejistot.
          U sondy se délkové značky porovnají s referenčním měřidlem délky, jehož kalibrace má
          doloženou návaznost na jednotku metr. Ověří se poloha hrotu, nula a rozteč značek v používaném rozsahu.
          Zjištěné odchylky lze zahrnout jako opravu odečtu. Posunutí stupnice nebo výměna poškozené
          části je zásah do přístroje, po kterém je potřeba kontrolu zopakovat.
          <SourceLink id="2012_VIM_Calibration"> Mezinárodní metrologický slovník VIM</SourceLink>{" "}
          odlišuje kalibraci od takového seřízení.
        </p>
        <p>
          Správná délková stupnice ještě nepotvrzuje, že hrot zastavil právě led. Kontrola v terénu
          proto zahrnuje opakované vpichy a porovnání s teplotním profilem, mrazovou trubicí nebo
          odkrytým půdním profilem. Výkop půdu narušuje a pro opakované sledování stejného bodu se nehodí.
          Při změně sondy či pozorovatele pomůže souběžné měření, které odhalí rozdílný tlak,
          stlačování mechu nebo rozpoznávání odporu.
        </p>
        <p>
          Konkrétní porovnání přinášejí
          <SourceLink id="DOI_10_1080_10889370009377698"> Brown, Hinkel a Nelson v tabulce 2 své práce (2000)</SourceLink>.
          Na aljašském West Docku pro rok 1996 uvádějí průměr sondované sítě o straně 100 m
          <strong> 30 cm</strong> a odhad z teplotního profilu <strong>22 cm</strong>.
          V roce 1998 jsou hodnoty 34 a 33 cm, v roce 2000 pak 28 a 26 cm.
          Teplotní metoda vychází z jiného fyzikálního signálu. Oba postupy však sledují tutéž lokalitu
          a tentýž rok, přičemž profil představuje jedno místo a sondy více míst na ploše.
          Rozdíl tak zahrnuje prostorovou proměnlivost i odlišné vymezení rozhraní.
          Toto porovnání samo neurčuje chybu konkrétní sondy a nelze je zaměnit za kontrolu délkové stupnice.
        </p>

        <h2>Trubice uchová maximum, teplotní čidla průběh</h2>
        <div className="method-comparison">
          <section>
            <h3>Mrazová trubice</h3>
            <p>
              Pevná vnější trubka je ukotvená hluboko v permafrostu. V ní je vyjímatelná průhledná
              trubice s vodou. Když její led shora odtává, malá skleněná kulička klesá s rozhraním
              vody a ledu. Při opětovném zamrznutí zůstane v ledu a uchová polohu největšího rozmrznutí.
            </p>
          </section>
          <section>
            <h3>Teplotní profil</h3>
            <p>
              Čidla v několika známých hloubkách zaznamenávají teplotu. Z jejich údajů lze
              odhadnout největší roční hloubku dosaženou teplotou 0 °C. Mezi čidly se poloha této
              teploty dopočítává, takže výsledek závisí také na jejich rozestupu a zvoleném vztahu.
            </p>
          </section>
        </div>
        <p>
          <SourceLink id="DOI_10_4095_202802">Nixon a spoluautoři (1995)</SourceLink>{" "}
          popsali kanadské trubice s vnějším průměrem 2,5 cm, ukotvením přibližně 4 m pod povrchem
          a barevnou skleněnou kuličkou o průměru 3 mm. Hloubku kuličky odečítali vůči stálé značce.
          Pohyblivá objímka spojená s povrchem navíc ryla stopu do vnější trubky a zaznamenávala
          zdvih i sesedání půdy. Maximum předchozího roku tak mohli přečíst při následující letní návštěvě.
          Museli přitom správně přiřadit rok a novou kuličku vložit před dalším maximem.
        </p>
        <p>
          Pro teplotní metodu WMO doporučuje v oblasti rozhraní rozestupy čidel přibližně 2–20 cm
          podle podmínek a požadované přesnosti. Převod elektrického signálu na teplotu vysvětluje
          <Link href="/metody/odporova-termometrie-a-termistory"> Odporová termometrie a termistory</Link>.
          Běžný odhad hloubky používá přímkovou interpolaci mezi hloubkami, kde roční maximum teploty
          leží nad a pod nulou. Jemnější rozmístění čidel omezuje délku úseku, ve kterém tvar profilu pouze předpokládáme.
        </p>
        <p>
          Teplota 0 °C a mechanicky pevná hranice nemusí ležet přesně ve stejné hloubce.
          Rozpuštěné soli snižují teplotu mrznutí a část vody v jemných pórech může zůstat kapalná
          i pod nulou. Při tání se navíc dodané teplo spotřebovává na změnu ledu ve vodu,
          takže se teplota dlouho mění jen málo. Z malého rozdílu teplot pak nelze spolehlivě určit
          ostrou hranici. Pokud půda nad permafrostem přestane v zimě úplně zamrzat, vzniká trvale
          nezamrzlá mezivrstva. Sezónně aktivní vrstva už potom nesahá až k horní hranici permafrostu.
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO, kapitola 4</SourceLink>,
          rozlišuje tepelnou definici od rozhraní zjištěného sondou.
        </p>

        <h2>Sesedání povrchu mění význam stejného odečtu</h2>
        <p>
          Při tání podzemního ledu může povrch klesat. Sonda se při další návštěvě opírá o tento nový,
          nižší povrch. Stejných 40 cm pod ním proto nemusí znamenat stejnou výškovou polohu
          rozhraní jako dříve. K oddělení obou změn změříme povrch vůči stabilnímu výškovému bodu
          a hloubku rozmrzání vůči témuž povrchu.
        </p>
        <p className="article-formula method-equation">z<sub>rozhraní</sub> = z<sub>povrchu</sub> − d</p>
        <p>
          Symbol <i>z</i> označuje výšku vůči stejné pevné referenci, kladně vzhůru.
          V tomto vztahu je <i>d</i> svisle měřená hloubka, kladná směrem dolů.
          Rozdíl výšky povrchu a této hloubky tedy dává výšku rozhraní.
          Ve vztahu musí mít všechny veličiny stejné jednotky a patřit ke stejnému místu a okamžiku.
          Ukotvená trubice může referenci zajistit jen tak dlouho, dokud se její opora sama nepohybuje.
        </p>
        <p>
          Důležitost této kontroly ukazují
          <SourceLink id="DOI_10_1029_2023jf007262"> O’Neill a spoluautoři (2023)</SourceLink>{" "}
          na 28 kanadských lokalitách se záznamy zasahujícími do všech tří desetiletí období 1991–2018.
          Mezi průměry let 1991–1999 a 2010–2018 se průnik tání vůči pevné referenci prohloubil
          v průměru o 12 cm. Povrch klesl o 7 cm, takže tloušťka aktivní vrstvy vzrostla jen o 5 cm.
          V analýze autoři vyřadili období s poškozenými nebo nestabilními přístroji.
          Samotný odečet od povrchu by část postupu tání v půdě bohaté na led skryl.
        </p>

        <h2>Co omezuje přesnost a dlouhodobé srovnání</h2>
        <p>
          Pro ruční sondování v jemnozrnné půdě s dobře rozpoznatelným rozhraním uvádí
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO, oddíl 4.3.4.3</SourceLink>, přesnost
          přibližně ±2 cm. Zaokrouhlení na celé centimetry přitom samo přispívá nejvýše půl centimetrem.
          V kamenitém podloží nebo při nejasném povrchu mohou rozdíly dosáhnout několika až desítek
          centimetrů. Rozhodující tedy často bývá určení hranic, mezi kterými měříme.
          Údaj ±2 cm není úplnou vyčíslenou nejistotou průměru návštěvy Barrow 1996.
        </p>
        <p>
          U našeho výpočtu známe prostorové rozpětí 19–68 cm a směrodatnou odchylku 8,46 cm.
          Neznáme velikost společné chyby při určení povrchu ani rozdíl proti skutečnému ročnímu maximu.
          Dva chybějící body omezují pokrytí. Sousední body také mohou mít podobnou půdu a podobné
          odchylky, takže 119 hodnot nemusí představovat 119 nezávislých informací.
          Zmenšit směrodatnou odchylku dělením odmocninou z počtu bodů a nazvat výsledek celkovou
          nejistotou by tyto vlivy přehlédlo.
        </p>
        <p>
          U správně instalovaných mrazových trubic uvádí WMO orientační přesnost kolem 2 cm,
          i když lze délku odečítat po milimetrech. Trubice může vést teplo jinak než okolní půda
          a nedostatečně ukotvený přístroj se může zdvihat mrazem. U teplotního profilu rozhoduje
          kalibrace čidel, skutečná hloubka jejich uložení, četnost záznamu a interpolace.
          Tyto vlivy mají různé příčiny, a proto má porovnávání metod smysl.
          <SourceLink id="WEB_CALM_Active_Layer_Protocol"> Protokol CALM</SourceLink>{" "}
          doporučuje vybrat místo trubice podle dříve naměřeného průměru sond. Tím obě měření prostorově propojuje.
          Shoda takto vybraného místa s původním průměrem není samostatným testem reprezentativnosti.
        </p>

        <h2>Historie a klimatologické využití měření hloubky tání</h2>
        <p>
          Mechanické sondování využívá jednoduchý kontakt se zmrzlou půdou. Rozšíření jeho poznávací
          hodnoty spočívalo hlavně v opakování na stejných místech a ve spojení s průběžnými záznamy.
          <SourceLink id="DOI_10_4095_202802"> Původní zpráva Nixona a spoluautorů (1995)</SourceLink>{" "}
          dokumentuje instalace z let 1990–1992, které kombinovaly sondy, trubice s uchováním maxima
          a sledování pohybu povrchu. Autoři upravili trubici popsanou J. Rossem Mackayem v roce 1973
          a doplnili sledování automatickými teplotními záznamníky.
          Takové uspořádání umožnilo zjistit, co se mezi jednotlivými návštěvami změnilo.
        </p>
        <p>
          <SourceLink id="DOI_10_1080_10889370009377698">Brown, Hinkel a Nelson (2000)</SourceLink>{" "}
          popsali zavádění společných postupů CALM v 90. letech, od měřicích sítí přes úpravy protokolu
          na setkáních v letech 1995 a 1997 až po společné ukládání dat. Sjednocení termínů,
          rozmístění bodů a popisu lokalit umožnilo srovnávat více oblastí. Samotné zvětšení počtu
          sond by při neznámých postupech podobné srovnání nezajistilo.
        </p>
        <p>
          Dnešní klimatologické vyhodnocení spojuje místní výsledky za mnoho let.
          <SourceLink id="DOI_10_1038_s43247_026_03824_1"> Streletskiy a spoluautoři (2026)</SourceLink>{" "}
          analyzovali záznamy CALM za období 2000–2024. Terénní metoda v takové práci dodává hloubky
          a jejich místní proměnlivost. Výpočet trendu, výběr dostatečně dlouhých záznamů a porovnání
          s teplotou či sněhem jsou další kroky analýzy. Výsledek se vztahuje k monitorovaným místům,
          jejichž rozmístění není rovnoměrným vzorkem veškerého permafrostu.
        </p>
        <p>
          Vztah ke sněhu vyžaduje také
          <Link href="/metody/mereni-vysky-hustoty-a-vodni-hodnoty-snehu"> měření jeho výšky, hustoty a vodní hodnoty</Link>.
          Teplotu samotného podloží poskytuje termometrie. Společně lze rozlišovat změnu hloubky
          rozmrzání, oteplování zmrzlé půdy a sesedání terénu. Dlouhodobá pozorování a jejich
          klimatický význam shrnuje článek
          <Link href="/pozorovani/snehova-pokryvka-a-permafrost"> Sněhová pokrývka a permafrost</Link>.
        </p>

        <section className="method-conclusion">
          <h2>Co lze z měření zjistit</h2>
          <p>
            Sondování ukazuje, do jaké hloubky půda na měřených místech rozmrzla a jak se tato hloubka
            liší po ploše. Vhodně načasované opakování nebo záznam maxima umožňuje sledovat změny
            aktivní vrstvy mezi roky. Současná kontrola výšky povrchu odhalí i postup tání, který by
            sesedající terén v odečtu sondy skryl. Tyto výsledky popisují změny promrzání půdy.
            Jejich příčiny se zkoumají společně s teplotou, sněhem, vodou a stavem měřicího místa.
          </p>
        </section>
      </div>
    </article>
  );
}
