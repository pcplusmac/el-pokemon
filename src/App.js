import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Pokedex from './pages/Pokedex';
import PokemonList from './pages/PokemonList';
import Header from './components/Header';
import { useState,useEffect } from 'react';

function App() {

  

  return (
    <div className="App">
      
      <Router>
        <Header />
        <Route exact path="/"><Home /></Route>
        <Route path="/pokemonlist"><PokemonList /></Route>
        <Route path="/pokedex"><Pokedex /></Route>
        <Route path="/aboutus"><AboutUs /></Route>
      </Router>
      
      
      
      


      
    </div>
  );
}

export default App;
