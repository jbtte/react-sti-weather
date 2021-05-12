import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <main className="col-sm-12 col-md-5 mx-auto">
        <h1 className="mb-5">Previsão do tempo</h1>
        <Search />
        <hr className="my-5"/>
      </main>

    </div>
  );
}

export default App;
