import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function AltimetryArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak altimetrie určuje výšku hladiny a ledu</h2>
        <p className="article-prose__intro">
          Altimetrie je měření výšky povrchu vůči zvolené výškové referenci.
          Družicový radarový nebo laserový výškoměr k tomu využívá dobu návratu
          vyslaného signálu a přesně určenou polohu družice. Opakovaná měření
          ukazují změny hladiny oceánu i výšky ledových příkrovů.
          Projdeme nejprve radarové měření oceánu družicí Jason-3
          a potom laserové měření pevninského ledu družicí ICESat-2.{" "}
          <SourceLink id="WEB_Jason3_Handbook_2018">(příručka Jasonu-3)</SourceLink>{" "}
          a <SourceLink id="DOI_10_1016_j_rse_2019_111325">(Neumann a kol. 2019)</SourceLink>
        </p>

        <h3 id="vyska-hladiny">Výška potřebuje dva údaje</h3>
        <p>
          Výškoměr vyšle krátký pulz a zaznamená, za jak dlouho se jeho část
          vrátí od povrchu. Delší cesta znamená delší čekání.
          Vzdálenost přibližně odpovídá rychlosti šíření signálu násobené
          dobou letu a dělené dvěma. Dělení zohledňuje cestu tam i zpět.
          Radar vysílá mikrovlny, laser světlo. Obojí je elektromagnetické
          záření, které se ve vakuu šíří stejnou rychlostí.{" "}
          <SourceLink id="WEB_Jason3_Handbook_2018">(příručka Jasonu-3, oddíl 5.2)</SourceLink>{" "}
          a <SourceLink id="DOI_10_1016_j_rse_2019_111325">(Neumann a kol. 2019)</SourceLink>
        </p>
        <Equation tex={String.raw`R\approx\frac{c_0\,\Delta t}{2}`} />
        <p>
          Zde je <InlineMath tex="R" /> vzdálenost v metrech před opravou
          vlivu atmosféry. Symbol <InlineMath tex={String.raw`\Delta t`} />
          označuje dobu letu v sekundách a <InlineMath tex="c_0" /> rychlost
          světla ve vakuu, přesně 299 792 458 metrů za sekundu.
          Ve skutečném měření se započítává také doba průchodu signálu
          přístrojem a jeho zpomalení v atmosféře. K oběma krokům se dostaneme
          při popisu zpracování.{" "}
          <SourceLink id="WEB_Jason3_Handbook_2018">(příručka Jasonu-3, oddíly 5.2 a 5.6)</SourceLink>
        </p>
        <p>
          Druhým údajem je poloha samotné družice. U Jasonu-3 se její dráha
          určuje z měření globálního polohového systému GPS, rádiových
          signálů pozemních sledovacích stanic. Laserová měření ze Země
          poskytují další kontrolu dráhy.
          Souřadnice se vztahují k soustavě se začátkem ve středu hmotnosti Země.
          Výšky se potom vyjadřují nad referenčním elipsoidem, hladkým
          matematickým tělesem, které přibližuje zploštělý tvar Země.
          Pro téměř svislé měření platí jednoduchá geometrie:
          od výšky družice odečteme vzdálenost k povrchu.{" "}
          <SourceLink id="WEB_Jason3_Handbook_2018">(příručka Jasonu-3, oddíly 1.4, 2.4.2 a 5.1–5.3)</SourceLink>
        </p>
        <Equation tex="h=H-r" />
        <p>
          Symbol <InlineMath tex="H" /> znamená výšku družice nad elipsoidem,
          <InlineMath tex="r" /> opravenou vzdálenost k povrchu
          a <InlineMath tex="h" /> výslednou výšku povrchu nad týmž elipsoidem.
          Všechny tři veličiny vyjadřujeme v metrech. Při přesném zpracování
          se poloha měřeného místa určuje i ze směru vyslaného paprsku.
          Společná reference umožní porovnat měření z různých přeletů.{" "}
          <SourceLink id="WEB_Jason3_Handbook_2018">(příručka Jasonu-3, oddíl 4.2)</SourceLink>{" "}
          a <SourceLink id="DOI_10_1016_j_rse_2019_111325">(Neumann a kol. 2019)</SourceLink>
        </p>

        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/altimetry/principle.svg"
            alt="Družice je ve výšce H nad referenčním elipsoidem. Měří vzdálenost r k hladině. Výška hladiny h je rozdíl H minus r."
            width={760} height={670} sizes="(max-width: 760px) 100vw, 760px" unoptimized />
          <figcaption>
            Výška družice a vzdálenost k hladině pocházejí z různých měření.
            Modrá šipka označuje výšku družice, oranžová opravenou vzdálenost
            a zelená jejich rozdíl. Přerušovaná čára je matematická reference.
            Vlastní schéma podle <SourceLink id="WEB_Jason3_Handbook_2018">příručky Jasonu-3</SourceLink>.
            Svislé vzdálenosti nejsou v měřítku.
          </figcaption>
        </figure>

        <h3>Co radar zachytí nad zvlněným oceánem</h3>
        <p>
          Radar Poseidon-3B na Jasonu-3 míří dolů a přijímá odrazy z plochy
          pod družicí. Jednotlivé části této plochy jsou různě daleko.
          Návraty proto přicházejí postupně a přijímač zaznamená průběh
          jejich výkonu v čase. Tento průběh se nazývá tvar ozvěny.
          Na moři jej ovlivňuje také rozdíl výšek vrcholků a prohlubní vln.
          Záznam se vyhodnotí přizpůsobením modelové křivky ozvěny.
          Poloha její náběžné části v čase určuje vzdálenost,
          zatímco její roztažení pomáhá určit výšku vln.
          Tomuto zpřesnění polohy ozvěny se říká retracking.{" "}
          <SourceLink id="WEB_Jason3_Handbook_2018">(příručka Jasonu-3, oddíly 3.3 a 5.2)</SourceLink>
        </p>
        <p>
          Aby bylo možné čas vztáhnout ke vzdálenosti, přístroj provádí
          vnitřní kalibrační měření. Kalibrační režimy měří zpoždění signálu
          ve vnitřní cestě a odezvu přijímače. Zjištěné vnitřní zpoždění
          se při výpočtu vzdálenosti odečítá od doby letu.
          Zpracování dále převede vzdálenost měřenou od antény
          na vzdálenost od těžiště družice, ke kterému je určena její dráha.
          Takto připravená vzdálenost je už součástí veřejného produktu
          Jasonu-3. V našem příkladu z ní budeme vycházet.{" "}
          <SourceLink id="WEB_Jason3_CalVal_C086_2018">(Michaud a kol. 2018, oddíl 3.1)</SourceLink>{" "}
          a <SourceLink id="WEB_Jason3_Handbook_2018">(příručka Jasonu-3, oddíl 5.2)</SourceLink>
        </p>
        <p>
          Další krok zohlední prostředí mezi družicí a mořem.
          Atmosféra signál zpomaluje. Kdybychom celou dobu letu připsali
          pohybu rychlostí světla ve vakuu, vyšla by příliš velká vzdálenost.
          Příspěvek suchého vzduchu se vypočítává z údajů meteorologického
          modelu o tlaku. Příspěvek vodní páry se u Jasonu-3 určuje z měření
          palubního mikrovlnného radiometru, který přijímá přirozené
          záření atmosféry a povrchu.{" "}
          <SourceLink id="WEB_Jason3_Handbook_2018">(příručka Jasonu-3, oddíl 5.6.1)</SourceLink>
        </p>
        <p>
          Ve vyšší atmosféře působí také volné elektrony.
          Oblast s elektricky nabitými částicemi nazýváme ionosféra.
          Jejich vliv na dobu letu závisí na frekvenci záření, tedy na počtu
          kmitů elektromagnetické vlny za sekundu.
          Poseidon-3B proto měří ve dvou mikrovlnných pásmech
          a z rozdílu obou měření se odhadne ionosférická oprava.{" "}
          <SourceLink id="WEB_Jason3_Handbook_2018">(příručka Jasonu-3, oddíl 5.6.2)</SourceLink>
        </p>
        <p>
          Poslední z hlavních oprav se týká mořských vln.
          Prohlubně vln obvykle odrážejí radarové pulzy silněji než jejich
          vrcholky. Výsledná ozvěna proto posouvá odhad hladiny směrem
          dolů a odhad vzdálenosti směrem nahoru.
          Empirická oprava, odvozená z měření a označovaná jako
          sea state bias, tento posun zohledňuje podle výšky vln
          a rychlosti větru.{" "}
          <SourceLink id="WEB_Jason3_Handbook_2018">(příručka Jasonu-3, oddíl 5.6.3)</SourceLink>
        </p>
        <p>
          V datovém souboru jsou tyto opravy uvedeny v metrech se znaménkem.
          Jejich součet označíme <InlineMath tex="C" />.
          Přičtením k přístrojově opravené vzdálenosti <InlineMath tex="R" />
          získáme <InlineMath tex="r" />, kterou už můžeme odečíst od výšky
          družice. Záporná oprava vzdálenost zkracuje.{" "}
          <SourceLink id="WEB_Jason3_Handbook_2018">(příručka Jasonu-3, oddíly 1.4.2 a 4.2.1)</SourceLink>
        </p>
        <Equation tex="r=R+C" />

        <h3>Jak se z výšky stane údaj o změně hladiny</h3>
        <p>
          Výsledek <InlineMath tex="h" /> udává polohu hladiny nad elipsoidem.
          Ani dlouhodobá střední hladina se však s elipsoidem nekryje.
          Její prostorový tvar souvisí s nerovnoměrným gravitačním polem Země
          a s oceánským prouděním. Pro sledování časových změn proto
          od naměřené výšky odečítáme místní hodnotu z mapy dlouhodobé
          střední hladiny. Tím získáme odchylku vůči stejné referenci
          pro všechny přelety.{" "}
          <SourceLink id="WEB_Jason3_Handbook_2018">(příručka Jasonu-3, oddíl 5.4)</SourceLink>
        </p>
        <p>
          Hladinu během přeletu zároveň mění příliv a krátkodobé působení
          atmosférického tlaku a větru. Při přípravě záznamu pro sledování
          pomalejších změn se jejich modelové příspěvky odečítají.
          Slapové opravy přitom zahrnují jak pohyb vody, tak deformaci
          pevné Země a vliv proměnlivé polohy zemské rotační osy.
          Součet těchto odečítaných výškových příspěvků označíme
          <InlineMath tex="q" /> a referenční střední hladinu
          <InlineMath tex="M" />. Výsledná anomálie, tedy odchylka
          hladiny, je <InlineMath tex="a" />. Všechny hodnoty jsou v metrech.{" "}
          <SourceLink id="WEB_Jason3_Handbook_2018">(příručka Jasonu-3, oddíly 4.2.2 a 5.9–5.10)</SourceLink>
        </p>
        <Equation tex="a=h-M-q" />
        <p>
          Kladná anomálie znamená, že po uvedených úpravách je hladina
          výše než místní referenční průměr. Opakované průlety skládají
          časovou řadu. Pro globální průměr se měření rozdělují do plošných
          oblastí a váží podle zastoupené plochy oceánu. Navazující družice
          se určitou dobu překrývají, aby bylo možné vyčíslit vzájemný posun
          a spojit jejich záznamy. Tak vzniká dlouhodobá řada popsaná
          v článku o <Link href="/pozorovani/gmsl/#druzicova-mereni">růstu hladiny oceánu</Link>.{" "}
          <SourceLink id="DOI_10_5194_os_19_431_2023">(Guérou a kol. 2023, oddíl 2)</SourceLink>
        </p>

        <h3>Jak laser určuje výšku ledového povrchu</h3>
        <p>
          Na ledu potřebujeme rozlišit i menší prostorové útvary.
          Laserový výškoměr ATLAS na družici ICESat-2 vysílá úzké svazky
          zeleného světla. Jeden pulz rozdělí do šesti paprsků uspořádaných
          do tří dvojic. Dvojice sousedních stop poskytuje informaci
          o příčném sklonu povrchu. Jeho znalost umožňuje přepočítat výšky
          z mírně posunutých přeletů na společné místo.
          ATLAS znamená Advanced Topographic Laser Altimeter System,
          pokročilý laserový systém pro měření výšky povrchu.{" "}
          <SourceLink id="DOI_10_1016_j_rse_2019_111325">(Neumann a kol. 2019)</SourceLink>{" "}
          a <SourceLink id="DOI_10_1016_j_rse_2019_111352">(Smith a kol. 2019)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/altimetry/atlas-cleanroom.jpg"
            alt="Technici v čistém prostoru u laserového výškoměru ATLAS. Ve stříbřitě zakrytém tělese je otevřený velký kruhový vstup přijímacího dalekohledu."
            width={1024} height={576} sizes="(max-width: 760px) 100vw, 760px" unoptimized />
          <figcaption>
            Přístroj ATLAS při přípravě v čistém prostoru. Velký kruhový
            otvor patří přijímacímu dalekohledu, který soustřeďuje vracející
            se světlo. Stříbřitý materiál kolem přístroje slouží jako tepelná
            izolace. Jde o snímek přístroje z videozáznamu NASA.
            Kredit: NASA&apos;s Goddard Space Flight Center.{" "}
            <SourceLink id="WEB_NASA_ATLAS_Testing_11709">Původní záznam</SourceLink>{" "}
            a <SourceLink id="WEB_NASA_Guidelines_for_using_NASA_Images_and_Media_Guide_e6f9e9e4">podmínky použití médií NASA</SourceLink>.
          </figcaption>
        </figure>
        <p>
          ATLAS zaznamenává časy příchodu jednotlivých fotonů, tedy
          jednotlivých částic světla. Část vyslaného světla vede
          také vnitřní optickou cestou zpět k detektoru. Tento referenční
          signál pomáhá sledovat tvar pulzu a časové zpoždění přístroje.{" "}
          <SourceLink id="DOI_10_1016_j_rse_2019_111325">(Neumann a kol. 2019, oddíl 2.1.5)</SourceLink>
        </p>
        <p>
          K zaznamenaným časům se připojí poloha družice určená pomocí GPS
          a směr paprsků určený optickou referencí a snímači orientace.
          Z času letu, polohy
          a směru se vypočítají souřadnice návratů.
          Výpočet opravuje také zpoždění světla v atmosféře a slapové
          pohyby Země, aby byly výšky mezi přelety srovnatelné.
          Výsledkem této úrovně zpracování je soubor ATL03.{" "}
          <SourceLink id="DOI_10_1016_j_rse_2019_111325">(Neumann a kol. 2019, oddíly 2–4)</SourceLink>
        </p>
        <p>
          Mezi zachycenými fotony je také sluneční světlo.
          Návraty laseru od povrchu se poznávají podle toho, že se
          z několika sousedních pulzů seskupují kolem podobné výšky.
          Pro pevninský led se vyhodnocují úseky dlouhé 40 metrů.
          Vybraným návratům se přizpůsobí přímka, která popisuje výšku
          a sklon povrchu v daném úseku. Výběr fotonů a proložení
          se opakovaně zpřesňují. Středy sousedních úseků jsou od sebe
          20 metrů, takže se úseky z poloviny překrývají.{" "}
          <SourceLink id="DOI_10_1016_j_rse_2019_111352">(Smith a kol. 2019, oddíly 3.1–3.2)</SourceLink>
        </p>
        <p>
          Vybrané návraty ještě potřebují opravu odezvy přístroje.
          Detektor po zachycení fotonu potřebuje krátký čas na obnovu
          citlivosti. Proto zachytí větší podíl dříve přicházejících fotonů
          než těch, které dorazí těsně po nich. Oprava využívá
          známou dobu obnovy a rozdělení zaznamenaných fotonů.
          Další oprava zohledňuje tvar vyslaného pulzu.{" "}
          <SourceLink id="DOI_10_1016_j_rse_2019_111352">(Smith a kol. 2019, oddíly 3.3–3.4)</SourceLink>
        </p>
        <p>
          Konečná výška vychází ze středu opraveného rozdělení návratů
          kolem proložené přímky. Tímto středem je medián.
          Při seřazení hodnot od nejnižší po nejvyšší leží uprostřed,
          takže polovinu hodnot má pod sebou a polovinu nad sebou.
          Výsledný produkt ATL06 obsahuje výšku ledového povrchu,
          jeho sklon a údaje o kvalitě pro jednotlivé úseky.{" "}
          <SourceLink id="DOI_10_1016_j_rse_2019_111352">(Smith a kol. 2019, oddíly 3.3–3.4)</SourceLink>
        </p>
        <p>
          Porovnáním výšek stejného místa v různých obdobích získáme
          změnu povrchu. Pro odhad změny hmotnosti následuje další krok.
          Sníh se postupně zhutňuje a mění v led. Mezistupeň, zvaný firn,
          stále obsahuje vzduchové mezery. Jejich zmenšování může snížit
          povrch i při zachování hmotnosti. Výpočet proto pomocí modelu
          oddělí změny firnu, zohlední pohyb podloží a zbývající změnu
          objemu převede příslušnou hustotou na hmotnost.{" "}
          <SourceLink id="DOI_10_1126_science_aaz5845">(Smith a kol. 2020)</SourceLink>
        </p>
        <p>
          Takový postup použili Smith a kolegové při spojení měření
          ICESat a ICESat-2 za období 2003–2019. Jejich odhad úbytku
          pevninského ledu činil přibližně 200 miliard tun ročně v Grónsku
          a 118 miliard tun ročně v Antarktidě. Jde o výsledek kombinace
          výškových měření a navazujícího výpočtu hmotnosti.
          Další metody a jejich porovnání rozebírá článek o{" "}
          <Link href="/pozorovani/nestabilita-prikrovu">změně hmotnosti ledových příkrovů</Link>.{" "}
          <SourceLink id="DOI_10_1126_science_aaz5845">(Smith a kol. 2020)</SourceLink>
        </p>

        <p>
          Výšku lze měřit také nad jezery, řekami a mořským ledem. U plovoucího ledu
          porovnáváme jeho povrch s hladinou v okolních trhlinách. Zjistíme tak, jak
          vysoko led vystupuje nad vodu. Spolu s údaji o sněhu a hustotě to umožňuje
          odhadnout celkovou tloušťku ledu.{" "}
          <SourceLink id="DOI_10_1016_j_rse_2019_111325">(Neumann a kol., 2019)</SourceLink>
        </p>

        <h3>Jak se možnosti měření rozšiřovaly</h3>
        <p>
          Brooks a kolegové v roce 1978 ukázali, že radar družice GEOS-3
          dokáže zmapovat povrch jižního Grónska. Pro oceán je základem
          souvislé přesné řady mise TOPEX/Poseidon a její nástupci,
          kteří poskytují záznam od roku 1993. Laserová mise ICESat
          měřila v letech 2003–2009 a ICESat-2 od roku 2018 rozšířil
          možnosti sledování ledu o husté měření v několika stopách.{" "}
          <SourceLink id="DOI_10_1038_274539a0">(Brooks a kol. 1978)</SourceLink>,{" "}
          <SourceLink id="DOI_10_5194_os_19_431_2023">(Guérou a kol. 2023)</SourceLink>{" "}
          a <SourceLink id="DOI_10_1016_j_rse_2019_111352">(Smith a kol. 2019)</SourceLink>
        </p>
        <p>
          Radarové a laserové měření se doplňují rozdílným prostorovým
          záběrem a interakcí se sněhem a atmosférou. Radar lze používat
          i přes oblačnost, zatímco laser poskytuje úzkou stopu a podrobné
          výškové profily. Principy příbuzných měření vysvětlují články o{" "}
          <Link href="/metody/aktivni-radarove-mereni">radaru pro srážky a vrstvy ledu</Link>{" "}
          a <Link href="/metody/lidar-a-laserove-mereni-vzdalenosti">lidaru pro atmosféru a vegetaci</Link>.
          Pro altimetrii je rozhodujícím výstupem výška povrchu ve společné
          souřadnicové soustavě.{" "}
          <SourceLink id="WEB_Jason3_Handbook_2018">(příručka Jasonu-3)</SourceLink>{" "}
          a <SourceLink id="DOI_10_1016_j_rse_2019_111352">(Smith a kol. 2019)</SourceLink>
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Výslednou výšku ovlivňuje určení dráhy, vyhodnocení návratu
          a opravy prostředí. Nad ledem přistupuje sklon a drsnost povrchu,
          průnik záření do sněhu a u laseru oblačnost.{" "}
          <SourceLink id="WEB_Jason3_Handbook_2018">(příručka Jasonu-3)</SourceLink>{" "}
          a <SourceLink id="DOI_10_1016_j_rse_2019_111352">(Smith a kol. 2019)</SourceLink>{" "}
          Konkrétní kontrola
          produktu ATL06 v plochém vnitrozemí Antarktidy zjistila oproti
          pozemnímu měření průměrné rozdíly jednotlivých paprsků
          od −2,8 do +2,7 centimetru. Jednotlivé rozdíly se kolem těchto
          průměrů rozptylovaly se směrodatnou odchylkou přibližně
          8–9 centimetrů. Tento údaj vyjadřuje šířku jejich rozložení.
          Výsledek se vztahuje
          k těmto podmínkám a rané verzi produktu.{" "}
          <SourceLink id="DOI_10_1029_2019GL084886">(Brunt a kol. 2019, tabulka 1)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Podrobnosti kontrol, stability a prostorového pokrytí</summary>
          <h3>Radar proti pozemním referencím</h3>
          <p>
            U Gavdosu a Kréty se družicová výška porovnávala s mořskou
            hladinou měřenou ze Země a navázanou na geodetické reference.
            Pro Jason-3 GDR-D, sestupnou dráhu 18 a cykly 1–80
            v letech 2016–2018 vyšel průměrný rozdíl −0,74 centimetru.
            Oddělená kontrola vzdálenosti pozemním transpondérem,
            který přijme pulz a vyšle odpověď se známým zpožděním,
            dala +0,76 centimetru pro cykly 5–80. Znaménka odpovídají
            tomu, že delší vzdálenost znamená nižší povrch.
            Obě kontroly používají družicovou dráhu a opravy šíření,
            jejich reference na povrchu jsou však odlišné.{" "}
            <SourceLink id="DOI_10_3390_rs10101557">(Mertikas a kol. 2018, tabulka 4 a obr. 29)</SourceLink>
          </p>
          <p>
            Uvedené radarové průměry měly statistickou nejistotu
            ±0,4 centimetru. Autoři výslovně odlišují tuto míru
            rozptylu průměru od úplné nejistoty včetně referencí a modelů.
            Stabilita se posuzuje opakováním kontrol v čase,
            vnitřními kalibracemi a překryvem misí. Společný pomalý
            posun přístrojů nebo oprav se prostým průměrováním neodstraní.{" "}
            <SourceLink id="DOI_10_3390_rs10101557">(Mertikas a kol. 2018)</SourceLink>{" "}
            a <SourceLink id="DOI_10_5194_os_19_431_2023">(Guérou a kol. 2023)</SourceLink>
          </p>
          <h3>Laser proti měření na sněhu</h3>
          <p>
            Antarktická kontrola porovnala ATL06 Release 001
            z října 2018 až dubna 2019 s přijímači družicové navigace
            na saních. Nejistota pozemních výšek byla odhadnuta na
            5,6 centimetru, včetně kontroly opakovaným průjezdem
            po 13 dnech. Pozemní měření poskytlo samostatný záznam
            povrchu. Sdílenou součástí zůstává družicová navigace
            a geodetická reference. Časový odstup měření a přesuny
            sněhových útvarů větrem rovněž přispívají k rozdílům.
            Test ověřuje výšky, nikoli modelový převod na hmotnost.{" "}
            <SourceLink id="DOI_10_1029_2019GL084886">(Brunt a kol. 2019)</SourceLink>
          </p>
          <h3>Co představuje vzorek měření</h3>
          <p>
            Blízkost pobřeží mění radarovou ozvěnu, mraky omezují návraty
            laseru a strmý terén zvyšuje citlivost výšky na polohu stopy.
            Odlehlá nebo nekvalitní měření se proto vyřazují podle
            příznaků a kritérií daného produktu. Referenční oceánská
            řada pokrývá pás přibližně mezi 66° jižní a severní šířky.
            Výšky ledu zase vzorkují jednotlivé družicové stopy,
            mezi nimiž je třeba plošné změny dopočítat.
            Rozestup výstupních bodů není nejistotou výšky.
            Zvlášť se posuzuje i nejistota modelu firnu.{" "}
            <SourceLink id="WEB_Jason3_Handbook_2018">(příručka Jasonu-3, oddíl 4.1)</SourceLink>,{" "}
            <SourceLink id="DOI_10_5194_os_19_431_2023">(Guérou a kol. 2023)</SourceLink>{" "}
            a <SourceLink id="DOI_10_1126_science_aaz5845">(Smith a kol. 2020)</SourceLink>
          </p>
        </details>

        <h2>Příklad: jeden záznam hladiny v Tichém oceánu</h2>
        <p>
          Použijeme měření Jasonu-3 z 26. listopadu 2017 v 03:11:51,757
          koordinovaného světového času (UTC),
          přibližně na 7,87° severní šířky a 150,94° západní délky.
          Jde o historický produkt GDR-D, cyklus 066, přelet 082.
          Označení GDR znamená Geophysical Data Record, soubor
          zpracovaných geofyzikálních údajů. Písmeno D označuje verzi
          zpracování.
          Přepočítáme jeho závěrečný krok od zveřejněné vzdálenosti
          a jednotlivých oprav k anomálii hladiny. Vyhodnocení radarové
          ozvěny a vnitřní přístrojové opravy už provedl poskytovatel dat.{" "}
          <SourceLink id="DATA_Jason3_GDRD_C066_P082">(veřejný soubor NOAA NCEI)</SourceLink>
        </p>
        <p>
          Výška družice <InlineMath tex="H" /> je 1 339 817,1504 metru
          a vzdálenost <InlineMath tex="R" /> je 1 339 812,6931 metru.
          Nejdříve přičteme čtyři opravy vzdálenosti uvedené v souboru.
          Ponecháme jejich původní znaménka.{" "}
          <SourceLink id="DATA_Jason3_GDRD_C066_P082">(záznam s indexem 1500 při počítání od nuly)</SourceLink>
        </p>
        <div className="method-data-output method-data-output--compact method-data-output__table-wrap">
          <table>
            <caption>Opravy vzdálenosti pro vybraný záznam</caption>
            <thead><tr><th scope="col">Příspěvek</th><th scope="col">Oprava v metrech</th></tr></thead>
            <tbody>
              <tr><th scope="row">Suchý vzduch</th><td>−2,2990</td></tr>
              <tr><th scope="row">Vodní pára</th><td>−0,2927</td></tr>
              <tr><th scope="row">Ionosféra</th><td>−0,0646</td></tr>
              <tr><th scope="row">Vliv mořských vln</th><td>−0,1125</td></tr>
              <tr><th scope="row">Součet C</th><td>−2,7688</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Opravená vzdálenost je tedy 1 339 809,9243 metru.
          Jejím odečtením od výšky družice dostaneme výšku hladiny
          7,2261 metru nad referenčním elipsoidem.{" "}
          <SourceLink id="WEB_Jason3_Handbook_2018">(výpočet podle oddílu 4.2)</SourceLink>
        </p>
        <Equation tex={String.raw`\begin{array}{rcl}h&=&H-r\\&=&7{,}2261\,\mathrm{m}\end{array}`} />
        <p>
          Místní referenční střední hladina <InlineMath tex="M" />
          je 7,2749 metru. Součet slapových a atmosférických výškových
          příspěvků <InlineMath tex="q" /> v témže záznamu
          činí −0,1160 metru. Po jejich odečtení vyjde:{" "}
          <SourceLink id="DATA_Jason3_GDRD_C066_P082">(hodnoty z téhož souboru)</SourceLink>
        </p>
        <Equation tex={String.raw`\begin{array}{rcl}a&=&-0{,}0488\,\mathrm{m}\\&&{}-(-0{,}1160\,\mathrm{m})\\&=&0{,}0672\,\mathrm{m}\end{array}`} />
        <p>
          Hladina tedy po zvolených úpravách ležela přibližně
          <strong> 6,7 centimetru nad místním referenčním průměrem</strong>.
          Archiv uvádí anomálii zaokrouhlenou na milimetry jako 0,067 metru.
          Výpočet se s ní shoduje v rámci zaokrouhlení.
          Toto číslo popisuje jedno místo a jeden přelet.
          Dlouhodobý vzestup se určuje až z časové řady mnoha měření.{" "}
          <SourceLink id="DATA_Jason3_GDRD_C066_P082">(pole ssha)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Data, jednotlivé výškové opravy a zopakování výpočtu</summary>
          <p>
            Ke stažení jsou <a href="/data/methods/altimetry/jason3-record.json">vstupní záznam s metadaty</a>,{" "}
            <a href="/data/methods/altimetry/reproduce.py">výpočet v Pythonu</a>,{" "}
            <a href="/data/methods/altimetry/extract_record.py">export z původního NetCDF</a>{" "}
            a <a href="/data/methods/altimetry/README.txt">návod včetně kontrolních součtů</a>.
            K přepočtu stačí uložit první dva soubory do stejné složky
            a spustit <code>python reproduce.py</code>. Výpočet používá
            jen standardní knihovnu Pythonu.
          </p>
          <div className="method-data-output method-data-output--compact method-data-output__table-wrap">
            <table>
              <caption>Příspěvky tvořící q, které se odečítají od výšky hladiny</caption>
              <thead><tr><th scope="col">Veličina v souboru</th><th scope="col">Hodnota v metrech</th></tr></thead>
              <tbody>
                <tr><th scope="row">Oceánské slapy včetně zatížení dna</th><td>−0,1937</td></tr>
                <tr><th scope="row">Slapy pevné Země</th><td>+0,0516</td></tr>
                <tr><th scope="row">Vliv pohybu rotační osy</th><td>+0,0020</td></tr>
                <tr><th scope="row">Rovnovážná reakce na tlak</th><td>+0,0245</td></tr>
                <tr><th scope="row">Rychlé kolísání vyvolané atmosférou</th><td>−0,0004</td></tr>
                <tr><th scope="row">Součet q</th><td>−0,1160</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Výběr obsahuje jeden záznam v otevřeném oceánu.
            Příznaky povrchu, typu ozvěny, deště a ledu i příznaky
            kvality vzdálenosti a přístrojových oprav mají hodnotu nula.
            Sekundová vzdálenost vychází z 19 platných měření vyšší
            frekvence. Export uchovává i další kontrolní údaje.
            Čísla uložená v NetCDF převede pomocí koeficientů
            <code> scale_factor</code> a <code>add_offset</code>,
            přičemž chybějící hodnoty rozpozná před převodem.{" "}
            <SourceLink id="DATA_Jason3_GDRD_C066_P082">(metadata záznamu)</SourceLink>
          </p>
          <p>
            Použitá vzdálenost je výstupem zpracování MLE4 v pásmu Ku,
            tedy konkrétního modelového vyhodnocení radarové ozvěny.
            Referencí je model střední hladiny CNES-CLS2011, oceánské
            slapy pocházejí z modelu GOT4.8. Elipsoid této historické
            verze má rovníkový poloměr 6 378 136,3 metru.
            Nezaměňujeme jej s elipsoidem novějšího zpracování.
            Oprava zatížení dna je už součástí oceánského slapového
            příspěvku a přístrojové opravy už součástí vzdálenosti.
            Výpočet reprodukuje tento archivní produkt,
            neposkytuje nové zpracování surové ozvěny.{" "}
            <SourceLink id="DATA_Jason3_GDRD_C066_P082">(metadata)</SourceLink>{" "}
            a <SourceLink id="WEB_Jason3_Handbook_2018">(příručka Jasonu-3)</SourceLink>
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Altimetrie spojuje dobu návratu radarového nebo laserového pulzu s přesně
            určenou polohou družice. Získává tak výšku povrchu vůči společné referenci.
            Opakovaná měření ukazují, jak se hladina nebo ledový povrch mezi přelety
            změnily.
          </p>
          <p>
            Altimetrie umožňuje měřit výšku mořské hladiny, ledovců, ledových příkrovů i
            hladin jezer a řek. Výška mořského ledu nad vodou pomáhá určit jeho
            tloušťku. Sledujeme tak vzestup oceánu, zásoby vody i úbytek ledu. Oceánské
            družice typu Jason opakují měření na stejných drahách přibližně každých 10
            dní.{" "}
            <SourceLink id="WEB_Jason3_Handbook_2018">(Příručka Jasonu-3, 2018)</SourceLink>,{" "}
            <SourceLink id="DOI_10_1016_j_rse_2019_111325">(Neumann a kol., 2019)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
