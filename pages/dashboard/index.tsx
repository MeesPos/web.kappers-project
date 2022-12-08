import type { NextPage } from "next";
import { Search } from "iconoir-react";
import { DashboardWrapper } from "../../components/DashboardWrapper";

const Home: NextPage = () => {
	return (
		<>
			<DashboardWrapper title="Dashboard">
				<div className="grid grid-cols-3">
					<div className="bg-white rounded-lg m-1 col-span-2">
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
					<div className="bg-white rounded-lg m-1 col-span-2">
						<h2 className=" m-3 text-xl font-bold text-indigo-600">
							Financien
						</h2>
					</div>
					<div className="bg-white rounded-lg m-1">
						<h2 className=" m-3 text-xl font-bold text-indigo-600">
							Voorraad
						</h2>
					</div>
				</div>
			</DashboardWrapper>
		</>
	);
};
export default Home;
