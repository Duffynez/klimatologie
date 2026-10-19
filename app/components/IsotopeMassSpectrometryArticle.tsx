import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

const dataPath = "/data/methods/isotope-mass-spectrometry";

export function IsotopeMassSpectrometryArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Izotopy</dt><dd>Atomy stejného prvku s různým počtem neutronů v jádře. Liší se hmotností.</dd></div>
          <div><dt>Iont</dt><dd>Elektricky nabitý atom nebo molekula. Jeho pohyb lze řídit elektrickým a magnetickým polem.</dd></div>
          <div><dt>IRMS</dt><dd>Hmotnostní spektrometrie izotopových poměrů. Porovnává zastoupení izotopů ve vzorku a v referenci.</dd></div>
          <div><dt style={{ textTransform: "none" }}>δ¹⁸O</dt><dd>Relativní rozdíl poměru ¹⁸O/¹⁶O vůči referenci, obvykle vyjádřený v promile.</dd></div>
        </dl>
        <p className="article-glossary__note">Izotopové složení vody uchovává informace o jejím vypařování, kondenzaci a pohybu v prostředí.</p>
      </aside>

      <div className="article-prose">
        <h2>Jak změříme izotopové složení vody</h2>
        <p className="article-prose__intro">
          Hmotnostní spektrometrie je metoda, která rozlišuje elektricky nabité částice podle
          poměru jejich hmotnosti a náboje. Umožňuje určit složení vzorku a zastoupení izotopů,
          tedy různě těžkých atomů stejného prvku. Její provedení zaměřené na přesné porovnávání
          izotopových poměrů se označuje zkratkou <strong>IRMS</strong> z anglického
          isotope ratio mass spectrometry.{" "}
          <SourceLink id="2025_FIRMS_IRMS_Guide">(FIRMS, kapitola 6)</SourceLink>
        </p>
        <p>
          V klimatologii se takto zkoumá voda ze srážek a ledových jader i uhlík z plynů,
          rostlin nebo sedimentů. Zde projdeme měření kyslíkových izotopů ve vodě.
          Přípravu vzorku popisuje <SourceLink id="DOI_10_3133_tm10C2">metodika americké
          geologické služby USGS</SourceLink>. Princip současného přístroje s několika
          detektory vychází z <SourceLink id="2025_FIRMS_IRMS_Guide">příručky IRMS z roku 2025</SourceLink>.
          Nejprve získáme údaj o složení vody, potom vysvětlíme jeho klimatologické využití.
        </p>

        <h3>V čem se liší lehký a těžký kyslík</h3>
        <p>
          Atomové jádro tvoří kladně nabité protony a elektricky neutrální neutrony.
          Každý atom kyslíku má osm protonů. Počet neutronů se však může lišit.
          Nejrozšířenější kyslík ¹⁶O má osm neutronů, kyslík ¹⁸O jich má deset.
          Číslo u značky prvku udává součet protonů a neutronů. Oba jsou stabilní izotopy,
          které se samovolně radioaktivně nerozpadají. Voda obsahuje molekuly s oběma podobami
          kyslíku a také malé množství molekul s izotopem ¹⁷O.{" "}
          <SourceLink id="2019_OpenStax_Chemistry_2e">(Chemistry 2e, oddíl 2.3)</SourceLink>
        </p>
        <p>
          Molekula vody s ¹⁸O má větší hmotnost než molekula s ¹⁶O. Tato odlišnost ovlivňuje
          jejich chování při změnách skupenství. Při vypařování přecházejí do páry snáze lehčí molekuly,
          při kondenzaci se molekuly s těžším kyslíkem přednostně dostávají do kapek nebo ledu. Rozdělování izotopů
          mezi látky či skupenství nazýváme <strong>izotopová frakcionace</strong>.
          Jejím důsledkem jsou měřitelné rozdíly ve složení oceánské vody, páry a srážek.
          Jejich fyzikální vznik a pozorované rozložení rozebírá původní práce{" "}
          <SourceLink id="DOI_10_3402_tellusa_v16i4_8993">Williho Dansgaarda (1964)</SourceLink>.
        </p>
        <p>
          Měřenou veličinou bude <strong>poměr počtu atomů ¹⁸O k počtu atomů ¹⁶O</strong>,
          označený <InlineMath tex={String.raw`R`} />. Tento poměr nemá jednotku.
          Porovnáváním stejných izotopů v různých vodách zjistíme i malé rozdíly ve složení.
          Přístroj k tomu potřebuje oddělit částice obsahující lehký a těžký kyslík.{" "}
          <SourceLink id="2025_FIRMS_IRMS_Guide">(FIRMS, oddíl 3.2)</SourceLink>
        </p>

        <h3>Jak připravíme vodu k měření</h3>
        <p>
          Odebranou vodu uchováváme v těsně uzavřené nádobce. U srážek k ní patří místo a období
          odběru, u roztátého vzorku ledového jádra také hloubka, ze které pochází.
          Pro popisovaný rozbor USGS obvykle odměřuje 2 ml vody. Voda se uzavře do skleněné
          nádoby s malým množstvím oxidu uhličitého a nádoba se udržuje při stálé teplotě.{" "}
          <SourceLink id="DOI_10_3133_tm10C2">(USGS, postup analýzy)</SourceLink>
        </p>
        <p>
          Oxid uhličitý se rozpouští a reaguje s vodou. Při těchto reakcích se mezi CO₂ a vodou
          vyměňují atomy kyslíku. Po dostatečně dlouhé době vznikne <strong>izotopová rovnováha</strong>:
          výměna pokračuje oběma směry, ale poměrné zastoupení izotopů v každé látce už zůstává stálé.
          CO₂ přitom získá složení závislé na izotopovém složení vody a na teplotě.
          <SourceLink id="DOI_10_3133_tm10C2"> Postup USGS</SourceLink> uvádí pro běžné vzorky
          sedmihodinové ustavování rovnováhy za protřepávání.
        </p>
        <p>
          Poměr ¹⁸O/¹⁶O v CO₂ se od poměru ve vodě liší, protože i při této výměně působí
          frakcionace. Převod zjistíme pomocí vod se známým složením, které připravíme stejně
          jako vzorky. Z nádoby pak odebereme CO₂, odstraníme doprovodnou vodní páru
          a plyn přivedeme do spektrometru.{" "}
          <SourceLink id="DOI_10_3133_tm10C2">(USGS, postup analýzy)</SourceLink>
        </p>
        <figure className="article-figure article-figure--instrument">
          <Image src="/media/isotope-mass-spectrometry/usgs-irms-laboratory.jpg" alt="Laboratoř USGS v Restonu s hmotnostním spektrometrem Delta V Plus, přístroji pro přípravu vzorků, plynovými lahvemi a počítači." width={1280} height={960} className="article-figure__media" unoptimized />
          <figcaption>
            Laboratoř stabilních izotopů USGS v Restonu ve Virginii. Sestava zahrnuje
            spektrometr Delta V Plus, dva elementární analyzátory a zařízení GasBench
            pro přípravu a přívod vzorků. Lahve u zadní stěny zásobují přístroje plyny.
            Snímek ukazuje současnější vybavení laboratoře, jejíž metodika je podkladem výkladu.
            Fotografie USGS, <SourceLink id="2023_USGS_IRMS_Photo">zveřejněna 30. ledna 2023,
            Public Domain</SourceLink>. Datum pořízení a jméno fotografa nejsou uvedeny.
          </figcaption>
        </figure>

        <h3>Proč se v magnetickém poli oddělí různé hmotnosti</h3>
        <p>
          Molekuly CO₂ jsou původně elektricky neutrální. V iontovém zdroji je zasahuje proud
          elektronů uvolňovaných z rozžhaveného vlákna. Elektron nese záporný náboj.
          Když náraz jeden elektron z neutrální molekuly vyrazí, zůstane v ní převaha
          kladného náboje a vznikne <strong>iont CO₂⁺</strong>. Elektrické pole tyto ionty
          urychlí a soustava elektrod z nich vytvoří úzký svazek. Vnitřek přístroje se čerpá
          na vysoké vakuum, aby ionty mohly prolétnout bez častých srážek s okolním plynem.{" "}
          <SourceLink id="2025_FIRMS_IRMS_Guide">(FIRMS, oddíl 6.1)</SourceLink>
        </p>
        <p>
          Svazek vstoupí do magnetického pole, které zakřiví jeho dráhu. U iontů se stejným
          nábojem urychlených stejným napětím má dráha těžšího iontu větší poloměr.
          Různě těžké ionty se proto rozestoupí a dopadnou na různá místa.
          Tím vzniká rozlišení podle <InlineMath tex={String.raw`m/z`} />:{" "}
          <InlineMath tex={String.raw`m`} /> je hmotnost vyjádřená v atomových hmotnostních
          jednotkách a <InlineMath tex={String.raw`z`} /> počet elementárních nábojů iontu.
          Atomová hmotnostní jednotka přibližně odpovídá hmotnosti jednoho protonu nebo neutronu.
          Zde sledujeme kladné ionty s jedním nábojem, takže <InlineMath tex={String.raw`z=1`} />.{" "}
          <SourceLink id="2025_FIRMS_IRMS_Guide">(FIRMS, oddíl 6.1)</SourceLink>
        </p>
        <p>
          Většina molekul CO₂ obsahuje jeden uhlík ¹²C a dva kyslíky ¹⁶O. Součet těchto
          hmotnostních čísel je 44. Nahradí-li jeden kyslík těžší ¹⁸O, dostaneme 46.
          Moderní IRMS může současně sledovat svazky s <InlineMath tex={String.raw`m/z`} /> kolem
          44, 45 a 46. Vedlejší svazek 45 přináší informaci hlavně o uhlíku ¹³C.
          Uspořádání iontového zdroje, magnetu a více detektorů popisuje{" "}
          <SourceLink id="2025_FIRMS_IRMS_Guide">příručka FIRMS</SourceLink>.
        </p>

        <h3>Jak se z proudu částic stane údaj o složení</h3>
        <p>
          Každý svazek zachytává kovový detektor zvaný <strong>Faradayův kolektor</strong>.
          Dopadající ionty na něj přenášejí náboj, a vzniká tak elektrický proud.
          Více iontů za sekundu znamená větší proud. Zesilovače převedou velmi malé proudy
          na měřitelná napětí, která elektronika zaznamená. Pro určení složení se porovnávají
          velikosti jednotlivých signálů, zejména signálu 46 vůči 44.{" "}
          <SourceLink id="2025_FIRMS_IRMS_Guide">(FIRMS, oddíl 6.1)</SourceLink>
        </p>
        <p>
          V provedení se <strong>dvojím vstupem</strong> má přístroj dva zásobníky plynu:
          jeden se vzorkem, druhý s pracovním CO₂. Ventil je opakovaně střídá, takže stejný
          zdroj iontů a stejné detektory postupně změří oba plyny za podobného tlaku.
          Odezvu vzorku tak porovnáváme s plynem měřeným jen o krátkou chvíli dříve a po něm.
          Průměr těchto porovnání popisuje, jak se vzorek liší od pracovního plynu.{" "}
          <SourceLink id="2025_FIRMS_IRMS_Guide">(FIRMS, oddíl 6.2.1)</SourceLink>
        </p>
        <p>
          Převod na poměr atomů kyslíku zahrnuje ještě složení jednotlivých svazků.
          Do svazku 46 totiž přispívají i vzácné molekuly s kyslíkem ¹⁷O a uhlíkem ¹³C.
          Výpočet jejich podíl odečítá s využitím signálů 45 a 46 a přijatého vztahu
          mezi zastoupením kyslíku ¹⁷O a ¹⁸O. Zohledňuje také rozdílné zesílení detektorů.
          Tyto korekce a měření vůči pracovnímu plynu popisují{" "}
          <SourceLink id="DOI_10_3133_tm10C2">USGS</SourceLink> a{" "}
          <SourceLink id="2025_FIRMS_IRMS_Guide">FIRMS</SourceLink>.
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" tabIndex={0} role="region" aria-label="Schéma izotopové analýzy vody, na malé obrazovce posuvné">
            <Image src="/media/isotope-mass-spectrometry/irms-principle.svg" alt="Voda předává izotopovou informaci CO₂. Vzorek a pracovní plyn střídavě vstupují do iontového zdroje, magnet rozděluje ionty a detektory zaznamenávají proudy pro výpočet izotopového složení." width={1000} height={650} className="article-figure__media" unoptimized />
          </div>
          <figcaption>
            Vlastní schéma měření. Modré šipky vedou od vody k upravenému CO₂,
            oranžová větev přivádí pracovní plyn. Ventil střídá oba plyny.
            Barevné křivky uvnitř přístroje znázorňují rozdělení iontů do tří svazků,
            detektory měří jejich elektrické proudy. Referenční vody procházejí celým
            postupem stejně jako vzorek. Schéma není v měřítku, rozestupy drah jsou zvětšené.{" "}
            <SourceLink id="DOI_10_3133_tm10C2">(USGS, postup analýzy)</SourceLink>
          </figcaption>
        </figure>

        <h3>Jak dostanou různé laboratoře společnou stupnici</h3>
        <p>
          Laboratorní pracovní plyn slouží k průběžnému porovnávání. Společnou stupnici
          výsledků zajišťují <strong>referenční vody se známým izotopovým složením</strong>.
          Laboratoř je zpracuje od ustavení rovnováhy s CO₂ až po odečet signálů stejně
          jako neznámou vodu. Kalibrace tak propojí odezvu celého postupu s vlastností
          původního kapalného vzorku.{" "}
          <SourceLink id="DOI_10_3133_tm10C2">(USGS, kalibrace a normalizace)</SourceLink>
        </p>
        <p>
          Výsledek se obvykle zapisuje jako <InlineMath tex={String.raw`\delta^{18}\mathrm{O}`} />,
          čteno „delta osmnáct O“. Vyjadřuje, o jaký podíl se poměr ¹⁸O/¹⁶O ve vzorku
          liší od referenčního poměru. Pro vodu je základem reference VSMOW,
          zkratka názvu Vienna Standard Mean Ocean Water. V promile vztah zapisujeme:
        </p>
        <Equation tex={String.raw`\delta^{18}\mathrm{O}=\left(\frac{R}{R_{\mathrm{VSMOW}}}-1\right)\cdot1000\,\text{promile}`} />
        <p>
          <InlineMath tex={String.raw`R`} /> je poměr ¹⁸O/¹⁶O ve vzorku a{" "}
          <InlineMath tex={String.raw`R_{\mathrm{VSMOW}}`} /> stejný poměr v referenci.
          Oba jsou bezrozměrné. Promile, značka ‰, znamená tisícinu.
          Nulová delta označuje shodný poměr, záporná menší zastoupení těžkého kyslíku
          vůči lehkému a kladná větší.{" "}
          <SourceLink id="2025_FIRMS_IRMS_Guide">(FIRMS, oddíl 3.3)</SourceLink>
        </p>
        <p>
          Stupnice má dva pevné body: VSMOW s δ¹⁸O = 0 ‰ a vodu SLAP s δ¹⁸O = −55,5 ‰.
          Laboratoř pomocí obou bodů určí posun i rozpětí převodu. Prakticky jde o přímku,
          která spojí odezvy dvou referenčních vod s jejich přidělenými hodnotami.
          Stejným převodem pak zpracuje vzorky. V metodice USGS se takto používají laboratorní
          vody navázané na tyto mezinárodní reference. Novější materiály VSMOW2 a SLAP2
          tutéž stupnici přenášejí do dalších měření, například do níže uvedeného{" "}
          <SourceLink id="DOI_10_1021_ac402366t">porovnání tří laboratoří</SourceLink>.{" "}
          <SourceLink id="2025_FIRMS_IRMS_Guide">(FIRMS, oddíl 4.2.4)</SourceLink>
        </p>

        <h3>Co se z izotopů dozvíme o klimatu</h3>
        <p>
          Když vzduch chladne a vodní pára z něj postupně kondenzuje, molekuly s těžším
          kyslíkem se přednostně odstraňují do srážek. Ve zbývající páře jejich podíl klesá.
          Další srážky tak mohou mít stále zápornější δ¹⁸O. Rozbor odebrané vody zachycuje
          výsledek tohoto vývoje. Spolu s místem odběru a meteorologickými údaji pomáhá
          sledovat původ vlhkosti a podmínky, za kterých vznikl déšť nebo sníh.{" "}
          <SourceLink id="DOI_10_3402_tellusa_v16i4_8993">(Dansgaard, oddíl 2)</SourceLink>
        </p>
        <p>
          <SourceLink id="DOI_10_3402_tellusa_v16i4_8993">Dansgaardova studie z roku 1964</SourceLink>{" "}
          zpracovala měření světové sítě Mezinárodní agentury pro atomovou energii
          a Světové meteorologické organizace z let 1961–1962. Ukázala souvislosti
          izotopového složení s teplotou, množstvím srážek a polohou stanice.
          K <Link href="/pozorovani/srazky-a-privalove-srazky">záznamům srážkových úhrnů</Link>{" "}
          tak přibývá informace o cestě vody atmosférou. Izotopové měření a měření množství
          srážek se navzájem doplňují.
        </p>
        <p>
          Ve sněhu, který se později změní v led, zůstává izotopový záznam minulých srážek.
          Rozbory postupných úseků <Link href="/metody/ledova-jadra-a-analyza-uzavreneho-vzduchu">ledového
          jádra</Link> vytvoří řadu hodnot podle hloubky. Určení stáří vrstev ji převede na časovou řadu.
          Vztah k tehdejší teplotě a pohybu vlhkosti je následná interpretace, kterou rozvíjí{" "}
          <Link href="/metody/izotopova-paleotermometrie">izotopová paleotermometrie</Link>.
          Hmotnostní spektrometr k ní dodává změřené izotopové složení.{" "}
          <SourceLink id="DOI_10_3402_tellusa_v16i4_8993">(Dansgaard, oddíl 2.3.1)</SourceLink>
        </p>

        <h3>Jak se metoda vyvíjela a jaká má další provedení</h3>
        <p>
          Na dřívější přístroje Alfreda Niera navázali v roce 1950{" "}
          <SourceLink id="DOI_10_1063_1_1745698">McKinney a kolegové</SourceLink>.
          Zlepšili stabilitu elektroniky a umožnili rychle střídat vzorek se srovnávacím plynem.
          Jejich přístroj vznikal přímo pro měření malých izotopových rozdílů při výzkumu
          minulých teplot. <SourceLink id="2025_FIRMS_IRMS_Guide">Pozdější automatizace</SourceLink>{" "}
          přípravy a přívodu vzorků rozšířila počet rozborů, které laboratoř zvládne v jedné sérii.
        </p>
        <p>
          Vedle dvojího vstupu se používá <strong>průtokové IRMS</strong>.
          Plyn vzniklý ze vzorku unáší helium do spektrometru. Předřazený přístroj může
          organický materiál spálit a jeho uhlík převést na CO₂, nebo může{" "}
          <Link href="/metody/plynova-chromatografie">plynová chromatografie</Link> nejprve
          oddělit složky směsi. Oddělené látky se před měřením převedou na jednoduchý
          plyn, například CO₂. Spektrometr pak určuje izotopové složení jednotlivých
          přivedených plynů. Tato uspořádání a jejich návaznost popisuje{" "}
          <SourceLink id="2025_FIRMS_IRMS_Guide">současná příručka IRMS</SourceLink>.
        </p>
        <p>
          Pro kyslíkové izotopy vody existuje také příprava, při které chemická reakce
          s fluoridem kobaltitým převede kyslík vody na plyn O₂. Přístroj potom rozlišuje
          jeho ionty kolem hmotností 32, 33 a 34. To umožňuje přesněji zkoumat i vzácný
          kyslík ¹⁷O. Právě tuto variantu použily dvě laboratoře ve studii{" "}
          <SourceLink id="DOI_10_1021_ac402366t">Bermanové a kolegů (2013)</SourceLink>,
          ze které pochází náš příklad. Výsledná veličina δ¹⁸O a její stupnice zůstávají stejné.
        </p>
        <p>
          Samotné rozlišení iontů podle hmotnosti a náboje má širší využití než zde popsané IRMS.
          Běžná hmotnostní spektrometrie může podle souboru molekulových iontů a jejich
          fragmentů, tedy částí rozpadlých molekul, určovat také přítomné látky.
          U klimatických vzorků volíme provedení podle hledané informace:
          chemické složení směsi, nebo přesný poměr vybraných izotopů. Rozdíl vymezuje také{" "}
          <SourceLink id="2025_FIRMS_IRMS_Guide">příručka FIRMS</SourceLink>.
        </p>

        <h2>Nejistoty a ověření</h2>
        <p>
          Výsledek ovlivňuje uchování a příprava vody, ustavení rovnováhy i stabilita přístroje
          a referencí. Ověřuje se opakovanými rozbory a kontrolními vodami.
          U referenční vody GISP se ve studii <SourceLink id="DOI_10_1021_ac402366t">Bermanové a kolegů</SourceLink>{" "}
          lišily výsledky dvou laboratoří IRMS o 0,10 ‰ a optické měření leželo mezi nimi.
          Všechny tři postupy používaly stejné mezinárodní reference.
          Převod izotopového záznamu na teplotu navíc závisí na původu vlhkosti a historii srážek.
        </p>
        <details className="article-details">
          <summary>Podrobnosti o nejistotách a ověření</summary>
          <p>
            Odpařování z netěsné nádobky mění složení samotného vzorku. Při přípravě CO₂
            je důležitá stálá teplota a dostatek času pro rovnováhu. Rozpuštěné soli mohou
            ovlivnit vztah mezi vodou a CO₂, proto USGS stanovuje pro slané vody odlišné
            podmínky. Tyto vlivy se týkají přípravy před vstupem do spektrometru.{" "}
            <SourceLink id="DOI_10_3133_tm10C2">(USGS, interference a omezení)</SourceLink>
          </p>
          <p>
            Zbytky předchozího plynu mohou ovlivnit další měření. Proměny odezvy se sledují
            opakovanými referencemi v průběhu série, vedle nich se měří samostatné kontrolní vody.
            <SourceLink id="DOI_10_3133_tm10C2"> USGS</SourceLink> uvádí opakované měření nejméně
            třetiny vzorků v různých dnech a pravidelné zařazování externího kontrolního vzorku.
            U popsané validace vod od −55 do +5 ‰ uvádí přesnost a shodu s referencemi ±0,07 ‰.
            Jde o údaj tohoto laboratorního postupu.
          </p>
          <p>
            V <SourceLink id="DOI_10_1021_ac402366t">porovnání z roku 2013</SourceLink> sloužily
            VSMOW2 a SLAP2 ke kalibraci, voda GISP k ověření. Laboratoře LSCE a JHU
            připravily O₂ odděleně a měřily ho přístroji IRMS. Třetí laboratoř měřila
            vodní páru optickou metodou OA-ICOS, která podobně jako CRDS využívá dlouhou
            dráhu světla v optické dutině. Má tedy odlišný měřicí princip i přípravu vzorku,
            sdílí však stupnici a její reference. Studie vedle GISP porovnává i čtyři další
            kontrolní vody, aby ověření zahrnulo různá izotopová složení.
          </p>
          <p>
            U výsledků IRMS v tabulce níže značí ± standardní chybu průměru, tedy nejistotu
            odhadu průměru z opakovaných měření. U optického výsledku autoři uvádějí mez
            přístrojové přesnosti se zahrnutím nejistoty referencí. Tyto údaje proto
            neslučujeme do jedné společné chyby. Samostatně by bylo nutné posoudit nejistotu
            klimatické interpretace. Izotopové složení srážek závisí na teplotě i na dalších
            dějích v koloběhu vody, jak dokládá <SourceLink id="DOI_10_3402_tellusa_v16i4_8993">Dansgaardova studie</SourceLink>.{" "}
            <SourceLink id="DOI_10_1021_ac402366t">(Berman a kol., tabulka 1)</SourceLink>
          </p>
        </details>

        <h2>Příklad: stejná voda ve třech laboratořích</h2>
        <p>
          Použijeme mezinárodní referenční vodu GISP.
          <SourceLink id="DOI_10_1021_ac402366t"> Tabulka 1 studie Bermanové a kolegů (2013)</SourceLink>{" "}
          uvádí její rozbory dvěma laboratořemi IRMS a jednou optickou metodou.
          Začínáme zveřejněnými průměry δ¹⁸O po kalibraci, původní elektrické signály
          tabulka neobsahuje. Spočítáme význam jednoho výsledku a rozdíly mezi laboratořemi.
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" tabIndex={0} role="region" aria-label="Porovnání výsledků GISP, na malé obrazovce posuvné">
          <table>
            <caption>GISP, výsledky na stupnici VSMOW–SLAP podle tabulky 1</caption>
            <thead><tr><th>Laboratoř a postup</th><th>Počet měření</th><th style={{ textTransform: "none" }}>δ¹⁸O (‰)</th></tr></thead>
            <tbody>
              <tr><td>LSCE, IRMS</td><td>3</td><td>−24,69 ± 0,08</td></tr>
              <tr><td>JHU, IRMS</td><td>9</td><td>−24,79 ± 0,08</td></tr>
              <tr><td>Los Gatos Research, OA-ICOS</td><td>26</td><td>−24,74 ± 0,03</td></tr>
            </tbody>
          </table>
          </div>
        </div>
        <p>
          LSCE je francouzská Laboratoire des Sciences du Climat et de l’Environnement,
          JHU je americká Johns Hopkins University. Počty v tabulce označují opakovaná měření
          s vysokou přesností, z nichž každé už zahrnuje více dílčích odečtů.
          Význam uvedených nejistot je rozepsán v předchozím rozbalovacím oddílu.{" "}
          <SourceLink id="DOI_10_1021_ac402366t">(Berman a kol., tabulka 1)</SourceLink>
        </p>
        <p>
          Pro výsledek LSCE upravíme již vysvětlenou definici delty. Přičtení jedničky
          k deltě vydělené tisícem promile vrátí poměr vůči VSMOW:
        </p>
        <Equation tex={[
          String.raw`\frac{R}{R_{\mathrm{VSMOW}}}=1+\frac{\delta^{18}\mathrm{O}}{1000\,\text{promile}}`,
          String.raw`=1+\frac{-24{,}69}{1000}=0{,}97531`,
        ]} />
        <p>
          Poměr ¹⁸O/¹⁶O této vody dosahuje <strong>97,531 % referenčního poměru</strong>.
          Je tedy o 2,469 % nižší. Procenta se zde vztahují k poměru obou izotopů,
          nikoli k podílu kyslíku nebo vody ve vzorku. Zápis v promile umožňuje tento
          rozdíl číst přímo jako −24,69 ‰.
        </p>
        <p>
          Výsledky obou laboratoří IRMS odečteme:
        </p>
        <Equation tex={[
          String.raw`[-24{,}69-(-24{,}79)]\,\text{promile}`,
          String.raw`=0{,}10\,\text{promile}`,
        ]} />
        <p>
          LSCE naměřila hodnotu o <strong>0,10 ‰ vyšší</strong> než JHU.
          Od optického výsledku −24,74 ‰ je každé měření IRMS vzdáleno o 0,05 ‰,
          jedno nahoru a druhé dolů. Porovnání tak ukazuje blízké výsledky dvou
          fyzikálně odlišných postupů u stejné vody.
        </p>
        <details className="article-details">
          <summary>Data a postup pro zopakování výpočtu</summary>
          <p>
            Přepis obsahuje tři experimentální řádky GISP a sloupec δ¹⁸O z tabulky 1.
            Nepřebírá vážený souhrn ani další izotopy. Studie byla vydána v roce 2013,
            konkrétní kalendářní data těchto rozborů tabulka neuvádí.
            Veřejný autorský rukopis v repozitáři PMC byl otevřen 19. října 2026.
          </p>
          <ul>
            <li><a href={`${dataPath}/gisp-comparison.csv`}>Přepis tří výsledků v CSV</a></li>
            <li><a href={`${dataPath}/example.json`}>Původ, význam nejistot a kontrolní výsledky</a></li>
            <li><a href={`${dataPath}/reproduce.py`}>Skript pro zopakování výpočtu</a></li>
          </ul>
          <p>
            Uložte soubory do jedné složky a spusťte <code>python reproduce.py</code>.
            Skript používá standardní knihovnu Pythonu 3. Ověří přepis tabulky,
            vypočte relativní poměr pro všechny tři výsledky a rozdíly mezi nimi.
            Zachovává různý význam nejistot a nepočítá z nich společnou přesnost přístrojů.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Izotopová hmotnostní spektrometrie zpřístupňuje malé rozdíly ve složení vody
            a dalších klimatických vzorků. Referenční materiály dávají výsledkům společnou
            stupnici, takže lze porovnávat místa, období i laboratoře. U vody tato měření
            pomáhají sledovat její cestu atmosférou a číst záznam minulých srážek v ledu.
            Poskytují tím měřitelný podklad pro výzkum koloběhu vody a rekonstrukce minulého klimatu.
          </p>
        </div>
      </div>
    </article>
  );
}
