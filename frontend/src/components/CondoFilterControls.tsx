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
      className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4"
      disabled={disabled}
    >
      <legend className="px-1 text-sm font-semibold text-emerald-800">
        Tamanho
      </legend>

      <div className="flex w-full flex-wrap justify-between">
        {filterOptions.map((option) => {
          const isActive = value === option.value;

          return (
            <label key={option.value} className="flex-1 basis-[calc(50%-0px)] cursor-pointer lg:basis-0">
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
                  'flex items-center justify-center rounded-full border px-2 py-1 text-sm font-medium transition',
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
