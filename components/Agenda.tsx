import React, { useState } from "react";
import { Appointment } from "../types/appointment.interface";
import { Availability } from "../types/haidresser.interface";

const handleClick = () => {
  location.href = "/kapperselecteren";
};

function Agenda({
  availableDates,
  appointment,
}: {
  availableDates: Array<JSON>;
  appointment: Appointment;
}) {
  const handleClick2 = (date: string) => {
    appointment.date = date;

    localStorage.setItem("appointment", JSON.stringify(appointment));

    window.location.href = "/tijd-selecteren";
  };

  const days = [
    "Maandag",
    "Dinsdag",
    "Woensdag",
    "Donderdag",
    "Vrijdag",
    "Zaterdag",
    "Zondag",
  ];

  const months = [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december",
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Inter"
        rel="stylesheet"
      />
      <title>Reservering maken</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
      />
      <div className="h-screen bg-gray-400">
        <div className="w-[1200px] h-[800px] rounded-3xl m-auto p-5 bg-white">
          <div className="float-left p-2 bg-white text-center w-[440px] h-[700px] items-center">
            <img
              className="relative top-[30px] ml-[40%]"
              src="fotos/Group5.png"
              width="80px"
            />
            <h1 className="relative top-[125px] text-indigo-500 text-2xl font-bold p-2">
              Selecteer uw dag
            </h1>
            <h4 className="relative top-[125px] font-normal text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
            <div className="">
              <h1 className="relative top-[425px] text-indigo-500 font-bold text-2xl p-2">
                Vragen?
              </h1>
              <h4 className="relative top-[425px] font-normal text-gray-500">
                bel (020) 040210 of stuur een email naar
                mail@kapper-marjolein.nl
              </h4>
            </div>
          </div>
          <div className="p-5 width-[600px] height-[780px] ml-[40%] ">
            <h1 className="text-indigo-500 font-bold text-2xl">
              Selecteer uw dag
              <div className="grid grid-cols-3 gap-x-8 gap-y-3 mt-4">
                {availableDates?.map((date: any, index: any) => {
                  const [day, month, year] = date.date.split("-");

                  const convertedDate = new Date(
                    +year,
                    Number(month) - 1,
                    +day
                  );

                  const dayString = `${
                    days[convertedDate.getUTCDay()]
                  } ${day} ${
                    months[convertedDate.getMonth()]
                  }`;

                  return (
                    <button
                      className="w-full text-sm text-black border-2 border-[#F9F9F9] rounded-xl py-2"
                      key={index}
                      onClick={() => handleClick2(date.date)}
                    >
                      {dayString}
                    </button>
                  );
                })}
              </div>
              <div className="relative text-black text-xl top-[125px] left-[10px]">
                <button className="relative w-24 text-sm" onClick={handleClick}>
                  ← vorige
                </button>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Agenda;
