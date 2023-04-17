import { WEATHER_ACTION_TYPES } from "./weather.types"

const INITIAL_STATE = {
	weatherData: null,
}

export const weatherReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action

	switch (type) {
		case WEATHER_ACTION_TYPES.SET_WEATHER_DATA:
			return { ...state, weatherData: payload }
		default:
			return state
	}
}
