import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function ReanalysisArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak měření a model společně rekonstruují atmosféru</h2>
        <p className="article-prose__intro">
          Asimilace dat je postup, který spojuje měření s fyzikálním modelem
          a průběžně upřesňuje odhad stavu atmosféry. Reanalýza tento postup
          opakuje pro minulá období se sjednoceným modelem a způsobem zpracování.
          Vznikají tak souvislé mapy tlaku, teploty, větru a dalších veličin,
          ze kterých lze zkoumat jednotlivé události i dlouhodobý vývoj klimatu.
          Postup vysvětlíme na reanalýze 20CR, která do modelu zapojuje historická
          měření přízemního tlaku.{" "}
          <SourceLink id="WEB_ECMWF_Bouttier_Courtier_Assimilation">(princip asimilace)</SourceLink>{" "}
          <SourceLink id="DOI_10_1002_qj_3598">(provedení 20CRv3)</SourceLink>
        </p>

        <h3>Model propojuje stav atmosféry v prostoru a čase</h3>
        <p>
          Stav atmosféry popisujeme souborem hodnot v různých místech a výškách.
          Patří k nim tlak, teplota, množství vodní páry a směr i rychlost větru.
          Atmosférický model rozděluje prostor do výpočetní sítě. Pomocí rovnic
          pohybu a zachování hmoty a energie počítá, jak se tento stav postupně
          mění. Vítr například přenáší teplo a vodní páru do sousedních oblastí.
          Změna na jednom místě proto ovlivňuje i další části atmosféry.{" "}
          <SourceLink id="WEB_ECMWF_Bouttier_Courtier_Assimilation">(modelový stav a jeho vývoj)</SourceLink>
        </p>
        <p>
          Model potřebuje také podmínky na svých hranicích. Pro 20CRv3 jsou
          předepsány teplota mořského povrchu a rozsah mořského ledu podle
          samostatných datových souborů. Určují prostředí, se kterým si
          atmosféra vyměňuje teplo a vodu. Jde o převzaté vstupy pro model.
          Vlastní asimilace pak zapojuje měření tlaku do opravy stavu atmosféry.
          Model navíc
          používá údaje o změnách slunečního záření, sopečných aerosolech
          a skleníkových plynech. Aerosoly jsou drobné částice ve vzduchu,
          které ovlivňují průchod záření atmosférou.{" "}
          <SourceLink id="DOI_10_1002_qj_3598">(okrajové podmínky a radiační působení)</SourceLink>
        </p>
        <p>
          Pro daný čas nejprve potřebujeme výchozí odhad. Získáme jej krátkou
          předpovědí, která pokračuje z předchozího upraveného stavu. Tento odhad
          již nese informace z dříve zapojených měření. Když přijdou měření pro
          další čas, porovnáme je s předpovědí a stav znovu upravíme. Upravenému
          odhadu se říká <strong>analýza</strong>. Z něj model pokračuje dál.
          Reanalýza tak postupuje minulostí v opakovaných cyklech.{" "}
          <SourceLink id="WEB_ECMWF_Data_Assimilation">(návaznost předpovědi a analýzy)</SourceLink>
        </p>

        <h3>Měření musí odpovídat tomu, co počítá model</h3>
        <p>
          Do 20CRv3 vstupují měření tlaku ze stanic i lodí, shromážděná
          v databázi International Surface Pressure Databank, verzi 4.7.
          Ke každému údaji je potřebné místo, čas a výška měření. Záznamy
          procházejí kontrolami a opravami doložených soustavných odchylek.
          Takto připravené hodnoty se mohou porovnat s modelem.{" "}
          <SourceLink id="DOI_10_1002_qj_3598">(vstupní údaje, kontroly a opravy tlaku)</SourceLink>
        </p>
        <p>
          Stanice obvykle neleží přesně ve výpočetním bodě ani ve stejné výšce,
          jakou má povrch v modelu. Z modelového stavu proto nejprve vypočítáme
          tlak odpovídající místu a výšce skutečného měření. Pravidlo, které
          převádí stav modelu na srovnatelný údaj, se nazývá
          <strong> pozorovací operátor</strong>. Jeho úlohou je zajistit,
          že porovnáváme tutéž veličinu za stejných podmínek. U tlaku je to
          zásadní, protože s rostoucí výškou ubývá vzduchu nad měřidlem a tlak
          klesá.{" "}
          <SourceLink id="DOI_10_1002_qj_3598">(převod modelového tlaku do výšky stanice)</SourceLink>
        </p>

        <h3>Rozdíl určí směr opravy, nejistoty její velikost</h3>
        <p>
          Začněme jedním tlakem v jednom místě. Výchozí odhad označíme{" "}
          <InlineMath tex="p_b" />, naměřenou hodnotu <InlineMath tex="p_o" />{" "}
          a výslednou analýzu <InlineMath tex="p_a" />. Všechny tři vyjádříme
          v hektopascalech, tedy hPa. Jeden hPa odpovídá 100 Pa. Je-li měřený
          tlak vyšší než výchozí odhad, oprava má odhad zvýšit. Velikost rozdílu
          však ještě neříká, jak daleko se k měření posuneme.{" "}
          <SourceLink id="WEB_ECMWF_Bouttier_Courtier_Assimilation">(kombinace dvou odhadů, oddíl 10)</SourceLink>
        </p>
        <p>
          K oběma hodnotám přiřadíme standardní nejistotu: míru možného
          rozptýlení chyby, vyjádřenou směrodatnou odchylkou. Symbol{" "}
          <InlineMath tex="u_b" /> patří výchozímu odhadu a <InlineMath tex="u_o" />{" "}
          měření, oba mají jednotku hPa. U měření zahrnujeme také to, nakolik
          místní podmínky zastupují prostor, který model dokáže popsat.
          Pro následující vztah předpokládáme odstranění soustavných posunů
          a vzájemně nekorelované chyby obou vstupů. To znamená, že jejich
          odchylky nemají společnou lineární vazbu.{" "}
          <SourceLink id="WEB_ECMWF_Bouttier_Courtier_Assimilation">(předpoklady a nejistoty vstupů, oddíly 10 a 11)</SourceLink>
        </p>
        <Equation tex={[
          String.raw`K=\frac{u_b^2}{u_b^2+u_o^2}`,
          String.raw`p_a=p_b+K(p_o-p_b)`,
        ]} />
        <p>
          Číslo <InlineMath tex="K" /> je váha opravy, bez jednotky.
          Výrazy <InlineMath tex="u_b^2" /> a <InlineMath tex="u_o^2" /> jsou
          druhé mocniny standardních nejistot, nazývané rozptyly. Mají jednotku
          hPa². Pokud je měření podstatně jistější než výchozí odhad, váha
          se blíží jedné a analýza se přiblíží měření. Pokud je jistější výchozí
          odhad, váha se blíží nule a oprava bude malá. Při stejných nejistotách
          leží výsledek uprostřed. Za uvedených předpokladů tato váha dává
          ze všech takových lineárních kombinací nejmenší střední čtverec chyby,
          tedy nejmenší očekávaný průměr chyb umocněných na druhou.{" "}
          <SourceLink id="WEB_ECMWF_Bouttier_Courtier_Assimilation">(odvození váhy)</SourceLink>
        </p>

        <h3>Soubor možných stavů přenese opravu do okolí</h3>
        <p>
          Skutečná reanalýza upravuje mnoho veličin na celé síti. Potřebuje
          proto vědět, které změny spolu souvisejí. V 20CRv3 běží vedle sebe
          <strong> 80 realizací</strong>, tedy 80 výpočtů s mírně odlišnými
          stavy a některými vstupy. Každá realizace představuje jeden možný
          průběh atmosféry, který se může lišit třeba polohou tlakové níže.
          Jejich průměr poskytuje společný odhad a jejich
          rozptýlení informaci o jeho nejistotě.{" "}
          <SourceLink id="DOI_10_1002_qj_3598">(soubor realizací 20CRv3)</SourceLink>
        </p>
        <p>
          V každé realizaci spočítáme tlak, který by model předpovídal na
          stanici. Potom sledujeme, jak se mezi realizacemi mění současně
          s tlakem, větrem nebo teplotou jinde. Tuto společnou proměnlivost
          popisuje <strong>kovariance</strong>. Kladná kovariance znamená,
          že vyšší hodnota jedné veličiny bývá spojena s vyšší hodnotou druhé.
          Záporná znamená opačný směr. Měření tak může opravit i jinou veličinu
          nebo jiné místo, pokud soubor modelových stavů ukazuje příslušnou
          vazbu.{" "}
          <SourceLink id="DOI_10_1175_Whitaker_2004_RWRUED">(využití kovariancí mezi realizacemi)</SourceLink>
        </p>
        <p>
          Zjištěné vazby nyní spojíme s rozdílem mezi měřením a předpovědí.
          Určují, kam a jak silně se oprava rozšíří. Její vliv se
          s rostoucí vzdáleností vhodně tlumí, aby malé množství realizací
          nepřenášelo náhodné souvislosti příliš daleko.{" "}
          <SourceLink id="DOI_10_1002_qj_3598">(dosah oprav)</SourceLink>
        </p>
        <p>
          Výpočet upraví společný průměr i rozptýlení souboru. Realizace se
          neposunou všechny stejně. Přiblíží se v těch směrech, které měření
          zpřesnilo, a zároveň se posune jejich společný střed. Tento postup
          patří mezi <strong>souborové Kalmanovy filtry</strong>. V 20CRv3 se opravy
          zavádějí postupně během dalšího výpočtu vývoje atmosféry. Tím se
          tlak, vítr a ostatní veličiny mohou společně přizpůsobovat fyzikálním
          vztahům v modelu.{" "}
          <SourceLink id="DOI_10_1002_qj_3598">(prostorový dosah oprav a jejich postupné zavádění)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/methods/reanalysis/assimilation-cycle.svg" alt="Cyklus asimilace: krátká předpověď, modelový tlak na stanici, porovnání s měřením, úprava atmosféry a pokračování do dalšího času." width={640} height={910} />
          <figcaption>
            Šipky ukazují návaznost kroků. Měření opravuje krátkou předpověď
            v odpovídajícím čase. Vztahy mezi realizacemi určují i změny dalších
            veličin. Upravený soubor stavů je výchozím bodem dalšího cyklu.
            Vlastní schéma podle metodiky 20CRv3.{" "}
            <SourceLink id="DOI_10_1002_qj_3598">(popis postupu)</SourceLink>
          </figcaption>
        </figure>

        <h3>Opakované cykly vytvoří souvislý záznam</h3>
        <p>
          Hotová 20CRv3 pokrývá roky <strong>1836–2015</strong>, s experimentálním
          prodloužením pro roky <strong>1806–1835</strong>. Ukládá údaje po třech
          hodinách. Veřejný výstup použitý níže je převeden na pravidelnou síť
          s rozestupem 1° zeměpisné šířky a délky. Každému bodu a času lze
          přiřadit například tlak a jeho rozptýlení mezi realizacemi. Z těchto
          polí lze sledovat pohyb tlakových níží a proudění vzduchu.
          Srážky vznikají výpočtem tvorby a vypadávání vody z oblaků v modelu.{" "}
          <SourceLink id="DOI_10_1175_JCLI_D_20_0505_1">(časový rozsah a klimatologické použití)</SourceLink>{" "}
          <SourceLink id="DATA_NOAA_20CRv3_Pressure_1888">(výstupní síť a jednotky)</SourceLink>
        </p>
        <p>
          Pravidelný záznam umožňuje počítat četnost bouří, průměrné proudění
          nebo teplotní poměry jednotlivých období. U stejně vzdálených
          časových okamžiků získáme jejich průměr součtem hodnot a dělením
          jejich počtem. Pro průměr území potřebujeme zohlednit plochy, které
          jednotlivé části sítě zastupují. Navazují na to metody{" "}
          <Link href="/metody/prostorove-zpracovani-a-plosne-prumery">plošného průměrování</Link>{" "}
          a <Link href="/metody/analyza-casovych-zmen-a-extremu">analýzy časových změn</Link>.
          Reanalýza tím spojuje jednotlivé historické záznamy s popisem
          atmosférické cirkulace, tedy uspořádání a proměn proudění vzduchu.{" "}
          <SourceLink id="DOI_10_1175_JCLI_D_20_0505_1">(vyhodnocení počasí a dlouhodobé proměnlivosti)</SourceLink>
        </p>

        <h3>Vývoj a další provedení</h3>
        <p>
          Matematický základ průběžného opravování odhadu rozpracoval
          Rudolf E. Kalman v roce 1960. Jeho postup umožnil vypočítat nový
          odhad stavu i jeho nejistotu z předchozího odhadu a nových měření.
          Pozdější souborová provedení odhadují potřebné vztahy chyb
          z rozdílů mezi realizacemi.{" "}
          <SourceLink id="DOI_10_1115_1_3662552">(Kalmanova původní práce)</SourceLink>{" "}
          <SourceLink id="DOI_10_1175_Whitaker_2004_RWRUED">(souborové provedení)</SourceLink>
        </p>
        <p>
          Praktickou možnost historické reanalýzy založené jen na přízemním
          tlaku ověřili Whitaker a kolegové v roce 2004. Měření z roku 2001
          zředili na síť podobnou tehdy očekávané dostupnosti údajů z roku 1915.
          Souborový filtr rekonstruoval výšková pole severní polokoule lépe
          než porovnávané postupy s pevně stanovenými prostorovými vztahy chyb.
          Pozdější 20CR tuto cestu rozvinula do dlouhodobého záznamu. Popis
          třetí verze z roku 2019 doložil zlepšení modelu, práce s měřeními
          i odhadů nejistoty.{" "}
          <SourceLink id="DOI_10_1175_Whitaker_2004_RWRUED">(původní experiment)</SourceLink>{" "}
          <SourceLink id="DOI_10_1002_qj_3598">(vývoj verze 3)</SourceLink>
        </p>
        <h3 id="era5">Jak pracuje reanalýza ERA5</h3>
        <p>
          Jinou významnou variantou je <strong>čtyřrozměrná variační asimilace</strong>,
          zkráceně 4D-Var. Hledá takovou úpravu výchozího stavu, aby následný
          vývoj modelu co nejlépe souhlasil s měřeními v celém časovém okně.
          Současně zohledňuje nejistotu výchozího stavu i jednotlivých měření.
          Čtyři rozměry zde znamenají tři prostorové souřadnice a čas.
          Postup používá ERA5 v oknech dlouhých 12 hodin a zapojuje mimo jiné
          pozemní stanice, radiosondy a družicová měření záření.{" "}
          <SourceLink id="WEB_ECMWF_ERA5_Data_Documentation">(4D-Var a vstupy ERA5)</SourceLink>
        </p>
        <p>
          ERA5 poskytuje od ledna 1940 hodinový popis atmosféry. Běžně dostupná
          atmosférická data jsou na síti 0,25° × 0,25°. Její plošně průměrovaná
          teplota vzduchu je jedním z podkladů článku o{" "}
          <Link href="/pozorovani/gmst/#srovnani-dat">globální povrchové teplotě</Link>.
          Asimilace se používá také v modelech oceánu a pevniny, kde pomáhá
          určovat například teplotu a slanost vody nebo půdní vlhkost.
          Společný je princip průběžné opravy modelového stavu dostupnými
          pozorováními.{" "}
          <SourceLink id="WEB_Copernicus_ERA5_hourly_data_on_single_levels_from_1940_to_p_7e4f50d4">(rozsah dat ERA5)</SourceLink>{" "}
          <SourceLink id="WEB_ECMWF_Data_Assimilation">(oceán a pevninský povrch)</SourceLink>
        </p>
        <p>
          Souvislé pokrytí ERA5 pomáhá také při
          <Link href="/pozorovani/narust-vlhkosti/#srovnani-s-reanalyzou"> porovnání záznamů vlhkosti</Link>.
          Výpočet lze omezit na stejná místa, která pokrývají stanice,
          a porovnat jej s výsledkem za celou oblast.
          Hodinové teploty se využívají i při zkoumání
          <Link href="/pozorovani/vlny-veder/#era5"> vln veder</Link>.
          V obou případech je podkladem rekonstrukce spojující model
          s pozorováními.{" "}
          <SourceLink id="DOI_10_1029_2022jd036728">(Allan a kol. 2022, vlhkost a pokrytí)</SourceLink>{" "}
          <SourceLink id="DOI_10_1002_qj_3803">(Hersbach a kol. 2020, údaje ERA5)</SourceLink>
        </p>

        <h3 id="ocean">Reanalýza oceánu</h3>
        <p>
          V oceánu propojuje fyzikální model teplotu a salinitu vody s jejím
          prouděním. Reanalýza GLORYS12 do tohoto modelu společně zapojuje
          měřené teplotní a salinitní profily, družicovou teplotu povrchu,
          odchylky výšky hladiny a podíl mořského ledu.
          Každých sedm dní upraví modelový stav podle nových měření.
          Využívá přitom variantu Kalmanova filtru, který rozděluje opravu
          mezi související veličiny a místa v oceánu.{" "}
          <SourceLink id="DOI_10_3389_feart_2021_698876">(Lellouche a kol. 2021, popis systému)</SourceLink>
        </p>
        <p>
          Výsledkem jsou navazující trojrozměrná pole, z nichž lze vypočítat
          také obsah tepla v určené vrstvě. GLORYS12 zde ukazuje konkrétní
          provedení oceánské reanalýzy. Porovnání různých rekonstrukcí
          rozebírá pozorování <Link href="/pozorovani/tepelny-obsah-oceanu/#srovnani">obsahu tepla v oceánu</Link>.
          Reanalýzy a rekonstrukce založené přímo na profilech mohou sdílet
          část vstupních měření, i když je prostorově propojují odlišným způsobem.{" "}
          <SourceLink id="DOI_10_3389_feart_2021_698876">(vstupy a vyhodnocení GLORYS12)</SourceLink>
        </p>

        <h3 id="piomas">Modelový záznam objemu mořského ledu</h3>
        <p>
          Systém PIOMAS spojuje model oceánu s modelem mořského ledu.
          Počítá růst, tání a pohyb ledu i změny rozdělení jeho tloušťky.
          Působení počasí dodává atmosférická reanalýza, například prostřednictvím
          větru, teploty vzduchu a záření. Družicová koncentrace ledu umožňuje
          průběžně upravovat jeho modelované pokrytí. Varianta popsaná
          Schweigerem a kolegy zapojuje také teplotu mořského povrchu.{" "}
          <SourceLink id="DOI_10_1029_2011jc007084">(Schweiger a kol. 2011, oddíl 2.1)</SourceLink>
        </p>
        <p>
          Objem vzniká součtem ledu v jednotlivých buňkách modelu.
          Jeho tloušťka vychází z vypočteného vývoje, zatímco dostupná
          pozorování omezují možné stavy systému. Vzniká tak souvislá řada
          i pro období bez celoplošného měření tloušťky.
          Porovnání s družicovými výškoměry a místními měřeními rozebírá
          pozorování <Link href="/pozorovani/ubytek-arktickeho-ledu/#objem">objemu arktického mořského ledu</Link>.{" "}
          <SourceLink id="DOI_10_1029_2011jc007084">(Schweiger a kol. 2011, vyhodnocení PIOMAS)</SourceLink>
        </p>

        <h2>Nejistoty a ověření reanalýzy</h2>
        <p>
          Výsledek závisí na dostupnosti měření, jejich chybách i schopnosti
          modelu popsat sledované děje. Rozptýlení realizací zachycuje část
          těchto nejistot, společná chyba všech realizací v něm může chybět.
          Slivinski a kolegové ověřili 20CRv3 také proti výškovým měřením,
          která se do ní neasimilovala. Pro Lindenberg v Německu lépe vystihla
          proměny výšky tlakové hladiny než předchozí verze 20CRv2c.
          Takové porovnání dokládá, že přízemní tlak může prostřednictvím
          modelu poskytovat užitečnou informaci i o atmosféře nad povrchem.{" "}
          <SourceLink id="DOI_10_1175_JCLI_D_20_0505_1">(nezávislá výšková měření, oddíl 3d)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Co omezuje přesnost a jak byla kontrolována</summary>
          <p>
            Pozorovací síť se v čase mění. Přestože reanalýza používá sjednocený
            systém, přibývající stanice nebo družicové přístroje mohou měnit
            její vlastnosti. Dlouhodobé trendy proto porovnáváme také se
            staničními soubory a jinými postupy. Rozdílné reanalýzy často
            sdílejí měření, takže jejich shoda není plně nezávislou kontrolou.
            Některé části 20CR jsou přímo určeny převzatými údaji, například
            teplotou mořského povrchu. Také dobové meteorologické mapy mohou
            sdílet tlakové údaje s reanalýzou, a jejich porovnání proto
            nepředstavuje zcela nezávislé ověření.{" "}
            <SourceLink id="DOI_10_1175_JCLI_D_20_0505_1">(porovnání a společné vstupy)</SourceLink>
          </p>
          <p>
            Soubor 80 realizací zachycuje jen omezený výběr možných stavů.
            20CRv3 proto upravuje jeho rozptýlení také podle zjišťovaných
            rozdílů mezi předpovědí a měřeními. Nejistota měřeného tlaku
            zahrnuje chybu přístroje i rozdíl mezi místními podmínkami
            a jejich modelovým zastoupením. Výstupní rozestup 1° je vlastnost
            sítě, nikoli doklad přesnosti nebo schopnosti rozlišit všechny
            místní jevy. Srážky a další veličiny, které 20CR přímo neasimiluje,
            jsou výrazně závislé na modelovém popisu dějů.{" "}
            <SourceLink id="DOI_10_1002_qj_3598">(úpravy rozptylu a modelové vlivy)</SourceLink>
          </p>
          <p>
            Kontrola v Lindenbergu porovnávala mimo jiné výšku, ve které
            tlak klesá na 500 hPa. Její proměny pomáhají popsat proudění
            ve střední části troposféry, nejnižší vrstvy atmosféry. Pozorování z výškových sondáží do
            20CR nevstupují, a poskytují tak ověření jiným druhem měření.
            Novější verze měla vůči nim menší odchylky a vyšší korelace.
            Její rozptyl lépe odpovídal chybám v letech 1952–1980, v letech
            1981–2001 však byl v tomto porovnání spíše příliš velký.
            Autoři proto doložili zlepšení i jeho konkrétní meze. U nejstarších
            výškových záznamů brání pevnému posouzení menší počet pozorování
            a nejistota tehdejších přístrojů.{" "}
            <SourceLink id="DOI_10_1175_JCLI_D_20_0505_1">(obrázky 7 a 8 a jejich vyhodnocení)</SourceLink>
          </p>
          <p>
            Směrodatnou odchylku realizací v konkrétním čase čteme jako míru
            jejich rozptýlení. Samotné pásmo jedné směrodatné odchylky
            není 95% interval. Nejistotu průměru několika časů navíc
            ovlivňuje souvislost chyb mezi nimi, kterou nelze zjistit
            ze samotné tabulky jednotlivých směrodatných odchylek.
            Tento vztah vysvětluje článek o{" "}
            <Link href="/metody/vycisleni-a-prenos-nejistoty">přenosu nejistoty</Link>.
          </p>
        </details>

        <h2>Příklad tlaku u New Yorku v březnu 1888</h2>
        <p>
          Během velké sněhové bouře v březnu 1888 zasáhla severovýchod Spojených
          států výrazná tlaková níže. Vyhodnocení 20CRv3 porovnalo její
          rekonstruovanou polohu také s dobovými meteorologickými mapami.
          Pro vlastní výpočet vybereme bod <strong>41° s. š., 74° z. d.</strong>,
          poblíž New Yorku, a období od 10. března 00 UTC do 15. března 21 UTC.
          UTC je jednotný světový čas, kterým sladíme všechny záznamy.{" "}
          <SourceLink id="DOI_10_1175_JCLI_D_20_0505_1">(rekonstrukce bouře, oddíl 3a)</SourceLink>
        </p>
        <p>
          Začínáme u veřejně dostupného výstupu reanalýzy, tedy u již
          zpracovaného průměru 80 realizací a jejich směrodatné odchylky.
          Vybereme <strong>48 hodnot po třech hodinách</strong>. Jde o tlak
          přepočtený na hladinu moře, který umožňuje porovnávat oblasti
          s rozdílnou výškou povrchu. V původních souborech je v Pa,
          proto každou hodnotu vydělíme 100 a získáme hPa. Totéž provedeme
          se směrodatnou odchylkou.{" "}
          <SourceLink id="DATA_NOAA_20CRv3_Pressure_1888">(původní data a metadata proměnné prmsl)</SourceLink>
        </p>
        <p>
          Dne 13. března ve 12 UTC vychází tlak <strong>1 001,84 hPa</strong>
          a směrodatná odchylka realizací <strong>3,57 hPa</strong>.
          Graf ukazuje celý vybraný průběh. Zelená čára je průměr realizací
          a světlejší pás sahá o jednu jejich směrodatnou odchylku na každou
          stranu. V tomto bodě klesne čára nejníže 13. března ve 21 UTC,
          na <strong>999,60 hPa</strong>. Výsledek popisuje vybrané místo,
          nikoli nejnižší tlak v centru celé bouře.
        </p>
        <figure className="article-figure">
          <Image src="/media/methods/reanalysis/new-york-pressure.svg" alt="Rekonstruovaný tlak u New Yorku 10.–15. března 1888 klesá z hodnot nad 1 030 hPa k minimu 999,60 hPa dne 13. března ve 21 UTC a potom opět roste." width={700} height={650} />
          <figcaption>
            Vodorovná osa udává čas, svislá tlak na hladině moře v hPa.
            Pásmo zobrazuje rozptýlení 80 modelových realizací.
            Vlastní graf z veřejných dat NOAA Physical Sciences Laboratory,
            20CRv3si, stažených 31. října 2026.{" "}
            <SourceLink id="DATA_NOAA_20CRv3_Pressure_1888">(veřejná data)</SourceLink>
          </figcaption>
        </figure>
        <p>
          Pro průměr osmi pravidelných okamžiků dne 13. března sečteme hodnoty
          z tabulky a vydělíme je osmi. Výpočet používá plné dostupné hodnoty,
          tabulka je pro čtení zaokrouhluje na dvě desetinná místa.
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap">
            <table>
              <caption>Tlak na hladině moře v bodě 41° s. š., 74° z. d., 13. března 1888</caption>
              <thead><tr><th scope="col">Čas UTC</th><th scope="col">Průměr realizací (hPa)</th></tr></thead>
              <tbody>
                <tr><td>00:00</td><td>1 008,02</td></tr>
                <tr><td>03:00</td><td>1 007,67</td></tr>
                <tr><td>06:00</td><td>1 005,21</td></tr>
                <tr><td>09:00</td><td>1 002,26</td></tr>
                <tr><td>12:00</td><td>1 001,84</td></tr>
                <tr><td>15:00</td><td>1 000,31</td></tr>
                <tr><td>18:00</td><td>999,79</td></tr>
                <tr><td>21:00</td><td>999,60</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <Equation tex={String.raw`\overline{p}=\frac{8\,024{,}6989}{8}\ \mathrm{hPa}\doteq1\,003{,}09\ \mathrm{hPa}`} />
        <p>
          Symbol <InlineMath tex={String.raw`\overline{p}`} /> označuje časový
          průměr. Výsledek <strong>1 003,09 hPa</strong> shrnuje osm stavů
          během dne, zatímco minimum ukazuje nejnižší z vybraných okamžiků.
          Stejnými operacemi lze zpracovat další body nebo období.
          Malý příklad tak ukazuje, jak se ze souvislého výstupu reanalýzy
          získá údaj o konkrétní události.
        </p>
        <details className="method-details">
          <summary>Data a postup pro zopakování</summary>
          <p>
            Použita je proměnná <code>prmsl</code> ze souborů
            <code> prmsl.1888.nc</code>, větve průměrů a směrodatných odchylek
            20CRv3si. Přesné dotazy serveru, časové indexy, souřadnice,
            jednotky a kontrolní součty jsou v popisu původu dat.
            Přiložený skript používá pouze standardní knihovnu Pythonu 3.10
            nebo novějšího. Ověří vstupní souřadnice, převede jednotky
            a znovu vypočítá tabulku, průměr i minimum.
          </p>
          <ul>
            <li><a href="/data/methods/reanalysis/README.txt">Návod a rozsah příkladu</a></li>
            <li><a href="/data/methods/reanalysis/mean-original.txt">Původní odpověď serveru s průměry</a>{" a "}<a href="/data/methods/reanalysis/spread-original.txt">se směrodatnými odchylkami</a></li>
            <li><a href="/data/methods/reanalysis/pressure.csv">Tabulka všech 48 okamžiků</a>{" a "}<a href="/data/methods/reanalysis/results.json">výsledky výpočtu</a></li>
            <li><a href="/data/methods/reanalysis/provenance.json">Přesný původ dat</a>{" a "}<a href="/data/methods/reanalysis/reproduce.py">ověřovací skript</a></li>
          </ul>
          <p>
            Příklad neopakuje běh atmosférického modelu a asimilaci historických
            měření. Tyto předchozí kroky popisují metodické práce citované
            v hlavním výkladu. Vyhodnocujeme veřejný produkt, který z nich vznikl.
          </p>
        </details>
        <details className="method-details">
          <summary>Doplňková ilustrace váhy jednoho měření</summary>
          <p>
            Pro samotný vztah z hlavního výkladu použijeme vytvořené učební
            hodnoty. Výchozí tlak je 1 000 hPa se standardní nejistotou 2 hPa,
            měřený tlak 1 004 hPa se standardní nejistotou 1 hPa.
            Předpokládáme nekorelované chyby bez soustavného posunu.
            Váha měření vyjde 4 / (4 + 1) = 0,8. Analýza proto přičte
            0,8násobek rozdílu 4 hPa k výchozí hodnotě a poskytne
            <strong> 1 003,2 hPa</strong>. Tyto vstupy slouží pouze k vysvětlení
            výpočtu, nejsou součástí historických dat NOAA.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Asimilace využívá měření k průběžné opravě fyzikálního modelu.
            Nejistoty určují váhu opravy a vztahy mezi veličinami rozvádějí
            její vliv do dalších částí atmosféry. Opakováním v čase vzniká
            reanalýza, ze které můžeme sledovat vývoj počasí i proměny klimatu.
          </p>
          <p>
            Metoda umožňuje rekonstruovat tlak, teplotu, vítr a vlhkost,
            zkoumat bouře a dlouhodobé proudění. V oceánských a pevninských
            modelech pomáhá určovat také teplotu a slanost vody či půdní
            vlhkost. Konkrétní 20CRv3 nabízí tříhodinový záznam pro roky
            <strong> 1836–2015</strong> a experimentálně <strong>1806–1835</strong>.
            ERA5 poskytuje hodinová atmosférická data od <strong>1. ledna 1940</strong>,
            běžně na síti <strong>0,25° × 0,25°</strong>.{" "}
            <SourceLink id="DOI_10_1175_JCLI_D_20_0505_1">(rozsah 20CRv3)</SourceLink>{" "}
            <SourceLink id="WEB_Copernicus_ERA5_hourly_data_on_single_levels_from_1940_to_p_7e4f50d4">(rozsah ERA5)</SourceLink>{" "}
            <SourceLink id="WEB_ECMWF_Data_Assimilation">(další použití)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
