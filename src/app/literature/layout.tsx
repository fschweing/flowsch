export default function LiteratureLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="prose prose-lg mx-auto p-10 font-serif">{children}</div>
	);
}
