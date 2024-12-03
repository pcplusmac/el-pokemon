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
import PokeItem from './pages/PokeItem';


function App() {

  
  return (
    <div id="top" className="App">
      
      <Router>
        <Header />
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
          {/* <Route path="/pokedex/:name" component={PokeSolo} /> */}
          <Route path="/pokedex/:name">
            <PokeSolo />
          </Route>
          <Route path = "/pokemonlist/:name">
            <PokeItem />
          </Route>
        </PokemonContextProvider>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
      
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
      </Router>
    </div>
  );
}

export default App;
