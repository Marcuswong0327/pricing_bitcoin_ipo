'use client';

import { useState } from 'react';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PANEL_PENDING } from '@/features/backend-pending/items';
import { PendingNotes } from '@/features/backend-pending/pending-notes';
import { filterIpos } from '@/features/ipo/filter';
import { IPO_FIXTURES } from '@/features/ipo/fixtures';
import { IpoCard } from '@/features/ipo/ipo-card';
import { IPO_STATUSES, type IpoStatus } from '@/features/ipo/schema';

export function IpoPipeline({ nowIso }: { nowIso: string }) {
  const [status, setStatus] = useState<IpoStatus | 'all'>('all');
  const visible = filterIpos(IPO_FIXTURES, status);

  return (
    <section className="space-y-4" aria-labelledby="ipo-pipeline-heading">
      <div className="space-y-1">
        <h2 id="ipo-pipeline-heading" className="text-xl font-semibold tracking-tight">
          Bursa IPO pipeline
        </h2>
        <PendingNotes ids={PANEL_PENDING.ipo} />
      </div>
      <Tabs value={status} onValueChange={(value) => setStatus(value as IpoStatus | 'all')}>
        <TabsList className="flex h-auto flex-wrap justify-start">
          <TabsTrigger value="all">All</TabsTrigger>
          {IPO_STATUSES.map((item) => (
            <TabsTrigger key={item} value={item}>
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      {visible.length === 0 ? (
        <p className="text-sm text-muted-foreground">No sample IPOs in this phase.</p>
      ) : (
        <div className="space-y-3">
          {visible.map((ipo) => (
            <IpoCard key={ipo.id} ipo={ipo} nowIso={nowIso} />
          ))}
        </div>
      )}
    </section>
  );
}
