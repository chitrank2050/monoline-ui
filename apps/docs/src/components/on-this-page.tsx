import type { TocItem } from "../lib/docs"

export function OnThisPage({ items }: { items: readonly TocItem[] }) {
	return (
		<div className="panel p-5">
			<p className="label-eyebrow mb-4">On This Page</p>
			<div className="space-y-1">
				{items.map((item) => (
					<a key={item.id} href={`#${item.id}`} className="docs-nav-link">
						{item.label}
					</a>
				))}
			</div>
		</div>
	)
}
