import { COIN_FIXTURES } from '@/features/crypto/fixtures';
import type { Coin } from '@/features/crypto/schema';

export async function fetchVolatility(): Promise<Coin[]> {
  return [...COIN_FIXTURES];
}
