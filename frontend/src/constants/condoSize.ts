import type { CondoSize } from '../types/condo';

export const condoSizeLabels: Record<CondoSize, string> = {
  small: 'Pequeno',
  medium: 'Médio',
  large: 'Grande',
};

export const condoSizeBadgeClasses: Record<CondoSize, string> = {
  small: 'bg-emerald-500',
  medium: 'bg-emerald-600',
  large: 'bg-emerald-800',
};
