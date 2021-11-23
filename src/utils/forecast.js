const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8b075187f79ed5f98cd20f1bd5d04e6f&query=' + latitude + ',' + longtitude + '&units=f'
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to forecast services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                weather_description: body.current.weather_descriptions[0],
                temperatrue: body.current.temperature,
                chanse_of_rain: body.current.cloudcover,
            })
        }
    })
}

module.exports = forecast