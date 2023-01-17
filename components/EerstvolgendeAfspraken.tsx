import React from "react";
import { Appointment } from "../types/appointment.interface";

function EerstvolgendeAfspraken({ afspraken }: { afspraken: Appointment[] }) {
	return (
		<div className="m-2">
			<h2 className="text-2xl font-bold text-indigo-600">
				Eerst Volgende Afspraken
			</h2>

			<table className="table-auto w-full divide-y divide-solid   rounded border-separate border-spacing-y-4">
				{afspraken.map((afspraak, idx) => {
					return (
						<tr key={idx} className="mx-2 ">
							<td className=" border-gray-200">
								<div className="mx-2">
									<h3 className="text-lg font-semibold ">
										{afspraak.personalData.name}
									</h3>
									<span className="block">
										{afspraak.date}{" "}
										{afspraak.time.start_time}-
										{afspraak.time.end_time}
									</span>
								</div>
							</td>
							<td className=" border-gray-200">
								<span className="block text-sm">
									Soort behandeling
								</span>
								{afspraak.treatment}
							</td>
							<td className="text-right border-gray-200">
								<span className="block text-sm">Kapper</span>
								{afspraak.hairdresser.name}
							</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
}

export default EerstvolgendeAfspraken;
