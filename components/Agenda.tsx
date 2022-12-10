import React from "react";
import Reservering2 from "./Reservering2";

  const handleClick = () => {
    location.href = '/kapperselecteren';
  }
  const handleClick2 = () => {
    location.href = '/';
  }
  const getData = () => {
  }

function Agenda(){
    return(
        <>
  <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet" />
  <title>Reservering maken</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
  <div className="">
  <div className="achtergrondreservering m-auto p-5 bg-white">
    <div className="links items-center">
      <img className="ml-[40%]" src="fotos/Group5.png" width="80px" />
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-indigo-500 text-2xl font-bold p-2">Selecteer uw tijd</h1>
      <h3 className="text-indigo-500 text-lg p-2">gekozen kapper: </h3>
      <h4 className="text-indigo-500 font-normal text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </h4>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-2xl p-2">Vragen?</h1>
      <h4 className="text-gray-500">bel (020) 040210 of stuur een email naar mail@kapper-marjolein.nl</h4>
    </div>
    <div className="p-5 width-[600px] height-[780px] ml-[40%] ">
      <h1 className="text-2xl">
        Selecteer uw tijd
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <form>
            <input className="w-[350px] ml-[15%]" type="datetime-local" placeholder="Select Datetime"></input>
        </form>
        <div className="height-[200px] width-[200px]"> 
        </div>
        <br></br>
        <div className="relative text-black text-xl top-[450px] left-[10px]">
          <button
            className="relative w-24 text-sm"
            onClick={handleClick}
            
          >
            ← vorige
          </button>
          <button disabled={true} className="relative w-24 text-sm float-right"
          onClick={handleClick2}
          >
            Volgende →
          </button>
        </div>
      </h1>
    </div>
  </div>
  </div>
</>

    )
}

export default Agenda;