import React, { useState } from "react";
import { Appointment } from "../types/appointment.interface";

const handleClick = () => {
  location.href = '/kapperselecteren';
}
const handleClick2 = () => {
  location.href = '/extraservices';
}
const getData = () => {
  localStorage.getItem("kapper");
}



function Agenda() {
  const [item, setItem] = useState('')
  useEffect(() => {
    const item = window.localStorage.getItem('kapper')
    setItem(item!)
  }, [])

  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet" />
      <title>Reservering maken</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
      <div className="h-screen bg-gray-400">
        <div className="w-[1200px] h-[800px] rounded-3xl m-auto p-5 bg-white">
          <div className="float-left p-2 bg-white text-center w-[440px] h-[700px] items-center">
            <img className="relative top-[30px] ml-[40%]" src="fotos/Group5.png" width="80px" />
            <h1 className="relative top-[125px] text-indigo-500 text-2xl font-bold p-2">Selecteer uw tijd</h1>
            <h3 className="relative top-[125px] text-indigo-500 text-lg p-2">gekozen kapper: {item}</h3>
            <h4 className="relative top-[125px] text-indigo-500 font-normal text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </h4>
            <div className="">
              <h1 className="relative top-[425px] text-indigo-500 font-bold text-2xl p-2">Vragen?</h1>
              <h4 className="relative top-[425px] font-normal text-gray-500">bel (020) 040210 of stuur een email naar mail@kapper-marjolein.nl</h4>
            </div>
          </div>
          <div className="p-5 width-[600px] height-[780px] ml-[40%] ">
            <h1 className="text-indigo-500 font-bold text-2xl">
              Selecteer uw tijd </h1>
            <div className="border relative top-[50px]">
              <h1 className="font-bold text-2xl">December 2022</h1>
              <div className="flex space-x-16 relative mt-8 ">
                <h4 className="font-bold  ">MO</h4>
                <h4 className="font-bold ">DI</h4>
                <h4 className="font-bold ">WO</h4>
                <h4 className="font-bold ">DO</h4>
                <h4 className="font-bold ">VR</h4>
                <h4 className="font-bold ">ZA</h4>
                <h4 className="font-bold  ">ZO</h4>
              </div>
              <div className="flex space-x-20 mt-8">
                <input id="checkbox1" className="appearance-none checked:bg-gray-300" type="checkbox" />
                <label for="checkbox1" className="overflow-hidden rounded-lg shadow-md ring ring-transparant peer-checked:ring-blue-500 grayscale peer-checked:grayscale-0 transition-all">1</label>
                <h4 className="">2</h4>
                <h4 className="">3</h4>
                <h4 className="">4</h4>
                <h4 className="">5</h4>
                <h4 className="">6</h4>
                <h4 className="">7</h4>
              </div>
              <div className="flex space-x-[73px] mt-8">
                <h4 className="">8</h4>
                <h4 className="">9</h4>
                <h4 className="">10</h4>
                <h4 className="">11</h4>
                <h4 className="">12</h4>
                <h4 className="">13</h4>
                <h4 className="">14</h4>
              </div>
              <div className="flex space-x-[71px] mt-8">
                <h4 className="">15</h4>
                <h4 className="">16</h4>
                <h4 className="">17</h4>
                <h4 className="">18</h4>
                <h4 className="">19</h4>
                <h4 className="">20</h4>
                <h4 className="">21</h4>
              </div>
              <div className="flex space-x-[71px] mt-8">
                <h4 className="">22</h4>
                <h4 className="">23</h4>
                <h4 className="">24</h4>
                <h4 className="">25</h4>
                <h4 className="">26</h4>
                <h4 className="">27</h4>
                <h4 className="">28</h4>
              </div>
              <div className="flex space-x-[71px] mt-8">
                <h4 className="">29</h4>
                <h4 className="">30</h4>
                <h4 className="">31</h4>
              </div>
            </div>
            <br></br>
            <div className="relative text-black text-xl top-[225px] left-[10px]">
              <button
                className="relative w-24 text-sm hover:border-2"
                onClick={handleClick}

              >
                ← vorige
              </button>
              <button className="relative w-24 text-sm float-right hover:border-2"
                onClick={handleClick2}
              >
                Volgende →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
  location.href = "/kapperselecteren";
};

const getData = () => {
  localStorage.getItem("kapper");
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
              Selecteer uw tijd
            </h1>
            <h3 className="relative top-[125px] text-indigo-500 text-lg p-2">
              gekozen kapper:
            </h3>
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
              Selecteer uw tijd
              <div>
                {availableDates?.map((date: any, index: any) => {
                  return (
                    <button
                      className="text-sm text-black px-1"
                      key={index}
                      onClick={() => handleClick2(date.date)}
                    >
                      {date.date}
                    </button>
                  );
                })}
                <input
                  className="relative top-[225px] w-[350px] ml-[15%]"
                  type="datetime-local"
                  placeholder="Select Datetime"
                ></input>
              </div>
              <div className="height-[200px] width-[200px]"></div>
              <br></br>
              <div className="relative text-black text-xl top-[525px] left-[10px]">
                <button
                  className="relative w-24 text-sm hover:border-2"
                  onClick={handleClick}
                >
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
