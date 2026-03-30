export interface DocsNavItem {
	href: string
	label: string
}

export interface DocsNavGroup {
	title: string
	items: DocsNavItem[]
}

export interface TocItem {
	id: string
	label: string
}

export const docsNavigation: DocsNavGroup[] = [
	{
		title: "Info",
		items: [
			{ href: "/introduction", label: "Introduction" },
			{ href: "/installation", label: "Installation" },
			{ href: "/theming", label: "Theming" },
		],
	},
	{
		title: "Foundations",
		items: [
			{ href: "/foundations/colors", label: "Colors" },
			{ href: "/foundations/typography", label: "Typography" },
			{ href: "/foundations/spacing", label: "Spacing" },
		],
	},
	{
		title: "Components",
		items: [
			{ href: "/components/badge", label: "Badge" },
			{ href: "/components/button", label: "Button" },
			{ href: "/components/card", label: "Card" },
			{ href: "/components/input", label: "Input" },
			{ href: "/components/navbar", label: "Navbar" },
			{ href: "/components/footer", label: "Footer" },
			{ href: "/components/status-badge", label: "Status Badge" },
			{ href: "/components/section-header", label: "Section Header" },
			{ href: "/components/stat-card", label: "Stat Card" },
			{ href: "/components/bento-panel", label: "Bento Panel" },
		],
	},
] as const
