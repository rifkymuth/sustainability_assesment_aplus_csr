# A+ CSR — ESG Sustainability Self-Assessment

A Next.js + MongoDB web app that helps companies self-assess their ESG
performance against a unified set of indicators distilled from GRI, SASB,
MSCI, S&P Global and Sustainalytics.

## What's in this build

This is the first cut of the marketing & shell experience. It includes:

- **Landing page** (`/`) — hero, how-it-works, features, testimonial, CTA.
- **About / Learn more** (`/about`) — mission, methodology, frameworks, team,
  FAQ, contact CTA.
- **Pricing** (`/pricing`) — three-tier plans with monthly/annual toggle and a
  feature comparison table.
- **Self-assessment** (`/assessment`) — *mockup*. Sectioned questionnaire UI
  with mocked progress and questions.
- **Results & review** (`/results`) — *mockup*. Score panel, framework
  reconciliation, risk register, improvement roadmap, export CTA.
- **Indicator library** (`/indicators`) — *mockup*. Filterable indicator list
  with framework cross-walks and a per-indicator document checklist.

The actual scoring engine and full indicator repository are intentionally
deferred — the UI assumes them and is wired up to plug in once the data is
ready.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [MongoDB](https://www.mongodb.com/) via the official Node driver
- Google Fonts: Inter (UI) + Fraunces (display)

## Getting started

```bash
# 1. install dependencies
npm install

# 2. configure environment
cp .env.example .env.local
# then edit MONGODB_URI

# 3. run the dev server
npm run dev
```

Visit http://localhost:3000.

The MongoDB connection is optional for browsing the marketing pages. A health
check endpoint is exposed at `/api/health` which gracefully reports if
`MONGODB_URI` is not configured.

## Project structure

```
app/
  layout.tsx          # Root layout, fonts, navbar/footer wiring
  globals.css         # Tailwind layers + design tokens
  page.tsx            # Landing
  about/page.tsx      # Learn more / About us
  pricing/page.tsx    # Pricing
  assessment/page.tsx # Self-assessment (mockup)
  results/page.tsx    # Results & review (mockup)
  indicators/page.tsx # Unified indicator library (mockup)
  api/health/route.ts # MongoDB health check
components/
  Navbar.tsx
  Footer.tsx
lib/
  mongodb.ts          # Connection helper (cached in dev)
```

## Design language

Curved, generous corners (`rounded-3xl`, `rounded-blob`), soft gradients and a
restrained palette pulled directly from the brief:

| Token         | Hex       |
|---------------|-----------|
| `pale-sky`    | `#b3d5e9` |
| `ash-grey`    | `#bdbea9` |
| `muted-teal`  | `#8db38b` |
| `jungle-teal` | `#56876d` |
| `deep-teal`   | `#3f6451` |
| `cream`       | `#f8f7f2` |

## Next up

- Wire the questionnaire to a `Mongo` `assessments` collection.
- Build the scoring engine and replace the mock score panel.
- Seed the unified indicator library and replace the mock data set.
- Generate downloadable PDF reports.
