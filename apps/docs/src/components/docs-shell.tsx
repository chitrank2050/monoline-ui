import { Badge, Button, Navbar, SectionHeader } from "@chitrank2050/monoline-ui"

import type { TocItem } from "../lib/docs"
import { DocsSidebar } from "./docs-sidebar"
import { OnThisPage } from "./on-this-page"
import { PaletteSwitcher } from "./palette-switcher"
import { ThemeToggle } from "./theme-toggle"

export function DocsShell({
	eyebrow,
	title,
	description,
	toc,
	children,
}: {
	eyebrow: string
	title: string
	description: string
	toc: readonly TocItem[]
	children: React.ReactNode
}) {
	return (
		<div className="min-h-screen">
			<Navbar
				brand="Monoline UI"
				links={[
					{ href: "/introduction", label: "Docs" },
					{ href: "/components/button", label: "Components" },
					{ href: "/foundations/typography", label: "Foundations" },
				]}
				actions={
					<>
						<div className="hidden xl:flex">
							<ThemeToggle />
						</div>
						<div className="hidden xl:flex">
							<PaletteSwitcher />
						</div>
						<Button
							asChild
							variant="outline"
							className="hidden rounded-full lg:flex"
						>
							<a href="/installation">Install</a>
						</Button>
					</>
				}
			/>

			<div className="shell py-6 sm:py-8">
				<div className="grid gap-8 xl:grid-cols-[240px_minmax(0,1fr)_220px]">
					<aside className="hidden xl:sticky xl:top-24 xl:block xl:self-start">
						<div className="panel p-5">
							<div className="mb-5 space-y-3 border-b pb-5">
								<Badge variant="outline" className="rounded-full font-mono">
									Docs
								</Badge>
								<p className="text-muted-foreground text-sm leading-6">
									Foundations, installation, and components in one navigation
									system.
								</p>
							</div>
							<DocsSidebar />
						</div>
					</aside>

					<main className="min-w-0">
						<div className="panel overflow-hidden">
							<div className="border-b px-6 py-5 sm:px-8">
								<SectionHeader
									eyebrow={eyebrow}
									title={title}
									description={description}
								/>
							</div>
							<div className="px-6 py-6 sm:px-8 sm:py-8">{children}</div>
						</div>
					</main>

					<aside className="hidden xl:sticky xl:top-24 xl:block xl:self-start">
						<OnThisPage items={toc} />
					</aside>
				</div>
			</div>
		</div>
	)
}
