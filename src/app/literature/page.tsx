export default function LiteraturePage() {
	return (
		<article>
			<h1>Literature Page</h1>
			<p>Essays, reading notes, reviews.</p>
			<div
				style={{
					width: "50%",
					height: "800px",
					overflow: "auto",
					border: "1px solid #ccc",
				}}
			>
				<iframe
					src="/Ithaka_Leseprobe.pdf"
					width="100%"
					height="100%"
					style={{ border: "none" }}
					title="PDF Preview"
				/>
			</div>
		</article>
	);
}
