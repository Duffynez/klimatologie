import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function CoulometryArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2 id="princip">Jak elektrický náboj určí množství uhlíku</h2>
        <p className="article-prose__intro">
          Coulometrie je analytická metoda, která určuje množství látky z elektrického
          náboje spotřebovaného při chemické reakci. V oceánografii se používá zejména
          ke stanovení celkového rozpuštěného anorganického uhlíku v mořské vodě.
          Vysvětlíme si provedení, při němž uhlík nejprve převedeme na plynný CO₂
          a potom změříme jeho množství v coulometru.{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(měřicí příručka, SOP 2)</SourceLink>
        </p>
        <h3>Které formy uhlíku měříme společně</h3>
        <p>
          Uhlík je v mořské vodě rozdělen mezi několik chemických forem. Část je
          přítomna jako rozpuštěný oxid uhličitý a kyselina uhličitá. Větší podíl
          obvykle tvoří hydrogenuhličitanové a uhličitanové ionty, tedy elektricky
          nabité částice obsahující uhlík a kyslík. Hydrogenuhličitan obsahuje také vodík.
          Součtu uhlíku ve všech těchto formách říkáme rozpuštěný anorganický uhlík,
          anglicky <em>dissolved inorganic carbon</em>, zkráceně DIC.{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(Dickson a kol., kap. 2 a SOP 2, oddíly 2–3)</SourceLink>
        </p>
        <p>
          Pro jeho změření převedeme všechny uvedené formy na CO₂. Přidáme kyselinu,
          která dodá vodíkové ionty H⁺. Ty reagují s hydrogenuhličitany a uhličitany,
          až vznikne rozpuštěný CO₂ a voda. Každá původní částice obsahovala jeden
          atom uhlíku a poskytne jednu molekulu CO₂. Když tento plyn celý zachytíme
          a změříme, zjistíme původní součet uhlíku. Chemické reakce podrobněji
          vysvětluje <Link href="/metody/titrace">článek o titraci</Link>.{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(Dickson a kol., kap. 2 a SOP 2, oddíly 2–3)</SourceLink>
        </p>
        <h3>Jak připravíme vzorek a uvolníme CO₂</h3>
        <p>
          Mořskou vodu odebereme z určitého místa a hloubky do dobře uzavřené skleněné
          lahve. Při delším uchování se biologická aktivita ve vzorku zastavuje
          přídavkem konzervačního roztoku. Tím se uchovává složení vody z doby odběru.
          Před rozborem se vzorek nechá ustálit na pracovní teplotě a připojí se
          k dávkovacímu zařízení.{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(SOP 1 a SOP 2, oddíl 6)</SourceLink>
        </p>
        <p>
          Kalibrovaná pipeta odměří část vzorku, zpravidla několik desítek mililitrů.
          Její skutečně vydaný objem se předem zjistí vážením odměřené vody
          a přepočtem podle hustoty. Pro mořský vzorek pak potřebujeme jeho teplotu
          a salinitu, údaj o slanosti. Z nich určíme hustotu a násobením objemu
          hustotou získáme hmotnost analyzované vody. K této hmotnosti se bude
          vztahovat výsledek.{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(SOP 12 a SOP 2, oddíl 8.3)</SourceLink>
        </p>
        <p>
          Odměřená voda se vypustí do skleněné extrakční nádoby. Slovo extrakce zde
          označuje oddělení CO₂ ze vzorku. Kyselina fosforečná převede anorganický
          uhlík na CO₂. Nosný plyn probublává vodou, přebírá uvolněný CO₂
          a odvádí jej z nádoby. Používá se například dusík zbavený CO₂.
          Plyn dále prochází chlazenou částí a čisticími náplněmi,
          které odstraní přebytečnou vodní páru a unášenou kyselinu.
          Připravený proud s CO₂ vstupuje do měřicí nádoby coulometru.
          Toto uspořádání popisuje{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">standardní postup SOP 2 oceánografické příručky</SourceLink>.
        </p>
        <h3>Jak proud vytváří měřicí činidlo</h3>
        <p>
          V měřicí nádobě je roztok obsahující ethanolamin, látku, která váže CO₂.
          Při jejich reakci se pro každou zachycenou molekulu CO₂ uvolní jeden
          vodíkový iont. Roztok se tím okyseluje. Abychom zjistili, kolik CO₂
          přibylo, budeme tuto vznikající kyselost průběžně vyrovnávat.{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(SOP 2, oddíl 3)</SourceLink>
        </p>
        <p>
          K vyrovnání slouží hydroxidové ionty OH⁻. Jsou to záporně nabité částice
          složené z kyslíku a vodíku. Jeden OH⁻ reaguje s jedním H⁺ a vytvoří
          molekulu vody. Počet potřebných hydroxidových iontů tak odpovídá počtu
          zachycených molekul CO₂.
        </p>
        <Equation tex={String.raw`\mathrm{H^+}+\mathrm{OH^-}\longrightarrow\mathrm{H_2O}`} />
        <p>
          Coulometr vytváří hydroxidové ionty přímo v roztoku elektrickým proudem.
          Na platinové elektrodě zvané katoda přecházejí elektrony do chemické
          reakce s vodou. Elektron je částice nesoucí záporný elektrický náboj.
          Reakcí vzniká plynný vodík a OH⁻:
        </p>
        <Equation tex={String.raw`2\,\mathrm{H_2O}+2\,\mathrm{e^-}\longrightarrow\mathrm{H_2}+2\,\mathrm{OH^-}`} />
        <p>
          Značka e⁻ označuje elektron, H₂ molekulu vodíku a H₂O vodu.
          Rovnice ukazuje rozhodující poměr: na každý vzniklý OH⁻ připadá jeden
          elektron.{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(SOP 2, oddíl 3)</SourceLink>
        </p>
        <p>
          Druhá, stříbrná elektroda se nazývá anoda a uzavírá elektrický
          obvod. Je v odděleném prostoru, propojeném s měřicím roztokem porézní
          přepážkou, přes kterou mohou procházet ionty.{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(SOP 2, oddíly 4.3 a 5.5)</SourceLink>
        </p>
        <p>
          Množství dodávaného proudu řídí barva roztoku. Obsahuje barvivo
          thymolftalein, které mění barvu podle kyselosti. Zdroj světla prosvěcuje
          roztok a detektor sleduje, kolik světla jím projde. Jakmile přicházející
          CO₂ roztok okyselí, elektronika zvýší tvorbu OH⁻. Tím obnoví původní
          barevný stav. Po celou analýzu tak přidává právě tolik činidla, kolik
          reakce se zachyceným CO₂ potřebuje.{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(SOP 2, oddíl 3)</SourceLink>
        </p>
        <figure className="article-figure">
          <div style={{ overflowX: "auto" }}>
            <Image src="/media/coulometry/principle.svg" width={900} height={630} unoptimized
              style={{ minWidth: "36rem" }}
              alt="Známá dávka vody se okyselí a CO₂ přejde nosným plynem do měřicí nádoby. Světelný detektor řídí proud vytvářející OH⁻ a přístroj sčítá prošlý náboj." />
          </div>
          <figcaption>
            Modrá část schématu znázorňuje přípravu vzorku a přenos CO₂.
            V zelené měřicí části se kyselost vyrovnává tvorbou OH⁻.
            Oranžové šipky ukazují řízení proudu podle barvy roztoku a záznam náboje.
            Vlastní schéma podle{" "}
            <SourceLink id="DOI_10_2172_10194787">Johnsonova popisu měřicí soustavy</SourceLink>{" "}
            a{" "}
            <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">SOP 2</SourceLink>.
          </figcaption>
        </figure>
        <h3>Jak převádíme náboj na množství CO₂</h3>
        <p>
          Proud říká, jak rychle prochází elektrický náboj. Při stálém proudu
          získáme celkový náboj násobením dobou jeho průchodu:
        </p>
        <Equation tex={String.raw`Q=I\,t`} />
        <p>
          Zde <InlineMath tex="Q" /> je náboj v coulombech, značka jednotky C,{" "}
          <InlineMath tex="I" /> proud v ampérech, A, a{" "}
          <InlineMath tex="t" /> doba v sekundách, s. Jeden ampér znamená jeden
          coulomb za sekundu. Při proměnném proudu přístroj sčítá náboj
          z jednotlivých časových úseků. Silnější proud po kratší dobu může
          vytvořit stejné množství činidla jako slabší proud po delší dobu.{" "}
          <SourceLink id="2016_Harvey_Analytical_Chemistry">(Harvey, oddíl 11.3)</SourceLink>
        </p>
        <p>
          Celý řetězec nyní spojuje jeden elektron, jeden vytvořený OH⁻,
          jeden vyrovnaný H⁺ a jednu zachycenou molekulu CO₂. Počet elektronů
          převádíme na látkové množství pomocí Faradayovy konstanty{" "}
          <InlineMath tex="F" />, přibližně 96 485 C/mol. Udává velikost náboje
          jednoho molu elektronů. Mol vyjadřuje množství látky podle počtu částic.
          Při úplném průběhu popsaných reakcí platí:
        </p>
        <Equation tex={String.raw`n(\mathrm{CO_2})=\frac{Q}{F}`} />
        <p>
          Veličina <InlineMath tex={String.raw`n(\mathrm{CO_2})`} /> je množství
          zachyceného CO₂ v molech. Protože každá jeho molekula obsahuje jeden
          atom uhlíku, jde zároveň o množství uhlíku odděleného ze vzorku.
          Právě tato vazba na elektrický náboj je principem coulometrie.
          Reakce a jejich vzájemné poměry uvádí{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">SOP 2, oddíl 3</SourceLink>.
        </p>
        <figure className="article-figure">
          <Image src="/media/coulometry/coulometer-usgs.jpg" width={2868} height={4032} unoptimized
            style={{ maxHeight: "36rem", width: "auto", marginInline: "auto" }}
            alt="Modrý laboratorní coulometr UIC s ovládací obrazovkou a tmavým krytem měřicí části pod ní, používaný pro rozpuštěný anorganický uhlík ve vodě." />
          <figcaption>
            Coulometr UIC pro rozbory rozpuštěného anorganického uhlíku ve vodě.
            Nahoře je ovládací obrazovka, pod ní zakrytá měřicí část. Příprava
            vzorku a oddělení CO₂ probíhají v připojené aparatuře.
            USGS používá tento druh přístroje také při{" "}
            <SourceLink id="2026_USGS_Gas_Hydrates_Biogeochemistry">výzkumu uhlíkového cyklu v mořském prostředí</SourceLink>.
            Foto{" "}
            <SourceLink id="2018_USGS_Coulometer_Photo">Adrian Mann / USGS, Woods Hole Coastal and Marine Science Center</SourceLink>,
            zveřejněno 6. listopadu 2018, public domain.
          </figcaption>
        </figure>
        <h3>Jak vznikne kalibrovaný výsledek</h3>
        <p>
          Odezva bývá ukládána jako počet elektronických impulzů, v dokumentaci
          označených <em>counts</em>. Jsou to jednotky přístrojového odečtu,
          jejichž součet odpovídá prošlému náboji.{" "}
          <SourceLink id="DOI_10_2172_10194787">(Johnson, kap. 4)</SourceLink>
        </p>
        <p>
          Před měřením vzorku necháme soustavou proudit nosný plyn a změříme její
          pozadí. Jde o malou odezvu, kterou přístroj zaznamená i bez přidané vody.
          Za dobu následného rozboru se nasčítá určitý příspěvek. Ten odečteme,
          aby výsledek odpovídal uhlíku ze vzorku. Stejně zacházíme s případným CO₂
          přineseným přidávanou kyselinou. V automatickém systému lze kyselinu
          nejprve odplynit a teprve potom přidat vodu.{" "}
          <SourceLink id="DOI_10_2172_10194787">(Johnson, kap. 4)</SourceLink>
        </p>
        <p>
          Kalibrace propojí odezvu celé měřicí části se známým množstvím CO₂.
          Do plynové cesty se vpustí obsah přesně proměřené kovové smyčky naplněné
          čistým CO₂. Z jejího objemu, teploty a tlaku se vypočte množství plynu.
          Porovnáním s odezvou coulometru získáme převodní koeficient.
          Jinou možností jsou roztoky s přesně známým množstvím uhličitanu sodného,
          které projdou stejnou přípravou jako vzorky.{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(SOP 2, oddíly 4.4 a 7.4)</SourceLink>
        </p>
        <p>
          Elektroniku lze navíc zkontrolovat přivedením známého proudu po známou
          dobu. Tím zjistíme vztah mezi skutečným nábojem a elektronickým odečtem.
          Starší automatizovaná soustava popsaná v Johnsonově manuálu ukládá
          tuto elektrickou kalibraci odděleně
          od kalibrace plynem. Při zpracování nejprve opraví elektrický odečet
          a potom použije koeficient získaný měřením známé dávky CO₂.
          Postup a záznam těchto koeficientů dokládá{" "}
          <SourceLink id="DOI_10_2172_10194787">Johnsonův manuál, oddíl 4.2</SourceLink>.
        </p>
        <p>
          Po odečtení pozadí a použití
          kalibrace získáme množství uhlíku. Vydělíme je hmotností analyzované vody:
        </p>
        <Equation tex={String.raw`C_\mathrm{T}=\frac{n_\mathrm{C}}{m_\mathrm{vody}}`} />
        <p>
          <InlineMath tex={String.raw`C_\mathrm{T}`} /> označuje celkový rozpuštěný
          anorganický uhlík vztažený k hmotnosti vody,{" "}
          <InlineMath tex={String.raw`n_\mathrm{C}`} /> jeho naměřené látkové množství
          a <InlineMath tex={String.raw`m_\mathrm{vody}`} /> hmotnost vzorku.
          Při množství v mikromolech a hmotnosti v kilogramech má výsledek jednotku
          µmol/kg. Mikromol je miliontina molu.{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(SOP 2, oddíl 8.3)</SourceLink>
        </p>
        <p>
          Přídavek konzervačního roztoku vodu mírně zředí. Pro návrat ke složení
          před přídavkem vynásobíme zjištěnou koncentraci ředicím faktorem.
          Ten vyjadřuje poměr celkového objemu po přídavku k původnímu objemu vody.
          Tuto opravu předepisuje{" "}
          <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">SOP 2, oddíl 8.3</SourceLink>.
        </p>
        <p>
          Celým postupem prochází i referenční mořská voda se stanoveným obsahem
          uhlíku. Porovnání jejího výsledku s certifikovanou hodnotou ověřuje
          společně dávkování, oddělení CO₂ i měřicí část. Stejný materiál mohou
          používat různé laboratoře, a tím spojovat svá měření se společnou
          referencí. Vznik těchto materiálů a jejich význam pro oceánografii
          vysvětluje{" "}
          <SourceLink id="DOI_10_5670_oceanog_2010_22">Dickson (2010)</SourceLink>.
        </p>
        <h3>Co coulometrie umožňuje sledovat v oceánu</h3>
        <p>
          Výsledek patří konkrétní odebrané vodě. Opakované odběry z různých hloubek
          poskytují svislý profil rozpuštěného uhlíku. Měření podél trasy lodi
          umožní porovnávat vodní masy a opakované plavby sledovat změny v čase.
          Při průzkumu Indického oceánu v letech 1994–1996 bylo takto na devíti
          plavbách lodi Knorr analyzováno 18 963 vzorků.{" "}
          <SourceLink id="DOI_10_3334_CDIAC_otg_ndp080">Datový soubor NDP-080</SourceLink>{" "}
          zpřístupňuje výsledky spolu s polohou odběrů, doprovodnými měřeními
          a dokumentací jejich zpracování.
        </p>
        <p>
          Obsah uhlíku se využívá také společně s alkalinitou, která vyjadřuje
          bilanci schopnosti vody neutralizovat kyselinu. Tyto dvě veličiny umožňují
          vypočítat zastoupení jednotlivých uhlíkových forem a pH, údaj o kyselosti vody.
          Výpočet používá také teplotu, salinitu a tlak. Takto{" "}
          <SourceLink id="DOI_10_1073_pnas_0906044106">Dore a kolegové (2009)</SourceLink>{" "}
          z opakovaných měření na stanici ALOHA u Havaje vyhodnotili acidifikaci
          v letech 1988–2007. Návaznost těchto měření vysvětluje{" "}
          <Link href="/pozorovani/acidifikace-oceanu/#vypocet-chemie">článek o acidifikaci oceánu</Link>.
        </p>
        <h3>Historie a další provedení</h3>
        <p>
          Úměrnost mezi prošlým nábojem a chemickou přeměnou doložil{" "}
          <SourceLink id="DOI_10_1098_rstl_1834_0008">Michael Faraday v roce 1834</SourceLink>.
          Porovnával mimo jiné rozklad vody při různých elektrodách a složeních
          roztoku. Pro oceánografii bylo později rozhodující propojit měření
          s přesným dávkováním vody a úplným oddělením CO₂.
        </p>
        <p>
          <SourceLink id="DOI_10_2172_10194787">Johnsonův manuál z roku 1992</SourceLink>{" "}
          již popisuje automatizovaný systém SOMMA připravený pro globální průzkum
          oceánského uhlíku. Zkratka znamená <em>Single-Operator Multiparameter
          Metabolic Analyzer</em>, víceúčelový analyzátor pro jednoho pracovníka.
          Jde o celou soustavu pro dávkování vzorku, oddělení CO₂ a měření.
          Coulometr tvoří její měřicí část.
        </p>
        <p>
          Coulometricky lze stanovovat i jiné látky. Někdy reagují přímo
          na elektrodě, jindy proud vytváří činidlo pro následnou reakci,
          jako v právě popsaném měření CO₂. V oceánografických laboratořích se
          coulometrie používá také pro přesné stanovení koncentrace kyseliny
          a jako součást měření alkalinity. Takové použití dokládají{" "}
          <SourceLink id="DOI_10_1016_S0304_4203_02_00133_0">Dickson a kolegové (2003)</SourceLink>.
          Společný je převod náboje na množství látky, potřebné chemické reakce
          se mění podle úlohy.
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Rozhodující jsou zachování vzorku, úplné oddělení CO₂, známá hmotnost
          vody a stálá odezva coulometru. Opakovatelnost měření při průzkumu
          Indického oceánu byla vyjádřena směrodatnou odchylkou přibližně
          1,2 µmol/kg. Ta popisuje, jak se opakované výsledky rozptylují kolem průměru. Porovnání s odlišným postupem na souši však
          ukázalo i soustavný rozdíl několika µmol/kg.{" "}
          <SourceLink id="DOI_10_3334_CDIAC_otg_ndp080">Dokumentace průzkumu</SourceLink>{" "}
          tak umožňuje posoudit opakovatelnost i shodu mezi metodami.
        </p>
        <details className="article-details">
          <summary>Podrobnosti o přesnosti a porovnání metod</summary>
          <p>
            Výměna CO₂ s okolním vzduchem nebo biologická aktivita mění vzorek ještě
            před analýzou. Netěsnost plynové cesty a neúplné oddělení CO₂ snižují
            množství dopravené do měřicí nádoby. Pevné uhličitanové částice mohou
            při okyselení uvolnit další uhlík. Výsledek by pak zahrnul i jejich
            příspěvek k rozpuštěnému uhlíku.{" "}
            <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(SOP 1 a SOP 2, oddíl 3)</SourceLink>
          </p>
          <p>
            Při práci se mění pozadí, složení měřicího roztoku a odezva elektrody.
            Změna teploty ovlivňuje také barvivo řídící proud.{" "}
            <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">SOP 2</SourceLink>{" "}
            proto předepisuje průběžné kontroly pozadí, kalibrace a referenční vody.
            Dvě velikosti plynové smyčky ověřují odezvu v rozsahu množství CO₂
            obsaženého ve vzorcích. Kontrola plynem sleduje především coulometr,
            zatímco referenční voda prověřuje i dávkování a extrakci.
          </p>
          <p>
            Na devíti plavbách Indickým oceánem se porovnávalo lodní coulometrické
            měření s pozdější analýzou odebraných vzorků na souši. Druhý postup
            odděloval CO₂ ve vakuu a určoval jeho množství z tlaku, tedy manometricky.
            Dokumentace uvádí 166 párových porovnání. Průměr devíti průměrných
            rozdílů za jednotlivé plavby činil −4,16 µmol/kg, coulometrie vycházela
            níže. Směrodatná odchylka těchto devíti rozdílů byla 1,21 µmol/kg.
            Příčina rozdílu nebyla v této zprávě uzavřena.{" "}
            <SourceLink id="DOI_10_3334_CDIAC_otg_ndp080">(NDP-080, tabulky 8–10)</SourceLink>
          </p>
          <p>
            Porovnání používá odlišný způsob extrakce i detekce, zároveň zahrnuje
            přepravu a skladování vzorků. Referenční vody používané na lodi měly
            obsah uhlíku stanovený manometricky, takže obě cesty sdílely tuto
            referenční vazbu. Uvedený rozptyl ani rozdíl není univerzální vlastností
            všech coulometrů. Podrobnosti obsahují{" "}
            <SourceLink id="DOI_10_3334_CDIAC_otg_ndp080">oddíl o měření celkového CO₂ a tabulky 8–10 zprávy NDP-080</SourceLink>.
          </p>
        </details>

        <h2>Příklad: dva rozbory z původního výpisu přístroje</h2>
        <p>
          <SourceLink id="DOI_10_2172_10194787">Johnsonův manuál, obrázek 10 na straně 50</SourceLink>,{" "}
          zveřejňuje skutečný výpis dvou opakovaných rozborů jednoho vzorku.
          Obsahuje deset postupných odečtů každého měření a koeficienty použité
          přístrojem. Místo ani datum odběru nejsou uvedeny. Zopakujeme výpočet
          z těchto odečtů až ke koncentraci uhlíku.
        </p>
        <p>
          Vzorek měl salinitu 34,9 a při dávkování teplotu 10,02 °C. Pipeta vydala
          28,70801 ml vody o hustotě 1,026871 g/ml, tedy přibližně 0,0294794 kg.
          Pro první rozbor přístroj zaznamenal následující průběh:
        </p>
        <figure className="article-figure">
          <div style={{ overflowX: "auto" }}>
            <Image src="/media/coulometry/record.svg" width={900} height={490} unoptimized
              style={{ minWidth: "36rem" }}
              alt="Deset kumulativních odečtů prvního rozboru. Počet impulzů rychle roste během prvních čtyř minut a potom se ustálí na 301133." />
          </div>
          <figcaption>
            Vodorovná osa udává minuty podle výpisu, svislá nasčítané impulzy
            coulometru. Body jsou zveřejněné odečty prvního rozboru, spojnice
            usnadňuje sledování jejich pořadí. Ustálení ukazuje konec přísunu
            měřitelného CO₂ ze vzorku. Vlastní graf dat z{" "}
            <SourceLink id="DOI_10_2172_10194787">obrázku 10 manuálu</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Poslední odečet prvního rozboru je 301 133 impulzů. Tehdejší převod
          přístroje používal 4824,45 impulzu na mikromol, takže první podíl dává
          62,41810 µmol. Jde o výchozí převod odečtu na množství uhlíku.
        </p>
        <p>
          Nyní oddělíme příspěvky, které nepatří uhlíku ze vzorku.
          Odečteme příspěvek pozadí za deset minut,
          0,02901885 µmol, a drobný příspěvek elektroniky, 0,001660714 µmol.
          Elektrická kalibrace dále určila, že odečet roste oproti referenci
          v poměru 1,000046. Tímto koeficientem proto dělíme. Zbývá
          62,38455 µmol.
        </p>
        <p>
          Následuje kalibrace známou dávkou plynu. Přístroj po elektrické
          opravě ukazoval o něco méně CO₂, než dávka skutečně obsahovala.
          Poměr skutečného a naměřeného množství byl 1,002843.
          Právě získané množství proto násobíme tímto koeficientem.
          Dostaneme 62,56191 µmol uhlíku.
          Tato hodnota patří celé dávce vody v pipetě. Vydělením její hmotností
          ji převedeme na jeden kilogram:
        </p>
        <Equation tex={[
          String.raw`C_\mathrm{T}\approx\frac{62{,}56191\,\mathrm{\mu mol}}{0{,}0294794\,\mathrm{kg}}`,
          String.raw`\approx2122{,}22\,\mathrm{\mu mol\,kg^{-1}}`,
        ]} />
        <p>
          Stejné kroky zopakujeme pro druhý rozbor. Jeho konečný odečet
          byl o 26 impulzů nižší. Výsledky lze porovnat v tabulce:
        </p>
        <div className="method-data-output">
          <div className="method-data-output__table-wrap" tabIndex={0} role="region" aria-label="Přepočet dvou rozborů vody">
            <table>
              <thead><tr><th>Rozbor</th><th>Konečný odečet</th><th>Uhlík po kalibraci</th><th>Výsledek</th></tr></thead>
              <tbody>
                <tr><td>1</td><td>301 133 impulzů</td><td>62,56191 µmol</td><td>2122,224 µmol/kg</td></tr>
                <tr><td>2</td><td>301 107 impulzů</td><td>62,55651 µmol</td><td>2122,041 µmol/kg</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>
          Aritmetický průměr obou výsledků je <strong>2122,132 µmol/kg</strong>,
          po rozumném zaokrouhlení 2122,13 µmol/kg. Shoduje se s průměrem
          vytištěným v manuálu. Jde o obsah uhlíku v tomto vzorku, ke kterému
          jsme došli přes odečet náboje, kalibraci a známou hmotnost vody.
        </p>
        <details className="article-details">
          <summary>Data, koeficienty a opakování výpočtu</summary>
          <p>
            Ke stažení jsou{" "}
            <a href="/data/methods/coulometry/somma-1992-counts.csv">všech dvacet odečtů v CSV</a>,{" "}
            <a href="/data/methods/coulometry/example.json">zdroj a nastavení výpočtu v JSON</a>{" "}
            a{" "}
            <a href="/data/methods/coulometry/reproduce.py">skript pro Python 3</a>.
            Uložte soubory do stejné složky a spusťte <code>python reproduce.py</code>.
            Skript používá standardní knihovnu a kontroluje otisk vstupních dat.
          </p>
          <p>
            Pozadí ve výpisu činí 0,002901885 µmol/min. Násobíme je deseti minutami
            měření. Elektrický příspěvek 0,0004151785 µmol/min se násobí čtyřmi
            minutami významného průchodu proudu uvedenými ve výpisu.
            Po obou odečtech dělíme koeficientem 1,000046 a následně násobíme
            plynovým koeficientem 1,002843. Předchozí odečty proplachu soustavy
            nejsou odečty vzorku a do tohoto výpočtu nevstupují.{" "}
            <SourceLink id="DOI_10_2172_10194787">(Johnson, oddíly 4.1–4.2 a obr. 10)</SourceLink>
          </p>
          <p>
            Pro přesné zopakování používáme publikovanou převrácenou hmotnost
            33,92198 kg⁻¹. Nové vypočtení hmotnosti ze zaokrouhleného objemu
            a hustoty změní koncentraci asi o 0,00084 µmol/kg.
            Manuál tiskne druhý výsledek jen jako 2122,04 µmol/kg, tabulka výše
            uvádí náš přepočet ze zveřejněných vstupů.
          </p>
          <p>
            Ponecháváme historický převod 4824,45 impulzu na mikromol.
            Manuál jej odvozuje z tehdy použité hodnoty Faradayovy konstanty
            96 489 C/mol a jmenovitého převodu elektroniky. Výsledkem je
            koncentrace ve fázi zobrazené přístrojem. Další opravu na
            konzervační roztok nebo výměnu s plynem nad vzorkem nepřidáváme,
            protože výpis potřebné údaje neobsahuje.{" "}
            <SourceLink id="DOI_10_2172_10194787">(Johnson, oddíly 4.1–4.2 a obr. 10)</SourceLink>
          </p>
        </details>
        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Coulometrie spojuje množství stanovované látky s elektrickým nábojem
            spotřebovaným při reakci. U mořské vody se rozpuštěný anorganický uhlík
            převede na CO₂ a jeho množství se určí v měřicí cele. Kalibrované rozbory
            tak poskytují porovnatelné údaje o zásobách uhlíku v oceánu.
          </p>
          <p>
            Coulometrie slouží ke stanovení množství látek, které lze zapojit do známé
            elektrochemické reakce. V oceánografii měří celkový rozpuštěný anorganický
            uhlík. Standardní postup pokrývá běžné oceánské koncentrace 1 800–2 300
            µmol/kg i vyšší koncentrace 3 800–4 300 µmol/kg, jaké se vyskytují v Černém
            moři.{" "}
            <SourceLink id="2016_Harvey_Analytical_Chemistry">(Harvey: coulometrie)</SourceLink>,{" "}
            <SourceLink id="WEB_NOAA_Dickson_et_al_2007_prirucka_standardnich_mericic_9661bd2a">(Dickson a kol.: postup SOP 2)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
