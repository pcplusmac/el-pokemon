import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Pokedex from './pages/Pokedex';
import MyList from './pages/MyList';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import PokemondCard from './components/PokemonCard'
import PokeSolo from './pages/PokeSolo';
import { PokemonContextProvider } from './context/PokemonContext';
import PokemonCard from './components/PokemonCard';
import PokemonDetails from './components/PokemonDetails';


function App() {

  const [pokeState, setPokeState] = useState([])

  async function fecthPokes() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
    const data = await response.json()
    
    data.results.forEach(poke => fetchPokeDetails(poke.url))
  }

  async function fetchPokeDetails(url) {
    const res = await fetch(url)
    const data = await res.json()
    setPokeState(currentState => [...currentState, data])
  }

  useEffect(() => { fecthPokes() }, [])

  const mappedPokeCards = pokeState.map((poke, index) => <PokemondCard key={index} pokemon={poke} />)
  return (
    <div className="App">

      {/* <PokemonContextProvider>
        <PokemonCard />
        <PokemonDetails />
      </PokemonContextProvider> */}


      <Router>
        <Header />


        <Route exact path="/"><Home /></Route>
        <PokemonContextProvider>
          <Route path="/pokemonlist"><MyList /></Route>
          <Route exact path="/pokedex">
          <Pokedex pokeCards={mappedPokeCards} /></Route>
          <Route path="/pokedex/:name" component={PokeSolo} ></Route>
        </PokemonContextProvider>
        <Route path="/aboutus"><AboutUs /></Route>


      </Router>
    </div>
  );
}

export default App;
