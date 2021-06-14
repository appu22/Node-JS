const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=476e15e6ddef18154695be2ca2ec0270&query=&query=28.600,-77.200&units=s"

request({ url: url, json: true }, (error, response) => {
    // console.log(response);
    // const data = JSON.parse(response.body)
    // console.log(data.current);
    console.log(response.body.current.weather_descriptions[0] +'. its currently  temperature : ' + response.body.current.temperature + ' degrees out.');
    console.log('its feelslike : ' + response.body.current.feelslike + ' degrees out.');


})









