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
  summary: string;
  distinguishingEvidence: string;
};

export const climateMechanisms: ClimateMechanism[] = [
  {
    slug: "energeticka-bilance-zeme",
    title: "Energetická bilance Země",
    category: "Záření a složení atmosféry",
    summary: "Rozdíl mezi přijatou a odevzdanou energií mění zásobu tepla v klimatickém systému. Oteplení současně zvyšuje vyzařování energie do vesmíru a pomáhá bilanci vyrovnávat.",
    distinguishingEvidence: "Porovnání nerovnováhy záření s přírůstkem energie oceánu, pevniny, ledu a atmosféry. Vztah mezi změnou teploty a vyzařováním při oddělení vlivu vodní páry, oblaků a povrchu.",
  },
  {
    slug: "radiacni-pusobeni-sklenikovych-plynu",
    title: "Radiační působení skleníkových plynů",
    category: "Záření a složení atmosféry",
    summary: "Molekuly některých plynů pohlcují a vyzařují infračervené záření a mění tak přenos energie atmosférou.",
    distinguishingEvidence: "Shoda změn infračerveného záření v jednotlivých spektrálních pásmech s vlastnostmi plynů změřenými v laboratoři. Porovnání očekávané teplotní odezvy v troposféře a stratosféře s pozorováním.",
  },
  {
    slug: "puvod-rustu-atmosferickeho-co2",
    title: "Původ růstu atmosférického CO₂",
    category: "Záření a složení atmosféry",
    summary: "Zdroje CO₂ a jeho pohlcování oceánem a pevninou společně určují růst koncentrace, sezónní kolísání i rozdíly mezi roky.",
    distinguishingEvidence: "Porovnání emisí a pohlcování CO₂ s jeho přírůstkem v atmosféře, izotopovým složením uhlíku a poklesem kyslíku. Sezónní a zeměpisné rozdíly ověřují úlohu vegetace a přenosu vzduchu.",
  },
  {
    slug: "slunecni-promenlivost",
    title: "Sluneční proměnlivost",
    category: "Záření a složení atmosféry",
    summary: "Změny slunečního výkonu ovlivňují množství energie, které vstupuje do klimatického systému.",
    distinguishingEvidence: "Porovnání změřených změn slunečního záření s velikostí, načasováním a výškovým průběhem teplotní odezvy. Ověření vztahu k jedenáctiletému slunečnímu cyklu i dlouhodobému vývoji.",
  },
  {
    slug: "sopecne-aerosoly",
    title: "Sopečné aerosoly",
    category: "Záření a složení atmosféry",
    summary: "Částice vzniklé po velkých erupcích dočasně mění průchod slunečního a infračerveného záření atmosférou.",
    distinguishingEvidence: "Časová návaznost mezi erupcí, změnou množství stratosférických částic, průchodem záření a teplotou. Porovnání ochlazení povrchu s oteplením části stratosféry a následným odezněním účinku.",
  },
  {
    slug: "prumyslove-aerosoly-a-oblaka",
    title: "Aerosoly z lidské činnosti a oblaka",
    category: "Záření a složení atmosféry",
    summary: "Částice z lidské činnosti rozptylují a pohlcují záření. Mohou také změnit tvorbu oblačných kapek a vlastnosti oblaků.",
    distinguishingEvidence: "Porovnání oblastí a období s rozdílnými emisemi při zohlednění počasí. Souběžné změny částic, oblačných kapek a záření ověřují přímé působení aerosolů i jejich vliv prostřednictvím oblaků.",
  },
  {
    slug: "zmeny-ozonu-ve-stratosfere",
    title: "Změny ozonu ve stratosféře",
    category: "Záření a složení atmosféry",
    summary: "Ozon pohlcuje ultrafialové i infračervené záření, takže změna jeho množství ovlivňuje teplotu stratosféry.",
    distinguishingEvidence: "Porovnání změn ozonu a teploty v jednotlivých výškách, oblastech a ročních obdobích. Chemická měření a vývoj po omezení látek poškozujících ozon pomáhají oddělit jeho vliv od CO₂ a proudění.",
  },
  {
    slug: "pohlcovani-a-presun-tepla-oceanem",
    title: "Pohlcování a přesun tepla oceánem",
    category: "Atmosféra a oceán",
    summary: "Oceán přijímá většinu přebytečné energie a prouděním ji přemisťuje mezi oblastmi a hloubkami.",
    distinguishingEvidence: "Porovnání toků tepla přes hladinu a přenosu proudy se změnou zásoby tepla v různých oblastech a hloubkách. Společná bilance odlišuje přesun energie uvnitř oceánu od jejího celkového přírůstku.",
  },
  {
    slug: "vodni-para-jako-zpetna-vazba",
    title: "Vlhkost atmosféry a vodní pára jako zpětná vazba",
    category: "Atmosféra a oceán",
    summary: "Teplota, výpar a přenos vzduchu společně určují množství vodní páry a relativní vlhkost. Vodní pára následně mění přenos infračerveného záření.",
    distinguishingEvidence: "Současný růst množství páry a pokles relativní vlhkosti nad částí pevniny, rozdíly mezi souší a oceánem a výškové profily. Radiační měření ověřují další článek vazby mezi vlhkostí a oteplováním.",
  },
  {
    slug: "oblaka-a-jejich-klimaticke-zpetne-vazby",
    title: "Oblaka a jejich klimatické zpětné vazby",
    category: "Atmosféra a oceán",
    summary: "Oblaka odrážejí sluneční záření a ovlivňují únik infračerveného záření. Změny jejich množství, výšky a složení při oteplování mění další vývoj teploty.",
    distinguishingEvidence: "Současné změny vlastností oblaků, teploty a radiačních toků v různých oblastech. Porovnání s fyzikálními výpočty při oddělení změn aerosolů a proudění ověřuje oblačnou odezvu na oteplování.",
  },
  {
    slug: "termodynamika-a-dynamika-srazek",
    title: "Termodynamika a dynamika srážek",
    category: "Atmosféra a oceán",
    summary: "Dostupná vodní pára, pohyb vzduchu a energetické toky určují množství a intenzitu srážek. Celkové úhrny a nejsilnější srážky mohou reagovat rozdílně.",
    distinguishingEvidence: "Oddělené porovnání celkových úhrnů, denních a hodinových extrémů. Měření vlhkosti, výstupných pohybů a proudění ověřují, proč se mění intenzita, četnost či trvání srážek v jednotlivých oblastech.",
  },
  {
    slug: "vnitrni-promenlivost-atmosfery-a-oceanu",
    title: "Vnitřní proměnlivost atmosféry a oceánu",
    category: "Atmosféra a oceán",
    summary: "Proudění a vzájemná výměna energie vytvářejí kolísání klimatu i bez změny vnějšího působení.",
    distinguishingEvidence: "Časový sled a prostorové uspořádání změn teploty, větru a oceánu během El Niño a dalších výkyvů. Bilance celého systému odlišuje vnitřní přesuny tepla od dlouhodobého přírůstku energie.",
  },
  {
    slug: "tepelna-roztaznost-morske-vody",
    title: "Změny hustoty a objemu mořské vody",
    category: "Oceán a hladina moře",
    summary: "Teplota a salinita, tedy obsah rozpuštěných solí, ovlivňují hustotu mořské vody. Jejich změny se proto promítají do objemu vody a výšky hladiny.",
    distinguishingEvidence: "Výpočet objemové změny z profilů teploty a salinity. Porovnání s výškoměry po oddělení hmotnostního příspěvku ověřeného gravimetrií rozlišuje změnu objemu od přibývání vody.",
  },
  {
    slug: "bilance-globalni-hladiny-more",
    title: "Bilance globální hladiny moře",
    category: "Oceán a hladina moře",
    summary: "Změna objemu mořské vody a přísun vody z pevniny společně mění globální hladinu. Regionální rozdíly dále souvisejí s prouděním, gravitací a pohybem souše.",
    distinguishingEvidence: "Porovnání celkové změny hladiny se součtem objemového příspěvku, úbytku pevninského ledu a změn zásob vody na souši. Prostorový obraz a pohyb pobřeží ověřují vysvětlení místních odchylek.",
  },
  {
    slug: "pohlcovani-co2-oceanem-a-uhlicitanova-chemie",
    title: "Pohlcování CO₂ oceánem a uhličitanová chemie",
    category: "Oceán a hladina moře",
    summary: "Přijímání CO₂ mění rovnováhu rozpuštěných forem uhlíku a pH mořské vody. Proudění, teplota a biologická činnost ovlivňují průběh změn v různých oblastech, hloubkách a ročních obdobích.",
    distinguishingEvidence: "Porovnání očekávané chemické odezvy s měřením rozpuštěného uhlíku, pH, alkality a CO₂ ve vzduchu i vodě. Opakované profily a sezónní záznamy rozlišují vliv přísunu CO₂, proudění a biologické činnosti.",
  },
  {
    slug: "odrazivost-snehu-a-ledu-jako-zpetna-vazba",
    title: "Odrazivost sněhu a ledu jako zpětná vazba",
    category: "Kryosféra",
    summary: "Úbytek světlého sněhu a ledu odkrývá tmavší povrch, který pohlcuje více sluneční energie. Tím může zesílit oteplování a další tání.",
    distinguishingEvidence: "Současná měření sněhu a ledu, odrazivosti a pohlceného záření. Porovnání období s rozdílným slunečním osvitem a zohlednění oblačnosti ověřují velikost i sezónní průběh této zpětné vazby.",
  },
  {
    slug: "vznik-tani-a-pohyb-morskeho-ledu",
    title: "Vznik, tání a pohyb mořského ledu",
    category: "Kryosféra",
    summary: "Výměna tepla mezi atmosférou, sněhem, ledem a oceánem řídí zamrzání a tání. Vítr a proudy led přesouvají, stlačují a odnášejí z jednotlivých oblastí.",
    distinguishingEvidence: "Porovnání energetických toků, růstu a tání s měřeným pohybem a vývozem ledu. Vysvětlení musí současně zachytit změny rozsahu, tloušťky, stáří a objemu během roku.",
  },
  {
    slug: "vznik-a-zanik-snehove-pokryvky-na-sousi",
    title: "Vznik a zánik sněhové pokrývky na souši",
    category: "Kryosféra",
    summary: "Podíl deště a sněhu, hromadění sněhu, tání, výpar a přenos větrem určují zásobu sněhu na zemi. Jejich sezónní průběh rozhoduje o začátku a konci sněhové pokrývky.",
    distinguishingEvidence: "Porovnání sněžení a energetické bilance se zásobou vody ve sněhu a datem odtání. Oddělení změn zimní zásoby a jarního tání vysvětluje rozdílný vývoj rozsahu, hmotnosti a délky sněhové sezóny.",
  },
  {
    slug: "hmotnostni-bilance-horskych-ledovcu",
    title: "Hmotnostní bilance horských ledovců",
    category: "Kryosféra",
    summary: "Sněžení přidává hmotnost. Odtok tavné vody, odlamování ledu a jeho přímý přechod na vodní páru ji ubírají. Proudění ledu a tvar údolí ovlivňují, jak a s jakým zpožděním se změní jeho délka a poloha čela.",
    distinguishingEvidence: "Porovnání zimních přírůstků, letních ztrát a toku ledu s celkovou bilancí. Společný vývoj rychlosti, tloušťky a polohy čela ověřuje, zda vysvětlení zachytí i časovou odezvu ledovce.",
  },
  {
    slug: "hmotnostni-bilance-a-dynamika-ledovych-prikrovu",
    title: "Hmotnostní bilance a dynamika ledových příkrovů",
    category: "Kryosféra",
    summary: "Přírůstky sněhu a odtok tavné vody se kombinují s prouděním ledu a jeho odtokem do oceánu. Jejich podíl na změně hmotnosti se liší mezi Grónskem a oblastmi Antarktidy.",
    distinguishingEvidence: "Oddělené bilance povrchu a odtoku ledu, porovnané s celkovou změnou hmotnosti. Vztah mezi oteplováním oceánu, táním ledových šelfů, pohybem linie ukotvení a zrychlováním ledu testuje dynamické vysvětlení.",
  },
  {
    slug: "prenos-tepla-do-pudy-a-tani-permafrostu",
    title: "Přenos tepla do půdy a tání permafrostu",
    category: "Kryosféra",
    summary: "Teplo se šíří půdou a jeho průběh mění sněhová izolace, voda, led a vlastnosti hornin nebo sedimentu.",
    distinguishingEvidence: "Zpoždění a zeslabení teplotních změn s hloubkou, porovnané s přenosem tepla a energií potřebnou k tání. Rozdíly mezi místy ověřují vliv sněhové izolace, vody a vlastností podloží.",
  },
  {
    slug: "biologicke-mechanismy-fenologickych-zmen",
    title: "Biologické mechanismy fenologických změn",
    category: "Živá příroda a extrémy",
    summary: "Teplota, délka dne, předchozí chlad a dostupnost vody ovlivňují vývoj rostlin. U živočichů do načasování migrace a rozmnožování vstupuje také vnitřní roční rytmus a dostupnost potravy.",
    distinguishingEvidence: "Pokusy oddělující teplotu, délku dne a předchozí chlad, porovnané s terénními záznamy rostlin. U ptáků porovnání druhů, migračních tras a podmínek v zimovišti i hnízdišti testuje jejich vliv na načasování tahu.",
  },
  {
    slug: "mechanismy-vln-veder",
    title: "Mechanismy vln veder",
    category: "Živá příroda a extrémy",
    summary: "Vlny veder vznikají kombinací teplotního pozadí, atmosférické cirkulace, slunečního záření a vysychání půdy.",
    distinguishingEvidence: "Porovnání dlouhodobého posunu teplot s průběhem jednotlivých veder. Měření proudění, půdní vlhkosti a výparu ověřují příspěvek setrvalých tlakových situací a vysychání půdy k jejich intenzitě a trvání.",
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
