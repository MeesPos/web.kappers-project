import React from "react";

const handleClick = (behandeling: string) => {
  localStorage.setItem(
    "appointment",
    JSON.stringify({
      treatment: behandeling,
    })
  );

  location.href = "/kapperselecteren";
};

function SelectTreatment() {
  return (
    <>
      <div className="inset-0 absolute bg-gray-500/30">
        <title>Reservering maken</title>
        <div className="bg-auto bg-slate-400">
          <div className="w-[1200px] h-[800px] rounded-3xl m-auto p-5 z-50 bg-white absolute top-0 bottom-0 left-0 right-0">
            <div className="float-left p-2 bg-white text-center w-[440px] h-[700px] items-center">
              <img
                className="relative top-[30px] ml-[40%]"
                src="fotos/Group1.png"
                width="80px"
              />
              <h1 className="relative top-[125px] text-indigo-500 text-2xl font-bold p-2">
                Selecteer behandeling
              </h1>
              <h4 className="relative top-[125px] font-normal text-gray-500">
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
              <h1 className="text-indigo-500 text-2xl font-bold">
                Selecteer behandeling
                <div className="absolute space-y-8 mt-12">
                  <div className="width-[650px] height-[150px]">
                    <button
                      id="eerstebehandeling"
                      value="Eerstegekozenbehandeling"
                      className="bg-white w-[650px] hover:border-2"
                      onClick={() => handleClick("behandeling1")}
                    >
                      <img
                        className="float-left rounded-l-lg h-full"
                        src="https://images0.persgroep.net/rcs/NnK2DwwZOf1Vivu6P5xp2IS_Hjs/diocontent/200967471/_fitwidth/763?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.8"
						width="120px"
                      />
                      <div className="relative text-left p-px font-bold left-[1%] text-xl text-black">
                        Knippen{" "}
                      </div>
                      <div className="relative text-left p-px text-xs left-[1%] width-[350px] text-gray-500">
                        Deze behandeling bestaat uit het knippen van de haren
                        volgens de gewenste lengte en stijl.
                      </div>
                      <div className="float-right relative text-center bottom-[50%] text-lg text-gray-500">
                        € 40
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
                        src="https://cdn1.treatwell.net/images/view/v2.i784906.w1472.h1103.x9BEFD988.jpg"
                        width="120px"
                      />
                      <div className="relative text-left p-px font-bold left-[1%] text-xl text-black">
                        Föhnen
                      </div>
                      <div className="relative text-left p-px text-xs left-[1%] width-[350px] text-gray-500">
                        Deze behandeling bestaat uit het drogen van de haren met
                        een föhn. Hierbij kan ook styling worden toegepast.
                      </div>
                      <div className="float-right relative text-center text-lg text-gray-500">
                        € 30
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
                        src="https://www.creatiefkapperscollege.nl/wp-content/uploads/creatief-kapperscollege-praktijklessen-haar-kleuren-gevorderd-1024x512.jpg"
                        width="120px"
                      />
                      <div className="relative text-left p-px font-bold left-[1%] text-xl text-black">
                        Kleuren
                      </div>
                      <div className="relative text-left p-px text-xs left-[1%] width-[350px] text-gray-500">
                        Deze behandeling bestaat uit het verven van de haren in
                        de gewenste kleur. Dit kan een permanente of tijdelijke
                        kleur zijn.
                      </div>
                      <div className="float-right relative text-center text-lg text-gray-500">
                        € 75
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
                        src="https://www.wellnessacademie.be/wp-content/uploads/2019/07/highlights-2.jpg"
                        width="120px"
                      />
                      <div className="relative text-left p-px font-bold left-[1%] text-xl text-black">
                        Highlights
                      </div>
                      <div className="relative text-left p-px text-xs left-[1%] width-[350px] text-gray-500	">
                        Deze behandeling bestaat uit het aanbrengen van
                        highlights (lichter gekleurde plukken haar) in de haren.
                        Dit kan met folies of met een balayage-techniek gedaan
                        worden.
                      </div>
                      <div className="float-right relative text-center text-lg text-gray-500">
                        € 110
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
