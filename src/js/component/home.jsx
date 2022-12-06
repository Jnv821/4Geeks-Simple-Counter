import React, { useState, useEffect } from "react";
import Hour from "./hour.jsx"
import Minutes from "./minutes.jsx";
import Seconds from "./seconds.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
//include images into your bundle


//create your first component
const Home = () => {
	
	const [secondsCounter, setSeconds] = useState(0)
	const [minutesCounter, setMinutes] = useState(0)
	const [hoursCounter, setHours] = useState(0)
	
	useEffect(() => {
		let interval = setInterval(() => {
			// add if statements
			if(secondsCounter < 59){
			setSeconds((secondsCounter) => secondsCounter + 1)
			} else if(minutesCounter < 59){
			
			setMinutes((minutesCounter) => minutesCounter + 1)
			setSeconds((secondsCounter) => secondsCounter = 0)

			} else {
			
			setHours((hoursCounter) => hoursCounter + 1)
			setSeconds((secondsCounter) => secondsCounter = 0)
			setMinutes((minutesCounter) => minutesCounter = 0)
			}

			console.log(secondsCounter, minutesCounter, hoursCounter)
		}, 1000);
		return () => clearInterval(interval)
	})

	return (
		<div className="d-flex justify-content-center bg-black text-white">
			<p className="clockNumber"><FontAwesomeIcon icon={faClock} className="smaller"/></p>
			<Hour count={hoursCounter}/>
			<Minutes count={minutesCounter}/>
			<Seconds count={secondsCounter}/>
		</div>
	);
};

export default Home;
