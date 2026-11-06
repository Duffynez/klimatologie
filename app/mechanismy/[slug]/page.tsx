import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageLead } from "../../components/PageLead";
import { EarthEnergyBalanceArticle } from "../../components/EarthEnergyBalanceArticle";
import { CarbonDioxideOriginArticle } from "../../components/CarbonDioxideOriginArticle";
import { GreenhouseRadiationArticle } from "../../components/GreenhouseRadiationArticle";
import { VolcanicAerosolsArticle } from "../../components/VolcanicAerosolsArticle";
import { SolarVariabilityArticle } from "../../components/SolarVariabilityArticle";
import { HeatWaveMechanismsArticle } from "../../components/HeatWaveMechanismsArticle";
import { PhenologyMechanismsArticle } from "../../components/PhenologyMechanismsArticle";
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

  if (slug === "sopecne-aerosoly") {
    return <div className="page-shell">
      <PageLead eyebrow={"Mechanismy / " + mechanism.category} title={mechanism.title} meta="6. listopadu 2026"><p>{mechanism.summary}</p></PageLead>
      <VolcanicAerosolsArticle />
      <Link className="text-link catalog-back-link" href="/mechanismy">&larr; Zpět na všechny mechanismy</Link>
    </div>;
  }

  if (slug === "biologicke-mechanismy-fenologickych-zmen") {
    return <div className="page-shell">
      <PageLead eyebrow={"Mechanismy / " + mechanism.category} title={mechanism.title} meta="6. listopadu 2026"><p>{mechanism.summary}</p></PageLead>
      <PhenologyMechanismsArticle />
      <Link className="text-link catalog-back-link" href="/mechanismy">&larr; Zpět na všechny mechanismy</Link>
    </div>;
  }

  if (slug === "mechanismy-vln-veder") {
    return <div className="page-shell">
      <PageLead eyebrow={"Mechanismy / " + mechanism.category} title={mechanism.title} meta="6. listopadu 2026"><p>{mechanism.summary}</p></PageLead>
      <HeatWaveMechanismsArticle />
      <Link className="text-link catalog-back-link" href="/mechanismy">&larr; Zpět na všechny mechanismy</Link>
    </div>;
  }

  if (slug === "slunecni-promenlivost") {
    return <div className="page-shell">
      <PageLead eyebrow={"Mechanismy / " + mechanism.category} title={mechanism.title} meta="6. listopadu 2026"><p>{mechanism.summary}</p></PageLead>
      <SolarVariabilityArticle />
      <Link className="text-link catalog-back-link" href="/mechanismy">&larr; Zpět na všechny mechanismy</Link>
    </div>;
  }

  if (slug === "energeticka-bilance-zeme") {
    return (
      <div className="page-shell">
        <PageLead eyebrow={`Mechanismy / ${mechanism.category}`} title={mechanism.title} meta="6. listopadu 2026">
          <p>Co způsobuje přibývání energie v oceánu, atmosféře, pevnině a ledu? Tři hypotézy, historie jejich zkoumání a měření, podle kterých mezi nimi rozlišujeme.</p>
        </PageLead>
        <EarthEnergyBalanceArticle />
        <Link className="text-link catalog-back-link" href="/mechanismy">&larr; Zpět na všechny mechanismy</Link>
      </div>
    );
  }

  if (slug === "puvod-rustu-atmosferickeho-co2") {
    return (
      <div className="page-shell">
        <PageLead eyebrow={"Mechanismy / " + mechanism.category} title={mechanism.title} meta="6. listopadu 2026">
          <p>{mechanism.summary}</p>
        </PageLead>
        <CarbonDioxideOriginArticle />
        <Link className="text-link catalog-back-link" href="/mechanismy">&larr; Zpět na všechny mechanismy</Link>
      </div>
    );
  }

  if (slug === "radiacni-pusobeni-sklenikovych-plynu") {
    return (
      <div className="page-shell">
        <PageLead eyebrow={`Mechanismy / ${mechanism.category}`} title={mechanism.title} meta="6. listopadu 2026">
          <p>{mechanism.summary}</p>
        </PageLead>
        <GreenhouseRadiationArticle />
        <Link className="text-link catalog-back-link" href="/mechanismy">&larr; Zpět na všechny mechanismy</Link>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <PageLead eyebrow={`Mechanismy / ${mechanism.category}`} title={mechanism.title} meta="2. listopadu 2026">
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
