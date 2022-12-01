import React from "react";

export function Input({
	name,
	className,
	type,
	placeholder,
	value,
	setState,
}: {
	name: string;
	className?: string;
	type?: string;
	placeholder?: string;
	value?: string;
	setState?: any;
}) {
	return (
		<div className={className}>
			<label htmlFor={name} className="block ml-1">
				{name}
			</label>
			<input
				type={type || "text"}
				className="rounded-md border-2 border-light-gray w-full h-8 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:border-indigo-600"
				id={name}
				placeholder={placeholder}
				// value={	}
				// onChange={(e) =>
				// 	setState({
				// 		...state,
				// 	})
				// }
			></input>
		</div>
	);
}
