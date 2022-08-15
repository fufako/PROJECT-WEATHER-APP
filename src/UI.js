import Icon from "./images/icon1.png"
import { getData, getTodayDate } from "./getData"

//Import all the icons
function importAll(r) {
  let icons = {}
  r.keys().map((item, index) => {
    icons[item.replace("./", "")] = r(item)
  })
  return icons
}

const icons = importAll(
  require.context("./images/Icons", false, /\.(png|jpe?g|svg)$/)
)

export async function renderWeatherInfo(defaultCity) {
  let weatherData = ""

  if (!defaultCity) {
    weatherData = await getData()
  } else {
    weatherData = await getData(defaultCity)
  }

  const iconImg = document.querySelector("#icon")

  const todaysDate = getTodayDate()
  const weatherDescription = weatherData.weather[0].description
  const weatherMain = weatherData.weather[0].main
  const weatherIcon = weatherData.weather[0].icon
  const weatherCityName = weatherData.name

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
  iconImg.src = icons[weatherIcon + ".png"]
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
const validateInfo = document.querySelector(".validate-info")
export function showErrorMsg() {
  validateInfo.style.display = "block"
  validateInfo.innerHTML = `Location not found.<br>
    Search must be in the form of "City", "City, State" or "City, Country".`
}
export function hideErrorMsg() {
  validateInfo.style.display = "none"
}
