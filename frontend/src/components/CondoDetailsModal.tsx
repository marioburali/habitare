import { getCondoDetails } from '../constants/condoDetails';
import {
  condoSizeBadgeClasses,
  condoSizeLabels,
} from '../constants/condoSize';
import type { Condo } from '../types/condo';
import { CondoDetailRow } from './CondoDetailRow';
import { Modal } from './Modal';

export function CondoDetailsModal({
  condo,
  onClose,
}: {
  condo: Condo;
  onClose: () => void;
}) {
  const titleId = `condo-details-${condo.id}`;
  const details = getCondoDetails(condo);
  const sizeLabel = condoSizeLabels[condo.size];
  const sizeBadgeClass = condoSizeBadgeClasses[condo.size];

  return (
    <Modal titleId={titleId} onClose={onClose}>
      <div className="flex items-start justify-between gap-4 p-4">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-emerald-700">
            Detalhes do condomínio
          </p>
          <h2
            id={titleId}
            className="mt-1 text-2xl font-extrabold text-emerald-950"
          >
            {condo.name}
          </h2>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          Fechar
        </button>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2 px-4">
        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold text-white ${sizeBadgeClass}`}
        >
          {sizeLabel}
        </span>
        <span className="rounded-full border border-emerald-200 bg-white px-3 py-1 text-sm font-semibold text-emerald-700">
          ID: {condo.id}
        </span>
      </div>

      <dl className="mt-6 grid gap-3 sm:grid-cols-2 px-4">
        <CondoDetailRow label="Valor do Condomínio" value={`R$ ${details.cost.toLocaleString('pt-BR')},00`} />
        <CondoDetailRow
          label="Residentes"
          value={condo.residents.toLocaleString('pt-BR')}
        />
        <CondoDetailRow label="Síndico" value={details.manager} />
        <CondoDetailRow label="Contato" value={details.contact} />
        <div className="sm:col-span-2">
          <CondoDetailRow label="Endereço" value={details.address} />
        </div>
      </dl>

      <div className="mt-3 rounded-xl border border-emerald-200 bg-white mx-4 mb-4 px-4 py-3">
        <h3 className="text-xs font-semibold uppercase text-emerald-700">
          Descrição
        </h3>
        <p className="mt-2 text-sm leading-6 text-emerald-950">
          {details.description}
        </p>
      </div>
    </Modal>
  );
}
