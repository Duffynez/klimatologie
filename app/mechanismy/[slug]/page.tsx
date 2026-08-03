import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageLead } from "../../components/PageLead";
import { climateMechanisms, mechanismBySlug } from "../../data/mechanisms";

export function generateStaticParams() {
  return climateMechanisms.map((mechanism) => ({ slug: mechanism.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const mechanism = mechanismBySlug(slug);

  if (!mechanism) {
    return {};
  }

  return {
    title: mechanism.title,
    description: mechanism.summary,
  };
}

export default async function MechanismDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mechanism = mechanismBySlug(slug);

  if (!mechanism) {
    notFound();
  }

  return (
    <div className="page-shell">
      <PageLead eyebrow={`Mechanismy / ${mechanism.category}`} title={mechanism.title}>
        <p>{mechanism.summary}</p>
      </PageLead>

      <section className="mechanism-detail-evidence" aria-labelledby="distinguishing-evidence">
        <p className="eyebrow">Rozlišující důkazy</p>
        <h2 id="distinguishing-evidence">Co musí toto vysvětlení objasnit.</h2>
        <p>{mechanism.distinguishingEvidence}</p>
      </section>

      <Link className="text-link catalog-back-link" href="/mechanismy">
        &larr; Zpět na všechny mechanismy
      </Link>
    </div>
  );
}
