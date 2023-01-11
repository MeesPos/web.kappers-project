import { Appointment } from "../types/appointment.interface";

const handleClick = () => {
  location.href = "/kapperselecteren";
};

function SelectTime({
  availableTimes,
  appointment,
}: {
  availableTimes: Array<JSON>;
  appointment: Appointment;
}) {
  const handleClick2 = (time: { start_time: String; end_time: String }) => {
    appointment.time = {
      start_time: time.start_time,
      end_time: time.end_time,
    };

    localStorage.setItem("appointment", JSON.stringify(appointment));

    window.location.href = "/extra-services";
  };

  return (
    <>
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
                {availableTimes?.map((time: any, index: any) => {
                  return (
                    <button
                      className="text-sm text-black px-1"
                      key={index}
                      onClick={() => handleClick2(time)}
                    >
                      {time.start_time} - {time.end_time}
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

export default SelectTime;
