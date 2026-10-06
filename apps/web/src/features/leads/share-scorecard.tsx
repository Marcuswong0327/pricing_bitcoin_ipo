import { buildShareText, telegramHref, whatsappHref } from '@/features/leads/share';

export function ShareScorecard({
  name,
  businessSummary,
  pageUrl,
}: {
  name: string;
  businessSummary: string;
  pageUrl: string;
}) {
  const text = buildShareText({ name, businessSummary, pageUrl });

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">Send this scorecard</p>
      <p className="text-xs text-muted-foreground">
        WhatsApp and Telegram open from this page. They are not a backend job.
      </p>
      <div className="flex flex-wrap gap-2">
        <a
          href={whatsappHref(text)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 items-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground"
        >
          WhatsApp
        </a>
        <a
          href={telegramHref(pageUrl, text)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 items-center rounded-md border bg-background px-3 text-sm font-medium"
        >
          Telegram
        </a>
      </div>
    </div>
  );
}
