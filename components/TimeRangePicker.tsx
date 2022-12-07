import React from "react";

export function TimeRangePicker({
	name,
	className,
	type,
	placeholder,
	startValue,
	label,
	endValue,
	onChangeStartTime,
	onChangeEndTime,
}: {
	name: string;
	label?: boolean;
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
			{label ? (
				<label htmlFor={name} className="block ml-1">
					{name}
				</label>
			) : null}
			<span className="inline-flex relative">
				<input
					type="text"
					className="rounded-md border-2 border-light-gray w-full h-8 max-w-1 border-r-0 focus:border-indigo-600 focus-visible:border-r-0 text-sm rounded-r-none"
					id={name}
					// placeholder="Begin"
					value={startValue}
					onChange={onChangeStartTime}
				></input>
				<div className="absolute left-2/4 h-8">
					<span className="relative -left-2/4 align-text-top">-</span>
				</div>
				<input
					data-mdb-toggle="input-toggle-timepicker"
					type="text"
					className="rounded-md border-2 border-light-gray w-full h-8  border-l-0 rounded-l-none focus:border-indigo-600 text-sm text-right"
					id={name}
					// placeholder="Eind"
					value={endValue}
					onChange={onChangeEndTime}
				></input>
			</span>
		</div>
	);
}
