export default function Footer() {
	return (
		<footer className="fixed bottom-0 left-0 w-full border-t border-black p-2 text-xs font-mono bg-white z-30">
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center items-center">
				<div className="text-left sm:text-left pl-10">
					© 2025, Florian Schweingruber.
				</div>
				<div>
					<p>
						<a
							href="mailto:florian.o.s@hotmail.com"
							className="hover:underline"
						>
							Send me your thoughts :)
						</a>
					</p>
				</div>
				<div className="text-right sm:text-right pr-10">
					<p>
						<a
							className="hover:underline"
							href="https://www.linkedin.com/in/florian-schweingruber/"
						>
							LinkedIn
						</a>{" "}
						·{" "}
						<a className="hover:underline" href="https://github.com/fschweing">
							GitHub
						</a>{" "}
						·{" "}
						<a
							className="hover:underline"
							href="https://www.strava.com/athletes/113530499"
						>
							Strava
						</a>{" "}
						·{" "}
						<a
							className="hover:underline"
							href="https://www.instagram.com/flo_schweingruber/"
						>
							Instagram
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
