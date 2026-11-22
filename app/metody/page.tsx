import type { Metadata } from "next";
import { PageLead } from "../components/PageLead";
import { TopicCatalog } from "../components/TopicCatalog";
import { measurementMethods, methodCategories } from "../data/methods";

export const metadata: Metadata = {
  title: "Metody měření a zpracování dat",
  description: "Přehled měření, laboratorních analýz, přírodních archivů a metod zpracování klimatických dat.",
};

export default function MethodsPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Metody" title="Jak získáváme a vyhodnocujeme klimatická data." />

      <TopicCatalog basePath="/metody" categories={methodCategories} topics={measurementMethods} />
    </div>
  );
}
