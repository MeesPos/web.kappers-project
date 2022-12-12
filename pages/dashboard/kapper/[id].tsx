import type { NextPage } from "next";
import {
	useState,
	useEffect,
	Dispatch,
	SetStateAction,
	ChangeEvent,
	FormEvent,
	MouseEvent,
} from "react";
import { DashboardWrapper } from "../../../components/DashboardWrapper";
import { KapperForm } from "../../../components/KapperForm";
import { useRouter } from "next/router";
import { TimeRangePicker } from "../../../components/TimeRangePicker";
import {
	Hairdresser,
	Availability,
	StartEndTime,
} from "../../../types/haidresser.interface";
import { emptyAvailability } from "../../../utils/emptyAvailability";
import { useSession } from "next-auth/react";
import Loading from "../../../components/Loading";

function Beschikbaarheid({
	state,
	setState,
	id,
}: {
	state: Availability;
	setState: Dispatch<SetStateAction<Availability>>;
	id: number;
}) {
	function handleChange(
		event: ChangeEvent<HTMLInputElement>,
		day: keyof Availability,
		time: keyof StartEndTime
	) {
		if (event.target.value !== "") {
			setState({
				...state,
				[day]: {
					...state[day],
					[time]: event.target.value,
				},
			});
		} else {
			setState({
				...state,
				[day]: {
					...state[day],
					[time]: null,
				},
			});
		}
	}
	function handlePauseChange(
		event: ChangeEvent<HTMLInputElement>,
		day: keyof Availability,
		time: keyof StartEndTime
	) {
		event.preventDefault();

		let arr = [...state[day].pauses!];
		if (arr.length > 1) {
			if (event.target.value !== "") {
				arr[arr.length - 1] = { [time]: event.target.value };
			} else {
				arr[arr.length - 1] = { [time]: null };
			}
		} else {
			if (event.target.value !== "") {
				arr[0] = { [time]: event.target.value };
			} else {
				arr[0] = { [time]: null };
			}
		}

		setState({
			...state!,
			[day]: {
				...state[day],
				pauses: arr,
			},
		});
	}
	function handleAddPauseClick(
		event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
		day: keyof Availability
	) {
		event.preventDefault();

		setState((prevv) => {
			return {
				...prevv!,
				[day]: {
					...prevv[day],
					pauses: [
						...prevv[day]?.pauses!,
						{
							start_time: null,
							end_time: null,
						},
					],
				},
			};
		});
	}
	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const req = await fetch(
			process.env.NEXT_PUBLIC_API_URL +
				`/hairdresser/${id}/default-times`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(state),
			}
		);
	}
	interface Day {
		display_name: string;
		state_name: keyof Availability;
	}
	const days: Day[] = [
		{ display_name: "Ma", state_name: 0 },
		{ display_name: "Di", state_name: 1 },
		{ display_name: "Wo", state_name: 2 },
		{ display_name: "Do", state_name: 3 },
		{ display_name: "Vr", state_name: 4 },
		{ display_name: "Za", state_name: 5 },
		{ display_name: "Zo", state_name: 6 },
	];
	return (
		<div className="">
			<div className="m-5">
				<h3 className="text-xl font-bold text-indigo-500">
					Beschikbaarheid
				</h3>
				<form className="relative" onSubmit={(e) => handleSubmit(e)}>
					<div className="grid grid-cols-7 mb-2">
						{days.map((day, idx) => {
							return (
								<TimeRangePicker
									name={day.display_name}
									key={idx}
									label={true}
									className="mr-5"
									startValue={
										state?.[day.state_name]?.start_time!
									}
									endValue={
										state?.[day.state_name]?.end_time!
									}
									onChangeStartTime={(event) =>
										handleChange(
											event,
											day?.state_name,
											"start_time"
										)
									}
									onChangeEndTime={(event) =>
										handleChange(
											event,
											day?.state_name,
											"end_time"
										)
									}
								/>
							);
						})}
					</div>
					Pauzes
					<div className="grid grid-cols-7 mt-1">
						{days.map((day, idx) => {
							return (
								<div className="mr-3.5" key={idx}>
									{state?.[day.state_name].pauses!.map(
										(items, idx) => {
											return (
												<TimeRangePicker
													key={idx}
													name={String(idx)}
													className="mb-1"
													startValue={
														items?.start_time!
													}
													endValue={items?.end_time!}
													onChangeStartTime={(
														event
													) =>
														handlePauseChange(
															event,
															day.state_name,
															"start_time"
														)
													}
													onChangeEndTime={(event) =>
														handlePauseChange(
															event,
															day.state_name,
															"end_time"
														)
													}
												/>
											);
										}
									)}
									<button
										className="border-2 border-light-gray rounded-md w-full "
										type="button"
										onClick={(e) =>
											handleAddPauseClick(
												e,
												day.state_name
											)
										}
									>
										+
									</button>
								</div>
							);
						})}
					</div>
					<button
						type="submit"
						className="text-white hover:cursor-pointer bg-indigo-500 rounded-md font-semibold w-24 mt-2 h-8"
					>
						Bijwerken
					</button>
				</form>
			</div>
		</div>
	);
}

const EditKapper: NextPage = () => {
	const { data } = useSession();
	const [hairdresserInfo, setHairdresserInfo] = useState<
		Hairdresser | undefined
	>(undefined);
	const [availability, setAvailability] =
		useState<Availability>(emptyAvailability);

	const [id, setId] = useState<number>(0);

	const router = useRouter();

	useEffect(() => {
		if (!data) router.replace("/login");
		return;
	}, [data, router]);
	useEffect(() => {
		if (!router.isReady) return;
		const { id } = router.query;
		if (!id) return;
		setId(+id);
		async function getHairdresser(id: string) {
			const data = await fetch(`http://localhost:8000/hairdresser/${id}`);
			const haidresserData = (await data.json()) as Hairdresser;
			setHairdresserInfo(haidresserData);
		}
		getHairdresser(id as string);
	}, [router]);
	if (data) {
		return (
			<DashboardWrapper title="Kapper">
				<div className="mx-auto grid grid-cols-10 w-full">
					<div className="m-3 bg-white rounded-lg border-2 col-span-3 border-light-gray">
						<KapperForm
							onSubmit={() => console.log("a")}
							formTitle="Kapper bewerken"
							submitName="Bewerken"
							state={hairdresserInfo}
							setState={setHairdresserInfo}
							data={""}
						/>
					</div>
					<div className="col-span-7">
						<div className="m-3 bg-white rounded-lg border-2 border-light-gray">
							<Beschikbaarheid
								state={availability!}
								setState={setAvailability}
								id={id!}
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
	}
	return <Loading />;
};

export default EditKapper;
