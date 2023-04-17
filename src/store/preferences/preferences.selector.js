import { createSelector } from "reselect"

const selectPreferencesReducer = (state) => {
	return state.preferences
}

export const selectPreferences = createSelector(
	[selectPreferencesReducer],
	(preferences) => {
		if (preferences.preferences) {
			return preferences.preferences
		}
	}
)
