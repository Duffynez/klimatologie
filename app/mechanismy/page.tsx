import type { Metadata } from "next";
import Link from "next/link";
import { climateMechanisms, mechanismCategories } from "../data/mechanisms";

export const metadata: Metadata = {
  title: "Mechanismy klimatu",
  description: "Přehled fyzikálních, chemických a biologických mechanismů a důkazů, které mezi vysvětleními rozlišují.",
};

export default function MechanismsPage() {
  return (
    <div className="page-shell mechanism-index">
      <h1>Mechanismy</h1>

      <div className="mechanism-catalog">
        {mechanismCategories.map((category) => {
          const mechanisms = climateMechanisms.filter((mechanism) => mechanism.category === category);

          return (
            <section className="mechanism-catalog__group" key={category}>
              <h2>{category}</h2>
              <ul className="mechanism-catalog__list">
                {mechanisms.map((mechanism) => (
                  <li key={mechanism.slug}>
                    <Link className="mechanism-link" href={`/mechanismy/${mechanism.slug}`}>
                      {mechanism.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
