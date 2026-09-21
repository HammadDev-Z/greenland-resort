# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page marketing site for Greenland Resort (a hotel in Skardu, Gilgit-Baltistan, Pakistan), built with Next.js App Router. It was originally scaffolded by v0.app (see `.gitignore`'s v0-sandbox entries and `generator: 'v0.app'` in [app/layout.tsx](app/layout.tsx)). There is no backend, database, or CMS — all copy, images, and links are hardcoded in [app/page.tsx](app/page.tsx). The only real user actions are contacting the resort via WhatsApp deep links or a phone `tel:` link.

## Commands

Package manager is pnpm (`packageManager` pinned in [package.json](package.json)).

```bash
pnpm install
pnpm dev
pnpm build
pnpm start
```

There is no lint script and no test suite configured in this repo.

## Architecture

- **Everything lives in one page.** [app/page.tsx](app/page.tsx) is the entire site: nav, hero, about, amenities, dining, gallery, "why stay", booking CTA, location, and footer are all sections in a single `Page` component, navigated via in-page `#anchor` links rather than routes. When asked to "add a section" or "edit the X section," look here first — there usually isn't a separate route or component file.
- **Content-as-data-arrays pattern.** Repeated content blocks (facilities, amenities, gallery images, experience cards, "why stay" items) are defined as arrays/tuples near the top of `page.tsx` and rendered via `.map()`, rather than hand-written JSX per item. Follow this pattern when adding similar repeated content instead of writing out each block.
- **Contact info is centralized at the top of page.tsx**: the `phone` constant and `whatsapp()` helper (which builds a `wa.me` deep link with an optional prefilled message) are used everywhere a booking/contact CTA appears. Update the phone number or default message in one place.
- **Styling is hand-written CSS only** — there is no Tailwind, shadcn/ui, or any CSS framework in this project (they were part of the original v0.app scaffold but were fully unused and have been removed). [app/globals.css](app/globals.css) contains BEM-ish class names (`.hero`, `.stay`, `.amenity-grid`, etc.) with custom properties for the theme palette (`--forest`, `--ivory`, `--gold`, `--sand`, ...) and its own responsive breakpoints at the bottom of the file (`850px`, `480px`, plus a `prefers-reduced-motion` block). There's no PostCSS config either — just plain CSS through Next's built-in pipeline.
- **Images are local WebP files in `public/gallery/`**, compressed and resized (max 1600px edge, quality 80) rather than used at original camera resolution — PNG/JPEG originals from the client are far too large to ship as-is (2-3MB each). When adding new photos, convert them the same way before wiring them into `page.tsx` (a temporary `sharp` install via `npm install --no-save sharp` is the quickest path since the project has no image-processing dependency of its own). `next.config.mjs` sets `images.unoptimized: true` and every image is a plain `<img>` (not `next/image`), so pre-compressing source files is the only optimization path — Next won't resize/convert them for you. Below-the-fold `<img>` tags carry `loading="lazy" decoding="async"`; the hero and booking-cta images are CSS `background-image` (always eager, which is correct since hero is above the fold).
- **TypeScript build errors are ignored at build time** (`typescript.ignoreBuildErrors: true` in `next.config.mjs`), so `pnpm build` will succeed even with type errors — don't rely on a clean build as a type-safety signal; check types separately if it matters.
- Path alias `@/*` maps to the repo root (see [tsconfig.json](tsconfig.json)).
- This environment only has `npm` available, not `pnpm` (the pinned package manager) — `corepack enable` fails here without admin rights. Editing `package.json` and running `npm install --no-package-lock` keeps `node_modules` in sync locally without generating a `package-lock.json` that would conflict with the committed `pnpm-lock.yaml`; let `pnpm install` regenerate the real lockfile wherever pnpm is actually available.
