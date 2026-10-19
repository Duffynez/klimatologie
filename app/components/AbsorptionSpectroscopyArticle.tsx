import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

const dataPath = "/data/methods/absorption-spectroscopy";

export function AbsorptionSpectroscopyArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Absorpční čára</dt><dd>Úzká část spektra, v níž daný plyn pohlcuje světlo. Její poloha pomáhá určit látku, síla její množství.</dd></div>
          <div><dt>Optická dutina</dt><dd>Prostor mezi zrcadly, ve kterém světlo opakovaně prochází vzorkem plynu.</dd></div>
          <div><dt>CRDS</dt><dd>Laserová metoda, která určuje absorpci z rychlosti slábnutí světla v optické dutině.</dd></div>
          <div><dt>Izotopolog</dt><dd>Podoba molekuly s určitým zastoupením izotopů. U CO₂ rozlišujeme například molekuly s uhlíkem ¹²C a ¹³C.</dd></div>
        </dl>
        <p className="article-glossary__note">Světlo umožňuje rozlišit plyny ve směsi. Referenční směsi propojí optický signál s jejich zastoupením ve vzduchu.</p>
      </aside>

      <div className="article-prose">
        <h2>Jak absorpční spektroskopie měří složení vzduchu</h2>
        <p className="article-prose__intro">
          Absorpční spektroskopie plynů je metoda, která určuje složení plynné směsi podle toho,
          jak pohlcuje světlo různých vlnových délek. V klimatologii umožňuje soustavně měřit
          oxid uhličitý, metan, vodní páru a další plyny. V popsaném provedení vzduch prochází měřicí
          komorou, ve které jej osvětluje známý zdroj záření.
        </p>
        <p>
          Podrobně projdeme laserové měření CO₂ metodou <strong>CRDS</strong>, z anglického
          názvu <em>cavity ring-down spectroscopy</em>. Sleduje se při něm, jak rychle slábne
          světlo uzavřené mezi zrcadly. Vysvětlení kalibrace naváže na laboratorní postup
          americké Národní správy pro oceán a atmosféru, NOAA.
          Její <SourceLink id="2021_NOAA_CO2_Analysis">veřejná metodika</SourceLink> obsahuje
          také skutečná měření, na kterých později zopakujeme převod signálu na výsledek.
        </p>

        <h3>Co se o plynu dozvíme ze světla</h3>
        <p>
          Světlo je elektromagnetické vlnění. Vzdálenost mezi dvěma sousedními vrcholy vlny
          se nazývá <strong>vlnová délka</strong>. Ve viditelné oblasti ji vnímáme jako barvu.
          Při měření CO₂ využíváme také infračervené záření, které má delší vlny a oko je nevidí.
          Molekuly plynu přijímají energii záření při určitých změnách svého kmitání a otáčení.
          Proto pohlcují některé vlnové délky výrazně silněji než jiné.
        </p>
        <p>
          Změříme-li pohlcování při mnoha vlnových délkách, dostaneme <strong>absorpční spektrum</strong>.
          Místa se silnějším pohlcováním v něm tvoří absorpční čáry. Různé plyny mají čáry
          na různých místech, takže můžeme vybrat úzký rozsah vhodný pro sledovanou látku.
          Tuto možnost rozlišení plynů vysvětluje <SourceLink id="WEB_NIST_Greenhouse_Gas_Measurement">americký
          metrologický ústav NIST</SourceLink>. U stejného plynu, teploty a tlaku závisí síla
          absorpce na počtu molekul v dráze světla. Delší průchod vzorkem nebo více molekul
          v jednotce objemu znamená větší zeslabení svazku.
        </p>

        <h3>Jak přivedeme vzduch do přístroje</h3>
        <p>
          Čerpadlo nasává vzduch přívodní trubicí do měřicí komory. Na stanici může trubice
          vést k odběrovému místu na stožáru, v laboratoři k baňce se vzorkem nebo k tlakové
          lahvi. Ventily vybírají, který plyn právě proudí do přístroje. Po přepnutí necháme
          nový vzorek propláchnout vedení i komoru, aby zaznamenaná odezva už patřila tomuto plynu.
        </p>
        <p>
          Teplota a tlak uvnitř komory se udržují stálé. Při stlačení by totiž stejný vzduch
          obsahoval více molekul v jednotce objemu, a proto by silněji pohlcoval světlo.
          Teplota a vzájemné srážky molekul ovlivňují také šířku a tvar absorpčních čar.
          Řízené podmínky umožní porovnávat vzorek se známými směsmi za stejné situace.
          Konstrukci komory a řízení těchto veličin popisují <SourceLink id="DOI_10_5194_amt_3_375_2010">Chen
          a kolegové (2010)</SourceLink> u přístroje upraveného pro měření z letadla.
        </p>
        <p>
          Pro klimatické záznamy vyjadřujeme zastoupení CO₂ vůči <strong>suchému vzduchu</strong>.
          Proměnlivá vodní pára by jinak měnila celkový počet molekul směsi a tím i podíl CO₂.
          V popisované laboratoři NOAA se vzorek vede přes ochlazenou trubici, na jejíchž stěnách
          se voda zachytí. <SourceLink id="2021_NOAA_CO2_Analysis">Metodika</SourceLink> uvádí
          lázeň přibližně −75 °C. Vysušený vzduch potom vstupuje do analyzátoru.
        </p>
        <figure className="article-figure article-figure--instrument">
          <Image src="/media/absorption-spectroscopy/noaa-aircraft-crds.jpg" alt="Laserový analyzátor CO₂ a metanu v modrém leteckém stojanu s přívodními hadicemi, kabely a pomocným vybavením." width={426} height={277} className="article-figure__media" unoptimized />
          <figcaption>
            Analyzátor CO₂ a metanu metodou CRDS v leteckém přístrojovém stojanu NOAA.
            Na snímku jsou přístrojové skříně, přívody a nosný rám. Samotná optická komora
            se zrcadly je uvnitř. Jde o terénní využití stejného principu, laboratorní příklad
            níže pochází z jiné sestavy. <SourceLink id="WEB_NOAA_CSL_CO2_CH4_Instrument">Foto
            poskytla NOAA Chemical Sciences Laboratory, Boulder, Colorado, USA</SourceLink>.
            Datum snímku a konkrétní model nejsou uvedeny. Snímek je volně použitelný
            podle <SourceLink id="WEB_NOAA_CSL_Terms">podmínek NOAA CSL</SourceLink>.
          </figcaption>
        </figure>

        <h3>Proč měříme dobu slábnutí světla</h3>
        <p>
          Uvnitř analyzátoru jsou zrcadla, která odrážejí téměř všechno dopadající světlo.
          Prostor mezi nimi tvoří <strong>optickou dutinu</strong>. Laser do ní vpustí úzký
          svazek a světlo pak opakovaně prochází stejným vzorkem. I slabé pohlcování se při
          mnoha průchodech projeví. Velká celková dráha světla se tak vejde do malé komory.
        </p>
        <p>
          Zrcadla propouštějí malou část světla ven. Za jedním z nich stojí detektor,
          který tento unikající podíl převádí na elektrický signál. Když přístroj rychle
          přeruší přívod laserového světla, začne množství světla uvnitř klesat.
          Ubývá ho průchodem zrcadly i pohlcováním plynem. Detektor zaznamenává pokles
          a elektronika k odečtům přiřazuje čas.
        </p>
        <p>
          Průběh poklesu je přibližně exponenciální: za stejné časové úseky zbývá stejný
          podíl předchozího množství světla. Jeho rychlost vyjádříme časovou konstantou,
          označovanou řeckým písmenem <InlineMath tex={String.raw`\tau`} />.
          Je to doba, za kterou signál klesne přibližně na 37 % počáteční hodnoty.
          Při silnější absorpci světlo ubývá rychleji a naměříme kratší časovou konstantu.{" "}
          <SourceLink id="DOI_10_5194_amt_8_3867_2015">Yver Kwok a kolegové (2015)</SourceLink>{" "}
          popisují tento postup u souboru laboratorních a terénních analyzátorů.
        </p>
        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" tabIndex={0} role="region" aria-label="Schéma měření CRDS, na malé obrazovce posuvné">
            <Image src="/media/absorption-spectroscopy/crds-principle.svg" alt="Laser, zrcadla a detektor. Schéma ukazuje opakovaný průchod světla vzorkem a rychlejší pokles signálu při absorpci CO₂." width={1000} height={510} className="article-figure__media" unoptimized />
          </div>
          <figcaption>
            Schéma principu, nikoli naměřená data. Oranžové šipky nahoře ukazují dráhu světla,
            modré svislice zrcadla. Pro přehlednost jsou průchody nakresleny vedle sebe.
            Dole je vodorovně čas od vypnutí přívodu světla a svisle signál detektoru.
            Oranžová křivka klesá rychleji, protože k ostatním ztrátám přibývá absorpce CO₂.
            Schéma má dvě zrcadla, používané analyzátory mohou mít i tři.
          </figcaption>
        </figure>
        <p>
          Pro určení absorpce potřebujeme od celkového ubývání oddělit ztráty, které způsobuje
          samotná dutina a ostatní pozadí. Změříme je mimo vybranou absorpční čáru a odhadneme
          jejich průběh také pod ní. Získáme tak dobu slábnutí, jaká by při dané vlnové délce
          odpovídala pozadí bez sledované absorpce.
        </p>
        <p>
          Rychlost slábnutí vyjadřuje obrácená hodnota časové konstanty. Od rychlosti celkového
          poklesu odečteme rychlost odpovídající pozadí. Zbude příspěvek sledovaného plynu.
          Dělením rychlostí světla jej převedeme ze zeslabování za jednotku času na zeslabování
          na jednotku dráhy. Tak získáme <strong>absorpční koeficient</strong>:
        </p>
        <Equation tex={String.raw`\alpha = \frac{1}{c}\left(\frac{1}{\tau}-\frac{1}{\tau_0}\right)`} />
        <p>
          Zde <InlineMath tex={String.raw`\tau`} /> je doba slábnutí se sledovanou absorpcí
          a <InlineMath tex={String.raw`\tau_0`} /> doba odpovídající pozadí, obě v sekundách.
          Písmeno <InlineMath tex={String.raw`c`} /> označuje rychlost světla v plynu v metrech
          za sekundu. Výsledný koeficient <InlineMath tex={String.raw`\alpha`} /> má jednotku
          m⁻¹, tedy převrácený metr. Vztah platí pro dutinu vyplněnou vzorkem při stejných
          ostatních ztrátách. <SourceLink id="WEB_NOAA_CSL_CRDS_Principle">Přístrojová
          dokumentace NOAA CSL</SourceLink> uvádí i obecnější podobu pro vzorek zabírající
          pouze část optické dráhy.
        </p>
        <p>
          Laser postupně mění vlnovou délku v úzkém rozsahu a měření se opakuje.
          Z jednotlivých dob slábnutí vznikne profil absorpční čáry, tedy záznam její síly
          napříč tímto rozsahem. Výpočet hledá hladkou křivku, která co nejlépe odpovídá
          naměřeným bodům a popisuje tvar čáry i pozadí. Z ní určí výšku čáry nad pozadím.
          Tak získáme jednu číselnou odezvu odpovídající množství sledovaných molekul.
          Tento způsob vyhodnocení používá <SourceLink id="DOI_10_5194_amt_3_375_2010">analyzátor
          popsaný Chenem a kolegy</SourceLink>.
        </p>

        <h3>Jak signálu přiřadíme složení vzduchu</h3>
        <p>
          Výsledek chceme vyjádřit jako podíl molekul CO₂ mezi všemi molekulami suchého vzduchu.
          Této veličině říkáme <strong>molární zlomek</strong>. Jednotka <strong>ppm</strong>{" "}
          znamená počet na milion. Stejnou hodnotu v odborných datech vyjadřuje jednotka
          µmol/mol, mikromol na mol. Tato podoba výsledku umožňuje porovnávat složení vzduchu
          i tehdy, když měl při odběru různou teplotu nebo tlak.
        </p>
        <p>
          Pro přesný převod potřebujeme ještě vědět, které molekuly vybraná čára zachycuje.
          Atomy téhož prvku mohou mít různý počet neutronů v jádře. Takovým podobám atomu
          říkáme <strong>izotopy</strong>. Například uhlík ¹²C a ¹³C se liší hmotností,
          stejně jako kyslík ¹⁶O a ¹⁸O. Jejich kombinace vytvářejí různé izotopové podoby
          molekuly, zvané <strong>izotopology</strong>. Každá má trochu odlišné absorpční spektrum.
        </p>
        <p>
          Vybraná čára CO₂ proto může sledovat pouze nejběžnější podobu ¹⁶O¹²C¹⁶O.
          Laboratorní postup NOAA ji zkráceně označuje <strong>626</strong>, podle posledních
          číslic označení 16–12–16. Zásadní je rozlišovat podíl těchto molekul
          od podílu všech podob CO₂ dohromady. <SourceLink id="DOI_10_5194_amt_10_2669_2017">Tans
          a kolegové (2017)</SourceLink> vysvětlují, jak tuto návaznost zajistit pomocí
          referenčních směsí se známým celkovým i izotopovým složením.
        </p>
        <p>
          Referenční směs je vzduch v tlakové lahvi, kterému bylo určeno složení.
          NOAA odvozuje základní hodnoty CO₂ manometricky: oxid uhličitý ze známého vzorku
          oddělí a jeho množství stanoví měřením tlaku, objemu a teploty. Tyto hodnoty
          se pak porovnáváním přenášejí na další lahve. Společnou stupnici WMO X2019,
          používanou pro současné kalibrace, dokládají <SourceLink id="DOI_10_5194_amt_14_3015_2021">Hall
          a kolegové (2021)</SourceLink>. Zkratka WMO označuje Světovou meteorologickou organizaci,
          X2019 konkrétní verzi stupnice.
        </p>
        <p>
          Při laboratorní analýze se střídá vzorek s jednou referenční směsí.
          Odezvu vzorku vydělíme průměrem odezev reference před ním a po něm.
          Tím získáme poměr, který zachycuje rozdíl mezi plyny a zároveň průběžně
          zohledňuje pomalé změny společné odezvy přístroje:
        </p>
        <Equation tex={String.raw`r = \frac{S}{(R_1+R_2)/2}`} />
        <p>
          <InlineMath tex={String.raw`S`} /> je odezva vzorku,{" "}
          <InlineMath tex={String.raw`R_1`} /> odezva předchozí reference a{" "}
          <InlineMath tex={String.raw`R_2`} /> následující reference. Všechny tři údaje musí
          být ve stejných přístrojových jednotkách, které se při dělení vykrátí.
          Poměr <InlineMath tex={String.raw`r`} /> je proto bez jednotky.
          Referenci i vzorek měříme stejným postupem za řízené teploty a tlaku.
        </p>
        <p>
          Stejné porovnání nejprve provedeme pro soubor směsí s různým známým obsahem CO₂.
          Ke každému získanému poměru přiřadíme známý molární zlomek podoby 626.
          Body vytvoří kalibrační závislost. Pro tento analyzátor NOAA používá přímku,
          jejíž polohu a sklon určí výpočet ze všech kalibračních bodů:
        </p>
        <Equation tex={String.raw`x_{626}=c_0+c_1r`} />
        <p>
          <InlineMath tex={String.raw`x_{626}`} /> je molární zlomek ¹⁶O¹²C¹⁶O v ppm,{" "}
          <InlineMath tex={String.raw`r`} /> naměřený poměr odezev.
          Koeficient <InlineMath tex={String.raw`c_0`} /> určuje svislý posun přímky
          a <InlineMath tex={String.raw`c_1`} /> její sklon. Oba mají jednotku ppm.
          Patří konkrétní kalibraci a používají se v rozsahu změřených referenčních směsí.{" "}
          <SourceLink id="2021_NOAA_CO2_Analysis">Postup NOAA</SourceLink> popisuje běžné
          kalibrační směsi pokrývající přibližně 250 až 800 ppm celkového CO₂.
        </p>
        <p>
          Pro celkový CO₂ přidává laboratorní sestava další laserový přístroj,
          který měří dvě méně hojné izotopové podoby. Jejich molární zlomky se určí
          z vlastních kalibrací a sečtou s podílem 626. Zastoupení zbývajících vzácných
          podob se dopočítá ze zjištěného izotopového složení. Výpočet předpokládá náhodné
          rozdělení izotopů mezi molekuly a z jejich zastoupení určí, jak často se jednotlivé
          kombinace vyskytují. Výsledkem je součet všech podob CO₂.
          Rozdělení práce mezi analyzátory a tento součet doložili <SourceLink id="DOI_10_5194_amt_10_2669_2017">Tans
          a kolegové</SourceLink>. Běžné staniční přístroje mohou převod na celkový CO₂
          opírat o podobnost izotopového složení vzduchu a kalibračních směsí.
        </p>
        <p>
          Opakovaná měření téhož vzorku následně zprůměrujeme.
          Součet výsledků vydělíme jejich počtem:
        </p>
        <Equation tex={String.raw`\bar{x}=\frac{x_1+x_2+\cdots+x_N}{N}`} />
        <p>
          Značky <InlineMath tex={String.raw`x_1, x_2, \ldots, x_N`} /> představují jednotlivé
          výsledky v ppm, <InlineMath tex={String.raw`N`} /> počet měření a{" "}
          <InlineMath tex={String.raw`\bar{x}`} /> jejich průměr, rovněž v ppm.
          Průměrujeme vždy tutéž veličinu pro stejný vzorek. U podoby 626 zůstává výsledkem
          podíl 626, u celkového CO₂ podíl všech jeho molekul.
        </p>

        <h3>Co měření přináší klimatologii</h3>
        <p>
          Na pozorovací stanici vytváří opakované měření nasávaného vzduchu časový záznam.
          Ke každému údaji patří doba a místo odběru. Z těchto záznamů lze sledovat denní
          a sezónní proměnlivost i dlouhodobý růst CO₂. <SourceLink id="WEB_NOAA_Carbon_Cycle_Greenhouse_Gases_NOAA_Global_Monito_66691a03">NOAA
          popisuje měření na Mauna Loa</SourceLink> včetně přechodu na CRDS v dubnu 2019,
          výběru vzduchu málo ovlivněného místními zdroji a veřejných hodinových až měsíčních dat.
          Na samotné <Link href="/pozorovani/atmosfericka-koncentrace-co2">pozorování změn
          atmosférického CO₂</Link> navazuje samostatný článek.
        </p>
        <p>
          Při měření z letadla vzniká záznam podél letové dráhy a v různých výškách.
          Kampaň BARCA v květnu 2009 využila CRDS ke sledování CO₂ a metanu nad Amazonií.{" "}
          <SourceLink id="DOI_10_5194_amt_3_375_2010">Chen a kolegové</SourceLink> zveřejnili
          výsledky i souběžné porovnání přístrojů. Taková měření zachycují prostorové rozdíly
          ve složení atmosféry. Pro určení zdrojů a pohlcování plynů se potom spojují
          s údaji o proudění vzduchu a s výpočtem jeho transportu.
        </p>

        <h3>Vývoj a další provedení</h3>
        <p>
          <SourceLink id="1862_Tyndall">John Tyndall v roce 1861</SourceLink> měřil průchod
          tepelného záření trubicí naplněnou různými plyny a ukázal velké rozdíly v jejich
          absorpci. O století později už <SourceLink id="DOI_10_1111_j_2153_3490_1960_tb01300_x">Keelingova
          práce z roku 1960</SourceLink> popisovala souvislé analyzátorové záznamy CO₂
          a jejich vazbu na směsi určené manometricky. Laserové dutiny následně umožnily
          využít úzké absorpční čáry a dlouhou optickou dráhu v kompaktním přístroji,
          jak dokládá uvedené letecké měření.
        </p>
        <p>
          Klasická <strong>nedisperzní infračervená spektroskopie</strong>, zkráceně NDIR,
          používá zdroj se širším rozsahem vlnových délek a vybrané pásmo odděluje filtrem.
          Detektor měří, kolik záření po průchodu plynem zůstalo. Laserová přímá absorpce
          obdobně porovnává intenzity, ale využívá úzký a laditelný svazek.
          CRDS místo toho vyhodnocuje dobu slábnutí světla v dutině.{" "}
          <SourceLink id="WEB_NIST_Greenhouse_Gas_Measurement">NIST</SourceLink> porovnává
          tato optická měření s dalšími způsoby sledování plynů. U{" "}
          <Link href="/metody/plynova-chromatografie">plynové chromatografie</Link> se
          složky směsi nejprve fyzicky oddělí. Spektroskopie je rozlišuje podle absorpčního spektra.
        </p>

        <h2>Nejistoty a ověření výsledků</h2>
        <p>
          Výsledek ovlivňuje stav vzorku, vodní pára, teplota a tlak komory i přiřazení
          referenčních hodnot. U vybrané čáry CO₂ záleží také na izotopovém složení.
          Při souběžném leteckém měření <SourceLink id="DOI_10_5194_amt_3_375_2010">Chena
          a kolegů</SourceLink> činil průměrný rozdíl mezi CRDS a NDIR 0,22 ppm.
          Po sjednocení kalibrace klesl na 0,05 ppm. Porovnání tak ukázalo jak dobrou
          návaznost dvou provedení, tak význam společných referencí.
        </p>
        <details className="article-details">
          <summary>Podrobnosti o nejistotách a ověření</summary>
          <p>
            U porovnání BARCA jde o průměr rozdílů za lety s dostupnými souběžnými údaji,
            po vyřazení zkušebního letu. Rozptyl průměrných rozdílů mezi lety autoři vyjádřili
            směrodatnou odchylkou 0,09 ppm. Oba přístroje měly vlastní analýzu a původně
            různé kalibrační lahve, hodnoty obou souborů však navazovaly na stupnici WMO.
            Při následném sjednocení byly hodnoty lahví pro NDIR upraveny pomocí CRDS
            a korekcí složení směsí. Zlepšená shoda tedy ověřuje návaznost měření,
            nikoli dva zcela nezávislé způsoby určení absolutní hodnoty.
            Celkovou nejistotu porovnání autoři odhadli na 0,14 ppm.
          </p>
          <p>
            Vlhkost mění podíl CO₂ ve směsi i tvar jeho absorpční čáry.{" "}
            <SourceLink id="DOI_10_5194_amt_6_837_2013">Rella a kolegové (2013)</SourceLink>{" "}
            ověřovali postup, při kterém přístroj současně měří vodní páru a její vliv
            se opravuje výpočtem. Koeficienty určovali zvlhčováním známých směsí
            a ověřovali porovnáním s měřením vysušeného vzduchu. Použitelnost korekce
            závisí na konkrétním přístroji a rozsahu vlhkosti. Náš laboratorní příklad používá sušení.
          </p>
          <p>
            Dlouhodobou kontrolu zajišťují kontrolní lahve, které se vyhodnocují jako neznámé
            a nepoužijí se k určení právě kontrolované kalibrační křivky.{" "}
            <SourceLink id="DOI_10_5194_amt_8_3867_2015">Yver Kwok a kolegové</SourceLink>{" "}
            na 47 laboratorně a 15 terénně testovaných analyzátorech doložili význam
            kontroly jednotlivých přístrojů. Opakování téže lahve ukazuje stabilitu a rozptyl
            výsledků, společná chyba přiřazené referenční hodnoty se v něm však neprojeví.
            Rozlišení přístroje ani rozptyl krátkého měření proto samy neurčují celkovou nejistotu.
          </p>
        </details>

        <h2>Příklad výpočtu z osmi měření</h2>
        <p>
          <SourceLink id="2021_NOAA_CO2_Analysis">Tabulka A1 metodiky NOAA</SourceLink> zachycuje
          osm opakovaných rozborů jednoho vzorku z 24. ledna 2017.
          Počítá molární zlomek nejběžnější podoby CO₂, tedy ¹⁶O¹²C¹⁶O.
          Začínáme zveřejněnými odezvami analyzátoru, zpracování původního světelného signálu
          už provedla laboratoř. První vzorek obklopují tato dvě měření reference:
        </p>
        <figure className="article-figure">
          <div className="article-figure__scroll" tabIndex={0} role="region" aria-label="První tři odezvy z tabulky NOAA">
            <table className="article-data-table">
              <caption>Odezvy Sig v tabulce A1. Všechny jsou ve společných přístrojových jednotkách.</caption>
              <thead><tr><th>Čas v záznamu</th><th>Měřený plyn</th><th>Odezva</th></tr></thead>
              <tbody>
                <tr><td>11:35:23</td><td>Reference před vzorkem</td><td>399,7326</td></tr>
                <tr><td>11:38:27</td><td>Vzorek</td><td>390,6285</td></tr>
                <tr><td>11:41:32</td><td>Reference po vzorku</td><td>399,7559</td></tr>
              </tbody>
            </table>
          </div>
        </figure>
        <p>
          Průměr obou referencí je 399,74425. Vydělíme jím odezvu vzorku:
        </p>
        <Equation tex={String.raw`r=\frac{390{,}6285}{399{,}74425}\doteq 0{,}977196045`} />
        <p>
          Poměr souhlasí s tabulkou. Pro tuto kalibraci jsou zveřejněny koeficienty{" "}
          <InlineMath tex={String.raw`c_0=0{,}18436648\,\mathrm{ppm}`} /> a{" "}
          <InlineMath tex={String.raw`c_1=395{,}56334783\,\mathrm{ppm}`} />.
          Dosadíme je do vysvětleného vztahu:
        </p>
        <Equation tex={[
          String.raw`x_{626}=\bigl(0{,}18436648`,
          String.raw`+395{,}56334783\cdot0{,}977196045\bigr)\,\mathrm{ppm}`,
          String.raw`\doteq386{,}727\,\mathrm{ppm}`,
        ]} />
        <p>
          Dostáváme <strong>386,727 ppm podoby ¹⁶O¹²C¹⁶O</strong>, shodně se zveřejněným
          výsledkem. Stejnou přímku použijeme na všech osm publikovaných poměrů.
          Jejich převedené hodnoty sečteme a vydělíme osmi. Průměr je{" "}
          <strong>386,728 ppm</strong> a výběrová směrodatná odchylka 0,003 ppm.
          Ta vyjadřuje rozptyl opakovaných rozborů téže lahve. K celkovému CO₂ by bylo
          potřeba připočíst ostatní izotopové podoby, jak bylo vysvětleno výše.
        </p>
        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" tabIndex={0} role="region" aria-label="Graf osmi měření CO₂, na malé obrazovce posuvný">
            <Image src={`${dataPath}/repeat-measurements.png`} alt="Osm výsledků pro izotopovou podobu 626 mezi 386,725 a 386,733 ppm a vodorovná čára jejich průměru 386,728 ppm." width={1800} height={900} className="article-figure__media" unoptimized />
          </div>
          <figcaption>
            Vodorovně je pořadí opakovaných měření, svisle molární zlomek ¹⁶O¹²C¹⁶O v ppm.
            Modré body vznikly dosazením zveřejněných poměrů do kalibrační přímky,
            oranžová čára označuje jejich průměr. Graf ukazuje rozbory jednoho vzorku
            během necelé hodiny. Nejde o změny CO₂ v atmosféře. Vlastní výpočet z tabulky NOAA.
          </figcaption>
        </figure>
        <details className="article-details">
          <summary>Data a postup pro zopakování výpočtu</summary>
          <p>
            Podkladem je verze 2.1 metodiky účinná od 15. dubna 2021, tabulka A1 na straně 9.
            Přepis obsahuje všech 16 zveřejněných řádků. U prvních sedmi vzorků lze poměr
            ověřit z obou sousedních referencí. Reference následující po osmém vzorku v tabulce
            chybí, proto jeho poměr přebíráme a chybějící odezvu nedoplňujeme.
            Pro převod všech osmi měření používáme zveřejněné poměry a koeficienty.
          </p>
          <p>
            Příklad má datum měření 2017. Tabulka výslovně neuvádí verzi stupnice použité
            pro tyto hodnoty, takže jim nepřiřazujeme označení současné X2019.
            Soubory byly převzaty 19. října 2026. Data NOAA jsou veřejně použitelná
            s uvedením původu podle <SourceLink id="WEB_NOAA_GML_Terms">podmínek NOAA GML</SourceLink>.
          </p>
          <ul>
            <li><a href={`${dataPath}/noaa-table-a1.csv`}>Úplný přepis tabulky A1 v CSV</a></li>
            <li><a href={`${dataPath}/example.json`}>Původ, význam sloupců, koeficienty a kontrolní výsledky</a></li>
            <li><a href={`${dataPath}/reproduce.py`}>Skript pro zopakování výpočtu</a></li>
            <li><a href={`${dataPath}/plot.py`}>Skript pro vytvoření grafu</a></li>
          </ul>
          <p>
            Uložte první tři soubory do jedné složky a spusťte <code>python reproduce.py</code>.
            Výpočet používá pouze standardní knihovnu Pythonu 3.
            Ověří přepis, sedm úplných poměrů, osm kalibrovaných výsledků, průměr i směrodatnou odchylku.
            Graf vytvoří <code>python plot.py</code> s knihovnou Matplotlib.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Absorpční spektroskopie umožňuje sledovat složení vzduchu pomocí světla.
            Vybrané absorpční čáry rozlišují plyny a porovnání se známými směsmi dává
            měřením společnou stupnici. Souvislé záznamy CO₂ a dalších plynů zachycují
            jejich proměny v čase i rozdíly mezi místy. Jsou tak přímým podkladem
            pro poznání změn atmosféry a pro další výzkum koloběhu uhlíku.
          </p>
        </div>
      </div>
    </article>
  );
}
