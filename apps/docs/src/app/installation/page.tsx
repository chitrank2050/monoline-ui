import { Card } from "@chitrank2050/monoline-ui"

import { CommandTabs } from "../../components/command-tabs"
import { DocsShell } from "../../components/docs-shell"

const toc = [
	{ id: "package", label: "Package" },
	{ id: "css", label: "Theme CSS" },
	{ id: "usage", label: "Usage" },
] as const

export default function InstallationPage() {
	return (
		<DocsShell
			eyebrow="Installation"
			title="Install Monoline UI"
			description="Use the public package in Next.js or Vite and import the shared theme CSS once near the app root."
			toc={[...toc]}
		>
			<section id="package" className="docs-section">
				<CommandTabs />
			</section>

			<section id="css" className="docs-section">
				<Card className="rounded-[1.75rem]">
					<Card.Header>
						<Card.Title>Theme CSS</Card.Title>
						<Card.Description>
							Import the shared CSS entrypoint once.
						</Card.Description>
					</Card.Header>
					<Card.Content>
						<pre className="docs-code">
							<code>{`import "@chitrank2050/monoline-ui/theme.css"`}</code>
						</pre>
					</Card.Content>
				</Card>
			</section>

			<section id="usage" className="docs-section">
				<Card className="rounded-[1.75rem]">
					<Card.Header>
						<Card.Title>Usage</Card.Title>
						<Card.Description>
							Import the pieces you need from the package.
						</Card.Description>
					</Card.Header>
					<Card.Content>
						<pre className="docs-code">
							<code>{`import { Button, Card, Navbar } from "@chitrank2050/monoline-ui"`}</code>
						</pre>
					</Card.Content>
				</Card>
			</section>
		</DocsShell>
	)
}
