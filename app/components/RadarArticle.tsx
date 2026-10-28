import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function RadarArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak radar měří déšť a rozpoznává vrstvy ledu</h2>
        <p className="article-prose__intro">
          Radarové měření využívá vlastní vyslané rádiové vlny a jejich návrat
          od sledovaného prostředí. Z doby návratu zjistíme vzdálenost, ze síly
          přijatého signálu odvozujeme vlastnosti částic nebo rozhraní, která jej
          vrátila. Meteorologický radar tak mapuje déšť, zatímco radar zaměřený
          do ledovce může rozpoznat vrstvy pod jeho povrchem. Nejprve si vysvětlíme
          měření deště pozemním meteorologickým radarem.{" "}
          <SourceLink id="WEB_NOAA_How_Radar_Works">(NOAA: princip radaru)</SourceLink>{" "}
          a <SourceLink id="DOI_10_1002_2014JF003215">(MacGregor a kol. 2015)</SourceLink>
        </p>

        <h3>Vyslaný pulz a jeho návrat</h3>
        <p>
          Pro měření deště se používají například mikrovlny s vlnovou délkou přibližně deset centimetrů.
          Jsou to elektromagnetické vlny, stejně jako světlo, ale s mnohem větší
          vzdáleností mezi sousedními vrcholy vlny. Vysílač je vyšle v krátké dávce, které říkáme pulz,
          a potom přístroj poslouchá. Když vlna zasáhne dešťové kapky, uvede
          elektrické náboje v jejich vodě do kmitání. Kapky tím samy vyšlou záření
          do různých směrů. Část se vrátí k radaru jako echo. Tomuto přesměrování
          záření říkáme rozptyl.{" "}
          <SourceLink id="WEB_NOAA_How_Radar_Works">(NOAA: vysílání a příjem)</SourceLink>{" "}
          a <SourceLink id="WEB_Hunter_Radar_Rainfall_1996">(Hunter 1996, oddíl 2)</SourceLink>
        </p>
        <p>
          Echo z blízkých kapek dorazí dříve než echo ze vzdálených. Radar měří
          čas mezi vysláním a přijetím a přiřazuje signál k úsekům podél paprsku.
          Pro vzdálenost platí jednoduchý vztah:
        </p>
        <Equation tex={String.raw`r=\frac{c\,\Delta t}{2}`} />
        <p>
          Vzdálenost <InlineMath tex="r" /> vychází v metrech,
          když dobu letu <InlineMath tex={String.raw`\Delta t`} /> dosadíme
          v sekundách a rychlost vlny <InlineMath tex="c" /> v metrech za sekundu.
          Ve vzduchu je tato rychlost přibližně 300 milionů metrů za sekundu.
          Dělíme dvěma, protože vlna urazila cestu ke kapkám i zpět. Směr antény
          spolu se vzdáleností určí, ze které části atmosféry echo přišlo.{" "}
          <SourceLink id="WEB_NOAA_How_Radar_Works">(NOAA: určení vzdálenosti)</SourceLink>
        </p>
        <p>
          Jedno měření zahrnuje mnoho kapek v malém objemu vzduchu.
          Jeho šířku určuje šířka radarového svazku, jeho délku podél paprsku
          délka pulzu a způsob zpracování. Anténa postupně obkrouží obzor
          a měření zopakuje při různých sklonech. Vznikne tak soubor údajů
          o srážkách v různých směrech, vzdálenostech i výškách.{" "}
          <SourceLink id="WEB_NOAA_How_Radar_Works">(NOAA: prostorové snímání)</SourceLink>{" "}
          a <SourceLink id="DOI_10_1175_1998_TWRA">(Fulton a kol. 1998, oddíly 2 a 3)</SourceLink>
        </p>

        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/radar/pulse-and-result.svg"
            alt="Radar vyšle pulz ke kapkám. Část záření se vrací jako echo. Čas návratu určí vzdálenost, síla echa po kalibraci a započtení vzdálenosti poskytne odrazivost. Z ní se pomocí zvoleného vztahu odhadne intenzita deště."
            width={760} height={800} sizes="(max-width: 760px) 100vw, 760px" unoptimized />
          <figcaption>
            Modrá šipka ukazuje vyslaný pulz, oranžová jeho část rozptýlenou zpět.
            Horní kresba zachycuje jeden směr měření. Spodní část rozlišuje určení
            místa a odhad intenzity deště. Schéma není v měřítku, šířka šipek
            nevyjadřuje sílu signálu. Vlastní schéma podle{" "}
            <SourceLink id="WEB_NOAA_How_Radar_Works">NOAA</SourceLink>{" "}
            a <SourceLink id="DOI_10_1175_1998_TWRA">Fultona a kol. (1998)</SourceLink>.
          </figcaption>
        </figure>

        <h3>Co zachytí přístroj a jak se kalibruje</h3>
        <p>
          Konkrétní provedení si ukážeme na americkém přístroji WSR-88D.
          Název znamená Weather Surveillance Radar – 1988 Doppler, tedy typ
          meteorologického radaru s možností měřit také pohyb částic.
          Přístroje tvoří síť NEXRAD, z anglického Next Generation Weather Radar.
          Její veřejný archiv později použijeme pro vlastní výpočet.{" "}
          <SourceLink id="DOI_10_1175_1998_TWRA">(Fulton a kol. 1998)</SourceLink>
        </p>
        <p>
          Velká mísovitě prohnutá anténa soustředí vysílané záření do úzkého svazku.
          Při příjmu shromažďuje vracející se záření a vede je do přijímače.
          Ten slabý elektrický signál zesílí a převede na číselný záznam.
          Z více pulzů se určí průměrný přijatý výkon, tedy kolik energie
          přijímač zachytí za jednotku času. Právě tento výkon je vstupem
          pro výpočet odrazivosti.{" "}
          <SourceLink id="DOI_10_1175_1998_TWRA">(Fulton a kol. 1998, oddíl 2)</SourceLink>{" "}
          a <SourceLink id="WEB_Ice_Radar_Solar_Calibration_2014">(Ice a kol. 2014)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/radar/wsr88d-antenna.jpg"
            alt="Technik u velké nakloněné parabolické antény WSR-88D uvnitř ochranného kulového krytu. Vpravo je mechanismus, který anténou otáčí a mění její sklon."
            width={800} height={600} sizes="(max-width: 800px) 100vw, 800px" unoptimized />
          <figcaption>
            Anténa WSR-88D uvnitř ochranného krytu na snímku NWS Louisville.
            Zakřivená plocha patří anténě, která vysílá i přijímá.
            Kryt ji chrání před počasím a propouští používané mikrovlny.
            Postava technika ukazuje velikost zařízení.
            Foto NOAA / National Weather Service Louisville, individuální autor
            a datum neuvedeny.{" "}
            <SourceLink id="WEB_NWS_Louisville_Radar_History">Původní snímek</SourceLink>,{" "}
            <SourceLink id="WEB_NWS_Public_Domain">volné užití podle pravidel NWS</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Aby číselný údaj odpovídal skutečně přijatému výkonu, potřebujeme
          kalibraci. Do přijímací cesty lze přivést zkušební rádiový signál
          o známém výkonu a porovnat jej s odezvou přístroje. Tím zjistíme,
          jak přijímač zesiluje signál. Do výpočtu dále vstupuje měřený výkon
          vysílače a ztráty v cestě signálu mezi jednotlivými částmi radaru.{" "}
          <SourceLink id="WEB_Hunter_Radar_Rainfall_1996">(Hunter 1996, oddíl 2a)</SourceLink>{" "}
          a <SourceLink id="WEB_Ice_Radar_Solar_Calibration_2014">(Ice a kol. 2014, oddíl I)</SourceLink>
        </p>
        <p>
          Samostatně je třeba určit účinek antény i jejího krytu.
          WSR-88D k tomu využívá také Slunce jako vzdálený zdroj mikrovln.
          Anténa pomalu přejíždí přes jeho známou polohu. Přijatý signál se
          porovnává s aktuálním slunečním rádiovým tokem měřeným observatořemi,
          tedy s množstvím záření dopadajícím na jednotku plochy v daném pásmu.
          Porovnání určí, jak účinně anténa toto záření přijímá.
          Poloha nejsilnějšího signálu zároveň umožní zkontrolovat směr antény.{" "}
          <SourceLink id="WEB_Ice_Radar_Solar_Calibration_2014">(Ice a kol. 2014, oddíl II)</SourceLink>
        </p>

        <h3>Proč potřebujeme odrazivost</h3>
        <p>
          Stejný déšť vytvoří slabší přijaté echo, když je od radaru dál.
          Záření se cestou rozprostírá a radar zachytí jen malou část toho,
          co kapky rozptýlí zpět. Pro porovnání různých míst proto převádíme
          přijatý výkon na veličinu, která tento vliv vzdálenosti odděluje.
          Výpočet používá radarovou rovnici. Ta spojuje výkon echa se vzdáleností,
          parametry přístroje a vlastnostmi sledovaného objemu.
          V základním vztahu pro déšť vyplňující měřený objem se přijatý výkon
          násobí druhou mocninou vzdálenosti. Převodní koeficient zahrnuje
          výkon vysílače, účinek antény, vlnovou délku a další parametry přístroje.
          Pokud se cestou významně zeslabuje signál, potřebuje výpočet také
          odhad tohoto zeslabení.
          Výsledkem převodu je ekvivalentní radarový faktor odrazivosti,
          kterému zde budeme stručně říkat odrazivost a značit jej <InlineMath tex="Z" />.{" "}
          <SourceLink id="WEB_Ice_Radar_Solar_Calibration_2014">(Ice a kol. 2014, radarová rovnice)</SourceLink>
        </p>
        <p>
          Význam této veličiny dobře ukazuje déšť tvořený kapkami mnohem menšími,
          než je vlnová délka radaru. Za těchto podmínek přispívá kapka k odrazivosti
          přibližně šestou mocninou svého průměru. Šestá mocnina znamená součin šesti stejných čísel. Příspěvky kapek se sečtou a vztáhnou na jednotku
          objemu vzduchu. Při průměrech v milimetrech a objemu v metrech krychlových
          dostaneme jednotku <InlineMath tex={String.raw`\mathrm{mm^6\,m^{-3}}`} />.
          Velké kapky tak mají na echo mnohem větší vliv než malé.{" "}
          <SourceLink id="WEB_Hunter_Radar_Rainfall_1996">(Hunter 1996, úvod a oddíl 2c)</SourceLink>
        </p>
        <p>
          Slovo „ekvivalentní“ znamená, že přijaté echo vyjadřujeme takovou
          odrazivostí drobných vodních kapek, která by mu odpovídala.
          Tuto stupnici přístroj používá i tehdy, když sleduje jiné částice.{" "}
          <SourceLink id="WEB_Hunter_Radar_Rainfall_1996">(Hunter 1996, oddíl 2c)</SourceLink>
        </p>
        <p>
          Hodnoty odrazivosti mohou být velmi rozdílné, proto se na mapách
          obvykle zapisují logaritmicky v dBZ. Každých deset dBZ navíc znamená
          desetinásobek odrazivosti v původní stupnici. Pro návrat z údaje
          <InlineMath tex="z" /> v dBZ k odrazivosti použijeme:
        </p>
        <Equation tex={String.raw`Z=10^{\frac{z}{10}}\,\mathrm{mm^6\,m^{-3}}`} />
        <p>
          Symbol <InlineMath tex="z" /> zde označuje číselný údaj na stupnici dBZ.
          Výraz <InlineMath tex={String.raw`10^{\frac{z}{10}}`} /> říká, na jakou mocninu
          máme umocnit deset. Tento převod pouze mění způsob zápisu stejného
          radarového výsledku. Množství dešťové vody zjistíme až dalším krokem.{" "}
          <SourceLink id="WEB_Hunter_Radar_Rainfall_1996">(Hunter 1996, odrazivost a srážkový odhad)</SourceLink>
        </p>

        <h3>Jak vzniká odhad intenzity deště</h3>
        <p>
          Intenzita deště říká, jak rychle voda dopadá na povrch.
          Vyjadřuje se v milimetrech za hodinu, mm/h. Představujeme si výšku
          vrstvy vody, která by se při dané intenzitě za hodinu vytvořila
          na vodorovné ploše, pokud by voda neodtékala ani se nevsakovala.
          K jejímu určení potřebujeme znát množství vody v kapkách i rychlost
          jejich pádu. Objem kapky přitom roste s třetí mocninou jejího průměru,
          zatímco radarové echo s mocninou šestou. Proto je třeba propojit
          odrazivost s deštěm pomocí vztahu, který zahrnuje rozdělení velikostí kapek.{" "}
          <SourceLink id="WEB_Hunter_Radar_Rainfall_1996">(Hunter 1996, úvod a oddíl 4)</SourceLink>
        </p>
        <p>
          Takové vztahy se stanovují z měření. Rozdělení velikostí kapek a jejich
          pádu zachycují <Link href="/metody/srazkomery-a-disdrometry">disdrometry</Link>,
          množství dopadlé vody měří srážkoměry. Z naměřených souborů lze určit
          závislost mezi odrazivostí a intenzitou deště. Často se zapisuje jako
          mocninný vztah Z–R, podle značek obou veličin. Jeho koeficienty
          vystihují určitý druh deště a podmínky, pro které byl stanoven.{" "}
          <SourceLink id="WEB_Hunter_Radar_Rainfall_1996">(Hunter 1996, oddíl 4)</SourceLink>
        </p>
        <p>
          Známe-li odrazivost v dBZ a koeficienty zvoleného vztahu,
          můžeme intenzitu vyjádřit přímo takto:
        </p>
        <Equation tex={String.raw`R=\left(\frac{10^{\frac{z}{10}}}{a}\right)^{\frac{1}{b}}\,\mathrm{mm\,h^{-1}}`} />
        <p>
          <InlineMath tex="R" /> je odhad intenzity deště, <InlineMath tex="z" />
          je číselný údaj odrazivosti v dBZ. Čísla <InlineMath tex="a" />
          a <InlineMath tex="b" /> jsou koeficienty stanovené z měření pro zápis
          odrazivosti v <InlineMath tex={String.raw`\mathrm{mm^6\,m^{-3}}`} />
          a intenzity v mm/h. Nejprve odstraníme logaritmický zápis odrazivosti,
          potom dělíme koeficientem <InlineMath tex="a" /> a nakonec použijeme
          mocninu <InlineMath tex={String.raw`\frac{1}{b}`} />. Fulton a kolegové v popisu
          výpočtu pro WSR-88D uvádějí běžnou volbu 300 a 1,4 i alternativu
          250 a 1,2 pro tropický déšť. Jde o volbu převodu podle srážkové situace.{" "}
          <SourceLink id="DOI_10_1175_1998_TWRA">(Fulton a kol. 1998, oddíl 3d)</SourceLink>
        </p>

        <h3>Mapa deště a množství vody za určitou dobu</h3>
        <p>
          Před sestavením srážkové mapy se vybírají echa patřící srážkám.
          Odrazy od známých terénních překážek se potlačují a měření z různých
          sklonů antény pomáhají vybrat použitelný údaj co nejblíže povrchu.
          Pro každé místo tak získáme odhad intenzity v daném okamžiku.
          Sestavením těchto údajů vedle sebe vzniká mapa, která ukazuje
          rozložení a vnitřní členění deště.{" "}
          <SourceLink id="DOI_10_1175_1998_TWRA">(Fulton a kol. 1998, oddíly 2 a 3c)</SourceLink>
        </p>
        <p>
          Srážkový úhrn získáme, když připočteme vodu napadanou v jednotlivých
          časových intervalech. Intenzitu v každém intervalu násobíme jeho délkou
          a výsledky sečteme:
        </p>
        <Equation tex={String.raw`H=\sum_i R_i\,\Delta t_i`} />
        <p>
          <InlineMath tex="H" /> je úhrn v milimetrech, <InlineMath tex="R_i" />
          průměrná nebo z měření odhadnutá reprezentativní intenzita v intervalu
          <InlineMath tex="i" /> a <InlineMath tex={String.raw`\Delta t_i`} />
          délka tohoto intervalu v hodinách. Značka součtu znamená, že projdeme
          všechny intervaly sledované doby. Mezi radarovými snímky se průběh
          intenzity odhaduje z okolních měření. Tak vzniká hodinový,
          denní nebo celkový úhrn při průchodu deště.{" "}
          <SourceLink id="DOI_10_1175_1998_TWRA">(Fulton a kol. 1998, oddíl 3e)</SourceLink>
        </p>
        <p>
          Radarové úhrny lze dále porovnat se srážkoměry za stejnou dobu.
          Pokud radar v širším okolí soustavně udává jiné množství vody,
          lze ze společných měření určit opravný faktor a radarové odhady
          podle něj upravit. Radar přináší podrobný obraz prostoru,
          srážkoměry vazbu na vodu zachycenou u země.
          Způsob spojení obou měření je součástí definice výsledného datového souboru.{" "}
          <SourceLink id="DOI_10_1175_1998_TWRA">(Fulton a kol. 1998, oddíl 3f)</SourceLink>
        </p>
        <p>
          Pro klimatologii se mnoho let radarových měření zpracovává společným
          postupem. Příkladem je RADKLIM, radarová klimatologie německé meteorologické služby Deutscher Wetterdienst, zkráceně DWD.
          Spojuje radarová měření se srážkoměry a poskytuje mapy s buňkami
          o ploše jednoho kilometru čtverečního. Kreklow a kolegové na tomto
          souboru zkoumali prostorové rozložení ročních a sezónních úhrnů
          i výskyt silných hodinových srážek. Radar tím umožňuje studovat,
          jak rozsáhlé jsou přívalové deště a kde se jejich jádra vyskytují
          mezi měřicími stanicemi. Na toto použití navazuje článek o{" "}
          <Link href="/pozorovani/srazky-a-privalove-srazky">srážkách a přívalových srážkách</Link>.{" "}
          <SourceLink id="DOI_10_3390_atmos11020217">(Kreklow a kol. 2020)</SourceLink>
        </p>

        <h3>Vývoj radaru a další informace z echa</h3>
        <p>
          Meteorologické využití radaru se rozvíjelo během druhé světové války,
          kdy se ukázalo, že zachycuje i srážky. Pozdější přístroje umožnily
          kromě polohy měřit také sílu echa a pohyb částic. Síť WSR-88D vznikala
          v letech 1991–1997 a spojila pravidelné snímání s automatickým výpočtem
          srážek, jehož vývoj začal v osmdesátých letech.
          Historii přístrojů dokumentuje National Weather Service,
          původní podobu srážkového výpočtu podrobně popsali Fulton a kolegové.{" "}
          <SourceLink id="WEB_NWS_Radar_History">(NWS: vývoj radaru)</SourceLink>{" "}
          a <SourceLink id="DOI_10_1175_1998_TWRA">(Fulton a kol. 1998)</SourceLink>
        </p>
        <p>
          Dopplerovský radar sleduje také změnu polohy kmitů přijaté vlny mezi
          po sobě jdoucími pulzy, označovanou jako změna fáze.
          Když se kapky přibližují nebo vzdalují, mění se délka cesty signálu
          a s ní i tato fáze. Z její změny radar vypočítá rychlost částic směrem k anténě nebo od ní. Tento pohyb vytváří proudění vzduchu i pád částic. Mapa těchto rychlostí pomáhá rozpoznat proudění a rotaci uvnitř bouří.{" "}
          <SourceLink id="WEB_NOAA_How_Radar_Works">(NOAA: Dopplerovo měření)</SourceLink>
        </p>
        <p>
          Dvojí polarizace přidává informaci o tvaru a druhu částic.
          Polarizace označuje směr kmitání elektrického pole vlny.
          Radar vysílá a přijímá vodorovnou i svislou složku a porovnává
          jejich odezvu. Zploštělé kapky, sněhové vločky a kroupy na obě složky
          reagují různě. Porovnání proto pomáhá určit, jaké částice echo vytvářejí,
          a zvolit odpovídající postup pro odhad srážek.
          Kalibraci této úpravy sítě WSR-88D popsali Ice a kolegové.{" "}
          <SourceLink id="WEB_Ice_Radar_Solar_Calibration_2014">(Ice a kol. 2014, oddíly I a III)</SourceLink>
        </p>

        <h3>Vrstvy uvnitř sněhu a ledovce</h3>
        <p>
          Radar může vysílat také do sněhu a ledu. Část vlny se odrazí
          na rozhraních, kde se mění elektrické vlastnosti prostředí.
          Takové rozdíly souvisejí například s hustotou sněhu nebo s obsahem
          příměsí, které mění elektrickou vodivost ledu. Opakované měření
          podél trasy zachytí průběh těchto rozhraní pod povrchem.{" "}
          <SourceLink id="DOI_10_1002_2014JF003215">(MacGregor a kol. 2015, oddíly 2 a 3)</SourceLink>
        </p>
        <p>
          Hloubka se opět počítá z doby letu tam a zpět. U leteckého měření nejprve odečteme čas potřebný k cestě vzduchem. Zbývající čas násobíme rychlostí vlny v ledu a dělíme dvěma. Tato rychlost je nižší než ve vzduchu. Stanovuje se z elektrických vlastností ledu a její vhodnost lze ověřovat porovnáním radarové tloušťky ledovce s hloubkou vrtu, který dosáhl podloží. Z jednotlivých ech vznikne svislý záznam a ze záznamů
          podél letu řez ledovcem. Na něm lze sledovat, jak se vrstvy prohýbají
          a jak pokračují mezi vzdálenými místy.{" "}
          <SourceLink id="DOI_10_1002_2014JF003215">(MacGregor a kol. 2015, oddíl 2)</SourceLink>
        </p>
        <p>
          Stáří vrstvy se určuje pomocí návaznosti na ledovcové vrty.
          Kde radarová trasa protíná vrt, spojí se rozhraní v radarovém záznamu
          s datovanou hloubkou ve vrtu. Sledování stejné vrstvy pak přenese
          informaci o stáří do okolí. MacGregor a kolegové tak využili letecká
          měření z Grónska z let 1993–2013 a stáří ze šesti hlubokých vrtů.
          Vytvořili prostorový obraz stáří ledu, který pomáhá rekonstruovat
          historii a deformaci ledového příkrovu.{" "}
          <SourceLink id="DOI_10_1002_2014JF003215">(MacGregor a kol. 2015)</SourceLink>
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Odhad deště ovlivňuje velikost a skupenství částic, kalibrace i výška,
          ve které radar srážky sleduje. Pod ním se déšť může změnit dříve,
          než dopadne na zem. Kreklow a kolegové zjistili u německého RADKLIM
          za roky 2006–2017 průměrný roční úhrn o 7,9 % nižší než
          ve srážkoměrném referenčním souboru. Část srážkoměrů ale sloužila
          i k úpravě radarových dat, takže porovnání nebylo zcela nezávislé.
          U ledovců závisí určení hloubky na rychlosti vlny v materiálu
          a určení stáří na správném propojení vrstev s vrty.{" "}
          <SourceLink id="DOI_10_3390_atmos11020217">(Kreklow a kol. 2020, oddíly 3.2 a 4)</SourceLink>{" "}
          a <SourceLink id="DOI_10_1002_2014JF003215">(MacGregor a kol. 2015)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Co ovlivňuje výsledek a jak se kontroluje</summary>
          <p>
            <strong>Vlastnosti částic.</strong> Stejnou odrazivost mohou vytvořit
            různé směsi malých a velkých kapek s odlišným množstvím vody.
            Zvolený vztah Z–R tento rozdíl popisuje jen přibližně. Tající sníh
            nebo kroupy mohou vytvořit silné echo, které při použití vztahu
            pro déšť nadhodnotí intenzitu. Dvojí polarizace pomáhá částice rozlišit.{" "}
            <SourceLink id="WEB_Hunter_Radar_Rainfall_1996">(Hunter 1996)</SourceLink>{" "}
            a <SourceLink id="WEB_Ice_Radar_Solar_Calibration_2014">(Ice a kol. 2014)</SourceLink>
          </p>
          <p>
            <strong>Místo a velikost měření.</strong> S rostoucí vzdáleností
            se svazek rozšiřuje a kvůli zakřivení Země zpravidla sleduje vyšší
            část atmosféry. Hory jej mohou zakrýt. Změny teploty a vlhkosti
            vzduchu mění jeho ohyb, takže může zasáhnout i zemský povrch.
            Část energie se cestou pohltí nebo rozptýlí mimo směr příjmu.
            Měření v objemu nad zemí se navíc prostorově liší od malé sběrné
            plochy srážkoměru. Krok uložených buněk není totéž co nejistota
            ani skutečná schopnost rozlišit dvě sousední srážkové oblasti.{" "}
            <SourceLink id="WEB_Hunter_Radar_Rainfall_1996">(Hunter 1996, oddíl 2)</SourceLink>
          </p>
          <p>
            <strong>Kalibrace a stabilita.</strong> Zkušební signály sledují
            odezvu přijímače, sluneční měření vlastnosti antény a vzájemný rozdíl
            polarizačních kanálů. Změna kalibrace se může projevit jako změna
            deště. Pro dlouhodobé hodnocení je proto důležitá historie údržby
            a společné zpracování archivu. RADKLIM takto znovu zpracoval německá
            radarová data od roku 2001 a omezil některé skoky přítomné
            v průběžně vytvářeném souboru RADOLAN.{" "}
            <SourceLink id="WEB_Ice_Radar_Solar_Calibration_2014">(Ice a kol. 2014)</SourceLink>{" "}
            a <SourceLink id="DOI_10_3390_atmos11020217">(Kreklow a kol. 2020, oddíly 2.2 a 4)</SourceLink>
          </p>
          <p>
            <strong>Rozsah ověření.</strong> Uvedených 7,9 % je souhrnný rozdíl
            ročních úhrnů konkrétních souborů, nikoli interval nejistoty každého
            radarového údaje. Porovnání zahrnovalo také 997 dvojic srážkoměrů
            a odpovídajících radarových buněk. Část pozemních měření byla
            společná pro úpravu i kontrolu výsledků. Silnější nezávislou zkoušku
            by poskytla měření vyhrazená pouze pro ověření. Autoři tuto mezeru
            výslovně uvádějí.{" "}
            <SourceLink id="DOI_10_3390_atmos11020217">(Kreklow a kol. 2020, oddíly 2.3 a 4)</SourceLink>
          </p>
          <p>
            <strong>Vrstvy ledu.</strong> Hloubku ovlivňuje předpokládaná rychlost
            šíření a méně hustý sníh nad kompaktním ledem. Přerušení echa může
            ztížit spojení vrstev mezi trasami. Některé odrazy vznikají změnou
            uspořádání ledových krystalů a nemusí sledovat stejně starý led.
            Vrt použitý k přiřazení stáří je datovací vstup, nikoli nezávislé
            potvrzení tohoto přiřazení. Kontrolu poskytují mimo jiné průsečíky
            radarových tras a shoda vrstev mezi nimi.{" "}
            <SourceLink id="DOI_10_1002_2014JF003215">(MacGregor a kol. 2015, oddíly 2 a 3)</SourceLink>
          </p>
        </details>

        <h2>Příklad: radarové měření u Houstonu</h2>
        <p>
          Použijeme veřejný záznam radaru KHGX u Houstonu z 27. srpna 2017.
          V jednom měřeném objemu přibližně 30 kilometrů jižně až jihozápadně
          od radaru byla ve 12:04:19,890 UTC zaznamenána odrazivost 41 dBZ.
          UTC je světový koordinovaný čas. Začínáme u archivovaných dat
          úrovně Level II, která již obsahují přístrojem zpracovanou odrazivost.
          Vlastní výpočet tedy navazuje až na tuto část měření.{" "}
          <SourceLink id="DOI_10_7289_V5W9574V">(NOAA NEXRAD Level II)</SourceLink>
        </p>
        <div className="method-data-output">
          <div className="method-data-output__table-wrap">
            <table>
              <caption>Vybraný skutečný radarový údaj</caption>
              <thead><tr><th scope="col">Údaj</th><th scope="col">Hodnota</th></tr></thead>
              <tbody>
                <tr><th scope="row">Čas měření</th><td>27. 8. 2017, 12:04:19,890 UTC</td></tr>
                <tr><th scope="row">Směr od severu po směru hodinových ručiček</th><td>199,201°</td></tr>
                <tr><th scope="row">Sklon antény nad obzor</th><td>0,461°</td></tr>
                <tr><th scope="row">Vzdálenost středu buňky od radaru</th><td>30,125 km</td></tr>
                <tr><th scope="row">Odrazivost</th><td>41 dBZ</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>
          Nejprve převedeme údaj z logaritmické stupnice. Dosadíme číslo 41
          do již vysvětleného vztahu:
        </p>
        <Equation tex={[
          String.raw`Z=10^{\frac{41}{10}}\,\mathrm{mm^6\,m^{-3}}`,
          String.raw`\approx 12\,589\,\mathrm{mm^6\,m^{-3}}`,
        ]} />
        <p>
          Pro následující odhad zvolíme vztah pro tropický déšť
          s koeficienty <InlineMath tex="a=250" /> a <InlineMath tex={String.raw`b=1{,}2`} />,
          který uvádějí Fulton a kolegové. Tato volba je předpokladem našeho
          výpočtu. Její vhodnost pro vybraný objem zde neověřujeme samostatným
          měřením kapek. Po dosazení dostaneme:
          {" "}<SourceLink id="DOI_10_1175_1998_TWRA">(Fulton a kol. 1998, s. 382)</SourceLink>
        </p>
        <Equation tex={[
          String.raw`R=\left(\frac{10^{\frac{41}{10}}}{250}\right)^{\frac{1}{1{,}2}}\,\mathrm{mm\,h^{-1}}`,
          String.raw`\approx 26{,}2\,\mathrm{mm\,h^{-1}}`,
        ]} />
        <p>
          Výsledkem je odhad okamžité intenzity přibližně 26,2 mm/h
          pro vybraný radarový objem při zvoleném převodu.
          Hodinový úhrn by vyžadoval další měření během celé hodiny
          a jejich časové sečtení. Ukázka opakuje jeden převod skutečné odrazivosti,
          nikoli oficiální srážkový produkt NOAA ani srážkoměrné měření u země.
        </p>
        <details className="method-details">
          <summary>Data, výběr buňky a zopakování výpočtu</summary>
          <p>
            Původní soubor se jmenuje <code>KHGX20170827_120416_V06</code>.
            Z veřejného archivu jsme jej stáhli 27. října 2026.
            Obsahuje měření radaru na souřadnicích 29,471901° severní šířky
            a 95,078735° západní délky. V prvním skenu vybíráme paprsek
            s indexem 160 a vzdálenostní buňku 112, v obou případech při
            číslování od nuly. Je to výběr jednoho údaje pro ukázku postupu,
            bez prostorového či časového průměrování. Soubor i jeho dostupnost
            dokumentují <SourceLink id="DOI_10_7289_V5W9574V">NOAA</SourceLink>{" "}
            a <SourceLink id="WEB_Unidata_NEXRAD_Archive">registr veřejného archivu</SourceLink>.
          </p>
          <p>
            Hlavička odrazivosti udává střed první buňky ve vzdálenosti
            2,125 km a krok 0,250 km. Vybraná vzdálenost je proto
            2,125 + 112 × 0,250 = 30,125 km. Binární záznam čte
            knihovna MetPy ve verzi 1.7.1. Dekóduje uložené hodnoty
            i čas a směr každého paprsku. Samotný následný výpočet
            intenzity používá pouze standardní knihovnu Pythonu.{" "}
            <SourceLink id="WEB_MetPy_Level2File">(Unidata: Level2File)</SourceLink>
          </p>
          <ul>
            <li><a href="/data/radar/reflectivity.csv">Vybraný údaj v CSV</a> a <a href="/data/radar/result.json">výsledek výpočtu</a>.</li>
            <li><a href="/data/radar/reproduce.py">Skript výpočtu</a>. Uložte jej vedle CSV a spusťte <code>python reproduce.py</code>.</li>
            <li><a href="/data/radar/extract.py">Skript extrakce</a>. S knihovnou <code>metpy==1.7.1</code> stáhne původní soubor, ověří jeho otisk a znovu vytvoří CSV.</li>
            <li><a href="/data/radar/provenance.json">Původ dat, adresa originálu a kontrolní otisky</a>.</li>
          </ul>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Radar z doby návratu vyslané vlny určí vzdálenost a ze síly i dalších
            vlastností echa získá informace o cíli. Zpřístupňuje tak prostorové
            uspořádání srážek i vrstev uvnitř ledovce. Fyzikální převod a porovnání s
            pozemními měřeními dávají radarovému obrazu měřitelný význam.
          </p>
          <p>
            Radar umožňuje mapovat polohu, intenzitu a druh srážek, sledovat jejich
            pohyb a zkoumat tloušťku i vnitřní vrstvy ledu. Srážkové produkty radaru
            WSR-88D pokrývají okolí stanice do vzdálenosti 230 km. Jiná provedení radaru
            pronikají ledovci a zaznamenávají jejich podloží i pohřbené vrstvy.{" "}
            <SourceLink id="DOI_10_1175_1998_TWRA">(Fulton a kol., 1998)</SourceLink>,{" "}
            <SourceLink id="DOI_10_1002_2014JF003215">(MacGregor a kol., 2015)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
