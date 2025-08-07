import Link from "next/link";
import { pageColors } from "@/lib/colors";

const links: {
	href: string;
	title: string;
	colorKey: keyof typeof pageColors;
}[] = [
	{ href: "/running", title: "Running", colorKey: "running" },
	{ href: "/education", title: "Education", colorKey: "education" },
	{ href: "/teaching", title: "Teaching", colorKey: "teaching" },
	{ href: "/plants", title: "Plants", colorKey: "plants" },
	{ href: "/literature", title: "Literature", colorKey: "literature" },
	{ href: "/recipes", title: "Recipes", colorKey: "recipes" },
	{ href: "/advocacies", title: "Advocacies", colorKey: "advocacies" },
	{ href: "/galery", title: "Galery", colorKey: "galery" },
	{ href: "/person", title: "About Me", colorKey: "person" },
];

export default function Home() {
	return (
		<main className="relative min-h-screen">
			{/* Fixed full-page background text */}
			<section className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none z-0">
				<h1 className="max-w max-h font-black uppercase text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl opacity-80 font-sans">
					Run towards your fears. Be kind to yourself. Water your plants once
					every two weeks. Measure a group's success by its weakest member. Hug
					a stranger. If you have to compare yourself, then only to your own
					past. Ask for help. Read one more book.
				</h1>
			</section>

			{/* Subpage links grid overlays as you scroll */}
			<section className="relative z-10 flex min-h-screen items-center justify-center mt-[100vh] px-12">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-10howxl">
					{links.map(({ href, title, colorKey }) => (
						<Link key={href} href={href}>
							<div
								className={`bg-white p-6 transition-colors cursor-pointer text-2xl font-bold uppercase text-center h-full flex items-center justify-center text-black hover:text-white hover:bg-[${pageColors[colorKey]}]`}
							>
								{title}
							</div>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}
