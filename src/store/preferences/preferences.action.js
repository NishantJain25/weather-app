import { PREFERENCES_ACTION_TYPES } from "./preferences.types"

export const setTemperature = (temperature) => {
	return {
		type: PREFERENCES_ACTION_TYPES.SET_TEMPERATURE_UNIT,
		payload: temperature,
	}
}
export const setSpeed = (speed) => {
	return {
		type: PREFERENCES_ACTION_TYPES.SET_SPEED_UNIT,
		payload: speed,
	}
}
