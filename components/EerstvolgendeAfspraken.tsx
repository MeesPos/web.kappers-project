import React from "react";
interface Afspraak {
	id: number;
	treatment: any;
	treatment_id: number;
	hairdresser: any;
	hairdresser_id: number;
	personal_data: any;
	references: any;
	personal_data_id: number;
	payment: any;
	payment_id: number;
	extra_services: any;
	date: string;
	start_time: string;
	end_time: string;
}
function EerstvolgendeAfspraken({ afspraken }: { afspraken: Afspraak[] }) {
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
										{afspraak.personal_data.name}
									</h3>
									<span className="block">
										{afspraak.date} {afspraak.start_time}-
										{afspraak.end_time}
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
