import { cva, type VariantProps } from "class-variance-authority"
import type * as React from "react"

import { cn } from "../lib/utils"

const cardVariants = cva(
	"rounded-[1.75rem] border shadow-[var(--shadow-soft)] backdrop-blur",
	{
		variants: {
			variant: {
				primary: "bg-card text-card-foreground border-border/80",
				secondary: "bg-muted/60 text-foreground border-border/70",
				tertiary:
					"bg-card text-card-foreground border-primary/15 shadow-[var(--shadow-strong)]",
				ghost: "bg-transparent text-foreground border-border/60 shadow-none",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	}
)

interface CardProps
	extends React.ComponentProps<"div">,
		VariantProps<typeof cardVariants> {}

function Card({ className, variant, ...props }: CardProps) {
	return (
		<div
			data-slot="card"
			className={cn(cardVariants({ variant }), className)}
			{...props}
		/>
	)
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-header"
			className={cn("flex flex-col gap-3 px-6 pt-6", className)}
			{...props}
		/>
	)
}

function CardEyebrow({ className, ...props }: React.ComponentProps<"p">) {
	return (
		<p
			data-slot="card-eyebrow"
			className={cn(
				"text-muted-foreground font-mono text-xs uppercase tracking-[0.28em]",
				className
			)}
			{...props}
		/>
	)
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
	return (
		<h3
			data-slot="card-title"
			className={cn(
				"font-headline text-xl font-semibold tracking-tight",
				className
			)}
			{...props}
		/>
	)
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
	return (
		<p
			data-slot="card-description"
			className={cn("text-muted-foreground text-sm leading-6", className)}
			{...props}
		/>
	)
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-content"
			className={cn("px-6 pb-6", className)}
			{...props}
		/>
	)
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-footer"
			className={cn("flex items-center gap-3 px-6 pb-6", className)}
			{...props}
		/>
	)
}

export {
	Card,
	CardContent,
	CardDescription,
	CardEyebrow,
	CardFooter,
	CardHeader,
	CardTitle,
	cardVariants,
}
