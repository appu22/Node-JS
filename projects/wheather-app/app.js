const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Mugalkhod Belagavi', (error, data) => {
        // console.log('Error --> : ', error)
        // console.log('Data -->  : ', data)
        if(error){
            return console.log(error);
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
         
            if(error){
                return console.log(error);
            }
            // console.log('Error --> ', error)
            // console.log('Data-- > ', data)
            console.log(data.location);
            console.log(forecastData);
        })

    })





// const url = "http://api.weatherstack.com/current?access_key=476e15e6ddef18154695be2ca2ec0270&query=&query=28.600,-77.200&units=s"

// request({ url: url, json: true }, (error, response) => {
// console.log(response);
// const data = JSON.parse(response.body)
// console.log(data.current);
//     if (error) {
//         console.log('Unable to connect weather service ..');
//     } else if (response.body.error) {
//         console.log('Unable to find location ');
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. its currently  temperature : ' + response.body.current.temperature + ' degrees out.');
//         console.log('its feelslike : ' + response.body.current.feelslike + ' degrees out.')
//     }
// })


// const gecodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXBwdTUiLCJhIjoiY2twdnE5azRjMWw4dzJ2cWtwdnVjcTE5aiJ9.qGvsrHlH6i-G0_I9Q1QVHw'

// request({ url: gecodingURL, json: true }, (error, response) => {

//     if (error) {
//         console.log('Unable to connect connect Location Service. ');
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to connect find location. Try anoher search. ');
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const langtitude = response.body.features[0].center[1]
//         console.log(latitude, langtitude);
//     }
// })
//






