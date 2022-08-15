import { renderWeatherInfo } from "./UI"
import "./style.css"
const submitBtn = document.querySelector("#submit")
window.onload = renderWeatherInfo("Sydney")
console.log(submitBtn)
submitBtn.addEventListener("click", renderWeatherInfo)
