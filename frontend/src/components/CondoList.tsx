import type { Condo } from '../types/condo'
import { CondoItem } from './CondoItem'

export function CondoList({ condos }: { condos: Condo[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 items-stretch">
      {condos.map((c) => (
        <CondoItem key={c.id} condo={c} />
      ))}
    </div>
  )
}
