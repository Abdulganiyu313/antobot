# AntoBot – MVP Scaffold

This repo contains a single Next.js app that will host both the web frontend and backend (API routes).
We will paste UI screen-by-screen from the Stitch export and wire payments with Square in phases.

## Folders
- /design: raw Stitch export and screen→route mapping
- /public: static assets (images, favicons)
- /src/app: App Router pages and API route handlers
- /src/styles: tokens and global styles
- /src/components: shared UI parts (we'll lift them out gradually)
- /src/lib: integrations (db, auth, s3, payments) added later

## Build Approach (Paste-as-you-go)
1) Paste Pricing screen → /pricing
2) Paste Dashboard (active) → /dashboard
3) Paste Payment success → /payment/success
4) Paste Contact → /contact
5) Paste Legal → /legal
6) Paste Auth UIs → /sign-in, /sign-up, /forgot-password
7) Paste Home last → /

See /design/mapping.md for exact screen→route mapping.
