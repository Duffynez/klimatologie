import Link from "next/link";
import { notFound } from "next/navigation";
import { AtmosphericCo2Article } from "../../components/AtmosphericCo2Article";
import { AtmosphericHumidityArticle } from "../../components/AtmosphericHumidityArticle";
import { GlobalMeanSeaLevelArticle } from "../../components/GlobalMeanSeaLevelArticle";
import { GmstArticle } from "../../components/GmstArticle";
import { OceanAcidificationArticle } from "../../components/OceanAcidificationArticle";
import { OceanHeatArticle } from "../../components/OceanHeatArticle";
import { PrecipitationArticle } from "../../components/PrecipitationArticle";
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

  if (slug === "atmosfericka-koncentrace-co2") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Pozorování / Atmosféra"
          title="Oxid uhličitý v atmosféře"
          meta="Napsáno: 31. července 2026"
        >
          <p>
            Co přesně znamená údaj v ppm, jak se CO₂ měří na stanicích, v odebraném vzduchu, v ledu a z družic a
            co ukazují zveřejněná data.
          </p>
        </PageLead>
        <AtmosphericCo2Article />
        <Link className="text-link" href="/pozorovani">&larr; Zpět na všechna pozorování</Link>
      </div>
    );
  }

  if (slug === "narust-vlhkosti") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Pozorování / Atmosféra"
          title="Vlhkost atmosféry"
          meta="Napsáno: 31. července 2026"
        >
          <p>
            Co přesně vyjadřuje měrná a relativní vlhkost, jak se vodní pára měří u povrchu, ve výšce a v celém
            sloupci atmosféry a co ukazují zveřejněná data.
          </p>
        </PageLead>
        <AtmosphericHumidityArticle />
        <Link className="text-link" href="/pozorovani">&larr; Zpět na všechna pozorování</Link>
      </div>
    );
  }

  if (slug === "srazky-a-privalove-srazky") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Pozorování / Atmosféra"
          title="Srážky a přívalové srážky"
          meta="Napsáno: 31. července 2026"
        >
          <p>
            Jak se měří celkové úhrny, nejvyšší denní a hodinové srážky, jak se z bodových měření vytvářejí mapy a co
            ukazují zveřejněná data.
          </p>
        </PageLead>
        <PrecipitationArticle />
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

  if (slug === "gmsl") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Pozorování / Oceány"
          title="Globální střední hladina moře"
          meta="Napsáno: 31. července 2026"
        >
          <p>
            Jak se výška moře měří na pobřeží a z družic, jak z jednotlivých měření vzniká globální průměr a co ukazují
            zveřejněná data.
          </p>
        </PageLead>
        <GlobalMeanSeaLevelArticle />
        <Link className="text-link" href="/pozorovani">&larr; Zpět na všechna pozorování</Link>
      </div>
    );
  }

  if (slug === "acidifikace-oceanu") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Pozorování / Oceány"
          title="Acidifikace oceánu"
          meta="Napsáno: 31. července 2026"
        >
          <p>
            Co přesně znamená změna pH mořské vody, jak se měří celý uhličitanový systém, jak vznikají globální
            rekonstrukce a co ukazují zveřejněná data.
          </p>
        </PageLead>
        <OceanAcidificationArticle />
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
