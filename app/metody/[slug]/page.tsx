import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageLead } from "../../components/PageLead";
import { ResistanceThermometryArticle } from "../../components/ResistanceThermometryArticle";
import { measurementMethods, methodBySlug } from "../../data/methods";

export function generateStaticParams() {
  return measurementMethods.map((method) => ({ slug: method.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const method = methodBySlug(slug);

  if (!method) {
    return {};
  }

  return {
    title: method.title,
    description: method.summary,
  };
}

export default async function MethodDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const method = methodBySlug(slug);

  if (!method) {
    notFound();
  }

  if (slug === "odporova-termometrie-a-termistory") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Metody / Přímá měření"
          title="Odporová termometrie a termistory"
          meta="Napsáno: 4. srpna 2026"
        >
          <p>
            Jak platinová čidla a termistory převádějí teplotu na elektrický odpor, jak se odpor měří a kalibruje
            a co z této metody vstupuje do klimatologických dat.
          </p>
        </PageLead>
        <ResistanceThermometryArticle />
        <Link className="text-link" href="/metody">
          &larr; Zpět na všechny metody
        </Link>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <PageLead eyebrow={`Metody / ${method.category}`} title={method.title}>
        <p>{method.summary}</p>
      </PageLead>
      <Link className="text-link catalog-back-link" href="/metody">
        &larr; Zpět na všechny metody
      </Link>
    </div>
  );
}
