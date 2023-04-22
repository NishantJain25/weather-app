const week = [
	"Sunday",
	"Monday",
	"Tueday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
]

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]
//Returns the day of the given date
export const getDayFromDate = (date) => {
	const dateObject = new Date(date)
	const currentDay = getCurrentDay()
	const day = dateObject.getDay()
	return week[day]
}

//Returns the current day
export const getCurrentDay = () => {
	const currentDate = new Date()
	const currentDay = currentDate.getDay()
	return week[currentDay]
}

// Returns the int value of current hour (for eg. input = 6:30pm, output = 18)
export const getCurrentHour = () => {
	const date = new Date()
	const currentHour = date.getHours()
	return currentHour
}

export const getDate = (date) => {
	const dateObject = new Date(date)
	console.log(dateObject.getDate())
	const day = dateObject.getDate()
	const month = dateObject.getMonth()
	const year = dateObject.getFullYear()
	const dateString = day + "th " + months[month] + ", " + year
	return dateString
}
