const request = require('postman-request')
require('dotenv').config()

 const geocode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.MAP_BOX_KEY}&limit=1`
	request({ url, json: true }, (error, response) => {
		if (error)	{ // Checks for lower level errors, i.e.: No connection to api because of little or or no connection. 
			callback('Unable to connect to weather service.', null)
		} else if (response.body.features.length === 0) { // Verifies that the response has results
			callback('Unable to find location. Try another search.', null)
		}	else { // Data is being thrown into a callback function. 
			const data = response.body.features[0]
			callback(undefined, {
				 longitude: data.center[0],
				 latitude: data.center[1],
				 placeName: data.place_name,
			})
			// console.log(`Longitude: ${data.center[0]}, Latitude: ${data.center[1]}`)
		}	
	})
}

module.exports = geocode