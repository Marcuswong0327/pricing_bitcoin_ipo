import { PendingBackendList } from '@/features/backend-pending/pending-backend-list';
import { VolatilityBoard } from '@/features/crypto/volatility-board';
import { IpoPipeline } from '@/features/ipo/ipo-pipeline';

export default function HomePage() {
  const nowIso = new Date().toISOString();

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8">
      <header className="space-y-2">
        <p className="text-sm font-medium text-primary">AlphaRadar</p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Bursa IPO pipeline and crypto volatility
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Sample listings and sample coin moves for the layout. The web app is on port 3002. The
          API on port 3003 is not running.
        </p>
      </header>
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <IpoPipeline nowIso={nowIso} />
        <VolatilityBoard />
      </div>
      <PendingBackendList />
    </main>
  );
}
