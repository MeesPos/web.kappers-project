import type { NextPage } from "next";
import { DashboardWrapper } from "../../../components/DashboardWrapper";
import { KapperForm } from "../../../components/KapperForm";

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(" ");
}
function Beschikbaarheid() {
	return (
		<div>
			<div className="m-3">
				<h3 className="text-xl font-bold text-indigo-500">
					Beschikbaarheid
				</h3>
			</div>
		</div>
	);
}
const EditKapper: NextPage = () => {
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
						<Beschikbaarheid />
					</div>
					<div className="m-3 bg-white rounded-lg border-2 border-light-gray">
						3
					</div>
				</div>
			</div>
		</DashboardWrapper>
	);
};

export default EditKapper;
