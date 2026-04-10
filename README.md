# 💰 MoneyMgr — Personal Finance Tracker

> A powerful, offline-first personal finance PWA built with pure HTML, CSS & JavaScript. No frameworks. No backend. No internet required.
> Note : This webapp work on local memory(on your computer/moblie memory)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [PWA Installation](#pwa-installation)
- [Convert to Android APK](#convert-to-android-apk)
- [Tech Stack](#tech-stack)
- [Version History](#version-history)

---

## Overview

MoneyMgr is a fully offline, installable personal finance tracker. All your data is stored locally on your device using IndexedDB — nothing is sent to any server. It works as a Progressive Web App (PWA), meaning you can install it on your phone or desktop just like a native app.

---

## ✨ Features

### Core Features
| Feature | Description |
|---|---|
| 🔐 Auth | Register & login with email + password (stored locally) |
| 💸 Transactions | Add income & expense transactions with category, date, description |
| 📊 Budgets | Set monthly spending limits per category with progress tracking |
| 🎯 Goals | Create savings goals with deadlines and deposit tracking |
| 📈 Reports | Monthly reports with charts, category breakdown, and CSV export |
| 🌐 Multi-currency | Supports USD, INR, EUR, GBP, JPY, KRW, TRY, BRL, CAD, AUD |

### New in v5
| Feature | Description |
|---|---|
| 🔒 PIN Lock | 4-digit PIN to protect the app on open and resume |
| 🤖 AI Category | Claude AI auto-suggests transaction category from description |
| ⚡ Quick Add FAB | Floating button for instant expense/income entry from any screen |
| 🔔 Budget Alerts | Dashboard warnings when budgets hit 80% or 100% |
| 🔁 Recurring | Daily / weekly / monthly recurring transactions |
| ✏️ Edit & Swipe | Edit any transaction; swipe left to delete, swipe right to edit |

### Navigation (v4)
| Feature | Description |
|---|---|
| ← Back Button | Back button in header on all non-home pages |
| 🏷️ Page Titles | Header shows current page name dynamically |
| 📚 Nav History | Full navigation history stack with correct back behaviour |

---

## 📁 File Structure

```
MoneyMgr/
├── index.html     # App structure — all screens, modals, PIN lock, FAB
├── style.css      # All styling — dark theme, animations, components
└── script.js      # All logic — DB, auth, features, charts, PWA
```

> ⚠️ All 3 files must be in the **same folder** to work correctly.

---

## 🚀 Getting Started

### Option 1 — Open directly in browser
1. Download all 3 files into one folder
2. Open `index.html` in Chrome or Edge
3. Register an account and start tracking!

### Option 2 — Run on a local server (recommended for PWA features)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using VS Code
Install "Live Server" extension → Right-click index.html → Open with Live Server
```
Then open `http://localhost:8000` in your browser.

---

## 📖 How to Use

### Adding a Transaction
1. Tap the **Transactions** tab or use the **⚡ FAB** button
2. Select type (Expense / Income), category, amount, date
3. Type a description — **AI will auto-suggest the category**
4. Optionally set a **Repeat** schedule (daily/weekly/monthly)
5. Tap **Add Transaction**

### Setting a Budget
1. Go to **Budgets** tab
2. Select category, set limit amount, choose month & year
3. Tap **Set Budget**
4. Progress bar turns yellow at 75%, red at 100%
5. **Dashboard alerts** appear when any budget hits 80%+

### Creating a Savings Goal
1. Go to **Goals** tab
2. Enter goal title, target amount, and deadline
3. Tap **Add Goal**
4. Use **Add Savings** button to deposit money toward the goal

### PIN Lock
1. Go to **Profile** → Settings
2. Toggle **PIN Lock** on
3. Enter and confirm a 4-digit PIN
4. App will ask for PIN every time it opens or resumes from background
5. To disable: toggle off in Settings

### Quick Add FAB
- Tap the **+** button (bottom-right corner)
- Choose **Add Expense** or **Add Income**
- Fill amount and description — AI suggests the category
- Tap **Add** — done in seconds!

### Edit / Delete a Transaction
- Go to **Transactions** tab
- Tap the **✏️ pen icon** to edit, or **🗑 trash icon** to delete
- On mobile: **swipe left** to delete, **swipe right** to edit

### Export Data
- Go to **Profile** → Data → **Export**
- Downloads a `.csv` file with all your transactions
- Compatible with Excel, Google Sheets, etc.

---

## 📱 PWA Installation

### Android (Chrome)
1. Open `index.html` in Chrome
2. Tap the **3-dot menu** → **Add to Home Screen**
3. Tap **Install**
4. MoneyMgr appears on your home screen like a native app

### iOS (Safari)
1. Open the file in Safari
2. Tap the **Share** button
3. Tap **Add to Home Screen**
4. Tap **Add**

### Desktop (Chrome / Edge)
1. Look for the **install icon** in the address bar
2. Click it and confirm installation
3. App opens in its own window without browser chrome

---

## 📦 Convert to Android APK

### Option 1 — PWABuilder (Easiest, ~5 minutes)
1. Upload your files to [netlify.com](https://netlify.com) (free, drag & drop)
2. Go to [pwabuilder.com](https://pwabuilder.com) → paste your Netlify URL
3. Click **Android** → Download APK
4. Install on your phone (enable Unknown Sources in settings)

### Option 2 — Capacitor (For developers)
```bash
npm install @capacitor/cli @capacitor/core
npx cap init MoneyMgr com.yourname.moneymgr
npx cap add android
# Copy your files into the www/ folder
npx cap open android
# Build APK in Android Studio
```

> Final APK size: approximately **3–4 MB** ✅

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | App structure and all UI screens |
| CSS3 | Styling, dark theme, animations, responsive layout |
| Vanilla JavaScript (ES6+) | All app logic, state, navigation |
| IndexedDB | Local database — stores all user data on device |
| Chart.js 4.4 | Doughnut and bar charts on Dashboard and Reports |
| Font Awesome 6.5 | All icons throughout the app |
| Outfit + JetBrains Mono | Google Fonts used for UI and numbers |
| Anthropic Claude API | AI-powered transaction category suggestions |
| Service Worker | Offline caching for PWA support |

---

## 📜 Version History

| Version | Changes |
|---|---|
| **v5.0** | PIN Lock, AI Category Detection, Quick Add FAB, Budget Alerts, Recurring Transactions, Edit + Swipe to Delete |
| **v4.0** | Back button, dynamic header page titles, navigation history stack |
| **v3.0** | Initial release — auth, transactions, budgets, goals, reports, charts, PWA |

---

## 🗂 Data & Privacy

- **100% local** — all data stays on your device in IndexedDB
- **No server** — nothing is sent anywhere (except AI category calls to Anthropic API)
- **No ads** — completely ad-free
- To move data to another device, use **Export CSV** and re-import manually

---

## 📄 License

Free to use for personal use. Built with ❤️ using pure web technologies.
