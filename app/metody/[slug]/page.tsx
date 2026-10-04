import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageLead } from "../../components/PageLead";
import { ResistanceThermometryArticle } from "../../components/ResistanceThermometryArticle";
import { HygrometryArticle } from "../../components/HygrometryArticle";
import { RadiosoundingArticle } from "../../components/RadiosoundingArticle";
import { measurementMethods, methodBySlug } from "../../data/methods";

const combinedAnalysisSlug = "titrace-a-coulometrie";

export function generateStaticParams() {
  return [
    ...measurementMethods.map((method) => ({ slug: method.slug })),
    { slug: combinedAnalysisSlug },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (slug === combinedAnalysisSlug) {
    return {
      title: "Titrace a coulometrie",
      description: "Dvě analytické metody používané při rozboru mořské vody.",
    };
  }
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
  if (slug === combinedAnalysisSlug) {
    const relatedMethods = measurementMethods.filter((method) => ["titrace", "coulometrie"].includes(method.slug));
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Laboratorní analýza" title="Titrace a coulometrie" />
        <section className="method-catalog__group">
          <div className="method-catalog__heading">
            <h2>Metody analýzy mořské vody</h2>
          </div>
          <div className="method-catalog__grid">
            {relatedMethods.map((method) => (
              <Link className="method-tile" href={`/metody/${method.slug}`} key={method.slug}>
                <span>{String(measurementMethods.indexOf(method) + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{method.title}</h3>
                  <p>{method.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <Link className="text-link catalog-back-link" href="/metody">
          &larr; Zpět na všechny metody
        </Link>
      </div>
    );
  }
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
          meta="Napsáno: 4. srpna 2026 · Odborná revize: 4. října 2026"
        >
          <p>
            Od elektrického signálu přes kalibraci k teplotě vzduchu, vody a půdy.
            Dva příklady s dohledatelnými vstupy ukazují, co lze z měření vypočítat a jak se výsledek ověřuje.
          </p>
        </PageLead>
        <ResistanceThermometryArticle />
        <Link className="text-link" href="/metody">
          &larr; Zpět na všechny metody
        </Link>
      </div>
    );
  }

  if (slug === "hygrometrie") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Metody / Přímá měření"
          title="Hygrometrie"
          meta="Napsáno: 4. října 2026 · Odborná revize: 4. října 2026"
        >
          <p>
            Jak vlhkoměry převádějí odezvu čidla, ochlazení mokrého povrchu nebo vznik rosy na údaj
            o vlhkosti vzduchu. S kalibrací, porovnáním přístrojů a výpočtem ze skutečných staničních dat.
          </p>
        </PageLead>
        <HygrometryArticle />
        <Link className="text-link" href="/metody">
          &larr; Zpět na všechny metody
        </Link>
      </div>
    );
  }

  if (slug === "radiosondaz") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Metody / Přímá měření"
          title="Radiosondáž"
          meta="Napsáno: 4. října 2026 · Odborná revize: 4. října 2026"
        >
          <p>
            Jak přístroje pod meteorologickým balonem vytvářejí profil atmosféry.
            Od odezvy čidel a družicové polohy přes kalibraci a korekce ke skutečnému výstupu z Prahy-Libuše.
          </p>
        </PageLead>
        <RadiosoundingArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
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
