import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, {useState} from "react";
import Reservering2 from "../components/Reservering2";



function App() {
	const[popup,setPop]=useState(false);
	const handleClickOpen=()=>(
		setPop(!popup)
	)
	const closePopup=()=>
		setPop(false);
	return (
		
	<div className="h-screen bg-gray-400">
		<div className="">
			<h3 className="absolute w-[500px] h-[500px] font-bold text-8xl top-[325px] left-[250px] ">Knip knip, Kapper✂️</h3>
			<h3 className="absolute top-[565px] left-[250px]">Kom snel langs of maak een afspraak.</h3>
			<img src="fotos/knipfoto1.jpg" width="1000px" height="1000px" className="rounded-lg absolute left-[800px] top-[150px]"></img>
					<button className="bg-teal-200 h-10 top-[600px] left-[300px] absolute w-[250px]" onClick={handleClickOpen}>Reservering maken</button>
		</div>
		<div>
			{/* {popup?
			<div className="">
				<div className="">
				<div className="flex justify-between absolute top-0">
						<h1></h1>
						<button onClick={closePopup}>Sluiten</button>
					</div>
					<Reservering2></Reservering2>
					<div>
					</div>
				</div>
			</div>:""} */}
			{popup && 
				<Reservering2></Reservering2>
			}
			
		</div>
	</div>
)}

export default App;
