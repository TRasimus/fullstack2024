import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    const alreadyAdded = persons.some(e => e.name === newName)

    if(alreadyAdded){
      alert(`${newName} is already added to phonebook`)
    }
    else {
      event.preventDefault()
    const personObject = {
      name: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
          name:
        <input 
          value={newName} 
          onChange={handleNameChange}
        />
        <button type="submit">add</button>
      </form>   
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
        <li key={person.name}>{person.name}</li>
        )}
      </ul>
    </div>
  )
}

export default App