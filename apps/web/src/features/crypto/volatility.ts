import type { Coin, VolatilitySide, VolatilityWindow } from '@/features/crypto/schema';

export const MIN_VOLUME_USD = 5_000_000;
export const HIGHLIGHT_ABS_DELTA = 5;
export const CATALYST_ABS_DELTA = 8;

export function deltaFor(coin: Coin, window: VolatilityWindow): number {
  return window === '15m' ? coin.delta15m : coin.delta30m;
}

export function isHighlighted(delta: number): boolean {
  return Math.abs(delta) > HIGHLIGHT_ABS_DELTA;
}

export function needsCatalyst(delta: number): boolean {
  return Math.abs(delta) > CATALYST_ABS_DELTA;
}

export function selectVolatility(
  coins: readonly Coin[],
  window: VolatilityWindow,
  side: VolatilitySide,
): Coin[] {
  return coins.filter((coin) => {
    if (coin.volume24hUsd < MIN_VOLUME_USD) {
      return false;
    }
    const delta = deltaFor(coin, window);
    return side === 'gainers' ? delta > 0 : delta < 0;
  });
}
