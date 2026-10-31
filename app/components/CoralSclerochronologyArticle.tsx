import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function CoralSclerochronologyArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak korálová kostra uchovává záznam moře</h2>
        <p className="article-prose__intro">
          Korálová sclerochronologie zkoumá růstové vrstvy korálových koster,
          přiřazuje jim dobu vzniku a z jejich vlastností zjišťuje podmínky,
          ve kterých korál žil. Umožňuje tak rekonstruovat minulou teplotu
          i další vlastnosti mořské vody. Zde vysvětlíme určování teploty
          z poměru stroncia a vápníku v kostře. Postup budeme sledovat
          na dlouhověkém korálu <i>Diploastrea heliopora</i> z Fidži.{" "}
          <SourceLink id="WEB_NCAR_Coral_Geochemistry_2023">(Lawmanová a NCAR 2023)</SourceLink>{" "}
          <SourceLink id="DOI_10_1126_sciadv_ado5107">(D’Olivo a kol. 2024)</SourceLink>
        </p>

        <h3>Co se ukládá při růstu</h3>
        <p>
          Mohutnou korálovou kolonii tvoří drobní živočichové, polypi.
          Na povrchu společné kostry vytvářejí další pevnou hmotu.
          Ta je tvořena převážně aragonitem, jednou z krystalických forem
          uhličitanu vápenatého. Nová kostra přirůstá k té starší,
          takže směrem dovnitř kolonie zůstávají zachovány postupně starší
          části. Dlouhověký korál může tímto způsobem uchovat několik století růstu.{" "}
          <SourceLink id="WEB_NCAR_Coral_Geochemistry_2023">(Lawmanová a NCAR 2023, vznik korálového záznamu)</SourceLink>
        </p>
        <p>
          Během roku se mění způsob, jakým korál kostru buduje.
          Vznikají úseky s větším a menším množstvím pevné hmoty
          ve stejném objemu, tedy s vyšší a nižší hustotou.
          Na rentgenovém snímku se projeví střídáním pásů.
          Dvojice pásů vyšší a nižší hustoty představuje roční přírůstek.
          Tato opakující se stavba umožňuje sestavit kalendář růstu.{" "}
          <SourceLink id="WEB_USGS_Coral_Geochemistry">(USGS: roční pásy korálové kostry)</SourceLink>
        </p>
        <p>
          Kostra současně uchovává chemické složení materiálu, který při růstu vznikl.
          Vedle vápníku se do ní zabudovává malé množství stroncia.
          Oba prvky mají podobné chemické vlastnosti a stroncium může
          v krystalové struktuře obsadit místo vápníku.
          Při vyšší teplotě se v těchto korálech zpravidla zabudovává
          méně stroncia v poměru k vápníku. Poměr označovaný Sr/Ca proto
          s oteplením klesá. Spojením chemického rozboru s kalendářem vrstev
          získáme záznam, který lze porovnat s teplotou vody.{" "}
          <SourceLink id="WEB_USGS_Coral_Geochemistry">(USGS: princip korálového Sr/Ca)</SourceLink>
        </p>

        <h3>Odběr a příprava korálového jádra</h3>
        <p>
          Pro dlouhý teplotní záznam vybíráme mohutnou kolonii se souvisle
          zachovanou kostrou. Vrt vedeme ve směru jejího hlavního růstu,
          aby protínal po sobě následující přírůstky.
          Podvodní vrtačka s dutou korunkou odebírá váleček kostry,
          kterému říkáme korálové jádro. Takový odběr provedla expedice
          Paleofiji v roce 1998 u ostrova Kanathea. Ze živého korálu
          v hloubce tří metrů získala jádro označené F14.{" "}
          <SourceLink id="DOI_10_1126_sciadv_ado5107">(D’Olivo a kol. 2024, odběr a příprava F14)</SourceLink>
        </p>
        <figure className="article-figure article-figure--instrument">
          <Image className="article-figure__media" src="/media/coral-sclerochronology/coral-coring.jpg"
            alt="Potápěč drží podvodní vrtačku nad mohutnou korálovou kolonií. Dlouhá vrtací sestava směřuje svisle do kostry a v místě odběru se uvolňuje světlý zákal."
            width={666} height={888} unoptimized />
          <figcaption>
            Odběr jádra korálu <i>Diploria strigosa</i> v národním parku
            Dry Tortugas na Floridě, přibližně v roce 2015.
            Dutá vrtací sestava umožňuje vyjmout souvislý váleček kostry.
            Snímek ukazuje práci s korálovým archivem v jiném místě než u F14.
            USGS, fotograf samostatně neuveden, public domain, beze změny.{" "}
            <SourceLink id="WEB_USGS_Coral_Coring_2015">Původ a podmínky použití fotografie</SourceLink>.
          </figcaption>
        </figure>
        <p>
          V laboratoři se z jádra podélně odřízne deska.
          Její řez odhalí růstové vrstvy a poskytne přístup k materiálu
          různých let. U F14 měla deska tloušťku přibližně 1,1 centimetru.
          Po vyčištění a vysušení ji badatelé rentgenovali.
          Na snímku se ukázaly pravidelně se střídající pásy hustoty,
          podle kterých mohli postupovat od mladé části ke starší.{" "}
          <SourceLink id="DOI_10_1126_sciadv_ado5107">(D’Olivo a kol. 2024, Coral collection and preparation)</SourceLink>
        </p>

        <h3>Jak vrstvy dostanou letopočet</h3>
        <p>
          U korálu živého v době odběru známe datum nejmladšího povrchu.
          Od něj počítáme roční přírůstky směrem do minulosti.
          Na každém úseku tak určujeme, kterému roku odpovídá.
          V jádře F14 počítali pásy opakovaně dva lidé.
          Po chemickém rozboru připojili také sezónní kolísání Sr/Ca,
          které zachycuje střídání teplejší a chladnější části roku.
          Ve společném období je porovnali s průběhem měřených teplot.{" "}
          <SourceLink id="DOI_10_1126_sciadv_ado5107">(D’Olivo a kol. 2024, Chronology)</SourceLink>
        </p>
        <p>
          Výsledkem je vztah mezi polohou v jádře a časem.
          Díky němu dostane každý pozdější chemický údaj své místo
          v kalendáři. Roční vrstvy nemusejí být stejně silné,
          proto stejná vzdálenost podél jádra nemusí představovat
          stejně dlouhou dobu. U F14 poskytlo datování úplné roky
          1370 až 1997. Rozpracovaný přírůstek roku odběru 1998
          autoři do ročního záznamu nezařadili.{" "}
          <SourceLink id="DOI_10_1126_sciadv_ado5107">(D’Olivo a kol. 2024, datování a roční zpracování)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/coral-sclerochronology/coral-workflow.svg"
            alt="Ilustrační řez kostrou rozlišuje roční pásy a místa odběru prášku. Datování přiřadí místům roky, chemický rozbor hodnoty Sr/Ca. Spojením vznikne datovaný chemický záznam, který porovnáme s teplotou moře."
            width={640} height={760} unoptimized />
          <figcaption>
            Levá větev přiřazuje místům v kostře čas, pravá chemické složení.
            Spojením obou vznikne záznam Sr/Ca v jednotlivých letech.
            Dvojice světlého a tmavého pásu představuje jeden rok,
            oranžové body odběry prášku. Rozměry a pásy jsou ilustrační.
            Vlastní schéma podle{" "}
            <SourceLink id="WEB_USGS_Coral_Geochemistry">metodiky USGS</SourceLink>{" "}
            a <SourceLink id="DOI_10_1126_sciadv_ado5107">studie F14</SourceLink>.
          </figcaption>
        </figure>

        <h3>Jak změříme chemické složení</h3>
        <p>
          Z připravené desky odebíráme malé porce prášku po krátkých úsecích
          podél růstu. U F14 badatelé postupovali po jednom milimetru
          a získali 2250 vzorků. Odebírali především materiál ze středového
          sloupku kosterního kalíšku, ve kterém žije jednotlivý polyp.
          Tuto část kostry nazýváme kolumela. Volbou stejné části udržovali
          jednotlivé odběry srovnatelné. Prášek vyčistili a rozpustili
          v kyselině dusičné, aby mohli změřit prvky v roztoku.{" "}
          <SourceLink id="DOI_10_1126_sciadv_ado5107">(D’Olivo a kol. 2024, příprava a geochemie)</SourceLink>
        </p>
        <p>
          K měření použili optickou emisní spektrometrii s indukčně vázaným
          plazmatem, zkráceně ICP-OES. Roztok se rozprašuje na jemné kapičky
          a proud argonu je přivádí do horkého plazmatu.
          Plazma je plyn obsahující volné elektrony a elektricky nabité částice.
          Jeho vysokou teplotu udržuje elektromagnetické pole cívky.
          Kapičky se v něm odpaří a rozpuštěné látky se rozloží
          na volné atomy a jejich elektricky nabité podoby, ionty.{" "}
          <SourceLink id="2016_Harvey_Analytical_Chemistry">(Harvey 2016, kapitola 10.7)</SourceLink>{" "}
          <SourceLink id="DOI_10_1126_sciadv_ado5107">(přístroj a měření F14)</SourceLink>
        </p>
        <p>
          Srážky v horkém plynu dodávají částicím energii.
          Při návratu do nižších energetických stavů vyzařují světlo
          na vlnových délkách příznačných pro daný prvek.
          Vlnová délka rozlišuje druhy světla, ve viditelné oblasti
          ji vnímáme jako barvu. Spektrometr světlo podle vlnových délek
          rozloží. Úzké úseky se silným vyzařováním v tomto rozložení
          nazýváme emisní čáry. Detektor zaznamená intenzitu vybraných
          čar stroncia a vápníku.
          Poloha čáry tedy určuje, který prvek sledujeme,
          a její intenzita poskytuje údaj o jeho množství.{" "}
          <SourceLink id="2016_Harvey_Analytical_Chemistry">(Harvey 2016, atomová emisní spektrometrie)</SourceLink>
        </p>
        <p>
          Převod intenzit na chemické složení určíme měřením známých vzorků.
          Přístroj proto změří také referenční roztoky se známým Sr/Ca.
          Z jejich odezvy se stanoví převod mezi poměrem světelných signálů
          a chemickým poměrem. Tato kalibrace umožní určit Sr/Ca neznámých
          vzorků. Ve studii F14 měly reference stejnou koncentraci vápníku
          a odstupňované koncentrace stroncia.
          Opakovaná měření referencí během série sloužila k opravě
          pozvolných změn odezvy přístroje.{" "}
          <SourceLink id="DOI_10_1029_2001GC000169">(de Villiers a kol. 2002, poměrová kalibrace)</SourceLink>{" "}
          <SourceLink id="DOI_10_1126_sciadv_ado5107">(reference použité pro F14)</SourceLink>
        </p>
        <p>
          Výsledné Sr/Ca vyjadřuje relativní zastoupení stroncia vůči vápníku.
          Jednotka mmol/mol zde říká, kolik atomů stroncia připadá na tisíc
          atomů vápníku. Každá hodnota je spojena s polohou odběru,
          a tím i s datováním. Ve F14 připadaly přibližně čtyři odběry
          na rok, ale jejich rozestupy v čase se s rychlostí růstu měnily.
          Pro pravidelný roční záznam autoři použili lineární interpolaci.
          Ta mezi sousedními datovanými hodnotami předpokládá plynulou změnu
          po přímce a umožní určit hodnotu v požadovaném čase.
          Ve veřejném souboru je pro každý rok jedna hodnota Sr/Ca.{" "}
          <SourceLink id="DOI_10_1126_sciadv_ado5107">(D’Olivo a kol. 2024, Chronology)</SourceLink>{" "}
          <SourceLink id="DOI_10_25921_t9g1_vr70">(roční data NOAA NCEI)</SourceLink>
        </p>

        <h3>Jak chemický záznam převedeme na teplotu</h3>
        <p>
          Teď máme datované chemické složení kostry. K teplotě potřebujeme
          druhý vztah, tentokrát mezi Sr/Ca a podmínkami v moři.
          Stanovíme ho v období, pro které existují oba záznamy současně.
          U F14 autoři použili roky 1883–1997 a teploty ze souboru ERSSTv5.{" "}
          <SourceLink id="DOI_10_1126_sciadv_ado5107">(D’Olivo a kol. 2024, společné období)</SourceLink>
        </p>
        <p>
          ERSSTv5 obsahuje měsíční teploty mořské hladiny.
          Anglický název ERSST, <i>Extended Reconstructed Sea Surface Temperature</i>,
          označuje rozšířenou rekonstrukci této veličiny. Použita je verze 5.
          Tento produkt spojuje přístrojová měření a statisticky doplňuje
          prostorové pokrytí. Jeho výpočetní síť má uzly vzdálené dva stupně
          v zeměpisné šířce i délce. Pro Fidži autoři zvolili uzel
          na 18° jižní šířky a 180° délky a použili roční průměry teplot.{" "}
          <SourceLink id="DOI_10_1126_sciadv_ado5107">(D’Olivo a kol. 2024, teplotní kalibrace)</SourceLink>{" "}
          <SourceLink id="DOI_10_7289_V5T72FNM">(Huang a kol. 2017, ERSSTv5)</SourceLink>
        </p>
        <p>
          Zvolený převod přizpůsobuje korálový záznam průměru a velikosti
          kolísání teplot v tomto období. Průměr určí střed teplotní stupnice.
          Velikost kolísání popíšeme směrodatnou odchylkou.
          Ta shrnuje, jak daleko se jednotlivé roční hodnoty obvykle pohybují
          od svého průměru. Získáme ji z odchylek všech roků,
          přičemž větší odchylky mají ve výpočtu větší váhu.{" "}
          <SourceLink id="DOI_10_1126_sciadv_ado5107">(D’Olivo a kol. 2024, přizpůsobení průměru a směrodatné odchylky)</SourceLink>
        </p>
        <p>
          Nejprve od konkrétního Sr/Ca odečteme jeho dlouhodobý průměr.
          Dostaneme velikost chemické odchylky daného roku.
          Poměr směrodatných odchylek teploty a Sr/Ca určí,
          jak tuto odchylku převést na stupně Celsia.
          Znaménko otočíme, protože vyšší Sr/Ca odpovídá nižší teplotě.
          Nakonec přičteme průměrnou teplotu společného období.
          Celý převod lze zapsat takto:{" "}
          <SourceLink id="DOI_10_1126_sciadv_ado5107">(postup podle D’Olivo a kol. 2024)</SourceLink>
        </p>
        <Equation tex={String.raw`T = \overline{T} - \frac{s_T}{s_R}\,(R-\overline{R})`} />
        <p>
          <InlineMath tex="R" /> je převáděná hodnota Sr/Ca a <InlineMath tex="T" />
          {" "}výsledný odhad roční teploty. Čára nad značkou označuje průměr
          za společné období. Symboly <InlineMath tex="s_R" /> a <InlineMath tex="s_T" />
          {" "}jsou směrodatné odchylky v témže období.
          Hodnoty chemického poměru i jeho směrodatná odchylka mají jednotku
          mmol/mol, teplota a její směrodatná odchylka jednotku °C.
          Poměr obou odchylek tedy převádí chemickou změnu na teplotní změnu.
        </p>
        <p>
          Takto nastavený vztah je empirický, určený porovnáním dat.
          Pro použití na starší vrstvy předpokládáme, že se vztah mezi
          tvorbou kostry a teplotou dlouhodobě zachoval.
          Výsledkem je průběh odhadované roční teploty povrchového moře
          v oblasti Fidži. Roky v něm určuje datování korálu,
          velikost teplotních změn určuje zvolená kalibrace.{" "}
          <SourceLink id="WEB_NCAR_Coral_Geochemistry_2023">(Lawmanová a NCAR 2023, vztah záznamu ke klimatu)</SourceLink>{" "}
          <SourceLink id="DOI_10_1126_sciadv_ado5107">(rekonstrukce F14)</SourceLink>
        </p>

        <h3>Použití, vývoj a další možnosti</h3>
        <p>
          Záznam F14 prodlužuje informace o moři v okolí Fidži až do roku 1370.
          D’Olivo a kolegové jej spojili s dalšími dvěma kratšími korálovými
          záznamy a porovnali vývoj teploty s centrální částí Pacifiku.
          Mohli tak sledovat, jak se mezi oblastmi měnil teplotní rozdíl
          během desetiletí a staletí. Korály doplňují{" "}
          <Link href="/metody/dendrochronologie">letokruhy stromů</Link>{" "}
          o záznam z tropického oceánu. Přístrojové sledování novějšího
          období popisuje článek o{" "}
          <Link href="/pozorovani/gmst/#mereni-oceanu">globální povrchové teplotě</Link>.
          Korálová rekonstrukce přispívá především poznáním konkrétní mořské oblasti.{" "}
          <SourceLink id="DOI_10_1126_sciadv_ado5107">(D’Olivo a kol. 2024, regionální použití)</SourceLink>{" "}
          <SourceLink id="WEB_NCAR_Coral_Geochemistry_2023">(geografické doplnění přírodních archivů)</SourceLink>
        </p>
        <p>
          Myšlenka číst podmínky prostředí z růstu korálů předchází moderním
          chemickým přístrojům. Ting Ying H. Ma už v roce 1934 popsal
          sezónní změny stavby korálu <i>Favia speciosa</i> a porovnával je
          s teplotami moře v různých oblastech.
          Pozdější chemická analýza umožnila sledovat také zastoupení prvků.
          De Villiersová a kolegové v roce 2002 popsali kalibraci emisního
          měření jejich poměrů, kterou využila i studie F14.
          Přesná analýza malých vzorků tak umožňuje rozebrat dlouhé jádro
          v tisících po sobě následujících odběrů.{" "}
          <SourceLink id="DOI_10_2183_pjab1912_10_353">(Ma 1934)</SourceLink>{" "}
          <SourceLink id="DOI_10_1029_2001GC000169">(de Villiers a kol. 2002)</SourceLink>{" "}
          <SourceLink id="DOI_10_1126_sciadv_ado5107">(provedení F14)</SourceLink>
        </p>
        <p>
          Jinou možností je měřit v kostře poměr izotopů kyslíku,
          tedy jeho atomů s různou hmotností. Tento poměr ovlivňuje
          teplota i izotopové složení vody, ve které kostra vzniká.
          Pokud současně známe Sr/Ca, můžeme odhadnout teplotní příspěvek
          a oddělit jej od změn složení vody. Ty mohou souviset se srážkami,
          výparem nebo přítokem jiné vodní masy.
          Princip měření izotopů vysvětluje{" "}
          <Link href="/metody/hmotnostni-a-izotopova-spektrometrie">hmotnostní a izotopová spektrometrie</Link>.
          Mladé i fosilní korály, tedy zachované kostry již odumřelých kolonií,
          se shromažďují do veřejných souborů, například CoralHydro2k.{" "}
          <SourceLink id="WEB_NCAR_Coral_Geochemistry_2023">(Lawmanová a NCAR 2023, spojené analýzy a databáze)</SourceLink>
        </p>

        <p>
          U fosilních korálů určí stáří také radioaktivní přeměna uranu na thorium.
          Korál při růstu přijímá uran z mořské vody. Z poměru uranu a vzniklého thoria
          lze vypočítat dobu, která od vzniku kostry uplynula. Metoda umožňuje datovat
          zachované korály až přibližně 600 000 let staré. Jejich růstové vrstvy pak
          zpřístupňují jednotlivé úseky mořské minulosti.{" "}
          <SourceLink id="DOI_10_3285_eg_57_1_2_3">(Scholz a Hoffmann, 2008)</SourceLink>
        </p>

        <p>
          Jak se izotopové složení vody promítá do minerálu rostoucího
          v jeskyni, vysvětluje navazující článek o{" "}
          <Link href="/metody/krapniky-a-jeskynni-sedimenty">krápnících a jeskynních sedimentech</Link>.
          Ukazuje také další využití uranového datování.
        </p>

        <h2>Nejistoty a kontrola výsledku</h2>
        <p>
          Rekonstrukci ovlivňuje datování, zachování kostry, růst korálu
          i vztah Sr/Ca k teplotě. U F14 vykazují korálová a přístrojová
          teplotní křivka ve společném období korelaci přibližně 0,39.
          Tento ukazatel vyjadřuje souběh jejich vzestupů a poklesů.
          Shoda je zde jen částečná.
          Stejné období zároveň slouží ke kalibraci, takže toto porovnání
          není nezávislou zkouškou převodu. Záznam je vhodnější
          pro studium delších změn než pro přesné určení každého jednotlivého roku.{" "}
          <SourceLink id="DOI_10_1126_sciadv_ado5107">(D’Olivo a kol. 2024, obr. 1B a rozbor rekonstrukce)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Podrobnosti k datování, měření a teplotnímu převodu</summary>
          <p>
            Roční rozlišení znamená jednu hodnotu za rok. Samo o sobě
            nezaručuje správný letopočet. Autoři kontrolovali počítání pásů
            datováním založeným na radioaktivní přeměně uranu na thorium.
            Vzorek ležící pod chemicky analyzovanou částí odpovídal podle
            pásů přibližně roku 1356 s odhadovanou nejistotou ±2 roky.
            Uranové datování dalo rok 1359,5 ± 2,0.
            Intervaly se překrývají. Jde o jiný fyzikální princip,
            ale o jednu kontrolu staré části, nikoli všech roků záznamu.{" "}
            <SourceLink id="DOI_10_1126_sciadv_ado5107">(D’Olivo a kol. 2024, U-Th dating)</SourceLink>
          </p>
          <p>
            Dodatečné rozpouštění nebo přeměna minerálu může původní
            chemický záznam změnit. Vybrané části F14 proto autoři zkoumali
            rentgenovou difrakcí, která rozpoznává krystalovou strukturu
            minerálů. Známky takové přeměny v testovaných vzorcích nenašli.
            Sr/Ca může ovlivňovat také biologie korálu a volba místa odběru.
            Koeficienty jednoho jádra proto nelze automaticky přenést
            na jiný druh nebo kolonii.{" "}
            <SourceLink id="DOI_10_1126_sciadv_ado5107">(kontrola zachování F14)</SourceLink>{" "}
            <SourceLink id="WEB_USGS_Coral_Geochemistry">(rozdíly mezi korály)</SourceLink>
          </p>
          <p>
            Laboratorní stabilitu sledovala opakovaná měření referencí.
            Studie uvádí směrodatnou odchylku opakovaných stanovení
            Sr/Ca 0,028 mmol/mol. Tento údaj popisuje rozptyl laboratorního
            měření. Nezahrnuje chybu datování, růstové vlivy ani nejistotu
            převodu na teplotu.{" "}
            <SourceLink id="DOI_10_1126_sciadv_ado5107">(D’Olivo a kol. 2024, Coral geochemistry)</SourceLink>
          </p>
          <p>
            Teplotní reference představuje oblast sítě, zatímco vzorek
            pochází z jedné kolonie. Starší přístrojová měření jsou navíc
            v této části oceánu řídká. Teploty pomáhaly i při datování
            sezónních cyklů, takže porovnávané průběhy sdílejí také část
            časového přiřazení. Přizpůsobení průměru a směrodatné
            odchylky zaručí shodu těchto dvou vlastností ve společném
            období, nikoli shodu jednotlivých teplot.
            Korelace měří podobnost průběhu od −1 do +1, kde kladná hodnota
            znamená souběžný růst a pokles. Není to podíl správně určených let.
            Úplnou nejistotu historické teploty nelze odvodit jen z ní
            nebo z laboratorní opakovatelnosti.{" "}
            <SourceLink id="DOI_10_1126_sciadv_ado5107">(D’Olivo a kol. 2024, SST calculations from Sr/Ca)</SourceLink>
          </p>
        </details>

        <h2>Výpočet teploty pro rok 1900</h2>
        <p>
          Použijeme veřejný roční záznam F14 uložený u NOAA NCEI
          a měsíční ERSSTv5 pro uvedený uzel u Fidži.
          Začínáme již datovanými a ročně zpracovanými hodnotami Sr/Ca.
          Laboratorní signály ani datování zde znovu nepočítáme.
          Pro každý rok zprůměrujeme dvanáct měsíčních teplot
          a sestavíme 115 párů za roky 1883–1997.
          Z nich vycházejí tyto hodnoty pro převod:{" "}
          <SourceLink id="DOI_10_25921_t9g1_vr70">(korál F14)</SourceLink>{" "}
          <SourceLink id="DOI_10_7289_V5T72FNM">(ERSSTv5)</SourceLink>
        </p>
        <div className="article-table-wrap">
          <table className="article-table">
            <thead><tr><th scope="col">Veličina za roky 1883–1997</th><th scope="col">Vlastní výpočet</th></tr></thead>
            <tbody>
              <tr><td>Průměr Sr/Ca</td><td>9,131107 mmol/mol</td></tr>
              <tr><td>Směrodatná odchylka Sr/Ca</td><td>0,057425 mmol/mol</td></tr>
              <tr><td>Průměrná teplota ERSSTv5</td><td>26,646662 °C</td></tr>
              <tr><td>Směrodatná odchylka teploty</td><td>0,324007 °C</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Více desetinných míst ponecháváme kvůli opakování výpočtu.
          Pro rok 1900 uvádí archiv Sr/Ca 9,18979 mmol/mol.
          Jeho hodnota je vyšší než průměr společného období,
          a převod mu proto přiřadí nižší než průměrnou teplotu.
          Po dosazení do již vysvětleného vztahu dostaneme:
        </p>
        <Equation tex={[
          String.raw`T_{1900} = 26{,}646662`,
          String.raw`-\frac{0{,}324007}{0{,}057425}\,(9{,}18979-9{,}131107)`,
          String.raw`\approx 26{,}32\,{}^\circ\mathrm{C}`,
        ]} />
        <p>
          Odhad z korálu pro rok 1900 tedy vychází na 26,32 °C.
          Roční ERSSTv5 pro stejný rok a uzel má 26,16 °C.
          Rozdíl činí přibližně 0,16 °C.
          Jde o vlastní přepočet zveřejněných vstupů podle popsaného postupu.
          Pro posouzení shody je potřeba celý společný úsek, který ukazuje graf.
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/coral-sclerochronology/annual-comparison.svg"
            alt="Roční průběhy teploty 1883 až 1997. Modrá křivka ERSSTv5 a oranžový přepočet korálu F14 mají stejné průměry a rozptyl, ale řada jednotlivých ročních výkyvů se liší."
            width={680} height={540} unoptimized />
          <figcaption>
            Vodorovná osa udává rok, svislá roční teplotu v °C.
            Modře je ERSSTv5, oranžově náš přepočet korálového Sr/Ca.
            Celé zobrazené období bylo použito k nastavení převodu.
            Vlastní výpočet dává korelaci 0,393, tedy přibližně 0,39
            jako v obrázku 1B původní studie. Křivky nejsou vyhlazené.
            <SourceLink id="DOI_10_25921_t9g1_vr70"> Data F14</SourceLink>,{" "}
            <SourceLink id="DOI_10_7289_V5T72FNM">ERSSTv5</SourceLink>{" "}
            a <a href="/data/methods/coral-sclerochronology/annual-comparison.csv">tabulka vlastního výpočtu</a>.
          </figcaption>
        </figure>
        <details className="article-details">
          <summary>Data a postup pro zopakování výpočtu</summary>
          <p>
            Výpočet používá verzi korálového souboru z 2. dubna 2025
            a výřez ERSSTv5 stažený 28. října 2026.
            Měsíce v ročním průměru mají stejnou váhu.
            Směrodatné odchylky počítáme jako výběrové, tedy s dělením
            součtu čtverců odchylek počtem roků minus jedna.
            Počítáme se všemi 115 úplnými roky a bez zaokrouhlování mezivýsledků.
          </p>
          <p>
            Stáhnout lze <a href="/data/methods/coral-sclerochronology/f14-original.txt">původní korálový soubor</a>,{" "}
            <a href="/data/methods/coral-sclerochronology/ersst-fiji-original.txt">původní výřez teplot</a>,{" "}
            <a href="/data/methods/coral-sclerochronology/provenance.json">adresy, verze a kontrolní součty</a>,{" "}
            <a href="/data/methods/coral-sclerochronology/annual-comparison.csv">výslednou tabulku</a>{" "}
            a <a href="/data/methods/coral-sclerochronology/calculation.json">nezaokrouhlené výsledky</a>.
            <a href="/data/methods/coral-sclerochronology/reproduce.py"> Skript v Pythonu</a>{" "}
            provede výpočet a ověří shodu souborů bez připojení k internetu.
            <a href="/data/methods/coral-sclerochronology/README.txt"> Průvodní dokument</a>{" "}
            popisuje spuštění a vztah našeho přepočtu k původní studii.
            K dispozici je také <a href="/data/methods/coral-sclerochronology/plot.py">skript pro vytvoření grafu</a>.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Korálová kostra spojuje kalendář růstu s chemickým záznamem mořského
            prostředí. Datování určí, kdy jednotlivé části vznikly. Vztah mezi složením
            kostry a podmínkami růstu pak umožňuje proměnit laboratorní rozbory v záznam
            minulého oceánu.
          </p>
          <p>
            Z korálů rekonstruujeme teplotu mořské vody a změny jejího složení
            související se srážkami, výparem a prouděním. Růstové vrstvy mohou zachytit
            i průběh jednotlivých ročních období. U fosilních korálů umožňuje datování
            pomocí uranu a thoria zkoumat vybraná období až přibližně 600 000 let
            nazpět.{" "}
            <SourceLink id="WEB_NCAR_Coral_Geochemistry_2023">(Lawmanová, 2023)</SourceLink>,{" "}
            <SourceLink id="DOI_10_3285_eg_57_1_2_3">(Scholz a Hoffmann, 2008)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
