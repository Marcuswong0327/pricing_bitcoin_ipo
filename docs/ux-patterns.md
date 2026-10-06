# UX patterns

Shared interaction rules for `apps/web`. This product has no signed-in roles and no delete flow, so those patterns are not defined here.

## Lifecycle filter

The IPO pipeline uses one tab set: All, then Exposure, Prospectus Launched, Open for Balloting, Closed, and Listed. The filter changes which cards are visible. It does not change the card contents.

## Countdown

Each IPO shows one closing label, computed in UTC from the closing date:

- `Balloting closed` when the closing date is before today
- `Closes today`
- `Closes in 1 day`
- `Closes in N days`

## Scorecard

The IPO page leads with a sample banner, then the two-sentence business summary, company P/E against the peer median, a proceeds split (growth vs debt repayment), three risks, and a link to the official Bursa IPO summary. Sample copy stays labeled until the prospectus RAG job replaces it.

## Catalyst tags

The volatility board has a 15m/30m window and a gainers/losers switch. Coins under $5M 24h volume are omitted. An absolute move greater than 5% highlights the row. A catalyst badge appears only when the absolute move exceeds 8% and a tag is present.

## Share

WhatsApp and Telegram are links built in the browser from the IPO name, summary, and page URL. They do not call the API.

## Waitlist

The alerts dialog validates the email, then says the address was not saved. It does not show a success state that implies a list was written.
