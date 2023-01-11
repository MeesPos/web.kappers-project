import React, {useState} from "react";
import SelectTreatment from "../components/SelectTreatment";

function App() {
	const[popup,setPop]=useState(false);
	const handleClickOpen=()=>(
		setPop(!popup)
	)
	const closePopup=()=>
		setPop(false);
	return (
		
	<div className="h-screen bg-gray-400">
		<div className="grid grid-cols-2 items-center h-screen w-10/12 mx-auto">
			<div className="space-y-6">
				<h3 className="font-bold text-8xl">Knip knip,<br />Kapper✂️</h3>
				<h3>Kom snel langs of maak een afspraak.</h3>
				
				<button className="bg-teal-200 py-2 px-8" onClick={handleClickOpen}>Reservering maken</button>
			</div>
			<img src="fotos/knipfoto1.jpg" className="rounded-lg"></img>
		</div>
		<div>
			{popup && 
				<SelectTreatment />
			}
		</div>
	</div>
)}

export default App;