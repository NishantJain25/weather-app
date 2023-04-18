import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectForecastedWeather } from "../../store/weather/weather.selector"
import { selectPreferences } from "../../store/preferences/preferences.selector"
import { getDate, getCurrentHour } from "../../helper/getDateTime.helper"
import "./detail-page.css"

const DetailPage = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [weatherData, setWeatherData] = useState({})
	const { viewDay } = useParams()
	const { forecastday } = useSelector(selectForecastedWeather)
	const { temperature, speed } = useSelector(selectPreferences)
	useEffect(() => {
		if (forecastday) {
			setWeatherData(forecastday[viewDay])
			setIsLoading(false)
		}
	}, [forecastday])
	const { astro, date, hour, day } = weatherData
	console.log(weatherData)
	const currentHour = getCurrentHour()
	return (
		<div className="container">
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div id="details-page">
					<p id="current-date">{getDate(date)}</p>
					<div id="temperature-data">
						<h1>
							{temperature === "c"
								? hour[currentHour].temp_c
								: hour[currentHour].temp_f}
						</h1>
						<span id="degree-icon">&#9900;</span>
						<span id="unit">{temperature.toUpperCase()}</span>
					</div>
					<p>
						{day &&
							`${
								temperature === "c"
									? day.maxtemp_c + " / " + day.mintemp_c
									: day.maxtemp_f + " / " + day.mintemp_f
							}, ${hour[currentHour].condition.text}`}
					</p>
					<div className="information-container">
						<div className="grid-container">
							<div className="grid-row">
								<p>Sunrise</p>
								<p>{astro.sunrise.toLowerCase()}</p>
							</div>
							<div className="grid-row">
								<p>Sunset</p>
								<p>{astro.sunset.toLowerCase()}</p>
							</div>
							<div className="grid-row">
								<p>Moonrise</p>
								<p>{astro.moonrise.toLowerCase()}</p>
							</div>
							<div className="grid-row">
								<p>Moonset</p>
								<p>{astro.moonset.toLowerCase()}</p>
							</div>
							<div className="grid-row">
								<p>Wind</p>
								<p>
									{hour[currentHour][
										speed === "kph" ? "wind_kph" : "wind_mph"
									] +
										" " +
										speed}
								</p>
							</div>
							<div className="grid-row">
								<p>Humidity</p>
								<p>{hour[currentHour].humidity + " %"}</p>
							</div>
							<div className="grid-row">
								<p>UV</p>
								<p>{hour[currentHour].uv}</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default DetailPage
