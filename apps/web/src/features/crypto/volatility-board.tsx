'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PANEL_PENDING } from '@/features/backend-pending/items';
import { PendingNotes } from '@/features/backend-pending/pending-notes';
import { fetchVolatility } from '@/features/crypto/api';
import { CatalystBadge } from '@/features/crypto/catalyst-badge';
import { COIN_FIXTURES } from '@/features/crypto/fixtures';
import type { VolatilitySide, VolatilityWindow } from '@/features/crypto/schema';
import { deltaFor, isHighlighted, selectVolatility } from '@/features/crypto/volatility';
import { WaitlistDialog } from '@/features/leads/waitlist-dialog';
import { cn } from '@/lib/utils';
import { formatPct, formatUsd, formatVolume } from '@/lib/format';

export function VolatilityBoard() {
  const [window, setWindow] = useState<VolatilityWindow>('15m');
  const [side, setSide] = useState<VolatilitySide>('gainers');
  const query = useQuery({
    queryKey: ['crypto', 'volatility'],
    queryFn: fetchVolatility,
    initialData: [...COIN_FIXTURES],
    staleTime: 60_000,
    refetchInterval: 30_000,
  });
  const rows = selectVolatility(query.data, window, side);

  return (
    <section className="space-y-4" aria-labelledby="volatility-heading">
      <div className="space-y-1">
        <h2 id="volatility-heading" className="text-xl font-semibold tracking-tight">
          Crypto volatility
        </h2>
        <PendingNotes ids={PANEL_PENDING.crypto} />
      </div>
      <div className="flex flex-wrap gap-2">
        <Tabs value={window} onValueChange={(value) => setWindow(value as VolatilityWindow)}>
          <TabsList>
            <TabsTrigger value="15m">15m</TabsTrigger>
            <TabsTrigger value="30m">30m</TabsTrigger>
          </TabsList>
        </Tabs>
        <Tabs value={side} onValueChange={(value) => setSide(value as VolatilitySide)}>
          <TabsList>
            <TabsTrigger value="gainers">Gainers</TabsTrigger>
            <TabsTrigger value="losers">Losers</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Coin</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>{window}</TableHead>
            <TableHead>24h volume</TableHead>
            <TableHead>Catalyst</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((coin) => {
            const delta = deltaFor(coin, window);
            return (
              <TableRow
                key={coin.symbol}
                className={cn(isHighlighted(delta) && 'bg-amber-50')}
              >
                <TableCell>
                  <span className="font-medium">{coin.symbol}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">{coin.name}</span>
                </TableCell>
                <TableCell>{formatUsd(coin.priceUsd)}</TableCell>
                <TableCell className={delta >= 0 ? 'text-primary' : 'text-destructive'}>
                  {formatPct(delta)}
                </TableCell>
                <TableCell>{formatVolume(coin.volume24hUsd)}</TableCell>
                <TableCell>
                  <CatalystBadge delta={delta} catalyst={coin.catalyst} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <p className="text-xs text-muted-foreground">
        Coins under $5M 24h volume are hidden. Moves beyond 5% are highlighted. A catalyst tag
        appears when the move exceeds 8%.
      </p>
      <WaitlistDialog />
    </section>
  );
}
