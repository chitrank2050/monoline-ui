import type { Decorator, Preview } from "@storybook/nextjs-vite"

import "./storybook.css"

const withMonolineTheme: Decorator = (Story, context) => {
	if (typeof document !== "undefined") {
		const root = document.documentElement
		root.classList.toggle("dark", context.globals.appearance === "dark")
		root.dataset.accent = context.globals.palette
	}

	return Story()
}

const preview: Preview = {
	globalTypes: {
		appearance: {
			name: "Appearance",
			description: "Preview the interface in light or dark mode.",
			defaultValue: "light",
			toolbar: {
				icon: "mirror",
				items: [
					{ value: "light", title: "Light" },
					{ value: "dark", title: "Dark" },
				],
			},
		},
		palette: {
			name: "Palette",
			description: "Swap between Monoline's neutral-first palette families.",
			defaultValue: "neutral",
			toolbar: {
				icon: "paintbrush",
				items: [
					{ value: "neutral", title: "Neutral" },
					{ value: "zinc", title: "Zinc" },
					{ value: "stone", title: "Stone" },
					{ value: "slate", title: "Slate" },
				],
			},
		},
	},
	parameters: {
		layout: "centered",
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [withMonolineTheme],
}

export default preview
