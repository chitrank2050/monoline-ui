"use client"

import { Button, cn } from "@chitrank2050/monoline-ui"
import { MoonStar, SunMedium } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Suspense, useCallback, useEffect, useState } from "react"

const modes = [
	{ id: "light", label: "Light", icon: SunMedium },
	{ id: "dark", label: "Dark", icon: MoonStar },
] as const

function ThemeToggleContent() {
	const { resolvedTheme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		setMounted(true)
	}, [])

	const updateTheme = useCallback(
		(newTheme: string) => {
			setTheme(newTheme)
			const params = new URLSearchParams(searchParams.toString())
			params.set("theme", newTheme)
			router.replace(`${pathname}?${params.toString()}`, { scroll: false })
		},
		[pathname, router, searchParams, setTheme]
	)

	// Sync theme from query param on mount and when it changes
	useEffect(() => {
		const themeParam = searchParams.get("theme")
		if (themeParam && (themeParam === "light" || themeParam === "dark")) {
			if (themeParam !== resolvedTheme) {
				setTheme(themeParam)
			}
		}
	}, [searchParams, resolvedTheme, setTheme])

	if (!mounted) {
		return (
			<div className="bg-muted inline-flex rounded-full p-1">
				{modes.map(({ id, label, icon: Icon }, index) => (
					<Button
						key={id}
						type="button"
						size="sm"
						variant={index === 0 ? "default" : "ghost"}
						className="rounded-full px-3"
					>
						<Icon className="size-4" />
						{label}
					</Button>
				))}
			</div>
		)
	}

	return (
		<div className="bg-muted inline-flex rounded-full p-1">
			{modes.map(({ id, label, icon: Icon }) => (
				<Button
					key={id}
					type="button"
					size="sm"
					variant={resolvedTheme === id ? "default" : "ghost"}
					className={cn(
						"rounded-full px-3",
						resolvedTheme !== id && "text-muted-foreground"
					)}
					onClick={() => updateTheme(id)}
				>
					<Icon className="size-4" />
					{label}
				</Button>
			))}
		</div>
	)
}

export function ThemeToggle() {
	return (
		<Suspense
			fallback={
				<div className="bg-muted inline-flex rounded-full p-1">
					<div className="h-9 w-20 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-800" />
					<div className="h-9 w-20 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-800" />
				</div>
			}
		>
			<ThemeToggleContent />
		</Suspense>
	)
}
