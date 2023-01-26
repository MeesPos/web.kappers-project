export interface Appointment {
    treatment: String,
    hairdresser: {
        id: Number,
        name: String;
    },
    date: String,
    time: {
        start_time: String,
        end_time: String
    },
    personalData: {
        name: String;
        email: String;
        phone_number?: String;
        note?: String;
    }
}