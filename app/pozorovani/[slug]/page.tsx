import Link from "next/link";
import { notFound } from "next/navigation";
import { GmstArticle } from "../../components/GmstArticle";
import { OceanHeatContentArticle } from "../../components/OceanHeatContentArticle";
import { StratosphericCoolingArticle } from "../../components/StratosphericCoolingArticle";
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

  if (slug === "gmst") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Pozorování / Atmosféra" title="Dlouhodobá změna globální teploty u povrchu">
          <p>
            Jak vzniká globální teplotní řada z pozemních a oceánských pozorování, co přesně obsahuje a jak se
            zveřejňuje její nejistota.
          </p>
        </PageLead>
        <GmstArticle />
        <Link className="text-link" href="/pozorovani">&larr; Zpět na všechna pozorování</Link>
      </div>
    );
  }

  if (slug === "stratosfericke-ochlazovani") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Pozorování / Atmosféra" title="Dlouhodobá změna teploty ve stratosféře">
          <p>
            Jak se měří teplota v různých vrstvách stratosféry, odkdy sahají jednotlivé řady a jak se zveřejňují
            jejich nejistoty.
          </p>
        </PageLead>
        <StratosphericCoolingArticle />
        <Link className="text-link" href="/pozorovani">&larr; Zpět na všechna pozorování</Link>
      </div>
    );
  }

  if (slug === "ohc") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Pozorování / Oceány"
          title="Teplo v oceánech"
          meta="Napsáno: 30. července 2026"
        >
          <p>
            Jak se měří teplota vody pod hladinou, jak z ní vzniká údaj o množství tepla a co ukazují aktuální data.
          </p>
        </PageLead>
        <OceanHeatContentArticle />
        <Link className="text-link" href="/pozorovani">&larr; Zpět na všechna pozorování</Link>
      </div>
    );
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
