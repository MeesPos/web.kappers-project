import React, { useState } from "react";
import Group2 from "/fotos/Group2.png";
import { useEffect } from "react";

  const handleClick = () => {

    location.href = '/';
  }
  const handleClick2 = (kapper: string) => {
    localStorage.setItem('kapper', kapper);
    location.href = '/agendapagina';
  }

function Hoofdpagina(){
  const [item1, setItem] = useState('')
  useEffect(() => {
    const item1 = window.localStorage.getItem('behandeling')
    setItem(item1!)
  }, [])
    return(
        <>
  <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet" />
  <title>Reservering maken</title>
  <div className="h-screen bg-gray-400">
  <div className="w-[1200px] h-[800px] rounded-3xl m-auto p-5 bg-white">
    <div className="float-left p-2 bg-white text-center w-[440px] h-[700px] items-center">
      <img className="relative top-[30px] ml-[40%]" src="fotos/Group2.png" width="80px" />
      <h1 className="relative top-[125px] text-indigo-500 text-2xl font-bold p-2">Selecteer uw kapper</h1>
      <h3 className="relative top-[125px] text-indigo-500 text-lg p-2">gekozen behandeling: {item1}</h3>
      <h4 className="relative top-[125px] text-indigo-500 font-normal text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </h4>
      <h1 className="relative top-[425px] text-indigo-500 font-bold text-2xl p-2">Vragen?</h1>
      <h4 className="relative top-[425px] font-normal text-gray-500">bel (020) 040210 of stuur een email naar mail@kapper-marjolein.nl</h4>
    </div>
    <div className="p-5 width-[600px] height-[780px] ml-[40%] ">
      <h1 className="text-indigo-500 font-bold text-2xl">
        Selecteer uw kapper
        <br />
        <div className="height-[200px] width-[200px]"> 
        <button 
        onClick={() => handleClick2("jane")}
        className="mt-[50px] w-[150px] h-[175px] text-sm text-black hover:border-2">
          <img className="ml-[15%]" src="https://cdn.photosessions.nl/collections/2/public/2022/03/photosessions-profielfoto-social-media-fotoshoot-dsc_8747-4-2018.jpg" height="50px" width="100px"></img>
          <br></br>
          Jane van kruisten</button>
          <button 
          onClick={() => handleClick2("jane")}
          className="mt-[100px] w-[150px] h-[175px] text-sm text-black hover:border-2">
          <img className="ml-[15%]" src="https://cdn.photosessions.nl/collections/2/public/2022/03/photosessions-profielfoto-social-media-fotoshoot-dsc_8747-4-2018.jpg" height="50px" width="100px"></img>
          <br></br>
          Jane van kruisten</button>
          <button className="mt-[100px] w-[150px] h-[175px] text-sm text-black hover:border-2">
          <img className="ml-[15%]" src="https://cdn.photosessions.nl/collections/2/public/2022/03/photosessions-profielfoto-social-media-fotoshoot-dsc_8747-4-2018.jpg" height="50px" width="100px"></img>
          <br></br>
          Jane van kruisten</button>
          <button 
          onClick={() => handleClick2("jane")}
          className="mt-[100px] w-[150px] h-[175px] text-sm text-black hover:border-2">
          <img className="ml-[15%]" src="https://cdn.photosessions.nl/collections/2/public/2022/03/photosessions-profielfoto-social-media-fotoshoot-dsc_8747-4-2018.jpg" height="50px" width="100px"></img>
          <br></br>
          Jane van kruisten</button>
          <button className="mt-[100px] w-[150px] h-[225px] text-sm text-black hover:border-2">
          <img className="ml-[15%]" src="https://cdn.photosessions.nl/collections/2/public/2022/03/photosessions-profielfoto-social-media-fotoshoot-dsc_8747-4-2018.jpg" height="50px" width="100px"></img>
          <br></br>
          Jane van kruisten</button>
          <button className="mt-[100px] w-[150px] h-[225px] text-sm text-black hover:border-2">
          <img className="ml-[15%]" src="https://cdn.photosessions.nl/collections/2/public/2022/03/photosessions-profielfoto-social-media-fotoshoot-dsc_8747-4-2018.jpg" height="50px" width="100px"></img>
          <br></br>
          Jane van kruisten</button>
          <button className="mt-[100px] w-[150px] h-[225px] text-sm text-black hover:border-2">
          <img className="ml-[15%]" src="https://cdn.photosessions.nl/collections/2/public/2022/03/photosessions-profielfoto-social-media-fotoshoot-dsc_8747-4-2018.jpg" height="50px" width="100px"></img>
          <br></br>
          Jane van kruisten</button>
          <button className="mt-[100px] w-[150px] h-[225px] text-sm text-black hover:border-2">
          <img className="ml-[15%]" src="https://cdn.photosessions.nl/collections/2/public/2022/03/photosessions-profielfoto-social-media-fotoshoot-dsc_8747-4-2018.jpg" height="50px" width="100px"></img>
          <br></br>
          Jane van kruisten</button>
        
        </div>
        <br></br>
        <div className="relative text-black text-xl top-[0px] left-[30px]">
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

    )
}

export default Hoofdpagina;