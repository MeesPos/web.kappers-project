import { Appointment } from "../types/appointment.interface";
import { Dispatch, SetStateAction } from "react";
function AfspraakDetails({
	afspraak,
	setState,
}: {
	afspraak: Appointment;
	setState: Dispatch<SetStateAction<boolean>>;
}) {
	console.log("indetails", afspraak);
	return (
		<div className="inset-0 absolute bg-gray-500/50">
			<div
				id="defaultModal"
				aria-hidden="true"
				className="z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex items-center justify-center h-screen"
			>
				<div className="relative w-full h-full max-w-2xl md:h-auto">
					<div className="relative bg-white rounded-lg shadow">
						<div className="flex items-start justify-between p-4 border-b rounded-t">
							<h3 className="text-xl font-semibold text-indigo-600 ">
								Afspraak Details
							</h3>
							<button
								type="button"
								className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
								data-modal-hide="defaultModal"
								onClick={() => setState(false)}
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
						<div>
							<h3 className="text-lg ml-5 my-2 font-semibold ">
								{afspraak.personal_data.name}
							</h3>
							<div className=" p-5 divide-y divide-solid divide-gray-200">
								<div className="grid py-5 first:pt-0 last:pb-0 grid-cols-2">
									<span className="text-md font-light">
										Kapper
									</span>
									<p className="text-black ">
										{afspraak.hairdresser_name}
									</p>
								</div>
								<div className="grid  py-5 0 grid-cols-2">
									<span className="text-md font-light">
										Behandeling
									</span>
									<p className="text-black ">
										{afspraak.treatment.name ||
											afspraak.treatment.id}
									</p>
								</div>
								<div className="grid py-5 first:pt-0 last:pb-0  grid-cols-2">
									<span className="text-md font-light">
										Opmerkingen
									</span>
									<p className="text-black -black">
										{afspraak.personal_data.note}
									</p>
								</div>
								<div className="grid py-5 first:pt-0 last:pb-0  grid-cols-2">
									<span className="text-md font-light">
										Telefoon Nummer
									</span>
									<p className="text-black ">
										{afspraak.personal_data.phone_number}
									</p>
								</div>
								<div className="grid py-5 first:pt-0 last:pb-0  grid-cols-2">
									<span className="text-md font-light">
										Email
									</span>
									<p className="text-black">
										{afspraak.personal_data.email}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AfspraakDetails;
