import type { ReactNode } from "react";

export default function EducationLayout({ children }: { children: ReactNode }) {
	return (
		<div className=" text-white min-h-screen">
			<main className="prose prose-invert mx-auto max-w-5xl px-4 py-12">
				{children}
			</main>
		</div>
	);
}
