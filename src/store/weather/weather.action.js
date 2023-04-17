import { WEATHER_ACTION_TYPES } from "./weather.types"

export const setWeatherData = (weatherData) => {
	return { type: WEATHER_ACTION_TYPES.SET_WEATHER_DATA, payload: weatherData }
}
