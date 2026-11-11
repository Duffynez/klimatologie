import type { Metadata } from "next";
import Link from "next/link";
import { PageLead } from "../components/PageLead";
import { climateMechanisms } from "../data/mechanisms";

export const metadata: Metadata = {
  title: "Mechanismy klimatu",
  description: "Přehled fyzikálních, chemických a biologických mechanismů a důkazů, které mezi vysvětleními rozlišují.",
};

const questionGroups = [
  {
    id: "hlavni-otazky",
    title: "Hlavní otázky",
    mechanisms: climateMechanisms.filter((mechanism) => mechanism.isMainQuestion),
  },
  {
    id: "dalsi-otazky",
    title: "Další otázky",
    mechanisms: climateMechanisms.filter((mechanism) => !mechanism.isMainQuestion),
  },
];

export default function MechanismsPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Mechanismy" title="Proč se pozorované změny dějí?">
        <p>Hlavní otázky navazují přímo na konkrétní výsledky pozorování.</p>
        <nav className="mechanism-catalog__nav" aria-label="Skupiny otázek">
          {questionGroups.map(({ id, title }) => (
            <a className="text-link" href={`#${id}`} key={id}>{title}</a>
          ))}
        </nav>
      </PageLead>

      <div className="mechanism-catalog">
        {questionGroups.map(({ id, title, mechanisms }) => (
          <section className="mechanism-catalog__group" aria-labelledby={id} key={id}>
            <div className="mechanism-catalog__heading">
              <h2 id={id}>{title}</h2>
              <span>{mechanisms.length}</span>
            </div>
            <div className="mechanism-catalog__grid">
              {mechanisms.map((mechanism) => (
                <article className="mechanism-tile" key={mechanism.slug}>
                  <Link className="mechanism-tile__content" href={`/mechanismy/${mechanism.slug}`}>
                    <p className="mechanism-tile__category">{mechanism.category}</p>
                    <h3>{mechanism.title}</h3>
                    <p>{mechanism.cardSummary}</p>
                  </Link>
                  {mechanism.observations?.length ? (
                    <div className="mechanism-tile__observations">
                      <p className="mechanism-tile__observation-label">Pozorování</p>
                      <ul>
                        {mechanism.observations.map(({ href, label }) => (
                          <li key={href}><Link className="text-link" href={href}>{label}</Link></li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
