import React, {useState} from "react";
import SelectTreatment from "../components/SelectTreatment";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Card from "../components/Card";

const navigation = [
	{ name: "Behandelingen", href: "#behandelingen" },
	{ name: "Over ons", href: "#over" },
];

export default function App() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [popup, setPop] = useState(false);
	const handleClickOpen = () => setPop(!popup);
	return (
		<div className="isolate bg-white">
			<div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
				<svg
					className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
					viewBox="0 0 1155 678"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
						fillOpacity=".3"
						d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
					/>
					<defs>
						<linearGradient
							id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
							x1="1155.49"
							x2="-78.208"
							y1=".177"
							y2="474.645"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#9089FC" />
							<stop offset={1} stopColor="#FF80B5" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div className="px-6 pt-6 lg:px-8">
				<div>
					<nav
						className="flex h-9 items-center justify-between"
						aria-label="Global"
					>
						<div
							className="flex lg:min-w-0 lg:flex-1"
							aria-label="Global"
						>
							<h1 className="text-center text-sm tracking-tighter font-bold mb-6">
								Marjolein <br /> knip knip
							</h1>
						</div>
						<div className="flex lg:hidden">
							<button
								type="button"
								className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(true)}
							>
								<span className="sr-only">Open main menu</span>
								<Bars3Icon
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</button>
						</div>
						<div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="font-semibold text-gray-900 hover:text-gray-900"
								>
									{item.name}
								</a>
							))}
						</div>
						<div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
							<a
								href="#"
								className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
							>
								Log in
							</a>
						</div>
					</nav>
					<Dialog
						as="div"
						open={mobileMenuOpen}
						onClose={setMobileMenuOpen}
					>
						<Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
							<div className="flex h-9 items-center justify-between">
								<div className="flex">
									<a href="#" className="-m-1.5 p-1.5">
										<span className="sr-only">
											Your Company
										</span>
										<img
											className="h-8"
											src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
											alt=""
										/>
									</a>
								</div>
								<div className="flex">
									<button
										type="button"
										className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
										onClick={() => setMobileMenuOpen(false)}
									>
										<span className="sr-only">
											Close menu
										</span>
										<XMarkIcon
											className="h-6 w-6"
											aria-hidden="true"
										/>
									</button>
								</div>
							</div>
							<div className="mt-6 flow-root">
								<div className="-my-6 divide-y divide-gray-500/10">
									<div className="space-y-2 py-6">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
											>
												{item.name}
											</a>
										))}
									</div>
									<div className="py-6">
										<a
											href="#"
											className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
										>
											Log in
										</a>
									</div>
								</div>
							</div>
						</Dialog.Panel>
					</Dialog>
				</div>
			</div>
			<main className="h-screen">
				<div className="relative px-6 lg:px-8">
					<div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
						<div>
							<div className="hidden sm:mb-8 sm:flex sm:justify-center">
								<div
									className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
									onClick={handleClickOpen}
								>
									<span className="text-gray-600">
										Check ons nieuwe reserveringssysteem{" "}
										<a
											href="#"
											className="font-semibold text-indigo-600"
										>
											<span
												className="absolute inset-0"
												aria-hidden="true"
											/>
											<span aria-hidden="true">
												&rarr;
											</span>
										</a>
									</span>
								</div>
							</div>
							<div>
								<h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
									Marjolein Knip Knip{" "}
								</h1>
								<p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
									Onze ervaren kappers staan klaar om uw
									haarwensen in vervulling te laten gaan. Boek
									nu uw afspraak en ervaar onze professionele
									knipkunsten in een ontspannen en gezellige
									sfeer.
								</p>
								<div className="mt-8 flex gap-x-4 sm:justify-center">
									<a
										href="#"
										className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
										onClick={handleClickOpen}
									>
										Maak een afspraak{" "}
										<span
											className="text-indigo-200"
											aria-hidden="true"
										>
											&rarr;
										</span>
									</a>
									<a
										href="#"
										className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
									>
										Lees meer{" "}
										<span
											className="text-gray-400"
											aria-hidden="true"
										>
											&rarr;
										</span>
									</a>
								</div>
							</div>
							<div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
								<svg
									className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
									viewBox="0 0 1155 678"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
										fillOpacity=".3"
										d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
									/>
									<defs>
										<linearGradient
											id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
											x1="1155.49"
											x2="-78.208"
											y1=".177"
											y2="474.645"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#9089FC" />
											<stop
												offset={1}
												stopColor="#FF80B5"
											/>
										</linearGradient>
									</defs>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div>{popup && <SelectTreatment />}</div>
			</main>
			<div className="space-y-20">
				<section id="behandelingen" className="container mx-auto">
					<div className="grid grid-cols-4">
						<Card
							title="Knipbeurt"
							img="https://media.istockphoto.com/id/153043805/photo/woman-getting-a-haircut.jpg?b=1&s=170667a&w=0&k=20&c=5CzrBJOGgmp4DqzfcF1YbfK5AAHgkf8zNaGEPe28gio="
							description="Een standaard knipbeurt om uw haar in model
									te brengen."
						/>
						<Card
							title="Kleuring"
							img="https://www.kappers.nl/files/shares/Fotolia_130531716_Subscription_Monthly_M.jpg"
							description="Van een eenvoudige tondeuse tot een uitgebreide kleurbehandeling, onze kleurspecialisten zorgen voor de perfecte kleur."
						/>
						<Card
							title="Highlights"
							img="https://images.unsplash.com/photo-1643924496261-1b9ee7ccabae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
							description="Lichte accenten geven uw haar dimensie en beweging."
						/>
						<Card
							title="Föhnen"
							img="https://www.liveabout.com/thmb/Ibio8zpugFNNcvRrsDaMbJmyUGg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hairdresser-blow-drying-female-customers-hair-in-hair-salon-723502385-5aa47fefa9d4f9003665480e.jpg"
							description="Laat uw haar professioneel stylen voor een speciale gelegenheid of gewoon voor een mooie dagelijkse look."
						/>
						<Card
							title="Kinderknip"
							img="https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
							description="Een speciale knipbeurt voor kinderen met leuke kleurtjes en speelse snitjes."
						/>
						<Card
							title="Haarverzorging"
							img="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
							description="Van verzorgende en herstellende behandelingen tot deep conditioning, wij zorgen voor gezond en glanzend haar."
						/>
						<Card
							title="Haarbehandelingen"
							img="https://images.unsplash.com/photo-1559599076-9c61d8e1b77c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
							description=" Van permanenten tot straightening, onze stylisten zorgen voor een look die bij u past."
						/>
						<Card
							title="Speciale aanbiedingen"
							img="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
							description="Houdt onze website in de gaten voor speciale aanbiedingen en kortingsacties."
						/>
					</div>
				</section>
				<section id="over" className=" container mx-auto">
					<h2 className="text-2xl tracking-tight font-bold">
						Over Ons
					</h2>
					<div className="flex">
						Kapperzaak Marjolein Knip Knip is al jaren een begrip in
						de kapperswereld. Onze salon is gevestigd in hartje
						Utrecht Science Park, en biedt een ontspannen en
						gezellige sfeer waar u zich helemaal thuis zult voelen.
						Onze team van ervaren kappers staat klaar om uw
						haarwensen in vervulling te laten gaan. Of u nu op zoek
						bent naar een nieuwe look of gewoon een knipbeurt nodig
						heeft, wij zijn hier om u te helpen. Onze kappers zijn
						op de hoogte van de laatste haartrends en technieken, en
						werken met professionele producten om uw haar in
						topconditie te houden. Naast knipbeurten, bieden wij ook
						diverse haarverzorging en haarbehandelingen, zoals
						kleuring, highlights, verven, en föhnen. Wij hebben ook
						speciale aanbiedingen voor kinderen. Onze salon beschikt
						over een gezellige wachtruimte waar u kunt genieten van
						een kopje koffie of thee en een tijdschrift terwijl u
						wacht op uw afspraak. U kunt online een afspraak maken
						of u kunt ons bellen voor meer informatie. Wij zijn
						trots op onze klanttevredenheid en streven er altijd
						naar om iedereen tevreden naar huis te laten gaan. Wij
						zien u graag snel in onze salon!
						<img
							src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
							className="h-96 rounded-md border-gray-100 flex mx-5"
						/>{" "}
					</div>
				</section>
			</div>
		</div>
	);
}