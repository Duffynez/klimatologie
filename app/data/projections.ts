export const projectionScopes = [
  { slug: "svet", label: "Celý svět" },
  { slug: "regiony", label: "Regiony světa" },
  { slug: "cesko", label: "Česko" },
] as const;

export type ProjectionScope = typeof projectionScopes[number]["slug"];

export const scopeByArea = {
  "Celý svět": "svet",
  "Střední Evropa": "regiony",
  "Rovníkový Pacifik": "regiony",
  Arktida: "regiony",
  Česko: "cesko",
} as const satisfies Record<string, ProjectionScope>;

type EvidenceLink = { href: string; label: string };
type ProjectionSource = { id: string; label: string };

type Projection = {
  slug: string;
  title: string;
  category: string;
  area: keyof typeof scopeByArea;
  summary: string;
  description: string;
  observation: EvidenceLink;
  mechanism: EvidenceLink;
  source: ProjectionSource;
  dataSource?: ProjectionSource;
};

export const projections: Projection[] = [
  {
    slug: "globalni-otepleni",
    area: "Celý svět",
    title: "O kolik se může Země oteplit do poloviny a konce století?",
    category: "Teplota a energetická bilance Země",
    summary: "Průměrná teplota Země v letech 2041–2060 a 2081–2100 při nízkých a vysokých emisích.",
    description: "Projekce ukazují, o kolik bude povrch Země v letech 2041–2060 a 2081–2100 teplejší oproti průměru let 1850–1900. Rozdíl mezi scénáři s nízkými a vysokými emisemi do konce století narůstá.",
    observation: { href: "/pozorovani/gmst/#pozorovani", label: "Dosavadní růst globální teploty" },
    mechanism: { href: "/mechanismy/energeticka-bilance-zeme/#lidske-pusobeni-princip", label: "Proč se povrch Země otepluje" },
    source: { id: "DOI_10_5285_98af2184e13e4b91893ab72f301790db", label: "Teplotní křivky pro pět scénářů" },
  },
  {
    slug: "cetnost-mimoradne-horkych-dnu",
    area: "Celý svět",
    title: "Jak často se vrátí vedro, které dříve přicházelo jednou za deset let?",
    category: "Teplota a energetická bilance Země",
    summary: "Jak často nejteplejší den roku překročí místní teplotní hranici, která byla v letech 1850–1900 výjimečná.",
    description: "Pro každé místo na pevnině lze určit teplotu, kterou tam v letech 1850–1900 nejteplejší den roku překonal v průměru jednou za deset let. Jak často ji překoná v teplejším světě? Při globálním oteplení o 1,5 °C vychází průměr přes světovou pevninu na přibližně čtyři takové roky za desetiletí. Při oteplení o 2 °C už téměř na šest.",
    observation: { href: "/pozorovani/vlny-veder/#mereni-teploty", label: "Jak stanice měří nejvyšší denní teplotu" },
    mechanism: { href: "/mechanismy/mechanismy-vln-veder/#teplotni-posun", label: "Proč se s oteplením častěji překračuje stejná hranice" },
    source: { id: "DOI_10_5285_93d1b84fbb144901809eaf67b35eb5c4", label: "Četnost mimořádného vedra při různém oteplení (IPCC, obr. SPM.6)" },
  },
  {
    slug: "delka-vln-veder",
    area: "Střední Evropa",
    title: "Jak dlouho mohou trvat vlny veder ve střední Evropě?",
    category: "Teplota a energetická bilance Země",
    summary: "Délka horkých období ve střední Evropě při globálním oteplení o 1,5 °C a o 2 °C.",
    description: "Vědci sledují, kolik dní po sobě se teplota drží nad hranicí, kterou dříve v daném místě překračovala jen zřídka. Podle stejné hranice pak srovnávají délku veder při globálním oteplení o 1,5 °C a o 2 °C oproti předindustriální době.",
    observation: { href: "/pozorovani/vlny-veder/#hranice-a-trvani", label: "Jak se určuje délka vlny veder" },
    mechanism: { href: "/mechanismy/mechanismy-vln-veder/#teplotni-posun", label: "Proč oteplení prodlužuje vedra" },
    source: { id: "DOI_10_1007_s00382_023_06798_4", label: "Projekce délky veder v Evropě" },
  },
  {
    slug: "rozlozeni-srazek",
    area: "Celý svět",
    title: "Kde ve světě bude s oteplováním přibývat srážek a kde ubývat?",
    category: "Srážky a voda na pevnině",
    summary: "Mapy ukazují, jak se s oteplením o 1,5 °C, 2 °C a 4 °C mění množství deště a sněhu za celý rok.",
    description: "Ve vysokých zeměpisných šířkách a nad rovníkovým Pacifikem modely očekávají za rok více srážek. Ve velké části Středomoří jich naopak ubývá. Mapy ukazují, o kolik procent se v daném místě změní množství vody, které za rok spadne jako déšť nebo sníh, oproti průměru let 1850–1900. Při větším oteplení se rozdíly mezi oblastmi zvýrazní.",
    observation: { href: "/pozorovani/srazky-a-privalove-srazky/#pozorovani", label: "Jak se měnily naměřené úhrny srážek" },
    mechanism: { href: "/mechanismy/termodynamika-a-dynamika-srazek/#oblasti-a-obdobi", label: "Co rozhoduje o ročním množství srážek v dané oblasti" },
    source: { id: "DOI_10_5285_1b91153925dd474387bb696d59adbd15", label: "Světové mapy změn ročních srážek (IPCC, obr. SPM.5c)" },
  },
  {
    slug: "nejdestivejsi-den",
    area: "Střední Evropa",
    title: "Kolik může ve střední Evropě napršet za nejdeštivější den roku?",
    category: "Srážky a voda na pevnině",
    summary: "Nejvyšší množství srážek za jediný den v roce a jeho změna s oteplováním.",
    description: "I když za rok naprší stejné množství vody, na jediný den jí může připadnout víc. Z map srážek lze vyčíst, jak se nejvyšší denní úhrn mění v různých částech střední Evropy při různém oteplení.",
    observation: { href: "/pozorovani/srazky-a-privalove-srazky/#ukazatele", label: "Jak se měří srážková maxima" },
    mechanism: { href: "/mechanismy/termodynamika-a-dynamika-srazek/#mechanismus", label: "Co určuje vydatnost srážek" },
    source: { id: "DOI_10_24381_cds_5292a2b0", label: "Srážková maxima v atlasu IPCC" },
  },
  {
    slug: "letni-prutok",
    area: "Česko",
    title: "Kolik vody poteče českými horskými řekami za letního sucha?",
    category: "Srážky a voda na pevnině",
    summary: "Vliv zimní zásoby sněhu a letních srážek na průtok v 59 českých povodích.",
    description: "Tající sníh doplňuje zásoby podzemní vody, které napájejí řeky i v létě. Ve výpočtech pro 59 českých povodí chybí v řekách nejvíc vody tehdy, když po zimě chudé na sníh přijde i léto s malým množstvím deště.",
    observation: { href: "/pozorovani/snehova-pokryvka-a-permafrost/#zasoba-v-povodich", label: "Zásoba vody ve sněhu v povodích" },
    mechanism: { href: "/mechanismy/vznik-a-zanik-snehove-pokryvky-na-sousi/#mechanismus", label: "Kdy voda opouští sněhovou pokrývku" },
    source: { id: "DOI_10_1016_j_ejrh_2021_100899", label: "Projekce nízkých průtoků v Česku" },
  },
  {
    slug: "nejsilnejsi-tropicke-cyklony",
    area: "Celý svět",
    title: "Jaká část tropických cyklon dosáhne v teplejším světě nejvyšších kategorií?",
    category: "Proudění vzduchu a bouře",
    summary: "Podíl bouří, v nichž vítr nad tropickými oceány zesílí až na čtvrtou nebo pátou kategorii.",
    description: "Tropická cyklona čerpá energii z teplého moře. Na pětistupňové škále o její kategorii rozhoduje nejvyšší rychlost větru zprůměrovaná za jednu minutu. Vědci porovnali, jaká část všech tropických cyklon na světě alespoň jednou dosáhne čtvrté nebo páté kategorie. Při zvýšení globální teploty o 2 °C vyšel střední odhad tohoto podílu o 13 % vyšší než ve výchozím klimatu. Celkový počet bouří je přitom nejistější.",
    observation: { href: "/pozorovani/tepelny-obsah-oceanu/#mereni-profilu", label: "Jak měříme teplotu vody u hladiny a pod ní" },
    mechanism: { href: "/mechanismy/termodynamika-a-dynamika-srazek/#energie", label: "Jak výpar z moře a kondenzace páry předávají teplo vzduchu" },
    source: { id: "DOI_10_1175_BAMS_D_18_0194_1", label: "Světové projekce síly a počtu tropických cyklon" },
    dataSource: { id: "DOI_10_25921_82ty_9e16", label: "Dráhy bouří a rychlosti větru ve světovém archivu IBTrACS" },
  },
  {
    slug: "pacificke-pasaty",
    area: "Rovníkový Pacifik",
    title: "Jak se může změnit síla pasátů nad rovníkovým Pacifikem?",
    category: "Proudění vzduchu a bouře",
    summary: "Jak oteplování ovlivňuje převládající vítr, který žene povrchovou vodu Pacifiku na západ.",
    description: "Pasáty ženou teplou povrchovou vodu od Jižní Ameriky na západ. Při El Niño tyto větry na čas slábnou. Většina modelů očekává, že při dalším oteplování pasáty zeslábnou i v dlouhodobém průměru.",
    observation: { href: "/pozorovani/tepelny-obsah-oceanu/#enso-pacifik", label: "Co naměřily bóje v Pacifiku" },
    mechanism: { href: "/mechanismy/vnitrni-promenlivost-atmosfery-a-oceanu/#spolecne-vysvetleni", label: "Jak se nad Pacifikem ovlivňují vítr a oceán" },
    source: { id: "DOI_10_1017_9781009157896_010", label: "Projekce tropického proudění (IPCC, s. 1069)" },
  },
  {
    slug: "hmotnost-svetovych-ledovcu",
    area: "Celý svět",
    title: "Kolik ledu mohou do roku 2100 ztratit světové ledovce?",
    category: "Sníh, led a permafrost",
    summary: "Jak velká část ledu z roku 2015 zbude do konce století v ledovcích mimo grónský a antarktický ledový příkrov.",
    description: "Výchozím bodem je celková hmotnost ledovců v roce 2015. Vědci odhadli, kolik sněhu na každém ledovci přibude a kolik ledu ztratí, a výsledky sečetli. Pokud se Země do konce století oteplí o 1,5 °C oproti rokům 1850–1900, vychází do roku 2100 ztráta přibližně 26 % výchozí hmotnosti. Při oteplení o 4 °C je odhadovaná ztráta 41 %. Samotné ledové příkrovy Grónska a Antarktidy se do tohoto součtu nezahrnují.",
    observation: { href: "/pozorovani/ustup-ledovcu/#globalni-soucet", label: "Jak se měří celková změna hmotnosti světových ledovců" },
    mechanism: { href: "/mechanismy/hmotnostni-bilance-horskych-ledovcu/#rocni-bilance", label: "Jak přírůstek sněhu a úbytek ledu mění hmotnost ledovce" },
    source: { id: "DOI_10_1126_science_abo1324", label: "Výpočty pro jednotlivé ledovce při různém oteplení" },
    dataSource: { id: "DOI_10_5067_P8BN9VO9N5C7", label: "Modelové výsledky pro světové ledovce v letech 2000–2100" },
  },
  {
    slug: "snih-v-ceskych-horach",
    area: "Česko",
    title: "Jak dlouho vydrží sníh v českých horách?",
    category: "Sníh, led a permafrost",
    summary: "Jak délku sněhové sezony ovlivní pozdější příchod sněhu a dřívější jarní tání.",
    description: "Sněhová sezona se může zkrátit na obou koncích. Ve výpočtech pro česká pohoří na konci století má větší vliv dřívější jarní tání než pozdější příchod sněhu na začátku zimy.",
    observation: { href: "/pozorovani/snehova-pokryvka-a-permafrost/#vlastnosti-snehu", label: "Jak se sleduje trvání sněhové pokrývky" },
    mechanism: { href: "/mechanismy/vznik-a-zanik-snehove-pokryvky-na-sousi/#test-skupenstvi", label: "Kdy na horách sněží a kdy prší" },
    source: { id: "DOI_10_1016_j_ejrh_2021_100899", label: "Projekce sněhové sezony v Česku" },
  },
  {
    slug: "arkticke-zari",
    area: "Arktida",
    title: "Kdy může být Arktida v září poprvé téměř bez mořského ledu?",
    category: "Sníh, led a permafrost",
    summary: "První září, kdy plocha mořského ledu klesne v měsíčním průměru pod milion kilometrů čtverečních.",
    description: "Vědci hledají první září, kdy mořský led pokrývá v průměru méně než milion kilometrů čtverečních. Ve všech čtyřech zkoumaných emisních scénářích tento stav ve většině výpočtů nastal před rokem 2050.",
    observation: { href: "/pozorovani/ubytek-arktickeho-ledu/#plocha-pro-prisouzeni", label: "Zářijová plocha ledu podle družic" },
    mechanism: { href: "/mechanismy/vznik-tani-a-pohyb-morskeho-ledu/#jak-mechanismus-funguje", label: "Proč arktický led ubývá a tenčí se" },
    source: { id: "DOI_10_1029_2019GL086749", label: "Výpočty prvního září téměř bez ledu" },
  },
  {
    slug: "vzestup-hladiny",
    area: "Celý svět",
    title: "O kolik může hladina moře stoupnout do roku 2150?",
    category: "Oceán a hladina moře",
    summary: "Kolik k růstu hladiny přispěje rozpínání vody a kolik tání ledovců a ledových příkrovů.",
    description: "Ohřívající se mořská voda se rozpíná a další voda přibývá táním ledovců a ledových příkrovů. Projekce pro roky 2100 a 2150 ukazují, o kolik by každý z těchto procesů zvedl průměrnou světovou hladinu při různém vývoji emisí.",
    observation: { href: "/pozorovani/gmsl/#bilance-hladiny", label: "Naměřený vzestup hladiny a jeho složky" },
    mechanism: { href: "/mechanismy/bilance-globalni-hladiny-more/#mechanismus", label: "Jak přibývá objem mořské vody" },
    source: { id: "DOI_10_5281_zenodo_6382554", label: "Projekce hladiny do roku 2150" },
  },
  {
    slug: "ohrev-svetoveho-oceanu",
    area: "Celý svět",
    title: "Kolik dalšího tepla může oceán pohltit do roku 2100?",
    category: "Oceán a hladina moře",
    summary: "Kolik energie přibude v celém vodním sloupci při nízkých a velmi vysokých emisích skleníkových plynů.",
    description: "Z měření teploty vody od hladiny až ke dnu vědci odhadli, kolik tepla v oceánu přibylo v letech 1971–2018. Tento přírůstek slouží jako měřítko pro budoucnost. Při nízkých emisích (SSP1-2.6) pohltí podle IPCC oceán do roku 2100 pravděpodobně ještě dvojnásobek až čtyřnásobek tohoto množství tepla. Při velmi vysokých emisích (SSP5-8.5) vychází čtyřnásobek až osminásobek.",
    observation: { href: "/pozorovani/tepelny-obsah-oceanu/#soucet-tepla", label: "Jak se z teplotních měření počítá obsah tepla oceánu" },
    mechanism: { href: "/mechanismy/energeticka-bilance-zeme/#nerovnovaha-a-teplota", label: "Proč se většina přibývající energie ukládá v oceánu" },
    source: { id: "DOI_10_1017_9781009157896_011", label: "Projekce ohřevu oceánu (IPCC, kapitola 9)" },
  },
  {
    slug: "okyselovani-oceanu",
    area: "Celý svět",
    title: "Jak se bude měnit pH povrchového oceánu při různých emisích CO₂?",
    category: "Oceán a hladina moře",
    summary: "Vývoj kyselosti vody u hladiny světového oceánu do konce století při rostoucích a klesajících emisích.",
    description: "Čím nižší pH, tím je voda kyselejší. Projekce počítají, jak daleko od dnešní hodnoty by se průměrné pH u hladiny dostalo do konce století, kdyby emise dál rostly nebo naopak rychle klesaly.",
    observation: { href: "/pozorovani/acidifikace-oceanu/#globalni-povrch", label: "Dosavadní vývoj pH u hladiny oceánu" },
    mechanism: { href: "/mechanismy/pohlcovani-co2-oceanem-a-uhlicitanova-chemie/#mechanismus", label: "Proč pohlcený CO₂ mění pH vody" },
    source: { id: "DOI_10_5285_98af2184e13e4b91893ab72f301790db", label: "Křivky pH pro pět scénářů" },
  },
  {
    slug: "podil-co2-v-atmosfere",
    area: "Celý svět",
    title: "Jaká část vypuštěného CO₂ zůstane v atmosféře?",
    category: "Složení atmosféry a koloběh uhlíku",
    summary: "Kolik uhlíku z emisí do roku 2100 pohltí oceán a souš a kolik ho zbude v ovzduší.",
    description: "Část vypuštěného uhlíku pohlcuje oceán, další část se ukládá na souši. Bilance emisí za roky 1850–2100 ukazuje, jak velký podíl zbude v ovzduší při různém vývoji emisí do konce století.",
    observation: { href: "/pozorovani/atmosfericka-koncentrace-co2/#pozorovani", label: "Naměřená koncentrace CO₂ ve vzduchu" },
    mechanism: { href: "/mechanismy/puvod-rustu-atmosferickeho-co2/#mechanismus", label: "Jak uhlík z emisí přechází mezi ovzduším, souší a oceánem" },
    source: { id: "DOI_10_5285_b1ad4c02319b438884a72fea34cb5a18", label: "Bilance uhlíku pro pět scénářů" },
  },
  {
    slug: "teplota-po-zastaveni-emisi-co2",
    area: "Celý svět",
    title: "Co se stane s globální teplotou, když čisté emise CO₂ klesnou na nulu?",
    category: "Složení atmosféry a koloběh uhlíku",
    summary: "Jak se teplota Země vyvíjí dalších 50 let, když lidstvo přestane přidávat do ovzduší další CO₂.",
    description: "Vědci v modelech zastavili emise ve chvíli, kdy lidstvo v podobě CO₂ vypustilo celkem tisíc miliard tun uhlíku. Ostatní vlivy na klima ponechali stejné. Oceán a souš dál odebíraly CO₂ z ovzduší. Zároveň oceán pomaleji pohlcoval teplo, takže ho víc zůstávalo u povrchu. Po 50 letech byla ve většině výpočtů teplota Země blízko své hodnoty při zastavení emisí. Výsledky jednotlivých modelů sahaly od ochlazení o 0,36 °C po oteplení o 0,29 °C.",
    observation: { href: "/pozorovani/atmosfericka-koncentrace-co2/#pozorovani", label: "Dosavadní změny koncentrace CO₂ v ovzduší" },
    mechanism: { href: "/mechanismy/puvod-rustu-atmosferickeho-co2/#mechanismus", label: "Jak oceán a souš odebírají část vypuštěného CO₂" },
    source: { id: "DOI_10_5194_bg_17_2987_2020", label: "Porovnání modelů po zastavení emisí CO₂ (tabulka 5)" },
  },
];

export const projectionCategories = [...new Set(projections.map((topic) => topic.category))];

export function projectionBySlug(slug: string) {
  return projections.find((topic) => topic.slug === slug);
}
