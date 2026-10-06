import { describe, expect, it } from 'vitest';

import { filterIpos } from '@/features/ipo/filter';
import type { Ipo } from '@/features/ipo/schema';

const ipos: Ipo[] = [
  {
    id: 'sample-foods',
    name: 'Sample Foods Berhad',
    status: 'Open for Balloting',
    issuePriceMyr: 0.5,
    totalShares: 100_000_000,
    openingDate: '2026-10-01',
    closingDate: '2026-10-12',
    ballotingDate: '2026-10-14',
    listingDate: '2026-10-22',
    retailOversubscription: 3.4,
    prospectusUrl: 'https://www.bursamalaysia.com/listing/listing_resources/ipo/ipo_summary',
    scorecard: {
      businessSummary: 'Sample sentence one. Sample sentence two.',
      peerName: 'Sample Peer',
      companyPe: 18,
      peerMedianPe: 22,
      proceedsGrowthPct: 70,
      proceedsDebtPct: 30,
      risks: ['Risk one', 'Risk two', 'Risk three'],
      sample: true,
    },
  },
  {
    id: 'sample-listed',
    name: 'Sample Listed Berhad',
    status: 'Listed',
    issuePriceMyr: 1,
    totalShares: 10,
    openingDate: '2026-01-01',
    closingDate: '2026-01-08',
    ballotingDate: '2026-01-10',
    listingDate: '2026-01-20',
    retailOversubscription: null,
    prospectusUrl: 'https://www.bursamalaysia.com/listing/listing_resources/ipo/ipo_summary',
    scorecard: {
      businessSummary: 'Listed sample. Still a sample.',
      peerName: 'Peer',
      companyPe: 10,
      peerMedianPe: 12,
      proceedsGrowthPct: 50,
      proceedsDebtPct: 50,
      risks: ['A', 'B', 'C'],
      sample: true,
    },
  },
];

describe('filterIpos', () => {
  it('returns every IPO when the status is all', () => {
    expect(filterIpos(ipos, 'all').map((ipo) => ipo.id)).toEqual([
      'sample-foods',
      'sample-listed',
    ]);
  });

  it('keeps only the selected lifecycle status', () => {
    expect(filterIpos(ipos, 'Open for Balloting').map((ipo) => ipo.id)).toEqual(['sample-foods']);
  });
});
