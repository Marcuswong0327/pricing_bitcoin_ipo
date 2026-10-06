import { PANEL_PENDING } from '@/features/backend-pending/items';
import { PendingNotes } from '@/features/backend-pending/pending-notes';
import { AFFILIATES } from '@/features/leads/affiliates';

export function AffiliateLinks() {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">Open a CDS account to apply</p>
      <PendingNotes ids={PANEL_PENDING.affiliate} />
      <ul className="flex flex-wrap gap-2">
        {AFFILIATES.map((affiliate) => (
          <li key={affiliate.id}>
            <a
              href={affiliate.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 items-center rounded-md border bg-background px-3 text-xs font-medium hover:bg-accent"
            >
              {affiliate.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
