import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [personsToShow, setPersonsToShow] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setPersonsToShow(initialPersons)
      })
  }, [])

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
    const alreadyAdded = persons.some(p => p.name === newName)

    const personObject = {
      name: newName,
      number: newNumber
    }

    if(alreadyAdded){
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const id = persons.find(p => p.name === newName).id
        personService
        .update(id, personObject)
        .then(returnedPerson => {
          const newPersons = persons.slice(0)
          newPersons[id] = returnedPerson
          setPersons(newPersons)
          setPersonsToShow(newPersons)
          setNewName('')
          setNewNumber('') 
      })   
    }
  }
    else {
      event.preventDefault()

      personService
        .create(personObject)
        .then(returnedPerson => {
          const newPersons = persons.concat(returnedPerson)
          setPersons(newPersons)
          setPersonsToShow(newPersons)
          setNewName('')
          setNewNumber('')
        })
    }
  }

const removePerson = (id)  => {
  const name = persons.filter(p => p.id === id)[0].name
  if (window.confirm(`Delete ${name}?`)) {
    personService
    .remove(id)
    const newPersons = persons.filter(p => p.id !== id)
    setPersons(newPersons)
    setPersonsToShow(newPersons)
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
      <Persons personsToShow= {personsToShow} removePerson={removePerson}/>
    </div>
  )
}

export default App