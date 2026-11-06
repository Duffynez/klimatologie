import type { HistoryBranch, HistoryCategory, HistoryImportance } from "../data/history";

export type HistoryFilters = {
  branch: HistoryBranch | "all";
  category: HistoryCategory | "all";
  maxImportance: HistoryImportance;
};

type FilterableMilestone = {
  id: string;
  branch: HistoryBranch;
  category: HistoryCategory;
  importance: HistoryImportance;
};

export const defaultHistoryFilters: HistoryFilters = { branch: "all", category: "all", maxImportance: 1 };
export const allHistoryFilters: HistoryFilters = { branch: "all", category: "all", maxImportance: 3 };

export function matchesHistoryFilters(item: FilterableMilestone, filters: HistoryFilters) {
  return item.importance <= filters.maxImportance &&
    (filters.branch === "all" || item.branch === filters.branch) &&
    (filters.category === "all" || item.category === filters.category);
}

export function historyFiltersForAnchor(items: Pick<FilterableMilestone, "id">[], hash: string): HistoryFilters | null {
  return items.some(item => hash === "#milnik-" + item.id) ? allHistoryFilters : null;
}
