import type { Metadata } from "next";
import { PageLead } from "../components/PageLead";

export const metadata: Metadata = {
  title: "Projekce klimatu",
  description: "Hlavní oblasti projekcí budoucího klimatu při různém vývoji emisí.",
};

const projectionCategories = [
  "Teplota a energetická bilance Země",
  "Srážky a voda na pevnině",
  "Proudění vzduchu a bouře",
  "Sníh, led a permafrost",
  "Oceán a hladina moře",
  "Složení atmosféry a koloběh uhlíku",
];

export default function ProjectionsPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Projekce" title="Jak se může změnit klima?" />
      <ul className="projection-categories" aria-label="Kategorie klimatických projekcí" role="list">
        {projectionCategories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
}
