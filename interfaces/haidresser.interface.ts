import { Hash } from "crypto";

interface StartEndTime {
	start_time: string;
	end_time: string;
}

export interface Availability {
	monday: StartEndTime;
	tuesday: StartEndTime;
	wednesday: StartEndTime;
	thursday: StartEndTime;
	friday: StartEndTime;
	saturday: StartEndTime;
	sunday: StartEndTime;
}

export interface Hairdresser {
	name: string;
	email: string;
	password?: Hash;
	availability: Availability;
}
