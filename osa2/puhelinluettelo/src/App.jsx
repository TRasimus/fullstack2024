import { useState } from 'react'

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
      <div>filter shown with<input value={filter} onChange={handleFilterChange}/></div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>name:<input value={newName} onChange={handleNameChange}/></div>
        <div>number:<input value={newNumber} onChange={handleNumberChange}/></div>
        <button type="submit">add</button>
      </form>   
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => 
          <li key={person.name}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App