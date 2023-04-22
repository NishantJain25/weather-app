import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { selectCurrentWeather } from "../../store/weather/weather.selector"
import { selectPreferences } from "../../store/preferences/preferences.selector"
import { TbMist, TbCloudFog, TbSunHigh, TbMoon } from "react-icons/tb"
import { BsCloudMoon } from "react-icons/bs"

import Illustration from "../illustration/illustration"
import "./weather-section.css"

const WeatherSection = ({ scroll }) => {
	const {
		feelslike_c,
		feelslike_f,
		is_day,
		temp_c,
		temp_f,
		wind_kph,
		wind_mph,
		humidity,
		cloud,
		air_quality,
		condition,
	} = useSelector(selectCurrentWeather)

	const { temperature, speed } = useSelector(selectPreferences)

	return (
		<section id="weather-section">
			<div className="row">
				<div id="illustration">
					<Illustration
						condition={condition ? condition.text : "Sunny"}
						isDay={is_day}
					/>
				</div>
				<div id="temperature-data">
					<h1>{temperature === "c" ? temp_c : temp_f}</h1>
					<span id="degree-icon">&#9900;</span>
					<span id="unit">{temperature.toUpperCase()}</span>
				</div>
			</div>
			<div className="row">
				<div id="condition">
					<p>{condition ? condition.text : "loading..."}</p>
				</div>
				<div id="other-temp-data">
					<p>
						Feels like {temperature === "c" ? feelslike_c : feelslike_f}
						<span id="degree-icon">&#9900;</span>
					</p>
				</div>
			</div>
			<div className="row" id="other-data">
				<div className="column">
					<p id="value">
						{speed === "kph" ? wind_kph : wind_mph} {speed.toUpperCase()}
					</p>
					<p id="title">Wind</p>
				</div>
				<div className="column">
					<p id="value">{humidity}%</p>
					<p id="title">Humidity</p>
				</div>
				<div className="column">
					<p id="value">{cloud}%</p>
					<p id="title">Cloud Cover</p>
				</div>
			</div>
		</section>
	)
}

export default WeatherSection
