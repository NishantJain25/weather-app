import React, { useState } from "react"

import Toggle from "../toggle/toggle"
import { HiOutlineLocationMarker } from "react-icons/hi"
import {
	setTemperature,
	setSpeed,
} from "../../store/preferences/preferences.action"
import "./menu.css"

const Menu = ({ isOpen }) => {
	const units = {
		temperature: ["c", "f"],
		speed: ["kph", "mph"],
	}

	const style = {
		transform: `translateX(${isOpen ? "0" : "-100"}%)`,
	}

	return (
		<div className="menu" style={style}>
			<section id="location">
				<HiOutlineLocationMarker />
				<p>Mumbai</p>
			</section>
			<section id="preferences">
				<Toggle
					setterFunction={setTemperature}
					values={units.temperature}
					label={"Temperature Units"}
				/>

				<Toggle
					setterFunction={setSpeed}
					values={units.speed}
					label={"Speed Units"}
				/>
			</section>
		</div>
	)
}

export default Menu
