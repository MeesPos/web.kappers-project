import React, { useState, useEffect } from "react";
import { Hairdresser } from "../types/haidresser.interface";

const handleClick = () => {
  location.href = "/";
};

const handleClick2 = (kapper: string) => {
  localStorage.setItem("kapper", kapper);
  location.href = "/agendapagina";
};

function SelectHairdresser({ hairdressers }: { hairdressers: Hairdresser[] }) {
  const [item1, setItem] = useState("");
  useEffect(() => {
    const item1 = window.localStorage.getItem("behandeling");
    setItem(item1!);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Inter"
        rel="stylesheet"
      />
      <title>Reservering maken</title>
      <div className="h-screen bg-gray-400">
        <div className="w-[1200px] h-[800px] rounded-3xl m-auto p-5 bg-white relative">
          <div className="float-left p-2 bg-white text-center w-[440px] h-[700px] items-center">
            <img
              className="relative top-[30px] ml-[40%]"
              src="fotos/Group2.png"
              width="80px"
            />
            <h1 className="relative top-[125px] text-indigo-500 text-2xl font-bold p-2">
              Selecteer uw kapper
            </h1>
            <h3 className="relative top-[125px] text-indigo-500 text-lg p-2">
              gekozen behandeling: {""}
            </h3>
            <h4 className="relative top-[125px] font-normal text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
            <h1 className="relative top-[425px] text-indigo-500 font-bold text-2xl p-2">
              Vragen?
            </h1>
            <h4 className="relative top-[425px] font-normal text-gray-500">
              bel (020) 040210 of stuur een email naar mail@kapper-marjolein.nl
            </h4>
          </div>
          <div className="p-5 width-[600px] height-[780px] ml-[40%] ">
            <h1 className="text-indigo-500 font-bold text-2xl">
              Selecteer uw kapper
              <br />
              <div className="height-[200px] width-[200px] grid grid-cols-3">
                {hairdressers?.map((hairdresser: any, index: any) => {
                  return (
                    <button
                      key={index}
                      onClick={() => handleClick2("jane")}
                      className="mt-[50px] w-full h-full text-md text-black border-2 border-[#F9F9F9] rounded-xl"
                    >
                      <img
                        className="mx-auto rounded-full w-3/4"
                        src="https://cdn.photosessions.nl/collections/2/public/2022/03/photosessions-profielfoto-social-media-fotoshoot-dsc_8747-4-2018.jpg"
                      ></img>
                      <br></br>
                      {hairdresser.name}
                    </button>
                  );
                })}
              </div>
              <br></br>
              <div className="text-black text-xl absolute bottom-12">
                <button
                  className="relative w-24 text-lg font-medium hover:text-indigo-600 transition-all"
                  onClick={handleClick}
                >
                  ← Vorige
                </button>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectHairdresser;
