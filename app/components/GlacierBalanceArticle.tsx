import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import { Equation, InlineMath } from "./Equation";
import example from "../../public/data/methods/glacier-balance/example.json";

const dataPath = "/data/methods/glacier-balance";
const number = (value: number, digits = 3) => value.toLocaleString("cs-CZ", { maximumFractionDigits: digits });

export function GlacierBalanceArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak změříme přírůstek a úbytek na povrchu ledovce</h2>
        <p className="article-prose__intro">
          Terénní měření bilance ledovce zjišťuje, kolik sněhu a ledu na jeho povrchu za určenou dobu
          přibylo nebo ubylo. Výsledkem je změna hmotnosti na jednotku plochy. K jejímu určení potřebujeme
          změřit tloušťku přidané či ztracené vrstvy a znát její hustotu. Na horském ledovci k tomu
          slouží především tyče ukotvené v ledu, sněhové sondy a odběry sněhu.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíly 3.7–3.9)</SourceLink>
        </p>
        <p>
          Sníh na ledovec přinášejí srážky, vítr i laviny. Takovému přírůstku hmotnosti říkáme
          <strong> akumulace</strong>. Úbytek, označovaný jako <strong>ablace</strong>, vzniká zejména
          táním s odtokem vody. Led může ubývat také sublimací, tedy přímým přechodem na vodní páru.
          Bilance vyjadřuje výslednou změnu za celé sledované období. Kladná hodnota znamená, že
          hmotnosti přibylo, záporná, že ubylo.
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_glosar_UNESCO_a_WGMS_06fc9a79"> Cogley et al., 2011</SourceLink>
        </p>

        <h3>Měřicí tyč zachytí úbytek ledu</h3>
        <p>
          Mechanickou nebo parní vrtačkou se do ledovce vyhloubí otvor a zasune se do něj měřicí tyč.
          Spodní část tyče drží v ledu, horní vyčnívá nad povrch. Když okolní led odtaje, odkrytá část
          se prodlouží. Tyč tak uchovává značku, vůči níž můžeme při další návštěvě určit úbytek vrstvy.
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO, 2024, oddíl 3.8</SourceLink>
        </p>
        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/mountain-glaciers/usgs-ablation-stake.jpg"
            alt="Měřicí tyč vyčnívá z holého ledu na Wolverine Glacier na Aljašce, vedle ní stojí výzkumník s přenosnou parní vrtačkou."
            width={4032}
            height={3024}
            sizes="(max-width: 900px) 100vw, 900px"
            unoptimized
          />
          <figcaption>
            Měřicí tyč vedle výzkumníka na Wolverine Glacier na Aljašce. Na začátku léta byla pod sněhem,
            na podzim vyčnívá nad holý led. Přenosná parní vrtačka slouží k hloubení otvorů pro tyče.
            Foto: Emily Baker, USGS. Licence: volné dílo.
            <SourceLink id="WEB_U_S_Geological_Survey_Ablation_Stake_on_Wolverine_Glacier_276f80c5"> Původní snímek a popis USGS</SourceLink>
          </figcaption>
        </figure>
        <p>
          Při každé návštěvě změříme vzdálenost od stejné značky na tyči k povrchu ledu. Několik odečtů
          z různých stran popíše jeho nerovné okolí. Měřicí pásmo přitom porovnáváme se známou referenční
          délkou. Tato kalibrace určuje vztah mezi údajem stupnice a skutečnou délkou včetně nejistoty.
          Navazující kalibrace referencí propojují měření s jednotkou metr.
          <SourceLink id="2012_VIM_Calibration"> VIM, 2012</SourceLink>{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 3.8)</SourceLink>
        </p>
        <p>
          Tyč se pohybuje spolu s ledem, ve kterém drží. Při odečtu nás zajímá právě změna povrchu vůči
          tomuto ledu. Nadmořská výška povrchu se může měnit také tím, že do místa přitéká led z vyšších
          částí ledovce a dále se deformuje a odtéká. Odečet u tyče odděluje úbytek povrchové vrstvy od
          tohoto pohybu celého tělesa. Polohu tyčí proto průběžně zaměřujeme a jejich rozmístění
          obnovujeme podle pohybu ledovce.
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_glosar_UNESCO_a_WGMS_06fc9a79"> Cogley et al., 2011</SourceLink>
        </p>

        <h3>Tloušťku ledu převedeme na hmotnost</h3>
        <p>
          Z rozdílu dvou odečtů známe tloušťku vrstvy, která odtála. Představme si ji nad plochou jednoho
          metru čtverečního. Součin této plochy a tloušťky dává objem ztraceného ledu. Hustota říká,
          kolik kilogramů připadá na metr krychlový, takže vynásobením objemu hustotou získáme jeho
          hmotnost. Na jednotku plochy tedy připadá úbytek rovný součinu tloušťky a hustoty.
        </p>
        <p>
          Hmotnost sněhu i ledu se běžně vyjadřuje pomocí <strong>vodního ekvivalentu</strong>.
          Je to výška vrstvy vody, která by měla nad stejnou plochou stejnou hmotnost jako sledovaný
          sníh nebo led. Hmotnost na metr čtvereční proto vydělíme referenční hustotou vody
          1 000 kg/m³. Jeden metr vodního ekvivalentu tak odpovídá 1 000 kg/m² a jeden milimetr 1 kg/m².
          Tím získáme společné vyjádření pro materiály s různou hustotou.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_glosar_UNESCO_a_WGMS_06fc9a79">(Cogley a kol., oddíl 7.2.2)</SourceLink>
        </p>
        <p>
          U svislé, pevně ukotvené tyče označíme odkrytou délku při první návštěvě jako{" "}
          <InlineMath tex={String.raw`l_1`} /> a při druhé jako <InlineMath tex={String.raw`l_2`} />.
          Jejich rozdíl vyjadřuje tloušťku odtátého ledu. Protože větší odkrytí znamená ztrátu,
          přidáme před rozdíl záporné znaménko. Převod na vodní ekvivalent pak zapíšeme:
        </p>
        <Equation tex={String.raw`b = -(l_2-l_1)\frac{\rho_i}{\rho_w}`} />
        <p>
          <InlineMath tex={String.raw`b`} /> je bilance bodu v metrech vodního ekvivalentu.
          Obě délky zadáváme v metrech, hustotu ledu <InlineMath tex={String.raw`\rho_i`} /> a vody{" "}
          <InlineMath tex={String.raw`\rho_w`} /> v kg/m³. Pro kompaktní led se ve švýcarských měřeních
          používá odhad hustoty 900 kg/m³. Hustotu sněhu a firnu určujeme zvlášť podle jejich vlastností.
          <SourceLink id="DOI_10_5194_essd_14_3293_2022"> Geibel et al., 2022</SourceLink>
        </p>

        <h3>U sněhu změříme vrstvu nad loňským povrchem</h3>
        <p>
          Zimní přírůstek zjišťujeme na jaře ze sněhu, který leží nad povrchem z konce předchozího léta.
          Ve spodní části ledovce bývá tímto rozhraním holý led. Výše pod novým sněhem leží
          <strong> firn</strong>, starší sníh, který už přečkal sezonu tání. Sondou změříme svislou
          tloušťku nového sněhu až k tomuto rozhraní. Sněhová jáma nebo odvrtané jádro umožní vrstvy
          prohlédnout a loňský povrch určit.
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO, 2024, oddíl 3.7</SourceLink>
        </p>
        <p>
          Sníh se během zimy vlastní vahou stlačuje. Při zachované hmotnosti proto může být nižší
          a hustší. Pro určení jeho hmotnosti potřebujeme vedle tloušťky také hustotu. Z jednotlivých
          vrstev odebereme známý objem a zvážíme jej. Po odečtení hmotnosti prázdného odběráku zbude
          hmotnost sněhu, kterou vydělíme odebraným objemem. Tak získáme hustotu každé vrstvy.
          <SourceLink id="DOI_10_5194_essd_14_3293_2022"> Geibel et al., 2022, oddíl 2.3</SourceLink>
        </p>
        <p>
          Váhu kalibrujeme pomocí referenčních závaží a samostatně ověřujeme objem odběráku.
          Závaží mají doloženou návaznost na jednotku kilogram. Kalibrace popisuje vztah mezi údajem
          váhy a hmotností, zatímco případné seřízení mění její odezvu.
          <SourceLink id="2012_VIM_Calibration"> VIM, 2012</SourceLink>{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 2.4.1.2)</SourceLink>
        </p>
        <p>
          Hustotu každé vrstvy násobíme její tloušťkou. Tím dostaneme hmotnost sněhu nad jednotkou
          plochy, stejně jako předtím u ledu. Příspěvky všech vrstev sečteme a vydělením hustotou vody
          získáme vodní ekvivalent zimního přírůstku. Na konci léta stejným postupem určíme, kolik
          letošního sněhu zůstalo. Podrobnosti odběru a převodu rozvádí článek o
          <Link href="/metody/mereni-vysky-hustoty-a-vodni-hodnoty-snehu"> měření sněhu</Link>.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 3.7)</SourceLink>
        </p>

        <h3>Měření spojíme do sezon a let</h3>
        <p>
          Jarní měření zachytí zimní hromadění sněhu, podzimní měření stav po letním tání.
          Jejich propojením rozlišíme zimní přírůstek a letní změnu, obvykle úbytek. Součet těchto
          dvou složek dává roční bilanci. Každý odečet proto patří k určitému místu a datu.
          V zápisu jej doprovází označení bodu, poloha a druh povrchu, podle kterého volíme převod
          tloušťky na hmotnost.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_glosar_UNESCO_a_WGMS_06fc9a79">(Cogley a kol., sezonní a roční bilance)</SourceLink>
        </p>
        <p>
          Výsledek lze vztáhnout ke skutečným dnům návštěv, nebo k pevně vymezenému období.
          Ve švýcarských přehledech se používá také hydrologický rok od 1. října do 30. září.
          Návštěvy obvykle připadají na jiná data. Pro převod na tento rok se proto výpočtem doplní
          sněžení a tání mezi návštěvou a hranicí období. GLAMOS, švýcarská síť sledování ledovců,
          zveřejňuje bilance za skutečná i pevná data odděleně.
          <SourceLink id="DOI_10_18750_massbalance_2021_r2021"> GLAMOS, 2021</SourceLink>
        </p>

        <h3>Bilanci určíme pro celou plochu</h3>
        <p>
          Dosud máme změnu hmotnosti v jednotlivých místech. Pro celý ledovec potřebujeme zjistit,
          jakou plochu jejich hodnoty zastupují. Tyče a sněhová měření se proto rozmísťují do různých
          nadmořských výšek, na různě orientované svahy i do míst s odlišným ukládáním sněhu.
          Takto sestavená síť poskytne podklady také pro odhad v plochách mezi měřicími body.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, oddíl 3.9)</SourceLink>
        </p>
        <p>
          Jednou z možností je rozdělit ledovec na výšková pásma a určit průměrnou bilanci každého
          z nich. Plochu pásma známe z obrysu ledovce a mapy výšek. Odhad bilance vychází z terénních
          bodů a popisu změn mezi nimi. Příručka WMO uvádí tento postup spolu s mapováním čar stejné
          bilance a s prostorovými výpočetními modely.
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO, 2024, oddíl 3.9</SourceLink>
        </p>
        <p>
          Švýcarský postup popsaný Hussem a spoluautory počítá hromadění sněhu a tání po dnech.
          Využívá teplotu a srážky, přičemž zohledňuje nadmořskou výšku a rozdíly slunečního ozáření.
          Parametry určující množství sněhu a intenzitu tání se pro každý rok nastavují podle
          dostupných terénních měření. Model pak dopočítá změny mezi tyčemi i nad nejvyšším měřeným
          bodem. Výsledkem je odhad rozložení bilance po celé ploše.
          <SourceLink id="DOI_10_3189_2015jog15j015"> Huss et al., 2015</SourceLink>
        </p>
        <p>
          Při sestavení průměru celého ledovce mají větší pásma větší váhu. Bilanci každého pásma
          proto násobíme jeho plochou. Tím získáme příspěvek tohoto pásma k celkové změně. Příspěvky
          sečteme a vydělíme plochou celého ledovce, abychom výsledek opět vyjádřili na jednotku plochy:
        </p>
        <Equation tex={String.raw`B = \frac{\sum_j A_j b_j}{\sum_j A_j}`} />
        <p>
          <InlineMath tex={String.raw`B`} /> je průměrná bilance celého povrchu,{" "}
          <InlineMath tex={String.raw`b_j`} /> bilance pásma označeného číslem{" "}
          <InlineMath tex={String.raw`j`} /> a <InlineMath tex={String.raw`A_j`} /> jeho vodorovná mapová
          plocha. Znak <InlineMath tex={String.raw`\sum`} /> znamená součet přes všechna pásma.
          Plochy zadáme ve stejné jednotce, například km², a bilance v metrech vodního ekvivalentu.
          Ve stejných metrech pak vyjde i celkový průměr.
          <SourceLink id="DOI_10_5194_tc_7_1227_2013"> Zemp et al., 2013, rovnice 7 a 8</SourceLink>
        </p>
        <p>
          U ustupujícího ledovce aktualizujeme také jeho obrys a plochy pásem. Výsledek pak popisuje
          povrch, který ledovec v daném období skutečně měl. Výpočet pro stále stejný referenční
          tvar ledovce slouží jiné otázce: jak by se bilance měnila při neměnné geometrii.
          Obě varianty proto rozlišujeme.
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_glosar_UNESCO_a_WGMS_06fc9a79"> Cogley et al., 2011</SourceLink>
        </p>

        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Postup určení bilance ledovce">
            <div><span>1</span><strong>Změřit vrstvy</strong><small>Odečty tyčí a sond určí úbytek ledu a přírůstek sněhu.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Určit hmotnost</strong><small>Tloušťka a hustota dají bilanci bodu ve vodním ekvivalentu.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Doplnit neměřená místa</strong><small>Síť bodů a prostorový výpočet poskytnou bilanci jednotlivých pásem.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Zohlednit plochy</strong><small>Průměrná bilance ledovce zahrne každé pásmo podle jeho velikosti.</small></div>
          </div>
          <figcaption>
            Postup pro společné sledované období. První dva kroky poskytují místní výsledky,
            další dva je propojují v odhad pro celý ledovec. Vlastní schéma podle
            <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO, 2024, kapitoly 3</SourceLink>.
          </figcaption>
        </figure>

        <h3>Co se z dlouhého záznamu dozvíme</h3>
        <p>
          Opakováním měření vzniká řada, která ukazuje, ve kterých letech ledovec získával nebo ztrácel
          hmotnost. Zimní a letní složka umožňují rozlišit, kdy tato změna vznikla. Huss a spoluautoři
          tak sestavili nebo znovu vyhodnotili 19 dlouhých sezonních záznamů ze švýcarských Alp.
          Sjednotili starší zápisy, různá data návštěv i měnící se plochu. K vysvětlení příčin změn
          pak slouží spojení bilancí s údaji o počasí a s fyzikálním popisem hromadění sněhu a tání.
          <SourceLink id="DOI_10_3189_2015jog15j015"> Huss et al., 2015</SourceLink>
        </p>
        <p>
          Na větších územích doplňují terénní záznamy letecké a družicové mapy výšky povrchu.
          Rozdílem dvou map zjistíme změny výšky, z nich a z příslušných ploch změnu objemu ledovce.
          Po převodu pomocí odhadu hustoty dostaneme změnu hmotnosti. Tomuto výsledku říkáme
          <strong> geodetická bilance</strong>. Mapování pokrývá i ledovce bez terénních návštěv,
          zatímco tyče a měření sněhu přidávají podrobnosti o místních a sezonních změnách.
          Postup rozvádí <Link href="/metody/fotogrammetrie-a-porovnavani-vyskovych-modelu">fotogrammetrie a porovnávání výškových modelů</Link>.
          <SourceLink id="DOI_10_5194_tc_7_1227_2013"> Zemp et al., 2013</SourceLink>
        </p>
        <p>
          Tyto záznamy jsou jedním z podkladů pozorování <Link href="/pozorovani/ustup-ledovcu">horských ledovců</Link>.
          Stejný princip terénních odečtů se uplatňuje také při sledování povrchu
          <Link href="/pozorovani/nestabilita-prikrovu"> ledových příkrovů</Link>.{" "}
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, kapitola 3)</SourceLink>
        </p>

        <h3>Historie měření a provedení tyčí</h3>
        <p>
          Dlouhé terénní řady vznikaly už před družicovým mapováním. Valter Schytt roku 1962 popsal
          šestnáct let měření švédského Storglaciären, zahájených v zimě 1945/46. V horní části ledovce
          používal odběry jader, které umožnily rozpoznat letní rozhraní ve sněhu a zahustit síť bez
          kopání mnoha hlubokých jam. Mapa zimního přírůstku pro rok 1961 vycházela z 370 bodů.
          <SourceLink id="DOI_10_3189_s002214300002757x"> Schytt, 1962</SourceLink>
        </p>
        <p>
          Pro měření ledu se používají například hliníkové tyče dlouhé 4–6 m, plastové trubky nebo
          spojované bambusové díly. Délku volíme podle očekávaného tání. Při velkém úbytku se tyč
          znovu zavrtá hlouběji a odečty před přesazením a po něm se propojí, aby záznam pokračoval
          od stejného stavu povrchu. Pro úbytky 8–12 m ledu za sezonu uvádí WMO také ocelové dráty
          v hlubších vrtech. Jde o různé podoby téhož principu měření.
          <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125"> WMO, 2024, oddíl 3.8</SourceLink>
        </p>

        <h2>Nejistoty a kontrola výsledku</h2>
        <p>
          Nejistotu určuje přesnost místních odečtů a hustot, u celého ledovce navíc pokrytí měřením
          a odhad neměřených ploch. Výsledek se proto porovnává s geodetickou bilancí. Zemp a spoluautoři
          našli statisticky významný rozdíl v 9 ze 46 porovnávaných období na 12 ledovcích.
          Terénní bilance popisuje povrchové změny. Celková bilance ledovce může zahrnovat také
          odlamování čela a změny uvnitř ledu či u podloží.
          <SourceLink id="DOI_10_5194_tc_7_1227_2013"> Zemp et al., 2013</SourceLink>
        </p>
        <details className="method-details">
          <summary>Podrobnosti nejistot a porovnání</summary>
          <h3>Odečet, hustota a prostorové pokrytí</h3>
          <p>
            Odečet ovlivní nerovný povrch, naklonění, uvolnění nebo propadnutí tyče ve firnu.
            Sněhovou sondu může před loňským povrchem zastavit mladší ledová krusta. Pomáhají odečty
            z více stran, okolní sondáže a prohlídka vrstev v jámě. Kontrola známé délky a závaží
            před sezonou a po ní odhaluje změny měřidel. Neobvyklý údaj se ověřuje opakováním
            a kontrolou zápisu. Geibel et al. popisují označování ztracených tyčí, odhadnutých dat
            a převzatých hustot kódy kvality. Termín návštěvy také nemusí zachytit přesné maximum
            nebo minimum sezonní zásoby sněhu.
            <SourceLink id="DOI_10_5194_essd_14_3293_2022"> Geibel et al., 2022</SourceLink>
          </p>
          <p>
            Zemp et al. pro zkoumaná období odhadli průměrnou roční nejistotu terénních měření
            na 0,14 m a prostorového převodu na 0,28 m vodního ekvivalentu. Nejde o univerzální
            přesnost metody. Hůře zastoupené mohou být strmé části a plochy pokryté sutí nebo lavinovými nánosy.
            Při silném tání navíc vypadávají tyče právě z míst velkého úbytku. Společná chyba hustoty
            či odhadu sněhu ve vyšších polohách zasáhne více pásem současně a větší počet bodů ji
            neodstraní. Roky bez terénních dat doplněné modelem se proto označují jako odhad.
            <SourceLink id="DOI_10_5194_tc_7_1227_2013"> Zemp et al., 2013</SourceLink> a
            <SourceLink id="DOI_10_3189_2015jog15j015"> Huss et al., 2015</SourceLink>
          </p>
          <h3>Co ověří porovnání s mapami</h3>
          <p>
            Geodetické měření má jiné zdroje chyb než tyče. Před porovnáním se sjednotí období
            a plocha a posoudí změny uvnitř ledovce a u podloží. Obě metody však mohou sdílet obrys,
            mapu výšek či opravy na společná data, takže jsou nezávislé jen částečně.{" "}
            <SourceLink id="DOI_10_5194_tc_7_1227_2013">(Zemp a kol., sjednocení porovnávaných bilancí)</SourceLink>
          </p>
          <p>
            Zemp et al. použili test s pětiprocentní hladinou významnosti. Rozdíl se považuje za
            významný, pokud by při skutečné shodě metod vznikla stejně velká nebo větší odchylka
            náhodou v méně než 5 % případů za předpokladů testu. Tak vyhodnotili devět období.
            U ostatních rozdíl neprokázali, což nezaručuje přesnou shodu. S rostoucí nejistotou totiž
            test rozpozná až větší rozdíly. Autoři hodnotí i tuto rozlišovací schopnost.
            <SourceLink id="DOI_10_5194_tc_7_1227_2013"> Zemp et al., 2013</SourceLink>
          </p>
          <p>
            Huss et al. podle nesouladu s geodetickými daty upravovali parametry rozložení sněhu
            a tání. Následná shoda se stejnými mapami je výsledkem nastavení modelu. K nezávislému
            ověření jsou potřeba další pozorování, která při nastavování použita nebyla.
            <SourceLink id="DOI_10_3189_2015jog15j015"> Huss et al., 2015</SourceLink>
          </p>
          <h3>Rozsah výsledku a dostupných dat</h3>
          <p>
            U ledovce končícího ve vodě se samostatně určují ztráty odlamováním a podvodním táním.
            Také celková bilance ledových příkrovů vyžaduje údaje o odtoku ledu do moře. Povrchová
            měření sama nezahrnou veškeré tání a zamrzání uvnitř ledovce a u podloží.
            <SourceLink id="WEB_World_Glacier_Monitoring_Ser_glosar_UNESCO_a_WGMS_06fc9a79"> Cogley et al., 2011</SourceLink>
          </p>
          <p>
            V následujícím příkladu přebíráme nejistotu bodu z vydání dat GLAMOS 2021. Kalibrační
            protokoly použitých měřidel nejsou součástí veřejného souboru. Zveřejněné příspěvky jsou odhady podle typu měření a dokumentace,
            nikoli nezávislé ověření této tyče nebo interval s určenou pravděpodobností pokrytí.
            Pozdější metodická tabulka Geibel et al. zde starší údaje nenahrazuje. U výškových pásem
            chybí úplné nejistoty a vazby mezi chybami, proto vlastní interval celkového průměru
            nepočítáme. Shoda přepočtu s publikovanou tabulkou ověřuje aritmetiku, nikoli přesnost
            měření ledovce.
            <SourceLink id="DOI_10_5194_essd_14_3293_2022"> Geibel et al., 2022, oddíl 3.3</SourceLink>
          </p>
        </details>


        <h2>Příklad: bilance Griesgletscheru</h2>
        <p>
          Na skutečných datech švýcarského Griesgletscheru si ukážeme dva kroky: převod úbytku u jedné
          tyče na hmotnost a výpočet průměru pro celý povrch. Použijeme vydání dat GLAMOS z roku 2021
          pro období <strong>14. září 2020 až 18. září 2021</strong>. Jde o 369 dní mezi návštěvami,
          nikoli o přesný hydrologický rok.
          <SourceLink id="DOI_10_18750_massbalance_point_2021_r2021"> GLAMOS, bodová měření</SourceLink> a
          <SourceLink id="DOI_10_18750_massbalance_2021_r2021"> GLAMOS, bilance ledovců</SourceLink>
        </p>

        <h3>Kolik hmotnosti ubylo u tyče 22</h3>
        <p>
          U tyče <strong>22</strong> v nadmořské výšce 2 479 m uvádí soubor změnu tloušťky ledu
          <strong> −398 cm</strong> a hustotu <strong>900 kg/m³</strong>. Veřejný záznam tedy začíná
          už rozdílem odečtů. Původní dvě délky odkryté tyče v něm nejsou.{" "}
          <SourceLink id="DOI_10_18750_massbalance_point_2021_r2021">(GLAMOS: původní bodová data)</SourceLink>
        </p>
        <p>
          Centimetry nejprve převedeme na metry: −398 cm je −3,98 m. Vynásobením hustotou ledu
          dostaneme −3 582 kg/m². Toto číslo říká, kolik hmotnosti ubylo nad metrem čtverečním.
          Pro vyjádření ve vodním ekvivalentu ještě vydělíme hustotou vody:
        </p>
        <Equation tex={[
          String.raw`b = -3{,}98\,\mathrm{m}\times\frac{900\,\mathrm{kg/m^3}}{1\,000\,\mathrm{kg/m^3}}`,
          String.raw`= -3{,}582\,\mathrm{m}\ \text{vodního ekvivalentu}`,
        ]} />
        <p>
          Výsledek <strong>−3 582 mm vodního ekvivalentu</strong> se shoduje s publikovanou hodnotou.
          Soubor k němu uvádí celkový odhad nejistoty <strong>84 mm</strong>, přibližně 2,3 % velikosti
          úbytku. Příspěvky odečtu 45 mm a hustoty 71 mm jsou už převedené na tutéž veličinu.
          Jejich složením, tedy odmocninou součtu čtverců, dostaneme po zaokrouhlení uvedených 84 mm.
          <SourceLink id="DOI_10_18750_massbalance_point_2021_r2021"> GLAMOS, bodová měření, 2021</SourceLink>
        </p>

        <h3>Jakou váhu mají jednotlivá výšková pásma</h3>
        <p>
          Tyč 22 leží nízko, kde led silně ubýval. Pro průměr celého ledovce potřebujeme zahrnout
          i výše položené plochy. Druhý výpočet proto vychází z <strong>již zpracovaných bilancí deseti výškových pásem</strong>.
          Ty zahrnují prostorový výpočet GLAMOS. Zde zopakujeme jeho poslední krok, vážení plochami.
          <SourceLink id="DOI_10_18750_massbalance_2021_r2021"> GLAMOS, bilance ledovců, 2021</SourceLink>
        </p>
        <p>
          První řádek tabulky zastupuje část ledovce mezi 2 400 a 2 500 m nad mořem. Plochu 0,10312 km²
          násobíme bilancí −3,449 m vodního ekvivalentu. Stejný součin vypočítáme pro každý další řádek.
          Součiny sečteme a vydělíme součtem ploch.
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" aria-label="Bilance a plochy výškových pásem Griesgletscheru" tabIndex={0}>
            <table>
              <caption>Griesgletscher, 14. 9. 2020 – 18. 9. 2021</caption>
              <thead><tr><th scope="col">Výškové pásmo <span className="method-data-output__unit">(m)</span></th><th scope="col">Plocha <span className="method-data-output__unit">(km²)</span></th><th scope="col">Bilance <span className="method-data-output__unit">(m vody)</span></th></tr></thead>
              <tbody>{example.result.bands.map((band) => (
                <tr key={band.lowerM}><th scope="row">{number(band.lowerM)}–{number(band.upperM)}</th><td>{number(band.areaKm2, 5)}</td><td>{number(band.annualMm / 1000)}</td></tr>
              ))}</tbody>
            </table>
          </div>
        </div>
        <p>
          Celková plocha pásem je <strong>{number(example.result.areaKm2, 5)} km²</strong> a vypočtený
          průměr po zaokrouhlení <strong>−0,893 m vodního ekvivalentu</strong>. Jde o průměrnou ztrátu
          na jednotku plochy celého povrchu. Prostý průměr deseti bilancí by vyšel −1,005 m, protože
          by přisoudil stejnou váhu rozsáhlému pásmu o ploše 1,32 km² i vrcholovému zbytku o ploše
          0,0025 km².
        </p>
        <p>
          Rozložení bilance ukazuje graf. Vlevo porovnává všech 16 bodových měření s průměry pásem,
          vpravo jejich plochy. Největší část ledovce leží mezi 2 900 a 3 100 m, kde byl úbytek menší
          než u nízko položené tyče 22. Právě velká plocha těchto pásem posouvá celkový průměr blíže nule.
        </p>
        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" tabIndex={0} aria-label="Graf bilance a plochy Griesgletscheru">
            <Image className="article-figure__media" src="/media/glacier-balance/gries-balance.png" alt="V dolní části Griesgletscheru převažují silně záporné bodové bilance. Největší plochu mají pásma mezi 2 900 a 3 100 metry s menším úbytkem." width={1792} height={1248} sizes="(max-width: 900px) 100vw, 900px" unoptimized />
          </div>
          <figcaption>
            Černě jsou měřicí body s publikovanými odhady nejistoty, modrozeleně průměry pásem
            umístěné doprostřed jejich výškových intervalů. Oranžová čára značí vypočtený plošný průměr.
            Nejvyšší pásmo je ledem obsazené jen po 3 320 m. Vlastní výpočet a graf z dat
            <SourceLink id="DOI_10_18750_massbalance_point_2021_r2021"> GLAMOS, body</SourceLink> a
            <SourceLink id="DOI_10_18750_massbalance_2021_r2021"> GLAMOS, pásma</SourceLink>.
            Licence vstupních dat: CC BY 4.0.
          </figcaption>
        </figure>
        <p>
          V souhrnné tabulce GLAMOS je hodnota −0,892 m a plocha 4,10187 km². Náš přepočet se liší
          o necelý 1 mm vody a součet ploch o 10 m². Vstupní tabulky obsahují zaokrouhlená čísla,
          která omezují přesnou shodu. Bez původních nezaokrouhlených mezivýsledků nelze celý rozdíl
          rozložit. Obě hodnoty proto ponecháváme.{" "}
          <SourceLink id="DOI_10_18750_massbalance_2021_r2021">(GLAMOS: původní souhrnná tabulka)</SourceLink>
        </p>
        <p>
          Součet příspěvků pásem zároveň dává celkovou ztrátu
          přibližně <strong>3,66 milionu m³ vodního ekvivalentu</strong>. Jde o objem vody odpovídající
          ztracené hmotnosti, nikoli o objem odtátého ledu.
        </p>

        <h3>Zimní přírůstek a letní úbytek</h3>
        <p>
          Souhrnná tabulka rozděluje stejné období na zimní bilanci +1,674 m a letní −2,566 m
          vodního ekvivalentu. Jejich součet je −0,892 m. Ledovec tedy během zimy hmotnost získal,
          letní ztráta však byla větší a výsledná bilance záporná. Sezonní záznam tak vysvětluje,
          jak se dvě části roku podílely na celkové změně.
          <SourceLink id="DOI_10_18750_massbalance_2021_r2021"> GLAMOS, 2021</SourceLink>
        </p>

        <details className="method-details">
          <summary>Data a opakování obou výpočtů</summary>
          <p>
            Stáhněte do jedné složky <a href={`${dataPath}/point.zip`} download>původní archiv bodových měření</a>,{" "}
            <a href={`${dataPath}/balance.zip`} download>původní archiv bilancí</a>,{" "}
            <a href={`${dataPath}/example.json`} download>metadata a výsledky</a> a{" "}
            <a href={`${dataPath}/reproduce.py`} download>výpočetní skript</a>.
            Příkaz <code>python -B reproduce.py</code> používá Python 3 bez dalších knihoven.
            Archivy nerozbalujte. Skript ověří jejich kontrolní otisky SHA-256, vybere ledovec a data
            návštěv, přepočte tyč 22 a spočítá plošný průměr. Zkontroluje také úplnost pásem, jejich
            plochy a shodu s publikovaným výsledkem do 1 mm.
          </p>
          <p>
            Tyč 22 je na řádku 1671 souboru <code>annual/gries_annual.dat</code>, počítáno i s hlavičkou.
            Kódy označují známá data návštěv, běžný odečet tyče a použití hustoty ledu. Přepočtený
            výsledek porovnáváme se sloupcem <code>mb_we</code>. Druhý archiv obsahuje tabulky
            <code> massbalance_observation_elevationbins_2021_r2021.csv</code> a
            <code> massbalance_observation_2021_r2021.csv</code>. V obou vybíráme ledovec
            <code> B45-04</code> a data 14. září 2020 a 18. září 2021.
          </p>
          <p>
            Archivy jsou nezměněné kopie vydání 2021 pod kratšími názvy, získané 4. října 2026.
            Licence CC BY 4.0 je uvedená na stránkách vydání.
            <a href={`${dataPath}/plot.py`} download> Skript pro graf</a> navíc potřebuje knihovnu Matplotlib.
            Výpočty opakují dva popsané kroky, neobnovují původní terénní zápisník ani celé
            prostorové a časové zpracování GLAMOS.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Tyče ukazují úbytek nebo přírůstek povrchu, rozbory sněhu doplní jeho
            hustotu. Převod na vodní hodnotu umožňuje sčítat přírůstky sněhu s úbytky
            ledu. Síť těchto místních měření a znalost plochy ledovce pak umožňují
            sestavit jeho povrchovou hmotnostní bilanci.
          </p>
          <p>
            Terénní metoda umožňuje určit zimní hromadění sněhu, letní tání i roční zisk
            nebo ztrátu hmotnosti na povrchu ledovce. Zachytí také silné tání. Pro
            sezónní úbytky 8–12 m ledu se používají ocelové dráty ukotvené v hlubších
            vrtech. Měření na celé síti míst ukazuje bilanci ledovce a její změny mezi
            roky.{" "}
            <SourceLink id="WEB_World_Glacier_Monitoring_Ser_WMO_2024_a75c9125">(WMO, 2024: měření kryosféry)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
