import type { Metadata } from "next";
import Link from "next/link";
import { PageLead } from "../components/PageLead";
import { climateMechanisms, mechanismCategories } from "../data/mechanisms";

export const metadata: Metadata = {
  title: "Mechanismy klimatu",
  description: "Přehled fyzikálních, chemických a biologických mechanismů a důkazů, které mezi vysvětleními rozlišují.",
};

const comparisonCriteria = [
  "velikost změny",
  "časový průběh",
  "prostorové rozložení",
  "výškový nebo hloubkový profil",
  "nezávislá pozorování",
  "energetická a látková bilance",
];

export default function MechanismsPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Mechanismy" title="Proč se pozorované změny dějí." />

      <section className="mechanism-guide">
        <div>
          <p className="eyebrow">Rozlišující důkazy</p>
          <h2>Jak rozhodujeme mezi vysvětleními.</h2>
        </div>
        <div>
          <p>
            Vysvětlení nestačí přizpůsobit jedinému grafu. Musí současně odpovídat několika navzájem
            nezávislým vlastnostem pozorované změny.
          </p>
          <ul>
            {comparisonCriteria.map((criterion) => <li key={criterion}>{criterion}</li>)}
          </ul>
        </div>
      </section>

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
                        <p>{mechanism.summary}</p>
                        <p className="mechanism-tile__evidence">
                          <strong>Rozlišující důkazy:</strong> {mechanism.distinguishingEvidence}
                        </p>
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
