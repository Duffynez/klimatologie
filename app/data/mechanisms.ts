export type MechanismCategory =
  | "Záření a složení atmosféry"
  | "Atmosféra a oceán"
  | "Oceán a hladina moře"
  | "Kryosféra"
  | "Živá příroda a extrémy";

export type ClimateMechanism = {
  slug: string;
  title: string;
  category: MechanismCategory;
  cardSummary: string;
  summary: string;
  distinguishingEvidence: string;
};

export const climateMechanisms: ClimateMechanism[] = [
  {
    slug: "energeticka-bilance-zeme",
    title: "Proč v klimatickém systému přibývá energie?",
    category: "Záření a složení atmosféry",
    cardSummary: "Vliv Slunce, přirozeného kolísání a lidské činnosti na příjem a výdej energie Země.",
    summary: "Oceán, pevnina a atmosféra získávají energii a led taje. Sledujeme příběhy tří vysvětlení: silnějšího Slunce, přirozeného kolísání a lidského působení. Jejich testy vedou k vysvětlení, jak rozdíl příjmu a výdeje energie ohřívá Zemi.",
    distinguishingEvidence: "Změny slunečního příkonu, celkový přírůstek energie a rozložení ohřevu v hloubkách oceánu. Laboratorní vlastnosti plynů, pozemní měření jejich radiačního účinku a porovnání pozorování s výpočty přirozených a lidských vlivů.",
  },
  {
    slug: "radiacni-pusobeni-sklenikovych-plynu",
    title: "Proč další CO₂ mění tepelné záření Země?",
    category: "Záření a složení atmosféry",
    cardSummary: "Pohlcování a vyzařování infračerveného záření při rostoucím množství CO₂ v atmosféře.",
    summary: "Proč další CO₂ působí, i když už část záření téměř úplně pohlcuje? Historický spor o nasycení, laboratorní pokusy a pozemní i družicové testy vysvětlují přenos energie atmosférou.",
    distinguishingEvidence: "Změna záření v pásmu CO₂ při známé změně jeho koncentrace a po zohlednění teploty i vlhkosti. Shoda pozemních a družicových spekter s výpočty založenými na laboratorních vlastnostech plynů.",
  },
  {
    slug: "puvod-rustu-atmosferickeho-co2",
    title: "Proč v atmosféře přibývá CO₂?",
    category: "Záření a složení atmosféry",
    cardSummary: "Zdroje oxidu uhličitého a jeho pohlcování oceánem a pevninou.",
    summary: "Pochází přibývající CO₂ z oceánu, pevniny, nebo fosilních paliv? Historie tří vysvětlení a zkoušky původu i množství uhlíku ve vzduchu.",
    distinguishingEvidence: "Porovnání emisí a pohlcování CO₂ s jeho přírůstkem v atmosféře, izotopovým složením uhlíku a poklesem kyslíku. Sezónní a zeměpisné rozdíly ověřují úlohu vegetace a přenosu vzduchu.",
  },
  {
    slug: "slunecni-promenlivost",
    title: "Jak sluneční cyklus ovlivňuje klima?",
    category: "Záření a složení atmosféry",
    cardSummary: "Proměnlivý sluneční příkon, oteplující stopa ve stratosféře a testy vlivu kosmického záření na oblaka.",
    summary: "Jak se malá změna Slunce projeví v atmosféře a oceánu? Dvě hypotézy, laboratorní i družicové testy a vysvětlení velikosti teplotní odezvy na sluneční cyklus.",
    distinguishingEvidence: "Porovnání změřených změn slunečního záření s velikostí, načasováním a výškovým průběhem teplotní odezvy. Ověření vztahu k jedenáctiletému slunečnímu cyklu i dlouhodobému vývoji.",
  },
  {
    slug: "sopecne-aerosoly",
    title: "Proč mohou velké sopečné erupce ochladit Zemi?",
    category: "Záření a složení atmosféry",
    cardSummary: "Popel, sirné kapky a testy ochlazení po erupci Pinatuba.",
    summary: "Proč po erupci Pinatuba klesla teplota u povrchu, zatímco spodní stratosféra se oteplila? Dvě hypotézy a jejich ověření měřením částic, záření a teploty.",
    distinguishingEvidence: "Časová návaznost mezi erupcí, změnou množství stratosférických částic, průchodem záření a teplotou. Porovnání ochlazení povrchu s oteplením části stratosféry a následným odezněním účinku.",
  },
  {
    slug: "prumyslove-aerosoly-a-oblaka",
    title: "Jak částice z lidské činnosti ovlivňují záření a oblaka?",
    category: "Záření a složení atmosféry",
    cardSummary: "Rozptyl a pohlcování záření částicemi a jejich vliv na oblačné kapky.",
    summary: "Částice z lidské činnosti rozptylují a pohlcují záření. Mohou také změnit tvorbu oblačných kapek a vlastnosti oblaků.",
    distinguishingEvidence: "Porovnání oblastí a období s rozdílnými emisemi při zohlednění počasí. Souběžné změny částic, oblačných kapek a záření ověřují přímé působení aerosolů i jejich vliv prostřednictvím oblaků.",
  },
  {
    slug: "zmeny-ozonu-ve-stratosfere",
    title: "Jak změny ozonu ovlivňují teplotu stratosféry?",
    category: "Záření a složení atmosféry",
    cardSummary: "Pohlcování záření ozonem a změny teploty při jeho úbytku či přibývání.",
    summary: "Ozon pohlcuje ultrafialové i infračervené záření, takže změna jeho množství ovlivňuje teplotu stratosféry.",
    distinguishingEvidence: "Porovnání změn ozonu a teploty v jednotlivých výškách, oblastech a ročních obdobích. Chemická měření a vývoj po omezení látek poškozujících ozon pomáhají oddělit jeho vliv od CO₂ a proudění.",
  },
  {
    slug: "pohlcovani-a-presun-tepla-oceanem",
    title: "Jak se teplo dostává do oceánu a šíří se v něm?",
    category: "Atmosféra a oceán",
    cardSummary: "Příjem energie přes mořskou hladinu a přenos tepla mezi oblastmi a hloubkami.",
    summary: "Oceán přijímá většinu přebytečné energie a prouděním ji přemisťuje mezi oblastmi a hloubkami.",
    distinguishingEvidence: "Porovnání toků tepla přes hladinu a přenosu proudy se změnou zásoby tepla v různých oblastech a hloubkách. Společná bilance odlišuje přesun energie uvnitř oceánu od jejího celkového přírůstku.",
  },
  {
    slug: "vodni-para-jako-zpetna-vazba",
    title: "Jak souvisejí změny vlhkosti s oteplováním?",
    category: "Atmosféra a oceán",
    cardSummary: "Vztah teploty, výparu a vlhkosti a další působení vodní páry na záření.",
    summary: "Teplota, výpar a přenos vzduchu společně určují množství vodní páry a relativní vlhkost. Vodní pára následně mění přenos infračerveného záření.",
    distinguishingEvidence: "Současný růst množství páry a pokles relativní vlhkosti nad částí pevniny, rozdíly mezi souší a oceánem a výškové profily. Radiační měření ověřují další článek vazby mezi vlhkostí a oteplováním.",
  },
  {
    slug: "oblaka-a-jejich-klimaticke-zpetne-vazby",
    title: "Jak oblaka zesilují nebo tlumí oteplování?",
    category: "Atmosféra a oceán",
    cardSummary: "Odraz slunečního záření a přenos tepelného záření při změnách oblačnosti.",
    summary: "Oblaka odrážejí sluneční záření a ovlivňují únik infračerveného záření. Změny jejich množství, výšky a složení při oteplování mění další vývoj teploty.",
    distinguishingEvidence: "Současné změny vlastností oblaků, teploty a radiačních toků v různých oblastech. Porovnání s fyzikálními výpočty při oddělení změn aerosolů a proudění ověřuje oblačnou odezvu na oteplování.",
  },
  {
    slug: "termodynamika-a-dynamika-srazek",
    title: "Proč se mění množství a intenzita srážek?",
    category: "Atmosféra a oceán",
    cardSummary: "Úloha vodní páry, proudění vzduchu a energetických toků v úhrnech a intenzitě srážek.",
    summary: "Dostupná vodní pára, pohyb vzduchu a energetické toky určují množství a intenzitu srážek. Celkové úhrny a nejsilnější srážky mohou reagovat rozdílně.",
    distinguishingEvidence: "Oddělené porovnání celkových úhrnů, denních a hodinových extrémů. Měření vlhkosti, výstupných pohybů a proudění ověřují, proč se mění intenzita, četnost či trvání srážek v jednotlivých oblastech.",
  },
  {
    slug: "vnitrni-promenlivost-atmosfery-a-oceanu",
    title: "Proč klima kolísá i bez změny vnějších vlivů?",
    category: "Atmosféra a oceán",
    cardSummary: "Proudění a výměna energie mezi atmosférou a oceánem při El Niño a dalších výkyvech.",
    summary: "Proudění a vzájemná výměna energie vytvářejí kolísání klimatu i bez změny vnějšího působení.",
    distinguishingEvidence: "Časový sled a prostorové uspořádání změn teploty, větru a oceánu během El Niño a dalších výkyvů. Bilance celého systému odlišuje vnitřní přesuny tepla od dlouhodobého přírůstku energie.",
  },
  {
    slug: "tepelna-roztaznost-morske-vody",
    title: "Proč se objem mořské vody mění s teplotou a slaností?",
    category: "Oceán a hladina moře",
    cardSummary: "Vliv teploty a obsahu solí na hustotu vody, její objem a výšku hladiny.",
    summary: "Teplota a salinita, tedy obsah rozpuštěných solí, ovlivňují hustotu mořské vody. Jejich změny se proto promítají do objemu vody a výšky hladiny.",
    distinguishingEvidence: "Výpočet objemové změny z profilů teploty a salinity. Porovnání s výškoměry po oddělení hmotnostního příspěvku ověřeného gravimetrií rozlišuje změnu objemu od přibývání vody.",
  },
  {
    slug: "bilance-globalni-hladiny-more",
    title: "Proč stoupá hladina moře?",
    category: "Oceán a hladina moře",
    cardSummary: "Rozpínání mořské vody, přísun vody z pevniny a příčiny regionálních rozdílů.",
    summary: "Změna objemu mořské vody a přísun vody z pevniny společně mění globální hladinu. Regionální rozdíly dále souvisejí s prouděním, gravitací a pohybem souše.",
    distinguishingEvidence: "Porovnání celkové změny hladiny se součtem objemového příspěvku, úbytku pevninského ledu a změn zásob vody na souši. Prostorový obraz a pohyb pobřeží ověřují vysvětlení místních odchylek.",
  },
  {
    slug: "pohlcovani-co2-oceanem-a-uhlicitanova-chemie",
    title: "Proč se oceán okyseluje?",
    category: "Oceán a hladina moře",
    cardSummary: "Přijímání CO₂ oceánem a jeho vliv na chemické složení a kyselost mořské vody.",
    summary: "Přijímání CO₂ mění rovnováhu rozpuštěných forem uhlíku a pH mořské vody. Proudění, teplota a biologická činnost ovlivňují průběh změn v různých oblastech, hloubkách a ročních obdobích.",
    distinguishingEvidence: "Porovnání očekávané chemické odezvy s měřením rozpuštěného uhlíku, pH, alkality a CO₂ ve vzduchu i vodě. Opakované profily a sezónní záznamy rozlišují vliv přísunu CO₂, proudění a biologické činnosti.",
  },
  {
    slug: "odrazivost-snehu-a-ledu-jako-zpetna-vazba",
    title: "Jak úbytek sněhu a ledu zesiluje oteplování?",
    category: "Kryosféra",
    cardSummary: "Změny odrazivosti povrchu a pohlcování sluneční energie při ústupu sněhu a ledu.",
    summary: "Úbytek světlého sněhu a ledu odkrývá tmavší povrch, který pohlcuje více sluneční energie. Tím může zesílit oteplování a další tání.",
    distinguishingEvidence: "Současná měření sněhu a ledu, odrazivosti a pohlceného záření. Porovnání období s rozdílným slunečním osvitem a zohlednění oblačnosti ověřují velikost i sezónní průběh této zpětné vazby.",
  },
  {
    slug: "vznik-tani-a-pohyb-morskeho-ledu",
    title: "Proč se mění rozsah a tloušťka mořského ledu?",
    category: "Kryosféra",
    cardSummary: "Růst a tání mořského ledu spolu s jeho pohybem působením větru a proudů.",
    summary: "Výměna tepla mezi atmosférou, sněhem, ledem a oceánem řídí zamrzání a tání. Vítr a proudy led přesouvají, stlačují a odnášejí z jednotlivých oblastí.",
    distinguishingEvidence: "Porovnání energetických toků, růstu a tání s měřeným pohybem a vývozem ledu. Vysvětlení musí současně zachytit změny rozsahu, tloušťky, stáří a objemu během roku.",
  },
  {
    slug: "vznik-a-zanik-snehove-pokryvky-na-sousi",
    title: "Proč se mění množství sněhu a délka sněhové sezóny?",
    category: "Kryosféra",
    cardSummary: "Sněžení, hromadění a úbytek sněhu během roku a jejich vztah k počasí.",
    summary: "Podíl deště a sněhu, hromadění sněhu, tání, výpar a přenos větrem určují zásobu sněhu na zemi. Jejich sezónní průběh rozhoduje o začátku a konci sněhové pokrývky.",
    distinguishingEvidence: "Porovnání sněžení a energetické bilance se zásobou vody ve sněhu a datem odtání. Oddělení změn zimní zásoby a jarního tání vysvětluje rozdílný vývoj rozsahu, hmotnosti a délky sněhové sezóny.",
  },
  {
    slug: "hmotnostni-bilance-horskych-ledovcu",
    title: "Proč horské ledovce ztrácejí hmotu a ustupují?",
    category: "Kryosféra",
    cardSummary: "Vliv sněžení, tání a proudění ledu na hmotnost ledovce a polohu jeho čela.",
    summary: "Sněžení přidává hmotnost. Odtok tavné vody, odlamování ledu a jeho přímý přechod na vodní páru ji ubírají. Proudění ledu a tvar údolí ovlivňují, jak a s jakým zpožděním se změní jeho délka a poloha čela.",
    distinguishingEvidence: "Porovnání zimních přírůstků, letních ztrát a toku ledu s celkovou bilancí. Společný vývoj rychlosti, tloušťky a polohy čela ověřuje, zda vysvětlení zachytí i časovou odezvu ledovce.",
  },
  {
    slug: "hmotnostni-bilance-a-dynamika-ledovych-prikrovu",
    title: "Proč Grónsko a Antarktida ztrácejí led?",
    category: "Kryosféra",
    cardSummary: "Sněžení, tání a odtok ledu do oceánu v různých částech ledových příkrovů.",
    summary: "Přírůstky sněhu a odtok tavné vody se kombinují s prouděním ledu a jeho odtokem do oceánu. Jejich podíl na změně hmotnosti se liší mezi Grónskem a oblastmi Antarktidy.",
    distinguishingEvidence: "Oddělené bilance povrchu a odtoku ledu, porovnané s celkovou změnou hmotnosti. Vztah mezi oteplováním oceánu, táním ledových šelfů, pohybem linie ukotvení a zrychlováním ledu testuje dynamické vysvětlení.",
  },
  {
    slug: "prenos-tepla-do-pudy-a-tani-permafrostu",
    title: "Proč rozmrzá permafrost?",
    category: "Kryosféra",
    cardSummary: "Šíření tepla do zmrzlé půdy a vliv sněhu, vody a vlastností podloží.",
    summary: "Teplo se šíří půdou a jeho průběh mění sněhová izolace, voda, led a vlastnosti hornin nebo sedimentu.",
    distinguishingEvidence: "Zpoždění a zeslabení teplotních změn s hloubkou, porovnané s přenosem tepla a energií potřebnou k tání. Rozdíly mezi místy ověřují vliv sněhové izolace, vody a vlastností podloží.",
  },
  {
    slug: "biologicke-mechanismy-fenologickych-zmen",
    title: "Proč se mění doba kvetení rostlin a tahu ptáků?",
    category: "Živá příroda a extrémy",
    cardSummary: "Vliv teploty, délky dne a dostupnosti vody či potravy na sezónní rytmy organismů.",
    summary: "Teplota, délka dne, předchozí chlad a dostupnost vody ovlivňují vývoj rostlin. U živočichů do načasování migrace a rozmnožování vstupuje také vnitřní roční rytmus a dostupnost potravy.",
    distinguishingEvidence: "Pokusy oddělující teplotu, délku dne a předchozí chlad, porovnané s terénními záznamy rostlin. U ptáků porovnání druhů, migračních tras a podmínek v zimovišti i hnízdišti testuje jejich vliv na načasování tahu.",
  },
  {
    slug: "mechanismy-vln-veder",
    title: "Proč jsou vlny veder častější a silnější?",
    category: "Živá příroda a extrémy",
    cardSummary: "Jak se při vzniku veder spojují oteplování, proudění vzduchu a půdní voda a čím jejich příspěvky ověřujeme.",
    summary: "Co vysvětlí samotné proudění a co přidává oteplování a vysychání půdy? Dvě hypotézy, historie jejich zkoumání a testy na evropských, ruských a severoamerických vedrech.",
    distinguishingEvidence: "Porovnání dnů s podobným prouděním, pokusy s půdní vodou a opakování úspěšné předpovědi v chladnějším klimatu rozlišují vznik jedné události od dlouhodobé změny teploty a pravděpodobnosti.",
  },
];

export const mechanismCategories: MechanismCategory[] = [
  "Záření a složení atmosféry",
  "Atmosféra a oceán",
  "Oceán a hladina moře",
  "Kryosféra",
  "Živá příroda a extrémy",
];

export function mechanismBySlug(slug: string) {
  return climateMechanisms.find((mechanism) => mechanism.slug === slug);
}
