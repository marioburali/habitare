import type { Condo } from '../types/condo';
import { CondoItem } from './CondoItem';

export function CondoList({
  condos,
  onSelectCondo,
}: {
  condos: Condo[];
  onSelectCondo: (condo: Condo) => void;
}) {
  return (
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 items-stretch">
      {condos.map((c) => (
        <li key={c.id} className="min-w-0">
          <CondoItem condo={c} onSelect={onSelectCondo} />
        </li>
      ))}
    </ul>
  );
}
