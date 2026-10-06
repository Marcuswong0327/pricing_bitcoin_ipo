'use client';

import { useState } from 'react';

import { PANEL_PENDING } from '@/features/backend-pending/items';
import { PendingNotes } from '@/features/backend-pending/pending-notes';
import { submitWaitlist, type WaitlistResult } from '@/features/leads/share';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

export function WaitlistDialog() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<WaitlistResult | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline">
          Real-time volatility alerts
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Volatility alerts</DialogTitle>
          <DialogDescription>
            Leave an email for a later alert list. Nothing is stored in this build.
          </DialogDescription>
        </DialogHeader>
        <PendingNotes ids={PANEL_PENDING.waitlist} />
        <form
          className="space-y-3"
          onSubmit={(event) => {
            event.preventDefault();
            setResult(submitWaitlist(email));
          }}
        >
          <label className="block space-y-1 text-sm" htmlFor="waitlist-email">
            Email
            <Input
              id="waitlist-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="ada@example.com"
            />
          </label>
          <Button type="submit">Check address</Button>
        </form>
        {result ? (
          <p className={result.ok ? 'text-sm text-foreground' : 'text-sm text-destructive'}>
            {result.message}
          </p>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
