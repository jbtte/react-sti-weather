import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import City from './components/City'
import Capitals from './components/Capitals'
import { useState } from 'react'


function App() {
  const [selectedCity, setSelectedCity] = useState('')
 
  return (
    <div className="App">
      <main className="col-sm-12 col-md-6 mx-auto">
        <h1 className="mb-5">Previsão do tempo</h1>
        <City setSelectedCity={setSelectedCity} selectedCity={selectedCity} />
        <hr className="my-5 main-white"/>
        <Capitals setSelectedCity={setSelectedCity}/>
      </main>

    </div>
  );
}

export default App;
