export type EvidenceTopic = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  status: "mapujeme zdroje" | "připravujeme data" | "hotovo";
};

export const evidenceTopics: EvidenceTopic[] = [
  { slug: "gmst", title: "Globální teplota u povrchu", category: "Atmosféra", summary: "Pozorování globální průměrné povrchové teploty, metody a datové řady.", status: "hotovo" },
  { slug: "stratosfericke-ochlazovani", title: "Teplota stratosféry", category: "Atmosféra", summary: "Měření teploty ve stratosféře, přístroje vytvářející datové řady a způsoby vyjádření nejistoty.", status: "hotovo" },
  { slug: "atmosfericka-koncentrace-co2", title: "Atmosférická koncentrace CO2", category: "Atmosféra", summary: "Připravovaný přehled přímých měření koncentrace oxidu uhličitého ve vzduchu, jejich historie a datových řad.", status: "mapujeme zdroje" },
  { slug: "narust-vlhkosti", title: "Vlhkost atmosféry", category: "Atmosféra", summary: "Připravovaný přehled pozorování vodní páry, měřicích metod a nejistot.", status: "mapujeme zdroje" },
  { slug: "srazky-a-privalove-srazky", title: "Srážky a přívalové srážky", category: "Atmosféra", summary: "Připravovaný přehled úhrnů srážek, intenzivních srážkových epizod, měřicích sítí a datových řad.", status: "mapujeme zdroje" },
  { slug: "ohc", title: "Teplo v oceánech", category: "Oceány", summary: "Připravovaný přehled měření teploty vody v různých hloubkách a zveřejněných dat.", status: "připravujeme data" },
  { slug: "gmsl", title: "Globální střední hladina moře", category: "Oceány", summary: "Připravovaný přehled měření globální střední hladiny moře a souvisejících zdrojů.", status: "připravujeme data" },
  { slug: "acidifikace-oceanu", title: "Acidifikace oceánu", category: "Oceány", summary: "Rozcestník pro chemická měření oceánu, jejich limity a primární data.", status: "mapujeme zdroje" },
  { slug: "ubytek-arktickeho-ledu", title: "Arktický mořský led", category: "Kryosféra", summary: "Připravovaná stránka o ploše, rozsahu a sezónním rytmu mořského ledu.", status: "připravujeme data" },
  { slug: "ustup-ledovcu", title: "Horské ledovce", category: "Kryosféra", summary: "Místo pro dlouhodobá pozorování ledovců a jejich dokumentované zdroje.", status: "mapujeme zdroje" },
  { slug: "nestabilita-prikrovu", title: "Hmotnost ledových příkrovů", category: "Kryosféra", summary: "Připravovaný přehled měření hmotnosti grónského a antarktického ledového příkrovu.", status: "mapujeme zdroje" },
  { slug: "snehova-pokryvka-a-permafrost", title: "Sněhová pokrývka a permafrost", category: "Kryosféra", summary: "Připravovaný přehled rozsahu sněhu, vlastností zmrzlé půdy, měřicích metod a datových řad.", status: "mapujeme zdroje" },
  { slug: "fenologicke-posuny", title: "Sezónní jevy v živé přírodě", category: "Živá příroda", summary: "Přehled pozorování sezónních změn v přírodě a metod jejich záznamu.", status: "mapujeme zdroje" },
  { slug: "vlny-veder", title: "Vlny veder", category: "Extrémy", summary: "Budoucí přehled definic, datových sad a dokumentovaných změn teplotních extrémů.", status: "připravujeme data" },
];

export const evidenceBySlug = (slug: string) =>
  evidenceTopics.find((topic) => topic.slug === slug);
