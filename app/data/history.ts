export const historyBranches = {
  science: "Věda",
  politics: "Politika",
  culture: "Kultura",
} as const;

export type HistoryBranch = keyof typeof historyBranches;

export const historyCategories = {
  observations: {
    branch: "science",
    label: "Pozorování",
    description: "Co jsme zjistili o klimatu",
    href: "/pozorovani/",
  },
  methods: {
    branch: "science",
    label: "Metody",
    description: "Jak jsme se naučili měřit",
    href: "/metody/",
  },
  mechanisms: {
    branch: "science",
    label: "Mechanismy",
    description: "Jak vysvětlujeme příčiny",
    href: "/mechanismy/",
  },
  politics: {
    branch: "politics",
    label: "Politika",
    description: "Jak se měnila pravidla a závazky",
    href: null,
  },
  culture: {
    branch: "culture",
    label: "Kultura",
    description: "Jak se klima promítalo do kultury",
    href: null,
  },
} as const satisfies Record<string, { branch: HistoryBranch; label: string; description: string; href: string | null }>;

export type HistoryCategory = keyof typeof historyCategories;
export type HistoryImportance = 1 | 2 | 3;

export const historyImportances = {
  1: { label: "Zásadní", description: "Hlavní objevy a klimatická rozhodnutí", filterLabel: "1 · Zásadní milníky" },
  2: { label: "Důležitý", description: "Důležité metody, záznamy a další důkazy", filterLabel: "2 · Důležité milníky" },
  3: { label: "Doplňující", description: "Vybraní předchůdci a podrobnější ověření", filterLabel: "3 · Doplňující milníky" },
} as const satisfies Record<HistoryImportance, { label: string; description: string; filterLabel: string }>;

export type HistoryReference = { sourceId: string; locator?: string };
export type HistoryEvent = {
  id: string;
  year: number;
  dateMeaning: string;
  title: string;
  category: HistoryCategory;
  importance: HistoryImportance;
  paragraphs: { text: string; references: HistoryReference[] }[];
  relatedLinks: { href: string; label: string }[];
};
export type HistoryPeriod = { id: string; label: string; from: number; to: number };

export const historyPeriods: HistoryPeriod[] = [
  { id: "obdobi-do-1850", label: "Do roku 1850", from: 0, to: 1849 },
  { id: "obdobi-1850-1899", label: "1850–1899", from: 1850, to: 1899 },
  { id: "obdobi-1900-1969", label: "1900–1969", from: 1900, to: 1969 },
  { id: "obdobi-1970-1999", label: "1970–1999", from: 1970, to: 1999 },
  { id: "obdobi-od-2000", label: "Od roku 2000", from: 2000, to: 9999 },
];

// Published anchors for events outside the curated timeline still lead to their sources.
export const historyLegacyLinks: { id: string; title: string; sourceIds: string[] }[] = [
  {
    id: "1681_Mariotte",
    title: "Sklo propouští sluneční a tepelné záření rozdílně",
    sourceIds: [
      "1681_Mariotte",
      "1862_Tyndall"
    ]
  },
  {
    id: "1735_Hadley",
    title: "Ohřev a rotace Země vysvětlují pasáty",
    sourceIds: [
      "1735_Hadley"
    ]
  },
  {
    id: "1742_Celsius",
    title: "Teplotní stupnice dostává reprodukovatelné pevné body",
    sourceIds: [
      "1894_Celsius_Thermometrie"
    ]
  },
  {
    id: "1767_Saussure",
    title: "Sluneční ohřev ve skleněné schránce",
    sourceIds: [
      "1767_Saussure",
      "1824_Fourier"
    ]
  },
  {
    id: "1801_Herschel",
    title: "Teploměr odhaluje neviditelné sluneční záření",
    sourceIds: [
      "1801_Herschel"
    ]
  },
  {
    id: "1804_Leslie",
    title: "Stejně teplé povrchy vyzařují různě",
    sourceIds: [
      "1804_Leslie"
    ]
  },
  {
    id: "1838_Pouillet",
    title: "Přístroj měří energii přicházející ze Slunce",
    sourceIds: [
      "1838_Pouillet"
    ]
  },
  {
    id: "1853_Brusel",
    title: "Státní zástupci navrhují společná námořní pozorování",
    sourceIds: [
      "1853_Brussels_Conference"
    ]
  },
  {
    id: "1854_MetOffice",
    title: "Británie zakládá státní meteorologickou službu",
    sourceIds: [
      "WEB_MetOffice_History",
      "1866_BoardOfTrade_MeteorologicalReport"
    ]
  },
  {
    id: "1860_Kirchhoff",
    title: "Pohlcování a vyzařování spojuje jeden zákon",
    sourceIds: [
      "1901_Kirchhoff_Radiation_Translation"
    ]
  },
  {
    id: "1870_US_WeatherService",
    title: "Zákon spojuje státní měření počasí s výstrahami před bouřemi",
    sourceIds: [
      "1870_US_WeatherService_Resolution",
      "WEB_NWS_History"
    ]
  },
  {
    id: "1879_Stefan_Boltzmann",
    title: "Teplota určuje celkový výkon tepelného záření",
    sourceIds: [
      "1879_Stefan",
      "1884_Boltzmann"
    ]
  },
  {
    id: "1884_Langley",
    title: "Bolometr mapuje sluneční energii ve spektru",
    sourceIds: [
      "1884_Langley",
      "1896_Arrhenius"
    ]
  },
  {
    id: "1900_Planck",
    title: "Zákon popisuje tepelné záření po vlnových délkách",
    sourceIds: [
      "DOI_10_1002_andp_19013090310"
    ]
  },
  {
    id: "1902_Stratosfera",
    title: "Balónová měření odhalují stratosféru",
    sourceIds: [
      "1902_Teisserenc_de_Bort",
      "1902_Assmann"
    ]
  },
  {
    id: "1919_Parizska_Letecka_Umluva",
    title: "Letecká úmluva zahrnuje výměnu meteorologických údajů",
    sourceIds: [
      "1919_Paris_AirNavigation",
      "WEB_ICAO_ParisConvention_History"
    ]
  },
  {
    id: "1919_Statni_Meteorologicky_Ustav",
    title: "Československo zřizuje státní meteorologický ústav",
    sourceIds: [
      "WEB_ACR_MeteorologicalService_History",
      "1919_Nemec_MeteorologicalInstitute"
    ]
  },
  {
    id: "1929_Radiosondy",
    title: "Balón vysílá měření atmosféry rádiem",
    sourceIds: [
      "WEB_nist_gov_Tuning_into_Weather_Forecasting_NIST_be922613",
      "2015_Roshydromet_Radiosonde",
      "1938_Diamond_Radiometeorography"
    ]
  },
  {
    id: "1929_SOLAS",
    title: "Námořní úmluva propojuje lodní měření a výstrahy",
    sourceIds: [
      "1929_SOLAS"
    ]
  },
  {
    id: "1935_Soil_Conservation_Act",
    title: "USA přijímají trvalý program ochrany půdy",
    sourceIds: [
      "1935_SoilConservationAct",
      "WEB_NRCS_History"
    ]
  },
  {
    id: "1936_Flood_Control_Act",
    title: "Ochrana před povodněmi se stává federálním úkolem",
    sourceIds: [
      "1936_FloodControlAct"
    ]
  },
  {
    id: "1944_Chicagska_Umluva",
    title: "Chicagská úmluva vytváří rámec pro společná meteorologická pravidla",
    sourceIds: [
      "1944_ChicagoConvention"
    ]
  },
  {
    id: "1950_WMO",
    title: "Vzniká Světová meteorologická organizace",
    sourceIds: [
      "1947_WMO_Convention"
    ]
  },
  {
    id: "1950_Numericka_Predpoved",
    title: "Počítač počítá vývoj počasí z fyzikálních rovnic",
    sourceIds: [
      "1950_Charney_Fjortoft_von_Neumann"
    ]
  }
];

