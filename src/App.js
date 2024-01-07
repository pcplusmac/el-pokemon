import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Pokedex from './pages/Pokedex';
import PokemonList from './pages/PokemonList';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      
      <Router>
        <NavBar />
        <Route path="/"><Home /></Route>
        <Route path="/pokemonlist"><PokemonList /></Route>
        <Route path="/pokedex"><Pokedex /></Route>
        <Route path="/aboutus"><AboutUs /></Route>
      </Router>
      
      
      
      


      
    </div>
  );
}

export default App;
