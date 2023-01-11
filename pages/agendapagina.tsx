import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Agenda from "../components/Agenda";

const AgendaPagina: NextPage = () => {
  const [availableDates, setAvailableDates] = useState();
  const [appointment, setAppointment] = useState();

  useEffect(() => {
    async function fetchData() {
      const appointment = JSON.parse(
        localStorage.getItem("appointment")!
      );

      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL +
          "/hairdresser/" +
          appointment.hairdresser +
          "/availability"
      );

      setAppointment(appointment);

      setAvailableDates(await res.json());
    }

    fetchData();
  }, []);

  return (
    <>
      <Agenda availableDates={availableDates!}
              appointment={appointment!}
      />
    </>
  );
};

export default AgendaPagina;
