import type { CondoSizeFilter } from '../types/condo';

type FilterOption = {
  value: CondoSizeFilter;
  label: string;
};

const filterOptions: FilterOption[] = [
  { value: 'all', label: 'Todos' },
  { value: 'large', label: 'Grandes' },
  { value: 'medium', label: 'Médios' },
  { value: 'small', label: 'Pequenos' },
];

export function CondoFilterControls({
  value,
  onChange,
  disabled = false,
}: {
  value: CondoSizeFilter;
  onChange: (value: CondoSizeFilter) => void;
  disabled?: boolean;
}) {
  return (
    <fieldset
      className="h-full w-full min-w-0 rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-3"
      disabled={disabled}
    >
      <legend className="px-1 text-sm font-semibold text-emerald-800">
        Tamanho
      </legend>

      <div className="flex w-full flex-wrap gap-2">
        {filterOptions.map((option) => {
          const isActive = value === option.value;

          return (
            <label key={option.value} className="min-w-0 flex-1 cursor-pointer">
              <input
                type="radio"
                name="condo-size-filter"
                value={option.value}
                checked={isActive}
                onChange={() => onChange(option.value)}
                className="sr-only peer"
              />

              <span
                className={[
                  'flex min-h-12 items-center justify-center rounded-full border px-2 py-2 text-sm font-medium transition',
                  'shadow-sm',
                  isActive
                    ? 'border-emerald-600 bg-emerald-600 text-white'
                    : 'border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-100',
                ].join(' ')}
              >
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
