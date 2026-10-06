import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Badge } from '@/components/ui/badge';
import { PendingBackendList } from '@/features/backend-pending/pending-backend-list';
import { AiScorecard } from '@/features/ipo/ai-scorecard';
import { countdownLabel } from '@/features/ipo/countdown';
import { findIpo, IPO_FIXTURES } from '@/features/ipo/fixtures';
import { IpoTimeline } from '@/features/ipo/ipo-timeline';
import { AffiliateLinks } from '@/features/leads/affiliate-links';
import { ShareScorecard } from '@/features/leads/share-scorecard';
import { appBaseUrl, formatMyr, formatOversubscription, formatShares } from '@/lib/format';

export function generateStaticParams() {
  return IPO_FIXTURES.map((ipo) => ({ id: ipo.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const ipo = findIpo(id);
  return { title: ipo ? `${ipo.name} · AlphaRadar` : 'IPO · AlphaRadar' };
}

export default async function IpoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ipo = findIpo(id);
  if (!ipo) {
    notFound();
  }

  const nowIso = new Date().toISOString();
  const pageUrl = `${appBaseUrl()}/ipo/${ipo.id}`;

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-8">
      <p>
        <Link href="/" className="text-sm text-primary hover:underline">
          Back to the dashboard
        </Link>
      </p>
      <header className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">{ipo.name}</h1>
          <Badge variant="secondary">{ipo.status}</Badge>
        </div>
        <p className="text-sm font-medium text-primary">
          {countdownLabel(ipo.closingDate, new Date(nowIso))}
        </p>
        <dl className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-muted-foreground">Issue price</dt>
            <dd>{formatMyr(ipo.issuePriceMyr)}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Total shares</dt>
            <dd>{formatShares(ipo.totalShares)}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Retail oversubscription</dt>
            <dd>{formatOversubscription(ipo.retailOversubscription)}</dd>
          </div>
        </dl>
      </header>
      <IpoTimeline ipo={ipo} />
      <AiScorecard ipo={ipo} />
      <ShareScorecard
        name={ipo.name}
        businessSummary={ipo.scorecard.businessSummary}
        pageUrl={pageUrl}
      />
      <AffiliateLinks />
      <PendingBackendList />
    </main>
  );
}
