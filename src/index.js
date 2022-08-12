import { max, sum } from "lodash"
import "./style.css"
const userInput = document.querySelector("#users-Input")
const submitBtn = document.querySelector("#submit")

console.log(submitBtn)
submitBtn.addEventListener("click", getData)

async function getData() {
  const userInput = document.querySelector("#users-Input")
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&APPID=b36c6d2968b56b6cac14c9e3a395fb53&units=metric`,
    { mode: "cors" }
  )
  const weatherData = await response.json()

  const weatherDescription = await weatherData.weather[0].description
  const weatherMain = await weatherData.weather[0].main

  const temperature = (await weatherData.main.temp).toFixed()
  const feelsLike = (await weatherData.main.feels_like).toFixed()
  const minTemperature = (await weatherData.main.temp_min).toFixed()
  const maxTemperature = (await weatherData.main.temp_max).toFixed()

  console.log(weatherData)
  console.log(temperature)
  console.log(feelsLike)
  console.log(minTemperature)
  console.log(maxTemperature)
  console.log(weatherDescription)
  console.log(weatherMain)
}
