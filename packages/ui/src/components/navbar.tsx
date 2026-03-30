import type * as React from "react"

import { cn } from "../lib/utils"
import { Button } from "./button"

export interface NavbarLink {
	href: string
	label: string
}

export interface NavbarProps extends React.ComponentProps<"header"> {
	brand?: React.ReactNode
	links?: NavbarLink[]
	actions?: React.ReactNode
}

function Navbar({
	brand = "Monoline UI",
	links = [],
	actions,
	className,
	...props
}: NavbarProps) {
	return (
		<header
			className={cn(
				"bg-background/92 sticky top-0 z-40 w-full border-b border-border/80 backdrop-blur",
				className
			)}
			{...props}
		>
			<div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-3">
					<div className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-full font-mono text-sm font-semibold">
						M
					</div>
					<div className="min-w-0">
						<div className="font-script text-primary text-xl leading-none">
							{brand}
						</div>
					</div>
				</div>

				<nav className="hidden items-center gap-2 md:flex">
					{links.map((link) => (
						<Button key={link.href} variant="ghost" asChild>
							<a href={link.href}>{link.label}</a>
						</Button>
					))}
				</nav>

				<div className="flex items-center gap-2">{actions}</div>
			</div>
		</header>
	)
}

export { Navbar }
