export type MethodCategory =
  | "Přímá měření"
  | "Laboratorní analýza"
  | "Dálkový průzkum"
  | "Přírodní archivy"
  | "Zpracování dat a vyhodnocování výsledků";

export type MeasurementMethod = {
  slug: string;
  title: string;
  category: MethodCategory;
  summary: string;
};

export const measurementMethods: MeasurementMethod[] = [
  {
    slug: "odporova-termometrie-a-termistory",
    title: "Odporová termometrie a termistory",
    category: "Přímá měření",
    summary: "Teplota vzduchu, vody, půdy, sněhu a permafrostu určená ze změny elektrického odporu čidla.",
  },
  {
    slug: "hygrometrie",
    title: "Hygrometrie",
    category: "Přímá měření",
    summary: "Vlhkost vzduchu a rosný bod měřené psychrometry, kapacitními čidly nebo chlazeným zrcátkem.",
  },
  {
    slug: "radiosondaz",
    title: "Radiosondáž",
    category: "Přímá měření",
    summary: "Měření teploty, vlhkosti a tlaku sondou nesenou balónem a určení větru z jejího pohybu.",
  },
  {
    slug: "mereni-tlaku-a-hydrostaticke-vysky",
    title: "Měření tlaku a hydrostatické výšky",
    category: "Přímá měření",
    summary: "Hloubka oceánu, výška hladiny a svislá poloha odvozené z tlaku kapaliny nebo vzduchu.",
  },
  {
    slug: "konduktometrie",
    title: "Konduktometrie",
    category: "Přímá měření",
    summary: "Elektrická vodivost mořské vody používaná společně s teplotou a tlakem k určení salinity.",
  },
  {
    slug: "srazkomery-a-disdrometry",
    title: "Srážkoměry a disdrometry",
    category: "Přímá měření",
    summary: "Množství srážek a velikost, rychlost i druh jednotlivých kapek nebo sněhových částic.",
  },
  {
    slug: "pobrezni-mereni-hladiny-a-vyskova-reference",
    title: "Pobřežní měření hladiny a výšková reference",
    category: "Přímá měření",
    summary: "Plovákové, tlakové, akustické a radarové vodočty, jejich návaznost na pevné výškové body a měření pohybu pevniny.",
  },
  {
    slug: "mereni-vysky-hustoty-a-vodni-hodnoty-snehu",
    title: "Měření výšky, hustoty a vodní hodnoty sněhu",
    category: "Přímá měření",
    summary: "Sněhové sondy, odběry a vážení vzorků pro určení množství vody ve sněhu a jeho prostorové proměnlivosti.",
  },
  {
    slug: "terenni-mereni-bilance-ledovcu",
    title: "Terénní měření bilance ledovců",
    category: "Přímá měření",
    summary: "Přírůstky a úbytky sněhu a ledu měřené tyčemi, sondami a ve sněhových jámách a převod bodových měření na bilanci povrchu ledovce.",
  },
  {
    slug: "mereni-hloubky-sezonniho-rozmrzani",
    title: "Měření hloubky sezónního rozmrzání",
    category: "Přímá měření",
    summary: "Hloubka rozmrzlé půdy z mechanických sond, mrazových trubic a teplotních profilů, včetně kontroly změn výšky povrchu.",
  },
  {
    slug: "standardizovane-fenologicke-pozorovani",
    title: "Standardizované fenologické pozorování",
    category: "Přímá měření",
    summary: "Opakovaný zápis vývojových fází rostlin a výskytu živočichů podle společných pravidel, s kontrolou četnosti a rozsahu pozorování.",
  },
  {
    slug: "plynova-chromatografie",
    title: "Plynová chromatografie",
    category: "Laboratorní analýza",
    summary: "Oddělení složek vzduchu a stanovení metanu, oxidu dusného, halogenovaných plynů nebo plynů z ledu.",
  },
  {
    slug: "absorpcni-spektroskopie",
    title: "Absorpční spektroskopie plynů",
    category: "Laboratorní analýza",
    summary: "Koncentrace plynů určené z pohlcování světla při vybraných vlnových délkách a porovnání s referenčními vzorky.",
  },
  {
    slug: "hmotnostni-a-izotopova-spektrometrie",
    title: "Hmotnostní a izotopová spektrometrie",
    category: "Laboratorní analýza",
    summary: "Rozlišení molekul a izotopů podle jejich hmotnosti při analýze vody, uhlíku a vzorků minulého prostředí.",
  },
  {
    slug: "spektrofotometrie",
    title: "Spektrofotometrie roztoků",
    category: "Laboratorní analýza",
    summary: "Vlastnosti roztoku určené z pohlcování světla, například při přesném měření pH mořské vody.",
  },
  {
    slug: "potenciometrie",
    title: "Potenciometrie",
    category: "Laboratorní analýza",
    summary: "Elektrochemické měření pH a aktivity iontů pomocí rozdílu elektrických potenciálů mezi elektrodami.",
  },
  {
    slug: "titrace",
    title: "Titrace",
    category: "Laboratorní analýza",
    summary: "Stanovení množství látky přidáváním činidla známé koncentrace, například měření celkové alkalinity mořské vody.",
  },
  {
    slug: "coulometrie",
    title: "Coulometrie",
    category: "Laboratorní analýza",
    summary: "Stanovení množství látky z elektrického náboje spotřebovaného při reakci, například měření rozpuštěného anorganického uhlíku.",
  },
  {
    slug: "opticke-a-multispektralni-snimkovani",
    title: "Optické a multispektrální snímkování",
    category: "Dálkový průzkum",
    summary: "Odražené světlo v různých pásmech a obrazy z kamer, letadel a družic pro sledování vegetace, sněhu a obrysů ledovců.",
  },
  {
    slug: "fotogrammetrie-a-porovnavani-vyskovych-modelu",
    title: "Fotogrammetrie a porovnávání výškových modelů",
    category: "Dálkový průzkum",
    summary: "Výška povrchu odvozená ze snímků z různých směrů a změny objemu ledovců vypočtené porovnáním výškových modelů.",
  },
  {
    slug: "mereni-radiacnich-toku",
    title: "Měření radiačních toků",
    category: "Dálkový průzkum",
    summary: "Měření příchozího, odraženého a vyzařovaného záření pro určení toků energie u povrchu a na horní hranici atmosféry.",
  },
  {
    slug: "pasivni-infracervena-radiometrie",
    title: "Pasivní infračervená radiometrie",
    category: "Dálkový průzkum",
    summary: "Teplota povrchu, atmosféry a oblaků odvozená z přirozeně vyzařovaného infračerveného záření.",
  },
  {
    slug: "pasivni-mikrovlnna-radiometrie",
    title: "Pasivní mikrovlnná radiometrie",
    category: "Dálkový průzkum",
    summary: "Měření atmosféry, mořského ledu, sněhu a vlhkosti půdy pomocí přirozeného mikrovlnného záření.",
  },
  {
    slug: "aktivni-radarove-mereni",
    title: "Radarové měření srážek a struktury sněhu a ledu",
    category: "Dálkový průzkum",
    summary: "Vlastnosti srážkových částic a rozhraní uvnitř sněhu a ledu odvozené ze síly, času návratu a změny frekvence radarového signálu.",
  },
  {
    slug: "lidar-a-laserove-mereni-vzdalenosti",
    title: "Lidarové měření atmosféry a vegetace",
    category: "Dálkový průzkum",
    summary: "Svislé rozložení aerosolů a oblaků a struktura vegetace odvozené z návratu krátkých laserových pulzů.",
  },
  {
    slug: "radarova-a-laserova-altimetrie",
    title: "Radarová a laserová altimetrie",
    category: "Dálkový průzkum",
    summary: "Výška hladiny moře a povrchu ledu určená z doby návratu signálu, přesné polohy přístroje a oprav šíření signálu.",
  },
  {
    slug: "radarova-interferometrie-a-sledovani-pohybu-povrchu",
    title: "Radarová interferometrie a sledování pohybu povrchu",
    category: "Dálkový průzkum",
    summary: "Pohyb ledu a pevniny odvozený z rozdílů fáze radarových vln nebo z posunu rozpoznatelných útvarů na opakovaných snímcích.",
  },
  {
    slug: "druzicova-gravimetrie",
    title: "Družicová gravimetrie",
    category: "Dálkový průzkum",
    summary: "Změny hmotnosti ledu a vody odvozené z časových změn gravitačního pole Země.",
  },
  {
    slug: "radiove-zakryty-gnss",
    title: "Rádiové zákryty GNSS",
    category: "Dálkový průzkum",
    summary: "Teplota a hustota atmosféry odvozené z ohybu rádiového signálu při průchodu atmosférou.",
  },
  {
    slug: "pozemni-mereni-vodni-pary-pomoci-gnss",
    title: "Pozemní měření vodní páry pomocí GNSS",
    category: "Dálkový průzkum",
    summary: "Množství vodní páry nad přijímačem odvozené ze zpoždění signálu navigačních družic a doprovodných měření tlaku a teploty.",
  },
  {
    slug: "ledova-jadra-a-analyza-uzavreneho-vzduchu",
    title: "Ledová jádra a analýza uzavřeného vzduchu",
    category: "Přírodní archivy",
    summary: "Vrstvy ledu, izotopy vody, prach a bubliny uchovávající vzorky minulé atmosféry.",
  },
  {
    slug: "sedimentarni-jadra-a-stratigrafie",
    title: "Sedimentární jádra a stratigrafie",
    category: "Přírodní archivy",
    summary: "Odběr vrstev ze dna oceánů a jezer a jejich uspořádání do časového sledu.",
  },
  {
    slug: "dendrochronologie",
    title: "Dendrochronologie",
    category: "Přírodní archivy",
    summary: "Datování a měření šířky, hustoty a chemického složení jednotlivých letokruhů.",
  },
  {
    slug: "koralova-sclerochronologie",
    title: "Korálová sclerochronologie",
    category: "Přírodní archivy",
    summary: "Růstové vrstvy korálů a jejich chemické složení jako záznam vlastností oceánu.",
  },
  {
    slug: "krapniky-a-jeskynni-sedimenty",
    title: "Krápníky a jeskynní sedimenty",
    category: "Přírodní archivy",
    summary: "Izotopy, stopové prvky a růst speleotém jako záznam srážek a oběhu vody.",
  },
  {
    slug: "pylova-analyza-a-mikrofosilie",
    title: "Pylová analýza a mikrofosilie",
    category: "Přírodní archivy",
    summary: "Rekonstrukce minulého prostředí podle zachovaných organismů a jejich částí.",
  },
  {
    slug: "izotopova-paleotermometrie",
    title: "Izotopová paleotermometrie",
    category: "Přírodní archivy",
    summary: "Odvozování minulých teplot z poměrů stabilních izotopů v ledu, karbonátech a organickém materiálu.",
  },
  {
    slug: "chemicke-a-biologicke-paleoteplomery",
    title: "Chemické a biologické paleoteploměry",
    category: "Přírodní archivy",
    summary: "Minulé teploty odvozené například z poměru hořčíku a vápníku, alkenonů nebo ukazatele TEX₈₆.",
  },
  {
    slug: "radiometricke-a-expozicni-datovani",
    title: "Radiometrické a expoziční datování",
    category: "Přírodní archivy",
    summary: "Určování stáří vrstev, morén a odkrytých hornin pomocí radioaktivních a kosmogenních nuklidů.",
  },
  {
    slug: "rekonstrukce-teploty-z-vrtu",
    title: "Rekonstrukce teploty z vrtů",
    category: "Přírodní archivy",
    summary: "Minulé změny povrchové teploty odvozené z dnešního teplotního profilu pod zemí nebo v ledu.",
  },
  {
    slug: "kontrola-kvality-a-homogenizace",
    title: "Kontrola kvality a homogenizace",
    category: "Zpracování dat a vyhodnocování výsledků",
    summary: "Odhalování chybných údajů a neklimatických změn spojených s přístrojem, stanovištěm nebo pozorovacím postupem.",
  },
  {
    slug: "prostorove-zpracovani-a-plosne-prumery",
    title: "Prostorové zpracování a plošné průměry",
    category: "Zpracování dat a vyhodnocování výsledků",
    summary: "Převod bodových měření do map, odhady v místech bez měření a výpočet regionálních či globálních hodnot podle plochy.",
  },
  {
    slug: "analyza-casovych-zmen-a-extremu",
    title: "Analýza časových změn a extrémů",
    category: "Zpracování dat a vyhodnocování výsledků",
    summary: "Referenční období, oddělení sezónního kolísání, odhad trendu a jeho průkaznosti a výpočet přesně vymezených ukazatelů extrémů.",
  },
  {
    slug: "vycisleni-a-prenos-nejistoty",
    title: "Vyčíslení a přenos nejistoty",
    category: "Zpracování dat a vyhodnocování výsledků",
    summary: "Vyhodnocení nejistot měření, pokrytí a výpočtu, jejich přenos do výsledku a zohlednění společných chyb vstupních dat.",
  },
  {
    slug: "asimilace-dat-a-reanalyzy",
    title: "Asimilace dat a reanalýzy",
    category: "Zpracování dat a vyhodnocování výsledků",
    summary: "Propojování pozorování s fyzikálním modelem a vytváření souvislých rekonstrukcí minulého stavu atmosféry, oceánu a pevniny.",
  },
];

export const methodCategories: MethodCategory[] = [
  "Přímá měření",
  "Laboratorní analýza",
  "Dálkový průzkum",
  "Přírodní archivy",
  "Zpracování dat a vyhodnocování výsledků",
];

export function methodBySlug(slug: string) {
  return measurementMethods.find((method) => method.slug === slug);
}
