# Monoline UI

Monoline UI is a modular design-system monorepo built to showcase product-thinking, interface craft, and production-ready UI architecture.

## Stack

- Next.js app router for the showcase and documentation app
- Tailwind CSS v4 for utility styling and token-driven theming
- shadcn-style component primitives built on Radix Slot and CVA
- Storybook 9 for isolated component exploration
- Vitest and Playwright for quality gates
- Turborepo, pnpm workspaces, Biome, and Changesets for maintainable scale

## Workspace

- `apps/docs`: public docs and showcase site
- `packages/tokens`: theme tokens, palettes, and foundation metadata
- `packages/ui`: reusable UI primitives and stories

## Getting started

```bash
pnpm install
pnpm dev:docs
```

Run Storybook with:

```bash
pnpm storybook
```

## Install the package

Use the public package in either Next.js or Vite:

```bash
pnpm add @chitrank2050/monoline-ui
```

Import the shared theme CSS once near your app entry:

```ts
import "@chitrank2050/monoline-ui/theme.css"
```

Then use the components:

```tsx
import { Button, SectionHeader } from "@chitrank2050/monoline-ui"

export function Hero() {
	return (
		<section>
			<SectionHeader
				eyebrow="System"
				title="Consistent interface building blocks"
				description="Ship polished sections faster with a shared visual language."
			/>
			<Button>Explore components</Button>
		</section>
	)
}
```

## Vercel deploy

Deploy the docs app as the first Vercel project in this monorepo.

Recommended Vercel project settings:

- Root Directory: `apps/docs`
- Framework Preset: `Next.js`
- Install Command: `pnpm install`
- Build Command: `pnpm --filter @chitrank2050/monoline-docs build`

Environment variables:

- `NEXT_PUBLIC_SITE_URL=https://your-production-domain`

Notes:

- `@chitrank2050/monoline-ui` is the public npm package.
- `apps/docs` stays private and acts as the public showcase site.
- `packages/tokens` stays internal for now and supports the docs app and package authoring workflow.

### Storybook later

If you want Storybook publicly deployed later, create a second Vercel project with:

- Root Directory: repository root
- Build Command: `pnpm storybook:build`
- Output Directory: `storybook-static`
