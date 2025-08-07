import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
	theme: "dracula",
	keepBackground: false,
};

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		// mdxRs: false,
		remarkPlugins: [],
		rehypePlugins: [
			[rehypePrettyCode, prettyCodeOptions],
			rehypeSlug,
			rehypeAutolinkHeadings,
		],
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default withMDX(nextConfig);
