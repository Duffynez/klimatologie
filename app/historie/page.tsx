import type { Metadata } from "next";
import { Citation } from "../components/Citation";
import { PageLead } from "../components/PageLead";
import { historyEvents } from "../data/history";
import { sourceById, sourceCategoryMeta } from "../data/sources";

export const metadata: Metadata = { title: "Historie" };

export default function HistoryPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Historie poznání" title="Časová osa poznání a rozhodnutí." />
      <div className="timeline__head" aria-hidden="true">
        <span>Politika a instituce</span>
        <span>Věda a odborné práce</span>
      </div>
      <ol className="timeline">
        {historyEvents.map((event) => {
          const source = sourceById(event.sourceId);
          const lane = event.lane ?? "academic";

          if (!source) return null;

          return (
            <li className={`timeline__item timeline__item--${source.category} timeline__item--${lane}`} key={source.id} id={`milnik-${source.id}`}>
              <div className="timeline__rail" aria-hidden="true"><span /></div>
              <article className="timeline__entry">
                <div className="timeline__meta">
                  <span className="timeline__identity">
                    <time dateTime={`${source.year}`}>{source.year}</time>
                    <span className="timeline__author">{source.author}</span>
                  </span>
                  <span className="timeline__category">{sourceCategoryMeta[source.category].label}</span>
                  <span>{source.type}</span>
                </div>
                <div className="timeline__title-row">
                  <h2>{source.title}</h2>
                  <Citation id={source.id} />
                </div>
                <p>{event.summary}</p>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
