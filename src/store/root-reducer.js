import { combineReducers } from "redux"
import { weatherReducer } from "./weather/weather.reducer"
import { preferencesReducer } from "./preferences/preferences.reducer"
export const rootReducer = combineReducers({
	weather: weatherReducer,
	preferences: preferencesReducer,
})
