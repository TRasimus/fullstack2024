import CountryInfo from "./CountryInfo"

const Countries = ({countriesToShow}) => {

    if (countriesToShow.length > 10 ) {
        return(
            <div>
            Too many matches, specify another filter
            </div>
        )
    }

    if (countriesToShow.length === 1) {
        return(
            <div>
            <CountryInfo country={countriesToShow[0]}/>
            </div>
        ) 
    }

    return(
        <ul className='no-bullets'>
        {countriesToShow.map(country => 
        <li key={country.name.common}>{country.name.common}</li>
        )}
        </ul>
    ) 
}

export default Countries

