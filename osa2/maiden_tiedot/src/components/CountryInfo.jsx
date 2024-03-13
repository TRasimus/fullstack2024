
const CountryInfo = ({countriesToShow}) => {

    if (countriesToShow.length === 1) {
        const country = countriesToShow[0]
        const languages = Object.entries(country.languages)

        return(
            <div>
                <h1>{country.name.common}</h1>
                <ul className="no-bullets">
                    <li key="capital">capital {country.capital}</li>
                    <li key="area">area {country.area}</li>
                </ul>
                <h2>languages:</h2>
                <ul>
                    {languages.map(language => 
                    <li key={language[0]}>{language[1]}</li>
                    )}
                </ul>
                <img src={country.flags.png} alt={country.flags.alt} />
            </div> 
        ) 
    }  
}

export default CountryInfo
