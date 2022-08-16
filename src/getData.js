import { format, addHours } from "date-fns"
import { showErrorMsg, hideErrorMsg } from "./UI"
import { formatInTimeZone } from "date-fns-tz"

export async function getData(defaultCity) {
  const userInput = document.querySelector("#users-Input")
  let response = ""

  response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${
      userInput?.value || "Sydney"
      // userInput?.value ? userInput.value : "Sydney"
      // userInput && userInput.value ? userInput.value : "Sydney"
    }&APPID=b36c6d2968b56b6cac14c9e3a395fb53&units=metric`,
    { mode: "cors" }
  )
  if (userInput.value) {
    validateInput(userInput)
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
    console.log("errorMSG")
    showErrorMsg()
    return console.error()
  } else {
    console.log("errorMSG")
    hideErrorMsg()
  }
}
