import type { Metadata } from "next";
import Link from "next/link";
import { Citation } from "../components/Citation";
import { PageLead } from "../components/PageLead";
import { historyEvents } from "../data/history";
import { sourceById, sourceCategoryMeta } from "../data/sources";

export const metadata: Metadata = { title: "Historie" };

export default function HistoryPage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Historie poznání" title="Časová osa původních prací." />
      <ol className="timeline">
        {historyEvents.map((event, index) => {
          const source = sourceById(event.sourceId);
          const previous = historyEvents[index - 1];
          const next = historyEvents[index + 1];

          if (!source) return null;

          return (
            <li className={`timeline__item timeline__item--${source.category}`} key={source.id} id={`milnik-${source.id}`}>
              <div className="timeline__rail" aria-hidden="true"><span /></div>
              <article className="timeline__entry">
                <div className="timeline__meta">
                  <time dateTime={`${source.year}`}>{source.year}</time>
                  <span className="timeline__category">{sourceCategoryMeta[source.category].label}</span>
                  <span>{source.type}</span>
                </div>
                <p className="timeline__author">{source.author}</p>
                <h2>{source.title}</h2>
                <p>{event.summary}</p>
                <footer className="timeline__footer">
                  <Citation id={source.id} />
                  <nav className="timeline__navigation" aria-label={`Navigace na ose: ${source.year}`}>
                    {previous ? (
                      <Link
                        className="timeline__arrow"
                        href={`#milnik-${previous.sourceId}`}
                        aria-label={`Předchozí milník: ${sourceById(previous.sourceId)?.year}`}
                        title="Předchozí milník"
                      >
                        <span aria-hidden="true">←</span>
                      </Link>
                    ) : <span className="timeline__arrow timeline__arrow--empty" aria-hidden="true" />}
                    <span className="timeline__position" aria-label={`Milník ${index + 1} z ${historyEvents.length}`}>
                      {index + 1} / {historyEvents.length}
                    </span>
                    {next ? (
                      <Link
                        className="timeline__arrow"
                        href={`#milnik-${next.sourceId}`}
                        aria-label={`Další milník: ${sourceById(next.sourceId)?.year}`}
                        title="Další milník"
                      >
                        <span aria-hidden="true">→</span>
                      </Link>
                    ) : <span className="timeline__arrow timeline__arrow--empty" aria-hidden="true" />}
                  </nav>
                </footer>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
