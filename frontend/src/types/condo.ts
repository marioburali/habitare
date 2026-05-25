export type CondoSize = 'small' | 'medium' | 'large'

export type Condo = {
  id: string
  name: string
  residents: number
  size: CondoSize
}
