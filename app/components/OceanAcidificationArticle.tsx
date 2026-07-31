import Image from "next/image";
import type { ReactNode } from "react";

function ReferenceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="article-reference" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function OceanAcidificationArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>pH</dt>
            <dd>
              Logaritmické vyjádření množství vodíkových iontů ve vodě. Nižší pH znamená více vodíkových iontů; rozdíl
              jedné jednotky odpovídá desetinásobku.
            </dd>
          </div>
          <div>
            <dt>DIC</dt>
            <dd>
              Rozpuštěný anorganický uhlík. Součet oxidu uhličitého, hydrogenuhličitanu a uhličitanu rozpuštěných v
              jednom kilogramu mořské vody.
            </dd>
          </div>
          <div>
            <dt>Celková alkalinita</dt>
            <dd>
              Schopnost vzorku vázat přidané vodíkové ionty, určená laboratorní titrací. V datech se často označuje
              zkratkou TA.
            </dd>
          </div>
          <div>
            <dt>Stav nasycení Ω</dt>
            <dd>
              Poměr, který popisuje nasycení vody určitým minerálem uhličitanu vápenatého. Hodnota nad 1 znamená
              přesycení, hodnota pod 1 nenasycení.
            </dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Úplný chemický stav mořské vody lze vypočítat, když známe dvě ze čtyř hlavních veličin: pH, DIC, celkovou
          alkalinitu a množství rozpuštěného CO₂ vyjádřené jeho parciálním tlakem.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Acidifikace oceánu je dlouhodobý posun chemického stavu mořské vody k vyššímu množství vodíkových iontů a
          nižšímu pH. Současně se mění zastoupení rozpuštěných forem anorganického uhlíku a nasycení vody minerály
          uhličitanu vápenatého. Pozorování proto netvoří jediné číslo, ale několik navzájem propojených měřených a
          vypočtených veličin.
        </p>

        <p>
          Takto je acidifikace vymezena v pracích, které se liší obdobím, oblastí i použitými daty. Caldeira a Wickett
          sledovali změnu pH v roce 2003, Orr a kol. v roce 2005 doplnili stav nasycení uhličitanem vápenatým, Bates a
          kol. v roce 2014 porovnali sedm dlouhých oceánských pozorování, Lauvset a kol. v roce 2015 sestavili povrchové
          změny pro velké oceánské oblasti a Ma a kol. v roce 2023 společně vyhodnotili pH a stav nasycení aragonitem.
          Současný globální produkt Chau a kol. zveřejňuje stejné základní veličiny na pravidelné mapě.{" "}
          <ReferenceLink href="https://doi.org/10.1038/425365a">Caldeira &amp; Wickett, 2003</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1038/nature04095">Orr et al., 2005</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.5670/oceanog.2014.16">Bates et al., 2014</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.5194/bg-12-1285-2015">Lauvset et al., 2015</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1029/2023GB007765">Ma et al., 2023</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-16-121-2024">Chau et al., 2024</ReferenceLink>
        </p>

        <p>
          Slovo „acidifikace“ popisuje směr změny. Běžná povrchová mořská voda má pH přibližně 8, a je tedy na běžné
          stupnici zásaditá. Pokles z 8,10 na 8,00 ji neposune pod pH 7, ale zvýší množství vodíkových iontů přibližně o
          25,9 %. Výsledek plyne z logaritmické stupnice: poměr mezi oběma hodnotami je 10<sup>0,10</sup>. Procentní změna
          se proto počítá z vodíkových iontů, nikoli jako procento z čísel 8,10 a 8,00. Tento způsob výpočtu podrobně
          vysvětluje{" "}
          <ReferenceLink href="https://www.pmel.noaa.gov/co2/story/A%2Bprimer%2Bon%2BpH">NOAA PMEL v přehledu stupnice pH</ReferenceLink>.
        </p>

        <p>
          Každé jednotlivé měření patří k určitému místu, hloubce, okamžiku, teplotě a stupnici pH. Povrch uprostřed
          oceánu, hluboká voda a pobřežní zátoka mohou mít odlišné hodnoty i odlišný sezónní průběh. Pojem „globální
          povrchové pH“ proto označuje plošný průměr z mapy povrchu oceánu. Taková mapa v současnosti nevzniká z husté
          sítě přímých pH čidel. Většina jejích buněk je statisticky dopočtena z řídkých lodních měření, dalších
          pozorovaných vlastností oceánu a rovnic uhličitanového systému.
        </p>

        <p>
          V tomto článku proto rozlišujeme tři úrovně. „Změřeno“ znamená laboratorní rozbor vzorku nebo odečet čidla.
          „Vypočteno“ znamená chemický výpočet z alespoň dvou změřených veličin. „Rekonstruováno“ znamená, že metoda
          odhadla také místa a měsíce bez vzorku. Toto rozlišení nemění platnost výsledku, ale určuje, jakou otázku lze
          datům položit a jak má být popsána jejich nejistota.
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div
            className="article-figure__scroll"
            tabIndex={0}
            aria-label="Vodorovně posuvný graf globálního povrchového pH"
          >
            <Image
              className="article-figure__media"
              src="/media/ocean-acidification/copernicus-global-surface-ph.png"
              alt="Rekonstruovaný roční globální průměr povrchového pH oceánu od roku 1985 do roku 2024"
              width={3775}
              height={2039}
              sizes="(max-width: 900px) 100vw, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Roční globální průměr povrchového pH na celkové stupnici v letech 1985–2024. Křížky jsou plošné průměry
            rekonstruované mapy, nikoli průměr přímých pH čidel; modrý pás je 68% interval nejistoty ročních hodnot.
            Číslo ±0,019 v rámečku zdroj definuje jako směrodatnou odchylku zbytků kolem přímky, nikoli jako standardní
            nejistotu jejího sklonu. Zdroj a kredit: E.U. Copernicus Marine Service Information, produkt{" "}
            <ReferenceLink href="https://doi.org/10.48670/moi-00224">GLOBAL_OMI_HEALTH_carbon_ph_area_averaged</ReferenceLink>.
          </figcaption>
        </figure>

        <h2>Historie měření</h2>
        <p>
          Stupnici pH zavedl dánský chemik Søren P. L. Sørensen v roce 1909 při práci s vodíkovými ionty v
          biochemických roztocích. Pro mořskou vodu bylo nutné vyřešit další problém: výsledek se mění s teplotou a
          vysoký obsah solí ovlivňuje chování elektrod i chemickou definici vodíkových iontů. Kurt Buch v roce 1929
          zveřejnil postup pro měření pH mořské vody při různých teplotách a o rok později navázal prací o uhličitanové
          rovnováze v Baltském moři. Tyto práce patří k prvním systematickým pokusům spojit číslo pH s přesně popsanými
          podmínkami mořského vzorku.{" "}
          <ReferenceLink href="https://www.nist.gov/how-do-you-measure-it/how-do-you-measure-acidity-ph-ocean">NIST: historie pH</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1093/icesjms/4.3.267">Buch, 1929</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1093/icesjms/5.3.401">Buch, 1930</ReferenceLink>
        </p>

        <p>
          Velké oceánografické výpravy 20. století měřily vedle pH také celkový rozpuštěný anorganický uhlík,
          alkalinitu a množství CO₂ nad vzorkem. Před zahájením programu GEOSECS se v roce 1969 u Kalifornie setkaly
          laboratoře, které na stejných vzorcích porovnaly elektrody, titrace, plynovou chromatografii a infračervené
          analyzátory. Takahashi a kol. zveřejnili nejen výsledný profil, ale také rozdíly mezi metodami. Následný GEOSECS
          v Atlantiku, Tichém a Indickém oceánu vytvořil v 70. letech první rozsáhlý trojrozměrný obraz oceánské chemie;
          Bradshaw a Brewer později popsali přibližně 6 000 společných stanovení DIC a alkality.{" "}
          <ReferenceLink href="https://doi.org/10.1029/JC075i036p07648">Takahashi et al., 1970</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1016/0012-821X(81)90090-X">Bradshaw &amp; Brewer, 1981</ReferenceLink>
        </p>

        <p>
          Průřezová výprava se na stejné místo vrátí obvykle až po letech. Dlouhá pozorování proto doplnily stanice,
          které odebírají vodu opakovaně. Program Bermuda Atlantic Time-series Study, zkráceně BATS, začal v roce 1988 v
          Sargasovém moři a spojil se staršími měřeními Hydrostation S. Ve stejném roce začal program Hawaii Ocean
          Time-series, zkráceně HOT, na stanici ALOHA severně od Oahu. Pravidelné odběry umožnily oddělit běžný průběh
          během roku od pomalé změny mezi desetiletími. První podrobné výsledky z obou míst zveřejnili Bates a kol. a
          Winn a kol.; současné souhrny navazují na stejná měření.{" "}
          <ReferenceLink href="https://doi.org/10.1016/0967-0637(96)00093-0">Bates et al., 1996</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1016/S0967-0637(96)00085-1">Winn et al., 1998</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1073/pnas.0906044106">Dore et al., 2009</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.3389/fmars.2023.1289931">Bates &amp; Johnson, 2023</ReferenceLink>
        </p>

        <p>
          Přesnost pH se výrazně zlepšila zavedením spektrofotometrie. Clayton a Byrne v roce 1993 kalibrovali barvivo
          m-kresolovou červeň pro mořskou vodu a při měření na lodi dosáhli opakovatelnosti přibližně 0,0004 jednotky
          pH. Současně vznikl systém referenční mořské vody. Od roku 1991 byly dostupné lahve s certifikovaným DIC a od
          roku 1996 také s certifikovanou celkovou alkalinitou. Laboratoř tak mohla při každé sérii ověřit, zda její
          výsledek souhlasí s hodnotou nezávisle stanovenou pro stejný materiál.{" "}
          <ReferenceLink href="https://doi.org/10.1016/0967-0637(93)90048-8">Clayton &amp; Byrne, 1993</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1016/S0304-4203(02)00133-0">Dickson et al., 2003</ReferenceLink> a{" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/access/ocean-carbon-acidification-data-system/oceans/Handbook_2007/Guide_all_in_one.pdf">Dickson et al., 2007</ReferenceLink>
        </p>

        <p>
          Od začátku 21. století přibyly automatické systémy na lodích, zakotvené bóje a profilující plováky.
          Polovodičové čidlo Durafet bylo pro mořskou vodu laboratorně a terénně ověřeno Martzem a kol. v roce 2010;
          tlakuvzdorná verze dnes měří na plovácích BGC-Argo při opakované cestě od povrchu přibližně do dvou kilometrů.
          Tato měření přinesla celoroční profily z odlehlých oblastí, zároveň však vyžadují následnou kalibraci proti
          lodním vzorkům. Každý nový typ měření rozšířil prostorové nebo časové pokrytí a současně přidal vlastní
          kontrolní postup.{" "}
          <ReferenceLink href="https://doi.org/10.4319/lom.2010.8.172">Martz et al., 2010</ReferenceLink> a{" "}
          <ReferenceLink href="https://biogeochemical-argo.org/measured-variables-ph.php">BGC-Argo: měření pH</ReferenceLink>
        </p>

        <h2>Jak se chemie oceánu měří</h2>
        <h3>Odběr vody a doprovodné údaje</h3>
        <p>
          Výzkumná loď spustí do oceánu rám s čidly teploty, vodivosti a tlaku. Vodivost se převádí na salinitu a tlak
          určuje hloubku. Kolem rámu jsou Niskinovy lahve, které se na povel uzavřou ve vybraných hloubkách. Po vytažení
          se voda rozdělí do samostatných lahví pro DIC, alkalinitu, pH, živiny a další rozbory. U každého vzorku se
          zachová čas, poloha, tlak, teplota, salinita, číslo lahve a způsob analýzy. Bez těchto údajů nelze hodnotu pH
          správně převést na podmínky v oceánu ani porovnat s jinou výpravou.
        </p>

        <figure className="article-figure article-figure--portrait">
          <Image
            className="article-figure__media"
            src="/media/ocean-acidification/noaa-wcoa-2026-ctd-rosette.jpeg"
            alt="Oceánografická růžice s čidly a lahvemi spouštěná z výzkumné lodi do oceánu"
            width={768}
            height={1024}
            sizes="(max-width: 900px) 100vw, 700px"
            unoptimized
          />
          <figcaption>
            Odběrová růžice během výpravy West Coast Ocean Acidification 2026. Čidla na rámu průběžně měří tlak,
            teplotu a vodivost; lahve se zavřou v určených hloubkách a přinesou vodu pro laboratorní rozbor. Fotografie:
            NOAA Ocean Acidification Program, 20. července 2026. Zdroj:{" "}
            <ReferenceLink href="https://oceanacidification.noaa.gov/day-1-images-from-the-field-wcoa2026/">WCOA 2026, snímky z terénu</ReferenceLink>.
            Dílo NOAA je podle uvedeného kreditu federálním dílem USA a lze je použít s uvedením zdroje.
          </figcaption>
        </figure>

        <p>
          Vzorek pro DIC a alkalinitu se plní bez vzduchové mezery, protože výměna CO₂ s okolím by změnila jeho složení.
          Přidá se malé množství konzervační látky a láhev se těsně uzavře. Teplota a salinita se měří zároveň s odběrem,
          nikoli dodatečně podle mapy. Standardní pořadí odběru, typ lahví, konzervaci a kontrolu úniku stanovuje
          mezinárodní příručka Dicksona, Sabina a Christiana. Jednotlivé laboratoře mohou používat jiné přístroje, ale
          zveřejněný postup musí být na tuto metrologickou návaznost přeložitelný.{" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/access/ocean-carbon-acidification-data-system/oceans/Handbook_2007/Guide_all_in_one.pdf">Guide to Best Practices for Ocean CO₂ Measurements</ReferenceLink>
        </p>

        <h3>pH: světlo, barvivo a přesná teplota</h3>
        <p>
          Přesné lodní měření pH se dnes nejčastěji provádí spektrofotometricky. Do vzorku se přidá malé známé množství
          indikátorového barviva, obvykle m-kresolové červeně. Barvivo má podle pH dvě formy, které pohlcují světlo v
          různých vlnových délkách. Přístroj změří jejich absorbanci, z poměru vypočte pH a opraví malou změnu, kterou do
          vzorku přidalo samotné barvivo. Kyveta je udržována na přesné teplotě a výsledek se zapisuje s názvem použité
          stupnice pH. Základ metody a kalibraci na celkové stupnici popsali Clayton a Byrne; vliv nečistot v barvivu
          později vyčíslili Yao a Byrne.{" "}
          <ReferenceLink href="https://doi.org/10.1016/0967-0637(93)90048-8">Clayton &amp; Byrne, 1993</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1016/j.marchem.2007.01.013">Yao &amp; Byrne, 2007</ReferenceLink>
        </p>

        <p>
          Elektroda nebo polovodičové čidlo měří elektrický potenciál, který závisí na vodíkových iontech. Výhodou je
          rychlý a opakovaný odečet přímo ve vodě. Krátkodobá přesnost Durafetu v pokusech Martze a kol. dosahovala
          ±0,0005 pH a stabilita během týdnů až měsíců byla lepší než 0,005 pH. Dlouhodobý oceánský profil však ovlivňuje
          tlak, stárnutí referenční elektrody a posun kalibrace. Plovák proto neposílá „hotové“ číslo bez další kontroly:
          surový potenciál se převádí pomocí laboratorní kalibrace a později se porovnává s nezávislými lodními daty.{" "}
          <ReferenceLink href="https://doi.org/10.4319/lom.2010.8.172">Martz et al., 2010</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.13155/97828">BGC-Argo: postup kontroly pH</ReferenceLink>
        </p>

        <h3>DIC: uvolnění a spočítání oxidu uhličitého</h3>
        <p>
          Při měření DIC se do přesně odváženého nebo odměřeného vzorku přidá kyselina. Hydrogenuhličitan i uhličitan se
          tím převedou na CO₂. Proud čistého nosného plynu odvede vzniklý CO₂ do coulometru, kde chemická reakce spotřebuje
          elektrický náboj úměrný jeho množství. Přístroj tedy nesčítá jednotlivé formy uhlíku odděleně; nejprve je
          převede na společnou formu a změří jejich součet. Johnson a kol. popsali zavedení a automatizaci této metody v
          letech 1985 a 1987. Laboratoř NOAA PMEL uvádí pro současnou laboratorní analýzu přesnost i správnost přibližně
          ±0,05 %.{" "}
          <ReferenceLink href="https://doi.org/10.1016/0304-4203(85)90012-8">Johnson et al., 1985</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1016/0304-4203(87)90033-8">Johnson et al., 1987</ReferenceLink> a{" "}
          <ReferenceLink href="https://www.pmel.noaa.gov/co2/story/Laboratory%20Analysis">NOAA PMEL: laboratorní analýza</ReferenceLink>
        </p>

        <h3>Celková alkalinita: titrace známou kyselinou</h3>
        <p>
          Celková alkalinita se určuje přidáváním přesně známého roztoku kyseliny. Přístroj po každé dávce zaznamená
          elektrický potenciál a z celého průběhu titrace vypočte, kolik kyseliny bylo potřeba k překročení určených
          rovnovážných bodů. Do výpočtu vstupují také sírany, fluoridy, fosforečnany a další slabé kyseliny a zásady v
          mořské vodě. Alkalinita popisuje jinou vlastnost vody než pH, takže se obě veličiny mohou měnit odlišným tempem. Dickson,
          Afghan a Anderson pro certifikaci referenční vody dosáhli opakovatelnosti lepší než 1 µmol na kilogram a
          správnosti do 2 µmol na kilogram.{" "}
          <ReferenceLink href="https://doi.org/10.1016/S0304-4203(02)00133-0">Dickson et al., 2003</ReferenceLink>
        </p>

        <h3>Množství rozpuštěného CO₂</h3>
        <p>
          Na lodích se povrchová voda často vede nepřetržitě do vyrovnávací nádoby. Nad vodou proudí plyn, který se s ní
          přiblíží rovnováze, a infračervený analyzátor změří podíl CO₂ v tomto plynu. Z tlaku, teploty a složení plynu se
          určí parciální tlak nebo přesněji fugacita CO₂ v mořské vodě, obvykle zapisovaná jako pCO₂ nebo fCO₂. Přístroj se
          během plavby kontroluje několika lahvemi plynu se známým obsahem CO₂. Výsledkem jsou tisíce bodů podél dráhy
          lodi, ale pouze v tenké povrchové vrstvě, z níž loď čerpá vodu. Standardní přístrojové uspořádání a opravy
          popsali Pierrot a kol.; jednotnou kontrolu dat používá atlas SOCAT.{" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/access/ocean-carbon-acidification-data-system/oceans/Handbook_2007/Guide_all_in_one.pdf">Pierrot et al. v příručce, 2007</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-8-383-2016">Bakker et al., 2016</ReferenceLink>
        </p>

        <h3>Z dvou měření k úplnému chemickému stavu</h3>
        <p>
          Čtyři hlavní veličiny uhličitanového systému jsou pH, DIC, celková alkalinita a pCO₂ nebo fCO₂. Když laboratoř
          změří libovolné dvě z nich a přidá teplotu, salinitu, tlak a podle potřeby živiny, rovnovážné rovnice dovolí
          dopočítat ostatní. Program CO2SYS tento výpočet standardizoval a jeho současné verze zároveň šíří nejistoty
          vstupních měření a chemických konstant do výsledku. V tabulce musí zůstat uvedeno, které dvě veličiny byly
          skutečně změřeny a které sloupce vznikly výpočtem. Bez této informace vypadají chemicky odlišné postupy jako
          stejný druh pozorování.{" "}
          <ReferenceLink href="https://cdiac.ess-dive.lbl.gov/ftp/co2sys/CO2SYS_calc_DOS_v1.05/cdiac105.pdf">Lewis &amp; Wallace, 1998</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1016/j.marchem.2018.10.006">Orr et al., 2018</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.5194/gmd-15-15-2022">Humphreys et al., 2022</ReferenceLink>
        </p>

        <h2>Jak vzniká zveřejněný výsledek</h2>
        <h3>Stupnice pH a teplota</h3>
        <p>
          U mořské vody existuje několik přesných definic pH. Celková stupnice zahrnuje volné vodíkové ionty a ionty
          vázané v hydrogensíranu. Stupnice mořské vody zahrnuje navíc vazbu s fluoridy a volná stupnice počítá pouze
          volné ionty. Starší elektrody mohou být uvedeny na stupnici NBS používané pro zředěné pufry. Všechny hodnoty se
          jmenují pH, jejich absolutní čísla však nelze bez převodu položit do jednoho grafu. Dickson v roce 1984 přesně
          formuloval stupnice vhodné pro mořskou vodu a současná metadata vyžadují název stupnice u každého záznamu.{" "}
          <ReferenceLink href="https://doi.org/10.1016/0016-7037(84)90225-4">Dickson, 1984</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-7-117-2015">Newton et al., 2015</ReferenceLink>
        </p>

        <p>
          pH mořské vody se mění také s teplotou a tlakem, i když ve vzorku nepřibude ani neubude žádná látka. Laboratoř
          může změřit vzorek při 25 °C, zatímco v oceánu měl 4 °C a ležel v hloubce jednoho kilometru. Zveřejní proto buď
          laboratorní hodnotu s teplotou měření, nebo ji rovnicemi převede na teplotu a tlak při odběru. Současné
          globální produkty obvykle uvádějí pH na celkové stupnici při podmínkách přímo v oceánu. Úplný údaj proto vedle
          hodnoty „pH 8,05“ obsahuje také stupnici, teplotu a informaci o případném převodu.
        </p>

        <h3>Kontrola jedné výpravy a návaznost mezi výpravami</h3>
        <p>
          První kontrola probíhá uvnitř jedné plavby. Laboratoř opakuje část vzorků, měří referenční mořskou vodu a
          sleduje rozdíl mezi známou a získanou hodnotou. Podezřelé vzorky dostanou značku kvality a původní hodnota se
          zachová. U DIC a celkové alkality lze měření přímo navázat na certifikovaný materiál; u pH se používají
          charakterizované pufry a nezávislá kontrola další dvojicí veličin. Pravidla pro doporučené nejistoty a úplná
          metadata shrnuje příručka Dicksona a kol. a novější doporučení Ocean Carbonate System Intercomparison Forum.{" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/access/ocean-carbon-acidification-data-system/oceans/Handbook_2007/Guide_all_in_one.pdf">Dickson et al., 2007</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1002/lno.12477">Carter et al., 2023</ReferenceLink>
        </p>

        <p>
          Druhá kontrola porovnává různé výpravy v hluboké vodě, kde se v blízkých místech očekává během několika let
          menší změna než na povrchu. Datový tým hledá soustavný rozdíl celé plavby proti dřívějším průřezům. Pokud jej
          doloží, zveřejní vedle původního sloupce také doporučenou úpravu a její zdůvodnění. Projekt GLODAP tímto způsobem
          sjednocuje DIC a alkalinitu napříč desetiletími. U jeho současné verze 3 však pH a jednotlivá měření fCO₂
          neprošla stejnou druhotnou kontrolou. Databáze je obsahuje, ale uživatel je nesmí považovat za stejně
          homogenizované jako hlavní proměnné DIC a alkalitu.{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-8-297-2016">Olsen et al., 2016</ReferenceLink> a{" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/data/oceans/ncei/ocads/metadata/0315582.html">GLODAPv3: metadata verze 2026</ReferenceLink>
        </p>

        <h3>Dlouhé pozorování na jednom místě</h3>
        <p>
          Stanice BATS a HOT se vracejí přibližně na stejné souřadnice a odebírají vodu v několika hloubkách. Každý měsíc
          se však neměří přesně ve stejný den a některé plavby chybějí. Pro odhad dlouhodobé změny se hodnoty nejprve
          rozdělí podle měsíců, pro každý měsíc se určí jeho obvyklá hodnota a ta se odečte. Tím se porovnává leden s
          lednem a červenec s červencem místo směšování sezón. Původní měsíční data zůstávají dostupná a publikovaný sklon
          uvádí počet bodů, zvolené období a statistickou nejistotu.
        </p>

        <p>
          U BATS je pH v dlouhém grafu vypočteno z laboratorně změřeného DIC a celkové alkality spolu s teplotou a
          salinitou. Bates a Johnson uvádějí výpočetní nejistotu pH 0,003 a používají stupnici mořské vody. Dlouhý záznam
          na stanici tvoří navázaná chemická měření. Přístroje se během čtyřiceti let měnily, ale každý analytický běh
          kontrolovala referenční mořská voda. Výsledek proto může být delší než životnost
          kteréhokoli jednotlivého přístroje.{" "}
          <ReferenceLink href="https://doi.org/10.3389/fmars.2023.1289931">Bates &amp; Johnson, 2023</ReferenceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div
            className="article-figure__scroll"
            tabIndex={0}
            aria-label="Vodorovně posuvný graf pH a nasycení aragonitem u Bermud"
          >
            <Image
              className="article-figure__media"
              src="/media/ocean-acidification/bats-ph-aragonite-1983-2023.webp"
              alt="Změny povrchového pH a nasycení aragonitem u Bermud od roku 1983 do roku 2023"
              width={1300}
              height={997}
              sizes="(max-width: 900px) 100vw, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Sezónně očištěné změny povrchové vody na spojených stanicích Hydrostation S a BATS u Bermud v letech
            1983–2023. Panel A ukazuje odchylku pH vypočteného ze změřeného DIC a celkové alkality na stupnici mořské
            vody; sklon je −0,018 pH za desetiletí. Panel B ukazuje vypočtenou změnu nasycení aragonitem; sklon je −0,09
            za desetiletí. Každý bod je odchylka od obvyklé hodnoty příslušného měsíce. Obrázek 7 z práce{" "}
            <ReferenceLink href="https://doi.org/10.3389/fmars.2023.1289931">Bates &amp; Johnson, 2023</ReferenceLink>, licence{" "}
            <ReferenceLink href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</ReferenceLink>.
          </figcaption>
        </figure>

        <h3>Z lodních bodů ke globální povrchové mapě</h3>
        <p>
          Nejhustší globální základ tvoří SOCAT, atlas povrchového fCO₂. Výzkumné a obchodní lodě měří podél svých tras,
          takže některé severoatlantické tratě obsahují mnoho opakování a jižní oceány zůstávají řidší. Statistický model
          se učí vztah mezi dostupným fCO₂ a současně známou teplotou, salinitou, chlorofylem, hloubkou promíchané vrstvy,
          polohou a měsícem. Potom odhadne fCO₂ i v buňkách bez lodě. Jde o rekonstrukci založenou na pozorováních, nikoli
          o přímé změření každé buňky.
        </p>

        <p>
          Produkt CMEMS-LSCE nejprve vytváří na mřížce 0,25° × 0,25° několik statistických rekonstrukcí povrchového pCO₂.
          Celkovou alkalinitu odhaduje z dalších pozorovaných vlastností vody a z těchto dvou veličin počítá pomocí CO2SYS
          pH, DIC a stavy nasycení. Měsíční mapy se převedou na roční průměry a každá buňka dostane váhu podle své plochy.
          Rozptyl mezi členy výpočtu a porovnání s nezávislými vzorky určují nejistotu. Chau a kol. zveřejnili postup,
          validační mapy i data, takže globální křivku lze znovu spočítat.{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-16-121-2024">Chau et al., 2024</ReferenceLink>
        </p>

        <h2>Nejistota a hranice měření</h2>
        <p>
          U jednoho laboratorního vzorku lze nejistotu odvodit z opakovaných rozborů, referenční vody, teploty a
          kalibrace. U vypočteného pH nebo stavu nasycení přibývá nejistota druhého vstupu a chemických konstant. Orr a
          kol. ukázali, že nejistota rovnovážných konstant může u některých kombinací vstupů převážit nad samotnou
          laboratorní chybou. Proto se k výsledku ukládá použitá sada konstant i verze programu, ne pouze dvě vstupní
          hodnoty.{" "}
          <ReferenceLink href="https://doi.org/10.1016/j.marchem.2018.10.006">Orr et al., 2018</ReferenceLink>
        </p>

        <p>
          U dlouhého pozorování je důležitá návaznost mezi přístroji a odběry. Sezónní výkyv pH může být větší než změna
          za několik let, takže nestejné zastoupení zimy a léta posune sklon. Pobřežní voda se navíc může během jediného
          dne měnit vlivem přílivu, sladké vody a biologických dějů. Výsledek z otevřeného oceánu proto nelze použít jako
          hodnotu pro konkrétní zátoku. Správná otázka zní, pro jakou oblast, hloubku a časové rozlišení byl sklon
          vypočten.
        </p>

        <p>
          Autonomní čidla zvyšují počet profilů, ale jejich pomalý posun se obtížně kontroluje bez lahve referenční vody.
          Zhang a kol. v roce 2026 porovnali 10 003 profilů ze 176 plováků v Jižním oceánu s lodními daty a nalezli
          soustavný rozdíl v pH. Z něj vypočtené povrchové pCO₂ bylo proti lodním datům v průměru vyšší o 15 ± 3 µatm.
          Autoři doporučují kalibraci v několika hloubkách místo jediného hlubokého bodu. Rozsah výsledku je konkrétní:
          vymezuje chybu jednoho současného zpracování a ukazuje, proč musí být profilující čidla průběžně porovnávána
          s lodními vzorky.{" "}
          <ReferenceLink href="https://doi.org/10.1038/s41598-026-43863-4">Zhang et al., 2026</ReferenceLink>
        </p>

        <p>
          Globální mapa má další vrstvu nejistoty: chybějící místa. Různé statistické postupy mohou z týchž lodních bodů
          vytvořit mírně odlišné mapy, zejména v polárních oceánech a u pobřeží. Globální produkty často sdílejí část
          měřického základu: SOCAT pro fCO₂, GLODAP pro alkalinitu a stejné satelitní pomocné veličiny. Shoda několika
          produktů je užitečná, ale nelze ji počítat jako shodu několika oddělených měřicích
          sítí. Přehled Jiang a kol. v roce 2026 katalogizoval 68 produktů a výslovně oddělil původní lodní data,
          časová pozorování, statisticky doplněné mapy a modelové výstupy.{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-18-1405-2026">Jiang et al., 2026</ReferenceLink>
        </p>

        <h2>Zveřejňovaná data</h2>
        <h3>GLODAPv3: vzorky od hladiny do hlubokého oceánu</h3>
        <p>
          GLODAPv3, zveřejněný v roce 2026, spojuje 1 181 výzkumných plaveb z období 1972–2023. Každý řádek odpovídá
          konkrétnímu vzorku a obsahuje polohu, datum, tlak, teplotu, salinitu, chemické hodnoty, značky kvality a
          doporučené úpravy. DIC a celková alkalinita prošly společnou kontrolou mezi plavbami; dosažená vnitřní shoda je
          uváděna jako 1,2 µmol na kilogram pro DIC a 1,4 µmol na kilogram pro alkalinitu. pH a fCO₂ jsou v souboru také,
          ale bez stejné druhotné kontroly. Kompletní bodový soubor lze stáhnout jako CSV nebo NetCDF a regionální části
          jako menší soubory. Licence je CC BY 4.0.{" "}
          <ReferenceLink href="https://doi.org/10.25921/m6tp-mj50">Stáhnout GLODAPv3</ReferenceLink> a{" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/data/oceans/ncei/ocads/metadata/0315582.html">úplná metadata</ReferenceLink>
        </p>

        <h3>SOCAT 2026: hustá povrchová měření CO₂</h3>
        <p>
          Surface Ocean CO₂ Atlas verze 2026 obsahuje 44,0 milionu měření plynného CO₂ v povrchové vodě. Nejde o
          databázi změřeného pH. Obsahuje fCO₂, teplotu, polohu, čas, hloubku přívodu vody a značku kvality, takže může být
          vstupem pro výpočet a mapování uhličitanového systému. Původní data jsou dostupná pod trvalým identifikátorem
          NOAA; přepočtená varianta Forda a kol. navíc převádí hodnoty na společnou hloubku a teplotu těsně pod hladinou.
          Nabízí jednotlivé body v tabulce i měsíční buňky 1° × 1° ve formátu NetCDF. Oba balíky jsou velké, úplná
          tabulka má několik gigabajtů.{" "}
          <ReferenceLink href="https://doi.org/10.25921/8dba-fr90">SOCAT v2026</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.5281/zenodo.20757579">přepočtený SOCAT 2026</ReferenceLink>
        </p>

        <h3>BATS a HOT: jednotlivé odběry v čase</h3>
        <p>
          BATS zveřejňuje hodnoty z jednotlivých lahví včetně DIC, celkové alkality, teploty, salinity, živin, hloubky a
          značek kvality. Verze dat dostupná přes BCO-DMO sahá do prosince 2024 a lze ji stáhnout jako tabulku. Program
          HOT nabízí vyhledávání jednotlivých plaveb, textové soubory, analytické metody a každoroční zprávy; jeho data
          do roku 2024 jsou označena jako dokončeně kontrolovaná. Oba portály umožňují přepočítat graf z původních
          vzorků, ale uživatel musí zachovat informace o metodě a stupnici vypočteného pH.{" "}
          <ReferenceLink href="https://doi.org/10.26008/1912/bco-dmo.3782.8">Stáhnout BATS</ReferenceLink> a{" "}
          <ReferenceLink href="https://hahana.soest.hawaii.edu/hot/">data HOT</ReferenceLink>
        </p>

        <h3>BGC-Argo: profily z autonomních plováků</h3>
        <p>
          BGC-Argo poskytuje jednotlivé profily pH na celkové stupnici při teplotě a tlaku přímo v oceánu. Soubor
          rozlišuje okamžitě odeslaná data od později kontrolovaných hodnot a ke každému bodu připojuje značku kvality.
          Plováky obvykle měří od povrchu do přibližně 2 000 metrů a opakují profil v několikadenním cyklu. Uživatel má
          stahovat upravenou proměnnou a současně kontrolovat stav následného zpracování; práce Zhang a kol. z roku 2026
          ukazuje, že ani značka „delayed mode“ sama nezaručuje odstranění všech regionálních systematických chyb.{" "}
          <ReferenceLink href="https://biogeochemical-argo.org/data-access.php">BGC-Argo: přístup k datům</ReferenceLink>
        </p>

        <h3>Copernicus a OceanSODA: hotové globální rekonstrukce</h3>
        <p>
          Copernicus Marine zveřejňuje roční globální průměr pH a mapu jeho sklonu od roku 1985. Soubory NetCDF
          obsahují vedle pH také nejistotu a úplná dokumentace popisuje plošné vážení. Produkt je vhodný pro globální a
          regionální povrchový přehled, nikoli pro ověřování jednoho laboratorního vzorku. OceanSODA-ETHZ nabízí měsíční
          pH, DIC, alkalinitu, pCO₂ a stav nasycení na mřížce 1° × 1° od roku 1982; verze použitá v práci Ma a kol. sahá do
          roku 2021 a pokrývá 96 % povrchu oceánu bez trvalého ledu. Data lze stáhnout bezplatně, u každého výsledku má
          zůstat název a verze produktu.{" "}
          <ReferenceLink href="https://doi.org/10.48670/moi-00224">Copernicus: globální pH</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.48670/moi-00277">Copernicus: mapa sklonů</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.25921/m5wx-ja34">OceanSODA-ETHZ</ReferenceLink>
        </p>

        <h3>Trojrozměrná rekonstrukce do hloubky 2 000 metrů</h3>
        <p>
          Zhong a kol. v roce 2025 zveřejnili měsíční pole pH od povrchu do 2 000 metrů pro roky 1992–2020. Statistický
          model byl naučen na pozorováních GLODAP a poskytuje 41 hloubkových úrovní na mřížce 1° × 1°. Při křížovém
          ověření byla celková střední kvadratická chyba 0,028 pH; u povrchu 0,044 a ve 2 000 metrech 0,013. Jde o
          rekonstrukci, nikoli o doplnění chybějících míst novým měřením. Datový balík je přesto užitečný pro přesně
          vymezené prostorové otázky, pokud se uvede jeho validační chyba.{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-17-719-2025">Zhong et al., 2025</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.12157/IOCAS.20230720.001">stáhnout data</ReferenceLink>
        </p>

        <h2>Srovnání výsledků</h2>
        <p>
          Místní pozorování a globální rekonstrukce odpovídají na jiné otázky. BATS popisuje jeden bod v severním
          subtropickém Atlantiku, ale stojí na pravidelných laboratorních vzorcích. Copernicus popisuje téměř celý
          povrch oceánu, ale většinu buněk statisticky odhaduje. Ma a kol. porovnali OceanSODA s BATS a HOT. Pro BATS v
          letech 1992–2021 dostali z rekonstrukce sklon −0,0174 ± 0,0004 pH za desetiletí; ze staničních dat vyšel sklon,
          který se od něj v rámci uvedené nejistoty nelišil. Pro HOT vyšel z rekonstrukce −0,0182 ± 0,0005 a ze staničních
          dat −0,0180 ± 0,0006 za desetiletí. Toto porovnání kontroluje, zda globální metoda zachová změnu na dvou
          dlouhých stanicích; samo nekontroluje oblasti bez stanice.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2023GB007765">Ma et al., 2023</ReferenceLink>
        </p>

        <p>
          Absolutní hodnoty nelze porovnat bez kontroly stupnice. BATS v práci Batese a Johnsona uvádí pH na stupnici
          mořské vody, zatímco OceanSODA a Copernicus používají celkovou stupnici. Sklon za stejné období se při
          správném převodu mění málo, ale dvě hodnoty pH z tabulek se nesmějí odečíst pouze podle názvu sloupce. Další
          rozdíl vzniká výběrem hloubky: SOCAT obvykle měří vodu nasávanou několik metrů pod hladinou, BATS používá
          vzorky z 0–10 metrů a globální produkty označují tuto tenkou vrstvu společně jako povrch.
        </p>

        <p>
          OceanSODA i CMEMS-LSCE používají SOCAT jako hlavní zdroj povrchového CO₂ a GLODAP při odhadu alkality. Liší se
          statistickou metodou, rozlišením a některými pomocnými daty. Podobný sklon přetrvává při použití odlišných
          algoritmů, zatímco společné vstupy znamenají, že část chyb oba produkty sdílejí. Poctivé srovnání proto uvádí
          zároveň shodu i tuto závislost.
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div
            className="article-figure__scroll"
            tabIndex={0}
            aria-label="Vodorovně posuvná mapa změny povrchového pH"
          >
            <Image
              className="article-figure__media"
              src="/media/ocean-acidification/copernicus-surface-ph-trend-map.png"
              alt="Mapa rekonstruovaných změn povrchového pH oceánu od roku 1985 do roku 2024"
              width={2542}
              height={1451}
              sizes="(max-width: 900px) 100vw, 900px"
              unoptimized
            />
          </div>
          <figcaption>
            Rekonstruovaný sklon povrchového pH v letech 1985–2024, vyjádřený jako změna za desetiletí. Všechny barevné
            oblasti mají záporný sklon; modré odstíny jsou blíže −0,008 a hnědé blíže −0,026 pH za desetiletí. Purpurové
            křížkování označuje oblasti s nejvyšší odhadovanou nejistotou, které produkt z hodnocení vylučuje. Mapa má
            rozlišení 0,25° × 0,25° a vznikla ze statisticky rekonstruovaných měsíčních polí, nikoli z přímého pH čidla v
            každé buňce. Zdroj a kredit: E.U. Copernicus Marine Service Information, produkt{" "}
            <ReferenceLink href="https://doi.org/10.48670/moi-00277">GLOBAL_OMI_HEALTH_carbon_ph_trend</ReferenceLink>.
          </figcaption>
        </figure>

        <h2 id="pozorovani">Pozorování</h2>
        <p>
          Dlouhá pozorování na jednotlivých stanicích ukazují pokles povrchového pH. Na spojeném záznamu Hydrostation S
          a BATS v Sargasovém moři kleslo sezónně očištěné pH vypočtené ze změřeného DIC a alkality v letech 1983–2023 o
          0,0752 jednotky. Lineární sklon byl −0,0018 ± 0,0001 pH za rok, tedy −0,018 ± 0,001 za desetiletí. V témže
          výpočtu klesl stav nasycení aragonitem o 0,354 a jeho sklon byl −0,009 ± 0,001 za rok. Všechny uvedené trendy
          měly v práci p-hodnotu menší než 0,01; výpočetní nejistota jednotlivého pH byla 0,003.{" "}
          <ReferenceLink href="https://doi.org/10.3389/fmars.2023.1289931">Bates &amp; Johnson, 2023</ReferenceLink>
        </p>

        <p>
          Nezávislé dlouhé odběry u Havaje ukazují podobnou změnu. Dore a kol. pro povrchovou vodu stanice ALOHA v
          období 1988–2007 vypočetli sklon pH −0,0019 ± 0,0002 za rok. Souhrn Batese a kol. porovnal sedm stanic v
          Atlantiku, Tichém oceánu, Islandském moři a u Nového Zélandu. Všechny vykazovaly pokles pH; zveřejněné sklony
          ležely přibližně mezi −0,0013 a −0,0026 za rok. Stanice neměly stejnou délku, sezónnost ani kombinaci měřených
          vstupů, proto je rozpětí popisem různých míst, nikoli nejistotou jednoho globálního čísla.{" "}
          <ReferenceLink href="https://doi.org/10.1073/pnas.0906044106">Dore et al., 2009</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.5670/oceanog.2014.16">Bates et al., 2014</ReferenceLink>
        </p>

        <p>
          První široká rekonstrukce Lauvset a kol. našla v letech 1991–2011 statisticky významný pokles pH přibližně v
          70 % hodnocených velkých oceánských oblastí a jejich průměrný sklon byl −0,018 ± 0,004 za desetiletí. Novější
          OceanSODA-ETHZ pokryl 96 % povrchu oceánu bez trvalého ledu a pro roky 1982–2021 odhadl globální sklon
          −0,0166 ± 0,0010 pH za desetiletí. Za celé období klesl jeho globální průměr přibližně o 0,06 pH a stav nasycení
          aragonitem přibližně o 10 %. Jde o výsledky statistických rekonstrukcí založených na měřeních, nikoli o prostý
          průměr pH odebraného ve všech buňkách.{" "}
          <ReferenceLink href="https://doi.org/10.5194/bg-12-1285-2015">Lauvset et al., 2015</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1029/2023GB007765">Ma et al., 2023</ReferenceLink>
        </p>

        <p>
          Nezávisle zpracovaný CMEMS-LSCE klesl z globálního povrchového pH 8,110 ± 0,017 v roce 1985 na 8,049 ± 0,014 v
          roce 2021; sklon byl −0,017 ± 0,004 za desetiletí. Aktualizovaný ukazatel použitý Světovou meteorologickou
          organizací pro zprávu za rok 2025 uvádí pro roky 1985–2025 −0,017 ± 0,001 pH za desetiletí. Každý zdroj počítá
          uvedené rozmezí vlastním postupem, proto je u grafu zachováváme s názvem produktu a
          obdobím. Shodný střední sklon navíc částečně vychází ze společných vstupních dat SOCAT a GLODAP.{" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-16-121-2024">Chau et al., 2024</ReferenceLink> a{" "}
          <ReferenceLink href="https://wmo.int/publication-series/state-of-global-climate/state-of-global-climate-2025">WMO: State of the Global Climate 2025</ReferenceLink>
        </p>

        <p>
          Tempo změny se mezi oceánskými oblastmi liší. Mapa Copernicus pro roky 1985–2024 obsahuje nad většinou hodnoceného oceánu
          záporné sklony přibližně od −0,008 do −0,026 pH za desetiletí a oblasti s nejvyšší nejistotou označuje a
          vylučuje. Globální průměr proto nepopisuje tempo v jednotlivém moři. Současně se kolem dlouhodobého sklonu
          odehrávají sezónní a meziroční výkyvy: u BATS byl běžný sezónní rozsah povrchového pH přibližně 0,08, tedy
          několikanásobek ročního dlouhodobého sklonu. Trend vzniká z mnoha let se srovnatelně zastoupenými měsíci, ne ze
          srovnání dvou náhodně vybraných odběrů.
        </p>

        <p>
          Pozorovaný posun pokračuje pod hladinu. Ríos a kol. porovnali atlantické průřezy mezi 50° jižní a 36° severní
          šířky z let 1993–1994 a 2013. Největší celkovou změnu našli ve středních, módních a mezilehlých vodách; maximum
          v jihoatlantické centrální vodě bylo −0,042 ± 0,003 pH za přibližně dvě desetiletí. V centrálních vodách měla
          výpočtem oddělená složka dlouhodobé změny pH sklon −0,0015 až −0,0020 za rok, zatímco v hlubokých a dnových vodách se
          celková změna blížila nule. Jeden průřez proto nedovoluje připsat povrchový sklon celé hloubce oceánu.{" "}
          <ReferenceLink href="https://doi.org/10.1073/pnas.1504613112">Ríos et al., 2015</ReferenceLink>
        </p>

        <div className="article-observation" aria-label="Shrnutí pozorování">
          <p className="eyebrow">Pozorování v jedné kapitole</p>
          <h3>Co ukazují zveřejněná měření a rekonstrukce</h3>
          <ul>
            <li>Dlouhá chemická pozorování u Bermud, Havaje a na dalších oceánských stanicích ukazují pokles povrchového pH.</li>
            <li>Na BATS kleslo pH vypočtené ze změřeného DIC a alkality v letech 1983–2023 o 0,0752 a současně klesl stav nasycení aragonitem.</li>
            <li>Globální povrchové rekonstrukce pro poslední čtyři desetiletí uvádějí sklon přibližně −0,017 pH za desetiletí.</li>
            <li>Tempo se mezi oceánskými oblastmi liší a krátkodobé místní výkyvy mohou být větší než změna za několik let.</li>
            <li>Opakované atlantické průřezy nacházejí pokles pH také ve středních a mezilehlých vodách, zatímco hlubší vrstvy se ve stejném období měnily méně.</li>
            <li>Globální mapy jsou statistické rekonstrukce z měření; přímé, vypočtené a rekonstruované hodnoty proto musí být v každém grafu označeny zvlášť.</li>
          </ul>
        </div>

        <h2>Prameny a data</h2>
        <div className="article-sources">
          <section>
            <h3>Vymezení pozorování a primární práce</h3>
            <ul>
              <li><ReferenceLink href="https://doi.org/10.1038/425365a">Caldeira &amp; Wickett (2003): první globální vyčíslení změny oceánského pH</ReferenceLink> – plný text podle přístupu vydavatele.</li>
              <li><ReferenceLink href="https://doi.org/10.1038/nature04095">Orr et al. (2005): pH a nasycení uhličitanem vápenatým</ReferenceLink> – článek vydavatele.</li>
              <li><ReferenceLink href="https://doi.org/10.5670/oceanog.2014.16">Bates et al. (2014): sedm dlouhých oceánských pozorování</ReferenceLink> – volně dostupné PDF.</li>
              <li><ReferenceLink href="https://doi.org/10.5194/bg-12-1285-2015">Lauvset et al. (2015): povrchové změny v oceánských oblastech</ReferenceLink> – otevřený článek, PDF a doplňky CC BY.</li>
              <li><ReferenceLink href="https://doi.org/10.1029/2023GB007765">Ma et al. (2023): globální pH a stav nasycení 1982–2021</ReferenceLink> – otevřený článek a PDF v repozitáři ETH.</li>
              <li><ReferenceLink href="https://doi.org/10.5194/essd-16-121-2024">Chau et al. (2024): CMEMS-LSCE, globální povrchová rekonstrukce</ReferenceLink> – otevřený článek, PDF a data CC BY 4.0.</li>
            </ul>
          </section>

          <section>
            <h3>Historie a metody měření</h3>
            <ul>
              <li><ReferenceLink href="https://doi.org/10.1093/icesjms/4.3.267">Buch (1929): pH mořské vody při různých teplotách</ReferenceLink> – historický článek vydavatele.</li>
              <li><ReferenceLink href="https://doi.org/10.1029/JC075i036p07648">Takahashi et al. (1970): porovnání metod před GEOSECS</ReferenceLink> – primární studie.</li>
              <li><ReferenceLink href="https://doi.org/10.1016/0012-821X(81)90090-X">Bradshaw &amp; Brewer (1981): DIC a alkalinita v GEOSECS</ReferenceLink> – primární metodická studie.</li>
              <li><ReferenceLink href="https://doi.org/10.1016/0967-0637(93)90048-8">Clayton &amp; Byrne (1993): spektrofotometrické pH</ReferenceLink> – primární kalibrace metody.</li>
              <li><ReferenceLink href="https://doi.org/10.1016/0304-4203(85)90012-8">Johnson et al. (1985): coulometrické měření DIC</ReferenceLink> – primární metodická studie.</li>
              <li><ReferenceLink href="https://doi.org/10.1016/S0304-4203(02)00133-0">Dickson et al. (2003): certifikace celkové alkality</ReferenceLink> – primární metodická studie.</li>
              <li><ReferenceLink href="https://www.ncei.noaa.gov/access/ocean-carbon-acidification-data-system/oceans/Handbook_2007/Guide_all_in_one.pdf">Dickson et al. (2007): příručka standardních měřicích postupů</ReferenceLink> – volně stažitelné PDF.</li>
              <li><ReferenceLink href="https://doi.org/10.4319/lom.2010.8.172">Martz et al. (2010): Durafet pro měření pH v mořské vodě</ReferenceLink> – volně čitelná primární studie.</li>
            </ul>
          </section>

          <section>
            <h3>Dlouhá pozorování a oceánské průřezy</h3>
            <ul>
              <li><ReferenceLink href="https://doi.org/10.1073/pnas.0906044106">Dore et al. (2009): dvě desetiletí na stanici ALOHA</ReferenceLink> – otevřený článek a PDF.</li>
              <li><ReferenceLink href="https://doi.org/10.3389/fmars.2023.1289931">Bates &amp; Johnson (2023): BATS a Hydrostation S, 1983–2023</ReferenceLink> – článek, PDF a obrázky CC BY 4.0.</li>
              <li><ReferenceLink href="https://doi.org/10.1073/pnas.1504613112">Ríos et al. (2015): změna pH ve vodních hmotách Atlantiku</ReferenceLink> – otevřený článek a PDF.</li>
              <li><ReferenceLink href="https://doi.org/10.5194/bg-21-5561-2024">Curbelo-Hernández et al. (2024): vodní hmoty subpolárního severního Atlantiku</ReferenceLink> – otevřený článek a PDF CC BY 4.0.</li>
              <li><ReferenceLink href="https://doi.org/10.5194/os-20-725-2024">Metzl et al. (2024): stanice OISO-KERFIX v Jižním oceánu</ReferenceLink> – otevřený článek a PDF CC BY 4.0.</li>
            </ul>
          </section>

          <section>
            <h3>Výpočty, návaznost a nejistota</h3>
            <ul>
              <li><ReferenceLink href="https://doi.org/10.1016/0016-7037(84)90225-4">Dickson (1984): definice stupnic pH mořské vody</ReferenceLink>.</li>
              <li><ReferenceLink href="https://cdiac.ess-dive.lbl.gov/ftp/co2sys/CO2SYS_calc_DOS_v1.05/cdiac105.pdf">Lewis &amp; Wallace (1998): CO2SYS</ReferenceLink> – původní příručka a program.</li>
              <li><ReferenceLink href="https://doi.org/10.1016/j.marchem.2018.10.006">Orr et al. (2018): šíření nejistot v uhličitanovém systému</ReferenceLink> – otevřený rukopis.</li>
              <li><ReferenceLink href="https://doi.org/10.1002/lno.12477">Carter et al. (2023): doporučení k nejistotám měření a výpočtů</ReferenceLink> – volně dostupné PDF přes NIST.</li>
              <li><ReferenceLink href="https://doi.org/10.1038/s41598-026-43863-4">Zhang et al. (2026): systematický rozdíl pH plováků v Jižním oceánu</ReferenceLink> – otevřený článek, PDF a data CC BY 4.0.</li>
              <li><ReferenceLink href="https://doi.org/10.5194/essd-18-1405-2026">Jiang et al. (2026): katalog 68 produktů oceánské chemie</ReferenceLink> – otevřený článek a tabulka CC BY 4.0.</li>
            </ul>
          </section>

          <section>
            <h3>Stažení původních měření</h3>
            <ul>
              <li><ReferenceLink href="https://doi.org/10.25921/m6tp-mj50">GLODAPv3</ReferenceLink> – bodové vzorky 1 181 plaveb, CSV a NetCDF, licence CC BY 4.0.</li>
              <li><ReferenceLink href="https://doi.org/10.25921/8dba-fr90">SOCAT v2026</ReferenceLink> – 44 milionů povrchových měření fCO₂ a metadata.</li>
              <li><ReferenceLink href="https://doi.org/10.26008/1912/bco-dmo.3782.8">BATS do prosince 2024</ReferenceLink> – jednotlivé lahve a tabulkové stažení.</li>
              <li><ReferenceLink href="https://hahana.soest.hawaii.edu/hot/">Hawaii Ocean Time-series</ReferenceLink> – jednotlivé plavby, metody a textová data.</li>
              <li><ReferenceLink href="https://biogeochemical-argo.org/data-access.php">BGC-Argo</ReferenceLink> – globální profily pH a značky kvality v NetCDF.</li>
              <li><ReferenceLink href="https://www.ncei.noaa.gov/products/ocean-carbon-acidification-data-system">NOAA OCADS</ReferenceLink> – vyhledávání výprav, bójí, časových stanic a odvozených produktů.</li>
            </ul>
          </section>

          <section>
            <h3>Stažení globálních rekonstrukcí</h3>
            <ul>
              <li><ReferenceLink href="https://doi.org/10.48670/moi-00224">Copernicus: roční globální povrchové pH</ReferenceLink> – NetCDF, metodika a nejistota.</li>
              <li><ReferenceLink href="https://doi.org/10.48670/moi-00277">Copernicus: mapa regionálních sklonů pH</ReferenceLink> – NetCDF na mřížce 0,25°.</li>
              <li><ReferenceLink href="https://doi.org/10.25921/m5wx-ja34">OceanSODA-ETHZ</ReferenceLink> – měsíční pH, DIC, alkalinita, pCO₂ a stav nasycení.</li>
              <li><ReferenceLink href="https://doi.org/10.12157/IOCAS.20230720.001">Zhong et al.: trojrozměrné pH 1992–2020</ReferenceLink> – měsíční mřížka do 2 000 metrů.</li>
              <li><ReferenceLink href="https://oceanco2.github.io/co2-products/">Živý katalog produktů oceánské chemie</ReferenceLink> – aktuální odkazy a rozlišení původních, doplněných a modelových dat.</li>
            </ul>
          </section>

          <section>
            <h3>Obrázky a licence</h3>
            <ul>
              <li>Globální graf a mapa: <ReferenceLink href="https://data.marine.copernicus.eu/product/GLOBAL_OMI_HEALTH_carbon_ph_area_averaged/description">E.U. Copernicus Marine Service Information</ReferenceLink>; použito s přesným kreditem produktu.</li>
              <li>Odběrová růžice: <ReferenceLink href="https://oceanacidification.noaa.gov/day-1-images-from-the-field-wcoa2026/">NOAA Ocean Acidification Program, WCOA 2026</ReferenceLink>; federální dílo USA, veřejná doména.</li>
              <li>Graf BATS: obrázek 7 v <ReferenceLink href="https://doi.org/10.3389/fmars.2023.1289931">Bates &amp; Johnson (2023)</ReferenceLink>, licence CC BY 4.0.</li>
              <li>Pravidla pro užití snímků NOAA: <ReferenceLink href="https://oceanservice.noaa.gov/about/faq.html">NOAA Ocean Service</ReferenceLink>.</li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
