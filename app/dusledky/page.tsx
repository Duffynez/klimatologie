import type { Metadata } from "next";
import Link from "next/link";
import { PageLead } from "../components/PageLead";
import { SourceLink } from "../components/SourceLink";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Důsledky změny klimatu",
  description: "Co znamená změna klimatu pro zdraví, vodu v české krajině, úrodu, pobřeží, živou přírodu a každodenní život. Náměty na články a příklady z výzkumu.",
};

type StudyLink = { href: string; label: string };
type Study = {
  id: string;
  title: string;
  summary: string;
  observation: StudyLink;
  mechanism: StudyLink;
  sources: { id: string; label: string }[];
};

type TopicGroup = {
  id: string;
  title: string;
  topics: { question: string; description: string; study?: Study }[];
};

const topicGroups: TopicGroup[] = [
  {
    id: "lidske-zdravi",
    title: "Lidské zdraví",
    topics: [
      {
        question: "Kolik lidí potřebuje během vlny veder akutní péči?",
        description: "Počty návštěv kvůli horku můžeme porovnat na stejných pohotovostech za veder a za obvyklého letního počasí. Každý další příchod téhož pacienta se počítá jako nová návštěva.",
        study: {
          id: "vedra-a-zdravi",
          title: "Návštěvy pohotovostí na severozápadě USA v červnu 2021",
          summary: "Ve sledované síti pohotovostí v Oregonu, Washingtonu, Idahu a na Aljašce připadlo na 25. až 30. června 2021 celkem 2 779 návštěv kvůli horku. To byly zhruba čtyři pětiny takových návštěv za květen a červen. Autoři případy vyhledali podle popisů potíží a kódů diagnóz.",
          observation: { href: "/pozorovani/vlny-veder/#severni-amerika-2021", label: "Vlna veder v červnu 2021" },
          mechanism: { href: "/mechanismy/mechanismy-vln-veder/#predpoved-2021", label: "Jak oteplení zesílilo tuto vlnu veder" },
          sources: [{ id: "DOI_10_15585_mmwr_mm7029e1", label: "Analýza a souhrny návštěv" }],
        },
      },
      {
        question: "Jak vědci odhadují, kolik úmrtí lze připsat horku?",
        description: "K odhadu potřebujeme porovnat skutečný počet zemřelých s tím, kolik lidí by ve stejných dnech a ve stejné populaci zemřelo za mírnějšího počasí.",
      },
    ],
  },
  {
    id: "voda-v-ceske-krajine",
    title: "Voda v české krajině",
    topics: [
      {
        question: "Kolik vody teče v létě českými řekami po zimě chudé na sníh?",
        description: "Dvěma podobně suchým létům mohou předcházet zimy s různým množstvím sněhu. Takové srovnání pomáhá rozlišit vliv zimních zásob vody a letního deště.",
        study: {
          id: "snih-a-letni-prutoky",
          title: "Zimní sníh a letní průtoky v 59 českých horských povodích",
          summary: "Vědci pomocí modelu porovnali zásobu sněhu a průtoky v 59 horských povodích v Česku v letech 1980 až 2014. Ve většině povodí vycházel letní průtok napájený podzemní vodou nejnižší v letech s malou zásobou sněhu a zároveň s nedostatkem letního deště.",
          observation: { href: "/pozorovani/snehova-pokryvka-a-permafrost/#zasoba-v-povodich", label: "Zásoba vody ve sněhu" },
          mechanism: { href: "/mechanismy/vznik-a-zanik-snehove-pokryvky-na-sousi/#mechanismus", label: "Jak se mění zásoba sněhu a doba tání" },
          sources: [
            { id: "DOI_10_5194_hess_24_3475_2020", label: "Studie českých povodí" },
            { id: "DOI_10_5281_zenodo_3894699", label: "Výstupy modelu" },
          ],
        },
      },
      {
        question: "Kdy se sucho projeví ve studních a jakou roli hrají odběry vody?",
        description: "Hladina v mělké a hlubší studni může na nedostatek deště reagovat s různým zpožděním. K vysvětlení poklesu pomohou také údaje o čerpání v okolí.",
      },
    ],
  },
  {
    id: "uroda-a-potraviny",
    title: "Úroda a potraviny",
    topics: [
      {
        question: "Zvyšuje časnější kvetení riziko, že jarní mráz poškodí úrodu v sadech?",
        description: "U jednoho sadu můžeme porovnat, kdy stromy kvetly, ve kterých nocích mrzlo a kolik květů se poškodilo. Výsledek lze vztáhnout ke skutečné sklizni.",
      },
      {
        question: "Jak závisí výnos pšenice na tom, kdy přijde horko a sucho?",
        description: "Horký týden může zastihnout jedno pole v květu a jiné při růstu zrna. K porovnání sklizně potřebujeme znát také odrůdu a množství vody v půdě.",
      },
    ],
  },
  {
    id: "povodne-a-zivot-na-pobrezi",
    title: "Povodně a život na pobřeží",
    topics: [
      {
        question: "Co rozhoduje o tom, kolik domů při povodni voda poškodí?",
        description: "Mapu rozlivu lze porovnat s prohlídkami zaplavených budov. Rozsah škod i dobu, po kterou lidé nemohli bydlet doma, je potřeba doložit zvlášť.",
        study: {
          id: "povoden-v-krnove",
          title: "Povodeň v Krnově v září 2024",
          summary: "Při povodni v září 2024 vystoupila hladina Opavy na vodočtu v Krnově na 595 cm nad nulou stupnice. Mapu rozlivu, tedy území zaplaveného vodou z řek, sestavili odborníci z terénních údajů a snímků z letadel a družic. Samostatná modelová studie odhadla vliv oteplení na srážky v zasažené části střední Evropy.",
          observation: { href: "/pozorovani/srazky-a-privalove-srazky/#pozorovani", label: "Měření vydatných srážek" },
          mechanism: { href: "/mechanismy/termodynamika-a-dynamika-srazek/", label: "Přehled mechanismů srážek" },
          sources: [
            { id: "WEB_CHMU_Krnov_Opava_271", label: "Vodočet v Krnově" },
            { id: "DATA_VUV_Rozliv_Povodne_2024", label: "Mapa rozlivu" },
            { id: "DOI_10_1038_s43247_024_01847_0", label: "Studie srážek při níži Boris" },
          ],
        },
      },
      {
        question: "Jak často zaplaví příliv pobřežní ulice, když stoupá místní hladina moře?",
        description: "U konkrétní ulice nás zajímá počet dnů, kdy na ni voda dosáhla i bez bouře. Záznamy o zaplavení můžeme srovnat s výškou přílivu u místního vodočtu.",
      },
    ],
  },
  {
    id: "lesy-a-volne-zijici-zivocichove",
    title: "Lesy a volně žijící živočichové",
    topics: [
      {
        question: "Proč po stejném období sucha některé smrkové porosty odumřou a jiné přežijí?",
        description: "U sousedních porostů se dá porovnat podíl odumřelých stromů, vlhkost půdy, druhové složení lesa i míra napadení kůrovcem.",
      },
      {
        question: "Jak se daří mláďatům sýkor, když je housenek nejvíc ještě před hlavním obdobím krmení?",
        description: "Dlouhodobé sledování hnízd ukazuje i to, kolik potomků z časných a pozdních snůšek později v téže oblasti samo zahnízdí.",
        study: {
          id: "hnizdeni-a-potrava",
          title: "Sýkory a housenky v nizozemském parku Hoge Veluwe",
          summary: "V nizozemském parku Hoge Veluwe vědci sledovali hnízdění sýkor koňader a množství housenek. Časné hnízdění přinášelo větší výhodu, když housenek bylo nejvíc už před obdobím největší potřeby potravy mláďat. Výhodu vědci posoudili podle počtu potomků, kteří později sami hnízdili ve sledované populaci.",
          observation: { href: "/pozorovani/fenologicke-posuny/#pozorovani", label: "Posuny sezónních jevů u rostlin a ptáků" },
          mechanism: { href: "/mechanismy/biologicke-mechanismy-fenologickych-zmen/#jak-mechanismus-funguje", label: "Jak prostředí mění načasování" },
          sources: [
            { id: "DOI_10_1098_rspb_2021_1337", label: "Studie hnízdění a potravy" },
            { id: "DOI_10_5061_dryad_f1vhhmgx6", label: "Data z Hoge Veluwe" },
          ],
        },
      },
    ],
  },
  {
    id: "morsky-zivot",
    title: "Mořský život",
    topics: [
      {
        question: "Kdy se korálový útes po mořské vlně veder zotaví?",
        description: "Na snímcích stejných míst pořízených s odstupem měsíců a let můžeme sledovat, které kolonie po vybělení přežily a kde znovu přibývá živých korálů.",
      },
      {
        question: "Jak okyselování mořské vody ovlivňuje tvorbu schránek mladých ústřic?",
        description: "V pokusu s larvami ústřic lze při stejné teplotě sledovat růst první schránky ve vodě s různou koncentrací rozpuštěného oxidu uhličitého.",
      },
      {
        question: "Jak se daří ledním medvědům v týdnech, kdy nemohou lovit z mořského ledu?",
        description: "Při sledování jednotlivých medvědů na souši můžeme zjistit, čím se živí a jestli během těchto týdnů přibrali, nebo zhubli.",
        study: {
          id: "ledni-medvedi-na-sousi",
          title: "Vážení ledních medvědů u Hudsonova zálivu",
          summary: "V západní části Hudsonova zálivu tráví lední medvědi období bez mořského ledu převážně na souši, kde mají omezený přístup k tuleňům. Vědci je vážili na začátku a na konci zhruba třítýdenního sledování v letech 2019 až 2022. Hmotnost klesla u 19 z 20 sledovaných medvědů.",
          observation: { href: "/pozorovani/ubytek-arktickeho-ledu/#pozorovani", label: "Úbytek arktického mořského ledu" },
          mechanism: { href: "/mechanismy/vznik-tani-a-pohyb-morskeho-ledu/#jak-mechanismus-funguje", label: "Jak se mění zásoba mořského ledu" },
          sources: [
            { id: "DOI_10_1038_s41467_023_44682_1", label: "Studie medvědů na souši" },
            { id: "DATA_Pagano_2024_Polar_Bears", label: "Data ke grafům studie" },
          ],
        },
      },
    ],
  },
  {
    id: "budovy-energie-a-doprava",
    title: "Budovy, energie a doprava",
    topics: [
      {
        question: "Jak se v téže budově mění spotřeba energie na zimní vytápění a letní chlazení?",
        description: "Odečty spotřeby z různých let lze porovnat s venkovní teplotou. Záleží také na tom, jestli se mezitím dům zateplil nebo se změnil počet jeho obyvatel.",
      },
      {
        question: "Při jak nízkém stavu vody na Labi musí lodě vézt méně nákladu?",
        description: "Omezení závisí na hloubce plavební dráhy i na ponoru naložené lodi. Přepravní záznamy ukážou, kolik tun nákladu lodě při různých stavech vody skutečně vezly.",
      },
      {
        question: "Co se děje s domy a potrubím, když pod nimi rozmrzá půda?",
        description: "Letecké snímky zachytí místa, kde terén poklesl. Záznamy o poruchách a zkušenosti obyvatel pomohou určit, které stavby a sítě byly zasaženy.",
        study: {
          id: "permafrost-a-stavby",
          title: "Domy a vodovod v aljašské obci Point Lay",
          summary: "Z leteckých snímků z let 1949, 1974 a 2019 vědci zmapovali, jak v zastavěné části aljašského Point Lay přibývaly propadliny po tání půdního ledu. Obsah ledu v půdě zjišťovali z vrtů. Obyvatelé při rozhovorech popsali poškození domů a poruchy vodovodu a kanalizace.",
          observation: { href: "/pozorovani/snehova-pokryvka-a-permafrost/#snih-a-teplota-pudy", label: "Rozmrzání a sesedání půdy na Aljašce" },
          mechanism: { href: "/mechanismy/prenos-tepla-do-pudy-a-tani-permafrostu/#jak-mechanismus-funguje", label: "Jak teplo proniká do zmrzlé půdy" },
          sources: [
            { id: "DOI_10_1088_2752_664X_adf1ac", label: "Studie v Point Lay" },
            { id: "DOI_10_18739_A2Z892H2J", label: "Data o změnách terénu" },
          ],
        },
      },
    ],
  },
];

