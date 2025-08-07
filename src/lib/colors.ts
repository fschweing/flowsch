// lib/colors.ts
export const pageColors = {
	running: "#D96E63",
	education: "#5C6784",
	teaching: "#E1B94F",
	plants: "#A7C8A2",
	literature: "#846E80",
	recipes: "#B0C5DA",
	advocacies: "#A0522D",
	galery: "#4A6E6B",
	person: "#D4C4A6",
} as const;

export type PageColorKey = keyof typeof pageColors;
