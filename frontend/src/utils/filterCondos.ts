import type { Condo, CondoSizeFilter } from '../types/condo';

export function filterCondos(
  condos: Condo[],
  searchQuery: string,
  sizeFilter: CondoSizeFilter,
): Condo[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return condos.filter((condo) => {
    const matchesName = normalizedQuery
      ? condo.name.toLowerCase().includes(normalizedQuery)
      : true;

    const matchesSize = sizeFilter === 'all' ? true : condo.size === sizeFilter;

    return matchesName && matchesSize;
  });
}
