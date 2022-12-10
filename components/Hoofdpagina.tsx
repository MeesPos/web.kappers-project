import React from "react";
import Group2 from "/fotos/Group2.png";

  const handleClick = () => {
    location.href = '/';
  }
  const handleClick2 = () => {
    location.href = '/agendapagina';
  }

function Hoofdpagina(){
    return(
        <>
  <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet" />
  <title>Reservering maken</title>
  <div className="">
  <div className="achtergrondreservering m-auto p-5 bg-white">
    <div className="links items-center">
      <img className="ml-[40%]" src="fotos/Group2.png" width="80px" />
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-indigo-500 text-2xl font-bold p-2">Selecteer uw kapper</h1>
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
        Selecteer uw kapper
        <br />
        <div className="height-[200px] width-[200px]"> 
        <button 
        onClick={handleClick2}
        className="mt-[50px] w-[150px] h-[175px] text-sm text-black">
          <img className="ml-[15%]" src="https://cdn.photosessions.nl/collections/2/public/2022/03/photosessions-profielfoto-social-media-fotoshoot-dsc_8747-4-2018.jpg" height="50px" width="100px"></img>
          <br></br>
          Jane van kruisten</button>
          <button 
          onClick={handleClick2}
          className="mt-[100px] w-[150px] h-[175px] text-sm text-black">
          <img className="ml-[15%]" src="https://cdn.photosessions.nl/collections/2/public/2022/03/photosessions-profielfoto-social-media-fotoshoot-dsc_8747-4-2018.jpg" height="50px" width="100px"></img>
          <br></br>
          Jane van kruisten</button>
          <button className="mt-[100px] w-[150px] h-[175px] text-sm text-black">
          <img className="ml-[15%]" src="https://cdn.photosessions.nl/collections/2/public/2022/03/photosessions-profielfoto-social-media-fotoshoot-dsc_8747-4-2018.jpg" height="50px" width="100px"></img>
          <br></br>
          Jane van kruisten</button>
          <button 
          onClick={handleClick2}
          className="mt-[100px] w-[150px] h-[175px] text-sm text-black">
          <img className="ml-[15%]" src="https://cdn.photosessions.nl/collections/2/public/2022/03/photosessions-profielfoto-social-media-fotoshoot-dsc_8747-4-2018.jpg" height="50px" width="100px"></img>
          <br></br>
          Jane van kruisten</button>
          <button className="mt-[100px] w-[150px] h-[225px] text-sm text-black">
          <img className="ml-[15%]" src="https://cdn.photosessions.nl/collections/2/public/2022/03/photosessions-profielfoto-social-media-fotoshoot-dsc_8747-4-2018.jpg" height="50px" width="100px"></img>
          <br></br>
          Jane van kruisten</button>
          <button className="mt-[100px] w-[150px] h-[225px] text-sm text-black">
          <img className="ml-[15%]" src="https://cdn.photosessions.nl/collections/2/public/2022/03/photosessions-profielfoto-social-media-fotoshoot-dsc_8747-4-2018.jpg" height="50px" width="100px"></img>
          <br></br>
          Jane van kruisten</button>
          <button className="mt-[100px] w-[150px] h-[225px] text-sm text-black">
          <img className="ml-[15%]" src="https://cdn.photosessions.nl/collections/2/public/2022/03/photosessions-profielfoto-social-media-fotoshoot-dsc_8747-4-2018.jpg" height="50px" width="100px"></img>
          <br></br>
          Jane van kruisten</button>
          <button className="mt-[100px] w-[150px] h-[225px] text-sm text-black">
          <img className="ml-[15%]" src="https://cdn.photosessions.nl/collections/2/public/2022/03/photosessions-profielfoto-social-media-fotoshoot-dsc_8747-4-2018.jpg" height="50px" width="100px"></img>
          <br></br>
          Jane van kruisten</button>
        
        </div>
        <br></br>
        <div className="relative text-black text-xl top-[0px] left-[30px]">
          <button
            className="relative w-24 text-sm"
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