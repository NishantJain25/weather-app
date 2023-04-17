import { PREFERENCES_ACTION_TYPES } from "./preferences.types"

const INITIAL_STATE = {
	preferences: {
		temperature: "c",
		speed: "kph",
	},
}

export const preferencesReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action

	switch (type) {
		case PREFERENCES_ACTION_TYPES.SET_TEMPERATURE_UNIT:
			return {
				...state,
				preferences: { ...state.preferences, temperature: payload },
			}
		case PREFERENCES_ACTION_TYPES.SET_SPEED_UNIT:
			return { ...state, preferences: { ...state.preferences, speed: payload } }
		default:
			return state
	}
}
