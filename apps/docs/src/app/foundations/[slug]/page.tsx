import {
	spacingScale,
	themeModes,
	typographyScale,
} from "@chitrank2050/monoline-tokens"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@chitrank2050/monoline-ui"
import { notFound } from "next/navigation"

import { DocsShell } from "../../../components/docs-shell"

const pages = {
	colors: {
		eyebrow: "Foundations",
		title: "Colors",
		description:
			"Semantic tokens let the system adapt to appearance and palette changes without rewriting component classes.",
		toc: [
			{ id: "semantic", label: "Semantic Tokens" },
			{ id: "palettes", label: "Palettes" },
		],
	},
	typography: {
		eyebrow: "Foundations",
		title: "Typography",
		description:
			"Inter handles interface copy, IBM Plex Mono gives structure, Caveat adds signature character, and Manrope drives headlines.",
		toc: [
			{ id: "stack", label: "Font Stack" },
			{ id: "scale", label: "Type Scale" },
		],
	},
	spacing: {
		eyebrow: "Foundations",
		title: "Spacing",
		description:
			"A compact but flexible spacing system tuned for product layouts, cards, and editorial sections.",
		toc: [
			{ id: "scale", label: "Spacing Scale" },
			{ id: "usage", label: "Usage" },
		],
	},
} as const

export function generateStaticParams() {
	return Object.keys(pages).map((slug) => ({ slug }))
}

export default async function FoundationsPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const page = pages[slug as keyof typeof pages]

	if (!page) {
		notFound()
	}

	return (
		<DocsShell
			eyebrow={page.eyebrow}
			title={page.title}
			description={page.description}
			toc={page.toc}
		>
			{slug === "colors" ? (
				<>
					<section id="semantic" className="docs-section">
						<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
							{[
								{
									label: "Primary",
									className: "bg-primary text-primary-foreground",
								},
								{
									label: "Secondary",
									className: "bg-secondary text-secondary-foreground",
								},
								{
									label: "Muted",
									className: "bg-muted text-muted-foreground",
								},
								{
									label: "Card",
									className: "bg-card text-card-foreground border",
								},
							].map((swatch) => (
								<div
									key={swatch.label}
									className={`rounded-[1.5rem] p-5 ${swatch.className}`}
								>
									<p className="label-eyebrow mb-3 opacity-80">Token</p>
									<p className="font-mono text-lg font-semibold">
										{swatch.label}
									</p>
								</div>
							))}
						</div>
					</section>

					<section id="palettes" className="docs-section">
						<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
							{themeModes.map((theme) => (
								<Card key={theme.id} className="rounded-[1.75rem]">
									<CardHeader>
										<CardTitle>{theme.label}</CardTitle>
										<CardDescription>{theme.description}</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex gap-2">
											{theme.swatches.map((swatch) => (
												<div
													key={swatch}
													className="size-10 rounded-full border border-black/10"
													style={{ backgroundColor: swatch }}
												/>
											))}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</section>
				</>
			) : null}

			{slug === "typography" ? (
				<>
					<section id="stack" className="docs-section">
						<div className="grid gap-4 lg:grid-cols-2">
							{[
								{
									label: "Headline",
									variable: "--font-headline",
									className: "font-headline text-3xl font-semibold",
									copy: "Manrope shapes the major headings.",
								},
								{
									label: "Sans",
									variable: "--font-inter-sans",
									className: "font-sans text-lg",
									copy: "Inter keeps product copy readable and calm.",
								},
								{
									label: "Mono",
									variable: "--font-plex-mono",
									className: "font-mono text-lg font-semibold",
									copy: "IBM Plex Mono adds structure to labels and metrics.",
								},
								{
									label: "Script",
									variable: "--font-caveat-script",
									className: "font-script text-3xl text-primary",
									copy: "Caveat is reserved for signature accents.",
								},
							].map((font) => (
								<Card key={font.label} className="rounded-[1.75rem]">
									<CardHeader>
										<CardTitle>{font.label}</CardTitle>
										<CardDescription>{font.variable}</CardDescription>
									</CardHeader>
									<CardContent>
										<p className={font.className}>{font.copy}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</section>

					<section id="scale" className="docs-section">
						<Card className="rounded-[1.75rem]">
							<CardContent className="space-y-4 pt-6">
								{typographyScale.map((item) => (
									<div
										key={item.label}
										className="border-border/70 border-b pb-4 last:border-b-0"
									>
										<p className={item.className}>{item.preview}</p>
										<p className="text-muted-foreground mt-2 text-sm">
											{item.label}
										</p>
									</div>
								))}
							</CardContent>
						</Card>
					</section>
				</>
			) : null}

			{slug === "spacing" ? (
				<>
					<section id="scale" className="docs-section">
						<Card className="rounded-[1.75rem]">
							<CardContent className="space-y-4 pt-6">
								{spacingScale.map((item) => (
									<div key={item.token} className="flex items-center gap-4">
										<code className="text-muted-foreground w-10 font-mono text-xs">
											{item.token}
										</code>
										<div
											className="bg-primary/75 h-3 rounded-full"
											style={{ width: item.preview }}
										/>
										<span className="text-muted-foreground text-sm">
											{item.rem}
										</span>
									</div>
								))}
							</CardContent>
						</Card>
					</section>

					<section id="usage" className="docs-section">
						<pre className="docs-code">
							<code>{`Use spacing tokens consistently for cards, sections, and vertical rhythm.`}</code>
						</pre>
					</section>
				</>
			) : null}
		</DocsShell>
	)
}
