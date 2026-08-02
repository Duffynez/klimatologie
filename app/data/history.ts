export type HistoryLane = "academic" | "institutional";

export type HistoryEvent = {
  sourceId: string;
  summary: string;
  lane?: HistoryLane;
};

export const historyEvents: HistoryEvent[] = [
  {
    sourceId: "1681_Mariotte",
    summary: "Mariotte porovnával, jak sklem prochází sluneční světlo a jak se za stejnou překážkou chová sálavé teplo z ohně nebo jiného zahřátého tělesa. Zjistil, že sklo propouští oba druhy záření rozdílně. V době, kdy teplo ještě nebylo chápáno jako elektromagnetické záření různých vlnových délek, šlo o důležitý experimentální postřeh: vlastnosti záření závisejí na jeho zdroji a průchod materiálem lze měřit. Tato otázka se později stala jedním ze základů výzkumu tepelného záření a energetické bilance Země.",
  },
  {
    sourceId: "1767_Saussure",
    summary: "Saussure sestrojil heliotermometr: tmavou, tepelně izolovanou schránku zakrytou několika skleněnými deskami, v níž na slunci měřil dosaženou teplotu. Opakováním pokusů v různých výškách a s odlišným uspořádáním ukázal, že dopadající sluneční záření může projít sklem a zahřát vnitřek, zatímco sklo a izolace zpomalují únik tepla. Význam přístroje spočíval v tom, že proměnil obecnou úvahu o slunečním ohřevu v kontrolovatelný experiment. Jeho výsledky později použil Fourier při hledání fyzikálního vysvětlení teploty Země.",
  },
  {
    sourceId: "1801_Herschel",
    summary: "Herschel rozložil sluneční světlo hranolem a teploměry měřil zahřívání v jednotlivých barvách i za červeným okrajem viditelného spektra. Nejvyšší hodnotu naměřil právě v oblasti, kterou oko nevidí, a dalšími pokusy ověřoval, že se tyto neviditelné paprsky dají odrážet a lámat. Objev infračerveného záření rozšířil fyziku světla za hranice lidského zraku. Pro pozdější klimatologii je zásadní proto, že Země většinu energie nevyzařuje jako viditelné světlo, ale právě v infračervené části spektra, kterou lze měřit pouze přístroji.",
  },
  {
    sourceId: "1804_Leslie",
    summary: "Leslie zahříval dutou kovovou kostku, jejíž stěny měly různé povrchy, a citlivým diferenciálním teploměrem porovnával jejich tepelné vyzařování. Ukázal, že stejně teplé plochy nevyzařují stejně: matný černý povrch se chová jinak než lesklý kov. Pokusy pomohly oddělit teplotu tělesa od schopnosti jeho povrchu záření vysílat a přijímat. Tím připravily půdu pro pozdější pojmy emisivita a pohltivost, bez nichž nelze správně popsat radiační výměnu mezi zemským povrchem, atmosférou a vesmírem ani interpretovat dálková teplotní měření.",
  },
  {
    sourceId: "1824_Fourier",
    summary: "Fourier položil otázku, čím je určena průměrná teplota Země, a spojil ji s rovnováhou mezi energií přijatou od Slunce a teplem, které planeta odevzdává do vesmíru. Upozornil, že samotná vzdálenost od Slunce pozorovanou teplotu nevysvětluje a že atmosféra ovlivňuje ochlazování povrchu. Význam práce spočívá v zavedení planetární energetické bilance jako fyzikálního problému, který lze počítat a porovnávat s pozorováním. Fourier ještě neznal molekulární absorpci plynů, ale vymezil otázku, na kterou později odpovídaly laboratorní spektroskopie i klimatické modely.",
  },
  {
    sourceId: "1840_Agassiz",
    summary: "Agassiz shromáždil pozorování morén, bludných balvanů, ohlazených skal a rýh v krajině a vyložil je jako stopy někdejšího mnohem většího zalednění. Navázal přitom na dřívější poznatky Ignaze Venetze, Jeana de Charpentiera a Karla Friedricha Schimpera a rozpracoval je do rozsáhlého obrazu doby ledové. Význam jeho knihy spočíval v propojení mnoha místních geologických stop do testovatelného vysvětlení minulosti. Klima se tím stalo veličinou s hlubokou historií, kterou lze rekonstruovat z fyzických záznamů krajiny, nikoli pouze z kronik a přímých měření.",
  },
  {
    sourceId: "1856_Foote",
    summary: "Footeová vystavila slunečnímu záření dvojici skleněných válců s teploměry a porovnávala vzduch, vlhký vzduch, vodík a oxid uhličitý. Válec s oxidem uhličitým se zahřál výrazněji a chladl pomaleji; autorka z toho usoudila, že atmosféra s větším podílem tohoto plynu by měla vyšší teplotu. Šlo o první známou publikovanou experimentální práci, která výslovně spojila množství oxidu uhličitého s teplotou planety. Jednoduché uspořádání ještě neoddělovalo jednotlivé způsoby přenosu tepla, ale položilo jasnou, měřitelnou otázku pro další laboratorní výzkum.",
  },
  {
    sourceId: "1862_Tyndall",
    summary: "Tyndall vedl tepelné záření dlouhou trubicí uzavřenou deskami z kamenné soli, plnil ji různými plyny a změnu prošlého záření měřil termočlánkem s galvanometrem. Prokázal, že hlavní složky vzduchu, dusík a kyslík, záření propouštějí podstatně lépe než vodní pára, oxid uhličitý a některé další plyny. Práce tak poskytla přímý laboratorní mechanismus, kterým i malé množství určitého plynu může ovlivnit přenos tepla atmosférou. Z obecné představy o tepelném působení atmosféry se stal problém selektivní absorpce a emise, který bylo možné dále přesně měřit.",
  },
  {
    sourceId: "1864_Croll",
    summary: "Croll spojil výpočty změn výstřednosti zemské dráhy a precese s rozdělením sluneční energie mezi roční období a polokoule. Samotnou změnu záření nepovažoval za celé vysvětlení: uvažoval také sníh a led, odrazivost povrchu, mořské proudy a další procesy, které mohou počáteční změnu zesílit. Vznikla tak první soustavná astronomická teorie střídání ledových a meziledových období. Přestože byly některé její časové odhady později opraveny, Croll ukázal, jak propojit nebeskou mechaniku s pozemskými zpětnými vazbami a vytvořit předpovědi ověřitelné geologickým záznamem.",
  },
  {
    sourceId: "1884_Langley",
    summary: "Langley vyvinul mimořádně citlivý bolometr a při měřeních na Mount Whitney sledoval sluneční záření v různých částech spektra a při různé tloušťce atmosféry nad přístrojem. Dokázal tak podrobněji rozlišit, které vlnové délky atmosféra propouští a které pohlcuje, a zpřesnil odhad energie přicházející od Slunce. Jeho práce spojila spektroskopii s kvantitativním měřením radiační bilance a poskytla data, z nichž později čerpal Arrhenius. Bolometrický princip se navíc stal základem citlivých detektorů používaných v infračervené astronomii, meteorologii i družicovém pozorování Země.",
  },
  {
    sourceId: "1894_Hogbom",
    summary: "Högbom se pokusil sestavit rozpočet uhlíku v přírodě: porovnával jeho množství v atmosféře, oceánu a horninách s přísunem ze sopek, zvětráváním, ukládáním uhličitanů a dalšími toky. Do stejného rámce zahrnul také oxid uhličitý vznikající spalováním uhlí a ukázal, že lidský zdroj už lze velikostí srovnávat s některými přírodními geologickými toky. Význam práce spočíval v převodu uhlíkového cyklu z kvalitativního popisu na bilanci zásob a toků. Arrhenius díky ní mohl posuzovat nejen účinek oxidu uhličitého na teplotu, ale i reálnost změny jeho atmosférického množství.",
  },
  {
    sourceId: "1896_Arrhenius",
    summary: "Arrhenius využil tehdejší měření infračervené absorpce a ručně počítal, jak by různé množství oxidu uhličitého změnilo teplotu v jednotlivých zeměpisných šířkách a ročních obdobích. Zahrnul také odezvu vodní páry a změny sněhové pokrývky a odhadl oteplení při zdvojnásobení koncentrace. Šlo o první kvantitativní výpočet citlivosti zemského klimatu na oxid uhličitý v celoplanetárním měřítku. Číselné hodnoty nesly omezení tehdejší spektroskopie, ale podstatný byl nový postup: fyzikální teorii převedl na konkrétní, kontrolovatelné výsledky, které mohly další generace zpřesňovat.",
  },
  {
    sourceId: "1938_Callendar",
    summary: "Callendar spojil tři do té doby často oddělené části problému: odhady růstu atmosférického oxidu uhličitého, nové výpočty jeho absorpce a teplotní záznamy z přibližně dvou set meteorologických stanic. Z dostupných měření vyvodil, že se povrch Země během předchozího půlstoletí oteploval a že část změny může souviset se spalováním fosilních paliv. Význam práce spočíval v konfrontaci teorie s naměřeným vývojem skutečné atmosféry. Oživila zájem o uhlíkovou teorii klimatu a stanovila výzkumný program, v němž se společně sledují emise, koncentrace, záření a teplota.",
  },
  {
    sourceId: "1941_Milankovic",
    summary: "Milanković sjednotil desítky let výpočtů změn výstřednosti oběžné dráhy, sklonu zemské osy a precese a převedl je na množství sluneční energie dopadající v různých zeměpisných šířkách a ročních obdobích. Zvláštní význam přikládal letnímu záření ve vysokých severních šířkách, které ovlivňuje, zda zimní sníh roztaje. Jeho kánon dal teorii dob ledových přesnou matematickou časovou osu a konkrétní průběh, který bylo možné porovnat s geologickými záznamy. Pozdější hlubokomořské vrty skutečně odhalily klimatické rytmy odpovídající vypočteným orbitálním cyklům.",
  },
  {
    sourceId: "1952_Libby",
    summary: "Libby rozpracoval radiouhlíkové datování založené na tom, že živé organismy přijímají uhlík-14 vznikající působením kosmického záření, zatímco po jejich smrti jeho množství známou rychlostí klesá. Metodu ověřoval na materiálech známého stáří a ukázal, že organické nálezy lze zařadit do společné číselné časové stupnice. Pro výzkum minulého klimatu to byl zásadní posun: vrstvy rašeliny, dřevo, půda i další záznamy bylo možné nejen seřadit, ale také datovat, porovnávat mezi místy a určit rychlost změn. Pozdější kalibrace přesnost této časové osy dále zvýšily.",
  },
  {
    sourceId: "1955_Emiliani",
    summary: "Emiliani měřil poměr izotopů kyslíku ve schránkách dírkonošců uložených v hlubokomořských sedimentárních jádrech z Atlantiku, Karibiku a Tichého oceánu. Změny poměru vyložil především jako změny teploty oceánu a odhalil opakované glaciální cykly namísto několika málo nesouvisejících dob ledových. Pozdější práce ukázaly, že signál výrazně ovlivňuje také objem pevninského ledu, tím však význam metody vzrostl: vznikla souvislá mořská izotopová stratigrafie. Ta umožnila porovnávat záznamy napříč oceány, prověřit orbitální teorii a položila základy moderní paleoceanografie.",
  },
  {
    sourceId: "1956_Plass",
    summary: "Plass využil přesnější laboratorní spektra a digitální výpočty k rozboru absorpčního pásu oxidu uhličitého kolem 15 mikrometrů v jednotlivých vrstvách atmosféry. Ukázal, proč silná absorpce uprostřed pásu neznamená, že další oxid uhličitý nemůže ovlivnit záření: mění se absorpce na okrajích pásu a ve vyšších, řidších vrstvách. Jeho model byl proti dnešním modelům jednoduchý, ale vrátil problém oxidu uhličitého do moderní spektroskopie a výpočetní fyziky. Především ukázal cestu od laboratorních spekter k číselnému odhadu změny radiační bilance a teploty.",
  },
  {
    sourceId: "1961_Sullivan",
    summary: "Sullivanova kniha podala bezprostřední souhrn Mezinárodního geofyzikálního roku 1957–1958, během něhož vědci z 67 zemí koordinovali pozorování atmosféry, oceánů, ledovců, magnetického pole i kosmického prostoru. Program přinesl první vědecké družice, rozsáhlá polární měření, nové stanice a světová datová centra určená ke sdílení výsledků; v jeho rámci začala také přesná dlouhodobá měření atmosférického CO₂. Význam knihy je dokumentační, význam popsaného programu metodický: studium Země se posunulo od izolovaných výprav k souběžnému globálnímu pozorování podle společných postupů a s veřejně uchovávanými daty.",
  },
  {
    sourceId: "1972_Stockholm",
    lane: "institutional",
    summary: "Stockholmská konference byla prvním velkým jednáním OSN zaměřeným jako celek na životní prostředí. Zástupci 113 států přijali deklaraci s 26 principy a akční plán se 109 doporučeními pro sledování a správu životního prostředí i mezinárodní spolupráci. Z konference vzešel Program OSN pro životní prostředí (UNEP), první orgán OSN věnovaný výhradně této oblasti. Význam Stockholmu spočívá ve vytvoření trvalého politického a institucionálního prostoru, v němž bylo možné řešit přeshraniční problémy na základě společných pozorování; nešlo ještě o klimatickou dohodu, ale bez tohoto rámce by pozdější klimatická spolupráce neměla kde vzniknout.",
  },
  {
    sourceId: "1988_IPCC",
    lane: "institutional",
    summary: "Světová meteorologická organizace a UNEP založily Mezivládní panel pro změnu klimatu, aby vlády dostávaly pravidelné a společně posouzené hodnocení klimatického výzkumu, dopadů i možností reakce. Panel vytvořil postup, v němž odborníci shrnují tisíce publikací, text prochází několika koly připomínek a členské státy se podílejí na schvalování souhrnů pro rozhodování. Jeho význam spočívá v trvalém mostu mezi rychle rostoucím vědeckým poznáním a mezinárodní politikou. První hodnotící zpráva z roku 1990 se stala důležitým podkladem pro vyjednání Rámcové úmluvy OSN o změně klimatu.",
  },
];
