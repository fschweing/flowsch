import type { MDXComponents } from "mdx/types";
import { InlineMath, BlockMath } from "@/components/KaTeX";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		InlineMath,
		BlockMath,
		...components,
	};
}
