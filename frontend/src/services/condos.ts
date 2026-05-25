import type { Condo } from '../types/condo'

export async function getCondos(): Promise<Condo[]> {
  const response = await fetch('/api/condominiums')

  if (!response.ok) {
    throw new Error('Failed to load condominiums')
  }

  return (await response.json()) as Condo[]
}
