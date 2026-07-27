export type Source = {
  id: string;
  title: string;
  author: string;
  year: number;
  publication: string;
  type: "Kniha" | "Studie" | "Report";
  driveFileId: string;
  topics: string[];
};

export const sources: Source[] = [
  { id: "1681_Mariotte", title: "De la nature des couleurs (O povaze barev)", author: "Edme Mariotte", year: 1681, publication: "Paris", type: "Kniha", driveFileId: "1hFTtUv6uDwtnOAyuGCC2vQjN6OgjEx8S", topics: ["historie", "záření"] },
  { id: "1767_Saussure", title: "Voyages dans les Alpes (Cesty po Alpách)", author: "Horace-Bénédict de Saussure", year: 1767, publication: "Neuchâtel", type: "Kniha", driveFileId: "1WaJkNLg7jPsZ3it7opQ1LobD7AzOy8AV", topics: ["historie", "záření"] },
  { id: "1801_Herschel", title: "Experiments on the Refrangibility of the Invisible Rays of the Sun", author: "William Herschel", year: 1801, publication: "Philosophical Transactions of the Royal Society", type: "Studie", driveFileId: "17-KtOmjoq0FuBnixuXs4qhBsmTrJoSqw", topics: ["historie", "záření"] },
  { id: "1804_Leslie", title: "An Experimental Inquiry into the Nature and Propagation of Heat", author: "John Leslie", year: 1804, publication: "J. Mawman, London", type: "Kniha", driveFileId: "1fAT9WjbOuIVrIL1pLJIF8koWMfVxl-yv", topics: ["historie", "teplo"] },
  { id: "1824_Fourier", title: "Remarques générales sur les températures du globe terrestre et des espaces planétaires", author: "Joseph Fourier", year: 1824, publication: "Annales de Chimie et de Physique", type: "Studie", driveFileId: "1h9pv2MwWFjeZTcIcrFm7TM8EmkBM5TFl", topics: ["historie", "klima"] },
  { id: "1840_Agassiz", title: "Études sur les glaciers (Studie o ledovcích)", author: "Louis Agassiz", year: 1840, publication: "Neuchâtel", type: "Kniha", driveFileId: "1y8BZ81B-tPFX28s-4QwDCiYKjMLgh-KO", topics: ["historie", "ledovce"] },
  { id: "1856_Foote", title: "Circumstances Affecting the Heat of the Sun's Rays", author: "Eunice Newton Foote", year: 1856, publication: "The American Journal of Science and Arts", type: "Studie", driveFileId: "15oymxiaSMzXA98QHhlvsMRLOZGohHEFj", topics: ["historie", "atmosféra"] },
  { id: "1862_Tyndall", title: "On the Absorption and Radiation of Heat by Gases and Vapours", author: "John Tyndall", year: 1862, publication: "Philosophical Transactions of the Royal Society of London", type: "Studie", driveFileId: "16tQmPe8jO8sTpmKTBmUjCzqxz4i6W_hY", topics: ["historie", "atmosféra"] },
  { id: "1864_Croll", title: "On the Physical Cause of the Change of Climate during Geological Epochs", author: "James Croll", year: 1864, publication: "Philosophical Magazine", type: "Studie", driveFileId: "1vsCMQbkVqpuDHsCNj00ANCU6tdvADrF4", topics: ["historie", "klima"] },
  { id: "1884_Langley", title: "Researches on Solar Heat and its Absorption by the Earth's Atmosphere", author: "Samuel Pierpont Langley", year: 1884, publication: "Professional Papers of the Signal Service", type: "Report", driveFileId: "1RFtDRgwXmn8ETxmUdINDzs8IDMoFmJyY", topics: ["historie", "atmosféra"] },
  { id: "1894_Hogbom", title: "Om sannolikheten för sekulära förändringar i atmosfärens kolsyrehalt", author: "Arvid Högbom", year: 1894, publication: "Svensk Kemisk Tidskrift", type: "Studie", driveFileId: "1l_AeVv8G8S0BKzzUr4bTvQZN5-gN_VxH", topics: ["historie", "uhlík"] },
  { id: "1896_Arrhenius", title: "On the Influence of Carbonic Acid in the Air upon the Temperature of the Ground", author: "Svante Arrhenius", year: 1896, publication: "Philosophical Magazine and Journal of Science", type: "Studie", driveFileId: "1-gReg5x8Tsm43c7GCDEB6JV80VXDj0VU", topics: ["historie", "uhlík"] },
  { id: "1938_Callendar", title: "The Artificial Production of Carbon Dioxide and its Influence on Temperature", author: "Guy Stewart Callendar", year: 1938, publication: "Quarterly Journal of the Royal Meteorological Society", type: "Studie", driveFileId: "1hL9njRIBCqEfW3qz8cV2GidMB7QeKCZr", topics: ["historie", "teplota"] },
  { id: "1941_Milankovic", title: "Kanon der Erdbestrahlung und seine Anwendung auf das Eiszeitenproblem", author: "Milutin Milanković", year: 1941, publication: "Royal Serbian Academy", type: "Kniha", driveFileId: "19N2a7IvozAvjVkxuqw9XHJV2UlU9m2Jt", topics: ["historie", "klima"] },
  { id: "1952_Libby", title: "Radiocarbon Dating", author: "Willard Libby", year: 1952, publication: "University of Chicago Press", type: "Kniha", driveFileId: "1oQH4eoKfATFNVo0PQZDdZAhLhcOXBKqD", topics: ["historie", "metody"] },
  { id: "1955_Emiliani", title: "Pleistocene Temperatures", author: "Cesare Emiliani", year: 1955, publication: "The Journal of Geology", type: "Studie", driveFileId: "1BUN9N05ph73dKAEPpzYsXT7QpjaJ6X6A", topics: ["historie", "teplota"] },
  { id: "1956_Plass", title: "The Carbon Dioxide Theory of Climatic Change", author: "Gilbert N. Plass", year: 1956, publication: "Tellus", type: "Studie", driveFileId: "1OQv4tb6jf8V3dPy_01bCkfL2DIbKjQ0_", topics: ["historie", "uhlík"] },
  { id: "1961_Sullivan", title: "Assault on the Unknown: The International Geophysical Year", author: "Walter Sullivan", year: 1961, publication: "McGraw-Hill", type: "Kniha", driveFileId: "1Zs3SNWqGN4n54-1YM3YqQJK9bdK5lAhp", topics: ["historie", "metody"] },
];

export const sourceById = (id: string) => sources.find((source) => source.id === id);

export const sourceViewUrl = (source: Source) =>
  `https://drive.google.com/file/d/${source.driveFileId}/view`;

export const sourceDownloadUrl = (source: Source) =>
  `https://drive.google.com/uc?export=download&id=${source.driveFileId}`;
