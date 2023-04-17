import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { setWeatherData } from "../../store/weather/weather.action"
import "./homepage.css"
import Header from "../../components/header/header"
import WeatherSection from "../../components/weather-section/weather-section"
import ForecastRow from "../../components/forecast-row/forecast-row"
import DailyForecastSection from "../../components/daily-forecast-section/daily-forecast-section"

const Homepage = () => {
	return (
		<div className="container">
			<Header />
			<WeatherSection />
			<ForecastRow />
			<DailyForecastSection />
		</div>
	)
}

export default Homepage
