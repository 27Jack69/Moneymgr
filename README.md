# MoneyMgr – Personal Finance Tracker (PWA)

Single-file, offline-capable Progressive Web App for tracking income, expenses, budgets, and savings goals. No backend — all data stored locally via IndexedDB.

## Features

- **Auth** — Email/password register & login (local, hashed password stored in IndexedDB)
- **Transactions** — Add/edit/delete income & expenses, categories, descriptions, recurring entries (daily/weekly/monthly, auto-generates next 3 occurrences), swipe-to-edit/delete on mobile
- **AI Category Suggestion** — Calls Claude API to suggest a category from transaction description (debounced, 800ms)
- **Budgets** — Monthly per-category limits, progress bars, over-budget alerts on dashboard
- **Goals** — Savings goals with target amount, deadline, deposit tracking, completion badge
- **Dashboard** — Net balance hero card, income/expense/goals/budget stat cards, category doughnut chart, 6-month income vs expense bar chart, recent transactions, budget alert banners
- **Reports** — Monthly income/expense/savings summary, category breakdown (pie + bar list), CSV export
- **Profile/Settings** — Currency selector (10 currencies), 4-digit PIN lock (set/change/disable, re-prompts on tab return), data export, logout, wipe all data
- **PWA** — Installable (manifest + service worker inlined as base64/blob), works offline, quick-add floating action button

## Tech Stack

- Vanilla JS, HTML, CSS — no build step
- IndexedDB for storage (`MoneyMgrDB2`: users, transactions, budgets, goals, session, settings)
- Chart.js (CDN) for charts
- Font Awesome (CDN) for icons
- Google Fonts: Outfit + JetBrains Mono

## Usage

1. Open the HTML file in a browser (Chrome/Edge recommended for install prompt).
2. Register an account (stored locally — not synced anywhere).
3. Add transactions, set budgets, create goals.
4. Optional: enable PIN lock in Profile → Settings.
5. Optional: click "Install" to add as a home-screen app.

## Data & Privacy

All data lives in the browser's IndexedDB on-device. Clearing browser data/site data deletes everything. "Clear All Data" in Settings wipes the database permanently.

## Notes

- AI category suggestion calls `api.anthropic.com` directly from the client — requires network access and a valid setup to work; fails silently (suggestion box hides) if unreachable.
- No real backend/sync — each browser/device has independent data.
- Converting to APK: see in-app guide (Profile → "How to convert to APK") — covers PWABuilder and Capacitor routes.

## File Structure

Single `index.html` file containing:
- Inline CSS (design tokens, components)
- Inline manifest (base64 data URI)
- Inline service worker (registered via Blob URL)
- All JS: DB layer, auth, nav, feature logic
