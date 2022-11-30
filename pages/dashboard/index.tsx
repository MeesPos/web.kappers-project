import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container } from "../../components/Container";
import { Search } from "iconoir-react";
import { DashboardWrapper } from "../../components/DashboardWrapper";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import NavBar from "../../components/NavBar";

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

function daar() {
	console.log("buiten component");
}
const Home: NextPage = () => {
	function hier() {
		console.log("in component");
	}
	return (
		<>
			<DashboardWrapper title="Dashboard">
				{/* 			
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}

				<div className="grid grid-cols-2">
					{/* Content */}
					<div className="bg-white rounded-lg m-1">
						<h2 className=" m-3 text-xl font-bold text-indigo-600">
							Eerst volgende afspraken
						</h2>
					</div>

					<div className="bg-white rounded-3xl m-1">
						<h1 className=" m-4 text-sm text-gray-500 inline-flex">
							<Search />
							Zoeken
						</h1>
					</div>
					<div className="bg-white rounded-lg m-1">
						<h2 className=" m-3 text-xl font-bold text-indigo-600">
							Voorraad
						</h2>
					</div>
					<div className="bg-white rounded-lg m-1">
						<h2 className=" m-3 text-xl font-bold text-indigo-600">
							Financien
						</h2>
					</div>
				</div>
			</DashboardWrapper>
		</>
	);
};
export default Home;
