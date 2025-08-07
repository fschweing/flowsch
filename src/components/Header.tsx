export default function Header() {
	return (
		<header className="fixed top-0 left-0 w-full border-b border-black p-2 text-xs font-mono bg-white z-30">
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center items-center">
				<div className="text-left sm:text-left pl-10">Welcome to FLOWSCH</div>
				<div>A journal of thought, movement, and memory</div>
				<div className="text-right sm:text-right pr-10">
					Dive into what I love
				</div>
			</div>
		</header>
	);
}
