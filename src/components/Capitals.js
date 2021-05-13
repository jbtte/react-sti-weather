import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import useFetch from './useFetch'
import Loader from './Loader'
import {  BrowserView,  MobileView } from "react-device-detect";

export default function Capitals ({setSelectedCity}) {
  const [ capitalsObject, setCapitalsObject ] = useState({})
  const { get } = useFetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&aqi=no&q=`)
  const leftCities = ['Rio de Janeiro', 'Sao Paulo', 'Belo Horizonte', 'Brasilia', 'Belem']
  const rightCities = ['Salvador', 'Curitiba', 'Fortaleza', 'Manaus', 'João Pessoa']

  useEffect(()=>{
    [...leftCities, ...rightCities].forEach(city=>{
      get(city)
    .then(data => {
      const cityData = {[city]:data.current}
      setCapitalsObject(prevState => ({...prevState, ...cityData}))
    })
    .catch(e => console.log(e))
    })
  },[])

  const tableTemplate = (cities) => {
    if (Object.keys(capitalsObject).length < 9) {
      return null
    }
    
    return (
      <Table  hover borderless>
        <thead>
          <tr>
            <th>Previsão</th>
            <th>Temp</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city, i) => {
         return ( <tr onClick={()=>setSelectedCity(city)} key={i}>
            <td><img src={capitalsObject[city].condition.icon} alt={capitalsObject[city].condition.text} /></td>
            <td>{capitalsObject[city].temp_c}º C</td>
            <td className="text-left">{city}</td>
          </tr>)
          })}
        </tbody>
      </Table>
    )
  }

  return (<div>
    <h2 className="text-left pl-5">Capitais</h2>
    <div className="capitals">
        <BrowserView>
          <div className="capitals-table d-md-flex justify-content-around">
            <div className="capitals-table-left">
              {Object.keys(capitalsObject).length > 9 ? tableTemplate(leftCities) : <Loader />}
            </div>
          <div className="capitals-table-right">
            {Object.keys(capitalsObject).length > 9 ? tableTemplate(rightCities):  <Loader />}
          </div>
      </div>
        </BrowserView>
        <MobileView>
        <div className="capitals-table col-12">
        {Object.keys(capitalsObject).length > 9 ? tableTemplate([...leftCities, ...rightCities]) : <Loader />}
        </div>
        </MobileView>
    </div>
  </div>
  )
}