import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import example from "../../public/data/methods/radiosounding/example.json";

const dataPath = "/data/methods/radiosounding";
const number = (value: number, digits = 1) => value.toLocaleString("cs-CZ", {
  minimumFractionDigits: digits, maximumFractionDigits: digits,
});

export function RadiosoundingArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Výškový profil</dt><dd>Průběh veličiny, například teploty, podle výšky nebo tlaku vzduchu.</dd></div>
          <div><dt>Tlaková hladina</dt><dd>Místa se stejným tlakem vzduchu. Jejich výška se mění podle stavu atmosféry.</dd></div>
          <div><dt>Geopotenciální výška</dt><dd>Výšková souřadnice zohledňující tíhové pole Země. Udává se v geopotenciálních metrech, značka gpm.</dd></div>
          <div><dt>UTC</dt><dd>Koordinovaný světový čas. Umožňuje porovnávat termíny měření z různých zemí.</dd></div>
        </dl>
        <p className="article-glossary__note">Radiosonda měří postupně během letu. Vítr ji přitom unáší, takže jednotlivé výšky obvykle odpovídají různým místům i časům.</p>
      </aside>

      <div className="article-prose">
        <h2>Co je radiosondáž</h2>
        <p className="article-prose__intro">
          Radiosondáž je měření vlastností atmosféry přístrojem neseným balonem, který své údaje vysílá
          rádiem přijímači na zemi. Čidla snímají teplotu a vlhkost, podle provedení také tlak.
          Sledování pohybu sondy přidává polohu a vítr. Spojením údajů s časem a výškou vzniká profil
          atmosféry od místa startu až do výšky, kam přístroj vystoupal.
        </p>
        <p>
          Balon je nosič a radiosonda měřicí souprava. Termometrii, hygrometrii, určování polohy
          a rádiový přenos spojuje do jednoho pozorování. Zde vysvětlíme provedení Vaisala RS41
          a následně zpracujeme skutečný výstup z Prahy-Libuše. Výklad přístroje opíráme o
          <SourceLink id="2023_GRUAN_RS41_TD8"> dokumentaci Sommera a spoluautorů z roku 2023</SourceLink>.
          Ta popisuje i zpracování referenční sítě výškových měření GRUAN, anglicky GCOS Reference
          Upper-Air Network. Síť je součástí globálního systému sledování klimatu. Jejím cílem jsou
          údaje s doloženými korekcemi a nejistotou pro každou část profilu.
        </p>

        <h2>Co se při letu děje</h2>
        <p>
          Balon naplněný vodíkem nebo heliem má vztlak, který zvedá sondu i závěs. S klesajícím tlakem
          se rozpíná, až jeho obal praskne. Přístroj potom klesá, zpravidla s padákem. Pozemní anténa
          během letu přijímá vysílané údaje. <SourceLink id="WEB_NOAA_Radiosonde_Observation_27e1f005">Popis
          provozu americké meteorologické služby</SourceLink> ukazuje celý systém od přípravy balonu
          po příjem měření. Dosažená výška a doba letu závisejí na balonu, nákladu i počasí.
        </p>
        <p>
          U popsané RS41 vyčnívá z tepelně chráněného těla raménko s teplotním a vlhkostním čidlem.
          Uvnitř jsou elektronika, baterie a přijímač družicové navigace. Samostatná anténa vysílá data
          k zemi. Dlouhý závěs odděluje přístroj od balonu, aby omezil jeho vliv na vzduch kolem čidel.
          Proudění při výstupu pomáhá čidla větrat. Umístění a rozměry součástí zachycuje
          <SourceLink id="2023_GRUAN_RS41_TD8"> kapitola 2 dokumentace GRUAN</SourceLink>.
        </p>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Cesta od vzduchu kolem sondy k výškovému profilu">
            <div><span>1</span><strong>Sonda pod balonem</strong><small>Čidla reagují na vzduch. Navigace určuje polohu a čas.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Elektronika a vysílač</strong><small>Odečty se převádějí podle kalibrace a odesílají rádiem.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Přijímač na zemi</strong><small>Software kontroluje data, provádí korekce a počítá další veličiny.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Profil atmosféry</strong><small>Každý údaj má čas a svislou souřadnici, případně i nejistotu.</small></div>
          </div>
          <figcaption>
            Vlastní schéma toku informací podle <SourceLink id="2023_GRUAN_RS41_TD8">GRUAN-TD-8,
            kapitol 2 a 7</SourceLink>. První šipka znamená předání odečtů elektronice, druhá rádiový
            přenos a třetí vytvoření datového produktu. Balon zajišťuje pohyb soupravy, samotnou
            teplotu ani vlhkost neměří. Rozdělení výpočtů mezi sondu a pozemní software závisí na systému.
          </figcaption>
        </figure>

        <h2>Co čidla zaznamenávají a co se dopočítává</h2>
        <p>
          Teplotní čidlo RS41 využívá elektrický odpor platiny. Elektronika porovná odečet
          s kalibračním vztahem a získá teplotu čidla. Aby výsledek odpovídal teplotě vzduchu, potřebujeme
          posoudit i ohřev sluncem a zpoždění reakce. Princip převodu vysvětluje
          <Link href="/metody/odporova-termometrie-a-termistory"> odporová termometrie</Link>,
          konkrétní provedení <SourceLink id="2017_Vaisala_RS41">dokumentace RS41, kapitola 2</SourceLink>.
        </p>
        <p>
          Vlhkoměr sleduje elektrickou kapacitu polymerní vrstvy, která přijímá a uvolňuje vodu.
          Výsledkem je relativní vlhkost, značená RH a vyjádřená v procentech. Ta porovnává tlak
          vodní páry s tlakem při nasycení za dané teploty. RS41 vlhkostní prvek vyhřívá, takže musí
          znát jeho vlastní teplotu a přepočítat údaj na teplotu okolního vzduchu. Rosný bod a další
          vlhkostní veličiny vznikají až výpočtem. Souvislosti rozvádí
          <Link href="/metody/hygrometrie"> hygrometrie</Link> a
          <SourceLink id="2017_Vaisala_RS41"> kapitola 3 dokumentace výrobce</SourceLink>.
        </p>
        <div className="method-comparison" aria-label="Dvě cesty k tlaku v radiosondovém profilu">
          <section>
            <h3>RS41-SGP: tlakové čidlo</h3>
            <p>Tlak vzduchu prohýbá tenkou křemíkovou membránu nad uzavřenou dutinou. Tím se mění kapacita snímacího prvku. Kalibrace při známých tlacích a teplotách určuje převod na tlak.</p>
          </section>
          <section>
            <h3>RS41-SG: výpočet tlaku</h3>
            <p>Tato varianta tlakové čidlo nemá. Výpočet začíná tlakem změřeným na stanici a postupuje vzhůru podle výšky z družicové navigace, teploty a vlhkosti. Využívá vztah mezi tlakem a tíhou vzduchu nad danou hladinou.</p>
          </section>
        </div>
        <p>
          Obě cesty rozlišuje <SourceLink id="2023_GRUAN_RS41_TD8">GRUAN-TD-8, oddíly 2.1.3
          a 4.4.2</SourceLink>. Přítomnost sloupce „tlak“ v souboru sama neříká, jak tlak vznikl.
          Chyba teploty nebo přízemního barometru může vstoupit i do vypočteného tlaku.
          Tlaková hladina, například 500 hektopascalů, zkráceně hPa, navíc nemá vždy stejnou výšku.
        </p>
        <p>
          Družicový systém GPS, anglicky <em>Global Positioning System</em>, určuje polohu z časování
          signálů několika družic. Výšku vůči zemskému referenčnímu elipsoidu je třeba převést na
          používanou výškovou souřadnici. Geopotenciální výška zohledňuje změny tíhového zrychlení.
          Je blízká běžné nadmořské výšce, ale není s ní totožná. V našem příkladu používáme původní
          geopotenciální metry, značka gpm, a nezaměňujeme je za výšku nad místem startu.
        </p>
        <p>
          Vítr získáváme z vodorovného pohybu sondy za předpokladu, že soupravu unáší okolní vzduch.
          Kyvadlový pohyb závěsu a šum navigace je potřeba potlačit. Software výrobce pro RS41 využívá
          také změny frekvence družicových signálů způsobené pohybem, tedy Dopplerův jev. Referenční
          zpracování GRUAN počítá vítr z vyhlazených souřadnic a jejich změny za čas.
          <SourceLink id="2023_GRUAN_RS41_TD8"> Dokumentace, strana 24 a oddíl 4.4.3</SourceLink>,
          proto rozlišuje oba postupy. Rychlost výstupu balonu nelze stejně jednoduše vydávat za
          svislou rychlost vzduchu, protože balon stoupá vlastním vztlakem.
        </p>
        <details className="method-details">
          <summary>Jak souvisí vypočtený tlak s výškou</summary>
          <p>
            Pro tenkou vrstvu s přibližně stálou virtuální teplotou lze hydrostatický vztah zapsat takto:
          </p>
          <p className="article-formula method-equation">p₁ = p₀ × exp[−g₀ ΔH / (R<sub>d</sub> T<sub>v</sub>)]</p>
          <p>
            p₀ a p₁ jsou tlaky na dolní a horní hranici ve stejných jednotkách. ΔH je rozdíl
            geopotenciálních výšek v gpm, g₀ je standardní tíhové zrychlení 9,80665 m/s²
            a R<sub>d</sub> je měrná plynová konstanta suchého vzduchu přibližně 287,05 J/(kg·K).
            Značka exp znamená exponenciální funkci. Virtuální teplota T<sub>v</sub> v kelvinech
            vyjadřuje teplotu, kterou by měl suchý vzduch se stejnou hustotou a tlakem jako zkoumaný
            vlhký vzduch. Zahrnuje tak vliv vodní páry na hustotu.
          </p>
          <p>
            V reálném profilu postupujeme po vrstvách a teplotu i vlhkost průběžně měníme.
            Předpokládáme hydrostatickou rovnováhu, v níž svislý rozdíl tlaku vyvažuje tíhu vzduchu.
            <SourceLink id="2023_GRUAN_RS41_TD8"> Oddíl 4.4.2</SourceLink> uvádí postup pro geometrickou
            výšku s místním tíhovým zrychlením, návaznost na pozemní barometr i výpočet nejistoty.
            Tento výpočet zde vysvětluje princip varianty bez tlakového čidla. Z pražského veřejného
            souboru jej nevydáváme za ověřené původní zpracování konkrétní sondy.
          </p>
        </details>

        <h2>Kalibrace a příprava před vypuštěním</h2>
        <p>
          Kalibrace určuje vztah mezi odezvou přístroje a referenčními hodnotami včetně nejistoty.
          Seřízení je zásah, který jeho odezvu upraví. Rozdíl stanovuje
          <SourceLink id="2012_VIM_Calibration"> metrologický slovník VIM</SourceLink>.
          U radiosondy musíme doložit návaznost teploty, vlhkosti a případně tlaku na laboratorní
          reference a ověřit, zda se přístroj nepoškodil při skladování nebo přípravě.
        </p>
        <p>
          <SourceLink id="2017_Vaisala_RS41">Výrobce RS41 v kapitolách 2 a 3</SourceLink> popisuje
          kalibraci vůči referenčním teploměrům a vlhkostním přístrojům s návazností na jednotky
          mezinárodní soustavy SI. Návaznost znamená doložený řetězec porovnání, v němž má každý krok
          vlastní nejistotu. Koeficienty získané při kalibraci se použijí při následném měření.
        </p>
        <p>
          Pozemní příprava RS41 zahrnuje kontrolu funkce, vyčištění vlhkostního čidla ohřevem a kontrolu
          jeho odezvy v téměř suchých podmínkách. U varianty s tlakovým čidlem se údaj porovnává
          s pozemním barometrem. Je potřeba správně zadat také polohu stanice a výšky referenčních
          přístrojů. <SourceLink id="2023_GRUAN_RS41_TD8">GRUAN v oddílu 3.2</SourceLink> přidává
          kontrolu vůči samostatným referencím v ustálené vlhkostní komoře. Výsledky této dodatečné
          kontroly používá pro posouzení kvality a nejistoty, nikoli k dalšímu seřízení sondy.
        </p>
        <p>
          Kontrola při zemi prověří část měřicího rozsahu. Chování ve velmi chladném, řídkém a sluncem
          ozářeném vzduchu vyžaduje další zkoušky. Laboratorně se proto mění tlak, proudění a osvětlení,
          aby se dala určit radiační korekce. Ověření při skutečném letu potom ukazuje, zda laboratorní
          poznatky obstojí i v proměnlivé atmosféře.
        </p>

        <h2>Skutečný profil z Prahy-Libuše</h2>
        <p>
          Použijeme vzestupnou část radiosondáže pro termín <strong>1. ledna 2025 ve 12:00 UTC</strong>{" "}
          z <SourceLink id="2025_CHMU_Prague_Radiosonde_January">validovaného měsíčního archivu Českého
          hydrometeorologického ústavu, ČHMÚ</SourceLink>. Soubor
          <code> 25010112_Praha_ascent_111510.csv</code> obsahuje 5 059 záznamů. Skutečný start byl
          v 11:15:10 UTC. Poslední záznam patří času 87 minut a 34 sekund od startu a výšce
          34 806,7 gpm. Termín pozorování tedy není totožný s okamžikem vypuštění ani s časem každého údaje.
        </p>
        <p>
          <SourceLink id="2025_CHMU_Radiosonde_Format">Popis formátu ČHMÚ, verze 1.0</SourceLink>,
          přiřazuje sloupcům čas od startu, geopotenciální výšku, tlak, teplotu, relativní vlhkost,
          rosný bod, směr a rychlost větru a zeměpisné souřadnice. Desetinná místa v souboru jsou
          způsob zápisu, nikoli doklad stejně malé nejistoty. Data v historickém archivu už prošla
          zpracováním a měsíční validací ČHMÚ.
        </p>
        <p>
          Veřejný soubor CSV s hodnotami oddělenými čárkami neobsahuje elektrické odečty čidel,
          kalibrační koeficienty, sériové číslo ani typ
          konkrétní sondy a verzi zpracovacího programu. Popis RS41 proto nepoužíváme jako důkaz
          přístrojového vybavení tohoto jednotlivého letu. Zopakovat můžeme následující výběr a výpočet
          ze zveřejněných fyzikálních veličin. Původní převod elektrického signálu z nich neobnovíme.
        </p>
        <figure className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" aria-label="Vybrané hodnoty pražského profilu" tabIndex={0}>
            <table>
              <thead><tr><th scope="col">Čas od startu (min:s)</th><th scope="col">Výška (gpm)</th><th scope="col">Teplota (°C)</th></tr></thead>
              <tbody>
                {example.selectedRows.map((row) => (
                  <tr key={row.elapsedSeconds}>
                    <th scope="row">{Math.floor(row.elapsedSeconds / 60)}:{String(row.elapsedSeconds % 60).padStart(2, "0")}</th>
                    <td>{number(row.heightGpm)}</td><td>{number(row.temperatureC)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption>
            Výběr osmi původních záznamů ze vzestupné části letu. Časy označují jednotlivá pozorování,
            nikoli desetiminutové průměry. Hodnoty jsme neinterpolovali. Zdroj:
            <SourceLink id="2025_CHMU_Prague_Radiosonde_January"> ČHMÚ, Praha-Libuš, leden 2025</SourceLink>.
          </figcaption>
        </figure>
        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/radiosounding/prague-temperature-profile.png"
            alt="Teplotní profil z Prahy-Libuše 1. ledna 2025. Teplota nejprve převážně klesá, kolem třinácti tisíc geopotenciálních metrů dosahuje minima a výše kolísá. Vyznačeny jsou záznamy v desáté a dvacáté minutě."
            width={1280} height={1440} sizes="(max-width: 700px) 100vw, 770px" unoptimized
          />
          <figcaption>
            Vlastní graf ze všech 5 059 záznamů <SourceLink id="2025_CHMU_Prague_Radiosonde_January">ČHMÚ</SourceLink>.
            Vodorovná osa ukazuje teplotu ve °C, svislá geopotenciální výšku v tisících gpm. Zelená
            křivka spojuje zveřejněné hodnoty bez dodatečného vyhlazení. Oranžové body a světlý pás
            vymezují vrstvu použitou ve výpočtu níže. Časové mezery mezi záznamy nejsou všude stejné.
            Jde o jeden let, nikoli o dlouhodobý průměr atmosféry.
          </figcaption>
        </figure>
        <p>
          Mezi desátou a dvacátou minutou teplota klesla z −10,1 na −37,9 °C. Sonda přitom přešla
          z 4 086,4 na 8 224,2 gpm. Průměrnou změnu teploty s geopotenciální výškou v této vrstvě
          získáme podílem obou rozdílů:
        </p>
        <p className="article-formula method-equation">ΔT / ΔH = −27,8 / 4,1378 ≈ −6,72 °C/km</p>
        <p>
          ΔT znamená rozdíl horní a dolní teploty. ΔH je rozdíl výšek, zde převedený z 4 137,8 gpm
          na 4,1378 geopotenciálního kilometru. Záporné znaménko vyjadřuje pokles teploty vzhůru.
          Výsledek popisuje tuto vrstvu po dráze sondy. Neříká, že teplota stejně rychle klesala v čase
          na jednom místě, ani že se podle tohoto čísla mění klima.
        </p>
        <p>
          Pohyb mezi místy je v datech přímo vidět. Zeměpisná délka se od startu do posledního záznamu
          změnila z 14,44690° na 17,65844° východní délky, šířka z 50,00780° na 50,24151° severní šířky.
          Profil proto přiřazujeme dráze a času letu. Pro porovnání se stanicí nebo družicí musíme
          zohlednit, zda pozorovaly tutéž část atmosféry.
        </p>
        <details className="method-details">
          <summary>Data a skript pro zopakování výpočtu</summary>
          <p>
            Stáhněte tři soubory do jedné složky a spusťte <code>node reproduce.mjs</code> v Node.js 22
            nebo novějším. Skript nepotřebuje síť ani další knihovny. Ověří kontrolní součet původního
            CSV, počet záznamů, časy a číselné hodnoty. Vypíše tabulkový výběr i výsledek výpočtu.
          </p>
          <ul>
            <li><a href={`${dataPath}/25010112_Praha_ascent_111510.csv`} download>Úplný původní profil ČHMÚ</a></li>
            <li><a href={`${dataPath}/example.json`} download>Původ, výběr, verze formátu a kontrolní součty</a></li>
            <li><a href={`${dataPath}/reproduce.mjs`} download>Výpočet a kontrola vstupů</a></li>
          </ul>
          <p>
            CSV zachováváme beze změny včetně původních konců řádků. Kontrolní součty SHA-256 v metadatech
            určují obsah tohoto souboru i celého měsíčního archivu staženého 4. října 2026.
            Změněný vstup skript odmítne. Chybějící údaje nenahrazuje nulou a neodhaduje chybějící
            časové body. Kontroly slouží tomuto příkladu a nenahrazují validaci poskytovatele.
          </p>
          <p>
            Zdroj dat: Český hydrometeorologický ústav, opendata.chmi.cz.
            <SourceLink id="2026_CHMU_Open_Data_Licence"> ČHMÚ uvádí licenci Creative Commons BY 4.0</SourceLink>.
            Původní soubor poskytujeme se stejným uvedením původu. Tabulka a graf jsou naše zpracování.
            Graf lze stáhnout také jako <a href="/media/radiosounding/prague-temperature-profile.svg" download>vektorový obrázek</a>.
          </p>
        </details>

        <h2>Jak se ověřuje měření za letu</h2>
        <p>
          <SourceLink id="DOI_10_5194_amt_9_3115_2016">Jensen a spoluautoři v roce 2016</SourceLink>
          {" "}vyhodnotili dvacet společných letů RS41 a RS92 v Oklahomě během 3.–8. června 2014.
          Obě sondy visely pod týmž balonem. Medián jejich teplotního rozdílu podle výšky nepřekročil
          pod 28 km velikost 0,13 °C. Více než 90 % porovnávaných vlhkostních údajů pod touto výškou
          se lišilo nejvýše o dva procentní body RH. Při výstupu z kapalných oblaků však některé lety
          ukázaly větší rozdíly, které autoři spojili s odpařovacím ochlazováním navlhlého čidla.
        </p>
        <p>
          Šlo o nové terénní odečty, oddělené od laboratorních dat použitých ke kalibraci. Obě sondy
          měly vlastní čidla a zpracování, ale sdílely balon, prostředí a část pozemního přijímacího
          vybavení včetně navigační antény. Takové porovnání dobře ukazuje vzájemné rozdíly, společnou
          chybu však může přehlédnout. Výsledky letní kampaně také nelze bez dalšího přenášet na
          polární zimu nebo všechny výšky a typy sond.
        </p>

        <h2>Rozlišení, korekce a nejistota</h2>
        <p>
          Slunce může ohřát čidlo nad teplotu okolního vzduchu. Velikost odchylky závisí na intenzitě
          záření, tlaku i proudění. Korekce proto používá laboratorně určenou odezvu a odhad podmínek
          při letu. Také teplotní a vlhkostní čidlo reagují se zpožděním. V chladném vzduchu se odezva
          vlhkoměru výrazně zpomaluje, takže ostrý přechod mezi suchou a vlhkou vrstvou může být v záznamu
          rozmazaný. Experimenty i meze oprav popisují
          <SourceLink id="2023_GRUAN_RS41_TD8"> oddíly 4.1 a 4.2 dokumentace GRUAN</SourceLink>.
        </p>
        <p>
          Vysílání každou sekundu neznamená, že každá tenká vrstva byla stejně přesně rozlišena.
          Rozlišení omezují odezva čidla, rychlost výstupu, vyhlazování i výpadky příjmu. Zpracování
          může část detailů vybrat nebo zprůměrovat. Při převodu na standardní tlakové hladiny je
          proto nutné vědět, zda hodnota pochází z přímého záznamu, nebo z interpolace mezi sousedními záznamy.
        </p>
        <p>
          <SourceLink id="2017_Vaisala_RS41">Dokumentace RS41 z roku 2017, tabulky 2.1 a 3.1</SourceLink>,
          uvádí teplotní rozsah −90 až +60 °C a rozlišení 0,01 °C. Rozšířenou nejistotu teploty za letu
          udává 0,3 °C do 16 km a 0,4 °C výše. Rozsah vlhkosti je 0–100 % RH, rozlišení 0,1 procentního
          bodu a rozšířená nejistota za letu čtyři procentní body při teplotách −60 až +60 °C.
          Rozšířená nejistota zde používá faktor pokrytí k = 2, tedy dvojnásobek standardní nejistoty,
          který za obvyklých statistických předpokladů odpovídá přibližně 95% pokrytí.
        </p>
        <p>
          To jsou údaje pro daný výrobek a podmínky, nikoli obecná přesnost radiosondáže.
          Pražský soubor neobsahuje nejistotu jednotlivých bodů ani podklady k jejímu úplnému sestavení.
          Nejistotu vypočteného gradientu −6,72 °C/km proto z dostupných dat nevyčíslujeme.
          Potřebovali bychom nejistoty obou teplot a výšek i informaci o jejich společných chybách.
          Počet desetinných míst ve výpočtu tyto údaje nenahrazuje.
        </p>
        <p>
          Vzestupnou a sestupnou část letu posuzujeme zvlášť. Po prasknutí balonu se mění rychlost,
          orientace i větrání soupravy a sonda se vrací jinou částí atmosféry. Referenční produkt
          RS41-GDP.1 popsaný v <SourceLink id="2023_GRUAN_RS41_TD8">GRUAN-TD-8</SourceLink> zahrnuje
          pouze výstup. <SourceLink id="2025_CHMU_Radiosonde_Format">ČHMÚ zveřejňuje obě části odděleně</SourceLink>.
          V našem příkladu používáme jen vzestupný profil.
        </p>

        <h2>Co změnil rádiový přenos</h2>
        <p>
          Jedno z raných praktických řešení popsali
          <SourceLink id="1938_Diamond_Radiometeorography"> Diamond, Hinman a Dunmore v původní práci
          z roku 1938</SourceLink>. Jejich souprava převáděla změny měřených veličin na změny
          modulační frekvence vysílače. Přepínač ovládaný změnami tlaku postupně zapojoval jednotlivá čidla
          a poskytoval značky pro tlakovou stupnici. Pozemní přístroj zapisoval přijatý signál do grafu.
          Souvislé vysílání zároveň umožňovalo rádiové sledování balonu pro určení větru.
        </p>
        <p>
          Pozorovatel tak získával údaje už během letu. Studie popisuje nejen elektrické zapojení,
          ale i kalibraci a skutečný záznam výstupu. Současné systémy nahradily mechanické přepínání
          digitálním přenosem a polohu obvykle získávají z družicové navigace. Zůstala potřeba propojit
          odezvu každého čidla s jeho kalibrací, časem a místem. Přechod mezi generacemi přístrojů
          může změnit charakter chyb, i když výsledný soubor dál obsahuje sloupce se stejnými názvy.
        </p>

        <h2>Od jednotlivých výstupů ke klimatickému záznamu</h2>
        <p>
          Radiosondáž poskytuje část měření pro články
          <Link href="/pozorovani/stratosfericke-ochlazovani"> Teplota stratosféry</Link> a
          <Link href="/pozorovani/narust-vlhkosti"> Vlhkost atmosféry</Link>.
          Jeden profil ukazuje stav atmosféry během letu. Dlouhodobý závěr vyžaduje opakovaná měření
          z mnoha stanic, srovnatelné termíny a stejné vymezení výšky nebo tlakové hladiny.
        </p>
        <p>
          <SourceLink id="WEB_NOAA_Integrated_Global_Radiosonde_Archive_IGRA_ab0ea6c1">Integrovaný globální
          radiosondový archiv, IGRA</SourceLink>, spojuje záznamy z různých zdrojů a kontroluje jejich
          kvalitu. Soubor po této kontrole ještě nemusí být vhodný pro výpočet klimatického trendu.
          Změna typu čidla, radiační korekce, času startu nebo místa stanice může vytvořit umělý skok.
          Tyto změny řeší <Link href="/metody/kontrola-kvality-a-homogenizace">kontrola kvality
          a homogenizace</Link> v návaznosti na historii stanice.
        </p>
        <p>
          Konkrétní klimatické zpracování představili
          <SourceLink id="DOI_10_1029_2005jd006169"> Freeová a spoluautoři v roce 2005</SourceLink>.
          Pro produkt RATPAC, anglicky <em>Radiosonde Atmospheric Temperature Products for Assessing
          Climate</em>, vyšli z 85 stanic a sestavili velkoplošné teplotní odchylky na třinácti
          tlakových hladinách. Doložili výběr vstupů, úpravy nehomogenit i zbývající nejistoty.
          Samostatně upozornili na neúplnou historii stanic. Radiosonda zde zajišťuje jednotlivá
          měření, zatímco klimatický produkt přidává další výběr a zpracování.
        </p>
        <p>
          Při porovnávání s družicovým měřením musíme sladit čas, oblast a svislý rozsah.
          Radiosonda zaznamenává poměrně úzkou dráhu, zatímco některé družicové přístroje sledují
          záření přicházející z rozsáhlejší vrstvy atmosféry. Pokud dva klimatické produkty používají
          stejné sondáže, jejich shoda neposkytuje plně nezávislou kontrolu původních čidel.
        </p>
        <div className="method-conclusion">
          <h2>Co radiosondáž umožňuje zjistit</h2>
          <p>
            Radiosondáž zpřístupňuje teplotu, vlhkost, tlak a vítr v různých výškách podél dráhy balonu.
            Umožňuje rozpoznat vrstvy, které přízemní měření nezachytí, a při opakovaných srovnatelných
            výstupech sledovat jejich proměny. Dlouhodobý vývoj atmosféry dokládá až soubor měření
            s posouzenými změnami přístrojů, zpracování a pokrytí. Samotný výškový profil podpírá
            tvrzení o stavu atmosféry během daného letu, nikoli vysvětlení příčin klimatické změny.
          </p>
        </div>
      </div>
    </article>
  );
}
