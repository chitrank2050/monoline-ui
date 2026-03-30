# @chitrank2050/monoline-ui

Monoline UI is a React component library for polished interfaces built with Tailwind CSS and a neutral-first design-system approach.

## Install

```bash
pnpm add @chitrank2050/monoline-ui
```

## Use

Import the shared theme CSS once in your app:

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

## Works well with

- Next.js
- Vite
- Tailwind CSS
- shadcn-style application architectures
