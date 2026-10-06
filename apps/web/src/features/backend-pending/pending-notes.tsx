import { BACKEND_PENDING, type BackendPendingId } from '@/features/backend-pending/items';

export function PendingNotes({ ids }: { ids: readonly BackendPendingId[] }) {
  const notes = BACKEND_PENDING.filter((item) => ids.some((id) => id === item.id));

  return (
    <p className="text-xs leading-5 text-amber-950">
      Sample data. Waiting on {notes.map((item) => item.id).join(', ')}.
    </p>
  );
}
