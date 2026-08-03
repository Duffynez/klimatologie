export type MethodCategory =
  | "Přímá měření"
  | "Laboratorní analýza"
  | "Dálkový průzkum"
  | "Přírodní archivy";

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
    summary: "Balónový profil teploty, vlhkosti, tlaku a větru v jednotlivých výškách atmosféry.",
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
    slug: "plynova-chromatografie",
    title: "Plynová chromatografie",
    category: "Laboratorní analýza",
    summary: "Oddělení složek vzduchu a stanovení metanu, oxidu dusného, halogenovaných plynů nebo plynů z ledu.",
  },
  {
    slug: "absorpcni-spektroskopie",
    title: "Absorpční spektroskopie",
    category: "Laboratorní analýza",
    summary: "Koncentrace plynů určená podle vlnových délek, které plyn pohlcuje.",
  },
  {
    slug: "hmotnostni-a-izotopova-spektrometrie",
    title: "Hmotnostní a izotopová spektrometrie",
    category: "Laboratorní analýza",
    summary: "Rozlišení molekul a izotopů podle jejich hmotnosti při analýze vody, uhlíku a vzorků minulého prostředí.",
  },
  {
    slug: "spektrofotometrie",
    title: "Spektrofotometrie",
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
    slug: "titrace-a-coulometrie",
    title: "Titrace a coulometrie",
    category: "Laboratorní analýza",
    summary: "Stanovení alkality a rozpuštěného anorganického uhlíku v uhličitanovém systému oceánu.",
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
    title: "Aktivní radarové měření",
    category: "Dálkový průzkum",
    summary: "Srážky, led, sníh, oceán a pohyb povrchu z vlastností vyslaného a odraženého rádiového signálu.",
  },
  {
    slug: "lidar-a-laserove-mereni-vzdalenosti",
    title: "Lidar a laserové měření vzdálenosti",
    category: "Dálkový průzkum",
    summary: "Výška povrchu, oblaka, aerosoly a vegetace měřené pomocí návratu krátkých laserových pulzů.",
  },
  {
    slug: "radarova-a-laserova-altimetrie",
    title: "Radarová a laserová altimetrie",
    category: "Dálkový průzkum",
    summary: "Výška hladiny moře, ledovců a ledových příkrovů určená z doby návratu vyslaného signálu.",
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
];

export const methodCategories: MethodCategory[] = [
  "Přímá měření",
  "Laboratorní analýza",
  "Dálkový průzkum",
  "Přírodní archivy",
];
