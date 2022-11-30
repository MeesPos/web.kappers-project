import type { NextPage } from "next";
import { DashboardWrapper } from "../../../components/DashboardWrapper";
import { Input } from "../../../components/Input";
import { KapperForm } from "../../../components/KapperForm";

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(" ");
}
function Beschikbaarheid() {
	return (
		<div className="">
			<div className="m-5 ">
				<h3 className="text-xl font-bold text-indigo-500">
					Beschikbaarheid
				</h3>
				<form className="relative">
					<div className="grid grid-cols-7">
						<Input name="Ma" className="mr-2" />
						<Input name="Di" className="mx-2" />
						<Input name="Wo" className="mx-2" />
						<Input name="Do" className="mx-2" />
						<Input name="Vr" className="mx-2" />
						<Input name="Za" className="mx-2" />
						<Input name="Zo" className="ml-2" />
					</div>
					<button
						type="submit"
						className="text-white hover:cursor-pointer bg-indigo-500 rounded-md font-semibold h-8 mt-2 w-28"
					>
						Bijwerken
					</button>
				</form>
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
