import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { selectForecastedWeather } from "../../store/weather/weather.selector"
import InformationRow from "../information-row/information-row"
import "./forecast-row.css"

const ForecastRow = () => {
	const [index, setIndex] = useState(0)

	const forecastedData = useSelector(selectForecastedWeather)
	const pointerStyle = {
		left: `${25 + 50 * index}%`,
	}

	return (
		<div className="forecast-row">
			<div className="row" id="options">
				<div className="pointer" style={pointerStyle}></div>
				<button
					className={index === 0 ? "active" : ""}
					onClick={() => setIndex(0)}
				>
					Today
				</button>
				<button
					className={index === 1 ? "active" : ""}
					onClick={() => setIndex(1)}
				>
					Tomorrow
				</button>
			</div>
			{forecastedData.forecastday && (
				<InformationRow data={forecastedData.forecastday[index].hour} />
			)}
		</div>
	)
}

export default ForecastRow
