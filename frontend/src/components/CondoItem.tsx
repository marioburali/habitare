import type { Condo } from '../types/condo';
import habitareIcon from '../assets/habitare.svg';
import {
  condoSizeBadgeClasses,
  condoSizeLabels,
} from '../constants/condoSize';

export function CondoItem({
  condo,
  onSelect,
}: {
  condo: Condo;
  onSelect: (condo: Condo) => void;
}) {
  const sizeLabel = condoSizeLabels[condo.size];
  const sizeBadgeClass = condoSizeBadgeClasses[condo.size];

  return (
    <article className="h-full">
      <button
        type="button"
        onClick={() => onSelect(condo)}
        className="w-full h-full flex items-stretch flex-col sm:flex-row gap-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl shadow-sm hover:shadow-md transition min-h-32 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-emerald-50"
        aria-label={`Abrir detalhes de ${condo.name}`}
      >
        <span className="flex items-start gap-4 min-w-0 flex-1">
          <span
            className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold"
            aria-hidden="true"
          >
            <img
              src={habitareIcon}
              alt=""
              className="h-10 w-auto object-contain"
            />
          </span>

          <span className="min-w-0">
            <span className="block text-md font-semibold text-emerald-950 break-words whitespace-normal">
              {condo.name}
            </span>
            <span className="block text-sm text-emerald-700 break-words whitespace-normal">
              <span className="sr-only">ID: </span>
              {condo.id}
            </span>
          </span>
        </span>

        <span className="mt-3 sm:mt-0 sm:ml-6 flex flex-col justify-between items-end gap-4 flex-shrink-0">
          <span className="text-right">
            <span className="block text-lg font-bold text-emerald-900">
              {condo.residents.toLocaleString('pt-BR')}
            </span>
            <span className="block text-sm text-emerald-700">residentes</span>
          </span>

          <span className="flex items-center w-full justify-end gap-2">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium text-white flex-shrink-0 ${sizeBadgeClass}`}
              aria-label={`Porte: ${sizeLabel}`}
            >
              {sizeLabel}
            </span>
          </span>
        </span>
      </button>
    </article>
  );
}
