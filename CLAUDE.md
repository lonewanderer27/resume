# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal resume site built with Astro, deployed to GitHub Pages at `https://lonewanderer27.github.io/resume`. Forked/adapted from a template by Stavrospanakakis; Astro port by lonewanderer27.

## Commands

Package manager is pnpm (per `pnpm-lock.yaml` and CI), though `package.json` scripts are npm-style — either works.

- `pnpm install` — install deps
- `pnpm run dev` — dev server at `localhost:4321`
- `pnpm run build` — runs `astro check` then `astro build`; output to `./dist/`
- `pnpm run preview` — preview production build locally
- `pnpm run astro -- <cmd>` — run Astro CLI commands (e.g. `astro add`)

No test suite or linter is configured. `astro check` (part of `build`) is the only type/consistency check.

## Architecture

- **`src/config.ts`** — site-level config (title, dark mode toggle, description, canonical URL). Typed by `Config` in `src/types.ts`.
- **`src/data.ts`** — all actual resume content (contact, education, experience, skills, projects, etc.), typed against the domain types in `src/types.ts`. This is the file to edit to update resume content.
- **`src/types.ts`** — single source of truth for every data shape used across `data.ts` and the components that render it.
- **`src/pages/index.astro`** — the only page. Imports data from `data.ts` and config from `config.ts`, then composes the sidebar (`Contact`, `Languages`, `Education`, `References`, `Certificates`, `Skills`) and main column (`CareerProfile`, `Experience`, `Publications`, `Projects`, `Volunteering`) inside `Layout`.
- **`src/components/*.astro`** — one component per resume section; each takes its slice of `data.ts` as props. Markup, styles, and any scripts live together in each `.astro` file.
- **Mock data mode**: setting env var `USE_MOCK_DATA=true` makes `index.astro` render `Mock.astro` (backed by `src/mockData.ts`) instead of the real data/component tree — used for testing layout without real resume data. See `.env.example`.
- **Styling**: SCSS via `src/styles/mixins.scss`, auto-injected into every component's `<style>` block via `astro.config.mjs`'s `vite.css.preprocessorOptions.scss.additionalData`. Dark mode support is controlled by `config.supportDarkMode` and passed into `Header`.
- **Astro base path**: site is deployed under a `/resume` base path (`astro.config.mjs`: `site` + `base`) — relevant for any internal links or asset paths.

## CI/CD

- `.github/workflows/deploy.yml` — builds and deploys to GitHub Pages on push to `master`, using pnpm.
- `.github/workflows/upload-pdf-to-release.yml` — after a successful deploy, renders the live site to PDF (via `puppeteer-pdf-action`) and publishes it as a dated GitHub release asset (`Ian_James_Resume_GA.pdf`).
