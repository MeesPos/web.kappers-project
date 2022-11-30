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
				<h3 className="text-xl font-bold text-indigo-500">
					{formTitle}
				</h3>
				<Input name="Naam" className="my-4" />
				<Input name="E-Mailadres" className="my-4" />
				<Input name="Wachtwoord" className="my-4" type="password" />
				<Input
					name="Herhaal Wachtwoord"
					className="my-4"
					type="password"
				/>
				<button
					type="submit"
					className="text-white hover:cursor-pointer bg-indigo-500 rounded-md font-semibold w-full h-8 "
				>
					{submitName}
				</button>
			</form>
		</>
	);
}
