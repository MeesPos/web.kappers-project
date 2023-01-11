import { NextPage } from "next";
import { useEffect, useState } from "react";
import SelectTime from "../components/SelectTime";
import { Appointment } from "../types/appointment.interface";

const TijdSelecteren: NextPage = () => {
  const [availableTimes, setAvailableTimes] = useState();
  const [appointment, setAppointment] = useState<Appointment>();

  useEffect(() => {
    async function fetchData() {
      const appointment = JSON.parse(localStorage.getItem("appointment")!);

      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL +
          "/hairdresser/" +
          // @ts-ignore
          appointment.hairdresser +
          "/availability/" +
          // @ts-ignore
          appointment.date
      );

      setAppointment(appointment);

      setAvailableTimes(await res.json());
    }

    fetchData();
  }, []);

  console.log(availableTimes);

  return (
    <>
      <SelectTime appointment={appointment!} availableTimes={availableTimes!} />
    </>
  );
};

export default TijdSelecteren;
