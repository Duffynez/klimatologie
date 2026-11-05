"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { HistoryKind, HistoryLane, HistoryPeriod } from "../data/history";
import styles from "./HistoryTimeline.module.css";

export type HistoryTimelineItem = {
  id: string;
  year: number;
  lane: HistoryLane;
  kind: HistoryKind;
  content: ReactNode;
};

export function HistoryTimeline({ items, periods, kinds }: {
  items: HistoryTimelineItem[];
  periods: HistoryPeriod[];
  kinds: { value: HistoryKind; label: string }[];
}) {
  const [lane, setLane] = useState<HistoryLane | "all">("all");
  const [kind, setKind] = useState<HistoryKind | "all">("all");
  const matches = (item: HistoryTimelineItem) =>
    (lane === "all" || item.lane === lane) && (kind === "all" || item.kind === kind);
  const visibleItems = items.filter(matches);
  const visiblePeriods = periods.filter(period =>
    visibleItems.some(item => item.year >= period.from && item.year <= period.to));

  const reset = () => {
    setLane("all");
    setKind("all");
  };

  useEffect(() => {
    const revealLinkedMilestone = () => {
      const anchor = window.location.hash.slice(1);
      if (!items.some(item => `milnik-${item.id}` === anchor)) return;
      setLane("all");
      setKind("all");
      requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView());
    };
    window.addEventListener("hashchange", revealLinkedMilestone);
    return () => window.removeEventListener("hashchange", revealLinkedMilestone);
  }, [items]);

  return (
    <div className={styles.timeline}>
      <div className={styles.filters} role="region" aria-label="Filtry historické osy">
        <fieldset className={styles.lanes}>
          <legend>Oblast</legend>
          <div className={styles.laneChoices}>
            {([
              ["all", "Všechny"],
              ["academic", "Vědecké"],
              ["institutional", "Politické"],
            ] as const).map(([value, label]) => (
              <button key={value} type="button" data-history-lane={value} aria-pressed={lane === value}
                onClick={() => setLane(value)}>{label}</button>
            ))}
          </div>
        </fieldset>
        <label className={styles.kind} htmlFor="history-kind">
          Druh milníku
          <select id="history-kind" value={kind}
            onChange={event => setKind(event.target.value as HistoryKind | "all")}>
            <option value="all">Všechny druhy</option>
            {kinds.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>
        <button className={styles.reset} type="button" onClick={reset}
          disabled={lane === "all" && kind === "all"}>Zrušit filtry</button>
        <p className={styles.count} role="status" aria-live="polite" aria-atomic="true">
          Zobrazeno {visibleItems.length} z {items.length} milníků
        </p>
      </div>
      <noscript><p>Filtry vyžadují JavaScript. Níže je celá chronologická osa.</p></noscript>

      {visibleItems.length ? (
        <nav className={styles.periodNav} aria-label="Období historické osy">
          <span>Přejít na období</span>
          {visiblePeriods.map(period => <a key={period.id} href={`#${period.id}`}>{period.label}</a>)}
        </nav>
      ) : (
        <div className={styles.empty}>
          <p>Pro tuto kombinaci filtrů není v ose žádný milník.</p>
          <button type="button" onClick={reset}>Zobrazit celou osu</button>
        </div>
      )}

      {periods.map(period => (
        <section key={period.id} id={period.id} className={styles.period}
          aria-labelledby={`${period.id}-title`}
          hidden={!visiblePeriods.includes(period)}>
          <h2 id={`${period.id}-title`} className={styles.periodTitle}>{period.label}</h2>
          <ol className={styles.events}>
            {items.filter(item => item.year >= period.from && item.year <= period.to).map(item => (
              <li key={item.id} id={`milnik-${item.id}`} className={styles.event}
                data-history-year={item.year} data-history-lane={item.lane}
                data-history-kind={item.kind} hidden={!matches(item)}>
                {item.content}
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
