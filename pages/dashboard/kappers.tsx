import { DashboardWrapper } from "../../components/DashboardWrapper";
import { Dispatch, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
const people = [
	{
		name: "Jane Cooper",
		email: "Jane.Cooper@kappers.com",
		image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		link: "/dashboard/kapper/1",
	},
	{
		name: "Cody Fisher",
		email: "cody.fisch@kappers.com",
		image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		link: "/dashboard/kapper/2",
	},
	{
		name: "Lindsay Walton",
		email: "lindsay.walton@kappers.com",
		image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		link: "/dashboard/kapper/3",
	},
];

import React from "react";
import { KapperForm } from "../../components/KapperForm";
import { Hairdresser } from "../../types/haidresser.interface";

function AddHairdresserModal({
	setState,
}: {
	setState: Dispatch<React.SetStateAction<boolean>>;
}) {
	const [hairdresser, setHairdreser] = useState<Hairdresser>();
	return (
		<>
			<>
				<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
					<div className="relative my-6 mx-auto max-w-3xl">
						{/*content*/}
						<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full xl:w-[35rem]	 bg-white outline-none focus:outline-none">
							{/*body*/}

							<KapperForm
								onSubmit={console.log("aahah")}
								formTitle={"Voeg een kapper toe"}
								state={hairdresser}
								setState={setHairdreser}
							/>
							{/*footer*/}
							<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
								<button
									className="text-red-400 background-transparent font-bold uppercase px-6 py-3 text-sm outline-none hover:ring-1 
 mr-1 mb-1 ease-linear transition-all rounded hover:ring-red-500 duration-150"
									type="button"
									onClick={() => setState(false)}
								>
									Close
								</button>
								<button
									className="bg-indigo-600 text-white  font-bold uppercase text-sm px-6 py-3  ring-offset-1  hover:ring-1 rounded hover:ring-indigo-500 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="submit"
									onClick={() => setState(false)}
								>
									Toevoegen
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
			</>
		</>
	);
}
export default function Kappers() {
	const [showModal, setShowModal] = useState<boolean>(false);

	const { status } = useSession();

	const router = useRouter();
	useEffect(() => {
		if (status === "unauthenticated") router.replace("/login");
		return;
	}, [status, router]);
	if (status === "authenticated") {
		return (
			<DashboardWrapper
				title="Kapper beheer"
				button={
					<>
						{" "}
						<button
							onClick={() => setShowModal(true)}
							type="button"
							className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
						>
							Kapper toevoegen
						</button>
					</>
				}
			>
				<div className="px-4 sm:px-6 lg:px-8">
					<div className="sm:flex sm:items-center mt-3"></div>
					<div className="mt-3 flex flex-col">
						<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
								<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
									{showModal ? (
										<AddHairdresserModal
											setState={setShowModal}
										/>
									) : null}

									<table className="min-w-full divide-y divide-gray-300">
										<thead className="bg-gray-50">
											<tr>
												<th
													scope="col"
													className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
												>
													Naam
												</th>
												<th
													scope="col"
													className="relative py-3.5 pl-3 pr-4 sm:pr-6"
												>
													<span className="sr-only">
														Edit
													</span>
												</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-gray-200 bg-white">
											{people.map((person) => (
												<tr key={person.email}>
													<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
														<div className="flex items-center">
															<div className="h-10 w-10 flex-shrink-0">
																<img
																	className="h-10 w-10 rounded-full"
																	src={
																		person.image
																	}
																	alt=""
																/>
															</div>
															<div className="ml-4">
																<div className="font-medium text-gray-900">
																	{
																		person.name
																	}
																</div>
																<div className="text-gray-500">
																	{
																		person.email
																	}
																</div>
															</div>
														</div>
													</td>
													<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
														<a
															href={person.link}
															className="text-indigo-600 hover:text-indigo-900"
														>
															Bewerken
															<span className="sr-only">
																, {person.name}
															</span>
														</a>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</DashboardWrapper>
		);
	}
	return <Loading />;
}