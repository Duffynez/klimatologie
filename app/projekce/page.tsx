import type { Metadata } from "next";
import { PageLead } from "../components/PageLead";

export const metadata: Metadata = {
  title: "Projekce klimatu",
  description: "Jak vznikají klimatické projekce, jak se ověřují a co lze z jejich výsledků vyvodit.",
};

const projectionTopics = [
  {
    title: "Klimatické modely",
    summary: "Matematický popis atmosféry, oceánu, pevniny a ledu založený na fyzikálních zákonech a jejich vzájemném působení.",
  },
  {
    title: "Scénáře budoucího vývoje",
    summary: "Přesně vymezené předpoklady o budoucích emisích, využití půdy a dalších vlivech, pro které se projekce počítají.",
  },
  {
    title: "Ověřování modelů",
    summary: "Porovnávání modelových výsledků s měřeními, minulými změnami klimatu a jevy, které nebyly použity při stavbě modelu.",
  },
  {
    title: "Modelové soubory",
    summary: "Opakované výpočty s různými počátečními podmínkami a modely, které ukazují společný výsledek i rozsah možného vývoje.",
  },
  {
    title: "Globální a regionální projekce",
    summary: "Rozdíl mezi změnou celé Země a podrobnějšími výsledky pro kontinenty, státy, povodí nebo jednotlivá města.",
  },
  {
    title: "Nejistota a časový horizont",
    summary: "Oddělení nejistoty scénáře, rozdílů mezi modely a přirozeného kolísání klimatu v různě vzdálené budoucnosti.",
  },
];

export default function ProjectionsPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Budoucí vývoj" title="Co lze říci o budoucím klimatu." />
      <section className="section-outline" aria-label="Témata klimatických projekcí">
        {projectionTopics.map((topic, index) => (
          <article key={topic.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{topic.title}</h2>
            <p>{topic.summary}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
