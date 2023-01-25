import { Appointment } from "../types/appointment.interface";
import { useState } from "react";
import AfspraakDetails from "./AfspraakDetails";

function EerstvolgendeAfspraken({ afspraken }: { afspraken: Appointment[] }) {
	const [afspraakDetails, setAfspraakDetails] = useState<
		Appointment | undefined
	>(undefined);
	const [modal, setModal] = useState<boolean>(false);

	function handleAfspraakClick(idx: number) {
		const afspraak = afspraken[idx];
		setAfspraakDetails(afspraak);
		setModal(true);
		console.log("click", afspraak);
	}
	return (
		<div className="m-5 p-2">
			<h2 className="text-2xl font-bold text-indigo-600">
				Eerst Volgende Afspraken
			</h2>

			<div className="divide-y divide-solid divide-gray-200">
				{afspraken.map((afspraak, idx) => {
					return (
						<div key={idx}>
							<div
								className="grid grid-cols-3 hover:bg-gray-200  rounded-md p-2 my-2 hover:cursor-pointer"
								onClick={() => handleAfspraakClick(idx)}
							>
								<div>
									<h3 className="text-lg font-semibold ">
										{afspraak.personal_data.name}
									</h3>
									<span className="block">
										{afspraak.date} {afspraak.start_time}-
										{afspraak.end_time}
									</span>
								</div>
								<div className=" text-right">
									<span className="block text-sm">
										Soort behandeling
									</span>
									<span className="	">
										{afspraak.treatment.name ||
											afspraak.treatment.id}
									</span>
								</div>
								<div className="text-right">
									<span className="block text-sm">
										Kapper
									</span>
									{afspraak.hairdresser_name}
								</div>
							</div>
						</div>
					);
				})}
				{modal ? (
					<AfspraakDetails
						afspraak={afspraakDetails!}
						setState={setAfspraakDetails}
					/>
				) : null}
			</div>
		</div>
	);
}

export default EerstvolgendeAfspraken;
