# Product Requirements Document (PRD)

## Project Name: AlphaRadar (Bursa IPO & Crypto Volatility Terminal)
**Target Market:** Malaysian retail investors (aged 20–35) seeking high-leverage asymmetric investment opportunities.  
**Core Value Proposition:** A high-signal, low-friction radar tracking Malaysia IPO listing lifecycles and real-time 15–30 minute crypto volatility, supercharged with automated AI synthesis for instant decision-making.

---

## 1. Problem Statement
1. **Information Asymmetry in Bursa IPOs:** Retail investors miss short balloting windows (5–7 days) and fail to parse 300+ page prospectus documents for key metrics (valuation, peer P/E, debt payoff vs. expansion use of proceeds).
2. **Lagging Crypto Volatility Context:** When an altcoin surges 10–25% in 15–30 minutes, retail traders discover it too late and lack immediate context on *why* it moved.
3. **Fragmented Tracking:** Investors currently alternate between KLSE screener forums, Bursa regulatory portals, CoinGecko, and Twitter. There is no unified, high-speed dashboard.

---

## 2. Target Personas & User Journeys

### Primary Persona: The "Listing Pop" & Momentum Trader
- **Goal:** Apply for Bursa IPOs with high upside potential; catch fast-moving crypto momentum.
- **Needs:** Clear visual deadlines (countdown timers), 5-bullet AI prospectuses, and instant volatility alerts.

### User Journey A: IPO Tracking
1. Land on homepage $\to$ View **Bursa IPO Pipeline**.
2. Filter by status: `Exposure` $\to$ `Prospectus Launched` $\to$ `Open for Balloting` $\to$ `Closed` $\to$ `Listed`.
3. Click an IPO card $\to$ Read **AI TL;DR Scorecard** (Business model, P/E vs Peers, Proceeds Breakdown, Top Risks).
4. Click CTA: *"Open CDS Account via Moomoo/Broker to Apply"* (affiliate referral).

### User Journey B: 15–30 Min Crypto Volatility
1. View **Real-Time Volatility Board**.
2. Filter top gainers/losers over 15m or 30m windows (filtered by minimum $5M 24h volume to avoid illiquid micro-caps).
3. View AI **Catalyst Tag** (e.g., *"Binance Listing"*, *"Protocol Exploit"*, *"Unusual Whale Volume"*).

---

## 3. Core Functional Requirements

### 3.1 Module 1: Malaysia IPO Engine
* **FR-1.1:** Display active IPOs categorized by lifecycle phase with countdown timers to closing dates.
* **FR-1.2:** Store and display core metadata: Issue Price, Total Shares, Opening/Closing Date, Balloting Date, Listing Date, Retail Oversubscription Rate (when published).
* **FR-1.3:** AI RAG Prospectus Summary displaying:
  - 2-sentence business summary.
  - Peer comparative P/E.
  - Utilization of proceeds pie/breakdown (% growth vs. % debt repayment).
  - Top 3 risk factors extracted verbatim from prospectus Chapter 5.
* **FR-1.4:** PDF Download link pointing to the official Bursa Malaysia/SC exposure page.

### 3.2 Module 2: Crypto Volatility Radar (15m & 30m)
* **FR-2.1:** Ingest price and volume data for Top 200 liquid coins at 5-minute intervals.
* **FR-2.2:** Calculate percentage delta:
  $$\Delta_{15m} = \frac{P_{t} - P_{t-15m}}{P_{t-15m}} \times 100$$
  $$\Delta_{30m} = \frac{P_{t} - P_{t-30m}}{P_{t-30m}} \times 100$$
* **FR-2.3:** Highlight coins with absolute price change $> \pm 5\%$ within 15–30 mins.
* **FR-2.4:** Automated Catalyst Detection: Trigger an LLM web search agent on price spikes $> 8\%$ to output a 1-sentence catalyst tag.

### 3.3 Module 3: Conversion & Lead Gen (Affiliate Layer)
* **FR-3.1:** Dynamic affiliate banner placement on IPO cards (e.g., Moomoo Malaysia, Rakuten Trade, Luno).
* **FR-3.2:** One-click "Send to WhatsApp / Telegram" button for instant sharing of AI IPO scorecards.
* **FR-3.3:** Waitlist/Email capture modal for "Real-Time Volatility Alerts".

---

## 4. Data Verification & Competitive Benchmarking (CRITICAL)
To ensure the platform maintains high data integrity and provides actual value over existing tools, developers and content strategists must adhere to the following:
* **Source of Truth:** Check the [official Bursa Malaysia IPO Summary page](https://www.bursamalaysia.com/listing/listing_resources/ipo/ipo_summary) if you need to double-check a strict application closing date or grab an official prospectus. 
* **Analytical Benchmark:** Use the **iSaham IPO Dashboard** when evaluating if an IPO is worth subscribing to, as they layer crucial analytical data over the base schedule. Our AI Prospectus Summarizer (FR-1.3) must capture enough raw metrics to provide a similar or superior level of immediate analytical value (e.g., scoring, peer comparisons) to compete effectively.

---

## 5. Non-Functional Requirements
* **Performance:** Mobile page load under 1.5s on 4G networks; core dashboard hydration $< 500\text{ms}$.
* **Data Freshness:** Crypto intervals updated every 60 seconds; IPO registry synced 4x daily during business hours.
* **Cost Efficiency:** Architecture must run within free/micro tiers ($< \$15/\text{month}$ total infrastructure cost during MVP).