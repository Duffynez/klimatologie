import Link from "next/link";
import { notFound } from "next/navigation";
import { GmstArticle } from "../../components/GmstArticle";
import { OceanHeatArticle } from "../../components/OceanHeatArticle";
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
        <PageLead
          eyebrow="Pozorování / Atmosféra"
          title="Globální teplota u povrchu"
          meta="Napsáno: 30. července 2026"
        >
          <p>
            Jak se z měření meteorologických stanic, lodí a bójí počítá globální změna teploty, jak se měření
            vyvíjela a co ukazují zveřejněná data.
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
        <PageLead
          eyebrow="Pozorování / Atmosféra"
          title="Teplota stratosféry"
          meta="Napsáno: 30. července 2026"
        >
          <p>
            Jak se teplota stratosféry měří balóny, družicemi a rádiovými zákryty, jak se měření vyvíjela a co
            ukazují zveřejněná data.
          </p>
        </PageLead>
        <StratosphericCoolingArticle />
        <Link className="text-link" href="/pozorovani">&larr; Zpět na všechna pozorování</Link>
      </div>
    );
  }

  if (slug === "tepelny-obsah-oceanu") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Pozorování / Oceány"
          title="Obsah tepla v oceánu"
          meta="Napsáno: 30. července 2026"
        >
          <p>
            Jak se z teplot naměřených v různých hloubkách počítá změna obsahu tepla, jak se měření vyvíjela a co
            ukazují zveřejněná data.
          </p>
        </PageLead>
        <OceanHeatArticle />
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
