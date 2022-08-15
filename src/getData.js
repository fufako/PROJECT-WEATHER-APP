import { format, addHours } from "date-fns"
import { showErrorMsg, hideErrorMsg } from "./UI"
import { formatInTimeZone } from "date-fns-tz"

export async function getData(defaultCity) {
  const userInput = document.querySelector("#users-Input")
  let response = ""
  if (!defaultCity) {
    validateInput(userInput)
    response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&APPID=b36c6d2968b56b6cac14c9e3a395fb53&units=metric`,
      { mode: "cors" }
    )
    if (response.status === 404) {
      showErrorMsg()
      return
    }
  } else {
    response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Sydney&APPID=b36c6d2968b56b6cac14c9e3a395fb53&units=metric`,
      { mode: "cors" }
    )
  }
  const weatherData = await response.json()
  return weatherData
}
export function getTodayDate() {
  return format(new Date(), "EEEE, MMMM do")
}
export function getTimeOfDay(weatherData) {
  const hours = weatherData.timezone / 60 / 60 - 2
  const timeOfDay = addHours(new Date(), hours)
  return timeOfDay
}
function validateInput(userInput) {
  const stringToTest = userInput.value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
  if (
    !/^.*(?=.{8,})(?=.*[a-zA-Z\\u0080-\\uFFFF])(?=.*\d).*$/.test(
      stringToTest.normalize("NFD").replace(/\p{Diacritic}/gu, "")
    ) == false ||
    stringToTest === ""
  ) {
    showErrorMsg()
    return console.error()
  } else {
    hideErrorMsg()
  }
}
