import type {
  CondoSortDirection,
  CondoSortField,
  CondoSortOption,
} from '../utils/sortCondos';

type SortOption = {
  field: CondoSortField;
  label: string;
  ascLabel: string;
  descLabel: string;
};

const sortOptions: SortOption[] = [
  {
    field: 'name',
    label: 'Alfabética',
    ascLabel: 'A-Z',
    descLabel: 'Z-A',
  },
  {
    field: 'residents',
    label: 'Quantidade',
    ascLabel: 'Menor-maior',
    descLabel: 'Maior-menor',
  },
];

export function CondoSortControls({
  value,
  onChange,
  disabled = false,
}: {
  value: CondoSortOption;
  onChange: (value: CondoSortOption) => void;
  disabled?: boolean;
}) {
  function handleToggle(field: CondoSortField) {
    const nextDirection: CondoSortDirection =
      value.field === field && value.direction === 'desc'
        ? 'asc'
        : value.field === field
          ? 'desc'
          : field === 'name'
            ? 'asc'
            : 'desc';

    onChange({ field, direction: nextDirection });
  }

  return (
    <fieldset
      className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4"
      disabled={disabled}
    >
      <legend className="px-1 text-sm font-semibold text-emerald-800">
        Ordenar por
      </legend>

      <div className="mt-3 flex flex-wrap gap-2">
        {sortOptions.map((option) => {
          const isActive = option.field === value.field;
          const currentDirection = isActive
            ? value.direction
            : option.field === 'name'
              ? 'asc'
              : 'desc';
          const directionLabel =
            currentDirection === 'asc' ? option.ascLabel : option.descLabel;

          return (
            <button
              key={option.field}
              type="button"
              onClick={() => handleToggle(option.field)}
              aria-pressed={isActive}
              className={[
                'rounded-full px-8 py-1 text-sm font-medium transition',
                'border shadow-sm',
                isActive
                  ? 'border-emerald-600 bg-emerald-600 text-white'
                  : 'border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-100',
              ].join(' ')}
            >
              <span className="block">{option.label}</span>
              <span className="block text-[11px] font-semibold opacity-80">
                {directionLabel}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
