const request = require('request')

const forcast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=476e15e6ddef18154695be2ca2ec0270&query=' + latitude + ',' + longitude + '&units=f'

    request({ url: url, json: true }, (error, response) => {
        console.log(response.body.weather_descriptions);
        if (error) {
            callback('Unable to connect weather  service! ', undefined)
        } else if (response.body.error) {
            callback('Unable to find location ', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. its currently  temperature : ' + response.body.current.temperature + ' degress out.' +
                'its feelslike : ' + response.body.current.feelslike + ' degress out.')
        }

    })
}


module.exports = forcast