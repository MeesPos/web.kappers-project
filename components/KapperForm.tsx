import React from "react";
import { Input } from "./Input";
export function KapperForm({
	onSubmit,
	formTitle,
	submitName,
}: {
	onSubmit: any;
	formTitle: string;
	submitName: string;
}) {
	return (
		<>
			<form onSubmit={onSubmit} className="m-5">
				<h4 className="text-xl font-bold text-indigo-500">
					{formTitle}
				</h4>
				<Input name="Naam" className="my-4" />
				<Input name="E-Mailadres" className="my-4" />
				<Input name="Wachtwoord" className="my-4" />
				<Input name="Herhaal Wachtwoord " className="my-4" />
				<input
					type="submit"
					value={submitName}
					className="text-white bg-indigo-500 rounded-md font-semibold w-full h-8 "
				/>
			</form>
		</>
	);
}
