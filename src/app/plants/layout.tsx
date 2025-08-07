export default function PlantsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className=" font-sans">
			<main className="p-8">{children}</main>
		</div>
	);
}
