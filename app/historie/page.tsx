import type { Metadata } from "next";
import Link from "next/link";
import { Citation } from "../components/Citation";
import { PageLead } from "../components/PageLead";
import { HistoryTimeline, type HistoryTimelineItem } from "../components/HistoryTimeline";
import styles from "../components/HistoryTimeline.module.css";
import { historyEvents, historyKinds, historyPeriods, type HistoryKind } from "../data/history";
import { sourceById } from "../data/sources";

export const metadata: Metadata = {
  title: "Historie",
  description: "Časová osa klimatického poznání a politických rozhodnutí. Experimenty, měření, modely a dohody s odkazy na původní prameny.",
};

export default function HistoryPage() {
  const ids = new Set<string>();
  const items: HistoryTimelineItem[] = historyEvents.map((event, index) => {
    if (!event.id || ids.has(event.id)) throw new Error("Duplicate or missing history ID: " + event.id);
    ids.add(event.id);
    if (!Number.isInteger(event.year) || (index > 0 && event.year < historyEvents[index - 1].year)) {
      throw new Error("Invalid history chronology: " + event.id);
    }
    if (!Object.hasOwn(historyKinds, event.kind) || !["academic", "institutional"].includes(event.lane)) {
      throw new Error("Invalid history classification: " + event.id);
    }
    if (historyPeriods.filter(period => event.year >= period.from && event.year <= period.to).length !== 1) {
      throw new Error("History event must belong to one period: " + event.id);
    }
    if (!event.title.trim() || !event.dateMeaning.trim() || !event.paragraphs.length ||
      event.paragraphs.some(paragraph => !paragraph.text.trim() || !paragraph.references.length)) {
      throw new Error("Incomplete history event: " + event.id);
    }
    const references = event.paragraphs.flatMap(paragraph => paragraph.references);
    const sources = [...new Set(references.map(reference => reference.sourceId))].map(id => {
      const source = sourceById(id);
      if (!source) throw new Error("Missing history source " + id + " in " + event.id);
      return source;
    });

    return {
      id: event.id,
      year: event.year,
      lane: event.lane,
      kind: event.kind,
      content: (
        <article className={styles.milestone + (event.lane === "institutional" ? " " + styles.political : "")}
          aria-labelledby={"nazev-" + event.id}>
          <div className={styles.date}>
            <time dateTime={String(event.year)}>{event.year}</time>
            <span>{event.dateMeaning}</span>
          </div>
          <div className={styles.body}>
            <p className={styles.meta}>
              <span>{event.lane === "institutional" ? "Politická rozhodnutí" : "Poznání a měření"}</span>
              <span>{historyKinds[event.kind]}</span>
            </p>
            <h3 id={"nazev-" + event.id} className={styles.title}>{event.title}</h3>
            {event.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex} className={styles.paragraph}>
                {paragraph.text}{" "}
                <span className={styles.references}>
                  {paragraph.references.map(reference => (
                    <span key={reference.sourceId + "-" + (reference.locator ?? "")}>
                      <Citation id={reference.sourceId} />
                      {reference.locator && <span className={styles.locator}> ({reference.locator})</span>}{" "}
                    </span>
                  ))}
                </span>
              </p>
            ))}
            <details className={styles.sources}>
              <summary>Prameny k milníku</summary>
              <ul>
                {sources.map(source => (
                  <li key={source.id}>
                    {source.author} ({source.yearLabel ?? source.year}).{" "}
                    <Link href={"/zdroje#" + source.id}>{source.title}</Link>. {source.publication}
                  </li>
                ))}
              </ul>
            </details>
            {event.relatedLinks.length > 0 && (
              <nav className={styles.related} aria-label={"Související vysvětlení: " + event.title}>
                {event.relatedLinks.map(link => <Link key={link.href} href={link.href}>{link.label} →</Link>)}
              </nav>
            )}
          </div>
        </article>
      ),
    };
  });

  return (
    <div className="page-shell">
      <PageLead eyebrow="Historie poznání" title="Historie poznání klimatu."
        meta="5. listopadu 2026">
        <p>Experimenty, měření a výpočty postupně proměňovaly naše porozumění klimatu. Osa ukazuje, co jednotlivé kroky umožnily zjistit a kde měly své meze.</p>
        <p>Vedle vědeckého vývoje sleduje formální politická rozhodnutí. Vyberte si oblast nebo druh milníku a u každého záznamu se můžete vrátit k jeho pramenům.</p>
      </PageLead>
      <HistoryTimeline items={items} periods={historyPeriods}
        kinds={Object.entries(historyKinds).map(([value, label]) => ({ value: value as HistoryKind, label }))} />
    </div>
  );
}
