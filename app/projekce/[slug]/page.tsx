import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageLead } from "../../components/PageLead";
import { SourceLink } from "../../components/SourceLink";
import { projectionBySlug, projections } from "../../data/projections";

type ProjectionPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projections.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = projectionBySlug(slug);
  if (!topic) notFound();

  return { title: topic.title, description: topic.summary };
}

export default async function ProjectionPage({ params }: ProjectionPageProps) {
  const { slug } = await params;
  const topic = projectionBySlug(slug);
  if (!topic) notFound();

  return (
    <div className="page-shell">
      <PageLead eyebrow={`Projekce / ${topic.category}`} title={topic.title}>
        <p>{topic.description}</p>
      </PageLead>
      <section className="mechanism-detail-evidence" aria-labelledby="podklady">
        <h2 id="podklady">Podklady k projekci</h2>
        <ul className="grid gap-2">
          <li><Link className="text-link" href={topic.observation.href}>{topic.observation.label}</Link></li>
          <li><Link className="text-link" href={topic.mechanism.href}>{topic.mechanism.label}</Link></li>
          <li><SourceLink id={topic.source.id}>{topic.source.label}</SourceLink></li>
          {topic.dataSource && <li><SourceLink id={topic.dataSource.id}>{topic.dataSource.label}</SourceLink></li>}
        </ul>
      </section>
      <Link className="text-link catalog-back-link" href={`/projekce/#${topic.slug}`}>
        &larr; Zpět na všechny projekce
      </Link>
    </div>
  );
}
