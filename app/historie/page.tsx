import type { Metadata } from "next";
import { Citation } from "../components/Citation";
import { PageLead } from "../components/PageLead";
import { historyEvents } from "../data/history";
import { sourceById } from "../data/sources";

export const metadata: Metadata = { title: "Historie" };

export default function HistoryPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Historie poznání" title="Časová osa původních prací.">
        <p>
          Tato osa začíná knihovnou pramenů, které už byly součástí původního webu. Každý milník odkazuje na
          vlastní záznam a kopii dokumentu, aby šel vývoj oboru číst přímo z jeho stop.
        </p>
      </PageLead>
      <ol className="timeline">
        {historyEvents.map((event) => {
          const source = sourceById(event.sourceId);

          if (!source) return null;

          return (
          <li key={source.id}>
            <span>{source.year}</span>
            <div>
              <p>{source.author}</p>
              <h2>{source.title}</h2>
              <p>{event.summary}</p>
              <Citation id={source.id} />
            </div>
          </li>
          );
        })}
      </ol>
    </div>
  );
}
