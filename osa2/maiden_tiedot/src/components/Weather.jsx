
const Weather = ({countriesToShow, weather}) => {

    if(countriesToShow.length === 1 && weather) {
        const country = countriesToShow[0]
        const temperature = Math.round((weather.main.temp -272.15)*100)/100
        const icon = weather.weather[0].icon
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
        const wind = weather.wind.speed
       
        return(
            <div>
                <h2>Weather in {country.capital}</h2>
                <p>temperature {temperature} Celsius</p>
                <img src={iconUrl} />
                <p>wind {wind} m/s</p>
            </div>
        ) 
    }
}

export default Weather


