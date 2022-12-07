import React from "react";

export function TimeRangePicker({
	name,
	className,
	type,
	placeholder,
	startValue,
	endValue,
	onChangeStartTime,
	onChangeEndTime,
}: {
	name: string;
	className?: string;
	type?: string;
	placeholder?: string;
	startValue?: string;
	endValue?: string;
	onChangeStartTime?: React.ChangeEventHandler<HTMLInputElement>;
	onChangeEndTime?: React.ChangeEventHandler<HTMLInputElement>;
}) {
	return (
		<div className={className}>
			<label htmlFor={name} className="block ml-1">
				{name}
			</label>
			<span className="inline-flex">
				<input
					type="text"
					className="rounded-md border-2 border-light-gray w-full h-8 max-w-1 border-r-0 focus:border-indigo-600 focus:border-r-0 text-sm rounded-r-none"
					id={name}
					placeholder={placeholder}
					value={startValue}
					onChange={onChangeStartTime}
				></input>
				<input
					data-mdb-toggle="input-toggle-timepicker"
					type="text"
					className="rounded-md border-2 border-light-gray w-full h-8  border-l-0 rounded-l-none focus:border-indigo-600 text-sm"
					id={name}
					placeholder={placeholder}
					value={endValue}
					onChange={onChangeEndTime}
				></input>
			</span>
		</div>
	);
}
