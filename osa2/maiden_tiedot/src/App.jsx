import { useState, useEffect } from 'react'
import './index.css'
import countryService from './services/countryService'
import Filter from './components/Filter'
import CountryList from './components/CountryList'
import CountryInfo from './components/CountryInfo'
import Weather from './components/Weather'


const App = () => {

  const [countries, setCountries] = useState([]) 
  const [countriesToShow, setCountriesToShow] = useState([]) 
  const [filter, setFilter] = useState('')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    countryService
      .getAllCountries()
      .then(allCountries => {
        setCountries(allCountries)
        setCountriesToShow(allCountries)
      })
  }, [])

  useEffect(() => {
      if (countriesToShow.length === 1) {
        const location = countriesToShow[0].capitalInfo.latlng
        countryService
          .getWeather(location)
          .then(weatherData => {
            setWeather(weatherData)
          })
      } 
  }, [countriesToShow])

  const handleFilterChange = (event) => {
    const newFilter = event.target.value
    setFilter(newFilter)
    const filteredCoutries = countries.filter(c => c.name.common.toLowerCase().includes(newFilter.toLowerCase()))
    setCountriesToShow(filteredCoutries)
  }

  const showCountryInfo = (name) => {
    const country = countries.filter(c => c.name.common === name)
    setCountriesToShow(country)
  }

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <CountryList countriesToShow={countriesToShow} showCountryInfo={showCountryInfo} />
      <CountryInfo countriesToShow={countriesToShow} />
      <Weather countriesToShow={countriesToShow} weather={weather} />
    </div>
  )
}

export default App