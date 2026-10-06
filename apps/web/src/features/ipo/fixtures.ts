import type { Ipo } from '@/features/ipo/schema';

const BURSA_SUMMARY = 'https://www.bursamalaysia.com/listing/listing_resources/ipo/ipo_summary';

export const IPO_FIXTURES: readonly Ipo[] = [
  {
    id: 'sample-grid',
    name: 'Sample Grid Berhad',
    status: 'Exposure',
    issuePriceMyr: 0.28,
    totalShares: 250_000_000,
    openingDate: '2026-10-20',
    closingDate: '2026-11-02',
    ballotingDate: '2026-11-04',
    listingDate: '2026-11-12',
    retailOversubscription: null,
    prospectusUrl: BURSA_SUMMARY,
    scorecard: {
      businessSummary:
        'Sample Grid builds substation equipment for Malaysian utilities. This two-sentence summary is sample copy, not a prospectus extract.',
      peerName: 'Sample Peer Grid',
      companyPe: 19.2,
      peerMedianPe: 17.4,
      proceedsGrowthPct: 64,
      proceedsDebtPct: 36,
      risks: [
        'Sample risk: one utility customer represents most of the order book.',
        'Sample risk: copper prices move faster than contract repricing.',
        'Sample risk: the new plant has not received its operating licence.',
      ],
      sample: true,
    },
  },
  {
    id: 'sample-logistics',
    name: 'Sample Logistics Berhad',
    status: 'Prospectus Launched',
    issuePriceMyr: 0.65,
    totalShares: 120_000_000,
    openingDate: '2026-10-08',
    closingDate: '2026-10-20',
    ballotingDate: '2026-10-22',
    listingDate: '2026-10-30',
    retailOversubscription: null,
    prospectusUrl: BURSA_SUMMARY,
    scorecard: {
      businessSummary:
        'Sample Logistics runs bonded warehouses around Port Klang. The figures on this card are fixtures for the layout, not live filing data.',
      peerName: 'Sample Peer Logistics',
      companyPe: 14.8,
      peerMedianPe: 18.6,
      proceedsGrowthPct: 80,
      proceedsDebtPct: 20,
      risks: [
        'Sample risk: warehouse leases expire within three years.',
        'Sample risk: a port strike would stop most throughput.',
        'Sample risk: fuel surcharges are not passed through in full.',
      ],
      sample: true,
    },
  },
  {
    id: 'sample-foods',
    name: 'Sample Foods Berhad',
    status: 'Open for Balloting',
    issuePriceMyr: 0.42,
    totalShares: 180_000_000,
    openingDate: '2026-10-01',
    closingDate: '2026-10-12',
    ballotingDate: '2026-10-14',
    listingDate: '2026-10-22',
    retailOversubscription: null,
    prospectusUrl: BURSA_SUMMARY,
    scorecard: {
      businessSummary:
        'Sample Foods packs chilled meals for Malaysian convenience stores. Revenue in this sample comes from retail contracts, not from a parsed prospectus.',
      peerName: 'Sample Peer Foods',
      companyPe: 16.4,
      peerMedianPe: 21.1,
      proceedsGrowthPct: 72,
      proceedsDebtPct: 28,
      risks: [
        'Sample risk: a single retailer accounts for most of sales.',
        'Sample risk: raw-material prices are not hedged.',
        'Sample risk: the expansion plant is not yet licensed.',
      ],
      sample: true,
    },
  },
  {
    id: 'sample-health',
    name: 'Sample Health Berhad',
    status: 'Closed',
    issuePriceMyr: 1.15,
    totalShares: 90_000_000,
    openingDate: '2026-09-15',
    closingDate: '2026-09-28',
    ballotingDate: '2026-09-30',
    listingDate: '2026-10-10',
    retailOversubscription: 8.6,
    prospectusUrl: BURSA_SUMMARY,
    scorecard: {
      businessSummary:
        'Sample Health distributes generic medicines to clinics. The oversubscription figure is a fixture so the closed state has a number to show.',
      peerName: 'Sample Peer Health',
      companyPe: 22.5,
      peerMedianPe: 20.2,
      proceedsGrowthPct: 40,
      proceedsDebtPct: 60,
      risks: [
        'Sample risk: two products make up half of gross profit.',
        'Sample risk: a licence renewal is still with the regulator.',
        'Sample risk: imports are priced in US dollars.',
      ],
      sample: true,
    },
  },
  {
    id: 'sample-tech',
    name: 'Sample Tech Berhad',
    status: 'Listed',
    issuePriceMyr: 0.88,
    totalShares: 200_000_000,
    openingDate: '2026-07-20',
    closingDate: '2026-08-01',
    ballotingDate: '2026-08-04',
    listingDate: '2026-08-14',
    retailOversubscription: 2.1,
    prospectusUrl: BURSA_SUMMARY,
    scorecard: {
      businessSummary:
        'Sample Tech sells payroll software to mid-sized Malaysian firms. The listing date is sample data for the timeline, not a market record.',
      peerName: 'Sample Peer Tech',
      companyPe: 28.0,
      peerMedianPe: 24.5,
      proceedsGrowthPct: 90,
      proceedsDebtPct: 10,
      risks: [
        'Sample risk: subscription revenue is concentrated in one industry.',
        'Sample risk: the product depends on a single cloud region.',
        'Sample risk: key engineers are not locked in past listing.',
      ],
      sample: true,
    },
  },
];

export function findIpo(id: string): Ipo | undefined {
  return IPO_FIXTURES.find((ipo) => ipo.id === id);
}
