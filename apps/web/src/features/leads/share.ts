import { z } from 'zod';

const waitlistSchema = z.object({
  email: z.string().email(),
});

export type WaitlistResult = {
  ok: boolean;
  message: string;
};

export function buildShareText(input: {
  name: string;
  businessSummary: string;
  pageUrl: string;
}): string {
  return `${input.name}\n${input.businessSummary}\n${input.pageUrl}`;
}

export function whatsappHref(text: string): string {
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

export function telegramHref(pageUrl: string, text: string): string {
  const url = new URL('https://t.me/share/url');
  url.searchParams.set('url', pageUrl);
  url.searchParams.set('text', text);
  return url.toString();
}

export function submitWaitlist(email: string): WaitlistResult {
  const parsed = waitlistSchema.safeParse({ email });
  if (!parsed.success) {
    return { ok: false, message: 'Enter a valid email.' };
  }
  return {
    ok: true,
    message: 'Alerts are not live yet. This address was not saved.',
  };
}
