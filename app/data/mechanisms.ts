export type MechanismCategory =
  | "Záření a složení atmosféry"
  | "Atmosféra a oceán"
  | "Oceán a hladina moře"
  | "Kryosféra"
  | "Živá příroda a extrémy";

type MechanismObservation = {
  href: `/pozorovani/${string}`;
  label: string;
};

export type ClimateMechanism = {
  slug: string;
  title: string;
  category: MechanismCategory;
  isMainQuestion?: boolean;
  cardSummary: string;
  observations?: readonly MechanismObservation[];
  summary: string;
  distinguishingEvidence: string;
};

export const climateMechanisms: ClimateMechanism[] = [
  {
    slug: "energeticka-bilance-zeme",
    title: "Proč v klimatickém systému přibývá energie?",
    category: "Záření a složení atmosféry",
    isMainQuestion: true,
    cardSummary: "Vliv Slunce, přirozeného kolísání a lidské činnosti na příjem a výdej energie Země.",
    observations: [
      { href: "/pozorovani/tepelny-obsah-oceanu/#souvislost-s-bilanci", label: "Přírůstek energie v klimatickém systému" },
    ],
    summary: "Oceán, pevnina a atmosféra získávají energii a led taje. Sledujeme příběhy tří vysvětlení: silnějšího Slunce, přirozeného kolísání a lidského působení. Jejich testy vedou k vysvětlení, jak rozdíl příjmu a výdeje energie ohřívá Zemi.",
    distinguishingEvidence: "Změny slunečního příkonu, celkový přírůstek energie a rozložení ohřevu v hloubkách oceánu. Laboratorní vlastnosti plynů, pozemní měření jejich radiačního účinku a porovnání pozorování s výpočty přirozených a lidských vlivů.",
  },
  {
    slug: "radiacni-pusobeni-sklenikovych-plynu",
    title: "Proč další CO₂ mění tepelné záření Země?",
    category: "Záření a složení atmosféry",
    cardSummary: "Pohlcování a vyzařování infračerveného záření při rostoucím množství CO₂ v atmosféře.",
    observations: [
      { href: "/pozorovani/atmosfericka-koncentrace-co2/#zmena-infracerveneho-zareni", label: "CO₂ a změna infračerveného záření" },
    ],
    summary: "Na některých vlnových délkách projde atmosférou jen zlomek záření od zemského povrchu. Vzduch však také sám vyzařuje. S množstvím CO₂ se mění, z jakých vrstev záření dojde k povrchu a z jakých unikne do vesmíru.",
    distinguishingEvidence: "Změna záření v pásmu CO₂ při známé změně jeho koncentrace a po zohlednění teploty i vlhkosti. Shoda pozemních a družicových spekter s výpočty založenými na laboratorních vlastnostech plynů.",
  },
  {
    slug: "puvod-rustu-atmosferickeho-co2",
    title: "Proč v atmosféře přibývá CO₂?",
    category: "Záření a složení atmosféry",
    isMainQuestion: true,
    cardSummary: "Zdroje oxidu uhličitého a jeho pohlcování oceánem a pevninou.",
    observations: [
      { href: "/pozorovani/atmosfericka-koncentrace-co2/#pozorovani", label: "Růst koncentrace CO₂ v atmosféře" },
    ],
    summary: "Při spalování uhlí i při rozkladu dřeva vzniká CO₂. Oba zdroje pomáhá rozlišit stáří uhlíku ve vzduchu. Změny kyslíku a rozbory mořské vody zase ukazují, kolik uhlíku zachytily rostliny a oceán.",
    distinguishingEvidence: "Porovnání emisí a pohlcování CO₂ s jeho přírůstkem v atmosféře, izotopovým složením uhlíku a poklesem kyslíku. Sezónní a zeměpisné rozdíly ověřují úlohu vegetace a přenosu vzduchu.",
  },
  {
    slug: "slunecni-promenlivost",
    title: "Jak sluneční cyklus ovlivňuje klima?",
    category: "Záření a složení atmosféry",
    cardSummary: "Sluneční maximum se projevuje v teplotě u povrchu i ve stratosféře. Mohou jeho vliv zesílit nízké oblaky?",
    observations: [
      { href: "/pozorovani/slunecni-zareni/#pozorovani", label: "Proměny slunečního záření" },
      { href: "/pozorovani/stratosfericke-ochlazovani/#slunecni-cyklus", label: "Sluneční cyklus v teplotě stratosféry" },
    ],
    summary: "V době slunečního maxima přibývá na Slunci tmavých skvrn i jasných oblastí. K Zemi tehdy dorazí o něco víc záření. Proč je to v teplotě vysoko nad Zemí patrnější než u jejího povrchu?",
    distinguishingEvidence: "Porovnání změřených změn slunečního záření s velikostí, načasováním a výškovým průběhem teplotní odezvy. Ověření vztahu k jedenáctiletému slunečnímu cyklu i dlouhodobému vývoji.",
  },
  {
    slug: "sopecne-aerosoly",
    title: "Proč mohou velké sopečné erupce ochladit Zemi?",
    category: "Záření a složení atmosféry",
    cardSummary: "Popel, sirné kapky a testy ochlazení po erupci Pinatuba.",
    observations: [
      { href: "/pozorovani/gmst/#pinatubo", label: "Ochlazení povrchu po erupci Pinatuba" },
      { href: "/pozorovani/stratosfericke-ochlazovani/#pinatubo", label: "Oteplení stratosféry po erupci Pinatuba" },
    ],
    summary: "Proč po erupci Pinatuba klesla teplota u povrchu, zatímco spodní stratosféra se oteplila? Dvě hypotézy a jejich ověření měřením částic, záření a teploty.",
    distinguishingEvidence: "Časová návaznost mezi erupcí, změnou množství stratosférických částic, průchodem záření a teplotou. Porovnání ochlazení povrchu s oteplením části stratosféry a následným odezněním účinku.",
  },
  {
    slug: "prumyslove-aerosoly-a-oblaka",
    title: "Proč se za loděmi a továrnami mění jas oblaků?",
    category: "Záření a složení atmosféry",
    isMainQuestion: true,
    cardSummary: "Lodní a průmyslové stopy ukazují, jak částice mění kapky a odraz světla.",
    observations: [
      { href: "/pozorovani/stopy-v-oblacich/#vysledky", label: "Stopy lodí a průmyslu v oblacích" },
    ],
    summary: "U kalifornského pobřeží pluly dvě lodě pod podobnou oblačností, ale světlou stopu zanechala jen jedna. Měření v jejich spalinách pomohla vysvětlit, proč se za některými loděmi a továrnami mění velikost kapek i množství světla, které oblak odráží.",
    distinguishingEvidence: "Porovnání oblastí a období s rozdílnými emisemi při zohlednění počasí. Souběžné změny částic, oblačných kapek a záření ověřují přímé působení aerosolů i jejich vliv prostřednictvím oblaků.",
  },
  {
    slug: "zmeny-ozonu-ve-stratosfere",
    title: "Proč se nad Antarktidou ochladila jarní stratosféra?",
    category: "Záření a složení atmosféry",
    isMainQuestion: true,
    cardSummary: "Co o příčině ochlazení prozradila měření ozonu a teploty ve výšce kolem 16 kilometrů.",
    observations: [
      { href: "/pozorovani/stratosfericke-ochlazovani/#antarkticke-jaro", label: "Jarní ochlazení dolní stratosféry nad Antarktidou" },
    ],
    summary: "Na konci 20. století naměřily balony vysoko nad antarktickým ledem největší ochlazení v listopadu, kdy už nad pólem svítí slunce. Vědci pak v modelu vyzkoušeli, jak teplý by byl vzduch, kdyby v něm na jaře zůstalo víc ozonu.",
    distinguishingEvidence: "Porovnání změn ozonu a teploty v jednotlivých výškách, oblastech a ročních obdobích. Chemická měření a vývoj po omezení látek poškozujících ozon pomáhají oddělit jeho vliv od CO₂ a proudění.",
  },
  {
    slug: "pohlcovani-a-presun-tepla-oceanem",
    title: "Proč se teplo v Jižním oceánu ukládá jinde, než přichází?",
    category: "Atmosféra a oceán",
    isMainQuestion: true,
    cardSummary: "U Antarktidy se hladina ohřívala pomalu. Nejvíc tepla ve vodním sloupci přibylo dál na sever.",
    observations: [
      { href: "/pozorovani/tepelny-obsah-oceanu/#jizni-ocean", label: "Příjem a ukládání tepla v Jižním oceánu" },
    ],
    summary: "Blíž k Antarktidě přijímal oceán přes hladinu víc tepla než dřív. Když však oceánografové porovnali měření z různých hloubek, našli největší přírůstek dál na sever.",
    distinguishingEvidence: "Porovnání toků tepla přes hladinu a přenosu proudy se změnou zásoby tepla v různých oblastech a hloubkách. Společná bilance odlišuje přesun energie uvnitř oceánu od jejího celkového přírůstku.",
  },
  {
    slug: "vodni-para-jako-zpetna-vazba",
    title: "Jak změny vodní páry ovlivňují oteplování?",
    category: "Atmosféra a oceán",
    cardSummary: "Co ukázala měření páry vysoko nad tropy a proč její úbytek po erupci Pinatuba prohloubil ochlazení.",
    observations: [
      { href: "/pozorovani/narust-vlhkosti/#pozorovani", label: "Množství vodní páry a relativní vlhkost" },
    ],
    summary: "Po erupci sopky Pinatubo se Země na několik let ochladila a v atmosféře ubylo vodní páry. Vědci tak mohli ověřit, zda změna množství páry dokáže původní změnu teploty ještě zesílit.",
    distinguishingEvidence: "Družicová měření ukazují, zda nad teplejším tropickým oceánem ve výšce přibývá páry. Ochlazení po erupci Pinatuba lze porovnat s výpočty, které umožňují oddělit vliv páry na únik tepelného záření.",
  },
  {
    slug: "oblaka-a-jejich-klimaticke-zpetne-vazby",
    title: "Jak oblaka zesilují nebo tlumí oteplování?",
    category: "Atmosféra a oceán",
    cardSummary: "Jak vrcholy tropických bouří a nízká oblačnost nad oceány ovlivňují množství energie, které si Země při oteplování ponechá.",
    observations: [{ href: "/pozorovani/oblaka-a-radiacni-bilance/#vysledky", label: "Oblaka a radiační bilance" }],
    summary: "I oblaka, která dnes oceán ochlazují, mohou při oteplování chladit méně. Družicová měření a modelové pokusy ukazují, co se děje, když se nízká oblačnost protrhá nebo když ledové vrcholy tropických bouří vystoupí výš.",
    distinguishingEvidence: "Současné změny vlastností oblaků, teploty a radiačních toků v různých oblastech. Porovnání s fyzikálními výpočty při oddělení změn aerosolů a proudění ověřuje oblačnou odezvu na oteplování.",
  },
  {
    slug: "termodynamika-a-dynamika-srazek",
    title: "Proč se mění množství a intenzita srážek?",
    category: "Atmosféra a oceán",
    cardSummary: "Proč při lijáku může spadnout víc vody, i když v témže místě za celý rok srážek ubude.",
    observations: [
      { href: "/pozorovani/srazky-a-privalove-srazky/#pozorovani", label: "Úhrny a extrémy srážek" },
    ],
    summary: "Prudký liják a vytrvalý slabý déšť mohou ve srážkoměru zanechat stejné množství vody. O síle deště rozhoduje, kolik páry vzduch přináší a jak rychle stoupá. Pro srážky na celé Zemi záleží i na tom, kolik tepla atmosféra dokáže odvést.",
    distinguishingEvidence: "Oddělené porovnání celkových úhrnů, denních a hodinových extrémů. Měření vlhkosti, výstupných pohybů a proudění ověřují, proč se mění intenzita, četnost či trvání srážek v jednotlivých oblastech.",
  },
  {
    slug: "vnitrni-promenlivost-atmosfery-a-oceanu",
    title: "Jak vznikají výkyvy El Niño a La Niña?",
    category: "Atmosféra a oceán",
    cardSummary: "Proč slabší pasáty oteplují východ rovníkového Pacifiku a jak se už za teplé fáze může pod hladinou připravovat obrat.",
    observations: [
      { href: "/pozorovani/tepelny-obsah-oceanu/#enso-pacifik", label: "Teplotní výkyvy a zásoba teplé vody v Pacifiku" },
      { href: "/pozorovani/gmst/#zpomaleni-2002-2012", label: "Dočasné zpomalení růstu povrchové teploty" },
    ],
    summary: "Na jaře 1998 zůstávala hladina ve východním rovníkovém Pacifiku nezvykle teplá, přestože se k ní z hloubky už přibližovala chladnější voda. Teprve když v květnu znovu zesílil vítr od východu, začal se povrch prudce ochlazovat.",
    distinguishingEvidence: "Bóje měří vítr nad hladinou i změny teploty vody v různých hloubkách. Z jejich časového sledu lze poznat, co předchází obratu. V modelových pokusech lze měnit vítr a sledovat, jak různě se vyvine tentýž počáteční stav oceánu.",
  },
  {
    slug: "tepelna-roztaznost-morske-vody",
    title: "Proč se objem mořské vody mění s teplotou a slaností?",
    category: "Oceán a hladina moře",
    cardSummary: "Jak laboratorní měření a oceánské profily ověřují změnu hustoty, objemu a příspěvku k hladině moře.",
    observations: [
      { href: "/pozorovani/gmsl/#bilance-hladiny", label: "Objemový příspěvek ke změně hladiny moře" },
    ],
    summary: "Jak se ohřev a změna slanosti promítají do hustoty mořské vody. Od kontrolovaných laboratorních vzorků přes přepočet objemu až k ověření oceánskou hladinou.",
    distinguishingEvidence: "Výpočet objemové změny z profilů teploty a salinity. Porovnání s výškoměry po oddělení hmotnostního příspěvku ověřeného gravimetrií rozlišuje změnu objemu od přibývání vody.",
  },
  {
    slug: "bilance-globalni-hladiny-more",
    title: "Proč stoupá globální hladina moře?",
    category: "Oceán a hladina moře",
    cardSummary: "Jak z měření poznáme, o kolik zvedl hladinu ohřev vody a kolik vody do oceánu přibylo z pevniny?",
    observations: [
      { href: "/pozorovani/gmsl/#pozorovani", label: "Vzestup globální hladiny moře" },
      { href: "/pozorovani/gmsl/#pokles-2010-2011", label: "Dočasný pokles hladiny v letech 2010–2011" },
    ],
    summary: "Od března 2010 do května 2011 klesla průměrná hladina oceánu asi o půl centimetru. Kam se voda poděla a co tento krátký pokles prozradil o příčinách dlouhodobého vzestupu?",
    distinguishingEvidence: "Rozdílné stopy v teplotě, slanosti a gravitačním poli. Pokles hladiny při úbytku oceánské vody v letech 2010–2011 a společná bilance příspěvků za období 1993–2018 ověřují směr i velikost účinku.",
  },
  {
    slug: "pohlcovani-co2-oceanem-a-uhlicitanova-chemie",
    title: "Proč klesá pH povrchového oceánu?",
    category: "Oceán a hladina moře",
    cardSummary: "Jak ověřujeme příčinu dlouhodobého okyselování povrchové mořské vody.",
    observations: [
      { href: "/pozorovani/acidifikace-oceanu/#pozorovani", label: "Pokles pH mořské vody" },
    ],
    summary: "Ze složení mořské vody lze vypočítat, jak se změní její pH, když ve vzduchu přibude oxid uhličitý. U Havaje můžeme tuto předpověď porovnat se vzorky odebranými během téměř dvaceti let.",
    distinguishingEvidence: "Nezávislá kontrola chemického výpočtu plynovým a optickým měřením. Porovnání očekávaného tempa s pozorováním a rozklad globální změny na příspěvky uhlíku, teploty a dalších vlastností vody.",
  },
  {
    slug: "odrazivost-snehu-a-ledu-jako-zpetna-vazba",
    title: "Jak úbytek sněhu a ledu mění příjem sluneční energie?",
    category: "Kryosféra",
    cardSummary: "Změny odrazivosti povrchu a pohlcování sluneční energie při ústupu sněhu a ledu.",
    observations: [
      { href: "/pozorovani/snehova-pokryvka-a-permafrost/#odrazivost-snehu-a-ledu", label: "Změny pokrývky a přepočet sluneční bilance" },
      { href: "/pozorovani/ubytek-arktickeho-ledu/#odrazivost-arktidy", label: "Měřená odrazivost arktického oceánu" },
    ],
    summary: "Od laboratorního měření sněhu přes družicový odraz až k pokusu s oteplováním. Jak ověřujeme, zda ústup světlé pokrývky zesiluje příjem energie, ohřev a další tání.",
    distinguishingEvidence: "Současná měření sněhu a ledu, odrazivosti a pohlceného záření. Porovnání období s rozdílným slunečním osvitem a zohlednění oblačnosti ověřují velikost i sezónní průběh této zpětné vazby.",
  },
  {
    slug: "vznik-tani-a-pohyb-morskeho-ledu",
    title: "Proč arktický mořský led ubývá a tenčí se?",
    category: "Kryosféra",
    isMainQuestion: true,
    cardSummary: "Jak růst, tání a vývoz ker mění arktickou zásobu ledu a jak jejich vlivy rozlišíme.",
    observations: [
      { href: "/pozorovani/ubytek-arktickeho-ledu/#pozorovani", label: "Úbytek a tenčení arktického mořského ledu" },
    ],
    summary: "Proč větší plocha odnášených ker nemusí znamenat větší úbytek objemu a jak oteplování mění růst a tání. Vysvětlení ověřené měřením ve Framském průlivu, sedmi ledovými bójemi a rozborem dlouhodobých změn.",
    distinguishingEvidence: "Porovnání plochy a objemu vývozu, měřeného tání a odhadu pohlcené energie. Družicové řady a klimatické výpočty rozlišují příspěvek skleníkových plynů od přirozených vlivů a kolísání.",
  },
  {
    slug: "vznik-a-zanik-snehove-pokryvky-na-sousi",
    title: "Proč se mění množství sněhu a délka sněhové sezóny?",
    category: "Kryosféra",
    cardSummary: "Jak srážky, teplota a přísun energie mění zimní zásobu a jarní zánik sněhu.",
    observations: [
      { href: "/pozorovani/snehova-pokryvka-a-permafrost/#jarni-rozsah-snehu", label: "Jarní rozsah a zásoba sněhu v Arktidě" },
    ],
    summary: "Proč může sněhu ubývat i při větších srážkách a proč kratší sezona nemusí znamenat rychlejší tání každý den. Vysvětlení ověřené staničními hlášeními, měřením horské zásoby a rozborem povodí.",
    distinguishingEvidence: "Porovnání sněžení a energetické bilance se zásobou vody ve sněhu a datem odtání. Oddělení změn zimní zásoby a jarního tání vysvětluje rozdílný vývoj rozsahu, hmotnosti a délky sněhové sezóny.",
  },
  {
    slug: "hmotnostni-bilance-horskych-ledovcu",
    title: "Proč horské ledovce ztrácejí hmotu a ustupují?",
    category: "Kryosféra",
    isMainQuestion: true,
    cardSummary: "Vliv sněžení, tání a proudění ledu na hmotnost ledovce a polohu jeho čela.",
    observations: [
      { href: "/pozorovani/ustup-ledovcu/#pozorovani", label: "Úbytek hmotnosti a ústup horských ledovců" },
    ],
    summary: "Na francouzském ledovci Sarennes přibývalo v zimě víc sněhu než dřív, přesto ledovec dál ztrácel hmotu. Jakou roli hrálo letní tání a proč může trvat roky, než se změna projeví na dolním okraji ledovce?",
    distinguishingEvidence: "Porovnání zimních přírůstků, letních ztrát a toku ledu s celkovou bilancí. Společný vývoj rychlosti, tloušťky a polohy čela ověřuje, zda vysvětlení zachytí i časovou odezvu ledovce.",
  },
  {
    slug: "hmotnostni-bilance-a-dynamika-ledovych-prikrovu",
    title: "Proč Grónsko a Antarktida ztrácejí led?",
    category: "Kryosféra",
    isMainQuestion: true,
    cardSummary: "Kolik vody odtéká z tajícího povrchu a co určuje, jak rychle odchází do moře i pevný led.",
    observations: [
      { href: "/pozorovani/nestabilita-prikrovu/#pozorovani", label: "Úbytek hmotnosti Grónska a Antarktidy" },
    ],
    summary: "V Grónsku lze vodu z tajícího příkrovu měřit přímo v řece. V Antarktidě zase družice zachytily, jak po rozpadu plovoucího šelfu zrychlily ledovce na pevnině. Jak se oba děje promítají do změny hmotnosti příkrovů?",
    distinguishingEvidence: "Změny na povrchu a odtok pevného ledu lze porovnat s úbytkem hmotnosti zjištěným z gravitace. Vliv šelfu na pohyb ledu ukazuje rozdíl mezi ledovci, které po jeho rozpadu ztratily oporu, a těmi, kterým opora zůstala.",
  },
  {
    slug: "prenos-tepla-do-pudy-a-tani-permafrostu",
    title: "Proč rozmrzá permafrost?",
    category: "Kryosféra",
    cardSummary: "Šíření tepla do zmrzlé půdy a vliv sněhu, vody a vlastností podloží.",
    observations: [
      { href: "/pozorovani/snehova-pokryvka-a-permafrost/#teplota-permafrostu", label: "Teplota permafrostu ve vrtech" },
    ],
    summary: "Co odhalují hluboké vrty a pokus se sněhovým plotem o cestě tepla do půdy? Proč oteplování, tání ledu a sesedání terénu nepostupují stejným tempem?",
    distinguishingEvidence: "Zpoždění a zeslabení teplotních změn s hloubkou, porovnané s přenosem tepla a energií potřebnou k tání. Rozdíly mezi místy ověřují vliv sněhové izolace, vody a vlastností podloží.",
  },
  {
    slug: "biologicke-mechanismy-fenologickych-zmen",
    title: "Proč se mění doba kvetení rostlin a tahu ptáků?",
    category: "Živá příroda a extrémy",
    cardSummary: "Jak teplota, zimní chlad, délka dne a potrava mění kvetení a ptačí tah.",
    observations: [
      { href: "/pozorovani/fenologicke-posuny/#pozorovani", label: "Posuny kvetení a tahu ptáků" },
    ],
    summary: "Proč samotný sezónní kalendář nestačí? Pokusy s rostlinami a ptáky ukazují, jak teplota, zimní chlad a potrava mění průběh vývoje a přípravu k tahu.",
    distinguishingEvidence: "Pokusy oddělující teplotu, délku dne a předchozí chlad, porovnané s terénními záznamy rostlin. U ptáků porovnání druhů, migračních tras a podmínek v zimovišti i hnízdišti testuje jejich vliv na načasování tahu.",
  },
  {
    slug: "mechanismy-vln-veder",
    title: "Proč jsou vlny veder častější a silnější?",
    category: "Živá příroda a extrémy",
    cardSummary: "Jak se při vzniku veder spojují oteplování, proudění vzduchu a půdní voda a čím jejich příspěvky ověřujeme.",
    observations: [
      { href: "/pozorovani/vlny-veder/#pozorovani", label: "Dlouhodobé změny vln veder" },
    ],
    summary: "Co vysvětlí samotné proudění a co přidává oteplování a vysychání půdy? Dvě hypotézy, historie jejich zkoumání a testy na evropských, ruských a severoamerických vedrech.",
    distinguishingEvidence: "Porovnání dnů s podobným prouděním, pokusy s půdní vodou a opakování úspěšné předpovědi v chladnějším klimatu rozlišují vznik jedné události od dlouhodobé změny teploty a pravděpodobnosti.",
  },
];

export function mechanismBySlug(slug: string) {
  return climateMechanisms.find((mechanism) => mechanism.slug === slug);
}
