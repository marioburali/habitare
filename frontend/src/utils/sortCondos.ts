import type { Condo } from '../types/condo';

export type CondoSortField = 'name' | 'residents';
export type CondoSortDirection = 'asc' | 'desc';

export type CondoSortOption = {
  field: CondoSortField;
  direction: CondoSortDirection;
};

export function sortCondos(condos: Condo[], sortBy: CondoSortOption): Condo[] {
  return [...condos].sort((left, right) => {
    if (sortBy.field === 'residents') {
      return sortBy.direction === 'asc'
        ? left.residents - right.residents
        : right.residents - left.residents;
    }

    const comparison = left.name.localeCompare(right.name, 'pt-BR', {
      sensitivity: 'base',
    });

    return sortBy.direction === 'asc' ? comparison : comparison * -1;
  });
}
