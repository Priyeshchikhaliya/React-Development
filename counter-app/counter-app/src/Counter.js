import React from "react";
import "./Mycss.css";
import { useState } from "react";
export default function Counter() {
	let [countNum, setCount] = useState(0);

	function Sub() {
		if (countNum === 0) {
			document.getElementById("Alert").innerHTML =
				"The Counter Cannot Count Negative Values";
		} else {
			setCount((countNum -= 1));
		}
	}

	function Add() {
		setCount((countNum += 1));
		document.getElementById("Alert").innerHTML = "";
	}

	function Reset() {
		setCount(0);
	}
	return (
		<main>
			<div className="form">
				<h1 className="Title">Counter</h1>
				<h2 className="Num ">{countNum}</h2>
				<h3 id="Alert"></h3>
				<div className="Buttons">
					<button className="Sub" onClick={Sub}>
						-
					</button>
					<button className="Add" onClick={Add}>
						+
					</button>
					<button className="Reset" onClick={Reset}>
						RESET
					</button>
				</div>
			</div>
		</main>
	);
}
