import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Search from './Search'
import useFetch from './useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp,  faArrowDown, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function City ({selectedCity, setSelectedCity}) {
const [cityObject, setCityObject] = useState({})
const[load, setLoad] = useState(false)
const { get } = useFetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&days=7&aqi=no&alerts=no&q=`)

useEffect(() =>{
  if(selectedCity){
    get(selectedCity)
    .then(data =>{ 
    setCityObject(data)
    setLoad(true)
  })
    .catch( e=> console.log(e))
  }
}, [selectedCity])

const weekDay = (timestamp) => {
  console.log(timestamp)
  return new Date(timestamp*1000).toLocaleDateString('pt-br', { weekday: 'long' })
}

const handleCityClose = () =>{
  setSelectedCity("")
  setLoad(false)
}

const cardForecast = (cityObject) =>{
  return (
    <Card className="mx-md-auto text-dark forecast-card-bg p-3 pl-5 col-md-7 col-sm-12">
      <Card.Body>
      <Card.Subtitle className="mb-3 text-muted text-left city-card-sm d-flex justify-content-between">
        <div>{cityObject.location.name} - {cityObject.location.region}</div>
        <div><FontAwesomeIcon 
                    icon={faTimes} 
                    className='city-card-dark-orange'
                    onClick={handleCityClose}/></div>
        </Card.Subtitle>
        <Card.Title className="text-dark text-left city-card-lg">
          {cityObject.current.temp_c}ºC {' '}
          {cityObject.current.condition.text} {' '}
          <img src={cityObject.current.condition.icon} alt={cityObject.current.condition.text} />
          </Card.Title>
        <Card.Text className="d-flex">
          <div className='text-dark city-card-sm text-left mr-4'>
            <div className='my-1'>
            <FontAwesomeIcon icon={faArrowUp} className='city-card-dark-orange'/>{cityObject.forecast.forecastday[0].day.maxtemp_c}ºC  
            <FontAwesomeIcon icon={faArrowDown} className='city-card-dark-orange' /> {cityObject.forecast.forecastday[0].day.mintemp_c}ºC</div>
            <div>Vento: {cityObject.current.wind_kph}km/h</div>
          </div>
          <div className='text-dark city-card-sm text-left'>
            <div className='my-1'>Sensação {cityObject.current.feelslike_c}ºC</div>
            <div>Umidade {cityObject.current.humidity}%</div>
          </div>
        </Card.Text>
        <hr className='city-card-orange'/>
        <div className='d-flex justify-content-around city-card-sm'>
          {cityObject.forecast.forecastday.map(day => {
            return (
              <div> 
                <div className='mb-1'>{weekDay(day.date_epoch)}</div>
                <div className='city-card-dark-orange'>
                  {`${Math.trunc(day.day.mintemp_c)}º ${Math.trunc(day.day.maxtemp_c)}º`} 
                  </div>
              </div>
            )
          })
          }
        </div>
      </Card.Body>
    </Card>
  )
}

  return (<>
    {load && cardForecast(cityObject)}
    <Search setSelectedCity={setSelectedCity}/>
  </>)
}