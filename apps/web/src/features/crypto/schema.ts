export type VolatilityWindow = '15m' | '30m';
export type VolatilitySide = 'gainers' | 'losers';

export type Coin = {
  symbol: string;
  name: string;
  priceUsd: number;
  delta15m: number;
  delta30m: number;
  volume24hUsd: number;
  catalyst: string | null;
};
