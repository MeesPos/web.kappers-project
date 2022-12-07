import type { NextPage } from "next";
import {
	useState,
	useEffect,
	Dispatch,
	SetStateAction,
	ChangeEvent,
} from "react";
import { DashboardWrapper } from "../../../components/DashboardWrapper";
import { Input } from "../../../components/Input";
import { KapperForm } from "../../../components/KapperForm";
import { useRouter } from "next/router";
import { TimeRangePicker } from "../../../components/TimeRangePicker";
import {
	Hairdresser,
	Availability,
	WeekDay,
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
	function handleChange(
		event: ChangeEvent<HTMLInputElement>,
		day: keyof WeekDay,
		time: "start_time" | "end_time"
	) {
		const result = event.target.value.replace(/[^0-9:]/g, "");
		setState({
			...state!,
			availability: {
				available_times: {
					...state?.availability.available_times,
					[day]: {
						...state?.availability.available_times[day],
						[time]: result,
					},
				},
				unavailable_times: {
					...state?.availability.unavailable_times,
				},
			},
		});
	}

	return (
		<div className="">
			<div className="m-5 ">
				<h3 className="text-xl font-bold text-indigo-500">
					Beschikbaarheid
				</h3>
				<form className="relative">
					<div className="grid grid-cols-7">
						<TimeRangePicker
							name="Ma"
							className="mr-5"
							startValue={
								state?.availability?.available_times.monday
									?.start_time
							}
							endValue={
								state?.availability?.available_times.monday
									.end_time
							}
							onChangeStartTime={(event) =>
								handleChange(event, "monday", "start_time")
							}
							onChangeEndTime={(event) =>
								handleChange(event, "monday", "end_time")
							}
						/>

						<TimeRangePicker
							name="Di"
							className="mr-5"
							startValue={
								state?.availability?.available_times.tuesday
									?.start_time
							}
							endValue={
								state?.availability?.available_times.tuesday
									?.end_time
							}
							onChangeStartTime={(event) =>
								handleChange(event, "tuesday", "start_time")
							}
							onChangeEndTime={(event) =>
								handleChange(event, "tuesday", "end_time")
							}
						/>
						<TimeRangePicker
							name="Wo"
							className="mr-5"
							startValue={
								state?.availability?.available_times.wednesday
									?.start_time
							}
							endValue={
								state?.availability?.available_times.wednesday
									?.end_time
							}
							onChangeStartTime={(event) =>
								handleChange(event, "wednesday", "start_time")
							}
							onChangeEndTime={(event) =>
								handleChange(event, "wednesday", "end_time")
							}
						/>
						<TimeRangePicker
							name="Do"
							className="mr-5"
							startValue={
								state?.availability?.available_times.thursday
									?.start_time
							}
							endValue={
								state?.availability?.available_times.thursday
									?.end_time
							}
							onChangeStartTime={(event) =>
								handleChange(event, "thursday", "start_time")
							}
							onChangeEndTime={(event) =>
								handleChange(event, "thursday", "end_time")
							}
						/>
						<TimeRangePicker
							name="Vr"
							className="mr-5"
							startValue={
								state?.availability?.available_times.friday
									?.start_time
							}
							endValue={
								state?.availability?.available_times.friday
									?.end_time
							}
							onChangeStartTime={(event) =>
								handleChange(event, "friday", "start_time")
							}
							onChangeEndTime={(event) =>
								handleChange(event, "friday", "end_time")
							}
						/>
						<TimeRangePicker
							name="Za"
							className="mr-5"
							startValue={
								state?.availability?.available_times.saturday
									?.start_time
							}
							endValue={
								state?.availability?.available_times.saturday
									?.end_time
							}
							onChangeStartTime={(event) =>
								handleChange(event, "saturday", "start_time")
							}
							onChangeEndTime={(event) =>
								handleChange(event, "saturday", "end_time")
							}
						/>
						<TimeRangePicker
							name="Zo"
							className="mr-5"
							startValue={
								state?.availability?.available_times.sunday
									?.start_time
							}
							endValue={
								state?.availability?.available_times.sunday
									?.end_time
							}
							onChangeStartTime={(event) =>
								handleChange(event, "sunday", "start_time")
							}
							onChangeEndTime={(event) =>
								handleChange(event, "sunday", "end_time")
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
						onSubmit={() => console.log("a")}
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
							Agenda
						</div>
					</div>
				</div>
			</div>
		</DashboardWrapper>
	);
};

export default EditKapper;
