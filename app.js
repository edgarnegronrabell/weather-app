const geocode = require('./utils/geocode')

console.log(geocode('San Juan, Puerto Rico', (error, data) => {
	if(error) {
		console.log('Error', error)
	} else {
		console.log('Data', data)
	}
}))

// const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=-66.0571+18.3744&units=f`
// request({ url, json: true }, (error, response) => {
// 	if (error) {
// 		console.log('Unable to connect to weather service.')
// 	} else if (response.body.error) {
// 		console.log('Unable to find location')
// 	} else {
// 		const data = response.body.current
// 		const degrees = data.temperature
// 		const feelsLike = data.feelslike
// 		const weatherDescriptions = data.weather_descriptions[0]
// 		console.log(`${weatherDescriptions}: It is currently ${degrees} degrees out. Feels like ${feelsLike} deg.`)
// 	}
// })
