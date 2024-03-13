
const CountryList = ({countriesToShow, showCountryInfo}) => {

    if (countriesToShow.length > 10 ) {
        return(
            <div>
            Too many matches, specify another filter
            </div>
        )
    }

    if (1 < countriesToShow.length  && countriesToShow.length <= 10) {
        return(
            <ul className='no-bullets'>
            {countriesToShow.map(country => 
            <li key={country.name.common}>{country.name.common}
            <button onClick= {() => showCountryInfo(country.name.common)}>show</button>
            </li>
            )}
            </ul>
        ) 
    } 

    // if there is only one country to show, nothing is returned
}

export default CountryList

