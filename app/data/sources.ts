export type SourceCategory = "science" | "book" | "politics" | "organization" | "media";

export const sourceCategoryMeta = {
  science: { label: "Věda a studie" },
  book: { label: "Knihy" },
  politics: { label: "Politika" },
  organization: { label: "Organizace" },
  media: { label: "Média a kultura" },
} satisfies Record<SourceCategory, { label: string }>;

export type Source = {
  id: string;
  title: string;
  author: string;
  year: number;
  publication: string;
  category: SourceCategory;
  type: string;
  driveFileId?: string;
  externalUrl?: string;
  citationLabel?: string;
  topics: string[];
};

export const sources: Source[] = [
  { id: "1681_Mariotte", title: "De la nature des couleurs (O povaze barev)", author: "Edme Mariotte", year: 1681, publication: "Paris", type: "Kniha", category: "book", driveFileId: "1hFTtUv6uDwtnOAyuGCC2vQjN6OgjEx8S", topics: ["historie", "záření"] },
  { id: "1767_Saussure", title: "Voyages dans les Alpes (Cesty po Alpách)", author: "Horace-Bénédict de Saussure", year: 1767, publication: "Neuchâtel", type: "Kniha", category: "book", driveFileId: "1WaJkNLg7jPsZ3it7opQ1LobD7AzOy8AV", topics: ["historie", "záření"] },
  { id: "1801_Herschel", title: "Experiments on the Refrangibility of the Invisible Rays of the Sun", author: "William Herschel", year: 1800, publication: "Philosophical Transactions of the Royal Society", type: "Studie", category: "science", driveFileId: "17-KtOmjoq0FuBnixuXs4qhBsmTrJoSqw", topics: ["historie", "záření"] },
  { id: "1804_Leslie", title: "An Experimental Inquiry into the Nature and Propagation of Heat", author: "John Leslie", year: 1804, publication: "J. Mawman, London", type: "Kniha", category: "book", driveFileId: "1fAT9WjbOuIVrIL1pLJIF8koWMfVxl-yv", topics: ["historie", "teplo"] },
  { id: "1824_Fourier", title: "Remarques générales sur les températures du globe terrestre et des espaces planétaires", author: "Joseph Fourier", year: 1824, publication: "Annales de Chimie et de Physique", type: "Studie", category: "science", driveFileId: "1h9pv2MwWFjeZTcIcrFm7TM8EmkBM5TFl", topics: ["historie", "klima"] },
  { id: "1840_Agassiz", title: "Études sur les glaciers (Studie o ledovcích)", author: "Louis Agassiz", year: 1840, publication: "Neuchâtel", type: "Kniha", category: "book", driveFileId: "1y8BZ81B-tPFX28s-4QwDCiYKjMLgh-KO", topics: ["historie", "ledovce"] },
  { id: "1856_Foote", title: "Circumstances Affecting the Heat of the Sun's Rays", author: "Eunice Newton Foote", year: 1856, publication: "The American Journal of Science and Arts", type: "Studie", category: "science", driveFileId: "15oymxiaSMzXA98QHhlvsMRLOZGohHEFj", topics: ["historie", "atmosféra"] },
  { id: "1862_Tyndall", title: "On the Absorption and Radiation of Heat by Gases and Vapours", author: "John Tyndall", year: 1861, publication: "Philosophical Transactions of the Royal Society of London", type: "Studie", category: "science", driveFileId: "16tQmPe8jO8sTpmKTBmUjCzqxz4i6W_hY", topics: ["historie", "atmosféra"] },
  { id: "1864_Croll", title: "On the Physical Cause of the Change of Climate during Geological Epochs", author: "James Croll", year: 1864, publication: "Philosophical Magazine", type: "Studie", category: "science", driveFileId: "1vsCMQbkVqpuDHsCNj00ANCU6tdvADrF4", topics: ["historie", "klima"] },
  { id: "1884_Langley", title: "Researches on Solar Heat and its Absorption by the Earth's Atmosphere", author: "Samuel Pierpont Langley", year: 1884, publication: "Professional Papers of the Signal Service", type: "Report", category: "science", driveFileId: "1RFtDRgwXmn8ETxmUdINDzs8IDMoFmJyY", topics: ["historie", "atmosféra"] },
  { id: "1894_Hogbom", title: "Om sannolikheten för sekulära förändringar i atmosfärens kolsyrehalt", author: "Arvid Högbom", year: 1894, publication: "Svensk Kemisk Tidskrift", type: "Studie", category: "science", driveFileId: "1l_AeVv8G8S0BKzzUr4bTvQZN5-gN_VxH", topics: ["historie", "uhlík"] },
  { id: "1896_Arrhenius", title: "On the Influence of Carbonic Acid in the Air upon the Temperature of the Ground", author: "Svante Arrhenius", year: 1896, publication: "Philosophical Magazine and Journal of Science", type: "Studie", category: "science", driveFileId: "1-gReg5x8Tsm43c7GCDEB6JV80VXDj0VU", topics: ["historie", "uhlík"] },
  { id: "1938_Callendar", title: "The Artificial Production of Carbon Dioxide and its Influence on Temperature", author: "Guy Stewart Callendar", year: 1938, publication: "Quarterly Journal of the Royal Meteorological Society", type: "Studie", category: "science", driveFileId: "1hL9njRIBCqEfW3qz8cV2GidMB7QeKCZr", topics: ["historie", "teplota"] },
  { id: "1941_Milankovic", title: "Kanon der Erdbestrahlung und seine Anwendung auf das Eiszeitenproblem", author: "Milutin Milanković", year: 1941, publication: "Royal Serbian Academy", type: "Kniha", category: "book", driveFileId: "19N2a7IvozAvjVkxuqw9XHJV2UlU9m2Jt", topics: ["historie", "klima"] },
  { id: "1952_Libby", title: "Radiocarbon Dating", author: "Willard Libby", year: 1952, publication: "University of Chicago Press", type: "Kniha", category: "book", driveFileId: "1oQH4eoKfATFNVo0PQZDdZAhLhcOXBKqD", topics: ["historie", "metody"] },
  { id: "1955_Emiliani", title: "Pleistocene Temperatures", author: "Cesare Emiliani", year: 1955, publication: "The Journal of Geology", type: "Studie", category: "science", driveFileId: "1BUN9N05ph73dKAEPpzYsXT7QpjaJ6X6A", topics: ["historie", "teplota"] },
  { id: "1956_Plass", title: "The Carbon Dioxide Theory of Climatic Change", author: "Gilbert N. Plass", year: 1956, publication: "Tellus", type: "Studie", category: "science", driveFileId: "1OQv4tb6jf8V3dPy_01bCkfL2DIbKjQ0_", topics: ["historie", "uhlík"] },
  { id: "1956_TIME_Greenhouse", title: "Science: One Big Greenhouse", author: "TIME", year: 1956, publication: "TIME Magazine", type: "Časopisecký článek", category: "media", externalUrl: "https://time.com/archive/6870496/science-one-big-greenhouse/", citationLabel: "TIME 1956", topics: ["historie", "média", "veřejnost"] },
  { id: "1958_Keeling", title: "Začátek souvislého měření CO₂ na Mauna Loa", author: "Charles David Keeling", year: 1958, publication: "Scripps Institution of Oceanography", type: "Měřicí program", category: "science", externalUrl: "https://scrippsco2.ucsd.edu/history_legacy/early_keeling_curve.html", citationLabel: "Scripps 1958", topics: ["historie", "měření", "uhlík"] },
  { id: "1961_Sullivan", title: "Assault on the Unknown: The International Geophysical Year", author: "Walter Sullivan", year: 1961, publication: "McGraw-Hill", type: "Kniha", category: "book", driveFileId: "1Zs3SNWqGN4n54-1YM3YqQJK9bdK5lAhp", topics: ["historie", "metody"] },
  { id: "1967_Manabe_Wetherald", title: "Thermal Equilibrium of the Atmosphere with a Given Distribution of Relative Humidity", author: "Syukuro Manabe a Richard T. Wetherald", year: 1967, publication: "Journal of the Atmospheric Sciences", type: "Studie", category: "science", externalUrl: "https://doi.org/10.1175/1520-0469(1967)024%3C0241:TEOTAW%3E2.0.CO;2", citationLabel: "Manabe & Wetherald 1967", topics: ["historie", "modely", "atmosféra"] },
  { id: "1972_Limits", title: "The Limits to Growth", author: "Donella H. Meadows a kol.", year: 1972, publication: "Club of Rome", type: "Kniha a modelová studie", category: "book", externalUrl: "https://www.clubofrome.org/publication/the-limits-to-growth/", citationLabel: "Meadows et al. 1972", topics: ["historie", "kultura", "společnost"] },
  { id: "1972_BlueMarble", title: "The Blue Marble", author: "Posádka Apollo 17", year: 1972, publication: "NASA", type: "Fotografie", category: "media", externalUrl: "https://science.nasa.gov/earth/earth-observatory/history-of-the-blue-marble/", citationLabel: "NASA 1972", topics: ["historie", "fotografie", "veřejnost"] },
  { id: "1972_Stockholm", title: "United Nations Conference on the Human Environment", author: "OSN", year: 1972, publication: "Stockholm 1972", type: "Mezinárodní konference", category: "politics", externalUrl: "https://www.un.org/en/conferences/environment/stockholm1972", citationLabel: "OSN 1972", topics: ["historie", "politika", "instituce"] },
  { id: "1976_Hays_Imbrie_Shackleton", title: "Variations in the Earth's Orbit: Pacemaker of the Ice Ages", author: "James D. Hays, John Imbrie a Nicholas J. Shackleton", year: 1976, publication: "Science", type: "Studie", category: "science", externalUrl: "https://doi.org/10.1126/science.194.4270.1121", citationLabel: "Hays et al. 1976", topics: ["historie", "paleoklima", "oběžná dráha"] },
  { id: "1977_Black_Exxon", title: "The Greenhouse Effect", author: "James F. Black", year: 1977, publication: "Exxon Corporation", type: "Interní odborná prezentace", category: "organization", externalUrl: "https://insideclimatenews.org/documents/james-black-1977-presentation/", citationLabel: "Black 1977", topics: ["historie", "průmysl", "komunikace"] },
  { id: "1979_Charney", title: "Carbon Dioxide and Climate: A Scientific Assessment", author: "Jule Charney a kol.", year: 1979, publication: "National Research Council", type: "Odborná hodnoticí zpráva", category: "science", externalUrl: "https://nap.nationalacademies.org/catalog/12181/carbon-dioxide-and-climate-a-scientific-assessment", citationLabel: "Charney et al. 1979", topics: ["historie", "syntéza", "citlivost klimatu"] },
  { id: "1979_WCC", title: "První světová klimatická konference", author: "Světová meteorologická organizace", year: 1979, publication: "WMO", type: "Mezinárodní konference", category: "organization", externalUrl: "https://wmo.int/media/magazine-article/history-of-climate-activities", citationLabel: "WMO 1979", topics: ["historie", "instituce", "výzkum"] },
  { id: "1987_Vostok", title: "Vostok ice core provides 160,000-year record of atmospheric CO₂", author: "Jean-Marc Barnola a kol.", year: 1987, publication: "Nature", type: "Studie", category: "science", externalUrl: "https://doi.org/10.1038/329408a0", citationLabel: "Barnola et al. 1987", topics: ["historie", "paleoklima", "ledovcová jádra"] },
  { id: "1988_Hansen_Senate", title: "Svědectví o změně klimatu před Senátem USA", author: "James E. Hansen", year: 1988, publication: "Senát Spojených států", type: "Veřejné slyšení", category: "politics", externalUrl: "https://www.congress.gov/100/crecb/1988/08/04/GPO-CRECB-1988-pt14-6-2.pdf", citationLabel: "Hansen 1988", topics: ["historie", "politika", "veřejnost"] },
  { id: "1988_IPCC", title: "Vznik Mezivládního panelu pro změnu klimatu (IPCC)", author: "WMO a UNEP", year: 1988, publication: "IPCC", type: "Založení instituce", category: "organization", externalUrl: "https://www.ipcc.ch/about/history/", citationLabel: "IPCC 1988", topics: ["historie", "politika", "instituce"] },
  { id: "1990_IPCC_FAR", title: "First Assessment Report", author: "IPCC", year: 1990, publication: "Intergovernmental Panel on Climate Change", type: "Odborná syntéza", category: "organization", externalUrl: "https://archive.ipcc.ch/publications_and_data/publications_ipcc_first_assessment_1990_wg1.shtml", citationLabel: "IPCC 1990", topics: ["historie", "syntéza", "instituce"] },
  { id: "1992_UNFCCC", title: "Rámcová úmluva OSN o změně klimatu", author: "OSN", year: 1992, publication: "United Nations Framework Convention on Climate Change", type: "Mezinárodní úmluva", category: "politics", externalUrl: "https://unfccc.int/process-and-meetings/the-convention/history-of-the-convention/convention-documents", citationLabel: "UNFCCC 1992", topics: ["historie", "politika", "právo"] },
  { id: "1997_Kyoto", title: "Kjótský protokol", author: "Smluvní strany UNFCCC", year: 1997, publication: "United Nations Framework Convention on Climate Change", type: "Mezinárodní protokol", category: "politics", externalUrl: "https://unfccc.int/process-and-meetings/the-kyoto-protocol/what-is-the-kyoto-protocol", citationLabel: "UNFCCC 1997", topics: ["historie", "politika", "právo"] },
  { id: "1998_API_ActionPlan", title: "Global Climate Science Communications Action Plan", author: "Global Climate Science Communications Team", year: 1998, publication: "American Petroleum Institute", type: "Komunikační plán", category: "organization", externalUrl: "https://www.climatefiles.com/trade-group/american-petroleum-institute/1998-global-climate-science-communications-team-action-plan/", citationLabel: "GCSCT 1998", topics: ["historie", "průmysl", "komunikace"] },
  { id: "2000_Argo", title: "Zahájení programu Argo", author: "Mezinárodní program Argo", year: 2000, publication: "Global Ocean Observing System", type: "Pozorovací program", category: "organization", externalUrl: "https://www.aoml.noaa.gov/argo/", citationLabel: "Argo 2000", topics: ["historie", "měření", "oceán"] },
  { id: "2004_DayAfterTomorrow", title: "The Day After Tomorrow a jeho vliv na vnímání klimatického rizika", author: "Roland Emmerich a Anthony Leiserowitz", year: 2004, publication: "20th Century Fox / Environment", type: "Film a studie dopadu", category: "media", externalUrl: "https://climatecommunication.yale.edu/publications/before-and-after-the-day-after-tomorrow/toc/2/", citationLabel: "Leiserowitz 2004", topics: ["historie", "film", "veřejnost"] },
  { id: "2006_InconvenientTruth", title: "An Inconvenient Truth", author: "Davis Guggenheim a Al Gore", year: 2006, publication: "Paramount Classics / Participant", type: "Dokumentární film", category: "media", externalUrl: "https://www.paramountpictures.com/movies/an-inconvenient-truth", citationLabel: "Guggenheim 2006", topics: ["historie", "film", "veřejnost"] },
  { id: "2015_Paris", title: "Pařížská dohoda", author: "Smluvní strany UNFCCC", year: 2015, publication: "United Nations Framework Convention on Climate Change", type: "Mezinárodní dohoda", category: "politics", externalUrl: "https://unfccc.int/process-and-meetings/the-paris-agreement", citationLabel: "UNFCCC 2015", topics: ["historie", "politika", "právo"] },
  { id: "2018_Stripes", title: "Climate Stripes", author: "Ed Hawkins", year: 2018, publication: "University of Reading", type: "Datová vizualizace", category: "media", externalUrl: "https://www.reading.ac.uk/planet/climate-resources/climate-stripes", citationLabel: "Hawkins 2018", topics: ["historie", "vizualizace", "veřejnost"] },
  { id: "2018_FFF", title: "Vznik hnutí Fridays for Future", author: "Fridays for Future", year: 2018, publication: "Fridays for Future", type: "Občanské hnutí", category: "organization", externalUrl: "https://fridaysforfuture.org/what-we-do/who-we-are/", citationLabel: "FFF 2018", topics: ["historie", "aktivismus", "veřejnost"] },
];

export const sourceById = (id: string) => sources.find((source) => source.id === id);

export const sourceViewUrl = (source: Source) => {
  if (source.externalUrl) return source.externalUrl;
  if (source.driveFileId) return `https://drive.google.com/file/d/${source.driveFileId}/view`;
  return "#";
};

export const sourceDownloadUrl = (source: Source) =>
  source.driveFileId ? `https://drive.google.com/uc?export=download&id=${source.driveFileId}` : null;
