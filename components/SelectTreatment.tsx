import React from "react";
import Hoofdpagina from "./SelectHairdresser";

const handleClick = (behandeling: string) => {
  localStorage.setItem("behandeling", behandeling);

  location.href = "/kapperselecteren";
};

const handleClick2 = (behandeling: string) => {
  localStorage.setItem("behandeling", behandeling);

  location.href = "/kapperselecteren";
};

function SelectTreatment() {
  return (
    <>
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Inter"
          rel="stylesheet"
        />
        <title>Reservering maken</title>
        <div className="bg-auto bg-slate-400">
          <div className="w-[1200px] h-[800px] rounded-3xl m-auto p-5 z-50 bg-white absolute top-0 left-1/4">
            <div className="float-left p-2 bg-white text-center w-[440px] h-[700px] items-center">
              <img
                className="relative top-[30px] ml-[40%]"
                src="fotos/Group1.png"
                width="80px"
              />
              <h1 className="relative top-[125px] text-indigo-500 text-2xl font-bold p-2">
                Selecteer behandeling
              </h1>
              <h4 className="relative top-[125px] text-indigo-500 font-normal text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </h4>
              <h1 className="relative top-[425px] text-indigo-500 font-bold text-2xl p-2">
                Vragen?
              </h1>
              <h4 className="relative top-[425px] font-normal text-gray-500">
                bel (020) 040210 of stuur een email naar
                mail@kapper-marjolein.nl
              </h4>
            </div>
            <div className="p-5 width-[600px] height-[780px] ml-[40%] ">
              <h1 className="text-indigo-500 font-bold text-2xl font-bold">
                Selecteer behandeling
                <br />
                <br />
                <br />
                <div className="absolute space-y-8">
                  <div className="width-[650px] height-[150px]">
                    <button
                      id="eerstebehandeling"
                      value="Eerstegekozenbehandeling"
                      className="bg-white w-[650px] hover:border-2"
                      onClick={() => handleClick("behandeling1")}
                    >
                      <img
                        className="float-left rounded-l-lg"
                        src="https://lirp.cdn-website.com/c56c38f9/dms3rep/multi/opt/Ivar+Fotografie-12-702w.jpg"
                        width="120px"
                      />
                      <div className="relative text-left p-px font-bold left-[1%] text-xl text-black">
                        haren knippen
                      </div>
                      <div className="relative text-left p-px text-xs left-[1%] width-[350px] text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                      <div className="float-right relative text-center bottom-[50%] text-lg text-gray-500">
                        $25
                      </div>
                    </button>
                  </div>
                  <div className="width-[650px]">
                    <button
                      id="tweedeKapper"
                      value="tweedegekozenkapper"
                      className="w-[650px] hover:border-2"
                      type="button"
                      onClick={() => handleClick("behandeling2")}
                    >
                      <img
                        className="float-left rounded-l-lg"
                        src="https://lirp.cdn-website.com/c56c38f9/dms3rep/multi/opt/Ivar+Fotografie-12-702w.jpg"
                        width="120px"
                      />
                      <div className="relative text-left p-px font-bold left-[1%] text-xl text-black">
                        haren knippen
                      </div>
                      <div className="relative text-left p-px text-xs left-[1%] width-[350px] text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                      <div className="float-right relative text-center text-lg text-gray-500">
                        $25
                      </div>
                    </button>
                  </div>
                  <div className="width-[650px]">
                    <button
                      className="w-[650px] hover:border-2"
                      type="button"
                      onClick={() => handleClick("behandeling3")}
                    >
                      <img
                        className="float-left rounded-l-lg"
                        src="https://lirp.cdn-website.com/c56c38f9/dms3rep/multi/opt/Ivar+Fotografie-12-702w.jpg"
                        width="120px"
                      />
                      <div className="relative text-left p-px font-bold left-[1%] text-xl text-black">
                        haren knippen
                      </div>
                      <div className="relative text-left p-px text-xs left-[1%] width-[350px] text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                      <div className="float-right relative text-center text-lg text-gray-500">
                        $25
                      </div>
                    </button>
                  </div>
                  <div className="knop1">
                    <button
                      className="w-[650px] hover:border-2"
                      type="button"
                      onClick={() => handleClick("behandeling4")}
                    >
                      <img
                        className="float-left rounded-l-lg"
                        src="https://lirp.cdn-website.com/c56c38f9/dms3rep/multi/opt/Ivar+Fotografie-12-702w.jpg"
                        width="120px"
                      />
                      <div className="relative text-left p-px font-bold left-[1%] text-xl text-black">
                        haren knippen
                      </div>
                      <div className="relative text-left p-px text-xs left-[1%] width-[350px] text-gray-500	">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                      <div className="float-right relative text-center text-lg text-gray-500">
                        $25
                      </div>
                    </button>
                  </div>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectTreatment;
