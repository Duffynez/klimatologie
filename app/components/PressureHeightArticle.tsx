import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import { Equation, InlineMath } from "./Equation";
import example from "../../public/data/methods/pressure-height/example.json";

const dataPath = "/data/methods/pressure-height";
const number = (value: number, digits = 3) => value.toLocaleString("cs-CZ", {
  minimumFractionDigits: digits, maximumFractionDigits: digits,
});

export function PressureHeightArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak z tlaku určujeme hloubku</h2>
        <p className="article-prose__intro">
          Měření tlaku zjišťuje, jakou silou kapalina nebo plyn působí na jednotku plochy.
          V klidné vodě tlak roste s hloubkou, protože směrem dolů přibývá voda, jejíž tíhu
          musí nižší vrstvy nést. Ze změřeného tlaku proto můžeme vypočítat hloubku ponoření
          přístroje. Pevně umístěné čidlo zase umožňuje sledovat změny výšky hladiny nad ním.
          Takové určení výšky nebo hloubky z tlaku se opírá o hydrostatickou rovnováhu.{" "}
          <SourceLink id="DOI_10_3133_twri08a3">(USGS, oddíl Physics of Pressure)</SourceLink>
        </p>
        <p>
          Postup vysvětlíme na oceánografické soupravě SBE 9plus s křemenným tlakoměrem Digiquartz.
          Souprava se spouští z lodi a současně měří tlak, teplotu a elektrickou vodivost vody.
          Tlak přiřazuje ostatním údajům svislou polohu ve vodním sloupci.
          <SourceLink id="2010_SeaBird_9plus_Manual"> Technická dokumentace SBE 9plus</SourceLink>
          {" "}popisuje snímač, kalibraci i převod jeho signálu.
        </p>

        <figure className="article-figure">
          <Image className="article-figure__media"
            src="/media/methods/pressure-height/noaa-atomic-ctd-deployment.jpg"
            alt="Posádka výzkumné lodi spouští nad oceán zelený rám soupravy CTD s měřicími přístroji a šedými odběrovými lahvemi."
            width={3840} height={2160} sizes="(max-width: 700px) 100vw, 770px" unoptimized />
          <figcaption>
            Spouštění soupravy CTD z lodi Ronald H. Brown během výpravy ATOMIC v lednu 2020.
            Při sestupu měří přístroje na rámu tlak, teplotu a vodivost. Z tlaku se určuje
            hloubka, do které jednotlivé odečty patří. Šedé válce nahoře slouží k odběru vody.
            Foto: Richard Marchbanks, CIRES/NOAA. Zdroj:{" "}
            <SourceLink id="2020_NOAA_ATOMIC_Photos">fotogalerie ATOMIC</SourceLink>,
            {" "}<SourceLink id="WEB_NOAA_Using_Content_FAQ">podmínky použití NOAA</SourceLink>.
          </figcaption>
        </figure>

        <h3>Proč tlak s hloubkou roste</h3>
        <p>
          Každá vrstva klidné vody je v rovnováze. Tlak na její spodní straně musí být větší
          než na horní, aby výsledná síla vyvážila tíhu vody mezi nimi. Tomuto stavu říkáme
          <strong> hydrostatická rovnováha</strong>. Čím vyšší je sloupec vody, tím větší tlakový
          rozdíl odpovídá jeho tíze. U stejné výšky sloupce rozhoduje také hustota, tedy
          hmotnost vody v jednotce objemu. Hustší voda vytváří větší tlakový rozdíl.{" "}
          <SourceLink id="DOI_10_3133_twri08a3">(USGS, oddíl Physics of Pressure)</SourceLink>
        </p>
        <p>
          Na volnou hladinu působí ještě tlak vzduchu. Ten se přenáší do vody, takže ponořené
          čidlo zaznamenává společně tlak vzduchu nad hladinou a příspěvek vodního sloupce.
          <strong> Absolutní tlakoměr</strong> porovnává toto zatížení s vakuem, prostředím
          s téměř nulovým tlakem uzavřeným uvnitř snímače. Výsledkem je absolutní tlak.
          Pro samotnou vodu pak potřebujeme odečíst tlak vzduchu změřený ve stejném čase.
          Rozlišení obou příspěvků vysvětluje
          <SourceLink id="DOI_10_3133_twri08a3"> příručka americké geologické služby USGS z roku 2004</SourceLink>.
        </p>
        <p>
          Základní jednotkou tlaku je pascal, značka Pa. Jeden pascal odpovídá síle jednoho
          newtonu rozložené na metr čtvereční. V oceánografii se používá větší jednotka
          <strong> decibar</strong>, značená dbar, která odpovídá 10 000 Pa. V meteorologii
          se běžně setkáme s hektopascalem, hPa, rovným 100 Pa.
          Jednotka říká, jak tlak číselně vyjadřujeme, tlaková reference určuje, vůči čemu jej měříme.{" "}
          <SourceLink id="DOI_10_3133_twri08a3">(USGS, jednotky tlaku)</SourceLink>
        </p>

        <h3>Křemenný tlakoměr</h3>
        <p>
          U SBE 9plus se tlak okolní vody přenáší do přístroje úzkou trubičkou, kapilárou,
          naplněnou olejem. Olej přenese tlak na měřicí část a současně ji odděluje
          od mořské vody. Uvnitř tlakoměru působí tlak na zahnutou pružnou trubici.
          Ta se pod jeho vlivem snaží narovnat a přenáší sílu na křemenný rezonátor.
          Je to malý pružný prvek z křemene, který elektronika udržuje v kmitání.{" "}
          <SourceLink id="2026_Paroscientific_Quartz_Principle">(Paroscientific: konstrukce snímače)</SourceLink>
        </p>
        <p>
          Mechanické napětí mění rychlost kmitání rezonátoru. Elektronika proto může
          zjišťovat tlak měřením <strong>frekvence</strong>, počtu kmitů za sekundu,
          nebo periody, doby jednoho kmitu. Jednotkou frekvence je hertz, značka Hz.
          <SourceLink id="2026_Paroscientific_Quartz_Principle"> Popis technologie Digiquartz</SourceLink>
          {" "}ukazuje přenos síly z pružného členu na křemen.
          Olejový přívod a zapojení v konkrétní soupravě popisuje
          <SourceLink id="2010_SeaBird_9plus_Manual"> manuál SBE 9plus</SourceLink>.
        </p>
        <p>
          Elektronika zaznamenává vedle kmitání také teplotu uvnitř tlakoměru.
          Odezva jeho součástí se totiž s teplotou mění. Pro převod na tlak proto používáme
          oba údaje společně. Vnitřní teploměr popisuje stav snímače, zatímco samostatné
          čidlo na soupravě měří teplotu mořské vody. Každý z těchto teploměrů tak poskytuje
          jiný vstup pro další zpracování.{" "}
          <SourceLink id="2010_SeaBird_9plus_Manual">(Sea-Bird, s. 44–46)</SourceLink>
        </p>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Cesta od tlaku vody k vypočtené hloubce">
            <div><span>1</span><strong>Tlak na snímač</strong><small>Tlak vody a vzduchu zatíží pružný člen uvnitř přístroje.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Kmitání křemene</strong><small>Elektronika změří frekvenci a vnitřní teplotu tlakoměru.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Údaj o tlaku</strong><small>Kalibrační vztah převede oba odečty na tlak.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Hloubka pod hladinou</strong><small>Výpočet využije tlak vzduchu, hustotu vody a tíhové zrychlení.</small></div>
          </div>
          <figcaption>
            Vlastní schéma podle <SourceLink id="2026_Paroscientific_Quartz_Principle">Paroscientific</SourceLink>,{" "}
            <SourceLink id="2010_SeaBird_9plus_Manual">Sea-Bird</SourceLink> a{" "}
            <SourceLink id="DOI_10_3133_twri08a3">USGS</SourceLink>.
            Šipky označují přenos mechanického zatížení na rezonátor, převod elektrických
            odečtů na tlak a následný výpočet hloubky.
          </figcaption>
        </figure>

        <h3>Kalibrace a převod na tlak</h3>
        <p>
          Vztah mezi frekvencí, vnitřní teplotou a tlakem získáme <strong>kalibrací</strong>.
          Snímač vystavujeme známým tlakům a zaznamenáváme jeho odezvu. Známý tlak lze vytvořit
          závažím působícím na píst o známé účinné ploše. Síla, kterou závaží zatěžuje píst,
          dělená touto plochou určuje tlak. Takový přístroj slouží jako tlakový etalon,
          tedy referenční měřidlo pro porovnání.{" "}
          <SourceLink id="2010_SeaBird_9plus_Manual">(Sea-Bird, s. 31–32)</SourceLink>
        </p>
        <p>
          Kalibrace pokrývá více tlaků a teplot, aby popisovala chování snímače v celém
          zamýšleném rozsahu. Ze souboru porovnání se určí koeficienty, číselné parametry
          převodního vztahu pro daný kus. Při měření do něj software dosadí odečet kmitání
          a vnitřní teplotu. Výsledný tlak už zahrnuje opravu teplotního vlivu na snímač.
          Tento postup dokládají <SourceLink id="2026_Paroscientific_Quartz_Principle">výrobce
          tlakoměru</SourceLink> a <SourceLink id="2010_SeaBird_9plus_Manual">manuál soupravy,
          strany 44–46</SourceLink>.
        </p>
        <p>
          Aby byla reference dohledatelná, potřebujeme znát hmotnost závaží, účinnou plochu
          pístu i místní tíhové zrychlení, které spolu s hmotností určuje tíhu závaží.
          Zohledníme také korekce použité při měření. Doložený řetězec porovnání
          těchto veličin, včetně jejich nejistot, zajišťuje metrologickou návaznost.
          Kalibrace tím určuje vztah mezi odečtem a referenční hodnotou. Seřízení je naopak
          zásah, který odezvu přístroje upravuje. Rozdíl vymezuje
          <SourceLink id="2012_VIM_Calibration"> mezinárodní metrologický slovník VIM</SourceLink>.{" "}
          <SourceLink id="DOI_10_3133_twri08a3">(USGS, kalibrace tlakoměrů)</SourceLink>
        </p>
        <p>
          Při přípravě měření lze počátek tlakové stupnice porovnat s barometrem,
          přístrojem měřícím tlak vzduchu. Snímač je přitom teplotně ustálený a orientovaný
          stejně jako při použití. Kontrola pístovým etalonem naopak postupně prověří celý
          tlakový rozsah. <SourceLink id="2010_SeaBird_9plus_Manual">Manuál na stranách 31–32</SourceLink>
          {" "}popisuje oba postupy i úpravu posunu a sklonu převodu podle porovnání.
        </p>

        <h3 id="hloubka">Výpočet hloubky ve vodě</h3>
        <p>
          Nyní máme tlak u ponořeného čidla. Pro určení hloubky nejprve odečteme současný
          tlak vzduchu nad hladinou. Zbývající rozdíl odpovídá tíze vodního sloupce.
          Když známe hustotu vody a tíhové zrychlení, víme, jaký tlak připadá na metr
          jeho výšky. Tlakový rozdíl tímto příspěvkem vydělíme a získáme hloubku:
        </p>
        <Equation tex={String.raw`h = \frac{p_s-p_0}{\rho g}`} />
        <p>
          <em>h</em> je hloubka čidla pod hladinou v metrech, kladná směrem dolů.{" "}
          <InlineMath tex={String.raw`p_s`} /> je absolutní tlak u čidla a{" "}
          <InlineMath tex={String.raw`p_0`} /> tlak vzduchu nad hladinou, oba v pascalech.
          Řecké písmeno <InlineMath tex={String.raw`\rho`} /> označuje hustotu vody
          v kilogramech na metr krychlový. <em>g</em> je místní tíhové zrychlení v m/s²,
          které určuje tíhu jednotky hmotnosti.{" "}
          <SourceLink id="DOI_10_3133_twri08a3">(USGS, oddíl Physics of Pressure)</SourceLink>
        </p>
        <p>
          V tomto tvaru předpokládáme hydrostatickou rovnováhu a přibližně stálou hustotu
          i tíhové zrychlení mezi hladinou a čidlem. Dvojnásobný tlakový rozdíl pak
          odpovídá dvojnásobné hloubce. Při stejném rozdílu tlaků naopak vyjde menší
          hloubka pro hustší vodu, protože každý metr jejího sloupce přispívá větší tíhou.
          Vztah i jeho použití u ponorných čidel rozebírá
          <SourceLink id="DOI_10_3133_twri08a3"> příručka USGS</SourceLink>.
        </p>
        <p>
          V oceánu se hustota s hloubkou mění. Ovlivňují ji teplota, obsah rozpuštěných solí
          i stlačení vody vyšším tlakem. Výpočet proto může rozdělit vodní sloupec na
          tenké vrstvy. Pro každou použije její hustotu a tlakový rozdíl, určí její
          tloušťku a tloušťky sečte. Tím zachová stejný hydrostatický princip a současně
          zapojí proměnlivé vlastnosti vody.{" "}
          <SourceLink id="2021_TEOS10_Height_From_Pressure">(TEOS-10, metodická příloha)</SourceLink>
        </p>
        <p>
          Výpočty vlastností mořské vody sjednocuje soustava TEOS-10, anglicky
          <em> Thermodynamic Equation of Seawater 2010</em>. Její postup
          <SourceLink id="2021_TEOS10_Height_From_Pressure"> gsw_z_from_p</SourceLink>
          {" "}převádí tlak na výšku s využitím zeměpisné šířky pro určení tíhového zrychlení.
          V základním použití vychází z referenčního oceánu se stanoveným obsahem solí
          a teplotou. Další vstupy umožňují přidat vliv skutečného rozložení hustoty
          a výškové reference hladiny. Výstupní souřadnice <em>z</em> je v metrech a roste
          vzhůru, takže pod hladinou vychází záporná. Hloubka kladná dolů je její opačná hodnota.
        </p>
        <p>
          Tlak v oceánografickém souboru bývá také vyjádřen vůči pevné referenční atmosféře.
          TEOS-10 používá absolutní tlak zmenšený o 10,1325 dbar, tedy 101 325 Pa.
          Tato dohoda dává datům společný tlakový počátek. Aktuální tlak vzduchu nad místem
          měření se může od referenční hodnoty lišit.
          <SourceLink id="2010_SeaBird_9plus_Manual"> Manuál SBE 9plus na straně 46</SourceLink>
          {" "}používá obdobně zaokrouhlenou hodnotu 14,7 psi. Jednotka psi vyjadřuje libru
          síly na čtvereční palec, značka psia výslovně označuje absolutní tlak v těchto jednotkách.{" "}
          <SourceLink id="2021_TEOS10_Height_From_Pressure">(TEOS-10: tlaková konvence)</SourceLink>
        </p>
        <p>
          Při použití jednoduchého vzorce pro hloubku proto nejprve zjistíme, jaký tlak
          soubor obsahuje. Pokud už software odečetl pevnou referenční atmosféru,
          jejím přičtením obnovíme absolutní tlak. Teprve od něj odečteme současný tlak
          vzduchu nad hladinou. U výpočtu podle TEOS-10 naopak předáváme tlak v konvenci,
          kterou tento postup vyžaduje. Význam sloupce určuje dokumentace přístroje
          a použitého zpracování.{" "}
          <SourceLink id="DOI_10_3133_twri08a3">(USGS, absolutní a relativní tlak)</SourceLink>
        </p>

        <h3>Výsledek a použití v klimatologii</h3>
        <p>
          Při spouštění soupravy do oceánu vzniká posloupnost měření v různých hloubkách.
          Manuál SBE 9plus z roku 2010 uvádí záznam 24 souborů měření za sekundu.
          Každý spojuje tlak s dalšími odečty. Tato kombinace se označuje
          <strong> CTD</strong>, z anglického <em>Conductivity, Temperature, Depth</em>,
          tedy vodivost, teplota a hloubka. Tlak je změřený, hloubka vzniká popsaným výpočtem.
          Profil lze také ponechat v tlakové souřadnici a teplotu porovnávat při stejných
          hodnotách tlaku.{" "}
          <SourceLink id="2010_SeaBird_9plus_Manual">(Sea-Bird, technické parametry)</SourceLink>
        </p>
        <p>
          Takové profily tvoří podklad pro <Link href="/pozorovani/tepelny-obsah-oceanu/#mereni-profilu">měření
          obsahu tepla v oceánu</Link>. Potřebujeme při něm vědět, jaká teplota patří ke které
          vrstvě a kolik vody tato vrstva obsahuje. Teplotní údaje dodává
          <Link href="/metody/odporova-termometrie-a-termistory"> termometrie</Link>.
          Hustota závisí také na salinitě, která vyjadřuje obsah solí a odvozuje se
          <Link href="/metody/konduktometrie"> z elektrické vodivosti</Link> spolu s teplotou
          a tlakem. Lodní soupravy CTD i samostatně se pohybující plováky programu Argo
          tak propojují několik měřicích metod.{" "}
          <SourceLink id="DOI_10_1175_2011jtecho831_1">(Barker a kol., úvod a metody)</SourceLink>
        </p>
        <p>
          Význam tlakové souřadnice doložili
          <SourceLink id="DOI_10_1175_2011jtecho831_1"> Barker a spoluautoři v roce 2011</SourceLink>
          {" "}na tehdejších datech Argo z let 2000–2008, stažených v lednu 2009.
          Využili záznamy tlaku při vynoření, kdy je přístroj na hladině, k rozpoznání
          posunu tlakové stupnice. U části plováků mohli posun opravit i v ponořených
          profilech za předpokladu, že je stejný v celém měřeném rozsahu.
          Přepočet změnil odhady oceánského oteplování a příspěvku teplotní
          roztažnosti vody ke změnám hladiny. Práce ukazuje, proč při sledování teplotních
          změn potřebujeme také správné přiřazení hloubky.
        </p>
        <p>
          Při výzkumu <Link href="/pozorovani/acidifikace-oceanu/#odber-a-podminky">acidifikace oceánu</Link>
          {" "}tlak pomáhá určit, ze které vrstvy pochází odebraný vzorek. Zároveň patří
          k podmínkám potřebným pro přepočty chemických veličin. Údaje o chemickém složení
          dodávají další metody, tlak je spojuje s místem odběru a podmínkami ve vodě.{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(Dickson a kol., kapitola 2 a SOP 1)</SourceLink>
        </p>

        <h3 id="dalsi-pouziti">Vývoj přístrojů a další použití</h3>
        <p>
          Souvislost tlaku s výškou umožnily sledovat už kapalinové barometry.
          <SourceLink id="1648_Perier_PuyDeDome"> Florin Périer v dopise Blaisi Pascalovi
          z 22. září 1648</SourceLink> popsal pokus provedený o tři dny dříve na Puy-de-Dôme.
          Rtuťový sloupec v trubici byl na vrcholu nižší než dole v Clermontu.
          Tlak okolního vzduchu vyvažoval tíhu rtuťového sloupce, takže menší výška rtuti
          odpovídala menšímu tlaku. Druhé uspořádání zůstalo dole a sloužilo ke kontrole
          změn během dne. Porovnání se opakovalo i po návratu.
        </p>
        <p>
          Pružné a později elektronické snímače umožnily zaznamenávat tlak v krátkých
          intervalech a měřit s pohybujícím se přístrojem. Vedle křemenného rezonátoru
          mohou využívat membránu, která se tlakem prohýbá. Její deformace mění elektrický
          odpor, tedy míru, s jakou snímací prvek brání průchodu proudu, nebo elektrickou
          kapacitu, množství náboje uloženého při daném napětí. Kalibrace opět přiřadí
          elektrické odezvě hodnotu tlaku. Digiquartz pro malé tlaky používá také pružný
          měch místo zahnuté trubice. Konstrukce popisují
          <SourceLink id="DOI_10_3133_twri08a3"> USGS</SourceLink> a
          <SourceLink id="2026_Paroscientific_Quartz_Principle"> výrobce křemenných tlakoměrů</SourceLink>.
        </p>
        <p>
          Pro měření hladiny se používají i <strong>čidla s odvětranou referencí</strong>.
          Na jednu stranu membrány působí voda, na druhou přivádí tenká trubička vzduch
          z prostoru nad hladinou. Atmosférický tlak tak působí na obě strany a výsledný
          rozdíl odpovídá vodnímu sloupci. Čidlo tento rozdíl poskytuje přímo,
          zatímco absolutní záznamník potřebuje samostatný barometr.
          <SourceLink id="DOI_10_3133_twri08a3"> Příručka USGS</SourceLink> vysvětluje
          obě uspořádání i jejich instalaci.
        </p>
        <p id="hladina">
          U pevně upevněného snímače změna hloubky ponoření ukazuje, o kolik se nad ním
          zvedla nebo klesla hladina. Pro výšku vody vůči pobřeží ještě potřebujeme znát
          polohu čidla vůči pevnému výškovému bodu. Tuto návaznost rozvíjí
          <Link href="/metody/pobrezni-mereni-hladiny-a-vyskova-reference"> pobřežní měření
          hladiny a výšková reference</Link>. Tak vzniká místní záznam využitelný při
          sledování <Link href="/pozorovani/gmsl/#pobrezni-mereni">změn výšky mořské hladiny</Link>.
          Globální průměr pak vyžaduje spojení měření z více míst a další prostorové zpracování.{" "}
          <SourceLink id="DOI_10_3133_twri08a3">(USGS, instalace a výšková reference)</SourceLink>
        </p>
        <p id="tlak-v-atmosfere">
          Hydrostatický vztah platí také v atmosféře. Směrem vzhůru tlak klesá, protože
          nad daným místem ubývá vzduchu. Jeho hustota se výrazně mění s tlakem, teplotou
          a vlhkostí, proto při určování výšky postupujeme po vrstvách.
          <Link href="/metody/radiosondaz"> Radiosondáž</Link> vysvětluje i opačný výpočet,
          kdy známe výšku z družicové navigace a dopočítáváme tlak.
          <SourceLink id="2023_GRUAN_RS41_TD8"> Dokumentace referenční sítě výškových měření
          GRUAN, oddíl 4.4.2</SourceLink>, uvádí potřebné vstupy: počáteční tlak na stanici,
          teplotu, vlhkost a tíhové zrychlení. Místa se stejnou hodnotou tlaku tvoří
          tlakovou hladinu. Na těchto hladinách pak můžeme porovnávat
          výšková měření <Link href="/pozorovani/stratosfericke-ochlazovani/#radiosondy">teploty</Link>
          {" "}a <Link href="/pozorovani/narust-vlhkosti/#radiosondy">vlhkosti atmosféry</Link>.
        </p>

        <h2>Nejistoty a ověření měření</h2>
        <p>
          Na vypočtenou hloubku působí nejistota tlaku i hustoty vody. Při sledování
          výšky hladiny záleží také na poloze čidla vůči pevnému bodu.
          Důležité jsou teplotní změny snímače a jeho dlouhodobá stabilita.
          <SourceLink id="DOI_10_3133_ofr20131173"> Nezávislá zkouška tří záznamníků
          Level TROLL 100 v USGS</SourceLink> ukázala, že se většina výsledků při 0 až 50 °C
          vešla do výrobcem udané tlakové meze. Čtyři záznamy ji těsně překročily.
          Tento výsledek patří zkoušeným přístrojům a podmínkám.
        </p>
        <details className="method-details">
          <summary>Podrobnosti o přesnosti a kontrole výsledku</summary>
          <p>
            <SourceLink id="DOI_10_3133_ofr20131173">Carnley, Fulfordová a Brooks v roce 2013</SourceLink>
            {" "}zkoušeli tři absolutní záznamníky Level TROLL 100 s keramickým odporovým čidlem.
            Použili samostatný kalibrovaný regulátor tlaku a barometr.
            V teplotně kompenzovaném rozsahu 0 až 50 °C se většina tlakových rozdílů vešla
            do ±0,039 psi, čtyři dosáhly +0,040 psi. Při −20 °C byly odchylky větší.
            Zkouška ověřovala hotové přístroje, nenastavovala jejich kalibrační koeficienty.
            Všechny kusy sdílely přívod tlaku a referenční přístroje s vlastní nejistotou.
            Výsledek se nevztahuje na SBE 9plus.
          </p>
          <p>
            <SourceLink id="2010_SeaBird_9plus_Manual">Manuál SBE 9plus z roku 2010</SourceLink>
            {" "}uvádí pro rozsah 10 000 psia, přibližně 6 895 dbar absolutního tlaku,
            rozlišení 0,001 % rozsahu, tedy asi 0,069 dbar. Udaná počáteční přesnost
            0,015 % rozsahu odpovídá asi 1,03 dbar. Rozlišení popisuje nejmenší rozlišitelnou
            změnu údaje. Ani jeden parametr sám neurčuje nejistotu hloubky během celého nasazení.
          </p>
          <p>
            V provozu se může pomalu posouvat odezva čidla, což označujeme jako drift.
            Porovnání s barometrem kontroluje počátek absolutní tlakové stupnice,
            porovnání v celém rozsahu prověří i další změny převodu. Ruční odečet hladiny
            vůči pevnému bodu kontroluje také instalaci. Pravidelné kontroly, záznam zásahů a souběžná
            měření při výměně přístroje doporučuje
            <SourceLink id="DOI_10_3133_twri08a3"> USGS</SourceLink>.
            Shoda dvou záznamníků sdílejících chybný barometr tuto společnou chybu neodhalí.
          </p>
          <p>
            Posun upevnění nebo podloží mění hloubku ponoření stejně jako pohyb hladiny.
            U odvětraného čidla může přenos atmosférického tlaku narušit ucpaná či zavlhlá
            trubička. Rychlé proudění, vlny a svislé zrychlení přidávají k hydrostatickému
            tlaku účinky pohybu. Měření proto zahrnuje vhodné umístění a ochranu tlakového
            vstupu i časové průměrování.{" "}
            <SourceLink id="DOI_10_3133_twri08a3">(USGS, instalace a provoz)</SourceLink>
          </p>
          <p>
            Nejistota převodu závisí také na hustotě a tíhovém zrychlení. U jednoduchého
            vzorce způsobí chyba hustoty o 0,1 % přibližně stejně velkou relativní chybu
            hloubky s opačným znaménkem. To popisuje citlivost výpočtu, nikoli chybu konkrétního
            měření. V mělké vodě může rozhodovat barometr a upevnění, ve velké hloubce také
            popis hustoty a stabilita tlakoměru. Jednotky a tlaková reference se ověřují
            podle verze zpracování, aby se atmosférický tlak neodečetl dvakrát.
          </p>
          <p>
            <SourceLink id="2022_SeaBird_P1207_Calibration">Kalibrační protokol použitý níže</SourceLink>
            {" "}neuvádí úplný rozpočet nejistoty ani nedokládá vyhrazení bodů pro nezávislé
            ověření. Menší rozdíly po opravě znamenají lepší shodu v této zkoušce.
            Počet desetinných míst v tabulce zachycuje přepočet, nikoli jeho nejistotu.
            Rozdíly mezi zvyšováním a snižováním tlaku nelze celé připsat mechanické paměti
            snímače, protože se měnila i teplota. Z protokolu neodvodíme celkovou nejistotu
            budoucího oceánského profilu nebo dlouhodobého záznamu hladiny.
          </p>
          <p>
            <SourceLink id="DOI_10_1175_2011jtecho831_1">Barkerova studie</SourceLink> hodnotí
            historický soubor Argo, nikoli všechna současná data. U některých tehdejších
            plováků řídicí program nezachoval záporné tlakové odchylky, což znemožnilo
            jejich opravu. Porovnání před opravou a po ní sdílí původní profily,
            takže nepředstavuje dvě nezávislá pozorování oceánu.
          </p>
        </details>

        <h2>Skutečný příklad z kalibračního protokolu</h2>
        <p>
          Na <SourceLink id="2022_SeaBird_P1207_Calibration">protokolu Sea-Bird Scientific
          z 6. června 2022</SourceLink> si ukážeme, jak vyhodnotit rozdíly mezi tlakoměrem
          a laboratorní referencí. Dokument patří soupravě <strong>SBE 9plus číslo 1207</strong>
          {" "}s tlakovým snímačem 131013 a rozsahem 10 000 psia.
          Zveřejnila jej Atlantická oceánografická a meteorologická laboratoř amerického
          Národního úřadu pro oceán a atmosféru, zkráceně NOAA AOML.
        </p>
        <p>
          Laboratoř tlak nejprve zvyšovala a potom snižovala. Protokol obsahuje jedenáct
          záznamů v tomto pořadí. U každého uvádí referenční tlak, odečtenou frekvenci,
          vnitřní teplotu a tlak přístroje před opravou i po ní. Přepočet začneme
          u těchto zveřejněných tlaků. Od údaje přístroje odečteme referenci, takže
          kladný rozdíl znamená, že přístroj ukazoval více.{" "}
          <SourceLink id="2022_SeaBird_P1207_Calibration">(Sea-Bird: původní protokol)</SourceLink>
        </p>
        <p>
          Tabulka vyjadřuje všechny tlaky a rozdíly v decibarech. Původní hodnoty v psi
          jsme vynásobili převodním faktorem 0,689476 podle manuálu Sea-Bird.
          První sloupec určuje tlak nastavený při zkoušce, další dva ukazují,
          jak se po opravě změnila shoda s referencí.{" "}
          <SourceLink id="2010_SeaBird_9plus_Manual">(Sea-Bird, s. 46)</SourceLink>
        </p>
        <figure className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" aria-label="Všech jedenáct kalibračních bodů" tabIndex={0}>
            <table>
              <thead><tr><th scope="col">Absolutní reference (dbar)</th><th scope="col">Rozdíl před opravou (dbar)</th><th scope="col">Rozdíl po opravě (dbar)</th></tr></thead>
              <tbody>
                {example.rows.map((row) => (
                  <tr key={row.step}><th scope="row">{number(row.referenceDbar)}</th><td>{number(row.beforeDbar)}</td><td>{number(row.afterDbar)}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption>
            Vlastní výpočet ze všech řádků <SourceLink id="2022_SeaBird_P1207_Calibration">protokolu</SourceLink>{" "}
            v původním pořadí. Rozdíl je údaj přístroje minus reference. Kladné číslo znamená,
            že přístroj ukazuje více. Původní jednotky psi jsme převedli na dbar násobením 0,689476
            podle manuálu Sea-Bird.
          </figcaption>
        </figure>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/pressure-height/calibration-residuals.png"
            alt="Rozdíly mezi tlakoměrem a referencí v jedenácti kalibračních bodech. Oprava snižuje největší absolutní rozdíl přibližně z 0,725 na 0,273 dbar. Výsledky při rostoucím a klesajícím tlaku se zcela nepřekrývají."
            width={1600} height={1216} sizes="(max-width: 700px) 100vw, 770px" unoptimized />
          <figcaption>
            Vlastní graf stejných jedenácti bodů. Vodorovná osa je absolutní referenční tlak,
            svislá rozdíl od reference. Oranžová znamená stav před opravou, zelená po opravě.
            Kruhy a plné čáry sledují zvyšování tlaku, čtverce a přerušované čáry jeho snižování.
            Spojnice pouze vedou mezi měřenými body.
          </figcaption>
        </figure>
        <h3>Rozdíl mezi přístrojem a referencí</h3>
        <p>
          Podívejme se na osmý řádek, zaznamenaný při snižování tlaku.
          Frekvence byla 35 196,00 Hz a vnitřní teplota 23,5 °C.
          Referenční tlak měl hodnotu 5 976,138 psia, údaj přístroje před opravou
          5 977,189 psia a po opravě 5 976,534 psia.
          Od opraveného údaje odečteme referenci a výsledek převedeme na dbar:
        </p>
        <Equation tex={[
          String.raw`(5\,976{,}534 - 5\,976{,}138)`,
          String.raw`\times 0{,}689476 \approx 0{,}273\,\mathrm{dbar}`,
        ]} />
        <p>
          Přístroj po opravě ukázal o 0,396 psi, tedy přibližně <strong>0,273 dbar</strong>,
          více než reference. Je to největší velikost rozdílu po opravě v celé tabulce.
          Před opravou dosahovala největší odchylka přibližně 0,725 dbar.
          Stejný postup lze zopakovat pro všech jedenáct řádků a získat obě křivky v grafu.
        </p>

        <h3>Co by tlakový rozdíl znamenal pro výšku vody</h3>
        <p>
          Pro představu převedeme rozdíl 0,273 dbar na výšku vodního sloupce.
          Jde o <strong>ilustrační výpočet</strong> pro zvolenou hustotu 1 000 kg/m³
          a standardní tíhové zrychlení 9,80665 m/s². Laboratorní protokol neposkytuje
          měření hloubky v oceánu. Ukazujeme, jak velká změna hloubky by za těchto podmínek
          vytvořila stejný tlakový rozdíl.
        </p>
        <p>
          Nejprve převedeme decibary na pascaly násobením 10 000.
          Potom tlakový rozdíl Δp vydělíme součinem hustoty a tíhového zrychlení,
          stejně jako v hlavním výkladu. Výsledné Δh je odpovídající rozdíl hloubek
          v metrech:
        </p>
        <Equation tex={[
          String.raw`\Delta h = \frac{\Delta p}{\rho g} = \frac{0{,}273\times10\,000}{1\,000\times9{,}80665}`,
          String.raw`\approx 0{,}278\,\mathrm{m}`,
        ]} />
        <p>
          V takové vodě by tedy tlakový rozdíl odpovídal přibližně 27,8 cm výšky
          vodního sloupce. Řecké písmeno <InlineMath tex={String.raw`\rho`} /> opět
          označuje hustotu v kg/m³ a <em>g</em> tíhové zrychlení v m/s².
          Skript ke stažení počítá s nezaokrouhleným tlakovým rozdílem z tabulky.
        </p>
        <p>
          Stejný převod ukazuje význam tlaku vzduchu nad hladinou.
          Za zvolených podmínek odpovídá 1 hPa, tedy 100 Pa, přibližně 10,2 mm vody.
          Změna atmosférického tlaku o 10 hPa by bez jejího odečtení vypadala
          jako změna hladiny asi o 10,2 cm. I tento údaj je ilustrací pro zadanou
          hustotu a tíhové zrychlení, nikoli záznamem konkrétní stanice.
        </p>
        <details className="method-details">
          <summary>Data a výpočet ke stažení</summary>
          <p>
            Ukládáme vlastní přepis číselné tabulky ve formátu CSV, tedy s hodnotami oddělenými čárkami.
            Stáhněte první tři soubory do jedné složky a spusťte <code>node reproduce.mjs</code>{" "}
            v Node.js 22 nebo novějším. Skript ověří kontrolní součet CSV a vstupní hodnoty,
            vypočítá rozdíly a vypíše použitý osmý řádek i oba ilustrační převody na výšku.
            Žádný řádek nevyřazuje, neprokládá křivku ani znovu neodhaduje kalibrační koeficienty.
          </p>
          <p>
            Přepočítáváme vytištěné hodnoty tlaku. Převod původní frekvence a vnitřní teploty
            znovu nesestavujeme, odečty i koeficienty v PDF jsou zaokrouhlené a neumožňují
            přesně zopakovat interní výpočet přístroje.
          </p>
          <ul>
            <li><a href={`${dataPath}/calibration.csv`} download>Přepis všech číselných sloupců protokolu</a></li>
            <li><a href={`${dataPath}/example.json`} download>Původ, jednotky, postup a kontrolní součty</a></li>
            <li><a href={`${dataPath}/reproduce.mjs`} download>Skript pro kontrolu a výpočet</a></li>
            <li><a href={`${dataPath}/plot.py`} download>Samostatný skript grafu pro Python s knihovnou Matplotlib</a></li>
          </ul>
          <p>
            Metadata obsahují datum přístupu 4. října 2026 a kontrolní součty SHA-256 přepisu
            i původního PDF. Ty pomáhají rozpoznat změnu souboru, samy však nepotvrzují správnost
            přepisu. Číselné hodnoty lze porovnat s
            <SourceLink id="2022_SeaBird_P1207_Calibration"> veřejným originálem v archivu NOAA</SourceLink>.
            Datum kalibrace přebíráme z dokumentu. Jeho název souboru uvádí následující den.
          </p>
        </details>
        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Tlak ve vodě nebo vzduchu souvisí s tíhou sloupce nad místem měření. Jeho
            změnu lze při znalosti hustoty převést na rozdíl výšek. Tlakové čidlo tak
            propojí naměřené vlastnosti vody či vzduchu s jejich polohou ve svislém
            profilu.
          </p>
          <p>
            Metoda umožňuje měřit hloubku pod vodou, výšku hladiny nad čidlem i výšku
            tlakových hladin v atmosféře. Slouží oceánským profilům, sledování vodních
            stavů a atmosférickým sondážím. Hlubokomořské provedení sondy SBE 9plus
            umožňuje měření do hloubky 10 500 m.{" "}
            <SourceLink id="2010_SeaBird_9plus_Manual">(Sea-Bird, 2010: SBE 9plus)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
