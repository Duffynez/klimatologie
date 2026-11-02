import type { Metadata } from "next";
import Link from "next/link";
import { PageLead } from "../components/PageLead";
import { climateMechanisms, mechanismCategories } from "../data/mechanisms";

export const metadata: Metadata = {
  title: "Mechanismy klimatu",
  description: "Přehled fyzikálních, chemických a biologických mechanismů a důkazů, které mezi vysvětleními rozlišují.",
};

export default function MechanismsPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Mechanismy" title="Proč se pozorované změny dějí?" />

      <div className="mechanism-catalog">
        {mechanismCategories.map((category) => {
          const mechanisms = climateMechanisms.filter((mechanism) => mechanism.category === category);

          return (
            <section className="mechanism-catalog__group" key={category}>
              <div className="mechanism-catalog__heading">
                <h2>{category}</h2>
                <span>{mechanisms.length}</span>
              </div>
              <div className="mechanism-catalog__grid">
                {mechanisms.map((mechanism) => {
                  const number = climateMechanisms.indexOf(mechanism) + 1;

                  return (
                    <Link className="mechanism-tile" href={`/mechanismy/${mechanism.slug}`} key={mechanism.slug}>
                      <span>{String(number).padStart(2, "0")}</span>
                      <div>
                        <h3>{mechanism.title}</h3>
                        <p>{mechanism.cardSummary}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
