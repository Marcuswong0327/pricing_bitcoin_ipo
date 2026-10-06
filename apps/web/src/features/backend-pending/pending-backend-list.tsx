import { BACKEND_PENDING } from '@/features/backend-pending/items';

export function PendingBackendList() {
  return (
    <section aria-label="Backend still pending" className="space-y-3">
      <div>
        <h2 className="text-lg font-semibold tracking-tight">Backend still pending</h2>
        <p className="text-sm text-zinc-600">
          The screens above use sample data. Each item below is a separate backend job.
        </p>
      </div>
      <ul className="divide-y divide-zinc-200 rounded-lg border border-zinc-200">
        {BACKEND_PENDING.map((item) => (
          <li key={item.id} className="space-y-1 px-4 py-3">
            <code className="text-sm font-semibold">{item.id}</code>
            <p className="text-sm text-zinc-700">{item.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
