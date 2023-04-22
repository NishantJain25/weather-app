import React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { selectForecastedWeather } from "../../store/weather/weather.selector"
import { selectPreferences } from "../../store/preferences/preferences.selector"
import { getDayFromDate, getCurrentDay } from "../../helper/getDateTime.helper"
import "./daily-forecast-section.css"

const DailyForecastSection = () => {
	const { forecastday } = useSelector(selectForecastedWeather)
	const { temperature } = useSelector(selectPreferences)

	return (
		<section id="daily-forecast-section">
			<h1>Next 3 days</h1>
			<div className="grid-container">
				{forecastday &&
					forecastday.map((dailyData, index) => {
						const currentDay = getCurrentDay()
						const day = getDayFromDate(dailyData.date)

						return (
							<NavLink to={`/weather-forecast/${index}`} key={index}>
								<div className="grid-row">
									<div id="day">{day === currentDay ? "Today" : day}</div>
									<div id="humidity">{dailyData.day.avghumidity}%</div>
									<div id="condition">
										<img
											src={dailyData.day.condition.icon}
											alt="day-condition"
										/>
									</div>
									<div id="condition">
										<img
											src={dailyData.hour[20].condition.icon}
											alt="night-condition"
										/>
									</div>
									<div id="max-temp">
										{temperature === "c"
											? dailyData.day.maxtemp_c
											: dailyData.day.maxtemp_f}
										<span>&#9900;</span>
									</div>
									<div id="min-temp">
										{temperature === "c"
											? dailyData.day.mintemp_c
											: dailyData.day.mintemp_f}
										<span>&#9900;</span>
									</div>
								</div>
							</NavLink>
						)
					})}
			</div>
		</section>
	)
}

export default DailyForecastSection
