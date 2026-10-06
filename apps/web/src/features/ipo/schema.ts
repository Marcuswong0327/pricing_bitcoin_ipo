export const IPO_STATUSES = [
  'Exposure',
  'Prospectus Launched',
  'Open for Balloting',
  'Closed',
  'Listed',
] as const;

export type IpoStatus = (typeof IPO_STATUSES)[number];

export type IpoScorecard = {
  businessSummary: string;
  peerName: string;
  companyPe: number;
  peerMedianPe: number;
  proceedsGrowthPct: number;
  proceedsDebtPct: number;
  risks: readonly [string, string, string];
  sample: true;
};

export type Ipo = {
  id: string;
  name: string;
  status: IpoStatus;
  issuePriceMyr: number;
  totalShares: number;
  openingDate: string;
  closingDate: string;
  ballotingDate: string;
  listingDate: string;
  retailOversubscription: number | null;
  prospectusUrl: string;
  scorecard: IpoScorecard;
};
