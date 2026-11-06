import type { HistoryBranch, HistoryCategory, HistoryImportance } from "../data/history";

export type HistoryFilters = {
  branch: HistoryBranch | "all";
  category: HistoryCategory | "all";
  importances: readonly HistoryImportance[];
};

type FilterableMilestone = {
  id: string;
  branch: HistoryBranch;
  category: HistoryCategory;
  importance: HistoryImportance;
};

export const defaultHistoryFilters: HistoryFilters = { branch: "all", category: "all", importances: [1] };
export const allHistoryFilters: HistoryFilters = { branch: "all", category: "all", importances: [1, 2, 3] };

export function toggleHistoryImportance(filters: HistoryFilters, importance: HistoryImportance): HistoryFilters {
  return {
    ...filters,
    importances: filters.importances.includes(importance)
      ? filters.importances.filter(value => value !== importance)
      : [...filters.importances, importance].sort((a, b) => a - b),
  };
}

export function matchesHistoryFilters(item: FilterableMilestone, filters: HistoryFilters) {
  return filters.importances.includes(item.importance) &&
    (filters.branch === "all" || item.branch === filters.branch) &&
    (filters.category === "all" || item.category === filters.category);
}

export function historyFiltersForAnchor(items: Pick<FilterableMilestone, "id">[], hash: string): HistoryFilters | null {
  return items.some(item => hash === "#milnik-" + item.id) ? allHistoryFilters : null;
}
