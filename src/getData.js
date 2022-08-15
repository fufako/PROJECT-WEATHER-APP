import { format } from "date-fns"

export async function getData() {
  const userInput = document.querySelector("#users-Input")
  validateInput(userInput)
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&APPID=b36c6d2968b56b6cac14c9e3a395fb53&units=metric`,
    { mode: "cors" }
  )
  const weatherData = await response.json()
  return weatherData
}
export function getTodayDate() {
  return format(new Date(), "EEEE, MMMM do")
}
function validateInput(userInput) {
  const validateInfo = document.querySelector(".validate-info")
  if (!/^[a-zA-Z]*$/.test(userInput.value) || userInput.value === "") {
    validateInfo.style.display = "block"
    validateInfo.innerHTML = `Location not found.<br>
    Search must be in the form of "City", "City, State" or "City, Country".`
  } else {
    validateInfo.style.display = "none"
  }
}
