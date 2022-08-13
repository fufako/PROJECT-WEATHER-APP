import { format } from "date-fns"

export async function getData() {
  const userInput = document.querySelector("#users-Input")
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
