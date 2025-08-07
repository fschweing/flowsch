import {
	Breadcrumbs,
	Card,
	CardContent,
	Divider,
	Grid,
	Typography,
} from "@mui/material";
import Link from "next/link";

const semesters = [
	{
		title: "Fall 2025",
		courses: [
			{
				code: "263-0006-00L",
				name: "Algorithms Lab",
				path: "/education/algolab",
			},
			{
				code: "263-5210-00L",
				name: "Probabilistic Artificial Intelligence",
				path: "/education/pai",
			},
		],
	},
	{
		title: "Spring 2026",
		courses: [
			{
				code: "263-5000-00L",
				name: "Machine Perception",
				path: "/education/mp",
			},
			{
				code: "263-5001-00L",
				name: "Advanced Systems Lab",
				path: "/education/asl",
			},
		],
	},
];

export default function EducationPage() {
	return (
		<main className="px-4 py-8 max-w-5xl mx-auto">
			<Breadcrumbs aria-label="breadcrumb" className="mb-6">
				<Link href="/" passHref style={{ textDecoration: "none" }}>
					<Typography color="primary">Home</Typography>
				</Link>
				<Typography color="text.primary">Education</Typography>
			</Breadcrumbs>
			<Typography variant="h3" gutterBottom>
				Currently doing CompSci MSc at ETH Zurich
			</Typography>
			{semesters.map((semester, i) => (
				<section key={semester.title} className="mb-16">
					{i > 0 && <Divider className="my-12" />}
					<Typography variant="h5" gutterBottom>
						{semester.title}
					</Typography>

					<Grid container spacing={2}>
						{semester.courses.map((course) => (
							<Grid key={course.code} size={{ xs: 12, sm: 6, md: 4 }}>
								<Link href={course.path} passHref>
									<Card
										className="transition-transform duration-300 ease-in-out"
										sx={{
											width: "100%",
											"&:hover": {
												transform: "translateY(-4px)",
												boxShadow: 6, // MUI shadow level
											},
										}}
									>
										<CardContent>
											<Typography variant="subtitle1" fontWeight="bold">
												{course.name}
											</Typography>
											<Typography variant="body2" color="text.secondary">
												{course.code}
											</Typography>
										</CardContent>
									</Card>
								</Link>
							</Grid>
						))}
					</Grid>
				</section>
			))}
		</main>
	);
}
