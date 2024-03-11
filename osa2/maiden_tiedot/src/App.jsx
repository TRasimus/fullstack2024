import { useState, useEffect } from 'react'
import './index.css'
import countryService from './services/countryService'
import Countries from './components/Countries'
import Filter from './components/Filter'

const App = () => {

  const [countries, setCountries] = useState([]) 
  const [countriesToShow, setCountriesToShow] = useState([]) 
  const [filter, setFilter] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(allCountries => {
        setCountries(allCountries)
        setCountriesToShow(allCountries)
      })
  }, [])

  const handleFilterChange = (event) => {
    const newFilter = event.target.value
    setFilter(newFilter)
    const filteredCoutries = countries.filter(c => c.name.common.toLowerCase().includes(newFilter.toLowerCase()))
    setCountriesToShow(filteredCoutries)
  }

  const showCountry = (name) => {
    const country = countries.filter(c => c.name.common === name)
    setCountriesToShow(country)
  }

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <Countries countriesToShow={countriesToShow} showCountry={showCountry} />
    </div>
  )
}

export default App