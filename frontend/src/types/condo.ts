export type CondoSize = 'small' | 'medium' | 'large';
export type CondoSizeFilter = CondoSize | 'all';

export type Condo = {
  id: string;
  name: string;
  residents: number;
  size: CondoSize;
};
