import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import { DashboardWrapper } from "../../components/DashboardWrapper";
import { KapperForm } from "../../components/KapperForm";

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
	{ name: "Dashboard", href: "#", current: true },
	{ name: "Team", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Calendar", href: "#", current: false },
	{ name: "Reports", href: "#", current: false },
];
const userNavigation = [
	{ name: "Your Profile", href: "#" },
	{ name: "Settings", href: "#" },
	{ name: "Sign out", href: "#" },
];

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(" ");
}

const Home: NextPage = () => {
	return (
		<DashboardWrapper title="Kapper">
			<div className="mx-auto grid grid-cols-3 w-full">
				<div className="m-3 bg-white rounded-lg border-2 border-light-gray">
					<KapperForm
						onSubmit={console.log("click")}
						formTitle="Kapper bewerken"
						submitName="Bewerken"
					/>
				</div>
				<div className="col-span-2">
					<div className="m-3 bg-white rounded-lg border-2 border-light-gray">
						2
					</div>
					<div className="m-3 bg-white rounded-lg border-2 border-light-gray">
						3
					</div>
				</div>
			</div>
		</DashboardWrapper>
	);
};

export default Home;
