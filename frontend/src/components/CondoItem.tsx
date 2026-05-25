import type { Condo } from '../types/condo';
import habitareIcon from '../assets/habitare.svg';
import {
  condoSizeBadgeClasses,
  condoSizeLabels,
} from '../constants/condoSize';

export function CondoItem({ condo }: { condo: Condo }) {
  const sizeLabel = condoSizeLabels[condo.size];
  const sizeBadgeClass = condoSizeBadgeClasses[condo.size];

  return (
    <article className="w-full h-full flex items-stretch flex-col sm:flex-row gap-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl shadow-sm hover:shadow-md transition min-h-32 cursor-pointer">
      <div className="flex items-start gap-4 min-w-0 flex-1">
        <div
          className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold"
          aria-hidden="true"
        >
          <img
            src={habitareIcon}
            alt=""
            className="h-10 w-auto object-contain"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-md font-semibold text-emerald-950 break-words whitespace-normal">
            {condo.name}
          </h3>
          <p className="text-sm text-emerald-700 break-words whitespace-normal">
            <span className="sr-only">ID: </span>
            {condo.id}
          </p>
        </div>
      </div>

      <div className="mt-3 sm:mt-0 sm:ml-6 flex flex-col justify-between items-end gap-4 flex-shrink-0">
        <dl className="text-right">
          <dd className="text-lg font-bold text-emerald-900">
            {condo.residents.toLocaleString('pt-BR')}
          </dd>
          <dt className="text-sm text-emerald-700">residentes</dt>
        </dl>

        <div className="flex items-center w-full justify-end gap-2">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium text-white flex-shrink-0 ${sizeBadgeClass}`}
            aria-label={`Porte: ${sizeLabel}`}
          >
            {sizeLabel}
          </span>
        </div>
      </div>
    </article>
  );
}
