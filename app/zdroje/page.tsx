import type { Metadata } from "next";
import { PageLead } from "../components/PageLead";
import { SourceLibrary } from "../components/SourceLibrary";
import { sources } from "../data/sources";

export const metadata: Metadata = { title: "Zdroje" };

export default function SourcesPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Databáze pramenů" title="Zdroje, které lze dohledat a otevřít." />
      <SourceLibrary sources={sources} />
    </div>
  );
}
