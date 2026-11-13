export const historyBranches = {
  science: "Věda",
  politics: "Politika",
  culture: "Společnost a kultura",
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
    label: "Společnost a kultura",
    description: "Jak se klima stalo veřejným tématem",
    href: null,
  },
} as const satisfies Record<string, { branch: HistoryBranch; label: string; description: string; href: string | null }>;

export type HistoryCategory = keyof typeof historyCategories;
export type HistoryImportance = 1 | 2 | 3;

export const historyImportances = {
  1: { label: "Zásadní", description: "Rozhodující kroky v poznání, politice a veřejném vnímání klimatu", filterLabel: "1 · Zásadní milníky" },
  2: { label: "Důležitý", description: "Důležité poznatky, postupy a další kroky ve společenské odezvě", filterLabel: "2 · Důležité milníky" },
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
    id: "1958_Unchained_Goddess",
    year: 1958,
    dateMeaning: "První televizní vysílání pořadu",
    title: "Televizní pořad upozorňuje na oteplování způsobené člověkem",
    category: "culture",
    importance: 3,
    paragraphs: [
      {
        text: "Americká televize NBC odvysílala 12. února 1958 pořad The Unchained Goddess ze série Bell System Science Series. V rozhovoru o počasí zaznělo, že oxid uhličitý vypouštěný továrnami a automobily může měnit světové klima. Pořad spojil oteplování s možným táním polárního ledu a vzestupem mořské hladiny.",
        references: [
          { sourceId: "DOI_10_1017_S0007087425101118", locator: "s. 622, přehled pořadů a dat vysílání" },
          { sourceId: "2010_Jenkins_Unchained_Goddess", locator: "citovaný rozhovor Baxtera a Carlsona" }
        ]
      },
      {
        text: "Série propojovala hrané rozhovory, animaci a vědecké vysvětlování a po televizním vysílání se využívala také ve školách. Tento díl tak dokládá, že představa lidského oteplování vstoupila do televizní popularizace už v 50. letech. Dochovaný úryvek zachycuje tehdejší způsob výkladu a jeho obrazy možných následků.",
        references: [
          { sourceId: "DOI_10_1017_S0007087425101118", locator: "s. 621–622, dosah a forma série" },
          { sourceId: "2010_Jenkins_Unchained_Goddess", locator: "úryvek z pořadu" }
        ]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/radiacni-pusobeni-sklenikovych-plynu/", label: "Jak dnes ověřujeme radiační působení skleníkových plynů" }
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
    id: "1969_Budyko",
    year: 1969,
    dateMeaning: "Zveřejnění modelového výpočtu",
    title: "Model počítá zesilující účinek sněhu a ledu",
    category: "mechanisms",
    importance: 2,
    paragraphs: [
      {
        text: "Michail Budyko sestavil jednoduchý model, který pro jednotlivé zeměpisné šířky porovnával přijaté sluneční záření, vyzařované teplo a přenos tepla mezi oblastmi. Rozsah sněhu a ledu se v něm měnil s teplotou. Protože světlý sníh a led odrážejí více slunečního záření, jejich rozšiřování dále zesilovalo ochlazování.",
        references: [{ sourceId: "1969_Budyko", locator: "s. 611–616, rovnice 1–6" }]
      },
      {
        text: "Výpočet ukázal, že při zapojení této zpětné vazby může poměrně malá změna přísunu energie vyvolat velký posun hranice zalednění. V opačném směru ústup ledu umožňuje povrchu pohltit více sluneční energie. Práce dala známému vztahu mezi ledem a odrazivostí podobu výpočtu, v němž lze zkoumat citlivost klimatu i přechod k rozsáhlému zalednění. Konkrétní prahy přechodu platily pro tento zjednodušený model.",
        references: [{ sourceId: "1969_Budyko", locator: "s. 615–617, obrázek 5" }]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/odrazivost-snehu-a-ledu-jako-zpetna-vazba/", label: "Jak změna odrazivosti zesiluje změnu teploty" }
    ]
  },
  {
    id: "1969_Manabe_Bryan",
    year: 1969,
    dateMeaning: "Zveřejnění společného modelu",
    title: "Výpočet propojuje atmosféru s proudícím oceánem",
    category: "methods",
    importance: 2,
    paragraphs: [
      {
        text: "Syukuro Manabe a Kirk Bryan propojili trojrozměrný model atmosféry s modelem oceánského proudění. Atmosféra určovala přísun tepla, vody a působení větru na hladinu. Vypočtená teplota povrchové vody zase ovlivňovala atmosféru. Součástí byl i jednoduchý popis mořského ledu.",
        references: [{ sourceId: "1969_Manabe_Bryan", locator: "s. 786–787" }]
      },
      {
        text: "Tím mohli počítat klima, v němž si atmosféra a oceán navzájem mění podmínky. Porovnání výpočtů s oceánským prouděním a bez něj ukázalo jeho vliv na rozložení teploty a srážek. Model používal výrazně zjednodušenou geografii a hledal ustálený stav. Jeho přínosem bylo uskutečněné propojení obou částí klimatického systému, potřebné pro zkoumání společné odezvy atmosféry a oceánu.",
        references: [{ sourceId: "1969_Manabe_Bryan", locator: "s. 786–789, obrázky 1–4" }]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/pohlcovani-a-presun-tepla-oceanem/", label: "Proč se teplo v Jižním oceánu ukládá jinde, než přichází" }
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
    id: "1989_McKibben_End_of_Nature",
    year: 1989,
    dateMeaning: "Vydání knihy",
    title: "Kniha spojuje oteplování s proměnou vztahu člověka k přírodě",
    category: "culture",
    importance: 2,
    paragraphs: [
      {
        text: "Bill McKibben vydal knihu The End of Nature. Vysvětloval širokému čtenářstvu růst skleníkových plynů a zasazoval jej do vyprávění o tom, jak lidská činnost mění prostředí celé planety. Rychlost těchto změn porovnával s běžnou představou pomalého vývoje přírody.",
        references: [{ sourceId: "1989_McKibben_End_of_Nature", locator: "autorský popis knihy a veřejná ukázka u nakladatele, oddíl Excerpt" }]
      },
      {
        text: "Pod označením konec přírody rozuměl ztrátu představy přírody jako světa nezávislého na člověku. Klimatické poznatky tak spojil s otázkami odpovědnosti, každodenního života a významu divoké přírody. Kniha představuje důležitý krok klimatického eseje, v němž se měnící atmosféra stává také kulturní a filozofickou otázkou.",
        references: [{ sourceId: "1989_McKibben_End_of_Nature", locator: "autorský popis knihy a citované dobové recenze" }]
      }
    ],
    relatedLinks: [
      { href: "/pozorovani/atmosfericka-koncentrace-co2/", label: "Jak měříme růst koncentrace CO₂" }
    ]
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
    id: "1992_Charlson",
    year: 1992,
    dateMeaning: "Zveřejnění souhrnného výpočtu",
    title: "Průmyslové aerosoly částečně vyvažují skleníkové oteplování",
    category: "mechanisms",
    importance: 1,
    paragraphs: [
      {
        text: "Robert Charlson a jeho spoluautoři spojili údaje o emisích síry, množství částic v atmosféře a jejich působení na sluneční záření. Vyčíslili globální ochlazující účinek síranových aerosolů, drobných částic vznikajících také z emisí při spalování fosilních paliv. Částice rozptylují sluneční světlo a prostřednictvím změn oblačných kapek mohou zvyšovat také odrazivost oblaků.",
        references: [{ sourceId: "1992_Charlson", locator: "s. 423–428, oddíly o přímém a nepřímém radiačním vlivu" }]
      },
      {
        text: "Dobový odhad ukázal, že tento ochlazující vliv je dost velký, aby částečně tlumil oteplování skleníkovými plyny. Síranové částice ovšem zůstávají v atmosféře krátce a jejich množství se mezi oblastmi výrazně liší. Při vysvětlování průběhu oteplování proto bylo potřeba počítat současně s oběma vlivy a jejich rozdílným rozložením. Tento závěr se týkal především síranových aerosolů, zatímco například saze sluneční záření také pohlcují.",
        references: [{ sourceId: "1992_Charlson", locator: "s. 423–424 a 428–429" }]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/prumyslove-aerosoly-a-oblaka/", label: "Jak částice z lidské činnosti mění záření a oblaka" }
    ]
  },
  {
    id: "1992_Keeling_Shertz",
    year: 1992,
    dateMeaning: "Zveřejnění měření a metody bilance",
    title: "Atmosférický kyslík pomáhá sledovat osud vypouštěného uhlíku",
    category: "methods",
    importance: 2,
    paragraphs: [
      {
        text: "Ralph Keeling a Stephen Shertz zveřejnili velmi přesná měření poměru kyslíku k dusíku ve vzduchu ze tří stanic na obou polokoulích. Poměr umožnil zachytit drobné změny množství kyslíku, které jsou vedle jeho velkého atmosférického podílu obtížně měřitelné. V záznamu z La Jolly zjistili vedle sezonního kolísání také pokles odpovídající spotřebě kyslíku při spalování fosilních paliv.",
        references: [{ sourceId: "DOI_10_1038_358723a0", locator: "s. 723–726, obrázek 1" }]
      },
      {
        text: "Měření kyslíku přidalo k samotnému CO₂ další informaci o pohybu uhlíku. Rostliny při fotosyntéze přijímají CO₂ a uvolňují kyslík, zatímco rozpouštění CO₂ v oceánu takový protějšek nemá. Společná bilance obou plynů proto umožnila lépe rozlišovat, jak se na pohlcování emisí podílí pevninská biosféra a oceán. Autoři přitom zohlednili i samostatnou výměnu kyslíku mezi mořem a vzduchem.",
        references: [{ sourceId: "DOI_10_1038_358723a0", locator: "s. 724–726, rozbor sezonních změn a uhlíkové bilance" }]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/puvod-rustu-atmosferickeho-co2/", label: "Jak kyslík pomáhá ověřit původ a bilanci rostoucího CO₂" }
    ]
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
    id: "1993_Alley",
    year: 1993,
    dateMeaning: "Zveřejnění rekonstrukce minulé změny",
    title: "Grónský led odhaluje náhlou změnu sněhových přírůstků",
    category: "observations",
    importance: 1,
    paragraphs: [
      {
        text: "Richard Alley a jeho spoluautoři rozpoznávali roční vrstvy v ledovém jádru GISP2 z centrálního Grónska. Jejich počítání kontrolovali pomocí chemických a elektrických vlastností ledu i stop sopečných erupcí. Z tloušťky vrstev po opravě jejich ztenčování pohybem ledu odhadli, kolik sněhu se v jednotlivých letech nahromadilo.",
        references: [{ sourceId: "1993_Alley", locator: "s. 527–528, obrázek 1 a tabulka 1" }]
      },
      {
        text: "Na konci mladšího dryasu, chladného období při ústupu poslední doby ledové, našli prudké zvýšení sněhových přírůstků. Podle jejich rekonstrukce se mohly zdvojnásobit během jednoho až tří let. Záznam tak doložil, že regionální klima může přejít do odlišného stavu velmi rychle. Výsledek se týkal sněhových přírůstků v Grónsku a zpřesnil časový průběh již známé náhlé klimatické změny.",
        references: [{ sourceId: "1993_Alley", locator: "s. 528–529, obrázek 2" }]
      },
      {
        text: "Veřejný archiv PANGAEA zpřístupňuje související soubor ročních vrstev a odvozených přírůstků. Jeho popis výslovně rozlišuje tuto pozdější kompilaci od přesných podkladů článku z roku 1993.",
        references: [{ sourceId: "DOI_10_1594_PANGAEA_55534", locator: "popis parametru Accumulation of snow/ice per year a datový soubor" }]
      }
    ],
    relatedLinks: [
      { href: "/metody/ledova-jadra-a-analyza-uzavreneho-vzduchu/", label: "Jak čteme a datujeme klimatický záznam v ledu" }
    ]
  },
  {
    id: "1993_Butler_Parable_of_the_Sower",
    year: 1993,
    dateMeaning: "Vydání románu",
    title: "Román propojuje klimatickou změnu s každodenním přežitím",
    category: "culture",
    importance: 2,
    paragraphs: [
      {
        text: "Octavia E. Butler vydala román Parable of the Sower. Příběh zasadila do budoucí Kalifornie, kde se klimatická změna spojuje s hospodářskou krizí, nedostatkem vody a rozpadem společenského pořádku. Hlavní postava Lauren Olamina hledá bezpečí pro sebe a své blízké v prostředí, které přestává poskytovat základní jistoty.",
        references: [{ sourceId: "1993_Butler_Parable_of_the_Sower", locator: "oficiální synopse a životopisný oddíl Octavia E. Butler v přehledu knihovny Huntington" }]
      },
      {
        text: "Klimatické ohrožení zde vstupuje do každodenních rozhodnutí o přežití, důvěře a vytváření nové komunity. Román ukazuje jednu z podob klimatické beletrie: příběh, v němž změněné prostředí spoluutváří lidské vztahy a možnosti jednání. Autorka tak propojila klimatické téma se sociální zkušeností a hledáním společné budoucnosti.",
        references: [{ sourceId: "1993_Butler_Parable_of_the_Sower", locator: "oficiální synopse románu a popis témat autorčiny tvorby" }]
      }
    ],
    relatedLinks: [
      { href: "/pozorovani/srazky-a-privalove-srazky/", label: "Jak měříme a porovnáváme změny srážek" }
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
      { href: "/mechanismy/pohlcovani-a-presun-tepla-oceanem/", label: "Proč se teplo v Jižním oceánu ukládá jinde, než přichází" }
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
    id: "2003_Parmesan_Yohe",
    year: 2003,
    dateMeaning: "Zveřejnění syntézy pozorování",
    title: "Pozorování organismů ukazují společnou odezvu na oteplování",
    category: "observations",
    importance: 2,
    paragraphs: [
      {
        text: "Camille Parmesan a Gary Yohe vyhodnotili studie zahrnující více než 1 700 druhů. Sledovali změny jejich výskytu i načasování jarních událostí, například rozmnožování nebo kvetení. V souhrnu zjistili posuny směrem k pólům či do vyšších poloh a dřívější začátek jarních událostí, tedy změny očekávané při oteplování.",
        references: [{ sourceId: "2003_Parmesan_Yohe", locator: "s. 37–40, obrázky 1 a 2" }]
      },
      {
        text: "Význam syntézy spočíval v opakování podobného vzorce u různých skupin organismů a v různých oblastech. Autoři porovnávali také nezměněné záznamy a změny opačným směrem. Místní zásahy do krajiny mohou ovlivnit jednotlivé druhy, ale společný směr mnoha pozorování poskytl širší oporu závěru, že již probíhající oteplování mění živou přírodu. Neznamenal stejnou odezvu každého druhu.",
        references: [{ sourceId: "2003_Parmesan_Yohe", locator: "s. 39–42, rozbor společného vzorce a oddíl Methods" }]
      }
    ],
    relatedLinks: [
      { href: "/metody/standardizovane-fenologicke-pozorovani/", label: "Jak zaznamenáváme dobu kvetení a dalších přírodních událostí" }
    ]
  },
  {
    id: "2004_Day_After_Tomorrow",
    year: 2004,
    dateMeaning: "Uvedení filmu do kin",
    title: "Klimatická katastrofa se stává tématem hollywoodského velkofilmu",
    category: "culture",
    importance: 2,
    paragraphs: [
      {
        text: "Film Den poté režiséra Rolanda Emmericha postavil příběh na náhlé klimatické katastrofě vyvolané změnou oceánského proudění. V květnu 2004 vstoupil do kin jako velká dobrodružná podívaná. Klimatické ohrožení zobrazil prostřednictvím lidských osudů a ničivých událostí. Prudký příchod nové doby ledové je součástí filmové fikce.",
        references: [
          { sourceId: "WEB_20th_Century_Day_After_Tomorrow", locator: "Release Date, Genre, synopse a Directed By" },
          { sourceId: "DOI_10_1080_00139150409603663", locator: "s. 23–26, děj filmu a jeho přijetí" }
        ]
      },
      {
        text: "Anthony Leiserowitz zkoumal americké publikum pomocí dotazníků před uvedením filmu a po něm. Ze sledovaných diváků 49 % uvedlo, že v nich film zvýšil obavy z globálního oteplování. Tento výsledek zachycuje vlastní hodnocení diváků. Příběh zábavného filmu se stal podnětem k veřejné debatě o klimatickém riziku i k výzkumu diváckých představ.",
        references: [{ sourceId: "DOI_10_1080_00139150409603663", locator: "s. 24 a 26–27, postup průzkumu a odpovědi diváků" }]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/pohlcovani-a-presun-tepla-oceanem/", label: "Jak oceán skutečně přijímá a přenáší teplo" }
    ]
  },
  {
    id: "2004_Sabine",
    year: 2004,
    dateMeaning: "Zveřejnění inventury pro stav v roce 1994",
    title: "Globální inventura vyčísluje uhlík z lidských emisí v oceánu",
    category: "observations",
    importance: 2,
    paragraphs: [
      {
        text: "Christopher Sabine a jeho spoluautoři spojili měření z 95 oceánografických plaveb a 9 618 stanic převážně z 90. let. Z rozpuštěného anorganického uhlíku potřebovali oddělit část pocházející z lidských emisí. Pomocí chemických ukazatelů a odhadu podmínek při posledním styku vody s atmosférou odečetli přirozené příspěvky, například uhlík uvolněný rozkladem organické hmoty.",
        references: [{ sourceId: "2004_Sabine", locator: "s. 367–368, popis měření a separační metody, obrázek 1" }]
      },
      {
        text: "Pro období od roku 1800 do roku 1994 odhadli nahromadění 118 ± 19 miliard tun uhlíku z lidských emisí v oceánu. Mapa ukázala také výrazně nerovnoměrné rozložení této zásoby. Práce tak doplnila atmosférická měření globální inventurou uvnitř oceánu a umožnila vyčíslit, kolik vypuštěného uhlíku se tam uložilo. Číslo je výsledkem zpracování měření a chemického rozlišení jednotlivých příspěvků.",
        references: [{ sourceId: "2004_Sabine", locator: "s. 368–370, obrázky 2 a 3 a tabulka 1" }]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/pohlcovani-co2-oceanem-a-uhlicitanova-chemie/", label: "Jak oceán pohlcuje CO₂" },
      { href: "/metody/coulometrie/", label: "Jak měříme rozpuštěný anorganický uhlík" }
    ]
  },
  {
    id: "2004_Stott",
    year: 2004,
    dateMeaning: "Zveřejnění rozboru evropského léta 2003",
    title: "Metoda vyčísluje lidský vliv na pravděpodobnost extrémního léta",
    category: "methods",
    importance: 1,
    paragraphs: [
      {
        text: "Peter Stott, Dáithí Stone a Myles Allen zkoumali, jak lidské působení změnilo pravděpodobnost mimořádně horkého evropského léta. Porovnali pozorování s klimatickými výpočty zahrnujícími lidské i přírodní vlivy a s odhadem světa ovlivňovaného pouze přírodními příčinami. Předmětem byla průměrná teplota celého léta nad velkou částí kontinentální Evropy.",
        references: [{ sourceId: "2004_Stott", locator: "s. 610–612, obrázky 1–3" }]
      },
      {
        text: "Pro vysokou teplotní hranici překročenou v roce 2003 odhadli, že lidský vliv velmi pravděpodobně alespoň zdvojnásobil pravděpodobnost jejího překročení. Postup umožnil vyjádřit podíl klimatické změny na riziku extrémní události, i když se počasí přirozeně mění rok od roku. Pozdější oprava upřesnila popis použitého statistického výpočtu.",
        references: [
          { sourceId: "2004_Stott", locator: "s. 612–614, obrázek 4 a Methods" },
          { sourceId: "2005_Stott_Corrigendum", locator: "s. 1200, prostřední oznámení" }
        ]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/mechanismy-vln-veder/", label: "Jak se oteplování promítá do vln veder" },
      { href: "/metody/analyza-casovych-zmen-a-extremu/", label: "Jak vyhodnocujeme četnost extrémních hodnot" }
    ]
  },
  {
    id: "2005_EU_ETS",
    year: 2005,
    dateMeaning: "Zahájení systému emisního obchodování",
    title: "Evropská unie spouští systém emisních povolenek",
    category: "politics",
    importance: 2,
    paragraphs: [
      {
        text: "Evropská unie spustila systém obchodování s emisními povolenkami, označovaný EU ETS. První období 2005–2007 zahrnovalo emise CO₂ z elektráren a energeticky náročných průmyslových provozů. Právní základ vytvořila směrnice přijatá v roce 2003. Celkové množství přidělovaných povolenek tehdy stanovovaly národní plány posuzované Evropskou komisí.",
        references: [
          { sourceId: "2003_EU_ETS_Directive", locator: "články 4 a 9–11, příloha I" },
          { sourceId: "WEB_EC_EU_ETS_History", locator: "Phase 1 (2005–2007)" }
        ]
      },
      {
        text: "Provozovatelé museli sledovat a vykazovat emise a za každý rok odevzdat odpovídající počet povolenek podle ověřeného množství vypuštěných plynů. Povolenky mohli mezi sebou převádět. Klimatická politika tak získala společný přeshraniční nástroj, který spojil omezený počet povolenek s povinnou evidencí, ověřováním emisí a sankcemi za nesplnění povinností.",
        references: [{ sourceId: "2003_EU_ETS_Directive", locator: "články 12 a 14–16" }]
      }
    ],
    relatedLinks: []
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
        label: "Proč se teplo v Jižním oceánu ukládá jinde, než přichází"
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
    id: "2006_Inconvenient_Truth",
    year: 2006,
    dateMeaning: "Uvedení dokumentu do kin",
    title: "Klimatická přednáška se mění ve výrazný filmový dokument",
    category: "culture",
    importance: 1,
    paragraphs: [
      {
        text: "Davis Guggenheim natočil dokument Nepříjemná pravda, který propojil klimatickou přednášku Ala Gorea s jeho osobním příběhem. Vysvětlování oteplování tak získalo podobu celovečerního filmu určeného publiku kin. Vyprávění spojovalo vědecké informace s obrazy možných následků a výzvou k jednání.",
        references: [{ sourceId: "WEB_Paramount_Inconvenient_Truth", locator: "About the Film, synopse a údaje o tvůrcích" }]
      },
      {
        text: "V únoru 2007 získal film Oscara za celovečerní dokument. Jeho kulturní význam spočívá v propojení popularizace klimatického poznání s osobním vyprávěním a výrazným uznáním ve filmovém prostředí.",
        references: [
          { sourceId: "WEB_Paramount_Inconvenient_Truth", locator: "rok vydání a synopse" },
          { sourceId: "2007_Academy_Awards", locator: "Documentary (Feature), vítězný film" }
        ]
      }
    ],
    relatedLinks: [
      { href: "/pozorovani/gmst/", label: "Jak sestavujeme záznam globální teploty" }
    ]
  },
  {
    id: "2008_UK_Climate_Change_Act",
    year: 2008,
    dateMeaning: "Přijetí klimatického zákona",
    title: "Britský klimatický zákon zavádí pětileté emisní rozpočty",
    category: "politics",
    importance: 2,
    paragraphs: [
      {
        text: "Britský parlament přijal Climate Change Act, který uložil vládě stanovovat závazné emisní rozpočty pro navazující pětiletá období. Rozpočet omezuje celkové emise země za dané období po odečtení odstraňovaných skleníkových plynů. Zákon upravuje také započítávání emisních kreditů, tedy jednotek představujících snížení emisí nebo odstranění plynů. První období zahrnovalo roky 2008–2012. Původním dlouhodobým cílem bylo do roku 2050 snížit takto počítané emise nejméně o 80 % vůči referenci roku 1990.",
        references: [{ sourceId: "2008_UK_Climate_Change_Act", locator: "oddíly 1, 4 a 26–27, původní znění" }]
      },
      {
        text: "Zákon ustavil odborný Výbor pro změnu klimatu, který radí s nastavením rozpočtů a předkládá parlamentu pravidelné zprávy o dosaženém pokroku. Dlouhodobý klimatický cíl tak doplnila kratší závazná období, průběžné odborné hodnocení a povinnost vlády reagovat. Jde o změnu způsobu rozhodování a kontroly klimatické politiky, jejíž plnění lze posuzovat po jednotlivých obdobích.",
        references: [{ sourceId: "2008_UK_Climate_Change_Act", locator: "oddíly 32, 34 a 36–37" }]
      }
    ],
    relatedLinks: []
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
      { href: "/mechanismy/pohlcovani-a-presun-tepla-oceanem/", label: "Proč se teplo v Jižním oceánu ukládá jinde, než přichází" }
    ]
  },
  {
    id: "2010_Cancun_Green_Climate_Fund",
    year: 2010,
    dateMeaning: "Rozhodnutí o založení fondu",
    title: "Cancúnské dohody zakládají Zelený klimatický fond",
    category: "politics",
    importance: 2,
    paragraphs: [
      {
        text: "Na klimatické konferenci v Cancúnu státy rozhodly založit Zelený klimatický fond. Jeho úkolem se stala podpora projektů a opatření v rozvojových zemích, včetně snižování emisí a přizpůsobování se změně klimatu. Dohoda tím vytvořila institucionální základ pro dlouhodobé financování klimatických opatření.",
        references: [{ sourceId: "2011_UNFCCC_Cancun_Agreements", locator: "rozhodnutí 1/CP.16, odstavce 97–102" }]
      },
      {
        text: "Pravidla určovala rovné zastoupení rozvinutých a rozvojových zemí ve správní radě fondu a jeho odpovědnost vůči konferenci smluvních stran. Země přijímající podporu tak měly mít podíl na rozhodování o jejím využití. Podrobný návrh fungování fondu měl připravit přechodný výbor pro další jednání.",
        references: [{ sourceId: "2011_UNFCCC_Cancun_Agreements", locator: "rozhodnutí 1/CP.16, odstavce 102–111 a příloha III" }]
      }
    ],
    relatedLinks: []
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
    id: "2014_Ice_Watch",
    year: 2014,
    dateMeaning: "První instalace v Kodani",
    title: "Grónský led přibližuje klimatickou změnu lidem v ulicích",
    category: "culture",
    importance: 2,
    paragraphs: [
      {
        text: "Olafur Eliasson a geolog Minik Rosing umístili na kodaňské náměstí dvanáct bloků ledu do tvaru hodin. Led pocházel z grónského ledového příkrovu, rozsáhlé vrstvy ledu pokrývající pevninu. Autoři odebrali jeho odlomené části z fjordu u Nuuku. Instalace Ice Watch umožnila lidem přiblížit se k ledu a sledovat jeho postupné tání.",
        references: [{ sourceId: "WEB_Eliasson_Rosing_Ice_Watch", locator: "popis díla a kodaňské instalace 26.–29. října 2014" }]
      },
      {
        text: "Dílo převádělo vzdálené klimatické téma do bezprostředního zážitku ve veřejném prostoru. Po Kodani následovala instalace při klimatické konferenci v Paříži roku 2015 a později v Londýně. Opakované uvedení spojilo umění s veřejnou debatou o úbytku ledu a klimatické odpovědnosti.",
        references: [{ sourceId: "WEB_Eliasson_Rosing_Ice_Watch", locator: "autorský popis záměru a přehled tří instalací" }]
      }
    ],
    relatedLinks: [
      { href: "/pozorovani/nestabilita-prikrovu/", label: "Jak měříme úbytek ledu v Grónsku a Antarktidě" }
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
    id: "2015_Laudato_Si",
    year: 2015,
    dateMeaning: "Zveřejnění encykliky",
    title: "Papežský list propojuje ochranu klimatu s morální odpovědností",
    category: "culture",
    importance: 2,
    paragraphs: [
      {
        text: "Papež František zveřejnil encykliku Laudato si’, tedy veřejný papežský list o péči o společný domov. Klimatickou změnu popsal jako celosvětový problém, jehož důsledky zvlášť těžce dopadají na chudé. Klima představil jako společné dobro, na němž závisí život všech lidí.",
        references: [{ sourceId: "2015_Francis_Laudato_Si", locator: "odstavce 23–26" }]
      },
      {
        text: "Text se obrací ke všem lidem a propojuje ochranu životního prostředí s odpovědností vůči budoucím generacím. František vyzývá k promýšlení způsobu života, výroby a spotřeby také z hlediska spravedlnosti. Klimatické téma tím zasazuje do náboženské a etické debaty o tom, jaký svět lidé předávají svým dětem.",
        references: [{ sourceId: "2015_Francis_Laudato_Si", locator: "odstavce 3, 23 a 159–162" }]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/puvod-rustu-atmosferickeho-co2/", label: "Jak určujeme lidský původ přibývajícího CO₂" }
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
  },
  {
    id: "2018_Warming_Stripes",
    year: 2018,
    dateMeaning: "Zveřejnění klimatických pruhů",
    title: "Barevné pruhy přenášejí záznam oteplování do vizuální kultury",
    category: "culture",
    importance: 2,
    paragraphs: [
      {
        text: "Ed Hawkins zveřejnil klimatické pruhy, jednoduché zobrazení teplotního záznamu, v němž jeden svislý pruh představuje jeden rok. Modré odstíny označují chladnější roky a červené teplejší. Ranou podobu připravil pro literární festival v Hay-on-Wye v roce 2018 z místních dat sahajících do roku 2017. Grafika umožnila sledovat průběh oteplování bez os a číselných popisků.",
        references: [
          { sourceId: "2018_Hawkins_Warming_Stripes", locator: "úvodní vysvětlení grafiky" },
          { sourceId: "WEB_Reading_Climate_Stripes", locator: "Climate Stripes: Warming Stripes, Hay-on-Wye 2017" }
        ]
      },
      {
        text: "Motiv se rozšířil do televizního počasí, oblečení, uměleckých instalací a koncertních scén. University of Reading zařadila jeho dvě verze do své umělecké sbírky. Milník ukazuje, jak se zobrazení naměřených dat může stát sdíleným kulturním symbolem. Jednotlivé verze používají data pro konkrétní místo či celou planetu a odlišná období.",
        references: [{ sourceId: "WEB_Reading_Climate_Stripes", locator: "úvod a popisy místní a globální verze" }]
      }
    ],
    relatedLinks: [
      { href: "/pozorovani/gmst/", label: "Z jakých měření vzniká záznam globální teploty" }
    ]
  },
  {
    id: "2018_Fridays_For_Future",
    year: 2018,
    dateMeaning: "Vznik hnutí, globální stávky v roce 2019",
    title: "Školní stávky přerůstají v celosvětové klimatické hnutí",
    category: "culture",
    importance: 1,
    paragraphs: [
      {
        text: "Greta Thunbergová zahájila v srpnu 2018 školní stávku před švédským parlamentem. V září se spolu s dalšími studenty rozhodla pokračovat v pravidelných pátečních protestech a vyzvala mladé lidi v dalších zemích, aby se připojili. Pod označením Fridays for Future vzniklo hnutí požadující rychlejší reakci na klimatickou změnu.",
        references: [{ sourceId: "WEB_Fridays_For_Future_History", locator: "Who We Are, počátky hnutí v srpnu a září 2018" }]
      },
      {
        text: "V roce 2019 se školní protest rozšířil do celosvětových klimatických stávek. Program OSN pro životní prostředí v dobovém přehledu popsal pravidelné pochody ve více než stovce zemí. Mladí lidé prostřednictvím společných protestů požadovali, aby politici naslouchali vědeckým poznatkům a omezovali oteplování. Školní stávka se tak stala výraznou formou občanské účasti na klimatické debatě.",
        references: [
          { sourceId: "2019_UNEP_Fridays_For_Future", locator: "popis mezinárodního rozšíření a pravidelných pochodů" },
          { sourceId: "WEB_Fridays_For_Future_History", locator: "Our Goals" }
        ]
      }
    ],
    relatedLinks: [
      { href: "/pozorovani/gmst/", label: "Jaká měření ukazují průběh globálního oteplování" }
    ]
  },
  {
    id: "2021_EU_Climate_Law",
    year: 2021,
    dateMeaning: "Přijetí nařízení",
    title: "Evropská unie přijímá závazný cíl klimatické neutrality",
    category: "politics",
    importance: 2,
    paragraphs: [
      {
        text: "Evropský parlament a Rada Evropské unie přijaly nařízení, které stanovilo závazný cíl klimatické neutrality Evropské unie do roku 2050. Zbývající emise skleníkových plynů se mají vyrovnat jejich pohlcováním. Pro rok 2030 nařízení určilo snížení čistých emisí, tedy emisí po odečtení pohlcování, alespoň o 55 % oproti roku 1990.",
        references: [{ sourceId: "2021_EU_Climate_Law", locator: "články 2 a 4, původní znění" }]
      },
      {
        text: "Nařízení spojilo společné cíle s pravidelným hodnocením pokroku a opatření Evropskou komisí. Unie a členské státy mají přijímat kroky potřebné ke společnému dosažení klimatické neutrality. Dlouhodobý směr evropské klimatické politiky tak získal závazný právní rámec, podle něhož lze posuzovat navazující opatření.",
        references: [{ sourceId: "2021_EU_Climate_Law", locator: "článek 2 odstavec 2 a články 6–7" }]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/puvod-rustu-atmosferickeho-co2/", label: "Jak emise a pohlcování mění množství CO₂ v atmosféře" }
    ]
  },
  {
    id: "2021_Dont_Look_Up",
    year: 2021,
    dateMeaning: "Uvedení filmu",
    title: "Filmová satira ukazuje přehlížení vědeckých varování",
    category: "culture",
    importance: 2,
    paragraphs: [
      {
        text: "Adam McKay natočil satirický film K zemi hleď!, v originále Don’t Look Up. Dva astronomové v něm upozorňují na kometu mířící k Zemi, jejich varování však naráží na neochotu jednat a na způsob, jakým média zacházejí s vážnou vědeckou zprávou. Film využívá katastrofický příběh k zobrazení společenské reakce na hrozbu.",
        references: [
          { sourceId: "WEB_Netflix_Dont_Look_Up", locator: "rok vydání a synopse" },
          { sourceId: "2022_Netflix_Dont_Look_Up_Climate", locator: "úvodní popis filmu a jeho tvůrců" }
        ]
      },
      {
        text: "Hrozící kometa slouží jako alegorie, tedy obrazné vyprávění o klimatické nečinnosti. Netflix v lednu 2022 tuto souvislost výslovně rozvedl v textu s reakcemi klimatických vědců a odkazem na doprovodný klimatický projekt. Satira tak přenesla do filmového příběhu otázku, proč společnost odkládá reakci i na závažná a opakovaná varování.",
        references: [{ sourceId: "2022_Netflix_Dont_Look_Up_Climate", locator: "klimatická interpretace filmu, citované reakce a doprovodný projekt" }]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/radiacni-pusobeni-sklenikovych-plynu/", label: "O jaké důkazy se opírá vysvětlení skleníkového oteplování" }
    ]
  },
  {
    id: "2022_Loss_And_Damage_Fund",
    year: 2022,
    dateMeaning: "Rozhodnutí o založení fondu",
    title: "Státy zakládají fond pro klimatické ztráty a škody",
    category: "politics",
    importance: 2,
    paragraphs: [
      {
        text: "Státy na klimatické konferenci v Šarm aš-Šajchu rozhodly vytvořit fond pro řešení ztrát a škod spojených se změnou klimatu. Pomoc určená zvlášť zranitelným rozvojovým zemím má zahrnovat následky extrémního počasí i pomalu postupujících změn. Rozhodnutí počítalo také s obnovou a rekonstrukcí po vzniklých škodách.",
        references: [{ sourceId: "2023_UNFCCC_Loss_Damage_Fund", locator: "rozhodnutí 2/CP.27, odstavce 1–3" }]
      },
      {
        text: "Podpora řešení vzniklých škod tak získala vlastní fond v rámci mezinárodní klimatické spolupráce. Rozhodnutí z roku 2022 zároveň ustavilo výbor, který měl připravit jeho fungování. Základní pravidla správy fondu státy schválily v Dubaji v roce 2023.",
        references: [
          { sourceId: "2023_UNFCCC_Loss_Damage_Fund", locator: "odstavce 4–5" },
          { sourceId: "2024_UNFCCC_COP28_Decisions", locator: "rozhodnutí 5/CMA.5, odstavce 2–5 a příloha I" }
        ]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/mechanismy-vln-veder/", label: "Jak oteplování ovlivňuje riziko vln veder" }
    ]
  },
  {
    id: "2023_COP28_Fossil_Fuels",
    year: 2023,
    dateMeaning: "Přijetí výsledku globálního hodnocení",
    title: "Dubajské rozhodnutí vyzývá k odklonu od fosilních paliv",
    category: "politics",
    importance: 2,
    paragraphs: [
      {
        text: "V Dubaji státy dokončily první globální hodnocení plnění Pařížské dohody, tedy společné posouzení pokroku vůči jejím cílům. Přijaté rozhodnutí je vyzvalo, aby přispěly k odklonu od fosilních paliv v energetických systémech. Zdůraznilo přitom spravedlivý a řízený průběh změny a zrychlení opatření během 20. let 21. století.",
        references: [{ sourceId: "2024_UNFCCC_COP28_Decisions", locator: "rozhodnutí 1/CMA.5, úvodní odkaz na článek 14 Pařížské dohody a odstavec 28(d)" }]
      },
      {
        text: "Výsledek hodnocení měl sloužit státům při přípravě dalších národních klimatických plánů. Dubajská výzva určila společný směr pro energetiku, zatímco konkrétní způsob příspěvku jednotlivých států ponechala jejich národním rozhodnutím s ohledem na rozdílné podmínky. Odklon od fosilních paliv se tak stal výslovně pojmenovanou součástí společné klimatické reakce.",
        references: [{ sourceId: "2024_UNFCCC_COP28_Decisions", locator: "rozhodnutí 1/CMA.5, odstavce 28 a 39" }]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/puvod-rustu-atmosferickeho-co2/", label: "Jak určujeme původ rostoucího CO₂" }
    ]
  },
  {
    id: "2025_ICJ_Climate_Opinion",
    year: 2025,
    dateMeaning: "Vydání poradního stanoviska",
    title: "Mezinárodní soudní dvůr vyjasňuje klimatické povinnosti států",
    category: "politics",
    importance: 2,
    paragraphs: [
      {
        text: "Mezinárodní soudní dvůr vydal na žádost Valného shromáždění Organizace spojených národů nezávazné poradní stanovisko k existujícím klimatickým povinnostem států. Soud vyložil, že státy mají přijímat opatření k předcházení závažnému poškozování klimatického systému a spolupracovat na jeho ochraně. Tyto povinnosti vyvozoval z klimatických smluv i z obecných pravidel mezinárodního práva.",
        references: [{ sourceId: "2025_ICJ_Climate_Opinion", locator: "odstavce 1–3 a 271–315, závěrečný výrok v odstavci 457" }]
      },
      {
        text: "Stanovisko také vysvětlilo, že porušení klimatických povinností může založit mezinárodní odpovědnost státu. Při prokázané příčinné souvislosti mezi protiprávním jednáním a škodou může vzniknout povinnost náhrady. Odpovědnost i rozsah nápravy je podle soudu nutné posuzovat v konkrétním případě. Stanovisko tak poskytlo výklad práva pro hodnocení klimatické politiky a případných sporů.",
        references: [{ sourceId: "2025_ICJ_Climate_Opinion", locator: "odstavce 421–438 a 444–455" }]
      }
    ],
    relatedLinks: [
      { href: "/mechanismy/mechanismy-vln-veder/", label: "Jak zkoumáme lidský vliv na riziko vln veder" }
    ]
  }
];
