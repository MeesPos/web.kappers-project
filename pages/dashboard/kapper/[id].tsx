import type { NextPage } from "next";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
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
function Beschikbaarheid({
	state,
	setState,
}: {
	state: Hairdresser;
	setState: Dispatch<SetStateAction<Hairdresser | undefined>>;
}) {
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
							className="mr-5"
							value={state?.availability?.available_times.monday}
							onChange={(e) =>
								setState({
									...state!,
									availability: {
										available_times: {
											...state.availability
												.available_times,
											monday: e.target.value,
										},
										unavailable_times: {
											...state.availability
												.unavailable_times,
										},
									},
								})
							}
						/>
						<Input
							name="Di"
							className="mr-5"
							value={
								state?.availability?.available_times.thursday
							}
							onChange={(e) =>
								setState({
									...state!,
									availability: {
										available_times: {
											...state.availability
												.available_times,
											thursday: e.target.value,
										},
										unavailable_times: {
											...state.availability
												.unavailable_times,
										},
									},
								})
							}
						/>
						<Input
							name="Wo"
							className="mr-5"
							value={
								state?.availability?.available_times.wednesday
							}
							onChange={(e) =>
								setState({
									...state!,
									availability: {
										available_times: {
											...state.availability
												.available_times,
											wednesday: e.target.value,
										},
										unavailable_times: {
											...state.availability
												.unavailable_times,
										},
									},
								})
							}
						/>
						<Input
							name="Do"
							className="mr-5"
							value={
								state?.availability?.available_times.thuesday
							}
							onChange={(e) =>
								setState({
									...state!,
									availability: {
										available_times: {
											...state.availability
												.available_times,
											thuesday: e.target.value,
										},
										unavailable_times: {
											...state.availability
												.unavailable_times,
										},
									},
								})
							}
						/>
						<Input
							name="Vr"
							className="mr-5"
							value={state?.availability?.available_times.friday}
							onChange={(e) =>
								setState({
									...state!,
									availability: {
										available_times: {
											...state.availability
												.available_times,
											friday: e.target.value,
										},
										unavailable_times: {
											...state.availability
												.unavailable_times,
										},
									},
								})
							}
						/>
						<Input
							name="Za"
							className="mr-5"
							value={
								state?.availability?.available_times.saturday
							}
							onChange={(e) =>
								setState({
									...state!,
									availability: {
										available_times: {
											...state.availability
												.available_times,
											saturday: e.target.value,
										},
										unavailable_times: {
											...state.availability
												.unavailable_times,
										},
									},
								})
							}
						/>
						<Input
							name="Zo"
							className="mr-5"
							value={state?.availability?.available_times.sunday}
							onChange={(e) =>
								setState({
									...state!,
									availability: {
										available_times: {
											...state.availability
												.available_times,
											sunday: e.target.value,
										},
										unavailable_times: {
											...state.availability
												.unavailable_times,
										},
									},
								})
							}
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
						data={""}
					/>
				</div>
				<div className="col-span-2">
					<div className="m-3 bg-white rounded-lg border-2 border-light-gray">
						<Beschikbaarheid
							state={hairdresserInfo!}
							setState={setHairdresserInfo}
						/>
					</div>
					<div className="m-3 bg-white rounded-lg border-2 border-light-gray">
						<div className="text-xl text-indigo-500 font-bold m-5">
							Eerst volgende Afspraken
						</div>
					</div>
				</div>
			</div>
		</DashboardWrapper>
	);
};

export default EditKapper;
