import type { Ipo } from '@/features/ipo/schema';
import { formatDate } from '@/lib/format';

const STEPS = [
  { key: 'openingDate', label: 'Opening' },
  { key: 'closingDate', label: 'Closing' },
  { key: 'ballotingDate', label: 'Balloting' },
  { key: 'listingDate', label: 'Listing' },
] as const;

export function IpoTimeline({ ipo }: { ipo: Ipo }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-4">
      {STEPS.map((step) => (
        <li key={step.key} className="rounded-lg border bg-card px-3 py-2">
          <p className="text-xs text-muted-foreground">{step.label}</p>
          <p className="text-sm font-medium">{formatDate(ipo[step.key])}</p>
        </li>
      ))}
    </ol>
  );
}
