import type { CondoSortOption } from '../utils/sortCondos'
import { CondoSortControls } from './CondoSortControls'

export function CondoToolbar({
  search,
  onSearchChange,
  sortBy,
  onSortChange,
  disabled = false,
}: {
  search: string
  onSearchChange: (value: string) => void
  sortBy: CondoSortOption
  onSortChange: (value: CondoSortOption) => void
  disabled?: boolean
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
      <label className="flex-1">
        <span className="mb-2 block text-sm font-semibold text-emerald-800">
          Buscar por nome
        </span>

        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          disabled={disabled}
          placeholder="Digite para filtrar"
          className="w-full rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm text-emerald-950 shadow-sm outline-none transition placeholder:text-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 disabled:cursor-not-allowed disabled:bg-emerald-100"
        />
      </label>

      <div className="lg:w-[28rem]">
        <CondoSortControls
          value={sortBy}
          onChange={onSortChange}
          disabled={disabled}
        />
      </div>
    </div>
  )
}