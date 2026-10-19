import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import { Equation, InlineMath } from "./Equation";
import example from "../../public/data/methods/phenology-monitoring/example.json";

const dataPath = "/data/methods/phenology-monitoring";
const shortDate = (iso: string) => {
  const [, month, day] = iso.split("-").map(Number);
  return `${day}. ${month}.`;
};

export function PhenologyMonitoringArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Fenologie</dt><dd>Studium načasování opakujících se událostí v životě rostlin a živočichů a jejich vztahu k prostředí.</dd></div>
          <div><dt>Fenofáze</dt><dd>Vymezená část vývoje nebo aktivity organismu, rozpoznatelná podle určených znaků.</dd></div>
          <div><dt>Stav fáze</dt><dd>Zápis, zda sledovaná fáze při návštěvě právě probíhá. Odlišuje se od její intenzity, například množství květů.</dd></div>
          <div><dt>Pořadový den roku</dt><dd>Datum vyjádřené počtem dní od začátku roku. První leden má číslo 1.</dd></div>
        </dl>
        <p className="article-glossary__note">Společná pravidla určují, na jaké znaky se dívat. Opakované návštěvy ukazují, kdy se tyto znaky objevily.</p>
      </aside>

      <div className="article-prose">
        <h2>Jak se sleduje sezónní vývoj rostlin a živočichů</h2>
        <p className="article-prose__intro">
          Standardizované fenologické pozorování je opakované sledování vývojových fází rostlin
          a aktivity živočichů podle společných pravidel. Zjišťuje, kdy se objevují listy,
          otevírají květy, dozrávají plody nebo nastávají další pravidelně se vracející události.
          Spojením pozorování z více let poznáváme, jak se jejich načasování mění.{" "}
          <SourceLink id="DOI_10_1007_s00484_014_0789_5">(Denny a kol., popis metody)</SourceLink>
        </p>
        <p>
          V průběhu roku se mění podmínky, ve kterých organismy žijí. Na jaře například teplo
          podporuje růst listů, jejichž základy byly přes zimu uložené v pupenech. Jak list
          vyrůstá a rozvíjí se, mění se i jeho vzhled. Právě takové viditelné změny nám dovolují
          rozpoznat postup vývoje a přiřadit mu datum. Vymezenou část vývoje nazýváme <strong>fenofází</strong>.
          Může jí být rašení pupenů nebo přítomnost rozvinutých listů. Její hranice určujeme
          popisem znaků, které má pozorovatel hledat.{" "}
          <SourceLink id="2016_USANPN_Focus_On_Leaves">(USA-NPN: vývoj listových pupenů)</SourceLink>
          <SourceLink id="DOI_10_1111_gcb_15000">(Menzel a kol., vliv teploty na jarní vývoj)</SourceLink>
        </p>
        <p>
          Podrobně projdeme sledování označených rostlin v americké národní fenologické síti
          USA National Phenology Network, zkráceně <strong>USA-NPN</strong>. Její program
          Nature’s Notebook používá při každé návštěvě zápis, zda fáze právě probíhá.
          Tento postup a jeho biologické souvislosti popsali{" "}
          <SourceLink id="DOI_10_1007_s00484_014_0789_5">Denny a kolegové (2014)</SourceLink>.
          Pozorování se ukládají do veřejné databáze, která přijímá i údaje spolupracujících výzkumných sítí.
        </p>

        <h3>Jak vymezíme, co budeme pozorovat</h3>
        <p>
          Nejprve vybereme místo a rostliny, ke kterým se budeme vracet. Určíme jejich druh
          a každému sledovanému jedinci přidělíme trvalé označení. Díky němu spojujeme jednotlivé
          návštěvy do záznamu o téže rostlině. Výběr přizpůsobíme otázce výzkumu. Chceme-li poznat
          vývoj v určitém porostu, sledujeme v něm více jedinců. Chceme-li porovnat různá prostředí,
          zařadíme rostliny z míst, která tato prostředí zastupují.{" "}
          <SourceLink id="DOI_10_3133_ofr20181060">(USGS, výběr míst a rostlin)</SourceLink>
        </p>
        <p>
          Pro vybraný druh pak použijeme společný popis sledované fáze. U fáze nazvané
          v USA-NPN <strong>Leaves</strong> hledáme alespoň jeden živý rozvinutý list.
          Za rozvinutý považujeme list, který už celý vyšel z pupenu. Je vidět i místo jeho připojení
          ke stonku, přímo nebo prostřednictvím stopky zvané řapík. List přitom může dál růst. Tento znak nám umožňuje
          rozhodnout, zda už fáze začala, i když koruna ještě zdaleka není plně olistěná.
          <SourceLink id="2016_USANPN_Focus_On_Leaves"> Pokyny USA-NPN k pozorování listů</SourceLink>{" "}
          doplňují definice fotografiemi jednotlivých stavů.
        </p>
        <p>
          S popisem se seznámíme přímo u sledované rostliny. Prohlédneme její pupeny a listy
          a porovnáme je s určujícími znaky a referenčními fotografiemi. Při společném zácviku
          si pozorovatelé vyjasní, co už definici splňuje. Tím získají společné měřítko pro další
          návštěvy. Při každé další návštěvě se řídí toutéž definicí fáze. Program školení
          a další postupy sjednocení popisuje{" "}
          <SourceLink id="DOI_10_3133_ofr20181060">metodická dokumentace USA-NPN (Rosemartin a kol., 2018)</SourceLink>.
        </p>
        <figure className="article-figure">
          <Image className="article-figure__media" src="/media/phenology-monitoring/nps-field-observations.jpg"
            width={1280} height={960} unoptimized
            alt="Skupina pozorovatelů mezi kvetoucími rostlinami v horách. Jedna účastnice prohlíží rostlinu, druhá zapisuje údaje do formuláře." />
          <figcaption>
            Fenologické pozorování v národním parku Great Smoky Mountains.
            Pracovníci NPS a členové AmeriCorps prohlížejí rostliny a zaznamenávají údaje do formuláře.
            Foto <SourceLink id="2021_NPS_Phenology_Field_Photo">National Park Service</SourceLink>,
            zveřejněno v únoru 2021. Volné dílo (Public Domain), datum pořízení neuvedeno.
          </figcaption>
        </figure>

        <h3>Co zapíšeme při jedné návštěvě</h3>
        <p>
          Při návštěvě prohlédneme označenou rostlinu a pro každou sledovanou fázi rozhodneme,
          zda právě probíhá. U rozvinutých listů zapíšeme <strong>ano</strong>, jakmile najdeme
          list splňující definici. Pokud rostlinu prohlédneme a takový list nenajdeme, zapíšeme <strong>ne</strong>.
          Když stav nedokážeme posoudit, použijeme <strong>nevím</strong>. Každý zápis patří
          ke konkrétní rostlině, fázi a datu návštěvy. Jedno „ano“ tak říká, že na dané rostlině
          byly při této návštěvě živé rozvinuté listy.{" "}
          <SourceLink id="DOI_10_3133_ofr20181060">(USGS, zaznamenávání fenofází)</SourceLink>
        </p>
        <p>
          Sledované fáze posuzujeme samostatně. Na jedné větvi už mohou být rozvinuté listy,
          zatímco na jiné se pupeny teprve otevírají. Obě fáze pak současně dostanou „ano“.
          Pro každou z nich hledáme její vlastní znaky na celé rostlině. K rozvinutým listům
          se budeme dál vracet po celou dobu, kdy jsou přítomné, včetně období, kdy už dorostly.
          Tento způsob čtení definic vysvětlují{" "}
          <SourceLink id="2016_USANPN_Focus_On_Leaves">pokyny k překrývajícím se listovým fázím</SourceLink>.
        </p>


        <h3>Jak z návštěv určíme nástup fáze</h3>
        <p>
          K rostlině se vracíme už před očekávaným nástupem fáze a potom v průběhu sezóny.
          USA-NPN doporučuje alespoň jednu návštěvu týdně a při rychlých změnách dvě až tři.
          Častější pozorování umožňuje zachytit změnu v kratším časovém rozmezí.
          Toto doporučení uvádějí <SourceLink id="DOI_10_5334_cstp_464">Crimmins a Posthumus (2022)</SourceLink>{" "}
          v popisu pozorování v Nature’s Notebook.
        </p>
        <p>
          Po seřazení zápisů podle data najdeme první „ano“ a poslední „ne“, které mu předcházelo.
          Při dřívější návštěvě fáze ještě neprobíhala, při pozdější už ano. Její nástup proto
          klademe mezi tyto návštěvy. Délku tohoto rozmezí získáme odečtením obou dat.
          Počítáme přitom s tím, že pozorovatel fázi správně rozpoznal a že mezi návštěvami
          nezůstalo nezachycené její dřívější opakování.{" "}
          <SourceLink id="DOI_10_3133_ofr20181060">(USGS, zpracování stavových záznamů)</SourceLink>
        </p>
        <p>
          Pro výpočty můžeme datum vyjádřit jako <strong>pořadový den roku</strong>.
          První leden označíme číslem 1 a každý následující den číslo zvýšíme o jednu.
          V přestupném roce započítáme i 29. únor. Označíme-li den posledního „ne“ jako{" "}
          <InlineMath tex={String.raw`d_{\mathrm{ne}}`} /> a den prvního „ano“ jako{" "}
          <InlineMath tex={String.raw`d_{\mathrm{ano}}`} />, délka rozmezí je
        </p>
        <Equation tex={String.raw`\Delta t = d_{\mathrm{ano}} - d_{\mathrm{ne}}`} />
        <p>
          Symbol <InlineMath tex={String.raw`\Delta t`} /> označuje počet dní mezi návštěvami.
          Oba pořadové dny musí v tomto zápisu patřit do stejného roku. Výsledek říká,
          jak dlouhé období nástupu jsme návštěvami ohraničili. Jako jednotné datum nástupu
          používají souhrnné údaje USA-NPN první zaznamenané „ano“ a vedle něj uvádějí,
          kolik dní uplynulo od předchozího „ne“. Takto je definuje{" "}
          <SourceLink id="DOI_10_3133_ofr20181060">dokumentace datových výstupů</SourceLink>.
        </p>
        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Postup získání data nástupu fenofáze">
            <div><span>1</span><strong>Stejná rostlina</strong><small>Označení spojuje opakované návštěvy.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Určený znak</strong><small>Definice říká, kdy fáze probíhá.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Datované zápisy</strong><small>Při návštěvě zaznamenáme ano, ne nebo nevím.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Nástup fáze</strong><small>Poslední ne a první ano ohraničí změnu.</small></div>
          </div>
          <figcaption>
            Schéma opakovaného sledování rostliny. Šipky ukazují, jak určení jedince a fáze
            umožní spojit jednotlivé zápisy a získat časové rozmezí nástupu.{" "}
            <SourceLink id="DOI_10_3133_ofr20181060">(USGS: fenologické pozorování)</SourceLink>
          </figcaption>
        </figure>
        <p>
          Pozorování po prvním „ano“ doplní průběh sezóny. Poslední „ano“ a následující „ne“
          obdobně ohraničí ukončení fáze. Pokud se fáze později vrátí, nový přechod z „ne“
          na „ano“ založí další období jejího výskytu. Tím lze zachytit i opakované kvetení
          nebo nové rašení listů. Úplný výstup tedy tvoří jak původní datované zápisy,
          tak údaje o nástupu a konci jednotlivých období.{" "}
          <SourceLink id="DOI_10_1007_s00484_014_0789_5">(Denny a kol., stavové pozorování)</SourceLink>
        </p>
        <p>
          Zápis přítomnosti lze doplnit údajem o <strong>intenzitě</strong>, tedy o tom, v jakém
          rozsahu fáze probíhá. U kvetení může jít o počet otevřených květů nebo jejich podíl
          ze všech květů na rostlině. Použijeme přitom stupnici určenou pro daný druh a fázi.
          Opakované „ano“ zachytí dobu kvetení, zatímco údaje o množství květů ukážou,
          jak kvetení během této doby sílí a slábne. Obě části záznamu rozlišuje{" "}
          <SourceLink id="DOI_10_1007_s00484_014_0789_5">metodika Denny a kolegů</SourceLink>.
        </p>

        <h3>Co takto zjistíme o klimatu</h3>
        <p>
          Opakováním postupu v dalších letech získáme kalendář vývoje sledovaných rostlin.
          U stejného druhu a stejné fáze porovnáváme, zda nástup přichází dříve, nebo později.
          Záznamy z více míst pak ukážou, jak se načasování liší mezi oblastmi. Pro srovnání
          spojíme údaje se stejným významem fáze a zachováme informaci o zastoupených rostlinách,
          místech a letech. Právě tuto cestu sleduje článek o <Link href="/pozorovani/fenologicke-posuny">fenologických posunech</Link>.{" "}
          <SourceLink id="DOI_10_1111_gcb_15000">(Menzel a kol., metody)</SourceLink>
        </p>
        <p>
          Vztah ke klimatu zkoumáme připojením údajů o podmínkách, za kterých vývoj probíhal.
          U jarních fází porovnáme jejich data například s teplotou před nástupem.
          Oteplení může urychlit růst, důležitý je však i předchozí zimní chlad,
          který u mnoha dřevin pomáhá ukončit období vegetačního klidu. Účinky těchto podmínek
          rozlišujeme porovnáním více sezón a míst. Tak zjišťujeme, která část proměnlivosti
          načasování souvisí s teplotou.{" "}
          <SourceLink id="DOI_10_1111_gcb_15000">(Menzel a kol., diskuse)</SourceLink>
        </p>
        <p>
          <SourceLink id="DOI_10_1111_gcb_15000">Menzel a kolegové (2020)</SourceLink>{" "}
          tento postup použili na záznamy z Německa, Rakouska a Švýcarska z let 1951–2018.
          Zahrnuli přes 4,2 milionu pozorování a pro jednotlivé druhy, fáze a stanice vybrali
          záznamy trvající alespoň 30 let. Změny načasování porovnali se změnami teplot.
          U planě rostoucích rostlin zjistili převahu časnějších jarních a letních fází
          a silnou souvislost těchto posunů se zimním a jarním oteplováním.
          Fenologická pozorování zde dodala biologická data, teplotní měření umožnila zkoumat příčinu jejich změn.
        </p>

        <h3>Starší záznamy a další způsoby sledování</h3>
        <p>
          Zaznamenávání přírodního kalendáře má dlouhou historii. Spis{" "}
          <SourceLink id="WEB_db_huntbot_org_Original_Linnaean_Dissertations_Hunt_Institute_f_b8827d4c">Calendarium Florae z roku 1756</SourceLink>{" "}
          uspořádal do ročních období a měsíců kvetení rostlin pozorovaných v Uppsale roku 1755.
          Pozdější sítě rozšířily sledování na mnoho míst a sjednocovaly popisy fází.
          Americká databáze dnes obsahuje i záznamy šeříků a zimolezů od roku 1955.
          Program Nature’s Notebook k nim od roku 2009 přidává opakované zápisy stavu podle
          společné metodiky. Rozsah těchto souborů uvádí{" "}
          <SourceLink id="DOI_10_5066_f78s4n1v">USA-NPN</SourceLink>.
        </p>
        <p>
          V některých pozorovacích programech se zapisuje přímo datum dosažení určitého vývojového
          stupně. <SourceLink id="WEB_openagrar_de_Meier_2001_stupnice_BBCH_f90d8917">Meierova příručka (2001)</SourceLink>{" "}
          popisuje mezinárodní stupnici, která těmto stupňům přiděluje číselné kódy
          a popisy pro jednotlivé skupiny rostlin.
          Číslo označuje stav vývoje. Opakované zápisy „ano“ a „ne“ naproti tomu uchovávají
          stav fáze při každé návštěvě a dovolují její nástup vyhledat později.
          Při spojování obou typů dat proto nejprve porovnáme biologický význam jejich definic.
        </p>
        <p>
          U živočichů se v Nature’s Notebook obvykle sleduje místo a výskyt daného druhu,
          protože se jedinci pohybují. Pozorovatel zaznamená přítomnost zvířat a projevy,
          jako je volání nebo rozmnožování. K záznamu patří i způsob a délka hledání.
          Údaje tak říkají, co bylo při vymezeném pozorování zjištěno. Rozdíl mezi sledováním
          stálých rostlin a živočichů na lokalitě podrobně vymezuje{" "}
          <SourceLink id="DOI_10_3133_ofr20181060">metodika USA-NPN</SourceLink>.
        </p>

        <h2>Nejistoty a ověření pozorování</h2>
        <p>
          Výsledek ovlivňuje rozpoznání fáze, odstup návštěv a výběr sledovaných organismů.
          Datum prvního „ano“ může za skutečným nástupem zaostávat, zvláště při řídkém pozorování.
          <SourceLink id="DOI_10_5334_cstp_464"> Crimmins a Posthumus (2022)</SourceLink>{" "}
          porovnali záznamy pozorovatelů šeříků: u těch, kteří otevřeli včasnou e-mailovou
          připomínku, trvalo rozmezí mezi posledním „ne“ a prvním „ano“ v průměru 5,2 dne,
          u příjemců, kteří ji neotevřeli, 7,0 dne. Porovnání ukazuje význam četnosti návštěv,
          samo však nedokazuje, že rozdíl způsobila připomínka.
        </p>
        <details className="method-details">
          <summary>Podrobnosti o nejistotách a ověření</summary>
          <h3>Rozpoznání fáze a časové rozmezí</h3>
          <p>
            Drobné rozvíjející se listy vysoko v koruně lze přehlédnout. Souběžné hodnocení
            téže rostliny více pozorovateli nebo posouzení fotografie pomáhá odhalit rozdílné
            čtení znaků. Porovnání je nejsilnější, když hodnotitelé rozhodují samostatně.
            Stále však sdílejí definici fáze a při hodnocení stejného snímku také jeho omezený
            pohled. Postupy školení a kontroly uvádí{" "}
            <SourceLink id="DOI_10_3133_ofr20181060">dokumentace USA-NPN</SourceLink>.
          </p>
          <p>
            Chybějící návštěva ani odpověď „nevím“ nedokládají nepřítomnost fáze.
            Pokud prvnímu „ano“ nepředchází „ne“, nemáme spodní hranici nástupu.
            Rozmezí mezi návštěvami vyjadřuje časové pokrytí, nikoli statistický interval
            spolehlivosti. Denní rozlišení databáze také neznamená, že datum známe s přesností
            jednoho dne. Chybná odpověď nebo nezachycené opakování fáze může změnit i určené hranice.{" "}
            <SourceLink id="DOI_10_3133_ofr20181060">(USGS, intervaly mezi návštěvami)</SourceLink>
          </p>
          <h3>Co skutečně ověřovalo porovnání šeříků</h3>
          <p>
            Studie Crimmins a Posthumus použila pozorování z let 2018–2020 a porovnala tři
            skupiny podle doručení a otevření připomínky. U skupiny bez doručené zprávy činilo
            průměrné rozmezí 6,5 dne. Hodnoty 5,2, 7,0 a 6,5 dne pocházejí z výsledků
            pro rašení listových pupenů, z obrázku 2a. Výběr zahrnoval případy, kdy teplotní model
            předpověděl nástup nejpozději v den jeho nahlášení, a vylučoval výrazně odlehlé hodnoty.{" "}
            <SourceLink id="DOI_10_5334_cstp_464">(Crimmins a Posthumus, obr. 2a a metody)</SourceLink>
          </p>
          <p>
            Skupiny nevznikly náhodným rozdělením a pozorovatelé se mohli lišit i motivací.
            Studie zároveň porovnávala hlášená data s modelem, který sloužil k načasování
            připomínek. To je společná reference, nikoli nezávislé terénní určení skutečného
            data nástupu. Uváděné délky rozmezí proto nepřevádíme na obecnou chybu metody.{" "}
            <SourceLink id="DOI_10_5334_cstp_464">(Crimmins a kol., obr. 2a)</SourceLink>
          </p>
          <h3>Výběr míst a změny v čase</h3>
          <p>
            Rostliny na osluněném okraji lesa mohou mít jiný průběh vývoje než rostliny uvnitř.
            Proměna výběru míst nebo četnosti návštěv tak může posunout souhrnný výsledek.
            Dlouhodobé srovnání proto prověřuje stálost výběru, definic a způsobu pozorování.
            U živočichů navíc nezjištěný výskyt závisí na délce hledání, počasí a možnosti
            zvíře zahlédnout nebo slyšet. Samotný první záznam druhu nemusí být jeho skutečným příchodem.{" "}
            <SourceLink id="DOI_10_1007_s00484_014_0789_5">(Denny a kol., výběr a sledování organismů)</SourceLink>
          </p>
          <p>
            Určení klimatické příčiny vyžaduje další analýzu. Načasování ovlivňuje také délka dne,
            dostupnost vody a u pěstovaných rostlin odrůda nebo zásahy člověka.
            <SourceLink id="DOI_10_1111_gcb_15000"> Menzel a kolegové</SourceLink>{" "}
            proto rozlišovali plané rostliny, plodiny a zemědělské činnosti. Jednotlivý časný rok
            sám nevyjadřuje dlouhodobý posun celé oblasti.
          </p>
        </details>

        <h2>Skutečný příklad z Harvard Forest</h2>
        <p>
          Použijeme záznamy tří javorů červených, <em>Acer rubrum</em>, z výzkumné lokality
          Harvard Forest v Massachusetts. Pocházejí z jara 2016 a do databáze USA-NPN je poskytla
          americká ekologická pozorovací síť NEON, plným názvem National Ecological Observatory Network.
          Z veřejného exportu vybereme fázi <em>Leaves</em>,
          tedy přítomnost živých rozvinutých listů. Pro malou ukázku zpracování vezmeme tři stromy
          s nejnižšími číselnými identifikátory na dané ploše. Každý má 31 návštěv od 11. března
          do 23. května. Jde o výběr pro vysvětlení výpočtu, nikoli o odhad nástupu jara pro celý les.
          <SourceLink id="DOI_10_5066_f78s4n1v"> Zdrojem je veřejný soubor USA-NPN</SourceLink>,
          stažený 19. října 2026.
        </p>
        <p>
          Začneme stromem 352210. Při návštěvách 6., 9. a 11. května má zapsané „ne“.
          Dne 13. května se poprvé objevuje „ano“ a následující návštěva 16. května jej potvrzuje.
          Pro ohraničení nástupu proto vybereme 11. a 13. květen. V přestupném roce 2016
          jde o 132. a 134. den roku. Dosadíme je do už vysvětleného rozdílu dat:
        </p>
        <Equation tex={String.raw`\Delta t = 134 - 132 = 2\,\mathrm{dny}`} />
        <p>
          První přítomnost rozvinutých listů byla zaznamenána <strong>13. května 2016</strong>.
          Přechod zachycuje dvoudenní rozmezí mezi návštěvami 11. a 13. května.
          Stejný postup provedeme u dalších dvou stromů. Tabulka ukazuje oba krajní zápisy
          a z nich vypočtený odstup.
        </p>
        <div className="method-data-output method-data-output--compact">
          <div className="method-data-output__table-wrap" role="region" tabIndex={0} aria-label="Nástup rozvinutých listů tří javorů">
            <table>
              <caption>Nástup fáze Leaves v roce 2016</caption>
              <thead><tr><th>Strom</th><th>Poslední ne</th><th>První ano</th><th>Rozmezí <span className="method-data-output__unit">(dny)</span></th></tr></thead>
              <tbody>{example.result.plants.map((plant) => (
                <tr key={plant.individualId}><td>{plant.individualId}</td><td>{shortDate(plant.lastNo)}</td><td>{shortDate(plant.firstYes)}</td><td>{plant.intervalDays}</td></tr>
              ))}</tbody>
            </table>
          </div>
        </div>
        <p>
          Graf zasadí tyto dvojice do okolních návštěv. Každý řádek patří jednomu stromu
          a každá značka jedné návštěvě. Sledujeme, kde šedé křížky „ne“ vystřídají zelené
          body „ano“. Oranžová spojnice označuje právě rozmezí, které jsme vypočítali.
        </p>
        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" role="region" tabIndex={0} aria-label="Graf návštěv a nástupu rozvinutých listů, vodorovně posuvný">
            <Image className="article-figure__media" src={`${dataPath}/leaf-onset.png`} width={1800} height={792} unoptimized
              alt="Tři javory přecházejí ze zápisu ne na ano v různých dnech. Rozmezí nástupu je 11.–13. května, 27.–29. dubna a 22.–25. dubna 2016." />
          </div>
          <figcaption>
            Svislá osa rozlišuje stromy, vodorovná ukazuje data návštěv od 20. dubna do 18. května 2016.
            Šedý křížek znamená „ne“, zelený bod „ano“ a oranžový úsek ohraničuje nástup fáze.
            Vlastní zpracování dat <SourceLink id="DOI_10_5066_f78s4n1v">USA-NPN / NEON</SourceLink>, CC BY 4.0.
          </figcaption>
        </figure>
        <p>
          Stromy mají rozdílná data prvního „ano“, i když rostly na stejné sledované ploše.
          U všech tří přitom návštěvy ohraničily nástup na dva až tři dny.
          Výsledkem jsou tři záznamy o konkrétních jedincích. Jejich opakováním v dalších letech
          by vznikl podklad pro srovnání načasování mezi sezónami.
        </p>
        <details className="method-details">
          <summary>Data a postup pro zopakování příkladu</summary>
          <p>
            Export obsahuje 930 záznamů pro lokalitu 57027, označenou
            HARV_053.phenology.phe – primary, druh 3 a fázi 483. Dotaz pokrývá 1. leden až 31. květen 2016.
            Z něj vybíráme všech 93 návštěv tří rostlin s nejnižšími identifikátory.
            Začínáme zveřejněnými zápisy stavu v databázi, původní terénní formuláře nejsou součástí exportu.
            Přesné označení rostlin, identifikátory krajních pozorování a úplnou adresu dotazu obsahuje přiložený popis.
          </p>
          <ul>
            <li><a href={`${dataPath}/harvard-leaves.json`}>Původní odpověď veřejné databáze, JSON</a></li>
            <li><a href={`${dataPath}/selected-visits.csv`}>Všech 93 použitých záznamů, CSV</a></li>
            <li><a href={`${dataPath}/example.json`}>Původ, výběr, kontrolní otisk a výsledky</a></li>
            <li><a href={`${dataPath}/reproduce.py`}>Skript pro kontrolu dat a opakování výpočtu</a></li>
            <li><a href={`${dataPath}/plot.py`}>Skript pro vytvoření grafu</a></li>
          </ul>
          <p>
            Výpočet seřadí návštěvy každého stromu, najde první stav 1 („ano“) a předchozí stav 0 („ne“)
            a odečte jejich data. U vybraných stromů nejsou neznámé stavy ani dvojí zápisy pro stejný den.
            Pole příznaku rozporu obsahuje chybějící hodnotu −9999. Skript ji nepovažuje za doklad
            provedené kontroly. Neodhaduje datum uprostřed rozmezí ani nedoplňuje další návštěvy.
          </p>
          <p>
            Soubory uložte do společné složky a spusťte <code>python reproduce.py</code>.
            Postačí Python 3 bez dalších knihoven. Pro vytvoření grafu příkazem <code>python plot.py</code>{" "}
            je navíc potřebný Matplotlib. Výpočet ověří kontrolní otisk původního souboru,
            data návštěv, výběr do CSV a výsledná rozmezí.
          </p>
          <p>
            Data poskytla USA National Phenology Network a účastníci programu Nature’s Notebook.
            Tento příklad využívá práci sítě NEON, programu podporovaného americkou National Science Foundation
            a provozovaného organizací Battelle. Data sdílíme s uvedením původu podle{" "}
            <SourceLink id="2022_USANPN_Data_Terms">podmínek USA-NPN a licence CC BY 4.0</SourceLink>.
            Úplné předepsané poděkování je také v souboru s popisem příkladu.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <p>
          Společné definice a opakované návštěvy promění pozorování rostlin a živočichů
          v dohledatelný záznam jejich sezónního vývoje. Z něj získáme načasování jednotlivých
          fází i rozmezí, ve kterém jejich nástup nastal. Dlouhodobá srovnání těchto biologických
          údajů s měřením podmínek prostředí ukazují, jak živá příroda reaguje na změny klimatu.
        </p>
      </div>
    </article>
  );
}
