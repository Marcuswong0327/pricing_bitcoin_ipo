import type { Ipo, IpoStatus } from '@/features/ipo/schema';

export function filterIpos(ipos: readonly Ipo[], status: IpoStatus | 'all'): Ipo[] {
  if (status === 'all') {
    return [...ipos];
  }
  return ipos.filter((ipo) => ipo.status === status);
}
