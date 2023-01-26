import React, { useState } from "react";
import { useEffect } from "react";

  const handleClick = () => {
    location.href = '/betalingsoverzicht';
  }
  const handleClick2 = () => {
    location.href = '/';
  }

 

function Reserveringsoverzicht(){

    return(
        <>
  <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet" />
  <title>Reservering maken</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
  <div className="h-screen bg-gray-400">
  <div className="w-[1200px] h-[800px] rounded-3xl m-auto p-5 bg-white absolute left-0 right-0 top-0 bottom-0">
    <div className="float-left p-2 bg-white text-center w-[440px] h-[700px] items-center">
      <img className="relative top-[30px] ml-[40%]" src="fotos/Group5.png" width="80px" />
      <h1 className="relative top-[125px] text-indigo-500 text-2xl font-bold p-2">Annulering</h1>
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
        <div className="height-[200px] width-[200px]"> 
        </div>
        <div className="relative top-[50px] absolute space-y-8">
            <div className="h-[200px] space-y-8">
            <div className="w-[550px]">
           
            </div>
            <div className="w-[550px]">
         
          
            </div>
            <div className="w-[550px]">
           
            </div>
            <br></br>
            <h3 className="w-[550px] text-2xl">Annulering succesvol.</h3>
            </div>
          <div className="relative top-[50px]">
            <div className="">
                <br></br>
                <div className="space-y-[20px] space-x-">
                    <div className="w-[550px]">
            </div>
            <div className="w-[550px]">
            </div>
            </div>
            </div>
          <div>
           </div>
          </div>
        </div>
        <br></br>
        <div className="relative text-black text-xl top-[250px] left-[10px]">
          <button
            className="relative w-24 text-sm hover:border-2"
            onClick={handleClick}
            
          >
            ← vorige
          </button>
        </div>
      
    </div>
  </div>
  </div>
</>

    );
}

export default Reserveringsoverzicht;