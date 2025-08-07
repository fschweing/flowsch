"use client";

import {
	List,
	ListItemButton,
	ListItemText,
	Typography,
	Collapse,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const weeks = [
	{ label: "Prerequisites", path: "/education/algolab/prereq" },
	{ label: "Week 01 – Introduction", path: "/education/algolab/week-01" },
	{
		label: "Week 02 – DP & Sliding Window",
		path: "/education/algolab/week-02",
	},
	{
		label: "Week 03 – Geometric Computing",
		path: "/education/algolab/week-03",
	},
	{ label: "Week 04 – Graphs & BGL", path: "/education/algolab/week-04" },
	{
		label: "Week 05 – Greedy & Split/List",
		path: "/education/algolab/week-05",
	},
	{ label: "Week 06 – Network Flows", path: "/education/algolab/week-06" },
	{ label: "Week 07 – LP & QP Theory", path: "/education/algolab/week-07" },
	{
		label: "Week 08 – Proximity Structures",
		path: "/education/algolab/week-08",
	},
	{ label: "Week 09 – Matching & Cuts", path: "/education/algolab/week-09" },
	{ label: "Week 10 – Exam Prep", path: "/education/algolab/week-10" },
	{ label: "Week 11 – Problem Sets", path: "/education/algolab/week-11" },
	{ label: "Week 12 – Problem Sets", path: "/education/algolab/week-12" },
	{ label: "Week 13 – Problem Sets", path: "/education/algolab/week-13" },
];

export default function TOC() {
	const pathname = usePathname();
	const [subheadings, setSubheadings] = useState<string[]>([]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (!pathname) return; // reference pathname
			const h2s = Array.from(document.querySelectorAll("main h2"));
			const ids = h2s
				.map((el) => el.id || el.textContent || "")
				.filter(Boolean);
			setSubheadings(ids);
		}, 100);

		return () => clearTimeout(timeout);
	}, [pathname]);

	return (
		<>
			<Link href="/education" passHref>
				<Typography
					variant="body2"
					color="primary"
					sx={{
						mb: 2,
						display: "inline-block",
						cursor: "pointer",
						textDecoration: "underline",
						"&:hover": {
							color: "secondary.main",
						},
					}}
				>
					← Back to Education
				</Typography>
			</Link>

			<Typography variant="h6" gutterBottom>
				AlgoLab
			</Typography>

			<List dense disablePadding>
				{weeks.map((item) => (
					<div key={item.path}>
						<Link href={item.path} passHref>
							<ListItemButton component="a" selected={pathname === item.path}>
								<ListItemText primary={item.label} />
							</ListItemButton>
						</Link>

						{/* If this is the current page, show subheadings */}
						{pathname === item.path && subheadings.length > 0 && (
							<Collapse in timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									{subheadings.map((id) => (
										<ListItemButton
											key={id}
											component="a"
											href={`#${id.toLowerCase().replace(/\s+/g, "-")}`}
											sx={{ pl: 4 }}
										>
											<ListItemText primary={id} />
										</ListItemButton>
									))}
								</List>
							</Collapse>
						)}
					</div>
				))}
			</List>
		</>
	);
}
