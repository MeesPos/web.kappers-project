import type { NextPage } from "next";
import {
	useState,
	useEffect,
	Dispatch,
	SetStateAction,
	ChangeEvent,
} from "react";
import { DashboardWrapper } from "../../../components/DashboardWrapper";
import { KapperForm } from "../../../components/KapperForm";
import { useRouter } from "next/router";
import { TimeRangePicker } from "../../../components/TimeRangePicker";
import {
	Hairdresser,
	Availability,
	StartEndTime,
} from "../../../interfaces/haidresser.interface";

function Beschikbaarheid({
	state,
	setState,
}: {
	state: Availability;
	setState: Dispatch<SetStateAction<Availability | undefined>>;
}) {
	function handleChange(
		event: ChangeEvent<HTMLInputElement>,
		day: keyof Availability,
		time: keyof StartEndTime
	) {
		const result = event.target.value.replace(/[^0-9:]/g, "");
		setState({
			...state!,
			[day]: {
				...state[day],
				[time]: result,
			},
		});
	}
	function handlePauseChange(
		event: ChangeEvent<HTMLInputElement>,
		day: keyof Availability,
		time: keyof StartEndTime
	) {
		const result = event.target.value.replace(/[^0-9:]/g, "");
		setState({
			...state!,
			[day]: {
				...state[day],
				pauses: result,
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
							label={true}
							className="mr-5"
							startValue={state?.monday?.start_time}
							endValue={state?.monday?.end_time}
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
							label={true}
							startValue={state?.tuesday?.start_time}
							endValue={state?.tuesday?.end_time}
							onChangeStartTime={(event) =>
								handleChange(event, "tuesday", "start_time")
							}
							onChangeEndTime={(event) =>
								handleChange(event, "tuesday", "end_time")
							}
						/>
						<TimeRangePicker
							name="Wo"
							label={true}
							className="mr-5"
							startValue={state?.wednesday?.start_time}
							endValue={state?.wednesday?.end_time}
							onChangeStartTime={(event) =>
								handleChange(event, "wednesday", "start_time")
							}
							onChangeEndTime={(event) =>
								handleChange(event, "wednesday", "end_time")
							}
						/>
						<TimeRangePicker
							name="Do"
							label={true}
							className="mr-5"
							startValue={state?.thursday?.start_time}
							endValue={state?.thursday?.end_time}
							onChangeStartTime={(event) =>
								handleChange(event, "thursday", "start_time")
							}
							onChangeEndTime={(event) =>
								handleChange(event, "thursday", "end_time")
							}
						/>
						<TimeRangePicker
							name="Vr"
							label={true}
							className="mr-5"
							startValue={state?.friday?.start_time}
							endValue={state?.friday?.end_time}
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
							label={true}
							startValue={state?.saturday?.start_time}
							endValue={state?.saturday?.end_time}
							onChangeStartTime={(event) =>
								handleChange(event, "saturday", "start_time")
							}
							onChangeEndTime={(event) =>
								handleChange(event, "saturday", "end_time")
							}
						/>
						<TimeRangePicker
							name="Zo"
							label={true}
							className="mr-5"
							startValue={state?.sunday?.start_time}
							endValue={state?.sunday?.end_time}
							onChangeStartTime={(event) =>
								handleChange(event, "sunday", "start_time")
							}
							onChangeEndTime={(event) =>
								handleChange(event, "sunday", "end_time")
							}
						/>
					</div>
					Pauzes
					<div className="grid grid-cols-7 mt-1">
						{state?.monday.pauses!.length > 0 ? (
							state?.monday.pauses!.map((items, idx) => {
								{
									if (state?.monday.pauses!.length > 0) {
										return (
											<TimeRangePicker
												key={idx}
												name="Ma"
												label={true}
												className="mr-5"
												startValue={items.start_time}
												endValue={items?.end_time}
												onChangeStartTime={(event) =>
													handleChange(
														event,
														"monday",
														"start_time"
													)
												}
												onChangeEndTime={(event) =>
													handleChange(
														event,
														"monday",
														"end_time"
													)
												}
											/>
										);
									}
								}
							})
						) : (
							<button
								className="border-2 border-light-gray rounded-md mr-5"
								onClick={() =>
									setState({
										...state!,
										monday: {
											...state.monday,
											pauses: [
												...state.monday.pauses!,
												{
													start_time: "12:00",
													end_time: "12:30",
												},
											],
										},
									})
								}
							>
								+
							</button>
						)}

						<TimeRangePicker
							name="Di"
							className="mr-5"
							startValue={state?.tuesday?.start_time}
							endValue={state?.tuesday?.end_time}
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
							startValue={state?.wednesday?.start_time}
							endValue={state?.wednesday?.end_time}
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
							startValue={state?.thursday?.start_time}
							endValue={state?.thursday?.end_time}
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
							startValue={state?.friday?.start_time}
							endValue={state?.friday?.end_time}
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
							startValue={state?.saturday?.start_time}
							endValue={state?.saturday?.end_time}
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
							startValue={state?.sunday?.start_time}
							endValue={state?.sunday?.end_time}
							onChangeStartTime={(event) =>
								handleChange(event, "sunday", "start_time")
							}
							onChangeEndTime={(event) =>
								handleChange(event, "sunday", "end_time")
							}
						/>
					</div>
					<div className="w-full flex">
						<button
							type="submit"
							className="text-white hover:cursor-pointer bg-indigo-500 rounded-md font-semibold h-8 mt-2 w-28 justify-self-end	"
						>
							Bijwerken
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

const EditKapper: NextPage = () => {
	const [hairdresserInfo, setHairdresserInfo] = useState<Hairdresser>();
	const [availability, setAvailability] = useState<Availability>();
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
						state={hairdresserInfo}
						setState={setHairdresserInfo}
						data={""}
					/>
				</div>
				<div className="col-span-2">
					<div className="m-3 bg-white rounded-lg border-2 border-light-gray">
						<Beschikbaarheid
							state={availability!}
							setState={setAvailability}
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
