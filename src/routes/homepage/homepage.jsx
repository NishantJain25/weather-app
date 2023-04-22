import React, { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { setWeatherData } from "../../store/weather/weather.action"
import "./homepage.css"
import WeatherSection from "../../components/weather-section/weather-section"
import ForecastRow from "../../components/forecast-row/forecast-row"
import DailyForecastSection from "../../components/daily-forecast-section/daily-forecast-section"
import RainInfographicSection from "../../components/rain-infographic-section/rain-infographic-section"

const Homepage = () => {
	return (
		<div className="container" id="homepage">
			<WeatherSection />
			<ForecastRow />
			<DailyForecastSection />
			<RainInfographicSection />
		</div>
	)
}

export default Homepage