function ResearchExample({ study }: { study: Study }) {
  return (
    <details className={styles.study}>
      <summary>{study.title}</summary>
      <article className={styles.evidence} id={study.id} aria-label={study.title}>
        <p>{study.summary}</p>
        <ul className={styles.sources} aria-label="Prameny k příkladu" role="list">
          {study.sources.map((source) => (
            <li key={source.id}><SourceLink id={source.id}>{source.label}</SourceLink></li>
          ))}
        </ul>
        <dl className={styles.related}>
          <div>
            <dt>Pozorování</dt>
            <dd><Link className="text-link" href={study.observation.href}>{study.observation.label}</Link></dd>
          </div>
          <div>
            <dt>Mechanismus</dt>
            <dd><Link className="text-link" href={study.mechanism.href}>{study.mechanism.label}</Link></dd>
          </div>
        </dl>
      </article>
    </details>
  );
}

export default function ConsequencesPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Důsledky" title="Co znamená změna klimatu pro lidi a přírodu?">
        <p>
          Z mapy povodně poznáme, kam dosáhla voda. Kdy se lidé mohli vrátit domů, zjistíme z údajů o zasažených domácnostech.
          V sedmi okruzích najdete náměty na samostatné články. U vybraných otázek si můžete rozbalit příklad z výzkumu a jeho prameny.
        </p>
      </PageLead>

      <div className={styles.directory}>
        <nav className={styles.index} aria-labelledby="tematicke-okruhy">
          <h2 id="tematicke-okruhy">Tematické okruhy</h2>
          <ul role="list">
            {topicGroups.map((group) => (
              <li key={group.id}><a href={`#${group.id}`}>{group.title}</a></li>
            ))}
          </ul>
        </nav>
        <div className={styles.groups}>
          {topicGroups.map((group) => (
            <section className={styles.group} key={group.id} aria-labelledby={group.id}>
              <h2 id={group.id}>{group.title}</h2>
              <ul className={styles.topics} role="list">
                {group.topics.map((topic) => (
                  <li key={topic.question}>
                    <h3>{topic.question}</h3>
                    <p className={styles.focus}>{topic.description}</p>
                    {topic.study && <ResearchExample study={topic.study} />}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
