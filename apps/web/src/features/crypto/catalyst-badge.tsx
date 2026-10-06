import { Badge } from '@/components/ui/badge';
import { needsCatalyst } from '@/features/crypto/volatility';

export function CatalystBadge({ delta, catalyst }: { delta: number; catalyst: string | null }) {
  if (!needsCatalyst(delta) || catalyst === null) {
    return <span className="text-muted-foreground">—</span>;
  }

  return <Badge variant="outline">{catalyst}</Badge>;
}
