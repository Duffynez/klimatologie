import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Co2OriginArticle } from "../../components/Co2OriginArticle";
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

  if (slug === "puvod-rustu-atmosferickeho-co2") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Mechanismy / Záření a složení atmosféry"
          title="Původ růstu atmosférického CO₂"
          meta="Napsáno: 25. září 2026"
        >
          <p>
            Odkud pochází oxid uhličitý, kterého v atmosféře od průmyslové revoluce přibylo, a které nezávislé
            důkazy odlišují spalování fosilních paliv od sopek, oceánu a přirozených změn vegetace.
          </p>
        </PageLead>
        <Co2OriginArticle />
        <Link className="text-link catalog-back-link" href="/mechanismy">
          &larr; Zpět na všechny mechanismy
        </Link>
      </div>
    );
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
