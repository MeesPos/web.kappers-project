import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { DashboardWrapper } from "../../../components/DashboardWrapper";
import { Input } from "../../../components/Input";
import { KapperForm } from "../../../components/KapperForm";
import { useRouter } from "next/router";
import {
	Hairdresser,
	Availability,
} from "../../../interfaces/haidresser.interface";

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(" ");
}

function Beschikbaarheid({ availability }: { availability: Availability }) {
	return (
		<div className="">
			<div className="m-5 ">
				<h3 className="text-xl font-bold text-indigo-500">
					Beschikbaarheid
				</h3>
				<form className="relative">
					<div className="grid grid-cols-7">
						<Input
							name="Ma"
							className="mr-2"
							placeholder={availability?.available_times.monday}
						/>
						<Input
							name="Di"
							className="mx-2"
							placeholder={availability?.available_times.thursday}
						/>
						<Input
							name="Wo"
							className="mx-2"
							placeholder={
								availability?.available_times.wednesday
							}
						/>
						<Input
							name="Do"
							className="mx-2"
							placeholder={availability?.available_times.thursday}
						/>
						<Input
							name="Vr"
							className="mx-2"
							placeholder={availability?.available_times.friday}
						/>
						<Input
							name="Za"
							className="mx-2"
							placeholder={availability?.available_times.saturday}
						/>
						<Input
							name="Zo"
							className="ml-2"
							placeholder={availability?.available_times.sunday}
						/>
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
	const [hairdresserInfo, setHairdresserInfo] = useState<Hairdresser>();
	const router = useRouter();
	useEffect(() => {
		if (!router.isReady) return;
		const { id } = router.query;
		async function getHairdresser(id: string) {
			const data = await fetch(`http://localhost:8000/hairdresser/${id}`);
			const haidresserData = (await data.json()) as Hairdresser;
			setHairdresserInfo(haidresserData);
		}
		getHairdresser(id as string);
	}, [router]);

	return (
		<DashboardWrapper title="Kapper">
			<div className="mx-auto grid grid-cols-3 w-full">
				<div className="m-3 bg-white rounded-lg border-2 border-light-gray">
					<KapperForm
						onSubmit={"a"}
						formTitle="Kapper bewerken"
						submitName="Bewerken"
					/>
				</div>
				<div className="col-span-2">
					<div className="m-3 bg-white rounded-lg border-2 border-light-gray">
						<Beschikbaarheid
							availability={hairdresserInfo?.availability!}
						/>
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
