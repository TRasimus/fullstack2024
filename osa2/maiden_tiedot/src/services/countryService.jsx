import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'
const api_key = import.meta.env.VITE_SOME_KEY

const getAllCountries = async () => {
  const request = axios.get(`${baseUrl}/all`)
  return request.then(response => response.data)
}

const getWeather = async (capitalLocation) => {
  const lat = capitalLocation[0]
  const lon = capitalLocation[1]
  const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
  return request.then(response => response.data)
}

export default { getAllCountries, getWeather}