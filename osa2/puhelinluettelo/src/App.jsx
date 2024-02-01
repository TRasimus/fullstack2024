import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [personsToShow, setPersonsToShow] = useState(persons)

  const handleFilterChange = (event) => {
    const newFilter = event.target.value
    setFilter(newFilter)
    const filteredPersons = persons.filter(p => p.name.toLowerCase().includes(newFilter.toLowerCase()))
    setPersonsToShow(filteredPersons)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    const alreadyAdded = persons.some(e => e.name === newName)

    if(alreadyAdded){
      alert(`${newName} is already added to phonebook`)
    }
    else {
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNumber
      }
    const updatedPersons = persons.concat(personObject)
    setPersons(updatedPersons)
    setNewName('')
    setNewNumber('')
    setPersonsToShow(updatedPersons)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h3>add a new</h3>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange}
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange}
        />
      <h3>Numbers</h3>
      <Persons personsToShow= {personsToShow}/>
    </div>
  )
}

export default App