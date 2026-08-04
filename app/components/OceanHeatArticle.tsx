import Image from "next/image";
import { SourceLink } from "./SourceLink";

export function OceanHeatArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>Teplotní profil</dt>
            <dd>Teplota vody zaznamenaná na jednom místě postupně od hladiny do hloubky.</dd>
          </div>
          <div>
            <dt>OHC</dt>
            <dd>
              Zkratka anglického <em>ocean heat content</em>. V převzatých grafech označuje obsah tepla v oceánu.
            </dd>
          </div>
          <div>
            <dt>Zettajoule</dt>
            <dd>
              Zkráceně ZJ. Jeden zettajoule je 10<sup>21</sup> joulů. Hodnota v grafu neudává veškeré teplo v
              oceánu, ale změnu vůči určenému referenčnímu stavu.
            </dd>
          </div>
          <div>
            <dt>Referenční stav</dt>
            <dd>
              Dlouhodobý průměr, vůči němuž je změna vypočtena. Posouvá nulu grafu, nikoli rozdíl mezi dvěma roky.
            </dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Každý údaj v článku doprovází hloubka. Hodnoty pro 0–700 m, 700–2 000 m a 0–2 000 m popisují odlišné
          objemy vody a nelze je zaměňovat.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Obsah tepla v oceánu vyjadřuje, jak se vůči zvolenému základu změnilo množství tepla ve vymezeném
          objemu mořské vody. Vychází z teplot vody změřených na mnoha místech a v mnoha hloubkách. Výsledek v
          joulech říká, o kolik se obsah tepla v dané oblasti a vrstvě zvětšil nebo zmenšil.
        </p>

        <p>
          Každá zveřejněná hodnota proto potřebuje čtyři údaje: oblast, horní a dolní hranici hloubky, období a
          referenční stav. Samotné číslo „300 ZJ“ úplnou informací není. Může označovat globální součet do 700
          metrů, součet do 2 000 metrů nebo jinak vymezenou část oceánu. Stejně důležitá je verze dat, protože
          nové profily a opravy starších měření mohou změnit i dříve zveřejněné hodnoty.
        </p>

        <p>
          Základ dnešního postupu je patrný už v globálním výpočtu Levituse a jeho spoluautorů z roku 2000:
          teplotní odchylky v jednotlivých hloubkách byly převedeny na změnu obsahu tepla a sečteny přes světový
          oceán. Domingues a kol. v roce 2008 upravili práci s nerovnoměrným pokrytím a historickými přístroji pro
          horních 700 metrů. Lyman a kol. pak v roce 2010 porovnali několik nezávisle zpracovaných výpočtů a
          ukázali, jak se na výsledku projevuje volba oprav a prostorového dopočtu.{" "}
          <SourceLink id="DOI_10_1126_science_287_5461_2225">
            Levitus et al., 2000
          </SourceLink>
          ,{" "}
          <SourceLink id="DOI_10_1038_nature07080">Domingues et al., 2008</SourceLink> a{" "}
          <SourceLink id="DOI_10_1038_nature09043">Lyman et al., 2010</SourceLink>
        </p>

        <p>
          Levitus a kol. v roce 2012 zveřejnili samostatné globální hodnoty pro vrstvy 0–700 a 0–2 000 metrů a
          výslovně popsali, že se při výpočtu od každé teploty odečítá referenční průměr. Cheng a kol. v roce
          2017 znovu vyhodnotili chybu způsobenou řídkým historickým měřením. Čtvrtá verze datového souboru
          Institutu fyziky atmosféry Čínské akademie věd, označovaná IAPv4, zachovává stejnou cestu od teplotních
          profilů ke globálnímu součtu, ale používá novější kontrolu dat, opravy přístrojů a prostorový výpočet.{" "}
          <SourceLink id="DOI_10_1029_2012gl051106">Levitus et al., 2012</SourceLink>,{" "}
          <SourceLink id="DOI_10_1126_sciadv_1601545">Cheng et al., 2017</SourceLink> a{" "}
          <SourceLink id="DOI_10_5194_essd_16_3517_2024">Cheng et al., 2024</SourceLink>
        </p>

        <p>
          Rozdíly mezi těmito pracemi jsou vidět i v jednotlivých ročních hodnotách. Vznikají výběrem vstupních
          měření, zacházením se starými přístroji, referenčním stavem i způsobem odhadu neměřených oblastí.
          Společné mají to podstatné: vstupem jsou teploty naměřené ve vodním sloupci, výstupem je změna vůči
          určenému základu a globální číslo je součtem přes přesně uvedenou hloubku.
        </p>

        <h2>Historie měření</h2>
        <p>
          Jedním z prvních systematických souborů s velkým geografickým rozsahem vznikl během expedice lodi HMS
          <em> Challenger</em>. Její posádka v letech 1873–1876 zapisovala teplotu hlubokého oceánu na jednotlivých
          stanicích a v různých hloubkách. Původní zpráva zachovává tabulky i popis těchto pozorování. Šlo o
          jednotlivé průřezy oceánem, nikoli o pravidelné globální sledování.{" "}
          <SourceLink id="WEB_escholarship_org_Report_on_the_Deep_Sea_Temperature_Observations_8c66444c">
            Zpráva expedice Challenger
          </SourceLink>
        </p>

        <p>
          Athelstan Spilhaus v roce 1938 popsal mechanický batytermograf, který při ponořování kreslil souvislý
          záznam teploty proti tlaku v horní části oceánu. Přístroj zrychlil získávání profilů z lodí. Od roku
          1967 se ve velkém používal jednorázový batytermograf, anglicky <em>eXpendable BathyThermograph</em> neboli
          XBT. Sonda se vypustila z plující lodi, měřila teplotu během pádu a hloubka se dopočítala z času a
          předpokládané rychlosti klesání. XBT byl hlavním zdrojem podpovrchových teplot přibližně do roku 2002.{" "}
          <SourceLink id="WEB_elischolar_library_yale_edu_A_bathythermograph_d06b1b5c">
            Spilhaus, 1938
          </SourceLink>{" "}
          a{" "}
          <SourceLink id="WEB_NOAA_Global_Ocean_Heat_Content_CDR_f355b1a3">
            NOAA/NCEI: historie měření XBT
          </SourceLink>
        </p>

        <p>
          Mezinárodní program Argo začal rozmísťovat autonomní plováky v roce 1999. Regionální síť se rozšířila
          na globální rozmístění v roce 2004 a cíle 3 000 aktivních plováků dosáhla v roce 2007. Argo tím výrazně
          zlepšilo pravidelnost měření v otevřeném oceánu do hloubky přibližně 2 000 metrů. Data jsou zveřejňována
          bez omezení v rychlé provozní podobě i po podrobnější odborné kontrole.{" "}
          <SourceLink id="DOI_10_5670_oceanog_2009_36">Roemmich et al., 2009</SourceLink>
        </p>

        <p>
          Proměna přístrojů je zároveň hranicí toho, co lze z různých období vyčíst. Starší měření jsou soustředěna
          podél lodních tras a často sahají jen do několika set metrů. Argo pokrývá od poloviny prvního desetiletí
          21. století většinu otevřeného oceánu, ale běžné plováky neklesají pod 2 000 metrů a jejich pokrytí je
          slabší pod mořským ledem, u pobřeží a v mělkých mořích. Současný soubor IAPv4 proto začíná rokem 1940,
          jeho autoři však údaje považují za podstatně spolehlivější až přibližně od roku 1957.{" "}
          <SourceLink id="DOI_10_5194_essd_16_3517_2024">Cheng et al., 2024</SourceLink>
        </p>

        <h2>Co se skutečně měří</h2>
        <p>
          Základním pozorováním je teplotní profil: teplota vody zaznamenaná na jednom místě v jednotlivých hloubkách.
          Moderní přístroje současně měří tlak, podle něhož se určuje hloubka, a často také elektrickou vodivost,
          z níž se spolu s teplotou a tlakem počítá slanost. Jeden profil popisuje jediný čas a místo. Globální
          součet vzniká až následným spojením mnoha profilů.
        </p>

        <p>
          Plovák Argo většinu desetidenního cyklu unáší proud v hloubce okolo 1 000 metrů. Poté klesne přibližně
          do 2 000 metrů a při pomalém návratu k hladině zaznamenává tlak, teplotu a vodivost. Na hladině určí
          svou polohu a odešle data družici. Stejný cyklus opakuje obvykle čtyři až pět let.{" "}
          <SourceLink id="WEB_International_Argo_Program_How_do_floats_work_a29220d7">Argo: popis měřicího cyklu</SourceLink>
        </p>

        <figure className="article-figure article-figure--instrument">
          <Image
            className="article-figure__media"
            src="/media/ocean-heat/argo-float-deployment.jpg"
            alt="Autonomní plovák Argo spouštěný z boku výzkumné lodi do oceánu."
            width={1184}
            height={1071}
            unoptimized
          />
          <figcaption>
            Plovák Argo při vypuštění z lodi. Po ponoření pořizuje opakované profily teploty, tlaku a vodivosti.
            Foto: Tomas Szumski / Marine Institute; zdroj: Argo Program. Argo dovoluje použití fotografie na
            webech při uvedení programu a fotografa.{" "}
            <SourceLink id="WEB_International_Argo_Program_Photos_13d900af">
              Původní fotografie a podmínky použití
            </SourceLink>
          </figcaption>
        </figure>

        <p>
          Lodní sonda, která přímo měří vodivost, teplotu a tlak a označuje se zkratkou CTD, může při spouštění na
          kabelu dosáhnout až ke dnu. Poskytuje velmi přesný profil, ale loď změří jen trasu a čas své výpravy.
          Jednorázová sonda XBT umožnila pořizovat více profilů z obchodních i výzkumných lodí, měřila však jen
          teplotu a její hloubka byla odvozena z rychlosti pádu. Každý přístroj tak přináší jiný druh pokrytí i
          jiný soubor možných chyb.
        </p>

        <p>
          Družice sledují například teplotu samotné hladiny nebo výšku mořské hladiny. Teplotu vody v celém
          sloupci do 2 000 metrů z nich přímo odečíst nelze. Družicové údaje mohou pomoci při kontrole a
          prostorovém dopočtu, ale historické globální výpočty obsahu tepla stojí především na teplotních profilech
          pořízených přímo v oceánu. Rozlišení obou typů pozorování je důležité: mapa nebo globální číslo už je
          zpracovaným výsledkem, nikoli odečtem jediného přístroje.
        </p>

        <h2>Jak vzniká globální výpočet</h2>

        <h3>1. Profil dostane místo, čas a původ</h3>
        <p>
          U každého měření se uchovává poloha, datum, použitý přístroj, naměřené hodnoty a značky z kontroly
          kvality. Světová oceánská databáze WOD převádí data z tisíců výprav a programů do společného formátu,
          vyhledává duplicity a připojuje kontrolní příznaky. Původní naměřené hloubky zachovává a vedle nich
          nabízí hodnoty převedené na společné standardní hloubky.{" "}
          <SourceLink id="WEB_NOAA_World_Ocean_Database_3d4b1d70">
            World Ocean Database
          </SourceLink>
        </p>

        <h3>2. Zohlední se vlastnosti jednotlivých přístrojů</h3>
        <p>
          Historické přístroje se nechovaly stejně. U sond XBT se hloubka neurčovala tlakem, ale rovnicí popisující
          pád sondy. Porovnání XBT s lodními profily odhalilo odchylky teploty i vypočtené hloubky, které se navíc
          měnily s typem sondy a obdobím. Gouretski a Koltermann tento problém podrobně doložili v roce 2007;
          Levitus a kol. v roce 2009 ukázali, jak opravy mění dřívější globální výpočet. Současné postupy proto
          používají opravy určené pro konkrétní přístroj a období.{" "}
          <SourceLink id="DOI_10_1029_2006gl027834">
            Gouretski &amp; Koltermann, 2007
          </SourceLink>
          ,{" "}
          <SourceLink id="DOI_10_1029_2008gl037155">Levitus et al., 2009</SourceLink> a{" "}
          <SourceLink id="WEB_NOAA_XBT_Corrections_in_the_World_Ocean_Database_6adbe6ee">
            přehled oprav NOAA/NCEI
          </SourceLink>
        </p>

        <h3>3. Teplota se porovná se stejným místem a částí roku</h3>
        <p>
          Běžná teplota oceánu se mění s polohou, hloubkou i roční dobou. Zpracování proto porovnává lednové
          měření v určité hloubce s dlouhodobým lednovým průměrem pro stejné místo a hloubku, nikoli s jedním
          průměrem celého oceánu. Výsledkem je teplotní odchylka vůči referenčnímu stavu. Levitus a kol. tento
          krok popisují jako nutnou součást definice: bez odečtení referenčního průměru by výsledek závisel i na
          použité teplotní stupnici.{" "}
          <SourceLink id="DOI_10_1029_2012gl051106">Levitus et al., 2012</SourceLink>
        </p>

        <h3>4. Pozorování se rozmístí do trojrozměrné mapy</h3>
        <p>
          Profily jsou v prostoru i čase nerovnoměrné. Autoři proto rozdělí oceán na buňky a odhadnou teplotní
          odchylku také v buňkách bez přímého měření. Odhad využívá okolní profily a předem popsanou prostorovou
          souvislost teplot. Starší období vyžadují více takového dopočtu než období Argo. Výběr postupu není
          drobnost: při společném experimentu sedmi výzkumných skupin vyšla pro horních 700 metrů jako největší
          průměrný zdroj rozdílů právě metoda prostorového výpočtu.{" "}
          <SourceLink id="DOI_10_1175_jcli_d_15_0801_1">Boyer et al., 2016</SourceLink>
        </p>

        <h3>5. Buňky se převedou na jouly a sečtou</h3>
        <p>
          V každé buňce se teplotní odchylka spojí s objemem vody, hustotou a měrnou tepelnou kapacitou mořské
          vody. Tím vznikne změna obsahu tepla v joulech. Součet všech buněk v určené vrstvě dává hodnotu pro
          oceánskou pánev nebo pro celý světový oceán. NOAA výslovně upozorňuje, že globální výsledek je součet,
          nikoli prostý průměr teplot.{" "}
          <SourceLink id="WEB_NOAA_World_Ocean_Database_3d4b1d70">
            NOAA/NCEI: popis výpočtu
          </SourceLink>
        </p>

        <h3>6. K výsledku se připojí nejistota</h3>
        <p>
          Nejistotu vytváří přesnost přístrojů, opravy historických měření, řídké pokrytí, prostorový dopočet,
          volba referenčního stavu a další kroky zpracování. Různé datové soubory nezahrnují vždy stejné položky.
          IAPv4 například započítává chybu přístrojů, pokrytí a prostorového výpočtu, ale jeho zveřejněný interval
          zatím nezahrnuje volbu referenčního pole, svislé spojování hodnot ani všechny opravy přístrojů a kontrolu
          kvality. Autoři tuto hranici své nejistoty uvádějí přímo v metodice.{" "}
          <SourceLink id="DOI_10_5194_essd_16_3517_2024">Cheng et al., 2024</SourceLink>
        </p>

        <p>
          Rozsah intervalu kolem křivky odpovídá konkrétnímu modelu nejistoty. Úplný popis proto tvoří jeho šířka
          i seznam zahrnutých a nezahrnutých zdrojů chyby. Při porovnávání dvou grafů je potřeba číst obojí.
        </p>

        <h2>Zveřejňovaná data</h2>
        <p>
          Veřejně dostupné zdroje mají dvě odlišné úrovně. Archivy WOD a Argo obsahují jednotlivé profily.
          Produkty NOAA a IAP už poskytují zkontrolované, prostorově doplněné hodnoty a globální součty. Stažení
          hotového grafu proto není totéž jako stažení původních měření, z nichž byl vypočten.
        </p>

        <div className="article-data-list">
          <section className="article-data-item">
            <h3>World Ocean Database 2023</h3>
            <p>
              Archiv jednotlivých profilů z lodí, plováků, bójí a dalších platforem. Současné hlavní vydání
              WOD23 obsahuje přes 18,6 milionu měřicích profilů; portál umožňuje výběr podle místa, času, přístroje
              a veličiny a stažení v běžných tabulkových a oceánografických formátech.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="WEB_NOAA_World_Ocean_Database_3d4b1d70">
                Popis a stažení WOD23
              </SourceLink>{" "}
              ·{" "}
              <SourceLink id="DOI_10_25923_z885_h264">Metodická dokumentace</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>Argo</h3>
            <p>
              Profily teploty, tlaku a slanosti z autonomních plováků. Globální provoz začal v roce 1999,
              pravidelné pokrytí otevřeného oceánu je nejúplnější přibližně od roku 2005 a běžná měřicí hloubka
              dosahuje 2 000 metrů. K dispozici jsou rychlá provozní data i později zkontrolované verze.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="WEB_International_Argo_Program_Data_from_GDACs_b2737bdf">Stažení profilů Argo</SourceLink>{" "}
              ·{" "}
              <SourceLink id="DOI_10_5670_oceanog_2009_36">Popis programu</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>Globální obsah tepla podle NOAA</h3>
            <p>
              Americký Národní úřad pro oceán a atmosféru, zkráceně NOAA, zveřejňuje hotové hodnoty od roku 1955
              do současnosti pro 0–700 a 0–2 000 metrů, světový oceán i jednotlivé oceánské pánve. Součástí jsou
              tříměsíční, roční a pětileté výpočty, mřížková data, dokumentace algoritmu a archivované verze.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="WEB_NOAA_Global_Ocean_Heat_Content_CDR_f355b1a3">
                Data a dokumentace NOAA
              </SourceLink>{" "}
              · <SourceLink id="DOI_10_7289_v53f4mvp">Trvalý záznam datového souboru</SourceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>IAPv4</h3>
            <p>
              Měsíční teplota a obsah tepla na mřížce 1° × 1° od roku 1940 do hloubky 6 000 metrů; autoři
              označují období přibližně od roku 1957 za spolehlivější. Verze popsaná v roce 2024 používá přes
              17,6 milionu teplotních profilů do září 2023 a odděleně nabízí teplotu i vypočtený obsah tepla.
            </p>
            <p className="article-data-item__links">
              <SourceLink id="DOI_10_12157_iocas_20240117_001">
                Stažení obsahu tepla
              </SourceLink>{" "}
              ·{" "}
              <SourceLink id="DOI_10_5194_essd_16_3517_2024">
                Metoda a vyhodnocení IAPv4
              </SourceLink>
            </p>
          </section>
        </div>

        <h2>Srovnání výpočtů</h2>
        <p>
          Křivky různých výzkumných skupin často vycházejí ze stejných archivů profilů, ale jinak vybírají data,
          opravují přístroje a doplňují prázdná místa. Lyman a kol. v roce 2010 porovnávali tehdejší výpočty se
          zvláštním důrazem na opravy XBT. Boyer a kol. v roce 2016 drželi vstupní měření stejná a měnili postupně
          prostorový výpočet, opravy XBT a referenční pole. Tak lze určit, která část rozdílu vzniká až při
          zpracování a jakou míru nezávislosti jednotlivé výsledky skutečně mají.{" "}
          <SourceLink id="DOI_10_1038_nature09043">Lyman et al., 2010</SourceLink> a{" "}
          <SourceLink id="DOI_10_1175_jcli_d_15_0801_1">Boyer et al., 2016</SourceLink>
        </p>

        <p>
          Současná práce Pan a kol. porovnává tři druhy výpočtu pro horních 2 000 metrů. Institut fyziky atmosféry
          Čínské akademie věd, v grafu označený IAP/CAS, vytváří prostorovou mapu z pozorovaných profilů. Italský
          Institut mořských věd a služba Copernicus Marine používají oceánskou reanalýzu, tedy spojení měření s
          numerickým modelem. Všechny tři výsledky ukazují pokračující přírůstek mezi roky 2024 a 2025, jejich
          absolutní hodnoty však nelze položit přes sebe bez sjednocení referenčního stavu a metodiky.{" "}
          <SourceLink id="DOI_10_1007_s00376_026_5876_0">Pan et al., 2026</SourceLink>
        </p>

        <h2 id="pozorovani">Pozorování</h2>
        <p className="article-prose__intro">
          Globální výpočty z teplotních profilů ukazují dlouhodobý přírůstek obsahu tepla v horních 2 000
          metrech oceánu. Směr změny se objevuje ve všech současných datových souborech, i když se jejich roční
          hodnoty a uvedené nejistoty liší. Nejnovější úplný rok v tomto článku je 2025.
        </p>

        <p>
          Graf níže ukazuje jediný konkrétní výpočet: IAP/CAS pro vrstvu od hladiny do 2 000 metrů. Sloupce jsou
          roční hodnoty, černá křivka měsíční hodnoty a zelené úsečky 95% intervaly nejistoty ve vybraných letech.
          Nula odpovídá průměru let 1981–2010. Modré sloupce proto znamenají méně a červené více tepla než tento
          průměr; barva sama neoznačuje příčinu změny.
        </p>

        <p>
          Hodnota 300 ZJ v tomto grafu tedy neznamená, že horní část oceánu obsahuje celkem 300 ZJ. Znamená, že
          vrstva od hladiny do 2 000 metrů obsahuje přibližně o 300 ZJ více tepla než v průměru let 1981–2010.
          Měřítko lze převést také na teplotu. Japonská meteorologická agentura ve svém samostatném globálním
          výpočtu uvádí, že přírůstek 63,9 ZJ za desetiletí odpovídá zvýšení průměrné teploty vrstvy 0–2 000 metrů
          o 0,022 °C za desetiletí. Ve stejném přibližném poměru představuje 300 ZJ průměrné zvýšení teploty této
          celé vrstvy asi o 0,10 °C. Jde o průměr přes světový oceán a všechny zahrnuté hloubky; změna na
          jednotlivých místech může být větší, menší nebo může mít opačné znaménko.{" "}
          <SourceLink id="WEB_data_jma_go_jp_Japan_Meteorological_Agency_Global_ocean_heat_co_b8363b79">
            Japan Meteorological Agency
          </SourceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div
            className="article-figure__scroll"
            tabIndex={0}
            aria-label="Časový graf obsahu tepla, na úzké obrazovce vodorovně posuvný"
          >
            <Image
              className="article-figure__media"
              src="/media/ocean-heat/pan-2026-ohc-upper-2000m.png"
              alt="Roční a měsíční změna obsahu tepla v horních dvou tisících metrech oceánu podle IAP/CAS od roku 1958 do roku 2025."
              width={835}
              height={430}
              unoptimized
            />
          </div>
          <div className="article-figure__key" aria-label="Vysvětlení grafu">
            <p>
              <strong>OHC anomaly:</strong> změna obsahu tepla vůči průměru 1981–2010.
            </p>
            <p>
              <strong>ZJ:</strong> zettajoule, 10<sup>21</sup> joulů.
            </p>
            <p>
              <strong>IAP/CAS:</strong> Institute of Atmospheric Physics, Chinese Academy of Sciences.
            </p>
            <p>
              <strong>Zelené úsečky:</strong> autory uvedený 95% interval nejistoty.
            </p>
          </div>
          <figcaption>
            Globální změna obsahu tepla v horních 2 000 metrech oceánu, 1958–2025. Výřez z obr. 1a; popisky v
            původním grafu zůstaly anglicky. Zdroj: Pan et al., 2026. Ořez je úpravou podle licence{" "}
            <SourceLink id="WEB_Creative_Commons_Deed_Attribution_4_0_International_Creative_Comm_f3dd853d">CC BY 4.0</SourceLink>.{" "}
            <SourceLink id="DOI_10_1007_s00376_026_5876_0">
              Původní článek a celý obrázek
            </SourceLink>
          </figcaption>
        </figure>

        <p>
          Na začátku grafu, v roce 1958, leží roční hodnota přibližně 130 ZJ pod průměrem let 1981–2010; v roce
          2025 přesahuje 300 ZJ nad tímto průměrem. Rozdíl mezi prvním a posledním rokem je tedy zhruba 460 ZJ.
          Při stejném orientačním převodu to odpovídá zvýšení průměrné teploty vrstvy 0–2 000 metrů asi o 0,16 °C.
          Změna referenčního období by posunula všechny sloupce nahoru nebo dolů, tento rozdíl mezi roky by však
          zůstal stejný.
        </p>

        <p>
          Rok 2025 je v tomto výpočtu nejvyšším rokem od začátku zobrazeného období. IAP/CAS uvádí proti roku 2024
          přírůstek přibližně 23 ± 8 ZJ v horních 2 000 metrech, což ve stejném měřítku představuje asi 0,008 °C
          průměrovaných přes celou vrstvu. Výsledky italské reanalýzy a služby Copernicus Marine rovněž ukazují,
          že se obsah tepla mezi roky 2024 a 2025 dále zvětšil. Tento údaj popisuje meziroční rozdíl konkrétních
          produktů, nikoli přímo změřené množství jediným přístrojem.{" "}
          <SourceLink id="DOI_10_1007_s00376_026_5876_0">Pan et al., 2026</SourceLink>
        </p>

        <p>
          Delší výpočet IAPv4 dovoluje oddělit dvě hloubkové vrstvy. Pro roky 1955–2023 autoři uvádějí průměrný
          přírůstek 4,4 ± 0,2 ZJ za rok v horních 700 metrech a 2,0 ± 0,1 ZJ za rok mezi 700 a 2 000 metry. Součet
          pro 0–2 000 metrů je 6,4 ± 0,3 ZJ za rok; uvedené intervaly mají v této práci 90% hladinu spolehlivosti.
          Výsledek tedy není omezen pouze na vodu těsně pod hladinou. Zároveň stále popisuje horní 2 000 metrů,
          nikoli celý oceán až ke dnu.{" "}
          <SourceLink id="DOI_10_5194_essd_16_3517_2024">Cheng et al., 2024</SourceLink>
        </p>

        <p>
          Globální součet zachycuje celkový výsledek, zatímco jednotlivé oblasti se mění různým směrem a rychlostí.
          Následující mapa zobrazuje vývoj vrstvy 0–2 000 metrů v letech 1993–2024. Oranžová místa měla kladný
          trend, modrá záporný a šedé oblasti změnu, která v tomto výpočtu nebyla statisticky významná. Jednotkou
          je watt na metr čtvereční, tedy průměrná rychlost změny za celé zobrazené období.
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/ocean-heat/noaa-ohc-trend-1993-2024.png"
            alt="Mapa trendu obsahu tepla v oceánu od hladiny do dvou tisíc metrů v letech 1993 až 2024, s kladnými hodnotami oranžově a zápornými modře."
            width={1400}
            height={1200}
            unoptimized
          />
          <figcaption>
            Změna obsahu tepla ve vrstvě 0–2 000 metrů, 1993–2024. Oranžová označuje kladný a modrá záporný trend;
            šedé oblasti nemají v tomto výpočtu statisticky významnou změnu. Vizualizace: NOAA Climate.gov; data:
            Pacific Marine Environmental Laboratory (PMEL) / John Lyman. Nezměněný materiál NOAA, veřejná doména.{" "}
            <SourceLink id="WEB_content_drupal_climate_gov_Climate_Change_Ocean_Heat_Content_a227e082">
              Původní mapa a popis
            </SourceLink>
          </figcaption>
        </figure>

        <p>
          Na mapě jsou vedle rozsáhlých oblastí s přírůstkem také oblasti s poklesem. Globální hodnota může růst,
          pokud kladné změny po sečtení převáží záporné. Tento prostorový obraz je samostatnou částí pozorování:
          jedna globální křivka zachycuje celkový součet, mapa ukazuje, kde se tento součet skládá.
        </p>

        <p>
          Voda pod 2 000 metry se sleduje jinou a řidší sítí. Hlavním zdrojem jsou opakované lodní profily až ke
          dnu a novější plováky Deep Argo. Johnson a Purkey v roce 2024 spojili dostupná lodní měření s Deep Argo
          a zjistili kladnou globální změnu jak mezi 2 000 a 4 000 metry, tak mezi 4 000 a 6 000 metry; jejich
          mapy současně obsahují regiony s ochlazením. Tento výsledek je veden odděleně, protože má jiné období,
          pokrytí i nejistotu než výpočty horních 2 000 metrů.{" "}
          <SourceLink id="DOI_10_1029_2024gl111229">
            Johnson &amp; Purkey, 2024
          </SourceLink>
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            Globální obsah tepla v oceánu dlouhodobě roste od hladiny do hloubky 2 000 metrů. Mezi roky 1958 a 2025
            se v této vrstvě zvýšil přibližně o 460 zettajoulů, což odpovídá zvýšení její průměrné teploty asi o
            0,16 °C. Přírůstek probíhal v horních 700 metrech i mezi 700 a 2 000 metry; v letech 1955–2023 připadalo
            v průměru 4,4 zettajoulu ročně na horní a 2,0 zettajoulu ročně na hlubší z těchto vrstev. Rok 2025 dosáhl
            nejvyšší hodnoty celého záznamu a proti roku 2024 přibylo přibližně 23 zettajoulů. Jednotlivé části oceánu
            se mění různými směry a rychlostmi, ale jejich globální součet roste. Kladná celková změna pokračuje také
            pod hloubkou 2 000 metrů.
          </p>
        </div>

        <h2>Prameny, data a licence</h2>
        <div className="article-source-groups">
          <section>
            <h3>Historické a primární práce</h3>
            <ul>
              <li>
                <SourceLink id="WEB_escholarship_org_Report_on_the_Deep_Sea_Temperature_Observations_8c66444c">
                  Report on the Deep-Sea Temperature Observations of Ocean-Water
                </SourceLink>
                , pozorování expedice HMS Challenger z let 1873–1876.
              </li>
              <li>
                Spilhaus, A. F. (1938):{" "}
                <SourceLink id="WEB_elischolar_library_yale_edu_A_bathythermograph_d06b1b5c">
                  A bathythermograph
                </SourceLink>
                .
              </li>
              <li>
                Levitus, S. et al. (2000):{" "}
                <SourceLink id="DOI_10_1126_science_287_5461_2225">
                  Warming of the World Ocean
                </SourceLink>
                .
              </li>
              <li>
                Domingues, C. M. et al. (2008):{" "}
                <SourceLink id="DOI_10_1038_nature07080">
                  Improved estimates of upper-ocean warming and multi-decadal sea-level rise
                </SourceLink>
                .
              </li>
              <li>
                Gouretski, V. V. &amp; Koltermann, K. P. (2007):{" "}
                <SourceLink id="DOI_10_1029_2006gl027834">
                  How much is the ocean really warming?
                </SourceLink>
                .
              </li>
              <li>
                Levitus, S. et al. (2009):{" "}
                <SourceLink id="DOI_10_1029_2008gl037155">
                  Global ocean heat content 1955–2008 in light of recently revealed instrumentation problems
                </SourceLink>
                .
              </li>
              <li>
                Lyman, J. M. et al. (2010):{" "}
                <SourceLink id="DOI_10_1038_nature09043">
                  Robust warming of the global upper ocean
                </SourceLink>
                .
              </li>
              <li>
                Levitus, S. et al. (2012):{" "}
                <SourceLink id="DOI_10_1029_2012gl051106">
                  World ocean heat content and thermosteric sea level change (0–2000 m), 1955–2010
                </SourceLink>
                .
              </li>
              <li>
                Cheng, L. et al. (2017):{" "}
                <SourceLink id="DOI_10_1126_sciadv_1601545">
                  Improved estimates of ocean heat content from 1960 to 2015
                </SourceLink>
                .
              </li>
              <li>
                Johnson, G. C. &amp; Purkey, S. G. (2024):{" "}
                <SourceLink id="DOI_10_1029_2024gl111229">
                  Refined estimates of global ocean deep and abyssal decadal warming trends
                </SourceLink>
                .
              </li>
              <li>
                Pan, Y. et al. (2026):{" "}
                <SourceLink id="DOI_10_1007_s00376_026_5876_0">
                  Ocean Heat Content Sets Another Record in 2025
                </SourceLink>
                .
              </li>
            </ul>
          </section>

          <section>
            <h3>Metodické práce</h3>
            <ul>
              <li>
                Roemmich, D. et al. (2009):{" "}
                <SourceLink id="DOI_10_5670_oceanog_2009_36">
                  The Argo Program: Observing the Global Ocean with Profiling Floats
                </SourceLink>
                .
              </li>
              <li>
                Boyer, T. P. et al. (2016):{" "}
                <SourceLink id="DOI_10_1175_jcli_d_15_0801_1">
                  Sensitivity of Global Upper-Ocean Heat Content Estimates to Mapping Methods, XBT Bias
                  Corrections, and Baseline Climatologies
                </SourceLink>
                .
              </li>
              <li>
                Ishii, M. et al. (2017):{" "}
                <SourceLink id="DOI_10_2151_sola_2017_030">
                  Accuracy of Global Upper Ocean Heat Content Estimation Expected from Present Observational Data
                  Sets
                </SourceLink>
                .
              </li>
              <li>
                Cheng, L. et al. (2024):{" "}
                <SourceLink id="DOI_10_5194_essd_16_3517_2024">
                  IAPv4 ocean temperature and ocean heat content gridded dataset
                </SourceLink>
                .
              </li>
            </ul>
          </section>

          <section>
            <h3>Data ke stažení</h3>
            <ul>
              <li>
                <SourceLink id="WEB_NOAA_World_Ocean_Database_3d4b1d70">
                  World Ocean Database 2023
                </SourceLink>
                : jednotlivé profily a metadata.
              </li>
              <li>
                <SourceLink id="WEB_International_Argo_Program_Data_from_GDACs_b2737bdf">
                  Globální datová centra Argo
                </SourceLink>
                : rychlé i odborně zkontrolované profily.
              </li>
              <li>
                <SourceLink id="WEB_NOAA_Global_Ocean_Heat_Content_CDR_f355b1a3">
                  Globální obsah tepla podle NOAA
                </SourceLink>
                : hotové globální a oblastní hodnoty od roku 1955.
              </li>
              <li>
                <SourceLink id="WEB_data_jma_go_jp_Japan_Meteorological_Agency_Global_ocean_heat_co_b8363b79">
                  Globální obsah tepla a průměrná teplota podle JMA
                </SourceLink>
                : aktuální hodnoty pro vrstvu 0–2 000 metrů a textový soubor ke stažení.
              </li>
              <li>
                <SourceLink id="DOI_10_12157_iocas_20240117_001">IAPv4 OHC</SourceLink>: mřížková
                data a globální součty.
              </li>
              <li>
                <SourceLink id="DOI_10_57760_sciencedb_35026">
                  Data použitá pro vyhodnocení roku 2025
                </SourceLink>
                .
              </li>
            </ul>
          </section>

          <section>
            <h3>Obrázky a práva k použití</h3>
            <ul>
              <li>
                Fotografie plováku: Tomas Szumski / Marine Institute / Argo Program.{" "}
                <SourceLink id="WEB_International_Argo_Program_Photos_13d900af">
                  Argo dovoluje použití na webech při uvedení kreditu
                </SourceLink>
                .
              </li>
              <li>
                Graf 1958–2025: Pan et al. (2026), výřez z obr. 1a,{" "}
                <SourceLink id="WEB_Creative_Commons_Deed_Attribution_4_0_International_Creative_Comm_f3dd853d">CC BY 4.0</SourceLink>.
              </li>
              <li>
                Mapa 1993–2024: NOAA Climate.gov / PMEL, nezměněný materiál NOAA ve veřejné doméně.{" "}
                <SourceLink id="WEB_NOAA_NOAA_s_National_Ocean_Service_About_Us_4ba21b52">
                  Podmínky NOAA
                </SourceLink>
                .
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
