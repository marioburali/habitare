import type { ChangeEvent } from 'react';
import type { CondoSizeFilter } from '../types/condo';
import type { CondoSortOption } from '../utils/sortCondos';
import { CondoFilterControls } from './CondoFilterControls';
import { CondoSortControls } from './CondoSortControls';

export function CondoToolbar({
  search,
  onSearchChange,
  sizeFilter,
  onSizeFilterChange,
  sortBy,
  onSortChange,
  disabled = false,
}: {
  search: string;
  onSearchChange: (value: string) => void;
  sizeFilter: CondoSizeFilter;
  onSizeFilterChange: (value: CondoSizeFilter) => void;
  sortBy: CondoSortOption;
  onSortChange: (value: CondoSortOption) => void;
  disabled?: boolean;
}) {
  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    onSearchChange(event.target.value);
  }

  return (
    <section className="grid gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="lg:min-w-0">
        <label>
          <span className="mb-2 block text-sm font-semibold text-emerald-800">
            Buscar por nome
          </span>

          <input
            type="search"
            value={search}
            onChange={handleSearchChange}
            disabled={disabled}
            placeholder="Digite para filtrar"
            className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-emerald-950 shadow-sm outline-none transition placeholder:text-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 disabled:cursor-not-allowed disabled:bg-emerald-100"
          />
        </label>
      </div>

      <div className="lg:h-full">
        <CondoFilterControls
          value={sizeFilter}
          onChange={onSizeFilterChange}
          disabled={disabled}
        />
      </div>

      <div className="lg:h-full">
        <CondoSortControls
          value={sortBy}
          onChange={onSortChange}
          disabled={disabled}
        />
      </div>
    </section>
  );
}
