export default function PersonLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="text-neutral-900 font-sans">
			<main className="p-8 max-w-3xl mx-auto">{children}</main>
		</div>
	);
}
