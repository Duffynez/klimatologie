export type EvidenceTopic = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  status: "mapujeme zdroje" | "připravujeme data" | "hotovo";
};

export const evidenceTopics: EvidenceTopic[] = [
  { slug: "gmst", title: "Globální teplota", category: "Atmosféra", summary: "Rozcestník pro pozorování globální průměrné povrchové teploty, metody a datové řady.", status: "hotovo" },
  { slug: "stratosfericke-ochlazovani", title: "Stratosférické ochlazování", category: "Atmosféra", summary: "Místo pro popis měření ve vyšších vrstvách atmosféry a jejich interpretace.", status: "mapujeme zdroje" },
  { slug: "narust-vlhkosti", title: "Nárůst vlhkosti", category: "Atmosféra", summary: "Budoucí přehled pozorování vodní páry, měřicích metod a nejistot.", status: "mapujeme zdroje" },
  { slug: "ohc", title: "Tepelný obsah oceánů", category: "Oceány", summary: "Stránka pro data o energii uložené v oceánu, měření a zdrojové soubory.", status: "připravujeme data" },
  { slug: "gmsl", title: "Hladina oceánů", category: "Oceány", summary: "Budoucí přehled měření globální střední hladiny moře a souvisejících zdrojů.", status: "připravujeme data" },
  { slug: "acidifikace-oceanu", title: "Acidifikace oceánu", category: "Oceány", summary: "Rozcestník pro chemická měření oceánu, jejich limity a primární data.", status: "mapujeme zdroje" },
  { slug: "ubytek-arktickeho-ledu", title: "Arktický mořský led", category: "Kryosféra", summary: "Připravovaná stránka o ploše, rozsahu a sezónním rytmu mořského ledu.", status: "připravujeme data" },
  { slug: "ustup-ledovcu", title: "Horské ledovce", category: "Kryosféra", summary: "Místo pro dlouhodobá pozorování ledovců a jejich dokumentované zdroje.", status: "mapujeme zdroje" },
  { slug: "nestabilita-prikrovu", title: "Ledové příkrovy", category: "Kryosféra", summary: "Budoucí mapa zdrojů k měřením grónského a antarktického ledového příkrovu.", status: "mapujeme zdroje" },
  { slug: "fenologicke-posuny", title: "Fenologické posuny", category: "Živá příroda", summary: "Přehled pro pozorování sezónních změn v přírodě a metody jejich záznamu.", status: "mapujeme zdroje" },
  { slug: "vlny-veder", title: "Vlny veder", category: "Extrémy", summary: "Budoucí přehled definic, datových sad a dokumentovaných změn teplotních extrémů.", status: "připravujeme data" },
];

export const evidenceBySlug = (slug: string) =>
  evidenceTopics.find((topic) => topic.slug === slug);
