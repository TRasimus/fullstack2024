

const Persons = ({personsToShow, removePerson}) => {
    return (
        <ul>
            {personsToShow.map(person => 
            <li key={person.name}>{person.name} {person.number} 
             <Button text="delete" handleClick={() => removePerson(person.id)}/>
            </li>
            )}
        </ul>
    )
}

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

export default Persons

