import type { Metadata } from "next";
import Link from "next/link";
import { PageLead } from "../components/PageLead";
import { SourceLink } from "../components/SourceLink";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Důsledky změny klimatu",
  description: "Jak se vedra, povodně, úbytek sněhu a ledu a další změny projevují v životě lidí a v přírodě.",
};

const consequenceTopics = [
  {
    id: "vedra-a-zdravi",
    title: "Vedra a návštěvy pohotovostí",
    summary: "Ve sledované síti pohotovostí v Oregonu, Washingtonu, Idahu a na Aljašce připadlo na 25. až 30. června 2021 celkem 2 779 návštěv kvůli horku. To byly zhruba čtyři pětiny takových návštěv za květen a červen. Autoři případy vyhledali podle popisů potíží a kódů diagnóz.",
    observation: { href: "/pozorovani/vlny-veder/#severni-amerika-2021", label: "Vlna veder v červnu 2021" },
    mechanism: { href: "/mechanismy/mechanismy-vln-veder/#predpoved-2021", label: "Jak oteplení zesílilo tuto vlnu veder" },
    sources: [{ id: "DOI_10_15585_mmwr_mm7029e1", label: "Analýza a souhrny návštěv" }],
  },
  {
    id: "povoden-v-krnove",
    title: "Rozliv povodně v Krnově",
    summary: "Při povodni v září 2024 vystoupila hladina Opavy na vodočtu v Krnově na 595 cm nad nulou stupnice. Mapu rozlivu, tedy území zaplaveného vodou z řek, sestavili odborníci z terénních údajů a snímků z letadel a družic. Samostatná modelová studie odhadla vliv oteplení na srážky v zasažené části střední Evropy.",
    observation: { href: "/pozorovani/srazky-a-privalove-srazky/#pozorovani", label: "Měření vydatných srážek" },
    mechanism: { href: "/mechanismy/termodynamika-a-dynamika-srazek/", label: "Přehled mechanismů srážek" },
    sources: [
      { id: "WEB_CHMU_Krnov_Opava_271", label: "Vodočet v Krnově" },
      { id: "DATA_VUV_Rozliv_Povodne_2024", label: "Mapa rozlivu" },
      { id: "DOI_10_1038_s43247_024_01847_0", label: "Studie srážek při níži Boris" },
    ],
  },
  {
    id: "snih-a-letni-prutoky",
    title: "Zimní sníh a letní průtoky",
    summary: "Vědci pomocí modelu porovnali zásobu sněhu a průtoky v 59 horských povodích v Česku v letech 1980 až 2014. Ve většině povodí vycházel letní průtok napájený podzemní vodou nejnižší v letech s malou zásobou sněhu a zároveň s nedostatkem letního deště.",
    observation: { href: "/pozorovani/snehova-pokryvka-a-permafrost/#zasoba-v-povodich", label: "Zásoba vody ve sněhu" },
    mechanism: { href: "/mechanismy/vznik-a-zanik-snehove-pokryvky-na-sousi/#mechanismus", label: "Jak se mění zásoba sněhu a doba tání" },
    sources: [
      { id: "DOI_10_5194_hess_24_3475_2020", label: "Studie českých povodí" },
      { id: "DOI_10_5281_zenodo_3894699", label: "Výstupy modelu" },
    ],
  },
  {
    id: "hnizdeni-a-potrava",
    title: "Hnízdění sýkor a dostupnost potravy",
    summary: "V nizozemském parku Hoge Veluwe vědci sledovali hnízdění sýkor koňader a množství housenek. Časné hnízdění přinášelo větší výhodu, když housenek bylo nejvíc už před obdobím největší potřeby potravy mláďat. Výhodu vědci posoudili podle počtu potomků, kteří později sami hnízdili ve sledované populaci.",
    observation: { href: "/pozorovani/fenologicke-posuny/#pozorovani", label: "Posuny sezónních jevů u rostlin a ptáků" },
    mechanism: { href: "/mechanismy/biologicke-mechanismy-fenologickych-zmen/#jak-mechanismus-funguje", label: "Jak prostředí mění načasování" },
    sources: [
      { id: "DOI_10_1098_rspb_2021_1337", label: "Studie hnízdění a potravy" },
      { id: "DOI_10_5061_dryad_f1vhhmgx6", label: "Data z Hoge Veluwe" },
    ],
  },
  {
    id: "ledni-medvedi-na-sousi",
    title: "Lední medvědi na souši",
    summary: "V západní části Hudsonova zálivu tráví lední medvědi období bez mořského ledu převážně na souši, kde mají omezený přístup k tuleňům. Vědci je vážili na začátku a na konci zhruba třítýdenního sledování v letech 2019 až 2022. Hmotnost klesla u 19 z 20 sledovaných medvědů.",
    observation: { href: "/pozorovani/ubytek-arktickeho-ledu/#pozorovani", label: "Úbytek arktického mořského ledu" },
    mechanism: { href: "/mechanismy/vznik-tani-a-pohyb-morskeho-ledu/#jak-mechanismus-funguje", label: "Jak se mění zásoba mořského ledu" },
    sources: [
      { id: "DOI_10_1038_s41467_023_44682_1", label: "Studie medvědů na souši" },
      { id: "DATA_Pagano_2024_Polar_Bears", label: "Data ke grafům studie" },
    ],
  },
  {
    id: "permafrost-a-stavby",
    title: "Rozmrzající půda pod stavbami",
    summary: "Z leteckých snímků z let 1949, 1974 a 2019 vědci zmapovali, jak v zastavěné části aljašského Point Lay přibývaly propadliny po tání půdního ledu. Obsah ledu v půdě zjišťovali z vrtů. Obyvatelé při rozhovorech popsali poškození domů a poruchy vodovodu a kanalizace.",
    observation: { href: "/pozorovani/snehova-pokryvka-a-permafrost/#snih-a-teplota-pudy", label: "Rozmrzání a sesedání půdy na Aljašce" },
    mechanism: { href: "/mechanismy/prenos-tepla-do-pudy-a-tani-permafrostu/#jak-mechanismus-funguje", label: "Jak teplo proniká do zmrzlé půdy" },
    sources: [
      { id: "DOI_10_1088_2752_664X_adf1ac", label: "Studie v Point Lay" },
      { id: "DOI_10_18739_A2Z892H2J", label: "Data o změnách terénu" },
    ],
  },
];

