export default function PAILayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="prose prose-invert dark:prose-invert mx-auto px-4 py-8 max-w-3xl">
			{children}
		</main>
	);
}
