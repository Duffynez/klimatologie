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
    sourceId: "1956_TIME_Greenhouse",
    lane: "institutional",
    summary: "Časopis TIME představil širokému americkému publiku výzkum, podle něhož spalování uhlí a ropy zvyšuje množství oxidu uhličitého v ovzduší a může postupně měnit teplotu Země. Článek citoval oceánografa Rogera Revelleho a ukazuje, že základní problém nebyl v polovině padesátých let uzavřen pouze v odborných časopisech. Jeho historický význam nespočívá v novém měření, ale v okamžiku, kdy se fyzikální otázka budoucího oteplování dostala do významného masového média jako srozumitelné veřejné téma.",
  },
  {
    sourceId: "1958_Keeling",
    summary: "Charles David Keeling zahájil na observatoři Mauna Loa přesná a pravidelně kalibrovaná měření oxidu uhličitého v čistém oceánském vzduchu. Už první roky ukázaly dvě odlišné vlastnosti záznamu: pravidelné kolísání během roku a růst průměrné koncentrace mezi jednotlivými roky. Takzvaná Keelingova křivka proměnila úvahu o hromadění oxidu uhličitého v atmosféře v nepřetržité přímé pozorování. Její význam spočívá také v zavedení přísných standardů odběru, kalibrace a návaznosti měření, díky nimž lze dnešní hodnoty spolehlivě porovnávat s počátkem programu.",
  },
  {
    sourceId: "1961_Sullivan",
    summary: "Sullivanova kniha podala bezprostřední souhrn Mezinárodního geofyzikálního roku 1957–1958, během něhož vědci z 67 zemí koordinovali pozorování atmosféry, oceánů, ledovců, magnetického pole i kosmického prostoru. Program přinesl první vědecké družice, rozsáhlá polární měření, nové stanice a světová datová centra určená ke sdílení výsledků; v jeho rámci začala také přesná dlouhodobá měření atmosférického CO₂. Význam knihy je dokumentační, význam popsaného programu metodický: studium Země se posunulo od izolovaných výprav k souběžnému globálnímu pozorování podle společných postupů a s veřejně uchovávanými daty.",
  },
  {
    sourceId: "1967_Manabe_Wetherald",
    summary: "Manabe a Wetherald sestavili fyzikální model svislého sloupce atmosféry, v němž společně počítali přenos záření, proudění a rozložení vodní páry. Zkoumali, jak se ustálená teplota v různých výškách změní při jiné koncentraci oxidu uhličitého, a zachytili přitom oteplování spodní atmosféry i ochlazování výše položených vrstev. Práce se stala základem moderního modelování klimatu, protože převedla známé fyzikální zákony do výpočtu celé atmosférické struktury a ukázala, jak do výsledku vstupuje zesílení spojené s vodní párou. Na tento postup navázaly prostorové klimatické modely.",
  },
  {
    sourceId: "1972_Limits",
    lane: "institutional",
    summary: "Kniha The Limits to Growth použila počítačový model k propojení růstu populace, průmyslové výroby, spotřeby neobnovitelných zdrojů, produkce potravin a znečištění. Nebyla klimatickou předpovědí a její scénáře nelze číst jako popis jediné nevyhnutelné budoucnosti. Historicky však zásadně rozšířila veřejnou debatu o představu, že jednotlivé ekologické a hospodářské problémy tvoří vzájemně propojený systém s konečnými mezemi. Klimatická změna se později stala jedním z témat, pro něž je právě takové dlouhodobé uvažování o zásobách, tocích, zpětných vazbách a překročení mezí důležité.",
  },
  {
    sourceId: "1972_BlueMarble",
    lane: "institutional",
    summary: "Posádka Apolla 17 pořídila při cestě k Měsíci fotografii celé osvětlené Země, na níž jsou současně vidět Afrika, oceány, oblaka i antarktický led. Snímek nepřinesl nový klimatický údaj, ale vytvořil mimořádně působivý obraz planety jako jediného, prostorově omezeného celku bez politických hranic. Stal se jednou z nejšířeji reprodukovaných fotografií historie a součástí vznikajícího environmentálního jazyka. Jeho význam pro dějiny klimatu je kulturní: abstraktní pojem globálního systému dostal konkrétní podobu, kterou bylo možné sdílet ve školách, médiích i politice.",
  },
  {
    sourceId: "1972_Stockholm",
    lane: "institutional",
    summary: "Stockholmská konference byla prvním velkým jednáním OSN zaměřeným jako celek na životní prostředí. Zástupci 113 států přijali deklaraci s 26 principy a akční plán se 109 doporučeními pro sledování a správu životního prostředí i mezinárodní spolupráci. Z konference vzešel Program OSN pro životní prostředí (UNEP), první orgán OSN věnovaný výhradně této oblasti. Význam Stockholmu spočívá ve vytvoření trvalého politického a institucionálního prostoru, v němž bylo možné řešit přeshraniční problémy na základě společných pozorování; nešlo ještě o klimatickou dohodu, ale bez tohoto rámce by pozdější klimatická spolupráce neměla kde vzniknout.",
  },
  {
    sourceId: "1976_Hays_Imbrie_Shackleton",
    summary: "Hays, Imbrie a Shackleton analyzovali hlubokomořská sedimentární jádra a hledali v nich pravidelné rytmy odpovídající změnám výstřednosti zemské dráhy, sklonu osy a precese. Ve zhruba půlmilionovém záznamu našli periody předpovězené astronomickými výpočty a ukázali, že změny oběžné dráhy určují tempo střídání ledových a meziledových období. Tím poskytli dlouho očekávaný kvantitativní test Milankovićovy teorie. Práce současně ukázala, že malé, přesně načasované změny slunečního záření mohou být prostřednictvím ledu, oceánu a atmosféry zesíleny do rozsáhlé proměny klimatu.",
  },
  {
    sourceId: "1977_Black_Exxon",
    lane: "institutional",
    summary: "Vědecký poradce James Black předložil vedení společnosti Exxon souhrn tehdejšího poznání skleníkového účinku, růstu emisí a možných budoucích změn teploty. Prezentace otevřeně uváděla jak očekávaný směr změny, tak významné nejistoty a potřebu dalšího měření; firma poté několik let podporovala vlastní výzkum oxidu uhličitého a oceánu. Dokument je důležitý pro historii toku informací, protože dokládá, že velká ropná společnost řešila klimatické riziko odborně uvnitř podniku dříve, než se spor o její pozdější veřejnou komunikaci stal politickým tématem. Sám dokument ovšem není samostatným důkazem vývoje klimatu.",
  },
  {
    sourceId: "1979_Charney",
    summary: "Americká Národní akademie věd pověřila skupinu vedenou Julem Charneym, aby nezávisle posoudila, jaké oteplení lze očekávat při zdvojnásobení koncentrace oxidu uhličitého. Odborníci porovnali dva tehdy nejpokročilejší atmosférické modely, zhodnotili hlavní zpětné vazby a dospěli k pravděpodobnému rozmezí 1,5 až 4,5 °C. Charneyho zpráva nebyla prvním výpočtem tohoto účinku, ale stala se vzorem stručné odborné syntézy: oddělila dobře podložený směr změny od nejisté přesné velikosti a vymezila rozmezí, které zůstalo ústředním měřítkem klimatického výzkumu po další desetiletí.",
  },
  {
    sourceId: "1979_WCC",
    lane: "institutional",
    summary: "První světová klimatická konference v Ženevě spojila odborníky z desítek zemí a označila možné lidské ovlivnění klimatu za problém vyžadující soustavný výzkum a mezinárodní spolupráci. Její závěry podpořily vznik Světového klimatického programu a později také Světového programu výzkumu klimatu, který koordinuje pozorování, modely a výměnu dat napříč státy. Význam konference spočívá v institucionálním posunu: klimatický výzkum už nebyl pouze součtem jednotlivých oborů a národních projektů, ale dostal trvalý mezinárodní rámec zaměřený na společné otázky a srovnatelné výsledky.",
  },
  {
    sourceId: "1987_Vostok",
    summary: "Barnola a jeho spolupracovníci změřili oxid uhličitý ve vzduchových bublinách uzavřených v ledovém jádru z antarktické stanice Vostok. Spolu s izotopovými údaji o minulých teplotách vznikl záznam dlouhý přibližně 160 000 let, v němž nízké koncentrace oxidu uhličitého provázely ledové doby a vyšší koncentrace teplejší období. Práce rozšířila přímé rozbory atmosférických plynů daleko před éru přístrojových měření a propojila chemii starého vzduchu s fyzickým záznamem klimatu. Pozdější hlubší vrty tento společný vývoj potvrdily přes několik dalších glaciálních cyklů.",
  },
  {
    sourceId: "1988_Hansen_Senate",
    lane: "institutional",
    summary: "James Hansen při slyšení v Senátu Spojených států shrnul výsledky pozorování a modelových výpočtů a veřejně prohlásil, že oteplování už lze s vysokou mírou jistoty rozpoznat v naměřených teplotách. Vědecké argumenty vycházely z dřívějších recenzovaných prací, politický význam však vytvořilo místo a okamžik jejich sdělení: během mimořádně horkého léta se klimatická změna dostala na titulní strany a do parlamentní debaty. Slyšení tak představuje přelom mezi odborným poznáním a masovou politikou, nikoli počátek důkazů samotných; ty vznikaly postupně během předchozích desetiletí.",
  },
  {
    sourceId: "1988_IPCC",
    lane: "institutional",
    summary: "Světová meteorologická organizace a UNEP založily Mezivládní panel pro změnu klimatu, aby vlády dostávaly pravidelné a společně posouzené hodnocení klimatického výzkumu, dopadů i možností reakce. Panel vytvořil postup, v němž odborníci shrnují tisíce publikací, text prochází několika koly připomínek a členské státy se podílejí na schvalování souhrnů pro rozhodování. Jeho význam spočívá v trvalém mostu mezi rychle rostoucím vědeckým poznáním a mezinárodní politikou. První hodnotící zpráva z roku 1990 se stala důležitým podkladem pro vyjednání Rámcové úmluvy OSN o změně klimatu.",
  },
  {
    sourceId: "1990_IPCC_FAR",
    summary: "První hodnotící zpráva IPCC spojila poznatky o fyzice klimatu, možných dopadech a způsobech reakce do společného mezinárodního hodnocení. Popsala pozorovaný růst skleníkových plynů, odhadla budoucí změny při různých scénářích a přehledně uvedla, které závěry jsou pevné a které ještě omezuje délka měření nebo možnosti modelů. Její význam nebyl v jednom novém objevu, ale v ustavení společného výchozího stavu poznání, k němuž se mohli vztahovat vědci i vlády. Zpráva se stala hlavním odborným podkladem pro zahájení jednání o globální klimatické úmluvě.",
  },
  {
    sourceId: "1992_UNFCCC",
    lane: "institutional",
    summary: "Rámcová úmluva OSN o změně klimatu vytvořila právní a institucionální základ dlouhodobé mezinárodní klimatické politiky. Státy se zavázaly shromažďovat údaje o emisích, podávat pravidelné zprávy, spolupracovat na výzkumu a jednat o ochraně klimatického systému podle rozdílných odpovědností a možností. Úmluva sama neurčila závazné množství emisí, které musí jednotlivé země snížit. Její historický význam spočívá v něčem trvalejším: zavedla každoroční konference smluvních stran, společný jazyk, pravidla vykazování a právní prostor, v němž mohly později vzniknout Kjótský protokol a Pařížská dohoda.",
  },
  {
    sourceId: "1997_Kyoto",
    lane: "institutional",
    summary: "Kjótský protokol poprvé převedl obecný rámec klimatické úmluvy do právně závazných cílů pro průmyslové země uvedené v příloze protokolu. Vedle národních limitů zavedl společná pravidla započítávání emisí, kontrolu plnění a mechanismy umožňující část snižování uskutečnit prostřednictvím mezinárodní spolupráce. Pokrytí protokolu bylo omezené a některé významné státy se nezapojily nebo později odstoupily, přesto šlo o první praktickou zkoušku mezinárodního režimu s měřitelnými závazky. Zkušenosti s vykazováním, ověřováním i politickými limity následně ovlivnily podobu dalších dohod.",
  },
  {
    sourceId: "1998_API_ActionPlan",
    lane: "institutional",
    summary: "Pracovní skupina složená ze zástupců amerických průmyslových organizací připravila plán veřejné komunikace o klimatické vědě. Dokument navrhoval školení mluvčích, kontakt s novináři a učiteli i šíření sdělení zdůrazňujících vědecké nejistoty; za známku úspěchu označil stav, kdy veřejnost bude nejistotu chápat jako součást běžného názoru. Je významným primárním pramenem k dějinám organizované klimatické komunikace, protože zachycuje konkrétní strategii, aktéry a zamýšlené publikum. Nevypovídá o správnosti fyzikálních měření, ale pomáhá vysvětlit, proč se veřejná debata vyvíjela jinak než odborná literatura.",
  },
  {
    sourceId: "2000_Argo",
    summary: "Mezinárodní program Argo začal budovat světovou síť autonomních plováků, které se pravidelně ponořují, měří teplotu a slanost oceánu do hloubky přibližně dvou kilometrů a po vynoření odesílají údaje přes družice. Během několika let vzniklo rovnoměrnější a průběžnější pokrytí oceánů, než jaké mohly poskytovat výzkumné lodě a jednotlivé historické trasy. Argo zásadně zpřesnilo sledování obsahu tepla, změn vodních mas i sezónního vývoje oceánu a současně zavedlo rychlé otevřené sdílení výsledků. Stalo se základní pozorovací infrastrukturou pro výzkum klimatu, oceánografii i předpovědní systémy.",
  },
  {
    sourceId: "2004_DayAfterTomorrow",
    lane: "institutional",
    summary: "Katastrofický film The Day After Tomorrow zobrazil náhlé narušení oceánského proudění a během několika dnů proměnil velkou část severní polokoule v ledovou pustinu. Tak rychlý průběh ani zobrazené globální zamrznutí neodpovídají vědeckým poznatkům, film však dostal klimatické riziko do hlavního proudu zábavní kultury. Výzkum veřejnosti před uvedením a po něm zaznamenal u diváků větší obavy, vyšší ochotu jednat a současně některé nové mylné představy. Historický význam proto spočívá v doloženém vlivu fikce na vnímání problému, nikoli v přesnosti filmového scénáře.",
  },
  {
    sourceId: "2006_InconvenientTruth",
    lane: "institutional",
    summary: "Dokument An Inconvenient Truth převedl přednášku Ala Gorea do filmového vyprávění založeného na grafech, fotografiích, animacích a osobním politickém příběhu. Keelingovu křivku, teplotní rekonstrukce a příklady změn v krajině tak představil publiku, které odborné zprávy běžně nečetlo. Film získal rozsáhlou mezinárodní distribuci a stal se jedním z nejviditelnějších kulturních bodů klimatické debaty první dekády století. Současně téma silně spojil s konkrétní politickou osobností, což pomohlo mobilizaci části veřejnosti, ale také prohloubilo stranické vnímání klimatické otázky.",
  },
  {
    sourceId: "2015_Paris",
    lane: "institutional",
    summary: "Pařížská dohoda vytvořila společný rámec, v němž předkládají klimatické plány všechny smluvní strany, nikoli pouze předem vymezená skupina průmyslových zemí. Stanovila cíl udržet oteplení výrazně pod 2 °C a usilovat o omezení na 1,5 °C, zavedla pětiletý cyklus zpřísňování národních příspěvků a společná pravidla transparentnosti. Jednotlivé cíle si státy určují samy a jejich součet automaticky nezaručuje splnění teplotního cíle. Historický význam dohody spočívá v téměř univerzálním politickém rámci, který propojuje dlouhodobý směr, pravidelné vyhodnocování a opakované národní rozhodování.",
  },
  {
    sourceId: "2018_Stripes",
    lane: "institutional",
    summary: "Ed Hawkins převedl dlouhodobý vývoj teploty do jednoduchého sledu barevných pruhů, v němž každý pruh představuje jeden rok a odstín ukazuje jeho odchylku od zvoleného referenčního průměru. Vizualizace odstranila osy, čísla i odborné značky a ponechala pouze časový přechod od chladnějších modrých k teplejším červeným rokům. Nevytvořila nový datový soubor ani nový důkaz, ale nabídla snadno přenositelný jazyk pro již existující měření. Pruhy se rozšířily do médií, škol, veřejného prostoru i oděvů a staly se kulturním symbolem pozorovaného oteplování.",
  },
  {
    sourceId: "2018_FFF",
    lane: "institutional",
    summary: "Školní stávka Grety Thunbergové před švédským parlamentem se prostřednictvím sociálních sítí rozšířila do mezinárodního hnutí Fridays for Future. Mladí lidé začali organizovat pravidelné protesty a požadovat, aby politická rozhodnutí odpovídala zveřejněným vědeckým závěrům a dlouhodobým závazkům. Hnutí nepřineslo nové měření ani odbornou teorii; změnilo však okruh lidí, kteří veřejně formulují klimatické požadavky, a zdůraznilo otázku odpovědnosti mezi generacemi. Jeho význam je společenský a politický: vědecké poznání se stalo základem masové mobilizace vedené věkovou skupinou bez běžného přístupu k volební moci.",
  },
];
