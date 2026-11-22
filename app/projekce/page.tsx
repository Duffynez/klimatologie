import type { Metadata } from "next";
import { PageLead } from "../components/PageLead";
import { TopicCatalog } from "../components/TopicCatalog";
import { projectionCategories, projections } from "../data/projections";

export const metadata: Metadata = {
  title: "Projekce klimatu",
  description: "Jak se mohou změnit teploty, srážky, vítr, sníh, oceán a množství CO₂ ve vzduchu. Projekce pro Česko, Evropu a svět s odkazy na měření a data.",
};

export default function ProjectionsPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Projekce" title="Jak se může změnit klima?">
        <p>Klimatické projekce ukazují, jak se může klima vyvíjet při různých emisích skleníkových plynů. U každé otázky najdete také měření, se kterými výpočty souvisejí.</p>
      </PageLead>
      <TopicCatalog basePath="/projekce" categories={projectionCategories} topics={projections} />
    </div>
  );
}
