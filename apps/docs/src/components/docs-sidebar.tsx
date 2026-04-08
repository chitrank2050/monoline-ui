"use client"

import { cn } from "@chitrank2050/monoline-ui"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { docsNavigation } from "../lib/docs"

export function DocsSidebar() {
	const pathname = usePathname()

	return (
		<nav className="grid grid-flow-row auto-rows-max gap-1 px-1 text-sm">
			{docsNavigation.map((group) => (
				<div key={group.title} className="flex flex-col gap-1">
					<h4 className="label-eyebrow mt-4 first:mt-0">{group.title}</h4>
					<div className="grid grid-flow-row auto-rows-max gap-0.5">
						{group.items.map((item) => {
							const isActive = pathname === item.href

							return (
								<Link
									key={item.href}
									href={item.href}
									className={cn(
										"docs-nav-link",
										isActive ? "bg-accent text-accent-foreground" : ""
									)}
								>
									{item.label}
								</Link>
							)
						})}
					</div>
				</div>
			))}
		</nav>
	)
}