export default function ConsequencesPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Důsledky" title="Jak se změna klimatu projevuje?">
        <p>
          Vysoký průtok může vést k záplavám. Mapa rozlivu ukáže, kam voda dosáhla.
          Škody pak závisí třeba na hloubce vody a na tom, jak vysoko jsou obytné
          místnosti. Také u veder, úbytku sněhu a tání ledu potřebujeme vedle
          měření samotného jevu údaje o tom, koho zasáhl a co se změnilo.
        </p>
      </PageLead>

      <section className={styles.grid} aria-label="Příklady důsledků změny klimatu">
        {consequenceTopics.map((topic) => (
          <article className={styles.card} id={topic.id} key={topic.id}>
            <h2>{topic.title}</h2>
            <p className={styles.summary}>{topic.summary}</p>
            <ul className={styles.sources} aria-label="Prameny k dopadu" role="list">
              {topic.sources.map((source) => (
                <li key={source.id}><SourceLink id={source.id}>{source.label}</SourceLink></li>
              ))}
            </ul>
            <dl className={styles.related}>
              <div>
                <dt>Pozorování</dt>
                <dd><Link className="text-link" href={topic.observation.href}>{topic.observation.label}</Link></dd>
              </div>
              <div>
                <dt>Mechanismus</dt>
                <dd><Link className="text-link" href={topic.mechanism.href}>{topic.mechanism.label}</Link></dd>
              </div>
            </dl>
          </article>
        ))}
      </section>
    </div>
  );
}
