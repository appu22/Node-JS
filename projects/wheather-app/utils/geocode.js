const request = require("request")

const geocode = (address, callabck) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYXBwdTUiLCJhIjoiY2twdnE5azRjMWw4dzJ2cWtwdnVjcTE5aiJ9.qGvsrHlH6i-G0_I9Q1QVHw'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callabck('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callabck('Unable to find location. Try another search.', undefined)
        } else {
            callabck(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }

    })

}

module.exports=geocode


