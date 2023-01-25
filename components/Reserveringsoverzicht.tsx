import React, { useState } from "react";
import { useEffect } from "react";

  const handleClick = () => {
    location.href = '/betalingsoverzicht';
  }
  const handleClick2 = () => {
    location.href = '/anuleren';
  }
  const handleClick3 = () => {
    location.href = '/tijdwijzigen';
  }
  

 

function Reserveringsoverzicht(){
    const [item, setItem] = useState('')
    const [behandeling, setbehandeling] = useState('')
    const [naam, setnaam] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    useEffect(() => {
        const item = window.localStorage.getItem('kapper')
        const behandeling = window.localStorage.getItem('behandeling')
        const naam = window.localStorage.getItem('naam')
        const email = window.localStorage.getItem('email')
        const phone = window.localStorage.getItem('phone')
        setItem(item!)
        setbehandeling(behandeling!)
        setnaam(naam!)
        setemail(email!)
        setphone(phone!)
    }, [])

    return(
        <>
  <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet" />
  <title>Reservering maken</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
  <div className="h-screen bg-gray-400">
  <div className="w-[1200px] h-[800px] rounded-3xl m-auto p-5 bg-white">
    <div className="float-left p-2 bg-white text-center w-[440px] h-[700px] items-center">
      <img className="relative top-[30px] ml-[40%]" src="fotos/Group5.png" width="80px" />
      <h1 className="relative top-[125px] text-indigo-500 text-2xl font-bold p-2">Reservering bevestigd</h1>
      <h4 className="relative top-[125px] text-indigo-500 font-normal text-gray-500">
      </h4>
      <div className="">
      <h1 className="relative top-[425px] text-indigo-500 font-bold text-2xl p-2">Vragen?</h1>
      <h4 className="relative top-[425px] font-normal text-gray-500">bel (020) 040210 of stuur een email naar mail@kapper-marjolein.nl</h4>
      </div>
    </div>
    <div className="p-5 width-[600px] height-[780px] ml-[40%] ">
      <h1 className="text-indigo-500 font-bold text-2xl">
      Reservering bevestigd</h1>
        <div className="height-[200px] width-[200px]"> 
        </div>
        <div className="relative top-[50px] absolute space-y-8">
            <h3 className="text-2xl font-bold text-indigo-500">Reservering</h3>
            <div className="h-[200px] space-y-8">
            <div className="w-[550px]">
            <h3 className="text-base">gekozen behandeling: </h3>
            <h3 className="float-right">{behandeling}</h3>
            </div>
            <div className="w-[550px]">
            <h3 className="text-base">gekozen kapper:</h3>
            <h3 className="float-right">{item}</h3>
            </div>
            <div className="w-[550px]">
            </div>
            <br></br>
            <h3 className="w-[550px] text-base">Let op als u niet kunt op de aangeven datum of toch op een datum wilt / kan klik dan op de annuleren knop</h3>
            </div>
          <div className="relative top-[50px]">
            <h4 className="text-2xl text-indigo-500 font-bold">Betaling</h4>
            <div className="">
                <br></br>
                <div className="space-y-[20px] space-x-">
                    <div className="w-[550px]">
            <h3 className="text-base">Betaalmethode:</h3>
            <h3 className="float-right">iDeal</h3>
            </div>
            <div className="w-[550px]">
            <h3 className="text-base">prijs:</h3>
            <h3 className="float-right">euro</h3>
            </div>
            </div>
            </div>
          <div>
           </div>
          </div>
        </div>
        <br></br>
        <div className="relative text-black text-xl top-[125px] left-[10px]">
          <button
            className="relative w-24 text-sm hover:border-2"
            onClick={handleClick}
            
          >
            ← vorige
          </button>
          <button className="relative w-24 text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 border border-blue-700 rounded"
          onClick={handleClick2}
          >
            Annuleren
          </button>
          <button className="relative w-24 text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 border border-blue-700 rounded ml-2"
          onClick={handleClick3}
          >
            Tijd Wijzigen
          </button>
        </div>
      
    </div>
  </div>
  </div>
</>

    );
}

export default Reserveringsoverzicht;