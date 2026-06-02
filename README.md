
# R3 Source Engine Website

A production-ready React/Vite frontend scaffold for the R3 Source Engine website and admin web application.

## Run locally

```bash
cd website
npm install
npm run dev
```

Open the local Vite URL shown in terminal.

## Build

```bash
npm run build
npm run preview
```

## What is included

- Customer web flow
- Vendor RFQ web flow
- Rajesh/Admin dashboard
- Sourcing agent web view
- Management dashboard
- Mock API service
- Brand tokens from R3 guideline
- Screen-by-screen UX specs embedded in code

## Replace before production

- `src/services/mockApi.ts` with real backend calls
- WhatsApp Business API credentials
- Payment gateway credentials
- Odoo inventory integration
- Production auth and permissions
