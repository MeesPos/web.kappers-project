import NavBar from "./NavBar";
import { Search } from "iconoir-react";
export function DashboardWrapper({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) {
	return (
		<>
			<div className="min-h-full">
				<NavBar />

				<header className="bg-white shadow">
					<div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900">
							{title}
						</h1>
					</div>
				</header>
				<main>
					<div className="min-h-full">
						<div className="mx-auto max-w-7xl py-6 sm:px-6">
							{children}
						</div>
					</div>
				</main>
			</div>
		</>
	);
}
