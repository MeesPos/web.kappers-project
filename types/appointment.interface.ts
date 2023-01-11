export interface Appointment {
    treatment: String,
    hairdresser: String,
    date: String,
    time: {
        start_time: String,
        end_time: String
    }
}