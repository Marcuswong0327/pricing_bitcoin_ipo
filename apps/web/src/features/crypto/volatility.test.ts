import { describe, expect, it } from 'vitest';

import {
  deltaFor,
  isHighlighted,
  needsCatalyst,
  selectVolatility,
} from '@/features/crypto/volatility';
import type { Coin } from '@/features/crypto/schema';

const coins: Coin[] = [
  {
    symbol: 'SOL',
    name: 'Solana',
    priceUsd: 150,
    delta15m: 11,
    delta30m: -3,
    volume24hUsd: 800_000_000,
    catalyst: 'Binance listing',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    priceUsd: 3200,
    delta15m: -2,
    delta30m: 1.5,
    volume24hUsd: 9_000_000_000,
    catalyst: 'Protocol exploit',
  },
  {
    symbol: 'DOGE',
    name: 'Dogecoin',
    priceUsd: 0.1,
    delta15m: 20,
    delta30m: 20,
    volume24hUsd: 1_000_000,
    catalyst: null,
  },
];

describe('selectVolatility', () => {
  it('drops coins under the $5M 24h volume floor', () => {
    const selected = selectVolatility(coins, '15m', 'gainers');
    expect(selected.map((coin) => coin.symbol)).toEqual(['SOL']);
  });

  it('uses the selected window when splitting gainers and losers', () => {
    expect(selectVolatility(coins, '15m', 'gainers').map((coin) => coin.symbol)).toEqual(['SOL']);
    expect(selectVolatility(coins, '15m', 'losers').map((coin) => coin.symbol)).toEqual(['ETH']);
    expect(selectVolatility(coins, '30m', 'gainers').map((coin) => coin.symbol)).toEqual(['ETH']);
    expect(selectVolatility(coins, '30m', 'losers').map((coin) => coin.symbol)).toEqual(['SOL']);
  });

  it('reads the delta for the active window', () => {
    expect(deltaFor(coins[0], '15m')).toBe(11);
    expect(deltaFor(coins[0], '30m')).toBe(-3);
  });
});

describe('highlight and catalyst thresholds', () => {
  it('highlights only an absolute move greater than 5%', () => {
    expect(isHighlighted(5)).toBe(false);
    expect(isHighlighted(-5)).toBe(false);
    expect(isHighlighted(5.01)).toBe(true);
    expect(isHighlighted(-5.01)).toBe(true);
  });

  it('asks for a catalyst only when the absolute move exceeds 8%', () => {
    expect(needsCatalyst(8)).toBe(false);
    expect(needsCatalyst(-8)).toBe(false);
    expect(needsCatalyst(8.01)).toBe(true);
    expect(needsCatalyst(-8.01)).toBe(true);
  });
});
