import { PANEL_PENDING } from '@/features/backend-pending/items';
import { PendingNotes } from '@/features/backend-pending/pending-notes';
import type { Ipo } from '@/features/ipo/schema';

export function AiScorecard({ ipo }: { ipo: Ipo }) {
  const { scorecard } = ipo;

  return (
    <section className="space-y-4" aria-labelledby="scorecard-heading">
      <div className="space-y-1">
        <h2 id="scorecard-heading" className="text-xl font-semibold tracking-tight">
          AI TL;DR scorecard
        </h2>
        <p className="rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-950">
          Sample scorecard. This is not a live extraction from a prospectus.
        </p>
        <PendingNotes ids={PANEL_PENDING.scorecard} />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium">Business</h3>
        <p className="text-sm leading-6">{scorecard.businessSummary}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1 rounded-lg border bg-card p-4">
          <h3 className="text-sm font-medium">P/E vs peers</h3>
          <p className="text-2xl font-semibold">{scorecard.companyPe.toFixed(1)}</p>
          <p className="text-sm text-muted-foreground">
            {scorecard.peerName} median {scorecard.peerMedianPe.toFixed(1)}
          </p>
        </div>
        <div className="space-y-2 rounded-lg border bg-card p-4">
          <h3 className="text-sm font-medium">Use of proceeds</h3>
          <div className="flex h-3 overflow-hidden rounded-full bg-secondary">
            <div
              className="bg-primary"
              style={{ width: `${scorecard.proceedsGrowthPct}%` }}
            />
            <div
              className="bg-stone-400"
              style={{ width: `${scorecard.proceedsDebtPct}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground">
            {scorecard.proceedsGrowthPct}% growth · {scorecard.proceedsDebtPct}% debt repayment
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Top 3 risks</h3>
        <ol className="list-decimal space-y-1 pl-5 text-sm leading-6">
          {scorecard.risks.map((risk) => (
            <li key={risk}>{risk}</li>
          ))}
        </ol>
      </div>
      <a
        href={ipo.prospectusUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
      >
        Official Bursa IPO summary
      </a>
    </section>
  );
}
