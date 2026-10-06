import type { Coin } from '@/features/crypto/schema';

export const COIN_FIXTURES: readonly Coin[] = [
  {
    symbol: 'SOL',
    name: 'Solana',
    priceUsd: 148.2,
    delta15m: 11.4,
    delta30m: 6.2,
    volume24hUsd: 2_400_000_000,
    catalyst: 'Binance listing',
  },
  {
    symbol: 'WIF',
    name: 'dogwifhat',
    priceUsd: 1.84,
    delta15m: 6.4,
    delta30m: 2.2,
    volume24hUsd: 420_000_000,
    catalyst: null,
  },
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    priceUsd: 64250,
    delta15m: 1.1,
    delta30m: 0.4,
    volume24hUsd: 28_000_000_000,
    catalyst: null,
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    priceUsd: 3240,
    delta15m: -1.8,
    delta30m: -9.4,
    volume24hUsd: 12_000_000_000,
    catalyst: 'Protocol exploit',
  },
  {
    symbol: 'DOGE',
    name: 'Dogecoin',
    priceUsd: 0.12,
    delta15m: 22,
    delta30m: 18,
    volume24hUsd: 1_000_000,
    catalyst: 'Unusual whale volume',
  },
];
