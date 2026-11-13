import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";

const media = "/media/oblaka-a-radiacni-bilance";

export function CloudRadiationArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="pozorovani">Co pozorujeme</h2>
    <p className="article-prose__intro">Radiační účinek oblaků vyjadřuje rozdíl mezi energetickými toky nad atmosférou při skutečné oblačnosti a při bezoblačných podmínkách. Sledujeme zvlášť odražené sluneční světlo a tepelné záření odcházející ze Země. Tok udáváme ve wattech na metr čtvereční, tedy v množství energie, které za sekundu připadá na jednotku plochy. V globálním průměru započítáváme celou Zemi včetně noci. <SourceLink id="DOC_CERES_EBAF4_2018">(CERES 2018, oddíly 1 a 6)</SourceLink></p>
    <p>Oblaka mají také měřitelnou plochu, výšku a schopnost zeslabovat procházející záření. Poslední vlastnost popisujeme optickou tloušťkou. Větší optická tloušťka znamená silnější zeslabení svazku záření při průchodu oblakem, nikoli automaticky větší výšku vrstvy v metrech. Tyto údaje pomáhají rozlišit, jaké oblaky přispívají k zaznamenanému radiačnímu výsledku. <SourceLink id="DOI_10_1029_2011JD016459">(Zelinka a Hartmann 2011, oddíl 2)</SourceLink></p>

    <h2 id="historie">Od snímků oblačnosti k souběžnému měření záření</h2>
    <p>Projekt ISCCP spojil družicové snímky z více míst do záznamu začínajícího v červenci 1983. Umožnil porovnávat množství oblaků podle výšky jejich vrcholů a optické tloušťky. Pozdější přístroje MODIS a AIRS na družici Aqua doplnily od roku 2002 podrobnější spektrální údaje. CloudSat od roku 2006 přidal radarový pohled na svislé rozložení oblačných částic. <SourceLink id="DOI_10_1029_2011JD016459">(Zelinka a Hartmann 2011, oddíly 2.1–2.5)</SourceLink></p>
    <p>Pro energetickou bilanci je určující program CERES. Jeho souvislý produkt EBAF začíná v březnu 2000 měřeními z družice Terra. Od července 2002 využívá společně Terru a Aquu. V novější edici 4.2 přechází od dubna 2022 na NOAA-20. Návaznost je nastavena pomocí čtyřletého překryvu, aby změna družice nevytvořila umělý skok. <SourceLink id="DOC_CERES_EBAF42_2024">(CERES 2024, oddíly 1 a 4)</SourceLink></p>

    <h2 id="mereni">Jak vzniká radiační údaj</h2>
    <p>Přístroj CERES měří záření přicházející z pozorované části Země do směru družice. Záznam obsahuje krátkovlnné sluneční záření a celkové záření, ze kterých se odvozuje dlouhovlnná tepelná část. Protože povrch a oblaky nevyzařují a neodrážejí stejně do všech směrů, převádí se tento signál na tok pomocí vztahů pro rozložení záření podle úhlu. Podrobnosti přístroje vysvětluje metoda <Link href="/metody/mereni-radiacnich-toku/#druzicova-bilance">měření radiačních toků</Link>. <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018, oddíl 2)</SourceLink></p>
    <p>Snímky s jemnějším rozlišením určují, která část záběru je oblačná. Z vybraných bezoblačných míst vzniká samostatný odhad toku. Doplňování nepozorovaných částí dne využívá také družice sledující stále stejnou oblast Země. Výsledkem jsou měsíční mapy. Při globálním průměrování má každé políčko váhu podle své skutečné plochy. <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018, oddíl 2)</SourceLink></p>
    <p>U slunečního záření odečteme odraz při skutečné oblačnosti od odrazu za bezoblačných podmínek. Vyšší odraz oblaků pak dává záporné číslo. U tepelného záření odečteme skutečný výdej od bezoblačného výdeje. Omezení úniku energie dává kladné číslo. Součet obou rozdílů je čistý radiační účinek oblaků. Bezoblačný odhad není pozorováním druhé Země, na které by se odstranily všechny oblaky a klima se přizpůsobilo. <SourceLink id="DOC_CERES_EBAF42_2024">(CERES 2024)</SourceLink></p>

    <h2 id="data">Která data lze otevřít</h2>
    <p><SourceLink id="DATA_CERES_EBAF">CERES EBAF</SourceLink> poskytuje měsíční toky v síti 1° zeměpisné šířky a délky od března 2000. Portál nabízí mapy, výběr proměnných a stažení souborů. Pro některé distribuční cesty je nutný bezplatný účet NASA Earthdata. Před použitím je potřeba zvolit stejnou edici a definici bezoblačného toku. Dokumentace edic 4.2 a 4.2.1 popisuje opravy a návaznost družic. <SourceLink id="DOC_CERES_EBAF42_2024">(CERES 2024)</SourceLink></p>
    <p>Následující graf používá pevný publikovaný souhrn starší edice 4.0 pro červenec 2005 až červen 2015. Zachováváme jeho verzi, aby každý mohl přesně porovnat graf s tabulkou 6-1 původní dokumentace. Nejde o výpočet z nejnovějšího průběžně doplňovaného produktu. Pod grafem je náš přepis čísel a skript, který z něj obrázek vytvoří.</p>

    <h2 id="vysledky">Co ukazuje globální součet</h2>
    <p>Oblaka ve zvoleném období zvýšila odraz slunečního záření o 45,8 W/m² vůči bezoblačnému odhadu. Jejich krátkovlnný účinek proto zapisujeme jako −45,8 W/m². Současně omezila výdej tepelného záření o 28,0 W/m², což do bilance přidává kladný příspěvek. Čistý účinek uvedený v dokumentaci je −17,9 W/m². Odraz tedy převažoval. <SourceLink id="DOC_CERES_EBAF4_2018">(CERES 2018, tabulka 6-1)</SourceLink></p>
    <p>V grafu vedou záporné hodnoty doleva a kladné doprava. Modrá označuje odraz světla, oranžová tepelné záření a tmavá výsledný součet. Všechny tři pruhy se vztahují ke stejnému období i celé ploše Země.</p>
    <figure className="article-figure article-figure--scroll-mobile">
      <div className="article-figure__scroll"><a href={media + "/radiacni-ucinek.png"} aria-label="Otevřít graf v plné velikosti"><Image className="article-figure__media" src={media + "/radiacni-ucinek.png"} width={1400} height={790} alt="Globální radiační účinek oblaků v CERES EBAF 4.0 za červenec 2005 až červen 2015: krátkovlnný −45,8, dlouhovlnný +28,0 a čistý −17,9 W/m²." unoptimized /></a></div>
      <figcaption>Vlastní graf publikovaných souhrnných hodnot, nikoli ilustrace. <SourceLink id="DOC_CERES_EBAF4_2018">CERES 2018, tabulka 6-1</SourceLink>. Dílčí čísla jsou zaokrouhlená, proto jejich součet vychází o 0,1 W/m² jinak než publikovaný čistý účinek. Tabulka neuvádí společné intervaly nejistoty této trojice, do grafu je proto nedoplňujeme. <Link href={media + "/ceres-table6-1.csv"}>CSV</Link>{" · "}<Link href={media + "/plot.py"}>reprodukční skript</Link>. Graf CC BY 4.0.</figcaption>
    </figure>

    <h2 id="porovnani">Co mění zpracování a co se měnilo v čase</h2>
    <p>Starší edice 2.8 dávala za stejné období čistý účinek −21,3 W/m². Rozdíl proti −17,9 v edici 4.0 není změnou klimatu mezi dvěma desetiletími. Jde o nové zpracování společných měření. Lepší rozpoznání tenkých a nízkých oblaků změnilo výběr bezoblačných záběrů. Upravil se také popis denního průběhu. Souhlas obou verzí v převládajícím ochlazujícím účinku je užitečná kontrola, ne dvě nezávislá měření. <SourceLink id="DOC_CERES_EBAF4_2018">(CERES 2018, oddíl 6.1)</SourceLink></p>
    <p>Samostatnou otázkou je vývoj v čase. Dokumentace edice 4.0 udává za březen 2000 až červen 2015 trend čistého účinku −0,18 ± 0,17 W/m² za desetiletí. Záporný směr znamená v tomto období zesilování záporného radiačního rozdílu. Uvedený 95% interval zachycuje meziroční kolísání měsíčních odchylek, nikoli všechny možné systematické chyby. Tento časový trend nelze zaměnit s dlouhodobou oblačnou zpětnou vazbou na jeden stupeň oteplení. <SourceLink id="DOC_CERES_EBAF4_2018">(CERES 2018, tabulka 6-3)</SourceLink></p>
    <p>Družicové profily přidávají jinou informaci. Zelinka a Hartmann v roce 2011 nalezli v teplejších tropických obdobích výše položené vysoké oblaky při přibližně zachované teplotě jejich vyzařující vrstvy. Soubory AIRS, MODIS, ISCCP a radar CloudSat tento výsledek zachycovaly různými postupy a přes různě dlouhá období. Nejde o globální trend výšky za celé století. Výškový výsledek doplňuje energetický součet, protože ukazuje změnu vlastnosti oblaků. <SourceLink id="DOI_10_1029_2011JD016459">(Zelinka a Hartmann 2011, obrázky 5–8)</SourceLink></p>
    <p>U nízkých oblaků je významným jednotlivým případem severovýchodní Pacifik v roce 2015. MODIS zde zachytil oslabení ochlazujícího radiačního účinku při mořské vlně veder. Regionální výsledek ukazuje, že globální průměr může zakrývat velké místní rozdíly. Jeho příčiny a kontrolu na starších datech rozebírá navazující mechanismus. <SourceLink id="DOI_10_1038_s41558_021_01039_0">(Myers a kol. 2021, obrázek 1)</SourceLink></p>

    <h3 id="nejistoty">Meze měřeného rozdílu</h3>
    <p>Rozpoznání tenkých oblaků a odhad bezoblačných podmínek ovlivňují velikost výsledku. U trendu se přidává návaznost přístrojů a délka zvoleného období. Proto vždy uvádíme verzi produktu a časový rozsah.</p>
    <details className="method-details"><summary>Podrobnosti nejistot</summary>
      <p>Bezoblačné záběry mohou mít jinou vlhkost a teplotu než oblasti s vytrvalou oblačností. Jejich prostý rozdíl proto není dokonale izolovaným pokusem, ve kterém změníme jen oblak. Novější produkty rozlišují pozorovaný bezoblačný tok a výpočet pro prostorově úplné bezoblačné podmínky. Tyto proměnné se při porovnání nemají směšovat. <SourceLink id="DOC_CERES_EBAF42_2024">(CERES 2024)</SourceLink></p>
      <p>Celková absolutní bilance EBAF se upravuje podle odhadu ukládání energie v klimatickém systému. Shoda této upravené bilance s oceánským teplem proto není zcela nezávislou kontrolou. Pro oblačný výsledek navíc záleží na úhlovém převodu a doplňování denního průběhu. <SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">(Loeb a kol. 2018, oddíl 2)</SourceLink></p>
    </details>

    <h2 id="shrnuti">Shrnutí pozorování</h2>
    <div className="method-conclusion"><p>Globální souhrn CERES EBAF 4.0 za červenec 2005 až červen 2015 ukazuje, že odraz slunečního světla oblaky převažoval nad jejich omezením úniku tepelného záření. Čistý radiační účinek činil −17,9 W/m². Družicové záznamy současně zachycují změny oblačné výšky a regionálního radiačního účinku. Dnešní průměr, časový trend a odezva při teplejších obdobích jsou různé údaje a pro posouzení oblačných změn je potřebujeme rozlišovat.</p></div>
    <p><strong>Navazující vysvětlení:</strong> <Link href="/mechanismy/oblaka-a-jejich-klimaticke-zpetne-vazby/">Jak oblaka zesilují nebo tlumí oteplování?</Link> Porovnává výšku a plochu vysokých oblaků i změny odrazu nízkých oblaků. Změny kapek po přísunu částic mají samostatné pozorování <Link href="/pozorovani/stopy-v-oblacich/">stop lodí a průmyslu v oblacích</Link>.</p>
    <h2 id="prameny">Prameny, data a licence</h2>
    <ul>
      <li><SourceLink id="DOC_CERES_EBAF4_2018">Dokumentace CERES EBAF 4.0 z roku 2018</SourceLink> obsahuje tabulky použitých hodnot i popis zpracování. <SourceLink id="DOC_CERES_EBAF42_2024">Dokumentace edic 4.2 a 4.2.1</SourceLink> popisuje novější návaznost a opravy.</li>
      <li><SourceLink id="DOI_10_1175_JCLI_D_17_0208_1">Loeb a kol. 2018: zpracování CERES EBAF</SourceLink>.</li>
      <li><SourceLink id="DATA_CERES_EBAF">Datový portál CERES</SourceLink>, <SourceLink id="DOI_10_1029_2011JD016459">studie výšky oblaků</SourceLink> a <SourceLink id="DOI_10_1038_s41558_021_01039_0">studie nízké oblačnosti</SourceLink> poskytují cestu k použitým datům a metodám.</li>
      <li>Vlastní graf a <Link href={media + "/ceres-table6-1.csv"}>číselný přepis</Link> jsou zveřejněny pod CC BY 4.0. <Link href={media + "/podklady.txt"}>Původ a omezení přepisu</Link>.</li>
    </ul>
  </div></article>;
}

