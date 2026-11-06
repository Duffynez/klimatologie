import type { Metadata } from "next";
import Link from "next/link";
import { Citation } from "../components/Citation";
import { PageLead } from "../components/PageLead";
import { HistoryTimeline, type HistoryTimelineItem } from "../components/HistoryTimeline";
import styles from "../components/HistoryTimeline.module.css";
import { historyBranches, historyCategories, historyEvents, historyImportances, historyLegacyLinks, historyPeriods, type HistoryBranch, type HistoryCategory, type HistoryImportance } from "../data/history";
import { sourceById } from "../data/sources";

export const metadata: Metadata = {
  title: "Historie",
  description: "Zásadní milníky poznání změny klimatu a klimatické politiky. Chronologická osa se třemi stupni důležitosti, filtry a původními prameny.",
};

export default function HistoryPage() {
  const ids = new Set<string>();
  const items: HistoryTimelineItem[] = historyEvents.map((event, index) => {
    if (!event.id || ids.has(event.id)) throw new Error("Duplicate or missing history ID: " + event.id);
    ids.add(event.id);
    if (!Number.isInteger(event.year) || (index > 0 && event.year < historyEvents[index - 1].year)) {
      throw new Error("Invalid history chronology: " + event.id);
    }
    if (!Object.hasOwn(historyCategories, event.category)) {
      throw new Error("Invalid history classification: " + event.id);
    }
    if (!Number.isInteger(event.importance) || !Object.hasOwn(historyImportances, event.importance)) {
      throw new Error("Invalid history importance: " + event.id);
    }
    const importance = historyImportances[event.importance];
    const category = historyCategories[event.category];
    if (!Object.hasOwn(historyBranches, category.branch)) {
      throw new Error("Invalid history branch: " + event.id);
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
      branch: category.branch,
      category: event.category,
      importance: event.importance,
      content: (
        <article className={styles.milestone} data-history-branch={category.branch} data-history-category={event.category}
          aria-labelledby={"nazev-" + event.id}>
          <div className={styles.date}>
            <time dateTime={String(event.year)}>{event.year}</time>
            <span>{event.dateMeaning}</span>
          </div>
          <div className={styles.body}>
            <p className={styles.meta}>
              <span className={styles.branchLabel}>{historyBranches[category.branch]}</span>
              {category.branch === "science" && <>
                <span aria-hidden="true">›</span>
                <span className={styles.categoryLabel}>{category.label}</span>
              </>}
              <span className={styles.importanceLabel} data-history-importance={event.importance}
                aria-label={"Důležitost " + event.importance + ": " + importance.label}
                title={importance.description}>
                {event.importance} · {importance.label}
              </span>
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

  const legacyNotices = historyLegacyLinks.map(legacy => {
    if (!legacy.id || ids.has(legacy.id) || !legacy.title.trim() || !legacy.sourceIds.length) {
      throw new Error("Invalid legacy history link: " + legacy.id);
    }
    ids.add(legacy.id);
    for (const sourceId of legacy.sourceIds) {
      if (!sourceById(sourceId)) throw new Error("Missing legacy history source: " + sourceId);
    }
    return (
      <aside key={legacy.id} id={"milnik-" + legacy.id} className={styles.legacyNotice}
        aria-labelledby={"byvaly-" + legacy.id}>
        <h2 id={"byvaly-" + legacy.id}>{legacy.title}</h2>
        <p>Tato událost už není součástí užšího výběru o změně klimatu. Její prameny zůstávají dostupné:{" "}
          {legacy.sourceIds.map(id => <span key={id}><Citation id={id} />{" "}</span>)}
        </p>
        <a href="#historicka-osa">Prohlédnout současnou osu →</a>
      </aside>
    );
  });

  return (
    <div className="page-shell">
      <PageLead eyebrow="Historie poznání" title="Historie poznání změny klimatu."
        meta="6. listopadu 2026">
        <p>Jak jsme zjistili, že se klima mění, co tyto změny způsobuje a jak na ně reagovaly státy. Osa vybírá zásadní objevy, měření a klimatická rozhodnutí.</p>
        <p>Začněte zásadními milníky (1). Rozšířený přehled přidá důležité metody a důkazy (2), celý výběr i doplňující kroky (3). Vědu lze dále filtrovat na pozorování, metody a mechanismy.</p>
      </PageLead>
      {legacyNotices}
      <HistoryTimeline items={items} periods={historyPeriods}
        importances={Object.entries(historyImportances)
          .map(([value, importance]) => ({ value: Number(value) as HistoryImportance, ...importance }))}
        branches={Object.entries(historyBranches)
          .filter(([value]) => items.some(item => item.branch === value))
          .map(([value, label]) => ({ value: value as HistoryBranch, label }))}
        categories={Object.entries(historyCategories)
          .filter(([value]) => historyEvents.some(event => event.category === value))
          .map(([value, category]) => ({ value: value as HistoryCategory, ...category }))} />
    </div>
  );
}
