import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageLead } from "../../components/PageLead";
import { EarthEnergyBalanceArticle } from "../../components/EarthEnergyBalanceArticle";
import { climateMechanisms, mechanismBySlug } from "../../data/mechanisms";

const combinedCryosphereSlug = "energeticka-bilance-snehu-a-morskeho-ledu";
const cryosphereSuccessors = ["vznik-tani-a-pohyb-morskeho-ledu", "vznik-a-zanik-snehove-pokryvky-na-sousi"];

export function generateStaticParams() {
  return [...climateMechanisms.map((mechanism) => ({ slug: mechanism.slug })), { slug: combinedCryosphereSlug }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (slug === combinedCryosphereSlug) {
    return {
      title: "Sníh a mořský led",
      description: "Samostatná témata o vzniku, tání a pohybu mořského ledu a o sněhové pokrývce na souši.",
    };
  }
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
  if (slug === combinedCryosphereSlug) {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Mechanismy / Kryosféra" title="Sníh a mořský led" meta="31. října 2026">
          <p>Mořskému ledu a sněhu na souši se věnují dvě samostatná témata.</p>
        </PageLead>
        <section className="mechanism-catalog__group" aria-labelledby="successor-topics">
          <div className="mechanism-catalog__heading"><h2 id="successor-topics">Samostatná témata</h2></div>
          <div className="mechanism-catalog__grid">
            {cryosphereSuccessors.map((successorSlug, index) => {
              const successor = mechanismBySlug(successorSlug)!;
              return (
                <Link className="mechanism-tile" href={`/mechanismy/${successor.slug}`} key={successor.slug}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{successor.title}</h3>
                    <p>{successor.summary}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        <Link className="text-link catalog-back-link" href="/mechanismy">&larr; Zpět na všechny mechanismy</Link>
      </div>
    );
  }
  const mechanism = mechanismBySlug(slug);

  if (!mechanism) {
    notFound();
  }

  if (slug === "energeticka-bilance-zeme") {
    return (
      <div className="page-shell">
        <PageLead eyebrow={`Mechanismy / ${mechanism.category}`} title={mechanism.title} meta="31. října 2026">
          <p>Jak rozdíl mezi přijatým a odevzdaným zářením mění zásobu energie Země, proč oteplení zvyšuje vyzařování a co z toho potvrzují družicová a oceánská měření.</p>
        </PageLead>
        <EarthEnergyBalanceArticle />
        <Link className="text-link catalog-back-link" href="/mechanismy">&larr; Zpět na všechny mechanismy</Link>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <PageLead eyebrow={`Mechanismy / ${mechanism.category}`} title={mechanism.title} meta="31. října 2026">
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
