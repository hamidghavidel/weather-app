const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const errorMessage = document.querySelector('#error-message')
const locationMessage = document.querySelector('#location')
const weatherDescriptionMessage = document.querySelector('#weather-description')
const temperatureMessage = document.querySelector('#temperature')
const chanceOfRainMessage = document.querySelector('#chance-of-rain')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/weather?address=' + search.value).then((response) => {
        response.json().then((data) => {
            errorMessage.textContent = ''
            locationMessage.textContent = ''
            weatherDescriptionMessage.textContent = ''
            temperatureMessage.textContent = ''
            chanceOfRainMessage.textContent = ''
            if (data.message) {
                errorMessage.textContent = data.message
            } else if (data.error) {
                errorMessage.textContent = data.error
            } else {
                locationMessage.textContent = 'Location: ' + data.location.toString()
                weatherDescriptionMessage.textContent = 'Weather Description: ' + data.forecastData.weather_description.toString()
                temperatureMessage.textContent = 'Temperature: ' + data.forecastData.temperatrue.toString()
                chanceOfRainMessage.textContent = 'Chance Of Rain: ' + data.forecastData.chanse_of_rain.toString()
            }
        })
    })
})