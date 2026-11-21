import type { Metadata } from "next";
import Link from "next/link";
import { PageLead } from "../components/PageLead";
import { SourceLink } from "../components/SourceLink";

export const metadata: Metadata = {
  title: "Projekce klimatu",
  description: "Jak se mohou změnit teploty, srážky, vítr, sníh, oceán a množství CO₂ ve vzduchu. Projekce pro Česko, Evropu a svět s odkazy na měření a data.",
};

const projectionCategories = [
  {
    title: "Teplota a energetická bilance Země",
    topics: [
      {
        id: "globalni-otepleni",
        question: "O kolik se může Země oteplit do poloviny a konce století?",
        text: "Projekce ukazují, o kolik bude povrch Země v letech 2041–2060 a 2081–2100 teplejší oproti průměru let 1850–1900. Rozdíl mezi scénáři s nízkými a vysokými emisemi do konce století narůstá.",
        observation: { href: "/pozorovani/gmst/#pozorovani", label: "Dosavadní růst globální teploty" },
        mechanism: { href: "/mechanismy/energeticka-bilance-zeme/#lidske-pusobeni-princip", label: "Proč se povrch Země otepluje" },
        source: { id: "DOI_10_5285_98af2184e13e4b91893ab72f301790db", label: "Teplotní křivky pro pět scénářů" },
      },
      {
        id: "delka-vln-veder",
        question: "Jak dlouho mohou trvat vlny veder ve střední Evropě?",
        text: "Vědci sledují, kolik dní po sobě se teplota drží nad hranicí, kterou dříve v daném místě překračovala jen zřídka. Podle stejné hranice pak srovnávají délku veder při globálním oteplení o 1,5 °C a o 2 °C oproti předindustriální době.",
        observation: { href: "/pozorovani/vlny-veder/#hranice-a-trvani", label: "Jak se určuje délka vlny veder" },
        mechanism: { href: "/mechanismy/mechanismy-vln-veder/#teplotni-posun", label: "Proč oteplení prodlužuje vedra" },
        source: { id: "DOI_10_1007_s00382_023_06798_4", label: "Projekce délky veder v Evropě" },
      },
    ],
  },
  {
    title: "Srážky a voda na pevnině",
    topics: [
      {
        id: "nejdestivejsi-den",
        question: "Kolik může ve střední Evropě napršet za nejdeštivější den roku?",
        text: "I když za rok naprší stejné množství vody, na jediný den jí může připadnout víc. Z map srážek lze vyčíst, jak se nejvyšší denní úhrn mění v různých částech střední Evropy při různém oteplení.",
        observation: { href: "/pozorovani/srazky-a-privalove-srazky/#ukazatele", label: "Jak se měří srážková maxima" },
        mechanism: { href: "/mechanismy/termodynamika-a-dynamika-srazek/#mechanismus", label: "Co určuje vydatnost srážek" },
        source: { id: "DOI_10_24381_cds_5292a2b0", label: "Srážková maxima v atlasu IPCC" },
      },
      {
        id: "letni-prutok",
        question: "Kolik vody poteče českými horskými řekami za letního sucha?",
        text: "Tající sníh doplňuje zásoby podzemní vody, které napájejí řeky i v létě. Ve výpočtech pro 59 českých povodí chybí v řekách nejvíc vody tehdy, když po zimě chudé na sníh přijde i léto s malým množstvím deště.",
        observation: { href: "/pozorovani/snehova-pokryvka-a-permafrost/#zasoba-v-povodich", label: "Zásoba vody ve sněhu v povodích" },
        mechanism: { href: "/mechanismy/vznik-a-zanik-snehove-pokryvky-na-sousi/#mechanismus", label: "Kdy voda opouští sněhovou pokrývku" },
        source: { id: "DOI_10_1016_j_ejrh_2021_100899", label: "Projekce nízkých průtoků v Česku" },
      },
    ],
  },
  {
    title: "Proudění vzduchu a bouře",
    topics: [
      {
        id: "pacificke-pasaty",
        question: "Jak se může změnit síla pasátů nad rovníkovým Pacifikem?",
        text: "Pasáty ženou teplou povrchovou vodu od Jižní Ameriky na západ. Při El Niño tyto větry na čas slábnou. Většina modelů očekává, že při dalším oteplování pasáty zeslábnou i v dlouhodobém průměru.",
        observation: { href: "/pozorovani/tepelny-obsah-oceanu/#enso-pacifik", label: "Co naměřily bóje v Pacifiku" },
        mechanism: { href: "/mechanismy/vnitrni-promenlivost-atmosfery-a-oceanu/#spolecne-vysvetleni", label: "Jak se nad Pacifikem ovlivňují vítr a oceán" },
        source: { id: "DOI_10_1017_9781009157896_010", label: "Projekce tropického proudění (IPCC, s. 1069)" },
      },
    ],
  },
  {
    title: "Sníh, led a permafrost",
    topics: [
      {
        id: "snih-v-ceskych-horach",
        question: "Jak dlouho vydrží sníh v českých horách?",
        text: "Sněhová sezona se může zkrátit na obou koncích. Ve výpočtech pro česká pohoří na konci století má větší vliv dřívější jarní tání než pozdější příchod sněhu na začátku zimy.",
        observation: { href: "/pozorovani/snehova-pokryvka-a-permafrost/#vlastnosti-snehu", label: "Jak se sleduje trvání sněhové pokrývky" },
        mechanism: { href: "/mechanismy/vznik-a-zanik-snehove-pokryvky-na-sousi/#test-skupenstvi", label: "Kdy na horách sněží a kdy prší" },
        source: { id: "DOI_10_1016_j_ejrh_2021_100899", label: "Projekce sněhové sezony v Česku" },
      },
      {
        id: "arkticke-zari",
        question: "Kdy může být Arktida v září poprvé téměř bez mořského ledu?",
        text: "Vědci hledají první září, kdy mořský led pokrývá v průměru méně než milion kilometrů čtverečních. Ve všech čtyřech zkoumaných emisních scénářích tento stav ve většině výpočtů nastal před rokem 2050.",
        observation: { href: "/pozorovani/ubytek-arktickeho-ledu/#plocha-pro-prisouzeni", label: "Zářijová plocha ledu podle družic" },
        mechanism: { href: "/mechanismy/vznik-tani-a-pohyb-morskeho-ledu/#jak-mechanismus-funguje", label: "Proč arktický led ubývá a tenčí se" },
        source: { id: "DOI_10_1029_2019GL086749", label: "Výpočty prvního září téměř bez ledu" },
      },
    ],
  },
  {
    title: "Oceán a hladina moře",
    topics: [
      {
        id: "vzestup-hladiny",
        question: "O kolik může hladina moře stoupnout do roku 2150?",
        text: "Ohřívající se mořská voda se rozpíná a další voda přibývá táním ledovců a ledových příkrovů. Projekce pro roky 2100 a 2150 ukazují, o kolik by každý z těchto procesů zvedl průměrnou světovou hladinu při různém vývoji emisí.",
        observation: { href: "/pozorovani/gmsl/#bilance-hladiny", label: "Naměřený vzestup hladiny a jeho složky" },
        mechanism: { href: "/mechanismy/bilance-globalni-hladiny-more/#mechanismus", label: "Jak přibývá objem mořské vody" },
        source: { id: "DOI_10_5281_zenodo_6382554", label: "Projekce hladiny do roku 2150" },
      },
      {
        id: "okyselovani-oceanu",
        question: "Jak se bude měnit pH povrchového oceánu při různých emisích CO₂?",
        text: "Čím nižší pH, tím je voda kyselejší. Projekce počítají, jak daleko od dnešní hodnoty by se průměrné pH u hladiny dostalo do konce století, kdyby emise dál rostly nebo naopak rychle klesaly.",
        observation: { href: "/pozorovani/acidifikace-oceanu/#globalni-povrch", label: "Dosavadní vývoj pH u hladiny oceánu" },
        mechanism: { href: "/mechanismy/pohlcovani-co2-oceanem-a-uhlicitanova-chemie/#mechanismus", label: "Proč pohlcený CO₂ mění pH vody" },
        source: { id: "DOI_10_5285_98af2184e13e4b91893ab72f301790db", label: "Křivky pH pro pět scénářů" },
      },
    ],
  },
  {
    title: "Složení atmosféry a koloběh uhlíku",
    topics: [
      {
        id: "podil-co2-v-atmosfere",
        question: "Jaká část vypuštěného CO₂ zůstane v atmosféře?",
        text: "Část vypuštěného uhlíku pohlcuje oceán, další část se ukládá na souši. Bilance emisí za roky 1850–2100 ukazuje, jak velký podíl zbude v ovzduší při různém vývoji emisí do konce století.",
        observation: { href: "/pozorovani/atmosfericka-koncentrace-co2/#pozorovani", label: "Naměřená koncentrace CO₂ ve vzduchu" },
        mechanism: { href: "/mechanismy/puvod-rustu-atmosferickeho-co2/#mechanismus", label: "Jak uhlík z emisí přechází mezi ovzduším, souší a oceánem" },
        source: { id: "DOI_10_5285_b1ad4c02319b438884a72fea34cb5a18", label: "Bilance uhlíku pro pět scénářů" },
      },
    ],
  },
];

export default function ProjectionsPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Projekce" title="Jak se může změnit klima?">
        <p>Klimatické projekce ukazují, jak se může klima vyvíjet při různých emisích skleníkových plynů. U každé otázky najdete také měření, se kterými výpočty souvisejí.</p>
      </PageLead>
      <ul className="projection-categories" aria-label="Kategorie klimatických projekcí" role="list">
        {projectionCategories.map(({ title, topics }) => (
          <li key={title}>
            <h2>{title}</h2>
            {topics.map(({ id, question, text, observation, mechanism, source }) => (
              <details key={id} id={id} className="projection-topic">
                <summary>{question}</summary>
                <p>{text}</p>
                <ul className="projection-topic-links" aria-label="Články a zdroj projekce">
                  <li><Link href={observation.href}>{observation.label}</Link></li>
                  <li><Link href={mechanism.href}>{mechanism.label}</Link></li>
                  <li><SourceLink id={source.id}>{source.label}</SourceLink></li>
                </ul>
              </details>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
