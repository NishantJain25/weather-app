import { createSelector } from "reselect"

const selectWeatherReducer = (state) => {
	return state.weather
}

export const selectCurrentWeather = createSelector(
	[selectWeatherReducer],
	(weather) => {
		if (weather.weatherData) {
			return weather.weatherData.current
		}
		return {}
	}
)
export const selectForecastedWeather = createSelector(
	[selectWeatherReducer],
	(weather) => {
		if (weather.weatherData) {
			return weather.weatherData.forecast
		}
		return {}
	}
)
export const selectCurrentLocation = createSelector(
	[selectWeatherReducer],
	(weather) => {
		if (weather.weatherData) {
			return weather.weatherData.location
		}
		return {}
	}
)
