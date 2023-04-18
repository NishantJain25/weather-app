import "./App.css"
import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { setWeatherData } from "./store/weather/weather.action"
import { selectCurrentWeather } from "./store/weather/weather.selector"
import Header from "./components/header/header"

function App() {
	const dispatch = useDispatch()
	const API_KEY = process.env.API_KEY
	const [bgColor, setBgColor] = useState("#82CAFF")
	const base_url = `http://api.weatherapi.com/v1/forecast.json?key=6fb6bd1382b8451cbda161610231204&q=Mumbai&days=3&aqi=yes&alerts=no`
	useEffect(() => {
		
		axios
			.get(base_url)
			.then((response) => {
				
				dispatch(setWeatherData(response.data))
				setBgColor(bgColors[response.data.current.condition.text.toLowerCase()])
			})
			.catch((error) => console.log(error))
	}, [])

	const { condition } = useSelector(selectCurrentWeather)
	
	useEffect(() => {
		if (condition) {
			setBgColor(bgColors[condition.text.toLowerCase()])
		}
	}, [condition])
	const bgColors = {
		night: "#13294B",
		day: "#82CAFF",
		raining: "#134761",
		cloudy: "#536878",
		mist: "#536878",
	}

	return (
		<div className="App" style={{ backgroundColor: `${bgColor}` }}>
			<Header />
			<Outlet />
		</div>
	)
}

export default App
