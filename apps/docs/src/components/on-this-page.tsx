import type { TocItem } from "../lib/docs"

export function OnThisPage({ items }: { items: readonly TocItem[] }) {
	return (
		<div className="space-y-2">
			<p className="text-sm font-medium">On this page</p>
			<ul className="m-0 list-none">
				{items.map((item) => (
					<li key={item.id} className="mt-0 pt-2">
						<a
							href={`#${item.id}`}
							className="text-muted-foreground hover:text-foreground inline-block text-sm transition-colors"
						>
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
