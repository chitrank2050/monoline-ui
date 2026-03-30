export const themeModes = [
	{
		id: "neutral",
		label: "Neutral",
		description:
			"The most shadcn-like baseline. Balanced, quiet, and a strong default for product UI.",
		swatches: ["#18181b", "#71717a", "#f4f4f5"],
	},
	{
		id: "zinc",
		label: "Zinc",
		description:
			"A slightly cooler neutral with a crisp product feel that still stays understated.",
		swatches: ["#27272a", "#71717a", "#fafafa"],
	},
	{
		id: "stone",
		label: "Stone",
		description:
			"A warmer neutral that feels a bit more editorial without drifting into a brand color.",
		swatches: ["#292524", "#78716c", "#fafaf9"],
	},
	{
		id: "slate",
		label: "Slate",
		description:
			"A more technical neutral, useful when you want the interface to feel sharper and cooler.",
		swatches: ["#0f172a", "#64748b", "#f8fafc"],
	},
] as const

export const foundationGroups = [
	{
		title: "Color tokens",
		items: [
			"Semantic variables for surface, content, borders, states, and accents.",
			"Light and dark modes share the same system vocabulary.",
			"Palette modes can shift the whole UI character without rewriting components.",
		],
	},
	{
		title: "Type system",
		items: [
			"Sans for readability, mono for structure, script for signature moments.",
			"Headline and supporting scales are documented together.",
			"Components inherit typography instead of redefining it each time.",
		],
	},
	{
		title: "Spatial rules",
		items: [
			"Spacing tokens are tuned for cards, sections, forms, and dense layouts.",
			"Radius and shadow tokens create consistency across all surface types.",
			"Motion is subtle and intentional rather than decorative noise.",
		],
	},
] as const

export const typographyScale = [
	{
		label: "Display / Mono",
		token: "--type-display",
		className: "font-mono text-4xl sm:text-5xl font-semibold tracking-tight",
		preview: "Structured headline",
	},
	{
		label: "Signature / Script",
		token: "--type-signature",
		className: "font-script text-3xl text-primary",
		preview: "Human touch",
	},
	{
		label: "Body / Sans",
		token: "--type-body",
		className: "font-sans text-base text-muted-foreground",
		preview: "Readable interface copy",
	},
] as const

export const spacingScale = [
	{ token: "2", rem: "0.5rem", preview: "2rem" },
	{ token: "4", rem: "1rem", preview: "4rem" },
	{ token: "6", rem: "1.5rem", preview: "6rem" },
	{ token: "8", rem: "2rem", preview: "8rem" },
	{ token: "12", rem: "3rem", preview: "12rem" },
	{ token: "16", rem: "4rem", preview: "16rem" },
] as const
