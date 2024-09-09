import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Pokedex from './pages/Pokedex';
import MyList from './pages/MyList';
import Header from './components/Header';
import Footer from './components/Footer';
import PokeSolo from './pages/PokeSolo';
import { PokemonContextProvider } from './context/PokemonContext';
import PokemonDetails from './components/PokemonDetails';


function App() {

  
  return (
    <div className="App">
      
      <Router>
        <Header id="top"/>
        <Route exact path="/">
          <Home />
        </Route>
        <PokemonContextProvider>
          <Route path="/pokemonlist">
            <MyList />
          </Route>
          <Route exact path="/pokedex">
            <Pokedex />
          </Route>
          <Route path="/pokedex/:name" component={PokeSolo} />
        </PokemonContextProvider>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
      </Router>
      <div style={{
        margin: "1px",
        padding: "1px",
        textAlign:"center"
      }}>
        <a href='#top' style={{
            color: "orange",
            fontSize:"30px",
            weight: "bold",
            
          }}
        > 
          back on top
        </a>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
