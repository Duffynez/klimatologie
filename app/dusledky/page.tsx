import type { Metadata } from "next";
import { PageLead } from "../components/PageLead";

export const metadata: Metadata = {
  title: "Důsledky změny klimatu",
  description: "Jak se mění přírodní a lidské systémy a jak se odděluje fyzikální změna, expozice a zranitelnost.",
};

const consequenceTopics = [
  {
    title: "Od změny klimatu k riziku",
    summary: "Rozlišení samotné fyzikální změny, vystavení lidí a přírody jejím účinkům a zranitelnosti konkrétního systému.",
  },
  {
    title: "Voda, sucho a povodně",
    summary: "Změny dostupnosti vody, půdní vlhkosti, odtoku, zásob sněhu a pravděpodobnosti různých druhů sucha a povodní.",
  },
  {
    title: "Pobřeží a hladina moře",
    summary: "Důsledky růstu hladiny pro zaplavování, erozi pobřeží, pronikání slané vody a ochranu sídel a infrastruktury.",
  },
  {
    title: "Ekosystémy a druhy",
    summary: "Posuny areálů, změny sezónního vývoje, narušení potravních vztahů a proměny suchozemských i mořských ekosystémů.",
  },
  {
    title: "Zdraví",
    summary: "Účinky extrémního tepla, kouře, kvality ovzduší, změn výskytu přenašečů nemocí a narušení základních služeb.",
  },
  {
    title: "Potraviny, sídla a infrastruktura",
    summary: "Vliv klimatických podmínek na zemědělství, energetiku, dopravu, budovy a fungování lidských sídel.",
  },
];

export default function ConsequencesPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Následky změn" title="Co pozorované a očekávané změny způsobují." />
      <section className="section-outline" aria-label="Témata důsledků změny klimatu">
        {consequenceTopics.map((topic, index) => (
          <article key={topic.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{topic.title}</h2>
            <p>{topic.summary}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
