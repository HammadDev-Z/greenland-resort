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
- **Styling is hand-written CSS, not Tailwind utility classes**, despite Tailwind/shadcn being installed. [app/globals.css](app/globals.css) contains BEM-ish class names (`.hero`, `.stay`, `.amenity-grid`, etc.) with custom properties for the theme palette (`--forest`, `--ivory`, `--gold`, `--sand`, ...) and its own responsive breakpoints at the bottom of the file (`850px`, `480px`, plus a `prefers-reduced-motion` block). When changing visual design, edit these CSS rules directly rather than introducing Tailwind classes into `page.tsx`.
- **shadcn/ui is present but barely used.** [components/ui/button.tsx](components/ui/button.tsx) is the only generated primitive, built on `@base-ui/react` (not Radix) with `class-variance-authority` for variants, per the `"style": "base-nova"` config in [components.json](components.json). The page itself doesn't use it — its buttons are plain `<a className="button ...">` elements styled via `globals.css`. Use `npx shadcn add <component>` to pull in more primitives if needed; they'll land in `components/ui/` and follow the same CVA + `cn()` (from [lib/utils.ts](lib/utils.ts)) pattern.
- **Images are unoptimized external URLs.** `next.config.mjs` sets `images.unoptimized: true`, and every image in `page.tsx` is a plain `<img src="https://images.unsplash.com/...">` rather than `next/image`. There's no local image pipeline for content photos (the `public/` folder only holds favicons and generic placeholders).
- **TypeScript build errors are ignored at build time** (`typescript.ignoreBuildErrors: true` in `next.config.mjs`), so `pnpm build` will succeed even with type errors — don't rely on a clean build as a type-safety signal; check types separately if it matters.
- Path alias `@/*` maps to the repo root (see [tsconfig.json](tsconfig.json) and the `aliases` in `components.json`).
