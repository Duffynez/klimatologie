import type { Metadata } from "next";
import { PageLead } from "../components/PageLead";
import { SourceCard } from "../components/SourceCard";
import { sources } from "../data/sources";

export const metadata: Metadata = { title: "Zdroje" };

export default function SourcesPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Databáze pramenů" title="Zdroje, které lze dohledat a otevřít." />
      <div className="source-list">
        {sources.map((source) => <SourceCard key={source.id} source={source} />)}
      </div>
    </div>
  );
}
