const handleClick2 = async (e: any) => {
  e.preventDefault();
  
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/appointment", {
    method: "POST",
    body: localStorage.getItem("appointment"),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    location.href = "/reserveringsoverzicht";
  }
};

function Betalen1() {
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
        <div className="w-[1200px] h-[800px] rounded-3xl m-auto p-5 bg-white absolute left-0 right-0 top-0 bottom-0">
          <div className="float-left p-2 bg-white text-center w-[440px] h-[700px] items-center">
            <img
              className="relative top-[30px] ml-[40%]"
              src="fotos/Group5.png"
              width="80px"
            />
            <h1 className="relative top-[125px] text-indigo-500 text-2xl font-bold p-2">
              Betalen
            </h1>
            <h4 className="relative top-[125px] text-indigo-500 font-normal text-gray-500">
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
            <h1 className="text-indigo-500 font-bold text-2xl">Betalen</h1>
            <div className="height-[200px] width-[200px]"></div>
            <div className="relative top-[50px] absolute space-y-8">
              <h3 className="text-2xl font-bold text-indigo-500">
                Betaalmethode selecteren
              </h3>
              <div>
                <p>Betalen op locatie.</p>
              </div>
              {/* <div className="h-[200px] space-y-10 space-x-10">
                <button className="h-[100px] w-[100px] font-bold"><img src="https://www.ideal.nl/img/logo/ideal-logo-1024.png"></img>iDeal</button>
                <button className="h-[100px] w-[100px] font-bold"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1200px-Apple_Pay_logo.svg.png"></img>Apple Pay</button>
                <button className="h-[100px] w-[100px] font-bold"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png"></img>Google Pay</button>
                <button className="h-[100px] w-[100px] font-bold"><img src="https://media.istockphoto.com/id/1215256045/vector/safe-payment-logo-template-designs-vector-illustration.jpg?s=612x612&w=0&k=20&c=22EA9Y3-gToqirb3PlgCqjnoprrgXyPAvO4_CZmT2Jc="></img>Credit Card</button>
                <button className="h-[100px] w-[100px] font-bold"><img src="https://www.paypalobjects.com/webstatic/mktg/logo-center/PP_Acceptance_Marks_for_LogoCenter_266x142.png"></img>Paypal</button>
            </div> */}
              <div className="relative top-[120px]">
                <h4 className="relative top-[100px] text-base text-black">
                  Totaal: €19,49
                </h4>
                <div></div>
              </div>
            </div>
            <br></br>
            <div className="relative text-black text-xl top-[225px] left-[-50px]">
              <button
                className="relative w-24 text-sm float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                onClick={(e) => handleClick2(e)}
              >
                Betalen
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Betalen1;
