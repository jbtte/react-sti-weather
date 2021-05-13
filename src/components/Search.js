import { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function Search ({setSelectedCity}) {
const [city, setCity] = useState('')

const handleCitySearch = () =>{
  setSelectedCity(city)
  setCity("")
}

  return ( <>
  <InputGroup className="mb-3 col-sm-12 col-md-7 mx-auto mt-3">
    <FormControl
      placeholder="Insira aqui o nome da cidade"
      aria-label="Nome da cidade"
      aria-describedby="basic-addon2"
      value = {city}
      onChange = {(event) => setCity(event.target.value)}
    />    
    <InputGroup.Append>
    <Button variant="white" onClick={handleCitySearch}>
        <FontAwesomeIcon icon={faSearch} />
    </Button>
    </InputGroup.Append>
  </InputGroup>

</>)
}