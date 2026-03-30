"use client"

import { Button, cn } from "@chitrank2050/monoline-ui"
import { useState } from "react"

const managers = ["pnpm", "npm", "yarn", "bun"] as const

const installCommands = {
	pnpm: "pnpm add @chitrank2050/monoline-ui",
	npm: "npm install @chitrank2050/monoline-ui",
	yarn: "yarn add @chitrank2050/monoline-ui",
	bun: "bun add @chitrank2050/monoline-ui",
} as const

export function CommandTabs() {
	const [active, setActive] = useState<(typeof managers)[number]>("pnpm")

	return (
		<div className="bg-card rounded-[1.5rem] border border-border/80 p-4 shadow-[var(--shadow-soft)]">
			<div className="mb-4 flex flex-wrap gap-2">
				{managers.map((manager) => (
					<Button
						key={manager}
						type="button"
						size="sm"
						variant={active === manager ? "default" : "ghost"}
						className={cn(
							"rounded-full px-3",
							active !== manager && "text-muted-foreground"
						)}
						onClick={() => setActive(manager)}
					>
						{manager}
					</Button>
				))}
			</div>
			<pre className="docs-code">
				<code>{installCommands[active]}</code>
			</pre>
		</div>
	)
}
