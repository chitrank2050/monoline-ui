import { themeModes, typographyScale } from "@chitrank2050/monoline-tokens"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@chitrank2050/monoline-ui"

import { DocsShell } from "../../components/docs-shell"
import { PaletteSwitcher } from "../../components/palette-switcher"
import { ThemeToggle } from "../../components/theme-toggle"

const toc = [
	{ id: "appearance", label: "Appearance" },
	{ id: "palettes", label: "Palettes" },
	{ id: "fonts", label: "Fonts" },
] as const

export default function ThemingPage() {
	return (
		<DocsShell
			eyebrow="Theming"
			title="Appearance, palette, and fonts"
			description="The system uses light and dark appearance, neutral-first palettes, and a four-font stack for different interface roles."
			toc={[...toc]}
		>
			<section id="appearance" className="docs-section">
				<div className="grid gap-4 lg:grid-cols-2">
					<Card className="rounded-[1.75rem]">
						<CardHeader>
							<CardTitle>Appearance</CardTitle>
							<CardDescription>
								Light and dark modes are first-class.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ThemeToggle />
						</CardContent>
					</Card>
					<Card className="rounded-[1.75rem]">
						<CardHeader>
							<CardTitle>Palette</CardTitle>
							<CardDescription>
								Switch the neutral family without changing component structure.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<PaletteSwitcher />
						</CardContent>
					</Card>
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

			<section id="fonts" className="docs-section">
				<div className="space-y-4">
					<div className="grid gap-4 lg:grid-cols-2">
						{[
							{
								label: "Headline",
								variable: "--font-headline",
								className: "font-headline text-3xl font-semibold",
								preview: "Manrope drives display headlines.",
							},
							{
								label: "Sans",
								variable: "--font-inter-sans",
								className: "font-sans text-lg",
								preview: "Inter keeps interface copy readable.",
							},
							{
								label: "Mono",
								variable: "--font-plex-mono",
								className: "font-mono text-lg font-semibold",
								preview: "IBM Plex Mono adds structure and labels.",
							},
							{
								label: "Script",
								variable: "--font-caveat-script",
								className: "font-script text-3xl text-primary",
								preview: "Caveat adds a signature accent.",
							},
						].map((font) => (
							<Card key={font.label} className="rounded-[1.75rem]">
								<CardHeader>
									<CardTitle>{font.label}</CardTitle>
									<CardDescription>{font.variable}</CardDescription>
								</CardHeader>
								<CardContent>
									<p className={font.className}>{font.preview}</p>
								</CardContent>
							</Card>
						))}
					</div>

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
				</div>
			</section>
		</DocsShell>
	)
}
