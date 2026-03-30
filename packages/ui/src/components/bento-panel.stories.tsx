import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Blocks, Sparkles } from "lucide-react"

import { BentoPanel } from "./bento-panel"

const meta = {
	title: "Components/BentoPanel",
	component: BentoPanel,
	args: {
		eyebrow: "Pattern",
		title: "BentoPanel",
		description:
			"A more expressive panel for feature grids, portfolio highlights, and system storytelling.",
		icon: <Blocks className="size-5" />,
		ctaLabel: "Inspect pattern",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof BentoPanel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutCta: Story = {
	args: {
		ctaLabel: undefined,
		icon: <Sparkles className="size-5" />,
	},
}
