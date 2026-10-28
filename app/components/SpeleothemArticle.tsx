import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function SpeleothemArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak se v krápníku zachová minulost</h2>
        <p className="article-prose__intro">
          Výzkum krápníků a jeskynních sedimentů využívá vrstvy uložené
          v jeskyni k poznání minulého prostředí. Určuje dobu jejich vzniku
          a zkoumá jejich složení. Z těchto údajů lze rekonstruovat proměny
          srážek, proudění vody i podmínek na povrchu.
          Hlavní postup vysvětlíme na kalcitovém stalagmitu, tedy krápníku
          rostoucím ode dna jeskyně vzhůru. Budeme sledovat vzorek Bu4
          z německé jeskyně Bunkerhöhle a jeho záznam izotopů kyslíku.{" "}
          <SourceLink id="DOI_10_5194_cp_8_1751_2012">(Fohlmeister a kol. 2012)</SourceLink>
        </p>

        <h3>Od dešťové vody k nové vrstvě</h3>
        <p>
          Materiál krápníku pochází z horniny nad jeskyní.
          Dešťová voda při průchodu půdou přijímá oxid uhličitý,
          který uvolňují kořeny a půdní organismy.
          Ve vodě vzniká slabá kyselina uhličitá. Ta umožňuje rozpouštění
          vápence a voda pak puklinami přenáší rozpuštěný vápník
          a hydrogenuhličitan. Hydrogenuhličitan je rozpuštěná částice
          obsahující vodík, uhlík a kyslík.{" "}
          <SourceLink id="WEB_NPS_Oregon_Speleothems">(NPS: vznik jeskynních útvarů)</SourceLink>
        </p>
        <p>
          Když voda vstoupí do jeskyně s nižším obsahem oxidu uhličitého
          ve vzduchu, část tohoto plynu z vody uniká.
          Změní se tím chemická rovnováha a z roztoku se může vylučovat
          pevný uhličitan vápenatý. Jeho krystalická forma se nazývá kalcit.
          Na místě dopadu kapek přibývá tenká vrstva kalcitu.
          Další kapky ji postupně překrývají, až vznikne stalagmit
          se staršími vrstvami uvnitř a mladšími na povrchu.{" "}
          <SourceLink id="WEB_NPS_Oregon_Speleothems">(NPS: ukládání kalcitu)</SourceLink>
        </p>
        <p>
          Voda přináší také kyslík, který se stává součástí nového minerálu.
          Atomy kyslíku se vyskytují v několika podobách, izotopech.
          Mají stejný počet protonů, ale odlišný počet neutronů,
          a proto i odlišnou hmotnost. Pro tento záznam je důležitý
          poměr těžšího kyslíku 18 k běžnějšímu kyslíku 16.
          Při vypařování vody a vzniku srážek se oba izotopy rozdělují
          trochu odlišně. Jejich poměr tak nese informaci o cestě vody
          atmosférou a o podmínkách, za kterých srážky vznikly.{" "}
          <SourceLink id="DOI_10_3133_ofr01257">(Révészová a kol. 2001, izotopový rozbor)</SourceLink>{" "}
          <SourceLink id="DOI_10_1038_s41467_019_11027_w">(Baker a kol. 2019, voda v jeskynním systému)</SourceLink>
        </p>
        <p>
          Do jeskyně přitéká voda, která se během průchodu půdou a puklinami
          částečně promísila. Její izotopové složení se při tvorbě kalcitu
          promítne do nové vrstvy. Kyslík se přitom mezi vodou a kalcitem
          rozděluje v poměru závislém také na teplotě.
          Krápník tedy uchovává chemický záznam přitékající vody
          a podmínek, za kterých se kalcit vytvořil. Čtení tohoto záznamu
          začíná oddělením vrstev a určením jejich stáří.{" "}
          <SourceLink id="DOI_10_1038_s41467_019_11027_w">(Baker a kol. 2019)</SourceLink>
        </p>

        <h3>Výběr krápníku a příprava vzorků</h3>
        <p>
          Pro výzkum hledáme zachovalý sled vrstev, jehož růst lze sledovat
          od starších částí k mladším. Rozříznutí podél osy růstu odkryje
          vnitřní stavbu. Vyleštěný řez umožní prohlédnout krystaly,
          rozpoznat přerušení růstu a zvolit místa odběru.
          Z osy pak odebíráme malé vzorky ve známé vzdálenosti od vrcholu.
          Tato vzdálenost propojí údaje z různých laboratorních rozborů.{" "}
          <SourceLink id="DOI_10_5194_cp_8_1751_2012">(Fohlmeister a kol. 2012, příprava a stavba vzorků)</SourceLink>
        </p>
        <p>
          Bu4 měří přibližně 20 centimetrů. Vědci jej odebrali z místa,
          kde stále kapala voda, a porovnávali ho se třemi dalšími útvary
          ze stejné jeskyně. Pro rozbor stabilních izotopů postupně
          odfrézovali prášek po 0,2 milimetru podél osy.
          Každý odebraný podíl tak představuje malý úsek růstu.
          Jeho délku v letech určí až datování.{" "}
          <SourceLink id="DOI_10_5194_cp_8_1751_2012">(Fohlmeister a kol. 2012, oddíly 2.1 a 2.2.3)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/speleothems/bunker-samples.png"
            alt="Mapa polohy Bunkerhöhle a fotografie podélných řezů jeskynními vzorky Bu1, Bu6, Bu2 a Bu4. Bu4 je vpravo dole, společné měřítko označuje pět centimetrů."
            width={1033} height={453} unoptimized />
          <figcaption>
            Řezy skutečnými vzorky ukazují vrstvenou vnitřní stavbu.
            Bu4 je vpravo dole. Mapa vlevo vyznačuje polohu jeskyně
            a šipkou převládající západní proudění nad střední Evropou.
            Převzato beze změny z obrázku 1 studie Fohlmeistera a kol. (2012),{" "}
            <SourceLink id="WEB_CC_BY_3_0">CC BY 3.0</SourceLink>.{" "}
            <SourceLink id="DOI_10_5194_cp_8_1751_2012">Původní fotografie a mapa</SourceLink>.
          </figcaption>
        </figure>

        <h3>Jak vrstvám přiřadíme stáří</h3>
        <p>
          Stáří kalcitu lze určit pomocí uranu a thoria.
          Voda přináší malé množství rozpuštěného uranu, který se zabuduje
          do nového minerálu. Thorium je za těchto podmínek mnohem méně
          rozpustné, takže čistý kalcit při vzniku obsahuje jen velmi málo
          thoria 230. To v něm potom postupně vzniká radioaktivní přeměnou
          uranu 234. Rychlost této přeměny známe z laboratorních měření.{" "}
          <SourceLink id="DOI_10_3285_eg_57_1_2_3">(Scholz a Hoffmann 2008, princip datování)</SourceLink>
        </p>
        <p>
          Z vybraných míst řezu odebereme materiál pro stanovení izotopů
          uranu a thoria. Po rozpuštění vzorku je chemicky oddělíme
          a hmotnostním spektrometrem změříme jejich poměry.
          Kalibrované přídavky uranu a thoria se známým složením
          umožňují určit množství těchto prvků ve vzorku.
          Výpočet stáří sleduje, jak se od vzniku vrstvy měnilo množství
          uranu 234 a thoria 230 vzhledem k uranu 238.
          Zahrnuje vznik i další radioaktivní přeměnu thoria.
          Thorium přinesené s drobnými částicemi horniny se odhaduje
          podle izotopu thorium 232 a ve výpočtu se opravuje.
          Výsledkem je stáří konkrétní odebrané části kalcitu.
          U vhodných vzorků tento postup umožňuje datovat i vrstvy
          staré několik set tisíc let.{" "}
          <SourceLink id="DOI_10_3285_eg_57_1_2_3">(Scholz a Hoffmann 2008, výpočet, časový dosah a počáteční thorium)</SourceLink>
        </p>
        <p>
          Datované části tvoří opěrné body podél řezu.
          Jejich propojením sestavíme vztah mezi vzdáleností od vrcholu
          a stářím, označovaný jako model stáří. Díky němu dostane časový
          údaj i každý drobný vzorek mezi datovanými místy.
          U Bunkerhöhle autoři použili postup iscam, který v mezích
          nejistoty datování porovnává také společné izotopové výkyvy
          několika krápníků. Pro mladý konec Bu4 využili navíc radiouhlík,
          jehož množství ve druhé polovině 20. století ovlivnily
          atmosférické jaderné zkoušky.{" "}
          <SourceLink id="DOI_10_5194_cp_8_1751_2012">(Fohlmeister a kol. 2012, model stáří)</SourceLink>
        </p>
        <p>
          V použitých datech je stáří vyjádřeno v kalendářních letech
          před rokem 1950, zkráceně cal BP.
          Letopočet získáme odečtením tohoto stáří od čísla 1950.
          Záporné hodnoty označují dobu po roce 1950.
          U Bu4 zveřejněný model pokrývá přibližně posledních 8 200 let.{" "}
          <SourceLink id="DOI_10_25921_s829_3m55">(NOAA NCEI: datovaný záznam Bu4)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/speleothems/record-path.svg"
            alt="Postup od srážkové vody přes růst vrstev ke dvěma rozborům: uran a thorium určují stáří, stabilní izotopy kyslíku určují složení. Spojením vznikne časový záznam porovnávaný s procesy v jeskyni."
            width={680} height={820} unoptimized />
          <figcaption>
            Vlastní schéma spojuje vznik vrstev s jejich rozborem.
            Obě laboratorní větve se setkávají díky známému místu odběru.
            Šipky znázorňují návaznost dějů a údajů.
            Podle <SourceLink id="WEB_NPS_Oregon_Speleothems">NPS</SourceLink>,{" "}
            <SourceLink id="DOI_10_3285_eg_57_1_2_3">Scholze a Hoffmanna (2008)</SourceLink>{" "}
            a <SourceLink id="DOI_10_5194_cp_8_1751_2012">Fohlmeistera a kol. (2012)</SourceLink>.
          </figcaption>
        </figure>

        <h3>Co měříme v odfrézovaném prášku</h3>
        <p>
          Pro měření kyslíku převedeme kalcit na plyn.
          Přidáním kyseliny fosforečné se ze vzorku uvolní oxid uhličitý.
          Po oddělení vodní páry vstupuje do izotopového hmotnostního
          spektrometru. Přístroj z molekul vytvoří elektricky nabité ionty
          a oddělí je podle poměru hmotnosti a náboje.
          Detektory zaznamenají jejich množství.
          Z poměrů signálů a příslušných izotopových korekcí se pak určuje
          zastoupení těžšího a lehčího kyslíku.{" "}
          <SourceLink id="DOI_10_3133_ofr01257">(Révészová a kol. 2001, laboratorní postup)</SourceLink>{" "}
          Podrobněji tento princip popisuje článek o{" "}
          <Link href="/metody/hmotnostni-a-izotopova-spektrometrie">izotopové hmotnostní spektrometrii</Link>.
        </p>
        <p>
          Společně se vzorky se zpracovávají referenční materiály
          se známým izotopovým složením. Jejich naměřené a přidělené
          hodnoty určují převod laboratorních signálů na společnou
          stupnici. Reference procházejí také přípravou plynu,
          aby se do převodu promítl celý analytický postup.
          Takto se z údajů konkrétního přístroje stane výsledek,
          který lze porovnávat s měřením jiných laboratoří.{" "}
          <SourceLink id="DOI_10_3133_ofr01257">(Révészová a kol. 2001, reference a kalibrace)</SourceLink>
        </p>
        <p>
          U Bu4 jsou výsledky uvedeny vůči stupnici VPDB, používané
          pro izotopové složení uhličitanů. Označení δ¹⁸O, čtené
          „delta osmnáct O“, vyjadřuje relativní rozdíl poměru kyslíku 18
          ke kyslíku 16 oproti této referenci.
          Rozdíl se uvádí v promile, tedy v tisícinách:{" "}
          <SourceLink id="DOI_10_5194_cp_8_1751_2012">(Fohlmeister a kol. 2012, stupnice VPDB)</SourceLink>{" "}
          <SourceLink id="DOI_10_3133_ofr01257">(Révészová a kol. 2001, význam delta)</SourceLink>
        </p>
        <Equation tex={[
          String.raw`\delta^{18}\mathrm{O}=\left(\frac{R_{\mathrm{vzorek}}}{R_{\mathrm{reference}}}-1\right)`,
          String.raw`\times1000\,\text{promile}`,
        ]} />
        <p>
          <InlineMath tex="R_{\mathrm{vzorek}}" /> je poměr počtu atomů
          kyslíku 18 a kyslíku 16 ve vzorku. <InlineMath tex="R_{\mathrm{reference}}" />{" "}
          je odpovídající poměr definující referenční stupnici.
          Oba poměry jsou bezrozměrné. Odečtení jedničky vyjádří relativní
          odchylku a násobení tisícem ji převede na promile.
          Záporná delta znamená menší poměr těžšího izotopu než u reference.
          Méně záporná hodnota tedy označuje relativně více těžšího kyslíku.
        </p>

        <h3>Od izotopové křivky k minulému prostředí</h3>
        <p>
          Každému měření nyní přiřadíme stáří jeho místa v krápníku.
          Vznikne časová řada: na vodorovné ose grafu je doba vzniku vrstvy,
          na svislé její δ¹⁸O. Pro zvýraznění delších změn lze vedle
          jednotlivých měření zobrazit klouzavý průměr.
          U Bu4 autoři použili 21 sousedních hodnot. Jejich součet vydělíme
          číslem 21 a výsledek přiřadíme prostřednímu vzorku.
          Pak okno posuneme o jeden vzorek a výpočet zopakujeme.
          Vyhlazená křivka tak ukáže společný průběh několika sousedních
          úseků růstu.{" "}
          <SourceLink id="DOI_10_5194_cp_8_1751_2012">(Fohlmeister a kol. 2012, obrázek 4c)</SourceLink>
        </p>
        <p>
          Klimatický význam křivky odvozujeme ze sledování dnešního
          jeskynního systému. Měříme srážky a jejich izotopové složení,
          odebíráme vodu kapající ze stropu, tedy skapovou vodu,
          a sledujeme nově vznikající kalcit.
          Tím propojujeme jednotlivé kroky mezi počasím na povrchu
          a minerálem v jeskyni. Mezinárodní porovnání takových měření
          ukazuje, že zvlášť důležité je, která část srážek skutečně
          doplňuje vodu v hornině.{" "}
          <SourceLink id="DOI_10_1038_s41467_019_11027_w">(Baker a kol. 2019)</SourceLink>
        </p>
        <p>
          V okolí Bunkerhöhle se v teplé části roku značná část vody
          vrací do ovzduší vypařováním a přes vegetaci.
          Do jeskyně proto přispívají především zimní srážky.
          Ty zde mají nižší δ¹⁸O než letní srážky.
          Větší podíl zimní vody tak snižuje δ¹⁸O vody přitékající
          ke krápníku. Tento vztah pomáhá vysvětlit,
          proč je zdejší záznam zvlášť citlivý na zimní podmínky.{" "}
          <SourceLink id="DOI_10_5194_cp_8_1751_2012">(Fohlmeister a kol. 2012, oddíl 4.3)</SourceLink>
        </p>
        <p>
          V teplejších zimách v této oblasti zpravidla spadne více srážek,
          a zvětší se tak příspěvek zimní vody. Současně při vyšší
          teplotě vzniká z vody stejného složení kalcit s nižším δ¹⁸O.
          Oba vlivy tedy působí stejným směrem.
          U srážek samotných se však vyšší teplota vzduchu pojí
          s vyšším δ¹⁸O. Tento účinek působí opačně.
          Podle použitého výkladu v Bunkerhöhle převáží
          vliv podílu zimní vody a teploty při tvorbě kalcitu.{" "}
          <SourceLink id="DOI_10_5194_cp_8_1751_2012">(Fohlmeister a kol. 2012, souběh teploty a srážek)</SourceLink>
        </p>
        <p>
          Autoři proto nižší δ¹⁸O kalcitu vykládají jako teplejší a vlhčí
          zimní podmínky, vyšší jako chladnější a sušší.
          Výsledkem je především rekonstrukce směru a načasování změn
          zimního klimatu. Takový záznam doplňuje přímá pozorování{" "}
          <Link href="/pozorovani/srazky-a-privalove-srazky">srážek</Link>{" "}
          o období před soustavným přístrojovým měřením.{" "}
          <SourceLink id="DOI_10_5194_cp_8_1751_2012">(Fohlmeister a kol. 2012, interpretace záznamu)</SourceLink>
        </p>

        <h3>Další ukazatele a vývoj metody</h3>
        <p>
          Ve stejných vrstvách lze sledovat také izotopy uhlíku
          nebo poměr hořčíku a vápníku, zkráceně Mg/Ca.
          Uhlík souvisí mimo jiné s půdou a vegetací nad jeskyní.
          Mg/Ca v Bunkerhöhle pomáhá rozpoznávat změny průsaku vody.
          Když se při menším průsaku část kalcitu vysráží už cestou
          ke stalagmitu, ubude z vody přednostně vápník.
          Zbývající voda pak přináší relativně více hořčíku.
          Tyto doprovodné rozbory umožňují posuzovat výklad kyslíkové
          křivky spolu s dalšími vlastnostmi téhož archivu.{" "}
          <SourceLink id="DOI_10_5194_cp_8_1751_2012">(Fohlmeister a kol. 2012, uhlík a Mg/Ca)</SourceLink>
        </p>
        <p>
          Jeskyně uchovávají i usazeniny přinesené proudící vodou.
          Při zaplavení může na krápníku zůstat vrstvička jemného bahna,
          kterou pozdější růst kalcitu překryje.
          Její poloha v datovaném řezu umožní určit dobu povodně.
          Denniston a spoluautoři tímto způsobem zkoumali četnost
          zaplavování jeskyně KNI-51 v severozápadní Austrálii.
          Zde čteme záznam přinesených částic a jednotlivých událostí,
          zatímco izotopový rozbor sleduje chemické složení vzniklého kalcitu.{" "}
          <SourceLink id="DOI_10_1073_pnas_1422270112">(Denniston a kol. 2015)</SourceLink>{" "}
          Práci s posloupností usazených vrstev dále vysvětluje{" "}
          <Link href="/metody/sedimentarni-jadra-a-stratigrafie">článek o sedimentárních jádrech a stratigrafii</Link>.
        </p>
        <p>
          Klimatické využití krápníků se rozvíjelo spojením izotopového
          rozboru s datováním. Rané práce z 60. let otevřely možnost
          přiřazovat změnám složení konkrétní dobu vzniku.
          Harmon a spoluautoři v roce 1975 popsali použitelné uranové
          datování a jeho aplikace na krápnících ze Severní Ameriky.
          Tehdejší postup měřil záření při radioaktivních přeměnách.
          Pozdější hmotnostní spektrometrie umožnila přesnější rozbory
          menšího množství materiálu.{" "}
          <SourceLink id="1975_Harmon_Speleothem_Dating">(Harmon a kol. 1975, původní postup)</SourceLink>{" "}
          <SourceLink id="DOI_10_3285_eg_57_1_2_3">(Scholz a Hoffmann 2008, vývoj datování)</SourceLink>
        </p>
        <p>
          Dnes projekt SISAL spojuje záznamy z mnoha jeskyní do společné
          databáze. Verze SISALv3 obsahuje vedle stabilních izotopů také
          stopové prvky a údaje o vzorcích a datování.
          Umožňuje porovnávat proměny vodního oběhu mezi oblastmi
          a zkoumat, nakolik je zachycují klimatické modely.{" "}
          <SourceLink id="DOI_10_5194_essd_16_1933_2024">(Kaushalová a kol. 2024, SISALv3)</SourceLink>{" "}
          Obdobnou vazbu mezi růstem minerálního archivu a složením vody
          najdeme také u <Link href="/metody/koralova-sclerochronologie">korálových koster</Link>.
        </p>

        <h2>Nejistoty a kontrola výsledku</h2>
        <p>
          Výsledek ovlivňuje stáří vrstev, zachování kalcitu i místní cesta
          vody od srážek ke krápníku. Samotné δ¹⁸O proto neurčuje jednoznačně
          teplotu ani množství srážek. Opora metody spočívá také v přímém
          porovnání dešťové a skapové vody. Baker a spoluautoři nalezli
          u 163 skapových míst ve 39 jeskyních silný souběh jejich
          izotopového složení. Rozdíly mezi oblastmi však ukazují,
          že klimatický význam je potřeba určovat pro dané místo.{" "}
          <SourceLink id="DOI_10_1038_s41467_019_11027_w">(Baker a kol. 2019)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Podrobnosti k datování, měření a ověření</summary>
          <p>
            Uranové datování předpokládá, že po vzniku kalcitu zůstaly
            uran a thorium ve vzorku. Přeměna minerálu nebo dodatečný přísun
            těchto prvků může stáří změnit. Důležitý je také odhad
            počátečního thoria v příměsích. U krápníků z Bunkerhöhle
            uvádí studie pro většinu uranových dat nejistoty přibližně
            100 až 300 let na úrovni 2σ, tedy dvojnásobku směrodatné
            nejistoty. Jde o konkrétní soubor s nízkým obsahem uranu,
            nikoli obecnou přesnost metody.{" "}
            <SourceLink id="DOI_10_3285_eg_57_1_2_3">(předpoklady datování)</SourceLink>{" "}
            <SourceLink id="DOI_10_5194_cp_8_1751_2012">(datování Bunkerhöhle)</SourceLink>
          </p>
          <p>
            Rozestup vzorků 0,2 mm vyjadřuje prostorové vzorkování.
            Délka zachyceného období závisí na rychlosti růstu
            a není v celém krápníku stejná. Také průměr 21 hodnot
            vyhlazuje v různých částech různě dlouhé období.
            Přerušení růstu znamená chybějící čas, který je nutné
            v modelu stáří zohlednit. Vyhlazení zpřehlední křivku,
            ale neodstraní chybu datování.{" "}
            <SourceLink id="DOI_10_5194_cp_8_1751_2012">(stavba vzorků a časový model)</SourceLink>
          </p>
          <p>
            Pro laboratorní měření δ¹⁸O studie uvádí preciznost
            0,08 ‰ na úrovni 1σ. Tento údaj popisuje rozptyl analýzy,
            nikoli nejistotu rekonstruovaného klimatu.
            Stabilitu analytického postupu obecně sledují opakovaná
            měření referencí a vzorků. Provozní dokumentace USGS ukazuje,
            jak se podle jejich výsledků kontroluje příprava plynu
            a převod na referenční stupnici. Jde o doložení principu
            laboratorní kontroly, nikoli záznam jednotlivých kontrol
            při analýze Bu4.{" "}
            <SourceLink id="DOI_10_5194_cp_8_1751_2012">(preciznost měření Bu4)</SourceLink>{" "}
            <SourceLink id="DOI_10_3133_ofr01257">(laboratorní kontrola USGS)</SourceLink>
          </p>
          <p>
            Globální porovnání dešťové a skapové vody dalo pořadovou
            korelaci 0,90, která vyjadřuje silnou podobnost pořadí
            naměřených hodnot mezi místy. Přímá měření obou vod jsou
            odlišná pozorování. Jejich souběh ověřuje přenos izotopového
            signálu, nikoli přesnost dávné teploty.
            Do srovnání vstoupily alespoň roční, časově se překrývající
            řady. Doba zdržení vody v hornině však nebyla pro všechna
            místa známá. Průsak, vypařování a sezónní doplňování vody
            vysvětlují část rozdílů.{" "}
            <SourceLink id="DOI_10_1038_s41467_019_11027_w">(Baker a kol. 2019, výsledek a výběr dat)</SourceLink>
          </p>
          <p>
            Shoda několika krápníků z Bunkerhöhle není zcela nezávislou
            kontrolou, protože jejich kyslíkové křivky pomáhaly sladit
            modely stáří. Sdílejí také prostředí stejné jeskyně.
            Doprovodné Mg/Ca a uhlíkové izotopy poskytují další
            informace, ale některé jeskynní procesy ovlivňují více
            ukazatelů současně. V článku proto nepřevádíme samotnou
            kyslíkovou křivku na stupně Celsia nebo milimetry srážek.{" "}
            <SourceLink id="DOI_10_5194_cp_8_1751_2012">(společné datování a interpretace ukazatelů)</SourceLink>
          </p>
        </details>

        <h2>Skutečný příklad: 21 měření vzorku Bu4</h2>
        <p>
          Použijeme veřejný soubor NOAA NCEI pro Bu4.
          Začínáme již kalibrovanými hodnotami δ¹⁸O a zveřejněným
          modelem stáří. Zopakujeme vyhlazení 21 sousedních měření,
          tedy jeden krok tvorby časové křivky.
          Z 1 008 vzorků vybereme úplné okno, jehož prostřední vzorek
          má stáří nejbližší 500 cal BP.{" "}
          <SourceLink id="DOI_10_25921_s829_3m55">(NOAA NCEI, původní data)</SourceLink>{" "}
          <SourceLink id="DOI_10_5194_cp_8_1751_2012">(délka vyhlazení podle obrázku 4c)</SourceLink>
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" aria-label="Údaje vybraného úseku Bu4" tabIndex={0}>
          <table>
            <thead><tr><th scope="col">Údaj vybraného úseku</th><th scope="col">Hodnota</th></tr></thead>
            <tbody>
              <tr><th scope="row">Počet měření</th><td>21</td></tr>
              <tr><th scope="row">Vzdálenost od vrcholu</th><td>5,6 až 9,6 mm</td></tr>
              <tr><th scope="row">Rozsah stáří podle archivu</th><td>351,0 až 642,7 cal BP</td></tr>
              <tr><th scope="row">Stáří prostředního vzorku</th><td>496,9 cal BP</td></tr>
              <tr><th scope="row">Součet hodnot δ¹⁸O</th><td>−105,97 ‰</td></tr>
            </tbody>
          </table>
          </div>
        </div>
        <p>
          Sečtené hodnoty vydělíme jejich počtem:
        </p>
        <Equation tex={[
          String.raw`\overline{\delta^{18}\mathrm{O}}=\frac{-105{,}97}{21}\,\text{promile}`,
          String.raw`\approx-5{,}05\,\text{promile}`,
        ]} />
        <p>
          Pruh nad symbolem označuje průměr.
          Výsledných −5,05 ‰ na stupnici VPDB přiřadíme stáří
          prostředního vzorku, tedy 496,9 cal BP, přibližně roku 1453.
          Samotný prostřední vzorek má hodnotu −4,95 ‰.
          Průměr ale zahrnuje i jeho okolí, proto představuje
          delší úsek růstu. V tomto místě pokrývá okno přibližně 292 let.
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/speleothems/bu4-record.svg"
            alt="Izotopy kyslíku v mladší části Bu4. Šedá křivka ukazuje jednotlivá měření, modrá průměr 21 vzorků. Světlý pruh označuje vybraných 351 až 643 let před rokem 1950, oranžový bod vypočtený průměr minus 5,05 promile."
            width={680} height={540} unoptimized />
          <figcaption>
            Mladší část Bu4. Vodorovná osa udává kalendářní roky před rokem
            1950, starší čas je vlevo. Svislá osa ukazuje δ¹⁸O vůči VPDB.
            Šedě jsou jednotlivá měření, modře vlastní průměr 21 sousedních
            vzorků. Světlé pole vyznačuje právě vypočtené okno
            a oranžový bod jeho výsledek. Časové údaje přebíráme z archivu,
            pásmo nejistoty stáří zde není vykresleno. Vlastní graf z{" "}
            <SourceLink id="DOI_10_25921_s829_3m55">dat NOAA NCEI</SourceLink>,{" "}
            <a href="/data/methods/speleothems/example-window.csv">21 vstupních hodnot</a>{" "}
            a <a href="/data/methods/speleothems/bu4-processed.csv">celá zpracovaná řada</a>.
          </figcaption>
        </figure>
        <p>
          Vyhlazená křivka v tomto úseku leží výše než v řadě okolních
          období. Původní studie interpretuje vyšší kyslíkové hodnoty
          během malé doby ledové spolu s dalšími ukazateli jako
          chladnější a sušší zimní podmínky.
          Náš výpočet ukazuje, jak vzniká jeden bod této vyhlazené
          izotopové řady. Klimatický výklad přebíráme ze studie,
          která jej opírá také o ostatní rozbory a sledování jeskyně.{" "}
          <SourceLink id="DOI_10_5194_cp_8_1751_2012">(Fohlmeister a kol. 2012, oddíl 4.3 a obrázek 4)</SourceLink>
        </p>
        <details className="article-details">
          <summary>Data a postup pro zopakování výpočtu</summary>
          <p>
            Používáme soubor bunker2012bu4-noaa.txt ve verzi
            z 20. března 2025, stažený 28. října 2026.
            Pořadí vzorků zachováváme podle vzdálenosti od vrcholu.
            Okno zahrnuje prostřední vzorek, deset předchozích a deset
            následujících. Všechny hodnoty mají stejnou váhu.
            Prvních a posledních deset vzorků nemá úplné okno,
            a jejich průměr proto neuvádíme. Nepřepočítáváme stáří,
            neodečítáme trend a nepřevzorkováváme na pravidelné časové kroky.
            Jde o vlastní provedení popsaného 21bodového vyhlazení,
            nikoli o převzetí původního výpočetního kódu autorů.
          </p>
          <p>
            Stáhnout lze <a href="/data/methods/speleothems/bu4-original.txt">nezměněný původní soubor</a>,{" "}
            <a href="/data/methods/speleothems/bu4-processed.csv">všechna měření a průměry</a>,{" "}
            <a href="/data/methods/speleothems/example-window.csv">vybraných 21 řádků</a>,{" "}
            <a href="/data/methods/speleothems/calculation.json">nezaokrouhlené výsledky</a>{" "}
            a <a href="/data/methods/speleothems/provenance.json">původ dat a kontrolní součet</a>.
            <a href="/data/methods/speleothems/reproduce.py"> Skript v Pythonu</a>{" "}
            výpočet zopakuje a ověří soubory bez připojení k internetu.
            Postup spuštění obsahuje <a href="/data/methods/speleothems/README.txt">průvodní dokument</a>.
            Dostupný je i <a href="/data/methods/speleothems/plot.py">skript pro vytvoření grafu</a>.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Rostoucí krápník ukládá do svých vrstev chemický záznam vody
            přicházející z povrchu. Datování určí, kdy vrstvy vznikly.
            Rozbor jejich složení a znalost dnešních poměrů v jeskyni
            pak umožňují spojit změny tohoto záznamu s proměnami prostředí.
          </p>
          <p>
            Z krápníků rekonstruujeme změny srážek, teploty a průsaku vody.
            Jejich složení vypovídá také o půdě a vegetaci nad jeskyní.
            Jeskynní sedimenty umožňují zjišťovat, kdy docházelo k povodním.
            Vhodné záznamy sahají tisíce až stovky tisíc let do minulosti.
          </p>
        </div>
      </div>
    </article>
  );
}
