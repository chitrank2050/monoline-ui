import {
	BentoPanel,
	Footer,
	Navbar,
	StatusBadge,
} from "@chitrank2050/monoline-ui"
import { Blocks, Palette, Sparkles } from "lucide-react"

import { DocsShell } from "../../components/docs-shell"

const toc = [
	{ id: "overview", label: "Overview" },
	{ id: "structure", label: "Structure" },
	{ id: "examples", label: "Examples" },
] as const

export default function IntroductionPage() {
	return (
		<DocsShell
			eyebrow="Introduction"
			title="A design library that presents the system like documentation, not a demo"
			description="Monoline UI is moving toward a shadcn-style docs experience where foundations, installation, and components are all first-class pages."
			toc={[...toc]}
		>
			<section id="overview" className="docs-section">
				<div className="grid gap-4 md:grid-cols-3">
					<BentoPanel
						eyebrow="Docs"
						title="Docs-first"
						description="The docs app is the source of truth. Components live inside page-level explanations instead of a separate story tool."
						icon={<Blocks className="size-5" />}
					/>
					<BentoPanel
						eyebrow="Theme"
						title="Neutral palettes"
						description="Light, dark, and neutral-first palette families stay aligned with Tailwind and shadcn naming."
						icon={<Palette className="size-5" />}
					/>
					<BentoPanel
						eyebrow="Build"
						title="Publish-ready"
						description="The UI package ships real build artifacts and a clean npm package instead of raw source exports."
						icon={<Sparkles className="size-5" />}
					/>
				</div>
			</section>

			<section id="structure" className="docs-section">
				<div className="docs-preview space-y-6">
					<StatusBadge label="Available for projects" />
					<Navbar
						brand="Monoline UI"
						links={[
							{ href: "#", label: "Docs" },
							{ href: "#", label: "Components" },
							{ href: "#", label: "Foundations" },
						]}
					/>
					<Footer
						links={[
							{ href: "#", label: "GitHub" },
							{ href: "#", label: "LinkedIn" },
							{ href: "#", label: "Twitter" },
						]}
					/>
				</div>
			</section>

			<section id="examples" className="docs-section">
				<pre className="docs-code">
					<code>{`import { Navbar, Footer, StatusBadge } from "@chitrank2050/monoline-ui"`}</code>
				</pre>
			</section>
		</DocsShell>
	)
}
