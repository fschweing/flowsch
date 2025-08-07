// src/app/education/algolab/layout.tsx
"use client";

import { Box, Drawer, Toolbar } from "@mui/material";
import TOC from "./toc";

const drawerWidth = 300;

export default function AlgoLabLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Box
			sx={{
				display: "flex",
				minHeight: "100vh",
				backgroundColor: "#0f172a",
				color: "#fff",
			}}
		>
			{/* Sidebar */}
			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						boxSizing: "border-box",
						borderRight: "1px solid #444",
						backgroundColor: "#0f172a",
						color: "#fff",
						padding: 2,
					},
				}}
			>
				<Toolbar />
				<TOC />
			</Drawer>

			{/* Main Content */}
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					px: 4,
					py: 6,
					maxWidth: "800px",
					margin: "0 auto",
				}}
			>
				{children}
			</Box>
		</Box>
	);
}
