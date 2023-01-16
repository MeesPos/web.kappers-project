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
    }
}