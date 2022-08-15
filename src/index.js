import { renderWeatherInfo } from "./UI"
import "./style.css"
const userInput = document.querySelector("#users-Input")
const submitBtn = document.querySelector("#submit")

window.onload = loadUI()
submitBtn.addEventListener("click", handleSubmit)
userInput.addEventListener("keypress", onEnter)

function handleSubmit(e) {
  e.preventDefault()
  renderWeatherInfo()
}
function onEnter(e) {
  if (event.key === "Enter") {
    submitBtn.click()
  }
}

async function loadUI() {
  const display = document.querySelector(".display")
  await renderWeatherInfo("Sydney")
}
