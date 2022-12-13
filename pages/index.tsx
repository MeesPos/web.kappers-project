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
		
	<div className="">
		<button className="" onClick={handleClickOpen}>Reservering maken</button>
		<div>
			{popup?
			<div className="">
				<div className="popup">
				<div className="flex justify-between relative">
						<h1></h1>
						<button onClick={closePopup}>Sluiten</button>
					</div>
					<Reservering2></Reservering2>
					<div>
					</div>
				</div>
			</div>:""}
		</div>
	</div>
)}

export default App;