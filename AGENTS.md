# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 16 portfolio site** (single-page, no backend, no database). See `README.md` for full details.

### Running the app

- **Dev server:** `npm run dev` (serves on `localhost:3000`)
- **Production build:** `npm run build`

### Key notes

- There are no lint or test scripts configured in `package.json`. The project has no ESLint config or test framework.
- The contact form uses a `mailto:` link — it opens the system email client rather than making an API call.
- No environment variables or secrets are required.
- Images reference `images.unsplash.com` / `plus.unsplash.com` via `next.config.js` remote patterns, but no images currently use these in code.
