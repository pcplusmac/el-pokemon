import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <NavBar />
      <PokemonList />
      <AboutUs />
      <Home />
      <Pokedex />


      
    </div>
  );
}

export default App;
