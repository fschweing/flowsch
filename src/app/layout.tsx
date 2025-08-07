"use client"; // Must be a client component to use usePathname

import "./globals.css";
import { usePathname } from "next/navigation";
import { pageColors } from "@/lib/colors";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const section = pathname?.split("/")[1]; // e.g., 'plants', 'education'
	const bgColor = pageColors[section as keyof typeof pageColors] || "white";

	return (
		<html lang="en">
			<body className="font-sans antialiased text-black">
				<div
					style={{ backgroundColor: bgColor }}
					className="min-h-screen flex flex-col"
				>
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
