"use client";

import { useMemo, useState } from "react";
import { Source, SourceCategory, sourceCategoryMeta } from "../data/sources";
import { SourceCard } from "./SourceCard";

type CategoryFilter = "all" | SourceCategory;
type PeriodFilter = "all" | "before-1900" | "1900-1949" | "1950-1999" | "from-2000";
type SortOrder = "oldest" | "newest";

const categoryOrder: SourceCategory[] = ["science", "book", "politics", "organization"];

const periodOptions: Array<{ value: PeriodFilter; label: string; includes: (year: number) => boolean }> = [
  { value: "all", label: "Všechna období", includes: () => true },
  { value: "before-1900", label: "Do roku 1899", includes: (year) => year < 1900 },
  { value: "1900-1949", label: "1900-1949", includes: (year) => year >= 1900 && year <= 1949 },
  { value: "1950-1999", label: "1950-1999", includes: (year) => year >= 1950 && year <= 1999 },
  { value: "from-2000", label: "Od roku 2000", includes: (year) => year >= 2000 },
];

export function SourceLibrary({ sources }: { sources: Source[] }) {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [period, setPeriod] = useState<PeriodFilter>("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("oldest");

  const visibleSources = useMemo(() => {
    const selectedPeriod = periodOptions.find((option) => option.value === period) ?? periodOptions[0];

    return sources
      .map((source, index) => ({ source, index }))
      .filter(({ source }) => category === "all" || source.category === category)
      .filter(({ source }) => selectedPeriod.includes(source.year))
      .sort((a, b) => {
        const yearDifference = sortOrder === "oldest"
          ? a.source.year - b.source.year
          : b.source.year - a.source.year;
        return yearDifference || a.index - b.index;
      })
      .map(({ source }) => source);
  }, [category, period, sortOrder, sources]);

  return (
    <section className="source-library" aria-label="Databáze zdrojů">
      <div className="source-filters">
        <label className="source-filters__field">
          <span>Typ zdroje</span>
          <select value={category} onChange={(event) => setCategory(event.target.value as CategoryFilter)}>
            <option value="all">Všechny typy</option>
            {categoryOrder.map((categoryKey) => (
              <option key={categoryKey} value={categoryKey}>{sourceCategoryMeta[categoryKey].label}</option>
            ))}
          </select>
        </label>

        <label className="source-filters__field">
          <span>Období</span>
          <select value={period} onChange={(event) => setPeriod(event.target.value as PeriodFilter)}>
            {periodOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

        <label className="source-filters__field">
          <span>Řazení</span>
          <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value as SortOrder)}>
            <option value="oldest">Od nejstarších</option>
            <option value="newest">Od nejnovějších</option>
          </select>
        </label>

        <p className="source-filters__count" aria-live="polite">
          Zobrazeno <strong>{visibleSources.length}</strong> z {sources.length}
        </p>
      </div>

      {visibleSources.length > 0 ? (
        <div className="source-list">
          {visibleSources.map((source) => <SourceCard key={source.id} source={source} />)}
        </div>
      ) : (
        <p className="source-library__empty">Této kombinaci filtrů neodpovídá žádný zdroj.</p>
      )}
    </section>
  );
}
