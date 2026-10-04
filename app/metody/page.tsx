import type { Metadata } from "next";
import Link from "next/link";
import { PageLead } from "../components/PageLead";
import { measurementMethods, methodCategories } from "../data/methods";

export const metadata: Metadata = {
  title: "Metody měření a zpracování dat",
  description: "Přehled měření, laboratorních analýz, přírodních archivů a metod zpracování klimatických dat.",
};

export default function MethodsPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Metody" title="Jak získáváme a vyhodnocujeme klimatická data." />

      <div className="method-catalog">
        {methodCategories.map((category) => {
          const methods = measurementMethods.filter((method) => method.category === category);

          return (
            <section className="method-catalog__group" key={category}>
              <div className="method-catalog__heading">
                <h2>{category}</h2>
                <span>{methods.length}</span>
              </div>
              <div className="method-catalog__grid">
                {methods.map((method) => {
                  const number = measurementMethods.indexOf(method) + 1;

                  return (
                    <Link className="method-tile" href={`/metody/${method.slug}`} key={method.slug}>
                      <span>{String(number).padStart(2, "0")}</span>
                      <div>
                        <h3>{method.title}</h3>
                        <p>{method.summary}</p>
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
