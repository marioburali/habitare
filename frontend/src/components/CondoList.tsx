import type { Condo } from '../types/condo';
import { CondoItem } from './CondoItem';

export function CondoList({ condos }: { condos: Condo[] }) {
  return (
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 items-stretch">
      {condos.map((c) => (
        <li key={c.id} className="min-w-0">
          <CondoItem condo={c} />
        </li>
      ))}
    </ul>
  );
}
