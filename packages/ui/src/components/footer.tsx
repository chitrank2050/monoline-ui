import type * as React from "react"

import { cn } from "../lib/utils"

export interface FooterLink {
	href: string
	label: string
}

export interface FooterProps extends React.ComponentProps<"footer"> {
	credit?: React.ReactNode
	links?: FooterLink[]
}

function Footer({
	credit = (
		<>
			© {new Date().getFullYear()} | Built by{" "}
			<strong className="font-medium">Chitrank Agnihotri</strong>
		</>
	),
	links = [],
	className,
	...props
}: FooterProps) {
	return (
		<footer
			className={cn(
				"border-border/80 flex w-full flex-col items-center justify-between gap-6 border-t py-8 sm:flex-row",
				className
			)}
			{...props}
		>
			<p className="text-muted-foreground text-sm">{credit}</p>
			<div className="flex items-center gap-4">
				{links.map((link) => (
					<a
						key={link.href}
						href={link.href}
						className="text-muted-foreground hover:text-foreground text-sm transition-colors"
					>
						{link.label}
					</a>
				))}
			</div>
		</footer>
	)
}

export { Footer }
