export type HistoryLane = "academic" | "institutional";

export type HistoryEvent = {
  sourceId: string;
  summary: string;
  lane?: HistoryLane;
};

export const historyEvents: HistoryEvent[] = [
  { sourceId: "1681_Mariotte", summary: "Všímal si rozdílu mezi průchodem slunečního světla sklem a chováním sálavého tepla z horkých povrchů. Jde o rané pozorování principů důležitých pro popis skleníkového efektu." },
  { sourceId: "1767_Saussure", summary: "Sestrojil izolovanou nádobu krytou vrstvami skla, která se na slunci silně zahřívala. Jeho heliotermometr se stal důležitým experimentálním předobrazem pro pozdější úvahy o teple a atmosféře." },
  { sourceId: "1801_Herschel", summary: "Při zkoumání slunečního spektra objevil infračervené záření a ukázal, že část tepla leží mimo viditelné světlo." },
  { sourceId: "1804_Leslie", summary: "Experimenty s Leslieho kostkou zkoumaly, jak různé povrchy vyzařují a pohlcují teplo. Tyto otázky jsou základní i pro fyziku atmosféry." },
  { sourceId: "1824_Fourier", summary: "Shrnul dobové poznatky o teplotě Země a popsal atmosféru jako vrstvu, která ovlivňuje, jak planeta přijímá a ztrácí teplo." },
  { sourceId: "1840_Agassiz", summary: "Ve studiích o ledovcích formuloval vědecký rámec pro doby ledové a ukázal, že klima Země se v minulosti výrazně měnilo." },
  { sourceId: "1856_Foote", summary: "Experimentovala se zahříváním různých plynů na slunci a spojila množství oxidu uhličitého v atmosféře s teplotou planety." },
  { sourceId: "1862_Tyndall", summary: "Laboratorně studoval pohlcování tepelného záření plyny a vodní párou. Jeho práce patří k základním zdrojům pro porozumění roli atmosféry v přenosu záření." },
  { sourceId: "1864_Croll", summary: "Propojil změny klimatu v geologických epochách s parametry zemské dráhy a otevřel cestu k pozdějším orbitálním teoriím." },
  { sourceId: "1884_Langley", summary: "Přesnými měřeními slunečního záření zkoumal, jak atmosféra pohlcuje různé vlnové délky a jak lze určit příchozí energii." },
  { sourceId: "1894_Hogbom", summary: "Zkoumal geochemický cyklus uhlíku a upozornil na množství oxidu uhličitého uvolňované spalováním uhlí ve srovnání s přírodními procesy." },
  { sourceId: "1896_Arrhenius", summary: "Vytvořil raný fyzikální výpočet vztahu mezi oxidem uhličitým a teplotou zemského povrchu." },
  { sourceId: "1938_Callendar", summary: "Analyzoval historické teplotní řady a spojoval pozorovaný trend s nárůstem oxidu uhličitého ze spalování fosilních paliv." },
  { sourceId: "1941_Milankovic", summary: "Matematicky popsal cykly změn zemské osy a dráhy, které pomáhají vysvětlovat dlouhodobé střídání dob ledových." },
  { sourceId: "1952_Libby", summary: "Radiouhlíkové datování výrazně rozšířilo možnosti datování organických materiálů a rekonstrukce minulého klimatu." },
  { sourceId: "1955_Emiliani", summary: "Analýzou izotopů kyslíku v hlubokomořských sedimentech přispěl k rekonstrukci historie teplot oceánů a dob ledových." },
  { sourceId: "1956_Plass", summary: "S využitím výpočetní techniky zpřesnil výpočty absorpce infračerveného záření oxidem uhličitým." },
  { sourceId: "1961_Sullivan", summary: "Shrnul výsledky Mezinárodního geofyzikálního roku, který pomohl položit základy modernímu systematickému monitorování Země." },
  { sourceId: "1972_Stockholm", lane: "institutional", summary: "Zástupci 113 států přijali Stockholmskou deklaraci a akční plán pro životní prostředí. Konference vedla také k vytvoření Programu OSN pro životní prostředí (UNEP) a položila institucionální základ pozdější mezinárodní klimatické politiky." },
  { sourceId: "1988_IPCC", lane: "institutional", summary: "Světová meteorologická organizace a UNEP založily Mezivládní panel pro změnu klimatu (IPCC). Jeho úkolem se stalo pravidelně hodnotit stav poznání o změně klimatu, jejích dopadech a možnostech reakce pro potřeby vlád." },
];
