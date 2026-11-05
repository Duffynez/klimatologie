"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import type { HistoryCategory, HistoryPeriod } from "../data/history";
import styles from "./HistoryTimeline.module.css";

export type HistoryTimelineItem = {
  id: string;
  year: number;
  category: HistoryCategory;
  content: ReactNode;
};

export function HistoryTimeline({ items, periods, categories }: {
  items: HistoryTimelineItem[];
  periods: HistoryPeriod[];
  categories: { value: HistoryCategory; label: string; description: string; href: string | null }[];
}) {
  const [category, setCategory] = useState<HistoryCategory | "all">("all");
  const matches = (item: HistoryTimelineItem) => category === "all" || item.category === category;
  const activeCategory = categories.find(option => option.value === category);
  const visibleItems = items.filter(matches);
  const visiblePeriods = periods.filter(period =>
    visibleItems.some(item => item.year >= period.from && item.year <= period.to));

  const reset = () => setCategory("all");

  useEffect(() => {
    const revealLinkedMilestone = () => {
      const anchor = window.location.hash.slice(1);
      if (!items.some(item => `milnik-${item.id}` === anchor)) return;
      setCategory("all");
      requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView());
    };
    window.addEventListener("hashchange", revealLinkedMilestone);
    return () => window.removeEventListener("hashchange", revealLinkedMilestone);
  }, [items]);

  return (
    <div className={styles.timeline}>
      <div className={styles.filters} role="region" aria-label="Filtry historické osy">
        <fieldset className={styles.categories}>
          <legend>Oblast historie</legend>
          <div className={styles.categoryChoices}>
            <button type="button" className={styles.categoryChoice} data-history-category="all"
              aria-label="Všechny" aria-pressed={category === "all"} onClick={reset}>
              <span className={styles.choiceHeading}>
                <span>Všechny</span><span className={styles.choiceCount} aria-hidden="true">{items.length}</span>
              </span>
              <span className={styles.choiceDescription}>Celá časová osa</span>
            </button>
            {categories.map(option => (
              <button key={option.value} type="button" className={styles.categoryChoice}
                data-history-category={option.value} aria-label={option.label}
                aria-describedby={`history-area-${option.value}-description`}
                aria-pressed={category === option.value} onClick={() => setCategory(option.value)}>
                <span className={styles.choiceHeading}>
                  <span>{option.label}</span>
                  <span className={styles.choiceCount} aria-hidden="true">
                    {items.filter(item => item.category === option.value).length}
                  </span>
                </span>
                <span id={`history-area-${option.value}-description`} className={styles.choiceDescription}>
                  {option.description}
                </span>
              </button>
            ))}
          </div>
        </fieldset>
        <p className={styles.count} role="status" aria-live="polite" aria-atomic="true">
          Zobrazeno {visibleItems.length} z {items.length} milníků
        </p>
        {activeCategory?.href && (
          <Link className={styles.categoryLink} href={activeCategory.href}>
            Prozkoumat {activeCategory.label.toLocaleLowerCase("cs")} →
          </Link>
        )}
      </div>
      <noscript><p>Filtry vyžadují JavaScript. Níže je celá chronologická osa.</p></noscript>

      {visibleItems.length ? (
        <nav className={styles.periodNav} aria-label="Období historické osy">
          <span>Přejít na období</span>
          {visiblePeriods.map(period => <a key={period.id} href={`#${period.id}`}>{period.label}</a>)}
        </nav>
      ) : (
        <div className={styles.empty}>
          <p>V této oblasti zatím není žádný milník.</p>
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
                data-history-year={item.year} data-history-category={item.category} hidden={!matches(item)}>
                {item.content}
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
