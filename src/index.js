import { renderWeatherInfo } from "./UI"
import "./style.css"
const submitBtn = document.querySelector("#submit")

console.log(submitBtn)
submitBtn.addEventListener("click", renderWeatherInfo)

// iconImg.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
// console.log(weatherData)
// console.log(temperature)
// console.log(feelsLike)
// console.log(minTemperature)
// console.log(maxTemperature)
// console.log(weatherDescription)
// console.log(weatherMain)
