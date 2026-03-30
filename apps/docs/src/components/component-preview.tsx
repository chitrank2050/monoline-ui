"use client"

import { cn } from "@chitrank2050/monoline-ui"
import { Code, Eye } from "lucide-react"
import { useState } from "react"

export function ComponentPreview({
	code,
	children,
	className,
}: {
	code: string
	children: React.ReactNode
	className?: string
}) {
	const [view, setView] = useState<"preview" | "code">("preview")

	return (
		<div className={cn("docs-preview overflow-hidden p-0", className)}>
			<div className="flex items-center justify-between border-b px-4 py-2">
				<div className="flex gap-1 rounded-xl bg-muted/60 p-1">
					<button
						type="button"
						onClick={() => setView("preview")}
						className={cn(
							"inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
							view === "preview"
								? "bg-background text-foreground shadow-sm"
								: "text-muted-foreground hover:text-foreground"
						)}
					>
						<Eye className="size-3.5" />
						Preview
					</button>
					<button
						type="button"
						onClick={() => setView("code")}
						className={cn(
							"inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
							view === "code"
								? "bg-background text-foreground shadow-sm"
								: "text-muted-foreground hover:text-foreground"
						)}
					>
						<Code className="size-3.5" />
						Code
					</button>
				</div>
			</div>

			{view === "preview" ? (
				<div className="flex min-h-[200px] items-center justify-center p-6">
					{children}
				</div>
			) : (
				<div className="max-h-[400px] overflow-auto">
					<pre className="p-4 font-mono text-sm leading-6">
						<code>{code}</code>
					</pre>
				</div>
			)}
		</div>
	)
}
