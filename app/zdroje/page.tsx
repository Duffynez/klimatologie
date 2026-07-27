import type { Metadata } from "next";
import { PageLead } from "../components/PageLead";
import { SourceCard } from "../components/SourceCard";
import { sources } from "../data/sources";

export const metadata: Metadata = { title: "Zdroje" };

export default function SourcesPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Databáze pramenů" title="Zdroje, které lze dohledat a otevřít.">
        <p>
          Každý záznam má trvalé ID, bibliografické údaje a odkaz na kopii na Google Drive. U zdrojů, které
          smíme sdílet, je k dispozici i přímé stažení. Před přidáním nového dokumentu vždy ověřujeme, že je jeho sdílení v pořádku.
        </p>
      </PageLead>
      <div className="source-list">
        {sources.map((source) => <SourceCard key={source.id} source={source} />)}
      </div>
    </div>
  );
}
