import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { countdownLabel } from '@/features/ipo/countdown';
import type { Ipo } from '@/features/ipo/schema';
import { AffiliateLinks } from '@/features/leads/affiliate-links';
import {
  formatDate,
  formatMyr,
  formatOversubscription,
  formatShares,
} from '@/lib/format';

export function IpoCard({ ipo, nowIso }: { ipo: Ipo; nowIso: string }) {
  return (
    <Card>
      <CardHeader className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-base">
            <Link href={`/ipo/${ipo.id}`} className="hover:underline">
              {ipo.name}
            </Link>
          </CardTitle>
          <Badge variant="secondary">{ipo.status}</Badge>
        </div>
        <p className="text-sm font-medium text-primary">
          {countdownLabel(ipo.closingDate, new Date(nowIso))}
        </p>
      </CardHeader>
      <CardContent className="space-y-4 p-4 pt-0">
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-muted-foreground">Issue price</dt>
            <dd>{formatMyr(ipo.issuePriceMyr)}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Total shares</dt>
            <dd>{formatShares(ipo.totalShares)}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Closes</dt>
            <dd>{formatDate(ipo.closingDate)}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Retail oversubscription</dt>
            <dd>{formatOversubscription(ipo.retailOversubscription)}</dd>
          </div>
        </dl>
        <AffiliateLinks />
      </CardContent>
    </Card>
  );
}
