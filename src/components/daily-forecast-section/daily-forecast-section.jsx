import React from "react"
import { useSelector } from "react-redux"
import { selectForecastedWeather } from "../../store/weather/weather.selector"
import { selectPreferences } from "../../store/preferences/preferences.selector"
import "./daily-forecast-section.css"

const DailyForecastSection = () => {
	const { forecastday } = useSelector(selectForecastedWeather)
	const { temperature } = useSelector(selectPreferences)
	const week = [
		"Sunday",
		"Monday",
		"Tueday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	]
	const currentDate = new Date()
	const currentDay = currentDate.getDay()

	return (
		<section id="daily-forecast-section">
			<h1>Next 3 days</h1>
			<div className="grid-container">
				{forecastday &&
					forecastday.map((dailyData, key) => {
						const date = new Date(dailyData.date)

						const day =
							date.getDay() === currentDay ? "Today" : week[date.getDay()]

						return (
							<div className="grid-row" key={key}>
								<div id="day">{day}</div>
								<div id="humidity">{dailyData.day.avghumidity}%</div>
								<div id="condition">
									<img src={dailyData.day.condition.icon} alt="day-condition" />
								</div>
								<div id="condition">
									<img
										src={dailyData.hour[20].condition.icon}
										alt="night-condition"
									/>
								</div>
								<div id="max-temp">{temperature === "c" ? dailyData.day.maxtemp_c :dailyData.day.maxtemp_f }</div>
								<div id="min-temp">{temperature === "c" ? dailyData.day.mintemp_c :dailyData.day.mintemp_f }</div>
							</div>
						)
					})}
			</div>
		</section>
	)
}

export default DailyForecastSection
