import { Appointment } from "../types/appointment.interface";

function AfspraakDetails({
	afspraak,
	setState,
}: {
	afspraak: Appointment;
	setState: any;
}) {
	console.log("indetails", afspraak);
	return (
		<>
			<div
				id="defaultModal"
				aria-hidden="true"
				className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
			>
				<div className="relative w-full h-full max-w-2xl md:h-auto">
					<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
						<div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
								{/* {afspraak.personal_data.name} */}
							</h3>
							<button
								type="button"
								className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
								data-modal-hide="defaultModal"
								onClick={setState(undefined)}
							>
								<svg
									aria-hidden="true"
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span className="sr-only">Close modal</span>
							</button>
						</div>

						<div className="space-y-2 divide-y divide-gray-200">
							<div>
								<label className="text-lg font-light">
									Kapper
								</label>
								<p className="text-base p-6 leading-relaxed text-gray-500 dark:text-gray-400">
									{afspraak.hairdresser_name}
								</p>
							</div>{" "}
							<div>
								<label className="text-lg font-light">
									behandeling
								</label>
								<p className="text-base p-6 leading-relaxed text-gray-500 dark:text-gray-400">
									{afspraak.treatment.id}
								</p>
							</div>{" "}
							<div>
								<label className="text-lg font-light">
									Opmerkingen
								</label>
								<p className="text-base p-6 leading-relaxed text-gray-500 dark:text-gray-400">
									{afspraak.personal_data.note}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AfspraakDetails;
