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
  isComplete?: boolean;
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
    isComplete: true,
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
    isComplete: true,
    cardSummary: "Pohlcování a vyzařování infračerveného záření při rostoucím množství CO₂ v atmosféře.",
    observations: [
      { href: "/pozorovani/atmosfericka-koncentrace-co2/#zmena-infracerveneho-zareni", label: "CO₂ a změna infračerveného záření" },
    ],
    summary: "Proč další CO₂ působí, i když už část záření téměř úplně pohlcuje? Historický spor o nasycení, laboratorní pokusy a pozemní i družicové testy vysvětlují přenos energie atmosférou.",
    distinguishingEvidence: "Změna záření v pásmu CO₂ při známé změně jeho koncentrace a po zohlednění teploty i vlhkosti. Shoda pozemních a družicových spekter s výpočty založenými na laboratorních vlastnostech plynů.",
  },
  {
    slug: "puvod-rustu-atmosferickeho-co2",
    title: "Proč v atmosféře přibývá CO₂?",
    category: "Záření a složení atmosféry",
    isMainQuestion: true,
    isComplete: true,
    cardSummary: "Zdroje oxidu uhličitého a jeho pohlcování oceánem a pevninou.",
    observations: [
      { href: "/pozorovani/atmosfericka-koncentrace-co2/#pozorovani", label: "Růst koncentrace CO₂ v atmosféře" },
    ],
    summary: "Pochází přibývající CO₂ z oceánu, pevniny, nebo fosilních paliv? Historie tří vysvětlení a zkoušky původu i množství uhlíku ve vzduchu.",
    distinguishingEvidence: "Porovnání emisí a pohlcování CO₂ s jeho přírůstkem v atmosféře, izotopovým složením uhlíku a poklesem kyslíku. Sezónní a zeměpisné rozdíly ověřují úlohu vegetace a přenosu vzduchu.",
  },
  {
    slug: "slunecni-promenlivost",
    title: "Jak sluneční cyklus ovlivňuje klima?",
    category: "Záření a složení atmosféry",
    isComplete: true,
    cardSummary: "Proměnlivý sluneční příkon, oteplující stopa ve stratosféře a testy vlivu kosmického záření na oblaka.",
    observations: [
      { href: "/pozorovani/slunecni-zareni/#pozorovani", label: "Proměny slunečního záření" },
      { href: "/pozorovani/stratosfericke-ochlazovani/#slunecni-cyklus", label: "Sluneční cyklus v teplotě stratosféry" },
    ],
    summary: "Jak se malá změna Slunce projeví v atmosféře a oceánu? Dvě hypotézy, laboratorní i družicové testy a vysvětlení velikosti teplotní odezvy na sluneční cyklus.",
    distinguishingEvidence: "Porovnání změřených změn slunečního záření s velikostí, načasováním a výškovým průběhem teplotní odezvy. Ověření vztahu k jedenáctiletému slunečnímu cyklu i dlouhodobému vývoji.",
  },
  {
    slug: "sopecne-aerosoly",
    title: "Proč mohou velké sopečné erupce ochladit Zemi?",
    category: "Záření a složení atmosféry",
    isComplete: true,
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
    isComplete: true,
    cardSummary: "Lodní a průmyslové stopy ukazují, jak částice mění kapky a odraz světla.",
    observations: [
      { href: "/pozorovani/stopy-v-oblacich/#vysledky", label: "Stopy lodí a průmyslu v oblacích" },
    ],
    summary: "Co vytváří jasnější oblaka za loděmi a průmyslovými zdroji? Dvě hypotézy, letecké pokusy a změny po omezení síry v palivu. Jak částice působí na kapky, záření a klima.",
    distinguishingEvidence: "Porovnání oblastí a období s rozdílnými emisemi při zohlednění počasí. Souběžné změny částic, oblačných kapek a záření ověřují přímé působení aerosolů i jejich vliv prostřednictvím oblaků.",
  },
  {
    slug: "zmeny-ozonu-ve-stratosfere",
    title: "Proč se nad Antarktidou ochladila jarní stratosféra?",
    category: "Záření a složení atmosféry",
    isMainQuestion: true,
    isComplete: true,
    cardSummary: "Ozon, CO₂ a proudění v testech výrazného jarního ochlazení.",
    observations: [
      { href: "/pozorovani/stratosfericke-ochlazovani/#antarkticke-jaro", label: "Jarní ochlazení dolní stratosféry nad Antarktidou" },
    ],
    summary: "Proč se dolní stratosféra nad Antarktidou na konci 20. století nejvíce ochladila právě na jaře? Porovnání vlivu CO₂ a ozonu, kontrolované pokusy a vysvětlení výměny energie.",
    distinguishingEvidence: "Porovnání změn ozonu a teploty v jednotlivých výškách, oblastech a ročních obdobích. Chemická měření a vývoj po omezení látek poškozujících ozon pomáhají oddělit jeho vliv od CO₂ a proudění.",
  },
  {
    slug: "pohlcovani-a-presun-tepla-oceanem",
    title: "Proč se teplo v Jižním oceánu ukládá jinde, než přichází?",
    category: "Atmosféra a oceán",
    isMainQuestion: true,
    isComplete: true,
    cardSummary: "Promíchávání a proudění v testech nerovnoměrného oteplování oceánu.",
    observations: [
      { href: "/pozorovani/tepelny-obsah-oceanu/#jizni-ocean", label: "Příjem a ukládání tepla v Jižním oceánu" },
    ],
    summary: "Pomalé oteplování hladiny nemusí znamenat malý příjem tepla. Jak výstup hlubinné vody, proudění a zanořování rozdělují přijatou energii v Jižním oceánu?",
    distinguishingEvidence: "Porovnání toků tepla přes hladinu a přenosu proudy se změnou zásoby tepla v různých oblastech a hloubkách. Společná bilance odlišuje přesun energie uvnitř oceánu od jejího celkového přírůstku.",
  },
  {
    slug: "vodni-para-jako-zpetna-vazba",
    title: "Jak změny vodní páry ovlivňují oteplování?",
    category: "Atmosféra a oceán",
    isComplete: true,
    cardSummary: "Spor o vysušování horní troposféry a testy zesilujícího účinku vodní páry.",
    observations: [
      { href: "/pozorovani/narust-vlhkosti/#pozorovani", label: "Množství vodní páry a relativní vlhkost" },
    ],
    summary: "Proč při oteplování přibývá vodní páry, i když relativní vlhkost místy klesá? Dvě hypotézy, jejich historie a testy pomocí družicových profilů, záření a ochlazení po Pinatubu.",
    distinguishingEvidence: "Současný růst množství páry a pokles relativní vlhkosti nad částí pevniny, rozdíly mezi souší a oceánem a výškové profily. Radiační měření ověřují další článek vazby mezi vlhkostí a oteplováním.",
  },
  {
    slug: "oblaka-a-jejich-klimaticke-zpetne-vazby",
    title: "Jak oblaka zesilují nebo tlumí oteplování?",
    category: "Atmosféra a oceán",
    isComplete: true,
    cardSummary: "Jak změny plochy, výšky a odrazivosti oblaků ovlivňují další oteplování.",
    observations: [{ href: "/pozorovani/oblaka-a-radiacni-bilance/#vysledky", label: "Oblaka a radiační bilance" }],
    summary: "Proč dnešní ochlazující účinek oblaků neznamená, že budou oteplování tlumit. Tři oblačné odezvy, jejich historie a konkrétní testy plochy, výšky a odrazu světla.",
    distinguishingEvidence: "Současné změny vlastností oblaků, teploty a radiačních toků v různých oblastech. Porovnání s fyzikálními výpočty při oddělení změn aerosolů a proudění ověřuje oblačnou odezvu na oteplování.",
  },
  {
    slug: "termodynamika-a-dynamika-srazek",
    title: "Proč se mění množství a intenzita srážek?",
    category: "Atmosféra a oceán",
    isComplete: true,
    cardSummary: "Úloha vodní páry, proudění vzduchu a energetických toků v úhrnech a intenzitě srážek.",
    observations: [
      { href: "/pozorovani/srazky-a-privalove-srazky/#pozorovani", label: "Úhrny a extrémy srážek" },
    ],
    summary: "Proč mohou nejsilnější deště zesilovat, i když se celkový úhrn mění málo? Výzkum vodní páry, energie a proudění vysvětluje rozdíly mezi lijákem, deštivým rokem a změnami v jednotlivých oblastech.",
    distinguishingEvidence: "Oddělené porovnání celkových úhrnů, denních a hodinových extrémů. Měření vlhkosti, výstupných pohybů a proudění ověřují, proč se mění intenzita, četnost či trvání srážek v jednotlivých oblastech.",
  },
  {
    slug: "vnitrni-promenlivost-atmosfery-a-oceanu",
    title: "Proč klima kolísá i bez změny vnějších vlivů?",
    category: "Atmosféra a oceán",
    cardSummary: "Proudění a výměna energie mezi atmosférou a oceánem při El Niño a dalších výkyvech.",
    observations: [
      { href: "/pozorovani/gmst/#zpomaleni-2002-2012", label: "Dočasné zpomalení růstu povrchové teploty" },
    ],
    summary: "Proudění a vzájemná výměna energie vytvářejí kolísání klimatu i bez změny vnějšího působení.",
    distinguishingEvidence: "Časový sled a prostorové uspořádání změn teploty, větru a oceánu během El Niño a dalších výkyvů. Bilance celého systému odlišuje vnitřní přesuny tepla od dlouhodobého přírůstku energie.",
  },
  {
    slug: "tepelna-roztaznost-morske-vody",
    title: "Proč se objem mořské vody mění s teplotou a slaností?",
    category: "Oceán a hladina moře",
    cardSummary: "Vliv teploty a obsahu solí na hustotu vody, její objem a výšku hladiny.",
    observations: [
      { href: "/pozorovani/gmsl/#bilance-hladiny", label: "Objemový příspěvek ke změně hladiny moře" },
    ],
    summary: "Teplota a salinita, tedy obsah rozpuštěných solí, ovlivňují hustotu mořské vody. Jejich změny se proto promítají do objemu vody a výšky hladiny.",
    distinguishingEvidence: "Výpočet objemové změny z profilů teploty a salinity. Porovnání s výškoměry po oddělení hmotnostního příspěvku ověřeného gravimetrií rozlišuje změnu objemu od přibývání vody.",
  },
  {
    slug: "bilance-globalni-hladiny-more",
    title: "Proč stoupá hladina moře?",
    category: "Oceán a hladina moře",
    cardSummary: "Rozpínání mořské vody, přísun vody z pevniny a příčiny regionálních rozdílů.",
    observations: [
      { href: "/pozorovani/gmsl/#pozorovani", label: "Vzestup globální hladiny moře" },
    ],
    summary: "Změna objemu mořské vody a přísun vody z pevniny společně mění globální hladinu. Regionální rozdíly dále souvisejí s prouděním, gravitací a pohybem souše.",
    distinguishingEvidence: "Porovnání celkové změny hladiny se součtem objemového příspěvku, úbytku pevninského ledu a změn zásob vody na souši. Prostorový obraz a pohyb pobřeží ověřují vysvětlení místních odchylek.",
  },
  {
    slug: "pohlcovani-co2-oceanem-a-uhlicitanova-chemie",
    title: "Proč klesá pH povrchového oceánu?",
    category: "Oceán a hladina moře",
    isComplete: true,
    cardSummary: "Jak ověřujeme příčinu dlouhodobého okyselování povrchové mořské vody.",
    observations: [
      { href: "/pozorovani/acidifikace-oceanu/#pozorovani", label: "Pokles pH mořské vody" },
    ],
    summary: "Laboratorní pokusy, dlouhé měření u Havaje a globální rozbor ukazují, jak přísun CO₂ mění chemii vody. Co tyto zkoušky říkají o příčině poklesu pH a o vlivu teploty, proudění a biologické činnosti.",
    distinguishingEvidence: "Nezávislá kontrola chemického výpočtu plynovým a optickým měřením. Porovnání očekávaného tempa s pozorováním a rozklad globální změny na příspěvky uhlíku, teploty a dalších vlastností vody.",
  },
  {
    slug: "odrazivost-snehu-a-ledu-jako-zpetna-vazba",
    title: "Jak úbytek sněhu a ledu mění příjem sluneční energie?",
    category: "Kryosféra",
    isComplete: true,
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
    isComplete: true,
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
    isComplete: true,
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
    isComplete: true,
    cardSummary: "Vliv sněžení, tání a proudění ledu na hmotnost ledovce a polohu jeho čela.",
    observations: [
      { href: "/pozorovani/ustup-ledovcu/#pozorovani", label: "Úbytek hmotnosti a ústup horských ledovců" },
    ],
    summary: "Jak odlišíme menší zimní přírůstky od většího letního tání a proč může čelo ustupovat se zpožděním. Vysvětlení bilance, přísunu energie a proudění ledu opřené o sezonní měření a historii konkrétních ledovců.",
    distinguishingEvidence: "Porovnání zimních přírůstků, letních ztrát a toku ledu s celkovou bilancí. Společný vývoj rychlosti, tloušťky a polohy čela ověřuje, zda vysvětlení zachytí i časovou odezvu ledovce.",
  },
  {
    slug: "hmotnostni-bilance-a-dynamika-ledovych-prikrovu",
    title: "Proč Grónsko a Antarktida ztrácejí led?",
    category: "Kryosféra",
    isMainQuestion: true,
    isComplete: true,
    cardSummary: "Sněžení, tání a odtok ledu do oceánu v různých částech ledových příkrovů.",
    observations: [
      { href: "/pozorovani/nestabilita-prikrovu/#pozorovani", label: "Úbytek hmotnosti Grónska a Antarktidy" },
    ],
    summary: "Co odhalují grónské řeky, družicová měření a rozpad šelfu Larsen B? Jak rozlišíme tání na povrchu od zrychleného odtoku ledu do moře a proč záleží na mechanické opoře ledovců?",
    distinguishingEvidence: "Oddělené bilance povrchu a odtoku ledu, porovnané s celkovou změnou hmotnosti. Vztah mezi oteplováním oceánu, táním ledových šelfů, pohybem linie ukotvení a zrychlováním ledu testuje dynamické vysvětlení.",
  },
  {
    slug: "prenos-tepla-do-pudy-a-tani-permafrostu",
    title: "Proč rozmrzá permafrost?",
    category: "Kryosféra",
    isComplete: true,
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
    isComplete: true,
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
    isComplete: true,
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
