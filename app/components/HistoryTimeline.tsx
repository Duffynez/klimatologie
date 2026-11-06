"use client";

import { useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import Link from "next/link";
import type { HistoryBranch, HistoryCategory, HistoryImportance, HistoryPeriod } from "../data/history";
import { allHistoryFilters, defaultHistoryFilters, historyFiltersForAnchor, matchesHistoryFilters, toggleHistoryImportance } from "./historyFilters";
import styles from "./HistoryTimeline.module.css";

export type HistoryTimelineItem = {
  id: string;
  year: number;
  branch: HistoryBranch;
  category: HistoryCategory;
  importance: HistoryImportance;
  content: ReactNode;
};

const subscribeToHydration = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export function HistoryTimeline({ items, periods, branches, categories, importances }: {
  items: HistoryTimelineItem[];
  periods: HistoryPeriod[];
  branches: { value: HistoryBranch; label: string }[];
  categories: { value: HistoryCategory; branch: HistoryBranch; label: string; description: string; href: string | null }[];
  importances: { value: HistoryImportance; label: string; description: string; filterLabel: string }[];
}) {
  const [selection, setSelection] = useState(defaultHistoryFilters);
  // Static HTML remains complete. Once hydrated, the overview starts with level 1.
  const hydrated = useSyncExternalStore(subscribeToHydration, clientSnapshot, serverSnapshot);
  const filters = hydrated ? selection : allHistoryFilters;
  const { branch, category, importances: selectedImportances } = filters;
  const matches = (item: HistoryTimelineItem) => matchesHistoryFilters(item, filters);
  const activeCategory = categories.find(option => option.value === category);
  const visibleItems = items.filter(matches);
  const visiblePeriods = periods.filter(period =>
    visibleItems.some(item => item.year >= period.from && item.year <= period.to));
  const countFor = (overrides: Partial<typeof filters>) =>
    items.filter(item => matchesHistoryFilters(item, { ...filters, ...overrides })).length;

  const selectBranch = (value: HistoryBranch | "all") => {
    setSelection(current => ({ ...current, branch: value, category: "all" }));
  };
  const reset = () => setSelection(allHistoryFilters);
  const selectAllImportances = () => setSelection(current => ({ ...current, importances: allHistoryFilters.importances }));

  useEffect(() => {
    const revealLinkedMilestone = () => {
      const linkedFilters = historyFiltersForAnchor(items, window.location.hash);
      if (!linkedFilters) return;
      setSelection(linkedFilters);
      requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView());
    };
    revealLinkedMilestone();
    window.addEventListener("hashchange", revealLinkedMilestone);
    return () => window.removeEventListener("hashchange", revealLinkedMilestone);
  }, [items]);

  return (
    <div id="historicka-osa" className={styles.timeline}>
      <div className={styles.filters} role="region" aria-label="Filtry historické osy">
        <fieldset className={styles.importances} aria-describedby="history-importance-help">
          <legend>Důležitost milníků</legend>
          <p id="history-importance-help" className={styles.filterHelp}>
            Zaškrtněte libovolnou kombinaci. 1 je nejvyšší důležitost.
          </p>
          <div className={styles.importanceChoices}>
            {importances.map(option => (
              <label key={option.value} className={styles.importanceChoice}
                data-selected={selectedImportances.includes(option.value)}>
                <input type="checkbox" className={styles.importanceCheckbox}
                  data-history-importance-option={option.value} aria-label={option.filterLabel}
                  checked={selectedImportances.includes(option.value)}
                  onChange={() => setSelection(current => toggleHistoryImportance(current, option.value))} />
                <span>{option.filterLabel}</span>
                <span className={styles.choiceCount} aria-hidden="true">
                  {countFor({ importances: [option.value] })}
                </span>
              </label>
            ))}
          </div>
          <button type="button" className={styles.selectAllImportances} onClick={selectAllImportances}>
            Vybrat všechny stupně
          </button>
        </fieldset>
        <fieldset className={styles.branches}>
          <legend>Část historie</legend>
          <div className={styles.branchChoices}>
            <button type="button" className={styles.branchChoice} data-history-branch="all"
              aria-label="Všechny" aria-pressed={branch === "all"} onClick={() => selectBranch("all")}>
              Všechny <span className={styles.choiceCount} aria-hidden="true">{countFor({ branch: "all", category: "all" })}</span>
            </button>
            {branches.map(option => (
              <button key={option.value} type="button" className={styles.branchChoice}
                data-history-branch={option.value} aria-label={option.label}
                aria-pressed={branch === option.value} onClick={() => selectBranch(option.value)}>
                {option.label}{" "}
                <span className={styles.choiceCount} aria-hidden="true">
                  {countFor({ branch: option.value, category: "all" })}
                </span>
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className={styles.categories} hidden={branch !== "science"}>
          <legend>Oblast vědy</legend>
          <div className={styles.categoryChoices}>
            <button type="button" className={styles.categoryChoice} data-history-category="all"
              aria-label="Všechny oblasti" aria-pressed={category === "all"}
              onClick={() => setSelection(current => ({ ...current, category: "all" }))}>
              <span className={styles.choiceHeading}>
                <span>Všechny oblasti</span>
                <span className={styles.choiceCount} aria-hidden="true">
                  {countFor({ branch: "science", category: "all" })}
                </span>
              </span>
              <span className={styles.choiceDescription}>Celý vývoj vědeckého poznání</span>
            </button>
            {categories.filter(option => option.branch === "science").map(option => (
              <button key={option.value} type="button" className={styles.categoryChoice}
                data-history-category={option.value} aria-label={option.label}
                aria-describedby={`history-area-${option.value}-description`}
                aria-pressed={category === option.value}
                onClick={() => setSelection(current => ({ ...current, category: option.value }))}>
                <span className={styles.choiceHeading}>
                  <span>{option.label}</span>
                  <span className={styles.choiceCount} aria-hidden="true">
                    {countFor({ branch: "science", category: option.value })}
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
        <button type="button" className={styles.reset} onClick={reset}>Zobrazit celou osu</button>
        {activeCategory?.href && (
          <Link className={styles.categoryLink} href={activeCategory.href}>
            Prozkoumat {activeCategory.label.toLocaleLowerCase("cs")} →
          </Link>
        )}
      </div>
      <noscript><p>Filtry vyžadují JavaScript. Níže je celý výběr milníků všech tří stupňů důležitosti.</p></noscript>

      {visibleItems.length ? (
        <nav className={styles.periodNav} aria-label="Období historické osy">
          <span>Přejít na období</span>
          {visiblePeriods.map(period => <a key={period.id} href={`#${period.id}`}>{period.label}</a>)}
        </nav>
      ) : (
        <div className={styles.empty}>
          <p>{selectedImportances.length
            ? "Této kombinaci důležitosti a oblasti neodpovídá žádný milník."
            : "Není vybrán žádný stupeň důležitosti. Zaškrtněte alespoň jeden nebo vyberte všechny stupně."}</p>
          <button type="button" onClick={reset}>Zrušit filtry</button>
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
                data-history-year={item.year} data-history-branch={item.branch}
                data-history-category={item.category} data-history-importance={item.importance} hidden={!matches(item)}>
                {item.content}
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
