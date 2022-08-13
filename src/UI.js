import { getData, getTodayDate } from "./getData"
export async function renderWeatherInfo() {
  const iconImg = document.querySelector("#icon")

  const weatherData = await getData()
  console.log(getTodayDate())

  const todaysDate = getTodayDate()
  console.log(weatherData)
  const weatherDescription = weatherData.weather[0].description
  const weatherMain = weatherData.weather[0].main
  const weatherIcon = weatherData.weather[0].icon
  const weatherCityName = weatherData.name
  console.log(weatherCityName)

  const weatherTemperature = weatherData.main.temp.toFixed()
  const weatherFeelsLike = weatherData.main.feels_like.toFixed()
  const weatherMinTemperature = weatherData.main.temp_min.toFixed()
  const weatherMaxTemperature = weatherData.main.temp_max.toFixed()

  const date = document.querySelector(".date")
  const description = document.querySelector(".description")
  const city = document.querySelector(".city")
  const temperature = document.querySelector(".temperature")

  const maxTemp = document.querySelector(".max-temp")
  const minTemp = document.querySelector(".min-temp")
  const feelsLike = document.querySelector(".feels-like")

  description.innerHTML = capitalizeFirstLetter(weatherDescription)
  city.innerHTML = weatherCityName
  temperature.innerHTML = weatherTemperature + " °C"
  date.innerHTML = todaysDate
  maxTemp.innerHTML = weatherMaxTemperature + " °C"
  minTemp.innerHTML = weatherMinTemperature + " °C"
  feelsLike.innerHTML = weatherFeelsLike + " °C"
  iconImg.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
