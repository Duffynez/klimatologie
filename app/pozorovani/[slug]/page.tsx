import Link from "next/link";
import { notFound } from "next/navigation";
import { PageLead } from "../../components/PageLead";
import { evidenceBySlug, evidenceTopics } from "../../data/evidence";

export function generateStaticParams() {
  return evidenceTopics.map((topic) => ({ slug: topic.slug }));
}

export default async function EvidenceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = evidenceBySlug(slug);

  if (!topic) {
    notFound();
  }

  return (
    <div className="page-shell">
      <PageLead eyebrow={topic.category} title={topic.title}>
        <p>{topic.summary}</p>
      </PageLead>
      <section className="method-grid">
        <div>
          <p className="eyebrow">Stav obsahu</p>
          <h2>{topic.status}</h2>
          <p>Než sem přidáme výklad nebo graf, doplníme prvozdroj, metodiku, datum aktualizace a odkaz ke stažení dat.</p>
        </div>
        <div>
          <p className="eyebrow">Budoucí struktura</p>
          <ol>
            <li>Co přesně pozorujeme.</li>
            <li>Jak se veličina měří.</li>
            <li>Datové řady, jejich limity a zdroje.</li>
          </ol>
        </div>
      </section>
      <Link className="text-link" href="/pozorovani">&larr; Zpět na všechna pozorování</Link>
    </div>
  );
}
