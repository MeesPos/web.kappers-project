import React, { useState } from "react";
import { useEffect } from "react";
import { Appointment } from "../types/appointment.interface";

const handleClick = () => {
  location.href = "/betalingsoverzicht";
};
const handleClick2 = () => {
  location.href = "/anuleren";
};

function Reserveringsoverzicht() {
  const [appointment, setAppointment] = useState<Appointment>();

  useEffect(() => {
    const appointment = JSON.parse(localStorage.getItem("appointment")!);

    setAppointment(appointment);
  }, []);

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
              Reservering bevestigd
            </h1>
            <h4 className="relative top-[125px] text-indigo-500 font-normal text-gray-500">
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
              Reservering bevestigd
            </h1>
            <div className="height-[200px] width-[200px]"></div>
            <div className="relative top-[50px] absolute space-y-8">
              <h3 className="text-2xl font-bold text-indigo-500">
                Reservering
              </h3>
              <div className="h-[200px] space-y-8">
                <div className="w-[550px] flex justify-between">
                  <h3 className="text-base">Gekozen behandeling: {}</h3>
                  <h3 className="text-right">{appointment?.treatment}</h3>
                </div>
                <div className="w-[550px] flex justify-between">
                  <h3 className="text-base">Gekozen kapper:</h3>
                  <h3 className="text-right">
                    {appointment?.hairdresser.name}{" "}
                  </h3>
                </div>
                <div className="w-[550px] flex justify-between">
                  <h3 className="text-base">Datum:</h3>
                  <h3 className="text-right">{appointment?.date}</h3>
                </div>
              </div>
              <div className="relative">
                <h4 className="text-2xl text-indigo-500 font-bold">Betaling</h4>
                <div className="">
                  <br></br>
                  <div className="space-y-8">
                    <div className="w-[550px] flex justify-between">
                      <h3 className="text-base">Betaalmethode:</h3>
                      <h3 className="text-right">Betalen op locatie</h3>
                    </div>
                    <div className="w-[550px] flex justify-between">
                      <h3 className="text-base">prijs:</h3>
                      <h3 className="text--right">&euro; 20.00,-</h3>
                    </div>
                    <h3 className="w-[550px] text-sm text-gray-500 pt-8">
                      Let op als u niet kunt op de aangeven datum of toch op een
                      datum wilt / kan klik dan op de annuleren knop
                    </h3>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <br></br>

            <div className="relative text-black text-xl top-[100px] w-[550px] left-[10px]">
              <button
                className="relative w-24 text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 border border-blue-700 rounded float-right"
                onClick={handleClick2}
              >
                Annuleren
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reserveringsoverzicht;
