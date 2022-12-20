import { Hash } from "crypto";

export interface StartEndTime {
	start_time?: string | null;
	end_time?: string | null;
	pauses?: StartEndTime[];
}

export interface Availability {
	0: StartEndTime;
	1: StartEndTime;
	2: StartEndTime;
	3: StartEndTime;
	4: StartEndTime;
	5: StartEndTime;
	6: StartEndTime;
}

export interface Hairdresser {
	name: string;
	email: string;
	password?: string;
	availability: Availability;
	id?: number;
	image?: string;
}