// IDs preserve published milestone anchors even when the event date is corrected.
export const historyEvents: HistoryEvent[] = [
  {
    id: "1824_Fourier",
    year: 1824,
    dateMeaning: "Zveřejnění práce",
    title: "Teplota Země jako otázka příjmu a ztrát tepla",
    category: "mechanisms",
    importance: 1,
    paragraphs: [
      {
        text: "Joseph Fourier zkoumal, čím je určena teplota zemského povrchu. Rozlišoval sluneční ohřev, vnitřní teplo Země a výměnu tepla s okolním prostorem. Atmosféře přisuzoval vliv na únik tepla a při vysvětlení použil i Saussurův pokus se zasklenou schránkou.",
        references: [
          {
            sourceId: "1824_Fourier"
          }
        ]
      },
      {
        text: "Tím formuloval otázku, kterou musí fyzikální popis klimatu řešit: jak se teplota ustálí při daném přísunu a odvodu energie. Jeho dobový obraz však zahrnoval i představy o teplotě meziplanetárního prostoru. Nešlo ještě o dnešní výpočet skleníkového účinku jednotlivých plynů.",
        references: [
          {
            sourceId: "1824_Fourier"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/mechanismy/energeticka-bilance-zeme/",
        label: "Dnešní měření energetické bilance"
      }
    ]
  },
  {
    id: "1840_Agassiz",
    year: 1840,
    dateMeaning: "Vydání knihy",
    title: "Krajina uchovává stopy rozsáhlejšího zalednění",
    category: "observations",
    importance: 1,
    paragraphs: [
      {
        text: "Louis Agassiz popsal morény, tedy nánosy materiálu přeneseného ledovcem, bludné balvany, ohlazené skály a rýhy v krajině. Porovnával je se stopami vznikajícími u současných ledovců a vyložil je jako doklady jejich dřívějšího mnohem většího rozsahu. V knize probíral také předchozí práce Venetze a Charpentiera.",
        references: [
          {
            sourceId: "1840_Agassiz",
            locator: "úvod a kapitoly o morénách a bludných balvanech"
          }
        ]
      },
      {
        text: "Geologické stopy tak umožnily zkoumat klima i tam, kde chyběla přímá měření z minulosti. Samotný tvar krajiny však neurčoval přesné stáří zalednění ani jeho příčinu. Tyto otázky vyžadovaly další metody datování a porovnání nezávislých záznamů.",
        references: [
          {
            sourceId: "1840_Agassiz"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/metody/radiometricke-a-expozicni-datovani/",
        label: "Jak datujeme stopy minulého zalednění"
      }
    ]
  },
  {
    id: "1856_Foote",
    year: 1856,
    dateMeaning: "Zveřejnění práce",
    title: "Oxid uhličitý v pokusu se slunečním ohřevem",
    category: "mechanisms",
    importance: 3,
    paragraphs: [
      {
        text: "Eunice Footeová vystavila slunci dvojici skleněných válců s teploměry. Porovnávala různé plyny, tlak a vlhkost vzduchu. Popsala silnější zahřívání válce s oxidem uhličitým a jeho pomalejší chladnutí. Z výsledku usoudila, že atmosféra bohatší na tento plyn by měla vyšší teplotu.",
        references: [
          {
            sourceId: "1856_Foote",
            locator: "s. 382–383"
          }
        ]
      },
      {
        text: "Práce spojila laboratorní srovnání plynů s otázkou klimatu. Uspořádání však samostatně neměřilo pohlcování infračerveného záření a neoddělovalo všechny způsoby přenosu tepla. Je proto třeba rozlišovat naměřený ohřev válce a závěr, který z něj autorka vyvodila o celé atmosféře.",
        references: [
          {
            sourceId: "1856_Foote",
            locator: "s. 382–383"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/metody/absorpcni-spektroskopie/",
        label: "Jak odděleně měříme absorpci plynů"
      }
    ]
  },
  {
    id: "1862_Tyndall",
    year: 1861,
    dateMeaning: "Zveřejnění práce",
    title: "Přímé měření pohlcování tepelného záření plyny",
    category: "methods",
    importance: 1,
    paragraphs: [
      {
        text: "John Tyndall vedl tepelné záření trubicí uzavřenou deskami z kamenné soli. Měnil plyn uvnitř a pomocí termoelektrického detektoru měřil změnu prošlého záření. Dusík a kyslík v jeho pokusech pohlcovaly podstatně méně než vodní pára, oxid uhličitý a některé další plyny.",
        references: [
          {
            sourceId: "1862_Tyndall",
            locator: "s. 1–36"
          }
        ]
      },
      {
        text: "Pokus ukázal, proč samotný podíl plynu ve vzduchu neurčuje jeho význam pro přenos tepla. I málo zastoupená složka může záření výrazně ovlivnit. Laboratorní vlastnost plynu se tak dala měřit odděleně od počasí a potom použít při vysvětlování tepelného působení atmosféry.",
        references: [
          {
            sourceId: "1862_Tyndall",
            locator: "závěry práce"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/mechanismy/radiacni-pusobeni-sklenikovych-plynu/",
        label: "Jak skleníkové plyny mění přenos záření"
      }
    ]
  },
  {
    id: "1864_Croll",
    year: 1864,
    dateMeaning: "Zveřejnění práce",
    title: "Změny zemské dráhy jako vysvětlení dob ledových",
    category: "mechanisms",
    importance: 3,
    paragraphs: [
      {
        text: "James Croll spojil změny protáhlosti zemské dráhy a orientace osy s délkou a intenzitou ročních období. Uvažoval také sníh a led, které odrážejí sluneční záření, a změny oceánského proudění. Astronomická změna tak v jeho vysvětlení mohla spustit další procesy zesilující ochlazování.",
        references: [
          {
            sourceId: "1864_Croll"
          }
        ]
      },
      {
        text: "Vznikla hypotéza, která spojovala vypočitatelné změny dráhy se stopami minulého klimatu. Nebyla však ještě ověřena přesně datovanými dlouhými záznamy. Pozdější test orbitálních period v mořských sedimentech je na ose zařazen u studie Hayse, Imbrieho a Shackletona z roku 1976.",
        references: [
          {
            sourceId: "1976_Hays_Imbrie_Shackleton",
            locator: "s. 1121–1132"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/mechanismy/odrazivost-snehu-a-ledu-jako-zpetna-vazba/",
        label: "Jak sníh a led zesilují změnu"
      }
    ]
  },
  {
    id: "1894_Hogbom",
    year: 1894,
    dateMeaning: "Zveřejnění práce",
    title: "Uhlík v atmosféře má zdroje i úložiště",
    category: "mechanisms",
    importance: 3,
    paragraphs: [
      {
        text: "Arvid Högbom porovnával zásoby uhlíku a procesy, které jej přesouvají mezi atmosférou, oceánem a horninami. Zahrnul sopečnou činnost, zvětrávání, vznik uhličitanů i spalování uhlí. Zkoumal, zda tyto toky mohou během dlouhých období měnit množství oxidu uhličitého ve vzduchu.",
        references: [
          {
            sourceId: "1894_Hogbom"
          }
        ]
      },
      {
        text: "Taková bilance doplňovala otázku, jak CO₂ působí na teplotu: vysvětlovala, odkud by se mohla změna jeho koncentrace vzít. Arrhenius Högbomovy odhady přímo použil v diskusi o možných příčinách dlouhodobých klimatických změn. Nešlo ještě o dnešní úplný rozpočet lidských emisí a jejich pohlcování.",
        references: [
          {
            sourceId: "1896_Arrhenius",
            locator: "závěrečná diskuse Högbomových odhadů"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/mechanismy/puvod-rustu-atmosferickeho-co2/",
        label: "Jak dnes určujeme původ růstu CO₂"
      }
    ]
  },
  {
    id: "1894_Glacier_Monitoring",
    year: 1894,
    dateMeaning: "Zahájení mezinárodní koordinace sledování ledovců",
    title: "Změny ledovců získávají mezinárodní pozorovací síť",
    category: "observations",
    importance: 2,
    paragraphs: [
      {
        text: "Vznikla Mezinárodní ledovcová komise, která začala spojovat pozorování změn ledovců z různých pohoří. François-Alphonse Forel a Léon Du Pasquier ve společných zprávách zveřejňovali údaje o postupu a ústupu ledovcových čel, tedy jejich dolních okrajů. Místní měření se tak stala součástí soustavného mezinárodního porovnávání.",
        references: [
          {
            sourceId: "WEB_World_Glacier_Monitoring_Ser_WGMS_2020_6e490990",
            locator: "s. 1, vznik komise v srpnu 1894"
          },
          {
            sourceId: "1896_Forel_Du_Pasquier",
            locator: "s. 129–130 a zprávy z jednotlivých pohoří"
          }
        ]
      },
      {
        text: "Společné zprávy umožnily porovnávat, zda se ledovce v různých pohořích prodlužují, nebo zkracují, a rozlišovat společný vývoj od místních rozdílů. Vznikl základ dlouhodobých záznamů, které pomáhají sledovat proměny zalednění při změnách klimatu. Na tuto spolupráci navazuje dnešní Světová služba pro sledování ledovců (WGMS).",
        references: [
          {
            sourceId: "1896_Forel_Du_Pasquier",
            locator: "s. 129–132 a 144–147"
          },
          {
            sourceId: "WEB_World_Glacier_Monitoring_Ser_WGMS_2020_6e490990",
            locator: "s. 1–2"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/pozorovani/ustup-ledovcu/",
        label: "Co ukazují dlouhodobá měření horských ledovců"
      }
    ]
  },
  {
    id: "1896_Arrhenius",
    year: 1896,
    dateMeaning: "Zveřejnění práce",
    title: "Výpočet teplotní odezvy na změnu CO₂",
    category: "mechanisms",
    importance: 1,
    paragraphs: [
      {
        text: "Svante Arrhenius využil dostupná měření záření a počítal, jak by různé množství oxidu uhličitého změnilo teplotu v jednotlivých zeměpisných šířkách a ročních obdobích. Do úvah zahrnul i vodní páru a odraz slunečního záření sněhem. Výsledky zveřejnil jako tabulky pro různé násobky obsahu CO₂.",
        references: [
          {
            sourceId: "1896_Arrhenius",
            locator: "tabulka VII a navazující diskuse"
          }
        ]
      },
      {
        text: "Fyzikální představa tím získala číselné výsledky, které bylo možné kontrolovat a zpřesňovat. Nešlo o dnešní prostorový klimatický model. Výpočet používal tehdejší měření absorpce a zjednodušený popis atmosféry, takže jeho hodnoty nemůžeme bez dalšího přebírat jako současný odhad oteplení.",
        references: [
          {
            sourceId: "1896_Arrhenius"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/mechanismy/radiacni-pusobeni-sklenikovych-plynu/",
        label: "Jak ověřujeme účinek dalšího CO₂"
      }
    ]
  },
  {
    id: "1912_De_Geer",
    year: 1912,
    dateMeaning: "Zveřejnění souhrnné práce o datování ústupu ledu",
    title: "Roční vrstvy sedimentů umožňují datovat ústup ledu",
    category: "methods",
    importance: 2,
    paragraphs: [
      {
        text: "Gerard De Geer shrnul postup, kterým sestavoval časový průběh ústupu skandinávského ledovce. Voda z letního tání odnášela materiál a ukládala jej před ledovcem. Každoroční opakování vytvářelo rozpoznatelné vrstvy usazenin, takzvané varvy. De Geer je počítal a měřil jejich tloušťku na různých místech.",
        references: [
          {
            sourceId: "1912_De_Geer",
            locator: "s. 458 a 461–463"
          }
        ]
      },
      {
        text: "Podle shodného sledu silnějších a tenčích vrstev spojoval místní záznamy do společné časové řady. Nejstarší vrstva na každém místě ukazovala, kdy se tam po ústupu ledu mohly usazeniny začít ukládat. Z rozdílu v počtu vrstev určoval, kolik let uplynulo mezi odledněním různých míst, a počítal rychlost ústupu ledovce. Geologické stopy klimatické změny tak získaly časové měřítko s rozlišením jednotlivých roků.",
        references: [
          {
            sourceId: "1912_De_Geer",
            locator: "s. 463–465, obrázky 2 a 3"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/metody/sedimentarni-jadra-a-stratigrafie/",
        label: "Jak čteme a datujeme vrstvy sedimentů"
      }
    ]
  },
  {
    id: "1916_Von_Post",
    year: 1916,
    dateMeaning: "Představení pylových diagramů na sjezdu v Kristianii",
    title: "Pylové diagramy odhalují proměny vegetace a klimatu",
    category: "methods",
    importance: 2,
    paragraphs: [
      {
        text: "Lennart von Post představil v Kristianii, dnešním Oslu, pylové diagramy. Tyto grafy zachycují podíly pylu jednotlivých dřevin v postupně ukládaných vrstvách rašeliny. Pod mikroskopem určoval a počítal zachovaná pylová zrna. Z jejich podílů pak sestavoval průběh změn lesní vegetace.",
        references: [
          {
            sourceId: "1916_Von_Post_Quellmoore",
            locator: "s. 262–264, obrázky 10 a 11 a poznámka k přednášce z roku 1916"
          }
        ]
      },
      {
        text: "Změny podílů borovice, břízy a teplomilnějších listnatých dřevin umožnily sledovat vývoj krajiny po poslední době ledové. Protože rostliny mají různé nároky na teplotu a vláhu, bylo možné z proměn vegetace usuzovat i na vývoj klimatu. Srovnávání pylových záznamů navíc pomáhalo přiřazovat vrstvy z různých míst ke stejnému období.",
        references: [
          {
            sourceId: "1916_Von_Post_Quellmoore",
            locator: "s. 262–265"
          },
          {
            sourceId: "DOI_10_1007_s00334_017_0628_9",
            locator: "s. 313–314, oddíl o botanických a geologických otázkách pylové statistiky"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/metody/pylova-analyza-a-mikrofosilie/",
        label: "Jak pylová analýza rekonstruuje minulou vegetaci"
      }
    ]
  },
  {
    id: "1919_Douglass",
    year: 1919,
    dateMeaning: "Vydání souhrnné práce o letokruzích a klimatu",
    title: "Letokruhy poskytují datovaný záznam minulého klimatu",
    category: "methods",
    importance: 2,
    paragraphs: [
      {
        text: "Andrew Ellicott Douglass shrnul výzkum letokruhů a jejich vztahu ke klimatu. Porovnával sled širokých a úzkých letokruhů u různých stromů a hledal společné vzorce. Tím mohl přiřadit letokruhy ke stejným kalendářním rokům a rozpoznat chybějící nebo zdánlivě zdvojený přírůstek.",
        references: [
          {
            sourceId: "1919_Douglass",
            locator: "kap. II, Yearly Identity and the Dating of Rings a Cross-identification"
          }
        ]
      },
      {
        text: "Datované šířky letokruhů potom srovnával s měřenými srážkami, zejména u borovic v Arizoně. Shoda ukazovala, jak se dostupnost vody promítá do růstu stromu. Spojení přesného datování a porovnání s počasím umožnilo číst ve dřevě záznam suchých a vlhkých období starších než místní přístrojová měření.",
        references: [
          {
            sourceId: "1919_Douglass",
            locator: "kap. II, porovnání letokruhů se srážkami a historickými záznamy"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/metody/dendrochronologie/",
        label: "Jak datujeme letokruhy a rekonstruujeme klima"
      }
    ]
  },
  {
    id: "1938_Callendar",
    year: 1938,
    dateMeaning: "Zveřejnění práce",
    title: "Výpočty účinku CO₂ se setkávají s teplotními záznamy",
    category: "mechanisms",
    importance: 1,
    paragraphs: [
      {
        text: "Guy Stewart Callendar spojil odhady emisí a koncentrace CO₂ s výpočtem absorpce záření a se záznamy asi dvou set meteorologických stanic. Z dostupných dat vyvodil oteplování během předchozího půlstoletí a část změny přisoudil oxidu uhličitému ze spalování paliv.",
        references: [
          {
            sourceId: "1938_Callendar",
            locator: "s. 223–240"
          }
        ]
      },
      {
        text: "Teorii tak porovnal s vývojem skutečné atmosféry. Vstupní měření CO₂ však byla řídká a výběr stanic omezoval pokrytí Země. Výsledek byl krokem k rozlišování příčin oteplování, nikoli úplným oddělením všech přirozených a lidských vlivů.",
        references: [
          {
            sourceId: "1938_Callendar",
            locator: "části o pozorované koncentraci a teplotě"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/pozorovani/gmst/",
        label: "Jak skládáme globální teplotní záznam"
      }
    ]
  },
  {
    id: "1941_Milankovic",
    year: 1941,
    dateMeaning: "Vydání knihy",
    title: "Výpočty oslunění dávají orbitální teorii časový průběh",
    category: "mechanisms",
    importance: 1,
    paragraphs: [
      {
        text: "Milutin Milanković sjednotil výpočty změn zemské dráhy, sklonu osy a její orientace. Převáděl je na množství sluneční energie v jednotlivých šířkách a ročních obdobích. Pro trvání sněhu přikládal velkou váhu letnímu oslunění ve vysokých severních šířkách: slabší léto umožňuje přežít větší části zimního sněhu.",
        references: [
          {
            sourceId: "1941_Milankovic",
            locator: "část o sekulárních změnách oslunění a problému dob ledových"
          }
        ]
      },
      {
        text: "Teorie nabízela konkrétní časový průběh, který bylo možné porovnat s geologickými záznamy. Přesvědčivý test jeho period ale potřeboval dlouhé a datované záznamy. Takové porovnání přinesla v roce 1976 analýza hlubokomořských sedimentů.",
        references: [
          {
            sourceId: "1976_Hays_Imbrie_Shackleton",
            locator: "s. 1121–1132"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/metody/sedimentarni-jadra-a-stratigrafie/",
        label: "Jak čteme časový záznam mořských sedimentů"
      }
    ]
  },
  {
    id: "1947_Urey",
    year: 1947,
    dateMeaning: "Zveřejnění teoretického základu izotopového teploměru",
    title: "Izotopy kyslíku nabízejí teploměr pro dávné klima",
    category: "methods",
    importance: 2,
    paragraphs: [
      {
        text: "Harold Urey vypočítal, jak teplota ovlivňuje rozdělení izotopů kyslíku mezi vodou a uhličitanem, z něhož vznikají například mořské schránky. Izotopy jsou atomy téhož prvku s různou hmotností. Jejich poměr v uhličitanu se vůči okolní vodě mění s teplotou při jeho vzniku.",
        references: [
          {
            sourceId: "DOI_10_1039_JR9470000562",
            locator: "s. 578–579"
          }
        ]
      },
      {
        text: "Navrhl proto využít zachované uhličitany jako geologický teploměr. Přesné měření izotopového poměru mělo umožnit odhadnout teplotu jejich vzniku, a tím získat číselné údaje o klimatu dávno před přístrojovými měřeními. Práce formulovala fyzikální základ metody i potřebu laboratorně ověřit vztah mezi teplotou a izotopovým poměrem.",
        references: [
          {
            sourceId: "DOI_10_1039_JR9470000562",
            locator: "s. 578–579, návrh geologického využití"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/metody/izotopova-paleotermometrie/",
        label: "Jak z izotopů určujeme teplotu vzniku schránek"
      }
    ]
  },
  {
    id: "1952_Libby",
    year: 1949,
    dateMeaning: "Zveřejnění zkoušky na vzorcích známého stáří",
    title: "Radiouhlíkové datování prochází zkouškou známého stáří",
    category: "methods",
    importance: 2,
    paragraphs: [
      {
        text: "James Arnold a Willard Libby změřili radioaktivitu uhlíku ve dřevě, jehož stáří znali z archeologických souvislostí nebo letokruhů. Srovnání ukázalo očekávaný úbytek uhlíku-14 se stářím vzorku. Výsledky zveřejněné v roce 1949 tak ověřily, že radioaktivní rozpad může sloužit jako hodiny pro datování organických pozůstatků.",
        references: [
          {
            sourceId: "1949_Arnold_Libby",
            locator: "s. 678–680, tabulka 1 a obrázek 1"
          }
        ]
      },
      {
        text: "Živý organismus přijímá uhlík z okolí. Po ukončení této výměny uhlík-14 postupně ubývá a z jeho zbývající aktivity lze určit radiouhlíkové stáří. Metoda dala výzkumu minulého klimatu nástroj k datování dřeva, rašeliny a dalších organických záznamů. Libby její postupy souhrnně popsal v knize z roku 1952.",
        references: [
          {
            sourceId: "1952_Libby",
            locator: "kap. I a VI"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/metody/radiometricke-a-expozicni-datovani/",
        label: "Jak funguje radiouhlíkové datování a jeho kalibrace"
      }
    ]
  },
  {
    id: "1955_Emiliani",
    year: 1955,
    dateMeaning: "Zveřejnění práce",
    title: "Izotopy ve schránkách zapisují proměny oceánu",
    category: "methods",
    importance: 2,
    paragraphs: [
      {
        text: "Cesare Emiliani měřil poměr těžšího a lehčího izotopu kyslíku ve schránkách drobných mořských organismů, dírkonošců. Schránky z různých hloubek sedimentárních jader zachycovaly různá období. Změny poměru vykládal především jako změny teploty moře a sestavil průběh opakovaných chladných a teplých období.",
        references: [
          {
            sourceId: "1955_Emiliani"
          }
        ]
      },
      {
        text: "Izotopový poměr ale ovlivňuje i složení mořské vody, které se mění při ukládání vody do pevninského ledu. Pozdější orbitální test proto pracoval s izotopovým záznamem spolu s dalšími ukazateli. Rozlišení teploty a objemu ledu je podstatnou podmínkou správného čtení tohoto archivu.",
        references: [
          {
            sourceId: "1976_Hays_Imbrie_Shackleton",
            locator: "popis použitých klimatických ukazatelů"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/metody/izotopova-paleotermometrie/",
        label: "Jak oddělujeme teplotu a složení vody"
      }
    ]
  },
  {
    id: "1956_Plass",
    year: 1956,
    dateMeaning: "Zveřejnění práce",
    title: "Přesnější výpočty záření prověřují účinek dalšího CO₂",
    category: "mechanisms",
    importance: 2,
    paragraphs: [
      {
        text: "Gilbert Plass využil podrobnější údaje o absorpci oxidu uhličitého a výpočetní postupy pro jednotlivé vrstvy atmosféry. Zkoumal pás tepelného záření kolem vlnové délky 15 mikrometrů. Ukázal, že silné pohlcování ve středu pásu samo o sobě neznamená, že přidání dalšího CO₂ už nemůže změnit přenos záření.",
        references: [
          {
            sourceId: "1956_Plass",
            locator: "s. 140–154"
          }
        ]
      },
      {
        text: "Při změně koncentrace záleží také na okrajích pásu a na podmínkách ve vyšších vrstvách atmosféry. Práce tak převedla námitku o nasycení absorpce na otázku konkrétního výpočtu. Její odhad teplotní odezvy přitom používal zjednodušené předpoklady o ostatních složkách klimatu.",
        references: [
          {
            sourceId: "1956_Plass",
            locator: "diskuse absorpce a teplotní odezvy"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/mechanismy/radiacni-pusobeni-sklenikovych-plynu/",
        label: "Proč další CO₂ mění tepelné záření"
      }
    ]
  },
  {
    id: "1957_Revelle_Suess",
    year: 1957,
    dateMeaning: "Zveřejnění práce",
    title: "Chemie mořské vody omezuje pohlcování dalšího CO₂",
    category: "mechanisms",
    importance: 1,
    paragraphs: [
      {
        text: "Roger Revelle a Hans Suess zkoumali, kolik oxidu uhličitého ze spalování fosilních paliv může přijmout oceán. Z podílu radioaktivního uhlíku v rostlinách a mořských materiálech odhadovali rychlost výměny uhlíku mezi vzduchem a vodou. Tento odhad spojili s výpočtem chemické rovnováhy mořské vody.",
        references: [
          { sourceId: "DOI_10_1111_j_2153_3490_1957_tb01849_x", locator: "s. 20–24" }
        ]
      },
      {
        text: "Výpočet ukázal, že pohlcený CO₂ mění chemické složení vody a omezuje její schopnost přijímat další CO₂ ze vzduchu. Rychlá výměna jednotlivých molekul proto neznamená stejně rychlé odstranění dodatečných emisí. Práce popsala důležitý důvod, proč velká zásoba uhlíku v oceánu sama nezabrání růstu koncentrace CO₂ v atmosféře.",
        references: [
          { sourceId: "DOI_10_1111_j_2153_3490_1957_tb01849_x", locator: "s. 24–26, obr. 2" }
        ]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/pohlcovani-co2-oceanem-a-uhlicitanova-chemie/", label: "Jak oceán přijímá CO₂" },
      { href: "/mechanismy/puvod-rustu-atmosferickeho-co2/", label: "Proč CO₂ v atmosféře přibývá" }
    ]
  },
  {
    id: "1958_Keeling",
    year: 1958,
    dateMeaning: "Zahájení měření na Mauna Loa",
    title: "Mauna Loa začíná pravidelně sledovat atmosférický CO₂",
    category: "observations",
    importance: 1,
    paragraphs: [
      {
        text: "Charles David Keeling zahájil v březnu 1958 na Mauna Loa měření pomocí infračerveného analyzátoru. Předcházela mu práce na přesnosti měření a rozlišování místních vlivů od složení volné atmosféry. Během prvních let záznam ukázal sezónní kolísání i růst průměrné koncentrace mezi roky.",
        references: [
          {
            sourceId: "1958_Keeling",
            locator: "The Early Keeling Curve"
          }
        ]
      },
      {
        text: "Pravidelný záznam umožnil posuzovat hromadění CO₂ podle opakovaných měření stejnou metodou. Samotná křivka ovšem popisuje koncentraci. Určení zdrojů přibývajícího uhlíku a jeho teplotního účinku vyžaduje další měření a fyzikální vysvětlení.",
        references: [
          {
            sourceId: "1958_Keeling"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/pozorovani/atmosfericka-koncentrace-co2/",
        label: "Pozorovaný růst koncentrace CO₂"
      },
      {
        href: "/mechanismy/puvod-rustu-atmosferickeho-co2/",
        label: "Jak určujeme původ přibývajícího uhlíku"
      }
    ]
  },
  {
    id: "1967_Manabe_Wetherald",
    year: 1967,
    dateMeaning: "Zveřejnění práce",
    title: "Model spojuje záření, proudění a vodní páru",
    category: "mechanisms",
    importance: 1,
    paragraphs: [
      {
        text: "Syukuro Manabe a Richard Wetherald počítali teplotní rovnováhu svislého sloupce atmosféry. Vedle přenosu záření zahrnuli přenos tepla konvekcí, tedy svislým pohybem vzduchu, a předepsali rozložení relativní vlhkosti. Při zvýšení CO₂ model vykazoval oteplení povrchu a nižší atmosféry i ochlazení stratosféry.",
        references: [
          {
            sourceId: "1967_Manabe_Wetherald",
            locator: "s. 241–259, výpočty pro změnu CO₂"
          }
        ]
      },
      {
        text: "Relativní vlhkost vyjadřuje poměr množství vodní páry k množství při nasycení. Teplejší vzduch při stejném poměru obsahuje více páry, která dále zesiluje oteplení. Model tuto zpětnou vazbu zahrnul předpokladem zachování relativní vlhkosti. Svislý sloupec přitom ještě nepopisoval plné prostorové proudění atmosféry a oceánu.",
        references: [
          {
            sourceId: "1967_Manabe_Wetherald"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/mechanismy/vodni-para-jako-zpetna-vazba/",
        label: "Jak vodní pára zesiluje oteplování"
      }
    ]
  },
  {
    id: "1975_Ramanathan",
    year: 1975,
    dateMeaning: "Zveřejnění práce",
    title: "Freony zesilují skleníkový efekt i v malých koncentracích",
    category: "mechanisms",
    importance: 2,
    paragraphs: [
      {
        text: "Veerabhadran Ramanathan vypočítal, jak dva chlorfluorované uhlovodíky, označované jako freony CFC-11 a CFC-12, mění únik tepelného záření do vesmíru. Tyto průmyslové plyny pohlcují záření také v části spektra, kterou jinak atmosféra poměrně dobře propouští.",
        references: [
          { sourceId: "DOI_10_1126_science_190_4209_50", locator: "s. 50–51" }
        ]
      },
      {
        text: "Při zvýšení jejich koncentrace model vykazoval oteplení povrchu. Práce ukázala, že pro klimatický význam plynu rozhoduje vedle množství také to, jaké záření pohlcuje. Rozšířila výpočty lidského vlivu na klima o látky přítomné v mnohem menších koncentracích než oxid uhličitý.",
        references: [
          { sourceId: "DOI_10_1126_science_190_4209_50", locator: "s. 51–52" }
        ]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/radiacni-pusobeni-sklenikovych-plynu/", label: "Jak skleníkové plyny mění přenos záření" }
    ]
  },
  {
    id: "1976_Hays_Imbrie_Shackleton",
    year: 1976,
    dateMeaning: "Zveřejnění práce",
    title: "Mořské sedimenty prověřují rytmus zemské dráhy",
    category: "mechanisms",
    importance: 1,
    paragraphs: [
      {
        text: "James Hays, John Imbrie a Nicholas Shackleton analyzovali přibližně půl milionu let dlouhé záznamy z hlubokomořských sedimentů. Porovnávali izotopy kyslíku a další ukazatele a hledali opakující se periody. Ve vývoji klimatu našli výrazné rytmy odpovídající přibližně 23, 41 a 100 tisícům let.",
        references: [
          {
            sourceId: "1976_Hays_Imbrie_Shackleton",
            locator: "spektrální analýza a závěry"
          }
        ]
      },
      {
        text: "Shoda s orbitálními periodami podpořila představu, že změny zemské dráhy určují načasování ledových cyklů. Neznamenala však, že samotná změna oslunění vysvětluje jejich celou velikost. Autoři upozornili zejména na to, že silný stotisíciletý rytmus vyžaduje vysvětlení odezvou klimatického systému.",
        references: [
          {
            sourceId: "1976_Hays_Imbrie_Shackleton",
            locator: "závěrečná diskuse"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/metody/sedimentarni-jadra-a-stratigrafie/",
        label: "Jak z vrstev sestavujeme historii klimatu"
      }
    ]
  },
  {
    id: "1978_Nimbus7_Sea_Ice",
    year: 1978,
    dateMeaning: "Začátek dlouhodobého družicového záznamu",
    title: "Začíná dlouhodobý družicový záznam mořského ledu",
    category: "observations",
    importance: 2,
    paragraphs: [
      {
        text: "Na podzim 1978 začala družice Nimbus-7 pořizovat pravidelná mikrovlnná měření polárních oblastí. Z nich se odvozuje, jakou část mořské hladiny pokrývá led. Na měření navázaly další družice a vznikl dlouhodobý záznam pro sledování změn zalednění v Arktidě i kolem Antarktidy.",
        references: [
          { sourceId: "WEB_NSIDC_Passive_Microwave_Record", locator: "Overview" }
        ]
      },
      {
        text: "Společné zpracování měření z navazujících přístrojů umožňuje porovnávat rozsah mořského ledu mezi desetiletími. Veřejný soubor Sea Ice Index zpřístupňuje mapy a číselné údaje o rozloze zalednění od konce roku 1978. Čtenář tak může sledovat sezonní cyklus i dlouhodobé změny ve stejném záznamu.",
        references: [
          { sourceId: "WEB_NSIDC_Passive_Microwave_Record", locator: "návaznost družicových měření" },
          { sourceId: "DOI_10_7265_a98x_0f50" }
        ]
      }
    ],
    relatedLinks: [
      { href: "/pozorovani/ubytek-arktickeho-ledu/", label: "Jak měříme změny arktického mořského ledu" }
    ]
  },
  {
    id: "1979_Charney",
    year: 1979,
    dateMeaning: "Zveřejnění práce",
    title: "Odhad oteplení dostává výslovné rozmezí nejistoty",
    category: "mechanisms",
    importance: 1,
    paragraphs: [
      {
        text: "Skupina vedená Julem Charneym pro americkou Národní výzkumnou radu posoudila oteplení při zdvojnásobení CO₂. Porovnala výsledky tehdejších modelů a hlavní zpětné vazby. Pro ustálené globální oteplení odhadla rozmezí 1,5 až 4,5 °C se středním odhadem kolem 3 °C.",
        references: [
          {
            sourceId: "1979_Charney",
            locator: "Summary and Conclusions"
          }
        ]
      },
      {
        text: "Zpráva oddělila dobře podložený směr změny od nejisté velikosti. Rozmezí vycházelo z posouzení fyziky a modelů, nikoli z pouhého průměru jejich výsledků. Vztahovalo se k odezvě na zdvojnásobení CO₂ po ustálení klimatu, nikoli k předpovědi teploty v konkrétním kalendářním roce.",
        references: [
          {
            sourceId: "1979_Charney",
            locator: "Summary and Conclusions"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/mechanismy/radiacni-pusobeni-sklenikovych-plynu/",
        label: "Fyzikální účinek změny CO₂"
      }
    ]
  },
  {
    id: "1987_Vostok",
    year: 1987,
    dateMeaning: "Zveřejnění práce",
    title: "Vzduch v ledu spojuje CO₂ s minulými ledovými cykly",
    category: "observations",
    importance: 1,
    paragraphs: [
      {
        text: "Jean-Marc Barnola a spolupracovníci změřili oxid uhličitý ve vzduchových bublinách z antarktického vrtu Vostok. Led drtili ve vakuu bez tání a v uvolněném plynu určovali obsah CO₂. Získali záznam dlouhý přibližně 160 000 let. Nízký obsah CO₂ se pojil s chladnými obdobími Antarktidy a vyšší s teplejšími.",
        references: [
          {
            sourceId: "1990_CDIAC_Vostok",
            locator: "oddíl Vostok, PDF s. 20–22"
          },
          {
            sourceId: "DOI_10_25921_drbk_t875",
            locator: "původní naměřené hodnoty"
          }
        ]
      },
      {
        text: "Souběžný vývoj plynu a teploty sám neurčuje všechny příčiny změny. Při časovém porovnání je navíc nutné rozlišit stáří ledu a vzduchu, který se v jeho pórech uzavřel až později. Veřejný datový soubor proto uvádí oba údaje samostatně a umožňuje kontrolovat, ke kterému období koncentrace patří.",
        references: [
          {
            sourceId: "DOI_10_25921_drbk_t875",
            locator: "sloupce ice_ageBP a gas_ageBP"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/metody/ledova-jadra-a-analyza-uzavreneho-vzduchu/",
        label: "Jak čteme led a vzduch v bublinách"
      }
    ]
  },
  {
    id: "1988_IPCC",
    year: 1988,
    dateMeaning: "Založení panelu",
    title: "Vzniká mezivládní rámec pro hodnocení klimatického výzkumu",
    category: "politics",
    importance: 1,
    paragraphs: [
      {
        text: "Světová meteorologická organizace a Program OSN pro životní prostředí založily Mezivládní panel pro změnu klimatu, IPCC. Jeho úkolem se stalo hodnotit dostupné vědecké poznání o změně klimatu, jejích dopadech a možnostech reakce pro potřeby vlád.",
        references: [
          {
            sourceId: "1988_IPCC"
          }
        ]
      },
      {
        text: "Instituce vytvořila trvalý postup společného hodnocení. Její vznik ale není novým měřením ani samostatným důkazem příčin oteplování. Takové závěry musí být dohledatelné v podkladovém výzkumu. První hodnotící zpráva panelu následovala v roce 1990 a je zde vedena jako vědecká syntéza.",
        references: [
          {
            sourceId: "1990_IPCC_FAR",
            locator: "předmluva a souhrn"
          }
        ]
      }
    ],
    relatedLinks: []
  },
  {
    id: "1990_IPCC_FAR",
    year: 1990,
    dateMeaning: "Vydání hodnotící zprávy",
    title: "První zpráva IPCC odděluje zjištění, nejistoty a scénáře",
    category: "mechanisms",
    importance: 2,
    paragraphs: [
      {
        text: "První hodnotící zpráva IPCC shrnula fyziku klimatu, možné dopady i reakce. Rozlišovala, co plyne z měření a fyziky, co zůstává nejisté a jaký vývoj vychází z různých emisních scénářů. Budoucí oteplení tak popisovala v závislosti na předpokládaném vývoji lidské činnosti.",
        references: [
          {
            sourceId: "1990_IPCC_FAR",
            locator: "Policymaker Summary, Working Group I"
          }
        ]
      },
      {
        text: "U tehdejšího pozorovaného oteplení zpráva upozorňovala, že velikost změny je ještě srovnatelná s odhadovanou přirozenou proměnlivostí. Tuto dobovou mez nelze zaměňovat s dnešním stavem poznání. Následující studie mohly otázku příčin prověřovat pomocí delších záznamů a podrobnějších prostorových vzorců změn.",
        references: [
          {
            sourceId: "1990_IPCC_FAR",
            locator: "Policymaker Summary, otázka zjištění skleníkového účinku"
          }
        ]
      }
    ],
    relatedLinks: []
  },
  {
    id: "1992_UNFCCC",
    year: 1992,
    dateMeaning: "Přijetí úmluvy",
    title: "Klimatická úmluva zavádí společný rámec vykazování a jednání",
    category: "politics",
    importance: 1,
    paragraphs: [
      {
        text: "Rámcová úmluva OSN o změně klimatu byla přijata 9. května 1992. Zavázala smluvní strany k přípravě emisních inventur, zprávám a spolupráci podle rozdílných odpovědností a možností. Zřídila konferenci smluvních stran jako společný rozhodovací orgán.",
        references: [
          {
            sourceId: "1992_UNFCCC",
            locator: "čl. 4, 7 a 12"
          }
        ]
      },
      {
        text: "Úmluva vstoupila v platnost v roce 1994. Vytvořila základ pro další dohody, sama však nerozdělila mezi státy právně závazné emisní kvóty typu pozdějšího Kjótského protokolu. Přijetí pravidel je třeba odlišovat od jejich plnění a od skutečné změny emisí.",
        references: [
          {
            sourceId: "1992_UNFCCC",
            locator: "čl. 4 a přehled historie úmluvy"
          }
        ]
      }
    ],
    relatedLinks: []
  },
  {
    id: "1992_TOPEX_Poseidon",
    year: 1992,
    dateMeaning: "Start družice",
    title: "Družice TOPEX/Poseidon začíná sledovat výšku oceánu",
    category: "observations",
    importance: 2,
    paragraphs: [
      {
        text: "Dne 10. srpna 1992 odstartovala družice TOPEX/Poseidon s cílem opakovaně měřit výšku mořské hladiny radarovou altimetrií, tedy určováním vzdálenosti podle doby návratu radarového pulzu. Výška hladiny se tak začala sledovat i daleko od pobřežních měřidel, podél opakovaných družicových drah.",
        references: [
          {
            sourceId: "WEB_NASA_TOPEX_POSEIDON_PO_DAAC_JPL_NASA_b5a07e8b"
          }
        ]
      },
      {
        text: "Mise stojí na počátku současného souvislého družicového záznamu globální hladiny, který začíná rokem 1993. Porovnání vzdálených let vyžaduje navázání dalších družicových misí a opravy vlivu atmosféry i pohybu družice. Tyto kroky jsou podstatné při převodu měřených vzdáleností na změnu hladiny.",
        references: [
          {
            sourceId: "DOI_10_5194_os_19_431_2023",
            locator: "oddíly 1–2, návaznost misí a opravy měření"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/metody/radarova-a-laserova-altimetrie/",
        label: "Jak altimetrie měří výšku hladiny"
      },
      {
        href: "/pozorovani/gmsl/",
        label: "Vývoj globální hladiny moře"
      }
    ]
  },
  {
    id: "1997_Kyoto",
    year: 1997,
    dateMeaning: "Přijetí protokolu",
    title: "Kjótský protokol stanovuje emisní závazky vybraným státům",
    category: "politics",
    importance: 1,
    paragraphs: [
      {
        text: "Smluvní strany klimatické úmluvy přijaly 11. prosince 1997 Kjótský protokol. Pro průmyslové země a ekonomiky v transformaci uvedené v příloze stanovil číselné emisní závazky. První závazkové období pokrývalo roky 2008–2012. Součástí rámce bylo vykazování emisí a odborné přezkoumání.",
        references: [
          {
            sourceId: "1997_Kyoto",
            locator: "čl. 3, 7 a 8, příloha B"
          }
        ]
      },
      {
        text: "Protokol vstoupil v platnost až v roce 2005. Jeho číselné závazky se nevztahovaly stejně na všechny státy světa. Zavedl také mechanismy mezinárodní spolupráce včetně obchodování s emisemi. Znění dohody dokládá rozsah povinností, nikoli samo o sobě velikost skutečně dosaženého snížení emisí.",
        references: [
          {
            sourceId: "1997_Kyoto",
            locator: "čl. 6, 12 a 17, přehled vstupu v platnost"
          }
        ]
      }
    ],
    relatedLinks: []
  },
  {
    id: "1998_Mann_Bradley_Hughes",
    year: 1998,
    dateMeaning: "Zveřejnění rekonstrukce",
    title: "Přírodní archivy zasazují oteplování do minulých staletí",
    category: "observations",
    importance: 2,
    paragraphs: [
      {
        text: "Michael Mann, Raymond Bradley a Malcolm Hughes spojili údaje z letokruhů, korálů, ledových vrtů a dalších záznamů. Porovnáním s přístrojovými teplotami stanovili vztahy, podle nichž rekonstruovali dřívější teplotní vývoj. Výsledkem byl také odhad průměrné teploty severní polokoule od roku 1400.",
        references: [
          { sourceId: "DOI_10_1038_33859", locator: "s. 779–783, Data a Calibration" }
        ]
      },
      {
        text: "Rekonstrukce umožnila porovnat oteplování 20. století s předchozími staletími a ukázala výrazné teplo závěru zkoumaného období. Směrem do minulosti ubývalo dostupných záznamů, což autoři vyjádřili širším rozmezím nejistoty. Veřejný archiv podkladů obsahuje vstupní data, výsledky a výpočetní kód pro kontrolu postupu.",
        references: [
          { sourceId: "DOI_10_1038_33859", locator: "obr. 5 a závěry" },
          { sourceId: "DOI_10_26208_51cv_tr24" }
        ]
      }
    ],
    relatedLinks: [
      { href: "/metody/dendrochronologie/", label: "Jak letokruhy uchovávají klimatický záznam" },
      { href: "/pozorovani/gmst/", label: "Jak určujeme novodobou změnu teploty" }
    ]
  },
  {
    id: "2000_Levitus",
    year: 2000,
    dateMeaning: "Zveřejnění práce",
    title: "Měření pod hladinou dokládají hromadění tepla v oceánu",
    category: "observations",
    importance: 1,
    paragraphs: [
      {
        text: "Sydney Levitus a spolupracovníci sestavili přehled oceánských teplot z let 1948–1998. Měření rozdělili podle oblasti a hloubky a z teplotních změn vypočítali změnu množství tepla uloženého ve vodě. Analýza zahrnovala vrstvy od hladiny do hloubky tří kilometrů.",
        references: [
          { sourceId: "DOI_10_1126_science_287_5461_2225", locator: "s. 2225–2226, postup sestavení dat" }
        ]
      },
      {
        text: "Mezi polovinou 50. a polovinou 90. let tepelný obsah světového oceánu vzrostl. Výsledek doložil hromadění tepla také pod povrchem a doplnil poznání z měření vzduchu a mořské hladiny. Samotná studie ještě neurčovala, jaký díl ohřevu způsobila lidská činnost. Pro takový závěr bylo třeba porovnat pozorovaný průběh s výpočty různých příčin.",
        references: [
          { sourceId: "DOI_10_1126_science_287_5461_2225", locator: "obr. 4 a Discussion" }
        ]
      }
    ],
    relatedLinks: [
      { href: "/pozorovani/tepelny-obsah-oceanu/", label: "Jak určujeme změnu obsahu tepla v oceánu" },
      { href: "/mechanismy/pohlcovani-a-presun-tepla-oceanem/", label: "Jak se teplo ukládá a šíří v oceánu" }
    ]
  },
  {
    id: "2000_Argo",
    year: 2000,
    dateMeaning: "Zahájení programu",
    title: "Plováky Argo začínají soustavně měřit vnitřek oceánu",
    category: "observations",
    importance: 2,
    paragraphs: [
      {
        text: "Mezinárodní program Argo začal rozmisťovat autonomní plováky, které se pohybují mezi hladinou a hloubkou. Při výstupu měří teplotu a slanost a po vynoření předávají údaje přes družice. Základní síť byla navržena pro měření horních přibližně dvou kilometrů oceánu.",
        references: [
          {
            sourceId: "2000_Argo",
            locator: "popis programu a způsobu měření"
          }
        ]
      },
      {
        text: "Opakované profily doplnily řídká měření z lodí a umožnily soustavněji sledovat změny tepla uloženého v oceánu. Data se veřejně sdílejí a procházejí kontrolou kvality. Rok 2000 označuje začátek programu, nikoli okamžik, kdy už síť rovnoměrně pokrývala všechny oceány.",
        references: [
          {
            sourceId: "WEB_Argo_Scripps_2005",
            locator: "stav budování sítě v roce 2005"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/pozorovani/tepelny-obsah-oceanu/",
        label: "Jak určujeme obsah tepla v oceánu"
      }
    ]
  },
  {
    id: "2005_Barnett",
    year: 2005,
    dateMeaning: "Zveřejnění práce",
    title: "Rozložení ohřevu v oceánu prověřuje lidský vliv",
    category: "mechanisms",
    importance: 2,
    paragraphs: [
      {
        text: "Tim Barnett a spolupracovníci porovnali měření od roku 1960 s výpočty dvou klimatických modelů. Zkoumali, jak se oteplování liší mezi oceány a s hloubkou. Tento prostorový průběh obsahuje více informací o příčině než jediná hodnota průměrné teploty.",
        references: [
          {
            sourceId: "DOI_10_1126_science_1112418",
            locator: "obr. 1–3"
          }
        ]
      },
      {
        text: "Pozorované rozložení odpovídalo výpočtům zahrnujícím lidské vlivy. Samotné kolísání uvnitř klimatického systému ani zahrnuté změny Slunce a sopečné činnosti je nevysvětlovaly. Autoři prověřovali také vliv nerovnoměrného vzorkování. Závěr tak opřeli o srovnání konkrétních alternativ a jejich předpovědí.",
        references: [
          {
            sourceId: "DOI_10_1126_science_1112418",
            locator: "s. 284–287"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/mechanismy/pohlcovani-a-presun-tepla-oceanem/",
        label: "Jak se teplo šíří v oceánu"
      }
    ]
  },
  {
    id: "2006_GRACE",
    year: 2006,
    dateMeaning: "Zveřejnění výsledku měření z let 2002–2005",
    title: "Změny gravitace umožňují měřit úbytek antarktického ledu",
    category: "methods",
    importance: 2,
    paragraphs: [
      {
        text: "Isabella Velicogna a John Wahr využili družice GRACE k odhadu změny hmotnosti antarktického ledového příkrovu. Úbytek hmoty se projevuje změnou gravitačního pole, kterou družice sledují. Z měření z let 2002–2005 autoři odvodili celkový úbytek ledu, převážně v západní Antarktidě.",
        references: [
          { sourceId: "DOI_10_1126_science_1123785", locator: "s. 1754–1756, obr. 1 a 2" }
        ]
      },
      {
        text: "Metoda poskytla nový způsob, jak určit změnu celkové hmotnosti rozsáhlého příkrovu. Gravitační signál ovšem zahrnuje také pomalý pohyb zemského podloží po ústupu dávného zalednění. Autoři jeho příspěvek odhadli pomocí modelů a oddělili jej od současné změny ledu.",
        references: [
          { sourceId: "DOI_10_1126_science_1123785", locator: "s. 1755–1756, oprava vlivu pohybu podloží" }
        ]
      }
    ],
    relatedLinks: [
      { href: "/metody/druzicova-gravimetrie/", label: "Jak družice měří změny gravitačního pole" },
      { href: "/pozorovani/nestabilita-prikrovu/", label: "Jak určujeme změnu hmotnosti ledových příkrovů" }
    ]
  },
  {
    id: "2009_Carbon_Budget",
    year: 2009,
    dateMeaning: "Zveřejnění práce",
    title: "Uhlíkový rozpočet propojuje oteplení s celkovými emisemi",
    category: "mechanisms",
    importance: 1,
    paragraphs: [
      {
        text: "Myles Allen a spolupracovníci propojili modely klimatu s modely výměny uhlíku mezi atmosférou, oceánem a pevninou. Porovnávali různé průběhy emisí CO₂ v čase. Zjistili, že vrchol oteplení způsobeného CO₂ závisí především na celkovém vypuštěném množství a podstatně méně na přesném časovém rozložení emisí.",
        references: [
          { sourceId: "DOI_10_1038_nature08019", locator: "s. 1163–1165, obr. 1–3" }
        ]
      },
      {
        text: "Výsledek dal fyzikální oporu uhlíkovému rozpočtu, tedy omezenému součtu emisí CO₂ slučitelnému se zvoleným teplotním cílem. Pro omezení oteplení je tak důležité sledovat emise nashromážděné za celé období. Velikost konkrétního rozpočtu závisí také na zvolené míře rizika překročení cíle a na oteplování způsobeném dalšími látkami.",
        references: [
          { sourceId: "DOI_10_1038_nature08019", locator: "s. 1165–1166, závěry a Methods Summary" }
        ]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/puvod-rustu-atmosferickeho-co2/", label: "Jak se emise promítají do množství CO₂ v atmosféře" },
      { href: "/mechanismy/pohlcovani-a-presun-tepla-oceanem/", label: "Jak oceán ovlivňuje průběh oteplování" }
    ]
  },
  {
    id: "2013_Santer",
    year: 2013,
    dateMeaning: "Zveřejnění práce",
    title: "Teplotní změny v různých výškách prověřují přirozené příčiny",
    category: "mechanisms",
    importance: 3,
    paragraphs: [
      {
        text: "Benjamin Santer a spolupracovníci porovnali družicové záznamy teplot z let 1979–2012 s klimatickými modely. Sledovali společný prostorový průběh oteplování nižší vrstvy atmosféry, troposféry, a ochlazování stratosféry nad ní. Testovali jej proti proměnlivosti zahrnující nejen vnitřní kolísání, ale také změny sluneční a sopečné činnosti.",
        references: [
          {
            sourceId: "DOI_10_1073_pnas_1305332110",
            locator: "Results and Discussion"
          }
        ]
      },
      {
        text: "Lidský vliv zůstal rozpoznatelný i při tomto širším srovnání přirozených příčin. Studie využila více družicových zpracování a modelů, aby ověřila závislost výsledku na zvolené datové sadě. Rozhodující byla shoda konkrétního vzorce změn, nikoli pouhé současné zvyšování CO₂ a povrchové teploty.",
        references: [
          {
            sourceId: "DOI_10_1073_pnas_1305332110",
            locator: "závěry a popis použitých dat"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/pozorovani/stratosfericke-ochlazovani/",
        label: "Jak měříme ochlazování stratosféry"
      }
    ]
  },
  {
    id: "2015_Feldman",
    year: 2015,
    dateMeaning: "Zveřejnění práce",
    title: "Rostoucí CO₂ zanechává měřitelnou změnu záření u povrchu",
    category: "mechanisms",
    importance: 3,
    paragraphs: [
      {
        text: "Daniel Feldman a spolupracovníci vyhodnotili spektra tepelného záření přicházejícího z atmosféry na dvou stanicích v Oklahomě a na Aljašce. Měření z let 2000–2010 spojili s údaji o teplotě, vlhkosti a složení vzduchu. Pomocí výpočtu přenosu záření oddělili příspěvek rostoucího CO₂ od ostatních změn.",
        references: [
          {
            sourceId: "DOI_10_1038_nature14240",
            locator: "obr. 1–3 a Methods"
          }
        ]
      },
      {
        text: "Při zvýšení koncentrace CO₂ o 22 částic na milion zjistili na obou místech přírůstek toku záření k povrchu asi 0,2 wattu na metr čtvereční za desetiletí, s nejistotami ±0,06 a ±0,07 W/m² za desetiletí. Výsledek platí pro bezoblačné podmínky na těchto stanicích. Ověřuje jednu část radiačního účinku CO₂, zatímco celková energetická nerovnováha planety zahrnuje i další toky energie.",
        references: [
          {
            sourceId: "DOI_10_1038_nature14240",
            locator: "s. 339–343"
          }
        ]
      }
    ],
    relatedLinks: [
      {
        href: "/mechanismy/radiacni-pusobeni-sklenikovych-plynu/",
        label: "Jak oddělujeme radiační účinek CO₂"
      }
    ]
  },
  {
    id: "2015_Paris",
    year: 2015,
    dateMeaning: "Přijetí dohody",
    title: "Pařížská dohoda zavádí opakované národní klimatické příspěvky",
    category: "politics",
    importance: 1,
    paragraphs: [
      {
        text: "Pařížská dohoda přijatá 12. prosince 2015 stanovila cíl udržet oteplení výrazně pod 2 °C oproti předindustriálnímu období a usilovat o omezení na 1,5 °C. Každá smluvní strana má připravovat, sdělovat a udržovat národní příspěvky. Nový příspěvek má předkládat každých pět let a postupně zvyšovat své úsilí.",
        references: [
          {
            sourceId: "2015_Paris",
            locator: "čl. 2 a 4"
          }
        ]
      },
      {
        text: "Dohoda vstoupila v platnost 4. listopadu 2016. Přidala rámec transparentnosti a pravidelné globální hodnocení pokroku. Povinnost předkládat příspěvky je odlišná od právně zaručeného dosažení každého národního cíle. Samotné přijetí dohody proto ještě nedokládá splnění jejího teplotního cíle.",
        references: [
          {
            sourceId: "2015_Paris",
            locator: "čl. 4, 13 a 14, přehled vstupu v platnost"
          }
        ]
      }
    ],
    relatedLinks: []
  },
  {
    id: "2016_Kigali",
    year: 2016,
    dateMeaning: "Přijetí dodatku",
    title: "Kigalský dodatek stanovuje omezení silných skleníkových plynů",
    category: "politics",
    importance: 2,
    paragraphs: [
      {
        text: "Smluvní strany Montrealského protokolu přijaly 15. října 2016 v Kigali dodatek o hydrofluorovaných uhlovodících, zkráceně HFC. Tyto průmyslové plyny silně zesilují skleníkový efekt. Dodatek stanovil postupné omezování jejich výroby a spotřeby, s rozdílnými harmonogramy pro jednotlivé skupiny států.",
        references: [
          { sourceId: "2016_Kigali", locator: "čl. I, nový čl. 2J, změny čl. 5 a příloha F protokolu" }
        ]
      },
      {
        text: "Dodatek vstoupil v platnost 1. ledna 2019. Pro státy, které jej přijmou, zavádí závazné limity a vykazování výroby a spotřeby těchto látek. Klimatická politika tím získala konkrétní mezinárodní režim pro další skupinu skleníkových plynů.",
        references: [
          { sourceId: "2016_Kigali", locator: "čl. IV, změny čl. 7 protokolu a záznam o vstupu v platnost" }
        ]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/radiacni-pusobeni-sklenikovych-plynu/", label: "Jak různé plyny ovlivňují klima" }
    ]
  }
];
