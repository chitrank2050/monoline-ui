import type * as React from "react"

import { cn } from "../lib/utils"

export interface StatusBadgeProps extends React.ComponentProps<"div"> {
	label: string
	status?: "success" | "warning" | "neutral"
}

function StatusBadge({
	label,
	status = "success",
	className,
	...props
}: StatusBadgeProps) {
	return (
		<div
			className={cn(
				"bg-card text-card-foreground inline-flex items-center gap-2 rounded-full border border-border/80 px-4 py-2 shadow-[var(--shadow-soft)]",
				className
			)}
			{...props}
		>
			<span
				className={cn(
					"size-2 rounded-full",
					status === "success" &&
						"bg-emerald-500 shadow-[0_0_14px_rgba(34,197,94,0.4)]",
					status === "warning" &&
						"bg-amber-500 shadow-[0_0_14px_rgba(245,158,11,0.4)]",
					status === "neutral" && "bg-muted-foreground"
				)}
			/>
			<span className="text-muted-foreground text-xs uppercase tracking-[0.22em]">
				{label}
			</span>
		</div>
	)
}

export { StatusBadge }
