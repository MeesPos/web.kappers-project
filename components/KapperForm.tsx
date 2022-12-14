import React, { Dispatch, SetStateAction } from "react";
import { Input } from "./Input";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Hairdresser } from "../types/haidresser.interface";
export function KapperForm({
	onSubmit,
	formTitle,
	submitName,
	state,
	setState,
}: {
	onSubmit?: any;
	state: Hairdresser | undefined;
	setState: Dispatch<SetStateAction<Hairdresser | undefined>>;
	formTitle: string;
	submitName?: string;
}) {
	const [selectedFile, setSelectedFile] = useState<File>();
	const [notSamePassword, setNotSamePassword] = useState<boolean>();

	const [preview, setPreview] = useState<string>();
	const inputFile = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined);
			return;
		}

		const objectUrl = URL.createObjectURL(selectedFile);
		setPreview(objectUrl);

		return () => URL.revokeObjectURL(objectUrl);
	}, [selectedFile]);

	const onSelectFile = async (e: any) => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedFile(undefined);
			return;
		}
		const toBase64 = (file: File) =>
			new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = () => resolve(reader.result);
				reader.onerror = (error) => reject(error);
			});

		setSelectedFile(e.target.files[0]);
		const base64Image = await toBase64(e.target.files[0]);
		setState({
			...state!,
			image: base64Image,
		});
	};
	return (
		<>
			<form onSubmit={onSubmit} className="m-5 p-4">
				<h3 className="text-xl font-bold text-indigo-500">
					{formTitle}
				</h3>
				<div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
					<label
						htmlFor="photo"
						className="block text-sm font-medium text-gray-700"
					>
						Photo
					</label>
					<div className="mt-1 sm:col-span-2 sm:mt-0">
						<div className="flex items-center">
							<span className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-100">
								{state?.image ? (
									<Image
										src={
											process.env.NEXT_PUBLIC_API_URL +
											"/image/" +
											state?.image
										}
										alt="profilepic preview"
										fill
										className="rounded-full w-12 h-12"
									/>
								) : (
									<svg
										className="h-full w-full text-gray-300"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
									</svg>
								)}
							</span>
							<button
								type="button"
								className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								onClick={() => inputFile.current?.click()}
							>
								Veranderen
							</button>
							<input
								type="file"
								id="file"
								ref={inputFile}
								style={{ display: "none" }}
								onChange={onSelectFile}
							/>
						</div>
					</div>
				</div>
				<Input
					name="Naam"
					className="my-4"
					value={state?.name}
					onChange={(e) =>
						setState({
							...state!,
							name: e.target.value,
						})
					}
				/>
				<Input
					name="E-Mailadres"
					className="my-4"
					value={state?.email}
					onChange={(e) =>
						setState({
							...state!,
							email: e.target.value,
						})
					}
				/>
				<Input
					name="Wachtwoord"
					className="my-4"
					type="password"
					value={state?.password}
					onChange={(e) =>
						setState({
							...state!,
							password: e.target.value,
						})
					}
				/>
				<Input
					name="Herhaal Wachtwoord"
					className="mt-4"
					type="password"
					onChange={(e) => {
						e.target.value != state?.password
							? setNotSamePassword(true)
							: setNotSamePassword(false);
					}}
				/>
				{notSamePassword ? (
					<span className="text-red-500 absolute">
						Wachtwoorden komen niet overeen
					</span>
				) : null}
				{submitName ? (
					<button
						type="submit"
						className="text-white hover:cursor-pointer bg-indigo-500 rounded-md font-semibold w-full h-8 mt-8"
					>
						{submitName}
					</button>
				) : null}
			</form>
		</>
	);
}
