export interface Appointment {
	treatment: {
		id: number;
		name: string;
	};
	hairdresser_name: string;
	date: string;
	start_time: string;
	end_time: string;
	personal_data: {
		name: string;
		email: string;
		phone_number?: string;
		note?: string;
	};
}